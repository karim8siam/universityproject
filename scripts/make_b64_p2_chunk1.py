# scripts/make_b64_p2_chunk1.py
# Batch 64 Part 2 Chunk 1: Universities 16 to 23

chunk1 = [
  # 16. Research Park at South Dakota State University (Row 922)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Research Park at South Dakota State University",
    "shortName": "Research Park at SDSU",
    "slug": "research-park-at-south-dakota-state-university",
    "location": "Brookings, South Dakota, United States",
    "website": "https://www.rpsdstate.com",
    "sourceRow": 922,
    "stats": {"established": "2008", "students": "11,500+", "international": "7%", "faculty": "620+"},
    "heroSummary": "The Research Park at South Dakota State University is a premier university research innovation district situated on 125 acres in Brookings, South Dakota, adjacent to SDSU's flagship campus. Renowned for agricultural biosciences, precision farming technology, animal disease diagnostics, and biofuel engineering.",
    "academicOverview": "The Research Park operates the Brookings Innovation Center, the POET Biorefining Laboratory, and the South Dakota Center for Farm Management. It connects SDSU's Jerome J. Lohr College of Engineering and College of Agriculture, Food and Environmental Sciences with multinational agribusiness and biotech corporations.",
    "researchAdmissions": "Academic opportunities at the Research Park operate in conjunction with South Dakota State University Graduate School. Applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA in an aligned STEM, agricultural, or computational discipline.",
    "opps": [
      {
        "title": "Ph.D. in Agricultural, Biosystems and Mechanical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships (GRA) providing full tuition remission and $28,000 annual stipend",
        "fee": "$35",
        "tuition": "100% covered by assistantship",
        "desc": "Cutting-edge doctoral research investigating bioprocessing engineering, autonomous agricultural machinery, bio-based polymers, and soil-water management in the Research Park.",
        "requirements": {"gpa": "3.0 undergraduate GPA and 3.25 graduate GPA in engineering or physical sciences", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE recommended", "papers": "Statement of research interests and technical publications", "references": "Three letters of recommendation"},
        "source": "https://www.sdstate.edu/agricultural-biosystems-engineering"
      },
      {
        "title": "Ph.D. in Plant Science (Precision Agriculture & Genomics)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "USDA NIFA Doctoral Fellowships with full tuition and $27,500 stipend",
        "fee": "$35",
        "tuition": "100% covered by fellowship",
        "desc": "Advanced study in crop molecular genetics, drought-resistant cereal breeding, remote sensing phenotyping, and precision fertilizer prescription modeling.",
        "requirements": {"gpa": "3.0 GPA with strong background in agronomy, genetics, or plant pathology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Research statement of purpose", "references": "Three academic references"},
        "source": "https://www.sdstate.edu/agronomy-horticulture-plant-science/phd-plant-science"
      },
      {
        "title": "Master of Science in Data Science (Agricultural Analytics)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Research Park AgTech Graduate Assistantships up to $16,000/year",
        "fee": "$35",
        "tuition": "$350/credit (Resident) / $670/credit (Non-resident)",
        "desc": "Hands-on data science master's focusing on satellite hyperspectral imaging, spatial analytics, yield predictive machine learning, and farm telemetry pipelines.",
        "requirements": {"gpa": "3.0 GPA with linear algebra, calculus, and programming coursework", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of purpose and technical resume", "references": "Two recommendations"},
        "source": "https://www.sdstate.edu/mathematics-statistics/ms-data-science"
      },
      {
        "title": "Master of Science in Biological Sciences (Microbiology)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Teaching and Research Assistantships with tuition coverage",
        "fee": "$35",
        "tuition": "$350/credit (Resident) / $670/credit (Non-resident)",
        "desc": "Researching antimicrobial resistance in zoonotic pathogens, microbial fermentation for biofuel synthesis, and rhizosphere soil metagenomics at the Animal Disease Research and Diagnostic Laboratory.",
        "requirements": {"gpa": "3.0 undergraduate GPA in biology or microbiology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Research goals statement", "references": "Three letters of recommendation"},
        "source": "https://www.sdstate.edu/biology-microbiology"
      },
      {
        "title": "Bachelor of Science in Precision Agriculture",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Raven Precision Agriculture Scholarships up to $5,000/year",
        "fee": "$20",
        "tuition": "$9,200/year (In-state) / $12,800/year (Out-of-state)",
        "desc": "First dedicated precision agriculture four-year degree in the United States, training students in autonomous guidance systems, drone sensor mapping, and agricultural big data management in the Raven Precision Agriculture Center.",
        "requirements": {"gpa": "2.6 high school GPA with algebra and chemistry", "ielts": "TOEFL 71+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One counselor recommendation"},
        "source": "https://www.sdstate.edu/precision-agriculture"
      },
      {
        "title": "Brookings Innovation Center AgTech Commercialization Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$5,000 research stipend and incubator wet-lab workspace",
        "fee": "$0",
        "tuition": "Covered by Research Park at SDSU Innovation Endowment",
        "desc": "Commercialization fellowship partnering graduate researchers with startup founders to prototype and validate soil carbon sensors, biopesticides, and automated livestock health collars.",
        "requirements": {"gpa": "3.2 GPA in engineering, agronomy, or biotechnology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Commercialization concept proposal (2-3 pages)", "references": "Two faculty letters"},
        "source": "https://www.rpsdstate.com/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kasiviswanathan Muthukumarappan",
        "role": "Distinguished Professor of Agricultural and Biosystems Engineering",
        "department": "Department of Agricultural and Biosystems Engineering",
        "subject": "engineering",
        "bio": "Dr. Muthukumarappan is an internationally recognized expert in bioprocess engineering, extrusion processing, biomass pretreatment, and value-added agricultural product utilization."
      },
      {
        "name": "Dr. David Wright",
        "role": "Department Head & Professor of Agronomy, Horticulture and Plant Science",
        "department": "College of Agriculture, Food and Environmental Sciences",
        "subject": "environment",
        "bio": "Dr. Wright leads precision crop management research, studying rotational cropping systems, cover crops, and soil fertility dynamics across the Northern Great Plains."
      },
      {
        "name": "Dr. Jane Christopher-Hennings",
        "role": "Director & Professor of Veterinary and Biomedical Sciences",
        "department": "Animal Disease Research and Diagnostic Laboratory (ADRDL)",
        "subject": "biology",
        "bio": "Dr. Christopher-Hennings directs the state veterinary diagnostic lab, researching viral immunology, PRRS virus diagnostics in swine, and biosecurity protocols."
      }
    ]
  },

  # 17. Rivier University (Row 924)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Rivier University",
    "shortName": "Rivier University",
    "slug": "rivier-university-nashua",
    "location": "Nashua, New Hampshire, United States",
    "website": "https://www.rivier.edu",
    "sourceRow": 924,
    "stats": {"established": "1933", "students": "2,400+", "international": "7%", "faculty": "170+"},
    "heroSummary": "Rivier University is a leading private Catholic university founded by the Sisters of the Presentation of Mary, located on a scenic 68-acre campus in Nashua, New Hampshire. Renowned for its premier nursing and health professions school, cybersecurity, clinical psychology, and business administration.",
    "academicOverview": "Rivier features the modern Linda Robinson Fallon Family Center for Nursing and Health Sciences, the Cybersecurity Labs, and the modern Science and Innovation Center. Rivier is the largest provider of nurses in New Hampshire and anchors critical clinical pipelines throughout northern New England.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5 recommended) with test-optional application options. Graduate nursing and professional programs require an accredited bachelor's degree with a 3.0 GPA, active unencumbered nursing licenses (for MSN/DNP), and clinical background clearances.",
    "opps": [
      {
        "title": "Doctor of Nursing Practice (DNP)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Sister Madeleine of Jesus Nursing Fellowships up to $6,000",
        "fee": "$0",
        "tuition": "$795/credit hour",
        "desc": "Terminal clinical nursing degree preparing advanced practice nurses to lead healthcare transformation, translate clinical research into bedside practice, and shape health policy.",
        "requirements": {"gpa": "3.0 GPA in MSN from accredited institution, active RN license", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "DNP clinical scholarly project proposal", "references": "Three professional references"},
        "source": "https://www.rivier.edu/academics/online/programs/doctor-of-nursing-practice"
      },
      {
        "title": "Master of Science in Computer Science (Cybersecurity Focus)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Graduate Technology Leadership Awards up to $4,000",
        "fee": "$0",
        "tuition": "$680/credit hour ($24,480 total program)",
        "desc": "Rigorous software and security degree covering secure coding practices, cryptography, network penetration testing, cloud administration, and database architecture.",
        "requirements": {"gpa": "2.8 undergraduate GPA in computer science, mathematics, or STEM", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of technical intent and resume", "references": "Two recommendations"},
        "source": "https://www.rivier.edu/academics/graduate/programs/computer-science-ms"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN - Traditional)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Rivier Presidential Healthcare Scholarships up to $18,000/year",
        "fee": "$0",
        "tuition": "$36,900/year",
        "desc": "ACEN-accredited pre-licensure BSN program housed in the Fallon Center with clinical hospital rotations across Southern New Hampshire Health and St. Joseph Hospital.",
        "requirements": {"gpa": "3.0 high school GPA with chemistry and biology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing personal essay", "references": "Two academic recommendations"},
        "source": "https://www.rivier.edu/academics/undergraduate/programs/nursing-bs"
      },
      {
        "title": "Doctor of Psychology (Psy.D.) in Combined Health Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Assistantships with partial tuition remission and clinical stipends",
        "fee": "$50",
        "tuition": "$995/credit hour",
        "desc": "APA-accredited doctoral curriculum training health service psychologists in clinical neuropsychology, psychopathology assessment, pediatric psychology, and integrated hospital care.",
        "requirements": {"gpa": "3.2 GPA in undergraduate psychology or master's degree", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "General GRE optional", "papers": "Scholarly writing sample and clinical goals statement", "references": "Three letters of recommendation"},
        "source": "https://www.rivier.edu/academics/graduate/programs/doctor-of-psychology-psyd"
      },
      {
        "title": "Master of Business Administration (MBA) in Healthcare Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Executive Healthcare Management Grants up to $3,500",
        "fee": "$0",
        "tuition": "$680/credit hour ($24,480 total program)",
        "desc": "ACBSP-accredited curriculum educating hospital administrators in health informatics, clinical quality governance, healthcare financial analytics, and medical law.",
        "requirements": {"gpa": "2.75 undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE exempt", "papers": "Personal essay and resume", "references": "Two professional references"},
        "source": "https://www.rivier.edu/academics/graduate/programs/mba-in-healthcare-management"
      },
      {
        "title": "Fallon Center Clinical Healthcare Simulation Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$3,500 clinical research stipend and simulation laboratory supply budget",
        "fee": "$0",
        "tuition": "Covered by Fallon Center Research Endowment",
        "desc": "Graduate clinical research fellowship evaluating simulation debriefing models, emergency resuscitation handovers, and patient safety outcomes in acute care settings.",
        "requirements": {"gpa": "3.3 GPA in MSN, DNP, or Psy.D. programs", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Clinical simulation research proposal", "references": "Two clinical faculty letters"},
        "source": "https://www.rivier.edu/research/fallon-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Sister Paula Marie Buley, IHM",
        "role": "President & Professor of Higher Education Leadership",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Sister Paula has led the dramatic expansion of Rivier's campus facilities, spearheading the Science and Innovation Center and the Fallon Center for Nursing and Health Sciences."
      },
      {
        "name": "Dr. Paula Williams",
        "role": "Dean & Professor of Nursing and Health Professions",
        "department": "Division of Nursing and Health Professions",
        "subject": "biology",
        "bio": "Dr. Williams is an authority on nursing leadership, healthcare regulation, clinical simulation pedagogy, and interprofessional clinical education across New England."
      },
      {
        "name": "Dr. Paul A. Lizotte",
        "role": "Professor of English & Chair of Arts and Sciences",
        "department": "Division of Arts and Sciences",
        "subject": "arts-design",
        "bio": "Dr. Lizotte specializes in romantic British literature, narrative structure in clinical empathy training, and humanities integration in professional health education."
      }
    ]
  },

  # 18. Rocky Vista University Montana (Row 925)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Rocky Vista University Montana",
    "shortName": "RVU Montana",
    "slug": "rocky-vista-university-montana-billings",
    "location": "Billings, Montana, United States",
    "website": "https://www.rvu.edu",
    "sourceRow": 925,
    "stats": {"established": "2006", "students": "2,200+", "international": "3%", "faculty": "210+"},
    "heroSummary": "Rocky Vista University Montana College of Osteopathic Medicine (RVU-MCOM) is Montana's first comprehensive four-year medical school, located on an expansive modern medical campus in Billings, Montana. Celebrated for osteopathic manipulative medicine, rural primary care physician training, military medicine, and medical simulation.",
    "academicOverview": "RVU-MCOM features a 138,000-square-foot medical education building equipped with 16 osteopathic clinical skill suites, an advanced anatomical dissection lab, high-fidelity patient simulation theaters, and extensive research facilities. Students complete third- and fourth-year clinical clerkships across rural hospitals and regional healthcare systems in Montana, Wyoming, and Idaho.",
    "researchAdmissions": "Medical school admission is highly selective through AACOMAS. Applicants must complete an accredited bachelor's degree with prerequisite biology, chemistry, and physics laboratory courses, submit MCAT examination scores, and demonstrate clinical healthcare shadowing and rural medicine commitment.",
    "opps": [
      {
        "title": "Doctor of Osteopathic Medicine (DO)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Montana Rural Physician Incentive Grants and RVU Merit Endowments up to $20,000/year",
        "fee": "$60",
        "tuition": "$63,200/year",
        "desc": "COCA-accredited four-year medical degree curriculum integrating osteopathic principles, anatomical sciences, pathophysiological systems, and extensive rural hospital clinical rotations.",
        "requirements": {"gpa": "3.5+ cumulative and science GPA with competitive MCAT score (median 506)", "ielts": "TOEFL 90+ or English fluency", "gre": "MCAT required", "papers": "AACOMAS personal statement and RVU secondary application", "references": "Three letters of recommendation (one practicing physician, DO preferred)"},
        "source": "https://www.rvu.edu/mcom"
      },
      {
        "title": "Master of Science in Biomedical Sciences (MSBS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Biomedical Dean's Scholarships up to $5,000",
        "fee": "$50",
        "tuition": "$26,800/program",
        "desc": "One-year intensive post-baccalaureate curriculum designed to prepare aspiring medical students with graduate-level medical gross anatomy, neuroanatomy, biochemistry, and pharmacology.",
        "requirements": {"gpa": "2.8 GPA in undergraduate pre-medical coursework", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "MCAT or GRE scores accepted", "papers": "Personal statement and career goals", "references": "Two academic recommendations"},
        "source": "https://www.rvu.edu/academics/biomedical-sciences"
      },
      {
        "title": "Master of Physician Assistant Studies (MPAS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-11-01",
        "deadlineText": "November 1, 2026",
        "funding": "Rural Health PA Fellowships up to $8,000",
        "fee": "$75",
        "tuition": "$41,200/year",
        "desc": "ARC-PA-accredited 28-month clinical curriculum preparing primary care PAs with specialized tracks in rural and frontier emergency medicine and wilderness healthcare.",
        "requirements": {"gpa": "3.0 science GPA with 1,000+ hours of direct hands-on patient care", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "PA-CAT or GRE required", "papers": "CASPA essay and personal narrative", "references": "Three clinical recommendations"},
        "source": "https://www.rvu.edu/academics/physician-assistant"
      },
      {
        "title": "Rural Medicine & Frontier Healthcare Honors Track",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$8,000 annual honors stipend plus clinical travel housing support",
        "fee": "$0",
        "tuition": "Embedded in DO curriculum",
        "desc": "Specialized honors immersion educating medical students in critical access hospital operations, wilderness trauma management, point-of-care ultrasound, and tribal health clinics in Montana.",
        "requirements": {"gpa": "Enrolled RVU medical student with demonstrated passion for rural medical practice", "ielts": "English fluency", "gre": "Exempt", "papers": "Rural health commitment essay", "references": "Two medical faculty endorsements"},
        "source": "https://www.rvu.edu/tracks/rural-medicine"
      },
      {
        "title": "Military Medicine Honors Track",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "DoD Health Professions Scholarship Program (HPSP) full tuition waiver plus $2,700/month stipend",
        "fee": "$0",
        "tuition": "100% covered by HPSP military scholarship",
        "desc": "Elite military medical training curriculum covering combat casualty care, disaster triage, battlefield hyperbaric medicine, and flight surgeon fundamentals.",
        "requirements": {"gpa": "Accepted RVU medical student with DoD military commissioning", "ielts": "English fluency", "gre": "Exempt", "papers": "Military medical service motivation statement", "references": "Military and academic letters"},
        "source": "https://www.rvu.edu/tracks/military-medicine"
      },
      {
        "title": "Rocky Mountain Neuroscience & Osteopathic Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$5,000 research stipend and laboratory supply funding",
        "fee": "$0",
        "tuition": "Covered by RVU Research Office",
        "desc": "Summer medical research fellowship investigating biomechanical fascial strain patterns, neuroinflammation in chronic pain disorders, and osteopathic manipulative treatments.",
        "requirements": {"gpa": "Medical student in good academic standing", "ielts": "English fluency", "gre": "Exempt", "papers": "Biomedical research prospectus (3 pages)", "references": "Faculty research mentor letter"},
        "source": "https://www.rvu.edu/research/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David J. Park",
        "role": "Vice President & Dean of MCOM",
        "department": "Montana College of Osteopathic Medicine",
        "subject": "biology",
        "bio": "Dr. Park is a board-certified family physician and osteopathic medical executive who has championed the establishment of medical residencies and rural healthcare access across Montana."
      },
      {
        "name": "Dr. Rebecca Bowden",
        "role": "Professor & Associate Dean of Research",
        "department": "Department of Biomedical Sciences",
        "subject": "biology",
        "bio": "Dr. Bowden is an immunologist researching mucosal immune responses, autoimmune disease pathophysiology, and osteopathic medical research pedagogy."
      },
      {
        "name": "Dr. Julie Rosenthal",
        "role": "Associate Professor of Osteopathic Principles and Practice",
        "department": "Department of Osteopathic Manipulative Medicine",
        "subject": "biology",
        "bio": "Dr. Rosenthal specializes in neuromusculoskeletal medicine, cranial osteopathy, and clinical trials examining osteopathic manual medicine efficacy in chronic pain."
      }
    ]
  },

  # 19. Rowan University (Row 926)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Rowan University",
    "shortName": "Rowan University",
    "slug": "rowan-university-glassboro",
    "location": "Glassboro, New Jersey, United States",
    "website": "https://www.rowan.edu",
    "sourceRow": 926,
    "stats": {"established": "1923", "students": "22,500+", "international": "6%", "faculty": "1,550+"},
    "heroSummary": "Rowan University is a rapidly rising public top-tier research university (R2) located in Glassboro, New Jersey, with medical campuses in Camden and Stratford. Globally famous for the Henry M. Rowan College of Engineering, two medical schools (Cooper Medical School of Rowan University and Rowan-Virtua School of Osteopathic Medicine), and the Jean & Ric Edelman Fossil Park.",
    "academicOverview": "Rowan operates the South Jersey Technology Park, Cooper Medical School in Camden, and the groundbreaking Edelman Fossil Park & Museum. Its engineering college is renowned worldwide for undergraduate engineering clinics where students work on real-world industrial research from their freshman through senior years.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.7) with test-optional application options. Admissions to the Henry M. Rowan College of Engineering requires strong mathematics (calculus ready) and chemistry/physics. Graduate and medical programs require discipline-specific centralized applications (AMCAS, AACOMAS).",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Engineering (Rowan-Virtua)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Rowan-Virtua Doctoral Fellowships providing full tuition waiver and $34,000 annual stipend",
        "fee": "$65",
        "tuition": "100% covered by fellowship",
        "desc": "World-class doctoral research developing targeted drug delivery nanoparticles, biomaterials for tissue regeneration, neural prosthetics, and point-of-care biosensors.",
        "requirements": {"gpa": "3.5+ GPA in biomedical, chemical, or electrical engineering", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Optional", "papers": "Research statement and laboratory portfolio", "references": "Three letters from research mentors"},
        "source": "https://engineering.rowan.edu/programs/biomedical/phd.html"
      },
      {
        "title": "Ph.D. in Chemical Engineering (Henry M. Rowan College)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships offering complete tuition remission and $33,000/year",
        "fee": "$65",
        "tuition": "100% covered by assistantship",
        "desc": "Elite research in sustainable polymers, membrane separation systems, renewable bio-fuels, catalysis, and pharmaceutical crystallization.",
        "requirements": {"gpa": "3.3 GPA in chemical engineering or chemistry", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Optional", "papers": "Statement of purpose and CV", "references": "Three academic references"},
        "source": "https://engineering.rowan.edu/programs/chemical/phd.html"
      },
      {
        "title": "Master of Science in Computer Science (Artificial Intelligence Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Teaching Assistantships with tuition coverage and monthly stipend",
        "fee": "$65",
        "tuition": "$850/credit (In-state) / $1,280/credit (Out-of-state)",
        "desc": "Advanced study in deep neural networks, computer vision, natural language processing, distributed cloud computing, and big data systems.",
        "requirements": {"gpa": "3.0 undergraduate GPA in computer science or related field", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Optional", "papers": "Personal essay and technical resume", "references": "Two recommendations"},
        "source": "https://csm.rowan.edu/departments/cs/academics/graduate/ms_cs.html"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Rowan Scholars Merit Awards up to $10,000/year",
        "fee": "$65",
        "tuition": "$14,800/year (In-state) / $24,400/year (Out-of-state)",
        "desc": "Nationally acclaimed ABET-accredited curriculum featuring hallmark eight-semester Engineering Clinics, hands-on machining, robotics, aerodynamics, and aerospace mechanics.",
        "requirements": {"gpa": "3.5 high school GPA with calculus and physics", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal essay", "references": "Two STEM teacher letters"},
        "source": "https://engineering.rowan.edu/programs/mechanical/undergraduate"
      },
      {
        "title": "Doctor of Medicine (MD - Cooper Medical School)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-11-15",
        "deadlineText": "November 15, 2026",
        "funding": "Cooper Medical Dean's Scholarships and Camden Community Service Awards",
        "fee": "$100",
        "tuition": "$44,200/year (In-state) / $67,900/year (Out-of-state)",
        "desc": "LCME-accredited medical degree in Camden, NJ emphasizing early clinical patient immersion, active learning group pedagogies, and urban underserved healthcare.",
        "requirements": {"gpa": "Pre-medical GPA (median 3.75) and competitive MCAT (median 511)", "ielts": "English fluency verified via AMCAS", "gre": "MCAT required", "papers": "AMCAS personal essay and secondary application", "references": "Pre-health committee letter"},
        "source": "https://cmsru.rowan.edu"
      },
      {
        "title": "Edelman Fossil Park Paleontology & Climate Research Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$5,000 research stipend and active quarry excavation access",
        "fee": "$0",
        "tuition": "Covered by Edelman Fossil Park Research Endowment",
        "desc": "Field research fellowship at Rowan's world-famous Cretaceous-Paleogene extinction quarry, excavating marine reptiles (mosasaurs), sea turtles, and analyzing ancient oceanic geochemical climate shifts.",
        "requirements": {"gpa": "3.2 GPA in geology, paleontology, or environmental science", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Paleontological research proposal", "references": "Two science faculty letters"},
        "source": "https://fossilpark.rowan.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kenneth Lacovara",
        "role": "Executive Director & Professor of Paleontology",
        "department": "Jean & Ric Edelman Fossil Park & Museum",
        "subject": "environment",
        "bio": "World-renowned paleontologist who discovered Dreadnoughtus schrani (one of the largest terrestrial animals ever found); TED speaker and leading researcher in mass extinction events."
      },
      {
        "name": "Dr. Mark Byrne",
        "role": "Founding Chair & Professor of Biomedical Engineering",
        "department": "Henry M. Rowan College of Engineering",
        "subject": "engineering",
        "bio": "Fellow of AIMBE and prolific inventor in molecularly imprinted polymers, therapeutic contact lenses for extended drug delivery, and ocular biomaterials."
      },
      {
        "name": "Dr. Nidhal Bouaynaya",
        "role": "Associate Dean of Research & Professor of Electrical Engineering",
        "department": "Henry M. Rowan College of Engineering",
        "subject": "engineering",
        "bio": "Dr. Bouaynaya is an expert in artificial intelligence, robust machine learning, Bayesian optimization, and signal processing applied to medical image analysis."
      }
    ]
  },

  # 20. Rutgers University - New Brunswick (Row 927)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Rutgers University - New Brunswick",
    "shortName": "Rutgers New Brunswick",
    "slug": "rutgers-university-new-brunswick",
    "location": "New Brunswick, New Jersey, United States",
    "website": "https://newbrunswick.rutgers.edu",
    "sourceRow": 927,
    "stats": {"established": "1766", "students": "50,000+", "international": "14%", "faculty": "3,400+"},
    "heroSummary": "Rutgers University - New Brunswick is the flagship campus of Rutgers, The State University of New Jersey, and a world-renowned Big Ten public research powerhouse (R1/AAU member), chartered in 1766 as Queen's College. Globally celebrated for mathematics, philosophy, computer science, biomedical engineering, pharmacy, and plant biology.",
    "academicOverview": "Rutgers-New Brunswick spans five historic campuses (College Avenue, Busch, Livingston, Cook, and Douglass) connected along the Raritan River. It hosts the Center for Discrete Mathematics and Theoretical Computer Science (DIMACS), the Rutgers Cancer Institute of New Jersey, the Waksman Institute of Microbiology, and the Ernest Mario School of Pharmacy.",
    "researchAdmissions": "Admissions are competitive and holistic. Undergraduate applicants submit transcripts, coursework profile, and optional test scores (test-optional). Graduate and doctoral applicants apply directly to individual graduate schools and departments, requiring strong discipline-specific academic credentials, research portfolios, and faculty mentor endorsements.",
    "opps": [
      {
        "title": "Ph.D. in Computer Science (DIMACS & AI Institute)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Full 5-year doctoral package including full tuition remission, comprehensive healthcare, and $36,000+ annual living stipend",
        "fee": "$70",
        "tuition": "100% covered by fellowship",
        "desc": "Elite doctoral program renowned for theoretical computer science, machine learning, algorithmic game theory, computer vision, and robotics at DIMACS.",
        "requirements": {"gpa": "3.7+ undergraduate GPA in computer science or mathematics", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "Optional", "papers": "Statement of academic purpose and research publications sample", "references": "Three letters of recommendation"},
        "source": "https://www.cs.rutgers.edu/academics/graduate/ph-d-program"
      },
      {
        "title": "Ph.D. in Mathematics",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "physics"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Five-year doctoral fellowship covering full tuition and $36,000 annual stipend",
        "fee": "$70",
        "tuition": "100% covered by fellowship",
        "desc": "Internationally top-ranked mathematics doctoral program specializing in algebraic geometry, combinatorics, partial differential equations, Lie theory, and mathematical physics.",
        "requirements": {"gpa": "3.8+ GPA with rigorous abstract algebra, real analysis, and topology", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "GRE Mathematics Subject Test recommended", "papers": "Mathematical statement of purpose", "references": "Three letters from mathematicians"},
        "source": "https://math.rutgers.edu/academics/graduate/phd-program"
      },
      {
        "title": "Ph.D. in Biomedical Engineering (School of Engineering)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Graduate Fellowships providing full tuition, fees, and $35,000 annual research stipend",
        "fee": "$70",
        "tuition": "100% covered by fellowship",
        "desc": "Pioneering doctoral program developing neuro-engineering prosthetics, stem cell scaffolds, nanomedicine formulations, and 3D bioprinting in the Busch Campus engineering laboratories.",
        "requirements": {"gpa": "3.5+ GPA in engineering, biology, or biophysics", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Optional", "papers": "Research statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://bme.rutgers.edu/academics/graduate-program/phd-biomedical-engineering"
      },
      {
        "title": "Doctor of Pharmacy (PharmD - Ernest Mario School)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Ernest Mario School of Pharmacy Endowed Scholarships up to $15,000/year",
        "fee": "$70",
        "tuition": "$18,500/year (In-state) / $36,800/year (Out-of-state)",
        "desc": "Nation's premier pharmacy school offering direct-entry and professional clinical rotations across RWJBarnabas Health and New Jersey's major pharmaceutical corridor.",
        "requirements": {"gpa": "3.2 science GPA in prerequisite chemistry, biology, and calculus", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "PCAT exempt", "papers": "PharmCAS essay and personal statement", "references": "Two recommendations (one science faculty)"},
        "source": "https://pharmacy.rutgers.edu"
      },
      {
        "title": "Ph.D. in Philosophy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Full 5-year MacCracken-equivalent fellowship covering tuition and $36,000 annual stipend",
        "fee": "$70",
        "tuition": "100% covered by fellowship",
        "desc": "Consistently ranked #1 or #2 in the English-speaking world for philosophy, offering world-leading faculty in epistemology, metaphysics, philosophy of mind, ethics, and philosophy of language.",
        "requirements": {"gpa": "Exceptional undergraduate record in philosophy", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Optional", "papers": "Philosophical writing sample (5,000-7,000 words) and statement", "references": "Three letters from philosophy professors"},
        "source": "https://philosophy.rutgers.edu/graduate-program"
      },
      {
        "title": "Waksman Institute of Microbiology Postdoctoral Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "$65,000 annual postdoctoral salary, full health benefits, and research supply budget",
        "fee": "$0",
        "tuition": "Postdoctoral research appointment",
        "desc": "Prestigious research fellowship at the historic institute founded by Nobel laureate Selman Waksman, investigating RNA transcription, CRISPR bacterial immunity, and structural molecular genetics.",
        "requirements": {"gpa": "Ph.D. in microbiology, molecular biology, or biochemistry", "ielts": "Fluent English proficiency", "gre": "Exempt", "papers": "Research proposal (3 pages) and CV with publications", "references": "Three letters of recommendation"},
        "source": "https://waksman.rutgers.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Richard H. Ebright",
        "role": "Board of Governors Professor of Chemistry and Chemical Biology",
        "department": "Waksman Institute of Microbiology",
        "subject": "biology",
        "bio": "Member of the American Academy of Arts and Sciences; pioneer in structural biology of bacterial RNA polymerase and antibacterial drug discovery against multidrug-resistant pathogens."
      },
      {
        "name": "Dr. Endre Szemerédi",
        "role": "State of New Jersey Professor of Computer Science and Mathematics",
        "department": "Department of Computer Science & Mathematics",
        "subject": "mathematics",
        "bio": "Abel Prize laureate and National Academy of Sciences member; proved Szemerédi's theorem in arithmetic progressions and created the Szemerédi regularity lemma in graph theory."
      },
      {
        "name": "Dr. Prabhas Moghe",
        "role": "Executive Vice President for Academic Affairs & Distinguished Professor",
        "department": "Department of Biomedical Engineering and Chemical Engineering",
        "subject": "engineering",
        "bio": "AIMBE Fellow and pioneer in nanomedicine, optical molecular imaging of cancer metastases, and microscale biomaterials for regenerative medicine."
      }
    ]
  },

  # 21. Saint Joseph's College of Maine (Row 928)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Saint Joseph's College of Maine",
    "shortName": "Saint Joseph's Maine",
    "slug": "saint-josephs-college-of-maine-standish",
    "location": "Standish, Maine, United States",
    "website": "https://www.sjcme.edu",
    "sourceRow": 928,
    "stats": {"established": "1912", "students": "2,100+", "international": "3%", "faculty": "150+"},
    "heroSummary": "Saint Joseph's College of Maine is a private Catholic liberal arts college established by the Sisters of Mercy in 1912, located on an idyllic 474-acre lakefront campus along Sebago Lake in Standish, Maine. Acclaimed for nursing, marine ecology, sustainable agriculture, and healthcare administration.",
    "academicOverview": "Saint Joseph's operates the Mercy Hall Nursing Simulation Center, the Pearson's Town Farm (an educational certified organic campus farm), and the Lake Science Center with direct research access to Sebago Lake (Maine's deepest lake). It was one of the earliest pioneers of distance education in healthcare administration.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5 recommended) with test-optional reviews. Nursing candidates require secondary review with biology and chemistry benchmarks. Online graduate programs require an accredited bachelor's with a 2.75 GPA.",
    "opps": [
      {
        "title": "Bachelor of Science in Nursing (BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Mercy Healthcare Merit Scholarships up to $18,000/year",
        "fee": "$0",
        "tuition": "$42,600/year",
        "desc": "CCNE-accredited pre-licensure BSN program featuring high-fidelity clinical simulation and clinical hospital rotations at Maine Medical Center and Northern Light Mercy Hospital.",
        "requirements": {"gpa": "3.0 high school GPA with biology and chemistry", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing personal essay", "references": "Two recommendations"},
        "source": "https://www.sjcme.edu/academics/undergraduate/programs/nursing"
      },
      {
        "title": "Bachelor of Science in Marine Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Sebago Lake Science Grants up to $15,000 distributed over four years",
        "fee": "$0",
        "tuition": "$42,600/year",
        "desc": "Fieldwork-intensive marine curriculum utilizing Sebago Lake and Gulf of Maine coastal research sites to investigate lobster population dynamics, ocean acidification, and aquatic toxicology.",
        "requirements": {"gpa": "2.8 GPA with high school chemistry and biology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Scientific interests essay", "references": "One science teacher letter"},
        "source": "https://www.sjcme.edu/academics/undergraduate/programs/marine-science"
      },
      {
        "title": "Master of Health Administration (MHA - Online)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Healthcare Leadership Tuition Grants up to $4,000",
        "fee": "$0",
        "tuition": "$585/credit hour ($21,060 total program)",
        "desc": "Pioneering online graduate program instructing healthcare executives in hospital operations, healthcare economics, clinical quality metrics, and ethical health leadership.",
        "requirements": {"gpa": "2.75 undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Resume and goals statement", "references": "Two professional references"},
        "source": "https://online.sjcme.edu/programs/master-of-health-administration"
      },
      {
        "title": "Bachelor of Science in Sustainable Agriculture & Food Systems",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Pearson's Town Farm Agroecology Scholarships up to $12,000/year",
        "fee": "$0",
        "tuition": "$42,600/year",
        "desc": "Interdisciplinary program integrating hands-on regenerative agriculture on the campus farm, organic crop management, agroforestry, and regional food policy in Maine.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.sjcme.edu/academics/undergraduate/programs/sustainable-agriculture"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Advanced Practice Nursing Endowments up to $5,000",
        "fee": "$0",
        "tuition": "$635/credit hour",
        "desc": "CCNE-accredited online MSN preparing registered nurses for national FNP certification, primary care clinical diagnosis, pharmacological prescribing, and rural healthcare delivery.",
        "requirements": {"gpa": "3.0 GPA in BSN from accredited institution, valid RN license", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of clinical intent", "references": "Two professional nursing letters"},
        "source": "https://online.sjcme.edu/programs/msn-fnp"
      },
      {
        "title": "Sebago Lake Limnology & Freshwater Ecology Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$4,000 research stipend plus research boat laboratory usage",
        "fee": "$0",
        "tuition": "Covered by Sebago Lake Ecological Endowment",
        "desc": "Undergraduate summer fellowship monitoring deep-water dissolved oxygen profiles, nutrient runoff dynamics, and invasive milfoil mitigation in Maine's Sebago Lake watershed.",
        "requirements": {"gpa": "3.0 GPA in marine science, environmental science, or biology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Freshwater limnology research proposal", "references": "Two science faculty letters"},
        "source": "https://www.sjcme.edu/research/sebago-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Joseph McDonnell",
        "role": "President & Professor of Public Policy",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. McDonnell directs Saint Joseph's College of Maine, researching regional workforce economic alignment, sustainable community development, and healthcare higher education."
      },
      {
        "name": "Dr. Dale L. Syphers",
        "role": "Professor of Physics and Science",
        "department": "Department of Sciences",
        "subject": "physics",
        "bio": "Dr. Syphers specializes in condensed matter physics, quantum Hall effect in semiconductor superlattices, and lake thermal stratification sensor design."
      },
      {
        "name": "Prof. Jeanne Donlevy Arnold",
        "role": "Associate Professor & Chair of Nursing",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Prof. Arnold researches clinical nursing simulation pedagogies, rural healthcare access in northern New England, and patient safety handover communications."
      }
    ]
  },

  # 22. Saint Louis University (Row 929)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Saint Louis University",
    "shortName": "SLU",
    "slug": "saint-louis-university",
    "location": "St. Louis, Missouri, United States",
    "website": "https://www.slu.edu",
    "sourceRow": 929,
    "stats": {"established": "1818", "students": "13,500+", "international": "11%", "faculty": "1,850+"},
    "heroSummary": "Saint Louis University is a world-class Jesuit research university (R1) founded in 1818, making it the oldest university west of the Mississippi River, located in midtown St. Louis, Missouri. Internationally acclaimed for the School of Medicine, Saint Louis University School of Law, Parks College of Engineering, Aviation and Technology (the first federally certified school of aviation in the US), and health law.",
    "academicOverview": "SLU features the SLUCare Physician Group medical center, the Doisy Research Center, the Center for Vaccine Development, Parks College, and the Chaifetz School of Business. It is consistently ranked among the top 5 programs nationwide for health law by U.S. News.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.9), rigorous coursework, and optional test scores (test-optional). School of Medicine (MD) applicants submit AMCAS applications, MCAT scores, and prerequisite science labs. Graduate programs require accredited bachelor's degrees with minimum 3.0 GPAs.",
    "opps": [
      {
        "title": "Doctor of Medicine (MD - School of Medicine)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-11-01",
        "deadlineText": "November 1, 2026",
        "funding": "SLU School of Medicine Dean's Merit Scholarships up to $30,000/year",
        "fee": "$100",
        "tuition": "$63,800/year",
        "desc": "LCME-accredited medical education integrating organ-system problem-based learning, clinical patient simulation in the Interprofessional Education Building, and hospital clerkships at SSM Health Saint Louis University Hospital.",
        "requirements": {"gpa": "Pre-medical GPA (median 3.86) and competitive MCAT (median 513)", "ielts": "English fluency verified via AMCAS", "gre": "MCAT required", "papers": "AMCAS personal statement and SLU secondary application", "references": "Pre-health committee letter or three faculty letters"},
        "source": "https://www.slu.edu/medicine"
      },
      {
        "title": "Ph.D. in Aerospace and Mechanical Engineering (Parks College)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Parks College Doctoral Fellowships providing full tuition waiver and $32,000 annual stipend",
        "fee": "$65",
        "tuition": "100% covered by fellowship",
        "desc": "Pioneering aerospace research in supersonic wind tunnel aerodynamics, autonomous unmanned aerial systems (UAS), space systems orbit mechanics, and composite structures at Parks College.",
        "requirements": {"gpa": "3.5+ GPA in aerospace, mechanical engineering, or physics", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Optional", "papers": "Research statement and CV", "references": "Three letters from research mentors"},
        "source": "https://www.slu.edu/parks/academics/degrees/graduate/aerospace-mechanical-engineering-phd.php"
      },
      {
        "title": "Juris Doctor (JD) in Health Law (Center for Health Law Studies)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Health Law Scholars Awards covering up to 100% of law tuition",
        "fee": "$0",
        "tuition": "$47,900/year",
        "desc": "Consistently ranked #1 in Health Law in the US for over 15 years; comprehensive legal education covering bioethics, healthcare antitrust, pharmaceutical regulation, and hospital health systems policy.",
        "requirements": {"gpa": "Accredited bachelor's degree with competitive LSAT score (median 159) and GPA (median 3.65)", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "LSAT or GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www.slu.edu/law/health-law"
      },
      {
        "title": "Master of Science in Computer Science (Artificial Intelligence Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Assistantships providing tuition waiver and monthly stipend",
        "fee": "$65",
        "tuition": "$1,280/credit hour",
        "desc": "Advanced study in deep learning, algorithm analysis, computer vision, natural language processing, parallel high-performance computing, and cybersecurity.",
        "requirements": {"gpa": "3.0 undergraduate GPA in computer science or mathematics", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of purpose and technical resume", "references": "Two recommendations"},
        "source": "https://www.slu.edu/science-and-engineering/academics/computer-science/graduate"
      },
      {
        "title": "Ph.D. in Molecular Microbiology and Immunology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Full 5-year assistantship funding including full tuition and $35,000 annual stipend",
        "fee": "$65",
        "tuition": "100% covered by fellowship",
        "desc": "Elite biomedical research at the Center for Vaccine Development and Doisy Research Center investigating viral pathogenesis (influenza, flaviviruses), bacterial genomics, and T-cell immunology.",
        "requirements": {"gpa": "3.5+ GPA in molecular biology, biochemistry, or genetics", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Not required", "papers": "Statement of research interests and laboratory experience", "references": "Three letters from research mentors"},
        "source": "https://www.slu.edu/medicine/molecular-microbiology-immunology/graduate"
      },
      {
        "title": "Center for Vaccine Development Clinical Immunology Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "$62,000 annual postdoctoral stipend, health insurance, and research conference budget",
        "fee": "$0",
        "tuition": "Postdoctoral research appointment",
        "desc": "Postdoctoral research fellowship in an NIH-funded Vaccine and Treatment Evaluation Unit (VTEU) developing next-generation pandemic mRNA and viral vector vaccines.",
        "requirements": {"gpa": "Ph.D. or M.D./Ph.D. in virology, immunology, or infectious diseases", "ielts": "Fluent English proficiency", "gre": "Exempt", "papers": "Vaccine immunology research proposal (3 pages)", "references": "Three letters of recommendation"},
        "source": "https://www.slu.edu/medicine/vaccine-center/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Daniel Hoft",
        "role": "Director & Professor of Infectious Diseases",
        "department": "Center for Vaccine Development & School of Medicine",
        "subject": "biology",
        "bio": "Principal investigator of SLU's NIH-funded Vaccine and Treatment Evaluation Unit; national leader in tuberculosis, influenza, and COVID-19 vaccine clinical trial design."
      },
      {
        "name": "Dr. Srikanth Gururajan",
        "role": "Associate Professor of Aerospace Engineering",
        "department": "Parks College of Engineering, Aviation and Technology",
        "subject": "engineering",
        "bio": "Dr. Gururajan specializes in flight dynamics, unmanned aircraft systems (UAS), adaptive flight control architectures, and gust alleviation in turbulent aerodynamic regimes."
      },
      {
        "name": "Dr. Sidney D. Watson",
        "role": "Professor of Law & Jane Doe Associate",
        "department": "Center for Health Law Studies",
        "subject": "social-sciences",
        "bio": "Nationally recognized legal scholar on Medicaid regulation, health reform legislation, and eliminating racial and economic healthcare disparities."
      }
    ]
  },

  # 23. Saint Mary's University of Minnesota (Row 930)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Saint Mary's University of Minnesota",
    "shortName": "Saint Mary's Minnesota",
    "slug": "saint-marys-university-of-minnesota-minneapolis",
    "location": "Minneapolis, Minnesota, United States",
    "website": "https://www.smumn.edu",
    "sourceRow": 930,
    "stats": {"established": "1912", "students": "4,700+", "international": "5%", "faculty": "360+"},
    "heroSummary": "Saint Mary's University of Minnesota is a prominent Lasallian Catholic private university operating its residential undergraduate college in Winona, Minnesota, and its major Schools of Graduate and Professional Programs campus in Minneapolis, Minnesota. Acclaimed for nurse anesthesia, business intelligence, clinical psychology, and physician assistant studies.",
    "academicOverview": "Saint Mary's Minneapolis campus is situated near the heart of the Twin Cities medical corridor, featuring the School of Health and Human Services with advanced clinical simulation suites, and the School of Business and Technology. Its Doctor of Nursing Practice in Nurse Anesthesia program is consistently ranked among the nation's best.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5 recommended) with test-optional reviews. Professional healthcare degrees (CRNA, PA, PsyD) require accredited bachelor's or master's degrees with minimum 3.0 GPAs, prerequisite science coursework, and specialized clinical experience (such as 1-2 years ICU nursing for CRNA).",
    "opps": [
      {
        "title": "Doctor of Nursing Practice (DNP) in Nurse Anesthesia (CRNA)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-11-01",
        "deadlineText": "November 1, 2026",
        "funding": "Nurse Anesthesia Traineeship Grants up to $8,000/year",
        "fee": "$80",
        "tuition": "$42,800/year",
        "desc": "COA-accredited 36-month doctoral curriculum preparing Certified Registered Nurse Anesthetists (CRNAs) with clinical rotations across Mayo Clinic Health System, Abbott Northwestern, and Hennepin Healthcare.",
        "requirements": {"gpa": "3.0 GPA in BSN from accredited program, active unencumbered RN license, minimum 1 year acute ICU experience, CCRN preferred", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt if GPA > 3.4", "papers": "Anesthesia career statement", "references": "Three clinical recommendations (one ICU nurse manager)"},
        "source": "https://www.smumn.edu/academics/graduate/programs/nurse-anesthesia-dnp"
      },
      {
        "title": "Master of Science in Business Intelligence and Data Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Twin Cities Analytics Leadership Awards up to $4,500",
        "fee": "$0",
        "tuition": "$725/credit hour ($26,100 total program)",
        "desc": "Hands-on data analytics master's covering SQL data warehousing, predictive machine learning, Tableau/PowerBI business intelligence, and Python predictive modeling.",
        "requirements": {"gpa": "2.75 undergraduate GPA in quantitative or business discipline", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal statement and resume", "references": "Two professional references"},
        "source": "https://www.smumn.edu/academics/graduate/programs/business-intelligence-data-analytics-ms"
      },
      {
        "title": "Doctor of Psychology (Psy.D.) in Counseling Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Fellowships and clinical assistantships up to $6,000/year",
        "fee": "$50",
        "tuition": "$920/credit hour",
        "desc": "APA-accredited practitioner-scholar doctoral program educating clinical psychologists in multicultural counseling, neuropsychological assessment, trauma intervention, and psychotherapy.",
        "requirements": {"gpa": "3.0 undergraduate or master's GPA in psychology", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Optional", "papers": "Scholarly essay and statement of clinical goals", "references": "Three professional references"},
        "source": "https://www.smumn.edu/academics/graduate/programs/counseling-psychology-psyd"
      },
      {
        "title": "Master of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Twin Cities Tech Advancement Grants up to $3,500",
        "fee": "$0",
        "tuition": "$725/credit hour ($26,100 total)",
        "desc": "Enterprise security degree covering network intrusion detection, incident response planning, regulatory compliance (NIST/ISO), cryptography, and ethical hacking.",
        "requirements": {"gpa": "2.75 GPA with IT or computing background", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Technical goals statement", "references": "Two recommendations"},
        "source": "https://www.smumn.edu/academics/graduate/programs/cybersecurity-ms"
      },
      {
        "title": "Master of Social Work (MSW)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Lasallian Social Justice Grants up to $5,000",
        "fee": "$0",
        "tuition": "$685/credit hour",
        "desc": "CSWE-accredited clinical social work curriculum focusing on clinical mental health, community advocacy, trauma-informed child welfare, and addictions intervention in urban Minneapolis.",
        "requirements": {"gpa": "2.8 undergraduate GPA with liberal arts background", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Social work essay and personal narrative", "references": "Three professional references"},
        "source": "https://www.smumn.edu/academics/graduate/programs/social-work-msw"
      },
      {
        "title": "Clinical Nurse Anesthesia Simulation & Patient Safety Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$4,500 clinical research stipend and anesthesia simulation suite access",
        "fee": "$0",
        "tuition": "Covered by Saint Mary's Anesthesia Research Endowment",
        "desc": "Graduate clinical research fellowship evaluating high-fidelity anesthesia simulation for difficult airway emergencies, malignant hyperthermia protocols, and hemodynamic stability.",
        "requirements": {"gpa": "3.3 GPA in DNP Nurse Anesthesia program", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Anesthesia patient safety project proposal", "references": "Two clinical anesthesia faculty letters"},
        "source": "https://www.smumn.edu/research/anesthesia-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Father James P. Burns, IVD",
        "role": "President & Professor of Psychology",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Father Burns is a licensed psychologist and academic executive researching character development, ethical leadership in Catholic higher education, and university strategy."
      },
      {
        "name": "Dr. Julie Ries",
        "role": "Dean & Professor of Health and Human Services",
        "department": "School of Health and Human Services",
        "subject": "biology",
        "bio": "Dr. Ries is an authority on physical therapy rehabilitation, fall prevention in older adults with cognitive impairment, and interprofessional clinical simulation."
      },
      {
        "name": "Dr. Matt Nowakowski",
        "role": "Professor of Business and Technology",
        "department": "School of Business and Technology",
        "subject": "social-sciences",
        "bio": "Dr. Nowakowski specializes in organizational leadership, predictive business analytics pedagogy, and strategic management in healthcare organizations."
      }
    ]
  }
]

if __name__ == "__main__":
    print(f"Part 2 Chunk 1 loaded: {len(chunk1)} USA universities")
    for u in chunk1:
        print(f" - {u['institution']} ({u['slug']}) - Row {u['sourceRow']}")
