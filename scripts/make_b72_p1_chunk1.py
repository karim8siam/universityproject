# scripts/make_b72_p1_chunk1.py
# Universities 1 to 8 of Batch 72
# Opps: 10587 to 10634 (48 opps)
# Res: 4849 to 4872 (24 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Western Nevada College",
        "shortName": "WNC",
        "slug": "western-nevada-college",
        "location": "Carson City, Nevada, United States",
        "website": "https://www.wnc.edu",
        "sourceRow": 1215,
        "stats": {
            "established": "1971",
            "students": "4,100+",
            "international": "3%",
            "faculty": "190+"
        },
        "hero": {
            "tagline": "Carson City · Premier Public College of the Sierra Nevada",
            "desc": "Western Nevada College serves western Nevada across campuses in Carson City, Fallon, and Douglas, providing comprehensive collegiate pathways in applied technologies, nursing, sustainable engineering sciences, and university transfer programs. Affiliated with the Nevada System of Higher Education (NSHE), WNC pairs state-of-the-art laboratory facilities with accessible workforce partnerships."
        },
        "admissions": {
            "general": "High school diploma, GED, or accredited secondary credential. Open access admissions with specialized criteria for professional allied health, nursing, and technical associate programs.",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international applicants whose secondary instruction was not in English.",
            "deadlines": "Rolling admissions for general programs; Priority fall admission February 1, 2027; Spring semester priority November 1, 2026."
        },
        "financial": {
            "summary": "Eligible students receive NSHE Millennium Scholarships, WNC Foundation scholarships, and Western Undergraduate Exchange (WUE) tuition rate discounts ($4,200/semester value).",
            "tuition": "$3,800 - $11,500/year (Resident vs Out-of-state/International)"
        },
        "opportunities": [
            {
                "id": 10587,
                "title": "Associate of Applied Science in Nursing (AAS - Registered Nurse)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ACEN-accredited pre-licensure registered nursing cohort featuring high-fidelity simulation hospital labs and clinical rotations at Carson Tahoe Regional Medical Center.",
                "funding": "WNC Foundation Healthcare Fellowship: $2,500/semester merit stipend with hospital tuition reimbursement partnerships",
                "tuition": "$4,200/year (In-state tuition baseline)",
                "fee": "$25",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.wnc.edu/nursing/",
                "requirements": {
                    "gpa": "2.75+ cumulative prerequisite GPA (anatomy, physiology, microbiology)",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "TEAS examination composite score 65%+",
                    "papers": "Transcripts, criminal background clearance, BLS certification",
                    "references": "Two professional/academic references"
                }
            },
            {
                "id": 10588,
                "title": "Bachelor of Applied Science in Organization & Project Management (BAS-OPM)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "engineering"],
                "desc": "Upper-division four-year applied baccalaureate designed for technical supervisors, logistics leaders, and project directors across industrial engineering and regional logistics hubs.",
                "funding": "Nevada Governor's Workforce Scholarship: Up to $3,000/year tuition offset for technical management candidates",
                "tuition": "$5,400/year (In-state rate)",
                "fee": "$25",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.wnc.edu/degrees/bas-opm/",
                "requirements": {
                    "gpa": "2.0+ GPA with completed Associate degree (AA, AS, or AAS)",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts, resume of relevant employment",
                    "references": "One professional recommendation"
                }
            },
            {
                "id": 10589,
                "title": "Associate of Science in Engineering Science - Nevada Transfer Pathway",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Rigorous foundation in calculus, university physics, statics, and computer programming, articulated for seamless junior-year transfer to UNR or UNLV College of Engineering.",
                "funding": "NSHE STEM Transfer Grant: $1,500/year merit scholarship for aspiring mechanical, civil, and electrical engineers",
                "tuition": "$3,800/year",
                "fee": "$25",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.wnc.edu/degrees/as-engineering/",
                "requirements": {
                    "gpa": "2.5+ high school or collegiate GPA with readiness for Calculus I",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official high school/college transcripts, math placement assessment",
                    "references": "Not required"
                }
            },
            {
                "id": 10590,
                "title": "Associate of Applied Science in Cyber Security and Networking",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Comprehensive hands-on curriculum encompassing ethical hacking, Cisco network administration, Linux security configurations, and cloud defensive protocols.",
                "funding": "DHS CyberCorps Regional Pipeline Assistance: $2,000 certification and equipment voucher",
                "tuition": "$3,800/year",
                "fee": "$25",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.wnc.edu/degrees/aas-cybersecurity/",
                "requirements": {
                    "gpa": "2.0+ GPA or equivalent GED standing",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Secondary transcripts, technical goal statement",
                    "references": "One letter optional"
                }
            },
            {
                "id": 10591,
                "title": "Associate of Science in Environmental Science & Geosciences",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "chemistry"],
                "desc": "Fieldwork-intensive science curriculum examining Sierra Nevada hydrology, Great Basin climate shifts, geographic information systems (GIS), and conservation ecology.",
                "funding": "Great Basin Conservation Field Grant: $1,800 travel and equipment stipend for watershed fieldwork",
                "tuition": "$3,800/year",
                "fee": "$25",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.wnc.edu/degrees/as-environmental/",
                "requirements": {
                    "gpa": "2.5+ GPA in natural sciences and algebra",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of environmental interest",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10592,
                "title": "Associate of Applied Science in Advanced Manufacturing & Automation Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Mechatronics, programmable logic controllers (PLCs), robotics, and CNC machining instruction aligned with northern Nevada's Tahoe-Reno Industrial Center manufacturing ecosystem.",
                "funding": "Tesla Manufacturing Development Fellowship: $3,500/year award plus paid apprenticeship internship",
                "tuition": "$3,950/year",
                "fee": "$25",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.wnc.edu/manufacturing/",
                "requirements": {
                    "gpa": "2.0+ GPA, industrial safety assessment completion",
                    "ielts": "IELTS 5.5 or TOEFL 55",
                    "gre": "Not required",
                    "papers": "Application form, official transcripts",
                    "references": "Not required"
                }
            }
        ],
        "researchers": [
            {
                "id": 4849,
                "name": "Dr. Deborah Ingraffia-Strong",
                "role": "Professor and Director of Nursing & Allied Health",
                "department": "Division of Nursing and Allied Health",
                "subject": "biology",
                "bio": "Specializes in clinical simulation pedagogy, acute rural patient care outcomes, and NCLEX pre-licensure mastery among diverse non-traditional healthcare cohorts.",
                "source": "https://www.wnc.edu/nursing/faculty/"
            },
            {
                "id": 4850,
                "name": "Dr. Robert Russell",
                "role": "Professor of Physics and Engineering Science",
                "department": "Department of Physical Sciences and Mathematics",
                "subject": "physics",
                "bio": "Investigates computational celestial mechanics, observational astrophysics at the Jack C. Davis Observatory, and innovative engineering calculus instructional methods.",
                "source": "https://www.wnc.edu/observatory/"
            },
            {
                "id": 4851,
                "name": "Dr. Elizabeth Tattersall",
                "role": "Professor of Biology and Environmental Sciences",
                "department": "Department of Biological and Environmental Sciences",
                "subject": "environment",
                "bio": "Focuses on Great Basin plant genetics, arid riparian restoration ecology, and microbiological assays of high-desert soil microflora.",
                "source": "https://www.wnc.edu/faculty-tattersall/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Hellenic American University",
        "shortName": "HAU",
        "slug": "hellenic-american-university",
        "location": "Nashua, New Hampshire, United States",
        "website": "https://hauniv.edu",
        "sourceRow": 736,
        "stats": {
            "established": "2004",
            "students": "1,200+",
            "international": "38%",
            "faculty": "110+"
        },
        "hero": {
            "tagline": "Nashua & Athens · Transatlantic American Degree Pathways",
            "desc": "Chartered by the State of New Hampshire and accredited by the New England Commission of Higher Education (NECHE), Hellenic American University delivers transatlantic bachelor's, master's, and doctoral programs connecting campuses in Nashua, NH and Athens, Greece. The university emphasizes intercultural applied linguistics, business informatics, cybersecurity, and clinical psychology."
        },
        "admissions": {
            "general": "Secondary school diploma or recognized equivalent for undergraduate programs; conferred bachelor's degree from an accredited institution for master's and doctoral admission.",
            "language": "IELTS 6.5+, TOEFL iBT 80+, or Michigan ECPE/ALCE certification.",
            "deadlines": "Fall semester regular deadline July 15, 2027; Spring semester deadline December 15, 2026."
        },
        "financial": {
            "summary": "Merit scholarships covering 20% to 50% of tuition, Hellenic Heritage Scholarships, and graduate research assistantships in computational linguistics and cybersecurity.",
            "tuition": "$10,800 - $16,500/year depending on program and campus residency"
        },
        "opportunities": [
            {
                "id": 10593,
                "title": "Ph.D. in Language and Intercultural Communication",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Doctoral research program investigating forensic linguistics, translation studies, computational natural language processing, and bilingual cognitive development.",
                "funding": "HAU Presidential Doctoral Fellowship: $14,000/year living stipend plus 100% full tuition waiver",
                "tuition": "$0 (Fully funded fellowship)",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://hauniv.edu/programs/phd-language",
                "requirements": {
                    "gpa": "3.5+ GPA in master's degree in linguistics, education, or language sciences",
                    "ielts": "IELTS 7.5 or TOEFL 100",
                    "gre": "GRE optional; academic writing sample required",
                    "papers": "Dissertation research proposal (2,000 words), CV, official transcripts",
                    "references": "Three academic recommendation letters"
                }
            },
            {
                "id": 10594,
                "title": "Master of Science in Information Technology - Cybersecurity Track",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Advanced transatlantic IT curriculum addressing cloud architecture security, penetration testing, algorithmic cryptography, and GDPR/NIST compliance frameworks.",
                "funding": "Transatlantic Tech Leadership Award: $5,000 tuition grant for international STEM scholars",
                "tuition": "$11,200/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://hauniv.edu/programs/msit",
                "requirements": {
                    "gpa": "3.0+ GPA in computer science, software engineering, or mathematical sciences",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Statement of purpose, resume, transcripts",
                    "references": "Two professional/academic references"
                }
            },
            {
                "id": 10595,
                "title": "Master of Science in Clinical Psychology (MSCP)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Scientist-practitioner program preparing clinical counselors through psychopathology diagnostics, evidence-based cognitive behavioral therapy, and 600 supervised practicum hours.",
                "funding": "Clinical Practicum Graduate Scholarship: $4,000/year merit scholarship",
                "tuition": "$12,400/year",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://hauniv.edu/programs/mscp",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in psychology or social behavioral sciences",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required; admissions clinical interview required",
                    "papers": "Personal statement on clinical orientation, CV, transcripts",
                    "references": "Two academic or clinical letters"
                }
            },
            {
                "id": 10596,
                "title": "Master of Business Administration (MBA) in Global Sustainability & Finance",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "International executive MBA emphasizing ESG investment modeling, sustainable supply chain resilience, corporate valuation, and transatlantic cross-border enterprise strategy.",
                "funding": "Global Executive Fellowship: $4,500 merit reduction for international managers",
                "tuition": "$13,500/year",
                "fee": "$50",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://hauniv.edu/programs/mba",
                "requirements": {
                    "gpa": "3.0+ GPA with 2+ years of professional or administrative experience",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GMAT/GRE optional",
                    "papers": "Executive resume, statement of career objectives, transcripts",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10597,
                "title": "Bachelor of Science in Informatics - Data Analytics & Software Engineering",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Four-year NECHE-accredited baccalaureate focusing on full-stack web applications, relational and distributed databases, machine learning algorithms, and software testing.",
                "funding": "Future Informatics Innovators Grant: $6,000/year four-year recurring merit award",
                "tuition": "$10,800/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://hauniv.edu/programs/bsi",
                "requirements": {
                    "gpa": "2.75+ high school GPA with mathematics coursework",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Secondary transcripts, personal essay",
                    "references": "One teacher recommendation"
                }
            },
            {
                "id": 10598,
                "title": "Master of Arts in Applied Linguistics (MAAL) - TESOL Specialization",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Advanced linguistic framework exploring second language acquisition theory, psycholinguistics, digital language assessment, and curriculum development.",
                "funding": "Language Pedagogy Fellowship: $3,500 tuition reduction plus language lab mentoring stipend",
                "tuition": "$10,500/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://hauniv.edu/programs/maal",
                "requirements": {
                    "gpa": "3.0+ GPA in English, humanities, or modern foreign languages",
                    "ielts": "IELTS 7.0 or TOEFL 95",
                    "gre": "Not required",
                    "papers": "Statement of purpose, academic writing sample",
                    "references": "Two academic recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4852,
                "name": "Dr. Themis Kaniklidou",
                "role": "Associate Professor and Associate Provost",
                "department": "Department of Linguistics and Literary Studies",
                "subject": "social-sciences",
                "bio": "Investigates media discourse framing, critical translation analysis, and intercultural narrative cognition across transatlantic public communication platforms.",
                "source": "https://hauniv.edu/faculty-kaniklidou"
            },
            {
                "id": 4853,
                "name": "Dr. Panagiotis Kalozoumis",
                "role": "Associate Professor and Director of Informatics Programs",
                "department": "Division of Informatics and Engineering",
                "subject": "computer-science",
                "bio": "Specializes in quantum transport simulations, computational physics, and cryptographic algorithms for secure decentralized networks.",
                "source": "https://hauniv.edu/faculty-kalozoumis"
            },
            {
                "id": 4854,
                "name": "Dr. Alessandra Sax-Lane",
                "role": "Director of Psychology Programs and Associate Professor",
                "department": "Department of Psychology",
                "subject": "social-sciences",
                "bio": "Focuses on cross-cultural adolescent clinical interventions, systemic trauma therapy, and qualitative efficacy evaluations of mindfulness in multicultural populations.",
                "source": "https://hauniv.edu/faculty-sax-lane"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "IE New York College",
        "shortName": "IENYC",
        "slug": "ie-new-york-college",
        "location": "New York, New York, United States",
        "website": "https://www.ienyc.edu",
        "sourceRow": 743,
        "stats": {
            "established": "2023",
            "students": "450+",
            "international": "65%",
            "faculty": "40+"
        },
        "hero": {
            "tagline": "SoHo, Manhattan · Purpose-Driven Global Business & Sustainability",
            "desc": "IE New York College (IENYC), located in the heart of SoHo in Manhattan, is an accredited, degree-granting institution born from the legacy of the Glasgow Caledonian New York College (GCNYC) and backed by the global innovation of IE University. IENYC offers cutting-edge Master of Science degrees dedicated to business for social impact, sustainable fashion, risk management, and ethical corporate governance."
        },
        "admissions": {
            "general": "Bachelor's degree from an accredited institution with demonstrable commitment to sustainability, social impact, or ethical leadership.",
            "language": "TOEFL iBT 90+ or IELTS 7.0+ for candidates without a prior degree from an English-medium university.",
            "deadlines": "Rolling admissions with priority rounds: Round 1 February 1, 2027; Round 2 April 15, 2027; Final Round July 1, 2027."
        },
        "financial": {
            "summary": "Impact Innovation Scholarships covering up to 40% of tuition, Fair Fashion Center Fellowships, and corporate sustainability sponsorship partnerships.",
            "tuition": "$24,500/year (Graduate master's tuition rate)"
        },
        "opportunities": [
            {
                "id": 10599,
                "title": "Master of Science in Business for Social Impact & Sustainability",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Groundbreaking graduate curriculum synthesizing circular economy principles, ESG metrics reporting, social enterprise financing, and stakeholder value creation.",
                "funding": "Global Impact Leaders Scholarship: $10,000 merit award based on entrepreneurial sustainability portfolio",
                "tuition": "$24,500/year",
                "fee": "$75",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.ienyc.edu/academics/ms-business-social-impact/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "GRE/GMAT optional",
                    "papers": "Impact statement (750 words), resume, official transcripts",
                    "references": "Two recommendations (academic or professional)"
                }
            },
            {
                "id": 10600,
                "title": "Master of Science in Sustainable Fashion Enterprise & Supply Chains",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "environment"],
                "desc": "Pioneering SoHo-based program examining regenerative textile chemistry, ethical labor traceability, closed-loop fashion design, and sustainable brand leadership.",
                "funding": "Fair Fashion Center Innovation Fellowship: $8,500 tuition grant for ethical supply chain pioneers",
                "tuition": "$24,500/year",
                "fee": "$75",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.ienyc.edu/academics/ms-sustainable-fashion/",
                "requirements": {
                    "gpa": "3.0+ GPA in design, merchandising, business, or environmental studies",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Portfolio or analytical essay on fashion supply chain sustainability, CV",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10601,
                "title": "Master of Science in Risk, Resilience & Ethical Corporate Governance",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Interdisciplinary master's analyzing geopolitical risk forecasting, cybersecurity compliance, climate vulnerability stress testing, and organizational resilience.",
                "funding": "Corporate Governance Excellence Award: $7,000 scholarship awarded by the Board of Trustees",
                "tuition": "$24,500/year",
                "fee": "$75",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.ienyc.edu/academics/ms-risk-resilience/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in finance, economics, public policy, or computer science",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of motivation, professional resume",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10602,
                "title": "Graduate Certificate in Circular Economy & Sustainable Materials",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "chemistry"],
                "desc": "Intensive four-course credential analyzing bio-based materials, industrial ecology, lifecycle assessment (LCA), and extended producer responsibility policy.",
                "funding": "Clean Materials Fellowship: $2,500 industry-sponsored voucher",
                "tuition": "$8,200 (Total certificate tuition)",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.ienyc.edu/academics/certificates/",
                "requirements": {
                    "gpa": "Bachelor's degree with 2.75+ GPA",
                    "ielts": "IELTS 6.5 or TOEFL 85",
                    "gre": "Not required",
                    "papers": "Transcripts, brief professional statement",
                    "references": "One recommendation letter"
                }
            },
            {
                "id": 10603,
                "title": "IENYC Global Social Impact Summer Fellowship",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Eight-week competitive summer fellowship placing graduate researchers within leading New York non-profits, ESG consulting agencies, and B-Corporations.",
                "funding": "$4,000 living stipend plus direct mentorship from executive leaders",
                "tuition": "$0 (Fully funded fellowship)",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.ienyc.edu/fellowships/",
                "requirements": {
                    "gpa": "Enrolled graduate student with 3.3+ GPA in sustainability or business",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Research proposal on urban sustainability or social equity, resume",
                    "references": "Two academic recommendations"
                }
            },
            {
                "id": 10604,
                "title": "Master of Science in ESG Analytics & Sustainable Finance",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Quantitative finance track training students in climate scenario modeling, green bond structuring, impact investing metrics, and algorithmic sustainability screening.",
                "funding": "Wall Street Sustainable Finance Grant: $9,000 scholarship for quantitative analysts",
                "tuition": "$24,500/year",
                "fee": "$75",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.ienyc.edu/academics/ms-esg-analytics/",
                "requirements": {
                    "gpa": "3.2+ GPA with mathematics, statistics, or finance coursework",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "GRE/GMAT recommended but optional",
                    "papers": "Statement of intent, quantitative writing sample, transcripts",
                    "references": "Two letters of reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4855,
                "name": "Dr. Jacqueline LeBlanc",
                "role": "Vice President and Academic Dean",
                "department": "Office of Academic Affairs",
                "subject": "social-sciences",
                "bio": "Expert in higher education curricular innovation, sustainability pedagogy, and organizational ethics in urban master's degree programs.",
                "source": "https://www.ienyc.edu/faculty/jacqueline-leblanc/"
            },
            {
                "id": 4856,
                "name": "Dr. Michelle Gabriel",
                "role": "Director of Sustainable Fashion and Assistant Professor",
                "department": "Department of Sustainable Fashion and Design",
                "subject": "arts-design",
                "bio": "Investigates garment supply chain transparency, circular fashion economies, worker rights in apparel production, and consumer sustainability behaviors.",
                "source": "https://www.ienyc.edu/faculty/michelle-gabriel/"
            },
            {
                "id": 4857,
                "name": "Dr. Danielle Athanasiadis",
                "role": "Assistant Professor of Social Impact and Business Strategy",
                "department": "Department of Business for Social Impact",
                "subject": "social-sciences",
                "bio": "Researches social enterprise governance, B-Corp performance metrics, and corporate responsibility impact measurement methodologies.",
                "source": "https://www.ienyc.edu/faculty/danielle-athanasiadis/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Iḷisaġvik College",
        "shortName": "Iḷisaġvik",
        "slug": "ilisagvik-college",
        "location": "Utqiaġvik, Alaska, United States",
        "website": "https://www.ilisagvik.edu",
        "sourceRow": 766,
        "stats": {
            "established": "1996",
            "students": "750+",
            "international": "2%",
            "faculty": "65+"
        },
        "hero": {
            "tagline": "Utqiaġvik · America's Northernmost Tribal College on the Arctic Ocean",
            "desc": "Iḷisaġvik College is Alaska's only federally recognized tribal college, situated at the top of the world in Utqiaġvik (formerly Barrow), Alaska. Governed by the North Slope Borough and accredited by the Northwest Commission on Colleges and Universities (NWCCU), Iḷisaġvik weaves indigenous Iñupiaq values with accredited degree programs in Arctic climate sciences, indigenous health, applied business, and industrial trades."
        },
        "admissions": {
            "general": "Open door admissions policy welcoming indigenous and non-indigenous students. High school diploma, GED, or completed placement assessment required for degree enrollment.",
            "language": "Standard English proficiency assessment; Iñupiaq language immersion pathways offered.",
            "deadlines": "Fall semester priority admission August 1, 2027; Spring semester priority December 15, 2026."
        },
        "financial": {
            "summary": "100% tuition-free North Slope Borough resident waivers, American Indian College Fund scholarships, and full dorm/dining subsidies for full-time Arctic scholars.",
            "tuition": "$3,840/year (Non-resident tuition rate; $0 for North Slope residents)"
        },
        "opportunities": [
            {
                "id": 10605,
                "title": "Associate of Science in Indigenous & Arctic Environmental Science",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Hands-on research degree combining Western Arctic climatology with Indigenous Ecological Knowledge (IEK) studying sea ice retreat, permafrost thawing, and marine subsistence ecosystems.",
                "funding": "National Science Foundation Arctic REU Fellowship: $6,000 summer research stipend plus Arctic survival gear allowance",
                "tuition": "$3,840/year (Free for North Slope residents)",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.ilisagvik.edu/programs/environmental-science/",
                "requirements": {
                    "gpa": "2.0+ high school or collegiate GPA",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "Transcripts, letter of motivation focusing on Arctic environments",
                    "references": "One recommendation"
                }
            },
            {
                "id": 10606,
                "title": "Associate of Applied Science in Allied Health & Arctic Community Health",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Clinical training program educating community health practitioners and pre-nursing candidates in rural Arctic emergency response, telemedicine, and tribal health clinics.",
                "funding": "Indian Health Service (IHS) Health Professions Scholarship: 100% full tuition, books, and $1,500/month living stipend",
                "tuition": "$0 (Fully funded through IHS partnership)",
                "fee": "$0",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.ilisagvik.edu/programs/allied-health/",
                "requirements": {
                    "gpa": "2.5+ GPA in high school biology and mathematics",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Official transcripts, background check, immunization records",
                    "references": "Two letters of reference"
                }
            },
            {
                "id": 10607,
                "title": "Associate of Arts in Iñupiaq Studies & Cultural Heritage Preservation",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Immersion curriculum examining Iñupiat oral histories, Arctic maritime sovereignty, indigenous governance, and traditional subsistence technologies.",
                "funding": "Arctic Heritage Fellowship: $2,500/semester scholarship and elders-in-residence mentorship grant",
                "tuition": "$3,840/year",
                "fee": "$0",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.ilisagvik.edu/programs/inupiaq-studies/",
                "requirements": {
                    "gpa": "2.0+ GPA or high school completion equivalent",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "Statement of interest in indigenous Arctic cultures",
                    "references": "One personal or academic reference"
                }
            },
            {
                "id": 10608,
                "title": "Associate of Applied Science in Information Technology & Arctic Telecommunications",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Specialized curriculum addressing low-earth-orbit (LEO) satellite communications, microwave networking across Arctic tundra, Linux server infrastructure, and network defense.",
                "funding": "North Slope Telecom Leadership Grant: $3,000/year plus summer technical internship with regional utilities",
                "tuition": "$3,840/year",
                "fee": "$0",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.ilisagvik.edu/programs/information-technology/",
                "requirements": {
                    "gpa": "2.0+ GPA with computer literacy",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "Transcripts and brief statement of technical interests",
                    "references": "Not required"
                }
            },
            {
                "id": 10609,
                "title": "Associate of Applied Science in Accounting & Tribal Business Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Comprehensive managerial accounting and leadership degree preparing graduates for management roles within Alaska Native Corporations (ANCs) and municipal governments.",
                "funding": "Alaska Native Corporate Leadership Scholarship: $4,000/year corporate grant",
                "tuition": "$3,840/year",
                "fee": "$0",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.ilisagvik.edu/programs/business/",
                "requirements": {
                    "gpa": "2.0+ GPA in mathematics and English",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "High school or college transcripts",
                    "references": "One reference letter"
                }
            },
            {
                "id": 10610,
                "title": "Certificate in Heavy Truck Operations and Arctic Heavy Equipment Mechanics",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Intensive hands-on mechanical certification training technicians to operate, troubleshoot, and maintain heavy diesel machinery under extreme sub-zero conditions on the North Slope.",
                "funding": "ConocoPhillips Arctic Workforce Scholarship: 100% full tuition, tools allowance, and commercial driver certification fees",
                "tuition": "$0 (Fully covered by industrial endowment)",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.ilisagvik.edu/programs/industrial-trades/",
                "requirements": {
                    "gpa": "Valid driver's license, DOT physical fitness clearance",
                    "ielts": "Basic functional English",
                    "gre": "Not required",
                    "papers": "Application form, driving history record",
                    "references": "Not required"
                }
            }
        ],
        "researchers": [
            {
                "id": 4858,
                "name": "Dr. Birgit Hagedorn",
                "role": "Professor of Environmental and Chemical Sciences",
                "department": "Department of Natural and Environmental Sciences",
                "subject": "environment",
                "bio": "Geochemist specializing in Arctic coastal erosion rates, permafrost degradation chemistry, and trace element biogeochemistry in high-latitude marine environments.",
                "source": "https://www.ilisagvik.edu/faculty/hagedorn/"
            },
            {
                "id": 4859,
                "name": "Prof. Jerica Leavitt",
                "role": "Associate Professor and Chair of Iñupiaq Studies",
                "department": "Department of Iñupiaq Studies and Heritage",
                "subject": "social-sciences",
                "bio": "Indigenous scholar researching North Slope oral histories, Arctic indigenous sovereignty, and the revitalisation of Iñupiat linguistic paradigms in community education.",
                "source": "https://www.ilisagvik.edu/faculty/leavitt/"
            },
            {
                "id": 4860,
                "name": "Dr. Cheryl Edenshaw",
                "role": "Dean of Workforce Development & Applied Sciences",
                "department": "Division of Applied Technologies and Trades",
                "subject": "engineering",
                "bio": "Researches vocational technical education in remote Arctic communities, indigenous workforce capacity building, and cold-climate engineering pedagogy.",
                "source": "https://www.ilisagvik.edu/faculty/edenshaw/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Kentucky Community and Technical College System",
        "shortName": "KCTCS",
        "slug": "kentucky-community-and-technical-college-system",
        "location": "Versailles, Kentucky, United States",
        "website": "https://kctcs.edu",
        "sourceRow": 777,
        "stats": {
            "established": "1997",
            "students": "100,000+",
            "international": "2%",
            "faculty": "4,200+"
        },
        "hero": {
            "tagline": "Versailles & 16 Statewide Colleges · Kentucky's Largest Higher Education Provider",
            "desc": "The Kentucky Community and Technical College System (KCTCS) comprises 16 accredited colleges across more than 70 campuses throughout the Commonwealth of Kentucky. Headquartered in Versailles, KY, KCTCS educates over 100,000 students annually, offering university-parallel transfer associate degrees, high-demand healthcare pathways, automated manufacturing credentials, and advanced cybersecurity diplomas."
        },
        "admissions": {
            "general": "Open admission policy with submission of official high school transcripts or GED credential. Specific health sciences programs maintain selective admission criteria.",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international candidates without prior English-language secondary schooling.",
            "deadlines": "Fall semester priority deadline August 1, 2027; Spring semester priority deadline January 5, 2027."
        },
        "financial": {
            "summary": "Work Ready Kentucky Scholarship providing 100% free tuition for eligible certificates and associate degrees in healthcare, manufacturing, business/IT, construction, and logistics.",
            "tuition": "$4,560/year (In-state tuition baseline; $9,120 out-of-state)"
        },
        "opportunities": [
            {
                "id": 10611,
                "title": "Associate of Applied Science in Registered Nursing (RN Pre-Licensure)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ACEN-accredited state-of-the-art clinical program delivering extensive simulation training and clinical rotations at regional UK HealthCare and Baptist Health medical centers.",
                "funding": "Work Ready Kentucky Healthcare Scholarship: 100% full tuition coverage plus textbook support",
                "tuition": "$0 (Eligible under Work Ready Kentucky program)",
                "fee": "$30",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/nursing.aspx",
                "requirements": {
                    "gpa": "2.75+ cumulative GPA with grade of C or higher in anatomy and physiology",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "NLN PAX-RN or ACT composite score 20+",
                    "papers": "Official transcripts, criminal background check, CPR certification",
                    "references": "Two professional/educational references"
                }
            },
            {
                "id": 10612,
                "title": "Associate in Science - Pre-Engineering Statewide Transfer Pathway",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Curriculum articulated with the University of Kentucky and University of Louisville Colleges of Engineering, covering multivariable calculus, differential equations, and physics mechanics.",
                "funding": "KCTCS STEM Transfer Fellowship: $2,000/year merit scholarship for aspiring engineers",
                "tuition": "$4,560/year",
                "fee": "$30",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/engineering.aspx",
                "requirements": {
                    "gpa": "2.5+ GPA with readiness for Calculus I",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "High school or college transcripts, math placement assessment",
                    "references": "Not required"
                }
            },
            {
                "id": 10613,
                "title": "Associate of Applied Science in Computer and Information Technologies - Cybersecurity",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "NSA-aligned curriculum in network defense, ethical hacking, digital forensics, firewall architecture, and cloud systems security administration.",
                "funding": "Work Ready Kentucky IT Scholarship: 100% free tuition for qualifying Kentucky residents",
                "tuition": "$0 - $4,560/year",
                "fee": "$30",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/computer-information-technology.aspx",
                "requirements": {
                    "gpa": "2.0+ GPA or high school diploma",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, student intent form",
                    "references": "Not required"
                }
            },
            {
                "id": 10614,
                "title": "Associate of Applied Science in Advanced Manufacturing Technology (AMT)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Elite multi-craft mechatronics work-study program affiliated with the Kentucky Federation for Advanced Manufacturing Education (KY FAME), featuring 3 days paid factory work per week.",
                "funding": "KY FAME Paid Apprenticeship: Earn $18 - $24/hour while completing the degree debt-free",
                "tuition": "$0 (Covered by participating manufacturing employer)",
                "fee": "$30",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/advanced-manufacturing.aspx",
                "requirements": {
                    "gpa": "2.5+ GPA, mechanical aptitude assessment, partner employer interview",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, professional resume, interview assessment score",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10615,
                "title": "Associate of Applied Science in Equine Studies - Thoroughbred Breeding & Management",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "World-renowned Bluegrass equine curriculum delivering hands-on stallion management, broodmare foaling care, equine nutrition, and thoroughbred bloodstock analytics.",
                "funding": "Kentucky Thoroughbred Association Scholarship: $3,000/year award for equine leaders",
                "tuition": "$4,560/year",
                "fee": "$30",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/equine-studies.aspx",
                "requirements": {
                    "gpa": "2.0+ GPA with demonstrated interest in equine industry",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Application, official high school/college transcripts",
                    "references": "One equine industry recommendation"
                }
            },
            {
                "id": 10616,
                "title": "Associate in Arts - Pre-Law & Public Policy Statewide Transfer Pathway",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Foundational humanities, American constitutional history, judicial politics, and critical logic coursework guaranteed to transfer to any Kentucky public four-year university.",
                "funding": "John T. Smith Academic Scholarship: $1,500/year tuition award for humanities students",
                "tuition": "$4,560/year",
                "fee": "$30",
                "deadline": "2027-07-20",
                "deadlineText": "July 20, 2027",
                "source": "https://kctcs.edu/education-training/program-finder/associate-in-arts.aspx",
                "requirements": {
                    "gpa": "2.0+ GPA or equivalent high school standing",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "High school or college transcripts",
                    "references": "Not required"
                }
            }
        ],
        "researchers": [
            {
                "id": 4861,
                "name": "Dr. Ryan Quarles",
                "role": "President of KCTCS and Professor of Public Policy",
                "department": "Office of the System President",
                "subject": "social-sciences",
                "bio": "Distinguished public administrator and agricultural economist researching rural workforce infrastructure, dual-credit community college matriculation, and state education policy.",
                "source": "https://kctcs.edu/about/leadership/president.aspx"
            },
            {
                "id": 4862,
                "name": "Dr. Reneau Waggoner",
                "role": "Acting Vice President of Academic Affairs",
                "department": "Division of Academic Affairs and Student Success",
                "subject": "social-sciences",
                "bio": "Specializes in competency-based collegiate pathways, statewide articulation agreements, and STEM persistence among underrepresented rural Kentucky student cohorts.",
                "source": "https://kctcs.edu/about/leadership/academic-affairs.aspx"
            },
            {
                "id": 4863,
                "name": "Prof. Dixie Webb",
                "role": "Professor and Program Coordinator of Equine Studies",
                "department": "Department of Agriculture and Equine Sciences",
                "subject": "biology",
                "bio": "Expert in thoroughbred neonatal physiology, equine reproductive technologies, and pedagogical frameworks for international equine industry apprenticeships.",
                "source": "https://kctcs.edu/faculty-webb/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Lakeland University Central Wisconsin",
        "shortName": "Lakeland Central WI",
        "slug": "lakeland-university-central-wisconsin",
        "location": "Wisconsin Rapids, Wisconsin, United States",
        "website": "https://lakeland.edu",
        "sourceRow": 783,
        "stats": {
            "established": "1862",
            "students": "2,800+",
            "international": "9%",
            "faculty": "210+"
        },
        "hero": {
            "tagline": "Wisconsin Rapids · Pioneers of Cooperative Higher Education",
            "desc": "Lakeland University's Central Wisconsin Center, situated within Mid-State Technical College in Wisconsin Rapids, delivers innovative four-year bachelor's and graduate degrees through Lakeland's nationally recognized Cooperative Education model. Students blend rigorous academic courses with paid, professional work experiences, significantly offsetting tuition costs while graduating with extensive corporate resumes."
        },
        "admissions": {
            "general": "High school diploma with 2.5+ GPA for freshmen; transfer applicants with 12+ collegiate credits require 2.0+ GPA. Seamless transfer pathways for technical college associate degree holders.",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international applicants whose primary language is not English.",
            "deadlines": "Rolling admissions throughout the year; Fall semester priority August 1, 2027; Spring semester priority January 5, 2027."
        },
        "financial": {
            "summary": "Lakeland Co-Op Program students earn up to $40,000 across their undergraduate studies while receiving merit scholarships up to $15,000/year.",
            "tuition": "$15,600 - $31,500/year (significantly offset by Co-Op earnings)"
        },
        "opportunities": [
            {
                "id": 10617,
                "title": "Bachelor of Arts in Computer Science - Cooperative Education Track",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Four-year curriculum integrating full-time software engineering, database design, and web architecture coursework with paid local software development co-op positions.",
                "funding": "Lakeland Co-Op Earnings + Merit Award: Earn up to $10,000/year in paid co-op wages plus $8,000 annual academic scholarship",
                "tuition": "$15,600/year (Adult & Center rate)",
                "fee": "$0",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://lakeland.edu/programs/computer-science",
                "requirements": {
                    "gpa": "2.5+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts, resume for co-op placement matching",
                    "references": "One recommendation letter"
                }
            },
            {
                "id": 10618,
                "title": "Master of Business Administration (MBA) - Healthcare Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Flexible hybrid MBA tailored for healthcare executives, exploring hospital financial modeling, clinical risk management, health informatics, and regulatory compliance.",
                "funding": "Mid-State Healthcare Leadership Grant: $3,500 tuition discount for regional health system employees",
                "tuition": "$11,250/year (Graduate program rate)",
                "fee": "$0",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://lakeland.edu/programs/mba",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, current professional resume, personal statement",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10619,
                "title": "Bachelor of Arts in Accounting - CPA Exam Preparation Pathway",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Comprehensive 150-hour accounting curriculum covering federal taxation, forensic auditing, managerial cost accounting, and business law, paired with paid accounting co-ops.",
                "funding": "Wisconsin CPA Foundation Fellowship: $3,000 annual grant plus paid corporate tax internship",
                "tuition": "$15,600/year",
                "fee": "$0",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://lakeland.edu/programs/accounting",
                "requirements": {
                    "gpa": "2.5+ GPA or completed Associate in Accounting",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of career goals",
                    "references": "One reference"
                }
            },
            {
                "id": 10620,
                "title": "Bachelor of Arts in Criminal Justice - Juvenile Justice & Homeland Security",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Multi-perspective examination of constitutional criminal procedure, criminological theory, restorative juvenile justice, and correctional administration.",
                "funding": "Public Safety Service Scholarship: $2,500/year tuition reduction for law enforcement cadets",
                "tuition": "$15,600/year",
                "fee": "$0",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://lakeland.edu/programs/criminal-justice",
                "requirements": {
                    "gpa": "2.0+ GPA with secondary diploma or equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts, criminal background clearance",
                    "references": "One professional recommendation"
                }
            },
            {
                "id": 10621,
                "title": "Master of Science in Leadership and Organizational Development (MS-LOD)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Applied graduate degree focusing on executive team mediation, organizational change facilitation, strategic foresight, and workplace equity systems.",
                "funding": "Executive Talent Development Award: $4,000 tuition fellowship for non-profit and educational leaders",
                "tuition": "$11,250/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://lakeland.edu/programs/ms-leadership",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, leadership philosophy essay (500 words), transcripts",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10622,
                "title": "Bachelor of Arts in Psychology - Behavioral Assessment & Mental Health",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Empirically grounded undergraduate major exploring cognitive neuroscience, abnormal psychology, child development, and practical clinical counseling methodologies.",
                "funding": "Community Mental Health Scholarship: $2,500/year award for behavioral health interns",
                "tuition": "$15,600/year",
                "fee": "$0",
                "deadline": "2027-07-20",
                "deadlineText": "July 20, 2027",
                "source": "https://lakeland.edu/programs/psychology",
                "requirements": {
                    "gpa": "2.5+ GPA or associate degree transfer equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts, personal statement",
                    "references": "One academic reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4864,
                "name": "Dr. Scott Niederjohn",
                "role": "Professor of Economics and Director of the Center for Economic Education",
                "department": "School of Business and Entrepreneurship",
                "subject": "social-sciences",
                "bio": "Nationally recognized expert in financial literacy pedagogy, macroeconomics of Midwestern manufacturing, and market-based environmental resource allocation.",
                "source": "https://lakeland.edu/faculty/niederjohn/"
            },
            {
                "id": 4865,
                "name": "Dr. Cindy Lindstrom",
                "role": "Associate Professor of Computer Science",
                "department": "Department of Computer Science",
                "subject": "computer-science",
                "bio": "Investigates human-computer interaction, accessibility in web design, algorithms for distributed database systems, and cooperative learning pedagogy in computing.",
                "source": "https://lakeland.edu/faculty/lindstrom/"
            },
            {
                "id": 4866,
                "name": "Dr. Anthony Liguori",
                "role": "Professor of Psychology",
                "department": "Department of Social and Behavioral Sciences",
                "subject": "social-sciences",
                "bio": "Focuses on cognitive psychopharmacology, clinical sleep disturbances, and behavioral interventions for substance dependence in community outpatient clinics.",
                "source": "https://lakeland.edu/faculty/liguori/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Lincoln Memorial University - Lexington",
        "shortName": "LMU Lexington",
        "slug": "lincoln-memorial-university-lexington",
        "location": "Lexington, Kentucky, United States",
        "website": "https://www.lmunet.edu",
        "sourceRow": 791,
        "stats": {
            "established": "1897",
            "students": "5,400+",
            "international": "6%",
            "faculty": "480+"
        },
        "hero": {
            "tagline": "Lexington · Premier Appalachian Veterinary & Medical Education",
            "desc": "Lincoln Memorial University's Lexington site, located at 1451 Harrodsburg Road in Lexington, KY, serves as a vital clinical instruction facility for LMU's Richard A. Gillespie College of Veterinary Medicine and allied healthcare disciplines. LMU provides cutting-edge medical training, community veterinary outreach, and advanced doctoral fellowships."
        },
        "admissions": {
            "general": "Bachelor's degree with rigorous pre-veterinary/pre-medical science prerequisites (organic chemistry, biochemistry, genetics, physics). Veterinary Medical College Application Service (VMCAS) submission.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ for international candidates without prior English-language higher education degrees.",
            "deadlines": "VMCAS national application deadline September 15, 2027; Secondary application deadline October 1, 2027."
        },
        "financial": {
            "summary": "Appalachian Health & Veterinary Scholarships, Dean's Merit Awards ($5,000 - $15,000/year), and Federal Health Professions student loan repayment programs.",
            "tuition": "$49,800/year (Doctor of Veterinary Medicine professional tuition rate)"
        },
        "opportunities": [
            {
                "id": 10623,
                "title": "Doctor of Veterinary Medicine (DVM) - Equine & Food Animal Clinical Track",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "AVMA-accredited four-year professional doctorate utilizing Lexington's premier thoroughbred equine hospitals and high-fidelity surgical simulation laboratories.",
                "funding": "Bluegrass Equine Veterinary Fellowship: $10,000/year merit scholarship for aspiring equine veterinary surgeons",
                "tuition": "$49,800/year",
                "fee": "$100",
                "deadline": "2027-09-15",
                "deadlineText": "September 15, 2027",
                "source": "https://www.lmunet.edu/college-of-veterinary-medicine/dvm/",
                "requirements": {
                    "gpa": "3.0+ science GPA with 400+ hours of verified veterinary clinical experience",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE optional; Casper situational judgement test required",
                    "papers": "VMCAS personal essay, veterinary experience log, official transcripts",
                    "references": "Three letters of recommendation (at least one licensed veterinarian)"
                }
            },
            {
                "id": 10624,
                "title": "Master of Science in Veterinary Biomedical Science (MS-VBS)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "One-year intensive biomedical master's delivering graduate-level histology, gross mammalian anatomy, immunology, and pharmacology as a bridge to veterinary or human medicine.",
                "funding": "Biomedical Dean's Scholarship: $4,500 tuition offset based on undergraduate STEM merit",
                "tuition": "$21,600/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.lmunet.edu/college-of-veterinary-medicine/ms-vbs/",
                "requirements": {
                    "gpa": "2.8+ undergraduate GPA in biology, animal science, or chemistry",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "MCAT, GRE, or DAT accepted",
                    "papers": "Official collegiate transcripts, personal goal statement",
                    "references": "Two science faculty recommendations"
                }
            },
            {
                "id": 10625,
                "title": "Doctor of Physical Therapy (DPT) - Musculoskeletal Rehabilitation",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "CAPTE-accredited doctorate combining advanced biomechanics, neuromuscular rehabilitation, sports physical therapy, and 36 weeks of full-time clinical internships.",
                "funding": "Appalachian Rural Physical Therapy Fellowship: $6,000/year award with clinical service commitment",
                "tuition": "$38,400/year",
                "fee": "$75",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.lmunet.edu/school-of-medical-sciences/dpt/",
                "requirements": {
                    "gpa": "3.0+ prerequisite science GPA with 50+ hours of physical therapy observation",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE composite score 295+",
                    "papers": "PTCAS application, official transcripts, essay",
                    "references": "Two recommendations (including licensed physical therapist)"
                }
            },
            {
                "id": 10626,
                "title": "Master of Medical Science in Physician Assistant Studies (MMS-PA)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ARC-PA accredited 27-month clinical curriculum training advanced healthcare clinicians through primary care rotations, emergency medicine, and surgical clerkships.",
                "funding": "Primary Care Health Service Scholarship: $5,000/year award for rural primary care practice",
                "tuition": "$41,200/year",
                "fee": "$75",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.lmunet.edu/school-of-medical-sciences/pa/",
                "requirements": {
                    "gpa": "3.0+ cumulative and prerequisite GPA with 500+ hours direct patient care",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "GRE or PA-CAT required",
                    "papers": "CASPA application, transcripts, statement of career objectives",
                    "references": "Three clinical/academic references"
                }
            },
            {
                "id": 10627,
                "title": "Veterinary Postdoctoral Fellowship in Equine Sports Medicine and Surgery",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "engineering"],
                "desc": "Two-year mentored clinical research fellowship in Lexington, KY studying advanced musculoskeletal diagnostic ultrasound, equine regenerative stem cell therapies, and arthroscopic surgery.",
                "funding": "$54,000/year salaried clinical fellowship with complete health insurance and conference travel allowance",
                "tuition": "$0 (Fully salaried clinical position)",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.lmunet.edu/college-of-veterinary-medicine/postdoc/",
                "requirements": {
                    "gpa": "Conferred DVM or VMD with completed rotating equine internship",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required; licensed or eligible for Kentucky veterinary license",
                    "papers": "Curriculum vitae, statement of research and clinical objectives",
                    "references": "Three letters from equine veterinary specialists"
                }
            },
            {
                "id": 10628,
                "title": "Master of Science in Clinical Mental Health Counseling (MS-CMHC)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "CACREP-accredited professional counselor education exploring psychopathology, trauma-informed crisis intervention, substance abuse diagnostics, and family counseling.",
                "funding": "Rural Community Mental Health Stipend: $3,500/year scholarship with clinic practicum placement",
                "tuition": "$14,800/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.lmunet.edu/school-of-medical-sciences/counseling/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in psychology, social work, or related behavioral science",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, clinical statement of intent, admissions interview",
                    "references": "Two professional/academic recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4867,
                "name": "Dr. Stacy Anderson",
                "role": "Dean and Professor of Large Animal Surgery",
                "department": "Richard A. Gillespie College of Veterinary Medicine",
                "subject": "biology",
                "bio": "Diplomate ACVS; internationally recognized equine surgeon investigating equine regenerative therapies, tendon repair biomechanics, and simulation models in veterinary clinical training.",
                "source": "https://www.lmunet.edu/faculty/anderson-stacy/"
            },
            {
                "id": 4868,
                "name": "Dr. John Weale",
                "role": "Associate Professor of Equine Sports Medicine",
                "department": "Department of Clinical Sciences",
                "subject": "biology",
                "bio": "Researches cardiovascular adaptations in thoroughbred racehorses, equine upper respiratory endoscopy, and exercise-induced pulmonary hemorrhage prevention.",
                "source": "https://www.lmunet.edu/faculty/weale-john/"
            },
            {
                "id": 4869,
                "name": "Dr. Modupe Osinubi",
                "role": "Associate Professor of Veterinary Pharmacology and Toxicology",
                "department": "Department of Basic Medical Sciences",
                "subject": "chemistry",
                "bio": "Investigates pharmacokinetics of novel analgesics in food animals and pharmacogenomic determinants of adverse drug interactions in veterinary clinical practice.",
                "source": "https://www.lmunet.edu/faculty/osinubi-modupe/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "National Louis University - Florida",
        "shortName": "NLU Florida",
        "slug": "national-louis-university-florida",
        "location": "Tampa, Florida, United States",
        "website": "https://nl.edu",
        "sourceRow": 842,
        "stats": {
            "established": "1886",
            "students": "9,500+",
            "international": "11%",
            "faculty": "650+"
        },
        "hero": {
            "tagline": "Tampa & Virtual · Historic Leader in Educational Leadership & Applied Psychology",
            "desc": "Founded in 1886, National Louis University is a private, non-profit institution famous for founding the National Kindergarten College and the National Parent Teacher Association (PTA). NLU's Florida regional presence, situated in Tampa, features prestigious doctoral and master's degree pathways through the National College of Education (NCE) and the College of Psychology and Behavioral Sciences."
        },
        "admissions": {
            "general": "Baccalaureate degree from a regionally accredited institution for master's programs; master's degree with 3.25+ GPA for Doctor of Education (Ed.D.) or Doctor of Psychology (Psy.D.) admission.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ for international candidates without prior English-instruction higher education.",
            "deadlines": "Fall cohort application deadline July 1, 2027; Spring cohort deadline November 15, 2026."
        },
        "financial": {
            "summary": "NLU Florida Educator Grants ($2,500/year), Provost's Doctoral Fellowships, and corporate tuition discount partnerships for public school educators.",
            "tuition": "$13,500 - $21,000/year depending on doctoral vs master's degree program"
        },
        "opportunities": [
            {
                "id": 10629,
                "title": "Doctor of Education (Ed.D.) in Educational Leadership and Policy",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Executive doctoral program for school district superintendents, principals, and state education policymakers, emphasizing data-driven equity reforms and educational finance.",
                "funding": "National College of Education Leadership Fellowship: $5,000/year award for practicing K-12 administrators",
                "tuition": "$16,800/year",
                "fee": "$60",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://nl.edu/national-college-of-education/programs/edd-educational-leadership/",
                "requirements": {
                    "gpa": "3.25+ master's GPA with 3+ years of certified educational leadership experience",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required; writing sample of administrative policy analysis required",
                    "papers": "Dissertation problem-of-practice statement, administrative resume, transcripts",
                    "references": "Three professional references (including superintendent/supervisor)"
                }
            },
            {
                "id": 10630,
                "title": "Master of Science in Clinical Mental Health Counseling",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "CACREP-accredited graduate counseling degree preparing licensed professional counselors through diagnosis, family systems therapy, trauma treatment, and 700 clinical hours.",
                "funding": "Florida Behavioral Health Workforce Grant: $4,000 tuition assistance for community clinic interns",
                "tuition": "$14,400/year",
                "fee": "$60",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://nl.edu/college-of-psychology-and-behavioral-sciences/programs/ms-clinical-mental-health-counseling/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in psychology or social behavioral sciences",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required; faculty admissions interview required",
                    "papers": "Statement of counseling philosophy, background disclosure, transcripts",
                    "references": "Two academic or professional recommendations"
                }
            },
            {
                "id": 10631,
                "title": "Master of Arts in Teaching (M.A.T.) - Special Education & Florida Teacher Certification",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "State-approved teacher preparation master's delivering structured literacy, positive behavioral intervention supports (PBIS), and year-long student teaching residencies.",
                "funding": "Florida Critical Teacher Shortage Grant: Up to $4,500/year state tuition offset",
                "tuition": "$13,200/year",
                "fee": "$60",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://nl.edu/national-college-of-education/programs/mat-special-education/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA, passing scores on Florida Teacher Certification Exam (FTCE) General Knowledge",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of teaching commitment, background clearance",
                    "references": "Two professional/educational references"
                }
            },
            {
                "id": 10632,
                "title": "Master of Science in Human Resource Management & Organizational Development",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "SHRM-aligned graduate program focusing on people analytics, strategic talent acquisition, executive labor relations, and organizational diversity frameworks.",
                "funding": "SHRM Student Leadership Scholarship: $2,500 tuition discount",
                "tuition": "$13,800/year",
                "fee": "$60",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://nl.edu/school-of-business-and-management/programs/ms-human-resource-management/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Resume of professional experience, statement of intent, transcripts",
                    "references": "Two professional letters"
                }
            },
            {
                "id": 10633,
                "title": "Doctor of Education (Ed.D.) in Higher Education Leadership",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Cohort-based doctoral degree for university deans, provosts, and student affairs executives examining enrollment management economics, collegiate law, and accreditation.",
                "funding": "Provost's Higher Education Scholar Award: $4,500/year doctoral grant",
                "tuition": "$16,800/year",
                "fee": "$60",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://nl.edu/national-college-of-education/programs/edd-higher-education/",
                "requirements": {
                    "gpa": "3.3+ master's GPA with 3+ years in collegiate administration or faculty role",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "Not required",
                    "papers": "Higher education policy critique essay, comprehensive CV, transcripts",
                    "references": "Three executive/academic references"
                }
            },
            {
                "id": 10634,
                "title": "Bachelor of Science in Health Care Leadership - Health Information Systems",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "computer-science"],
                "desc": "Bachelor's completion degree for healthcare professionals analyzing electronic health record (EHR) analytics, healthcare finance, clinical quality metrics, and HIPAA compliance.",
                "funding": "Tampa Bay Healthcare Workforce Grant: $3,000/year scholarship for hospital employees",
                "tuition": "$11,800/year",
                "fee": "$60",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://nl.edu/school-of-health-and-human-services/programs/bs-health-care-leadership/",
                "requirements": {
                    "gpa": "2.0+ GPA with completed Associate degree (AA, AS, or AAS in allied health)",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, allied health license if applicable",
                    "references": "One supervisor recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4870,
                "name": "Dr. Judah Viola",
                "role": "Dean and Professor of Psychology",
                "department": "College of Psychology and Behavioral Sciences",
                "subject": "social-sciences",
                "bio": "Community psychologist researching participatory program evaluation, non-profit capacity building, and community mental health interventions in urban and suburban populations.",
                "source": "https://nl.edu/faculty/judah-viola/"
            },
            {
                "id": 4871,
                "name": "Dr. Eleanor Wollett",
                "role": "Associate Professor of Educational Leadership",
                "department": "National College of Education",
                "subject": "social-sciences",
                "bio": "Specializes in educational administration mentoring, school district strategic improvement planning, and equitable instructional supervision methodologies.",
                "source": "https://nl.edu/faculty/eleanor-wollett/"
            },
            {
                "id": 4872,
                "name": "Dr. Terry Smith",
                "role": "Professor of Curriculum and Instruction",
                "department": "National College of Education",
                "subject": "social-sciences",
                "bio": "Focuses on digital pedagogy in K-12 classrooms, inquiry-based STEM learning designs, and teacher candidate efficacy assessment across multi-campus programs.",
                "source": "https://nl.edu/faculty/terry-smith/"
            }
        ]
    }
]

with open('scripts/b72_p1_chunk1_raw.json', 'w') as f:
    json.dump(unis, f, indent=2)

print('Generated b72_p1_chunk1_raw.json with 8 universities, 48 opps, 24 researchers.')
