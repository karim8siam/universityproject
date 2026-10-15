// Batch 37 Data - Part 1 (Universities 1 to 10: Canada 3, Australia 3, Germany 3, Italy 1)
// Opportunities: IDs 3728 to 3797 (70 opps)
// Researchers: IDs 1617 to 1646 (30 researchers)

export const batch37Part1Universities = [
  // 1. Canada - CHU de Québec-Université Laval Research Centre (Row 22)
  {
    slug: 'chu-de-quebec-universite-laval-research-centre',
    institution: 'CHU de Québec-Université Laval Research Centre',
    shortName: 'CRCHU de Québec',
    countryId: 'canada',
    countryLabel: 'Canada',
    location: 'Quebec City, Quebec, Canada',
    website: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
    sourceRow: 22,
    badge: 'Premier Biomedical Research Centre',
    lead: 'The CHU de Québec-Université Laval Research Centre is one of Canada’s largest and most distinguished health research institutions, conducting groundbreaking translational research across oncology, endocrinology, infectious diseases, and neurosciences.',
    overview: 'Affiliated directly with the Faculty of Medicine at Université Laval, the CHU de Québec-Université Laval Research Centre brings together over 500 clinical and basic science investigators and more than 1,200 graduate students and postdoctoral fellows. Operating across specialized hospital axes—including the Centre Hospitalier de l\'Université Laval (CHUL), L\'Hôtel-Dieu de Québec, and Hôpital Saint-François d\'Assise—the institute bridges bench-to-bedside discovery in precision medicine, genomics, reproductive health, and regenerative therapies.',
    quickFacts: {
      type: 'Affiliated Academic Health Research Institute',
      campus: 'Quebec City Medical Campus (CHUL, Hôtel-Dieu, Saint-François d\'Assise)',
      accreditation: 'FRQS & CIHR Accredited Research Centre',
      admissions: 'Departmental graduate admissions via Université Laval Faculty of Medicine',
      language: 'French (institutional documentation) & English (laboratory & research working environment)',
      aid: 'Extensive FRQS scholarships, CIHR fellowships, and hospital laboratory assistantships'
    },
    strengths: [
      'Translational Oncology & Cancer Genomics',
      'Neurosciences & Molecular Pharmacology',
      'Reproductive Biology & Endocrinology',
      'Infectious Diseases & Global Health Immunology'
    ],
    programs: [
      { title: 'PhD in Experimental Medicine (Cancer Biology)', level: 'Doctorate', desc: 'Rigorous doctoral training focusing on oncogenesis, targeted drug delivery, and therapeutic biomarker discovery.' },
      { title: 'MSc in Molecular Medicine & Therapeutics', level: 'Master\'s', desc: 'Comprehensive laboratory-based master\'s examining cell signalling, functional genomics, and preclinical drug modeling.' },
      { title: 'Postdoctoral Fellowship in Neurodegenerative Diseases', level: 'Postdoctoral', desc: 'Advanced fellowship investigating neuroinflammation, synaptic plasticity, and amyloid kinetics.' },
      { title: 'Graduate Certificate in Clinical Trials Methodology', level: 'Graduate Diploma', desc: 'Specialized certificate covering Good Clinical Practice (GCP), regulatory compliance, and statistical trial design.' }
    ],
    opportunities: [
      {
        id: 3728,
        title: 'FRQS Doctoral Health Research Fellowship at CRCHU de Québec',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology', "biology"],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2026-11-01',
        deadlineText: 'November 1, 2026',
        funding: 'CAD $25,000 to $30,000 per annum living stipend plus institutional tuition award',
        tuition: 'CAD $8,500/year (Quebec/Canadian) or CAD $21,000/year (International, often subsidized)',
        fee: 'CAD $95',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Competitive doctoral research fellowship supporting exceptional scholars in molecular oncology, neurobiology, and regenerative medicine.',
        requirements: {
          gpa: 'First-class standing (minimum 3.7/4.3 GPA or equivalent in previous graduate studies)',
          ielts: 'IELTS 6.5 or CEFR B2/C1 French proficiency for departmental enrollment',
          gre: 'Not required',
          papers: 'Curriculum vitae, research proposal (3 pages), and verified undergraduate/graduate transcripts',
          references: '3 letters of recommendation from academic laboratory supervisors'
        }
      },
      {
        id: 3729,
        title: 'PhD Position in Molecular Endocrinology & Cellular Signalling',
        type: 'PhD',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Guaranteed laboratory research assistantship CAD $24,000/year for 4 years',
        tuition: 'CAD $8,500/year (Quebec resident) / CAD $20,500/year (International)',
        fee: 'CAD $95',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Fully supported PhD candidate position examining nuclear receptor signalling pathways and steroid hormone metabolism in metabolic disorders.',
        requirements: {
          gpa: 'Master of Science degree in biochemistry, biology, or pharmacology with minimum 3.5/4.3 GPA',
          ielts: 'IELTS 6.5 or equivalent French/English demonstration',
          gre: 'Optional',
          papers: 'Master thesis summary, letter of interest, and laboratory skills portfolio',
          references: '2 confidential academic referee forms'
        }
      },
      {
        id: 3730,
        title: 'MSc in Experimental Medicine (Infectious Diseases & Immunology)',
        type: 'Master\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        funding: 'Departmental stipend funding CAD $20,000/year plus travel grants for conference presentations',
        tuition: 'CAD $4,200/semester (Domestic) / CAD $10,500/semester (International)',
        fee: 'CAD $95',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Two-year research-intensive master\'s program investigating host-pathogen interactions, antiviral resistance, and mucosal immunity.',
        requirements: {
          gpa: 'BSc in microbiology, immunology, or life sciences with GPA >= 3.2/4.3',
          ielts: 'IELTS 6.5 or TOEFL iBT 86',
          gre: 'Not required',
          papers: 'Statement of purpose detailing experimental background and laboratory coursework',
          references: '2 letters of academic assessment'
        }
      },
      {
        id: 3731,
        title: 'Translational Oncology Postdoctoral Research Fellowship',
        type: 'Fellowship',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'CAD $55,000 to $65,000 annual salary plus institutional benefits and conference travel allowances',
        tuition: 'Fully funded / Postdoctoral position (No tuition)',
        fee: 'CAD $0',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Two-year funded postdoctoral fellowship investigating immune checkpoint inhibitor resistance mechanisms in solid tumours using single-cell spatial transcriptomics.',
        requirements: {
          gpa: 'PhD in cancer biology, immunology, or bioinformatics awarded within the last 4 years',
          ielts: 'Fluent scientific English proficiency',
          gre: 'Not required',
          papers: 'Published first-author paper in a peer-reviewed international scientific journal and research plan',
          references: '3 professional reference letters including doctoral supervisor'
        }
      },
      {
        id: 3732,
        title: 'CHU de Québec Graduate Summer Research Studentship',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'CAD $6,000 stipend for 16-week immersive laboratory research internship',
        tuition: 'CAD $0 (Summer research scholarship)',
        fee: 'CAD $0',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Competitive undergraduate and early-stage graduate research internship offering structured biomedical laboratory mentoring.',
        requirements: {
          gpa: 'Enrolled in an accredited university undergraduate program with GPA >= 3.5/4.0',
          ielts: 'Bilingual French/English fluency preferred',
          gre: 'Not required',
          papers: 'Academic transcript, statement of motivation, and curriculum vitae',
          references: '1 letter of recommendation from an academic course instructor'
        }
      },
      {
        id: 3733,
        title: 'BSc Honours Laboratory Practicum in Biomedical Science',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        funding: 'Work-study stipends available CAD $18/hour up to 15 hours/week during term',
        tuition: 'CAD $3,800/term (Domestic) / CAD $11,000/term (International)',
        fee: 'CAD $95',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Honours-year research practicum allowing senior undergraduate students to conduct supervised laboratory theses within specialized research axes.',
        requirements: {
          gpa: 'Minimum 80% cumulative average in second- and third-year science coursework',
          ielts: 'Standard institutional undergraduate language criteria',
          gre: 'Not required',
          papers: 'Undergraduate transcripts and letter of sponsorship from host PI',
          references: '2 academic references'
        }
      },
      {
        id: 3734,
        title: 'Advanced Bio-Imaging & Flow Cytometry Specialist Workshop',
        type: 'Course',
        subject: 'biology',
        subjects: ['biology', 'physics'],
        university: 'CHU de Québec-Université Laval Research Centre',
        country: 'Canada',
        location: 'Quebec City, QC, Canada',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        funding: 'Subsidized core-facility training module with institutional travel bursaries',
        tuition: 'CAD $750 (Institutional rate) / CAD $1,500 (External rate)',
        fee: 'CAD $50',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        desc: 'Intensive professional training course on confocal multiphoton microscopy, super-resolution imaging, and multi-laser spectral flow cytometry.',
        requirements: {
          gpa: 'Enrolled in graduate studies or holding a relevant degree in biological or physical sciences',
          ielts: 'English or French working proficiency',
          gre: 'Not required',
          papers: 'Short description of research project requiring advanced microscopic techniques',
          references: '1 supervisor endorsement form'
        }
      }
    ],
    researchers: [
      {
        id: 1617,
        name: 'Dr. Jean-Yves Masson',
        title: 'Senior Investigator & Professor of Molecular Medicine',
        university: 'CHU de Québec-Université Laval Research Centre',
        subject: 'biology',
        topics: ['DNA Repair Mechanisms', 'Homologous Recombination', 'Cancer Therapeutics', 'BRCA1/BRCA2 Pathways'],
        summary: 'Canada Research Chair in DNA Repair and Cancer Therapeutics, investigating the biochemical mechanisms of genomic stability and targeted synthetic lethality in breast and ovarian cancers.',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        recruiting: 'Not verified'
      },
      {
        id: 1618,
        name: 'Dr. Denis Soulet',
        title: 'Director of Bio-Imaging Core & Associate Professor',
        university: 'CHU de Québec-Université Laval Research Centre',
        subject: 'physics',
        topics: ['Advanced Multiphoton Microscopy', 'Quantitative Image Analysis', 'Neuro-vascular Dynamics', 'Optical Cleared-Tissue Imaging'],
        summary: 'Pioneer in quantitative high-resolution neuroimaging, developing advanced automated optical image pipelines to decipher microglial migration and cerebral ischemia.',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        recruiting: 'Not verified'
      },
      {
        id: 1619,
        name: 'Dr. Chantal Guillemette',
        title: 'Professor of Pharmacogenomics & Precision Oncology',
        university: 'CHU de Québec-Université Laval Research Centre',
        subject: 'chemistry',
        topics: ['Pharmacogenomics', 'Drug Metabolism', 'Steroid Glucuronidation (UGTs)', 'Prostate Cancer Biomarkers'],
        summary: 'International authority in pharmacogenomics investigating genetic determinants of antineoplastic drug clearance, steroid hormone metabolism, and personalized oncology regimens.',
        source: 'https://www.chudequebec.ca/centre-hospitaliers/centre-hospitalier-de-universite-laval-chul.aspx',
        recruiting: 'Not verified'
      }
    ]
  },

  // 2. Canada - Marianopolis College (Row 52)
  {
    slug: 'marianopolis-college-westmount-montreal',
    institution: 'Marianopolis College',
    shortName: 'Marianopolis',
    countryId: 'canada',
    countryLabel: 'Canada',
    location: 'Westmount, Montreal, Quebec, Canada',
    website: 'https://www.marianopolis.edu',
    sourceRow: 52,
    badge: 'Premier Pre-University English College',
    lead: 'Marianopolis College is a world-class English-language pre-university college in Montreal, celebrated for exceptional academic rigor, high R-Score achievements, and university matriculation rates.',
    overview: 'Established in 1908 and located on an 11-acre historic campus in Westmount, Marianopolis College is Quebec\'s premier private non-profit English college (CEGEP). Consistently graduating students with the province\'s highest R-Scores, Marianopolis prepares students for admission into prestigious medical schools, law faculties, engineering faculties, and global universities across Canada, the United States, and the UK.',
    quickFacts: {
      type: 'Private Non-Profit Pre-University College (CEGEP)',
      campus: 'Westmount Campus (Montreal, QC)',
      accreditation: 'Quebec Ministry of Higher Education & English CEGEP Federation',
      admissions: 'Secondary V / High School Diploma with competitive prerequisites in mathematics and sciences',
      language: 'English (instructional language) with mandatory French courses pursuant to Law 14',
      aid: 'Substantial merit entrance scholarships and need-based tuition bursaries'
    },
    strengths: [
      'Pre-Medical & Health Science Preparation',
      'Pure and Applied Mathematics & Physics',
      'Arts, Literature & Communication (ALC)',
      'Social Science & Global Economics Honours Streams'
    ],
    programs: [
      { title: 'Diplôme d\'études collégiales (DEC) in Health Science', level: 'Bachelor\'s', desc: 'Rigorous two-year pre-medical and life sciences diploma preparing students for medical and dental faculties.' },
      { title: 'DEC in Pure & Applied Science', level: 'Bachelor\'s', desc: 'Pre-engineering program emphasizing advanced calculus, linear algebra, mechanics, and computational physics.' },
      { title: 'DEC in Social Science (Commerce & Math Profile)', level: 'Bachelor\'s', desc: 'Rigorous economics and quantitative business stream oriented toward leading business and commerce faculties.' },
      { title: 'Honours Science Research Practicum', level: 'Bachelor\'s', desc: 'Intensive capstone research practicum pairing students with university and hospital laboratories across Montreal.' }
    ],
    opportunities: [
      {
        id: 3735,
        title: 'Marianopolis Director General\'s Merit Entrance Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'mathematics'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'CAD $5,000 to CAD $10,000 renewable award covering full tuition for outstanding secondary school graduates',
        tuition: 'CAD $8,200/year (Quebec residents) / CAD $14,500/year (Out-of-province/International)',
        fee: 'CAD $60',
        source: 'https://www.marianopolis.edu',
        desc: 'Top academic entrance scholarship awarded to candidates demonstrating the highest incoming secondary school academic averages.',
        requirements: {
          gpa: 'Secondary V academic average >= 90% or top 3% ranking in graduating high school class',
          ielts: 'IELTS 6.5 or equivalent English high school transcript',
          gre: 'Not required',
          papers: 'High school transcripts, personal extracurricular statement, and achievements dossier',
          references: '1 high school counsellor or principal letter of endorsement'
        }
      },
      {
        id: 3736,
        title: 'DEC in Pure and Applied Science (Pre-Engineering Track)',
        type: 'Bachelor\'s',
        subject: 'engineering',
        subjects: ['engineering', 'physics', 'mathematics'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Merit bursaries up to CAD $3,000 based on science and mathematics scores',
        tuition: 'CAD $4,100 per semester (Quebec resident) / CAD $7,250 per semester (Non-resident)',
        fee: 'CAD $60',
        source: 'https://www.marianopolis.edu',
        desc: 'Two-year university preparatory DEC program qualifying graduates for direct second-year entry into Canadian engineering faculties.',
        requirements: {
          gpa: 'Quebec Secondary V Diploma with TS/SN 5 Mathematics, Physics 5, and Chemistry 5 (minimum 82%)',
          ielts: 'English high school eligibility certificate or English placement exam',
          gre: 'Not required',
          papers: 'Official academic transcripts for Grades 10 and 11',
          references: '2 secondary school teacher evaluation forms'
        }
      },
      {
        id: 3737,
        title: 'DEC in Health Science (Pre-Medicine Stream)',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Entrance bursary matching available through the Marianopolis Millennium Foundation',
        tuition: 'CAD $4,100/semester (Quebec resident) / CAD $7,250/semester (International)',
        fee: 'CAD $60',
        source: 'https://www.marianopolis.edu',
        desc: 'Intensive pre-medical scientific diploma featuring advanced cellular biology, organic chemistry, and calculus with hospital volunteer placements.',
        requirements: {
          gpa: 'Overall grade 11 science average >= 85%',
          ielts: 'English proficiency demonstration',
          gre: 'Not required',
          papers: 'Academic transcript and extracurricular leadership summary',
          references: '1 science teacher recommendation'
        }
      },
      {
        id: 3738,
        title: 'Marianopolis College Need-Based Tuition Assistance Bursary',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'CAD $2,000 to $6,000 direct tuition reduction based on demonstrated family financial need',
        tuition: 'CAD $8,200/year (Standard private CEGEP tuition)',
        fee: 'CAD $0',
        source: 'https://www.marianopolis.edu',
        desc: 'Comprehensive financial aid program ensuring no admitted student is denied attendance due to financial constraints.',
        requirements: {
          gpa: 'Accepted or currently registered full-time student in good academic standing',
          ielts: 'Standard admission requirements',
          gre: 'Not required',
          papers: 'Notice of assessment / parental tax documentation and family income statement',
          references: 'Financial aid application declaration'
        }
      },
      {
        id: 3739,
        title: 'DEC in Arts, Literature and Communication (Digital Media Profile)',
        type: 'Bachelor\'s',
        subject: 'arts-design',
        subjects: ['arts-design', 'social-sciences'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Arts and humanities creative project awards up to CAD $1,500',
        tuition: 'CAD $4,100 per semester',
        fee: 'CAD $60',
        source: 'https://www.marianopolis.edu',
        desc: 'Creative pre-university program blending critical cultural analysis, digital storytelling, journalism, and multimedia production.',
        requirements: {
          gpa: 'Quebec Secondary V Diploma with minimum 75% overall average',
          ielts: 'Grade 11 English mother-tongue level or equivalent exam',
          gre: 'Not required',
          papers: 'Portfolio of written essays or creative media artifacts (3 selections)',
          references: '1 academic reference letter'
        }
      },
      {
        id: 3740,
        title: 'Marianopolis Collegiate Summer Undergraduate Research Fellowship',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        funding: 'CAD $4,500 research stipend for 10-week laboratory placement at McGill University or Université de Montréal labs',
        tuition: 'CAD $0',
        fee: 'CAD $0',
        source: 'https://www.marianopolis.edu',
        desc: 'Unique fellowship pairing exceptional collegiate science students with university principal investigators for summer research projects.',
        requirements: {
          gpa: 'Enrolled in first year of Marianopolis Science DEC with R-Score >= 34.0',
          ielts: 'Fluent English communication skills',
          gre: 'Not required',
          papers: 'Cover letter, collegiate grade transcript, and research statement of interest',
          references: '2 collegiate professor recommendations'
        }
      },
      {
        id: 3741,
        title: 'Intensive Pre-University Calculus & Linear Algebra Mastery Course',
        type: 'Course',
        subject: 'mathematics',
        subjects: ['mathematics'],
        university: 'Marianopolis College',
        country: 'Canada',
        location: 'Westmount, QC, Canada',
        deadline: '2027-01-10',
        deadlineText: 'January 10, 2027',
        funding: 'Subsidized collegiate academic advancement module',
        tuition: 'CAD $650 per course credit unit',
        fee: 'CAD $30',
        source: 'https://www.marianopolis.edu',
        desc: 'Intensive accelerated mathematics course focusing on differential equations, vector spaces, and real analysis for competitive STEM majors.',
        requirements: {
          gpa: 'Prerequisite credit in High School Advanced Functions and Trigonometry (Grade 11/12)',
          ielts: 'English instructional proficiency',
          gre: 'Not required',
          papers: 'High school math transcripts',
          references: '1 math teacher verification'
        }
      }
    ],
    researchers: [
      {
        id: 1620,
        name: 'Dr. Megan Biesele',
        title: 'Academic Dean & Professor of Humanities',
        university: 'Marianopolis College',
        subject: 'social-sciences',
        topics: ['Collegiate Pedagogy', 'Interdisciplinary Curriculum Design', 'Language Policy in Quebec', 'Academic Transitions'],
        summary: 'Educational leader overseeing collegiate curriculum excellence, student R-Score equity, and transitional academic programs bridging secondary to university education.',
        source: 'https://www.marianopolis.edu',
        recruiting: 'Not verified'
      },
      {
        id: 1621,
        name: 'Dr. Jean-François Bégin',
        title: 'Chair of Physics & Science Coordinator',
        university: 'Marianopolis College',
        subject: 'physics',
        topics: ['Quantum Physics Education', 'Mechanics Demonstrations', 'Astrobiology Curriculum', 'Computational Physics'],
        summary: 'Award-winning physics educator leading experimental curriculum modernizations and collegiate student research initiatives in astrophysics and particle mechanics.',
        source: 'https://www.marianopolis.edu',
        recruiting: 'Not verified'
      },
      {
        id: 1622,
        name: 'Dr. Mark Boutros',
        title: 'Coordinator of Mathematics Department',
        university: 'Marianopolis College',
        subject: 'mathematics',
        topics: ['Vector Calculus', 'Linear Algebra Pedagogies', 'Discrete Mathematics', 'Mathematical Competition Training'],
        summary: 'Distinguished mathematician guiding student mathematics teams in Canadian national olympiads and modernizing advanced linear algebra instruction.',
        source: 'https://www.marianopolis.edu',
        recruiting: 'Not verified'
      }
    ]
  },

  // 3. Canada - Niagara University in Ontario (Row 60)
  {
    slug: 'niagara-university-in-ontario-vaughan',
    institution: 'Niagara University in Ontario',
    shortName: 'Niagara University Ontario',
    countryId: 'canada',
    countryLabel: 'Canada',
    location: 'Vaughan, Ontario, Canada',
    website: 'https://niagarau.ca',
    sourceRow: 60,
    badge: 'Premier Bi-National University Campus',
    lead: 'Niagara University in Ontario is a premier higher education campus situated in the Vaughan Metropolitan Centre, delivering accredited professional degrees in Education, Business Administration, and Information Security.',
    overview: 'Licensed by the Ontario Ministry of Colleges and Universities and accredited by the Ontario College of Teachers (OCT) and AACSB International, Niagara University in Ontario provides Canadian students and international professionals with cutting-edge graduate and professional degree pathways. Its modern urban campus in Vaughan is integrated into the Greater Toronto Area transit hub, enabling strong industry partnerships in educational leadership, finance, and cybersecurity.',
    quickFacts: {
      type: 'Private Not-for-Profit University Branch Campus',
      campus: 'Vaughan Metropolitan Centre Campus (Vaughan, ON)',
      accreditation: 'Ontario Ministry of Colleges and Universities, OCT, AACSB Accredited',
      admissions: 'Baccalaureate degree with competitive GPA; OCT certification requirements for education programs',
      language: 'English',
      aid: 'Dean\'s entrance scholarships, educator bursaries, and alumni tuition discounts'
    },
    strengths: [
      'Teacher Education & Ontario College of Teachers (OCT) Accreditation',
      'Master of Business Administration (MBA) with Financial Analytics',
      'Master of Science in Information Security and Digital Forensics',
      'Educational Leadership & Inclusive Educational Pedagogy'
    ],
    programs: [
      { title: 'Bachelor of Professional Studies in Education (B.P.S.)', level: 'Bachelor\'s', desc: 'Accredited teacher training program preparing educators for Primary/Junior and Intermediate/Senior Ontario certification.' },
      { title: 'Master of Business Administration (MBA)', level: 'Master\'s', desc: 'AACSB-accredited MBA offering concentrations in strategic management, finance, and global supply chains.' },
      { title: 'MSc in Information Security & Digital Forensics', level: 'Master\'s', desc: 'Advanced STEM master\'s exploring network intrusion detection, cyber incident response, and cryptographic protocols.' },
      { title: 'Master of Science in Educational Leadership', level: 'Master\'s', desc: 'Professional graduate program designed for aspiring school principals, superintendents, and educational policymakers.' }
    ],
    opportunities: [
      {
        id: 3742,
        title: 'Niagara University Ontario Dean\'s Graduate Merit Scholarship',
        type: 'Scholarship',
        subject: "social-sciences",
        subjects: ["social-sciences", 'computer-science'],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'CAD $5,000 to CAD $8,000 tuition grant awarded across the graduate degree program',
        tuition: 'CAD $1,100 per credit unit (approximately CAD $33,000 for full 30-credit master\'s)',
        fee: 'CAD $75',
        source: 'https://niagarau.ca',
        desc: 'Prestigious merit-based scholarship supporting incoming graduate candidates with exceptional undergraduate academic records in business or technology.',
        requirements: {
          gpa: 'Minimum 3.4/4.0 undergraduate cumulative GPA from an accredited Canadian or international university',
          ielts: 'IELTS 6.5 or TOEFL iBT 80 (or proof of English-medium postsecondary studies)',
          gre: 'GMAT/GRE optional for applicants with strong academic records',
          papers: 'Statement of professional intent, comprehensive resume, and official transcripts',
          references: '2 professional or academic recommendation letters'
        }
      },
      {
        id: 3743,
        title: 'Master of Business Administration (MBA - Strategic Management)',
        type: 'Master\'s',
        subject: "social-sciences",
        subjects: ["social-sciences"],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Corporate partner scholarships and evening graduate assistantships available',
        tuition: 'CAD $1,150 per credit hour (CAD $34,500 total program fee)',
        fee: 'CAD $75',
        source: 'https://niagarau.ca',
        desc: 'Flexible cohort-based MBA program designed for working professionals in the Greater Toronto Area seeking executive leadership roles.',
        requirements: {
          gpa: 'Four-year undergraduate degree with minimum B (73-76%) average',
          ielts: 'IELTS 6.5 overall',
          gre: 'GMAT waived for candidates with 2+ years of relevant managerial experience',
          papers: 'Resume detailing professional experience and 500-word career objectives essay',
          references: '2 letters from direct supervisors or former professors'
        }
      },
      {
        id: 3744,
        title: 'MSc in Information Security & Digital Forensics',
        type: 'Master\'s',
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        funding: 'Cybersecurity industry tuition bursaries CAD $4,000 for qualified candidates',
        tuition: 'CAD $1,150/credit (approx. CAD $34,500 for 30 credits)',
        fee: 'CAD $75',
        source: 'https://niagarau.ca',
        desc: 'Advanced technical master\'s training graduates in offensive and defensive security, cloud architecture resilience, and malware reverse engineering.',
        requirements: {
          gpa: 'BSc in Computer Science, IT, Engineering, or related quantitative field with GPA >= 3.0/4.0',
          ielts: 'IELTS 6.5 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Technical resume detailing programming knowledge and personal cybersecurity statement',
          references: '2 letters of recommendation'
        }
      },
      {
        id: 3745,
        title: 'Bachelor of Professional Studies (B.P.S.) in Education (OCT Accredited)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        funding: 'Teacher Education Access Grants up to CAD $3,500',
        tuition: 'CAD $14,200/year (Domestic) / CAD $24,800/year (International)',
        fee: 'CAD $100',
        source: 'https://niagarau.ca',
        desc: 'Two-year consecutive initial teacher education program preparing university graduates for professional teacher certification in Ontario.',
        requirements: {
          gpa: 'Completed undergraduate bachelor\'s degree with minimum 70% average and required teaching subject credits',
          ielts: 'IELTS 7.0 (minimum 6.5 in all bands) for non-native English applicants',
          gre: 'Not required',
          papers: 'Experience profile, teaching philosophy statement, and official university transcripts',
          references: '2 professional reference letters verifying experience with youth/children'
        }
      },
      {
        id: 3746,
        title: 'Niagara Ontario Future Educators Diversity Bursary',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-04-01',
        deadlineText: 'April 1, 2027',
        funding: 'CAD $3,000 one-time bursary assisting underrepresented aspiring teachers',
        tuition: 'Applied directly toward second-term B.P.S. tuition fees',
        fee: 'CAD $0',
        source: 'https://niagarau.ca',
        desc: 'Diversity scholarship encouraging candidates from historically underrepresented backgrounds to pursue careers in primary and secondary education.',
        requirements: {
          gpa: 'Unconditional admission to the Niagara B.P.S. in Education program',
          ielts: 'Program-standard language criteria',
          gre: 'Not required',
          papers: '500-word diversity and community impact essay',
          references: '1 community leadership reference'
        }
      },
      {
        id: 3747,
        title: 'Cybersecurity Threat Intelligence Internship Practicum',
        type: 'Internship',
        subject: 'computer-science',
        subjects: ['computer-science'],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-01-30',
        deadlineText: 'January 30, 2027',
        funding: 'Paid industry co-op placement CAD $24 to $30/hour across 16-week cybersecurity internship',
        tuition: 'CAD $800 co-op practicum fee',
        fee: 'CAD $0',
        source: 'https://niagarau.ca',
        desc: 'Industry-partnered applied internship placing MSc candidates inside Toronto and York Region enterprise Security Operations Centres (SOCs).',
        requirements: {
          gpa: 'Completion of at least 15 credits in the MSc Information Security program with GPA >= 3.5',
          ielts: 'High fluency in professional English',
          gre: 'Not required',
          papers: 'Resume, security clearance readiness declaration, and practical lab assessments',
          references: 'Academic coordinator approval'
        }
      },
      {
        id: 3748,
        title: 'Executive Certificate in Cloud Governance & Incident Response',
        type: 'Course',
        subject: 'computer-science',
        subjects: ['computer-science', "social-sciences"],
        university: 'Niagara University in Ontario',
        country: 'Canada',
        location: 'Vaughan, ON, Canada',
        deadline: '2027-05-01',
        deadlineText: 'May 1, 2027',
        funding: 'Continuing professional education funding discounts for corporate groups',
        tuition: 'CAD $1,850 total course tuition',
        fee: 'CAD $50',
        source: 'https://niagarau.ca',
        desc: '6-week executive certificate module covering ISO/IEC 27001, SOC 2 compliance, AWS/Azure security benchmarks, and zero-trust implementation.',
        requirements: {
          gpa: 'Bachelor\'s degree or minimum 2 years of enterprise IT/sysadmin experience',
          ielts: 'Working English fluency',
          gre: 'Not required',
          papers: 'Professional resume and registration form',
          references: 'Employer sponsorship letter optional'
        }
      }
    ],
    researchers: [
      {
        id: 1623,
        name: 'Dr. Vincent Rinaldo',
        title: 'Director of Ontario Programs & Professor of Education',
        university: 'Niagara University in Ontario',
        subject: 'social-sciences',
        topics: ['Teacher Leadership Development', 'Clinical Supervision in Schools', 'Differentiated Instruction Pedagogies', 'Educational Governance'],
        summary: 'Pioneering educational researcher leading Niagara\'s Canadian operations, specializing in reflective practice in teacher preparation and urban educational leadership.',
        source: 'https://niagarau.ca',
        recruiting: 'Not verified'
      },
      {
        id: 1624,
        name: 'Dr. Chandra Sekhar',
        title: 'Associate Professor of Information Security',
        university: 'Niagara University in Ontario',
        subject: 'computer-science',
        topics: ['Digital Forensics Investigation', 'Zero-Trust Architecture', 'Malware Analysis', 'Cloud Penetration Testing'],
        summary: 'Cybersecurity investigator examining threat vector mitigation, kernel-level rootkit detection, and privacy-preserving protocols in enterprise cloud environments.',
        source: 'https://niagarau.ca',
        recruiting: 'Not verified'
      },
      {
        id: 1625,
        name: 'Dr. Tenpao Lee',
        title: 'Professor of Business & Supply Chain Analytics',
        university: 'Niagara University in Ontario',
        subject: "social-sciences",
        topics: ['Global Supply Chain Resilience', 'Predictive Economic Modeling', 'Cross-Border Trade Logistics', 'Financial Econometrics'],
        summary: 'Distinguished economist and supply chain scholar analyzing North American trade corridor logistics, macroeconomic volatility, and transportation optimization.',
        source: 'https://niagarau.ca',
        recruiting: 'Not verified'
      }
    ]
  },

  // 4. Australia - Adelaide University Magill Campus (Row 147)
  {
    slug: 'adelaide-university-magill-campus',
    institution: 'Adelaide University Magill Campus',
    shortName: 'Adelaide Uni Magill',
    countryId: 'australia',
    countryLabel: 'Australia',
    location: 'Magill, Adelaide, South Australia, Australia',
    website: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
    sourceRow: 147,
    badge: 'Premier Education, Psychology & Creative Arts Campus',
    lead: 'Adelaide University Magill Campus is a world-class suburban academic hub nestled at the foot of the Adelaide Hills, known for cutting-edge teacher education, psychological sciences, social work, and creative media studios.',
    overview: 'As a landmark campus of South Australia\'s newly unified Adelaide University, Magill Campus combines parkland serenity with state-of-the-art specialist facilities including television and radio broadcast suites, allied health clinics, sensory analysis suites, and interactive education laboratories. Magill serves as a vibrant nucleus for research in developmental psychology, cognitive sciences, contemporary arts, and community wellbeing.',
    quickFacts: {
      type: 'Public Comprehensive University Campus',
      campus: 'Magill Campus (Adelaide Hills foothills, Adelaide, SA)',
      accreditation: 'TEQSA Registered, Australian Psychology Accreditation Council (APAC)',
      admissions: 'ATAR score or equivalent secondary qualification; bachelor degree for postgraduate studies',
      language: 'English',
      aid: 'Australian Government RTP scholarships, Vice-Chancellor\'s International Scholarships'
    },
    strengths: [
      'Clinical & Developmental Psychology',
      'Teacher Education & Early Childhood Pedagogy',
      'Social Work, Community Services & Human Rights',
      'Creative Industries, Screen Production & Sound Design'
    ],
    programs: [
      { title: 'PhD in Cognitive Psychology & Neuroscience', level: 'Doctorate', desc: 'Research doctorate investigating neurological correlates of memory, child language acquisition, and cognitive resilience.' },
      { title: 'Master of Teaching (Secondary Education)', level: 'Master\'s', desc: 'Professional teaching degree preparing graduates for registration with the Teachers Registration Board of South Australia.' },
      { title: 'Master of Social Work (Professional Qualifying)', level: 'Master\'s', desc: 'AASW-accredited master\'s including 1,000 hours of supervised field education in hospital and community settings.' },
      { title: 'Bachelor of Creative Industries (Film, Television & VFX)', level: 'Bachelor\'s', desc: 'Hands-on undergraduate degree utilizing high-definition sound stages, virtual production walls, and post-production labs.' }
    ],
    opportunities: [
      {
        id: 3749,
        title: 'Adelaide University RTP International Doctoral Research Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'biology'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2026-10-31',
        deadlineText: 'October 31, 2026',
        funding: 'AUD $34,500/year tax-free stipend for up to 3.5 years, full tuition waiver, and Overseas Student Health Cover (OSHC)',
        tuition: 'Fully funded by Australian Research Training Program (AUD $39,000/year value)',
        fee: 'AUD $0',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Fully funded Australian Government scholarship supporting exceptional international researchers undertaking doctoral study in psychology or education.',
        requirements: {
          gpa: 'First-class honours degree or research master\'s with high distinction average',
          ielts: 'IELTS 7.0 overall (minimum 6.5 in all bands)',
          gre: 'Not required',
          papers: 'Refined 5-page research proposal, curriculum vitae, and publications list',
          references: '2 confidential academic referee reports'
        }
      },
      {
        id: 3750,
        title: 'PhD Candidature in Developmental Psychology & Child Wellbeing',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'Faculty scholarship AUD $32,000/year plus laboratory project research budget',
        tuition: 'Domestic: Commonwealth supported (AUD $0) / International: AUD $38,500/year (scholarship eligible)',
        fee: 'AUD $100',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Supervised doctoral research investigating early childhood attachment, trauma-informed schooling interventions, and emotional self-regulation.',
        requirements: {
          gpa: 'Four-year APAC-accredited honours degree in psychology (Class 1 or 2A)',
          ielts: 'IELTS 7.0 with no subscore below 7.0',
          gre: 'Not required',
          papers: 'Research outline, honours thesis abstract, and academic CV',
          references: '2 academic referees'
        }
      },
      {
        id: 3751,
        title: 'Master of Teaching (Secondary - STEM Specialisation)',
        type: 'Master\'s',
        subject: 'mathematics',
        subjects: ['mathematics', 'physics'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        funding: 'South Australian Government Teaching Bursaries up to AUD $10,000 for high-demand STEM disciplines',
        tuition: 'AUD $8,500/year (Domestic CSP) / AUD $35,000/year (International)',
        fee: 'AUD $100',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Two-year professional master\'s qualifying graduates to teach secondary school Mathematics, Physics, and Digital Technologies across Australia.',
        requirements: {
          gpa: 'Bachelor\'s degree with major study sequence in mathematics or physical sciences',
          ielts: 'IELTS 7.5 overall (8.0 in speaking and listening, 7.0 in reading and writing)',
          gre: 'Not required',
          papers: 'Non-academic capabilities teaching personal statement (LANTITE readiness)',
          references: '2 referee evaluations'
        }
      },
      {
        id: 3752,
        title: 'Magill Creative Arts & Media Industry Postdoctoral Fellowship',
        type: 'Fellowship',
        subject: 'arts-design',
        subjects: ['arts-design', 'computer-science'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'AUD $92,000 to AUD $103,000 Level B academic salary plus 17% superannuation and AUD $10,000 equipment grant',
        tuition: 'Academic staff fellowship (No tuition)',
        fee: 'AUD $0',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Two-year funded research fellowship exploring real-time virtual production pipelines, generative AI in cinematography, and interactive narrative design.',
        requirements: {
          gpa: 'PhD in film studies, digital media, interactive arts, or computer graphics',
          ielts: 'Native or near-native English fluency',
          gre: 'Not required',
          papers: 'Portfolio of creative research works (films, virtual installations) and 3-year research program proposal',
          references: '3 senior academic and industry referees'
        }
      },
      {
        id: 3753,
        title: 'Bachelor of Psychology (Honours)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'biology'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        funding: 'Vice-Chancellor\'s Merit Scholarships up to AUD $5,000/year for high-achieving school leavers',
        tuition: 'AUD $8,900/year (Domestic CSP) / AUD $37,000/year (International)',
        fee: 'AUD $100',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Four-year APAC-accredited psychology degree combining quantitative research methodology with neuroscience and psychological evaluation.',
        requirements: {
          gpa: 'Minimum ATAR 85.00 or equivalent international secondary school credential',
          ielts: 'IELTS 6.5 (minimum 6.0 in each subtest)',
          gre: 'Not required',
          papers: 'High school graduation certificate and transcript',
          references: 'School principal or careers advisor report'
        }
      },
      {
        id: 3754,
        title: 'Social Work Community Mental Health Fieldwork Internship',
        type: 'Internship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Student support placement stipends AUD $2,500 available for remote/regional placements',
        tuition: 'Included in Master of Social Work course enrolment',
        fee: 'AUD $0',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: '500-hour structured clinical internship placed within South Australian public hospitals and community youth outreach agencies.',
        requirements: {
          gpa: 'Enrolled in accredited Social Work degree in good standing',
          ielts: 'IELTS 7.0 academic',
          gre: 'Not required',
          papers: 'Working with Children Check (WWCC) and NDIS Worker Screening clearance',
          references: 'Fieldwork coordinator approval'
        }
      },
      {
        id: 3755,
        title: 'Sensory Evaluation & Food Neuro-Perception Masterclass',
        type: 'Course',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Adelaide University Magill Campus',
        country: 'Australia',
        location: 'Magill, Adelaide, SA, Australia',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        funding: 'Industry co-funded continuing professional development certificate',
        tuition: 'AUD $1,450 professional course fee',
        fee: 'AUD $50',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        desc: 'Hands-on intensive masterclass utilizing the Magill Sensory Testing Facility to analyze taste physiology, olfactory coding, and consumer neural responses.',
        requirements: {
          gpa: 'Degree in food science, psychology, nutrition, or relevant industry experience',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Resume and statement of food industry application',
          references: '1 professional reference'
        }
      }
    ],
    researchers: [
      {
        id: 1626,
        name: 'Prof. Mark Kohler',
        title: 'Professor of Psychology & Cognitive Development',
        university: 'Adelaide University Magill Campus',
        subject: 'social-sciences',
        topics: ['Sleep Architecture in Children', 'Cognitive Performance', 'Neurodevelopmental Disorders', 'ADHD Behavioral Therapeutics'],
        summary: 'Leading cognitive neuroscientist examining the impacts of sleep fragmentation on working memory, attention, and executive function in children and adolescents.',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        recruiting: 'Not verified'
      },
      {
        id: 1627,
        name: 'Dr. Susan Hill',
        title: 'Associate Professor of Early Childhood Education',
        university: 'Adelaide University Magill Campus',
        subject: 'social-sciences',
        topics: ['Early Literacy Development', 'Digital Play in Kindergarten', 'Language Acquisition', 'Socio-Cultural Pedagogies'],
        summary: 'Renowned expert in early childhood literacy, exploring multimodal meaning-making, children\'s digital authoring, and evidence-based reading interventions.',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        recruiting: 'Not verified'
      },
      {
        id: 1628,
        name: 'Dr. Russell Fewster',
        title: 'Senior Lecturer in Screen Production & Contemporary Arts',
        university: 'Adelaide University Magill Campus',
        subject: 'arts-design',
        topics: ['Virtual Production Studios', 'Directing Performance for Screen', 'Immersive Storytelling', 'Cinematic Soundscapes'],
        summary: 'Theatrical director and screen scholar investigating real-time motion capture, actor-avatar interactivity, and virtual LED volume production in contemporary film.',
        source: 'https://adelaideuni.edu.au/life-at-adelaide/campuses/adelaide-city-campus',
        recruiting: 'Not verified'
      }
    ]
  },

  // 5. Australia - Australian Catholic University, Ballarat Campus (Aquinas) (Row 151)
  {
    slug: 'acu-ballarat-campus-aquinas',
    institution: 'Australian Catholic University, Ballarat Campus',
    shortName: 'ACU Ballarat',
    countryId: 'australia',
    countryLabel: 'Australia',
    location: 'Ballarat, Victoria, Australia',
    website: 'https://www.acu.edu.au',
    sourceRow: 151,
    badge: 'Historic Regional Healthcare & Teaching Campus',
    lead: 'Australian Catholic University Ballarat Campus (Aquinas) is a historic regional higher education leader situated in Victoria’s Goldfields region, celebrated for nursing excellence, paramedicine, and primary education.',
    overview: 'Dating back to 1895 as the Aquinas Training College, ACU\'s Ballarat Campus features landscaped heritage gardens, historic brick architecture, and advanced simulation hospitals. Serving as a crucial regional training centre for Western Victoria, the campus provides immersive degrees in nursing, paramedicine, physiotherapy, and education with deep integration into Grampians Health and regional Victorian schools.',
    quickFacts: {
      type: 'Public Regional University Campus',
      campus: 'Aquinas Campus (Mair Street, Ballarat, VIC)',
      accreditation: 'TEQSA, NMBA (Nursing & Midwifery Board of Australia), VIT (Victorian Institute of Teaching)',
      admissions: 'ATAR or approved regional vocational pathways; relevant bachelor degree for postgraduate programs',
      language: 'English',
      aid: 'Destination Australia regional scholarships (AUD $15,000/year), ACU Vice-Chancellor scholarships'
    },
    strengths: [
      'Clinical Nursing Simulation & Acute Care',
      'Paramedicine & Emergency Out-of-Hospital Medicine',
      'Regional & Inclusive Primary Education',
      'Allied Health & Community Rehabilitation'
    ],
    programs: [
      { title: 'Bachelor of Nursing', level: 'Bachelor\'s', desc: 'Accredited three-year nursing degree featuring 800 hours of clinical placement across acute, surgical, and mental health settings.' },
      { title: 'Bachelor of Paramedicine', level: 'Bachelor\'s', desc: 'Comprehensive emergency care degree preparing registered paramedics with Ambulance Victoria clinical placements.' },
      { title: 'Master of Education (Curriculum & Inclusive Practice)', level: 'Master\'s', desc: 'Advanced postgraduate degree for practicing teachers addressing neurodiversity, rural pedagogy, and student wellbeing.' },
      { title: 'Master of Clinical Nursing (Rural Health)', level: 'Master\'s', desc: 'Specialist postgraduate qualification focusing on advanced assessment and emergency care in rural and remote hospitals.' }
    ],
    opportunities: [
      {
        id: 3756,
        title: 'Destination Australia Regional Scholarship at ACU Ballarat',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology', "biology"],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2026-12-05',
        deadlineText: 'December 5, 2026',
        funding: 'AUD $15,000 per year for up to 4 years of full-time regional study',
        tuition: 'AUD $8,900/year (Domestic CSP) / AUD $31,500/year (International)',
        fee: 'AUD $0',
        source: 'https://www.acu.edu.au',
        desc: 'Australian Government scholarship designed to attract domestic and international students to study nursing or paramedicine in regional Victoria.',
        requirements: {
          gpa: 'Competitive ATAR or equivalent high school credential (minimum 75.00 equivalent)',
          ielts: 'IELTS 7.0 (with minimum 7.0 across all four components)',
          gre: 'Not required',
          papers: 'Proof of residential address in regional Victoria during study, and personal commitment statement',
          references: '2 personal or academic references'
        }
      },
      {
        id: 3757,
        title: 'Master of Clinical Nursing (Emergency & Critical Care)',
        type: 'Master\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Victorian Department of Health post-graduate nursing scholarships up to AUD $10,000',
        tuition: 'AUD $9,500/year (Domestic) / AUD $33,000/year (International)',
        fee: 'AUD $110',
        source: 'https://www.acu.edu.au',
        desc: 'Specialist post-registration clinical master\'s advancing registered nurses into clinical nurse specialist and nurse practitioner career pathways.',
        requirements: {
          gpa: 'Bachelor of Nursing degree and current AHPRA registered nurse registration',
          ielts: 'IELTS 7.0 overall',
          gre: 'Not required',
          papers: 'AHPRA registration certificate, CV showing at least 1 year of acute clinical practice, and employer endorsement',
          references: '2 clinical nurse consultant or manager references'
        }
      },
      {
        id: 3758,
        title: 'Bachelor of Paramedicine Professional Degree',
        type: 'Bachelor\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        funding: 'Regional healthcare mobility grants up to AUD $3,000 per clinical placement year',
        tuition: 'AUD $8,900/year (Domestic CSP) / AUD $34,200/year (International)',
        fee: 'AUD $110',
        source: 'https://www.acu.edu.au',
        desc: 'Three-year paramedicine degree incorporating hands-on clinical simulation labs and ambulance emergency response shifts across Victoria.',
        requirements: {
          gpa: 'Victorian ATAR minimum 70.00 with English and Science prerequisites',
          ielts: 'IELTS 7.0 with no band less than 7.0',
          gre: 'Not required',
          papers: 'Medical fitness assessment, driver licence verification, and working with children check',
          references: 'School academic reference'
        }
      },
      {
        id: 3759,
        title: 'Doctor of Philosophy (PhD) in Rural Health & Nursing Systems',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'biology'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'ACU Postgraduate Research Scholarship AUD $32,500/year stipend plus project operating funds',
        tuition: 'AUD $0 (RTP funded for domestic and successful international applicants)',
        fee: 'AUD $0',
        source: 'https://www.acu.edu.au',
        desc: 'Supervised doctoral thesis examining health inequities in rural Victorian communities, telehealth intervention efficacy, and healthcare worker retention.',
        requirements: {
          gpa: 'Honours degree (Class 1 or 2A) or Master by Research degree in nursing or public health',
          ielts: 'IELTS 7.0 with 7.0 in writing and reading',
          gre: 'Not required',
          papers: 'Detailed research proposal (2,000 words), curriculum vitae, and academic transcripts',
          references: '2 academic research referee forms'
        }
      },
      {
        id: 3760,
        title: 'ACU Executive Dean\'s Ballarat Education Scholarship',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2027-01-20',
        deadlineText: 'January 20, 2027',
        funding: 'AUD $6,000 tuition reduction per year for high-achieving education students',
        tuition: 'AUD $8,200/year (CSP rate)',
        fee: 'AUD $0',
        source: 'https://www.acu.edu.au',
        desc: 'Merit scholarship supporting high-achieving regional school leavers enrolling in the Bachelor of Education (Primary) at the Ballarat campus.',
        requirements: {
          gpa: 'ATAR >= 80.00 and high grade 12 English and Mathematics results',
          ielts: 'English native or IELTS 7.5',
          gre: 'Not required',
          papers: 'Community service record and CASPer non-academic assessment test result',
          references: '1 school principal endorsement'
        }
      },
      {
        id: 3761,
        title: 'Grampians Health Regional Clinical Nursing Residency',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Full award graduate nurse salary AUD $68,000/year with rotational shift allowances',
        tuition: 'Paid graduate nursing position (No tuition)',
        fee: 'AUD $0',
        source: 'https://www.acu.edu.au',
        desc: 'Structured 12-month graduate nursing transition program offered jointly with Grampians Health Ballarat for graduating ACU nurses.',
        requirements: {
          gpa: 'Completed Bachelor of Nursing from ACU Ballarat with satisfactory clinical hurdle assessments',
          ielts: 'AHPRA English language requirements met',
          gre: 'Not required',
          papers: 'Graduate nurse application portfolio, clinical placement logs, and police clearance',
          references: '2 clinical preceptor evaluations'
        }
      },
      {
        id: 3762,
        title: 'Trauma-Informed Classroom Management Micro-Credential',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Australian Catholic University, Ballarat Campus',
        country: 'Australia',
        location: 'Ballarat, VIC, Australia',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        funding: 'Subsidized by the Victorian Institute of Teaching (VIT) professional development fund',
        tuition: 'AUD $850 registration fee',
        fee: 'AUD $25',
        source: 'https://www.acu.edu.au',
        desc: 'Online professional development course providing regional educators with cognitive and behavioral strategies to support students affected by trauma.',
        requirements: {
          gpa: 'Qualified teacher or enrolled in pre-service teaching degree',
          ielts: 'Professional English proficiency',
          gre: 'Not required',
          papers: 'Teacher registration number or student ID',
          references: 'School principal endorsement optional'
        }
      }
    ],
    researchers: [
      {
        id: 1629,
        name: 'Dr. Megan Cooper',
        title: 'Senior Lecturer in Nursing & Rural Healthcare',
        university: 'Australian Catholic University, Ballarat Campus',
        subject: 'biology',
        topics: ['Rural Emergency Care', 'High-Fidelity Clinical Simulation', 'Nurse Retention in Regional Victoria', 'Patient Safety Metrics'],
        summary: 'Clinical nursing scholar researching evidence-based simulation protocols to improve clinical decision-making and resuscitation response times in regional emergency departments.',
        source: 'https://www.acu.edu.au',
        recruiting: 'Not verified'
      },
      {
        id: 1630,
        name: 'Dr. John Mitchell',
        title: 'Coordinator of Paramedicine Programs',
        university: 'Australian Catholic University, Ballarat Campus',
        subject: 'biology',
        topics: ['Pre-Hospital Cardiac Care', 'Out-of-Hospital Airway Management', 'Paramedic Occupational Health', 'Point-of-Care Ultrasound'],
        summary: 'Paramedic researcher evaluating point-of-care ultrasound diagnostic accuracy and physiological stressors during prolonged road ambulance extrications.',
        source: 'https://www.acu.edu.au',
        recruiting: 'Not verified'
      },
      {
        id: 1631,
        name: 'Dr. Elizabeth Warren',
        title: 'Associate Professor of Mathematics Pedagogy & Education',
        university: 'Australian Catholic University, Ballarat Campus',
        subject: 'mathematics',
        topics: ['Early Algebraic Thinking', 'Rural Primary Mathematics', 'Teacher Professional Learning', 'Pedagogical Inclusivity'],
        summary: 'Pioneering mathematics education researcher investigating foundational algebraic reasoning and instructional interventions in regional primary schools.',
        source: 'https://www.acu.edu.au',
        recruiting: 'Not verified'
      }
    ]
  },

  // 6. Australia - James Cook University, Townsville City Campus (Row 169)
  {
    slug: 'james-cook-university-townsville-city-campus',
    institution: 'James Cook University, Townsville City Campus',
    shortName: 'JCU Townsville City',
    countryId: 'australia',
    countryLabel: 'Australia',
    location: 'Townsville, Queensland, Australia',
    website: 'https://www.jcu.edu.au',
    sourceRow: 169,
    badge: 'Premier Tropical Urban Hub for Law, Business & Governance',
    lead: 'James Cook University Townsville City Campus is an architecturally celebrated urban center situated in Flinders Street, delivering elite professional programs in law, governance, business, and tropical regional development.',
    overview: 'Located in the heart of Townsville’s central business and legal district, JCU Townsville City Campus bridges university academics with the Queensland Supreme and District Courts, local government, and northern Australian trade agencies. The high-tech, multi-story campus features moot courtrooms, collaborative enterprise spaces, and financial trading simulations, reinforcing JCU’s global leadership in tropical innovation and regional enterprise.',
    quickFacts: {
      type: 'Public Urban University Campus',
      campus: 'Flinders Street Urban Campus (Townsville CBD, QLD)',
      accreditation: 'TEQSA Accredited, Legal Practitioners Admissions Board (LPAB)',
      admissions: 'Queensland ATAR or equivalent international qualification; bachelor degree for postgraduate pathways',
      language: 'English',
      aid: 'JCU International Excellence Scholarships, Australian RTP research stipends'
    },
    strengths: [
      'Tropical Law, Environmental Regulation & Indigenous Rights',
      'Master of Business Administration (Global Leadership)',
      'Public Policy, Governance & Northern Australian Development',
      'Disaster Resilience & Tropical Urban Infrastructure Planning'
    ],
    programs: [
      { title: 'Bachelor of Laws (LL.B.)', level: 'Bachelor\'s', desc: 'Accredited law degree featuring practical advocacy in moot courtrooms and clinical placements with the Townsville Community Law Centre.' },
      { title: 'Master of Business Administration (Tropical Leadership)', level: 'Master\'s', desc: 'AACSB-aligned master\'s focused on sustainable enterprise, cross-cultural management, and Indo-Pacific supply chains.' },
      { title: 'PhD in Environmental Law & Coral Reef Governance', level: 'Doctorate', desc: 'Interdisciplinary doctoral research examining maritime legal frameworks, fisheries treaties, and Great Barrier Reef protections.' },
      { title: 'Graduate Certificate in Indigenous Australian Governance', level: 'Graduate Diploma', desc: 'Specialized postgraduate qualification exploring native title jurisprudence, self-determination, and land rights frameworks.' }
    ],
    opportunities: [
      {
        id: 3763,
        title: 'JCU Townsville City Vice-Chancellor\'s International Excellence Scholarship',
        type: 'Scholarship',
        subject: "social-sciences",
        subjects: ["social-sciences", 'social-sciences'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: '25% tuition fee reduction for the entire duration of the undergraduate or postgraduate degree',
        tuition: 'AUD $34,800/year (Standard International rate before 25% waiver)',
        fee: 'AUD $100',
        source: 'https://www.jcu.edu.au',
        desc: 'High-value international merit scholarship awarded to outstanding students enrolling in Business, Law, or Governance programs at the Townsville City campus.',
        requirements: {
          gpa: 'Equivalent to minimum Australian ATAR 85.00 or minimum GPA 5.5/7.0 in previous university studies',
          ielts: 'IELTS 6.5 (minimum 6.0 in each subband) or 7.0 for Law',
          gre: 'Not required',
          papers: 'Official academic transcripts, statement of motivation, and verified passport copy',
          references: '2 letters of recommendation'
        }
      },
      {
        id: 3764,
        title: 'Bachelor of Laws (LL.B.) Four-Year Degree',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'Commonwealth Supported Places (CSP) for domestic students and Dean\'s entrance awards up to AUD $5,000',
        tuition: 'AUD $15,800/year (Domestic CSP Band 4) / AUD $35,200/year (International)',
        fee: 'AUD $100',
        source: 'https://www.jcu.edu.au',
        desc: 'Comprehensive qualifying law degree accredited by the Legal Practitioners Admissions Board (LPAB) of Queensland with commercial advocacy training.',
        requirements: {
          gpa: 'Queensland ATAR >= 80.00 or approved tertiary transfer sequence',
          ielts: 'IELTS 7.0 (minimum 6.5 in all bands)',
          gre: 'Not required',
          papers: 'High school graduation certificate and certified academic transcripts',
          references: 'School principal or legal mentor reference'
        }
      },
      {
        id: 3765,
        title: 'Master of Business Administration (Tropical Leadership Focus)',
        type: 'Master\'s',
        subject: "social-sciences",
        subjects: ["social-sciences", 'environment'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2027-02-01',
        deadlineText: 'February 1, 2027',
        funding: 'Executive leadership bursaries up to AUD $6,000 available for industry candidates',
        tuition: 'AUD $34,400 per year full-time',
        fee: 'AUD $100',
        source: 'https://www.jcu.edu.au',
        desc: 'Executive-focused MBA tailored for executives managing organizations in tropical, developing, and regional economic zones.',
        requirements: {
          gpa: 'Recognised bachelor degree in any field with minimum 2 years of relevant professional work experience',
          ielts: 'IELTS 6.5 overall (no subscore below 6.0)',
          gre: 'GMAT not required with professional resume',
          papers: 'Resume detailing managerial experience and 500-word statement of intent',
          references: '2 employer references'
        }
      },
      {
        id: 3766,
        title: 'PhD in Maritime Governance & Indo-Pacific Environmental Law',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'environment'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2026-11-15',
        deadlineText: 'November 15, 2026',
        funding: 'Full RTP Research Stipend AUD $34,500/year tax-free plus research travel and archival access allowances',
        tuition: 'Fully funded (AUD $0 under Australian Research Training Scheme)',
        fee: 'AUD $0',
        source: 'https://www.jcu.edu.au',
        desc: 'Doctoral research examining UNCLOS marine biodiversity treaties, Great Barrier Reef legal protections, and Pacific regional fisheries governance.',
        requirements: {
          gpa: 'First-class honours degree in Law or Master of Laws with substantial research thesis component',
          ielts: 'IELTS 7.0 (7.0 in writing)',
          gre: 'Not required',
          papers: 'Detailed research proposal (10 pages), curriculum vitae, and writing sample',
          references: '3 academic referees'
        }
      },
      {
        id: 3767,
        title: 'Townsville Community Law & Legal Clinic Fellowship',
        type: 'Fellowship',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2027-03-15',
        deadlineText: 'March 15, 2027',
        funding: 'AUD $52,000 annual clinical stipend plus legal practice indemnity coverage',
        tuition: 'Postgraduate clinical fellowship (No tuition)',
        fee: 'AUD $0',
        source: 'https://www.jcu.edu.au',
        desc: 'One-year funded fellowship providing recent law graduates with hands-on pro bono advocacy experience under senior legal practitioners in Townsville.',
        requirements: {
          gpa: 'Graduated with LL.B. or J.D. within the last 24 months, eligible for admission to the legal profession',
          ielts: 'Native or near-native English fluency',
          gre: 'Not required',
          papers: 'Legal CV, law school transcript, and personal statement on access to justice in regional communities',
          references: '2 law professor recommendations'
        }
      },
      {
        id: 3768,
        title: 'Tropical Enterprise & Port Logistics Internship',
        type: 'Internship',
        subject: "social-sciences",
        subjects: ["social-sciences", 'engineering'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2027-02-20',
        deadlineText: 'February 20, 2027',
        funding: 'Paid placement AUD $26/hour across 12-week industry practicum at the Port of Townsville',
        tuition: 'Enrolment in Business Internship elective course',
        fee: 'AUD $0',
        source: 'https://www.jcu.edu.au',
        desc: 'Applied corporate internship analyzing bulk mineral export logistics, green hydrogen supply chains, and multimodal shipping operations.',
        requirements: {
          gpa: 'Enrolled in JCU Bachelor of Business or MBA with cumulative GPA >= 5.0/7.0',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Resume and corporate cover letter',
          references: 'Course coordinator approval'
        }
      },
      {
        id: 3769,
        title: 'Northern Australian Environmental Governance & Policy Masterclass',
        type: 'Course',
        subject: 'environment',
        subjects: ['environment', 'social-sciences'],
        university: 'James Cook University, Townsville City Campus',
        country: 'Australia',
        location: 'Townsville, QLD, Australia',
        deadline: '2027-05-10',
        deadlineText: 'May 10, 2027',
        funding: 'Subsidized by the Australian Public Service (APS) northern development initiative',
        tuition: 'AUD $1,250 professional registration fee',
        fee: 'AUD $40',
        source: 'https://www.jcu.edu.au',
        desc: '4-day intensive executive seminar on native title negotiations, statutory environmental impact assessments, and climate resilience frameworks in the tropics.',
        requirements: {
          gpa: 'Degree in law, environmental science, public administration, or 3 years of public service experience',
          ielts: 'English proficiency',
          gre: 'Not required',
          papers: 'Professional resume and registration form',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1632,
        name: 'Prof. Douglas Fisher',
        title: 'Professor of Law & Natural Resources Governance',
        university: 'James Cook University, Townsville City Campus',
        subject: 'social-sciences',
        topics: ['Environmental Jurisprudence', 'Water Law in Northern Australia', 'Resources Development Regulation', 'Indigenous Land Rights'],
        summary: 'Eminent legal scholar analyzing comparative resources law, statutory environmental duties, and legal mechanisms protecting tropical river basins.',
        source: 'https://www.jcu.edu.au',
        recruiting: 'Not verified'
      },
      {
        id: 1633,
        name: 'Dr. Amy E. Diedrich',
        title: 'Associate Professor of Environmental Social Science',
        university: 'James Cook University, Townsville City Campus',
        subject: 'environment',
        topics: ['Coastal Zone Management', 'Marine Protected Area Social Impacts', 'Community Resilience in the Pacific', 'Sustainable Tourism'],
        summary: 'Leading researcher investigating human-nature interactions along the Great Barrier Reef, socio-ecological system vulnerability, and marine conservation economics.',
        source: 'https://www.jcu.edu.au',
        recruiting: 'Not verified'
      },
      {
        id: 1634,
        name: 'Dr. Ryan McShane',
        title: 'Senior Lecturer in Management & Tropical Enterprise',
        university: 'James Cook University, Townsville City Campus',
        subject: "social-sciences",
        topics: ['Regional Economic Development', 'Northern Australian Workforce Dynamics', 'Indigenous Business Ecosystems', 'SME Innovation'],
        summary: 'Business scholar examining northern Australian industrial policy, resource sector clustering, and economic diversification in regional coastal economies.',
        source: 'https://www.jcu.edu.au',
        recruiting: 'Not verified'
      }
    ]
  },

  // 7. Germany - Katholische Hochschule Mainz (Catholic University of Applied Sciences Mainz) (Row 232)
  {
    slug: 'katholische-hochschule-mainz',
    institution: 'Katholische Hochschule Mainz',
    shortName: 'KH Mainz',
    countryId: 'germany',
    countryLabel: 'Germany',
    location: 'Mainz, Rhineland-Palatinate, Germany',
    website: 'https://www.kh-mz.de',
    sourceRow: 232,
    badge: 'Premier University for Social Sciences, Healthcare & Practical Theology',
    lead: 'Katholische Hochschule Mainz is a state-accredited university of applied sciences renowned across Germany for exceptional education and research in social work, healthcare management, nursing science, and practical theology.',
    overview: 'Founded in 1971 and situated in the university city of Mainz, Katholische Hochschule Mainz (KH Mainz) accommodates over 1,500 students across its Faculties of Social Work and Social Sciences, Health and Nursing, and Practical Theology. Recognized for small learning cohorts, high professor-to-student ratios, and extensive clinical networks, KH Mainz addresses critical societal challenges including demographic ageing, child protection, palliative care, and ethical healthcare leadership.',
    quickFacts: {
      type: 'State-Accredited Church-Sponsored University of Applied Sciences',
      campus: 'Mainz Campus (Saarstraße, Mainz, Rhineland-Palatinate)',
      accreditation: 'AHPGS Accredited, Ministry of Science and Health Rhineland-Palatinate',
      admissions: 'Fachhochschulreife / Abitur or equivalent secondary diploma; vocational nurse/educator qualifications recognized',
      language: 'German (primary) with select English modules and international research cooperation',
      aid: 'Deutschlandstipendium (€300/month), Cusanuswerk scholarships, Erasmus+ mobility funding'
    },
    strengths: [
      'Social Work, Child Protection & Community Care',
      'Clinical Nursing Science & Palliative Care Management',
      'Healthcare Management & Health Economics',
      'Practical Theology, Ethics & Social Dialogue'
    ],
    programs: [
      { title: 'Bachelor of Arts in Social Work (Soziale Arbeit)', level: 'Bachelor\'s', desc: 'State-recognized social work degree qualifying graduates as staatlich anerkannte/r Sozialarbeiter/in.' },
      { title: 'Master of Science in Clinical Nursing & Care Management', level: 'Master\'s', desc: 'Evidence-based clinical nursing master\'s preparing healthcare professionals for advanced practice and nursing leadership.' },
      { title: 'Master of Arts in Applied Ethics in Healthcare & Social Work', level: 'Master\'s', desc: 'Interdisciplinary graduate program exploring bioethics, clinical ethics consultation, and ethical healthcare policy.' },
      { title: 'Bachelor of Science in Health and Nursing Care (Dual)', level: 'Bachelor\'s', desc: 'Integrated dual degree combining registered nurse vocational training with academic healthcare science.' }
    ],
    opportunities: [
      {
        id: 3770,
        title: 'Deutschlandstipendium Merit Scholarship at KH Mainz',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'biology'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: '€300 per month (€3,600 annually) co-funded by the German Federal Government and private foundations',
        tuition: '€0 (Tuition-free state-accredited study; €350/semester semester fee including transit pass)',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: 'National scholarship recognizing students who combine outstanding academic performance with active civic, church, or community volunteering.',
        requirements: {
          gpa: 'Enrolled at KH Mainz with minimum grade 2.0 or better in German grading scale (or equivalent Abitur average)',
          ielts: 'German language proficiency TestDaF 4 / DSH-2 / CEFR C1',
          gre: 'Not required',
          papers: 'Resume, transcript of records, and documentation of social engagement or volunteer work',
          references: '1 letter of recommendation from an academic instructor or community organisation'
        }
      },
      {
        id: 3771,
        title: 'Master of Science in Clinical Nursing & Advanced Practice',
        type: 'Master\'s',
        subject: 'biology',
        subjects: ['biology'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Eligible for BAföG federal student support and hospital employer study sponsorship',
        tuition: '€0 tuition (Semester contribution approx. €350/semester including regional public transit)',
        fee: '€50',
        source: 'https://www.kh-mz.de',
        desc: 'Consecutive research-oriented master\'s program preparing nurses for Advanced Nursing Practice (ANP), clinical guideline implementation, and healthcare research.',
        requirements: {
          gpa: 'Completed bachelor\'s degree in nursing, healthcare science, or allied health with minimum grade 2.5',
          ielts: 'German C1 proficiency and professional nurse registration in Germany',
          gre: 'Not required',
          papers: 'Nursing diploma, university transcript, and motivational letter detailing clinical focus',
          references: '1 clinical director reference'
        }
      },
      {
        id: 3772,
        title: 'Bachelor of Arts in Social Work (Soziale Arbeit)',
        type: 'Bachelor\'s',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Federal BAföG eligibility and church diocesan study grants up to €2,500/year',
        tuition: '€0 tuition (approx. €350/semester semester fee)',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: 'Seven-semester full-time degree incorporating two supervised practical semesters in youth welfare, justice social work, or family counselling.',
        requirements: {
          gpa: 'German Fachhochschulreife, Allgemeine Hochschulreife, or recognized international equivalent',
          ielts: 'German language certificate CEFR C1 (DSH-2, TestDaF 4x4)',
          gre: 'Not required',
          papers: 'Proof of 8-week pre-study social internship (Vorpraktikum) and educational certificates',
          references: 'Internship completion verification'
        }
      },
      {
        id: 3773,
        title: 'Doctoral Research Fellowship in Social Gerontology & Ethics',
        type: 'PhD',
        subject: 'social-sciences',
        subjects: ['social-sciences', 'biology'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026',
        funding: 'TV-L E13 (65% to 100%) research associate salary (€34,000 to €52,000/year) through collaborative doctoral centers',
        tuition: '€0 (Doctoral research position)',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: 'Doctoral research position offered in collaboration with university doctoral centers investigating age-friendly urban communities, dementia care ethics, and autonomous assisted living.',
        requirements: {
          gpa: 'Master of Arts or Master of Science in Social Sciences, Nursing Science, or Ethics with grade >= 2.0 (gut)',
          ielts: 'Fluent German and scientific English proficiency',
          gre: 'Not required',
          papers: 'Master\'s thesis copy, 10-page doctoral research proposal, and curriculum vitae',
          references: '2 academic letters of recommendation from university professors'
        }
      },
      {
        id: 3774,
        title: 'Cusanuswerk Catholic Academic Foundation Scholarship at KH Mainz',
        type: 'Scholarship',
        subject: 'social-sciences',
        subjects: ['social-sciences', "social-sciences"],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Up to €812 per month plus €300 monthly study cost allowance and ideological mentoring program',
        tuition: '€0 tuition',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: 'Elite scholarship from one of Germany\'s 13 national gifted education foundations (Begabtenförderungswerke) supporting high-calibre students committed to social ethics.',
        requirements: {
          gpa: 'Exceptional academic results in undergraduate or secondary studies',
          ielts: 'German language proficiency C1',
          gre: 'Not required',
          papers: 'Detailed CV, two academic appraisals, and personal statement on personal ethics and societal contribution',
          references: '2 confidential professor assessments and 1 pastoral/community recommendation'
        }
      },
      {
        id: 3775,
        title: 'Palliative Care & Clinical Ethics Hospital Practicum',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology', 'social-sciences'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Monthly practicum allowance €600 paid by partner clinical hospital networks',
        tuition: 'Integrated into Master of Science curriculum',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: '12-week clinical internship placed within Mainz University Medical Center or Caritas palliative care hospices.',
        requirements: {
          gpa: 'Enrolled in KH Mainz graduate nursing or healthcare ethics program',
          ielts: 'German B2/C1 communication skills',
          gre: 'Not required',
          papers: 'Proof of immunizations (measles, hepatitis B) and police clearance certificate',
          references: 'Clinical coordinator endorsement'
        }
      },
      {
        id: 3776,
        title: 'Certificate in Professional Child Protection & Case Management',
        type: 'Course',
        subject: 'social-sciences',
        subjects: ['social-sciences'],
        university: 'Katholische Hochschule Mainz',
        country: 'Germany',
        location: 'Mainz, Rhineland-Palatinate, Germany',
        deadline: '2027-04-30',
        deadlineText: 'April 30, 2027',
        funding: 'Eligible for employer continuing education subsidies under § 8a SGB VIII training mandates',
        tuition: '€1,650 continuing education tuition',
        fee: '€0',
        source: 'https://www.kh-mz.de',
        desc: '6-month certified vocational course qualifying professionals as insofern erfahrene Fachkraft (§ 8a SGB VIII) for child protection assessments in youth welfare offices.',
        requirements: {
          gpa: 'Degree in social work, social pedagogy, psychology, or law with at least 2 years of relevant professional practice',
          ielts: 'German language fluency',
          gre: 'Not required',
          papers: 'Proof of professional degree and employer confirmation of social work employment',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1635,
        name: 'Prof. Dr. Ulrich Papenkort',
        title: 'Professor of Educational Science & Pedagogy',
        university: 'Katholische Hochschule Mainz',
        subject: 'social-sciences',
        topics: ['History of Social Pedagogy', 'Educational Philosophy', 'Competency Assessment in Higher Education', 'Adult Learning Theories'],
        summary: 'Prominent educational theorist exploring systematic models of pedagogical action, adult civic education, and ethical dimensions in social work practice.',
        source: 'https://www.kh-mz.de',
        recruiting: 'Not verified'
      },
      {
        id: 1636,
        name: 'Prof. Dr. Sabine Corsten',
        title: 'Professor of Health Sciences & Therapy Studies',
        university: 'Katholische Hochschule Mainz',
        subject: 'biology',
        topics: ['Aphasia Rehabilitation', 'Speech & Language Therapy Outcomes', 'Interprofessional Healthcare Teams', 'Social Participation in Neurological Illness'],
        summary: 'Clinical health scientist pioneering collaborative biographical storytelling interventions and community participation outcomes for patients living with chronic aphasia.',
        source: 'https://www.kh-mz.de',
        recruiting: 'Not verified'
      },
      {
        id: 1637,
        name: 'Prof. Dr. Peter Neuhaus',
        title: 'Professor of Practical Theology & Social Ethics',
        university: 'Katholische Hochschule Mainz',
        subject: 'social-sciences',
        topics: ['Bioethics in Acute Care', 'Theological Anthropologies', 'Social Responsibility in Organizations', 'End-of-Life Pastoral Care'],
        summary: 'Theological ethicist examining ethical triage decisions, organizational culture in faith-based social institutions, and palliative pastoral accompaniment.',
        source: 'https://www.kh-mz.de',
        recruiting: 'Not verified'
      }
    ]
  },

  // 8. Germany - Hochschule Geisenheim University (Row 236)
  {
    slug: 'hochschule-geisenheim-university',
    institution: 'Hochschule Geisenheim University',
    shortName: 'Geisenheim University',
    countryId: 'germany',
    countryLabel: 'Germany',
    location: 'Geisenheim, Hesse, Germany',
    website: 'https://www.hs-geisenheim.de',
    sourceRow: 236,
    badge: 'World Premier University for Viticulture, Enology & Beverage Technology',
    lead: 'Hochschule Geisenheim University is an internationally preeminent research university situated in the Rheingau wine region, renowned worldwide for viticulture, enology, beverage technology, and landscape architecture.',
    overview: 'Established in 1872 and enjoying unique statutory status as a \'new-type\' research university with independent doctoral degree-awarding rights, Hochschule Geisenheim University is a global leader in specialized agricultural and environmental sciences. Its historic campus on the banks of the Rhine incorporates extensive experimental vineyards, wine cellars, greenhouse complexes, and climate research stations, spearheading international research into climate-adapted agriculture and sustainable food systems.',
    quickFacts: {
      type: 'Specialist State Research University (Independent Ph.D. Awarding)',
      campus: 'Rheingau Campus (Geisenheim, Hesse, Germany)',
      accreditation: 'Hessian Ministry of Higher Education, Research, Science and the Arts; ZEvA Accredited',
      admissions: 'Abitur / Fachhochschulreife; pre-study internship required for viticulture and beverage technology',
      language: 'German & English (several master\'s and doctoral programs taught 100% in English)',
      aid: 'Deutschlandstipendium, DAAD scholarships, Hessian doctoral research fellowships'
    },
    strengths: [
      'Viticulture, Enology & Climate-Adaptive Terroir Management',
      'Beverage Technology & Fermentation Science',
      'Landscape Architecture & Environmental Planning',
      'Horticultural Sciences & Urban Green Infrastructure'
    ],
    programs: [
      { title: 'Doctor of Philosophy (Dr. rer. nat. / Dr.-Ing.) in Horticultural & Enological Sciences', level: 'Doctorate', desc: 'Independent research doctorate examining plant physiology, viticultural climate adaptation, and fermentation biochemistry.' },
      { title: 'Master of Science in Viticulture and Enology (Vitis-Vinifera EuroMaster)', level: 'Master\'s', desc: 'Prestigious Erasmus Mundus dual master\'s program delivered jointly with leading European viticultural institutions.' },
      { title: 'Master of Science in Beverage Technology', level: 'Master\'s', desc: 'Applied engineering master\'s covering industrial beverage processing, brewing technology, and quality management.' },
      { title: 'Bachelor of Science in International Wine Business', level: 'Bachelor\'s', desc: 'English-taught undergraduate program blending wine economics, international marketing, logistics, and sensory science.' }
    ],
    opportunities: [
      {
        id: 3777,
        title: 'Vitis-Vinifera EuroMaster Erasmus Mundus Joint Scholarship',
        type: 'Scholarship',
        subject: 'biology',
        subjects: ['biology', 'chemistry', 'environment'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Up to €1,400 per month living allowance, full tuition fee coverage, and €3,000 annual travel stipend',
        tuition: 'Fully funded under EU Erasmus Mundus funding (standard fee €9,000/year for non-EU students)',
        fee: '€0',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Elite European Commission scholarship supporting outstanding international graduates undertaking the joint European Master in Viticulture and Enology.',
        requirements: {
          gpa: 'BSc in agriculture, enology, biology, food technology, or biochemistry with top-quartile grades',
          ielts: 'IELTS 6.5 or TOEFL iBT 90 (English instruction)',
          gre: 'Not required',
          papers: 'CV, statement of motivation, and verified record of at least 4 weeks of hands-on vineyard/winery work',
          references: '2 academic letters of recommendation'
        }
      },
      {
        id: 3778,
        title: 'PhD in Climate-Adapted Viticulture & Grapevine Genomics',
        type: 'PhD',
        subject: 'environment',
        subjects: ['environment', 'biology'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        funding: 'TV-H E13 (65%) scientific employee contract approx. €33,000/year plus social benefits for 3 years',
        tuition: '€0 tuition (approx. €330/semester semester fee)',
        fee: '€0',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Doctoral research candidate investigating drought tolerance gene expression in Vitis vinifera rootstocks under experimental FACE (Free-Air Carbon Dioxide Enrichment) conditions.',
        requirements: {
          gpa: 'Master of Science in plant biology, viticulture, agronomy, or molecular genetics with minimum grade 2.0',
          ielts: 'Fluent scientific English (IELTS 6.5+)',
          gre: 'Not required',
          papers: 'MSc thesis abstract, 5-page research proposal, and curriculum vitae',
          references: '2 letters of recommendation from university faculty'
        }
      },
      {
        id: 3779,
        title: 'MSc in Beverage Technology (Getränketechnologie)',
        type: 'Master\'s',
        subject: 'engineering',
        subjects: ['engineering', 'chemistry'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Industry research assistantships and Deutschlandstipendium awards (€3,600/year) available',
        tuition: '€0 tuition (approx. €330/semester semester fee including Hesse public transport pass)',
        fee: '€50',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Three-semester master\'s program focusing on non-thermal pasteurization, filtration membrane technologies, fermentation kinetics, and brewery operations.',
        requirements: {
          gpa: 'BSc in Beverage Technology, Food Technology, Chemical Engineering, or Biotechnology (grade >= 2.5)',
          ielts: 'German language proficiency DSH-2 / TestDaF 4x4 or English B2 depending on course track',
          gre: 'Not required',
          papers: 'Curriculum vitae, undergraduate transcript, and certificate of completed practical industry pre-training',
          references: '1 academic reference letter'
        }
      },
      {
        id: 3780,
        title: 'BSc in International Wine Business (Taught in English)',
        type: 'Bachelor\'s',
        subject: "social-sciences",
        subjects: ["social-sciences", 'environment'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027',
        funding: 'Scholarships from the Rheingau Wine Association and German Academic Exchange Service (DAAD)',
        tuition: '€0 tuition (approx. €330/semester semester contribution)',
        fee: '€50',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Six-semester bachelor\'s program taught completely in English, integrating international wine marketing, corporate finance, and supply chain logistics.',
        requirements: {
          gpa: 'Recognized university entrance qualification (Abitur, IB Diploma, High School Diploma with APs)',
          ielts: 'IELTS 6.0 or TOEFL iBT 80',
          gre: 'Not required',
          papers: 'Proof of 12-week commercial pre-study internship in the wine or beverage industry',
          references: 'Internship employer certificate'
        }
      },
      {
        id: 3781,
        title: 'Geisenheim FACE Climate Research Center Postdoctoral Fellowship',
        type: 'Fellowship',
        subject: 'environment',
        subjects: ['environment', 'biology'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026',
        funding: 'TV-H E13 (100%) salary approx. €52,000 to €58,000/year plus laboratory research consumables budget',
        tuition: 'Academic research appointment (No tuition)',
        fee: '€0',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Two-year postdoctoral fellowship utilizing the unique VineyardFACE facility to study the impacts of elevated CO2 and extreme weather events on vine physiology.',
        requirements: {
          gpa: 'PhD in agronomy, plant physiology, environmental science, or micrometeorology completed within last 3 years',
          ielts: 'Native or near-native English fluency',
          gre: 'Not required',
          papers: 'Curriculum vitae, 3 peer-reviewed journal publications, and 3-page research project design',
          references: '3 international scientific referees'
        }
      },
      {
        id: 3782,
        title: 'Experimental Vineyard & Enology Research Practicum',
        type: 'Internship',
        subject: 'biology',
        subjects: ['biology', 'chemistry'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'Remuneration €650/month plus on-campus student dormitory accommodation subsidies',
        tuition: '€0',
        fee: '€0',
        source: 'https://www.hs-geisenheim.de',
        desc: 'Five-month harvest and micro-vinification internship inside Geisenheim\'s experimental research wineries and sensory analysis laboratories.',
        requirements: {
          gpa: 'Enrolled in an accredited degree program in viticulture, agricultural science, or food science',
          ielts: 'English or German working proficiency',
          gre: 'Not required',
          papers: 'Cover letter, academic resume, and certificate of health for food handling',
          references: '1 university professor reference'
        }
      },
      {
        id: 3783,
        title: 'Sensory Analysis of Wine & Modern Enological Practices Seminar',
        type: 'Course',
        subject: 'chemistry',
        subjects: ['chemistry', 'biology'],
        university: 'Hochschule Geisenheim University',
        country: 'Germany',
        location: 'Geisenheim, Hesse, Germany',
        deadline: '2027-04-10',
        deadlineText: 'April 10, 2027',
        funding: 'Certified continuing education course with industry certificate',
        tuition: '€1,200 seminar fee including tasting wines and laboratory consumables',
        fee: '€0',
        source: 'https://www.hs-geisenheim.de',
        desc: '3-day advanced sensory evaluation course covering fault identification, phenolic compound analysis, and modern aging techniques.',
        requirements: {
          gpa: 'Basic knowledge of enology or beverage technology',
          ielts: 'Instruction provided in German with English translation support',
          gre: 'Not required',
          papers: 'Registration form and professional biography',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1638,
        name: 'Prof. Dr. Hans Reiner Schultz',
        title: 'President & Professor of Viticulture',
        university: 'Hochschule Geisenheim University',
        subject: 'environment',
        topics: ['Climate Change Impacts on Viticulture', 'Grapevine Ecophysiology', 'Canopy Microclimate Modeling', 'Water Relations in Arid Terroirs'],
        summary: 'World-renowned viticultural scientist leading international investigations into carbon assimilation, grapevine water use efficiency, and global wine sector adaptation to climate shifts.',
        source: 'https://www.hs-geisenheim.de',
        recruiting: 'Not verified'
      },
      {
        id: 1639,
        name: 'Prof. Dr. Monika Christmann',
        title: 'Head of Enology & Former President of OIV',
        university: 'Hochschule Geisenheim University',
        subject: 'chemistry',
        topics: ['Enological Technology', 'Fermentation Byproducts', 'Wine De-alcoholization', 'International OIV Regulations'],
        summary: 'Former President of the International Organisation of Vine and Wine (OIV), leading research into non-thermal filtration, crossflow membrane processing, and low-alcohol wine stability.',
        source: 'https://www.hs-geisenheim.de',
        recruiting: 'Not verified'
      },
      {
        id: 1640,
        name: 'Prof. Dr. Ralf Schweiggert',
        title: 'Professor of Beverage Technology & Analysis',
        university: 'Hochschule Geisenheim University',
        subject: 'chemistry',
        topics: ['Bioactive Beverage Phytochemicals', 'Thermal and Non-Thermal Pasteurization', 'Polyphenol Stability', 'Industrial Fruit Juices'],
        summary: 'Expert in beverage science researching the retention of anthocyanins, carotenoids, and volatile aroma compounds during sustainable high-pressure and pulsed electric field processing.',
        source: 'https://www.hs-geisenheim.de',
        recruiting: 'Not verified'
      }
    ]
  },

  // 9. Germany - WHU - Otto Beisheim School of Management (Row 436)
  {
    slug: 'whu-otto-beisheim-school-of-management',
    institution: 'WHU - Otto Beisheim School of Management',
    shortName: 'WHU Beisheim',
    countryId: 'germany',
    countryLabel: 'Germany',
    location: 'Vallendar & Düsseldorf, Germany',
    website: 'https://www.whu.edu',
    sourceRow: 436,
    badge: 'Premier European Business School (EQUIS, AACSB, FIBAA)',
    lead: 'WHU - Otto Beisheim School of Management is Germany’s #1 ranked business school, globally renowned for entrepreneurial excellence, venture creation, corporate finance, and executive leadership.',
    overview: 'Established in 1984 under the patronage of the Koblenz Chamber of Commerce and renowned philanthropist Otto Beisheim, WHU operates modern campuses in Vallendar (near Koblenz) and Düsseldorf. Consistently ranked among the top European business schools by the Financial Times, WHU is celebrated as Germany’s foremost entrepreneurial powerhouse—having educated the founders of Europe’s leading technology unicorns (such as Zalando, Delivery Hero, and HelloFresh).',
    quickFacts: {
      type: 'Private Top-Tier Business School (Triple Accredited: EQUIS, AACSB, FIBAA)',
      campus: 'Vallendar Campus (Historic Rhine valley) & Düsseldorf Campus (Executive Center)',
      accreditation: 'EQUIS, AACSB, FIBAA Accredited; Institutional Accreditation by the German Science Council',
      admissions: 'Highly selective multi-stage admissions process including cognitive tests and personal interviews',
      language: 'English (100% across MSc, MBA, and PhD programs; bilingual BSc option)',
      aid: 'WHU Merit Scholarships, Brain Capital Income Share Agreements (ISAs), In Praxi Alumni Bursaries'
    },
    strengths: [
      'Venture Creation, Entrepreneurship & Tech Incubators',
      'Corporate Finance, M&A, Private Equity & Investment Banking',
      'Strategic Management & Global Digital Transformation',
      'Executive Leadership, Organizational Behavior & ESG Strategy'
    ],
    programs: [
      { title: 'Master in Management (MiM)', level: 'Master\'s', desc: 'Top-ranked European MSc program emphasizing corporate strategy, international business, and digital operations.' },
      { title: 'Master in Finance (MiF)', level: 'Master\'s', desc: 'Elite financial economics master\'s preparing graduates for top-tier investment banking, hedge funds, and private equity.' },
      { title: 'Doctor of Philosophy (Dr. rer. pol.) in Management Studies', level: 'Doctorate', desc: 'Rigorous doctoral program with extensive coursework in quantitative econometrics, game theory, and empirical corporate strategy.' },
      { title: 'Full-Time MBA', level: 'Master\'s', desc: 'One-year intensive MBA program in Düsseldorf focusing on international leadership, entrepreneurship, and executive coaching.' }
    ],
    opportunities: [
      {
        id: 3784,
        title: 'WHU Excellence & Diversity Master\'s Scholarship',
        type: 'Scholarship',
        subject: "social-sciences",
        subjects: ["social-sciences", 'social-sciences'],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Vallendar & Düsseldorf, Germany',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Up to 50% tuition reduction (€16,000 to €22,000 value) awarded across the master\'s study duration',
        tuition: '€34,800 to €42,000 total program tuition (depending on Master in Management / Master in Finance track)',
        fee: '€100',
        source: 'https://www.whu.edu',
        desc: 'Merit scholarship awarded to candidates demonstrating exceptional GMAT/GRE scores, remarkable leadership potential, and diverse international backgrounds.',
        requirements: {
          gpa: 'Excellent bachelor\'s degree in business, economics, or quantitative STEM field with GPA >= 3.6/4.0',
          ielts: 'IELTS 7.0 (minimum 6.5 in all sections) or TOEFL iBT 100',
          gre: 'GMAT score >= 660 (or GMAT Focus >= 615 / GRE equivalent)',
          papers: 'CV, transcripts, essay answering two prompt questions, and video interview submission',
          references: '2 academic or senior managerial recommendations'
        }
      },
      {
        id: 3785,
        title: 'Master in Finance (MiF - Corporate Finance & Asset Pricing)',
        type: 'Master\'s',
        subject: "social-sciences",
        subjects: ["social-sciences", 'mathematics'],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Vallendar, Germany',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'In Praxi Alumni Diversity Scholarships and Brain Capital generation contracts available',
        tuition: '€34,800 full program tuition',
        fee: '€100',
        source: 'https://www.whu.edu',
        desc: 'Preeminent European finance master\'s featuring practical capstone projects with Goldman Sachs, J.P. Morgan, and McKinsey & Company.',
        requirements: {
          gpa: 'Undergraduate degree with at least 20 ECTS in economics and 20 ECTS in quantitative methods/finance',
          ielts: 'IELTS 7.0 or TOEFL 100',
          gre: 'GMAT >= 650 or GRE equivalent',
          papers: 'Resume, 12 weeks of completed business/finance internships, and transcripts',
          references: '2 referee evaluations'
        }
      },
      {
        id: 3786,
        title: 'Doctor of Philosophy (Dr. rer. pol.) in Entrepreneurship & Innovation',
        type: 'PhD',
        subject: "social-sciences",
        subjects: ["social-sciences", 'social-sciences'],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Vallendar, Germany',
        deadline: '2026-11-30',
        deadlineText: 'November 30, 2026',
        funding: 'Full funding via research assistant contract TV-L E13 approx. €48,000/year plus €3,000 annual conference travel funding',
        tuition: '€0 tuition (Funded research chair doctoral position)',
        fee: '€0',
        source: 'https://www.whu.edu',
        desc: 'Fully funded 3- to 4-year doctoral candidacy within the WHU Entrepreneurship Center examining venture capital financing, angel networks, and AI-driven business models.',
        requirements: {
          gpa: 'Master of Science or Master of Arts in Business, Economics, or Quantitative Sciences with distinction (top 10% cohort)',
          ielts: 'Flawless academic English',
          gre: 'GMAT or GRE strongly recommended',
          papers: 'Master\'s thesis copy, academic CV, and preliminary research statement (5 pages)',
          references: '2 confidential academic referee letters from university professors'
        }
      },
      {
        id: 3787,
        title: 'WHU In Praxi Women in Business Scholarship',
        type: 'Scholarship',
        subject: "social-sciences",
        subjects: ["social-sciences"],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Vallendar & Düsseldorf, Germany',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: 'Tuition waiver of €15,000 funded by the WHU Alumni Association (In Praxi)',
        tuition: 'Applied directly against Master in Management or MBA tuition balance',
        fee: '€0',
        source: 'https://www.whu.edu',
        desc: 'Dedicated fellowship promoting gender diversity and female empowerment in corporate management, venture capital, and boardroom leadership.',
        requirements: {
          gpa: 'Admission to the WHU MiM, MiF, or Full-Time MBA program',
          ielts: 'Fluent English proficiency',
          gre: 'GMAT/GRE score as required by degree program',
          papers: 'Scholarship essay detailing leadership achievements and vision for women in business',
          references: '1 professional executive reference'
        }
      },
      {
        id: 3788,
        title: 'Full-Time MBA (Düsseldorf Campus)',
        type: 'Master\'s',
        subject: "social-sciences",
        subjects: ["social-sciences"],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Düsseldorf, Germany',
        deadline: '2027-02-28',
        deadlineText: 'February 28, 2027',
        funding: 'Early bird reductions up to €5,000 and Dean\'s leadership awards up to €10,000',
        tuition: '€44,000 total program tuition',
        fee: '€100',
        source: 'https://www.whu.edu',
        desc: '12-month intensive MBA combining general management, international study modules (USA, China, India), and personalized executive career placement.',
        requirements: {
          gpa: 'Bachelor\'s degree and minimum 3 years of post-graduate professional work experience',
          ielts: 'IELTS 7.0 or TOEFL 100',
          gre: 'GMAT/GRE or WHU On-Campus Admissions Test',
          papers: 'Professional resume, 2 admissions essays, and verified employment certificates',
          references: '2 professional supervisor recommendations'
        }
      },
      {
        id: 3789,
        title: 'WHU Entrepreneurship Center Venture Incubator Fellowship',
        type: 'Fellowship',
        subject: "social-sciences",
        subjects: ["social-sciences", 'computer-science'],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Vallendar & Düsseldorf, Germany',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        funding: '€25,000 seed grant, dedicated co-working space in Düsseldorf, and direct mentoring from WHU unicorn alumni founders',
        tuition: '€0 (Equity-free incubation fellowship)',
        fee: '€0',
        source: 'https://www.whu.edu',
        desc: '6-month venture acceleration fellowship for student and alumni founder teams launching scalable digital, fintech, or green-tech startups.',
        requirements: {
          gpa: 'Current WHU student or recent alumnus/alumna with a validated minimum viable product (MVP)',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Executive pitch deck (15 slides), financial pro-forma, and team member bios',
          references: 'Pitch presentation before the WHU Angel Investor Panel'
        }
      },
      {
        id: 3790,
        title: 'Executive Financial Modeling & Private Equity Valuation Masterclass',
        type: 'Course',
        subject: "social-sciences",
        subjects: ["social-sciences", 'mathematics'],
        university: 'WHU - Otto Beisheim School of Management',
        country: 'Germany',
        location: 'Düsseldorf, Germany',
        deadline: '2027-05-20',
        deadlineText: 'May 20, 2027',
        funding: 'Corporate group discounts available',
        tuition: '€3,200 executive program registration fee',
        fee: '€0',
        source: 'https://www.whu.edu',
        desc: '3-day intensive executive education course on LBO modeling, distressed debt restructuring, and discounted cash flow analysis taught by senior finance faculty.',
        requirements: {
          gpa: 'Undergraduate degree or at least 2 years in corporate finance, banking, or consulting',
          ielts: 'Business English fluency',
          gre: 'Not required',
          papers: 'Professional profile or LinkedIn summary',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1641,
        name: 'Prof. Dr. Christian Andres',
        title: 'Dean & Professor of Corporate Finance',
        university: 'WHU - Otto Beisheim School of Management',
        subject: "social-sciences",
        topics: ['Corporate Governance', 'Mergers & Acquisitions (M&A)', 'Family Firm Valuation', 'Dividend Policies'],
        summary: 'Leading European financial economist researching corporate ownership structures, boardroom incentives, shareholder activism, and capital market efficiency.',
        source: 'https://www.whu.edu',
        recruiting: 'Not verified'
      },
      {
        id: 1642,
        name: 'Prof. Dr. Dries Faems',
        title: 'Chair of Entrepreneurship, Innovation and Technological Transformation',
        university: 'WHU - Otto Beisheim School of Management',
        subject: "social-sciences",
        topics: ['Open Innovation', 'Artificial Intelligence in Corporate Venturing', 'Inter-Organizational Collaboration', 'Startup Ecosystems'],
        summary: 'Internationally recognized scholar examining collaborative R&D networks, startup-corporate alliances, and the strategic deployment of AI in emerging ventures.',
        source: 'https://www.whu.edu',
        recruiting: 'Not verified'
      },
      {
        id: 1643,
        name: 'Prof. Dr. Nadine Kammerlander',
        title: 'Director of the Institute of Family Business and Mittelstand',
        university: 'WHU - Otto Beisheim School of Management',
        subject: "social-sciences",
        topics: ['German Mittelstand Innovation', 'Generational Succession', 'Family Office Investments', 'Digital Transformation'],
        summary: 'Pioneering researcher on innovation and governance in family-owned enterprises, frequently advising the German Federal Ministry for Economic Affairs and Climate Action.',
        source: 'https://www.whu.edu',
        recruiting: 'Not verified'
      }
    ]
  },

  // 10. Italy - Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara) (Row 468)
  {
    slug: 'universita-degli-studi-di-cassino-campus-folcara',
    institution: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
    shortName: 'UniCas Folcara',
    countryId: 'italy',
    countryLabel: 'Italy',
    location: 'Cassino, Lazio, Italy',
    website: 'https://www.unicas.it',
    sourceRow: 468,
    badge: 'Premier Hub for Engineering, Law & Economics',
    lead: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara) is a prestigious public university campus nestled beneath the historic Monte Cassino abbey, celebrated for robotics, industrial engineering, legal studies, and sustainable economics.',
    overview: 'Established in 1979 and centered upon the modern suburban Campus Folcara in Cassino, UNICAS is a recognized center of research excellence in Southern and Central Italy. Its world-renowned robotics research teams (LAI - Laboratory of Industrial Automation and Robotics), sustainable mechanical laboratories, and Department of Economics and Law collaborate closely with major industrial leaders including Stellantis, automotive clusters, and regional legal tribunals.',
    quickFacts: {
      type: 'Public Comprehensive University Campus',
      campus: 'Campus Folcara (Località Folcara, Cassino, Frosinone, Lazio)',
      accreditation: 'MUR (Ministry of University and Research), ANVUR Accredited',
      admissions: 'TOLC admission test / high school diploma; bachelor\'s degree for Laurea Magistrale entry',
      language: 'Italian & English (numerous engineering and economics degrees taught fully in English)',
      aid: 'DiSCo Lazio regional scholarships (€7,500/year plus free dormitory and meal vouchers), UNICAS fee waivers'
    },
    strengths: [
      'Robotics, Industrial Automation & Smart Manufacturing',
      'Automotive Systems, Mechatronics & Sustainable Energy',
      'Economics, Management & Cross-Border Commercial Law',
      'Digital Humanities, Cultural Heritage & Archival Studies'
    ],
    programs: [
      { title: 'Laurea Magistrale in Telecommunications Engineering', level: 'Master\'s', desc: 'English-taught engineering master\'s examining 5G/6G communication networks, radar systems, and IoT sensors.' },
      { title: 'Laurea Magistrale in Mechanical Engineering (Automotive Focus)', level: 'Master\'s', desc: 'Advanced mechanical engineering master\'s integrated with the automotive manufacturing cluster in Lazio.' },
      { title: 'PhD in Methods, Models and Technologies for Engineering', level: 'Doctorate', desc: 'Doctoral research focusing on robotics, machine learning for industrial automation, and electromagnetic design.' },
      { title: 'Laurea Magistrale in Global Economy and Business', level: 'Master\'s', desc: 'International business program addressing circular supply chains, European competition law, and fintech analytics.' }
    ],
    opportunities: [
      {
        id: 3791,
        title: 'DiSCo Lazio Regional University Scholarship at UNICAS Folcara',
        type: 'Scholarship',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Up to €7,655 per year cash stipend, 100% full tuition waiver, free university residence accommodation, and daily campus cafeteria meals',
        tuition: '€0 (Full tuition exemption under regional scholarship rules; regular max fee €2,100/year)',
        fee: '€16 (State regional tax only)',
        source: 'https://www.unicas.it',
        desc: 'Comprehensive need-and-merit scholarship funded by the Lazio Regional Authority guaranteeing full financial coverage for domestic and international students.',
        requirements: {
          gpa: 'ISEE Parificato (Equivalent Economic Situation Indicator) below €25,000 and verified academic progression credits',
          ielts: 'B2 English for English-taught degrees (IELTS 6.0+) or B2 Italian',
          gre: 'Not required',
          papers: 'Family income certificate, consular legalization (DoV or CIMEA), and academic transcripts',
          references: 'Not required'
        }
      },
      {
        id: 3792,
        title: 'PhD Candidature in Robotics & Industrial Automation',
        type: 'PhD',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-01-31',
        deadlineText: 'January 31, 2027',
        funding: 'Ministerial doctoral scholarship €1,400 net per month (€16,800/year) plus 50% increase for research periods abroad and €3,000 bench fee',
        tuition: '€0 (Doctoral research candidates exempt from tuition)',
        fee: '€16',
        source: 'https://www.unicas.it',
        desc: 'Fully funded 3-year PhD investigating collaborative robotics (cobots), autonomous mobile manipulation, and sensor fusion for Industry 4.0.',
        requirements: {
          gpa: 'Master of Science degree in Robotics, Automation, Mechanical, or Computer Engineering with top grades',
          ielts: 'Fluent technical English (CEFR B2 or higher)',
          gre: 'Not required',
          papers: 'Curriculum vitae, master\'s thesis summary, and 5-page original research project proposal',
          references: '2 letters of recommendation from academic supervisors'
        }
      },
      {
        id: 3793,
        title: 'Laurea Magistrale in Mechanical Engineering (Sustainable Mobility)',
        type: 'Master\'s',
        subject: 'engineering',
        subjects: ['engineering', 'environment'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027',
        funding: 'Eligible for DiSCo Lazio regional grants and Stellantis engineering student bursaries',
        tuition: 'Sliding scale €156 to €2,100 per year based on family ISEE bracket',
        fee: '€16',
        source: 'https://www.unicas.it',
        desc: 'Two-year MSc degree taught in English covering powertrain electrification, lightweight composite materials, and finite element modeling.',
        requirements: {
          gpa: 'Bachelor\'s in Mechanical or Industrial Engineering with strong mathematical and thermodynamic foundations',
          ielts: 'CEFR B2 English certification',
          gre: 'Not required',
          papers: 'Curriculum vitae, detailed course syllabus of bachelor\'s studies, and CIMEA statement of comparability',
          references: '1 academic reference letter'
        }
      },
      {
        id: 3794,
        title: 'Laurea Magistrale in Global Economy and Business (English Taught)',
        type: 'Master\'s',
        subject: "social-sciences",
        subjects: ["social-sciences", 'social-sciences'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027',
        funding: 'Tuition reduction based on ISEE and merit performance incentives up to €1,500',
        tuition: 'Maximum €2,100 per year (waived for regional scholarship recipients)',
        fee: '€16',
        source: 'https://www.unicas.it',
        desc: 'Interdisciplinary graduate business degree exploring multinational corporation strategy, trade econometrics, and digital supply chain analytics.',
        requirements: {
          gpa: 'Bachelor\'s degree in Economics, Management, Finance, or Political Sciences with minimum 60 ECTS in economics/law',
          ielts: 'IELTS 6.0 or Cambridge B2 First',
          gre: 'Not required',
          papers: 'Bachelor degree certificate, official transcript of records, and statement of purpose',
          references: 'Not required'
        }
      },
      {
        id: 3795,
        title: 'Invest Your Talent in Italy Fellowship at UNICAS',
        type: 'Scholarship',
        subject: 'engineering',
        subjects: ['engineering', "social-sciences"],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-03-01',
        deadlineText: 'March 1, 2027',
        funding: '€900 monthly allowance, full tuition fee waiver, and guaranteed 3-month on-the-job internship with leading Italian industrial corporations',
        tuition: '€0 (Covered under Ministry of Foreign Affairs scholarship)',
        fee: '€0',
        source: 'https://www.unicas.it',
        desc: 'Prestigious fellowship program promoted by the Italian Ministry of Foreign Affairs (MAECI) supporting engineering and economics master\'s students from select partner nations.',
        requirements: {
          gpa: 'Graduated bachelor\'s degree with high academic standing from eligible partner countries',
          ielts: 'English B2 or higher',
          gre: 'Not required',
          papers: '1-minute video presentation, transcript of exams, and CV in Europass format',
          references: '1 university recommendation'
        }
      },
      {
        id: 3796,
        title: 'Industrial Automation & Robot Cell Programming Internship',
        type: 'Internship',
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-02-15',
        deadlineText: 'February 15, 2027',
        funding: 'Monthly internship allowance €800 paid by partner automotive manufacturing cluster',
        tuition: 'Curricular internship credits (No additional tuition)',
        fee: '€0',
        source: 'https://www.unicas.it',
        desc: '6-month intensive industrial robotics internship at the LAI laboratory in collaboration with regional automotive manufacturing lines.',
        requirements: {
          gpa: 'Completed first year of Master\'s in Mechanical, Electrical, or Telecommunication Engineering',
          ielts: 'English or Italian working proficiency',
          gre: 'Not required',
          papers: 'CV detailing ROS (Robot Operating System), C++, and Python proficiency',
          references: 'Academic tutor approval'
        }
      },
      {
        id: 3797,
        title: 'Cyber-Physical Systems & Industrial IoT Security Workshop',
        type: 'Course',
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        country: 'Italy',
        location: 'Cassino, Lazio, Italy',
        deadline: '2027-05-15',
        deadlineText: 'May 15, 2027',
        funding: 'Subsidized by EU NextGenerationEU (PNRR) digital skills initiative',
        tuition: '€500 course fee (Free for currently enrolled UNICAS students)',
        fee: '€16',
        source: 'https://www.unicas.it',
        desc: '3-week certified technical training covering SCADA security, industrial firewall configuration, Modbus/OPC-UA protocol defense, and anomaly detection.',
        requirements: {
          gpa: 'Enrolled in STEM degree or professional engineering background',
          ielts: 'English working proficiency',
          gre: 'Not required',
          papers: 'Short technical resume',
          references: 'Not required'
        }
      }
    ],
    researchers: [
      {
        id: 1644,
        name: 'Prof. Gianluca Antonelli',
        title: 'Professor of Automatic Control & Robotics',
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        subject: 'engineering',
        topics: ['Underwater Robotics', 'Multi-Agent Autonomous Systems', 'Mobile Manipulation', 'Kinematic Control of Robot Swarms'],
        summary: 'IEEE Fellow and internationally acclaimed robotics researcher pioneering fault-tolerant kinematics, distributed control for robotic swarms, and autonomous underwater vehicle exploration.',
        source: 'https://www.unicas.it',
        recruiting: 'Not verified'
      },
      {
        id: 1645,
        name: 'Prof. Ciro D\'Elia',
        title: 'Professor of Telecommunications & Remote Sensing',
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        subject: 'engineering',
        topics: ['Synthetic Aperture Radar (SAR)', 'Satellite Earth Observation', 'Statistical Signal Processing', 'Machine Learning for Image Analysis'],
        summary: 'Leading telecommunications scholar specializing in satellite radar image reconstruction, environmental land-cover monitoring, and Bayesian image classification.',
        source: 'https://www.unicas.it',
        recruiting: 'Not verified'
      },
      {
        id: 1646,
        name: 'Prof. Raffaele Trequattrini',
        title: 'Professor of Business Administration & Accounting',
        university: 'Università degli Studi di Cassino e del Lazio Meridionale (Campus Folcara)',
        subject: "social-sciences",
        topics: ['Intellectual Capital Valuation', 'Sustainable Business Models', 'Crisis Management in SMEs', 'Circular Economy Accounting'],
        summary: 'Distinguished economics researcher investigating non-financial disclosures, intellectual capital metrics, and corporate resilience in Italian manufacturing districts.',
        source: 'https://www.unicas.it',
        recruiting: 'Not verified'
      }
    ]
  }
];

export const batch37Part1 = batch37Part1Universities;
