// Batch 37 Data - Part 3 (Universities 21 to 30: Japan 3, Sweden 3, Netherlands 4)
// Opportunities: IDs 3868 to 3937 (70 opps)
// Researchers: IDs 1677 to 1706 (30 researchers)

export const batch37Part3Universities = [
  // 21. Japan - Junshin Gakuen University (Row 1663)
  {
    slug: 'junshin-gakuen-university-fukuoka',
    institution: 'Junshin Gakuen University',
    shortName: 'Junshin Gakuen',
    countryId: 'japan',
    countryLabel: 'Japan',
    location: 'Minami-ku, Fukuoka, Japan',
    website: 'https://www.junshin-u.ac.jp',
    sourceRow: 1663,
    badge: 'Premier Medical Health Sciences University',
    lead: 'Junshin Gakuen University is an esteemed private medical and health sciences university situated in Fukuoka, renowned across Kyushu for radiological technology, medical laboratory science, and clinical nursing.',
    overview: 'Founded upon Catholic educational foundations of wisdom and compassion, Junshin Gakuen University delivers advanced four-year baccalaureate training across four vital healthcare disciplines: Radiological Technology, Medical Laboratory Science, Health and Nursing, and Clinical Engineering. Equipped with university-grade CT/MRI simulation suites, flow cytometry labs, and hemodialysis units, Junshin Gakuen trains high-calibre licensed clinical professionals for major university hospitals throughout Japan.',
    quickFacts: {
      type: 'Private Specialist Healthcare University',
      campus: 'Chikushigaoka Campus (Minami-ku, Fukuoka City, Kyushu)',
      accreditation: 'MEXT (Ministry of Education, Culture, Sports, Science and Technology) Accredited',
      admissions: 'National Common Test for University Admissions or institutional entrance exam; medical prerequisite science courses',
      language: 'Japanese (primary clinical instruction) & English (academic biomedical seminars)',
      aid: 'MEXT Monbukagakusho Scholarships, JASSO Honors Scholarships, Junshin Gakuen Memorial Grants'
    },
    strengths: [
      'Radiological Technology & Medical Diagnostic Imaging',
      'Clinical Laboratory Genetics & Immunology',
      'Advanced Clinical Nursing & Patient-Centered Care',
      'Clinical Engineering & Artificial Organ Systems'
    ],
    programs: [
      { title: 'Bachelor of Science in Radiological Technology', level: 'Bachelor\'s', desc: 'Accredited four-year degree qualifying graduates for the national radiological technologist licensing examination.' },
      { title: 'Bachelor of Science in Medical Laboratory Science', level: 'Bachelor\'s', desc: 'Comprehensive laboratory science program examining clinical biochemistry, haematology, and molecular pathology.' },
      { title: 'Bachelor of Science in Health and Nursing', level: 'Bachelor\'s', desc: 'Integrative nursing curriculum leading to national registered nurse and public health nurse licensing.' },
      { title: 'Bachelor of Science in Clinical Engineering', level: 'Bachelor\'s', desc: 'Specialized healthcare technology degree training specialists in extracorporeal circulation and intensive care life-support machinery.' }
    ],
    opportunities: [
      {
        id: 3868,
        title: 'MEXT Monbukagakusho Undergraduate Healthcare Scholarship at Junshin Gakuen',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology', 'physics'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: '¥117,000 monthly living stipend, 100% full tuition exemption, and round-trip economy airfare to Japan',
        tuition: '¥0 (Tuition-free under Japanese Government MEXT scholarship)',
        fee: '¥0',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Prestigious Japanese Government (MEXT) scholarship supporting foreign students undertaking degree studies in healthcare technology and nursing.',
        requirements: {
          gpa: 'Secondary school GPA >= 3.5/4.0 (or top 15% academic ranking) with strong physics and chemistry results',
          ielts: 'Japanese JLPT N2/N1 or English IELTS 6.5 (MEXT preparatory course included)',
          gre: 'Not required',
          papers: 'High school graduation certificate, MEXT medical examination form, and recommendation from Japanese embassy',
          references: '2 teacher recommendation letters'
        }
      },
      {
        id: 3869,
        title: 'Bachelor of Science in Radiological Technology',
        type: 'Bachelor\'s',
        subject: 'physics',
        subjects: ['physics', 'biology'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: 'Junshin Gakuen Academic Merit Grants up to ¥400,000/year for top entrance examination performers',
        tuition: '¥1,550,000 per year including specialist laboratory simulation fees',
        fee: '¥30,000 (Entrance exam fee)',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Four-year degree training students in multi-slice CT, 3.0T MRI, radiation oncology therapy planning, and nuclear medicine.',
        requirements: {
          gpa: 'High school completion with high achievements in physics and mathematics',
          ielts: 'Japanese language proficiency (JLPT N1 recommended for clinical exams)',
          gre: 'Not required',
          papers: 'Official transcripts, medical fitness certificate, and statement of healthcare aspiration',
          references: 'High school principal recommendation'
        }
      },
      {
        id: 3870,
        title: 'Bachelor of Science in Clinical Engineering (Artificial Organs)',
        type: 'Bachelor\'s',
        subject: 'engineering',
        subjects: ['engineering', 'biology'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        funding: 'Kyushu Medical Device Industry Study Bursaries up to ¥300,000/year',
        tuition: '¥1,500,000 per year',
        fee: '¥30,000',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Specialized healthcare engineering program training students to operate heart-lung machines, dialysis systems, and mechanical ventilators in surgical theatres.',
        requirements: {
          gpa: 'Secondary school diploma with physics and biology sequences',
          ielts: 'Japanese language proficiency',
          gre: 'Not required',
          papers: 'Academic transcripts and personal statement',
          references: '1 school reference'
        }
      },
      {
        id: 3871,
        title: 'JASSO International Student Healthcare Honors Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        funding: '¥48,000 per month (€350/mo equivalent) living grant awarded by the Japan Student Services Organization',
        tuition: 'Applied in conjunction with university tuition reduction schemes',
        fee: '¥0',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Merit-based living allowance grant awarded to privately financed international students who maintain superior academic grades at Junshin Gakuen.',
        requirements: {
          gpa: 'Enrolled full-time international undergraduate student with GPA >= 2.30/3.00 on JASSO scale',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'JASSO scholarship application form and income verification',
          references: 'University international student office nomination'
        }
      },
      {
        id: 3872,
        title: 'Bachelor of Science in Medical Laboratory Science',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: 'Eligible for national student support loan funds (JASSO)',
        tuition: '¥1,550,000/year',
        fee: '¥30,000',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Four-year degree training medical technologists in clinical immunology, genetics, bacteriology, and automated clinical chemistry analysers.',
        requirements: {
          gpa: 'High school graduation with chemistry and biology subjects',
          ielts: 'Japanese language proficiency',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest',
          references: '1 teacher recommendation'
        }
      },
      {
        id: 3873,
        title: 'Fukuoka University Hospital Clinical Imaging Internship',
        type: 'Internship',
        subject: 'physics',
        subjects: ['physics', 'biology'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'Hospital clinical training insurance and subsidized meals provided',
        tuition: 'Compulsory curricular clinical placement',
        fee: '¥0',
        source: 'https://www.junshin-u.ac.jp',
        desc: '16-week hospital rotation rotating through diagnostic radiology, interventional catheterization suites, and radiotherapy units at partner tertiary hospitals.',
        requirements: {
          gpa: 'Senior 4th-year student in Radiological Technology passing clinical readiness OSCE exams',
          ielts: 'Fluent conversational and technical Japanese',
          gre: 'Not required',
          papers: 'Immunization passport and clinical placement agreement',
          references: 'Clinical coordinator sign-off'
        }
      },
      {
        id: 3874,
        title: 'Advanced Diagnostic Ultrasound & Hemodynamics Certification',
        type: 'Course',
        subject: 'biology',
        subjects: ['biology', 'physics'],
        university: 'Junshin Gakuen University',
        country: 'Japan',
        location: 'Fukuoka, Japan',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Subsidized clinical continuing education seminar',
        tuition: '¥45,000 registration fee',
        fee: '¥0',
        source: 'https://www.junshin-u.ac.jp',
        desc: 'Weekend hands-on certification course for healthcare professionals focusing on Doppler echocardiography, carotid artery sonography, and abdominal organ mapping.',
        requirements: {
          gpa: 'Licensed medical technologist, radiologist, physician, or 4th-year student',
          ielts: 'Japanese technical comprehension',
          gre: 'Not required',
          papers: 'Registration form and proof of license/student status',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1677,
        name: 'Prof. Masayuki Kanamori',
        title: 'Professor of Radiological Sciences',
        university: 'Junshin Gakuen University',
        subject: 'physics',
        topics: ['Dual-Energy CT Image Processing', 'Radiation Dose Reduction Protocols', 'Monte Carlo Radiation Simulation', 'AI in Chest Radiography'],
        summary: 'Expert in medical radiation physics developing algorithmic low-dose CT reconstruction techniques and quantitative noise reduction filters for paediatric imaging.',
        source: 'https://www.junshin-u.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1678,
        name: 'Prof. Hiroaki Takeuchi',
        title: 'Professor of Clinical Laboratory Medicine & Immunology',
        university: 'Junshin Gakuen University',
        subject: 'biology',
        topics: ['Autoimmune Disease Serology', 'Flow Cytometric Phenotyping', 'Rapid Diagnostic Molecular Assays', 'Hospital-Acquired Infection Surveillance'],
        summary: 'Immunologist researching autoantibody profiling in systemic lupus erythematosus and novel point-of-care nucleic acid amplification tests for antibiotic-resistant bacteria.',
        source: 'https://www.junshin-u.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1679,
        name: 'Prof. Kazuko Tsutsumi',
        title: 'Professor of Health and Nursing Science',
        university: 'Junshin Gakuen University',
        subject: 'biology',
        topics: ['Elderly Dementia Care Nursing', 'Community Health Screening', 'Palliative Nursing in Home Environments', 'Caregiver Burnout Prevention'],
        summary: 'Nursing researcher investigating community-based integrated care models, dementia friendly neighborhood interventions, and psychosocial support for family caregivers in Kyushu.',
        source: 'https://www.junshin-u.ac.jp',
        recruiting: 'Not verified'
      }
    ]
  },

  // 22. Japan - Kobe City College of Nursing (Row 1669)
  {
    slug: 'kobe-city-college-of-nursing-hyogo',
    institution: 'Kobe City College of Nursing',
    shortName: 'Kobe City Nursing',
    countryId: 'japan',
    countryLabel: 'Japan',
    location: 'Nishi-ku, Kobe, Hyogo, Japan',
    website: 'https://www.kobe-ccn.ac.jp',
    sourceRow: 1669,
    badge: 'Premier Public Municipal Nursing University',
    lead: 'Kobe City College of Nursing is Japan’s foremost public municipal nursing university, situated in Kobe Research Products Park, renowned for disaster nursing, community gerontology, and advanced midwifery.',
    overview: 'Established in 1996 in the wake of the Great Hanshin-Awaji Earthquake, Kobe City College of Nursing is a municipal public university dedicated to cultivating compassionate, highly skilled nursing professionals and disaster relief leaders. Located in Kobe Academic Town (Gakuen-toshi), the university features doctoral graduate programs, specialized disaster simulation centers, and direct integration into Kobe City Medical Center General Hospital.',
    quickFacts: {
      type: 'Public Municipal Specialist University (Doctoral Degree-Granting)',
      campus: 'Gakuen-toshi Campus (Kobe Academic Town, Nishi-ku, Kobe, Hyogo)',
      accreditation: 'JUAA (Japan University Accreditation Association), MEXT Accredited',
      admissions: 'National University Entrance Examination (Kyotsu Test) and secondary school recommendation',
      language: 'Japanese (primary instruction) & English (international disaster nursing collaborations)',
      aid: 'Kobe Municipal Tuition Reductions, MEXT Scholarships, JASSO Emergency Study Grants'
    },
    strengths: [
      'Disaster Nursing & Emergency Crisis Management',
      'Community Health & Home Healthcare Gerontology',
      'Advanced Midwifery & Perinatal Health',
      'Doctoral Research in Evidence-Based Nursing Practice'
    ],
    programs: [
      { title: 'Bachelor of Science in Nursing', level: 'Bachelor\'s', desc: 'Comprehensive four-year degree qualifying graduates for national examinations in nursing and public health nursing.' },
      { title: 'Master of Nursing Science (Disaster & Critical Care)', level: 'Master\'s', desc: 'Pioneering graduate program focusing on disaster nursing logistics, triage management, and emergency response.' },
      { title: 'Doctor of Nursing Science (DNS)', level: 'Doctorate', desc: 'Advanced doctoral degree preparing academic nurse educators, healthcare policymakers, and nursing research leaders.' },
      { title: 'Midwifery Specialist Post-Baccalaureate Program', level: 'Graduate Diploma', desc: 'One-year intensive clinical diploma preparing registered nurses for national midwife certification.' }
    ],
    opportunities: [
      {
        id: 3875,
        title: 'Kobe Municipal Graduate Nursing Research Fellowship',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Full tuition fee waiver plus ¥80,000 monthly research stipend funded by the Kobe City Educational Trust',
        tuition: '¥0 (Tuition-free municipal fellowship; regular public fee ¥535,800/year)',
        fee: '¥30,000',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Prestigious municipal scholarship awarded to outstanding graduate students pursuing Master of Nursing Science or Doctor of Nursing Science research.',
        requirements: {
          gpa: 'BSN or Master\'s in Nursing with grade average >= 3.3/4.0 and licensed registered nurse status',
          ielts: 'Japanese JLPT N1 proficiency',
          gre: 'Not required',
          papers: 'Research plan (3,000 characters in Japanese), CV, and clinical nursing portfolio',
          references: '2 letters of recommendation'
        }
      },
      {
        id: 3876,
        title: 'Doctor of Nursing Science (DNS) Doctoral Candidacy',
        type: 'PhD',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2026-12-10',
        deadlineText: 'December 10, 2026',
        funding: 'Eligible for JSPS Research Fellowship for Young Scientists (DC1/DC2) paying ¥200,000/month',
        tuition: '¥535,800 per year (reduced for Kobe City residents)',
        fee: '¥30,000',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Three-year research doctorate investigating disaster triage decision support algorithms, palliative symptom management, and nursing informatics.',
        requirements: {
          gpa: 'Master of Nursing Science or relevant health master\'s degree with peer-reviewed publication',
          ielts: 'Japanese language proficiency and scientific English reading ability',
          gre: 'Not required',
          papers: 'Doctoral research proposal, master\'s thesis copy, and published research papers',
          references: '2 academic references'
        }
      },
      {
        id: 3877,
        title: 'Master of Nursing Science in Disaster Nursing & Emergency Relief',
        type: 'Master\'s',
        subject: 'biology',
        subjects: ['biology', 'environment'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: 'Japanese Red Cross and WHO Kobe Centre collaborative research grants',
        tuition: '¥535,800/year',
        fee: '¥30,000',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Two-year research-intensive master\'s analyzing rapid disaster response protocols, shelter hygiene surveillance, and psychological first aid following earthquakes and floods.',
        requirements: {
          gpa: 'Bachelor of Science in Nursing and minimum 1 year of clinical acute care experience',
          ielts: 'Japanese JLPT N1',
          gre: 'Not required',
          papers: 'Clinical resume, research proposal on disaster/emergency nursing, and academic transcripts',
          references: '1 clinical nursing supervisor reference'
        }
      },
      {
        id: 3878,
        title: 'Bachelor of Science in Nursing (Four-Year Degree)',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        funding: 'Kobe City Resident tuition discount (entrance fee reduced from ¥423,000 to ¥282,000)',
        tuition: '¥535,800/year',
        fee: '¥17,000',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Four-year degree providing clinical placements across Kobe City Medical Center General Hospital and community nursing stations.',
        requirements: {
          gpa: 'High school graduation and national Common Test for University Admissions results',
          ielts: 'Native or near-native Japanese proficiency',
          gre: 'Not required',
          papers: 'High school transcript, health check certificate, and personal essay',
          references: 'School principal recommendation'
        }
      },
      {
        id: 3879,
        title: 'Kobe Academic Town International Student Study Bursary',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        funding: '¥30,000 per month living assistance grant supported by the Kobe Gakuen-toshi University Consortium',
        tuition: 'Applied toward student living and accommodation expenses',
        fee: '¥0',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Study bursary supporting international students enrolled in nursing science who contribute to cross-cultural health research.',
        requirements: {
          gpa: 'Regular enrolled international graduate student in good academic standing',
          ielts: 'Japanese B2/C1 equivalent',
          gre: 'Not required',
          papers: 'Application form and copy of student residence card',
          references: 'Supervising professor recommendation'
        }
      },
      {
        id: 3880,
        title: 'Disaster Emergency Simulation & Triage Fieldwork Practicum',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology', 'environment'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Field simulation exercise travel and safety equipment funded by university',
        tuition: 'Integrated into Disaster Nursing curriculum',
        fee: '¥0',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: 'Intensive fieldwork exercise held at the Disaster Reduction and Human Renovation Institution in Kobe simulating mass casualty incidents and earthquake shelters.',
        requirements: {
          gpa: 'Registered student in graduate nursing or 4th-year BSN',
          ielts: 'Japanese language proficiency',
          gre: 'Not required',
          papers: 'Simulation safety waiver and medical emergency clearance',
          references: 'Course coordinator approval'
        }
      },
      {
        id: 3881,
        title: 'Community Gerontological Care & Fall Prevention Seminar',
        type: 'Course',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Kobe City College of Nursing',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        funding: 'Accredited by the Japanese Nursing Association for continuing education credits',
        tuition: '¥25,000 professional course fee',
        fee: '¥0',
        source: 'https://www.kobe-ccn.ac.jp',
        desc: '3-day clinical seminar exploring mobility assessment tools, environmental home modifications, and cognitive screening for frail elderly in super-aged communities.',
        requirements: {
          gpa: 'Licensed nurse, physical therapist, occupational therapist, or care manager',
          ielts: 'Japanese language proficiency',
          gre: 'Not required',
          papers: 'Professional license copy and application form',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1680,
        name: 'Prof. Aiko Yamamoto',
        title: 'Professor of Disaster Nursing & Emergency Preparedness',
        university: 'Kobe City College of Nursing',
        subject: 'biology',
        topics: ['Disaster Nursing Competencies', 'Community Emergency Evacuation', 'Triage Protocol Training', 'WHO Kobe Center Collaborations'],
        summary: 'Pioneer of disaster nursing pedagogy in Japan, advising the World Health Organization and Japanese government on nursing response systems during mega-earthquakes and tsunamis.',
        source: 'https://www.kobe-ccn.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1681,
        name: 'Prof. Keiko Hattori',
        title: 'Professor of Gerontological & Home Healthcare Nursing',
        university: 'Kobe City College of Nursing',
        subject: 'biology',
        topics: ['End-of-Life Home Care', 'Dementia Care Interventions', 'Interprofessional Family Support', 'Nurse-Led Chronic Care'],
        summary: 'Leading scholar of community home-based nursing, researching pain relief and palliative care integration for elderly individuals living alone in suburban housing estates.',
        source: 'https://www.kobe-ccn.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1682,
        name: 'Prof. Sachiko Ogata',
        title: 'Professor of Maternal & Child Health Midwifery',
        university: 'Kobe City College of Nursing',
        subject: 'biology',
        topics: ['Perinatal Mental Health', 'Postpartum Depression Screening', 'Midwifery Care Models', 'Breastfeeding Support Systems'],
        summary: 'Clinical midwifery researcher evaluating early screening protocols for postpartum depression and mother-infant attachment bonding in urban maternity units.',
        source: 'https://www.kobe-ccn.ac.jp',
        recruiting: 'Not verified'
      }
    ]
  },

  // 23. Japan - Kobe International University (Row 1675)
  {
    slug: 'kobe-international-university-rokko-island',
    institution: 'Kobe International University',
    shortName: 'Kobe International Uni',
    countryId: 'japan',
    countryLabel: 'Japan',
    location: 'Higashinada-ku, Kobe, Hyogo, Japan',
    website: 'https://www.kobe-kiu.ac.jp',
    sourceRow: 1675,
    badge: 'Premier International Island Campus for Economics & Rehabilitation',
    lead: 'Kobe International University is an innovative private university situated on the waterfront of Rokko Island in Kobe, renowned for international economics, tourism business, and physical rehabilitation science.',
    overview: 'Established in 1968 and relocated in 1995 to a modern waterfront campus on Rokko Island in Kobe, Kobe International University (KIU) is an Anglican educational institution dedicated to global economic development and compassionate human rehabilitation. KIU features two distinguished faculties: the Faculty of Economics (with departments in International Economics and Tourism/Business Management) and the Faculty of Rehabilitation (training licensed physical therapists).',
    quickFacts: {
      type: 'Private International Comprehensive University',
      campus: 'Rokko Island Marine Campus (Higashinada-ku, Kobe, Hyogo)',
      accreditation: 'MEXT Accredited, Japan University Accreditation Association (JUAA)',
      admissions: 'EJU (Examination for Japanese University Admission) for international students; secondary diploma',
      language: 'Japanese & English (Bilingual international business courses available)',
      aid: 'KIU International Student Tuition Waivers (30% to 100%), MEXT Scholarships, Hyogo Prefecture Grants'
    },
    strengths: [
      'International Economics & Global Trade Logistics',
      'Hospitality, Aviation & Tourism Business Management',
      'Physical Therapy & Sports Biomechanics Rehabilitation',
      'Cross-Cultural Communication & Asian Business Strategy'
    ],
    programs: [
      { title: 'Bachelor of Arts in International Economics', level: 'Bachelor\'s', desc: 'Comprehensive economics degree focusing on port logistics, Asian trade agreements, and financial analytics.' },
      { title: 'Bachelor of Science in Physical Therapy (Rehabilitation)', level: 'Bachelor\'s', desc: 'Accredited clinical program preparing physical therapists with motion analysis lab training and hospital internships.' },
      { title: 'Bachelor of Arts in Tourism and Business Culture', level: 'Bachelor\'s', desc: 'Applied business degree covering airline management, hotel resort development, and regional ecotourism.' },
      { title: 'International Cross-Cultural Business Certificate', level: 'Course', desc: 'Intensive global trade certificate designed for international exchange students studying Japanese business practices.' }
    ],
    opportunities: [
      {
        id: 3882,
        title: 'KIU Special International Student Tuition Reduction Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: '30%, 50%, or 100% tuition waiver (saving up to ¥900,000/year) based on academic entrance performance',
        tuition: '¥850,000/year (Economics) / ¥1,450,000/year (Physical Therapy) before tuition reduction',
        fee: '¥20,000 (Entrance exam fee)',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: 'Generous institutional scholarship automatically awarded to qualified foreign international students accepted into undergraduate programs.',
        requirements: {
          gpa: 'Secondary school GPA >= 3.0/4.0 and competitive EJU score',
          ielts: 'JLPT N2 (or N3 with English B2 credentials)',
          gre: 'Not required',
          papers: 'High school graduation certificate, EJU exam score sheet, and statement of financial support',
          references: '1 recommendation from Japanese language school or secondary principal'
        }
      },
      {
        id: 3883,
        title: 'Bachelor of Science in Physical Therapy (Rehabilitation)',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Rehabilitation Medical Specialist Scholarships up to ¥300,000/year',
        tuition: '¥1,450,000 per year including 3D motion capture lab fees',
        fee: '¥30,000',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: 'Four-year degree training students in neuromuscular rehabilitation, orthopaedic therapy, sports injury rehabilitation, and pediatric physical therapy.',
        requirements: {
          gpa: 'High school completion with biology and physics foundations',
          ielts: 'Japanese language proficiency (JLPT N1 recommended for clinical exams)',
          gre: 'Not required',
          papers: 'Secondary school transcripts and physical fitness statement',
          references: 'High school teacher recommendation'
        }
      },
      {
        id: 3884,
        title: 'Bachelor of Arts in International Economics (Port of Kobe Trade)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        funding: 'Hyogo International Association living subsidies available',
        tuition: '¥850,000 per year (reduced to ¥595,000 with 30% international waiver)',
        fee: '¥20,000',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: 'Four-year program situated adjacent to the Port of Kobe exploring container logistics, maritime commerce, and supply chain digitalization.',
        requirements: {
          gpa: 'High school diploma or 12 years of formal education',
          ielts: 'JLPT N2 or IELTS 6.0',
          gre: 'Not required',
          papers: 'Transcripts, statement of purpose, and passport copy',
          references: '1 academic reference'
        }
      },
      {
        id: 3885,
        title: 'Hyogo Prefecture International Student Scholarship at KIU',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        funding: '¥30,000 per month living grant funded by the Hyogo Prefectural Government',
        tuition: 'Applied toward student living costs in Kobe',
        fee: '¥0',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: 'Prefectural scholarship promoting international exchange and intercultural community participation for foreign students enrolled at universities in Hyogo.',
        requirements: {
          gpa: 'Enrolled full-time foreign student with excellent academic performance and strong attendance record',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'Application form, resident certificate in Hyogo Prefecture, and essay on cultural exchange',
          references: 'KIU International Exchange Center recommendation'
        }
      },
      {
        id: 3886,
        title: 'Physical Therapy Clinical Hospital Rotation Internship',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Hospital training insurance and clinical accommodation allowances provided',
        tuition: 'Compulsory clinical placement within Faculty of Rehabilitation',
        fee: '¥0',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: '18-week clinical clerkship rotating through acute orthopedic hospitals and neurological rehabilitation facilities across the Kansai region.',
        requirements: {
          gpa: 'Passing the clinical OSCE and CBT competency assessments in Year 3',
          ielts: 'Fluent Japanese communication',
          gre: 'Not required',
          papers: 'Clinical clearance dossier and medical immunization proof',
          references: 'Faculty clinical advisor sign-off'
        }
      },
      {
        id: 3887,
        title: 'Port of Kobe Maritime Logistics & Trade Operations Practicum',
        type: 'Internship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'engineering'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Paid corporate internship ¥1,150/hour with maritime shipping and logistics firms on Rokko Island',
        tuition: 'Integrated into Economics internship elective credits',
        fee: '¥0',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: '10-week summer internship inside Rokko Island container terminals and customs brokerage agencies in Kobe.',
        requirements: {
          gpa: 'Enrolled in 2nd or 3rd year of Economics or Tourism at KIU',
          ielts: 'Bilingual Japanese/English preferred',
          gre: 'Not required',
          papers: 'Resume and corporate cover letter',
          references: 'Career support center approval'
        }
      },
      {
        id: 3888,
        title: 'Japanese Business Etiquette & Global Logistics Seminar',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Kobe International University',
        country: 'Japan',
        location: 'Kobe, Hyogo, Japan',
        deadline: '2027-05-20',
        deadlineText: 'May 20, 2027',
        funding: 'Free for all enrolled KIU international students',
        tuition: '¥35,000 for external participants',
        fee: '¥0',
        source: 'https://www.kobe-kiu.ac.jp',
        desc: 'Four-week intensive seminar on Keigo corporate Japanese, business negotiation customs, and export customs documentation in Japan.',
        requirements: {
          gpa: 'JLPT N3 or higher',
          ielts: 'Conversational Japanese',
          gre: 'Not required',
          papers: 'Registration form',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1683,
        name: 'Prof. Kenjiro Hirayama',
        title: 'Professor of International Economics & Monetary Policy',
        university: 'Kobe International University',
        subject: 'social-sciences',
        topics: ['Asian Financial Integration', 'Exchange Rate Volatility', 'Macroeconomics of Japan', 'Foreign Direct Investment Flows'],
        summary: 'Leading macroeconomic scholar examining yen currency stabilization, Japanese monetary policy transmission, and capital flow liberalization in East Asian economies.',
        source: 'https://www.kobe-kiu.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1684,
        name: 'Prof. Yuji Takahashi',
        title: 'Professor of Rehabilitation Science & Biomechanics',
        university: 'Kobe International University',
        subject: 'biology',
        topics: ['Gait Kinematics in Stroke Recovery', 'Electromyographic Motion Analysis', 'Fall Prevention in Geriatrics', 'Orthotic Device Engineering'],
        summary: 'Physical therapy investigator analyzing 3D kinematic motion capture, surface electromyography patterns during stair navigation, and functional recovery after stroke.',
        source: 'https://www.kobe-kiu.ac.jp',
        recruiting: 'Not verified'
      },
      {
        id: 1685,
        name: 'Prof. Mari Shimizu',
        title: 'Associate Professor of Tourism & Cross-Cultural Management',
        university: 'Kobe International University',
        subject: 'social-sciences',
        topics: ['Inbound Tourism in Western Japan', 'Cultural Heritage Management', 'Hospitality Service Quality', 'Aviation Route Economics'],
        summary: 'Tourism researcher evaluating Kansai regional tourism branding, sustainable heritage preservation, and the economic impacts of low-cost carriers on regional Japanese airports.',
        source: 'https://www.kobe-kiu.ac.jp',
        recruiting: 'Not verified'
      }
    ]
  },

  // 24. Sweden - Karlstad University - Hus 21 Innovation Center (Row 1571)
  {
    slug: 'karlstad-university-hus-21-innovation',
    institution: 'Karlstad University - Hus 21 Innovation Center',
    shortName: 'Karlstad Hus 21',
    countryId: 'sweden',
    countryLabel: 'Sweden',
    location: 'Karlstad, Värmland, Sweden',
    website: 'https://www.kau.se',
    sourceRow: 1571,
    badge: 'Premier Swedish Center for Service Research & Digital Innovation',
    lead: 'Karlstad University’s Hus 21 Innovation Center is an internationally celebrated Nordic hub for service science, forestry bio-economy, computer privacy, and digital transformation.',
    overview: 'Located on the central campus of Karlstad University in Värmland, Hus 21 houses the world-famous Service Research Center (CTF - Centrum för tjänsteforskning), the Computer Science Privacy and Security Lab, and leading bio-economy innovation nodes. Hus 21 serves as a collaborative incubator where academic researchers, global enterprises (including Ericsson, Telia, and Volvo), and Swedish regional agencies co-create groundbreaking user-centric service ecosystems and sustainable bio-based materials.',
    quickFacts: {
      type: 'Public Research University Innovation & Research Center',
      campus: 'Universitetsgatan Campus (Karlstad, Värmland, Sweden)',
      accreditation: 'Swedish Higher Education Authority (UKÄ) Accredited',
      admissions: 'National Swedish University Admissions (Antagning.se); bachelor\'s degree for master\'s/doctoral study',
      language: 'Swedish & English (Extensive array of master\'s and PhD programs taught 100% in English)',
      aid: 'Karlstad University Global Scholarships (up to 100% tuition coverage), Swedish Institute (SI) Scholarships'
    },
    strengths: [
      'Service Research Center (CTF) & Customer Experience Modeling',
      'Computer Science: Cybersecurity, Privacy-Enhancing Tech & 5G/6G Networks',
      'Forestry Bio-Economy & Nanocellulose Material Engineering',
      'Environmental Energy Systems & Solar Thermal Engineering'
    ],
    programs: [
      { title: 'Master of Science in Computer Science (Privacy & Security)', level: 'Master\'s', desc: 'English-taught master\'s investigating privacy-enhancing technologies, anonymous communications, and network resilience.' },
      { title: 'PhD in Business Administration (Service Innovation at CTF)', level: 'Doctorate', desc: 'Doctoral research within Europe\'s leading service research center examining digital service ecosystems and value co-creation.' },
      { title: 'Master of Science in Chemical Engineering (Bio-Economy)', level: 'Master\'s', desc: 'Specialized Nordic master\'s examining wood chemistry, bio-composites, and circular packaging solutions.' },
      { title: 'PhD in Computer Science (Distributed Systems)', level: 'Doctorate', desc: 'Fully funded research doctorate focusing on low-latency 5G/6G transport protocols and edge cloud orchestration.' }
    ],
    opportunities: [
      {
        id: 3889,
        title: 'Karlstad University Global Masters Scholarship at Hus 21',
        type: 'Scholarship',
        subject: 'computer-science',
        subjects: ['computer-science', 'social-sciences'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: '25%, 50%, 75%, or 100% tuition fee waiver for the full two-year duration of the master\'s degree',
        tuition: 'SEK 140,000/year (approx. €12,500/year for non-EU/EEA students before scholarship waiver)',
        fee: 'SEK 900 (University Admissions Sweden application fee)',
        source: 'https://www.kau.se',
        desc: 'Merit-based scholarship awarded to citizens of countries outside the EU/EEA/Switzerland who demonstrate superior academic performance.',
        requirements: {
          gpa: 'Completed bachelor\'s degree equivalent to Swedish Kandidatexamen with GPA >= 80% or 3.5/4.0',
          ielts: 'English 6 / IELTS 6.5 (minimum 5.5 in each section) or TOEFL iBT 90',
          gre: 'Not required',
          papers: 'Academic transcripts, degree certificate, motivation letter (600 words), and curriculum vitae',
          references: '2 letters of recommendation'
        }
      },
      {
        id: 3890,
        title: 'PhD Position in Computer Science: Privacy-Enhancing Technologies',
        type: 'PhD',
        subject: 'computer-science',
        subjects: ['computer-science'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        funding: 'Full 4-year Swedish doctoral employment contract (Doktorandanställning) paying SEK 32,000 to 36,500/month plus comprehensive state pensions and healthcare',
        tuition: 'SEK 0 (Tuition-free doctoral employment under Swedish law)',
        fee: 'SEK 0',
        source: 'https://www.kau.se',
        desc: 'Fully employed doctoral research candidate within the PriSec research group investigating traffic analysis resistance, anonymous routing, and zero-knowledge proofs.',
        requirements: {
          gpa: 'Master of Science in Computer Science, Computer Engineering, or Cybersecurity with at least 60 ECTS in advanced CS',
          ielts: 'Flawless academic English proficiency',
          gre: 'Not required',
          papers: 'Master\'s thesis copy, detailed statement of research vision, and academic transcripts',
          references: '2 academic referee contact details'
        }
      },
      {
        id: 3891,
        title: 'MSc in Computer Science (Cybersecurity & Low Latency Networking)',
        type: 'Master\'s',
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Eligible for Swedish Institute Scholarships for Global Professionals (covering full tuition and SEK 12,000/month living stipend)',
        tuition: 'SEK 0 (EU/EEA) / SEK 145,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.kau.se',
        desc: 'Two-year English-taught MSc exploring queue management (CoDel/PIE), Linux network stack internals, and cryptography.',
        requirements: {
          gpa: 'Bachelor\'s in Computer Science or Computer Engineering including courses in operating systems, algorithms, and networks',
          ielts: 'IELTS 6.5 overall',
          gre: 'Not required',
          papers: 'CV and statement of purpose submitted via UniversityAdmissions.se',
          references: 'Not required'
        }
      },
      {
        id: 3892,
        title: 'PhD in Business Administration at CTF (Service Innovation & AI)',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'computer-science'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2026-11-25',
        deadlineText: 'November 25, 2026',
        funding: 'Fully funded 4-year university faculty position with monthly salary SEK 32,500/month plus travel budget',
        tuition: 'SEK 0',
        fee: 'SEK 0',
        source: 'https://www.kau.se',
        desc: 'Doctoral research position at CTF Service Research Center analyzing how generative AI and algorithmic agents reshape customer journeys and organizational service design.',
        requirements: {
          gpa: 'Master\'s degree in Business Administration, Marketing, Management, or Cognitive Science with distinction',
          ielts: 'Excellent spoken and written English',
          gre: 'Not required',
          papers: 'Master\'s thesis abstract, CV, and 4-page research prospectus on service innovation',
          references: '2 letters of academic reference'
        }
      },
      {
        id: 3893,
        title: 'MSc in Chemical Engineering (Forestry Bio-Economy & Biomaterials)',
        type: 'Master\'s',
        subject: 'chemistry',
        subjects: ['chemistry', 'environment'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'The Paper Province industry foundation student project bursaries up to SEK 25,000',
        tuition: 'SEK 0 (EU/EEA) / SEK 155,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.kau.se',
        desc: 'Two-year engineering master\'s examining nanocellulose, lignin valorization, green composites, and pulp and paper biorefinery engineering.',
        requirements: {
          gpa: 'BSc in Chemical Engineering, Chemistry, or Materials Science with at least 30 ECTS in chemistry',
          ielts: 'IELTS 6.5',
          gre: 'Not required',
          papers: 'Transcripts, degree diploma, and CV',
          references: 'Not required'
        }
      },
      {
        id: 3894,
        title: 'Hus 21 Digital Innovation & Startup Incubator Practicum',
        type: 'Internship',
        subject: 'computer-science',
        subjects: ['computer-science', 'social-sciences'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'Erasmus+ traineeship grant €650 to €800/month or host startup project stipends',
        tuition: 'Curricular master\'s internship credits',
        fee: 'SEK 0',
        source: 'https://www.kau.se',
        desc: '5-month applied innovation internship working with tech startups and industrial incubators based in the Hus 21 innovation ecosystem.',
        requirements: {
          gpa: 'Enrolled in master\'s studies in computer science, design, or business at Karlstad University',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Portfolio of software or business projects and resume',
          references: 'Incubator mentor approval'
        }
      },
      {
        id: 3895,
        title: 'Privacy-by-Design & EU AI Act Compliance Masterclass',
        type: 'Course',
        subject: 'computer-science',
        subjects: ['computer-science', 'social-sciences'],
        university: 'Karlstad University - Hus 21 Innovation Center',
        country: 'Sweden',
        location: 'Karlstad, Värmland, Sweden',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Funded by the Swedish Knowledge Foundation (KK-stiftelsen) for industry professionals',
        tuition: 'SEK 0 for Swedish/EU industry employees / SEK 7,500 external',
        fee: 'SEK 0',
        source: 'https://www.kau.se',
        desc: '5-week professional masterclass exploring privacy threat modeling (LINDDUN), algorithmic transparency under the EU AI Act, and cryptographic auditing.',
        requirements: {
          gpa: 'Degree in Computer Science, Information Security, Law, or 2 years IT professional experience',
          ielts: 'English instructional proficiency',
          gre: 'Not required',
          papers: 'Registration form and proof of relevant background',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1686,
        name: 'Prof. Simone Fischer-Hübner',
        title: 'Professor of Computer Science & Privacy Systems',
        university: 'Karlstad University - Hus 21 Innovation Center',
        subject: 'computer-science',
        topics: ['Privacy-Enhancing Technologies (PETs)', 'Usable Cybersecurity', 'Data Protection by Design', 'Online Identity Management'],
        summary: 'World-renowned authority on privacy-enhancing technologies, member of the Swedish Cybersecurity Council, and pioneer in human-centric privacy interfaces.',
        source: 'https://www.kau.se',
        recruiting: 'Not verified'
      },
      {
        id: 1687,
        name: 'Prof. Per Kristensson',
        title: 'Director of CTF Service Research Center & Professor of Psychology',
        university: 'Karlstad University - Hus 21 Innovation Center',
        subject: 'social-sciences',
        topics: ['Consumer Psychology', 'Service Innovation Ecosystems', 'Customer Experience Design', 'Behavioral Nudging for Sustainability'],
        summary: 'Leading scholar of service innovation and behavioral psychology, researching how customer-centric service interfaces drive sustainability and user adoption.',
        source: 'https://www.kau.se',
        recruiting: 'Not verified'
      },
      {
        id: 1688,
        name: 'Prof. Andreas Kassler',
        title: 'Professor of Computer Science & Wireless Networking',
        university: 'Karlstad University - Hus 21 Innovation Center',
        subject: 'computer-science',
        topics: ['5G/6G Core Network Slicing', 'Programmable Data Planes (P4)', 'Edge Cloud Computing', 'Low Latency Transport Protocols'],
        summary: 'IEEE Senior Member researching programmable network hardware, cloud RAN orchestration, and deterministic ultra-low latency protocols for industrial automation.',
        source: 'https://www.kau.se',
        recruiting: 'Not verified'
      }
    ]
  },

  // 25. Sweden - Mid Sweden University Makerspace (Mittuniversitetet) (Row 1595)
  {
    slug: 'mid-sweden-university-makerspace-sundsvall',
    institution: 'Mid Sweden University Makerspace (Mittuniversitetet)',
    shortName: 'Miun Makerspace',
    countryId: 'sweden',
    countryLabel: 'Sweden',
    location: 'Sundsvall, Västernorrland, Sweden',
    website: 'https://www.miun.se',
    sourceRow: 1595,
    badge: 'Premier Prototyping Hub for IoT, Sensors & Sports Tech',
    lead: 'Mid Sweden University Makerspace (Mittuniversitetet) is an elite prototyping and research facility in Sundsvall, driving cutting-edge Nordic breakthroughs in industrial IoT, wireless sensor networks, additive manufacturing, and sports technology.',
    overview: 'Situated on the modern riverfront Campus Sundsvall of Mid Sweden University (Mittuniversitetet), the Makerspace integrates research from the Sensible Things that Communicate (STC) and Transformative Technologies research centres. Formerly known as Tvätteriet, this state-of-the-art facility features high-precision multi-material 3D printers, laser machining centers, wireless sensor testbeds, and the world-leading Swedish Winter Sports Research Centre (NVC) prototyping labs.',
    quickFacts: {
      type: 'Public University Research & Prototyping Facility',
      campus: 'Campus Sundsvall (Holmgatan / Sidsjövägen, Sundsvall, Sweden)',
      accreditation: 'Swedish Higher Education Authority (UKÄ) Accredited',
      admissions: 'Applications via UniversityAdmissions.se; BSc in Engineering, CS, or Applied Physics for graduate programs',
      language: 'English & Swedish',
      aid: 'Mid Sweden University Tuition Fee Scholarships, Swedish Institute Scholarships, STC research assistantships'
    },
    strengths: [
      'Industrial IoT, Embedded Sensors & Wireless Mesh Networks',
      'Additive Manufacturing & Electron Beam Melting (EBM)',
      'Sports Technology, Winter Sports Biomechanics & Gear Design',
      'Fibre Science & Eco-Friendly Cellulose Electronics'
    ],
    programs: [
      { title: 'Master of Science in Embedded Sensor Systems', level: 'Master\'s', desc: 'English-taught technical master\'s covering wireless sensor hardware, low-power microcontrollers, and edge AI.' },
      { title: 'PhD in Electronics and Sensor Systems', level: 'Doctorate', desc: 'Fully employed doctoral research within the STC Research Centre exploring radar sensors and smart paper electronics.' },
      { title: 'Master of Science in Sports Technology', level: 'Master\'s', desc: 'Unique multidisciplinary master\'s delivered in collaboration with elite Olympic winter sports laboratories in Östersund.' },
      { title: 'Master of Science in Additive Manufacturing', level: 'Master\'s', desc: 'Advanced manufacturing master\'s examining metal 3D printing, titanium alloys, and topology optimization.' }
    ],
    opportunities: [
      {
        id: 3896,
        title: 'Mid Sweden University Tuition Fee Scholarship at Makerspace',
        type: 'Scholarship',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: '75% tuition fee waiver (approx. SEK 110,000/year savings) for high-achieving non-EU master\'s students',
        tuition: 'SEK 148,000/year (Full international fee before 75% scholarship reduction)',
        fee: 'SEK 900',
        source: 'https://www.miun.se',
        desc: 'Merit-based scholarship awarded to exceptional applicants enrolling in Master\'s programs in Sensor Systems, Computer Engineering, or Sports Tech.',
        requirements: {
          gpa: 'Top academic standing in an undergraduate bachelor\'s degree in electrical engineering, computer science, or physics',
          ielts: 'IELTS 6.5 (minimum 5.5 in each component)',
          gre: 'Not required',
          papers: 'University admissions application, personal statement (motivational essay), and CV',
          references: '2 academic letters'
        }
      },
      {
        id: 3897,
        title: 'PhD in Embedded Sensor Networks & Radar Signal Processing',
        type: 'PhD',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science', 'physics'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'Full 4-year doctoral employment (Doktorandtjänst) starting at SEK 31,500/month with annual step increases and full Swedish healthcare/benefits',
        tuition: 'SEK 0',
        fee: 'SEK 0',
        source: 'https://www.miun.se',
        desc: 'Fully funded PhD candidate position developing mmWave radar sensors, machine learning signal classification, and environmental sensor nodes for smart forestry.',
        requirements: {
          gpa: 'Master of Science degree in Electrical Engineering, Applied Physics, or Computer Engineering',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Master\'s thesis copy, academic transcripts, CV, and statement of research interests',
          references: '2 letters of recommendation from university professors'
        }
      },
      {
        id: 3898,
        title: 'MSc in Embedded Sensor Systems (English Taught)',
        type: 'Master\'s',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Eligible for Swedish Institute Scholarships and industry project assistantships',
        tuition: 'SEK 0 (EU/EEA) / SEK 148,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.miun.se',
        desc: 'Two-year technical master\'s training engineers in IoT architecture, embedded C programming, sensor calibration, and antenna design.',
        requirements: {
          gpa: 'Bachelor\'s degree in Electrical/Electronic Engineering or Computer Engineering with at least 15 ECTS in mathematics',
          ielts: 'IELTS 6.5',
          gre: 'Not required',
          papers: 'Official transcripts and proof of degree',
          references: 'Not required'
        }
      },
      {
        id: 3899,
        title: 'MSc in Sports Technology & Winter Sports Engineering',
        type: 'Master\'s',
        subject: 'engineering',
        subjects: ['engineering', 'physics'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Swedish Olympic Committee and winter sports equipment manufacturer grants',
        tuition: 'SEK 0 (EU/EEA) / SEK 148,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.miun.se',
        desc: 'Unique master\'s program utilizing wind tunnels and treadmill biomechanics labs to optimize ski glides, carbon fiber composites, and athletic telemetry.',
        requirements: {
          gpa: 'BSc in Mechanical Engineering, Sports Engineering, or Applied Physics',
          ielts: 'IELTS 6.5',
          gre: 'Not required',
          papers: 'Academic transcripts and personal statement detailing sports technology interests',
          references: '1 academic reference'
        }
      },
      {
        id: 3900,
        title: 'STC Research Centre Postdoctoral Fellowship in Green Electronics',
        type: 'Fellowship',
        subject: 'engineering',
        subjects: ['engineering', 'chemistry'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        funding: 'SEK 44,000 to SEK 48,000 monthly postdoctoral salary plus research materials budget for 2 years',
        tuition: 'Postdoctoral research position (No tuition)',
        fee: 'SEK 0',
        source: 'https://www.miun.se',
        desc: 'Two-year funded research fellowship developing biodegradable printed electronics, cellulose batteries, and passive RFID sensors on paper substrates.',
        requirements: {
          gpa: 'PhD in Materials Chemistry, Printed Electronics, or Microelectronics defended within the past 3 years',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'CV, list of top 3 publications, and 3-page research project design',
          references: '3 academic references'
        }
      },
      {
        id: 3901,
        title: 'Makerspace Rapid Prototyping & Additive Manufacturing Internship',
        type: 'Internship',
        subject: 'engineering',
        subjects: ['engineering'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Monthly stipend SEK 9,000 plus full access to Makerspace laser cutters, CNC mills, and EBM printers',
        tuition: 'Curricular master\'s project credits',
        fee: 'SEK 0',
        source: 'https://www.miun.se',
        desc: '4-month applied fabrication internship assisting researchers and regional industry partners in rapid mechanical prototyping and hardware debugging.',
        requirements: {
          gpa: 'Enrolled in engineering degree at Mid Sweden University with CAD modeling experience (SolidWorks/Fusion 360)',
          ielts: 'English or Swedish communication',
          gre: 'Not required',
          papers: 'Portfolio of mechanical or electronic design projects',
          references: 'Makerspace coordinator sign-off'
        }
      },
      {
        id: 3902,
        title: 'Industrial Internet of Things & LoRaWAN Sensor Prototyping Course',
        type: 'Course',
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        country: 'Sweden',
        location: 'Sundsvall, Sweden',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Free of charge for EU/EEA citizens under Swedish university open-course credits',
        tuition: 'SEK 0 (EU/EEA) / SEK 6,500 (Non-EU)',
        fee: 'SEK 0',
        source: 'https://www.miun.se',
        desc: '7.5 ECTS distance course with practical Makerspace lab kits covering LoRaWAN gateway configuration, MQTT broker deployment, and low-power hardware design.',
        requirements: {
          gpa: 'Previous coursework in basic programming and digital electronics',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Application via UniversityAdmissions.se',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1689,
        name: 'Prof. Mattias O\'Nils',
        title: 'Head of STC Research Centre & Professor of Embedded Systems',
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        subject: 'engineering',
        topics: ['Camera Sensor Networks', 'Edge AI for Visual Measurement', 'Energy-Autonomous Embedded Systems', 'Industrial IoT Applications'],
        summary: 'Pioneering researcher in distributed embedded vision systems, battery-less sensor nodes, and energy harvesting techniques for harsh industrial and forestry environments.',
        source: 'https://www.miun.se',
        recruiting: 'Not verified'
      },
      {
        id: 1690,
        name: 'Prof. Claes Mattsson',
        title: 'Professor of Electronic Systems & Radar Sensors',
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        subject: 'physics',
        topics: ['High-Frequency Radar Systems', 'Microwave Sensor Design', 'Antenna Integration', 'Non-Destructive Material Testing'],
        summary: 'Expert in microwave and millimeter-wave radar sensor development for industrial process monitoring, snowpack analysis, and environmental sensing.',
        source: 'https://www.miun.se',
        recruiting: 'Not verified'
      },
      {
        id: 1691,
        name: 'Prof. Marie Ohlsson',
        title: 'Professor of Sports Technology & Biomechanics',
        university: 'Mid Sweden University Makerspace (Mittuniversitetet)',
        subject: 'engineering',
        topics: ['Winter Sports Equipment Dynamics', 'Tribology of Ski Bases', 'Wearable Sensor Biomechanics', 'Aerodynamic Optimization'],
        summary: 'Senior researcher at the Swedish Winter Sports Research Centre analyzing friction mechanics on snow, wearable sensor biomechanics for cross-country skiers, and equipment safety.',
        source: 'https://www.miun.se',
        recruiting: 'Not verified'
      }
    ]
  },

  // 26. Sweden - Faculty of Engineering LTH - Navet (Lund University) (Row 1599)
  {
    slug: 'lth-navet-lund-university-scania',
    institution: 'Faculty of Engineering LTH - Navet (Lund University)',
    shortName: 'LTH Navet Lund',
    countryId: 'sweden',
    countryLabel: 'Sweden',
    location: 'Lund, Scania, Sweden',
    website: 'https://www.lth.se',
    sourceRow: 1599,
    badge: 'Premier Nordic Center for Engineering Innovation & Nanotechnology',
    lead: 'Faculty of Engineering LTH - Navet at Lund University is Sweden’s foremost center for student innovation, interdisciplinary engineering research, biotechnology, and nano-fabrication.',
    overview: 'Located on the landmark Ole Römers väg engineering campus in Lund, Navet serves as the vibrant student innovation hub and collaborative interface for Lund University\'s Faculty of Engineering (LTH - Lunds Tekniska Högskola). Educating over 10,000 engineering students and hosting world-leading research centers (including NanoLund and the MAX IV Laboratory adjacent synchrotron facilities), LTH Navet links cutting-edge engineering student teams with Medicon Village, IDEON Science Park, and multinational engineering innovators.',
    quickFacts: {
      type: 'Premier Nordic Faculty of Engineering & Student Innovation Hub',
      campus: 'LTH Campus / Navet (John Ericssons väg / Ole Römers väg, Lund, Scania)',
      accreditation: 'Swedish Higher Education Authority (UKÄ), CESAER European Member',
      admissions: 'National University Admissions Sweden; rigorous high-level calculus, physics, and chemistry prerequisites',
      language: 'Swedish & English (Broad portfolio of master\'s and doctoral degrees taught 100% in English)',
      aid: 'Lund University Global Scholarship, Swedish Institute Scholarships, Crafoord Foundation Grants'
    },
    strengths: [
      'Nanotechnology, Semiconductor Physics & Quantum Components',
      'Biomedical Engineering & Medical Nanodevices',
      'Sustainable Energy Systems, Hydrogen Fuel & Battery Engineering',
      'Robotics, Autonomous Control & Mathematical Optimization'
    ],
    programs: [
      { title: 'Master of Science in Nanoscience', level: 'Master\'s', desc: 'World-renowned master\'s delivered in close cooperation with NanoLund cleanrooms examining nanowires and quantum transport.' },
      { title: 'Master of Science in Biotechnology', level: 'Master\'s', desc: 'Cutting-edge program covering industrial enzyme technology, metabolic engineering, and synthetic biology.' },
      { title: 'PhD in Biomedical Engineering', level: 'Doctorate', desc: 'Doctoral research within the Department of Biomedical Engineering exploring lab-on-a-chip microfluidics and neural prosthetics.' },
      { title: 'Master of Science in Sustainable Energy Engineering', level: 'Master\'s', desc: 'Advanced engineering degree focusing on carbon capture, industrial heat integration, and battery storage.' }
    ],
    opportunities: [
      {
        id: 3903,
        title: 'Lund University Global Scholarship at LTH Navet',
        type: 'Scholarship',
        subject: 'engineering',
        subjects: ['engineering', 'physics'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: '25%, 50%, 75%, or 100% full tuition fee coverage awarded to the highest-ranking international master\'s applicants',
        tuition: 'SEK 165,000/year (approx. €14,500/year for non-EU students before scholarship waiver)',
        fee: 'SEK 900',
        source: 'https://www.lth.se',
        desc: 'Elite merit scholarship awarded to top academic achievers applying to engineering master\'s degrees at Lund University.',
        requirements: {
          gpa: 'Top 5-10% of graduating bachelor\'s cohort in Engineering, Physics, or Nanotechnology',
          ielts: 'IELTS 6.5 (minimum 5.5 in each section) or TOEFL iBT 90',
          gre: 'Not required',
          papers: 'CV, academic transcripts, scholarship motivation statement, and proof of degree',
          references: '2 academic letters of recommendation'
        }
      },
      {
        id: 3904,
        title: 'PhD in Nanoscience & Quantum Semiconductor Nanowires',
        type: 'PhD',
        subject: 'physics',
        subjects: ['physics', 'engineering'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2026-12-05',
        deadlineText: 'December 5, 2026',
        funding: 'Full 4-year Swedish doctoral employment salary starting at SEK 33,500/month with full pension, vacation, and health insurance',
        tuition: 'SEK 0 (Tuition-free doctoral employment under Swedish law)',
        fee: 'SEK 0',
        source: 'https://www.lth.se',
        desc: 'Doctoral research position within NanoLund developing epitaxial semiconductor nanowires for next-generation quantum computing qubits and infrared detectors.',
        requirements: {
          gpa: 'MSc in Physics, Nanoscience, Materials Science, or Electronic Engineering with distinction',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Master\'s thesis copy, academic transcripts, research vision letter, and CV',
          references: '2 letters of recommendation from senior research mentors'
        }
      },
      {
        id: 3905,
        title: 'MSc in Nanoscience (NanoLund Cleanroom Facility)',
        type: 'Master\'s',
        subject: 'physics',
        subjects: ['physics', 'engineering', 'chemistry'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Eligible for Swedish Institute Scholarships for Global Professionals (full tuition and SEK 12,000/month living stipend)',
        tuition: 'SEK 0 (EU/EEA) / SEK 165,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.lth.se',
        desc: 'Premier European nanoscience master\'s program offering hands-on nanofabrication, transmission electron microscopy (TEM), and quantum physics training.',
        requirements: {
          gpa: 'Bachelor\'s in Physics, Nanoscience, or Materials Engineering with at least 30 ECTS in mathematics and 60 ECTS in physics',
          ielts: 'IELTS 6.5',
          gre: 'Not required',
          papers: 'Transcripts, statement of motivation, and curriculum vitae',
          references: 'Not required'
        }
      },
      {
        id: 3906,
        title: 'MSc in Biotechnology & Metabolic Engineering',
        type: 'Master\'s',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Novo Nordisk Foundation and Medicon Village project bursaries',
        tuition: 'SEK 0 (EU/EEA) / SEK 165,000/year (Non-EU)',
        fee: 'SEK 900',
        source: 'https://www.lth.se',
        desc: 'Two-year engineering master\'s examining synthetic biology, microbial fermentation, bioreactor scale-up, and downstream biopharmaceutical processing.',
        requirements: {
          gpa: 'Bachelor\'s in Biotechnology, Chemical Engineering, or Biochemistry with at least 20 ECTS in mathematics',
          ielts: 'IELTS 6.5 overall',
          gre: 'Not required',
          papers: 'Transcripts and CV',
          references: 'Not required'
        }
      },
      {
        id: 3907,
        title: 'Crafoord Foundation Nanotechnology Postdoctoral Fellowship',
        type: 'Fellowship',
        subject: 'physics',
        subjects: ['physics', 'chemistry'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2026-11-20',
        deadlineText: 'November 20, 2026',
        funding: 'SEK 520,000 annual tax-exempt fellowship stipend plus SEK 100,000 project consumables grant for 2 years',
        tuition: 'Postdoctoral research fellowship (No tuition)',
        fee: 'SEK 0',
        source: 'https://www.lth.se',
        desc: 'Prestigious fellowship administered by the Royal Swedish Academy of Sciences supporting postdoctoral research at NanoLund or MAX IV Laboratory.',
        requirements: {
          gpa: 'PhD in Physics, Materials Science, or Chemistry awarded within the past 4 years',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Curriculum vitae, complete list of publications, and 5-page research plan',
          references: '3 international scientific references'
        }
      },
      {
        id: 3908,
        title: 'LTH Navet VentureLab Student Startup Incubator Internship',
        type: 'Internship',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'SEK 20,000 project seed stipend, free office space in Navet, and mentoring from IDEON Science Park serial entrepreneurs',
        tuition: 'Equity-free student incubator program',
        fee: 'SEK 0',
        source: 'https://www.lth.se',
        desc: '6-month technology incubation fellowship supporting student engineering teams transforming research discoveries into deep-tech venture prototypes.',
        requirements: {
          gpa: 'Registered student or doctoral researcher at LTH',
          ielts: 'English or Swedish communication',
          gre: 'Not required',
          papers: 'Venture concept pitch deck (10 slides) and technical feasibility plan',
          references: 'VentureLab panel review'
        }
      },
      {
        id: 3909,
        title: 'Cleanroom Processing & Advanced Lithography Certification Course',
        type: 'Course',
        subject: 'engineering',
        subjects: ['engineering', 'physics'],
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        country: 'Sweden',
        location: 'Lund, Scania, Sweden',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        funding: 'Subsidized by the Nordic Cleanroom Network (NordNanoNet)',
        tuition: 'SEK 12,000 course fee (Free for LTH registered graduate students)',
        fee: 'SEK 0',
        source: 'https://www.lth.se',
        desc: 'Two-week hands-on certification inside the Lund Nano Lab cleanroom covering electron-beam lithography, atomic layer deposition (ALD), and reactive ion etching (RIE).',
        requirements: {
          gpa: 'Enrolled in graduate engineering or physics studies',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Cleanroom safety exam verification and research justification form',
          references: 'PI supervisor signature'
        }
      }
    ],
    researchers: [
      {
        id: 1692,
        name: 'Prof. Heiner Linke',
        title: 'Professor of Nanophysics & Former Director of NanoLund',
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        subject: 'physics',
        topics: ['Molecular Motors', 'Nanowire Thermoelectrics', 'Quantum Transport in Nanostructures', 'Single-Electron Thermodynamics'],
        summary: 'Pioneering nanophysicist and Member of the Royal Swedish Academy of Sciences investigating nanoscale thermodynamics, biological molecular motors, and high-efficiency thermoelectric nanowires.',
        source: 'https://www.lth.se',
        recruiting: 'Not verified'
      },
      {
        id: 1693,
        name: 'Prof. Thomas Laurell',
        title: 'Professor of Medical & Chemical Microsensors',
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        subject: 'engineering',
        topics: ['Acoustofluidics', 'Circulating Tumour Cell Separation', 'Lab-on-a-Chip Microfluidics', 'Nanomedical Diagnostics'],
        summary: 'World-leading pioneer in acoustofluidics, utilizing acoustic standing waves for label-free cell separation, microfluidic blood diagnostics, and biomarker isolation.',
        source: 'https://www.lth.se',
        recruiting: 'Not verified'
      },
      {
        id: 1694,
        name: 'Prof. Kimberly Dick Thelander',
        title: 'Professor of Materials Science & Nanowire Growth',
        university: 'Faculty of Engineering LTH - Navet (Lund University)',
        subject: 'chemistry',
        topics: ['In-Situ Transmission Electron Microscopy', 'Semiconductor Nanowire Crystal Phases', 'Epitaxial Crystal Growth', 'Atomic Heterostructures'],
        summary: 'Distinguished materials chemist utilizing in-situ atomic-resolution TEM to unravel crystal phase engineering and atomic-layer growth kinetics in III-V semiconductor nanowires.',
        source: 'https://www.lth.se',
        recruiting: 'Not verified'
      }
    ]
  },

  // 27. Netherlands - Hogeschool IPABO (Amsterdam & Alkmaar) (Row 1425)
  {
    slug: 'hogeschool-ipabo-amsterdam-alkmaar',
    institution: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
    shortName: 'Hogeschool IPABO',
    countryId: 'netherlands',
    countryLabel: 'Netherlands',
    location: 'Amsterdam & Alkmaar, Netherlands',
    website: 'https://www.ipabo.nl',
    sourceRow: 1425,
    badge: 'Premier Specialist University for Primary Teacher Education',
    lead: 'Hogeschool IPABO is an acclaimed, independent specialist university of applied sciences in the Netherlands with campuses in Amsterdam and Alkmaar, renowned as a national leader in primary teacher education and urban pedagogical innovation.',
    overview: 'Dedicated exclusively to initial and continuing teacher education (PABO - Pedagogische Academie voor het Basisonderwijs), Hogeschool IPABO educates future educators across campuses in Amsterdam and Alkmaar. Consistently receiving top ratings in the Dutch National Student Survey (NSE) and Keuzegids Hbo, IPABO is renowned for its Centre for Educational Leadership, inclusive urban multilingual classroom strategies, and pioneering research into neurodiversity and STEM education in primary schools.',
    quickFacts: {
      type: 'Specialist University of Applied Sciences (Zelfstandige Hogeschool)',
      campus: 'Amsterdam Campus (Jan Tooropstraat) & Alkmaar Campus (Rubenslaan)',
      accreditation: 'NVAO (Accreditation Organisation of the Netherlands and Flanders) Accredited',
      admissions: 'Havo, Vwo, or Mbo level 4 diploma; national PABO entrance knowledge tests in Geography, History, and Science',
      language: 'Dutch (instructional language) with specialized international English modules',
      aid: 'Dutch Government Studiefinanciering (DUO), Tegemoetkoming Leraren (teacher tuition grants), IPABO talent awards'
    },
    strengths: [
      'Primary Teacher Education (PABO) & Pedagogical Leadership',
      'Urban Multilingual Education & Inclusive Classrooms',
      'Early Childhood Science, Technology & Digital Literacy',
      'Master in Educational Leadership & School Innovation'
    ],
    programs: [
      { title: 'Bachelor of Education in Primary School Teaching (PABO)', level: 'Bachelor\'s', desc: 'Accredited four-year degree qualifying graduates as fully certified Dutch primary school teachers.' },
      { title: 'Master of Educational Leadership (MEL)', level: 'Master\'s', desc: 'Professional master\'s degree preparing school principals, curriculum leaders, and educational change managers.' },
      { title: 'Academische PABO (Joint Degree with University of Amsterdam)', level: 'Bachelor\'s', desc: 'Dual academic track combining PABO practical teacher training with a university bachelor\'s in Educational Sciences.' },
      { title: 'Specialist Certificate in Early STEM & Computational Thinking', level: 'Course', desc: 'Post-graduate certificate equipping educators with practical robotics, coding, and inquiry-based science methodologies.' }
    ],
    opportunities: [
      {
        id: 3910,
        title: 'Dutch Government Teacher Tuition Subsidy (Tegemoetkoming Leraren) at IPABO',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam & Alkmaar, Netherlands',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'Full tuition fee grant of €2,530 per year paid directly by the Dutch Ministry of Education (DUO)',
        tuition: '€2,530/year (Statutory Dutch/EEA tuition fee; covered by subsidy)',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'Government-funded grant specifically designated for aspiring and working teachers in the Netherlands to cover 100% of PABO tuition fees.',
        requirements: {
          gpa: 'Admission to accredited PABO teacher education program at IPABO and Dutch/EEA citizenship',
          ielts: 'Dutch language proficiency CEFR B2/C1 (Staatsexamen NT2 Programma II)',
          gre: 'Not required',
          papers: 'Proof of enrollment, DUO application form, and secondary diploma',
          references: 'Not required'
        }
      },
      {
        id: 3911,
        title: 'Master of Educational Leadership (Master Leren en Innoveren)',
        type: 'Master\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Eligible for Dutch Lerarenbeurs scholarship providing up to €7,000 for study costs and substitute teacher compensation',
        tuition: '€2,530/year (Statutory rate) or €8,900/year (Institutional rate)',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'Two-year part-time master\'s program empowering experienced teachers to lead school-wide innovation, research school climate, and coach pedagogical teams.',
        requirements: {
          gpa: 'Bachelor of Education (PABO) or equivalent teaching qualification and minimum 2 years of teaching experience',
          ielts: 'Fluent Dutch (C1 level)',
          gre: 'Not required',
          papers: 'Proof of employment at a primary school and school board endorsement letter',
          references: '1 school director recommendation'
        }
      },
      {
        id: 3912,
        title: 'Bachelor of Education in Primary Teaching (Academische PABO)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam & Alkmaar, Netherlands',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Dutch DUO basic student grant (basisbeurs) up to €466/month plus student public transit card',
        tuition: '€2,530 per year',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'Prestigious four-year dual program delivered in partnership with the University of Amsterdam, graduating teachers with both professional and academic degrees.',
        requirements: {
          gpa: 'Dutch Vwo diploma or equivalent international academic preparatory credential',
          ielts: 'Dutch language proficiency C1',
          gre: 'Not required',
          papers: 'Vwo diploma transcript and PABO national knowledge entrance tests in history, geography, and science',
          references: 'Not required'
        }
      },
      {
        id: 3913,
        title: 'Centre for Educational Leadership Doctoral Research Fellowship',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        funding: 'Full research associate salary under HBO collective agreement (CAO HBO Schaal 11) €3,900 to €5,400/month for 4 years',
        tuition: '€0',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'Doctoral research position offered in collaboration with university partners investigating teacher agency, multilingual classroom pedagogy, and literacy interventions.',
        requirements: {
          gpa: 'Master of Science in Educational Sciences, Pedagogy, or Master of Education with high marks',
          ielts: 'Fluent Dutch and academic English',
          gre: 'Not required',
          papers: 'Master\'s thesis summary, CV, and 4-page doctoral research proposal',
          references: '2 academic letters of recommendation'
        }
      },
      {
        id: 3914,
        title: 'IPABO Diversity & Inclusive Urban Teaching Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: '€5,000 project grant and coaching support for student teachers piloting inclusive classroom initiatives in Amsterdam primary schools',
        tuition: 'Fellowship award (No tuition)',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'One-year fellowship supporting teacher candidates who develop and implement evidence-based anti-racism, multilingualism, or neurodiversity projects in urban schools.',
        requirements: {
          gpa: 'Enrolled in 3rd or 4th year of IPABO teacher education program',
          ielts: 'Dutch working proficiency',
          gre: 'Not required',
          papers: 'Project proposal (max 1,500 words) detailing classroom implementation plan',
          references: 'Internship school mentor sign-off'
        }
      },
      {
        id: 3915,
        title: 'Primary School Teaching Clinical Internship (LIO-Stage)',
        type: 'Internship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam & Alkmaar, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Official LIO intern teacher salary approx. €1,400 to €1,800/month paid by the school board under CAO PO',
        tuition: 'Integrated into final year of PABO curriculum',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: 'Five-month autonomous teacher-in-training (Leraar in Opleiding) internship where candidates manage their own primary school class under school mentor supervision.',
        requirements: {
          gpa: 'Successful completion of all Year 1-3 PABO coursework and national knowledge benchmarks',
          ielts: 'Dutch language proficiency C1',
          gre: 'Not required',
          papers: 'VOG (Certificate of Good Conduct) and teacher competency portfolio',
          references: 'Academic assessor recommendation'
        }
      },
      {
        id: 3916,
        title: 'Inquiry-Based Science & Coding in Early Childhood Workshop',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'computer-science'],
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Subsidized by the Dutch National STEM Platform (Platform Talent voor Technologie)',
        tuition: '€650 professional course fee',
        fee: '€0',
        source: 'https://www.ipabo.nl',
        desc: '3-day practical continuing professional development seminar for primary school teachers on integrating unplugged coding, micro:bit robotics, and scientific inquiry into grades 1-6.',
        requirements: {
          gpa: 'Certified primary school teacher or kindergarten educator',
          ielts: 'Dutch comprehension',
          gre: 'Not required',
          papers: 'Registration form and school name',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1695,
        name: 'Dr. Marjolein Dobber',
        title: 'Lector in Playful Learning & Curriculum Innovation',
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        subject: 'social-sciences',
        topics: ['Developmental Education (Ontwikkelingsgericht Onderwijs)', 'Play in Early Childhood', 'Teacher-Child Dialogue', 'Classroom Agency'],
        summary: 'Pioneering educational researcher investigating the role of play in literacy development, teacher guidance in collaborative student inquiry, and developmental schooling.',
        source: 'https://www.ipabo.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1696,
        name: 'Dr. Ronald Keijzer',
        title: 'Lector in Mathematics & Science Didactics',
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        subject: 'mathematics',
        topics: ['Realistic Mathematics Education (RME)', 'Primary Fractions & Decimal Reasoning', 'STEM Integration in Primary Schools', 'Teacher Mathematical Knowledge'],
        summary: 'National expert in mathematics didactics, examining visual models in fraction learning, numeracy acquisition in multilingual classrooms, and early STEM pedagogies.',
        source: 'https://www.ipabo.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1697,
        name: 'Dr. Monique Pijls',
        title: 'Senior Researcher in Digital Literacy & Computational Thinking',
        university: 'Hogeschool IPABO (Amsterdam & Alkmaar)',
        subject: 'computer-science',
        topics: ['Computational Thinking in Primary Schools', 'Tangible Robotics in Education', 'Inquiry-Based Science Pedagogies', 'Teacher Technological Competencies'],
        summary: 'Educational technology researcher developing instructional frameworks for computational thinking, educational robotics, and interactive science exploration for young children.',
        source: 'https://www.ipabo.nl',
        recruiting: 'Not verified'
      }
    ]
  },

  // 28. Netherlands - Theological University Apeldoorn (TUA) (Row 1507)
  {
    slug: 'theological-university-apeldoorn-tua',
    institution: 'Theological University Apeldoorn (TUA)',
    shortName: 'TUA Apeldoorn',
    countryId: 'netherlands',
    countryLabel: 'Netherlands',
    location: 'Apeldoorn, Gelderland, Netherlands',
    website: 'https://www.tua.nl',
    sourceRow: 1507,
    badge: 'Premier Academic Research University for Theology & Reformation Studies',
    lead: 'Theological University Apeldoorn (Theologische Universiteit Apeldoorn) is an internationally celebrated Dutch research university situated in Gelderland, famed for Biblical scholarship, Reformation history, and Christian ethics.',
    overview: 'Dating back to 1894 and situated in a leafy historic quarter of Apeldoorn, Theological University Apeldoorn (TUA) is a state-accredited academic research university specializing in Reformed theology, classical languages (Hebrew, Aramaic, Greek, Latin), and moral philosophy. Home to the world-renowned Classic Reformed Theology research center and collaborating closely with Oxford and Zurich, TUA offers accredited bachelor\'s, master\'s, and doctoral degrees that attract international theological scholars from across the globe.',
    quickFacts: {
      type: 'Specialist Academic Research University (Universiteit)',
      campus: 'Wilhelminapark Campus (Apeldoorn, Gelderland, Netherlands)',
      accreditation: 'NVAO (Accreditation Organisation of the Netherlands and Flanders) Accredited',
      admissions: 'Dutch Vwo diploma with Latin/Greek or relevant university bachelor\'s degree; language entry tests',
      language: 'Dutch & English (Master of Theology and PhD degrees available 100% in English)',
      aid: 'TUA International Scholarship Fund, Dutch DUO Studiefinanciering, Reformation Research Grants'
    },
    strengths: [
      'Old Testament & Semitic Language Exegesis',
      'Reformation History & Early Modern Protestant Intellectual Thought',
      'Systematic Theology & Christian Philosophy',
      'Bioethics, Technology Ethics & Practical Hermeneutics'
    ],
    programs: [
      { title: 'Master of Theology (MTh - International Track)', level: 'Master\'s', desc: 'English-taught research master\'s exploring biblical exegesis, historical theology, and systematic dogma.' },
      { title: 'PhD in Theology and Reformation Studies', level: 'Doctorate', desc: 'Doctoral research examining original manuscript archives, early modern intellectual history, and hermeneutics.' },
      { title: 'Bachelor of Theology (Theologie)', level: 'Bachelor\'s', desc: 'Three-year academic bachelor\'s featuring comprehensive training in classical Hebrew, Greek, and Latin.' },
      { title: 'Master in Christian Bioethics & Medical Ethics', level: 'Master\'s', desc: 'Interdisciplinary graduate program examining end-of-life decisions, genetic manipulation, and medical moral theology.' }
    ],
    opportunities: [
      {
        id: 3917,
        title: 'TUA International Theological Research Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'Up to €5,000 per year tuition grant plus subsidized housing at the Apeldoorn campus international house',
        tuition: '€2,530/year (Statutory EU fee) / €7,800/year (Non-EU rate before scholarship)',
        fee: '€50',
        source: 'https://www.tua.nl',
        desc: 'Merit scholarship supporting exceptional international students enrolling in the English-language Master of Theology program.',
        requirements: {
          gpa: 'Recognized academic Bachelor of Theology or Bachelor of Arts in Religious Studies/Philosophy with high marks',
          ielts: 'IELTS 6.5 (minimum 6.0 in all bands) or TOEFL iBT 90',
          gre: 'Not required',
          papers: 'Curriculum vitae, transcript showing biblical Greek and Hebrew credits, and 750-word statement of research interest',
          references: '2 letters of academic recommendation from theology professors'
        }
      },
      {
        id: 3918,
        title: 'PhD in Reformation History & Early Modern Intellectual Thought',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'Doctoral research fellowship with university archive access, conference travel allowances, and publication subsidies',
        tuition: '€0 (Doctoral research candidates exempt from formal tuition fees)',
        fee: '€0',
        source: 'https://www.tua.nl',
        desc: 'Supervised doctoral research investigating early modern theological treatises, John Calvin and his contemporaries, and post-Reformation scholasticism.',
        requirements: {
          gpa: 'Master of Theology or Master of Arts in History/Philosophy with distinction and proven proficiency in Latin',
          ielts: 'Fluent scientific English and academic reading comprehension of Latin and German/French',
          gre: 'Not required',
          papers: 'Comprehensive doctoral research proposal (10 pages) and master\'s thesis sample',
          references: '3 academic reference letters'
        }
      },
      {
        id: 3919,
        title: 'Master of Theology (MTh in Biblical Exegesis & Systematic Dogmatics)',
        type: 'Master\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Eligible for Dutch DUO loans (EU students) and church scholarship funds',
        tuition: '€2,530/year (EU/EEA) / €7,800/year (Non-EU)',
        fee: '€50',
        source: 'https://www.tua.nl',
        desc: 'One-year research master\'s taught in English exploring ancient Near Eastern backgrounds, Pauline theology, and modern systematic dogmatics.',
        requirements: {
          gpa: 'Academic Bachelor in Theology with verified proficiency in Biblical Hebrew (min 15 ECTS) and Greek (min 15 ECTS)',
          ielts: 'IELTS 6.5 overall',
          gre: 'Not required',
          papers: 'Official academic transcripts, statement of motivation, and curriculum vitae',
          references: '2 academic references'
        }
      },
      {
        id: 3920,
        title: 'Bachelor of Theology (Three-Year Classical Curriculum)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Dutch DUO basic grant and public transport card eligibility',
        tuition: '€2,530/year (Statutory EU rate)',
        fee: '€0',
        source: 'https://www.tua.nl',
        desc: 'Three-year university degree providing intensive linguistic training in biblical Hebrew, Greek, and Latin alongside hermeneutics and ethics.',
        requirements: {
          gpa: 'Dutch Vwo diploma or equivalent international academic preparatory diploma',
          ielts: 'Dutch language proficiency C1 (preliminary Latin/Greek not required; preparatory summer courses provided)',
          gre: 'Not required',
          papers: 'Secondary school diploma and personal essay',
          references: 'Not required'
        }
      },
      {
        id: 3921,
        title: 'Classic Reformed Theology Visiting Research Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        funding: '€2,500 monthly research stipend plus free accommodation at the TUA scholar apartments for 3 to 6 months',
        tuition: 'Visiting academic fellowship (No tuition)',
        fee: '€0',
        source: 'https://www.tua.nl',
        desc: 'Funded visiting fellowship for international postdoctoral scholars conducting archival research into 16th and 17th-century European theology.',
        requirements: {
          gpa: 'PhD in Theology, Religious Studies, or Early Modern European History',
          ielts: 'Fluent scholarly English',
          gre: 'Not required',
          papers: 'CV, list of major publications, and archival research project plan',
          references: '2 letters of recommendation from university department chairs'
        }
      },
      {
        id: 3922,
        title: 'Apeldoorn Archive Manuscript Digitization Practicum',
        type: 'Internship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'computer-science'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'Monthly practicum stipend €600 funded by the Heritage Digitization Trust',
        tuition: 'Curricular archival elective credits',
        fee: '€0',
        source: 'https://www.tua.nl',
        desc: '12-week archival practicum working with the TUA Special Collections to digitize, transcribe, and catalog rare 17th-century theological manuscripts and pamphlets.',
        requirements: {
          gpa: 'Enrolled in master\'s or doctoral studies at TUA with paleography or Latin reading skills',
          ielts: 'Working English or Dutch fluency',
          gre: 'Not required',
          papers: 'Cover letter and academic CV',
          references: 'Librarian approval'
        }
      },
      {
        id: 3923,
        title: 'Biblical Hebrew & Ancient Semitic Epigraphy Summer Course',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Theological University Apeldoorn (TUA)',
        country: 'Netherlands',
        location: 'Apeldoorn, Gelderland, Netherlands',
        deadline: '2027-05-30',
        deadlineText: 'May 30, 2027',
        funding: 'Discounted student registration available',
        tuition: '€750 course fee including text materials and epigraphic facsimile plates',
        fee: '€0',
        source: 'https://www.tua.nl',
        desc: 'Intensive 2-week summer school on Northwest Semitic inscriptions, Dead Sea Scroll fragments, and poetic syntax in the Hebrew Bible.',
        requirements: {
          gpa: 'Basic knowledge of Biblical Hebrew grammar',
          ielts: 'Instruction delivered in English',
          gre: 'Not required',
          papers: 'Registration form and proof of Hebrew coursework',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1698,
        name: 'Prof. Dr. Herman Selderhuis',
        title: 'Professor of Church History & Church Polity',
        university: 'Theological University Apeldoorn (TUA)',
        subject: 'social-sciences',
        topics: ['John Calvin Reformation Scholarship', 'European Protestant Scholasticism', 'Early Modern Church Polity', 'Sixteenth-Century Heidelberg Catechism'],
        summary: 'World-renowned Reformation historian, President of Refo500, and leading international authority on John Calvin\'s theological and social legacy across Europe.',
        source: 'https://www.tua.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1699,
        name: 'Prof. Dr. Eric Peels',
        title: 'Professor of Old Testament Studies',
        university: 'Theological University Apeldoorn (TUA)',
        subject: 'social-sciences',
        topics: ['Prophetic Literature of the Old Testament', 'Biblical Theodicy', 'Ancient Near Eastern Treaties', 'Jeremiah and Ezekiel Exegesis'],
        summary: 'Distinguished biblical scholar analyzing divine justice, the theology of retribution in the Hebrew Bible, and the socio-historical context of the Judean exile.',
        source: 'https://www.tua.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1700,
        name: 'Prof. Dr. Maarten Kater',
        title: 'Professor of Practical Theology & Christian Ethics',
        university: 'Theological University Apeldoorn (TUA)',
        subject: 'social-sciences',
        topics: ['Hermeneutics in Contemporary Culture', 'Pastoral Counseling Ethics', 'Medical Moral Decision Making', 'Liturgical Studies'],
        summary: 'Practical theologian examining homiletics, contemporary secularization dynamics in Western Europe, and ethical decision-making in clinical palliative healthcare.',
        source: 'https://www.tua.nl',
        recruiting: 'Not verified'
      }
    ]
  },

  // 29. Netherlands - Tio Business School (Row 1511)
  {
    slug: 'tio-business-school-amsterdam',
    institution: 'Tio Business School',
    shortName: 'Tio Business School',
    countryId: 'netherlands',
    countryLabel: 'Netherlands',
    location: 'Amsterdam & Utrecht, Netherlands',
    website: 'https://www.tio.nl',
    sourceRow: 1511,
    badge: 'Premier Private Business School for Hospitality & Commerce',
    lead: 'Tio Business School is the highest-rated private university of applied sciences in the Netherlands, renowned for intensive, personalized education in international business, hospitality, and digital entrepreneurship.',
    overview: 'Founded over 50 years ago and operating flagship campuses in Amsterdam and Utrecht, Tio Business School consistently achieves #1 rankings in the Dutch Keuzegids Hbo for over a decade. Tio provides small-scale, accelerated degree programs (enabling students to earn an accredited bachelor\'s in just three years) taught in English and Dutch, backed by mandatory international internships, corporate networking, and top-tier hospitality management credentials.',
    quickFacts: {
      type: 'Private University of Applied Sciences (Particuliere Hogeschool)',
      campus: 'Amsterdam Campus (Warmoesstraat / Tempelhofstraat) & Utrecht Campus',
      accreditation: 'NVAO (Accreditation Organisation of the Netherlands and Flanders), THE-ICE Accredited',
      admissions: 'Secondary school diploma (Havo, Vwo, IB, or international 12-year diploma); admissions intake interview',
      language: 'English & Dutch (Full bachelor\'s and master\'s degrees offered completely in English)',
      aid: 'Tio Excellence Scholarships (up to 50% tuition reduction), Dutch DUO student financing eligibility'
    },
    strengths: [
      'Hotel and Event Management & International Hospitality',
      'International Business Management & Global Commercial Trade',
      'Commerce, Entrepreneurship & Digital Organization',
      'Accelerated 3-Year Bachelor Degree Pathways'
    ],
    programs: [
      { title: 'Bachelor of Business Administration (BBA) in International Business Management', level: 'Bachelor\'s', desc: 'Accelerated three-year degree taught in English covering multinational strategy, corporate finance, and foreign market entry.' },
      { title: 'Bachelor of Arts in Hotel and Event Management', level: 'Bachelor\'s', desc: 'Internationally accredited hospitality management program featuring hands-on hotel takeovers and luxury resort internships.' },
      { title: 'Master of Business Administration (MBA)', level: 'Master\'s', desc: 'One-year intensive MBA program in Amsterdam focusing on digital transformation, entrepreneurship, and executive leadership.' },
      { title: 'Bachelor of Science in Digital Business & Commerce', level: 'Bachelor\'s', desc: 'Practical degree examining e-commerce algorithms, digital marketing analytics, and platform economics.' }
    ],
    opportunities: [
      {
        id: 3924,
        title: 'Tio Excellence International Student Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: '25% to 50% tuition fee reduction (saving €5,000 to €10,000 per year) awarded based on academic merit',
        tuition: '€20,900/year (Standard private tuition fee before scholarship reduction)',
        fee: '€95 (Intake assessment fee)',
        source: 'https://www.tio.nl',
        desc: 'Merit scholarship supporting ambitious international students enrolling in English-taught bachelor\'s or MBA programs at Tio Amsterdam.',
        requirements: {
          gpa: 'Secondary school diploma with high GPA (minimum 7.5/10 on Dutch scale or GPA >= 3.4/4.0)',
          ielts: 'IELTS 6.5 (minimum 6.0 in each section) or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'High school transcripts, motivation video or essay, and successful personal intake interview',
          references: '1 letter of recommendation from high school principal or teacher'
        }
      },
      {
        id: 3925,
        title: 'Bachelor of Business Administration in International Business Management (3-Year)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Eligible for Dutch DUO student financing loans for EU students',
        tuition: '€20,900 per year (3-year accelerated track)',
        fee: '€95',
        source: 'https://www.tio.nl',
        desc: 'Accelerated three-year bachelor\'s program taught in English, incorporating two international internships and an overseas exchange semester.',
        requirements: {
          gpa: 'Recognized secondary school diploma (Havo, Vwo, IB Diploma, European Baccalaureate, or US High School Diploma)',
          ielts: 'IELTS 6.0 overall',
          gre: 'Not required',
          papers: 'Transcripts, resume, and personal admissions interview',
          references: 'Not required'
        }
      },
      {
        id: 3926,
        title: 'Bachelor of Arts in Hotel and Event Management (THE-ICE Accredited)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Hospitality industry placement bursaries and Tio alumni study grants',
        tuition: '€20,900/year',
        fee: '€95',
        source: 'https://www.tio.nl',
        desc: 'Premier hospitality degree accredited by THE-ICE, featuring international hotel internships with Marriott, Hilton, and boutique luxury brands.',
        requirements: {
          gpa: 'Secondary education completion equivalent to Dutch Havo level',
          ielts: 'IELTS 6.0 or Cambridge B2 First',
          gre: 'Not required',
          papers: 'Educational diploma and motivational statement for hospitality management',
          references: 'Not required'
        }
      },
      {
        id: 3927,
        title: 'Tio Master of Business Administration (One-Year Executive Track)',
        type: 'Master\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: 'Executive leadership awards up to €4,000 for early applications',
        tuition: '€19,500 total program tuition',
        fee: '€95',
        source: 'https://www.tio.nl',
        desc: 'Intensive one-year MBA in Amsterdam delivering strategic consulting projects, executive mentoring, and venture pitching experience.',
        requirements: {
          gpa: 'Bachelor\'s degree in business, economics, or hospitality, and at least 2 years of work experience',
          ielts: 'IELTS 6.5 (6.0 minimum in subtests)',
          gre: 'Not required',
          papers: 'CV detailing career milestones, letter of motivation, and degree diploma',
          references: '2 employer or academic references'
        }
      },
      {
        id: 3928,
        title: 'Global Luxury Hospitality International Internship',
        type: 'Internship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Paid international internship €1,200 to €1,800/month plus room and board at partner luxury hotels in London, Dubai, or Barcelona',
        tuition: 'Compulsory curricular component of Tio BBA degrees',
        fee: '€0',
        source: 'https://www.tio.nl',
        desc: '20-week professional managerial internship placing students within operational management and corporate guest relations at leading international hotels.',
        requirements: {
          gpa: 'Completed 2nd year of Tio Hotel and Event Management program in good standing',
          ielts: 'Fluent professional English',
          gre: 'Not required',
          papers: 'Corporate resume, professional headshot, and interview video',
          references: 'Tio internship coordinator sign-off'
        }
      },
      {
        id: 3929,
        title: 'Tio Young Entrepreneur Venture Grant',
        type: 'Fellowship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'computer-science'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        funding: '€10,000 equity-free startup seed grant and one-on-one business mentorship from Dutch venture investors',
        tuition: '€0',
        fee: '€0',
        source: 'https://www.tio.nl',
        desc: 'Annual business plan competition providing seed funding to graduating Tio students launching e-commerce, sustainable hospitality, or fintech startups.',
        requirements: {
          gpa: 'Tio student or alumnus within 12 months of graduation',
          ielts: 'English or Dutch working fluency',
          gre: 'Not required',
          papers: 'Full business plan (20 pages), 3-year cash flow forecast, and pitch presentation',
          references: 'Jury panel evaluation'
        }
      },
      {
        id: 3930,
        title: 'Digital Marketing & AI E-Commerce Analytics Masterclass',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'computer-science'],
        university: 'Tio Business School',
        country: 'Netherlands',
        location: 'Amsterdam, Netherlands',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Certificate of completion accredited by NIMA (Netherlands Institute of Marketing)',
        tuition: '€1,250 professional seminar fee',
        fee: '€0',
        source: 'https://www.tio.nl',
        desc: 'Weekend masterclass on Google Analytics 4, customer acquisition cost (CAC) optimization, SEO automation with LLMs, and social media advertising funnel engineering.',
        requirements: {
          gpa: 'Undergraduate student or marketing professional',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Registration form and brief background summary',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1701,
        name: 'Dr. Peter van der Zwan',
        title: 'Professor of Entrepreneurship & Small Business Dynamics',
        university: 'Tio Business School',
        subject: 'social-sciences',
        topics: ['Solo Self-Employment Trends', 'SME Innovation Barriers', 'Internationalization of Dutch Startups', 'Entrepreneurial Motivation'],
        summary: 'Prominent entrepreneurship scholar analyzing the economic determinants of solo-entrepreneurship, startup survival rates, and venture financing in the Netherlands.',
        source: 'https://www.tio.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1702,
        name: 'Dr. Aniek de Kleijn',
        title: 'Head of Hospitality Studies & Sustainable Tourism',
        university: 'Tio Business School',
        subject: 'social-sciences',
        topics: ['Circular Economy in Hotel Operations', 'Experiential Luxury Tourism', 'Food Waste Reduction Systems', 'Service Quality Metrics'],
        summary: 'Hospitality researcher developing circular resource models for international hotel chains and analyzing customer willingness to pay for eco-certified accommodation.',
        source: 'https://www.tio.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1703,
        name: 'Dr. Robert Jan Simons',
        title: 'Visiting Professor of Digital Transformation & Learning in Organizations',
        university: 'Tio Business School',
        subject: 'social-sciences',
        topics: ['Digital Transformation in Business', 'Workplace Learning Architectures', 'Organizational Agility', 'Executive Knowledge Transfer'],
        summary: 'Expert in corporate knowledge systems investigating how digital tools and artificial intelligence reshape employee skill acquisition and strategic leadership agility.',
        source: 'https://www.tio.nl',
        recruiting: 'Not verified'
      }
    ]
  },

  // 30. Netherlands - Hogeschool Viaa (Row 1539)
  {
    slug: 'hogeschool-viaa-zwolle',
    institution: 'Hogeschool Viaa',
    shortName: 'Viaa Zwolle',
    countryId: 'netherlands',
    countryLabel: 'Netherlands',
    location: 'Zwolle, Overijssel, Netherlands',
    website: 'https://www.viaa.nl',
    sourceRow: 1539,
    badge: 'Premier University of Applied Sciences for Healthcare & Social Work',
    lead: 'Hogeschool Viaa is an exceptional Christian university of applied sciences situated in the historic city of Zwolle, celebrated across the Netherlands for healthcare nursing, social work, primary education, and applied ethics.',
    overview: 'Located in Zwolle within the province of Overijssel, Hogeschool Viaa has been ranked multiple times as the #1 medium-sized university of applied sciences in the Netherlands by Keuzegids Hbo. Rooted in values of Christian social responsibility, Viaa delivers accredited four-year bachelor\'s degrees in Nursing, Social Work, Primary Teacher Education (PABO), and Theology, fostering close-knit academic mentorship, clinical simulation wards, and leading applied research in youth care and community wellbeing.',
    quickFacts: {
      type: 'Specialist University of Applied Sciences (Hogeschool)',
      campus: 'Zwolle Campus (Wethouder Alferinkweg, Zwolle, Overijssel)',
      accreditation: 'NVAO (Accreditation Organisation of the Netherlands and Flanders) Accredited',
      admissions: 'Havo, Vwo, or Mbo level 4 diploma; matching interview and language readiness',
      language: 'Dutch (primary instructional language) with specialized international nursing exchange semesters in English',
      aid: 'Dutch Government Studiefinanciering (DUO), Tegemoetkoming Zorg en Onderwijs, Erasmus+ study grants'
    },
    strengths: [
      'Evidence-Based Nursing & Community Healthcare',
      'Social Work, Youth Care & Restorative Justice',
      'Primary Teacher Education (PABO) & Moral Pedagogy',
      'Applied Ethics & Spiritual Care in Healthcare'
    ],
    programs: [
      { title: 'Bachelor of Science in Nursing (Verpleegkunde)', level: 'Bachelor\'s', desc: 'Accredited four-year healthcare degree leading to Dutch registered nurse (BIG-register) certification.' },
      { title: 'Bachelor of Social Work (Social Work & Youth Care)', level: 'Bachelor\'s', desc: 'Comprehensive social work program qualifying graduates for SKJ professional youth care registration.' },
      { title: 'Bachelor of Education in Primary Teaching (PABO)', level: 'Bachelor\'s', desc: 'Accredited teacher training program emphasizing values-driven pedagogy and differentiated classroom instruction.' },
      { title: 'International Semester in Global Health and Nursing', level: 'Course', desc: 'English-taught exchange semester exploring cross-cultural public health, palliative care, and ethics.' }
    ],
    opportunities: [
      {
        id: 3931,
        title: 'Hogeschool Viaa Healthcare Talent Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'Tuition reduction of €1,500 per year plus dedicated student housing placement assistance in Zwolle',
        tuition: '€2,530/year (Statutory EU/EEA fee) / €8,500/year (Non-EU rate)',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: 'Merit scholarship supporting motivated healthcare and social work students who demonstrate high empathy, academic commitment, and community volunteerism.',
        requirements: {
          gpa: 'Secondary school graduation average >= 7.0/10 (Dutch Havo/Vwo or international equivalent)',
          ielts: 'Dutch NT2-II or English IELTS 6.0 for international exchange tracks',
          gre: 'Not required',
          papers: 'Proof of secondary education, motivation essay detailing healthcare values, and resume',
          references: '1 letter of recommendation from school mentor or community volunteer supervisor'
        }
      },
      {
        id: 3932,
        title: 'Bachelor of Science in Nursing (HBO-Verpleegkunde BIG-Accredited)',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Eligible for Dutch DUO healthcare student grants and hospital apprenticeship contracts (leerwerktrajecten)',
        tuition: '€2,530 per year',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: 'Four-year degree training students in clinical diagnostic reasoning, acute trauma nursing, psychiatric healthcare, and home healthcare nursing.',
        requirements: {
          gpa: 'Dutch Havo, Vwo, or Mbo-4 diploma with biology/chemistry',
          ielts: 'Dutch language proficiency C1',
          gre: 'Not required',
          papers: 'Diploma transcripts and mandatory study choice check (studiekeuzecheck) interview',
          references: 'Not required'
        }
      },
      {
        id: 3933,
        title: 'Bachelor of Social Work (Youth Care & Family Resilience)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        funding: 'Eligible for Dutch government student financing loans and regional municipal study allowances',
        tuition: '€2,530/year',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: 'Accredited degree qualifying graduates as registered youth care workers (SKJ registration) working in child welfare, mental health, and family coaching.',
        requirements: {
          gpa: 'Secondary education diploma (Havo, Vwo, or Mbo level 4)',
          ielts: 'Dutch language proficiency',
          gre: 'Not required',
          papers: 'Transcripts and personal motivation letter',
          references: 'Not required'
        }
      },
      {
        id: 3934,
        title: 'Research Centre for Care and Wellbeing Doctoral Fellowship',
        type: 'PhD',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'Fully funded research associate position under CAO HBO paying €3,800 to €5,200/month for 4 years',
        tuition: '€0 (Doctoral position co-supervised with university medical centers)',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: 'Doctoral research position investigating loneliness mitigation in elderly care homes, palliative spiritual accompaniment, and interprofessional clinical teamwork.',
        requirements: {
          gpa: 'Master of Science in Nursing Science, Health Sciences, or Social Work with top grades',
          ielts: 'Fluent Dutch and academic English',
          gre: 'Not required',
          papers: 'Master\'s thesis abstract, CV, and 4-page doctoral research outline',
          references: '2 letters of academic reference'
        }
      },
      {
        id: 3935,
        title: 'Isala Hospital Regional Clinical Nursing Internship',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Monthly stagevergoeding €550 to €800 paid by Isala Hospital Zwolle under CAO Ziekenhuizen',
        tuition: 'Integrated clinical placement within BSc Nursing curriculum',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: '20-week clinical internship rotating across cardiology, oncology, pediatric care, and surgical recovery wards at Isala Hospital in Zwolle.',
        requirements: {
          gpa: 'Enrolled in good standing in Year 3 or 4 of Viaa Nursing program',
          ielts: 'Clinical Dutch proficiency',
          gre: 'Not required',
          papers: 'VOG certificate, hepatitis B vaccination proof, and clinical competency passport',
          references: 'Hospital clinical coordinator sign-off'
        }
      },
      {
        id: 3936,
        title: 'Bachelor of Education in Primary Teaching (PABO Values-Led Track)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Dutch government teacher tuition grant (Tegemoetkoming Leraren) covering €2,530/year',
        tuition: '€2,530/year (Full reimbursement available)',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: 'Four-year teacher education degree combining innovative classroom pedagogies, educational psychology, and ethical character formation for primary schools.',
        requirements: {
          gpa: 'Havo, Vwo, or Mbo-4 diploma and passing national PABO entrance knowledge tests',
          ielts: 'Dutch language proficiency C1',
          gre: 'Not required',
          papers: 'Diploma transcripts and personal intake profile',
          references: 'Not required'
        }
      },
      {
        id: 3937,
        title: 'Palliative Care & Moral Deliberation in Clinical Nursing Course',
        type: 'Course',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Hogeschool Viaa',
        country: 'Netherlands',
        location: 'Zwolle, Overijssel, Netherlands',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Accredited by V&VN (Dutch Nurses Association) for quality register accreditation points',
        tuition: '€795 continuing education course fee',
        fee: '€0',
        source: 'https://www.viaa.nl',
        desc: '4-day professional course for nurses exploring palliative symptom management, ethical dilemmas surrounding euthanasia and palliative sedation, and family grief support.',
        requirements: {
          gpa: 'Registered nurse (BIG registered) or healthcare professional',
          ielts: 'Dutch working proficiency',
          gre: 'Not required',
          papers: 'Registration form and BIG registration number',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1704,
        name: 'Dr. Margreet van der Cingel',
        title: 'Lector in Compassion & Nursing Ethics',
        university: 'Hogeschool Viaa',
        subject: 'biology',
        topics: ['Compassionate Healthcare Systems', 'Moral Deliberation in Clinical Nursing', 'Professional Nurse Identity', 'Patient Dignity in Palliative Care'],
        summary: 'Pioneering nursing scientist investigating the clinical impact of compassionate care, ethical reflection methods among hospital staff, and preserving human dignity during terminal illness.',
        source: 'https://www.viaa.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1705,
        name: 'Dr. René van Leeuwen',
        title: 'Professor of Spiritual Care & Health Sciences',
        university: 'Hogeschool Viaa',
        subject: 'biology',
        topics: ['Spiritual Competence in Healthcare', 'European EPICC Nursing Competency Framework', 'Holistic Patient Wellbeing', 'Palliative Nursing Education'],
        summary: 'International authority on spiritual care integration in nursing education, co-founding the European EPICC network and developing validated spiritual assessment tools for clinical practice.',
        source: 'https://www.viaa.nl',
        recruiting: 'Not verified'
      },
      {
        id: 1706,
        name: 'Dr. Harry van de Veen',
        title: 'Lector in Youth Care & Family Centered Social Work',
        university: 'Hogeschool Viaa',
        subject: 'social-sciences',
        topics: ['Multi-Problem Family Resilience', 'Restorative Justice in Youth Care', 'Child Protection Decision-Making', 'Inter-Professional Social Work'],
        summary: 'Prominent social work researcher analyzing effective family-centered interventions, reducing out-of-home foster placements, and improving collaboration between schools and child welfare agencies.',
        source: 'https://www.viaa.nl',
        recruiting: 'Not verified'
      }
    ]
  }
];

export const batch37Part3 = batch37Part3Universities;
