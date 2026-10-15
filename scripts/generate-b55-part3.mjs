import { writeFileSync } from 'node:fs';

const part3 = [
  // 21. Yokohama City University Tsurumi Campus (Row 1791)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Yokohama City University - Tsurumi Campus',
    shortName: 'YCU Tsurumi',
    slug: 'yokohama-city-university-tsurumi',
    location: 'Tsurumi-ku, Yokohama, Kanagawa, Japan',
    website: 'https://www.yokohama-cu.ac.jp',
    sourceRow: 1791,
    stats: {
      established: '1928',
      students: '5,200+',
      international: '8%',
      faculty: '650+'
    },
    heroSummary: 'Yokohama City University’s Tsurumi Campus is an international powerhouse for structural biology, supramolecular biophysics, and drug design, co-located directly with the RIKEN Center for Biosystems Dynamics Research.',
    academicOverview: 'Home to the Graduate School of Medical Life Science, YCU Tsurumi houses state-of-the-art ultra-high-field nuclear magnetic resonance (NMR) spectrometers (up to 950 MHz) and cryo-electron microscopy suites. Faculty and graduate scholars pioneer molecular targeted drug discovery and cryo-EM protein structures.',
    researchAdmissions: 'International applicants to the Graduate School of Medical Life Science must hold a Bachelor of Science in biology, chemistry, pharmacy, or physics. English-taught graduate programs require certified English proficiency (TOEFL iBT 80+ / IELTS 6.5+) and a faculty lab interview.',
    opportunities: [
      {
        id: 7644,
        title: 'Doctor of Philosophy in Structural Biology and Supramolecular Medicine',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Advanced doctoral research co-supervised with RIKEN scientists, utilizing 950 MHz NMR and cryo-electron microscopy to resolve atomic structures of membrane receptors and oncogenic protein complexes.',
        funding: 'MEXT Monbukagakusho University Recommendation Scholarship (¥145,000/month stipend plus full tuition waiver) and YCU Doctoral Research Fellowships',
        tuition: '¥535,800 per year (waived for MEXT scholars)',
        fee: '¥30,000 application fee',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026 (April 2027 Intake) / June 15, 2027 (October Intake)',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Master of Science in Biophysics, Biochemistry, Molecular Biology, or Pharmacy (min 3.2/4.0 GPA)',
          ielts: 'IELTS 6.5 or TOEFL iBT 85',
          gre: 'Not required',
          papers: 'Master thesis abstract, curriculum vitae, and 3-page research proposal on macromolecular biophysics',
          references: 'Two letters of recommendation from research supervisors'
        }
      },
      {
        id: 7645,
        title: 'Master of Science in Medical Life Science and Computational Drug Discovery',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'English-taught postgraduate program integrating structural biology, molecular dynamics simulations, AI-driven ligand screening, and peptide chemical synthesis.',
        funding: 'YCU International Student Tuition Exemption (50% to 100% tuition waiver) and JASSO Honors Scholarships',
        tuition: '¥535,800 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Bachelor degree in Chemistry, Biology, Physics, or Computer Science',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Statement of purpose and laboratory experience summary',
          references: 'Undergraduate thesis supervisor recommendation'
        }
      },
      {
        id: 7646,
        title: 'YCU-RIKEN Joint Structural Biology Research Fellowship',
        type: 'Fellowship',
        subject: 'chemistry',
        desc: 'Competitive visiting fellowship supporting graduate researchers conducting synchrotron beamline experiments and high-throughput fragment screening at the RIKEN-YCU alliance facilities in Tsurumi.',
        funding: 'Monthly research stipend of ¥180,000 plus dedicated access to cryo-EM instruments and laboratory consumable budget',
        tuition: 'Fellowship award',
        fee: '¥0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Enrolled doctoral candidate in structural chemistry, molecular biophysics, or pharmacology',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Curriculum vitae, publication record, and joint research plan co-signed by YCU/RIKEN hosts',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7647,
        title: 'Graduate Certificate in Cryo-Electron Microscopy and Biomolecular Modeling',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Specialized technical certificate providing hands-on training in single-particle cryo-EM sample vitrification, high-resolution image processing (RELION/CryoSPARC), and atomic model refinement.',
        funding: 'Tuition reduction grants for doctoral candidates enrolled in affiliated Japanese medical universities',
        tuition: '¥180,000 certificate tuition',
        fee: '¥10,000 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Bachelor or Master in Life Sciences or Physical Sciences',
          ielts: 'English or Japanese proficiency',
          gre: 'Not required',
          papers: 'Academic transcript and statement of electron microscopy goals',
          references: 'Faculty recommendation letter'
        }
      },
      {
        id: 7648,
        title: 'YCU Global Medical Innovator Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Endowed scholarship for exceptional international postgraduate scholars pursuing cancer immunotherapy and neurodegenerative biomarker discovery at the Tsurumi Campus.',
        funding: '¥100,000 monthly living stipend and 100% admission fee waiver',
        tuition: 'Direct scholarship grant',
        fee: '¥0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Top 10% academic standing in prior university studies',
          ielts: 'IELTS 6.5 or TOEFL 85',
          gre: 'Not required',
          papers: 'Essay on medical life science contributions to global healthcare and CV',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7649,
        title: 'Master of Science in Clinical Proteomics and Metabolomics',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Advanced program focused on tandem mass spectrometry, clinical lipidomics, single-cell protein profiling, and disease biomarker validation in human patient cohorts.',
        funding: 'Japan Student Services Organization (JASSO) grants and Kanagawa Prefecture healthcare research stipends',
        tuition: '¥535,800 per year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'B.Sc. in Chemistry, Biochemistry, or Pharmacy',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Statement of purpose detailing analytical chemistry experience',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7650,
        title: 'YCU Tsurumi Postdoctoral Fellowship in Chemical Epigenetics',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Two-year postdoctoral fellowship investigating histone methyltransferase inhibitors, chromatin remodeling kinetics, and epigenetic drug design targeting leukemia.',
        funding: '¥4,800,000 annual research salary plus full institutional lab access and international symposium funding',
        tuition: 'Postdoctoral research position',
        fee: '¥0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.yokohama-cu.ac.jp',
        requirements: {
          gpa: 'Ph.D. in Chemical Biology, Biochemistry, or Molecular Pharmacology',
          ielts: 'Fluent scientific English with peer-reviewed publications',
          gre: 'Not required',
          papers: 'Publication dossier and 4-page research proposal on epigenetic therapeutics',
          references: 'Three professional letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3376,
        name: 'Prof. Dr. Yoshifumi Nishimura',
        title: 'Specially Appointed Professor of Structural Biology and Former Dean',
        department: 'Graduate School of Medical Life Science',
        subject: 'biology',
        topics: ['NMR Structure Analysis of Transcription Factors', 'Epigenetic Recognition Mechanisms', 'Chromatin Remodeling Complexes', 'Telomere Biology'],
        summary: 'Prof. Dr. Yoshifumi Nishimura is a world-renowned pioneer in biomolecular NMR, elucidating the three-dimensional structures of human transcription factors, DNA-binding homeodomains, and epigenetic histone modifications.',
        source: 'https://www.yokohama-cu.ac.jp'
      },
      {
        id: 3377,
        name: 'Prof. Dr. Jeremy R. H. Tame',
        title: 'Professor of Protein Engineering and Structural Biophysics',
        department: 'Graduate School of Medical Life Science',
        subject: 'biology',
        topics: ['Allosteric Protein Regulation', 'Artificial Protein Scaffolding', 'X-ray Crystallography', 'De Novo Enzyme Design'],
        summary: 'Prof. Dr. Jeremy R. H. Tame investigates macromolecular allostery and symmetrical protein architectures, designing synthetic repeat proteins and catalytic enzymes for bio-industrial applications.',
        source: 'https://www.yokohama-cu.ac.jp'
      },
      {
        id: 3378,
        name: 'Prof. Dr. Tatsuya Niimi',
        title: 'Professor of Supramolecular Biochemistry and RNA Therapeutics',
        department: 'Laboratory of Structural Biology',
        subject: 'chemistry',
        topics: ['RNA-Protein Interactions', 'Cryo-EM of Spliceosome Complexes', 'Antisense Oligonucleotide Design', 'Ribosome Assembly'],
        summary: 'Prof. Dr. Tatsuya Niimi leads structural studies into eukaryotic spliceosomes and non-coding RNA complexes, utilizing high-resolution cryo-EM to unravel molecular targets for genetic disorders.',
        source: 'https://www.yokohama-cu.ac.jp'
      },
      {
        id: 3379,
        name: 'Prof. Dr. Masahiko Sato',
        title: 'Professor of Molecular Pharmacology and Drug Discovery',
        department: 'Department of Pharmaceutical Chemistry',
        subject: 'chemistry',
        topics: ['Targeted Protein Degradation (PROTACs)', 'Small-Molecule Kinase Inhibitors', 'Molecular Dynamics Docking', 'Cancer Chemotherapy Resistance'],
        summary: 'Prof. Dr. Masahiko Sato designs novel bifunctional degraders and kinase inhibitors, integrating structural biophysics with medicinal chemistry to overcome multidrug-resistant malignancies.',
        source: 'https://www.yokohama-cu.ac.jp'
      }
    ]
  },

  // 22. Yokohama College of Commerce Tsurumi Campus (Row 1792)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Yokohama College of Commerce - Tsurumi Campus',
    shortName: 'Shodai Yokohama',
    slug: 'yokohama-college-of-commerce-tsurumi',
    location: 'Tsurumi-ku, Yokohama, Kanagawa, Japan',
    website: 'https://www.shodai.ac.jp',
    sourceRow: 1792,
    stats: {
      established: '1966',
      students: '2,100+',
      international: '6%',
      faculty: '110+'
    },
    heroSummary: 'Yokohama College of Commerce (Shodai) is a specialized business university located in Tsurumi, Yokohama, renowned for its practical curriculum in maritime logistics, international trade, tourism management, and business informatics.',
    academicOverview: 'Strategically situated near the Port of Yokohama—Japan’s premier international trading hub—Shodai educates future commercial leaders through its Faculty of Commerce. Specialized tracks focus on international trade law, port logistics supply chains, retail marketing, and hospitality tourism.',
    researchAdmissions: 'Undergraduate admissions evaluate Japanese language proficiency (JLPT N2 or EJU Japanese 200+ for international applicants), high school academic transcripts, and an in-person admissions interview.',
    opportunities: [
      {
        id: 7651,
        title: 'Bachelor of Commerce in Maritime Logistics and Global Supply Chain Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Industry-linked commercial degree covering container terminal operations, maritime insurance, customs clearance law, international freight logistics, and green port decarbonization.',
        funding: 'Tuition reduction awards (up to 30% reduction for international students) and Port of Yokohama corporate internships',
        tuition: '¥1,080,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Exam)',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'High school graduation diploma or certified 12-year primary/secondary education',
          ielts: 'JLPT N2 or EJU Japanese Language 200+ points',
          gre: 'Not required',
          papers: 'Statement of purpose in Japanese (800 characters) and high school transcripts',
          references: 'Recommendation letter from Japanese language school or secondary principal'
        }
      },
      {
        id: 7652,
        title: 'Bachelor of Commerce in Tourism, Hospitality, and Regional Revitalization',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Practical curriculum analyzing inbound tourism management, destination marketing in Kanagawa, cruise ship hospitality operations, and cultural heritage tourism.',
        funding: 'Kanagawa Prefecture Inbound Tourism Talent Scholarships and Shodai Founder’s Merit Awards',
        tuition: '¥1,080,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'Recognized secondary school diploma',
          ielts: 'JLPT N2 or equivalent Japanese competence',
          gre: 'Not required',
          papers: 'Essay on tourism innovation in the Greater Tokyo Bay area',
          references: 'Academic transcript and recommendation'
        }
      },
      {
        id: 7653,
        title: 'Bachelor of Commerce in Digital Marketing and Information Systems',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Applied business informatics program teaching e-commerce architecture, consumer behavior data analytics, social media marketing analytics, and web application design.',
        funding: 'Institutional IT achievement grants and JASSO international student study support',
        tuition: '¥1,080,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation with solid mathematics background',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Application dossier and personal motivation letter',
          references: 'School completion certification'
        }
      },
      {
        id: 7654,
        title: 'Shodai International Trade Student Tuition Reduction Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Need- and merit-based institutional scholarship offering a 30% reduction in annual tuition fees for privately financed international undergraduate students.',
        funding: '30% tuition fee reduction (approx ¥240,000 savings annually) renewable based on academic GPA',
        tuition: 'Direct tuition waiver',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'Enrolled undergraduate international student with cumulative GPA 2.5/3.0 or higher',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'Financial declaration form and academic progress report',
          references: 'Faculty advisor endorsement'
        }
      },
      {
        id: 7655,
        title: 'Certificate in Customs Brokerage and International Commercial Trade Law',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Specialized professional certificate preparing students for Japan’s national Customs Broker (Tsūkanshi) examination, covering customs tariffs, quarantine regulations, and bonded warehouse logistics.',
        funding: 'Cooperative corporate subsidies from Yokohama port warehousing associations',
        tuition: '¥150,000 certificate fee',
        fee: '¥10,000 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'Enrolled in or graduated from higher education commerce/law degree',
          ielts: 'Native or professional Japanese fluency',
          gre: 'Not required',
          papers: 'Application form and trade career statement',
          references: 'One academic reference'
        }
      },
      {
        id: 7656,
        title: 'Bachelor of Commerce in Financial Accounting and Taxation',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Professional curriculum designed for aspiring certified public tax accountants (Zeirishi), covering corporate financial auditing, tax accounting law, and managerial cost accounting.',
        funding: 'Shodai Accounting Excellence Scholarships covering exam preparatory materials and fees',
        tuition: '¥1,080,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.shodai.ac.jp',
        requirements: {
          gpa: 'High school graduation diploma',
          ielts: 'JLPT N2 for non-native applicants',
          gre: 'Not required',
          papers: 'Personal statement on accounting ambitions',
          references: 'School transcripts'
        }
      }
    ],
    researchers: [
      {
        id: 3380,
        name: 'Prof. Dr. Kenji Sugimoto',
        title: 'Professor of Port Economics and Maritime Logistics',
        department: 'Faculty of Commerce',
        subject: 'social-sciences',
        topics: ['Port Container Logistics', 'Tokyo Bay Maritime Optimization', 'International Intermodal Transport', 'Green Shipping Governance'],
        summary: 'Prof. Dr. Kenji Sugimoto conducts research on container flow dynamics through Tokyo Bay ports, automated container terminal efficiency, and regulatory decarbonization targets for commercial cargo shipping.',
        source: 'https://www.shodai.ac.jp'
      },
      {
        id: 3381,
        name: 'Prof. Dr. Yuka Takiguchi',
        title: 'Professor of Tourism Management and Inbound Marketing',
        department: 'Faculty of Commerce',
        subject: 'social-sciences',
        topics: ['Inbound Tourism Economics', 'Cultural Heritage Promotion', 'Hospitality Service Design', 'Regional Tourism Spillover'],
        summary: 'Prof. Dr. Yuka Takiguchi analyzes consumer preferences among international tourists visiting historical and culinary attractions in Kanagawa Prefecture, developing strategies for regional economic diversification.',
        source: 'https://www.shodai.ac.jp'
      },
      {
        id: 3382,
        name: 'Prof. Dr. Hitoshi Watanabe',
        title: 'Professor of Management Information Systems and E-Business',
        department: 'Faculty of Commerce',
        subject: 'computer-science',
        topics: ['Supply Chain Data Analytics', 'E-Commerce Platform Architectures', 'Small Enterprise Digital Transformation', 'FinTech in Retail'],
        summary: 'Prof. Dr. Hitoshi Watanabe examines information technology adoption among small and medium-sized trading firms in the Greater Tokyo area, focusing on cloud ERP integration and cashless retail systems.',
        source: 'https://www.shodai.ac.jp'
      }
    ]
  },

  // 23. Yokohama Sōei University (Row 1794)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Yokohama Sōei University',
    shortName: 'Yokohama Soei Univ',
    slug: 'yokohama-soei-university-midori',
    location: 'Midori-ku, Yokohama, Kanagawa, Japan',
    website: 'https://www.soei.ac.jp',
    sourceRow: 1794,
    stats: {
      established: '2007',
      students: '1,500+',
      international: '5%',
      faculty: '120+'
    },
    heroSummary: 'Yokohama Sōei University is an accredited private healthcare and education institution in Midori-ku, Yokohama, celebrated for its rigorous Nursing and Child Education faculties with exceptional national licensure pass rates.',
    academicOverview: 'Operating state-of-the-art clinical simulation suites and early childhood demonstration classrooms, Yokohama Sōei prepares certified nurses, public health nurses, and licensed preschool/kindergarten educators. The university maintains extensive clinical practicum affiliations with top Kanagawa hospitals.',
    researchAdmissions: 'Applicants must possess a recognized high school diploma. International candidates require JLPT N1 or N2 for healthcare curricula, accompanied by an entrance essay and rigorous structured personal interview.',
    opportunities: [
      {
        id: 7657,
        title: 'Bachelor of Science in Nursing and Public Health Care',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Comprehensive four-year clinical curriculum qualifying graduates for both the Japan National Nursing Examination (Kangoshi) and National Public Health Nurse Examination (Hokenshi).',
        funding: 'Kanagawa Prefecture Nursing Student Loan Funds (tuition loan fully forgiven after five years of designated regional hospital service)',
        tuition: '¥1,750,000 per academic year (includes clinical training lab fees)',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation with high achievement in biology and chemistry',
          ielts: 'Fluent Japanese (JLPT N1 recommended due to national hospital patient care requirements)',
          gre: 'Not required',
          papers: 'Medical motivation statement and medical health clearance exam',
          references: 'High school principal recommendation'
        }
      },
      {
        id: 7658,
        title: 'Bachelor of Arts in Child Education and Developmental Pedagogy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Dual-credential program certifying students as licensed kindergarten teachers (Yōchiyen Kyōyu) and certified nursery school educators (Hoikushi), focusing on inclusive early childhood care and emotional development.',
        funding: 'Yokohama City Nursery Teacher Training Grant Programs and Sōei Founder’s Educational Scholarships',
        tuition: '¥1,250,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'High school diploma with 2.8+ GPA equivalent',
          ielts: 'JLPT N2 or higher for non-native Japanese speakers',
          gre: 'Not required',
          papers: 'Essay on child developmental psychology and pedagogical aspirations',
          references: 'School recommendation letter'
        }
      },
      {
        id: 7659,
        title: 'Graduate Certificate in Pediatric and Neonatal Critical Nursing',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Post-graduate clinical specialization for licensed nurses, focusing on neonatal intensive care unit (NICU) monitoring, pediatric emergency interventions, and family-centered pediatric crisis support.',
        funding: 'Regional hospital tuition remissions and clinical nurse specialist subventions',
        tuition: '¥350,000 certificate fee',
        fee: '¥15,000 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'Earned BSN or licensed registered nurse with minimum 2 years pediatric clinical experience',
          ielts: 'Professional Japanese fluency',
          gre: 'Not required',
          papers: 'Clinical case study essay and hospital endorsement letter',
          references: 'Hospital nursing director recommendation'
        }
      },
      {
        id: 7660,
        title: 'Yokohama Sōei Healthcare Leader Merit Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Merit scholarship awarded to top-scoring incoming students in the Faculty of Nursing, providing partial tuition relief for academic excellence.',
        funding: '¥300,000 annual scholarship award renewable based on clinical and classroom standing',
        tuition: 'Direct tuition reduction',
        fee: '¥0 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'Top 5% score in the general university entrance examination',
          ielts: 'Native or certified advanced Japanese',
          gre: 'Not required',
          papers: 'Application form and academic credentials',
          references: 'Admissions committee evaluation'
        }
      },
      {
        id: 7661,
        title: 'Research Fellowship in Community Geriatric Health and Home-Care Systems',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Applied research fellowship examining integrated community home-care (Chiiki Hōkatsu Care) models for aging urban populations in suburban Kanagawa.',
        funding: '¥150,000 monthly research stipend supported by regional municipal healthcare funds',
        tuition: 'Fellowship appointment',
        fee: '¥0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'Master of Nursing, Public Health, or Medical Sociology',
          ielts: 'Fluent Japanese for community fieldwork',
          gre: 'Not required',
          papers: '3-page research proposal on community-dwelling elderly health interventions',
          references: 'Two letters of recommendation from nursing or medical faculty'
        }
      },
      {
        id: 7662,
        title: 'Bachelor of Science in Global Health Care and Intercultural Nursing',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Specialized track examining disaster relief nursing, global infectious disease epidemiology, transcultural medical ethics, and medical English communication for international hospital wards.',
        funding: 'Institutional study abroad subsidies and global healthcare exchange grants',
        tuition: '¥1,750,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.soei.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials',
          ielts: 'JLPT N2 and English TOEIC 600+ or IELTS 5.5',
          gre: 'Not required',
          papers: 'Personal statement on global medical humanitarianism',
          references: 'High school recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3383,
        name: 'Prof. Dr. Tomoko Miyake',
        title: 'Dean of the Faculty of Nursing and Professor of Clinical Nursing',
        department: 'Faculty of Nursing',
        subject: 'biology',
        topics: ['Clinical Nursing Simulation', 'Patient Safety Culture in Acute Wards', 'Post-Surgical Pain Management', 'Nursing Ethics Education'],
        summary: 'Prof. Dr. Tomoko Miyake leads nursing curriculum innovation at Yokohama Sōei, investigating the efficacy of high-fidelity simulation mannequins in refining emergency decision-making for nursing undergraduates.',
        source: 'https://www.soei.ac.jp'
      },
      {
        id: 3384,
        name: 'Prof. Dr. Kazuhiko Suzuki',
        title: 'Professor of Early Childhood Developmental Psychology',
        department: 'Faculty of Child Education',
        subject: 'social-sciences',
        topics: ['Childhood Emotional Regulation', 'Play-Based Early Learning Pedagogy', 'Parent-Child Attachment Dynamics', 'Special Needs Inclusive Preschooling'],
        summary: 'Prof. Dr. Kazuhiko Suzuki conducts observational research on peer interaction in play-centered early childhood environments, evaluating teacher scaffolding methods for children with sensory processing differences.',
        source: 'https://www.soei.ac.jp'
      },
      {
        id: 3385,
        name: 'Prof. Dr. Sachiko Endo',
        title: 'Professor of Community Health Nursing and Gerontology',
        department: 'Faculty of Nursing',
        subject: 'social-sciences',
        topics: ['Community Integrated Care Systems', 'Dementia Prevention in Aging Suburbs', 'Caregiver Burnout Interventions', 'Home Visiting Nursing Models'],
        summary: 'Prof. Dr. Sachiko Endo evaluates community-based nursing support systems in Kanagawa, publishing policy frameworks for early dementia detection and informal caregiver respite programs.',
        source: 'https://www.soei.ac.jp'
      }
    ]
  },

  // 24. Yokohama University of Art and Design (Row 1795)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Yokohama University of Art and Design',
    shortName: 'Yokohama Art Univ',
    slug: 'yokohama-university-of-art-and-design-aoba',
    location: 'Aoba-ku, Yokohama, Kanagawa, Japan',
    website: 'https://www.yokohama-art.ac.jp',
    sourceRow: 1795,
    stats: {
      established: '1966',
      students: '1,200+',
      international: '12%',
      faculty: '95+'
    },
    heroSummary: 'Yokohama University of Art and Design (Yokohama Bijutsu Daigaku) is a creative arts and design university in Aoba-ku, Yokohama, renowned for fine art, visual communication design, character modeling, and industrial craft.',
    academicOverview: 'Operating an open-studio campus in northern Yokohama, the university fosters individual creative identity across its Department of Art and Design. Specialized courses span contemporary painting, sculpture, ceramic glass crafts, visual design, illustration, and dynamic media animation.',
    researchAdmissions: 'Undergraduate admissions require high school graduation credentials, practical artistic drawing/design examinations (Jitsugi Shiken) or an extensive portfolio review, accompanied by an interview. International students require JLPT N2 or EJU Japanese.',
    opportunities: [
      {
        id: 7663,
        title: 'Bachelor of Fine Arts in Visual Communication Design and Digital Illustration',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Studio program training professional visual designers in editorial publication design, dynamic typography, digital concept art, brand identity design, and web UI/UX media.',
        funding: 'Yokohama Art University Merit Scholarships (tuition waiver up to 50%) and Kanagawa art development awards',
        tuition: '¥1,690,000 per academic year (includes studio materials fee)',
        fee: '¥35,000 application fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027 (General Entrance Examination)',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials or equivalent',
          ielts: 'JLPT N2 or EJU Japanese Language 220+ points for international applicants',
          gre: 'Not required',
          papers: 'Artistic portfolio (15-20 original works) and personal artistic statement',
          references: 'Recommendation letter from art instructor or high school principal'
        }
      },
      {
        id: 7664,
        title: 'Bachelor of Fine Arts in Contemporary Painting and Printmaking',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Rigorous studio curriculum exploring oil painting techniques, contemporary Japanese Nihonga pigment methods, lithography, etching, and large-scale spatial installations.',
        funding: 'Endowed alumni awards and annual exhibition cash prizes for outstanding graduation pieces',
        tuition: '¥1,690,000 per academic year',
        fee: '¥35,000 application fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'High school graduation diploma',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Portfolio of original drawings, paintings, or prints; on-campus practical drawing exam',
          references: 'Academic reference'
        }
      },
      {
        id: 7665,
        title: 'Bachelor of Arts in Character Modeling, 3D CG, and Animation Media',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Specialized creative technology track teaching 3D character sculpting, digital rigging, stop-motion animation, concept worldbuilding, and video game visual asset production.',
        funding: 'Industry studio sponsorships (anime and gaming company talent awards) and JASSO scholarships',
        tuition: '¥1,690,000 per academic year',
        fee: '¥35,000 application fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'Recognized secondary school credentials',
          ielts: 'JLPT N2 for non-native Japanese applicants',
          gre: 'Not required',
          papers: 'Digital character sketches, 3D modeling files, or storyboards (10-15 artifacts)',
          references: 'Teacher recommendation'
        }
      },
      {
        id: 7666,
        title: 'Yokohama Emerging Artist Residency and Research Fellowship',
        type: 'Fellowship',
        subject: 'arts-design',
        desc: 'One-year residency fellowship providing dedicated studio atelier space, material funding, and a solo exhibition at the Yokohama Art University Gallery for emerging artists.',
        funding: '¥1,500,000 annual production stipend, free atelier access, and exhibition catalog production budget',
        tuition: 'Fellowship residency award',
        fee: '¥0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'BFA or MFA in Visual Arts, Fine Arts, Design, or Crafts',
          ielts: 'Basic working Japanese or English',
          gre: 'Not required',
          papers: 'Exhibition proposal (3 pages), artistic statement, and high-resolution portfolio PDF',
          references: 'Two letters of recommendation from curators or art professors'
        }
      },
      {
        id: 7667,
        title: 'Bachelor of Fine Arts in Ceramic and Glass Industrial Craft',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Studio craft program emphasizing traditional Japanese kiln ceramic firing, contemporary vessel design, glassblowing, architectural glass art, and sustainable material fabrication.',
        funding: 'Craft Guild apprenticeships and institutional material cost subsidization awards',
        tuition: '¥1,690,000 per academic year',
        fee: '¥35,000 application fee',
        deadline: '2027-01-25',
        deadlineText: 'January 25, 2027',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'Secondary school leaving qualification',
          ielts: 'JLPT N2 for international students',
          gre: 'Not required',
          papers: 'Photographic documentation of three-dimensional craft works or ceramic pieces',
          references: 'Art teacher recommendation'
        }
      },
      {
        id: 7668,
        title: 'Yokohama Art University International Student Tuition Relief Grant',
        type: 'Scholarship',
        subject: 'arts-design',
        desc: 'Need-based tuition reduction granting 30% reduction on tuition fees for self-funded international students demonstrating commendable creative dedication.',
        funding: '30% tuition fee reduction (approx ¥350,000 annual relief) renewable annually',
        tuition: 'Direct tuition waiver',
        fee: '¥0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://www.yokohama-art.ac.jp',
        requirements: {
          gpa: 'Enrolled international degree student with good studio attendance and passing portfolio evaluations',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'Income declaration and creative progress report',
          references: 'Studio faculty advisor approval'
        }
      }
    ],
    researchers: [
      {
        id: 3386,
        name: 'Prof. Kenjiro Okazaki',
        title: 'Professor of Contemporary Art Theory and Critical Aesthetics',
        department: 'Department of Fine Arts',
        subject: 'arts-design',
        topics: ['Post-War Japanese Modernism', 'Spatial Installation Aesthetics', 'Comparative Art History', 'Architectural Curation'],
        summary: 'Prof. Kenjiro Okazaki is a seminal Japanese artist, critic, and author who represented Japan at the Venice Biennale, researching relational aesthetics, cognitive theories of art, and cross-cultural modernisms.',
        source: 'https://www.yokohama-art.ac.jp'
      },
      {
        id: 3387,
        name: 'Prof. Dr. Hiroshi Minamishima',
        title: 'Professor of Art Curation and Museum Studies',
        department: 'Department of Art and Design',
        subject: 'arts-design',
        topics: ['Asian Contemporary Art Curation', 'Socially Engaged Art Practices', 'Museum Exhibition Design', 'Public Art Policy'],
        summary: 'Prof. Dr. Hiroshi Minamishima is former director of the Contemporary Art Museum Kumamoto, investigating international biennale curation models and socially engaged public art interventions.',
        source: 'https://www.yokohama-art.ac.jp'
      },
      {
        id: 3388,
        name: 'Prof. Masako Sato',
        title: 'Professor of Visual Communication and Typography',
        department: 'Department of Design',
        subject: 'arts-design',
        topics: ['Japanese Kana Typography Systems', 'Information Graphic Architecture', 'Editorial Book Design', 'Sustainable Packaging Design'],
        summary: 'Prof. Masako Sato directs research in editorial book art and typographic legibility in bilingual Japanese-Latin script design, designing award-winning corporate identities and cultural exhibition publications.',
        source: 'https://www.yokohama-art.ac.jp'
      }
    ]
  },

  // 25. Yokohama University of Pharmacy (Row 1796)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Yokohama University of Pharmacy',
    shortName: 'Hamayaku Yokohama',
    slug: 'yokohama-university-of-pharmacy-totsuka',
    location: 'Totsuka-ku, Yokohama, Kanagawa, Japan',
    website: 'https://www.hamayaku.ac.jp',
    sourceRow: 1796,
    stats: {
      established: '2006',
      students: '2,400+',
      international: '7%',
      faculty: '180+'
    },
    heroSummary: 'Yokohama University of Pharmacy (Hamayaku) is a leading pharmaceutical university in Totsuka, Yokohama, celebrated for pioneering Japan’s first Department of Traditional Chinese and Kampo Medicine alongside advanced clinical pharmacology.',
    academicOverview: 'Operating an expansive botanical research garden with over 1,000 medicinal plant species, Hamayaku provides 6-year clinical pharmacist degree tracks and 4-year pharmaceutical science programs. Research centers specialize in Kampo phytochemistry, targeted oncology drug delivery, and analytical toxicology.',
    researchAdmissions: 'Undergraduate admissions for the 6-year pharmacy and 4-year pharmaceutical sciences curricula require high school completion with strong scientific aptitude. International applicants require certified Japanese proficiency (JLPT N1 or N2) and science exams.',
    opportunities: [
      {
        id: 7669,
        title: 'Doctor of Pharmacy (Pharm.D.) - Clinical and Hospital Pharmacy Track (6-Year)',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Accredited six-year professional degree qualifying graduates for the Japan National Pharmacist Examination (Yakuzaishi), featuring clinical hospital rotations, pharmacokinetics, and therapeutics.',
        funding: 'Hamayaku Special Scholarship Program covering up to ¥1,000,000/year of tuition for top academic performers',
        tuition: '¥2,150,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation with high achievement in chemistry, biology, and mathematics',
          ielts: 'JLPT N1 recommended for clinical hospital practicums',
          gre: 'Not required',
          papers: 'Statement of purpose in Japanese and medical fitness certification',
          references: 'High school principal recommendation letter'
        }
      },
      {
        id: 7670,
        title: 'Bachelor of Pharmaceutical Sciences in Kampo and Natural Medicines (4-Year)',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Japan’s premier academic program in Kampo phytochemistry, isolating bioactive natural products from medicinal herbs, evaluating herbal pharmacognosy, and designing standardized botanical pharmaceuticals.',
        funding: 'Medicinal Plant Research Grants and Hamayaku Alumni Endowed Scholarships',
        tuition: '¥1,550,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'High school diploma or certified international 12-year education',
          ielts: 'JLPT N2 or EJU Japanese Language 220+ points',
          gre: 'Not required',
          papers: 'Essay on natural medicine and chemical biology',
          references: 'Science teacher recommendation'
        }
      },
      {
        id: 7671,
        title: 'Ph.D. in Pharmaceutical Sciences and Molecular Drug Discovery',
        type: 'Degree Program',
        subject: 'chemistry',
        desc: 'Postgraduate doctoral training in synthetic medicinal chemistry, computer-aided drug design, pharmacokinetic modeling, and biochemical toxicology of novel therapeutics.',
        funding: 'MEXT Monbukagakusho Scholarships and Hamayaku Graduate Research Fellowships (¥120,000/month)',
        tuition: '¥600,000 per academic year (waived for MEXT scholars)',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027 (April Intake)',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'Master of Science in Pharmacy, Chemistry, or Life Sciences (or 6-year Pharm.D. graduate)',
          ielts: 'IELTS 6.5 or TOEFL iBT 80 or JLPT N2',
          gre: 'Not required',
          papers: 'Master thesis summary and 3-page proposed dissertation research plan',
          references: 'Two letters of recommendation from pharmaceutical science professors'
        }
      },
      {
        id: 7672,
        title: 'Hamayaku Botanical Medicine Research Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        desc: 'Visiting research fellowship utilizing the 20,000-square-meter Hamayaku Medicinal Botanical Garden to profile endangered medicinal plant alkaloids and evaluate anti-inflammatory natural extracts.',
        funding: '¥1,800,000 annual research stipend plus full access to phytochemistry extraction and chromatography facilities',
        tuition: 'Fellowship award',
        fee: '¥0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'Doctoral degree or enrolled PhD candidate in Pharmacognosy, Botany, or Natural Product Chemistry',
          ielts: 'Proficiency in Japanese or English',
          gre: 'Not required',
          papers: 'Research proposal on natural plant compound isolation and curriculum vitae',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7673,
        title: 'Bachelor of Pharmaceutical Sciences in Health Food and Nutritional Pharmacology',
        type: 'Degree Program',
        subject: 'biology',
        desc: 'Four-year program preparing functional food development specialists, analyzing dietary supplement safety, nutraceutical chemistry, gut microbiome pharmacology, and regulatory food law.',
        funding: 'Nutraceutical industry partner scholarships and JASSO study stipends',
        tuition: '¥1,550,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'Secondary school leaving qualification with biology or chemistry',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Personal motivation statement and secondary transcripts',
          references: 'School principal recommendation'
        }
      },
      {
        id: 7674,
        title: 'Hamayaku International Pharmacist Support Grant',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Financial support grant assisting foreign pharmacists preparing for the Japanese Pharmacist Licensure Equivalence evaluation and enrollment into graduate pharmacology programs.',
        funding: '¥500,000 one-time educational grant contributing towards entrance and laboratory fees',
        tuition: 'Direct fee reduction',
        fee: '¥0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.hamayaku.ac.jp',
        requirements: {
          gpa: 'Graduation from foreign accredited pharmacy university',
          ielts: 'JLPT N1 certification',
          gre: 'Not required',
          papers: 'Foreign pharmacist license copy, Ministry of Health evaluation document, and CV',
          references: 'Two professional letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3389,
        name: 'Prof. Dr. Yoshihiro Mimaki',
        title: 'Professor of Pharmacognosy and Natural Products Chemistry',
        department: 'Department of Natural Product Chemistry',
        subject: 'chemistry',
        topics: ['Steroidal Saponins from Liliaceae', 'Cytotoxic Natural Products', 'Kampo Herbal Quality Control', 'Medicinal Plant Chemical Ecology'],
        summary: 'Prof. Dr. Yoshihiro Mimaki is a distinguished natural product chemist who has isolated and structurally elucidated hundreds of novel saponins and glycosides with selective cytotoxic activity against human tumor cell lines.',
        source: 'https://www.hamayaku.ac.jp'
      },
      {
        id: 3390,
        name: 'Prof. Dr. Katsuyoshi Matsunami',
        title: 'Dean of the Faculty of Pharmaceutical Sciences',
        department: 'Faculty of Pharmaceutical Sciences',
        subject: 'biology',
        topics: ['Bioactive Secondary Metabolites', 'Traditional Asian Medicines', 'Antimalarial Phytochemicals', 'Herbal Pharmacogenomics'],
        summary: 'Prof. Dr. Katsuyoshi Matsunami investigates therapeutic phytochemicals from tropical and temperate medicinal plants, identifying enzymatic targets for antimalarial, antiviral, and anti-diabetic botanical extracts.',
        source: 'https://www.hamayaku.ac.jp'
      },
      {
        id: 3391,
        name: 'Prof. Dr. Noriko Takahashi',
        title: 'Professor of Clinical Pharmacokinetics and Drug Delivery Systems',
        department: 'Department of Clinical Pharmacy',
        subject: 'biology',
        topics: ['Nanoparticle Drug Delivery', 'Blood-Brain Barrier Drug Transport', 'Individualized Pharmacokinetic Dosing', 'Therapeutic Drug Monitoring'],
        summary: 'Prof. Dr. Noriko Takahashi designs lipid nanoparticle delivery systems to transport chemotherapeutic agents across biological membranes, optimizing clinical dosing regimens for geriatric cancer patients.',
        source: 'https://www.hamayaku.ac.jp'
      }
    ]
  },

  // 26. Shanghai University Tokyo Campus (Row 1797)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Shanghai University Tokyo Campus',
    shortName: 'SHU Tokyo',
    slug: 'shanghai-university-tokyo-campus',
    location: 'Shinjuku-ku, Tokyo, Japan',
    website: 'https://www.u-shanghai.jp',
    sourceRow: 1797,
    stats: {
      established: '2019',
      students: '350+',
      international: '85%',
      faculty: '35+'
    },
    heroSummary: 'Shanghai University Tokyo Campus is the official Japanese overseas campus of Shanghai University (Project 211 / Double First-Class), offering accredited dual-degree programs in international economics, Chinese-Japanese bilateral trade, and cross-cultural communication.',
    academicOverview: 'Approved by the Chinese Ministry of Education and operating in Shinjuku, Tokyo, the campus allows students to complete full undergraduate curricula in Tokyo and Shanghai. Programs integrate Mandarin Chinese and Japanese business negotiation, cross-border digital commerce, and East Asian economic integration.',
    researchAdmissions: 'Undergraduate admissions evaluate high school graduation credentials, English or Japanese proficiency, and Mandarin Chinese language foundation. Students without prior Chinese study complete an intensive bilingual preparatory semester.',
    opportunities: [
      {
        id: 7675,
        title: 'Bachelor of Economics in International Economics and China-Japan Trade',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive four-year dual-degree program covering bilateral tariff policies, cross-border supply chains, Chinese corporate business strategy, and foreign exchange risk management.',
        funding: 'Shanghai University Overseas Excellence Scholarships (up to 50% tuition reduction) and corporate trade association stipends',
        tuition: '¥850,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027 (Spring Intake) / July 31, 2027 (Fall Intake)',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'Secondary school diploma (12-year equivalent) with minimum 2.8 GPA',
          ielts: 'JLPT N2, HSK Level 4, or English IELTS 6.0',
          gre: 'Not required',
          papers: 'Statement of purpose on Sino-Japanese economic cooperation and high school transcripts',
          references: 'High school teacher or principal recommendation'
        }
      },
      {
        id: 7676,
        title: 'Bachelor of Arts in Chinese Language, Culture, and International Business',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Immersive multilingual degree developing professional trilingual fluency (Mandarin, Japanese, English) alongside diplomatic cross-cultural negotiation and international business ethics.',
        funding: 'Chinese Government Scholarship (CSC) mobility grants for study terms at the Shanghai Baoshan main campus',
        tuition: '¥850,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'High school graduation diploma',
          ielts: 'Proof of linguistic aptitude (Japanese, English, or Chinese)',
          gre: 'Not required',
          papers: 'Personal narrative essay describing career goals in East Asian diplomacy or commerce',
          references: 'Academic reference'
        }
      },
      {
        id: 7677,
        title: 'Shanghai University Tokyo Belt and Road Cross-Border E-Commerce Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Research fellowship for graduate scholars and young professionals investigating cross-border digital platforms (Alibaba, Rakuten), consumer customs clearance, and digital RMB trade settlements.',
        funding: '¥1,200,000 annual research grant plus travel funding between Tokyo and Shanghai logistics hubs',
        tuition: 'Fellowship research grant',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'Bachelor or Master in Economics, Trade, International Relations, or Data Science',
          ielts: 'Fluent Mandarin Chinese and Japanese or English',
          gre: 'Not required',
          papers: '4-page research proposal on East Asian digital trade corridors and CV',
          references: 'Two letters of recommendation from trade scholars'
        }
      },
      {
        id: 7678,
        title: 'Certificate in Sino-Japanese Business Interpretation and Diplomatic Protocol',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Professional post-baccalaureate credential in simultaneous and consecutive interpretation between Mandarin and Japanese for corporate boardrooms and bilateral government delegations.',
        funding: 'Corporate employee sponsorship tuition discounts from multinational trading corporations',
        tuition: '¥280,000 total certificate tuition',
        fee: '¥15,000 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'Undergraduate degree in any field with advanced bilingual fluency (HSK 6 and JLPT N1)',
          ielts: 'Not required',
          gre: 'Not required',
          papers: 'Bilingual translation test and admissions oral interview',
          references: 'One professional recommendation'
        }
      },
      {
        id: 7679,
        title: 'Shanghai University Tokyo Campus Global Youth Leadership Award',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit scholarship awarded to top matriculating international students demonstrating exceptional potential in fostering peaceful multilateral relations in the Asia-Pacific region.',
        funding: '¥400,000 annual tuition credit distributed across semesters',
        tuition: 'Direct tuition grant',
        fee: '¥0 application fee',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'Secondary school academic average above 85% or 3.4/4.0 GPA',
          ielts: 'Proficiency in English or Japanese',
          gre: 'Not required',
          papers: 'Essay on regional peaceful economic integration and leadership portfolio',
          references: 'High school teacher recommendation'
        }
      },
      {
        id: 7680,
        title: 'Bachelor of Economics in Digital Finance and FinTech in East Asia',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Interdisciplinary degree combining algorithmic financial modeling, blockchain settlement in cross-border trade, mobile payments, and regulatory sandbox frameworks in China and Japan.',
        funding: 'Fintech consortium scholarships and Tokyo campus achievement awards',
        tuition: '¥850,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.u-shanghai.jp',
        requirements: {
          gpa: 'Secondary school diploma with high mathematics performance',
          ielts: 'IELTS 6.0, JLPT N2, or HSK 4',
          gre: 'Not required',
          papers: 'Personal statement on digital finance technologies',
          references: 'Academic transcripts'
        }
      }
    ],
    researchers: [
      {
        id: 3392,
        name: 'Prof. Dr. Wei Zhang',
        title: 'Campus Director and Professor of International Trade Economics',
        department: 'Faculty of Economics',
        subject: 'social-sciences',
        topics: ['RCEP Regional Integration', 'China-Japan Bilateral Trade Tariffs', 'Supply Chain Decoupling and Resilience', 'Cross-Border FDI Flows'],
        summary: 'Prof. Dr. Wei Zhang directs academic operations at Shanghai University Tokyo Campus, publishing empirical analyses on tariff structures under the Regional Comprehensive Economic Partnership (RCEP) and Sino-Japanese foreign direct investment.',
        source: 'https://www.u-shanghai.jp'
      },
      {
        id: 3393,
        name: 'Prof. Dr. Kenichi Tanaka',
        title: 'Professor of Comparative East Asian Business Strategy',
        department: 'Department of International Business',
        subject: 'social-sciences',
        topics: ['Multinational Corporate Governance', 'Cross-Cultural Joint Venture Management', 'Supply Chain Risk Mitigation in East Asia', 'Automotive Industry Transitions'],
        summary: 'Prof. Dr. Kenichi Tanaka consults Japanese and Chinese multinational corporations on joint venture conflict management, technology licensing, and electric vehicle supply chain partnerships.',
        source: 'https://www.u-shanghai.jp'
      },
      {
        id: 3394,
        name: 'Prof. Dr. Li Chen',
        title: 'Professor of Applied Linguistics and Cross-Cultural Communication',
        department: 'Department of Languages and Cultural Studies',
        subject: 'social-sciences',
        topics: ['Pragmatics of High-Stakes Business Negotiations', 'Trilingual Pedagogical Frameworks', 'Diplomatic Discourse Analysis', 'Intercultural Semiotics'],
        summary: 'Prof. Dr. Li Chen researches pragmatic communication barriers between Chinese and Japanese corporate executives, designing specialized simulation-based negotiation curricula for bilingual graduates.',
        source: 'https://www.u-shanghai.jp'
      }
    ]
  },

  // 27. Hyogo-Kobe University Consortium (HKUC) (Row 1798)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Hyogo-Kobe University Consortium (HKUC)',
    shortName: 'HKUC Consortium',
    slug: 'hyogo-kobe-university-consortium-hkuc',
    location: 'Chuo-ku, Kobe, Hyogo, Japan',
    website: 'https://consortium-hyogo.jp',
    sourceRow: 1798,
    stats: {
      established: '2006',
      students: 'Network uniting 45+ universities & 100,000+ students',
      international: 'Over 8,000 international students',
      faculty: '5,000+ member faculty'
    },
    heroSummary: 'The Hyogo-Kobe University Consortium (HKUC / 大学コンソーシアムひょうご神戸) unites 45 universities, local governments, and industrial enterprises across Hyogo Prefecture, driving inter-university credit exchanges, regional disaster resilience research, and global scholar retention.',
    academicOverview: 'Consortium members include Kobe University, University of Hyogo, Kwansei Gakuin University, and Konan University. HKUC delivers unified credit-transfer courses in Hanshin earthquake disaster risk reduction, marine biosciences in the Seto Inland Sea, international port governance, and cross-institutional career incubation.',
    researchAdmissions: 'Joint programs and consortium fellowships are open to enrolled undergraduate and graduate students at any HKUC member institution. International scholar initiatives accept students across partner universities via consortium nomination.',
    opportunities: [
      {
        id: 7681,
        title: 'Consortium Inter-University Credit Transfer Program in Disaster Reduction and Human Renovation',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Interdisciplinary collaborative curriculum co-taught by Kobe University and Hyogo prefectural institutes, analyzing seismic structural engineering, community disaster risk reduction (DRR), and disaster psychology.',
        funding: 'Tuition-free credit transfer for students matriculated at any of the 45 HKUC member institutions',
        tuition: '¥0 inter-university transfer fee',
        fee: '¥0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027 (Spring Term) / September 15, 2027 (Fall Term)',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Enrolled undergraduate or graduate student at an HKUC member university with good academic standing',
          ielts: 'Japanese or English depending on selected lecture series',
          gre: 'Not required',
          papers: 'Consortium registration form approved by home university registrar',
          references: 'Home university academic advisor approval'
        }
      },
      {
        id: 7682,
        title: 'HKUC Regional Revitalization and Industrial Innovation Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Joint graduate research fellowship conducting collaborative projects with Hanshin-Awaji industrial enterprises in robotics, medical devices, biotechnology, and sustainable port transport.',
        funding: '¥1,200,000 annual research grant co-funded by Hyogo Prefecture and the Kobe Chamber of Commerce',
        tuition: 'Fellowship stipend award',
        fee: '¥0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Matriculated master or doctoral student in engineering, economics, or environmental science at a member university',
          ielts: 'Working proficiency in Japanese',
          gre: 'Not required',
          papers: 'Joint industry-academic research proposal (4 pages) endorsed by faculty and corporate partner',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7683,
        title: 'Consortium Seto Inland Sea Environmental Conservation and Marine Ecology Practicum',
        type: 'Degree Program',
        subject: 'environment',
        desc: 'Field marine science course utilizing coastal research vessels, monitoring red tide algal blooms, microplastic distribution, benthic ecosystem biodiversity, and coastal hypoxia in the Seto Inland Sea.',
        funding: 'Consortium field travel bursaries covering vessel boarding, laboratory sample analysis, and coastal field station lodging',
        tuition: '¥0 tuition for member students',
        fee: '¥0 application fee',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Completion of fundamental undergraduate ecology or chemistry courses',
          ielts: 'Japanese or English proficiency',
          gre: 'Not required',
          papers: 'Statement of environmental interest and field safety waiver',
          references: 'Biology department faculty recommendation'
        }
      },
      {
        id: 7684,
        title: 'Hyogo International Student Career Retention and Internship Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Prefectural scholarship program supporting international students completing internships at leading manufacturing, biomedical, and trading companies based in Hyogo and Kobe.',
        funding: '¥60,000 monthly living grant during the internship period plus professional Japanese business etiquette certification',
        tuition: 'Direct scholarship grant',
        fee: '¥0 application fee',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Enrolled international student at an HKUC university entering 3rd/4th year undergraduate or graduate level',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'Internship placement application, career statement, and resume',
          references: 'University career center endorsement'
        }
      },
      {
        id: 7685,
        title: 'Consortium Interdisciplinary Biomedical Innovation Seminar and Research Grant',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Collaborative grant enabling graduate medical and engineering students to participate in translational research at the Kobe Biomedical Innovation Cluster (KBIC) on Port Island.',
        funding: '¥500,000 laboratory project grant plus seminar residency at the RIKEN Center for Biosystems Dynamics Research in Kobe',
        tuition: 'Project research grant',
        fee: '¥0 application fee',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Enrolled in graduate biomedical, pharmacy, or bioengineering program at an HKUC institution',
          ielts: 'English or Japanese proficiency',
          gre: 'Not required',
          papers: 'Translational biomedical research proposal aligned with KBIC priorities',
          references: 'Laboratory director recommendation'
        }
      },
      {
        id: 7686,
        title: 'Consortium Hanshin Global Peace and Multicultural Coexistence Certificate',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Modular certificate examining immigration policy in Japan, intercultural community mediation, human rights law, and multicultural disaster response coordination.',
        funding: 'Tuition-free for member students; sponsored by the Hyogo International Association',
        tuition: '¥0 fee',
        fee: '¥0 application fee',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        source: 'https://consortium-hyogo.jp',
        requirements: {
          gpa: 'Enrollment at an HKUC member university',
          ielts: 'Japanese or English proficiency',
          gre: 'Not required',
          papers: 'Statement of motivation and course enrollment plan',
          references: 'Advisor sign-off'
        }
      }
    ],
    researchers: [
      {
        id: 3395,
        name: 'Prof. Dr. Yoshiaki Kawata',
        title: 'Executive Director of Disaster Reduction and Professor of Civil Engineering',
        department: 'Consortium Committee on Disaster Reduction and Safety Management',
        subject: 'engineering',
        topics: ['Catastrophic Disaster Risk Reduction', 'Tsunami Run-Up Hydrodynamics', 'Crisis Evacuation Simulation', 'Urban Seismic Resilience'],
        summary: 'Prof. Dr. Yoshiaki Kawata is one of Japan’s most influential disaster reduction authorities, directing national advisory panels on Nankai Trough earthquake preparedness and urban flood defense systems.',
        source: 'https://consortium-hyogo.jp'
      },
      {
        id: 3396,
        name: 'Prof. Dr. Masahiko Yoshii',
        title: 'Chair of the International Academic Exchange Committee and Professor of Economics',
        department: 'Executive Board of HKUC / Kobe University Faculty of Economics',
        subject: 'social-sciences',
        topics: ['European Economic Transition', 'Comparative Regional Integration', 'International Student Mobility Policy', 'Hanshin Economic Dynamism'],
        summary: 'Prof. Dr. Masahiko Yoshii guides international academic policies across the 45 HKUC institutions, researching comparative economic regionalism and international graduate workforce integration.',
        source: 'https://consortium-hyogo.jp'
      },
      {
        id: 3397,
        name: 'Dr. Sayaka Fujii',
        title: 'Senior Coordinator of the Kobe Biomedical Academic-Industry Alliance',
        department: 'Division of Medical and Life Science Collaboration',
        subject: 'biology',
        topics: ['Translational Medical Cluster Governance', 'Biotech Startup Incubators', 'Regenerative Medicine Regulatory Pathway', 'Life Science Talent Retention'],
        summary: 'Dr. Sayaka Fujii coordinates clinical translation partnerships between consortium university laboratories and pharmaceutical companies at the Kobe Biomedical Innovation Cluster.',
        source: 'https://consortium-hyogo.jp'
      }
    ]
  },

  // 28. Japan University of Economics Kobe Sannomiya Campus (Row 1799)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Japan University of Economics - Kobe Sannomiya Campus',
    shortName: 'JUE Kobe',
    slug: 'japan-university-of-economics-kobe-sannomiya',
    location: 'Chuo-ku, Kobe, Hyogo, Japan',
    website: 'https://shibuya.jue.ac.jp',
    sourceRow: 1799,
    stats: {
      established: '1968',
      students: '3,800+ (university parent)',
      international: '32%',
      faculty: '210+'
    },
    heroSummary: 'Japan University of Economics (Nihon Keizai Daigaku) Kobe Sannomiya Campus is an urban business institution situated in central Kobe, delivering hands-on degrees in international business, entertainment management, tourism, and global economics.',
    academicOverview: 'Part of the Tsuzuki Education Group, JUE Kobe specializes in practical business education tailored to Asia-Pacific international commerce. Located in the bustling Sannomiya commercial corridor, the campus features innovative concentrations in fashion business, pop culture economics, digital hospitality marketing, and international trade.',
    researchAdmissions: 'Undergraduate admissions evaluate high school graduation credentials, JLPT N2 or EJU scores for international applicants, a statement of commercial motivation, and an interview assessing entrepreneurial drive.',
    opportunities: [
      {
        id: 7687,
        title: 'Bachelor of Economics in International Business and Asia-Pacific Trade',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Undergraduate degree focusing on cross-border logistics in the Kansai region, trade negotiation, foreign exchange risk management, and enterprise marketing in emerging Asian markets.',
        funding: 'Tsuzuki Educational Foundation International Scholarships offering 20% to 50% tuition reduction',
        tuition: '¥980,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027 (General Entrance Examination)',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials (12 years of formal education)',
          ielts: 'JLPT N2 or EJU Japanese Language 200+ points',
          gre: 'Not required',
          papers: 'Statement of purpose in Japanese (800 characters) and high school transcripts',
          references: 'Recommendation letter from Japanese language institute or high school principal'
        }
      },
      {
        id: 7688,
        title: 'Bachelor of Economics in Fashion Business, Media, and Entertainment Management',
        type: 'Degree Program',
        subject: 'arts-design',
        desc: 'Unique business curriculum exploring apparel merchandising, pop culture intellectual property monetization, digital brand licensing, and entertainment event production in Kobe.',
        funding: 'Kobe Creative Industry Partner Scholarships and institutional talent awards',
        tuition: '¥980,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'High school graduation diploma',
          ielts: 'JLPT N2 for non-native Japanese speakers',
          gre: 'Not required',
          papers: 'Creative business essay and portfolio of marketing/fashion concepts (optional)',
          references: 'Academic reference'
        }
      },
      {
        id: 7689,
        title: 'Bachelor of Economics in Hotel, Resort, and Luxury Tourism Management',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Specialized program training managers in international luxury hotel operations, inbound cruise ship tourism in Kobe Port, food & beverage cost analytics, and omotenashi hospitality standards.',
        funding: 'Kansai Hotel Association internships offering paid practical placements alongside degree studies',
        tuition: '¥980,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'Recognized secondary school credentials',
          ielts: 'JLPT N2 or equivalent Japanese competence',
          gre: 'Not required',
          papers: 'Personal statement on hospitality leadership',
          references: 'School principal recommendation'
        }
      },
      {
        id: 7690,
        title: 'JUE Kobe Special Entrepreneurship Incubator Grant',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Seed funding grant and tuition waiver for student founders launching verified e-commerce, trade, or cultural cross-border enterprises during their degree program.',
        funding: 'Up to ¥500,000 seed venture capital plus 50% tuition reduction during startup incubation year',
        tuition: 'Direct venture grant and tuition waiver',
        fee: '¥0 application fee',
        deadline: '2027-05-31',
        deadlineText: 'May 31, 2027',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'Enrolled student at JUE Kobe Sannomiya with business plan proposal',
          ielts: 'Japanese or English fluency',
          gre: 'Not required',
          papers: 'Complete 10-page business model pitch deck, cash flow projection, and prototype presentation',
          references: 'Faculty entrepreneurship committee evaluation'
        }
      },
      {
        id: 7691,
        title: 'Bachelor of Economics in Digital Commerce and AI-Driven Financial Analytics',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Undergraduate specialization in electronic commerce platforms, mobile payment architectures, algorithmic retail pricing, and business intelligence dashboards.',
        funding: 'Tsuzuki Foundation IT Talent Scholarships and JASSO Honors Study Grants',
        tuition: '¥980,000 per academic year',
        fee: '¥20,000 application fee',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation with solid mathematical foundation',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Application dossier and personal motivation letter',
          references: 'Academic transcripts'
        }
      },
      {
        id: 7692,
        title: 'JUE International Student Academic Excellence Honor Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Merit-based scholarship rewarding high academic performance among international undergraduate students enrolled at the Kobe Sannomiya Campus.',
        funding: '¥300,000 annual scholarship award applied directly against semester tuition fees',
        tuition: 'Direct tuition waiver',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://shibuya.jue.ac.jp',
        requirements: {
          gpa: 'Cumulative GPA of 3.2/4.0 or top 10% class ranking in prior academic year',
          ielts: 'JLPT N2 or higher',
          gre: 'Not required',
          papers: 'Academic transcript and faculty advisor recommendation form',
          references: 'Class dean endorsement'
        }
      }
    ],
    researchers: [
      {
        id: 3398,
        name: 'Prof. Dr. Yoshihisa Tsuzuki',
        title: 'Professor of Global Entrepreneurship and Corporate Economics',
        department: 'Faculty of Economics',
        subject: 'social-sciences',
        topics: ['Asian Cross-Border Venture Strategy', 'Private University Innovation Policy', 'SME Internationalization', 'Digital Business Models'],
        summary: 'Prof. Dr. Yoshihisa Tsuzuki conducts research on corporate entrepreneurship within the East Asian economic sphere, evaluating growth dynamics of cross-border retail ventures and private higher education innovation.',
        source: 'https://shibuya.jue.ac.jp'
      },
      {
        id: 3399,
        name: 'Prof. Dr. Hiroaki Matsubara',
        title: 'Professor of Marketing and Entertainment Management',
        department: 'Faculty of Economics / Kobe Campus',
        subject: 'social-sciences',
        topics: ['Pop Culture Intellectual Property Valuation', 'Consumer Behavior in Creative Industries', 'Fashion Brand Merchandising', 'Digital Content Distribution'],
        summary: 'Prof. Dr. Hiroaki Matsubara investigates consumer engagement in Japanese pop culture and fashion, analyzing global licensing strategies for character goods and digital streaming monetization.',
        source: 'https://shibuya.jue.ac.jp'
      },
      {
        id: 3400,
        name: 'Prof. Dr. Midori Yamashita',
        title: 'Professor of Hospitality Economics and Tourism Development',
        department: 'Department of Business Administration',
        subject: 'social-sciences',
        topics: ['Inbound Tourism in Hanshin Ports', 'Service Quality in Luxury Hospitality', 'Destination Brand Equity', 'Culinary Tourism Marketing'],
        summary: 'Prof. Dr. Midori Yamashita investigates hospitality service excellence and destination branding in Kobe, evaluating the economic multiplier effects of cruise ship tourism and regional food culture promotion.',
        source: 'https://shibuya.jue.ac.jp'
      }
    ]
  },

  // 29. Tohoku Gakuin University Tsuchitoi Campus (Row 1800)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Tohoku Gakuin University - Tsuchitoi Main Campus',
    shortName: 'Tohoku Gakuin Tsuchitoi',
    slug: 'tohoku-gakuin-university-tsuchitoi-sendai',
    location: 'Aoba-ku & Wakabayashi-ku, Sendai, Miyagi, Japan',
    website: 'https://www.tohoku-gakuin.ac.jp',
    sourceRow: 1800,
    stats: {
      established: '1886',
      students: '11,500+',
      international: '5%',
      faculty: '580+'
    },
    heroSummary: 'Tohoku Gakuin University (TGU) is the oldest and largest private Christian comprehensive university in northern Japan, operating its historic Tsuchitoi Main Campus in central Sendai, renowned for law, economics, English literature, and regional data science.',
    academicOverview: 'Founded in 1886 by missionary Masayoshi Oshikawa and William E. Hoy, TGU features the Letters, Economics, Business Administration, Law, Engineering, and Regional Studies faculties. The Tsuchitoi Campus houses registered Tangible Cultural Properties, the Institute of Christian Culture, and advanced regional data analytics laboratories.',
    researchAdmissions: 'Undergraduate admissions evaluate high school graduation credentials, the Common Test for University Admissions or TGU institutional exams. International students require JLPT N2 or EJU scores and an in-person or online interview.',
    opportunities: [
      {
        id: 7693,
        title: 'Bachelor of Law in Public Administration and Constitutional Jurisprudence',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Comprehensive legal education preparing students for national civil service careers, judicial examinations, local government administration, and international public law.',
        funding: 'TGU Special Honors Entrance Examination Scholarship (full tuition waiver for four years) and Christian Founders Merit Awards',
        tuition: '¥1,148,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-22',
        deadlineText: 'January 22, 2027 (General Entrance Exam)',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'Secondary school graduation credentials with strong social studies performance',
          ielts: 'JLPT N2 or EJU Japanese Language 220+ points for international applicants',
          gre: 'Not required',
          papers: 'Statement of purpose in Japanese and academic transcripts',
          references: 'High school principal recommendation'
        }
      },
      {
        id: 7694,
        title: 'Master of Economics and Regional Data Analytics',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Graduate curriculum combining econometric modeling, geographic information systems (GIS), spatial economics, and demographic policy evaluation for Tohoku regional revitalization.',
        funding: 'TGU Graduate School Tuition Reduction (50% waiver for international scholars) and Sendai City research stipends',
        tuition: '¥680,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027 (Spring Intake)',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'Bachelor degree in Economics, Business, Mathematics, or Social Sciences (min 2.8 GPA)',
          ielts: 'JLPT N2 or English IELTS 6.0',
          gre: 'Not required',
          papers: 'Undergraduate thesis summary and 3-page research proposal on regional economic analytics',
          references: 'Two letters of recommendation from university professors'
        }
      },
      {
        id: 7695,
        title: 'Bachelor of Arts in English Literature and Transcultural Humanities',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Historic humanities program established in 1886, teaching Anglo-American literary history, linguistics, cross-cultural comparative philosophy, and professional translation.',
        funding: 'TGU International Exchange Scholarships supporting semester study abroad at partner universities in the US, UK, and Canada',
        tuition: '¥1,148,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-22',
        deadlineText: 'January 22, 2027',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'High school graduation diploma',
          ielts: 'IELTS 6.0, TOEFL iBT 70, or JLPT N2 for non-native applicants',
          gre: 'Not required',
          papers: 'English essay on literary analysis or cultural identity',
          references: 'High school counselor recommendation'
        }
      },
      {
        id: 7696,
        title: 'Tohoku Gakuin Institute of Christian Culture Research Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        desc: 'Visiting research fellowship investigating Meiji-era Christian intellectual history, Protestant educational modernization in Northern Japan, and interfaith humanitarian movements.',
        funding: '¥1,400,000 annual research grant plus archival access to the TGU Historical Memorial Archives',
        tuition: 'Fellowship appointment',
        fee: '¥0 application fee',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'Master or Doctoral degree in Religious Studies, History, or Philosophy',
          ielts: 'Proficiency in Japanese and English',
          gre: 'Not required',
          papers: 'Archival research proposal (5 pages) and list of academic publications',
          references: 'Two letters of recommendation from senior humanities scholars'
        }
      },
      {
        id: 7697,
        title: 'Bachelor of Science in Information and Computer Science (Itsutsubashi Campus)',
        type: 'Degree Program',
        subject: 'computer-science',
        desc: 'Cutting-edge program covering machine learning, computer network protocols, database engineering, and human-computer interface design in the new urban Itsutsubashi campus complex.',
        funding: 'STEM Innovation Scholarships and corporate internship stipends from Sendai software firms',
        tuition: '¥1,580,000 per academic year (includes laboratory fees)',
        fee: '¥30,000 application fee',
        deadline: '2027-01-22',
        deadlineText: 'January 22, 2027',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'High school diploma with mathematics and science credentials',
          ielts: 'JLPT N2 or equivalent',
          gre: 'Not required',
          papers: 'Personal statement on computing aspirations',
          references: 'Mathematics or science teacher recommendation'
        }
      },
      {
        id: 7698,
        title: 'TGU Tohoku Recovery and Community Leadership Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        desc: 'Special scholarship honoring students actively engaged in post-disaster community rebuilding, regional volunteer leadership, and coastal municipal revitalization in Miyagi Prefecture.',
        funding: '¥300,000 annual scholarship award renewable through graduation',
        tuition: 'Direct tuition grant',
        fee: '¥0 application fee',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'Enrolled undergraduate student at TGU with verified community service record',
          ielts: 'Not applicable',
          gre: 'Not required',
          papers: 'Essay describing community rebuilding projects and volunteer leadership verification',
          references: 'Community organization leader recommendation'
        }
      },
      {
        id: 7699,
        title: 'Master of Human Information Engineering and Assistive Technologies',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Interdisciplinary graduate training in sensor-based bioinstrumentation, rehabilitation robotics, acoustic signal processing, and assistive devices for elderly and disabled populations.',
        funding: 'Tuition reduction waivers and Miyagi industrial collaborative research assistantships',
        tuition: '¥750,000 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.tohoku-gakuin.ac.jp',
        requirements: {
          gpa: 'Bachelor of Engineering, Computer Science, or Physical Sciences',
          ielts: 'IELTS 6.0 or JLPT N2',
          gre: 'Not required',
          papers: 'Statement of research intent and technical resume',
          references: 'Two letters of recommendation'
        }
      }
    ],
    researchers: [
      {
        id: 3401,
        name: 'Prof. Dr. Yoshiaki Shinoda',
        title: 'Professor of Regional Economics and Urban Revitalization',
        department: 'Faculty of Economics',
        subject: 'social-sciences',
        topics: ['Tohoku Regional Economic Reconstruction', 'Local Public Finance', 'Demographic Aging and Municipal Mergers', 'Agricultural Supply Chain Integration'],
        summary: 'Prof. Dr. Yoshiaki Shinoda investigates fiscal sustainability in depopulating municipalities across northern Japan, advising prefectural governments on post-2011 economic resilience and smart shrinkage models.',
        source: 'https://www.tohoku-gakuin.ac.jp'
      },
      {
        id: 3402,
        name: 'Prof. Dr. Elizabeth M. Harrison',
        title: 'Professor of Comparative Literature and Cultural Studies',
        department: 'Faculty of Letters',
        subject: 'social-sciences',
        topics: ['Transnational American Literature', 'Meiji Christian Intellectual Networks', 'Gender in Protestant Mission History', 'Intercultural Translation Theory'],
        summary: 'Prof. Dr. Elizabeth M. Harrison examines the historical archives of early American Protestant missionaries in Sendai, publishing on the cross-cultural transmission of democratic ideals and women’s education in Tohoku.',
        source: 'https://www.tohoku-gakuin.ac.jp'
      },
      {
        id: 3403,
        name: 'Prof. Dr. Kenichi Suzuki',
        title: 'Professor of Electrical and Human Information Systems',
        department: 'Faculty of Engineering',
        subject: 'engineering',
        topics: ['Assistive Robotics for Elder Care', 'Surface EMG Signal Classification', 'Wearable Inertial Sensor Networks', 'Biomechanical Gait Rehabilitation'],
        summary: 'Prof. Dr. Kenichi Suzuki leads development of wearable robotic exoskeletons and biosignal sensors, collaborating with regional rehabilitation hospitals to enhance mobility for stroke survivors.',
        source: 'https://www.tohoku-gakuin.ac.jp'
      },
      {
        id: 3404,
        name: 'Prof. Dr. Masao Watanabe',
        title: 'Professor of Constitutional Law and Administrative Jurisprudence',
        department: 'Faculty of Law',
        subject: 'social-sciences',
        topics: ['Japanese Constitutional Peace Principles', 'Administrative Law in Disaster Recovery', 'Privacy Rights in Digital Governance', 'Local Autonomy Law'],
        summary: 'Prof. Dr. Masao Watanabe analyzes legal frameworks governing administrative emergency powers, municipal zoning during post-disaster relocation, and individual civil liberties under Article 9 of the Japanese Constitution.',
        source: 'https://www.tohoku-gakuin.ac.jp'
      }
    ]
  },

  // 30. Kobe University Rokkodai Campus (Row 1801)
  {
    countryId: 'japan',
    countryLabel: 'Japan',
    institution: 'Kobe University - Rokkodai Main Campus',
    shortName: 'Kobe Univ Rokkodai',
    slug: 'kobe-university-rokkodai-kobe',
    location: 'Nada-ku, Kobe, Hyogo, Japan',
    website: 'https://www.kobe-u.ac.jp',
    sourceRow: 1801,
    stats: {
      established: '1902',
      students: '16,200+',
      international: '9%',
      faculty: '2,600+'
    },
    heroSummary: 'Kobe University is one of Japan’s prestigious National Seven Universities (formerly Kobe Higher Commercial School), overlooking Osaka Bay from Mount Rokko, celebrated as Japan’s birthplace of business administration and economics, alongside world-leading research in membranes, law, and biosystems.',
    academicOverview: 'Renowned for establishing Japan’s first Faculty of Business Administration, Kobe University excels in international corporate management, computational science (partnered with the Fugaku supercomputer at RIKEN Kobe), membrane science technology, and international law. The Rokkodai Campus houses historic stone buildings designated as Tangible Cultural Properties.',
    researchAdmissions: 'Graduate admissions require a recognized Bachelor or Master degree with competitive academic standing, research proposal, and letters of recommendation. English-taught graduate programs (KIMAP, GMAP, and Engineering) require TOEFL iBT 85+ or IELTS 6.5+.',
    opportunities: [
      {
        id: 7700,
        title: 'Ph.D. in Business Administration and Strategic Global Management (KIMAP in Management)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'English-taught doctoral program at Japan’s birthplace of business administration, focusing on multinational corporate strategy, behavioral finance, supply chain agility, and organizational sociology.',
        funding: 'MEXT University Recommendation Scholarships (¥145,000/month stipend plus 100% tuition waiver) and Kobe University Doctoral Research Fellowships',
        tuition: '¥535,800 per year (waived for MEXT scholars)',
        fee: '¥30,000 application fee',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026 (April 2027 Intake) / June 1, 2027 (October Intake)',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Master of Science, MBA, or Master of Arts in Business, Economics, or related fields with top academic record (min 3.3/4.0 GPA)',
          ielts: 'IELTS 7.0 or TOEFL iBT 90',
          gre: 'GMAT or GRE score strongly recommended',
          papers: 'Master thesis synopsis, comprehensive doctoral research proposal (up to 5 pages), and academic CV',
          references: 'Two letters of recommendation from business professors'
        }
      },
      {
        id: 7701,
        title: 'Master of Science in Chemical Science and Advanced Membrane Engineering',
        type: 'Degree Program',
        subject: 'engineering',
        desc: 'Delivered by the Research Center for Membrane and Film Technology—Japan’s premier membrane research institute—investigating hollow-fiber water desalination, CO2 gas separation polymers, and battery separators.',
        funding: 'Kobe University Foundation Fellowships and JST CREST research assistantships providing tuition coverage and monthly living stipends',
        tuition: '¥535,800 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Bachelor of Science or Engineering in Chemical Engineering, Polymer Chemistry, or Materials Science',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Statement of research interests focusing on membrane separation and CV',
          references: 'Two letters of recommendation from chemistry or engineering faculty'
        }
      },
      {
        id: 7702,
        title: 'LL.M. in Global Master of Public and International Law (GMAP in Law)',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Flagship English-taught postgraduate law curriculum in international commercial arbitration, WTO trade dispute resolution, law of the sea, and international investment treaty law.',
        funding: 'Kobe Law School International Scholarships and Japan World Bank Graduate Scholarships',
        tuition: '¥535,800 per academic year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Bachelor of Laws (LL.B.) or equivalent undergraduate degree with high academic standing',
          ielts: 'IELTS 7.0 or TOEFL iBT 95',
          gre: 'Not required',
          papers: 'Legal writing sample and statement of academic purpose',
          references: 'Two letters of recommendation from law faculty'
        }
      },
      {
        id: 7703,
        title: 'RIKEN-Kobe Supercomputing Computational Science Doctoral Fellowship',
        type: 'Fellowship',
        subject: 'computer-science',
        desc: 'Elite doctoral research fellowship utilizing the world-leading Fugaku supercomputer on Port Island to perform extreme-scale molecular dynamics, climate modeling, and quantum physics simulations.',
        funding: 'Full government research assistantship (¥200,000/month living stipend) plus dedicated Fugaku compute node allocations and travel grants',
        tuition: 'Tuition-free doctoral education via MEXT waiver',
        fee: '¥0 application fee',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Master of Science in Computer Science, Applied Physics, Computational Chemistry, or Parallel Mathematics',
          ielts: 'Fluent scientific English',
          gre: 'Not required',
          papers: 'Supercomputing research proposal (5 pages) and GitHub/code portfolio demonstration',
          references: 'Two letters of recommendation from senior computational scientists'
        }
      },
      {
        id: 7704,
        title: 'Master of Arts in International Economics and Development Policy',
        type: 'Degree Program',
        subject: 'social-sciences',
        desc: 'Graduate training in international macroeconomics, development finance, econometric causal inference, and trade policy in developing Southeast Asian economies.',
        funding: 'Asian Development Bank-Japan Scholarship Program (full tuition, monthly living allowance, and travel costs)',
        tuition: '¥535,800 per year',
        fee: '¥30,000 application fee',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Bachelor degree in Economics or related field with strong quantitative economics foundation',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'GRE recommended for quantitative evaluation',
          papers: 'Statement of research objectives and academic resume',
          references: 'Two letters of recommendation'
        }
      },
      {
        id: 7705,
        title: 'Kobe University Maritime Sciences and Autonomous Ship Navigation Fellowship',
        type: 'Fellowship',
        subject: 'engineering',
        desc: 'Graduate fellowship based at the Fukae Campus investigating maritime collision avoidance algorithms, satellite AIS telemetry, and clean hydrogen fuel-cell propulsion for cargo vessels.',
        funding: '¥1,500,000 annual research stipend plus full access to the training ship Fukae Maru and navigational simulation suites',
        tuition: 'Fellowship research grant',
        fee: '¥0 application fee',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'B.Sc. or M.Sc. in Maritime Science, Control Engineering, or Naval Architecture',
          ielts: 'IELTS 6.5 or equivalent',
          gre: 'Not required',
          papers: 'Research outline on autonomous vessel navigation or green marine propulsion',
          references: 'Two academic letters of recommendation'
        }
      },
      {
        id: 7706,
        title: 'Kobe University President’s Global Pioneer Doctoral Award',
        type: 'Scholarship',
        subject: 'biology',
        desc: 'Premier university-wide doctoral honor recognizing incoming PhD scholars in life sciences, offering complete financial freedom for four years of transformative biomedical discovery.',
        funding: '¥2,400,000 annual living stipend, 100% tuition remission, and ¥500,000 annual research discretionary fund',
        tuition: 'Fully funded presidential award',
        fee: '¥0 application fee',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        source: 'https://www.kobe-u.ac.jp',
        requirements: {
          gpa: 'Admission to a Kobe University doctoral program with top 3% academic standing',
          ielts: 'IELTS 7.0 or TOEFL iBT 95',
          gre: 'Not required',
          papers: 'Comprehensive dissertation research vision and outstanding master thesis portfolio',
          references: 'Three letters of recommendation from international research leaders'
        }
      }
    ],
    researchers: [
      {
        id: 3405,
        name: 'Prof. Dr. Hideto Matsuyama',
        title: 'Director of the Center for Membrane and Film Technology and Professor of Chemical Engineering',
        department: 'Graduate School of Engineering / Research Center for Membrane and Film Technology',
        subject: 'engineering',
        topics: ['Polymer Membrane Desalination', 'Forward Osmosis Water Purification', 'Phase Inversion Membrane Morphology', 'Carbon Capture Gas Separation'],
        summary: 'Prof. Dr. Hideto Matsuyama is an international authority on membrane separation science, directing Japan’s premier membrane research center and holding patents on antifouling hollow-fiber water filtration membranes.',
        source: 'https://www.kobe-u.ac.jp'
      },
      {
        id: 3406,
        name: 'Prof. Dr. Katsuhiko Kokubu',
        title: 'Dean of the Graduate School of Business Administration and Professor of Social and Environmental Accounting',
        department: 'Graduate School of Business Administration',
        subject: 'social-sciences',
        topics: ['Material Flow Cost Accounting (MFCA)', 'Corporate Sustainability Governance', 'Environmental Management Accounting', 'ESG Reporting Disclosure'],
        summary: 'Prof. Dr. Katsuhiko Kokubu is a global pioneer in Material Flow Cost Accounting (MFCA), authoring international ISO standards (ISO 14051) and consulting multinational firms on quantifying environmental supply chain waste.',
        source: 'https://www.kobe-u.ac.jp'
      },
      {
        id: 3407,
        name: 'Prof. Dr. Tomotaka Sakano',
        title: 'Professor of Public International Law and Maritime Jurisprudence',
        department: 'Graduate School of Law',
        subject: 'social-sciences',
        topics: ['Law of the Sea Conventions (UNCLOS)', 'Maritime Boundary Dispute Delimitation', 'International Environmental Treaty Law', 'State Responsibility in Marine Pollution'],
        summary: 'Prof. Dr. Tomotaka Sakano advises national maritime delegations on UNCLOS compliance, deep seabed mining legalities, and dispute settlement mechanisms before international tribunals.',
        source: 'https://www.kobe-u.ac.jp'
      },
      {
        id: 3408,
        name: 'Prof. Dr. Akihiko Kondo',
        title: 'Vice President and Professor of Chemical Biology and Metabolic Engineering',
        department: 'Graduate School of Science, Technology and Innovation',
        subject: 'biology',
        topics: ['Cell Surface Display Technology', 'Synthetic Biology for Biofuel Synthesis', 'Metabolic Pathway Engineering in Yeast', 'CRISPR Functional Genomics'],
        summary: 'Prof. Dr. Akihiko Kondo is a pioneer in cell surface display technology and synthetic biology, engineering microbial cell factories to produce carbon-neutral biofuels and biopharmaceuticals from lignocellulosic biomass.',
        source: 'https://www.kobe-u.ac.jp'
      }
    ]
  }
];

export const batch55Part3 = part3;

const fileContent = `// Batch 55 Part 3: Japan (10 Universities, Rows 1791-1801)
export const batch55Part3 = ${JSON.stringify(part3, null, 2)};
`;

writeFileSync('scripts/batch55-data-part3-temp.mjs', fileContent, 'utf8');
console.log('Finished draft for Part 3!');
