# scripts/make_b74_p3.py
# Universities 15 to 21 of Batch 74 (Batch 74 Part 3)
# Opps: 11031 to 11072 (42 opps)
# Res: 5071 to 5091 (21 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Colorado Hospital",
        "shortName": "UCHealth UCH",
        "slug": "university-of-colorado-hospital",
        "location": "Aurora, Colorado, United States",
        "website": "https://www.uchealth.org",
        "sourceRow": 1076,
        "stats": {
            "established": "1921",
            "students": "3,500+",
            "international": "8%",
            "faculty": "1,800+"
        },
        "hero": {
            "tagline": "Aurora · Anschutz Medical Campus #1 Ranked Academic Medical Center in Colorado",
            "desc": "University of Colorado Hospital (UCH), the academic flagship of UCHealth situated on the Anschutz Medical Campus, is recognized nationally for groundbreaking clinical trials, organ transplantation, advanced neurosciences, and comprehensive cancer care. Partnered with the University of Colorado School of Medicine, UCH delivers world-class clinical fellowships and residency programs pioneering cellular therapies, precision oncology, and translational medicine."
        },
        "admissions": {
            "general": "Applications accepted via ERAS (Electronic Residency Application Service) and National Resident Matching Program (NRMP) or specialized fellowship matching programs through CU Anschutz.",
            "language": "ECFMG certification required for international medical graduates, including English clinical proficiency evaluation.",
            "deadlines": "Fellowship and residency applications open July 1, 2026; Match submission deadline November 15, 2026; Rolling clinical appointments through February 1, 2027."
        },
        "financial": {
            "summary": "Full institutional PGY resident and fellow stipends ($72,000 to $86,000/year) with complete health, dental, malpractice coverage, and clinical research travel allowances.",
            "tuition": "$0 (Fully salaried clinical residency and fellowship appointments)"
        },
        "opportunities": [
            {
                "id": 11031,
                "title": "Clinical Fellowship in Advanced Hematologic Malignancies & Cellular Therapeutics",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Intensive subspecialty fellowship at the Anschutz Medical Campus focusing on CAR-T cell infusion protocols, allogeneic stem cell transplantation, and novel immune checkpoint clinical trials.",
                "funding": "PGY-6 clinical salary of $82,500/year plus complete malpractice coverage, comprehensive health benefits, and $3,500 annual conference travel funding",
                "tuition": "$0 (Salaried Fellowship)",
                "fee": "$0",
                "deadline": "2026-11-15",
                "deadlineText": "November 15, 2026",
                "source": "https://medschool.cuanschutz.edu/hematology/fellowship",
                "requirements": {
                    "gpa": "Completion of ACGME-accredited internal medicine residency and hematology/oncology board eligibility",
                    "ielts": "ECFMG clinical communication certification for international graduates",
                    "gre": "USMLE Steps 1, 2 CK, and 3 passed",
                    "papers": "Curriculum vitae, personal statement detailing cellular therapy research focus, medical school transcript",
                    "references": "Three letters of recommendation including program director narrative"
                }
            },
            {
                "id": 11032,
                "title": "Residency in Clinical Medical Physics & Radiation Therapy",
                "type": "Degree",
                "subject": "physics",
                "subjects": ["physics", "engineering"],
                "desc": "CAMPEP-accredited clinical residency providing rigorous hospital-based clinical training in stereotactic radiosurgery (SRS), proton therapy dosimetry, and linear accelerator quality assurance.",
                "funding": "Salaried hospital resident appointment at $74,000/year with comprehensive health benefits, retirement matching, and AAPM board examination fee support",
                "tuition": "$0 (Fully Salaried Residency)",
                "fee": "$50",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://medschool.cuanschutz.edu/radiation-oncology/medical-physics-residency",
                "requirements": {
                    "gpa": "3.5+ graduate GPA in CAMPEP-accredited medical physics M.S. or Ph.D.",
                    "ielts": "TOEFL 90 or IELTS 7.0 for international applicants",
                    "gre": "General GRE optional; ABR Part 1 completion preferred",
                    "papers": "Graduate transcripts, curriculum vitae, 750-word statement of clinical career goals",
                    "references": "Three letters of recommendation from medical physicists or radiation oncologists"
                }
            },
            {
                "id": 11033,
                "title": "Postdoctoral Fellowship in Health Informatics & Clinical Artificial Intelligence",
                "type": "Fellowship",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Translational postdoctoral research appointment leveraging electronic health records (Epic), deep learning predictive models, and clinical decision support systems across UCHealth's statewide hospital network.",
                "funding": "NIH NRSA postdoctoral stipend scale ($61,008 to $68,000/year) plus healthcare coverage and high-performance computing cluster allocations",
                "tuition": "$0 (Postdoctoral Fellowship)",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://medschool.cuanschutz.edu/dbmi/training",
                "requirements": {
                    "gpa": "Ph.D. or M.D. in biomedical informatics, computer science, biostatistics, or data science",
                    "ielts": "Not required for US doctorates; IELTS 7.0 for foreign equivalents",
                    "gre": "Not required",
                    "papers": "CV, three representative first-author publications, 2-page research prospectus",
                    "references": "Three letters of evaluation from academic mentors"
                }
            },
            {
                "id": 11034,
                "title": "PGY2 Specialized Pharmacy Residency in Critical Care & Precision Pharmacotherapy",
                "type": "Fellowship",
                "subject": "chemistry",
                "subjects": ["chemistry", "biology"],
                "desc": "ASHP-accredited postgraduate residency in high-acuity surgical, medical, and cardiothoracic ICUs, emphasizing pharmacokinetics, therapeutic drug monitoring, and clinical resuscitation protocols.",
                "funding": "Annual resident stipend of $64,500 plus health insurance, paid professional leave, and national clinical meeting stipend",
                "tuition": "$0 (Resident Stipend)",
                "fee": "$75",
                "deadline": "2027-01-05",
                "deadlineText": "January 5, 2027",
                "source": "https://www.uchealth.org/professionals/pharmacy-residency/",
                "requirements": {
                    "gpa": "PharmD from ACGME-accredited college and completion of PGY1 residency",
                    "ielts": "Pharmacy licensure eligibility in the State of Colorado",
                    "gre": "Not required",
                    "papers": "Transcripts, letter of intent, curriculum vitae via PhORCAS",
                    "references": "Three PhORCAS recommendation forms from clinical preceptors"
                }
            },
            {
                "id": 11035,
                "title": "Fellowship in Pulmonary, Critical Care & Environmental Occupational Health",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Multidisciplinary fellowship investigating environmental particulate toxicology, high-altitude pulmonary physiology, and occupational lung disorders at UCH and National Jewish Health.",
                "funding": "PGY-5 clinical stipend of $78,000/year plus full benefits and clinical research infrastructure support",
                "tuition": "$0 (Salaried Position)",
                "fee": "$0",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://medschool.cuanschutz.edu/pulmonary-sciences/fellowship",
                "requirements": {
                    "gpa": "Completion of internal medicine residency; Board eligible",
                    "ielts": "ECFMG certification where applicable",
                    "gre": "USMLE transcript",
                    "papers": "ERAS application, personal statement, medical school transcripts",
                    "references": "Three letters of recommendation including internal medicine residency program director"
                }
            },
            {
                "id": 11036,
                "title": "Postdoctoral Fellowship in Behavioral Health & Clinical Neuropsychology",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Two-year postdoctoral residency affiliated with the Department of Psychiatry focusing on neurocognitive assessment of traumatic brain injuries, neurodegenerative dementias, and neurosurgical evaluations.",
                "funding": "Institutional annual stipend of $62,000/year with dental, health, vision benefits, and Colorado licensure support",
                "tuition": "$0 (Fully Funded)",
                "fee": "$0",
                "deadline": "2026-12-30",
                "deadlineText": "December 30, 2026",
                "source": "https://medschool.cuanschutz.edu/psychiatry/education/postdoctoral-fellowships",
                "requirements": {
                    "gpa": "Ph.D. or Psy.D. in clinical or counseling psychology from an APA-accredited program",
                    "ielts": "Not required for US degrees",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, APPCN application form, 2 redacted clinical neuropsychological reports",
                    "references": "Three letters of recommendation from clinical supervisors"
                }
            }
        ],
        "researchers": [
            {
                "id": 5071,
                "name": "Dr. Thomas W. Flaig",
                "role": "Vice Chancellor for Research and Professor of Medicine",
                "department": "Division of Medical Oncology",
                "subject": "biology",
                "bio": "Dr. Thomas W. Flaig is Vice Chancellor for Research at CU Anschutz and a medical oncologist, leading pioneering clinical research in bladder cancer therapeutics, clinical trials development, and health sciences commercialization.",
                "source": "https://www.cuanschutz.edu/research/about/vice-chancellor"
            },
            {
                "id": 5072,
                "name": "Dr. Michelle Leppert",
                "role": "Associate Professor of Radiation Oncology and Medical Physics Specialist",
                "department": "Department of Radiation Oncology",
                "subject": "physics",
                "bio": "Dr. Michelle Leppert is an expert medical physicist leading clinical trials in stereotactic body radiation therapy (SBRT), proton therapy verification, and advanced high-dose radiation dosimetry.",
                "source": "https://medschool.cuanschutz.edu/radiation-oncology/faculty"
            },
            {
                "id": 5073,
                "name": "Dr. Michael Rosenberg",
                "role": "Associate Professor of Pulmonary Sciences and Critical Care Medicine",
                "department": "Division of Pulmonary Sciences",
                "subject": "biology",
                "bio": "Dr. Michael Rosenberg investigates high-altitude respiratory adaptation, acute lung injury pathophysiology, and mechanical ventilation optimization within the University of Colorado Hospital ICU network.",
                "source": "https://medschool.cuanschutz.edu/pulmonary-sciences/faculty"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Nebraska-Lincoln Kimmel Education and Research Center",
        "shortName": "UNL Kimmel Center",
        "slug": "university-of-nebraska-lincoln-kimmel-education-and-research-center",
        "location": "Nebraska City, Nebraska, United States",
        "website": "https://kimmelorchard.org",
        "sourceRow": 1126,
        "stats": {
            "established": "1925",
            "students": "1,200+",
            "international": "6%",
            "faculty": "45+"
        },
        "hero": {
            "tagline": "Nebraska City · Premier Agricultural Research Station, Pomology & Agroforestry Hub",
            "desc": "The University of Nebraska-Lincoln Kimmel Education and Research Center, located in historic Nebraska City, is a specialized field research facility operated by UNL Extension and the Institute of Agriculture and Natural Resources (IANR). Encompassing active research orchards, experimental vineyards, and demonstration facilities, the center advances sustainable fruit production, agroforestry, conservation biology, and rural economic development across the Great Plains."
        },
        "admissions": {
            "general": "Graduate degrees and research assistantships administered through the University of Nebraska-Lincoln Graduate Studies and the Department of Agronomy & Horticulture.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ required for international graduate applicants to UNL.",
            "deadlines": "Fall semester priority deadline January 15, 2027; Spring semester deadline September 1, 2026; Rolling extension internships."
        },
        "financial": {
            "summary": "Full graduate research assistantships (GRA) providing 100% tuition remission, comprehensive student health insurance, and monthly stipends ($26,000 - $32,000/year).",
            "tuition": "$341/credit (Nebraska resident graduate; $991/credit non-resident graduate)"
        },
        "opportunities": [
            {
                "id": 11037,
                "title": "Graduate Research Assistantship in Pomology & Sustainable Orchard Agroecosystems",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Funded M.S. or Ph.D. assistantship investigating climate-resilient apple rootstocks, canopy microclimates, and integrated pest management (IPM) at the Kimmel Research Orchard.",
                "funding": "Full 100% graduate tuition remission, health insurance coverage, and $28,500 annual research stipend",
                "tuition": "$0 (Fully Funded Assistantship)",
                "fee": "$50",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://agronomy.unl.edu/graduate",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in horticulture, plant pathology, botany, or environmental science",
                    "ielts": "IELTS 6.5 or TOEFL 79 for international students",
                    "gre": "GRE optional",
                    "papers": "Transcripts, curriculum vitae, 2-page statement of agricultural research experience",
                    "references": "Three letters of academic evaluation"
                }
            },
            {
                "id": 11038,
                "title": "M.S. in Agronomy & Specialty Crop Breeding (Kimmel Field Station)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "Master of Science program integrating field-scale viticulture, berry production, and cold-hardy specialty crop breeding trials under changing precipitation patterns.",
                "funding": "Departmental teaching and research assistantships covering full tuition plus $26,000 stipend",
                "tuition": "$0 with Graduate Assistantship",
                "fee": "$50",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://agronomy.unl.edu/ms-programs",
                "requirements": {
                    "gpa": "3.2+ GPA in biological sciences or agronomy",
                    "ielts": "IELTS 6.5 minimum score",
                    "gre": "Not required",
                    "papers": "Statement of purpose, resume, transcripts",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11039,
                "title": "Ph.D. Fellowship in Soil Organic Matter Chemistry & Agroforestry Carbon Sequestration",
                "type": "Fellowship",
                "subject": "chemistry",
                "subjects": ["chemistry", "environment"],
                "desc": "Doctoral research fellowship studying spectroscopic characterization of soil humic substances, carbon sequestration in riparian windbreaks, and regenerative nitrogen mineralization.",
                "funding": "Four-year IANR doctoral fellowship offering $31,000 annual stipend, tuition waiver, and field instrumentation research grants",
                "tuition": "$0 (Fully Funded Fellowship)",
                "fee": "$50",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://ianr.unl.edu/graduate-fellowships",
                "requirements": {
                    "gpa": "3.5+ GPA in soil chemistry, chemistry, or environmental geosciences",
                    "ielts": "TOEFL 85 or IELTS 7.0",
                    "gre": "Optional",
                    "papers": "Statement of doctoral research interests, CV, writing sample",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 11040,
                "title": "Graduate Fellowship in Precision Agricultural Robotics & Autonomous Canopy Sensing",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Interdisciplinary fellowship between biological systems engineering and computer science developing unmanned ground vehicles (UGVs) and multispectral LiDAR imaging for orchard monitoring.",
                "funding": "USDA-NIFA funded research assistantship offering full tuition, equipment budget, and $30,000 annual stipend",
                "tuition": "$0 (Funded Fellowship)",
                "fee": "$50",
                "deadline": "2027-01-30",
                "deadlineText": "January 30, 2027",
                "source": "https://bse.unl.edu/graduate",
                "requirements": {
                    "gpa": "3.3+ GPA in engineering, robotics, or applied physics",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Optional",
                    "papers": "Transcripts, CV, portfolio of robotics or sensing hardware projects",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11041,
                "title": "Graduate Fellowship in Rural Agritourism, Cooperative Enterprise & Agricultural Economics",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Applied social sciences research fellowship exploring the economic vitality of rural communities, farm-to-table supply chain economics, and agritourism entrepreneurship in the Midwest.",
                "funding": "Research assistantship providing $27,000 annual stipend, tuition remission, and extension outreach travel funds",
                "tuition": "$0 (Full Remission)",
                "fee": "$50",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://agecon.unl.edu/graduate",
                "requirements": {
                    "gpa": "3.0+ GPA in agricultural economics, economics, sociology, or public policy",
                    "ielts": "IELTS 6.5",
                    "gre": "Quantitative GRE recommended",
                    "papers": "Personal statement, writing sample, resume",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11042,
                "title": "Computational Agricultural Data Analytics & Phenotyping Practicum",
                "type": "Scholarship",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Specialized computational practicum applying machine learning to multi-year weather stations, hyperspectral imagery, and tree yield forecasting at the Kimmel Center.",
                "funding": "$12,000 summer research stipend plus housing stipend and computer cluster access",
                "tuition": "$0 (Fellowship stipend provided)",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://kimmelorchard.org/research",
                "requirements": {
                    "gpa": "3.2+ GPA in computer science, statistics, or data science",
                    "ielts": "English proficiency certification",
                    "gre": "Not required",
                    "papers": "CV, GitHub profile or code repository sample, cover letter",
                    "references": "Two letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5074,
                "name": "Dr. Paul Read",
                "role": "Professor Emeritus of Horticulture and Viticulture Specialist",
                "department": "Department of Agronomy & Horticulture",
                "subject": "biology",
                "bio": "Dr. Paul Read is an internationally recognized horticulturist who pioneered cold-hardy grape and specialty fruit research at the Kimmel Education and Research Center, authoring fundamental texts on tissue culture and pomology.",
                "source": "https://agronomy.unl.edu/read"
            },
            {
                "id": 5075,
                "name": "Dr. Charles Shapiro",
                "role": "Professor Emeritus of Soil Science and Nutrient Management",
                "department": "Department of Agronomy & Horticulture",
                "subject": "environment",
                "bio": "Dr. Charles Shapiro specializes in soil fertility, nitrogen efficiency, and conservation tillage practices, conducting field investigations in agroforestry soil dynamics across Nebraska.",
                "source": "https://agronomy.unl.edu/shapiro"
            },
            {
                "id": 5076,
                "name": "Dr. Gary Zoubek",
                "role": "Extension Educator and Precision Agriculture Specialist",
                "department": "UNL Extension in Agriculture & Natural Resources",
                "subject": "engineering",
                "bio": "Dr. Gary Zoubek leads agricultural extension programming in irrigation water management, GPS precision application, and demonstration field trials for producers across south-central Nebraska.",
                "source": "https://extension.unl.edu/specialists/gary-zoubek"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Illini Center",
        "shortName": "Illini Center",
        "slug": "illini-center",
        "location": "Chicago, Illinois, United States",
        "website": "https://illinois.edu",
        "sourceRow": 745,
        "stats": {
            "established": "2000",
            "students": "2,800+",
            "international": "14%",
            "faculty": "120+"
        },
        "hero": {
            "tagline": "Chicago · University of Illinois Urbana-Champaign Downtown Innovation & Executive Campus",
            "desc": "The Illini Center, situated in the heart of downtown Chicago in the Loop, serves as the premier metropolitan facility for the University of Illinois Urbana-Champaign (UIUC). Bridging world-class engineering, business, and public policy research with Chicago's global corporate and civic ecosystems, the Illini Center hosts top-ranked executive master's degree programs, financial engineering immersions, tech incubator showcases, and alumni innovation forums."
        },
        "admissions": {
            "general": "Admissions processed through UIUC Graduate College and respective academic departments (Gies College of Business, Grainger College of Engineering, School of Information Sciences).",
            "language": "TOEFL iBT 102+ or IELTS 7.5+ for graduate programs administered via the Chicago center.",
            "deadlines": "Executive master's cohorts admit for Fall and Spring; Fall priority round February 1, 2027; Final round May 1, 2027."
        },
        "financial": {
            "summary": "Executive corporate sponsorship fellowships, Gies Dean's Impact Scholarships ($10,000 - $25,000), and Grainger Chicago Engineering Leadership Awards.",
            "tuition": "$1,150 - $1,650/credit depending on executive professional degree program"
        },
        "opportunities": [
            {
                "id": 11043,
                "title": "Master of Science in Technology Management (Chicago Executive Cohort)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "social-sciences"],
                "desc": "Premier STEM-designated master's program at the Illini Center delivering advanced curriculum in corporate technology strategy, product management, artificial intelligence implementation, and digital transformation.",
                "funding": "Merit scholarships up to $20,000 for outstanding technology innovators and industry change-makers",
                "tuition": "$42,000 total program tuition",
                "fee": "$90",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://giesbusiness.illinois.edu/ms-tech",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in STEM, business, or related analytical disciplines",
                    "ielts": "TOEFL 102 or IELTS 7.5 for international students",
                    "gre": "GMAT/GRE optional with 3+ years professional work experience",
                    "papers": "Transcripts, executive resume, two 500-word essays, video interview",
                    "references": "Two professional letters of reference"
                }
            },
            {
                "id": 11044,
                "title": "Master of Science in Financial Engineering (MSFE - Chicago Trading Immersion)",
                "type": "Degree",
                "subject": "mathematics",
                "subjects": ["mathematics", "computer-science"],
                "desc": "Elite quantitative finance program leveraging the Illini Center's location near Chicago financial exchanges to master algorithmic trading, stochastic calculus, derivatives risk modeling, and machine learning in quant finance.",
                "funding": "Chicago Quantitative Finance Fellowships of $15,000 awarded based on mathematical merit",
                "tuition": "$58,000 total program tuition",
                "fee": "$90",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://msfe.illinois.edu/",
                "requirements": {
                    "gpa": "3.5+ GPA in mathematics, physics, computer science, or engineering",
                    "ielts": "IELTS 7.5 or TOEFL 103",
                    "gre": "GRE quantitative score >= 166 strongly required",
                    "papers": "Transcripts, technical resume showing C++/Python proficiency, statement of purpose",
                    "references": "Three letters of academic or quantitative industry recommendation"
                }
            },
            {
                "id": 11045,
                "title": "Executive MBA in Innovation & Global Strategic Leadership",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "engineering"],
                "desc": "Rigorous weekend executive program at the Illini Center training senior executives in enterprise scaling, ethical AI governance, global supply chain resilience, and capital structure optimization.",
                "funding": "Corporate executive matching scholarships and Gies Diversity in Leadership Grants ($15,000 - $30,000)",
                "tuition": "$68,000 comprehensive tuition",
                "fee": "$100",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://giesbusiness.illinois.edu/executive-mba",
                "requirements": {
                    "gpa": "Bachelor's degree with 7+ years of progressive professional experience",
                    "ielts": "English professional proficiency waiver or IELTS 7.5",
                    "gre": "GMAT/GRE waived based on managerial track record",
                    "papers": "Executive resume, sponsor support letter, three leadership essays",
                    "references": "Two executive reference letters"
                }
            },
            {
                "id": 11046,
                "title": "Graduate Practicum in Smart Cities, Urban Transportation & Civic Infrastructure",
                "type": "Scholarship",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Experiential fellowship connecting Grainger civil and environmental engineers with the Chicago Department of Transportation and CTA to design sensor-integrated transit grids and decarbonized urban infrastructure.",
                "funding": "$18,000 project fellowship stipend plus tuition support from the Illinois Center for Transportation",
                "tuition": "$0 (Fully covered practicum)",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://ict.illinois.edu/",
                "requirements": {
                    "gpa": "3.3+ GPA in civil, mechanical, or electrical engineering",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "Not required",
                    "papers": "CV, design portfolio or sample engineering report, statement of civic interest",
                    "references": "Two academic recommendations"
                }
            },
            {
                "id": 11047,
                "title": "Urban Environmental Sustainability & Climate Resilience Practicum",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Interdisciplinary fellowship studying Great Lakes urban watershed management, green stormwater infrastructure, and community environmental justice throughout Greater Chicago.",
                "funding": "$15,000 research fellowship award plus conference presentation sponsorship",
                "tuition": "$0 with Fellowship Award",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://sustainability.illinois.edu/",
                "requirements": {
                    "gpa": "3.2+ GPA in environmental science, urban planning, or civil engineering",
                    "ielts": "IELTS 7.0 or equivalent",
                    "gre": "Not required",
                    "papers": "Statement of purpose, resume, writing sample on urban ecology",
                    "references": "Two academic or professional recommendations"
                }
            },
            {
                "id": 11048,
                "title": "Advanced Professional Certificate in Industrial Cybersecurity & Critical Infrastructure",
                "type": "Scholarship",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "High-impact certificate program hosted at the Illini Center covering SCADA system defense, zero-trust network architectures, cryptographic protocols, and power grid cybersecurity.",
                "funding": "$8,500 industry merit tuition scholarship for defense and utility sector engineers",
                "tuition": "$12,500 ($4,000 after scholarship)",
                "fee": "$50",
                "deadline": "2026-11-30",
                "deadlineText": "November 30, 2026",
                "source": "https://iti.illinois.edu/education",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in computer science, engineering, or IT",
                    "ielts": "English proficiency certification",
                    "gre": "Not required",
                    "papers": "Resume detailing systems/networking background, transcripts",
                    "references": "One letter of professional endorsement"
                }
            }
        ],
        "researchers": [
            {
                "id": 5077,
                "name": "Dr. Morton O'Kelly",
                "role": "Visiting Professor of Urban Analytics and Spatial Geography",
                "department": "Department of Geography & Geographic Information Science",
                "subject": "social-sciences",
                "bio": "Dr. Morton O'Kelly is an authority in spatial optimization, transport network hub modeling, and urban telecommunications infrastructure, advising civic organizations at the Illini Center.",
                "source": "https://geog.illinois.edu/directory/profile/mokelly"
            },
            {
                "id": 5078,
                "name": "Dr. Liming Guan",
                "role": "Academic Director of MSFE Program and Professor of Finance",
                "department": "Department of Finance, Gies College of Business",
                "subject": "mathematics",
                "bio": "Dr. Liming Guan directs quantitative finance programs at the Illini Center, conducting research in high-frequency algorithmic market making, derivative valuation, and volatility risk modeling.",
                "source": "https://giesbusiness.illinois.edu/profile/liming-guan"
            },
            {
                "id": 5079,
                "name": "Dr. Brian Lilly",
                "role": "Clinical Professor of Innovation and Technology Management",
                "department": "Department of Business Administration",
                "subject": "engineering",
                "bio": "Dr. Brian Lilly leads technology commercialization and entrepreneurship initiatives at the Illini Center, mentoring tech startups in additive manufacturing, IoT, and clean energy devices.",
                "source": "https://giesbusiness.illinois.edu/profile/brian-lilly"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "North Campus at North Carolina State University",
        "shortName": "NC State North Campus",
        "slug": "north-campus-at-north-carolina-state-university",
        "location": "Raleigh, North Carolina, United States",
        "website": "https://www.ncsu.edu",
        "sourceRow": 862,
        "stats": {
            "established": "1887",
            "students": "12,000+",
            "international": "11%",
            "faculty": "850+"
        },
        "hero": {
            "tagline": "Raleigh · Historic Academic Core of NC State, Wilson College of Textiles & Design",
            "desc": "North Campus represents the foundational historic academic heart of North Carolina State University (NC State) in Raleigh, home to the internationally preeminent Wilson College of Textiles, the College of Design, and the College of Humanities and Social Sciences. Blending world-leading polymer synthesis, medical textile engineering, architecture, and advanced physics research, North Campus drives technological innovation across the Research Triangle."
        },
        "admissions": {
            "general": "Applications processed through the NC State University Graduate School or Undergraduate Admissions via Common App.",
            "language": "TOEFL iBT 80+ (minimum 18 in each section) or IELTS Academic 6.5+ (minimum 6.5 in each section) for international applicants.",
            "deadlines": "Fall semester priority funding deadline January 10, 2027; Regular deadline March 1, 2027; Spring admission deadline October 15, 2026."
        },
        "financial": {
            "summary": "Graduate Research and Teaching Assistantships (GRA/GTA) covering 100% of tuition via the Graduate Student Support Plan (GSSP), plus comprehensive health insurance and $26,000 - $34,000 annual stipends.",
            "tuition": "$9,100/year (North Carolina resident undergraduate; $31,500/year non-resident)"
        },
        "opportunities": [
            {
                "id": 11049,
                "title": "Ph.D. in Fiber and Polymer Science & Biomedical Textiles Engineering",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "chemistry"],
                "desc": "The world's foremost doctoral program in fiber science at the Wilson College of Textiles, engineering biocompatible scaffolds, electrospun nanofiber wound dressings, and smart responsive fabrics.",
                "funding": "Full 100% tuition coverage via GSSP, health benefits, and $32,000 annual research assistantship stipend",
                "tuition": "$0 (Fully Funded PhD)",
                "fee": "$85",
                "deadline": "2027-01-10",
                "deadlineText": "January 10, 2027",
                "source": "https://textiles.ncsu.edu/fps/",
                "requirements": {
                    "gpa": "3.4+ undergraduate GPA in materials science, chemical engineering, biomedical engineering, or chemistry",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE optional but encouraged",
                    "papers": "Transcripts, CV, 1,000-word statement of polymer/textile research objectives",
                    "references": "Three letters of academic evaluation"
                }
            },
            {
                "id": 11050,
                "title": "Master of Architecture (M.Arch) & Sustainable Urban Design Studio Fellowship",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "engineering"],
                "desc": "NAAB-accredited professional architecture degree at the NC State College of Design on North Campus, integrating computational parametric design, mass timber fabrication, and high-performance building skins.",
                "funding": "College of Design Dean's Fellowships offering $14,000 annual merit award and in-state tuition status",
                "tuition": "$11,600/year (In-state rate with Fellowship)",
                "fee": "$85",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://design.ncsu.edu/architecture/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in architecture or any undergraduate discipline for Track 3",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Digital design portfolio (PDF), statement of architectural intent, transcripts",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11051,
                "title": "Ph.D. Fellowship in Polymer Chemistry & Sustainable Biomaterials",
                "type": "Fellowship",
                "subject": "chemistry",
                "subjects": ["chemistry", "engineering"],
                "desc": "Doctoral research fellowship synthesizing bio-derived polyurethanes, circular recyclable thermosets, and catalytic depolymerization methods for post-consumer textile waste.",
                "funding": "Four-year fellowship providing $31,500/year stipend, full tuition remission, and travel grants to national ACS symposia",
                "tuition": "$0 (Fully Funded)",
                "fee": "$85",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://chemistry.sciences.ncsu.edu/graduate/",
                "requirements": {
                    "gpa": "3.3+ GPA in chemistry, polymer science, or materials engineering",
                    "ielts": "TOEFL 85 or IELTS 6.5",
                    "gre": "Optional",
                    "papers": "Curriculum vitae, statement of research experience and goals, transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 11052,
                "title": "Graduate Research Assistantship in Quantum Materials & Condensed Matter Physics",
                "type": "Fellowship",
                "subject": "physics",
                "subjects": ["physics", "engineering"],
                "desc": "Cutting-edge experimental physics research in Riddick Hall on North Campus, probing 2D topological insulators, spintronic semiconductors, and ultrafast laser spectroscopy.",
                "funding": "Graduate research assistantship with $30,000 annual stipend, health insurance, and 100% GSSP tuition waiver",
                "tuition": "$0 (Fully Funded GRA)",
                "fee": "$85",
                "deadline": "2027-01-05",
                "deadlineText": "January 5, 2027",
                "source": "https://physics.sciences.ncsu.edu/graduate/",
                "requirements": {
                    "gpa": "3.5+ GPA in physics, applied physics, or electrical engineering",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Physics GRE optional",
                    "papers": "Statement of purpose, resume, transcripts",
                    "references": "Three letters of recommendation from physics faculty"
                }
            },
            {
                "id": 11053,
                "title": "M.S. in Forest Biomaterials & Renewable Bioproducts Engineering",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "engineering"],
                "desc": "Leading STEM graduate program exploring nanocellulose isolation, bio-based composite packaging, and carbon-negative biorefinery manufacturing processes.",
                "funding": "Full graduate research assistantship covering tuition and providing $28,000 annual living stipend",
                "tuition": "$0 (Funded GRA)",
                "fee": "$85",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://cnr.ncsu.edu/fb/graduate/",
                "requirements": {
                    "gpa": "3.0+ GPA in chemical engineering, chemistry, environmental engineering, or forestry",
                    "ielts": "IELTS 6.5",
                    "gre": "Optional",
                    "papers": "Transcripts, CV, 2-page research goals statement",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11054,
                "title": "Graduate Fellowship in Human-Computer Interaction & Digital Media Design",
                "type": "Scholarship",
                "subject": "computer-science",
                "subjects": ["computer-science", "arts-design"],
                "desc": "Interdisciplinary fellowship situated between the College of Design and Department of Computer Science focusing on spatial computing, augmented reality interaction, and generative AI design systems.",
                "funding": "$16,000 departmental fellowship award plus tuition remission and VR lab hardware access",
                "tuition": "$0 with Remission",
                "fee": "$85",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://design.ncsu.edu/mad/",
                "requirements": {
                    "gpa": "3.2+ GPA in computer science, graphic design, industrial design, or cognitive science",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Portfolio of interactive software/design work, statement of research, CV",
                    "references": "Three letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5080,
                "name": "Dr. Behnam Pourdeyhimi",
                "role": "Distinguished Professor of Textile Materials and Executive Director of the Nonwovens Institute",
                "department": "Wilson College of Textiles",
                "subject": "engineering",
                "bio": "Dr. Behnam Pourdeyhimi is an internationally renowned scientist in polymer morphology, nonwoven material filtration, and micro-fiber extrusion, holding over 100 patents in filtration and advanced materials.",
                "source": "https://textiles.ncsu.edu/directory/bpourdey/"
            },
            {
                "id": 5081,
                "name": "Dr. Robin Abrams",
                "role": "Professor of Architecture and Urbanism",
                "department": "School of Architecture, College of Design",
                "subject": "arts-design",
                "bio": "Dr. Robin Abrams is an architect and urban designer researching sustainable neighborhood morphology, public health impacts of the built environment, and adaptive reuse of industrial structures.",
                "source": "https://design.ncsu.edu/people/robin-abrams/"
            },
            {
                "id": 5082,
                "name": "Dr. Melissa Pasquinelli",
                "role": "Professor of Computational Fiber and Polymer Science",
                "department": "Wilson College of Textiles",
                "subject": "chemistry",
                "bio": "Dr. Melissa Pasquinelli uses molecular dynamics simulations and multiscale computational modeling to explore polymer-nanoparticle interfaces, sustainable textiles, and biomacromolecular interactions.",
                "source": "https://textiles.ncsu.edu/directory/mpasqui/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Arizona Cooperative Extension",
        "shortName": "UA Cooperative Extension",
        "slug": "university-of-arizona-cooperative-extension",
        "location": "Tucson, Arizona, United States",
        "website": "https://extension.arizona.edu",
        "sourceRow": 1187,
        "stats": {
            "established": "1914",
            "students": "3,400+",
            "international": "7%",
            "faculty": "210+"
        },
        "hero": {
            "tagline": "Tucson · Statewide Agricultural Innovation, Arid Lands Hydrology & Climate Resilience",
            "desc": "The University of Arizona Cooperative Extension, operated through the College of Agriculture, Life and Environmental Sciences (CALES) at the University of Arizona, brings cutting-edge scientific research directly to Arizona's rural and urban communities. Spanning all 15 Arizona counties and five tribal nations, UA Extension spearheads global advancements in desert crop genetics, Colorado River water conservation, controlled environment agriculture, and heat resilience."
        },
        "admissions": {
            "general": "Graduate degrees and funded extension fellowships administered via UA Graduate College and CALES departments (Biosystems Engineering, Hydrology & Atmospheric Sciences, Environmental Science).",
            "language": "TOEFL iBT 79+ or IELTS Academic 7.0+ for international graduate applicants.",
            "deadlines": "Fall semester priority funding deadline January 15, 2027; Spring deadline September 1, 2026; Extension field internships accepted on rolling schedule."
        },
        "financial": {
            "summary": "Full Graduate Research Assistantships (GRA) providing 100% tuition coverage, campus student health insurance, and living stipends ranging from $26,000 to $33,000/year.",
            "tuition": "$13,200/year (Arizona resident graduate; $34,800/year non-resident graduate)"
        },
        "opportunities": [
            {
                "id": 11055,
                "title": "Doctoral Fellowship in Arid Lands Resource Sciences & Water Conservation",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Interdisciplinary doctoral program investigating transboundary water management, drought adaptation policies, and satellite-based evapotranspiration monitoring across the American Southwest.",
                "funding": "Four-year graduate fellowship offering $31,000 annual stipend, 100% tuition remission, and field research travel funds",
                "tuition": "$0 (Fully Funded)",
                "fee": "$90",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://cales.arizona.edu/alrs/admissions",
                "requirements": {
                    "gpa": "3.4+ undergraduate or master's GPA in hydrology, environmental science, or resource policy",
                    "ielts": "IELTS 7.0 or TOEFL 79",
                    "gre": "GRE optional",
                    "papers": "Transcripts, curriculum vitae, 1,000-word statement of research intent in arid lands management",
                    "references": "Three letters of academic evaluation"
                }
            },
            {
                "id": 11056,
                "title": "M.S. in Agricultural & Resource Economics (Applied Policy & Farm Management)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Rigorous applied economics master's analyzing agricultural water rights pricing, crop insurance risk under climate volatility, and econometric modeling of desert agricultural production.",
                "funding": "Graduate teaching and research assistantships providing $25,000 stipend and complete tuition waiver",
                "tuition": "$0 with Assistantship",
                "fee": "$90",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://arec.arizona.edu/graduate",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA with strong background in microeconomics, calculus, and statistics",
                    "ielts": "IELTS 7.0 or TOEFL 79",
                    "gre": "Quantitative GRE recommended",
                    "papers": "Statement of purpose, resume, transcripts",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11057,
                "title": "Research Assistantship in Desert Entomology & Vector Biological Control",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "environment"],
                "desc": "Investigating native pollinator conservation, desert whitefly and aphid pest genetics, and non-chemical biological control agents in cotton and citrus farming ecosystems.",
                "funding": "USDA-funded research assistantship with $27,500 annual stipend, tuition coverage, and field station housing allowance",
                "tuition": "$0 (Funded GRA)",
                "fee": "$90",
                "deadline": "2027-01-31",
                "deadlineText": "January 31, 2027",
                "source": "https://entomology.arizona.edu/graduate",
                "requirements": {
                    "gpa": "3.2+ GPA in entomology, biology, agriculture, or ecology",
                    "ielts": "IELTS 7.0",
                    "gre": "Optional",
                    "papers": "CV, personal statement detailing insect physiology or fieldwork experience, transcripts",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11058,
                "title": "Fellowship in Controlled Environment Agriculture & Vertical Hydroponics Engineering",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering", "biology"],
                "desc": "Conducting world-renowned engineering research at the UA CEAC (Controlled Environment Agriculture Center) on automated LED spectrum tuning, hydroponic nutrient circulation, and closed-loop greenhouse cooling.",
                "funding": "Graduate fellowship providing $30,000 annual stipend, tuition remission, and prototype development grants",
                "tuition": "$0 (Fully Funded)",
                "fee": "$90",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://ceac.arizona.edu/education/graduate",
                "requirements": {
                    "gpa": "3.3+ GPA in biosystems engineering, agricultural engineering, or mechanical engineering",
                    "ielts": "TOEFL 85 or IELTS 7.0",
                    "gre": "GRE optional",
                    "papers": "Transcripts, CV, 2-page engineering research proposal",
                    "references": "Three letters of academic evaluation"
                }
            },
            {
                "id": 11059,
                "title": "Applied Soil Geochemistry & Saline Agriculture Fellowship",
                "type": "Fellowship",
                "subject": "chemistry",
                "subjects": ["chemistry", "environment"],
                "desc": "Investigating soil salinization mitigation, mineral bioavailability in alkaline soils, and heavy metal remediation around arid mining landscapes across southern Arizona.",
                "funding": "Full graduate research assistantship covering 100% tuition plus $28,000 living stipend",
                "tuition": "$0 (Funded GRA)",
                "fee": "$90",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://environmentalscience.cals.arizona.edu/graduate-programs",
                "requirements": {
                    "gpa": "3.2+ GPA in chemistry, geochemistry, or environmental soil science",
                    "ielts": "IELTS 7.0 or TOEFL 79",
                    "gre": "Optional",
                    "papers": "Statement of purpose, resume, transcripts",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11060,
                "title": "GIS & Remote Sensing Fellowship in Drought Monitoring & Climate Modeling",
                "type": "Scholarship",
                "subject": "computer-science",
                "subjects": ["computer-science", "environment"],
                "desc": "Utilizing Google Earth Engine, MODIS/Landsat remote sensing imagery, and predictive machine learning algorithms to build real-time drought warning systems for Arizona ranchers and irrigation districts.",
                "funding": "$15,000 research award plus tuition coverage and high-performance computing cluster access",
                "tuition": "$0 with Award",
                "fee": "$90",
                "deadline": "2027-02-28",
                "deadlineText": "February 28, 2027",
                "source": "https://geography.arizona.edu/graduate",
                "requirements": {
                    "gpa": "3.2+ GPA in GIS, computer science, data science, or geography",
                    "ielts": "IELTS 7.0",
                    "gre": "Not required",
                    "papers": "Resume, portfolio of GIS or remote sensing code, personal statement",
                    "references": "Two letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5083,
                "name": "Dr. Jeffrey Silvertooth",
                "role": "Professor of Environmental Science and Agronomy Specialist",
                "department": "Department of Environmental Science",
                "subject": "environment",
                "bio": "Dr. Jeffrey Silvertooth has served as Associate Dean and Director of UA Cooperative Extension, conducting fundamental research in soil fertility, arid crop ecology, and precision water management in southwestern desert soils.",
                "source": "https://environmentalscience.cals.arizona.edu/person/jeffrey-c-silvertooth"
            },
            {
                "id": 5084,
                "name": "Dr. Murat Kacira",
                "role": "Director of Controlled Environment Agriculture Center and Professor of Biosystems Engineering",
                "department": "Department of Biosystems Engineering",
                "subject": "engineering",
                "bio": "Dr. Murat Kacira is a global pioneer in controlled environment agriculture, investigating greenhouse climate automation, crop sensing, and resource-efficient food production systems for extreme environments on Earth and in space.",
                "source": "https://ceac.arizona.edu/person/murat-kacira"
            },
            {
                "id": 5085,
                "name": "Dr. Sharon Megdal",
                "role": "Director of Water Resources Research Center and Professor of Environmental Science",
                "department": "Water Resources Research Center",
                "subject": "environment",
                "bio": "Dr. Sharon Megdal is an internationally recognized expert in water policy, transboundary aquifer assessment, groundwater recharge, and Colorado River basin governance.",
                "source": "https://wrrc.arizona.edu/person/sharon-b-megdal"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Illinois Chicago Health Sciences",
        "shortName": "UIC Health Sciences",
        "slug": "university-of-illinois-chicago-health-sciences",
        "location": "Chicago, Illinois, United States",
        "website": "https://health.uic.edu",
        "sourceRow": 1188,
        "stats": {
            "established": "1859",
            "students": "5,600+",
            "international": "12%",
            "faculty": "1,450+"
        },
        "hero": {
            "tagline": "Chicago · Illinois Medical District Largest Medical Center & Health Sciences Enterprise",
            "desc": "University of Illinois Chicago (UIC) Health Sciences encompasses seven accredited health colleges—Medicine, Pharmacy, Dentistry, Nursing, Applied Health Sciences, Public Health, and Social Work—forming Illinois's principal educator of physicians, dentists, and pharmacists. Situated within the Illinois Medical District, UIC Health Sciences conducts over $400 million in sponsored research, spearheading discoveries in health equity, immunopharmacology, neurobiology, and precision medicine."
        },
        "admissions": {
            "general": "Applications processed through respective health science admissions portals (AMCAS for Medicine, PharmCAS for Pharmacy, DENTPIN/ADEA AADSAS for Dentistry, SOPHAS for Public Health, NursingCAS for Nursing).",
            "language": "TOEFL iBT 80+ (subscores: 19 reading, 17 listening, 20 speaking, 21 writing) or IELTS 6.5+ for international health sciences graduate applicants.",
            "deadlines": "AMCAS deadline November 1, 2026; PharmCAS deadline March 1, 2027; PhD biomedical programs deadline December 1, 2026."
        },
        "financial": {
            "summary": "Full Graduate Biomedical PhD fellowships providing 100% tuition and fee waivers, health insurance, and $37,000/year living stipends. College of Pharmacy and Medicine institutional merit scholarships ranging from $10,000 to full tuition.",
            "tuition": "$19,500/year (Illinois resident health professional; $42,000/year non-resident)"
        },
        "opportunities": [
            {
                "id": 11061,
                "title": "Ph.D. in Graduate Program in Biomedical Sciences (GEMS) - Precision Therapeutics Track",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "chemistry"],
                "desc": "Prestigious umbrella doctoral program spanning cancer biology, neuroscience, cardiovascular disease, and microbiology within UIC's College of Medicine research laboratories.",
                "funding": "Guaranteed full 100% tuition waiver, institutional health and dental insurance, and $37,000 annual living stipend",
                "tuition": "$0 (Fully Funded PhD)",
                "fee": "$70",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://medicine.uic.edu/gems/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in biology, biochemistry, chemistry, or related life science",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE not required or considered",
                    "papers": "Transcripts, curriculum vitae, 2-page personal statement describing research background",
                    "references": "Three letters of academic evaluation from research mentors"
                }
            },
            {
                "id": 11062,
                "title": "Doctor of Pharmacy / Ph.D. in Medicinal Chemistry & Natural Products Pharmacognosy",
                "type": "Degree",
                "subject": "chemistry",
                "subjects": ["chemistry", "biology"],
                "desc": "Renowned joint degree at the UIC College of Pharmacy investigating marine and botanical natural product drug discovery, molecular targets in antibiotic resistance, and chemical synthesis.",
                "funding": "Full graduate research assistantship covering PhD tuition, stipend of $35,000/year, and clinical pharmacy scholarship support",
                "tuition": "$0 during PhD research years",
                "fee": "$70",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://pharmacy.uic.edu/academics/dual-degree-programs/pharmd-phd/",
                "requirements": {
                    "gpa": "3.3+ GPA with complete pharmacy prerequisite coursework in organic chemistry and biochemistry",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "PCAT/GRE optional",
                    "papers": "PharmCAS application, statement of research purpose, CV",
                    "references": "Three letters of recommendation"
                }
            },
            {
                "id": 11063,
                "title": "Master of Science in Health Informatics & Machine Learning in Clinical Care",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "social-sciences"],
                "desc": "CAHIIM-accredited program preparing digital healthcare innovators to develop neural network diagnostic tools, EHR data mining models, and secure mobile health systems.",
                "funding": "Health Informatics Departmental Merit Scholarships of $12,000 awarded to competitive incoming students",
                "tuition": "$24,000 total program tuition",
                "fee": "$70",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://ahs.uic.edu/biomedical-health-information-sciences/admissions-and-programs/ms-in-health-informatics/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in computer science, health professions, or mathematics",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE waived for qualified applicants",
                    "papers": "Transcripts, resume, personal statement describing clinical AI career goals",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 11064,
                "title": "Ph.D. Fellowship in Public Health Epidemiology & Urban Health Disparities",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Doctoral research fellowship at the UIC School of Public Health analyzing racial and socioeconomic disparities in chronic disease morbidity, environmental toxicology exposures, and health policy interventions.",
                "funding": "Four-year fellowship providing $33,000 annual stipend, complete tuition remission, and community research grants",
                "tuition": "$0 (Fully Funded)",
                "fee": "$70",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://publichealth.uic.edu/academics/epidemiology-biostatistics/phd-epidemiology/",
                "requirements": {
                    "gpa": "3.5+ master's GPA in MPH, biostatistics, epidemiology, or related field",
                    "ielts": "IELTS 7.0 or TOEFL 80",
                    "gre": "Optional",
                    "papers": "Statement of public health research interests, CV, academic writing sample",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 11065,
                "title": "Postdoctoral Fellowship in Medical Imaging Physics & High-Field MRI Neurotechnology",
                "type": "Fellowship",
                "subject": "physics",
                "subjects": ["physics", "engineering"],
                "desc": "Cutting-edge postdoctoral research at the Center for Magnetic Resonance Research (CMRR) utilizing ultra-high-field 9.4T human MRI systems for functional neuroimaging and stroke biomarker discovery.",
                "funding": "NIH-scale postdoctoral fellowship ($60,000 - $66,000/year) plus healthcare coverage and scanner operating credits",
                "tuition": "$0 (Postdoctoral Position)",
                "fee": "$0",
                "deadline": "2027-01-30",
                "deadlineText": "January 30, 2027",
                "source": "https://radiology.uic.edu/research/magnetic-resonance-research/",
                "requirements": {
                    "gpa": "Ph.D. in medical physics, biomedical engineering, physics, or neuroscience",
                    "ielts": "English proficiency certification",
                    "gre": "Not required",
                    "papers": "CV, three representative journal publications, cover letter",
                    "references": "Three letters of recommendation from research directors"
                }
            },
            {
                "id": 11066,
                "title": "Graduate Research Fellowship in Occupational & Environmental Health Sciences",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "chemistry"],
                "desc": "NIOSH-supported training fellowship investigating industrial particulate inhalation, heavy metal toxicology in urban industrial corridors, and workplace chemical safety regulations.",
                "funding": "NIOSH traineeship covering 100% tuition, monthly stipend of $2,300, and professional travel funds",
                "tuition": "$0 (Funded Traineeship)",
                "fee": "$70",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://publichealth.uic.edu/academics/environmental-occupational-health-sciences/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in chemistry, environmental science, engineering, or biology",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Optional",
                    "papers": "Personal statement, resume, transcripts",
                    "references": "Three letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5086,
                "name": "Dr. Robert Barish",
                "role": "Vice Chancellor for Health Affairs and Professor of Emergency Medicine",
                "department": "Office of the Vice Chancellor for Health Affairs",
                "subject": "biology",
                "bio": "Dr. Robert Barish oversees UIC's seven health sciences colleges and the University of Illinois Hospital & Health Sciences System, directing clinical healthcare delivery, academic affiliations, and medical innovation statewide.",
                "source": "https://health.uic.edu/leadership/robert-barish/"
            },
            {
                "id": 5087,
                "name": "Dr. Terry Vanden Hoek",
                "role": "Head and Professor of Emergency Medicine, Chief Medical Officer",
                "department": "Department of Emergency Medicine",
                "subject": "biology",
                "bio": "Dr. Terry Vanden Hoek is an internationally acclaimed physician-scientist investigating cardiac arrest resuscitation, mitochondrial cell death mechanisms during ischemia-reperfusion, and emergency hypothermia therapies.",
                "source": "https://chicago.medicine.uic.edu/departments/academic-departments/emergency-medicine/faculty/terry-vanden-hoek/"
            },
            {
                "id": 5088,
                "name": "Dr. Wayne Giles",
                "role": "Dean of the School of Public Health and Professor of Epidemiology",
                "department": "School of Public Health",
                "subject": "social-sciences",
                "bio": "Dr. Wayne Giles leads the UIC School of Public Health, with an extensive research career in cardiovascular disease prevention, chronic illness epidemiology, and community health interventions for underserved urban populations.",
                "source": "https://publichealth.uic.edu/directory/wayne-giles/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Nebraska High School and Extended Studies",
        "shortName": "UNHS & Extended Studies",
        "slug": "university-of-nebraska-high-school-and-extended-studies",
        "location": "Lincoln, Nebraska, United States",
        "website": "https://highschool.nebraska.edu",
        "sourceRow": 1122,
        "stats": {
            "established": "1929",
            "students": "4,500+",
            "international": "18%",
            "faculty": "85+"
        },
        "hero": {
            "tagline": "Lincoln · Global Online College Preparatory Academy & Advanced Academic Bridge",
            "desc": "The University of Nebraska High School (UNHS) and Extended Studies, accredited by Cognia and the Nebraska Department of Education, is a world-renowned college-preparatory distance education enterprise operated by the University of Nebraska. Serving learners across all 50 states and over 100 foreign countries for nearly a century, UNHS provides rigorous Advanced Placement (AP), dual-credit collegiate coursework, and STEM foundational bridges designed to prepare gifted students for elite university matriculation."
        },
        "admissions": {
            "general": "Open enrollment model accepting applications year-round for both full diploma-seeking candidates and individual advanced college preparatory course seekers.",
            "language": "English language proficiency assessment or previous English-medium school attendance required for international students.",
            "deadlines": "Rolling admissions year-round; Course enrollments processed continuously; Fall term priority October 15, 2026; Spring term priority January 15, 2027."
        },
        "financial": {
            "summary": "UNHS Academic Excellence Tuition Grants and Nebraska Extended Studies Scholastic Bursaries providing partial to full tuition waivers for high-achieving low-income students worldwide.",
            "tuition": "$250 - $310/course (Standard and Advanced Placement tuition rates)"
        },
        "opportunities": [
            {
                "id": 11067,
                "title": "Dual Enrollment Advanced Placement Computer Science & AI Foundations Track",
                "type": "Scholarship",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Rigorous college-credit dual enrollment curriculum delivering Java object-oriented programming, algorithmic complexity analysis, and neural network foundations with UNL academic credit.",
                "funding": "UNHS STEM Scholars Grant covering 100% of tuition and proctoring fees for top secondary scholars",
                "tuition": "$0 with STEM Grant ($310/course standard)",
                "fee": "$0",
                "deadline": "2026-11-01",
                "deadlineText": "November 1, 2026",
                "source": "https://highschool.nebraska.edu/courses/ap-courses",
                "requirements": {
                    "gpa": "3.5+ high school GPA with prerequisite completion of Algebra II",
                    "ielts": "English fluency verification",
                    "gre": "Not applicable",
                    "papers": "Official secondary transcripts, 400-word statement of academic interest",
                    "references": "One letter of recommendation from high school mathematics or science instructor"
                }
            },
            {
                "id": 11068,
                "title": "Advanced College Preparatory Honors Calculus & Linear Algebra Bridge",
                "type": "Scholarship",
                "subject": "mathematics",
                "subjects": ["mathematics", "physics"],
                "desc": "University-level accelerated mathematics coursework covering multivariable calculus, matrix algebra, and mathematical proofs for aspiring engineering and mathematics university applicants.",
                "funding": "Nebraska Mathematics Olympiad Tuition Scholarships providing full course fees",
                "tuition": "$0 with Scholarship ($310 standard)",
                "fee": "$0",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://highschool.nebraska.edu/courses/mathematics",
                "requirements": {
                    "gpa": "Grade of A in Precalculus or AP Calculus AB",
                    "ielts": "English proficiency",
                    "gre": "Not applicable",
                    "papers": "Academic transcript, mathematics teacher endorsement",
                    "references": "One academic reference"
                }
            },
            {
                "id": 11069,
                "title": "Advanced Placement Honors Physics & Engineering Mechanics Immersion",
                "type": "Scholarship",
                "subject": "physics",
                "subjects": ["physics", "engineering"],
                "desc": "Comprehensive AP Physics C calculus-based mechanics program utilizing interactive remote laboratory simulations and collegiate physics kinematics experiments.",
                "funding": "Extended Studies Science Foundation Grants covering all lab materials and exam fees",
                "tuition": "$0 with Grant ($310 standard)",
                "fee": "$0",
                "deadline": "2026-11-15",
                "deadlineText": "November 15, 2026",
                "source": "https://highschool.nebraska.edu/courses/science",
                "requirements": {
                    "gpa": "Concurrent enrollment in or completion of Calculus",
                    "ielts": "English proficiency",
                    "gre": "Not applicable",
                    "papers": "High school transcript, science teacher recommendation",
                    "references": "One letter of recommendation"
                }
            },
            {
                "id": 11070,
                "title": "Dual-Credit Environmental Science & Great Plains Prairie Ecosystem Conservation",
                "type": "Scholarship",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Interdisciplinary environmental science coursework exploring grassland biodiversity, hydrology of the Ogallala Aquifer, and climate adaptation in midwestern agriculture.",
                "funding": "Conservation Nebraska Youth Scholarships providing full tuition and fieldwork kits",
                "tuition": "$0 with Youth Scholarship ($280 standard)",
                "fee": "$0",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://highschool.nebraska.edu/courses/science",
                "requirements": {
                    "gpa": "3.0+ high school GPA with completion of Biology",
                    "ielts": "English proficiency",
                    "gre": "Not applicable",
                    "papers": "Transcript, 300-word personal interest essay",
                    "references": "One teacher evaluation"
                }
            },
            {
                "id": 11071,
                "title": "Honors AP Chemistry & Molecular Structural Analysis Coursework",
                "type": "Scholarship",
                "subject": "chemistry",
                "subjects": ["chemistry", "physics"],
                "desc": "College Board-approved Advanced Placement chemistry course delivering in-depth virtual spectrophotometry, thermodynamics, chemical kinetics, and equilibrium calculations.",
                "funding": "American Chemical Society High School Scholar subsidies covering course tuition",
                "tuition": "$0 with Subsidy ($310 standard)",
                "fee": "$0",
                "deadline": "2026-12-15",
                "deadlineText": "December 15, 2026",
                "source": "https://highschool.nebraska.edu/courses/science",
                "requirements": {
                    "gpa": "3.3+ GPA in high school chemistry and Algebra II",
                    "ielts": "English proficiency",
                    "gre": "Not applicable",
                    "papers": "Transcripts, chemistry teacher recommendation",
                    "references": "One letter of recommendation"
                }
            },
            {
                "id": 11072,
                "title": "Global Digital Humanities & Comparative Civics Scholastic Fellowship",
                "type": "Scholarship",
                "subject": "arts-design",
                "subjects": ["arts-design", "social-sciences"],
                "desc": "Advanced interdisciplinary honors seminar analyzing international constitutional law, global media ethics, and digital archive preservation for pre-law and humanities scholars.",
                "funding": "UNHS Global Citizen Fellowship covering full program tuition and AP exam fees for international students",
                "tuition": "$0 (Fully Subsidized Fellowship)",
                "fee": "$0",
                "deadline": "2027-01-30",
                "deadlineText": "January 30, 2027",
                "source": "https://highschool.nebraska.edu/courses/social-studies",
                "requirements": {
                    "gpa": "3.5+ high school GPA with demonstrated writing excellence",
                    "ielts": "English proficiency certification for international scholars",
                    "gre": "Not applicable",
                    "papers": "Transcripts, 500-word essay on global civic engagement",
                    "references": "One teacher or counselor recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5089,
                "name": "Dr. Barbara Schuba",
                "role": "Superintendent of University of Nebraska High School and Distance Learning Director",
                "department": "University of Nebraska High School Administration",
                "subject": "social-sciences",
                "bio": "Dr. Barbara Schuba directs academic curriculum and instructional technology at UNHS, conducting research in asynchronous STEM pedagogy, digital cognitive engagement, and international secondary distance education accreditation.",
                "source": "https://highschool.nebraska.edu/about-us/staff"
            },
            {
                "id": 5090,
                "name": "Dr. Matthew Blomstedt",
                "role": "Adjunct Professor of Educational Leadership and Former Nebraska Commissioner of Education",
                "department": "Department of Educational Administration",
                "subject": "social-sciences",
                "bio": "Dr. Matthew Blomstedt has served as Nebraska Commissioner of Education, advising UNHS on secondary education policy, rural educational equity, and digital college-preparatory pathways.",
                "source": "https://cehs.unl.edu/edad/faculty/matthew-blomstedt/"
            },
            {
                "id": 5091,
                "name": "Dr. James O'Hanlon",
                "role": "Professor Emeritus and Former Dean of Teachers College",
                "department": "College of Education and Human Sciences",
                "subject": "social-sciences",
                "bio": "Dr. James O'Hanlon is a prominent educational administrator who served as Dean of Teachers College at UNL and interim director for extended studies, championing innovative distance learning and teacher preparation models.",
                "source": "https://cehs.unl.edu/edad/faculty/james-ohanlon/"
            }
        ]
    }
]

with open("scripts/b74_p3_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 74 Part 3.")
