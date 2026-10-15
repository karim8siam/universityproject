# scripts/make_b65_p2_chunk2.py
# Batch 65 Part 2 Chunk 2: Universities 24 to 30

chunk4 = [
  # 24. Southern University at New Orleans (Row 962)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern University at New Orleans",
    "shortName": "SUNO",
    "slug": "southern-university-at-new-orleans",
    "location": "New Orleans, Louisiana, United States",
    "website": "https://www.suno.edu",
    "sourceRow": 962,
    "stats": {"established": "1956", "students": "2,300+", "international": "2%", "faculty": "120+"},
    "heroSummary": "Southern University at New Orleans (SUNO) is an accredited public historically Black university located in the historic Pontchartrain Park neighborhood of New Orleans, Louisiana. As a vital member of the Southern University System, SUNO is acclaimed for its pioneering Millie M. Charles School of Social Work, its FEPAC-accredited undergraduate Forensic Science program, its innovative Master of Arts in Museum Studies, and its deep commitment to urban community empowerment.",
    "academicOverview": "SUNO operates across two campuses: the Park Campus and the Lake Campus on Lake Pontchartrain. It comprises the College of Arts and Sciences, the College of Business and Public Administration, the College of Education and Human Development, and the Millie M. Charles School of Social Work. The university houses state-of-the-art forensic DNA laboratories, cybersecurity learning suites, and the Center for African and African American Studies.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 2.0) and completion of standard college preparatory coursework (test-optional). The Master of Social Work (MSW) program requires an accredited bachelor's degree with a 2.5+ minimum GPA (3.0 for Advanced Standing), personal essays on social justice, and professional references.",
    "opps": [
      {
        "title": "Master of Social Work (MSW) - Millie M. Charles School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "HRSA Behavioral Health Workforce Traineeship Stipends up to $10,000",
        "fee": "$30",
        "tuition": "$7,840/year in-state, $14,920/year out-of-state",
        "desc": "CSWE-accredited MSW program specializing in children, youth, and families or health/mental health, providing 900+ hours of supervised clinical social work across New Orleans healthcare and community agencies.",
        "requirements": {"gpa": "Bachelor's degree with 2.5+ GPA (3.0 for Advanced Standing)", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal statement on urban social work and civil rights", "references": "Three letters of professional/academic recommendation"},
        "source": "https://www.suno.edu/academics/school-of-social-work"
      },
      {
        "title": "Bachelor of Science in Forensic Science (FEPAC Accredited)",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "SUNO STEM Excellence Scholarships up to $4,000/year",
        "fee": "$20",
        "tuition": "$7,400/year in-state, $16,100/year out-of-state",
        "desc": "FEPAC-accredited degree providing rigorous training in forensic DNA typing, trace evidence microscopy, gas chromatography-mass spectrometry (GC-MS), and courtroom expert testimony.",
        "requirements": {"gpa": "High school core GPA 2.5+ with strong grades in chemistry and biology", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Forensic science statement of purpose", "references": "One science teacher letter"},
        "source": "https://www.suno.edu/academics/forensic-science"
      },
      {
        "title": "Master of Science in Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate assistantships offering full tuition remission and research stipends",
        "fee": "$30",
        "tuition": "$7,840/year in-state, $14,920/year out-of-state",
        "desc": "Applied graduate degree covering enterprise database management, cloud systems architecture, cybersecurity defense, and artificial intelligence applications for business intelligence.",
        "requirements": {"gpa": "Bachelor's degree in IT, CS, or quantitative field with 2.75+ GPA", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "GRE waived for GPA > 3.0", "papers": "Statement of computing career goals", "references": "Two recommendations"},
        "source": "https://www.suno.edu/academics/computer-information-systems-ms"
      },
      {
        "title": "Master of Arts in Museum Studies",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Institute of Museum and Library Services (IMLS) Graduate Fellowships",
        "fee": "$30",
        "tuition": "$7,840/year in-state, $14,920/year out-of-state",
        "desc": "The only master's program in museum studies at an HBCU, preparing curators, archivists, and museum directors with hands-on exhibitions across New Orleans' vibrant museum community.",
        "requirements": {"gpa": "Bachelor's degree in history, art, anthropology, or humanities with 2.7+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Curatorial interest essay and writing sample", "references": "Two academic letters"},
        "source": "https://www.suno.edu/academics/museum-studies"
      },
      {
        "title": "Master of Science in Criminal Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Criminal Justice Departmental Tuition Waivers and research grants",
        "fee": "$30",
        "tuition": "$7,840/year in-state, $14,920/year out-of-state",
        "desc": "Advanced program examining restorative justice, juvenile delinquency interventions, law enforcement policy reform, and empirical criminological research methodologies.",
        "requirements": {"gpa": "Bachelor's degree with 2.5+ GPA in criminal justice or social sciences", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Criminal justice career statement", "references": "Two professional references"},
        "source": "https://www.suno.edu/academics/criminal-justice-ms"
      },
      {
        "title": "New Orleans Urban Resilience & Post-Disaster Social Work Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "$4,000 summer research stipend and urban community project grant",
        "fee": "$0",
        "tuition": "Provided by Millie M. Charles School of Social Work",
        "desc": "Community research fellowship investigating long-term psychological recovery, climate disaster displacement, and healthcare access in historic African American neighborhoods in post-Katrina New Orleans.",
        "requirements": {"gpa": "Enrolled MSW or upper-division undergraduate student in social sciences with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Urban resilience project proposal", "references": "Social work faculty endorsement"},
        "source": "https://www.suno.edu/research/social-work-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. James H. Ammons Jr.",
        "role": "Executive Vice President-Chancellor",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Ammons leads Southern University at New Orleans, a veteran higher education executive with extensive experience driving university enrollment growth, programmatic accreditation, and financial stabilization."
      },
      {
        "name": "Dr. Harry Russell",
        "role": "Dean & Professor of Social Work",
        "department": "Millie M. Charles School of Social Work",
        "subject": "social-sciences",
        "bio": "Dr. Russell oversees CSWE-accredited social work education, investigating trauma-informed clinical care, urban social welfare policies, and health disparities in vulnerable Gulf Coast populations."
      },
      {
        "name": "Dr. Murty S. Kambhampati",
        "role": "Professor of Natural Sciences & Environmental Biology",
        "department": "Department of Natural Sciences",
        "subject": "biology",
        "bio": "Dr. Kambhampati conducts research in phytoremediation of heavy metal soil contaminants, wetland plant ecophysiology, and environmental toxicology education for underrepresented students."
      }
    ]
  },

  # 25. Southern University Law Center (Row 963)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern University Law Center",
    "shortName": "SULC",
    "slug": "southern-university-law-center-baton-rouge",
    "location": "Baton Rouge, Louisiana, United States",
    "website": "https://www.sulc.edu",
    "sourceRow": 963,
    "stats": {"established": "1947", "students": "950+", "international": "2%", "faculty": "75+"},
    "heroSummary": "Southern University Law Center (SULC) is a prestigious public historically Black law school located in Baton Rouge, Louisiana. Created in 1947 following a civil rights lawsuit by Charles J. Hatfield III to ensure legal education access for African Americans in Louisiana, SULC has evolved into one of the nation's most racially and ethnically diverse law schools, renowned for championing civil rights litigation, trial advocacy, social justice, and clinical legal education.",
    "academicOverview": "SULC offers Juris Doctor (J.D.) degree programs through full-time day and part-time evening divisions, along with an innovative Master of Laws (LL.M.) in Indigenous Law. The Law Center operates eight experiential clinical legal education clinics, including the Civil Rights Clinic, the Criminal Defense Clinic, the Disaster Relief Clinic, and the Low-Income Taxpayer Clinic.",
    "researchAdmissions": "Admission to the Juris Doctor program requires an accredited bachelor's degree from a recognized institution, a competitive score on the Law School Admission Test (LSAT), official transcripts registered through CAS (Credential Assembly Service), a personal statement detailing legal motivations and commitment to justice, and two letters of recommendation.",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Full-Time Day Program",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Chancellor's Merit Scholarships covering up to 100% of law tuition and clinical bar-prep grants",
        "fee": "$0 (via LSAC)",
        "tuition": "$19,800/year in-state, $31,500/year out-of-state",
        "desc": "ABA-accredited 90-credit Juris Doctor program providing rigorous foundations in civil law and common law, constitutional jurisprudence, evidence, and extensive hands-on clinical advocacy.",
        "requirements": {"gpa": "Accredited bachelor's degree with competitive undergraduate GPA and LSAT score", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "LSAT score required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation (academic or legal)"},
        "source": "https://www.sulc.edu/page/full-time-day-division"
      },
      {
        "title": "Juris Doctor (J.D.) - Part-Time Evening Program",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Evening Division Working Professional Law Scholarships",
        "fee": "$0 (via LSAC)",
        "tuition": "$15,200/year in-state, $24,100/year out-of-state",
        "desc": "Flexible four-year evening law curriculum designed for working professionals, state legislative staff, and corporate managers seeking legal licensure without interrupting careers.",
        "requirements": {"gpa": "Bachelor's degree with competitive GPA and LSAT score", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "LSAT score required", "papers": "Personal statement detailing career path and evening study rationale", "references": "Two professional/academic recommendations"},
        "source": "https://www.sulc.edu/page/part-time-evening-division"
      },
      {
        "title": "Master of Laws (LL.M.) in Indigenous Law & Civil Rights Litigation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "SULC Graduate Law Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$18,500/total program",
        "desc": "Post-J.D. master of laws exploring federal Indian law, tribal sovereignty, land rights, Voting Rights Act litigation, and international human rights frameworks.",
        "requirements": {"gpa": "J.D. from an ABA-accredited law school or foreign equivalent law degree", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt", "papers": "Scholarly legal research statement", "references": "Two legal academic references"},
        "source": "https://www.sulc.edu/page/llm-program"
      },
      {
        "title": "Dual J.D. / Master of Public Administration (MPA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Public Interest Law Fellowships covering partial tuition",
        "fee": "$0",
        "tuition": "$20,400/year in-state, $32,100/year out-of-state",
        "desc": "Four-year joint degree offered with the Nelson Mandela College of Government and Social Sciences, preparing future legislators, public agency counsel, and municipal policy leaders.",
        "requirements": {"gpa": "Acceptance into both SULC and the SUBR Graduate School", "ielts": "TOEFL 90+", "gre": "LSAT score accepted for both programs", "papers": "Joint degree statement of intent", "references": "Three letters of recommendation"},
        "source": "https://www.sulc.edu/page/dual-degree-programs"
      },
      {
        "title": "Dual J.D. / Master of Business Administration (MBA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Corporate Law and Governance Endowed Awards",
        "fee": "$0",
        "tuition": "$20,400/year in-state, $32,100/year out-of-state",
        "desc": "Integrated four-year program with the College of Business training corporate transactional attorneys, venture capital legal advisors, and commercial litigators.",
        "requirements": {"gpa": "Bachelor's degree with prerequisite business coursework, acceptance to both SULC and MBA program", "ielts": "TOEFL 90+", "gre": "LSAT accepted", "papers": "Dual degree career objectives essay", "references": "Three recommendations"},
        "source": "https://www.sulc.edu/page/dual-degree-programs"
      },
      {
        "title": "Charles J. Hatfield Civil Rights & Social Justice Advocacy Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$5,000 summer legal stipend and clinical litigation expenses grant",
        "fee": "$0",
        "tuition": "Endowed by the Southern University Law Center Foundation",
        "desc": "Intensive legal research and advocacy fellowship working on voting rights litigation, criminal justice reform appeals, police accountability, and wrongful conviction post-conviction relief in Louisiana.",
        "requirements": {"gpa": "Enrolled SULC law student with 2.8+ law GPA and completion of constitutional law", "ielts": "Exempt", "gre": "Exempt", "papers": "Civil rights legal writing sample and statement of advocacy", "references": "One law faculty endorsement"},
        "source": "https://www.sulc.edu/page/civil-rights-fellowship"
      }
    ],
    "researchers": [
      {
        "name": "John K. Pierre",
        "role": "Chancellor Emeritus & Distinguished Professor of Law",
        "department": "Law Faculty",
        "subject": "social-sciences",
        "bio": "John K. Pierre is a renowned tax law and housing law scholar who served as Chancellor of SULC for nearly a decade, spearheading historic clinic expansions and law tech curriculum modernization."
      },
      {
        "name": "Prof. Roederick White Sr.",
        "role": "Vice Chancellor for Academic Affairs & Professor of Law",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Prof. White oversees academic curriculum rigor, ABA accreditation, and bar exam readiness programs, specializing in business entities, commercial paper, and secured transactions."
      },
      {
        "name": "Prof. Angela A. Allen-Bell",
        "role": "Professor of Law & Constitutional Rights Scholar",
        "department": "Law Faculty",
        "subject": "social-sciences",
        "bio": "Prof. Allen-Bell is an acclaimed constitutional and civil rights scholar whose groundbreaking legal research led to the historic abolition of Louisiana's non-unanimous criminal jury verdicts."
      }
    ]
  },

  # 26. Southern Utah University (Row 964)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Utah University",
    "shortName": "Southern Utah",
    "slug": "southern-utah-university-cedar-city",
    "location": "Cedar City, Utah, United States",
    "website": "https://www.suu.edu",
    "sourceRow": 964,
    "stats": {"established": "1897", "students": "15,000+", "international": "4%", "faculty": "560+"},
    "heroSummary": "Southern Utah University (SUU) is a public comprehensive university set against the red rocks of Cedar City, Utah. Affectionately designated as 'University of the Parks' due to its proximity to Zion, Bryce Canyon, and Capitol Reef National Parks, SUU is renowned for its premier helicopter and airplane flight academy (one of the largest collegiate flight programs in North America), the Tony Award-winning Utah Shakespeare Festival, and top-tier programs in outdoor recreation, cybersecurity, and engineering.",
    "academicOverview": "SUU comprises seven colleges: the College of Aerospace Sciences and Technology, the College of Engineering and Computational Sciences, the College of Health Sciences, the Dixie L. Leavitt School of Business, the College of Performing and Visual Arts, the College of Humanities and Social Sciences, and the Beverly Taylor Sorenson College of Education. The university operates modern helicopter and airplane flight facilities at Cedar City Regional Airport.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.0, average 3.5) on a test-optional basis. Aerospace flight programs require an FAA medical certificate and flight aptitude testing. Graduate admissions require an accredited bachelor's degree with a 3.0+ GPA, statement of purpose, and academic/professional references.",
    "opps": [
      {
        "title": "Bachelor of Science in Aerospace / Aviation - Rotorcraft & Fixed-Wing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Aviation Excellence Scholarships and regional air carrier pipeline bonuses (SkyWest, Horizon)",
        "fee": "$0",
        "tuition": "$6,770/year in-state, $20,586/year out-of-state (flight training fees separate)",
        "desc": "FAA Part 141-approved premier collegiate flight academy offering pilot licenses from private through commercial multi-engine, rotorcraft helicopter, external load, and night-vision goggles (NVG).",
        "requirements": {"gpa": "High school GPA 2.5+ and FAA Medical Certificate (Class 1 or 2)", "ielts": "TOEFL 71+ or IELTS 6.0", "gre": "Exempt", "papers": "Aviation career statement", "references": "Two recommendations"},
        "source": "https://www.suu.edu/aviation/"
      },
      {
        "title": "Master of Science in Cybersecurity and Information Assurance",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NSA Cyber Defense Grants and Graduate Assistantships covering up to 100% tuition",
        "fee": "$60",
        "tuition": "$450/credit hour",
        "desc": "NSA-designated CAE-CD program delivering advanced expertise in digital forensics, cloud security architectures, ethical hacking, and risk compliance governance.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in CS, IT, or related technical discipline", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Cybersecurity statement of intent", "references": "Two professional/academic recommendations"},
        "source": "https://www.suu.edu/programs/cybersecurity-ms/"
      },
      {
        "title": "Master of Fine Arts in Arts Administration (Utah Shakespeare Festival)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate assistantships offering full tuition remission and $12,000 annual stipends with festival leadership roles",
        "fee": "$60",
        "tuition": "Covered by assistantships",
        "desc": "Acclaimed experiential graduate program embedded within the Tony Award-winning Utah Shakespeare Festival, training future executive directors in arts marketing, fundraising, and theatrical production management.",
        "requirements": {"gpa": "Bachelor's degree in arts or humanities with 3.0+ GPA and theatre administration experience", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Arts leadership statement and portfolio", "references": "Three professional references"},
        "source": "https://www.suu.edu/programs/arts-administration-mfa/"
      },
      {
        "title": "Bachelor of Science in Outdoor Recreation in Parks and Tourism",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "National Park Interagency Merit Scholarships up to $4,000",
        "fee": "$0",
        "tuition": "$6,770/year in-state, $20,586/year out-of-state",
        "desc": "Hands-on degree leveraging the nearby national parks for wilderness first responder training, park resource planning, ecotourism management, and trail conservation.",
        "requirements": {"gpa": "High school GPA 2.50+", "ielts": "TOEFL 71+ or IELTS 6.0", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.suu.edu/programs/outdoor-recreation/"
      },
      {
        "title": "Master of Science in Interdisciplinary Studies - Environmental Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "College of Health Sciences Graduate Assistantships",
        "fee": "$60",
        "tuition": "$450/credit hour",
        "desc": "Flexible master's curriculum combining geosciences, conservation ecology, GIS mapping, and environmental law to solve resource dilemmas on federal public lands.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in science or related field", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Interdisciplinary study plan proposal", "references": "Two recommendations"},
        "source": "https://www.suu.edu/programs/interdisciplinary-studies-ms/"
      },
      {
        "title": "Colorado Plateau National Parks Eco-Monitoring Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$4,000 summer research stipend, park backcountry camping passes, and drone sensor allowance",
        "fee": "$0",
        "tuition": "Provided by SUU Center for Outdoor Education and Research",
        "desc": "Field research fellowship conducting ecological monitoring of biological soil crusts, riparian corridor recovery in Zion canyon, and wildfire fuel loads in Dixie National Forest.",
        "requirements": {"gpa": "Enrolled student in environmental science, geology, or biology with 3.2+ GPA", "ielts": "TOEFL 71+", "gre": "Exempt", "papers": "Field ecology project proposal", "references": "One environmental faculty letter"},
        "source": "https://www.suu.edu/outdoors/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mindy Benson",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Mindy Benson is the 17th President of Southern Utah University, an alumna and lifelong community leader who has expanded aviation facilities, outdoor recreation partnerships, and statewide campus access."
      },
      {
        "name": "Dr. James Sage",
        "role": "Associate Vice President for Academic Affairs & Professor of Philosophy",
        "department": "Office of the Provost & Department of Philosophy",
        "subject": "social-sciences",
        "bio": "Dr. Sage oversees academic curriculum quality, faculty governance, and general education at SUU, researching epistemology, bioethics, and philosophical logic."
      },
      {
        "name": "Dr. Matthew Weeg",
        "role": "Executive Director of Teaching Innovation & Associate Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Weeg is a neurobiologist investigating neural circuitry in animal communication, acoustic behavior, and innovative undergraduate biology laboratory pedagogies."
      }
    ]
  },

  # 27. Spring Hill College (Row 965)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Spring Hill College",
    "shortName": "Spring Hill",
    "slug": "spring-hill-college-mobile",
    "location": "Mobile, Alabama, United States",
    "website": "https://www.shc.edu",
    "sourceRow": 965,
    "stats": {"established": "1830", "students": "1,300+", "international": "3%", "faculty": "95+"},
    "heroSummary": "Spring Hill College is an accredited private Jesuit Catholic liberal arts college in Mobile, Alabama. Founded in 1830, it is the oldest Catholic college in the Southeast, the third-oldest Jesuit college in the United States, and the oldest institution of higher learning in Alabama. Nestled beneath centuries-old live oaks along the historic Avenue of the Oaks, Spring Hill is acclaimed for pre-health medicine, marine biology (in partnership with the Dauphin Island Sea Lab), nursing, and values-centered Jesuit business education.",
    "academicOverview": "Spring Hill emphasizes the Jesuit principle of cura personalis (care for the whole person). It comprises the Division of Nursing, the Division of Business, the Division of Sciences, and the Division of Humanities. Marine biology students conduct fieldwork directly at the world-renowned Dauphin Island Sea Lab on the Gulf Coast.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.5), academic curriculum rigor, and optional SAT/ACT scores with a holistic review of character and extracurricular involvement. Graduate admissions require an accredited bachelor's degree with a 2.75+ GPA, official transcripts, and personal statement.",
    "opps": [
      {
        "title": "Bachelor of Science in Marine Biology (Dauphin Island Sea Lab)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Spring Hill Jesuit Merit Scholarships up to $22,000/year and Marine Science Endowed Awards",
        "fee": "$0",
        "tuition": "$21,100/year",
        "desc": "Hands-on degree partnering with the Dauphin Island Sea Lab on the Gulf Coast for field courses in shark biology, barrier island ecology, marine mammalogy, and oceanography.",
        "requirements": {"gpa": "High school GPA 3.0+ with biology and chemistry", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application or SHC online application essay", "references": "One high school teacher recommendation"},
        "source": "https://www.shc.edu/academics/programs/undergraduate/marine-biology/"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Spring Hill Healthcare Merit Grants and Mobile Infirmary Tuition Sponsorships",
        "fee": "$0",
        "tuition": "$21,100/year",
        "desc": "CCNE-accredited nursing curriculum providing clinical acute care rotations at Mobile Infirmary, USA Health University Hospital, and Ascension Providence Hospital.",
        "requirements": {"gpa": "3.0+ prerequisite science GPA (anatomy, physiology, microbiology, chemistry)", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing statement of purpose and TEAS exam", "references": "Two recommendations"},
        "source": "https://www.shc.edu/academics/programs/undergraduate/nursing/"
      },
      {
        "title": "Master of Business Administration (MBA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Jesuit Business Leadership Scholarships up to $4,000",
        "fee": "$25",
        "tuition": "$625/credit hour",
        "desc": "Ethics-centered graduate business curriculum offering concentrations in healthcare administration, project management, and corporate financial leadership.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA from an accredited college", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE waived for GPA > 3.0", "papers": "Statement of business leadership goals", "references": "Two professional references"},
        "source": "https://www.shc.edu/academics/programs/graduate/master-of-business-administration/"
      },
      {
        "title": "Bachelor of Science in Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Spring Hill STEM Academic Scholarships up to $20,000/year",
        "fee": "$0",
        "tuition": "$21,100/year",
        "desc": "Applied computing degree combining software programming, relational database systems, cybersecurity network defense, and systems analysis in a personalized liberal arts setting.",
        "requirements": {"gpa": "High school diploma with algebra and geometry competency", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "General application essay", "references": "One recommendation"},
        "source": "https://www.shc.edu/academics/programs/undergraduate/computer-information-systems/"
      },
      {
        "title": "Master of Theological Studies (M.T.S.)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Jesuit Pastoral Ministry Tuition Waivers covering up to 50% tuition",
        "fee": "$25",
        "tuition": "$550/credit hour",
        "desc": "Graduate theological program exploring Catholic social thought, biblical exegesis, historical theology, and pastoral ministry leadership across Gulf Coast dioceses.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in humanities or theology", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Theological vocation statement", "references": "Two letters of recommendation including pastor or mentor"},
        "source": "https://www.shc.edu/academics/programs/graduate/master-of-theological-studies/"
      },
      {
        "title": "Mobile Bay Coastal Estuary & Dauphin Island Marine Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "$3,800 summer field research stipend and Dauphin Island Sea Lab dormitory housing",
        "fee": "$0",
        "tuition": "Funded through Spring Hill College Marine Biology Endowment",
        "desc": "Undergraduate research fellowship studying Mobile Bay oyster reef restoration, sea turtle nesting ecology, and coastal salinity variations in the northern Gulf of Mexico.",
        "requirements": {"gpa": "Enrolled undergraduate in marine biology or biology with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Marine biology project proposal", "references": "One biology faculty recommendation"},
        "source": "https://www.shc.edu/academics/programs/undergraduate/marine-biology/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mary H. Van Brunt",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Van Brunt is the 39th President of Spring Hill College and the first woman to lead the historic Jesuit institution, focusing on strategic enrollment renewal, healthcare degree expansions, and community philanthropy."
      },
      {
        "name": "Dr. Carolyn A. Dahl",
        "role": "Dean of Academic Affairs & Communication",
        "department": "Division of Humanities",
        "subject": "social-sciences",
        "bio": "Dr. Dahl oversees academic program innovation and institutional assessment at Spring Hill, with scholarly expertise in organizational communications, rhetoric, and Jesuit pedagogy."
      },
      {
        "name": "Dr. Jonathan Herbert",
        "role": "Associate Professor of Biology & Marine Science",
        "department": "Division of Sciences",
        "subject": "biology",
        "bio": "Dr. Herbert investigates Gulf Coast estuarine ecology, fish community dynamics, and marine invertebrate physiology in partnership with the Dauphin Island Sea Lab."
      }
    ]
  },

  # 28. St. Catherine University (Row 966)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "St. Catherine University",
    "shortName": "St. Catherine",
    "slug": "st-catherine-university-st-paul",
    "location": "St. Paul, Minnesota, United States",
    "website": "https://www.stkate.edu",
    "sourceRow": 966,
    "stats": {"established": "1905", "students": "3,800+", "international": "3%", "faculty": "290+"},
    "heroSummary": "St. Catherine University ('St. Kate's') is a prestigious private Catholic liberal arts university operating campuses in St. Paul and Minneapolis, Minnesota. Founded in 1905 by the Sisters of St. Joseph of Carondelet, it is home to one of the largest private women's colleges in the nation alongside comprehensive co-educational graduate programs. Acclaimed nationwide for the Henriette Schmoll School of Health, St. Kate's is a pioneering powerhouse in occupational therapy, physical therapy, nursing, and public health.",
    "academicOverview": "St. Kate's comprises the College for Women and the Graduate College, housing the Henriette Schmoll School of Health, the School of Humanities, Arts, and Sciences, and the School of Business. It features cutting-edge pediatric and adult occupational therapy simulation clinics, high-fidelity nursing hospital suites, and the National Center for STEM Elementary Education.",
    "researchAdmissions": "Undergraduate women's college admissions evaluate high school GPA (average 3.5), coursework rigor, and leadership on a test-optional basis. Graduate health programs (OTD, DPT, PA, MPH) are co-educational, requiring centralized applications (OTCAS, PTCAS, CASPA), prerequisite science courses with a 3.0+ GPA, clinical observation hours, and professional recommendations.",
    "opps": [
      {
        "title": "Doctor of Occupational Therapy (OTD)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Henriette Schmoll Endowed Scholarships up to $10,000/year",
        "fee": "$70 (via OTCAS)",
        "tuition": "$1,080/credit hour",
        "desc": "ACOTE-accredited three-year clinical doctoral degree with national renown, training occupational therapists in neurorehabilitation, sensory integration, assistive technology, and community mental health.",
        "requirements": {"gpa": "3.0+ cumulative and prerequisite GPA in anatomy, physiology, and abnormal psychology", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "Exempt", "papers": "OTCAS essay and personal statement", "references": "Three letters of recommendation including practicing OT"},
        "source": "https://www.stkate.edu/academics/academic-programs/grad-entry-level-otd"
      },
      {
        "title": "Doctor of Physical Therapy (DPT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Physical Therapy Departmental Merit Grants up to $8,000",
        "fee": "$75 (via PTCAS)",
        "tuition": "$1,050/credit hour",
        "desc": "CAPTE-accredited 33-month clinical doctorate emphasizing evidence-based manual therapy, pediatric development, geriatric mobility, and clinical internships across Twin Cities medical complexes.",
        "requirements": {"gpa": "3.0+ undergraduate and science prerequisite GPA, 40+ physical therapy observation hours", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "GRE scores required", "papers": "PTCAS personal statement", "references": "Three recommendations including licensed PT"},
        "source": "https://www.stkate.edu/academics/academic-programs/grad-dpt"
      },
      {
        "title": "Master of Public Health in Global Health (MPH)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Health Justice Scholar Awards providing up to $5,000/year",
        "fee": "$50",
        "tuition": "$875/credit hour",
        "desc": "CEPH-accredited master's program focusing on health equity, immigrant and refugee health epidemiology, social determinants of health, and community advocacy.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of public health advocacy goals", "references": "Two academic/professional letters"},
        "source": "https://www.stkate.edu/academics/academic-programs/grad-mph"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Nurse Educator",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Nurse Faculty Loan Program (NFLP) with up to 85% loan cancellation",
        "fee": "$50",
        "tuition": "$790/credit hour",
        "desc": "Online master's degree preparing nurse educators in clinical curriculum design, psychometric assessment, patient simulation methodologies, and academic leadership.",
        "requirements": {"gpa": "Accredited BSN with 3.0+ GPA and unencumbered active RN license", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Nursing education philosophy statement", "references": "Two professional references"},
        "source": "https://www.stkate.edu/academics/academic-programs/grad-msn-ne"
      },
      {
        "title": "Bachelor of Science in Exercise and Sport Science",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "St. Kate's Women of Substance Merit Scholarships up to $26,000/year",
        "fee": "$0",
        "tuition": "$49,800/year",
        "desc": "Pre-health bachelor's curriculum covering kinesiology, exercise physiology, biomechanics, and clinical cardiac rehabilitation in modern sports science labs.",
        "requirements": {"gpa": "High school GPA 3.0+ with biology and chemistry", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Common Application personal statement", "references": "One teacher evaluation"},
        "source": "https://www.stkate.edu/academics/academic-programs/ug-exercise-science"
      },
      {
        "title": "Henriette Schmoll Health Justice & Women's Leadership Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,500 summer research stipend and clinical community health intervention allowance",
        "fee": "$0",
        "tuition": "Provided by the Henriette Schmoll School of Health Endowment",
        "desc": "Interdisciplinary fellowship conducting empirical research on maternal-infant health disparities among Somali and Hmong immigrant populations in the Twin Cities.",
        "requirements": {"gpa": "Enrolled graduate student in health sciences, social work, or public health with 3.2+ GPA", "ielts": "TOEFL 84+", "gre": "Exempt", "papers": "Health justice project proposal", "references": "Two health science faculty recommendations"},
        "source": "https://www.stkate.edu/academics/health-sciences/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Marcy Averill",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Averill serves as President of St. Catherine University, focusing on Catholic social teaching, women's educational empowerment, healthcare innovation, and health equity partnerships across Minnesota."
      },
      {
        "name": "Dr. Paula R. Palmer",
        "role": "Dean & Professor of the Henriette Schmoll School of Health",
        "department": "Henriette Schmoll School of Health",
        "subject": "social-sciences",
        "bio": "Dr. Palmer directs graduate and undergraduate health profession programs, researching community-based participatory health interventions and health disparities in underserved populations."
      },
      {
        "name": "Dr. Tarah Dykeman",
        "role": "Associate Professor & Director of Occupational Therapy",
        "department": "Department of Occupational Therapy",
        "subject": "biology",
        "bio": "Dr. Dykeman is a clinical occupational therapist researching pediatric neurodevelopmental therapies, sensory processing disorders, and community-based inclusive play environments."
      }
    ]
  },

  # 29. St. John's College (Row 967)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "St. John's College",
    "shortName": "St. John's College Santa Fe",
    "slug": "st-johns-college-santa-fe",
    "location": "Santa Fe, New Mexico, United States",
    "website": "https://www.sjc.edu",
    "sourceRow": 967,
    "stats": {"established": "1964", "students": "450+", "international": "11%", "faculty": "70+"},
    "heroSummary": "St. John's College in Santa Fe, New Mexico, is an extraordinary private liberal arts college nestled in the foothills of the Sangre de Cristo Mountains. Operating a sister campus in Annapolis, Maryland, St. John's is internationally renowned for its distinctive 'Great Books' curriculum. Without conventional majors, lecture halls, or textbooks, all students engage in rigorous, discussion-based Socratic seminars exploring foundational texts of philosophy, literature, mathematics, and science spanning 3,000 years.",
    "academicOverview": "At St. John's, professors are called 'tutors' and guide discussion rather than lecturing. The college offers a single undergraduate Bachelor of Arts in Liberal Arts, alongside the Graduate Institute's Master of Arts in Liberal Arts and Master of Arts in Eastern Classics (studying Sanskrit, classical Chinese, Daoism, Confucianism, and Buddhism). Its mountain campus features the Peterson Student Center, the Meem Library, and an astronomical observatory.",
    "researchAdmissions": "Undergraduate admissions are test-optional and holistic, evaluating an applicant's intellectual curiosity, reading habits, and capacity for thoughtful seminar discourse through analytical essays. Graduate Institute applications require an accredited bachelor's degree, intellectual essays reflecting on foundational texts, and academic references.",
    "opps": [
      {
        "title": "Bachelor of Arts in Liberal Arts - Great Books Curriculum",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design", "mathematics", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Generous need- and merit-based grants covering up to 100% of demonstrated tuition need, average grant $28,000/year",
        "fee": "$0",
        "tuition": "$38,500/year",
        "desc": "Four-year unspecialized Socratic curriculum reading foundational primary texts in literature, philosophy, theology, historical mathematics (Euclid, Newton, Lobachevsky), and physics laboratory practicums.",
        "requirements": {"gpa": "Exceptional reading comprehension, writing ability, and intellectual curiosity", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt", "papers": "Two analytical essays reflecting on books that shaped the applicant's thinking", "references": "Two teacher evaluations and counselor recommendation"},
        "source": "https://www.sjc.edu/santa-fe/undergraduate"
      },
      {
        "title": "Master of Arts in Liberal Arts (Graduate Institute)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Institute Merit Scholarships and Teacher Fellowship waivers up to $6,000",
        "fee": "$0",
        "tuition": "$9,800/term",
        "desc": "Intensive graduate degree structured around five thematic segments: Philosophy and Theology, Literature, Politics and Society, Mathematics and Natural Science, and History.",
        "requirements": {"gpa": "Bachelor's degree from an accredited institution with 3.0+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt", "papers": "Intellectual autobiography essay", "references": "Two academic or professional recommendations"},
        "source": "https://www.sjc.edu/academic-programs/graduate/liberal-arts"
      },
      {
        "title": "Master of Arts in Eastern Classics (Graduate Institute)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Eastern Classics Scholar Awards up to $8,000",
        "fee": "$0",
        "tuition": "$9,800/term",
        "desc": "One-year intensive master's examining foundational texts of India, China, and Japan (Vedas, Upanishads, Mahabharata, Confucius, Laozi, Zhuangzi, Tale of Genji), alongside classical Sanskrit or Chinese language study.",
        "requirements": {"gpa": "Bachelor's degree in any field with demonstrated writing capability", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt", "papers": "Statement on motivation to study Eastern philosophical and literary traditions", "references": "Two academic letters"},
        "source": "https://www.sjc.edu/academic-programs/graduate/eastern-classics"
      },
      {
        "title": "Graduate Certificate in Philosophy and Literature",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Part-time professional educator tuition subsidies",
        "fee": "$0",
        "tuition": "$4,900/term",
        "desc": "Two-segment graduate certificate immersing educators and professionals in classical epistemology, tragedy, epic poetry, and moral philosophy through Socratic seminars.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Short intellectual interest essay", "references": "One recommendation"},
        "source": "https://www.sjc.edu/academic-programs/graduate"
      },
      {
        "title": "Summer Classics Intensive Seminar Program",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Summer Seminar Community Grants up to $1,500",
        "fee": "$0",
        "tuition": "$1,450/week-long seminar",
        "desc": "Week-long intensive intellectual retreats on the Santa Fe campus discussing classic texts in philosophy, literature, art, and science with St. John's College tutors.",
        "requirements": {"gpa": "Open to all adults with an enthusiasm for reading and discussing classic works", "ielts": "Fluent English proficiency", "gre": "Exempt", "papers": "Registration statement", "references": "Not required"},
        "source": "https://www.sjc.edu/summer-classics"
      },
      {
        "title": "Sangre de Cristo Great Books Translation & Hermeneutics Fellowship",
        "type": "Fellowship",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$3,500 summer research stipend, Meem Library archival study room, and mountain cabin housing allowance",
        "fee": "$0",
        "tuition": "Endowed by St. John's College Graduate Institute",
        "desc": "Scholarly fellowship conducting original translation and hermeneutic commentary on ancient Greek, classical Latin, Sanskrit, or classical Chinese literary and philosophical manuscripts.",
        "requirements": {"gpa": "Enrolled graduate or upper-division student at St. John's with 3.3+ academic record", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Textual translation or philosophical commentary proposal", "references": "Two tutor endorsements"},
        "source": "https://www.sjc.edu/santa-fe/graduate/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "J. Walter Sterling",
        "role": "President, Santa Fe Campus & Tutor",
        "department": "Office of the President & Faculty of Tutors",
        "subject": "social-sciences",
        "bio": "J. Walter Sterling serves as President of St. John's College in Santa Fe, an alumnus and longtime tutor who has taught across the entire Great Books curriculum from Homer to Heisenberg."
      },
      {
        "name": "Dr. Matthew Davis",
        "role": "Dean & Tutor of St. John's College, Santa Fe",
        "department": "Office of the Dean",
        "subject": "social-sciences",
        "bio": "Dr. Davis oversees tutor appointments, seminar pedagogy, and academic curriculum standards, specializing in ancient Greek philosophy, Plato's dialogues, and classical political philosophy."
      },
      {
        "name": "Dr. Sarah Davis",
        "role": "Tutor in Philosophy, Mathematics, and Classical Greek",
        "department": "Faculty of Tutors",
        "subject": "social-sciences",
        "bio": "Dr. Davis leads undergraduate and Graduate Institute seminars in Hellenic philosophy, non-Euclidean geometries, and the translation of classical Sanskrit philosophical treatises."
      }
    ]
  },

  # 30. St. John's University Manhattan Campus (Row 968)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "St. John's University Manhattan Campus",
    "shortName": "St. John's Manhattan",
    "slug": "st-johns-university-manhattan-campus",
    "location": "New York, New York, United States",
    "website": "https://www.stjohns.edu",
    "sourceRow": 968,
    "stats": {"established": "1870", "students": "2,800+", "international": "9%", "faculty": "160+"},
    "heroSummary": "St. John's University Manhattan Campus is a premier academic center situated at Astor Place in the heart of Greenwich Village and the East Village in Manhattan, New York. Home to the internationally acclaimed Maurice R. Greenberg School of Risk Management, Insurance and Actuarial Science (part of the Peter J. Tobin College of Business), it is recognized worldwide as a preeminent hub for actuarial science, financial catastrophe modeling, and global risk management.",
    "academicOverview": "Located within walking distance of Wall Street, Silicon Alley, and multinational financial corporations, the Manhattan Campus features cutting-edge trading rooms, Bloomberg terminals, actuarial analytics suites, and the world-renowned Kathryn and Shelby Cullom Davis Library (housing the largest collection of risk management and insurance literature in the world).",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.6), mathematical proficiency, and optional SAT/ACT scores. Graduate programs in Actuarial Science, Enterprise Risk Management, and Finance require an accredited bachelor's degree with strong quantitative prerequisites (multivariable calculus, linear algebra, statistics), GMAT/GRE scores (waivers available for GPA > 3.25), and professional references.",
    "opps": [
      {
        "title": "Master of Science in Actuarial Science (Greenberg School)",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Greenberg School of Risk Management Endowed Fellowships covering up to 100% tuition and corporate actuarial apprentice stipends",
        "fee": "$70",
        "tuition": "$1,410/credit hour",
        "desc": "Society of Actuaries (SOA) Center of Actuarial Excellence (CAE) program preparing students for advanced professional SOA and CAS actuarial examinations, predictive loss modeling, and life contingencies.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and strong mathematics coursework (calculus I-III, linear algebra)", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE required (waiver for GPA > 3.25)", "papers": "Actuarial statement of purpose", "references": "Two quantitative academic or actuarial recommendations"},
        "source": "https://www.stjohns.edu/academics/programs/actuarial-science-master-science"
      },
      {
        "title": "Master of Science in Enterprise Risk Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Maurice R. Greenberg Merit Scholarships up to $15,000/year",
        "fee": "$70",
        "tuition": "$1,410/credit hour",
        "desc": "Executive-level graduate program analyzing financial risk exposure, cybersecurity liability, pandemic and climate catastrophe risk modeling, and operational enterprise resilience.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA from an accredited institution", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Risk management professional objectives essay", "references": "Two professional/academic recommendations"},
        "source": "https://www.stjohns.edu/academics/programs/enterprise-risk-management-master-science"
      },
      {
        "title": "Master of Business Administration (MBA) in Risk Management & Insurance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Tobin College of Business Graduate Assistantships covering tuition waivers",
        "fee": "$70",
        "tuition": "$1,410/credit hour",
        "desc": "AACSB-accredited specialized MBA curriculum integrating corporate financial strategy, underwriting analytics, reinsurance treaties, and global commercial insurance law.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE waived for GPA > 3.25", "papers": "Statement of professional purpose", "references": "Two recommendations"},
        "source": "https://www.stjohns.edu/academics/programs/risk-management-and-insurance-master-business-administration"
      },
      {
        "title": "Bachelor of Science in Actuarial Science",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Tobin Presidential and Dean's Merit Scholarships up to $25,000/year",
        "fee": "$0",
        "tuition": "$49,300/year",
        "desc": "Prestigious undergraduate curriculum preparing students to pass preliminary SOA/CAS exams (P and FM) before graduation, with direct internship placement across Manhattan insurance firms.",
        "requirements": {"gpa": "High school GPA 3.3+ with calculus readiness", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal essay", "references": "Two academic recommendations including math teacher"},
        "source": "https://www.stjohns.edu/academics/programs/actuarial-science-bachelor-science"
      },
      {
        "title": "Master of Science in Finance & Quantitative Investment Analysis",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Wall Street Finance Fellowships up to $10,000",
        "fee": "$70",
        "tuition": "$1,410/credit hour",
        "desc": "STEM-designated graduate degree covering algorithmic trading, portfolio optimization, derivatives pricing, and financial econometrics utilizing on-campus Bloomberg terminals.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in finance, economics, or STEM", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Finance career essay", "references": "Two professional letters"},
        "source": "https://www.stjohns.edu/academics/programs/finance-master-science"
      },
      {
        "title": "Wall Street Financial Markets & Catastrophe Risk Modeling Fellowship",
        "type": "Fellowship",
        "subject": "mathematics",
        "subjects": ["mathematics", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$5,000 summer research stipend, Bloomberg Terminal analytical license, and corporate mentor pairing",
        "fee": "$0",
        "tuition": "Endowed by the Maurice R. Greenberg School of Risk Management",
        "desc": "Advanced research fellowship evaluating algorithmic catastrophe risk models for hurricane storm surges, cyber warfare insurance exposure, and climate-induced financial systemic risks.",
        "requirements": {"gpa": "Enrolled graduate or upper-division undergraduate student in actuarial science, risk management, or finance with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Financial risk research project proposal", "references": "Two finance or actuarial faculty letters"},
        "source": "https://www.stjohns.edu/academics/schools/peter-j-tobin-college-business/greenberg-school/research"
      }
    ],
    "researchers": [
      {
        "name": "Father Brian J. Shanley, O.P.",
        "role": "President & Philosophical Theologian",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Father Shanley serves as the 18th President of St. John's University, an accomplished Dominican priest and philosopher specializing in medieval philosophy, Saint Thomas Aquinas, and Catholic higher education leadership."
      },
      {
        "name": "Dr. Mark J. Browne",
        "role": "Chair & Professor of Risk Management and Insurance",
        "department": "Maurice R. Greenberg School of Risk Management",
        "subject": "social-sciences",
        "bio": "Dr. Browne is an internationally recognized expert in insurance economics, researching automobile insurance market regulation, workers' compensation loss models, and healthcare financial liability."
      },
      {
        "name": "Dr. Nicos A. Scordis",
        "role": "John R. Cox/ACE Ltd. Endowed Chair & Professor of Risk Management",
        "department": "Maurice R. Greenberg School of Risk Management",
        "subject": "social-sciences",
        "bio": "Dr. Scordis investigates enterprise risk management governance, multinational risk financing, corporate value creation through risk control, and captive reinsurance structures."
      }
    ]
  }
]
