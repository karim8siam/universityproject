# scripts/make_b69_p1_chunk2.py
# Batch 69 Part 1 Chunk 2: Universities 9 to 15 (Mizzou, UMSL, UM, Montana Western, Montevallo, UNL, UNK)

chunk2 = [
  # 9. University of Missouri (Row 1114)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Missouri",
    "shortName": "Mizzou",
    "slug": "university-of-missouri",
    "location": "Columbia, Missouri, United States",
    "website": "https://missouri.edu",
    "sourceRow": 1114,
    "stats": {"established": "1839", "students": "31,400+", "international": "8%", "faculty": "2,400+"},
    "heroSummary": "The University of Missouri (Mizzou) is the flagship public land-grant research university of Missouri and a distinguished member of the Association of American Universities (AAU). Established in 1839 as the first public university west of the Mississippi River, Mizzou is internationally renowned for operating the nation's most powerful university research nuclear reactor (MURR), founding the world's first school of journalism, and pioneering biomedical and agricultural discovery.",
    "academicOverview": "Mizzou spans 13 major academic divisions including the College of Agriculture, Food and Natural Resources (CAFNR), College of Engineering, School of Medicine, School of Journalism, and the College of Veterinary Medicine. Key research hubs include the University of Missouri Research Reactor (MURR)—the sole domestic producer of vital medical radioisotopes—and the Bond Life Sciences Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core coursework and GPA. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Nuclear Engineering - Radioisotope Production & Reactor Physics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full MURR Graduate Research Fellowships $34,000/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Elite nuclear engineering doctorate directly utilizing the 10-megawatt MURR reactor to advance radiopharmaceutical development, neutron diffraction, thermal hydraulics, and reactor core safety analysis.",
        "requirements": {"gpa": "BS or MS in nuclear, mechanical, or chemical engineering or physics with GPA 3.3+", "ielts": "TOEFL 85+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose detailing nuclear research goals", "references": "Three academic recommendations"},
        "source": "https://engineering.missouri.edu/degrees/nuclear-engineering/"
      },
      {
        "title": "Master of Arts in Journalism - Investigative & Multimedia Reporting",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Missouri School of Journalism Merit Scholarships and graduate assistantships up to $18,000/year",
        "fee": "$75",
        "tuition": "$28,500/year",
        "desc": "The world's founding journalism school, famous for the 'Missouri Method' of hands-on professional newsroom training at the Columbia Missourian, KBIA-FM, and KOMU-TV NBC affiliate.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; professional journalism portfolio or writing samples", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GRE not required", "papers": "Three application essays and resume", "references": "Three letters of recommendation"},
        "source": "https://journalism.missouri.edu/degrees-programs/graduate/"
      },
      {
        "title": "Ph.D. in Plant, Insect and Microbial Sciences - Crop Genetics & Biotechnology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "CAFNR Graduate Research Assistantships $30,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Top-tier plant sciences doctorate based at the Bond Life Sciences Center, focusing on soybean genomics, maize drought tolerance, root phenotyping, and sustainable agronomic pathology.",
        "requirements": {"gpa": "BS or MS in plant science, biology, agronomy, or genetics with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests and laboratory experience", "references": "Three letters of recommendation"},
        "source": "https://cafnr.missouri.edu/degrees-and-programs/pims/"
      },
      {
        "title": "Ph.D. in Computer Science - Autonomous Systems & Cyber-Physical Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Teaching and Research Fellowships $31,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Research-intensive doctoral program exploring artificial intelligence, bioinformatics computing, high-performance distributed systems, and intelligent sensor networks.",
        "requirements": {"gpa": "BS in Computer Science or allied STEM discipline with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://engineering.missouri.edu/degrees/computer-science/"
      },
      {
        "title": "Doctor of Veterinary Medicine (DVM) - Comparative Veterinary Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "College of Veterinary Medicine Institutional Scholarships up to $15,000",
        "fee": "$100",
        "tuition": "$38,000/year (resident) / $65,000/year (non-resident)",
        "desc": "Comprehensive clinical veterinary doctorate featuring 40 hours/week in the Veterinary Health Center during clinical rotations, focusing on equine medicine, livestock reproduction, and oncology.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+ with minimum 400 hours veterinary/animal clinical experience", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "VMCAS personal statement", "references": "Three letters (including at least one veterinarian)"},
        "source": "https://cvm.missouri.edu/academics/doctor-of-veterinary-medicine/"
      },
      {
        "title": "Ph.D. in Economics - Applied Econometrics & Public Finance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships $28,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral training emphasizing theoretical and applied econometrics, health economics policy, labor markets, and monetary theory.",
        "requirements": {"gpa": "Bachelor's degree with strong mathematics coursework (calculus, linear algebra) and GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://economics.missouri.edu/graduate"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Silvia Jurisson",
        "role": "Curators' Distinguished Professor of Chemistry & Radiology",
        "department": "Department of Chemistry & MURR",
        "subject": "chemistry",
        "bio": "Dr. Jurisson is a world leader in radiopharmaceutical chemistry, synthesizing targeted radionuclide complexes for cancer diagnosis and targeted alpha/beta radiotherapy using MURR radioisotopes."
      },
      {
        "name": "Dr. David Mendoza-Cozatl",
        "role": "Associate Professor of Plant Sciences",
        "department": "Division of Plant Science & Technology",
        "subject": "biology",
        "bio": "Dr. Mendoza-Cozatl studies plant nutrient homeostasis, heavy metal detoxification mechanisms, phytochelatin transport, and biofortification of essential minerals in cereal crops."
      },
      {
        "name": "Dr. Dong Xu",
        "role": "Curators' Distinguished Professor of Computer Science",
        "department": "Department of Electrical Engineering and Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Xu is a preeminent computational biologist investigating protein structure prediction, deep learning algorithms for single-cell genomics, and cancer biomarker discovery."
      }
    ]
  },

  # 10. University of Missouri-St. Louis (Row 1115)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Missouri-St. Louis",
    "shortName": "UMSL",
    "slug": "university-of-missouri-st-louis",
    "location": "St. Louis, Missouri, United States",
    "website": "https://www.umsl.edu",
    "sourceRow": 1115,
    "stats": {"established": "1963", "students": "15,200+", "international": "6%", "faculty": "680+"},
    "heroSummary": "The University of Missouri-St. Louis (UMSL) is the premier public doctoral research university in the St. Louis metropolitan area. Established in 1963, UMSL is nationally recognized for exceptional programs in criminology and criminal justice, optometry, tropical ecology in partnership with the Missouri Botanical Garden, and cybersecurity education.",
    "academicOverview": "UMSL comprises nine colleges and schools: the College of Arts and Sciences, College of Business Administration, College of Education, College of Nursing, College of Optometry, Pierre Laclede Honors College, School of Social Work, and the UMSL/WUSTL Joint Undergraduate Engineering Program. UMSL is a Carnegie R2 research institution.",
    "researchAdmissions": "Undergraduate admissions evaluate high school credentials. Graduate admissions require a bachelor's degree from an accredited institution with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Criminology and Criminal Justice - Crime Policy & Social Control",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full 4-year funding: $25,000/year stipend, complete tuition remission, and health benefits",
        "fee": "$40",
        "tuition": "Covered by fellowship",
        "desc": "Consistently ranked among the top four criminology doctoral programs in the United States, advancing empirical studies of urban violence, youth crime trajectories, policing accountability, and sentencing policy.",
        "requirements": {"gpa": "Bachelor's or master's degree in criminology, sociology, or allied social science with GPA 3.3+", "ielts": "TOEFL 85+ or IELTS 7.0+", "gre": "GRE required", "papers": "Scholarly writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.umsl.edu/ccj/graduate-programs/phd.html"
      },
      {
        "title": "Doctor of Optometry (O.D.) - Clinical Optometry & Ocular Disease",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "College of Optometry Merit Scholarships up to $10,000/year",
        "fee": "$75",
        "tuition": "$29,000/year (resident) / $44,000/year (non-resident)",
        "desc": "The only optometry school in Missouri, delivering comprehensive 4-year clinical education in glaucoma management, pediatric vision care, corneal topography, and low-vision rehabilitation.",
        "requirements": {"gpa": "Prerequisite science coursework with GPA 3.0+; OAT or GRE exam", "ielts": "TOEFL 85+", "gre": "OAT required", "papers": "OptomCAS personal statement", "references": "Two letters (including one practicing optometrist)"},
        "source": "https://www.umsl.edu/optometry/"
      },
      {
        "title": "Ph.D. in Biology - Tropical Ecology and Conservation - Whitney R. Harris World Ecology Center",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Harris World Ecology Fellowships $28,000/year plus full tuition remission and field research grants",
        "fee": "$40",
        "tuition": "Covered by fellowship",
        "desc": "Internationally renowned ecology doctorate conducted in collaboration with the Missouri Botanical Garden and the Saint Louis Zoo, studying Neotropical plant evolution, avian biodiversity, and conservation biology.",
        "requirements": {"gpa": "BS or MS in biological sciences or ecology with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty advisor", "references": "Three letters of recommendation"},
        "source": "https://www.umsl.edu/divisions/artscience/biology/graduate/index.html"
      },
      {
        "title": "Master of Science in Cybersecurity - Information Systems & Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NSA/DHS National Center of Academic Excellence Graduate Scholarships up to $9,000",
        "fee": "$40",
        "tuition": "$18,500 total",
        "desc": "NSA-designated cybersecurity curriculum focusing on cloud security architecture, ethical hacking penetration testing, threat hunting, and digital risk management.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and technical background", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.umsl.edu/cybersecurity/"
      },
      {
        "title": "Ph.D. in Chemistry - Inorganic Materials & Supramolecular Catalysis",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate teaching and research assistantships $26,000/year plus tuition remission",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research exploring synthetic organometallic catalysts, nanomaterials for battery storage, X-ray crystallography, and carbohydrate biomolecule synthesis.",
        "requirements": {"gpa": "BS in Chemistry or Biochemistry with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.umsl.edu/chemistry/graduate-programs/phd.html"
      },
      {
        "title": "Master of Social Work (MSW) - Behavioral Health & Gerontological Social Work",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental stipend awards and HRSA behavioral health traineeships up to $10,000",
        "fee": "$40",
        "tuition": "$19,000/year",
        "desc": "CSWE-accredited clinical master's preparing licensed social work practitioners in clinical mental health therapy, substance abuse intervention, and community advocacy.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+ with liberal arts background", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Social work essay and resume", "references": "Three professional references"},
        "source": "https://www.umsl.edu/socialwork/msw/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Beth Huebner",
        "role": "Professor of Criminology and Criminal Justice",
        "department": "Department of Criminology and Criminal Justice",
        "subject": "social-sciences",
        "bio": "Dr. Huebner conducts foundational research on prisoner reentry trajectories, monetary sanctions in the criminal justice system, probation supervision models, and violent crime patterns."
      },
      {
        "name": "Dr. Patricia Parker",
        "role": "Des Lee Professor of Zoological Studies",
        "department": "Department of Biology & Harris World Ecology Center",
        "subject": "biology",
        "bio": "Dr. Parker investigates avian malaria, pathogen transmission dynamics in the Galápagos Islands, evolutionary genetics, and disease threats to endemic island biodiversity."
      },
      {
        "name": "Dr. Eike Bauer",
        "role": "Professor of Chemistry & Department Chair",
        "department": "Department of Chemistry and Biochemistry",
        "subject": "chemistry",
        "bio": "Dr. Bauer's research focuses on homogeneous organometallic catalysis, earth-abundant iron and cobalt catalysts, asymmetric synthesis, and chiral phosphine ligands."
      }
    ]
  },

  # 11. University of Montana (Row 1116)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Montana",
    "shortName": "UM",
    "slug": "university-of-montana",
    "location": "Missoula, Montana, United States",
    "website": "https://www.umt.edu",
    "sourceRow": 1116,
    "stats": {"established": "1893", "students": "10,200+", "international": "5%", "faculty": "650+"},
    "heroSummary": "The University of Montana (UM) is a premier Carnegie R1 public flagship research university nestled at the base of Mount Sentinel in Missoula, Montana. Renowned worldwide for forestry, wildlife biology, freshwater ecology, toxicology, and environmental humanities, UM leverages its breathtaking Northern Rockies setting as a living laboratory for conservation discovery.",
    "academicOverview": "UM encompasses 11 colleges and schools including the W.A. Franke College of Forestry and Conservation, College of Humanities and Sciences, Skaggs School of Pharmacy, Alexander Blewett III School of Law, and the College of the Arts and Media. UM operates the Flathead Lake Biological Station (FLBS)—one of the oldest freshwater field stations in the world.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and college prep curriculum. Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, provide three letters of recommendation, a statement of purpose, and meet English proficiency criteria (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Fish and Wildlife Biology - Carnivore Ecology & Population Modeling",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate research assistantships $28,000/year plus complete tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "The nation's top-ranked wildlife biology doctorate, studying grizzly bear and gray wolf predator-prey dynamics, ungulate migration corridors, and conservation genetics in the Crown of the Continent ecosystem.",
        "requirements": {"gpa": "BS or MS in wildlife biology, zoology, ecology, or related field with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty lab", "references": "Three letters of recommendation"},
        "source": "https://www.cfc.umt.edu/wbio/graduate/default.php"
      },
      {
        "title": "Ph.D. in Systems Ecology - Limnology & Biogeochemistry - Flathead Lake Biological Station",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "FLBS Research Fellowships $29,000/year plus tuition remission and field station lodging",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research conducted at the Flathead Lake Biological Station examining pristine freshwater nutrient cycling, river-floodplain hyporheic ecology, aquatic invasive species, and climate impacts on alpine lakes.",
        "requirements": {"gpa": "Undergraduate degree in limnology, biology, or chemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Research statement", "references": "Three letters of recommendation"},
        "source": "https://flbs.umt.edu/newflbs/education/graduate/"
      },
      {
        "title": "Ph.D. in Forestry - Wildfire Science & Forest Landscape Dynamics",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate research assistantships $27,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Elite forestry doctoral curriculum at the Franke College investigating wildfire behavior modeling, post-fire conifer regeneration, forest carbon sequestration, and climate adaptation strategies.",
        "requirements": {"gpa": "BS or MS in forestry, natural resources, or environmental science with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://www.cfc.umt.edu/frec/graduate/default.php"
      },
      {
        "title": "Ph.D. in Toxicology - Inhalation Toxicology & Nanomaterial Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NIH-funded pre-doctoral traineeships $34,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Center for Environmental Health Sciences (CEHS) doctorate researching wildfire smoke particle inhalation, pulmonary fibrosis mechanisms, autoimmune responses to silica, and heavy metal neurotoxicity.",
        "requirements": {"gpa": "BS in biochemistry, biology, chemistry, or toxicology with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://health.umt.edu/cehs/graduate-program/default.php"
      },
      {
        "title": "Master of Fine Arts in Creative Writing - Poetry & Fiction",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate teaching assistantships covering tuition and annual living stipend",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "One of the most storied creative writing programs in American literature, founded by Richard Hugo, featuring intensive workshop mentorship in environmental literature, poetry, and novel writing.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; creative manuscript (up to 25 pages prose or 10-15 poems)", "ielts": "TOEFL 90+", "gre": "GRE not required", "papers": "Statement of writing objectives", "references": "Three letters of recommendation"},
        "source": "https://www.umt.edu/creative-writing/"
      },
      {
        "title": "Master of Science in Computer Science - Applied Machine Learning & Geo-Data Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental teaching assistantships $20,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Graduate coursework and thesis research applying deep neural networks, spatial-temporal data analysis, satellite remote sensing pipelines, and sensor networks for environmental tracking.",
        "requirements": {"gpa": "BS in Computer Science or Mathematics with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.umt.edu/computer-science/graduate/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mark Hebblewhite",
        "role": "Professor of Ungulate Habitat Ecology",
        "department": "Wildlife Biology Program & W.A. Franke College",
        "subject": "environment",
        "bio": "Dr. Hebblewhite conducts international research on large mammal migration, wolf-elk trophic cascades, spatial habitat modeling, and the impacts of climate change on boreal caribou."
      },
      {
        "name": "Dr. Jim Elser",
        "role": "Director & Professor of Limnology",
        "department": "Flathead Lake Biological Station",
        "subject": "environment",
        "bio": "Dr. Elser is a member of the National Academy of Sciences and co-founder of ecological stoichiometry, investigating phosphorus limitation, lake biogeochemistry, and plankton ecology."
      },
      {
        "name": "Dr. Andrij Holian",
        "role": "Director & Professor of Toxicology",
        "department": "Center for Environmental Health Sciences",
        "subject": "biology",
        "bio": "Dr. Holian investigates macrophage activation pathways, pulmonary inflammation caused by inhaled silica and carbon nanotubes, and therapeutic interventions for lung fibrosis."
      }
    ]
  },

  # 12. University of Montana Western (Row 1118)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Montana Western",
    "shortName": "Montana Western",
    "slug": "university-of-montana-western",
    "location": "Dillon, Montana, United States",
    "website": "https://www.umwestern.edu",
    "sourceRow": 1118,
    "stats": {"established": "1893", "students": "1,400+", "international": "4%", "faculty": "95+"},
    "heroSummary": "The University of Montana Western (UMW), located in the historic Beaverhead Valley in Dillon, Montana, is the only public university in the United States offering the revolutionary Experience One (X1) block scheduling program. Under X1, students take a single course at a time for 18 days, enabling immersive, full-time experiential field research across geology, horsemanship, biology, and environmental sciences.",
    "academicOverview": "UMW delivers undergraduate and professional degrees across departments of Biology, Environmental Sciences, Equine Studies, Fine Arts, Education, Business and Technology, and Mathematics. The campus is bordered by millions of acres of public lands, national forests, and trout-filled rivers that serve as an immediate outdoor laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, GPA, and transcripts. Test scores are optional. International students must demonstrate English language proficiency (TOEFL 68+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Bachelor of Science in Ecology - Field-Based Stream & Rangeland Biology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Western Undergraduate Exchange (WUE) reduced tuition and merit scholarships up to $8,000",
        "fee": "$30",
        "tuition": "$18,200/year (out-of-state) / $5,800/year (in-state)",
        "desc": "Immersive 18-day block field courses in stream water chemistry, trout population surveys, sagebrush steppe ecology, and riparian habitat restoration throughout Southwest Montana.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 68+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions application essay", "references": "One recommendation"},
        "source": "https://www.umwestern.edu/department/biology/"
      },
      {
        "title": "Bachelor of Science in Earth Science - Field Geology & Geomorphology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Departmental field research travel stipends and undergraduate merit awards",
        "fee": "$30",
        "tuition": "$18,200/year (out-of-state)",
        "desc": "Intensive field geology program utilizing Montana's thrust belts, fault scarps, and mining districts for structural mapping, hydrogeology sampling, and petrology analysis.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong science preparation", "ielts": "TOEFL 68+", "gre": "N/A", "papers": "Personal statement", "references": "One academic reference"},
        "source": "https://www.umwestern.edu/department/environmental-sciences/"
      },
      {
        "title": "Bachelor of Science in Natural Horsemanship - Equine Science & Ranch Management",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Equine studies industry scholarships up to $5,000",
        "fee": "$30",
        "tuition": "$18,200/year + equine facility lab fee",
        "desc": "Nationally recognized four-year equine science curriculum partnering with the Montana Center for Horsemanship, teaching horse behavior science, equine nutrition, and equine facility management.",
        "requirements": {"gpa": "High school diploma with GPA 2.5+ and riding evaluation", "ielts": "TOEFL 68+", "gre": "N/A", "papers": "Equine experience statement", "references": "Two recommendations"},
        "source": "https://www.umwestern.edu/department/equine-studies/"
      },
      {
        "title": "Bachelor of Science in Environmental Interpretation - Outdoor Leadership & Park Education",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Chancellor's Leadership Scholarships up to $6,000",
        "fee": "$30",
        "tuition": "$18,200/year",
        "desc": "Practical degree preparing park naturalists, outdoor educators, and wilderness guides in Leave No Trace wilderness ethics, interpretive exhibit design, and outdoor risk management.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 68+", "gre": "N/A", "papers": "Statement of career objectives", "references": "One recommendation"},
        "source": "https://www.umwestern.edu/department/environmental-sciences/"
      },
      {
        "title": "Bachelor of Arts in Visual Arts - Western Landscape Painting & Ceramic Sculpture",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Fine arts studio merit awards up to $4,000",
        "fee": "$30",
        "tuition": "$18,200/year",
        "desc": "Immersive studio block courses in plein air landscape oil painting, wheel-thrown ceramic stoneware, and glass sculpture inspired by the Rocky Mountain wilderness.",
        "requirements": {"gpa": "High school GPA 2.5+ and portfolio of 10 creative pieces", "ielts": "TOEFL 68+", "gre": "N/A", "papers": "Artist statement", "references": "One letter of recommendation"},
        "source": "https://www.umwestern.edu/department/fine-arts/"
      },
      {
        "title": "Bachelor of Science in Mathematics - Applied Mathematical Modeling",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM tuition waivers and undergraduate research grants",
        "fee": "$30",
        "tuition": "$18,200/year",
        "desc": "Applied mathematics curriculum featuring one-course-at-a-time focus on differential equations, statistical population modeling, cryptography, and Python scientific computing.",
        "requirements": {"gpa": "High school GPA 2.7+ with precalculus coursework", "ielts": "TOEFL 68+", "gre": "N/A", "papers": "Statement of purpose", "references": "One math teacher reference"},
        "source": "https://www.umwestern.edu/department/mathematics/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rob Thomas",
        "role": "Regents Professor of Geology",
        "department": "Department of Environmental Sciences",
        "subject": "environment",
        "bio": "Dr. Thomas is a nationally celebrated geological educator and researcher investigating Cambrian sedimentary stratigraphy, volcanic geo-hazards, and experiential field science pedagogies."
      },
      {
        "name": "Dr. Michael Morrow",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Morrow conducts field research on rangeland plant ecology, riparian willow community dynamics, invasive weed biocontrol, and sage-grouse habitat conservation."
      },
      {
        "name": "Dr. Brent Roberts",
        "role": "Professor of Fine Arts",
        "department": "Department of Fine Arts",
        "subject": "arts-design",
        "bio": "Dr. Roberts explores ceramic sculpture, high-fire wood kiln atmospheric firings, regional clay mineralogy, and contemporary three-dimensional craft installations."
      }
    ]
  },

  # 13. University of Montevallo (Row 1119)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Montevallo",
    "shortName": "Montevallo",
    "slug": "university-of-montevallo",
    "location": "Montevallo, Alabama, United States",
    "website": "https://www.montevallo.edu",
    "sourceRow": 1119,
    "stats": {"established": "1896", "students": "2,600+", "international": "4%", "faculty": "160+"},
    "heroSummary": "The University of Montevallo is Alabama's public liberal arts university, situated on a historic Olmsted Brothers-designed campus in the geographic center of Alabama. Founded in 1896, Montevallo is celebrated for its tight-knit intellectual community, nationally recognized programs in mass communication and visual arts, environmental education, and the famous College Night theatrical tradition.",
    "academicOverview": "Montevallo offers comprehensive bachelor's and master's degrees through four colleges: the College of Arts and Sciences, Michael E. Stephens College of Business, College of Education and Human Development, and the College of Fine Arts. The university also operates the James Wylie Shepherd Observatory and the University of Montevallo Environmental Education Center.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduates, evaluating high school transcripts and GPA (minimum 2.5). Graduate applicants require an accredited bachelor's degree with a minimum 2.75 GPA, statement of purpose, two letters of recommendation, and English proficiency (TOEFL 71+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Bachelor of Fine Arts in Art - Digital Animation & Graphic Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Fine Arts Talent Scholarships up to $10,000/year",
        "fee": "$30",
        "tuition": "$25,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "Accredited NASAD BFA curriculum in digital illustration, 3D character animation, motion graphics, UI/UX typography, and contemporary exhibition design at the Bloch Hall creative studios.",
        "requirements": {"gpa": "High school GPA 2.5+ and portfolio of 12 creative artworks", "ielts": "TOEFL 71+ or IELTS 6.0+", "gre": "N/A", "papers": "Artist statement", "references": "One letter of recommendation"},
        "source": "https://www.montevallo.edu/academics/colleges/college-of-fine-arts/departments/department-of-art/programs/art-b-f-a/"
      },
      {
        "title": "Bachelor of Science in Environmental Studies - Freshwater Aquatic Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Environmental Leadership Awards and undergraduate field research grants up to $6,000",
        "fee": "$30",
        "tuition": "$25,500/year",
        "desc": "Hands-on study of Alabama's world-leading freshwater mollusk and fish biodiversity, stream chemistry monitoring, wetland conservation, and environmental policy advocacy.",
        "requirements": {"gpa": "High school GPA 2.5+ with biology and chemistry background", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.montevallo.edu/academics/colleges/college-of-arts-sciences/biology-chemistry-mathematics/programs/environmental-studies/"
      },
      {
        "title": "Master of Science in Speech-Language Pathology (MS-SLP) - Neurogenic Communication",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental graduate clinic assistantships covering partial tuition and stipend",
        "fee": "$50",
        "tuition": "$19,500/year",
        "desc": "CAA-accredited clinical master's program providing comprehensive diagnosis and clinical therapy for dysphagia, pediatric speech apraxia, traumatic brain injury aphasia, and augmentative communication.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and prerequisite CSD coursework", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "CSDCAS personal essay", "references": "Three letters of recommendation"},
        "source": "https://www.montevallo.edu/academics/colleges/college-of-arts-sciences/communication-science-disorders/programs/master-of-science-in-speech-language-pathology/"
      },
      {
        "title": "Bachelor of Business Administration in Finance - Sustainable Investment & Portfolio Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Michael E. Stephens College of Business Endowed Scholarships up to $7,500",
        "fee": "$30",
        "tuition": "$25,500/year",
        "desc": "AACSB-accredited business curriculum managing real-money student investment portfolios, financial modeling with Bloomberg terminals, and corporate capital budgeting.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong algebra proficiency", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.montevallo.edu/academics/colleges/michael-e-stephens-college-of-business/programs/finance/"
      },
      {
        "title": "Bachelor of Science in Chemistry - Green Synthesis & Environmental Toxicology",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate STEM research fellowships and lab assistantships",
        "fee": "$30",
        "tuition": "$25,500/year",
        "desc": "ACS-certified undergraduate chemistry program featuring independent laboratory research on biodegradable polymers, heavy metal water filtration, and spectroscopic analysis.",
        "requirements": {"gpa": "High school GPA 2.7+ with strong math and science coursework", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Statement of purpose", "references": "One science teacher reference"},
        "source": "https://www.montevallo.edu/academics/colleges/college-of-arts-sciences/biology-chemistry-mathematics/programs/chemistry/"
      },
      {
        "title": "Master of Education in Instructional Leadership - School Governance & Curriculum",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Alabama Teacher Leadership Scholarships up to $4,000",
        "fee": "$30",
        "tuition": "$14,000 total",
        "desc": "Graduate leadership program preparing certified educators for administrative leadership, educational law compliance, teacher coaching, and data-informed school improvement.",
        "requirements": {"gpa": "Valid teaching certificate, 3+ years teaching experience, and undergraduate GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE/MAT optional", "papers": "Leadership portfolio and statement of purpose", "references": "Three professional references (including superintendent)"},
        "source": "https://www.montevallo.edu/academics/colleges/college-of-education-human-development/programs/instructional-leadership/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Houston Byrd",
        "role": "Professor of Chemistry",
        "department": "Department of Biology, Chemistry and Mathematics",
        "subject": "chemistry",
        "bio": "Dr. Byrd investigates thin polymer film self-assembly, modified metal surface coatings, environmental analytical chemistry, and undergraduate chemistry pedagogical research."
      },
      {
        "name": "Dr. Scott Turner",
        "role": "Professor of Political Science",
        "department": "Department of Behavioral and Social Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Turner conducts scholarly research in peace studies, international human rights law, political theory, nonviolent civil resistance, and global democratic governance."
      },
      {
        "name": "Dr. Collin Schmid",
        "role": "Associate Professor of Art",
        "department": "Department of Art",
        "subject": "arts-design",
        "bio": "Dr. Schmid specializes in ceramics, architectural tile installations, clay body formulation, and the integration of digital 3D modeling with traditional ceramic casting techniques."
      }
    ]
  },

  # 14. University of Nebraska–Lincoln (Row 1120)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nebraska–Lincoln",
    "shortName": "UNL",
    "slug": "university-of-nebraska-lincoln",
    "location": "Lincoln, Nebraska, United States",
    "website": "https://www.unl.edu",
    "sourceRow": 1120,
    "stats": {"established": "1869", "students": "24,400+", "international": "10%", "faculty": "1,600+"},
    "heroSummary": "The University of Nebraska–Lincoln (UNL) is the flagship land-grant research university of Nebraska and an elite Carnegie R1 institution founded in 1869. Internationally recognized for agricultural robotics, drought mitigation science, high-power laser physics, plant phenomics, and materials nanoscience, UNL drives over $350 million in annual research, anchoring innovation across the Great Plains.",
    "academicOverview": "UNL spans nine colleges including the College of Agricultural Sciences and Natural Resources (CASNR), College of Engineering, College of Arts and Sciences, and the College of Law. Key research centers include the National Drought Mitigation Center (NDMC), the Extreme Light Laboratory, Nebraska Innovation Campus, and the Center for Plant Science Innovation.",
    "researchAdmissions": "Undergraduate admissions evaluate high school performance and core competencies. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Agronomy and Horticulture - Plant Breeding & Phenomics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "CASNR Graduate Research Fellowships $32,000/year plus full tuition remission and health insurance",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Elite agricultural doctorate utilizing Nebraska Innovation Campus greenhouse phenotyping facilities to study maize and sorghum drought adaptation, gene editing, and digital agriculture.",
        "requirements": {"gpa": "BS or MS in agronomy, plant biology, genetics, or related field with GPA 3.3+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research goals", "references": "Three letters of recommendation"},
        "source": "https://agronomy.unl.edu/graduate-degrees"
      },
      {
        "title": "Ph.D. in Physics - High-Intensity Laser Physics & Ultrafast Optics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research and Teaching Assistantships $31,500/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "World-class laser physics research at the Extreme Light Laboratory utilizing the Diocles petawatt laser to study laser wakefield particle acceleration, ultrafast X-ray scattering, and relativistic plasma dynamics.",
        "requirements": {"gpa": "BS in Physics or Applied Physics with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "Physics GRE recommended", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://physics.unl.edu/graduate-program"
      },
      {
        "title": "Ph.D. in Natural Resource Sciences - Hydrology & Drought Early Warning",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "National Drought Mitigation Center Assistantships $29,000/year plus tuition waiver",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research based at the National Drought Mitigation Center (home of the U.S. Drought Monitor), analyzing groundwater depletion in the High Plains Ogallala Aquifer, climate forecasting, and remote sensing hydrology.",
        "requirements": {"gpa": "Degree in water resources, environmental science, geology, or geography with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://snr.unl.edu/gradstudent/programs/"
      },
      {
        "title": "Ph.D. in Computer Science - Agricultural Robotics & Autonomous Sensing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $30,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary computer science doctorate pioneering uncrewed aerial vehicle (UAV) crop canopy sensing, field robotics navigation algorithms, big data distributed systems, and edge AI.",
        "requirements": {"gpa": "BS or MS in Computer Science or Computer Engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://computing.unl.edu/graduate-program/"
      },
      {
        "title": "Ph.D. in Mechanical Engineering and Applied Mechanics - Multiscale Biomaterials & Nanomechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Fellowships $31,000/year plus complete tuition coverage",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Advanced engineering research in electrospun polymer nanofiber scaffolds, smart multifunctional hydrogels, finite element biomechanics modeling, and additive manufacturing.",
        "requirements": {"gpa": "BS in mechanical, aerospace, or materials engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://engineering.unl.edu/mme/graduate-programs/"
      },
      {
        "title": "Master of Laws (LL.M.) in Space, Cyber, and Telecommunications Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Space Law Endowed Scholarships up to $15,000",
        "fee": "$50",
        "tuition": "$26,000 total",
        "desc": "The nation's pioneer LL.M. program specializing in commercial satellite licensing, orbital debris regulation, cyber warfare international law, military space operations, and spectrum allocation.",
        "requirements": {"gpa": "J.D. or foreign law equivalent with strong academic record", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "N/A", "papers": "Statement of interest in space and cyber law", "references": "Two letters of recommendation"},
        "source": "https://law.unl.edu/space-cyber-law/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Donald Umstadter",
        "role": "Earle M. & Virginia M. Jorgensen Professor of Physics",
        "department": "Department of Physics & Astronomy",
        "subject": "physics",
        "bio": "Dr. Umstadter directs the Extreme Light Laboratory, studying relativistic optics, ultra-high-field laser interactions, table-top synchrotron X-ray generation, and laser-driven nuclear physics."
      },
      {
        "name": "Dr. Carrick Detweiler",
        "role": "Susan J. Rosowski Professor of Computer Science",
        "department": "School of Computing & Nebraska Center for Materials and Nanoscience",
        "subject": "computer-science",
        "bio": "Dr. Detweiler co-directs the NIMBUS Lab, developing autonomous uncrewed aerial systems for environmental monitoring, aerial water sampling, and drone-based fire ignition for controlled burns."
      },
      {
        "name": "Dr. Mark Svoboda",
        "role": "Director & Climatologist",
        "department": "National Drought Mitigation Center (NDMC)",
        "subject": "environment",
        "bio": "Dr. Svoboda is an internationally recognized drought specialist, co-originating the U.S. Drought Monitor, designing global drought early-warning systems, and advising the United Nations."
      }
    ]
  },

  # 15. University of Nebraska at Kearney (Row 1123)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nebraska at Kearney",
    "shortName": "UNK",
    "slug": "university-of-nebraska-kearney",
    "location": "Kearney, Nebraska, United States",
    "website": "https://unk.edu",
    "sourceRow": 1123,
    "stats": {"established": "1905", "students": "6,100+", "international": "6%", "faculty": "340+"},
    "heroSummary": "The University of Nebraska at Kearney (UNK) is a premier public university established in 1905, situated on a 515-acre residential campus in Kearney, Nebraska. Celebrated for high-impact undergraduate research, healthcare professional training in partnership with UNMC at the Health Science Education Complex, biology, and aviation, UNK combines personalized faculty mentorship with the vast resources of the University of Nebraska system.",
    "academicOverview": "UNK comprises three academic colleges: the College of Arts and Sciences, College of Business and Technology, and College of Education. UNK is home to the Health Science Education Complex (HSEC), delivering rural nursing, physician assistant, and physical therapy credentials, as well as the Nebraska Safety Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core competencies, GPA (minimum 2.5), or class rank. Graduate admissions require an accredited bachelor's degree with a minimum 2.75 GPA, statement of purpose, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Biology - Molecular Genetics & Ecological Restoration",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Teaching Assistantships $15,500/year plus full tuition waiver",
        "fee": "$45",
        "tuition": "Covered by assistantship",
        "desc": "Research-focused biology graduate program offering laboratory and field investigations in Great Plains riverine ecology, tick-borne pathogens, sandhill crane migration, and cellular oncology.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests and goals", "references": "Two letters of recommendation"},
        "source": "https://www.unk.edu/academics/biology/graduate.php"
      },
      {
        "title": "Bachelor of Science in Aviation - Flight Operations & Aeronautical Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Nebraska Aviation Merit Scholarships up to $6,000",
        "fee": "$45",
        "tuition": "$14,500/year (out-of-state) / $7,200/year (in-state) + flight lab costs",
        "desc": "Comprehensive collegiate flight training program in partnership with Kearney Regional Airport, preparing commercial airline pilots with FAA Private, Instrument, and Multi-Engine Commercial certificates.",
        "requirements": {"gpa": "High school GPA 2.5+ and FAA Medical Certificate for flight track", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.unk.edu/academics/aviation/"
      },
      {
        "title": "Master of Science in Education in Speech-Language Pathology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental clinical assistantships with tuition waiver",
        "fee": "$45",
        "tuition": "$16,000/year",
        "desc": "CAA-accredited clinical master's specializing in rural healthcare delivery, pediatric speech disorders, tele-practice interventions, neurogenic dysphagia, and stuttering fluency.",
        "requirements": {"gpa": "BS in Communication Disorders with GPA 3.2+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "CSDCAS application essay", "references": "Three letters of recommendation"},
        "source": "https://www.unk.edu/academics/communication_disorders/graduate.php"
      },
      {
        "title": "Bachelor of Science in Cyber Systems - Software Development & Network Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "UNK Cyber Innovation Scholarships up to $5,000/year",
        "fee": "$45",
        "tuition": "$14,500/year",
        "desc": "Hands-on undergraduate computer science curriculum emphasizing cloud infrastructure, mobile application engineering, penetration testing, and enterprise database systems.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong algebra preparation", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One teacher recommendation"},
        "source": "https://www.unk.edu/academics/cyber-systems/"
      },
      {
        "title": "Master of Arts in History - American West & Public History",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate teaching assistantships $13,000/year plus full tuition remission",
        "fee": "$45",
        "tuition": "Covered by assistantship",
        "desc": "Distinguished graduate history program offering deep archival research on the Trans-Mississippi West, Plains Native American histories, digital history exhibits, and museum preservation.",
        "requirements": {"gpa": "Undergraduate degree in history or related humanities field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Historical research writing sample and statement of purpose", "references": "Two faculty recommendations"},
        "source": "https://www.unk.edu/academics/history/graduate.php"
      },
      {
        "title": "Bachelor of Science in Chemistry - Forensics & Pre-Medical Biochemistry",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate research stipends and chemistry merit scholarships",
        "fee": "$45",
        "tuition": "$14,500/year",
        "desc": "ACS-certified undergraduate chemistry degree featuring individual research mentorship, gas chromatography-mass spectrometry (GC-MS), nuclear magnetic resonance (NMR), and drug design.",
        "requirements": {"gpa": "High school GPA 2.7+ with chemistry and advanced math background", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.unk.edu/academics/chemistry/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kimberly Carlson",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Carlson investigates genetics of viral infections in Drosophila melanogaster, heat shock protein chaperones, and the cellular mechanisms of innate antiviral immunity."
      },
      {
        "name": "Dr. Allen Thomas",
        "role": "Associate Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Thomas specializes in synthetic organic chemistry, investigating novel amino acid transporter inhibitors (LAT1) for targeted cancer chemotherapies and prodrug delivery."
      },
      {
        "name": "Dr. Matthew Bice",
        "role": "Associate Professor of Kinesiology & Health Sciences",
        "department": "Department of Kinesiology and Sport Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Bice investigates behavioral health interventions, physical activity patterns in rural populations, mobile health tracking, and pediatric developmental exercise science."
      }
    ]
  }
]
