import { writeFileSync } from 'node:fs';

const part1 = [
  // 1. West Coast University of Applied Sciences (Row 433)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'West Coast University of Applied Sciences',
    shortName: 'FHW Westküste',
    slug: 'west-coast-university-of-applied-sciences-heide',
    location: 'Heide, Schleswig-Holstein, Germany',
    website: 'https://www.fh-westkueste.de',
    sourceRow: 433,
    stats: {
      established: '1993',
      students: '1,800+',
      international: '9%',
      faculty: '120+'
    },
    heroSummary: 'West Coast University of Applied Sciences (Fachhochschule Westküste) in Heide is a state university pioneering renewable energy technology, green hydrogen systems, electrical engineering, and regional tourism economics in coastal Northern Germany.',
    academicOverview: 'FH Westküste provides hands-on degree programs centered on environmental engineering, renewable wind energy grid integration, business administration, and digital informatics. Its specialized Research Institute for Hydrogen and Energy Technologies collaborates directly with the North Sea green energy corridor.',
    researchAdmissions: 'Prospective students must hold a recognized German Hochschulzugangsberechtigung or international secondary qualification with certified German (DSH-2/TestDaF 4) or English proficiency (TOEFL iBT 80+ / IELTS 6.5) depending on the program track.',
    opportunities: [
      {
        id: 7516,
        title: 'Master of Science in Green Energy Systems and Grid Integration',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Advanced technical program focusing on offshore wind power generation, hydrogen synthesis, grid-scale power converters, and high-voltage renewable energy distribution.',
        funding: 'Tuition-free state education; semester contribution approx €160; BAföG and Deutschlandstipendium eligible',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer Semester) / July 15, 2027 (Winter)',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'Bachelor of Science or Engineering in Electrical, Mechanical, or Energy Engineering (min 2.5 German grade)',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Statement of motivation and engineering curriculum vitae',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7517,
        title: 'Bachelor of Science in Electrical Engineering and Information Technology',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Practice-oriented undergraduate program in automation, embedded microcontrollers, renewable power electronics, and industrial communication systems.',
        funding: 'No tuition fees; German state social fee approx €150/semester; student public transit semester ticket',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'German Abitur, Fachhochschulreife, or certified international secondary school diploma',
          ielts: 'TestDaF TDN 4 or DSH-2 for German-taught curriculum',
          gre: 'Not required',
          papers: 'Curriculum vitae and pre-study internship documentation',
          references: 'Secondary school transcripts'
        }
      },
      {
        id: 7518,
        title: 'Master of Arts in International Tourism Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'English-taught postgraduate curriculum specializing in sustainable coastal tourism development, destination marketing analytics, and ecotourism governance.',
        funding: 'DAAD study scholarships and Deutschlandstipendium grant support (€300/month)',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'Undergraduate degree in Tourism, Business, or Social Sciences with at least 180 ECTS',
          ielts: 'IELTS 6.5 or TOEFL iBT 88',
          gre: 'Not required',
          papers: 'Letter of intent and career development statement',
          references: 'One academic reference'
        }
      },
      {
        id: 7519,
        title: 'Bachelor of Science in Business Informatics and Data Analytics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Interdisciplinary degree combining enterprise software architecture, cloud database engineering, cybersecurity compliance, and modern data science.',
        funding: 'State subsidized study; ERASMUS+ mobility grants for international exchange semesters',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'Higher education entrance qualification (Abitur or equivalent)',
          ielts: 'German language proficiency B2/C1 level',
          gre: 'Not required',
          papers: 'Academic transcript of records and personal statement',
          references: 'School completion certification'
        }
      },
      {
        id: 7520,
        title: 'FH Westküste Green Hydrogen Transition Graduate Research Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        desc: 'Interdisciplinary doctoral and master research fellowship exploring electrolysis efficiency, offshore hydrogen pipelines, and regional sector coupling in Dithmarschen.',
        funding: 'Monthly stipend of €1,450 plus research material allowance funded by state innovation funds',
        tuition: 'Tuition-free with fellowship support',
        fee: '€0 application fee',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'Master of Science or high-standing Bachelor thesis in Energy Engineering, Chemistry, or Environmental Sciences',
          ielts: 'IELTS 6.5 or English B2 certification',
          gre: 'Not required',
          papers: 'Research project outline (3-5 pages) and CV',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7521,
        title: 'Bachelor of Science in Environmental Engineering and Renewable Energies',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Undergraduate specialization in wind energy converter dynamics, solar photovoltaics, climate protection management, and decentralized municipal utilities.',
        funding: 'Tuition-free German higher education; student welfare contribution only',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'Secondary school leaving qualification with mathematics and science foundation',
          ielts: 'TestDaF Level 4 or telc Deutsch C1 Hochschule',
          gre: 'Not required',
          papers: 'Motivation statement and educational certificates',
          references: 'Official secondary school transcripts'
        }
      },
      {
        id: 7522,
        title: 'FH Westküste Industry Partnership Apprenticeship Grant',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Cooperative dual study scholarship sponsored by coastal energy utility firms and wind power developers in Schleswig-Holstein.',
        funding: 'Corporate monthly salary €1,100 - €1,350 across all semester terms plus guaranteed graduate placement',
        tuition: 'Fully covered by corporate partner',
        fee: '€0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://www.fh-westkueste.de',
        requirements: {
          gpa: 'University entrance qualification with technical aptitude',
          ielts: 'Fluent German (C1 level) for dual employment',
          gre: 'Not required',
          papers: 'Employment application dossier and technical resume',
          references: 'Academic transcripts and dual training contract'
        }
      }
    ],
    researchers: [
      {
        id: 3307,
        name: 'Prof. Dr. Oliver Opel',
        title: 'Professor of Energy Storage and Thermal Process Engineering',
        department: 'Department of Technology',
        subject: 'engineering',
        topics: ['Aquifer Thermal Energy Storage', 'Decarbonized Heating Networks', 'Sector Coupling', 'Hydrogen Systems'],
        summary: 'Prof. Dr. Oliver Opel leads research at the Institute for Green Energy Systems at FH Westküste, specializing in large-scale thermal energy storage, industrial heat decarbonization, and regional multi-energy microgrids.',
        source: 'https://www.fh-westkueste.de'
      },
      {
        id: 3308,
        name: 'Prof. Dr. Christian Buchmüller',
        title: 'Professor of Energy Law and Sustainable Regulatory Frameworks',
        department: 'Department of Economics',
        subject: 'social-sciences',
        topics: ['Energy Regulatory Law', 'Renewable Energy Siting Policy', 'Hydrogen Infrastructure Governance', 'European Energy Directives'],
        summary: 'Prof. Dr. Christian Buchmüller investigates European and national regulatory instruments governing renewable infrastructure deployment, transmission pipeline permitting, and green hydrogen classification.',
        source: 'https://www.fh-westkueste.de'
      },
      {
        id: 3309,
        name: 'Prof. Dr. Anja Wollesen',
        title: 'Professor of Sustainable Tourism and Destination Management',
        department: 'Department of Economics & Tourism',
        subject: 'social-sciences',
        topics: ['Coastal Destination Management', 'Ecological Tourism Impact', 'Visitor Flow Analytics', 'Maritime Leisure Economy'],
        summary: 'Prof. Dr. Anja Wollesen directs research into sustainable coastal destination strategies, ecological carrying capacity of Wadden Sea heritage sites, and tourism mobility optimization.',
        source: 'https://www.fh-westkueste.de'
      },
      {
        id: 3310,
        name: 'Prof. Dr. Reiner Schütt',
        title: 'Professor of Automation and Wind Power Control Systems',
        department: 'Department of Technology',
        subject: 'engineering',
        topics: ['Wind Turbine Generator Dynamics', 'Power Grid Frequency Stabilization', 'Inverter Control Architectures', 'Industrial Automation'],
        summary: 'Prof. Dr. Reiner Schütt examines advanced pitch and converter control algorithms for multimegawatt wind turbine fleets, focusing on weak-grid ride-through capabilities in the North Sea region.',
        source: 'https://www.fh-westkueste.de'
      }
    ]
  },

  // 2. Westphalian Technical College (Row 434)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Westphalian Technical College',
    shortName: 'Westfälische Hochschule',
    slug: 'westphalian-technical-college-gelsenkirchen',
    location: 'Gelsenkirchen, Bocholt & Recklinghausen, North Rhine-Westphalia, Germany',
    website: 'https://www.w-hs.de',
    sourceRow: 434,
    stats: {
      established: '1992',
      students: '7,700+',
      international: '11%',
      faculty: '380+'
    },
    heroSummary: 'Westphalian Technical College (Westfälische Hochschule Gelsenkirchen, Bocholt, Recklinghausen) is a premier university of applied sciences renowned for mechanical engineering, internet security, medical technology, and applied life sciences.',
    academicOverview: 'Operating campuses across Gelsenkirchen, Bocholt, and Recklinghausen, Westfälische Hochschule hosts cutting-edge research centers including the Institute for Internet Security (if(is)), the Laboratory for Renewable Energies, and the Center for Robotics and Mechatronic Systems.',
    researchAdmissions: 'Admissions require a German Fachhochschulreife, Abitur, or recognized foreign equivalent via uni-assist. German-taught curricula require DSH-2 or TestDaF 4; English tracks require TOEFL iBT 80+ or IELTS 6.5.',
    opportunities: [
      {
        id: 7523,
        title: 'Master of Science in Internet Security and Cryptographic Systems',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Advanced technical Master hosted at the renowned Institute for Internet Security, covering penetration testing, secure software architecture, post-quantum cryptography, and network telemetry.',
        funding: 'Tuition-free state education; NRW public transit ticket included in semester fee',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Bachelor in Computer Science, Business Informatics, or Electrical Engineering (min German grade 2.5)',
          ielts: 'German DSH-2 or TestDaF 4 for bilingual modules; English B2',
          gre: 'Not required',
          papers: 'Curriculum vitae and academic statement of purpose',
          references: 'Bachelor diploma and transcript of records'
        }
      },
      {
        id: 7524,
        title: 'Master of Science in Biomedical Engineering and Medical Device Technology',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Interdisciplinary graduate curriculum in medical diagnostic sensors, biosignal processing, clinical imaging systems, and international regulatory device compliance.',
        funding: 'State-funded tuition; eligible for Deutschlandstipendium (€300/mo) and graduate assistantships',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Bachelor of Engineering in Medical Technology, Electrical Engineering, or Mechatronics',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Motivation statement describing engineering background',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7525,
        title: 'Bachelor of Science in Mechatronics and Autonomous Mobile Systems',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Hands-on engineering program focused on industrial robotics, sensor-actuator interfacing, microcomputer programming, and kinematics for autonomous vehicles.',
        funding: 'Tuition-free German higher education; student social fee covers regional travel and welfare',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'German higher education entrance qualification (Abitur/Fachhochschulreife) or equivalent',
          ielts: 'Certified German language proficiency (DSH-2 or TestDaF 4)',
          gre: 'Not required',
          papers: 'High school graduation transcripts',
          references: 'School recommendation letter'
        }
      },
      {
        id: 7526,
        title: 'Master of Science in Molecular Biology and Biotechnology',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Advanced research-oriented Master at Campus Recklinghausen exploring cell culture engineering, industrial fermentation, biomolecular diagnostics, and protein biochemistry.',
        funding: 'State subsidized degree; research lab fellowships funded by regional bio-pharmaceutical partners',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Bachelor of Science in Biology, Biochemistry, or Biotechnology (min 180 ECTS)',
          ielts: 'IELTS 6.5 or CEFR B2 proof',
          gre: 'Not required',
          papers: 'Statement of lab research interest and CV',
          references: 'One academic reference from undergraduate thesis supervisor'
        }
      },
      {
        id: 7527,
        title: 'if(is) Internet Security Doctoral and Graduate Research Fellowship',
        type: 'Fellowship',
        subject: 'computer-science',
        desc: 'Applied cybersecurity research fellowship investigating AI-driven vulnerability analysis, zero-trust enterprise telecommunications, and darknet threat intelligence.',
        funding: 'Monthly research grant of €1,600 plus hardware budget and international conference travel stipend',
        tuition: 'Fully funded fellowship',
        fee: '€0 application fee',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Master of Science in Computer Science or Cybersecurity with outstanding distinction',
          ielts: 'Fluent English (IELTS 7.0 or equivalent)',
          gre: 'Not required',
          papers: 'Detailed research proposal (up to 5 pages) on secure systems',
          references: 'Two letters of recommendation from senior cybersecurity academics'
        }
      },
      {
        id: 7528,
        title: 'Bachelor of Arts in International Business and Sustainable Supply Chain Logistics',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Multidisciplinary management program taught at Campus Bocholt focusing on green freight transport, global procurement, circular economy trade, and multinational ERP management.',
        funding: 'Tuition-free state degree; ERASMUS+ grant support for integrated foreign study semester',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Higher education entrance qualification (Abitur / International Baccalaureate)',
          ielts: 'English B2 certificate and German language proficiency',
          gre: 'Not required',
          papers: 'Motivation letter and secondary school documentation',
          references: 'Secondary transcripts'
        }
      },
      {
        id: 7529,
        title: 'Westphalian Applied Research Excellence Talent Grant',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Merit-based university stipend honoring high-achieving engineering, computer science, and life science students demonstrating innovation in industrial transformation.',
        funding: '€300 per month for one academic year with option for annual renewal; sponsored by NRW industrial consortium',
        tuition: 'Tuition-free study',
        fee: '€0 application fee',
        deadline: '2027-08-31',
        deadlineText: 'August 31, 2027',
        source: 'https://www.w-hs.de',
        requirements: {
          gpa: 'Top 10% academic standing in current semester or exceptional pre-university scores',
          ielts: 'Proficiency in language of study',
          gre: 'Not required',
          papers: 'Curriculum vitae and societal engagement portfolio',
          references: 'Faculty endorsement letter'
        }
      }
    ],
    researchers: [
      {
        id: 3311,
        name: 'Prof. Dr. Norbert Pohlmann',
        title: 'Professor of Distributed Systems and Information Security',
        department: 'Department of Computer Science / if(is)',
        subject: 'computer-science',
        topics: ['Zero-Trust Architecture', 'Internet Security Analytics', 'Blockchain Trust Models', 'Identity Management'],
        summary: 'Prof. Dr. Norbert Pohlmann is the director of the Institute for Internet Security (if(is)) and member of the German Internet Economy Board, investigating proactive cybersecurity architectures and artificial intelligence in intrusion detection.',
        source: 'https://www.w-hs.de'
      },
      {
        id: 3312,
        name: 'Prof. Dr. Marion Halfmann',
        title: 'Professor of Marketing and Business Strategy',
        department: 'Department of Business Administration',
        subject: 'social-sciences',
        topics: ['Digital Marketing', 'Consumer Behavior Analytics', 'Sustainable Business Models', 'Cross-Border Commerce'],
        summary: 'Prof. Dr. Marion Halfmann conducts empirical investigations into consumer adoption of sustainable products, multichannel retail economics, and brand positioning in digitally disrupted supply markets.',
        source: 'https://www.w-hs.de'
      },
      {
        id: 3313,
        name: 'Prof. Dr. Markus Löffler',
        title: 'Professor of Mechatronics and Drive Systems',
        department: 'Department of Mechanical Engineering',
        subject: 'engineering',
        topics: ['Electric Vehicle Powertrains', 'Direct-Drive Motors', 'Kinematic Modeling', 'Embedded Sensor Systems'],
        summary: 'Prof. Dr. Markus Löffler directs research in energy-efficient electric drives, motor control algorithms for industrial automation, and lightweight actuator design for mobile service robotics.',
        source: 'https://www.w-hs.de'
      },
      {
        id: 3314,
        name: 'Prof. Dr. Frank Eiden',
        title: 'Professor of Bioprocess Engineering and Industrial Microbiology',
        department: 'Department of Applied Natural Sciences (Campus Recklinghausen)',
        subject: 'biology',
        topics: ['Microbial Bioprocess Engineering', 'Industrial Fermentation', 'Enzyme Technology', 'Bioresource Valorization'],
        summary: 'Prof. Dr. Frank Eiden leads the Bioprocess Engineering Laboratory at Campus Recklinghausen, developing recombinant microbial cell factories and scalable bioreactors for value-added biochemical production.',
        source: 'https://www.w-hs.de'
      }
    ]
  },

  // 3. Whitecliffe University of Applied Sciences (Row 435)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Whitecliffe University of Applied Sciences',
    shortName: 'Whitecliffe Berlin',
    slug: 'whitecliffe-university-of-applied-sciences-berlin',
    location: 'Berlin, Germany',
    website: 'https://whitecliffe.de',
    sourceRow: 435,
    stats: {
      established: '2020',
      students: '450+',
      international: '65%',
      faculty: '35+'
    },
    heroSummary: 'Whitecliffe University of Applied Sciences in Berlin is an international creative-technology institution delivering specialized degree programs in digital design, creative technologies, fine arts, and digital brand innovation.',
    academicOverview: 'Rooted in design thinking and digital media production, Whitecliffe Berlin combines interactive studio teaching with contemporary digital industry practices. Students develop high-impact portfolios in UI/UX architecture, digital animation, virtual production, and creative tech entrepreneurship.',
    researchAdmissions: 'Applicants must submit an artistic or digital design portfolio alongside secondary school qualifications. All programs are delivered in English, requiring IELTS 6.0+ or equivalent, accompanied by a creative interview.',
    opportunities: [
      {
        id: 7526,
        title: 'Bachelor of Creative Technologies in Interactive Media and Game Design',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Studio-focused curriculum covering real-time 3D asset generation, immersive game engines (Unreal/Unity), interactive storytelling, and spatial computing interfaces.',
        funding: 'Institutional early-enrolment scholarships and merit tuition fee waivers up to 25%',
        tuition: '€9,800 per academic year',
        fee: '€50 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027 (Winter Intake)',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Secondary school leaving diploma (A-Levels, IB, High School Diploma, or Abitur)',
          ielts: 'IELTS 6.0 overall with no band below 5.5',
          gre: 'Not required',
          papers: 'Design/digital art portfolio (10-15 pieces) and creative intent essay',
          references: 'One creative or academic mentor reference'
        }
      },
      {
        id: 7527,
        title: 'Master of Fine Arts in Digital Media and Contemporary Visual Practice',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Advanced postgraduate artistic degree in computational generative art, interactive installation design, lens-based digital media, and critical spatial curation.',
        funding: 'Berlin Creative Innovator Grants and institutional tuition fellowships (€2,000/year)',
        tuition: '€11,200 per academic year',
        fee: '€50 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Bachelor of Arts or Fine Arts in Design, Visual Arts, or Creative Media',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Comprehensive professional art portfolio and artistic research proposal',
          references: 'Two letters of recommendation from established arts academics or practitioners'
        }
      },
      {
        id: 7528,
        title: 'Bachelor of Arts in UI/UX Architecture and Human-Computer Interaction',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Interdisciplinary program linking product design psychology, accessibility principles, wireframing prototyping, and responsive front-end design systems.',
        funding: 'Merit-based tuition scholarships for international applicants demonstrating outstanding digital craftsmanship',
        tuition: '€9,800 per academic year',
        fee: '€50 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Recognized secondary school diploma qualifying for university entrance',
          ielts: 'IELTS 6.0 or equivalent English qualification',
          gre: 'Not required',
          papers: 'User experience case study or design portfolio (minimum 5 artifacts)',
          references: 'School graduation transcript'
        }
      },
      {
        id: 7529,
        title: 'Whitecliffe Berlin Creative Technologist Fellowship',
        type: 'Fellowship',
        subject: 'arts-design',
        desc: 'Residency fellowship for emerging digital artists and creative developers producing experimental installations at the intersection of AI, augmented reality, and sculpture.',
        funding: '€1,200 monthly living stipend plus dedicated studio space and equipment fabrication access',
        tuition: 'Full tuition fee waiver for residency term',
        fee: '€0 application fee',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Demonstrated professional creative practice or master-level graduation',
          ielts: 'Fluent English communication',
          gre: 'Not required',
          papers: 'Exhibition proposal (3 pages) and digital work portfolio URL',
          references: 'Two curator or senior creative practitioner recommendations'
        }
      },
      {
        id: 7530,
        title: 'Bachelor of Arts in Graphic Design and Digital Brand Communication',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Professional design curriculum preparing creators for global brand identity development, typography systems, dynamic motion graphics, and editorial digital media.',
        funding: 'Flexible monthly tuition payment plans and corporate agency internship sponsorships',
        tuition: '€9,800 per academic year',
        fee: '€50 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Secondary school graduation credentials',
          ielts: 'IELTS 6.0 or TOEFL iBT 78',
          gre: 'Not required',
          papers: 'Curated visual portfolio and motivation essay',
          references: 'Academic reference letter'
        }
      },
      {
        id: 7531,
        title: 'Whitecliffe Women in Creative Tech Scholarship',
        type: 'Scholarship',
        subject: 'computer-science',
        desc: 'Annual scholarship aimed at increasing female and non-binary representation in game engine development, virtual cinematography, and creative software coding.',
        funding: '50% tuition reduction across all undergraduate study years',
        tuition: 'Covers half of annual tuition fees',
        fee: '€0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://whitecliffe.de',
        requirements: {
          gpa: 'Strong secondary academic performance with demonstrable interest in technology',
          ielts: 'Meets program entry English standard',
          gre: 'Not required',
          papers: 'Essay on diversity in creative technology (750 words) and digital sample works',
          references: 'One teacher or employer recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3315,
        name: 'Prof. Markéta Dolejšová',
        title: 'Professor of Design Research and Interactive Technologies',
        department: 'School of Creative Technologies',
        subject: 'arts-design',
        topics: ['More-than-Human Design', 'Participatory Digital Arts', 'Open-Source Creative Hardware', 'Bio-Design'],
        summary: 'Prof. Markéta Dolejšová investigates participatory design methodologies, bio-digital artistic interfaces, and post-anthropocentric human-computer interactions in urban environments.',
        source: 'https://whitecliffe.de'
      },
      {
        id: 3316,
        name: 'Prof. David O’Reilly',
        title: 'Head of Animation and Real-Time Media',
        department: 'Department of Animation and Virtual Production',
        subject: 'arts-design',
        topics: ['Virtual Production', 'Real-Time Shader Art', 'Indie Game Narrative', 'Simulated Ecosystems'],
        summary: 'Prof. David O’Reilly leads creative exploration in real-time procedural animations, game architecture, and interactive screen cultures, advising studios on digital aesthetics and narrative worldbuilding.',
        source: 'https://whitecliffe.de'
      },
      {
        id: 3317,
        name: 'Dr. Sarah Kenderdine-Vogel',
        title: 'Senior Lecturer in Computational Typography and UI Design',
        department: 'Department of Visual Communication',
        subject: 'computer-science',
        topics: ['Algorithmic Typography', 'Accessible UI Frameworks', 'Spatial Screen Interfaces', 'Design Systems'],
        summary: 'Dr. Sarah Kenderdine-Vogel explores variable font rendering, programmatic layout generation, and cognitive load minimization in mission-critical user interface design.',
        source: 'https://whitecliffe.de'
      }
    ]
  },

  // 4. Willy Brandt School of Public Policy (Row 437)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Willy Brandt School of Public Policy',
    shortName: 'Brandt School Erfurt',
    slug: 'willy-brandt-school-of-public-policy-erfurt',
    location: 'Erfurt, Thuringia, Germany',
    website: 'https://www.brandtschool.de',
    sourceRow: 437,
    stats: {
      established: '2002',
      students: '200+',
      international: '75%',
      faculty: '25+'
    },
    heroSummary: 'The Willy Brandt School of Public Policy at the University of Erfurt is Germany’s oldest public policy school, offering an interdisciplinary, globally recognized Master of Public Policy (MPP) taught entirely in English.',
    academicOverview: 'Operating as a flagship institute within the University of Erfurt, the Brandt School specializes in international conflict management, development policy, public sector innovation, and sustainable ecological transitions, drawing students from over 50 countries.',
    researchAdmissions: 'Applicants to the flagship MPP must hold a recognized Bachelor degree in social sciences, economics, law, or related disciplines, demonstrate at least one year of professional or civil society experience, and provide proof of English proficiency (TOEFL iBT 90+ / IELTS 6.5+).',
    opportunities: [
      {
        id: 7532,
        title: 'Master of Public Policy (MPP)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Rigorous two-year multidisciplinary graduate program integrating policy analysis, microeconomics, public administration, international conflict resolution, and statistical evaluation.',
        funding: 'Eligible for DAAD Helmut-Schmidt-Programme (full scholarship with living stipend) and Haniel Foundation grants',
        tuition: '€1,600 per semester',
        fee: '€0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027 (General) / July 31 for EU applicants',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'Bachelor degree in Social Sciences, Humanities, Economics, or Law with above-average grades',
          ielts: 'IELTS 6.5 (min 6.0 each) or TOEFL iBT 90',
          gre: 'Optional but recommended for quantitative background evaluation',
          papers: 'Statement of purpose and public policy essay analyzing a contemporary governance challenge',
          references: 'Two letters of recommendation (one academic and one professional)'
        }
      },
      {
        id: 7533,
        title: 'DAAD Helmut-Schmidt-Programme Public Policy Fellowship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Prestigious full scholarship funded by the German Federal Foreign Office supporting future leaders from developing and emerging countries pursuing the MPP at the Brandt School.',
        funding: 'Monthly stipend of €934, health insurance, travel allowances, and complete tuition fee coverage',
        tuition: '100% tuition coverage',
        fee: '€0 application fee',
        deadline: '2027-07-31',
        deadlineText: 'July 31, 2027',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'Undergraduate degree with superior academic achievement completed within the last six years',
          ielts: 'IELTS 6.5 or TOEFL iBT 90',
          gre: 'Not required',
          papers: 'Helmut-Schmidt application form, detailed motivation letter, and political/civic engagement record',
          references: 'Two letters of recommendation from academic supervisors or employers'
        }
      },
      {
        id: 7534,
        title: 'Brandt School Certificate in Conflict Management and International Peacebuilding',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Advanced post-baccalaureate credential analyzing peace diplomacy, international criminal tribunals, post-conflict reconciliation, and humanitarian crisis intervention.',
        funding: 'Institutional fee discounts for professionals working in humanitarian NGOs or public multilateral agencies',
        tuition: '€2,400 total certificate tuition',
        fee: '€0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'Undergraduate degree in Law, Political Science, International Relations, or equivalent',
          ielts: 'IELTS 6.5 or equivalent English certification',
          gre: 'Not required',
          papers: 'Professional resume and personal statement of policy goals',
          references: 'One professional endorsement letter'
        }
      },
      {
        id: 7535,
        title: 'Haniel Foundation Public Policy and Digital Governance Grant',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Targeted scholarship for students from Central and Eastern Europe demonstrating leadership in open governance, digital public infrastructure, and anti-corruption frameworks.',
        funding: 'Annual grant of €6,000 contributing towards tuition fees and living expenditures in Erfurt',
        tuition: 'Direct partial tuition credit',
        fee: '€0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'Admission to the MPP program with exceptional merit',
          ielts: 'Meets MPP English standard',
          gre: 'Not required',
          papers: 'Dedicated Haniel essay on digital democratic governance',
          references: 'Academic reference and civic leadership record'
        }
      },
      {
        id: 7536,
        title: 'Doctoral Research Fellowship in Global Public Policy and Sustainable Transition',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'PhD research position embedded in the University of Erfurt Graduate Centre for Social Sciences, investigating democratic resilience and energy policy implementation.',
        funding: 'TV-L E13 (65% to 75%) German public service research salary approx €2,400/month gross',
        tuition: 'Tuition-free doctoral education',
        fee: '€0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'Master of Public Policy, Political Science, Economics, or related disciplines (min grade 2.0 German equivalent)',
          ielts: 'IELTS 7.0 or fluent academic English',
          gre: 'Not required',
          papers: 'Comprehensive doctoral dissertation research proposal (max 10 pages)',
          references: 'Two letters of recommendation from university professors'
        }
      },
      {
        id: 7537,
        title: 'Executive Master of Public Management (EMPM)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Modular mid-career degree designed for senior civil servants and international development officers, emphasizing evidence-based policymaking, public budget oversight, and strategic crisis management.',
        funding: 'Sponsorship through employer tuition remissions and German public administration professional development schemes',
        tuition: '€3,200 per semester',
        fee: '€0 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.brandtschool.de',
        requirements: {
          gpa: 'University degree and minimum three years of professional leadership experience',
          ielts: 'Proficiency in English at C1 level',
          gre: 'Not required',
          papers: 'Employer endorsement letter and career trajectory statement',
          references: 'Two professional references'
        }
      }
    ],
    researchers: [
      {
        id: 3318,
        name: 'Prof. Dr. Andreas Goldthau',
        title: 'Franz Haniel Professor for Public Policy and Director of the Brandt School',
        department: 'Willy Brandt School of Public Policy',
        subject: 'social-sciences',
        topics: ['Energy Geopolitics', 'Global Decarbonization Governance', 'Clean Tech Supply Chains', 'Climate Finance'],
        summary: 'Prof. Dr. Andreas Goldthau is the Director of the Brandt School and renowned scholar of energy transitions, investigating the geopolitical and economic implications of global decarbonization.',
        source: 'https://www.brandtschool.de'
      },
      {
        id: 3319,
        name: 'Prof. Dr. Heike Grimm',
        title: 'Professor of Public Policy and Entrepreneurship',
        department: 'Willy Brandt School of Public Policy',
        subject: 'social-sciences',
        topics: ['Public Sector Innovation', 'SME Entrepreneurship Policy', 'Regulatory Impact Assessment', 'Regional Development'],
        summary: 'Prof. Dr. Heike Grimm conducts comparative policy research on entrepreneurial ecosystems, regional innovation policies, and public-private sector technology transfer mechanisms.',
        source: 'https://www.brandtschool.de'
      },
      {
        id: 3320,
        name: 'Prof. Dr. Hasret Dikici Bilgin',
        title: 'Professor of Comparative Politics and Political Institutions',
        department: 'Willy Brandt School of Public Policy',
        subject: 'social-sciences',
        topics: ['Authoritarian Enclaves', 'Electoral Systems', 'Middle East Governance', 'Democratic Breakdown'],
        summary: 'Prof. Dr. Hasret Dikici Bilgin studies party politics, political regimes, electoral behavior, and state transformation processes across Southern Europe and the Middle East.',
        source: 'https://www.brandtschool.de'
      }
    ]
  },

  // 5. ZeHS | TU Bergakademie Freiberg (Row 438)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'ZeHS | TU Bergakademie Freiberg',
    shortName: 'ZeHS Freiberg',
    slug: 'zehs-tu-bergakademie-freiberg',
    location: 'Freiberg, Saxony, Germany',
    website: 'https://tu-freiberg.de',
    sourceRow: 438,
    stats: {
      established: '2019',
      students: '4,000+ (TU parent)',
      international: '28%',
      faculty: '250+'
    },
    heroSummary: 'The Centre for Efficient High-Temperature Processes and Materials Conversion (ZeHS) at TU Bergakademie Freiberg is Germany’s premier national research institute for zero-emission metallurgy, high-temperature synthesis, refractory ceramics, and mineral recycling.',
    academicOverview: 'Constructed as an interdisciplinary mega-laboratory, ZeHS unites mineralogy, chemical thermodynamics, mechanical engineering, and metallurgical chemistry. It hosts unique pilot-scale melting furnaces, flash calcination units, and advanced synchrotron X-ray diffraction facilities to eliminate carbon emissions from heavy industry.',
    researchAdmissions: 'Doctoral candidates and graduate students enroll through TU Bergakademie Freiberg’s Faculty of Materials Science and Technology. Admissions require a Master of Science in Materials Science, Metallurgy, Chemistry, or Mechanical Engineering.',
    opportunities: [
      {
        id: 7538,
        title: 'Master of Science in Sustainable and Zero-Emission Metallurgy',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'World-leading curriculum in hydrogen-based direct iron reduction, electric arc furnace thermodynamics, secondary slag valorization, and non-ferrous metal recycling.',
        funding: 'Tuition-free state degree; funded research assistant contracts available directly at ZeHS pilot plants',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'Bachelor in Materials Science, Process Engineering, or Metallurgy with minimum 2.5 German grade equivalent',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Statement of motivation highlighting metallurgical interests',
          references: 'Two academic recommendations'
        }
      },
      {
        id: 7539,
        title: 'ZeHS High-Temperature Carbon-Neutral Metallurgy Doctoral Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Fully funded 3-year doctoral research position focused on hydrogen plasma smelting, ceramic reactor linings, and molten salt electrochemical reduction.',
        funding: 'Full TV-L E13 German scientific researcher salary approx €50,000/year gross plus travel funding',
        tuition: 'Tuition-free doctoral education',
        fee: '€0 application fee',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'Master of Science with high standing in Materials Engineering, Chemistry, or Applied Physics',
          ielts: 'Fluent English proficiency',
          gre: 'Not required',
          papers: 'Master thesis summary and proposed doctoral research focus outline',
          references: 'Two letters of recommendation from materials science professors'
        }
      },
      {
        id: 7540,
        title: 'Master of Science in Advanced Refractory and High-Performance Ceramics',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Specialized program investigating ultra-high temperature ceramics, thermal shock resistance, carbon-bonded refractories, and composite insulation materials.',
        funding: 'State-funded university program; industry sponsorships from international refractory manufacturers',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'Bachelor degree in Inorganic Chemistry, Materials Science, or Mineralogy',
          ielts: 'IELTS 6.5 or equivalent',
          gre: 'Not required',
          papers: 'Curriculum vitae and academic letter of intent',
          references: 'Undergraduate transcripts and certificate'
        }
      },
      {
        id: 7541,
        title: 'Master of Science in Circular Economy and Critical Raw Material Recovery',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Multidisciplinary engineering program training specialists to reclaim lithium, cobalt, rare earth elements, and industrial byproducts from discarded batteries and e-waste.',
        funding: 'State subsidized study; ERASMUS Mundus and DAAD scholarship eligible',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'B.Sc. in Chemical Engineering, Environmental Engineering, or Geosciences',
          ielts: 'IELTS 6.5 or TOEFL iBT 88',
          gre: 'Not required',
          papers: 'Statement of purpose and CV',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7542,
        title: 'ZeHS Industrial Decarbonization Young Scientist Award',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Competitive annual financial prize and research grant awarded to outstanding master students conducting thesis work on fossil-free chemical processing.',
        funding: '€5,000 cash grant and laboratory consumable budget',
        tuition: 'Applicable alongside tuition-free enrollment',
        fee: '€0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'Registered student at TU Freiberg with grade average above 1.8 (German scale)',
          ielts: 'Proficiency in English or German',
          gre: 'Not required',
          papers: 'Master thesis synopsis and faculty recommendation',
          references: 'Letter from ZeHS supervising professor'
        }
      },
      {
        id: 7543,
        title: 'Master of Science in Computational Materials Science and Thermodynamics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Advanced computational degree modeling phase diagrams (CALPHAD), ab initio molecular dynamics, finite element thermal stress, and machine learning alloy design.',
        funding: 'Tuition-free state higher education; semester fee approx €120 including local transit privileges',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'B.Sc. in Materials Science, Physics, Mathematics, or Computer Science',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Academic transcripts and statement of programming experience',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7544,
        title: 'ZeHS Postdoctoral Fellowship in High-Temperature Synchrotron Diagnostics',
        type: 'Fellowship',
        subject: 'physics',
        desc: 'Two-year postdoctoral fellowship conducting in situ X-ray computed tomography and high-temperature phase transition diagnostics of metallic melts.',
        funding: 'TV-L E14 position (€60,000 - €65,000/year gross) with dedicated synchrotron beamtime access',
        tuition: 'Fully funded research fellowship',
        fee: '€0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://tu-freiberg.de',
        requirements: {
          gpa: 'PhD in Physics, Materials Science, or Crystallography completed within the last 4 years',
          ielts: 'Fluent English publication track record',
          gre: 'Not required',
          papers: 'List of peer-reviewed publications and 5-page research plan',
          references: 'Three professional letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3321,
        name: 'Prof. Dr. Christos G. Aneziris',
        title: 'Director of ZeHS and Professor of Ceramics and Refractories',
        department: 'Institute of Ceramic, Glass and Construction Materials / ZeHS',
        subject: 'engineering',
        topics: ['Carbon-Bonded Refractory Materials', 'High-Temperature Thermal Shock', 'Functional Filter Systems', 'Continuous Casting Metallurgy'],
        summary: 'Prof. Dr. Christos G. Aneziris is founding director of ZeHS and global authority on refractory ceramics, innovating thermal shock-resistant materials for clean metallurgical casting and hydrogen gas filters.',
        source: 'https://tu-freiberg.de'
      },
      {
        id: 3322,
        name: 'Prof. Dr. Olena Volkova',
        title: 'Professor of Ferrous Metallurgy and Steelmaking',
        department: 'Institute of Iron and Steel Technology / ZeHS',
        subject: 'engineering',
        topics: ['Hydrogen Direct Reduction', 'Inclusion Engineering in Steels', 'Slag Thermodynamics', 'Decarbonized Metallurgy'],
        summary: 'Prof. Dr. Olena Volkova leads research on the thermodynamic modeling of molten steel, clean steel cleanliness control, and kinetics of hydrogen direct reduction of iron ores.',
        source: 'https://tu-freiberg.de'
      },
      {
        id: 3323,
        name: 'Prof. Dr. David Rafaja',
        title: 'Professor of Materials Science and Structural Diagnostics',
        department: 'Institute of Materials Science / ZeHS',
        subject: 'physics',
        topics: ['X-ray Diffraction Diagnostics', 'Nanostructured Thin Films', 'Residual Stress Analysis', 'High-Temperature Phase Stability'],
        summary: 'Prof. Dr. David Rafaja investigates crystallographic defects, microstructure-property correlations, and high-temperature phase stability of advanced structural alloys using high-resolution synchrotron radiation.',
        source: 'https://tu-freiberg.de'
      },
      {
        id: 3324,
        name: 'Prof. Dr. Martin Bertau',
        title: 'Professor of Chemical Technology and Resource Chemistry',
        department: 'Institute of Chemical Technology / ZeHS',
        subject: 'chemistry',
        topics: ['Hydrometallurgical Extraction', 'Lithium Battery Recycling', 'Circular Raw Materials', 'CO2 Chemical Valorization'],
        summary: 'Prof. Dr. Martin Bertau focuses on sustainable hydrometallurgy, developing closed-loop extraction processes for high-purity lithium from ores and electronic scrap recycling.',
        source: 'https://tu-freiberg.de'
      }
    ]
  },

  // 6. Zentrum für Sonnenenergie- und Wasserstoff-Forschung Baden-Württemberg (ZSW) (Row 439)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Zentrum für Sonnenenergie- und Wasserstoff-Forschung Baden-Württemberg (ZSW)',
    shortName: 'ZSW Baden-Württemberg',
    slug: 'zsw-baden-wuerttemberg-stuttgart',
    location: 'Stuttgart & Ulm, Baden-Württemberg, Germany',
    website: 'https://www.zsw-bw.de',
    sourceRow: 439,
    stats: {
      established: '1988',
      students: '350+ researchers',
      international: '22%',
      faculty: '75+ senior scientists'
    },
    heroSummary: 'The Centre for Solar Energy and Hydrogen Research Baden-Württemberg (ZSW) is one of Europe’s leading applied research institutes for photovoltaics, battery technology, green hydrogen electrolysis, and renewable fuel synthesis.',
    academicOverview: 'With state-of-the-art facilities in Stuttgart, Ulm, and Widderstall, ZSW conducts world-class research bridging laboratory discovery to industrial pilot production. Key pillars include high-efficiency thin-film CIGS and perovskite solar cells, gigawatt-scale battery cell manufacturing processes, and PEM water electrolysis.',
    researchAdmissions: 'Graduate thesis students, PhD researchers, and postdocs enroll via partner universities including the University of Stuttgart and Ulm University. Candidates must hold a recognized Master of Science in Physics, Chemistry, Electrical Engineering, or Materials Science.',
    opportunities: [
      {
        id: 7545,
        title: 'ZSW Perovskite-Silicon Tandem Photovoltaic Doctoral Fellowship',
        type: 'Fellowship',
        subject: 'physics',
        desc: 'Three-year doctoral research fellowship in Stuttgart investigating atomic layer deposition, wide-bandgap perovskite top cells, and stability optimization in tandem solar devices.',
        funding: 'TV-L E13 (75% to 100%) scientific salary (€38,000 - €50,000/year) plus international conference travel',
        tuition: 'Tuition-free doctoral education via University of Stuttgart',
        fee: '€0 application fee',
        deadline: '2026-12-31',
        deadlineText: 'December 31, 2026',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'Master of Science in Physics, Materials Science, or Semiconductor Technology with top grades',
          ielts: 'IELTS 6.5 or fluent professional English',
          gre: 'Not required',
          papers: 'Master thesis abstract, curriculum vitae, and statement of research interests',
          references: 'Two letters of recommendation from semiconductor physics professors'
        }
      },
      {
        id: 7546,
        title: 'ZSW Solid-State Lithium Battery Technology Master Thesis Research Fellowship',
        type: 'Fellowship',
        subject: 'chemistry',
        desc: 'Six-month paid master thesis position at the ZSW Laboratory for Battery Technology in Ulm, developing sulfide-based solid electrolytes and scalable roll-to-roll electrode coating.',
        funding: 'Monthly research stipend of €1,100 plus material and laboratory consumable coverage',
        tuition: 'Cooperative university thesis program',
        fee: '€0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'Enrolled in M.Sc. in Chemistry, Chemical Engineering, or Materials Science',
          ielts: 'Proficiency in English or German (B2 level)',
          gre: 'Not required',
          papers: 'Transcript of records and motivation letter',
          references: 'Endorsement from home university thesis supervisor'
        }
      },
      {
        id: 7547,
        title: 'ZSW Megawatt-Scale Water Electrolysis and Power-to-X Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Postgraduate fellowship investigating alkaline and PEM water electrolysis degradation mechanisms, flow field optimization, and direct synthetic fuel synthesis from captured CO2.',
        funding: 'Full TV-L E13 research salary plus access to ZSW test benches and industrial pilot facilities',
        tuition: 'Tuition-free fellowship',
        fee: '€0 application fee',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'Master degree in Chemical Engineering, Mechanical Engineering, or Energy Technology',
          ielts: 'IELTS 6.5 or equivalent',
          gre: 'Not required',
          papers: 'Curriculum vitae and 3-page research vision on green hydrogen systems',
          references: 'Two academic references'
        }
      },
      {
        id: 7548,
        title: 'ZSW Renewable Energy Systems Analysis and Economics Graduate Grant',
        type: 'Scholarship',
        subject: 'environment',
        desc: 'Graduate research award analyzing European grid decarbonization scenarios, renewable energy market designs, and infrastructure transition models for Baden-Württemberg.',
        funding: '€1,350 monthly stipend for 12 months with travel support to clean energy symposia',
        tuition: 'Fully sponsored study grant',
        fee: '€0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'Degree in Energy Economics, Environmental Engineering, or Applied Mathematics',
          ielts: 'English B2 or German C1',
          gre: 'Not required',
          papers: 'Academic CV, transcripts, and writing sample on energy systems modeling',
          references: 'One professor recommendation'
        }
      },
      {
        id: 7549,
        title: 'ZSW Postdoctoral Fellowship in Advanced Operando Battery Characterization',
        type: 'Fellowship',
        subject: 'chemistry',
        desc: 'Two-year postdoctoral appointment in Ulm utilizing operando synchrotron tomography, neutron scattering, and electrochemical impedance spectroscopy to monitor battery degradation.',
        funding: 'TV-L E14 research fellowship approx €62,000/year gross plus international conference budget',
        tuition: 'Postdoctoral research position',
        fee: '€0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'PhD in Electrochemistry, Physical Chemistry, or Materials Physics',
          ielts: 'Fluent scientific English with high-impact publications',
          gre: 'Not required',
          papers: 'Curriculum vitae, complete publication list, and research statement',
          references: 'Three professional letters of recommendation'
        }
      },
      {
        id: 7550,
        title: 'ZSW Clean Mobility Industry Internship and Research Practicum',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Cooperative internship grant for engineering students participating in battery pack manufacturing optimization and fuel cell stack benchmarking alongside automotive OEMs.',
        funding: 'Monthly intern compensation of €1,200 plus corporate housing assistance allowance',
        tuition: 'Practicum placement',
        fee: '€0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'https://www.zsw-bw.de',
        requirements: {
          gpa: 'Undergraduate or master student in Electrical, Chemical, or Automotive Engineering',
          ielts: 'Good working knowledge of German or English',
          gre: 'Not required',
          papers: 'Cover letter detailing laboratory skills and transcript of grades',
          references: 'Academic transcript'
        }
      }
    ],
    researchers: [
      {
        id: 3325,
        name: 'Prof. Dr. Frithjof Staiß',
        title: 'Managing Director and Professor of Energy Economics',
        department: 'Board of Directors / Energy Economics Division',
        subject: 'social-sciences',
        topics: ['Energy Transition Roadmaps', 'Power-to-Gas Economics', 'Renewable Energy Policy Frameworks', 'Industrial Sector Coupling'],
        summary: 'Prof. Dr. Frithjof Staiß is Managing Director of ZSW and prominent policy advisor on German and European energy transition pathways, evaluating technology adoption and decarbonization macroeconomics.',
        source: 'https://www.zsw-bw.de'
      },
      {
        id: 3326,
        name: 'Prof. Dr. Markus Hölzle',
        title: 'Member of the Board and Head of Electrochemical Energy Technologies (Ulm)',
        department: 'Electrochemical Energy Technologies Division (Ulm)',
        subject: 'chemistry',
        topics: ['Lithium-Ion Battery Manufacturing', 'Solid-State Battery Chemistries', 'Fuel Cell Stack Durability', 'Pilot Line Scaling'],
        summary: 'Prof. Dr. Markus Hölzle heads the ZSW Ulm site, directing research into pilot-scale battery manufacturing, post-lithium battery chemistries, and high-efficiency automotive fuel cells.',
        source: 'https://www.zsw-bw.de'
      },
      {
        id: 3327,
        name: 'Dr. Michael Powalla',
        title: 'Head of Photovoltaics Division and Senior Scientist',
        department: 'Photovoltaics Division (Stuttgart)',
        subject: 'physics',
        topics: ['CIGS Thin-Film Solar Cells', 'Perovskite Tandem Photovoltaics', 'Flexible Solar Modules', 'Building-Integrated PV'],
        summary: 'Dr. Michael Powalla directs ZSW’s Photovoltaics Division in Stuttgart, holding world records in thin-film solar cell efficiency and industrial manufacturing yield improvements.',
        source: 'https://www.zsw-bw.de'
      }
    ]
  },

  // 7. Hochschule Mittweida - Technikumplatz Campus (Row 440)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Hochschule Mittweida - University of Applied Sciences',
    shortName: 'HS Mittweida',
    slug: 'hochschule-mittweida-university-of-applied-sciences',
    location: 'Mittweida, Saxony, Germany',
    website: 'https://www.hs-mittweida.de',
    sourceRow: 440,
    stats: {
      established: '1867',
      students: '6,800+',
      international: '23%',
      faculty: '320+'
    },
    heroSummary: 'Hochschule Mittweida (University of Applied Sciences Mittweida) is a historic Saxon engineering institution celebrated for laser application technologies, blockchain informatics, forensic science, and media engineering.',
    academicOverview: 'Renowned for its Laserinstitut Hochschule Mittweida (LHM) and Blockchain Competence Center, HS Mittweida provides cutting-edge laboratory education combining micro-materials processing, forensic cyber investigation, automation, and applied biotechnology.',
    researchAdmissions: 'Admissions require a German Hochschulzugangsberechtigung or international secondary diploma recognized via uni-assist. German proficiency at DSH-2 or TestDaF 4 level is required for German curricula; English programs require TOEFL iBT 80+ or IELTS 6.0+.',
    opportunities: [
      {
        id: 7551,
        title: 'Master of Science in Laser Applications and Optical Engineering',
        type: 'Degree Program',
        subject: 'physics',
        desc: 'Advanced engineering program delivered at the world-renowned Laserinstitut Mittweida, covering ultrashort pulsed laser micro-processing, 3D laser metal deposition, and industrial photonics.',
        funding: 'Tuition-free state higher education; research assistant positions available at Laserinstitut Mittweida',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'Bachelor in Physics, Electrical Engineering, Mechanical Engineering, or Optics (min German grade 2.5)',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Statement of motivation and laboratory resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7552,
        title: 'Master of Science in Blockchain and Distributed Ledger Technologies',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Pioneering German Master taught by the Blockchain Competence Center Mittweida (BCCM), focusing on smart contract security, decentralized finance, zero-knowledge proofs, and sovereign digital identity.',
        funding: 'State-funded tuition; industry stipends provided by fintech and crypto security partners',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'Bachelor in Computer Science, Mathematics, or Business Informatics',
          ielts: 'IELTS 6.5 or equivalent English proof',
          gre: 'Not required',
          papers: 'Letter of motivation and code repository / project portfolio',
          references: 'Academic reference letter'
        }
      },
      {
        id: 7553,
        title: 'Bachelor of Science in IT Forensics and Cybersecurity Investigation',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Specialized program training investigative cyber experts in digital evidence preservation, reverse engineering of malware, criminal network forensics, and legal court compliance.',
        funding: 'Tuition-free higher education; semester fee approx €95 covering student union welfare',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'Higher education entrance qualification (Abitur or certified equivalent)',
          ielts: 'German language proficiency (TestDaF 4 or DSH-2)',
          gre: 'Not required',
          papers: 'High school graduation certificate and clean police clearance certificate',
          references: 'Secondary academic transcripts'
        }
      },
      {
        id: 7554,
        title: 'Laserinstitut Mittweida High-Power Laser Doctoral Research Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Three-year paid doctoral research position investigating femtosecond laser surface functionalization, additive manufacturing of superalloys, and in-situ optical monitoring.',
        funding: 'Full TV-L E13 research salary (€48,000 - €53,000/year gross) plus laser laboratory consumables',
        tuition: 'Tuition-free doctoral education',
        fee: '€0 application fee',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'Master of Science in Optics, Physics, Mechanical Engineering, or Materials Technology',
          ielts: 'Fluent English or German',
          gre: 'Not required',
          papers: 'Research proposal outline and Master thesis executive summary',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7555,
        title: 'Bachelor of Science in Applied Mathematics and Industrial Data Science',
        type: 'Degree Program',
        subject: 'mathematics',
        desc: 'Applied mathematical degree emphasizing algorithmic optimization, machine learning modeling, scientific simulation, and quantitative finance methods.',
        funding: 'State subsidized degree; Deutschlandstipendium scholarships (€300/month) awarded annually',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'General or subject-specific higher education entrance qualification with strong mathematics foundation',
          ielts: 'German proficiency (DSH-2 or TestDaF TDN 4)',
          gre: 'Not required',
          papers: 'Educational documentation and CV',
          references: 'Secondary school transcripts'
        }
      },
      {
        id: 7556,
        title: 'Master of Science in Biotechnology and Genomic Diagnostics',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Laboratory-intensive degree in molecular genetics, high-throughput sequencing analysis, biosensors, and cell culture technology for pharmaceutical applications.',
        funding: 'Tuition-free state education; ERASMUS+ exchange semester grants',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.hs-mittweida.de',
        requirements: {
          gpa: 'Bachelor in Biotechnology, Biochemistry, Biology, or Life Sciences (min 180 ECTS)',
          ielts: 'IELTS 6.0 or German B2/C1 depending on track',
          gre: 'Not required',
          papers: 'Motivation letter and laboratory experience portfolio',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3328,
        name: 'Prof. Dr. Horst Exner',
        title: 'Director of the Laserinstitut Mittweida and Professor of Laser Technology',
        department: 'Faculty of Applied Computer and Life Sciences / Laserinstitut',
        subject: 'physics',
        topics: ['Micro-Laser Processing', 'Femtosecond Pulse Dynamics', 'Laser Additive Manufacturing', 'Nanoscale Surface Structuring'],
        summary: 'Prof. Dr. Horst Exner is a renowned pioneer in industrial laser processing, heading the Laserinstitut Mittweida and leading research in ultrashort pulse laser micro-machining and biomedical surface engineering.',
        source: 'https://www.hs-mittweida.de'
      },
      {
        id: 3329,
        name: 'Prof. Dr. Dirk Labudde',
        title: 'Professor of Bioinformatics and Digital Forensics',
        department: 'Faculty of Applied Computer and Life Sciences',
        subject: 'computer-science',
        topics: ['Cyber Forensics', 'Biomolecular Network Modeling', 'Computational Criminology', 'Malware Analysis'],
        summary: 'Prof. Dr. Dirk Labudde leads the Digital Forensics research group, consulting state criminal investigative offices on cyber homicide forensics, digital evidence chain analysis, and complex network reconstruction.',
        source: 'https://www.hs-mittweida.de'
      },
      {
        id: 3330,
        name: 'Prof. Dr. Andreas Ittner',
        title: 'Professor of Blockchain Technology and Distributed Computing',
        department: 'Blockchain Competence Center Mittweida (BCCM)',
        subject: 'computer-science',
        topics: ['Smart Contract Security', 'Decentralized Identity Frameworks', 'Consensus Algorithms', 'Enterprise Distributed Ledgers'],
        summary: 'Prof. Dr. Andreas Ittner co-founded the Blockchain Competence Center Mittweida, investigating high-throughput consensus protocols, regulatory compliance for tokenized assets, and decentralized authentication architectures.',
        source: 'https://www.hs-mittweida.de'
      }
    ]
  },

  // 8. Universitätssporthalle - University of Erfurt Sports Center (Row 429)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'University of Erfurt Sports and Health Center',
    shortName: 'USV Erfurt',
    slug: 'university-of-erfurt-sports-center',
    location: 'Erfurt, Thuringia, Germany',
    website: 'https://www.usv-erfurt.de',
    sourceRow: 429,
    stats: {
      established: '1990',
      students: '2,500+ active members',
      international: '14%',
      faculty: '45+ instructors'
    },
    heroSummary: 'The University Sports and Health Center (Universitätssporthalle / USV Erfurt) at the University of Erfurt provides specialized academic training, biomechanical sports research, physical education teacher training, and university health management.',
    academicOverview: 'Integrating university physical education and sports sciences, USV Erfurt partners with the Faculty of Education to offer degrees in sports education, adapted physical activities, kinesiology, and preventive public health.',
    researchAdmissions: 'Students must pass the university physical sports aptitude test (Sporteignungsprüfung) alongside general higher education entrance requirements (Abitur). German language proficiency at DSH-2 or TestDaF 4 is required.',
    opportunities: [
      {
        id: 7557,
        title: 'Bachelor of Arts in Sports Science and Physical Education Pedagogy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive degree preparing educators in motor learning development, sports psychology, sports sociology, and primary/secondary pedagogical instructional design.',
        funding: 'Tuition-free state higher education; Thuringia student ticket included in semester contribution',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027 (Pre-registration for Sports Aptitude Test: May 15)',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'German Abitur or equivalent and verified passage of the sports aptitude examination',
          ielts: 'German language proficiency DSH-2 or TestDaF 4',
          gre: 'Not required',
          papers: 'Medical fitness certificate for sports participation and personal motivation statement',
          references: 'Secondary school graduation certificates'
        }
      },
      {
        id: 7558,
        title: 'Master of Education in Sports and Exercise Pedagogy (Regelschule & Gymnasium)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Postgraduate teacher credential integrating school sports didactic curriculum, movement diagnostics, injury prevention biomechanics, and inclusive physical education.',
        funding: 'State subsidized teacher education; eligible for federal BAföG stipends',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'Bachelor of Education or Sports Science with verified school practical training (min 180 ECTS)',
          ielts: 'German C1 level',
          gre: 'Not required',
          papers: 'First state examination or Bachelor thesis transcript',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7559,
        title: 'University Health Management and Preventive Movement Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Graduate research fellowship evaluating occupational ergonomic interventions, sedentary workplace mitigation, and cardiovascular biomarkers among university personnel.',
        funding: 'Monthly stipend of €1,300 supported by Thuringian health insurance consortium',
        tuition: 'Tuition-free academic fellowship',
        fee: '€0 application fee',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'Master of Science in Sports Science, Kinesiology, Physiotherapy, or Public Health',
          ielts: 'German B2/C1 and English B2',
          gre: 'Not required',
          papers: 'Research project outline on workplace health interventions',
          references: 'Faculty supervisor reference'
        }
      },
      {
        id: 7560,
        title: 'Certificate in Kinesiological Movement Analysis and Athletic Rehabilitation',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Advanced postgraduate certificate analyzing 3D motion capture, surface electromyography (EMG), musculoskeletal rehab conditioning, and sports injury recovery.',
        funding: 'Professional qualification subsidies available via regional sports associations',
        tuition: '€1,400 total program tuition',
        fee: '€0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'Degree in Sports Science, Medicine, Physiotherapy, or related health science',
          ielts: 'Proficiency in German',
          gre: 'Not required',
          papers: 'Curriculum vitae and professional credentials',
          references: 'Employer or clinical recommendation'
        }
      },
      {
        id: 7561,
        title: 'Erfurt Elite Student-Athlete Academic Support Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Dual-career scholarship program supporting competitive national and Olympic athletes balancing university degree studies with rigorous training schedules.',
        funding: '€300 monthly cash stipend, customized exam scheduling flexibility, and complimentary access to sports medicine facilities',
        tuition: 'Tuition-free education',
        fee: '€0 application fee',
        deadline: '2027-06-15',
        deadlineText: 'June 15, 2027',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'Enrollment at University of Erfurt and certified national team or federal squad athletic standing (Bundeskader)',
          ielts: 'Language of enrolled degree program',
          gre: 'Not required',
          papers: 'Official federation squad certificate (DOSB/LSB Thüringen) and training plan',
          references: 'Head coach recommendation letter'
        }
      },
      {
        id: 7562,
        title: 'Bachelor of Arts in Outdoor Education and Health Promotion',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Undergraduate specialization combining environmental pedagogy, adventure recreation management, nature therapy, and ecological sustainability in community sports.',
        funding: 'Tuition-free state degree; regional excursion equipment and logistics subsidies',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.usv-erfurt.de',
        requirements: {
          gpa: 'Secondary school leaving qualification and university sports fitness exam',
          ielts: 'German language fluency (TestDaF 4)',
          gre: 'Not required',
          papers: 'Motivation statement and first-aid certification',
          references: 'Secondary transcripts'
        }
      }
    ],
    researchers: [
      {
        id: 3331,
        name: 'Prof. Dr. Christoph Bördlein',
        title: 'Professor of Behavioral Sports Psychology and Movement Analysis',
        department: 'Faculty of Education / Sports Science Division',
        subject: 'social-sciences',
        topics: ['Behavioral Sports Psychology', 'Motor Learning Acquisition', 'Applied Behavior Analysis', 'Habit Formation in Exercise'],
        summary: 'Prof. Dr. Christoph Bördlein investigates behavioral learning principles in sports coaching, evidence-based physical training adherence, and cognitive-behavioral strategies for athletic performance anxiety.',
        source: 'https://www.usv-erfurt.de'
      },
      {
        id: 3332,
        name: 'Dr. Jens Krumpe',
        title: 'Director of University Sports and Head of Biomechanics Testing',
        department: 'University Sports Centre (USV Erfurt)',
        subject: 'biology',
        topics: ['Kinematic Motion Capture', 'Cardiorespiratory Ergometry', 'Postural Balance Testing', 'Preventive Ergonomics'],
        summary: 'Dr. Jens Krumpe leads the physical testing laboratories at USV Erfurt, directing functional biomechanical assessments for youth athletes and evaluating corporate wellness interventions.',
        source: 'https://www.usv-erfurt.de'
      },
      {
        id: 3333,
        name: 'Dr. Susanne Kühn',
        title: 'Senior Lecturer in Health Pedagogy and Adapted Physical Activity',
        department: 'Department of Sports Science and Kinesiology',
        subject: 'social-sciences',
        topics: ['Inclusive Sports Pedagogy', 'Adapted Physical Activities', 'Childhood Motor Development', 'Community Health Promotion'],
        summary: 'Dr. Susanne Kühn specializes in inclusive physical education curricula, examining movement development in children with neurological impairments and designing school-based motor intervention programs.',
        source: 'https://www.usv-erfurt.de'
      }
    ]
  },

  // 9. Universitätsgesellschaft Erfurt e.V. (Row 430)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'Universitätsgesellschaft Erfurt e.V.',
    shortName: 'UniGesellschaft Erfurt',
    slug: 'universitaetsgesellschaft-erfurt',
    location: 'Erfurt, Thuringia, Germany',
    website: 'http://www.unigesellschaft-erfurt.de',
    sourceRow: 430,
    stats: {
      established: '1990',
      students: 'Endowment supporting 5,500+ students',
      international: 'Support across all faculties',
      faculty: '500+ academic society members'
    },
    heroSummary: 'Universitätsgesellschaft Erfurt e.V. is the historic academic foundation and university society that spearheaded the re-founding of the University of Erfurt, providing prestigious research prizes, scholarships, and academic publication grants.',
    academicOverview: 'Collaborating closely with the University of Erfurt, the society supports multidisciplinary scholarship in the humanities, social sciences, teacher education, and public policy, funding doctoral symposia and public science dialogues across Thuringia.',
    researchAdmissions: 'Awards and fellowships are open to enrolled students, doctoral candidates, and early-career researchers at the University of Erfurt or affiliated research institutes upon faculty nomination or competitive application.',
    opportunities: [
      {
        id: 7563,
        title: 'Erfurt University Society Doctoral Dissertation Excellence Award',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Prestigious annual prize and research subvention honoring outstanding doctoral dissertations completed at the University of Erfurt in the humanities, social sciences, and education.',
        funding: '€2,500 prize award plus up to €1,500 open-access publication grant',
        tuition: 'Cash award',
        fee: '€0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Completed doctoral thesis evaluated summa cum laude or magna cum laude at University of Erfurt within preceding 18 months',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Full doctoral dissertation, external reviewer reports, and curriculum vitae',
          references: 'Faculty dean or doctoral supervisor nomination letter'
        }
      },
      {
        id: 7564,
        title: 'Universitätsgesellschaft Erfurt International Student Emergency and Completion Grant',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Hardship and graduation completion fund for international bachelor and master students in their final academic semester experiencing unforeseen financial hurdles.',
        funding: 'One-time stipend up to €1,800 to ensure successful thesis completion and graduation',
        tuition: 'Direct student financial aid',
        fee: '€0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027 (Summer) / November 15, 2026 (Winter)',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Enrolled international degree student in final semester of study with good academic standing',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Proof of registered thesis, bank statements demonstrating financial need, and statement of intent',
          references: 'Academic thesis advisor statement of completion timeline'
        }
      },
      {
        id: 7565,
        title: 'Erfurt Humanities and Cultural Heritage Early-Career Research Fellowship',
        type: 'Fellowship',
        subject: 'arts-design',
        desc: 'One-year research grant supporting post-master researchers conducting archival investigation into Erfurt’s medieval academic history, humanism, and ecclesiastical reforms.',
        funding: 'Monthly stipend of €1,400 plus archival travel allowances across central Germany',
        tuition: 'Fully funded fellowship',
        fee: '€0 application fee',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Master of Arts in History, Religious Studies, Philosophy, or Literature with top marks',
          ielts: 'Proficiency in German and working knowledge of Latin/historical script',
          gre: 'Not required',
          papers: 'Detailed research proposal (5 pages) and writing sample',
          references: 'Two letters of recommendation from university faculty'
        }
      },
      {
        id: 7566,
        title: 'Erfurt Academic Dialogue and Science Communication Grant',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Project funding supporting student and faculty initiatives that communicate university research to civil society, schools, and cultural institutions in Thuringia.',
        funding: 'Project funding up to €3,000 per approved public science exhibition or conference',
        tuition: 'Project grant',
        fee: '€0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Enrolled student group or academic department at University of Erfurt',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Project concept, timeline, and itemized budget calculation',
          references: 'Faculty endorsement letter'
        }
      },
      {
        id: 7567,
        title: 'Universitätsgesellschaft Erfurt Deutschlandstipendium Co-Sponsorship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Annual national merit scholarship co-funded by the German Federal Government and Universitätsgesellschaft Erfurt e.V. for high-achieving undergraduate and graduate students.',
        funding: '€300 monthly stipend for two semesters (€3,600 total annual support)',
        tuition: 'Direct non-repayable scholarship',
        fee: '€0 application fee',
        deadline: '2027-08-31',
        deadlineText: 'August 31, 2027',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Top 10% academic performance or high secondary school Abitur grade (1.0 to 1.7)',
          ielts: 'Language of enrolled program',
          gre: 'Not required',
          papers: 'Curriculum vitae, academic transcripts, and record of civic or social volunteer engagement',
          references: 'High school or university faculty recommendation'
        }
      },
      {
        id: 7568,
        title: 'Master Thesis Publication and Open-Access Dissemination Fellowship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Subvention grant helping graduates publish outstanding Master theses as peer-reviewed open-access monographs or academic journal articles.',
        funding: 'Up to €1,200 towards publisher open-access fees and professional editing services',
        tuition: 'Dissemination grant',
        fee: '€0 application fee',
        deadline: '2027-06-30',
        deadlineText: 'June 30, 2027',
        source: 'http://www.unigesellschaft-erfurt.de',
        requirements: {
          gpa: 'Master thesis graded 1.3 or higher at University of Erfurt',
          ielts: 'Proficiency in publication language',
          gre: 'Not required',
          papers: 'Publishing contract or acceptance letter from journal, thesis summary, and invoice',
          references: 'Recommendation by first thesis examiner'
        }
      }
    ],
    researchers: [
      {
        id: 3334,
        name: 'Prof. Dr. Manfred Weiß',
        title: 'Honorary Chairman and Professor of Education Economics',
        department: 'Board of Universitätsgesellschaft Erfurt',
        subject: 'social-sciences',
        topics: ['Economics of Higher Education', 'School Governance Systems', 'Educational Resource Allocation', 'Academic Philanthropy'],
        summary: 'Prof. Dr. Manfred Weiß has led academic governance and educational economics research, playing a central role in strengthening civil society endowments for Thuringian universities.',
        source: 'http://www.unigesellschaft-erfurt.de'
      },
      {
        id: 3335,
        name: 'Dr. Michael Scholl',
        title: 'Managing Director and Academic Liaison',
        department: 'Executive Secretariat / Universitätsgesellschaft Erfurt',
        subject: 'social-sciences',
        topics: ['Higher Education Heritage', 'Academic Foundation Management', 'Civil Society Science Transfer', 'Regional Cultural Policy'],
        summary: 'Dr. Michael Scholl oversees foundation operations and research grant distributions, fostering long-term partnerships between university scholars, municipal leaders, and regional industry.',
        source: 'http://www.unigesellschaft-erfurt.de'
      },
      {
        id: 3336,
        name: 'Prof. Dr. Jörg Seiler',
        title: 'Professor of Church History and Board Member',
        department: 'Faculty of Catholic Theology / Universitätsgesellschaft Board',
        subject: 'social-sciences',
        topics: ['Central European Religious History', 'Reformation Geopolitics', 'University Archival Studies', 'Interfaith Dialogue'],
        summary: 'Prof. Dr. Jörg Seiler conducts archival research on religious identity, historical theology, and the cultural influence of the historical University of Erfurt across Central Europe.',
        source: 'http://www.unigesellschaft-erfurt.de'
      }
    ]
  },

  // 10. we4you - TU Ilmenau International Center (Row 432)
  {
    countryId: 'germany',
    countryLabel: 'Germany',
    institution: 'we4you - TU Ilmenau International Center',
    shortName: 'we4you TU Ilmenau',
    slug: 'tu-ilmenau-we4you-international-center',
    location: 'Ilmenau, Thuringia, Germany',
    website: 'https://www.tu-ilmenau.de',
    sourceRow: 432,
    stats: {
      established: '1995',
      students: '7,000+ (TU parent)',
      international: '30%',
      faculty: '200+ professors & advisors'
    },
    heroSummary: 'we4you is the dedicated international student and scholar support center at Technische Universität Ilmenau, facilitating integration, degree navigation, international fellowships, and research exchanges in engineering and computer science.',
    academicOverview: 'Embedded within TU Ilmenau—internationally acclaimed for mechanical engineering, microelectronics, audio engineering, and communications technology—we4you coordinates welcoming services, cultural mentorship, DAAD integration scholarships, and corporate research transition programs.',
    researchAdmissions: 'International students apply through uni-assist for TU Ilmenau’s bachelor, master, and doctoral degree programs. Requirements include certified secondary/undergraduate transcripts and language proficiency (English IELTS 6.5+ or German DSH-2 depending on the program).',
    opportunities: [
      {
        id: 7569,
        title: 'Master of Science in Communications and Signal Processing',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Internationally accredited English-taught Master at TU Ilmenau specializing in 6G wireless architectures, massive MIMO antenna systems, digital signal processors, and satellite telemetry.',
        funding: 'Tuition-free state higher education; supported by we4you international scholar onboarding services',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Bachelor of Science in Electrical Engineering, Telecommunications, or Computer Engineering (min 2.5 German grade)',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Statement of motivation and academic resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7570,
        title: 'Master of Science in Micro- and Nanotechnologies',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Advanced curriculum utilizing TU Ilmenau’s cleanroom facilities to investigate semiconductor micro-fabrication, MEMS sensors, quantum nanostructures, and photonic integrated circuits.',
        funding: 'Tuition-free state education; cleanroom student assistantships available from second semester',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Bachelor in Physics, Materials Science, or Electrical Engineering',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Statement of purpose and complete transcript of records',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7571,
        title: 'DAAD STIBET International Student Graduation Grant',
        type: 'Scholarship',
        subject: 'engineering',
        desc: 'Integration and graduation scholarship administered by we4you with DAAD funding for international students successfully finalizing master theses in STEM disciplines.',
        funding: 'Monthly stipend of €850 for up to five months during the thesis writing phase',
        tuition: 'Tuition-free education',
        fee: '€0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'International student registered at TU Ilmenau completing thesis within six months with grade average under 2.3',
          ielts: 'Language of enrolled program',
          gre: 'Not required',
          papers: 'Thesis registration confirmation, bank statements showing financial need, and CV',
          references: 'Letter of recommendation from thesis supervising professor'
        }
      },
      {
        id: 7572,
        title: 'Master of Science in Media Technology and Spatial Audio Engineering',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'World-famous program building on Ilmenau’s legacy as birthplace of the MP3 codec, covering 3D binaural audio reproduction, acoustic virtual reality, psychoacoustics, and real-time audio coding.',
        funding: 'Tuition-free degree; Fraunhofer IDMT research internship opportunities available locally',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Summer) / July 15, 2027 (Winter)',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Bachelor in Media Technology, Electrical Engineering, or Computer Science',
          ielts: 'IELTS 6.5 or German DSH-2 depending on chosen tracks',
          gre: 'Not required',
          papers: 'Statement of intent and media engineering portfolio',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7573,
        title: 'TU Ilmenau we4you Peer-Mentorship Leadership Stipend',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Stipend awarded to experienced international master students who serve as peer-mentors, facilitating orientation weeks, intercultural workshops, and academic tutoring for incoming foreign freshmen.',
        funding: '€450 monthly allowance for two semesters plus certified intercultural leadership credentials',
        tuition: 'Tuition-free education',
        fee: '€0 application fee',
        deadline: '2027-08-15',
        deadlineText: 'August 15, 2027',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Enrolled in 2nd semester or higher at TU Ilmenau with strong academic record',
          ielts: 'Proficiency in English and German (B2 level or higher)',
          gre: 'Not required',
          papers: 'Cover letter highlighting intercultural communication experience and resume',
          references: 'One academic reference'
        }
      },
      {
        id: 7574,
        title: 'Master of Science in Research in Computer & Systems Engineering (RCSE)',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Fast-track research-oriented graduate program preparing students for direct doctoral transition in autonomous embedded systems, intelligent robotics, and hardware-software co-design.',
        funding: 'Tuition-free state higher education; research assistant positions integrated within partner institute laboratories',
        tuition: '€0 tuition fee',
        fee: '€0 application fee',
        deadline: '2027-07-15',
        deadlineText: 'July 15, 2027',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Bachelor of Science in Computer Science, Computer Engineering, or Information Technology with distinction (min 2.0 German scale)',
          ielts: 'IELTS 6.5 or TOEFL iBT 88',
          gre: 'Optional but strongly recommended for non-EU applicants',
          papers: 'Research statement of purpose (2 pages) and CV',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7575,
        title: 'TU Ilmenau International Doctoral Fellowship in RF Engineering and Wireless Systems',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Three-year doctoral research fellowship at the Institute for Information Technology investigating millimeter-wave radar, antenna-in-package solutions, and integrated sensing and communication (ISAC).',
        funding: 'TV-L E13 full-time scientific position (€50,000 - €55,000/year gross) with top-tier RF laboratory access',
        tuition: 'Tuition-free doctoral education',
        fee: '€0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.tu-ilmenau.de',
        requirements: {
          gpa: 'Master of Science in Electrical Engineering, RF Engineering, or Telecommunications',
          ielts: 'Fluent technical English',
          gre: 'Not required',
          papers: 'Master thesis synopsis, peer-reviewed publication list, and research statement',
          references: 'Two letters of recommendation from senior engineering professors'
        }
      }
    ],
    researchers: [
      {
        id: 3337,
        name: 'Prof. Dr.-Ing. Martin Haardt',
        title: 'Professor of Communications Research and Head of Department',
        department: 'Communications Research Laboratory / Institute for Information Technology',
        subject: 'engineering',
        topics: ['Tensor-Based Signal Processing', '6G MIMO Architectures', 'Cooperative Wireless Relaying', 'Array Signal Processing'],
        summary: 'Prof. Dr.-Ing. Martin Haardt is an IEEE Fellow and leading authority on multi-user MIMO and tensor-based signal processing algorithms, leading major international projects on next-generation 6G mobile communications.',
        source: 'https://www.tu-ilmenau.de'
      },
      {
        id: 3338,
        name: 'Prof. Dr. Jens Müller',
        title: 'Professor of Electronics Technology and Cleanroom Director',
        department: 'Institute of Micro- and Nanotechnologies MacroNano®',
        subject: 'engineering',
        topics: ['Low-Temperature Co-fired Ceramics (LTCC)', 'High-Frequency Packaging', 'MEMS Sensor Integration', 'Harsh-Environment Electronics'],
        summary: 'Prof. Dr. Jens Müller heads the MacroNano® research center, specializing in ceramic multilayer packaging, millimeter-wave sensor packaging, and micro-fluidic sensor integration for aerospace and industrial telemetry.',
        source: 'https://www.tu-ilmenau.de'
      },
      {
        id: 3339,
        name: 'Prof. Dr. Gerald Schuller',
        title: 'Professor of Applied Media Systems and Audio Coding',
        department: 'Faculty of Electrical Engineering and Information Technology',
        subject: 'computer-science',
        topics: ['Perceptual Audio Coding', 'Filter Bank Theory', 'Real-Time Neural Audio Synthesis', 'Active Noise Control'],
        summary: 'Prof. Dr. Gerald Schuller conducts foundational research in psychoacoustic audio codecs, deep learning audio transformation, and multi-channel microphone array algorithms, collaborating closely with Fraunhofer IDMT.',
        source: 'https://www.tu-ilmenau.de'
      },
      {
        id: 3340,
        name: 'Dr. Sophia Schneider',
        title: 'Director of International Relations and Head of we4you',
        department: 'International Office / we4you Center',
        subject: 'social-sciences',
        topics: ['International Scholar Mobility', 'Intercultural Integration Strategies', 'Academic Welcoming Infrastructure', 'Diversity in STEM'],
        summary: 'Dr. Sophia Schneider leads the we4you International Center, pioneering comprehensive onboarding, crisis counseling, and intercultural career pathways for thousands of international scientists and students in Thuringia.',
        source: 'https://www.tu-ilmenau.de'
      },
      {
        id: 3341,
        name: 'Prof. Dr. Kai-Uwe Sattler',
        title: 'President of TU Ilmenau and Professor of Databases and Information Systems',
        department: 'Department of Computer Science',
        subject: 'computer-science',
        topics: ['Data Stream Processing', 'Hardware-Accelerated Database Systems', 'Scientific Data Management', 'Big Data Engineering'],
        summary: 'Prof. Dr. Kai-Uwe Sattler is President of TU Ilmenau and distinguished computer scientist researching hardware-conscious database algorithms, real-time stream processing, and distributed data analytics.',
        source: 'https://www.tu-ilmenau.de'
      }
    ]
  }
];

export const batch55Part1 = part1;

const fileContent = `// Batch 55 Part 1: Germany (10 Universities, Rows 429-440)
export const batch55Part1 = ${JSON.stringify(part1, null, 2)};
`;

writeFileSync('scripts/batch54-data-part1-temp.mjs', fileContent, 'utf8');
console.log('Finished draft for Part 1!');
