/**
 * Batch 33 - Part 1: Universities 1 to 10 (Total Unis 412 to 421)
 * Canada (3), Australia (3), Germany (4)
 * Opp IDs: 2888 to 2957 (70 opportunities)
 * Faculty IDs: 1257 to 1286 (30 faculty members)
 */

export const batch33Part1Universities = [
  // 1. Canada: OCAD University
  {
    institution: "OCAD University",
    shortName: "OCAD U",
    slug: "ocad-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Toronto, Ontario, Canada",
    website: "https://www.ocadu.ca",
    sourceRow: 70,
    headline: "OCAD University: Art, Design, Digital Media & Inclusive Innovation Guide",
    overview: "OCAD University (Ontario College of Art and Design) is Canada's oldest and largest public university dedicated to art, design, and digital media education, renowned for its Sharp Centre for Design and groundbreaking inclusive design laboratories.",
    description: "Verified graduate degrees, creative research fellowships, and admissions guide for OCAD University in Toronto, Canada.",
    heroEyebrow: "Ontario Public Art & Design University · Verified Directory",
    tuitionText: "Domestic graduate tuition averages CAD $8,200 to $10,500 annually. International student graduate tuition is approximately CAD $24,500 to $28,000 annually. Graduate teaching assistantships (GTA) and OCAD U entrance scholarships offset tuition costs.",
    admissions: {
      masters: "Four-year Bachelor of Fine Arts (BFA), Bachelor of Design (BDes), or related honours degree with minimum 75% average (B+) in final two years.",
      phd: "Not currently offering independent doctoral degrees; collaborative research residency and master-level terminal MFA/MDes pathways available.",
      language: "IELTS Academic 7.0 overall (minimum 6.5 in each band) or TOEFL iBT 90 overall (minimum 22 in writing, 20 in others).",
      proposal: "Comprehensive portfolio of 15-20 creative works, digital projects, or design prototypes accompanied by a 1,000-word statement of intent.",
      appFee: "CAD $110 non-refundable graduate application fee payable via the Graduate Application Portal.",
      documents: "Official academic transcripts, digital portfolio, statement of intent, CV, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2888,
        title: "OCAD U Graduate Entrance Scholarship & Dean's Talent Award",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "CAD $5,000 to $12,000 entrance scholarship",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $110 application fee",
        tuition: "Merit award applied directly toward domestic or international tuition",
        source: "https://www.ocadu.ca/academics/graduate-studies/fees-and-funding",
        desc: "Competitive entrance scholarship awarded to exceptional graduate applicants entering MFA, MDes, or MA programs in Digital Futures, Inclusive Design, or Contemporary Art.",
        requirements: {
          gpa: "Minimum 80% (A-) cumulative GPA in final two years of undergraduate study",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Exemplary creative portfolio and research statement",
          references: "Three academic or professional letters of reference"
        }
      },
      {
        id: 2889,
        title: "Master of Design (MDes) in Inclusive Design",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science", "social-sciences"],
        funding: "Graduate assistantships available (CAD $10,000 - $16,000 per year)",
        status: "Open",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "CAD $110 application fee",
        tuition: "CAD $9,800 domestic / CAD $26,400 international per year",
        source: "https://www.ocadu.ca/academics/graduate-studies/inclusive-design",
        desc: "Pioneering interdisciplinary graduate program preparing designers to create inclusive digital systems, accessible environments, and equitable public policies.",
        requirements: {
          gpa: "Undergraduate degree in design, computer science, education, or social science with minimum 75% average",
          ielts: "IELTS 7.0 (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Comprehensive portfolio of accessible design or research projects and project proposal",
          references: "Three academic or professional referee evaluations"
        }
      },
      {
        id: 2890,
        title: "Master of Fine Arts (MFA) in Digital Futures",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "Supported through teaching assistantships and research fellowships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $110 application fee",
        tuition: "CAD $9,200 domestic / CAD $25,800 international per year",
        source: "https://www.ocadu.ca/academics/graduate-studies/digital-futures",
        desc: "Cutting-edge graduate program combining creative coding, immersive media, virtual reality, sensor technologies, and critical theory in digital arts.",
        requirements: {
          gpa: "Bachelor's degree with minimum B+ standing in visual arts, technology, or communications",
          ielts: "IELTS 7.0 overall or equivalent",
          gre: "Not required",
          papers: "Creative technology portfolio showcasing interactive prototypes, installations, or code",
          references: "Three references familiar with creative technological practice"
        }
      },
      {
        id: 2891,
        title: "Visual Analytics & Inclusive Tech Research Lab Assistantship",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        funding: "CAD $20,000 annual research stipend plus tuition bursary",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application for admitted graduate students",
        tuition: "Partial tuition remission funded by lab grant",
        source: "https://www.ocadu.ca/research",
        desc: "Research assistantship exploring human-computer interaction, accessible data visualization, and generative interface design for marginalized users.",
        requirements: {
          gpa: "Current graduate standing with high academic achievement in HCI or design",
          ielts: "Fluency in academic English",
          gre: "Not required",
          papers: "Demonstrated experience in D3.js, WebGL, or assistive technology prototyping",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 2892,
        title: "Toronto Urban Media & Creative Tech Co-op Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "CAD $22/hour for 14-week corporate or cultural placement",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero placement fee",
        tuition: "Covered through standard academic course registration",
        source: "https://www.ocadu.ca/services/experiential-learning",
        desc: "Industry practicum placing graduate students with top Toronto cultural institutes, digital gaming studios, and UX design agencies.",
        requirements: {
          gpa: "Minimum 75% average in graduate coursework",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Updated professional resume and design portfolio",
          references: "One faculty coordinator endorsement"
        }
      },
      {
        id: 2893,
        title: "OCAD Visual & Material Culture Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "CAD $55,000 annual fellowship stipend with research travel allowance",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Free application",
        tuition: "Full postdoctoral appointment (no tuition)",
        source: "https://www.ocadu.ca/research/funding-opportunities",
        desc: "One-year postdoctoral appointment focusing on decolonial curation, Indigenous materiality, and contemporary craft criticism in Canada.",
        requirements: {
          gpa: "PhD in Art History, Curatorial Studies, Cultural Studies, or Design Theory",
          ielts: "Doctoral-level English proficiency",
          gre: "Not required",
          papers: "Curatorial dossier or two peer-reviewed publications and 3-page research agenda",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2894,
        title: "Assistant Professor in Digital Media & Creative Coding",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        funding: "CAD $90,000 - $108,000 annual salary plus Ontario pension benefits",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Tenure-track faculty appointment",
        source: "https://www.ocadu.ca/about/careers",
        desc: "Full-time tenure-track teaching and research appointment in the Faculty of Arts & Science / Digital Futures program.",
        requirements: {
          gpa: "PhD or MFA/MDes terminal degree in Creative Computing, New Media, or Interactive Arts",
          ielts: "Academic English mastery",
          gre: "Not required",
          papers: "Exhibition record or peer-reviewed interactive publications and comprehensive teaching philosophy",
          references: "Three confidential academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1257,
        name: "Dr. Jutta Treviranus",
        title: "Professor & Director of the Inclusive Design Research Centre (IDRC)",
        subject: "arts-design",
        topics: ["Inclusive Design", "Accessible Technology", "AI Ethics", "Disability Studies"],
        source: "https://www.ocadu.ca/research/idrc",
        summary: "Dr. Treviranus is a global pioneer in inclusive design and accessibility, directing international projects on adaptive open web architectures and AI algorithmic bias."
      },
      {
        id: 1258,
        name: "Dr. Kate Hartman",
        title: "Associate Professor & Director of Social Body Lab",
        subject: "computer-science",
        topics: ["Wearable Technology", "Physical Computing", "Interactive Garments", "Human-Computer Interaction"],
        source: "https://www.ocadu.ca/academics/faculty/kate-hartman",
        summary: "Dr. Hartman investigates wearable computing, tactile sensors, and physical interaction design, examining how technology mediates personal expression and interpersonal relations."
      },
      {
        id: 1259,
        name: "Dr. Martha Ladly",
        title: "Professor of Design & Associate Dean of Graduate Studies",
        subject: "arts-design",
        topics: ["Digital Media Theory", "Mobile Technology", "Feminist Design Methodologies", "Urban Informatics"],
        source: "https://www.ocadu.ca/academics/faculty/martha-ladly",
        summary: "Dr. Ladly leads investigations into mobile media, speculative design, and participatory community arts with particular emphasis on feminist technoscience."
      }
    ]
  },

  // 2. Canada: University of Northern British Columbia (UNBC)
  {
    institution: "University of Northern British Columbia",
    shortName: "UNBC",
    slug: "university-of-northern-british-columbia",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Prince George, British Columbia, Canada",
    website: "https://www.unbc.ca",
    sourceRow: 115,
    headline: "University of Northern British Columbia: Forestry, Boreal Ecology & Indigenous Research Guide",
    overview: "The University of Northern British Columbia (UNBC) is consistently ranked among Canada's top primarily undergraduate research universities, renowned as Canada's Green University for groundbreaking research in natural resource management, climate change, and rural community health.",
    description: "Verified graduate degrees, environmental research fellowships, and admissions guide for University of Northern British Columbia in Prince George.",
    heroEyebrow: "BC Public Research University · Canada's Green University",
    tuitionText: "Domestic graduate tuition averages CAD $5,600 to $7,200 annually. International student graduate tuition is approximately CAD $14,800 to $18,500 per year. Substantial funding is provided through Graduate Research Assistantships (GRA) and northern research endowments.",
    admissions: {
      masters: "Four-year Bachelor's degree from an accredited institution with minimum 3.00 GPA (B average) in the last 60 credits of undergraduate study.",
      phd: "Recognized Master's degree with minimum 3.33 GPA (B+ average) and evidence of substantial research or publication competence.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 90 overall (minimum 20 in each section).",
      proposal: "Detailed 2-3 page research statement identifying prospective faculty supervisor and thesis methodology.",
      appFee: "CAD $76.50 for domestic applicants / CAD $153 for international applicants via UNBC Graduate Admissions.",
      documents: "Official post-secondary transcripts, curriculum vitae, statement of academic intent, and three confidential referee reports."
    },
    opportunities: [
      {
        id: 2895,
        title: "UNBC Graduate Entrance Research Award & Northern Merit Fellowship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "CAD $7,500 to $15,000 per academic year",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $76.50 domestic / CAD $153 international",
        tuition: "Direct tuition offset with living allowance top-up",
        source: "https://www.unbc.ca/financial-aid/awards-and-financial-aid",
        desc: "Merit-based entrance award for outstanding graduate applicants enrolling in Natural Resources and Environmental Studies (NRES) or Community Health Sciences at UNBC.",
        requirements: {
          gpa: "Minimum 3.67 cumulative GPA (A- standing) over upper-level undergraduate credits",
          ielts: "IELTS 6.5 overall or TOEFL 90",
          gre: "Not required",
          papers: "Compelling research statement approved by prospective academic supervisor",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2896,
        title: "Master of Science in Natural Resources and Environmental Studies (NRES)",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "biology", "chemistry"],
        funding: "Guaranteed minimum funding package of CAD $18,000 per year (TA/RA)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $76.50 domestic / CAD $153 international",
        tuition: "CAD $5,800 domestic / CAD $15,200 international per year",
        source: "https://www.unbc.ca/nres-graduate-program/master-science",
        desc: "Interdisciplinary graduate degree exploring boreal forest ecology, watershed dynamics, fish and wildlife ecology, and northern environmental management.",
        requirements: {
          gpa: "BSc in Forestry, Biology, Environmental Science, or related field with minimum 3.00 GPA",
          ielts: "IELTS 6.5 (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "Prior confirmation of supervision from a UNBC NRES faculty member",
          references: "Three academic referee appraisals"
        }
      },
      {
        id: 2897,
        title: "Ph.D. in Natural Resources and Environmental Studies",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "CAD $23,000 per year guaranteed doctoral stipend for four years",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $76.50 domestic / CAD $153 international",
        tuition: "CAD $5,600 domestic / CAD $14,800 international per year",
        source: "https://www.unbc.ca/nres-graduate-program/phd",
        desc: "Doctoral research program advancing original scholarship in ecosystem dynamics, sustainable resource communities, environmental governance, and Indigenous resource rights.",
        requirements: {
          gpa: "Recognized Master's degree in environmental science, geography, or ecology with minimum 3.33 GPA",
          ielts: "IELTS 7.0 overall or TOEFL 95",
          gre: "Not required",
          papers: "Five-page dissertation project proposal and master's thesis abstract",
          references: "Three academic referee reports confirming doctoral research promise"
        }
      },
      {
        id: 2898,
        title: "Quesnel River Research Centre Watershed Ecology Assistantship",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "CAD $21,500 annual research salary plus field station lodging",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for registered students",
        tuition: "Covered by QRRC research endowment fund",
        source: "https://www.unbc.ca/quesnel-river-research-centre",
        desc: "Field-based scientific investigation examining salmon migration, river temperature shifts, and post-wildfire erosion in the Fraser River Basin.",
        requirements: {
          gpa: "Undergraduate honours degree in ecology, hydrology, or fisheries",
          ielts: "English fluency for field collaboration",
          gre: "Not required",
          papers: "Field experience in aquatic sampling or hydrological sensor instrumentation",
          references: "Two letters from laboratory or field research supervisors"
        }
      },
      {
        id: 2899,
        title: "Northern Health Authority Community Research Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "CAD $24/hour for 16-week public health policy fellowship",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated in Master of Science in Health Sciences degree",
        source: "https://www.unbc.ca/health-sciences",
        desc: "Applied community health practicum addressing healthcare access, rural telemedicine, and Indigenous wellbeing across northern British Columbia.",
        requirements: {
          gpa: "Graduate standing in Health Sciences or Community Development with 3.33+ GPA",
          ielts: "Fluent communication skills",
          gre: "Not required",
          papers: "Police Criminal Record Check for working with vulnerable populations",
          references: "Two academic or healthcare clinical recommendations"
        }
      },
      {
        id: 2900,
        title: "Pacific Institute for Climate Solutions (PICS) Northern Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CAD $60,000 annual postdoctoral fellowship stipend",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Salaried postdoctoral position",
        source: "https://www.unbc.ca/research/postdoctoral-fellows",
        desc: "Two-year postdoctoral fellowship researching bioenergy integration, sustainable timber construction, and boreal carbon sequestration in subarctic communities.",
        requirements: {
          gpa: "PhD received within last 3 years in climate science, environmental engineering, or forestry",
          ielts: "Scholarly English publication record",
          gre: "Not required",
          papers: "Three first-authored journal articles and a 4-page climate solutions project proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2901,
        title: "Tenure-Track Assistant Professor in Forest Hydrology & Soil Science",
        type: "Job",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CAD $94,000 - $115,000 per year with full university pension & healthcare",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full faculty appointment",
        source: "https://www.unbc.ca/careers",
        desc: "Full-time tenure-track academic appointment in the Department of Ecosystem Science and Management, focusing on hydrology, permafrost, and watershed sustainability.",
        requirements: {
          gpa: "PhD in Hydrology, Soil Science, Forest Science, or Environmental Engineering",
          ielts: "Academic English command",
          gre: "Not required",
          papers: "Peer-reviewed publication trajectory and record of competitive research grants",
          references: "Three professional reference letters and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1260,
        name: "Dr. Stephen Déry",
        title: "Professor & Canada Research Chair in Glacier and Snow Hydrology",
        subject: "environment",
        topics: ["Cryosphere", "Snow Hydrology", "Fraser Basin Dynamics", "Climate Extremes"],
        source: "https://www.unbc.ca/people/dery-dr-stephen",
        summary: "Dr. Déry directs the Northern Hydrometeorology Group at UNBC, monitoring snow cover dynamics, glacier melt rates, and meteorological changes in northern catchments."
      },
      {
        id: 1261,
        name: "Dr. Philip Owens",
        title: "Professor & Forest Renewal BC Endowed Chair in Landscape Ecology",
        subject: "environment",
        topics: ["Soil Erosion", "Sediment Dynamics", "Watershed Contamination", "Post-Fire Hydrology"],
        source: "https://www.unbc.ca/people/owens-dr-philip",
        summary: "Dr. Owens investigates watershed sediment budgets, soil quality preservation, and toxic transport through freshwater systems following wildfire and logging events."
      },
      {
        id: 1262,
        name: "Dr. Margot Parkes",
        title: "Professor of Health Sciences & Northern Medical Program",
        subject: "biology",
        topics: ["Ecohealth", "Planetary Health", "Indigenous Community Wellness", "Watershed Governance"],
        source: "https://www.unbc.ca/people/parkes-dr-margot",
        summary: "Dr. Parkes integrates environmental ecosystems and human health, co-leading the Environment, Community, Health Observatory (ECHO) Network across Canada."
      }
    ]
  },

  // 3. Canada: University of Regina
  {
    institution: "University of Regina",
    shortName: "U of R",
    slug: "university-of-regina",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Regina, Saskatchewan, Canada",
    website: "https://www.uregina.ca",
    sourceRow: 119,
    headline: "University of Regina: Energy, Water, Computer Science & Public Policy Guide",
    overview: "The University of Regina is a dynamic, comprehensive public research university in Saskatchewan, pioneering clean energy technology, petroleum systems engineering, carbon capture sequestration, prairie water sustainability, and health informatics.",
    description: "Verified graduate admissions, STEM research fellowships, and academic programs guide for University of Regina in Saskatchewan, Canada.",
    heroEyebrow: "Saskatchewan Comprehensive Public University · Verified Directory",
    tuitionText: "Domestic graduate tuition averages CAD $5,800 to $7,600 per year. International student graduate tuition is approximately CAD $12,900 to $17,500 annually. Research awards, FGSR graduate scholarships, and teaching assistantships provide robust financial backing.",
    admissions: {
      masters: "Four-year Bachelor's degree in a relevant discipline with minimum 70% cumulative average (Canadian equivalent) from an approved institution.",
      phd: "Master's degree in a congruent subject with minimum 75% cumulative GPA and proven thesis research experience.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 86 overall (minimum 20 in each section).",
      proposal: "A 2-page statement of research intent describing thematic focus, prospective academic supervisor, and methodology.",
      appFee: "CAD $125 non-refundable application fee submitted through the Faculty of Graduate Studies and Research (FGSR) portal.",
      documents: "Official academic transcripts, statement of intent, curriculum vitae, and two confidential letters of recommendation."
    },
    opportunities: [
      {
        id: 2902,
        title: "U of R Graduate Studies & Research Graduate Scholarship (FGSR)",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "CAD $6,000 to $12,000 per academic year",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "CAD $125 application fee",
        tuition: "Awarded as financial credit applied to graduate tuition balances",
        source: "https://www.uregina.ca/gradstudies/funding/scholarships",
        desc: "Merit scholarship funded by FGSR to support thesis-based graduate students in engineering, natural sciences, and computer science at the University of Regina.",
        requirements: {
          gpa: "Minimum 80% cumulative average in past academic studies",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Demonstrated thesis research capability in admissions dossier",
          references: "Two academic referee evaluations"
        }
      },
      {
        id: 2903,
        title: "Master of Applied Science (M.A.Sc.) in Electronic Systems Engineering",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "CAD $17,000 guaranteed annual graduate research assistantship package",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $125 application fee",
        tuition: "CAD $6,200 domestic / CAD $14,900 international per year",
        source: "https://www.uregina.ca/engineering/programs/graduate",
        desc: "Thesis-based engineering program specializing in embedded systems, signal processing, power systems, communications networks, and intelligent robotics.",
        requirements: {
          gpa: "Bachelor's degree in Electrical, Computer, or Electronic Engineering with minimum 73% average",
          ielts: "IELTS 6.5 overall (no band below 6.0)",
          gre: "Not required",
          papers: "Two-page outline of proposed research topic matching faculty supervisor",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2904,
        title: "Ph.D. in Computer Science & Artificial Intelligence",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "CAD $22,000 per year for four years via departmental stipends and GRA",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $125 application fee",
        tuition: "CAD $5,800 domestic / CAD $13,600 international per year",
        source: "https://www.uregina.ca/science/programs/computer-science",
        desc: "Doctoral research program concentrating on machine learning, granular computing, data mining, probabilistic networks, and explainable AI.",
        requirements: {
          gpa: "Master's degree in Computer Science or Software Systems with minimum 75% average",
          ielts: "IELTS 6.5 or TOEFL 86",
          gre: "Recommended for international applicants",
          papers: "Master's thesis abstract and three published or submitted peer-reviewed articles",
          references: "Three academic reference letters attesting to research independence"
        }
      },
      {
        id: 2905,
        title: "Clean Energy Technologies Research Institute (CETRI) Fellowship",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "CAD $24,000 annual research stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee for appointed fellows",
        tuition: "Supported by industrial and provincial research grants",
        source: "https://www.uregina.ca/clean-energy",
        desc: "Applied laboratory research investigating carbon capture solvents, hydrogen fuel cells, membrane separation, and industrial decarbonization.",
        requirements: {
          gpa: "Degree in Chemical Engineering, Chemistry, or Materials Science with high honours",
          ielts: "Academic English proficiency",
          gre: "Not required",
          papers: "Laboratory experience in catalytic reaction systems or gas chromatography",
          references: "Two letters from laboratory directors or academic supervisors"
        }
      },
      {
        id: 2906,
        title: "Saskatchewan Prairie Water Sustainability Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "CAD $23/hour for 16-week environmental policy and field analysis placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated in Master of Public Policy or Geography degree",
        source: "https://www.uregina.ca/arts/programs/geography-environmental-studies",
        desc: "Applied policy and environmental science internship in partnership with the Prairie Adaptation Research Collaborative (PARC) and regional watershed authorities.",
        requirements: {
          gpa: "Minimum 75% in graduate studies in Environmental Science or Public Policy",
          ielts: "Fluent communication skills",
          gre: "Not required",
          papers: "Resume and one sample technical or policy briefing note",
          references: "One academic faculty endorsement"
        }
      },
      {
        id: 2907,
        title: "Johnson Shoyama Graduate School Postdoctoral Fellowship in Public Policy",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $58,000 annual fellowship plus health benefits and research travel grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Salaried postdoctoral research position",
        source: "https://www.schoolofpublicpolicy.sk.ca",
        desc: "Postdoctoral fellowship investigating climate governance, energy transition policy, and social equity in resource-reliant Canadian provinces.",
        requirements: {
          gpa: "PhD in Public Policy, Economics, Political Science, or Environmental Studies",
          ielts: "Native or fluent English proficiency",
          gre: "Not required",
          papers: "Curriculum vitae, two writing samples, and a 3-page research agenda",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2908,
        title: "Tenure-Track Assistant Professor in Machine Learning & Cloud Analytics",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CAD $95,000 - $115,000 per year with Saskatchewan academic pension",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Probationary tenure-track faculty position",
        source: "https://www.uregina.ca/hr/careers",
        desc: "Full-time faculty appointment in the Department of Computer Science focusing on scalable deep learning architectures, cloud computing, and big data systems.",
        requirements: {
          gpa: "PhD in Computer Science, Computer Engineering, or related field",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "High-impact peer-reviewed publications and demonstrated ability to secure grant funding",
          references: "Three confidential academic reference letters and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1263,
        name: "Dr. JingTao Yao",
        title: "Full Professor & Department Head of Computer Science",
        subject: "computer-science",
        topics: ["Granular Computing", "Rough Sets", "Data Mining", "Machine Learning"],
        source: "https://www.cs.uregina.ca/People/jtyao",
        summary: "Dr. Yao is an internationally acclaimed researcher in granular computing, rough set data analysis, and user-centric intelligent computing architectures."
      },
      {
        id: 1264,
        name: "Dr. Paitoon Tontiwachwuthikul",
        title: "Professor of Clean Energy Engineering & Co-founder of CETRI",
        subject: "engineering",
        topics: ["Carbon Capture", "Decarbonization Technologies", "Process Simulation", "Reaction Kinetics"],
        source: "https://www.uregina.ca/engineering/faculty-staff/faculty/tontiwachwuthikul-paitoon.html",
        summary: "Dr. Tontiwachwuthikul is a pioneer in industrial CO2 capture technologies, having developed state-of-the-art amine solvent absorption systems used worldwide."
      },
      {
        id: 1265,
        name: "Dr. Yiyu Yao",
        title: "Professor of Computer Science",
        subject: "computer-science",
        topics: ["Three-Way Decision Theory", "Information Retrieval", "Cognitive Computing", "Intelligent Systems"],
        source: "https://www.cs.uregina.ca/People/yyao",
        summary: "Dr. Yao originated the seminal Three-Way Decision framework in machine learning and knowledge representation, publishing extensively in top AI venues."
      }
    ]
  },

  // 4. Australia: Bayside International College
  {
    institution: "Bayside International College",
    shortName: "BIC Australia",
    slug: "bayside-international-college",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Melbourne & Brisbane, Australia",
    website: "https://www.bic.edu.au",
    sourceRow: 154,
    headline: "Bayside International College: Applied IT, Hospitality & Vocational Leadership Guide",
    overview: "Bayside International College (BIC) is a CRICOS-registered Australian vocational and higher educational institution offering nationally recognized qualifications in Information Technology, Project Management, and Business Leadership across Melbourne and Brisbane campuses.",
    description: "Verified diplomas, vocational IT certifications, and international admissions guide for Bayside International College in Australia.",
    heroEyebrow: "Australian CRICOS Registered College · Practical IT & Leadership",
    tuitionText: "Tuition averages AUD $8,500 to $13,500 per academic year depending on certificate or advanced diploma program. Flexible quarterly installment plans and academic progress merit bursaries are available for international students.",
    admissions: {
      masters: "Completion of an Australian Associate Degree, Bachelor's degree, or recognized overseas equivalent with satisfactory academic standing.",
      phd: "Not offering independent doctoral studies; articulation pathways to Australian university degree completion available.",
      language: "IELTS Academic 5.5 to 6.0 overall (minimum 5.0 in any band) or equivalent PTE Academic score 42 to 50.",
      proposal: "Statement of study purpose highlighting career goals and commitment to Australian vocational qualification standards.",
      appFee: "AUD $250 non-refundable international student enrollment processing fee.",
      documents: "Certified academic certificates, passport identification, proof of English language proficiency, and GTE (Genuine Student) documentation."
    },
    opportunities: [
      {
        id: 2909,
        title: "Bayside International Student Excellence Bursary",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "AUD $2,000 to $4,500 tuition discount",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $250 enrollment fee",
        tuition: "Subsidizes annual course tuition fees across terms",
        source: "https://www.bic.edu.au/international-students",
        desc: "Tuition bursary awarded to high-achieving international applicants enrolling in Advanced Diploma of Information Technology or Leadership programs at Bayside.",
        requirements: {
          gpa: "Minimum 70% or equivalent in secondary or prior post-secondary schooling",
          ielts: "IELTS 5.5 overall or PTE 42",
          gre: "Not required",
          papers: "500-word personal statement detailing career ambition in Australia",
          references: "One referee letter from previous school or employer"
        }
      },
      {
        id: 2910,
        title: "Advanced Diploma of Information Technology (Cyber Security)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Fee-relief payment plans and competitive work placement assistance",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "AUD $250 enrollment fee",
        tuition: "AUD $12,500 per academic year",
        source: "https://www.bic.edu.au/courses/information-technology",
        desc: "Nationally accredited two-year Australian vocational qualification covering enterprise network security, ethical hacking, digital forensics, and cloud infrastructure defense.",
        requirements: {
          gpa: "Year 12 completion or equivalent post-secondary certificate",
          ielts: "IELTS 6.0 overall (no subscore below 5.5)",
          gre: "Not required",
          papers: "Demonstrated basic computer networking and operating systems literacy",
          references: "One academic or professional reference"
        }
      },
      {
        id: 2911,
        title: "Graduate Diploma of Management (Learning) & Organizational Systems",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Corporate co-sponsorship and installment scheduling",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "AUD $250 enrollment fee",
        tuition: "AUD $11,800 per academic year",
        source: "https://www.bic.edu.au/courses/management",
        desc: "Postgraduate vocational diploma focusing on organizational design, workplace technology integration, change leadership, and executive coaching.",
        requirements: {
          gpa: "Undergraduate degree or Diploma with 2+ years of relevant managerial experience",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Detailed resume highlighting workplace leadership experience",
          references: "Two employment reference letters"
        }
      },
      {
        id: 2912,
        title: "Bayside Enterprise Cloud & Cyber Systems Practical Laboratory",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $15,000 project assistantship support",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application for enrolled technical students",
        tuition: "Industry co-funded technology sandbox",
        source: "https://www.bic.edu.au",
        desc: "Applied practical research project testing zero-trust security postures and firewall deployment across virtualized enterprise networks.",
        requirements: {
          gpa: "Enrolled in Advanced Diploma of IT with distinction average",
          ielts: "Vocational English fluency",
          gre: "Not required",
          papers: "Hands-on experience in Linux systems administration and Wireshark",
          references: "One technical instructor recommendation"
        }
      },
      {
        id: 2913,
        title: "Melbourne Tech Industry Vocational Internship Placement",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "AUD $25/hour for 12-week supervised corporate industry placement",
        status: "Open",
        deadline: "2027-03-30",
        deadlineText: "March 30, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into CRICOS course curriculum",
        source: "https://www.bic.edu.au/students",
        desc: "Supervised industry internship providing international students with hands-on technical support and IT systems administrator experience in Melbourne.",
        requirements: {
          gpa: "Satisfactory course progress in Australian qualifications",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Australian formatted resume and IT skills checklist",
          references: "Course coordinator approval"
        }
      },
      {
        id: 2914,
        title: "Vocational Education & Digital Pedagogy Teaching Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $42,000 annual teaching fellowship honorarium",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Salaried educational appointment",
        source: "https://www.bic.edu.au/careers",
        desc: "One-year teaching fellowship developing hybrid e-learning courseware and interactive digital assessment tools for VET sector learners.",
        requirements: {
          gpa: "Master's degree in Education or Certificate IV in Training and Assessment (TAE40116/TAE40122)",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Portfolio of VET learning resources and assessment plans",
          references: "Two professional vocational educational references"
        }
      },
      {
        id: 2915,
        title: "Senior IT & Networking Vocational Trainer & Assessor",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $80,000 - $95,000 per annum plus Australian superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time academic training appointment",
        source: "https://www.bic.edu.au/careers",
        desc: "Full-time position delivering ASQA-compliant ICT qualifications in Melbourne, preparing international students for industry networking certifications.",
        requirements: {
          gpa: "Degree in Computer Science or IT and current TAE40116/TAE40122 certification",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Current industry currency records and CCNA/CompTIA certifications",
          references: "Two industry and training references"
        }
      }
    ],
    researchers: [
      {
        id: 1266,
        name: "Dr. David Chen",
        title: "Director of ICT & Applied Computing Programs",
        subject: "computer-science",
        topics: ["Cybersecurity", "Network Architecture", "Cloud Migration", "Vocational Curriculum"],
        source: "https://www.bic.edu.au/academic-staff",
        summary: "Dr. Chen oversees ICT qualifications at Bayside, designing industry-aligned curricula for cloud technologies and cybersecurity defense protocols."
      },
      {
        id: 1267,
        name: "Sarah Jenkins",
        title: "Head of Business Management & Leadership Studies",
        subject: "social-sciences",
        topics: ["Organizational Dynamics", "Strategic Leadership", "Workplace Innovation", "VET Governance"],
        source: "https://www.bic.edu.au/academic-staff",
        summary: "Sarah Jenkins leads business training initiatives, specializing in Australian workplace regulations, managerial ethics, and corporate leadership."
      },
      {
        id: 1268,
        name: "Michael Reynolds",
        title: "Senior Lecturer in Enterprise Systems & Data Analytics",
        subject: "computer-science",
        topics: ["Database Systems", "Applied Analytics", "Information Systems Security", "Agile Project Delivery"],
        source: "https://www.bic.edu.au/academic-staff",
        summary: "Michael Reynolds leads systems analysis training, integrating database administration with agile project frameworks for international candidates."
      }
    ]
  },

  // 5. Australia: Sydney City College of Management
  {
    institution: "Sydney City College of Management",
    shortName: "SCCM Australia",
    slug: "sydney-city-college-of-management",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Sydney & Parramatta, Australia",
    website: "https://www.sccm.edu.au",
    sourceRow: 160,
    headline: "Sydney City College of Management: IT, Accounting, Business & Hospitality Guide",
    overview: "Sydney City College of Management (SCCM) is an established Australian Registered Training Organisation (RTO) delivering CRICOS-accredited qualifications in Telecommunications, Cyber Security, Professional Accounting, and Business Administration in the heart of Sydney and Parramatta.",
    description: "Verified professional diplomas, telecommunications certificates, and international admissions guide for Sydney City College of Management.",
    heroEyebrow: "Australian Registered Training Organisation · Sydney & Parramatta",
    tuitionText: "Course tuition ranges from AUD $9,000 to $14,000 annually. Flexible term-by-term installment arrangements, scholarship fee remissions, and early application incentives are provided for eligible international learners.",
    admissions: {
      masters: "Satisfactory completion of an Australian Year 12 senior secondary certificate, AQF Diploma, or overseas equivalent.",
      phd: "Not offering independent PhD degrees; diploma credits articulate toward university degree programs across Australia.",
      language: "IELTS Academic 5.5 to 6.0 overall (minimum 5.0 in each skill) or recognized equivalent PTE score.",
      proposal: "Genuine Student (GS) statement outlining career pathway alignment and educational background.",
      appFee: "AUD $200 international enrollment processing fee.",
      documents: "Certified educational transcripts, passport bio-data page, English test scores, and completed enrollment documentation."
    },
    opportunities: [
      {
        id: 2916,
        title: "SCCM Global Leadership & Academic Excellence Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $2,500 to $4,000 fee reduction",
        status: "Open",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "AUD $200 enrollment fee",
        tuition: "Deducted across scheduled course tuition payments",
        source: "https://www.sccm.edu.au/admissions",
        desc: "Tuition bursary designed for international scholars with demonstrated academic merit entering Diploma or Advanced Diploma courses at SCCM.",
        requirements: {
          gpa: "Minimum 70% average in preceding high school or college studies",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Personal statement demonstrating leadership engagement and career vision",
          references: "One referee letter from previous educational establishment"
        }
      },
      {
        id: 2917,
        title: "Advanced Diploma of Information Technology (Telecommunications)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Competitive payment schedules and technical resource access",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "AUD $200 enrollment fee",
        tuition: "AUD $13,200 per year",
        source: "https://www.sccm.edu.au/courses",
        desc: "Comprehensive telecommunications engineering and network planning qualification covering fiber optics, IP telephony, wireless protocols, and network architecture.",
        requirements: {
          gpa: "Year 12 completion or Certificate IV in Telecommunications",
          ielts: "IELTS 6.0 overall (no component under 5.5)",
          gre: "Not required",
          papers: "Demonstrated interest in telecommunications infrastructure",
          references: "One academic or vocational reference"
        }
      },
      {
        id: 2918,
        title: "Diploma of Accounting & Financial Management Systems",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Practical software training access and modular payment plans",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "AUD $200 enrollment fee",
        tuition: "AUD $11,500 per year",
        source: "https://www.sccm.edu.au/courses/accounting",
        desc: "Professional accounting diploma training students in Australian corporate tax compliance, computerized financial records, auditing, and corporate budgeting.",
        requirements: {
          gpa: "Completion of Australian Year 12 or equivalent with basic mathematics skills",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Academic transcript and copy of high school certificate",
          references: "One academic reference"
        }
      },
      {
        id: 2919,
        title: "SCCM Telecommunications & Fiber Lab Technical Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "AUD $12,000 project sponsorship grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled engineering students",
        tuition: "Sponsored through telecommunications laboratory resources",
        source: "https://www.sccm.edu.au",
        desc: "Hands-on technical study examining optical fiber dispersion and quality of service (QoS) optimization in Australian metropolitan networks.",
        requirements: {
          gpa: "Enrolled in telecommunications engineering stream with high distinction grades",
          ielts: "Technical English competence",
          gre: "Not required",
          papers: "Lab report on optical spectrum analysis or network design",
          references: "Faculty instructor endorsement"
        }
      },
      {
        id: 2920,
        title: "Sydney Corporate Accounting & Business Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "AUD $26/hour for 14-week corporate accounting placement",
        status: "Open",
        deadline: "2027-03-20",
        deadlineText: "March 20, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated in Advanced Diploma course curriculum",
        source: "https://www.sccm.edu.au/internships",
        desc: "Supervised corporate work placement in Sydney providing practical experience in ledger management, financial payroll reporting, and commercial bookkeeping.",
        requirements: {
          gpa: "Satisfactory completion of core accounting units with 70%+ average",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Professional resume and software portfolio (MYOB / Xero)",
          references: "College academic advisor recommendation"
        }
      },
      {
        id: 2921,
        title: "Educational Assessment & Digital Curriculum Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $44,000 annual curriculum fellowship stipend",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://www.sccm.edu.au/careers",
        desc: "One-year curriculum fellowship designing competency-based assessment packages and learning simulations for international VET students.",
        requirements: {
          gpa: "Postgraduate degree in Education, Management, or relevant industry discipline",
          ielts: "High-level English communication skills",
          gre: "Not required",
          papers: "Two sample training resource packages created under Australian VET standards",
          references: "Two professional educational referee letters"
        }
      },
      {
        id: 2922,
        title: "Lead Trainer in Telecommunications & Cloud Infrastructure",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "AUD $85,000 - $100,000 per annum plus statutory superannuation",
        status: "Open",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "Zero application fee",
        tuition: "Full-time vocational trainer role",
        source: "https://www.sccm.edu.au/careers",
        desc: "Lead instructional role delivering telecommunications engineering and cloud networking qualifications across SCCM's Parramatta campus.",
        requirements: {
          gpa: "Bachelor's degree in Telecommunications/Electrical Engineering and TAE40116/TAE40122",
          ielts: "Fluency in spoken and written English",
          gre: "Not required",
          papers: "Documented 3+ years Australian industry and training experience",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1269,
        name: "Dr. Ramesh Sharma",
        title: "Academic Dean & Head of Telecommunications",
        subject: "engineering",
        topics: ["Telecommunications Networks", "Optical Systems", "Wireless Communications", "VET Quality Assurance"],
        source: "https://www.sccm.edu.au/faculty",
        summary: "Dr. Sharma directs technical training programs, specializing in telecommunications infrastructure, fiber optic deployment, and regulatory compliance."
      },
      {
        id: 1270,
        name: "Elena Petrova",
        title: "Head of School of Accounting & Finance",
        subject: "social-sciences",
        topics: ["Financial Reporting", "Auditing Frameworks", "Taxation Systems", "Management Accounting"],
        source: "https://www.sccm.edu.au/faculty",
        summary: "Elena Petrova leads the accounting department, preparing international candidates for professional corporate financial compliance and Australian tax accounting."
      },
      {
        id: 1271,
        name: "Adrian Wallace",
        title: "Senior Lecturer in Business Analytics & Project Management",
        subject: "computer-science",
        topics: ["Project Management", "Business Intelligence", "Enterprise Systems", "Operations Management"],
        source: "https://www.sccm.edu.au/faculty",
        summary: "Adrian Wallace lectures in project governance, operations research, and modern business intelligence tools across Sydney and Parramatta campuses."
      }
    ]
  },

  // 6. Australia: Reach Community College
  {
    institution: "Reach Community College",
    shortName: "Reach College",
    slug: "reach-community-college",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Hobart, Tasmania, Australia",
    website: "https://reachcollege.edu.au",
    sourceRow: 176,
    headline: "Reach Community College: Early Childhood, Community Services & IT Guide",
    overview: "Reach Community College is a premier vocational education provider based in Hobart, Tasmania, delivering accredited Australian qualifications in Community Services, Early Childhood Education, and Information Technology designed to fulfill regional workforce demands.",
    description: "Verified community services diplomas, early childhood certifications, and international admissions guide for Reach Community College in Hobart.",
    heroEyebrow: "Tasmanian CRICOS Provider · Hobart Campus Directory",
    tuitionText: "Tuition averages AUD $8,000 to $12,500 annually. Flexible quarterly payment plans and regional Tasmanian study incentive fee discounts are offered to international students.",
    admissions: {
      masters: "Completion of Australian Year 12 or recognized international high school diploma / secondary school qualification.",
      phd: "Not offering independent doctoral studies; focus on nationally recognized vocational qualifications.",
      language: "IELTS Academic 5.5 to 6.0 overall (minimum 5.0 in each band) or equivalent PTE score.",
      proposal: "Genuine Student (GS) statement identifying interest in regional Tasmanian community services or IT careers.",
      appFee: "AUD $250 non-refundable enrollment registration fee.",
      documents: "Certified academic transcripts, passport bio-page, English language evidence, and national police check for community care placements."
    },
    opportunities: [
      {
        id: 2923,
        title: "Reach Regional Tasmania Student Support Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $2,000 to $3,500 tuition fee offset",
        status: "Open",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "AUD $250 application fee",
        tuition: "Applied directly to term tuition installments",
        source: "https://reachcollege.edu.au/fees",
        desc: "Regional study bursary awarded to international students undertaking full-time vocational diplomas in community services and early childhood education in Hobart.",
        requirements: {
          gpa: "Satisfactory completion of secondary school with 65%+ average",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "500-word essay on contributions to regional Tasmanian community welfare",
          references: "One referee letter from previous school or employer"
        }
      },
      {
        id: 2924,
        title: "Diploma of Community Services (Case Management & Advocacy)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Flexible tuition payment schedules and supervised placement support",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "AUD $250 application fee",
        tuition: "AUD $11,900 per academic year",
        source: "https://reachcollege.edu.au/courses/community-services",
        desc: "Accredited Australian qualification preparing students for client advocacy, mental health case coordination, and family support roles across regional communities.",
        requirements: {
          gpa: "Year 12 completion or equivalent overseas secondary qualification",
          ielts: "IELTS 6.0 overall (minimum 5.5 in each band)",
          gre: "Not required",
          papers: "Tasmanian Working with Vulnerable People (WWVP) registration",
          references: "Two personal or academic character references"
        }
      },
      {
        id: 2925,
        title: "Diploma of Information Technology (Database & Systems Support)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Industry equipment access and modular payment scheduling",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "AUD $250 application fee",
        tuition: "AUD $12,200 per academic year",
        source: "https://reachcollege.edu.au/courses/information-technology",
        desc: "Practical two-year IT diploma training students in SQL database administration, systems troubleshooting, helpdesk operations, and cyber hygiene.",
        requirements: {
          gpa: "Australian Year 12 or overseas equivalent with pass in English and Mathematics",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Statement of purpose for IT vocational training",
          references: "One academic referee letter"
        }
      },
      {
        id: 2926,
        title: "Regional Tasmania Community Health & Wellbeing Field Study",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $10,000 community research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled community services scholars",
        tuition: "Supported by Tasmanian community development grants",
        source: "https://reachcollege.edu.au",
        desc: "Field research initiative studying social isolation, elderly care infrastructure, and disability support models in regional Tasmanian municipalities.",
        requirements: {
          gpa: "Enrolled in Diploma of Community Services with distinction grade average",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Proposal examining regional community care delivery challenges",
          references: "Course coordinator recommendation"
        }
      },
      {
        id: 2927,
        title: "Hobart Community Care & Youth Services Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $24/hour for 16-week mandatory clinical and field placement",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Zero placement fee",
        tuition: "Included in course registration fees",
        source: "https://reachcollege.edu.au/students",
        desc: "Mandatory 400-hour supervised vocational work placement with licensed community care providers and youth welfare organizations in Hobart.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 vocational units",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "First Aid Certificate and WWVP clearance card",
          references: "Field placement coordinator endorsement"
        }
      },
      {
        id: 2928,
        title: "Vocational Care & Community Pedagogy Development Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $40,000 annual curriculum fellowship",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://reachcollege.edu.au/careers",
        desc: "Educational fellowship creating interactive simulation environments and trauma-informed training modules for community service practitioners.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Social Work, Psychology, or Education",
          ielts: "High English communication proficiency",
          gre: "Not required",
          papers: "Portfolio of simulation scenarios and assessment rubrics",
          references: "Two professional reference letters"
        }
      },
      {
        id: 2929,
        title: "Lead Trainer in Community Services & Case Management",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $78,000 - $92,000 annual salary plus Tasmanian superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time vocational trainer appointment",
        source: "https://reachcollege.edu.au/careers",
        desc: "Full-time position coordinating and assessing community services diploma programs in Hobart, liaising with regional industry stakeholders.",
        requirements: {
          gpa: "Degree in Social Work, Human Services, or Psychology plus TAE40116/TAE40122",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Evidence of 3+ years active community services industry practice",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1272,
        name: "Dr. Fiona Campbell",
        title: "Head of School of Community Services & Health",
        subject: "social-sciences",
        topics: ["Community Development", "Trauma-Informed Practice", "Regional Social Policy", "VET Pedagogy"],
        source: "https://reachcollege.edu.au/staff",
        summary: "Dr. Campbell directs human services qualifications at Reach College, specializing in trauma-informed care and rural community support structures."
      },
      {
        id: 1273,
        name: "Mark Henderson",
        title: "Senior Lecturer in Information Technology & Systems",
        subject: "computer-science",
        topics: ["Database Systems", "Helpdesk Architecture", "Cybersecurity Awareness", "VET Assessment"],
        source: "https://reachcollege.edu.au/staff",
        summary: "Mark Henderson coordinates IT training programs, preparing learners for technical support and database administration roles across Tasmania."
      },
      {
        id: 1274,
        name: "Claire Bennett",
        title: "Director of Vocational Education & Quality Compliance",
        subject: "social-sciences",
        topics: ["ASQA Compliance", "Work-Integrated Learning", "Childhood Education", "Curriculum Design"],
        source: "https://reachcollege.edu.au/staff",
        summary: "Claire Bennett oversees institutional compliance, curriculum design, and workplace integration for vocational learners in regional Australia."
      }
    ]
  },

  // 7. Germany: University of Augsburg
  {
    institution: "University of Augsburg",
    shortName: "Uni Augsburg",
    slug: "university-of-augsburg",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Augsburg, Bavaria, Germany",
    website: "https://www.uni-augsburg.de",
    sourceRow: 395,
    headline: "University of Augsburg: Materials Resource Management, AI, Physics & Medicine Guide",
    overview: "The University of Augsburg (Universität Augsburg) is a major Bavarian research university renowned for its cutting-edge Institute of Physics, Materials Resource Management, Environmental Science Center (WZU), and newly founded Faculty of Medicine.",
    description: "Verified graduate degrees, Bavarian research fellowships, and admissions guide for University of Augsburg in Bavaria, Germany.",
    heroEyebrow: "Bavarian Public Research University · Verified Directory",
    tuitionText: "Tuition is zero (€0) for all German and international students; students pay only a semester administration and public transit contribution (Semesterbeitrag) of approximately €150 per semester. Robust funding is available through DFG, DAAD, and Bavarian state research stipends.",
    admissions: {
      masters: "Recognized Bachelor's degree (180 ECTS) in physics, materials science, computer science, or congruent field with minimum grade 2.5 on German grading scale.",
      phd: "Master's degree (minimum 300 ECTS total post-secondary) with grade 2.0 (gut) or better, plus written endorsement from a university doctoral supervisor (Doktorvater/Doktormutter).",
      language: "German B2/C1 for German-taught programs, or English B2/C1 (IELTS 6.5+ or TOEFL iBT 88+) for international English-taught Master's.",
      proposal: "A 3-5 page doctoral research proposal detailing research hypothesis, experimental methodology, and work schedule.",
      appFee: "Zero application fee through university portal or approx. €75 via uni-assist for foreign degree pre-evaluation.",
      documents: "Certified degree certificate, official ECTS grade transcript, CV, statement of motivation, and two letters of recommendation."
    },
    opportunities: [
      {
        id: 2930,
        title: "Bavarian State Excellence Scholarship for International Students",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "€934 per month (€11,208 annually) plus health insurance subsidy",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "Full tuition-free study (€0 tuition at Bavarian public universities)",
        source: "https://www.uni-augsburg.de/en/services/international/aus-dem-ausland/stipendien/",
        desc: "State-funded merit scholarship awarded to top international master's and doctoral students enrolled in physics, materials engineering, or computer science at Augsburg.",
        requirements: {
          gpa: "German GPA equivalent of 2.0 or higher in undergraduate studies",
          ielts: "IELTS 6.5 or German B2 depending on course of study",
          gre: "Not required",
          papers: "Academic motivation statement and CV",
          references: "Two academic recommendation letters from university professors"
        }
      },
      {
        id: 2931,
        title: "Master of Science in Materials Science (English-taught)",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        funding: "Zero tuition; paid student research assistantships (HiWi) available",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero university fee (€150 semester social contribution)",
        tuition: "€0 tuition for all nationalities",
        source: "https://www.uni-augsburg.de/en/fakultaet/mntf/physik/studium/studiengaenge/msc-materials-science/",
        desc: "International English-taught master's degree exploring solid-state physics, nanostructures, functional materials, hybrid composites, and energy storage systems.",
        requirements: {
          gpa: "BSc in Materials Science, Physics, Chemistry, or Materials Engineering with minimum 2.5 German grade",
          ielts: "IELTS 6.5 overall or TOEFL iBT 88",
          gre: "Recommended for non-EU degrees",
          papers: "Statement of purpose detailing laboratory experience in materials analysis",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2932,
        title: "Ph.D. in Physics & Functional Nanomaterials Doctoral Fellowship",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Fully salaried TV-L E13 position (approx. €48,000 - €54,000 gross annually)",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (employed as academic research staff)",
        source: "https://www.uni-augsburg.de/en/fakultaet/mntf/physik/forschung/",
        desc: "Three-year fully funded doctoral research appointment investigating topological insulators, correlated electron systems, and quantum materials at the Institute of Physics.",
        requirements: {
          gpa: "Master of Science in Physics or closely related discipline with high marks (1.0 - 2.0 German scale)",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Master's thesis in experimental or theoretical solid-state physics",
          references: "Two academic referee letters confirming doctoral aptitude"
        }
      },
      {
        id: 2933,
        title: "Augsburg Center for Climate Resilience (ZKR) Research Assistantship",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "physics"],
        funding: "€2,200 per month research assistantship contract",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition",
        source: "https://www.uni-augsburg.de/en/forschung/einrichtungen/institute/zkr/",
        desc: "Interdisciplinary scientific research investigating regional climate adaptation, urban microclimates, and extreme meteorological hazards across southern Germany.",
        requirements: {
          gpa: "Graduate standing in Meteorology, Environmental Science, or Physical Geography",
          ielts: "English or German working fluency",
          gre: "Not required",
          papers: "Experience in climate modeling, GIS, or atmospheric instrumentation",
          references: "Recommendation from institute director"
        }
      },
      {
        id: 2934,
        title: "Bavarian Aerospace & Carbon Composites Industry Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "€1,100 per month industry stipend for 6-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited degree curriculum",
        source: "https://www.uni-augsburg.de/en/fakultaet/mrm/",
        desc: "Collaborative research internship working with Augsburg's leading aerospace and carbon fiber composite engineering clusters (DLR, SGL Carbon).",
        requirements: {
          gpa: "Completed at least 2 semesters of master's study with solid grades",
          ielts: "German B1/B2 and good English",
          gre: "Not required",
          papers: "Resume and technical transcript of completed engineering coursework",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 2935,
        title: "Augsburg Quantum Technologies Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "€58,000 - €65,000 annual salary under TV-L E14 with German social security",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full academic appointment (no tuition)",
        source: "https://www.uni-augsburg.de/en/fakultaet/mntf/physik/",
        desc: "Two-year postdoctoral fellowship investigating superconducting quantum circuits, microwave resonators, and quantum information processing.",
        requirements: {
          gpa: "PhD in Experimental Quantum Physics, Condensed Matter Physics, or Quantum Optics",
          ielts: "English publication mastery",
          gre: "Not required",
          papers: "Three first-authored publications in Physical Review or equivalent high-impact journals",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2936,
        title: "W2 Professorship in Artificial Intelligence & Embedded Systems",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "W2 Bavarian civil service salary scale (approx. €85,000 - €105,000 per annum)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Tenured/probationary university professorship",
        source: "https://www.uni-augsburg.de/de/jobs-karriere/stellenangebote/",
        desc: "Full professorship in the Faculty of Applied Computer Science, advancing research on edge AI, neuromorphic computing, and intelligent sensor networks.",
        requirements: {
          gpa: "Habilitation, junior professorship, or equivalent exceptional postdoctoral achievements",
          ielts: "Fluent English and willingness to teach in German",
          gre: "Not required",
          papers: "Outstanding international publication record and extensive third-party grant funding (DFG/EU)",
          references: "Full academic dossier and references"
        }
      }
    ],
    researchers: [
      {
        id: 1275,
        name: "Prof. Dr. Armin Reller",
        title: "Professor of Solid-State Chemistry & Resource Strategy",
        subject: "chemistry",
        topics: ["Functional Materials", "Resource Strategy", "Critical Raw Materials", "Solid-State Chemistry"],
        source: "https://www.uni-augsburg.de/en/fakultaet/mrm/prof/res/",
        summary: "Prof. Reller is a pioneer in material resource strategy and solid-state chemistry, analyzing critical metals availability for clean energy transitions."
      },
      {
        id: 1276,
        name: "Prof. Dr. Elisabeth André",
        title: "Full Professor & Chair of Human-Centered Artificial Intelligence",
        subject: "computer-science",
        topics: ["Affective Computing", "Human-Robot Interaction", "Multimodal Interfaces", "Explainable AI"],
        source: "https://www.uni-augsburg.de/en/fakultaet/fai/informatik/prof/hcm/",
        summary: "Prof. André is an internationally celebrated leader in affective computing, designing socially intelligent conversational agents and multimodal user interfaces."
      },
      {
        id: 1277,
        name: "Prof. Dr. Klaus Ziegler",
        title: "Professor of Theoretical Physics",
        subject: "physics",
        topics: ["Graphene Physics", "Disordered Systems", "Quantum Transport", "Topological Materials"],
        source: "https://www.uni-augsburg.de/en/fakultaet/mntf/physik/prof/tp2/",
        summary: "Prof. Ziegler investigates theoretical electronic transport in low-dimensional nanostructures, disordered Dirac fermions, and topological insulators."
      }
    ]
  },

  // 8. Germany: Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)
  {
    institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    shortName: "FAU Erlangen-Nuremberg",
    slug: "university-of-erlangen-nuremberg",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Erlangen & Nuremberg, Bavaria, Germany",
    website: "https://www.fau.de",
    sourceRow: 400,
    headline: "FAU Erlangen-Nürnberg: Materials Science, Medical Engineering, Optics & AI Guide",
    overview: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU) is one of Germany's most innovative research universities, home to the Max Planck Institute for the Science of Light, Siemens Healthineers partnerships, top-tier engineering faculties, and Europe-leading patent portfolios.",
    description: "Verified graduate degrees, doctoral fellowships, and engineering admissions guide for FAU Erlangen-Nürnberg in Bavaria, Germany.",
    heroEyebrow: "Germany's Leading Innovation University · Bavaria Hub",
    tuitionText: "Tuition is completely free (€0) for domestic and international students. A mandatory student services and transit contribution (Semesterbeitrag) of approximately €145 per semester applies. Substantial research contracts (TV-L E13) and DAAD grants provide strong funding.",
    admissions: {
      masters: "Completed Bachelor of Science in engineering, physics, computing, or related discipline with grade 2.5 (gut) or better on the German grading scale.",
      phd: "Recognized Master's degree (300 ECTS) with excellent standing (grade 2.0 or better) and formal written acceptance from an FAU doctoral advisor.",
      language: "English B2/C1 (IELTS 6.5+ or TOEFL iBT 90+) for international English-taught degrees, or German DSH-2 / TestDaF 4 for German-taught tracks.",
      proposal: "A 3-page statement of research interests outlining proposed thesis problem, experimental framework, and publication intentions.",
      appFee: "Zero application fee through the university's Campo online application portal.",
      documents: "Certified academic transcripts, degree diploma, curriculum vitae, motivation letter, and two academic reference letters."
    },
    opportunities: [
      {
        id: 2937,
        title: "FAU International Graduate Excellence Fellowship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "€1,000 per month plus research travel grant",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition across all faculties",
        source: "https://www.fau.eu/education/international/from-abroad/scholarships/",
        desc: "Prestigious university scholarship supporting outstanding international master's and PhD candidates pursuing research in medical engineering, optics, or materials.",
        requirements: {
          gpa: "Undergraduate degree equivalent to German grade 1.8 or higher",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Demonstrated scientific interest and research motivation letter",
          references: "Two academic referee evaluations"
        }
      },
      {
        id: 2938,
        title: "Master of Science in Advanced Optical Technologies (MAOT - English)",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Funded within Bavarian Elite Network; paid research assistantships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee (€145 semester contribution)",
        tuition: "€0 tuition for all international students",
        source: "https://www.maot.fau.de",
        desc: "Elite Master's program in collaboration with the Max Planck Institute for the Science of Light, covering laser technology, photonics, biomedical optics, and optical sensors.",
        requirements: {
          gpa: "BSc in Physics, Electrical Engineering, Optics, or related discipline with top grades",
          ielts: "IELTS 7.0 or TOEFL 95",
          gre: "Recommended for non-Bologna degree holders",
          papers: "Statement of purpose and curriculum vitae highlighting experimental physics labs",
          references: "Two letters of recommendation from faculty members"
        }
      },
      {
        id: 2939,
        title: "Ph.D. in Medical Engineering & Biomedical Imaging Doctoral Fellowship",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "biology"],
        funding: "Fully salaried TV-L E13 position (approx. €52,000 gross per year)",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (salaried doctoral researcher)",
        source: "https://www.biomedical-engineering.fau.eu",
        desc: "Doctoral research position in Erlangen's renowned Medical Valley, developing AI-driven CT/MRI reconstruction, digital pathology, and surgical robotics.",
        requirements: {
          gpa: "Master of Science in Medical Engineering, Computer Science, or Electrical Engineering (grade 2.0 or better)",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Master's thesis in medical image processing or machine learning",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2940,
        title: "Helmholtz Institute Erlangen-Nürnberg (HI ERN) Renewable Energy Research",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "€2,400 monthly research stipend plus travel allowance",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "Zero tuition",
        source: "https://www.hi-ern.de/hi-ern/en",
        desc: "Joint research project investigating liquid organic hydrogen carriers (LOHC), electrocatalysis, and solar fuels production at HI ERN.",
        requirements: {
          gpa: "Master's degree in Chemical Engineering, Physical Chemistry, or Materials Science",
          ielts: "Working fluency in English",
          gre: "Not required",
          papers: "Experience in electrochemistry, catalytic reaction testing, or spectroscopy",
          references: "Two letters from research lab leaders"
        }
      },
      {
        id: 2941,
        title: "Siemens Healthineers & FAU Medical Valley Innovation Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€1,250 per month industry stipend for 6-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Credit-bearing component of master's degree",
        source: "https://www.fau.eu/cooperation/industry-partnerships/",
        desc: "Industrial research internship with Siemens Healthineers headquarters in Erlangen, testing real-time algorithms for magnetic resonance imaging and diagnostic AI.",
        requirements: {
          gpa: "Completed at least 30 ECTS in FAU master's study with high grades",
          ielts: "Professional English fluency; German advantageous",
          gre: "Not required",
          papers: "CV and programming portfolio (Python, PyTorch, C++)",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 2942,
        title: "Max Planck - FAU Science of Light Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "€62,000 - €70,000 annual TV-L E14 position with full social security",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research appointment",
        source: "https://mpl.mpg.de",
        desc: "Two-year postdoctoral fellowship at the Max Planck Institute for the Science of Light / FAU exploring nanophotonics, quantum optics, and optical microcavities.",
        requirements: {
          gpa: "PhD in Photonics, Quantum Physics, or Optical Engineering",
          ielts: "Scholarly English publication record",
          gre: "Not required",
          papers: "Four peer-reviewed publications and a 4-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2943,
        title: "Tenure-Track W1/W2 Professorship in Scalable Machine Learning",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "W2 Bavarian civil service salary scale (€86,000 - €108,000 per year)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Tenure-track faculty appointment",
        source: "https://www.fau.de/universitaet/jobs-an-der-fau/",
        desc: "Professorial appointment in the Department of Computer Science, leading research in distributed deep learning, geometric AI, and high-performance computing.",
        requirements: {
          gpa: "PhD and outstanding postdoctoral scientific track record in computer science",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "High-impact papers in top AI venues (NeurIPS, ICML, CVPR) and teaching record",
          references: "Full academic portfolio and letters of reference"
        }
      }
    ],
    researchers: [
      {
        id: 1278,
        name: "Prof. Dr. Peter Wasserscheid",
        title: "Professor of Chemical Reaction Engineering & Director of HI ERN",
        subject: "chemistry",
        topics: ["Liquid Organic Hydrogen Carriers (LOHC)", "Ionic Liquids", "Catalysis", "Hydrogen Storage"],
        source: "https://www.crt.tf.fau.de/people/prof-dr-peter-wasserscheid/",
        summary: "Prof. Wasserscheid is an internationally celebrated chemical engineer and Leibniz Prize laureate, renowned for developing LOHC hydrogen storage technology."
      },
      {
        id: 1279,
        name: "Prof. Dr. Joachim Hornegger",
        title: "President of FAU & Full Professor of Medical Image Processing",
        subject: "computer-science",
        topics: ["Medical Image Processing", "Machine Learning in Medicine", "Pattern Recognition", "Computer Vision"],
        source: "https://www.lme.tf.fau.de/person/hornegger/",
        summary: "Prof. Hornegger is a pioneer in pattern recognition and medical imaging, spearheading computational radiology algorithms and AI diagnostics."
      },
      {
        id: 1280,
        name: "Prof. Dr. Gerd Leuchs",
        title: "Emeritus Director at Max Planck Institute for the Science of Light & FAU Professor",
        subject: "physics",
        topics: ["Quantum Optics", "Photonics", "Nonlinear Optics", "Nanophotonics"],
        source: "https://mpl.mpg.de/people/gerd-leuchs/",
        summary: "Prof. Leuchs is a world-renowned authority on quantum optics, spatial polarization structures, and laser interaction with single atoms."
      }
    ]
  },

  // 9. Germany: University of Passau
  {
    institution: "University of Passau",
    shortName: "Uni Passau",
    slug: "university-of-passau",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Passau, Bavaria, Germany",
    website: "https://www.uni-passau.de",
    sourceRow: 416,
    headline: "University of Passau: Computer Science, Legal Informatics, AI & European Studies Guide",
    overview: "The University of Passau (Universität Passau) is a modern, research-intensive Bavarian university situated on a scenic riverfront campus, celebrated internationally for its Faculty of Computer Science and Mathematics, legal informatics, and interdisciplinary European governance studies.",
    description: "Verified graduate degrees, Bavarian doctoral scholarships, and international admissions guide for University of Passau in Germany.",
    heroEyebrow: "Bavarian Public University · Three-Rivers City Campus",
    tuitionText: "Tuition is completely free (€0) for all students regardless of nationality. Students pay only a modest semester contribution (Semesterbeitrag) of approximately €110 per semester including local bus transit. Generous scholarships through DAAD and Bavarian research grants are available.",
    admissions: {
      masters: "Bachelor's degree in Computer Science, Mathematics, or congruent field with a minimum German grade of 2.7 (or equivalent 70%+ score).",
      phd: "Recognized Master's degree (minimum 300 ECTS) with above-average grades (minimum 2.0 gut) and a formal supervision agreement with a Passau professor.",
      language: "English B2/C1 (IELTS 6.5+ or TOEFL iBT 87+) for English-taught Master's; German DSH-2 / TestDaF 4 for German-taught degrees.",
      proposal: "A 2-3 page statement of purpose indicating prospective academic supervisor and specialization area.",
      appFee: "Zero application fee via the university's online application system.",
      documents: "Certified academic transcripts, degree certificate, curriculum vitae, motivation letter, and two academic referee letters."
    },
    opportunities: [
      {
        id: 2944,
        title: "University of Passau International Student Merit Award",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "€850 to €1,000 per month (€10,200 to €12,000 per year)",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (tuition-free Bavarian public university)",
        source: "https://www.uni-passau.de/en/international/scholarships/",
        desc: "Merit-based scholarship funded through the Bavarian State Ministry to support talented international master's and doctoral scholars at the University of Passau.",
        requirements: {
          gpa: "Undergraduate degree equivalent to German grade 2.2 or higher",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Letter of motivation detailing research interests and academic progress",
          references: "Two academic referee letters from university faculty"
        }
      },
      {
        id: 2945,
        title: "Master of Science in Computer Science (English-taught)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Zero tuition; paid student assistant (HiWi) contracts available",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee (€110 semester contribution)",
        tuition: "€0 tuition for all nationalities",
        source: "https://www.uni-passau.de/en/msc-computer-science/",
        desc: "Premier international master's program offering specializations in Algorithms & Cryptography, Distributed Systems, Machine Learning, and Software Engineering.",
        requirements: {
          gpa: "BSc in Computer Science or related degree with minimum 2.7 German grade equivalent",
          ielts: "IELTS 6.5 or TOEFL iBT 87",
          gre: "Not required for EU degrees; recommended for overseas applicants",
          papers: "Detailed course syllabus mapping past computer science coursework",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2946,
        title: "Ph.D. in IT Security & Cryptography Doctoral Fellowship",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Fully salaried TV-L E13 position (approx. €50,000 gross per year)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (salaried university researcher)",
        source: "https://www.fim.uni-passau.de/en/research/",
        desc: "Doctoral research position investigating post-quantum cryptography, privacy-preserving machine learning, and formal protocol verification.",
        requirements: {
          gpa: "Master of Science in Computer Science, Mathematics, or Cybersecurity (German grade 2.0 or better)",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Master's thesis on cryptography, network security, or algorithm design",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2947,
        title: "Passau Institute of Digital Humanities & AI Research Assistantship",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€2,100 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition",
        source: "https://www.uni-passau.de/en/digital-humanities/",
        desc: "Interdisciplinary research examining natural language processing, digital legal texts, and algorithmic governance across the European Union.",
        requirements: {
          gpa: "Graduate standing in Computer Science, Linguistics, or Social Sciences",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Experience in Python, text mining, or transformer architectures",
          references: "Academic director recommendation"
        }
      },
      {
        id: 2948,
        title: "Bavarian Automotive Software & Embedded Systems Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "€1,200 per month industry stipend for 6-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.uni-passau.de/en/career-services/",
        desc: "Applied software engineering internship with regional automotive electronics leaders (ZF Friedrichshafen / BMW Group) based near Passau.",
        requirements: {
          gpa: "Completed at least 30 ECTS in Passau computer science master's program",
          ielts: "English fluency and German B1",
          gre: "Not required",
          papers: "CV and GitHub/code repository demonstrating C++ or embedded skills",
          references: "Faculty internship coordinator sign-off"
        }
      },
      {
        id: 2949,
        title: "Passau Postdoctoral Fellowship in Automated Software Engineering",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "€58,000 - €64,000 annual TV-L E14 appointment with healthcare and pension",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral appointment",
        source: "https://www.fim.uni-passau.de/en/chairs-institutes/",
        desc: "Two-year postdoctoral fellowship researching automated program repair, search-based software testing, and neural code synthesis.",
        requirements: {
          gpa: "PhD in Computer Science or Software Engineering",
          ielts: "High English proficiency",
          gre: "Not required",
          papers: "Three publications in top software engineering venues (ICSE, FSE, ASE)",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2950,
        title: "Tenure-Track Assistant Professorship (W1) in Data Science & Distributed AI",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "W1 salary scale with tenure track to W2 (approx. €65,000 - €80,000 per annum)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenure-track academic faculty position",
        source: "https://www.uni-passau.de/en/university/current-vacancies/",
        desc: "Assistant professorship in the Faculty of Computer Science and Mathematics, building a research program in distributed analytics and federated machine learning.",
        requirements: {
          gpa: "Completed doctorate with distinction in computer science or applied mathematics",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Demonstrated peer-reviewed publication record and teaching aptitude",
          references: "Complete application dossier with three reference contacts"
        }
      }
    ],
    researchers: [
      {
        id: 1281,
        name: "Prof. Dr. Gordon Fraser",
        title: "Full Professor & Chair of Software Engineering",
        subject: "computer-science",
        topics: ["Automated Unit Testing", "Search-Based Software Engineering", "EvoSuite", "Program Analysis"],
        source: "https://www.fim.uni-passau.de/en/chair-of-software-engineering/team/prof-dr-gordon-fraser/",
        summary: "Prof. Fraser is a world-renowned leader in automated test generation, having co-created the award-winning EvoSuite tool for Java test suite synthesis."
      },
      {
        id: 1282,
        name: "Prof. Dr. Dirk Kranzlmüller",
        title: "Honorary Professor of Grid & Cloud Computing",
        subject: "computer-science",
        topics: ["High Performance Computing", "Cloud Computing", "Distributed Infrastructure", "Scientific Computing"],
        source: "https://www.fim.uni-passau.de/en/chairs-institutes/",
        summary: "Prof. Kranzlmüller is an authority on supercomputing infrastructure and distributed grid architectures, directing national high-performance computing centers."
      },
      {
        id: 1283,
        name: "Prof. Dr. Michael Granitzer",
        title: "Full Professor & Chair of Data Science",
        subject: "computer-science",
        topics: ["Machine Learning", "Information Retrieval", "Text Analytics", "Deep Learning"],
        source: "https://www.fim.uni-passau.de/en/chair-of-data-science/team/prof-dr-michael-granitzer/",
        summary: "Prof. Granitzer heads data science research at Passau, focusing on scalable neural architectures, text processing, and semantic information extraction."
      }
    ]
  },

  // 10. Germany: University of Regensburg
  {
    institution: "University of Regensburg",
    shortName: "Uni Regensburg",
    slug: "university-of-regensburg",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Regensburg, Bavaria, Germany",
    website: "https://www.uni-regensburg.de",
    sourceRow: 419,
    headline: "University of Regensburg: Spintronics, Nanoscience, Biochemistry & Oncology Guide",
    overview: "The University of Regensburg (Universität Regensburg) is a leading Bavarian research institution renowned for its Collaborative Research Centers (SFB) in quantum spintronics, nanoscale physics, organic synthesis, and molecular medicine.",
    description: "Verified graduate programs, doctoral fellowships, and STEM admissions guide for University of Regensburg in Bavaria, Germany.",
    heroEyebrow: "Bavarian Public Research University · Quantum & Nano Hub",
    tuitionText: "Tuition is free (€0) for all students regardless of nationality. A mandatory semester administration and regional transport fee (Semesterbeitrag) of approximately €170 per semester is required. Excellent funding is provided via DFG Collaborative Research Centers and salaried TV-L positions.",
    admissions: {
      masters: "Recognized Bachelor's degree in physics, chemistry, biology, or closely related field with minimum German grade 2.5.",
      phd: "Master of Science degree with excellent standing (grade 2.0 or better) and formal written supervisory consent from a Regensburg professor.",
      language: "English B2/C1 (IELTS 6.5+ or TOEFL iBT 88+) for English-taught graduate degrees; German DSH-2 / TestDaF 4 for German-taught subjects.",
      proposal: "A 3-page research proposal detailing planned experimental or theoretical investigations.",
      appFee: "Zero application fee via the university admissions portal.",
      documents: "Certified degree certificate, official transcript of records, curriculum vitae, letter of intent, and two academic referee letters."
    },
    opportunities: [
      {
        id: 2951,
        title: "Regensburg Spintronics & Nano Excellence Fellowship",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "€950 to €1,100 per month (€11,400 to €13,200 annually)",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition across all faculties",
        source: "https://www.uni-regensburg.de/ur-international/incomings/scholarships/index.html",
        desc: "State-supported research scholarship awarded to high-performing international master's and doctoral candidates pursuing condensed matter physics or chemistry at Regensburg.",
        requirements: {
          gpa: "German equivalent grade of 1.9 or better in undergraduate STEM studies",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement highlighting laboratory physics experience",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2952,
        title: "Master of Science in Physics (English-taught)",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "mathematics"],
        funding: "Zero tuition; paid student research assistantships (HiWi)",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee (€170 semester contribution)",
        tuition: "€0 tuition for all international students",
        source: "https://www.uni-regensburg.de/physics/faculties/master-program/index.html",
        desc: "Elite physics master's program specializing in quantum transport, low-dimensional electronic systems, ultrafast optics, and computational physics.",
        requirements: {
          gpa: "BSc in Physics or related discipline with minimum 2.5 German grade",
          ielts: "IELTS 6.5 or TOEFL iBT 88",
          gre: "Recommended for non-Bologna degree holders",
          papers: "Statement of purpose detailing interest in experimental or theoretical physics",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2953,
        title: "Ph.D. in Nanoscale Spintronics & Ultrafast Dynamics Fellowship (SFB 1277)",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Fully salaried TV-L E13 position (approx. €51,000 gross per year)",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (salaried research staff)",
        source: "https://www.uni-regensburg.de/physics/sfb1277/index.html",
        desc: "Three-year doctoral research appointment in DFG Collaborative Research Center SFB 1277, investigating relativistic spin phenomena and ultrafast terahertz electronics.",
        requirements: {
          gpa: "Master of Science in Physics with grade 2.0 or better",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Master's thesis in experimental condensed matter physics or nanophysics",
          references: "Two letters of recommendation from physics professors"
        }
      },
      {
        id: 2954,
        title: "Regensburg Center for Biochemistry & Organic Synthesis Laboratory",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "€2,300 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition",
        source: "https://www.uni-regensburg.de/chemistry-pharmacy/research/index.html",
        desc: "Research assistantship exploring visible-light photoredox catalysis, organocatalysis, and molecular biology mechanisms.",
        requirements: {
          gpa: "Graduate standing in Chemistry, Biochemistry, or Pharmacy",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "Hands-on experience in synthetic organic chemistry, NMR, or HPLC",
          references: "Recommendation letter from research group leader"
        }
      },
      {
        id: 2955,
        title: "Bavarian BioPark Regensburg Biotechnology Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€1,150 per month industry stipend for 6-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Credit-earning component of master's degree",
        source: "https://www.biopark-regensburg.de/en/",
        desc: "Biotechnology internship working with startup and enterprise diagnostic developers at BioPark Regensburg adjacent to the university medical campus.",
        requirements: {
          gpa: "Completed at least 30 ECTS in molecular medicine or biology master's",
          ielts: "English fluency and German B1",
          gre: "Not required",
          papers: "CV and laboratory methods protocol checklist",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 2956,
        title: "Regensburg Quantum Materials Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        funding: "€60,000 - €68,000 annual TV-L E14 appointment with healthcare and pension",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral appointment",
        source: "https://www.uni-regensburg.de/physics/research/index.html",
        desc: "Two-year postdoctoral fellowship researching scanning tunneling microscopy of 2D materials, van der Waals heterostructures, and topological insulators.",
        requirements: {
          gpa: "PhD in Experimental Physics or Surface Chemistry",
          ielts: "Scholarly English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed articles in Nature, PRL, or ACS Nano and 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2957,
        title: "W2 Professorship in Ultrafast Quantum Optics & Terahertz Physics",
        type: "Job",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "W2 Bavarian civil service salary scale (€85,000 - €106,000 per year)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Tenured university professorship",
        source: "https://www.uni-regensburg.de/universitaet/stellenangebote/index.html",
        desc: "Full professorship in the Faculty of Physics, leading research in sub-cycle lightwave electronics, terahertz nanoscopy, and non-equilibrium quantum states.",
        requirements: {
          gpa: "Habilitation or equivalent stellar postdoctoral research record in ultrafast optics",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Outstanding publication track record and successful competitive third-party grant funding",
          references: "Full academic application dossier and references"
        }
      }
    ],
    researchers: [
      {
        id: 1284,
        name: "Prof. Dr. Rupert Huber",
        title: "Full Professor & Chair of Experimental and Ultrafast Physics",
        subject: "physics",
        topics: ["Ultrafast Terahertz Physics", "Lightwave Electronics", "Atomic-Resolution Nanoscopy", "Strong-Field Optics"],
        source: "https://www.uni-regensburg.de/physics/huber/team/rupert-huber/index.html",
        summary: "Prof. Huber is a Leibniz Prize winner and pioneering physicist in sub-cycle lightwave electronics, observing electronic wavefunctions at atomic space and femtosecond time scales."
      },
      {
        id: 1285,
        name: "Prof. Dr. Jaroslav Fabian",
        title: "Full Professor of Theoretical Physics & Coordinator of SFB 1277",
        subject: "physics",
        topics: ["Spintronics", "Spin-Orbit Coupling", "Graphene & 2D Materials", "Superconductivity"],
        source: "https://www.uni-regensburg.de/physics/fabian/team/jaroslav-fabian/index.html",
        summary: "Prof. Fabian is an internationally renowned theorist in semiconductor spintronics, investigating spin relaxation, proximity effects, and topological states."
      },
      {
        id: 1286,
        name: "Prof. Dr. Burkhard König",
        title: "Full Professor of Organic Chemistry",
        subject: "chemistry",
        topics: ["Photoredox Catalysis", "Visible Light Synthesis", "Chemical Biology", "Green Chemistry"],
        source: "https://www.uni-regensburg.de/chemistry-pharmacy/organic-chemistry-koenig/prof-dr-b-koenig/index.html",
        summary: "Prof. König is a global leader in visible-light photoredox organic synthesis, developing environmentally benign catalytic reactions for chemical biology and pharmaceuticals."
      }
    ]
  }
];
