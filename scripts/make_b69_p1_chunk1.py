# scripts/make_b69_p1_chunk1.py
# Batch 69 Part 1 Chunk 1: Universities 1 to 8 (UMD, UMES, UMB, UMBC, UMass Dartmouth, UMass Lowell, Memphis, UM-Dearborn)

chunk1 = [
  # 1. University of Maryland (Row 1099)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maryland",
    "shortName": "UMD",
    "slug": "university-of-maryland",
    "location": "College Park, Maryland, United States",
    "website": "https://www.umd.edu",
    "sourceRow": 1099,
    "stats": {"established": "1856", "students": "40,700+", "international": "14%", "faculty": "4,700+"},
    "heroSummary": "The University of Maryland, College Park is the flagship public research university of the state of Maryland and an elite member of the Association of American Universities (AAU). Located minutes from Washington, D.C., UMD is internationally celebrated for pioneering research in quantum computing, cybersecurity, atmospheric and oceanic sciences, aerospace engineering, and public policy.",
    "academicOverview": "UMD comprises 12 colleges and schools, notably the A. James Clark School of Engineering, the College of Computer, Mathematical, and Natural Sciences (CMNS), and the School of Public Policy. The university partners extensively with major federal research laboratories including NASA Goddard, NIST, NOAA, and NIH, and operates premier research institutes such as the Joint Quantum Institute (JQI) and the Maryland Cybersecurity Center.",
    "researchAdmissions": "Undergraduate admissions use holistic evaluation via the Common App. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, official transcripts, statement of purpose, three letters of recommendation, and English language proficiency scores (TOEFL iBT 96+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Maryland Cybersecurity & Quantum Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "physics"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year guarantee: $36,000/year stipend, full tuition remission, and health benefits",
        "fee": "$75",
        "tuition": "Covered by fellowship/RA",
        "desc": "Elite doctoral program renowned for quantum computing algorithms, cybersecurity, distributed systems, machine learning, and human-computer interaction in partnership with the Joint Quantum Institute.",
        "requirements": {"gpa": "BS or MS in Computer Science or related STEM field with GPA 3.5+", "ielts": "TOEFL 96+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Research statement detailing interest and faculty alignment", "references": "Three letters of recommendation"},
        "source": "https://www.cs.umd.edu/grad/admissions"
      },
      {
        "title": "Ph.D. in Aerospace Engineering - Autonomous Flight & Hypersonics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships $35,500/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Top-ranked Clark School aerospace doctoral training featuring experimental rotorcraft, hypersonics wind tunnels, space robotics, and autonomous uncrewed flight vehicles.",
        "requirements": {"gpa": "Engineering degree with GPA 3.4+", "ielts": "TOEFL 96+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Three academic recommendations"},
        "source": "https://aero.umd.edu/graduate"
      },
      {
        "title": "Ph.D. in Atmospheric and Oceanic Science - Earth System Climate Modeling",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full fellowship funding $34,000/year plus full tuition remission and health insurance",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Premier climate science program conducting planetary modeling, ocean-atmosphere interactions, data assimilation, and severe weather dynamics in close collaboration with NOAA and NASA.",
        "requirements": {"gpa": "STEM bachelor's degree with strong math background and GPA 3.2+", "ielts": "TOEFL 96+", "gre": "GRE not required", "papers": "Statement of research objectives", "references": "Three letters of recommendation"},
        "source": "https://aosc.umd.edu/graduate"
      },
      {
        "title": "Ph.D. in Physics - Quantum Information & Condensed Matter Theory",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full graduate fellowship and TA/RA packages $36,500/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Internationally acclaimed physics program leading experimental quantum science, topological insulators, non-linear dynamics, and particle astrophysics at JQI and NIST laboratories.",
        "requirements": {"gpa": "BS in Physics, Applied Physics, or Mathematics with GPA 3.5+", "ielts": "TOEFL 96+ or IELTS 7.0+", "gre": "Physics GRE strongly encouraged", "papers": "Statement of purpose", "references": "Three faculty recommendations"},
        "source": "https://umdphysics.umd.edu/academics/graduate.html"
      },
      {
        "title": "Master of Public Policy (MPP) - International Security & Energy Governance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Dean's Merit Fellowships up to $20,000/year and graduate assistant opportunities",
        "fee": "$75",
        "tuition": "$38,500/year",
        "desc": "Rigorous policy curriculum leveraging proximity to Washington, D.C. for hands-on analysis of nuclear security, climate governance, international trade, and social equity.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and coursework in economics and quantitative methods", "ielts": "TOEFL 96+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Policy statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://publicpolicy.umd.edu/admissions"
      },
      {
        "title": "Ph.D. in Biological Sciences - Molecular Ecology & Evolutionary Genomics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Guaranteed 5-year support: $35,000/year stipend, full tuition remission, and health plan",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary biological training in host-pathogen evolutionary dynamics, marine biodiversity, plant genetics, and bioinformatics utilizing state-of-the-art sequencing cores.",
        "requirements": {"gpa": "Undergraduate degree in life sciences with GPA 3.3+ and laboratory experience", "ielts": "TOEFL 96+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://bisi.umd.edu/admissions"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Christopher Monroe",
        "role": "Professor of Physics & Quantum Information",
        "department": "Department of Physics & Joint Quantum Institute",
        "subject": "physics",
        "bio": "Dr. Monroe is a pioneer in trapped-ion quantum computing, coherent optical quantum control, quantum networks, and quantum simulations of many-body condensed matter physics."
      },
      {
        "name": "Dr. Derek Paley",
        "role": "Professor of Aerospace Engineering",
        "department": "Department of Aerospace Engineering",
        "subject": "engineering",
        "bio": "Dr. Paley directs the Collective Dynamics and Control Laboratory, focusing on bio-inspired autonomous underwater vehicles, flocking behaviors, and nonlinear control systems."
      },
      {
        "name": "Dr. Marine Carpuat",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Computer Science & UMIACS",
        "subject": "computer-science",
        "bio": "Dr. Carpuat investigates multilingual natural language processing, machine translation robustness, cross-lingual representation learning, and semantic interpretation."
      }
    ]
  },

  # 2. University of Maryland Eastern Shore (Row 1100)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maryland Eastern Shore",
    "shortName": "UMES",
    "slug": "university-of-maryland-eastern-shore",
    "location": "Princess Anne, Maryland, United States",
    "website": "https://www.umes.edu",
    "sourceRow": 1100,
    "stats": {"established": "1886", "students": "2,900+", "international": "7%", "faculty": "280+"},
    "heroSummary": "The University of Maryland Eastern Shore (UMES) is a distinguished historically Black 1890 land-grant research institution located in Princess Anne on Maryland's Eastern Shore. Renowned for marine and estuarine sciences, agricultural sustainability, pharmaceutical sciences, and aviation science, UMES provides exceptional hands-on doctoral and professional education.",
    "academicOverview": "UMES offers specialized programs across five schools: Agricultural and Natural Sciences, Pharmacy and Health Professions, Education, Social Sciences and The Arts, and Business and Technology. The university houses the NOAA Living Marine Resources Cooperative Science Center (LMRCSC) and leading agricultural extension research facilities.",
    "researchAdmissions": "Undergraduate admissions evaluate high school transcripts, GPA, and college preparatory coursework. Graduate programs require a bachelor's degree from an accredited institution with a minimum 3.0 GPA, statement of purpose, three recommendation letters, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Marine-Estuarine-Environmental Sciences (MEES) - Coastal Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate research assistantships $28,000/year plus full tuition remission via NOAA LMRCSC",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Elite coastal ecosystem doctoral track emphasizing Chesapeake Bay fisheries dynamics, wetland biogeochemistry, ocean habitat ecology, and sustainable aquaculture resource management.",
        "requirements": {"gpa": "BS or MS in marine biology, environmental science, or related discipline with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Personal statement explaining marine research interests", "references": "Three academic references"},
        "source": "https://www.umes.edu/MEES/"
      },
      {
        "title": "Doctor of Pharmacy (Pharm.D.) - Accelerated Professional Pharmacy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Institutional pharmacy merit scholarships up to $12,000/year",
        "fee": "$75",
        "tuition": "$32,400/year",
        "desc": "Intensive year-round doctoral curriculum preparing clinical pharmacists in pharmacotherapy, community health delivery, pharmacokinetics, and rural healthcare accessibility.",
        "requirements": {"gpa": "Prerequisite science coursework with minimum GPA 2.75", "ielts": "TOEFL 80+", "gre": "PCAT optional", "papers": "PharmCAS application essays", "references": "Two professional recommendations"},
        "source": "https://www.umes.edu/Pharmacy/"
      },
      {
        "title": "Master of Science in Food and Agricultural Sciences - Sustainable Crop Production",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "USDA 1890 Capacity Research Assistantships $22,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Applied agricultural graduate program focusing on plant breeding, soil microbial health, precision poultry management, and food safety microbiomics on Maryland's Eastern Shore.",
        "requirements": {"gpa": "Undergraduate degree in agriculture, biology, or chemistry with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of goals and research interests", "references": "Three letters of recommendation"},
        "source": "https://www.umes.edu/sans/"
      },
      {
        "title": "Ph.D. in Organizational Leadership - Higher Education & Public Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Graduate teaching assistantships up to $18,000/year",
        "fee": "$50",
        "tuition": "$18,500/year",
        "desc": "Doctoral training preparing institutional executives and policy researchers in organizational governance, diversity equity frameworks, educational finance, and strategic planning.",
        "requirements": {"gpa": "Master's degree from accredited institution with GPA 3.25+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Scholarly writing sample and statement of purpose", "references": "Three recommendations"},
        "source": "https://www.umes.edu/Education/"
      },
      {
        "title": "Bachelor of Science in Aviation Sciences - Professional Pilot & Aviation Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "FAA and aviation industry flight training scholarships up to $10,000",
        "fee": "$35",
        "tuition": "$21,500/year (out-of-state) + flight lab fees",
        "desc": "Premier FAA-approved collegiate aviation program providing FAA flight ratings, avionics engineering systems, flight operations management, and unmanned aerial systems (UAS) piloting.",
        "requirements": {"gpa": "High school GPA 2.7+ and FAA Second Class Medical Certificate for flight track", "ielts": "TOEFL 79+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions essay", "references": "Two recommendations"},
        "source": "https://www.umes.edu/aviation/"
      },
      {
        "title": "Master of Science in Applied Computer Science - Intelligent Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships $18,000/year with partial tuition assistance",
        "fee": "$50",
        "tuition": "$16,800/year",
        "desc": "Graduate coursework and thesis research in computer network security, cloud computing architectures, data analytics, and embedded intelligent robotic controllers.",
        "requirements": {"gpa": "BS in Computer Science or Mathematics with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.umes.edu/mathcs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Paulinus Chigbu",
        "role": "Director & Professor of Marine Environmental Science",
        "department": "NOAA Living Marine Resources Cooperative Science Center",
        "subject": "environment",
        "bio": "Dr. Chigbu investigates zooplankton ecology, crustacean biology, fisheries population dynamics, and estuarine trophic relationships in the Chesapeake Bay and coastal lagoons."
      },
      {
        "name": "Dr. Byungrok Min",
        "role": "Associate Professor of Food Science",
        "department": "Department of Agriculture, Food and Resource Sciences",
        "subject": "biology",
        "bio": "Dr. Min conducts research on bioactive food packaging films, antimicrobial food safety interventions, lipid oxidation kinetics, and agricultural product value-addition."
      },
      {
        "name": "Dr. Enyue Lu",
        "role": "Professor of Computer Science",
        "department": "Department of Mathematics and Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Lu specializes in mobile ad hoc networks, wireless sensor network optimization, distributed database security, and computational algorithms."
      }
    ]
  },

  # 3. University of Maryland, Baltimore (Row 1102)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maryland, Baltimore",
    "shortName": "UMB",
    "slug": "university-of-maryland-baltimore",
    "location": "Baltimore, Maryland, United States",
    "website": "https://www.umaryland.edu",
    "sourceRow": 1102,
    "stats": {"established": "1807", "students": "6,900+", "international": "8%", "faculty": "3,100+"},
    "heroSummary": "The University of Maryland, Baltimore (UMB) is Maryland's premier public health, law, and human services university, established in 1807 in downtown Baltimore. Home to the nation's fifth oldest medical school, UMB is an elite biomedical powerhouse driving over $650 million in annual research, clinical breakthroughs, and public health policy.",
    "academicOverview": "UMB comprises six professional schools—Medicine, Law, Dentistry, Pharmacy, Nursing, and Social Work—alongside an interdisciplinary Graduate School. The campus is adjacent to the University of Maryland Medical Center and operates the Institute of Human Virology (IHV), the Center for Vaccine Development and Global Health (CVD), and the Institute for Genome Sciences (IGS).",
    "researchAdmissions": "Admissions are highly selective and administered through individual professional schools. Doctoral biomedical applicants require strong undergraduate STEM preparation, minimum 3.2 GPA, laboratory research credentials, letters of recommendation, and English proficiency (TOEFL 90+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Molecular Medicine - Cancer Biology & Vascular Therapeutics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full institutional fellowship $37,000/year, full tuition coverage, and comprehensive medical/dental benefits",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Elite biomedical doctorate at the School of Medicine focusing on oncogenesis, vascular signaling cascades, targeted therapeutics, and stem cell biology at the Marlene and Stewart Greenebaum Comprehensive Cancer Center.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences, biochemistry, or related STEM field with GPA 3.3+", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE not accepted", "papers": "Statement of research experience and goals", "references": "Three letters from research mentors"},
        "source": "https://www.medschool.umaryland.edu/gpis/Molecular-Medicine/"
      },
      {
        "title": "Ph.D. in Pharmaceutical Health Services Research (PHSR) - Pharmacoeconomics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $36,000/year plus complete tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Nationally recognized graduate training in comparative drug effectiveness, health economics, pharmaceutical policy regulation, and real-world clinical evidence analytics at the School of Pharmacy.",
        "requirements": {"gpa": "Degree in pharmacy, public health, economics, or biology with GPA 3.0+", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Personal research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.pharmacy.umaryland.edu/academics/phsr-phd/"
      },
      {
        "title": "Ph.D. in Nursing Science - Health Disparities & Chronic Disease Management",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Pre-doctoral research fellowships $35,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Top-ranked School of Nursing doctoral curriculum advancing clinical intervention trials, biobehavioral mechanisms of pain, gerontological care, and health equity in urban communities.",
        "requirements": {"gpa": "BSN or MSN degree with GPA 3.3+ and active nursing licensure eligibility", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of research focus", "references": "Three academic references"},
        "source": "https://www.nursing.umaryland.edu/academics/doctoral/phd/"
      },
      {
        "title": "Master of Science in Forensic Medicine - Medico-Legal Death Investigation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Institutional merit awards up to $8,000",
        "fee": "$75",
        "tuition": "$26,500 total",
        "desc": "Comprehensive forensic pathology and trauma analysis training in collaboration with the Maryland Office of the Chief Medical Examiner, covering toxicology, DNA evidence, and courtroom testimony.",
        "requirements": {"gpa": "Bachelor's in forensic science, biology, chemistry, or nursing with GPA 3.0+", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Statement of professional goals", "references": "Two recommendations"},
        "source": "https://www.graduate.umaryland.edu/forensicmedicine/"
      },
      {
        "title": "Ph.D. in Social Work - Child Welfare & Behavioral Health Policy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "4-year funding package: $32,000/year stipend, full tuition remission, and health coverage",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Distinguished social policy doctorate focusing on community intervention models, substance abuse recovery, child mental health systems, and urban social justice initiatives.",
        "requirements": {"gpa": "MSW or related master's degree with GPA 3.5+; post-master's clinical/policy experience preferred", "ielts": "TOEFL 90+", "gre": "GRE not required", "papers": "Research statement and published writing sample", "references": "Three letters of recommendation"},
        "source": "https://www.ssw.umaryland.edu/phd/"
      },
      {
        "title": "Ph.D. in Biochemistry and Molecular Biology - Structural Biology of Infectious Disease",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year stipend $37,000/year plus full tuition remission and medical benefits",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Molecular biophysics and chemical biology training utilizing cryogenic electron microscopy (cryo-EM), nuclear magnetic resonance (NMR), and X-ray crystallography to dissect viral entry mechanisms.",
        "requirements": {"gpa": "Bachelor's in biochemistry, chemistry, or biological sciences with GPA 3.2+", "ielts": "TOEFL 90+", "gre": "GRE not accepted", "papers": "Statement of purpose and lab experience record", "references": "Three letters of recommendation"},
        "source": "https://www.medschool.umaryland.edu/biochemistry/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert Gallo",
        "role": "Director & Professor of Medicine",
        "department": "Institute of Human Virology",
        "subject": "biology",
        "bio": "Dr. Gallo is renowned for co-discovering HIV as the cause of AIDS, developing the HIV blood test, and advancing therapeutic vaccines and innate antiviral cytokine mechanisms."
      },
      {
        "name": "Dr. Claire Fraser",
        "role": "Professor of Medicine & Microbiology",
        "department": "Institute for Genome Sciences",
        "subject": "biology",
        "bio": "Dr. Fraser is a pioneer in microbial genomics and metagenomics, investigating human gut microbiome dynamics, infectious pathogens, and comparative genomic evolution."
      },
      {
        "name": "Dr. C. Daniel Mullins",
        "role": "Professor & Chair of Pharmaceutical Health Services Research",
        "department": "Department of Pharmaceutical Health Services Research",
        "subject": "social-sciences",
        "bio": "Dr. Mullins directs the PATIENTS Program, focusing on patient-centered outcomes research (PCOR), community-engaged health equity trials, and pharmacoeconomic modeling."
      }
    ]
  },

  # 4. University of Maryland, Baltimore County (Row 1103)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maryland, Baltimore County",
    "shortName": "UMBC",
    "slug": "university-of-maryland-baltimore-county",
    "location": "Baltimore, Maryland, United States",
    "website": "https://umbc.edu",
    "sourceRow": 1103,
    "stats": {"established": "1966", "students": "13,900+", "international": "11%", "faculty": "890+"},
    "heroSummary": "The University of Maryland, Baltimore County (UMBC) is an elite Carnegie R1 research university internationally celebrated for undergraduate teaching innovation and minority leadership in STEM. Founded in 1966, UMBC is the home of the world-renowned Meyerhoff Scholars Program, producing more African American MD-Ph.D. recipients than any other college in the United States.",
    "academicOverview": "UMBC offers premier programs through the College of Engineering and Information Technology (COEIT), College of Natural and Mathematical Sciences (CNMS), and College of Arts, Humanities, and Social Sciences (CAHSS). UMBC is closely affiliated with the NASA Goddard Earth Sciences Technology and Research (GESTAR II) consortium and the Cybersecurity Center.",
    "researchAdmissions": "Admissions are competitive and holistic. Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, submit a statement of purpose, three letters of recommendation, and meet English language proficiency thresholds (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Cyber-Physical Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-01",
        "deadlineText": "January 1, 2027",
        "funding": "Full departmental assistantships: $32,000/year stipend, full tuition waiver, and health insurance",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Research-intensive doctoral study encompassing multi-agent systems, natural language understanding, privacy-preserving machine learning, and hardware cybersecurity.",
        "requirements": {"gpa": "BS or MS in Computer Science, Computer Engineering, or related field with GPA 3.4+", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://csee.umbc.edu/academics/graduate/cs/"
      },
      {
        "title": "Ph.D. in Chemical and Biochemical Engineering - Bioprocess & Tissue Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate research fellowships $33,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Advanced engineering curriculum addressing monoclonal antibody biomanufacturing, biomaterials for neural regeneration, microfluidic cell culture, and metabolic engineering.",
        "requirements": {"gpa": "Undergraduate degree in chemical engineering or related discipline with GPA 3.2+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://cbbe.umbc.edu/graduate-programs/"
      },
      {
        "title": "Ph.D. in Atmospheric Physics - Cloud Microphysics & Remote Sensing",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NASA-affiliated graduate research assistantships $34,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Elite atmospheric physics training utilizing satellite lidar, polarimetric sensors, and climate modeling through the Earth and Space Institute and NASA GESTAR II.",
        "requirements": {"gpa": "BS in physics, mathematics, or meteorology with GPA 3.2+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Research statement", "references": "Three faculty references"},
        "source": "https://physics.umbc.edu/graduate/"
      },
      {
        "title": "Master of Science in Cybersecurity - Network Defense & Cloud Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Cybersecurity talent merit scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$22,500 total",
        "desc": "Hands-on professional graduate program covering offensive security, cryptographic algorithms, zero-trust cloud architecture, and intrusion detection analysis.",
        "requirements": {"gpa": "STEM bachelor's degree with GPA 3.0+ and programming proficiency", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of goals and resume", "references": "Two recommendations"},
        "source": "https://cybersecurity.umbc.edu/"
      },
      {
        "title": "Ph.D. in Public Policy - Health Policy & Urban Economic Disparities",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate research assistantships $30,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program analyzing urban poverty alleviation, healthcare access economics, public education reform, and environmental justice policy.",
        "requirements": {"gpa": "Master's or bachelor's degree with strong quantitative background and GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Research writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://publicpolicy.umbc.edu/graduate-programs/"
      },
      {
        "title": "Master of Fine Arts in Intermedia and Digital Arts (IMDA)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate teaching assistantships including tuition waiver and annual stipend",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary terminal MFA blending creative coding, interactive media installations, digital storytelling, electronic music, and speculative technological art.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and creative digital portfolio submission", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Artist statement and project proposal", "references": "Three letters of recommendation"},
        "source": "https://art.umbc.edu/graduate/imda/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Anupam Joshi",
        "role": "Professor of Computer Science & Cybersecurity",
        "department": "Department of Computer Science and Electrical Engineering",
        "subject": "computer-science",
        "bio": "Dr. Joshi directs the UMBC Center for Cybersecurity, conducting research on AI-driven threat intelligence, semantic web ontologies, mobile security, and policy-driven systems."
      },
      {
        "name": "Dr. Nilanjan Banerjee",
        "role": "Professor of Computer Science",
        "department": "Department of Computer Science and Electrical Engineering",
        "subject": "computer-science",
        "bio": "Dr. Banerjee focuses on mobile and pervasive systems, wearable computing, accessible non-invasive sensor platforms for individuals with paralysis, and renewable energy computing."
      },
      {
        "name": "Dr. Zhibo Zhang",
        "role": "Professor of Physics",
        "department": "Department of Physics & Earth and Space Institute",
        "subject": "physics",
        "bio": "Dr. Zhang conducts satellite remote sensing of clouds and aerosols, aerosol-cloud-radiation climate interactions, and radiative transfer modeling for NASA space missions."
      }
    ]
  },

  # 5. University of Massachusetts Dartmouth (Row 1105)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Massachusetts Dartmouth",
    "shortName": "UMass Dartmouth",
    "slug": "university-of-massachusetts-dartmouth",
    "location": "Dartmouth, Massachusetts, United States",
    "website": "https://www.umassd.edu",
    "sourceRow": 1105,
    "stats": {"established": "1895", "students": "7,500+", "international": "9%", "faculty": "400+"},
    "heroSummary": "The University of Massachusetts Dartmouth (UMass Dartmouth) is a vibrant public doctoral research university situated on a scenic 710-acre campus on the South Coast of Massachusetts. Nationally distinguished for marine science and ocean engineering through the School for Marine Science & Technology (SMAST), UMass Dartmouth drives regional blue economy innovation, advanced materials engineering, and public law.",
    "academicOverview": "UMass Dartmouth spans seven colleges and schools: the College of Engineering, School for Marine Science & Technology (SMAST), Charlton College of Business, College of Arts & Sciences, College of Nursing & Health Sciences, College of Visual & Performing Arts, and the UMass Law School. The university is a designated Carnegie R2 research institution.",
    "researchAdmissions": "Admissions are holistic through the Common App for undergraduates. Graduate applicants must present a bachelor's degree with a minimum 3.0 GPA, official transcripts, statement of purpose, two to three letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Marine Science and Technology - Ocean Observatories & Marine Fisheries",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships $28,500/year plus complete tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research based at the oceanfront SMAST facility in New Bedford, investigating groundfish stock assessment, ocean circulation dynamics, acoustic tagging, and marine renewable energy.",
        "requirements": {"gpa": "BS or MS in marine science, biology, oceanography, or physics with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with SMAST faculty", "references": "Three letters of recommendation"},
        "source": "https://www.umassd.edu/smast/academics/"
      },
      {
        "title": "Ph.D. in Engineering and Applied Science - Computational & Materials Mechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate research assistantships $29,000/year with full tuition coverage",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctoral program exploring composite materials mechanics, renewable energy harvesting devices, high-performance computing simulations, and marine robotics.",
        "requirements": {"gpa": "BS in Engineering, Physics, or Applied Mathematics with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://www.umassd.edu/engineering/phd/"
      },
      {
        "title": "Master of Science in Computer Science - Artificial Intelligence & Data Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Teaching and lab assistantships up to $16,000/year",
        "fee": "$60",
        "tuition": "$21,000/year",
        "desc": "Graduate degree focusing on deep learning applications, distributed database systems, software engineering verification, and intelligent autonomous cyber-systems.",
        "requirements": {"gpa": "BS in computer science or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.umassd.edu/engineering/cis/graduate/"
      },
      {
        "title": "Juris Doctor (J.D.) - Public Interest Law & Coastal Legal Policy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "UMass Law Public Interest Fellowships covering 50% to 100% of tuition",
        "fee": "$50",
        "tuition": "$31,000/year",
        "desc": "The only public law school in Massachusetts, delivering rigorous practical legal education with concentrations in public interest law, environmental and coastal law, and community advocacy.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE score", "ielts": "TOEFL 90+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www.umassd.edu/law/"
      },
      {
        "title": "Master of Fine Arts in Artisanry - Ceramics, Textiles & Jewelry Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Full graduate fellowships including tuition waivers and studio assistantships",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Preeminent studio MFA celebrated for craft tradition and contemporary sculpture across ceramics, fiber arts, furniture design, and metalsmithing at CVPA Star Store studios.",
        "requirements": {"gpa": "BFA or BA in art with GPA 3.0+ and visual portfolio of 20 creative works", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Artist statement", "references": "Three letters of recommendation"},
        "source": "https://www.umassd.edu/cvpa/artisanry/"
      },
      {
        "title": "Master of Science in Biomedical Engineering and Biotechnology (BMEBT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Research assistantships $22,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "UMass system joint graduate program bridging cell biology, biomaterials synthesis, diagnostic biosensors, and tissue scaffolding for biomedical therapeutics.",
        "requirements": {"gpa": "Undergraduate degree in life sciences, bioengineering, or chemistry with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two recommendations"},
        "source": "https://www.umassd.edu/engineering/bioengineering/graduate/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Steven Cadrin",
        "role": "Professor of Fisheries Oceanography",
        "department": "School for Marine Science & Technology (SMAST)",
        "subject": "environment",
        "bio": "Dr. Cadrin leads the Marine Fisheries Field Research Group, specializing in fish stock assessment modeling, spatial population structure, and sustainable fisheries management policies."
      },
      {
        "name": "Dr. Gaurav Khanna",
        "role": "Professor of Physics & Director of Research Computing",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Khanna conducts research in computational gravitational physics, black hole perturbation theory, gravitational wave modeling, and high-performance GPU cluster supercomputing."
      },
      {
        "name": "Dr. Vijaya Chalivendra",
        "role": "Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Chalivendra investigates fracture mechanics of composite materials, nano-reinforced polymers, digital image correlation, and additive manufacturing of structural components."
      }
    ]
  },

  # 6. University of Massachusetts Lowell (Row 1106)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Massachusetts Lowell",
    "shortName": "UMass Lowell",
    "slug": "university-of-massachusetts-lowell",
    "location": "Lowell, Massachusetts, United States",
    "website": "https://www.uml.edu",
    "sourceRow": 1106,
    "stats": {"established": "1894", "students": "17,500+", "international": "10%", "faculty": "1,150+"},
    "heroSummary": "The University of Massachusetts Lowell (UMass Lowell) is a top-tier Carnegie R1 public research university located along the historic Merrimack River in Lowell, Massachusetts. Renowned for plastics engineering, robotics, cybersecurity, clean energy, and nanomanufacturing, UMass Lowell is a driving engine of technological commercialization and STEM innovation in New England.",
    "academicOverview": "UMass Lowell features six colleges: the Francis College of Engineering, Kennedy College of Sciences, Zuckerberg College of Health Sciences, Manning School of Business, College of Fine Arts, Humanities and Social Sciences, and the School of Education. The university operates the Massachusetts Biomanufacturing Center and the New England Robotics Validation and Experimentation (NERVE) Center.",
    "researchAdmissions": "Undergraduate admissions evaluate academic transcripts, rigor of coursework, and extracurricular leadership. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Plastics Engineering - Sustainable Biopolymers & Nanocomposites",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships $32,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "The nation's founding and preeminent plastics engineering doctoral program, pioneering bio-derived polymer matrices, polymer rheology, extrusion modeling, and circular recycling technologies.",
        "requirements": {"gpa": "BS or MS in plastics engineering, chemical engineering, materials science, or chemistry with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.uml.edu/engineering/plastics/programs-degrees/phd.aspx"
      },
      {
        "title": "Ph.D. in Computer Science - Autonomous Robotics & Cyber-Physical Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Teaching and Research Fellowships $33,000/year plus full tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Advanced doctoral curriculum conducting field robotics validation at the NERVE Center, human-robot interaction, reinforcement learning, and embedded network defenses.",
        "requirements": {"gpa": "BS in Computer Science or allied STEM discipline with GPA 3.4+", "ielts": "TOEFL 85+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three academic references"},
        "source": "https://www.uml.edu/sciences/computer-science/programs/phd.aspx"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Advanced Energy Systems & Aerodynamics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate research assistantships $31,500/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Rigorous mechanical engineering doctoral specialization in wind turbine blade aerodynamics, structural health monitoring, thermal management, and additive manufacturing.",
        "requirements": {"gpa": "BS in mechanical engineering or related discipline with GPA 3.2+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://www.uml.edu/engineering/mechanical/programs/phd.aspx"
      },
      {
        "title": "Ph.D. in Applied Biology - Molecular Therapeutics & Toxicology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships $29,000/year with tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral training focusing on environmental endocrine disruptors, cancer cell signaling pathways, developmental neurobiology, and microbial genetics.",
        "requirements": {"gpa": "Degree in biological sciences or biochemistry with GPA 3.2+ and laboratory research experience", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uml.edu/sciences/biology/programs/phd.aspx"
      },
      {
        "title": "Master of Science in Sound Recording Technology - Audio Engineering & Production",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate studio assistantships up to $15,000/year",
        "fee": "$75",
        "tuition": "$24,500/year",
        "desc": "Nationally recognized audio production master's combining acoustics physics, multi-track mixing in professional control rooms, spatial audio mixing, and DSP audio plugin programming.",
        "requirements": {"gpa": "Bachelor's in music or audio engineering with GPA 3.0+; audio portfolio audition", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of artistic and technical goals", "references": "Two recommendations"},
        "source": "https://www.uml.edu/fahss/music/programs/graduate/srt-masters.aspx"
      },
      {
        "title": "Ph.D. in Criminology and Justice Studies - Counter-Terrorism & Evidence-Based Policing",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral research fellowships $28,000/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Top-tier criminology doctoral program conducting empirical evaluations of security policy, digital forensics, violent extremism prevention, and juvenile justice reform.",
        "requirements": {"gpa": "Bachelor's or master's degree in criminology, sociology, or allied field with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.uml.edu/fahss/criminology/programs/phd.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Holly Yanco",
        "role": "Distinguished University Professor of Computer Science",
        "department": "NERVE Center & Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Yanco directs the NERVE Center, conducting foundational research on human-robot interaction, assistive robotic technologies, robot performance evaluation, and disaster-response robotics."
      },
      {
        "name": "Dr. Meg Sobkowicz-Kline",
        "role": "Professor of Plastics Engineering",
        "department": "Department of Plastics Engineering",
        "subject": "engineering",
        "bio": "Dr. Sobkowicz-Kline specializes in renewable biopolymers, biodegradable packaging composites, polymer crystallization kinetics, and circular economy plastics recycling."
      },
      {
        "name": "Dr. Christopher Hansen",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Hansen's research focuses on self-healing materials, microvascular structural composites, multifunctional polymers, and microfluidic processing technologies."
      }
    ]
  },

  # 7. University of Memphis (Row 1108)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Memphis",
    "shortName": "UofM",
    "slug": "university-of-memphis",
    "location": "Memphis, Tennessee, United States",
    "website": "https://www.memphis.edu",
    "sourceRow": 1108,
    "stats": {"established": "1912", "students": "21,900+", "international": "8%", "faculty": "1,050+"},
    "heroSummary": "The University of Memphis is an elite Carnegie R1 public research university located in Memphis, Tennessee. Celebrated for world-class research in biomedical engineering, audiology and speech-language pathology, supply chain logistics, cognitive psychology, and earthquake hazard science, UofM serves as a cultural and technological pillar of the Mid-South.",
    "academicOverview": "UofM encompasses 13 colleges and schools including the Herff College of Engineering, College of Arts and Sciences, Loewenberg College of Nursing, Fogelman College of Business and Economics, and the School of Public Health. Key research institutes include the FedEx Institute of Technology, the Center for Earthquake Research and Information (CERI), and the Institute for Intelligent Systems (IIS).",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, course curriculum, and optional standardized tests. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, letters of recommendation, statement of purpose, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Engineering - Orthopedic Biomaterials & Tissue Scaffolds",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships $28,000/year plus full tuition remission",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Joint doctoral program with UTHSC leveraging Memphis's status as the global orthopedic device manufacturing capital, focusing on biomaterials, chitosan drug-delivery matrices, and biomechanical implant design.",
        "requirements": {"gpa": "BS in biomedical engineering or related STEM field with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.memphis.edu/bme/graduate/phd.php"
      },
      {
        "title": "Ph.D. in Earth Sciences - Seismology & Earthquake Hazard Assessment",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $26,000/year plus tuition remission at CERI",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Distinguished geophysical research through the Center for Earthquake Research and Information (CERI), investigating New Madrid seismic zone dynamics, intraplate earthquakes, and seismic hazard forecasting.",
        "requirements": {"gpa": "Degree in geosciences, physics, or mathematics with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three recommendations"},
        "source": "https://www.memphis.edu/ceri/academics/"
      },
      {
        "title": "Doctor of Audiology (Au.D.) - Clinical Audiology & Auditory Neuroscience",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Clinical graduate assistantships covering tuition and monthly stipends",
        "fee": "$35",
        "tuition": "$22,000/year",
        "desc": "Top-10 ranked clinical doctoral program preparing audiologists in cochlear implant mapping, pediatric diagnostic evaluations, vestibular rehabilitation, and neuro-otology.",
        "requirements": {"gpa": "Undergraduate GPA 3.3+ with prerequisite coursework in speech and hearing sciences", "ielts": "TOEFL 85+", "gre": "GRE required", "papers": "CSDCAS personal essay", "references": "Three academic/clinical references"},
        "source": "https://www.memphis.edu/csd/audiology/"
      },
      {
        "title": "Ph.D. in Computer Science - Intelligent Systems & Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Departmental teaching and research assistantships $27,000/year plus tuition waiver",
        "fee": "$35",
        "tuition": "Covered by assistantship",
        "desc": "Cutting-edge research at the Institute for Intelligent Systems (IIS) in conversational intelligent tutoring agents, automated cognitive modeling, big data analytics, and cyber security.",
        "requirements": {"gpa": "BS or MS in Computer Science with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.memphis.edu/cs/graduate/"
      },
      {
        "title": "Ph.D. in Business Administration - Supply Chain Logistics & Freight Transportation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "FedEx Supply Chain Fellowships $28,000/year plus full tuition remission",
        "fee": "$35",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral training situated in America's distribution capital, focusing on freight optimization, intermodal logistics networks, omni-channel inventory routing, and supply chain risk.",
        "requirements": {"gpa": "Strong undergraduate or master's GPA (3.3+) and quantitative aptitude", "ielts": "TOEFL 80+", "gre": "GMAT or GRE required", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.memphis.edu/fcbe/phd/"
      },
      {
        "title": "Master of Music in Jazz and Studio Music - Performance & Arranging",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Rudi E. Scheidt School of Music Graduate Fellowships up to $14,000/year",
        "fee": "$35",
        "tuition": "$19,500/year",
        "desc": "Historic Mid-South music program providing advanced training in jazz improvisation, big band arranging, sound recording production, and commercial studio performance.",
        "requirements": {"gpa": "BM or BA in music with GPA 2.75+ and performance audition", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of musical objectives and repertoire list", "references": "Two faculty recommendations"},
        "source": "https://www.memphis.edu/music/academics/graduate.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Gary Bowlin",
        "role": "Professor & Chair of Biomedical Engineering",
        "department": "Department of Biomedical Engineering",
        "subject": "engineering",
        "bio": "Dr. Bowlin is an international leader in electrospinning of natural polymers, investigating vascular graft biomaterials, tendon regeneration scaffolds, and neutrophil-biomaterial interactions."
      },
      {
        "name": "Dr. Charles Langston",
        "role": "Director & Professor of Geophysics",
        "department": "Center for Earthquake Research and Information (CERI)",
        "subject": "environment",
        "bio": "Dr. Langston conducts research in wave propagation seismology, array seismology, intraplate earthquake source mechanics, and high-resolution crustal velocity structure imaging."
      },
      {
        "name": "Dr. Arthur Graesser",
        "role": "Emeritus Professor of Psychology & Intelligent Systems",
        "department": "Institute for Intelligent Systems",
        "subject": "computer-science",
        "bio": "Dr. Graesser is a world-renowned pioneer in cognitive science, developing AutoTutor conversational pedagogical agents, discourse comprehension models, and question-answering systems."
      }
    ]
  },

  # 8. University of Michigan-Dearborn (Row 1110)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Michigan-Dearborn",
    "shortName": "UM-Dearborn",
    "slug": "university-of-michigan-dearborn",
    "location": "Dearborn, Michigan, United States",
    "website": "https://umdearborn.edu",
    "sourceRow": 1110,
    "stats": {"established": "1959", "students": "8,200+", "international": "8%", "faculty": "500+"},
    "heroSummary": "The University of Michigan-Dearborn is a premier comprehensive public university founded in 1959 on 200 acres of land donated by the Ford Motor Company. Celebrated for industry-embedded engineering education, electric vehicle mobility research, cybersecurity, and automotive manufacturing excellence, UM-Dearborn delivers high-impact degrees backed by the prestigious University of Michigan tradition.",
    "academicOverview": "UM-Dearborn houses four colleges: the College of Engineering and Computer Science (CECS), College of Arts, Sciences, and Letters (CASL), College of Business, and College of Education, Health, and Human Services. The university is home to the Institute for Advanced Vehicle Systems (IAVS) and the Cybersecurity Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and rigor. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Automotive and Systems Engineering - Electric Powertrains & Connected Mobility",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships $30,000/year plus full tuition remission and health insurance",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Elite automotive doctorate collaborating with major OEMs on battery management systems, vehicle electrification, autonomous collision avoidance, and lightweight structural composites.",
        "requirements": {"gpa": "BS or MS in mechanical, electrical, or automotive engineering with GPA 3.3+", "ielts": "TOEFL 84+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Three letters of recommendation"},
        "source": "https://umdearborn.edu/cecs/graduate-programs/doctoral-degrees/phd-automotive-and-systems-engineering"
      },
      {
        "title": "Ph.D. in Computer and Information Science - Vehicular Networks & Machine Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "CECS Doctoral Fellowships $30,000/year plus tuition coverage",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Advanced computer science doctorate focusing on V2X (vehicle-to-everything) security protocols, embedded edge computing, adversarial machine learning, and computer vision.",
        "requirements": {"gpa": "BS in Computer Science, Software Engineering, or related discipline with GPA 3.4+", "ielts": "TOEFL 84+", "gre": "GRE optional", "papers": "Statement of purpose and research proposal", "references": "Three letters of recommendation"},
        "source": "https://umdearborn.edu/cecs/graduate-programs/doctoral-degrees/phd-computer-and-information-science"
      },
      {
        "title": "Master of Science in Cybersecurity and Information Assurance - Automotive Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Industry graduate co-op placements and merit scholarships up to $8,000",
        "fee": "$60",
        "tuition": "$23,500 total",
        "desc": "Specialized NSA-designated cybersecurity curriculum focusing on in-vehicle CAN bus security, embedded hardware cryptography, ethical hacking, and industrial IoT defense.",
        "requirements": {"gpa": "Undergraduate degree in STEM with GPA 3.0+ and programming knowledge", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://umdearborn.edu/cecs/graduate-programs/masters-degrees/ms-cybersecurity-and-information-assurance"
      },
      {
        "title": "Master of Science in Bioengineering - Biomaterials & Assistive Technologies",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Departmental teaching assistantships up to $16,000/year",
        "fee": "$60",
        "tuition": "$21,000/year",
        "desc": "Interdisciplinary master's combining biomechanics modeling, ergonomic occupant safety design, biocompatible polymers, and assistive rehabilitation robotics.",
        "requirements": {"gpa": "BS in engineering, physics, or biological sciences with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of goals and CV", "references": "Two letters of recommendation"},
        "source": "https://umdearborn.edu/cecs/graduate-programs/masters-degrees/ms-bioengineering"
      },
      {
        "title": "Master of Science in Environmental Science - Urban Ecology & Watershed Protection",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Environmental Field Station Graduate Assistantships $18,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Applied ecological master's utilizing the 300-acre Environmental Study Area and Rouge River watershed to study urban wetland remediation, stormwater pollutants, and biodiversity conservation.",
        "requirements": {"gpa": "Bachelor's in environmental science, biology, geology, or chemistry with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of environmental interests", "references": "Two recommendations"},
        "source": "https://umdearborn.edu/casl/graduate-programs/ms-environmental-science"
      },
      {
        "title": "Master of Business Administration (MBA) - Supply Chain Management & Tech Commercialization",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Business Dean's Merit Scholarships up to $10,000",
        "fee": "$60",
        "tuition": "$26,000 total",
        "desc": "AACSB-accredited MBA curriculum emphasizing manufacturing operations, global automotive supply chain resilience, corporate financial analytics, and technology leadership.",
        "requirements": {"gpa": "Accredited bachelor's degree with GPA 3.0+ and 2+ years of professional experience preferred", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Professional statement and resume", "references": "Two letters of recommendation"},
        "source": "https://umdearborn.edu/cob/graduate-programs/mba"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Yi Lu Murphey",
        "role": "Professor of Electrical and Computer Engineering",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Murphey conducts research in machine learning, computer vision, electric vehicle power management, driver behavior modeling, and big data automated diagnostics."
      },
      {
        "name": "Dr. Di Ma",
        "role": "Professor of Computer and Information Science",
        "department": "Department of Computer and Information Science",
        "subject": "computer-science",
        "bio": "Dr. Ma directs the Cybersecurity Center, investigating vehicle cyber-physical system security, cryptographic protocols, RFID privacy, and smartphone security."
      },
      {
        "name": "Dr. German Reyes-Villanueva",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Reyes-Villanueva specializes in mechanical behavior of lightweight structural materials, impact crashworthiness, fiber-metal laminates, and automotive composite recycling."
      }
    ]
  }
]
