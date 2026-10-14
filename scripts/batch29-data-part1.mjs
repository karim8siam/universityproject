export const batch29Part1 = [
  // 1. Canada: Bow Valley College (Row 13 / Alberta)
  {
    institution: "Bow Valley College",
    shortName: "Bow Valley",
    slug: "bow-valley-college",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Calgary, Alberta, Canada",
    sourceRow: 13,
    website: "https://bowvalleycollege.ca",
    headline: "Bow Valley College: Software Development, Digital Health & Data Analytics Guide",
    description: "Explore Bow Valley College admissions, Post-Diploma certificates in Software Development, Cloud Computing, international student tuition, and Calgary campus research.",
    heroEyebrow: "Calgary, Alberta · Founded 1965 · Applied Technology & Healthcare",
    overview: "Established in 1965 in the heart of downtown Calgary, Bow Valley College is Alberta's premier comprehensive community college, educating over 17,000 students annually across creative technologies, health sciences, business administration, and applied research. Bow Valley's Centre for Entertainment Arts and Iniikokmaan Indigenous Centre pioneer industry-aligned post-diploma credentials and software development apprenticeships.",
    admissions: {
      masters: "Accredited bachelor's degree or two-year post-secondary diploma with a minimum cumulative GPA of 2.5 on a 4.0 scale (or equivalent) for advanced post-diploma certificates.",
      phd: "Not applicable; comprehensive college institution prioritizing post-graduate certificates, applied research, and technology apprenticeships.",
      language: "IELTS Academic 6.0 overall (minimum 6.0 in each band), TOEFL iBT 83, or Pearson PTE 59.",
      proposal: "Required for applied research bursaries: 500-word statement outlining experience in software engineering, cloud architecture, or health data informatics.",
      appFee: "$140 CAD non-refundable application fee for international students ($43 CAD for domestic Alberta applicants).",
      documents: "Certified official academic transcripts with certified English translations, copy of passport, proof of English language proficiency, and resume."
    },
    tuitionText: "Tuition at Bow Valley College averages $6,200 to $8,400 CAD annually for Canadian domestic students and approximately $17,500 to $21,000 CAD per year for international candidates. Comprehensive entrance scholarships, Alberta Student Aid, and applied research bursaries up to $5,000 CAD provide generous assistance.",
    opportunities: [
      {
        id: 2048,
        title: "Bow Valley College International Student Academic Excellence Award",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Scholarship",
        source: "https://bowvalleycollege.ca/student-resources/financial-services/scholarships-and-bursaries",
        funding: "$4,000 CAD tuition reduction award",
        status: "Open for 2027 entry",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring 2027 cycle)",
        fee: "$140 CAD",
        tuition: "$18,200 CAD/year (before scholarship offset)",
        requirements: {
          gpa: "Minimum 3.3 cumulative undergraduate or high school GPA on a 4.0 scale",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word personal statement on career goals in Calgary's tech sector",
          references: "One academic or employer recommendation"
        },
        desc: "Merit-based award recognizing exceptional international students entering post-diploma certificates and diploma programs in technology and health sciences."
      },
      {
        id: 2049,
        title: "Post-Diploma Certificate in Software Development and Cloud Architecture",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        source: "https://bowvalleycollege.ca/programs-courses/technology/software-development",
        funding: "Alberta technology industry bursaries up to $3,000 CAD per term",
        status: "Applications open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027 (Fall 2027 intake)",
        fee: "$140 CAD",
        tuition: "$19,500 CAD total program tuition for international students",
        requirements: {
          gpa: "Bachelor's degree in any quantitative or technical discipline with minimum 2.5 GPA",
          ielts: "IELTS 6.0 overall (minimum 6.0 in all skills)",
          gre: "Not required",
          papers: "Resume outlining coding background or coursework in programming logic",
          references: "Two professional or academic referee contacts"
        },
        desc: "One-year intensive post-graduate certificate covering full-stack web engineering, microservices, AWS cloud infrastructure, and DevOps automation."
      },
      {
        id: 2050,
        title: "Calgary Digital Health Collaborative Applied Doctoral Bursary",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "PhD",
        source: "https://bowvalleycollege.ca/applied-research",
        funding: "$31,000 CAD annual research fellowship stipend plus clinical simulation access",
        status: "Open for research proposals",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 start)",
        fee: "$0",
        tuition: "Full tuition fellowship coverage via Alberta Innovates Health Solutions",
        requirements: {
          gpa: "Master's degree in health informatics, nursing, or biological data science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Research prospectus on electronic medical record interoperability and patient safety",
          references: "Two academic referee letters"
        },
        desc: "Collaborative applied doctoral fellowship in partnership with Calgary health authorities investigating clinical workflow automation and medical simulation training."
      },
      {
        id: 2051,
        title: "Bow Valley Centre for Applied Research Machine Learning Project",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        source: "https://bowvalleycollege.ca/applied-research/projects",
        funding: "$15,000 CAD annual research assistantship stipend",
        status: "Recruiting graduate researchers",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Spring 2027 project phase)",
        fee: "$0",
        tuition: "Subsidized through provincial research grant funding",
        requirements: {
          gpa: "Undergraduate degree in computer science or mathematics with minimum 3.0 GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Code sample in Python or PyTorch demonstrating data cleaning and neural modeling",
          references: "Academic faculty endorsement"
        },
        desc: "Applied research investigation deploying natural language processing to automate administrative triage in community healthcare centers across southern Alberta."
      },
      {
        id: 2052,
        title: "Calgary Technology Ecosystem Co-op & Work-Term Practicum",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        source: "https://bowvalleycollege.ca/student-resources/career-services",
        funding: "$22 to $27 CAD per hour paid industry placement",
        status: "Scheduled semester placement",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Winter/Spring 2027 placement)",
        fee: "$0",
        tuition: "Credited within post-diploma curriculum",
        requirements: {
          gpa: "Completion of semester 1 post-diploma courses with minimum B average",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Portfolio demonstrating React, Node.js, and SQL database projects",
          references: "Program coordinator approval"
        },
        desc: "Four-month cooperative education placement with Calgary technology start-ups and enterprise firms engineering cloud microservices and customer portal software."
      },
      {
        id: 2053,
        title: "Bow Valley Senior Applied Research Fellow in Data Analytics",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://bowvalleycollege.ca/careers",
        funding: "$66,000 CAD annual research staff salary plus comprehensive Alberta health benefits",
        status: "Open recruitment",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Start date August 2027)",
        fee: "$0",
        tuition: "Not applicable (salaried institutional research position)",
        requirements: {
          gpa: "Doctorate in data analytics, computer science, or operational research",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Demonstrated record of applied data science publications or commercial patents",
          references: "Three professional reference letters"
        },
        desc: "Two-year research fellowship leading predictive analytics projects for municipal social services and regional economic development agencies in Calgary."
      },
      {
        id: 2054,
        title: "Bow Valley College Global Citizen & Community Engagement Bursary",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://bowvalleycollege.ca/student-resources/financial-services",
        funding: "$2,500 CAD non-repayable tuition credit",
        status: "Annual selection",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Academic year 2027/28)",
        fee: "$140 CAD",
        tuition: "$17,500 CAD/year base international rate",
        requirements: {
          gpa: "Minimum 2.8 GPA in prior educational credentials",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Essay on volunteerism, diversity, and immigrant integration in Canadian cities",
          references: "Two community or academic references"
        },
        desc: "Tuition bursary celebrating international and domestic students who demonstrate active civic leadership and volunteer commitment in the Calgary metropolitan region."
      }
    ],
    researchers: [
      {
        id: 897,
        name: "Dr. Misheck Mwaba",
        title: "President and CEO & Mechanical Engineering Researcher",
        subject: "engineering",
        topics: ["Applied Heat Transfer", "Post-Secondary Policy", "Workforce Development", "Fluid Dynamics"],
        source: "https://bowvalleycollege.ca/about/leadership/executive-team",
        recruiting: "Not verified",
        summary: "Dr. Mwaba serves as President and CEO of Bow Valley College, publishing in thermodynamics while steering strategic applied education partnerships in Alberta."
      },
      {
        id: 898,
        name: "Dr. Tasneem Rahim",
        title: "Vice President of External Relations & Social Sciences Researcher",
        subject: "social-sciences",
        topics: ["Immigrant Career Transitions", "Higher Education Equity", "Community Partnerships", "Educational Sociology"],
        source: "https://bowvalleycollege.ca/about/leadership/executive-team/tasneem-rahim",
        recruiting: "Not verified",
        summary: "Dr. Rahim investigates educational equity, socio-economic upward mobility, and workforce integration pathways for skilled newcomers across western Canada."
      },
      {
        id: 899,
        name: "Dr. Cheryl Whitelaw",
        title: "Director of Applied Research and Innovation",
        subject: "computer-science",
        topics: ["Applied Artificial Intelligence", "Educational Technology", "Digital Health Simulation", "Workplace Learning"],
        source: "https://bowvalleycollege.ca/applied-research/contact",
        recruiting: "Not verified",
        summary: "Dr. Whitelaw leads the college's applied research agenda, managing industry-sponsored grants in assistive technologies, AI triage tools, and simulation pedagogy."
      }
    ]
  },

  // 2. Australia: SAE University College (Row 179 / South Australia & National)
  {
    institution: "SAE University College",
    shortName: "SAE",
    slug: "sae-university-college",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Adelaide, South Australia, Australia",
    sourceRow: 179,
    website: "https://www.sae.edu.au",
    headline: "SAE University College: Creative Media, Games Programming & Audio Engineering Guide",
    description: "Explore SAE University College admissions, Master of Creative Industries, game development scholarships, international fees, and digital production studios in Australia.",
    heroEyebrow: "Adelaide & Sydney, Australia · Founded 1976 · Creative Media, Games & Digital Arts",
    overview: "Established in 1976 as the world's first audio engineering institute and now accredited as a full Australian University College by TEQSA, SAE University College operates state-of-the-art creative media campuses across Adelaide, Sydney, Melbourne, Brisbane, and Perth. SAE delivers globally recognized undergraduate and graduate degrees in game development, virtual reality, sound engineering, animation, and digital film production.",
    admissions: {
      masters: "Accredited Australian Bachelor's degree (or international equivalent) in creative media, computer science, design, or communications with a minimum credit average (65% or 2.7/4.0 GPA), plus a creative portfolio.",
      phd: "Direct collaborative doctoral pathways hosted in partnership with Australian university research centers in interactive media and acoustic engineering.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score), TOEFL iBT 79, or Pearson PTE 58.",
      proposal: "Required for master's project: 1,000-word creative industries project proposal articulating production scope, software tools, and commercial distribution strategy.",
      appFee: "$0 AUD direct online application fee.",
      documents: "Certified academic transcripts and degree certificates, digital creative portfolio (showreel, GitHub code, or audio mix stems), curriculum vitae, and statement of purpose."
    },
    tuitionText: "Tuition at SAE University College ranges from $22,000 to $29,500 AUD per academic year. SAE offers Creative Media Excellence Scholarships providing up to 25% tuition fee remissions for high-achieving domestic and international students, as well as production grant sponsorships.",
    opportunities: [
      {
        id: 2055,
        title: "SAE Creative Media International High Achiever Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Scholarship",
        source: "https://www.sae.edu.au/scholarships/",
        funding: "25% tuition fee reduction across the entire degree program",
        status: "Open for 2027 trimester intake",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Trimester 1 2027 entry)",
        fee: "$0",
        tuition: "$23,250 AUD/year (after 25% scholarship remission)",
        requirements: {
          gpa: "Minimum 75% aggregate or 3.2 GPA in prior academic credentials",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Digital portfolio showreel or interactive build demonstrating creative excellence",
          references: "Two letters of recommendation from teachers or creative industry mentors"
        },
        desc: "Prestigious merit scholarship awarded to promising creative media creators enrolling in degree courses across animation, game design, audio, and visual effects."
      },
      {
        id: 2056,
        title: "Master of Creative Industries in Games Design and Virtual Worlds",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        type: "Master's",
        source: "https://www.sae.edu.au/courses/master-of-creative-industries/",
        funding: "Production project grants up to $5,000 AUD per academic year",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Trimester 2 intake)",
        fee: "$0",
        tuition: "$28,000 AUD per year for international students",
        requirements: {
          gpa: "Recognized bachelor's degree in games, computing, or design (GPA 2.7/4.0)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Playable prototype or repository demonstrating Unity, Unreal Engine, or C++ mechanics",
          references: "Two professional or academic references"
        },
        desc: "Two-year postgraduate degree advancing skills in real-time ray tracing, procedural world generation, VR spatial audio, and commercial indie studio production."
      },
      {
        id: 2057,
        title: "Australian Interactive Media & Immersive Audio Doctoral Fellowship",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        type: "PhD",
        source: "https://www.sae.edu.au/research/",
        funding: "$33,000 AUD annual living stipend plus studio laboratory access for 3.5 years",
        status: "Competitive selection",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Intake for 2027 research candidature)",
        fee: "$0",
        tuition: "Full tuition waiver funded through creative industries collaborative grant",
        requirements: {
          gpa: "First-class honours degree or Master's by research in audio technology or computer science",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Substantial research proposal investigating binaural rendering or Ambisonics in VR",
          references: "Two academic referee evaluation reports"
        },
        desc: "Doctoral research fellowship exploring 3D spatial acoustics, psychoacoustics, and real-time head-related transfer functions (HRTF) in immersive gaming environments."
      },
      {
        id: 2058,
        title: "SAE Emerging Media Lab Generative AI & Digital Production Project",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        type: "Research",
        source: "https://www.sae.edu.au/research/projects/",
        funding: "$14,000 AUD seed grant and motion capture studio access",
        status: "Open project call",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Autumn 2027 cycle)",
        fee: "$0",
        tuition: "Integrated within university research framework",
        requirements: {
          gpa: "Enrolled in Master of Creative Industries or related technical discipline",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research brief on neural rendering pipelines and ethical asset provenance",
          references: "SAE academic project lead endorsement"
        },
        desc: "Applied research initiative testing generative diffusion models for real-time 3D texture synthesis and automated rigging in interactive film environments."
      },
      {
        id: 2059,
        title: "Australian Games Studio & VFX Production Industry Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Internship",
        source: "https://www.sae.edu.au/student-life/careers/",
        funding: "$24 to $28 AUD per hour paid 12-week studio placement",
        status: "Trimester placement",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Autumn 2027 placement)",
        fee: "$0",
        tuition: "Curricular credit recognition (12 credit points)",
        requirements: {
          gpa: "Satisfactory completion of Year 2 coursework with credit average",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "VFX breakdown reel showing Maya, Houdini, Nuke, or Blender compositing",
          references: "Studio lead approval"
        },
        desc: "Three-month embedded studio internship with Australian game developers and visual effects studios collaborating on commercial console releases and streaming media."
      },
      {
        id: 2060,
        title: "SAE Postdoctoral Research Fellowship in Acoustic Engineering and DSP",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Fellowship/Job",
        source: "https://www.sae.edu.au/about-sae/careers/",
        funding: "$86,000 to $94,000 AUD annual salary plus 11% superannuation",
        status: "Open recruitment",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Appointment starts July 2027)",
        fee: "$0",
        tuition: "Not applicable (salaried university research and teaching fellow)",
        requirements: {
          gpa: "PhD in acoustic engineering, digital signal processing, or computer science within 4 years",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Minimum two peer-reviewed journal articles in AES or IEEE transactions",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral fellowship conducting frontier research on multichannel beamforming, room impulse response modeling, and embedded audio DSP algorithms."
      },
      {
        id: 2061,
        title: "SAE Women in Games and Audio Technology Bursary",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Scholarship",
        source: "https://www.sae.edu.au/scholarships/",
        funding: "$5,000 AUD direct tuition credit plus industry mentor matching",
        status: "Open for 2027 entry",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Trimester 1 enrollment)",
        fee: "$0",
        tuition: "$24,500 AUD/year before bursary",
        requirements: {
          gpa: "Eligible female or non-binary student with high school or undergraduate GPA 3.0+",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement detailing career vision in interactive audio or game engineering",
          references: "One referee letter"
        },
        desc: "Targeted educational grant promoting female participation, leadership, and technical innovation in game programming, sound engineering, and interactive technology."
      }
    ],
    researchers: [
      {
        id: 900,
        name: "Dr. Luke McMillan",
        title: "General Manager & Senior Games Design Researcher",
        subject: "computer-science",
        topics: ["Games Design Pedagogy", "Player Retention Psychology", "Interactive Storytelling", "Curricular Quality"],
        source: "https://www.sae.edu.au/faculty/luke-mcmillan/",
        recruiting: "Not verified",
        summary: "Dr. McMillan leads academic and institutional strategy at SAE, researching game mechanics architectures, user engagement models, and creative pedagogy."
      },
      {
        id: 901,
        name: "Dr. Paul Doornbusch",
        title: "Head of Audio & Associate Professor of Music Technology",
        subject: "arts-design",
        topics: ["Computer Music", "Algorithmic Composition", "Spatial Audio", "Acoustic Ecology"],
        source: "https://www.sae.edu.au/faculty/paul-doornbusch/",
        recruiting: "Not verified",
        summary: "Dr. Doornbusch is an internationally renowned composer and sound engineer researching algorithmic composition, multichannel acoustic diffusion, and audio DSP."
      },
      {
        id: 902,
        name: "Dr. Donna Lee Brien",
        title: "Professor of Creative Writing & Digital Media Ethics",
        subject: "social-sciences",
        topics: ["Creative Non-Fiction", "Media Ethics", "Higher Education Research Supervision", "Cultural Industries"],
        source: "https://www.sae.edu.au/faculty/donna-lee-brien/",
        recruiting: "Not verified",
        summary: "Dr. Brien researches digital storytelling ethics, creative practice-led research methodologies, and gender equity across Australia's entertainment industries."
      }
    ]
  },

  // 3. Germany: Berlin School of Economics and Law (Row 225 / Berlin)
  {
    institution: "Berlin School of Economics and Law",
    shortName: "HWR Berlin",
    slug: "berlin-school-of-economics-and-law",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    sourceRow: 225,
    website: "https://www.hwr-berlin.de",
    headline: "Berlin School of Economics and Law: Digital Business, International Finance & Public Law Guide",
    description: "Explore Berlin School of Economics and Law (HWR Berlin) admissions, Master of Arts in International Business, tuition-free degrees, and faculty research in Berlin.",
    heroEyebrow: "Berlin, Germany · Founded 1971 · Business, Economics, Public Administration & Law",
    overview: "Established in 1971, the Berlin School of Economics and Law (Hochschule für Wirtschaft und Recht Berlin - HWR Berlin) is one of Germany's largest and premier public universities of applied sciences, educating over 12,000 students across two Berlin campuses (Schöneberg and Lichtenberg). HWR Berlin is nationally renowned for practice-oriented education in international business, public management, law, security studies, and industrial engineering.",
    admissions: {
      masters: "Accredited bachelor's degree or equivalent (180 or 210 ECTS) in economics, business administration, law, or social sciences with a minimum German grade of 2.5 (gut) and substantial quantitative credits.",
      phd: "Doctoral qualifications administered through joint doctoral centers (Promotionszentren) and university partnerships with Freie Universität Berlin and Humboldt-Universität zu Berlin.",
      language: "German proficiency at level C1 (DSH-2, TestDaF 4x4) for German-taught tracks; English proficiency C1 (TOEFL iBT 95+, IELTS 6.5 with 6.0 in all bands) for English-taught master's degrees.",
      proposal: "Required for research master's and doctoral tracks: 1,500-word research proposal outlining empirical methodology in international corporate governance or digital public policy.",
      appFee: "€75 centralized uni-assist evaluation fee for international applicants with non-German undergraduate degrees.",
      documents: "Certified university diploma and transcript of records, certified translations, CV in tabular format, letter of motivation, and proof of language competence."
    },
    tuitionText: "As a premier German public university, HWR Berlin charges 0 EUR tuition for all domestic, EU, and international students. Students pay only a standard semester fee (Semesterbeitrag) of approximately 315 EUR per semester, which includes the Berlin public transportation semester ticket and student welfare services.",
    opportunities: [
      {
        id: 2062,
        title: "HWR Berlin Deutschlandstipendium National Merit Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        source: "https://www.hwr-berlin.de/en/hwr-berlin/about-us/scholarships-and-awards/deutschlandstipendium/",
        funding: "300 EUR monthly stipend (3,600 EUR per year) co-funded by the Federal Government and corporate sponsors",
        status: "Open for 2027 intake",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Annual national competition)",
        fee: "0 EUR",
        tuition: "0 EUR public university tuition",
        requirements: {
          gpa: "German undergraduate grade of 1.7 or better (equivalent to top 10% class rank)",
          ielts: "English C1 or German C1",
          gre: "Not required",
          papers: "Letter of motivation detailing social engagement and academic achievements",
          references: "One letter of recommendation from a university professor"
        },
        desc: "Prestigious national scholarship awarded to exceptional domestic and international students enrolled in bachelor's and master's degree courses at HWR Berlin."
      },
      {
        id: 2063,
        title: "Master of Arts in International Business & Consulting (M.A.)",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        source: "https://www.hwr-berlin.de/en/study/degree-programmes/detail/47-international-business-management/",
        funding: "Erasmus+ mobility grants up to 550 EUR/month for international exchange terms",
        status: "Applications open via Uni-Assist",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Winter semester 2027/28 intake)",
        fee: "75 EUR (uni-assist)",
        tuition: "0 EUR tuition (only ~315 EUR semester administrative fee)",
        requirements: {
          gpa: "Bachelor's degree in business or economics with at least 210 ECTS and minimum grade 2.5",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 95",
          gre: "GMAT/GRE optional but enhances application",
          papers: "Essay on contemporary strategic management challenges in multinational enterprises",
          references: "Two academic referee contacts"
        },
        desc: "Two-year English-taught graduate program combining international corporate strategy, corporate finance, supply chain consulting, and cross-cultural leadership in Berlin."
      },
      {
        id: 2064,
        title: "Berlin Doctoral Center in Applied Social and Economic Sciences Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.hwr-berlin.de/en/research/young-academics/doctoral-studies/",
        funding: "Full doctoral research associate salary TV-L E13 (approx. 52,000 EUR/year gross)",
        status: "Open for research proposals",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 registration)",
        fee: "0 EUR",
        tuition: "100% tuition-free doctoral employment position",
        requirements: {
          gpa: "Master's degree with grade 1.8 ('gut' with distinction) or better in economics or law",
          ielts: "English C1 or German C1",
          gre: "Not required",
          papers: "Comprehensive dissertation exposé (10-15 pages) on European labor economics or digital competition law",
          references: "Two academic professors' endorsements"
        },
        desc: "Three-year salaried doctoral research appointment conducting empirical investigations in collaboration with Berlin research institutes into European economic integration."
      },
      {
        id: 2065,
        title: "Institute for International Political Economy (IPE) Research Project",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Research",
        source: "https://www.ipe-berlin.org/forschung/",
        funding: "12,000 EUR annual project research grant and access to macroeconomic databases",
        status: "Call for research proposals",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Winter evaluation)",
        fee: "0 EUR",
        tuition: "Covered through institute research endowments",
        requirements: {
          gpa: "Enrolled in master's or doctoral studies in macroeconomics, finance, or political economy",
          ielts: "English C1",
          gre: "Not required",
          papers: "Working paper draft analyzing monetary policy transmission or fiscal rule reform in the Eurozone",
          references: "IPE faculty member recommendation"
        },
        desc: "Empirical macroeconomic research project exploring post-Keynesian macroeconomic models, green monetary policy, and public investment architectures across the European Union."
      },
      {
        id: 2066,
        title: "Berlin Startup Ecosystem & Corporate Venture Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Internship",
        source: "https://www.hwr-berlin.de/en/hwr-berlin/service-facilities/careers-service/",
        funding: "1,200 to 1,600 EUR monthly industry internship stipend",
        status: "Semi-annual placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (For Summer semester 2027 placement)",
        fee: "0 EUR",
        tuition: "Registered within curriculum (30 ECTS)",
        requirements: {
          gpa: "Successful completion of 30 ECTS in master's coursework with good standing",
          ielts: "English C1 and German B1/B2",
          gre: "Not required",
          papers: "Curriculum vitae and portfolio of consulting case studies",
          references: "Internship coordinator approval"
        },
        desc: "Six-month integrated corporate placement with venture capital firms, fintech enterprises, and multinational consultancies in Berlin managing market analysis and digital expansion."
      },
      {
        id: 2067,
        title: "HWR Berlin Senior Postdoctoral Fellow in Digital Public Governance",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship/Job",
        source: "https://www.hwr-berlin.de/en/hwr-berlin/service-facilities/vacancies/",
        funding: "62,000 to 68,000 EUR annual salary (TV-L E14 equivalent) plus civil service pension",
        status: "Open recruitment",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Appointment starts October 2027)",
        fee: "0 EUR",
        tuition: "Not applicable (academic staff appointment)",
        requirements: {
          gpa: "Ph.D. or Dr. rer. pol. in administrative science, public policy, or legal informatics within 4 years",
          ielts: "German C1 and English C1 proficiency",
          gre: "Not required",
          papers: "Minimum three peer-reviewed articles on automated administrative decisions or digital public services",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral research position investigating artificial intelligence adoption in municipal public administration, algorithmic transparency, and e-government law."
      },
      {
        id: 2068,
        title: "DAAD Prize for Outstanding International Students at HWR Berlin",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.hwr-berlin.de/en/hwr-berlin/about-us/scholarships-and-awards/",
        funding: "1,000 EUR one-time award from the German Academic Exchange Service (DAAD)",
        status: "Annual award",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (Awarded at Autumn ceremony)",
        fee: "0 EUR",
        tuition: "Direct monetary award",
        requirements: {
          gpa: "Excellent academic standing (German grade 1.5 or better) in advanced semester of study",
          ielts: "English or German proficiency",
          gre: "Not required",
          papers: "Documentation of notable intercultural engagement and civic service at HWR Berlin",
          references: "Nomination by faculty professor"
        },
        desc: "Special award conferred by the DAAD recognizing exceptional international students who combine academic excellence with remarkable intercultural dialogue and volunteerism."
      }
    ],
    researchers: [
      {
        id: 903,
        name: "Prof. Dr. Carsten Baumgarth",
        title: "Professor of Marketing and Brand Management",
        subject: "social-sciences",
        topics: ["Brand Orientation", "B2B Brand Management", "Artificial Intelligence in Marketing", "Cultural Branding"],
        source: "https://www.hwr-berlin.de/prof/carsten-baumgarth/",
        recruiting: "Not verified",
        summary: "Prof. Dr. Baumgarth is one of Germany's foremost authorities on brand orientation, investigating empirical brand metrics, AI-generated advertising, and museum branding."
      },
      {
        id: 904,
        name: "Prof. Dr. Eckhard Hein",
        title: "Professor of Economics & Co-Director of the Institute for International Political Economy",
        subject: "social-sciences",
        topics: ["Macroeconomics", "Post-Keynesian Economics", "Distribution and Growth", "European Integration"],
        source: "https://www.hwr-berlin.de/prof/eckhard-hein/",
        recruiting: "Not verified",
        summary: "Prof. Dr. Hein has authored over 100 monographs and papers on post-Keynesian macroeconomics, financialisation, wage-led growth regimes, and European macroeconomic policy."
      },
      {
        id: 905,
        name: "Prof. Dr. Sabrina Schönrock",
        title: "Professor of Public Law & Dean of Police and Security Management",
        subject: "social-sciences",
        topics: ["Constitutional Law", "Police and Security Law", "Data Protection in Security Agencies", "State Administrative Law"],
        source: "https://www.hwr-berlin.de/prof/sabrina-schoenrock/",
        recruiting: "Not verified",
        summary: "Prof. Dr. Schönrock leads security and public law research at Lichtenberg campus, analyzing constitutional safeguards, surveillance technologies, and emergency response law."
      }
    ]
  },

  // 4. Italy: CUOA Business School (Row 457 / Veneto)
  {
    institution: "CUOA Business School",
    shortName: "CUOA",
    slug: "cuoa-business-school",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Altavilla Vicentina, Veneto, Italy",
    sourceRow: 457,
    website: "https://www.cuoa.it",
    headline: "CUOA Business School: Executive MBA, Lean Management & International Finance Guide",
    description: "Explore CUOA Business School admissions, International MBA, Lean Management scholarships, tuition fees, and executive management research in Veneto, Italy.",
    heroEyebrow: "Altavilla Vicentina, Veneto · Founded 1957 · Executive Management & Lean Operations",
    overview: "Founded in 1957 at Villa Valmarana Morosini in Altavilla Vicentina (Veneto), CUOA Business School is one of Italy's oldest and most prestigious management academies. Backed by Italian regional universities (Padua, Venice Ca' Foscari, Verona, Trieste) and major industrial conglomerates, CUOA is celebrated across Europe for executive business education, lean enterprise transformation, international banking, and luxury supply chain management.",
    admissions: {
      masters: "Accredited three-year Laurea Triennale or Bachelor's degree (180 ECTS) in economics, engineering, humanities, or sciences with satisfactory academic record.",
      phd: "Direct executive research doctorates and DBA programs coordinated in consortium with accredited Italian university faculties (Padua and Verona).",
      language: "Italian proficiency level B2/C1 for Italian-taught masters; English proficiency B2/C1 (TOEFL iBT 85+, IELTS 6.5) for International MBA programs.",
      proposal: "Required for MBA and master's candidates: 1,000-word essay detailing professional career objectives and proposed organizational innovation project.",
      appFee: "€100 non-refundable application and candidate selection interview fee.",
      documents: "Certified copy of degree certificate, transcript of records, detailed curriculum vitae, motivation letter, copy of passport, and two letters of recommendation."
    },
    tuitionText: "Tuition at CUOA Business School ranges from €9,500 to €18,000 for specialized master's programs and €24,000 to €32,000 for executive MBA courses. CUOA provides substantial merit scholarships covering up to 50% of tuition, alongside Italian regional vouchers and zero-interest bank loans.",
    opportunities: [
      {
        id: 2069,
        title: "CUOA International MBA Young Leaders Merit Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        source: "https://www.cuoa.it/ita/formazione/borse-di-studio-e-agevolazioni",
        funding: "Up to 50% tuition reduction (€12,000 to €16,000) for outstanding international candidates",
        status: "Open for 2027 intake",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring 2027 MBA cycle)",
        fee: "€100",
        tuition: "€28,000 total MBA tuition (reduced to €14,000 with scholarship)",
        requirements: {
          gpa: "Minimum 100/110 in Italian university degree or 3.2/4.0 international GPA",
          ielts: "IELTS 6.5 overall or TOEFL 85",
          gre: "GMAT score > 600 advantageous",
          papers: "Essay on circular economy models in Mediterranean manufacturing",
          references: "Two professional or academic letters of recommendation"
        },
        desc: "Competitive scholarship supporting high-performing domestic and international candidates demonstrating managerial potential and entrepreneurial drive in the MBA program."
      },
      {
        id: 2070,
        title: "Master in Lean Management and Digital Operations (Executive Master)",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Master's",
        source: "https://www.cuoa.it/ita/formazione/master-full-time-e-part-time/master-operations-supply-chain",
        funding: "Veneto regional business confederation sponsorship up to €4,000",
        status: "Admissions open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Autumn 2027 intake)",
        fee: "€100",
        tuition: "€14,500 total program tuition",
        requirements: {
          gpa: "Bachelor's degree in engineering, economics, or industrial sciences (minimum 85/110)",
          ielts: "Italian B2 and English B2",
          gre: "Not required",
          papers: "Case reflection on shop-floor bottleneck elimination or Kaizen implementation",
          references: "One employer or professor recommendation"
        },
        desc: "Twelve-month master's credential training operational directors in Toyota Production System principles, digital factory automation, Six Sigma, and agile logistics."
      },
      {
        id: 2071,
        title: "CUOA Consortium Doctoral Fellowship in Industrial Competitiveness",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        type: "PhD",
        source: "https://www.cuoa.it/ita/ricerca",
        funding: "€22,000 annual research scholarship stipend plus corporate field study access",
        status: "Annual selection",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer 2027 research start)",
        fee: "€50",
        tuition: "Full tuition waiver funded by Confindustria Veneto foundation",
        requirements: {
          gpa: "Laurea Magistrale or master's degree with minimum 105/110 score",
          ielts: "English C1 proficiency",
          gre: "Not required",
          papers: "Doctoral research outline (max 12 pages) on global supply chain nearshoring",
          references: "Two academic referee letters from university professors"
        },
        desc: "Three-year doctoral research fellowship analyzing industrial cluster resilience, reshoring dynamics, and automation economics across northern Italian manufacturing."
      },
      {
        id: 2072,
        title: "CUOA Lean Enterprise Center Digital Transformation Project Grant",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        source: "https://www.cuoa.it/ita/ricerca/lean-enterprise-center",
        funding: "€10,000 project research grant and access to manufacturing testbeds",
        status: "Call for research proposals",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Winter evaluation)",
        fee: "€0",
        tuition: "Financed through regional industrial innovation funds",
        requirements: {
          gpa: "Master's degree in management engineering, computer science, or economics",
          ielts: "Italian and English proficiency",
          gre: "Not required",
          papers: "Research brief evaluating digital twin deployment in SME manufacturing lines",
          references: "Faculty research advisor endorsement"
        },
        desc: "Applied operational research grant evaluating IoT sensor integration, predictive maintenance algorithms, and lean workflow efficiency across Veneto industrial SMEs."
      },
      {
        id: 2073,
        title: "Veneto Industrial Conglomerate Strategic Management Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.cuoa.it/ita/placement",
        funding: "€800 to €1,200 monthly corporate internship stipend",
        status: "Semi-annual placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (For Spring 2027 placement)",
        fee: "€0",
        tuition: "Integrated within curriculum credits",
        requirements: {
          gpa: "Enrolled student at CUOA with excellent attendance and exam passing grades",
          ielts: "Italian fluency and English B2",
          gre: "Not required",
          papers: "Curriculum vitae and professional portfolio of consulting deliverables",
          references: "CUOA career services approval"
        },
        desc: "Six-month immersive company project placed within leading Italian manufacturing, fashion, or food giants (Luxottica, De'Longhi, Zonin) managing export expansion."
      },
      {
        id: 2074,
        title: "CUOA Postdoctoral Senior Fellow in Family Business Governance",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.cuoa.it/ita/lavora-con-noi",
        funding: "€38,000 to €45,000 annual gross salary plus performance research bonuses",
        status: "Open search",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Appointment September 2027)",
        fee: "€0",
        tuition: "Not applicable (salaried faculty and research fellow)",
        requirements: {
          gpa: "Doctorate in business administration, organizational sociology, or corporate law",
          ielts: "Italian and English C1 proficiency",
          gre: "Not required",
          papers: "Demonstrated publication record in family enterprise succession and corporate governance",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral appointment examining generational succession, board diversity, and external capital access in medium-sized European family firms."
      },
      {
        id: 2075,
        title: "Villa Valmarana Morosini Women in Management Leadership Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.cuoa.it/ita/formazione/borse-di-studio-e-agevolazioni",
        funding: "€5,000 direct tuition fee reduction",
        status: "Annual grant",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Spring cohort admissions)",
        fee: "€100",
        tuition: "Direct deduction from master's tuition",
        requirements: {
          gpa: "University degree with minimum 95/110 score",
          ielts: "English B2 or Italian B2",
          gre: "Not required",
          papers: "Essay on female empowerment in manufacturing leadership and boardrooms",
          references: "One professional reference letter"
        },
        desc: "Dedicated financial award supporting female managers and aspiring entrepreneurs pursuing master's and executive education at Villa Valmarana Morosini."
      }
    ],
    researchers: [
      {
        id: 906,
        name: "Prof. Alberto Felice De Toni",
        title: "President of CUOA & Professor of Operations and Complexity Management",
        subject: "engineering",
        topics: ["Complexity Management", "Operations Strategy", "Innovation Management", "Manufacturing Systems"],
        source: "https://www.cuoa.it/ita/chi-siamo/organi-e-struttura/presidente",
        recruiting: "Not verified",
        summary: "Prof. De Toni leads CUOA as President, recognized internationally for foundational research on manufacturing complexity, self-organizing systems, and operations management."
      },
      {
        id: 907,
        name: "Prof. Andrea Vinelli",
        title: "Director of Lean Enterprise Center & Professor of Operations Management",
        subject: "engineering",
        topics: ["Lean Production", "Supply Chain Integration", "Service Operations", "Digital Operations"],
        source: "https://www.cuoa.it/ita/docenti/andrea-vinelli",
        recruiting: "Not verified",
        summary: "Prof. Vinelli directs the Lean Enterprise Center, publishing extensively on lean manufacturing diffusion, supply chain synchronization, and customer responsiveness."
      },
      {
        id: 908,
        name: "Prof.ssa Paola Valbonesi",
        title: "Scientific Committee Member & Professor of Industrial Economics",
        subject: "social-sciences",
        topics: ["Public Procurement", "Contract Theory", "Industrial Organization", "Competition Policy"],
        source: "https://www.cuoa.it/ita/docenti/paola-valbonesi",
        recruiting: "Not verified",
        summary: "Prof.ssa Valbonesi researches public procurement auctions, contractor performance incentives, and regulatory governance in European infrastructure markets."
      }
    ]
  },

  // 5. USA: Angelo State University (Row 568 / Texas)
  {
    institution: "Angelo State University",
    shortName: "Angelo State",
    slug: "angelo-state-university",
    countryId: "usa",
    countryLabel: "United States",
    location: "San Angelo, Texas, USA",
    sourceRow: 568,
    website: "https://www.angelo.edu",
    headline: "Angelo State University: Cybersecurity, Applied Physics, Nursing & Agriculture Guide",
    description: "Explore Angelo State University admissions, Master of Science in Computer Science, Carr Academic Scholarships, Texas in-state tuition waivers, and faculty in San Angelo.",
    heroEyebrow: "San Angelo, Texas · Founded 1928 · STEM, Cybersecurity & Agricultural Sciences",
    overview: "Established in 1928 and a proud member of the prestigious Texas Tech University System, Angelo State University (ASU) is a comprehensive public doctoral university situated in San Angelo, West Texas. ASU is celebrated for its multi-million dollar Carr Academic Scholarship endowment, state-of-the-art cybersecurity and physics labs, nationally ranked nursing programs, and 6,000-acre agricultural research center.",
    admissions: {
      masters: "Baccalaureate degree from a regionally accredited institution with a minimum cumulative undergraduate GPA of 2.75 out of 4.0 (or 3.0 in the last 60 undergraduate hours).",
      phd: "Doctor of Physical Therapy (DPT) and collaborative doctoral programs; requiring an accredited bachelor's degree, prerequisite sciences (minimum 3.00 GPA), and competitive GRE scores.",
      language: "TOEFL iBT 79, IELTS Academic 6.5 overall (no band below 6.0), or Duolingo English Test 105+ for international non-native English speakers.",
      proposal: "Required for graduate thesis tracks: 1,000-word statement of research intent describing scientific questions in cybersecurity, physics, or animal agriculture.",
      appFee: "$50 USD non-refundable application fee for international and domestic applicants ($40 for military veterans).",
      documents: "Official university transcripts from all post-secondary institutions, proof of English language proficiency, financial statement of support, and letters of recommendation."
    },
    tuitionText: "Undergraduate tuition at Angelo State University is approximately $9,200 USD per year for Texas residents and $22,400 USD per year for non-residents. Significantly, non-resident and international students receiving at least $1,000 USD in competitive academic scholarships qualify for a waiver granting Texas in-state tuition rates, reducing tuition by over $13,000 USD annually.",
    opportunities: [
      {
        id: 2076,
        title: "Angelo State University Carr Distinguished Academic Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        type: "Scholarship",
        source: "https://www.angelo.edu/admissions-and-aid/paying-for-college/scholarships/carr-scholarships/",
        funding: "$1,500 to $6,000 USD annual scholarship plus complete Texas in-state tuition waiver",
        status: "Open for 2027 entry",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority scholarship review)",
        fee: "$50 USD",
        tuition: "$9,200 USD/year (in-state tuition rate unlocked via Carr Scholarship)",
        requirements: {
          gpa: "Minimum 3.5 unweighted high school or transfer undergraduate GPA on 4.0 scale",
          ielts: "IELTS 6.5 or TOEFL 79",
          gre: "Optional",
          papers: "Essay detailing academic achievements and career objectives",
          references: "Two academic recommendation letters"
        },
        desc: "Endowed scholarship granting renewable annual funding and an automatic Texas in-state tuition fee waiver to qualifying domestic and international scholars."
      },
      {
        id: 2077,
        title: "Master of Science in Computer Science and Information Security",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://www.angelo.edu/academics/programs/computer-science-ms/",
        funding: "Graduate teaching assistantships ($11,500 USD/year + in-state tuition waiver)",
        status: "Rolling admissions",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Fall 2027 semester)",
        fee: "$50 USD",
        tuition: "$7,800 USD/year for in-state/waiver eligible students",
        requirements: {
          gpa: "Bachelor's degree in computer science or related STEM field with minimum 2.75 GPA",
          ielts: "IELTS 6.5 overall",
          gre: "GRE combined score of 295+ (waived for GPA > 3.0)",
          papers: "Statement of purpose highlighting programming proficiency in Java, C++, or Python",
          references: "Two academic referee contacts"
        },
        desc: "Two-year graduate program emphasizing cloud network defense, secure cryptographic protocol implementation, artificial intelligence, and database architectures."
      },
      {
        id: 2078,
        title: "Doctor of Physical Therapy (DPT) Clinical Research Fellowship",
        subject: "biology",
        subjects: ["biology"],
        type: "PhD",
        source: "https://www.angelo.edu/academics/programs/physical-therapy-dpt/",
        funding: "$16,000 USD annual research stipend plus full in-state clinical tuition rate",
        status: "Applications via PTCAS",
        deadline: "2026-10-15",
        deadlineText: "October 15, 2026 (Summer 2027 cohort entry)",
        fee: "$50 USD",
        tuition: "$11,200 USD annual in-state rate",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.00 prerequisite science GPA",
          ielts: "IELTS 7.0 or TOEFL 85",
          gre: "GRE Quantitative 150+, Verbal 150+, Analytical Writing 4.0",
          papers: "Essay on evidence-based musculoskeletal physical rehabilitation",
          references: "Three letters of recommendation including licensed physical therapist"
        },
        desc: "Three-year CAPTE-accredited clinical doctoral program producing physical therapy practitioners and researchers conducting clinical neuromuscular rehabilitation studies."
      },
      {
        id: 2079,
        title: "ASU Center for Security Studies Border Intelligence and Cyber Threat Grant",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        source: "https://www.angelo.edu/academics/programs/border-homeland-security-ms/",
        funding: "$12,000 USD project grant and classified cyber simulation environment access",
        status: "Active research call",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Spring 2027 cycle)",
        fee: "$0",
        tuition: "Funded via defense and homeland security research grants",
        requirements: {
          gpa: "Enrolled graduate student in computer science, cybersecurity, or intelligence studies",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research brief analyzing asymmetric cyber warfare or critical infrastructure vulnerabilities",
          references: "Department chair recommendation"
        },
        desc: "Funded research project assessing advanced persistent threats (APT), geospatial intelligence telemetry, and infrastructure cybersecurity along international transportation corridors."
      },
      {
        id: 2080,
        title: "ASU Management, Agriculture & Tech Corporate Cooperative Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        source: "https://www.angelo.edu/current-students/career-development/",
        funding: "$18 to $24 USD per hour paid industry placement",
        status: "Semester placement",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (For Spring 2027 work term)",
        fee: "$0",
        tuition: "Registered within academic semester credits",
        requirements: {
          gpa: "Junior or senior standing with minimum 2.50 cumulative GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Updated resume detailing agricultural, laboratory, or IT technical skills",
          references: "Faculty advisor approval"
        },
        desc: "Four-month cooperative immersion with Texas agricultural technology firms, energy companies, and healthcare providers managing precision agronomy and IT operations."
      },
      {
        id: 2081,
        title: "ASU Postdoctoral Fellowship in Precision Agriculture & Rangeland Ecology",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Fellowship/Job",
        source: "https://employment.angelo.edu/",
        funding: "$64,000 USD annual salary plus Texas state health insurance and retirement benefits",
        status: "Open search",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Appointment starts August 2027)",
        fee: "$0",
        tuition: "Not applicable (salaried university research faculty appointment)",
        requirements: {
          gpa: "Ph.D. in agronomy, animal science, rangeland ecology, or environmental science",
          ielts: "Native or professional English fluency",
          gre: "Not required",
          papers: "Record of peer-reviewed publications on semi-arid soil moisture or livestock genetics",
          references: "Three professional reference letters"
        },
        desc: "Two-year postdoctoral position conducting applied research at ASU's Management, Instruction and Research (MIR) Center testing drought-tolerant forage and remote livestock tracking."
      },
      {
        id: 2082,
        title: "Angelo State University Blue & Gold International Leadership Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.angelo.edu/admissions-and-aid/paying-for-college/scholarships/",
        funding: "$2,000 USD annual tuition credit plus in-state fee waiver eligibility",
        status: "Open for 2027 entry",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Fall 2027 enrollment)",
        fee: "$50 USD",
        tuition: "$9,200 USD/year in-state tuition rate",
        requirements: {
          gpa: "Undergraduate GPA of 3.0 out of 4.0 or high school equivalent",
          ielts: "IELTS 6.5 or TOEFL 79",
          gre: "Not required",
          papers: "Personal essay on international student leadership and cross-cultural engagement",
          references: "Two letters of recommendation"
        },
        desc: "University leadership grant assisting global students who demonstrate academic promise, civic responsibility, and active contributions to campus internationalization."
      }
    ],
    researchers: [
      {
        id: 909,
        name: "Dr. Ronnie Hawkins Jr.",
        title: "President of Angelo State University & Leadership Strategist",
        subject: "social-sciences",
        topics: ["Strategic Leadership", "National Security Strategy", "Cybersecurity Governance", "Institutional Excellence"],
        source: "https://www.angelo.edu/leading-angelo-state/president/",
        recruiting: "Not verified",
        summary: "Dr. Hawkins, a retired U.S. Air Force Lieutenant General and former Director of the Defense Information Systems Agency (DISA), serves as President of Angelo State."
      },
      {
        id: 910,
        name: "Dr. David Bixler",
        title: "Professor of Physics & Department Chair of Physics and Geosciences",
        subject: "physics",
        topics: ["Atomic and Molecular Physics", "Laser Spectroscopy", "Physics Education", "Computational Modeling"],
        source: "https://www.angelo.edu/directory/profile/david-bixler",
        recruiting: "Not verified",
        summary: "Dr. Bixler chairs the physics department, conducting laser spectroscopy investigations and mentoring undergraduate and master's researchers in experimental atomic physics."
      },
      {
        id: 911,
        name: "Dr. Micheal Salisbury",
        title: "Dean of Graduate Studies and Research & Professor of Animal Science",
        subject: "biology",
        topics: ["Ruminant Nutrition", "Meat Science", "Rangeland Livestock Management", "Reproductive Physiology"],
        source: "https://www.angelo.edu/directory/profile/micheal-salisbury",
        recruiting: "Not verified",
        summary: "Dr. Salisbury oversees graduate research and directs animal science studies, evaluating sustainable livestock production and grazing economics in semi-arid rangelands."
      }
    ]
  },

  // 6. UK: Edge Hill University (Row 1250 / Lancashire)
  {
    institution: "Edge Hill University",
    shortName: "Edge Hill",
    slug: "edge-hill-university",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Ormskirk, Lancashire, United Kingdom",
    sourceRow: 1250,
    website: "https://www.edgehill.ac.uk",
    headline: "Edge Hill University: Artificial Intelligence, Biosciences & Health Sciences Guide",
    description: "Explore Edge Hill University admissions, MSc Big Data Analytics, Gold TEF awards, international scholarships, tuition fees, and faculty research in Ormskirk.",
    heroEyebrow: "Ormskirk, Lancashire · Founded 1885 · TEF Gold · STEM & Healthcare Research",
    overview: "Founded in 1885 and based on a picturesque 160-acre campus in Ormskirk, Lancashire (near Liverpool and Manchester), Edge Hill University is an award-winning British public university holding a triple-Gold rating in the UK Teaching Excellence Framework (TEF). Renowned for world-leading research in biomedical sciences, artificial intelligence, clinical medicine, and social policy, Edge Hill combines state-of-the-art laboratory facilities with high student satisfaction.",
    admissions: {
      masters: "Accredited UK 2:2 honours degree (or international equivalent with minimum 55-60% or 2.8/4.0 GPA) in computing, biology, psychology, or related field.",
      phd: "Master's degree with merit or distinction (or first-class honours bachelor's degree) in a relevant subject area with an approved research proposal.",
      language: "Academic IELTS 6.5 overall (with no individual sub-test below 6.0), Pearson PTE 61, or Cambridge English C1 Advanced.",
      proposal: "Required for postgraduate research (MRes/PhD): 1,500-word research proposal articulating research questions, theoretical context, and methodology.",
      appFee: "£0 application fee for direct online postgraduate applications.",
      documents: "Certified degree certificates and transcripts, copy of valid passport, two academic reference letters, CV, and personal statement of purpose."
    },
    tuitionText: "Tuition at Edge Hill University is £9,250 per year for UK domestic students and £16,500 to £17,500 per year for international postgraduate students. Edge Hill provides International Postgraduate Excellence Scholarships offering up to £3,000 in tuition reductions, alongside fully funded UKRI doctoral studentships.",
    opportunities: [
      {
        id: 2083,
        title: "Edge Hill International Postgraduate Excellence Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Scholarship",
        source: "https://www.edgehill.ac.uk/departments/support/international/scholarships/",
        funding: "£3,000 tuition fee discount automatically assessed upon admission",
        status: "Open for 2027 entry",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (September 2027 intake)",
        fee: "£0",
        tuition: "£16,500/year (reduced to £13,500 with scholarship)",
        requirements: {
          gpa: "Equivalent of UK 2:1 honours degree (minimum 60% or 3.0/4.0 GPA)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all skills)",
          gre: "Not required",
          papers: "Personal statement detailing academic interests and career goals",
          references: "Two academic referee contacts"
        },
        desc: "Merit-based tuition scholarship automatically awarded to high-achieving international applicants enrolling in full-time taught master's degree programs."
      },
      {
        id: 2084,
        title: "MSc Big Data Analytics and Artificial Intelligence",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        source: "https://www.edgehill.ac.uk/course/big-data-analytics/",
        funding: "British Council and Edge Hill technology bursaries up to £2,500",
        status: "Applications open",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (Autumn 2027 start)",
        fee: "£0",
        tuition: "£16,500 total program tuition for international students",
        requirements: {
          gpa: "UK 2:2 honours degree or equivalent in computing, mathematics, or science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Demonstrated programming aptitude in Python, R, or SQL",
          references: "Two academic or employer references"
        },
        desc: "One-year master's program providing advanced mastery in distributed data processing (Hadoop/Spark), deep learning, cloud data warehousing, and predictive modeling."
      },
      {
        id: 2085,
        title: "Edge Hill Bioscience Doctoral Studentship in Molecular Oncology",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        source: "https://www.edgehill.ac.uk/departments/support/postgraduate/graduate-school/fees-and-funding/",
        funding: "£19,237 annual tax-free UKRI-matched living stipend plus full tuition waiver for 3 years",
        status: "Annual competition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (October 2027 start)",
        fee: "£0",
        tuition: "Fully funded through university graduate research studentship",
        requirements: {
          gpa: "First-class or 2:1 honours degree (or master's with merit) in biochemistry or genetics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Detailed research proposal (1,500 words) on tumor microenvironment signaling pathways",
          references: "Two academic referee letters from research supervisors"
        },
        desc: "Three-year fully funded PhD studentship exploring cellular signaling mechanisms, DNA repair pathways, and novel therapeutic targets in cancer biology."
      },
      {
        id: 2086,
        title: "Data Science Research Centre Deep Learning Medical Imaging Project",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Research",
        source: "https://www.edgehill.ac.uk/departments/academic/computer-science/research/",
        funding: "£14,000 project funding and high-performance GPU cluster access",
        status: "Active project",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Spring 2027 review)",
        fee: "£0",
        tuition: "Financed through national healthcare engineering grants",
        requirements: {
          gpa: "Enrolled in postgraduate research program in computing or biomedical engineering",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research prospectus on convolutional neural networks for CT/MRI anomaly detection",
          references: "Supervisory faculty recommendation"
        },
        desc: "Applied computer vision research project developing explainable transformer algorithms for automated early diagnosis of lung and retinal pathologies."
      },
      {
        id: 2087,
        title: "North West UK Technology Industry Sandwich Work Placement",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        source: "https://www.edgehill.ac.uk/departments/support/careers/",
        funding: "£19,000 to £22,000 pro-rata paid 10-month industrial placement",
        status: "Annual placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (For 2027 placement commencement)",
        fee: "£0",
        tuition: "Substantially reduced placement year tuition fee (£1,850)",
        requirements: {
          gpa: "Enrolled student with minimum 60% average in Year 2 computing modules",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Technical portfolio demonstrating web development and database management",
          references: "Academic tutor approval"
        },
        desc: "Ten-month paid industrial placement working with software enterprises in Manchester, Liverpool, and across the North West developing enterprise cloud solutions."
      },
      {
        id: 2088,
        title: "Edge Hill Senior Postdoctoral Research Fellow in Health Data Analytics",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Fellowship/Job",
        source: "https://jobs.edgehill.ac.uk/",
        funding: "£38,205 to £42,978 annual salary plus Universities Superannuation Scheme (USS) pension",
        status: "Open recruitment",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Appointment September 2027)",
        fee: "£0",
        tuition: "Not applicable (salaried university research staff appointment)",
        requirements: {
          gpa: "Doctorate in biostatistics, health informatics, or data science completed within 3 years",
          ielts: "Full professional English communication",
          gre: "Not required",
          papers: "Strong publication track record in high-impact medical informatics or epidemiology journals",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral research appointment analyzing large-scale NHS longitudinal patient datasets to evaluate preventative healthcare interventions."
      },
      {
        id: 2089,
        title: "Chancellor's Women in STEM Scholarship at Edge Hill",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://www.edgehill.ac.uk/departments/support/fees-and-funding/scholarships/",
        funding: "£2,000 non-repayable award plus industry executive mentoring",
        status: "Annual award",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Academic Year 2027/28)",
        fee: "£0",
        tuition: "Direct student bursary award",
        requirements: {
          gpa: "Eligible female or non-binary student enrolled in computing, robotics, or engineering",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Essay on advancing women's leadership in British technological innovation",
          references: "Academic reference letter"
        },
        desc: "Endowed scholarship created to inspire and support female scholars excelling in computer science, robotics, and quantitative STEM disciplines at Edge Hill."
      }
    ],
    researchers: [
      {
        id: 912,
        name: "Prof. Ardhendu Behera",
        title: "Professor of Computer Vision and Artificial Intelligence",
        subject: "computer-science",
        topics: ["Computer Vision", "Action Recognition", "Deep Learning", "Affective Computing"],
        source: "https://www.edgehill.ac.uk/person/ardhendu-behera/",
        recruiting: "Not verified",
        summary: "Prof. Behera leads computer vision and AI research at Edge Hill, developing deep neural networks for real-time human activity recognition and assistive robotic systems."
      },
      {
        id: 913,
        name: "Prof. Paul Ashton",
        title: "Head of Biology and Professor of Botany",
        subject: "biology",
        topics: ["Plant Genetics", "Molecular Ecology", "Taxonomy and Phylogenetics", "Biodiversity Conservation"],
        source: "https://www.edgehill.ac.uk/person/paul-ashton/",
        recruiting: "Not verified",
        summary: "Prof. Ashton directs biological sciences, researching hybridization dynamics, plant DNA barcoding, and endangered habitat conservation across the United Kingdom."
      },
      {
        id: 914,
        name: "Prof. Sally Spencer",
        title: "Professor of Clinical Research and Director of Postgraduate Medical Institute",
        subject: "biology",
        topics: ["Systematic Reviews", "Respiratory Health", "Clinical Evidence Synthesis", "Evidence-Based Medicine"],
        source: "https://www.edgehill.ac.uk/person/sally-spencer/",
        recruiting: "Not verified",
        summary: "Prof. Spencer is a leading clinical trials methodologist and Cochrane author specializing in chronic respiratory disease management and evidence synthesis."
      }
    ]
  },

  // 7. Japan: Hokkai-Gakuen University (Row 1647 / Hokkaido)
  {
    institution: "Hokkai-Gakuen University",
    shortName: "HGU",
    slug: "hokkai-gakuen-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Sapporo, Hokkaido, Japan",
    sourceRow: 1647,
    website: "https://www.hgu.jp",
    headline: "Hokkai-Gakuen University: Civil Engineering, Cold-Region Economics & Law Guide",
    description: "Explore Hokkai-Gakuen University admissions, Graduate School of Engineering, cold-climate infrastructure research, tuition reductions, and faculty in Sapporo.",
    heroEyebrow: "Sapporo, Hokkaido · Founded 1885 · Engineering, Law, Economics & Cold-Region Research",
    overview: "Established in 1885 in Sapporo, Hokkai-Gakuen University is the oldest and largest comprehensive private university on Japan's northern island of Hokkaido. Operating two modern campuses (Toyohira and Yamahana), HGU is internationally celebrated for cold-climate civil engineering, environmental geotechnical science, northern regional economics, and legal administration.",
    admissions: {
      masters: "Accredited Bachelor's degree (16 years of formal education) in engineering, economics, law, or humanities with a minimum GPA of 2.8 on a 4.0 scale.",
      phd: "Graduate School of Engineering and Graduate School of Law doctoral courses; requiring a Master's degree (Shushi), thesis submission, and academic defense.",
      language: "Japanese Language Proficiency Test (JLPT) N2 or N1 for Japanese-taught tracks; TOEFL iBT 80 or IELTS 6.0 for international engineering research programs.",
      proposal: "Required for graduate applicants: 2,000-character Japanese or 1,200-word English research proposal (Kenkyu Keikakusho) outlining clear methodology.",
      appFee: "¥30,000 JPY standard Japanese graduate entrance examination fee.",
      documents: "Graduation certificate and academic transcripts, JLPT/TOEFL scorecards, research plan, two letters of recommendation, and personal statement of purpose."
    },
    tuitionText: "Tuition at Hokkai-Gakuen University is approximately ¥850,000 to ¥1,150,000 JPY per year (plus a one-time admission fee of ¥200,000 JPY). International students are eligible for a 30% to 50% tuition reduction scholarship based on academic review, in addition to JASSO monthly honors scholarships.",
    opportunities: [
      {
        id: 2090,
        title: "Hokkai-Gakuen International Student Special Tuition Exemption Award",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Scholarship",
        source: "https://www.hgu.jp/international/scholarship.html",
        funding: "30% to 50% tuition fee waiver plus JASSO reservation priority (¥48,000 JPY/month)",
        status: "Open for 2027 entry",
        deadline: "2026-11-25",
        deadlineText: "November 25, 2026 (Spring April 2027 intake)",
        fee: "¥30,000 JPY",
        tuition: "¥580,000 JPY/year (after 50% tuition reduction)",
        requirements: {
          gpa: "Undergraduate GPA of 3.0 out of 4.0 or equivalent",
          ielts: "JLPT N2/N1 or IELTS 6.0",
          gre: "Not required",
          papers: "Study plan detailing academic and professional goals in Hokkaido",
          references: "Recommendation from university academic advisor"
        },
        desc: "Merit-based institutional award granting tuition fee reductions to qualified overseas candidates pursuing graduate studies in engineering, economics, and humanities."
      },
      {
        id: 2091,
        title: "Master of Engineering in Cold-Region Infrastructure and Geotechnics",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://www.hgu.jp/faculty-graduate/graduate-school/engineering.html",
        funding: "Graduate teaching assistantships (¥300,000 JPY/semester) and research grants",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Spring 2027 entrance examination)",
        fee: "¥30,000 JPY",
        tuition: "¥920,000 JPY annual tuition (before scholarship reduction)",
        requirements: {
          gpa: "Completed 16-year bachelor's degree in civil engineering, architecture, or geosciences",
          ielts: "JLPT N2 (or IELTS 6.0 for English-track research)",
          gre: "Not required",
          papers: "Research proposal on frost-heave mitigation, snow avalanche barriers, or permafrost soil stability",
          references: "Two academic referee evaluation letters"
        },
        desc: "Two-year master's program providing specialized engineering training in seismic-resistant structural design, snow disaster prevention, and durable cold-weather concrete."
      },
      {
        id: 2092,
        title: "Doctor of Philosophy in Cold-Climate Environmental Engineering",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        source: "https://www.hgu.jp/faculty-graduate/graduate-school/engineering.html",
        funding: "MEXT Doctoral Fellowship or HGU Doctoral Research Stipend (¥1,500,000 JPY/year)",
        status: "Annual examination",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 (Spring 2027 matriculation)",
        fee: "¥30,000 JPY",
        tuition: "Fully waived for MEXT scholars; subsidized for university research fellows",
        requirements: {
          gpa: "Master's degree (Shushi) in civil, mechanical, or environmental engineering",
          ielts: "JLPT N2 or IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis summary and 10-page doctoral research methodology prospectus",
          references: "Two letters of recommendation from graduate professors"
        },
        desc: "Three-year doctoral program investigating thermodynamic phase-change mechanics in frozen soils, ice accretion on transmission towers, and cold-region renewable energy."
      },
      {
        id: 2093,
        title: "Hokkaido Cold-Region Development & Regional Economics Research Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Research",
        source: "https://www.hgu.jp/research/",
        funding: "¥750,000 JPY annual project research grant and library archive access",
        status: "Call for research proposals",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Autumn 2027 project cycle)",
        fee: "¥0",
        tuition: "Supported by Hokkai-Gakuen Development Research Institute",
        requirements: {
          gpa: "Enrolled graduate student or visiting researcher",
          ielts: "JLPT N2 or IELTS 6.5",
          gre: "Not required",
          papers: "Research outline examining demographic decline, agricultural supply chains, and winter tourism in Hokkaido",
          references: "HGU faculty host sponsor endorsement"
        },
        desc: "Funded research project assessing regional economic rejuvenation, geothermal district heating systems, and northern logistics corridors across Hokkaido."
      },
      {
        id: 2094,
        title: "Sapporo Urban Transportation and Snow Infrastructure Practicum",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        source: "https://www.hgu.jp/career/internship.html",
        funding: "¥90,000 JPY monthly travel and living expense allowance",
        status: "Semester placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Spring 2027 placement)",
        fee: "¥0",
        tuition: "Credited within undergraduate/graduate curriculum",
        requirements: {
          gpa: "Enrolled student with minimum 2.8 cumulative GPA",
          ielts: "JLPT N2 conversational ability",
          gre: "Not required",
          papers: "Curriculum vitae and technical interview",
          references: "Faculty advisor approval"
        },
        desc: "Three-month internship collaborating with Sapporo City transportation engineering bureaus and construction contractors monitoring winter road heating and snow removal telemetry."
      },
      {
        id: 2095,
        title: "Hokkai-Gakuen Senior Postdoctoral Fellow in Environmental Geotechnics",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Fellowship/Job",
        source: "https://www.hgu.jp/about/recruit.html",
        funding: "¥5,200,000 JPY annual salary plus Japanese national health and pension insurance",
        status: "Open search",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (October 2027 appointment)",
        fee: "¥0",
        tuition: "Not applicable (salaried university research and teaching appointment)",
        requirements: {
          gpa: "Doctorate in geotechnical engineering, civil engineering, or cold-region science",
          ielts: "Fluent English communication; conversational Japanese preferred",
          gre: "Not required",
          papers: "Minimum three peer-reviewed publications in international geotechnical journals",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral fellowship conducting experimental testing on soil liquefaction under freeze-thaw cycles and microbial-induced calcite precipitation for slope stabilization."
      },
      {
        id: 2096,
        title: "Hokkai Educational Foundation Northern Pioneer Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.hgu.jp/international/scholarship.html",
        funding: "¥350,000 JPY one-time non-repayable living stipend",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Academic year 2027)",
        fee: "¥0",
        tuition: "Direct stipend grant",
        requirements: {
          gpa: "Minimum 3.2 GPA in prior academic semester",
          ielts: "JLPT N2 or IELTS 6.0",
          gre: "Not required",
          papers: "Report on community contribution and academic dedication in Sapporo",
          references: "Graduate school dean nomination"
        },
        desc: "Foundation scholarship established to support international scholars who demonstrate exemplary academic performance, community involvement, and dedication to northern studies."
      }
    ],
    researchers: [
      {
        id: 915,
        name: "Prof. Dr. Shinji Sugiyama",
        title: "Professor of Geotechnical Engineering & Department Chair",
        subject: "engineering",
        topics: ["Cold-Region Geotechnics", "Soil Freezing Mechanics", "Slope Stability", "Disaster Prevention"],
        source: "https://www.hgu.jp/faculty-graduate/engineering/prof-sugiyama.html",
        recruiting: "Not verified",
        summary: "Prof. Dr. Sugiyama is a prominent geotechnical scientist researching frost-heave forces in soils, slope failure prediction during spring snowmelt, and earth retaining structures."
      },
      {
        id: 916,
        name: "Prof. Dr. Masahiko Terakado",
        title: "Professor of Regional Economics & Public Policy",
        subject: "social-sciences",
        topics: ["Regional Economic Development", "Public Infrastructure Economics", "Hokkaido Industrial Policy", "Fiscal Decentralization"],
        source: "https://www.hgu.jp/faculty-graduate/economics/prof-terakado.html",
        recruiting: "Not verified",
        summary: "Prof. Dr. Terakado investigates public infrastructure investment returns, economic diversification models, and local government finance across northern Japan."
      },
      {
        id: 917,
        name: "Prof. Dr. Hiroshi Tomita",
        title: "Professor of Environmental Fluid Dynamics & Wind Engineering",
        subject: "engineering",
        topics: ["Wind Engineering", "Snowdrift Aerodynamics", "Urban Microclimate", "Atmospheric Boundary Layer"],
        source: "https://www.hgu.jp/faculty-graduate/engineering/prof-tomita.html",
        recruiting: "Not verified",
        summary: "Prof. Dr. Tomita utilizes wind-tunnel testing and numerical CFD simulations to model blowing snow deposition, bridge aerodynamic stability, and building wind loads in winter."
      }
    ]
  },

  // 8. Sweden: Gammelkroppa skogsskola (Row 1568 / Värmland)
  {
    institution: "Gammelkroppa skogsskola",
    shortName: "Gammelkroppa",
    slug: "gammelkroppa-skogsskola",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Filipstad, Värmland, Sweden",
    sourceRow: 1568,
    website: "https://www.gammelkroppa.se",
    headline: "Gammelkroppa skogsskola: Sustainable Forestry, Drone Remote Sensing & Bioeconomy Guide",
    description: "Explore Gammelkroppa skogsskola admissions, Forest Engineer (Skogstekniker) credentials, Swedish CSN funding, silviculture research, and faculty in Värmland.",
    heroEyebrow: "Filipstad, Värmland · Founded 1860 · Silviculture, Forest Engineering & Bioeconomy",
    overview: "Founded in 1860 near Filipstad in the forested heart of Värmland, Gammelkroppa skogsskola is Sweden's oldest and most prestigious specialist forestry engineering academy. Managing its own 1,200-hectare research and demonstration forest, Gammelkroppa provides intensive, field-grounded higher vocational education training Forest Engineers (Skogstekniker) in precision silviculture, LiDAR drone remote sensing, timber logistics, and boreal forest carbon modeling.",
    admissions: {
      masters: "Accredited two-year higher vocational diploma (Yrkeshögskoleexamen - Skogstekniker) or bachelor's degree in forestry, biology, agriculture, or environmental science.",
      phd: "Direct collaborative doctoral research coordinated with the Swedish University of Agricultural Sciences (SLU) and Karlstad University in boreal forest genetics and carbon cycling.",
      language: "Swedish eligibility corresponding to Svenska 1/2/3 for Swedish-taught vocational programs; English eligibility corresponding to Engelska 6 (IELTS 6.5) for international research projects.",
      proposal: "Required for advanced forestry research bursaries: 750-word statement outlining practical experience in GIS mapping, silvicultural planning, or timber harvesting operations.",
      appFee: "0 SEK application fee for Swedish and EU/EEA citizens.",
      documents: "Certified high school / post-secondary transcripts, driving license (minimum B license for field training), resume with forestry or outdoor work experience, and personal statement."
    },
    tuitionText: "Tuition is 0 SEK for Swedish, Nordic, and EU/EEA/Swiss citizens, who are also entitled to Swedish state CSN study grants and loans (approx. 13,100 SEK per month). For non-EU/EEA international candidates, tuition is approximately 80,000 to 95,000 SEK per academic year, supported by forestry foundation bursaries.",
    opportunities: [
      {
        id: 2097,
        title: "Gammelkroppa Foundation Sustainable Silviculture Excellence Bursary",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Scholarship",
        source: "https://www.gammelkroppa.se/utbildning/skogstekniker/",
        funding: "35,000 SEK annual stipend for field equipment, living expenses, and research travel",
        status: "Open for 2027 entry",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Autumn 2027 intake)",
        fee: "0 SEK",
        tuition: "0 SEK for EU/EEA citizens",
        requirements: {
          gpa: "High school or vocational diploma with strong marks in natural sciences and mathematics",
          ielts: "Svenska 2 or Engelska 6",
          gre: "Not required",
          papers: "Essay on sustainable forest management and biodiversity preservation in Scandinavian taiga",
          references: "Two letters of recommendation from forestry employers or teachers"
        },
        desc: "Endowed scholarship awarding motivated students pursuing the two-year Forest Engineer (Skogstekniker) program at Gammelkroppa's historic Värmland campus."
      },
      {
        id: 2098,
        title: "Skogstekniker Higher Vocational Program (Forest Engineer Diploma)",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Master's",
        source: "https://www.gammelkroppa.se/utbildning/",
        funding: "Full Swedish CSN student financial aid (studiemedel) approx. 13,100 SEK/month",
        status: "Applications open via Yh-antagning",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Autumn 2027 commencement)",
        fee: "0 SEK",
        tuition: "0 SEK for Swedish and EU/EEA citizens; 90,000 SEK/year for non-EU",
        requirements: {
          gpa: "General entry requirements for Swedish higher vocational education plus practical forestry prerequisites",
          ielts: "Svenska 2/3 and Engelska 6",
          gre: "Not required",
          papers: "Work certificate demonstrating at least 6 months of forestry, agricultural, or outdoor experience",
          references: "Two professional reference contacts"
        },
        desc: "Two-year accredited higher education qualification training operational forestry leaders in harvest logistics, mechanized thinning, GIS spatial analysis, and forest economics."
      },
      {
        id: 2099,
        title: "Scandinavian Boreal Forest Carbon Sequestration Doctoral Fellowship",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        source: "https://www.gammelkroppa.se/om-oss/",
        funding: "32,500 SEK monthly doctoral salary (doktorandanställning) for 4 years",
        status: "Open for research proposals",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer 2027 start)",
        fee: "0 SEK",
        tuition: "100% tuition-free doctoral employment position",
        requirements: {
          gpa: "Master's degree (120 ECTS) in forestry science, ecology, or soil science with distinction",
          ielts: "Engelska 6 or IELTS 7.0 overall",
          gre: "Not required",
          papers: "Comprehensive doctoral dissertation plan (10-15 pages) on soil organic carbon dynamics under continuous cover forestry",
          references: "Two academic referee letters from university professors"
        },
        desc: "Four-year university doctoral position conducted jointly with SLU utilizing Gammelkroppa's demonstration forests to quantify mycorrhizal fungal carbon storage."
      },
      {
        id: 2100,
        title: "Värmland Drone LiDAR and Multispectral Forest Inventory Project",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Research",
        source: "https://www.gammelkroppa.se/kontakt/",
        funding: "75,000 SEK project grant and DJI enterprise drone sensor access",
        status: "Active research call",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Winter evaluation)",
        fee: "0 SEK",
        tuition: "Supported by Swedish Forest Agency development grants",
        requirements: {
          gpa: "Completed diploma or degree in forestry engineering, geomatics, or data science",
          ielts: "Swedish and English proficiency",
          gre: "Not required",
          papers: "Methodology outline on automated single-tree crown segmentation from point clouds",
          references: "Gammelkroppa faculty endorsement"
        },
        desc: "Applied geomatics project testing aerial LiDAR and thermal imaging for early detection of European spruce bark beetle (Ips typographus) infestations across Värmland."
      },
      {
        id: 2101,
        title: "Swedish Forestry Industrial Management and Logging Practicum (LIA)",
        subject: "environment",
        subjects: ["environment"],
        type: "Internship",
        source: "https://www.gammelkroppa.se/utbildning/lia-praktik/",
        funding: "CSN covered student internship plus host company travel and lodging allowance",
        status: "Scheduled semester placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Spring 2027 LIA period)",
        fee: "0 SEK",
        tuition: "Integrated within curriculum credits (Lärande i arbete)",
        requirements: {
          gpa: "Enrolled in Year 2 of the Skogstekniker program in good standing",
          ielts: "Swedish language competence",
          gre: "Not required",
          papers: "Practicum work plan signed by forestry enterprise mentor",
          references: "Course director approval"
        },
        desc: "Twenty-week immersive internship placed within major Swedish forestry corporations (Sveaskog, Stora Enso, Mellanskog) managing timber purchasing and logging crews."
      },
      {
        id: 2102,
        title: "Gammelkroppa Senior Postdoctoral Fellow in Continuous Cover Silviculture",
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Fellowship/Job",
        source: "https://www.gammelkroppa.se/om-oss/lediga-tjanster/",
        funding: "45,000 to 50,000 SEK monthly salary plus full Swedish statutory pension and health cover",
        status: "Open recruitment",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027 (Appointment September 2027)",
        fee: "0 SEK",
        tuition: "Not applicable (academic staff appointment)",
        requirements: {
          gpa: "Doctorate in silviculture, forest ecology, or botany completed within 4 years",
          ielts: "Fluent Swedish and English communication",
          gre: "Not required",
          papers: "Strong publication record in international forestry and ecology journals",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral position evaluating multi-layered forest stand structures, natural regeneration dynamics, and economic yields under continuous-cover forestry."
      },
      {
        id: 2103,
        title: "Wermländska Sällskapet Forest Conservation and Innovation Award",
        subject: "environment",
        subjects: ["environment"],
        type: "Scholarship",
        source: "https://www.gammelkroppa.se/om-oss/stipendier/",
        funding: "20,000 SEK one-time award",
        status: "Annual award",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Awarded at Spring graduation)",
        fee: "0 SEK",
        tuition: "Direct monetary grant",
        requirements: {
          gpa: "Enrolled student at Gammelkroppa with outstanding practical and academic results",
          ielts: "Swedish language proficiency",
          gre: "Not required",
          papers: "Final thesis project demonstrating innovation in environmental forestry",
          references: "Nomination by faculty evaluation committee"
        },
        desc: "Commemorative regional scholarship established to recognize graduating forestry students who exhibit outstanding leadership, craftsmanship, and ecological stewardship."
      }
    ],
    researchers: [
      {
        id: 918,
        name: "Dr. Peter Bonnevier",
        title: "Rektor & Senior Forestry Education Strategist",
        subject: "environment",
        topics: ["Forestry Pedagogy", "Sustainable Forest Management", "Vocational Education Quality", "Bioeconomy Transitions"],
        source: "https://www.gammelkroppa.se/om-oss/personal/",
        recruiting: "Not verified",
        summary: "Dr. Bonnevier directs Gammelkroppa skogsskola as Rektor, coordinating national higher vocational standards and industrial co-production across Sweden's forestry sector."
      },
      {
        id: 919,
        name: "Dr. Mikael Lindberg",
        title: "Director of Forest Operations & Silviculture Researcher",
        subject: "environment",
        topics: ["Silvicultural Systems", "Mechanized Timber Harvesting", "Forest Road Logistics", "Thinning Regimes"],
        source: "https://www.gammelkroppa.se/om-oss/personal/mikael-lindberg/",
        recruiting: "Not verified",
        summary: "Dr. Lindberg manages Gammelkroppa's 1,200-hectare research forest, publishing on mechanized harvesting efficiency, soil compaction mitigation, and stand regeneration."
      },
      {
        id: 920,
        name: "Dr. Anna-Lena Axelsson",
        title: "Lecturer in Forest Inventory and Geomatics",
        subject: "engineering",
        topics: ["Forest Inventory", "LiDAR Remote Sensing", "Landscape Ecology", "Biodiversity Metrics"],
        source: "https://www.gammelkroppa.se/om-oss/personal/anna-lena-axelsson/",
        recruiting: "Not verified",
        summary: "Dr. Axelsson researches national forest inventory methods, satellite remote sensing, and long-term landscape vegetation changes across Scandinavian boreal ecosystems."
      }
    ]
  },

  // 9. Netherlands: Nyenrode Business Universiteit (Row 1387 / Utrecht)
  {
    institution: "Nyenrode Business Universiteit",
    shortName: "Nyenrode",
    slug: "nyenrode-business-universiteit",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Breukelen, Utrecht, Netherlands",
    sourceRow: 1387,
    website: "https://www.nyenrode.nl",
    headline: "Nyenrode Business Universiteit: Full-time MBA, Management & Accountancy Guide",
    description: "Explore Nyenrode Business Universiteit admissions, Full-time MBA, Corporate Governance scholarships, estate campus facilities, tuition fees, and faculty in Breukelen.",
    heroEyebrow: "Breukelen & Amsterdam, Netherlands · Founded 1946 · Leadership, Stewardship & Entrepreneurship",
    overview: "Established in 1946 by captains of Dutch industry (including KLM, Shell, and Unilever) at the historic 13th-century Nyenrode Castle estate in Breukelen, Nyenrode Business Universiteit is the only private research university in the Netherlands. Internationally renowned for its core values—Leadership, Entrepreneurship, and Stewardship—Nyenrode delivers prestigious AMBA- and EQUIS-accredited Master of Science in Management, Full-time MBA, and executive PhD programs.",
    admissions: {
      masters: "Accredited Bachelor's degree (B.Sc. or B.A.) from a recognized university in business, economics, engineering, or social sciences with sound quantitative foundations (minimum GPA 3.0/4.0 or Dutch equivalent 6.8/10).",
      phd: "Nyenrode PhD Program; requiring an outstanding Master's degree (M.Sc. or MBA with distinction), approved research proposal, and supervisor matching.",
      language: "TOEFL iBT 92 (minimum 22 in all sub-scores), IELTS Academic 6.5 overall (minimum 6.0 in all bands), or Cambridge C1 Advanced.",
      proposal: "Required for MBA and master's applicants: 1,000-word personal leadership statement and case evaluation highlighting ethical stewardship.",
      appFee: "€0 application fee for direct university admissions portal submissions.",
      documents: "Certified university diploma and transcripts of records, CV, motivation letter, Nyenrode Admissions Test (LTP) or GMAT/GRE score, and two recommendation letters."
    },
    tuitionText: "Tuition at Nyenrode Business Universiteit is approximately €23,500 to €28,000 for the Master of Science in Management and €42,000 to €45,000 for the Full-time MBA. Nyenrode offers Revolving Scholarships, Corporate Stewardship Grants providing up to 50% tuition fee reductions, and Dutch student finance loans.",
    opportunities: [
      {
        id: 2104,
        title: "Nyenrode Revolving Scholarship for International Talents",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        source: "https://www.nyenrode.nl/en/prospective-students/scholarships/revolving-scholarship",
        funding: "Up to 50% tuition reduction (€12,000 to €22,000) funded by university alumni foundation",
        status: "Open for 2027 intake",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Autumn 2027 MBA & MSc intake)",
        fee: "€0",
        tuition: "€28,000 total MSc tuition (reduced to €14,000 with scholarship)",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.3 GPA or top 15% class rank",
          ielts: "IELTS 6.5 overall or TOEFL 92",
          gre: "Nyenrode Admissions Test (LTP) or GMAT 620+ / GRE equivalent",
          papers: "Essay on personal commitment to 'pay it forward' by supporting future students",
          references: "Two academic or executive referee letters"
        },
        desc: "Prestigious alumni-funded revolving scholarship enabling ambitious international students to attend Nyenrode, with recipients committing to contribute back to the fund upon career establishment."
      },
      {
        id: 2105,
        title: "Full-time Master of Science in Management (MSc in Management)",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        source: "https://www.nyenrode.nl/en/programs/m/master-of-science-in-management",
        funding: "Nyenrode Merit Awards and corporate living cost bursaries",
        status: "Applications open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (September 2027 cohort)",
        fee: "€0",
        tuition: "€28,000 total program tuition",
        requirements: {
          gpa: "Bachelor's degree in any field with demonstrated analytical capability (GPA 3.0/4.0)",
          ielts: "IELTS 6.5 overall",
          gre: "GMAT/GRE or Nyenrode LTP test score",
          papers: "Curriculum vitae and personal leadership vision statement",
          references: "Two academic or employer recommendations"
        },
        desc: "Sixteen-month top-ranked master's program offering specialized tracks in Digital Business & Innovation, Financial Management, and Global Business Strategy across Breukelen and Amsterdam."
      },
      {
        id: 2106,
        title: "Nyenrode Doctoral Fellowship in Corporate Governance and Stewardship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.nyenrode.nl/en/faculty-research/phd-program",
        funding: "€30,000 annual research bursary and full waiver of doctoral supervision fees",
        status: "Open for research proposals",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 matriculation)",
        fee: "€0",
        tuition: "Fully funded through corporate governance research endowments",
        requirements: {
          gpa: "Master's degree (MSc or MBA) with minimum Dutch grade 7.5 or international 3.5 GPA",
          ielts: "IELTS 7.0 overall or TOEFL 100",
          gre: "Not required",
          papers: "Comprehensive doctoral dissertation outline (10-15 pages) on board oversight and ESG disclosure",
          references: "Two academic referee letters from full professors"
        },
        desc: "Four-year executive and full-time doctoral research fellowship at Nyenrode Corporate Governance Institute examining supervisory board efficacy, stewardship culture, and ESG accountability."
      },
      {
        id: 2107,
        title: "Nyenrode European Institute for Sustainable Leadership Research Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Research",
        source: "https://www.nyenrode.nl/en/faculty-research/research-centers",
        funding: "€16,000 project grant and executive boardroom dataset access",
        status: "Active research call",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Winter evaluation)",
        fee: "€0",
        tuition: "Covered through institute research endowments",
        requirements: {
          gpa: "Enrolled in master's or doctoral program in management or organizational economics",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research brief analyzing corporate purpose alignment and stakeholder value creation in European multinationals",
          references: "Nyenrode research center director approval"
        },
        desc: "Applied management research project investigating how European business enterprises balance long-term environmental sustainability with short-term capital market demands."
      },
      {
        id: 2108,
        title: "Amsterdam Financial District Corporate Strategy & Consulting Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.nyenrode.nl/en/prospective-students/career-services",
        funding: "€1,200 to €1,800 monthly corporate internship stipend",
        status: "Semi-annual placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (For Spring 2027 placement)",
        fee: "€0",
        tuition: "Curricular credit integration within master's capstone",
        requirements: {
          gpa: "Enrolled in Nyenrode MSc or MBA with minimum grade average 7.0/10",
          ielts: "IELTS 6.5 and Dutch B1 advantageous",
          gre: "Not required",
          papers: "Curriculum vitae and consulting business case analysis",
          references: "Career personal development advisor endorsement"
        },
        desc: "Five-month corporate strategy internship with Fortune 500 multinationals and consulting firms on Amsterdam's Zuidas (KPMG, ING, Heineken) executing strategic transformation projects."
      },
      {
        id: 2109,
        title: "Nyenrode Senior Postdoctoral Fellow in Auditing and Accounting Ethics",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Fellowship/Job",
        source: "https://www.nyenrode.nl/en/about-nyenrode/work-at-nyenrode",
        funding: "€58,000 to €66,000 annual gross salary plus Dutch holiday and end-of-year allowances",
        status: "Open recruitment",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Appointment September 2027)",
        fee: "€0",
        tuition: "Not applicable (salaried university research and teaching appointment)",
        requirements: {
          gpa: "Ph.D. in accounting, auditing, or behavioral economics completed within 4 years",
          ielts: "Fluent professional English communication",
          gre: "Not required",
          papers: "Track record of publications in recognized international accounting and auditing journals",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral research appointment at Nyenrode Faculty of Accountancy investigating audit quality metrics, fraud detection algorithms, and ethical professional skepticism."
      },
      {
        id: 2110,
        title: "Nyenrode Women in Leadership and Stewardship Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.nyenrode.nl/en/prospective-students/scholarships",
        funding: "€10,000 direct tuition fee reduction",
        status: "Open for 2027 entry",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall 2027 intake)",
        fee: "€0",
        tuition: "Reduces overall program tuition",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.2 GPA or Dutch grade 7.0+",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Essay outlining personal leadership vision and strategies for fostering gender parity in corporate governance",
          references: "One professional reference letter"
        },
        desc: "Targeted scholarship supporting female emerging leaders and executives enrolling in full-time management and MBA degree programs at Nyenrode's Breukelen estate."
      }
    ],
    researchers: [
      {
        id: 921,
        name: "Prof. Dr. Barbara Majoor",
        title: "Rector Magnificus & Professor of Auditing",
        subject: "social-sciences",
        topics: ["Auditing Quality", "Corporate Accountability", "Accounting Ethics", "Higher Education Governance"],
        source: "https://www.nyenrode.nl/en/faculty-research/faculty/p/barbara-majoor",
        recruiting: "Not verified",
        summary: "Prof. Dr. Majoor serves as Rector Magnificus of Nyenrode, researching audit committee effectiveness, professional skepticism, and institutional accountability."
      },
      {
        id: 922,
        name: "Prof. Dr. Tineke Lambooy",
        title: "Professor of Corporate Law & Sustainable Enterprise Fellow",
        subject: "social-sciences",
        topics: ["Corporate Social Responsibility Law", "Business and Human Rights", "Circular Economy Law", "ESG Due Diligence"],
        source: "https://www.nyenrode.nl/en/faculty-research/faculty/p/tineke-lambooy",
        recruiting: "Not verified",
        summary: "Prof. Dr. Lambooy is an internationally acclaimed legal scholar researching corporate law mechanisms for climate change compliance, CSR reporting, and natural capital preservation."
      },
      {
        id: 923,
        name: "Prof. Dr. Dennis Vink",
        title: "Professor of Finance and Investment & Center Director",
        subject: "mathematics",
        topics: ["Structured Finance", "Private Equity", "Credit Risk Modeling", "Capital Structure Decisions"],
        source: "https://www.nyenrode.nl/en/faculty-research/faculty/p/dennis-vink",
        recruiting: "Not verified",
        summary: "Prof. Dr. Vink leads corporate finance and investment research, publishing extensively on securitization markets, syndicated loan pricing, and leverage buyout performance."
      }
    ]
  },

  // 10. Switzerland: Academy of Leadership Sciences Switzerland (Row 1333 / Zurich)
  {
    institution: "Academy of Leadership Sciences Switzerland",
    shortName: "ALSS",
    slug: "academy-of-leadership-sciences-switzerland",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Zurich, Switzerland",
    sourceRow: 1333,
    website: "https://www.alss-edu.ch",
    headline: "Academy of Leadership Sciences Switzerland: Executive Leadership, Public Law & Diplomacy Guide",
    description: "Explore Academy of Leadership Sciences Switzerland (ALSS) admissions, Master of Arts in Leadership, Doctor of Business Administration, Swiss tuition, and faculty in Zurich.",
    heroEyebrow: "Zurich, Switzerland · Founded 2014 · Leadership Sciences, Public Governance & Diplomacy",
    overview: "Established in 2014 in Zurich, the Academy of Leadership Sciences Switzerland (ALSS) is an accredited international Swiss higher education institute specializing in advanced executive leadership education, organizational governance, international law, and conflict diplomacy. ALSS offers flexible, blended, and campus-based graduate degrees tailored for senior executives, diplomats, healthcare directors, and civil society leaders globally.",
    admissions: {
      masters: "Accredited Bachelor's degree (or recognized equivalent 180 ECTS) in social sciences, business, law, or healthcare administration with a minimum GPA of 2.8 on a 4.0 scale, plus at least two years of professional leadership experience.",
      phd: "Doctor of Business Administration (DBA) or Doctor of Philosophy (Ph.D.) in Leadership; requiring an accredited master's degree, minimum 3.0 GPA, significant managerial experience, and defensible research proposal.",
      language: "English proficiency at CEFR B2/C1 level (IELTS Academic 6.5 overall, TOEFL iBT 88+, or Duolingo English Test 110) or certified degree taught in English.",
      proposal: "Required for master's and doctoral applicants: 1,500-word research prospectus detailing proposed empirical inquiry in leadership styles, public governance, or international diplomacy.",
      appFee: "150 CHF non-refundable application and evaluation dossier fee.",
      documents: "Certified copies of degree certificates and academic transcripts, comprehensive curriculum vitae, two letters of professional/academic recommendation, and personal statement."
    },
    tuitionText: "Tuition at the Academy of Leadership Sciences Switzerland ranges from 12,500 CHF to 16,800 CHF for master's programs and approximately 18,500 CHF to 24,000 CHF for three-year doctoral degrees. ALSS provides Swiss Global Leadership Bursaries offering up to 25% tuition fee reductions and structured semester installment options.",
    opportunities: [
      {
        id: 2111,
        title: "ALSS Swiss Global Leadership Excellence Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.alss-edu.ch/scholarships/",
        funding: "4,000 CHF direct tuition fee reduction across graduate program duration",
        status: "Open for 2027 entry",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring 2027 intake)",
        fee: "150 CHF",
        tuition: "11,800 CHF total program tuition (after scholarship deduction)",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.2 GPA or equivalent",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Essay on ethical leadership challenges and crisis decision-making in multilateral organizations",
          references: "Two professional reference letters from senior executives"
        },
        desc: "Merit-based international award granting financial support to high-potential executives, civil servants, and humanitarian directors pursuing graduate studies in leadership."
      },
      {
        id: 2112,
        title: "Master of Arts in Leadership and Public Administration (M.A.)",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.alss-edu.ch/master-of-arts-in-leadership-and-public-administration/",
        funding: "Flexible Swiss executive financing and installment payment plans with 0% interest",
        status: "Admissions ongoing",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Summer 2027 commencement)",
        fee: "150 CHF",
        tuition: "15,800 CHF total degree tuition",
        requirements: {
          gpa: "Bachelor's degree with at least 2 years of professional work experience",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Leadership portfolio highlighting managerial scope and organizational challenges",
          references: "One employer sponsor endorsement letter"
        },
        desc: "One-year flexible executive master's degree preparing leaders for senior responsibilities in government agencies, international NGOs, and public institutions through strategic governance training."
      },
      {
        id: 2113,
        title: "Doctor of Business Administration (DBA) in Strategic Leadership",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.alss-edu.ch/doctorate-programs/",
        funding: "5,000 CHF annual research colloquium grant and personalized doctoral dissertation supervision",
        status: "Open for 2027 cohort",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Fall 2027 research start)",
        fee: "200 CHF",
        tuition: "21,000 CHF total program tuition (spread over 3 years)",
        requirements: {
          gpa: "Accredited master's degree (M.A., M.Sc., or MBA) with minimum 3.0 GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Defensible 2,000-word doctoral research proposal in organizational leadership or governance",
          references: "Two academic or executive recommendations"
        },
        desc: "Three-year practitioner doctorate developing empirical frameworks for transformational leadership, corporate governance agility, and organizational resilience during systemic disruptions."
      },
      {
        id: 2114,
        title: "ALSS Centre for Peace and Conflict Diplomacy Research Project",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://www.alss-edu.ch/research/",
        funding: "11,000 CHF project seed research grant and international treaty archive access",
        status: "Active research call",
        deadline: "2026-12-31",
        deadlineText: "December 31, 2026 (Winter research cycle)",
        fee: "0 CHF",
        tuition: "Financed through Swiss private research foundations",
        requirements: {
          gpa: "Enrolled in master's or doctoral program in international law or political science",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research brief analyzing mediation techniques and neutral negotiation in cross-border territorial disputes",
          references: "ALSS academic supervisor endorsement"
        },
        desc: "Applied legal and diplomatic research project evaluating the efficacy of Swiss neutral mediation frameworks in contemporary multilateral humanitarian negotiations."
      },
      {
        id: 2115,
        title: "Geneva & Zurich International NGO Governance Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.alss-edu.ch/student-services/",
        funding: "1,600 CHF monthly project living allowance",
        status: "Semi-annual placement",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Spring 2027 placement)",
        fee: "0 CHF",
        tuition: "Curricular credit integration within master's capstone",
        requirements: {
          gpa: "Enrolled student with minimum B+ average in core leadership modules",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Case reflection on non-profit accountability and stakeholder transparency",
          references: "Program director approval"
        },
        desc: "Four-month practical internship working alongside international humanitarian organizations and non-profit foundations in Geneva and Zurich evaluating strategic program governance."
      },
      {
        id: 2116,
        title: "ALSS Senior Postdoctoral Fellow in Organizational Ethics & Leadership",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.alss-edu.ch/careers/",
        funding: "82,000 CHF annual salary plus Swiss statutory social security and pension cover",
        status: "Open recruitment",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Appointment starts September 2027)",
        fee: "0 CHF",
        tuition: "Not applicable (salaried university research and mentoring role)",
        requirements: {
          gpa: "Doctorate (Ph.D. or DBA) in leadership studies, organizational psychology, or public administration",
          ielts: "Native or professional English fluency",
          gre: "Not required",
          papers: "Minimum two peer-reviewed articles in indexed management or ethics journals",
          references: "Three academic reference contacts"
        },
        desc: "Two-year research fellowship conducting empirical investigations into ethical decision-making heuristics among C-suite executives and public sector ministers."
      },
      {
        id: 2117,
        title: "ALSS Women in Global Diplomacy and Leadership Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.alss-edu.ch/scholarships/",
        funding: "3,000 CHF direct tuition fee bursary",
        status: "Annual grant",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Spring cohort admissions)",
        fee: "150 CHF",
        tuition: "Reduces overall program tuition",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.0 GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Career statement outlining prospective contributions to female diplomatic representation and governance",
          references: "One professional reference letter"
        },
        desc: "Targeted scholarship promoting gender parity in international multilateral leadership, diplomacy, and executive public sector management."
      }
    ],
    researchers: [
      {
        id: 924,
        name: "Prof. Dr. Christian Browatzki",
        title: "President & Professor of Leadership Sciences and Business Administration",
        subject: "social-sciences",
        topics: ["Strategic Leadership", "Organizational Development", "Executive Decision Making", "Business Administration"],
        source: "https://www.alss-edu.ch/faculty/christian-browatzki/",
        recruiting: "Not verified",
        summary: "Prof. Dr. Browatzki serves as President of ALSS, publishing extensively on strategic leadership development, corporate agility, and executive coaching paradigms."
      },
      {
        id: 925,
        name: "Prof. Dr. iur. Stefan Kühteubl",
        title: "Professor of International Law and Dispute Resolution",
        subject: "social-sciences",
        topics: ["International Law", "Dispute Resolution", "Human Rights Law", "Diplomatic Protocol"],
        source: "https://www.alss-edu.ch/faculty/stefan-kuehteubl/",
        recruiting: "Not verified",
        summary: "Prof. Dr. Kühteubl is an international legal scholar specializing in cross-border dispute resolution, international humanitarian law, and diplomatic mediation."
      },
      {
        id: 926,
        name: "Dr. Andrea C. Valori",
        title: "Dean of Academic Affairs & Professor of Public Governance",
        subject: "social-sciences",
        topics: ["Public Governance", "Non-Profit Management", "Public Policy Analysis", "Multilateral Administration"],
        source: "https://www.alss-edu.ch/faculty/andrea-valori/",
        recruiting: "Not verified",
        summary: "Dr. Valori oversees academic standards at ALSS, researching administrative efficiency in public sector bodies, anti-corruption frameworks, and NGO governance."
      }
    ]
  }
];
