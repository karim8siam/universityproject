# scripts/make_b73_p2_chunk2.py
# Universities 24 to 30 of Batch 73
# Opps: 10905 to 10946 (42 opps)
# Res: 5008 to 5028 (21 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Wisconsin Colleges",
        "shortName": "UW Colleges",
        "slug": "university-of-wisconsin-colleges",
        "location": "Madison, Wisconsin, United States",
        "website": "https://www.wisconsin.edu/campuses/",
        "sourceRow": 1179,
        "stats": {
            "established": "1972",
            "students": "12,000+",
            "international": "4%",
            "faculty": "650+"
        },
        "hero": {
            "tagline": "Madison · Statewide Collegiate Transfer Pathways, Liberal Arts & STEM Access",
            "desc": "The University of Wisconsin Colleges branch campus network provides foundational collegiate education and guaranteed bachelor's degree transfer pathways across thirteen communities in Wisconsin. Coordinated through the University of Wisconsin System administration in Madison, UW Colleges delivers accredited Associate of Arts and Sciences (AAS) degrees, undergraduate research mentoring, and high-tech STEM transfer pipelines."
        },
        "admissions": {
            "general": "High school diploma, GED, or approved secondary completion certificate. Open access admissions with guaranteed transfer to any UW System four-year university upon completion of the AAS degree.",
            "language": "TOEFL iBT 71+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions; priority fall deadline July 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Wisconsin Tuition Promise (100% free tuition for eligible students from households earning under $62,000), UW System Foundation Scholarships, and regional campus endowments.",
            "tuition": "$5,461/year (Wisconsin resident rate; $13,034/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10905,
                "title": "Associate of Arts and Sciences with Guaranteed Transfer to UW-Madison",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "arts-design"],
                "desc": "Premier two-year liberal arts transfer curriculum guaranteeing junior-year admission to the University of Wisconsin-Madison College of Letters & Science with a 3.2+ GPA.",
                "funding": "Wisconsin Tuition Promise: 100% full tuition coverage for qualifying low- and middle-income families",
                "tuition": "$5,461/year",
                "fee": "$0 (Application fee permanently eliminated)",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.wisconsin.edu/campuses/guaranteed-transfer/",
                "requirements": {
                    "gpa": "High school diploma or GED equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official high school transcripts and state residency declaration",
                    "references": "None required for undergraduate entry"
                }
            },
            {
                "id": 10906,
                "title": "Associate of Science in Pre-Engineering & Applied Physical Sciences",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics", "mathematics"],
                "desc": "Comprehensive technical cohort covering calculus I, II, & III, differential equations, university physics with calculus, and computer-aided design (CAD).",
                "funding": "Statewide STEM Transfer Grant: $2,000/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.wisconsin.edu/campuses/stem-pathways/",
                "requirements": {
                    "gpa": "2.5+ high school GPA with pre-calculus readiness",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts showing mathematics preparation",
                    "references": "One teacher recommendation"
                }
            },
            {
                "id": 10907,
                "title": "Associate of Science in Environmental Ecology & Natural Resources",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Field science curriculum studying wetland ecology, Wisconsin watershed management, soil microbiology, and GIS environmental mapping.",
                "funding": "Aldo Leopold Conservation Fellowship: $1,800/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.wisconsin.edu/campuses/environmental-pathways/",
                "requirements": {
                    "gpa": "2.2+ high school GPA with biology and chemistry",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement",
                    "references": "One science teacher reference"
                }
            },
            {
                "id": 10908,
                "title": "Associate of Arts and Sciences in Business & Financial Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Foundation in managerial accounting, macroeconomics, business statistics, and organizational communication feeding directly into UW business schools.",
                "funding": "Wisconsin Business Leaders Award: $1,500/year award",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.wisconsin.edu/campuses/business-pathways/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts",
                    "references": "One reference"
                }
            },
            {
                "id": 10909,
                "title": "Tommy G. Thompson Leadership and Civic Engagement Scholarship",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Statewide endowed scholarship honoring undergraduate students demonstrating outstanding civic leadership, public service, and academic integrity.",
                "funding": "Full $2,500 annual scholarship plus participation in the Thompson Center leadership symposium",
                "tuition": "$5,461/year (Net cost reduced to $2,961)",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.wisconsin.edu/scholarships/thompson-scholars/",
                "requirements": {
                    "gpa": "3.3+ cumulative GPA at any UW branch campus",
                    "ielts": "Satisfied via enrollment",
                    "gre": "Not required",
                    "papers": "Essay on bipartisan civic leadership, resume, academic transcripts",
                    "references": "Two letters of recommendation (one civic leader, one faculty)"
                }
            },
            {
                "id": 10910,
                "title": "Associate of Science in Health Professions & Pre-Nursing",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Rigorous collegiate pre-health program covering anatomy and physiology, organic chemistry, microbiology, and biomedical statistics.",
                "funding": "Rural Health Workforce Grant: $2,000/year scholarship",
                "tuition": "$5,461/year",
                "fee": "$0",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.wisconsin.edu/campuses/health-pathways/",
                "requirements": {
                    "gpa": "2.75+ high school GPA with biology and chemistry coursework",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official transcripts and career goals essay",
                    "references": "Two recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 5008,
                "name": "Dr. Johannes Britz",
                "role": "Senior Vice President for Academic and Student Affairs",
                "department": "UW System Administration",
                "subject": "social-sciences",
                "bio": "Dr. Johannes Britz oversees statewide academic program review and articulation across all 26 UW campuses, researching information ethics, digital literacy in higher education, and statewide transfer policy.",
                "source": "https://www.wisconsin.edu/president/leadership-team/johannes-britz/"
            },
            {
                "id": 5009,
                "name": "Dr. Tracy Davidson",
                "role": "Associate Vice President for Academic Programs and Innovation",
                "department": "Office of Academic and Student Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Tracy Davidson directs branch campus transfer initiatives, dual-credit high school pathways, curriculum innovation, and statewide academic program alignment.",
                "source": "https://www.wisconsin.edu/academic-affairs/staff-directory/tracy-davidson/"
            },
            {
                "id": 5010,
                "name": "Dr. Carleen Vande Zande",
                "role": "Director of Academic and Student Support Initiatives",
                "department": "Division of Academic Planning",
                "subject": "social-sciences",
                "bio": "Dr. Carleen Vande Zande specializes in higher education accreditation compliance, student retention metrics in multi-campus university systems, and developmental education reform.",
                "source": "https://www.wisconsin.edu/academic-affairs/staff-directory/carleen-vande-zande/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Idaho Integrated Design Lab",
        "shortName": "UI IDL",
        "slug": "university-of-idaho-integrated-design-lab",
        "location": "Boise, Idaho, United States",
        "website": "https://www.uidaho.edu/caa/research/idl",
        "sourceRow": 1085,
        "stats": {
            "established": "1994",
            "students": "250+",
            "international": "15%",
            "faculty": "35+"
        },
        "hero": {
            "tagline": "Boise · Premier Architectural Energy Research, Daylighting & Net-Zero Building Science",
            "desc": "The University of Idaho Integrated Design Lab (IDL) in Boise is a nationally recognized research and graduate teaching facility within the College of Art and Architecture. Dedicated to transforming the built environment, the IDL conducts groundbreaking research in whole-building energy modeling, passive daylighting simulation, thermal envelope optimization, and decarbonization strategies for utility companies and architectural firms across the Pacific Northwest."
        },
        "admissions": {
            "general": "Enrollment through the University of Idaho College of Graduate Studies (M.Arch, M.S. in Architecture, or Ph.D. in Design). Accredited bachelor's degree in architecture, mechanical engineering, or building science with 3.0+ GPA.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international graduate applicants.",
            "deadlines": "Fall graduate admission priority January 15, 2027; Regular deadline March 15, 2027."
        },
        "financial": {
            "summary": "IDL Graduate Research Assistantships (full tuition waiver plus $24,000 annual stipend sponsored by Idaho Power and NEEA), College of Art and Architecture Fellowships, and ASHRAE student travel grants.",
            "tuition": "$9,876/year (Idaho resident graduate tuition; $29,148/year non-resident; waived for funded GRAs)"
        },
        "opportunities": [
            {
                "id": 10911,
                "title": "Master of Science in Architecture (Concentration in Building Energy & Performance)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "arts-design", "environment"],
                "desc": "Post-professional research degree conducted at IDL Boise, analyzing dynamic solar shading, microclimate CFD simulation, radiant hydronic cooling, and EnergyPlus modeling.",
                "funding": "IDL Energy Research Assistantship: 100% full tuition waiver plus $24,000 annual research stipend",
                "tuition": "$0 (Fully funded for appointed graduate research assistants)",
                "fee": "$60",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.uidaho.edu/caa/research/idl/education/graduate",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in architecture, mechanical engineering, or physics",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Design/research portfolio, statement of research intent in building energy, official transcripts",
                    "references": "Three letters of academic or architectural recommendation"
                }
            },
            {
                "id": 10912,
                "title": "Doctor of Philosophy (Ph.D.) in Sustainable Design and High-Performance Architecture",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "arts-design", "environment"],
                "desc": "Terminal research doctorate investigating embodied carbon lifecycle assessments, smart facade metamaterials, predictive building analytics, and net-zero district energy systems.",
                "funding": "Idaho Power Doctoral Fellowship: $28,000 annual stipend plus tuition waiver and research allowance",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.uidaho.edu/caa/research/idl/education/phd",
                "requirements": {
                    "gpa": "3.5+ master's degree GPA in architecture or building engineering",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "Master's thesis or writing sample, 1,500-word doctoral research prospectus, curriculum vitae",
                    "references": "Three letters of recommendation from research advisors"
                }
            },
            {
                "id": 10913,
                "title": "Master of Architecture (M.Arch - Boise Urban and High-Performance Studio)",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "engineering"],
                "desc": "NAAB-accredited professional architecture degree focusing on integrated urban design, mass timber structures, carbon-neutral construction, and architectural energy simulation.",
                "funding": "Architecture Design Excellence Scholarship: $4,000/year award",
                "tuition": "$9,876/year (Resident)",
                "fee": "$60",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.uidaho.edu/caa/programs/architecture/m-arch",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in architecture or environmental design",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Comprehensive design portfolio (20-30 pages), transcripts, personal statement",
                    "references": "Three recommendations from architectural faculty"
                }
            },
            {
                "id": 10914,
                "title": "IDL Summer Energy Modeling and Daylighting Internship",
                "type": "Internship",
                "subject": "engineering",
                "subjects": ["engineering", "arts-design"],
                "desc": "Ten-week paid technical fellowship performing physical sky-simulator testing, architectural daylight sensor calibration, and OpenStudio utility code compliance audits.",
                "funding": "Stipend of $7,500 for the 10-week summer term plus travel support",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.uidaho.edu/caa/research/idl/opportunities",
                "requirements": {
                    "gpa": "3.2+ GPA in architecture, architectural engineering, or building science",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Resume, cover letter detailing simulation software experience (Rhino, Ladybug, EnergyPlus)",
                    "references": "Two faculty letters of recommendation"
                }
            },
            {
                "id": 10915,
                "title": "Graduate Certificate in High-Performance Building Design",
                "type": "Certificate",
                "subject": "engineering",
                "subjects": ["engineering", "arts-design"],
                "desc": "Four-course graduate certificate in passive solar design, natural ventilation engineering, envelope diagnostic testing, and LEED/AIA 2030 challenge compliance.",
                "funding": "ASHRAE Regional Education Subsidy: $1,200 discount",
                "tuition": "$4,938 total certificate tuition",
                "fee": "$30",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.uidaho.edu/caa/research/idl/education/certificate",
                "requirements": {
                    "gpa": "Bachelor's degree in design or engineering with 2.8+ GPA",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts and resume",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10916,
                "title": "Postdoctoral Fellowship in Urban Microclimate & Resilient Building Systems",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering", "environment"],
                "desc": "Interdisciplinary postdoctoral research post analyzing urban heat island mitigation, climate-resilient district cooling, and building-integrated photovoltaics.",
                "funding": "Annual salary of $62,500 plus comprehensive state health insurance and $6,000 conference travel budget",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.uidaho.edu/caa/research/idl/research/postdoc",
                "requirements": {
                    "gpa": "Ph.D. in architectural engineering, building science, or mechanical engineering",
                    "ielts": "Satisfied by terminal doctorate",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, 3 peer-reviewed publications, 3-page research proposal",
                    "references": "Three letters of recommendation from international scholars"
                }
            }
        ],
        "researchers": [
            {
                "id": 5011,
                "name": "Dr. Mackenzie Strawn",
                "role": "Director of the Integrated Design Lab and Associate Professor of Architecture",
                "department": "College of Art and Architecture",
                "subject": "engineering",
                "bio": "Dr. Mackenzie Strawn directs the UI Integrated Design Lab, researching passive solar heating systems, daylight simulation algorithms, energy-efficient building envelope retrofits, and net-zero architectural design.",
                "source": "https://www.uidaho.edu/caa/research/idl/people/strawn"
            },
            {
                "id": 5012,
                "name": "Dr. Damon Woods",
                "role": "Research Assistant Professor and Director of Building Simulation Operations",
                "department": "Integrated Design Lab",
                "subject": "engineering",
                "bio": "Dr. Damon Woods specializes in thermal comfort modeling, air infiltration diagnostics, natural displacement ventilation systems, and commercial building HVAC energy optimization.",
                "source": "https://www.uidaho.edu/caa/research/idl/people/woods"
            },
            {
                "id": 5013,
                "name": "Prof. Kevin Van Den Wymelenberg",
                "role": "Senior Research Fellow and Consulting Faculty",
                "department": "College of Art and Architecture",
                "subject": "arts-design",
                "bio": "Prof. Kevin Van Den Wymelenberg is an internationally recognized expert in daylighting, visual comfort, indoor environmental microbial health, and high-performance architectural integration.",
                "source": "https://www.uidaho.edu/caa/research/idl/people/vandenwymelenberg"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Nevada System of Higher Education",
        "shortName": "NSHE",
        "slug": "nevada-system-of-higher-education",
        "location": "Reno, Nevada, United States",
        "website": "https://nshe.nevada.edu",
        "sourceRow": 853,
        "stats": {
            "established": "1968",
            "students": "105,000+",
            "international": "6%",
            "faculty": "4,200+"
        },
        "hero": {
            "tagline": "Reno · Constitutional Higher Education Governance, Desert Research & STEM Pipelines",
            "desc": "The Nevada System of Higher Education (NSHE) governs all public higher education institutions in Nevada, encompassing two research universities (UNLV and UNR), the Desert Research Institute (DRI), the Nevada State University, and four comprehensive community colleges. Driving over $350 million in annual research, NSHE spearheads statewide initiatives in lithium battery materials, arid water hydrology, and clean energy workforce training."
        },
        "admissions": {
            "general": "Admissions processed through constituent NSHE universities and colleges. High school diploma or GED with minimum GPA standards (2.5+ for community colleges; 3.0+ for research universities).",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international candidates across NSHE institutions.",
            "deadlines": "Fall priority admission February 1, 2027; Spring priority admission November 1, 2026."
        },
        "financial": {
            "summary": "Governor Guinn Millennium Scholarships (up to $10,000 over undergraduate study), NSHE Regents' Scholar Awards, Nevada Promise Scholarships (100% free community college tuition), and DRI graduate fellowships.",
            "tuition": "$3,800 - $8,900/year (Community college $124/credit; University undergraduate $270/credit)"
        },
        "opportunities": [
            {
                "id": 10917,
                "title": "Governor Guinn Millennium Scholarship (Statewide Program)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Flagship Nevada merit scholarship funding up to $10,000 toward tuition and fees for qualifying high school graduates attending any NSHE collegiate institution.",
                "funding": "$80 per university credit / $60 per state college credit up to $10,000 total lifetime award",
                "tuition": "Covers tuition directly across NSHE institutions",
                "fee": "$0 (No separate scholarship application fee)",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://nshe.nevada.edu/initiatives/millennium-scholarship/",
                "requirements": {
                    "gpa": "3.25+ weighted cumulative high school GPA or SAT 1070+ / ACT 21+",
                    "ielts": "Satisfied via Nevada high school graduation",
                    "gre": "Not required",
                    "papers": "Nevada high school transcripts showing 4 years of English and 4 years of math",
                    "references": "Automatic certification via Nevada Department of Education"
                }
            },
            {
                "id": 10918,
                "title": "Nevada Promise Scholarship (100% Last-Dollar Community College Tuition)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "State-legislated last-dollar scholarship covering 100% of mandatory registration and tuition fees for up to three years at CSN, GBC, TMCC, or WNC.",
                "funding": "100% of remaining tuition and registration fees after federal and state aid",
                "tuition": "$0 (Tuition completely covered for recipients)",
                "fee": "$0",
                "deadline": "2026-10-31",
                "deadlineText": "October 31, 2026",
                "source": "https://nshe.nevada.edu/initiatives/nevada-promise/",
                "requirements": {
                    "gpa": "High school diploma or GED earned in Nevada, age under 20",
                    "ielts": "Satisfied via Nevada secondary completion",
                    "gre": "Not required",
                    "papers": "Nevada Promise application, completed FAFSA, 8 hours community service log",
                    "references": "Mentor meeting verification form"
                }
            },
            {
                "id": 10919,
                "title": "NSHE Regents' Scholar Award (Undergraduate and Graduate Research)",
                "type": "Award",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Highest academic honor conferred annually by the Board of Regents to one undergraduate and one graduate scholar at each NSHE institution demonstrating exceptional research.",
                "funding": "Cash stipend of $5,000 per recipient with formal commendation at the Board of Regents meeting",
                "tuition": "Constituent campus rates",
                "fee": "$0",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://nshe.nevada.edu/leadership-policy/board-of-regents/awards/",
                "requirements": {
                    "gpa": "3.8+ cumulative collegiate GPA, junior/senior or graduate standing",
                    "ielts": "Satisfied via university enrollment",
                    "gre": "Not required",
                    "papers": "Institutional nomination dossier, curriculum vitae, published research portfolio",
                    "references": "Nomination by institution president"
                }
            },
            {
                "id": 10920,
                "title": "Desert Research Institute (DRI) Arid Hydrology Graduate Fellowship",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "physics"],
                "desc": "NSHE research fellowship based at the Desert Research Institute in Reno/Las Vegas investigating desert groundwater aquifers, atmospheric cloud seeding, and climate resilience.",
                "funding": "Graduate research stipend of $32,000/year plus full tuition waiver and lab budget",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.dri.edu/education/graduate-programs/",
                "requirements": {
                    "gpa": "3.3+ undergraduate GPA in hydrology, geological sciences, or environmental engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Statement of research interests, scientific CV, transcripts",
                    "references": "Three letters of recommendation from faculty mentors"
                }
            },
            {
                "id": 10921,
                "title": "Nevada Lithium and Critical Materials STEM Fellowship",
                "type": "Fellowship",
                "subject": "chemistry",
                "subjects": ["chemistry", "engineering", "environment"],
                "desc": "Inter-institutional fellowship across UNR, UNLV, and DRI investigating closed-loop lithium extraction, battery cathode recycling, and geothermal mineral extraction in Nevada.",
                "funding": "$26,000 annual graduate fellowship plus industrial internship placement with battery manufacturers",
                "tuition": "Covered via fellowship waiver",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://nshe.nevada.edu/initiatives/stem-lithium/",
                "requirements": {
                    "gpa": "3.2+ GPA in chemical engineering, chemistry, geology, or materials science",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, technical statement of battery materials research experience",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10922,
                "title": "Roseman - NSHE Allied Health Workforce Grant",
                "type": "Grant",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Collaborative workforce grant for students pursuing accelerated nursing, pharmacy, or diagnostic medical sonography with commitment to rural Nevada clinical service.",
                "funding": "Tuition credit up to $4,500/year for healthcare candidates",
                "tuition": "Varies by specific NSHE nursing program",
                "fee": "$0",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://nshe.nevada.edu/initiatives/health-sciences/",
                "requirements": {
                    "gpa": "2.75+ prerequisite GPA in collegiate pre-health sciences",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, clinical interest essay, Nevada rural clinical service pledge",
                    "references": "Two recommendations"
                }
            }
        ],
        "researchers": [
            {
                "id": 5014,
                "name": "Dr. Patty Charlton",
                "role": "Chancellor of the Nevada System of Higher Education",
                "department": "NSHE System Administration",
                "subject": "social-sciences",
                "bio": "Dr. Patty Charlton is Chancellor of NSHE, leading strategic higher education policy, state legislative budget advocacy, and academic alignment across Nevada's public colleges and universities.",
                "source": "https://nshe.nevada.edu/leadership-policy/chancellor/"
            },
            {
                "id": 5015,
                "name": "Dr. Kumud Acharya",
                "role": "President of the Desert Research Institute and Research Professor",
                "department": "Desert Research Institute",
                "subject": "environment",
                "bio": "Dr. Kumud Acharya leads the Desert Research Institute within NSHE, conducting international research on freshwater limnology, water quality monitoring, invasive dreissenid mussels, and arid watershed restoration.",
                "source": "https://www.dri.edu/directory/kumud-acharya/"
            },
            {
                "id": 5016,
                "name": "Dr. Federico Zaragoza",
                "role": "Senior Vice Chancellor for Academic and Workforce Alignment",
                "department": "Division of Academic and Student Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Federico Zaragoza specializes in community college workforce development, industrial apprenticeship frameworks, Hispanic-Serving Institution (HSI) student success metrics, and technical articulation.",
                "source": "https://nshe.nevada.edu/leadership-policy/executive-staff/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Minnesota State Colleges and Universities",
        "shortName": "MinnState",
        "slug": "minnesota-state-colleges-and-universities",
        "location": "St. Paul, Minnesota, United States",
        "website": "https://www.minnstate.edu",
        "sourceRow": 820,
        "stats": {
            "established": "1995",
            "students": "300,000+",
            "international": "5%",
            "faculty": "14,500+"
        },
        "hero": {
            "tagline": "St. Paul · Minnesota's Largest Higher Education System, 33 Colleges & Universities",
            "desc": "Minnesota State Colleges and Universities (MinnState) is the third-largest higher education system in the United States, comprised of 26 state colleges and 7 state universities across 54 campuses. Educating over 300,000 students annually, MinnState delivers comprehensive education spanning technical trades, liberal arts, advanced engineering, and healthcare, powering Minnesota's economic engine."
        },
        "admissions": {
            "general": "Open admissions for two-year state colleges (high school diploma or GED); comprehensive holistic review for four-year state universities (minimum 2.75+ cumulative GPA or upper 50% high school class rank).",
            "language": "TOEFL iBT 61+ for colleges, 71+ for universities (or IELTS 6.0+).",
            "deadlines": "Rolling admissions with priority fall deadline July 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "North Star Promise Scholarship (100% free tuition and fees for Minnesota residents with family adjusted gross income under $80,000), Workforce Development Scholarships, and MinnState Foundation Grants.",
            "tuition": "$5,900/year (Two-year college rate; $9,400/year state university rate)"
        },
        "opportunities": [
            {
                "id": 10923,
                "title": "North Star Promise Scholarship (100% Free Tuition and Fees)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Landmark state-funded program providing 100% free tuition and mandatory fees for eligible Minnesota students attending any MinnState college or university.",
                "funding": "100% of tuition and mandatory fees covered after federal and state grants",
                "tuition": "$0 (Full tuition coverage for qualifying recipients)",
                "fee": "$0",
                "deadline": "2027-06-30",
                "deadlineText": "June 30, 2027",
                "source": "https://www.minnstate.edu/admissions/northstarpromise.html",
                "requirements": {
                    "gpa": "High school diploma or GED, family AGI below $80,000, Minnesota resident",
                    "ielts": "Satisfied via Minnesota high school completion",
                    "gre": "Not required",
                    "papers": "Completed FAFSA or Minnesota Dream Act application",
                    "references": "None required"
                }
            },
            {
                "id": 10924,
                "title": "Minnesota Workforce Development Scholarship (High-Demand STEM & Healthcare)",
                "type": "Scholarship",
                "subject": "engineering",
                "subjects": ["engineering", "biology", "computer-science"],
                "desc": "Targeted $2,500 annual scholarship for students entering advanced manufacturing, agriculture, healthcare, information technology, early childhood education, or public safety.",
                "funding": "$2,500 annual scholarship with potential $5,000 renewal upon completion",
                "tuition": "Deducted directly from MinnState tuition",
                "fee": "$0",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.minnstate.edu/admissions/workforce.html",
                "requirements": {
                    "gpa": "Enrolled in an eligible high-demand technical or degree program with 2.5+ GPA",
                    "ielts": "Satisfied via enrollment",
                    "gre": "Not required",
                    "papers": "Scholarship application form and official transcripts",
                    "references": "One academic or vocational instructor reference"
                }
            },
            {
                "id": 10925,
                "title": "Associate of Science in Cloud Computing and Software Engineering (MinnState Transfer Pathway)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Statewide articulated transfer pathway in Python, Java data structures, AWS architecture, Linux systems, and relational databases guaranteeing junior standing at any MinnState university.",
                "funding": "STEM Equity Grant: $2,000/year award",
                "tuition": "$5,900/year (State college rate)",
                "fee": "$20",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.minnstate.edu/transfer/pathways/computer-science.html",
                "requirements": {
                    "gpa": "2.0+ high school GPA with algebra",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "High school transcripts and residency form",
                    "references": "One reference"
                }
            },
            {
                "id": 10926,
                "title": "Bachelor of Science in Automated Manufacturing and Robotics Engineering",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Hands-on engineering degree focused on programmable logic controllers (PLCs), industrial robotic arms, pneumatic control systems, and smart factory IoT networks.",
                "funding": "Advanced Manufacturing Industry Partnership: $3,000/year plus paid summer internship",
                "tuition": "$9,400/year",
                "fee": "$20",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://www.minnstate.edu/programs/manufacturing-engineering.html",
                "requirements": {
                    "gpa": "2.5+ cumulative GPA with pre-calculus and physics",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts showing math preparation",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10927,
                "title": "Associate of Science in Nursing (MANE Pre-Licensure BSN Pathway)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Minnesota Alliance for Nursing Education (MANE) dual-enrollment curriculum providing seamless progression from ADN to BSN with clinical hospital rotations.",
                "funding": "Minnesota Rural Health Nurse Grant: $2,500/year award",
                "tuition": "$6,200/year",
                "fee": "$20",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://www.minnstate.edu/programs/nursing.html",
                "requirements": {
                    "gpa": "2.75+ prerequisite GPA (anatomy, physiology, chemistry, psychology)",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "ATI TEAS score 65%+",
                    "papers": "Official college transcripts, CPR certification, background check",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10928,
                "title": "Bachelor of Science in Environmental Science & Water Resource Management",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology", "chemistry"],
                "desc": "Comprehensive degree studying Upper Mississippi hydrology, agricultural nutrient runoff mitigation, limnological sampling, and groundwater protection.",
                "funding": "Land of 10,000 Lakes Water Stewardship Award: $2,000/year award",
                "tuition": "$9,400/year",
                "fee": "$20",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.minnstate.edu/programs/environmental-science.html",
                "requirements": {
                    "gpa": "2.5+ GPA with high school biology and chemistry",
                    "ielts": "IELTS 6.0 or TOEFL 71",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement",
                    "references": "One science teacher reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 5017,
                "name": "Dr. Scott Olson",
                "role": "Chancellor of Minnesota State Colleges and Universities",
                "department": "Office of the Chancellor",
                "subject": "social-sciences",
                "bio": "Dr. Scott Olson serves as Chancellor of MinnState, conducting research on higher education access equity, statewide transfer articulation pathways, and workforce credential alignment.",
                "source": "https://www.minnstate.edu/system/chancellor/index.html"
            },
            {
                "id": 5018,
                "name": "Dr. Satasha Green-Stephen",
                "role": "Senior Vice Chancellor for Academic and Student Affairs",
                "department": "Academic and Student Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Satasha Green-Stephen oversees academic quality and curriculum transfer for 33 institutions, specializing in urban teacher development, special education advocacy, and student retention metrics.",
                "source": "https://www.minnstate.edu/system/asa/index.html"
            },
            {
                "id": 5019,
                "name": "Dr. Bill Maki",
                "role": "Vice Chancellor for Finance and Facilities",
                "department": "Division of Finance",
                "subject": "social-sciences",
                "bio": "Dr. Bill Maki specializes in public higher education financial modeling, capital infrastructure investment, statewide tuition policy, and sustainable campus facility operations.",
                "source": "https://www.minnstate.edu/system/finance/index.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Montana State University Extension",
        "shortName": "MSU Extension",
        "slug": "montana-state-university-extension",
        "location": "Bozeman, Montana, United States",
        "website": "https://www.msuextension.org",
        "sourceRow": 831,
        "stats": {
            "established": "1914",
            "students": "1,200+",
            "international": "4%",
            "faculty": "140+"
        },
        "hero": {
            "tagline": "Bozeman · Statewide Land-Grant Agricultural Science, Forestry & Community Resilience",
            "desc": "Montana State University Extension is the statewide outreach and applied research arm of Montana's land-grant university, serving all 56 Montana counties and seven American Indian reservations. Conducting vital research in rangeland ecology, drought-resistant cereal crops, livestock genomics, wildfire risk mitigation, and rural economic development, MSU Extension pairs academic science directly with Montana communities."
        },
        "admissions": {
            "general": "Graduate study and fellowships administered through the Montana State University Graduate School. Bachelor's degree in agriculture, animal science, forestry, or related natural resource field with 3.0+ GPA.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ for international graduate scholars.",
            "deadlines": "Fall semester priority February 1, 2027; Spring priority October 15, 2026."
        },
        "financial": {
            "summary": "MSU Extension Graduate Research Assistantships (full tuition waiver plus $26,000 annual stipend), USDA NIFA Fellowships, and Montana Agricultural Experiment Station endowments.",
            "tuition": "$7,840/year (Montana resident graduate tuition; $26,450/year non-resident; waived for funded GRAs)"
        },
        "opportunities": [
            {
                "id": 10929,
                "title": "Master of Science in Animal and Range Sciences (Extension & Rangeland Ecology Track)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "Applied graduate degree evaluating invasive cheatgrass mitigation, cattle grazing genetics, sagebrush habitat conservation, and riparian water quality.",
                "funding": "MSU Extension Graduate Assistantship: Full tuition waiver plus $26,000 annual research stipend",
                "tuition": "$0 (Fully funded for appointed research assistants)",
                "fee": "$60",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://animalrange.montana.edu/graduate.html",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in animal science, biology, rangeland ecology, or agriculture",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE optional",
                    "papers": "Statement of research interests, CV, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10930,
                "title": "Master of Science in Plant Sciences (Sustainable Dryland Cropping Systems)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology", "chemistry"],
                "desc": "Field-oriented graduate curriculum investigating soil health, pulse crop rotation (lentils/chickpeas), wheat stem sawfly biological control, and drought resilience in Northern Great Plains soils.",
                "funding": "USDA NIFA Research Assistantship: $27,000/year stipend plus full tuition waiver",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://plantsciences.montana.edu/graduate/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in agronomy, plant pathology, or biology",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Research statement, CV, official transcripts",
                    "references": "Three letters of recommendation from scientists"
                }
            },
            {
                "id": 10931,
                "title": "Master of Science in Land Resources and Environmental Sciences (LRES)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "chemistry"],
                "desc": "Interdisciplinary environmental degree covering watershed hydrology, mine land reclamation, geospatial soil modeling, and alpine climate adaptation.",
                "funding": "Montana Agricultural Experiment Station Fellowship: $28,000 annual stipend plus tuition waiver",
                "tuition": "$0",
                "fee": "$60",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://landresources.montana.edu/grad/",
                "requirements": {
                    "gpa": "3.2+ undergraduate GPA in environmental science, chemistry, or geology",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, 1,000-word statement of research intent, writing sample",
                    "references": "Three academic references"
                }
            },
            {
                "id": 10932,
                "title": "MSU Extension Summer Agroecology and Community Internship",
                "type": "Internship",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Twelve-week paid fellowship stationed in county extension offices across Montana, providing hands-on training in crop scouting, 4-H youth education, and weed management.",
                "funding": "Stipend of $6,500 for 12 weeks plus housing assistance in regional Montana counties",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.msuextension.org/careers/internships.html",
                "requirements": {
                    "gpa": "2.75+ cumulative GPA in agriculture, education, or natural resources",
                    "ielts": "Satisfied via undergraduate enrollment",
                    "gre": "Not required",
                    "papers": "Resume, cover letter detailing community engagement experience",
                    "references": "Two recommendations (one faculty, one community leader)"
                }
            },
            {
                "id": 10933,
                "title": "Postdoctoral Fellowship in Precision Agriculture and Remote Sensing",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering", "environment", "computer-science"],
                "desc": "Applied post-doctoral research utilizing multispectral drone imagery, variable-rate fertilizer algorithms, and satellite evapotranspiration modeling in wheat ecosystems.",
                "funding": "Annual salary of $62,000 plus full institutional health insurance and $5,000 travel allowance",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://www.msuextension.org/research/precision-ag-postdoc.html",
                "requirements": {
                    "gpa": "Ph.D. in agricultural engineering, remote sensing, agronomy, or geospatial computing",
                    "ielts": "Satisfied by terminal doctorate",
                    "gre": "Not required",
                    "papers": "CV, three peer-reviewed publications, 3-page research proposal",
                    "references": "Three letters of recommendation from international scientists"
                }
            },
            {
                "id": 10934,
                "title": "Certificate in Wildfire Risk Mitigation & Community Forestry",
                "type": "Certificate",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Continuing professional credential in wildland-urban interface (WUI) fuel management, home ignition zone assessments, defensible space ecology, and prescribed burns.",
                "funding": "Western Wildfire Resilience Grant: $1,000 tuition subsidy",
                "tuition": "$2,200 total certificate cost",
                "fee": "$30",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.msuextension.org/forestry/wildfire-certificate.html",
                "requirements": {
                    "gpa": "High school diploma or undergraduate degree",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Resume and statement of professional interest",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 5020,
                "name": "Dr. Cody Stone",
                "role": "Executive Director of MSU Extension and Associate Professor",
                "department": "MSU Extension Administration",
                "subject": "social-sciences",
                "bio": "Dr. Cody Stone leads Montana State University Extension, researching land-grant university engagement models, rural community development resilience, and statewide 4-H youth development outcomes.",
                "source": "https://www.msuextension.org/about/leadership/stone.html"
            },
            {
                "id": 5021,
                "name": "Dr. Darrin Boss",
                "role": "Associate Director of the Montana Agricultural Experiment Station and Professor",
                "department": "Department of Animal and Range Sciences",
                "subject": "biology",
                "bio": "Dr. Darrin Boss conducts research on ruminant nutrition, dryland cattle supplementation, forage quality in Northern Great Plains rangelands, and integrated crop-livestock production systems.",
                "source": "https://agresearch.montana.edu/directory/boss.html"
            },
            {
                "id": 5022,
                "name": "Dr. Jane Mangold",
                "role": "Professor and Extension Invasive Plant Specialist",
                "department": "Department of Land Resources and Environmental Sciences",
                "subject": "environment",
                "bio": "Dr. Jane Mangold specializes in rangeland weed ecology, integrated pest management for invasive noxious weeds, ecological restoration of degraded grasslands, and native plant re-establishment.",
                "source": "https://landresources.montana.edu/directory/mangold.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Montana University System",
        "shortName": "MUS",
        "slug": "montana-university-system",
        "location": "Helena, Montana, United States",
        "website": "https://www.mus.edu",
        "sourceRow": 833,
        "stats": {
            "established": "1893",
            "students": "40,000+",
            "international": "5%",
            "faculty": "2,800+"
        },
        "hero": {
            "tagline": "Helena · Constitutional Higher Education Governance for Big Sky Country",
            "desc": "The Montana University System (MUS) is the unified public higher education system of Montana, governed by the Montana Board of Regents from the state capital in Helena. Encompassing 16 public universities, colleges of technology, and tribal college partnerships—including flagship campuses Montana State University and the University of Montana—MUS provides cutting-edge education in wilderness medicine, mining engineering, astrophysics, and environmental law."
        },
        "admissions": {
            "general": "Admissions coordinated through individual MUS campuses. College-prep high school curriculum (4 years English, 3 years math, 3 years social studies, 2 years lab science) with minimum 2.5 GPA or ACT 22 / SAT 1120 for four-year flagship entry.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ across MUS institutions.",
            "deadlines": "Rolling admissions; priority fall deadline February 1, 2027; spring priority deadline November 1, 2026."
        },
        "financial": {
            "summary": "Montana STEM Scholarships ($6,000 over 4 years), 2-Plus-2 Minority Student Tuition Waivers, MUS Honor Scholarships (100% tuition waiver for top 200 high school graduates), and Western Undergraduate Exchange (WUE) discounts.",
            "tuition": "$5,200 - $8,200/year (Community college $120/credit; 4-year university resident rate $7,600/year)"
        },
        "opportunities": [
            {
                "id": 10935,
                "title": "MUS Honor Scholarship (100% Four-Year Tuition Waiver)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Premier state merit scholarship awarded to the top 200 Montana high school graduates each year, conferring a 100% waiver of undergraduate tuition at any MUS institution.",
                "funding": "100% full tuition waiver renewable for up to four consecutive academic years",
                "tuition": "$0 (Tuition completely waived for honor recipients)",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.mus.edu/Prepare/Pay/Scholarships/MUS_Honor_Scholarship.html",
                "requirements": {
                    "gpa": "Rigorous high school college-prep curriculum with 3.8+ GPA or top 10% class rank",
                    "ielts": "Satisfied via Montana high school graduation",
                    "gre": "ACT or SAT composite score ranking",
                    "papers": "MUS Honor Scholarship application and certified high school transcripts",
                    "references": "High school principal or counselor verification"
                }
            },
            {
                "id": 10936,
                "title": "Montana STEM Scholarship Program",
                "type": "Scholarship",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science", "mathematics"],
                "desc": "State-funded merit award for Montana high school graduates pursuing degrees in science, technology, engineering, mathematics, or allied healthcare across MUS campuses.",
                "funding": "Tiered scholarship providing up to $6,000 total ($1,000 freshman year, up to $2,000 senior year)",
                "tuition": "Applied directly against MUS campus tuition",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.mus.edu/Prepare/Pay/Scholarships/STEM_Scholarship.html",
                "requirements": {
                    "gpa": "3.25+ cumulative GPA with 4 years of math and 3 years of lab science",
                    "ielts": "Satisfied via Montana secondary education",
                    "gre": "Not required",
                    "papers": "Transcripts showing STEM coursework completion",
                    "references": "One STEM teacher recommendation"
                }
            },
            {
                "id": 10937,
                "title": "Bachelor of Science in Mining Engineering (Montana Tech at MUS)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "environment", "physics"],
                "desc": "World-ranked ABET-accredited engineering degree at Montana Technological University in Butte, featuring underground mine testing facilities, mineral processing, and geomechanics.",
                "funding": "Mining Industry Leadership Fellowship: $4,000/year award plus paid mining company internship",
                "tuition": "$7,800/year (In-state baseline)",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.mtech.edu/mining-engineering/",
                "requirements": {
                    "gpa": "3.0+ high school GPA with calculus and physics readiness",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and engineering statement of purpose",
                    "references": "Two recommendations (one math or science instructor)"
                }
            },
            {
                "id": 10938,
                "title": "Juris Doctor (J.D. in Natural Resources and Environmental Law at UM Blewett)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Premier environmental law curriculum at the Alexander Blewett III School of Law in Missoula, focusing on public land law, water rights, tribal sovereignty, and federal environmental litigation.",
                "funding": "Public Lands Law Fellowship: $5,000/year scholarship",
                "tuition": "$14,200/year (Resident JD tuition)",
                "fee": "$60",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.umt.edu/law/academics/environmental-natural-resources.php",
                "requirements": {
                    "gpa": "3.4+ undergraduate GPA from accredited college",
                    "ielts": "Satisfied via LSAC CAS",
                    "gre": "LSAT score report (median 156+)",
                    "papers": "LSAC CAS report, personal statement, resume, legal interests addendum",
                    "references": "Two academic or professional recommendations via LSAC"
                }
            },
            {
                "id": 10939,
                "title": "MUS American Indian Tuition Waiver (Statewide Program)",
                "type": "Grant",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Constitutional tuition waiver available to enrolled members of federally recognized American Indian tribes who are Montana residents attending any MUS campus.",
                "funding": "100% full undergraduate or graduate tuition waiver",
                "tuition": "$0 (Tuition completely waived)",
                "fee": "$0",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.mus.edu/Prepare/Pay/Tuition/Waivers.html",
                "requirements": {
                    "gpa": "Good academic standing at constituent MUS campus",
                    "ielts": "Satisfied via residency",
                    "gre": "Not required",
                    "papers": "Official tribal enrollment verification or Certificate of Degree of Indian Blood (CDIB)",
                    "references": "None required"
                }
            },
            {
                "id": 10940,
                "title": "Associate of Science in Forestry Technology (Flathead Valley Community College at MUS)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Hands-on regional degree studying wildland fire management, forest cruising, silvicultural timber marking, and GPS logging technology near Glacier National Park.",
                "funding": "Rocky Mountain Forestry Scholarship: $1,800/year award",
                "tuition": "$5,100/year",
                "fee": "$25",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.fvcc.edu/programs/natural-resources/forestry/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "High school transcripts and residency declaration",
                    "references": "One character reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 5023,
                "name": "Dr. Clayton Christian",
                "role": "Commissioner of Higher Education",
                "department": "Office of the Commissioner of Higher Education",
                "subject": "social-sciences",
                "bio": "Dr. Clayton Christian directs the Montana University System, overseeing state higher education policy, legislative appropriations, university campus governance, and workforce alignment initiatives across Big Sky Country.",
                "source": "https://www.mus.edu/che/christian.html"
            },
            {
                "id": 5024,
                "name": "Dr. Brock Tessman",
                "role": "President of Northern Montana College and Senior Policy Scholar",
                "department": "Division of Academic Leadership",
                "subject": "social-sciences",
                "bio": "Dr. Brock Tessman researches international security studies, strategic governance in rural higher education, and statewide curriculum transfer pathways across the Rocky Mountain region.",
                "source": "https://www.mus.edu/che/academic-affairs.html"
            },
            {
                "id": 5025,
                "name": "Dr. Angela McLean",
                "role": "Director of American Indian and Minority Achievement",
                "department": "Office of Academic and Student Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Angela McLean specializes in American Indian educational attainment, tribal college dual enrollment, rural K-12 educator recruitment, and college access equity policy.",
                "source": "https://www.mus.edu/che/staff.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Nebraska State College System",
        "shortName": "NSCS",
        "slug": "nebraska-state-college-system",
        "location": "Lincoln, Nebraska, United States",
        "website": "https://www.nscs.edu",
        "sourceRow": 847,
        "stats": {
            "established": "1867",
            "students": "9,500+",
            "international": "4%",
            "faculty": "480+"
        },
        "hero": {
            "tagline": "Lincoln · Serving Nebraska Through Chadron State, Peru State & Wayne State Colleges",
            "desc": "The Nebraska State College System (NSCS) governs Nebraska's three public state colleges: Chadron State College in the Pine Ridge, Peru State College on the Missouri River, and Wayne State College in northeast Nebraska. Dedicated to accessible, student-centered education, NSCS excels in teacher preparation, rural health science pathways, business administration, and criminal justice, driving economic vitality across rural Nebraska."
        },
        "admissions": {
            "general": "High school diploma or GED equivalent. Open and accessible admissions policy reviewing high school coursework, with automatic admission for students meeting core graduation standards.",
            "language": "TOEFL iBT 61+ or IELTS 6.0+ for international students across NSCS colleges.",
            "deadlines": "Rolling admissions; priority fall deadline June 1, 2027; spring priority deadline December 1, 2026."
        },
        "financial": {
            "summary": "Nebraska Promise (100% free tuition for Nebraska families earning under $65,000), Board of Trustees Scholarships (full tuition waiver for high-achieving high school graduates), and Rural Health Opportunities Program (RHOP) full-tuition awards.",
            "tuition": "$5,760/year ($192 per credit hour for Nebraska and border state residents)"
        },
        "opportunities": [
            {
                "id": 10941,
                "title": "Board of Trustees Scholarship (100% Full Tuition Waiver)",
                "type": "Scholarship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "NSCS premier merit scholarship awarding a 100% tuition waiver for up to four years at Chadron State, Peru State, or Wayne State College.",
                "funding": "100% full tuition waiver renewable for four years (valued at over $23,000)",
                "tuition": "$0 (Tuition completely covered for recipients)",
                "fee": "$0 (No separate scholarship fee)",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://www.nscs.edu/scholarships/board-of-trustees/",
                "requirements": {
                    "gpa": "ACT composite score of 25+ or SAT 1200+ with 3.5+ high school GPA",
                    "ielts": "Satisfied via Nebraska high school diploma",
                    "gre": "Not required",
                    "papers": "Board of Trustees scholarship application, official high school transcripts",
                    "references": "Two letters of recommendation from high school teachers"
                }
            },
            {
                "id": 10942,
                "title": "Rural Health Opportunities Program (RHOP - Medicine, Pharmacy & Nursing)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Cooperative program between NSCS colleges and the University of Nebraska Medical Center (UNMC), offering full-tuition waivers and guaranteed early admission to UNMC professional schools.",
                "funding": "Full 100% undergraduate tuition waiver plus guaranteed seat in UNMC medical/pharmacy/nursing school",
                "tuition": "$0 (Full tuition waiver at NSCS colleges)",
                "fee": "$30",
                "deadline": "2026-11-15",
                "deadlineText": "November 15, 2026",
                "source": "https://www.nscs.edu/rhop/",
                "requirements": {
                    "gpa": "3.5+ cumulative high school GPA with strong biology and chemistry grades",
                    "ielts": "Satisfied via residency",
                    "gre": "ACT composite 24+ (math and science 24+)",
                    "papers": "RHOP application, rural healthcare motivation essay, official transcripts",
                    "references": "Three letters of recommendation (one healthcare practitioner)"
                }
            },
            {
                "id": 10943,
                "title": "Nebraska Promise Guarantee (100% Free Tuition for Working Families)",
                "type": "Grant",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Statewide affordability commitment ensuring that full-time undergraduate Nebraska students with family incomes of $65,000 or less pay zero tuition.",
                "funding": "100% tuition coverage up to 30 credit hours per academic year",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.nscs.edu/affordability/nebraska-promise/",
                "requirements": {
                    "gpa": "Good academic standing (2.0+ GPA), Nebraska resident, family AGI $65,000 or less",
                    "ielts": "Satisfied via residency",
                    "gre": "Not required",
                    "papers": "Completed FAFSA application by April 1 deadline",
                    "references": "None required"
                }
            },
            {
                "id": 10944,
                "title": "Rural Law Opportunities Program (RLOP - Guaranteed Admission to Nebraska Law)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Partnership with the University of Nebraska College of Law providing undergraduate full-tuition scholarships and guaranteed admission to law school for students committed to rural practice.",
                "funding": "100% full-tuition scholarship at NSCS colleges plus guaranteed admission to UNL College of Law",
                "tuition": "$0",
                "fee": "$30",
                "deadline": "2026-11-15",
                "deadlineText": "November 15, 2026",
                "source": "https://www.nscs.edu/rlop/",
                "requirements": {
                    "gpa": "3.5+ cumulative high school GPA",
                    "ielts": "Satisfied via residency",
                    "gre": "ACT score 25+ or SAT 1200+",
                    "papers": "RLOP application essay on rural legal needs in Nebraska, transcripts",
                    "references": "Three letters of recommendation (one attorney or judge preferred)"
                }
            },
            {
                "id": 10945,
                "title": "Bachelor of Science in Rangeland Ecology and Wildlife Management (Chadron State)",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Hands-on field degree studying Pine Ridge forest ecology, grassland plant communities, wildlife habitat restoration, and GPS spatial modeling.",
                "funding": "Great Plains Environmental Scholarship: $2,000/year award",
                "tuition": "$5,760/year",
                "fee": "$30",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://www.csc.edu/programs/rangeland-management/",
                "requirements": {
                    "gpa": "2.2+ high school GPA with biology and algebra",
                    "ielts": "IELTS 6.0 or TOEFL 61",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and statement of intent",
                    "references": "One teacher recommendation"
                }
            },
            {
                "id": 10946,
                "title": "Master of Science in Organizational Management (Wayne State at NSCS)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "100% online graduate degree in executive leadership, organizational conflict mediation, non-profit budgeting, and strategic human resource analytics.",
                "funding": "Midwest Leadership Grant: $1,500 annual tuition credit",
                "tuition": "$280 per graduate credit hour ($8,400 total program)",
                "fee": "$30",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://www.wsc.edu/programs/msom/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA from an accredited institution",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official bachelor's transcripts, resume, 500-word statement of goals",
                    "references": "Two professional references"
                }
            }
        ],
        "researchers": [
            {
                "id": 5026,
                "name": "Dr. Paul Turman",
                "role": "Chancellor of the Nebraska State College System",
                "department": "NSCS System Office",
                "subject": "social-sciences",
                "bio": "Dr. Paul Turman serves as Chancellor of NSCS, directing higher education strategy, rural college affordability initiatives, state legislative advocacy, and the RHOP healthcare pipeline.",
                "source": "https://www.nscs.edu/about/leadership/chancellor-turman/"
            },
            {
                "id": 5027,
                "name": "Dr. Jodi Kupper",
                "role": "Vice Chancellor for Academic Planning and Partnerships",
                "department": "Division of Academic Affairs",
                "subject": "social-sciences",
                "bio": "Dr. Jodi Kupper oversees academic program authorization, teacher education accreditation, rural workforce agreements, and transfer articulation across Nebraska's state colleges.",
                "source": "https://www.nscs.edu/about/leadership/vice-chancellor-kupper/"
            },
            {
                "id": 5028,
                "name": "Dr. Monte Kramer",
                "role": "Vice Chancellor for Finance and Administration",
                "department": "Division of Finance",
                "subject": "social-sciences",
                "bio": "Dr. Monte Kramer specializes in public higher education budgeting, rural college capital financing, tuition equity models, and institutional facility master planning.",
                "source": "https://www.nscs.edu/about/leadership/vice-chancellor-kramer/"
            }
        ]
    }
]

with open("scripts/b73_p2_chunk2_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 73 Part 2 Chunk 2.")
