# scripts/make_b73_p1_chunk2.py
# Universities 9 to 15 of Batch 73
# Opps: 10815 to 10856 (42 opps)
# Res: 4963 to 4983 (21 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Wisconsin-Stevens Point at Wausau",
        "shortName": "UWSP at Wausau",
        "slug": "university-of-wisconsin-stevens-point-at-wausau",
        "location": "Wausau, Wisconsin, United States",
        "website": "https://www.uwsp.edu/wausau/",
        "sourceRow": 1195,
        "stats": {
            "established": "1933",
            "students": "750+",
            "international": "3%",
            "faculty": "50+"
        },
        "hero": {
            "tagline": "Wausau · Central Wisconsin Higher Education Hub, Forestry & Allied Health",
            "desc": "The University of Wisconsin-Stevens Point at Wausau is a vibrant branch campus serving Marathon County and the greater Rib Mountain region. Offering associate degrees, bachelor's degree-completion pathways in nursing and business, and specialized preparatory tracks in forestry and environmental science, UWSP at Wausau delivers world-class University of Wisconsin education with small classroom intimacy."
        },
        "admissions": {
            "general": "High school diploma, GED, or recognized state secondary credential. Holistic review considering academic coursework, GPA, leadership, and extracurricular achievements.",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international applicants educated in non-English institutions.",
            "deadlines": "Rolling admissions; priority fall deadline June 1, 2027; priority spring deadline December 1, 2026."
        },
        "financial": {
            "summary": "UWSP at Wausau Foundation Scholarships, Pointer Merit Grants, Marathon County Resident Awards, and Midwest Student Exchange Program (MSEP) discounts.",
            "tuition": "$5,461/year (Wisconsin resident undergraduate; $13,034/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10815,
                "title": "Associate of Arts and Sciences in Forestry and Natural Resources",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Foundational collegiate program feeding directly into UWSP's acclaimed College of Natural Resources, studying silviculture, dendrology, forest soils, and GIS wildlife mapping.",
                "funding": "Wausau Forestry Endowment Scholarship: $2,000/year merit award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uwsp.edu/wausau/academics/natural-resources/",
                "requirements": {
                    "gpa": "2.5+ high school GPA with biology and algebra",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and personal statement",
                    "references": "One teacher recommendation"
                }
            },
            {
                "id": 10816,
                "title": "Bachelor of Science in Nursing (RN-to-BSN Wausau Cohort)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "CCNE-accredited hybrid degree for practicing registered nurses, focusing on rural population epidemiology, evidence-based clinical leadership, and community wellness.",
                "funding": "Aspirus Healthcare Nursing Grant: $2,500/year tuition reimbursement",
                "tuition": "$8,200/year",
                "fee": "$0",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.uwsp.edu/wausau/academics/nursing/",
                "requirements": {
                    "gpa": "2.5+ GPA in an associate degree in nursing (ADN)",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Current unencumbered RN license, ADN transcripts",
                    "references": "Two professional supervisor references"
                }
            },
            {
                "id": 10817,
                "title": "Associate of Arts and Sciences in Business Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Core business credential examining commercial accounting, marketing analytics, business law, and microeconomic market structures.",
                "funding": "Central Wisconsin Business Leadership Award: $1,500/year stipend",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uwsp.edu/wausau/academics/business/",
                "requirements": {
                    "gpa": "2.0+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and application essay",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10818,
                "title": "Associate of Arts and Sciences in Pre-Engineering",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "mathematics"],
                "desc": "Rigorous mathematics, chemistry, and calculus-based physics curriculum preparing students for seamless transfer into ABET-accredited UW engineering bachelor's programs.",
                "funding": "Wisconsin STEM Transfer Fellowship: $2,200/year scholarship",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.uwsp.edu/wausau/academics/pre-engineering/",
                "requirements": {
                    "gpa": "2.75+ cumulative high school GPA with advanced mathematics",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts demonstrating calculus readiness",
                    "references": "Two recommendations (one math or science teacher)"
                }
            },
            {
                "id": 10819,
                "title": "UWSP at Wausau Foundation Honors Scholarship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Premier academic achievement scholarship for incoming high school honors graduates enrolling full-time at the Wausau campus.",
                "funding": "Full $3,000 annual scholarship renewable for two years of study",
                "tuition": "$5,461/year (Reduced to $2,461 net cost)",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uwsp.edu/wausau/scholarships/",
                "requirements": {
                    "gpa": "3.5+ cumulative high school GPA",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Honors scholarship essay and official transcripts",
                    "references": "Two academic letters of recommendation"
                }
            },
            {
                "id": 10820,
                "title": "Associate of Arts and Sciences in Digital Media & Graphic Arts",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "computer-science"],
                "desc": "Studio program in vector illustration, digital image manipulation, UX design foundations, and visual typography.",
                "funding": "Creative Arts Talent Subsidy: $1,200 materials grant",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.uwsp.edu/wausau/academics/art/",
                "requirements": {
                    "gpa": "2.0+ GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and optional portfolio of 5 design pieces",
                    "references": "One art mentor reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4963,
                "name": "Dr. Paul Whitaker",
                "role": "Professor of Biological Sciences",
                "department": "Department of Biology",
                "subject": "biology",
                "bio": "Dr. Paul Whitaker conducts research in agroecology, insect pest biological control, sustainable apple orchard management, and native pollinator habitat preservation in central Wisconsin.",
                "source": "https://www.uwsp.edu/directory/people/paul-whitaker/"
            },
            {
                "id": 4964,
                "name": "Dr. Brett Barker",
                "role": "Campus Executive and Professor of History",
                "department": "Department of History",
                "subject": "social-sciences",
                "bio": "Dr. Brett Barker specializes in 19th-century American history, the American Civil War, Midwestern labor and agricultural politics, and Marathon County historical archives.",
                "source": "https://www.uwsp.edu/directory/people/brett-barker/"
            },
            {
                "id": 4965,
                "name": "Dr. Kristine Prahl",
                "role": "Associate Professor of Health Sciences and Biology",
                "department": "School of Health Sciences",
                "subject": "biology",
                "bio": "Dr. Kristine Prahl researches human anatomy pedagogy, health disparities in rural communities, and active-learning strategies in undergraduate pre-nursing curricula.",
                "source": "https://www.uwsp.edu/directory/people/kristine-prahl/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Wisconsin-Whitewater at Rock County",
        "shortName": "UW-Whitewater at Rock County",
        "slug": "university-of-wisconsin-whitewater-at-rock-county",
        "location": "Janesville, Wisconsin, United States",
        "website": "https://www.uww.edu/rock",
        "sourceRow": 1196,
        "stats": {
            "established": "1966",
            "students": "900+",
            "international": "3%",
            "faculty": "60+"
        },
        "hero": {
            "tagline": "Janesville · High-Tech Manufacturing, Engineering Pathways & Liberal Arts",
            "desc": "The University of Wisconsin-Whitewater at Rock County is a thriving branch campus in Janesville, Wisconsin. Known for its state-of-the-art engineering laboratories, accessible associate degrees, and direct bachelor's degree-completion pipelines with UW-Whitewater's top-ranked business and education colleges, Rock County delivers premier public university education to southern Wisconsin."
        },
        "admissions": {
            "general": "High school diploma, GED, or recognized state secondary credential. Holistic review considering academic performance, motivation, and community leadership.",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international applicants educated outside the US in non-English environments.",
            "deadlines": "Rolling admissions; priority fall deadline June 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "UW-Whitewater Foundation Scholarships, Rock County Campus Endowments, Warhawk Transfer Grants, and Federal Work-Study opportunities.",
            "tuition": "$5,461/year (Wisconsin resident undergraduate; $13,034/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10821,
                "title": "Associate of Science with an Emphasis in Pre-Engineering",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "mathematics"],
                "desc": "High-rigor cohort in engineering mechanics, vector statics, multi-variable calculus, and university physics with guaranteed transfer into UW-Madison, UW-Milwaukee, or UW-Platteville BS engineering.",
                "funding": "Rock County Engineering Foundation Grant: $2,500/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.uww.edu/rock/academics/degrees/pre-engineering",
                "requirements": {
                    "gpa": "2.75+ cumulative high school GPA with trigonometry and physics",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts showing math readiness",
                    "references": "Two recommendations (one STEM educator)"
                }
            },
            {
                "id": 10822,
                "title": "Associate of Arts and Sciences in Business Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Foundational business degree aligning with the AACSB-accredited College of Business and Economics at UW-Whitewater, teaching financial accounting, managerial statistics, and organizational theory.",
                "funding": "Warhawk Business Scholar Stipend: $1,500/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uww.edu/rock/academics/degrees/business-administration",
                "requirements": {
                    "gpa": "2.0+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts and personal statement",
                    "references": "One teacher or counselor recommendation"
                }
            },
            {
                "id": 10823,
                "title": "Associate of Arts and Sciences in Computer Science & Information Technology",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Two-year technical curriculum in object-oriented Java programming, discrete mathematics, relational database modeling, and computer network architecture.",
                "funding": "Rock County Tech Career Scholarship: $2,000/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uww.edu/rock/academics/degrees/computer-science",
                "requirements": {
                    "gpa": "2.5+ high school GPA with algebra II",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and statement of computing interest",
                    "references": "One math or computing teacher reference"
                }
            },
            {
                "id": 10824,
                "title": "Associate of Arts and Sciences in Early Childhood & Elementary Education",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Teacher preparatory curriculum incorporating classroom observation practicums, developmental psychology, children's literature, and instructional methods.",
                "funding": "Future Teachers of Wisconsin Subsidy: $1,800/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uww.edu/rock/academics/degrees/education",
                "requirements": {
                    "gpa": "2.5+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts, criminal background clearance form",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10825,
                "title": "UW-Whitewater at Rock County Dean's Achievement Scholarship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Merit-based award honoring incoming full-time freshmen with exemplary academic performance and civic volunteer service.",
                "funding": "Full $3,000 annual scholarship with campus honors program placement",
                "tuition": "$5,461/year (Net cost reduced to $2,461)",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uww.edu/rock/admissions/financial-aid/scholarships",
                "requirements": {
                    "gpa": "3.5+ cumulative unweighted GPA",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Scholarship essay on community leadership and official transcripts",
                    "references": "Two faculty letters of recommendation"
                }
            },
            {
                "id": 10826,
                "title": "Associate of Arts and Sciences in Biological and Health Sciences",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Pre-health sciences track covering general biology, general chemistry, organic chemistry, and microbiology laboratory protocols.",
                "funding": "Healthcare Professions Grant: $1,500/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uww.edu/rock/academics/degrees/biological-sciences",
                "requirements": {
                    "gpa": "2.5+ cumulative GPA with high school biology and chemistry",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and career goals statement",
                    "references": "One science instructor reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4966,
                "name": "Dr. Tricia Clasen",
                "role": "Campus Dean and Professor of Communication",
                "department": "Department of Communication",
                "subject": "social-sciences",
                "bio": "Dr. Tricia Clasen directs academic programs at the Rock County campus, researching pedagogical communication in higher education, children's media literature, and community college transition outcomes.",
                "source": "https://www.uww.edu/rock/about/directory/clasen-tricia"
            },
            {
                "id": 4967,
                "name": "Dr. Paul House",
                "role": "Associate Professor of Chemistry",
                "department": "Department of Chemistry",
                "subject": "chemistry",
                "bio": "Dr. Paul House investigates environmental chemical spectroscopy, organometallic synthesis mechanisms, and interactive undergraduate chemistry laboratory modules.",
                "source": "https://www.uww.edu/rock/about/directory/house-paul"
            },
            {
                "id": 4968,
                "name": "Dr. John Pruitt",
                "role": "Associate Professor of English and Humanities",
                "department": "Department of English",
                "subject": "arts-design",
                "bio": "Dr. John Pruitt specializes in early American literature, environmental literary ecocriticism, first-year collegiate writing retention, and regional literary folklore.",
                "source": "https://www.uww.edu/rock/about/directory/pruitt-john"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Washington University of Virginia",
        "shortName": "WUV",
        "slug": "washington-university-of-virginia",
        "location": "Annandale, Virginia, United States",
        "website": "https://wuv.edu",
        "sourceRow": 1204,
        "stats": {
            "established": "1982",
            "students": "1,200+",
            "international": "35%",
            "faculty": "80+"
        },
        "hero": {
            "tagline": "Annandale · Northern Virginia Accredited University in Business, Computer Science & Divinity",
            "desc": "Washington University of Virginia is a private, non-profit university located in Annandale, Virginia, within the Washington D.C. metropolitan region. Accredited by the Transnational Association of Christian Colleges and Schools (TRACS) and certified by SCHEV, WUV offers comprehensive undergraduate and graduate degree programs in business administration, computer science, clinical counseling, and theological studies."
        },
        "admissions": {
            "general": "High school diploma, GED, or accredited secondary school completion certificate for undergraduate programs; accredited bachelor's degree with 2.5+ GPA for master's programs; master's degree with 3.0+ GPA for doctoral programs.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants from non-English speaking institutions.",
            "deadlines": "Fall semester priority July 15, 2027; Spring semester priority December 1, 2026."
        },
        "financial": {
            "summary": "WUV Presidential Merit Scholarships, Church Leadership Endowments, International Student Tuition Grants, and military benefits.",
            "tuition": "$6,400 - $9,600/year ($280 - $350 per credit hour)"
        },
        "opportunities": [
            {
                "id": 10827,
                "title": "Master of Business Administration (MBA - Global Management & Fintech)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Practitioner graduate business degree emphasizing multinational corporate finance, digital marketing analytics, cross-border supply chain operations, and financial technology.",
                "funding": "Global Business Merit Fellowship: $2,000 annual tuition credit",
                "tuition": "$350 per graduate credit hour",
                "fee": "$100",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://wuv.edu/academics/school-of-business/mba/",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA from an accredited institution",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "GMAT/GRE optional",
                    "papers": "Official transcripts, resume, 500-word statement of career intent",
                    "references": "Two professional or academic letters of recommendation"
                }
            },
            {
                "id": 10828,
                "title": "Master of Science in Computer Science (MSCS - Cloud Computing & AI)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Advanced degree covering distributed cloud infrastructure, applied neural networks, enterprise database security, and software design patterns.",
                "funding": "Tech Innovation Graduate Grant: $2,500/year award",
                "tuition": "$350 per credit hour",
                "fee": "$100",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://wuv.edu/academics/school-of-computer-science/mscs/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA in computer science, mathematics, or engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts demonstrating data structures and programming fluency, resume",
                    "references": "Two recommendations from computer science faculty"
                }
            },
            {
                "id": 10829,
                "title": "Bachelor of Science in Computer Science",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Four-year undergraduate program teaching full-stack software development, systems programming in C++/Python, algorithms, and cybersecurity principles.",
                "funding": "WUV STEM Presidential Scholarship: $1,800/year award",
                "tuition": "$280 per undergraduate credit hour",
                "fee": "$100",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://wuv.edu/academics/school-of-computer-science/bscs/",
                "requirements": {
                    "gpa": "2.25+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and identification copy",
                    "references": "One academic recommendation"
                }
            },
            {
                "id": 10830,
                "title": "Doctor of Ministry (D.Min. in Strategic Leadership & Cross-Cultural Missions)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Professional doctorate examining urban mission strategies, organizational conflict mediation, pastoral counseling, and church governance.",
                "funding": "Pastoral Research Fellowship: $3,000 award towards dissertation project",
                "tuition": "$380 per credit hour",
                "fee": "$100",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://wuv.edu/academics/school-of-theology/dmin/",
                "requirements": {
                    "gpa": "3.0+ GPA in Master of Divinity (M.Div.) or equivalent theological master's",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Graduate transcripts, 3+ years ministerial experience documentation, ministry project concept",
                    "references": "Three letters of recommendation (two ministerial, one academic)"
                }
            },
            {
                "id": 10831,
                "title": "Bachelor of Science in Business Administration (BSBA - Accounting)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Undergraduate accounting pathway preparing candidates for CPA examination readiness, corporate auditing, tax compliance, and financial analysis.",
                "funding": "Accounting Excellence Award: $1,500/year tuition grant",
                "tuition": "$280 per credit hour",
                "fee": "$100",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://wuv.edu/academics/school-of-business/bsba/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official transcripts and personal reflection essay",
                    "references": "One teacher or counselor reference"
                }
            },
            {
                "id": 10832,
                "title": "Certificate in Network Security and Cloud Infrastructure",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science"],
                "desc": "Fast-track technical credential in AWS/Azure cloud architecture, firewalls, threat hunting, and enterprise vulnerability management.",
                "funding": "Cyber Workforce Voucher: $1,000 tuition discount",
                "tuition": "$3,360 total certificate tuition",
                "fee": "$50",
                "deadline": "2027-08-01",
                "deadlineText": "August 1, 2027",
                "source": "https://wuv.edu/academics/certificates/cybersecurity/",
                "requirements": {
                    "gpa": "High school diploma or undergraduate coursework",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and resume",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4969,
                "name": "Dr. Peter M. Shin",
                "role": "President and Professor of Leadership Studies",
                "department": "Office of the President",
                "subject": "social-sciences",
                "bio": "Dr. Peter M. Shin oversees institutional strategy and theological accreditation at WUV, publishing research on intercultural church leadership, diaspora pastoral care, and global seminary administration.",
                "source": "https://wuv.edu/about/leadership/"
            },
            {
                "id": 4970,
                "name": "Dr. David J. Kang",
                "role": "Dean of the School of Computer Science and Professor",
                "department": "School of Computer Science",
                "subject": "computer-science",
                "bio": "Dr. David J. Kang conducts research in cloud computing security architectures, distributed database fault tolerance, and software engineering pedagogy.",
                "source": "https://wuv.edu/academics/school-of-computer-science/faculty/"
            },
            {
                "id": 4971,
                "name": "Dr. Samuel Y. Lee",
                "role": "Chair of Business Administration and Associate Professor",
                "department": "School of Business",
                "subject": "social-sciences",
                "bio": "Dr. Samuel Y. Lee specializes in corporate financial reporting, multinational tax policy, entrepreneurship in emerging markets, and small business capital structure.",
                "source": "https://wuv.edu/academics/school-of-business/faculty/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Western Dakota Technical College",
        "shortName": "WDTC",
        "slug": "western-dakota-technical-college",
        "location": "Rapid City, South Dakota, United States",
        "website": "https://www.wdt.edu",
        "sourceRow": 1212,
        "stats": {
            "established": "1968",
            "students": "1,500+",
            "international": "2%",
            "faculty": "95+"
        },
        "hero": {
            "tagline": "Rapid City · Black Hills Leader in Applied Engineering, Health Sciences & Trades",
            "desc": "Western Dakota Technical College is an accredited public technical college located in Rapid City, South Dakota, nestled beneath the Black Hills. Accredited by the Higher Learning Commission (HLC), WDTC provides industry-aligned Associate of Applied Science (AAS) degrees and diplomas in registered nursing, precision machining, civil engineering technology, and computer information systems."
        },
        "admissions": {
            "general": "High school diploma, GED, or recognized state secondary credential. Program-specific testing (ACCUPLACER or ACT/SAT) and prerequisite verification for allied health and technical fields.",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions; priority fall deadline July 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Build Dakota Full-Ride Scholarships (100% free tuition, fees, books, and tools for high-need technical fields), WDTC Foundation Awards, and South Dakota Opportunity Scholarships.",
            "tuition": "$4,800 - $7,200/year (State technical college standard credit rate $124/credit plus fees)"
        },
        "opportunities": [
            {
                "id": 10833,
                "title": "Associate of Applied Science in Registered Nursing (AAS - RN)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ACEN-accredited pre-licensure nursing cohort featuring high-fidelity simulation hospital wings and clinical rotations at Monument Health Rapid City Hospital.",
                "funding": "Build Dakota Nursing Scholarship: 100% full-ride tuition, fees, books, and scrub allowance in exchange for in-state service",
                "tuition": "$5,600/year (100% covered by Build Dakota for qualifying recipients)",
                "fee": "$25",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.wdt.edu/degree-programs/registered-nursing/",
                "requirements": {
                    "gpa": "2.5+ prerequisite college GPA (anatomy, physiology, chemistry)",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "ATI TEAS test score 60%+",
                    "papers": "Official transcripts, criminal background check, CPR certification",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10834,
                "title": "Associate of Applied Science in Precision Machining Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "mathematics"],
                "desc": "Hands-on manufacturing degree in 5-axis CNC programming, CAD/CAM Mastercam software, metallurgical analysis, and aerospace tolerances.",
                "funding": "Build Dakota Precision Machining Full-Ride: 100% tuition and complete $3,000 tool chest grant",
                "tuition": "$5,200/year",
                "fee": "$25",
                "deadline": "2027-03-31",
                "deadlineText": "March 31, 2027",
                "source": "https://www.wdt.edu/degree-programs/precision-machining-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED with algebra competency",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "ACCUPLACER placement math score 250+",
                    "papers": "Official secondary transcripts",
                    "references": "One teacher or employer recommendation"
                }
            },
            {
                "id": 10835,
                "title": "Associate of Applied Science in Computer Information Systems (Cybersecurity & Networking)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Comprehensive technical training in Cisco routing/switching, Linux system administration, penetration testing, and enterprise firewall defense.",
                "funding": "Build Dakota IT Scholarship: Full tuition, certification examination vouchers, and laptop allowance",
                "tuition": "$4,900/year",
                "fee": "$25",
                "deadline": "2027-03-31",
                "deadlineText": "March 31, 2027",
                "source": "https://www.wdt.edu/degree-programs/computer-information-systems/",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts and tech career goal statement",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10836,
                "title": "Associate of Applied Science in Environmental Engineering Technology",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "engineering"],
                "desc": "Field science credential focusing on water treatment plant operations, air quality monitoring, soil sampling, hazardous materials remediation, and EPA compliance.",
                "funding": "Black Hills Environmental Stewardship Award: $2,000/year scholarship",
                "tuition": "$5,100/year",
                "fee": "$25",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.wdt.edu/degree-programs/environmental-engineering-technology/",
                "requirements": {
                    "gpa": "2.25+ high school GPA with chemistry and biology",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official transcripts and personal statement",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10837,
                "title": "Associate of Applied Science in Diesel Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering"],
                "desc": "Heavy equipment and commercial transport training covering electronic engine diagnostics, hydraulic systems, power trains, and EPA tier 4 emission systems.",
                "funding": "Caterpillar / Butler CAT ThinkBIG Sponsorship: Full tuition subsidy plus paid dealership co-op",
                "tuition": "$5,400/year",
                "fee": "$25",
                "deadline": "2027-03-31",
                "deadlineText": "March 31, 2027",
                "source": "https://www.wdt.edu/degree-programs/diesel-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED, valid driver's license",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, motor vehicle record check",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10838,
                "title": "Associate of Applied Science in Surgical Technology",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "CAAHEP-accredited clinical operating room degree training surgical technologists in aseptic technique, instrumentation, surgical anatomy, and perioperative patient safety.",
                "funding": "Monument Health Surgical Scholar Award: $3,000 annual grant",
                "tuition": "$5,500/year",
                "fee": "$25",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.wdt.edu/degree-programs/surgical-technology/",
                "requirements": {
                    "gpa": "2.5+ prerequisite college GPA (anatomy, physiology, medical terminology)",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, immunization records, background check",
                    "references": "Two professional references"
                }
            }
        ],
        "researchers": [
            {
                "id": 4972,
                "name": "Dr. Ann Bolman",
                "role": "President and Professor of Higher Education Administration",
                "department": "Office of the President",
                "subject": "social-sciences",
                "bio": "Dr. Ann Bolman leads Western Dakota Technical College, conducting research on rural workforce pipeline development, technical education return-on-investment, and STEM apprenticeship models.",
                "source": "https://www.wdt.edu/about/leadership/"
            },
            {
                "id": 4973,
                "name": "Prof. Justin Carter",
                "role": "Director of Manufacturing and Technical Sciences",
                "department": "Division of Applied Technologies",
                "subject": "engineering",
                "bio": "Prof. Justin Carter specializes in multi-axis CNC manufacturing automation, industrial metallurgy, aerospace tolerance quality auditing, and technical curriculum integration.",
                "source": "https://www.wdt.edu/about/faculty-directory/justin-carter/"
            },
            {
                "id": 4974,
                "name": "Dr. Kelly O'Brien",
                "role": "Dean of Allied Health and Associate Professor of Nursing",
                "department": "Division of Health Sciences",
                "subject": "biology",
                "bio": "Dr. Kelly O'Brien oversees clinical surgical and nursing programs, researching clinical simulation fidelity, rural hospital retention of registered nurses, and patient safety pedagogy.",
                "source": "https://www.wdt.edu/about/faculty-directory/kelly-obrien/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Windsor University",
        "shortName": "Windsor",
        "slug": "windsor-university",
        "location": "Albany, New York, United States",
        "website": "https://windsoruniversity.us",
        "sourceRow": 1223,
        "stats": {
            "established": "2002",
            "students": "950+",
            "international": "25%",
            "faculty": "55+"
        },
        "hero": {
            "tagline": "Albany · Distance and Hybrid Education in Business Management & Health Informatics",
            "desc": "Windsor University is an independent private institution delivering flexible undergraduate and graduate degree pathways in business administration, healthcare management, and computer information systems. Serving adult learners, international practitioners, and career changers, Windsor University combines asynchronous digital learning with industry-aligned capstone research projects."
        },
        "admissions": {
            "general": "High school diploma or certified equivalent for undergraduate admissions; recognized bachelor's degree with minimum 2.5 GPA for master's programs.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants from non-English instructional mediums.",
            "deadlines": "Rolling admissions across eight-week modular terms (August, October, January, March, May, July)."
        },
        "financial": {
            "summary": "Windsor Global Access Grants, Corporate Partner Tuition Waivers, and Academic Merit Scholarships providing up to $2,000 annual tuition reductions.",
            "tuition": "$5,400 - $8,200/year (Undergraduate $250/credit; Graduate $380/credit)"
        },
        "opportunities": [
            {
                "id": 10839,
                "title": "Master of Business Administration (MBA - Healthcare Leadership)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Professional executive master's program focusing on hospital financial governance, health policy economics, clinical quality assurance, and bioethics.",
                "funding": "Healthcare Management Scholarship: $2,000 tuition reduction award",
                "tuition": "$380 per credit hour",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://windsoruniversity.us/academics/mba-healthcare/",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official bachelor's transcripts, resume, 500-word career essay",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10840,
                "title": "Master of Science in Information Technology and Cybersecurity",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Applied graduate degree covering cloud virtualization, threat landscape analytics, network penetration testing, and IT compliance governance.",
                "funding": "Cybersecurity Excellence Grant: $2,200 award for technical professionals",
                "tuition": "$380 per credit hour",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://windsoruniversity.us/academics/ms-information-technology/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA in technical discipline or relevant IT certifications",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Transcripts and professional CV",
                    "references": "Two recommendations from IT supervisors"
                }
            },
            {
                "id": 10841,
                "title": "Bachelor of Business Administration (BBA - International Commerce)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Four-year undergraduate degree in global supply chains, international trade policy, consumer behavior modeling, and corporate accounting.",
                "funding": "Global Commerce Access Scholarship: $1,500/year award",
                "tuition": "$250 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://windsoruniversity.us/academics/bba/",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official high school transcripts and ID copy",
                    "references": "One character reference"
                }
            },
            {
                "id": 10842,
                "title": "Bachelor of Science in Health Services Administration",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Undergraduate healthcare operations degree covering electronic medical records, clinical staffing workflows, healthcare marketing, and managed care contracts.",
                "funding": "Allied Health Career Subsidy: $1,400/year award",
                "tuition": "$250 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://windsoruniversity.us/academics/bs-health-services/",
                "requirements": {
                    "gpa": "2.0+ high school or transfer collegiate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and brief statement of intent",
                    "references": "One academic or professional reference"
                }
            },
            {
                "id": 10843,
                "title": "Executive Graduate Certificate in Artificial Intelligence Management",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science", "social-sciences"],
                "desc": "Post-graduate credential for business leaders covering generative AI applications, corporate data ethics, algorithmic risk audits, and machine learning business cases.",
                "funding": "AI Executive Leadership Grant: $1,000 tuition discount",
                "tuition": "$2,280 total certificate tuition",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://windsoruniversity.us/academics/certificates/ai-management/",
                "requirements": {
                    "gpa": "Bachelor's degree with 2+ years professional experience",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Resume and bachelor's degree diploma",
                    "references": "One employer recommendation"
                }
            },
            {
                "id": 10844,
                "title": "Certificate in Global Supply Chain and Logistics Technology",
                "type": "Certificate",
                "subject": "engineering",
                "subjects": ["engineering", "social-sciences"],
                "desc": "Focused technical certificate examining automated inventory systems, maritime shipping logistics, freight analytics, and SAP enterprise integration.",
                "funding": "Logistics Professional Subsidy: $800 award",
                "tuition": "$1,900 total tuition",
                "fee": "$40",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://windsoruniversity.us/academics/certificates/supply-chain/",
                "requirements": {
                    "gpa": "High school diploma or GED equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and resume",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4975,
                "name": "Dr. Richard Caldwell",
                "role": "Academic Dean and Professor of Business Strategy",
                "department": "School of Business",
                "subject": "social-sciences",
                "bio": "Dr. Richard Caldwell leads academic curriculum review at Windsor University, researching corporate organizational agility, asynchronous executive pedagogy, and healthcare financial models.",
                "source": "https://windsoruniversity.us/faculty/richard-caldwell/"
            },
            {
                "id": 4976,
                "name": "Dr. Elena Rostova",
                "role": "Associate Professor of Computer Information Systems",
                "department": "Department of Technology",
                "subject": "computer-science",
                "bio": "Dr. Elena Rostova investigates cloud virtualization security protocols, corporate data governance architectures, and cybersecurity risk frameworks in healthcare enterprises.",
                "source": "https://windsoruniversity.us/faculty/elena-rostova/"
            },
            {
                "id": 4977,
                "name": "Dr. Marcus Vance",
                "role": "Director of Health Services Research and Assistant Professor",
                "department": "Department of Health Administration",
                "subject": "biology",
                "bio": "Dr. Marcus Vance specializes in clinical quality metrics, patient outcomes in rural managed care networks, and digital medical records integration strategies.",
                "source": "https://windsoruniversity.us/faculty/marcus-vance/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "WyoTech",
        "shortName": "WyoTech",
        "slug": "wyotech",
        "location": "Laramie, Wyoming, United States",
        "website": "https://www.wyotech.edu",
        "sourceRow": 1225,
        "stats": {
            "established": "1966",
            "students": "1,300+",
            "international": "3%",
            "faculty": "85+"
        },
        "hero": {
            "tagline": "Laramie · Premier National Technical Institute for Automotive, Diesel & Welding Technologies",
            "desc": "WyoTech is a nationally accredited technical institute based in Laramie, Wyoming, renowned across the United States for world-class, intensive hands-on training in automotive technology, diesel mechanics, advanced collision repair, and precision welding. Accredited by the Accrediting Commission of Career Schools and Colleges (ACCSC), WyoTech delivers 9-month accelerated diploma and Associate of Occupational Studies (AOS) degree programs that feed top mechanics into global industrial giants."
        },
        "admissions": {
            "general": "High school diploma, GED, or approved homeschool credential. Valid driver's license and admissions interview required.",
            "language": "TOEFL iBT 61+ or IELTS 5.5+ for international candidates.",
            "deadlines": "Year-round quarterly cohort starts in January, April, July, and October."
        },
        "financial": {
            "summary": "WyoTech Foundation Scholarships, Industry Partner Tool Grants (Snap-on / Matco partnerships), Veteran GI Bill benefits, and corporate employer tuition reimbursement sponsorships.",
            "tuition": "$28,500 - $34,800 total comprehensive program tuition (includes 9-month full intensive curriculum and professional tool sets)"
        },
        "opportunities": [
            {
                "id": 10845,
                "title": "Associate of Occupational Studies in Advanced Diesel and Heavy Equipment Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering"],
                "desc": "Elite 9-month intensive hands-on training in commercial diesel engines, hydraulic circuits, electronic engine controls, tier 4 emissions, and heavy chassis mechanics.",
                "funding": "WyoTech Industry Partner Grant: $3,000 tuition reduction plus sponsored Snap-on tool set",
                "tuition": "$32,500 total program tuition",
                "fee": "$100",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.wyotech.edu/programs/diesel-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED equivalent, valid driver's license",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and mechanical interest interview",
                    "references": "Two personal or professional references"
                }
            },
            {
                "id": 10846,
                "title": "Associate of Occupational Studies in Automotive Technology and High-Performance Engines",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering"],
                "desc": "Comprehensive training in automotive powertrain diagnostics, dyno-tuning, computerized fuel injection, electronic stability control, and hybrid vehicle drivetrains.",
                "funding": "Automotive Masters Scholarship: $2,500 tuition credit",
                "tuition": "$31,000 total program tuition",
                "fee": "$100",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.wyotech.edu/programs/automotive-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED, valid driver's license",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, motor vehicle background verification",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10847,
                "title": "Diploma in Advanced Precision Welding and Fabrication",
                "type": "Diploma",
                "subject": "engineering",
                "subjects": ["engineering"],
                "desc": "American Welding Society (AWS) certification program covering SMAW (Stick), GMAW (MIG), GTAW (TIG), pipe welding, and CNC plasma cutter fabrication.",
                "funding": "AWS Heavy Industrial Scholarship: $2,000 tuition grant",
                "tuition": "$29,500 total tuition",
                "fee": "$100",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.wyotech.edu/programs/welding-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts, physical dexterity statement",
                    "references": "One teacher or employer recommendation"
                }
            },
            {
                "id": 10848,
                "title": "Diploma in Collision Repair, Refinishing and Custom Fabrication",
                "type": "Diploma",
                "subject": "engineering",
                "subjects": ["engineering", "arts-design"],
                "desc": "I-CAR certified hands-on specialty in laser unibody straightening, computerized paint matching, structural aluminum welding, and custom metal fabrication.",
                "funding": "Refinish Industry Talent Award: $2,200 scholarship",
                "tuition": "$30,500 total tuition",
                "fee": "$100",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.wyotech.edu/programs/collision-refinishing-technology/",
                "requirements": {
                    "gpa": "High school diploma or GED, valid driver's license",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts and interview evaluation",
                    "references": "One character reference"
                }
            },
            {
                "id": 10849,
                "title": "WyoTech Women in Trades Leadership Fellowship",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering"],
                "desc": "Competitive institutional merit award supporting women entering diesel, automotive, and heavy industrial welding careers.",
                "funding": "Full $5,000 tuition scholarship plus professional tools endowment",
                "tuition": "Comprehensive program tuition (Net cost reduced by $5,000)",
                "fee": "$0",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.wyotech.edu/financial-aid/scholarships/",
                "requirements": {
                    "gpa": "High school diploma or GED",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Scholarship essay detailing vocational aspirations in skilled trades",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10850,
                "title": "Certificate in Applied Motorsports Chassis & Engine Dyno Tuning",
                "type": "Certificate",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Advanced specialty module exploring chassis geometry setup, drag racing drivetrain modifications, engine dynamometer testing, and electronic ECU remapping.",
                "funding": "Motorsports Engineering Award: $1,500 tuition credit",
                "tuition": "$7,800 specialty term tuition",
                "fee": "$50",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.wyotech.edu/programs/motorsports-chassis-fabrication/",
                "requirements": {
                    "gpa": "Completion of core WyoTech automotive or diesel curriculum",
                    "ielts": "IELTS 5.5 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Core program transcript demonstrating 3.0+ technical GPA",
                    "references": "One WyoTech faculty instructor recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4978,
                "name": "Jim Mathis",
                "role": "President and Chief Executive Officer",
                "department": "Executive Leadership",
                "subject": "engineering",
                "bio": "Jim Mathis is President and CEO of WyoTech, leading national skilled trades workforce initiatives, employer partnerships with Caterpillar and Kenworth, and modern laboratory expansions.",
                "source": "https://www.wyotech.edu/about-us/leadership/"
            },
            {
                "id": 4979,
                "name": "Prof. Shawn Nunley",
                "role": "Vice President of Academic Operations",
                "department": "Division of Technical Education",
                "subject": "engineering",
                "bio": "Prof. Shawn Nunley oversees curriculum design, ACCSC accreditation compliance, and instructor certification across automotive, collision, and heavy diesel programs.",
                "source": "https://www.wyotech.edu/about-us/leadership/"
            },
            {
                "id": 4980,
                "name": "Prof. Kyle Morris",
                "role": "Lead Instructor of Advanced Diesel Systems",
                "department": "Department of Diesel Technology",
                "subject": "engineering",
                "bio": "Prof. Kyle Morris specializes in electronic engine diagnostics, heavy transport hydraulic systems, failure mode analysis, and tier 4 emission system controls.",
                "source": "https://www.wyotech.edu/about-us/faculty/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Indiana University School of Medicine",
        "shortName": "IU Medicine",
        "slug": "indiana-university-school-of-medicine",
        "location": "Indianapolis, Indiana, United States",
        "website": "https://medicine.iu.edu",
        "sourceRow": 758,
        "stats": {
            "established": "1903",
            "students": "2,100+",
            "international": "8%",
            "faculty": "2,600+"
        },
        "hero": {
            "tagline": "Indianapolis · Nation's Largest Medical School, Precision Oncology & Neurosciences",
            "desc": "Indiana University School of Medicine is the largest allopathic medical school in the United States, anchored at the academic medical center in Indianapolis with nine regional campuses across Indiana. Conducting over $500 million in annual biomedical research, IU School of Medicine is a global leader in Alzheimer's disease genomics, pediatric oncology at Riley Hospital for Children, and organ transplantation."
        },
        "admissions": {
            "general": "Completed bachelor's degree from an accredited institution with pre-medical prerequisites (biology, general/organic chemistry, biochemistry, physics). Competitive MCAT score and AMCAS application required.",
            "language": "Demonstrated English proficiency required for international scholars (TOEFL iBT 100+ or IELTS 7.5+ for graduate biomedical sciences).",
            "deadlines": "AMCAS primary application deadline November 15, 2026; Secondary application deadline December 15, 2026; PhD graduate biomedical priority December 1, 2026."
        },
        "financial": {
            "summary": "Full tuition MD/PhD Medical Scientist Training Program (MSTP) fellowships (NIH funded with $37,000 annual stipend), IU School of Medicine Dean's Scholarships, and primary care service loan forgiveness.",
            "tuition": "$37,476/year (Indiana resident MD tuition; $64,392/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10851,
                "title": "Doctor of Medicine / Doctor of Philosophy (MD/PhD Medical Scientist Training Program)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "NIH-funded MSTP program training physician-scientists in clinical medicine and fundamental biomedical research, including neurogenomics, cellular immunology, and cancer therapeutics.",
                "funding": "Full 100% tuition waiver, health insurance, and $37,000 annual living stipend for all 7-8 years",
                "tuition": "$0 (Fully funded MSTP)",
                "fee": "$0 (AMCAS secondary fee waived for MSTP interviewees)",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://medicine.iu.edu/md-phd",
                "requirements": {
                    "gpa": "3.8+ undergraduate GPA with extensive laboratory research experience",
                    "ielts": "IELTS 7.5 or TOEFL 100",
                    "gre": "MCAT score 514+ (90th percentile)",
                    "papers": "AMCAS application, research essays (MSTP significant research essay), official transcripts",
                    "references": "Three to five letters of recommendation (including principal investigators)"
                }
            },
            {
                "id": 10852,
                "title": "Ph.D. in Medical Neuroscience (Stark Neurosciences Research Institute)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Elite doctoral program investigating Alzheimer's pathology, neurodegenerative neuroinflammation, neural circuit optics, and addiction neurobiology.",
                "funding": "Full tuition waiver, health coverage, and $35,000 annual research fellowship",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$70",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://medicine.iu.edu/education/graduate-degrees/phd/medical-neuroscience",
                "requirements": {
                    "gpa": "3.3+ undergraduate GPA in neuroscience, biology, chemistry, or psychology",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "GRE optional",
                    "papers": "Statement of research interests, scientific CV, transcripts",
                    "references": "Three letters of recommendation from research mentors"
                }
            },
            {
                "id": 10853,
                "title": "Doctor of Medicine (M.D. Program)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Comprehensive four-year allopathic medical curriculum integrating early clinical immersion, organ-system pathophysiology, and longitudinal patient care across Indiana hospital systems.",
                "funding": "IU School of Medicine Dean's Scholar Awards: Up to $25,000/year renewable merit scholarships",
                "tuition": "$37,476/year (Resident)",
                "fee": "$60",
                "deadline": "2026-11-15",
                "deadlineText": "November 15, 2026",
                "source": "https://medicine.iu.edu/md",
                "requirements": {
                    "gpa": "3.6+ pre-medical undergraduate GPA",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "MCAT competitive score (median 512)",
                    "papers": "AMCAS application, secondary essay responses, clinical shadowing log",
                    "references": "Pre-health committee letter or three individual faculty letters"
                }
            },
            {
                "id": 10854,
                "title": "Ph.D. in Cellular & Integrative Physiology",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Doctoral research examining cardiovascular molecular mechanics, diabetes renal physiology, microvascular transport, and metabolic signaling pathways.",
                "funding": "NIH T32 Institutional Training Fellowship: Full tuition plus $34,500 annual stipend",
                "tuition": "$0",
                "fee": "$70",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://medicine.iu.edu/education/graduate-degrees/phd/physiology",
                "requirements": {
                    "gpa": "3.2+ GPA in biological or chemical sciences",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Research statement, CV, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10855,
                "title": "Master of Science in Medical Science (Pathway to Medicine)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Intensive two-year post-baccalaureate academic enhancer curriculum delivering medical-level histology, human biochemistry, anatomy, and MCAT coaching.",
                "funding": "Diversity in Medicine Pipeline Grant: $5,000 annual scholarship",
                "tuition": "$18,500/year",
                "fee": "$70",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://medicine.iu.edu/education/graduate-degrees/masters/medical-science",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA with required pre-med sciences",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "MCAT score report (minimum 495)",
                    "papers": "Official transcripts, medical career motivation statement",
                    "references": "Two letters of recommendation from science professors"
                }
            },
            {
                "id": 10856,
                "title": "Postdoctoral Research Fellowship in Precision Immuno-Oncology (Simon Cancer Center)",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "NIH NCI-designated Comprehensive Cancer Center fellowship in CAR-T cellular engineering, solid tumor microenvironment remodeling, and Phase I clinical trial biomarker assays.",
                "funding": "NIH NRSA Postdoctoral Stipend: $61,008/year plus full institutional health insurance and travel budget",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://cancer.iu.edu/research/training/",
                "requirements": {
                    "gpa": "Ph.D. or M.D. in immunology, molecular oncology, biochemistry, or cellular biology",
                    "ielts": "Satisfied by terminal doctorate",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, 3-page research proposal, peer-reviewed publication record",
                    "references": "Three letters of reference from doctoral mentors"
                }
            }
        ],
        "researchers": [
            {
                "id": 4981,
                "name": "Dr. Jay L. Hess",
                "role": "Dean of the School of Medicine and Vice President for University Clinical Affairs",
                "department": "Office of the Dean and Department of Pathology",
                "subject": "biology",
                "bio": "Dr. Jay L. Hess is a physician-scientist and hematopathologist leading IU School of Medicine, researching epigenetics in leukemia, MLL gene rearrangements, and precision molecular diagnostics.",
                "source": "https://medicine.iu.edu/faculty/15443/hess-jay"
            },
            {
                "id": 4982,
                "name": "Dr. Bruce Lamb",
                "role": "Executive Director of the Stark Neurosciences Research Institute",
                "department": "Department of Medical and Molecular Genetics",
                "subject": "biology",
                "bio": "Dr. Bruce Lamb is a world-renowned Alzheimer's disease researcher studying microglial biology, neuroinflammation, TREM2 signaling pathways, and transgenic mouse models of neurodegeneration.",
                "source": "https://medicine.iu.edu/faculty/26488/lamb-bruce"
            },
            {
                "id": 4983,
                "name": "Dr. Tatiana Foroud",
                "role": "Executive Associate Dean for Research Affairs and Chair of Medical Genetics",
                "department": "Department of Medical and Molecular Genetics",
                "subject": "biology",
                "bio": "Dr. Tatiana Foroud directs the National Centralized Repository for Alzheimer's Disease and Related Dementias (NCRAD), investigating the genetic architecture of Parkinson's, Alzheimer's, and substance use disorders.",
                "source": "https://medicine.iu.edu/faculty/14833/foroud-tatiana"
            }
        ]
    }
]

with open("scripts/b73_p1_chunk2_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 73 Part 1 Chunk 2.")
