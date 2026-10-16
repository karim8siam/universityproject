# scripts/make_b69_p2_chunk2.py
# Batch 69 Part 2 Chunk 2: Universities 24 to 30 (UND, UNF, UNT, UNT Dallas, UNI, Notre Dame, UP)

chunk4 = [
  # 24. University of North Dakota (Row 1136)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Dakota",
    "shortName": "UND",
    "slug": "university-of-north-dakota",
    "location": "Grand Forks, North Dakota, United States",
    "website": "https://und.edu",
    "sourceRow": 1136,
    "stats": {"established": "1883", "students": "14,100+", "international": "7%", "faculty": "850+"},
    "heroSummary": "The University of North Dakota (UND) is North Dakota's oldest public research university and flagship institution, founded in 1883 in Grand Forks. World-renowned for operating the premier John D. Odegard School of Aerospace Sciences—the largest and most comprehensive collegiate aviation and space studies program in the world—UND is also celebrated for energy and petroleum engineering at the Energy & Environmental Research Center (EERC), unmanned aircraft systems (UAS), and medicine.",
    "academicOverview": "UND comprises seven colleges: the John D. Odegard School of Aerospace Sciences, College of Engineering and Mines, School of Medicine & Health Sciences, College of Arts & Sciences, College of Nursing & Professional Disciplines, Nistler College of Business & Public Administration, and School of Law. UND leads the Northern Plains UAS Test Site.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.75) and core course prerequisites. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Aerospace Sciences - Autonomous Flight & Human Factors - Odegard School",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Odegard Graduate Fellowships $30,000/year plus complete tuition waiver",
        "fee": "$35",
        "tuition": "Covered by fellowship",
        "desc": "The world's leading aerospace doctorate, researching beyond-visual-line-of-sight (BVLOS) autonomous drone integration, pilot cognitive workload modeling, space flight human performance, and air traffic automation.",
        "requirements": {"gpa": "BS or MS in aviation, aerospace engineering, computer science, or human factors with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing aerospace research focus", "references": "Three letters of recommendation"},
        "source": "https://und.edu/programs/aerospace-sciences-phd/index.html"
      },
      {
        "title": "Ph.D. in Energy Engineering - Carbon Capture & Enhanced Hydrocarbon Recovery - EERC",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "EERC Graduate Research Assistantships $32,000/year plus tuition remission",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Elite energy research program based at the Energy & Environmental Research Center (EERC), investigating geologic carbon dioxide sequestration, Bakken shale petroleum thermodynamics, hydrogen generation, and geothermal energy systems.",
        "requirements": {"gpa": "Engineering or geosciences bachelor's degree with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://und.edu/programs/energy-engineering-phd/index.html"
      },
      {
        "title": "Master of Science in Space Studies - Planetary Geology & Lunar Habitat Design",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "NASA Space Grant Graduate Research Fellowships up to $22,000/year",
        "fee": "$35",
        "tuition": "$18,500/year",
        "desc": "Renowned interdisciplinary space program featuring the Inflatable Lunar/Mars Habitat analog station, space suit design laboratories, orbital mechanics, planetary surface geology, and international space treaty law.",
        "requirements": {"gpa": "Bachelor's degree in STEM or space-related field with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three academic references"},
        "source": "https://und.edu/programs/space-studies-ms/index.html"
      },
      {
        "title": "Ph.D. in Biomedical Sciences - Neurodegenerative Disease & Epigenetics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "School of Medicine & Health Sciences Graduate Fellowships $29,000/year plus tuition waiver",
        "fee": "$35",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research examining microglial neuroinflammation in Alzheimer's and Parkinson's diseases, epigenetic mechanisms of cancer development, viral pathogenesis, and rural toxicological health.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences or biochemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and lab experience record", "references": "Three letters of recommendation"},
        "source": "https://med.und.edu/education/biomedical-sciences/index.html"
      },
      {
        "title": "Ph.D. in Atmospheric Sciences - Cloud Physics & Severe Winter Weather Radar",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Research Assistantships $28,000/year plus full tuition coverage",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Conducting flight research using UND's Citation II atmospheric research aircraft and polarimetric Doppler radar to study aircraft ice accretion, blizzard snowflake microphysics, and climate variability.",
        "requirements": {"gpa": "BS in meteorology, atmospheric sciences, physics, or mathematics with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://und.edu/programs/atmospheric-sciences-phd/index.html"
      },
      {
        "title": "Bachelor of Science in Aeronautics - Commercial Aviation & Flight Operations",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Aviation Industry and Airline Pathway Scholarships up to $10,000/year",
        "fee": "$35",
        "tuition": "$19,800/year (out-of-state) + flight training fees",
        "desc": "The gold standard of collegiate flight education operating a modern fleet of over 100 aircraft, flight training devices, CRJ-700 jet simulators, and direct flow partnerships with major global airlines.",
        "requirements": {"gpa": "High school GPA 2.75+ and FAA First Class Medical Certificate", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://und.edu/programs/commercial-aviation-bsa/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Pablo de León",
        "role": "Professor & Chair of Space Studies",
        "department": "Department of Space Studies & Odegard School",
        "subject": "engineering",
        "bio": "Dr. de León directs the Human Spaceflight Laboratory, designing advanced planetary exploration spacesuits (NDX-1), lunar/Martian habitat analog stations, and spacecraft life support systems for NASA."
      },
      {
        "name": "Dr. Bethany Klemetsrud",
        "role": "Associate Professor of Chemical Engineering",
        "department": "Department of Chemical Engineering & EERC",
        "subject": "engineering",
        "bio": "Dr. Klemetsrud investigates renewable biofuels from agricultural waste, pyrolysis catalytic upgrading, carbonaceous adsorbent materials for wastewater treatment, and circular chemical manufacturing."
      },
      {
        "name": "Dr. David Delene",
        "role": "Research Professor of Atmospheric Sciences",
        "department": "Department of Atmospheric Sciences",
        "subject": "environment",
        "bio": "Dr. Delene specializes in airborne atmospheric instrumentation, airborne aerosol-cloud measurements, cloud droplet size distribution kinetics, and airborne weather modification analysis."
      }
    ]
  },

  # 25. University of North Florida (Row 1137)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Florida",
    "shortName": "UNF",
    "slug": "university-of-north-florida",
    "location": "Jacksonville, Florida, United States",
    "website": "https://www.unf.edu",
    "sourceRow": 1137,
    "stats": {"established": "1969", "students": "17,200+", "international": "5%", "faculty": "700+"},
    "heroSummary": "The University of North Florida (UNF) is a nationally ranked public doctoral university nestled on a pristine 1,381-acre wildlife sanctuary campus in coastal Jacksonville, Florida. Renowned for coastal and marine biology at the Coastal and Marine Biology Flagship Program, transportation and logistics, mechanical engineering, and nursing, UNF blends rigorous academics with vibrant First Coast coastal ecosystems.",
    "academicOverview": "UNF comprises six academic colleges: the College of Arts and Sciences, Coggin College of Business, Brooks College of Health, College of Computing, Engineering and Construction (CCEC), College of Education and Human Services, and the Hicks Honors College. The university operates the Taylor Engineering Research Institute and the Sawmill Slough Preserve.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and standardized test scores (SAT/ACT required by Florida law). Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Biology - Coastal and Marine Ecology & Shark Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Coastal Flagship Graduate Assistantships $16,000/year plus full tuition waiver",
        "fee": "$30",
        "tuition": "Covered by assistantship",
        "desc": "Nationally celebrated marine biology program utilizing the Atlantic coastline, St. Johns River estuary, and research vessels to study elasmobranch shark physiology, marine mammal strandings, and oyster reef restoration.",
        "requirements": {"gpa": "BS in biology, marine science, or related discipline with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with biology faculty", "references": "Three letters of recommendation"},
        "source": "https://www.unf.edu/coas/biology/graduate.html"
      },
      {
        "title": "Master of Science in Logistics and Supply Chain Management - Port Logistics & Intermodal Freight",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Coggin College Transportation Scholarships up to $8,000",
        "fee": "$30",
        "tuition": "$19,500 total",
        "desc": "Situated in Jacksonville—America's logistics hub with deepwater ports, rail terminals, and interstates—this program teaches maritime port operations, warehouse optimization, global trade compliance, and cold chain distribution.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; business or STEM background", "ielts": "TOEFL 79+", "gre": "GMAT/GRE optional", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://www.unf.edu/coggin/graduate/mslscm.html"
      },
      {
        "title": "Master of Science in Civil Engineering - Coastal and Port Infrastructure Resilience",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Taylor Engineering Research Fellowships up to $18,000/year plus tuition support",
        "fee": "$30",
        "tuition": "$17,500/year",
        "desc": "Specialized coastal engineering research at the Taylor Engineering Research Institute, investigating sea level rise adaptation, wave flume storm surge dynamics, living shorelines, and port maritime structures.",
        "requirements": {"gpa": "BS in civil engineering or related engineering field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://www.unf.edu/ccec/ccee/graduate.html"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner & Clinical Leadership",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Brooks College Health Scholarships and clinical preceptor stipends up to $8,000",
        "fee": "$30",
        "tuition": "$21,000/year",
        "desc": "CCNE-accredited practice doctorate preparing advanced practice registered nurses in primary care diagnostic management, epidemiological health disparities, clinical health policy, and healthcare systems leadership.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.2+; unencumbered Florida RN license", "ielts": "TOEFL 85+", "gre": "GRE not required", "papers": "DNP personal essay and clinical portfolio", "references": "Three clinical/academic references"},
        "source": "https://www.unf.edu/brooks/nursing/graduate.html"
      },
      {
        "title": "Master of Science in Computing and Information Sciences - Software Engineering & Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Computing Graduate Assistantships up to $14,000/year",
        "fee": "$30",
        "tuition": "$18,000 total",
        "desc": "Advanced computing graduate curriculum emphasizing enterprise software architecture, full-stack cloud computing, artificial intelligence algorithms, network intrusion defenses, and database systems.",
        "requirements": {"gpa": "BS in Computer Science, Information Technology, or engineering with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two letters of recommendation"},
        "source": "https://www.unf.edu/ccec/cis/graduate.html"
      },
      {
        "title": "Bachelor of Fine Arts in Art - Sculpture & Intermedia Art",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Departmental Visual Arts Talent Scholarships up to $5,000/year",
        "fee": "$30",
        "tuition": "$20,800/year (out-of-state) / $6,400/year (in-state)",
        "desc": "NASAD-accredited studio art BFA program offering intensive training in bronze foundry casting, wood sculpture, digital fabrication, contemporary installation, and gallery exhibition design.",
        "requirements": {"gpa": "High school GPA 2.5+ and portfolio submission of 12 creative works", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Artist statement", "references": "One letter of recommendation"},
        "source": "https://www.unf.edu/coas/art-design/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jim Gelsleichter",
        "role": "Director & Professor of Biology",
        "department": "Coastal and Marine Biology Flagship Program",
        "subject": "biology",
        "bio": "Dr. Gelsleichter directs the Coastal and Marine Biology Program, investigating shark endocrinology, reproduction, ecotoxicology of oil spills and persistent pollutants on marine elasmobranchs, and marine animal tagging."
      },
      {
        "name": "Dr. Christopher Baynard",
        "role": "Associate Professor of Geography and GIS",
        "department": "Department of Economics and Geography",
        "subject": "environment",
        "bio": "Dr. Baynard conducts geospatial research in energy infrastructure mapping, environmental footprint analysis of oil extraction, satellite remote sensing of wetlands, and port logistics geography."
      },
      {
        "name": "Dr. Zornitza Prodanoff",
        "role": "Professor of Computing",
        "department": "School of Computing",
        "subject": "computer-science",
        "bio": "Dr. Prodanoff investigates computer network protocol performance, smart card security, queuing theory models for multimedia communications, and wireless sensor network routing."
      }
    ]
  },

  # 26. University of North Texas (Row 1139)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Texas",
    "shortName": "UNT",
    "slug": "university-of-north-texas",
    "location": "Denton, Texas, United States",
    "website": "https://www.unt.edu",
    "sourceRow": 1139,
    "stats": {"established": "1890", "students": "44,500+", "international": "9%", "faculty": "1,850+"},
    "heroSummary": "The University of North Texas (UNT) is an elite Carnegie R1 public research university located in Denton, Texas, within the dynamic Dallas-Fort Worth metroplex. Internationally renowned for having one of the world's most prestigious music institutions in the College of Music—featuring the legendary One O'Clock Lab Band—UNT is equally celebrated for materials science, additive manufacturing at Discovery Park, environmental philosophy, and logistics.",
    "academicOverview": "UNT spans 14 colleges and schools including the College of Music, College of Engineering, College of Science, College of Visual Arts and Design (CVAD), G. Brint Ryan College of Business, and the College of Information. Key research hubs include the 300-acre Discovery Park engineering facility and the Center for Agile and Adaptive Additive Manufacturing (CAAAM).",
    "researchAdmissions": "Undergraduate admissions evaluate class rank, high school GPA, and test scores. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Doctor of Musical Arts (D.M.A.) in Jazz Studies - Performance & Composition - College of Music",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full graduate teaching assistantships $22,000/year plus tuition remission and national touring stipends",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "The nation's first and most Grammy-nominated jazz degree program, featuring performance opportunities with the premier One O'Clock Lab Band, advanced big band arranging, jazz improvisation pedagogy, and studio recording.",
        "requirements": {"gpa": "Master's degree in music with GPA 3.25+; live audition and portfolio of original compositions", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE not required", "papers": "Musical statement of purpose and repertoire list", "references": "Three letters of recommendation from master musicians"},
        "source": "https://jazz.unt.edu/graduate"
      },
      {
        "title": "Ph.D. in Materials Science and Engineering - Additive Manufacturing & High-Entropy Alloys - Discovery Park",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Additive Manufacturing (CAAAM) Fellowships $32,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research conducted at Discovery Park using laser powder bed fusion, focused ion beam microscopy, and atom probe tomography to develop high-entropy alloys, refractory aerospace metals, and wear-resistant coatings.",
        "requirements": {"gpa": "BS or MS in materials science, mechanical engineering, physics, or chemistry with GPA 3.3+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://materials.engineering.unt.edu/graduate/phd"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Autonomous Vehicles & Mobile Sensing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research and Teaching Assistantships $29,000/year plus tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Advanced computing doctorate researching multi-robot swarm mapping, deep neural network perception, cyber-physical smart cities, and edge computing for connected vehicles.",
        "requirements": {"gpa": "BS in Computer Science or Computer Engineering with GPA 3.2+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://computerscience.engineering.unt.edu/graduate/phd"
      },
      {
        "title": "Ph.D. in Philosophy - Environmental Ethics & Biocultural Conservation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental teaching assistantships $24,000/year plus complete tuition coverage",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Home to the premier journal Environmental Ethics, this world-renowned doctorate focuses on biocultural conservation, indigenous environmental philosophies, wilderness policy, and environmental justice.",
        "requirements": {"gpa": "Bachelor's or master's degree in philosophy or related field with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Philosophical writing sample (15-20 pages) and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://philosophy.unt.edu/graduate/doctoral-program"
      },
      {
        "title": "Master of Science in Aviation Logistics - Air Cargo Logistics & Airport Operations",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Ryan College of Business Merit Scholarships up to $10,000",
        "fee": "$75",
        "tuition": "$21,500 total",
        "desc": "Specialized aviation supply chain program leveraging proximity to DFW International Airport and Alliance Airport to train leaders in international air freight, airport revenue management, and airline fleet scheduling.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; quantitative or business background", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://cob.unt.edu/aviation-logistics"
      },
      {
        "title": "Ph.D. in Information Science - Data Analytics & Health Informatics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Information Doctoral Assistantships $27,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctorate addressing clinical knowledge graphs, natural language processing for electronic health records, library digital curation, and social network analysis.",
        "requirements": {"gpa": "Master's degree in information science, computer science, or allied field with GPA 3.3+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of research interests and scholarly writing sample", "references": "Three letters of recommendation"},
        "source": "https://informationscience.unt.edu/phd-program"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rajiv Mishra",
        "role": "Distinguished Research Professor of Materials Science",
        "department": "Department of Materials Science and Engineering & Discovery Park",
        "subject": "engineering",
        "bio": "Dr. Mishra directs the Advanced Materials and Manufacturing Processes Institute (AMMPI), specializing in friction stir processing of metals, severe plastic deformation, and additive manufacturing of structural alloys."
      },
      {
        "name": "Dr. Alan Baylock",
        "role": "Director & Professor of Music",
        "department": "One O'Clock Lab Band & College of Music",
        "subject": "arts-design",
        "bio": "Dr. Baylock is a celebrated big band composer, arranger, and director of the Grammy-nominated UNT One O'Clock Lab Band, conducting jazz masterclasses and releasing critically acclaimed orchestral jazz albums."
      },
      {
        "name": "Dr. Saraju Mohanty",
        "role": "Professor of Computer Science and Engineering",
        "department": "Department of Computer Science and Engineering",
        "subject": "computer-science",
        "bio": "Dr. Mohanty directs the Smart Electronic Systems Laboratory (SESL), researching secure IoT edge computing hardware, consumer healthcare wearables, and low-power smart city sensor networks."
      }
    ]
  },

  # 27. University of North Texas at Dallas (Row 1140)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Texas at Dallas",
    "shortName": "UNT Dallas",
    "slug": "university-of-north-texas-at-dallas",
    "location": "Dallas, Texas, United States",
    "website": "https://www.untdallas.edu",
    "sourceRow": 1140,
    "stats": {"established": "2000", "students": "4,100+", "international": "4%", "faculty": "210+"},
    "heroSummary": "The University of North Texas at Dallas (UNT Dallas) is the only four-year public university located within the city limits of Dallas, Texas. Founded in 2000, UNT Dallas is dedicated to socioeconomic mobility, community health, criminal justice, urban leadership, and public law through the UNT Dallas College of Law located in downtown Dallas.",
    "academicOverview": "UNT Dallas houses four schools: the School of Behavioral Health and Human Services, School of Business, School of Education, and the UNT Dallas College of Law. The university is a designated Hispanic-Serving Institution (HSI) and minority-majority urban campus focused on workforce-aligned education.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) and transcripts with test-optional policies. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Experiential Legal Education & Community Advocacy - Downtown Dallas Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "UNT Dallas College of Law Public Service Fellowships up to $10,000",
        "fee": "$50",
        "tuition": "$18,500/year",
        "desc": "Innovative, accessible ABA-accredited law curriculum located in the historic Dallas Municipal Building, emphasizing hands-on legal clinic representation, community justice, courtroom advocacy, and practical legal skills.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 85+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://lawschool.untdallas.edu/"
      },
      {
        "title": "Master of Science in Criminal Justice - Urban Policing & Restorative Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Behavioral Health Graduate Assistantships up to $10,000/year",
        "fee": "$50",
        "tuition": "$13,500 total",
        "desc": "Applied graduate degree examining urban community policing models, juvenile delinquency prevention, restorative justice sentencing alternatives, and crime mapping analytics in the Dallas metroplex.",
        "requirements": {"gpa": "Bachelor's in criminal justice, sociology, or allied field with GPA 2.8+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and professional resume", "references": "Two recommendations"},
        "source": "https://www.untdallas.edu/academics/programs/criminal-justice-ms.php"
      },
      {
        "title": "Master of Science in Public Health - Urban Health Equity & Community Epidemiology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Community Health Traineeships and tuition waivers up to $8,000",
        "fee": "$50",
        "tuition": "$14,000 total",
        "desc": "Community-based public health master's focusing on urban chronic disease prevention, social determinants of health in Southern Dallas communities, maternal-child health disparities, and biostatistical tracking.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and coursework in statistics or life sciences", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Public health statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.untdallas.edu/academics/programs/public-health-ms.php"
      },
      {
        "title": "Bachelor of Science in Information Technology - Cloud Infrastructure & Enterprise Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM First-Generation College Scholarships up to $6,000/year",
        "fee": "$40",
        "tuition": "$19,200/year (out-of-state) / $9,600/year (in-state)",
        "desc": "Practical curriculum preparing cloud database administrators, enterprise network engineers, and IT project managers with industry certifications in AWS, Cisco CCNA, and CompTIA Security+.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.untdallas.edu/academics/programs/information-technology-bs.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Strategic Management & Health Services",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "School of Business Dean's Fellowships up to $5,000",
        "fee": "$50",
        "tuition": "$15,500 total",
        "desc": "Cohort-based executive MBA delivering practical managerial economics, healthcare organizational operations, corporate accounting analytics, and entrepreneurship in North Texas.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://www.untdallas.edu/academics/programs/mba.php"
      },
      {
        "title": "Bachelor of Science in Biology - Pre-Health & Cellular Diagnostics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Joint Admission Medical Program (JAMP) undergraduate pre-med stipends and tuition waivers",
        "fee": "$40",
        "tuition": "$19,200/year (out-of-state)",
        "desc": "Pre-medical undergraduate biology degree featuring modern laboratory microscopy, cellular genetics, human physiology, and partnerships with UT Southwestern Medical Center.",
        "requirements": {"gpa": "High school GPA 2.7+ with high school biology and chemistry coursework", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One science teacher reference"},
        "source": "https://www.untdallas.edu/academics/programs/biology-bs.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Felecia Epps",
        "role": "Dean & Professor of Law",
        "department": "UNT Dallas College of Law",
        "subject": "social-sciences",
        "bio": "Dean Epps specializes in civil procedure, legal education pedagogy, access to justice for underserved populations, consumer bankruptcy, and judicial ethics."
      },
      {
        "name": "Dr. Eric Coleman",
        "role": "Associate Professor of Criminal Justice",
        "department": "Department of Criminal Justice",
        "subject": "social-sciences",
        "bio": "Dr. Coleman conducts empirical research on police use of force, community policing reform in urban municipalities, procedural justice, and juvenile corrections alternatives."
      },
      {
        "name": "Dr. Aaron Bartula",
        "role": "Associate Professor of Sociology & Public Health",
        "department": "School of Behavioral Health and Human Services",
        "subject": "social-sciences",
        "bio": "Dr. Bartula investigates urban social determinants of health, community crime mapping, spatial analysis of food insecurity, and health equity outcomes in North Texas."
      }
    ]
  },

  # 28. University of Northern Iowa (Row 1142)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Northern Iowa",
    "shortName": "UNI",
    "slug": "university-of-northern-iowa",
    "location": "Cedar Falls, Iowa, United States",
    "website": "https://www.uni.edu",
    "sourceRow": 1142,
    "stats": {"established": "1876", "students": "9,000+", "international": "4%", "faculty": "560+"},
    "heroSummary": "The University of Northern Iowa (UNI) is a high-ranking public comprehensive university located in Cedar Falls, Iowa. Founded in 1876 as the state normal school, UNI is celebrated for producing Iowa's top educators, housing the nationally acclaimed Wilson College of Business with its pristine CPA pass rates, operating the Metal Casting Center for 3D sand-mold additive manufacturing, and leading Great Plains tallgrass prairie restoration.",
    "academicOverview": "UNI spans four colleges: the College of Education, David W. Wilson College of Business, College of Humanities, Arts and Sciences, and College of Social and Behavioral Sciences. The university is home to the Tallgrass Prairie Center and the UNI Metal Casting Center, a national leader in foundry additive manufacturing.",
    "researchAdmissions": "Undergraduate admissions evaluate high school Regent Admission Index (RAI) score based on GPA, class rank, and core coursework. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Technology - Metal Casting & 3D Sand Printing Additive Manufacturing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Metal Casting Center Graduate Research Assistantships $18,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Operating one of the largest industrial 3D sand mold printing facilities in North America, this program teaches rapid metal casting prototypes, foundry metallurgy, binder jet additive manufacturing, and quality inspection.",
        "requirements": {"gpa": "BS in engineering technology, industrial technology, or materials science with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Two letters of recommendation"},
        "source": "https://mcc.uni.edu/education"
      },
      {
        "title": "Master of Science in Biology - Tallgrass Prairie Ecology & Conservation Restoration",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Tallgrass Prairie Center Graduate Fellowships $16,500/year plus full tuition waiver",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Housed at the world-renowned Tallgrass Prairie Center, this program investigates native prairie seed genetics, roadside prairie vegetation management, agricultural soil microbial restoration, and monarch butterfly habitat conservation.",
        "requirements": {"gpa": "Undergraduate degree in biology, botany, or environmental science with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty mentor", "references": "Three letters of recommendation"},
        "source": "https://tallgrassprairiecenter.org/academics"
      },
      {
        "title": "Master of Accounting (MAcc) - Forensic Accounting & Corporate Taxation - Wilson College",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Wilson College of Business Endowed Accounting Scholarships up to $10,000",
        "fee": "$60",
        "tuition": "$17,500 total",
        "desc": "Consistently recognized for top-tier national CPA exam pass rates, offering advanced coursework in auditing analytics, forensic accounting investigations, corporate tax strategy, and internal controls.",
        "requirements": {"gpa": "Undergraduate accounting degree with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GMAT/GRE waiver available", "papers": "Statement of professional goals", "references": "Two recommendations"},
        "source": "https://business.uni.edu/accounting/macc"
      },
      {
        "title": "Doctor of Education (Ed.D.) - Educational Leadership & Curriculum Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Education Doctoral Assistantships $15,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Iowa's premier doctoral education program, preparing school superintendents, educational policymakers, and curriculum leaders in organizational transformation, educational equity, and instructional coaching.",
        "requirements": {"gpa": "Master's degree in education with GPA 3.5+; minimum 3 years educational leadership experience", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of purpose", "references": "Three professional references"},
        "source": "https://coe.uni.edu/departments/educational-leadership-postsecondary-education/edd-program"
      },
      {
        "title": "Master of Science in Environmental Science - Groundwater Hydrogeology & Watershed Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental research assistantships $16,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary environmental master's examining agricultural non-point source nutrient runoff, groundwater karst contaminant transport, tile drainage filtration, and stream geomorphology.",
        "requirements": {"gpa": "BS in earth science, biology, chemistry, or environmental science with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two recommendations"},
        "source": "https://earth.uni.edu/environmental-science"
      },
      {
        "title": "Master of Arts in Speech-Language Pathology - Pediatric & Neurological Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Roy Eblen Speech and Hearing Clinic Assistantships covering tuition and stipends",
        "fee": "$60",
        "tuition": "$18,000/year",
        "desc": "CAA-accredited clinical master's delivering over 400 clinical practicum hours in dysphagia diagnosis, augmentative communication technology, pediatric speech disorders, and adult cognitive-communication therapies.",
        "requirements": {"gpa": "BS in Communication Sciences and Disorders with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE required", "papers": "CSDCAS application essay", "references": "Three letters of recommendation"},
        "source": "https://csd.uni.edu/graduate-programs"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Laura Jackson",
        "role": "Director & Professor of Biology",
        "department": "Tallgrass Prairie Center & Department of Biology",
        "subject": "environment",
        "bio": "Dr. Jackson directs the Tallgrass Prairie Center, researching agroecology, native perennial seed mix design, ecosystem services of roadside prairies, and soil carbon sequestration in restored grasslands."
      },
      {
        "name": "Dr. Jerry Thiel",
        "role": "Director & Professor of Metal Casting",
        "department": "UNI Metal Casting Center",
        "subject": "engineering",
        "bio": "Dr. Thiel is an internationally recognized leader in foundry technology, pioneering 3D sand printing for complex metal castings, phenolic urethane binder chemistry, and bio-based mold materials."
      },
      {
        "name": "Dr. Kavita Dhanwada",
        "role": "Professor of Biology & Biochemistry",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Dhanwada investigates molecular toxicology, examining the biochemical mechanisms of agricultural herbicide exposure (such as atrazine) on human cell lines and aquatic micro-organisms."
      }
    ]
  },

  # 29. University of Notre Dame (Row 1143)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Notre Dame",
    "shortName": "Notre Dame",
    "slug": "university-of-notre-dame",
    "location": "Notre Dame, Indiana, United States",
    "website": "https://www.nd.edu",
    "sourceRow": 1143,
    "stats": {"established": "1842", "students": "13,100+", "international": "14%", "faculty": "1,450+"},
    "heroSummary": "The University of Notre Dame is one of the world's premier private Catholic research universities, founded in 1842 in Notre Dame, Indiana, adjacent to South Bend. A distinguished member of the Association of American Universities (AAU), Notre Dame is internationally celebrated for transformative scholarship in aerospace aerodynamics, peace studies, nanomaterials, chemical and biomolecular engineering, and architecture.",
    "academicOverview": "Notre Dame features eight colleges and schools: the College of Arts and Letters, College of Science, College of Engineering, Mendoza College of Business, Notre Dame Law School, Keough School of Global Affairs, School of Architecture, and the Graduate School. Flagship research centers include the Kroc Institute for International Peace Studies and the Notre Dame Turbomachinery Laboratory.",
    "researchAdmissions": "Undergraduate admissions are among the most competitive in the world (holistic review via Common App). Graduate admissions require an accredited bachelor's degree with a high GPA (typically 3.5+), statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 100+ or IELTS 7.5+).",
    "opps": [
      {
        "title": "Ph.D. in Aerospace and Mechanical Engineering - Hypersonics & Turbomachinery",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full 5-year guarantee: $36,500/year stipend, full tuition remission, and health insurance",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Elite doctoral program utilizing the Hessert Laboratory for Aerospace Research and Notre Dame Turbomachinery Laboratory (NDTL) for Mach 6 quiet wind-tunnel hypersonics, gas turbine aerodynamics, and aeroacoustics.",
        "requirements": {"gpa": "BS or MS in aerospace or mechanical engineering with GPA 3.5+", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GRE optional", "papers": "Statement of intent detailing research alignment with faculty labs", "references": "Three letters of recommendation"},
        "source": "https://ame.nd.edu/graduate/"
      },
      {
        "title": "Ph.D. in Peace Studies - Keough School of Global Affairs & Kroc Institute",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full Kroc Doctoral Fellowships $35,000/year plus full tuition remission for 5 years",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "World-renowned interdisciplinary doctorate combining peace studies with anthropology, history, political science, psychology, sociology, or theology, focusing on peace agreement implementation, transitional justice, and armed conflict prevention.",
        "requirements": {"gpa": "Bachelor's or master's degree in humanities or social sciences with GPA 3.5+", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of intent", "references": "Three letters of recommendation"},
        "source": "https://kroc.nd.edu/ph-d-program/"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Biometrics & Trustworthy AI",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full graduate research and teaching fellowships $36,000/year plus complete tuition coverage",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "World-leading doctoral research at the Computer Vision Research Lab (CVRL) investigating deep learning face and iris recognition, deepfake detection, privacy-preserving AI architectures, and graph neural networks.",
        "requirements": {"gpa": "BS or MS in Computer Science or allied field with GPA 3.5+", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Statement of intent", "references": "Three letters of recommendation"},
        "source": "https://cse.nd.edu/graduate/"
      },
      {
        "title": "Ph.D. in Chemistry and Biochemistry - Actinide Radiochemistry & Supramolecular Assembly",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "physics"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Guaranteed 5-year support: $35,500/year stipend, full tuition remission, and health benefits",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research in heavy element actinide materials at the Materials Science of Actinides Center of Excellence, synthetic molecular cages, bioinorganic catalysis, and energy conversion materials.",
        "requirements": {"gpa": "BS in Chemistry, Biochemistry, or Materials Science with GPA 3.3+", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://chemistry.nd.edu/graduate-programs/"
      },
      {
        "title": "Master of Architecture (M.Arch) - Classical Architecture & Urbanism - School of Architecture",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "School of Architecture Merit Fellowships covering 50% to 100% of tuition plus Rome study grants",
        "fee": "$75",
        "tuition": "$58,500/year",
        "desc": "The world's preeminent classical and traditional urban architecture graduate program, featuring a mandatory semester of architectural study at Notre Dame's Rome Global Gateway, classical proportioning, and sustainable urban design.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.2+ and architectural/visual design portfolio", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Statement of intent", "references": "Three letters of recommendation"},
        "source": "https://architecture.nd.edu/academics/graduate-programs/"
      },
      {
        "title": "Ph.D. in Biological Sciences - Global Health & Vector Biology - Eck Institute",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Eck Institute for Global Health Fellowships $36,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary doctoral training researching mosquito transmission of malaria and dengue fever, neglected tropical diseases, parasite genetics, and host immune evasion mechanisms at the Eck Institute.",
        "requirements": {"gpa": "BS in biological sciences with GPA 3.3+ and laboratory experience", "ielts": "TOEFL 100+", "gre": "GRE not accepted", "papers": "Statement of purpose detailing biological research goals", "references": "Three letters of recommendation"},
        "source": "https://biology.nd.edu/graduate-program/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Peter Burns",
        "role": "Henry J. Massman Professor of Civil and Environmental Engineering and Earth Sciences",
        "department": "Department of Chemistry & Materials Science of Actinides Center",
        "subject": "chemistry",
        "bio": "Dr. Burns is an internationally renowned radiochemist investigating uranium mineralogy, nanoscale actinide peroxide clusters, nuclear waste disposal thermodynamics, and solid-state crystal chemistry."
      },
      {
        "name": "Dr. Kevin Bowyer",
        "role": "Schubmehl-Prein Family Professor of Computer Science and Engineering",
        "department": "Department of Computer Science and Engineering",
        "subject": "computer-science",
        "bio": "Dr. Bowyer is a world leader in biometrics, computer vision, iris recognition accuracy, demographic fairness in facial recognition algorithms, and forensic imaging systems."
      },
      {
        "name": "Dr. Joshua Shrout",
        "role": "Associate Professor of Civil and Environmental Engineering and Earth Sciences",
        "department": "Department of Biological Sciences & Center for Environmental Science",
        "subject": "biology",
        "bio": "Dr. Shrout conducts pioneering research in microbial motility, biofilm architecture formation, Pseudomonas aeruginosa social behavior, and microfluidic environmental microbiology."
      }
    ]
  },

  # 30. University of Portland (Row 1149)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Portland",
    "shortName": "UP",
    "slug": "university-of-portland",
    "location": "Portland, Oregon, United States",
    "website": "https://www.up.edu",
    "sourceRow": 1149,
    "stats": {"established": "1901", "students": "3,800+", "international": "5%", "faculty": "310+"},
    "heroSummary": "The University of Portland (UP) is an elite private Catholic university established in 1901, perched on a bluff overlooking the Willamette River in Portland, Oregon. Celebrated for small-class undergraduate and graduate mentorship, top-ranked programs in civil and mechanical engineering through the Shiley School of Engineering, distinguished nursing education, and ethical business leadership, UP is a Pacific Northwest academic cornerstone.",
    "academicOverview": "UP comprises the College of Arts and Sciences, the Donald P. Shiley School of Engineering, the Pamplin School of Business, the School of Education, and the School of Nursing and Health Innovations. The university operates the Shiley Engineering labs and the Beauchamp Recreation and Wellness Center.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate applicants. Graduate applicants require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Engineering - Renewable Energy & Structural Engineering - Shiley School",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Donald P. Shiley Graduate Engineering Fellowships up to $14,000/year",
        "fee": "$50",
        "tuition": "$24,000/year",
        "desc": "High-impact master's curriculum combining clean energy power electronics, Pacific Northwest seismic structural design, sustainable wastewater treatment, and thermal fluids simulation.",
        "requirements": {"gpa": "BS in engineering from ABET-accredited program with GPA 3.0+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Two letters of recommendation"},
        "source": "https://engineering.up.edu/graduate-programs/"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner & Integrative Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "School of Nursing Merit Scholarships up to $12,000/year",
        "fee": "$50",
        "tuition": "$28,000/year",
        "desc": "CCNE-accredited practice doctorate featuring clinical partnerships across Portland medical centers, focusing on trauma-informed primary care, chronic disease management, and planetary health nursing.",
        "requirements": {"gpa": "BSN from accredited nursing school with GPA 3.2+; unencumbered RN license", "ielts": "TOEFL 85+", "gre": "GRE not required", "papers": "DNP personal goal statement", "references": "Three clinical/academic references"},
        "source": "https://nursing.up.edu/graduate-programs/dnp.html"
      },
      {
        "title": "Bachelor of Science in Environmental Science - Pacific Northwest Forest & River Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Presidential and Holy Cross Merit Scholarships up to $28,000/year",
        "fee": "$50",
        "tuition": "$53,500/year",
        "desc": "Hands-on ecological curriculum utilizing the Willamette River and Columbia River Gorge field sites to study salmonid habitat restoration, forest carbon cycles, and watershed water quality.",
        "requirements": {"gpa": "High school GPA 3.0+ with strong laboratory science coursework", "ielts": "TOEFL 80+", "gre": "N/A", "papers": "Admissions essay", "references": "One academic recommendation"},
        "source": "https://www.up.edu/environmentalscience/"
      },
      {
        "title": "Master of Business Administration (MBA) - Sustainable Operations & Ethical Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Pamplin School of Business Dean's Scholarships up to $8,000",
        "fee": "$50",
        "tuition": "$26,000 total",
        "desc": "AACSB-accredited evening and weekend MBA program emphasizing corporate environmental sustainability, ethical supply chains, financial risk modeling, and organizational culture.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and 2+ years professional experience", "ielts": "TOEFL 80+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://business.up.edu/graduate/mba.html"
      },
      {
        "title": "Bachelor of Science in Computer Science - Full-Stack Engineering & AI Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Shiley STEM Talent Grants up to $20,000/year",
        "fee": "$50",
        "tuition": "$53,500/year",
        "desc": "Rigorous undergraduate computing program featuring senior capstone industry projects, algorithmic optimization, cybersecurity, mobile computing, and machine learning development.",
        "requirements": {"gpa": "High school GPA 3.0+ with precalculus or calculus", "ielts": "TOEFL 80+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://engineering.up.edu/computer-science/"
      },
      {
        "title": "Master of Arts in Education - Culturally Responsive Curriculum & Teaching",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "School of Education Teacher Leader Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$18,500 total",
        "desc": "Graduate teaching curriculum preparing licensed educators in differentiated classroom instruction, bilingual education methods, inclusive special education, and social-emotional learning.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and dedication to teaching", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of educational philosophy", "references": "Two recommendations"},
        "source": "https://education.up.edu/graduate-programs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Matthew Kuhn",
        "role": "Professor of Civil Engineering",
        "department": "Donald P. Shiley School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Kuhn conducts foundational research in granular mechanics, discrete element modeling of soil behavior, earthquake liquefaction mechanics, and microstructural deformations in sands."
      },
      {
        "name": "Dr. Tara Prestholdt",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Prestholdt investigates avian behavioral ecology, songbird communication mechanisms, urban bird habitat adaptation, and undergraduate biology laboratory education."
      },
      {
        "name": "Dr. Mojtaba Takallou",
        "role": "Professor of Civil Engineering",
        "department": "Donald P. Shiley School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Takallou specializes in transportation safety engineering, roundabouts design optimization, asphalt pavement materials recycling, and highway capacity analysis."
      }
    ]
  }
]
