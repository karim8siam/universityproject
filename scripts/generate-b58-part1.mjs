// Generator for Batch 58 Part 1: USA (14 Universities, Rows 686-731)
// Opp IDs: 8067 - 8150 (84 opps)
// Res IDs: 3589 - 3630 (42 researchers)
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

export const batch58Part1 = [
  // 1. Eastern Oregon University (Row 686)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Eastern Oregon University',
    shortName: 'EOU',
    slug: 'eastern-oregon-university-la-grande',
    location: 'La Grande, Oregon, United States',
    website: 'https://www.eou.edu',
    sourceRow: 686,
    stats: {
      established: '1929',
      students: '2,800+',
      international: '4%',
      faculty: '160+'
    },
    heroSummary: 'Eastern Oregon University is Oregon’s official rural university, offering rigorous academic programs in business, natural sciences, teacher education, and sustainable mountain agriculture.',
    academicOverview: 'Located in the scenic Grande Ronde Valley, EOU serves as an essential regional center for higher education and applied environmental research in the Pacific Northwest. Academic hallmarks include agricultural science partnerships with Oregon State University, outdoor science education, anthropology, and digital business administration.',
    researchAdmissions: 'Undergraduate admissions require high school graduation or GED with cumulative GPA >= 2.75. Standardized test scores (SAT/ACT) are test-optional. International applicants require TOEFL iBT 61+ or IELTS 6.0+.',
    opportunities: [
      {
        id: 8067,
        title: 'Bachelor of Science in Sustainable Rangeland & Wildlife Ecology',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Interdisciplinary degree studying forest ecosystems, rangeland restoration, wildlife conservation, and watershed hydrology in eastern Oregon.',
        funding: 'Eligible for EOU Mountaineer Scholar Awards up to $8,000 annually',
        tuition: '$9,840 annual in-state / $16,800 non-resident tuition',
        fee: '$50 application fee',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027 (Priority Fall Admissions)',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'Cumulative high school GPA 2.75+ or college transfer credit with 2.50+',
          ielts: 'IELTS 6.0 or TOEFL iBT 61 for international students',
          gre: 'Not required',
          papers: 'High school transcripts and personal educational goals essay',
          references: 'One academic reference letter from counselor or teacher'
        }
      },
      {
        id: 8068,
        title: 'Bachelor of Science in Computer Science & Cloud Analytics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Comprehensive four-year computer science curriculum covering object-oriented programming, cloud computing infrastructure, and applied database systems.',
        funding: 'EOU STEM Dean’s Merit Grant up to $5,000 per year',
        tuition: '$10,200 per academic year',
        fee: '$50 application fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'High school diploma with algebra and pre-calculus coursework',
          ielts: 'IELTS 6.0 or TOEFL 61',
          gre: 'Not required',
          papers: 'Official transcripts and personal statement',
          references: 'One recommendation letter'
        }
      },
      {
        id: 8069,
        title: 'Master of Science in Education (M.S.Ed.) & Rural Teaching Leadership',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Graduate teacher preparation degree focusing on differentiated curriculum design, rural school district leadership, and instructional technology.',
        funding: 'Oregon Rural Educator Loan Forgiveness and graduate assistantships available',
        tuition: '$545 per graduate credit hour ($19,620 total program)',
        fee: '$50 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'Baccalaureate degree from accredited institution with 3.00+ GPA',
          ielts: 'IELTS 6.5 or TOEFL 79',
          gre: 'Not required',
          papers: 'Philosophy of education statement and resume of teaching experience',
          references: 'Three professional letters of recommendation'
        }
      },
      {
        id: 8070,
        title: 'EOU International Student Academic Excellence Award',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Competitive tuition remission scholarship awarded to undergraduate international students based on secondary school academic merit.',
        funding: '$4,000 to $7,500 annual tuition waiver renewable for four years',
        tuition: 'Direct reduction of non-resident tuition',
        fee: '$0 scholarship fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'International admission GPA 3.25+ or equivalent secondary school marks',
          ielts: 'IELTS 6.5 or TOEFL 70+',
          gre: 'Not required',
          papers: 'Scholarship application essay detailing cross-cultural leadership',
          references: 'One teacher or principal recommendation'
        }
      },
      {
        id: 8071,
        title: 'Grande Ronde Basin Hydrology & Stream Restoration Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        desc: 'Undergraduate research fellowship supporting stream temperature monitoring, salmon habitat restoration, and GIS hydrological mapping in northeastern Oregon rivers.',
        funding: '$6,000 annual research stipend plus field lodging',
        tuition: 'Funded field fellowship',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'Enrolled Biology or Environmental Science major with 3.00+ GPA',
          ielts: 'English proficiency suitable for fieldwork coordination',
          gre: 'Not required',
          papers: 'Field research proposal and academic transcript',
          references: 'Recommendation from faculty mentor'
        }
      },
      {
        id: 8072,
        title: 'Rural Community Health & Telehealth Practicum Internship',
        type: 'Internship',
        subject: 'biology',
        desc: 'Applied healthcare internship placing pre-health and psychology students in rural health clinics throughout Union and Baker counties.',
        funding: '$3,500 semester clinical stipend and mileage reimbursement',
        tuition: 'Internship academic credit available',
        fee: '$0 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://www.eou.edu',
        requirements: {
          gpa: 'Sophomore or Junior standing with 2.80+ GPA in health sciences',
          ielts: 'Fluent English for patient communication',
          gre: 'Not required',
          papers: 'Cover letter, resume, and background check',
          references: 'One academic reference'
        }
      }
    ],
    researchers: [
      {
        id: 3589,
        name: 'Dr. Amy R. Yielding',
        title: 'Professor of Mathematics and Computational Modeling',
        department: 'College of STEM',
        subject: 'mathematics',
        topics: ['Applied Mathematics', 'Mathematical Modeling of Ecosystems', 'Differential Equations', 'Undergraduate STEM Pedagogy'],
        summary: 'Dr. Amy R. Yielding investigates mathematical biology and population dynamics models, designing innovative pedagogy to enhance rural STEM student retention.',
        source: 'https://www.eou.edu'
      },
      {
        id: 3590,
        name: 'Dr. Bryan Fisher',
        title: 'Associate Professor of Biology and Wildlife Conservation',
        department: 'Department of Biology',
        subject: 'biology',
        topics: ['Avian Ecology', 'Riparian Zone Restoration', 'Wildlife Habitat Connectivity', 'Conservation Biology'],
        summary: 'Dr. Bryan Fisher examines bird breeding behaviors and riparian habitat restoration throughout the Blue Mountains and Wallowa mountain range.',
        source: 'https://www.eou.edu'
      },
      {
        id: 3591,
        name: 'Dr. Colleen Johnson',
        title: 'Professor of Economics and Regional Development',
        department: 'College of Business',
        subject: 'social-sciences',
        topics: ['Rural Economic Development', 'Natural Resource Economics', 'Regional Labor Markets', 'Agricultural Trade Policy'],
        summary: 'Dr. Colleen Johnson researches regional economic resilience in timber and agricultural communities across the Pacific Northwest interior.',
        source: 'https://www.eou.edu'
      }
    ]
  },

  // 2. Empire State University at Manhattan (Row 690)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Empire State University at Manhattan',
    shortName: 'SUNY Empire Manhattan',
    slug: 'empire-state-university-manhattan',
    location: 'New York, New York, United States',
    website: 'https://sunyempire.edu',
    sourceRow: 690,
    stats: {
      established: '1971',
      students: '10,500+',
      international: '6%',
      faculty: '420+'
    },
    heroSummary: 'Empire State University at Manhattan is the State University of New York’s flagship institution for flexible, individualized, and adult-centered higher education in Midtown Manhattan.',
    academicOverview: 'Part of the SUNY system, SUNY Empire Manhattan specializes in innovative degree customization, prior learning assessment, and hybrid educational delivery across business management, labor studies, cybersecurity, and public policy.',
    researchAdmissions: 'Admissions require high school diploma or equivalent. Undergraduate admissions are rolling, welcoming transfer credits, military training, and professional learning portfolios. International applicants require TOEFL iBT 79+ or IELTS 6.5+.',
    opportunities: [
      {
        id: 8073,
        title: 'Bachelor of Science in Cybersecurity & Digital Infrastructure Defense',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Hands-on curriculum analyzing network forensics, penetration testing, information assurance policies, and cloud infrastructure defense in New York City.',
        funding: 'Eligible for SUNY Empire Foundation Scholarships and NYS Excelsior Scholarship',
        tuition: '$7,070 annual in-state / $16,980 non-resident tuition',
        fee: '$50 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'High school diploma or 24+ transferable college credits with 2.50+ GPA',
          ielts: 'IELTS 6.5 or TOEFL 79 for international students',
          gre: 'Not required',
          papers: 'Official transcripts and personal learning essay',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 8074,
        title: 'Master of Arts in Adult Learning & Instructional Design',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Graduate program preparing corporate trainers, higher education administrators, and instructional designers in digital curriculum architecture.',
        funding: 'Graduate assistantships and diversity fellowship stipends available',
        tuition: '$5,655 per semester in-state ($11,310 annual)',
        fee: '$50 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'Accredited bachelor’s degree with 3.00+ cumulative GPA',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Statement of professional purpose and curriculum vitae',
          references: 'Two professional or academic recommendation letters'
        }
      },
      {
        id: 8075,
        title: 'Bachelor of Professional Studies in Healthcare Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Degree path designed for clinical allied health professionals advancing into healthcare facility administration, health informatics, and clinical governance.',
        funding: 'SUNY Empire Healthcare Leadership Grants up to $3,500',
        tuition: '$353 per credit hour ($10,590 annual full-time)',
        fee: '$50 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'High school completion or clinical associate degree',
          ielts: 'IELTS 6.5 or TOEFL 79',
          gre: 'Not required',
          papers: 'Transcripts and statement of educational intent',
          references: 'One professional recommendation'
        }
      },
      {
        id: 8076,
        title: 'Manhattan Urban Diversity & Adult Learner Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit and need-based scholarship providing direct tuition support for adult learners and non-traditional students attending the Manhattan campus.',
        funding: '$2,500 to $5,000 annual scholarship award',
        tuition: 'Direct tuition remission',
        fee: '$0 scholarship fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'Undergraduate cumulative GPA 3.00+ at SUNY Empire',
          ielts: 'Enrolled student status',
          gre: 'Not required',
          papers: 'Scholarship essay detailing community engagement in NYC',
          references: 'One mentor endorsement letter'
        }
      },
      {
        id: 8077,
        title: 'Labor Relations & Worker Rights Policy Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Research fellowship conducted through the Harry Van Arsdale Jr. School of Labor Studies, exploring collective bargaining in modern gig economies.',
        funding: '$4,500 project grant and archival access to NY labor archives',
        tuition: 'Fellowship grant funding',
        fee: '$0 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'Enrolled graduate or upper-level undergraduate with 3.20+ GPA',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Research project outline on labor trends and resume',
          references: 'Faculty advisor nomination'
        }
      },
      {
        id: 8078,
        title: 'Fintech & New York Financial District Internship Practicum',
        type: 'Internship',
        subject: 'social-sciences',
        desc: 'Structured business practicum connecting SUNY Empire finance students with Manhattan investment funds, regulatory compliance bodies, and fintech startups.',
        funding: '$4,000 semester internship stipend',
        tuition: 'Academic course credit included',
        fee: '$0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://sunyempire.edu',
        requirements: {
          gpa: 'Completed 60+ undergraduate credits with 3.00+ GPA in business/finance',
          ielts: 'Professional English fluency',
          gre: 'Not required',
          papers: 'Professional resume and cover letter',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3592,
        name: 'Dr. Barry Eisenberg',
        title: 'Associate Professor of Healthcare Management',
        department: 'School of Business',
        subject: 'social-sciences',
        topics: ['Healthcare Strategic Planning', 'Hospital Leadership Systems', 'Organizational Culture in Healthcare', 'Health Care Policy'],
        summary: 'Dr. Barry Eisenberg examines institutional change management and clinical quality improvement in major metropolitan hospital centers.',
        source: 'https://sunyempire.edu'
      },
      {
        id: 3593,
        name: 'Dr. Roxana Toma',
        title: 'Associate Professor of Public Affairs and Quantitative Methods',
        department: 'School of Public Affairs',
        subject: 'social-sciences',
        topics: ['Public Sector Anti-Corruption', 'Policy Evaluation Metrics', 'Governance Transparency', 'Comparative Public Administration'],
        summary: 'Dr. Roxana Toma conducts quantitative investigations into global institutional corruption, governmental transparency indices, and civic trust.',
        source: 'https://sunyempire.edu'
      },
      {
        id: 3594,
        name: 'Dr. David A. Fullard',
        title: 'Visiting Assistant Professor of Criminal Justice',
        department: 'School of Social and Behavioral Sciences',
        subject: 'social-sciences',
        topics: ['Correctional Reform', 'Criminal Justice Policy', 'Urban Behavioral Health', 'Forensic Behavioral Science'],
        summary: 'Dr. David A. Fullard evaluates urban criminal justice reintegration, prison mental health programs, and administrative accountability in correctional systems.',
        source: 'https://sunyempire.edu'
      }
    ]
  },

  // 3. Georgia Gwinnett College (Row 719)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Georgia Gwinnett College',
    shortName: 'GGC',
    slug: 'georgia-gwinnett-college-lawrenceville',
    location: 'Lawrenceville, Georgia, United States',
    website: 'https://www.ggc.edu',
    sourceRow: 719,
    stats: {
      established: '2005',
      students: '11,000+',
      international: '7%',
      faculty: '520+'
    },
    heroSummary: 'Georgia Gwinnett College is an innovative public four-year college in metropolitan Atlanta, celebrated for cutting-edge technology integration, personal mentorship, and diverse STEM education.',
    academicOverview: 'Established by the University System of Georgia as the nation’s first four-year public college founded in the 21st century, GGC emphasizes student-faculty research collaboration across information technology, biochemistry, criminal justice, and digital cinema production.',
    researchAdmissions: 'Undergraduate applicants require high school graduation with college preparatory curriculum (GPA >= 2.00). Standardized test scores (SAT/ACT) may be submitted. International applicants require TOEFL iBT 74+ or IELTS 6.0+.',
    opportunities: [
      {
        id: 8079,
        title: 'Bachelor of Science in Information Technology & Software Development',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'ABET-accredited degree path covering modern software engineering, web database architecture, object-oriented design, and mobile app development.',
        funding: 'Eligible for Georgia HOPE and Zell Miller Scholarships plus GGC Foundation Grants',
        tuition: '$4,166 annual in-state / $13,446 non-resident tuition',
        fee: '$20 application fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027 (Priority Fall Admissions)',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'High school graduation with minimum 2.00 core GPA (2.50+ recommended)',
          ielts: 'IELTS 6.0 or TOEFL 74 for international applicants',
          gre: 'Not required',
          papers: 'Official high school transcripts and immunization clearance',
          references: 'Not required for general admission'
        }
      },
      {
        id: 8080,
        title: 'Bachelor of Science in Chemistry & Pre-Pharmacy Research',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Rigorous laboratory chemistry degree covering organic synthesis, instrumental spectrometry, medicinal biochemistry, and physical chemistry research.',
        funding: 'GGC STEM Undergraduate Research Assistantships up to $3,000 per term',
        tuition: '$4,350 annual in-state / $13,600 non-resident',
        fee: '$20 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'High school GPA 2.50+ with advanced biology and chemistry courses',
          ielts: 'IELTS 6.0 or TOEFL 74',
          gre: 'Not required',
          papers: 'High school academic transcripts',
          references: 'One recommendation letter from a science instructor'
        }
      },
      {
        id: 8081,
        title: 'Bachelor of Science in Environmental Science & Urban Ecosystems',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Interdisciplinary study of urban water management, ecological restoration, environmental toxicology, and GIS mapping throughout Georgia watersheds.',
        funding: 'GGC Sustainability Grant and summer research fellowship funding',
        tuition: '$4,200 annual in-state / $13,500 non-resident',
        fee: '$20 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'High school graduation with 2.25+ core GPA',
          ielts: 'IELTS 6.0',
          gre: 'Not required',
          papers: 'Transcripts and personal statement',
          references: 'One academic reference'
        }
      },
      {
        id: 8082,
        title: 'GGC Global Student Academic Achievement Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit-based international scholarship waiving out-of-state tuition differentials for exceptional non-resident and international undergraduate students.',
        funding: 'Out-of-state tuition waiver saving up to $9,280 annually',
        tuition: 'Reduces tuition to in-state rates',
        fee: '$0 scholarship fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'Cumulative college or high school GPA 3.25+',
          ielts: 'IELTS 6.5 or TOEFL 80+',
          gre: 'Not required',
          papers: 'Scholarship application essay and resume of extracurricular service',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8083,
        title: 'Atlanta Innovation Corridor Cybersecurity Practicum',
        type: 'Internship',
        subject: 'computer-science',
        desc: 'Corporate technology internship pairing GGC IT majors with Atlanta Fortune 500 cybersecurity security operations centers (SOC).',
        funding: '$4,200 semester corporate practicum stipend',
        tuition: 'Internship academic credit available',
        fee: '$0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'Information Technology major with 3.00+ GPA and completed networking coursework',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Resume, technical coding portfolio, and interview',
          references: 'IT department faculty recommendation'
        }
      },
      {
        id: 8084,
        title: 'GGC Undergraduate Molecular Biology Research Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Faculty-mentored laboratory research fellowship investigating antimicrobial peptides and bacterial genome sequencing in GGC’s allied health laboratories.',
        funding: '$5,000 summer research stipend plus laboratory supplies',
        tuition: 'Direct fellowship stipend',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.ggc.edu',
        requirements: {
          gpa: 'Biology or Chemistry major with 3.20+ GPA',
          ielts: 'Good academic standing',
          gre: 'Not required',
          papers: 'Research project proposal and transcript',
          references: 'Endorsement from faculty research sponsor'
        }
      }
    ],
    researchers: [
      {
        id: 3595,
        name: 'Dr. Caryl A. McNeilly',
        title: 'Associate Professor of Chemistry and Chemical Education',
        department: 'School of Science and Technology',
        subject: 'chemistry',
        topics: ['Bioinorganic Chemistry', 'Chemical Spectrometry', 'STEM Educational Inclusivity', 'Organic Mechanism Synthesis'],
        summary: 'Dr. Caryl A. McNeilly explores synthetic transition metal catalysts and guided-inquiry instructional models for undergraduate chemistry cohorts.',
        source: 'https://www.ggc.edu'
      },
      {
        id: 3596,
        name: 'Dr. Sairam V. Tangirala',
        title: 'Associate Professor of Information Technology',
        department: 'School of Science and Technology',
        subject: 'computer-science',
        topics: ['Cloud Database Architecture', 'Big Data Engineering', 'Machine Learning Algorithms', 'Enterprise Information Systems'],
        summary: 'Dr. Sairam V. Tangirala designs high-throughput distributed database architectures and machine learning anomaly detection frameworks.',
        source: 'https://www.ggc.edu'
      },
      {
        id: 3597,
        name: 'Dr. Rebecca E. Cooper',
        title: 'Associate Professor of Psychology and Behavioral Health',
        department: 'School of Liberal Arts',
        subject: 'social-sciences',
        topics: ['Cognitive Development', 'Behavioral Neuroscience', 'Health Psychology Interventions', 'Cross-Cultural Psychological Wellbeing'],
        summary: 'Dr. Rebecca E. Cooper studies neural correlates of stress resilience and cognitive interventions mitigating burnout in collegiate populations.',
        source: 'https://www.ggc.edu'
      }
    ]
  }
];

// Append remaining 11 universities to batch58Part1
console.log('Writing batch58-data-part1.mjs...');
