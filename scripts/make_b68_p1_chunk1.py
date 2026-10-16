# scripts/make_b68_p1_chunk1.py
# Batch 68 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. University of Wisconsin–Madison (Row 1045)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wisconsin–Madison",
    "shortName": "UW–Madison",
    "slug": "university-of-wisconsin-madison",
    "location": "Madison, Wisconsin, United States",
    "website": "https://www.wisc.edu",
    "sourceRow": 1045,
    "stats": {"established": "1848", "students": "49,000+", "international": "11%", "faculty": "2,300+"},
    "heroSummary": "The University of Wisconsin–Madison, founded in 1848 as the state's flagship land-grant institution, is a world-class Carnegie R1 research university situated on the shores of Lake Mendota in Madison, Wisconsin. Celebrated for the 'Wisconsin Idea'—the principle that university research should improve lives across the globe—UW–Madison is internationally renowned for stem cell discovery, limnology, computer sciences, biochemistry, and agricultural innovation.",
    "academicOverview": "UW–Madison spans 13 schools and colleges, including the College of Letters & Science, College of Engineering, School of Medicine and Public Health, and the School of Computer, Data & Information Sciences (CDIS). With over $1.5 billion in annual research expenditures, the university houses the Wisconsin Institute for Discovery, the Center for Limnology, and the McArdle Laboratory for Cancer Research.",
    "researchAdmissions": "Undergraduate admissions are highly competitive through the Common Application (holistic review; middle 50% GPA 3.8–4.0; test-optional). Graduate and doctoral admissions require an accredited bachelor's degree, strong GPA (minimum 3.0–3.5 depending on program), letters of recommendation, and research statements.",
    "opps": [
      {
        "title": "Ph.D. in Computer Sciences - School of Computer, Data & Information Sciences",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year guarantee: $36,000/year stipend, complete tuition remission, and health insurance",
        "fee": "$75",
        "tuition": "Covered by fellowship/RA",
        "desc": "World-renowned doctoral curriculum with research concentrations in distributed operating systems, database architecture, machine learning, computer architecture, and quantum computing.",
        "requirements": {"gpa": "BS or MS in Computer Science, Mathematics, or related STEM field with GPA 3.5+", "ielts": "TOEFL 92+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose detailing research experience and faculty matches", "references": "Three letters of recommendation"},
        "source": "https://www.cs.wisc.edu/academics/graduate-programs/phd/"
      },
      {
        "title": "Ph.D. in Cellular and Molecular Biology (CMB) - Interdepartmental Training",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "NIH-funded graduate traineeships $37,000/year plus full tuition and comprehensive health coverage",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Elite multidisciplinary training program uniting over 200 faculty laboratories across oncology, developmental genetics, stem cell biology, and structural virology.",
        "requirements": {"gpa": "Undergraduate degree in biological or chemical sciences with GPA 3.3+; minimum 1 year wet-lab research experience", "ielts": "TOEFL 92+", "gre": "GRE not accepted", "papers": "Research statement and reasons for graduate study", "references": "Three letters from research mentors"},
        "source": "https://cmb.wisc.edu/admissions/"
      },
      {
        "title": "Ph.D. in Chemical and Biological Engineering - Catalysis & Biomolecular Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate research fellowship $38,000/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Historically distinguished doctoral department pioneering electrocatalysis, sustainable polymer manufacturing, biomolecular engineering, and computational thermodynamics.",
        "requirements": {"gpa": "BS in Chemical Engineering or allied STEM discipline with GPA 3.4+", "ielts": "TOEFL 92+", "gre": "GRE not required", "papers": "Statement of purpose and CV", "references": "Three academic recommendations"},
        "source": "https://engineering.wisc.edu/departments/chemical-biological-engineering/academics/graduate-programs/phd/"
      },
      {
        "title": "Master of Science in Freshwater and Marine Sciences - Center for Limnology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships up to $28,000/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Pioneering aquatic ecosystem research utilizing the Hasler Limnology Laboratory and Trout Lake Station to study lake water chemistry, toxic algal blooms, and climate impacts on fisheries.",
        "requirements": {"gpa": "Undergraduate degree in biology, environmental science, or geology with GPA 3.0+; faculty advisor sponsorship", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Research interests statement", "references": "Three recommendation letters"},
        "source": "https://limnology.wisc.edu/academics/graduate-program/"
      },
      {
        "title": "Ph.D. in Economics - Macroeconomics, Econometrics & Labor Markets",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Departmental Fellowships $34,000/year plus full tuition remission for 5 years",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Top-tier doctoral program renowned for advanced microeconomic theory, industrial organization, applied econometrics, and public economics.",
        "requirements": {"gpa": "Strong mathematical preparation (real analysis, multivariable calculus, linear algebra); undergraduate GPA 3.5+", "ielts": "TOEFL 92+", "gre": "GRE General required", "papers": "Statement of purpose", "references": "Three academic references"},
        "source": "https://econ.wisc.edu/doctoral/"
      },
      {
        "title": "Master of Science in Data Engineering - Cloud & Big Data Architectures",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "CDIS Professional Merit Awards up to $15,000",
        "fee": "$75",
        "tuition": "$32,000 total",
        "desc": "Accelerated professional master's emphasizing scalable data pipelines, distributed systems infrastructure, cloud data warehousing, and modern machine learning deployment.",
        "requirements": {"gpa": "BS in Computer Science, Engineering, or quantitative field with GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Professional goals essay", "references": "Two recommendations"},
        "source": "https://cdis.wisc.edu/academics/ms-data-engineering/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. James Thomson",
        "role": "Emeritus Professor & Pioneer of Stem Cell Biology",
        "department": "Department of Cell and Regenerative Biology",
        "subject": "biology",
        "bio": "Dr. Thomson led the landmark team that first isolated human embryonic stem cells in 1998 and human induced pluripotent stem cells in 2007, fundamentally transforming regenerative medicine."
      },
      {
        "name": "Dr. Remzi Arpaci-Dusseau",
        "role": "Vilas Distinguished Achievement Professor of Computer Sciences",
        "department": "School of Computer, Data & Information Sciences",
        "subject": "computer-science",
        "bio": "Dr. Arpaci-Dusseau is an ACM Fellow specializing in storage systems, file system reliability, distributed operating architectures, and cloud computing data infrastructures."
      },
      {
        "name": "Dr. Monica Turner",
        "role": "Eugene P. Odum Professor of Ecology",
        "department": "Department of Integrative Biology",
        "subject": "environment",
        "bio": "Dr. Turner is a National Academy of Sciences member who pioneered the discipline of landscape ecology, researching forest resilience, climate shifts, and ecosystem recovery following Yellowstone wildfires."
      }
    ]
  },

  # 2. University of California, San Francisco (Row 1046)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of California, San Francisco",
    "shortName": "UCSF",
    "slug": "university-of-california-san-francisco",
    "location": "San Francisco, California, United States",
    "website": "https://www.ucsf.edu",
    "sourceRow": 1046,
    "stats": {"established": "1864", "students": "3,200+", "international": "14%", "faculty": "2,700+"},
    "heroSummary": "The University of California, San Francisco (UCSF) is the world's premier academic health sciences center and the only campus in the University of California system dedicated exclusively to graduate and professional education in health and biomedical sciences. Located across historic Parnassus Heights and Mission Bay in San Francisco, UCSF is the leading public recipient of National Institutes of Health (NIH) research funding in the nation.",
    "academicOverview": "UCSF comprises the School of Medicine, School of Pharmacy, School of Dentistry, School of Nursing, and Graduate Division. Its researchers have won six Nobel Prizes and made historic breakthroughs, including discovering oncogenes, developing recombinant DNA techniques, creating hepatitis B vaccines, and inventing artificial gene therapies.",
    "researchAdmissions": "Admissions are among the most selective in the world. Medical programs require AMCAS applications, CASPer exams, MCAT scores, and substantial clinical exposure. Biomedical doctoral programs are fully funded through the Graduate Division and require extensive bench research experience, academic transcripts, and letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Sciences (BMS) - Interdisciplinary Graduate Program",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year support: $48,000/year living stipend, 100% tuition coverage, and comprehensive healthcare",
        "fee": "$135 (waivers available)",
        "tuition": "Covered by fellowship/RA",
        "desc": "Elite doctoral program integrating mammalian genetics, cancer biology, immunology, vascular biology, and developmental biology across Mission Bay and Parnassus campuses.",
        "requirements": {"gpa": "Undergraduate degree in life sciences, chemistry, or physics with GPA 3.5+; minimum 1-2 years intensive research experience", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GRE not accepted", "papers": "Personal statement and detailed research summary", "references": "Three letters from research advisors"},
        "source": "https://bms.ucsf.edu/admissions"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Bridges Medical Curriculum",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-10-15",
        "deadlineText": "October 15, 2027",
        "funding": "UCSF School of Medicine Merit & Need-based Scholarships up to full 4-year tuition",
        "fee": "$130 (AMCAS + Secondary)",
        "tuition": "$44,800/year (resident) / $57,000/year (non-resident)",
        "desc": "Nationally top-ranked medical doctorate featuring the innovative Bridges curriculum, early clinical clerkships at UCSF Medical Center and Zuckerberg San Francisco General Hospital.",
        "requirements": {"gpa": "Science GPA 3.8+; MCAT score (517+ median); AMCAS application and CASPer exam", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and secondary application essays", "references": "Pre-health committee composite letter or three academic references"},
        "source": "https://meded.ucsf.edu/admissions"
      },
      {
        "title": "Ph.D. in Pharmaceutical Sciences and Pharmacogenomics (PSPG)",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Guaranteed full stipend $48,000/year plus 100% tuition and fees",
        "fee": "$135",
        "tuition": "Covered by fellowship",
        "desc": "World-leading doctoral program investigating computational drug discovery, drug delivery nanotechnology, membrane transporter biology, and personalized pharmacogenomics.",
        "requirements": {"gpa": "BS in Pharmacy, Chemistry, Bioengineering, or Biology with GPA 3.4+; laboratory research experience", "ielts": "TOEFL 100+", "gre": "GRE not accepted", "papers": "Research statement and professional objectives", "references": "Three faculty recommendation letters"},
        "source": "https://pspg.ucsf.edu/admissions"
      },
      {
        "title": "Ph.D. in Neuroscience - Neuroscience Graduate Program",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full funding package $48,000/year stipend, full tuition remission, and health benefits",
        "fee": "$135",
        "tuition": "Covered by fellowship",
        "desc": "Premier neuroscience doctoral training exploring synaptic transmission, neural circuits, sensory perception, neurodegenerative pathology, and cognitive neurobiology.",
        "requirements": {"gpa": "Bachelor's degree in neuroscience, biology, physics, or psychology with GPA 3.5+; rigorous laboratory research", "ielts": "TOEFL 100+", "gre": "GRE not accepted", "papers": "Statement of purpose detailing neuroscience research", "references": "Three research mentor recommendations"},
        "source": "https://neuroscience.ucsf.edu/admissions"
      },
      {
        "title": "Master of Science in Global Health Sciences - Institute for Global Health Sciences",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Global Health Dean's Scholarships up to $20,000",
        "fee": "$135",
        "tuition": "$52,000 total",
        "desc": "One-year intensive interdisciplinary master's curriculum combining epidemiology, infectious disease control, global health policy, and an international field capstone project.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; demonstrated passion for global health equity", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "Statement of purpose and global health capstone proposal", "references": "Three letters of recommendation"},
        "source": "https://globalhealthsciences.ucsf.edu/education-training/master-of-science-in-global-health-sciences"
      },
      {
        "title": "Ph.D. in Bioengineering - UC Berkeley & UCSF Joint Graduate Program",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year joint fellowship $48,000/year stipend, complete tuition and healthcare",
        "fee": "$135",
        "tuition": "Covered by joint fellowship",
        "desc": "Joint doctoral program combining Berkeley's engineering excellence with UCSF's premier clinical medical environment to pioneer biomedical imaging, bioMEMS, and synthetic biology.",
        "requirements": {"gpa": "BS or MS in Bioengineering, Electrical/Mechanical Engineering, Physics, or Math with GPA 3.5+", "ielts": "TOEFL 100+", "gre": "GRE not accepted", "papers": "Joint research proposal and faculty mentor interests", "references": "Three letters of recommendation"},
        "source": "https://bioeng.berkeley.edu/program/joint-phd"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shinya Yamanaka",
        "role": "Nobel Laureate & Senior Investigator",
        "department": "Gladstone Institutes & Department of Anatomy",
        "subject": "biology",
        "bio": "Dr. Yamanaka shared the 2012 Nobel Prize in Physiology or Medicine for the breakthrough discovery that mature cells can be reprogrammed to become pluripotent stem cells (iPSCs)."
      },
      {
        "name": "Dr. Jennifer Doudna",
        "role": "Nobel Laureate & Adjunct Professor",
        "department": "Department of Cellular and Molecular Pharmacology",
        "subject": "biology",
        "bio": "Dr. Doudna received the 2020 Nobel Prize in Chemistry for co-developing CRISPR-Cas9 genome editing, continuing translational biomedical genome editing research at Gladstone and UCSF."
      },
      {
        "name": "Dr. Kevan Shokat",
        "role": "Howard Hughes Medical Investigator & Professor of Cellular and Molecular Pharmacology",
        "department": "Department of Cellular and Molecular Pharmacology",
        "subject": "chemistry",
        "bio": "Dr. Shokat pioneered the field of chemical genetics, synthesizing the first small molecules to successfully Drug the 'undruggable' K-Ras oncoprotein, revolutionizing cancer therapeutics."
      }
    ]
  },

  # 3. University of Advancing Technology (Row 1047)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Advancing Technology",
    "shortName": "UAT",
    "slug": "university-of-advancing-technology",
    "location": "Tempe, Arizona, United States",
    "website": "https://www.uat.edu",
    "sourceRow": 1047,
    "stats": {"established": "1983", "students": "1,000+", "international": "5%", "faculty": "60+"},
    "heroSummary": "The University of Advancing Technology (UAT) is a private, specialized technology university in Tempe, Arizona. Established in 1983, UAT is celebrated for its unique 'Synchronic Learning' model, project-based engineering education, and industry-aligned degrees in game design, cybersecurity, artificial intelligence, robotics, and software architecture.",
    "academicOverview": "UAT operates undergraduate and graduate degree programs through five technical clusters: Game Studies, Cyber Security, Software Engineering, Digital Media, and Artificial Intelligence. Its modern campus features motion capture studios, robotics fabrication labs, and a state-of-the-art security operations center (SOC).",
    "researchAdmissions": "Admissions are rolling and evaluated through UAT's direct portal. Applicants submit high school or college transcripts, showcase personal technology or design projects, and undergo an admissions interview. Standardized test scores (SAT/ACT) are optional.",
    "opps": [
      {
        "title": "Bachelor of Science in Game Design - Synchronic Learning Environment",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "UAT Technology Innovator Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Hands-on video game curriculum covering gameplay mechanics, procedural game balancing, narrative systems, level design, and complete multi-platform game project completion.",
        "requirements": {"gpa": "High school GPA 2.5+; portfolio of creative or interactive design work", "ielts": "TOEFL 75+ or IELTS 6.0+", "gre": "Not required", "papers": "Personal innovation statement", "references": "One letter of recommendation"},
        "source": "https://www.uat.edu/game-design-degree"
      },
      {
        "title": "Bachelor of Science in Network Security & Ethical Hacking",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Cyber Defense Talent Awards up to $12,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "NSA/DHS-designated cybersecurity curriculum focusing on penetration testing, defensive network architecture, incident response, reverse engineering, and threat hunting.",
        "requirements": {"gpa": "High school GPA 2.75+; algebra readiness", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Personal statement", "references": "One teacher evaluation"},
        "source": "https://www.uat.edu/network-security-degree"
      },
      {
        "title": "Master of Science in Software Engineering - Autonomous Systems Track",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "UAT Graduate Merit Grants up to $8,000",
        "fee": "$50",
        "tuition": "$19,800 total",
        "desc": "Accelerated graduate degree in full-stack architecture, microservices deployment, autonomous vehicle software protocols, and DevOps automation workflows.",
        "requirements": {"gpa": "Undergraduate degree in computer science, software engineering, or STEM with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Statement of technical objectives and code repository link", "references": "Two professional references"},
        "source": "https://www.uat.edu/software-engineering-masters-degree"
      },
      {
        "title": "Bachelor of Science in Robotics and Embedded Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Robotics Leadership Grants up to $10,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Interdisciplinary engineering major integrating microcontroller programming, sensor fusion, kinesthetics, PCB fabrication, and autonomous mobile robot prototyping.",
        "requirements": {"gpa": "High school GPA 2.75+; trigonometry or calculus readiness", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Technology project portfolio", "references": "One academic recommendation"},
        "source": "https://www.uat.edu/robotics-and-embedded-systems-degree"
      },
      {
        "title": "Bachelor of Science in Artificial Intelligence - Applied Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "AI Pioneer Fellowships up to $11,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Cutting-edge undergraduate program exploring deep learning neural networks, computer vision, natural language generation, and autonomous agent systems.",
        "requirements": {"gpa": "High school GPA 2.8+; advanced math coursework", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "AI ethics essay", "references": "One teacher evaluation"},
        "source": "https://www.uat.edu/artificial-intelligence-degree"
      },
      {
        "title": "Bachelor of Science in Digital Media & Virtual Reality Production",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Digital Creative Awards up to $9,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Practical production program focused on real-time virtual production, 3D spatial environments, XR headsets, motion tracking, and immersive interactive installations.",
        "requirements": {"gpa": "High school GPA 2.5+; digital media portfolio submission", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Creative goals statement", "references": "One recommendation"},
        "source": "https://www.uat.edu/digital-media-degree"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Bolman",
        "role": "Provost & Professor of Emerging Technologies",
        "department": "Office of the Provost",
        "subject": "computer-science",
        "bio": "Dr. Bolman has served as UAT Provost for over two decades, researching technology culture, cognitive development through interactive media, and synchronic curriculum architecture."
      },
      {
        "name": "Prof. Derric Clark",
        "role": "Professor of Game Development",
        "department": "Game Studies Division",
        "subject": "arts-design",
        "bio": "Prof. Clark specializes in real-time game engines, procedural level generation, dynamic gameplay mechanics, and game design pedagogy."
      },
      {
        "name": "Prof. Matthew Prater",
        "role": "Professor of Cybersecurity",
        "department": "Cyber Security Division",
        "subject": "computer-science",
        "bio": "Prof. Prater's expertise centers on offensive cyber operations, cryptographic protocol analysis, threat intelligence modeling, and industrial control systems defense."
      }
    ]
  },

  # 4. University of Alabama at Birmingham (Row 1048)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Alabama at Birmingham",
    "shortName": "UAB",
    "slug": "university-of-alabama-at-birmingham",
    "location": "Birmingham, Alabama, United States",
    "website": "https://www.uab.edu",
    "sourceRow": 1048,
    "stats": {"established": "1969", "students": "22,000+", "international": "6%", "faculty": "2,400+"},
    "heroSummary": "The University of Alabama at Birmingham (UAB), established in 1969, is a premier comprehensive public R1 research university and academic medical powerhouse. Located in downtown Birmingham, UAB is the largest single employer in Alabama. Anchored by the world-renowned Marnix E. Heersink School of Medicine and UAB Hospital—the 8th largest hospital in the nation—UAB commands over $770 million in annual research and grant expenditures.",
    "academicOverview": "UAB comprises 12 academic divisions, notably the Heersink School of Medicine, School of Health Professions, School of Nursing, School of Engineering, and College of Arts and Sciences. It is globally recognized for groundbreaking cancer clinical trials at the O'Neal Comprehensive Cancer Center and the nation's #1 ranked Master of Science in Health Administration program.",
    "researchAdmissions": "Undergraduate admissions operate via the Common Application (holistic review; test-optional; recommended GPA 3.0+). Graduate and professional biomedical programs require an accredited bachelor's degree, strong GPA (minimum 3.0–3.5), GRE or MCAT scores where applicable, letters of recommendation, and research experience.",
    "opps": [
      {
        "title": "Ph.D. in Graduate Biomedical Sciences (GBS) - Immunology & Cancer Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year stipend $34,000/year, full tuition coverage, and comprehensive individual health insurance",
        "fee": "$70",
        "tuition": "Covered by fellowship/RA",
        "desc": "Nationally recognized umbrella doctoral program offering specialized laboratory research in tumor immunology, precision oncology, mucosal therapeutics, and genetic therapeutics.",
        "requirements": {"gpa": "Undergraduate degree in biological sciences or chemistry with GPA 3.3+; minimum 6-12 months laboratory research", "ielts": "TOEFL 85+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Personal research statement and faculty mentor interests", "references": "Three letters from research advisors"},
        "source": "https://www.uab.edu/gbs/"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Marnix E. Heersink School of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-11-01",
        "deadlineText": "November 1, 2027",
        "funding": "Heersink Endowed Medical Scholarships up to full 4-year tuition",
        "fee": "$100 (AMCAS + Secondary)",
        "tuition": "$34,500/year (resident) / $67,800/year (non-resident)",
        "desc": "LCME-accredited medical doctorate renowned for world-class clinical clerkships across UAB Hospital, Birmingham VA Medical Center, and Children's of Alabama.",
        "requirements": {"gpa": "Undergraduate science GPA 3.7+; competitive MCAT (512+ median); AMCAS application and CASPer exam", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and secondary application essays", "references": "Pre-health committee composite letter or three academic references"},
        "source": "https://www.uab.edu/medicine/home/admissions"
      },
      {
        "title": "Master of Science in Health Administration (MSHA) - Ranked #1 in the US",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Executive Assistantships & Health System Stipends up to $18,000/year",
        "fee": "$70",
        "tuition": "$21,500/year (resident) / $44,000/year (non-resident)",
        "desc": "Ranked #1 healthcare management graduate program in the United States by U.S. News, featuring an intensive 2-year residential track followed by a paid administrative residency.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; professional healthcare experience preferred", "ielts": "TOEFL 85+", "gre": "GRE or GMAT scores", "papers": "Leadership essay and professional resume", "references": "Three professional references"},
        "source": "https://www.uab.edu/shp/hsa/msha"
      },
      {
        "title": "Ph.D. in Civil Engineering - Structural & Transportation Safety Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Graduate Research Assistantships $28,000/year plus full tuition",
        "fee": "$70",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research curriculum covering advanced composite bridge design, blast-resistant materials, intelligent transportation management, and seismic retrofitting.",
        "requirements": {"gpa": "BS or MS in Civil Engineering or related field with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "Statement of engineering research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uab.edu/engineering/home/departments-research/civil/graduate"
      },
      {
        "title": "Ph.D. in Computer Science - Biomedical Informatics & Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NSF & NIH Graduate Fellowships $32,000/year plus full tuition remission",
        "fee": "$70",
        "tuition": "Covered by fellowship",
        "desc": "Research-focused doctorate exploring genomics big data analytics, privacy-preserving machine learning in electronic health records, and cyber threat intelligence.",
        "requirements": {"gpa": "BS or MS in Computer Science, Bioinformatics, or Mathematics with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE scores optional", "papers": "Statement of purpose", "references": "Three academic references"},
        "source": "https://www.uab.edu/cas/computerscience/graduate/phd"
      },
      {
        "title": "Master of Science in Biotechnology - Drug Discovery & Biomanufacturing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Biotech Industry Co-op Assistantships up to $12,000",
        "fee": "$70",
        "tuition": "$19,200/year (resident) / $38,500/year (non-resident)",
        "desc": "Professional science curriculum combining recombinant molecular cloning, protein downstream purification, GMP quality control, and biotechnology venture entrepreneurship.",
        "requirements": {"gpa": "BS in Biology, Biochemistry, or allied science with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "Statement of career objectives", "references": "Two recommendations"},
        "source": "https://www.uab.edu/shp/cds/biotechnology"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Selwyn M. Vickers",
        "role": "Professor Emeritus of Surgery",
        "department": "Department of Surgery",
        "subject": "biology",
        "bio": "Dr. Vickers is an internationally celebrated surgical oncologist whose research focuses on pancreatic cancer molecular pathogenesis, health disparities, and novel clinical therapies."
      },
      {
        "name": "Dr. Casey D. Morrow",
        "role": "Professor of Cell, Developmental and Integrative Biology",
        "department": "Department of Cell, Developmental and Integrative Biology",
        "subject": "biology",
        "bio": "Dr. Morrow leads pioneering research on the human gut microbiome, antibiotic disruptions to microbial communities, and host-pathogen viral interactions."
      },
      {
        "name": "Dr. Murat M. Tanik",
        "role": "Professor of Electrical and Computer Engineering",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Tanik is an IEEE Fellow whose research investigates quantum computing software architectures, complex systems process design, and multidisciplinary systems engineering."
      }
    ]
  },

  # 5. University of Arkansas at Monticello (Row 1050)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Arkansas at Monticello",
    "shortName": "UAM",
    "slug": "university-of-arkansas-at-monticello",
    "location": "Monticello, Arkansas, United States",
    "website": "https://www.uamont.edu",
    "sourceRow": 1050,
    "stats": {"established": "1909", "students": "2,700+", "international": "2%", "faculty": "140+"},
    "heroSummary": "The University of Arkansas at Monticello (UAM), established in 1909, is a regional public university in southeastern Arkansas. UAM is renowned as the home of the state's only School of Forestry and Natural Resources and the Arkansas Forest Resources Center, making it a pivotal research hub for sustainable timberland ecology, wildlife management, and agricultural sciences in the Mississippi River Delta region.",
    "academicOverview": "UAM offers certificates, associate, baccalaureate, and master's degrees through the College of Forestry, Agriculture and Natural Resources, School of Nursing, School of Mathematical and Natural Sciences, School of Education, and School of Business. Its 1,600-acre campus features extensive experimental forests and wildlife research tracts.",
    "researchAdmissions": "Undergraduate admission requires high school graduation with a minimum 2.0 GPA or equivalent ACT/SAT scores. Graduate applicants must hold an accredited bachelor's degree with a minimum 2.7–3.0 GPA, submit transcripts, letters of recommendation, and a statement of professional intent.",
    "opps": [
      {
        "title": "Master of Science in Forest Resources - Forest Ecology & Geospatial Modeling",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Arkansas Forest Resources Center Assistantships $18,000/year plus full tuition waiver",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Thesis-based graduate program focusing on southern pine silviculture, geospatial GIS modeling, carbon sequestration metrics, and bottomland hardwood forest dynamics.",
        "requirements": {"gpa": "Undergraduate degree in forestry, biology, or natural resources with GPA 3.0+; faculty advisor match", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uamont.edu/academics/CFANR/ms-forestry.html"
      },
      {
        "title": "Bachelor of Science in Natural Resources Management - Wildlife Management Track",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Boll Weevil Merit Scholarships up to $6,000/year",
        "fee": "$30",
        "tuition": "$8,200/year (resident) / $17,500/year (non-resident)",
        "desc": "Hands-on field curriculum accredited by the Society of American Foresters, training wildlife biologists in habitat conservation, waterfowl ecology, and game species management.",
        "requirements": {"gpa": "High school GPA 2.5+; ACT composite 19+ recommended", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.uamont.edu/academics/CFANR/"
      },
      {
        "title": "Bachelor of Science in Agriculture - Plant and Soil Science",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Arkansas Farm Bureau & UAM Agricultural Grants up to $5,000/year",
        "fee": "$30",
        "tuition": "$8,200/year (resident) / $17,500/year (non-resident)",
        "desc": "Applied agricultural science major covering crop agronomy, soil fertility chemistry, precision irrigation, and agricultural commodity marketing.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Application essay", "references": "One reference"},
        "source": "https://www.uamont.edu/academics/CFANR/agriculture.html"
      },
      {
        "title": "Master of Education (M.Ed.) in Educational Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Arkansas Rural Educator Grants up to $4,000",
        "fee": "$40",
        "tuition": "$9,600 total",
        "desc": "CAEP-accredited graduate program preparing licensed educators for building-level administrator licensure, instructional supervision, and rural school reform.",
        "requirements": {"gpa": "Undergraduate GPA 2.75+; current teaching license and 3 years teaching experience", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Philosophy of educational leadership", "references": "Two administrative references"},
        "source": "https://www.uamont.edu/academics/education/"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Pre-Licensure Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Delta Healthcare Scholars Stipends up to $8,000/year",
        "fee": "$35",
        "tuition": "$8,200/year (resident) / $17,500/year (non-resident)",
        "desc": "ACEN-accredited baccalaureate nursing program featuring clinical practicums at Drew Memorial Health and regional medical centers across South Arkansas.",
        "requirements": {"gpa": "Prerequisite GPA 2.75+; TEAS examination score 65%+; anatomy and physiology completion", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Nursing essay", "references": "Two academic recommendations"},
        "source": "https://www.uamont.edu/academics/nursing/"
      },
      {
        "title": "Bachelor of Science in Computer Information Systems - Information Assurance",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "STEM Achievement Scholarships up to $5,000/year",
        "fee": "$30",
        "tuition": "$8,200/year (resident) / $17,500/year (non-resident)",
        "desc": "Comprehensive degree covering database management, network security administration, systems analysis, and enterprise software implementation.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor letter"},
        "source": "https://www.uamont.edu/academics/natural-sciences/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Michael Blazier",
        "role": "Dean & Professor of Forestry",
        "department": "College of Forestry, Agriculture and Natural Resources",
        "subject": "environment",
        "bio": "Dr. Blazier's research specializes in intensive pine silviculture, forest fertilization, biomass bio-energy production, and soil nutrient cycling in the Western Gulf Coastal Plain."
      },
      {
        "name": "Dr. Matthew Pelkki",
        "role": "Professor of Forest Economics",
        "department": "Arkansas Forest Resources Center",
        "subject": "social-sciences",
        "bio": "Dr. Pelkki investigates timber supply and demand dynamics, forest valuation models, spatial econometrics, and biomass energy commercialization in rural southern forestry."
      },
      {
        "name": "Dr. Douglas Osborne",
        "role": "Professor of Wildlife Ecology",
        "department": "College of Forestry, Agriculture and Natural Resources",
        "subject": "biology",
        "bio": "Dr. Osborne conducts internationally recognized research on waterfowl ecology, migratory bird population dynamics, wetland restoration, and hunter harvest management."
      }
    ]
  },

  # 6. University of Arkansas - Fort Smith (Row 1051)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Arkansas - Fort Smith",
    "shortName": "UAFS",
    "slug": "university-of-arkansas-fort-smith",
    "location": "Fort Smith, Arkansas, United States",
    "website": "https://uafs.edu",
    "sourceRow": 1051,
    "stats": {"established": "1928", "students": "5,400+", "international": "2%", "faculty": "220+"},
    "heroSummary": "The University of Arkansas - Fort Smith (UAFS) is a regional public university in western Arkansas along the Arkansas-Oklahoma border. Founded in 1928, UAFS is praised for its hands-on career education, strong partnerships with regional manufacturing and healthcare industries, and robust programs across engineering technology, dental hygiene, business, and health sciences.",
    "academicOverview": "UAFS delivers certificate, associate, baccalaureate, and master's credentials through the College of Science, Technology, Engineering & Mathematics (STEM), the College of Health, Education & Human Sciences, and the College of Business and Industry. The university is home to the Boreham Library and the state-of-the-art Baldor Technology Center.",
    "researchAdmissions": "Undergraduate applicants apply online with official high school or prior college transcripts (test-optional; recommended minimum 2.25 cumulative GPA). Graduate programs require an accredited bachelor's degree, minimum 2.75–3.0 GPA, letters of recommendation, and statements of career intent.",
    "opps": [
      {
        "title": "Bachelor of Science in Mechanical Engineering - College of STEM",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Chancellor's & Dean's Merit Scholarships up to $8,000/year",
        "fee": "$30",
        "tuition": "$7,800/year (resident) / $17,200/year (non-resident)",
        "desc": "Rigorous ABET-accredited engineering curriculum emphasizing solid mechanics, thermal fluids, computer-aided manufacturing, and industry-sponsored senior capstones.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus readiness", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "Not required", "papers": "Engineering interest essay", "references": "One counselor recommendation"},
        "source": "https://uafs.edu/academics/colleges-and-schools/stem/mechanical-engineering.php"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Carolyn McKelvey Moore School of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Mercy & Baptist Health Nursing Scholars Grants up to $6,000/year",
        "fee": "$35",
        "tuition": "$8,100/year (resident) / $17,500/year (non-resident)",
        "desc": "CCNE-accredited professional nursing degree offering intensive clinical rotations across Mercy Hospital Fort Smith and Baptist Health-Fort Smith.",
        "requirements": {"gpa": "Prerequisite GPA 2.75+; TEAS composite score 65%+; background check", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Nursing personal statement", "references": "Two recommendations"},
        "source": "https://uafs.edu/academics/colleges-and-schools/chehs/school-of-nursing/bsn.php"
      },
      {
        "title": "Bachelor of Science in Dental Hygiene - On-Campus Health Clinic",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "UAFS Health Sciences Awards up to $5,000/year",
        "fee": "$35",
        "tuition": "$8,100/year (resident) / $17,500/year (non-resident)",
        "desc": "CODA-accredited dental hygiene curriculum providing over 1,000 hours of clinical patient experience in UAFS's modern 20-chair public dental hygiene clinic.",
        "requirements": {"gpa": "Prerequisite science GPA 2.8+; 20 hours dental shadowing; Dental Hygiene Admissions Test", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://uafs.edu/academics/colleges-and-schools/chehs/dental-hygiene.php"
      },
      {
        "title": "Bachelor of Business Administration (BBA) - Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "ArcBest Logistics & Supply Chain Scholarships up to $6,000/year",
        "fee": "$30",
        "tuition": "$7,800/year (resident) / $17,200/year (non-resident)",
        "desc": "AACSB-accredited business degree capitalizing on Fort Smith's transportation hub status to deliver training in logistics optimization, freight operations, and procurement.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://uafs.edu/academics/colleges-and-schools/business-industry/business-administration.php"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Architecture & Networking",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "STEM Enterprise Grants up to $5,000/year",
        "fee": "$30",
        "tuition": "$7,800/year (resident) / $17,200/year (non-resident)",
        "desc": "Comprehensive degree covering algorithms, database engineering, mobile development, cybersecurity defense, and enterprise software design.",
        "requirements": {"gpa": "High school GPA 2.75+; preparatory algebra and trigonometry", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Personal statement", "references": "One reference"},
        "source": "https://uafs.edu/academics/colleges-and-schools/stem/computer-science.php"
      },
      {
        "title": "Master of Education in Curriculum and Instruction (M.Ed.)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Graduate Educator Fellowships up to $3,500",
        "fee": "$40",
        "tuition": "$10,500 total",
        "desc": "Advanced practitioner program focused on instructional coaching, STEM pedagogy integration, educational technology, and student data assessment.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; licensed educator status", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Teaching philosophy essay", "references": "Two professional references"},
        "source": "https://uafs.edu/academics/colleges-and-schools/chehs/school-of-education/med.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kevin Lewelling",
        "role": "Professor of Mechanical Engineering",
        "department": "College of STEM",
        "subject": "engineering",
        "bio": "Dr. Lewelling specializes in robotics integration, industrial automation, programmable logic controllers (PLCs), and mechanical system finite element analysis."
      },
      {
        "name": "Dr. Paula Julian",
        "role": "Executive Director & Associate Professor of Nursing",
        "department": "Carolyn McKelvey Moore School of Nursing",
        "subject": "biology",
        "bio": "Dr. Julian's scholarship explores high-fidelity patient simulation, clinical competency assessment, and rural healthcare workforce retention."
      },
      {
        "name": "Dr. Latisha Settlage",
        "role": "Dean & Professor of Economics",
        "department": "College of Business and Industry",
        "subject": "social-sciences",
        "bio": "Dr. Settlage's research focuses on regional economic impact analysis, agricultural finance, applied microeconomics, and business pedagogy."
      }
    ]
  },

  # 7. University of Arkansas at Little Rock (Row 1052)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Arkansas at Little Rock",
    "shortName": "UA Little Rock",
    "slug": "university-of-arkansas-at-little-rock",
    "location": "Little Rock, Arkansas, United States",
    "website": "https://ualr.edu",
    "sourceRow": 1052,
    "stats": {"established": "1927", "students": "8,800+", "international": "5%", "faculty": "450+"},
    "heroSummary": "The University of Arkansas at Little Rock (UA Little Rock), founded in 1927, is a metropolitan public research institution located in Arkansas's capital city. UA Little Rock bridges academic scholarship with state government, medical centers, and corporate headquarters. It is celebrated for its William H. Bowen School of Law, the Center for Integrative Nanotechnology Sciences, and pioneering research in information quality and cyber security.",
    "academicOverview": "UA Little Rock comprises the Donaghey College of Science, Technology, Engineering, and Mathematics (STEM), the College of Humanities, Arts, Social Sciences, and Education (CHASSE), and the William H. Bowen School of Law. It is an R2 doctoral research university conducting over $35 million in sponsored research annually.",
    "researchAdmissions": "Undergraduate applicants apply through UA Little Rock's online portal or Common App (minimum GPA 2.5; test-optional). Graduate and doctoral applicants require an accredited bachelor's or master's degree, minimum 3.0 GPA, letters of recommendation, and a statement of academic purpose.",
    "opps": [
      {
        "title": "Ph.D. in Computer and Information Sciences - Information Quality & Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full Graduate Research Assistantships $28,000/year plus full tuition remission",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Pioneering doctoral program in data governance, digital forensics, disinformation tracking, misinformation diffusion models, and enterprise information quality management.",
        "requirements": {"gpa": "BS or MS in Computer Science, Information Science, or related field with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE General recommended", "papers": "Statement of research interests", "references": "Three academic references"},
        "source": "https://ualr.edu/information-science/phd-in-computer-and-information-sciences/"
      },
      {
        "title": "Juris Doctor (J.D.) - William H. Bowen School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Bowen Dean's Merit Scholarships up to full tuition",
        "fee": "$60",
        "tuition": "$16,500/year (resident) / $32,800/year (non-resident)",
        "desc": "ABA-accredited legal education offering direct proximity to the Arkansas Supreme Court, federal district courts, and state legislature, with premier clinical public interest programs.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+; competitive LSAT or GRE score; LSAC Credential Assembly Service", "ielts": "TOEFL 90+", "gre": "LSAT preferred", "papers": "Personal statement and legal career goals", "references": "Two recommendations"},
        "source": "https://ualr.edu/law/admissions/"
      },
      {
        "title": "Ph.D. in Applied Science - Applied Biosciences & Nanoscience Tracks",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Integrative Nanotechnology Fellowships $30,000/year plus tuition",
        "fee": "$40",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary doctoral program exploring carbon nanomaterials, tissue regeneration scaffolds, nanostructured photovoltaic cells, and targeted nanomedicine.",
        "requirements": {"gpa": "BS or MS in physics, chemistry, biology, or engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE General required", "papers": "Statement of purpose and research proposal", "references": "Three recommendation letters"},
        "source": "https://ualr.edu/cims/applied-science/"
      },
      {
        "title": "Master of Public Administration (MPA) - Nonprofit & Municipal Governance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "State Government Leadership Fellowships up to $6,000",
        "fee": "$40",
        "tuition": "$14,500 total",
        "desc": "NASPAA-accredited professional master's preparing managers for public sector careers in Little Rock state agencies, municipal offices, and philanthropic organizations.",
        "requirements": {"gpa": "Undergraduate GPA 3.0+; professional resume", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of career objectives", "references": "Two professional references"},
        "source": "https://ualr.edu/publicaffairs/mpa/"
      },
      {
        "title": "Master of Science in Construction Management - Building Information Modeling",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Arkansas AGC Construction Fellowships up to $8,000",
        "fee": "$40",
        "tuition": "$16,200 total",
        "desc": "Applied graduate degree focusing on commercial project scheduling, BIM modeling, sustainable LEED building, cost estimation, and safety risk mitigation.",
        "requirements": {"gpa": "Undergraduate degree in construction, engineering, architecture, or business with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Personal statement", "references": "Two letters of recommendation"},
        "source": "https://ualr.edu/constructionmanagement/graduate/"
      },
      {
        "title": "Bachelor of Science in Systems Engineering - Telecommunications & Mechanical",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Donaghey STEM Scholarships up to $10,000/year",
        "fee": "$40",
        "tuition": "$9,500/year (resident) / $21,800/year (non-resident)",
        "desc": "Distinctive undergraduate systems curriculum combining mechanical systems, electrical networks, control theory, and wireless telecommunications.",
        "requirements": {"gpa": "High school GPA 3.0+; preparatory calculus and physics", "ielts": "TOEFL 75+", "gre": "Not required", "papers": "Engineering personal statement", "references": "One counselor letter"},
        "source": "https://ualr.edu/systemsengineering/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Nitin Agarwal",
        "role": "Maulden-Entergy Endowed Chair & Distinguished Professor",
        "department": "Department of Information Science",
        "subject": "computer-science",
        "bio": "Dr. Agarwal directs the COSMOS Research Center, analyzing social media influence, online disinformation campaigns, algorithmic toxicity, and digital propaganda networks."
      },
      {
        "name": "Dr. Alexandru Biris",
        "role": "Director & Chief Scientist, Center for Integrative Nanotechnology Sciences",
        "department": "Center for Integrative Nanotechnology Sciences",
        "subject": "physics",
        "bio": "Dr. Biris holds numerous patents in nanomaterials, developing bioactive bone regeneration scaffolds, carbon nanotube sensors, and targeted drug delivery systems."
      },
      {
        "name": "Dr. Colin Crawford",
        "role": "Dean & Professor of Law",
        "department": "William H. Bowen School of Law",
        "subject": "social-sciences",
        "bio": "Dean Crawford is an internationally renowned legal scholar specializing in comparative environmental law, urban land use governance, and international human rights."
      }
    ]
  },

  # 8. University of Arkansas at Pine Bluff (Row 1053)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Arkansas at Pine Bluff",
    "shortName": "UAPB",
    "slug": "university-of-arkansas-at-pine-bluff",
    "location": "Pine Bluff, Arkansas, United States",
    "website": "https://www.uapb.edu",
    "sourceRow": 1053,
    "stats": {"established": "1873", "students": "2,500+", "international": "3%", "faculty": "180+"},
    "heroSummary": "The University of Arkansas at Pine Bluff (UAPB), founded in 1873 as Branch Normal College, is the second-oldest public university in Arkansas and a premier Historically Black 1890 Land-Grant Institution. Located in the Arkansas Delta, UAPB is internationally recognized for its Aquaculture and Fisheries Center of Excellence—the only comprehensive aquaculture program in Arkansas—along with strong programs in agriculture, STEM, and education.",
    "academicOverview": "UAPB consists of the School of Agriculture, Fisheries and Human Sciences (SAFHS), the School of Arts and Sciences, the School of Business and Management, and the School of Education. Its expansive facilities include a 43-acre aquaculture research station with over 100 research ponds, fish pathology laboratories, and commercial hatcheries.",
    "researchAdmissions": "Undergraduate admission requires high school graduation with a minimum 2.0 GPA (test-optional). Graduate applicants to MS and PhD programs must possess an accredited bachelor's degree with a minimum 3.0 GPA in relevant scientific fields, submit letters of recommendation, and secure faculty research sponsorship.",
    "opps": [
      {
        "title": "Ph.D. in Aquaculture and Fisheries - Center of Excellence in Aquaculture",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "USDA & State Research Assistantships $26,000/year plus full tuition waiver",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Arkansas's premier doctoral aquaculture program investigating catfish genetics, fish nutrition formulations, baitfish disease diagnostics, and recirculating aquaculture systems (RAS).",
        "requirements": {"gpa": "MS in aquaculture, fisheries, biology, or related field with GPA 3.2+; faculty sponsor required", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Aquaculture research plan and CV", "references": "Three letters of recommendation"},
        "source": "https://www.uapb.edu/academics/school_of_agriculture_fisheries_and_human_sciences/aquaculture_and_fisheries/phd_program.aspx"
      },
      {
        "title": "Master of Science in Agricultural Regulations - Food Safety & Biotechnology Policy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "USDA NIFA Graduate Grants up to $18,000/year plus tuition",
        "fee": "$40",
        "tuition": "$7,800/year (resident) / $16,900/year (non-resident)",
        "desc": "Unique interdisciplinary graduate program preparing agricultural specialists in USDA/FDA regulatory compliance, international trade phytosanitary standards, and agro-biotechnology policies.",
        "requirements": {"gpa": "Undergraduate degree in agriculture, biology, chemistry, or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE required", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.uapb.edu/academics/school_of_agriculture_fisheries_and_human_sciences/agriculture/ms_agricultural_regulations.aspx"
      },
      {
        "title": "Bachelor of Science in Industrial Technology - Automation & Manufacturing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "UAPB STEM Golden Lion Scholarships up to $7,000/year",
        "fee": "$30",
        "tuition": "$7,200/year (resident) / $15,600/year (non-resident)",
        "desc": "ATMAE-accredited degree in automated production management, programmable logic controllers, industrial safety, and supply chain manufacturing operations.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.uapb.edu/academics/school_of_arts_and_sciences/industrial_technology.aspx"
      },
      {
        "title": "Bachelor of Science in Biology - Molecular & Pre-Health Professions Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NIH MARC & HBCU STEM Awards up to $8,000/year",
        "fee": "$30",
        "tuition": "$7,200/year (resident) / $15,600/year (non-resident)",
        "desc": "Rigorous undergraduate curriculum preparing graduates for medical, dental, or biomedical doctoral programs through undergraduate research fellowships.",
        "requirements": {"gpa": "High school GPA 2.75+; biology and chemistry prerequisites", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One teacher evaluation"},
        "source": "https://www.uapb.edu/academics/school_of_arts_and_sciences/biology.aspx"
      },
      {
        "title": "Bachelor of Science in Computer Science - Information Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "HBCU Tech Diversity Grants up to $6,000/year",
        "fee": "$30",
        "tuition": "$7,200/year (resident) / $15,600/year (non-resident)",
        "desc": "Undergraduate program providing solid foundational training in algorithms, cryptography, secure coding practices, and distributed cloud computing systems.",
        "requirements": {"gpa": "High school GPA 2.5+; algebra and geometry readiness", "ielts": "TOEFL 71+", "gre": "Not required", "papers": "Personal statement", "references": "One counselor letter"},
        "source": "https://www.uapb.edu/academics/school_of_arts_and_sciences/mathematics_and_computer_science.aspx"
      },
      {
        "title": "Master of Education in Career and Technical Education (M.Ed.)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Graduate Educator Stipends up to $3,500",
        "fee": "$40",
        "tuition": "$8,400 total",
        "desc": "Graduate educator degree preparing vocational administrators and career technical educators in agricultural education, family consumer sciences, and workforce training.",
        "requirements": {"gpa": "Undergraduate GPA 2.75+; education or CTE background", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Career goals essay", "references": "Two recommendations"},
        "source": "https://www.uapb.edu/academics/school_of_education/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rebecca Lochmann",
        "role": "Chair & Professor of Aquaculture Nutrition",
        "department": "Aquaculture and Fisheries Center of Excellence",
        "subject": "biology",
        "bio": "Dr. Lochmann is an internationally known fish nutritionist studying lipid metabolism, alternative plant protein diets for commercial catfish, and sustainable baitfish feeding regimens."
      },
      {
        "name": "Dr. Bruce Richards",
        "role": "Dean & Professor of Agriculture",
        "department": "School of Agriculture, Fisheries and Human Sciences",
        "subject": "biology",
        "bio": "Dr. Richards conducts research on agricultural crop diversification, soil health management in delta row-crops, and agricultural extension services for smallholder farmers."
      },
      {
        "name": "Dr. Sreeramoju Prashanth",
        "role": "Associate Professor of Computer Science",
        "department": "Department of Mathematics and Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Prashanth's research explores big data machine learning architectures, wireless sensor network security, and educational predictive analytics."
      }
    ]
  }
]
