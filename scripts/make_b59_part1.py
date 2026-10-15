import json

unis = [
  # 1. Hochschule der Polizei Rheinland-Pfalz (Row 348)
  {
    "countryId": "germany",
    "countryLabel": "Germany",
    "institution": "Hochschule der Polizei Rheinland-Pfalz",
    "shortName": "HdP RLP",
    "slug": "hochschule-der-polizei-rheinland-pfalz",
    "location": "Büchenbeuren, Rhineland-Palatinate, Germany",
    "website": "https://www.polizei.rlp.de/hochschule-der-polizei",
    "sourceRow": 348,
    "stats": {"established": "1996", "students": "1,500+", "international": "3%", "faculty": "95+"},
    "heroSummary": "Hochschule der Polizei Rheinland-Pfalz (HdP RLP) at Campus Hahn delivers accredited bachelor’s and master’s dual programs in modern policing, forensic investigation, criminological science, and cybercrime defense.",
    "academicOverview": "The institution combines academic legal education, operational police psychology, tactical leadership, and cutting-edge forensic technologies. Students receive civil service candidate status with monthly trainee remuneration and guaranteed career integration into state security leadership.",
    "researchAdmissions": "Admissions require the German Allgemeine Hochschulreife, Fachhochschulreife, or accredited international equivalent, alongside police fitness vetting, German language fluency (C1/C2), and EU citizenship.",
    "opps": [
      {
        "title": "Bachelor of Arts in Police Service (Polizeidienst - Bachelor of Arts)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2026-11-15",
        "deadlineText": "November 15, 2026 (Annual Spring Intake)",
        "funding": "Full civil service trainee salary of approx. €1,350–€1,450/month throughout 3-year degree",
        "fee": "€0 (No application fee)",
        "tuition": "€0 (State-funded civil service academy)",
        "desc": "Accredited 3-year dual bachelor program preparing future police inspectors in penal law, operational criminology, forensic psychology, and investigative tactical leadership.",
        "requirements": {"gpa": "Abitur / Fachhochschulreife with min. grade 3.0", "ielts": "B2 English + C1 German required", "gre": "Exempt; state police assessment center test", "papers": "Police physical exam and medical vetting", "references": "State background security clearance certificate"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/bachelorstudium"
      },
      {
        "title": "Master of Arts in Public Administration - Police Management Pathway",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Fully salaried senior officer advancement track (A13/A14 pay grade progression)",
        "fee": "€0 (Exempt)",
        "tuition": "€0 (State-funded leadership pathway)",
        "desc": "Postgraduate leadership curriculum offered in cooperation with the German Police University (DHPol Münster) for executive leadership and strategic crisis management.",
        "requirements": {"gpa": "First degree in Police Science / Law with distinction", "ielts": "Not required; German C2 mandatory", "gre": "Exempt", "papers": "Executive assessment ranking dossier", "references": "Ministerial service recommendation"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/masterstudium"
      },
      {
        "title": "Cybercrime Investigation & Digital Forensics Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "€1,800/month research stipend plus forensic laboratory workstation access",
        "fee": "€0",
        "tuition": "€0 (Fully sponsored research)",
        "desc": "Applied research fellowship focusing on mobile device data extraction, darknet tracing, anti-money laundering telemetry, and cryptographic digital forensics.",
        "requirements": {"gpa": "B.Sc. or M.Sc. in Computer Science or Cyber Security (min. 3.2 GPA)", "ielts": "IELTS 6.5 or German B2", "gre": "Exempt", "papers": "10-page research methodology on forensic telemetry", "references": "Two academic or law enforcement recommendations"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/forschung-cybercrime"
      },
      {
        "title": "Rhineland-Palatinate Criminological Research Grant",
        "type": "Grant",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "€12,000 project funding for empirical field studies and statistical survey publication",
        "fee": "€0",
        "tuition": "€0 (Direct grant)",
        "desc": "Investigative grant evaluating youth delinquency prevention, radicalization telemetry, and AI-driven predictive policing ethics in urban communities.",
        "requirements": {"gpa": "M.A./Ph.D. standing in Criminology, Sociology, or Legal Science", "ielts": "English B2 or German C1", "gre": "Exempt", "papers": "Empirical project proposal (max 15 pages)", "references": "Academic chair endorsement"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/kriminologische-forschung"
      },
      {
        "title": "State Police Forensic Science & Ballistics Practicum",
        "type": "Practicum",
        "subject": "chemistry",
        "subjects": ["chemistry", "engineering"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "€950/month operational internship allowance with laboratory lodging support",
        "fee": "€0",
        "tuition": "€0 (Work-study practicum)",
        "desc": "Intensive 6-month laboratory practicum in chemical residue analysis, ballistic microscopy, fingerprint spectrometry, and crime scene trace reconstruction.",
        "requirements": {"gpa": "Undergraduate standing in Chemistry, Forensic Science, or Materials Science", "ielts": "B2 English or B2 German", "gre": "Exempt", "papers": "Cover letter and safety clearance agreement", "references": "One university professor reference"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/praktika"
      },
      {
        "title": "Democracy, Ethics & Police Human Rights Merit Scholarship",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "€4,800 annual stipend for academic excellence in constitutional law and human rights",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Merit bursary awarded to student officers demonstrating outstanding scholarly analysis of constitutional jurisprudence, anti-bias policing, and civic protection.",
        "requirements": {"gpa": "Top 10% academic standing in police legal studies", "ielts": "Exempt; German C1", "gre": "Exempt", "papers": "Essay on democratic policing in modern constitutional states", "references": "Faculty advisor recommendation"},
        "source": "https://www.polizei.rlp.de/hochschule-der-polizei/stipendien"
      }
    ],
    "researchers": [
      {
        "name": "Prof. Dr. Uwe Becker",
        "role": "Professor of Criminology and Police Sociology",
        "department": "Department of Social Sciences and Operational Psychology",
        "subject": "social-sciences",
        "bio": "Prof. Dr. Uwe Becker investigates domestic violence prevention mechanisms, institutional trust in law enforcement, and restorative justice protocols across European jurisdictions."
      },
      {
        "name": "Dr. Sabine Klein",
        "role": "Senior Lecturer in Criminal Law and Evidence Procedures",
        "department": "Department of Legal Studies and Penal Jurisprudence",
        "subject": "social-sciences",
        "bio": "Dr. Sabine Klein specializes in European criminal procedure, constitutional civil liberties in digital surveillance, and judicial admissibility of artificial intelligence evidence."
      },
      {
        "name": "Dr.-Ing. Markus Graf",
        "role": "Director of Digital Forensics and Cyber Threat Analysis",
        "department": "Center for Information Technology and Forensic Informatics",
        "subject": "computer-science",
        "bio": "Dr.-Ing. Markus Graf focuses on cryptographic payload analysis, dark web intelligence indexing, and resilient forensic workflows for incident response teams."
      }
    ]
  },

  # 2. SLUB Dresden (Row 351)
  {
    "countryId": "germany",
    "countryLabel": "Germany",
    "institution": "SLUB Dresden - Saxon State and University Library",
    "shortName": "SLUB Dresden",
    "slug": "slub-dresden-state-university-library",
    "location": "Dresden, Saxony, Germany",
    "website": "https://www.slub-dresden.de",
    "sourceRow": 351,
    "stats": {"established": "1556", "students": "45,000+ patrons", "international": "18%", "faculty": "350+ staff & researchers"},
    "heroSummary": "SLUB Dresden is one of Germany’s largest and most technologically advanced academic research libraries, operating as the university library of TU Dresden and a central national repository for digital humanities.",
    "academicOverview": "SLUB hosts the German Photothek, an internationally recognized digital collection center, extensive 3D artifact digitization laboratories, and the Open Science Lab. It provides world-class research infrastructure for bibliometrics, preservation informatics, and rare manuscript analysis.",
    "researchAdmissions": "Visiting research fellowships and doctoral residency grants require enrollment in a recognized PhD program or post-doctoral status in Digital Humanities, Information Science, History, or Data Science.",
    "opps": [
      {
        "title": "Digital Humanities & Cultural Heritage Data Science Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-01-31",
        "deadlineText": "January 31, 2027",
        "funding": "€2,200/month stipend plus high-resolution digitization studio access for 6 to 12 months",
        "fee": "€0",
        "tuition": "€0 (Funded residency)",
        "desc": "Postgraduate fellowship utilizing computer vision, OCR/HTR machine learning models, and semantic linked data frameworks across historical European manuscripts.",
        "requirements": {"gpa": "Master’s degree in Data Science, Computer Science, or Digital Humanities", "ielts": "IELTS 7.0 or TOEFL 95", "gre": "Exempt", "papers": "Project proposal focusing on SLUB open digital collections", "references": "Two letters of recommendation from academic mentors"},
        "source": "https://www.slub-dresden.de/en/research/digital-humanities-fellowships"
      },
      {
        "title": "Masterclass Residency in Open Science & Bibliometrics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "Full travel bursary and research workstation stipend of €1,500/month",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Specialized research residency on scientific publishing models, citation graph analysis, open research data standards, and European FAIR data compliance.",
        "requirements": {"gpa": "Graduate standing in Information Science, Sociology of Science, or Applied Informatics", "ielts": "B2 English required", "gre": "Exempt", "papers": "Abstract of planned bibliometric inquiry", "references": "One letter from thesis supervisor"},
        "source": "https://www.slub-dresden.de/en/research/open-science-residency"
      },
      {
        "title": "Saxon Historical Cartography & Spatial GIS Research Grant",
        "type": "Grant",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-03-31",
        "deadlineText": "March 31, 2027",
        "funding": "€8,500 seed grant for historical GIS georeferencing and historical environmental landscape modeling",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Competitive research grant supporting geospatial analysis of 16th–19th century Central European topographical surveys to trace historical ecological shifts.",
        "requirements": {"gpa": "B.Sc./M.Sc. in Geoinformatics, Geography, or Environmental History", "ielts": "English B2 or German B2", "gre": "Exempt", "papers": "Project plan detailing georeferencing methodologies", "references": "Faculty supervisor endorsement"},
        "source": "https://www.slub-dresden.de/en/collections/maps-gis-grants"
      },
      {
        "title": "Text+ Cultural Heritage AI Model Training Internship",
        "type": "Practicum",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "€1,100/month research internship compensation within NFDI Text+ consortium",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Hands-on engineering internship fine-tuning LLMs and computer vision OCR transformers on Gothic and Fraktur print corpora in high-performance cloud clusters.",
        "requirements": {"gpa": "Python and PyTorch experience; 3.0+ undergraduate GPA", "ielts": "Fluent English or German", "gre": "Exempt", "papers": "GitHub repository portfolio link", "references": "Academic instructor reference"},
        "source": "https://www.slub-dresden.de/en/about-us/careers-internships"
      },
      {
        "title": "Deutsche Fotothek Visual Media Preservation Fellowship",
        "type": "Fellowship",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-05-15",
        "deadlineText": "May 15, 2027",
        "funding": "€1,950/month living grant for visual media archivists and art historians",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Curatorial fellowship exploring photographic provenance, architectural photography preservation, and 20th-century German industrial photo archives.",
        "requirements": {"gpa": "Master’s degree in Art History, Visual Studies, or Archival Informatics", "ielts": "B2 English / C1 German", "gre": "Exempt", "papers": "Proposal evaluating Fotothek photographic collections", "references": "Two professional or academic references"},
        "source": "https://www.slub-dresden.de/en/collections/deutsche-fotothek-fellowship"
      },
      {
        "title": "Open Access Publishing Merit Award for Doctoral Researchers",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Up to €3,500 APC (Article Processing Charge) waiver and open science publication grant",
        "fee": "€0",
        "tuition": "€0",
        "desc": "Financial publication support helping early-career scholars publish open-access monographs and peer-reviewed articles in verified international repositories.",
        "requirements": {"gpa": "Enrolled doctoral student at TU Dresden or Saxon university", "ielts": "Not applicable", "gre": "Exempt", "papers": "Manuscript draft accepted for peer review", "references": "Doctoral advisor confirmation"},
        "source": "https://www.slub-dresden.de/en/publishing/open-access-fund"
      }
    ],
    "researchers": [
      {
        "name": "Prof. Dr. Katrin Stump",
        "role": "Director General and Honorary Professor of Library Science",
        "department": "Executive Directorate & Digital Information Infrastructure",
        "subject": "social-sciences",
        "bio": "Prof. Dr. Katrin Stump leads national research consortia on digital long-term preservation, open science transformations, and AI ethics in cultural memory institutions."
      },
      {
        "name": "Dr. Juan Garcés",
        "role": "Head of Digital Humanities Research Group",
        "department": "Department of Research & Development",
        "subject": "computer-science",
        "bio": "Dr. Juan Garcés focuses on computational philology, handwritten text recognition (HTR), and semantic graph infrastructures for multi-lingual historical documents."
      },
      {
        "name": "Dr. Jens Bove",
        "role": "Director of Deutsche Fotothek and Visual Archives",
        "department": "Center for Visual Media and Photographic Heritage",
        "subject": "arts-design",
        "bio": "Dr. Jens Bove specializes in historical photographic processes, documentary photographic history, and automated visual retrieval systems for image repositories."
      }
    ]
  }
]

print(f"Loaded {len(unis)} universities so far")
