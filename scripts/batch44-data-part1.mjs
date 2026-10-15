// Batch 44 - Part 1: Universities 1 to 10
// Canada (4), Germany (5), Italy (1)
// Opps: 5198 to 5267 (70 opps)
// Researchers: 2247 to 2276 (30 researchers)

export const part1Universities = [
  // 1. Canada: Université de Hearst
  {
    institution: "Université de Hearst",
    slug: "universite-de-hearst",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 125,
    location: "Hearst, Ontario, Canada",
    website: "https://www.uhearst.ca",
    shortName: "UHearst",
    badge: "Block-Model Francophone Higher Education",
    overview: "Université de Hearst is an independent francophone public university in Northern Ontario with campuses in Hearst, Kapuskasing, and Timmins. Operating on a distinctive block-scheduling model, UHearst offers intensive immersion programs in business administration, psychology, interdisciplinary human studies, and management.",
    lead: "Discover block-model degree programs, Northern Ontario community development grants, and francophone leadership fellowships at Université de Hearst.",
    description: "Université de Hearst admissions, block model degree courses, Northern Ontario bilingual research initiatives, and student funding.",
    quickFacts: {
      type: "Public Francophone University",
      campus: "Hearst, Kapuskasing & Timmins Campuses, Ontario",
      accreditation: "Ministry of Colleges and Universities of Ontario",
      admissions: "Direct admission with secondary diploma or college transfer credentials",
      language: "French (TCF/DELF B2 or equivalent bilingual proficiency)",
      aid: "Ontario Student Assistance Program (OSAP) & UHearst Excellence Awards"
    },
    strengths: [
      "Modular block scheduling enabling in-depth study of one course at a time",
      "Francophone Northern community development, indigenous reconciliation, and rural vitality",
      "Applied management, human resources, and business analytics for community enterprises",
      "Small-cohort interactive seminars and personalized faculty mentorship"
    ],
    programs: [
      { title: "Baccalauréat en administration des affaires (BAA)", level: "Bachelor's Degree", desc: "Block-scheduled program covering strategic entrepreneurship, regional economic development, organizational finance, and managerial ethics." },
      { title: "Baccalauréat ès arts en psychologie", level: "Bachelor's Degree", desc: "Foundational and developmental psychology, mental health interventions in rural environments, and neurobehavioural science." },
      { title: "Baccalauréat interdisciplinaire en études humaines", level: "Bachelor's Degree", desc: "Cross-disciplinary exploration of Francophone identities, political philosophy, environmental ethics, and community sociology." }
    ],
    opportunities: [
      {
        id: 5198,
        title: "Bourse d'Excellence du Recteur UHearst",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit-based admission scholarship awarded to incoming francophone undergraduate students demonstrating academic excellence.",
        funding: "CAD $4,000 renewable award across undergraduate studies",
        fee: "CAD $125 application assessment fee",
        tuition: "CAD $7,200 per year for Ontario residents",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.uhearst.ca/bourses-et-aide-financiere/",
        requirements: {
          gpa: "Minimum 80% secondary school academic average",
          ielts: "French proficiency: DELF B2 / TCF equivalent",
          gre: "Not required",
          papers: "Personal motivation essay in French on academic and community leadership",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5199,
        title: "Baccalauréat en administration des affaires (BAA) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year undergraduate degree offered through one-course-at-a-time modular block structure focusing on managerial innovation.",
        funding: "Work-study placements and Ontario bursary eligibility",
        fee: "CAD $125 application fee",
        tuition: "CAD $7,200 annual domestic tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.uhearst.ca/programmes/administration-des-affaires/",
        requirements: {
          gpa: "Ontario Secondary School Diploma (OSSD) with 6 Grade 12 U/M courses",
          ielts: "DELF B2 or equivalent French qualification",
          gre: "Not required",
          papers: "Official transcripts and resume of extracurricular engagements",
          references: "One referee contact"
        }
      },
      {
        id: 5200,
        title: "Stage en Développement Communautaire du Nord de l'Ontario",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Applied 12-week community economic development internship with northern municipal councils, cooperatives, and health networks.",
        funding: "CAD $19.50/hour student internship compensation",
        fee: "No additional fee beyond course registration",
        tuition: "Included in full-time tuition fees",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.uhearst.ca/stages-et-experiences-pratiques/",
        requirements: {
          gpa: "Minimum GPA 3.0 in administration or social sciences",
          ielts: "Fluent bilingual communication (French and English)",
          gre: "Not required",
          papers: "Curriculum vitae and project placement expression of interest",
          references: "Faculty academic sponsor recommendation"
        }
      },
      {
        id: 5201,
        title: "Baccalauréat ès arts en psychologie Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Undergraduate degree examining mental health dynamics, cognitive behavioural methodologies, and community well-being in rural settings.",
        funding: "Regional retention grants and entrance awards",
        fee: "CAD $125 OUAC application processing fee",
        tuition: "CAD $7,200 per academic year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.uhearst.ca/programmes/psychologie/",
        requirements: {
          gpa: "Grade 12 graduation with minimum 70% average",
          ielts: "Proficiency in French at post-secondary level",
          gre: "Not required",
          papers: "High school transcripts and personal statement",
          references: "Not required for general admission"
        }
      },
      {
        id: 5202,
        title: "Subvention d'Initiative Rurale et Francophonie UHearst",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Targeted research and social innovation grant for undergraduate field investigations into linguistic preservation and sustainable northern economies.",
        funding: "CAD $2,500 project stipend and field travel support",
        fee: "CAD $0 application fee",
        tuition: "Covers non-tuition field research expenses",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.uhearst.ca/recherche-et-projets-communautaires/",
        requirements: {
          gpa: "Enrolled in 2nd year or higher with minimum 3.2 GPA",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "5-page research plan detailing northern community engagement",
          references: "Letter from academic supervisor"
        }
      },
      {
        id: 5203,
        title: "Certificat en gestion des ressources humaines Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year specialized certificate in modern human resource practices, employment law, workplace safety, and organizational dynamics.",
        funding: "Eligible for employer continuing education bursaries",
        fee: "CAD $100 registration fee",
        tuition: "CAD $4,200 total program tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.uhearst.ca/programmes/certificats/",
        requirements: {
          gpa: "Secondary school completion or mature student standing",
          ielts: "Functional bilingualism",
          gre: "Not required",
          papers: "Resume outlining professional background",
          references: "One professional reference"
        }
      },
      {
        id: 5204,
        title: "Bourse d'Engagement Communautaire UHearst",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Undergraduate award recognizing outstanding volunteer service and cultural promotion in Northern Ontario francophone communities.",
        funding: "CAD $1,500 tuition voucher",
        fee: "CAD $0 application fee",
        tuition: "Applicable directly against term tuition fees",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.uhearst.ca/bourses-et-aide-financiere/",
        requirements: {
          gpa: "Minimum cumulative GPA of 2.75",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Summary of community volunteer hours and impact statement",
          references: "Letter from a community organization director"
        }
      }
    ],
    researchers: [
      {
        id: 2247,
        name: "Dr. Luc Bussières",
        title: "Professeur et Recteur",
        department: "Département des études humaines et sociales",
        subject: "social-sciences",
        interests: ["Higher Education Governance", "Francophone Northern Communities", "Pedagogical Block Models"],
        summary: "Dr. Luc Bussières investigates transformative pedagogical models in minority-language higher education and rural community resilience.",
        source: "https://www.uhearst.ca/a-propos/corps-professoral/",
        recruiting: "Not verified"
      },
      {
        id: 2248,
        name: "Dr. Marc Johnson",
        title: "Professeur agrégé en administration",
        department: "Département d'administration des affaires",
        subject: "social-sciences",
        interests: ["Social Entrepreneurship", "Rural Enterprise Development", "Cooperative Economics"],
        summary: "Dr. Marc Johnson specializes in enterprise sustainability, regional cooperative structures, and strategic entrepreneurship across northern regions.",
        source: "https://www.uhearst.ca/a-propos/corps-professoral/",
        recruiting: "Not verified"
      },
      {
        id: 2249,
        name: "Dr. Sophie Boissonneault",
        title: "Professeure adjointe en psychologie",
        department: "Département de psychologie",
        subject: "social-sciences",
        interests: ["Community Mental Health", "Rural Psychological Support", "Cognitive Interventions"],
        summary: "Dr. Sophie Boissonneault conducts research into community-based psychological health strategies and remote health service delivery models.",
        source: "https://www.uhearst.ca/a-propos/corps-professoral/",
        recruiting: "Not verified"
      }
    ]
  },

  // 2. Canada: Université de Saint-Boniface
  {
    institution: "Université de Saint-Boniface",
    slug: "universite-de-saint-boniface",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 127,
    location: "Winnipeg, Manitoba, Canada",
    website: "https://ustboniface.ca",
    shortName: "USB Winnipeg",
    badge: "Western Canada Premier Francophone University",
    overview: "Université de Saint-Boniface, founded in 1818 in Winnipeg, Manitoba, is the premier francophone university in Western Canada. Affiliated with the University of Manitoba, USB offers accredited university degrees in arts, science, education, business administration, and social work alongside specialized health sciences diplomas.",
    lead: "Explore bilingual degrees in arts, biomedical sciences, management, and Canadian Prairie francophone graduate fellowships at Université de Saint-Boniface.",
    description: "Université de Saint-Boniface degrees in arts, sciences, business administration, Western Canadian francophone bursaries, and faculty research.",
    quickFacts: {
      type: "Public Francophone University",
      campus: "Saint-Boniface Historic Campus, Winnipeg, Manitoba",
      accreditation: "Manitoba Advanced Education and Training / Affiliated with University of Manitoba",
      admissions: "Competitive admission based on Manitoba Grade 12 or equivalent provincial credentials",
      language: "French (minimum intermediate-advanced proficiency, DELF B2)",
      aid: "Government of Canada Official Languages Bursaries & USB Foundation Awards"
    },
    strengths: [
      "Western Canada's historic cradle of French-language higher education and research",
      "Biomedical laboratory sciences and bilingual nursing education (École des sciences infirmières)",
      "Interdisciplinary Canadian studies, Métis history, and linguistic pluralism",
      "Cooperative education placements across Manitoba's public, scientific, and corporate sectors"
    ],
    programs: [
      { title: "Baccalauréat ès sciences (Général et avec majeure)", level: "Bachelor's Degree", desc: "Rigorous curriculum covering cellular biology, biochemistry, environmental chemistry, and statistical mathematical modeling." },
      { title: "Baccalauréat en administration des affaires (BAA)", level: "Bachelor's Degree", desc: "Cooperative program blending corporate finance, international commerce, ethical leadership, and marketing analytics." },
      { title: "Maîtrise en éducation (M.Éd.)", level: "Master's Degree", desc: "Graduate research program in educational administration, curriculum leadership, and inclusive minority-language pedagogy." }
    ],
    opportunities: [
      {
        id: 5205,
        title: "Bourse d'Excellence Taché - USB",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Prestigious admission award granted to high-achieving high school graduates entering undergraduate degree programs at Université de Saint-Boniface.",
        funding: "CAD $5,000 renewable up to CAD $20,000 over four years",
        fee: "CAD $100 domestic / CAD $140 international application fee",
        tuition: "CAD $6,100 per academic year for Canadian residents",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://ustboniface.ca/bourses-et-aide-financiere",
        requirements: {
          gpa: "Minimum 85% high school academic average",
          ielts: "French proficiency: DELF B2 or Canadian French immersion diploma",
          gre: "Not required",
          papers: "Personal statement in French highlighting leadership achievements",
          references: "Two letters of recommendation from high school instructors"
        }
      },
      {
        id: 5206,
        title: "Baccalauréat ès sciences avec majeure en biochimie Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Four-year laboratory-intensive bachelor's degree preparing students for medical school, veterinary medicine, and biomedical research.",
        funding: "Eligible for NSERC Undergraduate Student Research Awards (USRA)",
        fee: "CAD $100 application fee",
        tuition: "CAD $6,400 per year for domestic students",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://ustboniface.ca/faculte-des-arts-et-des-sciences",
        requirements: {
          gpa: "Senior 4 Chemistry 40S, Pre-Calculus Math 40S, and Biology 40S",
          ielts: "DELF B2 / French immersion graduation",
          gre: "Not required",
          papers: "Official academic transcripts",
          references: "Not required for undergraduate entry"
        }
      },
      {
        id: 5207,
        title: "Stage Coopératif en Administration des Affaires",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-month paid work term with Manitoba financial institutions, crown corporations, or regional economic development agencies.",
        funding: "CAD $3,200 - $4,000 monthly salary during coop placements",
        fee: "CAD $450 coop placement administrative fee",
        tuition: "Covers academic semester credit",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://ustboniface.ca/coop",
        requirements: {
          gpa: "Cumulative GPA of 3.0 or higher in BAA courses",
          ielts: "Bilingual French and English proficiency",
          gre: "Not required",
          papers: "Bilingual resume and interview assessment",
          references: "Recommendation from faculty program chair"
        }
      },
      {
        id: 5208,
        title: "Maîtrise en éducation (M.Éd.) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Postgraduate degree exploring school administration, educational leadership, and pedagogical differentiation in francophone schools.",
        funding: "Graduate research assistantships and Manitoba education grants",
        fee: "CAD $120 graduate application fee",
        tuition: "CAD $8,500 total program tuition",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://ustboniface.ca/faculte-d-education",
        requirements: {
          gpa: "Bachelor of Education (B.Ed.) with minimum 3.0 GPA in last 60 credit hours",
          ielts: "Advanced French academic fluency",
          gre: "Not required",
          papers: "3-page research statement and current CV",
          references: "Three academic or professional references"
        }
      },
      {
        id: 5209,
        title: "Bourse d'Études de la Francophonie Manitobaine",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Endowed bursary supporting students actively engaged in Franco-Manitoban cultural, artistic, and community advocacy.",
        funding: "CAD $2,500 annual award",
        fee: "CAD $0 application fee",
        tuition: "Credited against university fees",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://ustboniface.ca/fondation-usb",
        requirements: {
          gpa: "Good academic standing (minimum 2.5 GPA)",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Detailed portfolio of community leadership in Manitoba",
          references: "One community leader reference"
        }
      },
      {
        id: 5210,
        title: "Baccalauréat en service social Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Accredited professional social work degree accredited by the Canadian Association for Social Work Education (CASWE).",
        funding: "Provincial healthcare and social service practicum bursaries",
        fee: "CAD $100 application fee",
        tuition: "CAD $6,300 per academic year",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://ustboniface.ca/ecole-de-service-social",
        requirements: {
          gpa: "Completion of 30 university prerequisite credits with minimum 2.75 GPA",
          ielts: "DELF B2 / Advanced French proficiency",
          gre: "Not required",
          papers: "Personal statement detailing volunteer or human services experience",
          references: "Three reference forms (academic, professional, community)"
        }
      },
      {
        id: 5211,
        title: "Subvention de Recherche Étudiante du Centre de recherche USB",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Seed funding for student research projects on Prairie francophone history, oral archives, and sociological diversity.",
        funding: "CAD $3,000 project grant and archival access stipend",
        fee: "CAD $0 application fee",
        tuition: "Direct grant funding",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://ustboniface.ca/centre-de-recherche",
        requirements: {
          gpa: "Minimum 3.3 GPA in relevant disciplines",
          ielts: "Proficiency in French",
          gre: "Not required",
          papers: "Research proposal outlining archival methodologies",
          references: "Supervisor letter of sponsorship"
        }
      }
    ],
    researchers: [
      {
        id: 2250,
        name: "Dr. Sophie Bouffard",
        title: "Rectrice et Professeure",
        department: "Administration Universitaire et Arts",
        subject: "social-sciences",
        interests: ["Higher Education Administration", "Linguistic Minority Rights", "Musicology"],
        summary: "Dr. Sophie Bouffard leads research and institutional strategy focusing on official language minority community empowerment and cultural heritage.",
        source: "https://ustboniface.ca/repertoire-du-personnel",
        recruiting: "Not verified"
      },
      {
        id: 2251,
        name: "Dr. Jean-Éric Tremblay",
        title: "Professeur de biologie moléculaire",
        department: "Département des sciences expérimentales",
        subject: "biology",
        interests: ["Cellular Biology", "Enzymology", "Biomedical Genetics"],
        summary: "Dr. Jean-Éric Tremblay investigates enzyme mechanisms in cellular pathways, supervising student researchers in advanced biochemistry.",
        source: "https://ustboniface.ca/repertoire-du-personnel",
        recruiting: "Not verified"
      },
      {
        id: 2252,
        name: "Dr. Michelle Fontaine",
        title: "Professeure agrégée en éducation",
        department: "Faculté d'éducation",
        subject: "social-sciences",
        interests: ["Language Immersion Pedagogy", "Inclusive Education", "Literacy Acquisition"],
        summary: "Dr. Michelle Fontaine researches pedagogical strategies for language acquisition and inclusive teaching models in Canadian francophone schools.",
        source: "https://ustboniface.ca/repertoire-du-personnel",
        recruiting: "Not verified"
      }
    ]
  },

  // 3. Canada: Université du Québec en Outaouais (UQO)
  {
    institution: "Université du Québec en Outaouais (UQO)",
    slug: "universite-du-quebec-en-outaouais-uqo",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 131,
    location: "Gatineau & Saint-Jérôme, Quebec, Canada",
    website: "https://uqo.ca",
    shortName: "UQO",
    badge: "Public Research University - Université du Québec Network",
    overview: "Université du Québec en Outaouais (UQO), part of the Université du Québec network, maintains main campuses in Gatineau (facing Ottawa) and Saint-Jérôme in the Laurentians. UQO is recognized for high-impact research in cybersecurity, forestry ecology, social work, nursing, psychoeducation, and project management.",
    lead: "Explore computer science, cybersecurity research, forestry ecology doctorates, and Canadian National Capital Region fellowships at UQO.",
    description: "UQO degree programs in computer science, cybersecurity, forestry ecology, project management, and Quebec graduate research grants.",
    quickFacts: {
      type: "Public Comprehensive Research University",
      campus: "Alexandre-Taché & Lucien-Brault (Gatineau), Saint-Jérôme Campus (Laurentides)",
      accreditation: "Ministère de l'Enseignement supérieur du Québec / Université du Québec",
      admissions: "Quebec DEC or Canadian Grade 12 / international bachelor credentials",
      language: "French (minimum TFI 750 or DELF B2); select graduate seminars in English",
      aid: "FRQNT, FRQSC, SSHRC, NSERC and UQO Foundation Graduate Fellowships"
    },
    strengths: [
      "Institut des Sciences de la Forêt Tempérée (ISFORT) international forestry ecology research",
      "Cybersecurity and artificial intelligence laboratory research close to federal government partners",
      "Project management and digital transformation graduate center",
      "Leading nursing and psychoeducation clinics serving Western Quebec"
    ],
    programs: [
      { title: "Baccalauréat en informatique", level: "Bachelor's Degree", desc: "Cooperative computer science degree with concentrations in software engineering, cybersecurity, and data analytics." },
      { title: "Maîtrise en gestion de projet (MGP)", level: "Master's Degree", desc: "Internationally accredited PMI project management degree emphasizing strategic risk, agility, and public sector governance." },
      { title: "Doctorat en sciences et technologies de l'information", level: "Doctorate / PhD", desc: "Advanced doctoral research in wireless sensor networks, machine learning algorithms, and secure cloud architectures." }
    ],
    opportunities: [
      {
        id: 5212,
        title: "Bourse d'Excellence au Doctorat UQO - ISFORT",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Four-year funded doctoral fellowship at the Institute of Temperate Forest Sciences (ISFORT) investigating climate resilience in temperate biomes.",
        funding: "CAD $25,000 annual stipend plus tuition waiver for up to four years",
        fee: "CAD $115 graduate application fee",
        tuition: "Waived under fellowship conditions",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://uqo.ca/isfort/bourses-et-financement",
        requirements: {
          gpa: "Master's degree in biology, forestry, environmental science, or ecology with minimum 3.5/4.3 GPA",
          ielts: "Functional French or English proficiency for scientific research",
          gre: "Not required",
          papers: "10-page doctoral research proposal on forest ecosystem dynamics",
          references: "Three academic reference letters"
        }
      },
      {
        id: 5213,
        title: "Baccalauréat en informatique (Régime Coopératif) Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Comprehensive undergraduate degree featuring three paid industry work terms in software engineering, cloud systems, and cyber defense.",
        funding: "Paid coop terms (CAD $18,000 - $24,000 earned during placements)",
        fee: "CAD $100 application fee",
        tuition: "CAD $3,800 per year for Quebec residents / CAD $9,800 out-of-province",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://uqo.ca/etudiants-futurs/programmes/baccalaureat-en-informatique",
        requirements: {
          gpa: "DEC in computer science/natural sciences or Grade 12 math prerequisites",
          ielts: "French proficiency: TFI or DELF B2",
          gre: "Not required",
          papers: "Official transcripts and proof of prerequisites",
          references: "Not required for undergraduate admissions"
        }
      },
      {
        id: 5214,
        title: "Stage de Recherche en Cybersécurité et Intelligence Artificielle",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "16-week intensive research internship at the UQO Cyber Defense Lab investigating intrusion detection and zero-trust architectures.",
        funding: "CAD $7,500 research stipend funded by Mitacs and industrial partners",
        fee: "CAD $0 application fee",
        tuition: "Credited as academic internship semester",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://uqo.ca/recherche/laboratoire-cybersecurite",
        requirements: {
          gpa: "Minimum 3.2 GPA in 3rd or 4th year computer science",
          ielts: "English or French technical literacy",
          gre: "Not required",
          papers: "Resume and code repository portfolio (GitHub)",
          references: "One professor recommendation"
        }
      },
      {
        id: 5215,
        title: "Maîtrise en gestion de projet (MGP) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Postgraduate master's degree accredited by the Project Management Institute (PMI) Global Accreditation Center.",
        funding: "Corporate sponsorships and graduate research assistantships",
        fee: "CAD $115 application fee",
        tuition: "CAD $5,800 per year for Quebec residents",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://uqo.ca/etudiants-futurs/programmes/maitrise-en-gestion-de-projet",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.0/4.3 GPA",
          ielts: "French language proficiency",
          gre: "GMAT/GRE optional",
          papers: "Curriculum vitae and 2-page statement of professional purpose",
          references: "Two letters of recommendation (academic or professional)"
        }
      },
      {
        id: 5216,
        title: "Bourse d'Excellence du Conseil de recherches UQO",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Merit award for master's students pursuing thesis research in computer science, data analytics, or computational modeling.",
        funding: "CAD $15,000 over two years",
        fee: "CAD $0 application fee",
        tuition: "Credited toward tuition and research expenses",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://uqo.ca/decanat-de-la-recherche/bourses",
        requirements: {
          gpa: "Minimum cumulative GPA of 3.7/4.3 in bachelor's studies",
          ielts: "French or English scientific proficiency",
          gre: "Not required",
          papers: "Master's research synopsis endorsed by an approved UQO supervisor",
          references: "Two academic letters of reference"
        }
      },
      {
        id: 5217,
        title: "Doctorat en sciences et technologies de l'information Enrolment",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Doctoral research program addressing advanced algorithms, computer vision, cloud computing security, and embedded IoT systems.",
        funding: "Guaranteed minimum funding package of CAD $22,000/year for qualified candidates",
        fee: "CAD $115 application fee",
        tuition: "Standard Quebec graduate tuition rates",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://uqo.ca/programmes/doctorat-en-sciences-et-technologies-de-linformation",
        requirements: {
          gpa: "Master's degree in computer science, software engineering, or related field with minimum 3.3/4.3 GPA",
          ielts: "French or English proficiency",
          gre: "Not required",
          papers: "Comprehensive thesis proposal and scholarly publication sample",
          references: "Three academic reference letters"
        }
      },
      {
        id: 5218,
        title: "Bourse d'Implication Sociale et Régionale UQO",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Grant awarded to student-led social development projects in Western Quebec and the Laurentides regions.",
        funding: "CAD $3,500 project grant",
        fee: "CAD $0 application fee",
        tuition: "Direct non-tuition grant funding",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://uqo.ca/fondation-uqo/bourses",
        requirements: {
          gpa: "Good academic standing (minimum 2.8 GPA)",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Social impact project plan with timeline and budget",
          references: "Letter from community partner organization"
        }
      }
    ],
    researchers: [
      {
        id: 2253,
        name: "Dr. Christian Messier",
        title: "Professeur titulaire et Chercheur émérite",
        department: "Institut des sciences de la forêt tempérée (ISFORT)",
        subject: "environment",
        interests: ["Forestry Ecology", "Urban Forestry", "Climate Change Adaptation", "Complex Adaptive Systems"],
        summary: "Dr. Christian Messier is Canada Research Chair in Forest Resilience and Global Change, specializing in adaptive forest management and urban greening.",
        source: "https://isfort.uqo.ca/chercheurs/christian-messier",
        recruiting: "Not verified"
      },
      {
        id: 2254,
        name: "Dr. Luigi Logrippo",
        title: "Professeur émérite en informatique",
        department: "Département d'informatique et d'ingénierie",
        subject: "computer-science",
        interests: ["Cybersecurity", "Formal Software Specifications", "Information Flow Control"],
        summary: "Dr. Luigi Logrippo conducts foundational research into formal verification, cybersecurity protocols, and security policies for complex network systems.",
        source: "https://uqo.ca/repertoire-du-personnel/luigi-logrippo",
        recruiting: "Not verified"
      },
      {
        id: 2255,
        name: "Dr. Stéphane Bouchard",
        title: "Professeur titulaire et Titulaire de Chaire",
        department: "Département de psychoéducation et de psychologie",
        subject: "social-sciences",
        interests: ["Virtual Reality Psychotherapy", "Anxiety Disorders", "Clinical Telepsychology"],
        summary: "Dr. Stéphane Bouchard holds the Canada Research Chair in Clinical Cyberpsychology, investigating immersive VR interventions for anxiety and trauma.",
        source: "https://uqo.ca/cyberpsychologie",
        recruiting: "Not verified"
      }
    ]
  },

  // 4. Canada: Université Sainte-Anne
  {
    institution: "Université Sainte-Anne",
    slug: "universite-sainte-anne",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 132,
    location: "Pointe-de-l'Église, Nova Scotia, Canada",
    website: "https://www.usainteanne.ca",
    shortName: "Sainte-Anne",
    badge: "Acadian Heritage & Marine Research University",
    overview: "Université Sainte-Anne, established in 1890 on the shores of Saint Mary's Bay in Church Point (Pointe-de-l'Église), Nova Scotia, is the only French-language post-secondary institution in Nova Scotia. The university is renowned for its immersive French programs, coastal marine biology research, Acadian cultural preservation, and teacher education.",
    lead: "Discover coastal marine biology degrees, immersive French language curricula, Acadian heritage research, and Atlantic Canada entrance scholarships at Université Sainte-Anne.",
    description: "Université Sainte-Anne degree programs, coastal marine research, immersive French language education, and Nova Scotia academic awards.",
    quickFacts: {
      type: "Public Francophone University",
      campus: "Main Seaside Campus at Pointe-de-l'Église, Nova Scotia",
      accreditation: "Nova Scotia Department of Advanced Education / Universities Canada",
      admissions: "Nova Scotia High School Completion or international equivalent with French placement",
      language: "French (complete immersion environment with official language pledge)",
      aid: "Government of Canada Immersion Bursaries & Sainte-Anne Foundation Scholarships"
    },
    strengths: [
      "World-renowned French immersion program with historic language contract pledge",
      "Centre de recherche marine (CRM) studying lobster health, coastal ecosystems, and aquaculture",
      "Centre acadien preserving international archives of Acadian diaspora history and folklore",
      "Interdisciplinary environmental science, business management, and education faculties"
    ],
    programs: [
      { title: "Baccalauréat ès sciences (Biologie et sciences de l'environnement)", level: "Bachelor's Degree", desc: "Four-year marine and coastal biology degree with direct laboratory access to Saint Mary's Bay ecosystems." },
      { title: "Baccalauréat en administration des affaires (BAA)", level: "Bachelor's Degree", desc: "Applied bilingual business management curriculum emphasizing coastal community enterprises and cooperative work terms." },
      { title: "Baccalauréat en éducation (B.Éd.)", level: "Bachelor's Degree", desc: "Two-year consecutive degree preparing educators for French-first-language and French immersion school boards across Canada." }
    ],
    opportunities: [
      {
        id: 5219,
        title: "Bourse du Millénaire d'Excellence Sainte-Anne",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Top undergraduate entrance scholarship awarded to students entering first-year degree programs with exceptional academic credentials.",
        funding: "CAD $6,000 per year renewable up to CAD $24,000 over four years",
        fee: "CAD $75 application fee",
        tuition: "CAD $8,800 per year for Canadian students",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.usainteanne.ca/bourses-et-aide-financiere",
        requirements: {
          gpa: "Minimum 85% high school graduating average",
          ielts: "French proficiency: DELF B2 or Canadian immersion credential",
          gre: "Not required",
          papers: "Personal statement highlighting community leadership and bilingual commitment",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 5220,
        title: "Baccalauréat ès sciences (Biologie marine et environnement) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Undergraduate degree blending marine invertebrate biology, oceanographic field sampling, and coastal ecosystem monitoring.",
        funding: "Undergraduate coastal research assistantships and NSERC awards",
        fee: "CAD $75 application fee",
        tuition: "CAD $8,800 per academic year",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.usainteanne.ca/programmes/baccalaureat-es-sciences",
        requirements: {
          gpa: "Grade 12 graduation with chemistry, biology, and pre-calculus mathematics",
          ielts: "Functional French proficiency",
          gre: "Not required",
          papers: "Official transcripts and science prerequisite records",
          references: "Not required for undergraduate admissions"
        }
      },
      {
        id: 5221,
        title: "Stage de Recherche au Centre de Recherche Marine (CRM)",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "14-week hands-on marine biology research internship focused on lobster crustacean health and oceanographic telemetry in Saint Mary's Bay.",
        funding: "CAD $18.50/hour student researcher salary",
        fee: "CAD $0 application fee",
        tuition: "Covered through research grant",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.usainteanne.ca/recherche/centre-de-recherche-marine",
        requirements: {
          gpa: "Minimum 3.0 GPA in biology, chemistry, or environmental sciences",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Resume and 1-page expression of interest in marine ecology",
          references: "Recommendation from biology faculty member"
        }
      },
      {
        id: 5222,
        title: "Programme Immersion Française Intensive d'Été Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Five-week complete linguistic and cultural immersion program with full language pledge, workshops, and Acadian cultural activities.",
        funding: "Bursaries available through Explore Canada official languages program",
        fee: "CAD $100 registration fee",
        tuition: "CAD $3,650 including tuition, room, and board",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.usainteanne.ca/immersion",
        requirements: {
          gpa: "Minimum 18 years of age or secondary school graduation",
          ielts: "All levels accepted from beginner to advanced",
          gre: "Not required",
          papers: "Online French placement questionnaire",
          references: "Not required"
        }
      },
      {
        id: 5223,
        title: "Bourse du Centre Acadien d'Études Historiques",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Undergraduate archival fellowship supporting investigations in Acadian genealogies, maritime oral traditions, and post-deportation literature.",
        funding: "CAD $2,500 research stipend",
        fee: "CAD $0 application fee",
        tuition: "Direct research award",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.usainteanne.ca/centre-acadien",
        requirements: {
          gpa: "Minimum 3.2 cumulative GPA in history, literature, or social sciences",
          ielts: "Advanced French reading and writing ability",
          gre: "Not required",
          papers: "Project proposal with proposed archival collections from the Centre Acadien",
          references: "One academic faculty reference"
        }
      },
      {
        id: 5224,
        title: "Baccalauréat en éducation (B.Éd.) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year professional teaching degree with extensive school-based practica qualifying graduates for Nova Scotia teacher certification.",
        funding: "Nova Scotia Teacher Education Bursary eligible",
        fee: "CAD $75 application fee",
        tuition: "CAD $9,200 per academic year",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.usainteanne.ca/programmes/baccalaureat-en-education",
        requirements: {
          gpa: "Completed undergraduate degree with minimum 2.7 GPA and teachable subjects",
          ielts: "Advanced level French language competence examination",
          gre: "Not required",
          papers: "Personal statement of teaching philosophy",
          references: "Three professional and academic letters of reference"
        }
      },
      {
        id: 5225,
        title: "Bourse d'Entrée Régionale Atlantique Sainte-Anne",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Financial assistance scholarship for students from Atlantic Canada committing to pursue full-time undergraduate studies in French.",
        funding: "CAD $1,500 direct tuition reduction",
        fee: "CAD $0 application fee",
        tuition: "Applied directly to term fees",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.usainteanne.ca/bourses-et-aide-financiere",
        requirements: {
          gpa: "Minimum 75% secondary school average",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Completed financial aid application form",
          references: "High school guidance counselor verification"
        }
      }
    ],
    researchers: [
      {
        id: 2256,
        name: "Dr. Kenneth Deveau",
        title: "Recteur et Vice-chancelier",
        department: "Administration et Sciences Humaines",
        subject: "social-sciences",
        interests: ["Minority Language Sociolinguistics", "Acadian Identity", "Educational Psychology"],
        summary: "Dr. Kenneth Deveau conducts sociolinguistic research into language revitalization, linguistic vitality, and minority-language youth identity formation.",
        source: "https://www.usainteanne.ca/a-propos/repertoire-du-personnel",
        recruiting: "Not verified"
      },
      {
        id: 2257,
        name: "Dr. Marc d'Entremont",
        title: "Directeur du Centre de Recherche Marine",
        department: "Département des sciences",
        subject: "biology",
        interests: ["Marine Crustacean Health", "Lobster Ecology", "Aquaculture Disease Prevention"],
        summary: "Dr. Marc d'Entremont leads the Marine Research Centre, investigating physiological health, pathogen resistance, and thermal tolerance in American lobster.",
        source: "https://www.usainteanne.ca/recherche/centre-de-recherche-marine",
        recruiting: "Not verified"
      },
      {
        id: 2258,
        name: "Dr. Clint Bruce",
        title: "Professeur et Titulaire de Chaire de recherche",
        department: "Département des études acadiennes",
        subject: "arts-design",
        interests: ["Acadian Diaspora Studies", "Louisiana-Acadie Cultural Exchange", "Francophone Transatlantic Literature"],
        summary: "Dr. Clint Bruce holds the Canada Research Chair in Acadian and Transnational Studies, examining the literary and historical flows of the Acadian diaspora.",
        source: "https://www.usainteanne.ca/centre-acadien",
        recruiting: "Not verified"
      }
    ]
  },

  // 5. Germany: Munich Business School (MBS)
  {
    institution: "Munich Business School (MBS)",
    slug: "munich-business-school",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 327,
    location: "Munich, Bavaria, Germany",
    website: "https://www.munich-business-school.de",
    shortName: "Munich Business School",
    badge: "FIBAA Premium-Accredited Private Business School",
    overview: "Munich Business School (MBS), founded in 1991 in the Bavarian capital of Munich, is a premier state-recognized private business university. Holding FIBAA system accreditation, MBS specializes in international business, sports business, digital transformation management, and innovation entrepreneurship with mandatory foreign exchange semesters and corporate internships.",
    lead: "Explore international business bachelors, master's in sports management, and Bavarian enterprise fellowships at Munich Business School.",
    description: "Munich Business School degrees in international business, digital marketing, sports management, MBA programs, and MBS talent scholarships.",
    quickFacts: {
      type: "State-Recognized Private Business University",
      campus: "Munich Westend Campus, Bavaria, Germany",
      accreditation: "Bavarian State Ministry of Science and the Arts / FIBAA System Accreditation",
      admissions: "Holistic selection with academic records, personal interview, and case assessment",
      language: "English (100% English track available; IELTS 6.5 or TOEFL iBT 85)",
      aid: "MBS Merit Scholarships & Alumni Endowed Study Awards"
    },
    strengths: [
      "Top-ranked for internationality and practical industry integration in German business rankings",
      "Specialized Master in Sports Business and Communication in the European sports capital",
      "Executive and full-time MBA programs with Silicon Valley and Singapore modules",
      "Extensive corporate network including BMW, Siemens, Allianz, and Munich startup hubs"
    ],
    programs: [
      { title: "Bachelor of Arts in International Business", level: "Bachelor's Degree", desc: "Three-year bilingual or English-taught undergraduate degree with integrated study abroad semester and dual domestic/international internships." },
      { title: "Master of Science in International Business", level: "Master's Degree", desc: "Comprehensive postgraduate degree with specializations in digital transformation, marketing, finance, or supply chain management." },
      { title: "Master of Arts in Sports Business and Communication", level: "Master's Degree", desc: "Industry-aligned management degree training sports brand directors, club managers, and event operations executives." }
    ],
    opportunities: [
      {
        id: 5226,
        title: "Munich Business School International Talent Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Tuition reduction scholarship awarded to highly talented international students entering bachelor's or master's programs at MBS.",
        funding: "Up to €4,000 direct tuition reduction across first academic year",
        fee: "€60 application assessment fee",
        tuition: "€6,500 per semester",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.munich-business-school.de/en/financing-and-scholarships",
        requirements: {
          gpa: "Excellent GPA in previous academic studies (minimum German grade 2.0 or equivalent)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all subscores) or TOEFL iBT 85",
          gre: "Not required; GMAT welcomed for master's programs",
          papers: "1,000-word essay on global business trends and personal career vision",
          references: "One academic or employer recommendation letter"
        }
      },
      {
        id: 5227,
        title: "Bachelor of Arts in International Business Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year undergraduate degree combining core business foundations, language electives, mandatory exchange semester, and practical internships.",
        funding: "MBS Early Bird tuition discount and merit awards",
        fee: "€60 application fee",
        tuition: "€6,500 per semester",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.munich-business-school.de/en/bachelor-international-business",
        requirements: {
          gpa: "Higher education entrance qualification (Abitur, IB, High School Diploma with APs)",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Motivation letter, CV, and secondary school transcripts",
          references: "Successful completion of MBS personal interview"
        }
      },
      {
        id: 5228,
        title: "Munich Tech Ecosystem Corporate Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Structured corporate semester internship with leading Munich multinational corporations, venture capital firms, or digital tech startups.",
        funding: "€1,100 - €1,800 monthly company stipend",
        fee: "€0 application fee",
        tuition: "Embedded in degree semester fees",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.munich-business-school.de/en/career-center",
        requirements: {
          gpa: "Enrolled in MBS Bachelor's or Master's in good standing",
          ielts: "English fluency; German B1 advantageous for local corporate placements",
          gre: "Not required",
          papers: "Professional European-format CV and cover letter",
          references: "Endorsement from MBS Career Center"
        }
      },
      {
        id: 5229,
        title: "Master of Science in International Business Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-semester postgraduate business degree offering dual degree options, immersion tracks, and extensive international field consulting.",
        funding: "MBS Women in Business and Global Leader grants",
        fee: "€60 application fee",
        tuition: "€7,200 per semester",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.munich-business-school.de/en/master-international-business",
        requirements: {
          gpa: "Undergraduate degree in business, economics, or related field with at least 180 ECTS",
          ielts: "IELTS 6.5 or TOEFL iBT 88",
          gre: "GMAT or GRE score strongly recommended",
          papers: "Personal statement explaining specialization choice and career strategy",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5230,
        title: "MBS Women in Leadership Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Financial bursary designed to support female business leaders and entrepreneurs pursuing graduate management degrees at MBS.",
        funding: "€3,000 tuition grant applied to program costs",
        fee: "€0 application fee",
        tuition: "Reduces overall semester tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.munich-business-school.de/en/financing-and-scholarships",
        requirements: {
          gpa: "Minimum undergraduate GPA of 3.2 or German grade 2.3",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Leadership portfolio and essay detailing female empowerment in business",
          references: "One professional reference"
        }
      },
      {
        id: 5231,
        title: "Master of Arts in Sports Business and Communication Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Specialized master's program providing comprehensive training in sports marketing, stadium management, digital broadcasting, and athlete representation.",
        funding: "Corporate partner scholarships from sports brand affiliates",
        fee: "€60 application fee",
        tuition: "€7,200 per semester",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.munich-business-school.de/en/master-sports-business",
        requirements: {
          gpa: "Bachelor's degree with 180 ECTS in business, media, sports, or communication",
          ielts: "IELTS 6.5 or TOEFL iBT 85",
          gre: "Not required",
          papers: "Statement of purpose outlining industry ambitions in sports business",
          references: "Two academic or industry references"
        }
      },
      {
        id: 5232,
        title: "MBS European Innovation & Entrepreneurship Fellowship",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Incubation fellowship providing seed capital and workspace for student startup founders registered at the MBS Entrepreneurship Center.",
        funding: "€5,000 project grant and dedicated incubator desk space",
        fee: "€0 application fee",
        tuition: "Direct non-dilutive startup funding",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.munich-business-school.de/en/entrepreneurship-center",
        requirements: {
          gpa: "Enrolled student or recent alumnus of Munich Business School",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "10-slide startup pitch deck with market validation and financial projections",
          references: "Endorsement by MBS Entrepreneurship faculty chair"
        }
      }
    ],
    researchers: [
      {
        id: 2259,
        name: "Prof. Dr. Stefan Baldi",
        title: "Dean and Professor of Information Systems",
        department: "Department of Management and Information Systems",
        subject: "social-sciences",
        interests: ["Higher Education Management", "Digital Business Models", "Information Management"],
        summary: "Prof. Dr. Stefan Baldi leads academic governance and research at MBS, focusing on digital business transformations and strategic management education.",
        source: "https://www.munich-business-school.de/en/professors/stefan-baldi",
        recruiting: "Not verified"
      },
      {
        id: 2260,
        name: "Prof. Dr. Jack Nasher",
        title: "Professor of Leadership and Organizational Behavior",
        department: "Department of Leadership and Human Resources",
        subject: "social-sciences",
        interests: ["Negotiation Theory", "Cognitive Psychology in Management", "Behavioral Leadership"],
        summary: "Prof. Dr. Jack Nasher investigates advanced negotiation strategies, persuasion dynamics, and behavioral decision-making in executive contexts.",
        source: "https://www.munich-business-school.de/en/professors/jack-nasher",
        recruiting: "Not verified"
      },
      {
        id: 2261,
        name: "Prof. Dr. David Wagner",
        title: "Professor of Digital Marketing",
        department: "Department of Marketing and Communication",
        subject: "social-sciences",
        interests: ["Social Media Marketing", "Digital Branding", "Customer Journey Analytics"],
        summary: "Prof. Dr. David Wagner analyzes the strategic impact of digital media, consumer communities, and marketing technology on corporate brand value.",
        source: "https://www.munich-business-school.de/en/professors/david-wagner",
        recruiting: "Not verified"
      }
    ]
  },

  // 6. Germany: Munich University of Applied Sciences (Hochschule München / HM)
  {
    institution: "Munich University of Applied Sciences (Hochschule München / HM)",
    slug: "munich-university-of-applied-sciences-hm",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 329,
    location: "Munich, Bavaria, Germany",
    website: "https://www.hm.edu",
    shortName: "Hochschule München",
    badge: "Germany's Premier Applied STEM & Design University",
    overview: "Munich University of Applied Sciences (Hochschule München / HM), established in 1971, is the second largest university of applied sciences in Germany with over 18,000 students. Located in the innovation capital of Munich, HM is renowned for mechanical and automotive engineering, computer science, industrial design, architecture, and applied social sciences.",
    lead: "Explore engineering degrees, applied artificial intelligence masters, Strascheg Center entrepreneurship grants, and Bavarian tech fellowships at Hochschule München.",
    description: "Hochschule München degree courses in engineering, computer science, industrial design, Strascheg Center startup grants, and DAAD scholarships.",
    quickFacts: {
      type: "Public University of Applied Sciences (Hochschule für Angewandte Wissenschaften)",
      campus: "Lothstraße, Pasing, and Karlstraße Campuses, Munich, Bavaria",
      accreditation: "Bavarian State Ministry of Science and the Arts / ASIIN & ACQUIN",
      admissions: "Fachhochschulreife / Abitur or recognized international school-leaving certificate",
      language: "German (TestDaF 4 / DSH-2); expanding portfolio of 100% English degrees",
      aid: "Bavarian State Student Aid (BAföG), Deutschlandstipendium & HM Excellence Awards"
    },
    strengths: [
      "Strascheg Center for Entrepreneurship (SCE) recognized as a top European university incubator",
      "World-class automotive, mechatronics, and aerospace engineering labs partnering with BMW, MAN, and MTU",
      "Applied computer science, artificial intelligence, and cybersecurity innovation hubs",
      "Prestigious Faculty of Design producing award-winning industrial and digital product designers"
    ],
    programs: [
      { title: "Bachelor of Engineering in Mechanical Engineering (Maschinenbau)", level: "Bachelor's Degree", desc: "Seven-semester applied engineering degree with integrated 20-week industrial internship semester and modern laboratory practicums." },
      { title: "Master of Science in Applied Artificial Intelligence", level: "Master's Degree", desc: "English-taught graduate program covering deep learning architectures, computer vision, autonomous robotics, and ethics in AI." },
      { title: "Bachelor of Arts in Industrial Design", level: "Bachelor's Degree", desc: "Studio-based design program training product developers in CAD prototyping, sustainable materials, and human-machine interaction." }
    ],
    opportunities: [
      {
        id: 5233,
        title: "Deutschlandstipendium at Hochschule München",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "National merit scholarship awarded to outstanding undergraduate and master's students at HM, funded jointly by the Federal Government and industrial donors.",
        funding: "€300 monthly cash stipend (€3,600 annually) independent of personal income",
        fee: "€0 application fee",
        tuition: "No tuition fees; only semester administrative fee of approx. €85",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hm.edu/en/your_stay_at_muas/students/scholarships/deutschlandstipendium.en.html",
        requirements: {
          gpa: "Excellent academic standing (German grade 1.9 or better)",
          ielts: "German or English proficiency corresponding to degree requirements",
          gre: "Not required",
          papers: "Curriculum vitae and letter of motivation detailing social commitment",
          references: "One academic evaluation letter"
        }
      },
      {
        id: 5234,
        title: "Master of Science in Applied Artificial Intelligence Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-semester English-taught master's degree focusing on neural networks, natural language processing, edge AI, and industrial automation.",
        funding: "Research assistantships with Bavarian AI research clusters",
        fee: "€0 university application fee (uni-assist fees apply for international degrees)",
        tuition: "Free tuition; €85 semester union fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.cs.hm.edu/en/master/aai.en.html",
        requirements: {
          gpa: "Bachelor's in computer science, mathematics, or engineering with at least 210 ECTS and minimum German grade 2.5",
          ielts: "IELTS 6.5 or TOEFL iBT 88 (for English track)",
          gre: "Not required",
          papers: "Transcripts, curriculum vitae, and verification of programming competence",
          references: "Not required"
        }
      },
      {
        id: 5235,
        title: "Strascheg Center for Entrepreneurship (SCE) Startup Grant",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Bavarian seed funding and acceleration grant supporting student deep-tech startup projects at Hochschule München.",
        funding: "€5,000 - €15,000 project acceleration funding and co-working lab space",
        fee: "€0 application fee",
        tuition: "Non-repayable entrepreneurial innovation funding",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.sce.de/en/home.html",
        requirements: {
          gpa: "Enrolled HM student or multidisciplinary founding team",
          ielts: "English or German fluency",
          gre: "Not required",
          papers: "Structured business model canvas, technical prototype roadmap, and financial forecast",
          references: "Academic mentor endorsement from HM faculty"
        }
      },
      {
        id: 5236,
        title: "Bachelor of Engineering in Maschinenbau (Mechanical Engineering) Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Seven-semester foundational engineering degree covering thermodynamics, structural mechanics, CAD design, and sustainable automotive drivetrains.",
        funding: "Paid mandatory industrial internship semester (€900 - €1,400/month)",
        fee: "€0 application fee",
        tuition: "Tuition-free state higher education; standard semester ticket contribution",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.me.hm.edu/bachelor/maschinenbau.de.html",
        requirements: {
          gpa: "Abitur or Fachhochschulreife with strong physics and mathematics marks",
          ielts: "German language proficiency: TestDaF 4x4 or DSH-2",
          gre: "Not required",
          papers: "School leaving certificates and pre-study practical training proof (Vorpraktikum)",
          references: "Not required"
        }
      },
      {
        id: 5237,
        title: "Bavarian Automotive Industry Internship Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "20-week mandatory practical engineering placement in BMW, Audi, or Knorr-Bremse automotive development testing facilities in Munich.",
        funding: "€1,200 - €1,600 monthly industrial remuneration",
        fee: "€0 application fee",
        tuition: "Part of accredited degree curriculum",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.hm.edu/en/your_stay_at_muas/students/internship/internship.en.html",
        requirements: {
          gpa: "Successful completion of foundational 1st-4th semester modules",
          ielts: "German B2 and English B2",
          gre: "Not required",
          papers: "Engineering internship training plan endorsed by department",
          references: "HM faculty internship commissioner approval"
        }
      },
      {
        id: 5238,
        title: "Bachelor of Arts in Industrial Design Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Renowned design bachelor curriculum emphasizing circular economy materials, ergonomic mobility solutions, and digital interface design.",
        funding: "Excellence awards from the Bavarian Design Forum",
        fee: "€0 application fee",
        tuition: "Tuition-free public university program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://design.hm.edu/studiengaenge/industrie_design/bachelor.de.html",
        requirements: {
          gpa: "General or subject-restricted higher education entrance qualification",
          ielts: "German proficiency at DSH-2 or TestDaF 4 level",
          gre: "Not required",
          papers: "Design portfolio (Mappe) containing 15-20 original creative works and design test",
          references: "Passing the artistic aptitude examination (Eignungsprüfung)"
        }
      },
      {
        id: 5239,
        title: "DAAD Graduation Completion Grant at HM",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "social-sciences"],
        desc: "One-semester financial completion grant supporting international students in their final degree phase at Munich University of Applied Sciences.",
        funding: "€500 monthly stipend for up to six months",
        fee: "€0 application fee",
        tuition: "Living cost support grant",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.hm.edu/en/your_stay_at_muas/students/scholarships/daad.en.html",
        requirements: {
          gpa: "Good academic standing and proof of registration for thesis / final semester",
          ielts: "Proficiency in degree instructional language",
          gre: "Not required",
          papers: "Academic transcript, thesis confirmation, and financial hardship justification",
          references: "Letter of evaluation from supervising professor"
        }
      }
    ],
    researchers: [
      {
        id: 2262,
        name: "Prof. Dr. Martin Leitner",
        title: "President and Professor of Mathematics",
        department: "Department of Mathematics and Computer Science",
        subject: "mathematics",
        interests: ["Higher Education Leadership", "Applied Mathematics", "Digital Higher Education Innovation"],
        summary: "Prof. Dr. Martin Leitner presides over Hochschule München, championing applied AI curricula, university-industry technology transfer, and entrepreneurship.",
        source: "https://www.hm.edu/en/about_muas/organisation/university_leadership/president.en.html",
        recruiting: "Not verified"
      },
      {
        id: 2263,
        name: "Prof. Dr. Peter Dürr",
        title: "Professor of Mechanical Engineering",
        department: "Faculty of Mechanical, Automotive and Aeronautical Engineering",
        subject: "engineering",
        interests: ["Additive Manufacturing", "Lightweight Composite Materials", "Structural Simulation"],
        summary: "Prof. Dr. Peter Dürr researches 3D additive manufacturing processes and lightweight structural design for automotive and aerospace components.",
        source: "https://www.me.hm.edu/fakultaet/personen/professoren.de.html",
        recruiting: "Not verified"
      },
      {
        id: 2264,
        name: "Prof. Dr. Gudrun Socher",
        title: "Professor of Artificial Intelligence",
        department: "Faculty of Computer Science and Mathematics",
        subject: "computer-science",
        interests: ["Computer Vision", "Machine Learning", "Autonomous Robotic Navigation"],
        summary: "Prof. Dr. Gudrun Socher directs research in deep neural networks and computer vision algorithms for robotic manipulation and smart industrial sensors.",
        source: "https://www.cs.hm.edu/fakultaet/personen/professoren.de.html",
        recruiting: "Not verified"
      }
    ]
  },

  // 7. Germany: Muthesius University of Fine Arts and Design
  {
    institution: "Muthesius University of Fine Arts and Design",
    slug: "muthesius-university-of-fine-arts-and-design",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 330,
    location: "Kiel, Schleswig-Holstein, Germany",
    website: "https://muthesius-kunsthochschule.de",
    shortName: "Muthesius Kunsthochschule",
    badge: "State Academy of Fine Arts & Design in Schleswig-Holstein",
    overview: "Muthesius University of Fine Arts and Design (Muthesius Kunsthochschule) in Kiel is the sole higher institution of fine arts and design in the northern state of Schleswig-Holstein. Renowned for its experimental studio pedagogy, Muthesius offers degrees in fine art, industrial design, communication design, spatial strategies, and art education.",
    lead: "Discover fine art studios, industrial design bachelors, spatial strategies masters, and Schleswig-Holstein artistic fellowships at Muthesius Kunsthochschule Kiel.",
    description: "Muthesius Kunsthochschule Kiel degrees in fine art, industrial design, spatial strategies, communication design, and German art scholarships.",
    quickFacts: {
      type: "Public State Art Academy (Kunsthochschule)",
      campus: "Legienstraße Campus, Kiel, Schleswig-Holstein",
      accreditation: "Ministry of General and Vocational Education, Science, Research and Culture Schleswig-Holstein",
      admissions: "Artistic aptitude test (Mappeneignungsprüfung) and portfolio presentation",
      language: "German (DSH-2 / TestDaF 4 for design; fine art applicants evaluated individually)",
      aid: "BAföG, Schleswig-Holstein Young Artists Grants & Deutschlandstipendium"
    },
    strengths: [
      "Interdisciplinary workshops for ceramics, glass, woodworking, printmaking, and digital media",
      "Pioneering Master of Arts in Spatial Strategies (Raumstrategien) exploring public interventions",
      "Industrial Design department emphasizing sustainable marine technologies and eco-materials",
      "Exhibition opportunities in the university gallery (Spichernhöfe) and international art fairs"
    ],
    programs: [
      { title: "Bachelor of Arts in Fine Art (Freie Kunst)", level: "Bachelor's Degree", desc: "Eight-semester studio degree focusing on painting, sculpture, conceptual art, and experimental media installations." },
      { title: "Master of Arts in Spatial Strategies (Raumstrategien)", level: "Master's Degree", desc: "Advanced interdisciplinary postgraduate program interrogating architectural space, urban curation, and site-specific installations." },
      { title: "Bachelor of Arts in Industrial Design", level: "Bachelor's Degree", desc: "Studio-based design program combining ergonomics, circular material design, transport systems, and digital 3D prototyping." }
    ],
    opportunities: [
      {
        id: 5240,
        title: "Muthesius Young Artist Residency Grant",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "One-year post-graduate studio residency awarded to an exceptional graduating master's artist or designer at Muthesius Kunsthochschule.",
        funding: "€1,200 monthly living stipend and free atelier studio space for 12 months",
        fee: "€0 application fee",
        tuition: "Full fellowship coverage",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://muthesius-kunsthochschule.de/preise-stipendien/",
        requirements: {
          gpa: "Graduating Master of Fine Arts or Design student with distinction",
          ielts: "Functional working proficiency in German or English",
          gre: "Not required",
          papers: "Catalogue portfolio of thesis exhibition and 5-page residency project outline",
          references: "Two letters of nomination from academy professors"
        }
      },
      {
        id: 5241,
        title: "Bachelor of Arts in Freie Kunst (Fine Art) Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Eight-semester fine art studio course with individual atelier mentoring in painting, drawing, sculpture, and interactive video.",
        funding: "Materials bursaries and state studio travel grants",
        fee: "€0 application fee",
        tuition: "Tuition-free public art academy; approx. €75 semester contribution",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://muthesius-kunsthochschule.de/studiengaenge/freie-kunst/",
        requirements: {
          gpa: "General higher education entrance qualification (exceptions possible for outstanding artistic talent)",
          ielts: "German B2 recommended for critique seminars",
          gre: "Not required",
          papers: "Art portfolio containing 20-25 original artistic creations and sketchbooks",
          references: "Participation in on-site portfolio interview and practical examination"
        }
      },
      {
        id: 5242,
        title: "Master of Arts in Spatial Strategies (Raumstrategien) Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-semester master's degree investigating social space, urban scenography, public architecture, and participatory cultural interventions.",
        funding: "Project funding for public spatial installations",
        fee: "€0 application fee",
        tuition: "Tuition-free state education",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://muthesius-kunsthochschule.de/studiengaenge/raumstrategien/",
        requirements: {
          gpa: "Bachelor's degree in fine art, design, architecture, or related spatial fields (180 ECTS)",
          ielts: "German or English academic proficiency",
          gre: "Not required",
          papers: "Digital portfolio of spatial/architectural works and 3-page research proposal",
          references: "Two academic or curatorial references"
        }
      },
      {
        id: 5243,
        title: "Bachelor of Arts in Industrial Design Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Six-semester undergraduate program in user-centered product design, mobility solutions, material experimentation, and 3D modeling.",
        funding: "Industry competition awards and Deutschlandstipendium",
        fee: "€0 application fee",
        tuition: "Tuition-free education in Schleswig-Holstein",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://muthesius-kunsthochschule.de/studiengaenge/industriedesign/",
        requirements: {
          gpa: "Abitur or Fachhochschulreife",
          ielts: "German proficiency: TestDaF 4 or DSH-2",
          gre: "Not required",
          papers: "Design portfolio including drawings, product concepts, and 3D process sketches",
          references: "Passing the artistic-creative aptitude assessment"
        }
      },
      {
        id: 5244,
        title: "Kiel Maritime & Sustainable Design Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "16-week studio internship with Baltic maritime design firms, sustainable packaging innovators, or industrial furniture producers.",
        funding: "€800 - €1,200 monthly practical training compensation",
        fee: "€0 application fee",
        tuition: "Incorporated into undergraduate curriculum",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://muthesius-kunsthochschule.de/service/praktikum/",
        requirements: {
          gpa: "Enrolled in 4th semester or higher of industrial or communication design",
          ielts: "German B2 and English B1",
          gre: "Not required",
          papers: "Design portfolio and internship agreement",
          references: "Studio professor approval"
        }
      },
      {
        id: 5245,
        title: "Deutschlandstipendium at Muthesius Kunsthochschule",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "National excellence scholarship for exceptionally gifted fine art and design students demonstrating outstanding creativity.",
        funding: "€300 monthly cash stipend (€3,600 per academic year)",
        fee: "€0 application fee",
        tuition: "Direct stipend support",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://muthesius-kunsthochschule.de/preise-stipendien/deutschlandstipendium/",
        requirements: {
          gpa: "Enrolled student at Muthesius with superior artistic portfolio evaluations",
          ielts: "Proficiency in study language",
          gre: "Not required",
          papers: "Artist statement, CV, and recent photographic documentation of artworks",
          references: "One faculty recommendation"
        }
      },
      {
        id: 5246,
        title: "Muthesius Projektförderung (Exhibition & Publication Grant)",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Direct grant funding for student-initiated public exhibitions, catalogue publications, and international biennial participation.",
        funding: "Up to €2,500 project cost subsidy",
        fee: "€0 application fee",
        tuition: "Non-repayable production subsidy",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://muthesius-kunsthochschule.de/preise-stipendien/projektfoerderung/",
        requirements: {
          gpa: "Registered student in fine art, design, or art education",
          ielts: "German or English",
          gre: "Not required",
          papers: "Detailed exhibition concept, venue contract, and itemized production budget",
          references: "Endorsement from respective class professor"
        }
      }
    ],
    researchers: [
      {
        id: 2265,
        name: "Prof. Dr. Arne Zerbst",
        title: "President and Professor of Philosophy of Art",
        department: "Department of Art History and Aesthetics",
        subject: "arts-design",
        interests: ["Aesthetic Theory", "Philosophy of Art", "Contemporary Art Historiography"],
        summary: "Prof. Dr. Arne Zerbst presides over Muthesius Kunsthochschule, publishing extensively on modern aesthetics, museum philosophy, and institutional art theory.",
        source: "https://muthesius-kunsthochschule.de/hochschule/praesidium/",
        recruiting: "Not verified"
      },
      {
        id: 2266,
        name: "Prof. Detlef Rhein",
        title: "Professor of Industrial Design",
        department: "Department of Industrial Design",
        subject: "arts-design",
        interests: ["Ecological Product Design", "Circular Materials", "Ergonomics"],
        summary: "Prof. Detlef Rhein teaches advanced industrial design, mentoring students in sustainable material lifecycles, user-centric tools, and medical devices.",
        source: "https://muthesius-kunsthochschule.de/studiengaenge/industriedesign/lehrende/",
        recruiting: "Not verified"
      },
      {
        id: 2267,
        name: "Prof. Elisabeth Wagner",
        title: "Professor of Sculpture and Spatial Installation",
        department: "Department of Fine Art",
        subject: "arts-design",
        interests: ["Sculptural Interventions", "Public Space Aesthetics", "Materiality in Modern Art"],
        summary: "Prof. Elisabeth Wagner directs the master class in sculpture, exploring spatial tensions, site-specific public sculpture, and industrial material reinterpretation.",
        source: "https://muthesius-kunsthochschule.de/studiengaenge/freie-kunst/lehrende/",
        recruiting: "Not verified"
      }
    ]
  },

  // 8. Germany: Neubrandenburg University of Applied Sciences (Hochschule Neubrandenburg)
  {
    institution: "Neubrandenburg University of Applied Sciences",
    slug: "neubrandenburg-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 333,
    location: "Neubrandenburg, Mecklenburg-Vorpommern, Germany",
    website: "https://www.hs-nb.de",
    shortName: "HS Neubrandenburg",
    badge: "Applied Agriculture, Food Science & Geoinformatics",
    overview: "Neubrandenburg University of Applied Sciences (Hochschule Neubrandenburg), founded in 1991 in the Mecklenburg Lake District, is a forward-looking public institution recognized for agricultural sciences, food technology, geoinformatics, landscape architecture, nursing, and social work. The university is an innovation driver for northeast Germany's bioeconomy and rural development.",
    lead: "Explore degrees in food technology, geoinformatics engineering, agricultural science bachelors, and Mecklenburg research grants at Hochschule Neubrandenburg.",
    description: "Hochschule Neubrandenburg degree courses in food technology, agriculture, geoinformatics, landscape architecture, and German research funding.",
    quickFacts: {
      type: "Public University of Applied Sciences",
      campus: "Brodaer Straße Campus, Neubrandenburg, Mecklenburg-Vorpommern",
      accreditation: "Ministry of Science, Culture, Federal and European Affairs Mecklenburg-Vorpommern",
      admissions: "Fachhochschulreife or Allgemeine Hochschulreife; international qualifications evaluated via uni-assist",
      language: "German (TestDaF 4 or DSH-2); select bilingual research modules",
      aid: "Deutschlandstipendium, BAföG & Regional Enterprise Graduate Awards"
    },
    strengths: [
      "Center of excellence in food technology, pilot brewery, and functional food processing plants",
      "Department of Geodesy and Geoinformatics with high-precision drone surveying and GIS laboratories",
      "Comprehensive agricultural management programs supporting northern European agronomy",
      "Applied nursing science and health care management research serving rural medical systems"
    ],
    programs: [
      { title: "Bachelor of Science in Food Technology (Lebensmitteltechnologie)", level: "Bachelor's Degree", desc: "Seven-semester engineering degree focusing on food processing, product development, quality management, and biochemical food safety." },
      { title: "Master of Engineering in Geodesy and Geoinformatics", level: "Master's Degree", desc: "Three-semester advanced program in spatial data infrastructure, satellite geodesy, photogrammetry, and 3D urban laser modeling." },
      { title: "Bachelor of Science in Agriculture (Agrarwirtschaft)", level: "Bachelor's Degree", desc: "Comprehensive agricultural science program covering precision farming, animal husbandry, agricultural economics, and soil ecology." }
    ],
    opportunities: [
      {
        id: 5247,
        title: "Deutschlandstipendium at Hochschule Neubrandenburg",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "engineering", "environment"],
        desc: "Federal merit scholarship supporting talented students in food technology, agriculture, and geoinformatics at HS Neubrandenburg.",
        funding: "€300 per month (€3,600 annually) for at least two semesters",
        fee: "€0 application fee",
        tuition: "Tuition-free public university education",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.hs-nb.de/studium-weiterbildung/rund-ums-studium/stipendien/deutschlandstipendium/",
        requirements: {
          gpa: "Excellent academic performance in school or current university studies",
          ielts: "German language proficiency at DSH-2 or TestDaF 4 level",
          gre: "Not required",
          papers: "Motivation letter, CV, and documentation of academic achievements",
          references: "One academic referee endorsement"
        }
      },
      {
        id: 5248,
        title: "Bachelor of Science in Lebensmitteltechnologie Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry", "engineering"],
        desc: "Seven-semester applied science degree preparing food engineers with hands-on pilot plant training in dairy, meat, beverage, and plant protein processing.",
        funding: "Funded 20-week mandatory industrial internship semester",
        fee: "€0 application fee",
        tuition: "Tuition-free state higher education; standard semester fee approx. €90",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-nb.de/studiengaenge/bachelor-lebensmitteltechnologie/",
        requirements: {
          gpa: "Abitur or Fachhochschulreife with basic chemistry and mathematics background",
          ielts: "German language proficiency",
          gre: "Not required",
          papers: "Official academic transcripts",
          references: "Not required"
        }
      },
      {
        id: 5249,
        title: "Master of Engineering in Geodesy and Geoinformatics Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Postgraduate degree preparing surveyors and geodata engineers for spatial modeling, LiDAR remote sensing, and smart city infrastructure planning.",
        funding: "Research assistantships on state geodata modeling projects",
        fee: "€0 application fee",
        tuition: "Tuition-free public university program",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hs-nb.de/studiengaenge/master-geodaesie-und-geoinformatik/",
        requirements: {
          gpa: "Bachelor's degree in geodesy, geoinformatics, surveying, or civil engineering with at least 210 ECTS",
          ielts: "German DSH-2 or TestDaF 4; English B2",
          gre: "Not required",
          papers: "Academic transcript, CV, and bachelor thesis summary",
          references: "Not required"
        }
      },
      {
        id: 5250,
        title: "Mecklenburg Food Industry Technology Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "20-week industrial internship with northern German dairy processing facilities, brewing companies, or functional food ingredient manufacturers.",
        funding: "€850 - €1,300 monthly corporate training stipend",
        fee: "€0 application fee",
        tuition: "Academic credit incorporated in degree",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.hs-nb.de/fachbereich-agrarwirtschaft-und-lebensmittelwissenschaften/studium/praktikum/",
        requirements: {
          gpa: "Successful completion of 1st-4th semester food technology coursework",
          ielts: "German B2 level",
          gre: "Not required",
          papers: "Training contract signed with accredited food industry partner",
          references: "Internship committee approval"
        }
      },
      {
        id: 5251,
        title: "Bachelor of Science in Agrarwirtschaft (Agriculture) Enrolment",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Practical agricultural science degree preparing farm managers, agricultural consultants, and agribusiness leaders for modern sustainable farming.",
        funding: "Regional agribusiness study stipends and chamber of agriculture awards",
        fee: "€0 application fee",
        tuition: "Tuition-free state education",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-nb.de/studiengaenge/bachelor-agrarwirtschaft/",
        requirements: {
          gpa: "Higher education entrance qualification",
          ielts: "German proficiency",
          gre: "Not required",
          papers: "Secondary diploma and proof of agricultural pre-study practical experience",
          references: "Not required"
        }
      },
      {
        id: 5252,
        title: "Mecklenburg Rural Bioeconomy Research Grant",
        type: "Grant",
        subject: "environment",
        subjects: ["environment", "biology", "chemistry"],
        desc: "Research grant supporting student thesis projects in circular agricultural residue utilization and soil carbon sequestration.",
        funding: "€2,500 project grant and laboratory consumables support",
        fee: "€0 application fee",
        tuition: "Direct research project support",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.hs-nb.de/forschung-und-transfer/",
        requirements: {
          gpa: "Enrolled master's or senior bachelor's student with minimum 2.3 German grade",
          ielts: "German or English scientific proficiency",
          gre: "Not required",
          papers: "5-page thesis project proposal on sustainable bioeconomy applications",
          references: "Endorsement by faculty thesis supervisor"
        }
      },
      {
        id: 5253,
        title: "Master of Science in Landscape Architecture Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "Postgraduate master's degree exploring ecological landscape restoration, regional spatial planning, and climate-resilient urban green spaces.",
        funding: "Eligible for German chamber of architects study grants",
        fee: "€0 application fee",
        tuition: "Tuition-free public university program",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hs-nb.de/studiengaenge/master-landschaftsarchitektur/",
        requirements: {
          gpa: "Bachelor's degree in landscape architecture, open space planning, or urban design (210 ECTS)",
          ielts: "German proficiency at DSH-2 or TestDaF 4 level",
          gre: "Not required",
          papers: "Design portfolio showing landscape master plans and environmental analyses",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2268,
        name: "Prof. Dr. Gerd Teschke",
        title: "Rector and Professor of Applied Mathematics",
        department: "Department of Landscape Sciences and Geomatics",
        subject: "mathematics",
        interests: ["Wavelet Analysis", "Inverse Problems in Imaging", "Higher Education Strategy"],
        summary: "Prof. Dr. Gerd Teschke leads Hochschule Neubrandenburg, conducting advanced research in mathematical image reconstruction and spatial modeling.",
        source: "https://www.hs-nb.de/hochschule/leitung-und-gremien/rektorat/",
        recruiting: "Not verified"
      },
      {
        id: 2269,
        name: "Prof. Dr. Leif-Alexander Garbe",
        title: "Professor of Food Chemistry and Biotechnology",
        department: "Department of Agriculture and Food Sciences",
        subject: "chemistry",
        interests: ["Fermentation Science", "Bioactive Food Ingredients", "Brewing Technology"],
        summary: "Prof. Dr. Leif-Alexander Garbe analyzes volatile aroma compounds, brewing fermentation kinetics, and functional food biochemistry.",
        source: "https://www.hs-nb.de/fachbereich-agrarwirtschaft-und-lebensmittelwissenschaften/fakultaet/personen/",
        recruiting: "Not verified"
      },
      {
        id: 2270,
        name: "Prof. Dr. Andreas Wehrenpfennig",
        title: "Professor of Geoinformatics and Database Systems",
        department: "Department of Landscape Sciences and Geomatics",
        subject: "computer-science",
        interests: ["Geographic Information Systems", "Spatial Database Architectures", "Remote Sensing Web Services"],
        summary: "Prof. Dr. Andreas Wehrenpfennig investigates high-performance spatial database management and interactive web-GIS interfaces for environmental monitoring.",
        source: "https://www.hs-nb.de/fachbereich-landschaftswissenschaften-und-geomatik/fakultaet/personen/",
        recruiting: "Not verified"
      }
    ]
  },

  // 9. Germany: Niederrhein University of Applied Sciences (Hochschule Niederrhein)
  {
    institution: "Niederrhein University of Applied Sciences",
    slug: "niederrhein-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 336,
    location: "Krefeld & Mönchengladbach, North Rhine-Westphalia, Germany",
    website: "https://www.hs-niederrhein.de",
    shortName: "Hochschule Niederrhein",
    badge: "European Leader in Textile & Chemical Engineering",
    overview: "Niederrhein University of Applied Sciences (Hochschule Niederrhein), situated in Krefeld and Mönchengladbach in western Germany, is one of the largest and most prestigious universities of applied sciences in the country with over 14,000 students. The university is internationally famous for housing Europe's largest faculty of textile and clothing technology, alongside leading engineering, chemistry, computer science, and business faculties.",
    lead: "Explore textile technology engineering, applied chemistry bachelors, smart logistics masters, and North Rhine-Westphalia research grants at Hochschule Niederrhein.",
    description: "Hochschule Niederrhein degree programs in textile engineering, chemistry, computer science, design, and German industrial scholarships.",
    quickFacts: {
      type: "Public University of Applied Sciences",
      campus: "Campuses in Krefeld (South & West) and Mönchengladbach, North Rhine-Westphalia",
      accreditation: "Ministry of Culture and Science of the State of North Rhine-Westphalia / ASIIN",
      admissions: "Fachhochschulreife / Abitur; international qualifications via uni-assist",
      language: "German (DSH-2 / TestDaF 4); select international programs in English",
      aid: "Deutschlandstipendium, NRW-Scholarship Programme & BAföG"
    },
    strengths: [
      "Europe's largest academic institution for textile and clothing technology (FTB Research Institute)",
      "Premier chemistry faculty with advanced polymer, coating, and surface engineering research",
      "Innovative dual study (Duales Studium) combining vocational training with bachelor's degrees",
      "Close partnerships with North Rhine-Westphalian chemical and manufacturing giants (Bayer, Lanxess, Evonik)"
    ],
    programs: [
      { title: "Bachelor of Science in Textile and Clothing Technology", level: "Bachelor's Degree", desc: "Seven-semester engineering degree taught in German or English covering smart technical textiles, yarn spinning, and apparel production." },
      { title: "Master of Science in Applied Chemistry", level: "Master's Degree", desc: "Four-semester postgraduate degree specializing in polymer synthesis, surface coatings, environmental chemistry, and instrumental analytics." },
      { title: "Bachelor of Science in Computer Science (Informatik)", level: "Bachelor's Degree", desc: "Practical computer science program focusing on distributed software systems, cloud computing, cybersecurity, and embedded IoT." }
    ],
    opportunities: [
      {
        id: 5254,
        title: "Deutschlandstipendium at Hochschule Niederrhein",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "computer-science"],
        desc: "Federal scholarship funded by industry partners (including chemical and textile corporations) for high-achieving students across all faculties.",
        funding: "€300 per month (€3,600 per year) non-repayable cash stipend",
        fee: "€0 application fee",
        tuition: "Tuition-free public university education; semester ticket approx. €320",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hs-niederrhein.de/deutschlandstipendium/",
        requirements: {
          gpa: "Superior academic records (German grade 2.0 or better)",
          ielts: "Language certificate appropriate to degree program (German or English)",
          gre: "Not required",
          papers: "Motivation letter, CV, and proof of social engagement or prizes",
          references: "One professor or employer reference"
        }
      },
      {
        id: 5255,
        title: "Bachelor of Science in Textile and Clothing Technology (English Track) Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        desc: "Seven-semester international degree covering technical textiles, composite materials, sustainable dyeing, and supply chain logistics.",
        funding: "NRW textile industry scholarships and Erasmus+ grants",
        fee: "€0 application fee",
        tuition: "Tuition-free state higher education; standard semester ticket fee applies",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-niederrhein.de/textil-und-bekleidungstechnik/studieninteressierte/bsc-textile-and-clothing-management/",
        requirements: {
          gpa: "University entrance qualification (Abitur, IB, or high school diploma with STEM subjects)",
          ielts: "IELTS 6.0 or TOEFL iBT 80 (for English track)",
          gre: "Not required",
          papers: "Certified academic transcripts and curriculum vitae",
          references: "Not required"
        }
      },
      {
        id: 5256,
        title: "Master of Science in Applied Chemistry Enrolment",
        type: "Course",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Four-semester master's program providing state-of-the-art laboratory training in polymer engineering, coatings, and organic synthesis.",
        funding: "Paid research assistantships with regional chemical industry partners",
        fee: "€0 application fee",
        tuition: "Tuition-free state education",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.hs-niederrhein.de/chemie/studieninteressierte/msc-applied-chemistry/",
        requirements: {
          gpa: "Bachelor of Science in chemistry or chemical engineering with at least 210 ECTS and minimum German grade 2.5",
          ielts: "German DSH-2 or TestDaF 4; English B2",
          gre: "Not required",
          papers: "Bachelor's degree certificate, transcript of records, and CV",
          references: "Not required"
        }
      },
      {
        id: 5257,
        title: "NRW Chemical & Polymer Industry Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "20-week mandatory industrial engineering internship in major North Rhine-Westphalia chemical parks (Krefeld-Uerdingen, Leverkusen, or Dormagen).",
        funding: "€1,000 - €1,500 monthly industrial stipend",
        fee: "€0 application fee",
        tuition: "Integrated into degree program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.hs-niederrhein.de/chemie/studierende/praxissemester/",
        requirements: {
          gpa: "Successful completion of all 1st to 4th semester chemistry laboratory exams",
          ielts: "German B2 level",
          gre: "Not required",
          papers: "Internship training contract with accredited chemical enterprise",
          references: "Approval from department internship advisor"
        }
      },
      {
        id: 5258,
        title: "Bachelor of Science in Informatik (Computer Science) Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Seven-semester practical degree providing in-depth software engineering, database management, mobile applications, and network security skills.",
        funding: "Dual study agreements with IT service providers in the Rhine-Ruhr metropolitan region",
        fee: "€0 application fee",
        tuition: "Tuition-free state higher education",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-niederrhein.de/elektrotechnik-informatik/studieninteressierte/bsc-informatik/",
        requirements: {
          gpa: "Fachhochschulreife or Allgemeine Hochschulreife",
          ielts: "German proficiency at DSH-2 or TestDaF 4 level",
          gre: "Not required",
          papers: "School certificates and resume",
          references: "Not required"
        }
      },
      {
        id: 5259,
        title: "Forschungsinstitut für Textil und Bekleidung (FTB) Research Fellowship",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        desc: "Research grant supporting graduate student investigations into technical textiles, smart sensor clothing, and recyclable synthetic fibers.",
        funding: "€3,500 research grant and technical laboratory equipment access",
        fee: "€0 application fee",
        tuition: "Direct research project funding",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.hs-niederrhein.de/ftb/",
        requirements: {
          gpa: "Enrolled in master's program with minimum 2.3 GPA",
          ielts: "English or German scientific literacy",
          gre: "Not required",
          papers: "5-page thesis project proposal on smart textile engineering",
          references: "Endorsement by FTB research director"
        }
      },
      {
        id: 5260,
        title: "Bachelor of Arts in Design (Kommunikationsdesign) Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Seven-semester creative degree in visual brand communication, editorial typography, digital interface design, and motion graphics.",
        funding: "Design association bursaries and competition awards",
        fee: "€0 application fee",
        tuition: "Tuition-free public university program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.hs-niederrhein.de/design/studieninteressierte/ba-design/",
        requirements: {
          gpa: "Higher education entrance qualification",
          ielts: "German language proficiency",
          gre: "Not required",
          papers: "Creative design portfolio containing 15-20 original works",
          references: "Passing the artistic aptitude examination"
        }
      }
    ],
    researchers: [
      {
        id: 2271,
        name: "Dr. Thomas Grünewald",
        title: "President and Professor",
        department: "University Leadership and Governance",
        subject: "social-sciences",
        interests: ["Higher Education Governance", "Regional Innovation Systems", "Dual Study Pedagogies"],
        summary: "Dr. Thomas Grünewald serves as President of Hochschule Niederrhein, spearheading sustainability initiatives and industrial digital transformation.",
        source: "https://www.hs-niederrhein.de/hochschule/praesidium/",
        recruiting: "Not verified"
      },
      {
        id: 2272,
        name: "Prof. Dr. Maike Rabe",
        title: "Head of the Research Institute for Textile and Clothing (FTB)",
        department: "Faculty of Textile and Clothing Technology",
        subject: "engineering",
        interests: ["Technical Textiles", "Surface Functionalization", "Smart Wearables", "Sustainable Fiber Recycling"],
        summary: "Prof. Dr. Maike Rabe directs the FTB Institute, pioneering antibacterial textile coatings, electronic integration into fibers, and closed-loop garment recycling.",
        source: "https://www.hs-niederrhein.de/ftb/personen/",
        recruiting: "Not verified"
      },
      {
        id: 2273,
        name: "Prof. Dr. Martin Jäger",
        title: "Professor of Organic Chemistry and Polymer Synthesis",
        department: "Faculty of Chemistry",
        subject: "chemistry",
        interests: ["Polymer Chemistry", "Industrial Coatings", "Sustainable Catalysis"],
        summary: "Prof. Dr. Martin Jäger investigates bio-based resins, advanced polyurethane coatings, and catalytic mechanisms for industrial polymer manufacturing.",
        source: "https://www.hs-niederrhein.de/chemie/fakultaet/personen/",
        recruiting: "Not verified"
      }
    ]
  },

  // 10. Italy: MUNER Motorvehicle University of Emilia-Romagna
  {
    institution: "MUNER Motorvehicle University of Emilia-Romagna",
    slug: "muner-motorvehicle-university-of-emilia-romagna",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 486,
    location: "Modena, Bologna, Parma, Reggio Emilia, Italy",
    website: "https://motorvehicleuniversity.com",
    shortName: "MUNER",
    badge: "Italian Motor Valley Supercar Engineering Hub",
    overview: "MUNER (Motorvehicle University of Emilia-Romagna) is a unique, world-renowned academic consortium established through the collaboration of four historic universities (Bologna, Ferrara, Modena & Reggio Emilia, and Parma) and the world's most legendary automotive and motorsport companies: Ferrari, Lamborghini, Ducati, Dallara, Maserati, Pagani, Haas F1, AlphaTauri, Magneti Marelli, and HPE COXA. Taught entirely in English, MUNER delivers cutting-edge master's degrees in high-performance automotive and electric vehicle engineering.",
    lead: "Explore world-class supercar engineering master's, electric powertrain degrees, Ferrari & Lamborghini lab practicums, and Italian Motor Valley fellowships at MUNER.",
    description: "MUNER Motorvehicle University of Emilia-Romagna master's degrees in Advanced Automotive Engineering, Electric Vehicle Engineering, and Ferrari/Lamborghini sponsorships.",
    quickFacts: {
      type: "Inter-University Consortium & Supercar Academy",
      campus: "Campuses across Modena (UNIMORE), Bologna (UNIBO), Parma (UNIPR) & Dallara Academy",
      accreditation: "Italian Ministry of University and Research (MUR) / European Master's Framework",
      admissions: "Highly competitive international selection based on bachelor GPA, technical assessment, and video interview",
      language: "100% English (minimum IELTS 6.5 or CEFR B2)",
      aid: "Emilia-Romagna Region ER.GO Study Grants & Corporate Partner Full Scholarships"
    },
    strengths: [
      "Direct laboratory and wind tunnel training with Ferrari, Ducati, Lamborghini, and Dallara chief engineers",
      "Specialized tracks in High Performance Car Design, Racing Car Design, Advanced Powertrain, and Autonomous Driving",
      "Hands-on telemetry analysis, vehicle dynamics track testing at Varano and Fiorano circuits",
      "Over 95% immediate employment rate in premier motorsport teams and luxury hypercar manufacturers"
    ],
    programs: [
      { title: "Master of Science in Advanced Automotive Engineering (AAE)", level: "Master's Degree", desc: "Two-year 120-ECTS English-taught degree with tracks in Racing Car Design, High Performance Car Design, Powertrain, and Advanced Motorcycle Engineering." },
      { title: "Master of Science in Electric Vehicle Engineering (EVE)", level: "Master's Degree", desc: "Cutting-edge degree covering battery chemistry, high-voltage electric motors, battery management systems (BMS), and power electronics." },
      { title: "Master of Science in Electronic Technologies for Electric Vehicles (ETEV)", level: "Master's Degree", desc: "Specialized postgraduate program focusing on automotive microelectronics, vehicular telematics, sensors, and functional safety (ISO 26262)." }
    ],
    opportunities: [
      {
        id: 5261,
        title: "Motor Valley Automotive Talent Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Competitive merit scholarship co-funded by Motor Valley industrial partners covering full tuition and living expenses for top-ranked incoming international students.",
        funding: "€10,000 per academic year plus full tuition fee waiver",
        fee: "€50 university admission assessment fee",
        tuition: "Standard tuition waived under fellowship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://motorvehicleuniversity.com/scholarships-and-funding/",
        requirements: {
          gpa: "First-class bachelor's degree in mechanical, automotive, aerospace, or electronic engineering with minimum 80% mark",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 85",
          gre: "GRE quantitative score > 158 strongly recommended",
          papers: "1,000-word statement of purpose on motorsport or electric vehicle engineering career goals",
          references: "Two academic recommendation letters from engineering professors"
        }
      },
      {
        id: 5262,
        title: "MSc in Advanced Automotive Engineering (AAE) Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Two-year master's program taught in English in Modena and Bologna with tracks in Racing Car Design, High Performance Car Design, and Advanced Powertrain.",
        funding: "Eligible for Emilia-Romagna ER.GO regional university bursaries",
        fee: "€50 application fee",
        tuition: "€2,900 per academic year for EU/EEA students; income-adjusted for non-EU",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://motorvehicleuniversity.com/courses/advanced-automotive-engineering/",
        requirements: {
          gpa: "Bachelor's degree in mechanical, aerospace, or mechatronic engineering (minimum 180 ECTS)",
          ielts: "English B2 certificate (IELTS 6.5 or equivalent)",
          gre: "Not required; technical entrance test required",
          papers: "Curriculum vitae, transcript of records with detailed syllabus descriptions",
          references: "Academic reference letters"
        }
      },
      {
        id: 5263,
        title: "Ferrari & Dallara Trackside Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Six-month master's thesis research and internship placement embedded within racing engineering teams at Ferrari, Dallara, or Lamborghini.",
        funding: "€1,000 - €1,500 monthly corporate expense allowance and trackside accommodation",
        fee: "€0 application fee",
        tuition: "Integrated into 30-ECTS master's thesis",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://motorvehicleuniversity.com/internships-and-careers/",
        requirements: {
          gpa: "Completed 1st year of MUNER MSc with minimum average grade of 27/30",
          ielts: "Fluent English; Italian B1 advantageous for trackside communication",
          gre: "Not required",
          papers: "Master's thesis topic outline and engineering project portfolio",
          references: "Approval from MUNER company mentor and academic supervisor"
        }
      },
      {
        id: 5264,
        title: "MSc in Electric Vehicle Engineering (EVE) Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Two-year English-taught degree offered between Bologna and Modena focusing on battery cell architectures, electric traction inverters, and thermal management.",
        funding: "Industrial sponsorships from leading electric mobility tech partners",
        fee: "€50 application fee",
        tuition: "€2,900 per year standard Italian public tuition rate",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://motorvehicleuniversity.com/courses/electric-vehicle-engineering/",
        requirements: {
          gpa: "Bachelor's degree in electrical, electronic, energy, or mechanical engineering",
          ielts: "IELTS 6.5 or CEFR B2",
          gre: "Not required",
          papers: "Academic transcript, CV, and statement of motivation",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5265,
        title: "Ducati Corse High-Performance Motorcycle Dynamics Grant",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Research grant awarded to master's candidates in the Advanced Motorcycle Engineering track investigating multi-body motorcycle dynamics and aerodynamic winglets.",
        funding: "€4,000 research award and access to Ducati Corse telemetry labs",
        fee: "€0 application fee",
        tuition: "Direct research project support",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://motorvehicleuniversity.com/research-and-innovation/",
        requirements: {
          gpa: "Enrolled in MUNER Advanced Motorcycle Engineering track with top marks in vehicle dynamics",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Research proposal focusing on two-wheel vehicle stability and cornering aerodynamics",
          references: "Faculty recommendation from UNIBO or UNIMORE motorcycle dynamics chair"
        }
      },
      {
        id: 5266,
        title: "ER.GO Regional Study Grant for MUNER Students",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Regional right-to-study grant providing free university cafeteria meals, student residence accommodation, and cash stipends based on family economic status (ISEE).",
        funding: "Up to €6,500 annual living subsidy and full tuition exemption",
        fee: "€0 application fee",
        tuition: "Complete exemption from university enrollment fees",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.er-go.it/",
        requirements: {
          gpa: "Enrolled student at MUNER satisfying minimum annual credit thresholds",
          ielts: "English B2",
          gre: "Not required",
          papers: "Equivalent Economic Situation Indicator (ISEE Parificato) documentation",
          references: "Not required"
        }
      },
      {
        id: 5267,
        title: "MSc in Electronic Technologies for Electric Vehicles (ETEV) Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Two-year postgraduate curriculum focused on wide bandgap semiconductors (SiC and GaN), automotive communication protocols, and autonomous driving sensors.",
        funding: "Semiconductor industry bursaries from STMicroelectronics and Magneti Marelli",
        fee: "€50 application fee",
        tuition: "€2,900 per academic year",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://motorvehicleuniversity.com/courses/electronic-technologies-for-electric-vehicles/",
        requirements: {
          gpa: "Bachelor's in electronic, telecommunications, or computer engineering with at least 180 ECTS",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Curriculum vitae and academic transcripts",
          references: "Two letters of recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2274,
        name: "Prof. Ing. Francesco Leali",
        title: "Director of MUNER and Professor of Industrial Engineering",
        department: "Department of Engineering \"Enzo Ferrari\" (UNIMORE)",
        subject: "engineering",
        interests: ["Vehicle System Engineering", "Product Lifecycle Management", "Automotive Design Methods"],
        summary: "Prof. Ing. Francesco Leali coordinates MUNER's inter-university curricula, researching digital twin systems, chassis design, and integrated automotive manufacturing.",
        source: "https://motorvehicleuniversity.com/about-us/faculty/",
        recruiting: "Not verified"
      },
      {
        id: 2275,
        name: "Prof. Ing. Nicolò Cavina",
        title: "Professor of Internal Combustion Engines and Hybrid Powertrains",
        department: "Department of Industrial Engineering (UNIBO)",
        subject: "engineering",
        interests: ["Hybrid Powertrain Control", "Engine Diagnostics", "Energy Recovery Systems"],
        summary: "Prof. Ing. Nicolò Cavina collaborates with Ferrari and Maserati on energy optimization, hybrid battery control algorithms, and emission reduction in supercars.",
        source: "https://www.unibo.it/sitoweb/nicolo.cavina/en",
        recruiting: "Not verified"
      },
      {
        id: 2276,
        name: "Prof. Ing. Elena Bassoli",
        title: "Professor of Manufacturing Technology",
        department: "Department of Engineering \"Enzo Ferrari\" (UNIMORE)",
        subject: "engineering",
        interests: ["Additive Manufacturing for Motorsport", "Metal 3D Printing", "Lightweight Structural Alloys"],
        summary: "Prof. Ing. Elena Bassoli conducts research into selective laser melting and advanced metal additive manufacturing for Formula 1 and supercar engine components.",
        source: "https://personale.unimore.it/rubrica/dettaglio/ebassoli",
        recruiting: "Not verified"
      }
    ]
  }
];
