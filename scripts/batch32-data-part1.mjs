/**
 * Batch 32 - Part 1: Cycle 39 (Universities 1 to 10 of Batch 32, Total Unis 382 to 391)
 * Opp IDs: 2678 to 2747 (70 opportunities)
 * Faculty IDs: 1167 to 1196 (30 faculty members)
 */

export const cycle39Universities = [
  // 1. Canada: Nipissing University
  {
    institution: "Nipissing University",
    shortName: "Nipissing",
    slug: "nipissing-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "North Bay, Ontario, Canada",
    website: "https://www.nipissingu.ca",
    sourceRow: 61,
    headline: "Nipissing University: Graduate Research, Faculty & Scholarship Portal",
    overview: "Nipissing University is a premier publicly funded liberal arts and science university in North Bay, Ontario, celebrated for top student satisfaction, environmental biology research, Indigenous education, and high-impact scholarship.",
    description: "Verified graduate studies, research fellowships, and admissions guide for Nipissing University in Ontario, Canada.",
    heroEyebrow: "Ontario Public University · Verified Directory",
    tuitionText: "Domestic graduate tuition averages CAD $7,400 to $9,200 annually. International student tuition is approximately CAD $19,500 to $23,000 annually. Research assistantships, Dean's entrance scholarships, and Tri-Council funding provide substantial support.",
    admissions: {
      masters: "Four-year undergraduate honors degree (B.A., B.Sc., or B.Ed.) with minimum 75% average (B+) across upper-level coursework.",
      phd: "Recognized Master's degree in Educational Sustainability or related disciplines with minimum 80% average (A-) and documented research capacity.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 each band) or TOEFL iBT 90 overall (minimum 20 in each section).",
      proposal: "Comprehensive 2-4 page research proposal outlining thesis problem, methodology, faculty alignment, and bibliography.",
      appFee: "CAD $130 non-refundable graduate application processing fee via the Ontario Universities' Application Centre (OUAC).",
      documents: "Official academic transcripts, statement of research intent, curriculum vitae, and two academic referee letters."
    },
    opportunities: [
      {
        id: 2678,
        title: "Nipissing Graduate Entrance Scholarship & Dean's Merit Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $6,000 to $12,000 per academic year",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $130 application fee",
        tuition: "Full domestic/partial international tuition offset with living stipend supplement",
        source: "https://www.nipissingu.ca/academics/school-graduate-studies/fees-and-funding",
        desc: "Merit-based entrance award automatically evaluated for high-ranking applicants entering Master of Arts, Master of Science, or Master of Education research programs at Nipissing.",
        requirements: {
          gpa: "Minimum 80% (A-) cumulative GPA in the final two years of undergraduate study",
          ielts: "IELTS 6.5 overall or TOEFL iBT 90",
          gre: "Not required",
          papers: "Not required for award adjudication; evaluated based on admissions dossier",
          references: "Two academic referee evaluations"
        }
      },
      {
        id: 2679,
        title: "Master of Science in Mathematics & Environmental Science",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "mathematics", "biology"],
        funding: "Funded thesis: CAD $18,500 annual guaranteed minimum package (TA/RA)",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $130 application fee",
        tuition: "CAD $8,100 domestic / CAD $20,400 international per year",
        source: "https://www.nipissingu.ca/academics/school-graduate-studies/master-science",
        desc: "Interdisciplinary research-based Master of Science program combining computational mathematics, aquatic toxicology, northern ecosystem modeling, and geospatial analytics.",
        requirements: {
          gpa: "BSc in Mathematics, Biology, Environmental Science, or related field with minimum B+ average (77%)",
          ielts: "IELTS 6.5 (no component under 6.0) or TOEFL 90",
          gre: "Not required",
          papers: "Two-page research statement highlighting prospective faculty supervisor",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 2680,
        title: "Ph.D. in Educational Sustainability Doctoral Research Fellowship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $24,000 per year for four years plus teaching assistantship",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $130 application fee",
        tuition: "CAD $7,900 domestic / CAD $19,800 international per year",
        source: "https://www.nipissingu.ca/academics/school-graduate-studies/phd-educational-sustainability",
        desc: "Interdisciplinary doctoral program exploring social, environmental, and institutional sustainability within indigenous pedagogy, ecological systems, and educational transformation.",
        requirements: {
          gpa: "Master's degree in Education or related social sciences with minimum 80% average",
          ielts: "IELTS 7.0 overall (minimum 6.5 writing) or TOEFL 94",
          gre: "Not required",
          papers: "Four-page doctoral dissertation research proposal and writing sample",
          references: "Three academic reference letters verifying research aptitude"
        }
      },
      {
        id: 2681,
        title: "Northern Aquatic Ecology & Freshwater Remediation Project",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Fully funded research assistantship (CAD $22,000 annual stipend)",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "No application fee for post-admission appointment",
        tuition: "Covered by faculty grant bursary",
        source: "https://www.nipissingu.ca/research",
        desc: "Field-intensive research investigation tracking watershed contaminants, toxic algal blooms, and biological remediation across Lake Nipissing and Canadian Shield catchments.",
        requirements: {
          gpa: "B.Sc. or equivalent in Aquatic Biology, Chemistry, or Environmental Sciences",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Undergraduate honours thesis or published co-authored report",
          references: "Two references from lab directors or academic supervisors"
        }
      },
      {
        id: 2682,
        title: "Northern Ontario Rural Health & Indigenous Wellness Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "CAD $21/hour for 16-week clinical/community placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into accredited degree program enrollment",
        source: "https://www.nipissingu.ca/academics/faculty-applied-and-professional-studies",
        desc: "Professional community-engaged clinical and field practicum working with regional public health agencies, hospital networks, and First Nations communities across Northern Ontario.",
        requirements: {
          gpa: "Enrollment in Nipissing Master of Social Work or Nursing with minimum 75% GPA",
          ielts: "IELTS 7.0 overall for clinical communication",
          gre: "Not required",
          papers: "Vulnerable Sector Police Record Check and Immunization Record",
          references: "Two professional/clinical recommendations"
        }
      },
      {
        id: 2683,
        title: "Nipissing Centre for Interdisciplinary Collaboration Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "CAD $58,000 annual salary plus provincial healthcare benefits",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Zero tuition (salaried research employee)",
        source: "https://www.nipissingu.ca/research/research-services",
        desc: "Two-year postdoctoral fellowship targeting digital humanities, data ethics, and Indigenous knowledge systems in rural Canadian education and governance.",
        requirements: {
          gpa: "Completed PhD within the past 4 years in Social Sciences, Humanities, or Informatics",
          ielts: "Native or fluent English proficiency",
          gre: "Not required",
          papers: "Three peer-reviewed journal articles and a 5-page research project plan",
          references: "Three confidential letters of reference"
        }
      },
      {
        id: 2684,
        title: "Tenure-Track Assistant Professor in Computer Science & Data Analytics",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "CAD $92,000 - $112,000 per annum with comprehensive pension and benefits",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full faculty position",
        source: "https://www.nipissingu.ca/about/human-resources",
        desc: "Full-time probationary tenure-track academic appointment in the Department of Computer Science and Mathematics, with research specialization in machine learning and data science.",
        requirements: {
          gpa: "PhD in Computer Science, Software Engineering, or related discipline",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Demonstrated record of peer-reviewed publications and competitive grant funding",
          references: "Three academic referee letters and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1167,
        name: "Dr. April James",
        title: "Professor & Canada Research Chair in Watershed Hydrology",
        subject: "environment",
        topics: ["Catchment Hydrology", "Isotope Hydrology", "Water Quality Modeling", "Canadian Shield Watersheds"],
        source: "https://www.nipissingu.ca/users/april-james",
        summary: "Dr. James leads cutting-edge research on physical hydrological processes, snowmelt dynamics, and isotope tracers in forested watersheds across the boreal zone."
      },
      {
        id: 1168,
        name: "Dr. Haibin Zhu",
        title: "Full Professor & Director of Collaborative Systems Laboratory",
        subject: "computer-science",
        topics: ["Role-Based Collaboration", "Distributed Systems", "Cloud Computing", "Groupware Architectures"],
        source: "https://www.nipissingu.ca/users/haibin-zhu",
        summary: "Dr. Zhu is an internationally recognized pioneer in E-CARGO role-based collaboration models, multi-agent coordination, and intelligent adaptive workflows."
      },
      {
        id: 1169,
        name: "Dr. Dan Walters",
        title: "Associate Professor of Geography & Environmental Studies",
        subject: "social-sciences",
        topics: ["Water Governance", "Environmental Policy", "Resource Management", "Geographic Information Systems"],
        source: "https://www.nipissingu.ca/users/dan-walters",
        summary: "Dr. Walters investigates regional environmental policy, community-based water stewardship, and geospatial mapping for sustainable natural resources management."
      }
    ]
  },

  // 2. Australia: Australian Maritime College (AMC)
  {
    institution: "Australian Maritime College",
    shortName: "AMC Australia",
    slug: "australian-maritime-college",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Launceston, Tasmania, Australia",
    website: "https://www.amc.edu.au",
    sourceRow: 200,
    headline: "Australian Maritime College: Marine Engineering, Autonomous Vessels & Naval Architecture Guide",
    overview: "The Australian Maritime College (AMC) at the University of Tasmania is Australia's national institute for maritime education, research, and training, globally recognized for world-class hydrodynamic testing facilities, autonomous underwater robotics, and maritime logistics.",
    description: "Verified academic programs, naval engineering research, and admissions guide for Australian Maritime College in Tasmania.",
    heroEyebrow: "National Maritime Institute · Hydrodynamics Hub",
    tuitionText: "Domestic undergraduate and postgraduate coursework places are Commonwealth Supported (CSP) or AUD $9,000 annually. International student fees range from AUD $34,000 to $42,000 per year. Fully funded Australian Government Research Training Program (RTP) scholarships provide AUD $33,500 tax-free per year.",
    admissions: {
      masters: "Recognized Bachelor degree in Engineering, Naval Architecture, Marine Science, or Ocean Technology with minimum 65% (Credit) average.",
      phd: "Honours Class I or IIA degree or Master's by Research with proven experimental or computational marine hydrodynamic publication track record.",
      language: "IELTS Academic overall band 6.5 (no individual band score below 6.0) or PTE Academic 58.",
      proposal: "Detailed 1,500-word doctoral research project proposal aligning with AMC hydrodynamic flume, cavitation tunnel, or maritime autonomy labs.",
      appFee: "Zero application fee for direct international and domestic online applications.",
      documents: "Certified academic transcripts, degree certificates, detailed curriculum vitae, and two academic referee reports."
    },
    opportunities: [
      {
        id: 2685,
        title: "Australian Government Research Training Program (RTP) Maritime Fellowship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "AUD $33,500 per annum tax-free stipend plus full tuition waiver and relocation allowance",
        status: "Open",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "Zero application fee",
        tuition: "100% covered by Australian Government RTP scholarship",
        source: "https://www.amc.edu.au/study/scholarships",
        desc: "Prestigious national postgraduate award funding Master by Research and PhD candidates investigating marine hydrodynamics, naval architecture, and coastal engineering.",
        requirements: {
          gpa: "First Class Honours (H1) or equivalent in Engineering, Physics, or Applied Mathematics",
          ielts: "IELTS 6.5 (minimum 6.0 each skill)",
          gre: "Not required",
          papers: "Honours thesis or peer-reviewed publication preferred",
          references: "Two academic referee endorsements"
        }
      },
      {
        id: 2686,
        title: "Master of Maritime Engineering (Naval Architecture & Marine Engineering)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics", "computer-science"],
        funding: "Commonwealth Supported Places (CSP) for domestic students; international merit bursaries available",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "AUD $9,500 domestic (CSP) / AUD $39,500 international per annum",
        source: "https://www.amc.edu.au/study/postgraduate",
        desc: "Engineers Australia-accredited Master of Maritime Engineering offering specialized streams in Naval Engineering, Ocean Engineering, and Coastal Environmental Technology.",
        requirements: {
          gpa: "Four-year Bachelor of Engineering (Honours) degree in mechanical, civil, or marine engineering",
          ielts: "IELTS 6.5 overall (no band less than 6.0)",
          gre: "Not required",
          papers: "Statement of purpose and professional CV",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 2687,
        title: "Ph.D. in Autonomous Underwater Vehicles & Subsea Robotics",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Fully funded AUD $35,000 annual living stipend plus operating consumables grant",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero application fee",
        tuition: "Full international research tuition fee waiver",
        source: "https://www.amc.edu.au/research",
        desc: "Doctoral research position utilizing AMC's deep-water towing tank and autonomous marine test bed to develop navigation and SLAM algorithms for AUVs in extreme ocean environments.",
        requirements: {
          gpa: "Undergraduate degree with First Class Honours or MSc by research with minimum 80% average",
          ielts: "IELTS 6.5 (no band below 6.0) or PTE 58",
          gre: "Not required",
          papers: "Research proposal (approx. 2,000 words) and Master thesis copy",
          references: "Two academic referee reports"
        }
      },
      {
        id: 2688,
        title: "Experimental Hydrodynamics & Cavitation Tunnel Wave Energy Project",
        type: "Research",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "AUD $32,000 annual research scholarship plus industry top-up",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero application fee",
        tuition: "Tuition waiver included",
        source: "https://www.amc.edu.au/research/hydrodynamics",
        desc: "Experimental research study conducting scale model tests of offshore renewable wave energy converters inside the AMC Cavitation Tunnel and Model Test Basin.",
        requirements: {
          gpa: "Bachelor with Honours in Naval Architecture, Mechanical Engineering, or Fluid Dynamics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Laboratory report sample demonstrating fluid dynamics instrumentation familiarity",
          references: "Two academic referees"
        }
      },
      {
        id: 2689,
        title: "Offshore Renewable Energy & Maritime Operations Industry Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "AUD $1,100 per week during 12-week industrial placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Included within accredited coursework unit enrollment",
        source: "https://www.amc.edu.au/study/industry-experience",
        desc: "Structured twelve-week engineering internship embedded with major offshore wind developers, naval shipyards, and port authorities across Australasia.",
        requirements: {
          gpa: "Completion of at least 2 years in AMC maritime engineering programs with Credit average",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Resume and Maritime Security Identification Card (MSIC) clearance",
          references: "One academic tutor letter"
        }
      },
      {
        id: 2690,
        title: "AMC Maritime Decarbonization & Clean Hydrogen Marine Propulsion Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        funding: "AUD $88,000 - $98,000 per annum salary plus 17% superannuation",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Postdoctoral research staff position",
        source: "https://www.amc.edu.au/research/postdoctoral-fellowships",
        desc: "Three-year postdoctoral research fellowship focusing on ammonia/hydrogen fuel cell marine powertrains and hull friction reduction technologies.",
        requirements: {
          gpa: "PhD in Marine Engineering, Chemical Engineering, or Energy Systems awarded within 5 years",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Minimum 4 high-impact journal articles in clean maritime energy or CFD",
          references: "Three academic referee reports"
        }
      },
      {
        id: 2691,
        title: "Lecturer / Senior Lecturer in Naval Architecture & Marine Simulation",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "AUD $108,000 - $132,000 base salary plus 17% superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Full-time continuing academic faculty appointment",
        source: "https://www.utas.edu.au/jobs",
        desc: "Tenured academic role leading curriculum development and research operations in full-mission bridge simulation, vessel hydrostatics, and computational fluid mechanics.",
        requirements: {
          gpa: "Doctorate (PhD) in Naval Architecture, Marine Technology, or related discipline",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Track record of international peer-reviewed publications and competitive grant awards",
          references: "Three professional/academic referees"
        }
      }
    ],
    researchers: [
      {
        id: 1170,
        name: "Prof. Dr. Zhi Leong",
        title: "Professor of Marine Engineering & Maritime Systems",
        subject: "engineering",
        topics: ["Underwater Robotics", "Hydrodynamic Resistance", "Autonomous Marine Craft", "Vessel Performance"],
        source: "https://www.amc.edu.au/our-people/profiles/zhi-leong",
        summary: "Prof. Leong specializes in subsea robotics, drag reduction technology, and unmanned surface vehicles operating in turbulent coastal regimes."
      },
      {
        id: 1171,
        name: "Dr. Roberto Ojeda",
        title: "Associate Professor in Naval Architecture & Computational Mechanics",
        subject: "engineering",
        topics: ["Finite Element Analysis", "Ship Structures", "Composite Marine Materials", "Dynamic Impact Loads"],
        source: "https://www.amc.edu.au/our-people/profiles/roberto-ojeda",
        summary: "Dr. Ojeda leads computational mechanics investigations evaluating structural integrity, fatigue lifecycle, and composite materials in high-speed craft."
      },
      {
        id: 1172,
        name: "Dr. Irene Penesis",
        title: "Professor of Ocean Wave Energy & Fluid Mechanics",
        subject: "physics",
        topics: ["Tidal Energy", "Wave Converters", "Experimental Fluid Dynamics", "Offshore Renewable Power"],
        source: "https://www.amc.edu.au/our-people/profiles/irene-penesis",
        summary: "Prof. Penesis is a globally recognized authority on marine renewable energy systems, tidal turbine performance, and experimental fluid mechanics."
      }
    ]
  },

  // 3. Germany: Hamburg University of Technology (TUHH)
  {
    institution: "Hamburg University of Technology",
    shortName: "TUHH Hamburg",
    slug: "hamburg-university-of-technology",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Hamburg, Germany",
    website: "https://www.tuhh.de",
    sourceRow: 270,
    headline: "Hamburg University of Technology: Engineering, Aviation & Cyber-Physical Systems Guide",
    overview: "Hamburg University of Technology (TUHH - Technische Universität Hamburg) is a premier German public research university founded in 1978, renowned for aerospace engineering with Airbus, sustainable maritime technology, green energy systems, and microelectronics.",
    description: "Verified graduate degree programs, doctoral positions, and admissions guide for Hamburg University of Technology in Germany.",
    heroEyebrow: "TU9 Partner · Premier Technical University",
    tuitionText: "Zero tuition fees for domestic and international students. All students pay only the standard semester contribution (Semesterbeitrag) of approximately €340 per semester, covering administrative costs and the regional public transport semester ticket.",
    admissions: {
      masters: "Accredited Bachelor of Science in Engineering or Computer Science with minimum 180 ECTS credits and strong mathematical/theoretical fundamentals.",
      phd: "Master's degree (M.Sc., Diplom) with above-average grade (mindestens 'gut') in engineering, computer science, or natural sciences.",
      language: "English taught programs: TOEFL iBT 90 or IELTS 6.5. German taught programs: TestDaF 4x4 or DSH-2.",
      proposal: "Doctoral candidates submit a research statement aligned with an institute research chair; Masters candidates submit comprehensive motivation letter.",
      appFee: "Zero application fee via the TUHH self-service applicant portal.",
      documents: "Bachelor's diploma, transcript of records with credit points, module handbook / syllabus, CV in Europass format, and language certificate."
    },
    opportunities: [
      {
        id: 2692,
        title: "TUHH Excellence Scholarship for International Master's Students",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€10,200 per year (€850 monthly stipend for 12 months)",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Zero tuition (semester fee of €340 applies)",
        source: "https://www.tuhh.de/tuhh/en/education/international-students/scholarships",
        desc: "Merit-based financial award conferred by the DAAD and TUHH Foundation for outstanding international Master's degree students enrolled in engineering disciplines.",
        requirements: {
          gpa: "German GPA equivalent of 1.5 or better in undergraduate engineering degree",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Recommended for non-EU applicants",
          papers: "Motivation statement demonstrating engineering excellence and societal commitment",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2693,
        title: "Master of Science in Information and Communication Systems (ICS)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "State funded (Tuition-free); Student assistantships (HiWi) available at €14.50/hour",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "Zero tuition (€0); Semester administrative fee ~€340",
        source: "https://www.tuhh.de/tuhh/en/education/degree-programs/international-study-programs/information-and-communication-systems",
        desc: "Premier English-taught M.Sc. degree covering advanced digital communications, embedded machine learning, secure IoT architectures, and network protocols.",
        requirements: {
          gpa: "BSc in Electrical Engineering, Computer Science, or Information Technology with top 20% ranking",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 90",
          gre: "General GRE recommended (Quantitative 160+)",
          papers: "Detailed module syllabus comparing bachelor courses to TUHH prerequisites",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2694,
        title: "Salaried Doctoral Researcher (TV-L E13) in Hydrogen Aviation & Lightweight Materials",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        funding: "Full TV-L E13 research salary (€52,000 - €58,000 gross per year with pension and health insurance)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Zero tuition for doctoral researchers",
        source: "https://www.tuhh.de/tuhh/en/research/career/doctoral-candidates",
        desc: "Funded three-year doctoral position at the Institute of Aircraft Production Technology investigating cryotank composites and hydrogen combustion for zero-emission commercial flight.",
        requirements: {
          gpa: "Master of Science in Mechanical, Aerospace, or Materials Engineering with grade 1.8 or better",
          ielts: "Fluent technical English or German",
          gre: "Not required",
          papers: "Master's thesis summary and publication samples in fracture mechanics or composites",
          references: "Two references from previous academic advisors"
        }
      },
      {
        id: 2695,
        title: "Smart Port Logistics & Autonomous Marine Navigation Research Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€2,200 monthly research stipend plus conference travel allowance",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Covered by federal grant",
        source: "https://www.tuhh.de/mls/institute",
        desc: "Collaborative research project alongside the Hamburg Port Authority developing AI-driven predictive dispatching and autonomous tugboat collision avoidance algorithms on the Elbe River.",
        requirements: {
          gpa: "Excellent M.Sc. degree in Systems Engineering, Robotics, or Operations Research",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Demonstrated programming skills in Python/C++ and ROS",
          references: "Two academic references"
        }
      },
      {
        id: 2696,
        title: "Airbus & TUHH Aircraft Cabin Systems Curricular Engineering Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€1,850 per month for 6-month industrial placement",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Zero fee",
        tuition: "Tuition-free curricular placement",
        source: "https://www.tuhh.de/tuhh/en/education/career-services",
        desc: "Six-month full-time industrial engineering placement situated at the ZAL Center of Applied Aeronautical Research in Hamburg-Finkenwerder.",
        requirements: {
          gpa: "Enrolled in TUHH Master's in Aircraft Systems, Mechatronics, or Electrical Engineering",
          ielts: "English B2/C1; German B1 helpful but not required",
          gre: "Not required",
          papers: "Updated CV and academic enrollment confirmation",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2697,
        title: "Körber Green Energy Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "chemistry", "engineering"],
        funding: "€64,000 per year full university salary plus research consumable budget",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried employee position",
        source: "https://www.tuhh.de/tuhh/en/research/career/postdocs",
        desc: "Two-year postdoctoral fellowship at the Institute of Environmental Technology and Energy Economics developing solid-state battery electrolytes and thermal energy storage.",
        requirements: {
          gpa: "PhD in Chemical Engineering, Electrochemistry, or Sustainable Energy within past 3 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "At least four first-author journal publications in international journals",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2698,
        title: "W2 / W3 Professorship in Machine Learning & Cyber-Physical Systems",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "W2/W3 German civil servant salary scale (€88,000 - €105,000 gross annually)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Full civil service tenured university professorship",
        source: "https://www.tuhh.de/tuhh/en/tuhh/vacancies/professorships",
        desc: "Tenured full professorship to lead the Institute of Cyber-Physical Systems, teaching machine learning algorithms and directing funded federal research initiatives.",
        requirements: {
          gpa: "Habilitation, Junior professorship, or equivalent international research track record",
          ielts: "Excellent English and German instructional capability",
          gre: "Not required",
          papers: "Comprehensive publication list, grant acquisition record, and teaching portfolio",
          references: "Three international peer references"
        }
      }
    ],
    researchers: [
      {
        id: 1173,
        name: "Prof. Dr.-Ing. Andreas Timm-Giel",
        title: "President & Head of Institute of Communication Networks",
        subject: "computer-science",
        topics: ["Mobile Communications", "5G/6G Networks", "IoT Protocols", "Vehicular Networking"],
        source: "https://www.tuhh.de/tuhh/en/president/prof-andreas-timm-giel",
        summary: "Prof. Timm-Giel conducts foundational research in resilient wireless sensor networks, vehicular ad-hoc networks (VANETs), and energy-aware protocol design."
      },
      {
        id: 1174,
        name: "Prof. Dr.-Ing. Irina Smirnova",
        title: "Vice President & Head of Institute of Thermal Separation Processes",
        subject: "chemistry",
        topics: ["Aerogels", "Supercritical Fluids", "Thermodynamics", "Bioseparations"],
        source: "https://www.tuhh.de/t/institut/mitarbeiter/prof-dr-irina-smirnova",
        summary: "Prof. Smirnova is an international leader in aerogel synthesis, supercritical carbon dioxide extraction, and targeted pharmaceutical formulation."
      },
      {
        id: 1175,
        name: "Prof. Dr.-Ing. Otto von Estorff",
        title: "Head of Institute of Modelling and Computation",
        subject: "engineering",
        topics: ["Acoustics", "Numerical Mechanics", "Finite Element Modeling", "Vibroacoustics"],
        source: "https://www.tuhh.de/ims/team/prof-dr-ing-otto-von-estorff",
        summary: "Prof. von Estorff directs research in boundary element methods, vibroacoustics of aeronautical structures, and advanced numerical simulations."
      }
    ]
  },

  // 4. Italy: Motorvehicle University of Emilia-Romagna (MUNER)
  {
    institution: "Motorvehicle University of Emilia-Romagna",
    shortName: "MUNER",
    slug: "motorvehicle-university-of-emilia-romagna",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Modena & Bologna, Emilia-Romagna, Italy",
    website: "https://motorvehicleuniversity.com",
    sourceRow: 486,
    headline: "Motorvehicle University of Emilia-Romagna: Supercar Engineering & Automotive Innovation",
    overview: "The Motorvehicle University of Emilia-Romagna (MUNER) is an elite Italian educational hub created by the region of Emilia-Romagna in collaboration with legendary automotive icons—Ferrari, Lamborghini, Maserati, Ducati, Dallara, Pagani, AlphaTauri—and top regional universities (Bologna, Ferrara, Modena and Reggio Emilia, Parma).",
    description: "Verified Master of Science programs, hypercar engineering fellowships, and admissions guide for Motorvehicle University of Emilia-Romagna in Italy.",
    heroEyebrow: "Motor Valley Hub · Elite Supercar Engineering",
    tuitionText: "Tuition fees are calculated according to the Italian ISEE economic evaluation index, ranging from €156 (full fee exemption for lower incomes) up to approximately €2,800 annually. International students benefit from ER.GO regional scholarships covering accommodation and living stipends.",
    admissions: {
      masters: "Accredited Bachelor of Science (180 ECTS) in Mechanical, Electronic, Aerospace, Automotive, or Computer Engineering with strong GPA and technical portfolio.",
      phd: "Collaborative doctoral positions administered through partner universities (Unibo, Unimore, UniFe, UniParma) in automotive powertrain and autonomous driving systems.",
      language: "English proficiency at minimum B2 level (IELTS 6.0, TOEFL iBT 78, or Cambridge First Certificate).",
      proposal: "Curriculum vitae, detailed syllabus analysis of previous math and mechanical coursework, and letter of motivation detailing automotive passion.",
      appFee: "€50 administrative application fee via the partner university application portal.",
      documents: "Bachelor's diploma, transcript of exams, syllabus of all completed engineering courses, passport, and statement of purpose."
    },
    opportunities: [
      {
        id: 2699,
        title: "ER.GO Regional Automotive Excellence Scholarship & Living Stipend",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Up to €7,200 per year plus free campus accommodation and canteen services",
        status: "Open",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "Zero fee",
        tuition: "Full tuition waiver based on ISEE economic indicator",
        source: "https://motorvehicleuniversity.com/admissions",
        desc: "Regional government scholarship supporting talented international and Italian engineering students enrolled in MUNER high-performance automotive degree curricula.",
        requirements: {
          gpa: "Undergraduate degree in Mechanical or Automotive Engineering with minimum 75% equivalent",
          ielts: "English B2 level or higher",
          gre: "Not required",
          papers: "Family economic documentation (ISEE Parificato) for financial adjudication",
          references: "One academic reference letter"
        }
      },
      {
        id: 2700,
        title: "Master of Science in High Performance Car Design (M.Sc.)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Merit-based fee exemptions and corporate sponsorship from Ferrari & Ducati",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€50 application evaluation fee",
        tuition: "€156 to €2,800 per year depending on family income",
        source: "https://motorvehicleuniversity.com/courses/high-performance-car-design",
        desc: "Specialized two-year international Master of Science taught entirely in English focusing on vehicle dynamics, chassis design, lightweight carbon composite structures, and aerodynamics.",
        requirements: {
          gpa: "Bachelor in Mechanical, Aerospace, or Automotive Engineering with top quartile marks",
          ielts: "IELTS 6.0 or TOEFL 78",
          gre: "Not required",
          papers: "Technical automotive project portfolio or Formula Student competition experience",
          references: "Two academic or industry engineering recommendations"
        }
      },
      {
        id: 2701,
        title: "Ph.D. in Automotive for Intelligent Mobility & Powertrain Electrification",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€21,000 net annual fellowship plus 50% increase during overseas research periods",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€30 application fee",
        tuition: "Zero tuition for appointed PhD candidates",
        source: "https://motorvehicleuniversity.com/research-phd",
        desc: "Doctoral research program supported by Lamborghini and Dallara investigating electric powertrain thermal management, battery BMS, and torque-vectoring architectures.",
        requirements: {
          gpa: "Master of Science in Electrical, Electronic, or Mechanical Engineering with grade 105/110 or higher",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Research project proposal on automotive electrification and thesis copy",
          references: "Two confidential reference letters"
        }
      },
      {
        id: 2702,
        title: "Autonomous Racing & High-Speed ADAS Sensor Fusion Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "€1,800 monthly research grant plus test track access at Autodromo di Modena",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Covered by industrial partner consortium",
        source: "https://motorvehicleuniversity.com/research",
        desc: "Experimental research project deploying LiDAR, computer vision, and neural motion planning controllers onto scale and full-size prototype racecars.",
        requirements: {
          gpa: "M.Sc. in Computer Science, Robotics, or Control Systems Engineering",
          ielts: "B2 English proficiency",
          gre: "Not required",
          papers: "GitHub repository or code samples illustrating ROS2, C++, or deep learning models",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2703,
        title: "Ferrari / Ducati / Lamborghini Track & Laboratory Curricular Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        funding: "€1,200 monthly corporate stipend plus trackside testing access",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero fee",
        tuition: "Included in MUNER curricular master's credits",
        source: "https://motorvehicleuniversity.com/careers-internships",
        desc: "Six-month intensive thesis internship integrated into the engineering departments and racing divisions of partner Motor Valley automakers.",
        requirements: {
          gpa: "Enrolled in 2nd year of MUNER M.Sc. with minimum 27/30 exam average",
          ielts: "Fluent English; Italian A2/B1 an advantage for factory communication",
          gre: "Not required",
          papers: "Technical CV and portfolio of vehicle engineering work",
          references: "Faculty course director sign-off"
        }
      },
      {
        id: 2704,
        title: "Motor Valley Sustainable Motorsport Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment", "physics"],
        funding: "€42,000 per annum research fellowship plus industrial project budget",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral position",
        source: "https://motorvehicleuniversity.com/postdoc-openings",
        desc: "Two-year postdoctoral research appointment examining hydrogen internal combustion, synthetic e-fuels, and circular carbon fibers for endurance racing.",
        requirements: {
          gpa: "PhD in Mechanical Engineering, Chemical Engineering, or Aerodynamics",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Minimum 3 journal publications in automotive propulsion or fluid dynamics",
          references: "Three academic/industrial letters of recommendation"
        }
      },
      {
        id: 2705,
        title: "Associate Professor in Autonomous Vehicle Dynamics & Mechatronics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€58,000 - €72,000 annual salary under Italian Ministry of Universities (MUR) scale",
        status: "Open",
        deadline: "2026-12-31",
        deadlineText: "December 31, 2026",
        fee: "Zero fee",
        tuition: "Tenured academic appointment",
        source: "https://motorvehicleuniversity.com/faculty-recruitment",
        desc: "Tenured associate professorship based in Modena/Bologna teaching high-performance vehicle chassis control, active suspension design, and electronic stability.",
        requirements: {
          gpa: "Italian National Scientific Qualification (ASN) as Associate Professor or international tenure track equivalent",
          ielts: "Fluent English instruction",
          gre: "Not required",
          papers: "Significant record of international automotive patents and Q1 journal papers",
          references: "Three international references"
        }
      }
    ],
    researchers: [
      {
        id: 1176,
        name: "Prof. Dr. Elena Bassoli",
        title: "Director of MUNER & Professor of Manufacturing Technologies",
        subject: "engineering",
        topics: ["Additive Manufacturing", "Metal 3D Printing", "Automotive Metallurgy", "Supercar Components"],
        source: "https://motorvehicleuniversity.com/faculty/elena-bassoli",
        summary: "Prof. Bassoli oversees MUNER academic governance and leads breakthrough research in laser powder bed fusion and structural lightweight alloys for racing engines."
      },
      {
        id: 1177,
        name: "Prof. Dr. Nicolò Cavina",
        title: "Professor of Powertrain Control & Hybrid Propulsion",
        subject: "engineering",
        topics: ["Engine Control Systems", "Hybrid Powertrains", "Combustion Diagnostics", "Battery Management"],
        source: "https://motorvehicleuniversity.com/faculty/nicolo-cavina",
        summary: "Prof. Cavina works closely with Ferrari and Ducati developing real-time electronic engine management, hybrid power distribution, and cylinder pressure sensing."
      },
      {
        id: 1178,
        name: "Prof. Dr. Marko Bertogna",
        title: "Director of Real-Time Systems Lab & Autonomous Driving Coordinator",
        subject: "computer-science",
        topics: ["Autonomous Driving", "Real-Time Embedded Systems", "Edge AI", "Computer Vision for Racing"],
        source: "https://motorvehicleuniversity.com/faculty/marko-bertogna",
        summary: "Prof. Bertogna directs the Indy Autonomous Challenge team, developing high-speed autonomous control algorithms capable of operating racecars above 250 km/h."
      }
    ]
  },

  // 5. United States: University of Central Florida (UCF)
  {
    institution: "University of Central Florida",
    shortName: "UCF",
    slug: "university-of-central-florida",
    countryId: "usa",
    countryLabel: "United States",
    location: "Orlando, Florida, United States",
    website: "https://www.ucf.edu",
    sourceRow: 1066,
    headline: "University of Central Florida: Optics, Space Science & Computer Science Portal",
    overview: "The University of Central Florida (UCF) in Orlando is an elite public research university (R1 Carnegie Classification) and the nation's premier talent pipeline for aerospace (NASA Kennedy Space Center), optics and photonics (CREOL), modeling and simulation, and computer science.",
    description: "Verified graduate admissions, fellowships, and research degrees guide for University of Central Florida in Orlando, Florida.",
    heroEyebrow: "R1 Research Flagship · Space & Optics Powerhouse",
    tuitionText: "In-state graduate tuition is approximately $369 per credit hour ($8,800/year). Out-of-state and international graduate tuition is approximately $1,194 per credit hour ($28,650/year). Doctoral students in STEM disciplines typically receive full tuition waivers and annual graduate assistantship stipends ($22,000–$32,000).",
    admissions: {
      masters: "Earned Bachelor's degree from a regionally accredited institution with minimum 3.0 cumulative GPA on a 4.0 scale.",
      phd: "Earned Master's or outstanding Bachelor's degree with minimum 3.25 GPA and documented research capability in scientific or engineering domains.",
      language: "TOEFL iBT 89 overall (with minimum speaking score of 20) or IELTS Academic 6.5 overall.",
      proposal: "Doctoral statement of research objectives (500–1,000 words) specifying alignment with CREOL, Space Sciences, or CECS research labs.",
      appFee: "$31 non-refundable graduate application fee.",
      documents: "Official academic transcripts, resume/CV, three letters of recommendation, and statement of academic intent."
    },
    opportunities: [
      {
        id: 2706,
        title: "UCF Presidential Doctoral Fellowship & Full Tuition Remission",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        funding: "$25,000 annual stipend for four years plus 100% graduate tuition waiver and health insurance",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$31 application fee",
        tuition: "Full tuition waiver ($0 paid by fellow)",
        source: "https://graduate.ucf.edu/fellowships",
        desc: "UCF's highest institutional graduate merit award, offered to new incoming doctoral applicants exhibiting exceptional academic promise, research output, and leadership.",
        requirements: {
          gpa: "Minimum 3.8 undergraduate or graduate GPA",
          ielts: "IELTS 7.0 or TOEFL 95",
          gre: "Competitive GRE scores if required by program",
          papers: "Demonstrated prior research experience, publications, or patent disclosures",
          references: "Three strong academic recommendation letters"
        }
      },
      {
        id: 2707,
        title: "Master of Science in Optics and Photonics (CREOL)",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Graduate research and teaching assistantships available ($22,000 stipend + tuition waiver)",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$31 application fee",
        tuition: "$8,800 in-state / $28,650 out-of-state per academic year",
        source: "https://creol.ucf.edu/academics/graduate-programs",
        desc: "World-leading graduate program at CREOL, The College of Optics and Photonics, covering laser engineering, fiber-optic telecom, quantum optics, nanophotonics, and optical materials.",
        requirements: {
          gpa: "B.S. in Physics, Electrical Engineering, Optics, or related field with minimum 3.2 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 89",
          gre: "GRE General test recommended (Quantitative 158+)",
          papers: "Statement of Purpose detailing photonics laboratory interests",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 2708,
        title: "Ph.D. in Computer Science & Artificial Intelligence Fellowship",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Fully funded: $28,000–$32,000 annual graduate assistantship + complete tuition coverage",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "$31 application fee",
        tuition: "100% tuition remission provided with assistantship",
        source: "https://www.cs.ucf.edu/academics/phd-program",
        desc: "Doctoral program at UCF's Center for Research in Computer Vision (CRCV) and AI labs, exploring video analysis, multimodal LLMs, cybersecurity, and distributed computing.",
        requirements: {
          gpa: "B.S. or M.S. in Computer Science or Computer Engineering with minimum 3.5 GPA",
          ielts: "IELTS 7.0 or TOEFL 92",
          gre: "GRE Quantitative 162+ recommended",
          papers: "Writing sample or published conference paper; research statement",
          references: "Three letters of academic reference"
        }
      },
      {
        id: 2709,
        title: "Florida Space Institute Planetary Science & Lunar Simulant Project",
        type: "Research",
        subject: "physics",
        subjects: ["physics", "environment"],
        funding: "$24,000 annual research assistantship sponsored by NASA Grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$31 application fee",
        tuition: "Full tuition coverage under NASA research grant",
        source: "https://fsi.ucf.edu",
        desc: "Interdisciplinary space science project analyzing lunar and asteroidal regolith simulants, space resource in-situ utilization (ISRU), and rover wheel mechanics for Artemis missions.",
        requirements: {
          gpa: "Degree in Physics, Geology, Planetary Science, or Aerospace Engineering with 3.3+ GPA",
          ielts: "IELTS 6.5 or TOEFL 89",
          gre: "Not required",
          papers: "Statement outlining experience with spectroscopy, vacuum chambers, or soil mechanics",
          references: "Two academic referee evaluations"
        }
      },
      {
        id: 2710,
        title: "NASA Kennedy Space Center Graduate Spaceport Engineering Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$26/hour for 16-week semester placement with housing stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward UCF degree",
        source: "https://career.ucf.edu/experiential-learning",
        desc: "Competitive engineering co-op placement stationed directly at NASA Kennedy Space Center or nearby Space Coast contractors (Lockheed Martin, Boeing, Blue Origin).",
        requirements: {
          gpa: "Current UCF graduate engineering student in good standing with 3.2+ GPA",
          ielts: "US Citizen or permanent resident required for federal spaceport access",
          gre: "Not required",
          papers: "Federal background check clearance and technical resume",
          references: "Faculty advisor recommendation"
        }
      },
      {
        id: 2711,
        title: "CREOL Postdoctoral Fellowship in Ultra-Fast Femtosecond Lasers",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "$62,000 - $70,000 annual salary plus standard UCF medical benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://creol.ucf.edu/research/postdoctoral-positions",
        desc: "Two-year postdoctoral position developing high-average-power femtosecond laser amplifiers, extreme ultraviolet (EUV) frequency combs, and laser filamentation.",
        requirements: {
          gpa: "Ph.D. in Physics, Optical Sciences, or Electrical Engineering completed within 4 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Proven publication record in high-impact optics/laser physics journals",
          references: "Three letters of professional recommendation"
        }
      },
      {
        id: 2712,
        title: "Assistant / Associate Professor in Cybersecurity & Trustworthy AI",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "$115,000 - $140,000 for 9-month appointment plus summer research stipend",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenure-track academic faculty appointment",
        source: "https://jobs.ucf.edu",
        desc: "Full-time tenure-track academic faculty opening in the Department of Computer Science, with access to UCF's National Center for Academic Excellence in Cyber Defense.",
        requirements: {
          gpa: "Ph.D. in Computer Science or Computer Engineering by time of appointment",
          ielts: "Demonstrated excellence in English classroom teaching",
          gre: "Not required",
          papers: "High quality papers in top-tier security conferences (IEEE S&P, ACM CCS, USENIX Security)",
          references: "Three academic reference letters and teaching philosophy statement"
        }
      }
    ],
    researchers: [
      {
        id: 1179,
        name: "Prof. Dr. Mubarak Shah",
        title: "Trustee Chair Professor & Founding Director of Center for Research in Computer Vision (CRCV)",
        subject: "computer-science",
        topics: ["Computer Vision", "Video Surveillance", "Visual AI", "Deep Learning Video Analysis"],
        source: "https://www.crcv.ucf.edu/shah",
        summary: "Prof. Shah is an IEEE, AAAS, and ACM Fellow and one of the world's most cited authorities in video object tracking, crowd behavior analysis, and action recognition."
      },
      {
        id: 1180,
        name: "Prof. Dr. Peter J. Delfyett",
        title: "Pegasus Professor & University Distinguished Professor of Optics (CREOL)",
        subject: "physics",
        topics: ["Semiconductor Mode-Locked Lasers", "Optical Frequency Combs", "Coherent Optical Communications", "Ultrafast Optics"],
        source: "https://creol.ucf.edu/person/peter-delfyett",
        summary: "Prof. Delfyett is a member of the National Academy of Engineering (NAE) and pioneer in semiconductor-based ultra-fast laser sources and optical clock recovery."
      },
      {
        id: 1181,
        name: "Dr. Addie Dove",
        title: "Associate Professor of Physics & Planetary Sciences",
        subject: "physics",
        topics: ["Planetary Regolith", "Lunar Dust Dynamics", "Microgravity Experiments", "Space Exploration Instrumentation"],
        source: "https://physics.ucf.edu/~adove",
        summary: "Dr. Dove leads NASA-funded microgravity flight experiments and payload design exploring planetary dust charging and regolith collisions on airless bodies."
      }
    ]
  },

  // 6. United Kingdom: Liverpool John Moores University (LJMU)
  {
    institution: "Liverpool John Moores University",
    shortName: "LJMU",
    slug: "liverpool-john-moores-university",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Liverpool, England, United Kingdom",
    website: "https://www.ljmu.ac.uk",
    sourceRow: 1262,
    headline: "Liverpool John Moores University: Astrophysics, Maritime Engineering & Sports Science",
    overview: "Liverpool John Moores University (LJMU) is a vibrant, research-active British public university tracing its history to 1823, renowned globally for the Astrophysics Research Institute (operators of the Liverpool Telescope), world-ranked Sports and Exercise Sciences, and maritime transport logistics.",
    description: "Verified postgraduate degrees, PhD studentships, and admissions guide for Liverpool John Moores University in the UK.",
    heroEyebrow: "Historic UK Research Institution · Astrophysics & Sports Science Leader",
    tuitionText: "Full-time domestic postgraduate tuition is £9,500 to £11,000 per year. International student tuition is £16,500 to £18,500 per year. Fully funded UKRI and university PhD studentships cover 100% of fees plus an annual tax-free living stipend (£19,237).",
    admissions: {
      masters: "UK 2:1 Honours degree or international equivalent in a relevant subject area.",
      phd: "First class or upper second class (2:1) UK Honours degree or Master's degree with Merit/Distinction in related disciplines.",
      language: "IELTS Academic 6.5 overall with a minimum of 6.0 in each sub-test (reading, listening, speaking, writing).",
      proposal: "1,500–2,000 word research proposal detailing methodology, literature review, and alignment with LJMU research institutes.",
      appFee: "Zero application fee for direct online postgraduate applications.",
      documents: "Degree transcripts and certificates, personal statement, two references (at least one academic), and passport scan."
    },
    opportunities: [
      {
        id: 2713,
        title: "LJMU Vice-Chancellor's PhD Studentship in Observational Astrophysics",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "Full tuition fee waiver plus £19,237 annual tax-free living stipend for 3.5 years",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "Zero application fee",
        tuition: "100% covered by studentship award",
        source: "https://www.ljmu.ac.uk/research/centres-and-institutes/astrophysics-research-institute/postgraduate-study",
        desc: "Full doctoral studentship at the world-renowned Astrophysics Research Institute (ARI) utilizing data from the Liverpool Telescope on La Palma to investigate supernovae, stellar evolution, and galactic transients.",
        requirements: {
          gpa: "First Class UK MPhys/MSci or international equivalent in Physics, Astronomy, or Mathematics",
          ielts: "IELTS 6.5 (minimum 6.0 each skill)",
          gre: "Not required",
          papers: "Demonstrated scientific coding ability in Python and computational astronomy tools",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2714,
        title: "MSc in Sport and Clinical Biomechanics",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "LJMU International Achievement Scholarship (£3,000 fee reduction) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero application fee",
        tuition: "£10,250 domestic / £17,750 international per year",
        source: "https://www.ljmu.ac.uk/study/courses/postgraduate-students/sport-and-clinical-biomechanics-msc",
        desc: "World-class postgraduate program hosted in the School of Sport and Exercise Sciences, analyzing human locomotion, neuromuscular function, injury prevention, and elite athletic performance.",
        requirements: {
          gpa: "Minimum 2:1 Honours degree in Sports Science, Physiotherapy, Engineering, or Physiology",
          ielts: "IELTS 6.5 (minimum 6.0 in each component)",
          gre: "Not required",
          papers: "Personal statement detailing biomechanical instrumentation experience",
          references: "Two academic or clinical references"
        }
      },
      {
        id: 2715,
        title: "Ph.D. in Maritime Cyber Security & Autonomous Ship Operations",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "£19,500 annual tax-free stipend + home/international fee coverage",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Fully funded by EPSRC Industrial Collaborative Studentship",
        source: "https://www.ljmu.ac.uk/research/centres-and-institutes/loom",
        desc: "Doctoral research position based at the Liverpool Logistics, Offshore and Marine Research Institute (LOOM) evaluating cyber vulnerabilities in GPS, AIS, and remote ship control networks.",
        requirements: {
          gpa: "Upper second class Honours or Master's in Computer Science, Cyber Security, or Marine Technology",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band)",
          gre: "Not required",
          papers: "2-page doctoral research proposal outlining threat models in maritime logistics",
          references: "Two academic references"
        }
      },
      {
        id: 2716,
        title: "Forensic Anthropology & Bioarchaeological Skeletal Research Project",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "£18,000 annual research bursary plus laboratory consumables grant",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Tuition waiver included",
        source: "https://www.ljmu.ac.uk/research/centres-and-institutes/research-centre-in-evolutionary-anthropology-and-palaeoecology",
        desc: "Interdisciplinary bioarchaeological investigation analyzing historic human skeletal collections, trace element isotopes, and facial reconstruction techniques using 3D micro-CT scanners.",
        requirements: {
          gpa: "BSc or MSc in Forensic Science, Archaeology, or Biological Anthropology",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Skeletal osteology laboratory report or dissertation chapter",
          references: "Two academic referees"
        }
      },
      {
        id: 2717,
        title: "Premier League & Olympic High Performance Sports Science Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "£15/hour for 9-month professional placement with elite clubs",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited MSc degree program",
        source: "https://www.ljmu.ac.uk/about-us/faculties/faculty-of-science/school-of-sport-and-exercise-sciences",
        desc: "Supervised high-performance sports science internship working alongside fitness directors, nutritionists, and match analysts in Premier League football clubs and UK Athletics.",
        requirements: {
          gpa: "Enrolled in LJMU MSc Sports Science with minimum 65% academic average",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "DBS enhanced security check and professional sports science resume",
          references: "One academic tutor letter"
        }
      },
      {
        id: 2718,
        title: "Royal Society-Newton Postdoctoral Fellowship in Time-Domain Astronomy",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "£41,000 - £46,000 per annum salary plus pension and research travel budget",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.ljmu.ac.uk/research/centres-and-institutes/astrophysics-research-institute",
        desc: "Three-year postdoctoral research fellowship analyzing real-time astronomical alerts from the Vera C. Rubin Observatory and robotic telescope arrays.",
        requirements: {
          gpa: "PhD in Astronomy, Astrophysics, or Computational Cosmology completed within 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 4 first-author papers on transient astronomy or machine learning classifiers",
          references: "Three academic referee reports"
        }
      },
      {
        id: 2719,
        title: "Lecturer / Senior Lecturer in Maritime Law & Global Logistics",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "£44,263 - £54,395 per annum with generous Universities Superannuation Scheme (USS)",
        status: "Open",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "Zero fee",
        tuition: "Permanent full-time academic appointment",
        source: "https://jobs.ljmu.ac.uk",
        desc: "Academic faculty position within the Liverpool Business School and Maritime Centre, teaching international maritime law, charter party disputes, and green shipping corridors.",
        requirements: {
          gpa: "PhD or LL.M. in Maritime Law, Commercial Law, or International Trade Law",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Track record of publications in recognized maritime law journals",
          references: "Three professional/academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1182,
        name: "Prof. Dr. Shi-Dong Fan",
        title: "Professor of Maritime Safety & Risk Management (LOOM)",
        subject: "engineering",
        topics: ["Marine Accident Modeling", "Maritime Logistics", "Human Reliability", "Risk Assessment"],
        source: "https://www.ljmu.ac.uk/about-us/staff-profiles/faculty-of-engineering-and-technology/department-of-maritime-and-mechanical-engineering/shi-dong-fan",
        summary: "Prof. Fan is an internationally prominent researcher in maritime safety analysis, Bayesian networks for accident mitigation, and intelligent risk forecasting."
      },
      {
        id: 1183,
        name: "Prof. Dr. Sheila Rowan",
        title: "Honorary Professor of Gravitational Astrophysics",
        subject: "physics",
        topics: ["Gravitational Waves", "Astrophysical Instrumentation", "Optical Sensors", "Interferometry"],
        source: "https://www.ljmu.ac.uk/research/centres-and-institutes/astrophysics-research-institute",
        summary: "Prof. Rowan investigates gravitational wave instrumentation, ultra-low noise materials for interferometers, and multi-messenger astronomical events."
      },
      {
        id: 1184,
        name: "Prof. Dr. Keith George",
        title: "Pro-Vice-Chancellor & Professor of Exercise and Cardiovascular Physiology",
        subject: "biology",
        topics: ["Athlete Heart", "Cardiovascular Echocardiography", "Sudden Cardiac Arrest Prevention", "Endurance Physiology"],
        source: "https://www.ljmu.ac.uk/about-us/staff-profiles/faculty-of-science/school-of-sport-and-exercise-sciences/keith-george",
        summary: "Prof. George is a world leader in clinical and exercise cardiovascular physiology, pioneering cardiac ultrasound diagnostics in high-performance athletes."
      }
    ]
  },

  // 7. Japan: Kindai University
  {
    institution: "Kindai University",
    shortName: "Kindai",
    slug: "kindai-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Higashiosaka, Osaka, Japan",
    website: "https://www.kindai.ac.jp",
    sourceRow: 1668,
    headline: "Kindai University: Aquaculture Innovation, Medicine & Robotics Engineering Guide",
    overview: "Kindai University (近畿大学) in Higashiosaka, Osaka, is one of Japan's largest and most dynamic private universities, internationally renowned for pioneering the world's first complete aquaculture farming of Pacific bluefin tuna ('Kindai Tuna'), advanced regenerative medicine, and autonomous agricultural robotics.",
    description: "Verified graduate research programs, MEXT scholarships, and admissions guide for Kindai University in Osaka, Japan.",
    heroEyebrow: "Osaka Innovation Hub · World Aquaculture Pioneer",
    tuitionText: "Annual graduate tuition ranges from ¥800,000 to ¥1,150,000 (~$5,300 to $7,600 USD). International students are eligible for 30% to 50% tuition reduction scholarships, and premier doctoral researchers receive Japanese Government MEXT or JSPS research fellowships.",
    admissions: {
      masters: "Completion of 16 years of formal education with a Bachelor's degree from an accredited university.",
      phd: "Master's degree or professional equivalent in science, agriculture, medicine, or engineering.",
      language: "Japanese JLPT N2/N1 for Japanese-medium divisions; English CEFR B2 (TOEFL iBT 80 or IELTS 6.0) for international English research laboratories.",
      proposal: "Detailed research plan (Kenkyu-Keikaku-sho) in English or Japanese (1,500-2,000 words) approved by prospective laboratory professor.",
      appFee: "¥35,000 application examination fee.",
      documents: "Graduation certificate, academic transcript, research plan, letters of recommendation, and certificate of Japanese/English proficiency."
    },
    opportunities: [
      {
        id: 2720,
        title: "MEXT Japanese Government University Recommendation Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "¥144,000 to ¥145,000 monthly stipend, 100% tuition waiver, and round-trip economy flights",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero application fee for nominated scholars",
        tuition: "Fully waived by Japanese Government",
        source: "https://www.kindai.ac.jp/english/study-at-kindai/scholarships",
        desc: "Prestigious Monbukagakusho (MEXT) scholarship allocated directly through Kindai University for top international applicants enrolling in Fisheries, Agriculture, or Applied Science.",
        requirements: {
          gpa: "Minimum 2.30 out of 3.0 on MEXT GPA grading scale",
          ielts: "IELTS 6.0 or TOEFL 80 or JLPT N2",
          gre: "Not required",
          papers: "Research plan detailing proposed laboratory work at Kindai",
          references: "Two academic recommendation letters including Dean's recommendation"
        }
      },
      {
        id: 2721,
        title: "Master of Science in Aquaculture & Marine Biotechnology",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "environment", "chemistry"],
        funding: "30% international student tuition reduction + laboratory research stipends",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "¥35,000 application fee",
        tuition: "¥850,000 (~$5,600 USD) per year after institutional fee deduction",
        source: "https://www.kindai.ac.jp/english/academics/graduate-school",
        desc: "World-famous Master's degree hosted at the Fisheries Laboratory of Kindai University, providing hands-on training in bluefin tuna breeding, fish genomics, and marine ecology.",
        requirements: {
          gpa: "Bachelor's degree in Biology, Fisheries Science, Agriculture, or Biotechnology",
          ielts: "IELTS 6.0 or TOEFL 80",
          gre: "Not required",
          papers: "Detailed 2-page research proposal on sustainable marine food production",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2722,
        title: "Ph.D. in Cyber-Physical Mechatronics & Agricultural Robotics",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Kindai Doctoral Fellowship (¥1,800,000/year living grant + tuition waiver)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥35,000 application fee",
        tuition: "100% covered under fellowship scheme",
        source: "https://www.kindai.ac.jp/engineering/graduate-school",
        desc: "Doctoral research program developing autonomous fruit harvesting robots, AI orchard vision inspection, and precision greenhouse climate control systems.",
        requirements: {
          gpa: "Master's degree in Mechanical Engineering, Robotics, or Computer Science",
          ielts: "TOEFL 80 or IELTS 6.0",
          gre: "Not required",
          papers: "Master's thesis manuscript and one published journal or conference paper",
          references: "Two letters of reference from academic supervisors"
        }
      },
      {
        id: 2723,
        title: "Kindai Tuna Genome Editing & Selective Breeding Investigation",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "¥180,000 monthly research salary supported by JST/NEDO grants",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Fully sponsored research project",
        source: "https://flku.jp",
        desc: "Flagship biological research project at Shirahama Fisheries Station utilizing CRISPR-Cas9 genome editing to enhance disease resistance and feed efficiency in cultured tuna.",
        requirements: {
          gpa: "Degree in Molecular Biology, Genetics, or Aquaculture",
          ielts: "English or Japanese proficiency for laboratory communication",
          gre: "Not required",
          papers: "Prior experience with PCR, gene sequencing, and cell culture",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2724,
        title: "Kansai Medical Devices & Bio-Robotics Industry Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "¥160,000 per month stipend plus commuting travel pass",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Zero fee",
        tuition: "Course-integrated practical placement",
        source: "https://www.kindai.ac.jp/english/campus-life/career-support",
        desc: "Three to six-month technical internship working with medical diagnostic device manufacturers and surgical robotics developers in the Osaka-Kobe biomedical cluster.",
        requirements: {
          gpa: "Kindai graduate engineering or medical sciences student with good academic standing",
          ielts: "Conversational Japanese (JLPT N3+) and English proficiency",
          gre: "Not required",
          papers: "Resume and Japanese Rirekisho",
          references: "Faculty mentor recommendation"
        }
      },
      {
        id: 2725,
        title: "JSPS Postdoctoral Fellowship for Overseas Researchers at Kindai",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "biology", "physics"],
        funding: "¥362,000 monthly maintenance allowance, ¥200,000 settling-in fee, and research grant",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee",
        tuition: "Salaried fellowship from the Japan Society for the Promotion of Science (JSPS)",
        source: "https://www.jsps.go.jp/english/e-fellow",
        desc: "Prestigious two-year international postdoctoral fellowship conducted in partnership with Kindai faculty in organic chemistry, functional materials, or pharmacology.",
        requirements: {
          gpa: "PhD in Natural Sciences, Chemistry, or Pharmacy obtained within the last 6 years",
          ielts: "Proficiency in English",
          gre: "Not required",
          papers: "Strong record of international first-author journal papers",
          references: "Three reference letters and nomination from host Kindai professor"
        }
      },
      {
        id: 2726,
        title: "Specially Appointed Assistant Professor in Artificial Intelligence & Big Data",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "¥6,500,000 - ¥8,000,000 annual compensation plus health insurance and pension",
        status: "Open",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "Zero fee",
        tuition: "Full-time university academic faculty post",
        source: "https://www.kindai.ac.jp/english/about/recruit",
        desc: "Full-time faculty appointment in the Faculty of Informatics, teaching deep learning, cloud architectures, and supervising undergraduate capstone software engineering projects.",
        requirements: {
          gpa: "Doctorate (Ph.D.) in Computer Science, Informatics, or related field",
          ielts: "Fluent English; conversational Japanese helpful",
          gre: "Not required",
          papers: "Minimum 3 international journal articles and demonstrated teaching aptitude",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 1185,
        name: "Prof. Dr. Shigeru Miyashita",
        title: "Director of Aquaculture Research Institute & Head of Tuna Farming",
        subject: "biology",
        topics: ["Bluefin Tuna Aquaculture", "Larval Rearing", "Fish Nutrition", "Marine Hatchery Management"],
        source: "https://flku.jp/staff/miyashita",
        summary: "Prof. Miyashita is a world-renowned marine biologist who spearheaded the complete closed-cycle aquaculture technology for Pacific bluefin tuna at Kindai."
      },
      {
        id: 1186,
        name: "Prof. Dr. Kenichi Yoshikawa",
        title: "Professor of Applied Physics & Bio-Robotics",
        subject: "physics",
        topics: ["Nonlinear Dynamics", "DNA Nanotechnology", "Soft Actuators", "Biophysical Motors"],
        source: "https://www.kindai.ac.jp/faculty/staff/yoshikawa",
        summary: "Prof. Yoshikawa investigates biophysical self-organization, microfluidic motors, and synthetic molecular machinery utilizing chemical oscillations."
      },
      {
        id: 1187,
        name: "Prof. Dr. Hiroki Sugimori",
        title: "Professor of Medical Informatics & AI Diagnostics",
        subject: "computer-science",
        topics: ["Medical Image Processing", "Deep Learning Radiology", "Clinical Decision Support", "Healthcare Big Data"],
        source: "https://www.kindai.ac.jp/med/informatics/sugimori",
        summary: "Prof. Sugimori leads AI diagnostic modeling at Kindai University Hospital, focusing on convolutional neural networks for early cancer detection in CT and MRI scans."
      }
    ]
  },

  // 8. Sweden: Campus Lidköping
  {
    institution: "Campus Lidköping",
    shortName: "Campus Lidköping",
    slug: "campus-lidkoping",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Lidköping, Västra Götaland, Sweden",
    website: "https://campusvastraskaraborg.se",
    sourceRow: 1556,
    headline: "Campus Lidköping: Smart Manufacturing, Automation & Higher Vocational Education",
    overview: "Campus Lidköping (Campus Västra Skaraborg) is a premier Swedish higher education campus and vocational college in Västra Götaland, collaborating with University of Skövde, Chalmers University of Technology, and regional manufacturing giants to offer accredited degrees in industrial automation, renewable energy, and digital health.",
    description: "Verified academic programs, industrial engineering qualifications, and admissions guide for Campus Lidköping in Sweden.",
    heroEyebrow: "Västra Götaland Tech Campus · Swedish Higher Education",
    tuitionText: "Zero tuition fees for Swedish, EU/EEA, and Swiss citizens. Higher vocational programs (Yrkeshögskolan) are state-funded and tuition-free for all admitted residents. Non-EU international university partner courses range from SEK 110,000 to 145,000 annually.",
    admissions: {
      masters: "Bachelor's degree (180 ECTS) in Engineering, IT, or Business Administration through accredited partner university affiliations.",
      phd: "Industrial doctoral studentships hosted in partnership with University of Skövde or Chalmers University of Technology.",
      language: "Swedish B / Svenska 3 for Swedish-taught vocational programs; English 6 (IELTS 6.5) for university partner programs.",
      proposal: "Curriculum vitae, high school / university transcripts, and personal statement of technical career goals.",
      appFee: "Zero application fee via the national vocational portal (Yrkeshögskolan) or SEK 900 via Antagning.se for university degrees.",
      documents: "Certified grade transcripts, proof of prerequisite mathematics and physics/computer science coursework, and identification."
    },
    opportunities: [
      {
        id: 2727,
        title: "Swedish State CSN Student Aid & Living Grant (Studiemedel)",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Up to SEK 12,056 per month (SEK 3,988 grant + SEK 8,068 loan) for eligible students",
        status: "Open",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "Zero fee",
        tuition: "100% state-funded education (Zero tuition)",
        source: "https://www.csn.se",
        desc: "Comprehensive Swedish state financial aid package providing monthly non-repayable grants and low-interest student loans for students enrolled in accredited studies at Campus Lidköping.",
        requirements: {
          gpa: "Admission to an accredited higher vocational or university program at Campus Lidköping",
          ielts: "Eligible residence status in Sweden/EU",
          gre: "Not required",
          papers: "Valid Swedish personal identification number (personnummer) and program registration",
          references: "Not required"
        }
      },
      {
        id: 2728,
        title: "Higher Vocational Diploma (YH-Examen) in Industrial Automation & PLC Robotics",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Tuition-free government funded education with CSN grant eligibility",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 (Zero tuition for admitted students)",
        source: "https://campusvastraskaraborg.se/vara-utbildningar/automation",
        desc: "Two-year 400 YH-point engineering qualification specializing in Siemens/ABB PLC automation, SCADA systems, industrial robot programming, and Industry 4.0 networking.",
        requirements: {
          gpa: "General entry requirements for Swedish higher education with Mathematics 2 and Physics 1",
          ielts: "Svenska 2/3 or equivalent",
          gre: "Not required",
          papers: "Verified high school diploma and work experience documentation",
          references: "One professional reference"
        }
      },
      {
        id: 2729,
        title: "Industrial Ph.D. in Cyber-Physical Manufacturing & Digital Twins",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "SEK 35,000 - 41,000 monthly employee salary with Swedish occupational pension and vacation",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for salaried doctoral researcher",
        source: "https://campusvastraskaraborg.se/forskning-och-samverkan",
        desc: "Four-year industrial doctoral project operated in collaboration with University of Skövde, deploying real-time digital twins onto automated manufacturing cells in Skaraborg.",
        requirements: {
          gpa: "Master of Science in Mechanical, Automation, or Software Engineering with 240 ECTS credits",
          ielts: "English 6 / IELTS 6.5",
          gre: "Not required",
          papers: "Master's thesis report and 3-page statement of research method",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2730,
        title: "Västra Götaland Sustainable Industrial Electrification & Heat Recovery Study",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "SEK 28,000 monthly research stipend supported by Region Västra Götaland",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Full grant funding",
        source: "https://campusvastraskaraborg.se/samverkan",
        desc: "Regional energy efficiency initiative modeling industrial waste heat capture, district heating interconnects, and heavy vehicle electric charging depots.",
        requirements: {
          gpa: "B.Sc. or M.Sc. in Energy Technology, Environmental Engineering, or Thermal Systems",
          ielts: "English or Swedish proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and portfolio of thermodynamic calculation projects",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2731,
        title: "LIA (Lärande i Arbete) Industrial Robotics Work Placement (20 Weeks)",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Fully compensated company allowance + full CSN funding continuation",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero fee",
        tuition: "Integrated in state-accredited YH qualification",
        source: "https://campusvastraskaraborg.se/for-foretag/lia",
        desc: "Twenty-week embedded industrial engineering internship hosted at leading automation equipment manufacturers, robot integrators, and automotive suppliers in Skaraborg.",
        requirements: {
          gpa: "Successful completion of Year 1 in Campus Lidköping Automation program",
          ielts: "Swedish or English technical communication",
          gre: "Not required",
          papers: "Signed tripartite workplace training agreement",
          references: "Course coordinator evaluation"
        }
      },
      {
        id: 2732,
        title: "Skaraborg Regional Innovation & Circular Economy Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "SEK 480,000 annual research grant plus project operational budget",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Post-graduate research fellowship",
        source: "https://campusvastraskaraborg.se/om-oss/utvecklingsprojekt",
        desc: "Twelve-month applied fellowship examining circular biomaterials, agricultural byproduct valorization, and carbon accounting across Lake Vänern regional enterprises.",
        requirements: {
          gpa: "Master's or doctoral degree in Sustainability, Environmental Management, or Chemical Engineering",
          ielts: "Fluent English and working Swedish",
          gre: "Not required",
          papers: "Detailed 4-page project plan addressing circular economic integration in West Sweden",
          references: "Two professional reference letters"
        }
      },
      {
        id: 2733,
        title: "Lead Lecturer & Program Manager in Automation Engineering",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "SEK 48,000 - 55,000 monthly salary with Swedish public sector pension benefits",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Permanent full-time education post",
        source: "https://campusvastraskaraborg.se/jobba-hos-oss",
        desc: "Permanent senior faculty position leading curriculum development, laboratory instruction in industrial robotics, and liaising with regional manufacturing executives.",
        requirements: {
          gpa: "Degree in Electrical/Mechanical/Automation Engineering with documented industry experience",
          ielts: "Fluent Swedish and English",
          gre: "Not required",
          papers: "Demonstrated experience in PLC programming (Siemens TIA Portal) and industrial automation",
          references: "Two professional employer references"
        }
      }
    ],
    researchers: [
      {
        id: 1188,
        name: "Ing. Per-Arne Larsson",
        title: "Director of Technical Education & Automation Lab Head",
        subject: "engineering",
        topics: ["Industrial Automation", "Robotics Integration", "PLC Systems", "Industry 4.0"],
        source: "https://campusvastraskaraborg.se/kontakt/larsson",
        summary: "Ing. Larsson coordinates advanced manufacturing training cells and leads collaborative industrial automation research with Swedish automotive suppliers."
      },
      {
        id: 1189,
        name: "Dr. Helena Fransson",
        title: "Senior Researcher in Regional Development & Sustainable Logistics",
        subject: "social-sciences",
        topics: ["Regional Supply Chains", "Circular Economy", "Green Freight Transport", "Vocational Education Policy"],
        source: "https://campusvastraskaraborg.se/kontakt/fransson",
        summary: "Dr. Fransson evaluates supply chain decarbonization and workforce skills transitions in regional Swedish industrial manufacturing networks."
      },
      {
        id: 1190,
        name: "M.Sc. Johan Hallqvist",
        title: "Senior Lecturer in Cloud Software & IoT Architectures",
        subject: "computer-science",
        topics: ["Industrial IoT", "Edge Computing", "Cybersecurity in SCADA", "Embedded Sensors"],
        source: "https://campusvastraskaraborg.se/kontakt/hallqvist",
        summary: "M.Sc. Hallqvist specializes in secure telemetry pipelines, MQTT industrial messaging protocols, and predictive maintenance sensors for rotating machinery."
      }
    ]
  },

  // 9. Netherlands: SOMT University of Physiotherapy
  {
    institution: "SOMT University of Physiotherapy",
    shortName: "SOMT Physiotherapy",
    slug: "somt-university-of-physiotherapy",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Amersfoort, Utrecht, Netherlands",
    website: "https://www.somt.nl",
    sourceRow: 1488,
    headline: "SOMT University of Physiotherapy: Manual Therapy, Musculoskeletal Ultrasound & Sports Medicine",
    overview: "SOMT University of Physiotherapy (Stichting Opleidingen Musculoskeletale Therapie) in Amersfoort is the Netherlands' leading specialized academic institute for musculoskeletal physiotherapy, manual therapy, clinical ultrasound, and sports rehabilitation.",
    description: "Verified Master of Science degrees, clinical fellowships, and admissions guide for SOMT University of Physiotherapy in the Netherlands.",
    heroEyebrow: "Dutch Physiotherapy Leader · Musculoskeletal Medicine Center",
    tuitionText: "Tuition for accredited Master of Science programs is approximately €6,500 to €8,900 per academic year for both Dutch and EU/EEA students. Financial assistance is accessible via the Dutch DUO student financing scheme and accredited healthcare employer subsidies.",
    admissions: {
      masters: "Accredited Bachelor of Science in Physiotherapy (Fysiotherapie) with Dutch BIG registration or international equivalent license to practice.",
      phd: "Master of Science in Physiotherapy, Health Sciences, or Human Movement Sciences with documented clinical research aptitude.",
      language: "Dutch B2/C1 for clinical patient interaction; English B2 (IELTS 6.5 or TOEFL 90) for international Master tracks and publications.",
      proposal: "Curriculum vitae, clinical practice verification, and letter of motivation outlining specialized physiotherapy objectives.",
      appFee: "€100 registration and admissions evaluation fee.",
      documents: "Bachelor of Physiotherapy diploma, BIG-register proof or foreign professional license, transcript of records, and identity document."
    },
    opportunities: [
      {
        id: 2734,
        title: "Dutch DUO Lifelong Learning Healthcare Credit (Levenlanglerenkrediet)",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Up to €11,000 annual tuition credit loan at favorable government interest rates",
        status: "Open",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "Zero fee",
        tuition: "Full coverage of statutory and institutional Master's tuition fees",
        source: "https://duo.nl/particulier/levenlanglerenkrediet",
        desc: "Dutch national Ministry of Education funding mechanism allowing practicing physiotherapists and health clinicians up to age 55 to finance accredited Master of Science tuition at SOMT.",
        requirements: {
          gpa: "Admission to an accredited Master program at SOMT University of Physiotherapy",
          ielts: "Dutch or EU/EEA citizenship or permanent residency",
          gre: "Not required",
          papers: "Valid DigiD and formal SOMT enrollment confirmation",
          references: "Not required"
        }
      },
      {
        id: 2735,
        title: "Master of Science in Manual Therapy (MSc)",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Employer co-funding and tax deductibility for continuing healthcare education",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€100 registration fee",
        tuition: "€7,850 per academic year",
        source: "https://www.somt.nl/opleidingen/master-manuele-therapie",
        desc: "Three-year part-time clinical Master of Science providing advanced competencies in spinal biomechanics, neuro-musculoskeletal diagnostics, and manipulative joint interventions.",
        requirements: {
          gpa: "BSc in Physiotherapy and active professional clinical practice (minimum 16 hours/week)",
          ielts: "Dutch language proficiency (NT2-II) or native fluency",
          gre: "Not required",
          papers: "Valid BIG registration and signed clinical mentorship agreement",
          references: "One reference from a practicing specialist manual therapist"
        }
      },
      {
        id: 2736,
        title: "Ph.D. in Musculoskeletal Health & Chronic Spinal Pain Mechanisms",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Salaried doctoral position: €38,000 - €46,000 per annum with CAO Dutch Universities scale",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for appointed researcher",
        source: "https://www.somt.nl/onderzoek",
        desc: "Four-year joint doctoral research appointment with Maastricht University investigating central sensitization, quantitative sensory testing, and motor control adaptations in chronic neck and back pain.",
        requirements: {
          gpa: "MSc degree in Physiotherapy, Movement Sciences, or Biomedical Sciences with high honors",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Master's research thesis and 3-page research proposal on spinal pain neurobiology",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2737,
        title: "Point-of-Care Musculoskeletal Ultrasound (MSK-US) Diagnostic Study",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "physics"],
        funding: "€2,400 monthly research stipend plus imaging equipment allocation",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero fee",
        tuition: "Funded by national health research foundation",
        source: "https://www.somt.nl/onderzoek/projecten",
        desc: "Clinical imaging trial evaluating high-frequency diagnostic ultrasound reliability in detecting rotator cuff tendinopathies and tendon elastography changes following rehabilitation.",
        requirements: {
          gpa: "Physiotherapist or Medical Doctor with certified MSK ultrasound foundational training",
          ielts: "Fluent Dutch and English",
          gre: "Not required",
          papers: "Documented log of at least 50 diagnostic ultrasound patient examinations",
          references: "Two clinical supervisor references"
        }
      },
      {
        id: 2738,
        title: "High Performance Sports Rehabilitation & Return-to-Play Clinical Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€850 monthly expense stipend + elite clinic access",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Part of SOMT Sports Physiotherapy MSc curriculum",
        source: "https://www.somt.nl/opleidingen/master-sportfysiotherapie",
        desc: "Six-month clinical residency embedded inside Olympic training centers (Papendal) and professional Dutch Eredivisie football club medical departments.",
        requirements: {
          gpa: "Enrolled in SOMT Master in Sports Physiotherapy with passing grades in all Year 1 modules",
          ielts: "Fluent Dutch communication for direct patient care",
          gre: "Not required",
          papers: "Current BLS/AED medical certification and liability insurance",
          references: "One clinical tutor recommendation"
        }
      },
      {
        id: 2739,
        title: "SOMT-Vrije Universiteit Amsterdam Musculoskeletal Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€52,000 per annum salary plus Dutch pension and end-of-year bonus (8.3%)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university researcher",
        source: "https://www.somt.nl/werken-bij",
        desc: "Two-year postdoctoral research fellowship investigating tendon mechanics, loading protocols, and individualized rehabilitation algorithms using wearable inertial sensors.",
        requirements: {
          gpa: "PhD in Biomechanics, Physiotherapy Science, or Human Movement Sciences",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "At least three published articles in peer-reviewed musculoskeletal or sports medicine journals",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2740,
        title: "Associate Professor / Senior Lecturer in Pelvic & Spinal Rehabilitation",
        type: "Job",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€62,000 - €78,000 annual salary under Dutch Higher Professional Education (HBO) CAO scale",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero fee",
        tuition: "Permanent faculty appointment",
        source: "https://www.somt.nl/vacatures",
        desc: "Senior faculty post to lead Master's level curriculum delivery, mentor postgraduate thesis students, and manage applied clinical trials in pelvic health and lumbar stability.",
        requirements: {
          gpa: "Doctorate (PhD) in Health Sciences, Physical Therapy, or related domain",
          ielts: "Proficiency in Dutch and English",
          gre: "Not required",
          papers: "Substantial record of clinical teaching and peer-reviewed scientific publications",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1191,
        name: "Prof. Dr. Annelies Pool-Goudzwaard",
        title: "Professor of Musculoskeletal Movement Disorders & Dean",
        subject: "biology",
        topics: ["Spine and Pelvic Girdle Biomechanics", "Low Back Pain", "Motor Control", "Manual Therapy"],
        source: "https://www.somt.nl/onderzoekers/pool-goudzwaard",
        summary: "Prof. Pool-Goudzwaard is an internationally acclaimed authority on pelvic girdle pain, sacroiliac joint stability, and biomechanical adaptations in spinal pathologies."
      },
      {
        id: 1192,
        name: "Dr. Rob de Bie",
        title: "Professor of Evidence-Based Physical Therapy",
        subject: "social-sciences",
        topics: ["Systematic Reviews", "Clinical Epidemiology", "Clinical Practice Guidelines", "Trial Methodology"],
        source: "https://www.somt.nl/onderzoekers/de-bie",
        summary: "Prof. de Bie leads epidemiological research evaluating physiotherapy clinical guidelines, methodological quality of randomized clinical trials, and meta-analytic evidence."
      },
      {
        id: 1193,
        name: "Dr. Margot De Hertogh",
        title: "Senior Researcher in Cervicogenic Headache & Vestibular Disorders",
        subject: "biology",
        topics: ["Cervicogenic Headache", "Upper Cervical Spine", "Vestibular Rehabilitation", "Clinical Diagnostics"],
        source: "https://www.somt.nl/onderzoekers/de-hertogh",
        summary: "Dr. De Hertogh explores neurovascular and mechanical upper cervical spine contributions to chronic headache, dizziness, and concussion rehabilitation."
      }
    ]
  },

  // 10. Switzerland: Lucerne University of Applied Sciences and Arts (HSLU)
  {
    institution: "Lucerne University of Applied Sciences and Arts",
    shortName: "HSLU Switzerland",
    slug: "lucerne-university-of-applied-sciences-and-arts",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Lucerne, Switzerland",
    website: "https://www.hslu.ch",
    sourceRow: 1335,
    headline: "Lucerne University of Applied Sciences and Arts: Engineering, Fintech & Design Guide",
    overview: "Lucerne University of Applied Sciences and Arts (Hochschule Luzern - HSLU) is the premier public higher education institution of central Switzerland, renowned across Europe for cutting-edge programs in computer science, blockchain/FinTech, energy systems, building technology, and digital design.",
    description: "Verified master's programs, Swiss National Science Foundation doctoral positions, and admissions guide for HSLU in Switzerland.",
    heroEyebrow: "Swiss Public University · Fintech & Engineering Pioneer",
    tuitionText: "Tuition for Swiss and EU/EEA students is CHF 800 per semester (CHF 1,600 / ~$1,850 USD per year). Tuition for non-EU international students is CHF 1,050 to 1,500 per semester. Appointed doctoral and scientific researchers hold Swiss federal employment contracts with annual salaries starting at CHF 60,000.",
    admissions: {
      masters: "Bachelor's degree from a recognized university or university of applied sciences in a related field with grade ECTS B or Swiss grade 5.0.",
      phd: "Master's degree (M.Sc., M.A.) with distinguished standing; doctoral degrees are conferred cooperatively with Swiss cantonal or federal universities (ETH, EPFL, UniLu).",
      language: "German C1 for German-medium programs; English C1 (IELTS 7.0 or Cambridge English Advanced C1) for English Master's degrees.",
      proposal: "Detailed statement of purpose, portfolio of scientific or architectural work, and verified CV in Swiss format.",
      appFee: "CHF 150 administrative application fee.",
      documents: "Bachelor's diploma, transcript of grades with ECTS credits, CV, passport copy, and motivation letter."
    },
    opportunities: [
      {
        id: 2741,
        title: "Swiss Government Excellence Scholarship & Research Fellowship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "CHF 1,920 monthly tax-free living stipend, full tuition exemption, and Swiss health insurance coverage",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Fully waived by Swiss Federal Government",
        source: "https://www.sbfi.admin.ch/scholarships_eng",
        desc: "Prestigious federal scholarship granted by the Federal Commission for Scholarships for Foreign Students (FCS) to international researchers conducting cooperative PhD or postdoctoral studies at HSLU.",
        requirements: {
          gpa: "Master's degree with highest academic honors (first class / grade 5.5+ on Swiss scale)",
          ielts: "English C1 (IELTS 7.0) or German C1",
          gre: "Not required",
          papers: "Comprehensive research proposal and written acceptance letter from an HSLU hosting professor",
          references: "Two confidential academic recommendation letters"
        }
      },
      {
        id: 2742,
        title: "Master of Science in Engineering (MSE) - Data Science & Energy Systems",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Swiss cantonal fee rates apply; paid research assistant positions (CHF 2,500/month) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "CHF 150 application fee",
        tuition: "CHF 800 per semester (Swiss/EU) / CHF 1,050 per semester (Non-EU)",
        source: "https://www.hslu.ch/en/lucerne-school-of-engineering-architecture/degree-programmes/master/engineering",
        desc: "Accredited master's program offering specialized technical profiles in Computer Science, Data Science, Energy and Environment, and Mechanical Engineering, combining theory with industry projects.",
        requirements: {
          gpa: "Bachelor's degree in Engineering, Computer Science, or Physics with above-average grades",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Motivation letter detailing preferred specialization and prospective research lab",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2743,
        title: "SNSF Salaried Cooperative Doctoral Researcher in Blockchain & Decentralized Finance",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CHF 52,000 - 58,000 per year under Swiss National Science Foundation (SNSF) salary rates",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition (salaried Swiss researcher)",
        source: "https://www.hslu.ch/en/lucerne-school-of-information-technology/research/blockchain-lab",
        desc: "Four-year cooperative doctoral position with University of Zurich and HSLU Crypto Valley research labs in Zug, investigating consensus protocol security and zero-knowledge proofs.",
        requirements: {
          gpa: "M.Sc. in Computer Science, Cryptography, Mathematics, or Computational Finance with distinction",
          ielts: "IELTS 7.0 or equivalent",
          gre: "Not required",
          papers: "Master's thesis in cryptography or distributed systems; coding competence in Rust/Solidity/Go",
          references: "Two academic references"
        }
      },
      {
        id: 2744,
        title: "Swiss Innosuisse Decarbonized Building & Positive Energy District Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CHF 65,000 annual research salary plus laboratory consumables",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Fully sponsored by Swiss Innovation Agency",
        source: "https://www.hslu.ch/en/lucerne-school-of-engineering-architecture/research/building-technology-and-energy",
        desc: "Applied research project at the Institute of Building Technology analyzing geothermal heat pumps, building envelope photovoltaics (BIPV), and predictive building energy controls.",
        requirements: {
          gpa: "Master's degree in Building Technology, Mechanical Engineering, or Energy Systems",
          ielts: "German or English professional working proficiency",
          gre: "Not required",
          papers: "Demonstrated simulation skills in EnergyPlus, IDA ICE, or Modelica",
          references: "Two academic or industry letters"
        }
      },
      {
        id: 2745,
        title: "Swiss Crypto Valley FinTech & Smart Contract Engineering Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CHF 3,200 per month for 6-month placement in Zug/Lucerne",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited HSLU master's curriculum",
        source: "https://www.hslu.ch/en/lucerne-school-of-information-technology/career",
        desc: "Six-month professional software engineering internship embedded within Swiss Crypto Valley blockchain startups, digital asset custodians, and financial regulatory authorities.",
        requirements: {
          gpa: "Enrolled in HSLU Master in IT, Blockchain, or Engineering with minimum 4.8/6.0 GPA",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Technical portfolio demonstrating smart contract development or web3 APIs",
          references: "Faculty course director endorsement"
        }
      },
      {
        id: 2746,
        title: "HSLU Foundation Sustainable Digital Transformation Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "environment", "social-sciences"],
        funding: "CHF 84,000 - 92,000 per annum salary plus Swiss occupational pension benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://www.hslu.ch/en/lucerne-university-of-applied-sciences-and-arts/research",
        desc: "Two-year postdoctoral research appointment examining algorithmic transparency, circular business models, and AI sustainability in Swiss enterprise ecosystems.",
        requirements: {
          gpa: "PhD in Information Systems, Computer Science, or Environmental Informatics completed within 3 years",
          ielts: "Fluent English and working German",
          gre: "Not required",
          papers: "Minimum 3 first-author journal articles in respected peer-reviewed venues",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2747,
        title: "Professor of Artificial Intelligence & Machine Learning Systems",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CHF 145,000 - 175,000 annual salary under Swiss cantonal public salary scales",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenured full-time university professorship",
        source: "https://www.hslu.ch/en/lucerne-university-of-applied-sciences-and-arts/about-us/jobs-and-careers",
        desc: "Permanent professorship at the Lucerne School of Computer Science in Rotkreuz, leading applied research in deep neural networks, computer vision, and industrial robotics.",
        requirements: {
          gpa: "Doctorate (PhD) in Computer Science, Machine Learning, or related field with proven industry experience",
          ielts: "Fluent English and German (or readiness to acquire German within 2 years)",
          gre: "Not required",
          papers: "Outstanding publication record and track record of securing Swiss Innosuisse/SNSF grants",
          references: "Three international academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1194,
        name: "Prof. Dr. René Hüsler",
        title: "Director of Lucerne School of Computer Science and Information Technology",
        subject: "computer-science",
        topics: ["Cloud Computing", "Software Architecture", "FinTech Systems", "Higher Technical Education"],
        source: "https://www.hslu.ch/de-ch/informatik/ueber-uns/leitung/rene-huesler",
        summary: "Prof. Hüsler heads the HSLU School of Computer Science in Rotkreuz, spearheading strategic expansion in digital engineering, blockchain, and artificial intelligence."
      },
      {
        id: 1195,
        name: "Prof. Dr. Alexander Denzler",
        title: "Head of Blockchain Lab & Professor of Distributed Systems",
        subject: "computer-science",
        topics: ["Blockchain Architecture", "Consensus Algorithms", "Smart Contracts", "Cryptographic Protocols"],
        source: "https://www.hslu.ch/de-ch/informatik/forschung/blockchain-lab/alexander-denzler",
        summary: "Prof. Denzler is a prominent Swiss blockchain researcher leading the HSLU Blockchain Lab in Crypto Valley, focusing on decentralized identity and consensus security."
      },
      {
        id: 1196,
        name: "Prof. Dr. Uwe W. Schulz",
        title: "Head of Institute of Medical Engineering & Professor of Biomechanics",
        subject: "engineering",
        topics: ["Medical Robotics", "Rehabilitation Engineering", "Surgical Systems", "Biomechatronics"],
        source: "https://www.hslu.ch/de-ch/technik-architektur/forschung/medizintechnik/uwe-schulz",
        summary: "Prof. Schulz directs the Institute of Medical Engineering, developing robotic rehabilitation devices and biomechatronic implants in partnership with Swiss medtech firms."
      }
    ]
  }
];
