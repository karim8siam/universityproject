// Batch 40 - Part 1: Universities 1 to 10
// Canada (4), Germany (5), Italy (1)
// Opps: 4358 to 4427 (70 opps)
// Researchers: 1887 to 1916 (30 researchers)

export const part1Universities = [
  // 1. Canada: Labrador Institute of Memorial University
  {
    institution: "Labrador Institute of Memorial University",
    slug: "labrador-institute-of-memorial-university",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 42,
    location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada",
    website: "https://www.mun.ca/labrador-campus/",
    shortName: "Labrador Campus MUN",
    badge: "Northern Research & Indigenous Studies",
    overview: "The Labrador Institute (now the Labrador Campus of Memorial University) is a premier northern-led research and education centre dedicated to Indigenous Arctic sovereignty, circumpolar ecosystems, climate adaptation, and northern community health.",
    lead: "Explore northern research fellowships, Indigenous ecology degrees, and circumpolar climate science opportunities at Memorial University's Labrador Campus.",
    description: "Labrador Campus of Memorial University northern research fellowships, circumpolar environmental science, and Indigenous governance studies.",
    quickFacts: {
      type: "Public Northern Research Campus / Memorial University",
      campus: "Happy Valley-Goose Bay & North West River, Labrador",
      accreditation: "Universities Canada / Government of Newfoundland & Labrador",
      admissions: "Memorial University School of Graduate Studies",
      language: "English (with Inuttitut and Innu-aimun linguistic integrations)",
      aid: "Northern Scientific Training Program (NSTP) & MUN Graduate Fellowships"
    },
    strengths: [
      "Circumpolar Arctic ecology and permafrost dynamics",
      "Inuit and Innu community health governance and traditional knowledge systems",
      "Sustainable northern food systems and boreal agriculture",
      "Climate change vulnerability and Subarctic coastal monitoring"
    ],
    programs: [
      { title: "Master of Arctic and Subarctic Studies (MASS)", level: "Graduate Degree", desc: "Interdisciplinary northern-led curriculum focused on Indigenous place-based leadership, resource governance, and circumpolar policy." },
      { title: "Doctor of Philosophy in Interdisciplinary Northern Studies", level: "Doctoral Degree", desc: "Research doctorate examining climate adaptation, northern environmental change, and community-engaged knowledge co-production." },
      { title: "Bachelor of Science in Northern Environmental Science", level: "Undergraduate Degree", desc: "Field-intensive program investigating subarctic hydrology, boreal forest resilience, and wildlife management." }
    ],
    opportunities: [
      {
        id: 4358,
        title: "Labrador Campus Graduate Excellence Fellowship in Circumpolar Studies",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Two-year graduate funding package supporting northern-focused master's and doctoral students conducting field research in Labrador.",
        funding: "CAD $24,000 per annum plus research travel subsidy and full northern field logistics support",
        fee: "CAD $60 (MUN Canadian) / CAD $120 (International)",
        tuition: "CAD $3,800/year (Canadian residents) or CAD $7,500/year (International graduate students)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "3.2/4.0 in environmental studies, geography, anthropology, or biological sciences",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 80",
          gre: "Not required",
          papers: "1,500-word proposed northern research outline aligned with Labrador regional priorities",
          references: "Two academic letters evaluating field research suitability"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4359,
        title: "Northern Scientific Training Program (NSTP) Fieldwork Award",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Federal Polar Knowledge Canada grant supporting advanced graduate students undertaking seasonal empirical data collection in Subarctic regions.",
        funding: "Up to CAD $6,000 direct field research grant for travel, sampling equipment, and community honoraria",
        fee: "Free internal application for enrolled graduate students",
        tuition: "Covered under primary Memorial University degree enrollment",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "Good academic standing in an approved graduate degree program",
          ielts: "English proficiency verified at degree admission",
          gre: "Not required",
          papers: "NSTP field plan and northern research ethics protocol submission",
          references: "Primary supervisor sign-off and safety plan approval"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4360,
        title: "Master of Arctic and Subarctic Studies (MASS) Direct Admission Pathway",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Comprehensive graduate curriculum exploring Indigenous self-determination, circumpolar geopolitics, and socio-ecological resilience in northern communities.",
        funding: "Teaching assistantships (CAD $6,500/semester) and faculty supervisor research grants available",
        fee: "CAD $60 (Domestic) / CAD $120 (International)",
        tuition: "CAD $4,200 per year (full-time program)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "Minimum B (70% or 3.0/4.0) across last 20 undergraduate semester courses",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Statement of interest describing engagement with northern and Indigenous topics",
          references: "Two academic or professional references familiar with northern scholarship"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4361,
        title: "Doctoral Research Assistantship in Permafrost Degradation and Boreal Hydrology",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Four-year funded doctoral position investigating permafrost thaw impacts on infrastructure integrity and water catchments across central Labrador.",
        funding: "CAD $28,000 annual stipend guaranteed for 4 years plus complete laboratory instrumentation access",
        fee: "CAD $120",
        tuition: "Tuition fully reimbursed via graduate assistantship stipend waiver",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "First-class Master of Science degree in civil engineering, earth sciences, or environmental science",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Master's thesis summary and publication record in geosciences or hydrology",
          references: "Three academic letters detailing quantitative field skills"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4362,
        title: "Paddon Research Fellowship in Circumpolar Health Governance",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Postdoctoral or senior doctoral fellowship focusing on remote healthcare delivery models, telemedicine, and Indigenous mental wellness.",
        funding: "CAD $35,000 annual research stipend plus housing allowance in Happy Valley-Goose Bay",
        fee: "Free application",
        tuition: "N/A — Post-degree research appointment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "PhD or MD completed within the last 4 years in epidemiology, public health, or medical anthropology",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Three-page research proposal detailing community collaboration protocols",
          references: "Two letters of recommendation from senior clinical or public health scholars"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4363,
        title: "Northern Boreal Agriculture and Food Security Summer Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Twelve-week paid summer research practicum at the Pye Centre for Northern Boreal Food Systems testing cold-climate greenhouse technologies.",
        funding: "CAD $18.50 per hour (40 hours/week) plus dormitory accommodation subsidy",
        fee: "Free internal application",
        tuition: "Not applicable; experiential paid internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "Enrollment in biology, agronomy, environmental science, or related undergraduate programs",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and one-page cover letter demonstrating horticulture or agricultural interest",
          references: "One academic faculty reference"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      },
      {
        id: 4364,
        title: "Indigenous Environmental Guardianship and Land-Based Learning Course",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Intensive 6-week accredited certificate course combining western geospatial monitoring with traditional Innu and Inuit land stewardship methods.",
        funding: "Tuition bursaries available through regional Indigenous education trusts",
        fee: "CAD $40 registration fee",
        tuition: "CAD $980 full course tuition (inclusive of field supplies)",
        deadline: "2027-05-10",
        deadlineText: "May 10, 2027",
        source: "https://www.mun.ca/labrador-campus/",
        requirements: {
          gpa: "Secondary school diploma or mature student status with relevant outdoor or community experience",
          ielts: "Working knowledge of English",
          gre: "Not required",
          papers: "Brief statement explaining commitment to northern land preservation",
          references: "One community or employer reference"
        },
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        location: "Happy Valley-Goose Bay, Newfoundland and Labrador, Canada"
      }
    ],
    researchers: [
      {
        id: 1887,
        name: "Dr. Ashlee Cunsolo",
        title: "Vice-Provost (Labrador Campus) & Dean of the School of Arctic and Subarctic Studies",
        subject: "environment",
        topics: ["Ecological Grief", "Climate Change Health", "Indigenous Arctic Governance"],
        summary: "World-renowned environmental health researcher leading national investigations into ecological grief, emotional dimensions of climate change, and Indigenous-led northern health policy.",
        source: "https://www.mun.ca/labrador-campus/about/leadership/",
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1888,
        name: "Dr. Sylvia Moore",
        title: "Associate Professor in Indigenous Education & Northern Pedagogies",
        subject: "social-sciences",
        topics: ["Decolonizing Education", "Mi'kmaw & Innu Pedagogies", "Place-Based Learning"],
        summary: "Specialist in decolonizing curricula and land-based education, partnering with Labrador First Nations and Inuit councils to cultivate Indigenous teacher training programs.",
        source: "https://www.mun.ca/labrador-campus/about/people/",
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1889,
        name: "Dr. Robert Way",
        title: "Associate Professor in Physical Geography & Permafrost Geosciences",
        subject: "environment",
        topics: ["Subarctic Permafrost", "Cryosphere Dynamics", "Paleoclimatology"],
        summary: "Pioneering cryospheric scientist mapping permafrost degradation in Labrador and northern Quebec using satellite remote sensing, ground-temperature boreholes, and community monitoring networks.",
        source: "https://www.mun.ca/labrador-campus/research/",
        university: "Labrador Institute of Memorial University",
        country: "Canada",
        recruiting: "Not verified"
      }
    ]
  },

  // 2. Canada: Southern Alberta Institute of Technology (SAIT)
  {
    institution: "Southern Alberta Institute of Technology (SAIT)",
    slug: "southern-alberta-institute-of-technology-sait",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 88,
    location: "Calgary, Alberta, Canada",
    website: "https://www.sait.ca",
    shortName: "SAIT Calgary",
    badge: "Applied Technology & Advanced Polytechnic",
    overview: "Established in 1916 in Calgary, SAIT is one of Canada's leading polytechnic institutes, renowned for industry-driven applied research in green building technologies, automated manufacturing, energy systems, and digital transformations.",
    lead: "Discover industry-partnered applied research fellowships, bachelor degrees in advanced technology, and energy innovation programs at SAIT in Calgary.",
    description: "Southern Alberta Institute of Technology (SAIT) applied engineering research, green building technologies, and digital innovation programs in Calgary.",
    quickFacts: {
      type: "Public Polytechnic & Applied Technology Institute",
      campus: "Main Campus (North Hill), Calgary, Alberta",
      accreditation: "Alberta Ministry of Advanced Education / Polytechnics Canada",
      admissions: "SAIT Admissions & Registrar Office",
      language: "English",
      aid: "Over CAD $5 million in annual scholarships, bursaries, and applied research grants"
    },
    strengths: [
      "Applied Research and Innovation Services (ARIS) green building technologies",
      "Petroleum, renewable energy transitions, and hydrogen infrastructure",
      "Automated manufacturing, robotics, and industrial IoT",
      "Cybersecurity, software development, and digital transformation"
    ],
    programs: [
      { title: "Bachelor of Science in Construction Project Management", level: "Undergraduate Degree", desc: "Four-year degree integrating building information modeling (BIM), sustainability metrics, and major infrastructure management." },
      { title: "Bachelor of Applied Technology in Petroleum Engineering", level: "Applied Degree", desc: "Specialized post-diploma program focusing on carbon capture, reservoir characterization, and geothermal energy development." },
      { title: "Postgraduate Certificate in Cyber Security for Industrial Control Systems", level: "Graduate Certificate", desc: "Advanced training in critical infrastructure defense, SCADA security, and operational technology risk management." }
    ],
    opportunities: [
      {
        id: 4365,
        title: "ARIS Applied Research Fellowship in Green Building Technologies",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "One-year renewable research fellowship at the Green Building Technologies (GBT) lab developing high-efficiency building envelopes and net-zero modular housing.",
        funding: "CAD $38,000 annual stipend plus prototype materials budget and international conference sponsorship",
        fee: "Free application",
        tuition: "Not applicable; funded applied researcher position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.sait.ca/applied-research",
        requirements: {
          gpa: "Master's or advanced degree in civil engineering, architectural science, or building physics",
          ielts: "IELTS 6.5 minimum",
          gre: "Not required",
          papers: "Demonstrated portfolio in energy modeling (EnergyPlus, WUFI, or OpenStudio)",
          references: "Two industry or academic references confirming computational modeling skills"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4366,
        title: "SAIT President's International Student Entrance Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Merit-based entrance award recognizing outstanding international applicants admitted into 4-year bachelor's degree programs at SAIT.",
        funding: "CAD $5,000 tuition reduction credited directly against first-year fees",
        fee: "CAD $150 international application fee",
        tuition: "CAD $21,500/year (typical international degree tuition)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.sait.ca/admissions/student-awards",
        requirements: {
          gpa: "Minimum 85% average in secondary or preparatory mathematics and science courses",
          ielts: "IELTS 6.5 overall (no individual band score below 6.0)",
          gre: "Not required",
          papers: "500-word personal statement highlighting technology innovation aspirations",
          references: "Not required"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4367,
        title: "Bachelor of Science in Construction Project Management Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Accredited four-year baccalaureate preparing graduates for executive leadership in commercial construction, infrastructure scheduling, and sustainable development.",
        funding: "Over 50 industry-sponsored scholarships awarded annually to enrolled students",
        fee: "CAD $100 (Domestic) / CAD $150 (International)",
        tuition: "CAD $7,400/year (Alberta resident) / CAD $22,800/year (International)",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-science-construction-project-management",
        requirements: {
          gpa: "Minimum 65% in English 30-1, Pure Math 30-1, and Physics 30 or Chemistry 30",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "High school transcripts and verified prerequisite credentials",
          references: "Not required"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4368,
        title: "Post-Diploma Applied Technology Degree in Petroleum Engineering",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        desc: "Two-year applied degree providing engineering technologists with advanced skills in reservoir simulation, enhanced oil recovery, and carbon sequestration.",
        funding: "Industry co-op work terms providing average compensation of CAD $26–$32 per hour",
        fee: "CAD $100",
        tuition: "CAD $8,100 per academic year (full-time domestic)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.sait.ca/programs-and-courses/applied-degrees",
        requirements: {
          gpa: "Completion of an accredited engineering technology diploma with minimum 2.50 CGPA",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Verified engineering technologist diploma transcript",
          references: "One technical reference from a licensed professional engineer or technologist"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4369,
        title: "Center for Mobility and Aerospace Industrial Research Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Eight-month paid applied research internship working on drone telemetry, autonomous navigation sensors, and composite materials testing.",
        funding: "CAD $22.00 per hour plus full laboratory safety equipment and mentoring",
        fee: "Free application for enrolled SAIT technology students",
        tuition: "Not applicable; paid industrial placement",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.sait.ca/applied-research",
        requirements: {
          gpa: "Minimum 3.0/4.0 in aerospace, mechanical, or electronics engineering technology",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and technical portfolio showcasing CAD, embedded systems, or Python projects",
          references: "Academic instructor recommendation"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4370,
        title: "Clean Technology and Water Treatment Applied Research Grant",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "chemistry"],
        desc: "Grant-funded project assistantship at SAIT's Environmental Technologies lab investigating membrane filtration and industrial wastewater reuse.",
        funding: "CAD $30,000 research award over 12 months with industry co-sponsorship",
        fee: "Free application",
        tuition: "Covered through research grant allowance",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.sait.ca/applied-research",
        requirements: {
          gpa: "Bachelor's degree or advanced diploma in chemical technology or environmental engineering",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Two-page summary of wet-lab analytical chemistry and chromatography experience",
          references: "Two references familiar with chemical laboratory protocols"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      },
      {
        id: 4371,
        title: "Fast-Track Certificate in Industrial Internet of Things (IIoT) and Automation",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Twelve-week intensive certificate in PLC programming, edge computing devices, MQTT protocols, and cyber-physical network architecture.",
        funding: "Canada-Alberta Job Grant subsidies covering up to 66% of training costs for eligible workers",
        fee: "CAD $50 registration fee",
        tuition: "CAD $3,250 total course tuition",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.sait.ca/continuing-education",
        requirements: {
          gpa: "Foundational coursework in computer programming or electrical fundamentals",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Registration form and proof of prerequisites",
          references: "Not required"
        },
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        location: "Calgary, Alberta, Canada"
      }
    ],
    researchers: [
      {
        id: 1890,
        name: "Melanie Ross",
        title: "Research Associate & Lead, Green Building Technologies (GBT)",
        subject: "engineering",
        topics: ["Building Envelope Science", "Net-Zero Architecture", "Life Cycle Assessment"],
        summary: "Prominent applied building scientist leading energy modeling and field monitoring of high-performance building envelopes across western Canada.",
        source: "https://www.sait.ca/applied-research/areas-of-expertise/green-building-technologies",
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1891,
        name: "Dr. Hamid Rajaei",
        title: "Senior Research Scientist in Clean Energy and Decarbonization",
        subject: "chemistry",
        topics: ["Hydrogen Technologies", "Carbon Capture Utilization", "Electrochemical Catalysts"],
        summary: "Specialist in industrial decarbonization, developing pilot-scale carbon capture systems and hydrogen blending protocols for western Canadian utilities.",
        source: "https://www.sait.ca/applied-research/researchers",
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1892,
        name: "Suzy Rashed",
        title: "Director of Applied Research and Innovation Services (ARIS)",
        subject: "engineering",
        topics: ["Polytechnic Applied Research", "Industry Technology Commercialization", "Advanced Manufacturing"],
        summary: "Executive research administrator stewarding multi-million-dollar partnerships between polytechnic engineering labs and global energy and construction corporations.",
        source: "https://www.sait.ca/applied-research/about-aris",
        university: "Southern Alberta Institute of Technology (SAIT)",
        country: "Canada",
        recruiting: "Not verified"
      }
    ]
  },

  // 3. Canada: The King's University
  {
    institution: "The King's University",
    slug: "the-kings-university-edmonton",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 93,
    location: "Edmonton, Alberta, Canada",
    website: "https://www.kingsu.ca",
    shortName: "King's Edmonton",
    badge: "Christian Liberal Arts & Sciences",
    overview: "Located in Edmonton, Alberta, The King's University is an accredited Christian university known for excellence in undergraduate liberal arts, chemical education, environmental science, and community-engaged research.",
    lead: "Explore undergraduate research fellowships, chemistry education initiatives, and accredited bachelor's programs at The King's University in Edmonton.",
    description: "The King's University undergraduate research fellowships, chemistry education, and environmental sciences in Edmonton, Alberta.",
    quickFacts: {
      type: "Private Accredited University (Christian Liberal Arts)",
      campus: "Main Campus, Edmonton, Alberta",
      accreditation: "Alberta Ministry of Advanced Education / Universities Canada",
      admissions: "King's University Admissions Office",
      language: "English",
      aid: "Over CAD $1.2 million distributed annually in merit scholarships and research stipends"
    },
    strengths: [
      "King's Centre for Visualization in Science (KCVS) global climate and chemical education",
      "Environmental science, boreal forest conservation, and ecological ethics",
      "Computing science with interdisciplinary data analytics and digital ethics",
      "Bachelor of Education with integrated provincial teaching certification"
    ],
    programs: [
      { title: "Bachelor of Science in Chemistry (Four-Year)", level: "Undergraduate Degree", desc: "Rigorous laboratory degree accredited by the Canadian Society for Chemistry (CSC), featuring active undergraduate research." },
      { title: "Bachelor of Science in Environmental Studies", level: "Undergraduate Degree", desc: "Interdisciplinary program integrating ecological monitoring, GIS mapping, environmental policy, and environmental ethics." },
      { title: "Bachelor of Education (After-Degree)", level: "Professional Degree", desc: "Two-year professional certification program for elementary and secondary teaching in Alberta." }
    ],
    opportunities: [
      {
        id: 4372,
        title: "KCVS Undergraduate Summer Research Fellowship in Visualizing Science",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "computer-science"],
        desc: "Sixteen-week funded fellowship at the King's Centre for Visualization in Science creating interactive digital learning models for IUPAC and UNESCO.",
        funding: "CAD $11,500 total summer stipend plus travel support to ACS or IUPAC national conferences",
        fee: "Free internal application",
        tuition: "Not applicable; funded undergraduate fellowship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kcvs.ca",
        requirements: {
          gpa: "Minimum 3.3/4.0 in chemistry, physics, computing science, or related sciences",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Cover letter detailing interest in science communication, JavaScript/HTML5, or chemical visualization",
          references: "Two faculty recommendations from natural sciences or computing departments"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4373,
        title: "King's University President's Scholarship of Academic Excellence",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Premier renewable merit award recognizing incoming domestic and international students demonstrating exceptional high school achievement.",
        funding: "CAD $5,000 per year renewable for up to four years (CAD $20,000 total scholarship value)",
        fee: "CAD $70 (Canadian) / CAD $140 (International)",
        tuition: "CAD $13,680/year (Domestic undergraduate) / CAD $17,400/year (International)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kingsu.ca/admissions/financial-aid/scholarships",
        requirements: {
          gpa: "Minimum 90% admission average across Grade 12 matriculation courses",
          ielts: "IELTS 6.5 overall (no band less than 6.0) or TOEFL iBT 86",
          gre: "Not required",
          papers: "High school transcripts and completed scholarship application form",
          references: "Not required"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4374,
        title: "Bachelor of Science in Environmental Studies Admission Pathway",
        type: "Bachelor's",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Four-year interdisciplinary degree combining hands-on boreal field research, environmental law, GIS spatial analysis, and ecological ethics.",
        funding: "Program-specific environmental research travel bursaries up to CAD $2,000 per student",
        fee: "CAD $70",
        tuition: "CAD $13,680 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.kingsu.ca/programs/natural-sciences/environmental-studies",
        requirements: {
          gpa: "Minimum 65% average in five academic Grade 12 subjects including English, Math, and two Sciences",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Official transcripts from secondary or prior post-secondary institutions",
          references: "Not required"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4375,
        title: "Bachelor of Education (After-Degree) Teacher Preparation Practicum",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-year post-degree curriculum with 16 weeks of structured clinical school practicum in Alberta public and separate school districts.",
        funding: "Alberta provincial teacher bursaries and King's education awards up to CAD $3,000",
        fee: "CAD $70",
        tuition: "CAD $14,200 per academic year",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.kingsu.ca/programs/education",
        requirements: {
          gpa: "Completed recognized 3- or 4-year baccalaureate degree with minimum 2.70/4.00 CGPA",
          ielts: "IELTS 7.0 overall (minimum 7.0 in speaking and listening)",
          gre: "Not required",
          papers: "Philosophical statement on education and documented 100+ hours working with youth",
          references: "Two character and professional references validating work with children"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4376,
        title: "Undergraduate Ecological Research Assistantship in Beaver Hills Biosphere",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Summer fieldwork position studying wetland ecology, bird nesting patterns, and invasive weed management in the Beaver Hills Dark Sky Preserve.",
        funding: "CAD $17.50 per hour for 14 weeks plus shared university field transport",
        fee: "Free application for enrolled biology and environmental science students",
        tuition: "Not applicable; paid field position",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.kingsu.ca/research",
        requirements: {
          gpa: "Minimum 3.0 CGPA in biological sciences",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and brief letter indicating outdoor field comfort and species identification skills",
          references: "One biology faculty recommendation"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4377,
        title: "Micah Centre for Social Justice Student Leadership Grant",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Academic project fellowship funding student-designed initiatives addressing local poverty, indigenous reconciliation, and climate justice.",
        funding: "CAD $2,500 project grant plus CAD $1,500 personal scholarship stipend",
        fee: "Free application",
        tuition: "Covered through primary King's enrollment",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        source: "https://www.kingsu.ca/about-us/centres/micah-centre",
        requirements: {
          gpa: "Enrolled student in 2nd year or higher with minimum 2.50 CGPA",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Three-page project proposal with budget and community partner letter of support",
          references: "One faculty mentor recommendation"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      },
      {
        id: 4378,
        title: "Certificate in Digital Media and Public Science Communication",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Six-month hybrid certificate developing computational interactive visualization, scientific storytelling, and web-based data dissemination skills.",
        funding: "King's technology bursaries up to CAD $1,000 for qualifying applicants",
        fee: "CAD $50",
        tuition: "CAD $2,800 for the full certificate curriculum",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kingsu.ca/programs/interdisciplinary",
        requirements: {
          gpa: "Secondary diploma or bachelor's degree in any discipline",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Resume and one-paragraph description of communication project goals",
          references: "Not required"
        },
        university: "The King's University",
        country: "Canada",
        location: "Edmonton, Alberta, Canada"
      }
    ],
    researchers: [
      {
        id: 1893,
        name: "Dr. Peter Mahaffy",
        title: "Professor of Chemistry & Co-Director, King's Centre for Visualization in Science (KCVS)",
        subject: "chemistry",
        topics: ["Chemical Education", "Planetary Boundaries", "Visualizing Climate Science"],
        summary: "Internationally celebrated chemical educator and IUPAC leader developing interactive digital learning visualizations to integrate sustainability and Earth-systems thinking into global chemistry curricula.",
        source: "https://www.kingsu.ca/about-us/staff-directory/peter-mahaffy",
        university: "The King's University",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1894,
        name: "Dr. Matthew E. White",
        title: "Associate Professor of Biology & Environmental Studies",
        subject: "environment",
        topics: ["Boreal Forest Ecology", "Wetland Restoration", "Plant Ecology"],
        summary: "Plant ecologist studying boreal vegetation dynamics, carbon sequestration in Alberta peatlands, and the ecological impacts of energy development corridors.",
        source: "https://www.kingsu.ca/about-us/staff-directory/matthew-white",
        university: "The King's University",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1895,
        name: "Dr. Hank Bestman",
        title: "Professor of Biology & Vice President Academic",
        subject: "biology",
        topics: ["Physiology", "Microbiology", "Higher Education Pedagogy"],
        summary: "Long-serving academic leader and physiologist investigating cell biology education, university governance, and scientific literacy development in Christian higher education.",
        source: "https://www.kingsu.ca/about-us/staff-directory/hank-bestman",
        university: "The King's University",
        country: "Canada",
        recruiting: "Not verified"
      }
    ]
  },

  // 4. Canada: TÉLUQ University (Université TÉLUQ)
  {
    institution: "TÉLUQ University (Université TÉLUQ)",
    slug: "teluq-university-quebec",
    countryId: "canada",
    countryLabel: "Canada",
    sourceRow: 98,
    location: "Quebec City, Quebec, Canada",
    website: "https://www.teluq.ca",
    shortName: "Université TÉLUQ",
    badge: "Distance Education & Cognitive Informatics",
    overview: "Founded in 1972 as part of the Université du Québec network, Université TÉLUQ is North America's only French-language university dedicated exclusively to distance education, renowned for cognitive informatics, educational technologies, and environmental management.",
    lead: "Explore online doctoral fellowships, cognitive informatics master's programs, and distance education research at Université TÉLUQ in Quebec.",
    description: "Université TÉLUQ online graduate research, cognitive informatics, distance education technology, and environmental management in Quebec.",
    quickFacts: {
      type: "Public Distance Education University (Université du Québec network)",
      campus: "Headquarters in Quebec City, Quebec (Global Online Delivery)",
      accreditation: "Ministère de l'Enseignement supérieur du Québec / Universities Canada",
      admissions: "Bureau du registraire de l'Université TÉLUQ",
      language: "French (with bilingual graduate research supervision options)",
      aid: "FRQNT, FRQSC, and TÉLUQ Fondation graduate excellence fellowships"
    },
    strengths: [
      "Cognitive computing and semantic web architectures (LICEF Research Centre)",
      "Distance education pedagogy, e-learning analytics, and adaptive learning environments",
      "Environmental management, ecological footprint assessment, and climate policy",
      "Human resources, labor relations, and digital workplace transformations"
    ],
    programs: [
      { title: "Doctorat en informatique cognitive (Ph.D.)", level: "Doctoral Degree", desc: "Inter-university doctoral program investigating knowledge graphs, natural language processing, and artificial intelligence in education." },
      { title: "Maîtrise en gestion de l'environnement (M.Env.)", level: "Graduate Degree", desc: "Professional and research master's degree focusing on environmental impact assessment, corporate sustainability, and water resource governance." },
      { title: "Baccalauréat en informatique cognitive", level: "Undergraduate Degree", desc: "Unique undergraduate program combining computer science, cognitive psychology, and semantic data technologies." }
    ],
    opportunities: [
      {
        id: 4379,
        title: "TÉLUQ Foundation Doctoral Excellence Fellowship in Cognitive Computing",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-year doctoral research fellowship at the LICEF Research Centre investigating generative AI architectures, knowledge graphs, and adaptive distance learning systems.",
        funding: "CAD $25,000 per year for three years (CAD $75,000 total award) plus computer hardware grant",
        fee: "CAD $90 admission application fee",
        tuition: "CAD $3,600/year (Quebec resident) / CAD $9,800/year (Canadian non-resident) / CAD $18,000/year (International)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.teluq.ca/site/etudes/bourses.php",
        requirements: {
          gpa: "Minimum 3.3/4.3 (or 3.2/4.0) in master's degree in computer science, software engineering, or related field",
          ielts: "French language proficiency (TFI 750 or equivalent) or departmental waiver for international research track",
          gre: "Not required",
          papers: "Master's thesis and five-page doctoral research proposal in cognitive informatics",
          references: "Three academic reference letters validating scientific autonomy"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4380,
        title: "Maîtrise en gestion de l'environnement (M.Env.) Research Assistantship",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Graduate research track focusing on corporate carbon accounting, circular economy indicators, and municipal adaptation policies in Quebec.",
        funding: "Faculty research assistantship stipends providing CAD $16,000 to CAD $20,000 annually",
        fee: "CAD $90",
        tuition: "CAD $3,450 per year (Quebec resident)",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.teluq.ca/site/etudes/offre/programmes/maitrise-en-gestion-de-lenvironnement",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.0/4.3 cumulative grade point average",
          ielts: "French proficiency test (TCF or TEF) at B2 level or higher",
          gre: "Not required",
          papers: "Detailed CV and statement of research interests in sustainability management",
          references: "Two academic letters of recommendation"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4381,
        title: "LICEF Centre Fellowship in Artificial Intelligence and Educational Technology",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Postdoctoral or doctoral research fellowship investigating neural-symbolic systems and cognitive modeling for intelligent tutoring applications.",
        funding: "CAD $32,000 annual research stipend with full access to high-performance computing clusters",
        fee: "Free application",
        tuition: "Not applicable; research appointment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://licef.teluq.ca",
        requirements: {
          gpa: "Doctorate or near-completion PhD in AI, data science, or educational informatics",
          ielts: "Bilingual French/English proficiency preferred",
          gre: "Not required",
          papers: "Published peer-reviewed journal papers in AIED or cognitive systems",
          references: "Two letters of recommendation from international researchers"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4382,
        title: "Baccalauréat en informatique cognitive Online Degree Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        desc: "Ninety-credit flexible distance degree preparing graduates for machine learning design, ontological modeling, and cognitive interface programming.",
        funding: "Quebec Perspective Scholarships offering CAD $2,500 per successfully completed full-time semester (up to CAD $15,000)",
        fee: "CAD $90",
        tuition: "CAD $104 per credit (Quebec residents) / CAD $330 per credit (Canadian non-residents)",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.teluq.ca/site/etudes/offre/programmes/baccalaureat-en-informatique-cognitive",
        requirements: {
          gpa: "DEC in computer science or college diploma with appropriate mathematics prerequisites",
          ielts: "French proficiency required",
          gre: "Not required",
          papers: "Verified college transcripts and proof of residency status",
          references: "Not required"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4383,
        title: "Microprogramme de deuxième cycle en cybersécurité organisationnelle",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Graduate short program focusing on ISO 27001 compliance, corporate cyber resilience, risk analysis, and information security policy governance.",
        funding: "Employer professional development co-financing accepted",
        fee: "CAD $90",
        tuition: "CAD $1,450 total tuition for Quebec residents",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.teluq.ca/site/etudes/offre/programmes/microprogramme-en-cybersecurite-organisationnelle",
        requirements: {
          gpa: "Undergraduate degree in management, engineering, or computing, or documented professional IT experience",
          ielts: "French proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and transcript of highest degree earned",
          references: "Not required"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4384,
        title: "FRQSC Master's Research Bursary Co-Funding Incentive Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Matching grant supporting TÉLUQ graduate students who secure provincial FRQSC awards in distance learning policy and teleworking dynamics.",
        funding: "CAD $5,000 institutional top-up bursary in addition to provincial award",
        fee: "Free internal application",
        tuition: "Tuition waiver applied during active fellowship tenure",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.teluq.ca/site/etudes/bourses.php",
        requirements: {
          gpa: "Recipient of active FRQSC master's award",
          ielts: "French proficiency",
          gre: "Not required",
          papers: "Notice of provincial award and approved thesis project summary",
          references: "Thesis supervisor endorsement"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      },
      {
        id: 4385,
        title: "Distance Learning Analytics and Educational Mining Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Six-month research internship analyzing student engagement telemetry, retention prediction models, and automated feedback engines.",
        funding: "CAD $20.00/hour (30 hours/week) remote appointment",
        fee: "Free application",
        tuition: "Not applicable; paid technical internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.teluq.ca/recherche",
        requirements: {
          gpa: "Enrolled in graduate computer science, statistics, or educational technology program",
          ielts: "French comprehension and Python programming skills",
          gre: "Not required",
          papers: "GitHub repository link or code samples in data science / machine learning",
          references: "One academic faculty reference"
        },
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        location: "Quebec City, Quebec, Canada"
      }
    ],
    researchers: [
      {
        id: 1896,
        name: "Dr. Richard Hotte",
        title: "Full Professor & Director, LICEF Research Centre",
        subject: "computer-science",
        topics: ["Cognitive Informatics", "E-Learning Environments", "Ontology Engineering"],
        summary: "Pioneering computer scientist heading the LICEF research laboratory, designing semantic web frameworks, multi-agent systems, and intelligent distance learning architectures.",
        source: "https://www.teluq.ca/site/recherche/professeurs/richard-hotte",
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1897,
        name: "Dr. Patrick Plante",
        title: "Associate Professor in Educational Technology & Digital Pedagogy",
        subject: "social-sciences",
        topics: ["Digital Didactics", "Virtual Learning Spaces", "Educational Video Games"],
        summary: "Specialist in serious gaming and distance didactics, studying student engagement patterns, motivation mechanics, and interactive multimedia pedagogical design.",
        source: "https://www.teluq.ca/site/recherche/professeurs/patrick-plante",
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        recruiting: "Not verified"
      },
      {
        id: 1898,
        name: "Dr. Diane-Gabrielle Tremblay",
        title: "Professor of Human Resource Management & Labour Economics",
        subject: "social-sciences",
        topics: ["Telework Economics", "Work-Life Articulation", "Innovation Clusters"],
        summary: "Distinguished economist and Canada Research Chair on the Socio-Organizational Challenges of the Knowledge Economy, analyzing the long-term impacts of telecommuting and remote work systems.",
        source: "https://www.teluq.ca/site/recherche/professeurs/diane-gabrielle-tremblay",
        university: "TÉLUQ University (Université TÉLUQ)",
        country: "Canada",
        recruiting: "Not verified"
      }
    ]
  },

  // 5. Germany: EBS Business School (EBS Universität für Wirtschaft und Recht)
  {
    institution: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
    slug: "ebs-business-school-ebs-universitaet",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 248,
    location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany",
    website: "https://www.ebs.edu",
    shortName: "EBS Business School",
    badge: "Premier Private Business & Law University",
    overview: "Founded in 1971 in Oestrich-Winkel in the Rheingau region, EBS Business School is one of Germany's oldest and most prestigious private business schools, holding AACSB and EQUIS accreditations and renowned for corporate finance, strategic management, real estate, and legal studies.",
    lead: "Explore doctoral research fellowships, international master's scholarships, and executive finance programs at EBS Business School in the Frankfurt/Rheingau region.",
    description: "EBS Business School (EBS Universität) corporate finance research, AACSB-accredited master's degrees, and doctoral fellowships in Germany.",
    quickFacts: {
      type: "Private State-Recognized University (Non-profit SRH Higher Education network)",
      campus: "Oestrich-Winkel (Rheingau) & Wiesbaden (EBS Law School), Hesse",
      accreditation: "AACSB, EQUIS, German Science and Humanities Council (Wissenschaftsrat)",
      admissions: "EBS Admissions and Selection Committee",
      language: "English (100% of business degree curriculum) and German (law)",
      aid: "EBS Alumni Foundation, institutional merit scholarships, and BAföG funding"
    },
    strengths: [
      "Corporate finance, private equity, and banking regulation",
      "Strategic management, entrepreneurship, and family enterprise research",
      "Real estate economics and sustainable urban asset management (REMI)",
      "Automotive and mobility management research"
    ],
    programs: [
      { title: "Master of Science in Finance (M.Sc.)", level: "Graduate Degree", desc: "Top-ranked international finance degree preparing graduates for investment banking, asset management, and corporate valuation." },
      { title: "Doctor of Philosophy in Business Studies (Ph.D. / Dr. rer. pol.)", level: "Doctoral Degree", desc: "Intensive 3-year research doctorate with publication requirements in leading peer-reviewed FT50 journals." },
      { title: "Bachelor of Science in International Business", level: "Undergraduate Degree", desc: "Triple-accredited undergraduate program with integrated mandatory study abroad semester and corporate internships." }
    ],
    opportunities: [
      {
        id: 4386,
        title: "EBS Doctoral Excellence Research Fellowship in Corporate Finance",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Fully funded three-year doctoral position at the EBS Department of Finance investigating ESG asset pricing, corporate bond markets, and algorithmic liquidity.",
        funding: "€2,200 monthly stipend (or 75% TV-L E13 research associate salary) plus full tuition waiver and €3,000 conference grant",
        fee: "Free application",
        tuition: "Full tuition waiver (€18,000 value per year)",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.ebs.edu/en/doctoral-program",
        requirements: {
          gpa: "Master's degree in finance, economics, or quantitative management with grade of 1.7 (German scale) or better",
          ielts: "IELTS 7.0 or TOEFL iBT 100",
          gre: "GMAT 650+ or GRE quantitative equivalent strongly recommended",
          papers: "10-page doctoral research proposal with econometric methodology",
          references: "Two academic letters from tenured finance or economics professors"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4387,
        title: "EBS Alumni Merit Fellowship for International Master's Scholars",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Competitive merit scholarship covering 50% of tuition costs for high-achieving international students joining the Master of Science programs.",
        funding: "50% tuition reduction (€14,500 total financial value across the program)",
        fee: "€100 EBS application fee",
        tuition: "€8,970 per semester standard tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.ebs.edu/en/scholarships",
        requirements: {
          gpa: "Undergraduate degree in business or economics with top 15% class standing",
          ielts: "IELTS 6.5 or TOEFL iBT 90",
          gre: "GMAT 600 or EBS quantitative assessment test",
          papers: "One-page motivation essay detailing leadership contributions to global business",
          references: "Not required"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4388,
        title: "Master of Science in Management (M.Sc.) Direct Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Four-semester general management program offering dual degrees with partner institutions worldwide and corporate consulting projects.",
        funding: "Over 30 company-sponsored scholarships and Brain Capital income-share agreement options",
        fee: "€100",
        tuition: "€8,970 per semester (4 semesters)",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.ebs.edu/en/study-programme/master-of-science-in-management",
        requirements: {
          gpa: "Completed bachelor's degree with at least 180 ECTS credits (at least 60 ECTS in business/economics)",
          ielts: "IELTS 6.5 or equivalent",
          gre: "EBS personal admission interview and cognitive reasoning test",
          papers: "Curriculum vitae, undergraduate transcript, and letter of motivation",
          references: "One academic or employer recommendation"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4389,
        title: "Real Estate Management Institute (REMI) Industry Research Grant",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Industry-partnered research grant studying European commercial property decarbonization, green leasing contracts, and urban real estate valuation.",
        funding: "€25,000 project grant over 12 months with leading Frankfurt property developer co-sponsorship",
        fee: "Free application",
        tuition: "Covered through institute grant",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.ebs.edu/en/remi",
        requirements: {
          gpa: "Graduate degree in real estate economics, civil engineering, or corporate finance",
          ielts: "English fluency (German language capability advantageous)",
          gre: "Not required",
          papers: "Four-page research outline focused on sustainable real estate asset dynamics",
          references: "Two letters of recommendation from academia or property investment sector"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4390,
        title: "Bachelor of Science in International Business Admission Pathway",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Six-semester international bachelor's degree featuring an integrated semester abroad at one of 200+ partner universities and mandatory corporate internships.",
        funding: "EBS Solidarity Fund providing social-need tuition waivers up to 70%",
        fee: "€100",
        tuition: "€8,100 per semester",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ebs.edu/en/study-programme/bachelor-of-science-in-international-business",
        requirements: {
          gpa: "General university entrance qualification (Abitur, International Baccalaureate, or recognized high school diploma)",
          ielts: "IELTS 6.0 or TOEFL iBT 80",
          gre: "EBS selection day interview and assessment",
          papers: "High school transcripts and motivation letter",
          references: "Not required"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4391,
        title: "Center for Family Business Summer Research Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Ten-week paid research internship analyzing governance structures and succession strategies in German Mittelstand family corporations.",
        funding: "€1,200 monthly compensation plus on-campus dining allowance in Oestrich-Winkel",
        fee: "Free application",
        tuition: "Not applicable; paid research internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.ebs.edu/en/research",
        requirements: {
          gpa: "Enrolled in 2nd year or higher of a business or economics bachelor/master program",
          ielts: "English fluency; conversational German",
          gre: "Not required",
          papers: "Resume and one-page letter explaining interest in Mittelstand corporate governance",
          references: "One academic faculty reference"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      },
      {
        id: 4392,
        title: "Executive Certificate in Sustainable Corporate Finance and ESG Analytics",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Four-module professional certificate teaching EU Taxonomy compliance, green bond issuance frameworks, and ESG portfolio risk scoring.",
        funding: "Corporate group registration discounts available",
        fee: "€50",
        tuition: "€4,800 for the four executive modules",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://www.ebs.edu/en/executive-education",
        requirements: {
          gpa: "Bachelor's degree and minimum two years of relevant corporate or banking work experience",
          ielts: "Professional English proficiency",
          gre: "Not required",
          papers: "Professional CV and registration form",
          references: "Not required"
        },
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        location: "Oestrich-Winkel & Wiesbaden, Hesse, Germany"
      }
    ],
    researchers: [
      {
        id: 1899,
        name: "Prof. Dr. Ferdinand Mager",
        title: "Professor of Corporate Finance & Head of Department of Finance",
        subject: "social-sciences",
        topics: ["Corporate Finance", "Portfolio Management", "Bank Capital Adequacy"],
        summary: "Leading German finance scholar researching empirical capital structure decisions, bank liquidity regulations under Basel IV, and ESG bond performance.",
        source: "https://www.ebs.edu/en/person/ferdinand-mager",
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1900,
        name: "Prof. Dr. Kerstin Hennig",
        title: "Professor of Real Estate Management & Head of REMI",
        subject: "social-sciences",
        topics: ["Real Estate Investment", "ESG in Built Assets", "Urban Innovation"],
        summary: "Prominent property economist advising German and European institutional investors on sustainable urban real estate transformations and green capital flows.",
        source: "https://www.ebs.edu/en/person/kerstin-hennig",
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1901,
        name: "Prof. Dr. Christian Landau",
        title: "Dean of EBS Business School & Professor of Strategic Management",
        subject: "social-sciences",
        topics: ["Strategic Agility", "Business Model Innovation", "Corporate Governance"],
        summary: "Strategic management expert investigating how industrial enterprises navigate digital and ecological transitions through agile strategic renewal.",
        source: "https://www.ebs.edu/en/person/christian-landau",
        university: "EBS Business School (EBS Universität für Wirtschaft und Recht)",
        country: "Germany",
        recruiting: "Not verified"
      }
    ]
  },

  // 6. Germany: Fachhochschule Wedel (FH Wedel)
  {
    institution: "Fachhochschule Wedel (FH Wedel)",
    slug: "fachhochschule-wedel-fh-wedel",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 255,
    location: "Wedel, Schleswig-Holstein, Germany",
    website: "https://www.fh-wedel.de",
    shortName: "FH Wedel",
    badge: "Computer Science & Engineering University",
    overview: "Located on the outskirts of Hamburg in Wedel, Fachhochschule Wedel is a renowned private state-recognized university of applied sciences specializing in computer science, software engineering, business informatics, and industrial engineering with tight ties to Northern Germany's tech ecosystem.",
    lead: "Explore computer science master's scholarships, game development degrees, and applied engineering research at FH Wedel near Hamburg.",
    description: "Fachhochschule Wedel (FH Wedel) computer science degrees, software engineering research, and tech industry partnerships in Wedel/Hamburg.",
    quickFacts: {
      type: "Private State-Recognized University of Applied Sciences",
      campus: "Wedel (Hamburg Metropolitan Region), Schleswig-Holstein",
      accreditation: "Ministry of General and Vocational Education, Science, Research and Culture Schleswig-Holstein / ASIIN",
      admissions: "FH Wedel Student Secretariat & Admissions",
      language: "German and English (bilingual master's tracks available)",
      aid: "Deutschlandstipendium, FH Wedel Förderverein bursaries, and corporate tech sponsorships"
    },
    strengths: [
      "Applied computer science, cloud computing, and distributed systems",
      "Game development, interactive 3D media, and computer graphics",
      "Business informatics, IT consulting, and enterprise resource planning",
      "Industrial engineering and intelligent automation systems"
    ],
    programs: [
      { title: "Master of Science in Applied Computer Science (M.Sc.)", level: "Graduate Degree", desc: "Four-semester advanced program focusing on software architecture, artificial intelligence, and cloud-native systems." },
      { title: "Bachelor of Science in Games Engineering", level: "Undergraduate Degree", desc: "Technical engineering degree concentrating on game engine architecture, real-time rendering, physics simulation, and C++ programming." },
      { title: "Master of Science in Data Science & Artificial Intelligence", level: "Graduate Degree", desc: "Interdisciplinary master's degree exploring deep learning, big data analytics, and operational AI in manufacturing." }
    ],
    opportunities: [
      {
        id: 4393,
        title: "FH Wedel Förderverein Tech Innovation Master's Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Merit-based graduate fellowship co-funded by Hamburg tech industry partners for exceptional students entering computing and engineering master's tracks.",
        funding: "€6,000 annual scholarship (€500/month) plus direct executive mentorship at partner software firms",
        fee: "Free application",
        tuition: "€2,280 per semester standard tuition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.fh-wedel.de/studieninteressierte/finanzierung/stipendien/",
        requirements: {
          gpa: "Completed bachelor's degree in computer science or related engineering discipline with German grade 2.0 or better",
          ielts: "English B2 or IELTS 6.0; German B2 for German-taught modules",
          gre: "Not required",
          papers: "Letter of motivation and GitHub repository demonstration",
          references: "One academic faculty reference"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4394,
        title: "Deutschlandstipendium National Merit Award at FH Wedel",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Federal German scholarship matching public funds with private corporate sponsors to support talented and socially engaged engineering undergraduates.",
        funding: "€300 monthly cash stipend (€3,600/year) granted tax-free for at least two semesters",
        fee: "Free application for enrolled or admitted students",
        tuition: "Covered through student's primary financing",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.fh-wedel.de/studieninteressierte/finanzierung/deutschlandstipendium/",
        requirements: {
          gpa: "Outstanding academic performance in school diploma or current university semester",
          ielts: "Appropriate language certificate according to study program",
          gre: "Not required",
          papers: "CV in tabular format and proof of volunteer or community engagement",
          references: "Not required"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4395,
        title: "Bachelor of Science in Games Engineering Admission Pathway",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Seven-semester accredited bachelor's degree including a practical internship semester, specialized in rendering pipelines, shader programming, and multiplayer network code.",
        funding: "Corporate gaming studio scholarships available through regional Hamburg games network",
        fee: "Free application",
        tuition: "€2,100 per semester",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.fh-wedel.de/bewerben/bachelor/games-engineering/",
        requirements: {
          gpa: "Fachhochschulreife or Allgemeine Hochschulreife with solid foundations in mathematics",
          ielts: "German language proficiency at C1 level (DSH-2 or TestDaF 4x4)",
          gre: "Not required",
          papers: "School leaving certificate and programming portfolio (C++, C#, or Unity/Unreal project samples)",
          references: "Not required"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4396,
        title: "Master of Science in Data Science and AI Direct Admission",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Three-semester specialized program focusing on large-scale machine learning, automated pipelines (MLOps), and statistical data visualization.",
        funding: "Research assistantships (HiWi positions) paying €14.50/hour across university AI laboratories",
        fee: "Free application",
        tuition: "€2,280 per semester",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.fh-wedel.de/bewerben/master/data-science-ai/",
        requirements: {
          gpa: "Bachelor's degree in informatics, data science, mathematics, or related field with at least 210 ECTS",
          ielts: "English B2 level or IELTS 6.5",
          gre: "Not required",
          papers: "Transcript of records showing solid linear algebra, probability, and algorithms coursework",
          references: "One academic reference"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4397,
        title: "Applied Robotics and Autonomous Vehicles Laboratory Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Six-month applied development internship in the Wedel autonomous systems lab developing ROS2 controllers and LiDAR obstacle detection.",
        funding: "€850 monthly stipend plus full access to vehicle testing rigs and compute infrastructure",
        fee: "Free application",
        tuition: "Not applicable; funded research internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.fh-wedel.de/forschung/",
        requirements: {
          gpa: "Enrolled student in computer engineering, mechatronics, or computer science",
          ielts: "English or German working fluency",
          gre: "Not required",
          papers: "Resume and code examples demonstrating C++ / Python and Linux experience",
          references: "Professor recommendation letter"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4398,
        title: "Industrial Engineering and Smart Factory Co-op Degree Pathway",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Dual-study cooperative program combining academic studies at FH Wedel with practical engineering apprenticeships at northern German industrial leaders.",
        funding: "Partner company pays all tuition fees and provides monthly apprentice salary of €1,100 to €1,400",
        fee: "Free application",
        tuition: "Fully paid by partner industrial employer",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.fh-wedel.de/kooperationen/duales-studium/",
        requirements: {
          gpa: "University entrance qualification and successful dual study contract with a partner company",
          ielts: "German C1 required",
          gre: "Not required",
          papers: "Copy of signed training contract and high school diploma",
          references: "Not required"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      },
      {
        id: 4399,
        title: "Intensive Certificate in Cloud Architecture and Kubernetes Engineering",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Eight-week technical certificate covering Docker containerization, Kubernetes cluster orchestration, and AWS/Azure deployment strategies.",
        funding: "Educational voucher (Bildungsgutschein) financing accepted for eligible German jobseekers",
        fee: "Free application",
        tuition: "€1,850 for the complete technical certificate",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.fh-wedel.de/weiterbildung/",
        requirements: {
          gpa: "Professional experience in software development or system administration",
          ielts: "English technical reading capability",
          gre: "Not required",
          papers: "Registration form and summary of IT experience",
          references: "Not required"
        },
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        location: "Wedel, Schleswig-Holstein, Germany"
      }
    ],
    researchers: [
      {
        id: 1902,
        name: "Prof. Dr. Eike Harms",
        title: "President of FH Wedel & Professor of Computer Science",
        subject: "computer-science",
        topics: ["Applied Software Engineering", "Higher Education Governance", "IT Industry Collaboration"],
        summary: "University president and computer scientist advancing applied engineering education and technology transfer between Hamburg tech startups and university laboratories.",
        source: "https://www.fh-wedel.de/wir/hochschulleitung/",
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1903,
        name: "Prof. Dr. Ulrich Hoffmann",
        title: "Professor of Computer Science & Head of Games Engineering",
        subject: "computer-science",
        topics: ["Real-Time Computer Graphics", "Game Engine Architecture", "Virtual Reality Simulation"],
        summary: "Pioneering computer graphics expert designing real-time rendering algorithms, shader optimization techniques, and virtual simulation engines for entertainment and industrial training.",
        source: "https://www.fh-wedel.de/wir/dozenten/ulrich-hoffmann/",
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1904,
        name: "Prof. Dr. Sebastian Iwanowski",
        title: "Professor of Artificial Intelligence & Robotics",
        subject: "computer-science",
        topics: ["Autonomous Mobile Robots", "Computer Vision", "Motion Planning Algorithms"],
        summary: "Robotics and artificial intelligence specialist leading experimental research on path planning, visual SLAM, and cooperative multi-robot systems.",
        source: "https://www.fh-wedel.de/wir/dozenten/sebastian-iwanowski/",
        university: "Fachhochschule Wedel (FH Wedel)",
        country: "Germany",
        recruiting: "Not verified"
      }
    ]
  },

  // 7. Germany: FH Aachen University of Applied Sciences
  {
    institution: "FH Aachen University of Applied Sciences",
    slug: "fh-aachen-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 258,
    location: "Aachen & Jülich, North Rhine-Westphalia, Germany",
    website: "https://www.fh-aachen.de",
    shortName: "FH Aachen",
    badge: "Premier Aerospace, Energy & Biomedical Polytechnic",
    overview: "With over 15,000 students across Aachen and Jülich, FH Aachen is consistently ranked among Germany's top universities of applied sciences, internationally celebrated for aerospace engineering, renewable energy technology, biomedical engineering, and automotive mechanics.",
    lead: "Explore aerospace engineering master's programs, renewable energy research fellowships, and biomedical degrees at FH Aachen in North Rhine-Westphalia.",
    description: "FH Aachen University of Applied Sciences aerospace engineering, biomedical technology, and renewable energy research in Aachen and Jülich.",
    quickFacts: {
      type: "Public University of Applied Sciences (Fachhochschule)",
      campus: "Aachen (Main Technology Campus) & Jülich (Solar/Biomedical Campus)",
      accreditation: "Ministry of Culture and Science of North Rhine-Westphalia / ASIIN",
      admissions: "FH Aachen Student Service Center (Studierendensekretariat)",
      language: "German and English (multiple fully English-taught engineering programs)",
      aid: "Zero tuition fees for domestic/EU students, Deutschlandstipendium, and NRW doctoral stipends"
    },
    strengths: [
      "Aerospace engineering, flight mechanics, and space satellite systems",
      "Solar thermal energy, hydrogen technology, and Jülich Solar Campus research",
      "Biomedical engineering, medical physics, and biotechnology",
      "Mechanical engineering and automotive mechatronics"
    ],
    programs: [
      { title: "Master of Science in Aerospace Engineering", level: "Graduate Degree", desc: "Top-ranked European engineering degree focusing on aircraft propulsion, composite structures, and space payload design." },
      { title: "Bachelor of Engineering in Renewable Energy Systems", level: "Undergraduate Degree", desc: "Hands-on engineering program located at the Jülich Solar Campus investigating photovoltaics, wind energy, and thermal storage." },
      { title: "Master of Science in Biomedical Engineering", level: "Graduate Degree", desc: "English-taught graduate program combining medical device development, biosensors, and clinical biomechanics." }
    ],
    opportunities: [
      {
        id: 4400,
        title: "FH Aachen Aerospace Flight Testing and Propulsion Research Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Two-year research fellowship at the Institute of Aerospace Technology evaluating electric aircraft propulsion and low-drag wing configurations.",
        funding: "€2,100 monthly stipend (TV-L E13 75%) plus flight test instrumentation and conference budget",
        fee: "Free application",
        tuition: "No tuition; statutory semester contribution of approx. €320 (including public transit ticket)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.fh-aachen.de/forschung/institute/ilb",
        requirements: {
          gpa: "Completed Bachelor or Master of Science in aerospace, mechanical, or electrical engineering with GPA 2.0 or better",
          ielts: "IELTS 6.5 or TOEFL iBT 88",
          gre: "Not required",
          papers: "Master's thesis summary and computational fluid dynamics (CFD) sample projects",
          references: "Two academic letters from aerospace or mechanics professors"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4401,
        title: "Master of Science in Biomedical Engineering Direct English Track",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        desc: "English-medium four-semester graduate degree in Jülich preparing engineers for international medical technology and biomedical diagnostics industries.",
        funding: "DAAD scholarships, Deutschlandstipendium awards, and research assistant positions available",
        fee: "Free application via uni-assist for international applicants (€75)",
        tuition: "Zero tuition fees; approx. €320/semester administrative fee",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.fh-aachen.de/studium/studiengaenge/biomedical-engineering-msc",
        requirements: {
          gpa: "Bachelor's degree in biomedical engineering, mechanical engineering, electrical engineering, or physics (minimum 210 ECTS)",
          ielts: "IELTS 6.5 overall or TOEFL iBT 90",
          gre: "Not required",
          papers: "Verified undergraduate degree certificate and detailed syllabus transcript",
          references: "One academic letter of recommendation"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4402,
        title: "Solar Campus Jülich Renewable Thermal Energy Doctoral Scholarship",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Three-year doctoral research position at Campus Jülich investigating high-temperature solar thermal receivers and green hydrogen generation.",
        funding: "Full TV-L E13 research associate salary (€52,000 gross per annum) with cooperative doctorate through RWTH Aachen or University of Duisburg-Essen",
        fee: "Free application",
        tuition: "Zero tuition fees",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.fh-aachen.de/forschung/institute/nowum-energy",
        requirements: {
          gpa: "Excellent Master of Science in energy engineering, mechanical engineering, or thermodynamics (German 1.8 or higher)",
          ielts: "IELTS 7.0 or fluent technical German",
          gre: "Not required",
          papers: "Master's thesis and proposed doctoral research outline in thermodynamic simulation",
          references: "Two academic letters from university engineering faculty"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4403,
        title: "Bachelor of Engineering in Mechanical Engineering Admission Pathway",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        desc: "Seven-semester foundational mechanical engineering program featuring practical workshops, 3D CAD design, and a ten-week mandatory industrial internship.",
        funding: "NRW state student loan and BAföG funding for eligible residents",
        fee: "Free direct application",
        tuition: "Zero tuition fees; €320/semester social fee",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.fh-aachen.de/studium/studiengaenge/maschinenbau-beng",
        requirements: {
          gpa: "German Abitur or recognized international university entrance qualification (HZB)",
          ielts: "German C1 level (DSH-2 or TestDaF 4x4)",
          gre: "Not required",
          papers: "School leaving certificate and documentation of basic pre-study metalworking internship",
          references: "Not required"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4404,
        title: "Institute for Mobile Propulsion Automotive Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Five-month industrial applied research practicum testing battery management systems, electric vehicle drivetrains, and fuel cell efficiency.",
        funding: "€950 monthly stipend plus laboratory equipment training",
        fee: "Free application for enrolled engineering students",
        tuition: "Not applicable; paid technical placement",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.fh-aachen.de/forschung",
        requirements: {
          gpa: "Enrolled student in automotive, electrical, or mechanical engineering with minimum 90 ECTS completed",
          ielts: "German or English working fluency",
          gre: "Not required",
          papers: "Resume and transcript showing automotive electronics or thermodynamics coursework",
          references: "One academic faculty reference"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4405,
        title: "FH Aachen Deutschlandstipendium Industry Excellence Grant",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Competitive scholarship funded 50/50 by regional industrial leaders (Siemens, FEV, Saint-Gobain) and the German Federal Government.",
        funding: "€3,600 annual tax-free stipend (€300/month) plus direct networking with regional engineering executives",
        fee: "Free application",
        tuition: "Covered through zero-tuition policy",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        source: "https://www.fh-aachen.de/studium/stipendien",
        requirements: {
          gpa: "High academic performance across engineering and technology modules",
          ielts: "Language certificates relevant to enrolled degree",
          gre: "Not required",
          papers: "Tabular CV and proof of extracurricular community leadership or engineering team participation (e.g. Formula Student)",
          references: "Not required"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      },
      {
        id: 4406,
        title: "Certificate in Additive Manufacturing and 3D Metal Printing",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        desc: "Ten-week continuing education certificate in selective laser melting (SLM), metal powder metallurgy, and topological structural optimization.",
        funding: "Corporate employee continuing education subsidies applicable",
        fee: "Free application",
        tuition: "€1,950 total certificate tuition",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.fh-aachen.de/weiterbildung",
        requirements: {
          gpa: "Degree or professional technician qualification in mechanical or manufacturing engineering",
          ielts: "Technical English or German",
          gre: "Not required",
          papers: "Registration form and proof of manufacturing background",
          references: "Not required"
        },
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        location: "Aachen & Jülich, North Rhine-Westphalia, Germany"
      }
    ],
    researchers: [
      {
        id: 1905,
        name: "Prof. Dr. Peter Dahmann",
        title: "Professor of Aerospace Engineering & Dean of the Faculty of Aerospace",
        subject: "engineering",
        topics: ["Aircraft Structures", "Composite Materials", "Aeroelasticity"],
        summary: "Prominent aerospace engineer leading structural testing of fiber-reinforced polymer aircraft components and satellite structures in partnership with Airbus and DLR.",
        source: "https://www.fh-aachen.de/menschen/dahmann/",
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1906,
        name: "Prof. Dr. Isabel Kuperjans",
        title: "Professor of Energy Technology & Director of NOWUM-Energy Institute",
        subject: "environment",
        topics: ["Solar Thermal Systems", "Biomass Conversion", "Industrial Energy Efficiency"],
        summary: "Renowned energy systems scientist directing renewable heat, hydrogen infrastructure, and biomass gasification research at Campus Jülich.",
        source: "https://www.fh-aachen.de/menschen/kuperjans/",
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1907,
        name: "Prof. Dr. Thomas Schmitz-Rode",
        title: "Professor of Medical Technology & Bio-Hybrid Engineering",
        subject: "engineering",
        topics: ["Cardiovascular Implants", "Biocompatible Materials", "Bio-Hybrid Organs"],
        summary: "World-class biomedical engineering researcher designing artificial heart valves, endovascular catheters, and tissue-engineered clinical grafts.",
        source: "https://www.fh-aachen.de/forschung/institute/medizintechnik",
        university: "FH Aachen University of Applied Sciences",
        country: "Germany",
        recruiting: "Not verified"
      }
    ]
  },

  // 8. Germany: Hochschule Schmalkalden (FH Schmalkalden)
  {
    institution: "Hochschule Schmalkalden (FH Schmalkalden)",
    slug: "hochschule-schmalkalden-fh-schmalkalden",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 260,
    location: "Schmalkalden, Thuringia, Germany",
    website: "https://www.hs-schmalkalden.de",
    shortName: "Hochschule Schmalkalden",
    badge: "Thuringian University of Applied Sciences",
    overview: "Nestled in the green heart of Germany in the Thuringian Forest, Hochschule Schmalkalden is an internationally focused public university of applied sciences renowned for mechanical engineering, computer science, electrical engineering, business administration, and business law.",
    lead: "Explore applied computing master's degrees, mechanical engineering fellowships, and business law programs at Hochschule Schmalkalden in Thuringia.",
    description: "Hochschule Schmalkalden (FH Schmalkalden) applied engineering, computer science degrees, and business law studies in Thuringia, Germany.",
    quickFacts: {
      type: "Public University of Applied Sciences (Fachhochschule)",
      campus: "Main Campus, Schmalkalden, Thuringia",
      accreditation: "Thuringian Ministry of Economy, Science and Digital Society / ACQUIN",
      admissions: "Department of Student Affairs (Dezernat für studentische Angelegenheiten)",
      language: "German and English (multiple English-taught graduate programs)",
      aid: "Zero tuition fees, Deutschlandstipendium, and Erasmus+ mobility grants"
    },
    strengths: [
      "Precision tool manufacturing, forming technologies, and plastics engineering",
      "Applied computer science, machine learning, and cybersecurity",
      "Business law, corporate restructuring, and international commercial law",
      "Electrical engineering, embedded sensors, and renewable power electronics"
    ],
    programs: [
      { title: "Master of Science in Applied Computer Science (English Track)", level: "Graduate Degree", desc: "Four-semester international master's degree focusing on software development, mobile computing, and intelligent systems." },
      { title: "Bachelor of Engineering in Mechanical Engineering & Toolmaking", level: "Undergraduate Degree", desc: "Practical engineering degree embedded in Thuringia's world-famous precision tool and manufacturing cluster." },
      { title: "Master of Laws in Corporate Restructuring & Insolvency Law (LL.M.)", level: "Graduate Degree", desc: "Specialized legal program examining corporate reorganization, bankruptcy proceedings, and turnaround finance." }
    ],
    opportunities: [
      {
        id: 4407,
        title: "Master of Science in Applied Computer Science International Entrance Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Thuringian ministry-sponsored merit award supporting exceptional international students admitted to the English-language M.Sc. in Applied Computer Science.",
        funding: "€2,500 initial semester living allowance plus guaranteed university student dorm accommodation",
        fee: "Free application",
        tuition: "Zero tuition fees; approx. €160 semester ticket fee",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.hs-schmalkalden.de/studium/studiengaenge/master/applied-computer-science-msc.html",
        requirements: {
          gpa: "Completed bachelor's degree in computer science or related discipline with grade 2.5 (German scale) or better",
          ielts: "IELTS 6.5 or TOEFL iBT 88",
          gre: "Not required",
          papers: "Motivation letter and certified transcripts with English translations",
          references: "One academic letter of recommendation"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4408,
        title: "Schmalkalden Precision Tool Engineering and Additive Manufacturing Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Two-year graduate research fellowship in the Institute of Tool and Forming Technologies investigating laser cladding and high-speed CNC milling.",
        funding: "€2,000 monthly research stipend plus full access to state-of-the-art multi-axis machining centres",
        fee: "Free application",
        tuition: "Zero tuition fees",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.hs-schmalkalden.de/forschung/institute.html",
        requirements: {
          gpa: "Bachelor's or Master's degree in mechanical engineering, materials science, or manufacturing engineering",
          ielts: "German B2 or English B2",
          gre: "Not required",
          papers: "Summary of practical CAD/CAM, CNC, or materials testing laboratory work",
          references: "Two academic or industrial engineering references"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4409,
        title: "Bachelor of Engineering in Electrical Engineering and Embedded Systems",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Seven-semester foundational degree with practical semester, teaching microcontroller design, analog signal processing, and IoT connectivity.",
        funding: "Thuringian regional industry scholarships offering €300/month for qualifying students",
        fee: "Free application",
        tuition: "Zero tuition fees",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-schmalkalden.de/studium/studiengaenge/bachelor/elektrotechnik-und-informationstechnik-beng.html",
        requirements: {
          gpa: "Higher education entrance qualification (Abitur or Fachhochschulreife)",
          ielts: "German language proficiency (TestDaF 4 or DSH-2)",
          gre: "Not required",
          papers: "High school leaving certificate and pre-study internship documentation (6 weeks)",
          references: "Not required"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4410,
        title: "Master of Laws (LL.M.) in Corporate Restructuring & Insolvency Law",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Three-semester specialized legal degree providing advanced expertise in distressed corporate finance, cross-border restructuring, and insolvency administration.",
        funding: "Law firm partner scholarships covering travel and specialized textbooks up to €1,500",
        fee: "Free application",
        tuition: "Zero tuition fees; approx. €160 semester fee",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.hs-schmalkalden.de/studium/studiengaenge/master/unternehmensrestrukturierung-und-insolvenzmanagement-llm.html",
        requirements: {
          gpa: "First state examination in law, or bachelor's degree in business law with at least grade 'good' (2.5)",
          ielts: "German C1 proficiency",
          gre: "Not required",
          papers: "University transcript and statement of legal career focus",
          references: "One academic or legal professional reference"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4411,
        title: "Thuringia Cyber Security and Industrial Network Defense Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Six-month applied research internship in the university IT security lab evaluating intrusion detection systems for industrial SCADA networks.",
        funding: "€800 monthly living stipend plus on-campus lab access",
        fee: "Free application",
        tuition: "Not applicable; paid placement",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.hs-schmalkalden.de/forschung.html",
        requirements: {
          gpa: "Completed at least 3 semesters of computer science with solid networking grades",
          ielts: "English or German working proficiency",
          gre: "Not required",
          papers: "Resume and description of networking or Linux security projects",
          references: "One faculty recommendation"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4412,
        title: "Schmalkalden Deutschlandstipendium Excellence Grant",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "National merit award providing financial freedom and networking with Thuringian precision engineering and software companies.",
        funding: "€300 per month for one academic year (€3,600 total)",
        fee: "Free application",
        tuition: "Covered through zero-tuition policy",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        source: "https://www.hs-schmalkalden.de/studium/deutschlandstipendium.html",
        requirements: {
          gpa: "Enrolled student at Hochschule Schmalkalden with top academic marks",
          ielts: "Relevant degree language proficiency",
          gre: "Not required",
          papers: "Tabular CV and evidence of extracurricular engagement or family commitments",
          references: "Not required"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      },
      {
        id: 4413,
        title: "Professional Certificate in Plastics Processing and Injection Mold Design",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        desc: "Eight-week certificate course covering polymer rheology, injection molding simulation (Moldflow), and mold cooling circuit design.",
        funding: "Thuringian continuing education subsidies (Weiterbildungsscheck) available",
        fee: "Free application",
        tuition: "€1,650 for the professional module",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.hs-schmalkalden.de/weiterbildung.html",
        requirements: {
          gpa: "Technical background in mechanical, materials, or manufacturing engineering",
          ielts: "German technical fluency",
          gre: "Not required",
          papers: "Registration form and vocational proof",
          references: "Not required"
        },
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        location: "Schmalkalden, Thuringia, Germany"
      }
    ],
    researchers: [
      {
        id: 1908,
        name: "Prof. Dr. Gundolf Baier",
        title: "President of Hochschule Schmalkalden & Professor of Engineering",
        subject: "engineering",
        topics: ["Applied Science Governance", "Materials Science", "Regional Innovation Clusters"],
        summary: "University president steering research expansion in advanced manufacturing and fostering strategic partnerships between Thuringian industry and European universities.",
        source: "https://www.hs-schmalkalden.de/hochschule/leitung-und-organisation/praesidium.html",
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1909,
        name: "Prof. Dr. Thomas Seul",
        title: "Professor of Manufacturing Technology & Plastics Processing",
        subject: "engineering",
        topics: ["Precision Injection Molding", "Polymer Processing", "Medical Tool Engineering"],
        summary: "Nationally recognized expert in plastics technology and precision mold fabrication, conducting applied research on micro-structured polymer components for medical devices.",
        source: "https://www.hs-schmalkalden.de/hochschule/fakultaeten/fakultaet-maschinenbau/personen/professoren/prof-dr-ing-thomas-seul.html",
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1910,
        name: "Prof. Dr. Martin Golz",
        title: "Professor of Computer Science & Head of Biomedical Signal Processing",
        subject: "computer-science",
        topics: ["Machine Learning in Healthcare", "Biosignal Analysis", "EEG Pattern Recognition"],
        summary: "Computer scientist and biomedical researcher developing pattern recognition algorithms and neural network architectures for early detection of sleep apnea and cognitive fatigue.",
        source: "https://www.hs-schmalkalden.de/hochschule/fakultaeten/fakultaet-informatik/personen/professoren/prof-dr-rer-nat-martin-golz.html",
        university: "Hochschule Schmalkalden (FH Schmalkalden)",
        country: "Germany",
        recruiting: "Not verified"
      }
    ]
  },

  // 9. Germany: Flensburg University of Applied Sciences (Hochschule Flensburg)
  {
    institution: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
    slug: "flensburg-university-of-applied-sciences",
    countryId: "germany",
    countryLabel: "Germany",
    sourceRow: 261,
    location: "Flensburg, Schleswig-Holstein, Germany",
    website: "https://www.hs-flensburg.de",
    shortName: "Hochschule Flensburg",
    badge: "Maritime & Renewable Energy Engineering",
    overview: "Located on the Flensburg Fjord on the German-Danish border, Hochschule Flensburg is Germany's northernmost university of applied sciences, with a rich maritime legacy dating back to 1886 and renowned modern research in maritime technologies, wind energy, biotechnology, and business informatics.",
    lead: "Explore wind energy engineering master's programs, maritime technology research fellowships, and biotechnology degrees at Hochschule Flensburg on the Baltic Sea.",
    description: "Hochschule Flensburg maritime engineering, wind energy systems, and biotechnology degrees on the German-Danish border.",
    quickFacts: {
      type: "Public University of Applied Sciences (Fachhochschule)",
      campus: "Flensburger Campus, Flensburg, Schleswig-Holstein",
      accreditation: "Ministry of General and Vocational Education, Science, Research and Culture Schleswig-Holstein / ZEvA",
      admissions: "Center for Academic Services (ZAS - Studierendenservice)",
      language: "German and English (multiple bilingual and English engineering degrees)",
      aid: "Zero tuition fees, Deutschlandstipendium, and Interreg cross-border research funding"
    },
    strengths: [
      "Wind engineering, offshore energy grids, and renewable power systems",
      "Marine engineering, ship propulsion, and maritime environmental protection",
      "Biotechnology, bioprocess engineering, and marine natural products",
      "Cross-border Danish-German business and logistics management"
    ],
    programs: [
      { title: "Master of Science in Wind Engineering", level: "Graduate Degree", desc: "Internationally renowned English-taught engineering program focusing on aerodynamics, grid integration, and structural turbine design." },
      { title: "Bachelor of Science in Marine Engineering (Schiffstechnik)", level: "Undergraduate Degree", desc: "Accredited engineering program preparing officers and technical superintendents for commercial maritime operations and green vessel design." },
      { title: "Bachelor of Science in Biotechnology & Process Engineering", level: "Undergraduate Degree", desc: "Laboratory-intensive program investigating microbial fermentation, downstream processing, and enzyme engineering." }
    ],
    opportunities: [
      {
        id: 4414,
        title: "Flensburg Wind Engineering Graduate Research Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Two-year research fellowship at the Wind Energy Technology Institute (WETI) modeling offshore turbulence and floating wind turbine dynamics.",
        funding: "€2,200 monthly research stipend (TV-L E13 75%) plus wind tunnel and offshore sensor testing access",
        fee: "Free application",
        tuition: "Zero tuition fees; statutory semester ticket approx. €280",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.hs-flensburg.de/forschung/institute/weti",
        requirements: {
          gpa: "Completed Bachelor of Science in mechanical, electrical, or aerospace engineering with grade 2.0 or better",
          ielts: "IELTS 6.5 or TOEFL iBT 90",
          gre: "Not required",
          papers: "Master's research proposal focusing on aeroelastic or structural wind turbine modeling",
          references: "Two academic letters from university engineering professors"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4415,
        title: "Master of Science in Wind Engineering Direct English Track",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        desc: "Four-semester international master's degree conducted jointly with university and industrial partners across Germany and Denmark.",
        funding: "DAAD scholarships, Deutschlandstipendium, and corporate wind turbine manufacturer stipends available",
        fee: "Free direct application (or uni-assist for foreign degree holders)",
        tuition: "Zero tuition fees; approx. €280 semester fee",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.hs-flensburg.de/studium/master/we",
        requirements: {
          gpa: "Bachelor's degree in engineering (mechanical, civil, or electrical) with at least 210 ECTS credits",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Undergraduate transcript, curriculum vitae, and statement of purpose",
          references: "One academic reference letter"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4416,
        title: "Marine Environmental Engineering and Clean Ship Propulsion Research Award",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Three-year doctoral position investigating ammonia and methanol internal combustion engines for Baltic Sea merchant vessels.",
        funding: "Full TV-L E13 research salary (€51,000 gross per annum) in cooperation with maritime industry partners",
        fee: "Free application",
        tuition: "Zero tuition fees",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.hs-flensburg.de/forschung/institute/mti",
        requirements: {
          gpa: "Master of Science in marine engineering, mechanical engineering, or chemical thermodynamics (grade 1.8 or better)",
          ielts: "IELTS 7.0 or fluent German",
          gre: "Not required",
          papers: "Master's thesis summary and research plan on alternative maritime fuels",
          references: "Two letters of recommendation from marine engineering authorities"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4417,
        title: "Bachelor of Science in Marine Engineering (Schiffstechnik) Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Seven-semester accredited degree combining ship engines, thermal auxiliary plants, maritime electronics, and an integrated practical sea semester.",
        funding: "Maritime training allowances (Heuern) during shipboard sea training semesters",
        fee: "Free application",
        tuition: "Zero tuition fees",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hs-flensburg.de/studium/bachelor/st",
        requirements: {
          gpa: "General or subject-specific university entrance qualification",
          ielts: "German C1 (DSH-2 or TestDaF 4x4) and maritime medical fitness certificate (See-Tauglichkeit)",
          gre: "Not required",
          papers: "High school leaving certificate and maritime safety credentials",
          references: "Not required"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4418,
        title: "Baltic Sea Blue Biotechnology Laboratory Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Six-month research internship studying microalgae cultivation, bioactive marine metabolites, and bioprocess fermentation in Flensburg.",
        funding: "€850 monthly stipend plus full laboratory equipment access",
        fee: "Free application for enrolled biotechnology or biochemistry students",
        tuition: "Not applicable; paid lab placement",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.hs-flensburg.de/forschung",
        requirements: {
          gpa: "At least 4 semesters completed in biotechnology or molecular biology with minimum 2.5 average",
          ielts: "German or English working fluency",
          gre: "Not required",
          papers: "Resume and summary of microbiological wet-lab experience",
          references: "One biotechnology faculty recommendation"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4419,
        title: "Flensburg Deutschlandstipendium Maritime and Energy Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Annual scholarship supported by maritime shipping lines and renewable energy developers across Schleswig-Holstein.",
        funding: "€300 monthly cash stipend (€3,600/year) plus invitations to regional energy symposia",
        fee: "Free application",
        tuition: "Covered through zero-tuition policy",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.hs-flensburg.de/studium/stipendien",
        requirements: {
          gpa: "High academic marks in current degree studies at Hochschule Flensburg",
          ielts: "Degree-appropriate language proficiency",
          gre: "Not required",
          papers: "CV and documentation of extracurricular engagement or international experience",
          references: "Not required"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      },
      {
        id: 4420,
        title: "Professional Certificate in Offshore Wind Farm Logistics and Maintenance",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Ten-week certificate course covering offshore crew transfer vessel operations, subsea cable repair protocols, and predictive turbine vibration maintenance.",
        funding: "Schleswig-Holstein state continuing education subsidies available",
        fee: "Free application",
        tuition: "€2,100 total course fee",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.hs-flensburg.de/weiterbildung",
        requirements: {
          gpa: "Degree or professional technician qualification in engineering or logistics",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Registration form and vocational background CV",
          references: "Not required"
        },
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        location: "Flensburg, Schleswig-Holstein, Germany"
      }
    ],
    researchers: [
      {
        id: 1911,
        name: "Prof. Dr. Sven Tode",
        title: "President of Hochschule Flensburg & Professor of History and Higher Education Management",
        subject: "social-sciences",
        topics: ["Higher Education Leadership", "Cross-Border Regional Development", "Economic History"],
        summary: "University president leading bilateral academic integration across the Danish-German border region and modernizing maritime and renewable energy campuses.",
        source: "https://www.hs-flensburg.de/hochschule/organisation/praesidium",
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1912,
        name: "Prof. Dr. Torsten Faber",
        title: "Professor of Wind Energy Technology & Director of WETI",
        subject: "engineering",
        topics: ["Wind Turbine Design", "Offshore Wind Aerodynamics", "Aeroelastic Structural Dynamics"],
        summary: "International authority on wind turbine design and structural dynamics, directing the Wind Energy Technology Institute (WETI) in collaborative European offshore research.",
        source: "https://www.hs-flensburg.de/menschen/torsten-faber",
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        recruiting: "Not verified"
      },
      {
        id: 1913,
        name: "Prof. Dr. Michael Pawlowski",
        title: "Professor of Marine Engineering & Ship Propulsion",
        subject: "engineering",
        topics: ["Alternative Maritime Fuels", "Ship Hydrodynamics", "Marine Auxiliary Plants"],
        summary: "Specialist in sustainable commercial ship propulsion, investigating dual-fuel marine engine optimization and zero-emission harbor power systems.",
        source: "https://www.hs-flensburg.de/menschen/michael-pawlowski",
        university: "Flensburg University of Applied Sciences (Hochschule Flensburg)",
        country: "Germany",
        recruiting: "Not verified"
      }
    ]
  },

  // 10. Italy: Interuniversity Consortium AlmaLaurea
  {
    institution: "Interuniversity Consortium AlmaLaurea",
    slug: "interuniversity-consortium-almalaurea",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 473,
    location: "Bologna, Emilia-Romagna, Italy",
    website: "https://www.almalaurea.it",
    shortName: "AlmaLaurea Bologna",
    badge: "Higher Education Analytics & Graduate Employability",
    overview: "Established in 1994 at the University of Bologna with the support of the Italian Ministry of Universities and Research (MUR), AlmaLaurea is an accredited public inter-university consortium uniting 80 Italian universities. It is internationally recognized as Europe's premier observatory for graduate profiling, statistical education research, and academic labor market mobility.",
    lead: "Explore statistical education research fellowships, graduate labor market analytics fellowships, and academic data science opportunities at AlmaLaurea in Bologna.",
    description: "Interuniversity Consortium AlmaLaurea higher education statistics, graduate employability research, and academic labor market analytics in Bologna.",
    quickFacts: {
      type: "Public Inter-University Research Consortium (80 Italian Universities)",
      campus: "Headquarters in Bologna, Emilia-Romagna, Italy",
      accreditation: "Italian Ministry of Universities and Research (MUR) / National Statistical System (SISTAN)",
      admissions: "AlmaLaurea Scientific and Research Committee",
      language: "Italian and English",
      aid: "MUR national research grants, EU Horizon Europe fellowships, and statistical project bursaries"
    },
    strengths: [
      "National graduate profiling, social origin tracking, and academic equity analysis",
      "Labor market outcome modeling and longitudinal wage econometrics",
      "Higher education quality assurance, dropout mitigation, and curriculum evaluation",
      "Big data analytics on university-to-workplace transitions across the European Union"
    ],
    programs: [
      { title: "AlmaLaurea Postdoctoral Fellowship in Higher Education Econometrics", level: "Postdoctoral Fellowship", desc: "Advanced empirical research analyzing longitudinal microdata on over 3.5 million Italian and European university graduates." },
      { title: "Graduate Internship in Statistical Data Mining & Survey Analytics", level: "Graduate Practicum", desc: "Intensive six-month training in survey weighting, non-response imputation, and econometric modeling within the Italian National Statistical System (SISTAN)." },
      { title: "Executive Masterclass in University Quality Assurance & Labor Placement Metrics", level: "Professional Certificate", desc: "Specialized training for university chancellors, evaluators, and ANVUR accreditation officers on performance indicators." }
    ],
    opportunities: [
      {
        id: 4421,
        title: "AlmaLaurea Research Fellowship in Econometrics of Graduate Human Capital",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Two-year research fellowship at the Bologna observatory analyzing return to education, gender wage gaps, and regional mobility patterns of Italian graduates.",
        funding: "€28,000 annual research grant plus statistical software cluster access and European survey travel subsidies",
        fee: "Free application",
        tuition: "Not applicable; funded research appointment",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.almalaurea.it/info/lavora-con-noi",
        requirements: {
          gpa: "Ph.D. or Master of Science in econometrics, statistics, sociology, or public economics",
          ielts: "English B2/C1 and professional working proficiency in Italian",
          gre: "Not required",
          papers: "Demonstrated publication record using microeconometric data and software (R, Stata, or Python)",
          references: "Two academic letters from professors of statistics or labor economics"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4422,
        title: "AlmaLaurea National Graduate Report Doctoral Scholarship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Three-year cooperative doctoral scholarship co-sponsored with the University of Bologna Department of Statistical Sciences studying longitudinal educational trajectories.",
        funding: "€1,650 net monthly stipend (€19,800/year) plus 10% research budget increment and 50% increase during foreign research stays",
        fee: "€30 University of Bologna doctoral application fee",
        tuition: "Full doctoral tuition exemption under Italian public PhD regulations",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.almalaurea.it/ricerca",
        requirements: {
          gpa: "Laurea Magistrale (Master of Science) in statistics, economics, or data science with grade 105/110 or higher",
          ielts: "English B2 minimum",
          gre: "Not required",
          papers: "Master's thesis and 3,000-word proposed doctoral research outline on higher education outcomes",
          references: "Two academic letters evaluating quantitative empirical research capability"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4423,
        title: "Higher Education Big Data Analytics and Natural Language Processing Grant",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "One-year grant to develop NLP classification algorithms mapping graduate thesis abstracts and CV skills to European ESCO labor taxonomies.",
        funding: "€24,000 project grant over 12 months with high-performance computational infrastructure support",
        fee: "Free application",
        tuition: "Not applicable; research appointment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.almalaurea.it/ricerca",
        requirements: {
          gpa: "Master's degree in computer science, computational linguistics, or statistics",
          ielts: "English fluency and Italian reading comprehension",
          gre: "Not required",
          papers: "Code repository links showcasing NLP (BERT, transformers, or topic modeling in Python)",
          references: "Two academic or industry data science references"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4424,
        title: "SISTAN Survey Methodology and Data Imputation Summer Practicum",
        type: "Internship",
        subject: "mathematics",
        subjects: ["mathematics", "social-sciences"],
        desc: "Three-month paid statistical practicum participating in the preparation, data cleaning, and weighting of the annual National Graduate Profile Survey.",
        funding: "€1,000 monthly training allowance in Bologna",
        fee: "Free application",
        tuition: "Not applicable; paid statistical internship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.almalaurea.it/info/tirocini",
        requirements: {
          gpa: "Enrolled in a master's degree program in statistics, mathematics, or sociology with statistical focus",
          ielts: "Italian fluency required; English working comprehension",
          gre: "Not required",
          papers: "Academic transcript and short cover letter detailing survey sampling interest",
          references: "One professor recommendation from statistics faculty"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4425,
        title: "European Higher Education Graduate Mobility Research Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Annual research award supporting comparative empirical studies examining intra-European brain drain and skilled graduate migration corridors.",
        funding: "€5,000 publication and research prize plus presentation keynote at the AlmaLaurea National Conference",
        fee: "Free submission",
        tuition: "Not applicable; scientific prize",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.almalaurea.it/eventi",
        requirements: {
          gpa: "Master's or doctoral graduate who completed thesis within the past 24 months",
          ielts: "English or Italian thesis submission accepted",
          gre: "Not required",
          papers: "Complete digital copy of defended thesis and a 10-page executive summary",
          references: "Thesis supervisor letter of presentation"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4426,
        title: "AlmaLaurea Gender Equity in STEM Academic Trajectories Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Twelve-month specialized research fellowship investigating gender disparities in STEM graduation rates, starting salaries, and career trajectories in Italy.",
        funding: "€26,000 annual research grant with conference travel budget",
        fee: "Free application",
        tuition: "Not applicable; research fellowship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.almalaurea.it/ricerca",
        requirements: {
          gpa: "Ph.D. or Master's degree in economics, sociology, or public policy",
          ielts: "Italian and English proficiency",
          gre: "Not required",
          papers: "Detailed research proposal on gender dynamics in academic STEM fields",
          references: "Two academic letters of recommendation"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      },
      {
        id: 4427,
        title: "Executive Masterclass in Higher Education Evaluation and ANVUR Metrics",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Four-day intensive professional certificate for university administrators on higher education performance indicators, dropout predictors, and labor market metrics.",
        funding: "Institutional registration packages available for consortium member universities",
        fee: "Free application",
        tuition: "€850 course registration fee",
        deadline: "2027-06-10",
        deadlineText: "June 10, 2027",
        source: "https://www.almalaurea.it/convegni",
        requirements: {
          gpa: "Employed in university administration, academic evaluation, or statistical research",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Registration form and verification of academic institutional affiliation",
          references: "Not required"
        },
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        location: "Bologna, Emilia-Romagna, Italy"
      }
    ],
    researchers: [
      {
        id: 1914,
        name: "Prof. Dr. Ivano Dionigi",
        title: "President of Interuniversity Consortium AlmaLaurea & Former Rector of University of Bologna",
        subject: "social-sciences",
        topics: ["Higher Education Policy", "Classical Philology", "Academic Humanism"],
        summary: "Eminent Italian classicist, former Rector of the University of Bologna, and President of AlmaLaurea guiding national dialogue on the cultural and economic value of higher education.",
        source: "https://www.almalaurea.it/info/chi-siamo/organi/presidente",
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        recruiting: "Not verified"
      },
      {
        id: 1915,
        name: "Prof. Dr. Marina Timoteo",
        title: "Director of AlmaLaurea & Professor of Comparative Law, University of Bologna",
        subject: "social-sciences",
        topics: ["Comparative Higher Education Systems", "International Academic Mobility", "Graduate Law"],
        summary: "Director of AlmaLaurea stewarding national surveys, international research collaborations, and comparative legal frameworks for graduate employability across Europe.",
        source: "https://www.almalaurea.it/info/chi-siamo/organi/direttore",
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        recruiting: "Not verified"
      },
      {
        id: 1916,
        name: "Dr. Silvia Ghiselli",
        title: "Head of Statistical Studies and Research Office, AlmaLaurea",
        subject: "social-sciences",
        topics: ["Statistical Survey Methodology", "Graduate Labor Market Outcomes", "Educational Equity"],
        summary: "Senior statistical director leading the design, execution, and analytical publication of Italy's annual National Reports on Graduate Profiling and Employment Condition.",
        source: "https://www.almalaurea.it/ricerca",
        university: "Interuniversity Consortium AlmaLaurea",
        country: "Italy",
        recruiting: "Not verified"
      }
    ]
  }
];
