# scripts/make_b69_p2_chunk1.py
# Batch 69 Part 2 Chunk 1: Universities 16 to 23 (UNMC, UNO, UNLV, UNR, UNH, UNewHaven, UNA, UNC Charlotte)

chunk3 = [
  # 16. University of Nebraska Medical Center (Row 1124)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nebraska Medical Center",
    "shortName": "UNMC",
    "slug": "university-of-nebraska-medical-center",
    "location": "Omaha, Nebraska, United States",
    "website": "https://www.unmc.edu",
    "sourceRow": 1124,
    "stats": {"established": "1881", "students": "4,400+", "international": "7%", "faculty": "1,550+"},
    "heroSummary": "The University of Nebraska Medical Center (UNMC) is a world-class academic health sciences center located in Omaha, Nebraska. Internationally revered for biocontainment isolation care, infectious disease preparedness, solid organ transplantation, and cancer research at the Fred & Pamela Buffett Cancer Center, UNMC trains premier clinical practitioners and biomedical investigators.",
    "academicOverview": "UNMC encompasses six colleges: Medicine, Pharmacy, Nursing, Dentistry, Public Health, and Allied Health Professions, alongside graduate biomedical training programs. UNMC operates the National Quarantine Center, the Global Center for Health Security, and the Munroe-Meyer Institute for developmental disabilities.",
    "researchAdmissions": "Admissions are competitive and administered through the Graduate Studies office or centralized application services (AMCAS, PharmCAS, SOPHAS). Biomedical doctoral applicants require strong undergraduate STEM preparation, minimum 3.0 GPA, letters of recommendation, and English proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Cancer Research - Pancreatic & Lymphoma Oncology - Fred & Pamela Buffett Cancer Center",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full graduate assistantships $34,000/year plus complete tuition waiver and health insurance",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Elite NCI-designated comprehensive cancer center doctorate focusing on tumor microenvironment signaling, chemoresistance mechanisms, antibody-drug conjugates, and cancer genomics.",
        "requirements": {"gpa": "Bachelor's degree in biological sciences, chemistry, or related field with GPA 3.3+", "ielts": "TOEFL 85+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Personal research statement and laboratory background", "references": "Three letters of recommendation"},
        "source": "https://www.unmc.edu/gradstudies/programs/cancer-research/"
      },
      {
        "title": "Ph.D. in Biosecurity and Emerging Infectious Diseases - Global Center for Health Security",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Federal Health Security Research Fellowships $35,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Preeminent national program utilizing the Davis Global Center and biocontainment facilities to study viral hemorrhagic fevers, airborne pathogen aerosolization, pandemic response logistics, and biocontainment protocol design.",
        "requirements": {"gpa": "BS or MS in microbiology, public health, or immunology with GPA 3.2+", "ielts": "TOEFL 85+", "gre": "GRE not required", "papers": "Statement of purpose and biosecurity interest", "references": "Three academic references"},
        "source": "https://www.unmc.edu/healthsecurity/education/"
      },
      {
        "title": "Doctor of Pharmacy (Pharm.D.) - Clinical Pharmacokinetics & Precision Therapeutics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "College of Pharmacy Endowed Merit Scholarships up to $12,000/year",
        "fee": "$75",
        "tuition": "$26,000/year (resident) / $41,000/year (non-resident)",
        "desc": "Top-ranked clinical pharmacy doctorate delivering rigorous simulation training in therapeutic drug monitoring, hospital sterile compounding, infectious disease stewardship, and oncology pharmacotherapy.",
        "requirements": {"gpa": "Prerequisite science coursework with GPA 3.0+; PCAT optional", "ielts": "TOEFL 85+", "gre": "PCAT optional", "papers": "PharmCAS application essays", "references": "Two letters of recommendation"},
        "source": "https://www.unmc.edu/pharmacy/admissions/"
      },
      {
        "title": "Ph.D. in Environmental Health, Occupational Health & Toxicology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships $32,000/year plus tuition waiver via College of Public Health",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary environmental health doctorate studying agricultural dust respiratory toxicity, pesticide neurotoxicity, Great Plains groundwater nitrate contamination, and rural occupational hazards.",
        "requirements": {"gpa": "Undergraduate degree in life sciences, environmental health, or chemistry with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://www.unmc.edu/publichealth/programs/phd/"
      },
      {
        "title": "Ph.D. in Cellular and Integrative Physiology - Cardiovascular & Neurovascular Signaling",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "NIH-funded training grant fellowships $34,000/year plus complete tuition coverage",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Cardiovascular and integrative physiology research examining sympathetic nerve activity, heart failure molecular pathways, blood-brain barrier dysfunction, and microvascular hemodynamics.",
        "requirements": {"gpa": "Bachelor's degree in physiology, biology, or neuroscience with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Research statement", "references": "Three letters of recommendation"},
        "source": "https://www.unmc.edu/cip/graduate/"
      },
      {
        "title": "Master of Science in Medical Anatomy - Advanced Human Dissection & Clinical Imaging",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Departmental laboratory teaching assistantships up to $10,000",
        "fee": "$60",
        "tuition": "$18,500 total",
        "desc": "Intensive gross anatomy master's featuring whole-body cadaveric dissection, 3D holographic virtual anatomy in the iEXCEL visualization center, histology, and embryology.",
        "requirements": {"gpa": "Bachelor's degree with pre-health coursework and GPA 3.0+", "ielts": "TOEFL 80+", "gre": "MCAT or GRE accepted", "papers": "Statement of purpose", "references": "Two academic recommendations"},
        "source": "https://www.unmc.edu/anatomy/programs/ms-anatomy.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Surinder Batra",
        "role": "Professor & Chair of Biochemistry and Molecular Biology",
        "department": "Fred & Pamela Buffett Cancer Center",
        "subject": "biology",
        "bio": "Dr. Batra is an internationally recognized authority on pancreatic cancer, investigating mucin glycoproteins, biomarker discovery, antibody targeting, and metastasis signaling."
      },
      {
        "name": "Dr. James Lawler",
        "role": "Executive Director & Professor of Internal Medicine",
        "department": "Global Center for Health Security",
        "subject": "biology",
        "bio": "Dr. Lawler directs clinical biosecurity initiatives, leading quarantine protocols for high-consequence viral pathogens, aeromedical evacuation of Ebola patients, and outbreak surveillance."
      },
      {
        "name": "Dr. Irving Zucker",
        "role": "Theodore F. Hubbard Professor of Cardiovascular Research",
        "department": "Department of Cellular and Integrative Physiology",
        "subject": "biology",
        "bio": "Dr. Zucker investigates central nervous system control of circulation, autonomic dysregulation in chronic heart failure, carotid body chemoreflexes, and exercise hemodynamics."
      }
    ]
  },

  # 17. University of Nebraska Omaha (Row 1125)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nebraska Omaha",
    "shortName": "UNO",
    "slug": "university-of-nebraska-omaha",
    "location": "Omaha, Nebraska, United States",
    "website": "https://unomaha.edu",
    "sourceRow": 1125,
    "stats": {"established": "1908", "students": "15,300+", "international": "7%", "faculty": "900+"},
    "heroSummary": "The University of Nebraska Omaha (UNO) is Nebraska's premier metropolitan research university, situated in the heart of Omaha. Internationally renowned for biomechanics research, aviation, national security studies at NCITE, public administration, and computer science, UNO connects cutting-edge academic scholarship with Fortune 500 corporate and defense partnerships.",
    "academicOverview": "UNO houses six colleges: the College of Information Science & Technology (IS&T), College of Arts and Sciences, College of Business Administration, College of Education, Health, and Human Sciences, College of Public Affairs and Community Service (CPACS), and College of Communication, Fine Arts and Media. Key institutes include the Biomechanics Research Building and NCITE.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduates. Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, provide a statement of purpose, two to three letters of recommendation, and meet English proficiency standards (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Biomechanics - Rehabilitation Robotics & Human Movement Variability",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Research in Human Movement Variability Fellowships $28,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "The nation's first standalone Ph.D. in Biomechanics, housed in a state-of-the-art 50,000 sq ft research facility, investigating wearable exoskeletons, nonlinear movement dynamics in Parkinson's, and pediatric assistive robotics.",
        "requirements": {"gpa": "BS or MS in biomechanics, biomedical engineering, kinesiology, or physics with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with biomechanics faculty", "references": "Three letters of recommendation"},
        "source": "https://www.unomaha.edu/college-of-education-health-and-human-sciences/biomechanics/academics/phd-biomechanics.php"
      },
      {
        "title": "Ph.D. in Information Technology - Cybersecurity & Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Assistantships $29,000/year plus complete tuition waiver in the Peter Kiewit Institute",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctoral program at the Peter Kiewit Institute addressing automated vulnerability detection, biometric authentication, secure IoT firmware, and big data graph analytics.",
        "requirements": {"gpa": "BS or MS in Computer Science, Cybersecurity, or MIS with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and research proposal", "references": "Three letters of recommendation"},
        "source": "https://www.unomaha.edu/college-of-information-science-and-technology/academics/phd-in-it.php"
      },
      {
        "title": "Ph.D. in Public Administration - Urban Governance & Public Budgeting",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full CPACS Graduate Assistantships $24,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Consistently ranked among the top public budgeting and financial management doctoral programs in the nation, advancing empirical research on municipal bond financing, nonprofit governance, and urban policy.",
        "requirements": {"gpa": "Master's degree (MPA, MPP, or related field) with GPA 3.4+", "ielts": "TOEFL 80+", "gre": "GRE required", "papers": "Scholarly writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.unomaha.edu/college-of-public-affairs-and-community-service/public-administration/academics/phd-in-public-administration.php"
      },
      {
        "title": "Master of Science in Counterterrorism and National Security - NCITE Homeland Security",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "DHS NCITE Research Assistantships up to $22,000/year",
        "fee": "$50",
        "tuition": "$17,500 total",
        "desc": "Specialized curriculum hosted by NCITE (the DHS Center of Excellence for Counterterrorism), examining extremist radicalization dynamics, cyber threat intelligence, insider threat detection, and critical infrastructure defense.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and background in political science, security, or computing", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of goals and resume", "references": "Two recommendations"},
        "source": "https://www.unomaha.edu/ncite/"
      },
      {
        "title": "Bachelor of Science in Aviation - Professional Flight & Air Traffic Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Aviation Industry and Endowed Scholarships up to $8,000/year",
        "fee": "$45",
        "tuition": "$21,500/year (out-of-state) / $8,300/year (in-state) + flight lab fees",
        "desc": "AABI-accredited collegiate aviation program providing FAA Part 141 flight training at Millard Airport, advanced Frasca flight simulators, jet transition training, and air traffic control radar lab certifications.",
        "requirements": {"gpa": "High school GPA 2.5+ and FAA Medical Certificate for flight students", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.unomaha.edu/college-of-public-affairs-and-community-service/aviation/"
      },
      {
        "title": "Master of Arts in Theatre - Playwriting, Directing & Performance Studies",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental production assistantships covering tuition and production stipends",
        "fee": "$45",
        "tuition": "$15,500/year",
        "desc": "Comprehensive theater graduate curriculum delivering practical dramaturgy, stage direction at the Weber Fine Arts Center, lighting design, and original playwriting development.",
        "requirements": {"gpa": "Undergraduate degree in theater or humanities with GPA 3.0+; portfolio/audition", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Theatrical statement of purpose and writing sample", "references": "Two recommendations"},
        "source": "https://www.unomaha.edu/college-of-communication-fine-arts-and-media/theatre/academics/graduate-program.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Nick Stergiou",
        "role": "Distinguished Community Research Chair in Biomechanics",
        "department": "Department of Biomechanics",
        "subject": "engineering",
        "bio": "Dr. Stergiou is a founding pioneer in movement variability analysis, using chaos theory and nonlinear dynamics to study human locomotion, stroke rehabilitation, and sensory deficits in elderly adults."
      },
      {
        "name": "Dr. Gina Ligon",
        "role": "Director & Professor of National Security",
        "department": "National Counterterrorism Innovation, Technology, and Education Center (NCITE)",
        "subject": "social-sciences",
        "bio": "Dr. Ligon directs NCITE, investigating organizational leadership of terrorist networks, ideological extremism communication strategies, and technology recruitment methods."
      },
      {
        "name": "Dr. Robin Gandhi",
        "role": "Professor of Cybersecurity",
        "department": "College of Information Science & Technology",
        "subject": "computer-science",
        "bio": "Dr. Gandhi conducts research on software assurance, cyber risk assessment for maritime transportation infrastructures, regulatory compliance metrics, and cryptographic systems."
      }
    ]
  },

  # 18. University of Nevada, Las Vegas (Row 1127)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nevada, Las Vegas",
    "shortName": "UNLV",
    "slug": "university-of-nevada-las-vegas",
    "location": "Las Vegas, Nevada, United States",
    "website": "https://www.unlv.edu",
    "sourceRow": 1127,
    "stats": {"established": "1957", "students": "30,600+", "international": "8%", "faculty": "1,350+"},
    "heroSummary": "The University of Nevada, Las Vegas (UNLV) is a top-tier Carnegie R1 public research university located in the vibrant urban metropolis of Las Vegas. Internationally recognized as the global gold standard in hospitality management through the William F. Harrah College of Hospitality, UNLV is also celebrated for solar energy engineering, radiochemistry, gaming regulation, and high-pressure physics.",
    "academicOverview": "UNLV features 15 academic colleges including the Harrah College of Hospitality, Howard R. Hughes College of Engineering, Kirk Kerkorian School of Medicine, William S. Boyd School of Law, and the College of Sciences. UNLV operates the Harry Reid Research and Technology Park and the International Gaming Institute (IGI).",
    "researchAdmissions": "Admissions are holistic for undergraduate applicants. Graduate applicants require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Hospitality Administration - Gaming Analytics & Resort Operations - Harrah College",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full Harrah Doctoral Fellowships $25,000/year plus complete tuition waiver",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "The world's #1 ranked doctoral program in hospitality, studying gaming customer analytics, integrated resort revenue modeling, sustainable tourism operations, and responsible gambling policies.",
        "requirements": {"gpa": "Master's degree in hospitality, business, or related field with GPA 3.25+; industry experience preferred", "ielts": "TOEFL 85+ or IELTS 7.0+", "gre": "GMAT or GRE required", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.unlv.edu/hospitality/phd"
      },
      {
        "title": "Ph.D. in Radiochemistry - Nuclear Fuel Cycle & Actinide Chemistry",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "DOE-funded Radiochemistry Traineeships $32,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite national radiochemistry program addressing spent nuclear fuel reprocessing, uranium and plutonium coordination chemistry, environmental radiotracer transport, and nuclear forensics.",
        "requirements": {"gpa": "BS in chemistry, chemical engineering, or physics with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and lab experience record", "references": "Three letters of recommendation"},
        "source": "https://www.unlv.edu/chemistry/radiochemistry"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Concentrated Solar Power & Thermal Energy Storage",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Research Assistantships $28,000/year plus tuition remission at Center for Energy Research",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research leveraging the Mojave Desert solar corridor to pioneer high-efficiency molten salt solar storage, supercritical carbon dioxide power cycles, and desiccant evaporative cooling systems.",
        "requirements": {"gpa": "BS in Mechanical or Aerospace Engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.unlv.edu/me/degrees/phd"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Computer Vision",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental teaching and research assistantships $27,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Cutting-edge research program exploring autonomous driving perception, deep learning architectures, cybersecurity for distributed networks, and human-computer interactions.",
        "requirements": {"gpa": "BS or MS in Computer Science with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.unlv.edu/cs/graduate-programs/phd"
      },
      {
        "title": "Master of Laws (LL.M.) in Gaming Law and Regulation - Boyd School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Boyd Gaming Law Merit Scholarships up to $15,000",
        "fee": "$60",
        "tuition": "$29,000 total",
        "desc": "The world's only LL.M. program dedicated exclusively to gaming law, casino compliance, online sports betting regulation, anti-money laundering frameworks, and tribal gaming compacts.",
        "requirements": {"gpa": "J.D. from ABA-accredited school or international law degree equivalent", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "N/A", "papers": "Statement of interest in gaming regulation", "references": "Two letters of recommendation"},
        "source": "https://law.unlv.edu/academics/llm-gaming"
      },
      {
        "title": "Doctor of Physical Therapy (DPT) - Neurological & Orthopedic Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-01",
        "deadlineText": "October 1, 2027",
        "funding": "Physical Therapy Departmental Scholarships up to $8,000",
        "fee": "$60",
        "tuition": "$24,500/year (resident) / $39,000/year (non-resident)",
        "desc": "CAPTE-accredited three-year clinical doctorate providing over 30 weeks of clinical internships, advanced biomechanical gait analysis, and spinal manipulation training.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+ and 50+ hours physical therapy clinical observation", "ielts": "TOEFL 85+", "gre": "GRE required", "papers": "PTCAS personal essay", "references": "Three letters (including licensed physical therapist)"},
        "source": "https://www.unlv.edu/pt/degrees/dpt"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brett Abarbanel",
        "role": "Executive Director & Associate Professor of Gaming Research",
        "department": "International Gaming Institute (IGI)",
        "subject": "social-sciences",
        "bio": "Dr. Abarbanel conducts global research on esports wagering, video game loot boxes, gambling consumer psychology, responsible gaming technology, and gaming policy."
      },
      {
        "name": "Dr. Frederic Poineau",
        "role": "Associate Professor of Radiochemistry",
        "department": "Department of Chemistry and Biochemistry",
        "subject": "chemistry",
        "bio": "Dr. Poineau investigates technetium and uranium coordination chemistry, synthetic inorganic radioisotope synthesis, molten salt chemistry, and pyroprocessing of nuclear fuel."
      },
      {
        "name": "Dr. Kwang Kim",
        "role": "Southwest Gas Professor of Energy and Matter",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Kim directs the Smart Materials and Systems Laboratory, focusing on artificial muscles, ionic polymer-metal composites (IPMC), biomimetic underwater robotics, and microfluidics."
      }
    ]
  },

  # 19. University of Nevada, Reno (Row 1128)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Nevada, Reno",
    "shortName": "UNR",
    "slug": "university-of-nevada-reno",
    "location": "Reno, Nevada, United States",
    "website": "https://www.unr.edu",
    "sourceRow": 1128,
    "stats": {"established": "1874", "students": "21,000+", "international": "7%", "faculty": "1,100+"},
    "heroSummary": "The University of Nevada, Reno (UNR) is the historic land-grant Carnegie R1 public flagship research university of Nevada, established in 1874. Situated in the Sierra Nevada foothills, UNR is globally renowned for earthquake and structural engineering—operating the world's largest multi-shake table earthquake simulation laboratory—as well as mining engineering, lithium battery materials, neurosciences, and atmospheric science.",
    "academicOverview": "UNR comprises 11 colleges and schools including the College of Engineering, Mackay School of Earth Sciences and Engineering, University of Nevada Reno School of Medicine, College of Agriculture, Biotechnology & Natural Resources, and the College of Science. Key hubs include the Earthquake Engineering Laboratory and the Nevada Seismological Laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 3.0 core) and college prep curriculum. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Civil and Environmental Engineering - Earthquake Shake Table & Structural Dynamics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full Earthquake Engineering Fellowships $32,000/year plus complete tuition waiver",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite structural engineering doctorate utilizing the multi-table shake simulation facility to test full-scale bridges, seismic base isolation systems, high-rise building resilience, and soil-structure interactions.",
        "requirements": {"gpa": "BS or MS in civil or structural engineering with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing structural/seismic interests", "references": "Three letters of recommendation"},
        "source": "https://www.unr.edu/cee/degrees/phd"
      },
      {
        "title": "Ph.D. in Mining Engineering - Critical Minerals Processing & Sustainable Geomechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Mackay School of Earth Sciences Fellowships $30,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Housed in the world-famous Mackay School, this program explores lithium extraction metallurgy, autonomous underground robotic haulage, rock mass characterization, and mine tailings remediation.",
        "requirements": {"gpa": "Engineering degree with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three recommendations"},
        "source": "https://www.unr.edu/mining/degrees/phd"
      },
      {
        "title": "Ph.D. in Cellular and Molecular Pharmacology and Physiology - Smooth Muscle & Cardiac Electrophysiology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "NIH-supported pre-doctoral traineeships $33,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Internationally renowned physiological research exploring gastrointestinal pacemaker interstitial cells of Cajal, vascular smooth muscle ion channel gating, and diabetic gastroparesis therapies.",
        "requirements": {"gpa": "Undergraduate degree in life sciences with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research experience", "references": "Three letters of recommendation"},
        "source": "https://med.unr.edu/physio/graduate"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Autonomous Robotics & Cyber-Physical Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Teaching/Research Assistantships $28,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research through the Robotics Research Lab and Autonomous Systems Lab, focusing on subterranean drone exploration, multi-robot swarm mapping, and deep reinforcement learning.",
        "requirements": {"gpa": "BS in Computer Science or Computer Engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.unr.edu/cse/degrees/phd"
      },
      {
        "title": "Ph.D. in Atmospheric Sciences - Mountain Meteorology & Wildfire Smoke Dispersion",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Joint UNR/Desert Research Institute (DRI) Assistantships $31,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Conducted in partnership with the Desert Research Institute, exploring complex terrain wind dynamics, cloud seeding aerosol physics, wildfire plume dispersion modeling, and regional drought climatology.",
        "requirements": {"gpa": "BS in physics, atmospheric science, mathematics, or engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three recommendations"},
        "source": "https://www.unr.edu/atms/degrees/phd"
      },
      {
        "title": "Master of Science in Materials Science and Engineering - Battery Storage & Solid Electrolytes",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Nevada Battery Coalition research assistantships $24,000/year plus tuition assistance",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Graduate curriculum aligned with Nevada's lithium innovation hub, investigating solid-state lithium battery electrolytes, cathode synthesis degradation kinetics, and recyclable battery architectures.",
        "requirements": {"gpa": "BS in materials science, chemistry, physics, or chemical engineering with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two letters of recommendation"},
        "source": "https://www.unr.edu/mse/degrees/ms"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ian Buckle",
        "role": "Foundation Professor of Civil Engineering",
        "department": "Earthquake Engineering Laboratory & Department of Civil Engineering",
        "subject": "engineering",
        "bio": "Dr. Buckle is an internationally acclaimed structural engineer specializing in bridge seismic design, large-scale shake table experimentation, base isolation, and structural control devices."
      },
      {
        "name": "Dr. Kenton Sanders",
        "role": "Chair & Professor of Physiology and Cell Biology",
        "department": "Department of Physiology and Cell Biology",
        "subject": "biology",
        "bio": "Dr. Sanders is a world-renowned electrophysiologist discovering the role of interstitial cells of Cajal as pacemakers in visceral smooth muscles and enteric neurotransmission pathways."
      },
      {
        "name": "Dr. Kostas Alexis",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Computer Science and Engineering",
        "subject": "computer-science",
        "bio": "Dr. Alexis leads autonomous subterranean robotics, serving as team lead for Team CERBERUS, which won the DARPA Subterranean Challenge for autonomous robotic cave exploration."
      }
    ]
  },

  # 20. University of New Hampshire (Row 1130)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of New Hampshire",
    "shortName": "UNH",
    "slug": "university-of-new-hampshire",
    "location": "Durham, New Hampshire, United States",
    "website": "https://www.unh.edu",
    "sourceRow": 1130,
    "stats": {"established": "1866", "students": "14,300+", "international": "7%", "faculty": "980+"},
    "heroSummary": "The University of New Hampshire (UNH) is New Hampshire's flagship public land-, sea-, and space-grant research university, established in 1866 in picturesque Durham, New Hampshire. A designated Carnegie R1 institution, UNH is internationally celebrated for space physics instrumentation on NASA missions, ocean mapping at the Center for Coastal and Ocean Mapping (CCOM), sustainability, and interdisciplinary marine science.",
    "academicOverview": "UNH encompasses six colleges and schools including the College of Engineering and Physical Sciences (CEPS), College of Life Sciences and Agriculture (COLSA), College of Liberal Arts, Peter T. Paul College of Business and Economics, and the UNH Franklin Pierce School of Law. Key research centers include the Institute for the Study of Earth, Oceans, and Space (EOS) and the InterOperability Laboratory (IOL).",
    "researchAdmissions": "Admissions are holistic for undergraduates. Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, provide three letters of recommendation, a statement of purpose, and meet English language proficiency requirements (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Ocean Engineering - Ocean Mapping & Hydrographic Acoustics - CCOM/JHC",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NOAA Joint Hydrographic Center Graduate Fellowships $32,000/year plus full tuition remission",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "The world's foremost ocean mapping doctorate, operated with NOAA at the Center for Coastal and Ocean Mapping (CCOM), researching multibeam sonar acoustics, autonomous surface vessel bathymetry, and seabed habitat mapping.",
        "requirements": {"gpa": "BS or MS in engineering, earth sciences, physics, or mathematics with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with CCOM labs", "references": "Three letters of recommendation"},
        "source": "https://ccom.unh.edu/academics"
      },
      {
        "title": "Ph.D. in Physics - Space Plasma Physics & Heliophysics - Space Science Center",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NASA-supported Space Science Center Fellowships $33,000/year plus complete tuition coverage",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Elite astrophysical training designing flight instruments for NASA missions (MMS, Solar Probe, IBEX) to study magnetic reconnection, solar wind turbulence, and magnetospheric dynamics.",
        "requirements": {"gpa": "BS in Physics, Applied Physics, or Astronomy with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "Physics GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://physics.unh.edu/graduate-program"
      },
      {
        "title": "Ph.D. in Earth and Environmental Sciences - Glaciology & Forest Ecosystem Biogeochemistry",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $30,000/year plus tuition remission",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research conducted through the EOS Institute investigating Greenland and Antarctic ice sheet radar sounding, temperate forest carbon flux towers, and groundwater watershed nitrogen dynamics.",
        "requirements": {"gpa": "Degree in geosciences, environmental science, physics, or chemistry with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three recommendations"},
        "source": "https://ceps.unh.edu/earth-sciences/program/phd/earth-environmental-sciences"
      },
      {
        "title": "Ph.D. in Computer Science - Network Interoperability & High-Performance Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "UNH-IOL Industry Fellowships $30,000/year plus tuition remission",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral training connected to the world-renowned UNH InterOperability Laboratory (IOL), focusing on high-speed Ethernet protocol conformance, 5G wireless networking, and distributed machine learning.",
        "requirements": {"gpa": "BS or MS in Computer Science with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://ceps.unh.edu/computer-science/program/phd/computer-science"
      },
      {
        "title": "Master of Laws (LL.M.) in Intellectual Property - UNH Franklin Pierce School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Franklin Pierce IP Merit Scholarships up to $18,000",
        "fee": "$65",
        "tuition": "$38,000 total",
        "desc": "A top-ranked national pioneer in intellectual property education for over 30 years, training attorneys in patent prosecution, trademark licensing, biotechnology patent law, and global digital copyright protection.",
        "requirements": {"gpa": "J.D. or foreign law equivalent with strong academic record", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "N/A", "papers": "Personal statement and legal resume", "references": "Two recommendations"},
        "source": "https://law.unh.edu/academics/degrees/llm-degrees/llm-intellectual-property"
      },
      {
        "title": "Master of Science in Marine Biology - Aquaculture & Coastal Invertebrate Physiology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Jackson Estuarine Laboratory Assistantships $22,000/year plus tuition waiver",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Field-based marine biology master's utilizing the Jackson Estuarine Laboratory and Judd Gregg Marine Complex to research oyster reef aquaculture, eelgrass habitat restoration, and lobster thermal stress physiology.",
        "requirements": {"gpa": "BS in biology, marine science, or related STEM field with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://colsa.unh.edu/biological-sciences/program/ms/marine-biology"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Larry Mayer",
        "role": "Director & Professor of Ocean Engineering",
        "department": "Center for Coastal and Ocean Mapping (CCOM/JHC)",
        "subject": "engineering",
        "bio": "Dr. Mayer is a member of the National Academy of Engineering, pioneering 3D seafloor visualization, multibeam sonar acoustic processing, and mapping the Arctic Ocean continental shelf for UNCLOS."
      },
      {
        "name": "Dr. Harlan Spence",
        "role": "Director & Professor of Physics",
        "department": "Institute for the Study of Earth, Oceans, and Space (EOS)",
        "subject": "physics",
        "bio": "Dr. Spence investigates energetic particle radiation in planetary magnetospheres, cosmic ray physics, space weather effects on spacecraft microelectronics, and NASA CRaTER mission science."
      },
      {
        "name": "Dr. Ruth Varner",
        "role": "Professor of Biogeochemistry",
        "department": "Earth Systems Research Center & EOS",
        "subject": "environment",
        "bio": "Dr. Varner investigates trace gas emissions from peatland and arctic permafrost ecosystems, methane bubbling dynamics from thermokarst lakes, and climate feedback modeling."
      }
    ]
  },

  # 21. University of New Haven (Row 1131)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of New Haven",
    "shortName": "UNewHaven",
    "slug": "university-of-new-haven",
    "location": "West Haven, Connecticut, United States",
    "website": "https://www.newhaven.edu",
    "sourceRow": 1131,
    "stats": {"established": "1920", "students": "8,800+", "international": "12%", "faculty": "550+"},
    "heroSummary": "The University of New Haven is a private doctoral research university located along the Long Island Sound coastline in West Haven, Connecticut. World-renowned for forensic science and criminal justice through the Henry C. Lee Institute of Forensic Science, UNewHaven is equally celebrated for cybersecurity, national security studies, marine biology, and engineering excellence.",
    "academicOverview": "UNewHaven houses five colleges: the Henry C. Lee College of Criminal Justice and Forensic Sciences, Tagliatela College of Engineering, College of Arts and Sciences, Pompea College of Business, and the School of Health Sciences. The campus hosts the Henry C. Lee Institute, an international center for forensic training and crime scene reconstruction.",
    "researchAdmissions": "Undergraduate admissions are test-optional and holistic. Graduate applicants require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 75+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Master of Science in Forensic Science - Crime Scene Investigation & Forensic DNA",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Henry C. Lee Forensic Fellowships and laboratory assistantships up to $14,000/year",
        "fee": "$50",
        "tuition": "$24,000/year",
        "desc": "One of the world's most prestigious forensic science graduate programs, offering rigorous training in forensic serology, STR DNA profiling, crime scene reconstruction, ballistics, and trace microscopy.",
        "requirements": {"gpa": "BS in biology, chemistry, or forensic science with GPA 3.0+; rigorous chemistry coursework", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Personal statement and laboratory credentials", "references": "Two letters of recommendation"},
        "source": "https://www.newhaven.edu/lee-college/graduate-programs/forensic-science/"
      },
      {
        "title": "Ph.D. in Criminal Justice - International Criminology & Intelligence Analysis",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate assistantships $24,000/year plus complete tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral curriculum emphasizing counter-terrorism, human trafficking interdiction, transnational organized crime forensics, police legitimacy, and advanced quantitative criminological modeling.",
        "requirements": {"gpa": "Master's degree in criminal justice, sociology, or allied field with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.newhaven.edu/lee-college/graduate-programs/criminal-justice-phd/"
      },
      {
        "title": "Master of Science in Cybersecurity and Networks - Ethical Hacking & Digital Forensics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "NSA-CAE Cybersecurity Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$22,500 total",
        "desc": "Hands-on cybersecurity master's covering reverse engineering malware, cloud penetration testing, network packet forensics, smart grid security, and zero-trust protocol architecture.",
        "requirements": {"gpa": "BS in Computer Science, Information Technology, or engineering with GPA 3.0+", "ielts": "TOEFL 75+", "gre": "GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.newhaven.edu/engineering/graduate-programs/cybersecurity-networks/"
      },
      {
        "title": "Master of Science in Marine Policy and Management - Coastal Resilience & Fisheries Law",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Coastal Research Assistantships up to $12,000/year",
        "fee": "$50",
        "tuition": "$21,000/year",
        "desc": "Interdisciplinary master's combining Long Island Sound marine ecology, maritime law, coastal zone management, harbor sustainability, and offshore wind regulatory policy.",
        "requirements": {"gpa": "Undergraduate degree in science, policy, or business with GPA 3.0+", "ielts": "TOEFL 75+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.newhaven.edu/arts-sciences/graduate-programs/marine-policy-management/"
      },
      {
        "title": "Master of Science in Biomedical Engineering - Medical Device Design & Bio-MEMS",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Tagliatela College of Engineering Merit Fellowships up to $9,000",
        "fee": "$50",
        "tuition": "$22,000/year",
        "desc": "Applied biomedical engineering curriculum focusing on FDA medical device regulatory pathways, implantable sensor microfabrication, biomechanics modeling, and orthopedic hardware testing.",
        "requirements": {"gpa": "BS in engineering or related physical/life sciences with GPA 3.0+", "ielts": "TOEFL 75+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two recommendations"},
        "source": "https://www.newhaven.edu/engineering/graduate-programs/biomedical-engineering/"
      },
      {
        "title": "Master of Science in National Security - Information Protection & Threat Intelligence",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "National Security Executive Scholarships up to $8,000",
        "fee": "$50",
        "tuition": "$21,000 total",
        "desc": "Practitioner-taught graduate degree in geostrategic threat analysis, corporate counterintelligence, critical infrastructure resilience, and geopolitical risk forecasting.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; security clearance or professional interest in intelligence", "ielts": "TOEFL 75+", "gre": "GRE not required", "papers": "Statement of national security objectives", "references": "Two professional references"},
        "source": "https://www.newhaven.edu/lee-college/graduate-programs/national-security/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Henry C. Lee",
        "role": "Professor Emeritus & Founder",
        "department": "Henry C. Lee Institute of Forensic Science",
        "subject": "biology",
        "bio": "Dr. Lee is one of the world's foremost forensic scientists, famed for forensic crime scene reconstruction, advanced bloodstain pattern analysis, DNA profiling, and consulting on major international criminal trials."
      },
      {
        "name": "Dr. Ibrahim Baggili",
        "role": "Professor of Computer Science & Cybersecurity",
        "department": "Department of Electrical & Computer Engineering and Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Baggili directs the Artifact Genome Project, investigating virtual reality cybersecurity, mobile device digital forensics, UAV drone hacking, and IoT firmware memory acquisition."
      },
      {
        "name": "Dr. Timothy Palmbach",
        "role": "Professor & Chair of Forensic Science",
        "department": "Department of Forensic Science",
        "subject": "biology",
        "bio": "Dr. Palmbach specializes in crime scene analysis, utilizing rapid DNA identification technologies to combat human trafficking, international mass disaster victim identification, and forensic serology."
      }
    ]
  },

  # 22. University of North Alabama (Row 1132)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Alabama",
    "shortName": "UNA",
    "slug": "university-of-north-alabama",
    "location": "Florence, Alabama, United States",
    "website": "https://www.una.edu",
    "sourceRow": 1132,
    "stats": {"established": "1830", "students": "10,100+", "international": "6%", "faculty": "480+"},
    "heroSummary": "The University of North Alabama (UNA) is Alabama's oldest public university, founded in 1830 on a historic 130-acre campus in Florence, Alabama. Located along the Tennessee River in the storied Shoals music region, UNA is internationally celebrated for entertainment industry music management, nursing and health professions, computer science, and business education.",
    "academicOverview": "UNA operates five colleges: the Anderson College of Nursing and Health Professions, College of Arts, Sciences, and Engineering (CASE), Sanders College of Business and Technology, College of Education and Human Sciences, and the School of the Arts. UNA is famous for its live lion mascot habitat and the Muscle Shoals Sound music recording legacy.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students. Graduate applicants require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Bachelor of Business Administration in Entertainment Industry - Music Publishing & Recording Production",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Shoals Music Legacy Talent Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$20,400/year (out-of-state) / $10,200/year (in-state)",
        "desc": "Situated in the legendary Muscle Shoals recording region, this flagship program provides studio engineering at the 3261 Recording Studio, concert tour management, artist representation, and digital streaming royalties distribution.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions application essay", "references": "One recommendation"},
        "source": "https://www.una.edu/entertainment/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner & Rural Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "HRSA Advanced Nursing Traineeships up to $10,000",
        "fee": "$35",
        "tuition": "$14,500 total",
        "desc": "CCNE-accredited graduate nursing program preparing board-certified Family Nurse Practitioners (FNPs) in diagnostic clinical reasoning, pediatric and geriatric primary care, and rural health disparities.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.0+; active RN license", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Nursing professional goals essay", "references": "Three clinical/academic references"},
        "source": "https://www.una.edu/nursing/msn-program/"
      },
      {
        "title": "Master of Science in Applied Manufacturing Engineering - Automation & Smart Manufacturing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "CASE Industry Graduate Assistantships up to $12,000/year",
        "fee": "$35",
        "tuition": "$16,000 total",
        "desc": "Applied engineering master's addressing programmable logic controllers (PLC), industrial robotics cells, digital twin production lines, lean manufacturing systems, and quality engineering.",
        "requirements": {"gpa": "BS in engineering, technology, physics, or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.una.edu/engineering/"
      },
      {
        "title": "Bachelor of Science in Marine Biology - Tennessee River Freshwater & Coastal Marine Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Dauphin Island Sea Lab summer scholarships and UNA STEM merit grants",
        "fee": "$35",
        "tuition": "$20,400/year",
        "desc": "Comprehensive aquatic biology program combining Tennessee River basin mollusk biodiversity with summer field research courses at the Dauphin Island Sea Lab on the Gulf Coast.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong biology and chemistry preparation", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One teacher reference"},
        "source": "https://www.una.edu/biology/marine-biology.html"
      },
      {
        "title": "Master of Business Administration (MBA) - Information Systems & Executive Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Sanders College of Business Merit Scholarships up to $6,000",
        "fee": "$35",
        "tuition": "$15,000 total",
        "desc": "AACSB-accredited MBA curriculum delivering advanced competencies in business intelligence analytics, corporate finance, enterprise resource planning (ERP), and organizational strategy.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Professional statement and resume", "references": "Two recommendations"},
        "source": "https://www.una.edu/business/degrees/mba/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Development & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate computing merit awards and lab assistantships up to $5,000/year",
        "fee": "$35",
        "tuition": "$20,400/year",
        "desc": "ABET-accredited undergraduate curriculum focusing on algorithm design, mobile app engineering, database architecture, network security protocols, and full-stack web engineering.",
        "requirements": {"gpa": "High school GPA 2.5+ with mathematics aptitude", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.una.edu/csis/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Glenn Janik",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Janik investigates freshwater unionid mussel propagation, riverine habitat restoration in the Tennessee River drainage, and endocrine disruption in aquatic ecosystems."
      },
      {
        "name": "Dr. James Jerkins",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Computer Science and Information Systems",
        "subject": "computer-science",
        "bio": "Dr. Jerkins specializes in computer vision algorithms, applied artificial intelligence for agricultural monitoring, and cybersecurity workforce development frameworks."
      },
      {
        "name": "Dr. Tera Kirkman",
        "role": "Dean & Professor of Nursing",
        "department": "Anderson College of Nursing and Health Professions",
        "subject": "biology",
        "bio": "Dr. Kirkman conducts clinical research in rural health delivery models, patient simulation efficacy, clinical decision-making pedagogies, and health promotion in underserved Southern communities."
      }
    ]
  },

  # 23. University of North Carolina at Charlotte (Row 1134)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of North Carolina at Charlotte",
    "shortName": "UNC Charlotte",
    "slug": "university-of-north-carolina-at-charlotte",
    "location": "Charlotte, North Carolina, United States",
    "website": "https://www.charlotte.edu",
    "sourceRow": 1134,
    "stats": {"established": "1946", "students": "30,400+", "international": "8%", "faculty": "1,450+"},
    "heroSummary": "The University of North Carolina at Charlotte (UNC Charlotte / Charlotte) is North Carolina's premier urban research institution and an elite Carnegie R1 public university. Located in America's second-largest financial center, Charlotte is globally recognized for motorsports engineering at the North Carolina Motorsports and Automotive Research Center, data science, cybersecurity, precision optical engineering, and urban logistics.",
    "academicOverview": "Charlotte spans nine colleges including the William States Lee College of Engineering, College of Computing and Informatics (CCI), Belk College of Business, College of Health and Human Services, and the School of Data Science. Key institutes include the Energy Production and Infrastructure Center (EPIC) and the Center for Precision Metrology.",
    "researchAdmissions": "Undergraduate admissions are competitive through the Common Application. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English proficiency (TOEFL 83+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Mechanical Engineering - Motorsports Aerodynamics & Precision Metrology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Lee College of Engineering Graduate Research Assistantships $30,000/year plus full tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Elite automotive and motorsports doctorate partnering with NASCAR teams and precision instrument manufacturers, focusing on race car aerodynamics wind-tunnel testing, nanometer metrology, and composites crashworthiness.",
        "requirements": {"gpa": "BS or MS in Mechanical, Aerospace, or Automotive Engineering with GPA 3.3+", "ielts": "TOEFL 83+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing engineering research focus", "references": "Three letters of recommendation"},
        "source": "https://me.charlotte.edu/graduate-programs/phd-mechanical-engineering"
      },
      {
        "title": "Ph.D. in Computing and Information Systems - FinTech Security & Applied AI",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Bank of America & CCI Doctoral Fellowships $32,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Housed in the largest computing college in the Carolinas, researching automated fraud detection algorithms, blockchain security, financial graph neural networks, and privacy-preserving machine learning.",
        "requirements": {"gpa": "BS or MS in Computer Science, Software Engineering, or Mathematics with GPA 3.4+", "ielts": "TOEFL 83+", "gre": "GRE optional", "papers": "Statement of purpose and research proposal", "references": "Three letters of recommendation"},
        "source": "https://cci.charlotte.edu/academics/phd-computing-and-information-systems"
      },
      {
        "title": "Ph.D. in Electrical Engineering - Smart Grid Power Systems & EPIC Energy Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "EPIC Energy Graduate Fellowships $31,000/year plus complete tuition coverage",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Advanced research based at the Energy Production and Infrastructure Center (EPIC), investigating high-voltage smart grid integration, renewable microgrid stability, silicon carbide power electronics, and utility cyber defenses.",
        "requirements": {"gpa": "BS in Electrical Engineering with GPA 3.2+", "ielts": "TOEFL 83+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://ece.charlotte.edu/graduate-programs/phd-electrical-engineering"
      },
      {
        "title": "Master of Science in Data Science and Business Analytics (DSBA) - FinTech Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "School of Data Science Merit Fellowships up to $12,000",
        "fee": "$75",
        "tuition": "$24,500 total",
        "desc": "Interdisciplinary professional graduate degree uniting machine learning modeling, big data distributed pipelines, quantitative finance, and executive predictive analytics in Uptown Charlotte.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and coursework in calculus, statistics, and programming", "ielts": "TOEFL 83+", "gre": "GRE/GMAT optional", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://datascience.charlotte.edu/academics/ms-data-science-business-analytics"
      },
      {
        "title": "Ph.D. in Optical Science and Engineering - Precision Freeform Optics & Metrology",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Freeform Optics Research Fellowships $32,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Preeminent optics doctoral program pioneering freeform optical fabrication, laser interferometry, nanophotonic waveguides, and astronomical instrumentation at the Center for Precision Metrology.",
        "requirements": {"gpa": "Degree in physics, optics, or electrical engineering with GPA 3.2+", "ielts": "TOEFL 83+", "gre": "GRE optional", "papers": "Statement of research experience", "references": "Three letters of recommendation"},
        "source": "https://optics.charlotte.edu/academic-programs/phd-optical-science-and-engineering"
      },
      {
        "title": "Ph.D. in Infrastructure and Environmental Systems - Urban Stormwater & Water Resources",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate research assistantships $28,500/year plus tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctoral program analyzing urban stormwater runoff quality, green infrastructure modeling, wastewater virus surveillance, and flood mitigation resilience in rapidly urbanizing watersheds.",
        "requirements": {"gpa": "BS or MS in civil/environmental engineering, earth sciences, or biology with GPA 3.0+", "ielts": "TOEFL 83+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://ines.charlotte.edu/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mesbah Uddin",
        "role": "Director & Professor of Mechanical Engineering",
        "department": "North Carolina Motorsports and Automotive Research Center",
        "subject": "engineering",
        "bio": "Dr. Uddin specializes in vehicle aerodynamics, computational fluid dynamics (CFD) of race cars, turbulent wake flows, and thermal management of electric vehicle battery enclosures."
      },
      {
        "name": "Dr. Bolesh Skubic",
        "role": "Professor of Power Engineering",
        "department": "Energy Production and Infrastructure Center (EPIC)",
        "subject": "engineering",
        "bio": "Dr. Skubic investigates renewable electric power grid integration, wide-bandgap power semiconductor switching, microgrid cyber-physical protection, and battery storage modeling."
      },
      {
        "name": "Dr. Angela Davies",
        "role": "Professor of Physics and Optical Science",
        "department": "Center for Precision Metrology & Department of Physics",
        "subject": "physics",
        "bio": "Dr. Davies investigates optical metrology, absolute surface interferometry, freeform optical surface measurement calibration, and precision instrument design for aerospace."
      }
    ]
  }
]
