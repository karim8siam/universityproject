# scripts/make_b73_p2_chunk1.py
# Universities 16 to 23 of Batch 73
# Opps: 10857 to 10904 (48 opps)
# Res: 4984 to 5007 (24 res)

import json

unis = [
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Indiana University School of Nursing",
        "shortName": "IU Nursing",
        "slug": "indiana-university-school-of-nursing",
        "location": "Indianapolis, Indiana, United States",
        "website": "https://nursing.iu.edu",
        "sourceRow": 759,
        "stats": {
            "established": "1914",
            "students": "1,800+",
            "international": "6%",
            "faculty": "160+"
        },
        "hero": {
            "tagline": "Indianapolis · NLN Center of Excellence in Nursing Education & Clinical Science",
            "desc": "Indiana University School of Nursing is one of the premier nursing institutions in the nation, designated an NLN Center of Excellence across multiple dimensions. Anchored at the academic health center in Indianapolis, IU School of Nursing offers top-ranked BSN, MSN, DNP, and PhD programs, driving breakthrough clinical research in cancer survivorship, chronic illness self-management, and health equity informatics."
        },
        "admissions": {
            "general": "High school diploma with competitive GPA and prerequisite sciences for undergraduate BSN; accredited BSN with 3.0+ GPA and active RN license for MSN and DNP programs; accredited master's in nursing for PhD programs.",
            "language": "TOEFL iBT 79+ or IELTS 6.5+ for international nursing applicants.",
            "deadlines": "BSN Fall admission priority January 15, 2027; MSN/DNP priority February 1, 2027; PhD in Nursing priority December 1, 2026."
        },
        "financial": {
            "summary": "Nurse Faculty Loan Program (up to 85% loan cancellation for future nursing faculty), IU School of Nursing Endowed Scholarships, and NIH T32 predoctoral training fellowships.",
            "tuition": "$10,611/year (Resident BSN; $37,600/year non-resident; Graduate $485/credit resident)"
        },
        "opportunities": [
            {
                "id": 10857,
                "title": "Doctor of Philosophy (Ph.D.) in Nursing Science",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Intensive research-focused doctoral program investigating symptom science, chronic disease interventions, behavioral oncology, and health informatics.",
                "funding": "Full tuition waiver, health insurance, and $30,000 annual research fellowship stipend",
                "tuition": "$0 (Fully funded PhD)",
                "fee": "$70",
                "deadline": "2026-12-01",
                "deadlineText": "December 1, 2026",
                "source": "https://nursing.iu.edu/academics/phd/index.html",
                "requirements": {
                    "gpa": "3.5+ master's degree GPA in nursing or related health field",
                    "ielts": "IELTS 7.0 or TOEFL 90",
                    "gre": "GRE optional",
                    "papers": "Statement of research interests (3-5 pages), scholarly writing sample, curriculum vitae",
                    "references": "Three letters of recommendation from doctorally prepared nurses/scholars"
                }
            },
            {
                "id": 10858,
                "title": "Doctor of Nursing Practice (DNP - Executive Leadership Track)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Terminal clinical practice degree preparing healthcare leaders in health systems financing, population health outcomes, clinical translation, and health policy.",
                "funding": "Nursing Executive Fellowship: $3,500 annual tuition credit",
                "tuition": "$485 per credit hour (In-state graduate tuition)",
                "fee": "$70",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://nursing.iu.edu/academics/dnp/index.html",
                "requirements": {
                    "gpa": "3.2+ master's degree GPA in nursing with unencumbered RN license",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Transcripts, resume with leadership experience, executive goals statement",
                    "references": "Three professional references (one supervisor, two doctorally prepared nurses)"
                }
            },
            {
                "id": 10859,
                "title": "Master of Science in Nursing (MSN - Family Nurse Practitioner Track)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "CCNE-accredited advanced practice clinical program preparing primary care FNPs through 600+ hours of direct outpatient and rural clinical preceptorships.",
                "funding": "Primary Care Nursing Grant: $2,500/year award",
                "tuition": "$485 per credit hour",
                "fee": "$70",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://nursing.iu.edu/academics/msn/index.html",
                "requirements": {
                    "gpa": "3.0+ BSN GPA from accredited program, active unencumbered RN license",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official transcripts, 1+ year acute or primary clinical RN experience resume",
                    "references": "Three clinical and academic references"
                }
            },
            {
                "id": 10860,
                "title": "Bachelor of Science in Nursing (Traditional BSN Track)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology"],
                "desc": "Four-year comprehensive nursing degree featuring clinical rotations at IU Health University Hospital, Riley Hospital for Children, and Eskenazi Health.",
                "funding": "IU Nursing Dean's Honor Scholarship: $4,000/year renewable award",
                "tuition": "$10,611/year",
                "fee": "$65",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://nursing.iu.edu/academics/bsn/index.html",
                "requirements": {
                    "gpa": "3.5+ high school GPA with biology, chemistry, and algebra",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and personal nursing values essay",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10861,
                "title": "Nurse Faculty Loan Program (NFLP) Endowed Fellowship",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "HRSA-funded federal fellowship offering up to 85% student loan cancellation for master's and doctoral students who serve as nurse educators upon graduation.",
                "funding": "Up to $35,500/year in educational loan forgiveness and tuition support",
                "tuition": "Covers tuition and fees directly",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://nursing.iu.edu/admissions/financial-aid/scholarships.html",
                "requirements": {
                    "gpa": "Enrolled in MSN, DNP, or PhD nursing education track with 3.2+ GPA",
                    "ielts": "Satisfied via program enrollment",
                    "gre": "Not required",
                    "papers": "NFLP application and nurse faculty commitment agreement",
                    "references": "Faculty academic recommendation"
                }
            },
            {
                "id": 10862,
                "title": "Postdoctoral Fellowship in Chronic Disease Management and Symptom Science",
                "type": "Fellowship",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "NIH T32-supported postdoctoral position conducting clinical translational research on symptom clusters, physical activity interventions, and palliative nursing care.",
                "funding": "NIH NRSA Postdoctoral Stipend of $61,008/year plus health insurance and $5,000 research budget",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://nursing.iu.edu/research/training/index.html",
                "requirements": {
                    "gpa": "Ph.D. in nursing, public health, or behavioral health science",
                    "ielts": "Satisfied by terminal doctorate",
                    "gre": "Not required",
                    "papers": "Curriculum vitae, 3-page research proposal, writing sample",
                    "references": "Three letters of recommendation from doctoral advisers"
                }
            }
        ],
        "researchers": [
            {
                "id": 4984,
                "name": "Dr. Robin Newhouse",
                "role": "Dean of the School of Nursing and Distinguished Professor",
                "department": "Office of the Dean",
                "subject": "biology",
                "bio": "Dr. Robin Newhouse is an elected member of the National Academy of Medicine, researching health systems quality improvement, evidence-based nursing interventions, and substance use disorder treatment models.",
                "source": "https://nursing.iu.edu/faculty-staff/directory/newhouse-robin.html"
            },
            {
                "id": 4985,
                "name": "Dr. Susan Rawl",
                "role": "Professor and Director of the PhD in Nursing Science Program",
                "department": "Department of Community and Health Systems",
                "subject": "biology",
                "bio": "Dr. Susan Rawl focuses on behavioral oncology, cancer communication, colorectal and cervical cancer screening interventions in underserved populations, and computerized health literacy tools.",
                "source": "https://nursing.iu.edu/faculty-staff/directory/rawl-susan.html"
            },
            {
                "id": 4986,
                "name": "Dr. Janet Carpenter",
                "role": "Distinguished Professor and Audrey Geisel Endowed Chair in Innovation",
                "department": "Department of Science of Nursing Care",
                "subject": "biology",
                "bio": "Dr. Janet Carpenter investigates menopausal hot flashes, cancer survivorship symptom management, digital symptom monitoring biomarkers, and cognitive behavioral interventions.",
                "source": "https://nursing.iu.edu/faculty-staff/directory/carpenter-janet.html"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of North Carolina School of Law",
        "shortName": "UNC Law",
        "slug": "university-of-north-carolina-school-of-law",
        "location": "Chapel Hill, North Carolina, United States",
        "website": "https://law.unc.edu",
        "sourceRow": 1135,
        "stats": {
            "established": "1845",
            "students": "720+",
            "international": "7%",
            "faculty": "90+"
        },
        "hero": {
            "tagline": "Chapel Hill · Top-Tier Public Jurisprudence, Constitutional Law & Civil Rights",
            "desc": "The University of North Carolina School of Law at Chapel Hill is the state's oldest professional school and one of the premier public law schools in the nation. Renowned for excellence in constitutional jurisprudence, legal writing, banking law, and environmental advocacy, Carolina Law trains ethical attorneys and federal jurists through eleven rigorous clinical law programs and influential legal journals."
        },
        "admissions": {
            "general": "Bachelor's degree from an accredited institution. Official LSAT or GRE test score, LSAC Credential Assembly Service (CAS) registration, personal statement, and resume.",
            "language": "TOEFL iBT 100+ or IELTS 7.5+ for international candidates applying for the LL.M. degree.",
            "deadlines": "JD priority application deadline March 1, 2027; Early decision deadline November 1, 2026; LL.M. deadline April 15, 2027."
        },
        "financial": {
            "summary": "Carolina Public Interest Law Grants, Chancellors Law Scholarships, UNC Law Foundation Merit Awards, and loan repayment assistance programs (LRAP).",
            "tuition": "$24,960/year (North Carolina resident JD tuition; $43,760/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10863,
                "title": "Juris Doctor (J.D. Program)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Three-year ABA-accredited professional law degree covering civil procedure, constitutional law, contracts, property, and specialized clinics in civil legal assistance.",
                "funding": "Carolina Law Merit Scholarship: Up to full-tuition award for high-achieving applicants",
                "tuition": "$24,960/year (Resident)",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://law.unc.edu/admissions/jd-admissions/",
                "requirements": {
                    "gpa": "3.7+ undergraduate GPA (median 3.76)",
                    "ielts": "Satisfied via LSAC CAS",
                    "gre": "LSAT score report (median 166) or competitive GRE",
                    "papers": "LSAC CAS report, personal statement, resume, addenda",
                    "references": "Two letters of recommendation via LSAC"
                }
            },
            {
                "id": 10864,
                "title": "Master of Laws (LL.M. in United States Law)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "One-year advanced degree for international law graduates seeking mastery in American common law doctrine, bar exam preparation, and cross-border commercial litigation.",
                "funding": "International Dean's Scholarship: $10,000 tuition grant",
                "tuition": "$44,500 total program tuition",
                "fee": "$75",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://law.unc.edu/academics/degree-programs/llm/",
                "requirements": {
                    "gpa": "First law degree (LL.B. or equivalent) from an accredited foreign university",
                    "ielts": "IELTS 7.5 or TOEFL 100",
                    "gre": "Not required for LL.M.",
                    "papers": "Official foreign legal transcripts with evaluation, resume, statement of purpose",
                    "references": "Two recommendations from legal professors or supervisors"
                }
            },
            {
                "id": 10865,
                "title": "Carolina Public Interest Law Fellowship (Summer Grants)",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Endowed summer grant supporting first- and second-year law students working in unpaid government agencies, public defender offices, and non-profit legal aid organizations.",
                "funding": "Stipend of $5,000 for 10 weeks of full-time summer public interest legal service",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://law.unc.edu/public-interest/funding/",
                "requirements": {
                    "gpa": "Enrolled 1L or 2L in good standing at UNC Law",
                    "ielts": "Satisfied via JD enrollment",
                    "gre": "Not required",
                    "papers": "Public interest fellowship application, agency confirmation letter, budget",
                    "references": "Faculty endorsement letter"
                }
            },
            {
                "id": 10866,
                "title": "Juris Doctor / Master of Public Policy (J.D. / M.P.P. Dual Degree)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "mathematics"],
                "desc": "Four-year joint program with UNC's Department of Public Policy integrating statutory interpretation, quantitative policy evaluation, and administrative law.",
                "funding": "Dual Degree Public Leadership Award: $4,000/year stipend",
                "tuition": "$24,960/year",
                "fee": "$75",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://law.unc.edu/academics/degree-programs/dual-degrees/jd-mpp/",
                "requirements": {
                    "gpa": "3.5+ undergraduate GPA, separate admission to both Law School and Graduate School",
                    "ielts": "IELTS 7.5 or TOEFL 100",
                    "gre": "LSAT or GRE accepted",
                    "papers": "Combined personal statement detailing legal policy goals, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10867,
                "title": "Carolina Law Environmental Law and Policy Fellowship",
                "type": "Fellowship",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Specialized clinic fellowship in coastal wetland preservation, Clean Water Act enforcement, renewable energy utility regulation, and environmental justice litigation.",
                "funding": "$3,500 semester research grant plus clinical travel stipend",
                "tuition": "Covered under regular JD enrollment",
                "fee": "$0",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://law.unc.edu/academics/experiential-education/clinics/environmental-law/",
                "requirements": {
                    "gpa": "Enrolled 2L or 3L student at Carolina Law with Environmental Law course completed",
                    "ielts": "Satisfied via JD enrollment",
                    "gre": "Not required",
                    "papers": "Environmental law writing sample, resume, statement of interest",
                    "references": "One law faculty recommendation"
                }
            },
            {
                "id": 10868,
                "title": "Center for Banking and Finance Annual Research Award",
                "type": "Grant",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Scholarly research grant analyzing financial market systemic risk, banking supervisory regulation, fintech cryptocurrency compliance, and Dodd-Frank statutory evolution.",
                "funding": "$2,500 research grant and publication in the North Carolina Banking Institute Journal",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://law.unc.edu/academics/centers-and-programs/center-for-banking-and-finance/",
                "requirements": {
                    "gpa": "3.0+ law school GPA with banking or securities law coursework",
                    "ielts": "Satisfied via JD enrollment",
                    "gre": "Not required",
                    "papers": "Original paper draft or comprehensive research outline on financial regulation",
                    "references": "Faculty supervisor letter"
                }
            }
        ],
        "researchers": [
            {
                "id": 4987,
                "name": "Dr. Martin H. Brinkley",
                "role": "Dean and William Rand Kenan Jr. Distinguished Professor of Law",
                "department": "School of Law",
                "subject": "social-sciences",
                "bio": "Dr. Martin H. Brinkley directs UNC School of Law, specializing in corporate governance, merger and acquisition law, antitrust regulation, and North Carolina constitutional jurisprudence.",
                "source": "https://law.unc.edu/people/martin-h-brinkley/"
            },
            {
                "id": 4988,
                "name": "Dr. Melissa B. Jacoby",
                "role": "Graham Kenan Professor of Law",
                "department": "School of Law",
                "subject": "social-sciences",
                "bio": "Dr. Melissa B. Jacoby is a nationally recognized scholar of commercial law and bankruptcy, studying consumer debt distress, mass tort insolvencies, and court restructuring procedures.",
                "source": "https://law.unc.edu/people/melissa-b-jacoby/"
            },
            {
                "id": 4989,
                "name": "Dr. William P. Marshall",
                "role": "William Rand Kenan Jr. Distinguished Professor of Law",
                "department": "School of Law",
                "subject": "social-sciences",
                "bio": "Dr. William P. Marshall is an expert on constitutional law, First Amendment religion and speech clauses, presidential powers, and federal court judicial federalism.",
                "source": "https://law.unc.edu/people/william-p-marshall/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Northern Colorado Denver Center at Lowry",
        "shortName": "UNC Denver Center at Lowry",
        "slug": "university-of-northern-colorado-denver-center-at-lowry",
        "location": "Denver, Colorado, United States",
        "website": "https://extended.unco.edu/about/denver-center-lowry/",
        "sourceRow": 1141,
        "stats": {
            "established": "1999",
            "students": "1,100+",
            "international": "4%",
            "faculty": "70+"
        },
        "hero": {
            "tagline": "Denver · Metropolitan Graduate Center for Education, Speech Pathology & Leadership",
            "desc": "The University of Northern Colorado Denver Center at Lowry is UNC's metropolitan extended campus serving the Denver Aurora corridor. Providing flexible evening, weekend, and hybrid master's and doctoral programs, the Lowry Center specializes in urban teacher leadership, speech-language pathology, clinical mental health counseling, and higher education administrative leadership."
        },
        "admissions": {
            "general": "Bachelor's degree from an accredited institution with a minimum cumulative undergraduate GPA of 3.0 for regular master's admission. Specialized prerequisites for clinical programs.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ for international candidates whose medium of instruction was not English.",
            "deadlines": "Fall priority deadline March 1, 2027; Spring priority deadline October 15, 2026; Summer priority March 15, 2027."
        },
        "financial": {
            "summary": "Extended Campus Graduate Scholarships, Colorado Educator Tuition Discounts, Graduate Teaching Assistantships, and Federal TEACH Grants.",
            "tuition": "$585 - $715 per graduate credit hour ($10,500 - $14,200/year)"
        },
        "opportunities": [
            {
                "id": 10869,
                "title": "Master of Arts in Speech-Language Pathology (Denver Hybrid Cohort)",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "CAA-accredited professional clinical degree training speech pathologists in dysphagia, neurogenic speech disorders, child language interventions, and clinical practicums.",
                "funding": "Allied Health Professional Grant: $2,500/year tuition award",
                "tuition": "$685 per credit hour",
                "fee": "$50",
                "deadline": "2027-01-15",
                "deadlineText": "January 15, 2027",
                "source": "https://extended.unco.edu/programs/speech-language-pathology-ma/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA with CSD prerequisite coursework completed",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "GRE scores optional",
                    "papers": "CSDCAS application, 25 hours clinical observation log, personal statement",
                    "references": "Three letters of recommendation (two academic, one clinical)"
                }
            },
            {
                "id": 10870,
                "title": "Master of Arts in Clinical Mental Health Counseling (Lowry Cohort)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "CACREP-accredited program preparing licensed professional counselors in psychotherapy theories, addiction counseling, family systems trauma, and 700 hours of clinical internships.",
                "funding": "Colorado Behavioral Health Fellowship: $3,000/year stipend",
                "tuition": "$650 per credit hour",
                "fee": "$50",
                "deadline": "2027-02-01",
                "deadlineText": "February 1, 2027",
                "source": "https://extended.unco.edu/programs/clinical-mental-health-counseling-ma/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in psychology, social work, or related behavioral field",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official transcripts, comprehensive autobiographical statement, resume",
                    "references": "Three professional and academic references"
                }
            },
            {
                "id": 10871,
                "title": "Doctor of Education (Ed.D.) in Educational Leadership",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Executive doctoral program for school district superintendents and educational policymakers focusing on organizational change, school finance, and education law.",
                "funding": "Executive Leadership Fellowship: $4,000 award towards dissertation research",
                "tuition": "$715 per credit hour",
                "fee": "$60",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://extended.unco.edu/programs/educational-leadership-edd/",
                "requirements": {
                    "gpa": "3.25+ master's degree GPA with 3+ years leadership experience",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, leadership portfolio, problem of practice dissertation proposal",
                    "references": "Three letters of reference (one from district supervisor)"
                }
            },
            {
                "id": 10872,
                "title": "Master of Arts in Special Education (Generalist Track)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Comprehensive degree for educators specializing in individualized education program (IEP) development, positive behavior support, and multi-tiered systems of support (MTSS).",
                "funding": "Federal TEACH Grant: Up to $4,000/year award for high-need school educators",
                "tuition": "$585 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://extended.unco.edu/programs/special-education-generalist-ma/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA, valid teaching license preferred",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts, teaching statement of philosophy, resume",
                    "references": "Two professional recommendations"
                }
            },
            {
                "id": 10873,
                "title": "Graduate Certificate in Applied Behavior Analysis (ABA)",
                "type": "Certificate",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "VCS-verified course sequence preparing practitioners for the Board Certified Behavior Analyst (BCBA) examination, focusing on functional behavior assessments and autism interventions.",
                "funding": "Autism Clinical Education Grant: $1,200 tuition discount",
                "tuition": "$585 per credit hour (21-credit certificate)",
                "fee": "$35",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://extended.unco.edu/programs/applied-behavior-analysis-certificate/",
                "requirements": {
                    "gpa": "Master's degree or current enrollment in relevant graduate program",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts and resume",
                    "references": "One supervisor reference"
                }
            },
            {
                "id": 10874,
                "title": "Lowry Urban Educator Innovation Fellowship",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Competitive tuition scholarship supporting urban teachers working in Denver Public Schools and Aurora Public Schools enrolled in advanced degree cohorts at Lowry.",
                "funding": "Full $3,000 annual scholarship applied directly to tuition",
                "tuition": "Extended campus tuition rate (Net cost reduced by $3,000)",
                "fee": "$0",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://extended.unco.edu/costs-aid/scholarships/",
                "requirements": {
                    "gpa": "3.2+ undergraduate GPA with full-time Colorado public school employment",
                    "ielts": "Satisfied via program enrollment",
                    "gre": "Not required",
                    "papers": "Fellowship application essay on urban educational equity, transcripts",
                    "references": "School principal letter of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 4990,
                "name": "Dr. Corey Pierce",
                "role": "Director of the School of Special Education and Professor",
                "department": "School of Special Education",
                "subject": "social-sciences",
                "bio": "Dr. Corey Pierce specializes in behavioral interventions for children with emotional and behavioral disorders, positive behavioral interventions and supports (PBIS), and inclusive urban classroom models.",
                "source": "https://www.unco.edu/cebs/special-education/faculty/corey-pierce.aspx"
            },
            {
                "id": 4991,
                "name": "Dr. Kim Murza",
                "role": "Chair and Associate Professor of Communication Sciences and Disorders",
                "department": "Department of Communication Sciences and Disorders",
                "subject": "biology",
                "bio": "Dr. Kim Murza investigates social communication interventions in children and adolescents, interprofessional educational practice in school-based speech pathology, and telepractice efficacy.",
                "source": "https://www.unco.edu/nhs/communication-sciences-disorders/faculty/kim-murza.aspx"
            },
            {
                "id": 4992,
                "name": "Dr. Heather Helm",
                "role": "Chair and Professor of Applied Psychology and Counselor Education",
                "department": "Department of Applied Psychology and Counselor Education",
                "subject": "social-sciences",
                "bio": "Dr. Heather Helm researches clinical mental health counselor supervision, attachment-based psychotherapy interventions, trauma-informed clinical practice, and counselor wellness.",
                "source": "https://www.unco.edu/cebs/applied-psychology-counselor-education/faculty/heather-helm.aspx"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "The Texas A&M University System RELLIS Campus",
        "shortName": "TAMUS RELLIS",
        "slug": "the-texas-a-m-university-system-rellis-campus",
        "location": "Bryan, Texas, United States",
        "website": "https://rellis.tamus.edu",
        "sourceRow": 1006,
        "stats": {
            "established": "2016",
            "students": "3,200+",
            "international": "6%",
            "faculty": "180+"
        },
        "hero": {
            "tagline": "Bryan · High-Tech Research Hub for Autonomous Vehicles, Hypersonics & Cyber-Physical Systems",
            "desc": "The Texas A&M University System RELLIS Campus is a premier 2,400-acre collaborative research and higher education center in Bryan, Texas. Uniting ten Texas A&M System regional universities with leading defense agencies, private industry, and Blinn College, RELLIS conducts cutting-edge research in hypersonic aerodynamics, autonomous connected mobility at the Bush Combat Development Complex (BCDC), and cyber-physical infrastructure."
        },
        "admissions": {
            "general": "Transfer admission requires 45+ transferable semester credits with a minimum cumulative GPA of 2.0 to 2.5 depending on the partnering Texas A&M System university degree program.",
            "language": "TOEFL iBT 80+ or IELTS 6.5+ for international candidates.",
            "deadlines": "Fall priority admission July 1, 2027; Spring priority admission December 1, 2026."
        },
        "financial": {
            "summary": "RELLIS Academic Alliance Scholarships, Texas A&M System Foundation Grants, Texas Grant transfers, and defense research assistantships through the Bush Combat Development Complex.",
            "tuition": "$8,200 - $11,500/year (Partner university resident tuition rates; $22,000/year non-resident)"
        },
        "opportunities": [
            {
                "id": 10875,
                "title": "Bachelor of Science in Cybersecurity (TAMU-Central Texas at RELLIS)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "NSA-designated program focusing on cyber warfare defense, operational technology (OT) critical infrastructure security, penetration testing, and digital forensics.",
                "funding": "RELLIS Cyber Defense Fellowship: $2,500/year award with defense lab clearance sponsorship",
                "tuition": "$8,400/year (In-state baseline)",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://rellis.tamus.edu/academicalliance/programs/cybersecurity/",
                "requirements": {
                    "gpa": "2.5+ transfer GPA with 45 transferable credits including calculus and programming",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts from all institutions, resume",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10876,
                "title": "Bachelor of Science in Mechanical Engineering Technology (TAMU-Corpus Christi at RELLIS)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Applied engineering cohort utilizing RELLIS proving grounds for autonomous robotics, materials failure testing, and automated industrial manufacturing systems.",
                "funding": "Autonomous Systems Engineering Grant: $3,000/year award",
                "tuition": "$9,100/year",
                "fee": "$50",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://rellis.tamus.edu/academicalliance/programs/mechanical-engineering-technology/",
                "requirements": {
                    "gpa": "2.5+ transfer GPA with engineering physics and calculus I & II",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Transcripts showing math/physics prerequisites",
                    "references": "Two recommendations from engineering educators"
                }
            },
            {
                "id": 10877,
                "title": "Master of Science in Autonomous Mobility & Connected Transportation",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "computer-science"],
                "desc": "Advanced research degree conducted with the Texas A&M Transportation Institute (TTI) at RELLIS testing grounds, focusing on V2X vehicle communication and sensor fusion.",
                "funding": "Texas Transportation Institute Research Assistantship: $28,000/year stipend plus full tuition waiver",
                "tuition": "$0 (Fully funded with assistantship)",
                "fee": "$65",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://rellis.tamus.edu/research/mobility/",
                "requirements": {
                    "gpa": "3.2+ undergraduate GPA in mechanical, electrical, or civil engineering",
                    "ielts": "IELTS 7.0 or TOEFL 85",
                    "gre": "GRE scores competitive (quantitative 160+)",
                    "papers": "Statement of research purpose, CV, official transcripts",
                    "references": "Three letters of academic recommendation"
                }
            },
            {
                "id": 10878,
                "title": "Bachelor of Science in Electrical Engineering (Tarleton State at RELLIS)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Hands-on ABET-accredited curriculum covering power electronic systems, RF microwave communications, embedded microcontrollers, and renewable smart grids.",
                "funding": "Power Systems Engineering Scholarship: $2,000/year award",
                "tuition": "$8,600/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://rellis.tamus.edu/academicalliance/programs/electrical-engineering/",
                "requirements": {
                    "gpa": "2.5+ transfer GPA with calculus and physics prerequisites",
                    "ielts": "IELTS 6.5 or TOEFL 80",
                    "gre": "Not required",
                    "papers": "Official collegiate transcripts",
                    "references": "Two academic references"
                }
            },
            {
                "id": 10879,
                "title": "Bush Combat Development Complex (BCDC) Hypersonics Research Fellowship",
                "type": "Fellowship",
                "subject": "engineering",
                "subjects": ["engineering", "physics"],
                "desc": "Defense research fellowship utilizing the Ballistic Aero-optics and Materials (BAM) facility and Mach 5-7 testing tunnels to analyze thermal protection materials.",
                "funding": "Department of Defense Fellowship: $36,000 annual stipend plus tuition waiver and research allowance",
                "tuition": "$0",
                "fee": "$0",
                "deadline": "2027-02-15",
                "deadlineText": "February 15, 2027",
                "source": "https://rellis.tamus.edu/bcdc/research/",
                "requirements": {
                    "gpa": "3.5+ GPA in aerospace or mechanical engineering graduate program",
                    "ielts": "Satisfied by bachelor's degree",
                    "gre": "Not required",
                    "papers": "U.S. Citizenship or ITAR compliance documentation, CV, technical research statement",
                    "references": "Three faculty recommendations"
                }
            },
            {
                "id": 10880,
                "title": "Bachelor of Science in Public Administration & Emergency Management (TAMU-Kingsville at RELLIS)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Degree program partnering with Texas Division of Emergency Management (TDEM) headquarters at RELLIS, studying disaster logistics, hazard mitigation, and public finance.",
                "funding": "Homeland Security Workforce Grant: $2,000/year award",
                "tuition": "$8,300/year",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://rellis.tamus.edu/academicalliance/programs/emergency-management/",
                "requirements": {
                    "gpa": "2.0+ transfer GPA with 45 collegiate credits completed",
                    "ielts": "IELTS 6.0 or TOEFL 75",
                    "gre": "Not required",
                    "papers": "Transcripts, career goals statement",
                    "references": "One professional reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4993,
                "name": "Dr. Kelly Hampton",
                "role": "Director of Academic Alliance Operations",
                "department": "RELLIS Academic Alliance",
                "subject": "social-sciences",
                "bio": "Dr. Kelly Hampton directs collegiate degree articulation across ten TAMUS institutions at RELLIS, researching multi-institution higher education consortia and workforce alignment pathways.",
                "source": "https://rellis.tamus.edu/about/leadership/hampton/"
            },
            {
                "id": 4994,
                "name": "Dr. John Hurtado",
                "role": "Executive Director of the Bush Combat Development Complex and Professor of Aerospace Engineering",
                "department": "Bush Combat Development Complex",
                "subject": "engineering",
                "bio": "Dr. John Hurtado specializes in autonomous systems dynamics, spacecraft attitude control, hypersonics aero-optics test methodologies, and defense-civilian engineering partnerships.",
                "source": "https://engineering.tamu.edu/aerospace/profiles/jhurtado.html"
            },
            {
                "id": 4995,
                "name": "Dr. Greg Winfree",
                "role": "Agency Director of the Texas A&M Transportation Institute",
                "department": "Texas A&M Transportation Institute at RELLIS",
                "subject": "engineering",
                "bio": "Dr. Greg Winfree leads multimodal transportation research at RELLIS, investigating connected automated vehicle infrastructure, intelligent traffic management, and smart mobility policies.",
                "source": "https://tti.tamu.edu/people/greg-winfree/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "Green University LLC",
        "shortName": "Green University",
        "slug": "green-university-llc",
        "location": "Boca Raton, Florida, United States",
        "website": "https://www.greenuniversity.com",
        "sourceRow": 727,
        "stats": {
            "established": "2008",
            "students": "850+",
            "international": "20%",
            "faculty": "45+"
        },
        "hero": {
            "tagline": "Boca Raton · Sustainable Architecture, Renewable Energy & Green Business",
            "desc": "Green University is a specialized private institution based in Boca Raton, Florida, dedicated to higher education in sustainability, ecological design, renewable energy management, and corporate ESG governance. Delivering undergraduate and master's degree pathways, Green University trains environmental advocates and eco-entrepreneurs to lead corporate sustainability transitions."
        },
        "admissions": {
            "general": "High school diploma or accredited equivalent for undergraduate entry; recognized bachelor's degree with 2.5+ GPA for master's programs.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions across quarterly terms in September, January, April, and July."
        },
        "financial": {
            "summary": "Global Eco-Stewardship Scholarships, Green Business Grants, and clean technology work-study fellowships providing up to $2,500 annual tuition assistance.",
            "tuition": "$7,200 - $11,400/year (Undergraduate $300/credit; Graduate $475/credit)"
        },
        "opportunities": [
            {
                "id": 10881,
                "title": "Master of Science in Sustainable Business & Corporate ESG Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "environment"],
                "desc": "Graduate degree analyzing carbon accounting, corporate ESG compliance auditing, circular economy supply chains, and green venture financing.",
                "funding": "ESG Leadership Fellowship: $2,500/year tuition credit",
                "tuition": "$475 per graduate credit hour",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.greenuniversity.com/academics/ms-esg-management/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA in business, economics, or environmental studies",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, resume, 750-word statement on corporate sustainability goals",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10882,
                "title": "Bachelor of Science in Renewable Energy Systems & Clean Technology",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "environment", "physics"],
                "desc": "Hands-on engineering curriculum covering photovoltaic design, wind turbine aerodynamics, battery energy storage systems (BESS), and smart grid electrification.",
                "funding": "Clean Energy Innovation Award: $2,000/year scholarship",
                "tuition": "$300 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.greenuniversity.com/academics/bs-renewable-energy/",
                "requirements": {
                    "gpa": "2.5+ high school GPA with algebra and physics coursework",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official secondary transcripts and personal statement",
                    "references": "One STEM teacher reference"
                }
            },
            {
                "id": 10883,
                "title": "Master of Science in Ecological Architecture & Regenerative Design",
                "type": "Degree",
                "subject": "arts-design",
                "subjects": ["arts-design", "environment", "engineering"],
                "desc": "Advanced design curriculum teaching LEED Platinum building modeling, biomimetic structural engineering, passive solar heating, and urban microclimate optimization.",
                "funding": "Regenerative Architecture Grant: $3,000 annual studio stipend",
                "tuition": "$475 per credit hour",
                "fee": "$60",
                "deadline": "2027-03-15",
                "deadlineText": "March 15, 2027",
                "source": "https://www.greenuniversity.com/academics/ms-ecological-architecture/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in architecture, landscape design, or civil engineering",
                    "ielts": "IELTS 6.5 or TOEFL 79",
                    "gre": "Not required",
                    "papers": "Design portfolio (10-15 projects), transcripts, personal essay",
                    "references": "Two architectural faculty or professional recommendations"
                }
            },
            {
                "id": 10884,
                "title": "Bachelor of Arts in Environmental Policy & Climate Advocacy",
                "type": "Degree",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Interdisciplinary degree in environmental law, climate change economics, environmental justice advocacy, and international treaty frameworks.",
                "funding": "Eco-Advocacy Scholarship: $1,500/year award",
                "tuition": "$300 per credit hour",
                "fee": "$50",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.greenuniversity.com/academics/ba-environmental-policy/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and brief essay on environmental values",
                    "references": "One counselor or teacher reference"
                }
            },
            {
                "id": 10885,
                "title": "Executive Certificate in Carbon Accounting and Net-Zero Strategy",
                "type": "Certificate",
                "subject": "environment",
                "subjects": ["environment", "social-sciences"],
                "desc": "Professional credential for corporate sustainability officers covering GHG Protocol Scope 1, 2, and 3 accounting, carbon offsets, and TCFD climate disclosure reporting.",
                "funding": "Corporate Decarbonization Subsidy: $800 discount",
                "tuition": "$1,900 total certificate cost",
                "fee": "$30",
                "deadline": "2027-04-01",
                "deadlineText": "April 1, 2027",
                "source": "https://www.greenuniversity.com/academics/certificates/carbon-accounting/",
                "requirements": {
                    "gpa": "Bachelor's degree or 2+ years business experience",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Resume and diploma",
                    "references": "One employer recommendation"
                }
            },
            {
                "id": 10886,
                "title": "Certificate in Permaculture Design and Urban Agrosystems",
                "type": "Certificate",
                "subject": "environment",
                "subjects": ["environment", "biology"],
                "desc": "Field certificate in urban regenerative agriculture, soil microbiome restoration, companion planting, and residential rainwater harvesting.",
                "funding": "Urban Agriculture Community Grant: $600 materials award",
                "tuition": "$1,500 total tuition",
                "fee": "$25",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.greenuniversity.com/academics/certificates/permaculture/",
                "requirements": {
                    "gpa": "Secondary school diploma or GED",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Brief statement of interest",
                    "references": "One character reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4996,
                "name": "Dr. Julian Sterling",
                "role": "Academic Director and Professor of Sustainable Systems",
                "department": "Department of Environmental Studies",
                "subject": "environment",
                "bio": "Dr. Julian Sterling directs academic research at Green University, specializing in circular economy business models, urban agroecological resilience, and corporate ESG metrics.",
                "source": "https://www.greenuniversity.com/faculty/julian-sterling/"
            },
            {
                "id": 4997,
                "name": "Prof. Maya Linwood",
                "role": "Chair of Ecological Architecture and Associate Professor",
                "department": "School of Design and Architecture",
                "subject": "arts-design",
                "bio": "Prof. Maya Linwood is a LEED AP architect investigating carbon-negative timber construction, passive bioclimatic facade engineering, and daylighting optimization in subtropical structures.",
                "source": "https://www.greenuniversity.com/faculty/maya-linwood/"
            },
            {
                "id": 4998,
                "name": "Dr. Carlos Mendez",
                "role": "Director of Clean Energy Research and Associate Professor",
                "department": "Department of Renewable Energy Engineering",
                "subject": "engineering",
                "bio": "Dr. Carlos Mendez researches next-generation perovskite-silicon tandem solar cells, distributed microgrid power storage electronics, and utility grid peak-load shaving.",
                "source": "https://www.greenuniversity.com/faculty/carlos-mendez/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "The American University",
        "shortName": "American University Nevada",
        "slug": "the-american-university",
        "location": "Las Vegas, Nevada, United States",
        "website": "https://www.aunv.org",
        "sourceRow": 996,
        "stats": {
            "established": "2013",
            "students": "650+",
            "international": "40%",
            "faculty": "40+"
        },
        "hero": {
            "tagline": "Las Vegas · Global Hospitality Management, Business & Digital Media",
            "desc": "The American University is an independent private institution based in Las Vegas, Nevada, dedicated to international education in hospitality management, business administration, and computer information technology. Leveraging Las Vegas's standing as a world capital of hospitality and entertainment, AUNV delivers global management degrees paired with experiential industry internships."
        },
        "admissions": {
            "general": "High school diploma or certified equivalent for undergraduate programs; recognized bachelor's degree with minimum 2.5 GPA for master's programs.",
            "language": "TOEFL iBT 70+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions across fall (August), spring (January), and summer (May) trimesters."
        },
        "financial": {
            "summary": "International Hospitality Scholarships, Las Vegas Industry Partner Grants, and academic achievement tuition credits up to $2,000 per academic year.",
            "tuition": "$6,800 - $9,600/year (Undergraduate $285/credit; Graduate $400/credit)"
        },
        "opportunities": [
            {
                "id": 10887,
                "title": "Master of Science in International Hospitality and Tourism Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Advanced degree exploring casino resort operations, convention logistics, revenue management algorithms, and hospitality customer analytics in Las Vegas.",
                "funding": "Vegas Hospitality Fellowship: $2,000/year tuition award plus resort internship placement",
                "tuition": "$400 per credit hour",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.aunv.org/academics/ms-hospitality/",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA from an accredited institution",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Official bachelor's transcripts, resume, 500-word career statement",
                    "references": "Two professional or academic references"
                }
            },
            {
                "id": 10888,
                "title": "Master of Business Administration (MBA - Digital Marketing & E-Commerce)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "computer-science"],
                "desc": "Graduate business curriculum in digital brand positioning, search engine optimization, consumer analytics, and global supply chain operations.",
                "funding": "Global Commerce Grant: $1,800 annual tuition credit",
                "tuition": "$400 per credit hour",
                "fee": "$75",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://www.aunv.org/academics/mba/",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts, resume, personal statement",
                    "references": "Two recommendations"
                }
            },
            {
                "id": 10889,
                "title": "Bachelor of Science in Information Technology and Network Systems",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Technical undergraduate degree teaching cloud infrastructure, network routing, database management, and enterprise cybersecurity defense.",
                "funding": "Tech Career Scholarship: $1,500/year tuition award",
                "tuition": "$285 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.aunv.org/academics/bs-it/",
                "requirements": {
                    "gpa": "2.0+ high school cumulative GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "High school transcripts and identification document",
                    "references": "One teacher recommendation"
                }
            },
            {
                "id": 10890,
                "title": "Bachelor of Business Administration (BBA - Hospitality Management)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Undergraduate foundational program covering hotel front-office administration, food and beverage economics, event planning, and guest relations.",
                "funding": "Hospitality Leaders Grant: $1,200 annual award",
                "tuition": "$285 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://www.aunv.org/academics/bba-hospitality/",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement",
                    "references": "One character reference"
                }
            },
            {
                "id": 10891,
                "title": "Certificate in Casino Operations and Gaming Regulation",
                "type": "Certificate",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Specialized vocational credential covering gaming mathematics, Nevada gaming commission compliance, surveillance technologies, and anti-money laundering (AML).",
                "funding": "Gaming Industry Professional Subsidy: $800 discount",
                "tuition": "$1,800 total certificate tuition",
                "fee": "$30",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://www.aunv.org/academics/certificates/gaming/",
                "requirements": {
                    "gpa": "High school diploma, minimum age 21 years",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Identification verification, clean background record",
                    "references": "One professional reference"
                }
            },
            {
                "id": 10892,
                "title": "Certificate in Digital Media Production and Event Marketing",
                "type": "Certificate",
                "subject": "arts-design",
                "subjects": ["arts-design", "social-sciences"],
                "desc": "Creative certificate in digital video editing, live entertainment event promotion, social media influencer campaigns, and multimedia graphic design.",
                "funding": "Creative Media Grant: $600 materials credit",
                "tuition": "$1,600 total tuition",
                "fee": "$25",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://www.aunv.org/academics/certificates/digital-media/",
                "requirements": {
                    "gpa": "Secondary school completion certificate",
                    "ielts": "IELTS 6.0 or TOEFL 70",
                    "gre": "Not required",
                    "papers": "Transcripts and brief creative statement",
                    "references": "One character reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 4999,
                "name": "Dr. Anthony Rossi",
                "role": "Academic Dean and Professor of Hospitality Management",
                "department": "School of Hospitality and Business",
                "subject": "social-sciences",
                "bio": "Dr. Anthony Rossi conducts research on resort revenue yield optimization, customer loyalty behavior in gaming destinations, and sustainable hotel operations in arid environments.",
                "source": "https://www.aunv.org/faculty/anthony-rossi/"
            },
            {
                "id": 5000,
                "name": "Dr. Grace Lin",
                "role": "Associate Professor of Information Systems",
                "department": "Department of Computer Information Technology",
                "subject": "computer-science",
                "bio": "Dr. Grace Lin investigates cloud enterprise architecture, network intrusion countermeasures, and digital marketing data analytics algorithms.",
                "source": "https://www.aunv.org/faculty/grace-lin/"
            },
            {
                "id": 5001,
                "name": "Prof. David Vance",
                "role": "Director of Culinary and Hospitality Arts",
                "department": "Department of Hospitality Management",
                "subject": "social-sciences",
                "bio": "Prof. David Vance specializes in commercial culinary operations management, beverage program economics, food safety compliance, and convention banqueting logistics.",
                "source": "https://www.aunv.org/faculty/david-vance/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of Mid Florida",
        "shortName": "Mid Florida",
        "slug": "university-of-mid-florida",
        "location": "Orlando, Florida, United States",
        "website": "https://universityofmidflorida.education",
        "sourceRow": 1112,
        "stats": {
            "established": "2015",
            "students": "700+",
            "international": "18%",
            "faculty": "40+"
        },
        "hero": {
            "tagline": "Orlando · Career-Aligned Allied Health, Business & Cloud Computing",
            "desc": "The University of Mid Florida is a private collegiate institution located in Orlando, Florida, offering accelerated career-focused degree and diploma programs. Delivering curricula in healthcare administration, medical billing, enterprise cloud computing, and business management, Mid Florida prepares adult learners and international scholars with practical, workforce-ready skills."
        },
        "admissions": {
            "general": "High school diploma, GED, or approved secondary completion certificate for undergraduate programs; recognized bachelor's degree with 2.5+ GPA for graduate programs.",
            "language": "TOEFL iBT 65+ or IELTS 6.0+ for international applicants.",
            "deadlines": "Rolling admissions with flexible monthly module starts."
        },
        "financial": {
            "summary": "Mid Florida Career Advancement Grants, Healthcare Workforce Scholarships, and corporate employer tuition match programs.",
            "tuition": "$6,200 - $9,400/year ($260 - $390 per credit hour)"
        },
        "opportunities": [
            {
                "id": 10893,
                "title": "Master of Business Administration (MBA - Healthcare Administration)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "biology"],
                "desc": "Graduate professional program in clinical operations, medical billing compliance, healthcare human resources, and health system finance.",
                "funding": "Healthcare Executive Award: $2,000 tuition credit",
                "tuition": "$390 per credit hour",
                "fee": "$50",
                "deadline": "2027-03-01",
                "deadlineText": "March 1, 2027",
                "source": "https://universityofmidflorida.education/programs/mba-healthcare/",
                "requirements": {
                    "gpa": "2.5+ undergraduate GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Official bachelor's transcripts, resume, 500-word career objective essay",
                    "references": "Two professional references"
                }
            },
            {
                "id": 10894,
                "title": "Bachelor of Science in Cloud Computing & Enterprise Systems",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "engineering"],
                "desc": "Hands-on undergraduate degree in AWS/Azure cloud infrastructure, Linux server administration, virtualization, and network security protocols.",
                "funding": "Cloud Tech Career Grant: $1,500/year award",
                "tuition": "$260 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://universityofmidflorida.education/programs/bs-cloud-computing/",
                "requirements": {
                    "gpa": "2.0+ high school GPA with algebra",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "High school transcripts and government ID copy",
                    "references": "One teacher or employer recommendation"
                }
            },
            {
                "id": 10895,
                "title": "Bachelor of Science in Health Services Management",
                "type": "Degree",
                "subject": "biology",
                "subjects": ["biology", "social-sciences"],
                "desc": "Curriculum preparing clinical practice managers, health data analysts, and compliance coordinators in HIPAA standards and electronic health records.",
                "funding": "Allied Health Career Scholarship: $1,400/year award",
                "tuition": "$260 per credit hour",
                "fee": "$50",
                "deadline": "2027-04-15",
                "deadlineText": "April 15, 2027",
                "source": "https://universityofmidflorida.education/programs/bs-health-services/",
                "requirements": {
                    "gpa": "2.0+ high school or collegiate transfer GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts and personal statement",
                    "references": "One academic or professional reference"
                }
            },
            {
                "id": 10896,
                "title": "Associate of Science in Business Management",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Two-year foundational degree in business law, managerial accounting, marketing strategy, and organizational behavior.",
                "funding": "Mid Florida Access Grant: $1,000/year award",
                "tuition": "$260 per credit hour",
                "fee": "$40",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://universityofmidflorida.education/programs/as-business/",
                "requirements": {
                    "gpa": "2.0+ high school GPA",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts and short application statement",
                    "references": "One reference"
                }
            },
            {
                "id": 10897,
                "title": "Certificate in Medical Billing, Coding and Health Informatics",
                "type": "Certificate",
                "subject": "biology",
                "subjects": ["biology", "computer-science"],
                "desc": "AAPC-aligned vocational certificate covering ICD-10-CM, CPT coding, medical claims auditing, and EHR reimbursement compliance.",
                "funding": "Healthcare Coder Training Voucher: $700 discount",
                "tuition": "$1,800 total certificate cost",
                "fee": "$30",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://universityofmidflorida.education/programs/medical-billing/",
                "requirements": {
                    "gpa": "High school diploma or GED equivalent",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts and resume",
                    "references": "One personal reference"
                }
            },
            {
                "id": 10898,
                "title": "Certificate in Full-Stack Web Development & Python Scripting",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science"],
                "desc": "Accelerated coding credential covering HTML5/CSS3, JavaScript (React), Python backend REST APIs, and PostgreSQL database queries.",
                "funding": "Web Dev Talent Subsidy: $600 grant",
                "tuition": "$1,600 total tuition",
                "fee": "$25",
                "deadline": "2027-05-15",
                "deadlineText": "May 15, 2027",
                "source": "https://universityofmidflorida.education/programs/web-development/",
                "requirements": {
                    "gpa": "High school diploma or GED",
                    "ielts": "IELTS 6.0 or TOEFL 65",
                    "gre": "Not required",
                    "papers": "Transcripts, brief technical interest essay",
                    "references": "One reference"
                }
            }
        ],
        "researchers": [
            {
                "id": 5002,
                "name": "Dr. Fernando Morales",
                "role": "Dean of Academic Affairs and Associate Professor of Health Administration",
                "department": "Division of Health Sciences",
                "subject": "biology",
                "bio": "Dr. Fernando Morales directs academic curriculum and clinical quality, researching outpatient healthcare reimbursement models, electronic health record workflows, and medical practice compliance.",
                "source": "https://universityofmidflorida.education/faculty/fernando-morales/"
            },
            {
                "id": 5003,
                "name": "Prof. Angela Bennett",
                "role": "Chair of Business Management",
                "department": "Department of Business",
                "subject": "social-sciences",
                "bio": "Prof. Angela Bennett specializes in human resource analytics, corporate training pedagogy, small business entrepreneurship, and organizational communication.",
                "source": "https://universityofmidflorida.education/faculty/angela-bennett/"
            },
            {
                "id": 5004,
                "name": "Dr. Tariq Al-Mansoor",
                "role": "Associate Professor of Information Technology",
                "department": "Department of Technology and Cloud Computing",
                "subject": "computer-science",
                "bio": "Dr. Tariq Al-Mansoor conducts applied research in enterprise cloud virtualization security, software-defined networks, and full-stack software development pedagogical methodologies.",
                "source": "https://universityofmidflorida.education/faculty/tariq-al-mansoor/"
            }
        ]
    },
    {
        "countryId": "usa",
        "countryLabel": "United States",
        "institution": "University of North Carolina at Charlotte Extended Academic Programs",
        "shortName": "UNC Charlotte Extended",
        "slug": "university-of-north-carolina-at-charlotte-extended-academic-programs",
        "location": "Charlotte, North Carolina, United States",
        "website": "https://ext.charlotte.edu",
        "sourceRow": 1133,
        "stats": {
            "established": "1946",
            "students": "6,500+",
            "international": "8%",
            "faculty": "300+"
        },
        "hero": {
            "tagline": "Charlotte · Queen City Professional Continuing Education, Data Analytics & Leadership",
            "desc": "UNC Charlotte Extended Academic Programs is the continuing education and distance learning division of the University of North Carolina at Charlotte. Situated in North Carolina's premier financial and technology hub, UNC Charlotte Extended delivers high-demand professional master's degrees, graduate certificates, and executive bootcamps in data science, construction management, health informatics, and educational leadership."
        },
        "admissions": {
            "general": "Bachelor's degree from an accredited institution with a minimum cumulative undergraduate GPA of 2.75 for graduate certificate entry and 3.0 for master's programs.",
            "language": "TOEFL iBT 83+ or IELTS 6.5+ for international candidates.",
            "deadlines": "Fall priority deadline June 15, 2027; Spring priority deadline November 1, 2026; Summer priority April 1, 2027."
        },
        "financial": {
            "summary": "UNC Charlotte Continuing Education Scholarships, Charlotte Financial Tech Fellowships, North Carolina Teacher Discounts, and employer tuition reimbursement plans.",
            "tuition": "$510 - $875 per graduate credit hour ($9,200 - $15,800/year resident rate)"
        },
        "opportunities": [
            {
                "id": 10899,
                "title": "Master of Science in Health Informatics and Analytics (Online / Extended)",
                "type": "Degree",
                "subject": "computer-science",
                "subjects": ["computer-science", "biology"],
                "desc": "Interdisciplinary graduate program exploring predictive healthcare analytics, machine learning for electronic medical records, clinical decision systems, and HIPAA data governance.",
                "funding": "Health Data Innovation Fellowship: $3,000/year award",
                "tuition": "$725 per graduate credit hour",
                "fee": "$75",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://ext.charlotte.edu/programs/health-informatics-ms/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA in STEM, healthcare, or quantitative discipline",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "GRE optional with 3.0+ GPA",
                    "papers": "Transcripts, statement of purpose, resume showing programming or quantitative readiness",
                    "references": "Two letters of recommendation"
                }
            },
            {
                "id": 10900,
                "title": "Master of Science in Construction and Facilities Management (Distance Track)",
                "type": "Degree",
                "subject": "engineering",
                "subjects": ["engineering", "social-sciences"],
                "desc": "Professional graduate degree in Building Information Modeling (BIM), construction project finance, lean project delivery, and sustainable building asset management.",
                "funding": "Carolinas Construction Industry Grant: $2,500 annual award",
                "tuition": "$685 per credit hour",
                "fee": "$75",
                "deadline": "2027-06-15",
                "deadlineText": "June 15, 2027",
                "source": "https://ext.charlotte.edu/programs/construction-management-ms/",
                "requirements": {
                    "gpa": "3.0+ GPA in engineering, architecture, or construction technology",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "Not required",
                    "papers": "Official transcripts, resume detailing industry experience, career goals essay",
                    "references": "Two professional supervisor recommendations"
                }
            },
            {
                "id": 10901,
                "title": "Graduate Certificate in Applied Artificial Intelligence and Machine Learning",
                "type": "Certificate",
                "subject": "computer-science",
                "subjects": ["computer-science", "mathematics"],
                "desc": "Post-baccalaureate credential in neural networks, computer vision, natural language processing, and cloud-scale model deployment (MLOps).",
                "funding": "Charlotte Fintech AI Scholarship: $1,500 tuition discount",
                "tuition": "$725 per credit hour (15-credit certificate)",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://ext.charlotte.edu/programs/applied-ai-certificate/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA with Python programming and calculus prerequisites",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "Not required",
                    "papers": "Transcripts, technical resume",
                    "references": "One academic or employer reference"
                }
            },
            {
                "id": 10902,
                "title": "Master of Education (M.Ed.) in Educational Leadership (Online Cohort)",
                "type": "Degree",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Degree program preparing K-12 school principals and district leaders in school law, instructional coaching, curriculum design, and organizational culture.",
                "funding": "North Carolina Principal Fellows Subsidy: $3,000/year award",
                "tuition": "$510 per credit hour",
                "fee": "$75",
                "deadline": "2027-06-01",
                "deadlineText": "June 1, 2027",
                "source": "https://ext.charlotte.edu/programs/educational-leadership-med/",
                "requirements": {
                    "gpa": "3.0+ undergraduate GPA, valid North Carolina teaching license and 3+ years teaching",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "Not required",
                    "papers": "Transcripts, leadership portfolio, educator goals statement",
                    "references": "Three recommendations (one from school principal)"
                }
            },
            {
                "id": 10903,
                "title": "Graduate Certificate in Supply Chain Management and Logistics Analytics",
                "type": "Certificate",
                "subject": "social-sciences",
                "subjects": ["social-sciences", "engineering"],
                "desc": "Targeted curriculum in global sourcing strategy, transportation network optimization, ERP warehouse management, and inventory stochastic forecasting.",
                "funding": "Supply Chain Professional Award: $1,200 discount",
                "tuition": "$685 per credit hour (12-credit certificate)",
                "fee": "$50",
                "deadline": "2027-07-01",
                "deadlineText": "July 1, 2027",
                "source": "https://ext.charlotte.edu/programs/supply-chain-certificate/",
                "requirements": {
                    "gpa": "2.75+ undergraduate GPA",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "Not required",
                    "papers": "Transcripts and professional resume",
                    "references": "One recommendation"
                }
            },
            {
                "id": 10904,
                "title": "UNC Charlotte Extended Education Excellence Fellowship",
                "type": "Fellowship",
                "subject": "social-sciences",
                "subjects": ["social-sciences"],
                "desc": "Merit-based competitive fellowship for working professionals enrolling in fully online and extended graduate programs at UNC Charlotte.",
                "funding": "Full $3,000 annual scholarship applied directly against program tuition",
                "tuition": "Comprehensive credit rates (Net cost reduced by $3,000)",
                "fee": "$0",
                "deadline": "2027-05-01",
                "deadlineText": "May 1, 2027",
                "source": "https://ext.charlotte.edu/costs-and-aid/scholarships/",
                "requirements": {
                    "gpa": "3.3+ undergraduate GPA, enrolled full-time or part-time in extended master's program",
                    "ielts": "IELTS 6.5 or TOEFL 83",
                    "gre": "Not required",
                    "papers": "Fellowship essay on professional leadership and community impact",
                    "references": "Two professional letters of recommendation"
                }
            }
        ],
        "researchers": [
            {
                "id": 5005,
                "name": "Dr. Asher Cook",
                "role": "Executive Director of Extended Academic Programs and Associate Professor",
                "department": "Division of Extended Academic Programs",
                "subject": "social-sciences",
                "bio": "Dr. Asher Cook oversees distance and extended graduate education at UNC Charlotte, researching asynchronous online adult learning retention, competency-based education, and university-corporate partnerships.",
                "source": "https://ext.charlotte.edu/about-us/leadership/"
            },
            {
                "id": 5006,
                "name": "Dr. Yaorong Ge",
                "role": "Associate Professor of Software and Information Systems",
                "department": "College of Computing and Informatics",
                "subject": "computer-science",
                "bio": "Dr. Yaorong Ge conducts research in health informatics data pipelines, medical image processing, machine learning for clinical risk prediction, and biomedical software systems.",
                "source": "https://cci.charlotte.edu/directory/yaorong-ge"
            },
            {
                "id": 5007,
                "name": "Dr. Don Chen",
                "role": "Professor of Construction Management and Civil Engineering",
                "department": "Department of Engineering Technology and Construction Management",
                "subject": "engineering",
                "bio": "Dr. Don Chen specializes in Building Information Modeling (BIM) interoperability, infrastructure digital twin modeling, sustainable building energy simulation, and construction project automation.",
                "source": "https://et.charlotte.edu/directory/don-chen"
            }
        ]
    }
]

with open("scripts/b73_p2_chunk1_raw.json", "w") as f:
    json.dump(unis, f, indent=2)

print(f"Successfully generated {len(unis)} universities for Batch 73 Part 2 Chunk 1.")
