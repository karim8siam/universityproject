# scripts/make_b70_p2_chunk2.py
# Batch 70 Part 2 Chunk 2: Universities 24 to 30 (Utah Tech, UVU, Villanova, Wake Forest, Walsh, Washburn, WSU)

chunk4 = [
  # 24. Utah Tech University (Row 1192)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Utah Tech University",
    "shortName": "Utah Tech",
    "slug": "utah-tech-university",
    "location": "St. George, Utah, United States",
    "website": "https://utahtech.edu",
    "sourceRow": 1192,
    "stats": {"established": "1911", "students": "12,500+", "international": "4%", "faculty": "520+"},
    "heroSummary": "Utah Tech University is an open-access comprehensive public polytechnic university established in 1911, located in sunny St. George in the red rock country of Southwestern Utah. Renowned for active, hands-on 'open, inclusive, comprehensive, polytechnic' learning in healthcare, software engineering, mechanical engineering, and digital design, Utah Tech connects academic degree programs with the rapidly growing Silicon Slopes South tech economy.",
    "academicOverview": "Utah Tech comprises six colleges: the College of Science, Engineering & Technology, College of Health Sciences, College of Humanities & Social Sciences, College of the Arts, College of Education, and the College of Business. The university operates the Atwood Innovation Plaza and the modern Science, Engineering & Technology Building.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, core coursework, and transcripts with open and test-optional pathways. Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Bachelor of Science in Software Engineering - Autonomous Vehicles & Mobile App Development",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Polytechnic Innovation Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$17,500/year (out-of-state) / $6,100/year (in-state)",
        "desc": "Hands-on polytechnic software engineering degree utilizing the Atwood Innovation Plaza to build production software, mobile applications in Swift/Kotlin, cloud databases, and autonomous robotics firmware.",
        "requirements": {"gpa": "High school GPA 2.5+ with algebra readiness", "ielts": "TOEFL 79+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions application essay", "references": "One recommendation"},
        "source": "https://utahtech.edu/programs/software-engineering/"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering - Mechatronics & Additive Prototyping",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Science & Technology STEM Grants up to $7,000/year",
        "fee": "$35",
        "tuition": "$17,500/year",
        "desc": "Polytechnic engineering curriculum featuring 3D laser scanning, CNC milling, thermal-fluid experimental wind tunnels, finite element simulation, and industry-sponsored capstone prototyping.",
        "requirements": {"gpa": "High school GPA 2.75+ with precalculus or calculus readiness", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One math/science teacher reference"},
        "source": "https://utahtech.edu/programs/mechanical-engineering/"
      },
      {
        "title": "Master of Athletic Training (MAT) - Sports Medicine & Orthopedic Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Health Sciences Clinical Assistantships up to $8,000",
        "fee": "$50",
        "tuition": "$18,500 total",
        "desc": "CAATE-accredited clinical master's program delivering over 1,000 hours of athletic training rotations with NCAA Division I Trailblazers athletics, high schools, and orthopedic surgery clinics.",
        "requirements": {"gpa": "Bachelor's degree with prerequisite GPA 3.0+ and 50+ hours athletic training clinical observation", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "ATCAS personal essay", "references": "Two recommendations (including certified athletic trainer)"},
        "source": "https://utahtech.edu/programs/athletic-training-mat/"
      },
      {
        "title": "Bachelor of Science in Biology - Mojave Desert Field Ecology & Herpetology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate Research Grants and institutional awards up to $6,000/year",
        "fee": "$35",
        "tuition": "$17,500/year",
        "desc": "Situated where the Mojave Desert, Great Basin, and Colorado Plateau converge, studying desert tortoise conservation, endemic Colorado River native fish, and arid land botanical adaptations.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://utahtech.edu/programs/biology/"
      },
      {
        "title": "Bachelor of Science in Digital Design - UI/UX Architecture & 3D Interactive Media",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Creative Arts and Technology Scholarships up to $5,000",
        "fee": "$35",
        "tuition": "$17,500/year",
        "desc": "Hands-on polytechnic design curriculum focusing on user experience (UX) wireframing, interactive mobile prototyping in Figma, motion graphics, 3D digital modeling, and brand design.",
        "requirements": {"gpa": "High school GPA 2.5+ and digital design portfolio (8-10 pieces)", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Design statement", "references": "One recommendation"},
        "source": "https://utahtech.edu/programs/digital-design/"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Acute Care Clinical Practice",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Intermountain Health Nursing Scholarships up to $8,000",
        "fee": "$35",
        "tuition": "$17,500/year",
        "desc": "ACEN-accredited nursing program partnering with St. George Regional Hospital for comprehensive clinical immersion in emergency trauma, neonatal intensive care, and cardiovascular surgery.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+ and TEAS examination", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Nursing statement of purpose", "references": "Two recommendations"},
        "source": "https://utahtech.edu/programs/nursing/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Matthew Schmidt",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Schmidt conducts research in biomechatronics, prosthetic foot design dynamics, kinematic motion capture analysis, and polytechnic engineering pedagogical methods."
      },
      {
        "name": "Dr. Erin O'Brien",
        "role": "Professor of Biology",
        "department": "Department of Biological Sciences",
        "subject": "biology",
        "bio": "Dr. O'Brien investigates plant physiological ecology in arid ecosystems, drought tolerance mechanisms in Mojave Desert succulents, and mycorrhizal symbiosis under climatic stress."
      },
      {
        "name": "Dr. Joe Francom",
        "role": "Associate Professor of Computing",
        "department": "Department of Computing",
        "subject": "computer-science",
        "bio": "Dr. Francom specializes in machine learning architectures, automated computer vision algorithms for agricultural crop inspection, and web application security frameworks."
      }
    ]
  },

  # 25. Utah Valley University (Row 1193)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Utah Valley University",
    "shortName": "UVU",
    "slug": "utah-valley-university",
    "location": "Orem, Utah, United States",
    "website": "https://www.uvu.edu",
    "sourceRow": 1193,
    "stats": {"established": "1941", "students": "43,000+", "international": "5%", "faculty": "1,950+"},
    "heroSummary": "Utah Valley University (UVU) is Utah's largest public university, founded in 1941 on a 225-acre campus in Orem in the heart of Utah's Silicon Slopes tech hub. Nationally celebrated for its dual-mission model combining community college accessibility with rigorous baccalaureate and master's degree programs, UVU is renowned for collegiate aviation, digital media, cybersecurity, mechatronics, and business leadership.",
    "academicOverview": "UVU encompasses eight colleges and schools: the College of Engineering and Technology, Woodbury School of Business, College of Science, College of Health and Public Service, School of the Arts, School of Education, College of Humanities and Social Sciences, and the School of Aviation Sciences. UVU operates its own airport training hub at Provo Municipal Airport.",
    "researchAdmissions": "Undergraduate admissions are open-access and test-optional, evaluating high school credentials. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Aviation - Professional Pilot & Aviation Administration - Provo Airport",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Airline Cadet Flow Scholarships and flight training merit awards up to $10,000",
        "fee": "$35",
        "tuition": "$18,200/year (out-of-state) / $6,200/year (in-state) + flight fees",
        "desc": "Operating a modern fleet of Diamond DA20 and DA40 aircraft at Provo Airport, providing FAA Part 141 commercial flight ratings, multi-engine certification, jet bridge simulation, and airline pathway partnerships with SkyWest and Delta.",
        "requirements": {"gpa": "High school GPA 2.5+ and FAA First/Second Class Medical Certificate", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Aviation statement of intent", "references": "One recommendation"},
        "source": "https://www.uvu.edu/aviation/"
      },
      {
        "title": "Master of Science in Cybersecurity - Incident Response & Cloud Architecture",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Silicon Slopes Tech Industry Fellowships up to $8,000",
        "fee": "$45",
        "tuition": "$18,500 total",
        "desc": "Applied graduate degree aligned with Utah's Silicon Slopes tech corridor, teaching digital forensics investigation, enterprise intrusion detection, penetration testing, and zero-trust cloud network architecture.",
        "requirements": {"gpa": "BS in computer science, cybersecurity, or IT with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and technical resume", "references": "Two letters of recommendation"},
        "source": "https://www.uvu.edu/cybersecurity/graduate/"
      },
      {
        "title": "Bachelor of Science in Digital Audio - Studio Production & Spatial Audio - School of the Arts",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Noorda Center for the Performing Arts Talent Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$18,200/year",
        "desc": "Housed in the Noorda Center, teaching acoustic physics, Dolby Atmos spatial immersive mixing, live concert sound reinforcement, studio tracking in professional consoles, and game audio implementation in Wwise/FMOD.",
        "requirements": {"gpa": "High school GPA 2.5+ and audio production portfolio/audition", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.uvu.edu/digitalmedia/digitalaudio/"
      },
      {
        "title": "Master of Business Administration (MBA) - Technology Commercialization & Leadership - Woodbury School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Woodbury School of Business Endowed Fellowships up to $8,000",
        "fee": "$45",
        "tuition": "$21,000 total",
        "desc": "AACSB-accredited MBA curriculum designed for tech professionals in Silicon Slopes, emphasizing venture capital pitching, technology commercialization, corporate financial modeling, and executive leadership.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and 2+ years professional experience", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.uvu.edu/mba/"
      },
      {
        "title": "Bachelor of Science in Mechatronics Engineering Technology - Robotics & Industrial Automation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Advanced Manufacturing Industry Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$18,200/year",
        "desc": "Applied engineering curriculum teaching programmable logic controllers (PLC), industrial Fanuc robotics programming, pneumatics, hydraulic actuators, and embedded microcontroller interfacing.",
        "requirements": {"gpa": "High school GPA 2.5+ with algebra readiness", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.uvu.edu/et/mechatronics/"
      },
      {
        "title": "Bachelor of Science in Emergency Services - Emergency Management & Homeland Security",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Public Safety First Responder Grants up to $5,000/year",
        "fee": "$35",
        "tuition": "$18,200/year",
        "desc": "Nationally recognized emergency management program covering FEMA incident command systems, disaster response logistics, critical infrastructure protection, and wildfire mitigation planning.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.uvu.edu/es/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Stephen Harper",
        "role": "Associate Professor of Aviation Sciences",
        "department": "School of Aviation Sciences",
        "subject": "engineering",
        "bio": "Dr. Harper conducts research in aviation safety management systems, spatial disorientation in instrument-rated flight pilots, aeronautical decision-making simulations, and unmanned aerial operations."
      },
      {
        "name": "Dr. Matthew Northrop",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Northrop investigates network intrusion detection using deep learning, zero-trust cybersecurity protocols, automated threat intelligence gathering, and secure software development lifecycles."
      },
      {
        "name": "Dr. Ruhul Kuddus",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Kuddus conducts molecular epidemiology research on antibiotic-resistant bacterial strains, bacteriophage therapies, microbial genetics, and waterborne pathogen detection."
      }
    ]
  },

  # 26. Villanova University (Row 1198)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Villanova University",
    "shortName": "Villanova",
    "slug": "villanova-university",
    "location": "Villanova, Pennsylvania, United States",
    "website": "https://www.villanova.edu",
    "sourceRow": 1198,
    "stats": {"established": "1842", "students": "11,000+", "international": "8%", "faculty": "950+"},
    "heroSummary": "Villanova University is a premier private Augustinian Catholic doctoral university founded in 1842 on Philadelphia's historic Main Line in Villanova, Pennsylvania. Renowned for academic excellence at the Villanova School of Business (VSB), the College of Engineering, the Fitzpatrick College of Nursing, and the Charles Widger School of Law, Villanova combines rigorous scholarship with a strong ethical commitment to community service.",
    "academicOverview": "Villanova comprises six colleges: the College of Liberal Arts and Sciences, Villanova School of Business (VSB), College of Engineering, M. Louise Fitzpatrick College of Nursing, Charles Widger School of Law, and the College of Professional Studies. The university operates the Drosdick Innovation Center and the Center for Resilient Water Systems.",
    "researchAdmissions": "Undergraduate admissions are highly competitive through the Common Application. Graduate admissions require an accredited bachelor's degree with a high GPA (typically 3.3+), statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 90+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Engineering - Sustainable Infrastructure & Renewable Thermal Systems - Drosdick Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full 5-year guarantee: $34,000/year stipend, full tuition remission, and health insurance",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Elite doctoral program at the College of Engineering investigating green stormwater infrastructure, nanoscale heat transfer in data centers, structural health monitoring with wireless sensors, and renewable biochemical catalysts.",
        "requirements": {"gpa": "BS or MS in engineering from ABET-accredited institution with GPA 3.4+", "ielts": "TOEFL 90+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of research purpose detailing engineering focus", "references": "Three academic recommendations"},
        "source": "https://www1.villanova.edu/university/engineering/academics/graduate-programs/phd.html"
      },
      {
        "title": "Master of Science in Finance (MSF) - Quantitative Asset Pricing & Financial Engineering - VSB",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Villanova School of Business Merit Scholarships up to $20,000",
        "fee": "$75",
        "tuition": "$44,000 total",
        "desc": "Top-ranked quantitative finance master's teaching valuation of complex derivative instruments, algorithmic high-frequency trading, fixed income portfolio risk modeling, and private equity analysis in Wall Street networks.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.3+ and strong mathematical aptitude (calculus, statistics)", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GMAT/GRE required", "papers": "Two finance admissions essays and resume", "references": "Two recommendations"},
        "source": "https://www1.villanova.edu/university/business/academics/graduate-programs/msf.html"
      },
      {
        "title": "Ph.D. in Nursing Science - Vulnerable Populations & Healthcare Disparities - Fitzpatrick College",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Jonas Philanthropies Doctoral Fellowships $32,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "National League for Nursing Center of Excellence doctorate researching physiological stress pathways in chronic pediatric illnesses, maternal mortality disparities, and community-engaged health interventions.",
        "requirements": {"gpa": "BSN or MSN degree with GPA 3.4+; active RN license", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of research focus", "references": "Three letters of recommendation"},
        "source": "https://www1.villanova.edu/university/nursing/academic-programs/doctoral.html"
      },
      {
        "title": "Juris Doctor (J.D.) - Commercial Law, Corporate Compliance & Social Justice - Widger School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Dean's Merit Scholarships covering 50% to 100% of tuition",
        "fee": "$75",
        "tuition": "$54,000/year",
        "desc": "ABA-accredited law degree featuring the 'Where Law Meets Business' curriculum, integrating practical corporate transactions, legal clinics in federal tax, asylum, and intellectual property, and judicial clerkships.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 100+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www1.villanova.edu/university/law.html"
      },
      {
        "title": "Master of Science in Computer Science - Artificial Intelligence & Distributed Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Assistantships up to $18,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "$26,000/year",
        "desc": "Rigorous graduate computing curriculum exploring deep reinforcement learning, natural language semantic parsing, cybersecurity verification, and distributed consensus protocols.",
        "requirements": {"gpa": "BS in Computer Science or Mathematics with GPA 3.0+", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two letters of recommendation"},
        "source": "https://www1.villanova.edu/university/liberal-arts-sciences/programs/computing-sciences/graduate.html"
      },
      {
        "title": "Ph.D. in Philosophy - Continental Philosophy & Critical Social Theory",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full 5-year departmental fellowships $28,000/year plus complete tuition coverage",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Renowned nationally for 19th and 20th century Continental philosophy, German idealism, phenomenology, psychoanalysis, feminist philosophy, and critical race theory.",
        "requirements": {"gpa": "Bachelor's or master's degree in philosophy with GPA 3.5+", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Philosophical writing sample (15-20 pages) and statement of intent", "references": "Three letters of recommendation"},
        "source": "https://www1.villanova.edu/university/liberal-arts-sciences/programs/philosophy/graduate.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert Traver",
        "role": "Professor of Civil & Environmental Engineering & Director",
        "department": "Villanova Center for Resilient Water Systems",
        "subject": "environment",
        "bio": "Dr. Traver is an international authority on urban stormwater management, leading the EPA-recognized Villanova Urban Stormwater Park and studying bio-infiltration rain gardens and green infrastructure hydraulics."
      },
      {
        "name": "Dr. Amy Fleischer",
        "role": "Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Fleischer investigates electronic thermal management, thermal energy storage using phase change materials, microfluidics heat exchangers, and boiling heat transfer physics."
      },
      {
        "name": "Dr. Mirela Damian",
        "role": "Professor of Computer Science",
        "department": "Department of Computing Sciences",
        "subject": "computer-science",
        "bio": "Dr. Damian specializes in computational geometry, graph theory, robotic path planning algorithms, and geometric routing in ad hoc wireless sensor networks."
      }
    ]
  },

  # 27. Wake Forest University (Row 1199)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wake Forest University",
    "shortName": "Wake Forest",
    "slug": "wake-forest-university",
    "location": "Winston-Salem, North Carolina, United States",
    "website": "https://www.wfu.edu",
    "sourceRow": 1199,
    "stats": {"established": "1834", "students": "8,900+", "international": "10%", "faculty": "1,100+"},
    "heroSummary": "Wake Forest University is a top-30 premier private collegiate university founded in 1834, situated on a picturesque 340-acre campus in Winston-Salem, North Carolina. Governed by the motto Pro Humanitate ('For Humanity'), Wake Forest is internationally celebrated for pioneering organ 3D bioprinting at the Wake Forest Institute for Regenerative Medicine (WFIRM), law, biomedical sciences, and undergraduate teaching excellence.",
    "academicOverview": "Wake Forest comprises seven colleges and schools: Wake Forest College, the School of Medicine, School of Business, School of Law, Graduate School of Arts and Sciences, and the School of Divinity. The campus houses the world-famous Wake Forest Institute for Regenerative Medicine (WFIRM) in the Innovation Quarter in downtown Winston-Salem.",
    "researchAdmissions": "Undergraduate admissions are highly selective (test-optional holistic review via Common App). Graduate admissions require an accredited bachelor's degree with a high GPA (typically 3.4+), statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 95+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Regenerative Medicine and Tissue Engineering - Organ 3D Bioprinting - WFIRM",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year guarantee: $36,000/year stipend, full tuition remission, and health insurance",
        "fee": "$80",
        "tuition": "Covered by fellowship",
        "desc": "World-leading doctoral program based at the Wake Forest Institute for Regenerative Medicine (WFIRM), engineering human replacement organs, 3D bioprinted skin and bladders, stem cell decellularization, and microfluidic organ-on-a-chip platforms for drug testing.",
        "requirements": {"gpa": "BS or MS in bioengineering, biology, chemistry, or materials science with GPA 3.5+", "ielts": "TOEFL 95+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Personal statement detailing tissue engineering interests", "references": "Three letters from research mentors"},
        "source": "https://school.wakehealth.edu/education-and-training/graduate-programs/phd-programs/molecular-medicine-and-translational-science"
      },
      {
        "title": "Ph.D. in Cancer Biology - Tumor Microenvironment & Precision Oncology - Comprehensive Cancer Center",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "NCI-funded pre-doctoral traineeships $36,000/year plus full tuition waiver",
        "fee": "$80",
        "tuition": "Covered by fellowship",
        "desc": "Elite NCI-designated comprehensive cancer center doctorate investigating immune checkpoint blockade therapy, cancer metabolism reprogramming, epigenetic gene silencing, and clinical biomarker trials.",
        "requirements": {"gpa": "Undergraduate degree in life sciences with GPA 3.3+ and wet-lab research experience", "ielts": "TOEFL 95+", "gre": "GRE not accepted", "papers": "Statement of research background and goals", "references": "Three academic references"},
        "source": "https://school.wakehealth.edu/education-and-training/graduate-programs/phd-programs/cancer-biology"
      },
      {
        "title": "Master of Science in Business Analytics (MSBA) - Predictive Modeling & Financial Tech - School of Business",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Business Merit Fellowships up to $22,000",
        "fee": "$100",
        "tuition": "$53,500 total",
        "desc": "Top-tier STEM-certified analytics degree partnering with corporate sponsors (Amazon, ExxonMobil, Inmar) for live practicum capstones, teaching machine learning, SQL big data querying, and visual analytics.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.2+ and strong quantitative background", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GMAT/GRE optional", "papers": "Two admissions essays and professional resume", "references": "Two letters of recommendation"},
        "source": "https://business.wfu.edu/msba/"
      },
      {
        "title": "Ph.D. in Physics - Organic Electronics & Nanoscale Quantum Materials",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Nanotechnology and Molecular Materials Fellowships $32,000/year plus tuition remission",
        "fee": "$80",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research at the Center for Nanotechnology and Molecular Materials exploring flexible organic solar photovoltaics, field-effect transistors, topological quantum insulators, and biological physics imaging.",
        "requirements": {"gpa": "BS in Physics, Applied Physics, or Chemistry with GPA 3.3+", "ielts": "TOEFL 90+", "gre": "Physics GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://physics.wfu.edu/graduate-program/"
      },
      {
        "title": "Juris Doctor (J.D.) - Health Law & Intellectual Property - School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Wake Forest Law Dean's Scholarships up to full tuition",
        "fee": "$75",
        "tuition": "$51,500/year",
        "desc": "Top-tier law program celebrated for legal writing, clinical trial healthcare law, biotechnology patent prosecution, environmental litigation, and appellate advocacy at the Worrell Professional Center.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 100+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://law.wfu.edu/"
      },
      {
        "title": "Master of Science in Biomedical Engineering - Biomechanics & Medical Device Innovation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Joint Virginia Tech-Wake Forest School of Biomedical Engineering Assistantships $26,000/year plus tuition waiver",
        "fee": "$80",
        "tuition": "Covered by assistantship",
        "desc": "Joint graduate program with Virginia Tech (VT-WFU SBES) located in the Innovation Quarter, researching vehicular crash injury biomechanics, brain trauma concussion mechanics, and diagnostic ultrasound devices.",
        "requirements": {"gpa": "BS in engineering, physical sciences, or mathematics with GPA 3.2+", "ielts": "TOEFL 95+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://school.wakehealth.edu/departments/biomedical-engineering"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Anthony Atala",
        "role": "Director & Chair of Urology",
        "department": "Wake Forest Institute for Regenerative Medicine (WFIRM)",
        "subject": "biology",
        "bio": "Dr. Atala is a world-renowned pioneer in regenerative medicine, creator of the first laboratory-grown organ (bladder) successfully transplanted into a human patient, and developer of 3D human tissue bioprinters."
      },
      {
        "name": "Dr. David Carroll",
        "role": "Director & Professor of Physics",
        "department": "Center for Nanotechnology and Molecular Materials",
        "subject": "physics",
        "bio": "Dr. Carroll investigates organic semiconductors, flexible thermoelectric power generators, carbon nanotube composites, and nanophotonic light-emitting devices."
      },
      {
        "name": "Dr. Joel Stitzel",
        "role": "Chair & Professor of Biomedical Engineering",
        "department": "Virginia Tech-Wake Forest School of Biomedical Engineering and Sciences",
        "subject": "engineering",
        "bio": "Dr. Stitzel leads international research on head impact biomechanics in collegiate football players, finite element human body crash injury modeling, and automotive occupant safety."
      }
    ]
  },

  # 28. Walsh College (Row 1200)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Walsh College",
    "shortName": "Walsh",
    "slug": "walsh-college",
    "location": "Troy, Michigan, United States",
    "website": "https://walshcollege.edu",
    "sourceRow": 1200,
    "stats": {"established": "1922", "students": "1,900+", "international": "6%", "faculty": "130+"},
    "heroSummary": "Walsh College is an independent, non-profit business and technology institution founded in 1922, situated in Troy, Michigan, within the vibrant Metro Detroit commercial corridor. Renowned for practical, practitioner-taught business education, Walsh is celebrated for its premier Master of Accountancy with outstanding CPA pass rates, cybersecurity at the Cyber Lab, and automotive corporate finance.",
    "academicOverview": "Walsh specializes exclusively in upper-division undergraduate and graduate education across two main divisions: the School of Business and the School of Technology. Walsh operates the state-of-the-art Center for Cybersecurity Leadership and Defense and the Finance Lab featuring Bloomberg terminals.",
    "researchAdmissions": "Undergraduate transfer admissions evaluate prior college coursework (minimum 60 semester credits or associate degree with GPA 2.0+). Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, professional resume, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Information Technology Leadership - Enterprise Cyber Defense - Cyber Lab",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Center for Cybersecurity Leadership Scholarships up to $6,000",
        "fee": "$50",
        "tuition": "$21,500 total",
        "desc": "NSA-designated cybersecurity curriculum taught in the Walsh Cyber Lab, covering industrial control systems protection, cloud orchestration, enterprise threat modeling, and executive incident response.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+; technology background or professional experience", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE/GMAT not required", "papers": "Professional goal statement and resume", "references": "Two professional references"},
        "source": "https://walshcollege.edu/programs/ms-it-leadership"
      },
      {
        "title": "Master of Accountancy (MAC) - Corporate Taxation & Forensic Accounting",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Walsh Alumni Endowed Accounting Fellowships up to $8,000",
        "fee": "$50",
        "tuition": "$22,000 total",
        "desc": "ACBSP-accredited accounting master's with an exceptional record of CPA examination pass rates, delivering advanced training in forensic auditing, international tax structures, and corporate governance.",
        "requirements": {"gpa": "Undergraduate degree in accounting or business with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://walshcollege.edu/programs/master-of-accountancy"
      },
      {
        "title": "Master of Science in Finance (MSF) - Corporate Valuation & Portfolio Engineering",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Finance Lab Merit Fellowships up to $7,000",
        "fee": "$50",
        "tuition": "$22,000 total",
        "desc": "Practical finance curriculum utilizing the Walsh Bloomberg Finance Lab to teach capital budgeting, corporate restructuring, merger and acquisition modeling, and financial risk hedging.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+ and quantitative aptitude", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://walshcollege.edu/programs/ms-finance"
      },
      {
        "title": "Master of Business Administration (MBA) - Automotive Supply Chain & Strategic Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Walsh Executive Leadership Grants up to $6,000",
        "fee": "$50",
        "tuition": "$24,500 total",
        "desc": "Practitioner-focused MBA curriculum tailored for Metro Detroit corporate executives, focusing on global automotive supply resilience, manufacturing operations, and corporate strategy.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+ and professional work experience", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Professional statement and resume", "references": "Two professional references"},
        "source": "https://walshcollege.edu/programs/mba"
      },
      {
        "title": "Master of Science in Data Analytics - Machine Learning for Business Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Business Intelligence Merit Awards up to $6,000",
        "fee": "$50",
        "tuition": "$21,500 total",
        "desc": "Applied data science degree teaching predictive customer analytics, Python data wrangling, Tableau dashboard engineering, SQL data warehousing, and ethical AI in business.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+; statistics or quantitative coursework", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://walshcollege.edu/programs/ms-data-analytics"
      },
      {
        "title": "Bachelor of Science in Information Technology - Network Security & Cloud Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate Transfer Merit Grants up to $5,000/year",
        "fee": "$35",
        "tuition": "$18,500/year",
        "desc": "Upper-division degree preparing network administrators and security analysts with hands-on labs in cloud containerization, Linux systems, penetration testing, and enterprise database systems.",
        "requirements": {"gpa": "Minimum 60 transferable college credits with GPA 2.0+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://walshcollege.edu/programs/bs-information-technology"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Richard Chua",
        "role": "Professor of Operations Management",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Chua specializes in Lean Six Sigma manufacturing methodologies, automotive supply chain quality control, project management frameworks, and operational process analytics."
      },
      {
        "name": "Dr. Dave Schippers",
        "role": "Chair & Associate Professor of Technology",
        "department": "Center for Cybersecurity Leadership & Defense",
        "subject": "computer-science",
        "bio": "Dr. Schippers leads research on connected automotive vehicle cybersecurity, in-vehicle network protocols, industrial supervisory control systems defense, and digital forensics."
      },
      {
        "name": "Dr. John Finch",
        "role": "Professor of Finance",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Finch conducts applied research in corporate restructuring, capital expenditure optimization in automotive Tier 1 suppliers, and financial modeling with Bloomberg terminals."
      }
    ]
  },

  # 29. Washburn University (Row 1201)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Washburn University",
    "shortName": "Washburn",
    "slug": "washburn-university",
    "location": "Topeka, Kansas, United States",
    "website": "https://www.washburn.edu",
    "sourceRow": 1201,
    "stats": {"established": "1865", "students": "5,800+", "international": "5%", "faculty": "480+"},
    "heroSummary": "Washburn University is a historic public municipal university founded in 1865 on a 160-acre campus in Topeka, the capital city of Kansas. Famous for the Washburn University School of Law—where landmark constitutional jurisprudence including Brown v. Board of Education was argued—Washburn is also celebrated for state-of-the-art forensic science at the KBI Forensic Science Center, nursing, and business.",
    "academicOverview": "Washburn comprises six academic units: the College of Arts and Sciences, Washburn University School of Law, School of Business, School of Nursing, School of Applied Studies, and the Washburn Institute of Technology. The campus hosts the Kansas Bureau of Investigation (KBI) Forensic Science Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) and coursework. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Advocacy & Oil and Gas Law - Washburn University School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Washburn Law Merit Scholarships covering 50% to 100% of tuition",
        "fee": "$50",
        "tuition": "$24,500/year (resident) / $38,500/year (non-resident)",
        "desc": "ABA-accredited law degree housed in the new Robert J. Dole Hall, featuring nationally celebrated centers in Trial Advocacy, Oil and Gas Mineral Law, and the Washburn Law Clinic in the state capital.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 90+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www.washburnlaw.edu/admissions/"
      },
      {
        "title": "Bachelor of Science in Forensic Chemical Science - KBI Forensic Science Center",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Kansas Bureau of Investigation Science Scholarships up to $8,000/year",
        "fee": "$35",
        "tuition": "$17,800/year (out-of-state) / $9,100/year (in-state)",
        "desc": "Housed inside the on-campus Kansas Bureau of Investigation (KBI) Forensic Science Center, offering direct lab experience in gas chromatography-mass spectrometry (GC-MS), forensic toxicology, narcotics analysis, and trace microscopy.",
        "requirements": {"gpa": "High school GPA 2.75+ with strong chemistry and mathematics", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Admissions essay", "references": "One science recommendation"},
        "source": "https://www.washburn.edu/academics/college-schools/arts-sciences/departments/chemistry-physics/forensic-chemical-science.html"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner & Psychiatric Mental Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "HRSA Advanced Nursing Traineeships up to $10,000",
        "fee": "$50",
        "tuition": "$22,500/year",
        "desc": "CCNE-accredited practice doctorate preparing advanced practice registered nurses in primary care diagnostic management, psychiatric psychopharmacology, and healthcare systems leadership.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.0+; unencumbered Kansas RN license", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "DNP personal goal statement", "references": "Three professional references"},
        "source": "https://www.washburn.edu/academics/college-schools/nursing/dnp/index.html"
      },
      {
        "title": "Master of Business Administration (MBA) - Corporate Finance & Capital Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "School of Business Endowed Fellowships up to $6,000",
        "fee": "$40",
        "tuition": "$16,000 total",
        "desc": "AACSB-accredited evening and hybrid MBA curriculum teaching investment valuation, managerial economics, supply chain resilience, and corporate strategy in the Topeka business hub.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.washburn.edu/academics/college-schools/business/mba/index.html"
      },
      {
        "title": "Bachelor of Science in Computer Information Science - Digital Forensics & Software Engineering",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Achievement Awards up to $6,000/year",
        "fee": "$35",
        "tuition": "$17,800/year",
        "desc": "Practical computing program teaching digital evidence recovery, mobile device forensics, database architecture, network defense systems, and full-stack software development.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.washburn.edu/academics/college-schools/arts-sciences/departments/computer-information-sciences/index.html"
      },
      {
        "title": "Master of Arts in Communication and Leadership - Public Relations & Crisis Strategy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships up to $10,000",
        "fee": "$40",
        "tuition": "$14,500 total",
        "desc": "Interdisciplinary master's leveraging the state capital political hub to train executives in strategic crisis communication, public affairs lobbying, organizational leadership, and social media analytics.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of goals and writing sample", "references": "Two letters of recommendation"},
        "source": "https://www.washburn.edu/academics/college-schools/arts-sciences/departments/communication/graduate/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shaun Schmidt",
        "role": "Professor & Chair of Chemistry",
        "department": "Department of Chemistry and Physics & KBI Center",
        "subject": "chemistry",
        "bio": "Dr. Schmidt conducts forensic analytical research on chemical drug profiling, spectroscopic characterization of illicit designer drugs, and environmental heavy metal trace analysis."
      },
      {
        "name": "Dr. Jeffrey Jackson",
        "role": "Professor of Law & Director",
        "department": "Center for Excellence in Advocacy & Washburn School of Law",
        "subject": "social-sciences",
        "bio": "Dr. Jackson specializes in constitutional law, federal civil rights litigation, appellate courtroom procedure, and administrative law in state and federal courts."
      },
      {
        "name": "Dr. Rodrigo Mercader",
        "role": "Associate Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Mercader investigates evolutionary insect ecology, plant-herbivore chemical defense interactions, invasive pest spread dynamics in Great Plains agroecosystems, and population genetics."
      }
    ]
  },

  # 30. Washington State University (Row 1202)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Washington State University",
    "shortName": "WSU",
    "slug": "washington-state-university",
    "location": "Pullman, Washington, United States",
    "website": "https://wsu.edu",
    "sourceRow": 1202,
    "stats": {"established": "1890", "students": "29,800+", "international": "8%", "faculty": "2,150+"},
    "heroSummary": "Washington State University (WSU) is Washington's statewide flagship public land-grant Carnegie R1 research university, founded in 1890 in the rolling Palouse hills of Pullman, Washington. Renowned worldwide for agricultural science and tree fruit genomics, veterinary medicine at the College of Veterinary Medicine, smart power grid electric transmission at the Energy Systems Innovation Center, and clean hydrogen technology, WSU drives transformative research across the Pacific Northwest.",
    "academicOverview": "WSU encompasses 11 academic colleges including the Voiland College of Engineering and Architecture; College of Agricultural, Human, and Natural Resource Sciences (CAHNRS); College of Veterinary Medicine; Elson S. Floyd College of Medicine; and the Carson College of Business. Key research hubs include the Energy Systems Innovation Center (ESIC) and the Hydrogen Properties for Energy Research (HYPER) Laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic performance, GPA, and curriculum. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Electrical and Computer Engineering - Smart Grid Resiliency - Energy Systems Innovation Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-10",
        "deadlineText": "January 10, 2027",
        "funding": "Full ESIC Graduate Research Fellowships $34,000/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Internationally renowned power engineering doctorate collaborating with Schweitzer Engineering Laboratories (SEL) on wide-area synchrophasor protection, renewable microgrid stability, and cyber-attack defense on high-voltage transmission lines.",
        "requirements": {"gpa": "BS or MS in electrical engineering or related STEM field with GPA 3.4+", "ielts": "TOEFL 80+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose detailing power systems focus", "references": "Three letters of recommendation"},
        "source": "https://eecs.wsu.edu/academics/graduate-programs/"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Cryogenic Hydrogen Fueling & Aerospace Liquids - HYPER Lab",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "HYPER Lab Graduate Research Assistantships $33,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Operating the premier Hydrogen Properties for Energy Research (HYPER) Laboratory, researching liquid hydrogen aircraft tank fueling, cryogenic 3D printing, boil-off zero-loss storage, and liquid hydrogen drone propulsion.",
        "requirements": {"gpa": "BS in mechanical, aerospace, or chemical engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://mme.wsu.edu/graduate-programs/"
      },
      {
        "title": "Doctor of Veterinary Medicine (DVM) - Agricultural Livestock & Small Animal Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "College of Veterinary Medicine Institutional Scholarships up to $15,000/year",
        "fee": "$75",
        "tuition": "$28,000/year (resident) / $63,000/year (non-resident)",
        "desc": "Top-tier veterinary medicine doctorate featuring clinical immersion in the Veterinary Teaching Hospital, equine orthopedic surgery, dairy cattle production medicine, and infectious zoonotic disease diagnostics.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+ with minimum 400 hours veterinary/animal clinical experience", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "VMCAS application essay", "references": "Three letters (including at least one practicing veterinarian)"},
        "source": "https://vetmed.wsu.edu/education/dvm/"
      },
      {
        "title": "Ph.D. in Horticulture - Tree Fruit Genomics & Precision Orchards - CAHNRS",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Washington Tree Fruit Research Commission Fellowships $32,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "The nation's leading tree fruit research doctorate (home of the famous Cosmic Crisp apple), conducting apple and sweet cherry breeding, robotic fruit harvesting, and orchard sensor phenotyping.",
        "requirements": {"gpa": "BS or MS in horticulture, plant biology, agronomy, or genetics with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research experience", "references": "Three letters of recommendation"},
        "source": "https://horticulture.wsu.edu/graduate-programs/"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Cyber-Physical Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-10",
        "deadlineText": "January 10, 2027",
        "funding": "Graduate Teaching/Research Assistantships $32,000/year plus complete tuition coverage",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Advanced doctoral curriculum addressing multi-agent reinforcement learning, smart health wearable sensor systems, graph neural networks, and energy-efficient hardware architectures.",
        "requirements": {"gpa": "BS in Computer Science or Computer Engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://eecs.wsu.edu/academics/graduate-programs/"
      },
      {
        "title": "Ph.D. in Environmental and Natural Resource Sciences - Palouse Watershed Hydrology & Soil Health",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "USDA and CAHNRS Research Assistantships $30,000/year plus tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary environmental doctorate studying Palouse soil erosion mitigation, agricultural dryland nitrogen dynamics, stream water temperature modeling, and forest wildfire recovery.",
        "requirements": {"gpa": "Degree in environmental science, soil science, forestry, or biology with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://envs.wsu.edu/graduate-studies/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Anurag Srivastava",
        "role": "Professor of Electrical Engineering",
        "department": "Energy Systems Innovation Center (ESIC)",
        "subject": "engineering",
        "bio": "Dr. Srivastava investigates electric power grid cyber-physical resilience, synchrophasor data analytics, real-time power system simulation, and automated microgrid restoration."
      },
      {
        "name": "Dr. Jacob Leachman",
        "role": "Associate Professor of Mechanical and Materials Engineering",
        "department": "Hydrogen Properties for Energy Research (HYPER) Laboratory",
        "subject": "engineering",
        "bio": "Dr. Leachman directs the HYPER Lab, specializing in cryogenic liquid hydrogen fueling systems, rocket propellant thermodynamic modeling, and 3D printing of aerospace cryogens."
      },
      {
        "name": "Dr. Kate Evans",
        "role": "Professor of Horticulture & Apple Breeder",
        "department": "Tree Fruit Research and Extension Center & CAHNRS",
        "subject": "biology",
        "bio": "Dr. Evans directs WSU's pome fruit breeding program, leading the development, marker-assisted selection, and commercialization of new apple cultivars including the Cosmic Crisp."
      }
    ]
  }
]
