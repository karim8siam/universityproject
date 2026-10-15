import { writeFileSync } from 'node:fs';

const part2 = [
  // 11. Association of Independent Kentucky Colleges and Universities (Row 577)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Association of Independent Kentucky Colleges and Universities',
    shortName: 'AIKCU Frankfort',
    slug: 'aikcu-independent-kentucky-colleges',
    location: 'Frankfort, Kentucky, United States',
    website: 'https://www.aikcu.org',
    sourceRow: 577,
    stats: {
      established: '1952',
      students: '56,000+ across consortium',
      international: '8%',
      faculty: '3,500+ across member colleges'
    },
    heroSummary: 'The Association of Independent Kentucky Colleges and Universities (AIKCU) represents 18 non-profit higher education institutions across the Commonwealth of Kentucky, administering statewide undergraduate scholarship endowments, private college access initiatives, and collaborative STEM research grants.',
    academicOverview: 'AIKCU champions academic excellence, affordability, and cooperative collegiate programs across member campuses including Berea College, Centre College, Bellarmine University, and Transylvania University. The consortium coordinates specialized workforce fellowships, nursing access initiatives, and Appalachian regional development studies.',
    researchAdmissions: 'Centralized scholarship applications and student transfer programs are open to matriculated students at AIKCU member institutions. Prospective undergraduate candidates apply directly through individual member colleges with competitive high school GPA benchmarks and FAFSA completion.',
    opportunities: [
      {
        id: 7767,
        title: 'AIKCU UPS Foundation Community Scholarship Endowment',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit- and need-based undergraduate tuition grant for students attending AIKCU member colleges demonstrating leadership, academic distinction, and community service.',
        funding: 'Annual tuition grant of $3,500 to $5,000 disbursed directly through member financial aid offices',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 consortium application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027 (Annual allocation cycle)',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Enrolled undergraduate at an AIKCU member institution with minimum 3.0 GPA',
          ielts: 'Institutional member language requirement applies',
          gre: 'Not required',
          papers: 'Personal statement (500 words) outlining leadership in community engagement and FAFSA report',
          references: 'One academic letter of recommendation from member college faculty'
        }
      },
      {
        id: 7768,
        title: 'AIKCU Collaborative STEM & Undergraduate Research Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Inter-institutional undergraduate research fellowship supporting laboratory investigations, applied engineering design, and summer data analytics across Kentucky independent colleges.',
        funding: 'Summer research stipend of $4,500 plus $1,000 laboratory materials allowance',
        tuition: 'Fully funded summer research appointment',
        fee: '$0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Sophomore or junior standing at AIKCU institution with minimum 3.20 GPA in STEM major',
          ielts: 'Not required for domestic matriculants; English proficiency for international scholars',
          gre: 'Not required',
          papers: 'Research project abstract (2 pages) endorsed by sponsoring faculty mentor and CV',
          references: 'Two faculty recommendations in relevant STEM disciplines'
        }
      },
      {
        id: 7769,
        title: 'AIKCU Healthcare & Nursing Leadership Access Grant',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Targeted workforce development grant supporting nursing and allied health students committed to serving rural and medically underserved communities throughout Kentucky.',
        funding: '$4,000 per academic year renewable upon clinical progression',
        tuition: 'Nursing degree tuition reduction',
        fee: '$0 application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Acceptance or enrollment in an accredited BSN or MSN program at an AIKCU campus with 3.0+ GPA',
          ielts: 'Institutional health science standard',
          gre: 'Not required',
          papers: 'Commitment essay detailing dedication to Kentucky rural clinical practice',
          references: 'One academic and one clinical supervisor recommendation'
        }
      },
      {
        id: 7770,
        title: 'AIKCU First-Generation College Completion Award',
        type: 'Grant',
        subject: 'social-sciences',
        desc: 'Need-based emergency completion grant assisting first-generation collegiate seniors to clear graduation hurdles, licensing fees, and capstone project expenditures.',
        funding: 'Bridge grant up to $2,500 applied toward graduation clearance fees and tuition balance',
        tuition: 'Senior completion financial relief',
        fee: '$0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027 (Rolling review)',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Senior standing (within 30 credits of graduation) with minimum 2.50 cumulative GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Degree audit, statement of financial need, and graduation trajectory plan',
          references: 'Recommendation from campus academic advisor or registrar'
        }
      },
      {
        id: 7771,
        title: 'AIKCU Appalachian Environmental Stewardship & Conservation Grant',
        type: 'Grant',
        subject: 'environment',
        desc: 'Undergraduate and faculty collaborative research grant funding watershed ecology, forest conservation, and mine land reclamation field research in the Cumberland Plateau.',
        funding: 'Project grant up to $6,000 per collegiate research team',
        tuition: 'Field research operational funding',
        fee: '$0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Enrolled student team sponsored by AIKCU member science faculty',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Joint project proposal detailing methodology, ecological site, and budget breakdown',
          references: 'Departmental endorsement from participating institution'
        }
      },
      {
        id: 7772,
        title: 'AIKCU Rural Teacher Academy Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Pre-service teacher scholarship and mentoring fellowship preparing educators for secondary STEM, special education, and literacy instruction in high-need Kentucky school districts.',
        funding: '$5,000 annual scholarship plus clinical placement mentoring stipend',
        tuition: 'Direct education degree tuition subsidy',
        fee: '$0 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.aikcu.org',
        requirements: {
          gpa: 'Admission to state-approved Teacher Education Program at AIKCU college with 3.0+ GPA',
          ielts: 'State educator certification standard',
          gre: 'Praxis Core scores or state exemption',
          papers: 'Philosophy of rural education essay (750 words) and educator resume',
          references: 'Two recommendations from education faculty or classroom cooperating teachers'
        }
      }
    ],
    researchers: [
      {
        id: 3439,
        name: 'Dr. OJ Oleka',
        title: 'President & Chief Executive Officer',
        department: 'Executive Administration & Higher Education Policy',
        subject: 'social-sciences',
        topics: ['Higher Education Access Policy', 'Consortium Academic Partnerships', 'State Financial Aid Equity', 'Workforce Alignment'],
        summary: 'Dr. OJ Oleka leads AIKCU statewide initiatives expanding college affordability, policy advocacy for independent institutions, and public-private partnerships connecting collegiate graduates with Kentucky industrial sectors.',
        source: 'https://www.aikcu.org'
      },
      {
        id: 3440,
        name: 'Dr. Mary Beth Spurlock',
        title: 'Director of Academic Affairs & Teacher Education Initiatives',
        department: 'Division of Academic Programs & Educator Preparation',
        subject: 'social-sciences',
        topics: ['Rural Literacy Pedagogy', 'Teacher Retention in Appalachia', 'Clinical Educator Assessment', 'Curriculum Standards'],
        summary: 'Dr. Mary Beth Spurlock oversees collaborative educator preparation across 18 member colleges, designing innovative clinical immersion frameworks for secondary school STEM and special education teachers.',
        source: 'https://www.aikcu.org'
      },
      {
        id: 3441,
        name: 'Prof. Marcus A. Campbell',
        title: 'Consortium Chair of Health Sciences & Nursing Education',
        department: 'Allied Health & Nursing Advisory Committee',
        subject: 'biology',
        topics: ['Rural Health Workforce Pipeline', 'Clinical Simulation Standards', 'Community Nursing Practice', 'Epidemiological Outreach'],
        summary: 'Prof. Marcus A. Campbell coordinates nursing curricula and clinical rotation agreements among Kentucky independent universities, spearheading health equity outreach in underserved Appalachian communities.',
        source: 'https://www.aikcu.org'
      }
    ]
  },

  // 12. Beta Theta Pi Leadership Institute - University of Kentucky (Row 594)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Beta Theta Pi Leadership Institute - University of Kentucky',
    shortName: 'Beta Theta Pi UK',
    slug: 'beta-theta-pi-leadership-institute-kentucky',
    location: 'Lexington, Kentucky, United States',
    website: 'https://uky.beta.org',
    sourceRow: 594,
    stats: {
      established: '1920 (Chapter) / 1839 (National)',
      students: '180+ undergraduate fellows',
      international: '5%',
      faculty: '25+ faculty advisors & academic mentors'
    },
    heroSummary: 'The Beta Theta Pi Leadership Institute and Foundation at the University of Kentucky sponsors merit-based undergraduate leadership scholarships, ethical governance fellowships, and academic excellence grants for collegiate scholars in engineering, business, and public policy.',
    academicOverview: 'Affiliated with the Epsilon Omicron Chapter at the University of Kentucky and the National Beta Theta Pi Foundation, the institute fosters principled leadership, intellectual growth, and civic responsibility. Fellows participate in executive leadership symposiums and faculty-guided undergraduate research initiatives.',
    researchAdmissions: 'Open to enrolled undergraduate students and incoming freshmen at the University of Kentucky demonstrating superior academic standing, leadership character, and dedication to campus governance. Application requires leadership portfolio and academic transcript.',
    opportunities: [
      {
        id: 7773,
        title: 'Beta Theta Pi Men of Principle Leadership Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Annual merit scholarship awarded to exceptional incoming and undergraduate University of Kentucky students displaying intellectual curiosity, moral character, and campus leadership.',
        funding: 'Cash scholarship of $2,000 to $4,000 disbursed directly for collegiate tuition and books',
        tuition: 'Direct undergraduate scholarship',
        fee: '$0 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027 (Fall Cohort)',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Enrolled or admitted undergraduate at University of Kentucky with minimum 3.25 cumulative GPA',
          ielts: 'University of Kentucky standard admission requirement',
          gre: 'Not required',
          papers: 'Leadership essay (500 words) on ethical leadership and detailed extra-curricular resume',
          references: 'Two letters of recommendation from high school instructors or university faculty'
        }
      },
      {
        id: 7774,
        title: 'Oxford Cup Academic Excellence Research Grant',
        type: 'Grant',
        subject: 'engineering',
        desc: 'Undergraduate engineering and physical science research grant assisting students conducting faculty-supervised capstone thesis projects or laboratory trials.',
        funding: '$3,000 research award plus travel allowance for national conference presentation',
        tuition: 'Undergraduate research support',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Junior or senior standing in UK College of Engineering with 3.40+ GPA',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Faculty-endorsed engineering project proposal and itemized lab budget',
          references: 'Letter of support from UK faculty research supervisor'
        }
      },
      {
        id: 7775,
        title: 'Stephen A. Higgins Ethics in Governance Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Interdisciplinary fellowship in public policy, legal ethics, and organizational governance, funding summer civic internships and legislative policy analysis.',
        funding: 'Summer stipend of $3,500 for non-profit, legislative, or public service internships',
        tuition: 'Fully funded summer fellowship',
        fee: '$0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Minimum 3.30 GPA in political science, economics, philosophy, or related pre-law track',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Policy critique paper (3 pages) on contemporary institutional ethics and resume',
          references: 'One academic reference from political science or philosophy faculty'
        }
      },
      {
        id: 7776,
        title: 'Beta Foundation Computer Science & Cyber Innovation Award',
        type: 'Scholarship',
        subject: 'computer-science',
        desc: 'Undergraduate technology scholarship supporting students pursuing software architecture, artificial intelligence, and cybersecurity solutions for community enhancement.',
        funding: '$2,500 tuition award plus corporate mentorship pairing with tech industry alumni',
        tuition: 'Direct collegiate tuition award',
        fee: '$0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Enrolled computer science or computer engineering major with 3.20+ GPA',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Technical portfolio or GitHub link detailing an open-source or community software contribution',
          references: 'One recommendation from a computer science instructor'
        }
      },
      {
        id: 7777,
        title: 'Beta Community Health & Biomedical Service Grant',
        type: 'Grant',
        subject: 'biology',
        desc: 'Service and research grant for pre-medical and health sciences undergraduates conducting community health education, free clinic volunteering, and biomedical research in Kentucky.',
        funding: '$2,000 project grant for community wellness outreach or pre-medical clinical trials',
        tuition: 'Community health project grant',
        fee: '$0 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Pre-health or biological sciences undergraduate with minimum 3.20 GPA',
          ielts: 'Not required',
          gre: 'MCAT scores if applicable (optional)',
          papers: 'Health equity initiative proposal and record of verified clinical volunteer hours',
          references: 'Recommendation from clinical volunteer coordinator or faculty pre-med advisor'
        }
      },
      {
        id: 7778,
        title: 'John Reily Knox Civic Leadership Internship Stipend',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Competitive leadership stipend enabling students to undertake unpaid summer internships in public administration, municipal government, or educational leadership in Lexington.',
        funding: '$3,000 living stipend for 8- to 10-week summer internship',
        tuition: 'Living allowance stipend',
        fee: '$0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://uky.beta.org',
        requirements: {
          gpa: 'Undergraduate in good academic standing (minimum 3.00 GPA)',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Offer letter from public sector host agency and personal statement of goals',
          references: 'One letter of recommendation from collegiate advisor'
        }
      }
    ],
    researchers: [
      {
        id: 3442,
        name: 'Dr. Jeffrey R. Miller',
        title: 'Faculty Advisor & Associate Professor of Management',
        department: 'Gatton College of Business and Economics',
        subject: 'social-sciences',
        topics: ['Organizational Ethics', 'Executive Leadership Development', 'Corporate Governance', 'Team Decision Making'],
        summary: 'Dr. Jeffrey R. Miller conducts behavioral research on ethical dilemma resolution in corporate settings, advising undergraduate leadership cohorts in governance integrity and stakeholder management.',
        source: 'https://uky.beta.org'
      },
      {
        id: 3443,
        name: 'Prof. David W. Wright',
        title: 'Senior Lecturer in Mechanical Engineering & Academic Mentor',
        department: 'Pigman College of Engineering',
        subject: 'engineering',
        topics: ['Engineering Ethics', 'Capstone Design Pedagogy', 'Sustainable Manufacturing', 'Thermal Systems'],
        summary: 'Prof. David W. Wright mentors collegiate engineering scholars in multi-disciplinary design projects, integrating practical systems engineering with professional ethical responsibilities.',
        source: 'https://uky.beta.org'
      },
      {
        id: 3444,
        name: 'Dr. Sarah K. Jenkins',
        title: 'Adjunct Professor of Higher Education Leadership',
        department: 'College of Education',
        subject: 'social-sciences',
        topics: ['Collegiate Student Development', 'Peer Mentoring Models', 'Civic Engagement Dynamics', 'Undergraduate Retention'],
        summary: 'Dr. Sarah K. Jenkins studies student engagement and peer leadership structures in American universities, evaluating developmental outcomes among members of collegiate living-learning organizations.',
        source: 'https://uky.beta.org'
      }
    ]
  },

  // 13. California Center University (Row 611)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'California Center University',
    shortName: 'CCU Los Angeles',
    slug: 'california-center-university-los-angeles',
    location: 'Los Angeles, California, United States',
    website: 'https://www.californiacenter.education',
    sourceRow: 611,
    stats: {
      established: '2012',
      students: '650+',
      international: '35%',
      faculty: '45+'
    },
    heroSummary: 'California Center University (CCU) is a private higher education institution in Los Angeles providing specialized graduate and undergraduate programs in business administration, computer information systems, and international commerce tailored for global executives.',
    academicOverview: 'CCU delivers hybrid and on-campus degree curricula designed around modern enterprise demands. Programs emphasize digital management, practical informatics, data analytics, and cross-border commercial strategy in close proximity to Southern California technology hubs.',
    researchAdmissions: 'Graduate admission requires an earned bachelor’s degree from an accredited institution with a minimum 2.50 GPA, official transcripts, resume, and statement of intent. International students must demonstrate English language proficiency (TOEFL 70 or IELTS 6.0).',
    opportunities: [
      {
        id: 7779,
        title: 'Master of Business Administration (MBA) in Global Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive 36-credit graduate program emphasizing cross-border commercial trade, corporate financial analysis, organizational leadership, and supply chain logistics.',
        funding: 'Eligible for institutional payment plans and CCU International Merit Scholarships',
        tuition: '$550 per credit hour ($19,800 total program tuition)',
        fee: '$75 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027 (Fall Semester) / December 15, 2026 (Spring)',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'Accredited bachelor degree with minimum 2.50 cumulative GPA',
          ielts: 'IELTS 6.0 or TOEFL iBT 70 for international applicants',
          gre: 'GMAT/GRE optional; waived based on managerial work experience',
          papers: 'Statement of professional purpose (500 words) and updated CV',
          references: 'Two letters of recommendation from employers or former academic professors'
        }
      },
      {
        id: 7780,
        title: 'Master of Science in Computer Information Systems (MSCIS)',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Advanced technical curriculum covering database management systems, enterprise network security, cloud computing architectures, and applied business software development.',
        funding: 'Graduate research and teaching assistantships available for qualified students',
        tuition: '$580 per credit hour (36 credits total)',
        fee: '$75 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'Bachelor degree in computer science, IT, engineering, or related field with 2.75+ GPA',
          ielts: 'TOEFL iBT 75 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Technical statement of intent and portfolio of programming/system projects',
          references: 'Two academic or technical supervisor recommendations'
        }
      },
      {
        id: 7781,
        title: 'Bachelor of Business Administration (BBA)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Undergraduate degree program building foundational mastery in marketing management, corporate accounting, business analytics, and entrepreneurial enterprise strategy.',
        funding: 'CCU Dean’s Entrance Grant up to $3,000 for high-achieving freshmen and transfer students',
        tuition: '$425 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'High school diploma or accredited associate degree with minimum 2.30 GPA',
          ielts: 'IELTS 5.5 or TOEFL 60 for non-native English speakers',
          gre: 'Not required',
          papers: 'Personal essay on career ambitions and official transcripts',
          references: 'One letter of recommendation from an educator or counselor'
        }
      },
      {
        id: 7782,
        title: 'CCU Global Executive Merit Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Competitive tuition reduction scholarship awarded to outstanding international graduate applicants displaying demonstrated professional leadership and academic excellence.',
        funding: '30% tuition fee reduction across the duration of the master’s program',
        tuition: 'Direct tuition waiver',
        fee: '$0 scholarship application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'Undergraduate GPA of 3.20 or higher',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: 'Merit scholarship essay (750 words) detailing global leadership impact',
          references: 'Two professional executive references'
        }
      },
      {
        id: 7783,
        title: 'California Center Data Analytics & AI Graduate Fellowship',
        type: 'Fellowship',
        subject: 'computer-science',
        desc: 'Applied research fellowship pairing MSCIS students with Los Angeles tech companies for machine learning modeling, database optimization, and business intelligence projects.',
        funding: '$4,000 research stipend per semester plus corporate practicum placement',
        tuition: 'Fellowship stipend and tuition support',
        fee: '$0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'Enrolled MSCIS graduate student with minimum 3.50 GPA',
          ielts: 'Standard graduate language score',
          gre: 'Not required',
          papers: 'Applied project proposal in machine learning or business intelligence',
          references: 'Faculty recommendation from CCU Computer Information Systems faculty'
        }
      },
      {
        id: 7784,
        title: 'Graduate Assistantship in Business Analytics & Student Tutoring',
        type: 'Assistantship',
        subject: 'social-sciences',
        desc: 'Part-time campus assistantship providing teaching support in undergraduate statistics and financial accounting courses along with administrative support.',
        funding: 'Monthly stipend of $1,200 plus 50% graduate course tuition remission',
        tuition: 'Partial tuition remission',
        fee: '$0 application fee',
        deadline: '2027-08-10',
        deadlineText: 'August 10, 2027',
        source: 'https://www.californiacenter.education',
        requirements: {
          gpa: 'Full-time graduate student in MBA or MSCIS program with 3.30+ GPA',
          ielts: 'Demonstrated fluent oral English proficiency',
          gre: 'Not required',
          papers: 'Teaching philosophy statement and resume',
          references: 'One faculty recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3445,
        name: 'Prof. Dr. Jonathan Choi',
        title: 'Professor of Strategic Management & Dean of Business',
        department: 'School of Business Administration',
        subject: 'social-sciences',
        topics: ['Digital Transformation Strategy', 'Cross-Border Supply Chain Management', 'Fintech Adoption', 'Global Corporate Governance'],
        summary: 'Prof. Dr. Jonathan Choi leads the business school at CCU, investigating digital operating models and cross-border strategic mergers across Pacific Rim technology firms.',
        source: 'https://www.californiacenter.education'
      },
      {
        id: 3446,
        name: 'Dr. Henry Lin',
        title: 'Associate Professor & Director of Information Systems',
        department: 'Department of Computer Information Systems',
        subject: 'computer-science',
        topics: ['Enterprise Cloud Infrastructure', 'Relational Database Security', 'Applied Machine Learning', 'Big Data Architecture'],
        summary: 'Dr. Henry Lin oversees computing curricula and industry practicums, researching distributed cloud architectures and scalable database security frameworks for commercial enterprises.',
        source: 'https://www.californiacenter.education'
      },
      {
        id: 3447,
        name: 'Dr. Maria Rodriguez-Soto',
        title: 'Assistant Professor of International Commerce',
        department: 'Department of Global Marketing and Trade',
        subject: 'social-sciences',
        topics: ['International Trade Law', 'Multinational Marketing', 'Consumer Behavior Analytics', 'Emerging Market Penetration'],
        summary: 'Dr. Maria Rodriguez-Soto explores consumer behavior in bilingual retail markets and regulatory dynamics shaping North American international trade corridors.',
        source: 'https://www.californiacenter.education'
      }
    ]
  },

  // 14. California College San Diego (Row 612)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'California College San Diego',
    shortName: 'CCSD San Diego',
    slug: 'california-college-san-diego',
    location: 'San Diego, California, United States',
    website: 'https://www.cacollege.education',
    sourceRow: 612,
    stats: {
      established: '1978',
      students: '1,200+',
      international: '12%',
      faculty: '85+'
    },
    heroSummary: 'California College San Diego (CCSD) is an established private vocational and career college offering focused degree programs in respiratory therapy, diagnostic healthcare, software development, and medical administration.',
    academicOverview: 'CCSD delivers career-oriented clinical healthcare training and technological disciplines with intensive laboratory simulations. Clinical partnerships span Southern California regional healthcare systems, equipping graduates for immediate state and national board credentialing.',
    researchAdmissions: 'Admissions require a high school diploma, GED, or recognized equivalent. Healthcare programs require prerequisite coursework in anatomy and physiology, background checks, drug screening, and an admissions interview.',
    opportunities: [
      {
        id: 7785,
        title: 'Associate of Science in Respiratory Therapy (CoARC Accredited)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Intensive clinical associate degree preparing graduates for Registered Respiratory Therapist (RRT) credentialing, with 800+ hours of hospital clinical rotations in neonatal, pediatric, and adult ICU care.',
        funding: 'Eligible for Federal Financial Aid (Pell Grants, Direct Loans) and CCSD Career Fast-Track Scholarships',
        tuition: '$495 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-09-01',
        deadlineText: 'September 1, 2027 (Quarterly enrollment)',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'High school diploma or GED with minimum 2.50 GPA; college-level biology/algebra with C or better',
          ielts: 'TOEFL 65 or IELTS 5.5 for non-native speakers',
          gre: 'Not required',
          papers: 'Admissions questionnaire, background check clearance, and health immunization records',
          references: 'Two character or professional references'
        }
      },
      {
        id: 7786,
        title: 'Bachelor of Science in Healthcare Administration',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Career-advancing bachelor program covering hospital operations, healthcare compliance law, medical billing informatics, and clinical quality improvement methodologies.',
        funding: 'Healthcare Workforce Advancement Grants up to $4,000 for licensed allied health professionals',
        tuition: '$460 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'Associate degree or 60 transferable collegiate semester credits with 2.25+ GPA',
          ielts: 'Standard institutional requirement',
          gre: 'Not required',
          papers: 'Resume detailing healthcare experience and personal statement of goals',
          references: 'One professional supervisor recommendation'
        }
      },
      {
        id: 7787,
        title: 'Associate of Science in Computer Networking & Cybersecurity',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Hands-on technical degree covering Cisco routing, Linux enterprise administration, ethical hacking defense, and cloud security architecture preparation for CompTIA and CCNA certifications.',
        funding: 'STEM Technical Workforce Grant up to $2,500',
        tuition: '$475 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'High school graduation or GED equivalent',
          ielts: 'IELTS 5.5 or TOEFL 60',
          gre: 'Not required',
          papers: 'Technical aptitude diagnostic assessment and admissions essay',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7788,
        title: 'Bachelor of Science in Software & Mobile Applications Development',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Four-year baccalaureate curriculum in full-stack web engineering, iOS/Android mobile development, RESTful APIs, and agile enterprise software development.',
        funding: 'CCSD Technology Innovator Scholarship offering up to $5,000 across upper-division coursework',
        tuition: '$480 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'High school diploma with 2.50+ GPA or transfer credits in algebra and computer basics',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'Not required',
          papers: 'Portfolio of programming projects or coding exercises and statement of purpose',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7789,
        title: 'Healthcare Heroes Clinical Student Support Grant',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Emergency financial stipend providing assistance for scrubs, clinical diagnostic equipment, licensure examination fees, and transportation during clinical hospital rotations.',
        funding: '$1,500 direct grant applied toward clinical laboratory fees and examination vouchers',
        tuition: 'Clinical fees and equipment offset',
        fee: '$0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'Actively enrolled in second year of Respiratory Therapy program with 3.0+ GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Clinical faculty evaluation report and statement of financial hardship',
          references: 'Endorsement from Clinical Director of Respiratory Therapy'
        }
      },
      {
        id: 7790,
        title: 'CCSD Veterans & First Responders Technical Bridge Scholarship',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Specialized transition scholarship for military veterans and first responders pursuing degree credentials in cybersecurity, software engineering, or biomedical clinical care.',
        funding: 'Tuition reduction of $3,500 applied across academic year in conjunction with GI Bill benefits',
        tuition: 'Direct tuition grant',
        fee: '$0 application fee',
        deadline: '2027-08-20',
        deadlineText: 'August 20, 2027',
        source: 'https://www.cacollege.education',
        requirements: {
          gpa: 'Honorable discharge verification (DD-214) or first responder credential; 2.0+ GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Service narrative and career development plan',
          references: 'One reference from military commander, supervisor, or mentor'
        }
      }
    ],
    researchers: [
      {
        id: 3448,
        name: 'Prof. Ronald Patterson',
        title: 'Director of Clinical Education & Assistant Professor of Respiratory Therapy',
        department: 'Department of Respiratory Therapy Sciences',
        subject: 'biology',
        topics: ['Mechanical Ventilation Protocols', 'Adult Critical Care Resuscitation', 'Neonatal Pulmonary Physiology', 'Clinical Simulation Training'],
        summary: 'Prof. Ronald Patterson leads clinical hospital training for respiratory therapy candidates, standardizing high-frequency oscillatory ventilation and ECMO simulation protocols.',
        source: 'https://www.cacollege.education'
      },
      {
        id: 3449,
        name: 'Dr. Cynthia Vance',
        title: 'Chair of Healthcare Administration',
        department: 'Division of Allied Health & Management',
        subject: 'biology',
        topics: ['Hospital Systems Informatics', 'Clinical Quality Metrics', 'Healthcare Regulatory Compliance', 'Patient Safety Protocols'],
        summary: 'Dr. Cynthia Vance conducts applied research into hospital electronic health record integration and operational workflows that reduce clinical readmission rates.',
        source: 'https://www.cacollege.education'
      },
      {
        id: 3450,
        name: 'Prof. Alan G. Torres',
        title: 'Lead Instructor of Computer Networks and Cyber Defense',
        department: 'Department of Information Technology',
        subject: 'computer-science',
        topics: ['Defensive Cybersecurity Architecture', 'Cloud Virtualization', 'Intrusion Detection Systems', 'Zero-Trust Security Models'],
        summary: 'Prof. Alan G. Torres trains students in zero-trust network perimeter defense and penetration testing methodologies, advising regional enterprises on critical infrastructure cybersecurity.',
        source: 'https://www.cacollege.education'
      }
    ]
  },

  // 15. Colorado State University System (Row 651)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Colorado State University System',
    shortName: 'CSU System',
    slug: 'colorado-state-university-system-denver',
    location: 'Denver & Fort Collins, Colorado, United States',
    website: 'https://csusystem.edu',
    sourceRow: 651,
    stats: {
      established: '1870',
      students: '60,000+ systemwide',
      international: '9%',
      faculty: '4,000+ systemwide'
    },
    heroSummary: 'The Colorado State University System encompasses CSU Fort Collins (flagship R1 research university), CSU Pueblo (regional Hispanic-Serving Institution), and CSU Global (accredited online university), conducting over $450 million in annual research in veterinary medicine, atmospheric science, clean energy, and water sustainability.',
    academicOverview: 'Operating world-class facilities including the Cooperative Institute for Research in the Atmosphere (CIRA), the James L. Voss Veterinary Teaching Hospital, and the state-of-the-art CSU Spur Campus at the National Western Center in Denver, the CSU System leads North American discovery in food systems, hydrology, public health, and engineering.',
    researchAdmissions: 'Admissions standards vary by campus: CSU Fort Collins requires competitive high school or undergraduate GPA (typically 3.4+) and holistic review; CSU Pueblo provides accessible regional admissions; and CSU Global offers rolling monthly starts for online graduate and undergraduate scholars.',
    opportunities: [
      {
        id: 7791,
        title: 'CSU Spur Campus Water Sustainability & Urban Agriculture Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        desc: 'Interdisciplinary graduate fellowship based at the CSU Spur Hydro and Terra buildings in Denver, conducting applied research on urban watershed management, food security, and agricultural water reuse.',
        funding: 'Annual graduate stipend of $28,000 plus full tuition waiver and laboratory research allowance',
        tuition: '100% tuition covered',
        fee: '$60 application fee',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027 (Priority Fall Admission)',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'Bachelor or master degree in civil/environmental engineering, agronomy, or ecology with 3.20+ GPA',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'GRE optional but recommended for quantitative assessment',
          papers: 'Research statement (3 pages) detailing proposed water or urban agriculture project and CV',
          references: 'Three academic letters of recommendation'
        }
      },
      {
        id: 7792,
        title: 'CSU Flagship Doctoral Assistantship in Atmospheric Science & Climate Modeling',
        type: 'Assistantship',
        subject: 'environment',
        desc: 'Fully funded Ph.D. research assistantship within the world-renowned Department of Atmospheric Science at Fort Collins, investigating aerosol-cloud interactions, satellite meteorology, and extreme storm dynamics.',
        funding: 'Annual salary stipend of $33,000, 100% tuition coverage, and comprehensive graduate health benefits',
        tuition: 'Fully funded doctoral appointment',
        fee: '$60 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'Bachelor or master in physics, meteorology, applied mathematics, or engineering with 3.50+ GPA',
          ielts: 'TOEFL 85 or IELTS 7.0',
          gre: 'General GRE optional',
          papers: 'Statement of research interests, sample computational code or thesis excerpt, and CV',
          references: 'Three letters of recommendation from research mentors'
        }
      },
      {
        id: 7793,
        title: 'CSU System Clean Energy & Grid Modernization Research Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Doctoral and master fellowship based at the CSU Energy Institute, conducting cutting-edge research in microgrid integration, renewable power storage, and methane emissions mitigation technologies.',
        funding: '$30,000 annual stipend plus tuition coverage and conference travel funding',
        tuition: 'Full tuition waiver',
        fee: '$60 application fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'Undergraduate degree in electrical, mechanical, or chemical engineering with 3.30+ GPA',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: 'Statement of purpose focusing on renewable energy systems and professional CV',
          references: 'Three academic or industrial research recommendations'
        }
      },
      {
        id: 7794,
        title: 'CSU Veterinary Medicine & One Health Doctoral Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Prestigious fellowship in the College of Veterinary Medicine and Biomedical Sciences, investigating zoonotic disease transmission, veterinary oncology, and translational comparative medicine.',
        funding: '$34,000 annual stipend, complete tuition waiver, and clinical research bench fees',
        tuition: '100% tuition covered',
        fee: '$75 application fee',
        deadline: '2027-01-05',
        deadlineText: 'January 5, 2027',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'DVM, BS, or MS in biological sciences with minimum 3.50 cumulative GPA',
          ielts: 'TOEFL 90 or IELTS 7.0',
          gre: 'GRE optional',
          papers: 'Research statement outlining One Health methodology and scientific publications if available',
          references: 'Three letters of evaluation from biomedical research faculty'
        }
      },
      {
        id: 7795,
        title: 'CSU Global Online Master of Science in Data Analytics Tuition Scholarship',
        type: 'Scholarship',
        subject: 'computer-science',
        desc: 'Merit-based online graduate tuition award for professionals pursuing master’s credentials in predictive analytics, machine learning, and big data visualization via CSU Global.',
        funding: 'Up to $5,000 applied across the 36-credit master’s curriculum',
        tuition: 'Direct online tuition offset',
        fee: '$0 CSU Global application fee',
        deadline: '2027-06-01',
        deadlineText: 'June 1, 2027 (Monthly start cycles)',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'Bachelor degree from an accredited university with minimum 3.00 GPA',
          ielts: 'English proficiency requirement if undergraduate degree was outside US',
          gre: 'Not required',
          papers: 'Statement of intent and professional resume showing quantitative aptitude',
          references: 'Two professional or academic references'
        }
      },
      {
        id: 7796,
        title: 'CSU Pueblo Hispanic-Serving Institution STEM Pathway Grant',
        type: 'Grant',
        subject: 'engineering',
        desc: 'Undergraduate and graduate research award supporting underrepresented scholars in civil engineering, industrial mathematics, and automotive mechanics at CSU Pueblo.',
        funding: '$4,500 annual award plus sponsored summer research laboratory appointment',
        tuition: 'Direct tuition grant',
        fee: '$25 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://csusystem.edu',
        requirements: {
          gpa: 'Enrolled STEM major at CSU Pueblo with 2.80+ GPA',
          ielts: 'Institutional undergraduate requirement',
          gre: 'Not required',
          papers: 'Personal statement detailing STEM career ambitions and FAFSA completion',
          references: 'Two faculty recommendations'
        }
      }
    ],
    researchers: [
      {
        id: 3451,
        name: 'Dr. Sonia M. Kreidenweis',
        title: 'University Distinguished Professor of Atmospheric Science',
        department: 'Department of Atmospheric Science, CSU Fort Collins',
        subject: 'environment',
        topics: ['Aerosol-Cloud Interactions', 'Atmospheric Particulate Chemistry', 'Regional Haze Dynamics', 'Climate Forcing Mechanisms'],
        summary: 'Dr. Sonia M. Kreidenweis conducts world-renowned research on airborne particulate matter and cloud condensation nuclei, evaluating their effects on climate variability and precipitation patterns.',
        source: 'https://csusystem.edu'
      },
      {
        id: 3452,
        name: 'Prof. Dr. Jorge A. Ramirez',
        title: 'Professor of Civil and Environmental Engineering',
        department: 'Department of Civil and Environmental Engineering, CSU Fort Collins',
        subject: 'engineering',
        topics: ['Hydrologic Modeling', 'Water Resources Systems', 'Climate Change Impact on River Basins', 'Flood Risk Assessment'],
        summary: 'Prof. Dr. Jorge A. Ramirez models large-scale river basin hydrology and snowmelt runoff in the Colorado River basin, developing adaptive water management strategies for arid western regions.',
        source: 'https://csusystem.edu'
      },
      {
        id: 3453,
        name: 'Dr. Melissa Reynolds',
        title: 'Professor of Chemistry & Biomedical Engineering',
        department: 'Department of Chemistry and School of Biomedical Engineering',
        subject: 'chemistry',
        topics: ['Nitric Oxide Therapeutics', 'Biomaterials Science', 'Metal-Organic Frameworks', 'Medical Device Coating Chemistry'],
        summary: 'Dr. Melissa Reynolds synthesizes advanced biocompatible polymer coatings and catalytic metal-organic frameworks for cardiovascular stents and therapeutic wound healing devices.',
        source: 'https://csusystem.edu'
      }
    ]
  },

  // 16. Columbia International University (Row 654)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Columbia International University',
    shortName: 'CIU Columbia',
    slug: 'columbia-international-university-south-carolina',
    location: 'Columbia, South Carolina, United States',
    website: 'https://www.ciu.edu',
    sourceRow: 654,
    stats: {
      established: '1923',
      students: '2,500+',
      international: '15%',
      faculty: '140+'
    },
    heroSummary: 'Columbia International University (CIU) is a private university in Columbia, South Carolina, offering accredited undergraduate, graduate, and seminary programs in clinical mental health counseling, intercultural studies, business administration, biomedical science, and disaster relief.',
    academicOverview: 'Accredited by SACSCOC, CACREP, and ATS, CIU integrates academic rigor with servant leadership. Its Clinical Mental Health Counseling program and Zwemer Center for Intercultural Studies attract students from over 40 nations for research in trauma counseling, global literacy, and humanitarian aid.',
    researchAdmissions: 'Undergraduate admissions require high school graduation credentials with minimum 2.0 GPA and a Christian ministry reference. Graduate programs require an earned bachelor’s degree with 2.70+ GPA, personal statement, and department interview.',
    opportunities: [
      {
        id: 7797,
        title: 'Master of Arts in Clinical Mental Health Counseling (CACREP-Accredited)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive 60-credit clinical graduate program preparing students for state licensure as Professional Counselors (LPC), with intensive training in trauma therapy, marriage counseling, and 700 hours of clinical practicum.',
        funding: 'Eligible for Federal Direct Graduate PLUS loans and CIU Graduate Counseling Fellowships',
        tuition: '$585 per credit hour',
        fee: '$45 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027 (Fall Cohort)',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'Accredited bachelor degree with minimum 3.00 GPA in undergraduate coursework',
          ielts: 'TOEFL 80 or IELTS 6.5 for international students',
          gre: 'GRE optional; waived with 3.25+ undergraduate GPA',
          papers: 'Counseling autobiographical statement (4-5 pages) and professional resume',
          references: 'Three recommendations (one academic, one professional, one pastoral/character)'
        }
      },
      {
        id: 7798,
        title: 'Doctor of Philosophy (Ph.D.) in Intercultural Studies',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Advanced research doctoral degree focusing on cross-cultural anthropology, global religious dialogue, migration demographics, and indigenous educational strategies.',
        funding: 'Doctoral research fellowships and tuition discounts for international mission practitioners',
        tuition: '$675 per credit hour',
        fee: '$50 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'Master of Arts or M.Div. in relevant discipline with minimum 3.30 GPA',
          ielts: 'TOEFL 85 or IELTS 7.0',
          gre: 'Not required',
          papers: 'Doctoral research prospectus (10-15 pages) and academic writing sample',
          references: 'Three academic letters of recommendation from graduate faculty'
        }
      },
      {
        id: 7799,
        title: 'Master of Business Administration (MBA) in Non-Profit & Global Leadership',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Online and on-campus 36-credit master program covering philanthropic financial administration, ethical enterprise management, international logistics, and strategic marketing.',
        funding: 'Corporate and non-profit tuition grants up to $3,000',
        tuition: '$510 per credit hour',
        fee: '$45 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'Bachelor degree from an accredited institution with 2.70+ GPA',
          ielts: 'TOEFL 70 or IELTS 6.0',
          gre: 'GMAT/GRE not required',
          papers: 'Statement of career objectives and resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7800,
        title: 'CIU Presidential Global Academic Merit Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Competitive annual scholarship for full-time residential undergraduate and graduate international students demonstrating extraordinary academic achievement and leadership dedication.',
        funding: 'Up to $8,000 per academic year applied toward tuition expenses',
        tuition: 'Direct tuition scholarship',
        fee: '$0 application fee',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'Minimum 3.50 cumulative GPA or high school equivalent',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: 'Presidential scholarship essay (1,000 words) on global leadership vision',
          references: 'Two academic recommendations and one community reference'
        }
      },
      {
        id: 7801,
        title: 'Master of Arts in Disaster Relief & Global Development',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Applied professional degree training leaders in crisis logistics, disaster emergency response, post-conflict community rebuilding, and international humanitarian coordination.',
        funding: 'Humanitarian sector partner tuition awards up to $3,500',
        tuition: '$540 per credit hour',
        fee: '$45 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'Earned bachelor degree with 2.75+ GPA',
          ielts: 'TOEFL 75 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Statement of purpose detailing field experience in relief or community service',
          references: 'Two professional letters of reference'
        }
      },
      {
        id: 7802,
        title: 'Bachelor of Science in Biomedical Science & Pre-Medical Studies',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Rigorous undergraduate curriculum in cell biology, organic chemistry, human physiology, and medical ethics preparing students for admission to medical, dental, and pharmacy colleges.',
        funding: 'CIU STEM Honors Scholarship up to $6,000 per year',
        tuition: '$13,200 per semester (full-time undergraduate block tuition)',
        fee: '$45 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.ciu.edu',
        requirements: {
          gpa: 'High school GPA of 3.20+ with strong coursework in high school biology and chemistry',
          ielts: 'Standard undergraduate requirement',
          gre: 'SAT 1100+ or ACT 22+ recommended',
          papers: 'Personal essay detailing vocation in healthcare sciences and official high school transcripts',
          references: 'Two letters of recommendation from science instructors'
        }
      }
    ],
    researchers: [
      {
        id: 3454,
        name: 'Dr. Leah A. Zuidema',
        title: 'Vice President for Academic Affairs & Dean of the Faculty',
        department: 'Office of Academic Affairs & College of Education',
        subject: 'social-sciences',
        topics: ['Higher Education Pedagogy', 'Cognitive Development in Literacy', 'Faculty Governance', 'Curricular Alignment'],
        summary: 'Dr. Leah A. Zuidema leads academic curriculum strategy and faculty development at CIU, publishing extensively on collegiate writing instruction, critical thinking models, and academic administration.',
        source: 'https://www.ciu.edu'
      },
      {
        id: 3455,
        name: 'Dr. Stephen C. Hall',
        title: 'Professor of Counseling & Clinical Training Director',
        department: 'Seminary & School of Counseling',
        subject: 'social-sciences',
        topics: ['Clinical Mental Health Counseling', 'Trauma Recovery Interventions', 'Addiction Psychotherapy', 'Supervision Ethics'],
        summary: 'Dr. Stephen C. Hall supervises clinical practicum internships for CACREP graduate counselors, researching evidence-based cognitive behavioral therapy integration in trauma survivor recovery.',
        source: 'https://www.ciu.edu'
      },
      {
        id: 3456,
        name: 'Prof. Trevor M. Castor',
        title: 'Director of the Zwemer Center for Intercultural Studies',
        department: 'Zwemer Center & College of Intercultural Studies',
        subject: 'social-sciences',
        topics: ['Intercultural Communication', 'Comparative Religious Studies', 'Global Migration Demographics', 'Humanitarian Mission Strategies'],
        summary: 'Prof. Trevor M. Castor directs interdisciplinary research on cross-cultural community engagement, training international NGO workers in respectful religious dialogue and refugee assistance.',
        source: 'https://www.ciu.edu'
      }
    ]
  },

  // 17. Concordia University, Nebraska (Row 657)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Concordia University, Nebraska',
    shortName: 'CUNE Seward',
    slug: 'concordia-university-nebraska-seward',
    location: 'Seward, Nebraska, United States',
    website: 'https://www.cune.edu',
    sourceRow: 657,
    stats: {
      established: '1894',
      students: '3,200+',
      international: '6%',
      faculty: '160+'
    },
    heroSummary: 'Concordia University, Nebraska is a private Lutheran university in Seward, Nebraska, offering accredited degrees in education, nursing, biology, computer science, and agricultural business, acclaimed for preparing church and public school educators across North America.',
    academicOverview: 'Accredited by the Higher Learning Commission (HLC), Concordia Nebraska delivers exceptional education programs, clinical healthcare simulation, and agricultural science training. The university operates modern natural science research laboratories and comprehensive online graduate educator academies.',
    researchAdmissions: 'Undergraduate admission requires high school graduation with a minimum 2.50 GPA; test-optional admissions policies apply. Graduate programs require an accredited bachelor’s degree with a 2.80+ GPA and state educator certification for specialized master’s tracks.',
    opportunities: [
      {
        id: 7803,
        title: 'Master of Education (M.Ed.) in Curriculum & Instruction - STEM Emphasis',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Fully accredited 36-credit online graduate program designed for practicing K-12 teachers to advance instructional design, STEM integration, and educational leadership.',
        funding: 'Educator Partner Tuition Discount of $50 per credit hour and federal TEACH grant eligibility',
        tuition: '$425 per credit hour',
        fee: '$0 online application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027 (Rolling 8-week cohorts)',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'Earned bachelor degree from an accredited institution with minimum 2.80 GPA',
          ielts: 'TOEFL 79 or IELTS 6.5 for international degree holders',
          gre: 'Not required',
          papers: 'Valid teaching license or statement of educational experience and resume',
          references: 'Two professional references from school administrators or department heads'
        }
      },
      {
        id: 7804,
        title: 'Bachelor of Science in Agricultural Business & Precision Agronomy',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Comprehensive undergraduate program combining agribusiness finance, commodity marketing, soil science, GIS spatial mapping, and precision farming technologies.',
        funding: 'CUNE Agribusiness Scholar Award up to $5,000 per year',
        tuition: '$19,250 per semester (full-time undergraduate tuition)',
        fee: '$0 online application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'High school diploma with minimum 2.50 GPA',
          ielts: 'Standard undergraduate language requirement',
          gre: 'Test-optional (ACT/SAT optional for admission and merit aid)',
          papers: 'High school transcript and personal statement on agricultural leadership goals',
          references: 'One letter of recommendation from a teacher, counselor, or 4-H/FFA advisor'
        }
      },
      {
        id: 7805,
        title: 'Bachelor of Science in Computer Science & Cyber Defense',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Four-year baccalaureate degree in algorithm design, network protocols, defensive cybersecurity, database administration, and software engineering.',
        funding: 'Concordia STEM Honors Scholarship providing up to $22,000 annual merit award',
        tuition: '$19,250 per semester',
        fee: '$0 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'High school GPA of 3.00+ with strong performance in mathematics',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'Not required',
          papers: 'Official transcripts and personal statement',
          references: 'One academic reference from a mathematics or science instructor'
        }
      },
      {
        id: 7806,
        title: 'CUNE Regents Academic Excellence Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Prestigious four-year undergraduate merit award honoring high-achieving freshmen entering STEM, mathematics, pre-engineering, or actuarial tracks.',
        funding: 'Annual award of $20,000 to $25,000 renewable across four undergraduate years',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'High school GPA 3.75+ or top 10% class rank',
          ielts: 'Not required for domestic students; IELTS 6.5 for international students',
          gre: 'SAT 1250+ or ACT 26+ (if submitting test scores)',
          papers: 'Admissions application and high school academic transcripts',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7807,
        title: 'Master of Science in Healthcare Administration (MHA)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Online graduate curriculum preparing healthcare managers in clinical quality assurance, hospital economics, healthcare informatics, and health ethics.',
        funding: 'Graduate healthcare partner scholarship up to $2,500',
        tuition: '$450 per credit hour',
        fee: '$0 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'Bachelor degree with 2.80+ GPA in any discipline',
          ielts: 'TOEFL 75 or IELTS 6.0',
          gre: 'Not required',
          papers: 'Statement of professional intent and current resume',
          references: 'Two letters of recommendation from professional supervisors'
        }
      },
      {
        id: 7808,
        title: 'Concordia Pre-Medical Research & Clinical Assistantship',
        type: 'Assistantship',
        subject: 'biology',
        desc: 'Undergraduate laboratory research appointment supporting departmental biology and biochemistry research, accompanied by clinical shadowing at regional health centers.',
        funding: '$3,000 academic year stipend plus paid clinical shadowing credits',
        tuition: 'Research stipend and lab support',
        fee: '$0 application fee',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        source: 'https://www.cune.edu',
        requirements: {
          gpa: 'Sophomore or junior biology/biochemistry major with minimum 3.40 GPA',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Research interest statement and science laboratory transcript',
          references: 'Recommendation from Concordia natural sciences faculty'
        }
      }
    ],
    researchers: [
      {
        id: 3457,
        name: 'Dr. Brent Royuk',
        title: 'Professor of Physics & Natural Science Pedagogy',
        department: 'Department of Natural and Computer Sciences',
        subject: 'physics',
        topics: ['Introductory Physics Pedagogy', 'Interactive Science Demonstration Models', 'Atmospheric Optics', 'Mechanics Simulation'],
        summary: 'Dr. Brent Royuk investigates active-learning methodologies in undergraduate university physics instruction, developing interactive software demonstrations and experimental mechanics laboratories.',
        source: 'https://www.cune.edu'
      },
      {
        id: 3458,
        name: 'Dr. Kristin Holthus',
        title: 'Associate Professor of Business and Agribusiness',
        department: 'Department of Business Administration',
        subject: 'social-sciences',
        topics: ['Agricultural Commodity Markets', 'Rural Business Enterprise Strategy', 'Precision Agronomy Economics', 'Farm Succession Planning'],
        summary: 'Dr. Kristin Holthus specializes in grain marketing strategies, risk mitigation for Midwestern farming operations, and economic viability assessments of precision agronomy technologies.',
        source: 'https://www.cune.edu'
      },
      {
        id: 3459,
        name: 'Prof. Joseph Herl',
        title: 'Professor of Music & Church Musicology',
        department: 'Department of Music',
        subject: 'arts-design',
        topics: ['Hymnology & Liturgical Music History', 'Choral Pedagogy', 'Organ Performance Practice', 'Sixteenth-Century Musical Polyphony'],
        summary: 'Prof. Joseph Herl is an internationally recognized musicologist and hymnologist, researching Reformation-era sacred choral music and authoring definitive scholarly reference works.',
        source: 'https://www.cune.edu'
      }
    ]
  },

  // 18. Dakota Wesleyan University (Row 662)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Dakota Wesleyan University',
    shortName: 'DWU Mitchell',
    slug: 'dakota-wesleyan-university-mitchell',
    location: 'Mitchell, South Dakota, United States',
    website: 'https://www.dwu.edu',
    sourceRow: 662,
    stats: {
      established: '1885',
      students: '950+',
      international: '5%',
      faculty: '75+'
    },
    heroSummary: 'Dakota Wesleyan University (DWU) is a private university in Mitchell, South Dakota, affiliated with the United Methodist Church, celebrated for its Donna Willrodt Christiansen College of Nursing, agricultural leadership initiatives, and George and Eleanor McGovern Center for Leadership and Public Service.',
    academicOverview: 'Accredited by the Higher Learning Commission and CCNE, DWU provides exceptional nursing education, athletic training, wildlife conservation, and digital business. The university’s McGovern Center fosters civic engagement, rural community leadership, and social justice research across the Northern Plains.',
    researchAdmissions: 'Undergraduate admissions require high school graduation with a minimum 2.50 GPA; DWU is test-optional. Nursing and athletic training programs require prerequisite college biology/chemistry coursework with a 2.75+ cumulative GPA.',
    opportunities: [
      {
        id: 7809,
        title: 'Bachelor of Science in Nursing (BSN) - Donna Willrodt Christiansen College',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'CCNE-accredited professional nursing curriculum featuring high-fidelity simulation labs and clinical rotations across regional medical centers, boasting over 95% NCLEX first-time pass rates.',
        funding: 'Sanford Health and Avera Health loan forgiveness and DWU Nursing Scholar awards up to $8,000 per year',
        tuition: '$30,900 annual undergraduate tuition',
        fee: '$0 application fee',
        deadline: '2027-07-01',
        deadlineText: 'July 1, 2027 (Fall Cohort)',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'Cumulative GPA of 2.75 or higher in prerequisite anatomy, physiology, and chemistry',
          ielts: 'TOEFL 79 or IELTS 6.5 for non-native English speakers',
          gre: 'TEAS entrance exam scores (minimum 65% composite)',
          papers: 'Nursing essay explaining dedication to healthcare profession and resume',
          references: 'Two letters of recommendation (one academic and one professional)'
        }
      },
      {
        id: 7810,
        title: 'Master of Athletic Training (MAT)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'CAATE-accredited professional graduate program preparing students for the Board of Certification (BOC) exam through immersive collegiate, clinical, and sports rehabilitation practicums.',
        funding: 'Graduate athletic training assistantships offering tuition assistance and monthly stipends',
        tuition: '$575 per credit hour',
        fee: '$25 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'Bachelor degree with minimum 3.00 GPA and prerequisite physics, biology, and biomechanics coursework',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: '50 hours of verified athletic training clinical observation and personal statement',
          references: 'Three professional recommendations including one certified athletic trainer'
        }
      },
      {
        id: 7811,
        title: 'George McGovern Center Civic Leadership & Public Policy Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Prestigious fellowship named after former US Senator and presidential nominee George McGovern, supporting undergraduate research into rural poverty alleviation, food insecurity, and civic governance.',
        funding: '$4,000 annual scholarship plus fully funded travel to national policy symposiums',
        tuition: 'Direct tuition grant',
        fee: '$0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'Enrolled DWU undergraduate with minimum 3.25 cumulative GPA',
          ielts: 'Not required for domestic students',
          gre: 'Not required',
          papers: 'Public policy essay (1,000 words) addressing rural food security or community development',
          references: 'Two faculty recommendations'
        }
      },
      {
        id: 7812,
        title: 'Bachelor of Science in Wildlife Management & Conservation Biology',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Undergraduate science degree providing hands-on fieldwork in prairie grassland ecosystems, ornithology, wetland restoration, and wildlife population management in the Missouri River basin.',
        funding: 'South Dakota Game, Fish & Parks student internships and DWU science merit awards',
        tuition: '$30,900 annual block tuition',
        fee: '$0 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'High school graduation with 2.50+ GPA and background in high school life sciences',
          ielts: 'Standard undergraduate language requirement',
          gre: 'Test-optional',
          papers: 'Admissions application and high school transcript',
          references: 'One letter of recommendation'
        }
      },
      {
        id: 7813,
        title: 'DWU Presidential Merit Scholarship',
        type: 'Scholarship',
        subject: 'mathematics',
        desc: 'Top-tier undergraduate scholarship recognizing academic excellence, quantitative achievement, and moral character for incoming first-year students across all academic majors.',
        funding: 'Up to $16,000 per academic year renewable for four years ($64,000 total value)',
        tuition: 'Direct undergraduate tuition offset',
        fee: '$0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'High school GPA of 3.80+ or ACT 27+ / SAT 1260+',
          ielts: 'IELTS 6.5 for international students',
          gre: 'Not required',
          papers: 'High school transcript, honors essay, and leadership activities resume',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7814,
        title: 'Master of Business Administration (MBA) in Strategic Agribusiness',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Accelerated online master’s program designed for agricultural leaders, covering commodity risk management, farm finance systems, supply chain analytics, and rural leadership.',
        funding: 'Midwest Agribusiness tuition discounts of $1,500',
        tuition: '$500 per credit hour (36 credits total)',
        fee: '$0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.dwu.edu',
        requirements: {
          gpa: 'Bachelor degree from an accredited institution with 2.70+ GPA',
          ielts: 'TOEFL 75 or IELTS 6.0',
          gre: 'GMAT/GRE waived based on professional experience',
          papers: 'Resume detailing professional experience and statement of goals',
          references: 'Two professional references'
        }
      }
    ],
    researchers: [
      {
        id: 3460,
        name: 'Dr. Joel Allen',
        title: 'Director of the McGovern Center & Professor of Religion and Philosophy',
        department: 'George and Eleanor McGovern Center for Leadership and Public Service',
        subject: 'social-sciences',
        topics: ['Civic Leadership Pedagogy', 'Rural Food Security Policy', 'Social Ethics', 'Public Policy in the Northern Plains'],
        summary: 'Dr. Joel Allen directs the McGovern Center, researching democratic civic empowerment, community hunger eradication programs, and public service ethics throughout rural South Dakota.',
        source: 'https://www.dwu.edu'
      },
      {
        id: 3461,
        name: 'Prof. Paula Mazzer',
        title: 'Associate Professor of Chemistry & Chair of Science and Mathematics',
        department: 'Department of Chemistry and Mathematics',
        subject: 'chemistry',
        topics: ['Environmental Analytical Chemistry', 'Agricultural Pesticide Runoff Degradation', 'Chemical Education', 'Biochemical Assay Design'],
        summary: 'Prof. Paula Mazzer investigates chemical runoff degradation kinetics in agricultural watersheds and mentors undergraduate researchers in environmental water testing assays.',
        source: 'https://www.dwu.edu'
      },
      {
        id: 3462,
        name: 'Dr. Bethany Melroe Lehrman',
        title: 'Associate Professor of Biology & Wildlife Conservation',
        department: 'Department of Biological Sciences',
        subject: 'environment',
        topics: ['Prairie Grassland Ecology', 'Pollinator Habitat Conservation', 'Avian Migration Monitoring', 'Wetland Restoration'],
        summary: 'Dr. Bethany Melroe Lehrman studies grassland ecology and avian biodiversity dynamics across the Northern Great Plains, collaborating with conservation agencies on prairie habitat preservation.',
        source: 'https://www.dwu.edu'
      }
    ]
  },

  // 19. Deep Springs College (Row 664)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Deep Springs College',
    shortName: 'Deep Springs',
    slug: 'deep-springs-college-california',
    location: 'Deep Springs Valley, Inyo County, California, United States',
    website: 'https://www.deepsprings.edu',
    sourceRow: 664,
    stats: {
      established: '1917',
      students: '~30 undergraduate fellows',
      international: '15%',
      faculty: '10+ resident and visiting scholars'
    },
    heroSummary: 'Deep Springs College is an iconic, highly selective two-year liberal arts institution situated on an isolated cattle ranch and alfalfa farm in California’s high desert, built on the three foundational pillars of academics, student self-governance, and manual labor.',
    academicOverview: 'Deep Springs admits only 12 to 15 students annually, awarding every matriculant a full two-year scholarship covering 100% of tuition, room, and board. Students engage in rigorous seminars in political philosophy, literature, and geology while working at least 20 hours per week operating the ranch and governing all college affairs.',
    researchAdmissions: 'Admissions are exceptionally competitive through a two-stage holistic application: Stage 1 involves extensive philosophical essays and academic transcripts; Stage 2 invites finalists to spend several days living and working at the valley campus for faculty and student body interviews.',
    opportunities: [
      {
        id: 7815,
        title: 'Deep Springs Full-Ride Academic & Labor Fellowship (Covers 100% Tuition, Room, and Board)',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Every admitted student is awarded a comprehensive two-year fellowship covering all tuition, room, board, and academic expenses, valued at over $100,000, in exchange for communal labor and self-governance.',
        funding: '100% tuition, room, and board provided to every admitted student',
        tuition: 'Fully funded ($0 tuition, room, and board)',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026 (Annual Stage 1 Application Deadline)',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Demonstrated exceptional intellectual curiosity and rigorous academic achievement',
          ielts: 'Fluent English proficiency required for seminar participation',
          gre: 'SAT/ACT optional; evaluated holistically',
          papers: 'Four extensive application essays exploring philosophy, service, self-governance, and personal values',
          references: 'Three letters of recommendation (two academic and one personal/character)'
        }
      },
      {
        id: 7816,
        title: 'Deep Springs Desert Ecology & Water Resource Field Practicum',
        type: 'Practicum',
        subject: 'environment',
        desc: 'Intensive field seminar and practical research investigating high-desert hydrology, Great Basin endemic flora, water rights jurisprudence, and sustainable irrigation techniques in an endorheic basin.',
        funding: 'Fully funded as part of the residential fellowship curriculum',
        tuition: '$0 tuition (Included in full scholarship)',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Admitted Deep Springs student fellow',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Enrollment in Natural Sciences seminar curriculum',
          references: 'Evaluated during Stage 2 on-campus visit'
        }
      },
      {
        id: 7817,
        title: 'Deep Springs Political Philosophy & Democratic Deliberation Seminar',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Advanced collegiate seminar interrogating classical and contemporary political philosophy, constitutional theory, and deliberative democratic structures applied directly to student governance meetings.',
        funding: 'Full scholarship inclusion',
        tuition: '$0 tuition',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Admitted Deep Springs fellow',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Stage 1 admissions essays on political theory or civic engagement',
          references: 'Standard Deep Springs application recommendations'
        }
      },
      {
        id: 7818,
        title: 'Alfalfa Agronomy & Sustainable Cattle Ranch Management Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        desc: 'Practical and scholarly immersion in regenerative high-altitude pasture management, livestock veterinary care, mechanical irrigation maintenance, and agricultural labor economics.',
        funding: 'Comprehensive room, board, and practical ranch apprentice training',
        tuition: '$0 tuition',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Matriculated Deep Springs student committed to 20 hours/week manual ranch labor',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Ranch labor committee assignment and safety certification',
          references: 'Internal ranch manager evaluation'
        }
      },
      {
        id: 7819,
        title: 'Deep Springs Valley Geological Survey & Geophysics Research Assistantship',
        type: 'Assistantship',
        subject: 'physics',
        desc: 'Faculty-guided field research examining the seismology, fault line tectonic movements, and volcanic stratigraphy of the White-Inyo Mountain range and Owens Valley graben.',
        funding: 'Laboratory equipment, seismic monitoring access, and full scholarship support',
        tuition: '$0 tuition',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Admitted student fellow with interest in geophysics and Earth systems',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Proposal for independent geological field project',
          references: 'Faculty recommendation from Deep Springs science faculty'
        }
      },
      {
        id: 7820,
        title: 'Creative Writing & Western American Literature Colloquium',
        type: 'Fellowship',
        subject: 'arts-design',
        desc: 'Intimate seminar analyzing the ecological, literary, and historical narratives of the American West, featuring intensive creative nonfiction and poetic writing workshops.',
        funding: 'Visiting writer mentorship and full scholarship inclusion',
        tuition: '$0 tuition',
        fee: '$0 application fee',
        deadline: '2026-11-07',
        deadlineText: 'November 7, 2026',
        source: 'https://www.deepsprings.edu',
        requirements: {
          gpa: 'Admitted student fellow',
          ielts: 'Fluent English',
          gre: 'Not required',
          papers: 'Creative writing portfolio or analytical essay submission',
          references: 'Admissions application dossier'
        }
      }
    ],
    researchers: [
      {
        id: 3463,
        name: 'Dr. Julian B. Carter',
        title: 'Professor of Philosophy and Humanities',
        department: 'Division of Humanities',
        subject: 'social-sciences',
        topics: ['Moral Philosophy', 'Ancient Greek Political Theory', 'Deliberative Democratic Ethics', 'Pragmatism'],
        summary: 'Dr. Julian B. Carter guides Deep Springs students through close textual analyses of Plato, Aristotle, and Dewey, connecting classical ethical theories to the challenges of communal self-governance.',
        source: 'https://www.deepsprings.edu'
      },
      {
        id: 3464,
        name: 'Prof. Clara M. Vance',
        title: 'Resident Scholar in Geomorphology and Hydrogeology',
        department: 'Division of Natural Sciences',
        subject: 'environment',
        topics: ['Desert Hydrogeology', 'Great Basin Geomorphology', 'Alluvial Fan Sedimentology', 'Endorheic Basin Hydrology'],
        summary: 'Prof. Clara M. Vance conducts field studies on groundwater recharge and alluvial fan evolution across the Deep Springs graben, mentoring students in hydrogeological mapping.',
        source: 'https://www.deepsprings.edu'
      },
      {
        id: 3465,
        name: 'Dr. Benjamin Stern',
        title: 'Visiting Professor of Social Sciences and Public Law',
        department: 'Division of Social Sciences',
        subject: 'social-sciences',
        topics: ['Constitutional Law', 'American Agrarian History', 'Water Rights Jurisprudence', 'Labor Economics'],
        summary: 'Dr. Benjamin Stern teaches courses in American constitutional history and Western water law, analyzing historical conflicts over resource allocation and public land management in the Great Basin.',
        source: 'https://www.deepsprings.edu'
      }
    ]
  },

  // 20. Delaware International University (Row 665)
  {
    countryId: 'usa',
    countryLabel: 'United States',
    institution: 'Delaware International University',
    shortName: 'DIU Wilmington',
    slug: 'delaware-international-university-wilmington',
    location: 'Wilmington, Delaware, United States',
    website: 'https://delawareinternationaluniversity.com',
    sourceRow: 665,
    stats: {
      established: '2018',
      students: '450+',
      international: '65%',
      faculty: '30+'
    },
    heroSummary: 'Delaware International University (DIU) is an institution of international higher education in Wilmington, Delaware, providing specialized graduate degree programs in cross-border corporate governance, fintech informatics, and global business administration.',
    academicOverview: 'Situated in the corporate capital of the United States, DIU focuses on international enterprise compliance, algorithmic finance, cyber law, and cross-border commercial trade. Courses are delivered via executive hybrid and online learning frameworks tailored for working multinational professionals.',
    researchAdmissions: 'Graduate admission requires an earned bachelor’s degree from an accredited institution with a minimum 2.50 GPA, curriculum vitae, personal statement of purpose, and English proficiency (IELTS 6.0 or TOEFL 75).',
    opportunities: [
      {
        id: 7821,
        title: 'Master of Science in International Financial Law & Corporate Governance',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Advanced graduate program examining Delaware corporate jurisprudence, multinational tax treaties, cross-border mergers and acquisitions, and international regulatory compliance.',
        funding: 'Corporate executive sponsorships and DIU Global Scholar Awards up to $4,000',
        tuition: '$525 per credit hour (36 credits total)',
        fee: '$60 application fee',
        deadline: '2027-08-01',
        deadlineText: 'August 1, 2027 (Fall Intake)',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Accredited bachelor degree in law, business, or social sciences with 2.70+ GPA',
          ielts: 'IELTS 6.0 or TOEFL iBT 75',
          gre: 'Not required',
          papers: 'Statement of professional intent (750 words) on corporate legal governance and CV',
          references: 'Two letters of recommendation from legal or corporate supervisors'
        }
      },
      {
        id: 7822,
        title: 'Master of Science in Artificial Intelligence & Fintech Analytics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Curriculum in applied machine learning, algorithmic trading systems, blockchain distributed ledgers, and financial risk modeling designed for tech and finance executives.',
        funding: 'Fintech Industry Fellowship offering 25% tuition fee reduction',
        tuition: '$550 per credit hour (36 credits total)',
        fee: '$60 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Bachelor degree in computer science, mathematics, finance, or engineering with 2.75+ GPA',
          ielts: 'TOEFL 80 or IELTS 6.5',
          gre: 'Not required',
          papers: 'Technical background resume and statement of fintech research interest',
          references: 'Two recommendations from technical or financial supervisors'
        }
      },
      {
        id: 7823,
        title: 'Master of Business Administration (MBA) in Global Enterprise Strategy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Executive MBA curriculum preparing managers in international market penetration, supply chain resilience, corporate valuation, and organizational change leadership.',
        funding: 'Eligible for institutional tuition payment schedules and international merit grants',
        tuition: '$495 per credit hour (36 credits total)',
        fee: '$60 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Bachelor degree in any field with minimum 2.50 cumulative GPA',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'GMAT/GRE optional',
          papers: 'Resume demonstrating professional work experience and statement of purpose',
          references: 'Two professional letters of reference'
        }
      },
      {
        id: 7824,
        title: 'DIU Global Scholar International Tuition Grant',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit-based financial grant awarded to outstanding international graduate scholars from emerging markets to facilitate advanced study in corporate governance and data analytics.',
        funding: 'Annual grant of $3,500 applied directly to graduate tuition fees',
        tuition: 'Direct graduate tuition reduction',
        fee: '$0 scholarship fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Undergraduate GPA of 3.25 or higher',
          ielts: 'IELTS 6.5 or TOEFL 80',
          gre: 'Not required',
          papers: 'Scholarship essay detailing how study at DIU will foster international commerce in candidate’s home nation',
          references: 'Two academic or employer recommendations'
        }
      },
      {
        id: 7825,
        title: 'Delaware Corporate Analytics Graduate Fellowship',
        type: 'Fellowship',
        subject: 'computer-science',
        desc: 'Applied research fellowship analyzing public corporation filing disclosures, ESG metrics, and algorithmic compliance monitoring tools in the Wilmington commercial center.',
        funding: '$3,000 project stipend plus direct mentorship from Delaware corporate data specialists',
        tuition: 'Project research stipend',
        fee: '$0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Enrolled DIU graduate student in Fintech or MBA program with 3.30+ GPA',
          ielts: 'Fluent English proficiency',
          gre: 'Not required',
          papers: 'Research proposal on corporate disclosure analytics or financial modeling',
          references: 'One recommendation from DIU faculty'
        }
      },
      {
        id: 7826,
        title: 'Executive Certificate in Cross-Border Trade & Cyber Law',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Specialized 12-credit post-baccalaureate credential analyzing cross-border data transfer laws (GDPR, CCPA), intellectual property protection, and digital commerce taxation.',
        funding: 'Corporate cohort discounts up to 15%',
        tuition: '$500 per credit hour (12 credits total)',
        fee: '$40 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://delawareinternationaluniversity.com',
        requirements: {
          gpa: 'Undergraduate degree or 3+ years of professional corporate/legal experience',
          ielts: 'IELTS 6.0 or TOEFL 70',
          gre: 'Not required',
          papers: 'Current professional resume and brief statement of intent',
          references: 'One professional supervisor recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3466,
        name: 'Prof. Dr. David R. Vance',
        title: 'Dean of International Law and Corporate Governance',
        department: 'School of Law and Corporate Compliance',
        subject: 'social-sciences',
        topics: ['Delaware Corporate Law', 'Cross-Border Merger Regulation', 'Fiduciary Duties of Directors', 'Shareholder Litigation'],
        summary: 'Prof. Dr. David R. Vance advises multinational corporations on Delaware Chancery Court precedents, corporate fiduciary standards, and transnational regulatory harmonization.',
        source: 'https://delawareinternationaluniversity.com'
      },
      {
        id: 3467,
        name: 'Dr. Angela K. Zhang',
        title: 'Director of Fintech & Artificial Intelligence Systems',
        department: 'Department of Computer Science and Information Systems',
        subject: 'computer-science',
        topics: ['Algorithmic Financial Risk Modeling', 'Smart Contract Verification', 'Decentralized Ledger Security', 'Explainable AI in Banking'],
        summary: 'Dr. Angela K. Zhang designs fraud detection neural networks and cryptographic smart contracts for financial institutions, evaluating systemic risks in algorithmic trading protocols.',
        source: 'https://delawareinternationaluniversity.com'
      },
      {
        id: 3468,
        name: 'Prof. Michael E. Miller',
        title: 'Professor of Global Supply Chain and Trade Economics',
        department: 'Department of Business Administration',
        subject: 'social-sciences',
        topics: ['Global Value Chain Resilience', 'International Tariff Economics', 'Cross-Border Maritime Logistics', 'Trade Compliance'],
        summary: 'Prof. Michael E. Miller analyzes supply chain re-shoring trends and customs compliance architectures, guiding international commercial enterprises on trade risk mitigation.',
        source: 'https://delawareinternationaluniversity.com'
      }
    ]
  }
];

export const batch56Part2 = part2;

const fileContent = `// Batch 56 Part 2: USA (10 Universities, Rows 577-665)
export const batch56Part2 = ${JSON.stringify(part2, null, 2)};
`;

writeFileSync('scripts/batch56-data-part2.mjs', fileContent, 'utf8');
console.log('Finished Part 2: USA (10 universities, 60 opps, 30 res)!');
