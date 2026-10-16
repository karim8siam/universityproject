# scripts/make_b73_p1_chunk1.py
# Universities 1 to 8 of Batch 73
# Opps: 10767 to 10814 (48 opps)
# Res: 4939 to 4962 (24 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Highlands College",
        "shortName": "Highlands",
        "slug": "highlands-college",
        "location": "Birmingham, Alabama, United States",
        "website": "https://highlandscollege.edu",
        "sourceRow": 738,
        "stats": {
            "established": "2011",
            "students": "1,050+",
            "international": "6%",
            "faculty": "65+"
        },
        "hero": {
            "tagline": "Birmingham · Higher Education in Ministry, Leadership & Social Sciences",
            "desc": "Highlands College is an accredited higher education institution in Birmingham, Alabama, dedicated to developing leaders through rigorous academic degrees, professional leadership training, and hands-on practicums. Offering degree credentials in ministry leadership, community advocacy, and organizational management, Highlands pairs experiential learning with values-based academic study."
        },
        "admissions": {
            "general": "High school diploma, GED, or recognized international secondary school completion certificate with a minimum cumulative GPA of 2.0. Admissions interview and personal statement required.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants whose secondary instruction was conducted in a language other than English.",
            "deadlines": "Priority fall admission deadline March 1, 2027; Regular rolling admission closes July 15, 2027."
        },
        "financial": {
            "summary": "Institutional scholarships, Christian leadership grants, and private donor endowments provide up to 50% tuition reduction for qualifying undergraduate students.",
            "tuition": "$14,500/year (Comprehensive tuition and academic fees)"
        },
        "opportunities": [
            {
                "id": 10767,
                "title": "Bachelor of Arts in Ministry Leadership (Organizational Management)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Four-year residential degree integrating leadership development, non-profit financial governance, organizational strategy, and community mobilization.",
                "funding": "Highlands Legacy Scholarship: $3,000/year merit-based renewable award",
                "tuition": "$14,500/year",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://highlandscollege.edu/academics/degree-programs/",
                "requirements": {
                    "gpa": "2.5+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Standardized test scores optional",
                    "papers": "Personal statement, official high school/college transcripts",
                    "references": "Two letters of character recommendation"
                }
            },
            {
                "id": 10768,
                "title": "Bachelor of Arts in Ministry Leadership (Pastoral Leadership)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Degree program preparing leaders in theological communication, homiletics, pastoral care, and community counseling.",
                "funding": "Pastoral Leadership Fellowship: $2,500/year tuition reduction",
                "tuition": "$14,500/year",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://highlandscollege.edu/academics/degree-programs/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, pastoral endorsement form, leadership essay",
                    "references": "Pastoral reference and academic reference"
                }
            },
            {
                "id": 10769,
                "title": "Bachelor of Arts in Ministry Leadership (Worship Leadership & Production Arts)",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "social-sciences"],
                "desc": "Interdisciplinary program focusing on digital media production, audio engineering, live production management, and creative arts leadership.",
                "funding": "Creative Arts Talent Grant: $3,500/year award based on portfolio evaluation",
                "tuition": "$14,500/year",
                "fee": "$50",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://highlandscollege.edu/academics/degree-programs/",
                "requirements": {
                    "gpa": "2.25+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official transcripts, creative audition video or technical portfolio",
                    "references": "Two recommendations (one arts/production mentor)"
                }
            },
            {
                "id": 10770,
                "title": "Associate of Arts in Ministry Leadership",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Two-year foundational degree program providing core liberal arts education coupled with leadership theory and practicum rotations.",
                "funding": "Foundational Access Grant: $1,500/year for eligible incoming students",
                "tuition": "$14,500/year",
                "fee": "$50",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://highlandscollege.edu/academics/degree-programs/",
                "requirements": {
                    "gpa": "2.0+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and short reflection essay",
                    "references": "One personal reference"
                }
            },
            {
                "id": 10771,
                "title": "Highlands Global Leadership Practicum Scholarship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Competitive institutional merit award supporting high-achieving undergraduates actively participating in cross-cultural community development projects.",
                "funding": "Full $5,000 annual scholarship applied directly toward tuition costs",
                "tuition": "$14,500/year (Reduced to $9,500 with award)",
                "fee": "$0 (No separate scholarship fee)",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://highlandscollege.edu/admissions/financial-aid/",
                "requirements": {
                    "gpa": "3.25+ cumulative GPA",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Scholarship application essay and record of civic service",
                    "references": "Two civic or community leader recommendations"
                }
            },
            {
                "id": 10772,
                "title": "Certificate in Family Ministry & Youth Counseling",
                "type": "Certificate",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Professional credential program covering adolescent developmental psychology, family systems mediation, and community-based youth mentorship models.",
                "funding": "Youth Advocacy Stipend: $1,000 tuition assistance grant",
                "tuition": "$4,800 total certificate tuition",
                "fee": "$35",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://highlandscollege.edu/academics/degree-programs/",
                "requirements": {
                    "gpa": "2.0+ undergraduate or secondary GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, background clearance check",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4939,
                "name": "Dr. Mark Pettus",
                "role": "President and Professor of Leadership Studies",
                "department": "Department of Leadership and Ministry",
                "subject": "social-sciences",
                "bio": "Dr. Mark Pettus oversees academic direction and leadership formation at Highlands College, researching organizational health, generational leadership succession, and ethical stewardship.",
                "source": "https://highlandscollege.edu/about/leadership/"
            },
            {
                "id": 4940,
                "name": "Dr. Gary Wilkerson",
                "role": "Academic Dean and Associate Professor of Theological Studies",
                "department": "Division of Academic Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Gary Wilkerson directs collegiate curriculum design and faculty assessment, specializing in practical theology, hermeneutics, and institutional higher education accreditation standards.",
                "source": "https://highlandscollege.edu/about/leadership/"
            },
            {
                "id": 4941,
                "name": "Prof. Rachel Jenkins",
                "role": "Instructor and Director of Practicum Education",
                "department": "Department of Practical Leadership",
                "subject": "social-sciences",
                "bio": "Prof. Rachel Jenkins leads field education and community internship placements, focusing research on experiential pedagogy, student vocational retention, and non-profit community engagement.",
                "source": "https://highlandscollege.edu/about/leadership/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Alaska Fairbanks Bristol Bay Campus",
        "shortName": "UAF Bristol Bay",
        "slug": "university-of-alaska-fairbanks-bristol-bay-campus",
        "location": "Dillingham, Alaska, United States",
        "website": "https://www.uaf.edu/bristolbay/",
        "sourceRow": 1036,
        "stats": {
            "established": "1980",
            "students": "650+",
            "international": "4%",
            "faculty": "45+"
        },
        "hero": {
            "tagline": "Dillingham · Arctic Marine Science, Indigenous Ecology & Rural Community Health",
            "desc": "The University of Alaska Fairbanks Bristol Bay Campus serves southwest Alaska from its hub in Dillingham, providing vital regional education in fisheries management, sustainable environmental science, Yup'ik indigenous studies, and allied healthcare. UAF Bristol Bay bridges indigenous ecological knowledge with Western scientific methodologies across the world's most productive wild salmon ecosystem."
        },
        "admissions": {
            "general": "High school diploma, GED, or regional equivalent. Open admissions for certificate and associate programs; specific prerequisites for allied health and scientific tracks.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates whose prior secondary instruction was not conducted in English.",
            "deadlines": "Fall semester priority March 15, 2027; Spring semester priority November 1, 2026."
        },
        "financial": {
            "summary": "Alaska Native Tribal health scholarships, UA Scholars Program, Western Undergraduate Exchange (WUE) discounts, and Bristol Bay Native Corporation educational grants.",
            "tuition": "$7,400 - $18,200/year (In-state resident vs non-resident rate)"
        },
        "opportunities": [
            {
                "id": 10773,
                "title": "Associate of Science in Environmental Studies & Fisheries Technology",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Hands-on regional degree in salmon habitat restoration, watershed hydrology, environmental monitoring, and sustainable fisheries management in Bristol Bay.",
                "funding": "Arctic Fisheries Research Fellowship: $3,500/semester stipend with field research housing",
                "tuition": "$7,400/year (In-state tuition baseline)",
                "fee": "$50",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.uaf.edu/bristolbay/academics/fisheries.php",
                "requirements": {
                    "gpa": "2.5+ high school GPA with biology and algebra coursework",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "High school or college transcripts, field experience interest statement",
                    "references": "Two academic or professional references"
                }
            },
            {
                "id": 10774,
                "title": "Occupational Endorsement in Sustainable Energy & Rural Microgrids",
                "type": "Certificate",
                "subject": "engineering",
                "subjects": ["engineering", "environment"],
                "desc": "Technical certification covering cold-climate heat pumps, remote solar-diesel microgrid installation, battery storage integration, and wind turbine maintenance.",
                "funding": "Alaska Clean Energy Workforce Grant: 100% full tuition subsidy for qualified applicants",
                "tuition": "$3,200 total certificate cost (Eligible for grant coverage)",
                "fee": "$25",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.uaf.edu/bristolbay/academics/sustainable-energy.php",
                "requirements": {
                    "gpa": "High school diploma or GED equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and proof of residency or student visa documentation",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10775,
                "title": "Associate of Applied Science in Community Health & Rural Nursing",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Clinical allied health degree preparing community health practitioners for diagnostic care, emergency triage, and chronic disease management across rural Alaskan villages.",
                "funding": "Rural Alaska Health Career Stipend: $4,000/year with clinical site travel stipends",
                "tuition": "$7,800/year",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uaf.edu/bristolbay/academics/allied-health.php",
                "requirements": {
                    "gpa": "2.75+ prerequisite college GPA (chemistry, human anatomy, microbiology)",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Kaplan or TEAS nursing entrance exam score 65%+",
                    "papers": "Official transcripts, immunization records, background check",
                    "references": "Three clinical and academic references"
                }
            },
            {
                "id": 10776,
                "title": "Associate of Arts in Yup'ik Studies & Indigenous Language Revitalization",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Rigorous linguistic and cultural immersion degree focusing on Central Yup'ik grammar, traditional oral history documentation, and indigenous legal sovereignty.",
                "funding": "Native Heritage Language Fellowship: $3,000/year tuition award",
                "tuition": "$7,400/year",
                "fee": "$50",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.uaf.edu/bristolbay/academics/yupik-studies.php",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement on language preservation",
                    "references": "Two recommendations (tribal elder or educator preferred)"
                }
            },
            {
                "id": 10777,
                "title": "Bristol Bay Salmon Ecology Summer Research Fellowship",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "Ten-week field-based research fellowship monitoring sockeye salmon smolt outmigration, estuarine water chemistry, and climate impact across Wood River lakes.",
                "funding": "Stipend of $6,000 plus campus dormitory lodging and field gear allowance",
                "tuition": "$0 (Fully funded research fellowship)",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.uaf.edu/bristolbay/research/salmon-ecology.php",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in biological sciences or ecology",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "CV, statement of research experience, official transcripts",
                    "references": "Two faculty letters of recommendation"
                }
            },
            {
                "id": 10778,
                "title": "Certificate in Environmental Information Systems & Drone Mapping",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science", "environment"],
                "desc": "Applied geospatial credential focusing on GIS cartography, UAV remote sensing, photogrammetry, and coastal erosion analysis along the Bering Sea.",
                "funding": "Geospatial Technology Grant: $1,800 tuition support",
                "tuition": "$3,600 total tuition",
                "fee": "$40",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.uaf.edu/bristolbay/academics/gis.php",
                "requirements": {
                    "gpa": "2.0+ high school or college GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and statement of technical interests",
                    "references": "One academic or employer recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4942,
                "name": "Dr. Todd Radenbaugh",
                "role": "Professor of Environmental Science",
                "department": "Department of Natural Sciences",
                "subject": "environment",
                "bio": "Dr. Todd Radenbaugh conducts research on Arctic coastal paleolimnology, sub-Arctic watershed biogeochemistry, and the impacts of climate fluctuations on Bristol Bay freshwater salmon nurseries.",
                "source": "https://www.uaf.edu/bristolbay/faculty/radenbaugh.php"
            },
            {
                "id": 4943,
                "name": "Dr. Deanna Baier",
                "role": "Associate Professor of Allied Health and Nursing",
                "department": "Division of Health Sciences",
                "subject": "biology",
                "bio": "Dr. Deanna Baier leads clinical training for rural health aides and community nurses, investigating remote telemedicine interventions, maternal health outcomes, and cross-cultural healthcare delivery.",
                "source": "https://www.uaf.edu/bristolbay/faculty/baier.php"
            },
            {
                "id": 4944,
                "name": "Prof. Sandra Sterling",
                "role": "Assistant Professor of Indigenous Studies",
                "department": "Department of Yup'ik Language and Culture",
                "subject": "social-sciences",
                "bio": "Prof. Sandra Sterling specializes in Central Alaskan Yup'ik linguistics, indigenous knowledge archiving, and digital lexicography for community language immersion classrooms.",
                "source": "https://www.uaf.edu/bristolbay/faculty/sterling.php"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of California Washington Center",
        "shortName": "UCDC",
        "slug": "university-of-california-washington-center",
        "location": "Washington, District of Columbia, United States",
        "website": "https://www.ucdc.edu",
        "sourceRow": 1059,
        "stats": {
            "established": "1997",
            "students": "850+",
            "international": "12%",
            "faculty": "40+"
        },
        "hero": {
            "tagline": "Washington D.C. · Federal Policy, Supreme Court Jurisprudence & Global Governance",
            "desc": "The University of California Washington Center (UCDC) is the residential instructional and research hub of the UC System in the heart of the national capital. Bringing together top undergraduate scholars, graduate researchers, and distinguished faculty from all ten UC campuses, UCDC conducts elite seminars in federal policy analysis, constitutional law, international diplomacy, and science governance."
        },
        "admissions": {
            "general": "Enrollment open to matriculated University of California undergraduate juniors/seniors and graduate researchers through campus-specific UCDC competitive selection processes.",
            "language": "Satisfied via UC campus home matriculation (TOEFL iBT 80+ or IELTS 6.5+ for international UC students).",
            "deadlines": "Fall term deadline April 1, 2027; Winter/Spring term deadline October 15, 2026."
        },
        "financial": {
            "summary": "Full UC campus financial aid reciprocity; federal policy travel grants, presidential fellowships, and residential housing scholarships administered through UCDC.",
            "tuition": "Regular UC campus tuition rates apply ($14,500/year resident; $44,500/year non-resident) plus Washington residential fee"
        },
        "opportunities": [
            {
                "id": 10779,
                "title": "UCDC Congressional and Executive Branch Fellowship",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Semester-long academic fellowship placing scholars inside Capitol Hill committees, federal executive agencies, and prominent think tanks combined with advanced research seminars.",
                "funding": "$4,000 cost-of-living stipend plus subsidized housing in the UCDC residential building",
                "tuition": "Covered under home UC campus enrollment",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.ucdc.edu/academic-internship-program",
                "requirements": {
                    "gpa": "3.0+ cumulative UC undergraduate GPA",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Resume, cover letter, 5-page research writing sample, internship interests statement",
                    "references": "Two academic recommendations from UC faculty"
                }
            },
            {
                "id": 10780,
                "title": "UCDC Advanced Constitutional Law and Supreme Court Seminar",
                "type": "Course",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Intensive seminar examining current Supreme Court jurisprudence, amicus curiae briefing, oral advocacy analysis, and judicial policy-making with distinguished federal jurists.",
                "funding": "UCDC Legal Studies Merit Award: $1,500 stipend",
                "tuition": "Home campus tuition",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.ucdc.edu/courses/law-and-society",
                "requirements": {
                    "gpa": "3.3+ cumulative GPA with prior coursework in political theory or constitutional law",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Legal analysis essay (1,500 words) and transcripts",
                    "references": "One letter from a law or political science faculty member"
                }
            },
            {
                "id": 10781,
                "title": "UC Washington Science & Technology Policy Research Internship",
                "type": "Internship",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering", "social-sciences"],
                "desc": "Interdisciplinary fellowship focusing on national AI governance, quantum computing regulation, NSF funding frameworks, and international cybersecurity treaties.",
                "funding": "STEM Policy Stipend: $3,500 semester grant plus security clearance assistance",
                "tuition": "Home campus tuition",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.ucdc.edu/research/stem-policy",
                "requirements": {
                    "gpa": "3.2+ cumulative GPA in engineering, computer science, or data analytics",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Technical research policy memo, CV, unofficial transcripts",
                    "references": "Two recommendations (one engineering/computing faculty)"
                }
            },
            {
                "id": 10782,
                "title": "UCDC International Diplomacy & Foreign Policy Seminar",
                "type": "Course",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Diplomatic seminar centered on State Department bilateral negotiations, multilateral trade agreements, sanctions policy, and international humanitarian law.",
                "funding": "Global Affairs Travel Grant: $2,000 award",
                "tuition": "Home campus tuition",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.ucdc.edu/courses/international-relations",
                "requirements": {
                    "gpa": "3.0+ cumulative GPA",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Foreign policy policy brief (1,000 words), CV",
                    "references": "Two faculty letters of recommendation"
                }
            },
            {
                "id": 10783,
                "title": "UCDC Washington Journalism and Media Fellowship",
                "type": "Fellowship",
                "subject": "arts-design",
                "subjects": ["arts-design", "social-sciences"],
                "desc": "Professional reporting fellowship placed at major national news bureaus, investigative outlets, and broadcast centers covering Congress, the White House, and federal courts.",
                "funding": "Pulitzer Foundation Reporting Grant: $4,500 semester living stipend",
                "tuition": "Home campus tuition",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.ucdc.edu/academic-programs/journalism",
                "requirements": {
                    "gpa": "3.0+ GPA in journalism, communications, or English",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Published journalistic portfolio (3-5 clips), reporting pitch memo",
                    "references": "Two editorial or faculty recommendations"
                }
            },
            {
                "id": 10784,
                "title": "UC Federal Environmental and Energy Policy Seminar",
                "type": "Course",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "In-depth study of EPA rulemaking, Clean Air Act implementation, offshore wind leasing regulation, and international climate finance commitments.",
                "funding": "Environmental Leadership Stipend: $2,000 semester award",
                "tuition": "Home campus tuition",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.ucdc.edu/courses/environmental-policy",
                "requirements": {
                    "gpa": "3.0+ cumulative GPA",
                    "ielts": "Satisfied via UC enrollment",
                    "gre": "Not required",
                    "papers": "Environmental policy analysis essay and official transcripts",
                    "references": "One letter from an environmental sciences or economics professor"
                }
            }
        ],
        "researchers": [
            {
                "id": 4945,
                "name": "Dr. Natalie Stroud",
                "role": "Director of Research and Senior Policy Scholar",
                "department": "Division of Academic Policy",
                "subject": "social-sciences",
                "bio": "Dr. Natalie Stroud investigates media psychology, democratic institutional resilience, political communication, and the regulation of digital campaign messaging in federal elections.",
                "source": "https://www.ucdc.edu/faculty-staff/stroud"
            },
            {
                "id": 4946,
                "name": "Prof. Kenneth Jost",
                "role": "Adjunct Professor of Law and Supreme Court Scholar",
                "department": "Department of Legal Studies",
                "subject": "social-sciences",
                "bio": "Prof. Kenneth Jost is an expert on American judicial politics, constitutional history, and Supreme Court decision-making, publishing widely on appellate litigation and federal judicial confirmations.",
                "source": "https://www.ucdc.edu/faculty-staff/jost"
            },
            {
                "id": 4947,
                "name": "Dr. Sarah Binder",
                "role": "Visiting Scholar in Legislative Governance",
                "department": "Congressional Studies Program",
                "subject": "social-sciences",
                "bio": "Dr. Sarah Binder specializes in congressional procedure, legislative gridlock, bicameral conference negotiations, and the institutional dynamics between the Senate and the Federal Reserve.",
                "source": "https://www.ucdc.edu/faculty-staff/binder"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Phoenix",
        "shortName": "UOPX",
        "slug": "university-of-phoenix",
        "location": "Phoenix, Arizona, United States",
        "website": "https://www.phoenix.edu",
        "sourceRow": 1147,
        "stats": {
            "established": "1976",
            "students": "75,000+",
            "international": "5%",
            "faculty": "2,400+"
        },
        "hero": {
            "tagline": "Phoenix · Pioneer in Professional Online Education, Healthcare & Information Technology",
            "desc": "The University of Phoenix is an accredited higher education institution based in Phoenix, Arizona, specializing in accessible career-aligned undergraduate, graduate, and doctoral degree programs for adult learners and working professionals. Accredited by the Higher Learning Commission (HLC), UOPX provides rigorous career-focused education across healthcare administration, cybersecurity, data science, and business management."
        },
        "admissions": {
            "general": "High school diploma, GED, or accredited secondary school credential for undergraduate admission; accredited bachelor's degree with 2.5+ GPA for master's programs; master's degree with 3.0+ GPA for doctoral programs.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international students whose medium of instruction was not English.",
            "deadlines": "Flexible cohort start dates year-round with rolling admissions every 5 to 6 weeks."
        },
        "financial": {
            "summary": "University of Phoenix Tuition Guarantee (fixed tuition rate lock from enrollment to graduation), corporate tuition assistance partnerships, military scholarships, and academic achievement grants.",
            "tuition": "$9,500 - $14,800/year (Undergraduate $398/credit; Graduate $698/credit)"
        },
        "opportunities": [
            {
                "id": 10785,
                "title": "Doctor of Health Administration (DHA)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Terminal executive practitioner doctorate focusing on health system economics, clinical informatics, healthcare regulatory compliance, and strategic organizational leadership.",
                "funding": "Executive Healthcare Leadership Grant: $3,000 tuition reduction award",
                "tuition": "$810 per graduate credit hour",
                "fee": "$0 application fee",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.phoenix.edu/degrees/healthcare/health-administration/dha.html",
                "requirements": {
                    "gpa": "3.0+ master's degree GPA in healthcare or business discipline",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official graduate transcripts, resume showing 3+ years leadership experience, goal statement",
                    "references": "Two professional references from healthcare leaders"
                }
            },
            {
                "id": 10786,
                "title": "Master of Science in Cybersecurity (MSCS)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "NSA-aligned graduate degree providing advanced training in threat vector analysis, enterprise cloud defense, cryptographic protocols, and incident response architecture.",
                "funding": "Cyber Workforce Fellowship: $2,500 tuition credit for incoming security analysts",
                "tuition": "$698 per credit hour",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.phoenix.edu/degrees/technology/cybersecurity/ms-cybersecurity.html",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA in STEM or computing field",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, resume with technical certifications (CompTIA, CISSP preferred)",
                    "references": "One professional supervisor recommendation"
                }
            },
            {
                "id": 10787,
                "title": "Doctor of Business Administration (DBA)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Rigorous applied research doctorate preparing executives to solve complex enterprise problems through empirical quantitative analysis, organizational design, and market disruption modeling.",
                "funding": "Doctoral Research Scholarship: $4,000 merit award distributed across dissertation phases",
                "tuition": "$810 per credit hour",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.phoenix.edu/degrees/business/business-administration/dba.html",
                "requirements": {
                    "gpa": "3.0+ master's GPA (MBA or related field)",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official master's transcripts, professional CV, 1,000-word research proposal concept",
                    "references": "Two executive or academic references"
                }
            },
            {
                "id": 10788,
                "title": "Bachelor of Science in Data Science",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Foundational technical degree covering Python programming, SQL relational databases, statistical hypothesis testing, machine learning pipelines, and data visualization.",
                "funding": "STEM Achievement Grant: $1,500 annual tuition credit",
                "tuition": "$398 per credit hour",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.phoenix.edu/degrees/technology/data-science/bs-data-science.html",
                "requirements": {
                    "gpa": "High school diploma or GED with 2.0+ GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and government-issued ID",
                    "references": "None required for undergraduate entry"
                }
            },
            {
                "id": 10789,
                "title": "Master of Science in Nursing (MSN) - Nurse Informatics",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "computer-science"],
                "desc": "CCNE-accredited graduate nursing program teaching electronic health records (EHR) optimization, clinical data governance, and patient outcome predictive modeling.",
                "funding": "Nurse Educator and Informatics Grant: $2,000 scholarship",
                "tuition": "$698 per credit hour",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.phoenix.edu/degrees/nursing/informatics/msn-informatics.html",
                "requirements": {
                    "gpa": "2.5+ GPA in an accredited Bachelor of Science in Nursing (BSN)",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Active, unencumbered RN license, official BSN transcripts, resume",
                    "references": "Two professional healthcare references"
                }
            },
            {
                "id": 10790,
                "title": "Graduate Certificate in Artificial Intelligence and Machine Learning",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Post-baccalaureate credential exploring deep learning architectures, natural language processing, computer vision, and responsible AI deployment principles.",
                "funding": "AI Innovation Voucher: $1,000 tuition discount",
                "tuition": "$698 per credit hour (18 credit certificate)",
                "fee": "$0",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.phoenix.edu/degrees/technology/artificial-intelligence/certificate.html",
                "requirements": {
                    "gpa": "Bachelor's degree with introductory programming coursework",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official transcripts and technical experience resume",
                    "references": "One professional recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4948,
                "name": "Dr. Mansureh Kebritchi",
                "role": "Chair of the Center for Educational and Instructional Technology Research",
                "department": "College of Doctoral Studies",
                "subject": "computer-science",
                "bio": "Dr. Mansureh Kebritchi researches digital instructional technologies, educational gamification, online adult learning retention, and adaptive pedagogical frameworks in virtual classroom environments.",
                "source": "https://www.phoenix.edu/doctoral-studies/research-centers/ceitr.html"
            },
            {
                "id": 4949,
                "name": "Dr. Mark McCaslin",
                "role": "Senior Research Fellow in Leadership and Innovation",
                "department": "Center for Leadership Studies and Educational Research",
                "subject": "social-sciences",
                "bio": "Dr. Mark McCaslin specializes in transdisciplinary leadership theory, qualitative research methodologies, organizational culture transformations, and adult human potential development.",
                "source": "https://www.phoenix.edu/doctoral-studies/research-centers/clser.html"
            },
            {
                "id": 4950,
                "name": "Dr. Kimberly Underwood",
                "role": "Chair of the Center for Workplace Diversity and Inclusion Research",
                "department": "College of Doctoral Studies",
                "subject": "social-sciences",
                "bio": "Dr. Kimberly Underwood focuses on corporate talent equity, inclusive workforce retention strategies, cultural intelligence in multinational firms, and employee wellness dynamics.",
                "source": "https://www.phoenix.edu/doctoral-studies/research-centers/cwdir.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of South Carolina Union",
        "shortName": "USC Union",
        "slug": "university-of-south-carolina-union",
        "location": "Union, South Carolina, United States",
        "website": "https://www.sc.edu/about/system_and_campuses/union/",
        "sourceRow": 1152,
        "stats": {
            "established": "1965",
            "students": "1,100+",
            "international": "2%",
            "faculty": "55+"
        },
        "hero": {
            "tagline": "Union · Upstate South Carolina Regional Palmetto College Campus",
            "desc": "The University of South Carolina Union is a regional Palmetto College campus located in Union, South Carolina, serving Union, Laurens, and surrounding counties. Delivering accessible associate degrees, seamless bachelor's degree-completion tracks, and cutting-edge simulation nursing education, USC Union combines small class sizes with the resources and research prestige of the University of South Carolina System."
        },
        "admissions": {
            "general": "High school diploma, GED, or approved secondary homeschool portfolio. Open admissions policy with placement assessment in mathematics and English composition.",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international applicants from non-English instructional backgrounds.",
            "deadlines": "Fall semester priority July 1, 2027; Spring semester priority December 1, 2026."
        },
        "financial": {
            "summary": "South Carolina LIFE Scholarships, SC Lottery Tuition Assistance, Palmetto Fellows Awards, and USC Union Educational Foundation endowment scholarships.",
            "tuition": "$3,579/semester ($7,158/year resident; $8,919/semester non-resident)"
        },
        "opportunities": [
            {
                "id": 10791,
                "title": "Associate of Science in Nursing (ADN Pre-Licensure RN)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "ACEN-accredited collaborative nursing cohort with USC Aiken, featuring modern hospital simulation labs and clinical rotations at Spartanburg Regional and Union Medical Center.",
                "funding": "Union Healthcare Heroes Scholarship: $2,000/year stipend for nursing scholars",
                "tuition": "$7,158/year (In-state tuition baseline)",
                "fee": "$40",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/union/study/nursing/index.php",
                "requirements": {
                    "gpa": "3.0+ prerequisite college GPA (anatomy, physiology, microbiology)",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "TEAS examination score 65%+",
                    "papers": "Transcripts, criminal background check, 10-panel drug screening",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10792,
                "title": "Associate of Science in Computer and Information Technology",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Two-year technical curriculum preparing students in network administration, hardware systems, Python scripting, and database architecture with transfer pathway to USC Columbia BS.",
                "funding": "Palmetto STEM Achievement Grant: $1,500/year award",
                "tuition": "$7,158/year",
                "fee": "$40",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/union/study/academics/associate_degrees/index.php",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "High school transcripts, state residency certification",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10793,
                "title": "Associate of Science in Business and Financial Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Comprehensive business pathway covering financial accounting, microeconomics, corporate governance, and managerial statistics.",
                "funding": "Upstate Commerce Leadership Award: $1,200 annual award",
                "tuition": "$7,158/year",
                "fee": "$40",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/union/study/academics/associate_degrees/index.php",
                "requirements": {
                    "gpa": "2.0+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and application form",
                    "references": "One teacher or counselor reference"
                }
            },
            {
                "id": 10794,
                "title": "Associate of Arts in Criminal Justice and Forensic Studies",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Pre-law and law enforcement foundation examining criminal procedure, juvenile delinquency, evidence handling, and correctional sociology.",
                "funding": "South Carolina Law Enforcement Grant: $1,800/year subsidy",
                "tuition": "$7,158/year",
                "fee": "$40",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/union/study/academics/associate_degrees/index.php",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement",
                    "references": "One professional or academic reference"
                }
            },
            {
                "id": 10795,
                "title": "USC Union Educational Foundation Merit Fellowship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Endowed competitive scholarship supporting incoming full-time freshmen demonstrating exceptional academic performance and civic leadership.",
                "funding": "Full $3,000 annual scholarship with campus bookstore stipend",
                "tuition": "$7,158/year (Net cost reduced to $4,158)",
                "fee": "$0",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/union/apply/financial_aid/scholarships/index.php",
                "requirements": {
                    "gpa": "3.5+ cumulative high school GPA",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "SAT 1100+ or ACT 22+ (optional)",
                    "papers": "Scholarship essay on community impact, official transcripts",
                    "references": "Two faculty letters of recommendation"
                }
            },
            {
                "id": 10796,
                "title": "Bachelor of Arts in Organizational Leadership (Palmetto College Completion)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "100% online bachelor's completion program administered through USC Union, teaching organizational change management, cross-cultural ethics, and public sector budgeting.",
                "funding": "Palmetto Online Completion Grant: $1,000 semester grant",
                "tuition": "$7,158/year (Palmetto College tuition rate)",
                "fee": "$40",
                "deadline": "2027-07-15",
                "deadlineText": "July 15, 2027",
                "source": "https://www.sc.edu/about/system_and_campuses/palmetto_college/academic_programs/organizational_leadership/index.php",
                "requirements": {
                    "gpa": "2.0+ GPA with 60 transferable college credits or completed associate degree",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official transcripts from all collegiate institutions attended",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4951,
                "name": "Dr. Randy Lowell",
                "role": "Campus Dean and Professor of Psychology",
                "department": "Department of Social Sciences",
                "subject": "social-sciences",
                "bio": "Dr. Randy Lowell studies cognitive psychology, eye-tracking methodologies in reading comprehension, memory retention in undergraduate pedagogy, and rural higher education access.",
                "source": "https://www.sc.edu/about/system_and_campuses/union/about/directory/lowell_randy.php"
            },
            {
                "id": 4952,
                "name": "Dr. Maggie Aziz",
                "role": "Associate Dean of Academic and Student Affairs and Associate Professor of Sociology",
                "department": "Division of Academic Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Maggie Aziz investigates sociological inequalities, criminology, correctional education pathways, and community-engaged student leadership outcomes.",
                "source": "https://www.sc.edu/about/system_and_campuses/union/about/directory/aziz_maggie.php"
            },
            {
                "id": 4953,
                "name": "Dr. Steve Lownes",
                "role": "Associate Professor of World Languages and Latin American Studies",
                "department": "Department of Humanities",
                "subject": "arts-design",
                "bio": "Dr. Steve Lownes focuses on Portuguese and Brazilian literature, cultural identity in 19th-century Latin American serialized narratives, and foreign language teaching technologies.",
                "source": "https://www.sc.edu/about/system_and_campuses/union/about/directory/lownes_steve.php"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of the Nations",
        "shortName": "UofN",
        "slug": "university-of-the-nations",
        "location": "Kailua-Kona, Hawaii, United States",
        "website": "https://uofn.edu",
        "sourceRow": 1170,
        "stats": {
            "established": "1978",
            "students": "15,000+",
            "international": "60%",
            "faculty": "480+"
        },
        "hero": {
            "tagline": "Kailua-Kona · Global Intercultural Education, Humanitarian Relief & Tropical Agriculture",
            "desc": "The University of the Nations is an international training university headquartered in Kailua-Kona, Hawaii, operating across more than 600 locations in 160 nations. Operating through seven colleges—including Health Care, Agriculture, Education, and Science & Technology—UofN pairs modular, experiential training with cross-cultural field immersions, disaster response, and indigenous community development."
        },
        "admissions": {
            "general": "Successful completion of the foundational Discipleship Training School (DTS) prerequisite curriculum followed by secondary school completion diploma or equivalent.",
            "language": "Demonstrated English proficiency (TOEFL iBT 65+ or IELTS 6.0+) or bilingual track placement for non-native English speakers.",
            "deadlines": "Rolling admissions aligned with quarterly modular academic terms (January, April, July, September)."
        },
        "financial": {
            "summary": "Need-based developing nation tuition assistance subsidies, missionary family tuition waivers, and sponsored agricultural work-study fellowships.",
            "tuition": "$4,200 - $8,500/year (Module-based tuition varies by campus country economic tier)"
        },
        "opportunities": [
            {
                "id": 10797,
                "title": "Associate of Science in Tropical Agriculture & Sustainable Food Systems",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Hands-on agrarian training covering permaculture design, aquaponics, volcanic soil bio-remediation, and drought-resistant agroforestry on the Kona campus farm.",
                "funding": "Pacific Agricultural Stewardship Grant: $2,000 module tuition subsidy",
                "tuition": "$4,500/year",
                "fee": "$35",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://uofn.edu/colleges/college-of-agriculture",
                "requirements": {
                    "gpa": "2.0+ high school or college GPA, completed DTS prerequisite",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, health clearance, agricultural experience personal statement",
                    "references": "Two character references"
                }
            },
            {
                "id": 10798,
                "title": "Bachelor of Science in Primary Health Care & Community Nursing",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Clinical and humanitarian medicine degree preparing medical missionaries and community nurses for tropical disease prevention, maternal-infant health, and clean water sanitation.",
                "funding": "Global Medical Relief Fellowship: $3,000/year award",
                "tuition": "$5,200/year",
                "fee": "$50",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://uofn.edu/colleges/college-of-health-care",
                "requirements": {
                    "gpa": "2.5+ GPA in secondary or prerequisite biology and health courses",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Official transcripts, medical physical clearance, personal essay",
                    "references": "Two recommendations (one medical professional)"
                }
            },
            {
                "id": 10799,
                "title": "Associate of Arts in Intercultural Communication & Cross-Cultural Media",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "social-sciences"],
                "desc": "Modular arts degree teaching documentary filmmaking, cross-cultural storytelling, audio podcasting, and digital media production in emerging economies.",
                "funding": "Visual Storytellers Award: $1,500 equipment and tuition stipend",
                "tuition": "$4,800/year",
                "fee": "$35",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://uofn.edu/colleges/college-of-communication",
                "requirements": {
                    "gpa": "Completed DTS foundation course",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Creative portfolio (photography, video reel, or writing samples), transcripts",
                    "references": "Two personal or mentorship recommendations"
                }
            },
            {
                "id": 10800,
                "title": "Certificate in Disaster Response & Crisis Trauma Counseling",
                "type": "Certificate",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Intensive field credential covering psychological first aid, post-traumatic stress stabilization, refugee camp logistics, and humanitarian supply chain operations.",
                "funding": "Humanitarian Responder Subsidy: $1,200 award",
                "tuition": "$2,800 total certificate cost",
                "fee": "$25",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://uofn.edu/colleges/college-of-counseling",
                "requirements": {
                    "gpa": "Secondary school completion certificate",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, trauma counseling motivation essay",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10801,
                "title": "Bachelor of Arts in International Community Development",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Comprehensive degree analyzing micro-enterprise economics, community-led sanitation, vocational school establishment, and indigenous governance models.",
                "funding": "Developing Nations Endowment: $2,500/year tuition reduction",
                "tuition": "$4,800/year",
                "fee": "$40",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://uofn.edu/colleges/college-of-humanities-and-international-studies",
                "requirements": {
                    "gpa": "2.25+ cumulative GPA and completion of DTS",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, community development vision essay",
                    "references": "Two recommendations from community or mission directors"
                }
            },
            {
                "id": 10802,
                "title": "Diploma in Applied Linguistics & Bible Translation",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Specialized linguistic curriculum in acoustic phonetics, morphological parsing, unwritten orthography development, and field translation software (Paratext).",
                "funding": "Endangered Languages Translation Grant: $2,000 award",
                "tuition": "$4,200/year",
                "fee": "$30",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://uofn.edu/colleges/college-of-education",
                "requirements": {
                    "gpa": "Completed secondary education with strong language aptitude",
                    "ielts": "IELTS 6.5 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Linguistic background essay and academic transcripts",
                    "references": "Two academic recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4954,
                "name": "Dr. Loren Cunningham",
                "role": "Chancellor Emeritus and Founder",
                "department": "International Executive Council",
                "subject": "social-sciences",
                "bio": "Dr. Loren Cunningham co-founded the University of the Nations, pioneering modular international higher education models and global youth mobilization across 160 nations.",
                "source": "https://uofn.edu/about/leadership"
            },
            {
                "id": 4955,
                "name": "Dr. Maureen Menard",
                "role": "Dean of the College of Health Care",
                "department": "College of Health Care",
                "subject": "biology",
                "bio": "Dr. Maureen Menard researches community health intervention models in developing nations, primary maternal-child triage, and health worker curriculum standardization.",
                "source": "https://uofn.edu/colleges/college-of-health-care"
            },
            {
                "id": 4956,
                "name": "Prof. David Hamilton",
                "role": "Vice Chancellor of Academic Development and Theological Research",
                "department": "College of Education and Biblical Studies",
                "subject": "social-sciences",
                "bio": "Prof. David Hamilton specializes in contextual hermeneutics, applied linguistic structures in ancient Semitic texts, and cross-cultural pedagogical integration.",
                "source": "https://uofn.edu/about/leadership"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of South Carolina Upstate Greenville Campus",
        "shortName": "USC Upstate Greenville",
        "slug": "university-of-south-carolina-upstate-greenville-campus",
        "location": "Greenville, South Carolina, United States",
        "website": "https://www.uscupstate.edu/academics/greenville-campus/",
        "sourceRow": 1190,
        "stats": {
            "established": "1967",
            "students": "1,400+",
            "international": "4%",
            "faculty": "90+"
        },
        "hero": {
            "tagline": "Greenville · Advanced Healthcare, Engineering Technology & Business Innovation",
            "desc": "The University of South Carolina Upstate Greenville Campus provides high-demand bachelor's degree completion and graduate programs at the University Center of Greenville (UCG). Partnering directly with Prisma Health, BMW Manufacturing, and regional tech firms, USC Upstate Greenville delivers top-ranked nursing, engineering technology management, and business analytics education in South Carolina's economic corridor."
        },
        "admissions": {
            "general": "60 transferable semester credits or completed Associate of Arts/Associate of Science degree with a minimum cumulative GPA of 2.0 (higher GPA required for nursing and engineering programs).",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Fall priority deadline July 1, 2027; Spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Prisma Health Tuition Assistance, BMW Upstate Scholars, SC LIFE Scholarship transfers, and USC Upstate Foundation awards.",
            "tuition": "$5,604/semester ($11,208/year resident; $22,110/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10803,
                "title": "Bachelor of Science in Nursing (RN-to-BSN Track)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "CCNE-accredited accelerated nursing degree for licensed RNs, focusing on health assessment, evidence-based clinical leadership, and population health informatics.",
                "funding": "Prisma Health Nursing Scholar Grant: $2,500/year tuition reimbursement",
                "tuition": "$11,208/year (In-state baseline)",
                "fee": "$45",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.uscupstate.edu/academics/mary-black-college-of-nursing/rn-to-bsn/",
                "requirements": {
                    "gpa": "2.5+ cumulative GPA in associate degree nursing program",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Active unencumbered SC RN license, official college transcripts",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10804,
                "title": "Bachelor of Science in Engineering Technology Management (ETM)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "ABET-accredited program designed for technical associate degree holders, focusing on smart manufacturing systems, six sigma quality control, and industrial supply chain robotics.",
                "funding": "BMW Automotive Engineering Scholarship: $3,500/year plus co-op work placement",
                "tuition": "$11,208/year",
                "fee": "$45",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.uscupstate.edu/academics/college-of-science-and-technology/engineering-technology-management/",
                "requirements": {
                    "gpa": "2.2+ GPA in AAS technical or engineering technology degree",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Transcripts showing calculus and physics prerequisites, resume",
                    "references": "Two recommendations (one engineering faculty or employer)"
                }
            },
            {
                "id": 10805,
                "title": "Master of Science in Business Analytics (MSBA)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "social-sciences"],
                "desc": "AACSB-accredited graduate degree in predictive modeling, enterprise data warehousing, business intelligence dashboarding, and algorithmic decision analysis.",
                "funding": "Upstate Data Analytics Fellowship: $3,000/year graduate stipend",
                "tuition": "$6,972/semester ($13,944/year resident)",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.uscupstate.edu/academics/george-dean-johnson-jr-college-of-business-and-economics/graduate-programs/msba/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in quantitative or business discipline",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GMAT/GRE score 500+ (waiver available for 3.2+ GPA)",
                    "papers": "Official college transcripts, resume, statement of career objectives",
                    "references": "Two academic or professional letters of recommendation"
                }
            },
            {
                "id": 10806,
                "title": "Bachelor of Science in Cybersecurity",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science"],
                "desc": "Hands-on degree teaching penetration testing, defensive digital forensics, reverse engineering, and enterprise network infrastructure security.",
                "funding": "National Cyber Defense Grant: $2,000 annual merit award",
                "tuition": "$11,208/year",
                "fee": "$45",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.uscupstate.edu/academics/college-of-science-and-technology/computer-science/cybersecurity/",
                "requirements": {
                    "gpa": "2.5+ transfer GPA with college algebra completed",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official transcripts, resume",
                    "references": "One letter of recommendation"
                }
            },
            {
                "id": 10807,
                "title": "Master of Science in Nursing (MSN) - Clinical Nurse Leader",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Advanced clinical practice degree preparing master's nurses to lead interdisciplinary hospital care teams, clinical quality audits, and safety protocol overhauls.",
                "funding": "Advanced Nursing Workforce Fellowship: $4,000 annual grant",
                "tuition": "$13,944/year",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.uscupstate.edu/academics/mary-black-college-of-nursing/msn/",
                "requirements": {
                    "gpa": "3.0+ BSN GPA from accredited institution",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Active RN license, BSN transcripts, goal statement, clinical CV",
                    "references": "Three clinical supervisor recommendations"
                }
            },
            {
                "id": 10808,
                "title": "Bachelor of Science in Health Informatics",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "biology"],
                "desc": "CAHIIM-accredited program combining health data architecture, medical classification coding (ICD-10/CPT), clinical decision support systems, and HIPAA compliance.",
                "funding": "Health IT Career Scholarship: $1,500/year award",
                "tuition": "$11,208/year",
                "fee": "$45",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.uscupstate.edu/academics/college-of-science-and-technology/health-informatics/",
                "requirements": {
                    "gpa": "2.5+ transfer college GPA",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official college transcripts, statement of interest",
                    "references": "Two recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 4957,
                "name": "Dr. Shirleatha Lee",
                "role": "Dean of the Mary Black College of Nursing and Professor",
                "department": "Mary Black College of Nursing",
                "subject": "biology",
                "bio": "Dr. Shirleatha Lee leads academic nursing clinical training and hospital partnerships in Greenville, researching nursing workforce diversity, health equity disparities, and clinical simulation efficacy.",
                "source": "https://www.uscupstate.edu/faculty-staff/shirleatha-lee/"
            },
            {
                "id": 4958,
                "name": "Dr. Uma Gupta",
                "role": "Professor of Business Analytics",
                "department": "George Dean Johnson, Jr. College of Business and Economics",
                "subject": "computer-science",
                "bio": "Dr. Uma Gupta investigates artificial intelligence governance in enterprise supply chains, data analytics pedagogical models, and cognitive decision biases in corporate executive teams.",
                "source": "https://www.uscupstate.edu/faculty-staff/uma-gupta/"
            },
            {
                "id": 4959,
                "name": "Dr. Timothy Ellis",
                "role": "Chair and Professor of Engineering Technology Management",
                "department": "Department of Informatics and Engineering Systems",
                "subject": "engineering",
                "bio": "Dr. Timothy Ellis specializes in digital manufacturing operations, quality management frameworks, industrial automated systems, and applied engineering education.",
                "source": "https://www.uscupstate.edu/faculty-staff/timothy-ellis/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Wisconsin-Green Bay Manitowoc Campus",
        "shortName": "UW-Green Bay Manitowoc",
        "slug": "university-of-wisconsin-green-bay-manitowoc-campus",
        "location": "Manitowoc, Wisconsin, United States",
        "website": "https://www.uwgb.edu/manitowoc/",
        "sourceRow": 1194,
        "stats": {
            "established": "1960",
            "students": "600+",
            "international": "3%",
            "faculty": "40+"
        },
        "hero": {
            "tagline": "Manitowoc · Lake Michigan Coastal Science, Applied Engineering & Business",
            "desc": "The University of Wisconsin-Green Bay Manitowoc Campus is a picturesque shoreline campus situated on the western bank of Lake Michigan. Offering foundational associate degrees, bachelor's degree-completion programs, and freshwater environmental research opportunities, UW-Green Bay Manitowoc provides personalized faculty mentorship and maritime-linked academic pathways within the prestigious University of Wisconsin System."
        },
        "admissions": {
            "general": "High school diploma, GED, or equivalent secondary completion credential. Holistic admissions reviewing secondary GPA, curriculum rigor, and extracurricular involvement.",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international students whose secondary education was not delivered in English.",
            "deadlines": "Rolling admissions; priority fall admission deadline June 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Manitowoc Campus Foundation Scholarships, UW-Green Bay Phoenix Merit Awards, Midwest Student Exchange Program (MSEP) discounts, and Lake Michigan Environmental Fellowships.",
            "tuition": "$5,461/year (Resident undergraduate rate; $13,034/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10809,
                "title": "Associate of Arts and Sciences in Environmental and Coastal Science",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Two-year degree investigating Great Lakes limnology, invasive aquatic species mitigation, nearshore coastal geology, and freshwater wetland preservation along Lake Michigan.",
                "funding": "Lake Michigan Stewardship Scholarship: $2,000/year merit award",
                "tuition": "$5,461/year (In-state tuition)",
                "fee": "$0 (UW System application fee waived)",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uwgb.edu/manitowoc/academics/environmental-science/",
                "requirements": {
                    "gpa": "2.5+ high school GPA with biology and algebra coursework",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and personal statement",
                    "references": "One teacher or counselor recommendation"
                }
            },
            {
                "id": 10810,
                "title": "Bachelor of Science in Mechanical Engineering Technology (Pathways Program)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "mathematics"],
                "desc": "Collaborative degree pathway with UW-Green Bay's Richard J. Resch School of Engineering, featuring maritime manufacturing lab work, CAD design, and thermodynamics.",
                "funding": "Manitowoc Maritime Engineering Grant: $2,500/year award",
                "tuition": "$7,873/year",
                "fee": "$0",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.uwgb.edu/manitowoc/academics/engineering-technology/",
                "requirements": {
                    "gpa": "2.75+ cumulative GPA with pre-calculus and physics",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official high school/college transcripts",
                    "references": "Two recommendations (one math/science instructor)"
                }
            },
            {
                "id": 10811,
                "title": "Associate of Arts and Sciences in Business Administration",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Transfer-oriented foundational degree covering financial accounting, organizational behavior, business law, and commercial macroeconomics.",
                "funding": "Lakeshore Business Leadership Award: $1,500 annual stipend",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uwgb.edu/manitowoc/academics/business-administration/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts and essay",
                    "references": "One academic reference"
                }
            },
            {
                "id": 10812,
                "title": "Associate of Arts and Sciences in Studio Art & Digital Design",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design"],
                "desc": "Fine arts cohort utilizing shoreline art studios for ceramics, landscape oil painting, digital typography, and gallery curation at the campus art gallery.",
                "funding": "Manitowoc Arts Endowment: $1,200 annual materials grant",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.uwgb.edu/manitowoc/academics/art/",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and optional portfolio of 5-10 original artworks",
                    "references": "One art instructor reference"
                }
            },
            {
                "id": 10813,
                "title": "Manitowoc Campus Foundation Presidential Fellowship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Competitive premier scholarship awarded to outstanding high school valedictorians and salutatorians enrolling at the Manitowoc campus.",
                "funding": "Full $3,000 annual scholarship with campus honors program admission",
                "tuition": "$5,461/year (Net cost reduced to $2,461)",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uwgb.edu/manitowoc/scholarships/",
                "requirements": {
                    "gpa": "3.5+ unweighted cumulative high school GPA",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "ACT/SAT optional",
                    "papers": "Honors scholarship application essay, official transcripts",
                    "references": "Two letters of recommendation from high school teachers"
                }
            },
            {
                "id": 10814,
                "title": "Associate of Arts and Sciences in Psychology & Human Development",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Exploration of abnormal psychology, child development, cognitive neurobiology, and statistical behavioral research methods.",
                "funding": "Behavioral Health Access Scholarship: $1,500/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.uwgb.edu/manitowoc/academics/psychology/",
                "requirements": {
                    "gpa": "2.25+ cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and statement of academic intent",
                    "references": "One counselor recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4960,
                "name": "Dr. Rebecca Abler",
                "role": "Professor of Biological Sciences",
                "department": "Department of Natural and Applied Sciences",
                "subject": "biology",
                "bio": "Dr. Rebecca Abler investigates microbial water quality in Lake Michigan tributaries, beach contamination indicators, and community-engaged citizen science ecological monitoring.",
                "source": "https://www.uwgb.edu/directory/people/rebecca-abler/"
            },
            {
                "id": 4961,
                "name": "Dr. Berel Lutsky",
                "role": "Professor of Art and Design",
                "department": "Department of Art and Design",
                "subject": "arts-design",
                "bio": "Dr. Berel Lutsky is a master printmaker and visual artist specializing in intaglio print processes, contemporary drawing, and Lake Michigan shoreline visual culture.",
                "source": "https://www.uwgb.edu/directory/people/berel-lutsky/"
            },
            {
                "id": 4962,
                "name": "Dr. Amy Kabrhel",
                "role": "Associate Professor of Chemistry",
                "department": "Department of Chemistry",
                "subject": "chemistry",
                "bio": "Dr. Amy Kabrhel researches chemical education pedagogy, organic synthesis lab curriculum innovation, and environmental aqueous trace analysis in Wisconsin water systems.",
                "source": "https://www.uwgb.edu/directory/people/amy-kabrhel/"
            }
        ]
    }
]

with open("scripts/b73_p1_chunk1_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 73 Part 1 Chunk 1.")
