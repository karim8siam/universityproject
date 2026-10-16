# scripts/make_b67_p1_chunk1.py
# Batch 67 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. The Rockefeller University (Row 1004)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The Rockefeller University",
    "shortName": "Rockefeller University",
    "slug": "the-rockefeller-university",
    "location": "New York, New York, United States",
    "website": "https://www.rockefeller.edu",
    "sourceRow": 1004,
    "stats": {"established": "1901", "students": "250+", "international": "35%", "faculty": "220+"},
    "heroSummary": "The Rockefeller University is a world-renowned biomedical research institute and graduate university located on an idyllic 14-acre campus along the East River in Manhattan, New York. Founded by John D. Rockefeller, the university is affiliated with 26 Nobel laureates and operates exclusively at the doctoral and postdoctoral levels, driving historic discoveries in immunology, genetics, structural biology, and neuroscience.",
    "academicOverview": "Operating without formal academic departments, Rockefeller organizes research around more than 70 independent laboratory heads (Heads of Laboratory). Its campus houses the Rockefeller University Hospital (one of the oldest clinical research hospitals in the US), cryo-electron microscopy facilities, and high-throughput genomic sequencing centers.",
    "researchAdmissions": "Doctoral admissions into the David Rockefeller Graduate Program are exceptionally selective. Candidates are evaluated holistically based on extensive undergraduate research experience, letters of recommendation from research mentors, undergraduate transcripts, and a detailed statement of research philosophy. All admitted Ph.D. scholars receive full fellowship support.",
    "opps": [
      {
        "title": "Ph.D. in Bioscience - Molecular Genetics & Structural Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate fellowship covering 100% tuition, $45,000 annual living stipend, and comprehensive health insurance",
        "fee": "$0",
        "tuition": "Covered by fellowship",
        "desc": "Premier doctoral training in the David Rockefeller Graduate Program, conducting independent laboratory research in cryo-EM structure determination, RNA interference, and chromatin dynamics.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences, chemistry, or physics with exceptional research record", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "GRE not accepted", "papers": "Statement of research interests and laboratory experience", "references": "Three letters from research advisors"},
        "source": "https://www.rockefeller.edu/education-and-training/phd-program/"
      },
      {
        "title": "Ph.D. in Chemical Biology & Biophysics",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "David Rockefeller Fellowships with full tuition remission and $45,000 stipend",
        "fee": "$0",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary doctoral curriculum investigating synthetic protein chemistry, enzyme mechanics, lipid signaling pathways, and optical spectroscopic probes.",
        "requirements": {"gpa": "Degree in chemistry, biochemistry, or physics with 3.5+ GPA and research background", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Research statement and laboratory bibliography", "references": "Three scientific recommendations"},
        "source": "https://www.rockefeller.edu/education-and-training/chemical-biology/"
      },
      {
        "title": "Ph.D. in Neurobiology and Neural Systems",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full institutional fellowship with $45,000 stipend and subsidized Manhattan housing",
        "fee": "$0",
        "tuition": "Covered by fellowship",
        "desc": "Intensive laboratory doctorate exploring sensory processing circuitry, synaptic plasticity, neurodevelopmental genomics, and behavioral optogenetics.",
        "requirements": {"gpa": "Bachelor's or Master's in neuroscience, biology, or biophysics with extensive lab research", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Neuroscience research proposal", "references": "Three faculty mentor letters"},
        "source": "https://www.rockefeller.edu/education-and-training/neuroscience/"
      },
      {
        "title": "Ph.D. in Physics and Mathematical Biology",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full theoretical biophysics fellowship covering tuition plus $45,000 stipend",
        "fee": "$0",
        "tuition": "Covered by fellowship",
        "desc": "Rigorous doctoral program at the Center for Studies in Physics and Biology, applying non-equilibrium statistical mechanics, dynamical systems, and algorithmic modeling to cellular processes.",
        "requirements": {"gpa": "Undergraduate degree in physics, applied mathematics, or physical chemistry with 3.5+ GPA", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Theoretical physics and modeling statement", "references": "Three letters of recommendation"},
        "source": "https://www.rockefeller.edu/research/physics-biology/"
      },
      {
        "title": "Tri-Institutional M.D.-Ph.D. Program (Rockefeller / Cornell / Memorial Sloan Kettering)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NIH MSTP funding providing full medical and graduate tuition plus $46,000 annual stipend",
        "fee": "$100 (AMCAS)",
        "tuition": "Covered by MSTP grant",
        "desc": "Elite dual-degree physician-scientist program combining clinical training at Weill Cornell Medical College with laboratory doctoral research at The Rockefeller University and MSKCC.",
        "requirements": {"gpa": "Exceptional undergraduate academic record (average 3.9 GPA); high MCAT score; significant laboratory research", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS essays and Tri-Institutional supplemental essays", "references": "Letters from all primary laboratory mentors"},
        "source": "https://weill.cornell.edu/mdphd"
      },
      {
        "title": "Women & Science Postdoctoral and Predoctoral Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$50,000 annual research fellowship stipend, laboratory bench budget, and international travel allowance",
        "fee": "$0",
        "tuition": "Endowed through The Rockefeller University Women & Science Initiative",
        "desc": "Prestigious fellowship supporting groundbreaking women researchers in structural biochemistry, immunology, infectious disease biology, and neurobiology at Rockefeller.",
        "requirements": {"gpa": "Enrolled doctoral student or early-career scientist with demonstrated research excellence", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Biomedical research proposal and curriculum vitae", "references": "Two Head of Laboratory recommendations"},
        "source": "https://www.rockefeller.edu/women-and-science/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Richard P. Lifton",
        "role": "President & Carson Family Professor",
        "department": "Laboratory of Human Genetics and Genomics",
        "subject": "biology",
        "bio": "Dr. Richard Lifton serves as the 11th president of The Rockefeller University, a physician-scientist who mapped the molecular genetics of hypertension and renal electrolyte homeostasis, elected to the NAS and NAM."
      },
      {
        "name": "Dr. Elaine Fuchs",
        "role": "Rebecca C. Lancefield Professor & Investigator, HHMI",
        "department": "Robin Chemers Neustein Laboratory of Mammalian Cell Biology and Development",
        "subject": "biology",
        "bio": "Dr. Elaine Fuchs is a world-renowned pioneer in skin biology, stem cell quiescence, wound repair, and epidermal cancer initiation, recipient of the National Medal of Science."
      },
      {
        "name": "Dr. Charles M. Rice",
        "role": "Maurice R. and Corinne P. Greenberg Professor & 2020 Nobel Laureate",
        "department": "Laboratory of Virology and Infectious Disease",
        "subject": "biology",
        "bio": "Dr. Charles Rice was awarded the 2020 Nobel Prize in Physiology or Medicine for the discovery and characterization of the Hepatitis C virus, leading to curative antiviral therapies."
      }
    ]
  },

  # 2. Fashion Institute of Technology (SUNY FIT) (Row 1005)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Fashion Institute of Technology (SUNY FIT)",
    "shortName": "FIT SUNY",
    "slug": "fashion-institute-of-technology-suny-fit",
    "location": "New York, New York, United States",
    "website": "https://www.fitnyc.edu",
    "sourceRow": 1005,
    "stats": {"established": "1944", "students": "8,800+", "international": "12%", "faculty": "850+"},
    "heroSummary": "The Fashion Institute of Technology (FIT) is an internationally celebrated public college of art, design, business, and technology within the State University of New York (SUNY), located in Manhattan's Chelsea neighborhood. FIT is globally acclaimed for fashion design, textile surface engineering, cosmetics and fragrance marketing, and sustainable materials science.",
    "academicOverview": "FIT comprises the School of Art and Design, the Jay and Patty Baker School of Business and Technology, the School of Liberal Arts and Sciences, and the School of Graduate Studies. Its cutting-edge facilities include the Textile Testing Laboratory, the Natural Dye Garden, the DTech Innovation Lab, and the Museum at FIT (holding over 50,000 historic garments).",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic records, personal essays, and specialized creative art/design portfolios. Graduate programs require an accredited bachelor's degree with a 3.0+ GPA, competitive professional experience, letters of recommendation, and industry portfolio reviews.",
    "opps": [
      {
        "title": "Master of Professional Studies (MPS) in Global Fashion Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Baker School of Business Merit Scholarships up to $8,000",
        "fee": "$50",
        "tuition": "$13,200/semester (in-state), $19,400/semester (out-of-state)",
        "desc": "International executive master's program taught in collaboration with Institut Français de la Mode (Paris) and Hong Kong Polytechnic University, exploring global luxury supply chains and digital brand strategy.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and minimum three years of professional fashion or retail experience", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Professional essay on global supply chain disruption", "references": "Two professional supervisor recommendations"},
        "source": "https://www.fitnyc.edu/academics/academic-divisions/graduate-studies/global-fashion-management/"
      },
      {
        "title": "Master of Professional Studies (MPS) in Cosmetics and Fragrance Marketing and Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Cosmetics Industry Advisory Board Endowed Grants up to $10,000",
        "fee": "$50",
        "tuition": "$13,200/semester",
        "desc": "The beauty industry's premier think tank, training emerging executives in cosmetic formulation chemistry, olfactory sensory evaluation, digital retail analytics, and brand innovation.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA; 3+ years beauty industry experience", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Beauty industry strategic case study essay", "references": "Three executive recommendations"},
        "source": "https://www.fitnyc.edu/academics/academic-divisions/graduate-studies/cosmetics-and-fragrance-marketing-and-management/"
      },
      {
        "title": "Master of Arts in Fashion and Textile Studies: History, Theory, Museum Practice",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Museum at FIT Curatorial Assistantships covering tuition plus $12,000 stipend",
        "fee": "$50",
        "tuition": "$11,800/semester (in-state)",
        "desc": "Hands-on museum studies master's training scholars in textile conservation science, historical fashion curation, archival garment cataloging, and exhibition design.",
        "requirements": {"gpa": "Undergraduate degree in art history, humanities, or design with 3.2+ GPA", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Art historical writing sample", "references": "Two academic recommendations"},
        "source": "https://www.fitnyc.edu/academics/academic-divisions/graduate-studies/fashion-and-textile-studies/"
      },
      {
        "title": "Bachelor of Fine Arts (B.F.A.) in Fashion Design - Sustainable Apparel",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "FIT Foundation Talent Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$7,790/year (in-state), $22,380/year (out-of-state)",
        "desc": "World-renowned fashion design program featuring couture draping, patternmaking, zero-waste cutting algorithms, and circular bio-textile integration.",
        "requirements": {"gpa": "High school GPA 3.0+; mandatory competitive FIT design portfolio submission", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Creative inspiration statement", "references": "One counselor recommendation"},
        "source": "https://www.fitnyc.edu/academics/academic-divisions/art-and-design/fashion-design/"
      },
      {
        "title": "Bachelor of Science in Textile Development and Marketing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "arts-design"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Textile Industry Merit Awards up to $6,000",
        "fee": "$50",
        "tuition": "$7,790/year (in-state)",
        "desc": "Technical STEM curriculum training students in polymer fiber synthesis, woven textile structures, yarn spinning, dye chemistry, and flammability testing.",
        "requirements": {"gpa": "High school GPA 2.8+ with chemistry and algebra", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Interest essay in materials science", "references": "One STEM teacher recommendation"},
        "source": "https://www.fitnyc.edu/academics/academic-divisions/business-and-technology/textile-development-and-marketing/"
      },
      {
        "title": "FIT DTech Innovation Lab Bio-Materials Research Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "arts-design", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,500 summer research stipend, access to bio-fabrication fermentation reactors, and materials prototyping lab",
        "fee": "$0",
        "tuition": "Supported through FIT DTech Innovation Lab Endowment",
        "desc": "Interdisciplinary fellowship developing mycelium-based vegan leather alternatives, algae-derived non-toxic textile pigments, and biodegradable packaging polymers.",
        "requirements": {"gpa": "Enrolled FIT undergraduate or graduate student with 3.3+ GPA in design, science, or marketing", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Sustainable bio-materials project proposal", "references": "Faculty mentor recommendation"},
        "source": "https://www.fitnyc.edu/innovation/dtech/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Joyce F. Brown",
        "role": "President & Professor of Psychology",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Joyce F. Brown is the president of the Fashion Institute of Technology, an accomplished urban education scholar and former NYC deputy mayor who led FIT's accreditation and building expansions."
      },
      {
        "name": "Dr. Valerie Steele",
        "role": "Director and Chief Curator",
        "department": "The Museum at FIT",
        "subject": "arts-design",
        "bio": "Dr. Valerie Steele is an internationally revered fashion historian, author, and curator celebrated as one of fashion's most influential scholars, directing landmark exhibitions at The Museum at FIT."
      },
      {
        "name": "Prof. Theanne Schiros",
        "role": "Associate Professor & Bio-Materials Scientist",
        "department": "Department of Science and Mathematics & DTech Lab",
        "subject": "chemistry",
        "bio": "Dr. Schiros is a materials scientist researching microbial bio-textiles, algae-derived dyes, and circular economy design, collaborating with Adidas and the UN on sustainable textiles."
      }
    ]
  },

  # 3. The University of Alabama (Row 1009)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Alabama",
    "shortName": "University of Alabama",
    "slug": "the-university-of-alabama",
    "location": "Tuscaloosa, Alabama, United States",
    "website": "https://www.ua.edu",
    "sourceRow": 1009,
    "stats": {"established": "1831", "students": "39,600+", "international": "4%", "faculty": "2,050+"},
    "heroSummary": "The University of Alabama (UA) is the flagship public Carnegie R1 research university of the state of Alabama, located in Tuscaloosa along the Black Warrior River. Generating over $130M in annual research expenditures, UA is home to the National Water Center, the Alabama Water Institute (AWI), the Culverhouse College of Business, and the prestigious College of Engineering.",
    "academicOverview": "UA delivers 13 academic divisions offering comprehensive bachelor's, master's, and doctoral programs. Its research power is anchored by the Alabama Life Research Institute (ALRI), the Alabama Transportation Institute, the Center for Advanced Public Safety (CAPS), and the NOAA National Water Center located directly on campus.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and academic rigor (test-optional). Graduate admissions require an accredited bachelor's degree with a minimum 3.0 cumulative GPA (or last 60 hours), program-specific GRE/GMAT scores (waivers available), statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Civil Engineering - Hydrology and Water Resources",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Alabama Water Institute Graduate Fellowships with full tuition waiver and $32,000 annual stipend",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research program collaborating directly with the NOAA National Water Center on continental-scale hydrological forecasting, flood inundation modeling, and climate resilience.",
        "requirements": {"gpa": "BS or MS in civil or environmental engineering with 3.3+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Hydrological engineering research statement", "references": "Three letters of academic recommendation"},
        "source": "https://eng.ua.edu/graduate/degrees/civil-engineering/"
      },
      {
        "title": "Ph.D. in Aerospace Engineering and Mechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Research Assistantships covering tuition plus $30,000 stipend",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral engineering training in supersonic flight aerodynamics, carbon-composite aero-structures, rocket combustion modeling, and autonomous flight controls.",
        "requirements": {"gpa": "Degree in aerospace, mechanical, or civil engineering with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Aerospace research proposal", "references": "Three faculty letters of recommendation"},
        "source": "https://aem.eng.ua.edu/graduate/"
      },
      {
        "title": "Ph.D. in Computer Science - Cyber-Physical Systems & Machine Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Teaching and Research Assistantships up to $28,000",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Advanced doctoral curriculum exploring autonomous vehicle perception algorithms, distributed cyber-physical security, cloud data pipelines, and graph neural networks.",
        "requirements": {"gpa": "BS or MS in computer science, software engineering, or related field with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "GRE recommended", "papers": "Statement of computational purpose", "references": "Three academic recommendations"},
        "source": "https://cs.ua.edu/graduate/"
      },
      {
        "title": "Ph.D. in Chemistry - Materials and Catalysis",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Shelby Hall Graduate Assistantships covering tuition plus $28,000 living stipend",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Hands-on doctoral research in Shelby Hall exploring inorganic organometallic catalysts, energy storage materials, mass spectrometry, and quantum chemistry calculations.",
        "requirements": {"gpa": "Bachelor's degree in chemistry or biochemistry with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Statement of scientific intent", "references": "Three letters of recommendation"},
        "source": "https://chemistry.ua.edu/graduate-program/"
      },
      {
        "title": "Master of Science in Finance - Financial Risk Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Culverhouse College Dean's Merit Awards up to $10,000",
        "fee": "$65",
        "tuition": "$745/credit hour (in-state), $1,800/credit hour (out-of-state)",
        "desc": "STEM-designated graduate finance curriculum utilizing the Vulcan Value Partners Research Center for quantitative asset valuation, algorithmic portfolio management, and derivatives pricing.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA and analytical coursework", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE waiver available for 3.2+ GPA", "papers": "Finance career purpose statement", "references": "Two letters of recommendation"},
        "source": "https://culverhouse.ua.edu/academics/graduate-programs/master-of-science-in-finance/"
      },
      {
        "title": "NOAA National Water Center Continental Hydrology Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$7,000 summer research stipend, federal HPC supercomputer access, and National Water Model development placement",
        "fee": "$0",
        "tuition": "Funded through NOAA and Alabama Water Institute Endowment",
        "desc": "Prestigious summer research fellowship working inside the NOAA National Water Center at UA, validating high-resolution National Water Model predictions and remote sensing streamflow data.",
        "requirements": {"gpa": "Enrolled graduate student in hydrology, civil engineering, or atmospheric sciences with 3.4+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Hydrological prediction modeling proposal", "references": "AWI faculty sponsor recommendation"},
        "source": "https://ovpred.ua.edu/alabama-water-institute/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Stuart R. Bell",
        "role": "President & Professor of Mechanical Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Stuart R. Bell is the 29th president of The University of Alabama, a mechanical engineer who expanded UA's sponsored research past $130M and established the Alabama Water Institute."
      },
      {
        "name": "Dr. Scott W. Rayder",
        "role": "Executive Director & Senior Water Policy Scientist",
        "department": "Alabama Water Institute (AWI)",
        "subject": "environment",
        "bio": "Scott Rayder serves as executive director of AWI and former chief of staff at NOAA, leading interdisciplinary research partnerships linking UA with federal water and climate resilience agencies."
      },
      {
        "name": "Dr. Bharat Balasubramanian",
        "role": "Executive Director of Center for Advanced Vehicle Technologies & Professor",
        "department": "College of Engineering",
        "subject": "engineering",
        "bio": "Dr. Balasubramanian is an authority on automotive engineering and former vice president of Group Research at Daimler AG, pioneering electric vehicle safety and autonomous drive controls."
      }
    ]
  },

  # 4. The University of Alabama in Huntsville (Row 1010)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Alabama in Huntsville",
    "shortName": "UAH",
    "slug": "the-university-of-alabama-in-huntsville",
    "location": "Huntsville, Alabama, United States",
    "website": "https://www.uah.edu",
    "sourceRow": 1010,
    "stats": {"established": "1969", "students": "9,200+", "international": "5%", "faculty": "580+"},
    "heroSummary": "The University of Alabama in Huntsville (UAH) is a top-tier Carnegie R1 public research university located in Cummings Research Park—the second-largest research park in the United States. Situated adjacent to NASA's Marshall Space Flight Center and Redstone Arsenal in 'Rocket City,' UAH is nationally acclaimed for aerospace engineering, space plasma physics, atmospheric science, and cybersecurity.",
    "academicOverview": "UAH operates six colleges: Engineering, Science, Business, Arts, Humanities & Social Sciences, Nursing, and Honors. Its prominent research centers include the Center for Space Plasma and Aeronomic Research (CSPAR), the Rotorcraft Systems Engineering and Simulation Center, and the Center for Cybersecurity Research and Education (CCRE).",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.9) and standardized scores (ACT/SAT optional). Graduate admissions require an accredited baccalaureate degree with a 3.0+ cumulative GPA, official transcripts, department-specific GRE scores (where required), and recommendations.",
    "opps": [
      {
        "title": "Ph.D. in Aerospace Systems Engineering - Propulsion and Space Vehicles",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NASA Marshall Space Flight Center Graduate Research Fellowships with full tuition and $32,000 stipend",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite aerospace doctorate investigating solid/liquid rocket propulsion, cryogenic propellant management, hypersonics, and autonomous space trajectory dynamics.",
        "requirements": {"gpa": "BS or MS in aerospace, mechanical, or electrical engineering with 3.3+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Aerospace propulsion research statement", "references": "Three letters of recommendation"},
        "source": "https://www.uah.edu/eng/departments/mae/programs/aerospace-systems-engineering-phd"
      },
      {
        "title": "Ph.D. in Space Science - Heliophysics and Solar Flares",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "CSPAR Graduate Research Assistantships covering tuition plus $30,000 annual stipend",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral program at the Center for Space Plasma and Aeronomic Research researching coronal mass ejections, solar wind magnetohydrodynamics, and interstellar boundary physics.",
        "requirements": {"gpa": "Bachelor's or Master's in physics, astrophysics, or mathematics with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "GRE scores recommended", "papers": "Space science research statement", "references": "Three letters of scientific recommendation"},
        "source": "https://www.uah.edu/science/departments/space-science/graduate-program"
      },
      {
        "title": "Master of Science in Cybersecurity - Cyber Defense Infrastructure",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "DoD Cyber Scholarship Program and CCRE Assistantships up to $25,000",
        "fee": "$60",
        "tuition": "$580/credit hour (in-state), $1,280/credit hour (out-of-state)",
        "desc": "NSA/DHS-designated curriculum exploring industrial control system security, hardware reverse engineering, cryptographic algorithms, and military cyber operations.",
        "requirements": {"gpa": "Bachelor's in computer science, computer engineering, or related field with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt for qualified applicants", "papers": "Statement of cybersecurity purpose", "references": "Two professional/academic recommendations"},
        "source": "https://www.uah.edu/academic-programs/graduate/cybersecurity-ms"
      },
      {
        "title": "Master of Science in Atmospheric and Earth Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NASA and NOAA Cooperative Institute Research Assistantships up to $26,000",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Co-located with the National Weather Service in Huntsville, studying satellite meteorology, severe thunderstorm kinematics, lightning mapping arrays, and climate forecasting.",
        "requirements": {"gpa": "Undergraduate degree in meteorology, physics, math, or environmental science with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "GRE scores required", "papers": "Atmospheric research statement", "references": "Three academic recommendations"},
        "source": "https://www.uah.edu/science/departments/atmospheric-earth-science"
      },
      {
        "title": "Bachelor of Science in Optical Engineering",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "UAH Center for Applied Optics Merit Scholarships up to $10,000/year",
        "fee": "$30",
        "tuition": "$10,900/year (in-state), $25,200/year (out-of-state)",
        "desc": "One of only a handful of ABET-accredited optical engineering programs nationally, covering laser physics, fiber optic communications, electro-optical sensor design, and lens fabrication.",
        "requirements": {"gpa": "High school GPA 3.0+ with calculus readiness", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Engineering essay", "references": "One math/physics teacher recommendation"},
        "source": "https://www.uah.edu/eng/departments/ece/programs/optical-engineering-bs"
      },
      {
        "title": "Redstone Arsenal Aerospace & Defense Systems Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,500 summer stipend, security clearance sponsorship support, and defense contractor laboratory placement",
        "fee": "$0",
        "tuition": "Funded through Cummings Research Park Industry Consortium",
        "desc": "Competitive fellowship working on unmanned aircraft systems (UAS) guidance, radar signal processing, and avionics flight instrumentation in Huntsville defense laboratories.",
        "requirements": {"gpa": "US Citizen, enrolled engineering or computer science student with 3.3+ GPA", "ielts": "Exempt", "gre": "Exempt", "papers": "Aerospace systems research proposal", "references": "UAH faculty investigator letter"},
        "source": "https://www.uah.edu/rsesc/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Charles L. Karr",
        "role": "President & Professor of Aerospace Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Charles L. Karr is the president of UAH, an engineer specializing in genetic algorithms and autonomous systems who oversaw UAH's growth to over $110M in annual research expenditures."
      },
      {
        "name": "Dr. Nikolai V. Pogorelov",
        "role": "Distinguished Professor of Space Science",
        "department": "Department of Space Science & CSPAR",
        "subject": "physics",
        "bio": "Dr. Pogorelov is an internationally recognized astrophysicist modeling the heliosphere and solar wind interactions with the local interstellar medium using supercomputer simulations."
      },
      {
        "name": "Dr. Tommy Morris",
        "role": "Director & Professor of Electrical and Computer Engineering",
        "department": "Center for Cybersecurity Research and Education (CCRE)",
        "subject": "computer-science",
        "bio": "Dr. Morris leads UAH's cybersecurity center, an authority on industrial control system (SCADA) security, smart electric grid defenses, and cybersecurity testbeds."
      }
    ]
  },

  # 5. The University of Baltimore (Row 1011)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Baltimore",
    "shortName": "University of Baltimore",
    "slug": "the-university-of-baltimore",
    "location": "Baltimore, Maryland, United States",
    "website": "https://www.ubalt.edu",
    "sourceRow": 1011,
    "stats": {"established": "1925", "students": "3,200+", "international": "3%", "faculty": "260+"},
    "heroSummary": "The University of Baltimore (UBalt) is an innovative public university of the University System of Maryland, situated in the historic midtown cultural district of Baltimore. Known for its renowned School of Law, the Merrick School of Business, and the College of Public Affairs, UBalt specializes in professional, pre-law, forensic psychology, and public administration education.",
    "academicOverview": "UBalt is organized into four academic units: the School of Law, the College of Public Affairs, the Merrick School of Business, and the Yale Gordon College of Arts and Sciences. Its cutting-edge John and Frances Angelos Law Center features one of the most environmentally sustainable law buildings in the world (LEED Platinum).",
    "researchAdmissions": "Undergraduate admissions evaluate high school or transfer collegiate records on a rolling basis. Graduate and law school admissions require an accredited bachelor's degree with a 3.0+ GPA, standardized test scores (LSAT for Law; GRE optional for most graduate programs), a statement of goals, and professional references.",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Clinical Advocacy and Public Interest Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "UBalt Law Dean's Merit Scholarships covering up to 100% of tuition",
        "fee": "$60",
        "tuition": "$33,400/year (in-state), $49,800/year (out-of-state)",
        "desc": "ABA-accredited law degree renowned for clinical experiential education, housing 12 on-campus legal clinics serving urban civil rights, community development, and criminal defense.",
        "requirements": {"gpa": "Undergraduate GPA 3.3+; competitive LSAT score (154+ median); LSAC CAS report", "ielts": "TOEFL 90+ for international degrees", "gre": "LSAT required", "papers": "Law personal statement and character disclosures", "references": "Two letters of recommendation"},
        "source": "https://law.ubalt.edu/admissions/"
      },
      {
        "title": "Master of Science in Forensic Science - High-Technology Crime (Cyber Criminology)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Maryland Cyber Workforce Scholarships up to $6,000",
        "fee": "$50",
        "tuition": "$870/credit hour (in-state), $1,250/credit hour (out-of-state)",
        "desc": "Hands-on graduate program covering digital forensics extraction, cyber incident response, dark web investigations, and digital courtroom evidence testimony.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA in criminal justice, IT, or related field", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Cyber forensics statement of intent", "references": "Two professional/academic recommendations"},
        "source": "https://www.ubalt.edu/cpa/programs/ms-cyber-crime/"
      },
      {
        "title": "Master of Science in Applied Psychology - Counseling Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Psychology Assistantships covering partial tuition and stipend",
        "fee": "$50",
        "tuition": "$870/credit hour",
        "desc": "MPCAC-accredited program preparing licensed clinical professional counselors (LCPC) through 700 hours of clinical mental health practicums across Baltimore medical centers.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and 12+ credits in psychology", "ielts": "TOEFL 80+", "gre": "Exempt for 3.0+ GPA", "papers": "Clinical counseling essay and interview", "references": "Two academic/professional letters"},
        "source": "https://www.ubalt.edu/cas/programs/ms-applied-psychology/"
      },
      {
        "title": "Master of Public Administration (MPA) in Healthcare Policy and Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Schaefer Center Public Service Fellowships up to $5,000",
        "fee": "$50",
        "tuition": "$870/credit hour",
        "desc": "NASPAA-accredited public administration master's degree focusing on public healthcare financing, government program evaluation, urban non-profit governance, and public budget analytics.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Public service career essay", "references": "Two professional recommendations"},
        "source": "https://www.ubalt.edu/cpa/programs/mpa/"
      },
      {
        "title": "Bachelor of Science in Simulation and Game Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Creative Technology Talent Awards up to $5,000/year",
        "fee": "$35",
        "tuition": "$9,400/year (in-state), $22,800/year (out-of-state)",
        "desc": "Leading gaming curriculum in Maryland covering 3D asset modeling, procedural game engines (Unreal/Unity), virtual reality simulation for healthcare, and game narrative design.",
        "requirements": {"gpa": "High school GPA 2.5+ or transfer collegiate GPA 2.0+", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Game design motivation statement", "references": "One academic recommendation"},
        "source": "https://www.ubalt.edu/cas/programs/bs-simulation-game-design/"
      },
      {
        "title": "Schaefer Center for Public Policy Urban Governance Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,000 research stipend and direct placement with Maryland General Assembly or Baltimore City mayoral policy teams",
        "fee": "$0",
        "tuition": "Endowed through The William Donald Schaefer Center for Public Policy",
        "desc": "Graduate policy fellowship analyzing urban economic renewal, housing voucher mobility outcomes, and public transit equity across the Baltimore-Washington metropolitan region.",
        "requirements": {"gpa": "Enrolled graduate student in public administration, law, or criminal justice with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Urban policy research proposal", "references": "Schaefer Center faculty mentor letter"},
        "source": "https://www.ubalt.edu/cpa/centers/schaefer-center/fellowships.cfm"
      }
    ],
    "researchers": [
      {
        "name": "Kurt L. Schmoke",
        "role": "President & Former Mayor of Baltimore",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Kurt L. Schmoke serves as president of the University of Baltimore, a Rhodes Scholar, Harvard Law alumnus, former dean of Howard University School of Law, and three-term Mayor of Baltimore."
      },
      {
        "name": "Ronald Weich",
        "role": "Dean Emeritus & Professor of Law",
        "department": "School of Law",
        "subject": "social-sciences",
        "bio": "Ronald Weich is a legal scholar and former Assistant Attorney General for Legislative Affairs at the US Department of Justice who directed the School of Law and expanded experiential advocacy clinics."
      },
      {
        "name": "Dr. Bridgitte C. Gourley",
        "role": "Dean & Professor of Chemistry",
        "department": "Yale Gordon College of Arts and Sciences",
        "subject": "chemistry",
        "bio": "Dr. Gourley is a physical chemist and higher education leader whose scholarship centers on laser spectroscopy, fluorescence microscopy of micro-heterogeneous systems, and STEM pedagogical equity."
      }
    ]
  },

  # 6. The University of Kansas (Row 1014)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Kansas",
    "shortName": "University of Kansas",
    "slug": "the-university-of-kansas",
    "location": "Lawrence, Kansas, United States",
    "website": "https://ku.edu",
    "sourceRow": 1014,
    "stats": {"established": "1865", "students": "28,000+", "international": "8%", "faculty": "2,600+"},
    "heroSummary": "The University of Kansas (KU) is the flagship Carnegie R1 public research university of Kansas and a member of the prestigious Association of American Universities (AAU), situated on Mount Oread in Lawrence. Generating over $380M in annual research expenditures, KU is globally celebrated for the top-tier School of Pharmacy, the KU Medical Center, the Biodiversity Institute, and the Higuchi Biosciences Center.",
    "academicOverview": "KU comprises 14 academic schools spanning Lawrence and the KU Medical Center in Kansas City, Wichita, and Salina. Renowned research entities include the Institute for Bioengineering Research, the Center for Environmentally Beneficial Catalysis (CEBC), the Information and Telecommunication Technology Center (ITTC), and the Life Span Institute.",
    "researchAdmissions": "Undergraduate admission is evaluated based on high school GPA and curriculum rigor (assured admission for 3.25+ GPA). Graduate and doctoral applicants require an accredited bachelor's degree with a 3.0+ GPA, program-specific standardized test scores (GRE/GMAT where required), personal research statement, CV, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Pharmaceutical Chemistry - Drug Discovery & Macromolecular Delivery",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Higuchi Biosciences Center Fellowships covering 100% tuition plus $33,000 annual research stipend",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Consistently ranked among the top pharmaceutical chemistry doctoral programs globally, researching protein formulation, vaccine stabilization, nano-carrier drug delivery, and therapeutic peptides.",
        "requirements": {"gpa": "BS or MS in chemistry, pharmacy, biochemistry, or chemical engineering with 3.3+ GPA", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores optional", "papers": "Pharmaceutical research statement", "references": "Three letters of recommendation"},
        "source": "https://pharmchem.ku.edu/graduate-program"
      },
      {
        "title": "Ph.D. in Aerospace Engineering - Unmanned Aircraft and Hypersonics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Research Assistantships covering tuition plus $30,000 stipend",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Pioneering aerospace program utilizing wind tunnels and flight simulation suites to investigate flight control systems, aeroelasticity, autonomous drone swarming, and hypersonic aerothermodynamics.",
        "requirements": {"gpa": "Degree in aerospace or mechanical engineering with 3.3+ GPA", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Aerospace research objectives essay", "references": "Three engineering recommendations"},
        "source": "https://ae.ku.edu/graduate"
      },
      {
        "title": "Ph.D. in Ecology and Evolutionary Biology - Biodiversity and Biogeography",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Biodiversity Institute Fellowships with full tuition remission and $28,000 annual living stipend",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "World-class evolutionary biology doctorate utilizing the KU Natural History Museum's 10-million-specimen collection for phylogenomics, species distribution modeling, and paleontology.",
        "requirements": {"gpa": "Undergraduate biology or ecology degree with 3.2+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Statement of evolutionary research aims", "references": "Three letters of recommendation"},
        "source": "https://eeb.ku.edu/graduate-program"
      },
      {
        "title": "Master of Science in Computer Science - Cybersecurity & High-Performance Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "ITTC Graduate Research Grants up to $22,000",
        "fee": "$65",
        "tuition": "$550/credit hour (in-state), $1,150/credit hour (out-of-state)",
        "desc": "Rigorous master's program at the Information and Telecommunication Technology Center exploring cloud virtualization security, deep reinforcement learning, and formal verification methods.",
        "requirements": {"gpa": "BS in computer science or related discipline with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "GRE quantitative 152+", "papers": "Technical research goals essay", "references": "Two academic recommendations"},
        "source": "https://eecs.ku.edu/academics/graduate"
      },
      {
        "title": "Bachelor of Science in Chemical Engineering - Sustainable Energy & Catalysis",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Engineering Dean's Merit Scholarships up to $10,000/year",
        "fee": "$40",
        "tuition": "$11,800/year (in-state), $29,400/year (out-of-state)",
        "desc": "ABET-accredited chemical engineering program collaborating with the Center for Environmentally Beneficial Catalysis on green reaction engineering and battery storage materials.",
        "requirements": {"gpa": "High school GPA 3.2+ with chemistry and calculus readiness", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Engineering personal essay", "references": "One math/science teacher reference"},
        "source": "https://cpe.ku.edu/undergraduate"
      },
      {
        "title": "Higuchi Biosciences Center Translational Drug Development Fellowship",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,000 summer research stipend, cleanroom pharmaceutical formulation suite access, and clinical trial development mentorship",
        "fee": "$0",
        "tuition": "Supported through Higuchi Biosciences Center Endowment",
        "desc": "Interdisciplinary fellowship conducting preclinical formulation testing, microencapsulation of biologics, and analytical mass spectrometry on novel anticancer small molecules.",
        "requirements": {"gpa": "Enrolled graduate student in pharmaceutical chemistry, medicinal chemistry, or chemical engineering with 3.4+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Translational pharmaceutical proposal", "references": "Higuchi Center faculty investigator letter"},
        "source": "https://hbc.ku.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Douglas A. Girod",
        "role": "Chancellor & Professor of Otolaryngology",
        "department": "Office of the Chancellor",
        "subject": "biology",
        "bio": "Dr. Douglas A. Girod is the 18th chancellor of the University of Kansas, a surgical oncologist and former executive vice chancellor of KU Medical Center who has steered KU's AAU standing and clinical expansion."
      },
      {
        "name": "Dr. Ronald T. Borchardt",
        "role": "Solon E. Summerfield Distinguished Professor Emeritus",
        "department": "Department of Pharmaceutical Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Borchardt is a pioneer in drug delivery across biological barriers (especially the intestinal mucosa and blood-brain barrier), training generations of pharmaceutical scientists."
      },
      {
        "name": "Dr. A. Townsend Peterson",
        "role": "University Distinguished Professor & Curator of Ornithology",
        "department": "Department of Ecology & Evolutionary Biology & Biodiversity Institute",
        "subject": "biology",
        "bio": "Dr. Peterson is a world-renowned evolutionary ecologist who pioneered ecological niche modeling, studying evolutionary biogeography and the geography of infectious disease vectors."
      }
    ]
  },

  # 7. The University of Oklahoma Health Sciences Center (Row 1016)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Oklahoma Health Sciences Center",
    "shortName": "OU Health Sciences",
    "slug": "the-university-of-oklahoma-health-sciences-center",
    "location": "Oklahoma City, Oklahoma, United States",
    "website": "https://www.ouhsc.edu",
    "sourceRow": 1016,
    "stats": {"established": "1910", "students": "3,300+", "international": "4%", "faculty": "1,150+"},
    "heroSummary": "The University of Oklahoma Health Sciences Center (OUHSC) is the flagship academic healthcare and biomedical research center of the state of Oklahoma, located in Oklahoma City. Encompassing seven health professional colleges and the NCI-designated Stephenson Cancer Center, OUHSC is a national powerhouse in oncology clinical trials, diabetes metabolic research, neuroscience, and vision science at the Dean McGee Eye Institute.",
    "academicOverview": "OUHSC features seven distinct colleges: the College of Medicine, the College of Pharmacy, the College of Dentistry, the Fran and Earl Ziegler College of Nursing, the Hudson College of Public Health, the College of Allied Health, and the Graduate College. Its campus integrates major clinical hospitals including OU Health University of Oklahoma Medical Center and Oklahoma Children's Hospital.",
    "researchAdmissions": "Admissions to professional healthcare programs require centralized applications (AMCAS, PharmCAS, AADSAS, NursingCAS, SOPHAS). Prerequisites include comprehensive college coursework in biology, organic chemistry, biochemistry, and physics, along with standardized examinations (MCAT, DAT, GRE) and situational judgment assessments.",
    "opps": [
      {
        "title": "Doctor of Medicine (M.D.) - Academic Medicine and Biomedical Research Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Medicine Endowed Merit Scholarships up to full four-year tuition remission",
        "fee": "$100 (AMCAS)",
        "tuition": "$32,500/year (in-state), $68,200/year (out-of-state)",
        "desc": "LCME-accredited medical doctorate providing premier clinical clerkships across OU Health, featuring research immersion at the Stephenson Cancer Center and Oklahoma Children's Hospital.",
        "requirements": {"gpa": "Undergraduate science GPA 3.6+; competitive MCAT score (510+ average); AMCAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and OU secondary application", "references": "Pre-med advisory committee packet or three faculty letters"},
        "source": "https://medicine.ouhsc.edu/Education/Admissions"
      },
      {
        "title": "Ph.D. in Biomedical Sciences - Cancer Biology & Therapeutics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate College Fellowships providing full tuition waiver and $31,000 annual living stipend",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research program at the Stephenson Cancer Center exploring oncogenic signaling pathways, chimeric antigen receptor (CAR) T-cell therapy, DNA repair mechanisms, and drug resistance.",
        "requirements": {"gpa": "BS or MS in biological sciences, biochemistry, or chemistry with 3.2+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE optional", "papers": "Cancer research statement and laboratory CV", "references": "Three letters of scientific recommendation"},
        "source": "https://graduate.ouhsc.edu/Programs/Biomedical-Sciences"
      },
      {
        "title": "Doctor of Pharmacy (Pharm.D.) - Clinical Pharmacotherapy",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Pharmacy Alumni Scholarships up to $12,000/year",
        "fee": "$175 (PharmCAS)",
        "tuition": "$14,800/year (in-state), $33,600/year (out-of-state)",
        "desc": "ACPE-accredited four-year professional pharmacy program featuring advanced institutional health-system rotations, sterile compounding labs, and pharmacogenomics clinics.",
        "requirements": {"gpa": "Prerequisite collegiate GPA 2.75+ in calculus, anatomy, and organic chemistry; PharmCAS application", "ielts": "TOEFL 80+", "gre": "PCAT optional", "papers": "PharmCAS personal statement", "references": "Two recommendations including licensed pharmacist"},
        "source": "https://pharmacy.ouhsc.edu/Admissions/PharmD"
      },
      {
        "title": "Ph.D. in Neuroscience - Sensory Systems & Neurodegeneration",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Dean McGee Eye Institute and NIH Fellowships with full tuition coverage and $31,000 stipend",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Intensive laboratory doctorate investigating retinal neurovascular biology, macular degeneration pathophysiology, Alzheimer's disease synaptic loss, and neuroprotective gene therapies.",
        "requirements": {"gpa": "Degree in neuroscience, biology, or biophysics with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Statement of neuroscience research interests", "references": "Three letters of recommendation"},
        "source": "https://graduate.ouhsc.edu/Programs/Neuroscience"
      },
      {
        "title": "Master of Public Health (MPH) in Biostatistics and Epidemiology",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "biology", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Hudson College Dean's Merit Awards up to $6,000",
        "fee": "$145 (SOPHAS)",
        "tuition": "$450/credit hour (in-state), $1,050/credit hour (out-of-state)",
        "desc": "CEPH-accredited public health master's focusing on clinical trial design, survival analysis, epidemic surveillance modeling, and health disparities data analytics.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and college calculus/statistics", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "SOPHAS personal statement", "references": "Three academic/professional letters"},
        "source": "https://publichealth.ouhsc.edu/Academics/Academic-Departments/Biostatistics-and-Epidemiology"
      },
      {
        "title": "Stephenson Cancer Center Clinical Oncology Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,000 summer research stipend, cancer center clinical trials unit immersion, and cellular genomics core lab access",
        "fee": "$0",
        "tuition": "Supported through NCI Cancer Center Support Grant and Stephenson Cancer Foundation",
        "desc": "Pre-doctoral and clinical fellowship investigating phase I/II oncology clinical trial protocols, circulating tumor DNA detection, and immunotherapy response biomarkers in gynecologic and gastrointestinal cancers.",
        "requirements": {"gpa": "Enrolled medical, pharmacy, or biomedical doctoral student with 3.4+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Oncology clinical research proposal", "references": "Stephenson Cancer Center member recommendation"},
        "source": "https://www.ouhealth.com/stephenson-cancer-center/cancer-research/education-training/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Gary E. Raskob",
        "role": "Senior Vice President and Provost & Regents Professor of Biostatistics",
        "department": "Office of the Senior Vice President and Provost",
        "subject": "mathematics",
        "bio": "Dr. Gary Raskob is provost of OUHSC, an internationally preeminent clinical epidemiologist specializing in the prevention and antithrombotic management of venous thromboembolism."
      },
      {
        "name": "Dr. Robert S. Mannel",
        "role": "Director of Stephenson Cancer Center & Professor of Gynecologic Oncology",
        "department": "Stephenson Cancer Center",
        "subject": "biology",
        "bio": "Dr. Robert Mannel is a leading gynecologic oncologist who led the Stephenson Cancer Center to achieve prestigious National Cancer Institute (NCI) designation, leading nationwide clinical trials."
      },
      {
        "name": "Dr. David W. Parke II",
        "role": "Clinical Professor of Ophthalmology & Former CEO of American Academy of Ophthalmology",
        "department": "Dean McGee Eye Institute",
        "subject": "biology",
        "bio": "Dr. David Parke is a distinguished vitreoretinal surgeon and ophthalmic leader who directed the Dean McGee Eye Institute, advancing ophthalmic microsurgical training and clinical research."
      }
    ]
  },

  # 8. The University of Tennessee at Chattanooga (Row 1017)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Tennessee at Chattanooga",
    "shortName": "UTC",
    "slug": "the-university-of-tennessee-at-chattanooga",
    "location": "Chattanooga, Tennessee, United States",
    "website": "https://www.utc.edu",
    "sourceRow": 1017,
    "stats": {"established": "1886", "students": "11,400+", "international": "3%", "faculty": "650+"},
    "heroSummary": "The University of Tennessee at Chattanooga (UTC) is a vibrant public Carnegie R2 metropolitan doctoral institution situated in downtown Chattanooga, Tennessee. Acclaimed for its National Center for Computational Engineering (SimCenter), the College of Engineering and Computer Science, and pioneering research on EPB's commercial quantum networking testbed, UTC drives regional technological and industrial innovation.",
    "academicOverview": "UTC is organized into five academic colleges: Arts and Sciences, Engineering and Computer Science, the Gary W. Rollins College of Business, Health, Education and Professional Studies, and the Honors College. Flagship research centers include the SimCenter (supercomputing modeling and CFD), the Center for Urban Informatics and Progress (CUIP), and the Applied Infrastructure Academy.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.85 with 20 ACT, or 3.0+ test-optional). Graduate admissions require an earned bachelor's degree with a 2.70+ cumulative GPA (3.0+ for doctoral tracks), official transcripts, letters of recommendation, and program-specific standardized test scores.",
    "opps": [
      {
        "title": "Ph.D. in Computational Science - Computational Engineering (SimCenter)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SimCenter Graduate Research Assistantships covering tuition plus $28,000 annual stipend",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Elite computational doctoral program at the SimCenter investigating multiscale computational fluid dynamics (CFD), mesh generation algorithms, hypersonic flow modeling, and structural optimization.",
        "requirements": {"gpa": "BS or MS in engineering, computer science, applied mathematics, or physics with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Computational engineering statement of research", "references": "Three letters of academic recommendation"},
        "source": "https://www.utc.edu/engineering-and-computer-science/programs/computational-science-phd"
      },
      {
        "title": "Master of Science in Computer Science - Quantum Information & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Departmental Teaching and Research Assistantships up to $18,000",
        "fee": "$35",
        "tuition": "$540/credit hour (in-state), $1,180/credit hour (out-of-state)",
        "desc": "Cutting-edge curriculum connecting with the Chattanooga EPB Quantum Network to investigate quantum key distribution (QKD), post-quantum cryptography, and smart city sensor networks.",
        "requirements": {"gpa": "Bachelor's in computer science or related STEM field with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE optional for 3.2+ GPA", "papers": "Statement of computational purpose", "references": "Two letters of recommendation"},
        "source": "https://www.utc.edu/engineering-and-computer-science/programs/computer-science-ms"
      },
      {
        "title": "Master of Science in Mechanical Engineering - Energy and Thermal Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "College of Engineering Research Assistantships up to $18,000",
        "fee": "$35",
        "tuition": "$540/credit hour",
        "desc": "Advanced mechanical engineering program exploring renewable power integration, smart building HVAC thermodynamics, finite element mechanics, and advanced composites.",
        "requirements": {"gpa": "ABET-accredited BS in mechanical engineering with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE quantitative 150+", "papers": "Engineering professional goals essay", "references": "Two engineering faculty recommendations"},
        "source": "https://www.utc.edu/engineering-and-computer-science/programs/mechanical-engineering-ms"
      },
      {
        "title": "Master of Science in Environmental Science - Aquatic Ecology & Watersheds",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Tennessee River Gorge Trust Graduate Grants up to $14,000",
        "fee": "$35",
        "tuition": "$540/credit hour",
        "desc": "Field-oriented graduate degree utilizing the Tennessee River gorge and southern Appalachian ecosystems for aquatic macroinvertebrate sampling, karst hydrology, and conservation policy.",
        "requirements": {"gpa": "Bachelor's in biology, environmental science, or geology with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Environmental research proposal", "references": "Three letters of recommendation"},
        "source": "https://www.utc.edu/arts-and-sciences/biology-geology-and-environmental-science/environmental-science-ms"
      },
      {
        "title": "Bachelor of Science in Electrical Engineering - Smart Power & Microgrids",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "UTC Chancellor's Merit Scholarships up to $8,000/year",
        "fee": "$30",
        "tuition": "$10,200/year (in-state), $26,400/year (out-of-state)",
        "desc": "ABET-accredited program in the heart of Gig City, preparing engineers in automated power distribution networks, electric vehicle charging infrastructure, and embedded microcontrollers.",
        "requirements": {"gpa": "High school GPA 3.0+ with calculus readiness", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Personal essay", "references": "One counselor recommendation"},
        "source": "https://www.utc.edu/engineering-and-computer-science/programs/electrical-engineering-bs"
      },
      {
        "title": "Center for Urban Informatics and Progress (CUIP) Smart City Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 research stipend, ML Urban Testbed compute access, and city traffic IoT sensor deployment",
        "fee": "$0",
        "tuition": "Funded through NSF Smart and Connected Communities Grant and CUIP Endowment",
        "desc": "Graduate and upper-division research fellowship collecting real-time LiDAR, computer vision, and air quality telemetry along Chattanooga's ML King Smart Corridor to optimize pedestrian safety.",
        "requirements": {"gpa": "Enrolled UTC student in engineering, computer science, or data science with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Smart city IoT research proposal", "references": "CUIP faculty mentor recommendation"},
        "source": "https://www.utc.edu/research/center-for-urban-informatics-and-progress"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Steven R. Angle",
        "role": "Chancellor & Professor of Chemistry",
        "department": "Office of the Chancellor",
        "subject": "chemistry",
        "bio": "Dr. Steven R. Angle serves as chancellor of UTC, a synthetic organic chemist by training who has championed Chattanooga's smart city technology initiatives, quantum networking, and university research growth."
      },
      {
        "name": "Dr. Daniel L. Pack",
        "role": "Dean & Professor of Electrical Engineering",
        "department": "College of Engineering and Computer Science",
        "subject": "engineering",
        "bio": "Dr. Daniel Pack leads the College of Engineering and Computer Science, an expert in unmanned aerial systems, sensor networks, intelligent robotic control, and cooperative multi-agent search algorithms."
      },
      {
        "name": "Dr. Mina Sartipi",
        "role": "Founding Director of CUIP & UC Foundation Professor",
        "department": "Center for Urban Informatics and Progress (CUIP)",
        "subject": "computer-science",
        "bio": "Dr. Sartipi directs CUIP, a prominent computer scientist leading the Smart City Corridor, pioneering connected and autonomous vehicle testbeds and quantum key distribution experiments."
      }
    ]
  }
]
