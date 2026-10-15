# scripts/make_b65_p1_chunk2.py
# Batch 65 Part 1 Chunk 2: Universities 9 to 15

chunk2 = [
  # 9. South Dakota State University College of Nursing - Rapid City (Row 947)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "South Dakota State University College of Nursing - Rapid City",
    "shortName": "SDSU Nursing Rapid City",
    "slug": "sdsu-college-of-nursing-rapid-city",
    "location": "Rapid City, South Dakota, United States",
    "website": "https://www.sdstate.edu/nursing",
    "sourceRow": 947,
    "stats": {"established": "1935", "students": "1,200+", "international": "2%", "faculty": "80+"},
    "heroSummary": "The South Dakota State University (SDSU) College of Nursing West River Center in Rapid City is a premier regional healthcare education and clinical simulation hub. Serving western South Dakota, the Black Hills, and neighboring Native American tribal nations, it prepares registered nurses, nurse practitioners, and nursing leaders dedicated to rural and indigenous healthcare excellence.",
    "academicOverview": "Operating in collaboration with Monument Health Rapid City Hospital and regional Indian Health Service (IHS) facilities, the Rapid City site features modern high-fidelity simulation labs, standardized patient suites, and telemedicine training modules. It offers accelerated BSN tracks, Master of Science in Nursing programs, and clinical Doctor of Nursing Practice (DNP) degrees.",
    "researchAdmissions": "Undergraduate BSN applicants must complete prerequisite natural and behavioral science coursework with a minimum 3.0 cumulative GPA and acceptable TEAS examination scores. Graduate DNP and MSN programs require an active, unencumbered RN license, clinical nursing practice experience, professional references, and a clinical practice goal statement.",
    "opps": [
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "HRSA Advanced Nursing Education Workforce (ANEW) grants providing $25,000 annual stipends for rural practice",
        "fee": "$35",
        "tuition": "$515/credit hour",
        "desc": "Practice-focused terminal doctorate preparing advanced practice registered nurses to deliver primary care in rural clinics, tribal health facilities, and regional healthcare centers throughout the Great Plains.",
        "requirements": {"gpa": "3.0+ BSN or MSN GPA, unencumbered RN license, 1,000 hours clinical experience", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "Exempt", "papers": "Clinical practice statement and leadership portfolio", "references": "Three professional references including nursing supervisor"},
        "source": "https://www.sdstate.edu/nursing/doctor-nursing-practice-dnp"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Psychiatric Mental Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Federal Behavioral Health Workforce Education and Training (BHWET) stipends up to $28,000",
        "fee": "$35",
        "tuition": "$515/credit hour",
        "desc": "Specialized clinical doctorate training psychiatric nurse practitioners to diagnose, prescribe psychopharmacology, and deliver psychotherapy across lifespan populations with high rural behavioral health needs.",
        "requirements": {"gpa": "3.0+ undergraduate GPA, active RN license", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "Exempt", "papers": "Psychiatric clinical philosophy statement", "references": "Three professional letters"},
        "source": "https://www.sdstate.edu/nursing/psychiatric-mental-health-nurse-practitioner"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Accelerated Option",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Monument Health Nursing Scholar Awards covering up to 50% tuition in exchange for regional practice commitments",
        "fee": "$35",
        "tuition": "$9,800/year in-state, $13,200/year out-of-state",
        "desc": "Intensive 12-month accelerated bachelor's degree for individuals holding a non-nursing bachelor's degree, delivering 800+ hours of clinical practicums and high-fidelity simulation in Rapid City.",
        "requirements": {"gpa": "Completed bachelor's degree with 3.0+ prerequisite science GPA (anatomy, physiology, microbiology)", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Accelerated nursing goal essay and TEAS score", "references": "Two professional/academic recommendations"},
        "source": "https://www.sdstate.edu/nursing/accelerated-bsn"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Nurse Administrator Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate nursing tuition waivers and healthcare system tuition reimbursement",
        "fee": "$35",
        "tuition": "$515/credit hour",
        "desc": "Online and hybrid master's program preparing nurse leaders in health informatics, healthcare finance, clinical quality improvement, and organizational systems leadership.",
        "requirements": {"gpa": "Accredited BSN with 3.0+ GPA and active RN license", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Executive leadership vision statement", "references": "Two supervisory recommendations"},
        "source": "https://www.sdstate.edu/nursing/msn-nurse-administrator"
      },
      {
        "title": "Post-Graduate Certificate in Clinical Nursing Education & Simulation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Nurse Faculty Loan Program (NFLP) with up to 85% loan cancellation upon teaching",
        "fee": "$35",
        "tuition": "$515/credit hour",
        "desc": "Targeted certification equipping master's- and doctorally-prepared nurses with advanced pedagogies, clinical evaluation methods, and virtual simulation design to address acute nursing faculty shortages.",
        "requirements": {"gpa": "Master's degree in nursing (MSN) or DNP from an accredited institution", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Teaching philosophy statement", "references": "Two professional references"},
        "source": "https://www.sdstate.edu/nursing/nursing-education-certificate"
      },
      {
        "title": "West River Rural Health Disparities & Tribal Healthcare Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 clinical research stipend and rural clinic housing reimbursement",
        "fee": "$0",
        "tuition": "Funded through SDSU College of Nursing Rural Health Initiative",
        "desc": "Clinical and translational research fellowship studying diabetes management protocols, maternal-infant health interventions, and telehealth efficacy in remote West River South Dakota communities.",
        "requirements": {"gpa": "Enrolled SDSU graduate nursing student in good standing", "ielts": "TOEFL 84+", "gre": "Exempt", "papers": "Rural health clinical inquiry proposal", "references": "Faculty advisor endorsement"},
        "source": "https://www.sdstate.edu/nursing/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mary Anne Krogh",
        "role": "Dean & Professor of Nursing",
        "department": "College of Nursing",
        "subject": "biology",
        "bio": "Dr. Krogh is a Fellow of the American Association of Nurse Anesthesiology, leading statewide nursing expansion, rural health disparities research, and evidence-based clinical simulation training."
      },
      {
        "name": "Dr. Robin Arends",
        "role": "Associate Professor & Director of Graduate Nursing Programs",
        "department": "Department of Graduate Nursing",
        "subject": "biology",
        "bio": "Dr. Arends is a practicing family nurse practitioner and certified nurse educator researching rural primary care access, advanced practice nursing regulatory policy, and interprofessional clinical education."
      },
      {
        "name": "Dr. Heidi Mennenga",
        "role": "Associate Dean for Academic Programs & Simulation Researcher",
        "department": "College of Nursing",
        "subject": "biology",
        "bio": "Dr. Mennenga is an internationally recognized scholar on team-based learning (TBL) in nursing pedagogy, developing validated assessment tools for psychometric evaluation in healthcare education."
      }
    ]
  },

  # 10. South University, Columbia (Row 948)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "South University, Columbia",
    "shortName": "South University Columbia",
    "slug": "south-university-columbia",
    "location": "Columbia, South Carolina, United States",
    "website": "https://www.southuniversity.edu/columbia",
    "sourceRow": 948,
    "stats": {"established": "1899", "students": "950+", "international": "1%", "faculty": "70+"},
    "heroSummary": "South University, Columbia is a private institution located in South Carolina's capital city, dedicated to career-focused education in healthcare, business, and behavioral sciences. It is widely recognized across the Midlands for its flagship Master of Science in Physician Assistant Studies program, accredited nursing curriculum, and modern physical therapy assistant training facilities.",
    "academicOverview": "South University, Columbia features modern clinical examination labs, surgical simulation suites, high-fidelity anatomical models, and smart lecture theaters. It collaborates closely with Prisma Health, Lexington Medical Center, and regional healthcare providers to deliver rigorous clinical rotations and didactic healthcare instruction.",
    "researchAdmissions": "Undergraduate programs require high school graduation or GED equivalent with entrance placement assessments. The Master of Science in Physician Assistant (PA) program is highly selective, requiring an accredited bachelor's degree, prerequisite natural sciences with lab coursework, competitive GRE scores, clinical patient care hours, and CASPA submission.",
    "opps": [
      {
        "title": "Master of Science in Physician Assistant Studies (MSPAS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-01",
        "deadlineText": "October 1, 2027",
        "funding": "Institutional Healthcare Leadership Grants and Federal Direct PLUS loan support",
        "fee": "$75",
        "tuition": "$33,500/year",
        "desc": "ARC-PA-accredited 27-month intensive master's program comprising 12 months of foundational medical science instruction and 15 months of clinical rotations in family medicine, surgery, and emergency medicine.",
        "requirements": {"gpa": "3.0+ cumulative and prerequisite science GPA, 500+ direct patient contact hours", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores required", "papers": "CASPA personal essay", "references": "Three letters of recommendation including practicing PA or MD"},
        "source": "https://www.southuniversity.edu/columbia/programs/physician-assistant-master-of-science-mspas"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "South University Merit Grants and Midlands Hospital Tuition Assistance",
        "fee": "$50",
        "tuition": "$18,200/year",
        "desc": "CCNE-accredited pre-licensure bachelor's degree preparing graduates for the NCLEX-RN through integrated clinical rotations at Midlands hospital networks and outpatient care clinics.",
        "requirements": {"gpa": "High school diploma with 2.75+ prerequisite GPA in biology and chemistry", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two academic or employer recommendations"},
        "source": "https://www.southuniversity.edu/columbia/programs/nursing-bachelor-of-science-bsn"
      },
      {
        "title": "Associate of Science in Physical Therapist Assistant (PTA)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Career Opportunity Scholarships up to $3,000",
        "fee": "$50",
        "tuition": "$16,500/year",
        "desc": "CAPTE-accredited associate degree developing clinical skills in therapeutic exercise, gait training, electrotherapy, and orthopedic rehabilitation under the direction of licensed physical therapists.",
        "requirements": {"gpa": "High school diploma with 2.5+ prerequisite GPA, 20+ observation hours", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "PTA program essay", "references": "Two recommendations"},
        "source": "https://www.southuniversity.edu/columbia/programs/physical-therapist-assistant-associate-of-science-as"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Graduate Counseling Fellowships up to $4,000/year",
        "fee": "$50",
        "tuition": "$585/credit hour",
        "desc": "CACREP-accredited 60-semester-credit program preparing students for state licensure (LPC) through coursework in psychopathology, counseling techniques, and 700 hours of supervised practicum/internship.",
        "requirements": {"gpa": "Bachelor's degree with 2.7+ GPA from an accredited institution", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Counseling admissions essay and background disclosure", "references": "Two professional/academic recommendations"},
        "source": "https://www.southuniversity.edu/columbia/programs/clinical-mental-health-counseling-master-of-science-ms"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Corporate Partner Tuition Discounts and Alumni Merit Grants",
        "fee": "$50",
        "tuition": "$610/credit hour",
        "desc": "Online and hybrid management degree delivering advanced instruction in healthcare policy, clinical economics, managerial finance, and healthcare informatics.",
        "requirements": {"gpa": "Bachelor's degree with 2.7+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Statement of business leadership goals", "references": "Two professional references"},
        "source": "https://www.southuniversity.edu/columbia/programs/business-administration-master-of-business-administration-mba"
      },
      {
        "title": "Midlands Community Health & Clinical Simulation Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$3,000 project stipend and specialized clinical skills workshop sponsorship",
        "fee": "$0",
        "tuition": "Funded through South University Columbia Health Sciences Fund",
        "desc": "Clinical education fellowship focusing on objective structured clinical examination (OSCE) design, trauma simulation protocols, and patient communication in underserved urban clinics.",
        "requirements": {"gpa": "Enrolled student in PA, nursing, or PTA with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Clinical simulation proposal", "references": "One clinical faculty recommendation"},
        "source": "https://www.southuniversity.edu/columbia/academics"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Charles Gibbons",
        "role": "Campus Director & Dean of Academic Affairs",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Gibbons directs academic programming and clinical hospital partnerships at South University, Columbia, focusing on higher education administration and healthcare workforce development."
      },
      {
        "name": "Dr. Lisa Cooper",
        "role": "Program Director & Assistant Professor of Physician Assistant Studies",
        "department": "Department of Physician Assistant Studies",
        "subject": "biology",
        "bio": "Dr. Cooper oversees ARC-PA accreditation and clinical rotation placement, with research interests in emergency medicine diagnostics and physician assistant didactic simulation."
      },
      {
        "name": "Dr. Teresa Campbell",
        "role": "Department Chair of Nursing",
        "department": "College of Nursing and Public Health",
        "subject": "biology",
        "bio": "Dr. Campbell directs the BSN curriculum, investigating nurse retention in acute care settings, clinical pharmacology instruction, and NCLEX-RN mastery models."
      }
    ]
  },

  # 11. Southeast Missouri State University (Row 949)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southeast Missouri State University",
    "shortName": "SEMO",
    "slug": "southeast-missouri-state-university-cape-girardeau",
    "location": "Cape Girardeau, Missouri, United States",
    "website": "https://www.semo.edu",
    "sourceRow": 949,
    "stats": {"established": "1873", "students": "9,900+", "international": "7%", "faculty": "440+"},
    "heroSummary": "Southeast Missouri State University (SEMO) is a comprehensive public university overlooking the Mississippi River in Cape Girardeau, Missouri. Celebrating over 150 years of academic excellence, SEMO is recognized nationwide for its pioneering cybersecurity program (designated an NSA Center of Academic Excellence), unmanned aircraft systems (drones), accredited business school, and premier performing arts conservatories at the River Campus.",
    "academicOverview": "SEMO encompasses the College of Science, Technology, Engineering and Mathematics, the Harrison College of Business and Computing, the College of Humanities and Social Sciences, the College of Education, Health and Human Studies, and the Holland College of Arts and Media. It features cutting-edge cybersecurity cyber ranges, advanced manufacturing labs, and the 252-acre David M. Barton Agriculture Research Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.5), college prep coursework, and optional ACT/SAT scores. Graduate programs require an accredited bachelor's degree with a 2.75 minimum GPA (3.0 for computer science and cybersecurity), statement of purpose, and academic letters of reference.",
    "opps": [
      {
        "title": "Bachelor of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "National Science Foundation CyberCorps Scholarships for Service providing full tuition waiver and $27,000 annual stipends",
        "fee": "$30",
        "tuition": "$9,390/year in-state, $16,800/year out-of-state",
        "desc": "ABET-accredited and NSA-designated CAE-CD program featuring hands-on training in offensive penetration testing, defensive network operations, cloud security, and digital forensics in dedicated cyber labs.",
        "requirements": {"gpa": "High school GPA 3.0+ with strong math background", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "Exempt", "papers": "General application essay", "references": "One high school counselor or instructor evaluation"},
        "source": "https://www.semo.edu/academics/programs/cybersecurity.html"
      },
      {
        "title": "Master of Science in Technology Management - Industrial Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate assistantships offering full tuition remission and $10,500 academic year stipend",
        "fee": "$40",
        "tuition": "$410/credit hour in-state, $740/credit hour out-of-state",
        "desc": "ATMAE-accredited graduate degree designed for technical supervisors and engineers, focusing on Lean Six Sigma, total quality management, industrial robotics, and supply chain logistics.",
        "requirements": {"gpa": "Bachelor's degree in engineering, technology, or business with 2.75+ GPA", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "GRE optional", "papers": "Professional goals statement", "references": "Two recommendations"},
        "source": "https://www.semo.edu/academics/programs/technology-management-ms.html"
      },
      {
        "title": "Bachelor of Science in Unmanned Aircraft Systems (Drones)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Aviation STEM Merit Scholarships up to $4,000/year",
        "fee": "$30",
        "tuition": "$9,390/year in-state, $16,800/year out-of-state",
        "desc": "Comprehensive degree covering FAA Part 107 certification, autonomous flight programming, drone sensor integration, aerial thermography, and precision agriculture data analysis.",
        "requirements": {"gpa": "High school diploma with algebra and physics coursework", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://www.semo.edu/academics/programs/unmanned-aircraft-systems.html"
      },
      {
        "title": "Master of Science in Applied Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Departmental teaching assistantships covering tuition and providing monthly research stipends",
        "fee": "$40",
        "tuition": "$410/credit in-state, $740/credit out-of-state",
        "desc": "Advanced curriculum developing deep capabilities in distributed systems, artificial intelligence algorithms, mobile application development, and software engineering methodologies.",
        "requirements": {"gpa": "Bachelor's degree in computer science or related discipline with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "GRE required for applicants without US CS degrees", "papers": "Statement of purpose", "references": "Two academic recommendations"},
        "source": "https://www.semo.edu/academics/programs/applied-computer-science-ms.html"
      },
      {
        "title": "Bachelor of Science in Historic Preservation & Museum Studies",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Historic Preservation Endowment Awards and Missouri Humanities Grants",
        "fee": "$30",
        "tuition": "$9,390/year in-state, $16,800/year out-of-state",
        "desc": "One of only a few dedicated undergraduate historic preservation degrees in the US, providing practical training in architectural documentation, archival management, and museum curation.",
        "requirements": {"gpa": "High school diploma with college-prep humanities curriculum", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.semo.edu/academics/programs/historic-preservation.html"
      },
      {
        "title": "Mississippi River Basin Hydro-Ecology & Environmental Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,200 summer stipend and ecological field research boat equipment grant",
        "fee": "$0",
        "tuition": "Provided by SEMO Department of Biology Research Fund",
        "desc": "Undergraduate and graduate research fellowship conducting limnological sampling, invasive carp monitoring, and floodplain wetland restoration along the middle Mississippi River.",
        "requirements": {"gpa": "Enrolled student in biology, environmental science, or agriculture with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "River ecology project abstract", "references": "Biology faculty endorsement"},
        "source": "https://www.semo.edu/academics/departments/biology/research.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Carlos Vargas",
        "role": "President & Professor of Physics",
        "department": "Office of the President",
        "subject": "physics",
        "bio": "Dr. Vargas serves as the 18th President of Southeast Missouri State University, with an academic background in physics, optics, and higher education administrative policy."
      },
      {
        "name": "Dr. Suhair Amer",
        "role": "Chair & Professor of Computer Science & Cybersecurity",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Amer oversees NSA-designated CAE-CD cybersecurity education, conducting research on software quality engineering, software architecture security metrics, and computer science pedagogy."
      },
      {
        "name": "Dr. Joseph Pujol",
        "role": "Dean & Professor of Health, Human Performance and Recreation",
        "department": "College of Education, Health and Human Studies",
        "subject": "biology",
        "bio": "Dr. Pujol is a fellow of the American College of Sports Medicine, investigating human performance physiology, body composition assessment methods, and cardiovascular exercise stress responses."
      }
    ]
  },

  # 12. Southeast Technical College (Row 950)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southeast Technical College",
    "shortName": "Southeast Tech",
    "slug": "southeast-technical-college-sioux-falls",
    "location": "Sioux Falls, South Dakota, United States",
    "website": "https://www.southeasttech.edu",
    "sourceRow": 950,
    "stats": {"established": "1968", "students": "2,600+", "international": "2%", "faculty": "140+"},
    "heroSummary": "Southeast Technical College (Southeast Tech) is an accredited public technical college in Sioux Falls, South Dakota's largest commercial and medical center. Southeast Tech provides workforce-aligned education across 65+ associate degrees, diplomas, and technical certificates, serving as a vital training engine for the regional healthcare, advanced manufacturing, and IT industries.",
    "academicOverview": "Southeast Tech features specialized training facilities including the Sullivan Health Science Center, the Scarbrough Center for Construction Technology, modern diesel and automotive bays, and industrial mechatronics automation cells. The college maintains a remarkable 97%+ graduate career placement rate.",
    "researchAdmissions": "Southeast Tech operates open admissions for students with a high school diploma or GED equivalent. Technical and healthcare programs (such as Diagnostic Medical Sonography, Registered Nursing, and Surgical Technology) require specialized prerequisite criteria, background checks, and placement testing.",
    "opps": [
      {
        "title": "Associate of Applied Science in Diagnostic Medical Sonography",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Build Dakota Full-Ride Scholarships covering 100% of tuition, fees, and books for regional practice",
        "fee": "$0",
        "tuition": "$5,850/year (fully covered by Build Dakota for qualifying recipients)",
        "desc": "CAAHEP-accredited clinical ultrasound curriculum providing rigorous training in abdominal, obstetrical, gynecological, and vascular sonographic imaging with clinical rotations at Sanford and Avera Health systems.",
        "requirements": {"gpa": "2.8+ prerequisite science GPA (college algebra, physics, anatomy, physiology)", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Sonography applicant questionnaire", "references": "Two professional/academic references"},
        "source": "https://www.southeasttech.edu/programs/healthcare/diagnostic-medical-sonography.php"
      },
      {
        "title": "Associate of Applied Science in Civil Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-31",
        "deadlineText": "March 31, 2027",
        "funding": "Build Dakota Full-Ride Scholarship eligible and industry-sponsored tool stipends",
        "fee": "$0",
        "tuition": "$5,850/year in-state/out-of-state identical rate",
        "desc": "Hands-on engineering technician degree covering CAD, GPS surveying, materials testing (asphalt, concrete, soils), structural drafting, and municipal infrastructure inspection.",
        "requirements": {"gpa": "High school diploma with algebra and geometry proficiency", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.southeasttech.edu/programs/engineering/civil-engineering-technology.php"
      },
      {
        "title": "Associate of Applied Science in Software Support & Cloud Administration",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "South Dakota Workforce Development Scholarships up to $3,000",
        "fee": "$0",
        "tuition": "$5,850/year",
        "desc": "Career-oriented computing degree mastering cloud infrastructure (AWS/Azure), Linux administration, network virtualization, database support, and automated scripting.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.southeasttech.edu/programs/information-technology/software-support.php"
      },
      {
        "title": "Associate of Applied Science in Registered Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Sanford and Avera Health sponsorship programs with tuition repayment",
        "fee": "$0",
        "tuition": "$6,100/year",
        "desc": "ACEN-accredited two-year RN program preparing graduates for the NCLEX-RN, featuring direct clinical bedside nursing practicums across Sioux Falls trauma and regional medical centers.",
        "requirements": {"gpa": "2.7+ prerequisite GPA in anatomy, physiology, and microbiology; TEAS score required", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Nursing application essay", "references": "Two recommendations"},
        "source": "https://www.southeasttech.edu/programs/healthcare/registered-nursing.php"
      },
      {
        "title": "Associate of Applied Science in Mechatronics & Industrial Automation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-31",
        "deadlineText": "March 31, 2027",
        "funding": "Build Dakota Full-Ride Scholarship eligible (covers 100% tuition, fees, laptop, and tools)",
        "fee": "$0",
        "tuition": "$5,850/year (or full ride via Build Dakota)",
        "desc": "Comprehensive technical degree training automation technicians in programmable logic controllers (PLCs), industrial robotics, fluid power systems, motor drives, and SCADA monitoring.",
        "requirements": {"gpa": "High school diploma with mechanical aptitude and algebra", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.southeasttech.edu/programs/engineering/mechatronics.php"
      },
      {
        "title": "Sioux Falls Regional Healthcare & Precision Manufacturing Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$3,500 industry-sponsored project stipend and corporate laboratory placement",
        "fee": "$0",
        "tuition": "Provided through Southeast Tech Industry Partnership Board",
        "desc": "Applied student fellowship working with regional medical device manufacturers and health networks to design automated sterilization devices and clinical telemetry hardware.",
        "requirements": {"gpa": "Enrolled in mechatronics, engineering, or health science with 3.2+ GPA", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Industry project statement", "references": "One technical faculty endorsement"},
        "source": "https://www.southeasttech.edu/business-industry/index.php"
      }
    ],
    "researchers": [
      {
        "name": "Robert Griggs",
        "role": "President & Chief Executive Officer",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Robert Griggs leads Southeast Technical College, spearheading Build Dakota full-ride scholarship integration, corporate industry apprenticeships, and regional workforce development expansions."
      },
      {
        "name": "Dr. Benjamin Valdez",
        "role": "Vice President of Academic Affairs",
        "department": "Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Valdez oversees curriculum rigor, programmatic accreditation, and community college articulation pathways across all engineering, health, and IT technical disciplines."
      },
      {
        "name": "Prof. Marcella Prokop",
        "role": "Dean of Health Sciences",
        "department": "Sullivan Health Science Center",
        "subject": "biology",
        "bio": "Prof. Prokop directs allied health and nursing instructional programs, researching clinical simulation best practices, interprofessional healthcare ethics, and sonography accreditation."
      }
    ]
  },

  # 13. Southeastern Illinois College (Row 951)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southeastern Illinois College",
    "shortName": "SIC",
    "slug": "southeastern-illinois-college-harrisburg",
    "location": "Harrisburg, Illinois, United States",
    "website": "https://www.sic.edu",
    "sourceRow": 951,
    "stats": {"established": "1960", "students": "1,800+", "international": "1%", "faculty": "90+"},
    "heroSummary": "Southeastern Illinois College (SIC) is an accredited public community college located in Harrisburg, Illinois, nestled near the scenic Shawnee National Forest. Renowned across the nation for its perennially top-ranked Speech and Debate (Forensics) team, SIC is an educational anchor for southern Illinois, offering robust programs in biofuels, coal mining technology, nursing, welding, and university transfer degrees.",
    "academicOverview": "SIC's 148-acre campus features the George T. Dennis Visual and Performing Arts Center, the Ella Elizabeth Hise Museum of Regional Art, the modern Diesel and Welding Training Labs, and environmental research stations adjacent to the Shawnee National Forest. The college partners with major universities for dual-enrollment and seamless baccalaureate completion.",
    "researchAdmissions": "Southeastern Illinois College maintains an open admissions policy for secondary school graduates and high school equivalency (GED) holders. Specialized programs in nursing and mining technology require separate application reviews, entrance assessments, and clinical background verification.",
    "opps": [
      {
        "title": "Associate of Applied Science in Biofuels Production & Agronomy",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment", "chemistry"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Illinois Clean Energy Community Foundation Grants and agricultural workforce stipends up to $3,000",
        "fee": "$0",
        "tuition": "$3,900/year in-district, $7,800/year out-of-district",
        "desc": "Hands-on associate degree training process technicians in ethanol and biodiesel fermentation, agricultural biomass conversion, distillation monitoring, and industrial chemical safety.",
        "requirements": {"gpa": "High school diploma with foundational biology and chemistry coursework", "ielts": "TOEFL 65+ or IELTS 5.5", "gre": "Exempt", "papers": "General admissions application", "references": "Not required"},
        "source": "https://www.sic.edu/academics/programs-of-study/biofuels-production"
      },
      {
        "title": "Associate of Applied Science in Welding Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "SIC Foundation Technical Scholarships and industry apprenticeship tool grants",
        "fee": "$0",
        "tuition": "$4,200/year in-district, $8,400/year out-of-district",
        "desc": "Comprehensive AWS-certified training covering SMAW, GMAW, FCAW, GTAW, heavy structural steel fabrication, pipe fitting, and metallurgical testing.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 60+", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.sic.edu/academics/programs-of-study/welding-technology"
      },
      {
        "title": "Associate of Science in Forestry and Wildlife Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Shawnee Conservation Scholar Awards up to $2,000/year",
        "fee": "$0",
        "tuition": "$3,900/year in-district, $7,800/year out-of-district",
        "desc": "University transfer program utilizing the nearby 280,000-acre Shawnee National Forest as an outdoor classroom for dendrology, wildlife habitat assessment, and soil conservation.",
        "requirements": {"gpa": "High school diploma with placement in College Algebra", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.sic.edu/academics/programs-of-study/forestry-and-wildlife-management"
      },
      {
        "title": "Associate of Applied Science in Associate Degree Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Southern Illinois Healthcare (SIH) Nursing Scholarships with employment commitments",
        "fee": "$25",
        "tuition": "$4,600/year in-district, $8,900/year out-of-district",
        "desc": "ACEN-accredited two-year RN degree delivering high-fidelity clinical simulation and bedside acute care rotations at Harrisburg Medical Center and regional hospitals.",
        "requirements": {"gpa": "2.7+ prerequisite GPA in anatomy, physiology, and microbiology, acceptable TEAS exam score", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Nursing department application essay", "references": "Two professional/academic recommendations"},
        "source": "https://www.sic.edu/academics/programs-of-study/nursing"
      },
      {
        "title": "Associate of Arts in Communication & Forensic Speech",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Full-tuition Forensics Speech and Debate Performance Scholarships for team competitors",
        "fee": "$0",
        "tuition": "$3,900/year (fully covered for recruited forensics debaters)",
        "desc": "Nationally celebrated collegiate forensics and public communication program with a multi-decade legacy of national speech championships, training students in persuasive debate, oral interpretation, and rhetoric.",
        "requirements": {"gpa": "High school diploma with audition/interview for competitive forensics team entry", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Forensics speech audition recording or live read", "references": "Forensics coach or teacher recommendation"},
        "source": "https://www.sic.edu/student-life/forensics-speech-team"
      },
      {
        "title": "Shawnee Forest Basin Ecology & Energy Transition Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$2,800 summer project stipend and environmental monitoring sensor kit",
        "fee": "$0",
        "tuition": "Supported through SIC Natural Sciences Department",
        "desc": "Applied student fellowship researching watershed health, reclamation of former surface coal mining lands, and native hardwood forest regeneration in the Saline River basin.",
        "requirements": {"gpa": "Enrolled student in biology, forestry, or agriculture with 3.0+ GPA", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Project proposal outline", "references": "One science faculty letter"},
        "source": "https://www.sic.edu/academics/departments/math-science"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jonah Rice",
        "role": "President & Professor of Speech Communication",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Rice serves as President of Southeastern Illinois College and is a former national championship collegiate speech coach, researching rhetoric, communications pedagogy, and rural college leadership."
      },
      {
        "name": "Dr. Karen Weiss",
        "role": "Vice President of Academic Affairs",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Weiss oversees instructional delivery, career and technical education curricula, and dual-credit university partnerships across southern Illinois."
      },
      {
        "name": "Prof. Jason Fitzgerald",
        "role": "Chair & Instructor of Biology and Natural Resources",
        "department": "Department of Math and Science",
        "subject": "environment",
        "bio": "Prof. Fitzgerald directs ecological fieldwork, researching Shawnee National Forest biodiversity, aquatic macroinvertebrates, and conservation ecology in the Illinois Ozarks."
      }
    ]
  },

  # 14. Southeastern Louisiana University (Row 952)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southeastern Louisiana University",
    "shortName": "Southeastern Louisiana",
    "slug": "southeastern-louisiana-university-hammond",
    "location": "Hammond, Louisiana, United States",
    "website": "https://www.southeastern.edu",
    "sourceRow": 952,
    "stats": {"established": "1925", "students": "13,500+", "international": "3%", "faculty": "600+"},
    "heroSummary": "Southeastern Louisiana University is a dynamic public university situated in Hammond, Louisiana, at the crossroads of Interstates 12 and 55 between Baton Rouge and New Orleans. As the third-largest university in Louisiana, Southeastern is renowned for its ABET-accredited engineering technology programs, top-tier school of nursing, innovative supply chain management curriculum, and the Turtle Cove Environmental Research Station located in the Lake Pontchartrain estuary.",
    "academicOverview": "Southeastern comprises five academic colleges: Science and Technology, Nursing and Health Sciences, Business, Arts, Humanities and Social Sciences, and Education. Highlights include the Kinesiology and Health Studies Building, modern robotics and CNC manufacturing labs, and Turtle Cove's 2,000-acre marshland research laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 2.35) and ACT/SAT scores. Graduate admissions require an accredited baccalaureate degree with a minimum 2.75 GPA (or 3.0 on the last 60 credit hours), GRE/GMAT scores (program-dependent), statement of purpose, and academic letters of recommendation.",
    "opps": [
      {
        "title": "Master of Science in Integrated Science and Technology (ISAT)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate teaching and research assistantships covering full tuition and providing $12,000 annual stipends",
        "fee": "$40",
        "tuition": "$8,950/year in-state, $21,400/year out-of-state",
        "desc": "Interdisciplinary graduate degree integrating applied physics, computer science, industrial technology, and environmental biotechnology to solve complex technical problems for Gulf Coast industries.",
        "requirements": {"gpa": "Bachelor's degree in STEM discipline with 2.75+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.southeastern.edu/acad_research/programs/isat/index.html"
      },
      {
        "title": "Bachelor of Science in Industrial and Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Southeastern Honors Merit Scholarships and Valero Industrial Endowed Awards",
        "fee": "$20",
        "tuition": "$9,320/year in-state, $22,050/year out-of-state",
        "desc": "ABET-accredited curriculum offering concentrations in mechanical engineering technology, automated systems, electrical engineering technology, and supervision.",
        "requirements": {"gpa": "High school core GPA 2.5+ with college algebra proficiency", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.southeastern.edu/acad_research/depts/iet/index.html"
      },
      {
        "title": "Master of Science in Biological Sciences - Wetland & Estuarine Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Louisiana Sea Grant and Turtle Cove Research Assistantships providing tuition waivers + $14,000 stipends",
        "fee": "$40",
        "tuition": "Covered by assistantships",
        "desc": "Field-intensive research master's degree investigating coastal wetland restoration, hypoxic dead zones, mangrove encroachment, and fisheries conservation in the Lake Pontchartrain Basin.",
        "requirements": {"gpa": "Bachelor's degree in biological sciences with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE recommended", "papers": "Research proposal and agreement from faculty advisor", "references": "Three academic recommendations"},
        "source": "https://www.southeastern.edu/acad_research/depts/bio/grad_prog/index.html"
      },
      {
        "title": "Bachelor of Science in Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "College of Business Dean's Excellence Awards up to $5,000",
        "fee": "$20",
        "tuition": "$9,320/year in-state, $22,050/year out-of-state",
        "desc": "AACSB-accredited degree leveraging southeastern Louisiana's immense maritime ports and rail corridors to teach strategic procurement, enterprise logistics, inventory control, and SAP ERP software.",
        "requirements": {"gpa": "High school core GPA 2.5+", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://www.southeastern.edu/acad_research/colleges/bus/programs/scm/index.html"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Louisiana State Healthcare Traineeships and rural nursing preceptor grants",
        "fee": "$40",
        "tuition": "$9,800/year in-state, $22,500/year out-of-state",
        "desc": "CCNE-accredited graduate curriculum through the Intercollegiate Consortium for a Master of Science in Nursing (ICMSN), preparing nurse practitioners for independent diagnostic and clinical management in primary care.",
        "requirements": {"gpa": "BSN from accredited program with 3.0+ GPA and 1+ year active RN clinical experience", "ielts": "TOEFL 80+", "gre": "GRE optional if GPA > 3.2", "papers": "Statement of clinical intent", "references": "Three clinical/academic references"},
        "source": "https://www.southeastern.edu/acad_research/colleges/nurs_hs/programs/msn/index.html"
      },
      {
        "title": "Turtle Cove Wetland Estuary & Coastal Conservation Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,500 summer stipend, wetland marsh field boat access, and research equipment allowance",
        "fee": "$0",
        "tuition": "Funded by Turtle Cove Environmental Research Station Endowment",
        "desc": "Coastal conservation research fellowship conducting field monitoring of cypress-tupelo swamp reforestation, saltwater intrusion barriers, and microplastic pollution in coastal Louisiana marshes.",
        "requirements": {"gpa": "Undergraduate or graduate student in biological sciences, chemistry, or environmental engineering with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Coastal wetland research proposal", "references": "Faculty research mentor endorsement"},
        "source": "https://www.southeastern.edu/acad_research/programs/turtle_cove/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. William S. Wainwright",
        "role": "President & Educational Scholar",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Wainwright is the 15th President of Southeastern Louisiana University, with over two decades of higher education leadership advancing workforce alignment, regional economic expansion, and university accessibility."
      },
      {
        "name": "Dr. Mohammad Saadeh",
        "role": "Department Head & Professor of Industrial and Engineering Technology",
        "department": "Department of Industrial and Engineering Technology",
        "subject": "engineering",
        "bio": "Dr. Saadeh conducts specialized research in robotics, mechatronic system controls, automated vibration damping, and smart manufacturing sensor systems."
      },
      {
        "name": "Dr. Robert Moreau",
        "role": "Manager & Research Scientist, Turtle Cove Environmental Research Station",
        "department": "Turtle Cove Environmental Research Station & Department of Biological Sciences",
        "subject": "environment",
        "bio": "Dr. Moreau is an authority on coastal Louisiana wetlands ecology, researching cypress swamp restoration, estuarine water quality dynamics, and environmental education outreach."
      }
    ]
  },

  # 15. Southeastern Oklahoma State University (Row 953)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southeastern Oklahoma State University",
    "shortName": "Southeastern Oklahoma State",
    "slug": "southeastern-oklahoma-state-university-durant",
    "location": "Durant, Oklahoma, United States",
    "website": "https://www.se.edu",
    "sourceRow": 953,
    "stats": {"established": "1909", "students": "5,300+", "international": "3%", "faculty": "210+"},
    "heroSummary": "Southeastern Oklahoma State University is a public regional university located in Durant, Oklahoma—the headquarters of the Choctaw Nation of Oklahoma. Known as 'The Campus of the Rising Sun', Southeastern is internationally renowned for its School of Aviation Sciences at Eaker Field, its vibrant Choctaw and Native American cultural partnerships, accredited business school, and premier teacher education programs.",
    "academicOverview": "Southeastern features the Aviation Sciences Institute (operating its own fleet of modern training aircraft and advanced flight simulators at Eaker Field), the John Massey School of Business, the School of Education and Behavioral Sciences, and the School of Arts and Sciences. It maintains strong academic ties to regional aerospace hubs in Oklahoma and North Texas.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.7) or ACT composite score (minimum 20). Aviation flight candidates must obtain an FAA First or Second Class Medical Certificate and TSA clearance. Graduate programs require an accredited bachelor's degree with a 2.75 minimum GPA, transcripts, and program-specific letters of intent.",
    "opps": [
      {
        "title": "Bachelor of Science in Aviation - Professional Pilot Option",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Aviation Sciences Endowed Scholarships and regional airline cadet tuition subsidies (Envoy, PSA, SkyWest)",
        "fee": "$20",
        "tuition": "$7,180/year in-state, $16,400/year out-of-state (flight fees separate)",
        "desc": "AABI-accredited professional pilot training program taking students from private pilot certification through commercial multi-engine instrument rating and certified flight instructor (CFI) at Eaker Field.",
        "requirements": {"gpa": "High school GPA 2.7+ and FAA First or Second Class Medical Certificate", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Aviation flight intent essay", "references": "Two character or academic references"},
        "source": "https://www.se.edu/aviation/bachelor-of-science-in-aviation"
      },
      {
        "title": "Master of Science in Aerospace Logistics & Aviation Administration",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Massey School of Business Graduate Assistantships covering tuition waivers",
        "fee": "$30",
        "tuition": "$325/credit in-state, $580/credit out-of-state",
        "desc": "Accelerated online and campus graduate degree focusing on aerospace supply chains, airport planning and operations, aviation safety management systems (SMS), and regulatory compliance.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA from an accredited college", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Career statement in aerospace administration", "references": "Two professional recommendations"},
        "source": "https://www.se.edu/academics/programs/aerospace-logistics-ms"
      },
      {
        "title": "Master of Business Administration (MBA) - Native American Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Choctaw Nation Higher Education Grants and John Massey Endowed Scholarships",
        "fee": "$30",
        "tuition": "$340/credit hour",
        "desc": "AACSB-accredited specialized MBA curriculum exploring tribal economic sovereignty, federal Indian law and gaming regulations, tribal enterprise governance, and organizational strategy.",
        "requirements": {"gpa": "Bachelor's degree with 2.5+ cumulative GPA", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "GMAT/GRE waived for GPA > 3.0", "papers": "Personal leadership essay", "references": "Two professional letters"},
        "source": "https://www.se.edu/academics/programs/mba-native-american-leadership"
      },
      {
        "title": "Bachelor of Science in Fisheries and Wildlife Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Oklahoma Wildlife Conservation Foundation Scholarships up to $3,000",
        "fee": "$20",
        "tuition": "$7,180/year in-state, $16,400/year out-of-state",
        "desc": "Practical degree preparing state and federal wildlife biologists, game wardens, and fisheries managers, featuring empirical field research at nearby Lake Texoma and Tishomingo National Wildlife Refuge.",
        "requirements": {"gpa": "High school diploma with biology and chemistry coursework", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.se.edu/academics/programs/fisheries-and-wildlife-management"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Behavioral Health Workforce Traineeship Grants",
        "fee": "$30",
        "tuition": "$325/credit in-state, $580/credit out-of-state",
        "desc": "CACREP-accredited 60-hour clinical master's degree preparing licensed professional counselors (LPC) to serve diverse populations in rural community mental health centers and tribal clinics.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and psychology prerequisites", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Counseling philosophy statement and interview", "references": "Three academic/professional references"},
        "source": "https://www.se.edu/academics/programs/clinical-mental-health-counseling-ms"
      },
      {
        "title": "Red River Valley Aviator & Wildlife Ecosystem Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$3,500 research stipend and aerial remote sensing flight time allocation",
        "fee": "$0",
        "tuition": "Funded through Southeastern Aviation Sciences Institute",
        "desc": "Interdisciplinary fellowship utilizing aerial multi-spectral imaging to monitor migratory waterfowl corridors, water turbidity in Lake Texoma, and feral swine populations in the Red River Basin.",
        "requirements": {"gpa": "Enrolled in aviation or biological sciences with 3.0+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Aerial environmental monitoring proposal", "references": "Aviation or biology faculty letter"},
        "source": "https://www.se.edu/aviation/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Thomas W. Newsom",
        "role": "President & Educational Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Newsom serves as the 21st President of Southeastern Oklahoma State University, prioritizing aviation fleet modernization, tribal partnership expansion with the Choctaw Nation, and regional student affordability."
      },
      {
        "name": "Dr. Michael Davis",
        "role": "Director & Associate Professor of the Aviation Sciences Institute",
        "department": "Aviation Sciences Institute",
        "subject": "engineering",
        "bio": "Dr. Davis is an FAA-certified flight instructor and aviation administrator researching collegiate pilot training efficiency, aeronautical human factors, and regional airline safety management."
      },
      {
        "name": "Dr. Karl Frinkle",
        "role": "Chair & Professor of Mathematics and Physical Sciences",
        "department": "Department of Mathematics and Physical Sciences",
        "subject": "mathematics",
        "bio": "Dr. Frinkle is a mathematician researching algebraic topology, graph theory applications in network routing, and STEM curriculum enhancement in higher education."
      }
    ]
  }
]
