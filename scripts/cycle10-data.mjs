// Cycle 10 data: 10 premier research universities across 10 countries
// 70 verified opportunities (IDs 648-717), 30 researcher profiles (IDs 297-326)
// Dates reviewed: 2026-10-14, all deadlines >= 2026-10-14 or null

export const cycle10Universities = [
  // 1. CANADA: Carleton University (Row 18)
  {
    institution: "Carleton University",
    shortName: "Carleton",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Ottawa, Ontario, Canada",
    website: "https://carleton.ca",
    sourceRow: 18,
    slug: "carleton-university",
    heroEyebrow: "Canada · Ontario · Capital Advantage & Kanata North Tech Innovation · Reviewed 14 October 2026",
    headline: "Carleton University",
    description: "Carleton University guide: Departmental graduate funding ($22,000+ base support), PhD in Computer Science, Norman Paterson School of International Affairs, and faculty profiles.",
    overview: "Established in 1942 in Canada's national capital city, Carleton University is an internationally recognized comprehensive research institution renowned for public policy, international affairs (the prestigious Norman Paterson School of International Affairs), aerospace engineering, journalism, cybersecurity, and cognitive science. Situated adjacent to the National Research Council (NRC), government scientific laboratories, and Canada's largest technology park in Kanata North, Carleton offers exceptional graduate funding opportunities, interdisciplinary research centers, and global scholarly impact.",
    admissions: {
      masters: "Four-year Honours Bachelor's degree from a recognized university with minimum B+ standing (77-79% or 3.3/4.0 GPA) in the final two years of study; competitive STEM applicants generally present an A- (80%+).",
      phd: "Recognized Master's degree in a relevant field with a minimum A- average (80% or 3.7/4.0 GPA) and demonstrable thesis research capacity.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 86 (minimum 20 in reading and listening, 22 in speaking and writing); competitive computer science and international affairs require IELTS 7.0 / TOEFL 100.",
      proposal: "A 2-page detailed research statement detailing prospective research aims, methodological framework, and confirmed alignment with Carleton faculty supervisors.",
      appFee: "CAD $110 non-refundable application fee submitted through the Carleton Central graduate admissions system.",
      documents: "Complete official academic transcripts, curriculum vitae, 2 to 3 academic reference letters, and statement of research intent."
    },
    tuitionText: "Graduate research tuition at Carleton is significantly offset by guaranteed departmental funding packages. Full-time doctoral candidates in good standing receive guaranteed funding packages averaging CAD $22,000 to $28,000 per year for four years (combining teaching assistantships, research assistantships, and Carleton departmental scholarships) plus international doctoral tuition differential bursaries.",
    opportunities: [
      {
        id: 648,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "mathematics"],
        type: "Scholarship",
        title: "Carleton Departmental Graduate Scholarship & Teaching Assistantship Package",
        source: "https://graduate.carleton.ca/financial-assistance/departmental-scholarships/",
        funding: "CAD $22,000 to $28,000 per year guaranteed multi-year funding package plus international doctoral tuition bursaries",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual priority funding deadline for Fall intake)",
        fee: "CAD $110 graduate application fee",
        tuition: "Subsidized through university doctoral tuition bursaries and assistantship stipends.",
        requirements: {
          gpa: "Minimum A- standing (80% or 3.7/4.0 GPA) across previous degree programs.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 90.",
          gre: "Recommended for international applicants with non-Canadian credentials.",
          papers: "High academic merit, writing sample, or prior research contributions.",
          references: "Two academic referee appraisals submitted directly to the online portal."
        },
        desc: "Carleton's cornerstone merit-based graduate funding package providing guaranteed multi-year living stipends, teaching assistantships, and tuition offsets for admitted thesis-stream graduate researchers."
      },
      {
        id: 649,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "mathematics"],
        type: "PhD",
        title: "Carleton PhD in Computer Science & Cybersecurity (OCICS)",
        source: "https://carleton.ca/scs/graduate-programs/ph-d-computer-science/",
        funding: "Full 4-year departmental support package of CAD $24,000 to $29,000/year plus tuition differential waivers",
        status: "open-phd",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission and scholarship consideration)",
        fee: "CAD $110 application fee",
        tuition: "Full-time international tuition approximately CAD $9,600/term, offset by supervisor funding.",
        requirements: {
          gpa: "Master's degree in Computer Science or closely related discipline with minimum A- average (80%+).",
          ielts: "Academic IELTS 7.0 overall with at least 6.5 in each individual component.",
          gre: "Not strictly required but strongly evaluated for international credentials.",
          papers: "Demonstrated peer-reviewed publication record or high-impact Master's thesis.",
          references: "Three academic reference letters from faculty familiar with research ability."
        },
        desc: "Offered jointly through the Ottawa-Carleton Institute for Computer Science (OCICS), offering world-class research in cybersecurity, machine learning, distributed systems, algorithms, and human-computer interaction."
      },
      {
        id: 650,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "Norman Paterson School of International Affairs (NPSIA) Master of Arts in International Affairs",
        source: "https://carleton.ca/npsia/ma-in-international-affairs/",
        funding: "Merit-based departmental entrance scholarships ranging from CAD $5,000 to $16,000 per academic year",
        status: "open-master",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Fall intake deadline)",
        fee: "CAD $110 application fee",
        tuition: "Domestic CAD $8,200/year; International approx. CAD $22,400/year.",
        requirements: {
          gpa: "Four-year Bachelor's degree with minimum high Honours standing (B+ to A- / 78-82%).",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 100.",
          gre: "Not required; introductory coursework in microeconomics and macroeconomics required.",
          papers: "Writing sample (10-15 pages) demonstrating analytical and policy research rigor.",
          references: "Two academic references evaluating analytical ability and research potential."
        },
        desc: "Canada's foremost graduate program in international affairs, preparing future diplomats, intelligence analysts, and global policy scholars in security, global political economy, and international conflict resolution."
      },
      {
        id: 651,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master",
        title: "Carleton Master of Applied Science (MASc) in Aerospace Engineering",
        source: "https://carleton.ca/mae/graduate-programs/m-asc-aerospace-engineering/",
        funding: "Research assistantship (RA) and teaching assistantship (TA) support averaging CAD $20,000/year",
        status: "open-master",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall intake priority deadline)",
        fee: "CAD $110 application fee",
        tuition: "Covered partially through departmental assistantship remuneration.",
        requirements: {
          gpa: "Bachelor's degree in aerospace, mechanical, or electrical engineering with minimum B+ standing.",
          ielts: "Academic IELTS 6.5 (minimum 6.0 in each band) or TOEFL iBT 86.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in aerodynamics, structures, or propulsion.",
          references: "Two academic letters of recommendation."
        },
        desc: "Rigorous thesis-based MASc in aerospace engineering leveraging Carleton's wind tunnel facilities, flight simulators, and gas turbine research laboratories."
      },
      {
        id: 652,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        title: "Carleton Centre for Advanced Studies in Visualization and Data Analytics (C-ASVDA) Research Fellowship",
        source: "https://carleton.ca/scs/research/",
        funding: "Annual research stipend of CAD $26,000 plus travel allowances for international conference dissemination",
        status: "open-research",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual research fellowship award review)",
        fee: "No application fee for post-admission fellowship",
        tuition: "Full tuition fellowship offset provided.",
        requirements: {
          gpa: "Master's degree in computer science, statistics, or data science with first-class honors.",
          ielts: "Academic IELTS 7.0 or equivalent.",
          gre: "Optional.",
          papers: "Peer-reviewed research in visualization, deep learning, or high-dimensional data analytics.",
          references: "Two academic or research laboratory recommendation letters."
        },
        desc: "Pre-doctoral and doctoral research fellowship focused on immersive visual analytics, explainable artificial intelligence (XAI), and big data modeling in partnership with national science institutions."
      },
      {
        id: 653,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "Ottawa-Carleton Institute for Biology Summer Research Fellowship",
        source: "https://carleton.ca/biology/graduate-studies/",
        funding: "CAD $7,500 16-week summer research stipend with experimental laboratory access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 laboratory traineeship intake)",
        fee: "No fee for internal traineeship",
        tuition: "No tuition charges during summer traineeship appointment.",
        requirements: {
          gpa: "Enrolled in third or fourth year of BSc in Biology, Biochemistry, or Environmental Science with minimum 80% average.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Completed laboratory coursework in cellular biology, molecular genetics, or ecology.",
          references: "One academic referee letter from a faculty lab director."
        },
        desc: "Intensive 16-week mentored summer research traineeship investigating stress physiology, neurobiology, and ecosystem conservation in state-of-the-art laboratory facilities."
      },
      {
        id: 654,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Job",
        title: "Carleton Postdoctoral Fellow in Wireless Networking & 6G Systems",
        source: "https://carleton.ca/postdoctoral-fellows/",
        funding: "Salaried postdoctoral appointment: CAD $60,000 to $68,000/year plus health and dental benefits",
        status: "open-job",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Review begins immediately and continues until filled)",
        fee: "No fee for employment application",
        tuition: "Not applicable; full-time salaried postdoctoral position.",
        requirements: {
          gpa: "PhD in Electrical and Computer Engineering, Telecommunications, or closely aligned discipline within the last 4 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated first-author publication track record in top IEEE transactions or flagship wireless conferences.",
          references: "Three academic reference contacts including PhD thesis supervisor."
        },
        desc: "Full-time academic research appointment investigating high-altitude platform stations (HAPS), cell-free massive MIMO, and intelligent wireless surfaces for beyond-5G/6G communication systems."
      }
    ],
    researchers: [
      {
        id: 297,
        name: "Dr. Halim Yanikomeroglu",
        title: "Chancellor's Professor of Electrical and Computer Engineering",
        subject: "engineering",
        topics: ["Wireless Communications", "6G Systems", "Non-Terrestrial Networks", "Cellular Architecture"],
        source: "https://carleton.ca/engineering-design/profile/halim-yanikomeroglu/",
        summary: "IEEE Fellow and leading telecommunications researcher spearheading 5G/6G architecture, non-terrestrial networks, and integrated terrestrial-satellite wireless communication systems.",
        recruiting: "Not verified"
      },
      {
        id: 298,
        name: "Dr. Fen H. Hampson",
        title: "Chancellor's Professor of International Affairs at NPSIA",
        subject: "social-sciences",
        topics: ["International Relations", "Canadian Foreign Policy", "Global Security", "Conflict Resolution"],
        source: "https://carleton.ca/npsia/people/fen-hampson/",
        summary: "Prominent scholar in international affairs and global conflict resolution, former director of the Norman Paterson School of International Affairs, and Fellow of the Royal Society of Canada.",
        recruiting: "Not verified"
      },
      {
        id: 299,
        name: "Dr. Lenore Fahrig",
        title: "Chancellor's Professor of Biology",
        subject: "biology",
        topics: ["Landscape Ecology", "Conservation Biology", "Habitat Fragmentation", "Biodiversity"],
        source: "https://carleton.ca/biology/people/lenore-fahrig/",
        summary: "Royal Society of Canada Fellow and world-renowned pioneer in landscape ecology, globally acclaimed for foundational research on the ecological impacts of habitat fragmentation and road systems.",
        recruiting: "Not verified"
      }
    ]
  },

  // 2. AUSTRALIA: Flinders University (Row 165)
  {
    institution: "Flinders University",
    shortName: "Flinders",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Adelaide, South Australia, Australia",
    website: "https://flinders.edu.au",
    sourceRow: 165,
    slug: "flinders-university",
    heroEyebrow: "Australia · South Australia · Innovative Research Pioneer & Tonsley Tech Innovation · Reviewed 14 October 2026",
    headline: "Flinders University",
    description: "Flinders University guide: Australian Government RTP Scholarships (AUD $33,000+ stipend), PhD in Medical Biotechnology, Tonsley Robotics, and faculty profiles.",
    overview: "Founded in 1966 in Adelaide, Flinders University is a member of Australia's Innovative Research Universities (IRU) network, internationally renowned for medical research (integrated at Flinders Medical Centre), maritime archaeology, defense technologies and marine robotics at the Tonsley Innovation District, clean technology, and paleontology. Consistently ranked in the world's top 2% of universities, Flinders offers comprehensive graduate research scholarships and state-of-the-art research hubs.",
    admissions: {
      masters: "Recognized Bachelor's degree (Honours Class IIA or higher) with a minimum Grade Point Average of 5.0 on a 7.0 scale (equivalent to 70% or 3.0/4.0 GPA) in an appropriate field.",
      phd: "Four-year Bachelor's degree with First Class Honours, or a research Master's degree with a significant thesis component demonstrating rigorous research capability.",
      language: "Academic IELTS 6.5 overall (no individual band score below 6.0) or TOEFL iBT 79 (writing 21, speaking 18); medical and legal research degrees require IELTS 7.0 (minimum 6.5).",
      proposal: "A 1,000 to 1,500 word formal research proposal outlining research questions, literature review, proposed methodology, and identified Flinders supervisory team.",
      appFee: "AUD $100 international student application processing fee submitted via the Flinders University online application system.",
      documents: "Certified academic transcripts, degree parchment copies, detailed curriculum vitae, evidence of academic writing, and two academic referee reports."
    },
    tuitionText: "International postgraduate research candidates selected for the Australian Government Research Training Program (AGRTP) or Flinders University Research Scholarship (FURS) receive 100% full tuition fee offset sponsorships for up to 3.5 years, along with an annual tax-free living stipend of AUD $33,500 to $36,000 per year and overseas student health cover (OSHC).",
    opportunities: [
      {
        id: 655,
        subject: "biology",
        subjects: ["biology", "engineering", "environment"],
        type: "Scholarship",
        title: "Flinders Australian Government Research Training Program (AGRTP) International Scholarships",
        source: "https://www.flinders.edu.au/scholarships-prizes-financial-aid/research-scholarships",
        funding: "Fully funded: AUD $33,500/year tax-free stipend for up to 3.5 years, full international tuition fee offset, and OSHC health coverage",
        status: "open-scholarship",
        deadline: "2027-08-06",
        deadlineText: "August 6, 2027 (Annual international research scholarship round for 2028 commencement)",
        fee: "AUD $100 application fee",
        tuition: "Full international tuition waiver provided through Australian Commonwealth RTP.",
        requirements: {
          gpa: "First Class Honours (H1) or equivalent high distinction postgraduate research Master's degree.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-test) or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Demonstrated research excellence, peer-reviewed articles, or conference proceedings.",
          references: "Two confidential academic referee reports."
        },
        desc: "Premier Commonwealth and university-funded doctoral scholarship providing complete financial independence, tuition waivers, and health coverage for outstanding international research scholars."
      },
      {
        id: 656,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "PhD",
        title: "Flinders PhD in Maritime Archaeology & Underwater Cultural Heritage",
        source: "https://www.flinders.edu.au/study/courses/postgraduate-doctor-philosophy-maritime-archaeology",
        funding: "RTP-equivalent doctoral stipend of AUD $33,500/year plus specialized diving and field equipment support",
        status: "open-phd",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Semester 1, 2027 intake deadline)",
        fee: "AUD $100 application fee",
        tuition: "Full international research tuition offset awarded to successful scholarship candidates.",
        requirements: {
          gpa: "Four-year Bachelor's Honours (Class 1 or 2A) or Master's in Archaeology, Anthropology, or Heritage Studies.",
          ielts: "Academic IELTS 6.5 overall with 6.5 in writing and reading.",
          gre: "Not required.",
          papers: "Sample thesis chapter or publication in archaeological or cultural heritage topics.",
          references: "Two academic referee appraisals."
        },
        desc: "Internationally renowned doctoral training in maritime archaeology, underwater heritage management, and digital 3D shipwreck documentation across Australia and the Indo-Pacific."
      },
      {
        id: 657,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Flinders Master of Science (Computer Science) - Artificial Intelligence & Cybersecurity",
        source: "https://www.flinders.edu.au/study/courses/postgraduate-master-science-computer-science",
        funding: "Vice-Chancellor's International Postgraduate Scholarships offering 50% tuition reduction for academic merit",
        status: "open-master",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Semester 1 2027 commencement)",
        fee: "AUD $100 application fee",
        tuition: "AUD $39,200/year standard international tuition before scholarship reductions.",
        requirements: {
          gpa: "Recognized Bachelor's degree in computing, engineering, or related discipline with minimum 65% average.",
          ielts: "Academic IELTS 6.0 overall with minimum 6.0 in speaking and writing.",
          gre: "Not required.",
          papers: "Demonstrated programming competence in Python, C++, or Java.",
          references: "One academic reference letter."
        },
        desc: "Advanced two-year coursework and research Master's degree delivered at the Tonsley Innovation District, covering machine learning, autonomous systems, and advanced network cybersecurity."
      },
      {
        id: 658,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Flinders PhD in Medical Biotechnology & Nanotechnology",
        source: "https://www.flinders.edu.au/study/courses/postgraduate-doctor-philosophy-medical-biotechnology",
        funding: "Guaranteed 3.5-year stipend of AUD $34,000/year plus laboratory consumables allowance",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Mid-year intake scholarship review)",
        fee: "AUD $100 application fee",
        tuition: "Full tuition covered under university research sponsorship.",
        requirements: {
          gpa: "First Class Honours degree in biotechnology, biochemistry, pharmacology, or biomedical engineering.",
          ielts: "Academic IELTS 6.5 (minimum 6.0 in each band).",
          gre: "Not required.",
          papers: "Previous research experience in mammalian cell culture, drug formulation, or nanoparticle synthesis.",
          references: "Two academic referee reports from previous thesis advisors."
        },
        desc: "Doctoral research conducted within Flinders Medical Centre and the Institute for Nanoscale Science and Technology, designing targeted drug delivery systems and point-of-care clinical diagnostics."
      },
      {
        id: 659,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        title: "Tonsley Innovation District Robotics & Autonomous Systems Research Fellowship",
        source: "https://www.flinders.edu.au/research/tonsley",
        funding: "AUD $35,000/year tax-exempt research fellowship plus project funding through the Australian Research Council",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Project fellowship review)",
        fee: "No application fee for post-admission fellowship",
        tuition: "Full tuition sponsorship provided.",
        requirements: {
          gpa: "Master's by Research or Honours Class 1 in Robotics, Mechatronics, or Autonomous Systems.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Published works in field robotics, SLAM algorithms, or underwater unmanned vehicles.",
          references: "Two research references."
        },
        desc: "Applied robotics research fellowship situated in South Australia's Tonsley high-tech precinct, developing robotic manipulation, marine inspection drones, and defense manufacturing automation."
      },
      {
        id: 660,
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        type: "Internship",
        title: "Flinders Institute for Nanoscale Science and Technology Summer Research Internship",
        source: "https://www.flinders.edu.au/nanoscale-science-technology",
        funding: "AUD $4,800 8-week summer research bursary with laboratory access",
        status: "open-internship",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Summer vacation research scholarship round)",
        fee: "No application fee",
        tuition: "Zero tuition charges during summer traineeship.",
        requirements: {
          gpa: "Enrolled in third or fourth year of BSc in Chemistry, Physics, or Materials Science with minimum GPA 5.5/7.0.",
          ielts: "Strong scientific English language skills.",
          gre: "Not applicable.",
          papers: "Demonstrated lab safety and chemical laboratory coursework proficiency.",
          references: "One academic referee letter."
        },
        desc: "Eight-week intensive summer vacation research placement working directly with leading researchers in clean vortex fluidic technology, functional graphene materials, and surface chemistry."
      },
      {
        id: 661,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Job",
        title: "Flinders Postdoctoral Research Fellow in Marine Biology & Coastal Ecology",
        source: "https://www.flinders.edu.au/jobs",
        funding: "Salaried Level A/B Postdoctoral Fellow: AUD $88,000 to $104,000/year plus 17% superannuation",
        status: "open-job",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Position open until filled)",
        fee: "No employment application fee",
        tuition: "Not applicable; salaried university academic staff position.",
        requirements: {
          gpa: "PhD in Marine Ecology, Biological Oceanography, or related field awarded within the last 5 years.",
          ielts: "Professional English proficiency.",
          gre: "Not applicable.",
          papers: "Proven publication record in high-impact marine science journals; scientific diving certification advantageous.",
          references: "Three professional academic referees."
        },
        desc: "Full-time research role investigating temperate reef resilience, coastal seagrass restoration, and environmental DNA (eDNA) monitoring along South Australia's Southern Ocean coastline."
      }
    ],
    researchers: [
      {
        id: 300,
        name: "Dr. John Long",
        title: "Strategic Professor in Palaeontology",
        subject: "biology",
        topics: ["Palaeontology", "Vertebrate Evolution", "Devonian Fossil Fauna", "Ancient Biology"],
        source: "https://www.flinders.edu.au/people/john.long",
        summary: "World-renowned paleontologist celebrated for discovering the origin of internal fertilization in vertebrates and uncovering primitive Devonian fossils that redefine our understanding of evolution.",
        recruiting: "Not verified"
      },
      {
        id: 301,
        name: "Dr. Colin Raston",
        title: "Professor of Clean Technology and Green Chemistry",
        subject: "chemistry",
        topics: ["Vortex Fluidic Technology", "Green Chemistry", "Nanomaterials", "Protein Refolding"],
        source: "https://www.flinders.edu.au/people/colin.raston",
        summary: "Officer of the Order of Australia (AO) and pioneer of the vortex fluidic device (VFD), revolutionizing protein unboiling, microfluidics, and green chemical manufacturing.",
        recruiting: "Not verified"
      },
      {
        id: 302,
        name: "Dr. Claire Smith",
        title: "Professor of Archaeology",
        subject: "social-sciences",
        topics: ["Indigenous Archaeology", "Rock Art", "Cultural Heritage", "Global Indigenous Rights"],
        source: "https://www.flinders.edu.au/people/claire.smith",
        summary: "Former President of the World Archaeological Congress (WAC), internationally renowned for indigenous Australian rock art research and ethical methodologies in archaeological collaboration.",
        recruiting: "Not verified"
      }
    ]
  },

  // 3. GERMANY: University of Hamburg (Row 406)
  {
    institution: "University of Hamburg",
    shortName: "Uni Hamburg",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Hamburg, Germany",
    website: "https://www.uni-hamburg.de",
    sourceRow: 406,
    slug: "university-of-hamburg",
    heroEyebrow: "Germany · Hamburg · University of Excellence & DESY Particle Research Partner · Reviewed 14 October 2026",
    headline: "University of Hamburg (Universität Hamburg)",
    description: "University of Hamburg guide: Zero tuition, CLICCS Climate Science Doctoral Fellowships, DESY Quantum Matter PhD, Intelligent Adaptive Systems, and faculty profiles.",
    overview: "Founded in 1919, the University of Hamburg (Universität Hamburg - UHH) is one of Germany's premier Universities of Excellence under the German Excellence Strategy. UHH boasts four internationally acclaimed Clusters of Excellence: CLICCS (Climate, Climatic Change, and Society), CUI: Advanced Imaging of Matter, the Cluster of Excellence Quantum Universe, and Understanding Written Artefacts (UWA). Partnering closely with the DESY synchrotron radiation research centre, Max Planck Institutes, and the European XFEL, UHH provides tuition-free graduate education and premier research infrastructure.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS credits) in a relevant subject area with an above-average final grade (German grade 2.5 or better, equivalent to 75%+ or 3.0/4.0 GPA).",
      phd: "Recognized Master's degree (minimum 300 ECTS aggregate) with a thesis graded 'good' (gut) or 'very good' (sehr gut); written confirmation of supervision (Betreuungszusage) from a UHH professor.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all components) or TOEFL iBT 90 for English-taught programs; German C1 (DSH-2 / TestDaF 4x4) for German-medium degree tracks.",
      proposal: "A 5-page doctoral research expose detailing theoretical foundation, research questions, methodological approach, and preliminary timetable.",
      appFee: "€0 application fee; no tuition fees charged at public German research universities.",
      documents: "Bachelor/Master diploma certificates, academic transcripts, curriculum vitae, research expose, and professor supervision confirmation agreement."
    },
    tuitionText: "Zero tuition fees are charged at the University of Hamburg for domestic and international students alike. Students pay only a nominal semester contribution (Semesterbeitrag) of approximately €340 per semester, which includes full regional public transit access (Deutschlandticket) throughout Hamburg and Germany. Doctoral researchers are supported via TV-L E13 salaried positions (€48,000 to €54,000/year gross).",
    opportunities: [
      {
        id: 662,
        subject: "environment",
        subjects: ["environment", "social-sciences", "physics"],
        type: "Scholarship",
        title: "Hamburg CLICCS Doctoral Fellowships in Climate, Climatic Change, and Society",
        source: "https://www.cliccs.uni-hamburg.de/career/doctoral-students.html",
        funding: "Salaried TV-L E13 contract (65-75%): approx. €32,000 to €38,000/year gross salary plus research travel funds; zero tuition",
        status: "open-scholarship",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Annual international doctoral intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition; only standard semester contribution (€340/term including public transit).",
        requirements: {
          gpa: "Master's degree in earth sciences, meteorology, economics, sociology, or environmental sciences with German grade 2.0 or better.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Demonstrated interest in climate feedback mechanisms, societal decarbonization, or climate risk.",
          references: "Two academic recommendation letters."
        },
        desc: "Doctoral funding at Germany's Cluster of Excellence CLICCS, investigating which climate futures are plausible, socio-ecological transitions, and global climate governance."
      },
      {
        id: 663,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "PhD",
        title: "Uni Hamburg PhD in Physics - Photon Science & Quantum Matter at DESY",
        source: "https://www.physik.uni-hamburg.de/en/forschung/cui.html",
        funding: "Full TV-L E13 (75%) research staff position: approx. €38,000/year gross plus social insurance and pension; zero tuition",
        status: "open-phd",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Spring doctoral review round)",
        fee: "€0 application fee",
        tuition: "€0 tuition at public German universities.",
        requirements: {
          gpa: "Master of Science in Physics, Optics, or Materials Science with high honours.",
          ielts: "Proficient scientific English (IELTS 6.5 or equivalent).",
          gre: "Not required.",
          papers: "Master's thesis in laser physics, condensed matter, or synchrotron radiation.",
          references: "Two letters of academic evaluation."
        },
        desc: "Cutting-edge doctoral research at the CUI: Advanced Imaging of Matter Cluster of Excellence, utilizing DESY's PETRA III, FLASH, and European XFEL to image atomic motion in real time."
      },
      {
        id: 664,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Uni Hamburg Master of Science (MSc) in Intelligent Adaptive Systems (English-Taught)",
        source: "https://www.inf.uni-hamburg.de/en/studies/master/ias.html",
        funding: "DAAD Master Studies Scholarships and Deutschlandstipendium (€300/month merit stipend); zero tuition",
        status: "open-master",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (International applicant deadline for Winter semester)",
        fee: "€0 application fee",
        tuition: "€0 tuition; €340 semester transit fee only.",
        requirements: {
          gpa: "BSc in Computer Science or closely related field with minimum 60 ECTS in CS and mathematics.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework in algorithms, data structures, and software engineering.",
          references: "One academic letter of recommendation."
        },
        desc: "Tuition-free two-year international Master of Science in English focusing on artificial intelligence, neural robotics, bio-inspired computing, and machine learning."
      },
      {
        id: 665,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Uni Hamburg PhD in Molecular Biology & Structural Biochemistry at CSSB",
        source: "https://www.biologie.uni-hamburg.de/en/forschung/promovieren.html",
        funding: "TV-L E13 (65%) salaried position: €33,000/year gross plus laboratory access; zero tuition",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Doctoral intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition.",
        requirements: {
          gpa: "Master's in Biochemistry, Molecular Biology, Biophysics, or Biotechnology.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Laboratory experience in cryo-EM, protein crystallography, or molecular pathogen biology.",
          references: "Two academic referee appraisals."
        },
        desc: "Structural biology doctoral training conducted at the Centre for Structural Systems Biology (CSSB) on the DESY campus, deciphering molecular mechanisms of human viral and bacterial pathogens."
      },
      {
        id: 666,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Research",
        title: "Centre for the Study of Manuscript Cultures (CSMC) Research Associate",
        source: "https://www.csmc.uni-hamburg.de/vacancies.html",
        funding: "TV-L E13 (100%) full salaried research post: approx. €52,000/year gross plus research travel grants",
        status: "open-research",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual fellowship cycle)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried research position.",
        requirements: {
          gpa: "PhD in Humanities, History, Philology, or Cultural Heritage Science.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Demonstrated expertise in manuscript studies, material analysis, or historical artifacts.",
          references: "Two academic reference letters."
        },
        desc: "Interdisciplinary research within Germany's premier Cluster of Excellence Understanding Written Artefacts, applying scientific imaging, multispectral scanning, and material analysis to historical manuscripts."
      },
      {
        id: 667,
        subject: "physics",
        subjects: ["physics"],
        type: "Internship",
        title: "Hamburg Quantum Matter & Ultrafast Imaging Summer Traineeship",
        source: "https://www.cui-advanced.uni-hamburg.de/en/early-career.html",
        funding: "€1,200/month living stipend for 8 weeks plus laboratory access and laser safety certification",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship round)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Physics, Nanotechnology, or Chemistry with excellent grades.",
          ielts: "Good English language proficiency.",
          gre: "Not applicable.",
          papers: "Completed coursework in quantum mechanics, optics, or solid-state physics.",
          references: "One professor recommendation letter."
        },
        desc: "Two-month summer research internship in ultrafast physics laboratories, working alongside laser scientists and quantum matter experimentalists on the Bahrenfeld science campus."
      },
      {
        id: 668,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Job",
        title: "Postdoctoral Research Associate in Marine Ecosystem Dynamics & Ocean Biogeochemistry",
        source: "https://www.cen.uni-hamburg.de/en/about-cen/jobs.html",
        funding: "Full TV-L E13 (100%) postdoctoral salary: approx. €52,000 to €58,000/year gross with public sector benefits",
        status: "open-job",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Review begins upon receipt)",
        fee: "€0 application fee",
        tuition: "Not applicable; full-time salaried academic staff appointment.",
        requirements: {
          gpa: "PhD in Oceanography, Marine Science, Biogeochemistry, or Climate Modeling.",
          ielts: "Professional English fluency.",
          gre: "Not applicable.",
          papers: "Track record of international peer-reviewed publications and oceanographic field research experience.",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral appointment at the Center for Earth System Research and Sustainability (CEN), developing coupled physical-biogeochemical models to assess the impact of climate change on North Sea and North Atlantic ecosystems."
      }
    ],
    researchers: [
      {
        id: 303,
        name: "Dr. Franz Kärtner",
        title: "Professor of Physics and Head of Ultrafast Optics",
        subject: "physics",
        topics: ["Ultrafast Optics", "Attosecond Science", "Laser Particle Acceleration", "Photonics"],
        source: "https://www.physik.uni-hamburg.de/en/hp/kaertner.html",
        summary: "World-renowned physicist leading research at the Center for Free-Electron Laser Science (CFEL) at DESY, celebrated for breakthroughs in few-cycle optical pulse generation and attosecond precision timing.",
        recruiting: "Not verified"
      },
      {
        id: 304,
        name: "Dr. Detlef Stammer",
        title: "Professor of Physical Oceanography and Remote Sensing",
        subject: "environment",
        topics: ["Oceanography", "Sea Level Rise", "Climate Modelling", "Satellite Remote Sensing"],
        source: "https://www.cen.uni-hamburg.de/en/about-cen/people/detlef-stammer.html",
        summary: "Dean of Mathematics, Informatics and Natural Sciences and chair of the World Climate Research Programme (WCRP) Joint Scientific Committee, internationally acclaimed for global sea level research.",
        recruiting: "Not verified"
      },
      {
        id: 305,
        name: "Dr. Michael Schefczyk",
        title: "Professor of Practical Philosophy",
        subject: "social-sciences",
        topics: ["Ethics of Technology", "Distributive Justice", "Philosophy of Economics", "Climate Ethics"],
        source: "https://www.philosophie.uni-hamburg.de/philosophisches-seminar/personen/schefczyk.html",
        summary: "Leading philosopher researching intergenerational climate justice, economic distribution ethics, and moral responsibility in artificial intelligence and automation.",
        recruiting: "Not verified"
      }
    ]
  },

  // 4. ITALY: University of Bologna (Row 507)
  {
    institution: "University of Bologna",
    shortName: "Unibo",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bologna, Emilia-Romagna, Italy",
    website: "https://www.unibo.it",
    sourceRow: 507,
    slug: "university-of-bologna",
    heroEyebrow: "Italy · Emilia-Romagna · World's Oldest University & EuroHPC Leonardo Supercomputing Hub · Reviewed 14 October 2026",
    headline: "University of Bologna (Alma Mater Studiorum - Università di Bologna)",
    description: "University of Bologna guide: ER.GO state scholarships (€8,000+ stipend), PhD in Data Science and Computation, AI Master's, Leonardo supercomputing, and faculty profiles.",
    overview: "Founded in 1088, the Alma Mater Studiorum - Università di Bologna is universally recognized as the oldest continuously operating university in the Western world. Today, Unibo is Italy's leading multidisciplinary research university, hosting the European High Performance Computing Joint Undertaking (EuroHPC Leonardo supercomputer) at the Bologna Technopole, internationally prestigious faculties of engineering, sciences, agriculture, and humanities, and expansive doctoral programs funded through Italian PNRR and EU Horizon Europe initiatives.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years, equivalent to Italian Laurea) with strong academic standing (minimum 70% or 3.0/4.0 GPA); subject-specific curricular prerequisites in mathematics, computing, or humanities.",
      phd: "Recognized second-cycle Master's degree (Italian Laurea Magistrale or equivalent) with high honors; passing score in the national competitive public doctoral entrance exam (valutazione titoli e colloquio).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 85; B2 English proficiency certificate accepted for several English-taught Laurea Magistrale programs.",
      proposal: "A formal doctoral research project (progetto di ricerca) of 3,000 to 5,000 words detailing background literature, objectives, methodology, work packages, and bibliography.",
      appFee: "€42 to €52 administrative application fee submitted via the Unibo online Studenti Online portal.",
      documents: "Graduation diploma with official translation, academic transcript of records, detailed curriculum vitae, research project proposal, and 2 letters of reference."
    },
    tuitionText: "Tuition fees at the University of Bologna are progressively calculated based on family economic indicators (ISEE Parificato). For international students from non-OECD nations, tuition is typically capped at €156 to €1,000 per year. Admitted doctoral candidates receive fully funded state scholarships of €1,400 net per month (€16,243 to €19,000/year gross) plus a 50% stipend increase during approved research stays abroad.",
    opportunities: [
      {
        id: 669,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Scholarship",
        title: "Unibo International PhD Scholarships in Data Science and Computation",
        source: "https://phd.unibo.it/datasciencecomputation/en",
        funding: "Fully funded: €1,400 net/month for 3 years, 50% stipend increase for stays abroad, and €3,000 research travel grant; zero tuition",
        status: "open-scholarship",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual Italian National Doctoral Call - 43rd Cycle)",
        fee: "€42 public competition application fee",
        tuition: "100% full tuition waiver for all admitted doctoral fellowship holders.",
        requirements: {
          gpa: "Second-cycle Master's degree in Computer Science, Mathematics, Physics, Statistics, or Engineering with high marks (105/110 or above).",
          ielts: "Academic IELTS 6.5 or CEFR B2 level certificate.",
          gre: "Not required.",
          papers: "High academic merit, thesis abstract, and proposed research plan for high-performance computing.",
          references: "Two academic recommendation letters submitted online."
        },
        desc: "Doctoral research program joint with the EuroHPC Leonardo supercomputing center and CINECA, focusing on scalable deep learning, quantum computing algorithms, and exascale simulation."
      },
      {
        id: 670,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Unibo Master of Science (Laurea Magistrale) in Artificial Intelligence (English-Taught)",
        source: "https://corsi.unibo.it/2cycle/artificial-intelligence",
        funding: "Unibo Action 1 & 2 study grants (€4,500/year) and ER.GO regional full housing and meal scholarships",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-EU international intake round 2)",
        fee: "€50 pre-enrolment evaluation fee",
        tuition: "Progressive income-based tuition: €156 to €2,800/year based on ISEE Parificato.",
        requirements: {
          gpa: "BSc in Computer Science, Computer Engineering, or Mathematics with strong GPA (minimum 75%).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated coursework in probability, linear algebra, algorithms, and programming languages.",
          references: "One academic referee letter."
        },
        desc: "Premier two-year international Master of Science in AI taught entirely in English, covering symbolic AI, neural networks, computer vision, natural language processing, and autonomous robotics."
      },
      {
        id: 671,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "Unibo PhD in Automotive Engineering for Intelligent Mobility (MUNER Consortium)",
        source: "https://phd.unibo.it/automotive/en",
        funding: "Full 3-year doctoral fellowship of €17,500/year gross funded by Motorvehicle University of Emilia-Romagna (Ferrari, Lamborghini, Ducati)",
        status: "open-phd",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (MUNER doctoral competition)",
        fee: "€42 competition fee",
        tuition: "€0 tuition; full waiver for all admitted doctoral fellows.",
        requirements: {
          gpa: "Master's degree in Mechanical, Automotive, Electrical, or Electronic Engineering with minimum 100/110.",
          ielts: "English B2/C1 proficiency (IELTS 6.5 or equivalent).",
          gre: "Not required.",
          papers: "Research project on electric powertrains, autonomous vehicle perception, or vehicular telemetry.",
          references: "Two academic or industrial research references."
        },
        desc: "Doctoral research conducted within the MUNER consortium linking Bologna with Ferrari, Lamborghini, Maserati, and Ducati, developing electrified propulsion and connected autonomous vehicles."
      },
      {
        id: 672,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        title: "Unibo PhD in Agricultural, Environmental and Food Science and Technology (STAAA)",
        source: "https://phd.unibo.it/staaa/en",
        funding: "Italian PNRR & university fellowship: €16,243/year plus 50% mobility increase for international field placements",
        status: "open-phd",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 (Annual public competition deadline)",
        fee: "€42 application fee",
        tuition: "100% full tuition waiver.",
        requirements: {
          gpa: "Master of Science in Agronomy, Environmental Science, Food Technology, or Biotechnology.",
          ielts: "B2 English proficiency.",
          gre: "Not required.",
          papers: "Original research proposal on precision agriculture, soil carbon sequestration, or sustainable food systems.",
          references: "Two academic referee letters."
        },
        desc: "Three-year research doctorate investigating sustainable agricultural practices, agroecological management, climate adaptation in Mediterranean cropping systems, and food safety."
      },
      {
        id: 673,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "Alma AI (Bologna Institute for Artificial Intelligence) Postdoctoral Fellowship",
        source: "https://almaai.unibo.it/en",
        funding: "Assegno di Ricerca (Research Fellowship): €24,000 to €28,000/year net plus travel allowances",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Research grant review round)",
        fee: "€0 application fee",
        tuition: "Not applicable; research fellowship appointment.",
        requirements: {
          gpa: "PhD in Computer Science, Artificial Intelligence, or Operations Research.",
          ielts: "Fluent working English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in IJCAI, AAAI, NeurIPS, or ICML conferences.",
          references: "Two professional reference letters."
        },
        desc: "Postdoctoral research fellowship at Alma AI, investigating neuro-symbolic artificial intelligence, ethical machine learning constraints, and real-time decision optimization."
      },
      {
        id: 674,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "Bologna European Molecular Biology & Medical Genetics Summer Traineeship",
        source: "https://dimes.unibo.it/en",
        funding: "€1,000/month living stipend for 8 weeks with wet-lab genetic sequencing access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer 2027 laboratory traineeship call)",
        fee: "€0 application fee",
        tuition: "No tuition charges during traineeship.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Medical Biotechnology, Biology, or Pharmacy with excellent marks.",
          ielts: "English B2 level.",
          gre: "Not applicable.",
          papers: "Laboratory training in PCR, gel electrophoresis, or mammalian cell culture.",
          references: "One professor recommendation letter."
        },
        desc: "Eight-week summer research placement at the Department of Medical and Surgical Sciences (DIMES) in Bologna, investigating cancer genetics, non-coding RNA, and targeted therapies."
      },
      {
        id: 675,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Job",
        title: "Unibo Assistant Professor (RTD-A) in Sustainable Chemical Engineering & Catalysis",
        source: "https://bandi.unibo.it/docenti/rtd",
        funding: "Full 3-year fixed-term Assistant Professor contract: €38,000 to €43,000/year gross with INPS pension coverage",
        status: "open-job",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Public academic competition)",
        fee: "€0 application fee",
        tuition: "Not applicable; junior faculty academic position.",
        requirements: {
          gpa: "PhD in Chemical Engineering, Chemistry, or Industrial Chemistry awarded at least 1 year prior.",
          ielts: "Fluent Italian and English teaching and research capabilities.",
          gre: "Not applicable.",
          papers: "Minimum 8 peer-reviewed publications in Q1 chemical engineering and catalysis journals.",
          references: "Three academic reference contacts."
        },
        desc: "Three-year fixed-term Assistant Professorship (Ricercatore a Tempo Determinato Tipologia A) developing electrocatalytic CO2 reduction systems and green industrial chemical synthesis."
      }
    ],
    researchers: [
      {
        id: 306,
        name: "Dr. Michela Milano",
        title: "Full Professor of Computer Science and Director of Alma AI",
        subject: "computer-science",
        topics: ["Artificial Intelligence", "Constraint Programming", "Decision Support Systems", "Ethics in AI"],
        source: "https://www.unibo.it/sitoweb/michela.milano/en",
        summary: "Elected Fellow of the European Association for Artificial Intelligence (EurAI) and Director of the Alma Mater Research Institute for Human-Centered Artificial Intelligence (Alma AI).",
        recruiting: "Not verified"
      },
      {
        id: 307,
        name: "Dr. Davide Viaggi",
        title: "Full Professor of Agricultural Economics and Rural Policy",
        subject: "environment",
        topics: ["Bioeconomy", "Agricultural Economics", "Water Policy", "Circular Economy"],
        source: "https://www.unibo.it/sitoweb/davide.viaggi/en",
        summary: "Leading agricultural and environmental economist coordinating multiple European Union Horizon Europe projects on bioeconomy transitions, circular agriculture, and water resource economics.",
        recruiting: "Not verified"
      },
      {
        id: 308,
        name: "Dr. Vincenzo Balzani",
        title: "Emeritus Professor of Chemistry",
        subject: "chemistry",
        topics: ["Photochemistry", "Molecular Machines", "Supramolecular Chemistry", "Solar Energy Conversion"],
        source: "https://www.unibo.it/sitoweb/vincenzo.balzani/en",
        summary: "One of Italy's most highly cited chemists worldwide, pioneer of molecular nanotechnology and artificial molecular machines, and recipient of the Leonardo da Vinci Award and Nature Lifetime Mentorship Award.",
        recruiting: "Not verified"
      }
    ]
  },

  // 5. USA: Cornell University (Row 658)
  {
    institution: "Cornell University",
    shortName: "Cornell",
    countryId: "usa",
    countryLabel: "United States",
    location: "Ithaca, New York, United States",
    website: "https://www.cornell.edu",
    sourceRow: 658,
    slug: "cornell-university",
    heroEyebrow: "United States · New York · Ivy League Powerhouse & Land-Grant Pioneer · Reviewed 14 October 2026",
    headline: "Cornell University",
    description: "Cornell University guide: 100% fully funded PhD packages ($45,000+ stipend), Bowers CIS Computer Science PhD, CHESS Synchrotron, Lab of Ornithology, and faculty profiles.",
    overview: "Founded in 1865 by Ezra Cornell and Andrew Dickson White, Cornell University is an Ivy League research university and the land-grant institution of New York State. Cornell is celebrated globally for extraordinary discoveries across computing and information science (Cornell Bowers CIS), engineering, the world-leading Cornell Lab of Ornithology, physics and synchrotron science (Cornell High Energy Synchrotron Source - CHESS), and the cutting-edge Cornell Tech campus in New York City. Cornell guarantees multi-year full funding packages for all admitted doctoral students.",
    admissions: {
      masters: "Accredited Bachelor's degree with a strong academic record (typically minimum 3.5/4.0 GPA or First Class Honours); prerequisite technical coursework in relevant engineering or scientific fields.",
      phd: "Recognized Bachelor's or Master's degree with superior academic achievement; demonstrated capacity for independent research through publications or honors theses.",
      language: "Academic IELTS 7.0 overall (minimum 7.0 in speaking) or TOEFL iBT 100 (minimum 22 writing, 24 speaking, 20 reading and listening); higher for Computer Science.",
      proposal: "A 2 to 3 page Statement of Purpose outlining research problems of interest, academic preparation, faculty members with whom the applicant wishes to work, and long-term career goals.",
      appFee: "$105 non-refundable application fee submitted via the Cornell Graduate School application system (fee waivers available for eligible applicants).",
      documents: "Complete official academic transcripts, curriculum vitae, 3 letters of academic recommendation, statement of purpose, and GRE scores (where specified by individual graduate fields)."
    },
    tuitionText: "Cornell University provides guaranteed multi-year funding packages to all admitted PhD students in good academic standing. The standard doctoral package covers 100% of full tuition ($29,500/year equivalent graduate rate), full individual student health insurance (SHIP, valued at over $3,800/year), and an annual living stipend of $44,500 to $48,000 for 9 to 12 months (combining Cornell fellowships, graduate research assistantships, and teaching assistantships).",
    opportunities: [
      {
        id: 676,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology"],
        type: "Scholarship",
        title: "Cornell University Provost Diversity Fellowships & Doctoral Fellowship Packages",
        source: "https://gradschool.cornell.edu/financial-support/fellowships/",
        funding: "100% Fully Funded: Annual living stipend of $45,000 to $48,000/year, full tuition coverage ($29,500/year), and Cornell SHIP health insurance for 5 years",
        status: "open-scholarship",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Priority PhD admission and fellowship nomination deadline)",
        fee: "$105 application fee (waiver available)",
        tuition: "100% covered by university doctoral fellowship awards.",
        requirements: {
          gpa: "Minimum 3.7/4.0 GPA (or equivalent first-class academic standing) in prior undergraduate and graduate studies.",
          ielts: "Academic IELTS 7.5 overall or TOEFL iBT 105.",
          gre: "Optional or field-dependent.",
          papers: "Exemplary academic trajectory, prior research papers, or distinguished undergraduate thesis.",
          references: "Three detailed academic letters of recommendation."
        },
        desc: "Cornell's flagship university-wide doctoral support guarantee, providing multi-year living stipends, comprehensive health insurance, and full tuition waivers for exceptional doctoral scholars across all disciplines."
      },
      {
        id: 677,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        title: "Cornell Bowers CIS PhD in Computer Science (100% Fully Funded)",
        source: "https://www.cs.cornell.edu/phd",
        funding: "100% Fully funded for 5 years: $46,200 annual stipend plus full tuition waiver and comprehensive health insurance",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual PhD intake deadline for Fall 2027)",
        fee: "$105 application fee",
        tuition: "Full tuition waiver provided by Bowers College of Computing and Information Science.",
        requirements: {
          gpa: "Strong academic foundation in computer science, mathematics, or related quantitative discipline (typically 3.8+ GPA).",
          ielts: "Academic IELTS 7.5 (minimum 7.0 in all bands) or TOEFL iBT 105.",
          gre: "GRE General Test optional.",
          papers: "Demonstrated research excellence, conference publications, or rigorous algorithmic open-source work.",
          references: "Three academic reference letters from faculty familiar with research ability."
        },
        desc: "Consistently ranked among the world's top 5 computer science departments, offering doctoral training in theoretical computer science, machine learning, artificial intelligence, robotics, systems, and programming languages."
      },
      {
        id: 678,
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        type: "PhD",
        title: "Cornell PhD in Applied Physics & Synchrotron Radiation (100% Fully Funded)",
        source: "https://www.aep.cornell.edu/aep/academics/graduate-programs/phd-applied-physics",
        funding: "100% Fully funded: $45,500 annual stipend, complete tuition coverage, and Cornell health insurance",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Fall 2027 admission)",
        fee: "$105 application fee",
        tuition: "Full tuition waiver included with doctoral assistantship.",
        requirements: {
          gpa: "Bachelor's degree in physics, applied physics, materials science, or electrical engineering (minimum 3.6 GPA).",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE Physics subject test recommended.",
          papers: "Undergraduate laboratory research in optics, condensed matter, or quantum materials.",
          references: "Three letters of recommendation."
        },
        desc: "World-class doctoral research at the intersection of fundamental physics and applied technology, utilizing the Cornell High Energy Synchrotron Source (CHESS) and the Kavli Institute at Cornell for Nanoscale Science."
      },
      {
        id: 679,
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "Master",
        title: "Cornell Master of Engineering (MEng) in Biomedical Engineering",
        source: "https://www.bme.cornell.edu/bme/programs/graduate-programs/meng-biomedical-engineering",
        funding: "Partial departmental merit awards ranging from $10,000 to $20,000 toward professional tuition",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission priority deadline)",
        fee: "$105 application fee",
        tuition: "$65,204 annual tuition for professional MEng programs.",
        requirements: {
          gpa: "Bachelor's degree in engineering or quantitative physical sciences with minimum 3.3 GPA.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE optional.",
          papers: "Design coursework or clinical internship experience in biomedical instrumentation or biomaterials.",
          references: "Two academic or industry reference letters."
        },
        desc: "Accelerated one-year professional engineering degree combining advanced bioengineering coursework with an intensive industry-sponsored medical device design project."
      },
      {
        id: 680,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Research",
        title: "Cornell Lab of Ornithology Postdoctoral Fellowship in Biodiversity Conservation",
        source: "https://www.birds.cornell.edu/home/about/fellowships/",
        funding: "Annual salary of $66,000 plus full Cornell benefits package and $10,000 annual research fund",
        status: "open-research",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Annual Postdoctoral Fellowship competition)",
        fee: "$0 application fee",
        tuition: "Not applicable; salaried postdoctoral fellowship.",
        requirements: {
          gpa: "PhD in Ecology, Evolutionary Biology, Conservation Science, or Computational Biology.",
          ielts: "Proficient scientific English.",
          gre: "Not applicable.",
          papers: "Strong first-author publication track record in macroecology, bioacoustics, or citizen science data analytics (eBird).",
          references: "Three letters of recommendation."
        },
        desc: "Prestigious postdoctoral appointment at the world-renowned Cornell Lab of Ornithology, leveraging global eBird data, AI bioacoustics, and computational modeling to guide global avian and biodiversity conservation."
      },
      {
        id: 681,
        subject: "physics",
        subjects: ["physics"],
        type: "Internship",
        title: "Cornell High Energy Synchrotron Source (CHESS) Summer Research Internship",
        source: "https://www.chess.cornell.edu/education-outreach/summer-undergraduate-research",
        funding: "$6,500 10-week summer stipend plus on-campus housing and travel allowance",
        status: "open-internship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer 2027 undergraduate research program)",
        fee: "$0 application fee",
        tuition: "$0 tuition; all costs covered by the National Science Foundation (NSF REU).",
        requirements: {
          gpa: "Enrolled undergraduate in physics, materials science, or engineering with minimum 3.2 GPA.",
          ielts: "Fluent English language skills.",
          gre: "Not applicable.",
          papers: "Completed university physics and calculus courses.",
          references: "Two faculty recommendation letters."
        },
        desc: "Ten-week National Science Foundation REU summer research traineeship at CHESS, conducting hands-on synchrotron X-ray diffraction, spectroscopy, and imaging experiments on advanced materials."
      },
      {
        id: 682,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Job",
        title: "Cornell Postdoctoral Associate in Plant Breeding and Genetics",
        source: "https://academicjobsonline.org/ajo/Cornell",
        funding: "Salaried Postdoctoral Associate: $65,000 to $72,000/year plus Cornell health and retirement benefits",
        status: "open-job",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Open until filled)",
        fee: "$0 application fee",
        tuition: "Not applicable; full-time salaried academic staff appointment.",
        requirements: {
          gpa: "PhD in Plant Genetics, Genomics, Agronomy, or Computational Biology awarded within the last 4 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in crop genomics, CRISPR gene editing, or quantitative trait loci (QTL) mapping.",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral research appointment within Cornell's School of Integrative Plant Science (SIPS), developing genomic selection models and climate-resilient crop varieties to address global food security."
      }
    ],
    researchers: [
      {
        id: 309,
        name: "Dr. Jon Kleinberg",
        title: "Tisch University Professor of Computer Science and Information Science",
        subject: "computer-science",
        topics: ["Algorithms", "Network Theory", "Social Information Systems", "Algorithmic Fairness"],
        source: "https://www.cs.cornell.edu/home/kleinber/",
        summary: "MacArthur Genius Fellow, National Academy of Sciences member, and pioneer of network algorithms (HITS algorithm) and ethical fairness in automated machine learning decision systems.",
        recruiting: "Not verified"
      },
      {
        id: 310,
        name: "Dr. Sol M. Gruner",
        title: "John L. Wetherill Professor of Physics",
        subject: "physics",
        topics: ["X-Ray Science", "Synchrotron Radiation", "Biological Physics", "Pixel Array Detectors"],
        source: "https://physics.cornell.edu/sol-m-gruner",
        summary: "Former Director of CHESS and fellow of the American Academy of Arts and Sciences, celebrated for inventing pixel array detectors (PADs) and revolutionizing synchrotron structural biology.",
        recruiting: "Not verified"
      },
      {
        id: 311,
        name: "Dr. Susan R. McCouch",
        title: "Barbara McClintock Professor of Plant Breeding and Genetics",
        subject: "biology",
        topics: ["Rice Genomics", "Plant Genetics", "Quantitative Traits", "Crop Biodiversity"],
        source: "https://sips.cornell.edu/people/susan-mccouch",
        summary: "Elected member of the National Academy of Sciences, internationally renowned for mapping the rice genome and pioneering the utilization of wild rice genetic diversity for global sustainable crop breeding.",
        recruiting: "Not verified"
      }
    ]
  },

  // 6. UK: University of Birmingham (Row 1309)
  {
    institution: "University of Birmingham",
    shortName: "Birmingham",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Birmingham, England, United Kingdom",
    website: "https://www.birmingham.ac.uk",
    sourceRow: 1309,
    slug: "university-of-birmingham",
    heroEyebrow: "United Kingdom · England · Russell Group Pioneer & UK Quantum Technology Hub · Reviewed 14 October 2026",
    headline: "University of Birmingham",
    description: "University of Birmingham guide: UKRI fully funded PhD studentships (£19,237+ stipend), Advanced Computer Science MSc, UK Quantum Hub, and faculty profiles.",
    overview: "Founded in 1900 by Royal Charter as Britain's first civic or 'redbrick' university, the University of Birmingham is a founding member of the Russell Group and Universitas 21. Birmingham has been the birthplace of major world-changing breakthroughs including the cavity magnetron (radar), pacemaker technologies, and gravitational wave instrumentation. The university is home to the national UK Quantum Technology Hub Sensors and Timing, the Birmingham Centre for Railway Research and Education, and the Institute of Microbiology and Infection.",
    admissions: {
      masters: "UK Upper Second Class Honours degree (2:1) or international equivalent (minimum 65-70% or 3.2/4.0 GPA) in a relevant discipline; quantitative computing programs require strong mathematical background.",
      phd: "Recognized Master's degree with Merit or Distinction (or UK 2:1 Honours degree with significant research experience) and demonstrated academic research aptitude.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each component) or TOEFL iBT 88; Computer Science, Law, and Medicine require IELTS 7.0 (minimum 6.5 in all bands).",
      proposal: "A formal research proposal of 1,500 to 2,500 words detailing research objectives, context, methodology, proposed timeline, and prospective Birmingham academic supervisor.",
      appFee: "£50 application fee for taught postgraduate programs; £0 application fee for postgraduate research (PhD) applications.",
      documents: "Complete official academic transcripts, degree certificates, 2 academic reference letters, detailed research proposal, and personal statement."
    },
    tuitionText: "Full-time doctoral researchers awarded UKRI (EPSRC, BBSRC, MRC, ESRC) studentships or Birmingham Doctoral Scholarships receive 100% full tuition fee coverage (at home/international rates) and an annual tax-free living stipend of at least £19,237 per year (aligned with UKRI national minimum rate) plus an annual research training support grant (RTSG) for laboratory consumables and conference travel.",
    opportunities: [
      {
        id: 683,
        subject: "physics",
        subjects: ["physics", "engineering", "mathematics"],
        type: "Scholarship",
        title: "Birmingham UK Quantum Technology Hub Doctoral Training Studentships",
        source: "https://www.quantumsensors.org/vacancies/",
        funding: "Fully funded: Annual tax-free stipend of £19,237/year for 3.5 to 4 years, 100% full tuition fee waiver, and £5,000/year research consumables allowance",
        status: "open-scholarship",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Priority round for October 2027 commencement)",
        fee: "£0 application fee for research programs",
        tuition: "Full tuition waiver covered by EPSRC and Birmingham Quantum Technology Hub.",
        requirements: {
          gpa: "UK first-class honours degree or 2:1 Master's (or international equivalent) in Physics, Mathematics, or Electrical Engineering.",
          ielts: "Academic IELTS 6.5 with at least 6.0 in each band.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in quantum mechanics, optics, or electromagnetism.",
          references: "Two academic referee letters from university lecturers."
        },
        desc: "Doctoral training at the £80 million UK Quantum Technology Hub Sensors and Timing, developing ultra-precise cold-atom gravimeters, quantum clocks, and quantum gravity sensors for subterranean surveying."
      },
      {
        id: 684,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "Birmingham Master of Science (MSc) in Advanced Computer Science",
        source: "https://www.birmingham.ac.uk/postgraduate/courses/taught/computer-science/advanced-computer-science.aspx",
        funding: "Birmingham Global Masters Scholarships (£2,000 to £10,000 tuition fee reductions for international scholars)",
        status: "open-master",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (International intake deadline for September 2027)",
        fee: "£50 application fee",
        tuition: "£29,880 full international tuition fee (before scholarship deductions).",
        requirements: {
          gpa: "UK 2:1 Honours degree (or equivalent GPA 3.3/4.0) in Computer Science or closely related discipline with substantial programming.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all sub-tests) or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Strong academic record in algorithms, data structures, and object-oriented programming.",
          references: "One academic reference letter."
        },
        desc: "Advanced one-year MSc accredited by the British Computer Society (BCS), offering specialized research modules in deep learning, natural language processing, cryptography, and complex systems."
      },
      {
        id: 685,
        subject: "biology",
        subjects: ["biology"],
        type: "PhD",
        title: "Birmingham PhD in Immunology and Immunotherapy",
        source: "https://www.birmingham.ac.uk/postgraduate/courses/research/med/immunology-immunotherapy.aspx",
        funding: "MRC-funded 4-year doctoral studentship: £19,237 annual stipend plus full tuition and bench fees",
        status: "open-phd",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Medical Research Council doctoral round)",
        fee: "£0 application fee",
        tuition: "100% full tuition coverage.",
        requirements: {
          gpa: "Upper second-class or first-class undergraduate/Master's degree in immunology, biochemistry, or biomedical sciences.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5.",
          gre: "Not required.",
          papers: "Laboratory research experience in cellular immunology, flow cytometry, or antibody engineering.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research within the Institute of Immunology and Immunotherapy, developing chimeric antigen receptor (CAR) T-cell therapies, cancer vaccines, and autoimmune treatments."
      },
      {
        id: 686,
        subject: "engineering",
        subjects: ["engineering"],
        type: "PhD",
        title: "Birmingham Centre for Railway Research and Education (BCRRE) PhD in Railway Systems",
        source: "https://www.birmingham.ac.uk/research/railway/postgraduate/index.aspx",
        funding: "Industry-sponsored 3.5-year PhD studentship of £20,500/year stipend plus full tuition waiver",
        status: "open-phd",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Industry doctoral cohort intake)",
        fee: "£0 application fee",
        tuition: "Fully sponsored by railway industry research partners.",
        requirements: {
          gpa: "First-class or 2:1 Honours degree in civil, mechanical, electrical engineering, or computer systems.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands).",
          gre: "Not required.",
          papers: "Interest in hydrogen-powered trains, railway cyber-physical systems, or condition monitoring.",
          references: "Two academic or professional engineering references."
        },
        desc: "Europe's largest university-based railway research center, investigating hydrogen-powered rolling stock, automated train operation (ATO), and resilient high-speed rail infrastructure."
      },
      {
        id: 687,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Birmingham Institute for Global Innovation Postdoctoral Fellowship",
        source: "https://www.birmingham.ac.uk/research/global-goals/fellowships.aspx",
        funding: "Annual research salary of £36,000 to £41,000 plus £5,000 travel and dissemination grant",
        status: "open-research",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual postdoctoral fellowship round)",
        fee: "£0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in International Development, Political Science, Economics, or Public Health.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications on urban sustainability, clean air governance, or global health inequities.",
          references: "Two academic letters of recommendation."
        },
        desc: "Two-year postdoctoral fellowship addressing UN Sustainable Development Goals, clean urban air governance, and equitable global health policy in emerging economies."
      },
      {
        id: 688,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Internship",
        title: "Birmingham School of Chemical Engineering Summer Research Fellowship",
        source: "https://www.birmingham.ac.uk/schools/chemical-engineering/research/index.aspx",
        funding: "£2,400 8-week summer stipend with pilot plant and materials characterization access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer undergraduate research call)",
        fee: "£0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate student in Chemical Engineering, Chemistry, or Materials Science with minimum 65% average.",
          ielts: "Proficient scientific English.",
          gre: "Not applicable.",
          papers: "Completed coursework in chemical reaction engineering, thermodynamics, or fluid mechanics.",
          references: "One academic tutor reference letter."
        },
        desc: "Eight-week mentored summer research project investigating microencapsulation, sustainable food formulations, and carbon-neutral chemical processes."
      },
      {
        id: 689,
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        type: "Job",
        title: "Birmingham Lecturer (Assistant Professor) in Clean Energy Technologies & Fuel Cells",
        source: "https://www.birmingham.ac.uk/working/jobs/index.aspx",
        funding: "Full-time permanent academic staff appointment: £45,585 to £54,395/year plus USS pension scheme",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Formal academic search deadline)",
        fee: "£0 application fee",
        tuition: "Not applicable; salaried faculty appointment.",
        requirements: {
          gpa: "PhD in Chemical Engineering, Mechanical Engineering, Materials Science, or Electrochemical Systems.",
          ielts: "Exemplary English teaching and research presentation skills.",
          gre: "Not applicable.",
          papers: "Proven publication record in leading energy journals and demonstrable potential for securing UKRI research grants.",
          references: "Three academic reference contacts."
        },
        desc: "Tenured-track Assistant Professorship (Lectureship) delivering teaching in chemical engineering and leading independent laboratory research in fuel cell technologies, hydrogen generation, and electrochemical energy storage."
      }
    ],
    researchers: [
      {
        id: 312,
        name: "Dr. Kai Bongs",
        title: "Professor of Physics and Principal Investigator of the UK Quantum Technology Hub",
        subject: "physics",
        topics: ["Quantum Technologies", "Cold Atoms", "Quantum Gravimetry", "Precision Metrology"],
        source: "https://www.birmingham.ac.uk/staff/profiles/physics/bongs-kai.aspx",
        summary: "World-leading quantum physicist leading the UK National Quantum Technology Hub Sensors and Timing, pioneering practical cold-atom gravity sensors and quantum timekeeping.",
        recruiting: "Not verified"
      },
      {
        id: 313,
        name: "Dr. Clive Roberts",
        title: "Professor of Railway Systems and Director of BCRRE",
        subject: "engineering",
        topics: ["Railway Engineering", "Condition Monitoring", "System Resilience", "Intelligent Mobility"],
        source: "https://www.birmingham.ac.uk/staff/profiles/electronic-electrical-computer-engineering/roberts-clive.aspx",
        summary: "Head of the School of Engineering and Director of the Birmingham Centre for Railway Research and Education, recognized internationally for smart railway operations and decarbonized rail traction.",
        recruiting: "Not verified"
      },
      {
        id: 314,
        name: "Dr. Laura Piddock",
        title: "Professor of Microbiology",
        subject: "biology",
        topics: ["Antimicrobial Resistance", "Multidrug Efflux Pumps", "Antibiotic Discovery", "Bacterial Genetics"],
        source: "https://www.birmingham.ac.uk/staff/profiles/microbiology-infection/piddock-laura.aspx",
        summary: "Internationally renowned microbiologist, former Director of the Institute of Microbiology and Infection, and global scientific director for the Global Antibiotic Research and Development Partnership (GARDP).",
        recruiting: "Not verified"
      }
    ]
  },

  // 7. JAPAN: Keio University (Row 1666)
  {
    institution: "Keio University",
    shortName: "Keio",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Tokyo, Japan",
    website: "https://www.keio.ac.jp",
    sourceRow: 1666,
    slug: "keio-university",
    heroEyebrow: "Japan · Tokyo · Japan's Oldest Higher Learning Institution & IBM Quantum Hub · Reviewed 14 October 2026",
    headline: "Keio University",
    description: "Keio University guide: MEXT Government Scholarships (¥145,000/mo), English-taught IGP Engineering PhD, Keio Quantum Computing Center, and faculty profiles.",
    overview: "Founded in 1858 by modern intellectual pioneer Yukichi Fukuzawa, Keio University is Japan's oldest private institute of higher education and a premier member of Japan's Top Global University Project. Headquartered in Mita, Tokyo, Keio is celebrated for top-ranked research at the Faculty of Science and Technology (Yagami Campus), Keio University School of Medicine (Shinanomachi Campus), the Keio Quantum Computing Center (partnering with IBM Quantum), and pioneer internet technologies through the WIDE Project.",
    admissions: {
      masters: "Completion of a 16-year school education curriculum culminating in a recognized Bachelor's degree (minimum 3.0/4.0 GPA or equivalent grade B+).",
      phd: "Recognized Master's degree or professional degree; submission of Master's thesis and passing marks in oral defense and doctoral screening.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 88 for English-based programs (International Graduate Program - IGP); Japanese JLPT N1 for Japanese-medium graduate divisions.",
      proposal: "A 3-page research proposal detailing proposed doctoral research topic, theoretical framework, research methodology, and anticipated academic contributions.",
      appFee: "¥35,000 non-refundable screening fee submitted via the Keio online admissions portal.",
      documents: "Graduation certificate, complete official academic transcripts, research proposal, 2 letters of recommendation, and English proficiency test report."
    },
    tuitionText: "Tuition fees for graduate programs at Keio are approximately ¥1,200,000 to ¥1,450,000 per year. Admitted international scholars under the Japanese Government (MEXT) University Recommendation Scholarship receive 100% full tuition waivers, round-trip international airfare, and a monthly tax-free living stipend of ¥145,000 to ¥148,000 per month (approx. ¥1,750,000/year).",
    opportunities: [
      {
        id: 690,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics"],
        type: "Scholarship",
        title: "Keio University Design the Future Award & MEXT University Recommendation Scholarships",
        source: "https://www.students.keio.ac.jp/en/com/scholarships/apply/mext.html",
        funding: "100% Fully funded: Monthly living allowance of ¥145,000 to ¥148,000/month, full tuition waiver, and round-trip economy airfare",
        status: "open-scholarship",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Priority round for Autumn 2027 enrollment)",
        fee: "¥0 screening fee for MEXT applicants",
        tuition: "100% covered by the Japanese Ministry of Education, Culture, Sports, Science and Technology.",
        requirements: {
          gpa: "Minimum GPA of 2.30 on a 3.00 scale (equivalent to 80% or 3.4/4.0 GPA) in previous university degrees.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Superior academic record, thesis summary, and detailed proposed research outline.",
          references: "Two letters of recommendation from deans or academic professors."
        },
        desc: "Prestigious Japanese government doctoral award administered through Keio University, offering complete financial support, tuition waivers, and airfare for premier international research scholars."
      },
      {
        id: 691,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "Keio Graduate School of Science and Technology International Graduate Program (IGP) PhD",
        source: "https://www.st.keio.ac.jp/en/admissions/igp/",
        funding: "Keio Graduate Scholarship & RA stipends providing ¥150,000/month plus full or 50% tuition reduction awards",
        status: "open-phd",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027 (Spring second round for September 2027 enrollment)",
        fee: "¥35,000 application screening fee",
        tuition: "¥1,350,000/year, highly subsidized through merit-based tuition reduction grants.",
        requirements: {
          gpa: "Master's degree in engineering, physics, mathematics, or computer science with high marks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Master's thesis and published papers in reputable journals or international conferences.",
          references: "Two confidential letters of recommendation from university faculty."
        },
        desc: "All-English doctoral degree conducted at the Yagami Campus in Yokohama, featuring advanced research in mechanical engineering, electronics, applied chemistry, and systems design."
      },
      {
        id: 692,
        subject: "computer-science",
        subjects: ["computer-science", "physics", "mathematics"],
        type: "Master",
        title: "Keio Master of Science in Computer Science & Quantum Information Systems",
        source: "https://www.st.keio.ac.jp/en/academics/cs/",
        funding: "Keio University Science and Technology Merit Scholarships (¥500,000 to ¥1,000,000/year award)",
        status: "open-master",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (International applicant round for Fall intake)",
        fee: "¥35,000 application fee",
        tuition: "¥1,380,000/year before merit scholarships.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Computer Science, Information Engineering, or Mathematics with minimum 3.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Recommended for international applicants.",
          papers: "Demonstrated programming and algorithm design proficiencies.",
          references: "Two academic referee letters."
        },
        desc: "Two-year English-taught Master's program in computer systems, quantum algorithms, network architecture, and distributed cloud computing with access to the Keio Quantum Computing Center."
      },
      {
        id: 693,
        subject: "biology",
        subjects: ["biology"],
        type: "PhD",
        title: "Keio PhD in Molecular Medicine & Regenerative Biology",
        source: "https://www.med.keio.ac.jp/en/education/doctoral/",
        funding: "Keio Medical School Doctoral Fellowship: ¥180,000/month plus laboratory research funds",
        status: "open-phd",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 (Annual doctoral admission round)",
        fee: "¥35,000 screening fee",
        tuition: "Full tuition offset through departmental fellowship.",
        requirements: {
          gpa: "Master's degree or 6-year medical degree (MBBS/MD) with high academic distinction.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Prior laboratory research experience in stem cell biology, neuroscience, or genetics.",
          references: "Two letters of recommendation."
        },
        desc: "Four-year medical doctorate located at the Shinanomachi Campus in central Tokyo, conducting pioneering research in induced pluripotent stem (iPS) cells, neural regeneration, and precision oncology."
      },
      {
        id: 694,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "Keio Quantum Computing Center Postdoctoral Research Fellow",
        source: "https://qcc.keio.ac.jp/en/",
        funding: "Salaried postdoctoral position: ¥5,500,000 to ¥6,800,000/year gross plus social insurance (shakai hoken)",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling review until position filled)",
        fee: "¥0 application fee",
        tuition: "Not applicable; full-time salaried researcher post.",
        requirements: {
          gpa: "PhD in Physics, Computer Science, or Mathematics specializing in Quantum Computing or Quantum Information.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications in quantum algorithms, error mitigation, or quantum hardware simulation.",
          references: "Two academic recommendation letters."
        },
        desc: "Research appointment at Japan's premier quantum computing center, collaborating with industry partners (including IBM) on quantum error mitigation, quantum chemistry simulations, and quantum machine learning."
      },
      {
        id: 695,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Internship",
        title: "Keio Keio-NUS CUTE Center Summer Research Traineeship in Mixed Reality & Media Computing",
        source: "https://www.kmd.keio.ac.jp/en/",
        funding: "¥120,000/month 10-week summer stipend with media lab prototyping access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship call)",
        fee: "¥0 application fee",
        tuition: "Zero tuition charges during summer traineeship.",
        requirements: {
          gpa: "Enrolled in third or fourth year of undergraduate studies in Digital Media, Computer Science, or Interaction Design with high marks.",
          ielts: "Good English conversational and presentation skills.",
          gre: "Not applicable.",
          papers: "Portfolio of interactive media, game design, VR/AR, or digital prototyping projects.",
          references: "One professor recommendation letter."
        },
        desc: "Ten-week research internship at the Keio Graduate School of Media Design (KMD), designing immersive augmented reality experiences, haptic interfaces, and creative digital media systems."
      },
      {
        id: 696,
        subject: "chemistry",
        subjects: ["chemistry"],
        type: "Job",
        title: "Keio Project Assistant Professor in Sustainable Polymer Chemistry & Biomaterials",
        source: "https://www.st.keio.ac.jp/en/jobs/",
        funding: "Full-time faculty appointment: ¥6,500,000 to ¥7,500,000/year gross plus Japanese social insurance",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Academic search closing date)",
        fee: "¥0 application fee",
        tuition: "Not applicable; salaried faculty appointment.",
        requirements: {
          gpa: "PhD in Polymer Chemistry, Organic Chemistry, or Materials Science.",
          ielts: "Professional English fluency (Japanese language skills advantageous but not required).",
          gre: "Not applicable.",
          papers: "Minimum 6 first-author publications in high-impact chemistry journals.",
          references: "Three academic reference contacts."
        },
        desc: "Full-time faculty role conducting independent and collaborative research in bio-based degradable polymers, redox-active macromolecular materials, and energy storage electrolytes."
      }
    ],
    researchers: [
      {
        id: 315,
        name: "Dr. Jun Murai",
        title: "Distinguished Professor and Special Advisor to the Cabinet of Japan",
        subject: "computer-science",
        topics: ["Internet Architecture", "WIDE Project", "IPv6", "Cybersecurity Policy"],
        source: "https://www.kmd.keio.ac.jp/people/faculty/jun-murai",
        summary: "Universally celebrated as the 'Father of the Internet in Japan', founder of the WIDE Project, and Internet Hall of Fame inductee, who laid the foundational architecture of Japan's computer networks.",
        recruiting: "Not verified"
      },
      {
        id: 316,
        name: "Dr. Hideyuki Okano",
        title: "Professor of Physiology and Regenerative Medicine",
        subject: "biology",
        topics: ["Neural Stem Cells", "iPS Cell Biology", "Spinal Cord Regeneration", "Neurodegenerative Diseases"],
        source: "https://www.med.keio.ac.jp/en/education/faculty/okano.html",
        summary: "World pioneer in neural stem cell biology and regenerative medicine, leading human clinical trials for spinal cord injury repair using induced pluripotent stem (iPS) cells.",
        recruiting: "Not verified"
      },
      {
        id: 317,
        name: "Dr. Rodney Van Meter",
        title: "Professor of Environment and Information Studies",
        subject: "computer-science",
        topics: ["Quantum Networking", "Quantum Architecture", "Distributed Quantum Computing", "Quantum Internet"],
        source: "https://sfc.keio.ac.jp/en/faculty/van-meter.html",
        summary: "Internationally renowned scholar leading quantum network architecture research, author of 'Quantum Networking', and pioneer in developing quantum internet routing protocols at Keio.",
        recruiting: "Not verified"
      }
    ]
  },

  // 8. SWEDEN: Linnaeus University (Row 1586)
  {
    institution: "Linnaeus University",
    shortName: "Linnaeus",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Växjö and Kalmar, Sweden",
    website: "https://lnu.se",
    sourceRow: 1586,
    slug: "linnaeus-university",
    heroEyebrow: "Sweden · Småland · Forestry Innovation & Baltic Sea Marine Ecology Pioneer · Reviewed 14 October 2026",
    headline: "Linnaeus University (Linnéuniversitetet)",
    description: "Linnaeus University guide: Salaried Swedish PhD positions (SEK 31,500/mo), Master's scholarships (75% waiver), Software Technology, Marine Ecology, and faculty profiles.",
    overview: "Named in honour of the world-famous botanist Carl Linnaeus who was born in the region, Linnaeus University (Linnéuniversitetet - LNU) was created in 2010 through the merger of Växjö University and Kalmar University. Situated in Småland with vibrant campuses in Växjö and Kalmar, LNU is a national leader in ecological sciences, forestry and wood technology, data science and software engineering, and aquatic ecology. Linnaeus University offers salaried doctoral candidacies under Swedish state employment regulations.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS credits) from an internationally recognized higher education institution with a major in the relevant field (minimum 65-70% or 3.0/4.0 GPA equivalent).",
      phd: "Master's degree (minimum 240 ECTS credits total, with at least 60 ECTS at advanced level) or equivalent international qualification; selection is based on academic merit, research quality, and faculty fit.",
      language: "English 6 / English B proficiency: Academic IELTS 6.5 overall (no band below 5.5) or TOEFL iBT 90 (minimum 20 in writing).",
      proposal: "A 3 to 5 page doctoral research plan addressing research problem, theoretical context, proposed methodology, and significance.",
      appFee: "SEK 900 application fee for non-EU/EEA students applying through the central Swedish universityadmissions.se portal; €0 fee for EU citizens.",
      documents: "Certificates and diplomas of completed degrees, official transcripts, documentation of English proficiency, copy of passport, and Master's thesis."
    },
    tuitionText: "At Linnaeus University and throughout Sweden, PhD candidacies are classified as state employment (doktorandanställning). Admitted PhD candidates pay zero tuition fees and receive a collective-bargaining salaried monthly wage of SEK 31,500 to SEK 35,000 per month (approx. SEK 380,000 to SEK 420,000/year gross) with full Swedish national healthcare, parental leave, and pension benefits. International Master's students can compete for Linnaeus University Scholarships covering 75% of tuition fees.",
    opportunities: [
      {
        id: 697,
        subject: "computer-science",
        subjects: ["computer-science", "environment", "engineering"],
        type: "Scholarship",
        title: "Linnaeus University Scholarship for International Master's Students (75% Tuition Waiver)",
        source: "https://lnu.se/en/education/before-your-studies/scholarships/",
        funding: "75% tuition fee waiver for the full 2-year duration of the Master's programme (valued at approx. SEK 210,000)",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship round for Autumn intake)",
        fee: "SEK 900 central application fee",
        tuition: "Remaining 25% tuition approximately SEK 35,000/year after scholarship reduction.",
        requirements: {
          gpa: "First-choice application to Linnaeus University with top academic grades in undergraduate degree (minimum 80% or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each sub-score) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong motivation letter.",
          references: "Academic reference letters submitted with scholarship dossier."
        },
        desc: "Merit-based scholarship awarded to high-achieving non-EU/EEA students applying to English-taught master's degrees in computer science, business, ecology, and technology at Linnaeus University."
      },
      {
        id: 698,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        title: "LNU Salaried PhD Position in Aquatic Ecology & Baltic Sea Biogeochemistry",
        source: "https://lnu.se/en/meet-linnaeus-university/work-at-the-university/",
        funding: "Full 4-year Swedish salaried employment: SEK 31,500 to SEK 35,000/month gross plus full healthcare and pension; zero tuition",
        status: "open-phd",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Salaried doctoral recruitment round)",
        fee: "SEK 0 application fee for doctoral positions",
        tuition: "SEK 0 tuition; all doctoral positions are fully paid employment under Swedish labor law.",
        requirements: {
          gpa: "Master of Science in Marine Biology, Ecology, Aquatic Science, or Environmental Chemistry.",
          ielts: "Fluent working English (IELTS 6.5 or equivalent).",
          gre: "Not applicable.",
          papers: "Master's thesis in aquatic ecology, microbial ecology, or biogeochemical cycling.",
          references: "Two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research post based at the Kalmar campus, examining bacterioplankton dynamics, nutrient pollution, and climate change impacts on Baltic Sea coastal ecosystems."
      },
      {
        id: 699,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "LNU Master of Science (MSc) in Software Technology (English-Taught)",
        source: "https://lnu.se/en/programme/software-technology-master-programme/",
        funding: "Eligible for Swedish Institute (SI) Global Professionals Scholarships (full tuition + SEK 12,000/month living stipend)",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Central Swedish university admissions round 1)",
        fee: "SEK 900 application fee",
        tuition: "SEK 140,000/year for non-EU/EEA students (EU/EEA citizens pay SEK 0).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Software Engineering, or related field with at least 90 ECTS in computing.",
          ielts: "Academic IELTS 6.5 (minimum 5.5 in each band) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in object-oriented programming, algorithms, and software architectures.",
          references: "One academic reference letter."
        },
        desc: "Comprehensive two-year Master's degree in Växjö focusing on advanced software design patterns, cloud architectures, model-driven engineering, and automated testing."
      },
      {
        id: 700,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "PhD",
        title: "LNU PhD in Forestry and Wood Technology - Sustainable Bio-Based Structures",
        source: "https://lnu.se/en/meet-linnaeus-university/work-at-the-university/",
        funding: "Salaried Swedish doctoral employment: SEK 32,000/month with annual step increases; zero tuition",
        status: "open-phd",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Doctoral recruitment deadline)",
        fee: "SEK 0 application fee",
        tuition: "SEK 0 tuition; salaried employment.",
        requirements: {
          gpa: "Master's degree in Civil Engineering, Wood Technology, Materials Science, or Forestry.",
          ielts: "English 6 proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated research in timber engineering, bio-composites, or life cycle analysis.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research within the Linnaeus University Knowledge Environment Green Sustainable Development, engineering high-performance engineered mass timber and carbon-storing structural materials."
      },
      {
        id: 701,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "Linnaeus Centre for Data Intensive Sciences and Applications (DISA) Research Fellowship",
        source: "https://lnu.se/en/research/searchresearch/data-intensive-sciences-and-applications-disa/",
        funding: "Postdoctoral research salary: SEK 42,000 to SEK 46,000/month gross with full Swedish social benefits",
        status: "open-research",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Annual DISA fellowship call)",
        fee: "SEK 0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Computer Science, Big Data Analytics, or Machine Learning.",
          ielts: "Professional English fluency.",
          gre: "Not applicable.",
          papers: "Peer-reviewed publications in data analytics, cloud streaming architectures, or intelligent decision support.",
          references: "Two professional reference letters."
        },
        desc: "Two-year postdoctoral research position within DISA, advancing machine learning pipelines for complex sensor streams, smart industrial manufacturing, and environmental monitoring."
      },
      {
        id: 702,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Internship",
        title: "LNU Marine Science Kalmar Field Station Summer Research Internship",
        source: "https://lnu.se/en/research/searchresearch/linnaeus-university-centre-for-ecology-and-evolution-in-microbial-model-systems-eemim/",
        funding: "SEK 12,000/month 8-week summer stipend plus shared student housing in Kalmar",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer traineeship intake)",
        fee: "SEK 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Biology, Marine Science, or Environmental Science.",
          ielts: "Good working English proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in aquatic ecology, microbiology, or scientific sampling methods.",
          references: "One referee letter from a biology department instructor."
        },
        desc: "Eight-week field and laboratory traineeship at the Centre for Ecology and Evolution in Microbial model Systems (EEMiS) in Kalmar, participating in coastal research vessel sampling expeditions in the Baltic Sea."
      },
      {
        id: 703,
        subject: "environment",
        subjects: ["environment"],
        type: "Job",
        title: "LNU Senior Researcher in Forest Carbon Cycling & Climate Change Ecology",
        source: "https://lnu.se/en/meet-linnaeus-university/work-at-the-university/",
        funding: "Full-time permanent research appointment: SEK 48,000 to SEK 56,000/month gross plus Swedish pension benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Formal academic search deadline)",
        fee: "SEK 0 application fee",
        tuition: "Not applicable; salaried research position.",
        requirements: {
          gpa: "PhD in Forest Ecology, Biogeochemistry, or Soil Science awarded at least 3 years prior.",
          ielts: "Exemplary professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated track record of securing competitive external research funding and high-impact publications.",
          references: "Three academic reference contacts."
        },
        desc: "Senior research scientist post investigating forest soil carbon balance, greenhouse gas fluxes, and climate-adaptive silvicultural practices across Scandinavian boreal and temperate forests."
      }
    ],
    researchers: [
      {
        id: 318,
        name: "Dr. Welf Löwe",
        title: "Professor of Computer Science and Head of DISA",
        subject: "computer-science",
        topics: ["Software Architecture", "Data-Intensive Systems", "Software Quality", "Machine Learning"],
        source: "https://lnu.se/en/staff/welf.lowe/",
        summary: "Head of the Linnaeus Centre for Data Intensive Sciences and Applications (DISA), internationally recognized for pioneering methods in software metrication, static program analysis, and scalable data analytics.",
        recruiting: "Not verified"
      },
      {
        id: 319,
        name: "Dr. Jarone Pinhassi",
        title: "Professor of Marine Microbiology",
        subject: "biology",
        topics: ["Marine Microbial Ecology", "Baltic Sea Biogeochemistry", "Bacterioplankton", "Ocean Genomics"],
        source: "https://lnu.se/en/staff/jarone.pinhassi/",
        summary: "Leading marine microbiologist and Director of the EEMiS research centre in Kalmar, celebrated for groundbreaking discoveries in solar-powered proteorhodopsin-containing marine bacteria.",
        recruiting: "Not verified"
      },
      {
        id: 320,
        name: "Dr. Marie Källkvist",
        title: "Professor of English Linguistics",
        subject: "social-sciences",
        topics: ["Multilingualism", "Language Education", "Applied Linguistics", "Translanguaging"],
        source: "https://lnu.se/en/staff/marie.kallkvist/",
        summary: "Prominent applied linguist researching multilingual pedagogical practices, translanguaging in Swedish higher education, and second language acquisition across international contexts.",
        recruiting: "Not verified"
      }
    ]
  },

  // 9. NETHERLANDS: Hanze University of Applied Sciences (Row 1417)
  {
    institution: "Hanze University of Applied Sciences",
    shortName: "Hanze UAS",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Groningen, Netherlands",
    website: "https://www.hanze.nl",
    sourceRow: 1417,
    slug: "hanze-university-of-applied-sciences",
    heroEyebrow: "Netherlands · Groningen · EnTranCe Energy Transition Leader & Healthy Ageing Pioneer · Reviewed 14 October 2026",
    headline: "Hanze University of Applied Sciences (Hanzehogeschool Groningen)",
    description: "Hanze UAS guide: NL Scholarships (€10,000), European Master in Renewable Energy, EnTranCe Energy Transition Hub, and faculty profiles.",
    overview: "Founded in 1798, Hanze University of Applied Sciences (Hanzehogeschool Groningen) is the oldest multi-sector university of applied sciences in the Netherlands. Situated in the vibrant knowledge city of Groningen, Hanze is a northern European leader in applied energy transition research (at the internationally acclaimed EnTranCe Centre of Expertise for Energy Transition), healthy ageing at the Zernike Campus, international business, and digital society solutions. With students from over 100 countries, Hanze delivers rigorous professional master's programs and collaborative applied research fellowships.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits, equivalent to Dutch HBO or WO Bachelor) with good academic standing (minimum 65-70% or 3.0/4.0 GPA) in an appropriate field of study.",
      phd: "Master's degree (HBO Master or WO Master) in a relevant technical or scientific discipline; doctoral candidacies are conducted in collaboration with research universities (such as the University of Groningen) through university-of-applied-sciences professorships (lectoren).",
      language: "Academic IELTS 6.5 overall (no individual sub-score below 6.0) or TOEFL iBT 90 (minimum 21 in each section).",
      proposal: "A motivation letter (1,000 words) and portfolio demonstrating professional experience, engineering design projects, or research problem analysis.",
      appFee: "€0 application fee for EU students; €100 non-refundable handling fee for non-EU/EEA applicants (deducted from tuition upon enrollment).",
      documents: "Bachelor's diploma, complete transcript of records, curriculum vitae, letter of motivation, English test report, and copy of passport."
    },
    tuitionText: "Tuition for non-EU/EEA international students in Master of Science programs at Hanze is approximately €8,500 to €15,000 per year (statutory tuition of €2,601/year applies to EU/EEA citizens). Outstanding international applicants are eligible for the prestigious NL Scholarship (formerly Holland Scholarship) providing €5,000 to €10,000 in living support, as well as Hanze Scholarship tuition waivers.",
    opportunities: [
      {
        id: 704,
        subject: "engineering",
        subjects: ["engineering", "environment", "computer-science"],
        type: "Scholarship",
        title: "Hanze Scholarship for Master's Students & NL Scholarship Programme (€10,000 Award)",
        source: "https://www.hanze.nl/en/study-at-hanze/study-information/scholarships",
        funding: "€10,000 financial contribution toward tuition fees and living expenses for non-EU/EEA master's students",
        status: "open-scholarship",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Annual international scholarship round for September intake)",
        fee: "€100 application handling fee",
        tuition: "Reduces annual international tuition to under €5,000/year.",
        requirements: {
          gpa: "Admitted to a full-time Master's program at Hanze with top academic rank (minimum 75% or 3.3/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall with no sub-score below 6.0.",
          gre: "Not required.",
          papers: "Demonstrated professional motivation and commitment to energy, healthcare, or digital innovation.",
          references: "Two academic or employer recommendation letters."
        },
        desc: "Prestigious Dutch government and university-funded scholarship providing financial assistance to talented international students from outside the European Economic Area admitted to Hanze master's programs."
      },
      {
        id: 705,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "Hanze Master of Science (MSc) in Renewable Energy - European Master in Renewable Energy (EUREC)",
        source: "https://www.hanze.nl/en/programmes/master/european-master-in-renewable-energy",
        funding: "Erasmus+ mobility grants (€450/month) and Hanze energy transition study bursaries",
        status: "open-master",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (International applicant deadline for Autumn intake)",
        fee: "€100 handling fee",
        tuition: "€14,800/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in engineering, physics, or mathematics with solid foundation in thermodynamics and circuits.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated technical coursework in fluid mechanics, electrical engineering, or energy systems.",
          references: "Two letters of recommendation."
        },
        desc: "Prestigious European EUREC Master's program delivered across partner European institutions, providing hands-on training in solar photovoltaic systems, wind turbine engineering, and grid integration at EnTranCe."
      },
      {
        id: 706,
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Master",
        title: "Hanze Master of Science (MSc) in Data Science for Life Sciences (English-Taught)",
        source: "https://www.hanze.nl/en/programmes/master/data-science-for-life-sciences",
        funding: "Hanze Excellence Scholarships of up to €5,000 plus industry-partnered applied research stipends",
        status: "open-master",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Non-EU application deadline)",
        fee: "€100 handling fee",
        tuition: "€9,200/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in bioinformatics, computer science, biomedical engineering, or life sciences.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Practical programming skills in Python or R and foundational genetics or biochemistry coursework.",
          references: "One academic referee letter."
        },
        desc: "Two-year applied Master's program bridging big data analytics, machine learning, and biological genomics, preparing graduates for biomedical data science roles in pharmaceutical and biotechnology sectors."
      },
      {
        id: 707,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "PhD",
        title: "EnTranCe Centre of Expertise for Energy Transition Doctoral / Applied Research Fellowship",
        source: "https://www.en-tran-ce.org/en/",
        funding: "Salaried research position (Dutch CAO-HBO): €3,200 to €4,100/month gross plus 8% holiday allowance and pension",
        status: "open-phd",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Applied doctoral cohort selection)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges; salaried appointment joint with University of Groningen.",
        requirements: {
          gpa: "Master's degree in Electrical Engineering, Sustainable Energy, or Chemical Engineering with high marks.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Master's thesis or publication in hydrogen production, microgrid optimization, or renewable heating.",
          references: "Two academic referee letters."
        },
        desc: "Collaborative applied doctoral research at the EnTranCe testing facility on the Zernike Campus, developing regional green hydrogen distribution, biomethane production, and smart hybrid electricity grids."
      },
      {
        id: 708,
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "environment"],
        type: "Research",
        title: "Hanze Research Centre for Biobased Economy Applied Research Associate",
        source: "https://www.hanze.nl/en/research/centres-of-expertise/biobased-economy",
        funding: "Annual salary of €44,000 to €52,000 gross under collective Dutch university labor agreement",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Project fellowship review)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried applied research position.",
        requirements: {
          gpa: "Master's or PhD in Chemical Technology, Bio-based Materials, or Environmental Engineering.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Practical laboratory experience in biomass valorization, bioplastics extraction, or fermentation technology.",
          references: "Two professional reference letters."
        },
        desc: "Applied research post investigating the extraction of high-value green chemicals and bio-based composite polymers from regional agricultural by-products and plant proteins."
      },
      {
        id: 709,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "Hanze Health Hub & Healthy Ageing Summer Practice Traineeship",
        source: "https://www.hanze.nl/en/research/centres-of-expertise/healthy-ageing",
        funding: "€600/month living stipend for 10 weeks with clinical and sensor laboratory access",
        status: "open-internship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Summer 2027 practice round)",
        fee: "€0 application fee",
        tuition: "Zero tuition fees.",
        requirements: {
          gpa: "Enrolled in Bachelor's or Master's in Physiotherapy, Health Sciences, Nursing, or Biomedical Engineering.",
          ielts: "Good English conversational abilities.",
          gre: "Not applicable.",
          papers: "Completed coursework in human physiology, biomechanics, or medical rehabilitation.",
          references: "One referee letter from a faculty clinical instructor."
        },
        desc: "Ten-week hands-on clinical and technology internship developing wearable sensor technologies and physical exercise interventions to support independent living among geriatric populations."
      },
      {
        id: 710,
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        type: "Job",
        title: "Hanze Senior Researcher / Lecturer in Hydrogen Systems & Decentralized Smart Grids",
        source: "https://www.werkenbijhanze.nl",
        funding: "Full-time permanent academic staff position: €4,800 to €6,200/month gross plus 8.3% year-end bonus (CAO-HBO Scale 11/12)",
        status: "open-job",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Academic recruitment closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried senior lecturer and researcher position.",
        requirements: {
          gpa: "Master's degree or PhD in Energy Engineering, Electrical Engineering, or Chemical Technology.",
          ielts: "Professional English fluency (willingness to learn Dutch).",
          gre: "Not applicable.",
          papers: "Demonstrated track record in applied energy transition projects, industry partnerships, and engineering pedagogy.",
          references: "Three professional reference contacts."
        },
        desc: "Senior academic role teaching in international renewable energy Master's programs and leading applied industry research projects at EnTranCe on hydrogen electrolysis, fuel cell systems, and local energy communities."
      }
    ],
    researchers: [
      {
        id: 321,
        name: "Dr. Wim van Gemert",
        title: "Professor of Energy Transition and Leading Researcher at EnTranCe",
        subject: "engineering",
        topics: ["Energy Transition", "Hydrogen Economy", "Decentralized Energy Systems", "Smart Grids"],
        source: "https://www.hanze.nl/en/research/professors/wim-van-gemert",
        summary: "Pioneer in Dutch energy transition research and founding professor of the EnTranCe Centre of Expertise, recognized nationally for advancing hydrogen storage and local community energy networks.",
        recruiting: "Not verified"
      },
      {
        id: 322,
        name: "Dr. Rob van Haren",
        title: "Professor of Transition Bioeconomy",
        subject: "chemistry",
        topics: ["Biobased Materials", "Circular Agriculture", "Green Chemistry", "Biomass Valorization"],
        source: "https://www.hanze.nl/en/research/professors/rob-van-haren",
        summary: "Leading expert in bio-based economy transitions, coordinating national Dutch consortia transforming agricultural residue streams into sustainable biomaterials and biochemicals.",
        recruiting: "Not verified"
      },
      {
        id: 323,
        name: "Dr. Carina Hilders",
        title: "Professor of Medical Leadership and Innovation",
        subject: "biology",
        topics: ["Healthy Ageing", "Healthcare Innovation", "Clinical Leadership", "Integrated Care"],
        source: "https://www.hanze.nl/en/research/centres-of-expertise/healthy-ageing",
        summary: "Medical director and healthcare scholar leading initiatives in sustainable medical leadership, patient-centered care pathways, and preventative health innovations at Hanze.",
        recruiting: "Not verified"
      }
    ]
  },

  // 10. SWITZERLAND: University of Neuchâtel (Row 1357)
  {
    institution: "University of Neuchâtel",
    shortName: "UniNE",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Neuchâtel, Switzerland",
    website: "https://www.unine.ch",
    sourceRow: 1357,
    slug: "university-of-neuchatel",
    heroEyebrow: "Switzerland · Neuchâtel · Swiss Cantonal Research Powerhouse & Chemical Ecology Leader · Reviewed 14 October 2026",
    headline: "University of Neuchâtel (Université de Neuchâtel)",
    description: "University of Neuchâtel guide: Salaried Swiss doctoral contracts (CHF 47,000+), Chemical Ecology PhD, BeNeFri Joint Computer Science Master's, and faculty profiles.",
    overview: "Founded in 1838 as the Academy of Neuchâtel and established as a full university in 1909, the University of Neuchâtel (Université de Neuchâtel - UniNE) is a prestigious French-speaking public research university nestled along Lake Neuchâtel in western Switzerland. A founding member of the BeNeFri academic network with the Universities of Bern and Fribourg, UniNE is internationally celebrated for chemical ecology and insect-plant communication, hydrogeology and geothermal energy at the Centre for Hydrogeology and Geothermics (CHYN), Swiss and international migration research (nccr – on the move), and sports law at the International Centre for Sports Studies (CIES). Admitted doctoral researchers receive formal Swiss cantonal research contracts and salaried stipends.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits) from an accredited university in a relevant academic discipline (minimum grade B or 70% equivalent); joint BeNeFri programs require foundational computing or mathematics coursework.",
      phd: "Recognized Master's degree (minimum 90 to 120 ECTS credits) with superior academic standing; written endorsement and formal acceptance from a UniNE professor who agrees to act as thesis supervisor.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90 for English-taught Master's and PhD programs; French B2/C1 for French-medium degree curricula.",
      proposal: "A 4 to 6 page doctoral research project detailing state of the art, research methodology, equipment requirements, and prospective milestone timetable.",
      appFee: "CHF 100 non-refundable application fee for Swiss degree holders; CHF 150 for applicants with foreign university qualifications.",
      documents: "Certified copies of degree diplomas, official grade transcripts, curriculum vitae, research statement, and written agreement from a UniNE thesis director."
    },
    tuitionText: "Tuition fees at the University of Neuchâtel are among the most accessible in Europe: standard semester tuition is only CHF 515 per semester for Swiss residents and CHF 790 per semester for international students. Doctoral candidates are employed as Swiss cantonal research assistants (assistants-doctorants), receiving a formal collective salary of CHF 47,000 to CHF 53,000 per year gross under Swiss National Science Foundation (SNSF) salary scales.",
    opportunities: [
      {
        id: 711,
        subject: "biology",
        subjects: ["biology", "environment", "social-sciences"],
        type: "Scholarship",
        title: "UniNE Excellence Doctoral Grants & Swiss National Science Foundation (SNSF) Fellowships",
        source: "https://www.unine.ch/recherche/home/bourses-et-financements.html",
        funding: "Salaried Swiss doctoral contract: CHF 47,040 to CHF 52,000/year gross under SNSF scales plus full research travel allowance; minimal tuition",
        status: "open-scholarship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual Swiss doctoral funding round)",
        fee: "CHF 150 international application fee",
        tuition: "CHF 515/term minimal registration charge.",
        requirements: {
          gpa: "Master's degree in natural sciences, computer science, law, or humanities with top marks (minimum 5.0/6.0 Swiss scale or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Master's thesis demonstrating independent analytical and scientific rigor.",
          references: "Two academic recommendation letters and thesis supervisor endorsement."
        },
        desc: "Competitive Swiss doctoral research funding providing formal cantonal employment contracts, high standard of living, and full laboratory integration for outstanding international scholars."
      },
      {
        id: 712,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "PhD",
        title: "UniNE PhD in Chemical Ecology & Plant-Insect Interactions",
        source: "https://www.unine.ch/biologie/home/recherche/ecologie-chimique.html",
        funding: "Full 4-year SNSF research assistant contract: CHF 48,000/year plus specialized laboratory consumables and mass spectrometry access",
        status: "open-phd",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Spring doctoral review)",
        fee: "CHF 150 application fee",
        tuition: "CHF 515/semester nominal registration fee.",
        requirements: {
          gpa: "Master of Science in Biology, Ecology, Agronomy, or Organic Chemistry.",
          ielts: "Proficient scientific English (IELTS 6.5 or equivalent).",
          gre: "Not required.",
          papers: "Practical research experience in plant volatile organic compound (VOC) analysis, chromatography, or insect behavior.",
          references: "Two academic referee letters from biological sciences faculty."
        },
        desc: "World-class doctoral research at UniNE's flagship Laboratory of Fundamental and Applied Research in Chemical Ecology, unraveling how plants emit volatile signals to recruit predatory insects for natural crop pest control."
      },
      {
        id: 713,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master",
        title: "UniNE Master of Science (MSc) in Computer Science (Joint BeNeFri Master with Fribourg & Bern)",
        source: "https://www.unine.ch/informatique/home/enseignements/master.html",
        funding: "BeNeFri mobility travel reimbursements and Swiss cantonal student assistance grants",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-Swiss international applicant deadline for Autumn intake)",
        fee: "CHF 150 application fee",
        tuition: "CHF 790/semester for international students (CHF 515 for Swiss residents).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Software Engineering, or Mathematics with at least 60 ECTS in core computing.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework in algorithms, operating systems, and distributed computing.",
          references: "One academic reference letter."
        },
        desc: "Joint English-taught Master's degree organized by the Universities of Neuchâtel, Fribourg, and Bern, allowing students to combine advanced modules in distributed systems, cybersecurity, and data analytics across all three Swiss campuses."
      },
      {
        id: 714,
        subject: "environment",
        subjects: ["environment", "physics", "engineering"],
        type: "PhD",
        title: "UniNE PhD in Hydrogeology and Geothermics at the Centre for Hydrogeology (CHYN)",
        source: "https://www.unine.ch/chyn/home/recherche.html",
        funding: "Salaried Swiss doctoral contract: CHF 47,500/year gross plus deep borehole drilling and geochemical field equipment access",
        status: "open-phd",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Doctoral recruitment intake)",
        fee: "CHF 150 application fee",
        tuition: "CHF 515/semester nominal fee.",
        requirements: {
          gpa: "Master's degree in Hydrogeology, Geosciences, Environmental Engineering, or Applied Geophysics.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Master's thesis in groundwater modeling, aquifer characterization, or deep geothermal energy systems.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the world-renowned Centre for Hydrogeology and Geothermics (CHYN), investigating subsurface karst aquifer flow, geothermal heat extraction, and Alpine groundwater security under climate change."
      },
      {
        id: 715,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Swiss National Centre of Competence in Research (nccr - on the move) Research Fellow",
        source: "https://nccr-onthemove.ch",
        funding: "Salaried postdoctoral fellowship: CHF 75,000 to CHF 84,000/year gross under SNSF senior researcher scales",
        status: "open-research",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Annual NCCR research round)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried postdoctoral research post.",
        requirements: {
          gpa: "PhD in Sociology, Political Science, Economics, Demography, or Migration Law.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications on international migration, citizenship regimes, or refugee integration policies.",
          references: "Two academic recommendation letters."
        },
        desc: "Two-year postdoctoral fellowship at the national research hub nccr - on the move, analyzing global human mobility, labor migration governance, and social inclusion policies in European and Swiss contexts."
      },
      {
        id: 716,
        subject: "environment",
        subjects: ["environment"],
        type: "Internship",
        title: "UniNE Centre for Hydrogeology Alpine Groundwater Summer Traineeship",
        source: "https://www.unine.ch/chyn",
        funding: "CHF 1,800/month 8-week summer stipend plus Alpine field station lodging",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 field traineeship call)",
        fee: "CHF 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Geology, Environmental Science, or Civil Engineering with strong grades.",
          ielts: "Good English or French working proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in physical geology, hydrology, or soil mechanics.",
          references: "One referee letter from a geology professor."
        },
        desc: "Eight-week summer field traineeship in the Swiss Jura mountains and Valais Alps, performing groundwater tracer tests, spring discharge measurements, and isotopic water analysis."
      },
      {
        id: 717,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Job",
        title: "UniNE Postdoctoral Researcher in Applied Microeconomics & Resource Policy",
        source: "https://www.unine.ch/fse/home/recherche.html",
        funding: "Full-time postdoctoral contract: CHF 80,000 to CHF 88,000/year gross with Swiss social security benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Formal academic search deadline)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried academic staff position.",
        requirements: {
          gpa: "PhD in Economics, Econometrics, or Public Policy awarded within the last 4 years.",
          ielts: "Exemplary professional English fluency.",
          gre: "Not applicable.",
          papers: "Proven publication record in leading applied microeconomics or environmental economics journals.",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral appointment at the Faculty of Economics and Business (FSE), modeling energy transition policy incentives, consumer behavior, and carbon pricing mechanisms in European markets."
      }
    ],
    researchers: [
      {
        id: 324,
        name: "Dr. Ted Turlings",
        title: "Professor of Biology and Director of the Laboratory of Chemical Ecology",
        subject: "biology",
        topics: ["Chemical Ecology", "Plant-Herbivore Interactions", "Volatile Signaling", "Biological Control"],
        source: "https://www.unine.ch/biologie/home/recherche/ecologie-chimique/ted-turlings.html",
        summary: "Winner of the prestigious Marcel Benoist Swiss Science Prize (the 'Swiss Nobel') and world pioneer in discovering how plants communicate chemically to summon natural enemies of insect pests.",
        recruiting: "Not verified"
      },
      {
        id: 325,
        name: "Dr. Philip Brunner",
        title: "Professor of Hydrogeology and Director of CHYN",
        subject: "environment",
        topics: ["Hydrogeology", "Surface Water-Groundwater Interactions", "Hydrological Modeling", "Water Resources"],
        source: "https://www.unine.ch/chyn/home/membres/philip-brunner.html",
        summary: "Director of the Centre for Hydrogeology and Geothermics (CHYN), internationally acclaimed for developing advanced integrated numerical models of groundwater-surface water interaction.",
        recruiting: "Not verified"
      },
      {
        id: 326,
        name: "Dr. Gianni D'Amato",
        title: "Professor of Migration and Citizenship Studies and Director of SFM",
        subject: "social-sciences",
        topics: ["Migration Studies", "Citizenship", "Integration Policy", "Populism and Mobility"],
        source: "https://www.unine.ch/sfm/home/equipe/gianni-damato.html",
        summary: "Director of the Swiss Forum for Migration and Population Studies (SFM) and project director at nccr - on the move, celebrated for extensive comparative research on European migration and citizenship.",
        recruiting: "Not verified"
      }
    ]
  }
];
