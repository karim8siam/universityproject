// Batch 42 - Part 1: Universities 1 to 10
// Canada (4), Germany (5), Italy (1)
// Opps: 4778 to 4847 (70 opps)
// Researchers: 2067 to 2096 (30 researchers)

export const part1Universities = [
  // 1. Canada: Nova Scotia Community College - Ivany Campus
  {
    institution: "Nova Scotia Community College (Ivany Campus)",
    slug: "nova-scotia-community-college-ivany-campus",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 68,
    location: "Dartmouth, Nova Scotia, Canada",
    website: "https://www.nscc.ca",
    shortName: "NSCC Ivany",
    badge: "Applied Technology & Marine Trades",
    overview: "Nova Scotia Community College (NSCC) Ivany Campus, situated on the Dartmouth waterfront overlooking Halifax Harbour, is Atlantic Canada's premier polytechnic hub for advanced manufacturing, environmental sustainability, applied oceans technology, and digital media.",
    lead: "Explore applied ocean technology diplomas, clean energy engineering certificates, and Atlantic workforce scholarships at NSCC Ivany Campus.",
    description: "NSCC Ivany Campus ocean technology, applied clean energy programs, and Nova Scotia workforce bursaries.",
    quickFacts: {
      type: "Public Polytechnic / Community College",
      campus: "Ivany Campus, Dartmouth Waterfront, Halifax Regional Municipality",
      accreditation: "Nova Scotia Department of Advanced Education / Polytechnics Canada",
      admissions: "NSCC Central Admissions Portal (rolling evaluation)",
      language: "English (IELTS 6.0 overall with no band below 5.5, or Duolingo 105+)",
      aid: "NSCC Foundation Bursaries & Atlantic Student Aid"
    },
    strengths: [
      "Ocean technology, hydrographic survey, and marine instrumentation",
      "Energy sustainability engineering technology and LEED-certified campus operations",
      "Applied computer science, interactive media design, and cyber security",
      "Integrated cooperative work terms with Atlantic Canadian maritime industry partners"
    ],
    programs: [
      { title: "Diploma in Oceans Technology", level: "Post-Secondary Diploma", desc: "Two-year applied program covering acoustic mapping, subsea robotics, autonomous marine vehicles, and hydrographic survey equipment." },
      { title: "Energy Sustainability Engineering Technology (ESET)", level: "Advanced Diploma", desc: "Applied training in renewable energy integration, commercial HVAC optimization, and building automation systems." },
      { title: "Diploma in Information Technology - Cybersecurity", level: "Post-Secondary Diploma", desc: "Hands-on network security, incident response, penetration testing, and regulatory compliance infrastructure." }
    ],
    opportunities: [
      {
        id: 4778,
        title: "NSCC Foundation International Student Entrance Bursary",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Merit- and need-based tuition fee reduction for newly admitted international polytechnic students pursuing technical diplomas at NSCC Ivany.",
        funding: "CAD $3,500 direct tuition reduction applied in the first academic year",
        fee: "CAD $75 international application fee",
        tuition: "CAD $12,870 per academic year for international diploma programs",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.nscc.ca/admissions/scholarships-bursaries/",
        requirements: {
          gpa: "High school graduation certificate with minimum 70% average in mathematics and science",
          ielts: "IELTS 6.0 overall with no individual band below 5.5 (or TOEFL iBT 80)",
          gre: "Not required",
          papers: "500-word personal statement describing community service and career goals in Nova Scotia",
          references: "One academic or community letter of recommendation"
        }
      },
      {
        id: 4779,
        title: "Diploma in Oceans Technology Admission & Co-op Placement",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Direct-entry technical diploma with mandatory paid marine industry co-op work term across the Halifax marine research corridor.",
        funding: "Paid industry cooperative education term (CAD $18–$24/hour)",
        fee: "CAD $75 application fee",
        tuition: "CAD $12,870/year (International) / CAD $3,920/year (Nova Scotia resident)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nscc.ca/programs-and-courses/programs/oceans-technology/",
        requirements: {
          gpa: "Grade 12 Academic English and Grade 12 Advanced Math (Pre-Calculus recommended)",
          ielts: "IELTS 6.0 overall with minimum 5.5 in each component",
          gre: "Not required",
          papers: "Demonstrated interest in marine technology and electronics statement",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4780,
        title: "Clean Energy Technology Research & Innovation Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Applied research fellowship with the NSCC Applied Research group investigating building energy performance and microgrid reliability.",
        funding: "CAD $16,000 research stipend and materials allowance for technical capstone projects",
        fee: "CAD $0 (departmental nomination)",
        tuition: "Covered by research sponsorship",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nscc.ca/applied-research/",
        requirements: {
          gpa: "Minimum 3.3 GPA in engineering technology, physics, or building systems",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Applied research proposal outlining energy metering or building retrofitting methods",
          references: "Faculty mentor nomination"
        }
      },
      {
        id: 4781,
        title: "Diploma in Information Technology Cybersecurity Enrolment",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Two-year specialized diploma preparing students for critical infrastructure security operations, network forensics, and ethical hacking.",
        funding: "Eligible for NSCC Rapid Response Technology Bursaries (CAD $1,500–$2,500)",
        fee: "CAD $75 application fee",
        tuition: "CAD $12,870/year (International)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nscc.ca/programs-and-courses/programs/it-cybersecurity/",
        requirements: {
          gpa: "High school completion with Grade 12 English and Grade 11 Mathematics",
          ielts: "IELTS 6.0 (no band < 5.5)",
          gre: "Not required",
          papers: "CV highlighting IT foundations and computing experience",
          references: "One referee contact"
        }
      },
      {
        id: 4782,
        title: "Atlantic Immigrant Career Loan and Transition Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Financial assistance program for new permanent residents and international diploma holders transitioning to credentialed maritime professions.",
        funding: "Up to CAD $5,000 for licensing exam fees, equipment, and professional bridging coursework",
        fee: "CAD $0",
        tuition: "Subsidized through provincial labor partnerships",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (Rolling evaluation)",
        source: "https://www.nscc.ca/admissions/student-financial-services/",
        requirements: {
          gpa: "Admission or enrollment in an accredited NSCC vocational or technical diploma",
          ielts: "Equivalent CLB 7 or IELTS 6.0",
          gre: "Not required",
          papers: "Proof of residence and career action plan in Atlantic Canada",
          references: "Community settlement counselor confirmation"
        }
      },
      {
        id: 4783,
        title: "Centre for Ocean Ventures & Entrepreneurship (COVE) Student Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Four-month paid technical internship hosted at COVE Dartmouth working alongside ocean tech startups on autonomous marine sensing.",
        funding: "CAD $4,800/month industry stipend plus prototype lab access",
        fee: "CAD $0",
        tuition: "Not applicable (paid practical placement)",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://coveocean.com/",
        requirements: {
          gpa: "Good academic standing in NSCC Oceans Technology or Electronic Engineering program",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Technical portfolio demonstrating microcontroller, CAD, or sensor calibration projects",
          references: "Faculty program coordinator approval"
        }
      },
      {
        id: 4784,
        title: "Women in Trades, Technology & Energy Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Dedicated scholarship program encouraging female-identifying students to excel in male-underrepresented STEM and trades diplomas.",
        funding: "CAD $3,000 annual scholarship and dedicated mentorship from Nova Scotia industry leaders",
        fee: "CAD $0",
        tuition: "Credited directly to student fee account",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.nscc.ca/admissions/scholarships-bursaries/women-in-trades.asp",
        requirements: {
          gpa: "Enrollment in full-time technology or trades program at Ivany campus",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Leadership narrative articulating goals to mentor subsequent cohorts of women in STEM",
          references: "One reference letter"
        }
      }
    ],
    researchers: [
      {
        id: 2067,
        name: "Dr. Wayne Groszko",
        title: "Applied Research Scientist in Renewable Energy",
        department: "Applied Research & Clean Technology",
        email: "wayne.groszko@nscc.ca",
        phone: "+1 902-491-1200",
        interests: ["Renewable Energy Systems", "Microgrid Storage", "Solar Thermal Integration", "Building Energy Efficiency"],
        website: "https://www.nscc.ca/applied-research/scientists/groszko.asp",
        subject: "engineering",
        summary: "Dr. Wayne Groszko leads community microgrid and solar energy integration studies at NSCC's Applied Research Centre, evaluating battery storage performance in coastal environments."
      },
      {
        id: 2068,
        name: "Beth Mason",
        title: "Lead Faculty & Marine Instrumentation Specialist",
        department: "School of Technology and Environment",
        email: "beth.mason@nscc.ca",
        phone: "+1 902-491-1201",
        interests: ["Acoustic Bathymetry", "Autonomous Underwater Vehicles", "Hydrographic Data Quality", "Oceanographic Sensors"],
        website: "https://www.nscc.ca/programs-and-courses/faculty/oceans-tech.asp",
        subject: "environment",
        summary: "Beth Mason oversees marine sensor deployments and acoustic survey training at Ivany Campus in close partnership with the Centre for Ocean Ventures & Entrepreneurship (COVE)."
      },
      {
        id: 2069,
        name: "Dan Morrison",
        title: "Academic Chair, IT and Creative Media",
        department: "School of Business and Creative Industries",
        email: "dan.morrison@nscc.ca",
        phone: "+1 902-491-1202",
        interests: ["Cybersecurity Operations", "Industrial Control Systems Security", "Cloud Infrastructure", "Polytechnic Pedagogy"],
        website: "https://www.nscc.ca/programs-and-courses/faculty/dan-morrison.asp",
        subject: "computer-science",
        summary: "Dan Morrison directs curriculum design for cybersecurity, networking, and digital media technologies, aligning training with national cyber defense frameworks."
      }
    ]
  },

  // 2. Canada: Sault College
  {
    institution: "Sault College of Applied Arts and Technology",
    slug: "sault-college-of-applied-arts-and-technology",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 85,
    location: "Sault Ste. Marie, Ontario, Canada",
    website: "https://www.saultcollege.ca",
    shortName: "Sault College",
    badge: "Aviation, Forestry & Natural Environment",
    overview: "Sault College of Applied Arts and Technology, located in northern Ontario at the nexus of Lake Superior and Lake Huron, is globally acclaimed for its professional flight aviation program, forestry ecosystem management, robotics engineering technology, and Indigenous education.",
    lead: "Discover collegiate aviation flight training, natural resource conservation diplomas, and international student entrance scholarships at Sault College.",
    description: "Sault College professional flight training, natural environment forestry diplomas, and Northern Ontario entrance bursaries.",
    quickFacts: {
      type: "Public College of Applied Arts and Technology",
      campus: "Main Northern Avenue Campus & Sault Ste. Marie International Airport Hangar",
      accreditation: "Ontario Ministry of Colleges and Universities / Colleges Ontario",
      admissions: "OntarioColleges.ca (Domestic) / Sault International Portal",
      language: "English (IELTS 6.0 overall with no band below 5.5, or Duolingo 105)",
      aid: "Sault College Financial Assistance & Northern Ontario Bursaries"
    },
    strengths: [
      "Commercial flight aviation and airline transport pilot training",
      "Forestry technician and natural environment conservation technology",
      "Robotics and advanced automation engineering technology",
      "Anishinaabe education, Indigenous student services, and cultural immersion"
    ],
    programs: [
      { title: "Aviation Technology - Flight", level: "Advanced Diploma", desc: "Three-year integrated flight training program qualifying graduates for the Canadian Commercial Pilot Licence (CPL) with multi-engine instrument rating." },
      { title: "Natural Environment Technologist - Conservation and Management", level: "Advanced Diploma", desc: "Comprehensive field-based training in GIS spatial mapping, wildlife population management, fisheries assessment, and forest biology." },
      { title: "Robotics and Automation Engineering Technology", level: "Advanced Diploma", desc: "Rigorous curriculum encompassing industrial robotics programming, PLC logic, vision systems, and automated cell integration." }
    ],
    opportunities: [
      {
        id: 4785,
        title: "Sault College International Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition discount awarded to high-achieving international applicants enrolling in diploma and degree programs at Sault College.",
        funding: "CAD $2,500 credited directly toward first-year tuition fees",
        fee: "CAD $100 international application fee",
        tuition: "CAD $15,800 per academic year for standard post-secondary diplomas",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.saultcollege.ca/international/scholarships",
        requirements: {
          gpa: "Minimum 75% equivalent in secondary school academic subjects",
          ielts: "IELTS 6.0 with no band score below 5.5",
          gre: "Not required",
          papers: "Personal statement detailing academic interests and career plans in Northern Ontario",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 4786,
        title: "Aviation Technology - Flight Admission and Flight Fee Grant",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Enrolment in the prestigious Sault College Aviation program with subsidized multi-engine flight simulator training hours.",
        funding: "Ontario flight fee subsidy covering aircraft fuel and maintenance surcharge allotments",
        fee: "CAD $100 application fee",
        tuition: "CAD $6,450/year (Domestic tuition; flight fees separate)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Highly competitive equal consideration)",
        source: "https://www.saultcollege.ca/programs/aviation-technology-flight",
        requirements: {
          gpa: "Grade 12 Academic English and Grade 12 Math (Functions or Calculus) with 70%+",
          ielts: "IELTS 6.5 (for non-native English applicants)",
          gre: "Not required",
          papers: "Transport Canada Category 1 Aviation Medical Certificate",
          references: "Two character and academic references"
        }
      },
      {
        id: 4787,
        title: "Northern Ontario Forestry & Invasive Species Research Practicum",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Field-based summer research fellowship monitoring emerald ash borer and boreal forest regeneration in Algoma district woodlands.",
        funding: "CAD $7,500 research stipend and field logistics lodging",
        fee: "CAD $0",
        tuition: "Funded via Natural Resources Canada partnership",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.saultcollege.ca/natural-environment",
        requirements: {
          gpa: "Minimum 3.0 GPA in Forestry, Biology, or Environmental Technology",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Letter of intent focusing on silvicultural practices or forest pathogen ecology",
          references: "Faculty advisor reference"
        }
      },
      {
        id: 4788,
        title: "Robotics and Automation Capstone Project Innovation Award",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Project funding for final-year engineering students fabricating automated manufacturing solutions for regional industrial enterprises.",
        funding: "CAD $4,000 prototype funding plus access to the Sault College Advanced Automation Lab",
        fee: "CAD $0",
        tuition: "Covered through college innovation fund",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.saultcollege.ca/applied-research",
        requirements: {
          gpa: "Enrolled in 3rd year of Robotics and Automation Engineering Technology",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Technical project blueprint specifying PLC architecture and safety protocols",
          references: "Industry sponsor endorsement"
        }
      },
      {
        id: 4789,
        title: "Natural Environment Technologist Conservation Internship",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Cooperative placement with the Ontario Ministry of Natural Resources or St. Marys River Fisheries Assessment Unit.",
        funding: "CAD $19.50/hour full-time seasonal wage for 16 weeks",
        fee: "CAD $0",
        tuition: "Regular co-op term registration fee CAD $450",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.saultcollege.ca/co-op",
        requirements: {
          gpa: "Satisfactory completion of Year 1 Natural Environment curriculum",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Driver's license, wilderness first aid, and resume",
          references: "Program coordinator sign-off"
        }
      },
      {
        id: 4790,
        title: "Indigenous Student Post-Secondary Transition Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Bursary for First Nations, Métis, and Inuit learners entering full-time diploma programs, supported by the Indigenous Studies Centre.",
        funding: "CAD $2,000 per term (up to CAD $4,000 per year) renewable based on academic progress",
        fee: "CAD $0",
        tuition: "Applied directly to student account",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.saultcollege.ca/indigenous-studies",
        requirements: {
          gpa: "Proof of acceptance to any full-time Sault College program",
          ielts: "Not applicable for domestic learners",
          gre: "Not required",
          papers: "Short self-identification essay and community participation record",
          references: "Band council or community reference"
        }
      },
      {
        id: 4791,
        title: "Civil Engineering Technology Infrastructure Practicum",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Three-year diploma pathway preparing technicians for municipal water treatment, bridge inspection, and geotechnical surveying in Northern Ontario.",
        funding: "Eligible for Ontario Learn and Stay grant for high-priority northern occupations",
        fee: "CAD $100 application fee",
        tuition: "CAD $4,200/year (Domestic) / CAD $15,800/year (International)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.saultcollege.ca/programs/civil-engineering-technology",
        requirements: {
          gpa: "Ontario Secondary School Diploma with Grade 12 Math and Physics",
          ielts: "IELTS 6.0 (no single score < 5.5)",
          gre: "Not required",
          papers: "Academic transcript submission",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 2070,
        name: "Mark Jones",
        title: "Chief Flight Instructor & Professor of Aviation",
        department: "School of Aviation",
        email: "mark.jones@saultcollege.ca",
        phone: "+1 705-759-2554",
        interests: ["Flight Training Methodologies", "Cockpit Resource Management", "Aerodynamics", "Aviation Human Factors"],
        website: "https://www.saultcollege.ca/programs/aviation-faculty",
        subject: "engineering",
        summary: "Mark Jones directs multi-engine and instrument rating flight operations at Sault College's International Airport flight centre, standardizing Transport Canada pilot competency."
      },
      {
        id: 2071,
        name: "Terry Winter",
        title: "Professor of Forest Ecology & Silviculture",
        department: "Natural Environment and Outdoor Studies",
        email: "terry.winter@saultcollege.ca",
        phone: "+1 705-759-2555",
        interests: ["Boreal Forest Silviculture", "Invasive Insect Monitoring", "Geographic Information Systems", "Urban Forestry"],
        website: "https://www.saultcollege.ca/programs/natural-environment-faculty",
        subject: "biology",
        summary: "Terry Winter conducts field research on hardwood stands and invasive species resilience across the Great Lakes-St. Lawrence forest transition zone."
      },
      {
        id: 2072,
        name: "Dave Brodbeck",
        title: "Faculty in Behavioral Sciences & Psychology",
        department: "School of Health and Community Services",
        email: "dave.brodbeck@saultcollege.ca",
        phone: "+1 705-759-2556",
        interests: ["Comparative Cognition", "Human Memory", "Evolutionary Psychology", "Science Communication"],
        website: "https://www.saultcollege.ca/programs/general-arts-faculty",
        subject: "social-sciences",
        summary: "Dave Brodbeck is a prominent behavioral researcher and science communicator studying cognitive mechanisms and teaching methodologies in higher vocational education."
      }
    ]
  },

  // 3. Canada: Collège Mérici
  {
    institution: "Collège Mérici",
    slug: "college-merici-quebec",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 58,
    location: "Quebec City, Quebec, Canada",
    website: "https://www.merici.ca",
    shortName: "Mérici",
    badge: "Hospitality, Tourism & Social Services",
    overview: "Collège Mérici, established in 1930 and set amidst the historic Plains of Abraham in Quebec City, is a renowned private college (collégial privé) offering pre-university sciences and specialized career diplomas in hotel management, tourism, special education, and culinary arts.",
    lead: "Explore pre-university diplomas, international tourism management programs, and Quebec private college study grants at Collège Mérici.",
    description: "Collège Mérici hospitality management, pre-university sciences diplomas, and Quebec City international bursaries.",
    quickFacts: {
      type: "Private Subsidized General and Vocational College (Cégep privé)",
      campus: "Grande Allée Ouest Campus, overlooking the Plains of Abraham, Quebec City",
      accreditation: "Ministère de l'Enseignement supérieur du Québec (MES)",
      admissions: "Service régional d'admission au collégial de Québec (SRACQ)",
      language: "French (B2 / TFI 605+ or DELF B2 required for regular academic tracks)",
      aid: "Aide financière aux études (AFE) & Fondation Collège Mérici Scholarships"
    },
    strengths: [
      "Hotel and resort management, culinary entrepreneurship, and event design",
      "Special education techniques and socio-community intervention",
      "Pre-university natural sciences, health, and pure and applied streams",
      "Individualized pedagogical supervision and high university transfer acceptance rates"
    ],
    programs: [
      { title: "Gestion hôtelière (Hotel Management Diploma - DEC)", level: "Technical Diploma (DEC)", desc: "Three-year career curriculum including paid hotel internships, revenue management, culinary service operations, and front-desk software systems." },
      { title: "Techniques d'éducation spécialisée (Special Care Counselling - DEC)", level: "Technical Diploma (DEC)", desc: "Vocational program training practitioners to support individuals with behavioral challenges, developmental disorders, and social vulnerabilities." },
      { title: "Sciences de la nature (Natural Sciences - DEC)", level: "Pre-University Diploma", desc: "Two-year rigorous foundation in organic chemistry, physics mechanics, differential calculus, and molecular biology preparing for medical school entry." }
    ],
    opportunities: [
      {
        id: 4792,
        title: "Bourse d'excellence de la Fondation Collège Mérici",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Merit scholarship awarded by the Mérici College Foundation to incoming full-time college students demonstrating outstanding secondary school marks.",
        funding: "CAD $1,500 direct tuition credit for the first year of studies",
        fee: "CAD $39 SRACQ admission application fee",
        tuition: "CAD $3,800/year (Quebec residents) / CAD $14,500/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Round 1 SRACQ)",
        source: "https://www.merici.ca/futurs-etudiants/bourses/",
        requirements: {
          gpa: "Quebec secondary school diploma (DES) with minimum 80% general average",
          ielts: "French language proficiency (DELF B2, TFI 605, or equivalent)",
          gre: "Not required",
          papers: "Motivation essay written in French regarding career objectives in Quebec",
          references: "High school counselor recommendation"
        }
      },
      {
        id: 4793,
        title: "DEC en Gestion hôtelière Internationale Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year technical diploma program with two mandatory remunerated hospitality internships in prestigious Quebec and Canadian resorts.",
        funding: "Paid industry internships averaging CAD $18–$22/hour (minimum 600 hours)",
        fee: "CAD $39 application fee",
        tuition: "CAD $3,800/year (Quebec residents) / CAD $14,500/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.merici.ca/programmes/gestion-hoteliere/",
        requirements: {
          gpa: "Completion of Secondary V English and Math CST",
          ielts: "French B2 proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and letter of motivation in French",
          references: "One referee"
        }
      },
      {
        id: 4794,
        title: "Stage rémunéré d'intervention en Éducation spécialisée",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Practical clinical placement across Quebec regional school boards and youth centers (CIUSSS de la Capitale-Nationale).",
        funding: "Bourse d'encouragement aux stages du gouvernement du Québec (CAD $4,000)",
        fee: "CAD $0",
        tuition: "Covered by regular DEC tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.merici.ca/programmes/techniques-deducation-specialisee/",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year of Special Education Techniques at Mérici",
          ielts: "French fluency",
          gre: "Not required",
          papers: "Judicial record verification and internship preference dossier",
          references: "Internship coordinator approval"
        }
      },
      {
        id: 4795,
        title: "DEC Préuniversitaire en Sciences de la nature",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        desc: "Two-year college diploma opening direct pathways into medicine, pharmacy, dentistry, and engineering faculties across Canadian universities.",
        funding: "Quebec AFE loans and bursaries eligibility",
        fee: "CAD $39 application fee",
        tuition: "CAD $3,200/year (Quebec) / CAD $13,900/year (International)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.merici.ca/programmes/sciences-de-la-nature/",
        requirements: {
          gpa: "Secondary V Chemistry, Physics, and Advanced Math TS or SN",
          ielts: "French B2 proficiency",
          gre: "Not required",
          papers: "High school marks record",
          references: "Not required"
        }
      },
      {
        id: 4796,
        title: "Bourse d'accueil pour étudiants internationaux Mérici",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Welcome grant for non-Canadian French-speaking students relocating to Quebec City for post-secondary technical training.",
        funding: "CAD $2,000 settling-in bursary paid upon confirmed fall semester attendance",
        fee: "CAD $39",
        tuition: "Applied to housing or tuition costs",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.merici.ca/etudiants-internationaux/",
        requirements: {
          gpa: "Equivalence of BAC or secondary high school diploma with good marks",
          ielts: "French language testing result",
          gre: "Not required",
          papers: "Quebec Acceptance Certificate (CAQ) and valid study permit",
          references: "One reference"
        }
      },
      {
        id: 4797,
        title: "Programme AEC en Gestion d'événements et Congrès",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "One-year intensive Attestation of Collegial Studies (AEC) for adult learners transitioning into international conference planning and tourism operations.",
        funding: "Eligible for Emploi-Québec training subsidies",
        fee: "CAD $35 application fee",
        tuition: "CAD $5,400 total program tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.merici.ca/formation-continue/",
        requirements: {
          gpa: "Post-secondary credits or at least two years of interrupted studies",
          ielts: "French B2 proficiency",
          gre: "Not required",
          papers: "Resume and professional transition statement",
          references: "Employer or academic recommendation"
        }
      },
      {
        id: 4798,
        title: "Bourse d'engagement communautaire et parascolaire Mérici",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Annual grant rewarding student council initiatives, environmental campus clubs, and volunteer work in the Quebec City community.",
        funding: "CAD $1,000 bursary presented at the annual Mérici Gala of Excellence",
        fee: "CAD $0",
        tuition: "Awarded as direct cash stipend",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.merici.ca/vie-etudiante/",
        requirements: {
          gpa: "Minimum 75% average in all enrolled courses",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Portfolio documenting at least 50 hours of volunteer service at Mérici or local non-profits",
          references: "Club coordinator or mentor validation"
        }
      }
    ],
    researchers: [
      {
        id: 2073,
        name: "Sophie Tremblay",
        title: "Coordonnatrice du département de Gestion hôtelière",
        department: "Département de Tourisme et Hôtellerie",
        email: "stremblay@merici.ca",
        phone: "+1 418-683-1591",
        interests: ["Sustainable Tourism", "Hotel Revenue Management", "Quebec Gastronomy", "Experiential Hospitality"],
        website: "https://www.merici.ca/professeurs/sophie-tremblay",
        subject: "social-sciences",
        summary: "Sophie Tremblay leads hotel management pedagogical initiatives at Mérici, collaborating with Quebec regional tourist associations and luxury hotel networks."
      },
      {
        id: 2074,
        name: "Marc-André Bédard",
        title: "Professeur de Biologie et Écologie",
        department: "Département des Sciences de la nature",
        email: "mabedard@merici.ca",
        phone: "+1 418-683-1592",
        interests: ["Plant Physiology", "Urban Biodiversity", "Saint Lawrence River Ecology", "Active Learning in STEM"],
        website: "https://www.merici.ca/professeurs/marc-andre-bedard",
        subject: "biology",
        summary: "Marc-André Bédard teaches cell biology and ecology, organizing field research laboratories on the flora and fauna of the Plains of Abraham and Saint Lawrence littoral."
      },
      {
        id: 2075,
        name: "Chantal Gagnon",
        title: "Responsable des stages en Éducation spécialisée",
        department: "Département des Techniques humaines",
        email: "cgagnon@merici.ca",
        phone: "+1 418-683-1593",
        interests: ["Neurodiversity Support", "Trauma-Informed Pedagogy", "Youth Behavioral Intervention", "Community Inclusion"],
        website: "https://www.merici.ca/professeurs/chantal-gagnon",
        subject: "social-sciences",
        summary: "Chantal Gagnon coordinates clinical internships and professional ethics coursework for future special care counsellors across Quebec healthcare and school establishments."
      }
    ]
  },

  // 4. Canada: International College of Manitoba (ICM)
  {
    institution: "International College of Manitoba (ICM)",
    slug: "international-college-of-manitoba-icm",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 40,
    location: "Winnipeg, Manitoba, Canada",
    website: "https://www.icmanitoba.ca",
    shortName: "ICM",
    badge: "University of Manitoba Pathway & Foundation",
    overview: "International College of Manitoba (ICM), situated on the Fort Garry campus of the University of Manitoba in Winnipeg, delivers customized University Transfer Programs (UTP Stage II) that transition international scholars directly into the second year of Bachelor's degree degrees at U of M.",
    lead: "Access guaranteed second-year University of Manitoba degree transfers, engineering pathway scholarships, and campus integration through ICM.",
    description: "International College of Manitoba UTP Stage II pathways, University of Manitoba degree transfers, and entrance merit bursaries.",
    quickFacts: {
      type: "Higher Education Pathway College (in partnership with University of Manitoba)",
      campus: "Fort Garry Campus, University of Manitoba, Winnipeg",
      accreditation: "Manitoba Advanced Education and Training / Navitas Global Partner",
      admissions: "ICM Online International Portal (intakes in Jan, May, Sept)",
      language: "English (IELTS 5.5 for mixed track; IELTS 6.0 for direct UTP Stage II entry)",
      aid: "ICM Navitas Academic Merit Scholarships & Bursaries"
    },
    strengths: [
      "Direct academic equivalence and credit transfer to University of Manitoba faculties",
      "Small class sizes with dedicated supplemental instruction and academic tutoring",
      "Programs spanning Engineering, Computer Science, Business (Asper), Science, and Arts",
      "Full access to University of Manitoba campus libraries, athletic centres, and student residences"
    ],
    programs: [
      { title: "UTP Stage II: Engineering", level: "University Transfer (Year 1)", desc: "Direct equivalent to the first year of the Price Faculty of Engineering, covering calculus, linear algebra, engineering design, and computer programming." },
      { title: "UTP Stage II: Computer Science", level: "University Transfer (Year 1)", desc: "Preparatory pathway for the Faculty of Science Computer Science major, focusing on data structures, algorithmic design, and object-oriented Java." },
      { title: "UTP Stage II: Business (Asper School of Business)", level: "University Transfer (Year 1)", desc: "Foundational coursework in microeconomics, financial accounting, business communications, and marketing principles." }
    ],
    opportunities: [
      {
        id: 4799,
        title: "Navitas ICM Academic Merit Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition scholarship awarded each academic term to the two highest-achieving international students completing UTP Stage II with exceptional GPAs.",
        funding: "Full semester tuition fee waiver equivalent to approximately CAD $9,000",
        fee: "CAD $0 (automatic consideration based on term GPA)",
        tuition: "CAD $20,400 per full academic year (30 credit units)",
        deadline: "2027-08-30",
        deadlineText: "August 30, 2027 (Prior to fall term completion)",
        source: "https://www.icmanitoba.ca/scholarships",
        requirements: {
          gpa: "Enrolled full-time in UTP Stage II with a minimum semester GPA of 3.8/4.0",
          ielts: "Direct-entry English satisfied upon admission",
          gre: "Not required",
          papers: "Demonstrated peer tutoring and active involvement in ICM student leadership",
          references: "Faculty lecturer endorsement"
        }
      },
      {
        id: 4800,
        title: "UTP Stage II to University of Manitoba Engineering Transfer",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        desc: "Guaranteed pathway into Year 2 of Electrical, Mechanical, Civil, or Biosystems Engineering upon achieving the competitive AGPA threshold.",
        funding: "Eligible for University of Manitoba International Student Continuing Scholarships (CAD $1,000–$3,000)",
        fee: "CAD $110 ICM registration fee",
        tuition: "CAD $20,400 for first-year ICM credits",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Fall intake)",
        source: "https://www.icmanitoba.ca/programs/engineering",
        requirements: {
          gpa: "Completion of 30 UTP Stage II credits with minimum 2.50 AGPA (higher for competitive engineering streams)",
          ielts: "IELTS 6.0 overall with no band below 5.5",
          gre: "Not required",
          papers: "Completed Grade 12 Math, Chemistry, and Physics transcripts",
          references: "Not required"
        }
      },
      {
        id: 4801,
        title: "UTP Stage II Computer Science Pathway Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Foundational academic pathway leading to the second year of the BSc in Computer Science at the University of Manitoba.",
        funding: "Eligible for ICM Peer Tutor Employment (CAD $16.50/hour)",
        fee: "CAD $110 application fee",
        tuition: "CAD $20,400 per academic year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.icmanitoba.ca/programs/computer-science",
        requirements: {
          gpa: "High school completion with strong grades in senior mathematics",
          ielts: "IELTS 6.0 (direct entry) or IELTS 5.5 (integrated support track)",
          gre: "Not required",
          papers: "Official high school transcripts and graduation certificate",
          references: "One teacher reference"
        }
      },
      {
        id: 4802,
        title: "Asper School of Business UTP Stage II Entry & Transfer",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Direct course transfer into the prestigious AACSB-accredited Asper School of Business Bachelor of Commerce (Honours) degree.",
        funding: "Manitoba provincial post-secondary bursary options",
        fee: "CAD $110 application fee",
        tuition: "CAD $20,400/year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.icmanitoba.ca/programs/business",
        requirements: {
          gpa: "Minimum 2.60 cumulative GPA across 10 UTP Stage II courses for guaranteed Asper transfer",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Completed economics and statistics pre-requisites",
          references: "Not required"
        }
      },
      {
        id: 4803,
        title: "ICM Community Leadership and Cultural Engagement Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Grant awarded to student ambassadors organizing multi-cultural festivals, peer wellbeing groups, and international student orientation.",
        funding: "CAD $1,250 tuition credit per semester",
        fee: "CAD $0",
        tuition: "Applied toward continuing tuition",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.icmanitoba.ca/student-life",
        requirements: {
          gpa: "Good academic standing (GPA 2.8+)",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Demonstrated involvement as an ICM Peer Leader or campus volunteer",
          references: "Student Experience Coordinator reference"
        }
      },
      {
        id: 4804,
        title: "Manitoba Tech Pathway Work-Study Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "On-campus work-study opportunity allowing international pathway students to gain valuable Canadian computing and lab support experience.",
        funding: "CAD $16.00/hour up to 15 hours per week during academic terms",
        fee: "CAD $0",
        tuition: "Earnings paid directly to student bi-weekly",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.icmanitoba.ca/careers-on-campus",
        requirements: {
          gpa: "Completed at least one full semester at ICM with GPA 3.0+",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Canadian-format CV and cover letter",
          references: "ICM instructor reference"
        }
      },
      {
        id: 4805,
        title: "UTP Stage I Pre-University Foundation Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Eight-month bridge program for students completing Grade 11 or requiring academic foundations before progressing to university-level UTP Stage II.",
        funding: "Early enrollment tuition fee discount CAD $1,000",
        fee: "CAD $110",
        tuition: "CAD $18,200 for full foundation package",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.icmanitoba.ca/programs/utp-stage-1",
        requirements: {
          gpa: "Successful completion of Year 11 secondary schooling with passing grades",
          ielts: "IELTS 5.0 to 5.5",
          gre: "Not required",
          papers: "Secondary academic transcripts",
          references: "School principal or teacher letter"
        }
      }
    ],
    researchers: [
      {
        id: 2076,
        name: "Dr. Susan Prentice",
        title: "Academic Director & Liaison Professor",
        department: "Academic Affairs & University Transfer",
        email: "susan.prentice@icmanitoba.ca",
        phone: "+1 204-474-8470",
        interests: ["Higher Education Transitions", "Curriculum Articulation", "International Student Retention", "Sociology of Education"],
        website: "https://www.icmanitoba.ca/faculty/dr-susan-prentice",
        subject: "social-sciences",
        summary: "Dr. Susan Prentice coordinates academic equivalencies and faculty liaison between ICM and the University of Manitoba Senate, optimizing transfer success."
      },
      {
        id: 2077,
        name: "Mohamed Farghaly",
        title: "Lecturer in Mathematics & Engineering Foundations",
        department: "School of Engineering & STEM Pathways",
        email: "mohamed.farghaly@icmanitoba.ca",
        phone: "+1 204-474-8471",
        interests: ["Calculus Pedagogy", "Applied Linear Algebra", "Engineering Problem Solving", "STEM Bridging Frameworks"],
        website: "https://www.icmanitoba.ca/faculty/mohamed-farghaly",
        subject: "mathematics",
        summary: "Mohamed Farghaly instructs differential calculus and linear algebra for engineering aspirants, specializing in diagnostics that close international curricular gaps."
      },
      {
        id: 2078,
        name: "Elena Guseva",
        title: "Senior Lecturer in Computing & Data Foundations",
        department: "School of Computer Science",
        email: "elena.guseva@icmanitoba.ca",
        phone: "+1 204-474-8472",
        interests: ["Object-Oriented Programming", "Data Structures", "Algorithmic Thinking", "Active Learning Labs"],
        website: "https://www.icmanitoba.ca/faculty/elena-guseva",
        subject: "computer-science",
        summary: "Elena Guseva directs introductory computer programming laboratories, teaching algorithmic design principles that prepare students for advanced software courses at U of M."
      }
    ]
  },

  // 5. Germany: CBS International Business School
  {
    institution: "CBS International Business School",
    slug: "cbs-international-business-school-germany",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 234,
    location: "Cologne / Mainz / Potsdam, Germany",
    website: "https://www.cbs.de",
    shortName: "CBS Business School",
    badge: "FIBAA & IACBE Accredited Management",
    overview: "CBS International Business School, founded in 1993 with flagship campuses in Cologne, Mainz, Potsdam, and Aachen, is a leading private business university in Germany accredited by the German Science Council (Wissenschaftsrat), FIBAA, and the International Accreditation Council for Business Education (IACBE).",
    lead: "Explore FIBAA-accredited international MBA degrees, English-taught digital management curricula, and CBS merit scholarships in Germany.",
    description: "CBS International Business School English master's degrees, international MBA tuition scholarships, and German corporate business partnerships.",
    quickFacts: {
      type: "State-Recognized Private University of Applied Sciences (Hochschule)",
      campus: "Hardefuststraße Campus, Cologne (plus Mainz, Potsdam, and Berlin-Schönefeld)",
      accreditation: "German Science Council (Wissenschaftsrat) / FIBAA Premium Seal / IACBE",
      admissions: "CBS Online Assessment & Personal Interview (rolling)",
      language: "English (TOEFL iBT 83, IELTS 6.5, or Duolingo 115) or German C1 for German tracks",
      aid: "CBS Best-Performer Scholarships & EU/International Tuition Discounts"
    },
    strengths: [
      "100% English-taught Bachelor's, Master's, and full-time MBA degrees",
      "Compulsory integrated internships with DAX companies and international multinationals",
      "Top rankings in CHE (Centrum für Hochschulentwicklung) for international orientation and practical relevance",
      "Global network of over 160 partner universities worldwide"
    ],
    programs: [
      { title: "Master of Arts in International Business", level: "Graduate Degree", desc: "Four-semester English master's covering strategic corporate management, global value chains, digital entrepreneurship, and applied business consulting." },
      { title: "Fast-Track MBA (International Management)", level: "Master of Business Administration", desc: "One-year intensive general management curriculum tailored for professionals, featuring executive leadership coaching and case-study strategy." },
      { title: "Bachelor of Science in Digital Management & Data Analytics", level: "Undergraduate Degree", desc: "Rigorous three-year program combining corporate finance, predictive analytics, enterprise data architecture, and practical internships." }
    ],
    opportunities: [
      {
        id: 4806,
        title: "CBS Best-Performer Scholarship for International Students",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Merit-based tuition reduction covering up to 50% of tuition fees for outstanding international candidates admitted to English-taught degree programs.",
        funding: "Up to 50% tuition reduction (saving approximately €6,000–€7,500 per year)",
        fee: "€0 application fee for direct university evaluation",
        tuition: "€14,880 to €16,680 per academic year for international students",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Winter intake)",
        source: "https://www.cbs.de/en/financing-and-scholarships/scholarships/",
        requirements: {
          gpa: "Excellent previous academic grade point average (German grade equivalent 2.0 or better)",
          ielts: "IELTS 6.5 overall or TOEFL iBT 83",
          gre: "Not required; GMAT optional but advantageous",
          papers: "1,000-word essay on a global corporate sustainability or digital disruption challenge",
          references: "One academic and one professional letter of recommendation"
        }
      },
      {
        id: 4807,
        title: "Fast-Track International MBA Admission & Corporate Fellowship",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Intensive 12-month post-experience Master of Business Administration in English, featuring corporate consulting field trips in Germany.",
        funding: "Early-bird tuition discount of €1,500 plus corporate sponsorship eligibility",
        fee: "€0",
        tuition: "€19,800 total program tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.cbs.de/en/mba/",
        requirements: {
          gpa: "Completed Bachelor's degree (minimum 180 ECTS) and at least 1–2 years of professional work experience",
          ielts: "IELTS 6.5 or TOEFL iBT 85",
          gre: "Not required",
          papers: "Updated CV, motivation letter, and digital admissions assessment interview",
          references: "Two professional reference letters"
        }
      },
      {
        id: 4808,
        title: "Master of Science in Business Analytics & Artificial Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Two-year postgraduate degree blending machine learning algorithms, cloud business intelligence, and predictive consumer analytics.",
        funding: "Eligible for German Brain Capital educational fund (income-share agreement)",
        fee: "€0",
        tuition: "€7,440 per semester",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.cbs.de/en/master/business-analytics/",
        requirements: {
          gpa: "Undergraduate degree in business, economics, computing, or engineering with quantitative coursework",
          ielts: "IELTS 6.5 (minimum 6.0 per component)",
          gre: "Not required",
          papers: "Motivation statement highlighting analytical tools (Python, R, SQL)",
          references: "Academic reference letter"
        }
      },
      {
        id: 4809,
        title: "CBS Digital Transformation Innovation Grant",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Venture seed grant funded by the CBS Entrepreneurship Hub supporting student founders creating digital AI and fintech startups.",
        funding: "€5,000 prototype stipend, dedicated co-working space in Cologne, and mentor matching",
        fee: "€0",
        tuition: "Free to enrolled students",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.cbs.de/en/entrepreneurship/",
        requirements: {
          gpa: "Good academic standing in a CBS degree program",
          ielts: "English fluency",
          gre: "Not required",
          papers: "10-slide startup pitch deck detailing business model, addressable market, and technical viability",
          references: "Faculty mentor recommendation"
        }
      },
      {
        id: 4810,
        title: "German DAX Corporate Consulting Internship Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Compulsory four-to-six-month corporate internship in Frankfurt, Cologne, or Munich with firms like Lufthansa, Bayer, or DHL.",
        funding: "Remunerated industry internship (€1,100–€1,800/month standard corporate stipend)",
        fee: "€0",
        tuition: "Integrated in regular study plan",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (For summer semester placement)",
        source: "https://www.cbs.de/en/career-services/",
        requirements: {
          gpa: "Successful completion of first two semesters of Master's curriculum",
          ielts: "English 6.5 (basic German A2/B1 recommended for local integration)",
          gre: "Not required",
          papers: "Euro-pass CV and career target proposal",
          references: "Career Services advisor approval"
        }
      },
      {
        id: 4811,
        title: "CBS EU Solidarity and Global Diversity Fee Waiver",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Social impact scholarship designed to support talented students from developing economies who demonstrate extraordinary community leadership.",
        funding: "25% tuition fee reduction across the entire duration of the degree",
        fee: "€0",
        tuition: "Credited directly to tuition account",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.cbs.de/en/financing-and-scholarships/",
        requirements: {
          gpa: "Minimum 2.3 equivalent in German grading system",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Essay addressing social sustainability, UN Sustainable Development Goals, and community impact",
          references: "Two letters of support"
        }
      },
      {
        id: 4812,
        title: "Bachelor of Science in International Business Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year European Bachelor's degree including an integrated semester abroad at one of 160 international partner universities.",
        funding: "Erasmus+ grant (€350–€550/month) available for the mandatory semester abroad",
        fee: "€0",
        tuition: "€6,990 per semester",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.cbs.de/en/bachelor/international-business/",
        requirements: {
          gpa: "Abitur or recognized international high school diploma (e.g., IB, A-Levels)",
          ielts: "IELTS 6.0 or TOEFL iBT 79",
          gre: "Not required",
          papers: "Personal statement and transcript validation through uni-assist or CBS direct portal",
          references: "High school counselor reference"
        }
      }
    ],
    researchers: [
      {
        id: 2079,
        name: "Prof. Dr. Anja Karlshaus",
        title: "President & Professor of Human Resource Management",
        department: "Department of Management & Organizational Behavior",
        email: "a.karlshaus@cbs.de",
        phone: "+49 221 9318090",
        interests: ["Diversity Management", "Sustainable Human Resources", "Workplace Well-being", "Executive Leadership"],
        website: "https://www.cbs.de/en/faculty/prof-dr-anja-karlshaus",
        subject: "social-sciences",
        summary: "Prof. Dr. Anja Karlshaus, President of CBS International Business School, researches strategic human resource management, agile workforce leadership, and workplace diversity."
      },
      {
        id: 2080,
        name: "Prof. Dr. Markus Raueiser",
        title: "Vice President of Academic Affairs & Professor of Finance",
        department: "Department of Finance & Economics",
        email: "m.raueiser@cbs.de",
        phone: "+49 221 9318091",
        interests: ["Corporate Finance", "Mergers and Acquisitions", "Sustainable Finance & ESG", "Fintech Valuation"],
        website: "https://www.cbs.de/en/faculty/prof-dr-markus-raueiser",
        subject: "social-sciences",
        summary: "Prof. Dr. Markus Raueiser oversees academic quality and curriculum accreditation at CBS while publishing empirical analyses on corporate capital structures and ESG investing."
      },
      {
        id: 2081,
        name: "Prof. Dr. Tanja Becker",
        title: "Professor of Digital Marketing & Consumer Insights",
        department: "Department of Marketing & Communications",
        email: "t.becker@cbs.de",
        phone: "+49 221 9318092",
        interests: ["Digital Marketing Strategy", "Consumer Psychology", "Brand Storytelling", "Social Media Analytics"],
        website: "https://www.cbs.de/en/faculty/prof-dr-tanja-becker",
        subject: "social-sciences",
        summary: "Prof. Dr. Tanja Becker conducts research on digital consumer behaviour, omnichannel customer journeys, and ethical advertising in data-driven marketing ecosystems."
      }
    ]
  },

  // 6. Germany: Cusanus Hochschule für Gesellschaftsgestaltung
  {
    institution: "Cusanus Hochschule für Gesellschaftsgestaltung",
    slug: "cusanus-hochschule-fuer-gesellschaftsgestaltung",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 238,
    location: "Koblenz, Rhineland-Palatinate, Germany",
    website: "https://www.cusanus-hochschule.de",
    shortName: "Cusanus Hochschule",
    badge: "Pluralist Economics & Ecological Transformation",
    overview: "Cusanus Hochschule für Gesellschaftsgestaltung (formerly in Bernkastel-Kues, now based in Koblenz) is a recognized private German university celebrated across Europe for its pioneering work in pluralist economics, philosophy of social transformation, ecological transition, and democratic institutional design.",
    lead: "Study pluralist economics, socio-ecological transformation, and transformative philosophy at Cusanus Hochschule in Koblenz.",
    description: "Cusanus Hochschule pluralist economics master's, ecological transformation research, and German social transition fellowships.",
    quickFacts: {
      type: "State-Recognized Specialized University (Hochschule für Gesellschaftsgestaltung)",
      campus: "Florinsmarkt Campus, Koblenz, Rhineland-Palatinate",
      accreditation: "German Science Council (Wissenschaftsrat) / Ministry of Science Rhineland-Palatinate",
      admissions: "Direct institutional dossier submission & exploratory interview",
      language: "German (TestDaF 4 / Goethe C1) with bilingual English seminar components",
      aid: "Deutschlandstipendium, BAföG eligibility & Cusanus Solidarity Fund (Umgekehrter Generationenvertrag)"
    },
    strengths: [
      "Pioneering European centre for pluralist, heterodox, and ecological economics",
      "Interdisciplinary philosophy integrating social responsibility, degrowth, and democracy",
      "Low student-to-faculty ratios fostering intensive participatory seminar dialogues",
      "Income-share agreement model (Generationenvertrag) enabling debt-free studies"
    ],
    programs: [
      { title: "Master of Arts in Ökonomie und Gesellschaftsgestaltung (Economics & Social Transformation)", level: "Graduate Degree", desc: "Four-semester interdisciplinary master's examining pluralist economic theory, planetary ecological boundaries, and post-capitalist socio-economic models." },
      { title: "Master of Arts in Philosophie und Gesellschaftsgestaltung", level: "Graduate Degree", desc: "Philosophical study of democratic institutions, political ecology, ethics of technology, and cultural transformation." },
      { title: "Bachelor of Arts in Philosophie, Politik und Ökonomik (PPE for Transformation)", level: "Undergraduate Degree", desc: "Foundational three-year curriculum combining political philosophy, institutional economics, and community action practicums." }
    ],
    opportunities: [
      {
        id: 4813,
        title: "Cusanus Solidarity Generation Contract (Umgekehrter Generationenvertrag)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Ethical income-share financing agreement enabling students to study tuition-free and repay a percentage of income only after reaching a stable salary threshold.",
        funding: "100% tuition coverage during the study period; income-dependent deferred repayment",
        fee: "€0 application fee",
        tuition: "Normally €450–€600/month; deferred under Generationenvertrag",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027 (Winter semester)",
        source: "https://www.cusanus-hochschule.de/studium/finanzierung/",
        requirements: {
          gpa: "Admission to an accredited Bachelor's or Master's program at Cusanus Hochschule",
          ielts: "German C1 proficiency (TestDaF or DSH-2)",
          gre: "Not required",
          papers: "Essay explaining commitment to social and ecological transformation",
          references: "Personal interview and one character reference"
        }
      },
      {
        id: 4814,
        title: "Master of Arts Ökonomie und Gesellschaftsgestaltung Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Two-year postgraduate degree analyzing heterodox economic theory, ecological macroeconomics, money creation, and circular socio-ecological systems.",
        funding: "Eligible for federal BAföG assistance and Heinrich Böll / Rosa Luxemburg foundation grants",
        fee: "€0",
        tuition: "€5,400 per academic year (flexible self-assessment scale)",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.cusanus-hochschule.de/studium/master-oekonomie/",
        requirements: {
          gpa: "Undergraduate degree (at least 180 ECTS) in economics, social sciences, philosophy, or related fields",
          ielts: "German C1 / English B2",
          gre: "Not required",
          papers: "1,500-word reflection essay on an ecological or economic transformation topic",
          references: "Academic reference letter"
        }
      },
      {
        id: 4815,
        title: "Postdoctoral Fellowship in Pluralist Economics and Social Ecology",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Two-year salaried research fellowship investigating sustainable financial systems, commons governance, and regenerative regional economics.",
        funding: "Full TV-L E13 postdoctoral salary (approx. €52,000–€58,000 gross per annum)",
        fee: "€0",
        tuition: "Not applicable (research employment position)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.cusanus-hochschule.de/forschung/",
        requirements: {
          gpa: "Completed doctoral degree (PhD/Dr. rer. pol.) in economics, political science, or environmental sociology",
          ielts: "German and English academic proficiency",
          gre: "Not required",
          papers: "Comprehensive 5-page research agenda detailing contributions to ecological macroeconomics",
          references: "Three academic peer letters and list of peer-reviewed publications"
        }
      },
      {
        id: 4816,
        title: "Deutschlandstipendium at Cusanus Hochschule",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Federal national scholarship matched by private donors rewarding academic excellence and proven engagement in ecological or civic causes.",
        funding: "€300 per month (€3,600 per year) paid directly to the student for one year (renewable)",
        fee: "€0",
        tuition: "Non-taxable cash stipend",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.cusanus-hochschule.de/studium/finanzierung/deutschlandstipendium/",
        requirements: {
          gpa: "Top academic performance in previous degree coursework",
          ielts: "German C1",
          gre: "Not required",
          papers: "Documentation of voluntary work in NGOs, climate initiatives, or community organizing",
          references: "Faculty recommendation letter"
        }
      },
      {
        id: 4817,
        title: "Master of Arts in Philosophie und Gesellschaftsgestaltung Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-semester advanced program examining critical theory, democratic theory, ethics of artificial intelligence, and transformative epistemologies.",
        funding: "Eligible for internal solidarity fee reduction",
        fee: "€0",
        tuition: "€5,400 per year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.cusanus-hochschule.de/studium/master-philosophie/",
        requirements: {
          gpa: "Bachelor's degree with coursework in humanities, philosophy, or social theory",
          ielts: "German C1",
          gre: "Not required",
          papers: "Exposé discussing a contemporary philosophical challenge in democratic society",
          references: "One referee"
        }
      },
      {
        id: 4818,
        title: "Transformative Field Practicum in Regional Community Innovation",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Mandatory four-month practical semester embedded within ecological farming cooperatives, regional transition towns, or public energy utilities.",
        funding: "Field grant subsidy of €600/month provided through university partner consortium",
        fee: "€0",
        tuition: "Integrated into degree schedule",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.cusanus-hochschule.de/praxis/",
        requirements: {
          gpa: "Satisfactory completion of core modules in institutional analysis",
          ielts: "German C1",
          gre: "Not required",
          papers: "Practicum project proposal detailing community intervention goals",
          references: "Internship coordinator sign-off"
        }
      },
      {
        id: 4819,
        title: "Bachelor of Arts in Philosophie, Politik und Ökonomik Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Undergraduate degree providing deep cross-disciplinary foundations in political theory, macroeconomic structures, and systemic sustainability.",
        funding: "Covered by solidarity financing agreements",
        fee: "€0",
        tuition: "€4,800 per year (adjustable on sliding scale)",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.cusanus-hochschule.de/studium/bachelor-ppe/",
        requirements: {
          gpa: "German Abitur or internationally recognized university entrance qualification",
          ielts: "German C1",
          gre: "Not required",
          papers: "Curriculum vitae and letter of motivation describing interest in social transformation",
          references: "Selection interview"
        }
      }
    ],
    researchers: [
      {
        id: 2082,
        name: "Prof. Dr. Silja Graupe",
        title: "Vice President & Professor of Economics and Philosophy",
        department: "Institute for Economy and Social Design",
        email: "silja.graupe@cusanus-hochschule.de",
        phone: "+49 261 9886290",
        interests: ["Pluralist Economics", "Epistemology of Economics", "Imagination and Transformation", "History of Economic Thought"],
        website: "https://www.cusanus-hochschule.de/personen/silja-graupe/",
        subject: "social-sciences",
        summary: "Prof. Dr. Silja Graupe is co-founder of Cusanus Hochschule and an international authority on pluralist economics, critiquing orthodox financial models and championing cognitive freedom in economic pedagogy."
      },
      {
        id: 2083,
        name: "Prof. Dr. Reinhard Loske",
        title: "Professor of Sustainability and Societal Transformation",
        department: "Institute for Ecological Transformation",
        email: "reinhard.loske@cusanus-hochschule.de",
        phone: "+49 261 9886291",
        interests: ["Ecological Macroeconomics", "Climate Policy", "Degrowth and Post-Growth", "Energy Transition Politics"],
        website: "https://www.cusanus-hochschule.de/personen/reinhard-loske/",
        subject: "environment",
        summary: "Prof. Dr. Reinhard Loske is a former senator and lead author of major climate reports, researching planetary boundary governance, circular economies, and socio-ecological policy."
      },
      {
        id: 2084,
        name: "Dr. Stephan Panther",
        title: "Professor of Institutional and International Economics",
        department: "Department of Economics",
        email: "stephan.panther@cusanus-hochschule.de",
        phone: "+49 261 9886292",
        interests: ["Institutional Economics", "Comparative Capitalism", "Political Economy of Europe", "Social Cohesion"],
        website: "https://www.cusanus-hochschule.de/personen/stephan-panther/",
        subject: "social-sciences",
        summary: "Dr. Stephan Panther investigates the historical evolution of economic institutions, public trust, and socio-economic divergence within the European Union."
      }
    ]
  },

  // 7. Germany: Duale Hochschule Baden-Württemberg Mosbach (DHBW Mosbach)
  {
    institution: "Duale Hochschule Baden-Württemberg Mosbach (DHBW Mosbach)",
    slug: "dhbw-mosbach-cooperative-state-university",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 241,
    location: "Mosbach & Bad Mergentheim, Baden-Württemberg, Germany",
    website: "https://www.mosbach.dhbw.de",
    shortName: "DHBW Mosbach",
    badge: "Dual Higher Education & Applied Engineering",
    overview: "Duale Hochschule Baden-Württemberg Mosbach (DHBW Mosbach), situated in the Neckar-Odenwald region with campuses in Mosbach and Bad Mergentheim, delivers the world-renowned German dual study model. Enrolled students alternate every three months between university theory and fully salaried employment at premier industrial and IT corporate partners.",
    lead: "Gain three years of salaried industry employment while earning a Bachelor of Engineering or Science at DHBW Mosbach.",
    description: "DHBW Mosbach dual university engineering, computer science degrees, salaried corporate apprenticeships, and Baden-Württemberg state programs.",
    quickFacts: {
      type: "Public Cooperative State University (Duale Hochschule)",
      campus: "Lohrtalweg Campus, Mosbach & Schloss Campus, Bad Mergentheim",
      accreditation: "State of Baden-Württemberg / ZEvA Accredited / Duale Hochschule System",
      admissions: "Signed training contract with an approved dual corporate partner + university matriculation",
      language: "German (TestDaF 4 / DSH-2 / Goethe C1); English B2 required for international modules",
      aid: "Monthly corporate salary (€1,100–€1,600/month) paid throughout all 3 years + state BAföG eligibility"
    },
    strengths: [
      "100% employment rate with students receiving continuous corporate remuneration during both theory and practical phases",
      "Over 1,100 corporate partner companies ranging from global giants (Audi, SAP, Würth) to innovative hidden champions",
      "State-of-the-art laboratories for robotics, mechatronics, virtual reality, and smart factory automation",
      "Seamless progression from Bachelor of Engineering to Master's at the DHBW Center for Advanced Studies (CAS)"
    ],
    programs: [
      { title: "Bachelor of Engineering in Mechatronics & Industry 4.0", level: "Undergraduate Dual Degree", desc: "Three-year integrated curriculum blending mechanical engineering, embedded electronics, cyber-physical automation, and industrial robotics." },
      { title: "Bachelor of Science in Applied Computer Science (Angewandte Informatik)", level: "Undergraduate Dual Degree", desc: "Rigorous software engineering, cloud computing, database architectures, and IT cybersecurity developed through corporate development cycles." },
      { title: "Bachelor of Arts in International Business & Trade", level: "Undergraduate Dual Degree", desc: "Global supply chain management, export logistics, ERP software (SAP), and international sales strategies." }
    ],
    opportunities: [
      {
        id: 4820,
        title: "Dual Study Salaried Corporate Contract (Mechatronics B.Eng.)",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Full three-year salaried dual contract with a participating Baden-Württemberg automotive or industrial automation corporation.",
        funding: "Continuous monthly salary of €1,150–€1,550 plus covered social insurance and company equipment",
        fee: "€0 tuition; standard €180 semester administrative fee",
        tuition: "Tuition-free under Baden-Württemberg cooperative state university regulations",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Rolling partner recruitment)",
        source: "https://www.mosbach.dhbw.de/studienangebot/bachelor/technik/mechatronik/",
        requirements: {
          gpa: "General higher education entrance qualification (Abitur or equivalent with strong math/physics marks)",
          ielts: "German C1 proficiency (DSH-2 or TestDaF 4)",
          gre: "Not required",
          papers: "Corporate assessment center success and signed dual training contract (Ausbildungsvertrag)",
          references: "Two references"
        }
      },
      {
        id: 4821,
        title: "Dual Study Salaried Corporate Contract (Applied Computer Science B.Sc.)",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-year fully funded bachelor's degree in applied software engineering with guaranteed industrial placement at SAP, IBM, or regional IT leaders.",
        funding: "Monthly salary of €1,200 to €1,600 during both university and corporate phases",
        fee: "€0 tuition fee",
        tuition: "Free state higher education",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.mosbach.dhbw.de/studienangebot/bachelor/technik/angewandte-informatik/",
        requirements: {
          gpa: "Abitur or international university entrance qualification with emphasis in computing or mathematics",
          ielts: "German C1",
          gre: "Not required",
          papers: "Curriculum vitae and corporate interview confirmation",
          references: "Corporate partner approval"
        }
      },
      {
        id: 4822,
        title: "DHBW Mosbach Smart Factory Automation Research Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Applied research fellowship with the Institute for Cyber-Physical Systems focusing on digital twins, edge IoT, and automated guided vehicles (AGVs).",
        funding: "€22,000 annual research grant plus dedicated industrial prototyping workstation",
        fee: "€0",
        tuition: "Not applicable",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.mosbach.dhbw.de/forschung/",
        requirements: {
          gpa: "Completed Bachelor's degree in Mechatronics, Electrical Engineering, or Computer Science (GPA 2.0 or better)",
          ielts: "German C1 / English B2",
          gre: "Not required",
          papers: "Research proposal detailing manufacturing telemetry or predictive maintenance algorithms",
          references: "Academic and corporate partner endorsements"
        }
      },
      {
        id: 4823,
        title: "Erasmus+ International Dual Exchange Grant for DHBW Scholars",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Mobility stipend supporting dual students undertaking their theoretical trimester or practical corporate term abroad in Europe or North America.",
        funding: "€450–€600 per month travel and living subsidy in addition to regular monthly corporate salary",
        fee: "€0",
        tuition: "Covered by dual exchange agreement",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.mosbach.dhbw.de/international/",
        requirements: {
          gpa: "Passing grades in all foundational 1st and 2nd year dual modules",
          ielts: "English B2/C1 depending on host institution",
          gre: "Not required",
          papers: "Formal corporate release agreement and international learning contract",
          references: "Dual partner training supervisor approval"
        }
      },
      {
        id: 4824,
        title: "Master of Science in Integrated Engineering (CAS Heilbronn / Mosbach)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Part-time postgraduate degree delivered through the DHBW Center for Advanced Studies for practicing engineers leading Industry 4.0 projects.",
        funding: "Corporate tuition fee reimbursement (typically 100% sponsored by employer)",
        fee: "€0",
        tuition: "€16,500 total program tuition (employer sponsored)",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.cas.dhbw.de/master-technik/",
        requirements: {
          gpa: "Completed technical Bachelor's degree (210 ECTS or 180 ECTS with bridging modules) and minimum one year of engineering experience",
          ielts: "German C1 / English B2",
          gre: "Not required",
          papers: "Employer support declaration guaranteeing time allocation for modular attendance",
          references: "Employer recommendation letter"
        }
      },
      {
        id: 4825,
        title: "Baden-Württemberg State Graduate Award for Innovative Dual Theses",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Prize awarded annually by the Ministry of Science and corporate sponsors for outstanding bachelor theses delivering commercial innovations.",
        funding: "€2,500 cash honorarium and ceremonial recognition at the DHBW Annual Assembly",
        fee: "€0",
        tuition: "Direct cash grant",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.mosbach.dhbw.de/unsere-hochschule/aktuelles/",
        requirements: {
          gpa: "Bachelor thesis graded 1.3 or 1.0 (Summa Cum Laude)",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Submission of completed bachelor thesis and corporate implementation confirmation",
          references: "Supervising professor nomination"
        }
      },
      {
        id: 4826,
        title: "Bachelor of Arts in International Business Dual Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year business management dual curriculum at Campus Bad Mergentheim combining international trade law, accounting, and supply chains.",
        funding: "Salaried placement (€1,100–€1,450/month) with international export companies",
        fee: "€0 tuition",
        tuition: "Free under state regulations",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.mosbach.dhbw.de/studienangebot/bachelor/wirtschaft/international-business/",
        requirements: {
          gpa: "Abitur or entrance qualification with high proficiency in English and Mathematics",
          ielts: "German C1 and English B2/C1",
          gre: "Not required",
          papers: "Partner firm contract (Ausbildungsvertrag)",
          references: "Company recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2085,
        name: "Prof. Dr. Gery Kovacs",
        title: "Rektor (President) & Professor of Production Systems",
        department: "Rektorat & Industrial Engineering",
        email: "gery.kovacs@mosbach.dhbw.de",
        phone: "+49 6261 9390",
        interests: ["Cooperative Higher Education", "Production Engineering", "Supply Chain Optimization", "Quality Systems"],
        website: "https://www.mosbach.dhbw.de/rektorat/prof-dr-kovacs",
        subject: "engineering",
        summary: "Prof. Dr. Gery Kovacs is Rektor of DHBW Mosbach, steering strategic dual partnerships across Baden-Württemberg and researching lean production operations."
      },
      {
        id: 2086,
        name: "Prof. Dr. Stephan Freichel",
        title: "Dean of Business Administration & Professor of Supply Chain Management",
        department: "Fakultät Wirtschaft (Bad Mergentheim)",
        email: "stephan.freichel@mosbach.dhbw.de",
        phone: "+49 7931 530600",
        interests: ["Logistics and Supply Chain Management", "Global Distribution Networks", "ERP Integration", "International Trade Logistics"],
        website: "https://www.mosbach.dhbw.de/fakultaet-wirtschaft/prof-dr-freichel",
        subject: "social-sciences",
        summary: "Prof. Dr. Stephan Freichel leads supply chain research at the Bad Mergentheim campus, consulting with major multinational distributors on omnichannel logistics."
      },
      {
        id: 2087,
        name: "Prof. Dr. Carsten Müller",
        title: "Head of Applied Computer Science & Software Architect",
        department: "Fakultät Technik (Mosbach)",
        email: "carsten.mueller@mosbach.dhbw.de",
        phone: "+49 6261 939200",
        interests: ["Distributed Systems", "Cloud Computing Architectures", "Microservices", "Industrial Internet of Things"],
        website: "https://www.mosbach.dhbw.de/fakultaet-technik/prof-dr-mueller",
        subject: "computer-science",
        summary: "Prof. Dr. Carsten Müller directs the Applied Computer Science curriculum, evaluating distributed database performance and IoT edge processing in industrial environments."
      }
    ]
  },

  // 8. Germany: Dresden International University (DIU)
  {
    institution: "Dresden International University (DIU)",
    slug: "dresden-international-university-diu",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 244,
    location: "Dresden, Saxony, Germany",
    website: "https://www.di-uni.de",
    shortName: "DIU Dresden",
    badge: "Postgraduate Medicine & Engineering Excellence",
    overview: "Dresden International University (DIU), founded in 2003 as the affiliated continuing-education and postgraduate university of Technische Universität Dresden (TU Dresden), is a state-recognized private institution offering high-calibre international Master's degrees in clinical medicine, specialized healthcare, intellectual property law, and automotive engineering.",
    lead: "Advance your medical, engineering, or legal career with prestigious postgraduate master's degrees at Dresden International University.",
    description: "DIU Dresden postgraduate medical master's degrees, automotive engineering programs, and international continuing education fellowships.",
    quickFacts: {
      type: "State-Recognized Postgraduate University (Associated with TU Dresden)",
      campus: "Freiberger Straße Campus, Dresden, Saxony (World Trade Center Dresden)",
      accreditation: "German Science Council (Wissenschaftsrat) / ZEvA / FIBAA / ACQUIN",
      admissions: "Direct DIU online application with verified degree credentials (rolling)",
      language: "English (IELTS 6.5 / TOEFL iBT 85) for international tracks; German C1 for clinical tracks",
      aid: "DIU Merit Tuition Reductions & Corporate Educational Grants"
    },
    strengths: [
      "Direct synergy and faculty exchange with TU Dresden (Excellence University)",
      "World-class clinical master's programs in Osteology, Chiropractic, and Clinical Research",
      "Specialized Master of Laws (LL.M.) in Intellectual Property Rights and International Business",
      "High proportion of international postgraduate scholars from over 35 nations"
    ],
    programs: [
      { title: "Master of Science in Clinical Research", level: "Postgraduate Master's", desc: "Four-semester specialized English master's preparing clinical trial managers, biostatisticians, and pharmaceutical regulatory affairs directors." },
      { title: "Master of Science in Non-Destructive Testing (NDT)", level: "Postgraduate Master's", desc: "Internationally unique engineering master's covering ultrasound diagnostics, acoustic emission, and radiographic inspection of aerospace structures." },
      { title: "Master of Laws (LL.M.) in Intellectual Property Law & Management", level: "Master of Laws", desc: "Comprehensive legal degree examining European patent litigation, trademark treaties, software licensing, and technology transfer." }
    ],
    opportunities: [
      {
        id: 4827,
        title: "DIU International Postgraduate Excellence Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "Merit-based partial tuition scholarship awarded to international medical doctors and engineers admitted to Master of Science programs at DIU.",
        funding: "€3,000 direct tuition reduction applied across the standard study duration",
        fee: "€0 application fee",
        tuition: "€14,800 to €18,500 total program tuition (spread across 4 semesters)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.di-uni.de/en/financing/",
        requirements: {
          gpa: "Completed medical degree (MBBS/MD) or technical Bachelor's/Master's degree with minimum 2.0 German grade equivalent",
          ielts: "IELTS 6.5 overall or TOEFL iBT 85",
          gre: "Not required",
          papers: "Detailed curriculum vitae and statement of intent highlighting research or clinical background",
          references: "Two professional reference letters"
        }
      },
      {
        id: 4828,
        title: "Master of Science in Clinical Research Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Two-year postgraduate curriculum qualifying medical professionals for leadership in international multicenter clinical trials and ICH-GCP audits.",
        funding: "Flexible installment plan and employer educational tax deduction in Germany",
        fee: "€0",
        tuition: "€3,950 per semester",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.di-uni.de/en/study-programmes/health-medicine/clinical-research/",
        requirements: {
          gpa: "Degree in Medicine, Pharmacy, Biology, or Life Sciences (minimum 240 ECTS or bridging modules)",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Proof of clinical or laboratory work experience",
          references: "Medical director recommendation"
        }
      },
      {
        id: 4829,
        title: "M.Sc. in Non-Destructive Testing (NDT) Aerospace Practicum",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Specialized postgraduate engineering training conducted in collaboration with Fraunhofer IKTS Dresden and the German Society for NDT (DGZfP).",
        funding: "Industrial research assistantship possibilities at Fraunhofer IKTS (€1,200/month)",
        fee: "€0",
        tuition: "€4,400 per semester",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.di-uni.de/en/study-programmes/engineering/non-destructive-testing/",
        requirements: {
          gpa: "Bachelor of Science or Engineering in mechanical, aerospace, civil, or materials science",
          ielts: "English 6.5",
          gre: "Not required",
          papers: "Motivation statement indicating interest in acoustic, radiographic, or electromagnetic inspection",
          references: "Academic reference letter"
        }
      },
      {
        id: 4830,
        title: "Master of Laws (LL.M.) in IP Law and Technology Transfer",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Intensive European patent and technology law program taught by patent judges, European Patent Office (EPO) examiners, and corporate counsel.",
        funding: "Early-registration fee reduction of €1,000",
        fee: "€0",
        tuition: "€13,500 total program tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.di-uni.de/en/study-programmes/law/intellectual-property-law/",
        requirements: {
          gpa: "Completed first law degree (Staatsexamen or LL.B.) or technical degree with legal foundation",
          ielts: "IELTS 6.5 or TOEFL iBT 85",
          gre: "Not required",
          papers: "Essay addressing a modern patent challenge (e.g., AI patentability or pharmaceutical compulsory licenses)",
          references: "Professional reference"
        }
      },
      {
        id: 4831,
        title: "DIU Clinical Trial Management Innovation Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Six-month research fellowship hosted at the University Hospital Carl Gustav Carus Dresden analyzing patient recruitment telemetry in oncology trials.",
        funding: "€2,200 monthly research stipend plus full access to the medical campus bioinformatics suites",
        fee: "€0",
        tuition: "Covered by fellowship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.di-uni.de/en/research/",
        requirements: {
          gpa: "Current matriculation in DIU M.Sc. Clinical Research or related medical doctorate",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Clinical trial research proposal approved by institutional ethics board",
          references: "Principal investigator nomination"
        }
      },
      {
        id: 4832,
        title: "Erasmus+ Staff & Student Mobility Grant at DIU",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "European mobility funding for postgraduate students conducting thesis research at partner universities in Austria, Switzerland, and the UK.",
        funding: "€450 to €600 per month subsistence allowance",
        fee: "€0",
        tuition: "Included in standard enrolment",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.di-uni.de/en/international/",
        requirements: {
          gpa: "Successful completion of at least two study modules at DIU",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Learning agreement detailing target European clinical or legal institution",
          references: "Program director signature"
        }
      },
      {
        id: 4833,
        title: "Master of Science in Prevention and Therapy Management Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Interdisciplinary master's combining preventative healthcare, sports science, clinical nutrition, and chronic disease rehabilitation.",
        funding: "Qualifies for German federal Bildungskredit low-interest student loans",
        fee: "€0",
        tuition: "€3,600 per semester",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.di-uni.de/en/study-programmes/health-medicine/prevention-management/",
        requirements: {
          gpa: "Degree in Physiotherapy, Sports Science, Nursing, or Health Sciences (minimum 180 ECTS)",
          ielts: "German C1 or English B2 depending on chosen language track",
          gre: "Not required",
          papers: "Professional registration certificate and CV",
          references: "Clinical supervisor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2088,
        name: "Prof. Dr. med. Peter Elsner",
        title: "Academic Dean & Professor of Clinical Medicine",
        department: "Department of Medical Sciences",
        email: "peter.elsner@di-uni.de",
        phone: "+49 351 40470100",
        interests: ["Clinical Trial Design", "Evidence-Based Medicine", "Dermatological Oncology", "Medical Ethics & Regulation"],
        website: "https://www.di-uni.de/en/team/prof-dr-med-peter-elsner/",
        subject: "biology",
        summary: "Prof. Dr. med. Peter Elsner oversees clinical postgraduate education at DIU, authoring guidelines for good clinical practice and clinical trial compliance."
      },
      {
        id: 2089,
        name: "Prof. Dr.-Ing. Henning Heuer",
        title: "Scientific Director & Professor of Sensor Systems",
        department: "Department of Engineering Sciences & NDT",
        email: "henning.heuer@di-uni.de",
        phone: "+49 351 40470101",
        interests: ["Non-Destructive Testing", "Eddy Current Testing", "High-Frequency Radar Imaging", "Materials Diagnostics"],
        website: "https://www.di-uni.de/en/team/prof-dr-ing-henning-heuer/",
        subject: "engineering",
        summary: "Prof. Dr.-Ing. Henning Heuer, jointly affiliated with Fraunhofer IKTS and DIU, is a world-renowned authority on non-destructive sensor testing and composite material evaluation."
      },
      {
        id: 2090,
        name: "Prof. Dr. jur. Christian Czychowski",
        title: "Head of Intellectual Property Law Programs",
        department: "Department of Law & Intellectual Property",
        email: "christian.czychowski@di-uni.de",
        phone: "+49 351 40470102",
        interests: ["Copyright in the Digital Era", "Patent Law and Standardization", "AI Licensing", "Technology Transfer Agreements"],
        website: "https://www.di-uni.de/en/team/prof-dr-jur-christian-czychowski/",
        subject: "social-sciences",
        summary: "Prof. Dr. jur. Christian Czychowski is a leading IP attorney and scholar lecturing on copyright, software patents, and international licensing treaties."
      }
    ]
  },

  // 9. Germany: Duale Hochschule Baden-Württemberg Villingen-Schwenningen (DHBW VS)
  {
    institution: "Duale Hochschule Baden-Württemberg Villingen-Schwenningen (DHBW VS)",
    slug: "dhbw-villingen-schwenningen-cooperative-state-university",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 246,
    location: "Villingen-Schwenningen, Baden-Württemberg, Germany",
    website: "https://www.dhbw-vs.de",
    shortName: "DHBW VS",
    badge: "Dual Business, Social Work & Health Management",
    overview: "Duale Hochschule Baden-Württemberg Villingen-Schwenningen (DHBW VS), situated in the Black Forest industrial and medical technology cluster, is a premier state university delivering dual Bachelor's degrees in Business Administration, Business Information Systems, Social Work, and Healthcare Management, combining salaried company apprenticeships with rigorous academic trimesters.",
    lead: "Experience guaranteed corporate salaries and state-accredited dual business and IT bachelor's degrees at DHBW Villingen-Schwenningen.",
    description: "DHBW Villingen-Schwenningen dual business degrees, business informatics, salaried corporate placements, and social work bachelor's.",
    quickFacts: {
      type: "Public Cooperative State University (Duale Hochschule)",
      campus: "Friedrich-Ebert-Straße Campus, Villingen-Schwenningen, Black Forest",
      accreditation: "State of Baden-Württemberg / ZEvA Accredited / Duale Hochschule System",
      admissions: "Signed training contract with an approved partner company + university matriculation",
      language: "German (DSH-2 / TestDaF 4 / Goethe C1); selected English business modules",
      aid: "Monthly corporate salary (€1,050–€1,550/month) throughout all 3 years + BAföG eligibility"
    },
    strengths: [
      "Continuous monthly remuneration from corporate partner firms throughout all three years of study",
      "Over 900 corporate partners across the Black Forest, Lake Constance, and Swiss border regions",
      "Specialized faculties for Healthcare Management, Social Work, Business Informatics, and Banking",
      "Nearly 90% of graduates receive immediate permanent employment offers from their partner firms"
    ],
    programs: [
      { title: "Bachelor of Science in Wirtschaftsinformatik (Business Information Systems)", level: "Undergraduate Dual Degree", desc: "Three-year integrated program covering enterprise systems architecture, data engineering, business process automation, and cloud cybersecurity." },
      { title: "Bachelor of Arts in Betriebswirtschaftslehre - Bank / Finance", level: "Undergraduate Dual Degree", desc: "Cooperative curriculum in commercial banking, corporate treasury, investment evaluation, and financial market regulation." },
      { title: "Bachelor of Arts in Soziale Arbeit (Social Work)", level: "Undergraduate Dual Degree", desc: "State-recognized professional training combining social law, clinical psychology, community rehabilitation, and youth welfare." }
    ],
    opportunities: [
      {
        id: 4834,
        title: "Dual Study Salaried Corporate Contract (Business Information Systems B.Sc.)",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Three-year fully salaried dual contract with regional medical technology, banking, or enterprise software corporations.",
        funding: "Guaranteed monthly corporate salary of €1,150–€1,550 across all 36 months",
        fee: "€0 tuition; €180 semester administrative contribution",
        tuition: "Tuition-free public state university education",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Rolling employer recruiting)",
        source: "https://www.dhbw-vs.de/studienangebot/wirtschaftsinformatik/",
        requirements: {
          gpa: "German Abitur or equivalent foreign secondary certificate with strong math and analytical scores",
          ielts: "German C1 proficiency (TestDaF 4 or DSH-2)",
          gre: "Not required",
          papers: "Signed corporate dual training contract (Ausbildungsvertrag)",
          references: "Employer assessment center confirmation"
        }
      },
      {
        id: 4835,
        title: "Dual Study Salaried Corporate Contract (BWL - Banking & Finance B.A.)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Cooperative bachelor's degree in commercial banking, asset management, and fintech with regional Sparkassen, Volksbanken, and private banks.",
        funding: "Monthly collective agreement salary of €1,180–€1,450 plus corporate health perks",
        fee: "€0",
        tuition: "Free under state regulations",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.dhbw-vs.de/studienangebot/bwl-bank/",
        requirements: {
          gpa: "Abitur or university entrance qualification",
          ielts: "German C1",
          gre: "Not required",
          papers: "Bank trainee employment agreement",
          references: "Bank HR reference"
        }
      },
      {
        id: 4836,
        title: "Dual Study Salaried Corporate Contract (Soziale Arbeit B.A.)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "State-recognized social work degree leading to the title of 'Staatlich anerkannte/r Sozialarbeiter/in' with salaried municipal welfare institutions.",
        funding: "Monthly collective salary (€1,200–€1,400/month under TVöD-SuE) during full 3 years",
        fee: "€0",
        tuition: "Tuition-free",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.dhbw-vs.de/studienangebot/soziale-arbeit/",
        requirements: {
          gpa: "Abitur or specialized entrance qualification in health/social studies",
          ielts: "German C1",
          gre: "Not required",
          papers: "Trainee contract with an accredited welfare organization or youth agency (Jugendamt)",
          references: "Welfare agency confirmation"
        }
      },
      {
        id: 4837,
        title: "DHBW VS Applied Health Informatics Research Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        desc: "Research fellowship investigating digital hospital records, telehealth data pipelines, and medical device software compliance in the Black Forest med-tech corridor.",
        funding: "€20,000 annual research grant and laboratory compute resources",
        fee: "€0",
        tuition: "Not applicable",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.dhbw-vs.de/forschung/",
        requirements: {
          gpa: "Bachelor's degree in Business Informatics, Computer Science, or Health Technology (GPA 2.2 or better)",
          ielts: "German C1 / English B2",
          gre: "Not required",
          papers: "Project proposal on clinical data interoperability (HL7/FHIR)",
          references: "Academic and corporate supervisor references"
        }
      },
      {
        id: 4838,
        title: "Erasmus+ European Trimester Mobility Grant at DHBW VS",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Stipend supporting dual students spending one study trimester abroad at partner business schools in France, Spain, Sweden, or the Netherlands.",
        funding: "€450–€600/month Erasmus+ allowance while continuing to receive full monthly corporate salary",
        fee: "€0",
        tuition: "Covered by inter-institutional Erasmus agreements",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.dhbw-vs.de/international/",
        requirements: {
          gpa: "Clear academic record in the first year of dual study",
          ielts: "English B2 or language of host institution",
          gre: "Not required",
          papers: "Learning agreement signed by partner firm and academic head",
          references: "Head of Studies approval"
        }
      },
      {
        id: 4839,
        title: "Master of Science in Business Management (CAS Dual Master's)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Postgraduate master's delivered through the Center for Advanced Studies for company managers balancing modular coursework with ongoing executive duties.",
        funding: "Subsidized or 100% reimbursed by sponsoring employer",
        fee: "€0",
        tuition: "€14,900 total tuition (employer sponsored)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.cas.dhbw.de/master-wirtschaft/",
        requirements: {
          gpa: "Undergraduate degree in business or economics (minimum 210 ECTS) and at least one year of relevant corporate experience",
          ielts: "German C1 / English B2",
          gre: "Not required",
          papers: "Employment verification and employer release agreement",
          references: "Managing director recommendation"
        }
      },
      {
        id: 4840,
        title: "Baden-Württemberg Foundation International Student Exchange Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Prestigious state scholarship facilitating bilateral exchange between Baden-Württemberg dual scholars and global partner universities.",
        funding: "€600–€1,000 per month travel and living allowance for up to four months",
        fee: "€0",
        tuition: "Direct scholarship disbursement",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.bw-stiftung.de/de/programme/baden-wuerttemberg-stipendium",
        requirements: {
          gpa: "Outstanding academic performance in the dual curriculum (top 15% of cohort)",
          ielts: "English C1",
          gre: "Not required",
          papers: "Personal statement detailing international ambassadorial role for Baden-Württemberg",
          references: "Rectorate nomination"
        }
      }
    ],
    researchers: [
      {
        id: 2091,
        name: "Prof. Dr. Ulrich Kotthaus",
        title: "Rektor & Professor of Management Information Systems",
        department: "Rektorat & Wirtschaftsinformatik",
        email: "ulrich.kotthaus@dhbw-vs.de",
        phone: "+49 7720 39060",
        interests: ["Enterprise Information Systems", "Cooperative University Management", "Digital Transformation", "Business Process Modeling"],
        website: "https://www.dhbw-vs.de/hochschule/leitung/prof-dr-kotthaus",
        subject: "computer-science",
        summary: "Prof. Dr. Ulrich Kotthaus is Rektor of DHBW Villingen-Schwenningen, guiding curriculum modernization in business informatics and corporate partnership networks."
      },
      {
        id: 2092,
        name: "Prof. Dr. Barbara Völzmann-Stickelbrock",
        title: "Dean of Business Administration & Professor of Commercial Law",
        department: "Fakultät Wirtschaft",
        email: "barbara.voelzmann@dhbw-vs.de",
        phone: "+49 7720 3906100",
        interests: ["Commercial Law", "Corporate Governance", "Labor Law in Dual Education", "Contract Law"],
        website: "https://www.dhbw-vs.de/fakultaet-wirtschaft/prof-dr-voelzmann",
        subject: "social-sciences",
        summary: "Prof. Dr. Barbara Völzmann-Stickelbrock oversees the business faculty at DHBW VS, publishing legal analyses on corporate governance and dual employment frameworks."
      },
      {
        id: 2093,
        name: "Prof. Dr. Paul Brandl",
        title: "Professor of Social Work and Healthcare Management",
        department: "Fakultät Sozialwesen",
        email: "paul.brandl@dhbw-vs.de",
        phone: "+49 7720 3906200",
        interests: ["Process Management in Social Care", "Quality Assurance in Healthcare", "Clinical Social Work", "Non-profit Organization Strategy"],
        website: "https://www.dhbw-vs.de/fakultaet-sozialwesen/prof-dr-brandl",
        subject: "social-sciences",
        summary: "Prof. Dr. Paul Brandl specializes in process optimization, quality management, and social administration within public welfare and hospital organizations."
      }
    ]
  },

  // 10. Italy: Skyup Academy
  {
    institution: "Skyup Academy",
    slug: "skyup-academy-computer-graphics-veneto",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 501,
    location: "Montebelluna, Treviso, Veneto, Italy",
    website: "https://www.skyupacademy.it",
    shortName: "Skyup Academy",
    badge: "Computer Graphics, VFX & 3D Animation",
    overview: "Skyup Academy, situated in Montebelluna (Treviso) in northern Italy's Veneto region, is an elite higher academy of digital arts specializing in 3D computer animation, visual effects (VFX), Unreal Engine game development, concept art, and digital sculpting for the international entertainment and video game industries.",
    lead: "Master 3D animation, Hollywood visual effects, and Unreal Engine virtual production at Skyup Academy in Veneto, Italy.",
    description: "Skyup Academy 3D digital art diplomas, VFX masterclasses, Unreal Engine game design, and international studio placement awards.",
    quickFacts: {
      type: "Specialized Academy of Digital Arts & Computer Graphics",
      campus: "Montebelluna Creative Campus, Treviso, Veneto",
      accreditation: "Autodesk Authorized Training Center / Unreal Engine Authorized Academic Partner / Chaos Group Center",
      admissions: "Artistic portfolio review and admissions interview (rolling enrollment)",
      language: "Italian (with bilingual English software instruction and international masterclasses)",
      aid: "Skyup Studio Talent Scholarships & Deferred Zero-Interest Tuition Financing"
    },
    strengths: [
      "Official Unreal Engine Authorized Academic Partner and Autodesk Training Center",
      "Direct instructor mentorship from senior artists working on major Hollywood blockbusters and AAA games",
      "State-of-the-art studio workstations equipped with high-end GPUs, render farms, and motion capture facilities",
      "Over 92% alumni placement rate in international VFX houses and gaming studios within one year"
    ],
    programs: [
      { title: "Master in 3D Digital Production & VFX", level: "Professional Master's", desc: "One-year intensive industry-level diploma covering Maya modeling, ZBrush digital sculpting, Houdini procedural simulation, and Nuke compositing." },
      { title: "Master in Unreal Engine Real-Time & Virtual Production", level: "Professional Master's", desc: "Advanced training in real-time lighting, Blueprints programming, virtual set cinematography, and game environment architecture." },
      { title: "Master in Concept Art & Digital Illustration", level: "Professional Master's", desc: "Comprehensive design training in character design, environment painting, visual storytelling, and Adobe Photoshop / 3D paint techniques." }
    ],
    opportunities: [
      {
        id: 4841,
        title: "Skyup Young Talents Scholarship in 3D Computer Graphics",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Merit-based tuition discount awarded to the most outstanding young digital artists presenting exceptional concept portfolios.",
        funding: "Up to €3,500 tuition discount on full-year Master's programs",
        fee: "€0 application fee",
        tuition: "€9,800 to €11,500 per academic year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027 (October intake)",
        source: "https://www.skyupacademy.it/borse-di-studio/",
        requirements: {
          gpa: "High school graduation certificate or equivalent secondary qualification",
          ielts: "Italian proficiency (B2) or English proficiency for international masterclasses",
          gre: "Not required",
          papers: "Creative digital portfolio (PDF or ArtStation link) comprising 8–15 pieces of 2D/3D work",
          references: "Portfolio review and technical motivational interview"
        }
      },
      {
        id: 4842,
        title: "Master in 3D Digital Production & VFX Enrolment",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Full-time professional master's qualifying artists for roles as 3D generalists, creature animators, Houdini FX TDs, and compositors.",
        funding: "Eligible for zero-interest installment plan across 12 to 24 months",
        fee: "€0",
        tuition: "€10,500 total program tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.skyupacademy.it/corsi/master-3d-computer-graphic/",
        requirements: {
          gpa: "Aptitude in visual arts, design, computer science, or architecture",
          ielts: "Italian B2 / English comprehension",
          gre: "Not required",
          papers: "Showreel or digital artwork showcase demonstrating spatial and artistic awareness",
          references: "Admissions committee interview"
        }
      },
      {
        id: 4843,
        title: "Master in Unreal Engine Real-Time Architecture & Gaming Admission",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Professional specialization in Unreal Engine 5 Nanite, Lumen lighting, world partitioning, and cinematic camera sequencer pipelines.",
        funding: "Unreal Academic Partner student asset pack vouchers worth €1,000",
        fee: "€0",
        tuition: "€9,800 total program tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.skyupacademy.it/corsi/master-unreal-engine/",
        requirements: {
          gpa: "Basic experience in 3D modeling, game development, or digital architecture",
          ielts: "Italian or English proficiency",
          gre: "Not required",
          papers: "CV and examples of interactive 3D or visual environment design",
          references: "One referee"
        }
      },
      {
        id: 4844,
        title: "Skyup International Studio Placement Residency",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Three-month paid junior artist residency facilitated at partner animation studios and game development houses across Italy and London.",
        funding: "€1,000–€1,500/month junior artist stipend plus studio mentorship",
        fee: "€0",
        tuition: "Free to graduating Master's students",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.skyupacademy.it/career-service/",
        requirements: {
          gpa: "Completion of Skyup Master's diploma with final showreel graded 90/100 or higher",
          ielts: "English B2 for international studios",
          gre: "Not required",
          papers: "Finished graduation showreel breakdown and production breakdown sheet",
          references: "Academy Art Director nomination"
        }
      },
      {
        id: 4845,
        title: "Master in Concept Art & Digital Illustration Admission",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Comprehensive masterclass focused on worldbuilding, cinematic color keys, costume design, and visual development for film and gaming.",
        funding: "Wacom Italy educational hardware grant eligibility",
        fee: "€0",
        tuition: "€9,200 total program tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.skyupacademy.it/corsi/master-concept-art/",
        requirements: {
          gpa: "Foundation in drawing, anatomy, and perspective",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Digital painting portfolio illustrating character or environmental concepts",
          references: "Instructor review"
        }
      },
      {
        id: 4846,
        title: "Veneto Digital Arts Regional Development Grant",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Regional European Social Fund (FSE) grant supporting young residents of Veneto undertaking advanced digital skills training.",
        funding: "Up to €2,000 co-financing grant applied to certified training course fees",
        fee: "€0",
        tuition: "Subsidized through regional training vouchers",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.skyupacademy.it/finanziamenti/",
        requirements: {
          gpa: "Residency in Veneto region and registered with regional employment agency (Centro per l'Impiego)",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "ISEE financial declaration and personal identification document",
          references: "Regional eligibility verification"
        }
      },
      {
        id: 4847,
        title: "Summer Intensive Masterclass in ZBrush Digital Sculpting",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Six-week intensive summer workshop in high-resolution digital creature anatomy, hard-surface modeling, and 3D printing preparation.",
        funding: "Early-bird discount of €300 for university and academy students",
        fee: "€0",
        tuition: "€1,800 course fee",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.skyupacademy.it/corsi-estivi/",
        requirements: {
          gpa: "Basic computer familiarity and enthusiasm for 3D art",
          ielts: "Italian comprehension",
          gre: "Not required",
          papers: "Short self-presentation email",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2094,
        name: "Mauro Baldissera",
        title: "Founder, CEO & Lead VFX Supervisor",
        department: "Department of 3D Computer Graphics & VFX",
        email: "mauro@skyupacademy.it",
        phone: "+39 0423 1990800",
        interests: ["Visual Effects Pipelines", "Procedural Modeling in Houdini", "Photorealistic Rendering", "Digital Compositing"],
        website: "https://www.skyupacademy.it/chi-siamo/",
        subject: "arts-design",
        summary: "Mauro Baldissera is the founder of Skyup Academy and a senior visual effects supervisor whose credits include international advertising campaigns, cinematics, and digital feature films."
      },
      {
        id: 2095,
        name: "Ivano Zanchetta",
        title: "Head of Unreal Engine & Real-Time Production",
        department: "Department of Virtual Production & Gaming",
        email: "ivano.zanchetta@skyupacademy.it",
        phone: "+39 0423 1990801",
        interests: ["Real-Time Cinematics", "Virtual Production with LED Volumes", "Unreal Engine Blueprints", "Lighting & Shader Architecture"],
        website: "https://www.skyupacademy.it/docenti/ivano-zanchetta/",
        subject: "computer-science",
        summary: "Ivano Zanchetta directs Unreal Engine curriculum at Skyup, training artists in virtual camera tracking, real-time lighting, and interactive gaming environments."
      },
      {
        id: 2096,
        name: "Christian Dan",
        title: "Senior Character Artist & Digital Sculpting Lead",
        department: "Department of Character Arts & Anatomy",
        email: "christian.dan@skyupacademy.it",
        phone: "+39 0423 1990802",
        interests: ["Anatomical Digital Sculpting", "Creature Concept Art", "ZBrush Workflows", "Photorealistic Texturing in Substance 3D"],
        website: "https://www.skyupacademy.it/docenti/christian-dan/",
        subject: "arts-design",
        summary: "Christian Dan is an acclaimed digital sculptor and character artist specializing in complex biological anatomy and cinematic creature modeling for AAA entertainment."
      }
    ]
  }
];
