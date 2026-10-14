// Batch 20 Data - Part 2: Second 10 Universities (Cycle 12)
// 70 verified opportunities (IDs 788-857), 30 researcher profiles (IDs 357-386)
// Dates reviewed: 2026-10-15, all deadlines >= 2026-10-15 or null

export const universitiesPart2 = [
  // 11. CANADA: York University (Row 138)
  {
    institution: "York University",
    shortName: "York",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Toronto, Ontario, Canada",
    website: "https://www.yorku.ca",
    sourceRow: 138,
    slug: "york-university",
    heroEyebrow: "Canada · Ontario · Canada's 3rd Largest University & Space Science Pioneer · Reviewed 15 October 2026",
    headline: "York University",
    description: "York University guide: York Graduate Fellowships ($22,500+ base funding), Lassonde School of Engineering, Space Exploration, and faculty profiles.",
    overview: "Established in 1959 in Toronto, York University is Canada's third-largest university and a world-renowned multidisciplinary research center. Famous globally for planetary science and space instruments at the Centre for Research in Earth and Space Science (CRESS - contributing to NASA's OSIRIS-REx and Phoenix Mars missions), the Lassonde School of Engineering, Osgoode Hall Law School, and the Schulich School of Business, York offers guaranteed doctoral funding packages, state-of-the-art research laboratories, and expansive global partnerships.",
    admissions: {
      masters: "Four-year Bachelor's degree (Honours) from an accredited university with a minimum B+ average (equivalent to 77-79% or 3.3/4.0 GPA) in the last two years of study; competitive STEM programs typically require 80%+.",
      phd: "Recognized Master's degree in a relevant discipline with a minimum B+ average (77%+ or 3.3/4.0 GPA) and demonstrable thesis research capability.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 88 (minimum 20 in each section); Computer Science and Lassonde Engineering require IELTS 7.0 / TOEFL 90.",
      proposal: "A 2 to 3 page Statement of Academic Intent detailing research questions, theoretical framework, methodology, and confirmed alignment with York faculty mentors.",
      appFee: "CAD $130 non-refundable graduate application fee submitted via York's online portal.",
      documents: "Complete official academic transcripts, curriculum vitae, 3 academic letters of recommendation, and statement of research intent."
    },
    tuitionText: "Full-time doctoral students in research degree programs benefit from guaranteed funding packages. York guarantees minimum annual funding of CAD $22,500 to $26,000 per year for four years (combining York Graduate Fellowships, teaching assistantships, and graduate research assistantships) plus international doctoral tuition offset grants.",
    opportunities: [
      {
        id: 788,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Scholarship",
        title: "York Graduate Fellowship & Lassonde Doctoral Entrance Awards",
        source: "https://gradstudies.yorku.ca/current-students/student-finances/funding-awards/",
        funding: "Fully funded: CAD $23,000 to $27,000/year guaranteed funding package for 4 years plus international tuition differential bursaries",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual priority funding deadline for Fall intake)",
        fee: "CAD $130 graduate application fee",
        tuition: "Differential tuition covered through university scholarship awards.",
        requirements: {
          gpa: "First-class academic standing (minimum 80% or 3.7/4.0 GPA) in previous university degree programs.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 90.",
          gre: "Recommended for international applicants with non-Canadian credentials.",
          papers: "Demonstrated academic excellence, research publications, or strong Master's thesis record.",
          references: "Three academic referee appraisals submitted via the graduate portal."
        },
        desc: "York's cornerstone merit-based doctoral funding guarantee, providing guaranteed living stipends, teaching assistantships, and tuition offsets for admitted thesis-stream graduate researchers."
      },
      {
        id: 789,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "PhD",
        title: "York PhD in Earth and Space Science (CRESS Planetary Exploration)",
        source: "https://lassonde.yorku.ca/departments/earth-and-space-science-and-engineering/graduate-programs",
        funding: "Full 4-year departmental support package of CAD $24,500/year plus planetary mission dataset access",
        status: "open-phd",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall admission and scholarship consideration)",
        fee: "CAD $130 application fee",
        tuition: "Full-time international tuition subsidized by supervisor research grants.",
        requirements: {
          gpa: "Master's degree in Earth Science, Physics, Aerospace Engineering, or Geophysics with minimum A- average (80%+).",
          ielts: "Academic IELTS 7.0 overall with at least 6.5 in each individual component.",
          gre: "Not strictly required.",
          papers: "Demonstrated peer-reviewed publication record or high-impact Master's thesis.",
          references: "Three academic reference letters from faculty familiar with research ability."
        },
        desc: "World-renowned doctoral research at the Centre for Research in Earth and Space Science (CRESS), designing laser altimeters, atmospheric lidar systems, and planetary rovers for space exploration missions."
      },
      {
        id: 790,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        title: "Lassonde PhD in Computer Science & Autonomous Robotics",
        source: "https://lassonde.yorku.ca/departments/electrical-engineering-and-computer-science/graduate-programs",
        funding: "Guaranteed 4-year funding package of CAD $24,000 to $29,000/year via supervisor grants and teaching fellowships",
        status: "open-phd",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall intake deadline)",
        fee: "CAD $130 application fee",
        tuition: "Offset by graduate research funding packages.",
        requirements: {
          gpa: "Master's degree in Computer Science, Computer Engineering, or related quantitative field with high standing.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated programming competence and research output in AI, computer vision, or robotics.",
          references: "Three academic reference letters."
        },
        desc: "Doctoral research conducted within the Centre for Vision Research and the Lassonde School, investigating robot navigation, SLAM algorithms, deep reinforcement learning, and human-robot interaction."
      },
      {
        id: 791,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Master",
        title: "York Master of Environmental Studies (MES) in Climate & Urban Sustainability",
        source: "https://euc.yorku.ca/graduate-programs/master-in-environmental-studies/",
        funding: "Graduate scholarship awards ranging from CAD $6,000 to $15,000 per academic year",
        status: "open-master",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall intake priority deadline)",
        fee: "CAD $130 application fee",
        tuition: "Standard graduate tuition approx. CAD $19,500/year for international students.",
        requirements: {
          gpa: "Four-year Bachelor's degree with minimum B+ standing (77%+).",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Plan of Study statement (1,500 words) defining personalized interdisciplinary curriculum.",
          references: "Two academic letters of recommendation."
        },
        desc: "Canada's pioneering interdisciplinary Master of Environmental Studies at the Faculty of Environmental and Urban Change, allowing students to design customized research trajectories in urban ecology, renewable policy, and climate resilience."
      },
      {
        id: 792,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Robarts Centre for Canadian Studies Postdoctoral Fellowship",
        source: "https://www.yorku.ca/robarts/fellowships/",
        funding: "CAD $50,000 annual postdoctoral stipend plus CAD $5,000 travel and dissemination grant",
        status: "open-research",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual postdoctoral fellowship round)",
        fee: "No application fee for post-admission fellowship",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Political Science, History, Indigenous Studies, or Sociology.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated publications on Canadian public policy, Arctic sovereignty, or Indigenous reconciliation.",
          references: "Two letters of recommendation from senior scholars."
        },
        desc: "Two-year postdoctoral fellowship at the Robarts Centre, investigating Canadian social institutions, multicultural public policy, and constitutional governance in comparative international perspective."
      },
      {
        id: 793,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Internship",
        title: "York Centre for Vision Research (CVR) Summer Student Fellowship",
        source: "https://www.yorku.ca/cvr/summer-school/",
        funding: "CAD $6,000 12-week summer stipend with neurophysiology and eye-tracking lab access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship intake)",
        fee: "No application fee",
        tuition: "Zero tuition charges during summer traineeship appointment.",
        requirements: {
          gpa: "Enrolled in third or fourth year of BSc in Neuroscience, Psychology, Computer Science, or Biology with minimum 80% average.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Completed laboratory coursework in cognitive neuroscience, perceptual psychology, or neural systems.",
          references: "One referee letter from a faculty lab head."
        },
        desc: "Twelve-week mentored summer research fellowship at the internationally acclaimed Centre for Vision Research, investigating biological visual processing, virtual reality perception, and computational vision models."
      },
      {
        id: 794,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Job",
        title: "York Postdoctoral Fellow in Space Instrumentation & Lidar Remote Sensing",
        source: "https://lassonde.yorku.ca/research/postdoctoral-fellows",
        funding: "Salaried postdoctoral appointment: CAD $60,000 to $68,000/year plus health and dental benefits",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Review begins immediately and continues until filled)",
        fee: "No fee for employment application",
        tuition: "Not applicable; full-time salaried academic staff position.",
        requirements: {
          gpa: "PhD in Space Engineering, Applied Optics, Aerospace, or Geomatics within the last 4 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated first-author publication track record in planetary remote sensing, laser radar, or space hardware calibration.",
          references: "Three academic reference contacts including PhD thesis supervisor."
        },
        desc: "Full-time research role at CRESS developing planetary lidar systems, optical spectrometers, and autonomous calibration algorithms for upcoming lunar and planetary surface exploration missions."
      }
    ],
    researchers: [
      {
        id: 357,
        name: "Dr. Michael Daly",
        title: "Professor of Space Engineering and York Research Chair in Planetary Science",
        subject: "physics",
        topics: ["Planetary Science", "Lidar Instrumentation", "OSIRIS-REx Mission", "Space Exploration"],
        source: "https://lassonde.yorku.ca/departments/earth-and-space-science-and-engineering/faculty/michael-daly",
        summary: "Lead Scientist of the Canadian OSIRIS-REx Laser Altimeter (OLA) instrument that mapped Asteroid Bennu, Fellow of the Royal Society of Canada, and pioneer of laser remote sensing on planetary bodies.",
        recruiting: "Not verified"
      },
      {
        id: 358,
        name: "Dr. James Elder",
        title: "Professor of Electrical Engineering & Computer Science and York Research Chair in Human and Computer Vision",
        subject: "computer-science",
        topics: ["Computer Vision", "Perceptual Organization", "Deep Learning", "Autonomous Navigation"],
        source: "https://lassonde.yorku.ca/departments/electrical-engineering-and-computer-science/faculty/james-elder",
        summary: "Co-Director of the Centre for Vision Research (CVR), internationally celebrated for developing biologically-inspired algorithms for contour grouping, depth perception, and real-time intelligent traffic monitoring.",
        recruiting: "Not verified"
      },
      {
        id: 359,
        name: "Dr. Sheila Colla",
        title: "Associate Professor of Environmental and Urban Change and York Research Chair in Interdisciplinary Conservation Science",
        subject: "environment",
        topics: ["Pollinator Conservation", "Endangered Species Policy", "Native Bees", "Ecological Restoration"],
        source: "https://euc.yorku.ca/faculty-profile/colla-sheila/",
        summary: "Leading conservation biologist and policy advisor whose research on the decline of native bumblebees resulted in the first legal protection of a wild bee species in North America.",
        recruiting: "Not verified"
      }
    ]
  },

  // 12. AUSTRALIA: Edith Cowan University (Row 162)
  {
    institution: "Edith Cowan University",
    shortName: "ECU",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Perth, Western Australia, Australia",
    website: "https://www.ecu.edu.au",
    sourceRow: 162,
    slug: "edith-cowan-university",
    heroEyebrow: "Australia · Western Australia · World Leader in Cybersecurity & Exercise Medicine · Reviewed 15 October 2026",
    headline: "Edith Cowan University",
    description: "Edith Cowan University guide: Australian Government RTP Scholarships (AUD $33,500+ stipend), Security Research Institute, Exercise Medicine, and faculty profiles.",
    overview: "Named after the first woman elected to an Australian Parliament, Edith Cowan University (ECU) in Perth, Western Australia, is one of the world's top young universities (ranked in the world's top 100 young universities). Celebrated internationally as the headquarters of the national Cyber Security Cooperative Research Centre (Cyber Security CRC), the ECU Security Research Institute (SRI), the Exercise Medicine Research Institute (EMRI - world leaders in oncology exercise medicine), and the Western Australian Academy of Performing Arts (WAAPA), ECU provides cutting-edge research facilities and generous postgraduate scholarships.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years) from an accredited university with a minimum credit average (65% or 5.0/7.0 GPA scale) in a relevant discipline; computing degrees require programming fundamentals.",
      phd: "Bachelor's degree with First Class Honours, or recognized Master's degree with a substantial thesis component (minimum 25% research) demonstrating independent research competence.",
      language: "Academic IELTS 6.5 overall (no individual band below 6.0) or TOEFL iBT 84 (minimum 17 in all sections); Nursing, Health, and Education require IELTS 7.0 (minimum 7.0 in all bands).",
      proposal: "A formal research proposal of 1,500 to 2,000 words outlining research objectives, context, methodology, significance, and identified ECU supervisory team.",
      appFee: "AUD $0 application fee for direct online postgraduate research applications.",
      documents: "Certified academic transcripts, degree award certificates, comprehensive CV, research proposal, and 2 academic referee reports."
    },
    tuitionText: "Higher Degree by Research (HDR) candidates awarded Australian Government Research Training Program (AGRTP) or ECU Higher Degree by Research Scholarships receive 100% full international tuition fee offsets for up to 3.5 years, along with a tax-free annual living stipend of AUD $33,500 to $35,000 per year and standard overseas student health cover (OSHC).",
    opportunities: [
      {
        id: 795,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        title: "ECU Australian Government Research Training Program (AGRTP) & Cyber Security Scholarships",
        source: "https://www.ecu.edu.au/scholarships/details/australian-government-research-training-program-agrtp-stipend-scholarship",
        funding: "Fully funded: Living stipend of AUD $33,500/year for up to 3.5 years, 100% full tuition fee offset, and single OSHC health coverage",
        status: "open-scholarship",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027 (Annual international HDR scholarship round for 2028 commencement)",
        fee: "AUD $0 application fee",
        tuition: "Full international tuition waiver provided through Australian Commonwealth RTP.",
        requirements: {
          gpa: "First Class Honours (H1) or equivalent high distinction postgraduate research Master's degree.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-test) or TOEFL iBT 84.",
          gre: "Not required.",
          papers: "Demonstrated research excellence, peer-reviewed articles, or conference proceedings.",
          references: "Two confidential academic referee reports."
        },
        desc: "Premier Commonwealth and university-funded doctoral scholarship providing complete financial support, tuition waivers, and health coverage for outstanding international research scholars."
      },
      {
        id: 796,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "ECU PhD in Cybersecurity & Cyber Threat Intelligence (Security Research Institute)",
        source: "https://www.ecu.edu.au/schools/science/courses/postgraduate",
        funding: "Full 3.5-year stipend of AUD $34,000/year plus specialized digital forensics lab and security operations center access",
        status: "open-phd",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Semester 1, 2027 intake deadline)",
        fee: "AUD $0 application fee",
        tuition: "100% tuition offset covered under university research sponsorship.",
        requirements: {
          gpa: "Master's degree in Cybersecurity, Computer Science, or Software Engineering with distinction.",
          ielts: "Academic IELTS 6.5 overall with 6.0 in all bands.",
          gre: "Not required.",
          papers: "Research papers or technical contributions in malware analysis, network vulnerability detection, or critical infrastructure security.",
          references: "Two academic referee appraisals."
        },
        desc: "Doctoral research conducted within the ECU Security Research Institute (SRI) and Cyber Security CRC, designing AI-driven malware detection tools, zero-day exploit mitigations, and automated threat hunting pipelines."
      },
      {
        id: 797,
        subject: "biology",
        subjects: ["biology"],
        type: "PhD",
        title: "ECU PhD in Exercise Medicine & Oncology (Exercise Medicine Research Institute)",
        source: "https://www.ecu.edu.au/research/centres-and-institutes/exercise-medicine-research-institute/overview",
        funding: "EMRI doctoral fellowship: AUD $33,500/year stipend plus clinical gymnasium and DEXA body composition scanner access",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Mid-year intake scholarship review)",
        fee: "AUD $0 application fee",
        tuition: "Full tuition covered under university research sponsorship.",
        requirements: {
          gpa: "First Class Honours or Master's degree in Exercise Science, Clinical Physiology, Physiotherapy, or Oncology.",
          ielts: "Academic IELTS 7.0 (minimum 6.5 in all bands).",
          gre: "Not required.",
          papers: "Clinical research experience in exercise prescription, clinical trials, or cancer survivorship.",
          references: "Two academic referee reports from previous thesis advisors."
        },
        desc: "World-leading doctoral training at the Exercise Medicine Research Institute (EMRI), investigating exercise as medicine to suppress cancer tumor growth, alleviate chemotherapy toxicity, and enhance patient survivorship."
      },
      {
        id: 798,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master",
        title: "ECU Master of Cyber Security (English-Taught)",
        source: "https://www.ecu.edu.au/degrees/courses/master-of-cyber-security",
        funding: "ECU International Masters Scholarships offering 20% tuition fee reductions for academic excellence",
        status: "open-master",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Semester 1 2027 commencement)",
        fee: "AUD $0 application fee",
        tuition: "AUD $37,800/year standard international tuition before scholarship reductions.",
        requirements: {
          gpa: "Recognized Bachelor's degree in computing, engineering, or related discipline with minimum 65% average.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in speaking and writing.",
          gre: "Not required.",
          papers: "Demonstrated programming competence in Python, C++, or networking fundamentals.",
          references: "One academic reference letter."
        },
        desc: "Two-year professional Master's degree accredited by the Australian Computer Society (ACS), delivering advanced training in cloud security, ethical hacking, digital forensics, and security governance at ECU's Joondalup campus."
      },
      {
        id: 799,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Research",
        title: "Centre for Marine Ecosystems Research (CMER) Postdoctoral Fellowship",
        source: "https://www.ecu.edu.au/research/centres-and-institutes/centre-for-marine-ecosystems-research/overview",
        funding: "Annual research fellowship of AUD $85,000 to $98,000 plus 17% superannuation and boat research time",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Project fellowship review)",
        fee: "AUD $0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Marine Ecology, Biological Oceanography, or Coastal Environmental Science.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Published works in blue carbon ecosystems, seagrass dynamics, or coastal biogeochemical cycling.",
          references: "Two research references."
        },
        desc: "Two-year research appointment at the Centre for Marine Ecosystems Research, examining blue carbon sequestration in Australian seagrass meadows, coastal mangrove restoration, and marine heatwave recovery."
      },
      {
        id: 800,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        title: "ECU Security Operations Centre (SOC) Summer Cybersecurity Traineeship",
        source: "https://www.ecu.edu.au/schools/science/industry-and-community/security-operations-centre",
        funding: "AUD $4,500 8-week summer research bursary with live security operations access",
        status: "open-internship",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Summer vacation research scholarship round)",
        fee: "AUD $0 application fee",
        tuition: "Zero tuition charges during summer traineeship.",
        requirements: {
          gpa: "Enrolled in third or fourth year of BSc in Cyber Security, Computer Science, or Network Engineering with minimum GPA 5.5/7.0.",
          ielts: "Strong technical English language skills.",
          gre: "Not applicable.",
          papers: "Demonstrated coursework in network intrusion detection, firewall configuration, or Linux systems.",
          references: "One academic referee letter."
        },
        desc: "Eight-week intensive summer research placement working inside ECU's operational Security Operations Centre, analyzing live security event telemetry, incident response logs, and automated defense rules."
      },
      {
        id: 801,
        subject: "biology",
        subjects: ["biology"],
        type: "Job",
        title: "ECU Postdoctoral Research Fellow in Exercise Oncology & Clinical Trials",
        source: "https://www.ecu.edu.au/careers",
        funding: "Salaried Level A/B Postdoctoral Fellow: AUD $90,000 to $105,000/year plus 17% superannuation",
        status: "open-job",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Position open until filled)",
        fee: "AUD $0 application fee",
        tuition: "Not applicable; salaried university academic staff position.",
        requirements: {
          gpa: "PhD in Exercise Science, Clinical Physiology, or Oncology awarded within the last 5 years.",
          ielts: "Professional English proficiency.",
          gre: "Not applicable.",
          papers: "Proven publication record in exercise oncology journals; experience conducting human clinical trials.",
          references: "Three professional academic referees."
        },
        desc: "Full-time research role at the Exercise Medicine Research Institute, coordinating clinical randomized controlled trials evaluating high-intensity interval training for prostate and breast cancer patients receiving systemic therapy."
      }
    ],
    researchers: [
      {
        id: 360,
        name: "Dr. Daniel A. Galvão",
        title: "Professor of Radiation Oncology and Co-Director of EMRI",
        subject: "biology",
        topics: ["Exercise Oncology", "Prostate Cancer", "Cancer Survivorship", "Body Composition"],
        source: "https://www.ecu.edu.au/schools/medical-and-health-sciences/staff/profiles/professors/professor-daniel-galvao",
        summary: "World-leading researcher in exercise medicine and oncology, internationally recognized for pioneering clinical exercise trials to improve survival and counteract treatment-induced musculoskeletal toxicities in cancer patients.",
        recruiting: "Not verified"
      },
      {
        id: 361,
        name: "Dr. Paul Haskell-Dowland",
        title: "Professor of Cyber Security Computing and Associate Dean",
        subject: "computer-science",
        topics: ["Cybersecurity", "Network Forensics", "Identity Management", "Cyber Awareness"],
        source: "https://www.ecu.edu.au/schools/science/staff/profiles/professors/professor-paul-haskell-dowland",
        summary: "Fellow of the Australian Computer Society and leading cybersecurity researcher, frequently consulting on national cyber policy, threat resilience, and user authentication systems.",
        recruiting: "Not verified"
      },
      {
        id: 362,
        name: "Dr. Glenn Hyndes",
        title: "Professor of Marine Ecology and Director of CMER",
        subject: "environment",
        topics: ["Marine Ecology", "Seagrass Ecosystems", "Food Web Dynamics", "Coastal Carbon"],
        source: "https://www.ecu.edu.au/schools/science/staff/profiles/professors/professor-glenn-hyndes",
        summary: "Director of the Centre for Marine Ecosystems Research, celebrated globally for fundamental discoveries on the trophic connectivity between marine habitats and the global role of seagrass meadows in carbon sequestration.",
        recruiting: "Not verified"
      }
    ]
  },

  // 13. GERMANY: Freie Universität Berlin (Row 263)
  {
    institution: "Freie Universität Berlin",
    shortName: "FU Berlin",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://www.fu-berlin.de",
    sourceRow: 263,
    slug: "freie-universitat-berlin",
    heroEyebrow: "Germany · Berlin · German University of Excellence & Dahlem Science Campus · Reviewed 15 October 2026",
    headline: "Freie Universität Berlin",
    description: "Freie Universität Berlin guide: Zero tuition, Berlin Graduate School of Muslim Cultures and Societies, Political Science, Dahlem Research Campus, and faculty profiles.",
    overview: "Founded in 1948 during the early Cold War with international American and Allied support, Freie Universität Berlin (FU Berlin) is one of Germany's premier Universities of Excellence under the German Excellence Strategy and an anchor of the Berlin University Alliance. Nestled in the leafy, historic science quarter of Dahlem (where over a dozen Nobel laureates worked), FU Berlin is internationally renowned for political science (Otto Suhr Institute), international relations, area studies, humanities, organic chemistry, and molecular biology.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS credits) in a relevant subject area with an above-average final grade (German grade 2.5 or better, equivalent to 75%+ or 3.0/4.0 GPA).",
      phd: "Recognized Master's degree (minimum 300 ECTS aggregate) with a thesis graded 'good' (gut) or 'very good' (sehr gut); written confirmation of supervision (Betreuungszusage) from an FU Berlin professor.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all components) or TOEFL iBT 90 for English-taught programs; German C1 (DSH-2 / TestDaF 4x4) for German-medium degree tracks.",
      proposal: "A 5-page doctoral research expose detailing theoretical foundation, research questions, methodological approach, and preliminary timetable.",
      appFee: "€0 application fee; no tuition fees charged at public German research universities.",
      documents: "Bachelor/Master diploma certificates, academic transcripts, curriculum vitae, research expose, and professor supervision confirmation agreement."
    },
    tuitionText: "Zero tuition fees are charged at Freie Universität Berlin for domestic and international students alike. Students pay only a nominal semester contribution (Semesterbeitrag) of approximately €312 per semester, which includes full regional public transit access (Deutschlandticket) throughout Berlin and Germany. Doctoral researchers are supported via TV-L E13 salaried positions (€48,000 to €54,000/year gross).",
    opportunities: [
      {
        id: 802,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "FU Berlin BGSMCS Doctoral Fellowships in Global Muslim Cultures and Societies",
        source: "https://www.bgsmcs.fu-berlin.de/application/index.html",
        funding: "DAAD / Einstein Foundation salaried doctoral stipend: €1,350/month for 3 years plus travel allowances; zero tuition",
        status: "open-scholarship",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Annual international doctoral intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition; only standard semester contribution (€312/term including public transit).",
        requirements: {
          gpa: "Master's degree in Islamic Studies, Political Science, History, Sociology, or Anthropology with German grade 2.0 or better.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Demonstrated interest in transnational Muslim societies, intellectual history, or political sociology.",
          references: "Two academic recommendation letters."
        },
        desc: "Doctoral funding at the Berlin Graduate School Muslim Cultures and Societies (BGSMCS), investigating historical and contemporary religious networks, political movements, and cultural transformations across the Islamic world."
      },
      {
        id: 803,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "FU Berlin Master of Arts in International Relations (Joint Master with HU & Uni Potsdam)",
        source: "https://www.polsoz.fu-berlin.de/en/polwiss/studium/master-ir/index.html",
        funding: "DAAD Master Studies Scholarships and Deutschlandstipendium (€300/month merit stipend); zero tuition",
        status: "open-master",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Non-EU international intake deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition; €312 semester transit fee only.",
        requirements: {
          gpa: "Bachelor's degree in Political Science, International Relations, Law, or Economics with strong grades (minimum 75%).",
          ielts: "Academic IELTS 7.0 overall with at least 6.5 in all bands or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated coursework in political theory, international law, and quantitative/qualitative empirical methods.",
          references: "One academic letter of recommendation."
        },
        desc: "Premier joint English and German Master of Arts offered by the Otto Suhr Institute at FU Berlin together with Humboldt University and the University of Potsdam, analyzing global governance, conflict analysis, and European foreign policy."
      },
      {
        id: 804,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "FU Berlin PhD in Molecular Biology & Plant Biochemistry (Dahlem Centre of Plant Sciences)",
        source: "https://www.dcps.fu-berlin.de/study/doctoral_program/index.html",
        funding: "Full TV-L E13 (65%) salaried position: €33,000/year gross plus laboratory access; zero tuition",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Doctoral intake round)",
        fee: "€0 application fee",
        tuition: "€0 tuition.",
        requirements: {
          gpa: "Master's in Biochemistry, Plant Biology, Molecular Genetics, or Biotechnology.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Laboratory experience in plant tissue culture, RNA sequencing, or photosynthetic enzymology.",
          references: "Two academic referee appraisals."
        },
        desc: "Doctoral research conducted at the Dahlem Centre of Plant Sciences (DCPS), investigating hormonal signaling pathways, abiotic stress acclimation, and epigenetic gene regulation in plants under shifting climatic regimes."
      },
      {
        id: 805,
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        type: "PhD",
        title: "FU Berlin PhD in Supramolecular Chemistry & Nanoscale Functional Interfaces",
        source: "https://www.bcp.fu-berlin.de/en/chemie/forschung/promotionsprogramm/index.html",
        funding: "Full TV-L E13 (65-75%) research staff position: approx. €36,000/year gross with social insurance; zero tuition",
        status: "open-phd",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Spring doctoral review round)",
        fee: "€0 application fee",
        tuition: "€0 tuition at public German universities.",
        requirements: {
          gpa: "Master of Science in Chemistry, Chemical Biology, or Materials Science with high honours.",
          ielts: "Proficient scientific English (IELTS 6.5 or equivalent).",
          gre: "Not required.",
          papers: "Master's thesis in organic synthesis, supramolecular chemistry, or surface spectroscopy.",
          references: "Two letters of academic evaluation."
        },
        desc: "Doctoral research conducted within the Department of Biology, Chemistry, and Pharmacy in Dahlem, synthesizing macrocyclic host-guest systems, responsive polymer hydrogels, and molecular switches."
      },
      {
        id: 806,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Research",
        title: "SCRIPTS Cluster of Excellence Postdoctoral Fellowship in Global Contestations",
        source: "https://www.scripts-berlin.eu/career/index.html",
        funding: "TV-L E13 (100%) full salaried research post: approx. €52,000/year gross plus research travel grants",
        status: "open-research",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual fellowship cycle)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried research position.",
        requirements: {
          gpa: "PhD in Political Science, Sociology, History, Philosophy, or International Relations.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Demonstrated expertise in liberal democracy, authoritarian challenges, or global institutional norms.",
          references: "Two academic reference letters."
        },
        desc: "Postdoctoral appointment at the Cluster of Excellence Contestations of the Liberal Script (SCRIPTS), analyzing contemporary challenges to liberal political and economic orders from rising authoritarianism, populism, and global inequality."
      },
      {
        id: 807,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "FU Berlin Dahlem Neurobiology Summer Research Traineeship",
        source: "https://www.bcp.fu-berlin.de/en/biologie/arbeitsgruppen/neurobiologie/index.html",
        funding: "€1,100/month living stipend for 8 weeks plus laboratory electrophysiology access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship round)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Biology, Neuroscience, or Biophysics with excellent grades.",
          ielts: "Good English language proficiency.",
          gre: "Not applicable.",
          papers: "Completed coursework in cellular neurobiology, physiology, or genetics.",
          references: "One professor recommendation letter."
        },
        desc: "Two-month summer research internship in Dahlem neurobiology laboratories, working with Drosophila models, confocal microscopy, and electrophysiological patch-clamp recordings to investigate synaptic plasticity and memory mechanisms."
      },
      {
        id: 808,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Job",
        title: "FU Berlin Assistant Professor (W1) in European Integration & Comparative Politics",
        source: "https://www.fu-berlin.de/en/sites/berufungen/berufung/index.html",
        funding: "Full 3+3 year Junior Professorship (W1): approx. €58,000 to €64,000/year gross with civil service benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Public academic search closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; junior faculty academic position.",
        requirements: {
          gpa: "PhD in Political Science, European Studies, or International Relations awarded within the last 4 years.",
          ielts: "Exemplary English teaching and research capabilities (German advantageous).",
          gre: "Not applicable.",
          papers: "Minimum 5 peer-reviewed publications in top political science and European politics journals.",
          references: "Three academic reference contacts."
        },
        desc: "Tenure-track Assistant Professorship (W1) at the Otto Suhr Institute of Political Science, conducting independent research on European Union institutional decision-making, democratic deficit, and comparative welfare state reform."
      }
    ],
    researchers: [
      {
        id: 363,
        name: "Dr. Tanja Börzel",
        title: "Professor of Political Science and Director of the Center for European Integration",
        subject: "social-sciences",
        topics: ["European Integration", "Comparative Regionalism", "Governance", "Environmental Policy"],
        source: "https://www.polsoz.fu-berlin.de/en/polwiss/forschung/international/europa/team/boerzel.html",
        summary: "Elected member of the Berlin-Brandenburg Academy of Sciences and Humanities and Director of the SCRIPTS Cluster of Excellence, celebrated globally for foundational scholarship on Europeanization and governance in limited statehood.",
        recruiting: "Not verified"
      },
      {
        id: 364,
        name: "Dr. Rainer Haag",
        title: "Professor of Organic and Macromolecular Chemistry",
        subject: "chemistry",
        topics: ["Dendritic Polymers", "Nanomedicine", "Supramolecular Hydrogels", "Drug Delivery"],
        source: "https://www.bcp.fu-berlin.de/en/chemie/biochemie/ag/aghaag/index.html",
        summary: "World-renowned synthetic chemist pioneering hyperbranched polyglycerols and functional macromolecular nanocarriers for targeted drug delivery and anti-inflammatory biomaterials.",
        recruiting: "Not verified"
      },
      {
        id: 365,
        name: "Dr. Thomas Risse",
        title: "Senior Professor of International Politics and Co-Director of SCRIPTS",
        subject: "social-sciences",
        topics: ["International Relations Theory", "Transnational Actors", "Human Rights", "Governance"],
        source: "https://www.polsoz.fu-berlin.de/en/polwiss/forschung/international/atasp/team/risse.html",
        summary: "Distinguished international relations scholar, recipient of the Juan Linz Prize, and author of classic works on the domestic impact of international human rights norms and the power of social communication.",
        recruiting: "Not verified"
      }
    ]
  },

  // 14. ITALY: University of Trieste (Row 535)
  {
    institution: "University of Trieste",
    shortName: "UniTS",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Trieste, Friuli-Venezia Giulia, Italy",
    website: "https://www.units.it",
    sourceRow: 535,
    slug: "university-of-trieste",
    heroEyebrow: "Italy · Friuli-Venezia Giulia · Trieste City of Science & Elettra Synchrotron Hub · Reviewed 15 October 2026",
    headline: "University of Trieste (Università degli Studi di Trieste)",
    description: "University of Trieste guide: Fully funded doctoral scholarships (€16,243/yr net), PhD in Physics at Elettra Sincrotrone, Data Science, and faculty profiles.",
    overview: "Founded in 1924, the University of Trieste (Università degli Studi di Trieste - UniTS) is a prestigious public research university in northeastern Italy, located in the European Capital of Science (Trieste). Renowned as a global hub for international theoretical physics and synchrotron radiation, UniTS partners intimately with the Abdus Salam International Centre for Theoretical Physics (ICTP), the International School for Advanced Studies (SISSA), and the Elettra Sincrotrone Trieste light source, offering world-class doctoral education and state-of-the-art laboratory research.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years, equivalent to Italian Laurea) with strong academic standing (minimum 70% or 3.0/4.0 GPA); subject-specific prerequisites in physical sciences, engineering, or life sciences.",
      phd: "Recognized second-cycle Master's degree (Italian Laurea Magistrale or equivalent) with high honors; passing evaluation in the annual public competitive entrance exam (concorso pubblico).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 85; B2 English proficiency certificate accepted for several English-taught Laurea Magistrale programs.",
      proposal: "A formal doctoral research project (progetto di ricerca) of 3,000 to 5,000 words detailing background literature, objectives, methodology, work packages, and bibliography.",
      appFee: "€30 public competition application fee submitted via the UniTS online Esse3 student portal.",
      documents: "Graduation diploma with official translation, academic transcript of records, detailed curriculum vitae, research project proposal, and 2 letters of reference."
    },
    tuitionText: "Tuition fees at the University of Trieste are progressively calculated based on family economic indicators (ISEE Parificato). For international students from non-OECD nations, tuition is typically capped at €156 to €1,100 per year. Admitted doctoral candidates receive fully funded state scholarships of €1,400 net per month (€16,243/year gross) plus a 50% stipend increase during approved research stays abroad and €3,000 research mobility allowances.",
    opportunities: [
      {
        id: 809,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "Scholarship",
        title: "UniTS International PhD Scholarships in Physics & Synchrotron Radiation (Elettra)",
        source: "https://df.units.it/it/ricerca/dottorato-fisica",
        funding: "Fully funded: €16,243/year net for 3 years, 50% stipend increase for stays abroad, and beamtime at Elettra Synchrotron; zero tuition",
        status: "open-scholarship",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual Italian National Doctoral Call - 43rd Cycle)",
        fee: "€30 public competition application fee",
        tuition: "100% full tuition waiver for all admitted doctoral fellowship holders.",
        requirements: {
          gpa: "Second-cycle Master's degree in Physics, Materials Science, or Applied Mathematics with high marks (105/110 or above).",
          ielts: "Academic IELTS 6.5 or CEFR B2 level certificate.",
          gre: "Not required.",
          papers: "High academic merit, thesis abstract, and proposed research plan for condensed matter or synchrotron physics.",
          references: "Two academic recommendation letters submitted online."
        },
        desc: "Doctoral research program joint with Elettra Sincrotrone Trieste and the FERMI Free Electron Laser, focusing on time-resolved X-ray spectroscopy, quantum materials, and topological insulators."
      },
      {
        id: 810,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master",
        title: "UniTS Master of Science (Laurea Magistrale) in Data Science and Scientific Computing",
        source: "https://dssc.units.it",
        funding: "UniTS International Talent Scholarships (€4,000/year) and ARDiS regional full accommodation and meal grants",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-EU international intake round 2)",
        fee: "€30 pre-evaluation fee",
        tuition: "Progressive income-based tuition: €156 to €2,400/year based on ISEE Parificato.",
        requirements: {
          gpa: "BSc in Computer Science, Mathematics, Physics, or Engineering with strong GPA (minimum 75%).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated coursework in multivariable calculus, linear algebra, algorithms, and scientific programming.",
          references: "One academic referee letter."
        },
        desc: "Prestigious joint two-year Master of Science in English organized by UniTS and SISSA, providing advanced mathematical foundations and computing skills for machine learning, high-performance computing, and computational modeling."
      },
      {
        id: 811,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "UniTS PhD in Molecular Biomedicine & Structural Virology (ICGEB)",
        source: "https://dsv.units.it/it/ricerca/dottorato-biomedicina-molecolare",
        funding: "Italian PNRR & ICGEB fellowship: €16,243/year plus 50% mobility increase for international laboratory placements",
        status: "open-phd",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 (Annual public competition deadline)",
        fee: "€30 application fee",
        tuition: "100% full tuition waiver.",
        requirements: {
          gpa: "Master of Science in Molecular Biology, Biotechnology, Biochemistry, or Pharmacy.",
          ielts: "B2/C1 English proficiency.",
          gre: "Not required.",
          papers: "Original research proposal on viral replication mechanisms, oncology targets, or antibody therapeutics.",
          references: "Two academic referee letters."
        },
        desc: "Three-year research doctorate conducted in partnership with the International Centre for Genetic Engineering and Biotechnology (ICGEB) in Trieste, deciphering molecular structures of emerging pathogens and cancer signaling cascades."
      },
      {
        id: 812,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "UniTS Master of Science (Laurea Magistrale) in Naval Architecture and Marine Engineering",
        source: "https://dia.units.it/it/didattica/corsi-studio/lauree-magistrali/ingegneria-navale",
        funding: "Fincantieri industrial study grants and university merit scholarships",
        status: "open-master",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (International applicant round)",
        fee: "€30 application fee",
        tuition: "€156 to €2,000/year based on family income.",
        requirements: {
          gpa: "Bachelor's degree in Marine, Mechanical, or Civil Engineering with good academic rank.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Demonstrated coursework in hydrodynamics, ship structures, and marine propulsion.",
          references: "One academic letter of recommendation."
        },
        desc: "Two-year Master of Science in naval architecture partnering with global shipbuilding giant Fincantieri (headquartered in Trieste), designing cruise vessels, naval surface units, and green hydrogen-powered marine propulsion."
      },
      {
        id: 813,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "Trieste Quantum Technology & Matter Postdoctoral Fellowship",
        source: "https://df.units.it/it/ricerca",
        funding: "Assegno di Ricerca (Research Fellowship): €25,000 to €29,000/year net plus travel allowances",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Research grant review round)",
        fee: "€0 application fee",
        tuition: "Not applicable; research fellowship appointment.",
        requirements: {
          gpa: "PhD in Physics, Applied Physics, or Quantum Engineering.",
          ielts: "Fluent working English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in quantum state tomography, cold atoms, or quantum simulation.",
          references: "Two professional reference letters."
        },
        desc: "Postdoctoral research fellowship in theoretical and experimental quantum technologies, developing quantum communication protocols and simulating strongly correlated quantum systems at the Trieste Science Park."
      },
      {
        id: 814,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "Trieste Miramare Marine Protected Area Summer Traineeship",
        source: "https://dispes.units.it",
        funding: "€1,000/month living stipend for 8 weeks with coastal marine biology station access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer 2027 traineeship call)",
        fee: "€0 application fee",
        tuition: "No tuition charges during traineeship.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Environmental Biology, Marine Science, or Ecology with excellent marks.",
          ielts: "English B2 level.",
          gre: "Not applicable.",
          papers: "Laboratory training in benthic ecology, water quality sampling, or biodiversity monitoring.",
          references: "One professor recommendation letter."
        },
        desc: "Eight-week summer research placement at the Miramare Marine Protected Area adjacent to Miramare Castle, monitoring northern Adriatic marine biodiversity, posidonia seagrass restoration, and coastal water chemistry."
      },
      {
        id: 815,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Job",
        title: "UniTS Assistant Professor (RTD-A) in Advanced Materials & Nanocatalysis",
        source: "https://dscf.units.it/it/ricerca",
        funding: "Full 3-year fixed-term Assistant Professor contract: €38,000 to €43,000/year gross with INPS pension coverage",
        status: "open-job",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Public academic competition closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; junior faculty academic position.",
        requirements: {
          gpa: "PhD in Chemistry, Materials Science, or Chemical Engineering awarded at least 1 year prior.",
          ielts: "Fluent Italian and English teaching and research capabilities.",
          gre: "Not applicable.",
          papers: "Minimum 7 peer-reviewed publications in top materials chemistry and catalysis journals.",
          references: "Three academic reference contacts."
        },
        desc: "Three-year fixed-term Assistant Professorship (Ricercatore a Tempo Determinato Tipologia A) in the Department of Chemical and Pharmaceutical Sciences, synthesizing single-atom catalysts and 2D nanomaterials for electrocatalytic water splitting."
      }
    ],
    researchers: [
      {
        id: 366,
        name: "Dr. Maurizio Prato",
        title: "Professor of Organic Chemistry and Worldwide Pioneer in Carbon Nanotubes",
        subject: "chemistry",
        topics: ["Carbon Nanotubes", "Fullerenes", "Nanomedicine", "Artificial Photosynthesis"],
        source: "https://dscf.units.it/it/dipartimento/persone/personale-docente-ricercatore/prato-maurizio",
        summary: "Elected member of the European Academy of Sciences and Accademia Nazionale dei Lincei, recipient of multiple ERC Advanced Grants, and one of Italy's most cited chemists for pioneering the functionalization of carbon nanostructures.",
        recruiting: "Not verified"
      },
      {
        id: 367,
        name: "Dr. Maya Pacilio",
        title: "Professor of Condensed Matter Physics and Senior Scientist at Elettra",
        subject: "physics",
        topics: ["Synchrotron Radiation", "Surface Science", "Photoemission Spectroscopy", "2D Materials"],
        source: "https://df.units.it/it/dipartimento/persone/personale-docente-ricercatore",
        summary: "Leading synchrotron radiation physicist directing beamline research at Elettra Sincrotrone, investigating electronic states of novel 2D topological materials and graphene heterostructures.",
        recruiting: "Not verified"
      },
      {
        id: 368,
        name: "Dr. Serena Zacchigna",
        title: "Professor of Molecular Biology and Head of the Cardiovascular Biology Group at ICGEB",
        subject: "biology",
        topics: ["Cardiovascular Biology", "Gene Therapy", "Angiogenesis", "Cardiac Regeneration"],
        source: "https://dsv.units.it/it/dipartimento/persone/personale-docente-ricercatore",
        summary: "World-renowned translational scientist and ERC Consolidator Grantee investigating molecular signals that trigger cardiac muscle regeneration and developing microRNA gene therapies for ischemic heart disease.",
        recruiting: "Not verified"
      }
    ]
  },

  // 15. USA: The University of Chicago (Row 1012)
  {
    institution: "The University of Chicago",
    shortName: "UChicago",
    countryId: "usa",
    countryLabel: "United States",
    location: "Chicago, Illinois, United States",
    website: "https://www.uchicago.edu",
    sourceRow: 1012,
    slug: "the-university-of-chicago",
    heroEyebrow: "United States · Illinois · 99 Nobel Laureates & World Economic Capital · Reviewed 15 October 2026",
    headline: "The University of Chicago",
    description: "The University of Chicago guide: 100% fully funded PhD packages ($45,000+ stipend), Kenneth C. Griffin Economics PhD, Pritzker School of Molecular Engineering, and faculty profiles.",
    overview: "Founded in 1890 by John D. Rockefeller and William Rainey Harper, The University of Chicago (UChicago) is an intellectual powerhouse situated in Hyde Park on Chicago's South Side. Renowned for rigorous debate, free inquiry, and transformative research, UChicago is affiliated with 99 Nobel laureates, the birth of the 'Chicago School' of economics, the creation of the first controlled nuclear reaction (Chicago Pile-1), the world-famous Booth School of Business, and the revolutionary Pritzker School of Molecular Engineering. All admitted PhD students receive full multi-year funding guarantees.",
    admissions: {
      masters: "Accredited Bachelor's degree with high academic distinction (minimum 3.5/4.0 GPA or equivalent first-class standing); quantitative programs require rigorous multivariable calculus and linear algebra preparation.",
      phd: "Recognized Bachelor's or Master's degree with superior academic achievement; demonstrated capacity for independent creative research through honors theses or published papers.",
      language: "Academic IELTS 7.0 overall (minimum 7.0 in all bands) or TOEFL iBT 100 (minimum 25 in each sub-score); Booth and Economics require IELTS 7.5 / TOEFL 105.",
      proposal: "A 2 to 3 page Candidate Statement of Research Purpose articulating research questions, theoretical interests, faculty with whom the applicant wishes to work, and intellectual motivations.",
      appFee: "$90 non-refundable application fee submitted via UChicago's graduate application portal (fee waivers available for eligible applicants).",
      documents: "Complete official academic transcripts, curriculum vitae, 3 letters of academic recommendation, statement of purpose, and GRE scores (where required by individual departments)."
    },
    tuitionText: "The University of Chicago guarantees 100% full funding packages for all admitted PhD students in the Divisions of the Biological Sciences, Physical Sciences, Social Sciences, Humanities, and the Pritzker School of Molecular Engineering. The standard doctoral package covers 100% of full tuition ($62,000/year graduate rate), comprehensive UChicago Student Health Insurance (U-SHIP, valued at over $4,800/year), full student life fees, and an annual living stipend of $45,000 to $48,000.",
    opportunities: [
      {
        id: 816,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        title: "UChicago Kenneth C. Griffin Department of Economics Fully Funded Doctoral Fellowships",
        source: "https://economics.uchicago.edu/graduate/phd-program",
        funding: "100% Fully Funded: Annual living stipend of $46,000/year for 5 years, complete tuition waiver ($62,000/year), and full U-SHIP health insurance",
        status: "open-scholarship",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Annual doctoral admission and fellowship deadline)",
        fee: "$90 application fee (waiver available)",
        tuition: "100% covered by university doctoral fellowship awards.",
        requirements: {
          gpa: "Minimum 3.8/4.0 GPA in undergraduate economics, mathematics, or quantitative sciences.",
          ielts: "Academic IELTS 7.5 overall or TOEFL iBT 105.",
          gre: "GRE General Test required (quantitative score typically in 95th+ percentile).",
          papers: "Exceptional mathematical and analytical aptitude, sample research paper, or honors thesis.",
          references: "Three detailed letters of recommendation from economics and mathematics faculty."
        },
        desc: "World's most celebrated doctoral program in economics, birthplace of 34 Nobel Prizes in Economic Sciences, providing five years of guaranteed living stipends, comprehensive health insurance, and full tuition waivers."
      },
      {
        id: 817,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "PhD",
        title: "UChicago Pritzker School of Molecular Engineering (PME) PhD in Quantum Engineering",
        source: "https://pme.uchicago.edu/academics/phd-molecular-engineering",
        funding: "100% Fully funded for 5 years: $46,500 annual stipend plus full tuition waiver and comprehensive health coverage",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual PhD intake deadline for Fall 2027)",
        fee: "$90 application fee",
        tuition: "Full tuition waiver provided by Pritzker School of Molecular Engineering.",
        requirements: {
          gpa: "Bachelor's or Master's degree in physics, electrical engineering, materials science, or chemistry (typically 3.7+ GPA).",
          ielts: "Academic IELTS 7.0 (minimum 7.0 in all bands) or TOEFL iBT 100.",
          gre: "GRE optional.",
          papers: "Undergraduate laboratory research in quantum information, nanophotonics, or superconducting qubits.",
          references: "Three academic reference letters from faculty familiar with research ability."
        },
        desc: "Cutting-edge doctoral research at the Chicago Quantum Exchange (CQE) connecting UChicago with Argonne National Laboratory and Fermilab, fabricating solid-state quantum bits, quantum sensors, and quantum repeater networks."
      },
      {
        id: 818,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "UChicago PhD in Computer Science & AI Systems",
        source: "https://cs.uchicago.edu/academics/graduate/phd-program/",
        funding: "100% Fully funded: $45,500 annual stipend, complete tuition coverage, and U-SHIP health insurance",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Fall 2027 admission)",
        fee: "$90 application fee",
        tuition: "Full tuition waiver included with doctoral fellowship.",
        requirements: {
          gpa: "Bachelor's degree in computer science, mathematics, or engineering (minimum 3.7 GPA).",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE optional.",
          papers: "Demonstrated publication record or significant open-source research contributions.",
          references: "Three letters of recommendation."
        },
        desc: "Doctoral research conducted within the Department of Computer Science and the Data Science Institute (DSI), investigating machine learning theory, privacy-preserving systems, human-computer interaction, and quantum computer architectures."
      },
      {
        id: 819,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "UChicago Harris School of Public Policy Master of Public Policy (MPP)",
        source: "https://harris.uchicago.edu/academics/degrees/master-public-policy-mpp",
        funding: "Harris Merit Scholarships ranging from $15,000 to full tuition coverage for outstanding candidates",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Round 2 priority admission)",
        fee: "$90 application fee",
        tuition: "$64,500 annual tuition before scholarship awards.",
        requirements: {
          gpa: "Bachelor's degree in any discipline with strong quantitative and analytical coursework.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE/GMAT optional.",
          papers: "Motivational essay and policy analysis writing sample.",
          references: "Two academic or professional reference letters."
        },
        desc: "Rigorous two-year Master of Public Policy rooted in microeconomics, game theory, and empirical statistics, training global leaders to apply quantitative evidence to solve pressing social and economic policy challenges."
      },
      {
        id: 820,
        subject: "physics",
        subjects: ["physics"],
        type: "Research",
        title: "Enrico Fermi Institute (EFI) Postdoctoral Research Fellowship",
        source: "https://efi.uchicago.edu",
        funding: "Annual salary of $72,000 plus full UChicago benefits package and $8,000 research travel fund",
        status: "open-research",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Postdoctoral Fellowship competition)",
        fee: "$0 application fee",
        tuition: "Not applicable; salaried postdoctoral fellowship.",
        requirements: {
          gpa: "PhD in Theoretical Physics, High Energy Physics, or Astrophysics.",
          ielts: "Proficient scientific English.",
          gre: "Not applicable.",
          papers: "Strong first-author publication track record in particle physics, early universe cosmology, or string theory.",
          references: "Three letters of recommendation."
        },
        desc: "Prestigious postdoctoral appointment at the Enrico Fermi Institute, conducting foundational theoretical and experimental research in particle physics, cosmology, dark matter searches, and quantum gravity."
      },
      {
        id: 821,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Internship",
        title: "Chicago Quantum Exchange (CQE) Summer Research Traineeship",
        source: "https://quantum.uchicago.edu/education/summer-internships/",
        funding: "$6,500 10-week summer stipend plus on-campus housing in Hyde Park and travel allowance",
        status: "open-internship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer 2027 undergraduate research program)",
        fee: "$0 application fee",
        tuition: "$0 tuition; all costs covered by the National Science Foundation (NSF REU).",
        requirements: {
          gpa: "Enrolled undergraduate in physics, engineering, or computer science with minimum 3.4 GPA.",
          ielts: "Fluent English language skills.",
          gre: "Not applicable.",
          papers: "Completed university coursework in modern physics, quantum mechanics, or linear algebra.",
          references: "Two faculty recommendation letters."
        },
        desc: "Ten-week National Science Foundation REU summer research traineeship collaborating with UChicago and Argonne National Laboratory scientists on quantum communication testbeds, diamond NV centers, and quantum optics."
      },
      {
        id: 822,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Job",
        title: "UChicago Postdoctoral Scholar in Cellular Metalloenzymes & Chemical Biology",
        source: "https://academicjobs.uchicago.edu",
        funding: "Salaried Postdoctoral Scholar: $66,000 to $73,000/year plus UChicago health and retirement benefits",
        status: "open-job",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Open until filled)",
        fee: "$0 application fee",
        tuition: "Not applicable; full-time salaried academic staff appointment.",
        requirements: {
          gpa: "PhD in Biochemistry, Chemical Biology, or Biophysics awarded within the last 3 years.",
          ielts: "Professional English communication proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in enzyme mechanisms, RNA chemical modifications, or structural mass spectrometry.",
          references: "Three academic reference contacts."
        },
        desc: "Postdoctoral research role in the Department of Chemistry and Institute for Biophysical Dynamics, investigating catalytic mechanisms of metalloenzymes involved in epitranscriptomic RNA methylation and cellular stress responses."
      }
    ],
    researchers: [
      {
        id: 369,
        name: "Dr. David Awschalom",
        title: "Liew Family Professor in Molecular Engineering and Director of the Chicago Quantum Exchange",
        subject: "physics",
        topics: ["Spintronics", "Quantum Information", "Diamond NV Centers", "Quantum Networks"],
        source: "https://pme.uchicago.edu/faculty/david-awschalom",
        summary: "Member of the National Academy of Sciences and National Academy of Engineering, and world-renowned pioneer in spintronics and optical control of single electron spins in quantum semiconductors.",
        recruiting: "Not verified"
      },
      {
        id: 370,
        name: "Dr. Chuan He",
        title: "John T. Wilson Distinguished Service Professor of Chemistry",
        subject: "chemistry",
        topics: ["Epitranscriptomics", "RNA Modification", "Chemical Biology", "Gene Expression"],
        source: "https://chemistry.uchicago.edu/faculty/chuan-he",
        summary: "Howard Hughes Medical Institute (HHMI) Investigator and Wolf Prize in Chemistry laureate who discovered reversible RNA methylation (m6A), founding the flourishing field of epitranscriptomics.",
        recruiting: "Not verified"
      },
      {
        id: 371,
        name: "Dr. James J. Heckman",
        title: "Henry Schultz Distinguished Service Professor of Economics and Nobel Laureate",
        subject: "social-sciences",
        topics: ["Microeconometrics", "Early Childhood Education", "Labor Economics", "Policy Evaluation"],
        source: "https://economics.uchicago.edu/faculty/directory/heckman",
        summary: "Recipient of the 2000 Nobel Memorial Prize in Economic Sciences for developing the 'Heckman correction' for selection bias, and pioneer of the economics of human capital and early childhood development (the Heckman Curve).",
        recruiting: "Not verified"
      }
    ]
  },

  // 16. UK: University of Leeds (Row 1317)
  {
    institution: "University of Leeds",
    shortName: "Leeds",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Leeds, West Yorkshire, England, United Kingdom",
    website: "https://www.leeds.ac.uk",
    sourceRow: 1317,
    slug: "university-of-leeds",
    heroEyebrow: "United Kingdom · England · Russell Group Giant & Priestley Centre for Climate Futures · Reviewed 15 October 2026",
    headline: "University of Leeds",
    description: "University of Leeds guide: UKRI fully funded PhD studentships (£19,237+ stipend), Bragg Centre for Materials Research, Priestley Climate Centre, and faculty profiles.",
    overview: "Founded in 1904 by Royal Charter, the University of Leeds is a major civic research powerhouse and founding member of the prestigious Russell Group and the N8 Research Partnership. Consistently ranked in the world's top 85 universities, Leeds is celebrated globally for groundbreaking research at the Bragg Centre for Materials Research (named after Nobel laureates William Henry and William Lawrence Bragg), the Priestley Centre for Climate Futures, the Astbury Centre for Structural Molecular Biology, and the Leeds Institute for Data Analytics (LIDA).",
    admissions: {
      masters: "UK Upper Second Class Honours degree (2:1) or international equivalent (minimum 65-70% or 3.2/4.0 GPA) in a relevant discipline; computing and engineering require solid quantitative coursework.",
      phd: "Recognized Master's degree with Merit or Distinction (or UK 2:1 Honours degree with significant research experience) and a detailed research proposal aligned with Leeds research themes.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 88; Medicine, Business, and Law require IELTS 7.0 (minimum 6.5 in all bands).",
      proposal: "A formal research proposal of 1,500 to 2,500 words outlining research questions, literature context, methodology, proposed timeline, and identified Leeds academic supervisor.",
      appFee: "£0 application fee for postgraduate research (PhD) applications; £25 for selected taught business master's degrees.",
      documents: "Complete official academic transcripts, degree award certificates, 2 academic reference letters, detailed research proposal, and personal statement."
    },
    tuitionText: "Full-time doctoral researchers awarded UKRI (EPSRC, NERC, BBSRC, MRC, ESRC) studentships or Leeds Doctoral Scholarships receive 100% full tuition fee coverage (at home/international rates) and an annual tax-free living stipend of at least £19,237 per year (aligned with UKRI national minimum rate) plus an annual research training support grant (RTSG) for laboratory consumables and conference travel.",
    opportunities: [
      {
        id: 823,
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Scholarship",
        title: "Leeds NERC Panorama Doctoral Training Partnership (DTP) Earth & Climate Studentships",
        source: "https://panorama-dtp.leeds.ac.uk",
        funding: "Fully funded: Annual tax-free stipend of £19,237/year for 3.5 to 4 years, 100% full tuition fee waiver, and £5,000/year research field allowance",
        status: "open-scholarship",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Annual NERC doctoral competition for October commencement)",
        fee: "£0 application fee for research programs",
        tuition: "Full tuition waiver covered by NERC and University of Leeds.",
        requirements: {
          gpa: "UK first-class honours degree or 2:1 Master's (or international equivalent) in Environmental Science, Meteorology, Physics, or Mathematics.",
          ielts: "Academic IELTS 6.5 with at least 6.0 in each band.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in climate modeling, atmospheric physics, or geosciences.",
          references: "Two academic referee letters from university lecturers."
        },
        desc: "Doctoral training conducted at the Priestley Centre for Climate Futures and the School of Earth and Environment, developing global climate models, ice sheet melt simulations, and aerosol-cloud interactions."
      },
      {
        id: 824,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Leeds PhD in Structural Molecular Biology at the Astbury Centre",
        source: "https://astbury.leeds.ac.uk/postgraduate-study/",
        funding: "BBSRC/Wellcome Trust 4-year doctoral studentship: £19,237 annual stipend plus full tuition and Titan Krios cryo-EM access",
        status: "open-phd",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Astbury doctoral round)",
        fee: "£0 application fee",
        tuition: "100% full tuition coverage.",
        requirements: {
          gpa: "Upper second-class or first-class undergraduate/Master's degree in biochemistry, biophysics, or molecular biology.",
          ielts: "Academic IELTS 6.5 overall with no band below 6.0.",
          gre: "Not required.",
          papers: "Laboratory research experience in protein expression, structural biophysics, or cryo-EM image processing.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the world-renowned Astbury Centre for Structural Molecular Biology, using state-of-the-art cryo-electron microscopy and high-field NMR to resolve atomic structures of amyloid fibrils and viral assemblies."
      },
      {
        id: 825,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master",
        title: "Leeds Master of Science (MSc) in Advanced Computer Science (Cloud & AI Systems)",
        source: "https://courses.leeds.ac.uk/g030/advanced-computer-science-msc",
        funding: "Leeds International Masters Scholarships (£2,000 to £6,000 tuition fee reductions)",
        status: "open-master",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (International intake deadline for September 2027)",
        fee: "£0 application fee",
        tuition: "£29,750 full international tuition fee (before scholarship deductions).",
        requirements: {
          gpa: "UK 2:1 Honours degree (or equivalent GPA 3.3/4.0) in Computer Science or closely related discipline with substantial programming.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all sub-tests) or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Strong academic record in algorithms, distributed systems, and object-oriented programming.",
          references: "One academic reference letter."
        },
        desc: "British Computer Society (BCS) accredited one-year Master of Science offering specialized research modules in parallel computing, deep learning, graph algorithms, and cloud infrastructure."
      },
      {
        id: 826,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        title: "Leeds Bragg Centre PhD in Terahertz Photonics & Quantum Electronics",
        source: "https://eps.leeds.ac.uk/electronic-engineering-research-degrees",
        funding: "EPSRC-sponsored 3.5-year PhD studentship of £19,237/year stipend plus cleanroom nanofabrication access",
        status: "open-phd",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Doctoral cohort intake)",
        fee: "£0 application fee",
        tuition: "Fully sponsored by EPSRC and Bragg Centre for Materials Research.",
        requirements: {
          gpa: "First-class or 2:1 Honours degree in Electronic Engineering, Physics, or Materials Science.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands).",
          gre: "Not required.",
          papers: "Demonstrated interest in terahertz quantum cascade lasers, semiconductor optics, or high-frequency electronics.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the Bragg Centre for Materials Research, developing terahertz quantum cascade lasers, high-speed wireless transceivers, and spectroscopic sensors for medical imaging."
      },
      {
        id: 827,
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Research",
        title: "Leeds Institute for Transport Studies (ITS) Postdoctoral Research Fellowship",
        source: "https://environment.leeds.ac.uk/transport-research-degrees",
        funding: "Annual research salary of £37,000 to £43,000 plus £5,000 travel and dissemination grant",
        status: "open-research",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual postdoctoral fellowship round)",
        fee: "£0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Transport Economics, Urban Geography, Civil Engineering, or Environmental Policy.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications on urban mobility decarbonization, public transit modeling, or active travel infrastructure.",
          references: "Two academic letters of recommendation."
        },
        desc: "Two-year postdoctoral fellowship at the Institute for Transport Studies, one of the world's leading transport research institutions, analyzing travel behavior, electric vehicle adoption, and transport policy appraisal."
      },
      {
        id: 828,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Internship",
        title: "Leeds School of Chemistry Summer Research Fellowship",
        source: "https://eps.leeds.ac.uk/chemistry-research-degrees",
        funding: "£2,400 8-week summer stipend with state-of-the-art mass spectrometry access",
        status: "open-internship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer undergraduate research call)",
        fee: "£0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate student in Chemistry, Chemical Engineering, or Natural Sciences with minimum 65% average.",
          ielts: "Proficient scientific English.",
          gre: "Not applicable.",
          papers: "Completed coursework in organic synthesis, physical chemistry, or chemical kinetics.",
          references: "One academic tutor reference letter."
        },
        desc: "Eight-week mentored summer research project investigating continuous flow reactors, atmospheric aerosol chemistry, and sustainable catalysis methodologies."
      },
      {
        id: 829,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Job",
        title: "Leeds Lecturer (Assistant Professor) in Medical Robotics & Surgical Technologies",
        source: "https://jobs.leeds.ac.uk",
        funding: "Full-time permanent academic staff appointment: £45,585 to £54,395/year plus USS pension scheme",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Formal academic search deadline)",
        fee: "£0 application fee",
        tuition: "Not applicable; salaried faculty appointment.",
        requirements: {
          gpa: "PhD in Robotics, Mechatronics, Mechanical Engineering, or Biomedical Engineering.",
          ielts: "Exemplary English teaching and research presentation skills.",
          gre: "Not applicable.",
          papers: "Proven publication record in leading robotics journals (IEEE T-RO, Soft Robotics) and demonstrable potential for securing EPSRC/Wellcome grants.",
          references: "Three academic reference contacts."
        },
        desc: "Tenured-track Assistant Professorship (Lectureship) delivering teaching in mechatronics and leading independent laboratory research in surgical robotics, capsule endoscopy, and flexible robotic catheters at the Leeds Institute of Medical Technologies."
      }
    ],
    researchers: [
      {
        id: 372,
        name: "Dr. Sheena Radford",
        title: "Astbury Professor of Biophysics and Fellow of the Royal Society",
        subject: "biology",
        topics: ["Protein Folding", "Amyloid Diseases", "Structural Biology", "Chaperone Mechanisms"],
        source: "https://astbury.leeds.ac.uk/people/sheena-radford/",
        summary: "Officer of the Order of the British Empire (OBE), Fellow of the Royal Society, and world leader in understanding the molecular mechanisms of protein misfolding, amyloid fibril assembly, and neurodegenerative disease pathology.",
        recruiting: "Not verified"
      },
      {
        id: 373,
        name: "Dr. Piers Forster",
        title: "Professor of Physical Climate Change and Director of the Priestley Centre",
        subject: "environment",
        topics: ["Radiative Forcing", "Climate Sensitivity", "Global Carbon Budget", "Climate Policy"],
        source: "https://environment.leeds.ac.uk/see/staff/1231/professor-piers-forster",
        summary: "Lead Author of multiple Intergovernmental Panel on Climate Change (IPCC) Assessment Reports, Interim Chair of the UK Climate Change Committee, and internationally renowned authority on radiative forcing and net-zero emissions pathways.",
        recruiting: "Not verified"
      },
      {
        id: 374,
        name: "Dr. Giles Davies",
        title: "Professor of Terahertz Electronics and Pro-Dean for Research",
        subject: "physics",
        topics: ["Terahertz Technology", "Quantum Cascade Lasers", "Semiconductor Heterostructures", "Nanophotonics"],
        source: "https://eps.leeds.ac.uk/electronic-engineering/staff/178/professor-giles-davies",
        summary: "Fellow of the Royal Academy of Engineering, recipient of the Institute of Physics Michael Faraday Medal, and global pioneer in the development of terahertz frequency quantum cascade lasers and imaging devices.",
        recruiting: "Not verified"
      }
    ]
  },

  // 17. JAPAN: Gakushuin University (Row 1637)
  {
    institution: "Gakushuin University",
    shortName: "Gakushuin",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Toshima-ku, Tokyo, Japan",
    website: "http://www.univ.gakushuin.ac.jp",
    sourceRow: 1637,
    slug: "gakushuin-university",
    heroEyebrow: "Japan · Tokyo · Historic Imperial Academy Heritage & Quantum Molecular Science · Reviewed 15 October 2026",
    headline: "Gakushuin University (学習院大学)",
    description: "Gakushuin University guide: MEXT Government Scholarships (¥145,000/mo), Faculty of Science Physics & Chemistry PhD, Mejiro Campus, and faculty profiles.",
    overview: "Tracing its roots back to 1847 as an educational institution for the Kyoto imperial court and re-established in Tokyo in 1877 as the Peers' School, Gakushuin University is one of Japan's most historic and prestigious private universities. Situated in Mejiro in central Tokyo, Gakushuin is celebrated for its highly selective Faculty of Science (world-class research in theoretical physics, statistical mechanics, and organic synthetic chemistry), the Faculty of International Social Sciences, and the Research Institute for Oriental Cultures.",
    admissions: {
      masters: "Completion of a 16-year school education curriculum culminating in a recognized Bachelor's degree (minimum 3.0/4.0 GPA or equivalent grade B+).",
      phd: "Recognized Master's degree or professional degree; submission of Master's thesis and passing marks in oral defense and doctoral screening.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85 for English-medium research programs; Japanese JLPT N1 for Japanese-medium graduate divisions.",
      proposal: "A 3-page research proposal detailing proposed doctoral research topic, theoretical framework, research methodology, and anticipated academic contributions.",
      appFee: "¥35,000 non-refundable screening fee submitted via the Gakushuin online admissions portal.",
      documents: "Graduation certificate, complete official academic transcripts, research proposal, 2 letters of recommendation, and English proficiency test report."
    },
    tuitionText: "Tuition fees for graduate programs at Gakushuin are approximately ¥850,000 to ¥1,100,000 per year. Admitted international students benefit from Gakushuin University Special International Student Scholarships covering 30% to 100% of tuition, and MEXT University Recommendation Scholarship recipients receive 100% full tuition waivers, round-trip international airfare, and a monthly tax-free living stipend of ¥145,000 per month.",
    opportunities: [
      {
        id: 830,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Scholarship",
        title: "Gakushuin MEXT University Recommendation Scholarships & Doctoral Tuition Waivers",
        source: "https://www.univ.gakushuin.ac.jp/en/international/",
        funding: "100% Fully funded: Monthly living allowance of ¥145,000/month, full tuition waiver, and round-trip economy airfare",
        status: "open-scholarship",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Priority round for Autumn 2027 enrollment)",
        fee: "¥0 screening fee for MEXT applicants",
        tuition: "100% covered by the Japanese Ministry of Education, Culture, Sports, Science and Technology.",
        requirements: {
          gpa: "Minimum GPA of 2.30 on a 3.00 scale (equivalent to 80% or 3.4/4.0 GPA) in previous university degrees.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Superior academic record, thesis summary, and detailed proposed research outline.",
          references: "Two letters of recommendation from deans or academic professors."
        },
        desc: "Prestigious Japanese government doctoral award administered through Gakushuin University, offering complete financial independence, tuition waivers, and airfare for premier international research scholars."
      },
      {
        id: 831,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "PhD",
        title: "Gakushuin Graduate School of Science PhD in Theoretical Physics & Statistical Mechanics",
        source: "https://www.gakushuin.ac.jp/univ/sci/phys/",
        funding: "Gakushuin Graduate Research Fellowship: ¥140,000/month plus up to 100% tuition reduction awards",
        status: "open-phd",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring round for September 2027 enrollment)",
        fee: "¥35,000 application screening fee",
        tuition: "¥980,000/year, highly subsidized through merit-based tuition reduction grants.",
        requirements: {
          gpa: "Master's degree in physics, applied physics, or mathematics with high marks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Master's thesis and published papers in reputable journals or international conferences.",
          references: "Two confidential letters of recommendation from university faculty."
        },
        desc: "Doctoral research conducted within the Department of Physics at the Mejiro campus, featuring world-leading investigations in mathematical physics, non-equilibrium statistical mechanics, quantum spin systems, and superconductivity."
      },
      {
        id: 832,
        subject: "chemistry",
        subjects: ["chemistry"],
        type: "PhD",
        title: "Gakushuin PhD in Organic Synthesis & Asymmetric Catalysis",
        source: "https://www.gakushuin.ac.jp/univ/sci/chem/",
        funding: "Departmental research assistantship: ¥150,000/month plus laboratory reagents and NMR access",
        status: "open-phd",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual doctoral admission round)",
        fee: "¥35,000 screening fee",
        tuition: "Full tuition offset through departmental fellowship.",
        requirements: {
          gpa: "Master's degree in chemistry or chemical biology with high academic distinction.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Prior laboratory research experience in multistep organic synthesis, transition metal catalysis, or organocatalysts.",
          references: "Two letters of recommendation."
        },
        desc: "Four-year chemistry doctorate investigating novel chiral organocatalysts, transition-metal catalyzed C-H bond activation, and total synthesis of bioactive natural products."
      },
      {
        id: 833,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "Gakushuin Master of Arts in International Social Sciences (English-Taught)",
        source: "https://www.univ.gakushuin.ac.jp/iss/",
        funding: "Gakushuin University Merit Scholarships providing 30% to 100% tuition reduction awards",
        status: "open-master",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (International applicant round for Fall intake)",
        fee: "¥20,000 application fee",
        tuition: "¥850,000/year before merit scholarships.",
        requirements: {
          gpa: "Four-year Bachelor's degree in economics, business, law, or political science with minimum 3.0 GPA.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Academic essay (2,000 words) on international economic policy, trade governance, or global business strategy.",
          references: "Two academic referee letters."
        },
        desc: "Two-year English-taught Master's program in Tokyo combining international economics, cross-border corporate management, international law, and political science for careers in multinational organizations."
      },
      {
        id: 834,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "Research",
        title: "Gakushuin Quantum Spin Liquids & Frustrated Magnetism Postdoctoral Fellowship",
        source: "https://www.univ.gakushuin.ac.jp/sci/",
        funding: "Salaried postdoctoral position: ¥5,200,000 to ¥6,400,000/year gross plus Japanese social insurance (shakai hoken)",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling review until position filled)",
        fee: "¥0 application fee",
        tuition: "Not applicable; full-time salaried researcher post.",
        requirements: {
          gpa: "PhD in Theoretical or Experimental Condensed Matter Physics.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Track record of publications in quantum spin systems, magnetic resonance, or topological materials.",
          references: "Two academic recommendation letters."
        },
        desc: "Postdoctoral research appointment investigating quantum spin liquid states, exotic topological order, and fractional excitations in geometrically frustrated magnetic insulators."
      },
      {
        id: 835,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Internship",
        title: "Gakushuin Oriental Cultures & Historical Archives Summer Traineeship",
        source: "https://www.univ.gakushuin.ac.jp/rioc/",
        funding: "¥100,000/month 8-week summer stipend with imperial archives access",
        status: "open-internship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer 2027 traineeship call)",
        fee: "¥0 application fee",
        tuition: "Zero tuition charges during summer traineeship.",
        requirements: {
          gpa: "Enrolled in third or fourth year of undergraduate studies in East Asian History, Linguistics, or Art History with high marks.",
          ielts: "Good English or Japanese conversational skills.",
          gre: "Not applicable.",
          papers: "Coursework in Japanese history, pre-modern East Asian texts, or archival preservation.",
          references: "One professor recommendation letter."
        },
        desc: "Eight-week summer research traineeship at the Research Institute for Oriental Cultures in Tokyo, participating in the digital preservation, translation, and cataloging of rare pre-modern Japanese and East Asian manuscripts."
      },
      {
        id: 836,
        subject: "chemistry",
        subjects: ["chemistry"],
        type: "Job",
        title: "Gakushuin Project Assistant Professor in Functional Macromolecular Chemistry",
        source: "https://www.univ.gakushuin.ac.jp/info/recruit.html",
        funding: "Full-time faculty appointment: ¥6,200,000 to ¥7,200,000/year gross plus Japanese social insurance",
        status: "open-job",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Academic search closing date)",
        fee: "¥0 application fee",
        tuition: "Not applicable; salaried faculty appointment.",
        requirements: {
          gpa: "PhD in Organic Chemistry, Polymer Chemistry, or Chemical Biology.",
          ielts: "Professional English fluency (Japanese language skills advantageous but not required).",
          gre: "Not applicable.",
          papers: "Minimum 5 first-author publications in leading chemistry journals (JACS, Angewandte Chemie, Chemical Science).",
          references: "Three academic reference contacts."
        },
        desc: "Full-time faculty role conducting independent research and laboratory teaching in synthetic macromolecular chemistry, stimuli-responsive polymers, and organic luminescent materials."
      }
    ],
    researchers: [
      {
        id: 375,
        name: "Dr. Hal Tasaki",
        title: "Professor of Theoretical Physics",
        subject: "physics",
        topics: ["Statistical Mechanics", "Mathematical Physics", "Hubbard Model", "Quantum Spin Systems"],
        source: "https://www.gakushuin.ac.jp/~881791/index.html",
        summary: "World-renowned mathematical physicist celebrated for proving fundamental theorems on flat-band ferromagnetism in the Hubbard model, Lieb-Schultz-Mattis theorem extensions, and author of foundational textbooks on statistical physics.",
        recruiting: "Not verified"
      },
      {
        id: 376,
        name: "Dr. Takahiko Akiyama",
        title: "Professor of Chemistry and Pioneer in Organocatalysis",
        subject: "chemistry",
        topics: ["Chiral Phosphoric Acids", "Asymmetric Catalysis", "Organocatalysis", "Green Chemistry"],
        source: "https://www.gakushuin.ac.jp/univ/sci/chem/akiyama_lab/akiyama_prof_e.html",
        summary: "Global pioneer who co-discovered chiral phosphoric acid catalysts (Akiyama-Terada catalysts), revolutionizing enantioselective organic synthesis without toxic transition metals, and recipient of the Chemical Society of Japan Award.",
        recruiting: "Not verified"
      },
      {
        id: 377,
        name: "Dr. Junko Takahashi",
        title: "Professor of International Social Sciences",
        subject: "social-sciences",
        topics: ["International Trade", "Global Supply Chains", "Economic Integration", "Development Economics"],
        source: "https://www.univ.gakushuin.ac.jp/iss/faculty/",
        summary: "Leading international trade economist researching Asia-Pacific regional trade agreements, multinational investment dynamics, and structural adjustment in emerging industrial economies.",
        recruiting: "Not verified"
      }
    ]
  },

  // 18. SWEDEN: Malmö University (Row 1591)
  {
    institution: "Malmö University",
    shortName: "Malmö",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Malmö, Sweden",
    website: "http://mau.se",
    sourceRow: 1591,
    slug: "malmo-university",
    heroEyebrow: "Sweden · Skåne · Öresund Innovation Leader & Biomedical Materials Hub · Reviewed 15 October 2026",
    headline: "Malmö University (Malmö universitet)",
    description: "Malmö University guide: Salaried Swedish PhD positions (SEK 31,500/mo), Biofilms Research Center, Interaction Design, and faculty profiles.",
    overview: "Established in 1998 and granted full research university status in 2018, Malmö University (Malmö universitet - Mau) is Sweden's ninth-largest university, situated at the heart of the dynamic transnational Öresund region connecting Sweden with Copenhagen. Internationally celebrated for pioneer research at the Biofilms Research Center for Biointerfaces (BRCB), the Faculty of Odontology, the Malmö Institute for Studies of Migration, Diversity and Welfare (MIM), and visionary interaction design, Malmö University delivers salaried doctoral positions under Swedish collective labor agreements.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS credits) from an internationally recognized higher education institution with a major in health sciences, technology, design, or social sciences (minimum 65-70% or 3.0/4.0 GPA equivalent).",
      phd: "Master's degree (minimum 240 ECTS credits total, with at least 60 ECTS at advanced level) or equivalent international qualification; selection is based on academic merit, research quality, and faculty fit.",
      language: "English 6 / English B proficiency: Academic IELTS 6.5 overall (no band below 5.5) or TOEFL iBT 90 (minimum 20 in writing).",
      proposal: "A 3 to 5 page doctoral research plan addressing research problem, theoretical context, proposed methodology, and significance.",
      appFee: "SEK 900 application fee for non-EU/EEA students applying through the central Swedish universityadmissions.se portal; €0 fee for EU citizens.",
      documents: "Certificates and diplomas of completed degrees, official transcripts, documentation of English proficiency, copy of passport, and Master's thesis."
    },
    tuitionText: "At Malmö University and throughout Sweden, PhD candidacies are classified as salaried state employment (doktorandanställning). Admitted PhD candidates pay zero tuition fees and receive a collective-bargaining salaried monthly wage of SEK 31,500 to SEK 35,000 per month (approx. SEK 380,000 to SEK 420,000/year gross) with full Swedish national healthcare, parental leave, and pension benefits. International Master's students can compete for Malmö University Master Scholarships covering 75% to 100% of tuition fees.",
    opportunities: [
      {
        id: 837,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        title: "Malmö University Master Scholarship (75% to 100% Tuition Waiver)",
        source: "https://mau.se/en/education/scholarships/",
        funding: "Full or 75% tuition fee waiver for the full 2-year duration of the Master's programme (valued at up to SEK 260,000)",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship round for Autumn intake)",
        fee: "SEK 900 central application fee",
        tuition: "Reduces annual international tuition to SEK 0 or under SEK 35,000/year.",
        requirements: {
          gpa: "First-choice application to Malmö University with top academic grades in undergraduate degree (minimum 80% or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each sub-score) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong motivation letter.",
          references: "Academic reference letters submitted with scholarship dossier."
        },
        desc: "Merit-based scholarship awarded to high-achieving non-EU/EEA students applying to English-taught master's degrees in biomedical sciences, computer science, and design at Malmö University."
      },
      {
        id: 838,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Malmö Salaried PhD Position in Biofilms and Biointerfaces (BRCB)",
        source: "https://mau.se/en/research/research-centres/biofilms-research-center-for-biointerfaces/",
        funding: "Full 4-year Swedish salaried employment: SEK 31,500 to SEK 35,000/month gross plus full healthcare and pension; zero tuition",
        status: "open-phd",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Salaried doctoral recruitment round)",
        fee: "SEK 0 application fee for doctoral positions",
        tuition: "SEK 0 tuition; all doctoral positions are fully paid employment under Swedish labor law.",
        requirements: {
          gpa: "Master of Science in Biomedical Science, Biochemistry, Biophysics, or Biomaterials.",
          ielts: "Fluent working English (IELTS 6.5 or equivalent).",
          gre: "Not applicable.",
          papers: "Master's thesis in surface chemistry, antimicrobial peptides, or microbial biofilm formation.",
          references: "Two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research post based at the Biofilms Research Center for Biointerfaces (BRCB), investigating bacterial adhesion, transdermal drug delivery, and anti-biofilm coatings for medical implants."
      },
      {
        id: 839,
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        type: "Master",
        title: "Malmö Master of Science (MSc) in Interaction Design (English-Taught)",
        source: "https://mau.se/en/study-education/programme/taind/",
        funding: "Eligible for Swedish Institute (SI) Global Professionals Scholarships (full tuition + SEK 12,000/month living stipend)",
        status: "open-master",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Central Swedish university admissions round 1)",
        fee: "SEK 900 application fee",
        tuition: "SEK 145,000/year for non-EU/EEA students (EU/EEA citizens pay SEK 0).",
        requirements: {
          gpa: "Bachelor's degree in Interaction Design, Computer Science, Informatics, or Industrial Design.",
          ielts: "Academic IELTS 6.5 (minimum 5.5 in each band) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Design portfolio demonstrating prototyping skills, user research, and interactive systems.",
          references: "One academic reference letter."
        },
        desc: "World-renowned two-year Master's degree focusing on tangible interaction, Internet of Things (IoT) experiences, participatory design methods, and ethical digital infrastructures."
      },
      {
        id: 840,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        title: "Malmö PhD in International Migration and Ethnic Relations (MIM)",
        source: "https://mau.se/en/research/research-centres/malmo-institute-for-studies-of-migration-diversity-and-welfare/",
        funding: "Salaried Swedish doctoral employment: SEK 31,500/month with annual step increases; zero tuition",
        status: "open-phd",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Doctoral recruitment deadline)",
        fee: "SEK 0 application fee",
        tuition: "SEK 0 tuition; salaried employment.",
        requirements: {
          gpa: "Master's degree in IMER, Sociology, Political Science, or Anthropology.",
          ielts: "English 6 proficiency.",
          gre: "Not applicable.",
          papers: "Demonstrated research in migration policy, refugee integration, or urban diversity.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the Malmö Institute for Studies of Migration, Diversity and Welfare (MIM), examining migration governance, labor market integration, border regimes, and urban citizenship."
      },
      {
        id: 841,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "Internet of Things and People (IoTaP) Research Centre Postdoctoral Fellowship",
        source: "https://mau.se/en/research/research-centres/internet-of-things-and-people/",
        funding: "Postdoctoral research salary: SEK 42,000 to SEK 46,000/month gross with full Swedish social benefits",
        status: "open-research",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Annual IoTaP fellowship call)",
        fee: "SEK 0 application fee",
        tuition: "Not applicable; salaried postdoctoral appointment.",
        requirements: {
          gpa: "PhD in Computer Science, Ubiquitous Computing, or Interaction Design.",
          ielts: "Professional English fluency.",
          gre: "Not applicable.",
          papers: "Peer-reviewed publications in IoT systems, smart urban environments, or edge computing.",
          references: "Two professional reference letters."
        },
        desc: "Two-year postdoctoral research appointment at the IoTaP Research Centre, developing user-centered IoT architectures, cooperative smart city sensors, and privacy-preserving ubiquitous data systems."
      },
      {
        id: 842,
        subject: "biology",
        subjects: ["biology"],
        type: "Internship",
        title: "Malmö Biomedical Surface Science Summer Laboratory Traineeship",
        source: "https://mau.se/en/research/research-centres/biofilms-research-center-for-biointerfaces/",
        funding: "SEK 11,000/month 8-week summer stipend plus shared student housing in Malmö",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer traineeship intake)",
        fee: "SEK 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Biomedical Science, Chemistry, or Biotechnology.",
          ielts: "Good working English proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in cell biology, biochemistry, or surface analysis.",
          references: "One referee letter from a faculty instructor."
        },
        desc: "Eight-week laboratory traineeship at the BRCB, utilizing quartz crystal microbalance with dissipation (QCM-D) and atomic force microscopy to observe biomolecular interactions on implant surfaces."
      },
      {
        id: 843,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Job",
        title: "Malmö Senior Researcher in Transdermal Drug Delivery & Skin Barrier Science",
        source: "https://mau.se/en/about-us/job-offers/",
        funding: "Full-time permanent research appointment: SEK 48,000 to SEK 56,000/month gross plus Swedish pension benefits",
        status: "open-job",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Formal academic search deadline)",
        fee: "SEK 0 application fee",
        tuition: "Not applicable; salaried research position.",
        requirements: {
          gpa: "PhD in Physical Chemistry, Biophysics, or Pharmaceutical Formulation awarded at least 3 years prior.",
          ielts: "Exemplary professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated track record of securing competitive external research funding and high-impact publications.",
          references: "Three academic reference contacts."
        },
        desc: "Senior research scientist post investigating the molecular biophysics of the stratum corneum lipid matrix, lipid nanoparticle skin penetration, and non-invasive transdermal drug delivery systems."
      }
    ],
    researchers: [
      {
        id: 378,
        name: "Dr. Thomas Arnebrant",
        title: "Professor of Biomedical Surface Science and Co-Founder of BRCB",
        subject: "biology",
        topics: ["Protein Adsorption", "Biointerfaces", "Lipid Membranes", "Biomedical Materials"],
        source: "https://mau.se/en/persons/thomas.arnebrant/",
        summary: "Pioneer in surface biophysics and protein-surface interactions, internationally renowned for research on biocompatible coatings, bacterial adhesion prevention, and oral biology.",
        recruiting: "Not verified"
      },
      {
        id: 379,
        name: "Dr. Pelle Ehn",
        title: "Professor Emeritus of Interaction Design",
        subject: "arts-design",
        topics: ["Participatory Design", "Design Things", "Human-Centered Computing", "Collaborative Prototyping"],
        source: "https://mau.se/en/persons/pelle.ehn/",
        summary: "One of the founding fathers of Scandinavian participatory design, celebrated globally for democratizing technology development and co-creating innovative digital systems with end-users.",
        recruiting: "Not verified"
      },
      {
        id: 380,
        name: "Dr. Pieter Bevelander",
        title: "Professor of International Migration and Ethnic Relations and Director of MIM",
        subject: "social-sciences",
        topics: ["Immigrant Integration", "Labor Market Economics", "Refugee Resettlement", "Voting Rights"],
        source: "https://mau.se/en/persons/pieter.bevelander/",
        summary: "Director of the Malmö Institute for Studies of Migration, Diversity and Welfare (MIM), leading European quantitative research on the socioeconomic integration and political participation of immigrants.",
        recruiting: "Not verified"
      }
    ]
  },

  // 19. NETHERLANDS: The Hague University of Applied Sciences (Row 1506)
  {
    institution: "The Hague University of Applied Sciences",
    shortName: "THUAS",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "The Hague, South Holland, Netherlands",
    website: "https://www.dehaagsehogeschool.nl",
    sourceRow: 1506,
    slug: "the-hague-university-of-applied-sciences",
    heroEyebrow: "Netherlands · The Hague · International City of Peace and Justice Partner · Reviewed 15 October 2026",
    headline: "The Hague University of Applied Sciences (De Haagse Hogeschool)",
    description: "THUAS guide: NL Scholarships (€5,000), International Communication Management MSc, Cyber Security, Global Governance, and faculty profiles.",
    overview: "Located in the International City of Peace and Justice, The Hague University of Applied Sciences (De Haagse Hogeschool - THUAS) is an internationally oriented professional university educating over 26,000 students from more than 120 nations. Adjacent to international courts, embassies, and the Dutch Parliament, THUAS leads applied research in global governance, cybersecurity, digital forensics at the Centre of Expertise Cyber Security, sustainable urban transitions, and international communication management.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits, equivalent to Dutch HBO or WO Bachelor) with good academic standing (minimum 65-70% or 3.0/4.0 GPA) in an appropriate field of study.",
      phd: "Master's degree (HBO Master or WO Master) in a relevant discipline; doctoral candidacies are conducted in collaboration with research universities (such as Leiden University or TU Delft) through professorships (lectoraten).",
      language: "Academic IELTS 6.5 overall (no individual sub-score below 6.0) or TOEFL iBT 90 (minimum 20 in each section).",
      proposal: "A motivation letter (1,000 words) and portfolio demonstrating professional experience, case analysis, or policy research.",
      appFee: "€0 application fee for EU students; €100 non-refundable handling fee for non-EU/EEA applicants (deducted from tuition upon enrollment).",
      documents: "Bachelor's diploma, complete transcript of records, curriculum vitae, letter of motivation, English test report, and copy of passport."
    },
    tuitionText: "Tuition for non-EU/EEA international students in Master of Science programs at THUAS is approximately €9,000 to €13,500 per year (statutory tuition of €2,601/year applies to EU/EEA citizens). Outstanding international applicants are eligible for the prestigious NL Scholarship (€5,000 merit award) as well as THUAS World Citizen Talent Scholarships.",
    opportunities: [
      {
        id: 844,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Scholarship",
        title: "THUAS World Citizen Talent Scholarship & NL Scholarship (€5,000 Award)",
        source: "https://www.thehagueuniversity.com/study-choice/masters-programmes/scholarships-and-financing",
        funding: "€5,000 financial contribution toward tuition fees and living expenses for non-EU/EEA master's students",
        status: "open-scholarship",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Annual international scholarship round for September intake)",
        fee: "€100 application handling fee",
        tuition: "Reduces annual international tuition to under €5,000/year.",
        requirements: {
          gpa: "Admitted to a full-time Master's program at THUAS with top academic rank (minimum 75% or 3.3/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall with no sub-score below 6.0.",
          gre: "Not required.",
          papers: "Demonstrated commitment to global citizenship, sustainability, or digital innovation.",
          references: "Two academic or employer recommendation letters."
        },
        desc: "Prestigious Dutch government and university-funded scholarship providing financial assistance to talented international students from outside the European Economic Area admitted to THUAS master's programs."
      },
      {
        id: 845,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master",
        title: "THUAS Master of Science (MSc) in Cyber Security Academy (English-Taught)",
        source: "https://www.thehagueuniversity.com/study-choice/masters-programmes/master-cyber-security",
        funding: "Dutch Cyber Security Academy industrial bursaries and tuition reduction grants",
        status: "open-master",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (International applicant deadline for Autumn intake)",
        fee: "€100 handling fee",
        tuition: "€13,500/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Information Technology, or Electrical Engineering with solid programming foundations.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework in cryptography, network protocols, or operating systems.",
          references: "Two letters of recommendation."
        },
        desc: "Two-year executive Master's program delivered in partnership with the Cyber Security Academy The Hague, covering critical infrastructure protection, digital forensics, threat modeling, and cyber governance."
      },
      {
        id: 846,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master",
        title: "THUAS Master of Science (MSc) in International Communication Management (English-Taught)",
        source: "https://www.thehagueuniversity.com/study-choice/masters-programmes/master-international-communication-management",
        funding: "World Citizen Talent Scholarships of up to €5,000 plus industry-partnered applied research stipends",
        status: "open-master",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (Non-EU application deadline)",
        fee: "€100 handling fee",
        tuition: "€9,900/year for non-EU students; €2,601/year for EU students.",
        requirements: {
          gpa: "Bachelor's degree in communication, business, journalism, or social sciences.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Practical communication portfolio or policy essay.",
          references: "One academic referee letter."
        },
        desc: "One-year intensive Master's program training strategic communication directors in crisis communication, cross-cultural stakeholder management, and reputation governance in international NGOs and corporations."
      },
      {
        id: 847,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "PhD",
        title: "THUAS Centre of Expertise Cyber Security Doctoral / Applied Research Fellowship",
        source: "https://www.dehaagsehogeschool.nl/onderzoek/kenniscentra/cyber-security",
        funding: "Salaried research position (Dutch CAO-HBO): €3,200 to €4,100/month gross plus 8% holiday allowance and pension",
        status: "open-phd",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Applied doctoral cohort selection)",
        fee: "€0 application fee",
        tuition: "Zero tuition charges; salaried appointment joint with Leiden University or TU Delft.",
        requirements: {
          gpa: "Master's degree in Cybersecurity, Computer Science, or Law & Technology with high marks.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Master's thesis or publication in network security, incident response, or cyber policy.",
          references: "Two academic referee letters."
        },
        desc: "Collaborative applied doctoral research at the Centre of Expertise Cyber Security in The Hague, developing operational cyber resilience models, automated threat detection tools, and digital crime investigation methodologies."
      },
      {
        id: 848,
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Research",
        title: "THUAS Mission Zero Applied Research Associate in Circular Urban Transitions",
        source: "https://www.dehaagsehogeschool.nl/onderzoek/kenniscentra/mission-zero",
        funding: "Annual salary of €44,000 to €52,000 gross under collective Dutch university labor agreement",
        status: "open-research",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Project fellowship review)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried applied research position.",
        requirements: {
          gpa: "Master's or PhD in Environmental Engineering, Urban Planning, or Sustainable Transition Studies.",
          ielts: "Fluent working English proficiencies.",
          gre: "Not applicable.",
          papers: "Practical experience in circular economy modeling, urban energy transition, or sustainable material flows.",
          references: "Two professional reference letters."
        },
        desc: "Applied research post within the Mission Zero Centre of Expertise, coordinating regional projects on renewable district heating, circular building materials, and local energy cooperatives in South Holland."
      },
      {
        id: 849,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        title: "THUAS Ethical Hacking & Digital Forensics Summer Traineeship",
        source: "https://www.thehagueuniversity.com",
        funding: "€600/month living stipend for 10 weeks with cyber forensic lab access",
        status: "open-internship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Summer 2027 practice round)",
        fee: "€0 application fee",
        tuition: "Zero tuition fees.",
        requirements: {
          gpa: "Enrolled in Bachelor's or Master's in Cybersecurity, Computer Science, or Information Security.",
          ielts: "Good English conversational abilities.",
          gre: "Not applicable.",
          papers: "Completed coursework in penetration testing, network protocols, or digital evidence recovery.",
          references: "One referee letter from a faculty instructor."
        },
        desc: "Ten-week hands-on digital forensics internship conducting simulated penetration testing, malware reverse engineering, and threat analysis in THUAS's state-of-the-art cyber testing laboratory."
      },
      {
        id: 850,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Job",
        title: "THUAS Senior Researcher / Lecturer in Cyber Security Governance & International Law",
        source: "https://www.werkenbijdehaagsehogeschool.nl",
        funding: "Full-time permanent academic staff position: €4,800 to €6,200/month gross plus 8.3% year-end bonus (CAO-HBO Scale 11/12)",
        status: "open-job",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Academic recruitment closing date)",
        fee: "€0 application fee",
        tuition: "Not applicable; salaried senior lecturer and researcher position.",
        requirements: {
          gpa: "Master's degree or PhD in Cybersecurity Governance, International Law, or Information Systems.",
          ielts: "Professional English fluency (willingness to learn Dutch).",
          gre: "Not applicable.",
          papers: "Demonstrated track record in applied cyber policy research, international security governance, and interactive pedagogy.",
          references: "Three professional reference contacts."
        },
        desc: "Senior academic role teaching in international cybersecurity and public management master's programs and directing research projects at the Centre of Expertise Cyber Security on national cybersecurity strategies and diplomatic cyber norms."
      }
    ],
    researchers: [
      {
        id: 381,
        name: "Dr. Joshua Serrano",
        title: "Professor of Cyber Security and Head of the Centre of Expertise Cyber Security",
        subject: "computer-science",
        topics: ["Cybersecurity", "Incident Response", "Critical Infrastructure", "Digital Forensics"],
        source: "https://www.dehaagsehogeschool.nl/onderzoek/onderzoekers/joshua-serrano",
        summary: "Head of the Centre of Expertise Cyber Security, advising national Dutch police and European security agencies on incident response protocols, ethical hacking, and cyber resilience in public administration.",
        recruiting: "Not verified"
      },
      {
        id: 382,
        name: "Dr. Jaco Quist",
        title: "Professor of Circular Transition Design",
        subject: "environment",
        topics: ["Circular Economy", "Sustainable Transitions", "Urban Ecology", "System Innovation"],
        source: "https://www.dehaagsehogeschool.nl/onderzoek/kenniscentra/mission-zero",
        summary: "Leading sustainable transition scholar researching circular economic modeling, backcasting methodologies, and collaborative urban innovation ecosystems for climate neutrality.",
        recruiting: "Not verified"
      },
      {
        id: 383,
        name: "Dr. Christine Moser",
        title: "Professor of Organization and Digital Society",
        subject: "social-sciences",
        topics: ["Digital Transformation", "Corporate Responsibility", "Social Networks", "Algorithmic Management"],
        source: "https://www.thehagueuniversity.com",
        summary: "Expert in organizational sociology investigating how digital technologies, automated decision algorithms, and social media platforms transform corporate governance and public trust.",
        recruiting: "Not verified"
      }
    ]
  },

  // 20. SWITZERLAND: SUPSI - Scuola universitaria professionale della Svizzera italiana (Row 1346)
  {
    institution: "SUPSI - Scuola universitaria professionale della Svizzera italiana",
    shortName: "SUPSI",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Manno, Lugano and Mendrisio, Ticino, Switzerland",
    website: "http://www.supsi.ch",
    sourceRow: 1346,
    slug: "supsi",
    heroEyebrow: "Switzerland · Ticino · IDSIA AI Robotics Pioneer & Dalle Molle Institute · Reviewed 15 October 2026",
    headline: "SUPSI (Scuola universitaria professionale della Svizzera italiana)",
    description: "SUPSI guide: Salaried Swiss research assistantships (CHF 52,000+), IDSIA Artificial Intelligence PhD, Sustainable Architecture, and faculty profiles.",
    overview: "Located in the Italian-speaking canton of Ticino, the Scuola universitaria professionale della Svizzera italiana (SUPSI) is one of Switzerland's nine recognized public universities of applied sciences. Renowned globally as the co-founder (with USI) of the Dalle Molle Institute for Artificial Intelligence (IDSIA - directed by deep learning pioneer Jürgen Schmidhuber), the Institute for Applied Sustainability to the Built Environment (ISAAC), and the Department of Innovative Technologies (DTI), SUPSI leads Swiss applied engineering, biomedical robotics, and clean energy innovation.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS credits) in engineering, computer science, architecture, or health sciences with above-average academic standing (minimum grade B or 5.0/6.0 on the Swiss grading scale).",
      phd: "Recognized Master's degree (minimum 90 to 120 ECTS credits) with high honors; doctoral candidates are employed under Swiss research contracts and registered in cooperation with Swiss research universities (such as USI, ETH Zurich, or EPFL).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90 for English-taught Master of Science in Engineering (MSE) and IDSIA research tracks; Italian B2/C1 for Italian-medium degree tracks.",
      proposal: "A motivation letter (1,000 words) and portfolio demonstrating technical engineering projects, scientific computing, or experimental research.",
      appFee: "CHF 100 non-refundable application fee for Swiss degree holders; CHF 150 for applicants with foreign university qualifications.",
      documents: "Certified copies of degree diplomas, official grade transcripts, curriculum vitae, letter of motivation, and copy of passport."
    },
    tuitionText: "Tuition fees at SUPSI are among the most accessible in Switzerland: standard semester tuition is CHF 800 to CHF 1,000 per semester for Swiss residents and CHF 1,600 per semester for international students. Doctoral research assistants (assistenti di ricerca) are employed on formal Swiss cantonal research contracts, receiving an annual salary of CHF 52,000 to CHF 64,000 per year gross under Swiss National Science Foundation (SNSF) and Innosuisse funding scales.",
    opportunities: [
      {
        id: 851,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        title: "SUPSI IDSIA Artificial Intelligence & Deep Learning Doctoral Fellowships",
        source: "https://www.idsia.ch/study/",
        funding: "Salaried Swiss doctoral contract: CHF 52,000 to CHF 62,000/year gross under SNSF scales joint with USI; minimal tuition",
        status: "open-scholarship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual Swiss applied research intake round)",
        fee: "CHF 150 international application fee",
        tuition: "CHF 1,600/semester international tuition fee.",
        requirements: {
          gpa: "Master's degree in Computer Science, Artificial Intelligence, Robotics, or Applied Mathematics with top marks (minimum 5.0/6.0 Swiss scale or 3.5/4.0 GPA).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated programming and research excellence in deep reinforcement learning, neural networks, or autonomous robotics.",
          references: "Two academic recommendation letters."
        },
        desc: "Doctoral research conducted within the world-renowned Dalle Molle Institute for Artificial Intelligence (IDSIA), investigating recurrent neural architectures, bio-inspired robotics, and autonomous drone navigation."
      },
      {
        id: 852,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master",
        title: "SUPSI Master of Science in Engineering (MSE) - Computer Science & Edge Intelligence",
        source: "https://www.supsi.ch/en/master-of-science-in-engineering",
        funding: "Salaried part-time research assistantships (50%) providing CHF 2,500 to CHF 3,200/month while studying",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Autumn intake priority deadline)",
        fee: "CHF 150 application fee",
        tuition: "CHF 1,600/semester for international students.",
        requirements: {
          gpa: "Bachelor of Science in Computer Science, Software Engineering, or Telecommunications with above-average grade.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in algorithms, distributed systems, embedded Linux, and machine learning.",
          references: "Two letters of recommendation."
        },
        desc: "Nationally accredited Master of Science in Engineering profile delivered at the modern East Campus in Lugano-Viganello, specializing in embedded machine learning, cloud-edge architectures, and industrial cyber-physical systems."
      },
      {
        id: 853,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master",
        title: "SUPSI Master of Science in Engineering (MSE) - Energy and Environmental Technologies",
        source: "https://www.supsi.ch/isaac",
        funding: "Swiss cantonal education subsidies and ISAAC research assistantship stipends",
        status: "open-master",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicant round for Fall intake)",
        fee: "CHF 150 application fee",
        tuition: "CHF 1,600/semester.",
        requirements: {
          gpa: "Bachelor's degree in Environmental Engineering, Mechanical Engineering, or Energy Systems.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Demonstrated coursework in photovoltaics, building thermal physics, and grid integration.",
          references: "One academic referee letter."
        },
        desc: "Advanced Master of Science profile at the Institute for Applied Sustainability to the Built Environment (ISAAC), training engineers in building-integrated photovoltaics (BIPV), battery storage systems, and zero-emission building design."
      },
      {
        id: 854,
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "PhD",
        title: "SUPSI Institute of Mechanical Engineering and Materials Technology (MEMTi) Doctoral Fellowship",
        source: "https://www.supsi.ch/memti",
        funding: "Salaried Swiss doctoral contract: CHF 54,000/year gross under SNSF scales joint with ETH Zurich or EPFL",
        status: "open-phd",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Doctoral recruitment intake)",
        fee: "CHF 150 application fee",
        tuition: "Zero tuition charges under university research employment.",
        requirements: {
          gpa: "Master's degree in Mechanical Engineering, Biomedical Engineering, or Materials Science with superior standing.",
          ielts: "Academic IELTS 6.5 or equivalent.",
          gre: "Not required.",
          papers: "Master's thesis in biomechanical simulation, orthopedic implant design, or composite materials.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research conducted within the MEMTi institute in Manno, developing patient-specific orthopedic implants, wear-resistant coatings, and computational finite element models of human joints."
      },
      {
        id: 855,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "SUPSI IDSIA Robotics Lab Postdoctoral Research Fellow",
        source: "https://www.idsia.ch/robotics/",
        funding: "Salaried research scientist post: CHF 72,000 to CHF 82,000/year gross under Swiss cantonal scales",
        status: "open-research",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Research grant review round)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried applied research position.",
        requirements: {
          gpa: "PhD in Robotics, Autonomous Systems, or Computer Vision.",
          ielts: "Fluent professional English.",
          gre: "Not applicable.",
          papers: "Demonstrated peer-reviewed publications in top robotics venues (ICRA, IROS, Science Robotics, IEEE T-RO).",
          references: "Two professional reference letters."
        },
        desc: "Postdoctoral research role at the IDSIA Robotics Lab, developing autonomous micro-aerial vehicles capable of vision-based navigation in GPS-denied alpine disaster zones and industrial search-and-rescue."
      },
      {
        id: 856,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        title: "SUPSI Building-Integrated Photovoltaics (BIPV) Summer Traineeship",
        source: "https://www.supsi.ch/isaac",
        funding: "CHF 1,800/month 8-week summer stipend plus Lugano laboratory access",
        status: "open-internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer 2027 traineeship call)",
        fee: "CHF 0 application fee",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Undergraduate or early Master's student in Architecture, Civil Engineering, or Energy Systems with strong grades.",
          ielts: "Good English or Italian working proficiencies.",
          gre: "Not applicable.",
          papers: "Completed coursework in building physics, solar technology, or architectural design.",
          references: "One referee letter from a faculty professor."
        },
        desc: "Eight-week summer research traineeship at the ISAAC solar testing center in Mendrisio, performing outdoor solar module characterization, electrical degradation analysis, and architectural facade integration testing."
      },
      {
        id: 857,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Job",
        title: "SUPSI Senior Researcher in Machine Learning for Industrial Automation",
        source: "https://www.supsi.ch/en/supsi/jobs.html",
        funding: "Full-time permanent academic staff position: CHF 95,000 to CHF 115,000/year gross with Swiss pension and social insurance",
        status: "open-job",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Formal academic search deadline)",
        fee: "CHF 0 application fee",
        tuition: "Not applicable; salaried senior research scientist appointment.",
        requirements: {
          gpa: "PhD in Computer Science, Machine Learning, or Automation Engineering with at least 3 years of post-PhD research experience.",
          ielts: "Exemplary professional English communication skills (Italian or German advantageous).",
          gre: "Not applicable.",
          papers: "Proven track record in predictive maintenance, deep anomaly detection, or reinforcement learning for industrial robotics.",
          references: "Three professional reference contacts."
        },
        desc: "Senior research engineering post at the Department of Innovative Technologies, directing Innosuisse research consortia developing automated defect detection, predictive maintenance models, and robotic manipulation for Swiss precision manufacturing."
      }
    ],
    researchers: [
      {
        id: 384,
        name: "Dr. Andrea Rizzoli",
        title: "Director of the Dalle Molle Institute for Artificial Intelligence (IDSIA)",
        subject: "computer-science",
        topics: ["Environmental Modeling", "Decision Support Systems", "Artificial Intelligence", "Simulation"],
        source: "https://www.idsia.ch/~andrea/",
        summary: "Director of IDSIA (USI-SUPSI), internationally recognized for pioneering applications of artificial intelligence, simulation, and machine learning to natural resource management and complex transport networks.",
        recruiting: "Not verified"
      },
      {
        id: 385,
        name: "Dr. Alessandro Giusti",
        title: "Professor of Artificial Intelligence and Head of the IDSIA Robotics Lab",
        subject: "computer-science",
        topics: ["Autonomous Drones", "Computer Vision", "Machine Learning in Robotics", "Visual Navigation"],
        source: "https://alessandrostella.github.io",
        summary: "Head of the Robotics Lab at IDSIA, celebrated for creating the first autonomous drone capable of navigating mountain forest trails using deep neural networks trained on visual imagery.",
        recruiting: "Not verified"
      },
      {
        id: 386,
        name: "Dr. Roman Rudel",
        title: "Professor and Director of the Institute for Applied Sustainability to the Built Environment (ISAAC)",
        subject: "environment",
        topics: ["Solar Photovoltaics", "Building Decarbonization", "Sustainable Energy Policy", "Energy Storage"],
        source: "https://www.supsi.ch/isaac/persone/roman-rudel",
        summary: "Director of ISAAC at SUPSI, directing national Swiss research programs in building-integrated photovoltaics (BIPV), high-efficiency heat pumps, and canton-wide energy transition strategies.",
        recruiting: "Not verified"
      }
    ]
  }
];
