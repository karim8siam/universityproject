# scripts/make_b72_p1_chunk2.py
# Universities 9 to 15 of Batch 72
# Opps: 10635 to 10676 (42 opps)
# Res: 4873 to 4893 (21 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Nebraska Christian College",
        "shortName": "NCC Papillion",
        "slug": "nebraska-christian-college",
        "location": "Papillion, Nebraska, United States",
        "website": "https://www.nechristian.edu",
        "sourceRow": 845,
        "stats": {
            "established": "1945",
            "students": "600+",
            "international": "4%",
            "faculty": "45+"
        },
        "hero": {
            "tagline": "Papillion · Faith-Based Biblical Leadership & Community Ministry",
            "desc": "Founded in 1945 in Norfolk, Nebraska, and later relocated to an expansive 80-acre modern campus in Papillion, Nebraska Christian College (NCC) historically prepared leaders for church ministry, non-profit community services, pastoral counseling, and intercultural missions. Accredited by the Association for Biblical Higher Education (ABHE), NCC merged academic vigor with relational community servant leadership."
        },
        "admissions": {
            "general": "High school diploma, home school completion, or GED equivalent. Christian character reference and personal faith testimony essay required for all degree tracks.",
            "language": "TOEFL iBT 65+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Fall semester priority deadline July 1, 2027; Spring semester deadline December 1, 2026."
        },
        "financial": {
            "summary": "Presidential Ministry Honors ($6,000/year), Church Matching Scholarships (up to $2,000/year), and campus ministry work-study allowances.",
            "tuition": "$14,500/year (Undergraduate residential tuition rate)"
        },
        "opportunities": [
            {
                "id": 10635,
                "title": "Bachelor of Arts in Christian Ministry - Pastoral Leadership Track",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Four-year biblical theology and leadership curriculum incorporating homiletics, church governance, hermeneutics, and year-long pastoral internships.",
                "funding": "Preaching Ministry Endowed Grant: $4,500/year tuition award plus church residency placement",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.nechristian.edu/academics/pastoral-ministry/",
                "requirements": {
                    "gpa": "2.25+ cumulative high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Personal faith essay (500 words), high school transcripts",
                    "references": "Two references (including pastoral endorsement)"
                }
            },
            {
                "id": 10636,
                "title": "Bachelor of Science in Intercultural Studies & Global Missions",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Interdisciplinary program examining cultural anthropology, cross-cultural linguistics, international disaster relief, and sustainable community development.",
                "funding": "Global Harvest Mission Scholarship: $3,500/year grant with international fieldwork travel support",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.nechristian.edu/academics/intercultural-studies/",
                "requirements": {
                    "gpa": "2.5+ GPA with secondary completion",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, cross-cultural service essay",
                    "references": "Two recommendation letters"
                }
            },
            {
                "id": 10637,
                "title": "Bachelor of Arts in Family Ministry & Christian Counseling",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Foundations of adolescent psychology, marital systems counseling, crisis intervention, and restorative youth mentorship in non-profit community organizations.",
                "funding": "Shepherd's Heart Youth Ministry Fellowship: $3,000 annual scholarship",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.nechristian.edu/academics/family-ministry/",
                "requirements": {
                    "gpa": "2.25+ GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Official transcripts, background check",
                    "references": "Two character references"
                }
            },
            {
                "id": 10638,
                "title": "Bachelor of Science in Worship Arts & Digital Media Technology",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "computer-science"],
                "desc": "Hands-on creative curriculum blending vocal/instrumental musicianship, digital audio production, lighting design, video broadcasting, and live event mixing.",
                "funding": "Worship Arts Media Talent Award: $4,000/year audition-based scholarship",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.nechristian.edu/academics/worship-arts/",
                "requirements": {
                    "gpa": "2.0+ GPA; musical or media production audition/portfolio",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Audition recording or creative portfolio, transcripts",
                    "references": "One musical/creative reference"
                }
            },
            {
                "id": 10639,
                "title": "Bachelor of Science in Non-Profit Organization Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Business leadership program addressing philanthropic fundraising, federal grant administration, non-profit financial accounting, and volunteer mobilization.",
                "funding": "Midwest Non-Profit Leadership Grant: $3,000/year award with regional charity internship",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.nechristian.edu/academics/nonprofit-management/",
                "requirements": {
                    "gpa": "2.5+ GPA in high school mathematics and social sciences",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of career goals",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10640,
                "title": "Associate of Arts in Biblical Studies & Christian Worldview",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Two-year foundational liberal arts curriculum covering Old and New Testament theology, biblical Greek basics, philosophy, and Christian apologetics.",
                "funding": "Foundations of Faith Scholarship: $2,000/year award for two-year scholars",
                "tuition": "$14,500/year",
                "fee": "$35",
                "deadline": "2027-07-20",
                "deadlineText": "July 20, 2027",
                "source": "https://www.nechristian.edu/academics/aa-biblical-studies/",
                "requirements": {
                    "gpa": "2.0+ GPA or GED standing",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Application, official high school transcripts",
                    "references": "One character recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4873,
                "name": "Dr. Mark R. Kraai",
                "role": "Professor of Pastoral Theology and Homiletics",
                "department": "Department of Biblical and Theological Studies",
                "subject": "social-sciences",
                "bio": "Investigates contemporary expository preaching paradigms, biblical hermeneutics in pluralistic societies, and mentoring structures in pastoral residency programs.",
                "source": "https://www.nechristian.edu/faculty/kraai/"
            },
            {
                "id": 4874,
                "name": "Prof. David A. Wick",
                "role": "Associate Professor of Intercultural Communications",
                "department": "Department of Intercultural Studies",
                "subject": "social-sciences",
                "bio": "Researches cross-cultural adaptation models, indigenous church planting dynamics in developing nations, and faith-based disaster response logistics.",
                "source": "https://www.nechristian.edu/faculty/wick/"
            },
            {
                "id": 4875,
                "name": "Dr. Brenda J. Smith",
                "role": "Chair of Christian Counseling & Psychology",
                "department": "Department of Family and Behavioral Sciences",
                "subject": "social-sciences",
                "bio": "Specializes in integration of biblical theology with cognitive behavioral counseling, marital reconciliation frameworks, and adolescent crisis intervention.",
                "source": "https://www.nechristian.edu/faculty/smith/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "North Carolina Open University",
        "shortName": "NCOU",
        "slug": "north-carolina-open-university",
        "location": "Charlotte, North Carolina, United States",
        "website": "https://ncou-edu.ac",
        "sourceRow": 867,
        "stats": {
            "established": "2018",
            "students": "1,400+",
            "international": "42%",
            "faculty": "95+"
        },
        "hero": {
            "tagline": "Charlotte & Global Online · Flexible Open Higher Education",
            "desc": "North Carolina Open University (NCOU) provides open-access higher education combining asynchronous digital learning systems with applied competency-based assessment. Situated with administrative offices in Charlotte, NC, NCOU delivers international degree programs across software engineering, artificial intelligence, healthcare administration, and international commerce."
        },
        "admissions": {
            "general": "High school diploma, GED, or recognized international secondary school leaving certificate. Conferred bachelor's degree for postgraduate master's and doctoral programs.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+; English medium instruction certificates accepted.",
            "deadlines": "Continuous monthly intake with terms beginning on the first Monday of every calendar month."
        },
        "financial": {
            "summary": "Global Access Scholarships covering up to 35% of tuition, corporate tuition sponsorships, and flexible modular pay-as-you-learn installment options.",
            "tuition": "$5,200 - $8,900/year (Undergraduate vs Graduate online rates)"
        },
        "opportunities": [
            {
                "id": 10641,
                "title": "Master of Science in Artificial Intelligence & Machine Learning Systems",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Cutting-edge curriculum examining deep neural networks, computer vision, natural language transformers, reinforcement learning, and ethical AI deployment.",
                "funding": "NCOU Tech Futures Fellowship: $3,000 tuition grant for international computer science scholars",
                "tuition": "$7,800/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://ncou-edu.ac/programs/ms-ai-ml",
                "requirements": {
                    "gpa": "2.8+ GPA in computer science, software engineering, or quantitative sciences",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official transcripts, statement of technical background, programming CV",
                    "references": "Two professional/academic references"
                }
            },
            {
                "id": 10642,
                "title": "Master of Science in Cybersecurity Operations and Cloud Defense",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Hands-on virtual lab training in penetration testing, threat hunting, AWS/Azure cloud security posture management, and NIST incident response protocols.",
                "funding": "Global Cyber Shield Scholarship: $2,500 tuition offset with industrial certification voucher",
                "tuition": "$7,800/year",
                "fee": "$50",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://ncou-edu.ac/programs/ms-cybersecurity",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, brief professional essay",
                    "references": "One recommendation"
                }
            },
            {
                "id": 10643,
                "title": "Bachelor of Science in Computer Information Systems - Web Engineering",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "arts-design"],
                "desc": "Four-year flexible degree emphasizing full-stack JavaScript architectures, cloud database management, mobile application design, and UI/UX engineering.",
                "funding": "Open Opportunity STEM Grant: $2,000/year tuition reduction",
                "tuition": "$5,200/year",
                "fee": "$40",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://ncou-edu.ac/programs/bs-cis",
                "requirements": {
                    "gpa": "2.0+ GPA or high school completion credential",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "High school transcripts or prior college credits",
                    "references": "Not required"
                }
            },
            {
                "id": 10644,
                "title": "Master of Health Administration (MHA) - Healthcare Informatics",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Graduate leadership program examining telemedicine platforms, health economics, patient privacy compliance, and clinical quality performance measurement.",
                "funding": "Healthcare Transformation Award: $2,800 scholarship for frontline clinic workers",
                "tuition": "$7,400/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://ncou-edu.ac/programs/mha",
                "requirements": {
                    "gpa": "2.75+ GPA in health sciences, business, or nursing",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, healthcare resume, statement of purpose",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10645,
                "title": "Master of Business Administration (MBA) in Global Enterprise Strategy",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Contemporary business administration curriculum focusing on international trade analytics, digital venture capitalization, corporate governance, and ESG leadership.",
                "funding": "Executive Innovation Fellowship: $3,200 tuition grant for global entrepreneurs",
                "tuition": "$8,200/year",
                "fee": "$50",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://ncou-edu.ac/programs/mba",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA with 1+ year professional experience",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, personal statement, transcripts",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10646,
                "title": "Bachelor of Science in Environmental Management and Sustainable Energy",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "engineering"],
                "desc": "Online baccalaureate exploring environmental impact assessments, renewable energy economics, global climate governance, and industrial sustainability auditing.",
                "funding": "Clean Energy Leadership Grant: $2,200/year scholarship",
                "tuition": "$5,400/year",
                "fee": "$40",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://ncou-edu.ac/programs/bs-environmental",
                "requirements": {
                    "gpa": "2.25+ GPA or secondary diploma",
                    "ielts": "IELTS 5.5 or TOEFL 60",
                    "gre": "Not required",
                    "papers": "Transcripts, brief environmental statement",
                    "references": "One recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4876,
                "name": "Dr. Marcus Vance",
                "role": "Dean of Computer Science and Information Systems",
                "department": "School of Computing and Digital Technologies",
                "subject": "computer-science",
                "bio": "Specializes in distributed deep learning networks, federated learning security protocols, and computational optimization in edge computing architectures.",
                "source": "https://ncou-edu.ac/faculty/vance/"
            },
            {
                "id": 4877,
                "name": "Dr. Elena Soros",
                "role": "Professor of Health Administration and Informatics",
                "department": "School of Health Sciences",
                "subject": "biology",
                "bio": "Investigates electronic health record interoperability, clinical decision support algorithms, and telemedicine efficacy in rural underserved healthcare markets.",
                "source": "https://ncou-edu.ac/faculty/soros/"
            },
            {
                "id": 4878,
                "name": "Dr. Tariq Al-Mansoor",
                "role": "Professor of International Business and Finance",
                "department": "School of Business and Global Commerce",
                "subject": "social-sciences",
                "bio": "Researches multinational supply chain risk mitigation, digital cross-border trade settlements, and corporate ESG compliance benchmarking.",
                "source": "https://ncou-edu.ac/faculty/al-mansoor/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Northwest Missouri State University - Kansas City",
        "shortName": "Northwest KC",
        "slug": "northwest-missouri-state-university-kansas-city",
        "location": "Kansas City, Missouri, United States",
        "website": "https://www.nwmissouri.edu/kc/",
        "sourceRow": 884,
        "stats": {
            "established": "1905",
            "students": "9,600+",
            "international": "8%",
            "faculty": "490+"
        },
        "hero": {
            "tagline": "Kansas City Metro · Profession-Based Higher Education & Executive Degree Center",
            "desc": "Northwest Missouri State University - Kansas City, located at 6889 N Oak Trafficway in Gladstone/Kansas City, delivers high-demand undergraduate completion programs, graduate degrees, and educator credentials. Known for its 'Profession-Based Learning' philosophy, Northwest KC connects working professionals with hands-on corporate, educational, and healthcare partnerships across the Kansas City metropolitan region."
        },
        "admissions": {
            "general": "Freshmen: 2.0+ high school GPA with test-optional admission. Transfer students: 2.0+ GPA with 24+ transferable college credits. Graduate: Conferred bachelor's with 2.75+ GPA.",
            "language": "TOEFL iBT 65+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Fall semester priority admission July 15, 2027; Spring semester priority December 15, 2026."
        },
        "financial": {
            "summary": "Bearcat Advantage providing in-state tuition rates for out-of-state students meeting academic thresholds, Northwest KC Transfer Scholarships, and Missouri Bright Flight awards.",
            "tuition": "$8,200 - $14,600/year (In-state vs Out-of-state baseline)"
        },
        "opportunities": [
            {
                "id": 10647,
                "title": "Master of Science in Applied Computer Science - Enterprise Software & Cloud",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Hands-on graduate degree designed for software developers, addressing distributed cloud systems, full-stack microservices, DevOps automation, and advanced database architectures.",
                "funding": "Northwest STEM Graduate Assistantship: $6,000/year stipend with 50% tuition reduction",
                "tuition": "$9,400/year (Resident graduate tuition)",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.nwmissouri.edu/academics/graduate/masters/applied-computer-science.htm",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA with computer programming prerequisites (Java, Python, C++)",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "GRE optional",
                    "papers": "Transcripts, statement of purpose, technical resume",
                    "references": "Two academic or professional recommendations"
                }
            },
            {
                "id": 10648,
                "title": "Master of Science in Education (M.S.Ed.) in Educational Leadership (K-12)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "NCATE/CAEP-accredited graduate program leading to Missouri K-12 building-level administrator certification, focusing on instructional coaching, school law, and fiscal management.",
                "funding": "Kansas City Metro Educator Fellowship: $2,500 tuition grant for certified teachers",
                "tuition": "$8,600/year",
                "fee": "$50",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.nwmissouri.edu/academics/graduate/masters/educational-leadership.htm",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA, valid teacher certification, 2+ years classroom experience",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Copy of teacher license, transcripts, leadership essay",
                    "references": "Two recommendations from school administrators"
                }
            },
            {
                "id": 10649,
                "title": "Bachelor of Science in Cybersecurity - Defensive Systems & Intelligence",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Profession-based degree utilizing the Kansas City Cyber Defense Lab to train students in ethical hacking, incident handling, digital forensics, and network telemetry analytics.",
                "funding": "Bearcat Cyber Innovators Scholarship: $3,500/year renewable award",
                "tuition": "$8,200/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.nwmissouri.edu/academics/undergraduate/majors/cybersecurity.htm",
                "requirements": {
                    "gpa": "2.5+ high school or transfer GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "ACT/SAT optional",
                    "papers": "Official transcripts, cybersecurity interest statement",
                    "references": "One teacher or counselor recommendation"
                }
            },
            {
                "id": 10650,
                "title": "Master of Business Administration (MBA) in Healthcare Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "ACBSP-accredited hybrid MBA examining hospital financial modeling, managed care operations, clinical analytics, and ethical health system leadership.",
                "funding": "Northwest MBA Merit Award: $2,000 tuition reduction for healthcare supervisors",
                "tuition": "$9,800/year",
                "fee": "$50",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.nwmissouri.edu/academics/graduate/masters/mba.htm",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "GMAT/GRE waived with 2.75+ GPA or professional experience",
                    "papers": "Transcripts, resume, personal statement",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10651,
                "title": "Bachelor of Science in Biology - Biomedical Sciences & Pre-Medicine",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Rigorous undergraduate pre-medical foundation exploring human gross anatomy, molecular genetics, biochemistry, and collaborative clinical research projects.",
                "funding": "Pre-Med Scholars Endowment: $2,500/year award with regional hospital shadowing",
                "tuition": "$8,200/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.nwmissouri.edu/academics/undergraduate/majors/biology-biomedical.htm",
                "requirements": {
                    "gpa": "2.75+ high school GPA with strong chemistry and biology performance",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Official high school transcripts",
                    "references": "One science teacher letter"
                }
            },
            {
                "id": 10652,
                "title": "Master of Science in Information Systems - Business Analytics & Big Data",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "social-sciences"],
                "desc": "Advanced IT degree bridging corporate decision-making with predictive analytics, data visualization (Power BI/Tableau), Python data wrangling, and database design.",
                "funding": "Data Analytics Executive Scholarship: $3,000 award",
                "tuition": "$9,400/year",
                "fee": "$50",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.nwmissouri.edu/academics/graduate/masters/information-systems.htm",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "GRE/GMAT optional",
                    "papers": "Transcripts, career statement, resume",
                    "references": "Two recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4879,
                "name": "Dr. Joni Adkins",
                "role": "Director of the School of Computer Science and Information Systems",
                "department": "School of Computer Science and Information Systems",
                "subject": "computer-science",
                "bio": "Investigates profession-based computer science curricula, cybersecurity talent pipelines, and gender equity in STEM higher education.",
                "source": "https://www.nwmissouri.edu/csis/directory/adkins.htm"
            },
            {
                "id": 4880,
                "name": "Dr. Michael Steiner",
                "role": "Associate Provost of Undergraduate Education and Professor of Education",
                "department": "School of Education",
                "subject": "social-sciences",
                "bio": "Expert in teacher induction models, K-12 administrator professional development, and urban-suburban educational partnership governance.",
                "source": "https://www.nwmissouri.edu/education/directory/steiner.htm"
            },
            {
                "id": 4881,
                "name": "Dr. Peter Adam",
                "role": "Associate Professor of Biology",
                "department": "Department of Natural Sciences",
                "subject": "biology",
                "bio": "Focuses on Midwestern mammalian ecology, wildlife habitat conservation modeling, and field biology instructional techniques in metropolitan centers.",
                "source": "https://www.nwmissouri.edu/naturalsciences/directory/adam.htm"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Ottawa University Arizona",
        "shortName": "OUAZ",
        "slug": "ottawa-university-arizona",
        "location": "Surprise, Arizona, United States",
        "website": "https://www.ottawa.edu/ouaz/home",
        "sourceRow": 903,
        "stats": {
            "established": "1865",
            "students": "1,800+",
            "international": "7%",
            "faculty": "130+"
        },
        "hero": {
            "tagline": "Surprise · Dynamic Valley of the Sun Residential Campus & Innovation Hub",
            "desc": "Ottawa University Arizona (OUAZ), founded in 2017 as the comprehensive residential campus of historic Ottawa University (est. 1865), is situated in Surprise, Arizona. OUAZ pairs residential student life and collegiate athletics with rigorous liberal arts, STEM, and professional business curricula anchored by the revolutionary 'Adawe' personal coaching and mentorship model."
        },
        "admissions": {
            "general": "High school diploma with 2.5+ cumulative GPA for freshman admission; transfer applicants require 2.0+ GPA with 12+ college semester hours. Holistic personal evaluation.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions throughout the year; Fall priority deadline July 1, 2027; Spring priority December 1, 2026."
        },
        "financial": {
            "summary": "Spirit of OUAZ Merit Scholarships ($6,000 to $16,000/year), Athletic & Leadership Awards, and Surprise Community Partnership Grants.",
            "tuition": "$18,500 - $32,000/year (Undergraduate residential tuition rate)"
        },
        "opportunities": [
            {
                "id": 10653,
                "title": "Bachelor of Science in Engineering - Mechanical and Robotics Focus",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Innovative engineering curriculum integrating solid mechanics, thermodynamics, robotics kinematics, CAD modeling, and senior industry-sponsored capstone design projects.",
                "funding": "OUAZ STEM Innovation Scholarship: Up to $12,000/year renewable four-year academic award",
                "tuition": "$32,000/year (significantly offset by institutional merit aid)",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/engineering",
                "requirements": {
                    "gpa": "2.75+ cumulative high school GPA with precalculus or calculus readiness",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "ACT/SAT test-optional",
                    "papers": "Official high school transcripts, engineering interest essay",
                    "references": "One recommendation from math or science instructor"
                }
            },
            {
                "id": 10654,
                "title": "Bachelor of Science in Biology - Pre-Health & Cellular Medicine",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Comprehensive preparation for medical, dental, and veterinary schools featuring molecular biology labs, human anatomy dissection, physiology, and organic chemistry.",
                "funding": "Dean's Healthcare Scholar Grant: $10,000/year award plus pre-med MCAT prep mentorship",
                "tuition": "$32,000/year",
                "fee": "$50",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/biology",
                "requirements": {
                    "gpa": "2.75+ GPA with laboratory science coursework",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official transcripts, personal goal statement",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10655,
                "title": "Master of Business Administration (MBA) in Strategic Innovation",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Executive evening and hybrid MBA examining digital transformation, venture capital financing, strategic brand management, and ethical corporate analytics.",
                "funding": "Valley Business Leadership Award: $4,000 tuition grant for Arizona professionals",
                "tuition": "$13,200/year (Graduate MBA rate)",
                "fee": "$50",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/mba",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GMAT/GRE waived with 2.75+ GPA or professional experience",
                    "papers": "Professional resume, statement of executive intent, transcripts",
                    "references": "Two professional letters"
                }
            },
            {
                "id": 10656,
                "title": "Bachelor of Arts in Sports Leadership and Athletic Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Capitalizes on OUAZ's dynamic collegiate athletics culture, addressing sports marketing, sports facility logistics, NIL contract regulations, and coaching philosophy.",
                "funding": "Athletic Leadership Fellowship: $8,000/year award with athletic department internship",
                "tuition": "$32,000/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/sports-leadership",
                "requirements": {
                    "gpa": "2.25+ GPA with high school completion",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, sports leadership essay",
                    "references": "One coach or teacher recommendation"
                }
            },
            {
                "id": 10657,
                "title": "Master of Arts in Counseling (MAC) - Clinical Mental Health Track",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Prepares graduates for state licensure as Licensed Professional Counselors (LPC), exploring psychopathology, grief counseling, family systems, and 700 practicum hours.",
                "funding": "Arizona Behavioral Health Workforce Fellowship: $3,500/year tuition grant",
                "tuition": "$14,500/year",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/mac",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in psychology or related behavioral field",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required; admissions faculty interview required",
                    "papers": "Statement of counseling vision, transcripts, professional CV",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 10658,
                "title": "Bachelor of Science in Computer Science - Software Architecture & Cloud",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Hands-on computing curriculum exploring data structures, algorithmic complexity, distributed cloud systems, cybersecurity fundamentals, and mobile app design.",
                "funding": "OUAZ Adawe Tech Scholarship: Up to $11,000/year recurring academic scholarship",
                "tuition": "$32,000/year",
                "fee": "$50",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.ottawa.edu/ouaz/academics/computer-science",
                "requirements": {
                    "gpa": "2.5+ GPA in high school mathematics and sciences",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, personal statement",
                    "references": "One recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4882,
                "name": "Dr. Dennis Tyner",
                "role": "President of OUAZ and Professor of Electrical Engineering",
                "department": "Office of the President & School of Engineering",
                "subject": "engineering",
                "bio": "Electrical engineer and collegiate executive researching radio frequency communications, signal processing, and experiential engineering curricular models.",
                "source": "https://www.ottawa.edu/ouaz/leadership/president"
            },
            {
                "id": 4883,
                "name": "Dr. Shannon Kelly",
                "role": "Dean of Academic Affairs and Associate Professor of Psychology",
                "department": "Division of Arts and Sciences",
                "subject": "social-sciences",
                "bio": "Investigates student transition psychology, collegiate mentoring interventions through the Adawe framework, and developmental cognitive retention strategies.",
                "source": "https://www.ottawa.edu/ouaz/faculty/kelly/"
            },
            {
                "id": 4884,
                "name": "Dr. Kevin Eichner",
                "role": "Chancellor and Professor of Strategic Management",
                "department": "Angell Snyder School of Business",
                "subject": "social-sciences",
                "bio": "Renowned corporate turn-around strategist and author researching enterprise strategic alignment, market positioning in higher education, and executive coaching.",
                "source": "https://www.ottawa.edu/ouaz/leadership/chancellor"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Western Wyoming College",
        "shortName": "Western Wyoming",
        "slug": "western-wyoming-college",
        "location": "Rock Springs, Wyoming, United States",
        "website": "https://www.westernwyoming.edu",
        "sourceRow": 1218,
        "stats": {
            "established": "1959",
            "students": "3,400+",
            "international": "4%",
            "faculty": "180+"
        },
        "hero": {
            "tagline": "Rock Springs · Energy, Natural Resources & Premier Transfer College",
            "desc": "Western Wyoming Community College is an innovative public institution situated in Rock Springs, Wyoming, surrounded by the Red Desert and the Green River Basin. Famous for its indoor enclosed campus architecture and life-size dinosaur fossil displays, Western delivers outstanding applied associate degrees, bachelor of applied science programs, and university transfer pathways in energy engineering, nursing, and paleontology."
        },
        "admissions": {
            "general": "Open admission policy with high school diploma, home school completion, or GED credential. Specific health sciences and technical programs require selective admission standards.",
            "language": "TOEFL iBT 61+ or IELTS 5.5+ for international candidates without prior English-medium secondary schooling.",
            "deadlines": "Fall semester priority admission August 1, 2027; Spring semester priority December 15, 2026."
        },
        "financial": {
            "summary": "Wyoming Hathaway Scholarships (up to $3,360/year), Western Foundation Scholarships, and Western Undergraduate Exchange (WUE) tuition discounts for regional states.",
            "tuition": "$4,200 - $10,800/year (Resident vs Non-resident baseline)"
        },
        "opportunities": [
            {
                "id": 10659,
                "title": "Associate of Applied Science in Plant Operations & Power Generation Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Hands-on industrial engineering program utilizing full-scale mechanical power labs to train control room operators, turbine technicians, and trona mining process specialists.",
                "funding": "Wyoming Energy Innovation Scholarship: $3,000/year award sponsored by regional energy producers",
                "tuition": "$4,200/year (In-state baseline)",
                "fee": "$30",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.westernwyoming.edu/academics/plant-operations/",
                "requirements": {
                    "gpa": "2.0+ GPA or equivalent GED with readiness for technical algebra",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, placement test completion",
                    "references": "Not required"
                }
            },
            {
                "id": 10660,
                "title": "Associate of Science in Geology and Paleontological Field Sciences",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Renowned field science degree conducting stratigraphic excavation, fossil preparation, sedimentology, and GIS spatial mapping in Wyoming's fossil-rich Green River Basin.",
                "funding": "Red Desert Paleontology Research Grant: $2,000 summer excavation stipend",
                "tuition": "$4,200/year",
                "fee": "$30",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.westernwyoming.edu/academics/geology/",
                "requirements": {
                    "gpa": "2.5+ GPA in high school sciences and mathematics",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of geological interest",
                    "references": "One academic recommendation"
                }
            },
            {
                "id": 10661,
                "title": "Associate of Applied Science in Registered Nursing (ADN - RN Pre-Licensure)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ACEN-accredited nursing cohort integrating high-fidelity hospital simulation suites and intensive clinical rotations at Memorial Hospital of Sweetwater County.",
                "funding": "Hathaway Nursing Excellence Fellowship: 100% full tuition waiver plus clinic scrub stipend",
                "tuition": "$4,400/year",
                "fee": "$30",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.westernwyoming.edu/academics/nursing/",
                "requirements": {
                    "gpa": "2.70+ prerequisite GPA (anatomy, physiology, chemistry, English)",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "TEAS examination minimum composite score 65%",
                    "papers": "Nursing application, transcripts, background clearance",
                    "references": "Two professional/academic references"
                }
            },
            {
                "id": 10662,
                "title": "Bachelor of Applied Science in Business Management (BAS-BM)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "engineering"],
                "desc": "Four-year upper-division baccalaureate designed for technical associate graduates advancing into industrial operations management, corporate finance, and supply chain logistics.",
                "funding": "Wyoming Workforce Development Grant: Up to $2,500/year tuition reduction",
                "tuition": "$5,800/year (Upper-division in-state rate)",
                "fee": "$30",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.westernwyoming.edu/academics/bas-business/",
                "requirements": {
                    "gpa": "2.0+ GPA with completed Associate degree (AA, AS, or AAS)",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Collegiate transcripts, resume of technical work experience",
                    "references": "One employer recommendation"
                }
            },
            {
                "id": 10663,
                "title": "Associate of Science in Computer Science - University Transfer Pathway",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Rigorous software engineering, object-oriented programming (C++/Java), discrete mathematics, and Linux systems course series articulated with the University of Wyoming.",
                "funding": "Western STEM Transfer Scholarship: $2,000/year award for aspiring computer scientists",
                "tuition": "$4,200/year",
                "fee": "$30",
                "deadline": "2027-07-20",
                "deadlineText": "July 20, 2027",
                "source": "https://www.westernwyoming.edu/academics/computer-science/",
                "requirements": {
                    "gpa": "2.5+ GPA with readiness for Calculus I",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "High school or college transcripts",
                    "references": "Not required"
                }
            },
            {
                "id": 10664,
                "title": "Associate of Applied Science in Welding Technology and Pipe Fabrication",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "American Welding Society (AWS) certified training covering SMAW, GTAW (TIG), GMAW (MIG), pipe welding, metallurgy, and non-destructive testing (NDT) inspections.",
                "funding": "Western Trade Apprenticeship Grant: $3,500/year award plus full industrial welding gear kit",
                "tuition": "$4,400/year",
                "fee": "$30",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.westernwyoming.edu/academics/welding/",
                "requirements": {
                    "gpa": "2.0+ GPA with vocational safety review",
                    "ielts": "Functional English literacy",
                    "gre": "Not required",
                    "papers": "Application form, official secondary transcripts",
                    "references": "Not required"
                }
            }
        ],
        "researchers": [
            {
                "id": 4885,
                "name": "Dr. Melissa Chesnut",
                "role": "Professor of Paleontology and Geology",
                "department": "Department of Physical Sciences and Geology",
                "subject": "environment",
                "bio": "Investigates Eocene fossil biota of the Green River Formation, taphonomy of freshwater lacustrine environments, and vertebrate fossil preparation methodologies.",
                "source": "https://www.westernwyoming.edu/faculty/chesnut/"
            },
            {
                "id": 4886,
                "name": "Dr. Kim Zupan",
                "role": "Director of Nursing and Allied Health",
                "department": "Division of Nursing and Health Sciences",
                "subject": "biology",
                "bio": "Specializes in rural nursing clinical readiness, high-fidelity medical simulation curriculum design, and NCLEX pre-licensure predictive analytics.",
                "source": "https://www.westernwyoming.edu/faculty/zupan/"
            },
            {
                "id": 4887,
                "name": "Prof. Paul Johnson",
                "role": "Professor of Engineering and Computer Science",
                "department": "Department of Engineering, Mathematics, and Computing",
                "subject": "engineering",
                "bio": "Expert in programmable logic control (PLC) integration in heavy extractive mining industries and automated instrumentation in electrical power generation plants.",
                "source": "https://www.westernwyoming.edu/faculty/johnson/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "South Dakota State University - Rapid City",
        "shortName": "SDSU Rapid City",
        "slug": "south-dakota-state-university-rapid-city",
        "location": "Rapid City, South Dakota, United States",
        "website": "https://www.sdstate.edu",
        "sourceRow": 947,
        "stats": {
            "established": "1881",
            "students": "11,500+",
            "international": "7%",
            "faculty": "620+"
        },
        "hero": {
            "tagline": "Rapid City · Black Hills Center for Advanced Nursing & Healthcare Leadership",
            "desc": "South Dakota State University - Rapid City, situated at University Center - Black Hills and regional clinical health campuses, delivers premier nursing, allied health, and collaborative STEM programs for western South Dakota. SDSU's College of Nursing at Rapid City combines state-of-the-art clinical simulation with direct clinical rotations across Monument Health hospital networks."
        },
        "admissions": {
            "general": "High school diploma with 2.6+ GPA or ACT score 18+; transfer nursing students require 2.7+ cumulative prerequisite collegiate GPA (chemistry, anatomy, physiology, microbiology).",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Accelerated BSN priority deadline March 1, 2027; Traditional BSN priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Jackrabbit Guarantee Merit Scholarships ($1,000 to $4,000/year), South Dakota Opportunity Scholarships, and Monument Health tuition loan forgiveness partnerships.",
            "tuition": "$9,200 - $13,400/year (South Dakota resident vs Non-resident undergraduate rate)"
        },
        "opportunities": [
            {
                "id": 10665,
                "title": "Bachelor of Science in Nursing (BSN - Accelerated 12-Month Post-Baccalaureate)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Intensive 12-month cohort designed for degree holders transitioning into professional registered nursing, delivering 750 clinical rotation hours across Monument Health medical centers.",
                "funding": "Monument Health Nurse Scholar Award: $10,000 tuition sponsorship with post-graduation employment commitment",
                "tuition": "$11,200/year",
                "fee": "$45",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.sdstate.edu/nursing/accelerated-bsn-rapid-city",
                "requirements": {
                    "gpa": "3.0+ cumulative GPA in prior bachelor's degree with completed science prerequisites",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, statement of nursing career commitment, background check",
                    "references": "Two professional/academic recommendations"
                }
            },
            {
                "id": 10666,
                "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner (FNP)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "CCNE-accredited practice doctorate preparing advanced practice registered nurses (APRNs) to deliver primary care across rural and Native American reservation health clinics in South Dakota.",
                "funding": "HRSA Advanced Nursing Education Workforce (ANEW) Traineeship: Up to $22,000/year living stipend and full tuition support",
                "tuition": "$0 - $14,800/year (Fully covered for HRSA recipients)",
                "fee": "$50",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.sdstate.edu/nursing/doctor-nursing-practice-dnp",
                "requirements": {
                    "gpa": "3.2+ master's or BSN GPA, unencumbered RN license, 1+ year clinical nursing experience",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "Not required",
                    "papers": "DNP clinical scholarly project proposal, nursing CV, official transcripts",
                    "references": "Three clinical/academic references"
                }
            },
            {
                "id": 10667,
                "title": "Master of Science in Nursing (MSN) - Nurse Administrator & Executive Leadership",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Online and hybrid master's addressing healthcare systems economics, clinical quality metrics, nursing informatics, and hospital executive management.",
                "funding": "South Dakota Healthcare Executive Fellowship: $3,500/year award",
                "tuition": "$10,500/year",
                "fee": "$45",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.sdstate.edu/nursing/msn-nurse-administrator",
                "requirements": {
                    "gpa": "3.0+ undergraduate BSN GPA, active RN license",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Professional nursing resume, leadership philosophy statement, transcripts",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10668,
                "title": "Bachelor of Science in Medical Laboratory Science (MLS)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "NAACLS-accredited diagnostic curriculum delivering rigorous instruction in clinical hematology, immunohematology (blood banking), clinical chemistry, and molecular pathology.",
                "funding": "Clinical Laboratory Science Workforce Grant: $3,000/year merit scholarship",
                "tuition": "$9,200/year",
                "fee": "$45",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.sdstate.edu/allied-and-population-health/medical-laboratory-science",
                "requirements": {
                    "gpa": "2.8+ collegiate science prerequisite GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts, diagnostic interest essay",
                    "references": "Two science professor recommendations"
                }
            },
            {
                "id": 10669,
                "title": "Bachelor of Science in Public Health - Rural Community Epidemiology",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Examines infectious disease biostatistics, environmental toxicology, tribal health disparities, and community public health emergency preparedness across the Great Plains.",
                "funding": "Great Plains Public Health Fellowship: $2,500/year scholarship with state health department internship",
                "tuition": "$9,200/year",
                "fee": "$45",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.sdstate.edu/allied-and-population-health/public-health",
                "requirements": {
                    "gpa": "2.6+ high school GPA with mathematics and biology courses",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts, statement of public health interest",
                    "references": "One recommendation"
                }
            },
            {
                "id": 10670,
                "title": "Post-Graduate APRN Certificate - Psychiatric Mental Health Nurse Practitioner (PMHNP)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Specialized clinical credential for master's-prepared nurses seeking board certification in psychiatric diagnosis, neurobiology of psychotropics, and rural tele-mental health.",
                "funding": "Rural Behavioral Health Clinical Voucher: $4,500 tuition offset",
                "tuition": "$8,900 (Total certificate cost)",
                "fee": "$50",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.sdstate.edu/nursing/post-graduate-certificates",
                "requirements": {
                    "gpa": "Conferred MSN or DNP from CCNE/ACEN accredited program with 3.2+ GPA",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "Not required",
                    "papers": "Copy of APRN license, transcripts, clinical narrative",
                    "references": "Two professional/physician recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4888,
                "name": "Dr. Mary Anne Krogh",
                "role": "Dean and Professor of Nursing",
                "department": "College of Nursing",
                "subject": "biology",
                "bio": "Distinguished nurse anesthesia leader and healthcare researcher investigating rural healthcare provider retention, anesthesia patient outcomes, and interprofessional clinical simulation.",
                "source": "https://www.sdstate.edu/directory/mary-anne-krogh"
            },
            {
                "id": 4889,
                "name": "Dr. Christina Plemmons",
                "role": "Assistant Dean of Black Hills Clinical Operations",
                "department": "College of Nursing - Rapid City Site",
                "subject": "biology",
                "bio": "Specializes in rural primary healthcare delivery, maternal-child health disparities among Native American populations, and nurse residency curriculum assessment.",
                "source": "https://www.sdstate.edu/directory/christina-plemmons"
            },
            {
                "id": 4890,
                "name": "Dr. Heidi Mennenga",
                "role": "Associate Dean for Academic Affairs and Professor of Nursing",
                "department": "College of Nursing",
                "subject": "social-sciences",
                "bio": "Internationally renowned expert in Team-Based Learning (TBL) pedagogy in health sciences, psychometric instrument validation, and nursing student engagement metrics.",
                "source": "https://www.sdstate.edu/directory/heidi-mennenga"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "The Universities at Shady Grove",
        "shortName": "USG",
        "slug": "the-universities-at-shady-grove",
        "location": "Rockville, Maryland, United States",
        "website": "https://shadygrove.usmd.edu",
        "sourceRow": 1008,
        "stats": {
            "established": "2000",
            "students": "3,200+",
            "international": "18%",
            "faculty": "280+"
        },
        "hero": {
            "tagline": "Rockville · Premier Regional Higher Education Center of the University System of Maryland",
            "desc": "The Universities at Shady Grove (USG) is an innovative partnership of nine public universities from the University System of Maryland (USM) operating on one high-tech campus in Rockville, MD. Located adjacent to the I-270 Technology Corridor and the National Institutes of Health (NIH), USG offers 80+ top undergraduate and graduate degrees from institutions like UMCP, UMBC, and UMB in biomedical sciences, cybersecurity, data science, and public health."
        },
        "admissions": {
            "general": "Upper-division transfer admissions: applicants complete their first 60 credits (Associate degree) at Montgomery College or other accredited colleges, then matriculate seamlessly into their partner USM degree program at USG.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ depending on the specific USM degree-granting partner institution.",
            "deadlines": "Priority fall transfer deadline March 1, 2027; Priority spring transfer deadline October 15, 2026."
        },
        "financial": {
            "summary": "USG Kendall Scholarship (100% full tuition, fees, and books), USG Board of Advisors Scholarships, and transfer grants totaling over $2 million annually.",
            "tuition": "$9,800 - $14,200/year (Maryland in-state rate, set by participating partner institution)"
        },
        "opportunities": [
            {
                "id": 10671,
                "title": "Bachelor of Science in Translational Life Science Technology (TLST) - UMBC at USG",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Pioneering STEM degree developed in partnership with the I-270 biotech corridor, exploring bioprocess engineering, cell culture technologies, bioinformatics, and FDA regulatory compliance.",
                "funding": "USG Kendall STEM Scholarship: 100% full tuition, fees, and $2,000/year textbook allowance",
                "tuition": "$10,200/year (In-state baseline)",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/tlst",
                "requirements": {
                    "gpa": "2.75+ cumulative GPA with completed college chemistry and biology prerequisites",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts, statement of biotechnology goals",
                    "references": "Two academic recommendations"
                }
            },
            {
                "id": 10672,
                "title": "Bachelor of Science in Embedded Systems & Internet of Things (ESIT) - UMD at USG",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "A. James Clark School of Engineering upper-division program addressing hardware-software codesign, sensor networks, FPGA programming, and autonomous cyber-physical robotics.",
                "funding": "Clark School USG Engineering Fellowship: $5,000/year merit scholarship",
                "tuition": "$11,500/year",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/embedded-systems",
                "requirements": {
                    "gpa": "3.0+ engineering gateway GPA (Calculus I & II, differential equations, physics mechanics)",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official college transcripts, engineering resume",
                    "references": "Two recommendations (one engineering/math instructor)"
                }
            },
            {
                "id": 10673,
                "title": "Master of Science in Cybersecurity - UMBC at USG",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "NSA-designated Center of Academic Excellence graduate degree examining enterprise intrusion detection, secure cloud computing, cryptographic protocols, and cybersecurity strategy.",
                "funding": "CyberCorps SFS Fellowship: $34,000/year stipend plus 100% full tuition and federal placement",
                "tuition": "$0 - $15,200/year (Covered by CyberCorps for qualifying fellows)",
                "fee": "$75",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/ms-cybersecurity",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in computer science, mathematics, or information technology",
                    "ielts": "IELTS 6.5 or TOEFL 85",
                    "gre": "GRE optional with 3.0+ GPA",
                    "papers": "Transcripts, professional CV, statement of purpose",
                    "references": "Two academic or technical recommendations"
                }
            },
            {
                "id": 10674,
                "title": "Bachelor of Science in Nursing (BSN Pre-Licensure) - UMB School of Nursing at USG",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Ranked among the top nursing programs nationally, delivering clinical training in USG's Biomedical Sciences and Engineering (BSE) facility and rotations at NIH and Adventist Health.",
                "funding": "Maryland Nursing Workforce Grant: Up to $4,000/year scholarship with in-state clinical service",
                "tuition": "$10,800/year",
                "fee": "$75",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/bsn",
                "requirements": {
                    "gpa": "3.0+ cumulative prerequisite GPA (anatomy, physiology, chemistry, nutrition)",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "TEAS examination score 75%+",
                    "papers": "NursingCAS application, official transcripts, essay",
                    "references": "Two academic/clinical recommendations"
                }
            },
            {
                "id": 10675,
                "title": "Bachelor of Science in Public Health Science - UMD School of Public Health at USG",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Examines health disparities, epidemiological investigation methods, environmental health risks, and public health policy across diverse urban-suburban populations.",
                "funding": "I-270 Public Health Leaders Award: $3,000/year award",
                "tuition": "$10,200/year",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/public-health-science",
                "requirements": {
                    "gpa": "2.5+ transfer GPA with 60 completed college credits",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts, personal goals statement",
                    "references": "One recommendation"
                }
            },
            {
                "id": 10676,
                "title": "Master of Social Work (MSW) - Clinical & Macro Practice - UMB School of Social Work at USG",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "CSWE-accredited professional graduate program preparing social workers for behavioral health clinical practice, child welfare advocacy, and community policy organizing.",
                "funding": "Behavioral Health Workforce Education and Training (BHWET) Fellowship: $10,000 clinical stipend",
                "tuition": "$12,400/year",
                "fee": "$75",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://shadygrove.usmd.edu/academics/degree-programs/msw",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in liberal arts or social sciences",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "Not required",
                    "papers": "Statement of social justice commitment, transcripts, professional CV",
                    "references": "Three professional/academic recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4891,
                "name": "Dr. Anne Khademian",
                "role": "Executive Director of USG and Associate Vice Chancellor of USM",
                "department": "Office of the Executive Director",
                "subject": "social-sciences",
                "bio": "Distinguished scholar in public management, financial regulation, institutional reform, and cross-sector educational collaborative ecosystems.",
                "source": "https://shadygrove.usmd.edu/about-usg/leadership"
            },
            {
                "id": 4892,
                "name": "Dr. Sadanand Srivastava",
                "role": "Professor of Computer Science and Cybersecurity Coordinator",
                "department": "Division of Computing and Engineering Technologies",
                "subject": "computer-science",
                "bio": "Investigates zero-trust network architectures, hardware embedded cryptography, and workforce competency mapping in federal cyber defense agencies.",
                "source": "https://shadygrove.usmd.edu/faculty/srivastava/"
            },
            {
                "id": 4893,
                "name": "Dr. Man-Kwan Wheeler",
                "role": "Clinical Associate Professor of Life Sciences",
                "department": "Department of Translational Life Science Technology",
                "subject": "biology",
                "bio": "Expert in recombinant protein purification, mammalian cell bioreactor kinetics, and industry-partnered translational biotechnology laboratory curricula.",
                "source": "https://shadygrove.usmd.edu/faculty/wheeler/"
            }
        ]
    }
]

with open('scripts/b72_p1_chunk2_raw.json', 'w') as f:
    json.dump(unis, f, indent=2)

print('Generated b72_p1_chunk2_raw.json with 7 universities, 42 opps, 21 researchers.')
