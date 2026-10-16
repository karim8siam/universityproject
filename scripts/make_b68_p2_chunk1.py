# scripts/make_b68_p2_chunk1.py
# Batch 68 Part 2 Chunk 1: Universities 16 to 23

chunk3 = [
  # 16. University of Central Oklahoma (Row 1068)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Central Oklahoma",
    "shortName": "UCO",
    "slug": "university-of-central-oklahoma",
    "location": "Edmond, Oklahoma, United States",
    "website": "https://www.uco.edu",
    "sourceRow": 1068,
    "stats": {"established": "1890", "students": "12,500+", "international": "6%", "faculty": "550+"},
    "heroSummary": "The University of Central Oklahoma (UCO), established in 1890 in Edmond, Oklahoma, is the state's oldest public institution of higher education. Operating as a major metropolitan university in the Oklahoma City area, UCO is internationally acclaimed for housing the W. Roger Webb Forensic Science Institute—the largest forensic science education program in North America—along with renowned programs in contemporary music (ACM@UCO), nursing, and engineering physics.",
    "academicOverview": "UCO delivers programs through the College of Mathematics and Science, the Forensic Science Institute, the College of Fine Arts and Design, the College of Business, and the College of Education and Professional Studies. Its campus features the Biomolecular Research Center and state-of-the-art forensic ballistics, DNA profiling, and digital evidence laboratories.",
    "researchAdmissions": "Undergraduate admission operates on rolling deadlines through UCO's direct portal (test-optional; recommended GPA 2.7+). Graduate applicants must possess an accredited bachelor's degree with a minimum 2.75–3.0 GPA, submit transcripts, letters of recommendation, and department-specific materials.",
    "opps": [
      {
        "title": "Master of Science in Forensic Science - W. Roger Webb Forensic Science Institute",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "FSI Graduate Research Fellowships up to $14,000/year plus tuition assistance",
        "fee": "$60",
        "tuition": "$8,500/year (resident) / $19,200/year (non-resident)",
        "desc": "FEPAC-accredited premier forensic graduate program offering research concentrations in forensic molecular biology (DNA), forensic chemistry/toxicology, and digital evidence forensics.",
        "requirements": {"gpa": "BS in Forensic Science, Biology, Chemistry, or Computer Science with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE General required", "papers": "Statement of forensic research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uco.edu/programs/jcgs/cms/forensic-science-ms"
      },
      {
        "title": "Bachelor of Science in Engineering Physics - Biomedical & Electrical Options",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Broncho STEM Honors Scholarships up to $7,500/year",
        "fee": "$50",
        "tuition": "$8,200/year (resident) / $18,900/year (non-resident)",
        "desc": "ABET-accredited engineering curriculum bridging rigorous theoretical physics with applied microelectronics, laser optics, and biomedical device engineering.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus and physics", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.uco.edu/cms/academics/engineering-physics/"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Department of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "OU Health & Integris Hospital Nursing Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$8,200/year (resident) / $18,900/year (non-resident)",
        "desc": "CCNE-accredited baccalaureate nursing degree providing clinical rotations across top Oklahoma City medical complexes, including OU Medical Center and Integris Health.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; Test of Essential Academic Skills (TEAS) score 70%+", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Nursing candidate essay", "references": "Two recommendations"},
        "source": "https://www.uco.edu/cms/academics/nursing/"
      },
      {
        "title": "Bachelor of Applied Technology in Contemporary Music - ACM@UCO",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Contemporary Music Talent Awards up to $5,000/year",
        "fee": "$50",
        "tuition": "$8,200/year (resident) / $18,900/year (non-resident)",
        "desc": "Distinctive commercial music curriculum in downtown Oklahoma City covering music production, commercial performance, artist development, and sound engineering.",
        "requirements": {"gpa": "High school GPA 2.5+; audition or music production portfolio submission", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Creative artist statement", "references": "One musical reference"},
        "source": "https://www.uco.edu/acm/"
      },
      {
        "title": "Master of Science in Cybersecurity - Secure Software Systems Track",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Graduate Cybersecurity Assistantships up to $9,000",
        "fee": "$60",
        "tuition": "$12,800 total",
        "desc": "Comprehensive graduate curriculum exploring software vulnerability remediation, cryptographic protocols, cloud enterprise defense, and penetration testing.",
        "requirements": {"gpa": "BS in Computer Science or IT with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.uco.edu/programs/jcgs/cms/cybersecurity-ms"
      },
      {
        "title": "Master of Business Administration (MBA) - Energy Systems Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Energy Leadership Graduate Grants up to $6,000",
        "fee": "$60",
        "tuition": "$14,500 total",
        "desc": "AACSB-accredited MBA program designed for working executives, focusing on oil and renewable energy finance, regulatory compliance, and corporate strategic leadership.",
        "requirements": {"gpa": "Undergraduate GPA 2.75+; resume showing professional experience", "ielts": "TOEFL 79+", "gre": "GMAT/GRE optional", "papers": "Professional goals statement", "references": "Two recommendations"},
        "source": "https://www.uco.edu/business/mba/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. John Mabry",
        "role": "Director & Professor of Forensic Science",
        "department": "W. Roger Webb Forensic Science Institute",
        "subject": "biology",
        "bio": "Dr. Mabry directs the Forensic Science Institute, researching digital forensics extraction, crime scene documentation methodologies, and forensic ballistic imaging."
      },
      {
        "name": "Dr. Ronald Chen",
        "role": "Professor of Engineering and Physics",
        "department": "Department of Engineering and Physics",
        "subject": "physics",
        "bio": "Dr. Chen's research investigates optoelectronic semiconductor devices, laser spectroscopic sensors for environmental monitoring, and microfluidic lab-on-a-chip hardware."
      },
      {
        "name": "Dr. Barbara Arnold",
        "role": "Professor of Nursing",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Dr. Arnold investigates high-fidelity clinical simulation education, pediatric critical care outcomes, and urban healthcare workforce retention strategies."
      }
    ]
  },

  # 17. University of Colorado Anschutz Medical Campus (Row 1070)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Colorado Anschutz Medical Campus",
    "shortName": "CU Anschutz",
    "slug": "university-of-colorado-anschutz-medical-campus",
    "location": "Aurora, Colorado, United States",
    "website": "https://www.cuanschutz.edu",
    "sourceRow": 1070,
    "stats": {"established": "2006", "students": "4,500+", "international": "7%", "faculty": "4,800+"},
    "heroSummary": "The University of Colorado Anschutz Medical Campus (CU Anschutz) in Aurora, Colorado, is the largest academic health sciences center in the Rocky Mountain region and a world-renowned biomedical research institution. Originating in 1883 and relocated to a cutting-edge 256-acre medical campus, CU Anschutz encompasses the School of Medicine, Skaggs School of Pharmacy, Colorado School of Public Health, and two nationally ranked hospitals: UCHealth University of Colorado Hospital and Children's Hospital Colorado.",
    "academicOverview": "CU Anschutz generates over $700 million in annual sponsored research funding. It is internationally celebrated for revolutionary cancer clinical trials at the CU Cancer Center, breakthrough neurobiology at the Linda Crnic Institute for Down Syndrome, immunology, and diabetes therapeutics at the Barbara Davis Center for Diabetes.",
    "researchAdmissions": "Medical admissions are processed via AMCAS with CASPer exams, MCAT scores, and rigorous clinical prerequisites. Biomedical doctoral programs are fully funded through the Graduate School and require extensive bench research experience, academic transcripts, and letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Sciences - Cancer Biology & Immunology Programs",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year funding guarantee: $37,000/year living stipend, 100% tuition coverage, and comprehensive healthcare",
        "fee": "$75",
        "tuition": "Covered by fellowship/RA",
        "desc": "Elite doctoral training conducting cutting-edge bench research in tumor microenvironments, CAR-T cell immunotherapy, autoimmune pathogenesis, and molecular genetics.",
        "requirements": {"gpa": "BS or MS in life sciences, biochemistry, or related field with GPA 3.3+; minimum 1 year laboratory research experience", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE not accepted", "papers": "Personal research statement and faculty mentor interests", "references": "Three letters from research mentors"},
        "source": "https://www.cuanschutz.edu/graduate-programs/cancer-biology"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Trek Integrated Medical Curriculum",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-15",
        "deadlineText": "October 15, 2027",
        "funding": "CU Medical Alumni Scholarships and Dean's Endowed Awards up to full tuition",
        "fee": "$100 (AMCAS + Secondary)",
        "tuition": "$43,500/year (resident) / $71,800/year (non-resident)",
        "desc": "Top-tier LCME-accredited medical doctorate featuring the Trek curriculum, offering longitudinal clinical clerkships across UCHealth University of Colorado Hospital and Children's Hospital Colorado.",
        "requirements": {"gpa": "Undergraduate science GPA 3.7+; MCAT score (513+ median); AMCAS application and CASPer exam", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and CU secondary essays", "references": "Pre-health committee letter or three academic references"},
        "source": "https://medschool.cuanschutz.edu/education/admissions"
      },
      {
        "title": "Doctor of Pharmacy (Pharm.D.) - Skaggs School of Pharmacy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Skaggs Merit Scholarships up to $15,000/year",
        "fee": "$100 (PharmCAS)",
        "tuition": "$32,800/year (resident) / $44,500/year (non-resident)",
        "desc": "ACPE-accredited four-year professional pharmacy doctorate recognized for pharmacogenomics clinical training, inpatient acute care rotations, and infectious disease therapeutics.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; minimum 60 semester hours prerequisite science coursework; PharmCAS application", "ielts": "TOEFL 85+", "gre": "PCAT optional", "papers": "PharmCAS personal statement", "references": "Two professional or academic letters"},
        "source": "https://pharmacy.cuanschutz.edu/academics/pharmd"
      },
      {
        "title": "Ph.D. in Pharmaceutical Sciences - Drug Delivery & Pharmacokinetics",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full graduate assistantship $37,000/year plus complete tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program investigating lipid nanoparticle drug formulation, blood-brain barrier transport mechanisms, and pharmacokinetic-pharmacodynamic modeling.",
        "requirements": {"gpa": "BS in Pharmacy, Chemistry, Bioengineering, or Life Sciences with GPA 3.2+", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Research statement", "references": "Three letters of recommendation"},
        "source": "https://pharmacy.cuanschutz.edu/academics/phd-programs"
      },
      {
        "title": "Master of Public Health (MPH) - Colorado School of Public Health",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Colorado Public Health Fellowships up to $12,000",
        "fee": "$75 (SOPHAS)",
        "tuition": "$19,500/year (resident) / $36,200/year (non-resident)",
        "desc": "CEPH-accredited tripartite school (CU, CSU, UNC) offering concentrations in epidemiology, environmental occupational health, global public health, and maternal child health.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; coursework in biology and mathematics; SOPHAS application", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Public health leadership essay", "references": "Three letters of recommendation"},
        "source": "https://coloradosph.cuanschutz.edu/admissions/degrees"
      },
      {
        "title": "Ph.D. in Clinical Science - Health Services & Translational Research",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NIH CCTSI Clinical Scholar Awards $36,000/year plus full tuition",
        "fee": "$75",
        "tuition": "Covered by award",
        "desc": "Translational doctoral program for clinicians and health researchers focusing on clinical trial epidemiology, health economics, dissemination science, and comparative effectiveness.",
        "requirements": {"gpa": "Terminal clinical degree (MD, PharmD, DNP) or master's in related health field with GPA 3.3+", "ielts": "TOEFL 90+", "gre": "MCAT or GRE accepted", "papers": "Translational research proposal", "references": "Three mentor letters"},
        "source": "https://cctsi.cuanschutz.edu/training/clsc-phd"
      }
    ],
    "researchers": [
      {
        "name": "Dr. John J. Reilly Jr.",
        "role": "Dean & Vice Chancellor for Health Affairs",
        "department": "School of Medicine",
        "subject": "biology",
        "bio": "Dr. Reilly is an internationally renowned pulmonary physician-scientist whose research investigates the genetic determinants of chronic obstructive pulmonary disease (COPD) and acute respiratory distress."
      },
      {
        "name": "Dr. Richard D. Schulick",
        "role": "Director of CU Cancer Center & Chair of Surgery",
        "department": "CU Cancer Center",
        "subject": "biology",
        "bio": "Dr. Schulick directs the NCI-designated CU Cancer Center, leading surgical clinical trials in pancreatic and biliary neoplasms and tumor antigen-specific immunotherapies."
      },
      {
        "name": "Dr. Diego Restrepo",
        "role": "Professor of Cell and Developmental Biology",
        "department": "Department of Cell and Developmental Biology",
        "subject": "biology",
        "bio": "Dr. Restrepo's laboratory explores the sensory neurobiology of the olfactory bulb, optical calcium imaging of neural networks, and decision-making circuit dynamics."
      }
    ]
  },

  # 18. University of Colorado Colorado Springs (Row 1073)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Colorado Colorado Springs",
    "shortName": "UCCS",
    "slug": "university-of-colorado-colorado-springs",
    "location": "Colorado Springs, Colorado, United States",
    "website": "https://www.uccs.edu",
    "sourceRow": 1073,
    "stats": {"established": "1965", "students": "11,500+", "international": "3%", "faculty": "550+"},
    "heroSummary": "The University of Colorado Colorado Springs (UCCS), established in 1965 at the foot of Pikes Peak, is a vibrant public regional research institution within the University of Colorado system. Renowned for its close ties to the aerospace and defense sector, UCCS is celebrated for the National Cybersecurity Center, space systems engineering, the William J. Hybl Sports Medicine and Performance Center, and nursing education.",
    "academicOverview": "UCCS comprises the College of Engineering and Applied Science, the Helen and Arthur E. Johnson Beth-El College of Nursing and Health Sciences, the College of Letters, Arts & Sciences, the College of Business, and the School of Public Affairs. It operates unique research enterprises including the Space and Cybersecurity Center and the Altitude Performance Laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school transcripts through UCCS's application or the Common App (test-optional; recommended GPA 3.0+). Graduate and doctoral applicants require an accredited bachelor's or master's degree, minimum 3.0 GPA, letters of recommendation, and a statement of academic purpose.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity - Space Systems & National Cyber Exchange",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "National Cyber Exchange Graduate Fellowships up to $16,000/year",
        "fee": "$60",
        "tuition": "$14,800/year (resident) / $29,500/year (non-resident)",
        "desc": "NSA-designated cybersecurity master's focusing on satellite payload communication defense, spacecraft cyber telemetry, critical infrastructure security, and penetration testing.",
        "requirements": {"gpa": "BS in Computer Science, Engineering, or related field with GPA 3.0+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of cybersecurity research intent", "references": "Two letters of recommendation"},
        "source": "https://eas.uccs.edu/cybersecurity"
      },
      {
        "title": "Master of Science in Applied Physiology and Human Performance - Hybl Center",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Hybl Sports Medicine Clinical Stipends up to $10,000",
        "fee": "$60",
        "tuition": "$13,500/year (resident) / $27,200/year (non-resident)",
        "desc": "Elite graduate clinical exercise science program conducted inside the $61M Hybl Center, investigating altitude training, elite athlete biomechanics, and clinical exercise oncology.",
        "requirements": {"gpa": "Undergraduate degree in exercise science, kinesiology, or biology with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of career objectives", "references": "Three letters of recommendation"},
        "source": "https://bethel.uccs.edu/academics/health-sciences/ms-applied-physiology"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering - Aerospace Systems Focus",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Chancellor's STEM Scholarships up to $8,000/year",
        "fee": "$50",
        "tuition": "$11,200/year (resident) / $26,800/year (non-resident)",
        "desc": "ABET-accredited engineering program offering industry capstones with Peterson and Schriever Space Force Bases, wind tunnel testing, and satellite structural design.",
        "requirements": {"gpa": "High school GPA 3.2+; preparatory calculus and physics", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Common App essay", "references": "One counselor recommendation"},
        "source": "https://eas.uccs.edu/mae"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Beth-El College of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "UCHealth Memorial Hospital Nursing Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$11,800/year (resident) / $27,400/year (non-resident)",
        "desc": "CCNE-accredited professional nursing curriculum featuring clinical rotations across UCHealth Memorial Hospital Central and Penrose-St. Francis Health Services.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; Kaplan Nursing School Admissions Test score 70%+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Nursing essay", "references": "Two recommendations"},
        "source": "https://bethel.uccs.edu/academics/nursing/bsn"
      },
      {
        "title": "Ph.D. in Computer Science - Security, Machine Learning & Networking",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research & Teaching Assistantships $28,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Research-focused doctorate exploring adversarial machine learning, software security metrics, wireless sensor networks, and autonomous drone swarming.",
        "requirements": {"gpa": "BS or MS in Computer Science or Computer Engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE scores optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://eas.uccs.edu/cs/graduate/phd"
      },
      {
        "title": "Master of Business Administration (MBA) - Project Management & Sports Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "College of Business Graduate Merit Awards up to $5,000",
        "fee": "$60",
        "tuition": "$16,500 total",
        "desc": "AACSB-accredited evening and online MBA leveraging Colorado Springs' status as Olympic City USA, offering specialized coursework in sports administration and PMI project management.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; professional resume", "ielts": "TOEFL 80+", "gre": "GMAT/GRE waived with 3.0+ GPA", "papers": "Statement of purpose", "references": "Two professional references"},
        "source": "https://business.uccs.edu/mba"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shouhuai Xu",
        "role": "Gallogly Chair Professor of Cybersecurity",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Xu is an IEEE Fellow leading fundamental research on cybersecurity dynamics, cryptographic metrics, malware containment modeling, and cybersecurity data analytics."
      },
      {
        "name": "Dr. Lynn Phillips",
        "role": "Associate Professor of Human Physiology",
        "department": "William J. Hybl Sports Medicine Center",
        "subject": "biology",
        "bio": "Dr. Phillips investigates human cardiovascular adaptation to extreme high-altitude hypoxia, exercise counter-measures for occupational firefighters, and athletic recovery kinetics."
      },
      {
        "name": "Dr. Peter Gorder",
        "role": "Chair & Associate Professor of Mechanical and Aerospace Engineering",
        "department": "Department of Mechanical and Aerospace Engineering",
        "subject": "engineering",
        "bio": "Dr. Gorder specializes in flight vehicle aerodynamics, subsonic wind tunnel modeling, computational fluid mechanics, and unmanned aerial system stability."
      }
    ]
  },

  # 19. University of Colorado Denver (Row 1074)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Colorado Denver",
    "shortName": "CU Denver",
    "slug": "university-of-colorado-denver",
    "location": "Denver, Colorado, United States",
    "website": "https://www.ucdenver.edu",
    "sourceRow": 1074,
    "stats": {"established": "1912", "students": "14,000+", "international": "7%", "faculty": "750+"},
    "heroSummary": "The University of Colorado Denver (CU Denver) is Colorado's premier public urban research university, situated in the heart of downtown Denver on the Auraria Campus. Deeply integrated with the state capital, commercial financial district, and regional arts scene, CU Denver is internationally celebrated for architecture and urban planning, public affairs, recording arts, and business analytics.",
    "academicOverview": "CU Denver offers undergraduate, graduate, and doctoral degrees across seven schools and colleges: the College of Architecture and Planning, the School of Public Affairs, the College of Engineering, Design and Computing, the Business School, the College of Arts & Media, the College of Liberal Arts and Sciences, and the School of Education & Human Development.",
    "researchAdmissions": "Undergraduate applicants apply via CU Denver's application or the Common App (rolling admissions; test-optional). Graduate and doctoral applicants require an accredited bachelor's degree with a minimum 3.0 GPA, transcripts, personal statements, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Architecture (M.Arch) - College of Architecture and Planning",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "CAP Design Excellence Scholarships up to $12,000/year",
        "fee": "$75",
        "tuition": "$18,500/year (resident) / $35,200/year (non-resident)",
        "desc": "NAAB-accredited professional architecture degree focused on Rocky Mountain regional design, urban density revitalization, sustainable timber construction, and computational design.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; comprehensive creative design portfolio; statement of design philosophy", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "Not required", "papers": "Design portfolio and personal statement", "references": "Three letters of recommendation"},
        "source": "https://architectureandplanning.ucdenver.edu/academics/master-of-architecture"
      },
      {
        "title": "Master of Public Administration (MPA) - School of Public Affairs",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Colorado Civic Leadership Fellowships up to $8,000",
        "fee": "$50",
        "tuition": "$15,800 total",
        "desc": "NASPAA-accredited, nationally ranked public administration master's leveraging downtown Denver access to provide training in state policy analysis, emergency management, and environmental governance.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; resume showing public or nonprofit involvement", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Public service career essay", "references": "Three letters of recommendation"},
        "source": "https://publicaffairs.ucdenver.edu/academic-programs/master-of-public-administration"
      },
      {
        "title": "Master of Science in Business Analytics - Business School",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Denver Business Analytics Grants up to $6,000",
        "fee": "$50",
        "tuition": "$17,200 total",
        "desc": "STEM-designated graduate analytics curriculum covering predictive statistical modeling, machine learning for finance, cloud data architecture, and SQL database optimization.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; quantitative or business background", "ielts": "TOEFL 80+", "gre": "GMAT/GRE optional", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://business.ucdenver.edu/ms-business-analytics"
      },
      {
        "title": "Bachelor of Science in Recording Arts - College of Arts & Media",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "CAM Creative Talent Awards up to $6,000/year",
        "fee": "$50",
        "tuition": "$11,200/year (resident) / $26,500/year (non-resident)",
        "desc": "One of the nation's premier public recording arts programs, providing training in multitrack acoustic engineering, mastering, live concert sound reinforcement, and audio forensics.",
        "requirements": {"gpa": "High school GPA 2.8+; audio production portfolio or instrumental audition", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Creative audio goals essay", "references": "One teacher evaluation"},
        "source": "https://artsandmedia.ucdenver.edu/programs/music-entertainment-industry-studies/recording-arts-bs"
      },
      {
        "title": "Ph.D. in Civil Engineering - Transportation Systems & Urban Infrastructure",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Research Assistantships $28,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program exploring multi-modal transit modeling, smart city sensor grids, structural bridge resilience, and urban drainage hydrology.",
        "requirements": {"gpa": "BS or MS in Civil Engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE General recommended", "papers": "Research statement", "references": "Three academic references"},
        "source": "https://engineering.ucdenver.edu/civil-engineering/graduate-programs/phd-civil-engineering"
      },
      {
        "title": "Bachelor of Science in Computer Science - Data Science & Cloud Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Denver STEM Leadership Scholarships up to $7,500/year",
        "fee": "$50",
        "tuition": "$11,200/year (resident) / $26,500/year (non-resident)",
        "desc": "ABET-accredited computer science program emphasizing algorithm design, cloud software development, cybersecurity principles, and full-stack enterprise computing.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus readiness", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://engineering.ucdenver.edu/computer-science/undergraduate-programs"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Nan Ellin",
        "role": "Professor of Urban and Regional Planning",
        "department": "College of Architecture and Planning",
        "subject": "arts-design",
        "bio": "Dr. Ellin is an internationally acclaimed urban theorist investigating sustainable community design, urban placemaking architectures, and canal revitalization strategies."
      },
      {
        "name": "Dr. Paul Teske",
        "role": "Dean & Distinguished Professor of Public Affairs",
        "department": "School of Public Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Teske specializes in regulatory policy, urban economic development, state governance structures, and public education reform."
      },
      {
        "name": "Dr. Farnoush Banaei-Kashani",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Computer Science and Engineering",
        "subject": "computer-science",
        "bio": "Dr. Banaei-Kashani directs the Big Data Management and Mining Lab, investigating spatial data algorithms, predictive transportation modeling, and deep learning for spatio-temporal data."
      }
    ]
  },

  # 20. University of Dallas (Row 1077)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Dallas",
    "shortName": "UDallas",
    "slug": "university-of-dallas",
    "location": "Irving, Texas, United States",
    "website": "https://www.udallas.edu",
    "sourceRow": 1077,
    "stats": {"established": "1956", "students": "2,500+", "international": "5%", "faculty": "160+"},
    "heroSummary": "The University of Dallas (UDallas), established in 1956 in Irving, Texas, is a premier private Catholic liberal arts university. Celebrated for its rigorous Core Curriculum rooted in the Western literary and philosophical canon, its signature Rome Program on the Eugene Constantin Campus, and the Braniff Graduate School of Liberal Arts, UDallas fosters scholarly contemplation and moral leadership.",
    "academicOverview": "UDallas comprises Constantin College of Liberal Arts, the Braniff Graduate School of Liberal Arts, the Satish & Yasmin Gupta College of Business, and the Neuhoff Institute for Ministry & Evangelization. Its faculty maintain deep scholarly traditions in political philosophy, classical literature, and cyber governance.",
    "researchAdmissions": "Undergraduate admission operates through the Common Application (holistic review; test-optional; average GPA 3.8 unweighted). Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, submit analytical writing samples, statements of purpose, and academic recommendation letters.",
    "opps": [
      {
        "title": "Ph.D. in Literature - Institute of Philosophic Studies (Braniff Graduate School)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full tuition scholarships plus Braniff Teaching Fellowships $20,000/year",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Elite interdisciplinary doctorate investigating the Western literary tradition, classical Greek and Roman epic poetry, philosophical poetics, and Renaissance drama.",
        "requirements": {"gpa": "Master's or bachelor's degree in literature, philosophy, or classics with GPA 3.5+; Greek or Latin proficiency preferred", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE General required", "papers": "20-page analytical literary writing sample and statement of intent", "references": "Three letters of academic recommendation"},
        "source": "https://udallas.edu/braniff/academics/doctoral-programs/phd-literature.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Satish & Yasmin Gupta College of Business",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Gupta Dean's Executive Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$24,500 total",
        "desc": "AACSB-accredited MBA curriculum emphasizing corporate ethical leadership, market analytics, financial decision modeling, and global strategic management.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; professional resume", "ielts": "TOEFL 80+", "gre": "GMAT/GRE optional", "papers": "Professional goals statement", "references": "Two recommendations"},
        "source": "https://udallas.edu/gupta/academics/graduate-programs/mba/index.php"
      },
      {
        "title": "Bachelor of Arts in Classics & Early Christian Literature - Rome Program",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Constantin Academic Honors Awards up to $22,000/year",
        "fee": "$50",
        "tuition": "$46,800/year",
        "desc": "Immersive classical studies curriculum featuring a semester of study on UDallas's Eugene Constantin Campus in Rome, examining Latin translation, Greek philosophy, and patristics.",
        "requirements": {"gpa": "High school GPA 3.5+; strong writing background; Common App", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Common App essay", "references": "Two academic recommendations"},
        "source": "https://udallas.edu/constantin/academics/programs/classics/index.php"
      },
      {
        "title": "Master of Science in Cybersecurity - Information Assurance & Governance",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NSA Cyber Defense Grants up to $8,000",
        "fee": "$50",
        "tuition": "$21,600 total",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense, teaching regulatory compliance, enterprise risk governance, incident response, and cloud security architectures.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+ in technical, business, or related discipline", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Cybersecurity interest essay", "references": "Two professional references"},
        "source": "https://udallas.edu/gupta/academics/graduate-programs/ms-cybersecurity/index.php"
      },
      {
        "title": "Bachelor of Science in Biochemistry - Pre-Medical Research Track",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Presidential STEM Fellowships up to $24,000/year",
        "fee": "$50",
        "tuition": "$46,800/year",
        "desc": "Intensive laboratory degree boasting an 85%+ medical school admission acceptance rate, with faculty research in enzyme kinetics, bio-organic synthesis, and molecular spectroscopy.",
        "requirements": {"gpa": "High school GPA 3.5+; preparatory chemistry and calculus", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Common App essay", "references": "Two teacher evaluations"},
        "source": "https://udallas.edu/constantin/academics/programs/chemistry-biochemistry/index.php"
      },
      {
        "title": "Master of Theological Studies (MTS) - Neuhoff Institute",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Neuhoff Ministry Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$15,200 total",
        "desc": "Graduate theological curriculum exploring systematic theology, biblical exegesis, moral philosophy, church history, and Catholic social doctrine.",
        "requirements": {"gpa": "Undergraduate GPA 2.8+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Theological reflection statement", "references": "Two letters of recommendation"},
        "source": "https://udallas.edu/neuhoff/academics/masters/mts.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jonathan J. Sanford",
        "role": "President & Professor of Philosophy",
        "department": "Department of Philosophy",
        "subject": "social-sciences",
        "bio": "Dr. Sanford is an expert on virtue ethics, ancient Greek metaphysics, phenomenological realism, and the philosophical foundations of liberal education."
      },
      {
        "name": "Dr. Bainard Cowan",
        "role": "Professor of English Literature",
        "department": "Braniff Graduate School of Liberal Arts",
        "subject": "arts-design",
        "bio": "Dr. Cowan explores the hermeneutics of literary form, the classical epic tradition from Homer to Dante, and 19th-century American metaphysical literature."
      },
      {
        "name": "Dr. Brett J. L. Landry",
        "role": "Dean & Professor of Cybersecurity",
        "department": "Satish & Yasmin Gupta College of Business",
        "subject": "computer-science",
        "bio": "Dr. Landry's research investigates cybersecurity behavioral compliance, IT governance frameworks, cyber ethics, and organizational disaster recovery systems."
      }
    ]
  },

  # 21. University of Hartford (Row 1081)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Hartford",
    "shortName": "UHart",
    "slug": "university-of-hartford",
    "location": "West Hartford, Connecticut, United States",
    "website": "https://www.hartford.edu",
    "sourceRow": 1081,
    "stats": {"established": "1957", "students": "5,900+", "international": "6%", "faculty": "350+"},
    "heroSummary": "The University of Hartford (UHart), founded in 1957 on a scenic 350-acre suburban campus in West Hartford, Connecticut, is a comprehensive private university celebrated for world-class performing arts, engineering, and healthcare professions. It is home to The Hartt School—one of the nation's premier performing arts conservatories—and the College of Engineering, Technology, and Architecture (CETA).",
    "academicOverview": "UHart offers programs through seven distinct schools: The Hartt School, the College of Engineering, Technology, and Architecture, the College of Education, Nursing and Health Professions, the Barney School of Business, the Hartford Art School, the College of Arts and Sciences, and Hillyer College.",
    "researchAdmissions": "Undergraduate admission operates on rolling deadlines through the Common Application (test-optional; recommended GPA 3.0+). The Hartt School and Hartford Art School require auditions or artistic portfolios. Graduate programs require an accredited bachelor's degree, transcripts, letters of recommendation, and personal statements.",
    "opps": [
      {
        "title": "Master of Music (M.Mus.) in Orchestral Conducting / Performance - The Hartt School",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Hartt Talent Scholarships & Graduate Assistantships up to full tuition plus stipend",
        "fee": "$65",
        "tuition": "$22,500/year",
        "desc": "Elite conservatory curriculum offering podium time with the Hartt Symphony Orchestra, score analysis, advanced baton technique, and chamber ensemble direction.",
        "requirements": {"gpa": "BM or equivalent in music with GPA 3.0+; live or video pre-screening conducting audition", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "Not required", "papers": "Conductor's artistic statement and repertoire list", "references": "Three music faculty references"},
        "source": "https://www.hartford.edu/academics/colleges-schools/hartt/programs/music/conducting.aspx"
      },
      {
        "title": "Master of Science in Prosthetics and Orthotics (MSPO)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Health Professions Clinical Fellowships up to $10,000",
        "fee": "$75 (OPCAS)",
        "tuition": "$38,500/year",
        "desc": "NCOPE-accredited professional master's preparing clinician orthotists and prosthetists, integrating gait analysis, CAD/CAM assistive fabrication, and clinical rotations.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; 40 hours clinical shadowing with certified CPO; OPCAS application", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "OPCAS personal essay", "references": "Three letters including certified prosthetist/orthotist"},
        "source": "https://www.hartford.edu/academics/colleges-schools/enhp/academics/department-of-rehabilitation-sciences/prosthetics-orthotics/mspo.aspx"
      },
      {
        "title": "Bachelor of Science in Acoustical Engineering and Music",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "arts-design"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "CETA Engineering Honors Scholarships up to $18,000/year",
        "fee": "$50",
        "tuition": "$45,200/year",
        "desc": "Unique undergraduate program combining ABET-accredited mechanical/electrical acoustics engineering with conservatory music performance at The Hartt School.",
        "requirements": {"gpa": "High school GPA 3.2+; calculus and physics readiness; music audition for Hartt faculty", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://www.hartford.edu/academics/colleges-schools/ceta/academics/mechanical-aerospace-acoustical/acoustical-engineering-music.aspx"
      },
      {
        "title": "Bachelor of Science in Aerospace Engineering - Aerodynamics & Propulsion",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Pratt & Whitney STEM Awards up to $16,000/year",
        "fee": "$50",
        "tuition": "$45,200/year",
        "desc": "Hands-on engineering degree capitalizing on Connecticut's aerospace corridor (Pratt & Whitney, Sikorsky), focusing on jet propulsion, orbital mechanics, and composites.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus and physics", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Common App essay", "references": "One counselor recommendation"},
        "source": "https://www.hartford.edu/academics/colleges-schools/ceta/academics/mechanical-aerospace-acoustical/aerospace-engineering.aspx"
      },
      {
        "title": "Master of Business Administration (MBA) - Barney School of Business",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Hartford Insurance Capital Fellowships up to $8,000",
        "fee": "$50",
        "tuition": "$21,500 total",
        "desc": "AACSB-accredited MBA offering concentrations in business analytics, healthcare management, risk management and insurance, and corporate leadership.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; professional resume", "ielts": "TOEFL 80+", "gre": "GMAT/GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.hartford.edu/academics/colleges-schools/barney/academics/graduate-programs/mba.aspx"
      },
      {
        "title": "Doctor of Physical Therapy (DPT) - Department of Rehabilitation Sciences",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-15",
        "deadlineText": "October 15, 2027",
        "funding": "Rehabilitation Science Endowed Scholarships up to $12,000/year",
        "fee": "$75 (PTCAS)",
        "tuition": "$39,500/year",
        "desc": "CAPTE-accredited clinical doctorate providing gross anatomy dissection, musculoskeletal rehabilitation clinics, and 34 weeks of full-time clinical education.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; 50 hours PT clinical observation; GRE General; PTCAS application", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "PTCAS personal statement", "references": "Three letters including licensed PT"},
        "source": "https://www.hartford.edu/academics/colleges-schools/enhp/academics/department-of-rehabilitation-sciences/physical-therapy/dpt.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. H. Fred Walker",
        "role": "Dean & Professor of Engineering",
        "department": "College of Engineering, Technology, and Architecture",
        "subject": "engineering",
        "bio": "Dr. Walker's scholarship investigates quality systems engineering, manufacturing reliability modeling, industrial statistical process control, and engineering curriculum reform."
      },
      {
        "name": "Prof. Edward Cumming",
        "role": "Director of Orchestral Activities & Professor of Conducting",
        "department": "The Hartt School",
        "subject": "arts-design",
        "bio": "Prof. Cumming has conducted premier symphony orchestras worldwide, specializing in symphonic literature interpretation, orchestral rehearsal pedagogy, and contemporary music performance."
      },
      {
        "name": "Dr. Matthew P. Hall",
        "role": "Associate Professor of Prosthetics and Orthotics",
        "department": "College of Education, Nursing and Health Professions",
        "subject": "biology",
        "bio": "Dr. Hall investigates lower-limb prosthetic socket biomechanics, micro-processor knee kinematic stability, and clinical functional outcome measurements in amputees."
      }
    ]
  },

  # 22. University of Hawaiʻi at Mānoa (Row 1082)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Hawaiʻi at Mānoa",
    "shortName": "UH Mānoa",
    "slug": "university-of-hawaii-at-manoa",
    "location": "Honolulu, Hawaii, United States",
    "website": "https://manoa.hawaii.edu",
    "sourceRow": 1082,
    "stats": {"established": "1907", "students": "19,000+", "international": "9%", "faculty": "1,200+"},
    "heroSummary": "The University of Hawaiʻi at Mānoa (UH Mānoa), founded in 1907 in Honolulu, is the flagship campus of the University of Hawaiʻi system and a world-class Carnegie R1 research university. Uniquely situated in the central Pacific, UH Mānoa is internationally recognized as a global capital for oceanography, marine biology, astronomy (operating telescopes atop Mauna Kea and Haleakalā), volcanology, tropical agriculture, and Pacific/Asian studies.",
    "academicOverview": "UH Mānoa encompasses the School of Ocean and Earth Science and Technology (SOEST), the Institute for Astronomy (IfA), the John A. Burns School of Medicine, the William S. Richardson School of Law, and the College of Tropical Agriculture and Human Resources (CTAHR). It commands over $400 million in annual extramural research grants.",
    "researchAdmissions": "Undergraduate admissions evaluate high school preparation via UH System application or Common App (test-optional; minimum GPA 2.8). Graduate and doctoral applicants require an accredited baccalaureate degree with a minimum 3.0 GPA, letters of recommendation, statement of purpose, and demonstrated alignment with research faculty.",
    "opps": [
      {
        "title": "Ph.D. in Oceanography - School of Ocean and Earth Science and Technology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $34,000/year plus complete tuition waiver",
        "fee": "$100",
        "tuition": "Covered by assistantship",
        "desc": "One of the world's top oceanography departments, operating research vessels Kilo Moana and Kaʻimikai-o-Kanaloa, studying biogeochemical cycles, ocean mixing, and coral reef ecosystems.",
        "requirements": {"gpa": "BS or MS in chemistry, biology, geology, physics, or mathematics with GPA 3.2+; faculty advisor sponsorship", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.soest.hawaii.edu/oceanography/graduate-program/"
      },
      {
        "title": "Ph.D. in Astronomy - Institute for Astronomy (IfA)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year guarantee: $36,000/year stipend, full tuition remission, and health insurance",
        "fee": "$100",
        "tuition": "Covered by fellowship/RA",
        "desc": "Elite astrophysics doctorate offering unprecedented direct observing access to world-class observatories on Mauna Kea (Subaru, Keck, Gemini) and Pan-STARRS sky survey telescopes.",
        "requirements": {"gpa": "BS in Physics, Astronomy, or Mathematics with GPA 3.5+", "ielts": "TOEFL 80+", "gre": "Physics GRE scores recommended", "papers": "Statement of purpose detailing astronomical research", "references": "Three letters of recommendation"},
        "source": "https://www.ifa.hawaii.edu/academic/grad_program/"
      },
      {
        "title": "Master of Science in Marine Biology - Hawaiʻi Institute of Marine Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "HIMB Graduate Fellowships & Assistantships up to $30,000/year plus tuition",
        "fee": "$100",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary master's based on Moku o Loʻe (Coconut Island) in Kāneʻohe Bay, investigating coral reef bleaching resilience, shark behavior, and marine genomics.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences with GPA 3.0+; faculty mentor sponsorship required", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of objectives", "references": "Three letters of recommendation"},
        "source": "https://mbiograd.manoa.hawaii.edu/"
      },
      {
        "title": "Ph.D. in Earth and Planetary Sciences - Volcanology & Geophysics",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Assistantships $32,000/year plus full tuition remission",
        "fee": "$100",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research leveraging Hawaiʻi's active basaltic volcanoes (Kīlauea, Mauna Loa) to explore magma dynamics, seismic hazard modeling, and planetary volcanism.",
        "requirements": {"gpa": "BS or MS in geology, geophysics, or physics with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Research statement", "references": "Three academic references"},
        "source": "https://www.soest.hawaii.edu/eps/graduate/"
      },
      {
        "title": "Master of Arts in Pacific Islands Studies - Center for Pacific Islands Studies",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "East-West Center & CPIS Graduate Fellowships up to $16,000/year plus tuition",
        "fee": "$100",
        "tuition": "$13,200/year (resident) / $32,500/year (non-resident)",
        "desc": "Global benchmark program in Pacific indigenous sovereignty, climate migration across Oceania, Micronesian/Polynesian oral histories, and geopolitical security.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; writing sample in Pacific studies or allied humanities", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Statement of purpose and scholarly writing sample", "references": "Three letters of recommendation"},
        "source": "https://hawaii.edu/cpis/academics/ma-program/"
      },
      {
        "title": "Bachelor of Science in Tropical Agriculture and the Environment - CTAHR",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Mānoa Academic Merit Scholarships up to $10,000/year",
        "fee": "$70",
        "tuition": "$11,304/year (resident) / $33,336/year (non-resident)",
        "desc": "Field-oriented undergraduate degree exploring island agro-ecology, invasive pest biological control, indigenous agro-forestry systems, and tropical crop genetics.",
        "requirements": {"gpa": "High school GPA 2.8+; preparatory biology and chemistry", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://cms.ctahr.hawaii.edu/tae/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Karl",
        "role": "Victor and Peggy Brandstrom Pavel Professor of Oceanography",
        "department": "School of Ocean and Earth Science and Technology",
        "subject": "environment",
        "bio": "Dr. Karl co-founded the Hawaii Ocean Time-series (HOT) Station ALOHA in 1988, is a National Academy of Sciences member, and pioneered marine microbial ecology and oceanic carbon cycle measurements."
      },
      {
        "name": "Dr. Ken Chambers",
        "role": "Director of Pan-STARRS & Astronomer",
        "department": "Institute for Astronomy",
        "subject": "physics",
        "bio": "Dr. Chambers directs the Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) atop Haleakalā, surveying near-Earth asteroids, supernovae, and cosmic transient phenomena."
      },
      {
        "name": "Dr. Bruce Houghton",
        "role": "Gordon A. Macdonald Professor of Volcanology",
        "department": "Department of Earth and Planetary Sciences",
        "subject": "environment",
        "bio": "Dr. Houghton is the Science Director of the National Disaster Preparedness Training Center, world-renowned for high-resolution studies of explosive basaltic eruptions and volcanic ash plume physics."
      }
    ]
  },

  # 23. University of Idaho (Row 1084)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Idaho",
    "shortName": "U of I",
    "slug": "university-of-idaho",
    "location": "Moscow, Idaho, United States",
    "website": "https://www.uidaho.edu",
    "sourceRow": 1084,
    "stats": {"established": "1889", "students": "11,500+", "international": "5%", "faculty": "650+"},
    "heroSummary": "The University of Idaho (U of I), founded in 1889 as the state's primary land-grant research university in Moscow, Idaho, is nestled amidst the rolling hills of the Palouse. As Idaho's premier R2 research institution rapidly pursuing R1 classification, U of I is internationally acclaimed for agricultural biotechnology, forest and wildfire sciences (College of Natural Resources), critical infrastructure cybersecurity, and water resources law.",
    "academicOverview": "U of I comprises nine academic colleges, including the College of Natural Resources, the College of Agricultural and Life Sciences, the College of Engineering, the College of Law, and the College of Science. It operates over 10,000 acres of experimental forests and agricultural research stations across the state of Idaho.",
    "researchAdmissions": "Undergraduate admission operates on rolling deadlines via the Common App or direct application (minimum recommended GPA 2.8; test-optional). Graduate and doctoral applicants require an accredited bachelor's or master's degree, minimum 3.0 GPA, letters of recommendation, and statements of research objectives.",
    "opps": [
      {
        "title": "Ph.D. in Natural Resources - Forest, Rangeland & Fire Sciences",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "College of Natural Resources Research Assistantships $28,000/year plus full tuition waiver",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Nationally celebrated doctoral research program utilizing U of I's 8,000-acre experimental forest to investigate wildfire combustion physics, post-fire regeneration, and forest carbon markets.",
        "requirements": {"gpa": "BS or MS in forestry, ecology, environmental science, or biology with GPA 3.2+; faculty advisor match", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests and CV", "references": "Three letters of recommendation"},
        "source": "https://www.uidaho.edu/cnr/departments/forest-rangeland-and-fire-sciences/phd-natural-resources"
      },
      {
        "title": "Ph.D. in Computer Science - Critical Infrastructure Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Center for Secure and Dependable Systems Assistantships $30,000/year plus full tuition",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "NSA-designated Center of Excellence doctoral program specializing in power grid cybersecurity, industrial control systems defense, formal protocol verification, and embedded firmware security.",
        "requirements": {"gpa": "BS or MS in Computer Science or Computer Engineering with GPA 3.3+", "ielts": "TOEFL 79+", "gre": "GRE General recommended", "papers": "Statement of purpose", "references": "Three academic references"},
        "source": "https://www.uidaho.edu/engr/programs/cs/graduate"
      },
      {
        "title": "Ph.D. in Plant Science - Precision Agronomy & Crop Genetics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "USDA NIFA Graduate Fellowships $28,000/year plus complete tuition waiver",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Applied doctoral research curriculum exploring cereal grain genetics, potato disease resistance breeding, drone-based hyperspectral crop monitoring, and soil microbial health.",
        "requirements": {"gpa": "Undergraduate degree in agronomy, biology, or genetics with GPA 3.2+; faculty sponsor", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of research goals", "references": "Three recommendations"},
        "source": "https://www.uidaho.edu/cals/plant-sciences/graduate/phd"
      },
      {
        "title": "Juris Doctor (J.D.) - College of Law (Natural Resources & Water Law Focus)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "College of Law Merit Scholarships up to $15,000/year",
        "fee": "$60",
        "tuition": "$14,800/year (resident) / $26,500/year (non-resident)",
        "desc": "ABA-accredited legal education renowned for Western water law, public lands governance, Native American tribal law, and environmental litigation clinics in Moscow and Boise.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+; competitive LSAT score; LSAC Credential Assembly Service", "ielts": "TOEFL 90+", "gre": "LSAT required", "papers": "Personal statement and legal resume", "references": "Two recommendations"},
        "source": "https://www.uidaho.edu/law/admissions"
      },
      {
        "title": "Master of Science in Mechanical Engineering - Advanced Materials & Thermal Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Teaching & Research Assistantships up to $22,000/year plus tuition",
        "fee": "$65",
        "tuition": "$10,200/year (resident) / $29,800/year (non-resident)",
        "desc": "Thesis-based engineering master's addressing composite material fracture mechanics, high-temperature thermal fluids, clean combustion, and clean engine technologies.",
        "requirements": {"gpa": "BS in Mechanical Engineering or closely related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.uidaho.edu/engr/programs/me/graduate"
      },
      {
        "title": "Bachelor of Science in Rangeland Ecology and Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Western Undergraduate Exchange (WUE) and Vandal Pride Merit Scholarships",
        "fee": "$60",
        "tuition": "$8,816/year (resident) / $28,424/year (non-resident)",
        "desc": "SRM-accredited curriculum training rangeland specialists in sagebrush steppe conservation, wildland livestock grazing, riparian restoration, and invasive weed ecology.",
        "requirements": {"gpa": "High school GPA 2.8+; preparatory biology and mathematics", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.uidaho.edu/cnr/departments/forest-rangeland-and-fire-sciences/undergraduate/rangeland-ecology-and-management"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Dennis Becker",
        "role": "Dean & Professor of Natural Resources",
        "department": "College of Natural Resources",
        "subject": "environment",
        "bio": "Dr. Becker investigates forest bio-energy economics, community-based natural resource management, federal public land timber policy, and rural economic vitality."
      },
      {
        "name": "Dr. Jim Alves-Foss",
        "role": "Director & Professor of Computer Science",
        "department": "Center for Secure and Dependable Systems",
        "subject": "computer-science",
        "bio": "Dr. Alves-Foss directs the Center for Secure and Dependable Systems, researching formal cybersecurity models, computer architecture defense against side-channel exploits, and embedded security."
      },
      {
        "name": "Dr. Arash Rashed",
        "role": "Professor of Entomology & Plant Pathology",
        "department": "Department of Entomology, Plant Pathology and Nematology",
        "subject": "biology",
        "bio": "Dr. Rashed conducts research on vector insect biology, viral transmission dynamics in cereal crops and potatoes, and agro-ecological pest management in the Pacific Northwest."
      }
    ]
  }
]
