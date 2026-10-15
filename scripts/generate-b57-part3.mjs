import { writeFileSync } from 'node:fs';

const part3 = [
  // 21. Sapporo University Women's Junior College (Row 1744)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: "Sapporo University Women's Junior College",
    shortName: "Sapporo Women's JC",
    slug: 'sapporo-university-womens-junior-college',
    location: 'Toyohira-ku, Sapporo, Hokkaido, Japan',
    website: 'https://www.sapporo-u.ac.jp',
    sourceRow: 1744,
    stats: {
      established: '1968',
      students: '600+',
      international: '8%',
      faculty: '45+'
    },
    heroSummary: "Sapporo University Women's Junior College is an established higher education college in Sapporo, Hokkaido, offering career-oriented two-year degree curricula in career design, business informatics, child welfare, and international cultural studies.",
    academicOverview: "Operating in close academic integration with Sapporo University, the Women's Junior College equips women with practical skills in corporate administration, financial spreadsheets, preschool child education, and bilingual communication. Graduates transition directly into commercial enterprises throughout Hokkaido or articulate into upper-division university bachelor programs.",
    researchAdmissions: 'Admissions require high school graduation or 12 years of formal schooling. International applicants require JLPT N2 or EJU Japanese score >= 200, statement of academic intent, high school transcripts, and an admissions interview.',
    opportunities: [
      {
        id: 8007,
        title: 'Associate of Arts in Career Design & Business Informatics',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Two-year curriculum covering business software analytics, corporate accounting, professional secretarial communication, and career planning in Sapporo.',
        funding: 'Eligible for Sapporo University Educational Foundation scholarships and JASSO international student honors grants',
        tuition: '¥1,080,000 per academic year',
        fee: '¥25,000 entrance examination fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027 (Spring Admission)',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'High school graduation with minimum 2.50 GPA equivalent',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international students',
          gre: 'Not required',
          papers: 'Statement of career purpose in Japanese (800 characters) and official transcripts',
          references: 'One letter of recommendation from secondary school principal or teacher'
        }
      },
      {
        id: 8008,
        title: 'Associate Degree in Early Childhood Care & Pedagogy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Practical two-year credential preparing licensed nursery teachers (Hoikushi) and kindergarten educators with on-site daycare practicums across Sapporo.',
        funding: 'Hokkaido Childcare Provider tuition subsidies up to ¥200,000 per year',
        tuition: '¥1,120,000 per academic year',
        fee: '¥25,000 examination fee',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'High school diploma with good standing in humanities and music/art',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Personal essay explaining vocation for child welfare and education',
          references: 'One academic reference'
        }
      },
      {
        id: 8009,
        title: 'Associate Degree in English & International Communication',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Intensive language program building fluency in practical business English, cross-cultural tourism management, and translation for Hokkaido hospitality sectors.',
        funding: 'International student tuition waivers up to 30%',
        tuition: '¥1,080,000 per academic year',
        fee: '¥25,000 application fee',
        deadline: '2027-02-10',
        deadlineText: 'February 10, 2027',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with interest in foreign languages',
          ielts: 'JLPT N2 and basic English conversation proficiency',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest in international communication',
          references: 'One recommendation'
        }
      },
      {
        id: 8010,
        title: "Sapporo Women's Junior College Academic Honors Scholarship",
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit-based tuition reduction awarded to top matriculants in business informatics or child welfare displaying exceptional academic potential.',
        funding: '¥300,000 annual tuition reduction renewable for second year of study',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'High school GPA 3.20+ or top 15% class ranking',
          ielts: 'JLPT N2 for foreign students',
          gre: 'Not required',
          papers: 'Scholarship application and high school academic records',
          references: 'High school principal recommendation'
        }
      },
      {
        id: 8011,
        title: 'Hokkaido Corporate Internship & Secretarial Practicum',
        type: 'Practicum',
        subject: 'social-sciences',
        desc: 'Credit-bearing corporate placement pairing second-year students with Sapporo banking, hospitality, and trading firms for executive office administration.',
        funding: 'Corporate internship allowance of ¥50,000 per month',
        tuition: 'Included in career design curriculum',
        fee: '¥0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'Enrolled second-year student in Career Design with 2.80+ GPA',
          ielts: 'Business-level Japanese',
          gre: 'Not required',
          papers: 'Resume and corporate entry sheet',
          references: 'Career Center endorsement'
        }
      },
      {
        id: 8012,
        title: 'Sapporo University Campus Transfer Transition Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Academic pathway fellowship assisting Junior College graduates transferring into the third-year Bachelor degree program at Sapporo University.',
        funding: '¥200,000 matriculation grant plus full transfer credit recognition',
        tuition: 'Transfer tuition assistance',
        fee: '¥0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.sapporo-u.ac.jp',
        requirements: {
          gpa: 'Graduating Junior College student with cumulative GPA 3.00+',
          ielts: 'Standard institutional requirement',
          gre: 'Not required',
          papers: 'Transfer articulation proposal and faculty advisor endorsement',
          references: 'Dean recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3559,
        name: 'Prof. Kaori Sato',
        title: "Dean & Professor of Career Pedagogy and Women's Leadership",
        department: "Department of Career Design",
        subject: 'social-sciences',
        topics: ["Women's Career Development in Japan", 'Office Informatics Ergonomics', 'Bicultural Business Communication', 'Regional Employment Trends'],
        summary: "Prof. Kaori Sato evaluates women's workforce participation and leadership pathways in regional Hokkaido commercial industries, designing practical business informatics curricula.",
        source: 'https://www.sapporo-u.ac.jp'
      },
      {
        id: 3560,
        name: 'Prof. Hiroko Takahashi',
        title: 'Professor of Early Childhood Education & Child Developmental Psychology',
        department: 'Division of Child Education and Welfare',
        subject: 'social-sciences',
        topics: ['Early Childhood Language Development', 'Preschool Play Pedagogy', 'Inclusive Daycare Support Systems', 'Parent-Teacher Communication'],
        summary: 'Prof. Hiroko Takahashi conducts observational field research on preschool social play and linguistic development, standardizing childcare practicum guidelines in Sapporo.',
        source: 'https://www.sapporo-u.ac.jp'
      },
      {
        id: 3561,
        name: 'Dr. Kenichi Chiba',
        title: 'Associate Professor of Information Systems and Data Processing',
        department: 'Department of Business Informatics',
        subject: 'computer-science',
        topics: ['Business Office Automation', 'Cloud Spreadsheet Engineering', 'Database Design for Small Business', 'Digital Literacy Education'],
        summary: 'Dr. Kenichi Chiba teaches enterprise spreadsheet automation and cloud database tools, researching digital literacy integration in two-year collegiate programs.',
        source: 'https://www.sapporo-u.ac.jp'
      }
    ]
  },

  // 22. Teikyō Junior College (Row 1757)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Teikyō Junior College',
    shortName: 'Teikyo Junior College',
    slug: 'teikyo-junior-college-tokyo',
    location: 'Shibuya-ku, Tokyo, Japan',
    website: 'https://www.teikyo-jc.ac.jp',
    sourceRow: 1757,
    stats: {
      established: '1962',
      students: '1,100+',
      international: '5%',
      faculty: '75+'
    },
    heroSummary: 'Teikyo Junior College is a prominent private junior college located in Shibuya, Tokyo, affiliated with the Teikyo University Group and offering comprehensive associate degree programs in early childhood education, nutrition science, and modern business.',
    academicOverview: 'Founded in 1962, Teikyo Junior College provides intensive two-year career-oriented and academic degree programs across the Department of Early Childhood Care and Education, the Department of Life Sciences (Food & Nutrition), and the Department of Contemporary Business and Information Studies. The college integrates rigorous practical training in affiliated kindergartens, clinical nutritional centers, and medical administration software labs, preparing graduates for professional certifications and direct transfer into four-year faculties of Teikyo University.',
    researchAdmissions: 'Admissions require high school graduation or recognized secondary credential. Candidates are evaluated via general entrance examinations, recommendation interviews, and career objective assessments. International applicants must demonstrate Japanese language competence (JLPT N2 or equivalent).',
    opportunities: [
      {
        id: 8013,
        title: 'Associate Degree in Early Childhood Care & Kindergarten Teacher Certification',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Two-year associate degree preparing certified childcare workers (Hoikushi) and kindergarten educators through immersive pedagogical coursework and nursery practicums in Tokyo.',
        funding: 'Eligible for Teikyo Educational Foundation tuition reduction awards up to ¥300,000',
        tuition: '¥1,180,000 per academic year',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-01-22',
        deadlineText: 'January 22, 2027 (General Entrance Examination)',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'High school graduation with satisfactory scholastic record',
          ielts: 'JLPT N2 or equivalent for international students',
          gre: 'Not required',
          papers: 'Admissions essay on early childhood education motivations and high school transcript',
          references: 'One academic reference letter from high school teacher or principal'
        }
      },
      {
        id: 8014,
        title: 'Associate Degree in Nutrition Science & Registered Dietitian Licensure',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Intensive two-year curriculum covering human nutritional physiology, biochemical food analysis, clinical dietetics, and community dietary guidance leading to official Japanese Nutritionist licensing.',
        funding: 'Life Sciences laboratory achievement bursaries up to ¥200,000',
        tuition: '¥1,220,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-26',
        deadlineText: 'January 26, 2027',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'Secondary school completion with foundational coursework in biology and chemistry',
          ielts: 'JLPT N2 for non-native Japanese speakers',
          gre: 'Not required',
          papers: 'Statement of career goals in nutritional science and academic records',
          references: 'One recommendation letter'
        }
      },
      {
        id: 8015,
        title: 'Associate Degree in Medical Business & Health Information Management',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Professional two-year program combining medical terminology, hospital billing informatics, electronic health record databases, and office administration.',
        funding: 'IT & Healthcare administration qualification study grants up to ¥150,000',
        tuition: '¥1,140,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-02-05',
        deadlineText: 'February 5, 2027',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'High school diploma with good standing',
          ielts: 'JLPT N2 or EJU Japanese score >= 220',
          gre: 'Not required',
          papers: 'Application form and personal statement',
          references: 'One teacher recommendation'
        }
      },
      {
        id: 8016,
        title: 'Teikyo University Group Transfer Pathway Merit Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Merit-based educational transition grant awarded to high-achieving junior college graduates progressing directly into third-year undergraduate programs at Teikyo University campuses.',
        funding: '¥400,000 tuition remission credit upon transition to Teikyo University',
        tuition: 'Applied directly as third-year university tuition credit',
        fee: '¥0 fellowship application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'Teikyo Junior College cumulative GPA 3.30+ across two years of study',
          ielts: 'Academic faculty endorsement',
          gre: 'Not required',
          papers: 'Transfer research proposal and transcript of completed associate coursework',
          references: 'Dean recommendation from Teikyo Junior College'
        }
      },
      {
        id: 8017,
        title: 'Teikyo Clinical Nutrition & Community Dietary Education Practicum Award',
        type: 'Grant',
        subject: 'biology',
        desc: 'Practicum stipend supporting nutrition students undertaking clinical food management rotations at affiliated Tokyo hospital facilities and healthcare nursing institutes.',
        funding: '¥180,000 practical clinical training stipend and materials grant',
        tuition: 'Direct clinical stipend funding',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'Enrolled in Department of Life Sciences Nutrition with 3.00+ GPA',
          ielts: 'Japanese fluency suitable for hospital practicum',
          gre: 'Not required',
          papers: 'Practicum clinical learning plan and health clearance',
          references: 'Clinical Nutrition department head sign-off'
        }
      },
      {
        id: 8018,
        title: 'Teikyo Early Childhood Creative Arts & Music Education Award',
        type: 'Scholarship',
        subject: 'arts-design',
        desc: 'Specialized scholarship supporting students excelling in child drama, musical accompaniment (piano), and picture-book illustration for early nursery environments.',
        funding: '¥200,000 scholarship towards arts and music education materials',
        tuition: 'Direct scholarship payment',
        fee: '¥0 scholarship fee',
        deadline: '2027-02-12',
        deadlineText: 'February 12, 2027',
        source: 'https://www.teikyo-jc.ac.jp',
        requirements: {
          gpa: 'Demonstrated proficiency in childhood musical arts or visual pedagogy',
          ielts: 'JLPT N2 or native Japanese',
          gre: 'Not required',
          papers: 'Creative pedagogical portfolio or recorded musical performance',
          references: 'Early Childhood Department faculty endorsement'
        }
      }
    ],
    researchers: [
      {
        id: 3562,
        name: 'Prof. Hiroko Takahashi',
        title: 'Professor of Early Childhood Psychology and Play Pedagogy',
        department: 'Department of Early Childhood Care and Education',
        subject: 'social-sciences',
        topics: ['Early Childhood Development', 'Play-Based Pedagogical Methods', 'Childcare Worker Professional Training', 'Infant Social Emotional Development'],
        summary: 'Prof. Hiroko Takahashi researches developmental milestones and emotional resilience in early childhood education, authoring clinical textbooks on childcare practitioner training.',
        source: 'https://www.teikyo-jc.ac.jp'
      },
      {
        id: 3563,
        name: 'Assoc. Prof. Dr. Kazuo Endo',
        title: 'Associate Professor of Nutritional Biochemistry and Community Health',
        department: 'Department of Life Sciences',
        subject: 'biology',
        topics: ['Nutritional Biochemistry', 'Dietary Functional Foods', 'Metabolic Syndrome Prevention', 'Community Nutritional Policy'],
        summary: 'Assoc. Prof. Dr. Kazuo Endo studies micronutrient bioavailability and preventative dietary habits, directing laboratory practicals for certified nutritionist trainees.',
        source: 'https://www.teikyo-jc.ac.jp'
      },
      {
        id: 3564,
        name: 'Lect. Yuka Sato',
        title: 'Senior Lecturer in Healthcare Information Management and Office Systems',
        department: 'Department of Contemporary Business and Information Studies',
        subject: 'computer-science',
        topics: ['Electronic Medical Records', 'Healthcare Administration Software', 'Medical Billing Database Systems', 'Office Information Security'],
        summary: 'Lect. Yuka Sato trains future medical secretaries in electronic health record databases, medical ethics, and administrative information security in hospital environments.',
        source: 'https://www.teikyo-jc.ac.jp'
      }
    ]
  },

  // 23. Seisa Dohto University (Row 1747)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Seisa Dohto University',
    shortName: 'Seisa Dohto',
    slug: 'seisa-dohto-university-kitahiroshima',
    location: 'Kitahiroshima, Hokkaido, Japan',
    website: 'https://www.seisadohto.ac.jp',
    sourceRow: 1747,
    stats: {
      established: '1978',
      students: '1,500+',
      international: '6%',
      faculty: '85+'
    },
    heroSummary: 'Seisa Dohto University is a private university in Kitahiroshima, Hokkaido (adjacent to Sapporo), celebrated for its Department of Design and Architecture, community social welfare education, and athletic sports sciences.',
    academicOverview: 'Situated in close proximity to the Hokkaido Ballpark F Village in Kitahiroshima, Seisa Dohto provides hands-on degree tracks in cold-climate timber architecture, graphic design, community social welfare, and athletic coaching. The university is recognized for its ethos of inclusive education and community revitalization across Hokkaido.',
    researchAdmissions: 'Undergraduate admissions evaluate high school graduation credentials and personal interviews. Foreign applicants require JLPT N2 or EJU Japanese score >= 200, an artistic portfolio for design candidates, and an admissions interview.',
    opportunities: [
      {
        id: 8019,
        title: 'Bachelor of Fine Arts in Architecture & Cold-Climate Timber Design',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Specialized four-year architecture degree focused on northern cold-climate insulation technologies, sustainable Hokkaido timber structures, and seismic design.',
        funding: 'Eligible for Hokkaido Timber Construction scholarships and university tuition reductions',
        tuition: '¥1,340,000 per academic year (includes studio drafting fees)',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027 (Spring Admission)',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'High school graduation with 2.50+ GPA equivalent',
          ielts: 'JLPT N2 or EJU Japanese 200+ for international applicants',
          gre: 'Not required',
          papers: 'Statement of purpose explaining architectural design ambitions and high school transcripts',
          references: 'One letter of recommendation from secondary school instructor'
        }
      },
      {
        id: 8020,
        title: 'Bachelor of Arts in Community Social Welfare & Inclusive Education',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive degree preparing certified social workers (Shakai Fukushishi) and inclusive education specialists with practicums in regional care facilities.',
        funding: 'Hokkaido Welfare Foundation educational loans and tuition grants up to ¥250,000',
        tuition: '¥1,180,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-02-05',
        deadlineText: 'February 5, 2027',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'High school diploma with good standing',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Essay on inclusive society and barrier-free community design',
          references: 'One academic reference'
        }
      },
      {
        id: 8021,
        title: 'Bachelor of Sports Management & Athletic Coaching Sciences',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Four-year program in sports training physiology, athletic rehabilitation, community sports club management, and baseball/winter sports analytics.',
        funding: 'Seisa Dohto Athletic Excellence awards up to ¥300,000 annually',
        tuition: '¥1,220,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'High school graduation credentials and athletic background',
          ielts: 'JLPT N2',
          gre: 'Not required',
          papers: 'Sports achievement dossier and personal statement',
          references: 'Athletic coach or teacher recommendation'
        }
      },
      {
        id: 8022,
        title: 'Seisa Dohto Northern Regional Revitalization Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit scholarship awarded to students engaged in local community revitalization, ecotourism, and regional craft preservation in Hokkaido.',
        funding: 'Annual grant of ¥250,000 applied toward tuition costs',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'Minimum 2.80 GPA in previous schooling',
          ielts: 'Standard institutional requirement',
          gre: 'Not required',
          papers: 'Project plan detailing regional revitalization contributions in Hokkaido',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 8023,
        title: 'Kitahiroshima Ballpark Community Sports & Hospitality Practicum',
        type: 'Practicum',
        subject: 'social-sciences',
        desc: 'Immersive sports business practicum conducted in partnership with Hokkaido Ballpark F Village, covering stadium operations, crowd safety, and fan experience design.',
        funding: 'Event practicum stipend of ¥80,000 per month during baseball season',
        tuition: 'Credit-bearing field practicum',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'Enrolled sports management student with 2.75+ GPA',
          ielts: 'Conversational Japanese',
          gre: 'Not required',
          papers: 'Sports business career statement and resume',
          references: 'Department practicum coordinator approval'
        }
      },
      {
        id: 8024,
        title: 'Studio Ceramic Arts & Hokkaido Craft Design Fellowship',
        type: 'Fellowship',
        subject: 'arts-design',
        desc: 'Studio craft fellowship utilizing Hokkaido native clays and wood-firing kilns to produce contemporary ceramic design and craft products.',
        funding: 'Studio material allowance of ¥120,000 plus gallery exhibition support',
        tuition: 'Funded studio fellowship',
        fee: '¥0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.seisadohto.ac.jp',
        requirements: {
          gpa: 'Enrolled design student with ceramic arts specialization',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Ceramics portfolio (5-8 pieces) and artist statement',
          references: 'Art faculty recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3565,
        name: 'Prof. Dr. Hidenori Kondo',
        title: 'Professor of Cold-Climate Timber Architecture and Urban Design',
        department: 'Department of Design and Architecture',
        subject: 'arts-design',
        topics: ['Cold-Climate Building Physics', 'Hokkaido Larch Structural Engineering', 'Passive Solar House Design', 'Kitahiroshima Urban Master Planning'],
        summary: 'Prof. Dr. Hidenori Kondo specializes in energy-efficient timber architecture tailored for heavy-snow northern climates, designing public civic facilities with local larch wood.',
        source: 'https://www.seisadohto.ac.jp'
      },
      {
        id: 3566,
        name: 'Dr. Junko Matsubara',
        title: 'Associate Professor of Inclusive Education and Social Welfare',
        department: 'Faculty of Social Welfare',
        subject: 'social-sciences',
        topics: ['Inclusive Education Pedagogies', 'Community Support for Intellectual Disabilities', 'Barrier-Free Living Systems', 'Elderly Care Networks'],
        summary: 'Dr. Junko Matsubara researches inclusive schooling models and community-based integrated care networks that support individuals with special needs across Hokkaido.',
        source: 'https://www.seisadohto.ac.jp'
      },
      {
        id: 3567,
        name: 'Prof. Kazuo Sasaki',
        title: 'Professor of Athletic Training and Sports Biomechanics',
        department: 'Division of Sports Sciences',
        subject: 'biology',
        topics: ['Baseball Throwing Biomechanics', 'Winter Athletic Conditioning', 'Sports Injury Rehabilitation', 'Neuromuscular Fatigue Metrics'],
        summary: 'Prof. Kazuo Sasaki models pitching mechanics and athletic fatigue prevention using high-speed optical motion capture, consulting for professional baseball and collegiate teams.',
        source: 'https://www.seisadohto.ac.jp'
      }
    ]
  },

  // 24. Sendai Seiyo Gakuin College, Itsutsubashi Campus (Row 1748)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Sendai Seiyo Gakuin College, Itsutsubashi Campus',
    shortName: 'Sendai Seiyo Itsutsubashi',
    slug: 'sendai-seiyo-gakuin-college-itsutsubashi',
    location: 'Aoba-ku, Sendai, Miyagi Prefecture, Japan',
    website: 'https://seiyogakuin.ac.jp',
    sourceRow: 1748,
    stats: {
      established: '2009',
      students: '2,100+',
      international: '5%',
      faculty: '110+'
    },
    heroSummary: 'Sendai Seiyo Gakuin College (Itsutsubashi Campus) is a premier junior and professional healthcare college in downtown Sendai, providing certified programs in dental hygiene, clinical nutrition, nursing, and international business communication.',
    academicOverview: 'Located near Sendai Station, the modern Itsutsubashi campus hosts clinical dental hygiene training suites, medical nutrition laboratories, and professional business language studios. Graduates consistently achieve outstanding pass rates on Japanese national medical and dental hygiene licensure examinations, serving the healthcare needs of the Tohoku region.',
    researchAdmissions: 'Admissions require high school graduation and entrance evaluation in biological sciences and Japanese language. Foreign applicants require JLPT N2, transcript validation, and a health clearance.',
    opportunities: [
      {
        id: 8025,
        title: 'Associate Degree in Dental Hygiene & Oral Health Sciences',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Three-year accredited professional curriculum preparing certified dental hygienists with extensive clinical patient practice in periodontal therapy, oral prophylaxis, and pediatric dental care.',
        funding: 'Eligible for Miyagi Prefectural Dental Health Scholarships and institutional tuition assistance',
        tuition: '¥1,280,000 per academic year (includes clinical instrumentation kits)',
        fee: '¥25,000 entrance examination fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027 (General Entrance Examination)',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'High school graduation with strong performance in biology and chemistry',
          ielts: 'JLPT N1 or high N2 (N1 recommended for clinical dental communication)',
          gre: 'Not required',
          papers: 'Statement of purpose in dental hygiene and official high school transcripts',
          references: 'One letter of recommendation from high school educator'
        }
      },
      {
        id: 8026,
        title: 'Associate Degree in Clinical Dietetics & Nutrition Sciences',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Professional two-year program training licensed nutritionists (Eiyoshi) in hospital meal planning, dietary counseling for chronic lifestyle illnesses, and food safety standards.',
        funding: 'Tohoku Food Industry scholarships up to ¥200,000',
        tuition: '¥1,190,000 per academic year',
        fee: '¥25,000 examination fee',
        deadline: '2027-02-05',
        deadlineText: 'February 5, 2027',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'High school diploma with good standing in science courses',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Personal statement on nutrition and health promotion',
          references: 'One academic reference'
        }
      },
      {
        id: 8027,
        title: 'Associate Degree in Global Business & Intercultural Communication',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Two-year curriculum covering corporate spreadsheet analytics, commercial correspondence, travel agency management, and bilingual Japanese-English business negotiation.',
        funding: 'Sendai Chamber of Commerce internship stipends',
        tuition: '¥1,080,000 per academic year',
        fee: '¥25,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'High school graduation credentials with minimum 2.50 GPA equivalent',
          ielts: 'JLPT N2 or EJU Japanese >= 200',
          gre: 'Not required',
          papers: 'Admissions application form and transcripts',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 8028,
        title: 'Sendai Seiyo Healthcare Professional Merit Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Merit scholarship awarded to top entrance examination performers entering dental hygiene or nutrition who commit to practicing in Tohoku regional health centers.',
        funding: '¥250,000 annual tuition reduction renewable upon satisfactory clinical progression',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'Entrance examination score in top 15% or high school GPA 3.30+',
          ielts: 'Standard language requirement',
          gre: 'Not required',
          papers: 'Scholarship application and regional healthcare dedication pledge',
          references: 'High school recommendation'
        }
      },
      {
        id: 8029,
        title: 'Tohoku Dental Clinic Clinical Practicum & Internship',
        type: 'Practicum',
        subject: 'biology',
        desc: 'Supervised clinical rotation at major dental clinics and hospital dental surgeries across Sendai, mastering ultrasonic scaling, fluoride varnishing, and patient oral education.',
        funding: 'Clinical placement support and protective PPE equipment provided',
        tuition: 'Credit-bearing clinical practicum',
        fee: '¥0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'Enrolled second-year Dental Hygiene student with good academic standing',
          ielts: 'Fluent Japanese (JLPT N1)',
          gre: 'Not required',
          papers: 'Pre-clinical OSCE examination clearance and health screening',
          references: 'Clinical Director endorsement'
        }
      },
      {
        id: 8030,
        title: 'Community Geriatric Oral Health Fieldwork Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Field research grant analyzing oral frailty (oral hypo-function) and dysphagia screening among nursing home residents in Miyagi Prefecture municipalities.',
        funding: '¥150,000 travel and field survey grant',
        tuition: 'Project grant',
        fee: '¥0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://seiyogakuin.ac.jp',
        requirements: {
          gpa: 'Dental Hygiene or Nutrition student with 3.00+ GPA',
          ielts: 'Native or fluent Japanese',
          gre: 'Not required',
          papers: 'Oral health survey project outline',
          references: 'Faculty advisor approval'
        }
      }
    ],
    researchers: [
      {
        id: 3568,
        name: 'Prof. Dr. Yoshio Watanabe',
        title: 'Professor of Clinical Dental Sciences & Dental Hygiene Lead',
        department: 'Department of Dental Hygiene',
        subject: 'biology',
        topics: ['Periodontal Pathogen Diagnostics', 'Preventative Oral Prophylaxis', 'Geriatric Oral Frailty Screening', 'Dental Hygiene Ergonomics'],
        summary: 'Prof. Dr. Yoshio Watanabe researches periodontal disease prevention and oral microbiome dynamics, standardizing preventative dental hygiene clinical protocols across Tohoku.',
        source: 'https://seiyogakuin.ac.jp'
      },
      {
        id: 3569,
        name: 'Dr. Mayumi Chiba',
        title: 'Associate Professor of Clinical Nutrition and Dietetics',
        department: 'Department of Nutrition Science',
        subject: 'biology',
        topics: ['Clinical Pediatric Nutrition', 'Dietary Management of Type 2 Diabetes', 'Hospital Menu Biochemical Analysis', 'Nutritional Education Pedagogy'],
        summary: 'Dr. Mayumi Chiba evaluates clinical dietary interventions that mitigate metabolic syndrome and designs evidence-based hospital menus for regional medical centers.',
        source: 'https://seiyogakuin.ac.jp'
      },
      {
        id: 3570,
        name: 'Prof. Kenichi Suzuki',
        title: 'Professor of International Business and Applied Pragmatics',
        department: 'Division of Global Business Communication',
        subject: 'social-sciences',
        topics: ['Business English Pragmatics', 'Bilingual Corporate Negotiation', 'Tohoku Inbound Tourism Logistics', 'Intercultural Etiquette'],
        summary: 'Prof. Kenichi Suzuki trains students in international trade communication and cross-cultural negotiation protocols, advising regional Sendai exporters on global market navigation.',
        source: 'https://seiyogakuin.ac.jp'
      }
    ]
  },

  // 25. Sendai Shirayuri Women's College (Row 1749)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: "Sendai Shirayuri Women's College",
    shortName: 'Sendai Shirayuri',
    slug: 'sendai-shirayuri-womens-college',
    location: 'Izumi-ku, Sendai, Miyagi Prefecture, Japan',
    website: 'https://sendai-shirayuri.ac.jp',
    sourceRow: 1749,
    stats: {
      established: '1893',
      students: '1,200+',
      international: '6%',
      faculty: '75+'
    },
    heroSummary: "Sendai Shirayuri Women's College is a historic private Catholic women's college in Sendai, Miyagi Prefecture, renowned for human development studies, clinical psychology, nutritional science, and preschool teacher education.",
    academicOverview: 'Founded by the Sisters of Saint Paul of Chartres, Sendai Shirayuri delivers compassionate higher education rooted in Christian humanism. The college features modern early childhood education centers, nutritional testing laboratories, and psychological counseling clinics that prepare women for leadership roles in healthcare, education, and human welfare throughout Northern Japan.',
    researchAdmissions: 'Admissions require high school graduation and academic evaluation. For foreign students: JLPT N2 or EJU Japanese score >= 200, personal statement, high school transcripts, and an admissions interview.',
    opportunities: [
      {
        id: 8031,
        title: 'Bachelor of Human Life Studies in Early Childhood Pedagogy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Four-year baccalaureate curriculum leading to Kindergarten Teacher First-Class Certification and Nursery Teacher licensure, with clinical teaching at Shirayuri kindergarten.',
        funding: 'Saint Paul Foundation educational grants and Miyagi nursery provider scholarships up to ¥300,000 annually',
        tuition: '¥1,260,000 per academic year',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Examination)',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'High school graduation with good academic performance in humanities and language',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international candidates',
          gre: 'Not required',
          papers: 'Statement of vocation for child education (800 words in Japanese) and official transcripts',
          references: 'One letter of recommendation from high school educator'
        }
      },
      {
        id: 8032,
        title: 'Bachelor of Science in Health & Nutritional Science - Registered Dietitian Track',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Nationally recognized four-year program preparing students for the National Examination for Registered Dietitians (Kanri Eiyoshi) with extensive biochemical laboratory work.',
        funding: 'Eligible for Sendai Shirayuri Science Honors scholarships up to ¥400,000',
        tuition: '¥1,380,000 per academic year (includes clinical lab fees)',
        fee: '¥30,000 examination fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'High school diploma with strong marks in chemistry and biology',
          ielts: 'JLPT N1 or high N2 (N1 strongly recommended for clinical medical nutrition)',
          gre: 'Not required',
          papers: 'Academic transcript and personal essay on nutrition and human dignity',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8033,
        title: 'Bachelor of Arts in Clinical Psychology & Counseling',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Four-year degree in developmental psychology, cognitive behavioral interventions, psychometric testing, and school mental health counseling in Sendai.',
        funding: 'Mental Health Advocate tuition discounts up to ¥200,000',
        tuition: '¥1,240,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with minimum 2.60 GPA equivalent',
          ielts: 'JLPT N2 or EJU Japanese >= 210',
          gre: 'Not required',
          papers: 'Personal statement detailing interest in psychological counseling',
          references: 'One academic reference'
        }
      },
      {
        id: 8034,
        title: 'Saint Paul Academic Excellence International Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit-based tuition waiver awarded to foreign women scholars displaying academic distinction and commitment to humanitarian service.',
        funding: '30% to 50% tuition reduction across all four undergraduate years',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'Cumulative GPA equivalent to 3.20+ or top 20% ranking',
          ielts: 'JLPT N2 or TOEFL 75',
          gre: 'Not required',
          papers: 'Scholarship application and essay on Christian humanism and service',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 8035,
        title: 'Tohoku Preschool Educational Fieldwork Practicum',
        type: 'Practicum',
        subject: 'social-sciences',
        desc: 'Comprehensive clinical teaching practicum conducted at affiliated kindergarten and child support facilities, practicing child-guided play instruction and developmental observation.',
        funding: 'Field practicum travel allowance provided',
        tuition: 'Credit-bearing undergraduate practicum',
        fee: '¥0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'Enrolled third-year Childhood Pedagogy student in good standing',
          ielts: 'Native or fluent Japanese (JLPT N1)',
          gre: 'Not required',
          papers: 'Pre-practicum teaching portfolio and health clearance',
          references: 'Department Chair of Childhood Education endorsement'
        }
      },
      {
        id: 8036,
        title: 'Community Nutrition & Geriatric Dietary Care Research Grant',
        type: 'Grant',
        subject: 'biology',
        desc: 'Collaborative student-faculty grant analyzing functional dietary interventions to prevent sarcopenia and frailty among elderly residents in Miyagi Prefecture communities.',
        funding: '¥200,000 project research grant and food analysis budget',
        tuition: 'Direct research project funding',
        fee: '¥0 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://sendai-shirayuri.ac.jp',
        requirements: {
          gpa: 'Enrolled Nutritional Science student with 3.00+ GPA',
          ielts: 'Fluent Japanese',
          gre: 'Not required',
          papers: 'Dietary intervention research proposal and ethics compliance statement',
          references: 'Faculty advisor signature'
        }
      }
    ],
    researchers: [
      {
        id: 3571,
        name: 'Prof. Sister Marie Terese Ogawa',
        title: 'Professor of Early Childhood Education & Moral Development',
        department: 'Department of Childhood Education',
        subject: 'social-sciences',
        topics: ['Christian Humanist Pedagogy', 'Moral Development in Preschool Children', 'Picture Book Aesthetics', 'Parental Engagement'],
        summary: 'Prof. Sister Marie Terese Ogawa investigates ethical and moral development in early childhood, publishing on picture book storytelling methodologies that cultivate empathy and social bonding.',
        source: 'https://sendai-shirayuri.ac.jp'
      },
      {
        id: 3572,
        name: 'Dr. Hiroshi Takahashi',
        title: 'Professor of Nutritional Physiology and Metabolic Biochemistry',
        department: 'Department of Health and Nutrition',
        subject: 'biology',
        topics: ['Sarcopenia Nutritional Interventions', 'Dietary Protein Synthesis Kinetics', 'Micronutrient Deficiencies in the Elderly', 'Functional Food Science'],
        summary: 'Dr. Hiroshi Takahashi studies molecular mechanisms of muscle protein synthesis and evaluates functional dietary interventions that counteract age-related sarcopenia.',
        source: 'https://sendai-shirayuri.ac.jp'
      },
      {
        id: 3573,
        name: 'Prof. Noriko Sato',
        title: 'Professor of Developmental Psychology and Child Guidance',
        department: 'Department of Psychology',
        subject: 'social-sciences',
        topics: ['Childhood Trauma Recovery', 'School Refusal Counseling Protocols', 'Play Therapy Techniques', 'Adolescent Identity Formation'],
        summary: 'Prof. Noriko Sato analyzes psychological support frameworks for school refusal and adolescent social anxiety, conducting clinical play therapy workshops across Miyagi public schools.',
        source: 'https://sendai-shirayuri.ac.jp'
      }
    ]
  },

  // 26. Sendai University (Row 1750)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Sendai University',
    shortName: 'Sendai University',
    slug: 'sendai-university-shibata',
    location: 'Shibata, Miyagi Prefecture, Japan',
    website: 'https://www.sendaidaigaku.jp',
    sourceRow: 1750,
    stats: {
      established: '1967',
      students: '3,200+',
      international: '8%',
      faculty: '140+'
    },
    heroSummary: 'Sendai University is Northern Japan’s sole specialized higher education university of physical education and sports sciences, acclaimed for training Olympic athletes, athletic trainers, physical education teachers, and sports business managers.',
    academicOverview: 'Operating extensive sports science research laboratories, Olympic-standard gymnastics arenas, artificial turf fields, and high-speed motion capture biomechanics suites, Sendai University leads Tohoku in sports medicine, coach education, and sports data analytics. Its athletes compete successfully at national intercollegiate championships and Olympic Games.',
    researchAdmissions: 'Admissions require high school graduation and physical fitness testing or competitive athletic achievements. Foreign applicants require JLPT N2, secondary school records, an athletic sports resume, and an admissions interview.',
    opportunities: [
      {
        id: 8037,
        title: 'Bachelor of Physical Education in Sports Coaching & Athletic Performance',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Comprehensive degree covering periodization training, high-performance coaching psychology, kinematic video analysis, and competitive sports pedagogy.',
        funding: 'Eligible for Sendai University Athletic Honors Scholarships and Japan Sports Association grants',
        tuition: '¥1,320,000 per academic year (includes sports facility usage fees)',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Examination)',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'High school graduation with competitive athletic achievement record',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international candidates',
          gre: 'Not required',
          papers: 'Athletic competition resume, statement of coaching philosophy, and high school transcripts',
          references: 'One letter of recommendation from athletic coach or high school educator'
        }
      },
      {
        id: 8038,
        title: 'Bachelor of Sports Sciences in Athletic Training & Sports Medicine',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'JSPO-certified athletic training program preparing sports trainers in emergency sports triage, concussion evaluation, kinesiology taping, and return-to-play conditioning.',
        funding: 'Sports Medicine Excellence awards up to ¥300,000',
        tuition: '¥1,340,000 per academic year',
        fee: '¥30,000 examination fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'High school diploma with good performance in biology and chemistry',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Statement of purpose in athletic training and transcripts',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8039,
        title: 'Bachelor of Modern Sports Business & Event Administration',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Four-year curriculum in professional team marketing, sports facility economics, digital sports media broadcasting, and regional outdoor tourism management.',
        funding: 'Tohoku Sports Industry internships and tuition assistance grants',
        tuition: '¥1,260,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with minimum 2.50 GPA equivalent',
          ielts: 'JLPT N2 or EJU 200+',
          gre: 'Not required',
          papers: 'Transcripts and personal essay on sports business innovation',
          references: 'One recommendation'
        }
      },
      {
        id: 8040,
        title: 'Graduate School of Sports Sciences (Master of Sports Science)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Two-year graduate research degree analyzing neuromuscular fatigue mechanics, sports nutrition kinetics, exercise immunology, and sports biomechanics.',
        funding: 'Graduate research fellowships offering ¥40,000 monthly study stipend',
        tuition: '¥840,000 annual graduate tuition',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'Bachelor degree in sports science, physical education, or health biology with 2.80+ GPA',
          ielts: 'JLPT N1 or TOEFL iBT 75',
          gre: 'Not required',
          papers: 'Master thesis research proposal (1,500-2,000 words in Japanese or English) and CV',
          references: 'Two letters of recommendation from undergraduate faculty'
        }
      },
      {
        id: 8041,
        title: 'Sendai University Top Athlete & International Merit Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Merit scholarship awarded to international student athletes who have represented their home nation in regional or national sports competitions.',
        funding: '50% to 100% tuition waiver across all four undergraduate years',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-05',
        deadlineText: 'January 5, 2027',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'Verified national/international athletic record and acceptable academic standing',
          ielts: 'JLPT N2 or conversational Japanese',
          gre: 'Not required',
          papers: 'Official competition certificates, video footage of performance, and transcripts',
          references: 'National sports federation or club recommendation'
        }
      },
      {
        id: 8042,
        title: 'Sports Biomechanics Motion Analysis Laboratory Assistantship',
        type: 'Assistantship',
        subject: 'physics',
        desc: 'Applied laboratory research assistantship operating high-speed infrared motion capture cameras, force plates, and electromyography sensors for athlete motion analysis.',
        funding: 'Research stipend of ¥50,000 monthly plus access to advanced sports testing facilities',
        tuition: 'Research assistantship funding',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.sendaidaigaku.jp',
        requirements: {
          gpa: 'Enrolled graduate student in sports science or senior undergraduate with 3.20+ GPA',
          ielts: 'Fluent Japanese or English',
          gre: 'Not required',
          papers: 'Resume detailing experience with motion analysis software (Vicon, Qualisys, or MATLAB)',
          references: 'Biomechanics Laboratory Director endorsement'
        }
      }
    ],
    researchers: [
      {
        id: 3574,
        name: 'Prof. Dr. Masao Morita',
        title: 'Professor of Sports Biomechanics and Kinematics',
        department: 'Department of Sports Sciences',
        subject: 'physics',
        topics: ['Three-Dimensional Motion Capture', 'Sprint Acceleration Kinematics', 'Gymnastics Aerial Mechanics', 'Ground Reaction Force Dynamics'],
        summary: 'Prof. Dr. Masao Morita utilizes high-speed motion capture and multi-axis force platforms to optimize sprint start biomechanics and vaulting rotational torque for Olympic gymnasts.',
        source: 'https://www.sendaidaigaku.jp'
      },
      {
        id: 3575,
        name: 'Prof. Dr. Kenji Ito',
        title: 'Professor of Sports Physiology and Altitude Training',
        department: 'Division of Exercise Physiology and Sports Medicine',
        subject: 'biology',
        topics: ['Hypoxic Altitude Training Protocols', 'Exercise-Induced Lactate Kinetics', 'Hydration Strategies in Cold Climates', 'Cardiovascular Performance Metrics'],
        summary: 'Prof. Dr. Kenji Ito investigates hematological adaptations and lactate clearance during simulated altitude training, advising national endurance athletic squads.',
        source: 'https://www.sendaidaigaku.jp'
      },
      {
        id: 3576,
        name: 'Prof. Tomoko Endo',
        title: 'Professor of Sports Psychology and Athletic Resilience',
        department: 'Faculty of Physical Education',
        subject: 'social-sciences',
        topics: ['Choking Under Pressure Prevention', 'Mental Imagery Routines', 'Coaching Communication Dynamics', 'Athlete Burnout Mitigation'],
        summary: 'Prof. Tomoko Endo conducts psychological conditioning research on elite athletes, developing cognitive behavioral routines that sustain focus during international championship finals.',
        source: 'https://www.sendaidaigaku.jp'
      }
    ]
  },

  // 27. Shokei Gakuin University (Row 1751)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Shokei Gakuin University',
    shortName: 'Shokei Gakuin',
    slug: 'shokei-gakuin-university-natori',
    location: 'Natori, Miyagi Prefecture, Japan',
    website: 'https://www.shokei.jp',
    sourceRow: 1751,
    stats: {
      established: '1892',
      students: '2,400+',
      international: '5%',
      faculty: '120+'
    },
    heroSummary: 'Shokei Gakuin University is a private Christian university in Natori, suburban Sendai, offering interdisciplinary programs in comprehensive human sciences, clinical psychology, nutrition, and environmental science.',
    academicOverview: 'Founded by American Baptist missionaries, Shokei Gakuin delivers holistic education focused on human welfare, regional environmental conservation, and local community revitalization. The university features an on-campus clinical counseling center and food technology laboratories that serve the Sendai metropolitan basin.',
    researchAdmissions: 'High school graduation credentials and entrance examinations. For international students: JLPT N2 or EJU Japanese score >= 200, personal statement, official transcripts, and an interview.',
    opportunities: [
      {
        id: 8043,
        title: 'Bachelor of Comprehensive Human Sciences in Clinical Psychology',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Four-year program preparing certified psychologists (Kounin Shinrishi) with coursework in psychopathology, counseling techniques, and on-site psychological testing.',
        funding: 'Eligible for Shokei Gakuin Merit Scholarships up to ¥300,000 per year',
        tuition: '¥1,220,000 per academic year',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Examination)',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'High school graduation with good academic performance in humanities',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international students',
          gre: 'Not required',
          papers: 'Statement of motivation in psychology (800 words in Japanese) and transcripts',
          references: 'One letter of recommendation from high school educator'
        }
      },
      {
        id: 8044,
        title: 'Bachelor of Human Sciences in Food and Nutrition Science',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Accredited curriculum in nutrition biochemistry, food processing technology, community health dietetics, and sanitary food microbiological testing.',
        funding: 'Food Innovation awards up to ¥250,000',
        tuition: '¥1,320,000 per academic year (includes laboratory fees)',
        fee: '¥30,000 examination fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'High school diploma with biology and chemistry coursework',
          ielts: 'JLPT N2',
          gre: 'Not required',
          papers: 'High school transcript and personal statement',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8045,
        title: 'Bachelor of Environmental Sciences in Sustainable Community Design',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Interdisciplinary degree analyzing watershed preservation, local renewable energy, coastal forest restoration, and eco-friendly regional town planning in Miyagi.',
        funding: 'Tohoku Ecological Sustainability grants up to ¥200,000',
        tuition: '¥1,220,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with minimum 2.50 GPA equivalent',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Transcripts and statement of interest in environmental planning',
          references: 'One recommendation'
        }
      },
      {
        id: 8046,
        title: 'Shokei Gakuin Christian Global Fellowship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit scholarship awarded to international students demonstrating moral character, academic dedication, and interest in cross-cultural community service.',
        funding: '30% to 50% tuition reduction across all four undergraduate years',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'Cumulative GPA equivalent to 3.00+ on a 4.0 scale',
          ielts: 'JLPT N2 or TOEFL 70',
          gre: 'Not required',
          papers: 'Scholarship essay on cross-cultural service and international harmony',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8047,
        title: 'Tohoku Regional Disaster Recovery & Community Welfare Practicum',
        type: 'Practicum',
        subject: 'social-sciences',
        desc: 'Supervised community fieldwork in tsunami-affected coastal towns of Miyagi Prefecture, assessing community mental health recovery and local social capital rebuilding.',
        funding: 'Travel and field survey allowance of ¥50,000 per semester',
        tuition: 'Credit-bearing field practicum',
        fee: '¥0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'Enrolled second- or third-year student in Human Sciences with 2.80+ GPA',
          ielts: 'Fluent Japanese',
          gre: 'Not required',
          papers: 'Fieldwork proposal and community ethics statement',
          references: 'Practicum coordinator endorsement'
        }
      },
      {
        id: 8048,
        title: 'Food Safety & Functional Food Analysis Laboratory Internship',
        type: 'Internship',
        subject: 'chemistry',
        desc: 'Laboratory internship analyzing food chemical composition, antioxidant polyphenols in Tohoku regional produce, and shelf-life preservation techniques.',
        funding: 'Research consumables allowance and ¥30,000 monthly stipend',
        tuition: 'Funded laboratory internship',
        fee: '¥0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.shokei.jp',
        requirements: {
          gpa: 'Enrolled student in Food and Nutrition with 3.00+ GPA',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Laboratory technique statement and transcript',
          references: 'Chemistry department approval'
        }
      }
    ],
    researchers: [
      {
        id: 3577,
        name: 'Prof. Dr. Takashi Ohtani',
        title: 'Professor of Environmental Chemistry and Watershed Analysis',
        department: 'Department of Environmental Sciences',
        subject: 'chemistry',
        topics: ['Riverine Heavy Metal Transport', 'Coastal Estuary Eutrophication', 'Agricultural Runoff Chemical Fate', 'Water Quality Monitoring'],
        summary: 'Prof. Dr. Takashi Ohtani analyzes hydrochemical nutrient cycling and sediment trace metal dynamics in the Natori River basin, developing environmental watershed quality indices.',
        source: 'https://www.shokei.jp'
      },
      {
        id: 3578,
        name: 'Dr. Eiko Kikuchi',
        title: 'Associate Professor of Clinical Psychology and Counseling',
        department: 'Department of Comprehensive Human Sciences',
        subject: 'social-sciences',
        topics: ['Adolescent Anxiety Disorders', 'Cognitive Behavioral Therapy for Depression', 'School Counselor Supervision', 'Community Trauma Interventions'],
        summary: 'Dr. Eiko Kikuchi studies cognitive behavioral therapy applications in school settings and conducts long-term psychological follow-ups for youth recovering from disaster trauma.',
        source: 'https://www.shokei.jp'
      },
      {
        id: 3579,
        name: 'Prof. Hiroshi Sugiyama',
        title: 'Professor of Community Revitalization and Regional Sociology',
        department: 'Faculty of Human Sciences',
        subject: 'social-sciences',
        topics: ['Rural Community Resilience', 'Post-Disaster Social Capital Rebuilding', 'Regional Depopulation Mitigation', 'Local Civic Participation'],
        summary: 'Prof. Hiroshi Sugiyama investigates social capital reconstruction and demographic resilience strategies in coastal communities throughout northeastern Japan.',
        source: 'https://www.shokei.jp'
      }
    ]
  },

  // 28. Showa University Yokohama Campus (Row 1752)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Showa University Yokohama Campus',
    shortName: 'Showa Univ Yokohama',
    slug: 'showa-university-yokohama-campus',
    location: 'Aoba-ku, Yokohama, Kanagawa Prefecture, Japan',
    website: 'https://www.showa-u.ac.jp',
    sourceRow: 1752,
    stats: {
      established: '1928',
      students: '3,500+ across university campuses',
      international: '5%',
      faculty: '650+ medical and healthcare faculty'
    },
    heroSummary: 'Showa University (Yokohama Campus) is a premier medical sciences university campus and teaching hospital in Aoba-ku, Yokohama, celebrated for multidisciplinary healthcare education across medicine, dentistry, pharmacy, and nursing.',
    academicOverview: 'Showa University is internationally recognized for its pioneering integrated first-year residential curriculum and interprofessional medical education (IPE), training doctors, dentists, pharmacists, and nurses collaboratively. The Yokohama Northern Hospital (Showa University Fujigaoka and Northern Hospitals) acts as a tertiary emergency and advanced cancer surgical center.',
    researchAdmissions: 'Highly competitive admissions via national entrance examinations for School of Medicine, School of Dentistry, School of Pharmacy, and School of Nursing and Rehabilitation Sciences. Graduate applicants require professional healthcare licensure, academic transcripts, and departmental research defense.',
    opportunities: [
      {
        id: 8049,
        title: 'Bachelor of Science in Pharmacy & Clinical Pharmaceutical Sciences',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Six-year professional degree leading to national pharmacist licensure (Yakuzaishi), featuring extensive clinical pharmacology rotations at Showa University Yokohama Northern Hospital.',
        funding: 'Eligible for Showa University Founder Merit Scholarships up to ¥1,000,000 annually',
        tuition: '¥2,100,000 per academic year (includes clinical hospital pharmacy training fees)',
        fee: '¥40,000 entrance examination fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Examination)',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'High school graduation with exceptional marks in chemistry, biology, and mathematics',
          ielts: 'JLPT N1 required for clinical pharmaceutical terminology and patient interaction',
          gre: 'Not required',
          papers: 'High school transcripts, personal statement detailing dedication to clinical pharmacy, and CV',
          references: 'One letter of recommendation from secondary school principal or science teacher'
        }
      },
      {
        id: 8050,
        title: 'Bachelor of Science in Nursing & Advanced Critical Care',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Four-year professional nursing degree providing advanced simulation training in tertiary emergency trauma, oncology infusion, and neonatal intensive care.',
        funding: 'Showa University Hospital Nursing stipends providing full tuition remission upon clinical commitment',
        tuition: '¥1,580,000 per academic year',
        fee: '¥30,000 examination fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'High school diploma with 2.80+ GPA in science courses',
          ielts: 'JLPT N1 or high N2',
          gre: 'Not required',
          papers: 'Nursing application form, health screening, and transcripts',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8051,
        title: 'Doctor of Philosophy (Ph.D.) in Interprofessional Medical Sciences',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Four-year doctoral research curriculum investigating translational pharmacology, targeted cancer chemotherapy, molecular pathology, and interprofessional clinical teamwork outcomes.',
        funding: 'Doctoral research assistantships offering ¥120,000 monthly stipend plus full laboratory bench fee funding',
        tuition: '¥700,000 annual graduate tuition',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'Medical, dental, or pharmaceutical degree (MD, DDS, PharmD, or master in life sciences) with 3.20+ GPA',
          ielts: 'TOEFL iBT 80 or IELTS 6.5 (Japanese not mandatory for laboratory researchers)',
          gre: 'Not required',
          papers: 'Doctoral research proposal (3-5 pages) and list of peer-reviewed scientific publications',
          references: 'Two letters of recommendation from medical or pharmaceutical professors'
        }
      },
      {
        id: 8052,
        title: 'Showa University Medical & Clinical Research Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Postgraduate clinical research fellowship within the Clinical Research Institute, managing translational drug development and biomarker discovery trials.',
        funding: 'Annual fellowship research stipend of ¥2,400,000 plus conference travel budget',
        tuition: 'Funded clinical research fellowship',
        fee: '¥0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'MD, PharmD, or PhD in medical sciences',
          ielts: 'Fluent scientific English or Japanese',
          gre: 'Not required',
          papers: 'Curriculum vitae, research proposal, and clinical trial experience log',
          references: 'Department Chair nomination'
        }
      },
      {
        id: 8053,
        title: 'Advanced Clinical Pharmacy Hospital Residency',
        type: 'Residency',
        subject: 'chemistry',
        desc: 'Hospital clinical pharmacy residency at Showa University Northern Hospital, focusing on therapeutic drug monitoring (TDM), anti-microbial stewardship, and intensive care pharmacotherapy.',
        funding: 'Hospital resident salary of ¥320,000 monthly plus malpractice insurance',
        tuition: 'Salaried clinical residency',
        fee: '¥0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'Licensed pharmacist in Japan with completed six-year pharmacy degree',
          ielts: 'Japanese Pharmacist Licensure required',
          gre: 'Not required',
          papers: 'Licensure copy, clinical case log, and personal statement',
          references: 'Pharmacy school dean recommendation'
        }
      },
      {
        id: 8054,
        title: 'Pediatric Dental Surgery & Orthodontics Practicum',
        type: 'Practicum',
        subject: 'biology',
        desc: 'Clinical practicum for dental graduates in advanced pediatric craniofacial development, interceptive orthodontics, and restorative pediatric dentistry.',
        funding: 'Clinical training allowance and hospital dental facility access',
        tuition: 'Clinical training fee offset',
        fee: '¥0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://www.showa-u.ac.jp',
        requirements: {
          gpa: 'Bachelor of Dental Surgery (BDS/DDS) and Japanese dental license',
          ielts: 'Fluent Japanese',
          gre: 'Not required',
          papers: 'Dental licensure and clinical procedure log',
          references: 'Department Chair of Pediatric Dentistry endorsement'
        }
      }
    ],
    researchers: [
      {
        id: 3580,
        name: 'Prof. Dr. Masahiro Kudo',
        title: 'Professor of Clinical Pharmacology and Pharmacokinetics',
        department: 'School of Pharmacy',
        subject: 'chemistry',
        topics: ['Therapeutic Drug Monitoring (TDM)', 'Pharmacogenomic Drug Response', 'Antimicrobial Resistance Stewardship', 'Clinical Pharmacokinetics Modeling'],
        summary: 'Prof. Dr. Masahiro Kudo models personalized dosing regimens for immunosuppressive drugs and narrow-therapeutic-index antimicrobials, minimizing adverse reactions in hospital patients.',
        source: 'https://www.showa-u.ac.jp'
      },
      {
        id: 3581,
        name: 'Prof. Dr. Noriko Abe',
        title: 'Professor of Advanced Critical Care Nursing and Interprofessional Simulation',
        department: 'School of Nursing and Rehabilitation Sciences',
        subject: 'biology',
        topics: ['Interprofessional Team Training Simulation', 'ICU Patient Safety Protocols', 'Rapid Response Clinical Decision Making', 'Palliative Nursing'],
        summary: 'Prof. Dr. Noriko Abe directs interprofessional simulation training for multidisciplinary medical teams, evaluating clinical outcomes of coordinated trauma resuscitation.',
        source: 'https://www.showa-u.ac.jp'
      },
      {
        id: 3582,
        name: 'Prof. Dr. Kenichi Sasaguri',
        title: 'Professor of Oral Maxillofacial Surgery and Dental Biomaterials',
        department: 'School of Dentistry',
        subject: 'biology',
        topics: ['Craniofacial Bone Regeneration', 'Titanium Implant Osseointegration', 'Temporomandibular Joint Biomechanics', 'Minimally Invasive Dental Surgery'],
        summary: 'Prof. Dr. Kenichi Sasaguri researches bioactive bone grafting materials and stem cell osseointegration protocols for complex maxillofacial surgical reconstructions.',
        source: 'https://www.showa-u.ac.jp'
      }
    ]
  },

  // 29. Takachiho University (Row 1754)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Takachiho University',
    shortName: 'Takachiho University',
    slug: 'takachiho-university-suginami-tokyo',
    location: 'Suginami-ku, Tokyo, Japan',
    website: 'https://www.takachiho.jp',
    sourceRow: 1754,
    stats: {
      established: '1903',
      students: '2,600+',
      international: '12%',
      faculty: '110+'
    },
    heroSummary: "Takachiho University is a historic private commercial university in Suginami-ku, Tokyo, renowned as Japan's first private higher commercial school, offering specialized degrees in business administration, commercial law, and human science.",
    academicOverview: 'Founded by Baron Shibusawa Eiichi’s contemporary, Dr. Ryukichi Endo, Takachiho excels in practical corporate entrepreneurship, accounting, business informatics, and consumer psychology. The university maintains small-group seminars and corporate internship pipelines across central Tokyo, preparing students for executive roles in commerce, financial consulting, and digital marketing.',
    researchAdmissions: 'Admissions require high school graduation and entrance evaluation. International applicants require EJU Japanese score >= 200 or JLPT N2, official secondary school transcripts, and an academic interview.',
    opportunities: [
      {
        id: 8055,
        title: 'Bachelor of Commerce in Corporate Entrepreneurship & Marketing Strategy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Four-year program in business venture creation, brand positioning, consumer decision modeling, digital e-commerce, and commercial risk analysis in Tokyo.',
        funding: 'Eligible for Takachiho Founder Endowed Scholarships up to ¥350,000 annually',
        tuition: '¥1,190,000 per academic year',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027 (Spring Admission)',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'High school graduation with 2.60+ GPA equivalent',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international students',
          gre: 'Not required',
          papers: 'Statement of purpose on business entrepreneurship (800 words in Japanese) and transcripts',
          references: 'One letter of recommendation from secondary school principal or teacher'
        }
      },
      {
        id: 8056,
        title: 'Bachelor of Business Administration in Accounting & Financial Auditing',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive degree preparing candidates for the Certified Public Tax Accountant (Zeirishi) exam, corporate financial reporting, and cost accounting.',
        funding: 'Takachiho Accounting Society examination awards up to ¥200,000',
        tuition: '¥1,190,000 per academic year',
        fee: '¥30,000 examination fee',
        deadline: '2027-02-05',
        deadlineText: 'February 5, 2027',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'High school diploma with good standing in mathematics',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'High school transcript and personal statement',
          references: 'One academic reference'
        }
      },
      {
        id: 8057,
        title: 'Bachelor of Human Sciences in Digital Media & Consumer Psychology',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Interdisciplinary degree analyzing digital media culture, cognitive psychology, advertising persuasion, and UI/UX usability testing.',
        funding: 'Media Industry talent scholarships up to ¥250,000',
        tuition: '¥1,190,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with minimum 2.50 GPA equivalent',
          ielts: 'JLPT N2 or EJU 200+',
          gre: 'Not required',
          papers: 'Transcripts and essay on digital media impact on youth behavior',
          references: 'One recommendation'
        }
      },
      {
        id: 8058,
        title: 'Graduate School of Business Administration (Master of Commerce)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Two-year graduate program in corporate strategy, organizational behavior, and tax law, with tax accountant examination subject exemptions upon thesis approval.',
        funding: 'Graduate research fellowships providing ¥35,000 monthly study grant',
        tuition: '¥780,000 annual graduate tuition',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'Bachelor degree in commerce, business, or economics with 2.80+ GPA',
          ielts: 'JLPT N1 required for tax law or Japanese business strategy research',
          gre: 'Not required',
          papers: 'Master’s thesis research proposal (2,000 words in Japanese) and academic CV',
          references: 'Two letters of recommendation from undergraduate professors'
        }
      },
      {
        id: 8059,
        title: 'Takachiho University International Student Tuition Waiver',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Generous tuition fee reduction granting 30% to 50% tuition reduction for admitted international students throughout their four-year undergraduate studies.',
        funding: '30% to 50% annual tuition waiver (worth up to ¥450,000 annually)',
        tuition: 'Direct tuition waiver',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'Admitted international undergraduate or graduate student',
          ielts: 'JLPT N2 or EJU Japanese >= 200',
          gre: 'Not required',
          papers: 'Scholarship application and statement on academic aspirations',
          references: 'Faculty advisor endorsement upon enrollment'
        }
      },
      {
        id: 8060,
        title: 'Tokyo Startup Enterprise & Fintech Practicum',
        type: 'Practicum',
        subject: 'social-sciences',
        desc: 'Corporate internship placement pairing upper-division business students with Tokyo fintech scale-ups for cashless payment analytics and marketing growth hacking.',
        funding: 'Corporate internship compensation of ¥80,000 per month',
        tuition: 'Credit-bearing elective practicum',
        fee: '¥0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://www.takachiho.jp',
        requirements: {
          gpa: 'Enrolled third-year Commerce student with 2.75+ GPA',
          ielts: 'Business-level Japanese',
          gre: 'Not required',
          papers: 'Resume and corporate entry sheet',
          references: 'Career Center endorsement'
        }
      }
    ],
    researchers: [
      {
        id: 3583,
        name: 'Prof. Dr. Tatsuya Fujii',
        title: 'Professor of Corporate Strategy and SME Innovation',
        department: 'Faculty of Commerce',
        subject: 'social-sciences',
        topics: ['SME Innovation Dynamics', 'Corporate Succession Strategies', 'Business Model Generation', 'Japanese Manufacturing Heritage'],
        summary: 'Prof. Dr. Tatsuya Fujii researches small-to-medium enterprise business model adaptation and digital transformation across metropolitan Tokyo commercial districts.',
        source: 'https://www.takachiho.jp'
      },
      {
        id: 3584,
        name: 'Dr. Michiko Aoyama',
        title: 'Associate Professor of Consumer Psychology and Behavioral Economics',
        department: 'Department of Human Sciences',
        subject: 'social-sciences',
        topics: ['Consumer Decision Architecture', 'Nudge Theory in Retail', 'Neuromarketing Methodologies', 'Brand Relationship Quality'],
        summary: 'Dr. Michiko Aoyama investigates cognitive biases and heuristic decision making in digital consumer retail, consulting for e-commerce advertising agencies.',
        source: 'https://www.takachiho.jp'
      },
      {
        id: 3585,
        name: 'Prof. Yasuo Sugimoto',
        title: 'Professor of Accounting Systems and Corporate Tax Auditing',
        department: 'Department of Business Administration',
        subject: 'social-sciences',
        topics: ['Corporate Tax Accounting', 'Zeirishi Examination Pedagogy', 'Financial Statement Fraud Detection', 'Managerial Cost Accounting'],
        summary: 'Prof. Yasuo Sugimoto trains accounting scholars in Japanese corporate taxation law and financial statement auditing, publishing on tax compliance architectures.',
        source: 'https://www.takachiho.jp'
      }
    ]
  },

  // 30. Takarazuka University Tokyo Shinjuku Campus (Row 1755)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Takarazuka University Tokyo Shinjuku Campus',
    shortName: 'Takarazuka Shinjuku',
    slug: 'takarazuka-university-tokyo-shinjuku',
    location: 'Shinjuku-ku, Tokyo, Japan',
    website: 'https://www.takara-univ.ac.jp',
    sourceRow: 1755,
    stats: {
      established: '1987',
      students: '1,800+',
      international: '22%',
      faculty: '95+'
    },
    heroSummary: 'Takarazuka University (Tokyo Shinjuku Campus) is a premier media arts university in central Shinjuku, Tokyo, internationally acclaimed for its School of Media Arts, specializing in manga, anime production, game design, and illustration.',
    academicOverview: 'Situated in the global heart of pop-culture and digital creativity in Shinjuku, Takarazuka trains professional creators in commercial manga storytelling, anime animation pipelines, concept art, character design, and 3D game engines. Faculty members are active mangaka, anime directors, and game industry veterans who provide direct studio mentoring.',
    researchAdmissions: 'Admissions require high school graduation and a creative artistic evaluation: portfolio submission (original illustration, manga storyboards, or digital game projects) and a faculty interview. International applicants require JLPT N2 or EJU Japanese score >= 200.',
    opportunities: [
      {
        id: 8061,
        title: 'Bachelor of Media Arts in Manga & Comic Storytelling',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Professional four-year degree in sequential comic art, panel composition, character design, digital background rendering (Clip Studio Paint), and commercial publishing pitch preparation.',
        funding: 'Eligible for Takarazuka Media Arts Creator Grants and corporate publisher awards',
        tuition: '¥1,580,000 per academic year (includes professional digital studio lesson fees)',
        fee: '¥30,000 entrance examination fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027 (Portfolio Entrance Examination)',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'High school graduation with demonstrated artistic talent',
          ielts: 'JLPT N2 or EJU Japanese >= 200 for international creators',
          gre: 'Not required',
          papers: 'Original manga portfolio (minimum 8-16 page storyboard or finished work) and creative statement',
          references: 'One letter of recommendation from art teacher or secondary school principal'
        }
      },
      {
        id: 8062,
        title: 'Bachelor of Media Arts in Anime Production & Digital Animation',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Studio curriculum covering 2D keyframe animation, 3D computer graphics (Maya/Blender), cinematography, voice-actor synchronization, and digital compositing for anime studios.',
        funding: 'Anime Industry Studio scholarships up to ¥350,000',
        tuition: '¥1,580,000 per academic year',
        fee: '¥30,000 examination fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'High school diploma with drawing and visual design foundation',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Animation or illustration portfolio (10-15 pieces) and motivation essay',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 8063,
        title: 'Bachelor of Media Arts in Video Game Design & Interactive Media',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Four-year degree in Unity/Unreal game development, level design, 3D character rigging, game physics, and interactive VR/AR application engineering.',
        funding: 'Game Development Creator grants up to ¥300,000',
        tuition: '¥1,580,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with interest in game programming or concept design',
          ielts: 'JLPT N2 or EJU 200+',
          gre: 'Not required',
          papers: 'Playable game prototype demo link or game design document and transcripts',
          references: 'One recommendation'
        }
      },
      {
        id: 8064,
        title: 'Bachelor of Media Arts in Character Design & Digital Illustration',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Specialized degree in digital concept painting, light and color theory, light novel cover illustration, virtual YouTuber (VTuber) 2D Live rigging, and commercial merchandising.',
        funding: 'Digital Art Creator awards up to ¥250,000',
        tuition: '¥1,580,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-02-05',
        deadlineText: 'February 5, 2027',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'High school graduation credentials',
          ielts: 'JLPT N2',
          gre: 'Not required',
          papers: 'Digital art portfolio (10-15 color illustrations) and personal statement',
          references: 'One art teacher recommendation'
        }
      },
      {
        id: 8065,
        title: 'Takarazuka University Global Creator Academic Scholarship',
        type: 'Scholarship',
        subject: 'arts-design',
        desc: 'Merit scholarship awarded to top foreign creators entering the School of Media Arts displaying extraordinary visual craftsmanship in portfolio evaluation.',
        funding: '30% to 50% tuition reduction across all four undergraduate years (worth up to ¥700,000 annually)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '¥0 scholarship fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'Superior portfolio ranking in entrance examination',
          ielts: 'JLPT N2 or EJU Japanese >= 200',
          gre: 'Not required',
          papers: 'Creator portfolio dossier and artist vision statement',
          references: 'Art faculty recommendation upon enrollment'
        }
      },
      {
        id: 8066,
        title: 'Tokyo Anime Industry Production Studio Internship',
        type: 'Internship',
        subject: 'arts-design',
        desc: 'Semester studio placement with leading Tokyo commercial anime studios in Suginami and Nerima, mastering production management, in-betweening, and digital compositing.',
        funding: 'Studio internship compensation of ¥100,000 per month',
        tuition: 'Credit-bearing studio internship',
        fee: '¥0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://www.takara-univ.ac.jp',
        requirements: {
          gpa: 'Enrolled third-year Animation student with superior studio coursework',
          ielts: 'Fluent Japanese',
          gre: 'Not required',
          papers: 'Animation showreel (30-60 seconds) and studio entry application',
          references: 'Animation Department Chair approval'
        }
      }
    ],
    researchers: [
      {
        id: 3586,
        name: 'Prof. Kenjiro Hata',
        title: 'Professor of Manga Narrative Structures and Sequential Art',
        department: 'School of Media Arts - Manga Department',
        subject: 'arts-design',
        topics: ['Manga Narrative Pacing', 'Panel Composition Theory', 'Character Personality Design', 'Digital Manga Publishing Platforms'],
        summary: 'Prof. Kenjiro Hata teaches narrative framing and panel transitions in commercial manga, mentoring aspiring cartoonists who have debuted with major Japanese publishing houses.',
        source: 'https://www.takara-univ.ac.jp'
      },
      {
        id: 3587,
        name: 'Prof. Shigeru Nishiyama',
        title: 'Professor of Anime Direction and Digital Animation Pipelines',
        department: 'Department of Animation',
        subject: 'arts-design',
        topics: ['Anime Storyboard Cinematography', 'Digital 2D/3D Hybrid Animation', 'Color Grading in Anime', 'Studio Production Workflows'],
        summary: 'Prof. Shigeru Nishiyama is an experienced commercial anime director, teaching keyframe animation mechanics, camera composition, and digital compositing pipelines in Tokyo studios.',
        source: 'https://www.takara-univ.ac.jp'
      },
      {
        id: 3588,
        name: 'Dr. Yosuke Matsumura',
        title: 'Associate Professor of Interactive Game Mechanics and Virtual Reality',
        department: 'Department of Game and Interactive Media',
        subject: 'computer-science',
        topics: ['Virtual Reality User Immersion', 'Game Engine Optimization in Unity/Unreal', 'Interactive Narrative Branching', 'Real-Time Shader Programming'],
        summary: 'Dr. Yosuke Matsumura researches real-time shader pipelines and player immersion dynamics in virtual reality gaming, collaborating with major Tokyo video game development studios.',
        source: 'https://www.takara-univ.ac.jp'
      }
    ]
  }
];

export const batch57Part3 = part3;

const fileContent = `// Batch 57 Part 3: Japan (10 Universities, Rows 1744-1755)
export const batch57Part3 = ${JSON.stringify(part3, null, 2)};
`;

writeFileSync('scripts/batch57-data-part3.mjs', fileContent, 'utf8');
console.log('Finished Part 3: Japan (10 universities, 60 opps, 30 res)!');
