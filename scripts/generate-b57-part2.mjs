import { writeFileSync } from 'node:fs';

const part2 = [
  // 11. Delaware Valley University (Row 667)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Delaware Valley University',
    shortName: 'DelVal Doylestown',
    slug: 'delaware-valley-university-doylestown',
    location: 'Doylestown, Bucks County, Pennsylvania, United States',
    website: 'https://www.delval.edu',
    sourceRow: 667,
    stats: {
      established: '1896',
      students: '2,300+',
      international: '6%',
      faculty: '140+'
    },
    heroSummary: 'Delaware Valley University (DelVal) is an esteemed private university in Doylestown, Pennsylvania, acclaimed for its agricultural sciences, animal biotechnology, equine studies, landscape architecture, and signature Experience360 experiential learning program.',
    academicOverview: 'Founded as the National Farm School, DelVal manages over 1,000 acres of working agricultural land, livestock breeding centers, hydroponic greenhouse complexes, and biotechnology laboratories. Under the signature Experience360 curriculum, 100% of undergraduate students complete hands-on scientific research, clinical veterinary shadowing, or corporate agritech practicums.',
    researchAdmissions: 'Undergraduate admissions require a high school diploma with minimum 2.50 cumulative GPA; DelVal is test-optional. Graduate programs require an accredited bachelor’s degree with 2.80+ GPA, personal statement, and science prerequisite courses.',
    opportunities: [
      {
        id: 7947,
        title: 'Bachelor of Science in Animal Science & Pre-Veterinary Medicine',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Comprehensive undergraduate degree providing immersive clinical and laboratory training in large and small animal physiology, genetics, surgical assistance, and veterinary nutrition.',
        funding: 'Eligible for DelVal Presidential Scholarships up to $25,000 per year and USDA animal science research grants',
        tuition: '$42,500 annual undergraduate tuition',
        fee: '$0 online application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027 (Rolling admissions for Fall Cohort)',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'High school GPA of 3.00+ with strong coursework in biology and chemistry',
          ielts: 'TOEFL 79 or IELTS 6.5 for international applicants',
          gre: 'Not required',
          papers: 'High school transcripts, personal statement detailing veterinary ambitions, and activities resume',
          references: 'Two letters of recommendation from science educators or veterinarians'
        }
      },
      {
        id: 7948,
        title: 'Bachelor of Science in Agribusiness & Sustainable Food Systems',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Interdisciplinary program combining commodity marketing, agricultural finance, precision farming technologies, and organic food supply chain logistics on DelVal’s working farms.',
        funding: 'Pennsylvania Agricultural Society scholarships and DelVal Farm Heritage awards',
        tuition: '$42,500 annual tuition',
        fee: '$0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'High school diploma with 2.50+ GPA',
          ielts: 'Standard undergraduate language requirement',
          gre: 'Not required',
          papers: 'Admissions application and high school transcripts',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7949,
        title: 'Master of Science in Precision Agriculture & Environmental Data Analytics',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Graduate curriculum in drone multispectral imaging, GIS spatial modeling, sensor telemetry, and machine learning applications for crop yield optimization.',
        funding: 'Graduate research assistantships providing partial tuition remission and research stipends',
        tuition: '$750 per credit hour (36 credits total)',
        fee: '$35 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'Bachelor degree in agriculture, environmental science, engineering, or computing with 2.80+ GPA',
          ielts: 'TOEFL 80 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Statement of research interests in precision agriculture and professional resume',
          references: 'Two academic or professional letters of recommendation'
        }
      },
      {
        id: 7950,
        title: 'DelVal Experience360 Experiential Learning Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Competitive fellowship supporting undergraduate students conducting intensive summer research on crop genetics, equine sports medicine, or environmental conservation.',
        funding: '$4,000 summer research stipend plus sponsored campus housing and lab supplies',
        tuition: 'Fully funded summer research fellowship',
        fee: '$0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'Enrolled sophomore or junior standing with minimum 3.25 cumulative GPA',
          ielts: 'Not required for domestic students',
          gre: 'Not required',
          papers: 'Research project prospectus (2-3 pages) endorsed by DelVal faculty mentor',
          references: 'Faculty research supervisor recommendation'
        }
      },
      {
        id: 7951,
        title: 'Bachelor of Science in Landscape Architecture & Ecological Planning',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'LAAB-accredited professional design degree focusing on stormwater wetland design, urban green infrastructure, historic estate restoration, and sustainable master planning.',
        funding: 'Design portfolio merit awards up to $6,000 annually',
        tuition: '$42,500 annual tuition',
        fee: '$0 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'High school graduation with 2.75+ GPA',
          ielts: 'IELTS 6.0 or TOEFL 75',
          gre: 'Not required',
          papers: 'Visual design portfolio or creative sketches (optional but strongly recommended) and transcripts',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7952,
        title: 'Joseph Krauskopf Presidential Academic Merit Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Prestigious four-year undergraduate scholarship honoring founder Rabbi Joseph Krauskopf, awarded to top incoming freshmen in STEM and agricultural sciences.',
        funding: 'Up to $28,000 per academic year renewable across four years ($112,000 total)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.delval.edu',
        requirements: {
          gpa: 'High school GPA 3.75+ or top 10% class rank',
          ielts: 'Standard university requirement',
          gre: 'Test-optional (SAT 1250+ / ACT 26+ considered if submitted)',
          papers: 'High school transcript, honors scholarship essay, and resume of activities',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3529,
        name: 'Dr. Reg Nealis',
        title: 'Associate Professor of Animal Science & Pre-Veterinary Medicine Lead',
        department: 'Department of Animal Biotechnology and Conservation',
        subject: 'biology',
        topics: ['Equine Sports Physiology', 'Reproductive Biotechnology in Livestock', 'Clinical Veterinary Diagnostics', 'Large Animal Medicine'],
        summary: 'Dr. Reg Nealis oversees pre-veterinary clinical training at DelVal, researching equine musculoskeletal recovery and artificial insemination protocols in domestic livestock.',
        source: 'https://www.delval.edu'
      },
      {
        id: 3530,
        name: 'Dr. Sarah Wurzbacher',
        title: 'Assistant Professor of Plant and Soil Sciences',
        department: 'Department of Plant Science and Agribusiness',
        subject: 'environment',
        topics: ['Soil Microbiome Dynamics', 'Cover Crop Nutrient Cycling', 'Precision Agronomy GIS', 'Agroecological Weed Management'],
        summary: 'Dr. Sarah Wurzbacher studies carbon sequestration in temperate agricultural soils and evaluates multispectral drone diagnostics for nitrogen management in field crops.',
        source: 'https://www.delval.edu'
      },
      {
        id: 3531,
        name: 'Prof. Michael M. Maza',
        title: 'Professor of Landscape Architecture and Ecological Planning',
        department: 'Department of Landscape Architecture and Environmental Design',
        subject: 'arts-design',
        topics: ['Urban Stormwater Wetland Systems', 'Ecological Landscape Restorations', 'GIS Regional Master Planning', 'Biophilic Urban Design'],
        summary: 'Prof. Michael M. Maza designs constructed wetlands and urban bioswales for regional flood mitigation, integrating native plant communities with civic public spaces.',
        source: 'https://www.delval.edu'
      }
    ]
  },

  // 12. Delgado Community College (Row 668)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Delgado Community College',
    shortName: 'Delgado New Orleans',
    slug: 'delgado-community-college-new-orleans',
    location: 'New Orleans, Louisiana, United States',
    website: 'https://www.dcc.edu',
    sourceRow: 668,
    stats: {
      established: '1921',
      students: '14,000+',
      international: '5%',
      faculty: '650+'
    },
    heroSummary: 'Delgado Community College is Louisiana’s oldest and largest community college, located across several campuses in the Greater New Orleans area, celebrated for its Charity School of Nursing, maritime technology, culinary arts, and industrial trades.',
    academicOverview: 'Operating the historic Charity School of Nursing (founded 1894), the Maritime and Industrial Training Center in New Orleans East, and culinary arts apprenticeships, Delgado trains healthcare practitioners, offshore marine pilots, and industrial technicians central to the Gulf Coast economy. The college offers comprehensive associate degrees, university transfer agreements, and workforce certifications.',
    researchAdmissions: 'Open-enrollment admissions for secondary school graduates or GED holders. The Charity School of Nursing and allied health programs require competitive clinical prerequisites, ATI TEAS examination scores, and background screening.',
    opportunities: [
      {
        id: 7953,
        title: 'Associate of Science in Nursing (ASN) - Charity School of Nursing',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'ACEN-accredited registered nursing program with rigorous clinical rotations throughout New Orleans metropolitan hospital systems, boasting top NCLEX-RN passing records.',
        funding: 'Eligible for Louisiana Taylor Opportunity Program for Students (TOPS), Pell Grants, and Ochsner Health nursing sponsorships',
        tuition: '$140 per credit hour (in-state tuition block)',
        fee: '$40 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027 (Fall Cohort) / October 15, 2026 (Spring)',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'Cumulative GPA of 2.50+ in prerequisite biology, chemistry, and college algebra',
          ielts: 'TOEFL 70 for international transcripts',
          gre: 'ATI TEAS score (minimum 65% composite)',
          papers: 'Nursing application form, official transcripts, and clinical health clearance',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7954,
        title: 'Associate of Applied Science in Maritime Transportation & Navigation',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'USCG-approved marine navigation program covering electronic radar plotting, ship handling, maritime safety regulations, and wheelhouse simulation training on the Mississippi River.',
        funding: 'Gulf Maritime Association training grants up to $3,000',
        tuition: '$140 per credit hour',
        fee: '$40 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'High school graduation or GED equivalent',
          ielts: 'English language proficiency',
          gre: 'Not required',
          papers: 'TWIC card eligibility and marine physical examination',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7955,
        title: 'Associate of Applied Science in Culinary Arts & Gulf Hospitality Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'World-renowned culinary curriculum in classic Creole and Cajun cuisine, patisserie, banquet catering, and restaurant financial operations in New Orleans.',
        funding: 'New Orleans Wine & Food Experience culinary scholarships up to $2,500',
        tuition: '$140 per credit hour',
        fee: '$40 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'High school diploma or GED',
          ielts: 'Standard institutional requirement',
          gre: 'Not required',
          papers: 'Statement of culinary career goals and kitchen safety orientation',
          references: 'One personal or professional reference'
        }
      },
      {
        id: 7956,
        title: 'Delgado STEM Technical Pathways Scholarship',
        type: 'Scholarship',
        subject: 'computer-science',
        desc: 'Tuition assistance grant supporting students pursuing associate degrees in computer information technology, cloud computing, or electrical engineering technology.',
        funding: 'Full in-state tuition coverage plus $500 textbook voucher per semester',
        tuition: 'Direct tuition grant',
        fee: '$0 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'Enrolled STEM major with minimum 2.75 GPA',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'FAFSA completion and STEM career objective statement',
          references: 'One instructor recommendation'
        }
      },
      {
        id: 7957,
        title: 'Associate of Science in Radiologic Technology',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'JRCERT-accredited clinical associate degree preparing diagnostic radiographers in digital X-ray imaging, CT scanning, radiation safety, and patient care.',
        funding: 'Hospital clinical partner stipends up to $2,000',
        tuition: '$140 per credit hour',
        fee: '$40 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'Prerequisite physics, anatomy, and algebra with minimum 2.70 GPA',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Clinical observation documentation and diagnostic radiography application',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7958,
        title: 'Workforce Development & Industrial Trades Grant',
        type: 'Grant',
        subject: 'engineering',
        desc: 'Need-based workforce grant providing tuition, protective gear, and certification examination fees for welding, HVAC, and industrial electrical instrumentation programs.',
        funding: 'Up to $2,000 per semester covering all laboratory fees and trade toolkits',
        tuition: 'Workforce grant',
        fee: '$0 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.dcc.edu',
        requirements: {
          gpa: 'Admission to an approved workforce technical certificate program',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Workforce training commitment form and financial need statement',
          references: 'Advisor signature'
        }
      }
    ],
    researchers: [
      {
        id: 3532,
        name: 'Dr. Cheryl E. Myers',
        title: 'Vice Chancellor for Academic Affairs & Dean of Charity School of Nursing',
        department: 'Charity School of Nursing',
        subject: 'biology',
        topics: ['Clinical Nursing Education', 'NCLEX-RN Diagnostic Predictors', 'Disaster Nursing Readiness', 'Urban Health Disparities'],
        summary: 'Dr. Cheryl E. Myers directs Louisiana’s flagship nursing education program at the Charity School of Nursing, developing clinical simulation models for urban emergency health crises.',
        source: 'https://www.dcc.edu'
      },
      {
        id: 3533,
        name: 'Capt. Wayne M. Vandergriff',
        title: 'Director of the Maritime and Industrial Training Center',
        department: 'Maritime and Industrial Technology Division',
        subject: 'engineering',
        topics: ['Mississippi River Navigation Protocols', 'Electronic Chart Display and Information Systems (ECDIS)', 'Marine Firefighting Safety', 'Offshore Tug Operations'],
        summary: 'Capt. Wayne M. Vandergriff conducts USCG-certified training programs for commercial inland waterway captains and maritime pilots navigating the lower Mississippi River corridor.',
        source: 'https://www.dcc.edu'
      },
      {
        id: 3534,
        name: 'Chef Vance Roux',
        title: 'Department Chair of Culinary Arts & Hospitality Management',
        department: 'Culinary Arts Institute',
        subject: 'social-sciences',
        topics: ['Creole Culinary Heritage Preservation', 'Food Service Kitchen Ergonomics', 'Regional Food Sourcing Economics', 'Hospitality Workforce Development'],
        summary: 'Chef Vance Roux preserves traditional Gulf Coast culinary techniques while modernizing kitchen sanitation, nutrition analysis, and restaurant financial sustainability.',
        source: 'https://www.dcc.edu'
      }
    ]
  },

  // 13. DeVry University (Row 672)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'DeVry University',
    shortName: 'DeVry Phoenix',
    slug: 'devry-university-phoenix',
    location: 'Phoenix, Arizona, United States',
    website: 'https://www.devry.edu',
    sourceRow: 672,
    stats: {
      established: '1931',
      students: '25,000+ nationwide',
      international: '8%',
      faculty: '1,200+'
    },
    heroSummary: 'DeVry University (Phoenix Metro Campus) is an accredited private university offering career-focused undergraduate and graduate degree programs in software engineering, cybersecurity, healthcare technology, and business analytics.',
    academicOverview: 'Accredited by the Higher Learning Commission (HLC) and ACBSP, DeVry emphasizes hands-on laboratory simulation, industry certifications (CompTIA, Cisco, AWS), and flexible hybrid education. Its College of Engineering and Information Sciences collaborates with Fortune 500 tech companies to align curricula with current digital workforce requirements.',
    researchAdmissions: 'Undergraduate admissions require high school graduation or GED, with diagnostic assessments in mathematics and English. Graduate admission requires an accredited bachelor’s degree with a 2.50+ GPA.',
    opportunities: [
      {
        id: 7959,
        title: 'Bachelor of Science in Computer Information Systems - Cyber Security Track',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Rigorous four-year degree in perimeter network defense, cloud security architecture, penetration testing, and digital forensics with embedded vouchers for CompTIA Security+ and CySA+ certifications.',
        funding: 'Eligible for DeVry Future-Ready Career Scholarships up to $4,000 and employer partner tuition grants',
        tuition: '$514 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027 (Every 8 weeks new session start)',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'High school diploma or GED equivalent with minimum 2.0 GPA',
          ielts: 'TOEFL 65 or IELTS 5.5 for non-native speakers',
          gre: 'Not required',
          papers: 'High school transcript or GED documentation and math placement evaluation',
          references: 'Admissions interview with academic advisor'
        }
      },
      {
        id: 7960,
        title: 'Bachelor of Science in Software Development & Cloud Computing',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Applied undergraduate degree in modern full-stack web architectures, Python/Java object-oriented design, AWS/Azure cloud integration, and agile software lifecycles.',
        funding: 'DeVry Tech Bridge grants up to $3,000',
        tuition: '$514 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'High school graduation credentials',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Placement testing and statement of intent',
          references: 'One character reference'
        }
      },
      {
        id: 7961,
        title: 'Master of Science in Information Technology Management',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Graduate program for technology leaders covering enterprise IT governance, artificial intelligence strategy, cybersecurity risk management, and digital transformation.',
        funding: 'Corporate cohort tuition reductions up to 20%',
        tuition: '$776 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'Bachelor degree from an accredited institution with minimum 2.50 GPA',
          ielts: 'TOEFL 75 or IELTS 6.0',
          gre: 'Not required',
          papers: 'Professional resume and statement of graduate career objectives',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7962,
        title: 'DeVry Women in Technology Scholarship',
        type: 'Scholarship',
        subject: 'computer-science',
        desc: 'Dedicated tuition scholarship awarded to female students pursuing undergraduate degrees in software development, cybersecurity, or data analytics.',
        funding: 'Up to $5,000 distributed over six academic sessions',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 scholarship fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'Enrolled female student in engineering or computer information systems with 2.80+ GPA',
          ielts: 'Standard institutional requirement',
          gre: 'Not required',
          papers: 'Essay (500 words) on inspiring women in technological careers',
          references: 'One academic or employer recommendation'
        }
      },
      {
        id: 7963,
        title: 'Bachelor of Science in Technical Management & Business Analytics',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Interdisciplinary degree combining project management (PMP aligned), supply chain logistics, business intelligence dashboards, and operations analysis.',
        funding: 'Transfer student achievement grants up to $3,500',
        tuition: '$514 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-08-20',
        deadlineText: 'August 20, 2027',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'High school diploma or 30+ transfer college credits with 2.25+ GPA',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Transcripts and career development plan',
          references: 'One recommendation'
        }
      },
      {
        id: 7964,
        title: 'NextGen Tech Certificate Bridge Grant',
        type: 'Grant',
        subject: 'engineering',
        desc: 'Specialized workforce grant covering certification exam fees and lab software vouchers for networking and IoT hardware diagnostics.',
        funding: '$1,500 direct grant applied to technical exam fees and simulation tools',
        tuition: 'Certification fee offset',
        fee: '$0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.devry.edu',
        requirements: {
          gpa: 'Enrolled student in engineering technology certificate or degree program',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Certificate study plan and verification of course completion',
          references: 'Faculty advisor signature'
        }
      }
    ],
    researchers: [
      {
        id: 3535,
        name: 'Dr. Shalini Verma',
        title: 'Associate Dean of Computer Information Systems',
        department: 'College of Engineering and Information Sciences',
        subject: 'computer-science',
        topics: ['Cloud Virtualization Frameworks', 'Predictive Data Mining', 'Information Systems Pedagogy', 'Enterprise Database Systems'],
        summary: 'Dr. Shalini Verma oversees curriculum design in computer information systems, researching adaptive instructional models in cloud computing and enterprise database architecture.',
        source: 'https://www.devry.edu'
      },
      {
        id: 3536,
        name: 'Prof. Robert L. Adams',
        title: 'Lead Professor of Cyber Security and Cloud Defense',
        department: 'Division of Information Security',
        subject: 'computer-science',
        topics: ['Penetration Testing Methodologies', 'Zero-Trust Network Perimeter Defense', 'Incident Response Protocols', 'Security Automation'],
        summary: 'Prof. Robert L. Adams trains students in ethical hacking and cloud perimeter vulnerability mitigation, advising public sector organizations on critical infrastructure defense.',
        source: 'https://www.devry.edu'
      },
      {
        id: 3537,
        name: 'Dr. Ahmed M. El-Sayed',
        title: 'Professor of Software Engineering and Data Architecture',
        department: 'Department of Software and Mobile Systems',
        subject: 'computer-science',
        topics: ['Agile Microservices Architecture', 'RESTful API Engineering', 'Distributed Ledger Systems', 'Full-Stack Performance Optimization'],
        summary: 'Dr. Ahmed M. El-Sayed conducts applied research on scalable microservices architectures and API performance optimization in hybrid cloud deployment environments.',
        source: 'https://www.devry.edu'
      }
    ]
  },

  // 14. Dickinson State University (Row 673)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Dickinson State University',
    shortName: 'DSU Dickinson',
    slug: 'dickinson-state-university-north-dakota',
    location: 'Dickinson, North Dakota, United States',
    website: 'https://dickinsonstate.edu',
    sourceRow: 673,
    stats: {
      established: '1918',
      students: '1,450+',
      international: '7%',
      faculty: '90+'
    },
    heroSummary: 'Dickinson State University (DSU) is a regional public university in Dickinson, North Dakota, renowned for its agricultural studies, Theodore Roosevelt Center, pre-nursing clinical sciences, and teacher education.',
    academicOverview: 'Home to the Theodore Roosevelt Center and digital presidential archive, DSU is an anchor institution in Western North Dakota. The university excels in range livestock management, beef cattle nutrition, digital historical research, and STEM educator preparation, serving rural communities across the High Plains.',
    researchAdmissions: 'Undergraduate admission requires high school graduation with a minimum 2.00 GPA; DSU is test-optional. Nursing and teacher education require formal secondary admission following completion of foundational coursework with a 2.75+ GPA.',
    opportunities: [
      {
        id: 7965,
        title: 'Bachelor of Science in Agricultural Studies & Beef Cattle Management',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Comprehensive degree in rangeland ecology, beef cattle reproduction, herd health diagnostics, agribusiness finance, and precision livestock technologies.',
        funding: 'North Dakota Agricultural Association scholarships and DSU Heritage Farm endowments',
        tuition: '$8,250 annual in-state tuition / $10,500 out-of-state',
        fee: '$35 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027 (Fall Admission)',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'High school diploma or GED with minimum 2.25 GPA',
          ielts: 'TOEFL 71 or IELTS 6.0 for international students',
          gre: 'Not required',
          papers: 'Official secondary school transcripts and agricultural interest statement',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7966,
        title: 'Theodore Roosevelt Center Digital Humanities & Presidential History Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Prestigious fellowship supporting archival transcription, digital historical curation, and scholarly research at the Theodore Roosevelt Digital Library.',
        funding: '$3,500 annual scholarship plus paid digital research appointment at the Roosevelt Center',
        tuition: 'Direct tuition grant',
        fee: '$0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'Enrolled undergraduate majoring in history, English, or digital media with 3.20+ GPA',
          ielts: 'Not required for domestic students',
          gre: 'Not required',
          papers: 'Historical essay (1,000 words) on presidential history or American conservation and CV',
          references: 'Two letters of recommendation from history faculty'
        }
      },
      {
        id: 7967,
        title: 'Bachelor of Science in Nursing (BSN)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'CCNE-accredited baccalaureate nursing curriculum with high-fidelity hospital simulation and clinical rotations across regional health networks in Western North Dakota.',
        funding: 'Sanford Health loan forgiveness programs and DSU Nursing Excellence grants',
        tuition: '$8,250 annual tuition (plus clinical laboratory fees)',
        fee: '$35 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'Minimum 2.75 GPA in prerequisite anatomy, physiology, and microbiology',
          ielts: 'Standard language requirement',
          gre: 'TEAS nursing entrance exam score',
          papers: 'Nursing essay and background clearance',
          references: 'Two academic or healthcare references'
        }
      },
      {
        id: 7968,
        title: 'DSU Heritage Foundation Academic Honors Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Merit-based scholarship awarded to high-achieving freshmen in STEM, mathematics, and computer technology, renewable for up to four years.',
        funding: 'Up to $5,000 per academic year ($20,000 total four-year award)',
        tuition: 'Direct undergraduate tuition reduction',
        fee: '$0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'High school GPA 3.50+ or ACT 24+ / SAT 1180+',
          ielts: 'IELTS 6.5 for international applicants',
          gre: 'Not required',
          papers: 'Scholarship application and high school academic records',
          references: 'Two letters of recommendation from educators'
        }
      },
      {
        id: 7969,
        title: 'Bachelor of Science in Computer Science & Energy Informatics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Applied computing degree focusing on supervisory control systems (SCADA), database administration, geospatial data processing, and oil/wind energy informatics.',
        funding: 'Bakken Energy Corridor STEM tuition awards up to $3,000',
        tuition: '$8,250 annual tuition',
        fee: '$35 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'High school graduation with solid algebra and science preparation',
          ielts: 'IELTS 6.0 or TOEFL 71',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7970,
        title: 'Western North Dakota Rural Teacher Education Stipend',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Pre-service educator grant supporting students completing student teaching semesters in rural North Dakota public school districts.',
        funding: '$4,000 living stipend during the semester of clinical student teaching',
        tuition: 'Living allowance stipend',
        fee: '$0 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://dickinsonstate.edu',
        requirements: {
          gpa: 'Admitted to DSU Teacher Education Program with 3.00+ GPA',
          ielts: 'Not applicable',
          gre: 'Praxis II exam completion',
          papers: 'Student teaching clinical placement agreement and personal essay',
          references: 'Recommendation from Education Department supervisor'
        }
      }
    ],
    researchers: [
      {
        id: 3538,
        name: 'Dr. Sharon Kilzer',
        title: 'Project Manager & Senior Historian at Theodore Roosevelt Center',
        department: 'Theodore Roosevelt Center',
        subject: 'social-sciences',
        topics: ['Theodore Roosevelt Historiography', 'Digital Archive Preservation', 'American Conservation Movement', 'Badlands History'],
        summary: 'Dr. Sharon Kilzer oversees the comprehensive digitization of Theodore Roosevelt’s papers, researching his conservation policies and western ranching years in the North Dakota Badlands.',
        source: 'https://dickinsonstate.edu'
      },
      {
        id: 3539,
        name: 'Prof. Toby Stroh',
        title: 'Assistant Professor of Agriculture and Equine Studies',
        department: 'Department of Agriculture and Technical Studies',
        subject: 'environment',
        topics: ['Rangeland Grazing Systems', 'Beef Cattle Nutrition', 'Equine Anatomy and Training', 'Forage Production Economics'],
        summary: 'Prof. Toby Stroh investigates sustainable rotational grazing methods and winter supplementation strategies for commercial beef herds across the Northern Great Plains.',
        source: 'https://dickinsonstate.edu'
      },
      {
        id: 3540,
        name: 'Dr. Holly Gruhlke',
        title: 'Vice President of Academic Affairs & Professor of Business',
        department: 'School of Business and Entrepreneurship',
        subject: 'social-sciences',
        topics: ['Rural Economic Development', 'Small Business Entrepreneurship', 'Higher Education Administration', 'Organizational Leadership'],
        summary: 'Dr. Holly Gruhlke conducts applied research on economic diversification and rural entrepreneurship models in energy-dependent communities throughout Western North Dakota.',
        source: 'https://dickinsonstate.edu'
      }
    ]
  },

  // 15. Doane University - Lincoln Campus (Row 674)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Doane University - Lincoln Campus',
    shortName: 'Doane Lincoln',
    slug: 'doane-university-lincoln',
    location: 'Lincoln, Nebraska, United States',
    website: 'https://www.doane.edu',
    sourceRow: 674,
    stats: {
      established: '1872',
      students: '2,500+ across campuses',
      international: '5%',
      faculty: '130+'
    },
    heroSummary: 'Doane University (Lincoln Campus) is a premier private university campus in Nebraska offering accelerated adult undergraduate and graduate degree programs in clinical mental health counseling, educational leadership, business analytics, and non-profit administration.',
    academicOverview: 'Accredited by the Higher Learning Commission and CACREP, Doane Lincoln specializes in preparing working professionals and graduate scholars. Its Master of Arts in Counseling operates an on-site community counseling clinic and maintains extensive clinical partnerships with regional mental health centers, schools, and social welfare institutions.',
    researchAdmissions: 'Admissions require high school completion or an accredited bachelor’s degree (minimum 2.80 GPA for graduate programs). Counseling applicants undergo group interview evaluations, background screening, and submission of personal reflection essays.',
    opportunities: [
      {
        id: 7971,
        title: 'Master of Arts in Counseling (CACREP-Accredited)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Sixty-credit professional graduate degree preparing licensed mental health practitioners (LMHP) with 700 hours of clinical internship in trauma, family systems, and addictions counseling.',
        funding: 'Eligible for Federal Direct Graduate Loans and Doane Graduate Counseling Fellowships up to $3,000',
        tuition: '$545 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027 (Fall Cohort)',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'Accredited bachelor degree with minimum 3.00 GPA',
          ielts: 'TOEFL 80 or IELTS 6.5 for international students',
          gre: 'Not required',
          papers: 'Counseling reflection essay (3-4 pages), resume, and group admissions interview',
          references: 'Three professional letters of recommendation'
        }
      },
      {
        id: 7972,
        title: 'Master of Education in Educational Leadership & School Administration',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'State-approved graduate program preparing certified K-12 principals and curriculum directors in school law, fiscal management, instructional coaching, and special education compliance.',
        funding: 'Nebraska Educator Partner Discounts of $100 per credit hour',
        tuition: '$450 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'Bachelor degree in education with minimum 2.80 GPA and valid teaching certificate',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Philosophy of educational leadership essay and resume showing 2+ years classroom teaching',
          references: 'Two administrative letters of recommendation'
        }
      },
      {
        id: 7973,
        title: 'Bachelor of Arts in Business Administration & Healthcare Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Accelerated evening and online bachelor degree for adult learners covering healthcare finance, clinical quality improvement, organizational leadership, and managerial analytics.',
        funding: 'Doane Adult Learner Grants up to $2,000 per year',
        tuition: '$375 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027 (Rolling 8-week terms)',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'High school graduation or transferable associate degree credits with 2.25+ GPA',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Transcripts and personal statement of professional goals',
          references: 'One professional reference'
        }
      },
      {
        id: 7974,
        title: 'Doane Community Mental Health Clinical Practicum Stipend',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Funded clinical stipend awarded to advanced counseling graduate students serving low-income and uninsured clients at the Doane Family Counseling Center in Lincoln.',
        funding: '$2,500 semester stipend plus supervised clinical direct-contact hours',
        tuition: 'Clinical practicum stipend',
        fee: '$0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'Enrolled Master of Arts in Counseling student in good standing',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Clinical casework statement and practicum application',
          references: 'Clinical Faculty Supervisor nomination'
        }
      },
      {
        id: 7975,
        title: 'Master of Science in Instructional Design & Educational Technology',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Thirty-credit online master’s program analyzing e-learning course creation, gamified corporate training, learning management system administration, and multimedia instructional design.',
        funding: 'Corporate and education cohort tuition discounts',
        tuition: '$475 per credit hour',
        fee: '$30 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'Bachelor degree in any field with 2.75+ GPA',
          ielts: 'TOEFL 75 or IELTS 6.0',
          gre: 'Not required',
          papers: 'Statement of purpose and digital portfolio or resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7976,
        title: 'Adult Learner & Veteran Career Advancement Grant',
        type: 'Grant',
        subject: 'social-sciences',
        desc: 'Need-based tuition assistance grant for military veterans, adult career changers, and working parents completing undergraduate degrees at the Lincoln campus.',
        funding: 'Up to $1,500 applied directly toward tuition balance per academic year',
        tuition: 'Direct tuition grant',
        fee: '$0 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://www.doane.edu',
        requirements: {
          gpa: 'Adult undergraduate enrolled at Doane Lincoln with 2.50+ GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'FAFSA submission and statement of financial hardship',
          references: 'Admissions advisor approval'
        }
      }
    ],
    researchers: [
      {
        id: 3541,
        name: 'Dr. Courtnee White',
        title: 'Director of Graduate Counseling & Associate Professor of Counselor Education',
        department: 'Master of Arts in Counseling Program',
        subject: 'social-sciences',
        topics: ['Clinical Mental Health Counselor Training', 'Trauma-Informed Therapy Protocols', 'CACREP Accreditation Standards', 'Supervision Ethics'],
        summary: 'Dr. Courtnee White directs CACREP counseling programs at Doane Lincoln, researching multicultural competence in counselor training and evidence-based trauma recovery.',
        source: 'https://www.doane.edu'
      },
      {
        id: 3542,
        name: 'Dr. Tiffany Hangsterfer',
        title: 'Assistant Professor of Clinical Mental Health Counseling',
        department: 'Department of Graduate Studies in Counseling',
        subject: 'social-sciences',
        topics: ['Child and Adolescent Psychotherapy', 'Family Systems Therapy', 'Addiction Treatment Interventions', 'Community Mental Health Equity'],
        summary: 'Dr. Tiffany Hangsterfer studies family systems counseling interventions and community mental health service accessibility for underserved populations in southeastern Nebraska.',
        source: 'https://www.doane.edu'
      },
      {
        id: 3543,
        name: 'Prof. Randy Neuharth',
        title: 'Associate Professor of Educational Leadership',
        department: 'School of Education',
        subject: 'social-sciences',
        topics: ['Public School Finance Systems', 'K-12 Educational Policy in Nebraska', 'School Administrator Mentorship', 'Special Education Governance'],
        summary: 'Prof. Randy Neuharth evaluates school district finance equity and superintendent leadership dynamics, mentoring pre-service principals across Nebraska public school districts.',
        source: 'https://www.doane.edu'
      }
    ]
  },

  // 16. East Texas A&M University-Dallas (Row 680)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'East Texas A&M University-Dallas',
    shortName: 'ETAMU Dallas',
    slug: 'east-texas-a-and-m-university-dallas',
    location: 'Dallas, Texas, United States',
    website: 'https://www.tamuc.edu',
    sourceRow: 680,
    stats: {
      established: '1889 (Dallas Center 2021)',
      students: '12,000+ total university headcount',
      international: '10%',
      faculty: '600+ university faculty'
    },
    heroSummary: 'East Texas A&M University-Dallas (formerly Texas A&M University-Commerce at Dallas) is a metropolitan instructional center located in downtown Dallas, providing degree programs in business analytics, cybersecurity, finance, visual communication, and urban educational leadership.',
    academicOverview: 'Operating in modern high-rise facilities on North Central Expressway in Dallas, ETAMU Dallas provides urban undergraduate and graduate students direct corporate linkages with the Dallas-Fort Worth Fortune 500 economic corridor. Programs emphasize artificial intelligence modeling, fintech, corporate cyber defense, and visual design communication.',
    researchAdmissions: 'Undergraduate admissions evaluate high school class rank and GPA (automatic admission for top 25% of Texas high school classes); test-optional. Graduate admissions require an accredited bachelor’s degree with a 2.75+ cumulative GPA and programmatic prerequisites.',
    opportunities: [
      {
        id: 7977,
        title: 'Master of Science in Business Analytics & Artificial Intelligence',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'STEM-designated 36-credit master’s degree in machine learning modeling, SQL/Python big data pipelines, supply chain optimization, and executive business intelligence.',
        funding: 'Eligible for Graduate Assistantships and Dallas Tech Corridor Corporate Scholarships',
        tuition: '$580 per credit hour (in-state graduate rate) / $995 out-of-state',
        fee: '$50 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027 (Fall Cohort)',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'Accredited bachelor degree with minimum 3.00 GPA in quantitative coursework',
          ielts: 'TOEFL 79 or IELTS 6.5 for international degree holders',
          gre: 'GMAT/GRE optional; waived for candidates with 3.0+ undergraduate GPA',
          papers: 'Statement of professional purpose, CV, and official transcripts',
          references: 'Two letters of recommendation from academic or corporate supervisors'
        }
      },
      {
        id: 7978,
        title: 'Master of Science in Cybersecurity & Information Assurance',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Advanced curriculum covering ethical hacking, critical infrastructure security, enterprise cloud forensics, and compliance frameworks aligned with NSA/DHS CAE criteria.',
        funding: 'CyberCorps Scholarship for Service eligibility and departmental fellowships up to $3,500',
        tuition: '$580 per credit hour in-state',
        fee: '$50 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'Bachelor degree in computing, engineering, or mathematics with 2.80+ GPA',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: 'Resume detailing programming or network experience and statement of purpose',
          references: 'Two recommendations'
        }
      },
      {
        id: 7979,
        title: 'Master of Science in Finance & Capital Markets',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Quantitative finance program covering derivatives valuation, corporate mergers, risk analytics, and preparation for the Chartered Financial Analyst (CFA) exam.',
        funding: 'Dallas Financial District scholarships up to $2,500',
        tuition: '$580 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'Bachelor degree with 2.75+ GPA and coursework in accounting and statistics',
          ielts: 'TOEFL 79 or IELTS 6.5',
          gre: 'GMAT/GRE optional',
          papers: 'Statement of financial career objectives and transcripts',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7980,
        title: 'Dallas Metroplex Corporate Partnership Tuition Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit scholarship awarded to graduate students working in or interning with Dallas-Fort Worth corporate partners, providing direct tuition assistance.',
        funding: '$2,000 annual scholarship applied directly to tuition',
        tuition: 'Direct graduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'Enrolled graduate student at ETAMU Dallas with minimum 3.25 GPA',
          ielts: 'Standard graduate requirement',
          gre: 'Not required',
          papers: 'Scholarship essay detailing metroplex business impact and resume',
          references: 'Employer or faculty recommendation'
        }
      },
      {
        id: 7981,
        title: 'Bachelor of Fine Arts in Visual Communication & Digital Art',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Preeminent design program based at the Dallas center, renowned for award-winning student portfolios in art direction, UX/UI interactive design, copywriting, and branding.',
        funding: 'Visual Communication creative portfolio scholarships up to $4,000 annually',
        tuition: '$4,950 per semester (in-state undergraduate block tuition)',
        fee: '$50 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'High school graduation and portfolio review',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'Not required',
          papers: 'Design portfolio (10-15 creative pieces) and artist statement',
          references: 'One letter of recommendation from an art or design instructor'
        }
      },
      {
        id: 7982,
        title: 'Urban Educational Leadership Doctoral Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Doctor of Education (Ed.D.) research fellowship analyzing urban superintendent leadership, school charter networks, and socioeconomic achievement gap closing in North Texas.',
        funding: 'Annual doctoral stipend of $12,000 plus full tuition waiver and research travel allowance',
        tuition: '100% tuition covered',
        fee: '$50 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.tamuc.edu',
        requirements: {
          gpa: 'Master of Education with minimum 3.50 GPA and valid leadership administrative certificate',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Doctoral research prospectus (5-7 pages) focusing on urban educational reform',
          references: 'Three professional letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3544,
        name: 'Dr. Bo Han',
        title: 'Associate Professor of Business Analytics and Data Mining',
        department: 'Department of Marketing and Business Analytics',
        subject: 'computer-science',
        topics: ['Business Intelligence Architectures', 'Predictive Analytics in Retail', 'Social Media Text Mining', 'AI Decision Support Systems'],
        summary: 'Dr. Bo Han conducts applied data analytics and machine learning research, developing predictive algorithms that optimize retail inventory and social media customer sentiment for Dallas enterprises.',
        source: 'https://www.tamuc.edu'
      },
      {
        id: 3545,
        name: 'Dr. Zaki Malik',
        title: 'Associate Professor of Cybersecurity and Cloud Computing',
        department: 'Department of Computer Science and Information Systems',
        subject: 'computer-science',
        topics: ['Cloud Computing Security', 'Privacy-Preserving Data Mining', 'Service-Oriented Architectures', 'Intrusion Detection Systems'],
        summary: 'Dr. Zaki Malik researches cryptographic privacy protocols and distributed cloud security, designing automated intrusion detection frameworks for complex enterprise networks.',
        source: 'https://www.tamuc.edu'
      },
      {
        id: 3546,
        name: 'Prof. Josh Ege',
        title: 'Associate Professor of Visual Communication',
        department: 'Department of Art - Visual Communication Division (Dallas)',
        subject: 'arts-design',
        topics: ['Brand Identity Design', 'Typography and Graphic Systems', 'Creative Art Direction', 'Interactive UX/UI Design'],
        summary: 'Prof. Josh Ege directs design cohorts at ETAMU Dallas, mentoring students who have won national design awards and researching typography in environmental branding.',
        source: 'https://www.tamuc.edu'
      }
    ]
  },

  // 17. Eastern Connecticut State University (Row 681)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Eastern Connecticut State University',
    shortName: 'Eastern Willimantic',
    slug: 'eastern-connecticut-state-university-willimantic',
    location: 'Willimantic, Connecticut, United States',
    website: 'https://www.easternct.edu',
    sourceRow: 681,
    stats: {
      established: '1889',
      students: '4,100+',
      international: '4%',
      faculty: '230+'
    },
    heroSummary: 'Eastern Connecticut State University is Connecticut’s designated public liberal arts university in Willimantic, recognized for faculty-mentored undergraduate research, environmental earth science, digital art and media, and pre-health biology.',
    academicOverview: 'Accredited by the New England Commission of Higher Education (NECHE), Eastern blends liberal arts inquiry with advanced scientific laboratory investigations in its state-of-the-art Science Building and Fine Arts Instructional Center. Undergraduates participate in faculty-mentored research in Long Island Sound coastal ecology, paleoclimate geology, and early childhood education.',
    researchAdmissions: 'Undergraduate admissions require high school graduation with a minimum 2.50 GPA; Eastern is test-optional. Holistic evaluation considers extracurricular engagement, academic course rigor, personal essay, and recommendations.',
    opportunities: [
      {
        id: 7983,
        title: 'Bachelor of Science in Environmental Earth Science & Climate Resilience',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Interdisciplinary degree in coastal geomorphology, hydrogeology, GIS spatial analytics, and climate adaptation strategies along New England coastal watersheds.',
        funding: 'Eligible for Connecticut state grants and Eastern Science Research Fellowships up to $3,500',
        tuition: '$6,470 per semester (in-state tuition)',
        fee: '$50 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027 (Rolling Fall Admissions)',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'High school graduation with 2.50+ GPA and background in high school sciences',
          ielts: 'TOEFL 79 or IELTS 6.0 for international students',
          gre: 'Test-optional',
          papers: 'Official high school transcript, personal essay, and resume of activities',
          references: 'One letter of recommendation from high school instructor'
        }
      },
      {
        id: 7984,
        title: 'Bachelor of Science in Biology - Molecular and Cellular Concentration',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Rigorous laboratory curriculum in recombinant DNA technology, cell signaling, immunology, and genomics preparing students for medical school and biotechnology careers.',
        funding: 'Eastern STEM Leadership Scholarships up to $5,000 annually',
        tuition: '$6,470 per semester in-state',
        fee: '$50 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'High school GPA 2.80+ with chemistry and biology laboratory coursework',
          ielts: 'Standard undergraduate requirement',
          gre: 'Not required',
          papers: 'High school transcript and personal statement',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7985,
        title: 'Master of Science in Accounting & Financial Forensics',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Thirty-credit graduate curriculum meeting CPA 150-hour licensure requirements, with specialized coursework in forensic fraud examination and corporate tax research.',
        funding: 'Graduate assistantships providing partial tuition waiver and hourly campus stipend',
        tuition: '$650 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'Bachelor degree in accounting or business with minimum 2.70 GPA',
          ielts: 'TOEFL 79 or IELTS 6.5',
          gre: 'GMAT/GRE optional',
          papers: 'Personal statement and resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7986,
        title: 'Eastern Presidential Academic Honors Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Top-tier undergraduate merit award honoring high-achieving freshmen entering STEM, mathematics, or computer science programs at Eastern.',
        funding: 'Up to $8,000 per academic year renewable for four years ($32,000 total)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'High school GPA of 3.70+ or top 10% class ranking',
          ielts: 'IELTS 6.5 for international students',
          gre: 'Not required',
          papers: 'Honors application essay and high school transcript',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7987,
        title: 'Bachelor of Science in Computer Science & Software Engineering',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'ABET-accredited degree in data structures, computer algorithms, operating systems, mobile application design, and distributed software engineering.',
        funding: 'Tech Talent Accelerator grants up to $2,500',
        tuition: '$6,470 per semester',
        fee: '$50 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'High school graduation credentials with pre-calculus or calculus readiness',
          ielts: 'IELTS 6.0 or TOEFL 75',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest in computing',
          references: 'One recommendation'
        }
      },
      {
        id: 7988,
        title: 'Long Island Sound Coastal Ecology Undergraduate Research Grant',
        type: 'Grant',
        subject: 'environment',
        desc: 'Faculty-guided summer research grant investigating shoreline erosion, salt marsh wetland carbon sequestration, and marine benthic ecosystems in Long Island Sound.',
        funding: '$3,500 research stipend plus field boat logistics and laboratory analytical supplies',
        tuition: 'Funded undergraduate summer research',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.easternct.edu',
        requirements: {
          gpa: 'Enrolled Eastern undergraduate in biology or environmental earth science with 3.00+ GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Field research proposal endorsed by supervising faculty mentor',
          references: 'Science department nomination'
        }
      }
    ],
    researchers: [
      {
        id: 3547,
        name: 'Dr. Bryan Oakley',
        title: 'Professor of Environmental Earth Science & Coastal Geologist',
        department: 'Department of Environmental Earth Science',
        subject: 'environment',
        topics: ['Coastal Geomorphology', 'Shoreline Erosion Dynamics', 'Side-Scan Sonar Seafloor Mapping', 'Sea Level Rise Adaptation'],
        summary: 'Dr. Bryan Oakley investigates coastal processes and post-storm sediment transport along the Southern New England coastline, advising municipalities on coastal hazard resilience.',
        source: 'https://www.easternct.edu'
      },
      {
        id: 3548,
        name: 'Dr. Matthew Graham',
        title: 'Associate Professor of Biology & Molecular Ecology',
        department: 'Department of Biology',
        subject: 'biology',
        topics: ['Phylogeography and Molecular Ecology', 'Arachnid Evolution', 'Conservation Genetics of Rare Species', 'DNA Barcoding'],
        summary: 'Dr. Matthew Graham uses next-generation genomic sequencing and phylogeographic modeling to study evolutionary adaptations and biodiversity conservation in fragile ecosystems.',
        source: 'https://www.easternct.edu'
      },
      {
        id: 3549,
        name: 'Prof. Terry Lennox',
        title: 'Professor of Computer Science and Digital Media',
        department: 'Department of Computer Science',
        subject: 'computer-science',
        topics: ['Human-Computer Interaction', 'UX/UI Accessibility Standards', 'Digital Media Systems', 'Educational Software Design'],
        summary: 'Prof. Terry Lennox researches assistive computing technologies and user experience accessibility standards, designing digital interfaces for diverse cognitive populations.',
        source: 'https://www.easternct.edu'
      }
    ]
  },

  // 18. Eastern Illinois University (Row 682)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Eastern Illinois University',
    shortName: 'EIU Charleston',
    slug: 'eastern-illinois-university-charleston',
    location: 'Charleston, Illinois, United States',
    website: 'https://www.eiu.edu',
    sourceRow: 682,
    stats: {
      established: '1895',
      students: '8,850+',
      international: '11%',
      faculty: '450+'
    },
    heroSummary: 'Eastern Illinois University (EIU) is a public comprehensive university in Charleston, Illinois, celebrated for its College of Education, pre-health sciences, renewable energy center, and graduate programs in clinical psychology and technology.',
    academicOverview: 'Accredited by the Higher Learning Commission, EIU is home to the Center for Clean Energy Research and Education (CENCERE), the Tarble Arts Center, and renowned educator preparation academies. EIU consistently achieves high graduation and job placement rates among Midwest regional universities, combining accessible tuition with personalized faculty mentorship.',
    researchAdmissions: 'Undergraduate admissions require high school graduation credentials with minimum 2.50 GPA; EIU is test-optional. Graduate programs require an accredited bachelor’s degree with a 2.75+ cumulative GPA and department review.',
    opportunities: [
      {
        id: 7989,
        title: 'Master of Science in Technology - Computer Technology Concentration',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'STEM-designated graduate degree in advanced cloud infrastructure, database management, network security, and enterprise technology management in Charleston.',
        funding: 'Eligible for Graduate Assistantships offering full tuition remission and monthly living stipends ($1,050/month)',
        tuition: '$345 per credit hour (in-state graduate rate) / $860 out-of-state',
        fee: '$30 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027 (Fall Cohort)',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'Accredited bachelor degree in technology, engineering, or computing with 2.75+ GPA',
          ielts: 'TOEFL 79 or IELTS 6.5 for international students',
          gre: 'Not required',
          papers: 'Statement of professional intent, resume, and official undergraduate transcripts',
          references: 'Two letters of recommendation from professors or technical supervisors'
        }
      },
      {
        id: 7990,
        title: 'Master of Science in Clinical Psychology',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Two-year clinical psychology curriculum preparing practitioners for mental health counseling licensure through 700+ hours of supervised clinical practicum and master thesis research.',
        funding: 'Departmental graduate assistantships with tuition waiver',
        tuition: '$345 per credit hour in-state',
        fee: '$30 application fee',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'Bachelor degree with minimum 15 credits in psychology and 3.00+ GPA',
          ielts: 'TOEFL 80 or IELTS 6.5',
          gre: 'GRE General Test scores',
          papers: 'Psychology research statement and personal autobiographical statement',
          references: 'Three letters of recommendation from psychology faculty'
        }
      },
      {
        id: 7991,
        title: 'Bachelor of Science in Biological Sciences - Pre-Health & Medical Track',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Four-year baccalaureate degree in human anatomy, mammalian physiology, molecular genetics, and organic biochemistry with dedicated pre-medical advising.',
        funding: 'EIU Biological Sciences scholarship endowments up to $4,000 annually',
        tuition: '$4,150 per semester in-state',
        fee: '$30 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'High school graduation with 2.50+ GPA',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'Not required',
          papers: 'High school transcripts and personal statement',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7992,
        title: 'EIU International Student Academic Excellence Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Competitive tuition reduction scholarship awarded to international undergraduate and graduate students demonstrating superior academic credentials upon entry.',
        funding: 'Reduction of out-of-state tuition to in-state tuition rate (savings of approx. $10,000 per year)',
        tuition: 'In-state tuition rate waiver',
        fee: '$0 scholarship fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'Cumulative GPA equivalent to 3.50+ on a 4.0 scale',
          ielts: 'IELTS 6.5 or TOEFL 79',
          gre: 'Not required',
          papers: 'Scholarship application and statement on contributing to international campus diversity',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7993,
        title: 'CENCERE Renewable Energy & Biomass Research Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        desc: 'Graduate research fellowship based at the Center for Clean Energy Research and Education, investigating biomass gasification, wind energy integration, and solar photovoltaics.',
        funding: '$12,000 annual stipend plus complete graduate tuition waiver',
        tuition: 'Fully funded fellowship',
        fee: '$0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'Enrolled graduate student in technology, chemistry, or environmental biology with 3.20+ GPA',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Research statement on clean energy or biomass fuels and CV',
          references: 'CENCERE faculty nomination'
        }
      },
      {
        id: 7994,
        title: 'Master of Science in Cybersecurity',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Comprehensive 32-credit master’s curriculum in digital forensics, ethical network penetration, secure cryptosystems, and threat risk governance.',
        funding: 'Graduate teaching assistantships available',
        tuition: '$345 per credit hour in-state',
        fee: '$30 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.eiu.edu',
        requirements: {
          gpa: 'Bachelor degree in computing or related technical field with 2.75+ GPA',
          ielts: 'TOEFL 79 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Technical background statement and transcripts',
          references: 'Two professional references'
        }
      }
    ],
    researchers: [
      {
        id: 3550,
        name: 'Dr. Peter Liu',
        title: 'Professor of Technology and Director of CENCERE',
        department: 'Center for Clean Energy Research and Education',
        subject: 'engineering',
        topics: ['Renewable Energy Systems', 'Biomass Gasification Kinetics', 'Solar Photovoltaic Inverters', 'Energy Efficiency Auditing'],
        summary: 'Dr. Peter Liu leads clean energy investigations at CENCERE, developing gasification reactor optimization models and hybrid wind-solar energy systems for Midwestern agricultural facilities.',
        source: 'https://www.eiu.edu'
      },
      {
        id: 3551,
        name: 'Dr. Gary A. Bulla',
        title: 'Professor of Biological Sciences & Molecular Genetics Lead',
        department: 'Department of Biological Sciences',
        subject: 'biology',
        topics: ['Hepatic Gene Regulation', 'Cellular Differentiation', 'Transcription Factors in Mammalian Cells', 'Cancer Cell Genetics'],
        summary: 'Dr. Gary A. Bulla investigates genetic and epigenetic mechanisms governing gene silencing and cellular differentiation in mammalian liver cells, mentoring student researchers in recombinant DNA techniques.',
        source: 'https://www.eiu.edu'
      },
      {
        id: 3552,
        name: 'Dr. Steven J. Scher',
        title: 'Professor of Clinical Psychology',
        department: 'Department of Psychology',
        subject: 'social-sciences',
        topics: ['Cognitive Dissonance Theory', 'Moral Judgment and Decision Making', 'Clinical Psychotherapy Outcomes', 'Evolutionary Psychology'],
        summary: 'Dr. Steven J. Scher conducts clinical and theoretical research on cognitive consistency, ethical judgment processes, and outcome metrics for evidence-based psychotherapy.',
        source: 'https://www.eiu.edu'
      }
    ]
  },

  // 19. Eastern Kentucky University (Row 683)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Eastern Kentucky University',
    shortName: 'EKU Richmond',
    slug: 'eastern-kentucky-university-richmond',
    location: 'Richmond, Kentucky, United States',
    website: 'https://www.eku.edu',
    sourceRow: 683,
    stats: {
      established: '1906',
      students: '14,000+',
      international: '5%',
      faculty: '650+'
    },
    heroSummary: 'Eastern Kentucky University (EKU) is a regional comprehensive university in Richmond, Kentucky, internationally recognized for its College of Justice, Safety, and Military Science, aviation flight training, forensic science, and nursing.',
    academicOverview: 'EKU operates world-class fire safety and combustion testing facilities, an FAA-certified collegiate flight training fleet, accredited forensic chemistry laboratories, and rural nursing clinics. It is known nationwide as the premier institution for emergency services and Homeland Security education, preparing professionals who safeguard national infrastructure.',
    researchAdmissions: 'Admissions require a high school diploma with minimum 2.50 GPA; EKU is test-optional. Forensic science, professional aviation flight, and nursing have secondary competitive admission requirements.',
    opportunities: [
      {
        id: 7995,
        title: 'Bachelor of Science in Fire, Arson, and Explosion Investigation',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'World-renowned forensic fire engineering degree utilizing full-scale burn test buildings to investigate fire dynamics, electrical failure origins, and explosive residue analysis.',
        funding: 'Eligible for national fire service scholarships and EKU Safety Leadership Grants',
        tuition: '$9,750 annual in-state tuition / $16,000 out-of-state',
        fee: '$35 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027 (Fall Intake)',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'High school graduation credentials with minimum 2.50 GPA',
          ielts: 'TOEFL 71 or IELTS 6.0',
          gre: 'Not required',
          papers: 'Official transcripts and personal statement detailing career in fire protection or investigative science',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7996,
        title: 'Bachelor of Science in Forensic Science - Forensic Chemistry Track',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'FEPAC-accredited laboratory science curriculum in instrumental toxicology, gas chromatography-mass spectrometry, drug analysis, and courtroom expert witness testimony.',
        funding: 'Forensic Science Society endowments and STEM merit awards up to $4,000',
        tuition: '$9,750 annual tuition (plus laboratory consumables fees)',
        fee: '$35 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'High school GPA of 3.00+ with strong calculus and chemistry grades',
          ielts: 'IELTS 6.5 or TOEFL 79',
          gre: 'Not required',
          papers: 'High school transcripts and criminal background clearance',
          references: 'Two science teacher recommendations'
        }
      },
      {
        id: 7997,
        title: 'Bachelor of Science in Aviation - Professional Flight Concentration',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'FAA Part 141-approved collegiate flight training program providing commercial pilot certification, multi-engine ratings, turbine aerodynamics, and airline dispatcher licensing.',
        funding: 'Aviation flight scholarships and major airline cadet partnerships (Delta, Envoy, Republic)',
        tuition: '$9,750 annual tuition (plus flight training laboratory course fees)',
        fee: '$35 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'High school GPA 2.75+ and FAA First Class Medical Certificate',
          ielts: 'English language fluency (ICAO standard)',
          gre: 'Not required',
          papers: 'Aviation application dossier, FAA medical clearance, and transcripts',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7998,
        title: 'Master of Science in Safety, Security, and Emergency Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Nationally acclaimed online master’s program in corporate risk mitigation, disaster response planning, occupational health safety, and homeland security intelligence.',
        funding: 'Public safety agency tuition discounts up to 20%',
        tuition: '$611 per credit hour (36 credits total)',
        fee: '$35 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'Accredited bachelor degree in any discipline with minimum 2.75 GPA',
          ielts: 'TOEFL 79 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Professional resume and statement of emergency management career intent',
          references: 'Two professional letters of reference'
        }
      },
      {
        id: 7999,
        title: 'EKU Trailblazer Academic Excellence Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Four-year undergraduate scholarship recognizing outstanding academic achievement for incoming freshmen entering science, technology, or mathematics majors.',
        funding: 'Up to $8,000 per year renewable for four years ($32,000 total)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'High school GPA 3.80+ or ACT 26+ / SAT 1230+',
          ielts: 'Standard language requirement',
          gre: 'Not required',
          papers: 'High school transcript and scholarship essay',
          references: 'Two letters of recommendation from educators'
        }
      },
      {
        id: 8000,
        title: 'Bachelor of Science in Nursing (BSN)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'CCNE-accredited professional nursing curriculum featuring hospital simulation labs and rural clinical rotations throughout the Appalachian foothills.',
        funding: 'Kentucky Nursing Incentive Scholarships and regional healthcare system loan payback awards',
        tuition: '$9,750 annual tuition',
        fee: '$35 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.eku.edu',
        requirements: {
          gpa: 'Minimum 2.75 GPA in prerequisite anatomy, physiology, and microbiology',
          ielts: 'TOEFL 79 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Nursing application form and background check',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3553,
        name: 'Dr. Corey D. Farris',
        title: 'Professor of Fire Protection and Safety Engineering Technology',
        department: 'Department of Fire Protection and Paramedicine Sciences',
        subject: 'engineering',
        topics: ['Combustion Dynamics', 'Explosive Residue Chromatography', 'Fire Modeling Simulations', 'Structural Burn Investigations'],
        summary: 'Dr. Corey D. Farris conducts experimental research on compartment fire behavior and accelerant detection, training federal investigators in forensic origin-and-cause analysis.',
        source: 'https://www.eku.edu'
      },
      {
        id: 3554,
        name: 'Dr. Cynthia C. Kaeser',
        title: 'Associate Professor of Forensic Science and Analytical Chemistry',
        department: 'Department of Chemistry and Forensic Science',
        subject: 'chemistry',
        topics: ['Forensic Toxicology', 'Mass Spectrometry of Controlled Substances', 'Trace Explosive Identification', 'Courtroom Science Standards'],
        summary: 'Dr. Cynthia C. Kaeser develops chromatographic separation techniques for novel synthetic psychoactive substances, publishing on high-resolution mass spectrometry standards in forensics.',
        source: 'https://www.eku.edu'
      },
      {
        id: 3555,
        name: 'Dr. Derek R. Paulsen',
        title: 'Professor of Criminal Justice and Crime Mapping Analytics',
        department: 'School of Justice Studies',
        subject: 'social-sciences',
        topics: ['Geographic Information Systems in Policing', 'Spatial Crime Analysis', 'Predictive Crime Mapping', 'Homeland Security Intelligence'],
        summary: 'Dr. Derek R. Paulsen pioneers spatial crime analysis and predictive intelligence mapping, advising urban police departments and federal agencies on spatial data analytics.',
        source: 'https://www.eku.edu'
      }
    ]
  },

  // 20. Eastern New Mexico University (Row 685)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Eastern New Mexico University',
    shortName: 'ENMU Portales',
    slug: 'eastern-new-mexico-university-portales',
    location: 'Portales, New Mexico, United States',
    website: 'https://www.enmu.edu',
    sourceRow: 685,
    stats: {
      established: '1934',
      students: '5,200+',
      international: '6%',
      faculty: '200+'
    },
    heroSummary: 'Eastern New Mexico University (ENMU) is New Mexico’s largest regional comprehensive university and a designated Hispanic-Serving Institution in Portales, noted for speech-language pathology, forensic anthropology, wildlife management, and digital media arts.',
    academicOverview: 'Accredited by the Higher Learning Commission, ENMU provides high-quality, affordable education across the High Plains. The university operates the Miles Mineral Museum, the Blackwater Draw National Historic Landmark archaeological research center, and a national-caliber speech-language pathology clinic serving rural southwestern communities.',
    researchAdmissions: 'Accessible undergraduate admissions requiring high school graduation with 2.50+ GPA; ENMU is test-optional. Graduate admissions require an accredited bachelor’s degree with 2.80+ GPA and relevant departmental prerequisites.',
    opportunities: [
      {
        id: 8001,
        title: 'Master of Science in Communicative Disorders (Speech-Language Pathology)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'CAA-accredited master’s program preparing speech-language pathologists with 400+ clinical hours in pediatric dysphagia, neurogenic speech disorders, and augmentative communication.',
        funding: 'Eligible for New Mexico Health Service Corps stipends and ENMU Graduate Assistantships',
        tuition: '$345 per credit hour (in-state graduate rate) / $520 out-of-state',
        fee: '$30 application fee',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027 (Annual Fall Cohort)',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'Bachelor degree in communicative disorders or post-baccalaureate leveling with minimum 3.00 GPA',
          ielts: 'TOEFL 80 or IELTS 6.5 for international students',
          gre: 'Not required',
          papers: 'Statement of professional intent, clinical observation log, and academic transcripts',
          references: 'Three letters of recommendation from speech-language pathology faculty'
        }
      },
      {
        id: 8002,
        title: 'Bachelor of Science in Forensic Science & Anthropology',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Interdisciplinary degree combining osteology, forensic taphonomy, crime scene mapping, and archaeological recovery at the Blackwater Draw research station.',
        funding: 'ENMU Foundation STEM scholarships and student field research stipends',
        tuition: '$3,350 per semester in-state / $4,650 out-of-state',
        fee: '$30 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'High school graduation with 2.50+ GPA',
          ielts: 'Standard language requirement',
          gre: 'Not required',
          papers: 'High school transcript and personal statement',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 8003,
        title: 'Bachelor of Science in Wildlife and Fisheries Sciences',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Undergraduate science degree in desert grassland ecology, freshwater fisheries management, wildlife telemetry, and conservation genetics in the Llano Estacado region.',
        funding: 'New Mexico Department of Game and Fish internships and departmental awards',
        tuition: '$3,350 per semester',
        fee: '$30 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'High school diploma with good standing in biology and chemistry',
          ielts: 'IELTS 6.0 or TOEFL 68',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest in wildlife conservation',
          references: 'One teacher recommendation'
        }
      },
      {
        id: 8004,
        title: 'Blackwater Draw Archaeological Research & Geoarchaeology Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Field and laboratory fellowship based at the Blackwater Draw National Historic Landmark, conducting stratigraphic excavations, lithic analysis, and Paleoindian environmental studies.',
        funding: '$3,000 summer research stipend plus on-site field housing and laboratory supplies',
        tuition: 'Fully funded summer research appointment',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'Undergraduate junior/senior or master student in anthropology or geology with 3.00+ GPA',
          ielts: 'Not required for domestic students',
          gre: 'Not required',
          papers: 'Archaeological research proposal and CV',
          references: 'Faculty advisor recommendation'
        }
      },
      {
        id: 8005,
        title: 'ENMU Freshmen Academic Foundation Merit Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Four-year automatic merit scholarship for incoming freshmen demonstrating superior high school academic performance across all academic majors.',
        funding: 'Up to $4,000 per academic year renewable for four years ($16,000 total)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'High school GPA 3.50+ or ACT 23+ / SAT 1130+',
          ielts: 'Standard language requirement',
          gre: 'Not required',
          papers: 'High school transcript and admissions application',
          references: 'High school recommendation'
        }
      },
      {
        id: 8006,
        title: 'Master of Business Administration (MBA)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'ACBSP-accredited 30-credit online and on-campus MBA focusing on managerial economics, financial analytics, information systems, and organizational leadership.',
        funding: 'Eligible for graduate assistantships offering full tuition coverage and monthly stipends',
        tuition: '$345 per credit hour in-state',
        fee: '$30 application fee',
        deadline: '2027-07-20',
        deadlineText: 'July 20, 2027',
        source: 'https://www.enmu.edu',
        requirements: {
          gpa: 'Accredited bachelor degree in any field with 2.80+ GPA',
          ielts: 'TOEFL 79 or IELTS 6.0',
          gre: 'GMAT/GRE waived with 3.0+ undergraduate GPA',
          papers: 'Resume and statement of graduate goals',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3556,
        name: 'Dr. Matthew J. O\'Brien',
        title: 'Associate Professor of Anthropology & Director of Blackwater Draw',
        department: 'Department of Anthropology and Applied Archaeology',
        subject: 'social-sciences',
        topics: ['Paleoindian Archaeology', 'Geoarchaeological Stratigraphy', 'Lithic Technology', 'North American Hunter-Gatherer Ecology'],
        summary: 'Dr. Matthew J. O\'Brien directs archaeological excavations at Blackwater Draw (the Clovis type-site), investigating late Pleistocene human adaptation and megafauna interactions.',
        source: 'https://www.enmu.edu'
      },
      {
        id: 3557,
        name: 'Dr. Suzanne Swift',
        title: 'Director of Speech-Language Pathology & Associate Professor',
        department: 'Department of Communicative Disorders',
        subject: 'biology',
        topics: ['Pediatric Feeding and Swallowing Disorders', 'Neurogenic Communication Impairments', 'Rural Telepractice in Speech Pathology', 'Clinical Supervision'],
        summary: 'Dr. Suzanne Swift researches rural telepractice delivery models for pediatric speech and swallowing disorders, expanding clinical speech pathology access across eastern New Mexico.',
        source: 'https://www.enmu.edu'
      },
      {
        id: 3558,
        name: 'Dr. Jesse Filbrun',
        title: 'Associate Professor of Biology & Aquatic Ecology Lead',
        department: 'Department of Biology',
        subject: 'environment',
        topics: ['Fish Larval Ecology', 'Arid Riverine Conservation', 'Aquatic Food Web Dynamics', 'Fisheries Population Modeling'],
        summary: 'Dr. Jesse Filbrun models larval fish survival and riverine food web dynamics in the Pecos River basin, collaborating with state and federal wildlife agencies on native fish recovery.',
        source: 'https://www.enmu.edu'
      }
    ]
  }
];

export const batch57Part2 = part2;

const fileContent = `// Batch 57 Part 2: USA (10 Universities, Rows 667-685)
export const batch57Part2 = ${JSON.stringify(part2, null, 2)};
`;

writeFileSync('scripts/batch57-data-part2.mjs', fileContent, 'utf8');
console.log('Finished Part 2: USA (10 universities, 60 opps, 30 res)!');
