# scripts/make_b70_p1_chunk2.py
# Batch 70 Part 1 Chunk 2: Universities 9 to 15 (UT Knoxville, UT Martin, UT Southern, UTEP, UDC, Ozarks, UW Bothell)

chunk2 = [
  # 9. University of Tennessee (Row 1162)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Tennessee",
    "shortName": "UT Knoxville",
    "slug": "university-of-tennessee",
    "location": "Knoxville, Tennessee, United States",
    "website": "https://www.utk.edu",
    "sourceRow": 1162,
    "stats": {"established": "1794", "students": "36,300+", "international": "8%", "faculty": "2,100+"},
    "heroSummary": "The University of Tennessee, Knoxville (UT Knoxville / UTK) is the state of Tennessee's public flagship land-grant research university and an elite Carnegie R1 institution, founded in 1794. Partnering with the U.S. Department of Energy's Oak Ridge National Laboratory (ORNL)—the nation's premier science and energy national lab—UT Knoxville is internationally celebrated for advanced nuclear engineering, supercomputing, materials science, supply chain management, and forensic anthropology at the legendary 'Body Farm'.",
    "academicOverview": "UT Knoxville comprises 11 colleges including the Tickle College of Engineering, Haslam College of Business, College of Arts and Sciences, College of Veterinary Medicine, and the College of Law. Flagship research centers include the UT-Oak Ridge Innovation Institute (UT-ORII), the Forensic Anthropology Center, and the Reliability and Maintainability Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic rigor, core GPA, and leadership. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Nuclear Engineering - Reactor Physics & Nuclear Nonproliferation - Tickle College & ORNL",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full ORNL Joint Institute Graduate Fellowships $35,000/year plus complete tuition waiver",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Consistently ranked among the top four nuclear engineering doctoral programs in the nation, directly collaborating with Oak Ridge National Laboratory on advanced modular reactor design, radiation detection instrumentation, and nuclear fuel cycle safety.",
        "requirements": {"gpa": "BS or MS in nuclear engineering, physics, or related discipline with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing nuclear research alignment", "references": "Three academic recommendations"},
        "source": "https://ne.utk.edu/graduate-programs/phd-degree/"
      },
      {
        "title": "Ph.D. in Anthropology - Skeletal Biology & Forensic Taphonomy - Forensic Anthropology Center (Body Farm)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Departmental teaching and research assistantships $28,000/year plus full tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "The world's founding and most famous forensic anthropology program, utilizing the Anthropology Research Facility (the original 'Body Farm') and the Bass Donated Skeletal Collection to study postmortem decomposition kinetics, skeletal trauma, and bioarchaeology.",
        "requirements": {"gpa": "Bachelor's or master's degree in anthropology or biology with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://fac.utk.edu/"
      },
      {
        "title": "Ph.D. in Computer Science - Exascale Supercomputing & Heterogeneous Architecture - ICL & ORNL",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Innovative Computing Laboratory (ICL) Fellowships $34,000/year plus complete tuition coverage",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite high-performance computing doctorate at the Innovative Computing Laboratory (ICL) partnering with ORNL's Frontier exascale supercomputer to advance parallel linear algebra algorithms, GPU runtime libraries, and distributed deep learning.",
        "requirements": {"gpa": "BS in Computer Science, Computer Engineering, or Mathematics with GPA 3.4+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.eecs.utk.edu/academics/graduate/phd-cs/"
      },
      {
        "title": "Ph.D. in Supply Chain Management - Global Freight Resilience & Supply Network Risk - Haslam College",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full Haslam Doctoral Fellowships $32,000/year plus complete tuition waiver for 4 years",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Internationally renowned as a top global supply chain doctoral program, investigating omnichannel logistics networks, predictive inventory disruption modeling, freight transportation policy, and supplier relationship dynamics.",
        "requirements": {"gpa": "Bachelor's or master's degree with GPA 3.3+; business or quantitative background", "ielts": "TOEFL 90+", "gre": "GMAT or GRE required", "papers": "Research statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://haslam.utk.edu/supply-chain-management/phd/"
      },
      {
        "title": "Ph.D. in Materials Science and Engineering - Additive Manufacturing & Neutron Diffraction",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Manufacturing Demonstration Facility (MDF) Fellowships $33,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research conducted at the DOE Manufacturing Demonstration Facility and Spallation Neutron Source, utilizing in situ neutron scattering to analyze residual stress in 3D-printed superalloys.",
        "requirements": {"gpa": "BS in materials science, mechanical engineering, physics, or chemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://mbe.utk.edu/graduate-programs/"
      },
      {
        "title": "Doctor of Veterinary Medicine (DVM) - Comparative Veterinary Medicine & Zoological Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "College of Veterinary Medicine Institutional Merit Scholarships up to $15,000/year",
        "fee": "$75",
        "tuition": "$31,000/year (resident) / $58,000/year (non-resident)",
        "desc": "Comprehensive clinical veterinary doctorate featuring over 12 months of clinical rotations in the John and Ann Tickle Small Animal Hospital and Large Animal Hospital, avian and zoological medicine, and oncology.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+ with minimum 200 hours veterinary clinical experience", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "VMCAS personal essay", "references": "Three letters (including at least one licensed veterinarian)"},
        "source": "https://vetmed.tennessee.edu/academics/dvm-program/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jack Dongarra",
        "role": "Distinguished Professor Emeritus of Computer Science",
        "department": "Innovative Computing Laboratory (ICL) & Department of EECS",
        "subject": "computer-science",
        "bio": "Dr. Dongarra is the recipient of the ACM A.M. Turing Award (2021), creator of LINPACK, LAPACK, and MPI standards, leading benchmark evaluations for the world's TOP500 fastest supercomputers."
      },
      {
        "name": "Dr. Dawnie Wolfe Steadman",
        "role": "Director & Professor of Anthropology",
        "department": "Forensic Anthropology Center",
        "subject": "social-sciences",
        "bio": "Dr. Steadman directs the Forensic Anthropology Center ('Body Farm'), conducting research on postmortem interval estimation, skeletal trauma analysis, human rights forensic investigations, and bioarchaeology."
      },
      {
        "name": "Dr. Yilu Liu",
        "role": "Governor's Chair & Professor of Electrical Engineering",
        "department": "Department of Electrical Engineering and Computer Science & ORNL",
        "subject": "engineering",
        "bio": "Dr. Liu is a member of the National Academy of Engineering, pioneering the FNET/GridEye wide-area power grid monitoring system, synchrophasor analytics, and renewable grid resilience."
      }
    ]
  },

  # 10. University of Tennessee at Martin (Row 1163)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Tennessee at Martin",
    "shortName": "UT Martin",
    "slug": "university-of-tennessee-at-martin",
    "location": "Martin, Tennessee, United States",
    "website": "https://www.utm.edu",
    "sourceRow": 1163,
    "stats": {"established": "1900", "students": "6,800+", "international": "4%", "faculty": "380+"},
    "heroSummary": "The University of Tennessee at Martin (UT Martin / UTM) is a premier public comprehensive regional university located in Northwest Tennessee, established in 1900. Renowned for its dedicated 640-acre teaching and demonstration farm, veterinary health technology, agricultural business, mechanical engineering, and teacher education, UT Martin delivers high-impact experiential degrees within the UT system.",
    "academicOverview": "UT Martin encompasses five colleges: the College of Agriculture and Applied Sciences, College of Engineering and Natural Sciences, College of Business and Global Affairs, College of Education, Health, and Behavioral Sciences, and the College of Humanities and Fine Arts. The campus features the Ned Ray McWherter Agricultural Complex and the Latimer-Smith STEM Center.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school core GPA (minimum 2.7). Graduate admissions require an accredited bachelor's degree with a minimum 2.75 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Agriculture - Precision Agriculture Technology & Agronomy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Tennessee Farm Bureau and Agriculture Endowed Scholarships up to $8,000/year",
        "fee": "$30",
        "tuition": "$16,500/year (out-of-state) / $9,900/year (in-state)",
        "desc": "Hands-on agronomy program utilizing the 640-acre university farm, drone remote sensing of row crops, variable-rate fertilizer applicators, soil fertility mapping, and soybean pathology.",
        "requirements": {"gpa": "High school GPA 2.7+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Admissions application essay", "references": "One recommendation"},
        "source": "https://www.utm.edu/departments/agnr/precisionag.php"
      },
      {
        "title": "Bachelor of Science in Veterinary Health Technology - Clinical Animal Care",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Pre-Veterinary Talent Grants up to $6,000",
        "fee": "$30",
        "tuition": "$16,500/year",
        "desc": "AVMA-accredited veterinary health technology curriculum offering hands-on large and small animal clinical training in livestock anesthesia, radiology, clinical pathology, and surgical assisting.",
        "requirements": {"gpa": "High school GPA 2.7+ with high school biology and chemistry coursework", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Animal care statement of interest", "references": "Two recommendations"},
        "source": "https://www.utm.edu/departments/agnr/vethealth.php"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering - Manufacturing Automation - Latimer-Smith STEM Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Latimer Engineering Endowed Scholarships up to $10,000/year",
        "fee": "$30",
        "tuition": "$16,500/year",
        "desc": "ABET-accredited engineering program housed in the new Latimer-Smith STEM Center, featuring robotics automation cells, thermal-fluid wind tunnels, finite element stress analysis, and industrial capstone projects.",
        "requirements": {"gpa": "High school GPA 3.0+ with precalculus or calculus readiness", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Statement of purpose", "references": "One math/science teacher reference"},
        "source": "https://www.utm.edu/departments/engineering/me.php"
      },
      {
        "title": "Master of Science in Agriculture and Natural Resources (MSNR) - Agribusiness Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships $12,000/year plus tuition assistance",
        "fee": "$30",
        "tuition": "$14,000 total",
        "desc": "Online and cohort graduate curriculum focusing on commodity price hedging, agricultural trade policy, farm financial modeling, livestock economics, and supply chain management.",
        "requirements": {"gpa": "Bachelor's degree in agriculture, business, or related field with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of professional goals and resume", "references": "Two letters of recommendation"},
        "source": "https://www.utm.edu/departments/agnr/gradprogram.php"
      },
      {
        "title": "Bachelor of Science in Wildlife and Fisheries Biology - Wetland Habitat Conservation",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Tennessee Wildlife Resources Scholarships up to $5,000",
        "fee": "$30",
        "tuition": "$16,500/year",
        "desc": "Field biology curriculum partnering with Reelfoot Lake and the Tennessee National Wildlife Refuge, conducting waterfowl banding, electrofishing population surveys, and wetland habitat restoration.",
        "requirements": {"gpa": "High school GPA 2.7+ with science background", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.utm.edu/departments/agnr/wildlife.php"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Engineering & Database Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Achievement Awards up to $6,000/year",
        "fee": "$30",
        "tuition": "$16,500/year",
        "desc": "Comprehensive computing curriculum covering full-stack web architectures, mobile app design, relational database modeling, algorithms, and cybersecurity fundamentals.",
        "requirements": {"gpa": "High school GPA 2.7+ with algebra proficiency", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.utm.edu/departments/cs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jason Roberts",
        "role": "Professor of Animal Science & Director",
        "department": "Department of Agriculture, Geosciences, and Natural Resources",
        "subject": "biology",
        "bio": "Dr. Roberts investigates beef cattle reproduction efficiency, forage management in mid-South pastures, artificial insemination synchronization protocols, and livestock nutrition."
      },
      {
        "name": "Dr. Shadow Robinson",
        "role": "Professor of Physics & Dean",
        "department": "College of Engineering and Natural Sciences",
        "subject": "physics",
        "bio": "Dr. Robinson conducts research in theoretical nuclear physics, computational modeling of relativistic heavy-ion collisions, and innovative STEM curriculum development."
      },
      {
        "name": "Dr. Isaac Lepcha",
        "role": "Assistant Professor of Agronomy",
        "department": "Department of Agriculture, Geosciences, and Natural Resources",
        "subject": "biology",
        "bio": "Dr. Lepcha specializes in precision agriculture technologies, remote sensing imagery for crop nitrogen deficiency diagnosis, soil moisture sensors, and conservation tillage practices."
      }
    ]
  },

  # 11. University of Tennessee Southern (Row 1164)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Tennessee Southern",
    "shortName": "UT Southern",
    "slug": "university-of-tennessee-southern",
    "location": "Pulaski, Tennessee, United States",
    "website": "https://utsouthern.edu",
    "sourceRow": 1164,
    "stats": {"established": "1870", "students": "1,000+", "international": "4%", "faculty": "75+"},
    "heroSummary": "The University of Tennessee Southern (UT Southern), founded in 1870 as Martin Methodist College and joining the University of Tennessee system in 2021, is the primary public baccalaureate institution serving Southern Middle Tennessee in Pulaski. Celebrated for nursing and healthcare professions, business management, criminal justice, and interdisciplinary environmental biology, UT Southern provides personal mentorship paired with statewide UT system resources.",
    "academicOverview": "UT Southern delivers undergraduate and graduate education through four divisions: the Jeanette M. Travis School of Nursing and Health Sciences, Division of Business, Division of Mathematics and Sciences, and the Division of Humanities and Social Sciences. The campus is expanding healthcare simulation and agricultural education.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school GPA (minimum 2.5). Graduate nursing applicants require an accredited bachelor's degree with a minimum 3.0 GPA, unencumbered RN license, statement of purpose, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Nursing (BSN) - Rural Healthcare Practice - Travis School of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "UT Southern Rural Health Care Scholarships up to $10,000/year",
        "fee": "$30",
        "tuition": "$17,200/year (out-of-state) / $10,200/year (in-state)",
        "desc": "CCNE-accredited undergraduate nursing program featuring high-fidelity simulation labs, intensive clinical rotations across Southern Middle Tennessee hospitals, and rural health clinics.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+ with strong biology and chemistry grades", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Nursing admissions essay", "references": "Two recommendations"},
        "source": "https://utsouthern.edu/academics/nursing/"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare Operations & Strategic Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Division of Business Graduate Scholarships up to $5,000",
        "fee": "$30",
        "tuition": "$15,000 total",
        "desc": "Cohort-based executive MBA program addressing health systems budgeting, organizational behavior, regional supply chain logistics, and business analytics in rural communities.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://utsouthern.edu/academics/business/"
      },
      {
        "title": "Bachelor of Science in Biology - Conservation Biology & Aquatic Ecosystems",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Excellence Merit Grants up to $8,000/year",
        "fee": "$30",
        "tuition": "$17,200/year",
        "desc": "Field-oriented biology curriculum utilizing the Elk River basin and Duck River watershed—one of the most biologically diverse river systems in North America—to study fish taxonomy, freshwater mussels, and forest ecology.",
        "requirements": {"gpa": "High school GPA 2.5+ with science preparation", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One science recommendation"},
        "source": "https://utsouthern.edu/academics/math-sciences/"
      },
      {
        "title": "Bachelor of Science in Criminal Justice - Law Enforcement Administration & Corrections",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Public Service Scholarships up to $6,000/year",
        "fee": "$30",
        "tuition": "$17,200/year",
        "desc": "Practical criminal justice program covering constitutional criminal procedure, crisis intervention training, community corrections, forensic investigation basics, and juvenile justice.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://utsouthern.edu/academics/humanities-social-sciences/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity - Cyber Defense & Threat Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "UT System Cyber Initiative Grants up to $8,000/year",
        "fee": "$30",
        "tuition": "$17,200/year",
        "desc": "Undergraduate computing curriculum focusing on enterprise perimeter defenses, security information and event management (SIEM), digital incident response, and network security.",
        "requirements": {"gpa": "High school GPA 2.5+ with algebra background", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://utsouthern.edu/academics/math-sciences/"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Rural Behavioral Health Scholarships up to $6,000",
        "fee": "$30",
        "tuition": "$18,500 total",
        "desc": "Graduate clinical counseling program preparing licensed counselors in rural substance abuse treatment, family systems therapy, psychopharmacology principles, and clinical mental health diagnostics.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; psychology or human services background", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of counseling goals", "references": "Two professional references"},
        "source": "https://utsouthern.edu/academics/humanities-social-sciences/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Michelle Decker",
        "role": "Chair & Associate Professor of Nursing",
        "department": "Jeanette M. Travis School of Nursing",
        "subject": "biology",
        "bio": "Dr. Decker conducts clinical research on rural healthcare nursing retention, high-fidelity clinical simulation training, and cardiovascular health promotion in rural Tennessee communities."
      },
      {
        "name": "Dr. Shanna Hanes",
        "role": "Associate Professor of Biology",
        "department": "Division of Mathematics and Sciences",
        "subject": "biology",
        "bio": "Dr. Hanes investigates freshwater mussel conservation physiology, toxicological bioassays in aquatic macroinvertebrates, and ecological impacts of agricultural runoff in the Elk River."
      },
      {
        "name": "Dr. Ken Vickers",
        "role": "Professor of History & Division Chair",
        "department": "Division of Humanities and Social Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Vickers specializes in 19th and 20th century American Southern history, Civil War historiography in Middle Tennessee, and regional agrarian political economy."
      }
    ]
  },

  # 12. University of Texas at El Paso (Row 1166)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Texas at El Paso",
    "shortName": "UTEP",
    "slug": "university-of-texas-at-el-paso",
    "location": "El Paso, Texas, United States",
    "website": "https://www.utep.edu",
    "sourceRow": 1166,
    "stats": {"established": "1914", "students": "24,800+", "international": "8%", "faculty": "1,300+"},
    "heroSummary": "The University of Texas at El Paso (UTEP) is a premier Carnegie R1 public research university and America's leading Hispanic-serving doctoral institution, established in 1914. Situated on the U.S.-Mexico border against the Franklin Mountains, UTEP features distinctive Bhutanese architecture and is world-renowned for 3D additive manufacturing at the W.M. Keck Center, border health, aerospace propulsion, and biomedical sciences.",
    "academicOverview": "UTEP comprises nine colleges and schools: the College of Engineering, College of Science, College of Health Sciences, School of Nursing, School of Pharmacy, Woody L. Hunt College of Business, College of Liberal Arts, and College of Education. Flagship research centers include the W.M. Keck Center for 3D Innovation and the Aerospace Center.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate applicants. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Mechanical Engineering - 3D Printing & Additive Manufacturing - W.M. Keck Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "W.M. Keck Center Research Fellowships $32,000/year plus complete tuition waiver",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Operating one of the world's largest additive manufacturing university laboratories with over 60 commercial 3D printers, this elite doctorate pioneers electron beam melting, stereolithography of ceramics, and multi-material electronics printing.",
        "requirements": {"gpa": "BS or MS in mechanical, aerospace, materials, or manufacturing engineering with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with Keck Center labs", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/engineering/mechanical/academic-programs/phd-mechanical-engineering.html"
      },
      {
        "title": "Ph.D. in Aerospace Engineering - Rocket Propulsion & Lunar In-Situ Resource Utilization - Aerospace Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NASA and DoD Aerospace Research Fellowships $33,000/year plus full tuition remission",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research conducted at UTEP's Aerospace Center and Fabens rocket test facility, researching cryogenic liquid rocket engines, methane/LOX propulsion, hypersonic aerothermodynamics, and lunar lander regolith extraction.",
        "requirements": {"gpa": "BS in aerospace, mechanical, or electrical engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/aerospace/"
      },
      {
        "title": "Ph.D. in Biomedical Engineering - Smart Biomaterials & Point-of-Care Diagnostics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships $30,000/year plus full tuition coverage",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctoral program exploring 3D-bioprinted cartilage scaffolds, microfluidic lab-on-a-chip diagnostic sensors for infectious diseases, and biocompatible polymers for targeted drug release.",
        "requirements": {"gpa": "Degree in engineering, biology, or chemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research experience", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/engineering/bme/"
      },
      {
        "title": "Ph.D. in Geological Sciences - Environmental Geochemistry & Tectonics",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Teaching and Research Fellowships $28,000/year plus tuition waiver",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "Leveraging the desert Southwest and Rio Grande rift geology to study arid land soil salinization, isotope hydrology, copper-gold porphyry mineralization, and earthquake seismology.",
        "requirements": {"gpa": "BS or MS in geosciences, geology, or chemistry with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/science/geology/programs/phd-geology.html"
      },
      {
        "title": "Ph.D. in Borderlands History - Transnational Migration & Chicana/o History",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate teaching assistantships $24,000/year plus tuition remission",
        "fee": "$65",
        "tuition": "Covered by assistantship",
        "desc": "Preeminent historical doctorate exploring the U.S.-Mexico borderlands, labor migration movements, indigenous border histories, border militarization, and comparative imperialism.",
        "requirements": {"gpa": "Master's degree in history or humanities with GPA 3.4+; Spanish reading proficiency", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Historical research writing sample (20-25 pages) and statement of intent", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/liberal-arts/history/academic-programs/graduate/phd-program.html"
      },
      {
        "title": "Ph.D. in Computer Science - Cyber-Security & Software Verification",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "National Science Foundation CyberCorps Fellowships $34,000/year plus tuition coverage",
        "fee": "$65",
        "tuition": "Covered by fellowship",
        "desc": "NSA-designated doctoral program researching formal software verification, trustworthy machine learning, cloud identity access management, and secure smart infrastructure architectures.",
        "requirements": {"gpa": "BS or MS in Computer Science with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.utep.edu/cs/academic-programs/phd.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ryan Wicker",
        "role": "Professor of Mechanical Engineering & Director",
        "department": "W.M. Keck Center for 3D Innovation",
        "subject": "engineering",
        "bio": "Dr. Wicker is a world-renowned pioneer in 3D printing and additive manufacturing, investigating multi-material electron beam melting, high-temperature ceramic additive fabrication, and structural 3D electronics."
      },
      {
        "name": "Dr. Ahsan Choudhuri",
        "role": "Associate Vice President & Professor of Aerospace Engineering",
        "department": "Aerospace Center",
        "subject": "engineering",
        "bio": "Dr. Choudhuri directs the UTEP Aerospace Center, leading research on small spacecraft propulsion, oxy-combustion power cycles, hypersonic flight aerodynamics, and lunar in-situ propellant processing."
      },
      {
        "name": "Dr. Thomas E. Gill",
        "role": "Professor of Geological Sciences",
        "department": "Department of Earth, Environmental and Resource Sciences",
        "subject": "environment",
        "bio": "Dr. Gill investigates aeolian geomorphology, wind-blown mineral dust emissions from dry lake playas, atmospheric aerosol transport, and air quality impacts on borderland communities."
      }
    ]
  },

  # 13. University of the District of Columbia (Row 1169)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of the District of Columbia",
    "shortName": "UDC",
    "slug": "university-of-the-district-of-columbia",
    "location": "Washington, District of Columbia, United States",
    "website": "https://www.udc.edu",
    "sourceRow": 1169,
    "stats": {"established": "1851", "students": "3,800+", "international": "8%", "faculty": "310+"},
    "heroSummary": "The University of the District of Columbia (UDC) is the only public university in the nation's capital and the only urban land-grant historically Black university (HBCU) in the United States, established in 1851. Located in Washington, D.C., UDC is celebrated for urban sustainability and agriculture through CAUSES, the David A. Clarke School of Law (UDC Law) with its top-ranked clinical legal education, and biomedical engineering.",
    "academicOverview": "UDC encompasses six colleges and schools: the College of Agriculture, Urban Sustainability and Environmental Sciences (CAUSES), School of Engineering and Applied Sciences (SEAS), UDC David A. Clarke School of Law, College of Arts and Sciences, and the School of Business and Public Administration. UDC operates the Muirkirk Research Farm and the Center for Urban Resilience.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, transcripts, and GPA. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Clinical Social Justice & Public Interest Law - UDC David A. Clarke School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "UDC Law Public Interest Scholarships covering up to 100% of tuition",
        "fee": "$50",
        "tuition": "$18,500/year (D.C. resident) / $32,000/year (non-resident)",
        "desc": "Nationally recognized among the top five clinical law programs in the U.S., requiring every law student to complete over 700 hours of direct pro bono client representation across immigration, housing justice, and criminal defense clinics.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 85+", "gre": "LSAT/GRE required", "papers": "Personal statement detailing commitment to public interest law", "references": "Two letters of recommendation"},
        "source": "https://law.udc.edu/"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Cyber-Physical Systems & Urban AI - SEAS",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Full graduate research assistantships $30,000/year plus complete tuition waiver",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research addressing smart city IoT sensor networks, intelligent traffic control algorithms, cybersecurity for municipal water utilities, and assistive medical robotics.",
        "requirements": {"gpa": "BS or MS in Computer Science, Computer Engineering, or Electrical Engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and research proposal", "references": "Three letters of recommendation"},
        "source": "https://www.udc.edu/seas/phd-programs/"
      },
      {
        "title": "Master of Science in Urban Sustainability - Green Infrastructure & Food Security - CAUSES",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "USDA Urban Agriculture Graduate Fellowships up to $18,000/year",
        "fee": "$50",
        "tuition": "$16,500 total",
        "desc": "Housed at CAUSES, this program investigates rooftop aquaponics systems, urban food desert mitigation, urban forestry stormwater management, and sustainable micro-grid power distribution.",
        "requirements": {"gpa": "Bachelor's degree in environmental science, agriculture, biology, or urban planning with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of environmental interests", "references": "Two letters of recommendation"},
        "source": "https://www.udc.edu/causes/degrees-programs/master-of-science-in-urban-sustainability/"
      },
      {
        "title": "Master of Science in Water Resources Management - Urban Hydrology & Potomac Watershed",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "DC Water Resources Research Institute Assistantships $16,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Specialized hydrological research program studying urban stormwater runoff in the Anacostia and Potomac rivers, green roof retention efficiency, lead pipe contamination remediation, and wastewater treatment.",
        "requirements": {"gpa": "Undergraduate degree in science, engineering, or mathematics with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://www.udc.edu/causes/degrees-programs/master-of-science-in-water-resources-management/"
      },
      {
        "title": "Master of Science in Biomedical Engineering - Rehabilitation Biomechanics & Neural Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "SEAS Biomedical Engineering Fellowships up to $14,000/year",
        "fee": "$50",
        "tuition": "$18,000 total",
        "desc": "Interdisciplinary engineering master's addressing assistive robotic exoskeletons, human motion biomechanics, biomedical imaging processing, and wearable medical sensors.",
        "requirements": {"gpa": "BS in engineering, physics, or allied STEM field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two letters of recommendation"},
        "source": "https://www.udc.edu/seas/biomedical-engineering/"
      },
      {
        "title": "Bachelor of Science in Architecture - Sustainable Urban Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "National Organization of Minority Architects (NOMA) Scholarships up to $6,000",
        "fee": "$35",
        "tuition": "$19,500/year (out-of-state) / $9,800/year (D.C. resident)",
        "desc": "NAAB-accredited pre-professional architectural curriculum focusing on climate-resilient urban architecture, net-zero building envelopes, passive solar design, and community housing development in Washington, D.C.",
        "requirements": {"gpa": "High school GPA 2.5+ and visual art/design portfolio", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.udc.edu/causes/degrees-programs/bachelor-of-science-in-architecture/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sabine O'Hara",
        "role": "Distinguished Professor & Director of PhD Program",
        "department": "College of Agriculture, Urban Sustainability and Environmental Sciences (CAUSES)",
        "subject": "environment",
        "bio": "Dr. O'Hara conducts foundational research in ecological economics, urban food system resilience, localized water treatment technologies, and sustainable community economic development."
      },
      {
        "name": "Dr. Devdas Shetty",
        "role": "Dean & Professor of Mechanical Engineering",
        "department": "School of Engineering and Applied Sciences (SEAS)",
        "subject": "engineering",
        "bio": "Dr. Shetty specializes in mechatronics, autonomous unmanned systems, automated manufacturing inspection, and intellectual property development in biomedical devices."
      },
      {
        "name": "Dr. Tolessa Deksissa",
        "role": "Director & Professor of Water Resources",
        "department": "DC Water Resources Research Institute & CAUSES",
        "subject": "environment",
        "bio": "Dr. Deksissa investigates urban water quality dynamics, hydrodynamic contaminant transport modeling in the Anacostia River, stormwater green infrastructure performance, and environmental toxicology."
      }
    ]
  },

  # 14. University of the Ozarks (Row 1171)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of the Ozarks",
    "shortName": "Ozarks",
    "slug": "university-of-the-ozarks",
    "location": "Clarksville, Arkansas, United States",
    "website": "https://ozarks.edu",
    "sourceRow": 1171,
    "stats": {"established": "1834", "students": "850+", "international": "20%", "faculty": "70+"},
    "heroSummary": "The University of the Ozarks is a historic private Presbyterian university founded in 1834, nestled at the foothills of the scenic Ozark Mountains in Clarksville, Arkansas. Famed for pioneering the nation's first neurodiversity college support program (Jones Learning Center in 1971), Ozarks is equally renowned for exceptional undergraduate research in environmental science, marine biology, business, and art in an internationally diverse community.",
    "academicOverview": "The university provides undergraduate liberal arts and professional degrees across divisions of Natural Sciences and Mathematics, Social Sciences and Business, and Humanities and Fine Arts. The campus sits minutes from the Ozark National Forest, the Arkansas River, and the Big Piney Creek outdoor recreation corridor.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate applicants, evaluating high school GPA (minimum 2.5) and essay. International students submit TOEFL (minimum 71) or IELTS (minimum 6.0).",
    "opps": [
      {
        "title": "Bachelor of Science in Environmental Studies - Ozark Watersheds & Forest Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Ozarks Environmental Leadership Awards up to $15,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "Field-intensive curriculum utilizing the Ozark National Forest to study upland hardwood forest dynamics, karst spring water chemistry, black bear habitat corridors, and riverine ecosystem management.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions essay detailing environmental interest", "references": "One recommendation"},
        "source": "https://ozarks.edu/academics/programs/environmental-studies/"
      },
      {
        "title": "Bachelor of Science in Biology - Marine & Tropical Field Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Hurie Academic Excellence Scholarships up to $18,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "Undergraduate biology program featuring faculty-led research expeditions to coral reefs in Belize and the Florida Keys, investigating coral bleaching, mangrove ecosystem dynamics, and marine invertebrate physiology.",
        "requirements": {"gpa": "High school GPA 2.7+ with biology and chemistry", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Personal statement", "references": "One science teacher reference"},
        "source": "https://ozarks.edu/academics/programs/biology/"
      },
      {
        "title": "Bachelor of Science in Business Administration - International Management & Entrepreneurship",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Walton Family Foundation Regional Scholarships up to $12,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "IACBE-accredited business curriculum managing real-money student investment portfolios, corporate strategy case competitions, and international market expansion simulations.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://ozarks.edu/academics/programs/business-administration/"
      },
      {
        "title": "Bachelor of Arts in Art - Ceramic Sculpture & Digital Studio Art",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Stephens Art Talent Grants up to $8,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "Studio art degree conducted at the Stephens Art Center, teaching atmospheric wood kiln firing, stone carving, digital printmaking, and senior gallery exhibition curation.",
        "requirements": {"gpa": "High school GPA 2.5+ and portfolio of 10 artworks", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Artist statement", "references": "One letter of recommendation"},
        "source": "https://ozarks.edu/academics/programs/art/"
      },
      {
        "title": "Bachelor of Science in Health Science - Pre-Physical Therapy & Biomechanics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Pre-Health Professional Grants up to $12,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "Pre-professional human movement curriculum covering musculoskeletal gross anatomy, therapeutic exercise prescription, gait kinematics, and sports medicine clinical shadowing.",
        "requirements": {"gpa": "High school GPA 2.7+", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://ozarks.edu/academics/programs/health-science/"
      },
      {
        "title": "Bachelor of Science in Mathematics - Actuarial Analytics & Applied Computing",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Achievement Awards up to $10,000/year",
        "fee": "$30",
        "tuition": "$26,000/year",
        "desc": "Applied mathematics curriculum offering rigorous preparation for actuarial credentialing exams, statistical risk modeling, Python numerical computing, and linear programming.",
        "requirements": {"gpa": "High school GPA 2.7+ with precalculus or calculus readiness", "ielts": "TOEFL 71+", "gre": "N/A", "papers": "Admissions essay", "references": "One math teacher reference"},
        "source": "https://ozarks.edu/academics/programs/mathematics/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Frank Knight",
        "role": "Professor of Biology",
        "department": "Division of Natural Sciences and Mathematics",
        "subject": "biology",
        "bio": "Dr. Knight investigates marine invertebrate biology, coral reef community structure, mangrove detrital food webs, and field-based marine conservation biology."
      },
      {
        "name": "Dr. Derek Warren",
        "role": "Associate Professor of Biology",
        "department": "Division of Natural Sciences and Mathematics",
        "subject": "biology",
        "bio": "Dr. Warren specializes in stream fish ecology, examining reproductive life history strategies of darters and minnows in Ozark highland streams and anthropogenic thermal alteration impacts."
      },
      {
        "name": "Dr. Brett Stone",
        "role": "Associate Professor of Health Science",
        "department": "Division of Natural Sciences and Mathematics",
        "subject": "biology",
        "bio": "Dr. Stone conducts research in clinical biomechanics, functional movement screening in collegiate athletes, and pediatric physical literacy interventions in rural public schools."
      }
    ]
  },

  # 15. University of Washington Bothell (Row 1176)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Washington Bothell",
    "shortName": "UW Bothell",
    "slug": "university-of-washington-bothell",
    "location": "Bothell, Washington, United States",
    "website": "https://www.uwb.edu",
    "sourceRow": 1176,
    "stats": {"established": "1990", "students": "6,100+", "international": "9%", "faculty": "400+"},
    "heroSummary": "The University of Washington Bothell (UW Bothell) is a thriving public research university founded in 1990, co-located on a 128-acre campus in the Puget Sound tech corridor of Bothell, Washington. Famous for its restored 58-acre North Creek Wetland—one of the largest floodplain wetland restorations in the Pacific Northwest—UW Bothell is celebrated for computer science and software engineering, interactive media, nursing, and biomedical innovation.",
    "academicOverview": "UW Bothell spans five schools: the School of Science, Technology, Engineering & Mathematics (STEM), School of Interdisciplinary Arts & Sciences (IAS), School of Business, School of Nursing & Health Studies, and the School of Educational Studies. The university is deeply integrated with the Seattle tech ecosystem (Amazon, Microsoft, Nintendo).",
    "researchAdmissions": "Admissions are holistic through the Coalition or Common Application. Graduate applicants must hold an accredited bachelor's degree with a minimum 3.0 GPA, provide a statement of purpose, two to three letters of recommendation, and meet English proficiency criteria (TOEFL 92+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Master of Science in Computer Science & Software Engineering - Cloud Computing & AI - School of STEM",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Puget Sound Technology Industry Fellowships and graduate assistantships up to $20,000/year",
        "fee": "$85",
        "tuition": "$26,000/year",
        "desc": "Elite software engineering master's located in the Seattle tech corridor, focusing on distributed cloud architectures, deep learning computer vision, cybersecurity, and big data systems.",
        "requirements": {"gpa": "BS in computer science or related STEM field with GPA 3.3+", "ielts": "TOEFL 92+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Three letters of recommendation"},
        "source": "https://www.uwb.edu/stem/graduate/mscsse"
      },
      {
        "title": "Master of Science in Cybersecurity Engineering - Secure Cloud & IoT Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "National Science Foundation CyberCorps Fellowships covering tuition plus $34,000 stipend",
        "fee": "$85",
        "tuition": "$26,000/year",
        "desc": "NSA-designated cybersecurity engineering curriculum exploring cloud security orchestration, penetration testing, hardware cryptography, and embedded firmware protection.",
        "requirements": {"gpa": "BS in engineering, computer science, or physics with GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Two recommendations"},
        "source": "https://www.uwb.edu/stem/graduate/mscse"
      },
      {
        "title": "Master of Fine Arts in Creative Writing and Poetics - Experimental Prose & Digital Media - School of IAS",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate teaching assistantships covering tuition and annual living stipend",
        "fee": "$85",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary MFA emphasizing cross-genre writing, documentary poetics, digital media text installations, and experimental performance writing at the convergence of art and literature.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; creative manuscript (up to 20 pages prose or 10 poems)", "ielts": "TOEFL 92+", "gre": "GRE not required", "papers": "Statement of poetics and goals", "references": "Three letters of recommendation"},
        "source": "https://www.uwb.edu/ias/graduate/mfa"
      },
      {
        "title": "Master of Science in Electrical Engineering - Renewable Power Systems & Bio-MEMS",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of STEM Graduate Research Assistantships up to $22,000/year plus tuition remission",
        "fee": "$85",
        "tuition": "$26,000/year",
        "desc": "Cutting-edge graduate engineering program exploring smart grid power electronic controllers, microfluidic biosensors, wireless medical telemetry, and embedded FPGA system design.",
        "requirements": {"gpa": "BS in electrical engineering or allied engineering field with GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.uwb.edu/stem/graduate/msee"
      },
      {
        "title": "Bachelor of Science in Conservation and Restoration Science - North Creek Wetland Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Puget Sound Environmental Stewardship Scholarships up to $8,000/year",
        "fee": "$80",
        "tuition": "$40,500/year (out-of-state) / $12,600/year (resident)",
        "desc": "Living laboratory degree directly utilizing the 58-acre North Creek Wetland to research Pacific salmon stream restoration, urban wetland hydrology, wetland soil biogeochemistry, and crow roost behavioral ecology.",
        "requirements": {"gpa": "High school GPA 3.0+ with laboratory science preparation", "ielts": "TOEFL 92+", "gre": "N/A", "papers": "Coalition application essay", "references": "One recommendation"},
        "source": "https://www.uwb.edu/stem/undergraduate/conservation-restoration"
      },
      {
        "title": "Master of Nursing (MN) - Administrative Leadership & Community Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "School of Nursing & Health Studies Merit Awards up to $8,000",
        "fee": "$85",
        "tuition": "$19,500/year",
        "desc": "CCNE-accredited graduate nursing program preparing nurse executives and community health leaders in epidemiological health equity, clinical quality improvement, and healthcare systems policy.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.0+; active Washington state RN license", "ielts": "TOEFL 92+", "gre": "GRE not required", "papers": "Statement of nursing leadership goals", "references": "Three professional references"},
        "source": "https://www.uwb.edu/nhs/mn"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kelvin Sung",
        "role": "Professor of Computer Science & Software Engineering",
        "department": "School of Science, Technology, Engineering & Mathematics",
        "subject": "computer-science",
        "bio": "Dr. Sung conducts research in computer graphics, augmented reality systems, interactive gaming technology for education, and mobile casual game architectures."
      },
      {
        "name": "Dr. Douglas Wacker",
        "role": "Associate Professor of Biology",
        "department": "School of STEM & North Creek Wetland",
        "subject": "biology",
        "bio": "Dr. Wacker investigates avian behavioral ecology, acoustic communication in songbirds, social vocalizations, and the massive American crow communal roosting behavior at the North Creek Wetland."
      },
      {
        "name": "Dr. Jong Yoon",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "School of Science, Technology, Engineering & Mathematics",
        "subject": "engineering",
        "bio": "Dr. Yoon specializes in rehabilitation robotics, wearable human-machine interfaces, assistive upper-limb robotic exoskeletons, and mechatronic control systems."
      }
    ]
  }
]
