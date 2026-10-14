export const batch26Part1 = [
  // 1. Canada: Ambrose University (Row 1)
  {
    institution: "Ambrose University",
    shortName: "Ambrose",
    slug: "ambrose-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Calgary, Alberta, Canada",
    sourceRow: 1,
    website: "https://ambrose.edu",
    headline: "Ambrose University: Biology, Leadership & Interdisciplinary Research Guide",
    description: "Explore Ambrose University admissions, undergraduate research awards, master's programs in leadership and education, tuition fees, and faculty profiles in Calgary.",
    heroEyebrow: "Calgary, Alberta · Accredited Alberta University · Cellular Biology & Leadership",
    overview: "Ambrose University is a distinguished private liberal arts and science university in Calgary, Alberta. Recognized for intimate seminar instruction, rigorous undergraduate research apprenticeships, and graduate degrees in educational leadership, behavioural science, and interdisciplinary humanities, Ambrose pairs foundational scholarly inquiry with direct community impact.",
    admissions: {
      masters: "Four-year recognized bachelor's degree (or international equivalent) with a minimum cumulative GPA of 3.0 out of 4.0 in the final 60 credits of study.",
      phd: "Not currently offering independent doctoral degrees; collaborative research transfer and master's credentials with partner Canadian institutions.",
      language: "TOEFL iBT 88 (minimum 20 in each subscore), IELTS Academic 6.5 (minimum 6.0 in each band), or Duolingo English Test 115+.",
      proposal: "Required for research-focused graduate admissions: 1,500-word statement of intent and scholarly objectives aligned with Ambrose graduate faculty.",
      appFee: "$100 CAD non-refundable application fee for Canadian applicants ($140 CAD for international applicants).",
      documents: "Official post-secondary academic transcripts, two confidential academic reference letters, curriculum vitae, and personal statement of purpose."
    },
    tuitionText: "Graduate tuition at Ambrose University is approximately $690 CAD per 3-credit course for domestic students and $1,150 CAD per 3-credit course for international students. Multiple merit scholarships, entrance bursaries up to $5,000 CAD, and research assistantships through the Ambrose Research Fund provide substantial financial support.",
    opportunities: [
      {
        id: 1558,
        title: "Ambrose President's Graduate Leadership Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://ambrose.edu/financial-aid/scholarships-bursaries",
        funding: "$6,000 CAD annual tuition award and research mentorship stipend",
        status: "Open for 2027 intake",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual scholarship competition)",
        fee: "$100 CAD",
        tuition: "$13,800 CAD/year (before scholarship offset)",
        requirements: {
          gpa: "Minimum 3.5 undergraduate GPA on a 4.0 scale",
          ielts: "IELTS 6.5 overall or TOEFL iBT 88",
          gre: "Not required",
          papers: "Scholarly leadership portfolio and 1,000-word reflective essay",
          references: "Two academic referee letters from university professors"
        },
        desc: "Merit-based university award supporting outstanding master's students pursuing advanced graduate study in leadership, community development, and educational administration."
      },
      {
        id: 1559,
        title: "Master of Arts in Leadership and Community Development",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://ambrose.edu/programs/leadership",
        funding: "Departmental teaching assistantships ($4,500 CAD/term) and research bursaries",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Fall 2027 intake)",
        fee: "$100 CAD ($140 international)",
        tuition: "$14,200 CAD/year for domestic; $22,800 CAD/year for international",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.0 GPA in last 60 credits",
          ielts: "IELTS 6.5 (minimum 6.0 in each section)",
          gre: "Not required",
          papers: "Statement of intent outlining community transformation goals",
          references: "One academic and one professional supervisor reference"
        },
        desc: "Two-year interdisciplinary graduate program equipping leaders to design, evaluate, and direct ethical initiatives in NGOs, public institutions, and social enterprises."
      },
      {
        id: 1560,
        title: "Ambrose Cellular Biology and Genetics Research Apprenticeship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        source: "https://ambrose.edu/academics/biology",
        funding: "$7,500 CAD summer research fellowship plus lab bench consumables coverage",
        status: "Annual competition",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Summer 2027 research cycle)",
        fee: "$0 (enrolled student opportunity)",
        tuition: "Included in standard program enrollment",
        requirements: {
          gpa: "Cumulative GPA of 3.3 or higher in foundational science coursework",
          ielts: "Institutional English language proficiency",
          gre: "Not required",
          papers: "Research project abstract in molecular genetics or cellular signaling",
          references: "Endorsement from faculty biology lab director"
        },
        desc: "Hands-on laboratory fellowship where emerging researchers conduct genomic sequencing, protein crystallization, and microbial analysis under faculty mentorship."
      },
      {
        id: 1561,
        title: "Calgary Community Social Policy Practicum & Field Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://ambrose.edu/field-education",
        funding: "$3,200 CAD stipend per semester placement",
        status: "Open for 2026/2027 placement",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Winter 2027 placement)",
        fee: "$0 (program integrated)",
        tuition: "Standard tuition credit fee",
        requirements: {
          gpa: "Minimum 2.70 GPA in graduate behavioural science or leadership",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Criminal record check and vulnerable sector clearance",
          references: "Faculty field coordinator recommendation"
        },
        desc: "Structured 400-hour professional practicum placing students in municipal agencies, restorative justice boards, and non-profit organizations across Calgary."
      },
      {
        id: 1562,
        title: "Ambrose Research Fund Scholarly Fellowship in Environmental Ethics",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://ambrose.edu/research",
        funding: "$16,000 CAD per year research appointment plus conference travel grant",
        status: "Open recruitment",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Academic Year 2027/28)",
        fee: "$0",
        tuition: "Full tuition waiver provided for fellowship holder",
        requirements: {
          gpa: "Undergraduate degree in environmental studies, philosophy, or biology with GPA 3.5+",
          ielts: "IELTS 7.0 or TOEFL 94",
          gre: "Not required",
          papers: "Writing sample addressing Canadian environmental stewardship and policy",
          references: "Two academic referee letters"
        },
        desc: "Interdisciplinary research fellowship investigating ecological sustainability in the Western Canadian prairie ecosystem and resource development governance."
      },
      {
        id: 1563,
        title: "Master of Education in Educational Practice and Instructional Design",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://ambrose.edu/programs/education",
        funding: "Alberta Teacher Association bursary eligibility ($3,000 CAD)",
        status: "Rolling admissions",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Summer cohort start)",
        fee: "$100 CAD",
        tuition: "$12,600 CAD total program tuition",
        requirements: {
          gpa: "Bachelor of Education or recognized degree with GPA 3.0+",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Curriculum analysis paper and professional teaching portfolio",
          references: "Letter from school administrator or superintendent"
        },
        desc: "Advanced graduate credential designed for practicing educators seeking pedagogical mastery, curriculum innovation, and inclusive learning technologies."
      },
      {
        id: 1564,
        title: "Alberta Heritage Entrance Scholarship in Science and Humanities",
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Scholarship",
        source: "https://ambrose.edu/financial-aid",
        funding: "$5,000 CAD direct tuition award",
        status: "Annual competition",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Fall 2027 entry)",
        fee: "$100 CAD",
        tuition: "$14,000 CAD/year (before scholarship)",
        requirements: {
          gpa: "Grade 12 or post-secondary transfer average of 85% / 3.7 GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Completed Ambrose scholarship application form",
          references: "High school principal or academic dean reference"
        },
        desc: "Prestigious entrance scholarship recognizing high-achieving scholars entering interdisciplinary computational, mathematics, and natural science programs at Ambrose."
      }
    ],
    researchers: [
      {
        id: 687,
        name: "Dr. Matthew Morris",
        title: "Associate Professor of Biology & Chair of Science",
        subject: "biology",
        topics: ["Fish Evolutionary Ecology", "Adaptive Phenotypic Plasticity", "Conservation Genetics", "Freshwater Ecosystems"],
        source: "https://ambrose.edu/faculty/matthew-morris",
        recruiting: "Not verified",
        summary: "Dr. Morris investigates phenotypic plasticity and rapid adaptation in Canadian freshwater fishes, utilizing morphometric and molecular ecology tools to assess climatic impacts."
      },
      {
        id: 688,
        name: "Dr. Rita Dirks",
        title: "Professor of English & Interdisciplinary Humanities",
        subject: "social-sciences",
        topics: ["Modernist Literature", "Memory Studies", "Cultural Trauma", "Diaspora Studies"],
        source: "https://ambrose.edu/faculty/rita-dirks",
        recruiting: "Not verified",
        summary: "Dr. Dirks explores narrative representations of memory, cultural trauma, and displacement across European and North American 20th-century literature and diaspora communities."
      },
      {
        id: 689,
        name: "Dr. Colin Toffelmire",
        title: "Associate Professor of Biblical Studies & Dean of Arts and Science",
        subject: "social-sciences",
        topics: ["Prophetic Texts", "Ecotheology", "Ancient Near Eastern Rhetoric", "Social Ethics"],
        source: "https://ambrose.edu/faculty/colin-toffelmire",
        recruiting: "Not verified",
        summary: "Dr. Toffelmire conducts research in Hebrew literature, hermeneutical frameworks, and contemporary ecological ethics, examining biblical concepts of land stewardship."
      }
    ]
  },

  // 2. Australia: CQUniversity (Row 158)
  {
    institution: "CQUniversity",
    shortName: "CQUniversity",
    slug: "cquniversity",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Rockhampton, Brisbane & Regional Queensland, Australia",
    sourceRow: 158,
    website: "https://www.cqu.edu.au",
    headline: "CQUniversity: Engineering, Health Sciences & RTP Research Fellowships",
    description: "Discover CQUniversity admissions, Australian Government Research Training Program (RTP) scholarships, doctoral programs, coastal ecology, and faculty research.",
    heroEyebrow: "Rockhampton & Regional Queensland · Top 500 World University · Precision Agriculture & Rail",
    overview: "CQUniversity (Central Queensland University) is one of Australia's most dynamic regional research universities, operating campuses across Queensland and nationwide. Renowned for world-leading research in precision agriculture, railway engineering, clean energy systems, coastal marine management, and rural health, CQUniversity consistently achieves top national employment outcomes.",
    admissions: {
      masters: "Completed bachelor's degree from an Australian university or recognized international equivalent with a minimum GPA of 4.5 on a 7-point scale.",
      phd: "First-class or second-class division A honours degree (H1 or H2A) or research master's with demonstrated peer-reviewed publication outputs.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all bands), PTE Academic 58+, or TOEFL iBT 79 (writing minimum 21). Health degrees require 7.0 overall.",
      proposal: "Required for PhD and Master by Research: 2,500-word research proposal including methodology, state of research, and formal CQUniversity supervisor support.",
      appFee: "$0 (No application fee when applying directly via the CQUniversity online portal).",
      documents: "Certified academic transcripts, degree awards, English test certificate, research proposal, curriculum vitae, and two referee reports."
    },
    tuitionText: "Tuition fees for international students range from AUD $28,000 to $36,000 per year depending on the discipline. The Australian Government Research Training Program (RTP) provides full tuition fee offsets and annual living stipends of AUD $33,500 for domestic and international PhD candidates.",
    opportunities: [
      {
        id: 1565,
        title: "Australian Government Research Training Program (RTP) Stipend at CQU",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://www.cqu.edu.au/research/research-higher-degrees/scholarships",
        funding: "AUD $33,500/year tax-free stipend, full tuition waiver, and overseas health cover (OSHC)",
        status: "Annual selection",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 (Major round for 2027 intake)",
        fee: "AUD $0",
        tuition: "100% waived under Commonwealth RTP scheme",
        requirements: {
          gpa: "First-Class Honours (H1) or research master's degree",
          ielts: "IELTS 6.5 overall with 6.0 in all subtests",
          gre: "Not required",
          papers: "Substantial peer-reviewed conference or journal publication history",
          references: "Two academic referee letters assessing research potential"
        },
        desc: "Prestigious Australian Commonwealth scholarship providing full funding and living allowances for international doctoral candidates conducting advanced research at CQUniversity."
      },
      {
        id: 1566,
        title: "Doctor of Philosophy (PhD) in Rail and Heavy Haul Transport Engineering",
        subject: "engineering",
        subjects: ["engineering"],
        type: "PhD",
        source: "https://www.cqu.edu.au/research/research-organisations/centres/centre-for-railway-engineering",
        funding: "Centre for Railway Engineering (CRE) Industry Fellowship (AUD $35,000/year)",
        status: "Open for 2027 entry",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (For Session 1, 2027)",
        fee: "AUD $0",
        tuition: "AUD $34,800/year (fully covered by CRE fellowship for eligible candidates)",
        requirements: {
          gpa: "Honours degree in Mechanical, Civil, or Electrical Engineering",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis or publication in wheel-rail contact mechanics or dynamics",
          references: "Academic and industrial engineering referee letters"
        },
        desc: "Doctoral research conducted within Australia's premier railway research center, investigating locomotive train simulation, track structural health, and predictive maintenance."
      },
      {
        id: 1567,
        title: "Master of Sustainable Energy Engineering & Grid Modernization",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://www.cqu.edu.au/courses/master-of-engineering",
        funding: "CQU International Student Scholarship (25% fee discount)",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Term 1 intake)",
        fee: "AUD $0",
        tuition: "AUD $32,160/year (AUD $24,120 after scholarship)",
        requirements: {
          gpa: "Four-year Bachelor of Engineering (Washington Accord accredited)",
          ielts: "IELTS 6.5 with no band below 6.0",
          gre: "Not required",
          papers: "Undergraduate capstone engineering design report",
          references: "Academic reference confirming engineering fundamentals"
        },
        desc: "Engineers Australia-accredited professional master's degree focusing on microgrid integration, renewable solar and wind systems, and hydrogen energy distribution."
      },
      {
        id: 1568,
        title: "Precision Agriculture & Livestock Remote Sensing Research Assistantship",
        subject: "environment",
        subjects: ["environment", "computer-science"],
        type: "Research",
        source: "https://www.cqu.edu.au/research/research-organisations/institutes/institute-for-future-farming-systems",
        funding: "AUD $28,500/year stipend funded by Institute for Future Farming Systems",
        status: "Open recruitment",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Mid-year intake review)",
        fee: "AUD $0",
        tuition: "Tuition waiver included",
        requirements: {
          gpa: "Bachelor or Master's in Agricultural Science, Geoinformatics, or Computer Science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Demonstrated skills in drone multispectral imaging or sensor telemetry",
          references: "Two academic referee letters"
        },
        desc: "Applied agricultural research analyzing IoT ear-tag telemetry, automated cattle weighing, and satellite biomass indexing across Queensland cattle properties."
      },
      {
        id: 1569,
        title: "Gladstone Hydrogen Ecosystem & Clean Energy Industrial Practicum",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Internship",
        source: "https://www.cqu.edu.au/research/hydrogen",
        funding: "AUD $1,200/month industry living allowance",
        status: "Open for 2027 cohorts",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (For Term 1 2027 placement)",
        fee: "AUD $0",
        tuition: "Course-enrolled credit unit",
        requirements: {
          gpa: "Enrolled in CQU Master of Engineering with credit average (GPA 5.0+)",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "White Card safety certification and engineering CV",
          references: "CQU engineering placement director recommendation"
        },
        desc: "12-week industrial placement embedded in Gladstone's emerging green hydrogen and ammonia production hub, studying electrolyzer performance and process safety."
      },
      {
        id: 1570,
        title: "CQU Postdoctoral Fellowship in Coastal Marine Ecosystem Restoration",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Fellowship/Job",
        source: "https://www.cqu.edu.au/research/research-organisations/centres/coastal-marine-ecosystems-research-centre",
        funding: "AUD $95,400 to $104,200 per annum salary plus 17% superannuation",
        status: "Open recruitment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "AUD $0",
        tuition: "Employment position (zero tuition)",
        requirements: {
          gpa: "Completed PhD in Marine Biology, Estuarine Ecology, or Oceanography",
          ielts: "Native or professional English proficiency",
          gre: "Not required",
          papers: "Track record of peer-reviewed publications on seagrass or mangrove restoration",
          references: "Three international academic referees"
        },
        desc: "Full-time research appointment at the Coastal Marine Ecosystems Research Centre (CMERC) in Gladstone, restoring Great Barrier Reef coastal nurseries and blue carbon habitats."
      },
      {
        id: 1571,
        title: "Master of Public Health in Rural and Indigenous Health Services",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Master's",
        source: "https://www.cqu.edu.au/courses/master-of-public-health",
        funding: "Commonwealth Supported Places (CSP) for domestic; CQU Global Merit for international",
        status: "Open for applications",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027 (Term 1 entry)",
        fee: "AUD $0",
        tuition: "AUD $27,840/year international",
        requirements: {
          gpa: "Undergraduate degree in health sciences, nursing, or behavioural science",
          ielts: "IELTS 6.5 (minimum 6.0 in each subtest)",
          gre: "Not required",
          papers: "Professional résumé detailing clinical or community health engagement",
          references: "Two professional reference letters"
        },
        desc: "Postgraduate degree focusing on epidemiological monitoring, health equity, and healthcare delivery models tailored for regional, rural, and First Nations communities."
      }
    ],
    researchers: [
      {
        id: 690,
        name: "Dr. Maksym Spiryagin",
        title: "Professor of Mechanical Engineering & Director of Centre for Railway Engineering",
        subject: "engineering",
        topics: ["Railway Dynamics", "Wheel-Rail Contact", "Train Locomotive Simulation", "Heavy Haul Operations"],
        source: "https://www.cqu.edu.au/research/research-organisations/centres/centre-for-railway-engineering",
        recruiting: "Not verified",
        summary: "Dr. Spiryagin is a world-recognized scholar in rail vehicle systems dynamics, developing simulation software platforms used by global heavy-haul and passenger transit corporations."
      },
      {
        id: 691,
        name: "Dr. Emma Jackson",
        title: "Associate Professor of Coastal Marine Ecology & Director of CMERC",
        subject: "environment",
        topics: ["Seagrass Restoration", "Coastal Habitat Mapping", "Blue Carbon", "Marine Nursery Dynamics"],
        source: "https://www.cqu.edu.au/research/research-organisations/centres/coastal-marine-ecosystems-research-centre",
        recruiting: "Not verified",
        summary: "Dr. Jackson leads large-scale marine habitat restoration programs in central Queensland, pioneering drone multispectral mapping of Great Barrier Reef inshore seagrass meadows."
      },
      {
        id: 692,
        name: "Dr. David Swain",
        title: "Professor of Precision Livestock & Agriculture",
        subject: "environment",
        topics: ["GPS Livestock Tracking", "Animal Behavior Telemetry", "Automated Mustering", "Sensor Systems"],
        source: "https://www.cqu.edu.au/research/research-organisations/institutes/institute-for-future-farming-systems",
        recruiting: "Not verified",
        summary: "Dr. Swain designs smart agricultural technologies that integrate satellite remote sensing, accelerometer ear-tags, and spatial analytics to monitor extensive grazing herds."
      }
    ]
  },

  // 3. Germany: Esslingen University of Applied Sciences (Row 253)
  {
    institution: "Esslingen University of Applied Sciences",
    shortName: "Hochschule Esslingen",
    slug: "esslingen-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Esslingen am Neckar & Göppingen, Baden-Württemberg, Germany",
    sourceRow: 253,
    website: "https://www.hs-esslingen.de",
    headline: "Hochschule Esslingen: Automotive Systems, Automation & Industry 4.0 Guide",
    description: "Explore Esslingen University of Applied Sciences admissions, English-taught Master of Engineering (MEng) degrees, DAAD scholarships, tuition fees, and engineering laboratories.",
    heroEyebrow: "Stuttgart Region, Baden-Württemberg · Premier Engineering UAS · Automotive Powerhouse",
    overview: "Hochschule Esslingen (Esslingen University of Applied Sciences) is one of Germany's most highly ranked public universities of applied sciences, situated in the heart of Europe's premier automotive and industrial engineering region (Stuttgart area). Partnering directly with Daimler, Porsche, Bosch, and Festo, Esslingen delivers world-class practical engineering and applied research.",
    admissions: {
      masters: "Four-year Bachelor of Engineering or Bachelor of Science degree in mechanical, automotive, electrical, or mechatronic engineering with minimum German grade of 2.5 (or international equivalent / GPA 3.0+).",
      phd: "Doctoral degrees awarded collaboratively through the Baden-Württemberg Doctoral Association (Promotionsverband BW) and partner research universities.",
      language: "TOEFL iBT 79+ or IELTS Academic 6.5; German A1/A2 required during first year of study for daily integration and corporate internships.",
      proposal: "Required for cooperative doctoral candidates: 3,000-word proposal aligned with an accredited Esslingen professor and university co-supervisor.",
      appFee: "€0 (Central university portal) or €75 via uni-assist for international credential evaluation.",
      documents: "Bachelor's diploma, academic transcript of records, APS certificate (for China/India/Vietnam), motivation letter, and two academic recommendation letters."
    },
    tuitionText: "Tuition is legally set by the state of Baden-Württemberg at €1,500 per semester for non-EU/EEA international students, plus an administrative semester fee of approximately €180. EU/EEA citizens pay zero tuition. Generous DAAD STIBET graduation grants and industrial company thesis stipends provide substantial support.",
    opportunities: [
      {
        id: 1572,
        title: "DAAD STIBET International Academic Graduation Grant at Esslingen",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Scholarship",
        source: "https://www.hs-esslingen.de/en/international/incoming-students/financial-matters/",
        funding: "€850/month living stipend for up to six months during thesis completion",
        status: "Bi-annual competition",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Winter semester round)",
        fee: "€0",
        tuition: "€1,500/semester for non-EU (zero for EU)",
        requirements: {
          gpa: "German academic grade of 2.3 or better in engineering coursework",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Approved master's thesis topic registration with corporate partner",
          references: "Evaluation report from supervising professor"
        },
        desc: "German Academic Exchange Service (DAAD) funded scholarship supporting international master's students during their final experimental or industrial master's thesis."
      },
      {
        id: 1573,
        title: "Master of Engineering (MEng) in Automotive Systems & Autonomous Driving",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.hs-esslingen.de/en/automotive-systems/",
        funding: "Industry master's thesis corporate sponsorships (€900–€1,200/month)",
        status: "Applications open for 2027",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (For Fall 2027 intake)",
        fee: "€75 (uni-assist)",
        tuition: "€1,500/semester for non-EU; €180 administrative fee for EU",
        requirements: {
          gpa: "Bachelor's degree in Automotive, Mechanical, or Electrical Engineering (min. 2.5 German scale)",
          ielts: "IELTS 6.5 or TOEFL 79+",
          gre: "Recommended for non-EU graduates",
          papers: "Statement of purpose detailing autonomous systems or vehicle dynamics experience",
          references: "Two academic recommendation letters"
        },
        desc: "Flagship 3-semester international graduate program taught in English, covering ADAS perception sensors, electric powertrain architecture, and vehicle dynamics."
      },
      {
        id: 1574,
        title: "Cooperative Doctoral Candidacy (PhD) in Industrial Robotics & Smart Automation",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        source: "https://www.hs-esslingen.de/en/research/cooperative-doctorate/",
        funding: "TV-L E13 research associate salary (€50,000–€55,000/year gross)",
        status: "Open vacancy",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (For Spring 2027 start)",
        fee: "€0",
        tuition: "€0 (Salaried research staff position)",
        requirements: {
          gpa: "Master of Science/Engineering with distinction (grade 2.0 or better)",
          ielts: "Fluent English (C1) and German (B2 recommended)",
          gre: "Not required",
          papers: "Master's thesis in robotics, control algorithms, or reinforcement learning",
          references: "Two academic referee letters from university professors"
        },
        desc: "Doctoral research position conducted through the Baden-Württemberg Doctoral Center, developing collaborative cobots and computer vision for high-precision manufacturing."
      },
      {
        id: 1575,
        title: "Hydrogen Fuel Cell & Battery Systems Laboratory Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Research",
        source: "https://www.hs-esslingen.de/en/research/institutes/",
        funding: "€1,100/month research assistantship contract (HiWi/WiMi)",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Standard semester fee",
        requirements: {
          gpa: "Enrolled student in engineering master's degree",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Laboratory report in electrochemical cells or thermal management",
          references: "Faculty laboratory head endorsement"
        },
        desc: "Applied research investigating degradation mechanisms in proton-exchange membrane (PEM) fuel cells and lithium-ion battery packs under cold climate operating cycles."
      },
      {
        id: 1576,
        title: "Stuttgart Automotive Cluster Mandatory Industrial Internship",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        source: "https://www.hs-esslingen.de/en/graduate-school/",
        funding: "€1,200 to €1,600/month paid corporate internship contract",
        status: "Ongoing placement cycle",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Summer semester placement)",
        fee: "€0",
        tuition: "Included in semester registration",
        requirements: {
          gpa: "Successful completion of first-year MEng coursework",
          ielts: "IELTS 6.5 and German B1 minimum",
          gre: "Not required",
          papers: "Corporate CV and technical skills portfolio",
          references: "Esslingen Career Center validation"
        },
        desc: "Mandatory six-month engineering placement embedded within Tier-1 automotive and industrial corporations such as Mercedes-Benz, Porsche, Bosch, or Mahle."
      },
      {
        id: 1577,
        title: "Postdoctoral Research Fellowship in Connected Mobility & Cyber-Physical Systems",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship/Job",
        source: "https://www.hs-esslingen.de/en/research/",
        funding: "TV-L E14 public service salary (€58,000–€64,000/year gross)",
        status: "Recruiting for 2027",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€0",
        tuition: "Full salary position",
        requirements: {
          gpa: "Completed PhD in Computer Science, Embedded Systems, or Telematics",
          ielts: "English C1 level",
          gre: "Not required",
          papers: "3+ peer-reviewed journal articles on V2X communication or edge computing",
          references: "Two academic referee letters"
        },
        desc: "Full-time postdoctoral appointment developing secure 5G vehicular communication protocols and real-time edge computing frameworks for cooperative automated vehicles."
      },
      {
        id: 1578,
        title: "Master of Engineering in Design and Development in Automotive and Mechanical Engineering",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Master's",
        source: "https://www.hs-esslingen.de/en/design-and-development/",
        funding: "Graduate School tuition waivers and industry project grants",
        status: "Open for applications",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall 2027 start)",
        fee: "€75 (uni-assist)",
        tuition: "€1,500/semester for non-EU; €180 for EU",
        requirements: {
          gpa: "BSc/BEng in Mechanical or Materials Engineering (min. 2.5 German grade)",
          ielts: "IELTS 6.5 or TOEFL 79",
          gre: "Not required",
          papers: "CAD simulation sample and engineering project dossier",
          references: "Two letters of recommendation"
        },
        desc: "Accredited master's program emphasizing lightweight structural design, finite element analysis (FEA), composite materials, and computer-aided engineering (CAE)."
      }
    ],
    researchers: [
      {
        id: 693,
        name: "Dr. Sascha Röck",
        title: "Professor of Automation & Virtual Commissioning & Industry 4.0",
        subject: "engineering",
        topics: ["Digital Twins", "Virtual Commissioning", "Industrial IoT", "Mechatronics Simulation"],
        source: "https://www.hs-esslingen.de/forschung/institute/iaea/",
        recruiting: "Not verified",
        summary: "Dr. Röck leads the Virtual Automation Lab at Esslingen, pioneering digital twin architectures and real-time hardware-in-the-loop validation for intelligent factories."
      },
      {
        id: 694,
        name: "Dr. Ferdinand Panik",
        title: "Honorary Professor of Fuel Cell Vehicles & Clean Propulsion",
        subject: "engineering",
        topics: ["Fuel Cell Vehicles", "Hydrogen Storage", "Zero-Emission Powertrains", "Automotive Systems"],
        source: "https://www.hs-esslingen.de/fakultaeten/angewandte-naturwissenschaften-energie-und-gebaeudetechnik/",
        recruiting: "Not verified",
        summary: "Dr. Panik, formerly head of Daimler's fuel cell project NECAR, directs advanced research initiatives at Esslingen evaluating fuel cell efficiency and hydrogen vehicle infrastructure."
      },
      {
        id: 695,
        name: "Dr. Richard Koch",
        title: "Professor of Automotive Electronics & Autonomous Systems",
        subject: "computer-science",
        topics: ["Automotive Radar", "Sensor Fusion", "Computer Vision", "CAN-Bus Security"],
        source: "https://www.hs-esslingen.de/fakultaeten/mobilitaet-und-technik/",
        recruiting: "Not verified",
        summary: "Dr. Koch focuses on sensor fusion algorithms, high-resolution radar point clouds, and secure in-vehicle network protocols for Level 4 autonomous driving platforms."
      }
    ]
  },

  // 4. Italy: University of Camerino (Row 523)
  {
    institution: "University of Camerino",
    shortName: "UNICAM",
    slug: "university-of-camerino",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Camerino, Marche, Italy",
    sourceRow: 523,
    website: "https://www.unicam.it",
    headline: "University of Camerino: Pharmacy, Physics & ERDIS Scholarship Guide",
    description: "Explore University of Camerino admissions, fully funded doctoral scholarships, English-taught master's degrees in chemistry and computer science, fees, and faculty research.",
    heroEyebrow: "Camerino, Marche · Founded 1336 · Excellence in Chemistry, Pharmacy & Physics",
    overview: "The University of Camerino (Università degli Studi di Camerino - UNICAM), founded in 1336 by papal edict, is one of the world's oldest universities. Ranked consistently as Italy's #1 university for small-scale institutions by CENSIS, UNICAM boasts an ultra-modern International School of Advanced Studies, cutting-edge nanoscience labs, and a vibrant multicultural campus.",
    admissions: {
      masters: "Three-year Bachelor's degree (Laurea) or recognized international undergraduate degree evaluated via Universitaly pre-enrolment.",
      phd: "Master of Science (Laurea Magistrale) with competitive examination including academic CV, 3,000-word research proposal, and oral interview (via videoconference).",
      language: "B2 English certificate (IELTS Academic 6.0+, TOEFL iBT 78+, or Cambridge B2 First); Italian language proficiency not required for English-taught master's or PhDs.",
      proposal: "Doctoral applicants must submit an original research project adhering to the UNICAM International School of Advanced Studies (SAS) format.",
      appFee: "€10 to €40 pre-admission evaluation fee.",
      documents: "Bachelor's diploma, transcript of records, CIMEA Statement of Comparability or Declaration of Value (DoV), passport copy, and motivation letter."
    },
    tuitionText: "Tuition fees are strictly income-based (ISEE parificato), ranging from €156 regional tax to a maximum of approximately €2,000 per year. Regional ERDIS Marche scholarships guarantee 100% tuition waivers, free university accommodation, daily campus cafeteria meals, and cash stipends of up to €7,200 per year.",
    opportunities: [
      {
        id: 1579,
        title: "Marche Regional ERDIS Full Study Grant & University Housing Award",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Scholarship",
        source: "https://erdis.it",
        funding: "100% tuition waiver, free residence hall accommodation, free meals, and up to €7,200/year cash grant",
        status: "Annual competition",
        deadline: "2026-11-05",
        deadlineText: "November 5, 2026 (ERDIS annual deadline)",
        fee: "€0",
        tuition: "€0 (regional tax waived for ERDIS recipients)",
        requirements: {
          gpa: "Undergraduate degree with 70%+ academic average; family ISEE parificato < €26,000",
          ielts: "English B2 level (IELTS 6.0 or equivalent)",
          gre: "Not required",
          papers: "Foreign family income and property documents translated and legalized",
          references: "Academic admission confirmation from UNICAM"
        },
        desc: "Complete regional welfare scholarship providing international students in Camerino with comprehensive tuition coverage, dormitory lodging, and living allowances."
      },
      {
        id: 1580,
        title: "Doctor of Philosophy (PhD) in Chemical and Pharmaceutical Sciences",
        subject: "chemistry",
        subjects: ["chemistry"],
        type: "PhD",
        source: "https://isas.unicam.it/courses/chemical-and-pharmaceutical-sciences-and-biotechnology",
        funding: "Italian Ministry (MUR) full doctoral fellowship (€16,243/year net stipend + 50% increase for research abroad)",
        status: "Open for 40th/41st Cycle",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "€30",
        tuition: "€0 (100% covered by doctoral grant)",
        requirements: {
          gpa: "Master's degree in Chemistry, Pharmacy, or Chemical Engineering",
          ielts: "IELTS 6.0+ or English medium of instruction certificate",
          gre: "Not required",
          papers: "Original 3,000-word doctoral research project in synthetic or medicinal chemistry",
          references: "Two academic recommendation letters"
        },
        desc: "Three-year doctoral program within UNICAM's International School of Advanced Studies, investigating green catalytic processes, targeted drug delivery, and pharmaceutical synthesis."
      },
      {
        id: 1581,
        title: "Master of Science in Chemistry and Advanced Chemical Methodologies",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        type: "Master's",
        source: "https://www.unicam.it/en/courses/chemistry-and-advanced-chemical-methodologies",
        funding: "UNICAM International Welcome Scholarship (€4,000 award)",
        status: "Applications open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Pre-enrolment deadline)",
        fee: "€0",
        tuition: "€156 to €1,850/year (means-tested via ISEE)",
        requirements: {
          gpa: "Bachelor's degree in Chemistry or related field with at least 60 ECTS in chemistry",
          ielts: "IELTS 6.0 or B2 CEFR certificate",
          gre: "Not required",
          papers: "Undergraduate transcript and chemistry laboratory logbook",
          references: "Two academic referee letters"
        },
        desc: "Two-year English-taught master's degree accredited with the Euromaster Chemistry Quality Label, specializing in analytical spectroscopy and supramolecular chemistry."
      },
      {
        id: 1582,
        title: "Quantum Physics & Nanoscience Laboratory Research Assistantship",
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        source: "https://fisica.unicam.it",
        funding: "€10,800/year research contract (Borsa di Ricerca)",
        status: "Open recruitment",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in MSc Physics or Computational Mathematics",
          ielts: "English B2 level",
          gre: "Not required",
          papers: "Research abstract in quantum optics or superconducting circuits",
          references: "Endorsement from UNICAM Physics section chair"
        },
        desc: "Research assistantship working on quantum entanglement, macroscopic quantum resonators, and cryogenic optomechanics in collaboration with European quantum hubs."
      },
      {
        id: 1583,
        title: "Marche Pharmaceutical Industrial Internship & Quality Control Practicum",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        source: "https://www.unicam.it/stage-tirocini",
        funding: "€800/month industry internship stipend",
        status: "Open for 2027 placements",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring cohort)",
        fee: "€0",
        tuition: "Standard tuition coverage",
        requirements: {
          gpa: "Completion of 45 ECTS in graduate chemistry or pharmaceutical studies",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Good Laboratory Practice (GLP) and safety certification",
          references: "UNICAM stage office approval"
        },
        desc: "Six-month clinical and analytical quality control placement embedded in Marche's pharmaceutical cluster, performing HPLC, mass spectrometry, and validation."
      },
      {
        id: 1584,
        title: "Postdoctoral Fellowship in Computational Structural Biology & Drug Design",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Fellowship/Job",
        source: "https://isas.unicam.it",
        funding: "€24,500/year net salary (Assegno di Ricerca) plus travel allowance",
        status: "Open vacancy",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "€0",
        tuition: "Employment position",
        requirements: {
          gpa: "PhD in Bioinformatics, Molecular Biology, or Computational Chemistry",
          ielts: "C1 level English",
          gre: "Not required",
          papers: "Published papers on molecular dynamics simulations or protein-ligand docking",
          references: "Three academic referee letters"
        },
        desc: "Two-year postdoctoral appointment applying machine learning and molecular mechanics simulations to identify novel allosteric inhibitors for multi-drug resistant pathogens."
      },
      {
        id: 1585,
        title: "Master of Science in Computer Science: Software Engineering & Cybersecurity",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://computerscience.unicam.it",
        funding: "UNICAM Merit Fee Waiver (covers 100% of second-year tuition)",
        status: "Applications open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027 (Non-EU pre-enrolment)",
        fee: "€0",
        tuition: "€156 to €1,850/year (based on ISEE)",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or Mathematics",
          ielts: "IELTS 6.0 or TOEFL 78",
          gre: "Not required",
          papers: "Software development project portfolio (GitHub profile)",
          references: "Two academic referee letters"
        },
        desc: "English-taught master's degree focusing on formal methods, secure distributed systems, cloud microservices, and mobile application engineering."
      }
    ],
    researchers: [
      {
        id: 696,
        name: "Dr. David Vitali",
        title: "Professor of Theoretical Physics & Head of Physics Division",
        subject: "physics",
        topics: ["Quantum Optomechanics", "Quantum Information", "Macroscopic Entanglement", "Quantum Sensors"],
        source: "https://fisica.unicam.it/people/vitali",
        recruiting: "Not verified",
        summary: "Dr. Vitali is an internationally acclaimed quantum physicist who co-pioneered optomechanical entanglement, leading European Union Horizon projects in quantum technologies."
      },
      {
        id: 697,
        name: "Dr. Roberto Ballini",
        title: "Full Professor of Organic Chemistry & Former Rector",
        subject: "chemistry",
        topics: ["Green Organic Synthesis", "Nitro Compounds", "Heterocyclic Chemistry", "Catalytic Domino Reactions"],
        source: "https://www.unicam.it/docenti/roberto-ballini",
        recruiting: "Not verified",
        summary: "Dr. Ballini is a renowned organic chemist who has developed pioneering eco-friendly synthetic methodologies utilizing nitroalkanes in solvent-free and heterogeneous catalytic reactions."
      },
      {
        id: 698,
        name: "Dr. Emanuela Frigerio",
        title: "Associate Professor of Computer Science & Intelligent Systems",
        subject: "computer-science",
        topics: ["Business Process Management", "Formal Verification", "Blockchain Architectures", "IoT Security"],
        source: "https://computerscience.unicam.it/people",
        recruiting: "Not verified",
        summary: "Dr. Frigerio researches formal methods for distributed workflows, smart contracts, and decentralized architectures ensuring verified execution in mission-critical applications."
      }
    ]
  },

  // 5. USA: Amherst College (Row 566)
  {
    institution: "Amherst College",
    shortName: "Amherst",
    slug: "amherst-college",
    countryId: "usa",
    countryLabel: "USA",
    location: "Amherst, Massachusetts, USA",
    sourceRow: 566,
    website: "https://www.amherst.edu",
    headline: "Amherst College: Physics, Neuroscience & Need-Blind Full Aid Guide",
    description: "Discover Amherst College admissions, 100% need-blind full financial aid packages, undergraduate research fellowships, STEM laboratories, and prominent faculty in Massachusetts.",
    heroEyebrow: "Amherst, Massachusetts · Top 2 US Liberal Arts College · 100% Need-Blind Global Aid",
    overview: "Amherst College, established in 1821 in Western Massachusetts, is widely recognized as one of the very premier undergraduate institutions in the world. Operating an open curriculum with zero distribution requirements, Amherst combines unmatched laboratory access with one of only a handful of genuinely need-blind admission policies globally for both domestic and international students.",
    admissions: {
      masters: "Amherst is an exclusively undergraduate liberal arts college; graduate research conducted through Five College Consortium partnerships (UMass Amherst, Smith, Mount Holyoke, Hampshire).",
      phd: "Undergraduate degree programs prepare students for fully funded doctoral admission at top-tier worldwide universities (70%+ alumni complete graduate degrees).",
      language: "TOEFL iBT 100+, IELTS Academic 7.5+, or Duolingo English Test 130+; waivers available for students whose primary secondary school instruction was in English.",
      proposal: "Senior honors thesis proposal required in major department during junior year (comprehensive 20–40 page research project).",
      appFee: "$75 USD application fee (automatically waived for all students with financial need).",
      documents: "Common Application or Coalition Application, secondary school transcript, School Report, two academic teacher recommendations, and counselor recommendation."
    },
    tuitionText: "Tuition is $66,650 USD per year, with total cost of attendance approximately $85,000 USD. Amherst is 100% need-blind for all students (domestic and international) and meets 100% of calculated financial need with loan-free aid packages (average scholarship award exceeds $64,000 USD/year).",
    opportunities: [
      {
        id: 1586,
        title: "Amherst College Need-Blind Full Financial Aid Package",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        source: "https://www.amherst.edu/admission/financial_aid",
        funding: "100% demonstrated financial need met without loans (covers up to $85,000/year: tuition, housing, dining, travel)",
        status: "Annual competition",
        deadline: "2027-01-05",
        deadlineText: "January 5, 2027 (Regular Decision deadline)",
        fee: "$75 USD (fee waiver available)",
        tuition: "Covered by grant aid for all eligible students",
        requirements: {
          gpa: "Top 5% of secondary school graduating class (rigorous curriculum)",
          ielts: "IELTS 7.5+ or TOEFL 100+",
          gre: "Not applicable (SAT/ACT optional)",
          papers: "Common App personal statement and Amherst writing supplement",
          references: "Two academic teacher recommendations and counselor report"
        },
        desc: "Revolutionary loan-free financial aid guarantee meeting 100% of calculated financial need for all admitted students regardless of citizenship or family income."
      },
      {
        id: 1587,
        title: "Bachelor of Arts in Physics & Quantum Condensed Matter Research Route",
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        source: "https://www.amherst.edu/academiclife/departments/physics",
        funding: "Full institutional need-based grant aid plus paid lab research positions ($16/hr)",
        status: "Open for applications",
        deadline: "2027-01-05",
        deadlineText: "January 5, 2027",
        fee: "$75 USD (waived on request)",
        tuition: "Need-based financial aid applies to 100% of cost",
        requirements: {
          gpa: "Rigorous high school preparation in calculus, physics, and chemistry",
          ielts: "IELTS 7.5 or TOEFL 100+",
          gre: "Not applicable",
          papers: "Secondary school academic transcript and personal essay",
          references: "Two teacher evaluations in STEM disciplines"
        },
        desc: "World-class physics major featuring atomic, molecular, and optical (AMO) physics labs, ultracold Bose-Einstein condensation facilities, and direct faculty mentorship."
      },
      {
        id: 1588,
        title: "SURF (Summer Undergraduate Research Fellowship) in Molecular Neuroscience",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        source: "https://www.amherst.edu/academiclife/departments/neuroscience",
        funding: "$5,500 USD summer stipend plus on-campus housing and research budget",
        status: "Annual selection",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027 (Summer 2027 cycle)",
        fee: "$0",
        tuition: "Full grant funding",
        requirements: {
          gpa: "Enrolled Amherst undergraduate with coursework in cellular biology or neuroscience",
          ielts: "Campus enrolled student",
          gre: "Not required",
          papers: "Two-page research proposal on neural circuits or synaptic plasticity",
          references: "Amherst faculty lab sponsor endorsement"
        },
        desc: "Ten-week immersive summer research fellowship investigating synaptic transmission, confocal laser scanning microscopy, and neurodegenerative disease pathways."
      },
      {
        id: 1589,
        title: "Amherst Center for Community Engagement Urban Education Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.amherst.edu/cce",
        funding: "$4,500 USD fellowship stipend funded by the Center for Community Engagement",
        status: "Open recruitment",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$0",
        tuition: "Program scholarship supported",
        requirements: {
          gpa: "Minimum 3.0 academic standing",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Reflective essay on educational equity and systemic community access",
          references: "One faculty reference"
        },
        desc: "Intensive summer educational leadership practicum partnering students with Holyoke and Springfield public school districts to design innovative STEM curricula."
      },
      {
        id: 1590,
        title: "Postdoctoral Teaching and Research Fellowship in Computer Systems & Architecture",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Fellowship/Job",
        source: "https://www.amherst.edu/academiclife/departments/computer_science",
        funding: "$72,000 USD annual salary plus full benefits and $5,000 research travel allowance",
        status: "Open recruitment",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (For Fall 2027 appointment)",
        fee: "$0",
        tuition: "Full salary position",
        requirements: {
          gpa: "PhD in Computer Science or Computer Engineering",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Demonstrated teaching excellence and publication record in systems or security",
          references: "Three academic reference letters"
        },
        desc: "Two-year visiting postdoctoral fellowship offering balanced undergraduate seminar teaching alongside independent research in computer architecture, compilers, or networks."
      },
      {
        id: 1591,
        title: "Gregory S. Call Undergraduate Research Grant in Artificial Intelligence",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        source: "https://www.amherst.edu/academiclife/support/research/call_fund",
        funding: "$4,800 USD project grant for computational equipment and student stipend",
        status: "Semester competitions",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026 (Spring 2027 awards)",
        fee: "$0",
        tuition: "Direct student award",
        requirements: {
          gpa: "Declared major in Computer Science or Mathematics",
          ielts: "Enrolled student",
          gre: "Not required",
          papers: "Project proposal on neural network explainability or combinatorial algorithms",
          references: "Faculty research advisor endorsement"
        },
        desc: "Endowed undergraduate research award enabling students to conduct original computational experiments, access GPU clusters, and present findings at major conferences."
      },
      {
        id: 1592,
        title: "Five College Consortium Advanced Graduate Research Residency",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Fellowship/Job",
        source: "https://www.fivecolleges.edu",
        funding: "Reciprocal library access, lab instrumentation rights, and $3,500 travel award",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$0",
        tuition: "Consortium reciprocal agreement",
        requirements: {
          gpa: "Active enrollment in Amherst College or Five College graduate partner program",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Cross-institutional collaborative project plan",
          references: "Dean of Faculty approval"
        },
        desc: "Unique academic residency providing students and fellows access to research seminars, specialized archives, and faculty across Amherst, UMass, Smith, Mount Holyoke, and Hampshire."
      }
    ],
    researchers: [
      {
        id: 699,
        name: "Dr. David S. Hall",
        title: "Paula R. and David J. Trout Professor of Physics",
        subject: "physics",
        topics: ["Bose-Einstein Condensation", "Ultracold Atoms", "Topological Quantum States", "Vortices & Solitons"],
        source: "https://www.amherst.edu/people/facstaff/dshall",
        recruiting: "Not verified",
        summary: "Dr. Hall is an international leader in experimental atomic physics, heading Amherst's ultracold atom laboratory which produces and manipulates synthetic magnetic monopoles and vortices."
      },
      {
        id: 700,
        name: "Dr. Sheila Jaswal",
        title: "Professor of Chemistry & Biophysics",
        subject: "chemistry",
        topics: ["Protein Folding Dynamics", "Hydrogen-Deuterium Exchange Mass Spectrometry", "Thermodynamics", "STEM Inclusivity"],
        source: "https://www.amherst.edu/people/facstaff/sjaswal",
        recruiting: "Not verified",
        summary: "Dr. Jaswal investigates the thermodynamic and kinetic mechanisms governing protein folding stability, utilizing mass spectrometry to analyze conformational transitions."
      },
      {
        id: 701,
        name: "Dr. Scott F. Kaplan",
        title: "Professor of Computer Science & Systems Specialist",
        subject: "computer-science",
        topics: ["Operating Systems", "Memory Management", "Virtual Memory Algorithms", "Garbage Collection"],
        source: "https://www.amherst.edu/people/facstaff/sfkaplan",
        recruiting: "Not verified",
        summary: "Dr. Kaplan specializes in operating system kernel architecture, designing adaptive memory allocation and paging algorithms that minimize cache misses in large-scale server workloads."
      }
    ]
  },

  // 6. UK: London School of Economics and Political Science (LSE) (Row 1267)
  {
    institution: "London School of Economics and Political Science",
    shortName: "LSE",
    slug: "london-school-of-economics",
    countryId: "uk",
    countryLabel: "UK",
    location: "London, England, United Kingdom",
    sourceRow: 1267,
    website: "https://www.lse.ac.uk",
    headline: "LSE: Economics, International Relations & PhD Studentships Guide",
    description: "Discover London School of Economics (LSE) admissions, fully funded LSE PhD Studentships, MSc Economics & Finance, ESRC doctoral awards, tuition, and world-renowned faculty in London.",
    heroEyebrow: "Holborn, Central London · World #2 Social Sciences University · Global Policy Hub",
    overview: "The London School of Economics and Political Science (LSE) is a world-leading social science institution situated in central London. Famed for its foundational contributions to economics, sociology, political science, law, and international development, LSE has educated over 50 past or present heads of state and 18 Nobel laureates in economics and literature.",
    admissions: {
      masters: "First-class or upper second-class honours degree (2:1 or international equivalent / GPA 3.5+) from an accredited university; quantitative programs require strong mathematical background.",
      phd: "Taught master's degree with merit or distinction (overall mark 65%+ with 70%+ on dissertation) in economics, political science, or related quantitative discipline.",
      language: "Higher score requirement: IELTS Academic 7.0 overall (minimum 6.5 in all components) or TOEFL iBT 100 overall (reading 23, listening 22, writing 24, speaking 22).",
      proposal: "Required for MRes/PhD: 1,500–2,500 word research proposal detailing theoretical background, research questions, empirical methodology, and literature gap.",
      appFee: "£90 GBP online application assessment fee for graduate programs.",
      documents: "Certified degree transcripts, two academic reference letters submitted electronically, academic CV, statement of academic purpose, and research proposal (for PhD)."
    },
    tuitionText: "Graduate tuition ranges from £25,000 to £34,000 per year for standard social sciences programs, and up to £42,000 for specialized finance master's degrees. LSE awards approximately 80 fully funded PhD Studentships annually covering full fees and an annual stipend of £21,237+ for domestic and international doctoral scholars.",
    opportunities: [
      {
        id: 1593,
        title: "LSE PhD Studentship: Full Tuition & London Living Stipend",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        source: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/lse-phd-studentships",
        funding: "Full tuition fee waiver plus £21,237/year tax-free living stipend for 4 years",
        status: "Annual competition",
        deadline: "2027-01-14",
        deadlineText: "January 14, 2027 (Funding deadline for Economics & ESRC)",
        fee: "£90 GBP",
        tuition: "100% covered under LSE Studentship scheme",
        requirements: {
          gpa: "Master's degree with distinction in economics, politics, or relevant field",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "GRE required for Economics, Finance, and Management PhDs (quant > 165)",
          papers: "Substantive 2,500-word research proposal and sample of written work",
          references: "Two academic referee letters from university professors"
        },
        desc: "LSE's flagship doctoral funding award, awarded purely on academic merit and research potential to approximately 80 top worldwide PhD scholars across all departments."
      },
      {
        id: 1594,
        title: "Doctor of Philosophy (PhD) in Economics & Econometric Theory",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "PhD",
        source: "https://www.lse.ac.uk/study-at-lse/Graduate/Degree-programmes-2025/MResPhD-Economics",
        funding: "Full 4-year departmental fellowship (£21,237/year stipend + GTA teaching income)",
        status: "Open for 2027 entry",
        deadline: "2026-12-18",
        deadlineText: "December 18, 2026 (Priority funding consideration)",
        fee: "£90 GBP",
        tuition: "£26,448/year (fully waived for funded doctoral candidates)",
        requirements: {
          gpa: "Master of Research (MRes) or MSc in Economics with Distinction",
          ielts: "IELTS 7.0 overall",
          gre: "GRE General Test compulsory (Quantitative score 90th percentile+)",
          papers: "MSc dissertation sample and mathematical research proposal",
          references: "Three academic referee letters"
        },
        desc: "World-renowned 4-year doctoral training program in microeconomic theory, macroeconomic dynamics, and applied empirical econometrics, leading to top academic placements."
      },
      {
        id: 1595,
        title: "Master of Science in International Relations & Global Governance",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.lse.ac.uk/study-at-lse/Graduate/Degree-programmes-2025/MSc-International-Relations",
        funding: "LSE Graduate Support Scheme (means-tested awards up to £20,000)",
        status: "Rolling admissions",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Rolling until filled)",
        fee: "£90 GBP",
        tuition: "£27,480/year for international students (£16,800 domestic)",
        requirements: {
          gpa: "First or upper second-class honours degree (2:1 / GPA 3.5+) in politics or history",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "1,500-word statement of academic purpose and policy analysis sample",
          references: "Two academic referee letters"
        },
        desc: "Premier one-year postgraduate program analyzing multilateral institutions, security architectures, diplomatic negotiation, and international political economy."
      },
      {
        id: 1596,
        title: "Centre for Economic Performance (CEP) Graduate Research Assistantship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://cep.lse.ac.uk",
        funding: "£24,500/year pro-rata research assistantship contract plus LSE staff benefits",
        status: "Open recruitment",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "£0",
        tuition: "Enrolled student / staff appointment",
        requirements: {
          gpa: "MSc in Economics with strong econometrics and coding skills (Stata/R/Python)",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Empirical paper sample utilizing microdata or administrative registers",
          references: "Academic reference from econometrics professor"
        },
        desc: "Applied research post at LSE's prestigious Centre for Economic Performance, conducting empirical data cleaning, causal inference, and economic policy evaluation."
      },
      {
        id: 1597,
        title: "LSE Firoz Lalji Institute for Africa Policy Fellowship & Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.lse.ac.uk/africa",
        funding: "£1,500/month living stipend and field research travel grant",
        status: "Annual selection",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "£0",
        tuition: "Program credit integration",
        requirements: {
          gpa: "Enrolled LSE postgraduate student in international development or economics",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Project proposal on African macroeconomic policy or sustainable urbanization",
          references: "LSE faculty mentor recommendation"
        },
        desc: "Structured policy research placement working with international development organizations, think tanks, and ministries across the African continent."
      },
      {
        id: 1598,
        title: "Postdoctoral Fellowship at the Grantham Research Institute on Climate Change",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.lse.ac.uk/granthaminstitute",
        funding: "£42,000 to £48,500 per annum salary plus USS pension",
        status: "Open recruitment",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "£0",
        tuition: "Employment position",
        requirements: {
          gpa: "Completed PhD in Environmental Economics, Climate Policy, or Energy Finance",
          ielts: "C1/C2 English level",
          gre: "Not required",
          papers: "Track record of published papers in leading environmental or economics journals",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral position within Lord Nicholas Stern's Grantham Research Institute, modeling carbon pricing, green fiscal reform, and global climate governance."
      },
      {
        id: 1599,
        title: "Master of Science in Data Science & Machine Learning for Social Systems",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Master's",
        source: "https://www.lse.ac.uk/study-at-lse/Graduate/Degree-programmes-2025/MSc-Data-Science",
        funding: "LSE Department of Statistics Master's Awards (£10,000)",
        status: "Applications open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "£90 GBP",
        tuition: "£34,128/year international; £17,500 domestic",
        requirements: {
          gpa: "First-class honours degree with substantial mathematics and programming coursework",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Recommended for non-UK qualifications",
          papers: "Statement of purpose and programming code samples (Python/R)",
          references: "Two academic referee letters"
        },
        desc: "Interdisciplinary technical master's degree exploring high-dimensional statistics, deep learning, graph algorithms, and societal data ethics."
      }
    ],
    researchers: [
      {
        id: 702,
        name: "Dr. Nicholas Stern",
        title: "IG Patel Professor of Economics and Government & Chair of Grantham Institute",
        subject: "social-sciences",
        topics: ["Climate Economics", "Stern Review", "Green Growth", "Public Economics"],
        source: "https://www.lse.ac.uk/granthaminstitute/profile/nicholas-stern/",
        recruiting: "Not verified",
        summary: "Lord Nicholas Stern is the renowned author of the historic 2006 Stern Review on the Economics of Climate Change, spearheading global research in sustainable economic growth and decarbonization."
      },
      {
        id: 703,
        name: "Dr. Oriana Bandiera",
        title: "Sir Anthony Atkinson Professor of Economics & Director of Suntory and Toyota International Centres",
        subject: "social-sciences",
        topics: ["Development Economics", "Incentives in Organizations", "Labor Markets", "Social Networks"],
        source: "https://www.lse.ac.uk/economics/people/faculty/oriana-bandiera",
        recruiting: "Not verified",
        summary: "Dr. Bandiera is a recipient of the Yrjö Jahnsson Award, pioneering field experiments in development and organizational economics analyzing labor contract incentives in low-income regions."
      },
      {
        id: 704,
        name: "Dr. Ricardo Reis",
        title: "A.W. Phillips Professor of Economics",
        subject: "social-sciences",
        topics: ["Monetary Economics", "Central Bank Digital Currencies", "Inflation Expectations", "Fiscal Policy"],
        source: "https://www.lse.ac.uk/economics/people/faculty/ricardo-reis",
        recruiting: "Not verified",
        summary: "Dr. Reis is a world-leading macroeconomist, researching central bank balance sheets, inattention dynamics in price setting, and the structural drivers of sovereign debt and inflation."
      }
    ]
  },

  // 7. Japan: Hiroshima Institute of Technology (Row 1643)
  {
    institution: "Hiroshima Institute of Technology",
    shortName: "HIT",
    slug: "hiroshima-institute-of-technology",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Hiroshima, Hiroshima Prefecture, Japan",
    sourceRow: 1643,
    website: "https://www.it-hiroshima.ac.jp",
    headline: "Hiroshima Institute of Technology: Robotics, Architecture & Engineering Guide",
    description: "Explore Hiroshima Institute of Technology graduate school admissions, MEXT scholarship recommendations, master's and doctoral degrees in robotics, tuition, and faculty profiles.",
    heroEyebrow: "Hiroshima, Japan · Established Engineering Institution · Robotics & Civil Resilience",
    overview: "Hiroshima Institute of Technology (HIT - Hiroshima Kogyo Daigaku) is a prominent private engineering and technology university located in Saeki-ku, Hiroshima. Founded in 1961, HIT features state-of-the-art research centers in earthquake engineering, robotic mechatronics, satellite remote sensing, environmental design, and smart infrastructure.",
    admissions: {
      masters: "Graduation from an accredited four-year university with a Bachelor of Engineering or Bachelor of Science degree (or international 16-year education equivalent).",
      phd: "Completion of a recognized master's degree (Master of Engineering or Science) and successful oral defense of academic thesis.",
      language: "Japanese JLPT N2/N1 for Japanese-taught tracks; CEFR B2 (TOEFL iBT 75+ or IELTS 6.0+) for English research laboratory programs.",
      proposal: "Required for graduate admissions: 2,000-character (or 3-page English) research proposal aligned with a confirmed HIT laboratory professor.",
      appFee: "¥30,000 JPY application screening fee.",
      documents: "Graduation certificate, academic transcript, research proposal, certificate of English or Japanese proficiency, and letters of recommendation."
    },
    tuitionText: "Tuition is approximately ¥980,000 JPY to ¥1,180,000 JPY per year. International students benefit from institutional tuition reductions (30% to 50% waiver), and eligible scholars can secure Japanese Government (MEXT) University Recommendation Scholarships covering 100% of tuition plus monthly stipends.",
    opportunities: [
      {
        id: 1600,
        title: "Japanese Government (MEXT) University Recommendation Scholarship at HIT",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Scholarship",
        source: "https://www.it-hiroshima.ac.jp/english/",
        funding: "Full tuition waiver, admission fee exemption, roundtrip flights, and ¥144,000 JPY/month living stipend",
        status: "Annual selection",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (For October 2027 entry)",
        fee: "¥0 (for MEXT candidates)",
        tuition: "¥0 (covered by MEXT)",
        requirements: {
          gpa: "Minimum 2.3 out of 3.0 on Japanese MEXT evaluation scale",
          ielts: "IELTS 6.0+ or TOEFL 75+",
          gre: "Not required",
          papers: "Formal research plan matched with an HIT faculty laboratory",
          references: "Dean's letter of recommendation from home university"
        },
        desc: "Prestigious Monbukagakusho scholarship funding international graduate students pursuing master's or doctoral engineering degrees at Hiroshima Institute of Technology."
      },
      {
        id: 1601,
        title: "Doctor of Philosophy (PhD) in Mechatronics and Intelligent Robotics",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        source: "https://www.it-hiroshima.ac.jp/english/graduate/doctor.html",
        funding: "HIT Graduate Research Assistantship (¥80,000 JPY/month + 50% tuition waiver)",
        status: "Open for 2027 intake",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Spring 2027 entry)",
        fee: "¥30,000 JPY",
        tuition: "¥980,000 JPY/year (before tuition waiver)",
        requirements: {
          gpa: "Master's degree in Robotics, Mechanical, or Electrical Engineering",
          ielts: "IELTS 6.0 or TOEFL 75",
          gre: "Not required",
          papers: "Master's thesis and 4-page research proposal in robotic manipulation or autonomous navigation",
          references: "Two academic referee letters"
        },
        desc: "Doctoral research program advancing humanoid robotics, soft robotic actuators, autonomous mobile robots, and computer vision for industrial manufacturing."
      },
      {
        id: 1602,
        title: "Master of Engineering in Architectural Design & Earthquake Resilience",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        type: "Master's",
        source: "https://www.it-hiroshima.ac.jp/english/graduate/master.html",
        funding: "HIT International Tuition Reduction (30% tuition reduction)",
        status: "Applications open",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026 (Spring 2027 start)",
        fee: "¥30,000 JPY",
        tuition: "¥1,080,000 JPY/year (¥756,000 JPY after 30% reduction)",
        requirements: {
          gpa: "Bachelor of Architecture or Civil Engineering",
          ielts: "IELTS 6.0 or JLPT N2",
          gre: "Not required",
          papers: "Architectural design portfolio and structural analysis sample",
          references: "Two recommendation letters"
        },
        desc: "Two-year master's degree focusing on seismic structural engineering, base-isolation systems, timber architecture, and urban disaster mitigation."
      },
      {
        id: 1603,
        title: "Satellite Remote Sensing & GIS Environmental Research Assistantship",
        subject: "environment",
        subjects: ["environment", "computer-science"],
        type: "Research",
        source: "https://www.it-hiroshima.ac.jp/research/",
        funding: "¥60,000 JPY/month laboratory research stipend",
        status: "Open recruitment",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in HIT Graduate School of Engineering",
          ielts: "TOEFL 72 or IELTS 5.5+",
          gre: "Not required",
          papers: "Demonstrated skills in synthetic aperture radar (SAR) or Python GIS scripting",
          references: "Laboratory professor endorsement"
        },
        desc: "Applied satellite research analyzing Earth observation radar telemetry to detect coastal erosion, landslide displacement, and forest biomass change in Western Japan."
      },
      {
        id: 1604,
        title: "Chugoku Industrial Automotive & Machinery Practicum",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        source: "https://www.it-hiroshima.ac.jp/career/",
        funding: "¥100,000 JPY/month industry intern allowance plus dormitory lodging",
        status: "Annual competition",
        deadline: "2026-11-25",
        deadlineText: "November 25, 2026 (Winter placement)",
        fee: "¥0",
        tuition: "Degree-enrolled credit",
        requirements: {
          gpa: "Completion of first-year engineering master's coursework",
          ielts: "Conversational Japanese (JLPT N3+) and English proficiency",
          gre: "Not required",
          papers: "Technical résumé and safety training certificate",
          references: "HIT Career Center recommendation"
        },
        desc: "Three-month cooperative engineering internship partnering with Mazda suppliers and machinery manufacturing corporations in the greater Hiroshima industrial belt."
      },
      {
        id: 1605,
        title: "JSPS Postdoctoral Fellowship at HIT in Micro-Electro-Mechanical Systems (MEMS)",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Fellowship/Job",
        source: "https://www.it-hiroshima.ac.jp/english/research/",
        funding: "¥362,000 JPY/month tax-free stipend, ¥200,000 airfare allowance, and research grant",
        status: "Open recruitment",
        deadline: "2027-04-20",
        deadlineText: "April 20, 2027",
        fee: "¥0",
        tuition: "Postdoctoral salary (zero tuition)",
        requirements: {
          gpa: "PhD in Electrical Engineering, Applied Physics, or Nanotechnology",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Minimum two first-author journal publications in MEMS or semiconductor fabrication",
          references: "Three academic referee letters"
        },
        desc: "Japan Society for the Promotion of Science (JSPS) fellowship supporting an international postdoctoral scholar conducting cleanroom silicon micromachining and piezoelectric sensor research."
      },
      {
        id: 1606,
        title: "Master of Science in Information Systems & Sensor Network Engineering",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://www.it-hiroshima.ac.jp/english/graduate/",
        funding: "HIT Graduate Academic Excellence Award (¥200,000 JPY entry grant)",
        status: "Applications open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Spring 2027 start)",
        fee: "¥30,000 JPY",
        tuition: "¥980,000 JPY/year",
        requirements: {
          gpa: "BSc in Computer Science, Information Engineering, or Mathematics",
          ielts: "TOEFL 75 or IELTS 6.0",
          gre: "Not required",
          papers: "Software design portfolio and coding experience in C++/Python",
          references: "Two academic referee letters"
        },
        desc: "Comprehensive master's degree focusing on IoT sensor telemetry, wireless ad-hoc networking, edge computing security, and real-time distributed data systems."
      }
    ],
    researchers: [
      {
        id: 705,
        name: "Dr. Kenji Inoue",
        title: "Professor of Intelligent Robotics & Mechatronics",
        subject: "engineering",
        topics: ["Assistive Robotics", "Exoskeletons", "Force Control", "Bipedal Locomotion"],
        source: "https://www.it-hiroshima.ac.jp/english/faculty/",
        recruiting: "Not verified",
        summary: "Dr. Inoue develops robotic exoskeletons and power-assisted devices for rehabilitation and elderly care, specializing in dynamic impedance control and musculoskeletal modeling."
      },
      {
        id: 706,
        name: "Dr. Hiroshi Sugiyama",
        title: "Professor of Earthquake Engineering & Structural Resilience",
        subject: "engineering",
        topics: ["Base-Isolation Systems", "Seismic Structural Dynamics", "Vibration Damping", "Composite Concrete"],
        source: "https://www.it-hiroshima.ac.jp/english/faculty/",
        recruiting: "Not verified",
        summary: "Dr. Sugiyama utilizes full-scale shaking table simulations to test damping systems and evaluate nonlinear seismic responses in multi-story architectural frameworks."
      },
      {
        id: 707,
        name: "Dr. Masahiko Nagai",
        title: "Professor of Geoinformatics & Remote Sensing",
        subject: "environment",
        topics: ["Satellite SAR Telemetry", "Drone Photogrammetry", "Geographic Information Systems", "Disaster Mapping"],
        source: "https://www.it-hiroshima.ac.jp/english/faculty/",
        recruiting: "Not verified",
        summary: "Dr. Nagai analyzes microwave satellite radar and drone lidar data to track ground subsidence, flood inundation zones, and environmental changes in coastal river basins."
      }
    ]
  },

  // 8. Sweden: Linköping University (Row 1561)
  {
    institution: "Linköping University",
    shortName: "LiU",
    slug: "linkoping-university",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Linköping & Norrköping, Östergötland, Sweden",
    sourceRow: 1561,
    website: "https://www.liu.se",
    headline: "Linköping University: Computer Science, Materials & Salaried PhD Guide",
    description: "Explore Linköping University admissions, salaried Swedish PhD appointments (SEK 33,500/mo), English-taught master's programs in AI and materials, tuition, and leading faculty.",
    heroEyebrow: "Linköping & Norrköping · Top 200 World University · Computer Science & Organic Electronics Hub",
    overview: "Linköping University (LiU - Linköpings universitet) is one of Sweden's top comprehensive research universities, celebrated for pioneering computer science in Scandinavia and world-leading research at the Laboratory of Organic Electronics (LOE). LiU is home to Sweden's National Supercomputer Centre (NSC) and the Wallenberg Autonomous Systems Program (WASP).",
    admissions: {
      masters: "Completed Bachelor's degree (equivalent to a Swedish Kandidatexamen of 180 ECTS) in relevant subject from an internationally accredited university.",
      phd: "Master's degree (minimum 240 ECTS, including 60 ECTS at master's level and an independent thesis) with competitive selection based on research excellence.",
      language: "English 6 / English B (IELTS Academic 6.5 overall with no section below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "Doctoral applications require a detailed 3,000-word research proposal aligned with the specific advertised research vacancy.",
      appFee: "SEK 900 application fee paid via the national UniversityAdmissions.se portal (EU/EEA students exempt).",
      documents: "Bachelor's diploma, transcript of records with course syllabus descriptions, proof of English, passport copy, and curriculum vitae."
    },
    tuitionText: "Tuition is 100% free for citizens of the EU, EEA, and Switzerland. For non-EU/EEA students, master's tuition ranges from SEK 125,000 to SEK 165,000 per academic year. All doctoral positions in Sweden are salaried employee contracts (starting at approximately SEK 33,500 per month with full healthcare and social benefits; zero tuition).",
    opportunities: [
      {
        id: 1607,
        title: "Salaried Swedish Doctoral Position (PhD) in Organic Bioelectronics",
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        type: "PhD",
        source: "https://liu.se/en/work-at-liu/vacancies",
        funding: "Salaried employee contract (SEK 33,500–38,000/month) with full social benefits and zero tuition",
        status: "Open vacancy",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (For early 2027 start)",
        fee: "SEK 0",
        tuition: "SEK 0 (Salaried Swedish state employment)",
        requirements: {
          gpa: "Master of Science in Applied Physics, Materials Science, or Chemistry",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Master's thesis in organic semiconductors or electrochemical devices",
          references: "Two academic referee letters"
        },
        desc: "Four-year salaried doctoral appointment within the Laboratory of Organic Electronics (LOE), researching electronic plants, organic electrochemical transistors, and bio-interfacing neural probes."
      },
      {
        id: 1608,
        title: "Linköping University International Master's Scholarship (50%–100% Tuition Waiver)",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Scholarship",
        source: "https://liu.se/en/education/scholarships",
        funding: "50% to 100% tuition fee reduction for the entire 2-year duration of master's study",
        status: "Annual competition",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Following UniversityAdmissions.se submission)",
        fee: "SEK 900 (national portal fee)",
        tuition: "Covered by scholarship",
        requirements: {
          gpa: "Outstanding academic record in undergraduate computer science or engineering (top 10%)",
          ielts: "IELTS 6.5 (minimum 5.5 in all bands)",
          gre: "Not required",
          papers: "Motivation letter addressing scientific goals at Linköping",
          references: "Academic reference letter"
        },
        desc: "Merit-based university award for non-EU/EEA fee-paying students admitted to master's programs at LiU who demonstrate exceptional academic achievement."
      },
      {
        id: 1609,
        title: "Master of Science in Computer Science: Autonomous Systems & Artificial Intelligence",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://liu.se/en/education/program/6mcsc",
        funding: "Wallenberg Autonomous Systems Program (WASP) graduate research awards",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National Swedish deadline)",
        fee: "SEK 900",
        tuition: "SEK 150,000/year for non-EU; SEK 0 for EU/EEA citizens",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with at least 30 ECTS in mathematics",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Course syllabus overview and programming transcript",
          references: "Not mandatory for Swedish portal but recommended"
        },
        desc: "World-class 2-year master's program integrated with the WASP initiative, offering advanced coursework in reinforcement learning, automated planning, and computer vision."
      },
      {
        id: 1610,
        title: "National Supercomputer Centre (NSC) Berzelius AI Cluster Research Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        source: "https://www.nsc.liu.se",
        funding: "SEK 16,500/month research stipend plus GPU compute allocation",
        status: "Annual selection",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "SEK 0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in LiU graduate engineering or computing program",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Proficiency in CUDA, PyTorch, and distributed cluster scheduling (SLURM)",
          references: "NSC principal investigator approval"
        },
        desc: "Research assistantship working on Sweden's most powerful AI supercomputer, Berzelius, training massive multimodal foundation models and molecular dynamics simulations."
      },
      {
        id: 1611,
        title: "Mjärdevi Science Park Industrial AI & Embedded Software Practicum",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        source: "https://linkopingsciencepark.se",
        funding: "SEK 18,000 to 22,000/month corporate intern compensation",
        status: "Semester placement cycles",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 (Spring 2027 placement)",
        fee: "SEK 0",
        tuition: "Course-integrated",
        requirements: {
          gpa: "Successful completion of 60 ECTS in LiU graduate coursework",
          ielts: "English 6 equivalent",
          gre: "Not required",
          papers: "Technical software development portfolio (Git repository)",
          references: "LiU internship coordinator endorsement"
        },
        desc: "Six-month professional placement embedded within Linköping Science Park (Mjärdevi), collaborating with Ericsson, Saab, or innovative AI startups."
      },
      {
        id: 1612,
        title: "WASP Postdoctoral Research Fellowship in Safe Autonomous Robotics",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Fellowship/Job",
        source: "https://wasp-sweden.org",
        funding: "SEK 44,000 to 48,000/month salaried postdoctoral contract plus travel budget",
        status: "Open recruitment",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "SEK 0",
        tuition: "Salaried employee post",
        requirements: {
          gpa: "PhD in Robotics, Control Systems, or Computer Science",
          ielts: "Fluent English (C1)",
          gre: "Not required",
          papers: "Minimum three high-impact publications in IEEE Transactions or top conferences (ICRA/IROS)",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral appointment funded by the Wallenberg AI, Autonomous Systems and Software Program (WASP), investigating formal verification and safety certification for autonomous drones."
      },
      {
        id: 1613,
        title: "Master of Science in Materials Science and Nanotechnology",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "Master's",
        source: "https://liu.se/en/education/program/6mmat",
        funding: "LiU Departmental Waivers and Swedish Institute (SI) Scholarship eligibility",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National portal deadline)",
        fee: "SEK 900",
        tuition: "SEK 165,000/year for non-EU; SEK 0 for EU/EEA",
        requirements: {
          gpa: "Bachelor of Science in Physics, Materials Science, or Chemistry (180 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Course-by-course transcript detailing physics and chemistry credits",
          references: "Academic reference letters recommended"
        },
        desc: "Advanced graduate program utilizing thin film electron microscopy, synchrotron X-ray diffraction, and cleanroom synthesis for two-dimensional materials and semiconductors."
      }
    ],
    researchers: [
      {
        id: 708,
        name: "Dr. Magnus Berggren",
        title: "Professor of Organic Electronics & Director of Laboratory of Organic Electronics (LOE)",
        subject: "physics",
        topics: ["Organic Bioelectronics", "Electronic Plants", "Ion Pumps", "Printed Supercapacitors"],
        source: "https://liu.se/en/employee/magbe22",
        recruiting: "Not verified",
        summary: "Dr. Berggren is a member of the Royal Swedish Academy of Sciences and pioneer of organic bioelectronics, famous for demonstrating electronic circuitry integrated inside living plants."
      },
      {
        id: 709,
        name: "Dr. Patrick Doherty",
        title: "Professor of Computer Science & Head of Artificial Intelligence Division",
        subject: "computer-science",
        topics: ["Autonomous Drones", "Automated Reasoning", "Knowledge Representation", "UAV Sensor Fusion"],
        source: "https://liu.se/en/employee/patdo78",
        recruiting: "Not verified",
        summary: "Dr. Doherty directs advanced autonomous systems research at LiU, developing cognitive architectures and collision avoidance algorithms for autonomous unmanned aerial vehicles."
      },
      {
        id: 710,
        name: "Dr. Igor Abrikosov",
        title: "Professor of Theoretical Physics & Materials Design",
        subject: "physics",
        topics: ["Density Functional Theory", "High-Pressure Physics", "Materials Under Extreme Conditions", "Quantum Calculations"],
        source: "https://liu.se/en/employee/igoab62",
        recruiting: "Not verified",
        summary: "Dr. Abrikosov is a world authority on first-principles quantum calculations, modeling phase transitions and novel structural alloys under extreme pressures and temperatures."
      }
    ]
  },

  // 9. Netherlands: HU University of Applied Sciences Utrecht (Row 1395)
  {
    institution: "HU University of Applied Sciences Utrecht",
    shortName: "Hogeschool Utrecht",
    slug: "hu-university-of-applied-sciences-utrecht",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Utrecht, Netherlands",
    sourceRow: 1395,
    website: "https://www.internationalhu.com",
    headline: "Hogeschool Utrecht: Applied AI, Sustainable Building & NL Scholarship Guide",
    description: "Discover HU University of Applied Sciences Utrecht admissions, Dutch NL Scholarships (€5,000), English-taught master's degrees in Data-Driven Business, fees, and faculty research.",
    heroEyebrow: "Utrecht Science Park · Top Dutch Applied University · Smart Cities & Digital Innovation",
    overview: "HU University of Applied Sciences Utrecht (Hogeschool Utrecht - HU) is one of the largest public applied research universities in the Netherlands, located at the vibrant Utrecht Science Park. Known for high-impact multidisciplinary research in artificial intelligence, digital design, smart sustainable cities, and healthcare innovation, HU educates over 38,000 students across modern research labs.",
    admissions: {
      masters: "Recognized Bachelor's degree in business, computing, engineering, or related field from an accredited university; professional work experience may be considered for applied professional master's tracks.",
      phd: "Professional Doctorate (PD) candidates and joint PhDs awarded collaboratively in partnership with research universities like Utrecht University.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each subtest), TOEFL iBT 90, or Cambridge C1 Advanced.",
      proposal: "Applied master's thesis or PD proposal: 2,000-word industrial innovation project plan addressing a real-world enterprise or societal challenge.",
      appFee: "€0 direct application fee (Studielink registration).",
      documents: "Bachelor's diploma, transcript of records, curriculum vitae, motivation letter, and employer endorsement (for dual/professional master's tracks)."
    },
    tuitionText: "Tuition is legally fixed by the Dutch government at €2,530 per year for EU/EEA students. For non-EU/EEA international students, tuition ranges from €9,800 to €14,500 per academic year. The Dutch Ministry NL Scholarship (formerly Holland Scholarship) awards €5,000 to talented incoming international scholars.",
    opportunities: [
      {
        id: 1614,
        title: "Dutch Ministry NL Scholarship at Hogeschool Utrecht",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Scholarship",
        source: "https://www.internationalhu.com/practical-matters/scholarships",
        funding: "€5,000 one-time financial contribution towards study and living costs",
        status: "Annual competition",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (For September 2027 intake)",
        fee: "€0",
        tuition: "€9,800/year international; €2,530/year EU",
        requirements: {
          gpa: "Academic distinction in undergraduate degree (GPA 3.3+ or Dutch 7.5+)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Compelling 1,000-word motivation letter describing career aspirations in the Netherlands",
          references: "Two academic referee letters"
        },
        desc: "Prestigious national scholarship financed by the Dutch Ministry of Education and Hogeschool Utrecht, awarded to talented non-EEA students pursuing master's study."
      },
      {
        id: 1615,
        title: "Master of Science in Data-Driven Business & Digital Transformation",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Master's",
        source: "https://www.internationalhu.com/master-programmes",
        funding: "HU Enterprise Graduate Grants (€3,000 fee deduction)",
        status: "Applications open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Non-EU visa deadline)",
        fee: "€0",
        tuition: "€11,200/year international; €2,530/year EU",
        requirements: {
          gpa: "Bachelor's degree in Business, Computing, or Engineering",
          ielts: "IELTS 6.5 with minimum 6.0 in writing",
          gre: "Not required",
          papers: "Professional résumé detailing analytical or business experience",
          references: "One academic and one professional reference"
        },
        desc: "Applied professional master's degree exploring big data architectures, predictive machine learning models, agile transformation, and business intelligence."
      },
      {
        id: 1616,
        title: "Applied Professional Doctorate (PD) in Smart Sustainable Cities",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "PhD",
        source: "https://www.hu.nl/onderzoek/kenniscentra",
        funding: "Full salaried researcher position (€38,000–€46,000/year gross under Dutch HBO CAO)",
        status: "Open vacancy",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "€0 (Salaried research position)",
        requirements: {
          gpa: "Master's degree in Urban Planning, Civil Engineering, or Energy Transition",
          ielts: "English C1 level",
          gre: "Not required",
          papers: "Practice-oriented research proposal solving an urban sustainability bottleneck",
          references: "Two letters of support from academic and municipal stakeholders"
        },
        desc: "Four-year salaried professional doctorate conducted within HU's Centre of Expertise for Sustainable Urban Development, testing urban circularity and building retrofitting."
      },
      {
        id: 1617,
        title: "Centre of Expertise for Digital Technology & Applied AI Research Assistantship",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        source: "https://www.hu.nl/onderzoek/innovatie-in-de-zorg",
        funding: "€1,250/month research stipend plus access to AI compute clusters",
        status: "Semester selection",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Spring 2027 start)",
        fee: "€0",
        tuition: "Student-enrolled position",
        requirements: {
          gpa: "Enrolled student in HU graduate computer science or data program",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Coding demonstration in Python and deep learning frameworks",
          references: "Lector endorsement"
        },
        desc: "Applied laboratory assistantship developing computer vision algorithms for medical diagnostics and automated assistive technologies for vulnerable patient groups."
      },
      {
        id: 1618,
        title: "Utrecht Science Park Circular Innovation Corporate Practicum",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Internship",
        source: "https://utrechtsciencepark.nl",
        funding: "€600 to €900/month corporate internship allowance",
        status: "Open recruitment",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Spring placement)",
        fee: "€0",
        tuition: "Course-enrolled credit",
        requirements: {
          gpa: "Successful completion of first semester master's modules",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Updated CV and sustainability project summary",
          references: "HU academic study counselor approval"
        },
        desc: "Twenty-week professional internship embedded in enterprise research labs at Utrecht Science Park, evaluating circular supply chains and industrial carbon offsets."
      },
      {
        id: 1619,
        title: "Postdoctoral Fellowship in Healthcare Digitalization & Responsible AI",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.hu.nl/onderzoek",
        funding: "€52,000 to €58,500 annual salary under Dutch University CAO plus pension",
        status: "Recruiting for 2027",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "€0",
        tuition: "Salaried employee post",
        requirements: {
          gpa: "PhD in Health Informatics, Data Science, or Technology Ethics",
          ielts: "Fluent English (C1/C2)",
          gre: "Not required",
          papers: "Minimum two peer-reviewed journal papers in digital healthcare or AI governance",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral position evaluating algorithmic bias, clinical decision support validation, and data privacy frameworks in Dutch hospital networks."
      },
      {
        id: 1620,
        title: "Master of Science in Next Level Engineering & Systems Integration",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Master's",
        source: "https://www.internationalhu.com",
        funding: "Regional Industry Innovation Fund scholarships (€2,500)",
        status: "Open for applications",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€0",
        tuition: "€10,500/year international; €2,530/year EU",
        requirements: {
          gpa: "Bachelor of Engineering in Mechanical, Mechatronics, or Electrical Engineering",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Engineering portfolio detailing industrial automation capstone design",
          references: "Two academic referee letters"
        },
        desc: "Forward-looking engineering master's degree training specialists in cyber-physical automation, digital twin modeling, and sustainable manufacturing systems."
      }
    ],
    researchers: [
      {
        id: 711,
        name: "Dr. Matthijs Dicke-Ogenia",
        title: "Professor (Lector) of Sustainable Energy & Smart Mobility",
        subject: "engineering",
        topics: ["Electric Vehicle Charging Infrastructure", "Smart Grids", "Urban Mobility", "Energy Storage"],
        source: "https://www.hu.nl/onderzoek/onderzoekers/matthijs-dicke-ogenia",
        recruiting: "Not verified",
        summary: "Dr. Dicke-Ogenia investigates bidirectional EV charging systems (V2G) and microgrid balancing, directing practical municipal testing in Utrecht and the Randstad."
      },
      {
        id: 712,
        name: "Dr. Koen Hindriks",
        title: "Professor (Lector) of Artificial Intelligence & Interactive Robotics",
        subject: "computer-science",
        topics: ["Social Robotics", "Cognitive Agent Architectures", "Human-AI Teaming", "Conversational AI"],
        source: "https://www.hu.nl/onderzoek/onderzoekers/koen-hindriks",
        recruiting: "Not verified",
        summary: "Dr. Hindriks develops cognitive architectures for assistive social robots in healthcare and educational environments, analyzing natural language dialog and user trust."
      },
      {
        id: 713,
        name: "Dr. Elena Marchiori",
        title: "Professor (Lector) of Data Science & Machine Learning",
        subject: "computer-science",
        topics: ["Explainable AI", "Bioinformatics", "Predictive Analytics", "Deep Learning in Healthcare"],
        source: "https://www.hu.nl/onderzoek/onderzoekers",
        recruiting: "Not verified",
        summary: "Dr. Marchiori focuses on robust machine learning models for clinical risk prediction, developing interpretable algorithmic pipelines for medical image segmentation."
      }
    ]
  },

  // 10. Switzerland: University of Teacher Education Bern (Row 1359)
  {
    institution: "University of Teacher Education Bern",
    shortName: "PHBern",
    slug: "university-of-teacher-education-bern",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Bern, Canton of Bern, Switzerland",
    sourceRow: 1359,
    website: "https://www.phbern.ch",
    headline: "PHBern: Educational Sciences, Learning Technologies & Swiss Doctorates",
    description: "Discover University of Teacher Education Bern (PHBern) admissions, joint doctoral programs with University of Bern, Swiss research salaries, fees, and faculty profiles.",
    heroEyebrow: "Bern, Switzerland · Leading Swiss Pedagogical University · Educational Neuroscience",
    overview: "The University of Teacher Education Bern (PHBern - Pädagogische Hochschule Bern) is one of Switzerland's premier public pedagogical and educational research universities. In close collaboration with the University of Bern, PHBern operates world-class research institutes in educational neuroscience, instructional design, multilingual education, and digital learning technologies.",
    admissions: {
      masters: "Recognized Bachelor's degree from a Swiss or accredited international higher-education institution with minimum 180 ECTS credits in education, psychology, or related field.",
      phd: "Master's degree (Master of Arts or Master of Science) with above-average grades; doctoral degrees awarded in joint doctoral graduate schools with the University of Bern.",
      language: "German C1 required for standard teacher education; English C1 (IELTS 7.0+ or TOEFL 100+) required for international educational science research degrees.",
      proposal: "Required for doctoral researchers: 3,000-word doctoral research plan aligned with an accredited PHBern/UniBe doctoral supervisor.",
      appFee: "CHF 100 Swiss Francs non-refundable application evaluation fee.",
      documents: "Bachelor's and Master's diplomas, transcript of records, motivation letter, CV, and two letters of academic recommendation."
    },
    tuitionText: "Tuition is CHF 750 per semester for Swiss and international students, plus administrative semester dues of CHF 65. Doctoral candidates hold salaried Swiss academic contracts (ranging from CHF 47,000 to CHF 55,000 per year gross with full pension and insurance; zero tuition fees).",
    opportunities: [
      {
        id: 1621,
        title: "Swiss National Science Foundation (SNSF) Doctoral Fellowship at PHBern",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Scholarship",
        source: "https://www.phbern.ch/forschung/nachwuchsfoerderung",
        funding: "CHF 47,040 to 50,040/year salaried doctoral contract, full research budget, and conference travel",
        status: "Annual competition",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (SNSF annual round)",
        fee: "CHF 100",
        tuition: "CHF 0 (Full Swiss research contract)",
        requirements: {
          gpa: "Master's degree with high distinction in Educational Sciences or Psychology",
          ielts: "English C1 (IELTS 7.0+) or German C1",
          gre: "Not required",
          papers: "Original doctoral research proposal on cognitive learning mechanisms",
          references: "Two academic referee letters from university professors"
        },
        desc: "Prestigious Swiss National Science Foundation funded 4-year doctoral contract conducting cutting-edge empirical research into educational technologies and cognitive development."
      },
      {
        id: 1622,
        title: "Doctor of Philosophy (PhD) in Educational Sciences (Joint with University of Bern)",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.phbern.ch/forschung/doktorat",
        funding: "Salaried Swiss university assistantship (CHF 48,000/year gross)",
        status: "Open for 2027 entry",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Spring 2027 enrollment)",
        fee: "CHF 100",
        tuition: "CHF 0 (Tuition waived for doctoral staff)",
        requirements: {
          gpa: "Master's degree with minimum grade of 5.0 on Swiss 6-point scale",
          ielts: "IELTS 7.0 or TOEFL 100",
          gre: "Not required",
          papers: "Master's dissertation sample and 3,000-word research proposal",
          references: "Confirmed supervisor agreement from both PHBern and University of Bern"
        },
        desc: "Four-year joint doctoral program between PHBern and the University of Bern, investigating school system governance, pedagogical intervention design, and inclusive classrooms."
      },
      {
        id: 1623,
        title: "Master of Science in Educational Technology & Digital Instructional Media",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Master's",
        source: "https://www.phbern.ch/studiengaenge/master",
        funding: "Canton of Bern study support scholarships for eligible candidates",
        status: "Applications open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Fall 2027 semester)",
        fee: "CHF 100",
        tuition: "CHF 750/semester",
        requirements: {
          gpa: "Bachelor's degree in Education, Computer Science, or Cognitive Psychology",
          ielts: "IELTS 7.0 or German C1",
          gre: "Not required",
          papers: "Essay on digital media integration in primary or secondary learning",
          references: "Two academic recommendation letters"
        },
        desc: "Specialized master's degree exploring AI in education, gamified pedagogical platforms, learner analytics, and adaptive cognitive assessment tools."
      },
      {
        id: 1624,
        title: "Institute for Research, Development and Evaluation Assistantship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://www.phbern.ch/forschung/institute/institut-fuer-forschung-entwicklung-und-evaluation",
        funding: "CHF 2,200/month research stipend (50% appointment)",
        status: "Annual selection",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "CHF 0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in PHBern or UniBe graduate program",
          ielts: "English C1 and German B2/C1",
          gre: "Not required",
          papers: "Demonstrated competence in quantitative empirical methods (SPSS/R)",
          references: "Institute director recommendation"
        },
        desc: "Applied educational research assistantship evaluating national classroom intervention trials, standard testing psychometrics, and teacher retention patterns across Switzerland."
      },
      {
        id: 1625,
        title: "Canton of Bern Bilingual School Pedagogy Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.phbern.ch/dienstleistungen/berufspraktische-ausbildung",
        funding: "CHF 1,500/month Swiss teaching practicum compensation",
        status: "Semester placement cycles",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Spring placement)",
        fee: "CHF 0",
        tuition: "Included in semester enrollment",
        requirements: {
          gpa: "Good academic standing in pedagogical coursework",
          ielts: "German C1 and French/English B2 minimum",
          gre: "Not required",
          papers: "Specialized Swiss police criminal background check",
          references: "Faculty practicum mentor authorization"
        },
        desc: "Twelve-week clinical teaching practicum in bilingual schools across the Canton of Bern, evaluating immersive language acquisition and dual-language instructional tools."
      },
      {
        id: 1626,
        title: "Postdoctoral Fellowship in Educational Neuroscience & Cognitive Development",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.phbern.ch/forschung",
        funding: "CHF 78,000 to CHF 85,000/year full Swiss postdoctoral salary plus social insurance",
        status: "Open vacancy",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CHF 0",
        tuition: "Salaried employee post",
        requirements: {
          gpa: "PhD in Neuroscience, Developmental Psychology, or Educational Biology",
          ielts: "C1/C2 English level",
          gre: "Not required",
          papers: "Track record of publications employing fMRI, EEG, or eye-tracking methodologies in learning contexts",
          references: "Three international academic referees"
        },
        desc: "Two-year postdoctoral appointment analyzing neural correlates of executive function, working memory load, and mathematics acquisition in developmental cohorts."
      },
      {
        id: 1627,
        title: "Master of Arts in Special Needs Education & Inclusive School Systems",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.phbern.ch/studiengaenge/master-schulische-heilpaedagogik",
        funding: "Cantonal tuition sponsorship awards (full tuition refund for serving teachers)",
        status: "Open for applications",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "CHF 100",
        tuition: "CHF 750/semester",
        requirements: {
          gpa: "Bachelor's degree in Education or related clinical field (min. 180 ECTS)",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Case study analysis on inclusive pedagogical accommodations",
          references: "School principal or clinical supervisor recommendation"
        },
        desc: "Comprehensive master's degree training pedagogical specialists in differentiated diagnostic assessment, autism spectrum accommodations, and multi-tiered support systems."
      }
    ],
    researchers: [
      {
        id: 714,
        name: "Dr. Caroline Villiger",
        title: "Professor of Language Education & Early Literacy Development",
        subject: "social-sciences",
        topics: ["Reading Intervention", "Multilingual Language Acquisition", "Family Literacy", "Classroom Interaction"],
        source: "https://www.phbern.ch/forschung/personen/caroline-villiger",
        recruiting: "Not verified",
        summary: "Dr. Villiger conducts large-scale longitudinal intervention studies evaluating early reading acquisition and vocabulary growth among linguistically diverse Swiss schoolchildren."
      },
      {
        id: 715,
        name: "Dr. Marco Galle",
        title: "Professor of School Development & Educational Governance",
        subject: "social-sciences",
        topics: ["School Leadership", "Teacher Professional Development", "Educational Policy", "Organizational Change"],
        source: "https://www.phbern.ch/forschung/personen",
        recruiting: "Not verified",
        summary: "Dr. Galle examines the organizational dynamics of Swiss schools, researching how leadership styles, digital tools, and cantonal reform policies impact teacher well-being and student achievement."
      },
      {
        id: 716,
        name: "Dr. Thomas Dürst",
        title: "Professor of Science Education & STEM Instructional Design",
        subject: "physics",
        topics: ["Physics Education", "Conceptual Change in Science", "Inquiry-Based Learning", "Lab Experimentation"],
        source: "https://www.phbern.ch/forschung/personen",
        recruiting: "Not verified",
        summary: "Dr. Dürst designs and evaluates interactive physics curricula for secondary schools, examining how visual representations and physical models foster conceptual understanding of electromagnetism and mechanics."
      }
    ]
  }
];
