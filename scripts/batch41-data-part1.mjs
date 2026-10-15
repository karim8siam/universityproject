// Batch 41 - Part 1: Universities 1 to 10
// Canada (5), Germany (4), Italy (1)
// Opps: 4568 to 4637 (70 opps)
// Researchers: 1977 to 2006 (30 researchers)

export const part1Universities = [
  // 1. Canada: University Canada West (UCW)
  {
    institution: "University Canada West (UCW)",
    slug: "university-canada-west-ucw",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 99,
    location: "Vancouver, British Columbia, Canada",
    website: "https://www.ucanwest.ca",
    shortName: "UCW Vancouver",
    badge: "Business Innovation & Tech Enterprise",
    overview: "University Canada West (UCW) is an innovative business- and technology-oriented institution located in the heart of downtown Vancouver, delivering ACBSP-accredited business administration and digital media degrees tailored for global career mobility.",
    lead: "Explore ACBSP-accredited MBA scholarships, digital business fellowships, and technology management degrees at University Canada West.",
    description: "University Canada West undergraduate and graduate programs in Vancouver featuring MBA specializations, financial awards, and tech leadership studies.",
    quickFacts: {
      type: "Private Contemporary Business University",
      campus: "Vancouver House & West Pender Campuses, Downtown Vancouver",
      accreditation: "Degree Quality Assessment Board (DQAB) of BC / ACBSP / NCMA",
      admissions: "Rolling Admissions (Fall, Winter, Spring, Summer terms)",
      language: "English (IELTS 6.5 minimum overall)",
      aid: "Founder's Scholarship, International Student Leaders Award, MBA Grants"
    },
    strengths: [
      "ACBSP-accredited Master of Business Administration (MBA)",
      "Digital transformation and enterprise business analytics",
      "Prime downtown Vancouver campus hubs at iconic Vancouver House",
      "Extensive industry networking across Canadian tech and commerce hubs"
    ],
    programs: [
      { title: "Master of Business Administration (MBA)", level: "Graduate Degree", desc: "Intensive business leadership degree with electives in business analytics, digital marketing, leadership, and fintech." },
      { title: "Bachelor of Commerce (BCom)", level: "Undergraduate Degree", desc: "Comprehensive commerce education focusing on managerial accounting, supply chain logistics, and entrepreneurship." },
      { title: "Bachelor of Arts in Business Communication (BABC)", level: "Undergraduate Degree", desc: "Integrated media and communications degree emphasizing digital media storytelling, PR, and corporate brand management." }
    ],
    opportunities: [
      {
        id: 4568,
        title: "UCW International Student Leaders Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit-based tuition scholarship awarded to international undergraduate and graduate candidates exhibiting exemplary leadership in community and business domains.",
        funding: "Up to CAD $12,000 tuition reduction distributed across program terms",
        fee: "CAD $150 application assessment fee",
        tuition: "CAD $19,350/year (undergraduate) or CAD $38,700 total program (MBA)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.ucanwest.ca/admissions/awards-scholarships/",
        requirements: {
          gpa: "3.2/4.0 minimum cumulative equivalent",
          ielts: "IELTS 6.5 overall (minimum 6.0 in writing band)",
          gre: "Not required",
          papers: "Personal statement (500 words) describing demonstrated leadership achievements",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4569,
        title: "Master of Business Administration (MBA) in Digital Transformation",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Two-year specialized MBA tract combining enterprise resource management, cloud data governance, and strategic technology consulting.",
        funding: "Merit bursaries up to CAD $7,000 based on admission tier and GPA",
        fee: "CAD $150 international evaluation fee",
        tuition: "CAD $38,700 total program tuition for international students",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        source: "https://www.ucanwest.ca/programs/mba-degree/",
        requirements: {
          gpa: "3.0/4.0 in bachelor's degree in business, IT, or quantitative discipline",
          ielts: "IELTS 6.5 overall (writing 6.0)",
          gre: "GMAT/GRE optional with 3+ years relevant management experience",
          papers: "Professional resume and 750-word MBA career intent essay",
          references: "Two supervisory or academic reference forms"
        }
      },
      {
        id: 4570,
        title: "UCW Americas & Commonwealth Academic Excellence Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Regional scholarship program supporting outstanding students entering undergraduate or graduate degree paths at UCW.",
        funding: "CAD $8,000 to CAD $14,000 applied towards tuition across academic quarters",
        fee: "CAD $150 application processing",
        tuition: "CAD $19,350 per academic year",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.ucanwest.ca/admissions/awards-scholarships/",
        requirements: {
          gpa: "3.4/4.0 or equivalent high school / undergraduate transcript",
          ielts: "IELTS 6.5 (minimum 6.0 in all subcomponents)",
          gre: "Not required",
          papers: "Essay on contributing to sustainable commerce in British Columbia",
          references: "One academic referee letter"
        }
      },
      {
        id: 4571,
        title: "Bachelor of Arts in Business Communication (BABC) Admission",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year undergraduate degree exploring digital content strategy, multiplatform brand communication, and consumer psychology.",
        funding: "First-year entrance awards up to CAD $5,000",
        fee: "CAD $150 international student fee",
        tuition: "CAD $19,350 per year (30 credits)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.ucanwest.ca/programs/bachelor-of-arts-in-business-communication/",
        requirements: {
          gpa: "Secondary school graduation with minimum C+ average (65%)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of interest in digital media and corporate communications",
          references: "One high school counselor or educator recommendation"
        }
      },
      {
        id: 4572,
        title: "Vancouver Tech Innovation & Entrepreneurship Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Co-op and integrated work-term practicum connecting UCW students with Vancouver's leading technology startups and venture incubators.",
        funding: "CAD $2,800 to $4,200 monthly paid work placement stipend",
        fee: "None (included in co-op enrolment fee CAD $450)",
        tuition: "Standard term tuition applies",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.ucanwest.ca/student-life/career-development-centre/",
        requirements: {
          gpa: "3.0/4.0 cumulative GPA after completing 30 credits at UCW",
          ielts: "Demonstrated professional English communication",
          gre: "Not required",
          papers: "Updated technical CV and cover letter targeting Vancouver tech employers",
          references: "Approval from UCW Career Development Centre"
        }
      },
      {
        id: 4573,
        title: "Executive Fellowship in Sustainable Business Strategy",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "One-year post-degree or graduate research fellowship investigating ESG reporting, carbon accounting, and clean tech enterprise models in Western Canada.",
        funding: "CAD $18,000 stipend plus full tuition waiver for fellowship colloquia",
        fee: "CAD $100",
        tuition: "Fully waived for the fellowship year",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.ucanwest.ca/about/research/",
        requirements: {
          gpa: "3.5/4.0 in master's degree in business, economics, or environmental management",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Research proposal (1,200 words) on ESG compliance in Canadian supply chains",
          references: "Two academic or industry research references"
        }
      },
      {
        id: 4574,
        title: "Certificate in Applied Financial Modeling & FinTech Systems",
        type: "Course",
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        desc: "Post-baccalaureate professional certificate program covering algorithmic trading models, risk forecasting, and decentralized finance architectures.",
        funding: "Early enrollment discount CAD $1,200",
        fee: "CAD $75",
        tuition: "CAD $6,450 complete certificate tuition",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.ucanwest.ca/programs/",
        requirements: {
          gpa: "2.75/4.0 in undergraduate coursework with introductory statistics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement outlining quantitative finance objectives",
          references: "One academic or employer recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1977,
        name: "Dr. Bashir Makhoul",
        title: "President and Vice-Chancellor",
        department: "Executive Leadership & Cultural Management",
        email: "president@ucanwest.ca",
        website: "https://www.ucanwest.ca/about/leadership/",
        recruiting: "Not verified",
        interests: ["Higher education globalization", "Cultural industry entrepreneurship", "Institutional strategy", "Creative economy economics"]
      },
      {
        id: 1978,
        name: "Dr. Michele Vincenti",
        title: "Professor of Leadership & Management",
        department: "Department of Business Administration",
        email: "michele.vincenti@ucanwest.ca",
        website: "https://www.ucanwest.ca/about/faculty/",
        recruiting: "Not verified",
        interests: ["Family business governance", "Organizational behavior", "Cross-cultural negotiation", "Corporate entrepreneurship"]
      },
      {
        id: 1979,
        name: "Dr. Gelareh Farhadian",
        title: "Associate Professor of Marketing & Digital Media",
        department: "Department of Marketing & Communications",
        email: "gelareh.farhadian@ucanwest.ca",
        website: "https://www.ucanwest.ca/about/faculty/",
        recruiting: "Not verified",
        interests: ["Digital consumer behavior", "Brand equity modeling", "Social media marketing", "Retail customer experience"]
      }
    ]
  },

  // 2. Canada: University College of the North (UCN)
  {
    institution: "University College of the North (UCN)",
    slug: "university-college-of-the-north-ucn",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 100,
    location: "The Pas & Thompson, Manitoba, Canada",
    website: "https://www.ucn.ca",
    shortName: "UCN Manitoba",
    badge: "Indigenous & Northern Community Education",
    overview: "University College of the North (UCN) is a community-embedded post-secondary institution dedicated to serving northern Manitoba through culturally grounded university degrees, diploma programs, and research tailored to Indigenous self-determination and northern resource stewardship.",
    lead: "Discover northern healthcare degrees, Indigenous education diplomas, and boreal resource research grants at University College of the North.",
    description: "University College of the North academic degree programs, bursaries, and northern community health studies across campuses in The Pas and Thompson.",
    quickFacts: {
      type: "Public University College",
      campus: "The Pas Campus & Thompson Campus, Manitoba",
      accreditation: "Government of Manitoba / Universities Canada Affiliate",
      admissions: "Fall (September) and Winter (January) intake sessions",
      language: "English (with Cree and Dene language learning centres)",
      aid: "Manitoba Student Aid, UCN Foundation Bursaries, Indspire Awards"
    },
    strengths: [
      "Culturally responsive Bachelor of Nursing in collaboration with UM",
      "Indigenous teacher education (Kenanow Learning Model)",
      "Boreal ecosystem research and northern wildlife conservation",
      "Extensive network of 12 regional community access centres across Manitoba"
    ],
    programs: [
      { title: "Bachelor of Nursing (Joint UCN/UM Program)", level: "Undergraduate Degree", desc: "Four-year comprehensive nursing degree preparing registered nurses for remote, rural, and northern community healthcare practice." },
      { title: "Bachelor of Arts in Aboriginal and Northern Studies", level: "Undergraduate Degree", desc: "Interdisciplinary degree covering Indigenous legal orders, northern policy, land claims, and circumpolar history." },
      { title: "Bachelor of Education (Kenanow Bachelor of Education)", level: "Undergraduate Degree", desc: "Holistic teacher preparation grounded in Indigenous worldviews, northern school curricula, and bilingual pedagogy." }
    ],
    opportunities: [
      {
        id: 4575,
        title: "UCN Northern Manitoba Health Sciences Bursary",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition and living stipend bursary supporting northern and Indigenous students enrolled in nursing, community health, and bioscience degrees.",
        funding: "CAD $6,000 per academic year plus clinical practicum travel allowance",
        fee: "CAD $50 standard domestic / CAD $100 international",
        tuition: "CAD $4,850/year (Canadian residents) or CAD $11,200/year (International)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.ucn.ca/admissions/awards-bursaries/",
        requirements: {
          gpa: "70% minimum average in Grade 12 Biology and Chemistry",
          ielts: "IELTS 6.5 overall (no band below 6.0)",
          gre: "Not required",
          papers: "500-word statement on commitment to healthcare service in northern communities",
          references: "Two character or academic references"
        }
      },
      {
        id: 4576,
        title: "Bachelor of Arts in Aboriginal & Northern Studies Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year undergraduate degree exploring northern Canadian treaties, Indigenous self-governance, and sustainable subarctic community economics.",
        funding: "Band sponsorship eligible and UCN First Peoples Entrance Awards CAD $3,000",
        fee: "CAD $50",
        tuition: "CAD $4,600/year (Domestic) or CAD $10,800/year (International)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.ucn.ca/programs/aboriginal-and-northern-studies/",
        requirements: {
          gpa: "High school graduation diploma or mature student admission assessment",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Personal profile letter detailing community engagement",
          references: "One reference letter from community leader or teacher"
        }
      },
      {
        id: 4577,
        title: "Kenanow Indigenous Education Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Pre-service educator fellowship funding students specializing in Indigenous pedagogy, land-based education, and Cree language revitalisation.",
        funding: "CAD $8,500 stipend plus full classroom practicum resources",
        fee: "None",
        tuition: "CAD $4,800 per year",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.ucn.ca/programs/faculty-of-education/",
        requirements: {
          gpa: "2.5/4.0 minimum cumulative GPA in previous post-secondary coursework",
          ielts: "Demonstrated English proficiency",
          gre: "Not required",
          papers: "Teaching philosophy statement grounded in northern community realities",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4578,
        title: "Northern Boreal Ecology & Permafrost Research Internship",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Six-month applied field research internship monitoring subarctic peatland carbon sequestration and freshwater watershed ecology in northern Manitoba.",
        funding: "CAD $3,200 monthly stipend plus northern field accommodation and gear",
        fee: "None",
        tuition: "Credit-bearing internship fee CAD $600",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.ucn.ca/research/",
        requirements: {
          gpa: "3.0/4.0 in biology, environmental science, or geography",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Field experience summary and curriculum vitae",
          references: "One academic faculty recommendation"
        }
      },
      {
        id: 4579,
        title: "Diploma in Natural Resources Management Technology",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Two-year applied polytechnic diploma preparing conservation officers, forest resource technicians, and environmental monitors.",
        funding: "Manitoba Industry Training Grants up to CAD $4,000",
        fee: "CAD $50",
        tuition: "CAD $5,200/year (Domestic) or CAD $11,500/year (International)",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.ucn.ca/programs/natural-resources-management-technology/",
        requirements: {
          gpa: "Grade 12 graduation with Mathematics and Biology credits",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Valid driver's license and physical fitness declaration for outdoor fieldwork",
          references: "One reference letter"
        }
      },
      {
        id: 4580,
        title: "Northern Sustainable Mining & Environmental Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Work-term placement partnering with northern mineral extraction operations to evaluate mine tailings remediation and water treatment technologies.",
        funding: "CAD $3,600 monthly living stipend",
        fee: "None",
        tuition: "Standard term fees apply",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.ucn.ca/programs/trades-and-technology/",
        requirements: {
          gpa: "2.8/4.0 in technology, geology, or environmental engineering studies",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Resume outlining safety certifications (WHMIS, First Aid)",
          references: "One vocational instructor recommendation"
        }
      },
      {
        id: 4581,
        title: "UCN Foundation Mature Student Achievement Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Annual scholarship providing tuition assistance to mature students returning to post-secondary education after entering the workforce.",
        funding: "CAD $2,500 one-time award applied directly to tuition",
        fee: "None",
        tuition: "Standard course fees apply",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        source: "https://www.ucn.ca/admissions/awards-bursaries/",
        requirements: {
          gpa: "Good academic standing (minimum 2.5 GPA)",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "500-word personal essay detailing educational comeback and career goals",
          references: "One community or employer reference"
        }
      }
    ],
    researchers: [
      {
        id: 1980,
        name: "Dr. Dan Smith",
        title: "Vice-President Academic and Research",
        department: "Office of the Vice-President Academic",
        email: "dsmith@ucn.ca",
        website: "https://www.ucn.ca/about-ucn/leadership/",
        recruiting: "Not verified",
        interests: ["Northern higher education policy", "Indigenous research methodologies", "Circumpolar educational governance", "Community-based knowledge creation"]
      },
      {
        id: 1981,
        name: "Dr. Ramona Neckoway",
        title: "Associate Professor of Aboriginal & Northern Studies",
        department: "Department of Aboriginal and Northern Studies",
        email: "rneckoway@ucn.ca",
        website: "https://www.ucn.ca/programs/aboriginal-and-northern-studies/",
        recruiting: "Not verified",
        interests: ["Hydroelectric development impacts on Cree communities", "Indigenous oral histories", "Northern environmental justice", "Land-based pedagogy"]
      },
      {
        id: 1982,
        name: "Dr. Ying Zhang",
        title: "Associate Professor of Nursing",
        department: "Faculty of Health",
        email: "yzhang@ucn.ca",
        website: "https://www.ucn.ca/programs/faculty-of-health/",
        recruiting: "Not verified",
        interests: ["Remote nursing practice", "Chronic disease prevention in northern populations", "Culturally safe healthcare delivery", "Maternal-child health"]
      }
    ]
  },

  // 3. Canada: University of King's College (Halifax)
  {
    institution: "University of King's College",
    slug: "university-of-kings-college-halifax",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 108,
    location: "Halifax, Nova Scotia, Canada",
    website: "https://ukings.ca",
    shortName: "King's College Halifax",
    badge: "Humanities & Investigative Journalism",
    overview: "Established in 1789, the University of King's College is the oldest chartered university in Canada. Renowned for its world-class Foundation Year Programme (FYP) and top-tier School of Journalism, King's offers a rich collegial life in association with Dalhousie University.",
    lead: "Experience Canada's oldest chartered university, famed for its Foundation Year Programme, investigative journalism master's, and Dalhousie partnership.",
    description: "University of King's College degree programs, journalism master's fellowships, and classical humanities curricula in Halifax, Nova Scotia.",
    quickFacts: {
      type: "Public Collegial Liberal Arts & Journalism University",
      campus: "Coburg Road Quadrangle, Central Halifax (adjacent to Dalhousie)",
      accreditation: "Association of Atlantic Universities / Universities Canada",
      admissions: "Fall term admissions deadline March 1 (rolling afterwards)",
      language: "English (IELTS 7.0 for Journalism / 6.5 for Arts)",
      aid: "Major Entrance Scholarships, King's Journalism Bursaries, Nova Scotia Aid"
    },
    strengths: [
      "The Foundation Year Programme (FYP)—celebrated great books curriculum",
      "Master of Journalism (MJ) in investigative and data-driven reporting",
      "Full academic and athletic integration with Dalhousie University",
      "Intimate residential collegiate environment with vibrant choral and literary traditions"
    ],
    programs: [
      { title: "Foundation Year Programme (FYP)", level: "First-Year Interdisciplinary Degree", desc: "Immersion in great texts from antiquity to the contemporary world, blending philosophy, literature, and political thought." },
      { title: "Master of Journalism (MJ)", level: "Graduate Degree", desc: "Professional graduate degree focusing on investigative reporting, open-source intelligence, data visualization, and broadcast media." },
      { title: "Master of Fine Arts in Creative Nonfiction (MFA)", level: "Graduate Degree", desc: "Low-residency professional writing program mentoring authors in publishing narrative nonfiction and memoir." }
    ],
    opportunities: [
      {
        id: 4582,
        title: "King's College Major Entrance Scholarship in Humanities",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Four-year renewable academic scholarship awarded to incoming first-year students enrolling in the Foundation Year Programme.",
        funding: "CAD $6,000 to $12,000 annually (total value up to CAD $48,000 over four years)",
        fee: "CAD $70",
        tuition: "CAD $9,650/year (Domestic NS) or CAD $22,400/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://ukings.ca/admissions/finances/scholarships/",
        requirements: {
          gpa: "Minimum 88% overall average in secondary school grade 12 courses",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "1,000-word critical essay analyzing an argumentative text",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 4583,
        title: "Master of Journalism (MJ) Investigative Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Prestigious graduate fellowship supporting an investigative journalist researching corporate corruption, public accountability, or civil liberties.",
        funding: "CAD $15,000 research stipend plus national newsroom placement support",
        fee: "CAD $115",
        tuition: "CAD $14,200/year (Domestic) or CAD $28,900/year (International)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://ukings.ca/programs/graduate/journalism/",
        requirements: {
          gpa: "3.3/4.0 in undergraduate degree",
          ielts: "IELTS 7.0 overall with no band score below 6.5",
          gre: "Not required",
          papers: "Portfolio of three published journalistic or investigative pieces",
          references: "Three references including at least one news editor"
        }
      },
      {
        id: 4584,
        title: "Master of Fine Arts (MFA) in Creative Nonfiction Admission",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Two-year limited-residency master's program pairing aspiring authors with renowned writing mentors to complete a publishable book manuscript.",
        funding: "Writers' Trust and King's MFA bursaries up to CAD $4,500",
        fee: "CAD $115",
        tuition: "CAD $11,500 per year",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://ukings.ca/programs/graduate/creative-nonfiction/",
        requirements: {
          gpa: "Undergraduate degree in any discipline or substantial writing portfolio",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "3,000-word nonfiction writing sample and 2-page book synopsis",
          references: "Two references speaking to literary and critical ability"
        }
      },
      {
        id: 4585,
        title: "Atlantic Media Data Journalism & Fact-Checking Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Summer investigative internship using Python web scraping, SQL databases, and satellite imagery to investigate public procurement in Atlantic Canada.",
        funding: "CAD $3,800 monthly living stipend for 16 weeks",
        fee: "None",
        tuition: "Tuition-free experiential work term",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://ukings.ca/programs/undergraduate/journalism/",
        requirements: {
          gpa: "3.0/4.0 in journalism, computer science, or statistics",
          ielts: "Demonstrated professional English fluency",
          gre: "Not required",
          papers: "GitHub repository link or portfolio of data visualization projects",
          references: "One academic faculty reference"
        }
      },
      {
        id: 4586,
        title: "Foundation Year Programme (FYP) Open Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "First-year foundational curriculum engaging students with central philosophical, historical, and aesthetic debates of human civilisation.",
        funding: "Automatic entrance awards ranging from CAD $2,000 to $4,000",
        fee: "CAD $70",
        tuition: "CAD $9,650/year (Domestic NS) or CAD $22,400/year (International)",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://ukings.ca/programs/undergraduate/foundation-year-programme/",
        requirements: {
          gpa: "High school completion with Grade 12 English at 75% or higher",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement on reading interests",
          references: "One high school educator recommendation"
        }
      },
      {
        id: 4587,
        title: "Prince Scholarship for African Nova Scotian & Indigenous Students",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Endowed scholarship honoring cultural heritage and supporting historically underrepresented students pursuing degrees at King's.",
        funding: "CAD $6,000 per year, renewable for up to four years ($24,000 total)",
        fee: "None",
        tuition: "Applies toward King's tuition and residence fees",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://ukings.ca/admissions/finances/scholarships/",
        requirements: {
          gpa: "Minimum 80% entering grade average",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Statement of community connection and leadership",
          references: "Two community reference letters"
        }
      },
      {
        id: 4588,
        title: "Dalhousie-King's Environmental Humanities Colloquium Course",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Advanced upper-year seminar analyzing ecological crises through literary history, Indigenous storytelling, and philosophical ethics.",
        funding: "Departmental book prizes and travel subsidies for regional field sites",
        fee: "CAD $70",
        tuition: "CAD $1,150 per 3-credit course",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        source: "https://ukings.ca/programs/undergraduate/contemporary-studies/",
        requirements: {
          gpa: "Successful completion of FYP or second-year standing in Arts",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Prerequisite coursework in humanities or environmental science",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1983,
        name: "Prof. William Lahey",
        title: "President and Vice-Chancellor",
        department: "Office of the President & Faculty of Law",
        email: "president.office@ukings.ca",
        website: "https://ukings.ca/about/leadership/",
        recruiting: "Not verified",
        interests: ["Forestry and natural resource law", "Health law and policy", "Administrative regulation", "Public accountability"]
      },
      {
        id: 1984,
        name: "Prof. Fred Vallance-Jones",
        title: "Associate Professor of Journalism",
        department: "School of Journalism, Writing & Publishing",
        email: "fred.vallance-jones@ukings.ca",
        website: "https://ukings.ca/faculty-staff/fred-vallance-jones/",
        recruiting: "Not verified",
        interests: ["Investigative reporting techniques", "Computer-assisted reporting (CAR)", "Freedom of information legislation", "Data journalism"]
      },
      {
        id: 1985,
        name: "Dr. Laura Penny",
        title: "Associate Professor of Contemporary Studies",
        department: "Contemporary Studies Programme & Early Modern Studies",
        email: "laura.penny@ukings.ca",
        website: "https://ukings.ca/faculty-staff/laura-penny/",
        recruiting: "Not verified",
        interests: ["Critical theory", "Cultural critique and consumerism", "Literature of the Enlightenment", "Digital public sphere ethics"]
      }
    ]
  },

  // 4. Canada: University of Quebec at Chicoutimi (UQAC)
  {
    institution: "University of Quebec at Chicoutimi (UQAC)",
    slug: "universite-du-quebec-a-chicoutimi-uqac",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 117,
    location: "Chicoutimi, Saguenay, Québec, Canada",
    website: "https://www.uqac.ca",
    shortName: "UQAC Saguenay",
    badge: "Boreal Science & Aluminum Technology",
    overview: "The Université du Québec à Chicoutimi (UQAC) is a dynamic research university in the Saguenay–Lac-Saint-Jean region of Québec, globally renowned for its international atmospheric icing research centre (CENGIVRE), aluminum metallurgical engineering, and digital art production studios.",
    lead: "Explore world-renowned atmospheric icing research, aluminum engineering doctorates, and boreal forest science at UQAC in Québec.",
    description: "Université du Québec à Chicoutimi engineering doctorates, atmospheric icing research, and video game animation master's in Saguenay, Québec.",
    quickFacts: {
      type: "Public Research University (Université du Québec Network)",
      campus: "Chicoutimi Campus & NAD Centre Montréal",
      accreditation: "Ministère de l'Enseignement supérieur du Québec",
      admissions: "Fall term (March 1) and Winter term (November 1)",
      language: "French (primary instructional language; research thesis in English permitted)",
      aid: "FRQNT Doctoral Scholarships, UQAC Merit Awards, Mitacs Accelerate"
    },
    strengths: [
      "World-leading International Research Centre on Atmospheric Icing (CENGIVRE)",
      "Centre for Aluminum Research (CURAL) with industrial Rio Tinto partnerships",
      "School of Digital Arts, Animation and Design (NAD-UQAC) based in Montréal",
      "Extensive boreal ecological observatory and sustainable forestry stations"
    ],
    programs: [
      { title: "Doctorat en ingénierie (Ph.D. in Engineering)", level: "Doctoral Degree", desc: "Advanced doctoral research in materials engineering, power line icing mitigation, and smart mechanical systems." },
      { title: "Maîtrise en gestion de projet (Master in Project Management)", level: "Graduate Degree", desc: "Internationally accredited PMI degree preparing senior directors for mega-infrastructure and engineering ventures." },
      { title: "Baccalauréat en développement de jeux vidéo (Video Game Development)", level: "Undergraduate Degree", desc: "Specialized computer science and digital animation degree co-delivered at NAD-UQAC Montréal." }
    ],
    opportunities: [
      {
        id: 4589,
        title: "UQAC CENGIVRE Atmospheric Icing Doctoral Fellowship",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Four-year fully funded doctoral research grant investigating aeronautical icing physics, wind turbine de-icing coatings, and extreme cold climate engineering.",
        funding: "CAD $25,000 per annum plus research travel and wind tunnel testing budget",
        fee: "CAD $90",
        tuition: "Quebec resident rates or provincial differential fee waiver for eligible international candidates",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.uqac.ca/cengivre/",
        requirements: {
          gpa: "3.2/4.3 in master's degree in mechanical, aerospace, or electrical engineering",
          ielts: "English B2 or French B2 proficiency",
          gre: "Not required",
          papers: "Master's thesis summary and 1,500-word proposed doctoral methodology",
          references: "Two academic referee appraisals"
        }
      },
      {
        id: 4590,
        title: "Rio Tinto - CURAL Aluminum Metallurgy Research Grant",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Two-year postdoctoral and graduate research fellowship focused on zero-carbon aluminum smelting, inert anode technology, and alloy lifecycle optimization.",
        funding: "CAD $30,000 annual research stipend plus industrial lab access",
        fee: "CAD $90",
        tuition: "CAD $4,200/year (Québec) or CAD $18,500/year (International)",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.uqac.ca/cural/",
        requirements: {
          gpa: "3.3/4.3 in metallurgical, chemical, or materials engineering",
          ielts: "French or English professional fluency",
          gre: "Not required",
          papers: "Research portfolio including peer-reviewed metallurgy papers",
          references: "Two academic letters"
        }
      },
      {
        id: 4591,
        title: "Maîtrise en gestion de la faune et de ses habitats (M.Sc.)",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Two-year master of science in wildlife habitat management, monitoring caribou herds, boreal freshwater lakes, and subarctic biodiversity.",
        funding: "Lab research assistantships valued at CAD $18,000/year",
        fee: "CAD $90",
        tuition: "CAD $4,200/year (Québec) or CAD $17,900/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.uqac.ca/programmes/maitrise-en-gestion-de-la-faune-et-de-ses-habitats/",
        requirements: {
          gpa: "3.0/4.3 in biology, ecology, forestry, or environmental science",
          ielts: "French TFI 750 or equivalent",
          gre: "Not required",
          papers: "Confirmed thesis supervisor agreement and statement of research interests",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 4592,
        title: "NAD-UQAC Digital Art & 3D Video Game Animation Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Studio internship in Montréal connecting students with global game production studios (Ubisoft, EA, Warner Bros. Games) for real-time engine rendering.",
        funding: "CAD $3,200 monthly paid studio placement stipend",
        fee: "None",
        tuition: "Standard term credit tuition applies",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.nad.ca/",
        requirements: {
          gpa: "3.0/4.3 in digital arts, computer graphics, or multimedia",
          ielts: "Functional English or French",
          gre: "Not required",
          papers: "Artstation or showreel portfolio demonstrating 3D asset modeling",
          references: "One studio instructor recommendation"
        }
      },
      {
        id: 4593,
        title: "Bourse d'Excellence aux Études Supérieures UQAC",
        type: "Scholarship",
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        desc: "Entrance scholarship for high-achieving master's students pursuing applied mathematics, data modeling, or operations research at UQAC.",
        funding: "CAD $5,000 one-time merit award awarded upon registration",
        fee: "CAD $90",
        tuition: "Applied towards semester tuition dues",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.uqac.ca/bourses/",
        requirements: {
          gpa: "3.5/4.3 or equivalent in undergraduate quantitative degree",
          ielts: "French B2 or equivalent",
          gre: "Not required",
          papers: "Curriculum vitae and academic transcripts",
          references: "Two professor evaluations"
        }
      },
      {
        id: 4594,
        title: "Baccalauréat en informatique (B.Sc. in Computer Science)",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-year undergraduate degree with concentrations in artificial intelligence, cybersecurity, and embedded industrial software.",
        funding: "Quebec Perspective Scholarship eligible (CAD $2,500 per successful term, up to CAD $15,000)",
        fee: "CAD $90",
        tuition: "CAD $3,800/year (Québec) or CAD $21,000/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.uqac.ca/programmes/baccalaureat-en-informatique/",
        requirements: {
          gpa: "Diplôme d'études collégiales (DEC) or equivalent secondary completion with mathematics",
          ielts: "French language proficiency",
          gre: "Not required",
          papers: "Secondary school academic transcript",
          references: "Not required for undergraduate admission"
        }
      },
      {
        id: 4595,
        title: "Summer Field School in Boreal Ecology & Dendrochronology",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Intensive 3-credit summer field course based at the Simoncouche Teaching and Research Forest examining tree-ring analysis and climate variability.",
        funding: "Field lodging and lab equipment provided free of charge",
        fee: "CAD $90",
        tuition: "CAD $450 (Quebec residents) / CAD $1,200 (Non-residents)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://foret.uqac.ca/",
        requirements: {
          gpa: "Completion of at least 30 university credits in natural sciences",
          ielts: "French proficiency",
          gre: "Not required",
          papers: "One-page motivation statement for field research",
          references: "One academic reference"
        }
      }
    ],
    researchers: [
      {
        id: 1986,
        name: "Prof. Ghislain Samson",
        title: "Rector",
        department: "Office of the Rector & Educational Research",
        email: "rectorat@uqac.ca",
        website: "https://www.uqac.ca/direction/rectorat/",
        recruiting: "Not verified",
        interests: ["Higher education pedagogy", "STEM curriculum innovation", "Regional university development", "Vocational educational transitions"]
      },
      {
        id: 1987,
        name: "Prof. Masoud Farzaneh",
        title: "Professor Emeritus of Electrical Engineering & Atmospheric Icing",
        department: "Department of Applied Sciences & CENGIVRE",
        email: "masoud_farzaneh@uqac.ca",
        website: "https://www.uqac.ca/cengivre/equipe/",
        recruiting: "Not verified",
        interests: ["Atmospheric icing on power networks", "High voltage electrical insulation", "Cold climate renewable energy", "Surface hydrophobicity"]
      },
      {
        id: 1988,
        name: "Prof. Annie Deslauriers",
        title: "Professor of Forest Ecology & Tree Physiology",
        department: "Department of Fundamental Sciences",
        email: "annie_deslauriers@uqac.ca",
        website: "https://www.uqac.ca/portfolio/anniedeslauriers/",
        recruiting: "Not verified",
        interests: ["Boreal forest xylogenesis", "Dendroecology and climate change", "Carbon allocation in conifers", "Wildfire regeneration dynamics"]
      }
    ]
  },

  // 5. Canada: École nationale d'administration publique (ENAP)
  {
    institution: "École nationale d'administration publique (ENAP)",
    slug: "ecole-nationale-d-administration-publique-enap",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 143,
    location: "Québec City & Montréal, Québec, Canada",
    website: "https://enap.ca",
    shortName: "ENAP Québec",
    badge: "Public Administration & Governance",
    overview: "The École nationale d'administration publique (ENAP) is a specialized university of the Université du Québec network dedicated exclusively to the study and modern practice of public administration, public policy analysis, and state governance across Francophone and international public sectors.",
    lead: "Master public sector governance, policy evaluation, and administrative leadership at ENAP, Canada's premier Francophone school of public administration.",
    description: "École nationale d'administration publique graduate degrees, MPA scholarships, and public policy research fellowships across Québec.",
    quickFacts: {
      type: "Public Specialized Graduate University (Université du Québec)",
      campus: "Québec City, Montréal, Gatineau, Saguenay, and Trois-Rivières",
      accreditation: "Ministère de l'Enseignement supérieur du Québec / NASPAA Affiliate",
      admissions: "Trimester intakes (Fall, Winter, Summer terms)",
      language: "French (principal language of instruction and examination)",
      aid: "Fondation de l'ENAP Fellowships, Mitacs Globalink, Québec Government Aid"
    },
    strengths: [
      "Sole university in Canada exclusively focused on graduate public administration",
      "Master of Public Administration (MPA) for executives and public policy analysts",
      "Centre for Research on Public Governance and State Modernization (CERGO)",
      "Extensive international capacity-building programs across Francophone Africa and the Americas"
    ],
    programs: [
      { title: "Maîtrise en administration publique (MPA - Public Administration)", level: "Graduate Degree", desc: "Flagship master's degree preparing executives and analysts in public budgeting, administrative law, and human capital strategy." },
      { title: "Doctorat en administration publique (Ph.D.)", level: "Doctoral Degree", desc: "Advanced research doctorate investigating contemporary governance transformations, digital government, and policy outcomes." },
      { title: "Diplôme d'études supérieures spécialisées (DESS) en gestion publique", level: "Postgraduate Diploma", desc: "One-year applied professional program focused on operational management in municipal, provincial, and healthcare agencies." }
    ],
    opportunities: [
      {
        id: 4596,
        title: "ENAP Excellence Fellowship in Public Governance",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Graduate research fellowship funding master's and doctoral scholars conducting groundbreaking research on state ethics, regulatory policy, and digital public administration.",
        funding: "CAD $18,000 per year for doctoral students / CAD $10,000 for master's students",
        fee: "CAD $90",
        tuition: "CAD $3,900/year (Québec residents) or CAD $15,800/year (International)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://enap.ca/etudes/bourses-et-aide-financiere",
        requirements: {
          gpa: "3.5/4.3 cumulative in previous university degree",
          ielts: "French TFI 780 or DALF C1 certification",
          gre: "Not required",
          papers: "1,500-word proposed research project on public institutional transformation",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4597,
        title: "Doctorat en administration publique (Ph.D.) Admission",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year research doctorate exploring public budgeting transparency, organizational agility, and cross-border public policy diffusion.",
        funding: "Doctoral assistantships and provincial FRQSC top-up funding up to CAD $25,000/year",
        fee: "CAD $90",
        tuition: "CAD $3,900/year (Québec)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://enap.ca/programmes/doctorat-en-administration-publique",
        requirements: {
          gpa: "3.3/4.3 in master's degree in public administration, political science, or management",
          ielts: "French fluency (Level C1 minimum)",
          gre: "Not required",
          papers: "Doctoral dissertation synopsis and detailed CV",
          references: "Three academic reference letters"
        }
      },
      {
        id: 4598,
        title: "Maîtrise en administration publique pour gestionnaires (MPA)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year executive master's program structured for mid-career professionals seeking to lead public agencies, ministries, and non-profit organizations.",
        funding: "Employer-sponsored tuition matching bursaries up to CAD $4,000",
        fee: "CAD $90",
        tuition: "CAD $4,400/year (Domestic) or CAD $16,800/year (International)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://enap.ca/programmes/maitrise-en-administration-publique-pour-gestionnaires",
        requirements: {
          gpa: "3.0/4.3 in undergraduate degree plus at least 2 years relevant public sector management experience",
          ielts: "Advanced French comprehension and writing",
          gre: "Not required",
          papers: "Professional curriculum vitae and employer endorsement statement",
          references: "Two professional supervisory appraisals"
        }
      },
      {
        id: 4599,
        title: "Public Policy Evaluation & Health Agency Consulting Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Four-month paid policy internship within Québec health authorities (CISSS/CIUSSS) evaluating resource allocation and clinical governance systems.",
        funding: "CAD $3,400 monthly living stipend",
        fee: "None",
        tuition: "Academic stage credit registration applies",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://enap.ca/stages-et-carrieres",
        requirements: {
          gpa: "3.2/4.3 in ENAP graduate coursework",
          ielts: "French professional fluency",
          gre: "Not required",
          papers: "Cover letter and analytical sample paper on healthcare administration",
          references: "Approval from ENAP stage coordinator"
        }
      },
      {
        id: 4600,
        title: "Bourse Denis-de-Belleval en Gestion des Villes et Régions",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Endowed scholarship for students specializing in municipal governance, regional economic development, and sustainable urban mobility.",
        funding: "CAD $5,000 annual scholarship award",
        fee: "None",
        tuition: "Credited directly against tuition fees",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        source: "https://enap.ca/etudes/bourses-et-aide-financiere",
        requirements: {
          gpa: "3.4/4.3 in municipal management concentration",
          ielts: "French proficiency",
          gre: "Not required",
          papers: "Essay on climate adaptation strategies for Québec municipalities",
          references: "One academic faculty reference"
        }
      },
      {
        id: 4601,
        title: "Microprogramme de 2e cycle en gestion des ressources humaines dans le secteur public",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Short 9-credit graduate micro-program focused on collective bargaining, labour relations, and talent acquisition in government institutions.",
        funding: "Workplace training tax credit eligible",
        fee: "CAD $90",
        tuition: "CAD $1,250 complete micro-program tuition (Quebec residents)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://enap.ca/programmes/microprogrammes",
        requirements: {
          gpa: "Undergraduate degree or equivalent professional experience",
          ielts: "French fluency",
          gre: "Not required",
          papers: "Resume and copy of bachelor's diploma",
          references: "One professional reference"
        }
      },
      {
        id: 4602,
        title: "International Public Governance & Anti-Corruption Colloquium Grant",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Travel and research grant funding student presentations at international administrative sciences colloquia in Paris, Geneva, and Dakar.",
        funding: "CAD $2,500 travel and registration subsidy",
        fee: "None",
        tuition: "Not applicable",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://enap.ca/recherche",
        requirements: {
          gpa: "Enrolled in ENAP master's or PhD with accepted conference paper",
          ielts: "French or English according to conference",
          gre: "Not required",
          papers: "Accepted conference abstract and budget breakdown",
          references: "Letter from thesis advisor"
        }
      }
    ],
    researchers: [
      {
        id: 1989,
        name: "Prof. Hugo Cyr",
        title: "Director General",
        department: "General Directorate & Public Law",
        email: "direction.generale@enap.ca",
        website: "https://enap.ca/a-propos/direction",
        recruiting: "Not verified",
        interests: ["Constitutional law", "Federalism and intergovernmental relations", "Legislative theory", "Democratic institutional design"]
      },
      {
        id: 1990,
        name: "Prof. Christian Bégin",
        title: "Professor of Public Management",
        department: "Department of Administrative Sciences",
        email: "christian.begin@enap.ca",
        website: "https://enap.ca/corps-professoral/christian-begin",
        recruiting: "Not verified",
        interests: ["Strategic public management", "Performance measurement in government", "Organizational transformation", "Healthcare leadership"]
      },
      {
        id: 1991,
        name: "Prof. Nathalie de Marcellis-Warin",
        title: "Professor of Risk Analysis & Public Policy",
        department: "Department of Policy and Public Management",
        email: "nathalie.demarcellis-warin@enap.ca",
        website: "https://enap.ca/corps-professoral/nathalie-de-marcellis-warin",
        recruiting: "Not verified",
        interests: ["Risk governance and technology assessment", "Circular economy public policy", "Government data science", "Industrial safety regulations"]
      }
    ]
  },

  // 6. Germany: Stuttgart Technology University of Applied Sciences (HFT Stuttgart)
  {
    institution: "Stuttgart Technology University of Applied Sciences (HFT Stuttgart)",
    slug: "stuttgart-technology-university-of-applied-sciences-hft",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 367,
    location: "Stuttgart, Baden-Württemberg, Germany",
    website: "https://www.hft-stuttgart.de",
    shortName: "HFT Stuttgart",
    badge: "Smart Cities & Architecture Engineering",
    overview: "Hochschule für Technik Stuttgart (HFT Stuttgart) is a premier university of applied sciences renowned for its pioneering expertise in sustainable building physics, climate-neutral architecture, smart city geomatics, and civil engineering nestled in Germany's high-tech industrial heartland.",
    lead: "Build sustainable futures with world-leading degrees in smart city design, geomatics, and zero-carbon building physics at HFT Stuttgart.",
    description: "HFT Stuttgart engineering degrees, DAAD scholarships, and smart urban infrastructure fellowships in Stuttgart, Baden-Württemberg.",
    quickFacts: {
      type: "Public University of Applied Sciences (Fachhochschule)",
      campus: "Stuttgart City Centre Campus (adjacent to University of Stuttgart)",
      accreditation: "Ministry of Science, Research and the Arts Baden-Württemberg / ASIIN / ZEvA",
      admissions: "Winter semester (July 15) and Summer semester (January 15)",
      language: "German & English (several international Master's in English)",
      aid: "Deutschlandstipendium, Baden-Württemberg-STIPENDIUM, DAAD Grants"
    },
    strengths: [
      "Center for Sustainable Building Technologies (ZAF) and net-zero energy design",
      "Pioneering International Master of Photogrammetry and Geoinformatics",
      "Close partnerships with Daimler, Bosch, Porsche, and DLR aerospace center",
      "State-of-the-art building physics acoustics and climate test labs"
    ],
    programs: [
      { title: "Master of Science in Photogrammetry and Geoinformatics", level: "Graduate Degree", desc: "Internationally renowned English-taught master's covering 3D laser scanning, GIS algorithms, satellite geodesy, and digital twins." },
      { title: "Master of Science in Smart City Solutions", level: "Graduate Degree", desc: "Interdisciplinary program integrating urban renewable energy systems, sustainable mobility, and climate resilience planning." },
      { title: "Bachelor of Engineering in Bauingenieurwesen (Civil Engineering)", level: "Undergraduate Degree", desc: "Rigorous German engineering degree focusing on structural mechanics, timber construction, and geotechnical engineering." }
    ],
    opportunities: [
      {
        id: 4603,
        title: "HFT Stuttgart Master of Science in Photogrammetry & Geoinformatics",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "English-taught master's program training geoinformatics specialists in computer vision, autonomous mapping, and geographic information science.",
        funding: "DAAD EPOS scholarship eligibility providing €934/month living stipend and full health insurance",
        fee: "€180 semester administrative fee",
        tuition: "Tuition-free for EU/EEA citizens; €1,500/semester for non-EU students (Baden-Württemberg state law)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.hft-stuttgart.de/geoinformatik/master-photogrammetry-and-geoinformatics",
        requirements: {
          gpa: "Above-average bachelor's degree in surveying, geoinformatics, computer science, or civil engineering",
          ielts: "IELTS 6.5 overall or TOEFL iBT 85",
          gre: "Not required",
          papers: "Statement of purpose detailing geospatial mapping experience",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4604,
        title: "HFT Smart City Solutions Urban Climate Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "One-year applied research fellowship investigating microclimate simulation, urban heat island mitigation, and decentralized solar grid integration in European metropolises.",
        funding: "€1,200 monthly stipend plus computational lab access",
        fee: "€180 semester fee",
        tuition: "Covered by fellowship grant",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.hft-stuttgart.de/architektur-und-gestaltung/master-smart-city-solutions",
        requirements: {
          gpa: "Minimum 2.5 on German grading scale (equivalent to B+ or 3.2 GPA)",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Design or analytical portfolio illustrating urban infrastructure projects",
          references: "Two academic or professional recommendations"
        }
      },
      {
        id: 4605,
        title: "HFT Stuttgart Deutschlandstipendium Excellence Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        desc: "National German scholarship co-funded by the Federal Government and regional engineering corporations for top-performing students.",
        funding: "€300 per month (€3,600 per year) granted regardless of income",
        fee: "None",
        tuition: "Paid directly to student bank account",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hft-stuttgart.de/studium/finanzierung-und-stipendien/deutschlandstipendium",
        requirements: {
          gpa: "Top 10% academic standing in semester exams or entrance qualifications",
          ielts: "English or German according to degree language",
          gre: "Not required",
          papers: "Curriculum vitae and letter of motivation detailing societal engagement",
          references: "Academic performance record"
        }
      },
      {
        id: 4606,
        title: "Baden-Württemberg Automotive & Lightweight Structures Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Six-month mandatory industrial internship placement with automotive manufacturers (Mercedes-Benz, Porsche) exploring structural finite element analysis.",
        funding: "€950 to €1,450 monthly corporate intern salary",
        fee: "None",
        tuition: "Standard semester fee applies",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.hft-stuttgart.de/wirtschaft-und-vermessung/praxisamt",
        requirements: {
          gpa: "Enrolled in mechanical, civil, or infrastructure engineering degree at HFT",
          ielts: "German B2 level recommended for shopfloor integration",
          gre: "Not required",
          papers: "Technical CV and CAD/FEA software proficiency certificate",
          references: "Approved by HFT Internship Office"
        }
      },
      {
        id: 4607,
        title: "Bachelor of Arts in Architecture (B.A. Architektur) Admission",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Four-year design and structural architecture program accredited for registration with the German Chamber of Architects (Architektenkammer).",
        funding: "BAföG and regional foundation scholarships eligible",
        fee: "€180 semester fee",
        tuition: "Tuition-free for EU citizens; €1,500/semester for non-EU students",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hft-stuttgart.de/architektur-und-gestaltung/bachelor-architektur",
        requirements: {
          gpa: "Abitur or recognized international higher education entrance qualification",
          ielts: "German language proficiency at TestDaF 4 or DSH-2 level",
          gre: "Not required",
          papers: "Design portfolio and proof of 8-week pre-study construction site internship (Vorpraktikum)",
          references: "Not required"
        }
      },
      {
        id: 4608,
        title: "Building Physics & Acoustic Engineering Research Grant",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        desc: "Cooperative doctoral research grant with University of Stuttgart investigating metamaterial sound insulation and room acoustics in timber high-rise construction.",
        funding: "TV-L E13 (75% to 100%) research associate contract (€38,000 to €49,000 gross per year)",
        fee: "€180",
        tuition: "No tuition fees for doctoral research",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.hft-stuttgart.de/forschung/kompetenzzentren/zaf",
        requirements: {
          gpa: "German 'Gut' (2.0 or better) in master's in physics, acoustics, or civil engineering",
          ielts: "English C1 or German B2",
          gre: "Not required",
          papers: "Master's thesis PDF and 3-page research outline",
          references: "Two academic referee contacts"
        }
      },
      {
        id: 4609,
        title: "Summer School in 3D Building Information Modeling (BIM) & Digital Twins",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-week certificate workshop teaching openBIM workflows, IFC data standards, and Unreal Engine architectural simulations.",
        funding: "DAAD Summer School partial travel grant €500",
        fee: "€650 course fee including software licenses and field excursions",
        tuition: "Covered by course registration fee",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.hft-stuttgart.de/international/summer-school",
        requirements: {
          gpa: "Undergraduate degree in civil engineering, architecture, or surveying",
          ielts: "English B2 proficiency",
          gre: "Not required",
          papers: "Short motivation letter and academic transcript",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1992,
        name: "Prof. Dr. Katja Rade",
        title: "Rektorin (President)",
        department: "Executive Board & Business Administration",
        email: "rektorat@hft-stuttgart.de",
        website: "https://www.hft-stuttgart.de/hochschule/leitung",
        recruiting: "Not verified",
        interests: ["Higher education strategic leadership", "Corporate financial controlling", "Sustainable university governance", "Innovation transfer"]
      },
      {
        id: 1993,
        name: "Prof. Dr.-Ing. Volker Coors",
        title: "Professor of Computer Science & Geoinformatics",
        department: "Faculty of Geomatics, Computer Science and Mathematics",
        email: "volker.coors@hft-stuttgart.de",
        website: "https://www.hft-stuttgart.de/p/volker-coors",
        recruiting: "Not verified",
        interests: ["3D city models (CityGML)", "Urban digital twins", "Spatial big data visualization", "Web-based 3D geoinformation"]
      },
      {
        id: 1994,
        name: "Prof. Dr.-Ing. Dirk Schwede",
        title: "Professor of Sustainable Building Technologies",
        department: "Faculty of Architecture and Design & ZAF",
        email: "dirk.schwede@hft-stuttgart.de",
        website: "https://www.hft-stuttgart.de/p/dirk-schwede",
        recruiting: "Not verified",
        interests: ["Building energy performance simulation", "Zero-emission district concepts", "Passive cooling in tropical architecture", "Decarbonized envelope technologies"]
      }
    ]
  },

  // 7. Germany: Technische Hochschule Georg Agricola (THGA Bochum)
  {
    institution: "Technische Hochschule Georg Agricola (THGA Bochum)",
    slug: "technische-hochschule-georg-agricola-thga",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 373,
    location: "Bochum, North Rhine-Westphalia, Germany",
    website: "https://www.thga.de",
    shortName: "THGA Bochum",
    badge: "Post-Mining & Geoengineering",
    overview: "Founded in 1816, Technische Hochschule Georg Agricola (THGA Bochum) is Germany's premier institution for mining engineering, post-mining georesource stewardship, industrial heritage preservation, and applied materials science, operating at the heart of the Ruhr metropolitan area.",
    lead: "Study post-mining engineering, geotechnology, and sustainable industrial recycling at Germany's historic mining academy, THGA Bochum.",
    description: "THGA Bochum engineering degrees, post-mining research fellowships, and mechanical engineering studies in the Ruhr valley, Germany.",
    quickFacts: {
      type: "State-recognized Private Technical University (DMT-LB Sponsored)",
      campus: "Herner Straße Campus, Bochum, North Rhine-Westphalia",
      accreditation: "Ministry of Culture and Science of NRW / ASIIN / FIBAA",
      admissions: "Winter semester (September start) and Summer semester (March start)",
      language: "German (Bachelor's) & German/English (Master's programs)",
      aid: "RAG-Stiftung Scholarships, Deutschlandstipendium, NRW-Stipendium"
    },
    strengths: [
      "World-unique Research Institute of Post-Mining (FZN)",
      "Deep underground mine water management and geo-monitoring technologies",
      "Endowed support from RAG-Stiftung ensuring exceptional laboratory infrastructure",
      "Direct industrial co-ops across European heavy machinery and energy infrastructure"
    ],
    programs: [
      { title: "Master of Science in Geoengineering and Post-Mining", level: "Graduate Degree", desc: "Internationally unique engineering master's dealing with ground subsidence, mine flooding management, and subsurface energy storage." },
      { title: "Bachelor of Engineering in Maschinenbau (Mechanical Engineering)", level: "Undergraduate Degree", desc: "Applied mechanical engineering education emphasizing manufacturing automation, simulation, and thermal turbomachinery." },
      { title: "Master of Science in Materials Engineering and Industrial Recycling", level: "Graduate Degree", desc: "Specialized engineering master's addressing circular metallurgy, battery recycling, and composite material characterisation." }
    ],
    opportunities: [
      {
        id: 4610,
        title: "RAG-Stiftung Post-Mining Doctoral Research Grant",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Three-year fully funded doctoral fellowship investigating long-term mine water chemistry, ground motion radar interferometry, and geothermal heat recovery from abandoned coal pits.",
        funding: "€2,200 monthly tax-free doctoral scholarship plus €6,000 annual lab research budget",
        fee: "None",
        tuition: "No tuition fees",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.thga.de/forschung/forschungsbereich-nachegbau-fzn/",
        requirements: {
          gpa: "German 'Sehr Gut' or 'Gut' (1.0 - 2.0) in master's in geoengineering, mining, or hydrology",
          ielts: "English B2 or German B2",
          gre: "Not required",
          papers: "Master's thesis PDF and 4-page research proposal on post-mining mitigation",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4611,
        title: "Master of Science in Geoengineering & Post-Mining Admission",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Four-semester postgraduate degree qualifying engineers for remediation of industrial legacy sites, shaft sealing, and geotechnical risk management.",
        funding: "RAG Foundation partial stipend €500/month for qualified candidates",
        fee: "€320 semester contribution (includes regional NRW public transit pass)",
        tuition: "Tuition-free university program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.thga.de/studium/studienangebot/geoingenieurwesen-und-nachbergbau-msc/",
        requirements: {
          gpa: "Bachelor's degree in engineering, geology, surveying, or civil engineering with at least 180 ECTS",
          ielts: "German language certificate C1 (DSH-2 or TestDaF 4x4)",
          gre: "Not required",
          papers: "Curriculum vitae and academic grade transcripts",
          references: "Not required"
        }
      },
      {
        id: 4612,
        title: "THGA Industry Circular Economy & Metallurgy Fellowship",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Two-year research fellowship focused on secondary metallurgy, slag valorisation, and critical raw material extraction from e-waste.",
        funding: "€22,000 annual research stipend plus industrial lab consumables",
        fee: "€320 semester fee",
        tuition: "Tuition-free",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.thga.de/forschung/",
        requirements: {
          gpa: "3.2/4.0 in chemical engineering, metallurgy, or materials science",
          ielts: "English B2 or German B2",
          gre: "Not required",
          papers: "Statement of research interests in hydrometallurgical recycling",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 4613,
        title: "Ruhr Industrial Heritage & Underground Safety Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Practical engineering work term in subsurface facilities and industrial heritage complexes evaluating structural integrity and ventilation security.",
        funding: "€1,100 monthly student intern wage",
        fee: "None",
        tuition: "Semester enrollment fees apply",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.thga.de/studium/im-studium/praktikum/",
        requirements: {
          gpa: "Enrolled student at THGA with completed first-year engineering exams",
          ielts: "German B2 level for mining safety guidelines",
          gre: "Not required",
          papers: "Mining medical fitness certificate (G40 assessment)",
          references: "Approval from academic department head"
        }
      },
      {
        id: 4614,
        title: "Bachelor of Engineering in Applied Electrical & Automation Systems",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Seven-semester undergraduate engineering degree teaching programmable logic controllers (PLCs), smart sensor networks, and industrial IoT.",
        funding: "Corporate dual-study (Duales Studium) salary from participating Ruhr partner firms (€900 - €1,300/mo)",
        fee: "€320 semester fee",
        tuition: "Tuition-free",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.thga.de/studium/studienangebot/elektrotechnik-und-informationstechnik-beng/",
        requirements: {
          gpa: "Fachhochschulreife or German Abitur",
          ielts: "German language proficiency C1",
          gre: "Not required",
          papers: "Contract with partner company if enrolled in dual-study track",
          references: "None"
        }
      },
      {
        id: 4615,
        title: "THGA Deutschlandstipendium for Aspiring Female Engineers",
        type: "Scholarship",
        subject: "mathematics",
        subjects: ["mathematics", "engineering"],
        desc: "Targeted scholarship promoting women in STEM engineering disciplines across mechanical, electrical, and geotechnical fields at THGA.",
        funding: "€300 monthly cash stipend (€3,600 per year) and dedicated industry mentoring",
        fee: "None",
        tuition: "Not applicable (university is tuition-free)",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.thga.de/studium/finanzierung/deutschlandstipendium/",
        requirements: {
          gpa: "Outstanding academic performance in engineering or applied mathematics courses",
          ielts: "German or English proficiency",
          gre: "Not required",
          papers: "Letter of motivation detailing career ambitions in engineering",
          references: "Academic transcript"
        }
      },
      {
        id: 4616,
        title: "Professional Certification in Subsurface Geothermal Engineering",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Certificate course for practicing engineers exploring deep geothermal well drilling, heat exchanger design, and seismic monitoring in urban basins.",
        funding: "In-service corporate training subsidies available",
        fee: "€1,250 certificate tuition",
        tuition: "Included in course fee",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.thga.de/weiterbildung/",
        requirements: {
          gpa: "Completed engineering or geosciences bachelor's degree",
          ielts: "German B2",
          gre: "Not required",
          papers: "Professional CV showing relevant technical background",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1995,
        name: "Prof. Dr. Susanne Lengyel",
        title: "Präsidentin (President)",
        department: "University Directorate & Industrial Design Engineering",
        email: "praesidium@thga.de",
        website: "https://www.thga.de/hochschule/organisation/praesidium/",
        recruiting: "Not verified",
        interests: ["Engineering pedagogy", "Industrial product design", "Transformation of industrial regions", "Women in engineering leadership"]
      },
      {
        id: 1996,
        name: "Prof. Dr. Christian Melchers",
        title: "Head of the Research Institute of Post-Mining (FZN)",
        department: "Forschungsbereich Nachbergbau",
        email: "christian.melchers@thga.de",
        website: "https://www.thga.de/forschung/forschungsbereich-nachegbau-fzn/team/",
        recruiting: "Not verified",
        interests: ["Mine water management", "Hydrochemistry of abandoned shafts", "Subsurface geothermal energy", "Geomonitoring"]
      },
      {
        id: 1997,
        name: "Prof. Dr.-Ing. Ulrich Paschedag",
        title: "Vice-President for Academic Affairs",
        department: "Department of Mechanical Engineering and Material Sciences",
        email: "ulrich.paschedag@thga.de",
        website: "https://www.thga.de/hochschule/organisation/praesidium/",
        recruiting: "Not verified",
        interests: ["Bulk material handling technologies", "Belt conveyor dynamics", "Mechanical drive systems", "Mining machinery automation"]
      }
    ]
  },

  // 8. Germany: University of Flensburg (Europa-Universität Flensburg - EUF)
  {
    institution: "University of Flensburg (Europa-Universität Flensburg - EUF)",
    slug: "europa-universitaet-flensburg-euf",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 402,
    location: "Flensburg, Schleswig-Holstein, Germany",
    website: "https://www.uni-flensburg.de",
    shortName: "EUF Flensburg",
    badge: "European Studies & Energy Transition",
    overview: "Europa-Universität Flensburg (EUF) is Germany's northernmost university, situated on the Danish border. Renowned for its focus on European integration, cross-border minority linguistics, teacher education, and sustainable energy and environmental management (EEM).",
    lead: "Experience cross-border European studies, renewable energy management, and inclusive bilingual pedagogy at Europa-Universität Flensburg.",
    description: "Europa-Universität Flensburg academic programs, DAAD energy transition fellowships, and European master's degrees in Schleswig-Holstein.",
    quickFacts: {
      type: "Public University (Land Schleswig-Holstein)",
      campus: "Campus Flensburg (Sandberg hill overlooking Flensburg Fjord)",
      accreditation: "Ministry of General and Vocational Education Schleswig-Holstein / ZEvA",
      admissions: "Winter semester (July 15) and Summer semester (January 15)",
      language: "German, English, and Danish (interdisciplinary multilingual campus)",
      aid: "DAAD EPOS, Deutschlandstipendium, Schleswig-Holstein Doctoral Fellowships"
    },
    strengths: [
      "Center for Sustainable Energy Systems (ZNES) and international EEM degrees",
      "Interdisciplinary Centre for European Studies (ICES)",
      "Cross-border German-Danish teacher training and minority rights scholarship",
      "Pioneering research in transformation economics and ecological post-growth theory"
    ],
    programs: [
      { title: "Master of Engineering in Energy and Environmental Management (EEM)", level: "Graduate Degree", desc: "English-taught international master's training energy planners from developing and emerging economies in renewable mini-grids and climate policy." },
      { title: "Master of Arts in European Studies (MAES)", level: "Graduate Degree", desc: "Interdisciplinary English-taught degree examining EU law, European integration history, foreign policy, and migration governance." },
      { title: "Bachelor of Arts in Bildungswissenschaften (Educational Sciences)", level: "Undergraduate Degree", desc: "Flagship German teacher education program offering versatile subject combinations for secondary and vocational school teaching." }
    ],
    opportunities: [
      {
        id: 4617,
        title: "DAAD EPOS Energy & Environmental Management (EEM) Full Scholarship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Full international DAAD scholarship covering all living expenses, monthly allowance (€934), airfare, and German language training for energy professionals.",
        funding: "€934/month living stipend, travel allowance, health insurance, and study support",
        fee: "None",
        tuition: "Tuition-free program (only standard semester contribution €290 applies)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.uni-flensburg.de/eem/",
        requirements: {
          gpa: "Bachelor's degree in engineering or economics with above-average grades",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each sub-score)",
          gre: "Not required",
          papers: "At least two years of professional work experience in energy or environment; motivation essay",
          references: "One academic and one current employer recommendation"
        }
      },
      {
        id: 4618,
        title: "ICES European Studies Doctoral Research Fellowship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year research fellowship at the Interdisciplinary Centre for European Studies examining European borders, populist politics, or EU climate diplomacy.",
        funding: "TV-L E13 (65%) academic research contract (approx. €33,000 gross per year)",
        fee: "€290 semester contribution",
        tuition: "Tuition-free doctoral studies",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.uni-flensburg.de/ices/",
        requirements: {
          gpa: "Completed master's degree in political science, European studies, sociology, or law (minimum 2.0 German scale)",
          ielts: "English C1 (IELTS 7.0 or equivalent)",
          gre: "Not required",
          papers: "5-page doctoral research proposal and CV",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4619,
        title: "Master of Arts in European Studies (MAES) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year English-medium master's curriculum analyzing European institutional governance, cross-border cooperation, and regional identity.",
        funding: "EUF mobility grants for Brussels/Strasbourg study trips",
        fee: "€290 per semester (includes regional train pass)",
        tuition: "Tuition-free",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.uni-flensburg.de/ma-european-studies/",
        requirements: {
          gpa: "Undergraduate degree in social sciences, humanities, law, or economics (at least 180 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in European policy challenges",
          references: "One academic recommendation"
        }
      },
      {
        id: 4620,
        title: "Cross-Border German-Danish Wind Energy Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Six-month engineering work term stationed with offshore wind farm developers (Ørsted, Vestas, TenneT) across the North Sea and Baltic energy corridors.",
        funding: "€1,200 to €1,600 monthly industrial intern compensation",
        fee: "None",
        tuition: "Standard semester fee applies",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.uni-flensburg.de/znes/",
        requirements: {
          gpa: "Enrolled in EEM or engineering program at EUF",
          ielts: "English B2 or German B2",
          gre: "Not required",
          papers: "Curriculum vitae and technical coursework transcripts",
          references: "Approval from academic advisor"
        }
      },
      {
        id: 4621,
        title: "Bachelor of Arts in International Management (Bilingual Deutsch/Dansk/English)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year undergraduate program co-delivered with University of Southern Denmark (SDU) in Sønderborg, blending international marketing, macroeconomics, and Scandinavian business culture.",
        funding: "Erasmus+ and Danish SU living allowance eligible for qualified EU students",
        fee: "€290 semester fee",
        tuition: "Tuition-free for EU citizens",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.uni-flensburg.de/international-management/",
        requirements: {
          gpa: "Abitur or foreign equivalent high school diploma",
          ielts: "English B2 and German B2 (or Danish B2)",
          gre: "Not required",
          papers: "High school transcripts and proof of multilingual proficiency",
          references: "Not required"
        }
      },
      {
        id: 4622,
        title: "Post-Growth Economics & Ecological Transformation Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "One-year post-master's or doctoral research fellowship investigating resource caps, degrowth indicators, and social-ecological provisioning systems.",
        funding: "€18,000 annual research grant plus travel funding for international degrowth symposia",
        fee: "None",
        tuition: "Tuition-free",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.uni-flensburg.de/transformationssoziologie/",
        requirements: {
          gpa: "3.3/4.0 in economics, sociology, or sustainability sciences",
          ielts: "English C1 or German C1",
          gre: "Not required",
          papers: "Published paper or writing sample on alternative economic metrics",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4623,
        title: "Baltic Summer Academy in Minority Linguistics & Regional Languages",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Two-week certificate course exploring North Frisian, Low German, Danish, and Sinti-Roma minority language preservation in European legal frameworks.",
        funding: "ECM Minority Foundation participation bursaries €350",
        fee: "€300 registration fee including course materials and cultural excursions",
        tuition: "Included in registration fee",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.uni-flensburg.de/friesisch-und-niederdeutsch/",
        requirements: {
          gpa: "Open to undergraduate and graduate students in linguistics, history, or European law",
          ielts: "German B2 or English B2",
          gre: "Not required",
          papers: "Short motivation statement",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1998,
        name: "Prof. Dr. Werner Reinhart",
        title: "Präsident (President)",
        department: "Executive Board & American Studies",
        email: "praesident@uni-flensburg.de",
        website: "https://www.uni-flensburg.de/portal-die-universitaet/universitaetsleitung/praesident/",
        recruiting: "Not verified",
        interests: ["American literary history", "Higher education internationalization", "European university alliances", "Cultural identity politics"]
      },
      {
        id: 1999,
        name: "Prof. Dr. Monika Eigmüller",
        title: "Vice-President for European and International Affairs",
        department: "Institute of Sociology & ICES",
        email: "monika.eigmueller@uni-flensburg.de",
        website: "https://www.uni-flensburg.de/soziologie/wer-wir-sind/personen/prof-dr-monika-eigmueller/",
        recruiting: "Not verified",
        interests: ["European border regimes", "Sociology of European integration", "Social policy of the EU", "Transnational welfare systems"]
      },
      {
        id: 2000,
        name: "Prof. Dr. Pao-Yu Oei",
        title: "Professor of Sustainable Energy Transition Economics",
        department: "Center for Sustainable Energy Systems (ZNES)",
        email: "pao-yu.oei@uni-flensburg.de",
        website: "https://www.uni-flensburg.de/znes/ueber-uns/personen/prof-dr-pao-yu-oei/",
        recruiting: "Not verified",
        interests: ["Coal phase-out economics", "100% renewable energy system modeling", "Just transition pathways", "Structural change in mining regions"]
      }
    ]
  },

  // 9. Germany: University of Hildesheim (Stiftung Universität Hildesheim)
  {
    institution: "University of Hildesheim (Stiftung Universität Hildesheim)",
    slug: "university-of-hildesheim-stiftung",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 407,
    location: "Hildesheim, Lower Saxony, Germany",
    website: "https://www.uni-hildesheim.de",
    shortName: "Uni Hildesheim",
    badge: "Cultural Sciences & Applied Linguistics",
    overview: "Stiftung Universität Hildesheim is an innovative public university organized as a foundation under public law in Lower Saxony. Renowned for its UNESCO Chair in Cultural Policy, pioneering creative writing programs, translation science, and machine learning information systems.",
    lead: "Explore UNESCO cultural policy research, applied linguistic translation, and machine learning at the historic University of Hildesheim.",
    description: "University of Hildesheim degree programs, UNESCO cultural fellowships, and data science master's in Lower Saxony, Germany.",
    quickFacts: {
      type: "Public University organized as a Foundation (Stiftungshochschule)",
      campus: "Main Campus (Marienburger Platz), Kulturcampus Domäne Marienburg, and Bühler-Campus",
      accreditation: "Ministry of Science and Culture of Lower Saxony / ZEvA",
      admissions: "Winter semester (July 15) and Summer semester (January 15)",
      language: "German & English (international Master's programs taught in English)",
      aid: "Deutschlandstipendium, Hilde Domin Programme, Lower Saxony Doctoral Grants"
    },
    strengths: [
      "UNESCO Chair in Cultural Policy for the Arts in Development",
      "Kulturcampus Domäne Marienburg—a medieval castle transformed into an arts center",
      "Pioneering Institute for Creative Writing and Cultural Journalism",
      "Information Systems and Machine Learning Lab (ISMLL) with high citation impact"
    ],
    programs: [
      { title: "Master of Science in Data Analytics", level: "Graduate Degree", desc: "Top-ranked English-taught master's focusing on deep learning, predictive modeling, big data architectures, and computer vision." },
      { title: "Master of Arts in Kulturvermittlung (Cultural Mediation & Arts Management)", level: "Graduate Degree", desc: "Interdisciplinary master's combining museum curation, theatre dramaturgy, cultural diplomacy, and arts administration." },
      { title: "Bachelor of Arts in Internationale Kommunikation und Übersetzen (Translation & International Communication)", level: "Undergraduate Degree", desc: "Professional degree preparing translators, technical writers, and terminologists in German, English, and Spanish/French." }
    ],
    opportunities: [
      {
        id: 4624,
        title: "Uni Hildesheim Master of Science in Data Analytics",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Rigorous international English-taught master's covering advanced machine learning algorithms, deep neural architectures, and distributed streaming data systems.",
        funding: "DAAD EPOS and Hilde Domin scholarship eligible (€934/month allowance)",
        fee: "€390 semester fee (includes statewide Lower Saxony railway ticket)",
        tuition: "Tuition-free public university program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.uni-hildesheim.de/fb4/institute/informatik/angewandte-informatik/data-analytics-master/",
        requirements: {
          gpa: "Bachelor's degree in computer science, mathematics, or physics with above-average GPA",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each component) or TOEFL iBT 80",
          gre: "Not required",
          papers: "Curriculum vitae and 750-word statement on machine learning project experiences",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4625,
        title: "UNESCO Chair Cultural Policy & Arts in Development Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "One-year residential research fellowship at Kulturcampus Domäne Marienburg examining cultural heritage rights, global south arts advocacy, and museum restitution policies.",
        funding: "€18,500 annual research grant plus studio and archive residency",
        fee: "None",
        tuition: "Tuition-free",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.uni-hildesheim.de/unescochair/",
        requirements: {
          gpa: "Master's degree in arts management, cultural policy, international relations, or art history",
          ielts: "English C1 or German B2",
          gre: "Not required",
          papers: "1,500-word proposed research project aligning with UNESCO cultural conventions",
          references: "Two professional or academic letters"
        }
      },
      {
        id: 4626,
        title: "ISMLL Deep Learning & Foundation Models Doctoral Grant",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-year fully funded doctoral researcher position at the Information Systems and Machine Learning Lab researching graph neural networks, generative AI, and tabular deep learning.",
        funding: "Full TV-L E13 research salary (€44,000 to €52,000 gross per annum)",
        fee: "€390 semester fee",
        tuition: "Tuition-free doctoral studies",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.uni-hildesheim.de/fb4/institute/informatik/angewandte-informatik/ismll/",
        requirements: {
          gpa: "German 'Sehr Gut' in master's in computer science, statistics, or related quantitative field",
          ielts: "Fluent English (written and oral)",
          gre: "Not required",
          papers: "Master's thesis PDF and links to code repositories (GitHub/GitLab)",
          references: "Two academic references from machine learning professors"
        }
      },
      {
        id: 4627,
        title: "International Technical Translation & Localization Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Semester-long industrial placement with multinational software localization agencies implementing neural machine translation (NMT) and CAT tools.",
        funding: "€900 to €1,300 monthly corporate trainee stipend",
        fee: "None",
        tuition: "Semester enrollment applies",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.uni-hildesheim.de/fb3/institute/uebersetzungswissenschaft-fachkommunikation/",
        requirements: {
          gpa: "Completion of 60 ECTS in translation or applied linguistics",
          ielts: "Certified proficiency in at least two working languages (German, English, Spanish, or French)",
          gre: "Not required",
          papers: "Translation portfolio or terminology project sample",
          references: "Faculty recommendation from Institute of Translation Science"
        }
      },
      {
        id: 4628,
        title: "Uni Hildesheim Deutschlandstipendium Talent Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit-based national scholarship for enrolled Bachelor's or Master's students demonstrating superior grades and exemplary civic commitment.",
        funding: "€300 monthly cash grant (€3,600/year)",
        fee: "None",
        tuition: "Disbursed directly to student",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.uni-hildesheim.de/deutschlandstipendium/",
        requirements: {
          gpa: "Top academic ranking in cohort (approx. 1.7 or better German scale)",
          ielts: "Proficiency in degree instructional language",
          gre: "Not required",
          papers: "Motivation statement highlighting social, political, or artistic engagement",
          references: "Transcript of records"
        }
      },
      {
        id: 4629,
        title: "Bachelor of Arts in Kreatives Schreiben und Kulturjournalismus Admission",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Renowned three-year undergraduate program training novelists, literary critics, broadcast essayists, and dramatists at Kulturcampus Domäne Marienburg.",
        funding: "BAföG and private literary foundation grants",
        fee: "€390 semester fee",
        tuition: "Tuition-free",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.uni-hildesheim.de/kreatives-schreiben/",
        requirements: {
          gpa: "German Abitur or equivalent secondary school completion",
          ielts: "Native or near-native German proficiency (C2)",
          gre: "Not required",
          papers: "Submission of literary portfolio (up to 20 pages of original fiction, poetry, or essays)",
          references: "Passing the rigorous departmental artistic entrance examination"
        }
      },
      {
        id: 4630,
        title: "Summer Course in Applied Corpus Linguistics & Natural Language Processing",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Two-week certificate course exploring Python for text analysis, sentiment classification, and multilingual parallel corpus construction.",
        funding: "Erasmus+ Blended Intensive Programme (BIP) mobility funding €70/day",
        fee: "€250 course registration fee",
        tuition: "Covered by registration fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.uni-hildesheim.de/fb3/institute/sprachwissenschaft-und-literaturwissenschaft/",
        requirements: {
          gpa: "Basic programming knowledge and university background in linguistics or informatics",
          ielts: "English B2",
          gre: "Not required",
          papers: "Short biography and transcript",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 2001,
        name: "Prof. Dr. May-Britt Kallenrode",
        title: "Präsidentin (President)",
        department: "University Directorate & Environmental Physics",
        email: "praesidentin@uni-hildesheim.de",
        website: "https://www.uni-hildesheim.de/die-universitaet/organisation/praesidium/",
        recruiting: "Not verified",
        interests: ["Space physics and cosmic radiation", "Higher education policy in Lower Saxony", "Foundation university governance", "Diversity in academia"]
      },
      {
        id: 2002,
        name: "Prof. Dr. Dr. Lars Schmidt-Thieme",
        title: "Professor of Computer Science & Head of ISMLL",
        department: "Information Systems and Machine Learning Lab (ISMLL)",
        email: "schmidt-thieme@ismll.uni-hildesheim.de",
        website: "https://www.ismll.uni-hildesheim.de/team/schmidt-thieme/",
        recruiting: "Not verified",
        interests: ["Recommender systems", "Deep learning for structured data", "Automated machine learning (AutoML)", "Time-series forecasting"]
      },
      {
        id: 2003,
        name: "Prof. Dr. Julius Heinicke",
        title: "Holder of the UNESCO Chair in Cultural Policy",
        department: "Department of Cultural Policy",
        email: "julius.heinicke@uni-hildesheim.de",
        website: "https://www.uni-hildesheim.de/unescochair/team/prof-dr-julius-heinicke/",
        recruiting: "Not verified",
        interests: ["International cultural policy", "Theatre in African postcolonial contexts", "Arts and sustainable development", "Cultural diversity ethics"]
      }
    ]
  },

  // 10. Italy: CIASU - Centro Internazionale Alti Studi Universitari
  {
    institution: "CIASU - Centro Internazionale Alti Studi Universitari",
    slug: "ciasu-centro-internazionale-alti-studi-universitari",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 453,
    location: "Fasano, Brindisi, Puglia, Italy",
    website: "https://www.ciasu.net",
    shortName: "CIASU Puglia",
    badge: "Advanced Mediterranean Post-Graduate Studies",
    overview: "Located in the historic Masseria Giardinelli in Fasano, CIASU (Centro Internazionale Alti Studi Universitari) is a premier inter-university consortium and post-graduate research institute dedicated to Euro-Mediterranean cooperation, advanced administrative training, agrifood biotechnology, and digital public policy.",
    lead: "Advance your scholarship with Mediterranean research fellowships, public governance master's, and agrifood biosystems studies at CIASU.",
    description: "CIASU post-graduate master's degrees, Euro-Mediterranean research grants, and olive agro-ecosystem fellowships in Fasano, Puglia.",
    quickFacts: {
      type: "Inter-University Advanced Studies Consortium",
      campus: "Masseria Giardinelli Campus, Fasano (Brindisi), Puglia",
      accreditation: "Italian Ministry of Universities and Research (MUR) Affiliate Consortium",
      admissions: "Annual postgraduate intake (November and March)",
      language: "Italian & English (multilingual Euro-Mediterranean seminars)",
      aid: "Regione Puglia 'Pass Laureati' vouchers, CIASU Consortium Fellowships"
    },
    strengths: [
      "Strategic Euro-Mediterranean research hub at historic Masseria Giardinelli",
      "Inter-university consortial programs in partnership with UniBa, UniSalento, and Poliba",
      "Specialized research in Xylella fastidiosa epidemic resilience and olive agro-ecosystems",
      "Executive public policy and European structural funds administration masterclasses"
    ],
    programs: [
      { title: "Master Universitario di II Livello in Euro-Mediterranean Governance & Diplomacy", level: "Postgraduate Master", desc: "Executive post-master's program analyzing maritime boundary law, EU cohesion policy, and cross-border commercial diplomacy." },
      { title: "Corso di Alta Formazione in Agrifood Biosystems & Precision Agriculture", level: "Advanced Specialization", desc: "Specialized postgraduate certificate covering drone multispectral sensing, soil carbon management, and Mediterranean crop protection." },
      { title: "Master di I Livello in Management dei Beni Culturali e Turismo Sostenibile", level: "Master's Degree", desc: "Professional degree preparing directors for UNESCO historical sites, masseria eco-resorts, and cultural heritage foundations." }
    ],
    opportunities: [
      {
        id: 4631,
        title: "CIASU Mediterranean Cohesion Policy & Diplomacy Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Residential research fellowship at Masseria Giardinelli examining EU-North Africa trade agreements, renewable energy corridors, and migration policy.",
        funding: "€16,000 annual research stipend plus on-campus residential accommodation",
        fee: "€50 application fee",
        tuition: "Fully waived under consortium sponsorship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.ciasu.net/alta-formazione/",
        requirements: {
          gpa: "Laurea Magistrale (Italian second-cycle degree) or international master's in law, political science, or economics (minimum 105/110)",
          ielts: "IELTS 6.5 or Italian C1",
          gre: "Not required",
          papers: "1,500-word research proposal focused on Mediterranean institutional cooperation",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4632,
        title: "Regione Puglia 'Pass Laureati' Full Tuition Voucher at CIASU",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Regional government grant covering 100% of tuition and living expenses for university graduates undertaking Master di I or II Livello at CIASU.",
        funding: "Up to €7,500 full tuition coverage plus €2,500 living subsidy",
        fee: "None",
        tuition: "Fully covered by regional voucher",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.ciasu.net/borse-di-studio/",
        requirements: {
          gpa: "Italian Laurea Triennale or Magistrale with ISEE index below €35,000",
          ielts: "Italian language proficiency B2",
          gre: "Not required",
          papers: "Admission confirmation from CIASU and regional voucher application",
          references: "Academic graduation certificate"
        }
      },
      {
        id: 4633,
        title: "Master Universitario di II Livello in Euro-Mediterranean Governance Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year intensive post-master's program (60 ECTS) training senior civil servants, diplomats, and NGO directors in European fund management.",
        funding: "Consortium merit discounts up to €2,000",
        fee: "€100 registration fee",
        tuition: "€4,800 total program tuition",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://www.ciasu.net/master-universitari/",
        requirements: {
          gpa: "Five-year university degree (Laurea Specialistica / Magistrale or Master of Science)",
          ielts: "English B2 or Italian B2",
          gre: "Not required",
          papers: "Curriculum vitae Europass and letter of professional motivation",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4634,
        title: "Mediterranean Olive Agro-Ecosystems & Precision Agriculture Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Six-month applied field research practicum testing biostimulants, drone multispectral imagery, and pathogen resistance in Apulian olive groves.",
        funding: "€800 monthly training stipend plus field transport",
        fee: "None",
        tuition: "Included in course registration",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.ciasu.net/ricerca-applicata/",
        requirements: {
          gpa: "Enrolled in agronomy, biotechnology, or environmental biology program",
          ielts: "Italian B2 or English B2",
          gre: "Not required",
          papers: "Curriculum vitae and transcript of agricultural sciences exams",
          references: "One academic faculty recommendation"
        }
      },
      {
        id: 4635,
        title: "Corso di Alta Formazione in Digitalizzazione della Pubblica Amministrazione",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Executive 120-hour certificate course addressing Italian PNRR digital transition benchmarks, cybersecurity protocols, and cloud municipal databases.",
        funding: "Public administration employee voucher eligible (SNA / Dipartimento Funzione Pubblica)",
        fee: "€50",
        tuition: "€1,800 complete certificate fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.ciasu.net/corsi-alta-formazione/",
        requirements: {
          gpa: "University degree or at least 3 years public sector employment",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "Short professional resume and employer recommendation",
          references: "None"
        }
      },
      {
        id: 4636,
        title: "Doctoral Research Stay Grant in Southern Italian Heritage & Tourism",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Short-term visiting doctoral research grant (3 to 6 months) for PhD candidates conducting fieldwork on masserie rural landscape conservation.",
        funding: "€1,100 monthly living stipend plus full archival access and desk space",
        fee: "None",
        tuition: "Tuition-free visiting research status",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.ciasu.net/visiting-researchers/",
        requirements: {
          gpa: "Enrolled in an accredited doctoral program in architecture, heritage preservation, or geography",
          ielts: "Italian B1 or English B2",
          gre: "Not required",
          papers: "Doctoral research description and recommendation from home university supervisor",
          references: "Letter of invitation request"
        }
      },
      {
        id: 4637,
        title: "Summer School in Blue Economy & Coastal Adriatic Marine Resource Management",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "One-week intensive summer workshop in Torre Canne / Fasano exploring sustainable aquaculture, marine protected area zoning, and coastal erosion defense.",
        funding: "Adriatic Interreg partial travel bursaries €300",
        fee: "€450 inclusive of coastal field trips and accommodation",
        tuition: "Included in fee",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.ciasu.net/summer-schools/",
        requirements: {
          gpa: "Open to graduate students in marine biology, environmental science, and maritime economics",
          ielts: "English B2",
          gre: "Not required",
          papers: "Brief resume and motivation letter",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 2004,
        name: "Prof. Avv. Vito Savino",
        title: "Presidente del Consiglio di Amministrazione",
        department: "Consiglio Direttivo & Diritto Pubblico",
        email: "presidenza@ciasu.net",
        website: "https://www.ciasu.net/organi-direttivi/",
        recruiting: "Not verified",
        interests: ["Judicial administration", "Public ethics and anti-corruption", "Regional administrative decentralization", "Euro-Mediterranean legal frameworks"]
      },
      {
        id: 2005,
        name: "Prof. Dr. Donato Boscia",
        title: "Scientific Advisor for Agricultural Biotechnology",
        department: "Comitato Scientifico & CNR Plant Protection Institute",
        email: "donato.boscia@ciasu.net",
        website: "https://www.ciasu.net/comitato-scientifico/",
        recruiting: "Not verified",
        interests: ["Plant virology and bacteriology", "Xylella fastidiosa epidemiology", "Olive cultivar genetic resistance", "Mediterranean phytosanitary policy"]
      },
      {
        id: 2006,
        name: "Prof.ssa Maria Teresa Chianese",
        title: "Director of Educational Programs",
        department: "Area Alta Formazione e Master",
        email: "formazione@ciasu.net",
        website: "https://www.ciasu.net/staff-didattico/",
        recruiting: "Not verified",
        interests: ["Postgraduate educational methodology", "Cohesion policy programming", "Sustainable tourism economics", "Vocational upskilling for public administration"]
      }
    ]
  }
];
