// Batch 43 - Part 1: Universities 1 to 10
// Canada (4), Germany (5), Italy (1)
// Opps: 4988 to 5057 (70 opps)
// Researchers: 2157 to 2186 (30 researchers)

export const part1Universities = [
  // 1. Canada: daVinci College (Halifax)
  {
    institution: "daVinci College (Halifax)",
    slug: "davinci-college-halifax",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 32,
    location: "Halifax, Nova Scotia, Canada",
    website: "https://www.davincicollege.com",
    shortName: "daVinci College",
    badge: "Digital Arts, Design & Media Technology",
    overview: "daVinci College, located in downtown Halifax, Nova Scotia, is an established applied arts and media institution providing specialized career education in 2D/3D animation, game design, audio production, graphic design, and web development.",
    lead: "Explore diplomas in 3D animation, audio engineering, digital graphic design, and Atlantic creative technology grants at daVinci College Halifax.",
    description: "daVinci College Halifax applied diplomas in animation, audio engineering, game development, and Nova Scotia creative industry bursaries.",
    quickFacts: {
      type: "Private Career Polytechnic College",
      campus: "Downtown Halifax Campus, Nova Scotia",
      accreditation: "Nova Scotia Department of Advanced Education / Private Career Colleges Division",
      admissions: "Rolling admissions with portfolio and entrance interview",
      language: "English (IELTS 6.0 overall with no band below 5.5, or equivalent)",
      aid: "Nova Scotia Student Assistance & daVinci Talent Bursaries"
    },
    strengths: [
      "Industry-standard 2D/3D animation, CGI character modelling, and digital VFX",
      "Sound design, mixing, and audio production studios for film, television, and gaming",
      "Interactive media programming, user experience design, and digital web development",
      "Practicum placements with Atlantic Canadian game studios, creative agencies, and production houses"
    ],
    programs: [
      { title: "Diploma in 2D & 3D Animation", level: "Post-Secondary Diploma", desc: "Rigorous training in character rigging, motion capture integration, 3D modelling, and storyboarding for commercial animation pipelines." },
      { title: "Diploma in Audio Engineering & Music Production", level: "Post-Secondary Diploma", desc: "Studio acoustics, DAW recording, sound design for film and gaming, live sound engineering, and post-production mixing." },
      { title: "Diploma in Graphic Design & Web Development", level: "Post-Secondary Diploma", desc: "Comprehensive foundation in visual identity design, UI/UX typography, front-end web development, and digital marketing strategy." }
    ],
    opportunities: [
      {
        id: 4988,
        title: "daVinci Emerging Creative Artist Entrance Bursary",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Tuition bursary awarded to incoming students demonstrating superior creative visual arts portfolios in animation or digital design.",
        funding: "CAD $3,000 direct tuition reduction across first academic year",
        fee: "CAD $100 application assessment fee",
        tuition: "CAD $14,800 total diploma tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.davincicollege.com/admissions/financial-aid/",
        requirements: {
          gpa: "High school diploma with minimum 68% grade average",
          ielts: "IELTS 6.0 overall (or TOEFL iBT 80)",
          gre: "Not required",
          papers: "Creative digital portfolio featuring 10-15 original art, animation, or design samples",
          references: "One artistic or academic recommendation letter"
        }
      },
      {
        id: 4989,
        title: "Atlantic Media Production Technology Grant",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Need- and merit-based grant for students pursuing hands-on diplomas in professional sound design and audio recording technology.",
        funding: "CAD $2,500 studio equipment and software licensing stipend",
        fee: "CAD $100 application assessment fee",
        tuition: "CAD $15,200 total program tuition",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.davincicollege.com/programs/audio-production/",
        requirements: {
          gpa: "Secondary school graduation with foundational math and physics proficiency",
          ielts: "IELTS 6.0 overall with no band below 5.5",
          gre: "Not required",
          papers: "500-word statement outlining career goals in audio post-production",
          references: "One reference from a music instructor or employer"
        }
      },
      {
        id: 4990,
        title: "Diploma in 2D & 3D Character Animation Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Full-time intensive diploma covering character rigging, 3D modelling, lighting, texture rendering, and digital compositing.",
        funding: "Nova Scotia student loan eligible; institutional payment instalment plans available",
        fee: "CAD $100 application fee",
        tuition: "CAD $16,400 full diploma program tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.davincicollege.com/programs/animation/",
        requirements: {
          gpa: "High school completion or mature student status (age 19+)",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Visual portfolio demonstrating observational drawing and basic digital sketch skills",
          references: "Two character or academic references"
        }
      },
      {
        id: 4991,
        title: "Halifax Game Tech & Interactive Media Internship Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Structured 8-week industry practicum placed within Nova Scotia independent video game studios and digital interactive agencies.",
        funding: "CAD $18.50 per hour stipend during mandatory agency practicum",
        fee: "Covered by diploma tuition",
        tuition: "Included in diploma tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.davincicollege.com/student-services/career-services/",
        requirements: {
          gpa: "Minimum 3.0 GPA in core animation and interactive programming coursework",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Showreel demonstrating interactive prototype assets or game engine builds",
          references: "Endorsement from faculty studio coordinator"
        }
      },
      {
        id: 4992,
        title: "Web Development & UI/UX Design Professional Diploma",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Comprehensive program teaching front-end development, responsive interface design, user research methodologies, and web accessibility standards.",
        funding: "Atlantic Canadian regional training grants available for qualifying applicants",
        fee: "CAD $100 application fee",
        tuition: "CAD $13,900 complete program tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.davincicollege.com/programs/graphic-design-web-development/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Brief design proposal analyzing an existing web application UX flow",
          references: "One professional or academic recommendation"
        }
      },
      {
        id: 4993,
        title: "daVinci Women in Digital Media Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Diversity scholarship dedicated to empowering female and non-binary students entering animation, VFX, and audio engineering disciplines.",
        funding: "CAD $3,500 applied towards diploma tuition",
        fee: "CAD $100 application fee",
        tuition: "CAD $14,800 to CAD $16,400 depending on diploma program",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.davincicollege.com/admissions/financial-aid/",
        requirements: {
          gpa: "High school GPA of 75% or equivalent",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "700-word essay on leadership and representation in interactive media industries",
          references: "Two letters of support from teachers or community leaders"
        }
      },
      {
        id: 4994,
        title: "Advanced Studio Recording & Post-Production Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Post-diploma residency providing studio access and mentorship for emerging audio engineers producing original multichannel surround sound projects.",
        funding: "CAD $4,000 production grant plus 100 hours of specialized studio console access",
        fee: "CAD $50 review fee",
        tuition: "CAD $0 (fully funded fellowship)",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.davincicollege.com/programs/audio-production/",
        requirements: {
          gpa: "Graduation from an accredited audio engineering diploma or degree program",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Mastered 3-track audio portfolio and detailed technical project specification",
          references: "Two professional audio industry references"
        }
      }
    ],
    researchers: [
      {
        id: 2157,
        name: "Darren MacLeod",
        title: "Head of Animation & VFX",
        department: "School of Animation",
        topics: ["3D Character Rigging", "Motion Capture Pipeline", "Digital Compositing"],
        summary: "Darren MacLeod directs the animation curriculum at daVinci College, specializing in modern 3D asset pipelines, motion graphics, and cinematic rendering for indie film and gaming studios.",
        website: "https://www.davincicollege.com/faculty/",
        source: "https://www.davincicollege.com/faculty/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2158,
        name: "Kevin Rogers",
        title: "Lead Instructor, Audio Engineering",
        department: "Department of Sound Design",
        topics: ["Spatial Audio", "Acoustic Modeling", "Multitrack Post-Production"],
        summary: "Kevin Rogers is an experienced audio engineer and studio producer instructing on mixing console architectures, location sound capture, and game audio implementation in middleware platforms.",
        website: "https://www.davincicollege.com/faculty/",
        source: "https://www.davincicollege.com/faculty/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2159,
        name: "Alana Campbell",
        title: "Coordinator, Graphic Design & Web Applications",
        department: "School of Digital Media",
        topics: ["UI/UX Design Systems", "Web Accessibility", "Interactive Typography"],
        summary: "Alana Campbell leads the digital design division, focusing on responsive UI frameworks, human-centered design research, and modern web application development.",
        website: "https://www.davincicollege.com/faculty/",
        source: "https://www.davincicollege.com/faculty/",
        recruiting: "Not verified",
        subject: "computer-science"
      }
    ]
  },

  // 2. Canada: Eastern College (Halifax Campus)
  {
    institution: "Eastern College (Halifax Campus)",
    slug: "eastern-college-halifax-campus",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 34,
    location: "Halifax, Nova Scotia, Canada",
    website: "https://www.easterncollege.ca",
    shortName: "Eastern College Halifax",
    badge: "Healthcare, Technology & Business Polytechnic",
    overview: "Eastern College Halifax is a premier post-secondary career college in Atlantic Canada offering modular, hands-on diploma programs in healthcare technology, digital network support, cyber security, legal administration, and supply chain management.",
    lead: "Explore diplomas in healthcare administration, cybersecurity networking, paralegal studies, and Nova Scotia workforce scholarships at Eastern College Halifax.",
    description: "Eastern College Halifax career diplomas in healthcare technology, network administration, business management, and Nova Scotia training grants.",
    quickFacts: {
      type: "Private Career College",
      campus: "Mumford Road Campus, Halifax, Nova Scotia",
      accreditation: "Nova Scotia Department of Advanced Education / National Association of Career Colleges (NACC)",
      admissions: "Rolling monthly start dates with entrance assessment",
      language: "English (IELTS 6.0 overall or Eastern College English Placement Test)",
      aid: "Canada-Nova Scotia Integrated Student Loans & Eastern College Merit Bursaries"
    },
    strengths: [
      "Modular half-day schedule enabling concurrent work and study commitments",
      "Accredited healthcare diplomas with clinical field placements across the Nova Scotia Health Authority",
      "Industry-certified technology curricula mapped to CompTIA, Cisco, and Microsoft credentials",
      "Dedicated career services offering lifelong employment search support across Atlantic Canada"
    ],
    programs: [
      { title: "Information Technology Systems Administrator", level: "Career Diploma", desc: "Hands-on instruction in enterprise network design, server virtualization, cloud migration, and infrastructure security." },
      { title: "Medical Office Administrator with Health Unit Coordinator", level: "Career Diploma", desc: "Electronic medical records (EMR), medical billing codes, clinical office protocols, and clinical hospital internships." },
      { title: "Cybersecurity Specialist Diploma", level: "Career Diploma", desc: "Network defense architecture, penetration testing methodologies, compliance auditing, and incident triage protocols." }
    ],
    opportunities: [
      {
        id: 4995,
        title: "Eastern College Healthcare Career Entry Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition bursary for candidates demonstrating dedication to addressing healthcare shortages in Atlantic Canadian clinics and hospitals.",
        funding: "CAD $2,500 direct tuition reduction across diploma study",
        fee: "CAD $50 registration fee",
        tuition: "CAD $14,200 total diploma tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.easterncollege.ca/admissions/financial-aid/",
        requirements: {
          gpa: "High school diploma with passing grades in senior biology or science",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word statement regarding healthcare service commitment in Nova Scotia",
          references: "One character or professional recommendation"
        }
      },
      {
        id: 4996,
        title: "IT Systems Administrator Diploma Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "56-week intensive diploma integrating hands-on server administration, virtualization, enterprise routing, and a 4-week field placement.",
        funding: "Nova Scotia Student Loans and targeted provincial training funding eligible",
        fee: "CAD $50 registration fee",
        tuition: "CAD $16,800 comprehensive tuition including certification exam vouchers",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.easterncollege.ca/programs/information-technology/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "IELTS 6.0 overall with no band under 5.5",
          gre: "Not required",
          papers: "Computer literacy diagnostic assessment",
          references: "One academic or employment reference"
        }
      },
      {
        id: 4997,
        title: "Atlantic Tech Sector Career Transition Grant",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Discretionary grant designed to assist mid-career workers retraining into network administration and cyber security roles.",
        funding: "CAD $3,000 tuition grant applied upon completion of foundational modules",
        fee: "CAD $50 registration fee",
        tuition: "CAD $15,900 total diploma cost",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.easterncollege.ca/admissions/scholarships/",
        requirements: {
          gpa: "Demonstrated prior post-secondary coursework or 2+ years workforce experience",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Statement detailing career transformation goals",
          references: "Two professional employment references"
        }
      },
      {
        id: 4998,
        title: "Nova Scotia Clinical Healthcare Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Mandatory 160-hour clinical practicum in medical billing, electronic health records, and patient intake coordination at regional clinics.",
        funding: "Unpaid academic credit practicum with full insurance coverage and travel subsidy eligibility",
        fee: "Included in diploma tuition",
        tuition: "Included in diploma tuition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.easterncollege.ca/programs/healthcare/",
        requirements: {
          gpa: "Minimum 75% average in medical terminology and clinical software courses",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Clean criminal record check and up-to-date provincial immunization record",
          references: "Instructor recommendation from clinical faculty"
        }
      },
      {
        id: 4999,
        title: "Cybersecurity Defense & Risk Mitigation Certificate",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Modular certificate covering threat vector analysis, ethical hacking fundamentals, SIEM monitoring, and cloud security frameworks.",
        funding: "Employer co-sponsorship and student line of credit options available",
        fee: "CAD $50 registration fee",
        tuition: "CAD $8,500 certificate tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.easterncollege.ca/programs/information-technology/",
        requirements: {
          gpa: "Prerequisite coursework in networking fundamentals or equivalent experience",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Resume and technical background evaluation",
          references: "One technical reference"
        }
      },
      {
        id: 5000,
        title: "Eastern College Community Leadership Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Award recognising students who have demonstrated active volunteer engagement and community leadership in the Halifax Regional Municipality.",
        funding: "CAD $2,000 tuition reduction applied in the final term",
        fee: "CAD $50 application fee",
        tuition: "CAD $14,000 to CAD $16,800 depending on diploma",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.easterncollege.ca/admissions/financial-aid/",
        requirements: {
          gpa: "Satisfactory academic standing (minimum 70% average)",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "600-word essay describing civic volunteer projects and impact",
          references: "Two letters from registered charity or non-profit supervisors"
        }
      },
      {
        id: 5001,
        title: "Supply Chain & Logistics Management Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "4-week corporate logistics internship with maritime freight, port forwarding, and distribution enterprises in Halifax Harbour.",
        funding: "CAD $19.00 per hour industry wage during active placement",
        fee: "Covered by diploma tuition",
        tuition: "Covered by diploma tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.easterncollege.ca/programs/business/",
        requirements: {
          gpa: "Minimum 3.2 GPA across supply chain analysis and inventory control modules",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Logistics case study report and logistics optimization brief",
          references: "Department chair recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2160,
        name: "Brian MacDonald",
        title: "Chair, Faculty of Information Technology",
        department: "Information Technology Department",
        topics: ["Enterprise Systems Virtualization", "Network Defense Protocols", "Cloud Architecture"],
        summary: "Brian MacDonald oversees curriculum design and enterprise technology infrastructure training at Eastern College Halifax, focusing on hybrid cloud configurations and network defense strategies.",
        website: "https://www.easterncollege.ca/about-us/",
        source: "https://www.easterncollege.ca/about-us/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2161,
        name: "Sandra Pellerin",
        title: "Director of Healthcare Studies",
        department: "Healthcare & Allied Health Division",
        topics: ["Electronic Health Records Integration", "Clinical Workflow Optimization", "Patient Privacy Legislation"],
        summary: "Sandra Pellerin guides healthcare administration and medical unit coordination programs, leading clinical placement protocols with hospital networks throughout Atlantic Canada.",
        website: "https://www.easterncollege.ca/about-us/",
        source: "https://www.easterncollege.ca/about-us/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2162,
        name: "Robert MacIntyre",
        title: "Senior Lecturer in Business & Supply Chain",
        department: "School of Business",
        topics: ["Maritime Port Logistics", "Freight Optimization", "Operations Management"],
        summary: "Robert MacIntyre leads business operations and logistics education, preparing graduates for supply chain and procurement roles across Atlantic Canadian maritime freight hubs.",
        website: "https://www.easterncollege.ca/about-us/",
        source: "https://www.easterncollege.ca/about-us/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 3. Canada: Nova Scotia College of Early Childhood Education (NSCECE)
  {
    institution: "Nova Scotia College of Early Childhood Education (NSCECE)",
    slug: "nova-scotia-college-of-early-childhood-education-nscece",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 65,
    location: "Halifax, Nova Scotia, Canada",
    website: "https://www.nscece.com",
    shortName: "NSCECE",
    badge: "Early Childhood Education & Child Development",
    overview: "The Nova Scotia College of Early Childhood Education (NSCECE), founded in 1970 in Halifax, is a specialized non-profit college dedicated to pedagogical training in early human development, child care policy, inclusive classroom education, and family support systems.",
    lead: "Explore diplomas in early childhood education, child development laboratory practicums, and provincial early learning bursaries at NSCECE Halifax.",
    description: "NSCECE Halifax accredited diplomas in early childhood education, child development practicums, and Nova Scotia early learning workforce bursaries.",
    quickFacts: {
      type: "Private Non-Profit Specialized College",
      campus: "Quinpool Road Campus, Halifax, Nova Scotia",
      accreditation: "Nova Scotia Department of Education and Early Childhood Development",
      admissions: "Fall and winter cohort admissions with vulnerable sector clearance",
      language: "English (IELTS 6.5 overall with minimum 6.0 in writing and speaking)",
      aid: "Nova Scotia Early Childhood Educator Student Bursary Program & NSCECE Grants"
    },
    strengths: [
      "Operates two licensed on-site lab childcare centres offering immediate observational and teaching practicums",
      "Curriculum strictly aligned with the Nova Scotia Early Learning Curriculum Framework",
      "High graduate licensing and employment rates across provincial daycare and pre-primary initiatives",
      "Focus on neurodiverse inclusion, trauma-informed pedagogy, and Indigenous cultural awareness in early learning"
    ],
    programs: [
      { title: "Diploma in Early Childhood Education", level: "Post-Secondary Diploma", desc: "Two-year comprehensive diploma preparing graduates for Level 2 Classification as certified Early Childhood Educators in Nova Scotia." },
      { title: "Accelerated ECE Workplace Program", level: "Advanced Diploma", desc: "Targeted program designed for practicing child care assistants seeking full professional ECE educator credentialing." },
      { title: "Specialized Certificate in Inclusive Early Learning", level: "Post-Diploma Certificate", desc: "Advanced training in supporting children with neurodevelopmental differences and behavioral support requirements." }
    ],
    opportunities: [
      {
        id: 5002,
        title: "Nova Scotia ECE Workforce Enhancement Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Provincially funded tuition reimbursement bursary available to full-time domestic and international students committing to working in licensed Nova Scotia child care centres.",
        funding: "Up to CAD $4,000 per academic year in non-repayable tuition support",
        fee: "CAD $50 application fee",
        tuition: "CAD $10,800 annual program tuition",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.nscece.com/fees-financial-aid/",
        requirements: {
          gpa: "High school graduation with minimum 65% in English 12",
          ielts: "IELTS 6.5 overall with no band under 6.0",
          gre: "Not required",
          papers: "500-word personal reflection on child development philosophy",
          references: "Two letters of reference confirming aptitude for working with young children"
        }
      },
      {
        id: 5003,
        title: "Diploma in Early Childhood Education Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Two-year academic and experiential program covering child psychology, play-based curriculum design, emergent literacy, and family dynamics.",
        funding: "Eligible for Nova Scotia Student Loans and Canada Student Grants",
        fee: "CAD $50 application fee",
        tuition: "CAD $11,200 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.nscece.com/programs/ece-diploma/",
        requirements: {
          gpa: "Nova Scotia Grade 12 or equivalent with acceptable English grades",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Clear Child Abuse Register check and Vulnerable Sector Police check",
          references: "Two professional or academic references"
        }
      },
      {
        id: 5004,
        title: "NSCECE Lab School Student Teaching Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Four successive 4-week field practicums conducted in licensed lab schools with direct mentorship from master early childhood educators.",
        funding: "Fully integrated into diploma program tuition; provincial practicum completion stipends available",
        fee: "Included in tuition",
        tuition: "Included in tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.nscece.com/lab-schools/",
        requirements: {
          gpa: "Successful completion of prerequisite child developmental stages coursework",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Valid Standard First Aid & CPR Level C certification",
          references: "Practicum coordinator approval"
        }
      },
      {
        id: 5005,
        title: "Margie MacDonald Memorial Child Development Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Need-based memorial grant assisting students demonstrating outstanding empathy and innovative pedagogy in early childhood intervention.",
        funding: "CAD $1,500 grant applied directly toward second-year tuition fees",
        fee: "CAD $50 application fee",
        tuition: "CAD $10,800 to CAD $11,200",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.nscece.com/fees-financial-aid/",
        requirements: {
          gpa: "Minimum 75% academic grade in first-year developmental psychology modules",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Essay on creating inclusive learning environments for children with special needs",
          references: "One faculty reference from NSCECE"
        }
      },
      {
        id: 5006,
        title: "Inclusive Early Learning Post-Diploma Specialization",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "One-year post-diploma specialization providing focused expertise in neurodivergence, sensory processing integration, and individual program planning (IPP).",
        funding: "Provincial workforce upskilling bursaries available for employed educators",
        fee: "CAD $50 application fee",
        tuition: "CAD $5,400 total specialization tuition",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.nscece.com/programs/",
        requirements: {
          gpa: "Recognized Level 2 ECE Diploma or Bachelor of Education",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Case study proposal regarding classroom behavioral adaptations",
          references: "Letter from current child care centre director"
        }
      },
      {
        id: 5007,
        title: "Emerging Indigenous & Mi'kmaq Educator Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Scholarship supporting Indigenous students enrolled in early childhood education, fostering culturally responsive curriculum development across Atlantic First Nations communities.",
        funding: "CAD $3,500 annual award plus book allowance",
        fee: "Waived for qualifying Indigenous applicants",
        tuition: "CAD $10,800 per year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.nscece.com/fees-financial-aid/",
        requirements: {
          gpa: "High school completion or adult mature applicant assessment",
          ielts: "English fluency verification",
          gre: "Not required",
          papers: "Personal statement detailing commitment to indigenous language and cultural preservation in early learning",
          references: "Community leadership reference or Band Council endorsement"
        }
      },
      {
        id: 5008,
        title: "Childhood Pedagogical Research & Policy Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Research fellowship examining the socio-economic impacts of universal early childhood education access in rural Nova Scotia communities.",
        funding: "CAD $5,000 research stipend and research mentorship with senior education policy fellows",
        fee: "CAD $0 (funded research fellowship)",
        tuition: "CAD $0",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://www.nscece.com/about-us/",
        requirements: {
          gpa: "Undergraduate degree in social science, psychology, or education with minimum 3.3 GPA",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "1,500-word policy research proposal focusing on early childhood education workforce sustainability",
          references: "Two academic recommendation letters"
        }
      }
    ],
    researchers: [
      {
        id: 2163,
        name: "Janice Ferguson",
        title: "Executive Director & Pedagogical Leader",
        department: "Academic Affairs",
        topics: ["Child Development Policy", "Play-Based Curriculum Models", "Early Childhood Educator Retention"],
        summary: "Janice Ferguson guides the pedagogical direction of NSCECE, researching the systemic implementation of high-quality early childhood education frameworks and educator credentialing standards across Canada.",
        website: "https://www.nscece.com/faculty/",
        source: "https://www.nscece.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2164,
        name: "Tara MacDonald",
        title: "Director of Lab Schools & Clinical Practicums",
        department: "Department of Experiential Learning",
        topics: ["Observational Child Assessment", "Sensory Integration", "Classroom Environment Design"],
        summary: "Tara MacDonald directs NSCECE's licensed lab schools, studying how dynamic physical learning environments and responsive educator interactions facilitate early cognitive and socio-emotional milestones.",
        website: "https://www.nscece.com/faculty/",
        source: "https://www.nscece.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2165,
        name: "Dr. Heather Morrison",
        title: "Senior Lecturer in Inclusive Pedagogy",
        department: "Faculty of Early Human Development",
        topics: ["Neurodiversity in Early Childhood", "Trauma-Informed Practice", "Family Collaboration Systems"],
        summary: "Dr. Heather Morrison investigates inclusive classroom interventions, neurodevelopmental assessment adaptations, and family-centred support mechanisms for children experiencing developmental vulnerabilities.",
        website: "https://www.nscece.com/faculty/",
        source: "https://www.nscece.com/faculty/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 4. Canada: Collège O'Sullivan de Québec
  {
    institution: "Collège O'Sullivan de Québec",
    slug: "college-osullivan-de-quebec",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 69,
    location: "Quebec City, Quebec, Canada",
    website: "https://osullivan-quebec.qc.ca",
    shortName: "Collège O'Sullivan Québec",
    badge: "Computer Science, Media & Business College",
    overview: "Collège O'Sullivan de Québec, located in historic Quebec City, is a recognized private college (établissement collégial privé subventionné) providing pre-university and technical DCS (DEC) and ACS (AEC) diplomas in computer programming, 3D animation, web development, cybersecurity, and paralegal technology.",
    lead: "Explore DEC and AEC programs in computer science, video game design, paralegal administration, and Quebec education bursaries at Collège O'Sullivan de Québec.",
    description: "Collège O'Sullivan de Québec technical college diplomas in programming, 3D animation, network management, and Quebec Ministry of Higher Education financial aid.",
    quickFacts: {
      type: "Private Subsidized Post-Secondary College (Collège d'enseignement professionnel)",
      campus: "Rue Saint-Jean Campus, Downtown Quebec City",
      accreditation: "Ministère de l'Enseignement supérieur du Québec (MES)",
      admissions: "SRAM application portal and direct college admissions (Fall / Winter)",
      language: "French (B2/C1 TFI, DELF, or TEF) with select bilingual tracks",
      aid: "Quebec Loans and Bursaries Program (AFE) & O'Sullivan Foundation Scholarships"
    },
    strengths: [
      "DEC programs fully recognized by Quebec universities for advanced credit transfer towards bachelor degrees",
      "Specialized computer laboratories equipped with high-performance rendering and cybersecurity simulation pods",
      "Direct cooperative internships with Quebec City's thriving video game development and IT cluster",
      "Small seminar classes guaranteeing close pedagogical mentorship by active industry practitioners"
    ],
    programs: [
      { title: "DEC in Computer Science - Web & Mobile Development", level: "Diplôme d'études collégiales (DEC)", desc: "Three-year technical collegiate program covering full-stack software development, relational databases, mobile architectures, and cloud services." },
      { title: "DEC in 3D Animation & Digital Imagery", level: "Diplôme d'études collégiales (DEC)", desc: "Production pipeline training in 3D character design, texturing, digital lighting, compositing, and real-time game engine integration." },
      { title: "AEC in Network Administration & Cybersecurity", level: "Attestation d'études collégiales (AEC)", desc: "Intensive training for professionals in firewalls, intrusion detection systems, enterprise server architecture, and security policies." }
    ],
    opportunities: [
      {
        id: 5009,
        title: "Bourse d'Excellence Collège O'Sullivan de Québec",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Merit scholarship awarded to top applicants enrolling in technical computer science or digital animation collegiate programs.",
        funding: "CAD $2,500 tuition credit awarded in the first year of collegiate studies",
        fee: "CAD $50 file evaluation fee",
        tuition: "Subsidized Quebec resident tuition (approx. CAD $3,800/yr); international student rates apply",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://osullivan-quebec.qc.ca/bourses-et-aide-financiere/",
        requirements: {
          gpa: "Quebec High School Diploma (DES) or equivalent with minimum 80% average in mathematics and science",
          ielts: "French proficiency: DELF B2, TFI 750, or equivalent",
          gre: "Not required",
          papers: "500-word letter of motivation in French articulating career ambition in Quebec's technology sector",
          references: "One academic letter of reference"
        }
      },
      {
        id: 5010,
        title: "DEC in Computer Science - Software & Mobile Application Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "3-year comprehensive technical college diploma providing industry-accredited software engineering, API development, and software architecture skills.",
        funding: "Eligible for Aide financière aux études (AFE) du gouvernement du Québec",
        fee: "CAD $50 admission fee",
        tuition: "CAD $3,950 per academic year for subsidized residents; international fee schedules available",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://osullivan-quebec.qc.ca/programmes/informatique/",
        requirements: {
          gpa: "Secondary V Mathematics (Technical & Scientific or Science Option) or equivalent",
          ielts: "Proficiency in French at B2 level",
          gre: "Not required",
          papers: "Academic transcripts and identity documentation",
          references: "High school counselor recommendation"
        }
      },
      {
        id: 5011,
        title: "Quebec City Video Game & Animation Stage Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "15-week cooperative workplace internship placed within leading Quebec video game studios, VFX houses, and interactive media firms.",
        funding: "CAD $20.00 per hour average corporate internship compensation",
        fee: "Covered by college registration",
        tuition: "Covered by college registration",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://osullivan-quebec.qc.ca/services-aux-etudiants/stages-et-emploi/",
        requirements: {
          gpa: "Completion of all second-year animation and 3D modeling courses with minimum 75% average",
          ielts: "Functional French or bilingual French/English fluency",
          gre: "Not required",
          papers: "Comprehensive student demo reel (maximum 2 minutes)",
          references: "Academic recommendation from animation studio faculty"
        }
      },
      {
        id: 5012,
        title: "AEC in Cybersecurity Defense & Enterprise Infrastructure",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "16-month accelerated technical attestation covering network penetration mitigation, forensic log analysis, cryptographic protocols, and cloud safeguards.",
        funding: "Emploi-Québec workforce transition training subsidies eligible for qualifying residents",
        fee: "CAD $50 evaluation fee",
        tuition: "CAD $8,200 full AEC program tuition",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://osullivan-quebec.qc.ca/programmes/cybersecurite/",
        requirements: {
          gpa: "Secondary V diploma plus interruption of studies or post-secondary credentials",
          ielts: "French B2 proficiency",
          gre: "Not required",
          papers: "Resume and technical skills intake assessment",
          references: "One professional reference"
        }
      },
      {
        id: 5013,
        title: "Bourse de Mobilité Internationale de Québec",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Travel and living grant enabling collegiate students to participate in reciprocal technology internships and study missions in Europe and the Americas.",
        funding: "CAD $3,000 travel and accommodation grant",
        fee: "CAD $0",
        tuition: "Standard tuition applies",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://osullivan-quebec.qc.ca/services-aux-etudiants/",
        requirements: {
          gpa: "Cumulative GPA of 3.3 or higher in collegiate diploma program",
          ielts: "Language proficiency appropriate to destination",
          gre: "Not required",
          papers: "International study mobility proposal outlining professional outcomes",
          references: "Two faculty recommendations"
        }
      },
      {
        id: 5014,
        title: "DEC in Paralegal Technology & Legal Informatics",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Three-year career college diploma combining Civil Code jurisprudence, legal research, procedural court drafting, and judicial informatics.",
        funding: "AFE government loans and bursaries eligible",
        fee: "CAD $50 admission fee",
        tuition: "CAD $3,950 per academic year",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://osullivan-quebec.qc.ca/programmes/techniques-juridiques/",
        requirements: {
          gpa: "Quebec DES diploma with strong performance in French language and social studies",
          ielts: "French C1 proficiency or French mother tongue",
          gre: "Not required",
          papers: "Admissions test on text comprehension and analytical logic",
          references: "One academic reference"
        }
      },
      {
        id: 5015,
        title: "O'Sullivan Digital Innovation & Tech Entrepreneurship Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Incubator fellowship providing seed mentorship and campus laboratory resources for graduating collegiate developers founding web or gaming ventures.",
        funding: "CAD $4,500 venture development grant and 6 months of incubator workspace",
        fee: "CAD $0",
        tuition: "CAD $0",
        deadline: "2027-08-30",
        deadlineText: "August 30, 2027",
        source: "https://osullivan-quebec.qc.ca/services-aux-etudiants/entrepreneuriat/",
        requirements: {
          gpa: "Final-year standing in a DEC or AEC technical program at Collège O'Sullivan",
          ielts: "Bilingual French/English proficiency preferred",
          gre: "Not required",
          papers: "10-page commercial pitch deck and software MVP prototype",
          references: "Recommendation from faculty technical advisor"
        }
      }
    ],
    researchers: [
      {
        id: 2166,
        name: "Jean-François Fortin",
        title: "Directeur des Programmes Informatiques",
        department: "Département d'Informatique",
        topics: ["Full-Stack Software Architecture", "Cloud Microservices", "Cybersecurity Auditing"],
        summary: "Jean-François Fortin coordinates technical computer science education at Collège O'Sullivan de Québec, supervising research into practical software engineering methods, distributed system reliability, and application vulnerability remediation.",
        website: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        source: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2167,
        name: "Sylvie Tremblay",
        title: "Coordonnatrice, Animation 3D et Synthèse d'Images",
        department: "Département des Arts Numériques",
        topics: ["Real-Time Game Engine Rendering", "3D Procedural Texturing", "Motion Pipeline Design"],
        summary: "Sylvie Tremblay leads the 3D animation division, investigating technical asset pipelines, procedural shading algorithms, and cinematic character rigging for the interactive gaming and film sectors in Quebec.",
        website: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        source: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2168,
        name: "Me Philippe Gagnon",
        title: "Responsable du Programme de Techniques Juridiques",
        department: "Département des Sciences Juridiques",
        topics: ["Legal Informatics", "Civil Law Procedure", "Digital Evidence Ethics"],
        summary: "Me Philippe Gagnon directs paralegal technology studies, focusing on the digitization of judicial proceedings, automated legal documentation verification, and procedural efficiency under Quebec civil law.",
        website: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        source: "https://osullivan-quebec.qc.ca/le-college/equipe/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 5. Germany: DHfPG - Deutsche Hochschule für Prävention und Gesundheitsmanagement (Studienzentrum Stuttgart)
  {
    institution: "DHfPG Studienzentrum Stuttgart",
    slug: "dhfpg-studienzentrum-stuttgart",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 243,
    location: "Stuttgart, Baden-Württemberg, Germany",
    website: "https://www.dhfpg.de",
    shortName: "DHfPG Stuttgart",
    badge: "Dual Health & Prevention University",
    overview: "The Deutsche Hochschule für Prävention und Gesundheitsmanagement (DHfPG) Studienzentrum Stuttgart is a state-recognized, system-accredited private university of applied sciences specializing in dual bachelor and master degree programs that integrate academic theory with concurrent enterprise employment in healthcare, fitness economics, clinical prevention, and corporate health management.",
    lead: "Explore dual bachelor and master degrees in health management, sports economics, nutritional therapy, and Baden-Württemberg healthcare sponsorships at DHfPG Stuttgart.",
    description: "DHfPG Studienzentrum Stuttgart accredited dual studies in health economics, nutritional therapy, corporate wellness, and enterprise education funding.",
    quickFacts: {
      type: "State-Recognized Private Dual University of Applied Sciences (Duale Hochschule)",
      campus: "Studienzentrum Stuttgart (Fritz-Walter-Weg, NeckarPark)",
      accreditation: "AHPGS / German Science and Humanities Council (Wissenschaftsrat)",
      admissions: "Dual contract with approved healthcare/sports partner enterprise",
      language: "German (TestDaF 4x4 or DSH-2 / CEFR C1) with English module offerings",
      aid: "Full tuition reimbursement by employer plus monthly enterprise training salary"
    },
    strengths: [
      "Pioneering dual study model combining distant modular e-learning with compact on-site seminar blocks in Stuttgart",
      "100% employer tuition coverage standard across dual corporate partnership contracts",
      "Interdisciplinary curriculum linking preventative medicine, exercise physiology, and digital health analytics",
      "Network of over 4,300 corporate healthcare, clinic, rehabilitation, and sports partner enterprises"
    ],
    programs: [
      { title: "B.A. in Health Management (Gesundheitsmanagement)", level: "Dual Bachelor of Arts", desc: "Cooperative degree preparing specialists for clinic administration, preventative care coordination, and health insurance analytics." },
      { title: "B.Sc. in Sports / Health Informatics (Sport-/Gesundheitsinformatik)", level: "Dual Bachelor of Science", desc: "Applied computer science focused on wearable sensor analytics, clinical data systems, and digital health applications." },
      { title: "M.A. in Prevention and Health Management", level: "Dual Master of Arts", desc: "Postgraduate executive qualification in strategic epidemiological interventions, corporate health audits, and healthcare management." }
    ],
    opportunities: [
      {
        id: 5016,
        title: "DHfPG Dual Corporate Healthcare Study Sponsorship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Full tuition coverage plus monthly living stipend funded by partner rehabilitation centres and healthcare clinics throughout Baden-Württemberg.",
        funding: "100% tuition coverage (approx. €360/month) plus €950 to €1,450 monthly trainee salary",
        fee: "€0 (paid by partner company)",
        tuition: "€0 (fully covered by training partner)",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.dhfpg.de/bachelor/finanzierung/",
        requirements: {
          gpa: "German Abitur, Fachhochschulreife, or certified vocational qualification (Meister/Fachwirt)",
          ielts: "German language proficiency: TestDaF Level 4 or DSH-2",
          gre: "Not required",
          papers: "Valid dual training contract with an approved DHfPG partner clinic or health company",
          references: "Employment confirmation from partner enterprise"
        }
      },
      {
        id: 5017,
        title: "B.Sc. Sports & Health Informatics Dual Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        desc: "7-semester dual Bachelor of Science integrating software development, biomechanical sensor evaluation, medical IoT devices, and data privacy.",
        funding: "Full corporate tuition sponsorship plus monthly enterprise salary",
        fee: "€0 student fee",
        tuition: "Covered by dual employer agreement",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.dhfpg.de/bachelor/studiengaenge/bachelor-of-science-sport-gesundheitsinformatik/",
        requirements: {
          gpa: "General or subject-specific university entrance qualification",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "Technical problem-solving assessment and corporate dual contract",
          references: "One academic or vocational reference"
        }
      },
      {
        id: 5018,
        title: "Baden-Württemberg Clinical Prevention Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Structured clinical practicum within Stuttgart medical rehabilitation centres focusing on cardiovascular prevention and musculoskeletal recovery.",
        funding: "€1,200 monthly trainee remuneration paid by host clinic",
        fee: "Covered by degree enrollment",
        tuition: "Covered by host clinic",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.dhfpg.de/partnerunternehmen/",
        requirements: {
          gpa: "Enrolled student in DHfPG B.A. or M.A. prevention programs",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "First aid certification and medical health clearance",
          references: "Supervising clinic mentor approval"
        }
      },
      {
        id: 5019,
        title: "M.A. Prevention & Corporate Health Management Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Four-semester postgraduate dual program preparing executives for strategic occupational health leadership, stress prevention, and workplace ergonomic auditing.",
        funding: "Enterprise tuition assumption plus management-level trainee remuneration",
        fee: "€0 student fee",
        tuition: "€430/month (typically funded by corporate sponsor)",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.dhfpg.de/master/studiengaenge/master-of-arts-praevention-und-gesundheitsmanagement/",
        requirements: {
          gpa: "Bachelor's degree in health, sports, or business management with minimum 2.5 German grade",
          ielts: "German C1 (DSH-2) and English B2",
          gre: "Not required",
          papers: "Exposé on corporate health management implementation strategy",
          references: "Corporate executive recommendation"
        }
      },
      {
        id: 5020,
        title: "Stuttgart Metabolic Health & Nutritional Therapy Grant",
        type: "Grant",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Research and equipment grant supporting students conducting empirical dietary intervention trials for chronic metabolic lifestyle disorders.",
        funding: "€2,500 project grant for diagnostic biomarker testing equipment",
        fee: "€0",
        tuition: "Standard corporate covered tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.dhfpg.de/hochschule/forschung/",
        requirements: {
          gpa: "Enrolled in B.A. Ernährungsberatung or M.Sc. Sport- und Bewegungstherapie",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "5-page clinical trial design focusing on glycemic index stabilization",
          references: "One professorial endorsement"
        }
      },
      {
        id: 5021,
        title: "B.A. Fitness Economics & Commercial Sport Facility Leadership",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Dual bachelor program instructing students in commercial fitness centre administration, financial controlling, member retention, and sports physiology.",
        funding: "Full enterprise tuition reimbursement and guaranteed monthly compensation",
        fee: "€0",
        tuition: "Covered by dual employer",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.dhfpg.de/bachelor/studiengaenge/bachelor-of-arts-fitnessekoenomie/",
        requirements: {
          gpa: "University entrance qualification (Abitur or Fachabitur)",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "Corporate dual contract from registered fitness enterprise",
          references: "Letter from corporate training supervisor"
        }
      },
      {
        id: 5022,
        title: "DHfPG Applied Prevention Research Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Postgraduate fellowship analyzing longitudinal workplace wellness intervention data across southwestern German manufacturing enterprises.",
        funding: "€18,000 annual research stipend plus data analytics computing infrastructure",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.dhfpg.de/hochschule/forschung/",
        requirements: {
          gpa: "Master's degree in health sciences, epidemiology, or human movement science with distinction",
          ielts: "German C1 and English C1",
          gre: "Not required",
          papers: "Detailed 8-page research proposal on digital telemetry in workplace stress mitigation",
          references: "Two academic recommendation letters"
        }
      }
    ],
    researchers: [
      {
        id: 2169,
        name: "Prof. Dr. Markus Wanjek",
        title: "Professor of Health Management & Exercise Physiology",
        department: "Department of Prevention and Health Promotion",
        topics: ["Occupational Health Interventions", "Cardiorespiratory Conditioning", "Health Economics"],
        summary: "Prof. Dr. Markus Wanjek investigates preventative exercise protocols, musculoskeletal workplace health interventions, and cost-benefit outcomes of corporate wellness initiatives across German industries.",
        website: "https://www.dhfpg.de/hochschule/personen/",
        source: "https://www.dhfpg.de/hochschule/personen/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2170,
        name: "Prof. Dr. Andrea Pieter",
        title: "Dean of Studies & Professor of Psychology in Health",
        department: "Faculty of Health Psychology",
        topics: ["Health Behavior Change", "Stress Management Resilience", "Adherence in Prevention"],
        summary: "Prof. Dr. Andrea Pieter researches psychological determinants of long-term health behavior modification, motivational counseling strategies, and mental resilience programming in corporate environments.",
        website: "https://www.dhfpg.de/hochschule/personen/",
        source: "https://www.dhfpg.de/hochschule/personen/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2171,
        name: "Prof. Dr. Thomas Wessinghage",
        title: "Professor of Sports Medicine & Medical Director",
        department: "Division of Sports Medicine and Rehabilitation",
        topics: ["Sports Orthopedics", "Rehabilitation Biomechanics", "Endurance Physiology"],
        summary: "Prof. Dr. Thomas Wessinghage, a former Olympic middle-distance runner and renowned orthopedic physician, oversees sports medical curricula, studying biomechanical injury prevention and active rehabilitation pathways.",
        website: "https://www.dhfpg.de/hochschule/personen/",
        source: "https://www.dhfpg.de/hochschule/personen/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 6. Germany: Dresden Leibniz Graduate School (DLGS)
  {
    institution: "Dresden Leibniz Graduate School (DLGS)",
    slug: "dresden-leibniz-graduate-school-dlgs",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 245,
    location: "Dresden, Saxony, Germany",
    website: "https://www.dlgs-dresden.de",
    shortName: "DLGS Dresden",
    badge: "Doctoral Research Graduate School",
    overview: "The Dresden Leibniz Graduate School (DLGS) is an elite joint academic doctoral institution co-founded by the Leibniz Institute of Ecological Urban and Regional Development (IOER), the Technische Universität Dresden (TUD - TU Dresden), and the Academy for Spatial Development in the Leibniz Association (ARL), offering world-class structured PhD training in sustainable spatial development, climate resilience, and urban transformation.",
    lead: "Explore fully funded doctoral fellowships, PhD positions in urban spatial resilience, and ecological transformation research at DLGS Dresden.",
    description: "Dresden Leibniz Graduate School (DLGS) funded PhD positions in urban ecological transitions, spatial development, and Leibniz Association doctoral fellowships.",
    quickFacts: {
      type: "Joint Doctoral Research Graduate School (IOER & TU Dresden)",
      campus: "IOER & TU Dresden Campus, Würzburger Straße, Dresden, Saxony",
      accreditation: "Leibniz Association & Technische Universität Dresden (Excellence University)",
      admissions: "Highly competitive annual international doctoral call",
      language: "English (C1 CEFR / IELTS 7.0 / TOEFL iBT 95+)",
      aid: "Full Leibniz doctoral scholarship / TV-L E13 (65%-100%) employment contract for 3-4 years"
    },
    strengths: [
      "Collaboration with TU Dresden—a designated German University of Excellence—for doctoral degree conferral",
      "Comprehensive funding package including monthly living stipend, research budget, and international conference travel",
      "Interdisciplinary supervision combining spatial planning, geoinformatics, environmental economics, and social ecology",
      "Access to high-performance spatial modeling clusters and real-world urban transformation testbeds across Europe"
    ],
    programs: [
      { title: "Structured Doctoral Program in Sustainable Spatial Transformation", level: "Doctorate (Dr. rer. nat. / Dr.-Ing. / Dr. rer. pol.)", desc: "Three-to-four-year structured doctoral fellowship focusing on climate-neutral cities, spatial justice, and biodiversity conservation in urban landscapes." },
      { title: "Doctoral Research Track in Spatial Geoinformatics & Urban Modeling", level: "Doctorate (PhD / Dr.-Ing.)", desc: "Advanced computational modeling of urban land-use transitions, remote sensing analytics, and ecological network simulation." },
      { title: "Postdoctoral Fellowship in Resilient Regions & Resource Efficiency", level: "Postdoctoral Fellowship", desc: "Two-year postdoctoral residency investigating regional circular economy frameworks and industrial site revitalization." }
    ],
    opportunities: [
      {
        id: 5023,
        title: "DLGS Leibniz International Doctoral Fellowship",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Fully funded 3-year doctoral fellowship in spatial sustainability transitions, covering monthly living costs, tuition remission, and research travel.",
        funding: "€1,650 to €1,850 tax-free monthly scholarship plus health insurance allowance and €2,000 annual research budget",
        fee: "€0 application fee",
        tuition: "€0 tuition fees (nominal TU Dresden semester fee approx. €300/semester)",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://www.dlgs-dresden.de/application/",
        requirements: {
          gpa: "Master's degree (M.Sc. or M.A.) in geography, spatial planning, environmental sciences, or urban sociology with top honors",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 95+",
          gre: "Not required; high analytical ability assessed via proposal",
          papers: "Detailed 5-to-8-page PhD research proposal aligned with the annual DLGS research theme",
          references: "Two academic letters of recommendation from university professors"
        }
      },
      {
        id: 5024,
        title: "Doctoral Position in Climate-Neutral Urban Systems (TV-L E13)",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Full-time or 65% TV-L E13 academic research employee position conducting PhD thesis work on carbon-neutral neighborhood infrastructure.",
        funding: "Approx. €35,000 to €52,000 gross annual salary under German public service pay scale (TV-L E13)",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.dlgs-dresden.de/vacancies/",
        requirements: {
          gpa: "Excellent master's degree in environmental engineering, urban planning, or physics",
          ielts: "IELTS 7.0 or TOEFL iBT 95",
          gre: "Not required",
          papers: "Master's thesis summary and motivation letter detailing quantitative modeling expertise",
          references: "Two professorial references"
        }
      },
      {
        id: 5025,
        title: "Spatial Data Science & Geospatial AI Research Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "environment"],
        desc: "6-month research internship at IOER Dresden working with satellite imagery and machine learning to map biodiversity corridors across European urban fringes.",
        funding: "€1,100 monthly research intern stipend",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.dlgs-dresden.de/internships/",
        requirements: {
          gpa: "Enrolled in master's degree in geoinformatics, data science, or computer science",
          ielts: "IELTS 6.5 or equivalent English fluency",
          gre: "Not required",
          papers: "GitHub repository link or portfolio of geospatial data processing scripts (Python/R)",
          references: "One academic referee"
        }
      },
      {
        id: 5026,
        title: "DLGS Interdisciplinary Winter Academy Travel Grant",
        type: "Grant",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Competitive travel and conference grant enabling international early-career researchers to attend the annual Dresden Spatial Sustainability Academy.",
        funding: "Full travel reimbursement up to €1,200 plus complimentary accommodation in Dresden",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.dlgs-dresden.de/winter-academy/",
        requirements: {
          gpa: "Current doctoral candidate or advanced master's researcher",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "500-word conference abstract on regional resilience or ecological transition policies",
          references: "Letter of endorsement from primary PhD supervisor"
        }
      },
      {
        id: 5027,
        title: "Urban Circularity & Ecological Materials Doctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Four-year joint PhD fellowship between DLGS and TU Dresden Faculty of Civil Engineering researching circular building stock recycling.",
        funding: "€2,100 monthly fellowship stipend including family allowance if applicable",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.dlgs-dresden.de/fellowships/",
        requirements: {
          gpa: "Master's degree in civil engineering, materials science, or environmental engineering (GPA > 3.5/4.0 or German grade 1.5)",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Research proposal on life-cycle assessment (LCA) and mineral construction waste loops",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5028,
        title: "Advanced Spatial Econometrics & Land Policy Course",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Intensive 3-week doctoral masterclass covering spatial autoregressive models, hedonic property valuation, and municipal land zoning econometrics.",
        funding: "Tuition waiver and lodging support for selected European doctoral candidates",
        fee: "€0 for accredited PhD researchers",
        tuition: "€0",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://www.dlgs-dresden.de/courses/",
        requirements: {
          gpa: "Enrolled doctoral student in economics, regional science, or human geography",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "CV and short justification of methodological need for spatial regression models",
          references: "Supervisor consent form"
        }
      },
      {
        id: 5029,
        title: "Postdoctoral Research Fellowship in Climate Adaptation Law & Policy",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Two-year postdoctoral appointment examining legal and institutional instruments for spatial climate adaptation across Central Europe.",
        funding: "€58,000 gross annual remuneration (TV-L E13 100%) plus institutional research funds",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.dlgs-dresden.de/vacancies/",
        requirements: {
          gpa: "Completed PhD in public law, environmental governance, or institutional economics within past 4 years",
          ielts: "Fluency in English (C1/C2) and working knowledge of German",
          gre: "Not required",
          papers: "Publication track record and 5-page postdoctoral research programme",
          references: "Three academic referees of international standing"
        }
      }
    ],
    researchers: [
      {
        id: 2172,
        name: "Prof. Dr. Marc Wolfram",
        title: "Director of IOER & Professor at TU Dresden",
        department: "Leibniz Institute of Ecological Urban and Regional Development (IOER)",
        topics: ["Urban Transformative Capacity", "Spatial Governance Systems", "Ecological Transition"],
        summary: "Prof. Dr. Marc Wolfram serves as Director of IOER and Professor of Spatial Development and Transformation at TU Dresden, leading seminal research into institutional capacities for navigating urban systemic change.",
        website: "https://www.ioer.de/institut/personen/wolfram/",
        source: "https://www.ioer.de/institut/personen/wolfram/",
        recruiting: "Not verified",
        subject: "environment"
      },
      {
        id: 2173,
        name: "Dr. Andreas Blum",
        title: "Scientific Coordinator, DLGS",
        department: "Dresden Leibniz Graduate School Coordination Office",
        topics: ["Sustainable Building Stocks", "Urban Metabolism", "Spatial Energy Transitions"],
        summary: "Dr. Andreas Blum coordinates the academic program of DLGS, studying sustainable material cycles, energy efficiency in regional settlements, and cross-disciplinary doctoral methodology.",
        website: "https://www.dlgs-dresden.de/team/",
        source: "https://www.dlgs-dresden.de/team/",
        recruiting: "Not verified",
        subject: "engineering"
      },
      {
        id: 2174,
        name: "Prof. Dr. Jochen Schanze",
        title: "Chair of Environmental Development and Risk Management",
        department: "Faculty of Environmental Sciences, TU Dresden / IOER",
        topics: ["Flood Risk Governance", "Ecosystem Services Resilience", "Spatial Systems Analysis"],
        summary: "Prof. Dr. Jochen Schanze investigates systemic methodologies for spatial risk governance, landscape ecosystem services, and adaptive spatial development under climate change pressures.",
        website: "https://www.ioer.de/institut/personen/schanze/",
        source: "https://www.ioer.de/institut/personen/schanze/",
        recruiting: "Not verified",
        subject: "environment"
      }
    ]
  },

  // 7. Germany: Duale Hochschule Schleswig-Holstein (DHSH)
  {
    institution: "Duale Hochschule Schleswig-Holstein (DHSH)",
    slug: "duale-hochschule-schleswig-holstein-dhsh",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 247,
    location: "Kiel, Schleswig-Holstein, Germany",
    website: "https://www.dhsh.de",
    shortName: "DHSH",
    badge: "State-Recognized Dual University",
    overview: "The Duale Hochschule Schleswig-Holstein (DHSH) is a state-recognized, privately funded university of applied sciences with campuses in Kiel, Lübeck, and Flensburg, established by the business association Wirtschaftsakademie Schleswig-Holstein to deliver dual bachelor and master programs combining academic study with intensive on-the-job management training.",
    lead: "Explore dual degrees in business informatics, digital marketing, business administration, and northern German enterprise sponsorships at DHSH.",
    description: "Duale Hochschule Schleswig-Holstein (DHSH) accredited dual study programs in business informatics, financial management, logistics, and company-funded tuition.",
    quickFacts: {
      type: "State-Recognized Private Dual University of Applied Sciences",
      campus: "Campuses in Kiel (Headquarters), Lübeck, and Flensburg",
      accreditation: "FIBAA / Schleswig-Holstein Ministry of Education, Science and Cultural Affairs",
      admissions: "Dual study contract with an affiliated northern German enterprise",
      language: "German (CEFR C1 / TestDaF 4x4 / DSH-2)",
      aid: "100% employer tuition coverage plus monthly apprenticeship salary"
    },
    strengths: [
      "Rigorous dual model alternating 10-week academic theory blocks with 12-week enterprise operational phases",
      "Over 90% immediate post-graduation corporate hiring rate across partner corporations",
      "Close partnerships with leading maritime, logistics, banking, and IT firms across northern Germany",
      "Modern campuses equipped with enterprise simulation labs and digital collaboration spaces"
    ],
    programs: [
      { title: "B.Sc. in Business Informatics (Wirtschaftsinformatik)", level: "Dual Bachelor of Science", desc: "Three-year dual curriculum combining software development, enterprise ERP systems (SAP), database architecture, and IT project management." },
      { title: "B.A. in Business Administration (Betriebswirtschaftslehre)", level: "Dual Bachelor of Arts", desc: "Specializations in banking, healthcare management, logistics, marketing, and tax/auditing with corporate partner rotations." },
      { title: "M.A. in Digital Business Management", level: "Part-Time Master of Arts", desc: "Postgraduate executive program focusing on digital transformation, data-driven leadership, and agile corporate innovation." }
    ],
    opportunities: [
      {
        id: 5030,
        title: "DHSH Northern Germany Corporate Dual Study Sponsorship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Full payment of university tuition fees plus monthly salary funded by partner corporations across Kiel, Lübeck, and Hamburg.",
        funding: "100% tuition coverage (€490/month value) plus €1,000 to €1,400 monthly trainee salary",
        fee: "€0",
        tuition: "€0 (paid in full by corporate partner)",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.dhsh.de/fuer-studierende/finanzierung/",
        requirements: {
          gpa: "Abitur or Fachhochschulreife with good grades in mathematics, German, and English",
          ielts: "German C1 proficiency (DSH-2 or TestDaF 4)",
          gre: "Not required",
          papers: "Valid dual training contract with a verified DHSH partner company",
          references: "One reference from corporate hiring manager"
        }
      },
      {
        id: 5031,
        title: "B.Sc. Business Informatics Dual Degree Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "3-year dual Bachelor of Science integrating cloud software engineering, enterprise databases, and business process automation.",
        funding: "Fully sponsored by corporate training partner with monthly living wage",
        fee: "€0",
        tuition: "Covered by dual employer",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.dhsh.de/bachelor/wirtschaftsinformatik/",
        requirements: {
          gpa: "General higher education entrance certificate",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and assessment center pass certificate",
          references: "High school or vocational certificate"
        }
      },
      {
        id: 5032,
        title: "Baltic Maritime Logistics & Port Management Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "12-week operational internship rotated through maritime logistics terminals and freight forwarders at the Port of Kiel.",
        funding: "€1,150 monthly corporate training compensation",
        fee: "Included in dual contract",
        tuition: "Included in dual contract",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.dhsh.de/partnerunternehmen/",
        requirements: {
          gpa: "Enrollment in DHSH B.A. BWL (Logistics specialization)",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Workplace health and safety certification",
          references: "Company training supervisor sign-off"
        }
      },
      {
        id: 5033,
        title: "M.A. Digital Business & Innovation Management Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Two-year extra-occupational master's degree exploring agile scrum management, platform business models, and AI organizational transformation.",
        funding: "Partial to full corporate sponsorship typically granted by employer",
        fee: "€0",
        tuition: "€550 per month",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.dhsh.de/master/digital-business-management/",
        requirements: {
          gpa: "First academic degree (Bachelor's or Diplom) with at least 180 ECTS and minimum 2.5 German grade",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Evidence of at least one year of qualified professional work experience",
          references: "Letter of support from employer"
        }
      },
      {
        id: 5034,
        title: "DHSH Digitalization & FinTech Innovation Award",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Monetary grant awarded annually to student research teams developing practical software solutions for northern German cooperative banks.",
        funding: "€2,000 project grant and executive mentorship",
        fee: "€0",
        tuition: "Standard tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.dhsh.de/ueber-uns/",
        requirements: {
          gpa: "Current enrolment in DHSH bachelor or master programs with GPA >= 3.3",
          ielts: "German C1",
          gre: "Not required",
          papers: "Prototype software architecture document or business plan for banking tech",
          references: "Faculty committee nomination"
        }
      },
      {
        id: 5035,
        title: "B.A. Business Administration (Healthcare & Care Management)",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Dual bachelor training administrators for hospital operational management, statutory health insurance controlling, and clinical procurement.",
        funding: "Full corporate sponsorship by regional clinic groups and health funds",
        fee: "€0",
        tuition: "Covered by dual employer",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://www.dhsh.de/bachelor/betriebswirtschaftslehre/",
        requirements: {
          gpa: "Higher education entrance qualification",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "Dual employment agreement with healthcare provider",
          references: "One character reference"
        }
      },
      {
        id: 5036,
        title: "Northern Germany SME Sustainable Transition Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Applied master's fellowship evaluating energy efficiency audits and ESG reporting frameworks for medium-sized enterprises (Mittelstand) in Schleswig-Holstein.",
        funding: "€3,600 fellowship stipend and specialized ESG auditor certification",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.dhsh.de/ueber-uns/forschung/",
        requirements: {
          gpa: "Bachelor's degree in economics or engineering with above-average marks",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Exposé on carbon footprint accounting for manufacturing SMEs",
          references: "Two academic or industry references"
        }
      }
    ],
    researchers: [
      {
        id: 2175,
        name: "Prof. Dr. Martin Reckenfelderbäumer",
        title: "President & Professor of Marketing and Management",
        department: "Executive Board / Department of Marketing",
        topics: ["Relationship Marketing", "Dual Higher Education Pedagogies", "Service Management"],
        summary: "Prof. Dr. Martin Reckenfelderbäumer serves as President of DHSH, leading strategic research into customer relationship management, digital service ecosystems, and institutional models for cooperative higher education.",
        website: "https://www.dhsh.de/ueber-uns/team/",
        source: "https://www.dhsh.de/ueber-uns/team/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2176,
        name: "Prof. Dr. Dirk Frosch-Wilke",
        title: "Vice President & Professor of Business Informatics",
        department: "Department of Business Informatics",
        topics: ["Enterprise ERP Systems", "Process Modeling Architecture", "Business Intelligence Analytics"],
        summary: "Prof. Dr. Dirk Frosch-Wilke directs the business informatics division, focusing on enterprise software architecture, automated business workflow optimization, and predictive corporate data intelligence.",
        website: "https://www.dhsh.de/ueber-uns/team/",
        source: "https://www.dhsh.de/ueber-uns/team/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2177,
        name: "Prof. Dr. Stefan Hein",
        title: "Professor of Finance and Accounting",
        department: "Department of Financial Management and Controlling",
        topics: ["Corporate Controlling Systems", "FinTech Valuation", "Maritime Finance"],
        summary: "Prof. Dr. Stefan Hein conducts empirical research in corporate capital structuring, working capital management in maritime freight enterprises, and financial risk mitigation models.",
        website: "https://www.dhsh.de/ueber-uns/team/",
        source: "https://www.dhsh.de/ueber-uns/team/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 8. Germany: German International University Berlin Campus (GIU Berlin)
  {
    institution: "German International University Berlin Campus (GIU Berlin)",
    slug: "german-international-university-berlin-campus",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 265,
    location: "Berlin, Germany",
    website: "https://www.giu-berlin.de",
    shortName: "GIU Berlin",
    badge: "International Applied Science University",
    overview: "German International University (GIU) Berlin Campus is a state-recognized German university of applied sciences located in the historic Borsigturm industrial heritage complex in Berlin-Tegel. Established with the support of German partner universities, GIU Berlin offers globally focused English-taught degree programs in computer science, engineering, business administration, and architectural design.",
    lead: "Explore English-taught bachelor and master degrees in software engineering, mechatronics, international business, and DAAD merit scholarships at GIU Berlin.",
    description: "German International University Berlin (GIU Berlin) accredited English-taught degrees in computer engineering, international business, and international student scholarships.",
    quickFacts: {
      type: "State-Recognized Private University of Applied Sciences",
      campus: "Borsigturm Campus, Berlin-Tegel, Germany",
      accreditation: "German Council of Science and Humanities (Wissenschaftsrat) / FIBAA",
      admissions: "Direct online application portal with entrance interview",
      language: "English (100% English-taught programs; IELTS 6.5 or TOEFL iBT 80+)",
      aid: "GIU International Merit Scholarships & DAAD Regional Grant Partnerships"
    },
    strengths: [
      "All bachelor and master curricula fully taught in English in the heart of Berlin's technology hub",
      "Close partnerships with prominent German industrial conglomerates for thesis internships",
      "International dual degree opportunities with affiliated German and transnational university campuses",
      "Cutting-edge laboratories for robotics, industrial automation, and software engineering"
    ],
    programs: [
      { title: "B.Sc. in Computer Science & Software Engineering", level: "Bachelor of Science", desc: "Three-and-a-half-year English-taught degree covering algorithms, cloud computing, cybersecurity, and full-stack software development." },
      { title: "B.Eng. in Mechatronics & Robotics", level: "Bachelor of Engineering", desc: "Interdisciplinary engineering education integrating mechanical systems, embedded electronics, sensory feedback, and automated robotics." },
      { title: "M.Sc. in International Business & Technology Management", level: "Master of Science", desc: "Postgraduate program linking global supply chains, technology commercialization, and digital product lifecycle management." }
    ],
    opportunities: [
      {
        id: 5037,
        title: "GIU Berlin Global Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Merit-based partial to full tuition scholarship awarded to outstanding international students admitted to undergraduate and graduate programs.",
        funding: "25% to 50% tuition reduction (valued up to €4,500 per academic year)",
        fee: "€50 application assessment fee",
        tuition: "€8,800 to €9,800 per academic year",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.giu-berlin.de/admissions/scholarships/",
        requirements: {
          gpa: "High school graduation certificate or bachelor's degree with minimum 85% grade average (or German equivalent 1.7)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85",
          gre: "Recommended for engineering applicants",
          papers: "700-word personal statement articulating career goals in Germany's high-tech industry",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5038,
        title: "B.Sc. Computer Science & Software Systems Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "7-semester English-taught bachelor program covering software design patterns, database architecture, machine learning basics, and mandatory industry internship.",
        funding: "Eligible for German student visa work authorization (140 full days/year) and GIU payment plans",
        fee: "€50 application fee",
        tuition: "€4,400 per semester",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.giu-berlin.de/programs/computer-science/",
        requirements: {
          gpa: "University entrance qualification (Abitur or equivalent secondary school leaving certificate)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Mathematics entrance examination and motivational statement",
          references: "One teacher recommendation"
        }
      },
      {
        id: 5039,
        title: "Berlin Industrial Robotics & Automation Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "20-week mandatory industrial internship conducted within Berlin-Brandenburg manufacturing plants, automotive labs, or robotics startups.",
        funding: "€900 to €1,400 monthly industry compensation",
        fee: "Covered by semester enrollment",
        tuition: "Covered by semester enrollment",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.giu-berlin.de/careers/internships/",
        requirements: {
          gpa: "Completion of 4 semesters in GIU engineering or mechatronics programs",
          ielts: "English B2/C1; basic German (A2) recommended for shop floor communication",
          gre: "Not required",
          papers: "Engineering internship proposal approved by faculty supervisor",
          references: "Endorsement from mechatronics lab chair"
        }
      },
      {
        id: 5040,
        title: "B.Eng. Mechatronics Engineering Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Seven-semester curriculum teaching programmable logic controllers, industrial drive mechanics, CAD modeling, and micro-electromechanical sensors.",
        funding: "GIU merit waivers available for top engineering entrance scores",
        fee: "€50 application fee",
        tuition: "€4,600 per semester",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.giu-berlin.de/programs/mechatronics/",
        requirements: {
          gpa: "Strong high school grades in mathematics and physics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing engineering projects or maker experience",
          references: "Two academic references"
        }
      },
      {
        id: 5041,
        title: "GIU Women in Technology & Engineering Grant",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Targeted grant aimed at closing the gender gap in technical fields by funding female students entering mechatronics and computer science programs.",
        funding: "€3,000 direct tuition reduction across first academic year",
        fee: "€50 application fee",
        tuition: "€8,800 to €9,200 per year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.giu-berlin.de/admissions/scholarships/",
        requirements: {
          gpa: "High school GPA equivalent to German 2.0 or better",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Essay on female leadership in STEM and digital innovation",
          references: "One academic letter of support"
        }
      },
      {
        id: 5042,
        title: "M.Sc. International Business & Technology Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Three-semester master's program instructing future corporate managers in global supply chain optimization, tech transfer, and financial modeling.",
        funding: "Graduate assistantships available with tuition fee reductions",
        fee: "€50 application fee",
        tuition: "€5,100 per semester",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.giu-berlin.de/programs/master-business/",
        requirements: {
          gpa: "Recognized Bachelor of Science or Business degree with minimum 2.5 German grade",
          ielts: "IELTS 6.5 or TOEFL iBT 90",
          gre: "GMAT or GRE score strongly recommended",
          papers: "Statement of purpose outlining business technology research focus",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5043,
        title: "Berlin Smart City & Urban Mobility Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Graduate research fellowship investigating electric vehicle fleet telemetry, charging grid optimization, and smart city infrastructure in Berlin.",
        funding: "€6,000 project research grant and workstation access at GIU Berlin labs",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.giu-berlin.de/research/",
        requirements: {
          gpa: "Enrolled in or completed master's degree in engineering or urban technology",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Research brief detailing intelligent transportation systems simulations",
          references: "Two professorial endorsements"
        }
      }
    ],
    researchers: [
      {
        id: 2178,
        name: "Prof. Dr. Carsten Busch",
        title: "President & Professor of Digital Media and Computer Science",
        department: "Department of Computer Science & Media",
        topics: ["Applied Human-Computer Interaction", "Media Informatics", "Digital Transformation Pedagogy"],
        summary: "Prof. Dr. Carsten Busch leads GIU Berlin as President, conducting interdisciplinary research into digital human-centered software architectures, gamified learning environments, and international higher education frameworks.",
        website: "https://www.giu-berlin.de/about-us/faculty/",
        source: "https://www.giu-berlin.de/about-us/faculty/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2179,
        name: "Prof. Dr. Ashraf Mansour",
        title: "Co-Founder & Chairman of the Board of Trustees",
        department: "School of Engineering & Physical Sciences",
        topics: ["Solid State Physics", "Optoelectronics", "German-International University Alliances"],
        summary: "Prof. Dr. Ashraf Mansour, a prominent physicist and academic statesman, oversees the bilateral strategic development of GIU Berlin, studying solid-state materials and cross-continental engineering partnerships.",
        website: "https://www.giu-berlin.de/about-us/governance/",
        source: "https://www.giu-berlin.de/about-us/governance/",
        recruiting: "Not verified",
        subject: "physics"
      },
      {
        id: 2180,
        name: "Prof. Dr. Tarek Khalil",
        title: "Professor of Mechanical & Mechatronics Engineering",
        department: "Department of Mechatronics",
        topics: ["Robotic Kinematics", "Autonomous Control Systems", "Industrial Automation Sensors"],
        summary: "Prof. Dr. Tarek Khalil instructs in robotic kinematics and control theory, analyzing sensory feedback loops, mobile autonomous robotics, and modern factory automation pipelines.",
        website: "https://www.giu-berlin.de/about-us/faculty/",
        source: "https://www.giu-berlin.de/about-us/faculty/",
        recruiting: "Not verified",
        subject: "engineering"
      }
    ]
  },

  // 9. Germany: Gisma University of Applied Sciences
  {
    institution: "Gisma University of Applied Sciences",
    slug: "gisma-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 266,
    location: "Potsdam / Berlin, Germany",
    website: "https://www.gisma.com",
    shortName: "Gisma",
    badge: "Business, Tech & AI University",
    overview: "Gisma University of Applied Sciences is a state-recognized private university with a flagship campus in Potsdam (Innovation Hub) and a campus in Berlin, offering AMBA-accredited and FIBAA-accredited English-taught degree programs in computer science, artificial intelligence, international business management, and digital engineering.",
    lead: "Explore bachelor and master degrees in data science, artificial intelligence, global MBA, and STEM scholarships at Gisma University of Applied Sciences.",
    description: "Gisma University of Applied Sciences accredited programs in AI, data science, software engineering, MBA, and Germany international student bursaries.",
    quickFacts: {
      type: "State-Recognized Private University of Applied Sciences",
      campus: "Potsdam Flagship Campus & Berlin Campus",
      accreditation: "Foundation for International Business Administration Accreditation (FIBAA) / AMBA (Global MBA)",
      admissions: "Rolling admissions with online application and video assessment",
      language: "English (IELTS 6.0/6.5 or Duolingo 105+)",
      aid: "Gisma Merit Scholarships, Early Bird Discounts & Germany Post-Study Work Visa"
    },
    strengths: [
      "Brand-new flagship campus in Potsdam SAP Innovation Center ecosystem with high-tech AI laboratories",
      "AMBA-accredited Global MBA and globally aligned STEM business analytics programs",
      "Strong corporate partner network providing student internships with Amazon, SAP, Tesla Gigafactory, and Zalando",
      "18-month German post-study work visa eligibility for international graduates"
    ],
    programs: [
      { title: "B.Sc. in Data Science, AI & Digital Business", level: "Bachelor of Science", desc: "Three-year undergraduate program combining statistical modeling, Python machine learning, big data architectures, and digital entrepreneurship." },
      { title: "M.Sc. in Computer Science & Artificial Intelligence", level: "Master of Science", desc: "Two-year postgraduate specialization in neural networks, natural language processing, computer vision, and autonomous agent frameworks." },
      { title: "Global MBA", level: "Master of Business Administration", desc: "AMBA-accredited executive program developing strategic leadership, corporate finance, and disruptive technology innovation skills." }
    ],
    opportunities: [
      {
        id: 5044,
        title: "Gisma High Achiever Merit Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Competitive scholarship providing substantial tuition fee reduction for applicants demonstrating exemplary academic performance and leadership potential.",
        funding: "Up to 30% reduction on total program tuition fees (valued up to €4,800)",
        fee: "€0 direct application fee",
        tuition: "€13,000 to €16,000 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.gisma.com/admissions/scholarships/",
        requirements: {
          gpa: "Secondary school certificate or bachelor's degree with minimum 80% equivalent grade average",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band) or equivalent",
          gre: "Not required",
          papers: "600-word scholarship essay detailing academic achievements and career aspirations in Germany",
          references: "Two academic or employer recommendation letters"
        }
      },
      {
        id: 5045,
        title: "B.Sc. Data Science, AI & Digital Business Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "3-year English-taught bachelor program in Potsdam covering deep learning, algorithm design, cloud database architectures, and business intelligence.",
        funding: "Flexible tuition payment plans and German student visa work authorization eligible",
        fee: "€0 application fee",
        tuition: "€13,500 per academic year for international students",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.gisma.com/programmes/bsc-data-science-ai-and-digital-business",
        requirements: {
          gpa: "Recognized high school diploma with strong mathematics foundations",
          ielts: "IELTS 6.0 overall with no band under 5.5",
          gre: "Not required",
          papers: "Personal statement and copy of passport",
          references: "One academic reference"
        }
      },
      {
        id: 5046,
        title: "Potsdam High-Tech Enterprise Internship Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Structured 6-month corporate internship placed within technology firms, AI labs, or startups in the Potsdam-Berlin innovation corridor.",
        funding: "€1,000 to €1,600 monthly intern remuneration paid by hosting employer",
        fee: "Covered by program tuition",
        tuition: "Covered by program tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.gisma.com/student-life/career-centre/",
        requirements: {
          gpa: "Good standing in Gisma computer science or data science program (minimum 2.7 German grade)",
          ielts: "English C1; German A2 beneficial for client interaction",
          gre: "Not required",
          papers: "Technical coding portfolio or GitHub profile link",
          references: "Approval from Gisma Career Centre coordinator"
        }
      },
      {
        id: 5047,
        title: "M.Sc. Computer Science & Artificial Intelligence Enrolment",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-semester advanced program delivering hands-on training in machine learning models, autonomous systems, cybersecurity protocols, and quantum algorithms.",
        funding: "Merit scholarships and corporate sponsorship opportunities available",
        fee: "€0",
        tuition: "€15,500 total program tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.gisma.com/programmes/msc-computer-science",
        requirements: {
          gpa: "Bachelor's degree in computer science, software engineering, or related quantitative field (min. 180 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required but evaluated favorably",
          papers: "Statement of purpose outlining research interests in AI ethics or machine learning",
          references: "Two academic references"
        }
      },
      {
        id: 5048,
        title: "Gisma Women in STEM & Tech Leadership Award",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Dedicated scholarship promoting female leadership in software development, data science, and artificial intelligence disciplines.",
        funding: "Up to 50% tuition reduction across total degree duration",
        fee: "€0",
        tuition: "€13,500 to €15,500 depending on program",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.gisma.com/admissions/scholarships/",
        requirements: {
          gpa: "Academic grade equivalent to minimum 3.2 GPA or German 2.0",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "750-word personal essay on expanding female representation in European tech hubs",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5049,
        title: "Global MBA - AMBA Accredited Executive Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "One-year accelerated MBA program equipping future business leaders with digital strategy, corporate finance, and disruptive innovation methodologies.",
        funding: "Gisma Executive Bursaries and corporate reimbursement support available",
        fee: "€0",
        tuition: "€18,000 complete program tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.gisma.com/programmes/global-mba",
        requirements: {
          gpa: "Recognized undergraduate degree and minimum 3 years of post-graduation professional work experience",
          ielts: "IELTS 6.5 or TOEFL iBT 90",
          gre: "GMAT score (recommended 600+) or Gisma business aptitude test",
          papers: "Executive CV and personal interview",
          references: "Two managerial references"
        }
      },
      {
        id: 5050,
        title: "Potsdam AI & Applied Machine Learning Research Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Research fellowship investigating applied computer vision and generative AI applications for industrial robotics and predictive maintenance.",
        funding: "€5,000 project research stipend and GPU computing cluster access at Potsdam campus",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.gisma.com/research/",
        requirements: {
          gpa: "Enrolled in master's or completed master's in AI or Computer Science with distinction",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Research exposé and sample code implementations of neural network architectures",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2181,
        name: "Prof. Dr. Ramon O'Callaghan",
        title: "President & Professor of Information Systems",
        department: "Executive Leadership & Information Systems",
        topics: ["Digital Business Strategy", "Technology Innovation Management", "Information Systems Governance"],
        summary: "Prof. Dr. Ramon O'Callaghan serves as President of Gisma, bringing extensive international leadership from top European business schools to study digital disruption, information technology strategy, and executive education.",
        website: "https://www.gisma.com/faculty/",
        source: "https://www.gisma.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2182,
        name: "Prof. Dr. Mohammad Malkawi",
        title: "Professor of Computer Science & AI",
        department: "Department of Computer Science",
        topics: ["Artificial Intelligence Algorithms", "Distributed Network Security", "Computer Architecture"],
        summary: "Prof. Dr. Mohammad Malkawi researches resilient computing architectures, artificial intelligence algorithms for autonomous navigation, and decentralized network security protocols.",
        website: "https://www.gisma.com/faculty/",
        source: "https://www.gisma.com/faculty/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2183,
        name: "Prof. Dr. Sara Ravan Ramzani",
        title: "Professor of Data Analytics & Quantitative Methods",
        department: "Department of Data Science and Analytics",
        topics: ["Predictive Analytics", "Machine Learning in Econometrics", "Big Data Visualization"],
        summary: "Prof. Dr. Sara Ravan Ramzani investigates predictive statistical modeling, machine learning applications in financial analytics, and empirical data science methodologies for enterprise decision-making.",
        website: "https://www.gisma.com/faculty/",
        source: "https://www.gisma.com/faculty/",
        recruiting: "Not verified",
        subject: "mathematics"
      }
    ]
  },

  // 10. Italy: Centro Universitario Sant'Andrea (Bergamo)
  {
    institution: "Centro Universitario Sant'Andrea (Bergamo)",
    slug: "centro-universitario-sant-andrea-bergamo",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 451,
    location: "Bergamo, Lombardy, Italy",
    website: "https://www.centrouniversitariosantandrea.org",
    shortName: "Centro Sant'Andrea Bergamo",
    badge: "University Collegiate & Academic Institute",
    overview: "Centro Universitario Sant'Andrea, situated in the historic Città Alta of Bergamo in Lombardy, is a distinguished university residential college and cultural foundation affiliated with the University of Bergamo, offering collegiate student residences, interdisciplinary academic seminars, humanist research lectures, and international student bursaries.",
    lead: "Explore collegiate residential fellowships, humanities research seminars, and student study grants at Centro Universitario Sant'Andrea in Bergamo.",
    description: "Centro Universitario Sant'Andrea Bergamo collegiate scholarships, university residences, humanities seminars, and Lombardy academic bursaries.",
    quickFacts: {
      type: "Collegiate University Institute & Cultural Foundation",
      campus: "Via Porta Dipinta Campus, Bergamo Alta, Lombardy",
      accreditation: "Affiliated with Università degli Studi di Bergamo / Lombardy Regional Higher Education System",
      admissions: "Collegiate merit admission call and entrance interview",
      language: "Italian (B2/C1) and English for international seminars",
      aid: "Collegio Sant'Andrea Merit Bursaries & University of Bergamo DSU Housing Subsidies"
    },
    strengths: [
      "Inspiring historical campus setting in medieval Bergamo Alta adjacent to University of Bergamo faculties",
      "Integrated tutorial system providing personalized academic mentoring for undergraduate and graduate scholars",
      "Regular interdisciplinary colloquia featuring prominent Italian and European philosophers, economists, and scientists",
      "Active international exchange partnerships facilitating global scholar residency"
    ],
    programs: [
      { title: "Collegiate Academic Honors Program", level: "Collegiate Honors Certificate", desc: "Supplementary interdisciplinary program in ethics, European history, scientific methodology, and public speaking undertaken alongside university degrees." },
      { title: "Humanities & Cultural Heritage Research Track", level: "Graduate Research Program", desc: "Specialized seminars investigating northern Italian Renaissance architecture, archival preservation, and Lombard literature." },
      { title: "Global Scholar Residential Fellowship", level: "Residential Fellowship", desc: "Full residential scholarship for visiting international students and researchers undertaking degrees at the University of Bergamo." }
    ],
    opportunities: [
      {
        id: 5051,
        title: "Borsa di Studio Collegiale Sant'Andrea",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Merit- and income-based collegiate scholarship providing full or partial subsidization of residential room, board, and academic tutorial fees in Bergamo Alta.",
        funding: "€3,500 to €5,000 residential fee waiver across the academic year",
        fee: "€30 application registration fee",
        tuition: "Subsidized collegiate rate (approx. €2,500 to €4,800/yr for room, board, and tutoring)",
        deadline: "2027-07-20",
        deadlineText: "July 20, 2027",
        source: "https://www.centrouniversitariosantandrea.org/ammissioni/",
        requirements: {
          gpa: "High school diploma with minimum grade of 80/100, or university average of at least 27/30",
          ielts: "Italian B2 proficiency or English B2 for international candidates",
          gre: "Not required",
          papers: "Curriculum vitae, motivational letter, and ISEE financial indicator documentation",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5052,
        title: "Collegiate Honors Supplementary Curriculum Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Annual supplementary academic curriculum covering critical ethics, international geopolitics, scientific epistemology, and rhetorical argumentation.",
        funding: "Fully covered for admitted collegiate residents",
        fee: "Covered by college admission",
        tuition: "Included in collegiate residence fees",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.centrouniversitariosantandrea.org/attivita-culturali/",
        requirements: {
          gpa: "Enrollment in an accredited bachelor's or master's program at Università degli Studi di Bergamo",
          ielts: "Italian B2 or English B2",
          gre: "Not required",
          papers: "Brief essay on a contemporary ethical or socio-economic topic",
          references: "Collegiate admission interview"
        }
      },
      {
        id: 5053,
        title: "Lombardy Cultural Heritage & Historical Archive Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "6-month archival practicum cataloguing medieval manuscripts and historic architectural documents in Bergamo Alta libraries and museums.",
        funding: "€800 monthly regional cultural practicum allowance",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.centrouniversitariosantandrea.org/progetti/",
        requirements: {
          gpa: "Bachelor's or Master's student in Humanities, History, or Cultural Heritage",
          ielts: "Italian C1 proficiency and reading knowledge of Latin",
          gre: "Not required",
          papers: "Statement of interest and archival transcription sample",
          references: "Letter from academic advisor"
        }
      },
      {
        id: 5054,
        title: "Premio di Laurea Sant'Andrea per Tesi Umanistiche",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Annual thesis graduation prize awarded for the best master's dissertation focusing on Lombard art history, literature, or regional civic ethics.",
        funding: "€2,000 cash grant and publication support in the college monograph series",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.centrouniversitariosantandrea.org/borse-di-studio/",
        requirements: {
          gpa: "Graduation grade of 110/110 or 110 cum laude from an Italian university",
          ielts: "Not required",
          gre: "Not required",
          papers: "Complete digital copy of master's thesis and 1,000-word abstract in Italian",
          references: "Thesis supervisor endorsement"
        }
      },
      {
        id: 5055,
        title: "International Scholar Residential Fellowship in Bergamo",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Residential research fellowship offering free accommodation and dining in historic Bergamo Alta for visiting international PhD candidates.",
        funding: "Full lodging and meal plan plus €1,000 travel allowance",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.centrouniversitariosantandrea.org/ospitalita/",
        requirements: {
          gpa: "Enrolled in a doctoral program at a recognized foreign or European university",
          ielts: "English B2 or Italian B2",
          gre: "Not required",
          papers: "1,500-word research proposal indicating collaboration with University of Bergamo faculty",
          references: "Two letters of recommendation from international professors"
        }
      },
      {
        id: 5056,
        title: "Corso Residenziale di Filosofia Civile e Politiche Pubbliche",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Intensive 2-week residential summer school examining civil humanism, democratic governance models, and European ethical institutions.",
        funding: "Collegiate lodging scholarships available for non-resident participants",
        fee: "€150 course registration fee",
        tuition: "€350 (including residential lodging in Bergamo Alta)",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.centrouniversitariosantandrea.org/seminari-estivi/",
        requirements: {
          gpa: "Enrolled undergraduate or graduate student in philosophy, law, or political science",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and 300-word statement of intent",
          references: "One academic reference"
        }
      },
      {
        id: 5057,
        title: "Sant'Andrea Social Impact & Community Mentorship Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Grant awarded to student initiatives promoting youth educational mentorship and social integration in the greater Bergamo metropolitan area.",
        funding: "€2,500 project grant for community volunteer implementation",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-10-01",
        deadlineText: "October 1, 2027",
        source: "https://www.centrouniversitariosantandrea.org/progetti-sociali/",
        requirements: {
          gpa: "Satisfactory academic progress in university studies",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Project action plan detailing community impact and volunteer schedules",
          references: "Endorsement from a registered local non-profit or civic partner"
        }
      }
    ],
    researchers: [
      {
        id: 2184,
        name: "Prof. Don Cristiano Re",
        title: "Direttore del Centro Universitario Sant'Andrea",
        department: "Direzione e Coordinamento Accademico",
        topics: ["Social Ethics", "Civil Humanism", "Collegiate Formation Systems"],
        summary: "Prof. Don Cristiano Re leads Centro Universitario Sant'Andrea, guiding theological reflection, civic humanism colloquia, and student moral formation within the university community of Bergamo.",
        website: "https://www.centrouniversitariosantandrea.org/chi-siamo/",
        source: "https://www.centrouniversitariosantandrea.org/chi-siamo/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2185,
        name: "Prof.ssa Francesca Gambetti",
        title: "Responsabile Seminari di Filosofia e Scienze Umane",
        department: "Dipartimento di Studi Umanistici e Filosofia",
        topics: ["Renaissance Philosophy", "Ethics of Technology", "History of Ideas"],
        summary: "Prof.ssa Francesca Gambetti coordinates the philosophical seminar series at Centro Sant'Andrea, examining early modern European philosophy, humanistic pedagogy, and the ethical implications of digital transformation.",
        website: "https://www.centrouniversitariosantandrea.org/docenti/",
        source: "https://www.centrouniversitariosantandrea.org/docenti/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2186,
        name: "Prof. Marco Pellegrini",
        title: "Docente di Storia Moderna e del Rinascimento",
        department: "Sezione di Storia e Patrimonio Culturale",
        topics: ["Lombard Renaissance History", "Venetian-Milanese Diplomacy", "Cultural Heritage Archiving"],
        summary: "Prof. Marco Pellegrini researches the political and cultural dynamics of Renaissance Lombardy and the Venetian Republic, mentoring collegiate researchers on archival documentation and regional heritage.",
        website: "https://www.centrouniversitariosantandrea.org/docenti/",
        source: "https://www.centrouniversitariosantandrea.org/docenti/",
        recruiting: "Not verified",
        subject: "arts-design"
      }
    ]
  }
];
