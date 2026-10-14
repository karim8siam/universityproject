// Batch 20 Data - Part 1: First 10 Universities (Cycle 11)
// 70 verified opportunities (IDs 718-787), 30 researcher profiles (IDs 327-356)
// Dates reviewed: 2026-10-15, all deadlines >= 2026-10-15 or null

export const universitiesPart1 = [
  // 1. CANADA: Concordia University (Row 27)
  {
    institution: "Concordia University",
    shortName: "Concordia",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Montreal, Quebec, Canada",
    website: "https://www.concordia.ca",
    sourceRow: 27,
    slug: "concordia-university",
    heroEyebrow: "Canada · Quebec · AI & Applied Cybersecurity Powerhouse · Reviewed 15 October 2026",
    headline: "Concordia University",
    description: "Concordia University guide: Concordia Doctoral Graduate Fellowships ($14,000/yr + tuition awards), Gina Cody School of Engineering & Computer Science, and faculty profiles.",
    overview: "Located in the vibrant multicultural metropolis of Montreal, Concordia University is one of Canada's leading next-generation comprehensive research universities. Home to the internationally celebrated Gina Cody School of Engineering and Computer Science (the first engineering faculty in Canada named after a woman), the John Molson School of Business, and the Concordia Institute for Information Systems Engineering (CIISE), Concordia excels in artificial intelligence, synthetic biology, cybersecurity, aerospace engineering, and interactive digital arts.",
    admissions: {
      masters: "Bachelor's degree with high academic standing equivalent to a Canadian B average (minimum 3.0/4.3 GPA or 73-76%); STEM programs typically require 3.2+ GPA.",
      phd: "Master's degree (or equivalent) in a relevant discipline with high academic standing (minimum B+ average, 3.3/4.3 GPA) and evidence of scholarly research output.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-test) or TOEFL iBT 85 (minimum 20 in writing); Gina Cody School requires IELTS 7.0 / TOEFL 90 for direct doctoral entry.",
      proposal: "A 2 to 3 page Statement of Research Purpose outlining proposed research questions, methodology, and identified faculty supervisor.",
      appFee: "CAD $110 non-refundable application fee submitted via Concordia's MyConcordia portal.",
      documents: "Complete official transcripts, curriculum vitae, 3 letters of reference, statement of purpose, and proof of language proficiency."
    },
    tuitionText: "Full-time doctoral students in research degree programs benefit from substantial funding support. Concordia guarantees multi-year Concordia Doctoral Graduate Fellowships of CAD $14,000 per year for up to 4 years, supplemented by departmental teaching and research assistantships, bringing typical annual support to CAD $24,000 to $28,000/year plus International Tuition Differential waivers.",
    opportunities: [
      {
        id: 718,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        title: "Concordia University Doctoral Graduate Fellowships & International Tuition Awards",
        source: "https://www.concordia.ca/admissions/graduate/funding/university-awards.html",
        funding: "Fully funded: CAD $14,000/year base fellowship for 4 years plus departmental assistantships ($12,000/year) and International Tuition Fee Differential awards",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority deadline for Fall admission & fellowship awards)",
        fee: "CAD $110 application fee",
        tuition: "International differential tuition waived through Quebec and university awards.",
        requirements: {
          gpa: "Minimum 3.5/4.3 cumulative GPA (equivalent to A- standing) in Master's degree studies.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 90.",
          gre: "Recommended for international applicants with non-North American degrees.",
          papers: "Demonstrated academic excellence, peer-reviewed publications, or strong Master's thesis.",
          references: "Three academic referee letters submitted via the graduate portal."
        },
        desc: "Prestigious university-wide doctoral entrance awards providing guaranteed four-year living stipends, teaching assistantships, and tuition offsets for high-achieving international researchers."
      },
      {
        id: 719,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Gina Cody School PhD in Computer Science & Applied Cybersecurity",
        source: "https://www.concordia.ca/ginacody/computer-science-software-eng/programs/computer-science-phd.html",
        funding: "Guaranteed 4-year funding package of CAD $24,000/year minimum via supervisor grants and teaching fellowships",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall 2027 intake)",
        fee: "CAD $110 application fee",
        tuition: "Full-time international tuition subsidized by departmental bursaries.",
        requirements: {
          gpa: "Master's degree in Computer Science, Software Engineering, or closely related discipline with minimum B+ average.",
          ielts: "Academic IELTS 7.0 (no sub-score below 6.5) or TOEFL iBT 90.",
          gre: "Not strictly required.",
          papers: "Evidence of scholarly research output (Master's thesis or conference publication).",
          references: "Three confidential letters of recommendation."
        },
        desc: "Doctoral research conducted within the Concordia Institute for Information Systems Engineering (CIISE), focusing on artificial intelligence, cloud security, cryptography, and automated software engineering."
      },
      {
        id: 720,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "Concordia Master of Applied Science (MASc) in Aerospace & Sustainable Propulsion",
        source: "https://www.concordia.ca/ginacody/mechanical-industrial-aerospace-eng/programs/aerospace-masc.html",
        funding: "Graduate research assistantship (GRA) funding averaging CAD $18,000 to $22,000/year",
        status: "open-master",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall admission deadline)",
        fee: "CAD $110 application fee",
        tuition: "Approx. CAD $8,500/term for international thesis students before departmental bursaries.",
        requirements: {
          gpa: "Bachelor's degree in mechanical, aerospace, or industrial engineering with minimum B average (3.0/4.3).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in thermodynamics, aerodynamics, or avionics.",
          references: "Two academic letters of recommendation."
        },
        desc: "Thesis-based Master's degree partnering with Montreal's world-leading aerospace cluster (Bombardier, Pratt & Whitney Canada, CAE), investigating sustainable aircraft propulsion, composite structures, and avionics."
      },
      {
        id: 721,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Concordia PhD in Biology & Synthetic Biology (Centre for Applied Synthetic Biology)",
        source: "https://www.concordia.ca/artsci/biology/programs/graduate/biology-phd.html",
        funding: "Full 4-year funding package of CAD $23,000 to $27,000/year plus specialized laboratory consumables access",
        status: "open-phd",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual priority round for Fall admission)",
        fee: "CAD $110 application fee",
        tuition: "Full-time research tuition supported by supervisor grants.",
        requirements: {
          gpa: "Master's degree in biology, biochemistry, biotechnology, or genetics with minimum B+ standing.",
          ielts: "Academic IELTS 6.5 (minimum 6.0 in each band).",
          gre: "Not required.",
          papers: "Prior laboratory research experience in molecular cloning, CRISPR genome editing, or metabolic engineering.",
          references: "Two academic reference letters from previous research directors."
        },
        desc: "Pioneering doctoral training at Canada's first Centre for Applied Synthetic Biology (CASB), engineering microbial cell factories for biofuel synthesis, therapeutic proteins, and biosensors."
      },
      {
        id: 722,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Research",
        title: "Milieux Institute for Arts, Culture and Technology Postdoctoral Fellowship",
        source: "https://milieux.concordia.ca/fellowships/",
        funding: "CAD $48,000 to $54,000 annual postdoctoral stipend plus CAD $5,000 research and exhibition fund",
        status: "open-research",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual Milieux fellowship call)",
        fee: "No application fee for post-admission fellowship",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Digital Humanities, Media Studies, Interaction Design, or Communication.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated portfolio of research-creation projects, peer-reviewed articles, or interactive installations.",
          references: "Two letters of recommendation from senior scholars."
        },
        desc: "Two-year postdoctoral fellowship at the Milieux Institute, investigating the intersections of digital games, critical media culture, electronic textiles, and ethical AI in contemporary society."
      },
      {
        id: 723,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        title: "Concordia Applied AI Summer Laboratory Traineeship (Innovation Lab)",
        source: "https://www.concordia.ca/innovation.html",
        funding: "CAD $6,400 12-week summer stipend with high-performance GPU cluster access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer 2027 student research traineeship)",
        fee: "No application fee",
        tuition: "Zero tuition fees during summer traineeship appointment.",
        requirements: {
          gpa: "Enrolled in 3rd or 4th year of undergraduate degree in Computer Science, Software Engineering, or Mathematics with minimum 3.3 GPA.",
          ielts: "Strong scientific English skills.",
          gre: "Not applicable.",
          papers: "Completed courses in machine learning, algorithms, and Python programming.",
          references: "One referee letter from a faculty lab head."
        },
        desc: "Twelve-week mentored summer research internship developing real-world deep learning models, natural language processing pipelines, and computer vision systems in collaboration with industry partners."
      },
      {
        id: 724,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Job",
        title: "Concordia Postdoctoral Fellow in Industrial Cybersecurity & Cyber-Physical Systems",
        source: "https://www.concordia.ca/ginacody/ciise/research.html",
        funding: "Salaried postdoctoral position: CAD $62,000 to $70,000/year plus health and dental insurance",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Review of applications begins immediately and continues until filled)",
        fee: "No employment application fee",
        tuition: "Not applicable; salaried full-time research appointment.",
        requirements: {
          gpa: "PhD in Cybersecurity, Computer Engineering, Telecommunications, or Information Systems within the last 4 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Track record of publications in top cybersecurity venues (IEEE S&P, ACM CCS, USENIX Security, NDSS).",
          references: "Three academic reference contacts."
        },
        desc: "Full-time research role at the Concordia Institute for Information Systems Engineering (CIISE), designing zero-trust security frameworks, vulnerability detection tools, and resilient control protocols for critical infrastructure."
      }
    ],
    researchers: [
      {
        id: 327,
        name: "Dr. Mourad Debbabi",
        title: "Professor of Information Systems Engineering and Dean of the Gina Cody School",
        subject: "computer-science",
        topics: ["Cybersecurity", "Cyber Forensics", "Formal Methods", "Smart Grid Security"],
        source: "https://www.concordia.ca/ginacody/ciise/faculty.html?fpid=mourad-debbabi",
        summary: "Dean of the Gina Cody School, NSERC/Hydro-Québec/Thales Senior Industrial Research Chair in Smart Grid Security, and world leader in cyber threat intelligence and digital forensics.",
        recruiting: "Not verified"
      },
      {
        id: 328,
        name: "Dr. Vincent Martin",
        title: "Professor of Biology and Canada Research Chair in Microbial Genomics and Synthetic Biology",
        subject: "biology",
        topics: ["Synthetic Biology", "Metabolic Engineering", "Industrial Biotechnology", "Microbial Genomics"],
        source: "https://www.concordia.ca/artsci/biology/faculty.html?fpid=vincent-martin",
        summary: "Co-founder of the Centre for Applied Synthetic Biology and world-renowned pioneer in metabolic engineering who co-developed the yeast biosynthesis of antimalarial artemisinin.",
        recruiting: "Not verified"
      },
      {
        id: 329,
        name: "Dr. Catherine Mulligan",
        title: "Professor of Civil and Environmental Engineering",
        subject: "environment",
        topics: ["Environmental Remediation", "Biosurfactants", "Soil and Groundwater Cleanup", "Sustainable Mining"],
        source: "https://www.concordia.ca/ginacody/civil-environmental-construction-eng/faculty.html?fpid=catherine-mulligan",
        summary: "Concordia Research Chair in Geoenvironmental Sustainability and Fellow of the Canadian Academy of Engineering, celebrated for pioneering biological treatments for contaminated soil and water.",
        recruiting: "Not verified"
      }
    ]
  },

  // 2. AUSTRALIA: Bond University (Row 155)
  {
    institution: "Bond University",
    shortName: "Bond",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Robina, Gold Coast, Queensland, Australia",
    website: "https://bond.edu.au",
    sourceRow: 155,
    slug: "bond-university",
    heroEyebrow: "Australia · Queensland · Gold Coast Research Pioneer & Medical Sciences Leader · Reviewed 15 October 2026",
    headline: "Bond University",
    description: "Bond University guide: HDR full-tuition PhD scholarships (AUD $32,000+ stipend), Institute for Evidence-Based Healthcare, Robotics, and faculty profiles.",
    overview: "Established in 1989 on the Gold Coast, Bond University is Australia's first private, non-profit university, recognized nationally for scoring the highest student satisfaction ratings in Australia for nearly two decades. Renowned for its world-class Faculty of Health Sciences & Medicine, the Institute for Evidence-Based Healthcare (IEBH), the Clem Jones Centre for Regenerative Medicine, and cutting-edge business analytics and sports science, Bond delivers accelerated three-semester-per-year postgraduate degrees and generous higher-degree research scholarships.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years) from an accredited university with a minimum credit average (65% or 5.0/7.0 GPA scale); competitive health programs require relevant clinical prerequisites.",
      phd: "Bachelor's degree with First Class Honours, or recognized Master's degree with a substantial thesis component (minimum 25% research) and demonstrated scholarly output.",
      language: "Academic IELTS 6.5 overall (no individual band below 6.0) or TOEFL iBT 79; Medicine and Health Sciences require IELTS 7.0 (minimum 6.5 in all bands).",
      proposal: "A formal research proposal of 1,000 to 2,000 words defining research questions, methodology, significance, and proposed Bond academic supervisors.",
      appFee: "AUD $0 application fee for direct online postgraduate research applications.",
      documents: "Certified academic transcripts, degree award certificates, comprehensive CV, research proposal, and 2 academic referee appraisals."
    },
    tuitionText: "Higher Degree by Research (HDR) candidates awarded Bond University Postgraduate Research Scholarships (BUPRS) or Australian Government RTP fee offsets receive 100% full international tuition waivers for up to 3.5 years, along with a living stipend of AUD $32,000 to $34,500 per year (indexed annually) and standard overseas student health cover (OSHC).",
    opportunities: [
      {
        id: 725,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Scholarship",
        title: "Bond University Postgraduate Research Scholarships (BUPRS) & HDR Stipends",
        source: "https://bond.edu.au/researchers/degrees/postgraduate-research-scholarships",
        funding: "Fully funded: Living stipend of AUD $32,000/year for up to 3.5 years, 100% full tuition fee waiver, and single OSHC health coverage",
        status: "open-scholarship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Annual international HDR scholarship round for September intake)",
        fee: "AUD $0 application fee",
        tuition: "Full tuition waiver provided by Bond University HDR Scholarship Committee.",
        requirements: {
          gpa: "First Class Honours (H1) or Master's by Research degree with distinction.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 94.",
          gre: "Not required.",
          papers: "Demonstrated publication record in reputable peer-reviewed journals or major conferences.",
          references: "Two academic referee reports submitted via the researcher portal."
        },
        desc: "Bond's flagship doctoral research award providing complete financial support, tuition offsets, and living allowances for outstanding domestic and international PhD scholars across all faculties."
      },
      {
        id: 726,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "PhD",
        title: "Bond PhD in Evidence-Based Healthcare & Clinical Epidemiology",
        source: "https://bond.edu.au/program/doctor-philosophy-health-sciences",
        funding: "RTP-equivalent doctoral stipend of AUD $33,000/year plus clinical trial database and biostatistics software access",
        status: "open-phd",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (September semester intake)",
        fee: "AUD $0 application fee",
        tuition: "100% tuition offset covered under university scholarship.",
        requirements: {
          gpa: "Master's degree in public health, epidemiology, medicine, pharmacy, or biostatistics with high distinction.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all sub-scores).",
          gre: "Not required.",
          papers: "Experience in systematic reviews, meta-analyses, or randomized clinical trial design.",
          references: "Two academic reference letters from health sciences professors."
        },
        desc: "Doctoral research conducted within the world-renowned Institute for Evidence-Based Healthcare (IEBH), investigating antimicrobial resistance stewardship, non-pharmacological interventions, and clinical research transparency."
      },
      {
        id: 727,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master",
        title: "Bond Master of Science (MSc) in Business Analytics & Artificial Intelligence",
        source: "https://bond.edu.au/program/master-business-analytics",
        funding: "Bond Transformer and International Stand Out Scholarships offering up to AUD $10,000 tuition fee reductions",
        status: "open-master",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (September intake deadline)",
        fee: "AUD $0 application fee",
        tuition: "AUD $38,400/year standard international tuition before scholarship awards.",
        requirements: {
          gpa: "Recognized Bachelor's degree in any discipline with minimum 65% average; quantitative aptitude preferred.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each band).",
          gre: "Not required.",
          papers: "Statement of purpose outlining analytical career objectives.",
          references: "One academic or professional reference."
        },
        desc: "Accelerated two-year Master's degree delivered in 16 months across Bond's tri-semester calendar, covering predictive analytics, big data engineering, machine learning pipelines, and managerial decision modeling."
      },
      {
        id: 728,
        subject: "biology",
        subjects: ["biology"],
        type: "PhD",
        title: "Bond PhD in Regenerative Medicine & Stem Cell Therapeutics",
        source: "https://bond.edu.au/research/clem-jones-centre-regenerative-medicine",
        funding: "Full 3-year doctoral scholarship: AUD $32,500/year stipend plus cell culture consumables funding",
        status: "open-phd",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Annual scholarship selection)",
        fee: "AUD $0 application fee",
        tuition: "Zero tuition charges under university research sponsorship.",
        requirements: {
          gpa: "Honours Class I or Master's degree in molecular biology, regenerative medicine, or cellular physiology.",
          ielts: "Academic IELTS 6.5 (minimum 6.0 in all bands).",
          gre: "Not required.",
          papers: "Practical laboratory experience in stem cell culture, flow cytometry, or immunohistochemistry.",
          references: "Two academic referee letters from laboratory directors."
        },
        desc: "Doctoral research based at the Clem Jones Centre for Regenerative Medicine, investigating induced pluripotent stem cells, neurodegenerative disease models, and tissue engineering for chronic ocular conditions."
      },
      {
        id: 729,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Centre for Professional Legal Education Postdoctoral Research Fellowship",
        source: "https://bond.edu.au/faculty/faculty-law/research",
        funding: "Annual research fellowship of AUD $82,000 to $92,000 plus 17% superannuation and travel grants",
        status: "open-research",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Postdoctoral review round)",
        fee: "AUD $0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Law, Legal Education, Dispute Resolution, or International Commercial Arbitration.",
          ielts: "Fluent professional English communication.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in comparative law, dispute resolution, or digital legal technology.",
          references: "Two academic recommendation letters."
        },
        desc: "Two-year postdoctoral fellowship at the Bond Faculty of Law, examining international dispute resolution, online mediation frameworks, and artificial intelligence integration in legal pedagogy."
      },
      {
        id: 730,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "Bond Institute for Health & Sport Summer Research Traineeship",
        source: "https://bond.edu.au/research/tactical-research-unit",
        funding: "AUD $4,200 8-week summer research bursary with biomechanics lab access",
        status: "open-internship",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Summer vacation research scholarship round)",
        fee: "AUD $0 application fee",
        tuition: "Zero tuition fees.",
        requirements: {
          gpa: "Undergraduate student in Exercise and Sports Science, Physiotherapy, or Biomedical Science with minimum GPA 5.5/7.0.",
          ielts: "Good English language proficiency.",
          gre: "Not applicable.",
          papers: "Coursework in human anatomy, biomechanics, or exercise physiology.",
          references: "One referee letter from a faculty lecturer."
        },
        desc: "Eight-week summer vacation research placement within the Tactical Research Unit (TRU), evaluating physical load monitoring, injury prevention, and ergonomic performance in military and tactical populations."
      },
      {
        id: 731,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Job",
        title: "Bond Postdoctoral Research Fellow in Health Systems & Meta-Research",
        source: "https://bond.edu.au/careers",
        funding: "Full-time salaried appointment (Level A/B): AUD $86,000 to $102,000/year plus 17% superannuation",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Open until filled)",
        fee: "AUD $0 application fee",
        tuition: "Not applicable; salaried university academic staff position.",
        requirements: {
          gpa: "PhD in Epidemiology, Public Health, Health Informatics, or Evidence-Based Medicine.",
          ielts: "Professional English fluency.",
          gre: "Not applicable.",
          papers: "First-author publications in high-impact medical journals (BMJ, Lancet, JAMA, Cochrane Reviews).",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral research fellow post at the Institute for Evidence-Based Healthcare, analyzing biases in clinical trial reporting, evaluating health policy evidence translation, and implementing meta-research methodologies."
      }
    ],
    researchers: [
      {
        id: 330,
        name: "Dr. Paul Glasziou",
        title: "Professor of Evidence-Based Practice and Director of IEBH",
        subject: "biology",
        topics: ["Evidence-Based Medicine", "Clinical Epidemiology", "Research Waste", "Antimicrobial Resistance"],
        source: "https://bond.edu.au/profile/paul-glasziou",
        summary: "Officer of the Order of Australia (AO), former Director of the Centre for Evidence-Based Medicine in Oxford, and globally recognized authority on reducing research waste and improving healthcare delivery.",
        recruiting: "Not verified"
      },
      {
        id: 331,
        name: "Dr. Tammy Hoffmann",
        title: "Professor of Clinical Epidemiology at IEBH",
        subject: "social-sciences",
        topics: ["Shared Decision Making", "Evidence Communication", "Informed Consent", "Health Literacy"],
        source: "https://bond.edu.au/profile/tammy-hoffmann",
        summary: "National Health and Medical Research Council (NHMRC) Senior Research Fellow, internationally celebrated for developing patient decision aids and pioneering shared decision-making methodologies in clinical practice.",
        recruiting: "Not verified"
      },
      {
        id: 332,
        name: "Dr. Wayne Hing",
        title: "Professor of Physiotherapy and Head of Program",
        subject: "biology",
        topics: ["Musculoskeletal Rehabilitation", "Sports Physiotherapy", "Biomechanics", "Joint Mechanics"],
        source: "https://bond.edu.au/profile/wayne-hing",
        summary: "Leading sports physiotherapist and musculoskeletal scholar, recognized internationally for anatomical research on the Mulligan Concept and clinical rehabilitation in elite athletic cohorts.",
        recruiting: "Not verified"
      }
    ]
  },

  // 3. GERMANY: Technical University Berlin (Row 369)
  {
    institution: "Technical University Berlin",
    shortName: "TU Berlin",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://www.tu.berlin",
    sourceRow: 369,
    slug: "technical-university-berlin",
    heroEyebrow: "Germany · Berlin · TU9 Excellence Giant & Einstein Center Digital Future · Reviewed 15 October 2026",
    headline: "Technical University Berlin (Technische Universität Berlin)",
    description: "Technical University Berlin guide: Zero tuition, UniSysCat Catalysis Doctoral Fellowships, Computer Science MSc, Einstein Digital Future, and faculty profiles.",
    overview: "Founded in 1879, Technical University Berlin (Technische Universität Berlin - TU Berlin) is a member of Germany's TU9 alliance of leading institutes of technology and a cornerstone of the Berlin University Alliance (an elite Consortium of Excellence). World-renowned for engineering, computer science, urban planning, and catalysis at the UniSysCat (Unifying Systems in Catalysis) Cluster of Excellence, TU Berlin educates over 35,000 students tuition-free in the heart of Germany's capital, powering European technological innovation.",
    admissions: {
      masters: "Accredited Bachelor's degree (minimum 180 ECTS) in a relevant engineering, natural science, or computing discipline with an above-average final grade (German grade 2.5 or better, equivalent to 75%+ or 3.0/4.0 GPA).",
      phd: "Recognized Master's degree (minimum 300 ECTS total) with a thesis graded 'good' (gut) or 'very good' (sehr gut); written supervision commitment (Betreuungszusage) from a TU Berlin professor.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 88 for English-taught master's degrees; German C1 (TestDaF 4x4 or DSH-2) for German-medium programs.",
      proposal: "A 5-page doctoral research proposal outlining state of the art, hypothesis, experimental design, and preliminary timeline.",
      appFee: "€0 application fee; no tuition fees charged at public German research universities.",
      documents: "Bachelor/Master diploma certificates, full academic transcripts, curriculum vitae, research proposal, and signed professor supervision agreement."
    },
    tuitionText: "TU Berlin charges zero tuition fees for all students regardless of nationality. Students pay only a mandatory semester fee (Semesterbeitrag) of approximately €315 per semester, which includes the Deutschlandticket semester public transit pass. Doctoral candidates are employed as academic staff on TV-L E13 salaried positions (€48,000 to €54,000/year gross) with complete health and pension coverage.",
    opportunities: [
      {
        id: 732,
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "physics"],
        type: "Scholarship",
        title: "TU Berlin UniSysCat Cluster of Excellence Doctoral Fellowships in Catalysis",
        source: "https://www.unisyscat.de/career/doctoral-researchers.html",
        funding: "Salaried TV-L E13 (65-75%) position: approx. €34,000 to €39,000/year gross plus travel funding; zero tuition",
        status: "open-scholarship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual international doctoral intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition; standard semester public transit contribution only (€315/term).",
        requirements: {
          gpa: "Master's degree in Chemistry, Chemical Engineering, Physics, or Biochemistry with German grade 2.0 or better.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated interest in electrocatalysis, bioinorganic chemistry, or photochemical water splitting.",
          references: "Two academic recommendation letters."
        },
        desc: "Doctoral research at Germany's premier Cluster of Excellence Unifying Systems in Catalysis (UniSysCat), investigating chemical and biological catalytic cascades to produce green fuels and sustainable chemical feedstocks."
      },
      {
        id: 733,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "TU Berlin PhD in Computer Science & Distributed Big Data Systems (BIFOLD)",
        source: "https://www.eecs.tu-berlin.de/menue/studium_lehre/promotion/",
        funding: "Full TV-L E13 (100%) research associate post: approx. €52,000/year gross with social security and pension; zero tuition",
        status: "open-phd",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Spring doctoral review)",
        fee: "€0 application fee",
        tuition: "€0 tuition at public German universities.",
        requirements: {
          gpa: "Master of Science in Computer Science, Data Science, or Computer Engineering with high honors.",
          ielts: "Proficient scientific English (IELTS 6.5 or equivalent).",
          gre: "Not required.",
          papers: "Master's thesis in distributed computing, database systems, or scalable stream processing.",
          references: "Two academic reference letters."
        },
        desc: "Doctoral research conducted within the Berlin Institute for the Foundations of Learning and Data (BIFOLD), developing next-generation database architectures, distributed query optimizers, and scalable ML infrastructures."
      },
      {
        id: 734,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "TU Berlin Master of Science (MSc) in Computer Science (English-Taught)",
        source: "https://www.eecs.tu-berlin.de/menue/studium_lehre/studiengaenge/master_computer_science/",
        funding: "DAAD Master Studies Scholarships and Deutschlandstipendium (€300/month merit stipend); zero tuition",
        status: "open-master",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Non-EU international applicant deadline for Winter semester)",
        fee: "€0 application fee",
        tuition: "€0 tuition; €315 semester transit fee only.",
        requirements: {
          gpa: "BSc in Computer Science or closely related field with minimum 120 ECTS in computing and theoretical foundations.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Strong coursework in algorithms, complexity theory, operating systems, and computer networks.",
          references: "One academic letter of recommendation."
        },
        desc: "Tuition-free two-year Master of Science taught entirely in English in Berlin, covering artificial intelligence, cognitive algorithms, distributed systems, and computer security."
      },
      {
        id: 735,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "TU Berlin Master of Science (MSc) in Sustainable Energy Systems",
        source: "https://www.tu.berlin/en/studying/study-programs/all-programs-offered/detail/sustainable-energy-systems-m-sc",
        funding: "Erasmus+ and German industrial foundation study grants; zero tuition",
        status: "open-master",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (International intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition.",
        requirements: {
          gpa: "Bachelor's degree in mechanical, electrical, or energy engineering with German grade 2.5 or better.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Undergraduate coursework in thermodynamics, power engineering, and renewable energy.",
          references: "One academic referee appraisal."
        },
        desc: "Two-year interdisciplinary Master's degree examining smart electricity grids, renewable power integration, thermal energy storage, and industrial energy efficiency in European energy markets."
      },
      {
        id: 736,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        title: "Einstein Center Digital Future (ECDF) Postdoctoral Research Fellow",
        source: "https://www.digital-future.berlin/en/career/",
        funding: "TV-L E13 (100%) full salaried research post: approx. €52,000 to €56,000/year gross plus research budget",
        status: "open-research",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual ECDF research fellowship cycle)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried postdoctoral position.",
        requirements: {
          gpa: "PhD in Computer Science, Information Systems, Digital Health, or Urban Informatics.",
          ielts: "Fluent working English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in digital transformation, IoT infrastructures, or cybersecurity.",
          references: "Two academic recommendation letters."
        },
        desc: "Interdisciplinary research appointment at the Einstein Center Digital Future in Berlin, investigating smart city data infrastructures, trusted AI systems, and digital health technologies."
      },
      {
        id: 737,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Internship",
        title: "TU Berlin Institute of Optics & Atomic Physics Summer Traineeship",
        source: "https://www.ioap.tu-berlin.de/menue/studium_und_lehre/",
        funding: "€1,100/month living stipend for 8 weeks plus laboratory laser access",
        status: "open-internship",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Summer 2027 traineeship call)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Enrolled in Bachelor's or early Master's in Physics, Photonics, or Materials Science with high marks.",
          ielts: "Good English language proficiency.",
          gre: "Not applicable.",
          papers: "Completed coursework in quantum mechanics, optics, or laser physics.",
          references: "One professor recommendation letter."
        },
        desc: "Two-month summer research traineeship investigating semiconductor quantum dots, single-photon sources, and terahertz spectroscopy in advanced optical physics laboratories."
      },
      {
        id: 738,
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        type: "Job",
        title: "TU Berlin Postdoctoral Research Associate in Green Hydrogen Production & Electrolysis",
        source: "https://www.tu.berlin/en/about/work-at-tu-berlin/vacancies",
        funding: "Full TV-L E13 (100%) postdoctoral salary: approx. €52,000 to €58,000/year gross with public sector benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Formal academic search deadline)",
        fee: "€0 application fee",
        tuition: "Not applicable; full-time salaried academic staff appointment.",
        requirements: {
          gpa: "PhD in Chemical Engineering, Mechanical Engineering, or Materials Science within the last 4 years.",
          ielts: "Professional English fluency (German language skills advantageous).",
          gre: "Not applicable.",
          papers: "Track record of peer-reviewed publications in PEM water electrolysis, catalyst development, or electrochemical reactors.",
          references: "Three academic reference contacts."
        },
        desc: "Full-time academic research appointment in the Department of Process Engineering, engineering scalable membrane electrode assemblies (MEA) and pressurized water electrolysis stacks for industrial green hydrogen generation."
      }
    ],
    researchers: [
      {
        id: 333,
        name: "Dr. Volker Markl",
        title: "Professor of Database Systems and Information Management and Co-Director of BIFOLD",
        subject: "computer-science",
        topics: ["Big Data Systems", "Scalable Data Analytics", "Distributed Databases", "Machine Learning Systems"],
        source: "https://www.tu.berlin/dima/ueber-uns/team/prof-dr-volker-markl",
        summary: "ACM Fellow, Humboldt Professor, and leading computer scientist pioneering distributed big data architectures, declarative data processing, and scalable machine learning frameworks at BIFOLD.",
        recruiting: "Not verified"
      },
      {
        id: 334,
        name: "Dr. Matthias Drieß",
        title: "Professor of Metalorganics and Inorganic Materials and UniSysCat Spokesperson",
        subject: "chemistry",
        topics: ["Catalysis", "Organometallic Chemistry", "Silicon Chemistry", "Green Hydrogen"],
        source: "https://www.tu.berlin/chemie/driess/team/prof-dr-matthias-driess",
        summary: "Gottfried Wilhelm Leibniz Prize winner and spokesperson for the UniSysCat Cluster of Excellence, internationally acclaimed for pioneering silicon-based molecular catalysts and artificial photosynthetic assemblies.",
        recruiting: "Not verified"
      },
      {
        id: 335,
        name: "Dr. Sahin Albayrak",
        title: "Professor of Agent Core Technologies and Head of DAI-Labor",
        subject: "computer-science",
        topics: ["Artificial Intelligence", "Smart Cities", "Autonomous Driving", "Cyber-Physical Systems"],
        source: "https://www.dai-labor.de/en/team/prof-dr-dr-h-c-sahin-albayrak/",
        summary: "Founder and head of DAI-Labor at TU Berlin, holder of the Order of Merit of Berlin, and leading authority on multi-agent systems, connected autonomous driving, and smart urban infrastructure.",
        recruiting: "Not verified"
      }
    ]
  },

  // 4. ITALY: Università Ca' Foscari (Row 539)
  {
    institution: "Università Ca' Foscari",
    shortName: "Ca' Foscari",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Venice, Veneto, Italy",
    website: "https://www.unive.it",
    sourceRow: 539,
    slug: "universita-ca-foscari",
    heroEyebrow: "Italy · Veneto · Venice Historic Research Hub & Environmental Humanities Leader · Reviewed 15 October 2026",
    headline: "Università Ca' Foscari (Ca' Foscari University of Venice)",
    description: "Ca' Foscari University guide: Full doctoral fellowships (€16,243/yr net), PhD in Science and Management of Climate Change, Economics, Venice Lagoon, and faculty profiles.",
    overview: "Founded in 1868 as Italy's first business school, Università Ca' Foscari Venezia is a world-class public university housed in gothic palazzi overlooking the Grand Canal of Venice. Globally celebrated for economics, management, Asian and Middle Eastern languages and cultures, environmental humanities, and climate science, Ca' Foscari hosts Italy's foremost doctoral program in the Science and Management of Climate Change (in collaboration with the Euro-Mediterranean Center on Climate Change - CMCC) and expansive European research projects.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years, equivalent to Italian Laurea) with strong academic standing (minimum 70% or 3.0/4.0 GPA); subject-specific curricular prerequisites in economics, humanities, or sciences.",
      phd: "Recognized second-cycle Master's degree (Italian Laurea Magistrale or equivalent) with high honors; passing evaluation in the annual public competitive entrance exam (dottorato di ricerca).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 85; B2 certificate accepted for several English-taught Laurea Magistrale curricula.",
      proposal: "A formal doctoral research proposal of 3,000 to 5,000 words outlining research questions, literature review, methodology, and expected impact.",
      appFee: "€30 public competition application fee submitted via the Ca' Foscari online application portal.",
      documents: "Graduation diploma with official translation, academic transcript of records, detailed curriculum vitae, research project proposal, and 2 letters of reference."
    },
    tuitionText: "Tuition fees at Ca' Foscari are calculated on a progressive scale according to the student's family economic situation (ISEE Parificato). For international students from non-OECD countries, tuition is capped at €156 to €1,200 per year. Admitted doctoral candidates receive fully funded state scholarships of approximately €1,400 net per month (€16,243/year gross) plus a 50% stipend increase during research periods abroad and €3,000 research mobility allowances.",
    opportunities: [
      {
        id: 739,
        subject: "environment",
        subjects: ["environment", "social-sciences", "physics"],
        type: "Scholarship",
        title: "Ca' Foscari PhD Scholarships in Science and Management of Climate Change",
        source: "https://www.unive.it/pag/25684/",
        funding: "Fully funded: €16,243/year net for 3 to 4 years, 50% stipend increase for stays abroad, and €3,000 research travel grant; zero tuition",
        status: "open-scholarship",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual Italian National Doctoral Call - 43rd Cycle)",
        fee: "€30 public competition application fee",
        tuition: "100% full tuition waiver for all admitted doctoral fellowship holders.",
        requirements: {
          gpa: "Second-cycle Master's degree in Environmental Science, Economics, Climatology, or Applied Mathematics with high marks.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Demonstrated academic merit, thesis abstract, and proposed research plan for climate economics or earth system modelling.",
          references: "Two academic recommendation letters submitted online."
        },
        desc: "Joint doctoral research program with the Euro-Mediterranean Center on Climate Change (CMCC), training future leaders in climate dynamics, vulnerability assessment, adaptation economics, and international climate treaties."
      },
      {
        id: 740,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "Ca' Foscari Master of Science (Laurea Magistrale) in Economics and Finance (English-Taught)",
        source: "https://www.unive.it/pag/25608/",
        funding: "Ca' Foscari International Student Scholarships (€5,000/year) and Veneto regional ESU full meal and accommodation grants",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-EU international intake round 2)",
        fee: "€30 pre-evaluation fee",
        tuition: "Progressive income-based tuition: €156 to €2,200/year based on ISEE Parificato.",
        requirements: {
          gpa: "Bachelor's degree in Economics, Business, Mathematics, or Statistics with minimum 75% average.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated coursework in microeconomics, macroeconomics, econometrics, and calculus.",
          references: "One academic referee letter."
        },
        desc: "Two-year international Master of Science in English offering specialized tracks in Quantitative Finance, Risk Management, and Sustainable Economics at Ca' Foscari's Department of Economics in San Giobbe."
      },
      {
        id: 741,
        subject: "environment",
        subjects: ["environment", "chemistry"],
        type: "PhD",
        title: "Ca' Foscari PhD in Environmental Sciences & Coastal Lagoon Dynamics",
        source: "https://www.unive.it/pag/25686/",
        funding: "Italian PNRR & university fellowship: €16,243/year plus lagoon research vessel sampling allowances",
        status: "open-phd",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 (Annual public competition deadline)",
        fee: "€30 application fee",
        tuition: "100% full tuition waiver.",
        requirements: {
          gpa: "Master of Science in Environmental Sciences, Oceanography, Chemistry, or Geosciences.",
          ielts: "English B2/C1 proficiency.",
          gre: "Not required.",
          papers: "Original research proposal on coastal wetland conservation, biogeochemical sediment tracking, or microplastic pollution.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted at the Scientific Campus in Via Torino, leveraging the Venice Lagoon natural laboratory to investigate marine sediment contamination, sea level rise impacts, and coastal wetland restoration."
      },
      {
        id: 742,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Master",
        title: "Ca' Foscari Master of Arts in Cultural Heritage and Digital Humanities",
        source: "https://www.unive.it/pag/39328/",
        funding: "Veneto ESU regional study bursaries and departmental academic achievement awards",
        status: "open-master",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (International applicant round)",
        fee: "€30 application fee",
        tuition: "€156 to €1,800/year based on family income.",
        requirements: {
          gpa: "Bachelor's degree in Humanities, Art History, Archaeology, or Cultural Heritage with good academic rank.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Statement of purpose detailing interest in digital archival methods, 3D cultural modeling, or heritage conservation.",
          references: "One academic letter of recommendation."
        },
        desc: "Two-year English-taught Master's program combining Venetian art history, architectural heritage preservation, photogrammetry, and digital archiving for global museums and cultural institutions."
      },
      {
        id: 743,
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Research",
        title: "The New Institute Centre for Environmental Humanities (NICHE) Postdoctoral Fellowship",
        source: "https://www.unive.it/niche",
        funding: "Assegno di Ricerca (Research Fellowship): €26,000 to €30,000/year net plus travel allowances",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Research grant review round)",
        fee: "€0 application fee",
        tuition: "Not applicable; research fellowship appointment.",
        requirements: {
          gpa: "PhD in Environmental Humanities, Philosophy, Geography, Literature, or Environmental History.",
          ielts: "Fluent working English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications on climate narratives, water ecologies, or socio-ecological justice.",
          references: "Two professional reference letters."
        },
        desc: "Postdoctoral research fellowship at NICHE in Venice, exploring coastal human-water relationships, environmental literature, and public humanities responses to ecological crises."
      },
      {
        id: 744,
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        type: "Internship",
        title: "Ca' Foscari Polar Science & Ice Core Chemistry Summer Traineeship",
        source: "https://www.unive.it/pag/27840/",
        funding: "€1,000/month living stipend for 8 weeks with ultra-clean analytical chemistry cleanroom access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer 2027 laboratory traineeship call)",
        fee: "€0 application fee",
        tuition: "No tuition charges during traineeship.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Chemistry, Environmental Science, or Geosciences with excellent marks.",
          ielts: "English B2 level.",
          gre: "Not applicable.",
          papers: "Laboratory training in mass spectrometry, chromatography, or trace element analysis.",
          references: "One professor recommendation letter."
        },
        desc: "Eight-week summer research placement at the Institute of Polar Sciences (CNR-ISP) on the Ca' Foscari scientific campus, analyzing trace organic markers and paleoclimate dust in Alpine and Antarctic ice cores."
      },
      {
        id: 745,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Job",
        title: "Ca' Foscari Assistant Professor (RTD-A) in Sustainable Finance & ESG Metrics",
        source: "https://www.unive.it/pag/29443/",
        funding: "Full 3-year fixed-term Assistant Professor contract: €38,000 to €44,000/year gross with INPS pension coverage",
        status: "open-job",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Public academic competition closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; junior faculty academic position.",
        requirements: {
          gpa: "PhD in Finance, Economics, or Management awarded at least 1 year prior.",
          ielts: "Fluent Italian and English teaching and research capabilities.",
          gre: "Not applicable.",
          papers: "Minimum 6 peer-reviewed publications in top finance and banking journals.",
          references: "Three academic reference contacts."
        },
        desc: "Three-year fixed-term Assistant Professorship (Ricercatore a Tempo Determinato Tipologia A) at the Department of Management, conducting empirical research on green bonds, ESG investment metrics, and climate financial risk."
      }
    ],
    researchers: [
      {
        id: 336,
        name: "Dr. Carlo Barbante",
        title: "Professor of Analytical Chemistry and Director of the Institute of Polar Sciences",
        subject: "chemistry",
        topics: ["Paleoclimatology", "Ice Core Chemistry", "Trace Element Geochemistry", "Polar Sciences"],
        source: "https://www.unive.it/data/persone/5591244",
        summary: "Elected member of the Accademia dei Lincei, recipient of multiple ERC Advanced Grants, and leader of international ice core drilling expeditions (Beyond EPICA - Oldest Ice) in Antarctica.",
        recruiting: "Not verified"
      },
      {
        id: 337,
        name: "Dr. Enrica De Cian",
        title: "Professor of Environmental Economics and ERC Grantee",
        subject: "social-sciences",
        topics: ["Climate Change Economics", "Energy Demand", "Adaptation Policy", "Environmental Econometrics"],
        source: "https://www.unive.it/data/persone/11728362",
        summary: "Principal Investigator of the ERC project ENERGY-A, internationally celebrated for pioneering econometric models forecasting global cooling demand and human adaptation to rising temperatures.",
        recruiting: "Not verified"
      },
      {
        id: 338,
        name: "Dr. Andrea Gambaro",
        title: "Professor of Environmental Chemistry and Dean of the Department of Environmental Sciences",
        subject: "environment",
        topics: ["Environmental Chemistry", "Aerosol Science", "Pollution Dynamics", "Marine Chemistry"],
        source: "https://www.unive.it/data/persone/5591448",
        summary: "Leading environmental chemist specializing in atmospheric aerosols, trace organic pollutants in fragile ecosystems, and chemical characterization of polar snow and marine atmospheres.",
        recruiting: "Not verified"
      }
    ]
  },

  // 5. USA: University of Pennsylvania (Row 1146)
  {
    institution: "University of Pennsylvania",
    shortName: "Penn",
    countryId: "usa",
    countryLabel: "United States",
    location: "Philadelphia, Pennsylvania, United States",
    website: "https://www.upenn.edu",
    sourceRow: 1146,
    slug: "university-of-pennsylvania",
    heroEyebrow: "United States · Pennsylvania · Ivy League Powerhouse & mRNA Vaccine Pioneer · Reviewed 15 October 2026",
    headline: "University of Pennsylvania",
    description: "University of Pennsylvania guide: 100% fully funded PhD packages ($43,000+ stipend), Penn Engineering Computer Science PhD, mRNA vaccine medicine, and faculty profiles.",
    overview: "Founded in 1740 by Benjamin Franklin, the University of Pennsylvania (Penn) is an Ivy League research powerhouse and one of the nine colonial colleges founded before the American Declaration of Independence. Home to the legendary Wharton School, Penn Medicine (where Nobel laureates Katalin Karikó and Drew Weissman pioneered mRNA vaccine technology), Penn Engineering, and the School of Arts and Sciences, Penn commands over $1.4 billion in annual sponsored research, guaranteeing full multi-year doctoral funding fellowships for all admitted PhD candidates.",
    admissions: {
      masters: "Accredited Bachelor's degree with a superior academic record (minimum 3.5/4.0 GPA or equivalent first-class standing); prerequisite technical coursework in relevant engineering or scientific disciplines.",
      phd: "Recognized Bachelor's or Master's degree with distinguished academic honors; demonstrated capacity for high-impact independent research through publications or honors theses.",
      language: "Academic IELTS 7.5 overall (minimum 7.0 in speaking) or TOEFL iBT 100 (minimum 24 in all sections); higher for Computer Science and Biomedical Graduate Studies.",
      proposal: "A 2-page Statement of Purpose detailing intellectual background, research problems of interest, faculty mentors with whom the applicant wishes to work, and future scholarly aspirations.",
      appFee: "$90 to $100 non-refundable application fee submitted via the Penn Graduate Admissions system (application fee waivers available for eligible scholars).",
      documents: "Complete official academic transcripts, curriculum vitae, 3 academic letters of recommendation, statement of purpose, and GRE scores (where specified by individual departments)."
    },
    tuitionText: "The University of Pennsylvania provides full 5-year guaranteed funding packages to all admitted PhD students in good academic standing. The standard doctoral package covers 100% of full tuition ($46,000/year graduate rate), comprehensive Penn Student Insurance Plan (PSIP, valued at over $4,200/year), full general university fees, and an annual living stipend of $43,000 to $46,500 for 10 to 12 months (combining Penn fellowships, research assistantships, and teaching fellowships).",
    opportunities: [
      {
        id: 746,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        title: "Penn Biomedical Graduate Studies (BGS) Fully Funded Doctoral Fellowships",
        source: "https://www.med.upenn.edu/bgs/financial-support.html",
        funding: "100% Fully Funded: Annual living stipend of $45,000/year for 5 years, complete tuition waiver ($46,000/year), and full PSIP health and dental insurance",
        status: "open-scholarship",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Annual BGS doctoral admission and fellowship deadline)",
        fee: "$90 application fee (waiver available)",
        tuition: "100% covered by university doctoral fellowship awards.",
        requirements: {
          gpa: "Minimum 3.7/4.0 GPA in undergraduate biological, chemical, or quantitative sciences.",
          ielts: "Academic IELTS 7.5 overall or TOEFL iBT 100.",
          gre: "GRE General Test is not required.",
          papers: "Substantial undergraduate wet-lab research experience or co-authored scientific publications.",
          references: "Three detailed letters of recommendation from research mentors."
        },
        desc: "World-leading doctoral training across 7 biomedical graduate groups at Penn Medicine (home of Nobel Prize-winning mRNA technology), providing five years of guaranteed living stipends, healthcare, and tuition waivers."
      },
      {
        id: 747,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        title: "Penn Engineering PhD in Computer and Information Science (CIS)",
        source: "https://www.cis.upenn.edu/graduate/program-offerings/phd-in-cis/",
        funding: "100% Fully funded for 5 years: $44,500 annual stipend plus full tuition waiver and comprehensive health coverage",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual PhD intake deadline for Fall 2027)",
        fee: "$90 application fee",
        tuition: "Full tuition waiver provided by the School of Engineering and Applied Science.",
        requirements: {
          gpa: "Strong academic foundation in computer science, mathematics, or physics (typically 3.8+ GPA).",
          ielts: "Academic IELTS 7.5 (minimum 7.0 in all bands) or TOEFL iBT 100.",
          gre: "GRE General Test optional.",
          papers: "Demonstrated research excellence, conference publications, or rigorous systems/algorithmic work.",
          references: "Three academic reference letters from faculty familiar with research ability."
        },
        desc: "Top-ranked doctoral program in computer science, offering cutting-edge research in machine learning, natural language processing, computer vision, robotics (GRASP Lab), database systems, and cryptography."
      },
      {
        id: 748,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master",
        title: "Penn Engineering Master of Science in Engineering (MSE) in Robotics (GRASP Lab)",
        source: "https://www.grasp.upenn.edu/academics/masters-program/",
        funding: "Departmental merit fellowships and graduate research assistantships available",
        status: "open-master",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall admission deadline)",
        fee: "$90 application fee",
        tuition: "$34,500/year standard tuition for engineering master's programs.",
        requirements: {
          gpa: "Bachelor's degree in engineering, computer science, or mathematics with minimum 3.5 GPA.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "GRE recommended.",
          papers: "Coursework or project portfolio in linear algebra, feedback control, kinematics, or computer vision.",
          references: "Two academic letters of recommendation."
        },
        desc: "Prestigious interdisciplinary Master of Science delivered by the world-famous General Robotics, Automation, Sensing & Perception (GRASP) Laboratory, investigating autonomous flying micro-drones, legged locomotion, and surgical robotics."
      },
      {
        id: 749,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "PhD",
        title: "Penn PhD in Physics and Astronomy - Quantum Matter & Nanotechnology",
        source: "https://www.physics.upenn.edu/graduate/phd-program",
        funding: "100% Fully funded: $43,500 annual stipend, complete tuition coverage, and Penn health insurance",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Fall 2027 admission)",
        fee: "$90 application fee",
        tuition: "Full tuition waiver included with doctoral fellowship.",
        requirements: {
          gpa: "Bachelor's degree in physics, applied physics, or materials science with high honors (minimum 3.6 GPA).",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE Physics subject test strongly recommended.",
          papers: "Undergraduate research in condensed matter physics, quantum materials, or astrophysics.",
          references: "Three letters of recommendation."
        },
        desc: "Doctoral research conducted within the Laboratory for Research on the Structure of Matter (LRSM) and the Singh Center for Nanotechnology, investigating 2D materials, topological quantum matter, and quantum optics."
      },
      {
        id: 750,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Penn Perry World House Postdoctoral Fellowship in International Affairs",
        source: "https://global.upenn.edu/perryworldhouse/postdoctoral-fellowships",
        funding: "Annual salary of $65,000 plus full Penn benefits package and $6,000 research and conference travel fund",
        status: "open-research",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Postdoctoral Fellowship competition)",
        fee: "$0 application fee",
        tuition: "Not applicable; salaried postdoctoral fellowship.",
        requirements: {
          gpa: "PhD in Political Science, International Relations, Public Policy, Economics, or Law.",
          ielts: "Proficient professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications on global order, international security, technology policy, or human rights.",
          references: "Three letters of recommendation."
        },
        desc: "Two-year postdoctoral appointment at Perry World House, Penn's global policy hub, connecting academic research with international policymakers on emerging technologies, climate security, and international governance."
      },
      {
        id: 751,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Penn GRASP Lab Summer Robotics Research Internship (REU)",
        source: "https://www.grasp.upenn.edu/outreach/reu/",
        funding: "$6,000 10-week summer stipend plus on-campus housing and travel allowance",
        status: "open-internship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer 2027 undergraduate research program)",
        fee: "$0 application fee",
        tuition: "$0 tuition; all costs covered by the National Science Foundation (NSF REU).",
        requirements: {
          gpa: "Enrolled undergraduate in engineering, computer science, or robotics with minimum 3.3 GPA.",
          ielts: "Fluent English communication skills.",
          gre: "Not applicable.",
          papers: "Completed coursework in robotics, programming (C++/Python), or control systems.",
          references: "Two faculty recommendation letters."
        },
        desc: "Ten-week National Science Foundation REU summer research traineeship at the GRASP Lab, collaborating with world-leading roboticists on autonomous drone navigation, multi-robot coordination, and tactile robotic hands."
      },
      {
        id: 752,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Job",
        title: "Penn Medicine Postdoctoral Researcher in mRNA Therapeutics & Lipid Nanoparticles",
        source: "https://www.med.upenn.edu/postdoc/",
        funding: "Salaried Postdoctoral Researcher: $68,000 to $75,000/year plus Penn health, vision, and retirement benefits",
        status: "open-job",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Open until filled)",
        fee: "$0 application fee",
        tuition: "Not applicable; full-time salaried academic staff appointment.",
        requirements: {
          gpa: "PhD in Biochemistry, Molecular Biology, Pharmacology, Bioengineering, or Chemical Biology within the last 3 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in RNA biology, lipid nanoparticle delivery, or in vivo translational pharmacology.",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral research role at the Penn Institute for RNA Innovation, designing next-generation modified mRNA sequences, organ-specific lipid nanoparticles (LNPs), and therapeutic cancer vaccines."
      }
    ],
    researchers: [
      {
        id: 339,
        name: "Dr. Drew Weissman",
        title: "Roberts Family Professor in Vaccine Research and Nobel Laureate in Physiology or Medicine",
        subject: "biology",
        topics: ["mRNA Vaccines", "Immunology", "Lipid Nanoparticles", "Infectious Diseases"],
        source: "https://www.med.upenn.edu/apps/faculty/index.php/g275/p16238",
        summary: "Co-recipient of the 2023 Nobel Prize in Physiology or Medicine with Katalin Karikó for foundational discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines against COVID-19.",
        recruiting: "Not verified"
      },
      {
        id: 340,
        name: "Dr. Vijay Kumar",
        title: "Professor of Mechanical Engineering and Dean of Penn Engineering",
        subject: "engineering",
        topics: ["Aerial Robotics", "Autonomous Swarms", "Multi-Robot Systems", "Micro-UAVs"],
        source: "https://www.kumarrobotics.org",
        summary: "Former Director of the GRASP Lab, member of the National Academy of Engineering, and world pioneer in autonomous micro-aerial vehicles, drone swarming algorithms, and agile robotic flight.",
        recruiting: "Not verified"
      },
      {
        id: 341,
        name: "Dr. Michael Kearns",
        title: "National Center Professor of Computer and Information Science",
        subject: "computer-science",
        topics: ["Machine Learning", "Algorithmic Fairness", "Computational Finance", "Game Theory"],
        source: "https://www.cis.upenn.edu/~mkearns/",
        summary: "Elected member of the National Academy of Sciences and co-author of 'The Ethical Algorithm', celebrated for pioneering contributions to computational learning theory, algorithmic game theory, and privacy-preserving AI.",
        recruiting: "Not verified"
      }
    ]
  },

  // 6. UK: Cardiff University (Row 1244)
  {
    institution: "Cardiff University",
    shortName: "Cardiff",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Cardiff, Wales, United Kingdom",
    website: "https://www.cardiff.ac.uk",
    sourceRow: 1244,
    slug: "cardiff-university",
    heroEyebrow: "United Kingdom · Wales · Russell Group Research Giant & Compound Semiconductor Hub · Reviewed 15 October 2026",
    headline: "Cardiff University (Prifysgol Caerdydd)",
    description: "Cardiff University guide: Fully funded UKRI PhD studentships (£19,237+ stipend), Compound Semiconductor Applications Catapult, Brain Research Imaging Centre (CUBRIC), and faculty profiles.",
    overview: "Founded in 1883 by Royal Charter, Cardiff University (Prifysgol Caerdydd) is the only Welsh member of the prestigious Russell Group of research-intensive UK universities. Ranked among the top 150 universities globally, Cardiff is celebrated for world-leading research in brain imaging at the Cardiff University Brain Research Imaging Centre (CUBRIC), compound semiconductor engineering at the Institute for Compound Semiconductors (ICS), gravitational physics (co-discovering gravitational waves at LIGO), and the world-renowned School of Journalism, Media and Culture.",
    admissions: {
      masters: "UK Upper Second Class Honours degree (2:1) or international equivalent (minimum 65-70% or 3.2/4.0 GPA) in an appropriate field; quantitative computing and engineering require solid mathematics preparation.",
      phd: "Recognized Master's degree with Merit or Distinction (or UK 2:1 Honours degree with demonstrable research experience) and a rigorous academic research proposal.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 90; Medicine, Journalism, and Law require IELTS 7.0 (minimum 6.5 in all bands).",
      proposal: "A formal research proposal of 1,500 to 2,500 words outlining research questions, literature context, methodology, equipment needs, and identified Cardiff academic supervisor.",
      appFee: "£0 application fee for postgraduate research (PhD) applications; £25 for selected taught master's degrees.",
      documents: "Complete official academic transcripts, degree award certificates, 2 academic reference letters, detailed research proposal, and personal statement."
    },
    tuitionText: "Full-time doctoral researchers awarded UKRI (EPSRC, MRC, BBSRC, ESRC, STFC) studentships or Cardiff University Doctoral Academy Scholarships receive 100% full tuition fee coverage (at home/international rates) and an annual tax-free living stipend of at least £19,237 per year (aligned with UKRI national rates) plus an annual research training support grant (RTSG) for consumables and conference travel.",
    opportunities: [
      {
        id: 753,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Scholarship",
        title: "Cardiff EPSRC Centre for Doctoral Training in Compound Semiconductor Manufacturing",
        source: "https://www.cardiff.ac.uk/study/postgraduate/research/programmes/programme/compound-semiconductor-manufacturing",
        funding: "Fully funded: Annual tax-free stipend of £19,237/year for 4 years, 100% full tuition fee waiver, and £5,000/year research consumables allowance",
        status: "open-scholarship",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Priority round for October 2027 commencement)",
        fee: "£0 application fee for research programs",
        tuition: "Full tuition waiver covered by EPSRC and Cardiff Institute for Compound Semiconductors.",
        requirements: {
          gpa: "UK first-class honours degree or 2:1 Master's (or international equivalent) in Electrical Engineering, Physics, or Materials Science.",
          ielts: "Academic IELTS 6.5 with at least 6.0 in each band.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in semiconductor physics, electromagnetics, or solid-state devices.",
          references: "Two academic referee letters from university lecturers."
        },
        desc: "Doctoral training conducted at the £75 million Institute for Compound Semiconductors (ICS) within the CSconnected cluster, developing high-speed optoelectronics, power electronics, and 5G/6G photonics."
      },
      {
        id: 754,
        subject: "biology",
        subjects: ["biology", "physics"],
        type: "PhD",
        title: "Cardiff PhD in Cognitive Neuroscience & Neuroimaging at CUBRIC",
        source: "https://www.cardiff.ac.uk/cardiff-university-brain-research-imaging-centre/study-with-us",
        funding: "MRC-funded 4-year doctoral studentship: £19,237 annual stipend plus full tuition and ultra-high field MRI scan time",
        status: "open-phd",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Medical Research Council doctoral round)",
        fee: "£0 application fee",
        tuition: "100% full tuition coverage.",
        requirements: {
          gpa: "Upper second-class or first-class undergraduate/Master's degree in psychology, neuroscience, physics, or biomedical engineering.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5.",
          gre: "Not required.",
          papers: "Research experience in neuroimaging data analysis (fMRI, MEG, EEG) or Python/MATLAB programming.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted at the Cardiff University Brain Research Imaging Centre (CUBRIC), utilizing one of Europe's most powerful MRI scanners (Siemens 7T and Connectom 3T) to map human brain microstructure and connectivity."
      },
      {
        id: 755,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Cardiff Master of Science (MSc) in Advanced Computer Science with AI",
        source: "https://www.cardiff.ac.uk/study/postgraduate/taught/courses/course/advanced-computer-science-msc",
        funding: "Cardiff International Excellence Scholarships (£3,000 to £6,000 tuition fee reductions)",
        status: "open-master",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (International intake deadline for September 2027)",
        fee: "£0 application fee",
        tuition: "£27,450 full international tuition fee (before scholarship deductions).",
        requirements: {
          gpa: "UK 2:1 Honours degree (or equivalent GPA 3.3/4.0) in Computer Science with substantial programming.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all sub-tests) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Strong academic record in algorithms, data structures, and software engineering.",
          references: "One academic reference letter."
        },
        desc: "British Computer Society (BCS) accredited one-year Master of Science offering specialized modules in deep learning, automated reasoning, computer vision, and distributed high-performance cloud computing."
      },
      {
        id: 756,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "Cardiff School of Journalism Master of Arts (MA) in International Journalism",
        source: "https://www.cardiff.ac.uk/study/postgraduate/taught/courses/course/international-journalism-ma",
        funding: "British Council and Chevening Scholarship partnerships for international scholars",
        status: "open-master",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (Autumn intake)",
        fee: "£25 application fee",
        tuition: "£25,450 annual international tuition.",
        requirements: {
          gpa: "UK 2:1 Honours degree in any subject with demonstrable interest in global media.",
          ielts: "Academic IELTS 7.0 overall with at least 6.5 in all sub-scores.",
          gre: "Not required.",
          papers: "Portfolio of published journalistic writing or analytical broadcast reporting.",
          references: "Two academic or professional journalistic references."
        },
        desc: "World-renowned international journalism program located in Cardiff's flagship Central Square building adjacent to BBC Cymru Wales, training correspondents in investigative reporting, digital multimedia, and broadcast documentary."
      },
      {
        id: 757,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "PhD",
        title: "Cardiff PhD in Gravitational Physics & Astrophysics (LIGO Scientific Collaboration)",
        source: "https://www.cardiff.ac.uk/physics-astronomy/research/research-groups/gravity-exploration-institute",
        funding: "STFC-funded 3.5-year PhD studentship: £19,237 annual stipend plus full tuition waiver and supercomputing access",
        status: "open-phd",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Science and Technology Facilities Council round)",
        fee: "£0 application fee",
        tuition: "Fully sponsored by STFC and Cardiff Gravity Exploration Institute.",
        requirements: {
          gpa: "First-class or 2:1 Master's degree in Physics, Astronomy, or Applied Mathematics.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands).",
          gre: "Not required.",
          papers: "Demonstrated knowledge in general relativity, gravitational wave data analysis, or numerical relativity.",
          references: "Two academic referee letters from university faculty."
        },
        desc: "Doctoral research conducted within the Gravity Exploration Institute, developing numerical relativity waveforms, gravitational wave detection algorithms, and astrophysical interpretation for the LIGO-Virgo-KAGRA network."
      },
      {
        id: 758,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Internship",
        title: "Cardiff Catalysis Institute (CCI) Summer Research Fellowship",
        source: "https://www.cardiff.ac.uk/cardiff-catalysis-institute/study-with-us",
        funding: "£2,400 8-week summer stipend with pilot reactor and XPS surface spectroscopy access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer undergraduate research call)",
        fee: "£0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate student in Chemistry, Chemical Engineering, or Materials Science with minimum 65% average.",
          ielts: "Proficient scientific English.",
          gre: "Not applicable.",
          papers: "Completed coursework in physical chemistry, catalysis, or chemical kinetics.",
          references: "One academic tutor reference letter."
        },
        desc: "Eight-week mentored summer research project investigating gold catalysis, CO2 utilization, and sustainable bio-derived chemical transformations at the Cardiff Catalysis Institute."
      },
      {
        id: 759,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Job",
        title: "Cardiff Research Associate in Compound Semiconductor Photonics",
        source: "https://www.cardiff.ac.uk/jobs",
        funding: "Full-time salaried appointment: £37,099 to £44,263/year plus USS pension scheme",
        status: "open-job",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Formal academic search deadline)",
        fee: "£0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Optoelectronics, Semiconductor Physics, or Electrical Engineering.",
          ielts: "Exemplary English research communication skills.",
          gre: "Not applicable.",
          papers: "Proven publication record in III-V semiconductor laser fabrication, photonic integrated circuits, or cleanroom processing.",
          references: "Three academic reference contacts."
        },
        desc: "Full-time research role at the Institute for Compound Semiconductors, fabricating photonic integrated devices, quantum well lasers, and optical transceivers for next-generation telecommunication networks."
      }
    ],
    researchers: [
      {
        id: 342,
        name: "Dr. Derek Jones",
        title: "Professor of Cognitive Neuroscience and Director of CUBRIC",
        subject: "biology",
        topics: ["Diffusion MRI", "Brain Microstructure", "Tractography", "Neuroimaging Physics"],
        source: "https://www.cardiff.ac.uk/people/view/100454-jones-derek",
        summary: "World-renowned pioneer in diffusion MRI and white matter tractography, author of 'Diffusion MRI: Theory, Methods, and Applications', and Director of CUBRIC's neuroimaging laboratories.",
        recruiting: "Not verified"
      },
      {
        id: 343,
        name: "Dr. Graham Hutchings",
        title: "Regius Professor of Chemistry and Founder of CCI",
        subject: "chemistry",
        topics: ["Heterogeneous Catalysis", "Gold Nanoparticles", "Green Chemistry", "Selective Oxidation"],
        source: "https://www.cardiff.ac.uk/people/view/38531-hutchings-graham",
        summary: "Fellow of the Royal Society, pioneer who discovered that gold is an active catalyst for ethyne hydrochlorination, and founding Director of the Cardiff Catalysis Institute.",
        recruiting: "Not verified"
      },
      {
        id: 344,
        name: "Dr. Stephen Fairhurst",
        title: "Professor of Physics and Head of the Gravity Exploration Institute",
        subject: "physics",
        topics: ["Gravitational Waves", "LIGO Collaboration", "Binary Black Holes", "Relativistic Astrophysics"],
        source: "https://www.cardiff.ac.uk/people/view/38497-fairhurst-stephen",
        summary: "Leading gravitational-wave astrophysicist within the LIGO Scientific Collaboration who played a central role in the historic first direct observation of gravitational waves from colliding black holes.",
        recruiting: "Not verified"
      }
    ]
  },

  // 7. JAPAN: Doshisha University (Row 1629)
  {
    institution: "Doshisha University",
    shortName: "Doshisha",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kyoto, Japan",
    website: "https://www.doshisha.ac.jp",
    sourceRow: 1629,
    slug: "doshisha-university",
    heroEyebrow: "Japan · Kyoto · Kan-Kan-Do-Ritsu Elite & Global Kyoto Heritage Hub · Reviewed 15 October 2026",
    headline: "Doshisha University (同志社大学)",
    description: "Doshisha University guide: MEXT Government Scholarships (¥145,000/mo), English-taught Global Resource Management PhD, Intelligent Systems, and faculty profiles.",
    overview: "Founded in 1875 in the ancient imperial capital of Kyoto by Protestant pioneer Joseph Hardy Neesima (Niijima Jo), Doshisha University is one of western Japan's oldest and most prestigious private universities, anchor of the renowned Kan-Kan-Do-Ritsu league. Situated across historic campuses adjacent to the Kyoto Imperial Palace (Imadegawa Campus) and the Kansai Science City (Kyotanabe Campus), Doshisha is internationally celebrated for global studies, intelligent mechanical systems, bio-engineering, theology, and international business.",
    admissions: {
      masters: "Completion of a 16-year school education curriculum culminating in a recognized Bachelor's degree (minimum 3.0/4.0 GPA or equivalent grade B+).",
      phd: "Recognized Master's degree or professional degree; submission of Master's thesis and passing marks in oral defense and doctoral screening.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85 for English-taught graduate programs; Japanese JLPT N1 for Japanese-medium graduate divisions.",
      proposal: "A 3-page research proposal detailing proposed doctoral research topic, theoretical framework, research methodology, and anticipated academic contributions.",
      appFee: "¥35,000 non-refundable screening fee submitted via the Doshisha online admissions portal.",
      documents: "Graduation certificate, complete official academic transcripts, research proposal, 2 letters of recommendation, and English proficiency test report."
    },
    tuitionText: "Tuition fees for graduate programs at Doshisha are approximately ¥950,000 to ¥1,250,000 per year. Admitted international students benefit from Doshisha University Graduate School Tuition Reduction Scholarships covering 20% to 100% of tuition, and MEXT University Recommendation Scholarship recipients receive 100% full tuition waivers, round-trip international airfare, and a monthly tax-free living stipend of ¥145,000 per month.",
    opportunities: [
      {
        id: 760,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        type: "Scholarship",
        title: "Doshisha MEXT University Recommendation Scholarships & Doctoral Tuition Waivers",
        source: "https://intad.doshisha.ac.jp/en/scholarship/scholarship.html",
        funding: "100% Fully funded: Monthly living allowance of ¥145,000/month, full tuition waiver, and round-trip economy airfare",
        status: "open-scholarship",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Priority round for Autumn 2027 enrollment)",
        fee: "¥0 screening fee for MEXT applicants",
        tuition: "100% covered by the Japanese Ministry of Education, Culture, Sports, Science and Technology.",
        requirements: {
          gpa: "Minimum GPA of 2.30 on a 3.00 scale (equivalent to 80% or 3.4/4.0 GPA) in previous university degrees.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Superior academic record, thesis summary, and detailed proposed research outline.",
          references: "Two letters of recommendation from deans or academic professors."
        },
        desc: "Prestigious Japanese government doctoral award administered through Doshisha University, offering complete financial independence, tuition waivers, and airfare for premier international research scholars."
      },
      {
        id: 761,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "Doshisha Graduate School of Science and Engineering English PhD in Intelligent Information Engineering",
        source: "https://se.doshisha.ac.jp/en/admissions/",
        funding: "Doshisha Graduate Scholarship & RA stipends providing ¥140,000/month plus up to 100% tuition reduction awards",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring round for September 2027 enrollment)",
        fee: "¥35,000 application screening fee",
        tuition: "¥1,150,000/year, highly subsidized through merit-based tuition reduction grants.",
        requirements: {
          gpa: "Master's degree in engineering, computer science, or applied mathematics with high marks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Master's thesis and published papers in reputable journals or international conferences.",
          references: "Two confidential letters of recommendation from university faculty."
        },
        desc: "All-English doctoral degree conducted at the Kyotanabe Campus, featuring advanced research in autonomous robotics, intelligent signal processing, neural network computation, and human-computer symbiosis."
      },
      {
        id: 762,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "Doshisha Master of Arts in Global Studies (English-Taught)",
        source: "https://global-studies.doshisha.ac.jp/en/",
        funding: "Doshisha University Merit Scholarships providing 20% to 100% tuition reduction awards",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (International applicant round for Fall intake)",
        fee: "¥15,000 application fee",
        tuition: "¥920,000/year before merit scholarships.",
        requirements: {
          gpa: "Four-year Bachelor's degree in humanities, social sciences, or international relations with minimum 3.0 GPA.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Academic essay (2,000 words) on contemporary global politics, culture, or international business.",
          references: "Two academic referee letters."
        },
        desc: "Two-year English-taught Master's program in the cultural heart of Kyoto, offering specialized research clusters in Global Society, International Business and Development, and Peace and Conflict Studies."
      },
      {
        id: 763,
        subject: "biology",
        subjects: ["biology", "engineering"],
        type: "PhD",
        title: "Doshisha PhD in Biomedical Engineering & Medical Robotics",
        source: "https://bme.doshisha.ac.jp/en/",
        funding: "Doshisha Life and Medical Sciences Doctoral Fellowship: ¥160,000/month plus laboratory research funds",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual doctoral admission round)",
        fee: "¥35,000 screening fee",
        tuition: "Full tuition offset through departmental fellowship.",
        requirements: {
          gpa: "Master's degree in biomedical engineering, mechanical engineering, or physiology with high distinction.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Prior laboratory research experience in biosensors, medical ultrasound, or biomechanical prosthetics.",
          references: "Two letters of recommendation."
        },
        desc: "Four-year doctorate located at the Faculty of Life and Medical Sciences in Kyotanabe, conducting pioneering research in minimally invasive surgical robotics, ultrasound elastography, and neural prostheses."
      },
      {
        id: 764,
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        type: "Research",
        title: "Doshisha Functional Molecular Materials Postdoctoral Fellowship",
        source: "https://se.doshisha.ac.jp/en/",
        funding: "Salaried postdoctoral position: ¥5,000,000 to ¥6,200,000/year gross plus Japanese social insurance (shakai hoken)",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling review until position filled)",
        fee: "¥0 application fee",
        tuition: "Not applicable; full-time salaried researcher post.",
        requirements: {
          gpa: "PhD in Applied Chemistry, Materials Science, or Chemical Engineering.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications in coordination chemistry, metal-organic frameworks (MOFs), or organic photovoltaics.",
          references: "Two academic recommendation letters."
        },
        desc: "Research appointment investigating nanoporous materials, artificial metalloenzymes, and supramolecular assemblies for sustainable catalytic energy conversion."
      },
      {
        id: 765,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Internship",
        title: "Doshisha Traditional Kyoto Arts & Media Computing Summer Traineeship",
        source: "https://culture.doshisha.ac.jp/en/",
        funding: "¥100,000/month 8-week summer stipend with Kyoto cultural heritage laboratory access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship call)",
        fee: "¥0 application fee",
        tuition: "Zero tuition charges during summer traineeship.",
        requirements: {
          gpa: "Enrolled in third or fourth year of undergraduate studies in Digital Media, History, or Cultural Studies with high marks.",
          ielts: "Good English conversational skills.",
          gre: "Not applicable.",
          papers: "Portfolio or coursework in Japanese cultural history, digital archiving, or media design.",
          references: "One professor recommendation letter."
        },
        desc: "Eight-week summer research traineeship at the Imadegawa campus in Kyoto, collaborating on digital archiving of historic Nishijin textile weaving, Japanese Buddhist temple architecture, and interactive cultural heritage media."
      },
      {
        id: 766,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Job",
        title: "Doshisha Project Assistant Professor in Human-Robot Collaboration & Mechatronics",
        source: "https://www.doshisha.ac.jp/en/information/recruit.html",
        funding: "Full-time faculty appointment: ¥6,200,000 to ¥7,200,000/year gross plus Japanese social insurance",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Academic search closing date)",
        fee: "¥0 application fee",
        tuition: "Not applicable; salaried faculty appointment.",
        requirements: {
          gpa: "PhD in Robotics, Mechatronics, Mechanical Systems, or Cybernetics.",
          ielts: "Professional English fluency (Japanese language skills advantageous but not required).",
          gre: "Not applicable.",
          papers: "Minimum 5 first-author publications in IEEE/ASME robotics journals or flagship robotics conferences (ICRA, IROS).",
          references: "Three academic reference contacts."
        },
        desc: "Full-time faculty role conducting independent research and teaching in collaborative robotics, soft tactile grippers, and physical human-robot interaction for assistive care and advanced manufacturing."
      }
    ],
    researchers: [
      {
        id: 345,
        name: "Dr. Kenji Mase",
        title: "Professor of Intelligent Information Systems",
        subject: "computer-science",
        topics: ["Affective Computing", "Human-Computer Interaction", "Pervasive Computing", "Gesture Recognition"],
        source: "https://doors.doshisha.ac.jp/du/en/researcher/kenji-mase/",
        summary: "Pioneer in affective computing and multimodal human-machine communication, exploring physiological signal interpretation and wearable computing systems for health and emotional well-being.",
        recruiting: "Not verified"
      },
      {
        id: 346,
        name: "Dr. Koji Sugioka",
        title: "Professor of Mechanical Engineering and Fluid Dynamics",
        subject: "engineering",
        topics: ["Microfluidics", "Aeroacoustics", "Turbulence Modeling", "High-Speed Flow"],
        source: "https://doors.doshisha.ac.jp/du/en/researcher/koji-sugioka/",
        summary: "Leading experimental fluid dynamicist investigating aerodynamic sound generation, microfluidic mixing phenomena, and vortex acoustics in high-speed transport systems.",
        recruiting: "Not verified"
      },
      {
        id: 347,
        name: "Dr. Masanori Nishioka",
        title: "Professor of Applied Chemistry and Molecular Materials",
        subject: "chemistry",
        topics: ["Organic Electronics", "Photovoltaic Materials", "Molecular Self-Assembly", "Conducting Polymers"],
        source: "https://doors.doshisha.ac.jp/du/en/researcher/masanori-nishioka/",
        summary: "Distinguished materials chemist researching organic field-effect transistors, flexible photovoltaic architectures, and functional macromolecular electronic devices.",
        recruiting: "Not verified"
      }
    ]
  },

  // 8. SWEDEN: Jönköping University (Row 1578)
  {
    institution: "Jönköping University",
    shortName: "Jönköping",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Jönköping, Sweden",
    website: "https://ju.se",
    sourceRow: 1578,
    slug: "jonkoping-university",
    heroEyebrow: "Sweden · Småland · Triple-Accredited Business School & Industrial Product Realisation · Reviewed 15 October 2026",
    headline: "Jönköping University",
    description: "Jönköping University guide: Salaried Swedish PhD positions (SEK 31,000/mo), Jönköping International Business School (JIBS), Materials & Manufacturing, and faculty profiles.",
    overview: "Located on the southern shores of Lake Vättern, Jönköping University (Högskolan i Jönköping - JU) is one of Sweden's leading non-governmental foundation universities, internationally renowned for Jönköping International Business School (JIBS - the first business school in Sweden to hold double EQUIS and AACSB accreditations) and the School of Engineering. Renowned as Europe's top center for family business and entrepreneurship research, and a national hub for cast iron materials and industrial product realization, JU offers salaried PhD positions and career-oriented international Master's programs.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS credits) from an internationally recognized higher education institution with a major in business, engineering, computing, or social sciences (minimum 65-70% or 3.0/4.0 GPA equivalent).",
      phd: "Master's degree (minimum 240 ECTS credits total, with at least 60 ECTS at advanced level) or equivalent international qualification; selection is based on academic merit, research quality, and faculty fit.",
      language: "English 6 / English B proficiency: Academic IELTS 6.5 overall (no band below 5.5) or TOEFL iBT 90 (minimum 20 in writing).",
      proposal: "A 3 to 5 page doctoral research plan addressing research problem, theoretical context, proposed methodology, and significance.",
      appFee: "SEK 900 application fee for non-EU/EEA students applying through the central Swedish universityadmissions.se portal; €0 fee for EU citizens.",
      documents: "Certificates and diplomas of completed degrees, official transcripts, documentation of English proficiency, copy of passport, and Master's thesis."
    },
    tuitionText: "At Jönköping University and throughout Sweden, PhD candidacies are classified as salaried state/foundation employment (doktorandanställning). Admitted PhD candidates pay zero tuition fees and receive a collective-bargaining salaried monthly wage of SEK 31,000 to SEK 34,500 per month (approx. SEK 372,000 to SEK 414,000/year gross) with full Swedish national healthcare, parental leave, and pension benefits. International Master's students can compete for Jönköping University Scholarships covering 30% of tuition fees.",
    opportunities: [
      {
        id: 767,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Jönköping University Scholarship for International Master's Students (30% Tuition Waiver)",
        source: "https://ju.se/en/study-at-ju/how-to-apply/scholarships.html",
        funding: "30% tuition fee reduction for the entire duration of the Master's programme (valued at approx. SEK 80,000)",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship round for Autumn intake)",
        fee: "SEK 900 central application fee",
        tuition: "Remaining 70% tuition approx. SEK 90,000/year after scholarship reduction.",
        requirements: {
          gpa: "First-choice application to Jönköping University with top academic grades in undergraduate degree (minimum 80% or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each sub-score) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong motivation letter.",
          references: "Academic reference letters submitted with scholarship dossier."
        },
        desc: "Merit-based scholarship awarded to high-achieving non-EU/EEA students applying to English-taught master's degrees in business, engineering, and digital technologies at Jönköping University."
      },
      {
        id: 768,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        title: "JIBS Salaried PhD Position in Entrepreneurship & Family Business",
        source: "https://ju.se/en/research/doctoral-programmes/doctoral-programmes-at-jibs.html",
        funding: "Full 4-year Swedish salaried employment: SEK 31,000 to SEK 34,500/month gross plus full healthcare and pension; zero tuition",
        status: "open-phd",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Salaried doctoral recruitment round)",
        fee: "SEK 0 application fee for doctoral positions",
        tuition: "SEK 0 tuition; all doctoral positions are fully paid employment under Swedish labor law.",
        requirements: {
          gpa: "Master of Science in Business Administration, Economics, or Management with distinction.",
          ielts: "Fluent working English (IELTS 7.0 or equivalent).",
          gre: "Not applicable.",
          papers: "Master's thesis in entrepreneurship, organizational renewal, or family business dynamics.",
          references: "Two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research post based at the Centre for Family Entrepreneurship and Ownership (CeFEO), Europe's premier institute for family business research, governance, and intergenerational succession."
      },
      {
        id: 769,
        subject: "engineering",
        subjects: ["engineering"],
        type: "Master",
        title: "Jönköping Master of Science (MSc) in Materials and Manufacturing (English-Taught)",
        source: "https://ju.se/en/study-at-ju/our-programmes/master-programmes/materials-and-manufacturing.html",
        funding: "Eligible for Swedish Institute (SI) Global Professionals Scholarships (full tuition + SEK 12,000/month living stipend)",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Central Swedish university admissions round 1)",
        fee: "SEK 900 application fee",
        tuition: "SEK 150,000/year for non-EU/EEA students (EU/EEA citizens pay SEK 0).",
        requirements: {
          gpa: "Bachelor's degree in Mechanical Engineering, Materials Science, or Chemical Engineering with at least 90 ECTS in engineering.",
          ielts: "Academic IELTS 6.5 (minimum 5.5 in each band) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in metallurgy, solid mechanics, and manufacturing technologies.",
          references: "One academic reference letter."
        },
        desc: "Comprehensive two-year Master's degree focusing on casting technologies, component design, failure analysis, and circular metallic materials in partnership with Scandinavia's foundry industry."
      },
      {
        id: 770,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "Jönköping PhD in Industrial Product Realisation & Smart Manufacturing",
        source: "https://ju.se/en/research/doctoral-programmes/doctoral-programmes-at-the-school-of-engineering.html",
        funding: "Salaried Swedish doctoral employment: SEK 31,500/month with annual step increases; zero tuition",
        status: "open-phd",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Doctoral recruitment deadline)",
        fee: "SEK 0 application fee",
        tuition: "SEK 0 tuition; salaried employment.",
        requirements: {
          gpa: "Master's degree in Production Engineering, Mechanical Engineering, or Mechatronics.",
          ielts: "English 6 proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated research in industrial automation, digital twins, or additive manufacturing.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the research environment SPARK, advancing digital engineering workflows, cyber-physical production lines, and closed-loop manufacturing automation."
      },
      {
        id: 771,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Jönköping Master of Science (MSc) in AI Engineering (English-Taught)",
        source: "https://ju.se/en/study-at-ju/our-programmes/master-programmes/ai-engineering.html",
        funding: "JU Tuition Waiver Scholarships and industry-sponsored thesis project bursaries",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Swedish national round 1)",
        fee: "SEK 900 application fee",
        tuition: "SEK 150,000/year for non-EU students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Computer Engineering, or Mathematics with minimum 90 ECTS in computing.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Strong coursework in algorithms, data structures, and Python/C++ programming.",
          references: "One academic referee letter."
        },
        desc: "Two-year Master of Science addressing deep learning, computer vision, natural language understanding, and edge AI deployment in autonomous vehicles and medical robotics."
      },
      {
        id: 772,
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        title: "Jönköping Foundry Technology & Component Casting Summer Traineeship",
        source: "https://ju.se/en/about-us/school-of-engineering/research.html",
        funding: "SEK 11,000/month 8-week summer stipend plus shared student housing in Jönköping",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer traineeship intake)",
        fee: "SEK 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Mechanical Engineering, Materials, or Metallurgy.",
          ielts: "Good working English proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in manufacturing processes or material properties.",
          references: "One referee letter from an engineering instructor."
        },
        desc: "Eight-week hands-on industrial casting internship at the School of Engineering's pilot foundry, testing sand mold permeability, thermal analysis, and microstructure evolution in cast iron and aluminum alloys."
      },
      {
        id: 773,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Job",
        title: "JIBS Assistant Professor in International Entrepreneurship & Innovation Policy",
        source: "https://ju.se/en/about-us/work-at-ju.html",
        funding: "Full-time permanent academic staff appointment: SEK 46,000 to SEK 54,000/month gross plus Swedish pension benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Formal academic search deadline)",
        fee: "SEK 0 application fee",
        tuition: "Not applicable; salaried academic appointment.",
        requirements: {
          gpa: "PhD in Business Administration, Entrepreneurship, or Economics awarded within the last 5 years.",
          ielts: "Exemplary professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated track record of publications in high-ranking management journals (FT50 or ABS 3/4).",
          references: "Three academic reference contacts."
        },
        desc: "Tenure-track Assistant Professorship delivering teaching in international business master's programs and conducting empirical research at CeFEO on corporate entrepreneurship and digital venture creation."
      }
    ],
    researchers: [
      {
        id: 348,
        name: "Dr. Mattias Nordqvist",
        title: "Professor of Business Administration and former Director of CeFEO",
        subject: "social-sciences",
        topics: ["Family Business", "Entrepreneurial Strategy", "Corporate Governance", "Qualitative Methods"],
        source: "https://ju.se/en/research/research-centres/centre-for-family-entrepreneurship-and-ownership-cefeo.html",
        summary: "World-leading scholar in family enterprise and strategic entrepreneurship, author of foundational books on family business governance, and former Co-Director of the Global STEP Project.",
        recruiting: "Not verified"
      },
      {
        id: 349,
        name: "Dr. Salem Seifeddine",
        title: "Professor of Materials and Manufacturing and Associate Dean of Research",
        subject: "engineering",
        topics: ["Casting Technologies", "Aluminum Alloys", "Material Microstructure", "Thermal Analysis"],
        source: "https://ju.se/en/about-us/school-of-engineering/research/materials-and-manufacturing.html",
        summary: "Leading metallurgist and materials scientist heading research on high-performance cast aluminum alloys, microstructure prediction, and mechanical property modeling for automotive powertrains.",
        recruiting: "Not verified"
      },
      {
        id: 350,
        name: "Dr. Lucia Naldi",
        title: "Professor of Business Administration and Director of Research at JIBS",
        subject: "social-sciences",
        topics: ["International Entrepreneurship", "Firm Growth", "Knowledge Acquisition", "Gender and Business"],
        source: "https://ju.se/en/about-us/jonkoping-international-business-school.html",
        summary: "Internationally renowned business scholar researching how small and medium-sized enterprises internationalize, acquire market knowledge, and innovate across global supply chains.",
        recruiting: "Not verified"
      }
    ]
  },

  // 9. NETHERLANDS: ArtEZ University of the Arts (Row 1380)
  {
    institution: "ArtEZ University of the Arts",
    shortName: "ArtEZ",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Arnhem, Enschede and Zwolle, Netherlands",
    website: "https://www.artez.nl",
    sourceRow: 1380,
    slug: "artez-university-of-the-arts",
    heroEyebrow: "Netherlands · Gelderland & Overijssel · Premier European Arts & Circular Fashion Hub · Reviewed 15 October 2026",
    headline: "ArtEZ University of the Arts",
    description: "ArtEZ University guide: NL Scholarships (€5,000), Master of Fashion Strategy, Design Curating, Architecture, and faculty profiles.",
    overview: "ArtEZ University of the Arts is one of the premier higher education institutions for the arts, design, architecture, and performing arts in the Netherlands, situated across historic campuses in Arnhem, Enschede, and Zwolle. Internationally celebrated for the Arnhem Fashion Design program (alma mater of Viktor & Rolf and Iris van Herpen), the master's programs in Critical Fashion Practices, Interior Architecture, and Music Therapy, ArtEZ pioneers research into sustainable artistic production, circular fashion, and critical spatial practices.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits, equivalent to Dutch HBO or WO Bachelor) in fine arts, design, fashion, architecture, or related cultural disciplines; competitive artistic portfolio assessment.",
      phd: "Master's degree in arts, design, or cultural humanities; doctoral studies are conducted through collaborative third-cycle research professorships joint with Dutch and European research universities.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 90 (minimum 21 in each section).",
      proposal: "A critical artistic research statement (1,500 words) and a curated portfolio showcasing creative projects, conceptual rigor, and material exploration.",
      appFee: "€0 application fee for EU students; €100 non-refundable handling fee for non-EU/EEA applicants (deducted from tuition upon registration).",
      documents: "Bachelor's diploma, academic transcript of records, digital portfolio, research proposal, curriculum vitae, and English proficiency certificate."
    },
    tuitionText: "Tuition for non-EU/EEA international students in Master's degree programs at ArtEZ is approximately €8,500 to €11,500 per year (statutory tuition of €2,601/year applies to EU/EEA citizens). Outstanding international applicants from outside the European Economic Area are eligible for the Dutch Government's NL Scholarship (€5,000 to €10,000 merit award) as well as ArtEZ institutional study bursaries.",
    opportunities: [
      {
        id: 774,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Scholarship",
        title: "ArtEZ NL Scholarship Programme & International Study Grants (€5,000 to €10,000 Award)",
        source: "https://www.artez.nl/en/study-at-artez/practical-information/scholarships-and-funds",
        funding: "€5,000 to €10,000 financial contribution toward tuition fees and living expenses for non-EU/EEA master's students",
        status: "open-scholarship",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Annual international scholarship round for September intake)",
        fee: "€100 application handling fee",
        tuition: "Subsidizes annual international tuition down to under €4,000/year.",
        requirements: {
          gpa: "Admitted to a full-time Master's program at ArtEZ with an outstanding creative portfolio and academic background.",
          ielts: "Academic IELTS 6.5 overall with no sub-score below 6.0.",
          gre: "Not required.",
          papers: "Demonstrated critical commitment to artistic innovation, sustainability, or social engagement.",
          references: "Two academic or professional artistic reference letters."
        },
        desc: "Prestigious Dutch government and university-funded scholarship providing financial assistance to talented international students from outside the EEA admitted to ArtEZ graduate programs."
      },
      {
        id: 775,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Master",
        title: "ArtEZ Master of Arts (MA) in Critical Fashion Practices (English-Taught)",
        source: "https://www.artez.nl/en/programmes/master-critical-fashion-practices",
        funding: "ArtEZ Excellence Grants of up to €4,000 plus materials and exhibition production stipends",
        status: "open-master",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Non-EU applicant deadline for September intake)",
        fee: "€100 handling fee",
        tuition: "€11,200/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in Fashion Design, Textile Design, Cultural Studies, or Visual Arts with high artistic merit.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Creative portfolio showing speculative garments, bio-textiles, or fashion essays.",
          references: "Two letters of recommendation from design educators."
        },
        desc: "Two-year research-driven Master of Arts in Arnhem interrogating fashion as a cultural, political, and ecological system, exploring post-capitalist garment production and regenerative textile materials."
      },
      {
        id: 776,
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        type: "Master",
        title: "ArtEZ Master of Interior Architecture (Corpus / Gestus / Context)",
        source: "https://www.artez.nl/en/programmes/master-interior-architecture",
        funding: "Erasmus+ study mobility grants and regional creative industries bursaries",
        status: "open-master",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (International intake round)",
        fee: "€100 handling fee",
        tuition: "€10,500/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in interior architecture, architecture, or spatial design.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Comprehensive spatial design portfolio showing drawings, physical models, and material prototypes.",
          references: "One academic referee letter."
        },
        desc: "Two-year Master's degree in Zwolle focusing on the bodily experience of space, adaptive reuse of historic buildings, and sustainable circular material systems for interior spatial design."
      },
      {
        id: 777,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "PhD",
        title: "ArtEZ Professorship in Fashion & Technology Doctoral / Practice-Based Research Fellowship",
        source: "https://www.artez.nl/en/research",
        funding: "Salaried research position (Dutch CAO-HBO): €3,100 to €3,900/month gross plus 8% holiday allowance and pension",
        status: "open-phd",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Practice-based doctoral cohort selection)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges; salaried research appointment joint with a partner university.",
        requirements: {
          gpa: "Master's degree in Design, Fashion, or Material Culture with superior distinction.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Demonstrated portfolio of practice-based artistic research, peer-reviewed articles, or gallery exhibitions.",
          references: "Two academic referee letters."
        },
        desc: "Practice-based doctoral research investigating the integration of wearable technology, smart bio-materials, and circular digital workflows in contemporary fashion design."
      },
      {
        id: 778,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Research",
        title: "ArtEZ Centre of Expertise for Creative Transitions Applied Research Associate",
        source: "https://www.artez.nl/en/research/professorships",
        funding: "Annual salary of €42,000 to €49,000 gross under collective Dutch university labor agreement",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Project fellowship review)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried applied research position.",
        requirements: {
          gpa: "Master's or PhD in Art History, Design Studies, Cultural Policy, or Scenography.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Demonstrated publication record on creative placemaking, socially engaged art, or ecological aesthetics.",
          references: "Two professional reference letters."
        },
        desc: "Applied research post investigating how creative artistic interventions can catalyze community resilience, ecological awareness, and civic dialogue in Dutch and European cities."
      },
      {
        id: 779,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Internship",
        title: "ArtEZ Bio-Design & Material Futures Summer Laboratory Traineeship",
        source: "https://www.artez.nl/en/programmes",
        funding: "€750/month living stipend for 8 weeks with biomaterials workshop access",
        status: "open-internship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer 2027 practice round)",
        fee: "€0 application fee",
        tuition: "Zero tuition fees.",
        requirements: {
          gpa: "Enrolled in Bachelor's or Master's in Product Design, Fashion, or Material Science.",
          ielts: "Good English conversational abilities.",
          gre: "Not applicable.",
          papers: "Completed coursework in material prototyping, bio-plastics, or sustainable design.",
          references: "One referee letter from a design instructor."
        },
        desc: "Eight-week hands-on biomaterial traineeship experimenting with mycelium cultivation, bacterial cellulose dyeing, and algae-based biopolymers for circular product design."
      },
      {
        id: 780,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Job",
        title: "ArtEZ Senior Researcher / Lecturer in Sustainable Design Practices",
        source: "https://www.werkenbijartez.nl",
        funding: "Full-time permanent academic staff position: €4,600 to €5,800/month gross plus 8.3% year-end bonus (CAO-HBO Scale 11/12)",
        status: "open-job",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Academic recruitment closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried senior lecturer and researcher position.",
        requirements: {
          gpa: "Master's degree or PhD in Design, Architecture, or Ecological Culture.",
          ielts: "Professional English fluency (willingness to learn Dutch).",
          gre: "Not applicable.",
          papers: "Demonstrated track record in sustainable design education, exhibition curation, and industry partnerships.",
          references: "Three professional reference contacts."
        },
        desc: "Senior academic role teaching in international master's programs and directing research projects on regenerative design ethics, circular economy frameworks, and social design methodologies."
      }
    ],
    researchers: [
      {
        id: 351,
        name: "Dr. Daniëlle Bruggeman",
        title: "Professor of Fashion and Head of the Centre of Expertise for Creative Transitions",
        subject: "arts-design",
        topics: ["Critical Fashion", "Identity and Dress", "Sustainable Fashion Culture", "Fashion Epistemology"],
        source: "https://www.artez.nl/en/research/professors/danielle-bruggeman",
        summary: "Leading fashion theorist and cultural scholar researching how fashion constructs identity, agency, and ecological responsibility, and author of influential texts on critical fashion practices.",
        recruiting: "Not verified"
      },
      {
        id: 352,
        name: "Dr. Jeroen van den Eijnde",
        title: "Professor of Tactical Design and Product Realisation",
        subject: "arts-design",
        topics: ["Tactical Design", "Design History", "Circular Craft", "Material Culture"],
        source: "https://www.artez.nl/en/research/professors/jeroen-van-den-eijnde",
        summary: "Distinguished design historian and theorist examining the tactical agency of design objects, craft heritage, and circular manufacturing methodologies in regional design economies.",
        recruiting: "Not verified"
      },
      {
        id: 353,
        name: "Dr. Nishant Shah",
        title: "Professor of Aesthetics and Cultures of Technology",
        subject: "social-sciences",
        topics: ["Digital Culture", "Feminist Technoscience", "Media Aesthetics", "Information Ethics"],
        source: "https://www.artez.nl/en/research/professors/nishant-shah",
        summary: "Internationally acclaimed digital humanities scholar and feminist media theorist examining the intersection of identity, aesthetics, algorithmic politics, and digital culture.",
        recruiting: "Not verified"
      }
    ]
  },

  // 10. SWITZERLAND: OST Eastern Switzerland University of Applied Sciences (Row 1343)
  {
    institution: "OST University of Applied Sciences of Eastern Switzerland",
    shortName: "OST",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "St. Gallen, Rapperswil and Buchs, Switzerland",
    website: "https://www.ost.ch",
    sourceRow: 1343,
    slug: "ost-university-of-applied-sciences",
    heroEyebrow: "Switzerland · Eastern Switzerland · Precision Engineering, Photonics & Renewable Energy · Reviewed 15 October 2026",
    headline: "OST University of Applied Sciences of Eastern Switzerland (OST - Ostschweizer Fachhochschule)",
    description: "OST University guide: Salaried Swiss research assistantships (CHF 52,000+), Master of Science in Engineering (MSE), Photonics, Renewable Energy, and faculty profiles.",
    overview: "Formed through the strategic alliance of the renowned HSR Rapperswil, FHS St. Gallen, and NTB Buchs, OST Eastern Switzerland University of Applied Sciences (Ostschweizer Fachhochschule) is the leading public university of applied sciences across the six cantons of Eastern Switzerland and the Principality of Liechtenstein. Situated along Lake Zurich and the Rhine Valley, OST is an international powerhouse in precision optics and photonics (Institute of Microtechnology and Photonics - IMP), renewable energy and solar technologies (SPF Institute for Solar Technology), computer science, and landscape architecture.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits) in engineering, computer science, or natural sciences with above-average academic standing (minimum grade B or 5.0/6.0 on the Swiss grading scale).",
      phd: "Recognized Master's degree (minimum 90 to 120 ECTS credits) with high honors; doctoral candidates are employed under Swiss research contracts and registered in cooperation with Swiss or international research universities (such as ETH Zurich).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90 for English-taught Master of Science in Engineering (MSE) profiles; German C1 for German-medium degree tracks.",
      proposal: "A motivation letter (1,000 words) and portfolio demonstrating engineering design projects, programming proficiency, or experimental laboratory experience.",
      appFee: "CHF 100 non-refundable application fee for Swiss degree holders; CHF 150 for applicants with foreign university qualifications.",
      documents: "Certified copies of degree diplomas, official grade transcripts, curriculum vitae, letter of motivation, and copy of passport."
    },
    tuitionText: "Tuition fees at OST are among the most accessible in Switzerland: standard semester tuition is CHF 800 to CHF 1,000 per semester for Swiss residents and CHF 1,500 per semester for international students. Doctoral research assistants (wissenschaftliche Assistenten) are employed on formal Swiss cantonal research contracts, receiving an annual salary of CHF 52,000 to CHF 64,000 per year gross under Swiss National Science Foundation (SNSF) and Innosuisse funding scales.",
    opportunities: [
      {
        id: 781,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Scholarship",
        title: "OST Swiss Innosuisse Research Assistantships & Master of Science Fellowships",
        source: "https://www.ost.ch/en/research-and-consulting",
        funding: "Salaried Swiss research contract: CHF 52,000 to CHF 64,000/year gross plus full research travel allowance; minimal tuition",
        status: "open-scholarship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual Swiss applied research intake round)",
        fee: "CHF 150 international application fee",
        tuition: "CHF 1,500/semester international tuition fee.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Engineering, Computer Science, or Applied Physics with top marks (minimum 5.0/6.0 Swiss scale or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated technical project experience in photonics, embedded systems, or renewable energy.",
          references: "Two academic or industrial recommendation letters."
        },
        desc: "Competitive Swiss research assistantships providing formal cantonal employment contracts, high standard of living, and direct participation in high-tech industrial innovation projects funded by Innosuisse."
      },
      {
        id: 782,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master",
        title: "OST Master of Science in Engineering (MSE) - Photonics & Precision Optics",
        source: "https://www.ost.ch/en/study/master/master-of-science-in-engineering-mse",
        funding: "Salaried part-time research assistantships (50%) providing CHF 2,500 to CHF 3,200/month while studying",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Autumn intake priority deadline)",
        fee: "CHF 150 application fee",
        tuition: "CHF 1,500/semester for international students.",
        requirements: {
          gpa: "Bachelor of Science in Electrical Engineering, Microtechnology, Mechanical Engineering, or Physics with above-average grade.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in optical design, laser physics, and sensor technologies.",
          references: "Two letters of recommendation."
        },
        desc: "Nationally accredited Master of Science in Engineering profile delivered at the Buchs campus in the Swiss Photonics Valley, specializing in laser material processing, optical metrology, and micro-optical sensors."
      },
      {
        id: 783,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "OST Master of Science in Engineering (MSE) - Energy and Environment (SPF Solar Tech)",
        source: "https://www.spf.ch/en/education-and-careers",
        funding: "Swiss cantonal education subsidies and SPF research assistantship stipends",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicant round for Fall intake)",
        fee: "CHF 150 application fee",
        tuition: "CHF 1,500/semester.",
        requirements: {
          gpa: "Bachelor's degree in Energy Engineering, Mechanical Engineering, or Environmental Technology.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Demonstrated coursework in thermodynamics, heat transfer, and renewable energy systems.",
          references: "One academic referee letter."
        },
        desc: "Advanced Master of Science profile at the SPF Institute for Solar Technology in Rapperswil, training engineers in photovoltaic thermal collectors (PVT), heat pump systems, and building energy decarbonization."
      },
      {
        id: 784,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        title: "OST Institute of Microtechnology and Photonics (IMP) Doctoral Fellowship",
        source: "https://www.ost.ch/en/research-and-consulting/institute-for-microtechnology-and-photonics-imp",
        funding: "Salaried Swiss doctoral contract: CHF 54,000/year gross under SNSF scales joint with ETH Zurich or EPFL",
        status: "open-phd",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Doctoral recruitment intake)",
        fee: "CHF 150 application fee",
        tuition: "Zero tuition charges under university research employment.",
        requirements: {
          gpa: "Master's degree in Optical Engineering, Photonics, Microtechnology, or Physics with superior standing.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Master's thesis in laser micro-machining, interferometry, or optical coating technologies.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the Institute of Microtechnology and Photonics (IMP), developing ultra-short pulsed laser micromachining, nanometer-precision optical surface metrology, and fiber optic sensors."
      },
      {
        id: 785,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "OST Institute for Software (IFS) Applied AI Research Fellow",
        source: "https://www.ost.ch/en/research-and-consulting/institute-for-software-ifs",
        funding: "Salaried research engineer post: CHF 68,000 to CHF 76,000/year gross under Swiss cantonal scales",
        status: "open-research",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Research grant review round)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried applied research position.",
        requirements: {
          gpa: "Master's or PhD in Computer Science, Software Engineering, or Machine Learning.",
          ielts: "Fluent professional English (German skills advantageous).",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications or open-source software contributions in automated testing, cloud architectures, or edge AI.",
          references: "Two professional reference letters."
        },
        desc: "Applied research post at the Institute for Software in Rapperswil, collaborating with Swiss industrial leaders on automated software verification, cloud-native architectures, and robust computer vision models."
      },
      {
        id: 786,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        title: "OST Solar Thermal & Heat Pump Summer Research Traineeship",
        source: "https://www.spf.ch/en",
        funding: "CHF 1,800/month 8-week summer stipend plus Lake Zurich laboratory access",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 traineeship call)",
        fee: "CHF 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Mechanical Engineering, Energy Technology, or Physics with strong grades.",
          ielts: "Good English or German working proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in heat transfer, thermodynamics, or fluid mechanics.",
          references: "One referee letter from an engineering professor."
        },
        desc: "Eight-week summer research traineeship at the SPF Institute for Solar Technology in Rapperswil, performing acoustic and thermal testing on high-efficiency heat pumps and solar collector pilot test benches."
      },
      {
        id: 787,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Job",
        title: "OST Senior Research Engineer in Laser Micro-Machining & Advanced Photonics",
        source: "https://www.ost.ch/en/about-us/work-at-ost",
        funding: "Full-time permanent academic staff position: CHF 95,000 to CHF 115,000/year gross with Swiss pension and social insurance",
        status: "open-job",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Formal academic search deadline)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried senior research scientist appointment.",
        requirements: {
          gpa: "PhD or Master's degree in Photonics, Applied Physics, or Mechanical Engineering with at least 3 years of industrial R&D experience.",
          ielts: "Exemplary professional English and German communication skills.",
          gre: "Not applicable.",
          papers: "Proven track record in ultrafast femtosecond laser processing, beam shaping optics, or laser material ablation.",
          references: "Three professional reference contacts."
        },
        desc: "Senior research engineering role at the IMP Buchs campus, leading industry-collaborative Innosuisse projects on femtosecond laser micromachining of brittle materials, medical implants, and precision semiconductor dies."
      }
    ],
    researchers: [
      {
        id: 354,
        name: "Dr. Carsten Ziolek",
        title: "Professor of Optical Engineering and Head of the Institute for Microtechnology and Photonics (IMP)",
        subject: "physics",
        topics: ["Photonics", "Laser Micromachining", "Optical Metrology", "Laser Systems"],
        source: "https://www.ost.ch/en/person/carsten-ziolek",
        summary: "Head of the IMP at the Buchs campus, recognized across the European photonics industry for pioneering ultra-short pulsed laser micromachining and high-precision optical measurement systems.",
        recruiting: "Not verified"
      },
      {
        id: 355,
        name: "Dr. Andreas Häberle",
        title: "Professor of Solar Energy and Director of the SPF Institute for Solar Technology",
        subject: "engineering",
        topics: ["Solar Energy", "Solar Thermal Technology", "Photovoltaic Thermal Systems", "Building Decarbonization"],
        source: "https://www.spf.ch/en/about-us/team/andreas-haeberle",
        summary: "Director of the internationally renowned SPF Institute for Solar Technology in Rapperswil, leading Swiss and European research consortia in solar heating, cooling, and district energy integration.",
        recruiting: "Not verified"
      },
      {
        id: 356,
        name: "Dr. Farhad Mehta",
        title: "Professor of Computer Science and Head of the Institute for Software (IFS)",
        subject: "computer-science",
        topics: ["Formal Methods", "Software Verification", "Cybersecurity", "Programming Languages"],
        source: "https://www.ost.ch/en/person/farhad-mehta",
        summary: "Head of the Institute for Software in Rapperswil, internationally recognized for research in formal methods, safety-critical software verification, and high-assurance distributed systems.",
        recruiting: "Not verified"
      }
    ]
  }
];
