export const batch26Part2 = [
  // 11. Canada: Burman University (Row 17)
  {
    institution: "Burman University",
    shortName: "Burman",
    slug: "burman-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Lacombe, Alberta, Canada",
    sourceRow: 17,
    website: "https://burmanu.ca",
    headline: "Burman University: Biology, Behavioral Science & Scholarships Guide",
    description: "Explore Burman University admissions, academic merit scholarships, undergraduate biology research awards, education degrees, tuition fees, and faculty profiles in Alberta.",
    heroEyebrow: "Lacombe, Central Alberta · Independent Alberta Degree-Granting University · Parkland Ecology",
    overview: "Burman University is an accredited independent degree-granting university located on a scenic hilltop campus in Lacombe, Alberta. Founded in 1907, Burman offers rigorous programs in the natural sciences, behavioral sciences, business, and education, emphasizing undergraduate laboratory research, small class sizes, and ethical community service.",
    admissions: {
      masters: "Baccalaureate degree from an accredited institution with a minimum cumulative GPA of 3.0 on a 4.0 scale (or equivalent) in relevant coursework.",
      phd: "Not currently offering independent doctoral degrees; collaborative research transfer and master's credentials with partner Canadian universities.",
      language: "TOEFL iBT 83 (minimum 20 in each component), IELTS Academic 6.5 (no individual score below 6.0), or Canadian Academic English Language (CAEL) 70.",
      proposal: "Required for senior honours and research fellowships: 1,500-word research statement aligned with an active Burman faculty laboratory mentor.",
      appFee: "$100 CAD non-refundable application fee for North American students ($150 CAD for international applicants).",
      documents: "Official secondary and post-secondary transcripts, two confidential reference letters, personal statement of purpose, and proof of English proficiency."
    },
    tuitionText: "Tuition is approximately $525 CAD per credit hour ($15,750 CAD per full-time academic year for 30 credits). International students pay standard tuition plus an international differential fee. Burman awards over $1.2 million annually in entrance scholarships, leadership awards up to $6,000 CAD, and undergraduate research fellowships.",
    opportunities: [
      {
        id: 1628,
        title: "Burman University President's Academic Excellence Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        source: "https://burmanu.ca/scholarships-and-awards",
        funding: "$6,000 CAD renewable annual tuition grant and research mentorship access",
        status: "Open for 2027 intake",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual scholarship deadline)",
        fee: "$100 CAD",
        tuition: "$15,750 CAD/year (before scholarship offset)",
        requirements: {
          gpa: "Minimum 85% / 3.7 GPA on high school or transfer transcripts",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Demonstrated academic excellence and personal leadership statement",
          references: "Two academic recommendation letters"
        },
        desc: "Prestigious entrance scholarship recognizing high-achieving scholars entering biology, psychology, or natural sciences degree programs at Burman University."
      },
      {
        id: 1629,
        title: "Bachelor of Science in Biology: Parkland Ecology & Cellular Genetics Route",
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Master's",
        source: "https://burmanu.ca/programs/biology",
        funding: "Undergraduate laboratory assistantships ($3,200 CAD/term)",
        status: "Applications open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Fall 2027 cohort)",
        fee: "$100 CAD ($150 international)",
        tuition: "$16,200 CAD/year",
        requirements: {
          gpa: "Grade 12 graduation with 65%+ in Biology 30, Chemistry 30, and Math 30-1",
          ielts: "IELTS 6.5 with no band below 6.0",
          gre: "Not required",
          papers: "High school transcripts and scientific motivation statement",
          references: "One academic reference letter"
        },
        desc: "Four-year comprehensive science degree featuring hands-on field biology in the Alberta Aspen Parkland ecosystem, molecular genetics laboratories, and senior thesis research."
      },
      {
        id: 1630,
        title: "Central Alberta Aquatic and Wetland Ecosystems Research Fellowship",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Research",
        source: "https://burmanu.ca/research",
        funding: "$6,500 CAD summer research fellowship plus field instrumentation stipend",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$0",
        tuition: "Full grant funding",
        requirements: {
          gpa: "Minimum 3.2 GPA in ecology, biology, or environmental science coursework",
          ielts: "Campus enrolled student",
          gre: "Not required",
          papers: "Two-page research project abstract on wetland water quality or aquatic biodiversity",
          references: "Endorsement from faculty research supervisor"
        },
        desc: "Ten-week field and laboratory research fellowship sampling central Alberta lakes, tracking freshwater invertebrate populations, and assessing agricultural nutrient runoff."
      },
      {
        id: 1631,
        title: "Lacombe Community Behavioral Science and Mental Health Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://burmanu.ca/programs/behavioural-science",
        funding: "$2,800 CAD semester practicum stipend",
        status: "Semester placement cycles",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Winter 2027 placement)",
        fee: "$0",
        tuition: "Integrated degree credit",
        requirements: {
          gpa: "Declared major in Behavioral Science or Psychology with GPA 2.7+",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Police information check and vulnerable sector clearance",
          references: "Departmental practicum coordinator approval"
        },
        desc: "Applied 300-hour professional internship embedded in youth centers, crisis intervention facilities, and family counseling agencies in the Red Deer and Lacombe regions."
      },
      {
        id: 1632,
        title: "Burman Faculty Research Grant in Neurobiology and Stress Physiology",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Fellowship/Job",
        source: "https://burmanu.ca/research-committee",
        funding: "$14,000 CAD per annum research fellowship plus conference presentation grant",
        status: "Open recruitment",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$0",
        tuition: "Research appointment",
        requirements: {
          gpa: "Honours degree in Neuroscience, Biology, or Experimental Psychology with GPA 3.5+",
          ielts: "IELTS 7.0 or TOEFL 95",
          gre: "Not required",
          papers: "Research writing sample analyzing endocrine or autonomic biomarkers of stress",
          references: "Two academic referee letters"
        },
        desc: "One-year renewable research fellowship conducting physiological monitoring, cortisol assays, and cognitive stress resilience experiments in Burman's behavioral physiology lab."
      },
      {
        id: 1633,
        title: "Bachelor of Education in Elementary and Secondary STEM Teaching",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        source: "https://burmanu.ca/programs/education",
        funding: "Alberta Education Excellence bursary eligibility ($2,500 CAD)",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$100 CAD",
        tuition: "$15,750 CAD/year",
        requirements: {
          gpa: "Completed prior degree or university transfer credits with GPA 2.7+",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Philosophy of education essay and youth mentoring experience",
          references: "Two character and academic references"
        },
        desc: "Teacher certification program accredited by the Alberta Government, preparing future educators with hands-on school practicums, digital pedagogy, and STEM curriculum design."
      },
      {
        id: 1634,
        title: "Burman University Leadership and Campus Community Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://burmanu.ca/financial-aid",
        funding: "$4,000 CAD annual tuition award",
        status: "Annual selection",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "$100 CAD",
        tuition: "$15,750 CAD/year (before award)",
        requirements: {
          gpa: "Minimum 80% / 3.3 GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Documentation of 100+ hours of community volunteer leadership",
          references: "Community leader or pastor letter of recommendation"
        },
        desc: "Community leadership scholarship recognizing matriculating students who demonstrate exceptional service, ethical initiative, and commitment to civil society."
      }
    ],
    researchers: [
      {
        id: 717,
        name: "Dr. Sandra Rehling",
        title: "Professor of Biology & Chair of Science Department",
        subject: "biology",
        topics: ["Parkland Botany", "Plant Physiology", "Wetland Ecology", "Conservation Biology"],
        source: "https://burmanu.ca/faculty/sandra-rehling",
        recruiting: "Not verified",
        summary: "Dr. Rehling investigates plant species adaptations and conservation biology in the central Alberta parkland biome, analyzing botanical biodiversity in protected wetland zones."
      },
      {
        id: 718,
        name: "Dr. Klaus Irrgang",
        title: "Professor of Behavioral Science & Psychology",
        subject: "social-sciences",
        topics: ["Stress Physiology", "Autonomic Nervous System", "Resilience Metrics", "Health Psychology"],
        source: "https://burmanu.ca/faculty/klaus-irrgang",
        recruiting: "Not verified",
        summary: "Dr. Irrgang researches physiological markers of psychological stress, focusing on heart rate variability, biofeedback mechanisms, and mental health interventions in young adults."
      },
      {
        id: 719,
        name: "Dr. Shirley Freed",
        title: "Adjunct Professor of Education & Leadership",
        subject: "social-sciences",
        topics: ["Educational Leadership", "Online Learning Communities", "Qualitative Research Methods", "School Governance"],
        source: "https://burmanu.ca/faculty/shirley-freed",
        recruiting: "Not verified",
        summary: "Dr. Freed is an acclaimed researcher in transformative educational leadership and virtual learning communities, authoring foundational frameworks on collaborative teacher development."
      }
    ]
  },

  // 12. Australia: Federation University Australia (Row 164)
  {
    institution: "Federation University Australia",
    shortName: "Federation",
    slug: "federation-university-australia",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Ballarat, Churchill & Berwick, Victoria, Australia",
    sourceRow: 164,
    website: "https://www.federation.edu.au",
    headline: "Federation University Australia: Mining, AI & Australian RTP Scholarships",
    description: "Explore Federation University Australia admissions, Australian Government RTP doctoral scholarships (AUD $35,000/yr), Technology Park research, fees, and faculty profiles.",
    heroEyebrow: "Ballarat & Gippsland, Victoria · Established 1870 · Regional Innovation & Cyber Security",
    overview: "Federation University Australia (FedUni) is one of Australia's premier regional dual-sector universities, with historic roots in the Ballarat School of Mines established in 1870. Famous for hosting the Ballarat Technology Park with IBM and global enterprise partners, FedUni delivers world-class research in artificial intelligence, carbon transition, mining geotechnical engineering, and nursing.",
    admissions: {
      masters: "Completed recognized bachelor's degree from an Australian university or international equivalent with a minimum credit average (65%+ or GPA 4.5/7.0).",
      phd: "First-Class Honours (H1) or research master's degree with a demonstrated track record of scholarly peer-reviewed publications.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all bands), PTE Academic 58+, or TOEFL iBT 79 (writing minimum 21); Health disciplines require 7.0 overall.",
      proposal: "Required for Higher Degree by Research (PhD/MPhil): 2,000-word research proposal aligned with an active Federation University research center.",
      appFee: "AUD $0 when applying directly online via the Federation University portal.",
      documents: "Certified academic transcripts, degree awards, research proposal, CV, English language test certificate, and two referee reports."
    },
    tuitionText: "Tuition for international graduate students ranges from AUD $27,000 to $33,500 per year. The Australian Government Research Training Program (RTP) provides full tuition fee offsets and annual living stipends of AUD $35,000 for domestic and international PhD candidates.",
    opportunities: [
      {
        id: 1635,
        title: "Australian Government Research Training Program (RTP) Stipend at Federation",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        source: "https://federation.edu.au/research/research-degrees/scholarships",
        funding: "AUD $35,000/year tax-free living stipend, full tuition fee offset, and relocation allowance",
        status: "Annual selection",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 (For 2027 research intakes)",
        fee: "AUD $0",
        tuition: "100% waived under Commonwealth RTP scheme",
        requirements: {
          gpa: "First-Class Honours (H1) or Master by Research with distinction",
          ielts: "IELTS 6.5 (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "First-author peer-reviewed paper in recognized conference or journal",
          references: "Two academic referee letters assessing doctoral capacity"
        },
        desc: "Prestigious Commonwealth scholarship funding exceptional domestic and international doctoral scholars conducting research across Federation University institutes."
      },
      {
        id: 1636,
        title: "Doctor of Philosophy (PhD) in Applied Cyber Security & Threat Intelligence",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        source: "https://federation.edu.au/research/research-centres/ciais",
        funding: "Cyber Security CRC Collaborative Doctoral Fellowship (AUD $38,000/year)",
        status: "Open for 2027 entry",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "AUD $0",
        tuition: "AUD $31,500/year (fully covered by CRC fellowship)",
        requirements: {
          gpa: "Honours degree in Computer Science, Software Engineering, or Information Security",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis or publication in network intrusion detection or cryptography",
          references: "Two academic referee letters"
        },
        desc: "Doctoral research conducted within the Centre for Informatics and Applied Optimization (CIAO), investigating intrusion detection, malware telemetry, and cloud security architectures."
      },
      {
        id: 1637,
        title: "Master of Engineering Technology (Renewable Energy & Electrical Power)",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://federation.edu.au/study/courses/master-of-engineering-technology",
        funding: "Federation Global Excellence Scholarship (20% fee reduction)",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1 start)",
        fee: "AUD $0",
        tuition: "AUD $32,200/year (AUD $25,760 after 20% scholarship)",
        requirements: {
          gpa: "Bachelor of Engineering in Electrical, Mechanical, or Renewable Energy",
          ielts: "IELTS 6.5 with no band below 6.0",
          gre: "Not required",
          papers: "Engineering curriculum syllabus and capstone project documentation",
          references: "Two academic recommendation letters"
        },
        desc: "Engineers Australia-accredited master's program specializing in grid integration of wind and solar farms, power storage systems, and regional microgrid control."
      },
      {
        id: 1638,
        title: "Future Regions Research Centre (FRRC) Carbon Transition Assistantship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Research",
        source: "https://federation.edu.au/research/research-centres/future-regions-research-centre",
        funding: "AUD $30,000/year research stipend plus laboratory consumables funding",
        status: "Annual selection",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "AUD $0",
        tuition: "Tuition waiver included",
        requirements: {
          gpa: "Enrolled in graduate engineering or environmental science degree",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Demonstrated analytical skills in soil remediation or mine rehabilitation",
          references: "FRRC research director endorsement"
        },
        desc: "Applied environmental research analyzing brown coal mine rehabilitation, landform stability, and renewable energy economic transitions in Victoria's Latrobe Valley."
      },
      {
        id: 1639,
        title: "Ballarat Technology Park IBM Co-operative Computing Practicum",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        source: "https://federation.edu.au/industry-and-community/ballarat-technology-park",
        funding: "AUD $1,400/month industry stipend plus professional mentorship",
        status: "Semester placement cycles",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Semester 1 2027 placement)",
        fee: "AUD $0",
        tuition: "Degree-enrolled credit unit",
        requirements: {
          gpa: "Credit average (GPA 5.0+) in graduate computing coursework",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Resume and technical coding assessment",
          references: "Federation University placement director approval"
        },
        desc: "Six-month professional cooperative education placement embedded at IBM within Ballarat Technology Park, engineering enterprise cloud services and cybersecurity tools."
      },
      {
        id: 1640,
        title: "Federation Postdoctoral Fellowship in Geotechnical Engineering & Mine Safety",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Fellowship/Job",
        source: "https://federation.edu.au/research",
        funding: "AUD $96,000 to $105,000 annual salary plus 17% employer superannuation",
        status: "Open recruitment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "AUD $0",
        tuition: "Employment appointment (zero tuition)",
        requirements: {
          gpa: "PhD in Geotechnical, Civil, or Mining Engineering",
          ielts: "Fluent professional English",
          gre: "Not required",
          papers: "Demonstrated publication record in rock mechanics or slope stability modeling",
          references: "Three academic referee letters"
        },
        desc: "Two-year postdoctoral fellowship developing numerical simulation models and seismic sensor networks for open-pit and underground mine slope stability."
      },
      {
        id: 1641,
        title: "Master of Health (Health Informatics & Digital Health Leadership)",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Master's",
        source: "https://federation.edu.au/study/courses/master-of-health",
        funding: "Regional Health Innovation bursaries (AUD $5,000)",
        status: "Open for applications",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "AUD $0",
        tuition: "AUD $28,900/year international",
        requirements: {
          gpa: "Bachelor's degree in health science, nursing, or information technology",
          ielts: "IELTS 6.5 (minimum 6.0 in each subtest)",
          gre: "Not required",
          papers: "Professional CV detailing clinical or health administration work",
          references: "Two professional reference letters"
        },
        desc: "Postgraduate degree focusing on electronic medical record implementation, telehealth architectures, clinical data governance, and predictive healthcare analytics."
      }
    ],
    researchers: [
      {
        id: 720,
        name: "Dr. Adil Bagirov",
        title: "Professor of Optimization & Chair in Applied Mathematics",
        subject: "mathematics",
        topics: ["Nonsmooth Optimization", "Cluster Analysis", "Machine Learning Algorithms", "Data Mining"],
        source: "https://federation.edu.au/staff/research/adil-bagirov",
        recruiting: "Not verified",
        summary: "Dr. Bagirov is a global authority on nonsmooth optimization and numerical methods, authoring key algorithms for derivative-free clustering and high-dimensional classification."
      },
      {
        id: 721,
        name: "Dr. Joerg Mattner",
        title: "Professor of Geotechnical Engineering & Director of Mine Safety Research",
        subject: "engineering",
        topics: ["Rock Mechanics", "Slope Stability", "Open-Pit Mining Simulation", "Seismic Monitoring"],
        source: "https://federation.edu.au/research/research-centres",
        recruiting: "Not verified",
        summary: "Dr. Mattner leads research in computational geomechanics, analyzing acoustic emissions and microseismic telemetry to predict failure in complex rock mass structures."
      },
      {
        id: 722,
        name: "Dr. Colette Browning",
        title: "Professor of Primary Health Care & Health Aging",
        subject: "social-sciences",
        topics: ["Chronic Disease Self-Management", "Aging Populations", "Rural Health Delivery", "Behavioral Medicine"],
        source: "https://federation.edu.au/staff/research",
        recruiting: "Not verified",
        summary: "Dr. Browning researches primary healthcare interventions and behavioral medicine models designed to manage chronic disease in aging and regional populations."
      }
    ]
  },

  // 13. Germany: FernUniversität in Hagen (Row 257)
  {
    institution: "FernUniversität in Hagen",
    shortName: "FernUni Hagen",
    slug: "fernuniversitaet-in-hagen",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Hagen, North Rhine-Westphalia, Germany",
    sourceRow: 257,
    website: "https://www.fernuni-hagen.de",
    headline: "FernUniversität in Hagen: Computer Science, Mathematics & PhD Research Guide",
    description: "Discover FernUniversität in Hagen admissions, fully funded doctoral research positions (TV-L E13), tuition-free master's degrees in computer science, and faculty profiles.",
    heroEyebrow: "Hagen, North Rhine-Westphalia · Germany's State Distance Research University · 70,000+ Students",
    overview: "FernUniversität in Hagen is Germany's only state-funded distance-education research university, founded in 1974. With over 70,000 students, full doctoral and habilitation granting rights, and regional study centers across Germany, Austria, Switzerland, and Europe, FernUni Hagen is a powerhouse in theoretical computer science, mathematics, economics, psychology, and law.",
    admissions: {
      masters: "Relevant Bachelor's degree (minimum 180 ECTS) from a recognized university with an academic grade of 2.5 or better on the German grading scale.",
      phd: "Master's degree (Master of Science, Master of Arts, or German Diplom) with above-average grades in relevant discipline and oral faculty examination.",
      language: "German C1 (DSH-2, TestDaF 4x4, or Goethe-Zertifikat C1) for German-taught degrees; English B2/C1 for international doctoral and computer science research groups.",
      proposal: "Required for doctoral admission: 3,000-word research proposal agreed upon with an appointed FernUniversität faculty chair holder.",
      appFee: "€0 (No application fee for direct admission via FernUni portal).",
      documents: "Bachelor's/Master's certificates with certified German or English translations, transcripts of records, curriculum vitae, and statement of research intent."
    },
    tuitionText: "Tuition is largely free of tuition fees in accordance with German public university law. Students pay only a modest course material fee (Materialbezugsgebühr) of approximately €11 per ECTS credit plus a semester administrative fee of €60. Salaried doctoral positions (Wissenschaftliche Mitarbeiter) receive standard TV-L E13 salaries (€50,000–€55,000/year gross).",
    opportunities: [
      {
        id: 1642,
        title: "Salaried Doctoral Research Associate (PhD) in Theoretical Computer Science",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        source: "https://www.fernuni-hagen.de/universitaet/stellen/stellenangebote.shtml",
        funding: "TV-L E13 public service salary (€50,500–€56,000/year gross) with zero tuition fees",
        status: "Open vacancy",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (For Spring 2027 start)",
        fee: "€0",
        tuition: "€0 (Salaried state employment)",
        requirements: {
          gpa: "Master of Science in Computer Science or Mathematics with distinction",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Master's thesis in algorithm complexity, graph theory, or automated deduction",
          references: "Two academic referee letters from university professors"
        },
        desc: "Three-to-four year salaried doctoral position in the Faculty of Mathematics and Computer Science, researching algorithmic complexity, parameterized algorithms, and computational logic."
      },
      {
        id: 1643,
        title: "DAAD Doctoral Completion Scholarship at FernUniversität in Hagen",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.fernuni-hagen.de/internationales/service/stipendien.shtml",
        funding: "€1,200/month living grant for up to 6 months to complete doctoral thesis",
        status: "Bi-annual selection",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "€0",
        tuition: "€0",
        requirements: {
          gpa: "Accepted doctoral candidate at FernUniversität with draft thesis submitted",
          ielts: "German C1 or English C1",
          gre: "Not required",
          papers: "Doctoral dissertation chapter draft and completion timeline",
          references: "Detailed supervisor evaluation letter"
        },
        desc: "DAAD-funded completion grant supporting international doctoral candidates during the final writing and defense phase of their doctoral dissertation."
      },
      {
        id: 1644,
        title: "Master of Science in Practical Computer Science and Software Engineering",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://www.fernuni-hagen.de/mi/studium/msc_informatik/",
        funding: "Tuition-free public education (only standard €11/ECTS course fee applies)",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Summer semester 2027 start)",
        fee: "€0",
        tuition: "€1,320 total for entire 120 ECTS degree (zero tuition surcharge)",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with minimum 90 ECTS in computing",
          ielts: "German C1 (DSH-2 or TestDaF 4x4)",
          gre: "Not required",
          papers: "Detailed academic transcript demonstrating programming and math prerequisites",
          references: "Academic reference letters"
        },
        desc: "State-accredited master's program providing advanced specialization in distributed systems, software verification, compiler construction, and database theory."
      },
      {
        id: 1645,
        title: "Research Institute for Artificial Intelligence & Knowledge Representation Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        source: "https://www.fernuni-hagen.de/kogni/",
        funding: "€1,100/month scientific student assistant contract (HiWi)",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in MSc Computer Science or Mathematics",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Competence in knowledge graphs, non-monotonic reasoning, or Prolog/Python",
          references: "Chair holder endorsement"
        },
        desc: "Scientific research assistantship contributing to knowledge representation, semantic web ontologies, and belief revision algorithms within the Knowledge-Based Systems research group."
      },
      {
        id: 1646,
        title: "German Digital Education & E-Learning Technology Industry Practicum",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Internship",
        source: "https://www.fernuni-hagen.de/zli/",
        funding: "€1,000/month project allowance funded by Center for Learning and Innovation",
        status: "Semester placement cycles",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "€0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Completion of 30 ECTS in graduate computer science or media informatics",
          ielts: "German B2 and English B2",
          gre: "Not required",
          papers: "Demonstrated skills in web technologies, LMS plugins, or learning analytics",
          references: "FernUni academic supervisor approval"
        },
        desc: "Six-month practicum at the Center for Learning and Innovation (ZLI), designing adaptive AI tutoring tools and scalable digital testing systems for over 70,000 students."
      },
      {
        id: 1647,
        title: "Postdoctoral Research Fellowship in Cryptography & IT Security",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Fellowship/Job",
        source: "https://www.fernuni-hagen.de/mathinf/",
        funding: "TV-L E14 university salary (€58,000–€65,000/year gross) plus research budget",
        status: "Open recruitment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "€0",
        tuition: "Full public service salary",
        requirements: {
          gpa: "PhD in Cryptography, Information Security, or Mathematics",
          ielts: "Fluent English (C1)",
          gre: "Not required",
          papers: "Strong publication record in post-quantum cryptography or zero-knowledge proofs",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral research appointment investigating lattice-based post-quantum cryptographic primitives, homomorphic encryption, and secure multiparty computation."
      },
      {
        id: 1648,
        title: "Master of Science in Mathematical Economics and Operations Research",
        subject: "mathematics",
        subjects: ["mathematics", "social-sciences"],
        type: "Master's",
        source: "https://www.fernuni-hagen.de/mi/studium/msc_wirtschaftsmathematik/",
        funding: "State-funded zero tuition study",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€0",
        tuition: "€11/ECTS course fee (no tuition surcharge)",
        requirements: {
          gpa: "Bachelor's degree in Mathematics, Financial Mathematics, or Econometrics",
          ielts: "German C1",
          gre: "Not required",
          papers: "Transcripts documenting analysis, linear algebra, and probability theory",
          references: "Two academic referee letters"
        },
        desc: "Interdisciplinary master's degree preparing analysts in stochastic modeling, financial mathematics, linear and nonlinear optimization, and algorithmic game theory."
      }
    ],
    researchers: [
      {
        id: 723,
        name: "Dr. Jörg Desel",
        title: "Professor of Applied Computer Science & Formal Methods",
        subject: "computer-science",
        topics: ["Petri Nets", "Business Process Modeling", "Formal Verification", "Concurrency Theory"],
        source: "https://www.fernuni-hagen.de/aifb/ueber-uns/team/joerg.desel.shtml",
        recruiting: "Not verified",
        summary: "Dr. Desel is a leading German computer scientist specializing in Petri net theory, process mining, and formal verification of concurrent and asynchronous distributed software systems."
      },
      {
        id: 724,
        name: "Dr. Winfried Hochstättler",
        title: "Professor of Discrete Mathematics & Optimization",
        subject: "mathematics",
        topics: ["Matroid Theory", "Graph Coloring", "Combinatorial Optimization", "Network Flows"],
        source: "https://www.fernuni-hagen.de/diskrete-mathematik/team/winfried.hochstaettler.shtml",
        recruiting: "Not verified",
        summary: "Dr. Hochstättler conducts research in oriented matroids, structural graph theory, and combinatorial optimization, authoring seminal textbooks on discrete mathematics."
      },
      {
        id: 725,
        name: "Dr. Gabriele Kern-Isberner",
        title: "Honorary Professor of Information Engineering & Artificial Intelligence",
        subject: "computer-science",
        topics: ["Belief Revision", "Probabilistic Reasoning", "Non-Monotonic Logic", "Knowledge Representation"],
        source: "https://www.fernuni-hagen.de/kogni/team/",
        recruiting: "Not verified",
        summary: "Dr. Kern-Isberner is an internationally recognized researcher in cognitive reasoning, investigating non-monotonic logics, information conditionals, and formal belief dynamics."
      }
    ]
  },

  // 14. Italy: University of Insubria (Row 525)
  {
    institution: "University of Insubria",
    shortName: "UniInsubria",
    slug: "university-of-insubria",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Como & Varese, Lombardy, Italy",
    sourceRow: 525,
    website: "https://www.uninsubria.it",
    headline: "University of Insubria: Biotechnology, Physics & DSU Study Grants Guide",
    description: "Explore University of Insubria admissions, Lombardy DSU regional scholarships (€7,500+), English-taught master's degrees in computer science and biotechnology, fees, and faculty.",
    heroEyebrow: "Como & Varese, Lombardy · Top Ranked Young Italian University · Nanoscience Hub",
    overview: "The University of Insubria (Università degli Studi dell'Insubria) is an esteemed public research university located in Como and Varese in the scenic Italian lakes region of Lombardy. Renowned for world-leading research in quantum optics, structural biology, environmental sciences, and theoretical computer science, Insubria maintains strong ties with CERN and European research facilities.",
    admissions: {
      masters: "Three-year undergraduate degree (Laurea) or recognized international bachelor's degree evaluated via the national Universitaly pre-enrolment platform.",
      phd: "Master of Science (Laurea Magistrale) with competitive examination involving academic CV evaluation, research proposal assessment, and an oral interview (available online).",
      language: "B2 English certificate (IELTS Academic 6.0+, TOEFL iBT 78+, or Cambridge B2); Italian language proficiency not required for English-taught master's or PhDs.",
      proposal: "Required for doctoral applicants: 3,000-word research proposal formatted according to Insubria doctoral school guidelines.",
      appFee: "€30 application evaluation fee.",
      documents: "Bachelor's diploma, transcript of records, CIMEA Statement of Comparability or Declaration of Value (DoV), curriculum vitae, and passport copy."
    },
    tuitionText: "Tuition is based on family income (ISEE parificato), ranging from €156 regional fee to a maximum of approximately €2,400 per year. Regional DSU Lombardia scholarships provide eligible domestic and international students with full tuition waivers, free university housing in Como or Varese, and annual cash stipends of up to €7,500.",
    opportunities: [
      {
        id: 1649,
        title: "Lombardy Regional DSU Full Scholarship & Campus Housing Grant",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        source: "https://www.uninsubria.it/servizi/diritto-allo-studio-universitario-dsu",
        funding: "Full tuition waiver, free residence hall lodging in Como/Varese, daily meals, and up to €7,500/year cash stipend",
        status: "Annual selection",
        deadline: "2026-11-05",
        deadlineText: "November 5, 2026 (Annual DSU deadline)",
        fee: "€0",
        tuition: "€0 for DSU beneficiaries",
        requirements: {
          gpa: "Undergraduate degree with 70%+ academic average; family ISEE parificato < €25,000",
          ielts: "English B2 level (IELTS 6.0 or equivalent)",
          gre: "Not required",
          papers: "Verified foreign family income and real estate documentation legalized in Italian",
          references: "Insubria pre-admission verification"
        },
        desc: "Comprehensive regional welfare scholarship open to domestic and international students ensuring full access to higher education at Insubria regardless of financial background."
      },
      {
        id: 1650,
        title: "Doctor of Philosophy (PhD) in Chemical and Environmental Sciences",
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        type: "PhD",
        source: "https://www.uninsubria.it/post-laurea/dottorati-di-ricerca",
        funding: "Italian Ministry (MUR) doctoral fellowship (€16,243/year net stipend + 50% increase for research abroad)",
        status: "Open for 40th/41st Cycle",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "€30",
        tuition: "€0 (100% funded)",
        requirements: {
          gpa: "Master's degree in Chemistry, Environmental Science, or Materials Science",
          ielts: "IELTS 6.0+ or English medium of instruction certificate",
          gre: "Not required",
          papers: "3,000-word doctoral research project in environmental catalysis or green synthesis",
          references: "Two academic referee letters"
        },
        desc: "Three-year doctoral program researching atmospheric aerosol pollution, heterogeneous green catalysis, wastewater remediation, and advanced nanomaterials in Como."
      },
      {
        id: 1651,
        title: "Master of Science in Molecular and Industrial Biotechnology",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        source: "https://www.uninsubria.it/corsi-di-laurea/molecular-and-industrial-biotechnology",
        funding: "Insubria Excellence Scholarship for International Students (€5,000/year)",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Pre-enrolment deadline)",
        fee: "€30",
        tuition: "€156 to €2,400/year (means-tested via ISEE)",
        requirements: {
          gpa: "Bachelor's degree in Biotechnology, Biology, or Biochemistry (minimum 60 ECTS in biological sciences)",
          ielts: "IELTS 6.0 or CEFR B2",
          gre: "Not required",
          papers: "Degree transcript and lab experience documentation",
          references: "Two academic recommendation letters"
        },
        desc: "Two-year English-taught master's degree focusing on recombinant protein production, biocatalysis, structural biology, and molecular pharmacology."
      },
      {
        id: 1652,
        title: "Quantum Optics & Laser Spectroscopy Laboratory Research Assistantship",
        subject: "physics",
        subjects: ["physics"],
        type: "Research",
        source: "https://www.uninsubria.it/dipartimento-scienze-e-alta-tecnologia",
        funding: "€11,200/year research bursary (Borsa di Ricerca)",
        status: "Open recruitment",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "€0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in MSc Physics or Advanced Chemistry",
          ielts: "English B2 level",
          gre: "Not required",
          papers: "Research abstract in ultrafast laser physics or photon counting",
          references: "Endorsement from Insubria Quantum Optics group head"
        },
        desc: "Laboratory research assistantship analyzing quantum photon correlation, single-photon detectors, and non-classical states of light in collaboration with CERN and CNR."
      },
      {
        id: 1653,
        title: "Lombardy Biomedical & Diagnostic Industry Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        source: "https://www.uninsubria.it/stage-e-tirocini",
        funding: "€850/month industry internship allowance",
        status: "Open placement",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027 (Spring placement)",
        fee: "€0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Completion of 45 ECTS in graduate biotechnology or medicine",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Biological safety and biohazard handling certification",
          references: "Faculty internship coordinator authorization"
        },
        desc: "Six-month clinical diagnostics and pharmaceutical placement within biomedical enterprises in the Varese and Milan life sciences corridor."
      },
      {
        id: 1654,
        title: "Postdoctoral Fellowship in Structural Biology & Protein Crystallography",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Fellowship/Job",
        source: "https://www.uninsubria.it/post-laurea/assegni-di-ricerca",
        funding: "€25,000/year net salary (Assegno di Ricerca) plus health insurance",
        status: "Open recruitment",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "€0",
        tuition: "Salaried research post",
        requirements: {
          gpa: "PhD in Biochemistry, Structural Biology, or Biophysics",
          ielts: "C1 level English",
          gre: "Not required",
          papers: "First-author publications on X-ray crystallography or cryo-EM protein structures",
          references: "Three academic referee letters"
        },
        desc: "Two-year postdoctoral position determining atomic resolution structures of enzyme complexes involved in neurodegenerative pathways using synchrotron radiation."
      },
      {
        id: 1655,
        title: "Master of Science in Computer Science: Intelligent Systems & Data Analytics",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://www.uninsubria.it/corsi-di-laurea/computer-science",
        funding: "Insubria Two-Year Tuition Exemption for Top 10% Ranked Applicants",
        status: "Applications open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "€30",
        tuition: "€156 to €2,400/year (based on ISEE)",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Software Engineering, or Mathematics",
          ielts: "IELTS 6.0 or TOEFL 78",
          gre: "Not required",
          papers: "Coding portfolio and academic transcript of computer science coursework",
          references: "Two academic referee letters"
        },
        desc: "English-taught master's degree based in Como, exploring computer vision, natural language processing, cloud infrastructure, and cybersecurity."
      }
    ],
    researchers: [
      {
        id: 726,
        name: "Dr. Maria Bondani",
        title: "Associate Professor of Physics & Quantum Optics Researcher at CNR-IFN",
        subject: "physics",
        topics: ["Quantum Optics", "Mesoscopic Quantum States", "Photon Number Statistics", "Quantum Imaging"],
        source: "https://www.uninsubria.it/docenti/maria-bondani",
        recruiting: "Not verified",
        summary: "Dr. Bondani leads the Quantum Optics group at Insubria, developing non-classical states of light and high-precision photon-number resolving detectors for quantum sensing."
      },
      {
        id: 727,
        name: "Dr. Loredano Pollegioni",
        title: "Full Professor of Biochemistry & Head of Biotechnology Laboratory",
        subject: "biology",
        topics: ["Enzyme Engineering", "Biocatalysis", "D-Amino Acid Oxidase", "Protein Folding"],
        source: "https://www.uninsubria.it/docenti/loredano-pollegioni",
        recruiting: "Not verified",
        summary: "Dr. Pollegioni is an internationally recognized biochemist researching structure-function relationships of flavoenzymes and developing engineered biocatalysts for industrial biotechnology."
      },
      {
        id: 728,
        name: "Dr. Alberto Trombetta",
        title: "Professor of Computer Science & Cybersecurity",
        subject: "computer-science",
        topics: ["Access Control Systems", "Data Privacy", "Blockchain Security", "Intrusion Detection"],
        source: "https://www.uninsubria.it/docenti/alberto-trombetta",
        recruiting: "Not verified",
        summary: "Dr. Trombetta focuses on information security, formal policy verification, and decentralized identity management frameworks for cloud and healthcare networks."
      }
    ]
  },

  // 15. USA: Appalachian State University (Row 570)
  {
    institution: "Appalachian State University",
    shortName: "App State",
    slug: "appalachian-state-university",
    countryId: "usa",
    countryLabel: "USA",
    location: "Boone, North Carolina, USA",
    sourceRow: 570,
    website: "https://appstate.edu",
    headline: "Appalachian State University: Sustainable Technology & Graduate Guide",
    description: "Explore Appalachian State University admissions, graduate research assistantships ($14,000+), Master of Science in Appropriate Technology, tuition, and faculty in Boone, NC.",
    heroEyebrow: "Blue Ridge Mountains, North Carolina · UNC System · National Leader in Clean Energy",
    overview: "Appalachian State University (App State), nestled in the Blue Ridge Mountains of Boone, North Carolina, is a nationally recognized public master's and doctoral research university within the University of North Carolina system. Renowned as a pioneer in sustainable energy technology, environmental science, building science, and mountain ecology, App State fosters deep environmental stewardship.",
    admissions: {
      masters: "Baccalaureate degree from a regionally accredited US college or university (or recognized international equivalent) with a minimum cumulative GPA of 3.0 on a 4.0 scale.",
      phd: "Master's degree in relevant discipline; competitive evaluation of academic credentials, writing sample, and research proposal.",
      language: "TOEFL iBT 79 (minimum 18 in each section), IELTS Academic 6.5 (minimum 6.0 in all bands), or Duolingo English Test 110+.",
      proposal: "Required for thesis-track master's and doctoral programs: 1,500–2,000 word statement of research interests aligned with an App State graduate faculty mentor.",
      appFee: "$65 USD non-refundable graduate application fee.",
      documents: "Official post-secondary academic transcripts, three confidential reference letters, curriculum vitae, and personal statement of purpose."
    },
    tuitionText: "Tuition and mandatory fees are approximately $7,900 USD per year for North Carolina in-state graduate students and $22,400 USD per year for out-of-state and international students. App State offers Graduate Teaching and Research Assistantships (GTRAs) providing stipends from $12,000 to $16,000 USD per year plus full out-of-state tuition remissions.",
    opportunities: [
      {
        id: 1656,
        title: "Appalachian State Graduate Teaching and Research Assistantship (GTRA)",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Scholarship",
        source: "https://graduate.appstate.edu/en/funding-and-costs/assistantships",
        funding: "$14,000/year living stipend plus full out-of-state tuition remission scholarship",
        status: "Annual competition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Priority funding review)",
        fee: "$65 USD",
        tuition: "Full out-of-state tuition scholarship provided",
        requirements: {
          gpa: "Minimum 3.2 undergraduate GPA in engineering, science, or related discipline",
          ielts: "IELTS 6.5 overall or TOEFL 79",
          gre: "Optional for most departments",
          papers: "Statement of research interests in renewable energy or environmental science",
          references: "Three academic letters of recommendation"
        },
        desc: "Comprehensive graduate assistantship package providing full tuition support and monthly stipends for students conducting teaching and laboratory research at App State."
      },
      {
        id: 1657,
        title: "Master of Science in Technology (Appropriate Technology & Renewable Energy)",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://technology.appstate.edu/academics/graduate-programs",
        funding: "Departmental research assistantships ($14,500/year) and lab fee waivers",
        status: "Applications open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Fall 2027 entry)",
        fee: "$65 USD",
        tuition: "$22,400/year international; $7,900/year in-state",
        requirements: {
          gpa: "Bachelor's degree in Engineering, Technology, Environmental Science, or Physics",
          ielts: "IELTS 6.5 with no band below 6.0",
          gre: "Not required",
          papers: "Technical writing sample detailing renewable energy experience",
          references: "Three academic or professional recommendation letters"
        },
        desc: "Pioneering graduate program focusing on photovoltaic systems, wind turbine engineering, micro-hydro power, bioenergy, and net-zero sustainable architecture."
      },
      {
        id: 1658,
        title: "Doctor of Education (EdD) in Educational Leadership & Higher Education Administration",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://doctoral.appstate.edu",
        funding: "Doctoral graduate assistantships ($16,000/year) plus tuition scholarship",
        status: "Open for 2027 cohort",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$65 USD",
        tuition: "$22,400/year (fully covered for funded graduate assistants)",
        requirements: {
          gpa: "Master's degree with minimum 3.5 graduate GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Optional",
          papers: "Scholarly writing sample and doctoral dissertation concept paper",
          references: "Three professional and academic letters of reference"
        },
        desc: "Interdisciplinary doctoral program preparing educational executives, policy researchers, and university leaders to spearhead systemic institutional reform."
      },
      {
        id: 1659,
        title: "Southern Appalachian Mountain Climate & Ecology Research Assistantship",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Research",
        source: "https://biology.appstate.edu",
        funding: "$13,500/year research stipend plus field station lodging",
        status: "Annual selection",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$0",
        tuition: "Enrolled graduate position",
        requirements: {
          gpa: "Enrolled in App State Master of Science in Biology",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Research abstract in alpine plant ecology or forest carbon flux",
          references: "Faculty research advisor endorsement"
        },
        desc: "High-altitude environmental research utilizing App State's Blue Ridge research stations to monitor microclimate shifts, cloud immersion, and forest canopy respiration."
      },
      {
        id: 1660,
        title: "North Carolina Clean Energy Technology Center Industrial Practicum",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        source: "https://energy.appstate.edu",
        funding: "$3,500 USD semester internship stipend",
        status: "Semester placement cycles",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "$0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Good academic standing in App State technology or environmental graduate program",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "OSHA safety certification and technical project dossier",
          references: "Academic advisor recommendation"
        },
        desc: "Hands-on engineering practicum conducting commercial solar photovoltaic commissioning, energy auditing, and building envelope blower-door testing across North Carolina."
      },
      {
        id: 1661,
        title: "Postdoctoral Fellowship in Alpine Atmospheric Science & Meteorology",
        subject: "physics",
        subjects: ["physics", "environment"],
        type: "Fellowship/Job",
        source: "https://geo.appstate.edu",
        funding: "$62,000 USD annual salary plus comprehensive university benefits",
        status: "Open recruitment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$0",
        tuition: "Salaried employee position",
        requirements: {
          gpa: "PhD in Atmospheric Science, Meteorology, or Environmental Physics",
          ielts: "Fluent English (C1/C2)",
          gre: "Not required",
          papers: "Track record of publications analyzing precipitation microphysics or radar meteorology",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral position operating the App State high-elevation weather observation network, analyzing orographic precipitation mechanisms and snowpack hydrology."
      },
      {
        id: 1662,
        title: "Master of Science in Computer Science: Data Science & Cyber-Physical Systems",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://cs.appstate.edu",
        funding: "Graduate assistantships ($14,000/year) and lab fee waivers",
        status: "Applications open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Fall 2027 cohort)",
        fee: "$65 USD",
        tuition: "$22,400/year international; $7,900 in-state",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Software Engineering, or Mathematics (GPA 3.0+)",
          ielts: "IELTS 6.5 or TOEFL 79",
          gre: "Optional",
          papers: "Software development portfolio and coding project sample",
          references: "Three academic referee letters"
        },
        desc: "Advanced computing degree covering distributed cloud systems, real-time sensor networks, machine learning algorithms, and cyber-physical security."
      }
    ],
    researchers: [
      {
        id: 729,
        name: "Dr. Baker Perry",
        title: "Professor of Geography & Atmospheric Science & National Geographic Explorer",
        subject: "physics",
        topics: ["High-Altitude Meteorology", "Tropical Glaciology", "Orographic Precipitation", "Climate Extreme Events"],
        source: "https://geo.appstate.edu/faculty-staff/baker-perry",
        recruiting: "Not verified",
        summary: "Dr. Perry is an internationally acclaimed climatologist who led the installation of the world's highest weather stations on Mount Everest and across the tropical Andes."
      },
      {
        id: 730,
        name: "Dr. Jeremy Ferrell",
        title: "Associate Professor of Sustainable Technology & Renewable Energy",
        subject: "engineering",
        topics: ["Bioenergy Systems", "Anaerobic Digestion", "Solar Thermal Technology", "Micro-Hydro Systems"],
        source: "https://technology.appstate.edu/faculty-staff/jeremy-ferrell",
        recruiting: "Not verified",
        summary: "Dr. Ferrell investigates agricultural bioenergy systems, anaerobic digestion of food waste, and small-scale renewable microgrid integration in rural communities."
      },
      {
        id: 731,
        name: "Dr. Rahman Tashakkori",
        title: "Lowe's Distinguished Professor of Computer Science",
        subject: "computer-science",
        topics: ["Image Processing", "Sensor Networks", "Scientific Computing", "Bioinformatics"],
        source: "https://cs.appstate.edu/faculty-staff/rahman-tashakkori",
        recruiting: "Not verified",
        summary: "Dr. Tashakkori directs NSF-funded computational initiatives at App State, developing wireless sensor networks and image segmentation algorithms for biological telemetry."
      }
    ]
  },

  // 16. UK: Queen's University Belfast (Row 1284)
  {
    institution: "Queen's University Belfast",
    shortName: "Queen's Belfast",
    slug: "queens-university-belfast",
    countryId: "uk",
    countryLabel: "UK",
    location: "Belfast, Northern Ireland, United Kingdom",
    sourceRow: 1284,
    website: "https://www.qub.ac.uk",
    headline: "Queen's University Belfast: Cyber Security, Medicine & PhD Studentships",
    description: "Discover Queen's University Belfast (Russell Group) admissions, fully funded UKRI PhD studentships (£19,237/yr), CSIT cyber security research, tuition, and faculty in Northern Ireland.",
    heroEyebrow: "Belfast, Northern Ireland · Russell Group University · Global Cyber Security Hub (CSIT)",
    overview: "Queen's University Belfast (QUB), established in 1845 by Queen Victoria, is a prestigious member of the UK's elite Russell Group of research-intensive universities. Home to the UK's national Cyber Security Innovation Centre (CSIT), the Patrick G. Johnston Centre for Cancer Research, and the Institute for Global Food Security, Queen's produces internationally acclaimed scientific breakthroughs.",
    admissions: {
      masters: "First-class or upper second-class honours degree (2:1 or international equivalent / GPA 3.3+) from a recognized higher-education institution in a relevant subject.",
      phd: "Master's degree with merit or distinction (overall mark 60%+), plus a comprehensive 2,000-word doctoral research proposal aligned with a QUB academic supervisor.",
      language: "IELTS Academic 6.5 overall (minimum 5.5 in each component), TOEFL iBT 90 (minimum 18 in reading, 17 in listening, 20 in speaking, 17 in writing), or PTE Academic 62+.",
      proposal: "Required for doctoral admission: 2,000-word research proposal outlining research questions, literature context, methodology, and ethical implications.",
      appFee: "£0 (No application fee for direct online postgraduate applications via the Queen's portal).",
      documents: "Certified degree transcripts and certificates, two academic reference letters, research proposal, CV, and valid English proficiency test certificate."
    },
    tuitionText: "Tuition for international graduate students ranges from £20,800 to £26,500 per year for standard classroom and laboratory disciplines, and up to £40,000 for clinical programs. Queen's awards over 100 fully funded DfE and UKRI Doctoral Studentships annually covering full tuition fees and an annual tax-free living stipend of £19,237+.",
    opportunities: [
      {
        id: 1663,
        title: "UKRI & DfE Fully Funded Postgraduate Doctoral Studentship at Queen's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        source: "https://www.qub.ac.uk/Study/PostgraduateStudy/FundingandScholarships/Doctoral-Training-Partnerships/",
        funding: "100% tuition fee waiver plus £19,237/year tax-free stipend and £5,000 research travel grant",
        status: "Annual competition",
        deadline: "2027-01-22",
        deadlineText: "January 22, 2027 (Major funding round for 2027/28)",
        fee: "£0",
        tuition: "100% waived under UKRI / DfE scheme",
        requirements: {
          gpa: "First-class or upper second-class honours degree (2:1 minimum)",
          ielts: "IELTS 6.5 (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "High-quality 2,000-word research proposal matching QUB strategic research clusters",
          references: "Two academic referee letters from university professors"
        },
        desc: "Premier UK Research and Innovation doctoral scholarship offering full funding, tuition coverage, and research consumables for exceptional domestic and international doctoral scholars."
      },
      {
        id: 1664,
        title: "Doctor of Philosophy (PhD) at the Centre for Secure Information Technologies (CSIT)",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        source: "https://www.qub.ac.uk/ecit/CSIT/",
        funding: "CSIT Industry Doctoral Fellowship (£21,500/year enhanced stipend)",
        status: "Open for 2027 entry",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority consideration)",
        fee: "£0",
        tuition: "£23,800/year (100% covered by CSIT fellowship)",
        requirements: {
          gpa: "Master's degree in Computer Science, Cyber Security, or Electronic Engineering",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis or publication in network intrusion, malware forensics, or hardware security",
          references: "Two academic and technical referee letters"
        },
        desc: "Doctoral research within the UK's National Innovation Centre for Cyber Security, developing post-quantum cryptography, AI-driven threat mitigation, and hardware root-of-trust."
      },
      {
        id: 1665,
        title: "Master of Science in Cancer Medicine & Precision Oncology",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        source: "https://www.qub.ac.uk/courses/postgraduate-taught/cancer-medicine-msc/",
        funding: "Queen's International Postgraduate Excellence Scholarship (£5,000 fee reduction)",
        status: "Applications open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Rolling admissions)",
        fee: "£0",
        tuition: "£25,800/year international; £9,500 domestic",
        requirements: {
          gpa: "2:1 honours degree in Biomedical Sciences, Biology, Biochemistry, or Medicine",
          ielts: "IELTS 6.5 (no component below 5.5)",
          gre: "Not required",
          papers: "Personal statement detailing oncology research or clinical laboratory experience",
          references: "Two academic recommendation letters"
        },
        desc: "One-year intensive master's degree conducted within the Patrick G. Johnston Centre for Cancer Research, investigating tumor genomics, targeted therapeutics, and clinical biomarkers."
      },
      {
        id: 1666,
        title: "Institute for Global Food Security (IGFS) Advanced Food Safety Assistantship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Research",
        source: "https://www.qub.ac.uk/Research/GRI/InstituteforGlobalFoodSecurity/",
        funding: "£18,500/year research contract plus laboratory consumables allowance",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "£0",
        tuition: "Enrolled research student position",
        requirements: {
          gpa: "Enrolled in QUB postgraduate food chemistry or agricultural science",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Experience in mass spectrometry, chromatographic analysis, or food fraud detection",
          references: "IGFS research fellow recommendation"
        },
        desc: "Laboratory research post investigating point-of-care biosensors, isotopic food authentication, and mycotoxin contamination in global agricultural supply chains."
      },
      {
        id: 1667,
        title: "Titanic Quarter Innovation Hub Cyber Defense Industrial Practicum",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        source: "https://www.qub.ac.uk/ecit/",
        funding: "£1,400/month corporate intern compensation",
        status: "Semester placement cycles",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "£0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Completion of 60 CATS credits in QUB MSc Applied Cyber Security",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Technical coding profile and security clearance eligibility",
          references: "QUB industrial placement advisor approval"
        },
        desc: "Six-month professional cybersecurity placement embedded within global technology operations in Belfast's Titanic Quarter (e.g., Allstate, Citi, or BAE Systems)."
      },
      {
        id: 1668,
        title: "Queen's Postdoctoral Fellowship in Green Chemistry & Ionic Liquid Catalysis",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Fellowship/Job",
        source: "https://www.qub.ac.uk/schools/SchoolofChemistryandChemicalEngineering/",
        funding: "£36,000 to £44,000 per annum salary plus USS pension scheme",
        status: "Recruiting for 2027",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "£0",
        tuition: "Salaried employee position",
        requirements: {
          gpa: "PhD in Chemistry, Chemical Engineering, or Materials Science",
          ielts: "Fluent professional English (C1/C2)",
          gre: "Not required",
          papers: "Minimum three high-impact publications in green chemistry or heterogeneous catalysis",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral research appointment at the QUILL research center, pioneering novel ionic liquid solvents for plastic chemical recycling and CO2 capture."
      },
      {
        id: 1669,
        title: "Master of Science in Applied Cyber Security & Ethical Hacking",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://www.qub.ac.uk/courses/postgraduate-taught/applied-cyber-security-msc/",
        funding: "NCSC Certified Master's Bursaries and Queen's International Merit Awards",
        status: "Applications open",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "£0",
        tuition: "£24,700/year international; £9,500 domestic",
        requirements: {
          gpa: "2:1 honours degree in Computer Science, Mathematics, or Software Engineering",
          ielts: "IELTS 6.5 (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "Programming demonstration in C/Python and networking fundamentals",
          references: "Two academic referee letters"
        },
        desc: "National Cyber Security Centre (NCSC) fully certified master's degree exploring malware reverse engineering, network penetration testing, and cryptography."
      }
    ],
    researchers: [
      {
        id: 732,
        name: "Dr. Máire O'Neill",
        title: "Regius Professor of Electronics and Computer Engineering & Director of ECIT",
        subject: "computer-science",
        topics: ["Hardware Security", "Post-Quantum Cryptography", "Physical Unclonable Functions", "VLSI Security"],
        source: "https://pure.qub.ac.uk/en/persons/m%C3%A1ire-oneill",
        recruiting: "Not verified",
        summary: "Professor O'Neill is one of Europe's foremost authorities on hardware cryptography and post-quantum algorithm acceleration, directing the Institute of Electronics, Communications and Information Technology (ECIT)."
      },
      {
        id: 733,
        name: "Dr. Christopher Elliott",
        title: "Professor of Food Safety & Founder of Institute for Global Food Security (IGFS)",
        subject: "chemistry",
        topics: ["Food Authenticity", "Chemical Contaminants", "Biochip Array Technology", "Supply Chain Integrity"],
        source: "https://pure.qub.ac.uk/en/persons/chris-elliott",
        recruiting: "Not verified",
        summary: "Professor Elliott led the UK government's independent review into food supply systems following the horsemeat scandal, pioneering diagnostic biosensors to combat global food fraud."
      },
      {
        id: 734,
        name: "Dr. Mark Lawler",
        title: "Professor of Digital Health & Associate Pro-Vice-Chancellor",
        subject: "biology",
        topics: ["Cancer Genomics", "Precision Oncology", "Health Big Data", "Personalized Medicine"],
        source: "https://pure.qub.ac.uk/en/persons/mark-lawler",
        recruiting: "Not verified",
        summary: "Professor Lawler leads European initiatives in data-driven oncology, utilizing whole-genome sequencing and clinical data registries to personalize colorectal cancer immunotherapy."
      }
    ]
  },

  // 17. Japan: Health Sciences University of Hokkaido (Row 1640)
  {
    institution: "Health Sciences University of Hokkaido",
    shortName: "HSUH",
    slug: "health-sciences-university-of-hokkaido",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Tobetsu & Sapporo, Hokkaido, Japan",
    sourceRow: 1640,
    website: "https://www.hsu.ac.jp",
    headline: "Health Sciences University of Hokkaido: Medicine, Pharmacy & MEXT Guide",
    description: "Explore Health Sciences University of Hokkaido admissions, MEXT Japanese Government scholarships, dental and pharmaceutical doctoral programs, tuition, and faculty in Sapporo.",
    heroEyebrow: "Tobetsu & Sapporo, Hokkaido · Comprehensive Medical & Health Sciences Institution",
    overview: "Health Sciences University of Hokkaido (HSUH - Higashi Nippon Gakuen) is a leading private medical and healthcare university in northern Japan, with campuses in Tobetsu and Sapporo. Operating accredited faculties and graduate schools in Dentistry, Pharmaceutical Sciences, Nursing, Rehabilitation, and Psychological Sciences, HSUH trains premier biomedical clinicians and healthcare researchers.",
    admissions: {
      masters: "Completion of a 4-year undergraduate degree in pharmacy, nursing, biological science, or healthcare from an accredited institution (16 years of prior education).",
      phd: "Completion of a 6-year professional medical/dental/pharmacy degree or master's degree (18 years total education) with successful doctoral thesis proposal defense.",
      language: "JLPT N2/N1 required for clinical programs; CEFR B2 (IELTS 6.0+ or TOEFL 75+) accepted for laboratory-based doctoral research groups.",
      proposal: "Required for doctoral entry: 2,500-word research proposal formatted to HSUH Graduate School guidelines aligned with a confirmed supervising professor.",
      appFee: "¥30,000 JPY application screening fee.",
      documents: "Graduation diploma, academic transcripts, research proposal, health certificate, letters of recommendation, and Japanese or English language certification."
    },
    tuitionText: "Tuition is approximately ¥1,000,000 JPY to ¥1,400,000 JPY per year depending on the graduate school. International students are eligible for HSUH international tuition reductions (up to 50% waiver), and qualified candidates can secure Japanese Government (MEXT) University Recommendation Scholarships.",
    opportunities: [
      {
        id: 1670,
        title: "Japanese Government (MEXT) University Recommendation Scholarship at HSUH",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        source: "https://www.hsu.ac.jp/english/",
        funding: "Full tuition waiver, admission fee exemption, roundtrip airfare, and ¥144,000 JPY/month living stipend",
        status: "Annual selection",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (For October 2027 intake)",
        fee: "¥0 (for MEXT candidates)",
        tuition: "¥0 (funded by Japanese Ministry of Education)",
        requirements: {
          gpa: "Minimum 2.3 out of 3.0 on Japanese MEXT evaluation scale",
          ielts: "IELTS 6.0+ or TOEFL iBT 75+",
          gre: "Not required",
          papers: "Formal biomedical research plan matched with an HSUH graduate laboratory",
          references: "Dean's letter of recommendation from home university"
        },
        desc: "Prestigious national scholarship awarded to exceptional international scholars pursuing doctoral degrees in dentistry, pharmacy, or pharmaceutical biology at HSUH."
      },
      {
        id: 1671,
        title: "Doctor of Philosophy (PhD) in Pharmaceutical Sciences & Molecular Therapeutics",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "PhD",
        source: "https://www.hsu.ac.jp/english/graduate/pharmacy.html",
        funding: "HSUH Graduate Research Fellowship (¥75,000 JPY/month + 50% tuition waiver)",
        status: "Open for 2027 entry",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Spring 2027 entry)",
        fee: "¥30,000 JPY",
        tuition: "¥1,100,000 JPY/year (before tuition waiver)",
        requirements: {
          gpa: "Completed 6-year pharmacy degree or Master of Science in Chemistry/Biology",
          ielts: "IELTS 6.0 or TOEFL 75",
          gre: "Not required",
          papers: "Master's thesis and 4-page research plan on natural product synthesis or pharmacokinetics",
          references: "Two academic referee letters"
        },
        desc: "Four-year doctoral program investigating medicinal plant natural products from Hokkaido flora, organic synthesis, drug delivery nanotechnology, and cellular pharmacology."
      },
      {
        id: 1672,
        title: "Doctor of Philosophy (PhD) in Dental Science & Oral Biomaterials",
        subject: "biology",
        subjects: ["biology", "engineering"],
        type: "PhD",
        source: "https://www.hsu.ac.jp/english/graduate/dentistry.html",
        funding: "Dental Research Assistantship (¥80,000 JPY/month stipend)",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,200,000 JPY/year",
        requirements: {
          gpa: "Degree in Dental Surgery (BDS/DDS) or recognized master's degree in biomaterials",
          ielts: "TOEFL 75 or IELTS 6.0",
          gre: "Not required",
          papers: "Research proposal in bone tissue engineering or titanium surface modification",
          references: "Two recommendation letters from dental school faculty"
        },
        desc: "Doctoral research exploring biocompatible ceramic implants, periodontal tissue regeneration, oral microbiology, and 3D bioprinting for craniofacial reconstruction."
      },
      {
        id: 1673,
        title: "Hokkaido Medicinal Plant Bioactive Natural Products Research Assistantship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Research",
        source: "https://www.hsu.ac.jp/research/",
        funding: "¥60,000 JPY/month laboratory research stipend",
        status: "Annual selection",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in HSUH Graduate School of Pharmaceutical Sciences",
          ielts: "IELTS 5.5+ or TOEFL 70+",
          gre: "Not required",
          papers: "Demonstrated laboratory competence in NMR, LC-MS, or cell culture assays",
          references: "Laboratory professor endorsement"
        },
        desc: "Laboratory research assistantship isolating and characterizing novel bioactive secondary metabolites from northern Japanese indigenous flora for anticancer drug discovery."
      },
      {
        id: 1674,
        title: "Sapporo University Hospital Advanced Clinical Pharmacy Practicum",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        source: "https://www.hsu.ac.jp/hospital/",
        funding: "¥80,000 JPY/month clinical trainee allowance",
        status: "Open placement",
        deadline: "2026-11-25",
        deadlineText: "November 25, 2026",
        fee: "¥0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Enrolled in HSUH professional pharmacy or nursing graduate track",
          ielts: "Japanese JLPT N1 compulsory for clinical hospital contact",
          gre: "Not required",
          papers: "Immunization records and clinical pharmacy aptitude verification",
          references: "Hospital residency director approval"
        },
        desc: "Twenty-week clinical hospital rotation at HSUH University Hospital in Sapporo, participating in ward rounds, therapeutic drug monitoring, and clinical chemotherapy protocols."
      },
      {
        id: 1675,
        title: "JSPS Postdoctoral Fellowship at HSUH in Craniofacial Molecular Genetics",
        subject: "biology",
        subjects: ["biology"],
        type: "Fellowship/Job",
        source: "https://www.hsu.ac.jp/english/research/",
        funding: "¥362,000 JPY/month tax-free stipend, international travel grant, and research allowance",
        status: "Open recruitment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "¥0",
        tuition: "Full salary fellowship",
        requirements: {
          gpa: "PhD in Genetics, Molecular Biology, or Oral Biology",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Minimum two first-author publications on gene expression or developmental biology",
          references: "Three international academic referees"
        },
        desc: "Japan Society for the Promotion of Science (JSPS) fellowship supporting an international postdoctoral scholar investigating signal transduction pathways in embryonic craniofacial morphogenesis."
      },
      {
        id: 1676,
        title: "Master of Science in Rehabilitation Science & Physical Therapy Robotics",
        subject: "biology",
        subjects: ["biology", "engineering"],
        type: "Master's",
        source: "https://www.hsu.ac.jp/english/graduate/rehabilitation.html",
        funding: "HSUH International Student Tuition Reduction (30% waiver)",
        status: "Applications open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥950,000 JPY/year (¥665,000 JPY after 30% reduction)",
        requirements: {
          gpa: "Bachelor's degree in Physical Therapy, Occupational Therapy, or Bioengineering",
          ielts: "TOEFL 72 or IELTS 6.0",
          gre: "Not required",
          papers: "Undergraduate thesis or clinical biomechanics case report",
          references: "Two academic referee letters"
        },
        desc: "Two-year master's program analyzing neuromuscular motor control, robotic gait retraining exoskeletons, and functional recovery after stroke."
      }
    ],
    researchers: [
      {
        id: 735,
        name: "Dr. Yoshihiko Sugimoto",
        title: "Professor of Molecular Pharmacology & Pharmacokinetics",
        subject: "biology",
        topics: ["Prostaglandin Receptors", "Inflammation Biology", "Drug Discovery", "Lipid Mediators"],
        source: "https://www.hsu.ac.jp/english/faculty/pharmacy/",
        recruiting: "Not verified",
        summary: "Dr. Sugimoto is an internationally cited pharmacologist whose research elucidates the molecular signaling of prostaglandin E2 receptors in fever, inflammation, and vascular permeability."
      },
      {
        id: 736,
        name: "Dr. Kenichi Matsuzaka",
        title: "Professor of Oral Pathology & Tissue Engineering",
        subject: "biology",
        topics: ["Periodontal Regeneration", "Bone Morphogenetic Proteins", "Biomimetic Ceramics", "Stem Cells"],
        source: "https://www.hsu.ac.jp/english/faculty/dentistry/",
        recruiting: "Not verified",
        summary: "Dr. Matsuzaka investigates mesenchymal stem cell differentiation on nanofibrous scaffolds, designing novel biomimetic matrices for alveolar bone regeneration."
      },
      {
        id: 737,
        name: "Dr. Makoto Nishikiori",
        title: "Professor of Physical Therapy & Biomechanics",
        subject: "engineering",
        topics: ["Gait Analysis", "Motion Capture", "Robotic Rehabilitation", "Postural Control"],
        source: "https://www.hsu.ac.jp/english/faculty/rehabilitation/",
        recruiting: "Not verified",
        summary: "Dr. Nishikiori utilizes 3D optical motion capture and force plate telemetry to evaluate neuromuscular gait adaptations and design robotic assistive walking devices."
      }
    ]
  },

  // 18. Sweden: Marie Cederschiöld University (Row 1564)
  {
    institution: "Marie Cederschiöld University",
    shortName: "Marie Cederschiöld",
    slug: "marie-cederschiold-university",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    sourceRow: 1564,
    website: "https://www.mchs.se",
    headline: "Marie Cederschiöld University: Palliative Care, Social Work & Salaried PhD",
    description: "Explore Marie Cederschiöld University admissions, salaried Swedish PhD positions (SEK 33,000/mo), master's degrees in healthcare and civil society, tuition fees, and faculty in Stockholm.",
    heroEyebrow: "Södermalm & Sköndal, Stockholm · Established 1851 · Palliative Care & Civil Society",
    overview: "Marie Cederschiöld University (Marie Cederschiöld högskola - formerly Ersta Sköndal Bräcke University College), founded in 1851 in Stockholm, is an independent, non-profit Swedish higher-education institution with accredited doctoral granting authority. Famous for founding Sweden's first nursing and deaconess school, it is a national leader in palliative care, social work, ethics, and civil society research.",
    admissions: {
      masters: "Recognized Bachelor's degree (Swedish Kandidatexamen, 180 ECTS credits) in nursing, social work, public health, or related social/health science.",
      phd: "Master's degree (minimum 240 ECTS credits including an independent scientific thesis) with competitive selection based on research excellence and clinical insight.",
      language: "English 6 / English B (IELTS 6.5 with no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing); Swedish proficiency required for clinical nursing practice.",
      proposal: "Doctoral applications require a 3,000-word research proposal focused on palliative care, healthcare sciences, or social civil society studies.",
      appFee: "SEK 900 application fee paid via the national UniversityAdmissions.se portal (EU/EEA students exempt).",
      documents: "Bachelor's and master's certificates, official transcripts of records, proof of English language proficiency, CV, and statement of research purpose."
    },
    tuitionText: "Tuition is 100% free for citizens of Sweden, the EU, EEA, and Switzerland. For non-EU/EEA international students, master's tuition is approximately SEK 120,000 per academic year. All doctoral positions are salaried Swedish university contracts (starting at approximately SEK 33,000 per month with zero tuition and full social security benefits).",
    opportunities: [
      {
        id: 1677,
        title: "Salaried Swedish Doctoral Position (PhD) in Palliative Care and Healthcare Sciences",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "PhD",
        source: "https://www.mchs.se/om-oss/jobba-hos-oss/lediga-anstallningar.html",
        funding: "Salaried employee contract (SEK 33,000–37,500/month) with full healthcare and zero tuition",
        status: "Open vacancy",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026 (For early 2027 start)",
        fee: "SEK 0",
        tuition: "SEK 0 (Salaried Swedish academic post)",
        requirements: {
          gpa: "Master of Science in Nursing, Healthcare Sciences, or Public Health (240 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis and 3,000-word doctoral research project on end-of-life care",
          references: "Two academic referee letters from university professors"
        },
        desc: "Four-year salaried doctoral research appointment within the Palliative Research Centre (PRC), evaluating symptom management, family bereavement, and ethical communication."
      },
      {
        id: 1678,
        title: "Swedish Institute (SI) Scholarship for Global Professionals at Marie Cederschiöld",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.mchs.se/utbildning/internationellt.html",
        funding: "100% full tuition coverage, SEK 12,000/month living allowance, travel grant, and insurance",
        status: "Annual competition",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027 (SI annual call)",
        fee: "SEK 900",
        tuition: "100% covered under Swedish Government scheme",
        requirements: {
          gpa: "Demonstrated academic excellence and minimum 3,000 hours of documented work experience",
          ielts: "IELTS 6.5 (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "SI leadership CV and proof of professional engagement",
          references: "Two letters of reference on SI official templates"
        },
        desc: "Prestigious Swedish Government scholarship fully funding international professionals pursuing master's degrees in social welfare, civil society leadership, or health systems."
      },
      {
        id: 1679,
        title: "Master of Science in Caring Sciences with Specialization in Palliative Care",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Master's",
        source: "https://www.mchs.se/utbildning/program/magisterprogram-i-vardvetenskap-med-inriktning-mot-palliativ-vard.html",
        funding: "Marie Cederschiöld International Study Fee Waivers",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National Swedish portal deadline)",
        fee: "SEK 900",
        tuition: "SEK 120,000/year for non-EU; SEK 0 for EU/EEA citizens",
        requirements: {
          gpa: "Bachelor of Science in Nursing or related health field (180 ECTS)",
          ielts: "IELTS 6.5 or Swedish/English 6 equivalent",
          gre: "Not required",
          papers: "Registered Nurse credentials and reflective practice essay",
          references: "Academic or clinical referee letters"
        },
        desc: "Advanced graduate program exploring specialized symptom management, ethical decision-making, patient-centered palliative frameworks, and holistic psychosocial support."
      },
      {
        id: 1680,
        title: "Palliative Research Centre (PRC) Clinical Research Assistantship",
        subject: "biology",
        subjects: ["biology"],
        type: "Research",
        source: "https://www.mchs.se/forskning/forskningsomraden/palliativ-vard.html",
        funding: "SEK 15,000/month research stipend",
        status: "Annual selection",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "SEK 0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in graduate healthcare sciences program",
          ielts: "English 6 equivalent",
          gre: "Not required",
          papers: "Demonstrated experience in qualitative interview coding or clinical trial databases",
          references: "PRC project director endorsement"
        },
        desc: "Clinical research assistantship analyzing longitudinal quality-of-life data and patient-reported outcome measures (PROMs) among advanced cancer and chronic illness cohorts."
      },
      {
        id: 1681,
        title: "Stockholm Hospice & Clinical Palliative Care Specialized Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Internship",
        source: "https://www.mchs.se/utbildning/verksamhetsforlagd-utbildning-vfu.html",
        funding: "SEK 6,000/month clinical travel and equipment allowance",
        status: "Semester placement cycles",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Spring placement)",
        fee: "SEK 0",
        tuition: "Course-integrated",
        requirements: {
          gpa: "Completion of 30 ECTS in graduate healthcare coursework",
          ielts: "Swedish B2/C1 and English proficiency",
          gre: "Not required",
          papers: "Clinical health certificate and police background clearance",
          references: "VFU clinical director authorization"
        },
        desc: "Ten-week advanced clinical placement embedded in specialized palliative inpatient hospices and advanced home healthcare units (ASIH) across Stockholm County."
      },
      {
        id: 1682,
        title: "Postdoctoral Fellowship in Civil Society Studies & Non-Profit Governance",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.mchs.se/forskning/forskningsomraden/civilsamhallsstudier.html",
        funding: "SEK 43,000 to 47,000/month salaried university contract plus research budget",
        status: "Open recruitment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "SEK 0",
        tuition: "Salaried employee post",
        requirements: {
          gpa: "PhD in Sociology, Political Science, Social Work, or Public Administration",
          ielts: "Fluent English (C1)",
          gre: "Not required",
          papers: "Minimum two peer-reviewed journal articles on voluntary sector organizations or welfare governance",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral position within the Institute for Civil Society Studies, analyzing non-profit contracting, volunteer participation trends, and Scandinavian welfare mix models."
      },
      {
        id: 1683,
        title: "Master of Science in Social Work: Leadership in Human Service Organizations",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.mchs.se/utbildning/program/magisterprogram-i-socialt-arbete.html",
        funding: "Nordic Social Work Mobility grants and institutional fee waivers",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900",
        tuition: "SEK 115,000/year for non-EU; SEK 0 for EU/EEA",
        requirements: {
          gpa: "Bachelor of Science in Social Work (Socionomexamen or 180 ECTS equivalent)",
          ielts: "IELTS 6.5 or English 6",
          gre: "Not required",
          papers: "Professional résumé and statement of analytical purpose",
          references: "Two academic referee letters"
        },
        desc: "Graduate degree focusing on organization theory, ethical leadership, evidence-based social interventions, and quality management in human service delivery."
      }
    ],
    researchers: [
      {
        id: 738,
        name: "Dr. Carl Johan Fürst",
        title: "Professor of Palliative Medicine & Senior Scientific Advisor at PRC",
        subject: "biology",
        topics: ["Palliative Oncology", "End-of-Life Symptom Relief", "Clinical Communication", "Bereavement"],
        source: "https://www.mchs.se/forskning/forskare/carl-johan-furst.html",
        recruiting: "Not verified",
        summary: "Dr. Fürst is a pioneer of palliative medicine in Sweden, having led the establishment of the Swedish National Register of Palliative Care and authoring national palliative clinical guidelines."
      },
      {
        id: 739,
        name: "Dr. Filip Wijkström",
        title: "Professor of Management & Civil Society Studies",
        subject: "social-sciences",
        topics: ["Non-Profit Governance", "Civil Society Regimes", "Philanthropy", "Welfare Mix"],
        source: "https://www.mchs.se/forskning/forskare/filip-wijkstrom.html",
        recruiting: "Not verified",
        summary: "Dr. Wijkström investigates non-profit governance and institutional philanthropy in Northern Europe, examining how civic foundations and voluntary associations interface with public state welfare."
      },
      {
        id: 740,
        name: "Dr. Anette Alvariza",
        title: "Professor of Caring Sciences & Palliative Care",
        subject: "biology",
        topics: ["Family Caregivers", "Palliative Home Care", "Intervention Research", "Psychosocial Support"],
        source: "https://www.mchs.se/forskning/forskare/anette-alvariza.html",
        recruiting: "Not verified",
        summary: "Dr. Alvariza directs clinical intervention studies evaluating psycho-educational support programs for family caregivers caring for relatives with life-limiting illnesses at home."
      }
    ]
  },

  // 19. Netherlands: University of Humanistic Studies (Row 1529)
  {
    institution: "University of Humanistic Studies",
    shortName: "UvH",
    slug: "university-of-humanistic-studies",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Utrecht, Netherlands",
    sourceRow: 1529,
    website: "https://www.uvh.nl",
    headline: "University of Humanistic Studies: Ethics, Care & Dutch PhD Research Guide",
    description: "Explore University of Humanistic Studies admissions, fully funded Dutch doctoral positions, master's degrees in Care Ethics and Meaningful Education, fees, and faculty in Utrecht.",
    heroEyebrow: "Historical City Centre, Utrecht · Independent Dutch Research University · Care Ethics & Meaning",
    overview: "The University of Humanistic Studies (UvH - Universiteit voor Humanistiek), established in 1989 in the historic heart of Utrecht, is an independent, state-accredited research university in the Netherlands. Internationally renowned for its interdisciplinary scholarship combining philosophy, ethics, psychology, and sociology, UvH focuses on humanization, care ethics, social sustainability, and meaningful aging.",
    admissions: {
      masters: "Recognized Bachelor's degree from a Dutch university or international research university equivalent (180 ECTS) in humanities, social sciences, philosophy, or healthcare.",
      phd: "Master's degree (Master of Arts or Master of Science) with distinction (minimum Dutch grade of 7.5 or international GPA 3.5+); competitive selection for advertised doctoral vacancies.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all subtests), TOEFL iBT 90, or Cambridge C1 Advanced; Dutch language proficiency (NT2-II) required for Dutch-taught tracks.",
      proposal: "Doctoral applicants must submit an original 2,500-word research proposal detailing theoretical frameworks, empirical methodology, and ethical relevance.",
      appFee: "€0 (Studielink application without additional institutional registration fee).",
      documents: "Bachelor's and master's degree certificates, certified transcripts of records, curriculum vitae, motivation letter, and academic writing sample."
    },
    tuitionText: "Tuition is legally fixed at €2,530 per year for EU/EEA students. For non-EU/EEA international students, master's tuition is approximately €9,600 per academic year. Employed doctoral candidates (promovendi) receive full Dutch university collective labor agreement (CAO) salaries (€38,000–€48,000/year gross; zero tuition fees).",
    opportunities: [
      {
        id: 1684,
        title: "Salaried Dutch Doctoral Position (PhD) in Care Ethics and Social Justice",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.uvh.nl/onderzoek/promoveren-aan-de-uvh",
        funding: "Salaried Dutch university employment contract (€38,500–€47,500/year gross under VSNU CAO)",
        status: "Open vacancy",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (For Spring 2027 start)",
        fee: "€0",
        tuition: "€0 (Salaried state academic post)",
        requirements: {
          gpa: "Master's degree with distinction in Philosophy, Ethics, Sociology, or Caring Sciences",
          ielts: "IELTS 6.5+ or Dutch C1",
          gre: "Not required",
          papers: "Master's thesis and 2,500-word research proposal in normative care ethics",
          references: "Two academic referee letters from university professors"
        },
        desc: "Four-year salaried doctoral appointment within the Department of Care Ethics, investigating vulnerability, institutional eldercare ethics, and democratic care practices."
      },
      {
        id: 1685,
        title: "Dutch Ministry NL Scholarship at University of Humanistic Studies",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.uvh.nl/onderwijs/praktische-zaken/studiefinanciering-en-fondsen",
        funding: "€5,000 one-time financial grant for non-EEA master's students",
        status: "Annual competition",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (For September 2027 start)",
        fee: "€0",
        tuition: "€9,600/year international; €2,530/year EU",
        requirements: {
          gpa: "Undergraduate degree with high academic standing (GPA 3.4+ or Dutch 7.5+)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "1,000-word essay explaining the societal relevance of humanist values to global challenges",
          references: "Two academic recommendation letters"
        },
        desc: "Prestigious national scholarship funded by the Dutch Ministry of Education and UvH, awarded to outstanding international students pursuing master's studies in Utrecht."
      },
      {
        id: 1686,
        title: "Master of Arts in Care Ethics and Policy",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.uvh.nl/onderwijs/master-zorgethiek-en-beleid",
        funding: "UvH Institutional Tuition Waivers and study bursaries",
        status: "Applications open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Non-EU visa deadline)",
        fee: "€0",
        tuition: "€9,600/year international; €2,530/year EU",
        requirements: {
          gpa: "Bachelor's degree in Social Sciences, Philosophy, Health Sciences, or Law",
          ielts: "IELTS 6.5 or Dutch NT2-II",
          gre: "Not required",
          papers: "Statement of motivation and academic writing sample on ethical deliberation",
          references: "Two academic referee letters"
        },
        desc: "Unique graduate program examining ethical dilemmas in healthcare delivery, public welfare policy, institutional moral counseling, and relational autonomy."
      },
      {
        id: 1687,
        title: "Centre for Humanistic Social Studies Research Assistantship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://www.uvh.nl/onderzoek/onderzoekscentra",
        funding: "€1,200/month research stipend",
        status: "Annual selection",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in UvH master's or doctoral program",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Proficiency in qualitative research coding (ATLAS.ti/NVivo) and ethical theory",
          references: "Research center director endorsement"
        },
        desc: "Research assistantship contributing to empirical studies on social resilience, intergenerational solidarity, and existential meaning in contemporary Dutch society."
      },
      {
        id: 1688,
        title: "Dutch National Healthcare and Hospice Ethics Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.uvh.nl/onderwijs/stages",
        funding: "€650/month healthcare intern allowance",
        status: "Semester placement cycles",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "€0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Completion of 30 ECTS in graduate ethics coursework",
          ielts: "Dutch B2/C1 and English proficiency",
          gre: "Not required",
          papers: "Certificate of good conduct (VOG) and clinical ethics plan",
          references: "UvH internship coordinator approval"
        },
        desc: "Twenty-week professional internship embedded in hospital ethics committees, mental health clinics, and eldercare facilities across Utrecht and Amsterdam."
      },
      {
        id: 1689,
        title: "Postdoctoral Fellowship in Philosophy of Humanism & Existential Meaning",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship/Job",
        source: "https://www.uvh.nl/onderzoek",
        funding: "€46,000 to €53,000 annual salary under Dutch University CAO plus holiday allowance",
        status: "Open recruitment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "€0",
        tuition: "Salaried university post",
        requirements: {
          gpa: "PhD in Philosophy, Intellectual History, or Humanistic Studies",
          ielts: "Fluent English (C1/C2)",
          gre: "Not required",
          papers: "Minimum two peer-reviewed journal articles on modern humanism, existentialism, or political ethics",
          references: "Three academic referee letters"
        },
        desc: "Two-year postdoctoral position exploring contemporary existentialism, secular meaning-making practices, and moral citizenship in pluralistic democracies."
      },
      {
        id: 1690,
        title: "Master of Arts in Humanistic Studies: Meaningful Education & Civil Society",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.uvh.nl/onderwijs/master-humanistiek",
        funding: "UvH Graduate Excellence Bursary (€2,500)",
        status: "Applications open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€0",
        tuition: "€9,600/year international; €2,530/year EU",
        requirements: {
          gpa: "Bachelor's degree in Humanities, Education, Sociology, or Psychology",
          ielts: "IELTS 6.5 or Dutch NT2-II",
          gre: "Not required",
          papers: "Reflective essay on pedagogical humanization and educational justice",
          references: "Two academic referee letters"
        },
        desc: "Three-year interdisciplinary master's degree preparing humanist counselors, educational policy consultants, and civic leaders in transformative dialogical methodologies."
      }
    ],
    researchers: [
      {
        id: 741,
        name: "Dr. Carlo Leget",
        title: "Professor of Care Ethics & Chair of Care Ethics Department",
        subject: "social-sciences",
        topics: ["Palliative Care Ethics", "Existential Vulnerability", "Moral Deliberation", "Spiritual Care"],
        source: "https://www.uvh.nl/over-ons/medewerkers/carlo-leget",
        recruiting: "Not verified",
        summary: "Dr. Leget is an internationally acclaimed ethicist researching palliative care, moral discernment, and the integration of inner life and existential themes in clinical medicine."
      },
      {
        id: 742,
        name: "Dr. Doret de Ruyter",
        title: "Professor of Philosophy of Education & Human Development",
        subject: "social-sciences",
        topics: ["Human Flourishing", "Educational Ethics", "Ideals in Education", "Meaningful Parenting"],
        source: "https://www.uvh.nl/over-ons/medewerkers/doret-de-ruyter",
        recruiting: "Not verified",
        summary: "Dr. de Ruyter investigates moral education and human flourishing, exploring how educational institutions can support children to develop meaning, autonomy, and civic responsibility."
      },
      {
        id: 743,
        name: "Dr. Nicole Immler",
        title: "Professor of Historical Memory & Social Justice",
        subject: "social-sciences",
        topics: ["Transgenerational Trauma", "Historical Injustice", "Reparations", "Colonial Memory"],
        source: "https://www.uvh.nl/over-ons/medewerkers/nicole-immler",
        recruiting: "Not verified",
        summary: "Dr. Immler conducts research on historical recognition, memory narratives, and restorative justice, examining the long-term impact of war and colonial trauma across generations."
      }
    ]
  },

  // 20. Switzerland: Webster Geneva Campus (Row 1364)
  {
    institution: "Webster Geneva Campus",
    shortName: "Webster Geneva",
    slug: "webster-geneva-campus",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Bellevue & Geneva, Canton of Geneva, Switzerland",
    sourceRow: 1364,
    website: "https://geneva.webster.edu",
    headline: "Webster Geneva Campus: International Relations, Cybersecurity & Fellowships Guide",
    description: "Explore Webster Geneva Campus admissions, academic merit scholarships, master's degrees in International Relations and Cybersecurity, Swiss tuition fees, and faculty in Geneva.",
    heroEyebrow: "Bellevue, Canton of Geneva · American-Accredited Swiss Campus · International Diplomatic Hub",
    overview: "Webster Geneva Campus (Webster University Geneva), established in 1978 in Bellevue on the shores of Lake Geneva, is the Swiss campus of Webster University. Operating in direct proximity to the United Nations, WHO, CERN, and hundreds of international diplomatic missions, Webster Geneva provides globally recognized American-accredited bachelor's and master's degrees in international affairs, psychology, management, and cybersecurity.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited higher-education institution with a cumulative GPA of at least 2.75 on a 4.0 scale (or equivalent).",
      phd: "Not currently offering independent doctoral degrees; collaborative research transfer and master's credentials with international partner institutions.",
      language: "TOEFL iBT 80+, IELTS Academic 6.5+, Cambridge C1 Advanced, or Duolingo English Test 120+.",
      proposal: "Required for graduate admissions: 500-word statement of academic intent and professional goals detailing alignment with Geneva's international sector.",
      appFee: "CHF 100 non-refundable application evaluation fee.",
      documents: "Official undergraduate transcripts, certified diploma copy, two letters of academic or professional recommendation, updated CV, and proof of English proficiency."
    },
    tuitionText: "Tuition is approximately CHF 1,070 per credit hour (total program tuition for a 36-credit master's degree is approximately CHF 38,520). Webster Geneva awards substantial merit scholarships of up to 40% tuition fee reduction for high-achieving international applicants, alongside graduate assistantships.",
    opportunities: [
      {
        id: 1691,
        title: "Webster Geneva Campus Academic Merit Scholarship (Up to 40% Tuition Waiver)",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://geneva.webster.edu/admissions/tuition-scholarships.php",
        funding: "Up to 40% tuition fee reduction for the complete duration of graduate study",
        status: "Open for 2027 entry",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Priority scholarship round for Fall 2027)",
        fee: "CHF 100",
        tuition: "CHF 38,520 total program tuition (reduced to CHF 23,112 with 40% waiver)",
        requirements: {
          gpa: "Undergraduate cumulative GPA of 3.5 or higher on a 4.0 scale",
          ielts: "IELTS 6.5 overall or TOEFL 80+",
          gre: "Not required",
          papers: "1,000-word scholarship essay demonstrating leadership and community impact",
          references: "Two academic or professional recommendation letters"
        },
        desc: "Merit-based university award recognizing outstanding graduate applicants entering Master of Arts or Master of Science programs at Webster Geneva."
      },
      {
        id: 1692,
        title: "Master of Arts in International Relations: Multilateral Diplomacy & Global Security",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://geneva.webster.edu/academics/graduate/ma-international-relations.php",
        funding: "Webster Graduate Assistantships (covers 50% tuition + monthly research stipend)",
        status: "Applications open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Fall 2027 semester)",
        fee: "CHF 100",
        tuition: "CHF 38,520 for complete degree",
        requirements: {
          gpa: "Bachelor's degree with minimum 2.75 GPA",
          ielts: "IELTS 6.5 with minimum 6.0 in writing",
          gre: "Not required",
          papers: "Statement of purpose addressing global governance and diplomatic challenges",
          references: "Two letters of recommendation"
        },
        desc: "Geneva-based master's degree leveraging proximity to the UN, analyzing international humanitarian law, geopolitical conflict resolution, and multilateral negotiation."
      },
      {
        id: 1693,
        title: "Master of Science in Cybersecurity Operations & Threat Intelligence",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://geneva.webster.edu/academics/graduate/ms-cybersecurity.php",
        funding: "Webster Technology Merit Awards (CHF 8,000 tuition grant)",
        status: "Open for applications",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "CHF 100",
        tuition: "CHF 38,520 total program tuition",
        requirements: {
          gpa: "Bachelor of Science in Computing, Engineering, or Mathematics (GPA 3.0+)",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Technical profile detailing networking, Python, and system administration skills",
          references: "Two academic referee letters"
        },
        desc: "Comprehensive master's program aligned with National Initiative for Cybersecurity Education (NICE) standards, exploring network defense, cloud forensics, and cyber warfare."
      },
      {
        id: 1694,
        title: "Geneva International Organization Research Assistantship & Policy Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://geneva.webster.edu/academics/graduate/",
        funding: "CHF 1,800/month research stipend",
        status: "Semester selection",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "CHF 0",
        tuition: "Enrolled student position",
        requirements: {
          gpa: "Enrolled in Webster Geneva graduate degree program",
          ielts: "IELTS 6.5+",
          gre: "Not required",
          papers: "Demonstrated skills in international policy analysis and qualitative synthesis",
          references: "Webster faculty mentor recommendation"
        },
        desc: "Graduate research assistantship analyzing international migration data, human rights conventions, and humanitarian aid distribution in collaboration with Geneva agencies."
      },
      {
        id: 1695,
        title: "Geneva United Nations NGO & Diplomatic Mission Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://geneva.webster.edu/career-services/",
        funding: "CHF 1,200 to CHF 1,800/month agency intern allowance",
        status: "Semester placement cycles",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Spring placement)",
        fee: "CHF 0",
        tuition: "Degree credit integrated",
        requirements: {
          gpa: "Completion of 12 credit hours in graduate coursework with GPA 3.3+",
          ielts: "Fluent English; French knowledge is a strong asset in Geneva",
          gre: "Not required",
          papers: "Professional diplomatic CV and cover letter",
          references: "Webster Career Services authorization"
        },
        desc: "Six-month professional practicum embedded within accredited NGOs, think tanks, or permanent diplomatic missions accredited to the United Nations Office at Geneva (UNOG)."
      },
      {
        id: 1696,
        title: "Webster Geneva Visiting Research Fellowship in Global Migration Governance",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship/Job",
        source: "https://geneva.webster.edu/faculty-research/",
        funding: "CHF 45,000 per annum research fellowship plus conference presentation grant",
        status: "Open recruitment",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CHF 0",
        tuition: "Visiting research appointment",
        requirements: {
          gpa: "PhD in International Relations, Political Science, or International Law",
          ielts: "C1/C2 English level",
          gre: "Not required",
          papers: "Published research on refugee rights, border management, or UNHCR policy",
          references: "Three international academic referees"
        },
        desc: "One-year visiting research fellowship examining European and global asylum regimes, international border technologies, and multilateral refugee protection frameworks."
      },
      {
        id: 1697,
        title: "Master of Arts in Counseling Psychology & Cross-Cultural Mental Health",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Master's",
        source: "https://geneva.webster.edu/academics/graduate/ma-counseling-psychology.php",
        funding: "Webster Psychology Department Study Awards (CHF 6,000)",
        status: "Applications open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "CHF 100",
        tuition: "CHF 42,800 for 2-year accredited program",
        requirements: {
          gpa: "Bachelor's degree in Psychology or related behavioural science (GPA 3.0+)",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Clinical motivation essay and personal ethical statement",
          references: "Two academic and professional reference letters"
        },
        desc: "Practitioner-oriented master's degree accredited in the US, preparing clinical counselors with over 500 supervised clinical internship hours in multicultural settings."
      }
    ],
    researchers: [
      {
        id: 744,
        name: "Dr. Oreste Foppiani",
        title: "Associate Professor of International History & Head of International Relations Department",
        subject: "social-sciences",
        topics: ["Mediterranean Security", "Naval Diplomacy", "Italian Foreign Policy", "Military History"],
        source: "https://geneva.webster.edu/faculty-research/foppiani.php",
        recruiting: "Not verified",
        summary: "Dr. Foppiani is an international affairs scholar specializing in transatlantic security, Mediterranean naval diplomacy, and modern multilateral crisis management."
      },
      {
        id: 745,
        name: "Dr. Rosanna Margonis-Pasinetti",
        title: "Associate Professor of Psychology & Counseling",
        subject: "social-sciences",
        topics: ["Cross-Cultural Counseling", "Family Therapy", "Expatriate Mental Health", "Psychological Assessment"],
        source: "https://geneva.webster.edu/faculty-research/",
        recruiting: "Not verified",
        summary: "Dr. Margonis-Pasinetti researches cross-cultural psychotherapy and systemic family interventions, studying adaptation dynamics and psychological resilience among expatriate populations."
      },
      {
        id: 746,
        name: "Dr. Ronald Daniel",
        title: "Adjunct Professor of Cybersecurity & Information Security",
        subject: "computer-science",
        topics: ["Incident Response", "Cloud Security", "Enterprise Risk Management", "Network Forensics"],
        source: "https://geneva.webster.edu/faculty-research/",
        recruiting: "Not verified",
        summary: "Dr. Daniel focuses on incident response protocols, enterprise threat intelligence modeling, and regulatory compliance for international financial and humanitarian organizations in Geneva."
      }
    ]
  }
];
