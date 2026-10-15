# scripts/make_b65_p2_chunk1.py
# Batch 65 Part 2 Chunk 1: Universities 16 to 23

chunk3 = [
  # 16. Southern Arkansas University (Row 954)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Arkansas University",
    "shortName": "Southern Arkansas",
    "slug": "southern-arkansas-university-magnolia",
    "location": "Magnolia, Arkansas, United States",
    "website": "https://web.saumag.edu",
    "sourceRow": 954,
    "stats": {"established": "1909", "students": "5,100+", "international": "12%", "faculty": "240+"},
    "heroSummary": "Southern Arkansas University (SAU) is a comprehensive public regional university nestled on a picturesque 1,400-acre campus in Magnolia, Arkansas. Known as the fastest-growing university in southern Arkansas, SAU is acclaimed for its ABET-accredited engineering program, pioneering game design and animation studio, high-tech agriculture center, and the Rankin College of Business.",
    "academicOverview": "SAU comprises the College of Science and Engineering, the David F. Rankin College of Business, the College of Education and Human Performance, and the College of Liberal and Performing Arts. It features modern engineering laboratories, a 700-acre working agricultural farm, veterinary science facilities, and advanced cybersecurity computing clusters.",
    "researchAdmissions": "Undergraduate admissions evaluate high school grade point average (2.25 minimum) and ACT/SAT scores or test-optional holistic portfolio criteria. Graduate admissions require an accredited bachelor's degree with a 2.5+ minimum GPA (3.0 for computer science and engineering), academic transcripts, and program-specific letters of intent.",
    "opps": [
      {
        "title": "Bachelor of Science in Engineering (ABET Accredited)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "SAU Engineering Excellence Scholarships and Albemarle Corporate STEM Grants up to $8,000/year",
        "fee": "$0",
        "tuition": "$9,660/year in-state, $15,180/year out-of-state",
        "desc": "Rigorous ABET-accredited degree offering specialized concentrations in mechanical, chemical, electrical, and industrial engineering with intensive industry design capstones.",
        "requirements": {"gpa": "High school GPA 3.0+ with precalculus and chemistry/physics", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://web.saumag.edu/science-engineering/engineering"
      },
      {
        "title": "Master of Science in Computer and Information Science - Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate assistantships offering full tuition remission and monthly research stipends",
        "fee": "$35",
        "tuition": "$335/credit hour in-state, $525/credit hour out-of-state",
        "desc": "High-demand graduate program specializing in cyber defense architectures, cloud vulnerability mitigation, big data analytics, and machine learning algorithm deployment.",
        "requirements": {"gpa": "Bachelor's degree in CS, IT, or STEM with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "GRE waived for GPA > 3.0", "papers": "Statement of purpose in computing", "references": "Two letters of recommendation"},
        "source": "https://web.saumag.edu/academics/program/computer-and-information-science-mcis"
      },
      {
        "title": "Bachelor of Science in Agriculture - Animal Science & Pre-Veterinary",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Rankin College Agriculture Endowed Awards up to $4,000",
        "fee": "$0",
        "tuition": "$9,660/year in-state, $15,180/year out-of-state",
        "desc": "Hands-on degree based at SAU's working university farm, covering livestock nutrition, reproductive physiology, veterinary surgical assistance, and ranch management.",
        "requirements": {"gpa": "High school diploma with biology and chemistry coursework", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://web.saumag.edu/agriculture/animal-science"
      },
      {
        "title": "Bachelor of Fine Arts in Game Development and Animation",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Creative Arts Talent Scholarships based on portfolio evaluation",
        "fee": "$0",
        "tuition": "$9,660/year in-state, $15,180/year out-of-state",
        "desc": "Ranked among the top game design programs in the South, providing hands-on instruction in 3D modeling, Unreal/Unity engine development, character rigging, and immersive VR storytelling.",
        "requirements": {"gpa": "High school GPA 2.5+, portfolio submission highly recommended", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Artistic statement of intent", "references": "Art teacher recommendation"},
        "source": "https://web.saumag.edu/art/game-development"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Counseling Education Department Graduate Traineeships",
        "fee": "$35",
        "tuition": "$335/credit hour in-state, $525/credit hour out-of-state",
        "desc": "CACREP-accredited 60-credit clinical curriculum training licensed professional counselors through supervised clinical rotations across Arkansas mental health agencies and hospitals.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA, psychology prerequisites", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Counseling philosophy essay and interview", "references": "Three professional references"},
        "source": "https://web.saumag.edu/academics/program/clinical-mental-health-counseling"
      },
      {
        "title": "South Arkansas Timber & Agricultural Ecosystem Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$3,800 summer stipend, university farm housing, and field survey equipment",
        "fee": "$0",
        "tuition": "Funded through SAU Agriculture Research Foundation",
        "desc": "Field research fellowship studying southern pine forest silviculture, wild hog population dynamics, and sustainable rotational grazing practices across Columbia County.",
        "requirements": {"gpa": "Enrolled student in agriculture, biology, or environmental science with 3.0+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Field ecosystem project proposal", "references": "One agriculture faculty letter"},
        "source": "https://web.saumag.edu/agriculture/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Trey Berry",
        "role": "President & Professor of History",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Berry serves as President of Southern Arkansas University, an acclaimed historian specializing in Arkansas history, heritage preservation, and transformative rural higher education access."
      },
      {
        "name": "Dr. Mahbub Ahmed",
        "role": "Chair & Professor of Engineering and Physics",
        "department": "Department of Engineering and Physics",
        "subject": "engineering",
        "bio": "Dr. Ahmed leads ABET-accredited engineering instruction at SAU, conducting research in computational fluid dynamics, heat transfer optimization, and renewable solar thermal technologies."
      },
      {
        "name": "Dr. Abdel Bachri",
        "role": "Dean & Professor of Physics",
        "department": "College of Science and Engineering",
        "subject": "physics",
        "bio": "Dr. Bachri is a high-energy particle physicist collaborating with Fermilab and NASA, investigating neutrino oscillation dynamics, cosmic radiation detection, and undergraduate STEM research mentoring."
      }
    ]
  },

  # 17. Southern California State University (Row 955)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern California State University",
    "shortName": "SCSU California",
    "slug": "southern-california-state-university-el-monte",
    "location": "El Monte, California, United States",
    "website": "https://www.scsuniversity.edu",
    "sourceRow": 955,
    "stats": {"established": "2013", "students": "420+", "international": "8%", "faculty": "35+"},
    "heroSummary": "Southern California State University (SCSU) is an accredited private university situated in El Monte, California, in the heart of the San Gabriel Valley within greater Los Angeles. Specializing in high-demand degree programs in Business Administration, Computer Information Systems, and Acupuncture & Traditional Chinese Medicine, SCSU prepares multicultural professionals for leadership in cross-border commerce and integrative healthcare.",
    "academicOverview": "SCSU comprises the School of Business, the School of Information Technology, and the School of Oriental Medicine. Its campus features modern multimedia seminar rooms, computer laboratories, and an on-campus community acupuncture teaching clinic serving the San Gabriel Valley metropolitan community.",
    "researchAdmissions": "Undergraduate admissions require high school graduation or equivalent with English proficiency for international applicants. Graduate programs in business and computer systems require an accredited bachelor's degree with a 2.5+ GPA. The Master and Doctor of Acupuncture & Oriental Medicine require 60+ semester units of prior collegiate coursework including general biology and chemistry.",
    "opps": [
      {
        "title": "Master of Business Administration (MBA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Dean's Pacific Rim International Scholarships up to $3,500/year",
        "fee": "$50",
        "tuition": "$14,400/year",
        "desc": "Practitioner-oriented MBA offering concentrations in international business, corporate finance, and strategic management, designed for working professionals and global entrepreneurs in Southern California.",
        "requirements": {"gpa": "Accredited bachelor's degree with 2.5+ GPA", "ielts": "TOEFL 71+ or IELTS 6.0", "gre": "GMAT/GRE not required", "papers": "Statement of business leadership objectives", "references": "Two professional recommendations"},
        "source": "https://www.scsuniversity.edu/academics/school-of-business/master-of-business-administration"
      },
      {
        "title": "Master of Science in Acupuncture & Traditional Chinese Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Acupuncture Clinical Apprentice Grants and herbal dispensary work-study",
        "fee": "$60",
        "tuition": "$16,200/year",
        "desc": "ACAHM-aligned professional degree covering meridian theory, acupuncture therapeutics, herbology formulations, and 900+ hours of hands-on clinical patient treatments in the campus teaching clinic.",
        "requirements": {"gpa": "60+ semester credits of undergraduate study including general biology, chemistry, and psychology", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal healthcare vocation statement", "references": "Two professional or academic letters"},
        "source": "https://www.scsuniversity.edu/academics/school-of-oriental-medicine"
      },
      {
        "title": "Bachelor of Science in Business Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Institutional Academic Achievement Awards up to $2,000",
        "fee": "$40",
        "tuition": "$11,200/year",
        "desc": "Foundational curriculum developing competencies in managerial accounting, marketing analytics, business law, entrepreneurship, and international trade.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 65+ or IELTS 5.5", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.scsuniversity.edu/academics/school-of-business/bachelor-of-science"
      },
      {
        "title": "Master of Science in Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "SCSU Technology Innovation Awards up to $3,000",
        "fee": "$50",
        "tuition": "$13,800/year",
        "desc": "Applied graduate computing curriculum exploring database architecture, enterprise cybersecurity, cloud systems design, and Python-based data analytics.",
        "requirements": {"gpa": "Bachelor's degree in IT, computer science, or related quantitative field with 2.75+ GPA", "ielts": "TOEFL 71+ or IELTS 6.0", "gre": "Exempt", "papers": "Technical statement of purpose", "references": "Two recommendations"},
        "source": "https://www.scsuniversity.edu/academics/school-of-it"
      },
      {
        "title": "Doctor of Acupuncture and Oriental Medicine (DAOM)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Doctoral Research Fellowship Waivers and clinical preceptorship stipends",
        "fee": "$75",
        "tuition": "$18,500/year",
        "desc": "Terminal clinical doctorate for licensed acupuncturists focusing on integrative pain medicine, oncology support, classical pulse diagnosis, and clinical outcome research.",
        "requirements": {"gpa": "Master's degree in Acupuncture/Oriental Medicine and active state acupuncture licensure", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Doctoral clinical inquiry proposal", "references": "Three clinical references"},
        "source": "https://www.scsuniversity.edu/academics/daom"
      },
      {
        "title": "Integrative East-West Pain Management Clinical Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "$3,200 clinical research stipend and specialized herbal pharmacopeia materials grant",
        "fee": "$0",
        "tuition": "Provided through SCSU Oriental Medicine Clinical Research Center",
        "desc": "Postgraduate clinical fellowship investigating acupuncture analgesic mechanisms, electroacupuncture for chronic lower back pain, and herbal formula synergy in multi-ethnic populations.",
        "requirements": {"gpa": "Enrolled DAOM or advanced master's student with 3.2+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Clinical protocol proposal", "references": "Two clinical faculty endorsements"},
        "source": "https://www.scsuniversity.edu/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Samuel Lee",
        "role": "President & Dean of Institutional Affairs",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Lee provides executive academic leadership at Southern California State University, specializing in higher education institutional governance, international university partnerships, and business pedagogy."
      },
      {
        "name": "Dr. David Chen",
        "role": "Dean & Professor of Oriental Medicine",
        "department": "School of Oriental Medicine",
        "subject": "biology",
        "bio": "Dr. Chen is a licensed acupuncturist and herbalist with over 25 years of clinical experience, researching neurological acupuncture therapeutics and classical Shanghan Lun botanical formulas."
      },
      {
        "name": "Dr. Linda Wong",
        "role": "Chair & Professor of the School of Business",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Wong conducts research on cross-border supply chain logistics between California and Asia, SME corporate governance, and intercultural marketing strategies."
      }
    ]
  },

  # 18. Southern Connecticut State University (Row 956)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Connecticut State University",
    "shortName": "Southern Connecticut",
    "slug": "southern-connecticut-state-university-new-haven",
    "location": "New Haven, Connecticut, United States",
    "website": "https://www.southernct.edu",
    "sourceRow": 956,
    "stats": {"established": "1893", "students": "8,800+", "international": "3%", "faculty": "430+"},
    "heroSummary": "Southern Connecticut State University (SCSU) is a public comprehensive university located on an urban-suburban 168-acre campus in historic New Haven, Connecticut. Known for its strong commitment to social justice, environmental sustainability, and STEM innovation, SCSU is acclaimed for its Werth Center for Coastal and Marine Studies, high-tech science building with optics and nanotechnology suites, accredited school of business, and leading school of nursing.",
    "academicOverview": "SCSU comprises the College of Health and Human Services, the College of Arts and Sciences, the School of Business, and the College of Education. The university operates the state-of-the-art Academic Science and Laboratory Building, the Center for Nanotechnology, and coastal research vessels studying Long Island Sound marine environments.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.3), curriculum rigor, and optional SAT/ACT scores. Graduate admissions require an accredited bachelor's degree with a 3.0+ minimum GPA, official transcripts, department-specific writing essays, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Science in Applied Physics - Nanotechnology",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate research assistantships providing full tuition waiver and $16,000 academic year stipend",
        "fee": "$50",
        "tuition": "$10,800/year in-state, $24,600/year out-of-state",
        "desc": "Hands-on physics graduate program utilizing the SCSU Center for Nanotechnology cleanrooms for atomic force microscopy, thin-film deposition, quantum dot synthesis, and nano-materials characterization.",
        "requirements": {"gpa": "Bachelor's degree in physics, chemistry, or engineering with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores recommended", "papers": "Statement of research interests in physics/nanotech", "references": "Three letters of academic recommendation"},
        "source": "https://www.southernct.edu/academics/physics/applied-physics-ms"
      },
      {
        "title": "Master of Science in Coastal Marine Science (Werth Center)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Werth Center for Coastal and Marine Studies Graduate Fellowships ($15,000/year + tuition)",
        "fee": "$50",
        "tuition": "$10,800/year in-state, $24,600/year out-of-state",
        "desc": "Field-intensive graduate curriculum conducting oceanographic research on coastal sediment geochemistry, microplastic contamination, marsh restoration, and shellfish aquaculture in Long Island Sound.",
        "requirements": {"gpa": "Bachelor's degree in marine science, environmental science, or biology with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "General GRE", "papers": "Statement of oceanographic research intent", "references": "Two science faculty letters"},
        "source": "https://www.southernct.edu/werth-center"
      },
      {
        "title": "Master of Social Work (MSW)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Behavioral Health Grants up to $10,000",
        "fee": "$50",
        "tuition": "$11,200/year in-state, $25,200/year out-of-state",
        "desc": "CSWE-accredited master's program with concentrations in clinical practice or community organization, providing 1,000+ hours of supervised fieldwork across New Haven social service agencies and healthcare centers.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and liberal arts foundation", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Social work values essay and autobiographical statement", "references": "Three professional/academic recommendations"},
        "source": "https://www.southernct.edu/academics/social-work/msw"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SCSU Foundation Healthcare Scholarships and Yale New Haven Health Tuition Awards",
        "fee": "$50",
        "tuition": "$12,400/year in-state, $26,100/year out-of-state",
        "desc": "CCNE-accredited undergraduate nursing program featuring intensive simulation in the new Health and Human Services Building and acute clinical rotations at Yale New Haven Hospital.",
        "requirements": {"gpa": "3.0+ prerequisite GPA in chemistry, anatomy, physiology, and microbiology", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing admissions essay and TEAS score", "references": "Two academic recommendations"},
        "source": "https://www.southernct.edu/academics/nursing/bsn"
      },
      {
        "title": "Master of Business Administration (MBA) - Sustainability Focus",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "School of Business Graduate Merit Awards up to $4,000",
        "fee": "$50",
        "tuition": "$685/credit hour",
        "desc": "AACSB-accredited business degree integrating ESG metrics, sustainable enterprise modeling, supply chain decarbonization, and corporate financial ethics in a modern net-zero-designed business building.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA from an accredited institution", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE waived for GPA > 3.0", "papers": "Statement of purpose", "references": "Two professional references"},
        "source": "https://www.southernct.edu/academics/business/mba"
      },
      {
        "title": "Long Island Sound Estuarine & Coastal Geochemistry Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,500 summer stipend, research vessel marine sampling allowance, and laboratory analytical support",
        "fee": "$0",
        "tuition": "Endowed by the Werth Center for Coastal and Marine Studies",
        "desc": "Interdisciplinary fellowship conducting coastal sediment core sampling, heavy metal bioaccumulation analysis, and hypoxia mapping across the Long Island Sound estuary.",
        "requirements": {"gpa": "Enrolled in marine science, environmental science, or chemistry with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Coastal research project proposal", "references": "Faculty mentor letter"},
        "source": "https://www.southernct.edu/werth-center/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Dwayne Smith",
        "role": "Interim President & Educational Scholar",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Smith serves as Interim President of Southern Connecticut State University, with extensive leadership experience across urban public higher education, student equity, and workforce alignment."
      },
      {
        "name": "Dr. Vincent Breslin",
        "role": "Co-Director of Werth Center & Professor of Marine and Environmental Sciences",
        "department": "Werth Center for Coastal and Marine Studies & Department of Environment, Geography, and Marine Sciences",
        "subject": "environment",
        "bio": "Dr. Breslin is a coastal geochemist researching trace metal dynamics in marine sediments, oyster reef restoration efficacy, and plastic pollution degradation in Long Island Sound."
      },
      {
        "name": "Dr. Christine Broadbridge",
        "role": "Executive Director of STEM Innovation & Professor of Physics",
        "department": "Center for Nanotechnology & Department of Physics",
        "subject": "physics",
        "bio": "Dr. Broadbridge directs the Center for Nanotechnology, conducting research in thin-film materials characterization, nanomaterials surface science, and national STEM education inclusion."
      }
    ]
  },

  # 19. Southern Illinois University Carbondale (Row 957)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Illinois University Carbondale",
    "shortName": "SIU Carbondale",
    "slug": "southern-illinois-university-carbondale",
    "location": "Carbondale, Illinois, United States",
    "website": "https://siu.edu",
    "sourceRow": 957,
    "stats": {"established": "1869", "students": "11,500+", "international": "8%", "faculty": "780+"},
    "heroSummary": "Southern Illinois University Carbondale (SIU Carbondale) is a flagship public doctoral research university situated among the rolling hills of the Shawnee National Forest in Carbondale, Illinois. Classified among R2: Doctoral Universities with High Research Activity, SIU is celebrated nationwide for its nationally ranked aviation and automotive technology programs, premier School of Law, innovative Fermentation Science Institute, and pioneering forestry and wildlife ecology research.",
    "academicOverview": "SIU encompasses the College of Agricultural, Life, and Physical Sciences, the College of Engineering, Computing, Technology, and Mathematics, the College of Health and Human Sciences, the College of Liberal Arts, and the School of Law. Key research centers include the Fermentation Science Institute, the Transportation Education Center (TEC) at Southern Illinois Airport, and the Advanced Coal and Energy Research Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.75 for guaranteed admission) and college-prep coursework. Graduate programs require an accredited bachelor's degree with a minimum 2.70 GPA (3.0 for doctoral programs), official GRE scores (departmental requirement), academic statement of purpose, and three letters of reference.",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Cyber Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate assistantships offering full tuition waiver and $22,000 - $26,000 annual living stipends",
        "fee": "$65",
        "tuition": "Covered 100% by doctoral assistantships",
        "desc": "Rigorous doctoral research program exploring deep reinforcement learning, intelligent autonomous robotics, medical image analytics, and secure cloud-edge computing architectures.",
        "requirements": {"gpa": "Master's or bachelor's in CS or engineering with 3.25+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE general scores required", "papers": "Detailed statement of research interests and curriculum vitae", "references": "Three letters of academic recommendation"},
        "source": "https://cs.siu.edu/graduate/phd-computer-science.php"
      },
      {
        "title": "Juris Doctor (J.D.) - SIU School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Dean's Merit Scholarships covering up to 100% of law tuition",
        "fee": "$0 (via LSAC)",
        "tuition": "$21,500/year in-state, $25,200/year out-of-state",
        "desc": "ABA-accredited law degree renowned for health law, public interest advocacy, natural resources law, and extensive clinical legal experiential programs serving southern Illinois.",
        "requirements": {"gpa": "Accredited bachelor's degree with competitive undergraduate GPA and LSAT score", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "LSAT or GRE accepted", "papers": "Personal statement and legal resume", "references": "Two academic/professional letters"},
        "source": "https://law.siu.edu/academics/degree-programs/jd/"
      },
      {
        "title": "Ph.D. in Forestry - Forest Hydrology & Watershed Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "USDA Forest Service and university research fellowships ($24,000/year + full tuition waiver)",
        "fee": "$65",
        "tuition": "Covered by assistantships",
        "desc": "Doctoral research degree utilizing the surrounding Shawnee National Forest and Crab Orchard National Wildlife Refuge for forest soil carbon modeling, riparian ecology, and watershed protection.",
        "requirements": {"gpa": "MS in forestry, natural resources, or environmental science with 3.2+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE required", "papers": "Doctoral research proposal and CV", "references": "Three academic references"},
        "source": "https://forestry.siu.edu/graduate/phd-forestry.php"
      },
      {
        "title": "Bachelor of Science in Aviation Technologies",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Aviation Alumni Endowed Scholarships and Boeing Technical Grants",
        "fee": "$40",
        "tuition": "$10,370/year in-state, $16,590/year out-of-state",
        "desc": "FAA Part 147-certified curriculum based at the world-class Transportation Education Center, covering turbine engine maintenance, advanced avionics electronics, aircraft structures, and composite repair.",
        "requirements": {"gpa": "High school GPA 2.75+ with algebra and physics coursework", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://aviation.siu.edu/technologies/"
      },
      {
        "title": "Ph.D. in Applied Physics - Quantum Materials & Surface Science",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Department of Physics research assistantships with full tuition remission and $24,000 stipend",
        "fee": "$65",
        "tuition": "Covered by assistantships",
        "desc": "Doctoral program exploring spintronics, magnetic semiconductors, graphene heterostructures, and synchrotron radiation spectroscopy of energy-storage materials.",
        "requirements": {"gpa": "BS or MS in physics or related field with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Physics GRE recommended", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://physics.siu.edu/graduate/phd-applied-physics.php"
      },
      {
        "title": "Fermentation Science & Renewable Bioenergy Research Fellowship",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 summer research stipend and pilot fermentation facility operational access",
        "fee": "$0",
        "tuition": "Endowed by the SIU Fermentation Science Institute",
        "desc": "Interdisciplinary fellowship conducting research on yeast metabolic engineering, anaerobic digestion biogas optimization, and novel bio-based chemical synthons.",
        "requirements": {"gpa": "Enrolled graduate or upper-division student in fermentation science, chemistry, microbiology, or engineering with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Fermentation research project abstract", "references": "Two faculty letters"},
        "source": "https://fermentation.siu.edu/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Austin A. Lane",
        "role": "Chancellor & Higher Education Leader",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Lane is the 12th Chancellor of SIU Carbondale, championing the Imagine 2030 strategic plan, major research funding increases, aviation fleet expansion, and rural healthcare access."
      },
      {
        "name": "Dr. Camille Davidson",
        "role": "Dean & Professor of Law",
        "department": "School of Law",
        "subject": "social-sciences",
        "bio": "Dean Davidson is an accomplished legal educator and former magistrate, specializing in health law, bioethics, wills and trusts, and legal pedagogy diversity."
      },
      {
        "name": "Dr. Matt McCarroll",
        "role": "Director of Fermentation Science Institute & Professor of Chemistry",
        "department": "Fermentation Science Institute & School of Chemical and Biochemical Sciences",
        "subject": "chemistry",
        "bio": "Dr. McCarroll leads the Fermentation Science Institute, conducting research in fluorescence spectroscopy, chiral chemical separations, and industrial brewing/distilling chemistry."
      }
    ]
  },

  # 20. Southern Maine Community College (Row 958)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Maine Community College",
    "shortName": "SMCC Maine",
    "slug": "southern-maine-community-college-south-portland",
    "location": "South Portland, Maine, United States",
    "website": "https://www.smccme.edu",
    "sourceRow": 958,
    "stats": {"established": "1946", "students": "6,000+", "international": "3%", "faculty": "280+"},
    "heroSummary": "Southern Maine Community College (SMCC) is the largest and oldest community college in Maine, occupying a magnificent coastal campus on the shores of Casco Bay at historic Spring Point Ledge in South Portland, with a branch campus in Brunswick at the former naval air station. Acclaimed for marine science, precision composites, nursing, cybersecurity, and culinary arts, SMCC serves as a vital economic lifeline for northern New England.",
    "academicOverview": "SMCC features unmatched marine facilities including oceanfront docks, marine research vessels, modern welding and CNC machine tooling suites, a composites manufacturing center in Brunswick, and high-fidelity nursing simulation labs. The college offers over 40 degree and certificate programs with seamless transfer agreements to top four-year universities.",
    "researchAdmissions": "SMCC maintains an open-door admissions policy for individuals with a high school diploma or equivalent. Competitive allied health programs (Nursing, Radiography, Respiratory Therapy) require specialized secondary school math/science prerequisites, background checks, and departmental placement examinations.",
    "opps": [
      {
        "title": "Associate of Applied Science in Marine Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Maine Free College Tuition eligibility and Casco Bay Oceanographic Scholarships up to $2,500",
        "fee": "$0",
        "tuition": "$3,840/year in-state, $7,680/year out-of-state",
        "desc": "Coastal oceanography and marine ecology program utilizing SMCC's oceanfront pier and research boats for ocean water quality sampling, lobster fishery biology, and tidal salt marsh monitoring.",
        "requirements": {"gpa": "High school diploma with biology and algebra", "ielts": "TOEFL 65+ or IELTS 5.5", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.smccme.edu/academics/pathways/science-technology/marine-science/"
      },
      {
        "title": "Associate of Science in Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "MaineHealth and Northern Light Health Nursing Sponsorships covering tuition and providing post-grad hiring bonuses",
        "fee": "$0",
        "tuition": "$4,200/year in-state, $8,400/year out-of-state",
        "desc": "ACEN-accredited two-year nursing degree providing high-fidelity simulation and clinical acute care hospital rotations at Maine Medical Center and regional medical complexes.",
        "requirements": {"gpa": "2.75+ prerequisite GPA in anatomy, physiology, and college algebra, acceptable Kaplan nursing exam", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing application questionnaire", "references": "Two professional/academic references"},
        "source": "https://www.smccme.edu/academics/pathways/health-sciences/nursing/"
      },
      {
        "title": "Associate of Applied Science in Precision Machining & Manufacturing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "Haas Technical Education Community Tool Grants up to $3,000",
        "fee": "$0",
        "tuition": "$3,840/year in-state, $7,680/year out-of-state",
        "desc": "Hands-on machining curriculum mastering multi-axis CNC milling, Swiss turning, EDM wire cutting, Mastercam CAD/CAM programming, and geometric dimensioning and tolerancing (GD&T).",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 60+", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.smccme.edu/academics/pathways/manufacturing-trades/precision-machining-manufacturing/"
      },
      {
        "title": "Associate of Applied Science in Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "STEM First Tech Scholarships up to $2,000",
        "fee": "$0",
        "tuition": "$3,840/year in-state, $7,680/year out-of-state",
        "desc": "NSA-designated curriculum developing competencies in network packet analysis, vulnerability management, defensive firewall configuration, Linux administration, and ethical hacking.",
        "requirements": {"gpa": "High school diploma with algebra proficiency", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.smccme.edu/academics/pathways/information-technology/cyber-security/"
      },
      {
        "title": "Associate of Applied Science in Composites Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-30",
        "deadlineText": "April 30, 2027",
        "funding": "Maine Technology Institute Composites Workforce Scholarships",
        "fee": "$0",
        "tuition": "$3,840/year in-state, $7,680/year out-of-state",
        "desc": "Advanced materials degree based at the Brunswick Midcoast Campus, training technicians in vacuum-assisted resin transfer molding (VARTM), prepreg autoclave curing, and ultrasonic non-destructive testing for marine and aerospace industries.",
        "requirements": {"gpa": "High school diploma with mechanical aptitude", "ielts": "TOEFL 60+", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.smccme.edu/academics/pathways/manufacturing-trades/composites-engineering-technology/"
      },
      {
        "title": "Casco Bay Coastal Oceanography & Marine Technology Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$3,200 summer field research stipend and oceanographic sampling vessel time",
        "fee": "$0",
        "tuition": "Provided through SMCC Marine Science Department",
        "desc": "Summer experiential fellowship monitoring marine invasive green crab populations, ocean acidification impacts on soft-shell clam beds, and microplastic concentrations in Casco Bay.",
        "requirements": {"gpa": "Enrolled student in marine science or biology with 3.0+ GPA", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Marine field project proposal", "references": "One marine faculty endorsement"},
        "source": "https://www.smccme.edu/academics/pathways/science-technology/marine-science/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kristen Miller",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Miller leads Southern Maine Community College, driving workforce partnerships with Maine shipbuilding, biotechnology, and healthcare sectors while expanding dual-enrollment access."
      },
      {
        "name": "Prof. Brian Tarbox",
        "role": "Department Chair & Professor of Marine Science",
        "department": "Department of Marine Science",
        "subject": "environment",
        "bio": "Prof. Tarbox is an oceanographer and marine biologist researching Casco Bay benthic communities, coastal water circulation, and hands-on collegiate marine technician pedagogy."
      },
      {
        "name": "Prof. Norma Willis",
        "role": "Director of Nursing Education",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Prof. Willis directs the ACEN-accredited nursing program, focusing on clinical simulation mastery, acute hospital preceptorship models, and rural nursing retention in Maine."
      }
    ]
  },

  # 21. Southern New Hampshire University (Row 959)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern New Hampshire University",
    "shortName": "SNHU",
    "slug": "southern-new-hampshire-university-manchester",
    "location": "Manchester, New Hampshire, United States",
    "website": "https://www.snhu.edu",
    "sourceRow": 959,
    "stats": {"established": "1932", "students": "160,000+", "international": "5%", "faculty": "3,500+"},
    "heroSummary": "Southern New Hampshire University (SNHU) is an accredited private, nonprofit university founded in 1932, operating an expansive 300-acre residential campus in Manchester, New Hampshire, alongside one of the largest and most innovative online higher education ecosystems in the world. Acclaimed by Fast Company as one of the world's most innovative organizations, SNHU is renowned for its low tuition model, competency-based learning, College of Engineering, Technology, and Aeronautics (CETA), and industry-aligned STEM curricula.",
    "academicOverview": "SNHU comprises the School of Business, the College of Engineering, Technology, and Aeronautics (CETA), the College of Liberal Arts, and the School of Arts, Sciences, and Education. Its Manchester campus features the 67,000-square-foot CETA building with wind tunnels, robotics labs, automated flight simulators, and cyber defense war rooms.",
    "researchAdmissions": "SNHU maintains an accessible, rolling admissions policy for online and campus students. Campus undergraduate applicants submit high school transcripts (test-optional). Graduate applicants require an accredited bachelor's degree with a minimum 2.75 GPA (provisional admission available for 2.0-2.74), official transcripts, and no GMAT/GRE requirements.",
    "opps": [
      {
        "title": "Master of Science in Data Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "SNHU Online Graduate Merit Waivers and corporate partner tuition discounts up to 15%",
        "fee": "$0",
        "tuition": "$637/credit hour ($19,110 total degree tuition)",
        "desc": "Industry-aligned graduate degree developing expert proficiency in Python, SQL, Tableau, machine learning models, predictive data mining, and enterprise business intelligence visualization.",
        "requirements": {"gpa": "Accredited bachelor's degree with 2.75+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE not required", "papers": "Statement of analytics goals", "references": "Not required"},
        "source": "https://www.snhu.edu/online-degrees/masters/ms-in-data-analytics"
      },
      {
        "title": "Bachelor of Science in Aeronautical Engineering (CETA)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "SNHU Presidential Merit Scholarships up to $14,000/year and CETA STEM Awards",
        "fee": "$0",
        "tuition": "$15,450/year (residential campus rate)",
        "desc": "Residential engineering program in Manchester featuring hands-on subsonic and supersonic wind tunnel testing, propulsion design, flight dynamics, and aerospace composite structures.",
        "requirements": {"gpa": "High school GPA 3.0+ with calculus and physics", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "General application essay", "references": "One teacher or counselor recommendation"},
        "source": "https://www.snhu.edu/admission/academic-catalogs#/programs/ByVp3xWtb"
      },
      {
        "title": "Master of Science in Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "DoD Cyber Scholarship Program and SNHU Technology Grants",
        "fee": "$0",
        "tuition": "$637/credit hour",
        "desc": "NSA-designated CAE-CD graduate curriculum focusing on enterprise penetration testing, cloud security governance, incident response orchestration, and defensive security architectures.",
        "requirements": {"gpa": "Bachelor's degree in STEM or IT with 2.75+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of professional purpose", "references": "Not required"},
        "source": "https://www.snhu.edu/online-degrees/masters/ms-in-cyber-security"
      },
      {
        "title": "Master of Business Administration (MBA) - Operations & Supply Chain",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Military and First Responder Tuition Grants and SNHU Alumni Scholarships",
        "fee": "$0",
        "tuition": "$637/credit hour ($19,110 total degree tuition)",
        "desc": "ACBSP-accredited accelerated 30-credit MBA preparing executive leaders in supply chain resilience, global logistics procurement, Lean Six Sigma methodologies, and strategic corporate finance.",
        "requirements": {"gpa": "Accredited bachelor's degree with 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Application form", "references": "Not required"},
        "source": "https://www.snhu.edu/online-degrees/masters/mba"
      },
      {
        "title": "Bachelor of Science in Game Programming and Development",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Creative Technology Talent Awards up to $10,000/year",
        "fee": "$0",
        "tuition": "$15,450/year (campus) or $330/credit (online)",
        "desc": "Comprehensive curriculum mastering C++, C#, Unreal Engine, Unity, 3D physics engines, real-time shaders, and multiplayer networked game architecture.",
        "requirements": {"gpa": "High school diploma with mathematics aptitude", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://www.snhu.edu/online-degrees/bachelors/bs-in-game-programming-and-development"
      },
      {
        "title": "CETA Autonomous Aerial Systems & Robotics Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,000 project stipend and robotics fabrication laboratory funding",
        "fee": "$0",
        "tuition": "Endowed by the College of Engineering, Technology, and Aeronautics",
        "desc": "Undergraduate research fellowship investigating autonomous swarm drone collision avoidance, computer vision SLAM navigation, and 3D-printed lightweight carbon fiber airfoil optimization.",
        "requirements": {"gpa": "Enrolled CETA engineering or computing student with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Autonomous systems research proposal", "references": "CETA engineering faculty endorsement"},
        "source": "https://www.snhu.edu/about-us/ceta/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Lisa Marsh Ryerson",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Ryerson serves as President of Southern New Hampshire University, a visionary national educator advocating for higher education affordability, competency-based learning, and socio-economic equity."
      },
      {
        "name": "Dr. Kimberly Blanchette",
        "role": "Executive Director of STEM & Computing",
        "department": "College of Engineering, Technology, and Aeronautics",
        "subject": "computer-science",
        "bio": "Dr. Blanchette coordinates online and campus STEM curriculum standards, researching digital learning modalities, cybersecurity workforce development, and computer science pedagogy."
      },
      {
        "name": "Dr. L. Dawn Boles",
        "role": "Associate Dean of Engineering and Aeronautics",
        "department": "College of Engineering, Technology, and Aeronautics (CETA)",
        "subject": "engineering",
        "bio": "Dr. Boles directs aeronautical engineering laboratories and student capstone innovation at CETA, specializing in aerodynamics, aircraft structural mechanics, and STEM inclusive design."
      }
    ]
  },

  # 22. Southern Oregon University (Row 960)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern Oregon University",
    "shortName": "Southern Oregon",
    "slug": "southern-oregon-university-ashland",
    "location": "Ashland, Oregon, United States",
    "website": "https://www.sou.edu",
    "sourceRow": 960,
    "stats": {"established": "1872", "students": "5,100+", "international": "3%", "faculty": "270+"},
    "heroSummary": "Southern Oregon University (SOU) is an acclaimed public liberal arts university located in Ashland, Oregon, in the foothills of the Siskiyou and Cascade mountain ranges. Renowned for its close artistic partnership with the Tony Award-winning Oregon Shakespeare Festival, SOU is also celebrated for environmental studies (surrounded by the Cascade-Siskiyou National Monument), outdoor adventure leadership, and sustainability initiatives, including being the first Bee Campus USA and committing to 100% renewable energy.",
    "academicOverview": "SOU comprises the School of Arts and Communication, the School of Business, Communication, and the Environment, the School of Education, and the School of Social Sciences. It features the Schneider Museum of Art, the Digital Media Center (in partnership with Rogue Valley PBS), modern forensic chemistry labs, and the SOU Sustainability Farm.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.50, average 3.4) and college-preparatory coursework on a test-optional basis. Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, personal statement, official transcripts, and program-specific letters of reference.",
    "opps": [
      {
        "title": "Master of Science in Environmental Education",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate assistantships offering full tuition remission and living stipends for outdoor educational leaders",
        "fee": "$60",
        "tuition": "$13,200/year in-state, $19,800/year out-of-state",
        "desc": "Nationally recognized cohort-based graduate degree combining environmental ecology, field natural history, community ecological curriculum design, and experiential teaching at the Deer Creek Center.",
        "requirements": {"gpa": "Bachelor's degree in science, education, or environmental studies with 3.0+ GPA", "ielts": "TOEFL 76+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of environmental educational philosophy", "references": "Three letters of recommendation"},
        "source": "https://sou.edu/academics/environmental-education-ms/"
      },
      {
        "title": "Bachelor of Science in Outdoor Adventure Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "SOU Raider Merit Scholarships up to $6,000/year",
        "fee": "$0",
        "tuition": "$10,740/year in-state, $29,910/year out-of-state",
        "desc": "Immersive program training outdoor expedition leaders, wilderness guides, and experiential educators in mountaineering, swiftwater rescue, avalanche safety, and environmental stewardship.",
        "requirements": {"gpa": "High school GPA 2.50+", "ielts": "TOEFL 76+ or IELTS 6.0", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://sou.edu/academics/outdoor-adventure-leadership/"
      },
      {
        "title": "Bachelor of Fine Arts in Theatre Arts - Acting & Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Oregon Shakespeare Festival Affiliated Theatre Talent Scholarships",
        "fee": "$0",
        "tuition": "$10,740/year in-state, $29,910/year out-of-state",
        "desc": "Elite conservatory-style theatre degree deeply integrated with the neighboring Oregon Shakespeare Festival, providing professional stage acting, classical verse, scenic lighting, and costume design training.",
        "requirements": {"gpa": "High school diploma and successful performance audition or technical design portfolio review", "ielts": "TOEFL 76+", "gre": "Exempt", "papers": "Theatre artistic goals essay", "references": "Two theatre/performing arts recommendations"},
        "source": "https://sou.edu/academics/theatre-arts/"
      },
      {
        "title": "Master of Science in Applied Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Computer Science Graduate Teaching Assistantships covering tuition waivers",
        "fee": "$60",
        "tuition": "$510/credit hour in-state, $695/credit hour out-of-state",
        "desc": "Applied graduate computing degree covering cloud systems architecture, full-stack software development, cybersecurity mitigation, and applied machine learning models.",
        "requirements": {"gpa": "Bachelor's degree in CS, math, or related field with 3.0+ GPA", "ielts": "TOEFL 76+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of computing interests", "references": "Two academic recommendations"},
        "source": "https://sou.edu/academics/computer-science-ms/"
      },
      {
        "title": "Bachelor of Science in Forensic Chemistry",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "STEM Discovery Grants and SOU Science Endowed Awards",
        "fee": "$0",
        "tuition": "$10,740/year in-state, $29,910/year out-of-state",
        "desc": "FEPAC-aligned curriculum preparing students for crime laboratory careers through hands-on GC-MS, FTIR spectroscopy, forensic toxicology, and trace evidence analysis in modern science labs.",
        "requirements": {"gpa": "High school GPA 2.75+ with strong chemistry and algebra coursework", "ielts": "TOEFL 76+", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://sou.edu/academics/chemistry/forensic-chemistry/"
      },
      {
        "title": "Cascade-Siskiyou National Monument Biodiversity & Wildfire Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,200 summer field research stipend and ecological field station lodging",
        "fee": "$0",
        "tuition": "Funded through SOU Division of Business, Communication, and the Environment",
        "desc": "Interdisciplinary fellowship investigating post-wildfire forest succession, drought-induced tree mortality, and pollinator network resilience in the Cascade-Siskiyou National Monument.",
        "requirements": {"gpa": "Enrolled student in environmental science or biology with 3.2+ GPA", "ielts": "TOEFL 76+", "gre": "Exempt", "papers": "Biodiversity research proposal", "references": "One environmental faculty recommendation"},
        "source": "https://sou.edu/academics/environmental-science/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rick Bailey",
        "role": "President & Strategic Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Bailey is the 31st President of Southern Oregon University, a retired U.S. Air Force officer championing campus solar energy self-sufficiency, student affordability, and community partnerships."
      },
      {
        "name": "Dr. Vincent Smith",
        "role": "Director & Professor of Environmental Studies",
        "department": "Division of Business, Communication, and the Environment",
        "subject": "environment",
        "bio": "Dr. Smith directs interdisciplinary environmental programs at SOU, researching agroecology, community sustainability planning, and campus climate resilience policies."
      },
      {
        "name": "Dr. John Roden",
        "role": "Professor of Biology & Tree Ring Researcher",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Roden is a plant ecophysiologist investigating stable isotope dendrochronology, forest canopy water use, and climate change impacts on Pacific Northwest conifer ecosystems."
      }
    ]
  },

  # 23. Southern University and A&M College (Row 961)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Southern University and A&M College",
    "shortName": "Southern University Baton Rouge",
    "slug": "southern-university-and-a-and-m-college-baton-rouge",
    "location": "Baton Rouge, Louisiana, United States",
    "website": "https://www.subr.edu",
    "sourceRow": 961,
    "stats": {"established": "1880", "students": "7,400+", "international": "3%", "faculty": "480+"},
    "heroSummary": "Southern University and A&M College (SUBR) is the historic flagship campus of the Southern University System—the only historically Black university system in the United States. Situated atop Scott's Bluff overlooking the Mississippi River in Baton Rouge, Louisiana, SUBR is an 1890 land-grant university globally recognized for its College of Sciences and Engineering, pioneering doctoral programs in science and math education, renowned 'Human Jukebox' marching band, and distinguished heritage of producing African American engineers, scientists, and agricultural leaders.",
    "academicOverview": "SUBR encompasses the College of Sciences and Engineering, the College of Agricultural, Family and Consumer Sciences, the College of Business, the College of Humanities and Interdisciplinary Studies, and the School of Nursing. Key facilities include the Pinchback Engineering Building, the Environmental Toxicology Research Laboratories, and the Southern University Agricultural Research and Extension Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core curriculum GPA (minimum 2.50) and ACT/SAT scores. Graduate admissions require an accredited bachelor's degree with a minimum 2.70 GPA (3.0 for doctoral programs), official GRE scores, department-specific research statement of purpose, and three letters of academic recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Science and Mathematics Education (SMED)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "National Science Foundation and departmental fellowships offering full tuition waivers and $24,000 annual stipends",
        "fee": "$25",
        "tuition": "Covered 100% by doctoral fellowships",
        "desc": "The first Ph.D. program in science and mathematics education established at an HBCU, preparing higher education researchers, STEM curriculum specialists, and educational policy leaders.",
        "requirements": {"gpa": "Master's degree in a STEM discipline or education with 3.25+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Statement of STEM education research philosophy and writing sample", "references": "Three letters of academic recommendation"},
        "source": "https://www.subr.edu/page/smed-phd-program"
      },
      {
        "title": "Ph.D. in Environmental Toxicology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "EPA and NIH research assistantships providing full tuition remission and $25,000 annual stipends",
        "fee": "$25",
        "tuition": "Covered by assistantships",
        "desc": "Interdisciplinary terminal doctorate investigating cellular toxicology, endocrine-disrupting chemicals, heavy metal bioaccumulation, and environmental justice in chemical industrial corridors along the Mississippi River.",
        "requirements": {"gpa": "BS or MS in chemistry, biology, or environmental science with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE general scores", "papers": "Toxicological research proposal and CV", "references": "Three academic references"},
        "source": "https://www.subr.edu/page/environmental-toxicology-phd"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Southern University Honors Merit Scholarships and ExxonMobil STEM Grants up to $8,000/year",
        "fee": "$20",
        "tuition": "$9,840/year in-state, $17,190/year out-of-state",
        "desc": "ABET-accredited degree providing rigorous preparation in thermodynamics, machine design, fluid mechanics, finite element analysis, and materials manufacturing in modern laboratories.",
        "requirements": {"gpa": "High school core GPA 2.75+ with trigonometry and physics", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.subr.edu/page/mechanical-engineering"
      },
      {
        "title": "Master of Science in Computer Science - Cyber Warfare",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Department of Defense HBCU Cyber Fellowships providing tuition waivers and $22,000 stipends",
        "fee": "$25",
        "tuition": "$9,840/year in-state, $17,190/year out-of-state",
        "desc": "Advanced computing program covering cryptography, defensive network telemetry, malware reverse engineering, and artificial intelligence for cyber threat detection.",
        "requirements": {"gpa": "Bachelor's degree in computer science or related STEM field with 2.7+ GPA", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "GRE scores required", "papers": "Statement of cyber research intent", "references": "Two recommendations"},
        "source": "https://www.subr.edu/page/computer-science-graduate"
      },
      {
        "title": "Bachelor of Science in Agricultural Sciences - Plant & Soil Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "USDA 1890 National Scholars Program covering full tuition, fees, room, and board",
        "fee": "$20",
        "tuition": "$9,840/year in-state, $17,190/year out-of-state",
        "desc": "Historic 1890 land-grant agricultural curriculum providing hands-on training in precision agronomy, soil microbiology, sustainable crop production, and urban farming.",
        "requirements": {"gpa": "High school core GPA 2.50+", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Application essay", "references": "Not required"},
        "source": "https://www.subr.edu/page/agricultural-sciences"
      },
      {
        "title": "Scott's Bluff Mississippi River Environmental Toxicology Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,500 summer stipend, laboratory chemical spectrometry access, and water sampling supplies",
        "fee": "$0",
        "tuition": "Provided by Southern University Environmental Toxicology Research Center",
        "desc": "Applied student fellowship collecting aquatic water and sediment samples from the lower Mississippi River basin to analyze pesticide runoff, industrial polyfluoroalkyl substances (PFAS), and endocrine disruptors.",
        "requirements": {"gpa": "Enrolled graduate or upper-division undergraduate student in chemistry, biology, or toxicology with 3.2+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Environmental toxicology proposal", "references": "Two science faculty endorsements"},
        "source": "https://www.subr.edu/research/environmental-toxicology"
      }
    ],
    "researchers": [
      {
        "name": "Dennis J. Shields",
        "role": "President-Chancellor, Southern University System",
        "department": "Office of the President-Chancellor",
        "subject": "social-sciences",
        "bio": "Dennis J. Shields serves as President-Chancellor of the Southern University System, leading historic campus infrastructure renewal, academic program expansion, and philanthropic fundraising."
      },
      {
        "name": "Dr. Patrick Mensah",
        "role": "Associate Dean for Research & Professor of Mechanical Engineering",
        "department": "College of Sciences and Engineering",
        "subject": "engineering",
        "bio": "Dr. Mensah directs advanced materials and thermal transport research at SUBR, specializing in friction stir welding, polymer nanocomposites, and finite element modeling for aerospace components."
      },
      {
        "name": "Dr. Rao Uppu",
        "role": "Professor of Environmental Toxicology & Chemistry",
        "department": "Department of Environmental Toxicology",
        "subject": "chemistry",
        "bio": "Dr. Uppu is an internationally recognized toxicologist researching reactive oxygen species, ozone-induced pulmonary damage, chemical carcinogens, and biochemical biomarkers of environmental toxicity."
      }
    ]
  }
]
