# scripts/make_b74_p1.py
# Universities 1 to 7 of Batch 74 (Batch 74 Part 1)
# Opps: 10947 to 10988 (42 opps)
# Res: 5029 to 5049 (21 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Texas Tech University System",
        "shortName": "TTU System",
        "slug": "texas-tech-university-system",
        "location": "Lubbock, Texas, United States",
        "website": "https://www.texastech.edu",
        "sourceRow": 993,
        "stats": {
            "established": "1996",
            "students": "63,000+",
            "international": "7%",
            "faculty": "3,400+"
        },
        "hero": {
            "tagline": "Lubbock · Five Universities, Two Health Sciences Centers & Global Arid Research",
            "desc": "The Texas Tech University System is a major public university system headquartered in Lubbock, Texas, comprising five distinct universities: Texas Tech University, Texas Tech University Health Sciences Center, Angelo State University, TTUHSC El Paso, and Midwestern State University. Delivering over $250 million in annual research, the TTU System leads internationally in wind energy engineering, arid agriculture, severe storm meteorology, and border health sciences."
        },
        "admissions": {
            "general": "Admissions processed through constituent TTU System universities. High school diploma or accredited equivalent with holistic review (class rank, GPA, curriculum rigor).",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates across TTU System institutions.",
            "deadlines": "Fall priority admission February 1, 2027; Spring priority admission November 1, 2026."
        },
        "financial": {
            "summary": "TTU Presidential Merit Scholarships, Texas Tech Alumni Association Grants, Terry Foundation Scholarships, and Texas Public Education Grants (TPEG).",
            "tuition": "$8,900 - $11,800/year (Texas resident undergraduate; $24,100/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10947,
                "title": "Ph.D. in Wind Science and Engineering (National Wind Institute at TTU)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "environment"],
                "desc": "World-leading doctoral program investigating tornado and hurricane boundary-layer aerodynamics, wind turbine blade fatigue, and grid-scale renewable energy integration.",
                "funding": "National Wind Institute Fellowship: Full tuition waiver plus $30,000 annual research stipend",
                "tuition": "$0 (Fully funded for appointed research fellows)",
                "fee": "$75",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.depts.ttu.edu/nwi/academics/phd.php",
                "requirements": {
                    "gpa": "3.3+ undergraduate/master's GPA in engineering, atmospheric science, or physics",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE quantitative score 158+",
                    "papers": "Statement of research objectives, technical CV, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10948,
                "title": "Doctor of Medicine (M.D. - TTUHSC School of Medicine)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Four-year allopathic medical curriculum focused on primary care in rural West Texas, telemedicine innovation, and clinical rotations at University Medical Center.",
                "funding": "TTUHSC Dean's Medical Scholarship: Up to $20,000/year merit scholarship",
                "tuition": "$21,800/year (Texas resident MD tuition)",
                "fee": "$75",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://www.ttuhsc.edu/medicine/admissions/",
                "requirements": {
                    "gpa": "3.6+ pre-medical undergraduate GPA via TMDSAS",
                    "ielts": "Satisfied via TMDSAS application",
                    "gre": "MCAT competitive score (median 511)",
                    "papers": "TMDSAS application, secondary essays, clinical healthcare shadowing record",
                    "references": "Health professions committee evaluation or three individual letters"
                }
            },
            {
                "id": 10949,
                "title": "Master of Science in Plant and Soil Science (Water-Smart Arid Agriculture)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Applied research degree in Ogallala Aquifer water conservation, precision irrigation technology, drought-tolerant cotton genomics, and soil microbial carbon sequestration.",
                "funding": "Texas High Plains Cotton Fellowship: $24,000/year research stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$75",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.depts.ttu.edu/pss/graduate/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in agronomy, plant biology, or horticulture",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, resume, 1,000-word statement of research intent",
                    "references": "Three letters of recommendation from scientists"
                }
            },
            {
                "id": 10950,
                "title": "Bachelor of Science in Computer Science (Software Engineering and AI)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "ABET-accredited degree in algorithms, distributed cloud systems, machine learning engineering, and enterprise cyber defense.",
                "funding": "TTU Engineering Excellence Scholarship: $3,500/year award",
                "tuition": "$11,800/year",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.depts.ttu.edu/cs/undergraduate/",
                "requirements": {
                    "gpa": "3.0+ high school GPA with pre-calculus or calculus readiness",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and essay",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10951,
                "title": "Terry Foundation Traditional Scholarship at Texas Tech",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Premier full-ride scholarship covering entire cost of attendance (tuition, fees, books, and on-campus room and board) for outstanding Texas high school leaders.",
                "funding": "Comprehensive award valued at up to $25,000/year for eight semesters of undergraduate study",
                "tuition": "$0 (Fully covered)",
                "fee": "$0",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://www.depts.ttu.edu/scholarships/terry/",
                "requirements": {
                    "gpa": "Top 20% class rank with strong community leadership and financial need",
                    "ielts": "Satisfied via Texas high school graduation",
                    "gre": "SAT or ACT scores submitted",
                    "papers": "Terry Foundation application, leadership essay, FAFSA",
                    "references": "Two letters of recommendation from high school principals or teachers"
                }
            },
            {
                "id": 10952,
                "title": "Doctor of Philosophy in Addictive Disorders and Recovery Studies",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Nationally pioneering doctoral program at TTU's Center for Collegiate Recovery Communities studying addiction neurobiology, family systemic recovery, and recovery housing policy.",
                "funding": "Recovery Science Doctoral Fellowship: $26,000 annual stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$75",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.depts.ttu.edu/hs/hdfs/adrs_phd.php",
                "requirements": {
                    "gpa": "3.2+ master's GPA in counseling, psychology, social work, or human development",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "GRE scores accepted",
                    "papers": "Statement of recovery research purpose, scholarly writing sample, transcripts",
                    "references": "Three letters of academic recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5029,
                "name": "Dr. Tedd L. Mitchell",
                "role": "Chancellor of the Texas Tech University System",
                "department": "TTU System Administration",
                "subject": "biology",
                "bio": "Dr. Tedd L. Mitchell is Chancellor of the TTU System and a physician specializing in internal medicine and sports cardiology, researching medical education policy, population health metrics, and healthcare workforce governance.",
                "source": "https://www.texastech.edu/chancellor/"
            },
            {
                "id": 5030,
                "name": "Dr. Lawrence Schovanec",
                "role": "President of Texas Tech University and Professor of Mathematics",
                "department": "Department of Mathematics and Statistics",
                "subject": "mathematics",
                "bio": "Dr. Lawrence Schovanec conducts research in biomechanical modeling of human movement, functional differential equations, and higher education STEM research enterprise growth.",
                "source": "https://www.depts.ttu.edu/president/about/"
            },
            {
                "id": 5031,
                "name": "Dr. Kishor Mehta",
                "role": "Horn Distinguished Professor and National Academy of Engineering Member",
                "department": "National Wind Institute",
                "subject": "engineering",
                "bio": "Dr. Kishor Mehta is an internationally renowned wind engineer who developed the Enhanced Fujita (EF) Tornado Scale and chairs national wind load building standards (ASCE 7).",
                "source": "https://www.depts.ttu.edu/nwi/people/faculty/kmehta.php"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "The Texas State University System",
        "shortName": "TSUS",
        "slug": "the-texas-state-university-system",
        "location": "Austin, Texas, United States",
        "website": "https://www.tsus.edu",
        "sourceRow": 1007,
        "stats": {
            "established": "1911",
            "students": "88,000+",
            "international": "6%",
            "faculty": "4,100+"
        },
        "hero": {
            "tagline": "Austin · Texas's Oldest University System, Coastal Ecology, Forensic Anthropology & Space Science",
            "desc": "The Texas State University System (TSUS) is the oldest multi-campus higher education system in Texas, coordinating eight member institutions stretching from the Texas Hill Country to the Gulf Coast. Encompassing Texas State University in San Marcos, Sam Houston State University in Huntsville, Lamar University in Beaumont, Sul Ross State University in Alpine, and three technical state colleges, TSUS drives transformative education in water resources, maritime port logistics, and criminal justice."
        },
        "admissions": {
            "general": "Admissions handled via constituent TSUS member universities through ApplyTexas. Minimum graduation requirements with class rank standards (top 25% automatic admission at flagship campuses).",
            "language": "TOEFL iBT 78+ or IELTS 6.5+ for international candidates across TSUS universities.",
            "deadlines": "Fall priority admission March 1, 2027; Spring priority admission November 1, 2026."
        },
        "financial": {
            "summary": "TSUS Regents' Student Scholar Awards, Texas State Merit Scholarships, Sam Houston State Bearkat Grants, and Lamar University Engineering Fellowships.",
            "tuition": "$7,800 - $11,200/year (Texas resident undergraduate; $22,400/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10953,
                "title": "Ph.D. in Aquatic Resources and Integrative Biology (Texas State University)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "World-class limnological doctoral program at the Meadows Center for Water and the Environment, studying karst aquifer hydrogeology, endangered spring species, and freshwater river ecology.",
                "funding": "Meadows Water Science Fellowship: Full tuition waiver plus $28,000 annual research stipend",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$65",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.bio.txst.edu/degrees/doctoral/phd-aquatic-resources.html",
                "requirements": {
                    "gpa": "3.2+ master's or undergraduate GPA in biological sciences or hydrology",
                    "ielts": "IELTS 6.5 or TOEFL 78",
                    "gre": "GRE optional",
                    "papers": "Transcripts, 3-page research proposal, CV, scientific writing sample",
                    "references": "Three letters of academic recommendation from scientists"
                }
            },
            {
                "id": 10954,
                "title": "Ph.D. in Criminal Justice (Sam Houston State University at TSUS)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Top-ranked doctoral program at SHSU's College of Criminal Justice, analyzing correctional sociology, forensic psychology, policing efficacy, and criminal sentencing disparities.",
                "funding": "George J. Beto Doctoral Fellowship: $27,000/year stipend plus full tuition waiver",
                "tuition": "$0",
                "fee": "$50",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.shsu.edu/academics/criminal-justice/degrees/phd-in-criminal-justice.html",
                "requirements": {
                    "gpa": "3.5+ master's GPA in criminal justice, criminology, or sociology",
                    "ielts": "IELTS 6.5 or TOEFL 78",
                    "gre": "GRE scores competitive (153 verbal, 150 quantitative)",
                    "papers": "Transcripts, personal statement, scholarly research paper sample",
                    "references": "Three letters of recommendation from criminological scholars"
                }
            },
            {
                "id": 10955,
                "title": "Master of Engineering in Port Management and Maritime Logistics (Lamar University)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "social-sciences"],
                "desc": "Specialized professional graduate degree for the maritime petrochemical corridor, analyzing terminal automation, supply chain resilience, and environmental port compliance.",
                "funding": "Center for Port Management Industry Scholarship: $3,000/year award",
                "tuition": "$9,800/year (In-state baseline)",
                "fee": "$75",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.lamar.edu/engineering/center-for-port-management/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in engineering, logistics, or business",
                    "ielts": "IELTS 6.5 or TOEFL 78",
                    "gre": "Not required with 3.0+ GPA",
                    "papers": "Transcripts, professional CV, statement of career goals",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10956,
                "title": "Master of Science in Rangeland and Wildlife Management (Sul Ross State University)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Trans-Pecos field degree at the Borderlands Research Institute studying bighorn sheep restoration, mountain lion ecology, and Chihuahuan Desert conservation biology.",
                "funding": "Borderlands Wildlife Fellowship: $24,000 annual research stipend plus housing",
                "tuition": "$6,900/year",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://bri.sulross.edu/education/graduate-program/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in wildlife biology, forestry, or zoology",
                    "ielts": "IELTS 6.5 or TOEFL 78",
                    "gre": "GRE optional",
                    "papers": "Field experience CV, statement of research purpose, transcripts",
                    "references": "Three letters of reference from wildlife biologists"
                }
            },
            {
                "id": 10957,
                "title": "TSUS Regents' Student Scholar Endowed Award",
                "type": "Award",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Statewide premier award presented by the TSUS Board of Regents recognizing one undergraduate scholar per institution for outstanding leadership and academic scholarship.",
                "funding": "$5,000 cash grant and formal resolution by the Texas State University System Regents",
                "tuition": "Campus resident tuition",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.tsus.edu/regents/awards.html",
                "requirements": {
                    "gpa": "3.75+ cumulative GPA at any TSUS university, junior or senior standing",
                    "ielts": "Satisfied via university matriculation",
                    "gre": "Not required",
                    "papers": "Campus nomination package, curriculum vitae, leadership dossier",
                    "references": "Nomination by university president"
                }
            },
            {
                "id": 10958,
                "title": "Doctor of Philosophy in Materials Science, Engineering, and Commercialization (MSEC)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "chemistry"],
                "desc": "Interdisciplinary doctoral degree uniting nanotechnology synthesis, semiconductor fabrication, and venture technology commercialization.",
                "funding": "Full tuition waiver, health insurance, and $30,000 annual fellowship stipend",
                "tuition": "$0",
                "fee": "$65",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.msec.txst.edu/",
                "requirements": {
                    "gpa": "3.2+ GPA in physics, chemistry, materials science, or engineering",
                    "ielts": "IELTS 6.5 or TOEFL 78",
                    "gre": "GRE optional",
                    "papers": "Official transcripts, statement of research and entrepreneurship goals, CV",
                    "references": "Three academic recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 5032,
                "name": "Dr. Brian McCall",
                "role": "Chancellor of The Texas State University System",
                "department": "TSUS System Administration",
                "subject": "social-sciences",
                "bio": "Dr. Brian McCall is Chancellor of TSUS and an author specializing in higher education legislative financing, statewide academic program coordination, and public policy governance in Texas.",
                "source": "https://www.tsus.edu/chancellor.html"
            },
            {
                "id": 5033,
                "name": "Dr. Kelly Damphousse",
                "role": "President of Texas State University and Professor of Sociology",
                "department": "Department of Sociology",
                "subject": "social-sciences",
                "bio": "Dr. Kelly Damphousse is a sociologist studying domestic terrorism, criminal ideology dynamics, higher education campus inclusion, and Carnegie R1 research enterprise ascension.",
                "source": "https://www.president.txst.edu/about/biography.html"
            },
            {
                "id": 5034,
                "name": "Dr. Phillip Lyons",
                "role": "Dean of the College of Criminal Justice and Professor of Criminal Justice",
                "department": "College of Criminal Justice at SHSU",
                "subject": "social-sciences",
                "bio": "Dr. Phillip Lyons is an expert in forensic psychology, police officer behavioral evaluations, constitutional criminal procedure, and juvenile justice reform.",
                "source": "https://www.shsu.edu/academics/criminal-justice/faculty/phillip-lyons.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Alabama System",
        "shortName": "UA System",
        "slug": "university-of-alabama-system",
        "location": "Tuscaloosa, Alabama, United States",
        "website": "https://www.uasystem.edu",
        "sourceRow": 1049,
        "stats": {
            "established": "1969",
            "students": "71,000+",
            "international": "7%",
            "faculty": "4,300+"
        },
        "hero": {
            "tagline": "Tuscaloosa · Flagship Research, UAB Medicine & Huntsville Aerospace Engineering",
            "desc": "The University of Alabama System is Alabama's premier higher education enterprise, comprised of three doctoral research universities: The University of Alabama (Tuscaloosa), the University of Alabama at Birmingham (UAB), and the University of Alabama in Huntsville (UAH). Conducting over $600 million in annual research, the UA System anchors the state in deep space rocketry at NASA Marshall, academic medicine at UAB Hospital, and cybersecurity."
        },
        "admissions": {
            "general": "Coordinated through constituent campuses (UA, UAB, UAH). High school diploma with college-preparatory curriculum; holistic evaluation of GPA, standardized exams, and leadership.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates across UA System universities.",
            "deadlines": "Fall priority admission January 15, 2027; Regular rolling admission closes May 1, 2027."
        },
        "financial": {
            "summary": "UA System Board of Trustees Scholarships, Presidential Merit Awards (full tuition waivers for high-scoring applicants), UAB Blazer Fellowships, and UAH Space Grant awards.",
            "tuition": "$11,100/year (Alabama resident undergraduate; $32,400/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10959,
                "title": "Ph.D. in Aerospace Engineering (Hypersonics and Space Propulsion at UAH)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Leading aerospace doctoral program conducted at the Propulsion Research Center in Huntsville adjacent to NASA Marshall, investigating nuclear thermal propulsion and plasma flows.",
                "funding": "NASA Space Grant Fellowship: Full tuition waiver plus $32,000 annual research stipend",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$60",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.uah.edu/eng/departments/mae/programs/aerospace-engineering-phd",
                "requirements": {
                    "gpa": "3.3+ undergraduate/master's GPA in aerospace or mechanical engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE quantitative score 160+",
                    "papers": "Transcripts, statement of propulsion research objectives, technical CV",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10960,
                "title": "Doctor of Medicine (M.D. - UAB Heersink School of Medicine)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Nationally top-ranked allopathic medical school in Birmingham renowned for transplant surgery, cardiovascular medicine, infectious disease research, and clinical training at UAB Hospital.",
                "funding": "Heersink Medical Merit Scholarship: Up to full-tuition coverage for exceptional medical students",
                "tuition": "$34,228/year (Alabama resident MD tuition)",
                "fee": "$100",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://www.uab.edu/medicine/home/admissions",
                "requirements": {
                    "gpa": "3.7+ pre-medical undergraduate GPA via AMCAS",
                    "ielts": "Satisfied via AMCAS verification",
                    "gre": "MCAT competitive score (median 513)",
                    "papers": "AMCAS application, secondary responses, hospital shadowing record",
                    "references": "Pre-health committee composite letter or three faculty letters"
                }
            },
            {
                "id": 10961,
                "title": "Ph.D. in Materials Science (Intercampus Program across UA, UAB, and UAH)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "chemistry"],
                "desc": "Collaborative tri-campus doctoral degree in magnetic recording metamaterials, biomaterial bone implants, semiconductor optoelectronics, and structural superalloys.",
                "funding": "Intercampus Materials Fellowship: $30,000 annual stipend plus complete tuition waiver",
                "tuition": "$0",
                "fee": "$65",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://materials.ua.edu/phd-program/",
                "requirements": {
                    "gpa": "3.2+ GPA in materials science, physics, chemistry, or engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Transcripts, CV, 1,000-word materials research statement",
                    "references": "Three letters of recommendation from research advisors"
                }
            },
            {
                "id": 10962,
                "title": "Ph.D. in Cybersecurity and Cyber Operations (University of Alabama)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Doctoral research examining automated vulnerability detection, quantum cryptography, hardware side-channel defense, and SCADA critical infrastructure protection.",
                "funding": "CyberCorps Scholarship for Service (SFS): Full tuition plus $37,000 annual stipend for US scholars",
                "tuition": "$0 (Fully funded with fellowship)",
                "fee": "$65",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://cs.ua.edu/graduate/phd-in-cybersecurity/",
                "requirements": {
                    "gpa": "3.3+ undergraduate or master's GPA in computer science or computer engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE scores competitive",
                    "papers": "Official transcripts, resume showing security projects, statement of purpose",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 10963,
                "title": "University of Alabama Presidential National Merit Scholarship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Elite undergraduate scholarship for National Merit Finalists providing five full years of tuition, on-campus housing, and a $3,500 annual undergraduate research stipend.",
                "funding": "Comprehensive full package valued at over $140,000 across five undergraduate years",
                "tuition": "$0 (100% covered)",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://scholarships.ua.edu/freshman/out-of-state/",
                "requirements": {
                    "gpa": "National Merit Finalist designation with 3.5+ high school GPA",
                    "ielts": "Satisfied via secondary schooling",
                    "gre": "PSAT / SAT qualifying score",
                    "papers": "UA undergraduate application and National Merit certificate",
                    "references": "Automatic institutional award"
                }
            },
            {
                "id": 10964,
                "title": "Master of Science in Civil and Environmental Engineering (Water Resources at UA)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "engineering"],
                "desc": "Graduate program partnering with the NOAA National Water Center located on the UA campus, focusing on continental hydrological forecasting, flood modeling, and GIS.",
                "funding": "National Water Center Research Assistantship: $26,000/year stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$65",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://cce.eng.ua.edu/graduate/environmental-engineering/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in civil, environmental, or chemical engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Official transcripts, CV, statement of water resources goals",
                    "references": "Three letters of academic recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5035,
                "name": "Dr. Finis E. St. John IV",
                "role": "Chancellor of the University of Alabama System",
                "department": "UA System Administration",
                "subject": "social-sciences",
                "bio": "Dr. Finis E. St. John IV leads the UA System, directing statewide academic governance, capital infrastructure expansions, and the growth of Alabama's largest healthcare and research enterprise.",
                "source": "https://www.uasystem.edu/chancellor"
            },
            {
                "id": 5036,
                "name": "Dr. Stuart R. Bell",
                "role": "President of The University of Alabama and Professor of Mechanical Engineering",
                "department": "Department of Mechanical Engineering",
                "subject": "engineering",
                "bio": "Dr. Stuart R. Bell is a combustion engineer researching internal combustion engine efficiency, alternative fuels, and university research innovation ecosystems.",
                "source": "https://president.ua.edu/about/"
            },
            {
                "id": 5037,
                "name": "Dr. Anupam Agarwal",
                "role": "Senior Vice President for Medicine and Dean of the Heersink School of Medicine",
                "department": "Department of Medicine and Division of Nephrology",
                "subject": "biology",
                "bio": "Dr. Anupam Agarwal is an internationally recognized nephrologist studying acute kidney injury, heme oxygenase-1 cytoprotection mechanisms, and translational clinical trials.",
                "source": "https://www.uab.edu/medicine/home/about/leadership/agarwal"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Arkansas System",
        "shortName": "UA System Arkansas",
        "slug": "university-of-arkansas-system",
        "location": "Little Rock, Arkansas, United States",
        "website": "https://www.uasys.edu",
        "sourceRow": 1056,
        "stats": {
            "established": "1871",
            "students": "70,000+",
            "international": "6%",
            "faculty": "4,000+"
        },
        "hero": {
            "tagline": "Little Rock · Arkansas's Comprehensive Land-Grant & Medical Higher Education System",
            "desc": "The University of Arkansas System is the flagship public university system of the Natural State, spanning twenty campuses and divisions—including the flagship University of Arkansas in Fayetteville, the University of Arkansas for Medical Sciences (UAMS) in Little Rock, and the statewide Division of Agriculture. Leading the nation in poultry science, agricultural economics, supply chain analytics, and nanomedicine, the UA System powers Arkansas's knowledge economy."
        },
        "admissions": {
            "general": "Applications processed through constituent system universities (Fayetteville, Little Rock, Fort Smith, Monticello, Pine Bluff, UAMS). Holistic review of GPA and secondary coursework.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates across UA System campuses.",
            "deadlines": "Priority fall admission February 1, 2027; Regular rolling admission closes July 15, 2027."
        },
        "financial": {
            "summary": "Arkansas Governor's Distinguished Scholarships ($10,000/year), UA Chancellor's Merit Grants, Walton Family Endowed Fellowships, and UAMS Healthcare Grants.",
            "tuition": "$7,600 - $9,800/year (Arkansas resident undergraduate; $26,500/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10965,
                "title": "Ph.D. in Poultry Science (Center of Excellence for Poultry Science at U of A)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "World-leading avian doctoral program in commercial broiler physiology, poultry gastrointestinal microbiology, avian influenza epidemiology, and sustainable nutrition.",
                "funding": "Poultry Industry Endowed Research Fellowship: $28,000 annual stipend plus full tuition waiver",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$60",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://poultry-science.uark.edu/graduate.php",
                "requirements": {
                    "gpa": "3.0+ undergraduate/master's GPA in animal science, biology, or veterinary medicine",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Statement of research interests, curriculum vitae, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10966,
                "title": "Doctor of Medicine (M.D. - UAMS College of Medicine)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Four-year medical curriculum at Arkansas's only academic health sciences center, featuring clinical training at UAMS Medical Center and Arkansas Children's Hospital.",
                "funding": "UAMS Rural Medical Scholarship: Up to 100% full tuition in exchange for rural Arkansas primary care practice",
                "tuition": "$33,850/year (Arkansas resident MD tuition)",
                "fee": "$100",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://medicine.uams.edu/future-students/admissions/",
                "requirements": {
                    "gpa": "3.6+ pre-medical undergraduate GPA via AMCAS",
                    "ielts": "Satisfied via AMCAS verification",
                    "gre": "MCAT score report (median 510)",
                    "papers": "AMCAS application, secondary essays, clinical healthcare shadowing record",
                    "references": "Pre-medical advisory committee letter or three faculty letters"
                }
            },
            {
                "id": 10967,
                "title": "Ph.D. in Supply Chain Management (Sam M. Walton College of Business)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Ranked among the top supply chain doctoral programs in the world, analyzing retail predictive replenishment, intermodal freight logistics, and global supply network resilience.",
                "funding": "Walton Doctoral Fellowship: $35,000 annual stipend plus complete tuition waiver",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://walton.uark.edu/departments/supplychain/phd.php",
                "requirements": {
                    "gpa": "3.3+ undergraduate/master's GPA in supply chain, business, or engineering",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "GMAT (650+) or GRE (160+ quantitative)",
                    "papers": "Transcripts, curriculum vitae, 1,000-word statement of research intent",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10968,
                "title": "Master of Science in Biomedical Informatics (UAMS / UALR Joint Program)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "biology"],
                "desc": "Interdisciplinary program teaching clinical data architecture, genomic sequence analytics, medical natural language processing, and translational bioinformatics.",
                "funding": "UAMS Bio-Informatics Research Assistantship: $24,000/year stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$50",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://gradschool.uams.edu/programs/biomedical-informatics/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in computer science, biology, or mathematics",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official transcripts, programming experience resume, career statement",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10969,
                "title": "Arkansas Governor's Distinguished Scholarship at U of A",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "State-funded merit scholarship awarded to Arkansas high school valedictorians and National Merit Semifinalists attending constituent UA institutions.",
                "funding": "Annual award of $10,000 renewable for four undergraduate years ($40,000 total value)",
                "tuition": "Applied directly against university tuition and campus housing",
                "fee": "$0",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://scholarships.uark.edu/nr-governors.php",
                "requirements": {
                    "gpa": "3.5+ high school GPA with 32+ ACT or 1410+ SAT score",
                    "ielts": "Satisfied via Arkansas high school diploma",
                    "gre": "Standardized test score verification",
                    "papers": "Arkansas Department of Higher Education (ADHE) application and transcripts",
                    "references": "High school certification"
                }
            },
            {
                "id": 10970,
                "title": "Master of Science in Electrical Engineering (Silicon Carbide Power Electronics at U of A)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "High-density power electronics research at the National Center for Reliable Electric Power Transmission (NCREPT), focusing on SiC wide-bandgap semiconductors.",
                "funding": "NSF Power Electronics Research Assistantship: $26,000 annual stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://electrical-engineering.uark.edu/academics/graduate-program/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in electrical or computer engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Transcripts, technical statement of semiconductor research, CV",
                    "references": "Three letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5038,
                "name": "Dr. Donald R. Bobbitt",
                "role": "President of the University of Arkansas System",
                "department": "UA System Administration",
                "subject": "chemistry",
                "bio": "Dr. Donald R. Bobbitt is President of the UA System and a chemist specializing in analytical chemistry, laser-based separation science, and statewide university research commercialization.",
                "source": "https://www.uasys.edu/about/president/"
            },
            {
                "id": 5039,
                "name": "Dr. Charles F. Robinson",
                "role": "Chancellor of the University of Arkansas and Professor of History",
                "department": "Office of the Chancellor",
                "subject": "social-sciences",
                "bio": "Dr. Charles F. Robinson leads the flagship campus in Fayetteville, researching African American history, race relations in the American South, and university access equity.",
                "source": "https://chancellor.uark.edu/about/"
            },
            {
                "id": 5040,
                "name": "Dr. Cam Patterson",
                "role": "Chancellor of the University of Arkansas for Medical Sciences (UAMS)",
                "department": "UAMS Administration and Department of Medicine",
                "subject": "biology",
                "bio": "Dr. Cam Patterson is a cardiologist and researcher studying angiogenesis, ubiquitin-proteasome molecular pathways in cardiovascular biology, and rural health system integration.",
                "source": "https://chancellor.uams.edu/about-the-chancellor/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Illinois System",
        "shortName": "UI System",
        "slug": "university-of-illinois-system",
        "location": "Urbana-Champaign, Illinois, United States",
        "website": "https://www.uillinois.edu",
        "sourceRow": 1087,
        "stats": {
            "established": "1867",
            "students": "94,000+",
            "international": "14%",
            "faculty": "6,200+"
        },
        "hero": {
            "tagline": "Urbana-Champaign · Top-Tier Research Powerhouse: UIUC, UIC & UIS",
            "desc": "The University of Illinois System is a world-class public university system comprising three premier universities: the flagship University of Illinois Urbana-Champaign (UIUC), the University of Illinois Chicago (UIC), and the University of Illinois Springfield (UIS). Conducting more than $1 billion in annual sponsored research, the UI System leads the globe in supercomputing at NCSA, quantum computing, autonomous robotics, medicine, and public policy."
        },
        "admissions": {
            "general": "Applications processed through constituent campuses (UIUC, UIC, UIS). Holistic review of secondary school course rigor, unweighted GPA, standardized exams (test-optional), and personal essays.",
            "language": "TOEFL iBT 80+ (103+ UIUC engineering) or IELTS 6.5+ (7.5+ UIUC).",
            "deadlines": "Early action priority deadline November 1, 2026; Regular decision deadline January 5, 2027."
        },
        "financial": {
            "summary": "Illinois Commitment (100% free tuition and fees for Illinois residents with family income of $67,100 or less), President's Award Program (PAP), and UI System Endowed Fellowships.",
            "tuition": "$12,712 - $17,572/year (Illinois resident undergraduate base; $36,068/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10971,
                "title": "Ph.D. in Computer Science (Siebel Center for Computer Science at UIUC)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Globally ranked top-5 doctoral program in artificial intelligence, distributed cloud infrastructure, quantum computing, compiler optimization, and cybersecurity.",
                "funding": "Full 100% tuition waiver, health insurance, and $34,000 annual research fellowship stipend",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$90",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://cs.illinois.edu/academics/graduate/phd-program",
                "requirements": {
                    "gpa": "3.7+ undergraduate/master's GPA in computer science, mathematics, or physics",
                    "ielts": "IELTS 7.5 or TOEFL 103",
                    "gre": "GRE scores optional",
                    "papers": "Statement of purpose, 3-page research essay, official transcripts, CV",
                    "references": "Three letters of academic recommendation from computing researchers"
                }
            },
            {
                "id": 10972,
                "title": "Illinois Commitment (100% Free Tuition and Campus Fees)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Flagship university promise covering 100% of undergraduate tuition and campus fees for up to eight semesters for qualified Illinois residents with family income under $67,100.",
                "funding": "Full tuition and fee coverage valued at over $17,000 per year for four years",
                "tuition": "$0 (100% covered for eligible students)",
                "fee": "$0",
                "deadline": "2027-01-05",
                "deadlineText": "January 5, 2027",
                "source": "https://admissions.illinois.edu/invest/commitment",
                "requirements": {
                    "gpa": "Illinois resident graduating from an Illinois high school, family income <= $67,100",
                    "ielts": "Satisfied via Illinois secondary graduation",
                    "gre": "Not required",
                    "papers": "Completed FAFSA application and certified family tax records",
                    "references": "Automatic consideration with admission"
                }
            },
            {
                "id": 10973,
                "title": "Ph.D. in Electrical and Computer Engineering (Grainger College of Engineering at UIUC)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "computer-science"],
                "desc": "Elite graduate program in semiconductor devices, photonics, power grids, quantum optics, and neuromorphic computing circuits.",
                "funding": "Grainger Graduate Fellowship: $36,000 annual research stipend plus full tuition waiver",
                "tuition": "$0",
                "fee": "$90",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://ece.illinois.edu/academics/grad/phd",
                "requirements": {
                    "gpa": "3.5+ undergraduate GPA in electrical or computer engineering",
                    "ielts": "IELTS 7.5 or TOEFL 103",
                    "gre": "GRE optional",
                    "papers": "Transcripts, statement of research purpose, curriculum vitae",
                    "references": "Three letters of recommendation from faculty"
                }
            },
            {
                "id": 10974,
                "title": "Doctor of Medicine (M.D. - UIC College of Medicine in Chicago)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "One of the largest medical schools in the nation, providing clinical training at UI Health hospital, Stroger Cook County Hospital, and urban community health clinics.",
                "funding": "UIC Medical Scholars Merit Award: Up to $25,000/year renewable scholarship",
                "tuition": "$38,400/year (Illinois resident MD tuition)",
                "fee": "$100",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://medicine.uic.edu/admissions/",
                "requirements": {
                    "gpa": "3.7+ undergraduate pre-medical GPA via AMCAS",
                    "ielts": "Satisfied via AMCAS verification",
                    "gre": "MCAT score (median 513)",
                    "papers": "AMCAS application, secondary responses, clinical patient interaction log",
                    "references": "Pre-health committee letter or three individual faculty recommendations"
                }
            },
            {
                "id": 10975,
                "title": "Master of Science in Technology and Public Policy (UIS / UIUC Joint Extended Track)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Interdisciplinary program examining national AI governance, broadband equity, state legislative technology auditing, and cybersecurity regulation.",
                "funding": "Illinois Legislative Policy Fellowship: $18,000 stipend plus tuition waiver",
                "tuition": "$12,500/year",
                "fee": "$60",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uis.edu/publicaffairs/academics/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in political science, economics, or computer science",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Policy memo writing sample, resume, personal statement",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10976,
                "title": "National Center for Supercomputing Applications (NCSA) Postdoctoral Fellowship",
                "type": "Fellowship",
                "subject": "computer-science",
                "subjects": ["computer-science", "physics", "mathematics"],
                "desc": "Prestigious computational fellowship utilizing Blue Waters and Delta supercomputers to model gravitational waves, climate atmospheric dynamics, and extreme-scale neural networks.",
                "funding": "Annual salary of $75,000 plus full institutional health insurance and $10,000 compute allocation",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-01-31",
                "deadlineText": "January 31, 2027",
                "source": "https://www.ncsa.illinois.edu/about/fellowships/",
                "requirements": {
                    "gpa": "Ph.D. in computational physics, computer science, applied math, or astrophysics",
                    "ielts": "Satisfied by terminal doctorate",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, 3 high-impact computational publications, 3-page research proposal",
                    "references": "Three letters of recommendation from international computational scientists"
                }
            }
        ],
        "researchers": [
            {
                "id": 5041,
                "name": "Dr. Timothy L. Killeen",
                "role": "President of the University of Illinois System",
                "department": "UI System Administration",
                "subject": "physics",
                "bio": "Dr. Timothy L. Killeen is President of the UI System and a geophysicist specializing in upper atmospheric physics, space sciences, and the advancement of public university research economies.",
                "source": "https://www.uillinois.edu/president"
            },
            {
                "id": 5042,
                "name": "Dr. Robert J. Jones",
                "role": "Chancellor of the University of Illinois Urbana-Champaign and Professor of Crop Sciences",
                "department": "Department of Crop Sciences",
                "subject": "biology",
                "bio": "Dr. Robert J. Jones is a crop physiologist researching corn kernel development under thermal stress, carbon allocation in cereal crops, and land-grant university transformation.",
                "source": "https://chancellor.illinois.edu/about/biography.html"
            },
            {
                "id": 5043,
                "name": "Dr. Marie Lynn Miranda",
                "role": "Chancellor of the University of Illinois Chicago and Professor of Pediatrics",
                "department": "UIC Administration and Department of Pediatrics",
                "subject": "environment",
                "bio": "Dr. Marie Lynn Miranda is a leader in children's environmental health, investigating geospatial exposure to childhood lead poisoning, environmental justice, and racial health disparities.",
                "source": "https://chancellor.uic.edu/about/chancellor-miranda/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Maine System",
        "shortName": "UMS",
        "slug": "university-of-maine-system",
        "location": "Bangor, Maine, United States",
        "website": "https://www.maine.edu",
        "sourceRow": 1098,
        "stats": {
            "established": "1968",
            "students": "30,000+",
            "international": "5%",
            "faculty": "1,900+"
        },
        "hero": {
            "tagline": "Bangor · Six Public Universities, Offshore Wind & Advanced Nanocellulose Engineering",
            "desc": "The University of Maine System (UMS) is the statewide public higher education partnership uniting six accredited universities across Maine: the flagship University of Maine in Orono, the University of Southern Maine in Portland, and regional universities in Augusta, Farmington, Fort Kent, and Presque Isle. UMS is renowned globally for the Advanced Structures and Composites Center (ASCC), offshore floating wind turbines, and forestry bio-economy innovations."
        },
        "admissions": {
            "general": "Admissions processed through constituent UMS universities. High school diploma or GED equivalent; test-optional holistic review of academic coursework and personal essay.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates across UMS campuses.",
            "deadlines": "Fall priority admission February 1, 2027; Regular rolling admission closes July 1, 2027."
        },
        "financial": {
            "summary": "Maine Match Program (matches in-state flagship tuition for out-of-state students), UMS Presidential Merit Scholarships, Pulp and Paper Foundation full-tuition grants, and Maine State Grants.",
            "tuition": "$9,810/year (Maine resident undergraduate; $33,480/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10977,
                "title": "Ph.D. in Forest Resources and Bioproducts (Advanced Structures and Composites Center at UMaine)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "engineering", "materials"],
                "desc": "World-leading doctoral research at the ASCC in 3D-printed bio-based homes, nanocellulose composite materials, mass timber engineering, and offshore floating wind foundations.",
                "funding": "ASCC Graduate Research Fellowship: $30,000 annual research stipend plus full tuition waiver",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$65",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://composites.umaine.edu/academics/graduate-programs/",
                "requirements": {
                    "gpa": "3.2+ undergraduate/master's GPA in engineering, wood science, forestry, or chemistry",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Curriculum vitae, transcripts, 1,000-word statement of bioproduct research purpose",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10978,
                "title": "Bachelor of Science in Marine Science (Darling Marine Center Cohort)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "Immersive coastal marine biology program on the Damariscotta River estuary studying lobster population dynamics, ocean acidification, seaweed aquaculture, and kelp biofuels.",
                "funding": "Darling Marine Center Coastal Scholar Grant: $3,500/year award plus coastal field station housing",
                "tuition": "$9,810/year (Resident baseline)",
                "fee": "$50",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://dmc.umaine.edu/academics/marine-sciences-bs/",
                "requirements": {
                    "gpa": "3.0+ high school GPA with biology, chemistry, and algebra",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and personal statement",
                    "references": "Two recommendations (one science teacher)"
                }
            },
            {
                "id": 10979,
                "title": "Master of Science in Mechanical Engineering (Offshore Floating Wind Dynamics)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "environment"],
                "desc": "Rigorous engineering curriculum testing floating offshore wind turbines in the Alfond W² Ocean Engineering Laboratory's multi-directional wave-wind basin.",
                "funding": "Alfond Ocean Engineering Assistantship: $26,000/year stipend plus full tuition waiver",
                "tuition": "$0",
                "fee": "$65",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://composites.umaine.edu/research/offshore-wind/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in mechanical, civil, or ocean engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE scores competitive",
                    "papers": "Transcripts, technical research statement, CV",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10980,
                "title": "University of Maine Pulp and Paper Foundation Full-Tuition Scholarship",
                "type": "Scholarship",
                "subject": "engineering",
                "subjects": ["engineering", "chemistry"],
                "desc": "Endowed industry scholarship covering 100% of undergraduate tuition for engineering students committed to advancing sustainable paper, pulp, and bio-packaging technology.",
                "funding": "100% full-tuition scholarship renewable for all four undergraduate years plus co-op work placements",
                "tuition": "$0 (Tuition completely covered)",
                "fee": "$0",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://mainepulpaper.org/scholarships/",
                "requirements": {
                    "gpa": "3.2+ high school GPA enrolled in chemical, civil, mechanical, or electrical engineering",
                    "ielts": "Satisfied via secondary school completion",
                    "gre": "Not required",
                    "papers": "Pulp & Paper Foundation application, official transcripts, technical interview",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10981,
                "title": "Master of Science in Cybersecurity (University of Southern Maine at UMS)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "NSA-aligned program at the Maine Cyber Range studying secure software engineering, network penetration defense, and critical port infrastructure cyber resilience.",
                "funding": "Maine Cyber Defense Grant: $2,500/year award",
                "tuition": "$8,900/year (Resident)",
                "fee": "$50",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://usm.maine.edu/academics/cybersecurity-ms/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA in computer science or relevant IT experience",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, resume, statement of cybersecurity career objectives",
                    "references": "Two professional or academic references"
                }
            },
            {
                "id": 10982,
                "title": "Associate of Science in Forest Technology (UMaine at Fort Kent)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment"],
                "desc": "SAF-accredited technical degree covering forest inventory cruising, timber harvest management, GIS woodland mapping, and heavy equipment operation in the North Maine Woods.",
                "funding": "Maine North Woods Forestry Grant: $1,500/year award",
                "tuition": "$7,400/year",
                "fee": "$40",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.umfk.edu/academics/programs/forestry/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and residency statement",
                    "references": "One teacher reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 5044,
                "name": "Dr. Dannel Malloy",
                "role": "Chancellor of the University of Maine System",
                "department": "UMS System Administration",
                "subject": "social-sciences",
                "bio": "Dr. Dannel Malloy is Chancellor of the University of Maine System, directing statewide unified accreditation, public higher education financing, workforce development, and rural university retention.",
                "source": "https://www.maine.edu/chancellor/"
            },
            {
                "id": 5045,
                "name": "Dr. Habib Dagher",
                "role": "Executive Director of the Advanced Structures and Composites Center and Professor",
                "department": "Advanced Structures and Composites Center",
                "subject": "engineering",
                "bio": "Dr. Habib Dagher is a pioneer in offshore floating wind turbine technology (VolturnUS), large-scale 3D printed bio-home structures (BioHome3D), and composite military bridge systems.",
                "source": "https://composites.umaine.edu/people/habib-dagher/"
            },
            {
                "id": 5046,
                "name": "Dr. Joan Ferrini-Mundy",
                "role": "President of the University of Maine and Vice Chancellor for Research and Innovation",
                "department": "Office of the President",
                "subject": "mathematics",
                "bio": "Dr. Joan Ferrini-Mundy is a mathematics educator and former NSF director researching calculus curriculum learning progressions, STEM educational policy, and university innovation leadership.",
                "source": "https://umaine.edu/president/about/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Massachusetts Office of the President",
        "shortName": "UMass System",
        "slug": "university-of-massachusetts-office-of-the-president",
        "location": "Boston, Massachusetts, United States",
        "website": "https://www.umassp.edu",
        "sourceRow": 1107,
        "stats": {
            "established": "1863",
            "students": "74,000+",
            "international": "11%",
            "faculty": "6,100+"
        },
        "hero": {
            "tagline": "Boston · Five Campuses, $800M+ Research, AI, Life Sciences & Marine Technology",
            "desc": "The University of Massachusetts Office of the President directs Massachusetts's flagship public university system, encompassing five world-class campuses: UMass Amherst, UMass Boston, UMass Dartmouth, UMass Lowell, and the UMass Chan Medical School in Worcester. Generating over $800 million in annual research, the UMass System is a global powerhouse in artificial intelligence, RNA interference therapeutics, and clean energy."
        },
        "admissions": {
            "general": "Applications processed through individual UMass campuses (Amherst, Boston, Dartmouth, Lowell, Chan Medical). Competitive review of secondary school GPA, curriculum rigor, and extracurricular achievement.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ (100+ for graduate programs) for international candidates.",
            "deadlines": "Early action priority deadline November 5, 2026; Regular decision deadline January 15, 2027."
        },
        "financial": {
            "summary": "MassEducate (100% free community college tuition with transfer pipelines), UMass Flagship Merit Scholarships, Chancellor's Endowed Fellowships, and NIH predoctoral training grants.",
            "tuition": "$14,800 - $17,400/year (Massachusetts resident undergraduate; $36,800/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10983,
                "title": "Ph.D. in Computer Science (Manning College of Information and Computer Sciences at UMass Amherst)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Top-tier doctoral program in artificial intelligence, information retrieval, computer vision, reinforcement learning, and quantum information systems.",
                "funding": "Full 100% tuition waiver, health insurance, and $35,000 annual research fellowship stipend",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$85",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://www.cics.umass.edu/academics/phd-program",
                "requirements": {
                    "gpa": "3.5+ undergraduate GPA in computer science, mathematics, or physics",
                    "ielts": "IELTS 7.5 or TOEFL 100",
                    "gre": "GRE scores optional",
                    "papers": "Transcripts, statement of purpose, scientific CV, research paper sample",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10984,
                "title": "Ph.D. in Biomedical Sciences (Morningside Graduate School of Biomedical Sciences at UMass Chan)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Elite biomedical doctorate conducting breakthrough research in RNA biology, CRISPR gene therapy, immunology, and molecular medicine under Nobel laureate faculty.",
                "funding": "Full tuition waiver, comprehensive health benefits, and $38,000 annual living stipend",
                "tuition": "$0 (Fully funded for all admitted PhD students)",
                "fee": "$80",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://www.umassmed.edu/gsbs/admissions/",
                "requirements": {
                    "gpa": "3.4+ undergraduate GPA in biochemistry, molecular biology, or related STEM",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Statement of research experience, official transcripts, CV",
                    "references": "Three letters of recommendation from research mentors"
                }
            },
            {
                "id": 10985,
                "title": "Master of Science in Marine Science and Technology (UMass Dartmouth SMAST)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Coastal graduate program at the School for Marine Science & Technology studying commercial fisheries stock assessments, benthic acoustic imaging, and ocean circulation models.",
                "funding": "SMAST Marine Fisheries Research Assistantship: $26,000/year stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.umassd.edu/smast/academics/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in oceanography, biology, or environmental science",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE optional",
                    "papers": "Official transcripts, statement of research purpose, CV",
                    "references": "Three academic recommendations"
                }
            },
            {
                "id": 10986,
                "title": "Ph.D. in Plastics Engineering (Francis College of Engineering at UMass Lowell)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "chemistry", "environment"],
                "desc": "World-renowned plastics engineering doctorate in biodegradable biopolymers, high-performance nanocomposites, medical polymer devices, and plastics circular recycling.",
                "funding": "Plastics Engineering Fellowship: $30,000 annual stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$75",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.uml.edu/engineering/plastics/programs/phd.aspx",
                "requirements": {
                    "gpa": "3.2+ GPA in plastics, chemical, mechanical engineering, or polymer science",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE scores competitive",
                    "papers": "Transcripts, statement of polymer research interests, technical resume",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 10987,
                "title": "UMass President's Public Service Fellowship",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "System-wide fellowship providing stipends for undergraduate and graduate students working in full-time summer public service internships across Massachusetts municipalities.",
                "funding": "Stipend of $6,000 for a 10-week summer public service placement",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.umassp.edu/student-affairs/public-service-fellowship",
                "requirements": {
                    "gpa": "3.0+ cumulative GPA at any UMass campus, sophomore standing or above",
                    "ielts": "Satisfied via university enrollment",
                    "gre": "Not required",
                    "papers": "Fellowship proposal, community organization endorsement letter, resume",
                    "references": "Two letters of recommendation (one faculty, one community leader)"
                }
            },
            {
                "id": 10988,
                "title": "Ph.D. in Nursing and Health Policy (Robert and Donna Manning College of Nursing at UMass Boston)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Doctoral program focusing on urban health disparities, social determinants of cardiovascular health, maternal mortality reduction, and state healthcare policy.",
                "funding": "Health Equity Doctoral Assistantship: $28,000 annual stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$75",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.umb.edu/nursing/academics/phd-in-nursing/",
                "requirements": {
                    "gpa": "3.3+ master's degree GPA in nursing or related public health field",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Transcripts, scientific writing sample, 1,000-word statement of policy research",
                    "references": "Three letters of academic recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5047,
                "name": "Dr. Marty Meehan",
                "role": "President of the University of Massachusetts System",
                "department": "Office of the President",
                "subject": "social-sciences",
                "bio": "Dr. Marty Meehan is President of the UMass System and former member of Congress, leading statewide university affordability, public research investment, and college completion initiatives.",
                "source": "https://www.umassp.edu/president/about"
            },
            {
                "id": 5048,
                "name": "Dr. Craig C. Mello",
                "role": "Nobel Laureate and Blais Chair in Molecular Medicine",
                "department": "RNA Therapeutics Institute at UMass Chan",
                "subject": "biology",
                "bio": "Dr. Craig C. Mello was awarded the 2006 Nobel Prize in Physiology or Medicine for the discovery of RNA interference (RNAi), investigating small RNA silencing pathways, epigenetic inheritance, and therapeutics.",
                "source": "https://www.umassmed.edu/rti/faculty/mello-lab/"
            },
            {
                "id": 5049,
                "name": "Dr. Javier Reyes",
                "role": "Chancellor of the University of Massachusetts Amherst and Professor of Economics",
                "department": "Department of Economics",
                "subject": "social-sciences",
                "bio": "Dr. Javier Reyes is an economist specializing in international trade, central bank macroeconomic policy, and university innovation commercialization.",
                "source": "https://www.umass.edu/chancellor/about-chancellor"
            }
        ]
    }
]

with open("scripts/b74_p1_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 74 Part 1.")
