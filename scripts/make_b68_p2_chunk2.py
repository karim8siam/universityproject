# scripts/make_b68_p2_chunk2.py
# Batch 68 Part 2 Chunk 2: Universities 24 to 30

chunk4 = [
  # 24. University of Illinois Springfield (Row 1086)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Illinois Springfield",
    "shortName": "UIS",
    "slug": "university-of-illinois-springfield",
    "location": "Springfield, Illinois, United States",
    "website": "https://www.uis.edu",
    "sourceRow": 1086,
    "stats": {"established": "1969", "students": "4,200+", "international": "12%", "faculty": "220+"},
    "heroSummary": "The University of Illinois Springfield (UIS), established in 1969 as Sangamon State University and integrated into the world-class University of Illinois System in 1995, is an accredited public regional university situated in the Illinois state capital. UIS is celebrated for its deep integration with state legislative governance, public policy leadership, top-tier online degree programs, and an NSA-designated Center of Academic Excellence in Cyber Defense.",
    "academicOverview": "UIS delivers programs through the College of Public Affairs and Administration, the College of Health, Science & Technology, the College of Business and Management, and the College of Liberal Arts and Social Sciences. Its campus is home to the Center for State Policy and Leadership, the Illinois Legislative Staff Internship Program (ILSIP), and the Emiquon Field Station for floodplain ecological research.",
    "researchAdmissions": "Undergraduate admission evaluates high school transcripts via Common App or UIS portal (test-optional; recommended GPA 2.75+). Graduate and master's degree applicants must hold an accredited bachelor's degree with a minimum 2.5–3.0 GPA, submit transcripts, letters of recommendation, and a statement of academic objectives.",
    "opps": [
      {
        "title": "Master of Science in Computer Science - Software Engineering & Big Data Track",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Assistantships providing full tuition waiver plus $12,000 stipend",
        "fee": "$60",
        "tuition": "$10,800/year (resident) / $21,600/year (non-resident)",
        "desc": "Hands-on graduate curriculum covering algorithm complexity, distributed cloud systems, database architectures, and applied machine learning models.",
        "requirements": {"gpa": "BS in Computer Science or related STEM field with GPA 2.7+; Java and data structures proficiency", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two academic or professional references"},
        "source": "https://www.uis.edu/computerscience/programs/masters/"
      },
      {
        "title": "Master of Arts in Political Science - Illinois Legislative Staff Internship Program",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "ILSIP Paid Legislative Fellowship: $35,000 annual stipend plus 100% tuition coverage",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Prestigious capital-city fellowship embedding graduate students directly into the Illinois General Assembly bipartisan research and leadership staff.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; strong interest in state legislative governance; interview", "ielts": "TOEFL 85+", "gre": "Not required", "papers": "Public policy writing sample and personal statement", "references": "Three letters of recommendation"},
        "source": "https://www.uis.edu/politicalscience/programs/masters/"
      },
      {
        "title": "Master of Public Administration (MPA) - Public Policy & Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Public Service Internships (GPSI) up to $14,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "$11,200/year (resident) / $22,400/year (non-resident)",
        "desc": "NASPAA-accredited public administration master's preparing managers for leadership in state agencies, municipal administration, and civic nonprofit organizations.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; resume showing public service background", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of intent", "references": "Two recommendations"},
        "source": "https://www.uis.edu/publicadministration/programs/masters/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity - Cyber Defense Operations",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Lincoln Merit Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$9,500/year (resident) / $20,200/year (non-resident)",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense curriculum covering network vulnerability mitigation, penetration testing, and digital forensics.",
        "requirements": {"gpa": "High school GPA 2.75+; algebra readiness", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.uis.edu/cybersecurity/programs/bachelors/"
      },
      {
        "title": "Master of Science in Environmental Studies - Environmental Planning & Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Emiquon Field Station Research Assistantships up to $10,000",
        "fee": "$60",
        "tuition": "$10,800/year (resident) / $21,600/year (non-resident)",
        "desc": "Interdisciplinary master's combining environmental policy analysis, GIS spatial mapping, and field research at the Illinois River Emiquon floodplain restoration site.",
        "requirements": {"gpa": "Undergraduate degree in natural or social sciences with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Statement of environmental interests", "references": "Two academic recommendations"},
        "source": "https://www.uis.edu/environmentalstudies/programs/masters/"
      },
      {
        "title": "Bachelor of Social Work (BSW) - Child & Community Advocacy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Prairie Star Community Grants up to $5,000/year",
        "fee": "$50",
        "tuition": "$9,500/year (resident) / $20,200/year (non-resident)",
        "desc": "CSWE-accredited undergraduate social work program offering 400+ hours of direct clinical field practicum with Illinois state agencies and family welfare organizations.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Social advocacy essay", "references": "One reference"},
        "source": "https://www.uis.edu/socialwork/programs/bachelors/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sun-Young Park",
        "role": "Associate Professor of Political Science",
        "department": "Department of Political Science",
        "subject": "social-sciences",
        "bio": "Dr. Park's research explores legislative decision-making, American state politics, electoral institutions, and gender representation in state legislatures."
      },
      {
        "name": "Dr. Sviatoslav Braynov",
        "role": "Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Braynov conducts research on multi-agent game theory, cyber deception protocols, automated threat negotiation systems, and artificial intelligence safety."
      },
      {
        "name": "Dr. Keenan Dungey",
        "role": "Associate Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Dungey investigates nanoparticle environmental fate, inorganic water contaminants in Illinois watersheds, and green chemistry analytical methods."
      }
    ]
  },

  # 25. University of Indianapolis (Row 1088)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Indianapolis",
    "shortName": "UIndy",
    "slug": "university-of-indianapolis",
    "location": "Indianapolis, Indiana, United States",
    "website": "https://uindy.edu",
    "sourceRow": 1088,
    "stats": {"established": "1902", "students": "5,300+", "international": "6%", "faculty": "300+"},
    "heroSummary": "The University of Indianapolis (UIndy), established in 1902 and affiliated with the United Methodist Church, is a comprehensive private university located just south of downtown Indianapolis. UIndy is internationally celebrated for health sciences leadership—home to the acclaimed Krannert School of Physical Therapy, the School of Occupational Therapy, and the Archeology & Forensics Laboratory—along with programs in engineering, education, and business.",
    "academicOverview": "UIndy offers undergraduate, master's, and doctoral degrees through the College of Health Sciences, the Shaheen College of Arts & Sciences, the R.B. Annis School of Engineering, the School of Nursing, and the School of Business. Its modern facilities include the Health Pavilion, the Annis Hall Design Studios, and the Human Identification Center.",
    "researchAdmissions": "Undergraduate admissions operate on rolling deadlines via the Common Application (test-optional; recommended GPA 3.0+). Graduate and clinical doctoral programs require an accredited bachelor's degree, competitive prerequisite GPAs, standardized test scores where applicable, and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Physical Therapy (DPT) - Krannert School of Physical Therapy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-01",
        "deadlineText": "October 1, 2027",
        "funding": "Krannert Endowed Physical Therapy Fellowships up to $12,000/year",
        "fee": "$75 (PTCAS)",
        "tuition": "$36,500/year",
        "desc": "CAPTE-accredited premier three-year clinical doctorate providing cadaveric gross anatomy dissection, extensive clinical simulation, and 36 weeks of full-time clinical rotations.",
        "requirements": {"gpa": "Prerequisite science GPA 3.2+; 40 hours physical therapy shadowing; GRE General; PTCAS application", "ielts": "TOEFL 85+", "gre": "GRE General required", "papers": "PTCAS personal statement", "references": "Three letters including licensed physical therapist"},
        "source": "https://uindy.edu/health-sciences/pt/dpt"
      },
      {
        "title": "Doctor of Occupational Therapy (OTD) - School of Occupational Therapy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-11-01",
        "deadlineText": "November 1, 2027",
        "funding": "Health Sciences Leadership Grants up to $10,000/year",
        "fee": "$75 (OTCAS)",
        "tuition": "$35,800/year",
        "desc": "ACOTE-accredited entry-level clinical doctorate offering specialized training in pediatric sensory integration, adult neurological rehabilitation, and assistive technology design.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+; 30 hours OT clinical observation; OTCAS application", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "OTCAS essay", "references": "Three recommendations"},
        "source": "https://uindy.edu/health-sciences/ot/otd"
      },
      {
        "title": "Master of Science in Forensic Anthropology - Human Identification Center",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Archeology & Forensics Graduate Assistantships up to $14,000 plus full tuition",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "One of the few specialized forensic anthropology master's programs in the nation, assisting state coroners and law enforcement in skeletal trauma analysis and human remains recovery.",
        "requirements": {"gpa": "BS or BA in Anthropology, Biology, or Forensic Science with GPA 3.2+; human osteology coursework", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "Forensic research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://uindy.edu/cas/anthropology/ms-forensic-anthropology"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - School of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "IU Health & Community Health Nursing Fellowships up to $8,000/year",
        "fee": "$50",
        "tuition": "$35,400/year",
        "desc": "CCNE-accredited undergraduate nursing program featuring clinical rotations across Indiana University Health Methodist Hospital, Riley Hospital for Children, and Eskenazi Health.",
        "requirements": {"gpa": "High school GPA 3.2+; prerequisite chemistry and biology; TEAS examination score 70%+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Nursing essay", "references": "Two recommendations"},
        "source": "https://uindy.edu/nursing/bsn"
      },
      {
        "title": "Master of Business Administration (MBA) - Applied Leadership Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Greyhound Executive Scholarships up to $6,000",
        "fee": "$50",
        "tuition": "$19,500 total",
        "desc": "ACBSP-accredited cohort MBA program emphasizing corporate financial modeling, organizational change leadership, and real-world executive consulting projects.",
        "requirements": {"gpa": "Undergraduate GPA 2.8+; professional resume", "ielts": "TOEFL 80+", "gre": "GMAT/GRE optional", "papers": "Personal statement", "references": "Two professional references"},
        "source": "https://uindy.edu/business/mba"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering - R.B. Annis School of Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Annis Engineering Scholars Awards up to $16,000/year",
        "fee": "$50",
        "tuition": "$35,400/year",
        "desc": "Project-based ABET-accredited curriculum utilizing the DesignSpine framework, where student cohorts execute multi-semester sponsored projects for Indianapolis automotive and manufacturing firms.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus and physics", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Engineering interest statement", "references": "One counselor recommendation"},
        "source": "https://uindy.edu/engineering/mechanical-engineering"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Stephen Nawrocki",
        "role": "Professor of Biology & Anthropology",
        "department": "Department of Anthropology",
        "subject": "biology",
        "bio": "Dr. Nawrocki is a board-certified forensic anthropologist (D-ABFA) who has analyzed over 600 forensic skeletal cases, researching taphonomy, skeletal age estimation, and trauma biomechanics."
      },
      {
        "name": "Dr. Stephanie Kelly",
        "role": "Dean & Professor of Physical Therapy",
        "department": "Krannert School of Physical Therapy",
        "subject": "biology",
        "bio": "Dr. Kelly investigates motor learning in neurorehabilitation, balance assessment in geriatric fall prevention, and physical therapy clinical education methodologies."
      },
      {
        "name": "Dr. Kenneth Reid",
        "role": "Associate Dean & Professor of Engineering",
        "department": "R.B. Annis School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Reid is an award-winning engineering educator researching first-year engineering retention, entrepreneurial design pedagogies, and workforce preparation."
      }
    ]
  },

  # 26. University of Iowa (Row 1089)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Iowa",
    "shortName": "UIowa",
    "slug": "university-of-iowa",
    "location": "Iowa City, Iowa, United States",
    "website": "https://uiowa.edu",
    "sourceRow": 1089,
    "stats": {"established": "1847", "students": "31,500+", "international": "8%", "faculty": "1,800+"},
    "heroSummary": "The University of Iowa, founded in 1847 in Iowa City, is the state's flagship public Carnegie R1 research university and a founding member of the Big Ten Conference. Internationally celebrated as the world capital of creative writing—home to the legendary Iowa Writers' Workshop, the first creative writing degree program in the US—UIowa is equally renowned for the Roy J. and Lucille A. Carver College of Medicine, pioneering space physics, and hydraulic engineering.",
    "academicOverview": "UIowa encompasses 12 colleges, notably the Carver College of Medicine, College of Engineering, College of Liberal Arts and Sciences, Tippie College of Business, and College of Public Health. Its world-class research institutes include IIHR—Hydroscience & Engineering, the Iowa Neuroscience Institute, and the Holden Comprehensive Cancer Center.",
    "researchAdmissions": "Undergraduate admissions are evaluated through the Common Application (holistic review; RAI score or GPA 3.7+ median; test-optional). Graduate and professional programs are highly competitive, requiring accredited baccalaureate degrees, competitive GPAs (minimum 3.3–3.5), writing samples or research proposals, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Fine Arts (MFA) in Creative Writing - Iowa Writers' Workshop",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full 2-year funding for all admitted writers: $22,000/year living stipend plus 100% tuition coverage",
        "fee": "$100",
        "tuition": "Covered by fellowship/TA",
        "desc": "The world's preeminent creative writing graduate program, which has produced 29 Pulitzer Prize winners and countless literary titans, focused on peer workshops in fiction and poetry.",
        "requirements": {"gpa": "Undergraduate degree in any discipline; manuscript submission of exceptional literary quality (up to 80 pages fiction or 10-12 poems)", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "Not required or accepted", "papers": "Original literary manuscript and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://writersworkshop.uiowa.edu/admissions"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Roy J. and Lucille A. Carver College of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-15",
        "deadlineText": "October 15, 2027",
        "funding": "Carver Medical Merit Scholarships and Need-based Grants up to full 4-year tuition",
        "fee": "$120 (AMCAS + Secondary)",
        "tuition": "$39,500/year (resident) / $61,500/year (non-resident)",
        "desc": "LCME-accredited medical doctorate featuring early clinical integration at University of Iowa Hospitals & Clinics—one of the nation's premier academic medical centers.",
        "requirements": {"gpa": "Undergraduate science GPA 3.7+; competitive MCAT (514+ median); AMCAS application and CASPer exam", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and Iowa secondary essays", "references": "Pre-health committee letter or three academic references"},
        "source": "https://medicine.uiowa.edu/md/admissions"
      },
      {
        "title": "Ph.D. in Physics - Space Plasma Physics & Astrophysics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "NASA & Departmental Fellowships $34,000/year plus complete tuition remission and healthcare",
        "fee": "$100",
        "tuition": "Covered by fellowship",
        "desc": "Historic space physics department that built instruments for Explorer 1 and Voyager 1 & 2, leading contemporary NASA satellite research into auroral plasma and planetary magnetospheres.",
        "requirements": {"gpa": "BS in Physics, Astronomy, or Mathematics with GPA 3.4+; advanced mechanics and electromagnetism", "ielts": "TOEFL 85+", "gre": "Physics GRE recommended", "papers": "Statement of purpose detailing space physics research", "references": "Three academic references"},
        "source": "https://physics.uiowa.edu/graduate"
      },
      {
        "title": "Ph.D. in Civil and Environmental Engineering - IIHR-Hydroscience & Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $33,000/year plus full tuition waiver",
        "fee": "$100",
        "tuition": "Covered by assistantship",
        "desc": "World-leading fluid mechanics institute pioneering computational river hydraulics, ship hydrodynamics, environmental sensor networks, and regional flood mitigation.",
        "requirements": {"gpa": "BS or MS in engineering, environmental science, or physics with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Research statement", "references": "Three letters of recommendation"},
        "source": "https://cee.engineering.uiowa.edu/graduate-program"
      },
      {
        "title": "Ph.D. in Computer Science - Formal Verification & Computational Biology",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Departmental Fellowships $34,000/year plus full tuition remission for 5 years",
        "fee": "$100",
        "tuition": "Covered by fellowship",
        "desc": "Research-intensive doctoral program exploring satisfiability modulo theories (SMT), automated theorem proving, bioinformatics genomics algorithms, and network security.",
        "requirements": {"gpa": "BS or MS in Computer Science or Mathematics with GPA 3.4+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://cs.uiowa.edu/graduate"
      },
      {
        "title": "Master of Health Administration (MHA) - Ranked #7 Nationally",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "College of Public Health Graduate Assistantships up to $16,000/year plus tuition",
        "fee": "$75 (HAMPCAS)",
        "tuition": "$18,500/year (resident) / $36,800/year (non-resident)",
        "desc": "CAHME-accredited elite healthcare management master's offering clinical administrative integration with University of Iowa Hospitals & Clinics and health systems across the Midwest.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; resume showing healthcare interest; HAMPCAS application", "ielts": "TOEFL 85+", "gre": "GRE or GMAT optional", "papers": "Personal statement", "references": "Three recommendations"},
        "source": "https://www.public-health.uiowa.edu/mha/"
      }
    ],
    "researchers": [
      {
        "name": "Lan Samantha Chang",
        "role": "Elizabeth M. Stanley Professor in the Arts & Director of Iowa Writers' Workshop",
        "department": "Iowa Writers' Workshop",
        "subject": "arts-design",
        "bio": "Prof. Chang is a renowned novelist and the first woman and first Asian American to direct the Iowa Writers' Workshop, having received Guggenheim and National Endowment for the Arts fellowships."
      },
      {
        "name": "Dr. Larry Weber",
        "role": "Edwin B. Green Chair in Hydraulics & Professor of Civil and Environmental Engineering",
        "department": "IIHR-Hydroscience & Engineering",
        "subject": "engineering",
        "bio": "Dr. Weber is an internationally acclaimed hydrologist who co-founded the Iowa Flood Center, researching computational fluid dynamics, fish passage hydrodynamics, and river basin water quality."
      },
      {
        "name": "Dr. Cesare Maffei",
        "role": "Professor of Physics and Astronomy",
        "department": "Department of Physics and Astronomy",
        "subject": "physics",
        "bio": "Dr. Maffei conducts cutting-edge research in space plasma physics, analyzing solar wind turbulence and energetic particle dynamics using NASA Magnetospheric Multiscale mission data."
      }
    ]
  },

  # 27. University of Louisville (Row 1094)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Louisville",
    "shortName": "UofL",
    "slug": "university-of-louisville",
    "location": "Louisville, Kentucky, United States",
    "website": "https://louisville.edu",
    "sourceRow": 1094,
    "stats": {"established": "1798", "students": "23,000+", "international": "5%", "faculty": "1,900+"},
    "heroSummary": "The University of Louisville (UofL), founded in 1798, is a premier public metropolitan Carnegie R1 research university in Louisville, Kentucky. UofL made medical history by performing the world's first successful self-contained artificial heart implant and hand transplant. Anchored by the Health Sciences Center, UofL Health, and the J.B. Speed School of Engineering, UofL conducts over $150 million in annual sponsored research.",
    "academicOverview": "UofL encompasses 12 colleges and schools, notably the School of Medicine, the J.B. Speed School of Engineering, the Louis D. Brandeis School of Law, and the School of Public Health and Information Sciences. It is home to the Christina Lee Brown Envirome Institute and the Additive Manufacturing Competency Center.",
    "researchAdmissions": "Undergraduate admissions operate via the Common Application (holistic review; test-optional; recommended GPA 3.0+). Graduate and professional biomedical programs require an accredited bachelor's degree, competitive GPA, letters of recommendation, and department-specific exams or statements.",
    "opps": [
      {
        "title": "Doctor of Medicine (M.D.) - UofL School of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-11-01",
        "deadlineText": "November 1, 2027",
        "funding": "UofL Medical Endowed Scholarships up to full 4-year tuition",
        "fee": "$100 (AMCAS + Secondary)",
        "tuition": "$42,500/year (resident) / $67,800/year (non-resident)",
        "desc": "Historic LCME-accredited medical doctorate renowned for clinical rotations at UofL Hospital, Jewish Hospital, and Norton Children's Hospital, with surgical oncology and cardiac transplant tracks.",
        "requirements": {"gpa": "Undergraduate science GPA 3.7+; MCAT score (510+ median); AMCAS application and CASPer exam", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and UofL secondary essays", "references": "Pre-health committee letter or three academic references"},
        "source": "https://louisville.edu/medicine/admissions"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Additive Manufacturing Competency Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research fellowship $32,000/year plus complete tuition remission",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Leading doctoral curriculum in laser powder bed fusion, metal additive manufacturing, binder jetting mechanics, and thermal stress modeling.",
        "requirements": {"gpa": "BS or MS in Mechanical, Materials, or Aerospace Engineering with GPA 3.2+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE General required", "papers": "Statement of purpose and engineering research resume", "references": "Three letters of recommendation"},
        "source": "https://engineering.louisville.edu/academics/departments/mechanical/graduate-programs/"
      },
      {
        "title": "Ph.D. in Pharmacology and Toxicology - Cancer Mechanisms & Epigenetics",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full NIH-sponsored departmental stipend $33,000/year plus full tuition and healthcare",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research program investigating chemical carcinogenesis, aryl hydrocarbon receptor signaling, xenobiotic metabolism, and environmental toxicology.",
        "requirements": {"gpa": "Undergraduate degree in chemistry, biochemistry, or biology with GPA 3.2+; laboratory research experience", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://louisville.edu/medicine/departments/pharmacology/graduate/phd"
      },
      {
        "title": "Juris Doctor (J.D.) - Louis D. Brandeis School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Brandeis Merit Fellowships up to full tuition",
        "fee": "$60",
        "tuition": "$24,500/year (resident) / $41,200/year (non-resident)",
        "desc": "Kentucky's oldest law school, celebrated for experiential public service, intellectual property law, health law, and mediation clinical practice.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+; competitive LSAT score; LSAC Credential Assembly Service", "ielts": "TOEFL 90+", "gre": "LSAT required", "papers": "Personal statement and legal career goals", "references": "Two recommendations"},
        "source": "https://louisville.edu/law/admissions"
      },
      {
        "title": "Master of Science in Health Data Analytics - School of Public Health",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Public Health Informatics Assistantships up to $12,000",
        "fee": "$65",
        "tuition": "$15,200/year (resident) / $29,800/year (non-resident)",
        "desc": "Applied graduate degree preparing healthcare data scientists in predictive clinical analytics, SAS/R biostatistical modeling, and health insurance claims data mining.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; calculus and statistics background", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Personal statement", "references": "Two letters of recommendation"},
        "source": "https://louisville.edu/sphis/departments/biostatistics/degrees-programs/mshda"
      },
      {
        "title": "Bachelor of Science in Bioengineering - Biomaterials & Tissue Biomechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Speed School STEM Honors Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$12,400/year (resident) / $28,800/year (non-resident)",
        "desc": "ABET-accredited bioengineering degree requiring three paid cooperative education internships, with research in cardiac assist devices and orthopedic implants.",
        "requirements": {"gpa": "High school GPA 3.3+; preparatory calculus and chemistry", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Common App essay", "references": "One counselor recommendation"},
        "source": "https://engineering.louisville.edu/academics/departments/bioengineering/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Roberto Bolli",
        "role": "Chief of Cardiovascular Medicine & Distinguished Professor",
        "department": "Department of Medicine",
        "subject": "biology",
        "bio": "Dr. Bolli is an internationally acclaimed cardiologist investigating ischemic preconditioning, cardiac gene therapy, and adult stem cell therapies for heart repair."
      },
      {
        "name": "Dr. Sundar V. Atre",
        "role": "Endowed Chair & Professor of Mechanical Engineering",
        "department": "J.B. Speed School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Atre directs the Materials Innovation Guild, pioneering metal injection molding, ceramic additive manufacturing, and binder jet 3D printing."
      },
      {
        "name": "Dr. David W. Hein",
        "role": "Peter K. Knoefel Endowed Chair in Pharmacology and Toxicology",
        "department": "Department of Pharmacology and Toxicology",
        "subject": "chemistry",
        "bio": "Dr. Hein investigates molecular epidemiology, arylamine N-acetyltransferase pharmacogenetics, and genetic susceptibility to environmental carcinogens."
      }
    ]
  },

  # 28. University of Maine (Row 1095)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maine",
    "shortName": "UMaine",
    "slug": "university-of-maine",
    "location": "Orono, Maine, United States",
    "website": "https://umaine.edu",
    "sourceRow": 1095,
    "stats": {"established": "1865", "students": "12,000+", "international": "4%", "faculty": "700+"},
    "heroSummary": "The University of Maine (UMaine), established in 1865 on Marsh Island in Orono, Maine, is the state's flagship public land-grant and sea-grant Carnegie R1 research university. UMaine is globally renowned for the Advanced Structures and Composites Center (ASCC)—home to the world's largest prototype 3D printer and offshore floating wind turbine technology—the Climate Change Institute, forest bioproducts, and marine ecology.",
    "academicOverview": "UMaine consists of five colleges, including the College of Earth, Life, and Health Sciences, the Maine College of Engineering and Computing, the College of Liberal Arts and Sciences, and the Graduate School. It operates the Darling Marine Center on the mid-coast and over 14,000 acres of research forests across Maine.",
    "researchAdmissions": "Undergraduate admissions are evaluated through the Common Application (rolling admissions; test-optional; average GPA 3.4+). Graduate and doctoral applicants require an accredited bachelor's or master's degree with a minimum 3.0 GPA, letters of recommendation, and clear research interests matching faculty labs.",
    "opps": [
      {
        "title": "Ph.D. in Civil and Environmental Engineering - Advanced Structures and Composites Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "ASCC Graduate Research Assistantships $32,000/year plus full tuition remission",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Cutting-edge doctoral research utilizing the world's largest composite 3D printer (BioHome3D), floating offshore wind turbine wave basins, and structural bio-resins.",
        "requirements": {"gpa": "BS or MS in Civil, Mechanical, or Materials Engineering with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE General optional", "papers": "Statement of purpose and engineering research goals", "references": "Three letters of recommendation"},
        "source": "https://composites.umaine.edu/education/"
      },
      {
        "title": "Ph.D. in Earth and Climate Sciences - Climate Change Institute",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate fellowships $30,000/year plus complete tuition waiver",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "World-leading glaciological research program investigating Antarctic and Greenland ice cores, abrupt paleoclimate transitions, and high-altitude alpine meteorology.",
        "requirements": {"gpa": "Bachelor's or master's in earth science, physics, or chemistry with GPA 3.3+; field expedition experience preferred", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Research statement and CV", "references": "Three academic recommendations"},
        "source": "https://climatechange.umaine.edu/graduate-programs/"
      },
      {
        "title": "Ph.D. in Marine Biology - Darling Marine Center",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Darling Marine Center Assistantships $28,000/year plus full tuition",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program based at the marine laboratory on the Damariscotta River estuary, investigating American lobster population genetics, shellfish aquaculture, and kelp ecology.",
        "requirements": {"gpa": "Undergraduate degree in marine biology, zoology, or oceanography with GPA 3.0+; faculty advisor sponsorship", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://dmc.umaine.edu/academics/"
      },
      {
        "title": "Master of Science in Forest Resources - Sustainable Biomass & Wood Composites",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Forest Bioproducts Research Institute Stipends up to $22,000/year plus tuition",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Applied master's focusing on nanocellulose extraction, mass timber building systems, forest carbon modeling, and sustainable northern hardwood silviculture.",
        "requirements": {"gpa": "BS in Forestry, Natural Resources, or Engineering with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://forest.umaine.edu/academics/graduate-programs/"
      },
      {
        "title": "Bachelor of Science in Wildlife Ecology - Fisheries & Conservation Biology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Maine Black Bear Merit Scholarships up to $14,000/year",
        "fee": "$50",
        "tuition": "$12,400/year (resident) / $34,800/year (non-resident)",
        "desc": "Hands-on field wildlife degree certified by The Wildlife Society, examining moose parasite ecology, Atlantic salmon river restoration, and seabird island conservation.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory biology and chemistry", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Common App essay", "references": "One counselor recommendation"},
        "source": "https://umaine.edu/wfcb/undergraduate/"
      },
      {
        "title": "Master of Science in Spatial Informatics - School of Computing and Information Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "National Center for Geographic Information Assistantships up to $20,000",
        "fee": "$65",
        "tuition": "$15,500 total",
        "desc": "Interdisciplinary computational master's covering spatial ontology modeling, GIS database engineering, satellite remote sensing algorithms, and location privacy.",
        "requirements": {"gpa": "BS in Computer Science, Geography, or Engineering with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://umaine.edu/scis/spatial-informatics/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Habib Dagher",
        "role": "Executive Director & Professor of Civil and Structural Engineering",
        "department": "Advanced Structures and Composites Center",
        "subject": "engineering",
        "bio": "Dr. Dagher directs the ASCC, holding over 50 patents in offshore wind floating foundations, large-scale 3D printed polymer bio-homes, and bridge composite girders."
      },
      {
        "name": "Dr. Paul Andrew Mayewski",
        "role": "Director & Distinguished Professor of Earth and Climate Sciences",
        "department": "Climate Change Institute",
        "subject": "environment",
        "bio": "Dr. Mayewski has led over 60 scientific expeditions to Antarctica, the Arctic, and the Himalayas, pioneering high-resolution ice core chemistry to document abrupt climate shifts."
      },
      {
        "name": "Dr. Heather Leslie",
        "role": "Professor of Marine Conservation",
        "department": "Darling Marine Center",
        "subject": "environment",
        "bio": "Dr. Leslie explores coastal marine ecology, small-scale fisheries resilience in Maine and Mexico, and the integration of social and ecological metrics in coastal ocean zoning."
      }
    ]
  },

  # 29. University of Maine at Fort Kent (Row 1096)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maine at Fort Kent",
    "shortName": "UMFK",
    "slug": "university-of-maine-at-fort-kent",
    "location": "Fort Kent, Maine, United States",
    "website": "https://www.umfk.edu",
    "sourceRow": 1096,
    "stats": {"established": "1878", "students": "1,500+", "international": "6%", "faculty": "75+"},
    "heroSummary": "The University of Maine at Fort Kent (UMFK), founded in 1878 on the Canadian border in the scenic St. John River Valley, is a regional public university celebrated for rural healthcare, conservation law enforcement, forestry, and bilingual French-Acadian cultural heritage. UMFK provides small class sizes, high-touch faculty mentorship, and experiential outdoor learning.",
    "academicOverview": "UMFK offers associate and bachelor's degrees through the Division of Nursing, the Division of Arts and Sciences, and the Division of Professional Programs. Its campus features modern nursing clinical simulation laboratories, forestry research plots in the North Maine Woods, and the Acadian Archives / Archives acadiennes.",
    "researchAdmissions": "Undergraduate admission operates on rolling deadlines via the UMFK direct portal or Common Application (test-optional; recommended minimum GPA 2.5). Nursing candidates must complete prerequisite high school biology and chemistry with a minimum 2.75 GPA.",
    "opps": [
      {
        "title": "Bachelor of Science in Nursing (BSN) - Rural Healthcare Immersion",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Northern Light Health Rural Nursing Scholarships up to $8,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "CCNE-accredited professional nursing program providing rural clinical immersion across Northern Light AR Gould Hospital and Northern Maine Medical Center.",
        "requirements": {"gpa": "High school GPA 2.75+; prerequisite biology and chemistry with C or higher; TEAS examination", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "Not required", "papers": "Nursing essay", "references": "Two recommendations"},
        "source": "https://www.umfk.edu/academics/programs/nursing/"
      },
      {
        "title": "Bachelor of Science in Conservation Law Enforcement - Warden Academy Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Maine Game Warden Association Grants up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "Specialized curriculum preparing fish and game wardens, marine patrol officers, and park rangers in wildlife law, search and rescue, firearms safety, and environmental ethics.",
        "requirements": {"gpa": "High school GPA 2.5+; physical fitness assessment readiness", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.umfk.edu/academics/programs/conservation-law/"
      },
      {
        "title": "Bachelor of Science in Forestry - Working Woodlands & Silviculture",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Aroostook Forestry Scholarships up to $5,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "Hands-on field forestry major utilizing northern Maine commercial timberlands to teach timber cruising, GIS boundary mapping, heavy equipment operations, and sustainable harvesting.",
        "requirements": {"gpa": "High school GPA 2.5+; algebra readiness", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://www.umfk.edu/academics/programs/forestry/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity - Small Business Defense Track",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Rural Tech Leadership Awards up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "Applied undergraduate major covering network intrusion response, small enterprise security policies, cloud server hardening, and digital forensics.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.umfk.edu/academics/programs/cybersecurity/"
      },
      {
        "title": "Bachelor of Science in Environmental Studies - Boreal Forest Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Northern Border Environmental Grants up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "Field ecology degree exploring watershed conservation along the St. John and Allagash Rivers, boreal peatland wetlands, and northern wildlife habitats.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://www.umfk.edu/academics/programs/environmental-studies/"
      },
      {
        "title": "Bachelor of Arts in French and Acadian Heritage Studies",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Acadian Cultural Heritage Fellowships up to $3,500/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $14,200/year (non-resident)",
        "desc": "Distinctive cultural humanities degree based at the Acadian Archives, examining francophone North American literature, oral histories, linguistics, and genealogy.",
        "requirements": {"gpa": "High school GPA 2.5+; high school French recommended", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Statement of interest", "references": "One reference"},
        "source": "https://www.umfk.edu/academics/programs/french/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Erin Soucy",
        "role": "Dean of Undergraduate Nursing",
        "department": "Division of Nursing",
        "subject": "biology",
        "bio": "Dr. Soucy's scholarship focuses on rural healthcare access disparities, pre-licensure clinical simulation pedagogies, and retention of nurses in critical access hospitals."
      },
      {
        "name": "Dr. Jeffrey Dubis",
        "role": "Professor of Forestry",
        "department": "Division of Arts and Sciences",
        "subject": "environment",
        "bio": "Dr. Dubis specializes in northern hardwood silviculture, maple syrup production dynamics, GPS forest surveying, and timber stand improvement in northern Maine."
      },
      {
        "name": "Dr. Peter Marquis",
        "role": "Associate Professor of Criminal Justice",
        "department": "Division of Professional Programs",
        "subject": "social-sciences",
        "bio": "Dr. Marquis investigates conservation law enforcement methodologies, procedural justice in rural policing, and natural resource crime investigation tactics."
      }
    ]
  },

  # 30. University of Maine at Machias (Row 1097)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maine at Machias",
    "shortName": "UMaine Machias",
    "slug": "university-of-maine-at-machias",
    "location": "Machias, Maine, United States",
    "website": "https://machias.edu",
    "sourceRow": 1097,
    "stats": {"established": "1909", "students": "750+", "international": "2%", "faculty": "50+"},
    "heroSummary": "The University of Maine at Machias (UMM), established in 1909, is Maine's coastal regional campus of the University of Maine, situated in the rugged Downeast coastal region along the Machias River. Renowned for its direct access to rocky intertidal shores, mudflats, and salt marshes, UMM offers renowned experiential programs in marine biology, aquaculture, environmental studies, and creative arts.",
    "academicOverview": "UMM provides associate and bachelor's degrees through the Division of Environmental and Biological Sciences and the Division of Professional Studies. It works in close partnership with the Downeast Institute (DEI)—a premier marine research laboratory on Great Wass Island—providing undergraduate research vessels and shellfish hatcheries.",
    "researchAdmissions": "Undergraduate admission operates on rolling deadlines through the UMaine System online application or Common App (test-optional; recommended GPA 2.5+). Applicants submit high school transcripts and personal statements.",
    "opps": [
      {
        "title": "Bachelor of Science in Marine Biology - Downeast Institute Aquaculture Practicum",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Downeast Marine Merit Scholarships up to $6,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Hands-on undergraduate marine program featuring field research at the Downeast Institute, examining soft-shell clam ocean acidification, lobster larval ecology, and intertidal algal dynamics.",
        "requirements": {"gpa": "High school GPA 2.75+; preparatory biology and chemistry", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "Not required", "papers": "Marine biology interest statement", "references": "One counselor recommendation"},
        "source": "https://machias.edu/programs/marine-biology/"
      },
      {
        "title": "Bachelor of Science in Environmental Studies - Coastal Resource Conservation",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Coastal Conservation Grants up to $5,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Field-oriented environmental degree investigating coastal wetland restoration, watershed conservation, climate sea-level rise adaptation, and community sustainability.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://machias.edu/programs/environmental-studies/"
      },
      {
        "title": "Bachelor of Science in Recreation and Tourism Management - Ecotourism Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Maine Tourism Leadership Awards up to $4,500/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Applied program utilizing Downeast Maine's coastal trails and maritime reserves to teach wilderness leadership, park planning, adventure tourism, and environmental interpretation.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://machias.edu/programs/recreation-tourism-management/"
      },
      {
        "title": "Bachelor of College Studies in Geographic Information Systems (GIS)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "GIS Spatial Technology Grants up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Technical degree delivered via the UMM GIS Laboratory, covering spatial database development, drone photogrammetry, coastal hazard mapping, and municipal parcel management.",
        "requirements": {"gpa": "High school GPA 2.5+; basic computer literacy", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://machias.edu/programs/gis-certificate/"
      },
      {
        "title": "Bachelor of Arts in Creative Arts - Coastal Literature & Visual Storytelling",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Downeast Arts Merit Scholarships up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Interdisciplinary arts program combining creative writing, environmental journalism, digital photography, and printmaking inspired by coastal Maine landscapes.",
        "requirements": {"gpa": "High school GPA 2.5+; portfolio of 3-5 creative works (writing or art)", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Artist statement", "references": "One teacher evaluation"},
        "source": "https://machias.edu/programs/creative-arts/"
      },
      {
        "title": "Bachelor of Science in Business and Entrepreneurial Studies - Small Business Coastal Economy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Downeast Entrepreneur Grants up to $4,000/year",
        "fee": "$40",
        "tuition": "$8,500/year (resident) / $15,800/year (non-resident)",
        "desc": "Applied business degree training entrepreneurs in rural venture capital, small business accounting, maritime tourism economics, and digital e-commerce.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://machias.edu/programs/business-entrepreneurial-studies/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brian F. Beal",
        "role": "Professor of Marine Ecology & Research Director at Downeast Institute",
        "department": "Division of Environmental and Biological Sciences",
        "subject": "biology",
        "bio": "Dr. Beal is an internationally recognized marine ecologist studying shellfish mariculture, soft-shell clam recruitment dynamics, predator-prey interactions, and ocean acidification mitigation."
      },
      {
        "name": "Dr. Tora Johnson",
        "role": "Associate Professor of GIS & Director of GIS Laboratory",
        "department": "Division of Environmental and Biological Sciences",
        "subject": "environment",
        "bio": "Dr. Johnson directs the UMM GIS Laboratory, conducting spatial mapping of coastal climate vulnerabilities, sea level rise inundation modeling, and rural community emergency planning."
      },
      {
        "name": "Dr. Gerard NeCastro",
        "role": "Professor of Humanities",
        "department": "Division of Arts and Letters",
        "subject": "arts-design",
        "bio": "Dr. NeCastro investigates medieval drama, coastal Maine oral history preservation, digital humanities text analysis, and experiential place-based arts education."
      }
    ]
  }
]
