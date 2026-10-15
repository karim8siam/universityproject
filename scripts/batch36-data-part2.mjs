/**
 * Batch 36 Data - Part 2: Universities 11-20
 * - Italy: Faculty of Law UNIMC (University of Macerata), Faculty of Theology of Emilia Romagna (FTER Bologna), IAAD. Bologna
 * - USA: Baruch College (CUNY), Belmont University, Beloit College
 * - UK: City of Oxford College, Coventry University London, Liverpool School of Tropical Medicine (LSTM), London Metropolitan University
 * 
 * Opportunity IDs: 3588 - 3657 (70 records)
 * Researcher IDs: 1557 - 1586 (30 records)
 */

export const batch36Part2Universities = [
  // 11. Italy - Faculty of Law UNIMC (University of Macerata) (Row 465)
  {
    institution: "Faculty of Law UNIMC (University of Macerata)",
    shortName: "UNIMC Law",
    slug: "unimc-faculty-of-law-macerata",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Macerata, Marche, Italy",
    website: "https://giurisprudenza.unimc.it",
    sourceRow: 465,
    heroEyebrow: "Macerata, Marche · Est. 1290 · European Comparative Law & Legal Informatics",
    headline: "UNIMC Faculty of Law: International Legal Studies, PhD & Human Rights Guide",
    overview: "Founded in 1290, the University of Macerata (Università di Macerata / UNIMC) is one of the oldest universities in Europe, located in the historic hilltop city of Macerata in the Marche region. The Department of Law (Dipartimento di Giurisprudenza) is UNIMC's flagship founding faculty, renowned for comparative legal history, international trade law, European Union jurisprudence, and digital rights. Housed in historic Renaissance palazzi, the faculty combines classical humanist legal scholarship with contemporary global governance.",
    description: "Explore the Faculty of Law at University of Macerata (UNIMC): International Jurisprudence degrees, ERASMUS+ exchanges, doctoral scholarships, tuition fees, and leading Italian legal scholars.",
    admissions: {
      masters: "Accredited Bachelor's degree (Laurea Triennale or equivalent international first-cycle degree) in law, political science, or international relations with a solid foundational record in public and private law.",
      phd: "Recognized second-cycle Master's degree (Laurea Magistrale) in law or related discipline; public competition (concorso pubblico) based on academic qualifications and an oral defense of the research proposal.",
      language: "B2 level proficiency in English for international English-curricula degrees; B2 Italian for standard Italian-language single-cycle law degrees (Laurea Magistrale a Ciclo Unico in Giurisprudenza).",
      proposal: "Required for doctoral applicants: 3,000 to 5,000-word detailed research proposal in comparative law, international trade law, or digital governance.",
      appFee: "€30 application fee for international pre-assessment.",
      documents: "University diploma, academic transcripts, declaration of value (Dichiarazione di Valore) or CIMEA comparability certificate, CV, motivation letter, and valid passport."
    },
    tuitionText: "Tuition is determined by family income (ISEE-U indicator), ranging from €0 (no-tax area for lower income) up to approximately €1,950 per academic year for maximum bracket. Regional ERDIS Marche scholarships provide full tuition fee waivers, free university dining, and annual living stipends up to €6,500. Fully funded doctoral scholarships award approximately €16,243 gross per year.",
    opportunities: [
      {
        id: 3588,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "ERDIS Marche Regional Higher Education Scholarship at UNIMC",
        source: "https://erdis.it",
        funding: "Full tuition waiver + free dining service + up to €6,500/year living allowance",
        status: "Available",
        deadline: "2027-08-30",
        deadlineText: "August 30, 2027 (Annual regional call)",
        fee: "€0",
        tuition: "€0 under ERDIS scholarship",
        requirements: {
          gpa: "Academic merit and family economic status (ISEE-U below €25,000 threshold)",
          ielts: "Eligible for enrolled students",
          gre: "Not required",
          papers: "Consular financial income documentation or CIMEA verification",
          references: "Not required"
        },
        desc: "Comprehensive regional government scholarship supporting domestic and international students studying law at UNIMC with full accommodation and living allowances."
      },
      {
        id: 3589,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        title: "PhD in Legal Sciences (Comparative, European and International Law)",
        source: "https://giurisprudenza.unimc.it/it/dottorato",
        funding: "Full ministerial fellowship (€16,243/year gross stipend + 50% mobility increase)",
        status: "Available",
        deadline: "2027-06-25",
        deadlineText: "June 25, 2027",
        fee: "€30",
        tuition: "Covered by doctoral scholarship",
        requirements: {
          gpa: "Second-cycle Master's degree in Law with 105/110 or higher",
          ielts: "B2 English or Italian",
          gre: "Not required",
          papers: "Doctoral research project (maximum 15,000 characters)",
          references: "Two academic referee letters"
        },
        desc: "Three-year research doctorate exploring European private law, transnational commercial arbitration, algorithmic liability, and fundamental human rights jurisprudence."
      },
      {
        id: 3590,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master in International Trade and Digital Law (English-Taught LL.M. Pathway)",
        source: "https://giurisprudenza.unimc.it/it/didattica/corsi-di-laurea",
        funding: "UNIMC International Excellence Fee Waiver eligible",
        status: "Available",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€30",
        tuition: "€1,560 per year (maximum without scholarship)",
        requirements: {
          gpa: "Bachelor's degree in Law, Political Science, or International Economics",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Personal motivation statement",
          references: "Two academic letters"
        },
        desc: "Two-year specialized second-cycle degree examining WTO regulations, cross-border digital contracts, intellectual property protection, and artificial intelligence law."
      },
      {
        id: 3591,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Single-Cycle Master of Laws (Laurea Magistrale a Ciclo Unico in Giurisprudenza)",
        source: "https://giurisprudenza.unimc.it/it/didattica/corsi-di-laurea/giurisprudenza",
        funding: "Qualifying degree for Italian Bar (Avvocato), Judiciary, and Notary examinations",
        status: "Available",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        fee: "€0",
        tuition: "Income-based €0-€1,950/year",
        requirements: {
          gpa: "High school completion (Diploma di Maturità or international 12-year equivalent)",
          ielts: "Not required; Italian B2 required",
          gre: "Not required",
          papers: "TOLC-SU orientation assessment test",
          references: "Not required"
        },
        desc: "Five-year integrated master's program providing comprehensive mastery of civil law, criminal procedure, administrative law, constitutional theory, and Roman law roots."
      },
      {
        id: 3592,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        title: "Senior Visiting Research Fellowship in Roman Legal Tradition and Modern Law",
        source: "https://giurisprudenza.unimc.it/it/ricerca",
        funding: "€2,500/month research stipend plus campus residence housing",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling international scholar invitations",
        fee: "€0",
        tuition: "Sponsored academic residency",
        requirements: {
          gpa: "PhD in Legal History or Comparative Law with established university faculty rank",
          ielts: "Fluent Italian or English",
          gre: "Not required",
          papers: "Monographs or major peer-reviewed articles in European legal history",
          references: "Two academic peer endorsements"
        },
        desc: "Visiting scholarship hosted in Macerata's ancient legal library, examining the reception of Roman law in modern European civil codes and transnational legal harmonization."
      },
      {
        id: 3593,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        title: "Court of Macerata and Regional Bar Association Judicial Clerkship",
        source: "https://giurisprudenza.unimc.it/it/stage-tirocini",
        funding: "Formal judicial training credit towards legal practice qualification",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "Curricular legal internship",
        requirements: {
          gpa: "Completion of 4th year in UNIMC law degree with minimum 27/30 average",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Judicial internship application and university transcript",
          references: "Faculty recommendation"
        },
        desc: "Six-month clinical legal clerkship assisting judges and state prosecutors at the Tribunale di Macerata in trial preparation, legal drafting, and criminal deliberations."
      },
      {
        id: 3594,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Course",
        title: "Digital Forensics, Cybercrime and Evidence Law Certificate",
        source: "https://giurisprudenza.unimc.it/it/didattica/master-corsi-perfezionamento",
        funding: "Professional development credits for Italian bar lawyers and police investigators",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "€0",
        tuition: "€850 course fee",
        requirements: {
          gpa: "Law or computer science degree, or active law enforcement credentials",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Curriculum vitae",
          references: "Not required"
        },
        desc: "Executive 3-month specialization examining digital chain of custody, electronic surveillance legislation, GDPR data compliance, and cryptocurrency anti-money laundering investigations."
      }
    ],
    researchers: [
      {
        id: 1557,
        subject: "social-sciences",
        name: "Prof. Stefano Pollastrelli",
        title: "Director of the Department of Law and Professor of Maritime and Transport Law",
        university: "Faculty of Law UNIMC (University of Macerata)",
        country: "Italy",
        topics: ["Navigation Law", "Transport Economics", "Maritime Commercial Contracts", "European Transport Infrastructure"],
        source: "https://docenti.unimc.it/stefano.pollastrelli",
        summary: "Dean and director of legal studies at UNIMC; internationally recognized scholar in international shipping law, maritime logistics regulation, and transport insurance."
      },
      {
        id: 1558,
        subject: "social-sciences",
        name: "Prof. Ermanno Calzolaio",
        title: "Professor of Comparative Private Law",
        university: "Faculty of Law UNIMC (University of Macerata)",
        country: "Italy",
        topics: ["Comparative Law", "European Contract Law", "Common Law & Civil Law Harmonization", "Legal Translation"],
        source: "https://docenti.unimc.it/ermanno.calzolaio",
        summary: "Eminent comparative legal scholar investigating the convergence between English common law and continental civil codes in commercial contracts and judicial precedent."
      },
      {
        id: 1559,
        subject: "social-sciences",
        name: "Prof. Laura Vagni",
        title: "Associate Professor of Comparative Law and Legal Systems",
        university: "Faculty of Law UNIMC (University of Macerata)",
        country: "Italy",
        topics: ["Transnational Commercial Law", "Consumer Protection in E-Commerce", "Remedies for Breach of Contract", "Global Legal Studies"],
        source: "https://docenti.unimc.it/laura.vagni",
        summary: "Legal researcher leading comparative analyses on international sales law, e-commerce consumer vulnerability, and international private enforcement mechanisms."
      }
    ]
  },

  // 12. Italy - Faculty of Theology of Emilia Romagna (FTER Bologna) (Row 466)
  {
    institution: "Faculty of Theology of Emilia Romagna (FTER Bologna)",
    shortName: "FTER Bologna",
    slug: "faculty-of-theology-of-emilia-romagna-fter",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bologna, Emilia-Romagna, Italy",
    website: "https://www.fter.it",
    sourceRow: 466,
    heroEyebrow: "Bologna, Emilia-Romagna · Holy See Canonical Accreditation · Interreligious Dialogue & Hermeneutics",
    headline: "FTER Bologna: Baccalaureate, Licentiate & Doctorate in Sacred Theology Guide",
    overview: "The Faculty of Theology of Emilia Romagna (Facoltà Teologica dell'Emilia-Romagna / FTER) is an ecclesiastical university institution canonically erected by the Holy See's Dicastery for Culture and Education, located in the historic centre of Bologna. FTER delivers accredited canonical degrees—the Baccalaureate (STB), Licentiate (STL), and Doctorate (STD) in Sacred Theology—with distinctive specializations in Evangelization, Interreligious Dialogue, and Christian History. Its library and research centres collaborate closely with the University of Bologna and European theological faculties.",
    description: "Explore the Faculty of Theology of Emilia Romagna (FTER Bologna): Licentiate in Theology, PhD in Sacred Theology, biblical hermeneutics, scholarships, and distinguished theological researchers.",
    admissions: {
      masters: "Ecclesiastical Licentiate (STL) requires an accredited Baccalaureate in Sacred Theology (STB) with a minimum grade of Magna cum Laude (8.5/10), or recognized second-cycle theological equivalent.",
      phd: "Ecclesiastical Doctorate (STD) requires an STL with exceptional academic standing (Summa cum Laude), proven fluency in classical biblical languages (Hebrew, Greek, Latin), and acceptance by a doctoral dissertation director.",
      language: "Italian language proficiency at B2/C1 level for academic coursework; reading competence in Latin and ancient Greek mandatory for canonical theological degrees.",
      proposal: "Required for doctoral admission: 10-15 page preliminary dissertation schema including hermeneutical rationale, source bibliography, and methodological approach.",
      appFee: "€50 matriculation fee.",
      documents: "Ecclesiastical academic transcripts, canonical degrees, letter of presentation from religious ordinary or diocesan bishop (or academic dean), curriculum vitae, and passport."
    },
    tuitionText: "Tuition is highly subsidized by ecclesiastical endowments and the Italian Episcopal Conference (CEI), averaging €850 to €1,400 per academic year. Generous CEI scholarships and FTER study grants are available for diocesan seminarians, religious sisters, and international lay students.",
    opportunities: [
      {
        id: 3595,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "CEI Episcopal Conference Theological Study Bursary for International Students",
        source: "https://www.fter.it/segreteria/tasse-e-borse-di-studio/",
        funding: "Full tuition coverage plus subsidized accommodation in Bologna",
        status: "Available",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "€50",
        tuition: "€0 under CEI fellowship",
        requirements: {
          gpa: "Magna cum Laude standing in previous theological studies",
          ielts: "B2 Italian proficiency",
          gre: "Not required",
          papers: "Recommendation letter from diocesan ordinary or superior",
          references: "Two academic theological references"
        },
        desc: "Endowed bursary supporting lay, religious, and diocesan students from developing countries undertaking theological studies at FTER in Bologna."
      },
      {
        id: 3596,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        title: "Doctorate in Sacred Theology (STD Specialization in Evangelization & Dialogue)",
        source: "https://www.fter.it/dottorato/",
        funding: "Doctoral research grant (€12,000/year) plus library research travel fund",
        status: "Available",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        fee: "€50",
        tuition: "€1,200 per year",
        requirements: {
          gpa: "Licentiate in Sacred Theology (STL) with minimum 9.0/10 grade",
          ielts: "Italian B2 and Latin/Greek proficiency",
          gre: "Not required",
          papers: "Comprehensive doctoral dissertation schema and source bibliography",
          references: "Two theological professor recommendations"
        },
        desc: "Canonical research doctorate preparing scholars and seminary professors through the composition of a definitive theological dissertation defended before an international jury."
      },
      {
        id: 3597,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Licentiate in Sacred Theology (STL Specialization in Interreligious Dialogue)",
        source: "https://www.fter.it/licenza/",
        funding: "Field research seminars in Jerusalem and Rome",
        status: "Available",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        fee: "€50",
        tuition: "€1,100 per academic year",
        requirements: {
          gpa: "Baccalaureate in Theology (STB) or equivalent 5-year theological degree",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Licentiate thesis research outline",
          references: "One academic reference"
        },
        desc: "Two-year canonical master's degree investigating Christian-Jewish dialogue, Islamic theological relations in the Mediterranean, and intercultural pastoral hermeneutics."
      },
      {
        id: 3598,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Bachelor's",
        title: "Baccalaureate in Sacred Theology (STB Five-Year Integrated Institutional Cycle)",
        source: "https://www.fter.it/baccellierato/",
        funding: "Subsidized ecclesiastical academic program",
        status: "Available",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        fee: "€50",
        tuition: "€950 per academic year",
        requirements: {
          gpa: "Secondary school diploma qualifying for university entrance",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Not required",
          references: "Letter from parish pastor or religious superior"
        },
        desc: "Comprehensive five-year foundational curriculum covering two years of philosophical studies followed by three years of systematic, biblical, historical, and moral theology."
      },
      {
        id: 3599,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        title: "Mediterranean Patristic and Ecumenical Research Fellowship",
        source: "https://www.fter.it/ricerca/",
        funding: "€18,000 annual research stipend plus residence support",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling intake for funded ecumenical research projects",
        fee: "€0",
        tuition: "Sponsored research fellowship",
        requirements: {
          gpa: "Doctorate in Theology, Church History, or Biblical Studies",
          ielts: "Italian fluency and reading competence in Greek and Latin",
          gre: "Not required",
          papers: "Peer-reviewed patristic or ecumenical publications",
          references: "Two academic referee letters"
        },
        desc: "Postdoctoral fellowship investigating the reception of the Church Fathers in Mediterranean theological traditions and contemporary Eastern Orthodox-Catholic dialogue."
      },
      {
        id: 3600,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Higher Institute of Religious Sciences (ISSR) Religious Education Diploma",
        source: "https://www.fter.it/issr/",
        funding: "State-recognized credential for teaching Catholic religious education in Italian schools",
        status: "Available",
        deadline: "2027-09-10",
        deadlineText: "September 10, 2027",
        fee: "€50",
        tuition: "€850 per year",
        requirements: {
          gpa: "High school graduation diploma",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Not required",
          references: "Diocesan approval letter"
        },
        desc: "Three-year degree conferring state-accredited qualifications for teaching religious culture, ethics, and philosophy in Italian primary and secondary educational institutions."
      },
      {
        id: 3601,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Course",
        title: "Summer School in Sacred Art, Christian Archaeology and Medieval Liturgy",
        source: "https://www.fter.it/eventi/",
        funding: "Includes guided archaeological study tours across Ravenna and Bologna",
        status: "Available",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€0",
        tuition: "€600 course fee",
        requirements: {
          gpa: "Undergraduate student or researcher in art history, theology, or archaeology",
          ielts: "Italian or English proficiency",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Two-week summer intensive examining early Christian basilica architecture, Byzantine mosaics in Ravenna, and the theological evolution of Western liturgical spaces."
      }
    ],
    researchers: [
      {
        id: 1560,
        subject: "social-sciences",
        name: "Prof. Don Fausto Arici OP",
        title: "Dean and Professor of Fundamental Theology and Philosophical Anthropology",
        university: "Faculty of Theology of Emilia Romagna (FTER Bologna)",
        country: "Italy",
        topics: ["Fundamental Theology", "Thomistic Philosophy", "Theological Epistemology", "Ethics and Hermeneutics"],
        source: "https://www.fter.it/docenti/fausto-arici/",
        summary: "Dean of FTER and Dominican scholar exploring the interface between classical Thomism, modern philosophical anthropology, and contemporary theories of secularization."
      },
      {
        id: 1561,
        subject: "social-sciences",
        name: "Prof. Fabrizio Mandreoli",
        title: "Professor of Systematic Theology and Interreligious Dialogue",
        university: "Faculty of Theology of Emilia Romagna (FTER Bologna)",
        country: "Italy",
        topics: ["Theology of Religions", "Intercultural Hermeneutics", "Mediterranean Christianity", "Secular Society Dialogue"],
        source: "https://www.fter.it/docenti/fabrizio-mandreoli/",
        summary: "Specialist in the theology of interfaith dialogue, comparative religious ethics, and the spiritual heritage of Mediterranean Christian communities."
      },
      {
        id: 1562,
        subject: "social-sciences",
        name: "Prof. Maurizio Marcheselli",
        title: "Professor of New Testament Exegesis and Biblical Theology",
        university: "Faculty of Theology of Emilia Romagna (FTER Bologna)",
        country: "Italy",
        topics: ["Pauline Epistles", "Johannine Literature", "Biblical Greek Exegesis", "Early Jewish-Christian Relations"],
        source: "https://www.fter.it/docenti/maurizio-marcheselli/",
        summary: "Biblical scholar known for critical textual commentaries on the Pauline literature, early Christian theology, and historical-critical exegetical methodologies."
      }
    ]
  },

  // 13. Italy - IAAD. Bologna - Istituto d'Arte Applicata e Design (Row 472)
  {
    institution: "IAAD - Istituto d'Arte Applicata e Design (Bologna Campus)",
    shortName: "IAAD Bologna",
    slug: "iaad-bologna-design-institute",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bologna, Emilia-Romagna, Italy",
    website: "https://www.iaad.it",
    sourceRow: 472,
    heroEyebrow: "Bologna, Emilia-Romagna · Italian Motor Valley · Transportation & Digital Communication Design",
    headline: "IAAD Bologna: Transportation Design, Digital Media & Interior Architecture Guide",
    overview: "IAAD (Istituto d'Arte Applicata e Design) is one of Europe's premier private higher education institutes for design, operating major campuses in Turin and Bologna. Situated in the heart of Italy's famous 'Motor Valley' near Ducati, Ferrari, Lamborghini, and Maserati, IAAD Bologna delivers Italian Ministry of University and Research (MUR) accredited Bachelor of Arts and Master's degrees in Transportation Design, Digital Communication Design, Interior Design, and Textile Design, working in direct co-design studios with Italy's most celebrated industrial brands.",
    description: "Explore IAAD Bologna: Transportation design degrees, digital media programs, MUR-accredited diplomas, industry partner scholarships, and internationally acclaimed design faculty.",
    admissions: {
      masters: "Recognized Bachelor's degree in design, architecture, engineering, or fine arts; comprehensive creative portfolio and admissions interview evaluating project methodology.",
      phd: "Not applicable; elite design academy offering 3-year AFAM first-level academic diplomas (equivalent to Bachelor) and 1st/2nd level Master degrees.",
      language: "B2 English proficiency for English-taught master's programs; B2 Italian for Italian-taught bachelor's tracks.",
      proposal: "Creative portfolio presentation: 10-15 projects demonstrating sketching ability, CAD rendering, conceptual ideation, and problem-solving methodology.",
      appFee: "€150 admission evaluation fee.",
      documents: "Secondary school graduation certificate, portfolio (PDF or web link), motivation letter, curriculum vitae, copy of passport, and transcripts."
    },
    tuitionText: "Tuition for European and international students ranges from €9,800 to €15,500 per academic year depending on the specific department and degree level. IAAD awards merit scholarships covering up to 50% of tuition in collaboration with corporate sponsors including Italdesign, Pininfarina, and Ducati.",
    opportunities: [
      {
        id: 3602,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Scholarship",
        title: "IAAD Motor Valley Transportation Design Excellence Scholarship",
        source: "https://www.iaad.it/en/admissions/scholarships/",
        funding: "50% tuition reduction for the 3-year Bachelor or Master program",
        status: "Available",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "€150",
        tuition: "€13,500 per year (before scholarship)",
        requirements: {
          gpa: "Outstanding design portfolio and technical sketching aptitude",
          ielts: "6.0 overall or equivalent English proficiency",
          gre: "Not required",
          papers: "Design portfolio (maximum 15 slides)",
          references: "One academic or artistic reference letter"
        },
        desc: "Prestigious scholarship awarded to exceptionally talented young vehicle and product designers entering the Transportation Design department in Bologna."
      },
      {
        id: 3603,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Master's",
        title: "Master in Transportation Design and Future Mobility Architecture",
        source: "https://www.iaad.it/en/masters/transportation-design/",
        funding: "Direct industrial co-design project with Ducati and Lamborghini",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (Fall intake)",
        fee: "€150",
        tuition: "€16,500 total 1-year master tuition",
        requirements: {
          gpa: "Bachelor's degree in Industrial Design, Transportation Design, or Mechanical Engineering",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Automotive sketching portfolio and concept rendering samples",
          references: "Two professional design references"
        },
        desc: "Intensive one-year full-immersion master's degree exploring exterior car styling, interior ergonomics, electric vehicle proportion studies, and virtual reality digital modeling."
      },
      {
        id: 3604,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Bachelor's",
        title: "Bachelor of Arts in Digital Communication and Interactive Media Design",
        source: "https://www.iaad.it/en/courses/digital-communication-design/",
        funding: "MUR-accredited First Level Academic Diploma (180 ECTS credits)",
        status: "Available",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        fee: "€150",
        tuition: "€11,200 per academic year",
        requirements: {
          gpa: "High school diploma with creative portfolio review",
          ielts: "B2 English or Italian",
          gre: "Not required",
          papers: "Visual design portfolio or interactive web/app demo",
          references: "Not required"
        },
        desc: "Three-year accredited bachelor's degree mastering brand identity, visual storytelling, UI/UX prototyping, 3D motion graphics, and interactive digital campaigns."
      },
      {
        id: 3605,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Bachelor's",
        title: "Bachelor of Arts in Interior and Spatial Experience Design",
        source: "https://www.iaad.it/en/courses/interior-design/",
        funding: "Field projects at Bologna Design Week and Salone del Mobile Milano",
        status: "Available",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        fee: "€150",
        tuition: "€11,200 per year",
        requirements: {
          gpa: "High school completion qualifying for university admission",
          ielts: "B2 English",
          gre: "Not required",
          papers: "Spatial design sketches or architectural portfolio",
          references: "Not required"
        },
        desc: "Three-year program investigating domestic living concepts, commercial retail staging, sensory exhibit architecture, sustainable materials, and lighting engineering."
      },
      {
        id: 3606,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Fellowship",
        title: "IAAD Young Talent Design Residency (Italian Craft & Digital Studio)",
        source: "https://www.iaad.it/en/careers/",
        funding: "Studio desk + €10,000 project production grant",
        status: "Available",
        deadline: null,
        deadlineText: "Annual juried selection for emerging product designers",
        fee: "€0",
        tuition: "Sponsored design residency",
        requirements: {
          gpa: "Graduation from recognized design university within past three years",
          ielts: "Working English or Italian",
          gre: "Not required",
          papers: "Exhibition proposal and complete design portfolio",
          references: "Two design industry recommendations"
        },
        desc: "Six-month creative residency offering studio facilities, 3D printing and clay modeling laboratories, and exhibition exposure during Bologna Design Week."
      },
      {
        id: 3607,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Internship",
        title: "Motor Valley Italian Supercar Design Studio Internship",
        source: "https://www.iaad.it/en/careers/career-service/",
        funding: "€800-€1,200/month paid corporate styling internship",
        status: "Available",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Integrated curricular internship",
        requirements: {
          gpa: "Enrollment in final year of IAAD Transportation Design program",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Alias CAD modeling and digital rendering portfolio",
          references: "Faculty studio director endorsement"
        },
        desc: "Six-month embedded styling placement within Italian automotive and motorcycle design centres, developing production clay models and digital surface Class-A CAD data."
      },
      {
        id: 3608,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Course",
        title: "Automotive Clay Sculpting & Alias Class-A Surface Modeling Masterclass",
        source: "https://www.iaad.it/en/courses/short-courses/",
        funding: "Certificate of advanced vocational technical design mastery",
        status: "Available",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "€0",
        tuition: "€2,400 course fee",
        requirements: {
          gpa: "Basic 3D modeling or industrial design experience",
          ielts: "Working English",
          gre: "Not required",
          papers: "Curriculum vitae and sample render",
          references: "Not required"
        },
        desc: "Four-week hands-on industrial workshop mastering physical 1:4 scale clay vehicle sculpting alongside high-precision Autodesk Alias Class-A surface engineering."
      }
    ],
    researchers: [
      {
        id: 1563,
        subject: "arts-design",
        name: "Marcello Minerbi",
        title: "Head of Transportation Design Department",
        university: "IAAD - Istituto d'Arte Applicata e Design (Bologna Campus)",
        country: "Italy",
        topics: ["Automotive Styling", "Aerodynamic Design", "Future Urban Mobility", "Class-A Digital Modeling"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Veteran automotive designer and educator who has directed design programs for major Italian styling houses, mentoring next-generation concept vehicle creators."
      },
      {
        id: 1564,
        subject: "arts-design",
        name: "Federica Rossi",
        title: "Director of Digital Communication and Media Arts",
        university: "IAAD - Istituto d'Arte Applicata e Design (Bologna Campus)",
        country: "Italy",
        topics: ["Brand Identity Systems", "User Experience Architecture", "Visual Semiotics", "Digital Art Direction"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Creative director and design theorist leading research into interactive brand identity, immersive virtual environments, and cross-media design campaigns."
      },
      {
        id: 1565,
        subject: "arts-design",
        name: "Andrea Roselli",
        title: "Professor of Interior Design and Spatial Scenography",
        university: "IAAD - Istituto d'Arte Applicata e Design (Bologna Campus)",
        country: "Italy",
        topics: ["Retail Experience Design", "Sustainable Materials", "Lighting Scenography", "Biophilic Interior Spaces"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Architect and interior designer specializing in experiential flagship retail environments, luxury hotel spatial curation, and zero-impact interior construction."
      }
    ]
  },

  // 14. USA - Baruch College (CUNY) (Row 585)
  {
    institution: "Baruch College (City University of New York)",
    shortName: "Baruch College CUNY",
    slug: "baruch-college-cuny-new-york",
    countryId: "usa",
    countryLabel: "United States",
    location: "Manhattan, New York City, New York, USA",
    website: "https://www.baruch.cuny.edu",
    sourceRow: 585,
    heroEyebrow: "Manhattan, New York City · CUNY Flagship Business & Public Affairs · Wall Street Gateway",
    headline: "Baruch College CUNY: Zicklin MBA, Quantitative Finance & Public Affairs Guide",
    overview: "Bernard M. Baruch College of the City University of New York (CUNY) is an elite public institution located in the Gramercy and Flatiron districts of Manhattan, New York City. Consistently ranked #1 in the United States for social mobility and among the top public business schools nationwide, Baruch is home to the world-renowned Zicklin School of Business (the largest collegiate school of business in the US), the Austin W. Marxe School of Public and International Affairs, and the Weissman School of Arts and Sciences.",
    description: "Explore Baruch College CUNY in New York City: Zicklin School of Business MBA, Master of Science in Financial Engineering (MFE), public affairs degrees, tuition costs, and prominent Wall Street faculty.",
    admissions: {
      masters: "Accredited four-year U.S. bachelor's degree or recognized international equivalent with a minimum 3.0 GPA; quantitative proficiency required for business analytics, statistics, and finance degrees; GMAT/GRE may be waived for qualified applicants.",
      phd: "Conferred jointly through the CUNY Graduate Center; requires superior undergraduate and master's record, competitive GRE/GMAT, and proven research aptitude in business or economics.",
      language: "TOEFL iBT 100 overall (minimum 22 in all subscores) or IELTS Academic 7.0 overall (minimum 6.5 in all bands) for international graduates from non-English speaking institutions.",
      proposal: "Required for graduate applicants: 500-1,000 word statement of purpose outlining professional goals and rationale for choosing Baruch in New York City.",
      appFee: "$75 USD application fee for graduate degree programs.",
      documents: "Official academic transcripts, certified English translations, resume/curriculum vitae, two letters of recommendation, standardized test scores (if applicable), and personal essay."
    },
    tuitionText: "Tuition for New York State residents averages $5,530 to $7,700 per semester for graduate programs. Non-resident and international graduate tuition is approximately $855 to $1,050 per credit hour (averaging $21,000 to $28,000 per academic year). Baruch awards substantial merit fellowships, Zicklin Dean's Scholarships, and graduate assistantships.",
    opportunities: [
      {
        id: 3609,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        title: "Zicklin School of Business Dean's Graduate Merit Fellowship",
        source: "https://zicklin.baruch.cuny.edu/admissions/graduate/scholarships/",
        funding: "Up to $20,000 USD tuition grant per academic year",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority scholarship round)",
        fee: "$75 USD",
        tuition: "$24,500 USD per academic year (international)",
        requirements: {
          gpa: "Minimum 3.5 undergraduate GPA",
          ielts: "7.0 overall (minimum 6.5 in all sections)",
          gre: "Competitive GMAT 650+ or GRE 320+",
          papers: "Personal statement detailing leadership vision",
          references: "Two professional or academic recommendation letters"
        },
        desc: "Prestigious merit fellowship awarded to high-achieving domestic and international candidates entering full-time MBA and specialized MS programs at Zicklin."
      },
      {
        id: 3610,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "social-sciences"],
        type: "Master's",
        title: "Master of Science in Financial Engineering (MFE Quant Program)",
        source: "https://mfe.baruch.cuny.edu",
        funding: "Ranked #1 Quant Finance program in North America; 100% Wall Street employment rate",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Final deadline)",
        fee: "$75 USD",
        tuition: "$42,390 USD total program tuition (out-of-state/international)",
        requirements: {
          gpa: "Superior quantitative academic background (calculus, linear algebra, probability, C++)",
          ielts: "7.0 overall",
          gre: "GRE Quantitative 168+ required",
          papers: "Advanced technical admissions interview (mathematics & C++ programming)",
          references: "Three letters of recommendation"
        },
        desc: "Nationally top-ranked quantitative finance program training algorithmic traders, risk modelers, and quantitative portfolio managers in stochastic modeling and deep learning for capital markets."
      },
      {
        id: 3611,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Zicklin Full-Time Master of Business Administration (Full-Time MBA)",
        source: "https://zicklin.baruch.cuny.edu/academic-programs/graduate/full-time-mba/",
        funding: "Wall Street corporate consulting projects and executive mentorship",
        status: "Available",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Round 3)",
        fee: "$75 USD",
        tuition: "$26,000 USD per year",
        requirements: {
          gpa: "Four-year Bachelor's degree with minimum 3.0 GPA",
          ielts: "7.0 overall",
          gre: "GMAT/GRE score (waivers available based on professional experience)",
          papers: "Two required application essays",
          references: "Two professional reference letters"
        },
        desc: "Two-year cohort MBA in Manhattan delivering cutting-edge concentrations in Finance, Data Analytics, Marketing, Information Systems, and Real Estate."
      },
      {
        id: 3612,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Public Administration (Marxe School of Public Affairs)",
        source: "https://marxe.baruch.cuny.edu/academics/master-of-public-administration-mpa/",
        funding: "NASPAA accredited; Marxe Endowed Fellowships available",
        status: "Available",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$75 USD",
        tuition: "$22,500 USD per year",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.0 GPA",
          ielts: "7.0 overall",
          gre: "GRE optional",
          papers: "Statement of purpose in public service",
          references: "Two letters of recommendation"
        },
        desc: "Premier public management degree preparing leaders for municipal government agencies, international NGOs, healthcare policy institutes, and philanthropic foundations."
      },
      {
        id: 3613,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "PhD",
        title: "PhD in Business (Specializations in Finance, Accounting & Marketing)",
        source: "https://zicklin.baruch.cuny.edu/academic-programs/graduate/doctoral-program/",
        funding: "Full 5-year tuition waiver + $30,000/year living stipend + health insurance",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual fall cycle)",
        fee: "$75 USD",
        tuition: "Full tuition covered via CUNY Graduate Center doctoral fellowship",
        requirements: {
          gpa: "Undergraduate/master's degree with first-class academic standing",
          ielts: "7.5 overall",
          gre: "GMAT 700+ or GRE equivalent (90th percentile quantitative)",
          papers: "Statement of academic research intent and writing sample",
          references: "Three academic reference letters"
        },
        desc: "Five-year full-time research doctorate administered jointly with the CUNY Graduate Center, preparing candidates for top-tier tenure-track university professorships."
      },
      {
        id: 3614,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Internship",
        title: "Wasserman Trading Floor and Financial Analytics Laboratory Fellowship",
        source: "https://zicklin.baruch.cuny.edu/centers/subotnick/",
        funding: "Paid graduate research assistantship ($20/hour USD)",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "$0 USD",
        tuition: "Student employment fellowship",
        requirements: {
          gpa: "Enrolled in Zicklin MS Finance, MFE, or MBA with 3.5+ GPA",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Resume and Bloomberg Market Concepts (BMC) certification",
          references: "One faculty recommendation"
        },
        desc: "Hands-on fellowship in the state-of-the-art Subotnick Financial Services Center, supporting 60 Bloomberg terminals, FactSet feeds, and trading simulations."
      },
      {
        id: 3615,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Course",
        title: "Executive Certificate in Applied FinTech and Blockchain Asset Systems",
        source: "https://zicklin.baruch.cuny.edu/executive-programs/",
        funding: "Corporate tuition reimbursement eligible",
        status: "Available",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "$0 USD",
        tuition: "$3,600 USD course fee",
        requirements: {
          gpa: "Professional financial services background",
          ielts: "Professional English",
          gre: "Not required",
          papers: "Professional resume",
          references: "Not required"
        },
        desc: "Six-week executive module investigating decentralized finance (DeFi), smart contract deployment on Ethereum, digital central bank currencies (CBDCs), and regulatory compliance."
      }
    ],
    researchers: [
      {
        id: 1566,
        subject: "mathematics",
        name: "Dr. Dan Stefanica",
        title: "Director of the Master of Science in Financial Engineering (MFE) Program",
        university: "Baruch College (City University of New York)",
        country: "United States",
        topics: ["Financial Mathematics", "Numerical Methods", "Derivative Pricing Algorithms", "Machine Learning in Finance"],
        source: "https://mfe.baruch.cuny.edu/dan-stefanica/",
        summary: "World-leading financial mathematics educator and author; director who built Baruch's MFE program into the top-ranked quantitative finance program in North America."
      },
      {
        id: 1567,
        subject: "social-sciences",
        name: "Dr. Bruce W. Weber",
        title: "Willem Kooyker Dean and Professor of Information Systems",
        university: "Baruch College (City University of New York)",
        country: "United States",
        topics: ["Financial Market Structure", "Automated Trading Systems", "FinTech Innovation", "Electronic Trading Platforms"],
        source: "https://zicklin.baruch.cuny.edu/faculty-profile/bruce-w-weber/",
        summary: "Dean of the Zicklin School of Business whose research investigates algorithmic trading, market microstructure, and IT-driven financial transformation."
      },
      {
        id: 1568,
        subject: "social-sciences",
        name: "Dr. Don J. Waisanen",
        title: "Professor of Public Communication and Civic Engagement",
        university: "Baruch College (City University of New York)",
        country: "United States",
        topics: ["Public Policy Communication", "Deliberative Democracy", "Civic Tech Platforms", "Government Strategic Messaging"],
        source: "https://marxe.baruch.cuny.edu/faculty-profile/don-waisanen/",
        summary: "Marxe School scholar specializing in democratic public dialogue, civic communication strategies, and the design of participatory public policies."
      }
    ]
  },

  // 15. USA - Belmont University (Row 589)
  {
    institution: "Belmont University",
    shortName: "Belmont University",
    slug: "belmont-university-nashville",
    countryId: "usa",
    countryLabel: "United States",
    location: "Nashville, Tennessee, USA",
    website: "https://www.belmont.edu",
    sourceRow: 589,
    heroEyebrow: "Nashville, Tennessee · Music City · Premier Entertainment Business & Healthcare",
    headline: "Belmont University: Music Business, Healthcare & Pharmacy Guide",
    overview: "Belmont University is a nationally ranked, premier comprehensive private Christian university situated on a historic 93-acre campus in Nashville, Tennessee. Renowned globally as the world's leading institution for music industry education through the Mike Curb College of Entertainment and Music Business, Belmont also boasts top-tier programs in healthcare, pharmacy, nursing, law, and business. With cutting-edge recording studios on Music Row, the Thomas F. Frist Jr. College of Medicine, and high graduate employment, Belmont is an intellectual and cultural catalyst in the Southeast.",
    description: "Explore Belmont University in Nashville: Music Business degrees, College of Pharmacy PharmD, Master of Science in Nursing, tuition costs, scholarships, and prominent faculty.",
    admissions: {
      masters: "Accredited Bachelor's degree from a regionally accredited U.S. college or recognized international institution with a minimum cumulative undergraduate GPA of 3.0; prerequisite coursework required for health science and business programs.",
      phd: "Doctor of Pharmacy (PharmD) requires completed pharmacy prerequisites and minimum 2.5 science GPA; Doctor of Physical Therapy (DPT) and Doctor of Occupational Therapy (OTD) require competitive GRE and clinical observation hours.",
      language: "TOEFL iBT 80 overall or IELTS Academic 6.5 overall for international applicants whose native language is not English.",
      proposal: "Required for graduate applications: 500-word personal essay detailing professional aspirations, ethical leadership alignment, and specific reasons for selecting Belmont.",
      appFee: "$50 USD application fee ($100 USD for law and medicine).",
      documents: "Official post-secondary transcripts, certified translations, two letters of recommendation, resume, personal statement, and official English test score report."
    },
    tuitionText: "Undergraduate tuition is approximately $41,600 USD per academic year. Graduate tuition ranges from $1,150 to $1,550 USD per credit hour depending on the specific professional school. Belmont awards over $100 million USD in institutional scholarships and grants annually, including Curb Entertainment Fellowships and merit scholarships.",
    opportunities: [
      {
        id: 3616,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Scholarship",
        title: "Curb College Entertainment Industry Academic Merit Scholarship",
        source: "https://www.belmont.edu/curb/scholarships.html",
        funding: "Up to $15,000 USD annual tuition credit",
        status: "Available",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$50 USD",
        tuition: "$41,600 USD per year",
        requirements: {
          gpa: "Minimum 3.5 high school or undergraduate GPA",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Creative statement and entertainment industry resume",
          references: "Two professional or academic letters of recommendation"
        },
        desc: "Endowed scholarship for outstanding students entering the Mike Curb College of Entertainment and Music Business demonstrating leadership and musical entrepreneurship."
      },
      {
        id: 3617,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Bachelor's",
        title: "Bachelor of Business Administration in Music Business (BBA)",
        source: "https://www.belmont.edu/curb/music-business/",
        funding: "Historic Music Row Ocean Way Nashville recording studio access",
        status: "Available",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$50 USD",
        tuition: "$41,600 USD per academic year",
        requirements: {
          gpa: "Competitive secondary school record with 3.0+ GPA",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Personal essay on music industry career objectives",
          references: "One counselor recommendation"
        },
        desc: "World-famous 4-year undergraduate degree exploring record label operations, music publishing, intellectual property royalties, concert touring logistics, and artist management."
      },
      {
        id: 3618,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Doctor of Pharmacy (PharmD Professional Doctorate)",
        source: "https://www.belmont.edu/pharmacy/",
        funding: "Over 95% residency match rate in Nashville healthcare corridor",
        status: "Available",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$50 USD",
        tuition: "$42,500 USD per year",
        requirements: {
          gpa: "Minimum 2.5 GPA in prerequisite math and science courses (62 semester hours)",
          ielts: "6.5 overall",
          gre: "PCAT optional",
          papers: "PharmCAS personal essay and interview",
          references: "Two letters of reference (one from science professor or pharmacist)"
        },
        desc: "Four-year ACPE-accredited doctoral degree delivering comprehensive training in pharmacotherapy, clinical hospital rounds, drug development, and community pharmacy administration."
      },
      {
        id: 3619,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Master's",
        title: "Master of Science in Nursing (Family Nurse Practitioner Track)",
        source: "https://www.belmont.edu/nursing/msn/",
        funding: "Clinical rotations at Vanderbilt University Medical Center and HCA Healthcare",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$50 USD",
        tuition: "$1,450 USD per credit hour",
        requirements: {
          gpa: "BSN degree from accredited institution with minimum 3.0 GPA",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Current unencumbered RN license in Tennessee or compact state",
          references: "Two professional nursing recommendations"
        },
        desc: "CCNE-accredited master's program preparing registered nurses for advanced practice certification as primary care family nurse practitioners managing acute and chronic illness."
      },
      {
        id: 3620,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Massey Master of Business Administration (Healthcare & Entrepreneurship MBA)",
        source: "https://www.belmont.edu/massey/mba/",
        funding: "AACSB accredited; Nashville healthcare industry mentorship",
        status: "Available",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$50 USD",
        tuition: "$33,600 USD total program tuition",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.0 GPA",
          ielts: "6.5 overall",
          gre: "GMAT/GRE optional with qualifying professional experience",
          papers: "Career goal essay and professional resume",
          references: "Two letters of recommendation"
        },
        desc: "Practitioner-oriented MBA offering specialized concentrations in healthcare management, digital marketing, corporate finance, and venture entrepreneurship."
      },
      {
        id: 3621,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Internship",
        title: "Belmont on Music Row Corporate Industry Placement",
        source: "https://www.belmont.edu/curb/internships.html",
        funding: "Academic credit + competitive entertainment industry hourly compensation",
        status: "Available",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Spring placement)",
        fee: "$0 USD",
        tuition: "Registered student practicum",
        requirements: {
          gpa: "Completion of 60 credit hours with 2.5+ GPA in Curb College",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Entertainment resume and interview",
          references: "Internship coordinator approval"
        },
        desc: "Iconic work placement embedding students at Sony Music, Universal Music Group, Warner Music Nashville, CAA, and Live Nation along Nashville's Music Row."
      },
      {
        id: 3622,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Course",
        title: "Audio Engineering Technology and Studio Production Intensive",
        source: "https://www.belmont.edu/curb/aet/",
        funding: "Hands-on consoles at historic Columbia Studio A and Quonset Hut",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$50 USD",
        tuition: "$3,800 USD module tuition",
        requirements: {
          gpa: "Secondary school graduation",
          ielts: "Working English",
          gre: "Not required",
          papers: "Audio portfolio or statement of recording interest",
          references: "Not required"
        },
        desc: "Eight-week technical intensive exploring Pro Tools HD mixing, analog tube circuitry, acoustic modeling, live sound reinforcement, and Dolby Atmos spatial audio mixing."
      }
    ],
    researchers: [
      {
        id: 1569,
        subject: "social-sciences",
        name: "Dr. Brittany Schaffer",
        title: "Dean of the Mike Curb College of Entertainment and Music Business",
        university: "Belmont University",
        country: "United States",
        topics: ["Music Streaming Economics", "Entertainment Law", "Artist Rights & Copyright", "Digital Music Royalties"],
        source: "https://www.belmont.edu/curb/about/leadership.html",
        summary: "Dean and former Spotify entertainment executive directing world-leading curriculum in music business, copyright litigation, and streaming distribution platforms."
      },
      {
        id: 1570,
        subject: "biology",
        name: "Dr. Sharrel Pinto",
        title: "Dean of the College of Pharmacy and Health Sciences",
        university: "Belmont University",
        country: "United States",
        topics: ["Health Outcomes Research", "Community Medication Therapy", "Pharmacoeconomics", "Chronic Disease Management"],
        source: "https://www.belmont.edu/pharmacy/faculty-staff/pinto.html",
        summary: "Nationally recognized pharmacy educator and researcher investigating community-based chronic disease interventions, clinical trial equity, and health outcomes."
      },
      {
        id: 1571,
        subject: "arts-design",
        name: "Michael Janas",
        title: "Chair and Associate Professor of Audio Engineering Technology",
        university: "Belmont University",
        country: "United States",
        topics: ["Spatial Audio Mixing", "Acoustic Architecture", "Analog Recording Technologies", "Digital Audio Signal Processing"],
        source: "https://www.belmont.edu/curb/aet/faculty.html",
        summary: "Veteran sound engineer directing Belmont's advanced recording studios on Music Row, specializing in architectural acoustics, spatial audio, and analog signal chains."
      }
    ]
  },

  // 16. USA - Beloit College (Row 590)
  {
    institution: "Beloit College",
    shortName: "Beloit College",
    slug: "beloit-college-wisconsin",
    countryId: "usa",
    countryLabel: "United States",
    location: "Beloit, Wisconsin, USA",
    website: "https://www.beloit.edu",
    sourceRow: 590,
    heroEyebrow: "Beloit, Wisconsin · Est. 1846 · Innovative Career Channels & Liberal Arts Excellence",
    headline: "Beloit College: Anthropology, Environmental Biology & Economics Guide",
    overview: "Founded in 1846, Beloit College is an acclaimed independent liberal arts college situated on a 40-acre wooded campus along the Rock River in Beloit, southern Wisconsin. Recognized nationally for undergraduate teaching innovation and revolutionary Career Channels, Beloit combines rigorous cross-disciplinary academics with hands-on museum curation at its world-renowned Logan Museum of Anthropology and Wright Museum of Art. Its sustainable, student-centered campus features The Powerhouse—an award-winning student student union and recreation facility converted from a historic riverside power station.",
    description: "Explore Beloit College in Wisconsin: Undergraduate research fellowships, Career Channels program, international scholarships, admissions requirements, and distinguished liberal arts faculty.",
    admissions: {
      masters: "Not applicable; undergraduate-focused liberal arts college offering Bachelor of Arts and Bachelor of Science degrees with pre-professional dual-degree partnerships.",
      phd: "Not applicable; focus on undergraduate research mentorship preparing students for top doctoral and medical programs across the US.",
      language: "TOEFL iBT 80 overall, IELTS Academic 6.5 overall, or Duolingo English Test (DET) 110+ for international applicants.",
      proposal: "Common Application personal essay; supplemental short answers demonstrating curiosity, interdisciplinary interest, and community engagement.",
      appFee: "$0 USD application fee via Common Application.",
      documents: "Official secondary school transcripts, certified English translation, secondary school report with counselor recommendation, one teacher recommendation, and English proficiency score."
    },
    tuitionText: "Tuition is approximately $58,200 USD per academic year (plus $11,400 room and board). Beloit provides generous merit-based scholarships up to $44,000 USD per year to international and domestic applicants, making attendance accessible regardless of family background.",
    opportunities: [
      {
        id: 3623,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Beloit College Presidential International Merit Scholarship",
        source: "https://www.beloit.edu/admissions/costs-aid/scholarships/",
        funding: "Up to $44,000 USD per year renewable for 4 years ($176,000 USD total)",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$0 USD",
        tuition: "$58,200 USD per year (before scholarship)",
        requirements: {
          gpa: "Top 15% high school ranking with minimum 3.5 GPA",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Test-optional (SAT/ACT not required)",
          papers: "Common Application personal statement",
          references: "One counselor and one teacher recommendation letter"
        },
        desc: "Flagship merit scholarship awarded to exceptionally talented international scholars demonstrating intellectual curiosity, academic rigor, and global citizenship."
      },
      {
        id: 3624,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Bachelor's",
        title: "Bachelor of Arts in Anthropology (Logan Museum Field Archaeology)",
        source: "https://www.beloit.edu/academics/anthropology/",
        funding: "Field research travel grants and collections curation stipends",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$0 USD",
        tuition: "$58,200 USD per academic year",
        requirements: {
          gpa: "Secondary school graduation diploma",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Personal essay",
          references: "Two academic recommendations"
        },
        desc: "Nationally recognized four-year anthropology program with direct student access to 300,000 ethnographic and archaeological specimens in the on-campus Logan Museum of Anthropology."
      },
      {
        id: 3625,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Bachelor's",
        title: "Bachelor of Science in Biochemistry & Molecular Biology",
        source: "https://www.beloit.edu/academics/biochemistry/",
        funding: "Undergraduate Sanger Summer Research Fellowships ($4,500 stipend + housing)",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$0 USD",
        tuition: "$58,200 USD per year",
        requirements: {
          gpa: "Strong preparatory high school coursework in chemistry and biology",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Not required",
          references: "Two teacher evaluations"
        },
        desc: "Rigorous ASBMB-accredited program preparing graduates for medical school and top doctoral programs through intensive laboratory coursework and faculty research collaboration."
      },
      {
        id: 3626,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Bachelor's",
        title: "Bachelor of Science in Environmental Studies (Ecology & Sustainable Systems)",
        source: "https://www.beloit.edu/academics/environmental-studies/",
        funding: "Field research access to the 40-acre campus and Rock River watershed",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$0 USD",
        tuition: "$58,200 USD per year",
        requirements: {
          gpa: "High school diploma with mathematics and laboratory sciences",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Common Application essay",
          references: "Two academic letters"
        },
        desc: "Interdisciplinary major integrating environmental science, GIS spatial analytics, water resource policy, and community sustainability initiatives in the Midwest."
      },
      {
        id: 3627,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Bachelor's",
        title: "Bachelor of Arts in Economics (Business & Financial Economics Track)",
        source: "https://www.beloit.edu/academics/economics/",
        funding: "Upton Forum in World Economics research prize competition",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$0 USD",
        tuition: "$58,200 USD per year",
        requirements: {
          gpa: "High school completion with algebra and calculus preparation",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Common Application essay",
          references: "Two academic recommendations"
        },
        desc: "Comprehensive economics degree mastering econometric modeling, financial markets, game theory, and international monetary economics through Beloit's Business Channel."
      },
      {
        id: 3628,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        title: "Beloit Sanger Summer Undergraduate Research Fellowship",
        source: "https://www.beloit.edu/offices/career-channels/",
        funding: "$4,500 USD research stipend + free on-campus summer housing",
        status: "Available",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$0 USD",
        tuition: "Sponsored summer research fellowship",
        requirements: {
          gpa: "Current Beloit College undergraduate with minimum 3.2 GPA",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Undergraduate research proposal co-authored with faculty mentor",
          references: "Faculty research mentor endorsement"
        },
        desc: "Ten-week full-time summer research fellowship providing dedicated faculty mentorship and funding across humanities, social sciences, and natural sciences."
      },
      {
        id: 3629,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Course",
        title: "Museum Studies and Material Culture Curatorial Practicum",
        source: "https://www.beloit.edu/academics/museum-studies/",
        funding: "Direct curatorial responsibility in Logan Museum of Anthropology",
        status: "Available",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "$0 USD",
        tuition: "Included in full-time college tuition",
        requirements: {
          gpa: "Enrolled student at Beloit College",
          ielts: "Working English",
          gre: "Not required",
          papers: "Exhibition design concept",
          references: "Not required"
        },
        desc: "Hands-on curatorial course where undergraduates research, design, label, and install professional public museum exhibitions from permanent indigenous art collections."
      }
    ],
    researchers: [
      {
        id: 1572,
        subject: "social-sciences",
        name: "Dr. Shannon Fie",
        title: "Professor of Anthropology and Logan Museum Curator",
        university: "Beloit College",
        country: "United States",
        topics: ["North American Archaeology", "Ceramic Analysis", "Midwestern Prehistory", "Museum Curation Ethics"],
        source: "https://www.beloit.edu/live/profiles/52-shannon-fie",
        summary: "Archaeologist and curator specializing in Woodland period ceramic technological style, social exchange networks, and ethical repatriation of indigenous material culture."
      },
      {
        id: 1573,
        subject: "biology",
        name: "Dr. Demetrius Gravis",
        title: "Associate Professor of Biology and Biochemistry",
        university: "Beloit College",
        country: "United States",
        topics: ["Molecular Genetics", "Cellular Signal Transduction", "CRISPR Gene Editing", "Undergraduate Laboratory Pedagogy"],
        source: "https://www.beloit.edu/academics/biology/faculty/",
        summary: "Biomedical researcher investigating cellular stress response pathways, genetic regulation in eukaryotic model organisms, and inquiry-based STEM learning."
      },
      {
        id: 1574,
        subject: "social-sciences",
        name: "Dr. Diep Phan",
        title: "Professor of Economics and Business",
        university: "Beloit College",
        country: "United States",
        topics: ["Development Economics", "International Trade", "Southeast Asian Industrialization", "Labor Market Economics"],
        source: "https://www.beloit.edu/live/profiles/139-diep-phan",
        summary: "Applied microeconomist investigating household welfare, industrial transition in Vietnam, microfinance impacts, and international labor migration patterns."
      }
    ]
  },

  // 17. UK - City of Oxford College (Row 1247)
  {
    institution: "City of Oxford College",
    shortName: "City of Oxford College",
    slug: "city-of-oxford-college-oxfordshire",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Oxford, Oxfordshire, England, UK",
    website: "https://oxford.activatelearning.ac.uk",
    sourceRow: 1247,
    heroEyebrow: "Oxford, Oxfordshire · Activate Learning Group · Technical & Professional Higher Education",
    headline: "City of Oxford College: Engineering, Digital Tech & Higher Apprenticeships Guide",
    overview: "City of Oxford College is the flagship further and higher education campus of Activate Learning, situated in the historic city center of Oxford along the River Thames (Oxpens Road campus). Working in close educational partnership with Oxford Brookes University and regional high-tech employers in the Oxfordshire science and technology cluster, City of Oxford College delivers T-Levels, Higher National Certificates/Diplomas (HNC/HND), Foundation Degrees, and Higher Apprenticeships in software engineering, digital media, business management, and mechanical engineering.",
    description: "Explore City of Oxford College in Oxford: Higher National Diplomas, foundation degree pathways, international student fees, apprenticeship programs, and industry-experienced faculty.",
    admissions: {
      masters: "Collaborative post-diploma top-up degrees to B.Sc. (Hons) and postgraduate study pathways with Oxford Brookes University require accredited HND (Level 5) with merit profile.",
      phd: "Not applicable; further and higher education college delivering Level 4 and Level 5 HNC/HND credentials, foundation degrees, and university top-up degrees.",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in all bands) for higher education diploma programs; 5.5 overall for Level 3 further education courses.",
      proposal: "Not required; personal statement detailing technical interest, career aspirations, and relevant work experience required for higher education applications.",
      appFee: "£0 for direct international college applications.",
      documents: "Secondary school certificates (GCSEs or international equivalent), academic transcripts, proof of English language proficiency, CV, and copy of passport."
    },
    tuitionText: "Tuition for domestic higher education students ranges from £6,165 to £7,500 per academic year. International tuition for higher education diploma programs ranges from £9,500 to £11,500 per year. Student finance maintenance loans and Activate Learning bursaries provide financial support to eligible applicants.",
    opportunities: [
      {
        id: 3630,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Course",
        title: "Pearson BTEC Level 5 Higher National Diploma in Mechanical Engineering",
        source: "https://oxford.activatelearning.ac.uk/courses/higher-education/",
        funding: "Direct top-up pathway into 3rd year B.Eng. at Oxford Brookes University",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£10,500 per academic year (international)",
        requirements: {
          gpa: "Level 3 qualification (A-Levels in Math/Physics, BTEC National, or equivalent)",
          ielts: "6.0 overall (minimum 5.5 in each component)",
          gre: "Not required",
          papers: "Personal statement detailing engineering interest",
          references: "One academic or employer reference"
        },
        desc: "Two-year practical engineering qualification mastering CAD/CAM systems, thermofluids, mechanical stress analysis, programmable logic controllers, and manufacturing operations."
      },
      {
        id: 3631,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Course",
        title: "Pearson BTEC Level 5 Higher National Diploma in Computing (Software Engineering)",
        source: "https://oxford.activatelearning.ac.uk/courses/higher-education/",
        funding: "Access to high-spec IT networking labs and cloud virtualization clusters",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£10,500 per year",
        requirements: {
          gpa: "48-64 UCAS tariff points from relevant Level 3 computing credentials",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Personal statement",
          references: "One academic reference"
        },
        desc: "Industry-aligned two-year diploma delivering advanced competency in object-oriented programming (C#, Java), database administration, systems architecture, and web microservices."
      },
      {
        id: 3632,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Pearson BTEC Level 5 Higher National Diploma in Business (Accounting & Finance)",
        source: "https://oxford.activatelearning.ac.uk/courses/higher-education/",
        funding: "Accreditation exemptions towards ACCA and CIMA professional accounting bodies",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£9,800 per year",
        requirements: {
          gpa: "A-Levels or equivalent Level 3 business qualification",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "One reference"
        },
        desc: "Two-year higher national diploma examining financial accounting principles, management auditing, business economics, corporate taxation, and organizational leadership."
      },
      {
        id: 3633,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Course",
        title: "Higher National Certificate in Digital Media Production & Visual Effects",
        source: "https://oxford.activatelearning.ac.uk/courses/higher-education/",
        funding: "Dedicated studio access with Adobe Creative Cloud and Unreal Engine",
        status: "Available",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        fee: "£0",
        tuition: "£10,200 per year",
        requirements: {
          gpa: "Relevant Level 3 creative qualification or creative portfolio",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Digital media portfolio (video, animation, or graphic design)",
          references: "One reference letter"
        },
        desc: "One-year intensive higher education qualification focusing on cinematography, motion capture, visual effects compositing, and interactive digital narrative creation."
      },
      {
        id: 3634,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Activate Learning International Student Progression Bursary",
        source: "https://oxford.activatelearning.ac.uk/student-support/financial-support/",
        funding: "£1,500 tuition discount awarded upon enrollment",
        status: "Available",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "£0",
        tuition: "£9,000 net international tuition",
        requirements: {
          gpa: "Demonstrated academic merit in previous secondary or college qualifications",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Application essay",
          references: "One academic reference"
        },
        desc: "Tuition support bursary aimed at promising international students progressing to higher technical education courses at City of Oxford College."
      },
      {
        id: 3635,
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        title: "Oxfordshire High-Tech Science Cluster Industry Apprenticeship",
        source: "https://oxford.activatelearning.ac.uk/apprenticeships/",
        funding: "Paid commercial apprenticeship wage (£18,000-£22,000/year)",
        status: "Available",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "£0",
        tuition: "Employer-funded under UK Apprenticeship Levy",
        requirements: {
          gpa: "UK right-to-work eligibility and 5 GCSEs (grade 4/C or above including Math & English)",
          ielts: "Eligible domestic/apprentice status",
          gre: "Not required",
          papers: "Technical CV and employer interview",
          references: "Employer endorsement"
        },
        desc: "Three-year higher apprenticeship combining college technical block-release learning with paid employment at cutting-edge engineering firms across Oxfordshire."
      },
      {
        id: 3636,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Course",
        title: "Network Security & Ethical Hacking Cisco CCNA Technical Bootcamp",
        source: "https://oxford.activatelearning.ac.uk/courses/adult-learners/",
        funding: "Professional development certificate",
        status: "Available",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "£0",
        tuition: "£1,250 course fee",
        requirements: {
          gpa: "Basic computing experience",
          ielts: "Working English",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Ten-week evening intensive preparing technical professionals for Cisco CCNA certification and hands-on enterprise network vulnerability management."
      }
    ],
    researchers: [
      {
        id: 1575,
        subject: "engineering",
        name: "Gary Headland DL",
        title: "Chief Executive Officer of Activate Learning Group",
        university: "City of Oxford College",
        country: "United Kingdom",
        topics: ["Further Education Reform", "Vocational Apprenticeship Policy", "Technical Skills Strategy", "Educational Leadership"],
        source: "https://oxford.activatelearning.ac.uk/about-us/leadership/",
        summary: "Executive leader overseeing strategic development, industrial partnerships, and experiential learning philosophies across Activate Learning college campuses."
      },
      {
        id: 1576,
        subject: "computer-science",
        name: "Cheri Ashby",
        title: "Deputy Chief Executive and Academic Quality Lead",
        university: "City of Oxford College",
        country: "United Kingdom",
        topics: ["Applied Pedagogy", "Digital Learning Environments", "Higher Technical Qualification Frameworks", "Curriculum Design"],
        source: "https://oxford.activatelearning.ac.uk/about-us/leadership/",
        summary: "Senior educator driving curriculum innovation, quality assurance, and digital transformation in technical and higher education across Oxfordshire."
      },
      {
        id: 1577,
        subject: "social-sciences",
        name: "Nancy Buckley",
        title: "Director of Career Pathways and Regional Skills Partnerships",
        university: "City of Oxford College",
        country: "United Kingdom",
        topics: ["Workforce Employability", "Employer Co-Design Education", "Oxfordshire Innovation Cluster", "Social Mobility"],
        source: "https://oxford.activatelearning.ac.uk/about-us/leadership/",
        summary: "Vocational education leader coordinating strategic employer co-design programs with the science and engineering sectors across the Thames Valley."
      }
    ]
  },

  // 18. UK - Coventry University London (Row 1249)
  {
    institution: "Coventry University London",
    shortName: "Coventry Uni London",
    slug: "coventry-university-london-campus",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "City of London, London, England, UK",
    website: "https://www.coventry.ac.uk/london/",
    sourceRow: 1249,
    heroEyebrow: "City of London · Financial Square Mile · International Business, FinTech & Fashion",
    headline: "Coventry University London: Global Business MBA, FinTech & Fashion Guide",
    overview: "Coventry University London is a dynamic postgraduate and professional campus located at University House on Middlesex Street, right in the heart of London's financial district, the Square Mile. Surrounded by major global banks, investment funds, and tech innovators near Liverpool Street Station, the campus specializes in career-focused Master's degrees, MBA programs, and specialized undergraduate degrees in international business, financial technology, international fashion marketing, and hospitality management.",
    description: "Explore Coventry University London: Global Business MBA, MSc in Financial Technology, CMI accreditation, international scholarships, tuition costs, and business faculty.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum lower second-class 2:2 Honours or international equivalent); relevant professional experience considered for executive MBA pathways.",
      phd: "Postgraduate research degrees (MPhil/PhD) offered in collaboration with Coventry University parent faculties and doctoral training centres; requires accredited Master's with merit/distinction.",
      language: "IELTS Academic 6.5 overall (minimum 5.5 or 6.0 in all skill bands) or recognized equivalent international English qualification.",
      proposal: "Required for MBA applicants: statement of purpose outlining management ambitions, international outlook, and leadership background.",
      appFee: "£0 direct online application fee.",
      documents: "Degree certificates, official transcripts, CV/resume, two references (one academic, one employer), copy of passport, and personal statement."
    },
    tuitionText: "Tuition for domestic postgraduate students ranges from £9,500 to £11,500 per year. International postgraduate tuition ranges from £17,200 to £21,500 per academic year. Coventry University London offers substantial International Pathways Scholarships providing tuition fee reductions of up to £3,000 for high-achieving applicants.",
    opportunities: [
      {
        id: 3637,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Coventry University London International Academic Excellence Scholarship",
        source: "https://www.coventry.ac.uk/london/study/fees-and-funding/scholarships/",
        funding: "£3,000 tuition fee discount applied to degree fees",
        status: "Available",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (May intake)",
        fee: "£0",
        tuition: "£17,900 per academic year (before scholarship)",
        requirements: {
          gpa: "Minimum 2:1 Honours or international equivalent 65%+",
          ielts: "6.5 overall with no subscore below 5.5",
          gre: "Not required",
          papers: "500-word personal statement demonstrating leadership potential",
          references: "One academic reference"
        },
        desc: "Competitive scholarship awarded to international postgraduate students enrolling in business, management, or finance degrees at the London City campus."
      },
      {
        id: 3638,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Business Administration (Global Business MBA)",
        source: "https://www.coventry.ac.uk/london/course-structure/postgraduate/global-business-mba/",
        funding: "CMI (Chartered Management Institute) Level 7 professional diploma included",
        status: "Available",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "£0",
        tuition: "£20,500 total 1-year MBA tuition",
        requirements: {
          gpa: "Honours degree (2:2 or above) plus relevant professional experience",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose and professional resume",
          references: "Two professional reference letters"
        },
        desc: "One-year intensive MBA delivering practical mastery of global strategic leadership, financial risk management, international market entry, and disruptive business models."
      },
      {
        id: 3639,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences", "mathematics"],
        type: "Master's",
        title: "Master of Science in Financial Technology (FinTech & Blockchain Analytics)",
        source: "https://www.coventry.ac.uk/london/course-structure/postgraduate/financial-technology-msc/",
        funding: "Direct access to Bloomberg trading terminals and Python analytics labs",
        status: "Available",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "£0",
        tuition: "£18,500 per academic year",
        requirements: {
          gpa: "Bachelor's degree in Finance, Economics, Computer Science, or Mathematics (2:2 or above)",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Technical statement of purpose",
          references: "Two academic referee letters"
        },
        desc: "Pioneering master's degree located next to the Bank of England, analyzing algorithmic trading systems, decentralized finance protocols, regulatory sandboxes, and machine learning."
      },
      {
        id: 3640,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Master's",
        title: "Master of Science in International Fashion Marketing and Brand Management",
        source: "https://www.coventry.ac.uk/london/course-structure/postgraduate/international-fashion-marketing-msc/",
        funding: "London Fashion Week industry networking and retail flagship study tours",
        status: "Available",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "£0",
        tuition: "£18,000 per year",
        requirements: {
          gpa: "Undergraduate degree in business, marketing, media, or fashion design",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Creative statement or marketing critique",
          references: "Two references"
        },
        desc: "One-year postgraduate program exploring luxury brand heritage, circular fashion supply chains, digital influencer analytics, and omnichannel merchandising."
      },
      {
        id: 3641,
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Master's",
        title: "Master of Science in International Hospitality and Tourism Management",
        source: "https://www.coventry.ac.uk/london/course-structure/postgraduate/international-hospitality-and-tourism-management-msc/",
        funding: "Institute of Hospitality accredited; London luxury hotel placements",
        status: "Available",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "£0",
        tuition: "£17,500 per year",
        requirements: {
          gpa: "Undergraduate degree with 2:2 or international equivalent",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "Two references"
        },
        desc: "Career-focused master's credential examining luxury hospitality operations, destination analytics, sustainable tourism governance, and global customer experience design."
      },
      {
        id: 3642,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        title: "City of London Financial & Corporate Management Work Placement",
        source: "https://www.coventry.ac.uk/london/student-life/careers-and-employability/",
        funding: "Optional 10-week credit-bearing professional internship in central London",
        status: "Available",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "£0",
        tuition: "Curricular placement module",
        requirements: {
          gpa: "Successful completion of first two terms of postgraduate study with good standing",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Professional CV and interview assessment",
          references: "Academic tutor approval"
        },
        desc: "Structured work-integrated learning placement with London corporate partners, consulting agencies, and financial institutions in the City and Canary Wharf."
      },
      {
        id: 3643,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Course",
        title: "Executive Workshop in Global Capital Markets and ESG Investment",
        source: "https://www.coventry.ac.uk/london/study/professional-development/",
        funding: "Continuing professional development certificate",
        status: "Available",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "£0",
        tuition: "£1,650 course fee",
        requirements: {
          gpa: "Degree or professional financial services experience",
          ielts: "Professional English",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Executive 4-week module exploring green bond markets, carbon credit trading, ESG disclosure mandates, and sustainable portfolio risk assessment."
      }
    ],
    researchers: [
      {
        id: 1578,
        subject: "social-sciences",
        name: "Dr. Janet Hannah",
        title: "Campus Director and Chief Executive Officer",
        university: "Coventry University London",
        country: "United Kingdom",
        topics: ["Higher Education Internationalization", "Transnational Business Education", "Strategic Institutional Governance", "Global Employability"],
        source: "https://www.coventry.ac.uk/london/about-us/meet-our-staff/",
        summary: "Campus director leading business school operations in London's financial district, spearheading corporate links and international student employability."
      },
      {
        id: 1579,
        subject: "social-sciences",
        name: "Dr. Jason Stanyek",
        title: "Associate Professor of Financial Markets and FinTech",
        university: "Coventry University London",
        country: "United Kingdom",
        topics: ["Financial Technology", "Algorithmic Market Microstructure", "Cryptocurrency Regulation", "Banking Digitization"],
        source: "https://www.coventry.ac.uk/london/about-us/meet-our-staff/",
        summary: "FinTech scholar investigating the systemic impact of decentralized ledger systems, regulatory sandbox innovations, and retail algorithmic investing."
      },
      {
        id: 1580,
        subject: "arts-design",
        name: "Gemma Vanson",
        title: "Senior Lecturer in Fashion Management and Luxury Branding",
        university: "Coventry University London",
        country: "United Kingdom",
        topics: ["Sustainable Fashion Supply Chains", "Luxury Brand Heritage", "Digital Merchandising", "Consumer Behaviour in Fashion"],
        source: "https://www.coventry.ac.uk/london/about-us/meet-our-staff/",
        summary: "Fashion industry scholar analyzing sustainable materials transformation, consumer psychology in luxury goods, and circular fashion economy models."
      }
    ]
  },

  // 19. UK - Liverpool School of Tropical Medicine (LSTM) (Row 1264)
  {
    institution: "Liverpool School of Tropical Medicine",
    shortName: "LSTM Liverpool",
    slug: "liverpool-school-of-tropical-medicine-lstm",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Liverpool, England, UK",
    website: "https://www.lstmed.ac.uk",
    sourceRow: 1264,
    heroEyebrow: "Liverpool, England · Est. 1898 · World's Oldest Tropical Medicine Institute",
    headline: "LSTM Liverpool: Tropical Disease Research, Global Health & PhD Guide",
    overview: "Established in 1898, the Liverpool School of Tropical Medicine (LSTM) is the world's first institution dedicated to tropical health research and education. An independent higher education institution with degree-awarding powers, LSTM commands an international research portfolio of over £200 million, leading global initiatives against malaria, tuberculosis, neglected tropical diseases (NTDs), and antimicrobial resistance (AMR). Partnering with the WHO, Wellcome Trust, and Gates Foundation, LSTM educates over 1,000 clinicians and public health scientists from 68 countries annually.",
    description: "Explore Liverpool School of Tropical Medicine (LSTM): Master of Public Health in International Development, PhD in Tropical Medicine, Wellcome Trust fellowships, and world-renowned epidemiologists.",
    admissions: {
      masters: "Accredited medical degree (MBBS/MBChB) or upper second-class (2:1) Honours degree in biological sciences, nursing, pharmacy, or public health; clinical experience strongly prioritized.",
      phd: "First-class or upper second-class Honours degree plus relevant Master's degree (MSc or MPH with merit or distinction); accepted doctoral research proposal and supervisor agreement.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all components) or 7.0 overall for clinical programs; TOEFL iBT 90 overall (minimum 21 in all skills).",
      proposal: "Required for PhD and MPhil applicants: 3-5 page research proposal outlining epidemiological or molecular research questions, methodology, and public health impact.",
      appFee: "£0 application fee.",
      documents: "University transcripts, degree certificates, CV with publications/clinical experience, personal statement, two academic references, and passport."
    },
    tuitionText: "Tuition for domestic postgraduate students ranges from £9,500 to £11,000 per academic year. International master's tuition ranges from £21,500 to £26,800 per year. Fully funded Wellcome Trust, Commonwealth, and Gates Foundation doctoral studentships provide full tuition, research consumables, and annual tax-free living stipends exceeding £19,000.",
    opportunities: [
      {
        id: 3644,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Scholarship",
        title: "LSTM Wellcome Trust International Doctoral Training Fellowship",
        source: "https://www.lstmed.ac.uk/study/postgraduate-research/phd-opportunities",
        funding: "Full tuition + £19,500/year tax-free stipend + £10,000/year research consumables for 4 years",
        status: "Available",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Annual intake)",
        fee: "£0",
        tuition: "Full tuition covered via Wellcome Trust grant",
        requirements: {
          gpa: "First-class Honours and Master's degree in biological sciences or medicine",
          ielts: "7.0 overall with no band below 6.5",
          gre: "Not required",
          papers: "Demonstrated commitment to low-and-middle-income country (LMIC) health research",
          references: "Three academic referee letters"
        },
        desc: "Prestigious four-year doctoral studentship supporting breakthrough translational research into vector biology, pathogen genomics, and vaccine efficacy in tropical endemic zones."
      },
      {
        id: 3645,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "PhD in Vector Biology and Antimicrobial Resistance (AMR)",
        source: "https://www.lstmed.ac.uk/study/postgraduate-research",
        funding: "Full UKRI/MRC doctoral research stipend (£19,237/year) for 3.5 years",
        status: "Available",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "£0",
        tuition: "Covered by doctoral award",
        requirements: {
          gpa: "Master's degree in microbiology, entomology, or parasitology with Merit/Distinction",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Doctoral research proposal (3,000 words)",
          references: "Two academic referee reports"
        },
        desc: "Doctoral investigation in LSTM's state-of-the-art insectaries and Containment Level 3 labs, designing novel insecticide-treated nets and tracking resistant microbial strains."
      },
      {
        id: 3646,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Master's",
        title: "Master of Science in Tropical Disease Biology (MSc)",
        source: "https://www.lstmed.ac.uk/study/courses/tropical-disease-biology",
        funding: "Laboratory research project dissertation in Liverpool or overseas partner site",
        status: "Available",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "£0",
        tuition: "£24,500 per academic year (international)",
        requirements: {
          gpa: "2:1 Honours degree in biological sciences, biochemistry, or biomedical sciences",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Personal statement detailing interest in tropical pathogens",
          references: "Two academic references"
        },
        desc: "One-year flagship master's program providing molecular and cellular training in parasitology, medical entomology, host-pathogen immunology, and diagnostic epidemiology."
      },
      {
        id: 3647,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Master's",
        title: "Master of Public Health (International Public Health - Sexual & Reproductive Health)",
        source: "https://www.lstmed.ac.uk/study/courses/international-public-health-sexual-and-reproductive-health",
        funding: "Commonwealth Shared Scholarship eligible for developing country nationals",
        status: "Available",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "£0",
        tuition: "£23,500 per year",
        requirements: {
          gpa: "Medical, nursing, or public health undergraduate degree (2:1 or equivalent)",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing public health field experience",
          references: "Two professional reference letters"
        },
        desc: "One-year master's program analyzing maternal mortality reduction, healthcare financing in fragile states, epidemiology of HIV/STIs, and rights-based health systems."
      },
      {
        id: 3648,
        subject: "biology",
        subjects: ["biology"],
        type: "Course",
        title: "Diploma in Tropical Medicine and Hygiene (DTM&H for Medical Doctors)",
        source: "https://www.lstmed.ac.uk/study/courses/tropical-medicine-and-hygiene",
        funding: "World's most renowned three-month professional credential in tropical medicine",
        status: "Available",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Spring cohort)",
        fee: "£0",
        tuition: "£6,800 course tuition",
        requirements: {
          gpa: "Fully qualified medical doctor with primary medical qualification (MBBS or equivalent)",
          ielts: "7.0 overall",
          gre: "Not required",
          papers: "Curriculum vitae and medical registration certificate",
          references: "Two clinical supervisor references"
        },
        desc: "Three-month intensive clinical program training medical physicians for humanitarian deployments, field hospitals, and specialized infectious disease clinics worldwide."
      },
      {
        id: 3649,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Fellowship",
        title: "Centre for Drugs and Diagnostics Postdoctoral Research Fellowship",
        source: "https://www.lstmed.ac.uk/research/centres-and-units",
        funding: "£36,000-£44,000/year research salary plus NHS pension contribution",
        status: "Available",
        deadline: null,
        deadlineText: "Continuous recruitment for funded Gates Foundation programs",
        fee: "£0",
        tuition: "Salaried academic research appointment",
        requirements: {
          gpa: "PhD in Medicinal Chemistry, Molecular Parasitology, or Pharmacology",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "High-impact peer-reviewed publications in drug discovery or pharmacokinetics",
          references: "Three academic referee letters"
        },
        desc: "Postdoctoral appointment developing novel synthetic antimalarial chemotypes and point-of-care rapid molecular diagnostics for remote rural healthcare facilities."
      },
      {
        id: 3650,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Course",
        title: "Travel Health and Geographic Medicine Clinical Certification",
        source: "https://www.lstmed.ac.uk/study/courses/short-courses",
        funding: "Royal College of Physicians accredited for continuing medical education",
        status: "Available",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "£0",
        tuition: "£1,450 course fee",
        requirements: {
          gpa: "Practicing doctor, nurse, or clinical pharmacist",
          ielts: "Clinical English proficiency",
          gre: "Not required",
          papers: "Professional medical license copy",
          references: "Not required"
        },
        desc: "Four-week clinical online module mastering pre-travel vaccine schedules, malaria chemoprophylaxis guidelines, altitude sickness protocols, and post-travel febrile illness triage."
      }
    ],
    researchers: [
      {
        id: 1581,
        subject: "biology",
        name: "Prof. David Lalloo",
        title: "Director of the Liverpool School of Tropical Medicine and Professor of Tropical Medicine",
        university: "Liverpool School of Tropical Medicine",
        country: "United Kingdom",
        topics: ["Clinical Tropical Medicine", "Snakebite Envenoming", "Malaria Clinical Trials", "Global Health Policy"],
        source: "https://www.lstmed.ac.uk/about/people/david-lalloo",
        summary: "Eminent clinical tropical physician and director of LSTM; leading international trials on antivenoms for neglected snakebite envenomation and malaria therapeutics."
      },
      {
        id: 1582,
        subject: "biology",
        name: "Prof. Hilary Ranson",
        title: "Professor of Medical Entomology and Dean of Research Culture",
        university: "Liverpool School of Tropical Medicine",
        country: "United Kingdom",
        topics: ["Mosquito Vector Biology", "Insecticide Resistance Mechanisms", "Malaria Elimination", "Gene Expression in Anopheles"],
        source: "https://www.lstmed.ac.uk/about/people/hilary-ranson",
        summary: "World-leading vector biologist recognized for unraveling the molecular mechanisms of metabolic insecticide resistance in African malaria vectors."
      },
      {
        id: 1583,
        subject: "biology",
        name: "Prof. Bertie Squire",
        title: "Dean of Clinical Sciences and International Public Health",
        university: "Liverpool School of Tropical Medicine",
        country: "United Kingdom",
        topics: ["Tuberculosis Diagnostics", "Health Systems Strengthening", "Poverty and Infectious Disease", "Implementation Science"],
        source: "https://www.lstmed.ac.uk/about/people/bertie-squire",
        summary: "Public health physician leading global research into equitable tuberculosis diagnostic delivery, health economics in urban slums, and community healthcare access."
      }
    ]
  },

  // 20. UK - London Metropolitan University (Row 1266)
  {
    institution: "London Metropolitan University",
    shortName: "London Met",
    slug: "london-metropolitan-university-london",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Holloway & Aldgate, London, England, UK",
    website: "https://www.londonmet.ac.uk",
    sourceRow: 1266,
    heroEyebrow: "Holloway & Aldgate, London · Historic City Roots · Social Justice & Creative Architecture",
    headline: "London Metropolitan University: Computing, Architecture & Human Rights Guide",
    overview: "London Metropolitan University (London Met) is an energetic public research university located in central and north London, operating primary campuses in Holloway (Science, Computing, Business and Law) and Aldgate (School of Art, Architecture and Design - formerly the Sir John Cass School of Art). Dedicated to social justice, social mobility, and inclusive education, London Met features the state-of-the-art £30 million Science Centre (one of Europe's largest open-plan science teaching facilities), world-renowned cyber ranges, and award-winning architecture studios.",
    description: "Explore London Metropolitan University: Master's in Cybersecurity, Architecture RIBA Part 2, Human Rights LL.M., international scholarships, tuition fees, and prominent research faculty.",
    admissions: {
      masters: "Accredited UK Bachelor's degree (minimum 2:2 Honours or recognized international equivalent); relevant work experience considered for mature applicants through accreditation of prior learning (APL).",
      phd: "Recognized Master's degree in a relevant subject area with good standing; submission of a detailed research proposal and demonstration of alignment with a London Met research centre.",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each component) for undergraduate; 6.5 overall (minimum 6.0 in each component) for postgraduate degrees.",
      proposal: "Required for doctoral applications: 2,000 to 3,000-word proposal detailing research methodology, literature review, ethical considerations, and academic originality.",
      appFee: "£0 for direct international online applications.",
      documents: "Academic degree certificates, official transcripts, curriculum vitae, personal statement, two reference letters, and copy of passport."
    },
    tuitionText: "Tuition for domestic undergraduate students is £9,250 per year. International student tuition ranges from £15,000 to £18,200 per academic year. London Met awards substantial merit scholarships, including International Student Scholarships providing up to £3,000 in tuition fee reductions.",
    opportunities: [
      {
        id: 3651,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "London Met International Student Academic Merit Scholarship",
        source: "https://www.londonmet.ac.uk/international/fees-and-funding/scholarships/",
        funding: "Up to £3,000 tuition fee reduction",
        status: "Available",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "£0",
        tuition: "£16,500 per academic year (before scholarship)",
        requirements: {
          gpa: "Minimum 2:1 Honours or international equivalent 65%+",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "500-word scholarship application essay on social justice and career goals",
          references: "One academic reference"
        },
        desc: "Tuition fee waiver awarded to high-achieving international postgraduate students enrolling in full-time taught master's degrees at London Met."
      },
      {
        id: 3652,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "Master of Science in Computer Networking and Cyber Security (MSc)",
        source: "https://www.londonmet.ac.uk/courses/postgraduate/computer-networking-and-cyber-security---msc/",
        funding: "Access to state-of-the-art on-campus Cyber Security Research Centre and Cisco Lab",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£17,200 per academic year",
        requirements: {
          gpa: "Bachelor's degree in computing, engineering, mathematics, or related subject (2:2 or above)",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Statement of technical motivation",
          references: "Two academic or employer references"
        },
        desc: "BCS-accredited one-year master's program providing deep training in penetration testing, cryptographic protocols, cloud security architectures, and digital forensics."
      },
      {
        id: 3653,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Master's",
        title: "Master of Architecture (MArch RIBA Part 2 Accredited)",
        source: "https://www.londonmet.ac.uk/courses/postgraduate/architecture---march/",
        funding: "Award-winning School of Art, Architecture and Design (The Cass) design studios",
        status: "Available",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "£0",
        tuition: "£16,800 per year",
        requirements: {
          gpa: "RIBA Part 1 validated degree with minimum 2:2 and professional year-out experience",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Design portfolio (PDF format, maximum 20 pages)",
          references: "Two references (one academic, one architectural practice)"
        },
        desc: "Two-year RIBA and ARB-prescribed professional master's degree exploring urban spatial politics, adaptive reuse, climate-positive tectonic assemblies, and civic architecture."
      },
      {
        id: 3654,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Laws in Human Rights and International Law (LL.M.)",
        source: "https://www.londonmet.ac.uk/courses/postgraduate/human-rights-and-international-law---llm/",
        funding: "Research links with Amnesty International and human rights NGOs in London",
        status: "Available",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        fee: "£0",
        tuition: "£16,000 per year",
        requirements: {
          gpa: "Law degree or related social science degree with minimum 2:2",
          ielts: "6.5 overall (minimum 6.0 in each section)",
          gre: "Not required",
          papers: "Personal statement detailing human rights commitment",
          references: "Two academic letters"
        },
        desc: "One-year master's degree analyzing international humanitarian law, refugee protection frameworks, indigenous rights, and international criminal tribunals."
      },
      {
        id: 3655,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Bachelor's",
        title: "Bachelor of Science in Biomedical Science (IBMS Accredited)",
        source: "https://www.londonmet.ac.uk/courses/undergraduate/biomedical-science---bsc-hons/",
        funding: "Hands-on classes in the £30M Science Centre's 280-workstation Superlab",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£15,800 per year",
        requirements: {
          gpa: "A-Levels with minimum grade C in Biology and Chemistry, or international equivalent",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Not required",
          references: "One academic reference"
        },
        desc: "Three-year laboratory-intensive bachelor's degree accredited by the Institute of Biomedical Science (IBMS), preparing graduates for NHS pathology careers."
      },
      {
        id: 3656,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Fellowship",
        title: "Cyber Security and Digital Evidence Postdoctoral Research Fellowship",
        source: "https://www.londonmet.ac.uk/research/centres-and-groups/",
        funding: "£35,000-£41,000/year research salary plus USS pension",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling recruitment for UKRI-sponsored cyber security projects",
        fee: "£0",
        tuition: "Salaried research appointment",
        requirements: {
          gpa: "PhD in Cyber Security, Computer Science, or Digital Forensics",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Peer-reviewed publications in threat modeling or network security",
          references: "Two academic referee letters"
        },
        desc: "Postdoctoral research position investigating AI-driven malicious traffic identification, critical national infrastructure protection, and automated IoT vulnerability patching."
      },
      {
        id: 3657,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Course",
        title: "Community Organizing, Social Action and Public Policy Certificate",
        source: "https://www.londonmet.ac.uk/courses/short-courses/",
        funding: "Delivered in partnership with London community advocacy coalitions",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "£0",
        tuition: "£750 course fee",
        requirements: {
          gpa: "Open enrollment for community organizers and NGO workers",
          ielts: "Working English",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Six-week evening masterclass exploring grassroots campaigning tactics, legislative lobbying strategies, coalition building, and social impact measurement in urban London."
      }
    ],
    researchers: [
      {
        id: 1584,
        subject: "computer-science",
        name: "Prof. Dr. Karim Ouazzane",
        title: "Professor of Computing and Director of the Cyber Security Research Centre",
        university: "London Metropolitan University",
        country: "United Kingdom",
        topics: ["Applied Artificial Intelligence", "Cyber Threat Intelligence", "Neural Network Security", "Industrial IoT Architectures"],
        source: "https://www.londonmet.ac.uk/profiles/staff/karim-ouazzane/",
        summary: "Leading computer scientist who founded the Cyber Security Research Centre at London Met; investigating autonomous intrusion detection and industrial AI systems."
      },
      {
        id: 1585,
        subject: "arts-design",
        name: "Prof. Anne Markey",
        title: "Head of the School of Art, Architecture and Design (The Cass)",
        university: "London Metropolitan University",
        country: "United Kingdom",
        topics: ["Architectural Pedagogy", "Civic Urban Architecture", "Participatory Housing Design", "Adaptive City Heritage"],
        source: "https://www.londonmet.ac.uk/profiles/staff/anne-markey/",
        summary: "Architect and educational leader directing the acclaimed School of Art, Architecture and Design; specializing in community housing and sustainable urban regenerations."
      },
      {
        id: 1586,
        subject: "social-sciences",
        name: "Prof. Jeffrey Cole",
        title: "Professor of Law and Co-Director of the Human Rights and Social Justice Research Institute",
        university: "London Metropolitan University",
        country: "United Kingdom",
        topics: ["Public International Law", "Human Rights Treaties", "Refugee Asylum Law", "Constitutional Civil Liberties"],
        source: "https://www.londonmet.ac.uk/profiles/staff/jeffrey-cole/",
        summary: "Legal scholar and barrister leading research into European asylum jurisprudence, human rights litigation, and international anti-discrimination legislation."
      }
    ]
  }
];
