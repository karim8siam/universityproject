/**
 * Batch 35 - Part 1: Universities 1 to 10 (Total Unis 472 to 481)
 * Canada (3), Australia (3), Germany (4)
 * Opp IDs: 3308 to 3377 (70 opportunities)
 * Faculty IDs: 1437 to 1466 (30 faculty members)
 */

export const batch35Part1Universities = [
  // 1. Canada: Aviron Québec College Technique
  {
    institution: "Aviron Québec College Technique",
    shortName: "Aviron Québec",
    slug: "aviron-quebec-college-technique",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Québec City, Québec, Canada",
    website: "https://www.avironquebec.com",
    sourceRow: 11,
    headline: "Aviron Québec Technical College: Industrial Mechanics, Welding & Applied Tech Guide",
    overview: "Aviron Québec Collège Technique is a premier specialized vocational and technical institute in Québec City, celebrated for intensive professional diplomas (DEP/AEC) in industrial drafting, automobile mechanics, precision welding, electricity, and advanced construction technologies.",
    description: "Explore vocational diplomas, industry apprenticeships, international student admissions, and scholarships at Aviron Québec Collège Technique in Québec City.",
    heroEyebrow: "Québec Technical College · Industrial Trades & Applied Engineering",
    tuitionText: "Tuition for international technical vocational diplomas averages CAD $16,500 to $24,000 for full multi-semester programs. Québec vocational training bursaries, international student mobility grants, and paid industry apprenticeships are available.",
    admissions: {
      masters: "Completion of secondary school diploma (DES) or recognized international equivalent secondary schooling (minimum 11-12 years) for technical diplomas.",
      phd: "Not offering doctoral degrees; provides Ministry-accredited Diplômes d'études professionnelles (DEP) and Attestations d'études collégiales (AEC).",
      language: "Proficiency in French or English depending on instructional language stream (B2 level recommended for French vocational courses).",
      proposal: "Statement of technical interest outlining career goals in trades, mechanics, or electrical engineering.",
      appFee: "CAD $250 international student application and document evaluation fee.",
      documents: "Certified high school or post-secondary transcripts, birth certificate/passport copy, English/French proficiency proof, and Québec Acceptance Certificate (CAQ) application."
    },
    opportunities: [
      {
        id: 3308,
        title: "Aviron Technical Vocational Excellence Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "CAD $2,500 tuition credit award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $250 application fee",
        tuition: "Subsidizes vocational technical diploma tuition",
        source: "https://www.avironquebec.com/en/programs",
        desc: "Merit award honoring incoming international scholars demonstrating high aptitude in mechanical trades, industrial electricity, or architectural drafting.",
        requirements: {
          gpa: "Minimum 75% average in secondary mathematics and sciences",
          ielts: "IELTS 6.0 or French B2 proficiency",
          gre: "Not required",
          papers: "500-word statement describing career commitment to Québec technical trades",
          references: "One academic or vocational instructor reference"
        }
      },
      {
        id: 3309,
        title: "Diploma in Industrial Mechanics & Automated Systems",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Paid manufacturing co-op placements in Capitale-Nationale",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $250 application fee",
        tuition: "CAD $19,800 total program tuition",
        source: "https://www.avironquebec.com/en/programs/industrial-mechanics",
        desc: "Intensive 1,800-hour vocational diploma covering pneumatic machinery, programmable logic controllers (PLCs), hydraulic diagnostics, and precision alignment.",
        requirements: {
          gpa: "High school graduation with Grade 10/11 mathematics credits",
          ielts: "English or French B2",
          gre: "Not required",
          papers: "Statement of motivation for industrial mechanics",
          references: "One referee letter"
        }
      },
      {
        id: 3310,
        title: "Vocational Diploma in High-Pressure Welding & Metallurgy",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "Canadian Welding Bureau (CWB) certification subsidies",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CAD $250 application fee",
        tuition: "CAD $18,200 full course tuition",
        source: "https://www.avironquebec.com/en/programs/welding-and-fitting",
        desc: "Comprehensive hands-on training in SMAW, GMAW, GTAW welding processes, blueprint reading, metallurgical thermal treatment, and quality inspection.",
        requirements: {
          gpa: "Secondary school diploma or equivalency",
          ielts: "IELTS 6.0 or French DELF B2",
          gre: "Not required",
          papers: "Personal statement detailing safety commitment and mechanical experience",
          references: "One academic reference"
        }
      },
      {
        id: 3311,
        title: "Diploma in Electricity & Building Automation Systems",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Hydro-Québec affiliated training stipends",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "CAD $250 application fee",
        tuition: "CAD $21,000 full tuition",
        source: "https://www.avironquebec.com/en/programs/electricity",
        desc: "Covers residential, commercial, and industrial electrical wiring, National Electrical Code standards, solar array integration, and building automation.",
        requirements: {
          gpa: "High school graduation with physics and mathematics credits",
          ielts: "Language proficiency certificate",
          gre: "Not required",
          papers: "Resume and career statement",
          references: "One reference contact"
        }
      },
      {
        id: 3312,
        title: "Automotive Diagnostics & Electric Vehicle Technology Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "CAD $3,500 industry training stipend",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Full workshop materials and diagnostic tool coverage",
        source: "https://www.avironquebec.com/en/programs/automobile-mechanics",
        desc: "Advanced fellowship analyzing high-voltage battery management, regenerative braking systems, CAN-bus network troubleshooting, and EV powertrains.",
        requirements: {
          gpa: "Enrolled student or graduate of automotive technology",
          ielts: "B2 English or French",
          gre: "Not required",
          papers: "Technical essay on electric vehicle fleet maintenance",
          references: "One master automotive technician letter"
        }
      },
      {
        id: 3313,
        title: "Computer-Aided Drafting & BIM Architecture Certificate",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "CAD $1,000 software grant",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "CAD $100 registration fee",
        tuition: "CAD $4,200 certificate fee",
        source: "https://www.avironquebec.com/en/programs/industrial-drafting",
        desc: "Intensive modular training in AutoCAD, SolidWorks, Revit BIM parametric modeling, structural drafting, and 3D printing rapid prototyping.",
        requirements: {
          gpa: "Basic computing proficiency and geometric drawing awareness",
          ielts: "English or French comprehension",
          gre: "Not required",
          papers: "Short motivation note",
          references: "None"
        }
      },
      {
        id: 3314,
        title: "Québec Regional Skilled Trades Transition Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "CAD $3,000 relocation and living cost bursary",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "CAD $250 application fee",
        tuition: "Applied towards semester tuition at Aviron Québec",
        source: "https://www.avironquebec.com/en/international-students",
        desc: "Assists international newcomers relocating to Québec City pursuing registered trades on the provincial priority workforce occupation list.",
        requirements: {
          gpa: "Acceptance into any full-time Aviron diploma program",
          ielts: "Meets program admission criteria",
          gre: "Not required",
          papers: "Relocation and career plan (750 words)",
          references: "One community or employer reference"
        }
      }
    ],
    researchers: [
      {
        id: 1437,
        name: "Marc-André Tremblay",
        title: "Director of Technical Studies & Industrial Mechanics Lead",
        subject: "engineering",
        topics: ["Pneumatics", "PLC Automation", "Hydraulic Diagnostics", "Industrial Safety Standards"],
        source: "https://www.avironquebec.com/en/about-us",
        summary: "Tremblay directs technical training curricula at Aviron Québec, supervising advanced automation labs and industrial apprenticeship alliances across Québec."
      },
      {
        id: 1438,
        name: "Jean-François Roy",
        title: "Chief Metallurgy & Advanced Welding Specialist",
        subject: "engineering",
        topics: ["Pressure Vessel Welding", "CWB Inspection", "Structural Metallurgy", "TIG/MIG Processes"],
        source: "https://www.avironquebec.com/en/about-us",
        summary: "Roy is a master welding supervisor certified by the Canadian Welding Bureau, researching alloy thermal deformation and structural integrity."
      },
      {
        id: 1439,
        name: "Sophie Blanchet",
        title: "Coordinator of International Student Affairs & Vocational Pedagogies",
        subject: "social-sciences",
        topics: ["Workforce Integration", "Technical Vocational Education", "Immigration Pathways", "Apprenticeship Models"],
        source: "https://www.avironquebec.com/en/about-us",
        summary: "Blanchet coordinates international student integration and credential assessments, publishing on vocational pedagogy and skilled workforce retention."
      }
    ]
  },

  // 2. Canada: Bart College
  {
    institution: "Bart College",
    shortName: "Bart College",
    slug: "bart-college-quebec",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Québec City, Québec, Canada",
    website: "https://www.bart.ca",
    sourceRow: 12,
    headline: "Bart College: Digital Arts, 3D Animation, Cybersecurity & Commercial Design Guide",
    overview: "Collège Bart is a venerable private college founded in 1918 in downtown Québec City, renowned for college diplomas (DEC/AEC) in 3D animation, digital video game design, computer graphic arts, web development, cybersecurity, and administrative management.",
    description: "Explore technical college diplomas, 3D digital art portfolios, scholarships, and admissions at Collège Bart in Québec City, Canada.",
    heroEyebrow: "Québec Digital Arts College · 3D Animation & Cybersecurity Hub",
    tuitionText: "Annual tuition for international students ranges from CAD $14,000 to $18,500. Québec Government international tuition exemption awards, Bart Foundation creative achievement scholarships, and paid video game studio internships are available.",
    admissions: {
      masters: "Completion of Canadian secondary school diploma (DES) or international equivalent for college diploma (DEC) technical entry.",
      phd: "Not offering doctoral degrees; provides technical college degrees (DEC Technique) and intensive adult attestations (AEC).",
      language: "French proficiency (B2/C1) or English depending on instructional cohort; French language support courses available.",
      proposal: "Creative digital portfolio (10-15 drawings, 3D assets, graphic designs, or coding samples) for digital arts tracks.",
      appFee: "CAD $50 application processing fee.",
      documents: "Secondary school transcripts, graduation certificate, identity proof, digital portfolio, and letter of intent."
    },
    opportunities: [
      {
        id: 3315,
        title: "Collège Bart Creative Digital Arts Entrance Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "CAD $3,000 tuition credit award",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $50 application fee",
        tuition: "Subsidizes first-year DEC studies in Québec City",
        source: "https://www.bart.ca/bourses-et-aide-financiere/",
        desc: "Merit award recognizing exceptional artistic creativity and technical potential in incoming 3D animation and video game design students.",
        requirements: {
          gpa: "High school average of 75%+ with outstanding creative portfolio",
          ielts: "French B2 or IELTS 6.5",
          gre: "Not required",
          papers: "Creative statement explaining aesthetic philosophy and narrative goals",
          references: "One artistic or academic recommendation"
        }
      },
      {
        id: 3316,
        title: "DEC in 3D Animation & Digital Visual Effects",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "Québec video game studio sponsored internships",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $50 application fee",
        tuition: "CAD $16,800 per academic year for international students",
        source: "https://www.bart.ca/programmes/animation-3d/",
        desc: "Three-year technical college diploma covering character modeling, rigging, texturing in Maya/ZBrush, lighting, and real-time Unreal Engine integration.",
        requirements: {
          gpa: "High school graduation certificate with drawing fundamentals",
          ielts: "French B2",
          gre: "Not required",
          papers: "10-piece creative visual arts portfolio",
          references: "One teacher recommendation"
        }
      },
      {
        id: 3317,
        title: "DEC in Computer Science & Network Cybersecurity",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Tech employer paid co-op placements",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CAD $50 application fee",
        tuition: "CAD $15,900 per academic year",
        source: "https://www.bart.ca/programmes/informatique/",
        desc: "Covers cloud infrastructure, firewall administration, intrusion detection, penetration testing, Python scripting, and database administration.",
        requirements: {
          gpa: "High school mathematics credits with solid grades",
          ielts: "French B2 or IELTS 6.0",
          gre: "Not required",
          papers: "Statement of technical goals in cybersecurity",
          references: "One academic reference"
        }
      },
      {
        id: 3318,
        title: "AEC in Web Programming & Full-Stack Development",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Québec digital workforce bursaries available",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "CAD $50 application fee",
        tuition: "CAD $14,500 total program tuition",
        source: "https://www.bart.ca/programmes/developpement-web/",
        desc: "Fast-track 16-month college attestation focusing on JavaScript/TypeScript, React, Node.js, RESTful APIs, cloud deployment, and Agile methodology.",
        requirements: {
          gpa: "Post-secondary credits or secondary school diploma plus professional experience",
          ielts: "French or English working proficiency",
          gre: "Not required",
          papers: "CV and letter of motivation",
          references: "One professional reference"
        }
      },
      {
        id: 3319,
        title: "Video Game Production & Level Design Studio Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "CAD $2,500 project stipend and workstation sponsorship",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Studio incubator workspace credit",
        source: "https://www.bart.ca/programmes/jeux-video/",
        desc: "Senior student fellowship designing playable video game prototypes, game mechanics documentation, and environmental level geometry.",
        requirements: {
          gpa: "Enrolled second or third year Bart College gaming student",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Game design document and playable demo build",
          references: "Department instructor endorsement"
        }
      },
      {
        id: 3320,
        title: "DEC in Graphic Design & Interactive Media Communication",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Regional advertising agency award bursaries",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "CAD $50 application fee",
        tuition: "CAD $15,200 per year",
        source: "https://www.bart.ca/programmes/graphisme/",
        desc: "Three-year creative program covering typography, branding identity, packaging design, motion graphics, and UI/UX interface prototyping.",
        requirements: {
          gpa: "Secondary school diploma with artistic foundation",
          ielts: "French B2",
          gre: "Not required",
          papers: "Visual arts portfolio of 10 samples",
          references: "One referee letter"
        }
      },
      {
        id: 3321,
        title: "Digital Media Marketing & Analytics Summer Intensive",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Continuing professional education employer grants",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "CAD $50 registration fee",
        tuition: "CAD $1,800 short course fee",
        source: "https://www.bart.ca/formations-courtes/",
        desc: "Four-week intensive workshop on SEO analytics, programmatic ad campaigns, social media content strategy, and conversion rate optimization.",
        requirements: {
          gpa: "Open to working professionals and college students",
          ielts: "French or English comprehension",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1440,
        name: "Guillaume Lavoie",
        title: "Director of 3D Animation & Real-Time Production",
        subject: "arts-design",
        topics: ["3D Character Rigging", "Real-Time Rendering", "Unreal Engine Architecture", "Cinematic VFX"],
        source: "https://www.bart.ca/notre-equipe/",
        summary: "Lavoie heads 3D animation education at Collège Bart, having contributed to major AAA video game titles and animated feature film pipelines."
      },
      {
        id: 1441,
        name: "Éric Gagnon",
        title: "Chair of Computer Science & Cybersecurity Systems",
        subject: "computer-science",
        topics: ["Network Defense", "Threat Intelligence", "Penetration Testing", "Cloud Infrastructure"],
        source: "https://www.bart.ca/notre-equipe/",
        summary: "Gagnon leads network architecture and cybersecurity curricula, researching zero-trust enterprise security and intrusion detection heuristics."
      },
      {
        id: 1442,
        name: "Mélanie Bouchard",
        title: "Coordinator of Graphic Design & UI/UX Interaction",
        subject: "arts-design",
        topics: ["Brand Strategy", "Typography", "User Experience Prototyping", "Interactive Design"],
        source: "https://www.bart.ca/notre-equipe/",
        summary: "Bouchard specializes in visual semiotics and digital user experience, advising design agencies and mentoring creative award recipients."
      }
    ]
  },

  // 3. Canada: Cegep Limoilou (Québec Campus)
  {
    institution: "Cegep Limoilou (Québec Campus)",
    shortName: "Cégep Limoilou",
    slug: "cegep-limoilou-quebec",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Québec City, Québec, Canada",
    website: "https://www.cegeplimoilou.ca",
    sourceRow: 20,
    headline: "Cégep Limoilou: Engineering Tech, Geomatics, Health Sciences & Trades Guide",
    overview: "Cégep Limoilou is a historic public college in Québec City, renowned for advanced technological education, applied research centers (CERFO for forestry and geomatics, and CMQ for metallurgy), mechanical engineering technology, and comprehensive pre-university science tracks.",
    description: "Explore technical college diplomas (DEC), geomatics technology, pre-university sciences, and admissions at Cégep Limoilou in Québec City, Canada.",
    heroEyebrow: "Québec Public Cégep · Applied Technology & Geomatics Flagship",
    tuitionText: "Tuition is free for Québec residents. International student tuition is approximately CAD $14,500 to $19,500 per academic year depending on technical laboratory streams. Québec international mobility scholarships and Cégep Limoilou foundation bursaries are awarded annually.",
    admissions: {
      masters: "Completion of Canadian Grade 12 or secondary school diploma (DES) with specific prerequisites in advanced mathematics, chemistry, and physics.",
      phd: "Public cégep offering pre-university DEC (2 years) and technical vocational DEC (3 years); university transfer agreements in place with Université Laval.",
      language: "French proficiency (DELF/DALF B2 or TCF Tout Public with minimum 400 points) as primary instruction is in French.",
      proposal: "Letter of intent describing educational project and technical career alignment in Québec.",
      appFee: "CAD $30 application fee via SRAM (Service régional d'admission du Montréal) or SRACQ.",
      documents: "Secondary school transcripts, graduation diploma, French language test certificate, birth certificate, and valid passport."
    },
    opportunities: [
      {
        id: 3322,
        title: "Cégep Limoilou Foundation International Excellence Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "CAD $3,500 annual tuition contribution",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $30 SRAM fee",
        tuition: "Direct credit towards technical DEC tuition",
        source: "https://www.cegeplimoilou.ca/etudiants/bourses-et-aide-financiere/",
        desc: "Granted to high-achieving international applicants accepted into technical engineering, geomatics, or computer science programs at Cégep Limoilou.",
        requirements: {
          gpa: "Secondary academic average equivalent to 80%+ in mathematics and science",
          ielts: "French B2 or DALF C1",
          gre: "Not required",
          papers: "Personal statement detailing interest in Québec applied technology",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3323,
        title: "DEC in Geomatics Technology & Land Information Systems",
        type: "Bachelor's",
        subject: "environment",
        subjects: ["environment", "computer-science"],
        funding: "CERFO research center assistantships available",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $30 application fee",
        tuition: "CAD $16,400 per year for international students",
        source: "https://www.cegeplimoilou.ca/programmes/geomatics/",
        desc: "Three-year technical degree in drone photogrammetry, satellite remote sensing, GIS database management, cartography, and GPS surveying.",
        requirements: {
          gpa: "Secondary school mathematics credits (Technical & Scientific or Pure Science stream)",
          ielts: "French B2 level",
          gre: "Not required",
          papers: "Motivation letter",
          references: "One academic reference"
        }
      },
      {
        id: 3324,
        title: "DEC in Mechanical Engineering Technology: Design & Manufacturing",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Québec Metallurgy Center (CMQ) co-op stipends",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $30 application fee",
        tuition: "CAD $17,200 per academic year",
        source: "https://www.cegeplimoilou.ca/programmes/genie-mecanique/",
        desc: "Hands-on engineering program covering 3D CAD modeling, CNC machine programming, finite element analysis, thermodynamics, and manufacturing automation.",
        requirements: {
          gpa: "High school physics and advanced mathematics",
          ielts: "French B2",
          gre: "Not required",
          papers: "Statement of interest in mechanical manufacturing",
          references: "One teacher recommendation"
        }
      },
      {
        id: 3325,
        title: "DEC in Computer Science: Web & Mobile App Programming",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Paid ATE (Alternance travail-études) industry placements",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $30 application fee",
        tuition: "CAD $15,800 per academic year",
        source: "https://www.cegeplimoilou.ca/programmes/informatique/",
        desc: "Rigorous three-year curriculum in object-oriented programming (Java/C#), database architecture (SQL/NoSQL), mobile apps (Android/iOS), and web security.",
        requirements: {
          gpa: "High school graduation with strong math marks",
          ielts: "French B2",
          gre: "Not required",
          papers: "Personal motivation essay",
          references: "One reference letter"
        }
      },
      {
        id: 3326,
        title: "CERFO Forestry Remote Sensing Applied Research Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "CAD $4,000 research stipend and field survey support",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Applied research credit",
        source: "https://cerfo.qc.ca",
        desc: "Fellowship investigating boreal forest biomass estimation, LiDAR tree crown segmentation, and wetland conservation mapping in eastern Canada.",
        requirements: {
          gpa: "Current student in geomatics, biology, or forestry sciences",
          ielts: "French working proficiency",
          gre: "Not required",
          papers: "Research brief on spatial analysis of forest ecosystems",
          references: "CERFO researcher recommendation"
        }
      },
      {
        id: 3327,
        title: "Pre-University DEC in Pure & Applied Sciences",
        type: "Bachelor's",
        subject: "physics",
        subjects: ["physics", "mathematics", "chemistry"],
        funding: "University Laval transition excellence awards",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $30 application fee",
        tuition: "CAD $14,200 per academic year",
        source: "https://www.cegeplimoilou.ca/programmes/sciences-nature/",
        desc: "Two-year pre-university program preparing students for university faculties of engineering, medicine, pharmacy, physics, and computer science.",
        requirements: {
          gpa: "Secondary 5 advanced chemistry, physics, and mathematics with high honors",
          ielts: "French B2",
          gre: "Not required",
          papers: "Academic motivation statement",
          references: "High school counselor reference"
        }
      },
      {
        id: 3328,
        title: "Metallurgical Additive Manufacturing (3D Metal Printing) Workshop",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "CMQ center innovation grants",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "CAD $75 registration fee",
        tuition: "CAD $1,950 intensive technical course",
        source: "https://cmq.qc.ca",
        desc: "Advanced industrial training in selective laser melting (SLM), metal powder metallurgy, microstructural analysis, and aerospace post-processing.",
        requirements: {
          gpa: "Technical diploma or engineering degree in progress",
          ielts: "French or English",
          gre: "Not required",
          papers: "Resume and technical statement",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1443,
        name: "Dr. Martin Parent",
        title: "Director General of CERFO & Geomatics Researcher",
        subject: "environment",
        topics: ["Forest Geomatics", "LiDAR Remote Sensing", "Spatial Ecology", "Ecosystem Resilience"],
        source: "https://cerfo.qc.ca/equipe/",
        summary: "Dr. Parent heads the Centre d'enseignement et de recherche en foresterie (CERFO), publishing extensively on aerial remote sensing and forest inventory modeling."
      },
      {
        id: 1444,
        name: "Dr. Geneviève Toussaint",
        title: "Head of Mechanical Engineering Technology & Robotics",
        subject: "engineering",
        topics: ["Advanced Manufacturing", "CNC Automation", "Kinematics", "Finite Element Analysis"],
        source: "https://www.cegeplimoilou.ca/notre-college/equipe/",
        summary: "Dr. Toussaint directs mechanical engineering laboratories, researching computer-integrated manufacturing, robotic welding arms, and CAD design."
      },
      {
        id: 1445,
        name: "Dr. Patrice Roy",
        title: "Senior Metallurgy Researcher, Centre de métallurgie du Québec (CMQ)",
        subject: "engineering",
        topics: ["Additive Metal Manufacturing", "Alloy Solidification", "Powder Metallurgy", "Corrosion Resistance"],
        source: "https://cmq.qc.ca/equipe/",
        summary: "Dr. Roy specializes in laser powder bed fusion, analyzing microstructural integrity and thermal fatigue in custom aluminum and titanium components."
      }
    ]
  },

  // 4. Australia: CQUniversity Emerald Campus
  {
    institution: "CQUniversity Emerald",
    shortName: "CQUniversity Emerald",
    slug: "cquniversity-emerald-campus",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Emerald, Central Queensland, Australia",
    website: "https://www.cqu.edu.au",
    sourceRow: 158,
    headline: "CQUniversity Emerald: Precision Agriculture, Mining Engineering & Rural Health",
    overview: "CQUniversity Emerald Campus is the regional agricultural and mining education hub in the Central Highlands of Queensland, celebrated for its 2,100-hectare research station, precision cropping technology, heavy machinery diesel fitting, and rural healthcare delivery.",
    description: "Explore agricultural degrees, mining trades, rural health scholarships, and admissions at CQUniversity Emerald Campus in Queensland, Australia.",
    heroEyebrow: "Central Queensland Agricultural Hub · Precision Agriculture & Mining Tech",
    tuitionText: "Annual undergraduate tuition for international students averages AUD $27,000 to $34,000. Australian Destination Australia scholarships of up to AUD $15,000 per year, CQUni International Student scholarships (25% fee reduction), and agricultural industry awards are available.",
    admissions: {
      masters: "Australian Bachelor's degree or recognized equivalent in agriculture, business, engineering, or environmental sciences for master's programs.",
      phd: "Four-year Bachelor's with First-Class Honours, or Master by Research, plus structured research proposal aligned with agricultural precision tech.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or PTE Academic 58.",
      proposal: "Doctoral and research applicants must submit a 1,500-word proposal on rural agronomy, mining logistics, or water management.",
      appFee: "Free online direct application through CQUniversity international portal.",
      documents: "Certified academic transcripts, degree awards, English language test certificate, resume/CV, and passport copy."
    },
    opportunities: [
      {
        id: 3329,
        title: "Destination Australia Regional Scholarship (Emerald Campus)",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "AUD $15,000 per year living and study stipend",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free application",
        tuition: "Combines with 25% international student tuition concession",
        source: "https://www.cqu.edu.au/courses/scholarships/destination-australia",
        desc: "Funded by the Australian Commonwealth Government to support international and domestic scholars relocating to regional Queensland for agriculture and science degrees.",
        requirements: {
          gpa: "ATAR 70+ or equivalent international bachelor's degree GPA",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "500-word statement on living and studying in regional Central Queensland",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3330,
        title: "Bachelor of Agriculture & Precision Agtech Systems",
        type: "Bachelor's",
        subject: "environment",
        subjects: ["environment", "computer-science"],
        funding: "Central Queensland agricultural industry field bursaries",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "AUD $31,200 per academic year",
        source: "https://www.cqu.edu.au/courses/bachelor-of-agriculture",
        desc: "Three-year degree utilizing Emerald's commercial cropping acreage to explore autonomous tractor telemetry, drone crop health scouting, and soil moisture sensors.",
        requirements: {
          gpa: "Completion of secondary school with biology or chemistry credits",
          ielts: "IELTS 6.0 overall (minimum 5.5 across components)",
          gre: "Not required",
          papers: "Statement of purpose for agricultural technology",
          references: "One academic reference"
        }
      },
      {
        id: 3331,
        title: "PhD in Precision Cropping & Arid Water Management",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "Full tuition waiver plus AUD $32,000 annual research stipend",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; funded Commonwealth research training program (RTP)",
        source: "https://www.cqu.edu.au/research/postgraduate-research",
        desc: "Doctoral research investigation into irrigation efficiency, soil carbon sequestration, drought-tolerant grain cultivars, and satellite evapotranspiration modeling.",
        requirements: {
          gpa: "First-Class Honours degree or Master by Research in agronomy or soil science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "1,500-word doctoral research proposal and CV",
          references: "Two academic supervisor references"
        }
      },
      {
        id: 3332,
        title: "Associate Degree of Engineering (Mining & Mechanical)",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "Bowen Basin mining corporation apprenticeships",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Free application",
        tuition: "AUD $28,400 per year",
        source: "https://www.cqu.edu.au/courses/associate-degree-of-engineering",
        desc: "Two-year associate degree training engineering associates in open-cut mining plant maintenance, conveyor hydraulics, structural steel analysis, and risk mitigation.",
        requirements: {
          gpa: "Senior secondary graduation with Mathematics Methods",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement detailing engineering career objectives",
          references: "One reference contact"
        }
      },
      {
        id: 3333,
        title: "Bachelor of Nursing (Rural & Remote Healthcare Stream)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Queensland Health rural clinical placement allowances",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "Free application",
        tuition: "AUD $33,500 per year",
        source: "https://www.cqu.edu.au/courses/bachelor-of-nursing",
        desc: "Accredited three-year professional nursing degree with intensive clinical rotations in Emerald Hospital, community health clinics, and Indigenous medical services.",
        requirements: {
          gpa: "Completed secondary education or post-secondary foundation studies",
          ielts: "IELTS 7.0 overall (minimum 7.0 in all bands for NMBA accreditation)",
          gre: "Not required",
          papers: "Statement of commitment to remote healthcare practice",
          references: "Two references"
        }
      },
      {
        id: 3334,
        title: "Certificate IV in Heavy Commercial Vehicle Mechanical Technology",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "Australian apprenticeships wage incentives",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "AUD $14,000 full course tuition",
        source: "https://www.cqu.edu.au/courses/certificate-iv-in-heavy-commercial-vehicle-mechanical-technology",
        desc: "Vocational trade credential covering diesel engine diagnostics, air-braking systems, heavy transport drive trains, and mobile mining plant maintenance.",
        requirements: {
          gpa: "Year 10 completion and apprenticeship arrangement",
          ielts: "English working proficiency",
          gre: "Not required",
          papers: "Trade employer sponsorship documentation",
          references: "Employer reference"
        }
      },
      {
        id: 3335,
        title: "CQUni International Student Scholarship (25% Fee Reduction)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "25% deduction on full tuition fees for the duration of the degree",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Applicable to all full-fee undergraduate and postgraduate courses",
        source: "https://www.cqu.edu.au/courses/scholarships/cquni-international-student-scholarship",
        desc: "Awarded automatically to eligible incoming international students who meet academic progression standards enrolling at regional campuses including Emerald.",
        requirements: {
          gpa: "Successful completion of prior studies with minimum 65% academic average",
          ielts: "Standard course requirement",
          gre: "Not required",
          papers: "Submitted with course application",
          references: "Included with admission dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1446,
        name: "Prof. Dr. Jaime Manning",
        title: "Associate Professor of Agricultural Sciences & Precision Livestock Lead",
        subject: "environment",
        topics: ["Precision Agriculture", "Livestock Tracking Sensors", "Pasture Management", "Thermal Welfare"],
        source: "https://www.cqu.edu.au/research/organisations/centre-for-agriculture-and-the-environmental",
        summary: "Prof. Manning evaluates wearable sensor technologies and telemetry to monitor animal welfare, grazing distribution, and pasture regeneration in Central Queensland."
      },
      {
        id: 1447,
        name: "Dr. Amy Cosby",
        title: "Senior Research Fellow in Agri-tech Education & Farming Innovation",
        subject: "social-sciences",
        topics: ["Agri-Tech Adoption", "Rural Workforce Development", "Agricultural Pedagogy", "Precision Cropping"],
        source: "https://www.cqu.edu.au/research/organisations/centre-for-agriculture-and-the-environmental",
        summary: "Dr. Cosby investigates technology adoption among Australian farmers, designing educational frameworks that translate autonomous ag-tech to regional producers."
      },
      {
        id: 1448,
        name: "Dr. Nathan English",
        title: "Senior Lecturer in Earth & Environmental Sciences",
        subject: "environment",
        topics: ["Catchment Hydrology", "Isotope Geochemistry", "Soil Erosion Modeling", "Drought Resiliency"],
        source: "https://www.cqu.edu.au/research/organisations/centre-for-agriculture-and-the-environmental",
        summary: "Dr. English studies water isotopes and soil geochemistry, tracking sediment transport and groundwater recharge across the Fitzroy River basin."
      }
    ]
  },

  // 5. Australia: Australian Catholic University (Adelaide Campus)
  {
    institution: "Australian Catholic University (Adelaide Campus)",
    shortName: "ACU Adelaide",
    slug: "acu-adelaide-australian-catholic-university",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Adelaide, South Australia, Australia",
    website: "https://www.acu.edu.au",
    sourceRow: 150,
    headline: "ACU Adelaide: Educational Leadership, Theology, Philosophy & Bioethics Guide",
    overview: "Located in the heart of the Adelaide civic precinct, ACU Adelaide Leadership Centre delivers postgraduate programs, theological institutes, doctoral supervision, educational leadership, and ethical health policy research within the nationwide ACU multi-campus university network.",
    description: "Explore postgraduate degrees, doctoral research fellowships, theology scholarships, and admissions at Australian Catholic University Adelaide Campus.",
    heroEyebrow: "Adelaide Leadership Center · Educational Leadership & Theological Ethics",
    tuitionText: "Postgraduate annual tuition for international students averages AUD $25,000 to $32,000. ACU International Student scholarships (50% fee reduction), Peter Faber business fellowships, and Catholic education diocesan sponsorships are available.",
    admissions: {
      masters: "Accredited Bachelor's degree (or equivalent Australian Level 7 qualification) in education, humanities, theology, or related field.",
      phd: "Master by Research or Bachelor with First-Class Honours, submitted research proposal, and aligned academic supervision at ACU.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all bands) for humanities and education; 7.0 for clinical areas.",
      proposal: "Doctoral research proposal (1,500-2,000 words) defining ethical framework, methodology, and primary bibliography.",
      appFee: "AUD $110 international application fee (waived for direct online submissions during designated application weeks).",
      documents: "Certified academic transcripts, degree parchment, English proficiency results, resume/CV, and two professional or academic references."
    },
    opportunities: [
      {
        id: 3336,
        title: "ACU International Student Merit Scholarship (50% Tuition Waiver)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "50% reduction in full degree tuition fees",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $110 application fee",
        tuition: "Awarded across the full duration of eligible master's or PhD programs",
        source: "https://www.acu.edu.au/study-at-acu/fees-and-scholarships/scholarships",
        desc: "Prestigious university-wide award granted to top-ranking international students who demonstrate exceptional academic achievement and commitment to social justice.",
        requirements: {
          gpa: "Minimum 80% or equivalent in previous university bachelor's studies",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "750-word personal statement highlighting leadership and community contribution",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3337,
        title: "Master of Educational Leadership & School Governance",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Catholic Education South Australia (CESA) bursaries available",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "AUD $110 application fee",
        tuition: "AUD $26,400 per academic year",
        source: "https://www.acu.edu.au/courses/postgraduate/master-of-educational-leadership",
        desc: "Curriculum preparing school principals and senior educators in strategic resource management, curriculum reform, organizational ethics, and pedagogical mentoring.",
        requirements: {
          gpa: "Bachelor of Education or recognized teaching degree plus minimum 2 years of teaching experience",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Statement of educational leadership intent",
          references: "Two supervisory references"
        }
      },
      {
        id: 3338,
        title: "PhD in Bioethics, Healthcare Philosophy & Human Rights",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Full Australian RTP fee offset plus AUD $33,500 annual living stipend",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; fully funded doctoral scholarship",
        source: "https://www.acu.edu.au/research/become-a-research-candidate",
        desc: "Three-to-four year doctoral dissertation exploring end-of-life decision making, artificial intelligence in triage medicine, or philosophical theories of human dignity.",
        requirements: {
          gpa: "First-Class Honours degree or Master by Research with distinction",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Detailed 2,000-word doctoral research proposal",
          references: "Two academic referee reports"
        }
      },
      {
        id: 3339,
        title: "Master of Theological Studies & Interreligious Dialogue",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Archdiocese of Adelaide ministry bursaries",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "AUD $110 application fee",
        tuition: "AUD $24,800 per academic year",
        source: "https://www.acu.edu.au/courses/postgraduate/master-of-theological-studies",
        desc: "Explores biblical hermeneutics, systematic theology, Catholic social teaching, contemporary Christian ethics, and comparative multi-faith encounters.",
        requirements: {
          gpa: "Bachelor's degree in any discipline",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Essay on contemporary theological questions (1,000 words)",
          references: "One academic or pastoral reference"
        }
      },
      {
        id: 3340,
        title: "Graduate Certificate in Religious Education & Pedagogy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Diocesan teacher professional development subsidies",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "AUD $110 application fee",
        tuition: "AUD $12,800 total certificate tuition",
        source: "https://www.acu.edu.au/courses/postgraduate/graduate-certificate-in-religious-education",
        desc: "Qualifies practicing teachers to teach religious education in Catholic primary and secondary schools, focusing on biblical narratives and moral pedagogy.",
        requirements: {
          gpa: "Recognized initial teacher education degree (BEd or MTeach)",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Teaching accreditation proof and resume",
          references: "One school principal recommendation"
        }
      },
      {
        id: 3341,
        title: "Dymphna Clark Social Justice & Community Ethics Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "AUD $6,000 research travel grant and archive access",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Full research affiliation support",
        source: "https://www.acu.edu.au/research/institutes/institute-for-humanities-and-social-sciences",
        desc: "Supports visiting scholars and doctoral fellows conducting research on indigenous reconciliation, refugee advocacy ethics, and homelessness policy.",
        requirements: {
          gpa: "PhD candidate or early career researcher in sociology, ethics, or law",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Research brief detailing alignment with common good principles",
          references: "Two academic letters"
        }
      },
      {
        id: 3342,
        title: "Peter Faber Business & Moral Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "AUD $5,000 tuition grant",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "AUD $110 application fee",
        tuition: "Deducted from second semester course fees",
        source: "https://www.acu.edu.au/study-at-acu/fees-and-scholarships/scholarships",
        desc: "Awarded to graduate business students dedicated to corporate ethical responsibility, ESG stewardship, and servant leadership models.",
        requirements: {
          gpa: "Enrolled student in an ACU postgraduate business or leadership program",
          ielts: "Standard course requirement",
          gre: "Not required",
          papers: "Essay on ethical leadership challenges in modern enterprises",
          references: "One employer or academic reference"
        }
      }
    ],
    researchers: [
      {
        id: 1449,
        name: "Prof. Dr. David Runia",
        title: "Professorial Fellow & Specialist in Ancient Philosophy and Philo of Alexandria",
        subject: "social-sciences",
        topics: ["Hellenistic Judaism", "Ancient Philosophy", "Philo of Alexandria", "Patristic Exegesis"],
        source: "https://www.acu.edu.au/research/institutes/institute-for-religion-and-critical-inquiry",
        summary: "Prof. Runia is an internationally renowned scholar of Hellenistic philosophy and Philo, Fellow of the Australian Academy of the Humanities."
      },
      {
        id: 1450,
        name: "Prof. Dr. Robyn Horner",
        title: "Professor of Systematic Theology & Fundamental Philosophy",
        subject: "social-sciences",
        topics: ["Postmodern Theology", "Phenomenology", "Theological Hermeneutics", "Faith and Culture"],
        source: "https://www.acu.edu.au/research/institutes/institute-for-religion-and-critical-inquiry",
        summary: "Prof. Horner investigates the intersection of French phenomenology and fundamental theology, publishing on Jean-Luc Marion and Jacques Derrida."
      },
      {
        id: 1451,
        name: "Dr. Matthew Tan",
        title: "Senior Lecturer in Theology & Social Ethics",
        subject: "social-sciences",
        topics: ["Digital Ethics", "Catholic Social Teaching", "Liturgical Theology", "Consumer Capitalism"],
        source: "https://www.acu.edu.au/research/institutes/institute-for-religion-and-critical-inquiry",
        summary: "Dr. Tan researches how digital communication platforms shape theological anthropology and community ethical behavior in contemporary society."
      }
    ]
  },

  // 6. Australia: Elizabeth College
  {
    institution: "Elizabeth College",
    shortName: "Elizabeth College",
    slug: "elizabeth-college-hobart-tasmania",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Hobart, Tasmania, Australia",
    website: "https://elizabethcollege.tas.edu.au",
    sourceRow: 163,
    headline: "Elizabeth College: Senior Secondary STEM, Marine Studies & Arts Academy Guide",
    overview: "Elizabeth College in Hobart, Tasmania, is a premier state senior secondary college renowned for advanced pre-tertiary education, university transition pathways with the University of Tasmania, the Elizabeth College Performing Arts and Media Academy, marine biology science, and digital computing.",
    description: "Explore Tasmanian Certificate of Education (TCE) pathways, international student scholarships, marine sciences, and university preparation at Elizabeth College in Hobart.",
    heroEyebrow: "Tasmanian Senior Secondary College · Marine Sciences & Arts Academy",
    tuitionText: "Tuition for international students enrolled through Government Education Training International (GETI) Tasmania is approximately AUD $14,500 to $16,800 per year. GETI academic merit bursaries, Tasmanian Government study awards, and homestay subsidies are accessible.",
    admissions: {
      masters: "Elizabeth College provides Year 11 and Year 12 pre-tertiary education (Tasmanian Certificate of Education and ATAR) preparing graduates for direct university entrance worldwide.",
      phd: "Senior secondary college; graduates transition to Australian and international universities.",
      language: "IELTS Academic 5.5 overall (or completion of GETI Intensive English Language Course in Hobart).",
      proposal: "Statement of study intent detailing anticipated pre-tertiary subjects (STEM, arts, humanities) and target university degrees.",
      appFee: "AUD $250 GETI international student application fee.",
      documents: "Certified transcripts for the past two academic years, school recommendation, passport copy, and evidence of English proficiency."
    },
    opportunities: [
      {
        id: 3343,
        title: "GETI Tasmania International Student Academic Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "AUD $3,000 tuition fee concession",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "AUD $250 GETI fee",
        tuition: "Deducted from annual Tasmanian Government school tuition",
        source: "https://www.tasc.tas.gov.au",
        desc: "Recognizes high-achieving international scholars entering Year 11 or 12 at Elizabeth College aiming for high Australian Tertiary Admission Ranks (ATAR).",
        requirements: {
          gpa: "Top 15% academic standing in prior secondary schooling (Year 9/10)",
          ielts: "IELTS 5.5 or equivalent",
          gre: "Not required",
          papers: "500-word personal essay on contributing to the Tasmanian school community",
          references: "Two academic referee letters from current school teachers"
        }
      },
      {
        id: 3344,
        title: "Tasmanian Marine Biology & Antarctic Science Pre-Tertiary Course",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Tasmanian marine expedition field grants",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $250 GETI fee",
        tuition: "AUD $15,200 per academic year",
        source: "https://elizabethcollege.tas.edu.au/courses/science/",
        desc: "Advanced pre-tertiary curriculum linked with the Institute for Marine and Antarctic Studies (IMAS), covering Derwent Estuary ecology, benthic sampling, and oceanography.",
        requirements: {
          gpa: "Year 10 science credits with high marks",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Letter of intent explaining marine science career goals",
          references: "One science teacher reference"
        }
      },
      {
        id: 3345,
        title: "Elizabeth College Arts & Media Academy Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "AUD $1,500 production budget and professional theatre mentoring",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Integrated into TCE Performing Arts curriculum",
        source: "https://elizabethcollege.tas.edu.au/academies/",
        desc: "Selective academy program for talented actors, musicians, and filmmakers providing masterclasses with Tasmanian Symphony Orchestra and Theatre Royal.",
        requirements: {
          gpa: "Successful audition (performance monologue, music performance, or digital film portfolio)",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "Creative statement of artistic intent",
          references: "One drama or music director recommendation"
        }
      },
      {
        id: 3346,
        title: "High-Performance Computing & Software Development Stream",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Tasmanian ICT industry student hackathon awards",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $250 GETI fee",
        tuition: "AUD $15,200 per year",
        source: "https://elizabethcollege.tas.edu.au/courses/technologies/",
        desc: "Pre-tertiary computer science exploring algorithmic complexity, object-oriented software engineering in Python, database normalization, and cybersecurity.",
        requirements: {
          gpa: "Grade 10 mathematics credits",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Coding portfolio or statement of interest",
          references: "One referee"
        }
      },
      {
        id: 3347,
        title: "University of Tasmania (UTAS) High Achiever University Pathway",
        type: "Course",
        subject: "mathematics",
        subjects: ["mathematics", "physics"],
        funding: "UTAS concurrent university tuition waiver for college students",
        status: "Open",
        deadline: "2027-02-20",
        deadlineText: "February 20, 2027",
        fee: "Free internal registration",
        tuition: "Dual high school and university credit at zero additional tuition cost",
        source: "https://elizabethcollege.tas.edu.au/courses/university-pathways/",
        desc: "Enables exceptional Year 12 Elizabeth College scholars to study first-year university mathematics and physics while completing secondary credentials.",
        requirements: {
          gpa: "Outstanding academic results across Level 3 TCE sciences (A rating)",
          ielts: "Standard college enrollment",
          gre: "Not required",
          papers: "Academic transcript and UTAS HAP application form",
          references: "College principal endorsement"
        }
      },
      {
        id: 3348,
        title: "Tasmanian Outdoor Education & Wilderness Leadership Certificate",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Wilderness equipment and expedition subsidies",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Course activity levy applies",
        tuition: "AUD $15,200 per year",
        source: "https://elizabethcollege.tas.edu.au/courses/health-and-physical-education/",
        desc: "Expeditionary leadership course conducting bushwalking, whitewater rafting, and alpine navigation in Tasmania's UNESCO World Heritage Wilderness.",
        requirements: {
          gpa: "Medical clearance and swimming proficiency",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Participation agreement and risk acknowledgment",
          references: "None"
        }
      },
      {
        id: 3349,
        title: "Elizabeth College International Student Community Ambassador Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "AUD $1,500 leadership grant",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Direct student leadership stipend",
        source: "https://elizabethcollege.tas.edu.au/international/",
        desc: "Awarded to an international Year 11/12 student serving on the Student Leadership Group, fostering cross-cultural events and peer tutoring.",
        requirements: {
          gpa: "Enrolled international student with satisfactory academic progression",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Statement detailing planned cultural harmony initiatives",
          references: "College international coordinator nomination"
        }
      }
    ],
    researchers: [
      {
        id: 1452,
        name: "Dr. Dianne Purnell",
        title: "Principal & Senior Secondary Pedagogical Specialist",
        subject: "social-sciences",
        topics: ["Senior Secondary Pedagogy", "University Transition Frameworks", "Curriculum Differentiation", "Student Wellbeing"],
        source: "https://elizabethcollege.tas.edu.au/about-us/",
        summary: "Dr. Purnell leads Elizabeth College, publishing on secondary-tertiary articulation pathways, academic extension, and student retention in Tasmania."
      },
      {
        id: 1453,
        name: "David O'Callaghan",
        title: "Head of Science & Marine Biology Lead",
        subject: "biology",
        topics: ["Marine Ecology", "Derwent Estuary Biodiversity", "STEM Curriculum", "Inquiry-Based Learning"],
        source: "https://elizabethcollege.tas.edu.au/courses/science/",
        summary: "O'Callaghan directs marine sciences and field expeditions, collaborating with UTAS marine biologists on ecological monitoring of Tasmanian coastal flora."
      },
      {
        id: 1454,
        name: "Claire Jones",
        title: "Director of Performing Arts and Media Academy",
        subject: "arts-design",
        topics: ["Devised Theatre", "Youth Arts Leadership", "Media Production", "Contemporary Performance"],
        source: "https://elizabethcollege.tas.edu.au/academies/",
        summary: "Jones directs the Performing Arts Academy, producing major annual musical and theatrical productions that have launched prominent Australian performing artists."
      }
    ]
  },

  // 7. Germany: Arden University Berlin
  {
    institution: "Arden University Berlin",
    shortName: "Arden University Berlin",
    slug: "arden-university-berlin",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://arden.ac.uk/where-to-study/berlin",
    sourceRow: 214,
    headline: "Arden University Berlin: Digital Business, Cloud Computing & Healthcare Management",
    overview: "Arden University Berlin is a dynamic international study center located in Berlin, offering accredited British and German-recognized Bachelor's and Master's degrees in digital business, cyber security, project management, data analytics, and global healthcare management.",
    description: "Explore career-focused bachelor's and master's degrees, international scholarships, and admissions at Arden University Berlin campus in Germany.",
    heroEyebrow: "Berlin International Campus · Digital Business & Applied Computing",
    tuitionText: "Annual undergraduate tuition for international students averages €9,500 to €11,500. Master's tuition ranges from €12,500 to €15,000 for full programs. Berlin Innovation Scholarships (up to 30% reduction), early bird discounts, and corporate sponsorships are available.",
    admissions: {
      masters: "Accredited Bachelor's degree (minimum 2:2 or equivalent) in a related field; significant managerial experience considered for MBA/Executive tracks.",
      phd: "Focuses on career-oriented undergraduate and postgraduate degrees; does not offer doctoral PhD programs directly.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-test) or equivalent English proficiency certificate.",
      proposal: "Personal statement detailing professional aspirations in the Berlin startup ecosystem or European commercial sectors.",
      appFee: "Free direct online application through Arden University Berlin portal.",
      documents: "Bachelor's diploma, complete academic transcripts, passport copy, resume/CV, personal statement, and one academic/employer reference."
    },
    opportunities: [
      {
        id: 3350,
        title: "Berlin Innovation International Student Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Up to 30% tuition fee reduction",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Directly credited against Berlin campus master's or bachelor's fees",
        source: "https://arden.ac.uk/where-to-study/berlin/scholarships",
        desc: "Merit-based financial award supporting aspiring tech entrepreneurs, data analysts, and international managers studying at the Berlin study center.",
        requirements: {
          gpa: "Undergraduate degree with solid academic record (equivalent to 2:1 or GPA 3.0+)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "500-word essay on how you will leverage your degree in the European digital economy",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3351,
        title: "MSc in Cloud Computing & DevOps Architecture",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Berlin tech hub internship partnerships",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "€13,500 total program tuition",
        source: "https://arden.ac.uk/our-courses/postgraduate/computing/msc-cloud-computing",
        desc: "Covers cloud infrastructure design (AWS/Azure), containerization with Docker and Kubernetes, CI/CD automated deployment, and microservices architecture.",
        requirements: {
          gpa: "Bachelor's degree in computing, engineering, mathematics, or related quantitative area",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of technical experience and objectives",
          references: "One reference contact"
        }
      },
      {
        id: 3352,
        title: "MSc in Data Analytics and Information Systems Management",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "German industry tech vouchers available",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "€13,000 full course tuition",
        source: "https://arden.ac.uk/our-courses/postgraduate/computing/msc-data-analytics-information-systems-management",
        desc: "Designed for business analysts and programmers exploring big data pipelines, machine learning predictive models, SQL data warehouses, and visualization.",
        requirements: {
          gpa: "Recognized undergraduate degree (2:2 or above)",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement detailing interest in data-driven decision making",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3353,
        title: "Master of Business Administration (MBA - Digital Transformation)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Executive women in business tuition grants up to €2,000",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "€15,000 full program fee",
        source: "https://arden.ac.uk/our-courses/postgraduate/business/mba",
        desc: "Comprehensive MBA addressing strategic financial management, agile leadership, cross-cultural HR, and digital business model disruption in Europe.",
        requirements: {
          gpa: "Undergraduate degree and minimum 2 years of relevant professional work experience",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Professional CV and executive career goals statement",
          references: "Two professional references"
        }
      },
      {
        id: 3354,
        title: "MSc in Global Healthcare Management & Health Policy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Healthcare professional study bursaries",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "€13,500 total tuition",
        source: "https://arden.ac.uk/our-courses/postgraduate/health/msc-global-healthcare-management",
        desc: "Equips clinicians and administrators with competencies in health economics, epidemiology surveillance, clinical governance, and telemedicine ethics.",
        requirements: {
          gpa: "Degree in nursing, medicine, allied health, or public administration",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose addressing global health equity",
          references: "One professional reference"
        }
      },
      {
        id: 3355,
        title: "BA (Hons) in Business Management & Entrepreneurship",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Berlin startup incubator mentorship",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "€9,800 per academic year",
        source: "https://arden.ac.uk/our-courses/undergraduate/business/ba-hons-business-management",
        desc: "Three-year bachelor's degree covering marketing strategy, international trade, organizational behavior, business law, and venture launching.",
        requirements: {
          gpa: "High school graduation certificate (A-Levels, Abitur, or international equivalent)",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal motivation essay",
          references: "One academic reference"
        }
      },
      {
        id: 3356,
        title: "Enterprise Cybersecurity Governance & Audit Certificate",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Professional development employer vouchers",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "€1,750 executive course fee",
        source: "https://arden.ac.uk/where-to-study/berlin",
        desc: "Executive short course exploring ISO 27001 implementation, GDPR compliance, risk frameworks, and incident crisis communications.",
        requirements: {
          gpa: "IT or corporate governance background",
          ielts: "English fluency",
          gre: "Not required",
          papers: "CV and registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1455,
        name: "Prof. Dr. Carl Lygo",
        title: "Vice-Chancellor and Chief Executive Officer",
        subject: "social-sciences",
        topics: ["Higher Education Regulation", "Legal Education", "Strategic Management", "Social Mobility"],
        source: "https://arden.ac.uk/about-arden/our-people/leadership-team",
        summary: "Prof. Lygo is a prominent British legal scholar and higher education leader, knighted for contributions to professional education and widening academic participation."
      },
      {
        id: 1456,
        name: "Dr. Tobias Kesting",
        title: "Academic Director (Berlin Campus) & Professor of Marketing",
        subject: "social-sciences",
        topics: ["Academic Spin-Offs", "Knowledge Transfer", "Innovation Marketing", "Digital Entrepreneurship"],
        source: "https://arden.ac.uk/where-to-study/berlin/faculty",
        summary: "Dr. Kesting leads Berlin academic operations, researching university-industry technology transfer and market entry models for European high-tech startups."
      },
      {
        id: 1457,
        name: "Dr. Ammar Al-Bazi",
        title: "Head of School of Computing & Professor of Simulation Modeling",
        subject: "computer-science",
        topics: ["Discrete Event Simulation", "Cloud Computing Optimization", "Supply Chain Analytics", "AI Algorithms"],
        source: "https://arden.ac.uk/our-courses/postgraduate/computing",
        summary: "Dr. Al-Bazi investigates metaheuristic optimization, distributed cloud scheduling, and predictive simulation for complex enterprise computing."
      }
    ]
  },

  // 8. Germany: Baltic College (FHM Schwerin / Rostock)
  {
    institution: "Baltic College",
    shortName: "Baltic College (FHM)",
    slug: "baltic-college-fhm-schwerin",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Schwerin & Rostock, Mecklenburg-Vorpommern, Germany",
    website: "https://www.fh-mittelstand.de",
    sourceRow: 219,
    headline: "Baltic College (FHM): Health Tourism, SME Management & Sustainable Economics",
    overview: "Baltic College, integrated into the state-accredited Fachhochschule des Mittelstands (FHM Schwerin/Rostock), is a premier private university of applied sciences in northern Germany, renowned for international health tourism management, SME economics, and renewable energy logistics.",
    description: "Explore accredited bachelor's and master's degree programs, hotel and tourism management, SME internships, and scholarships at Baltic College FHM Schwerin in Germany.",
    heroEyebrow: "Mecklenburg Applied Science · Health Tourism & Mittelstand Management",
    tuitionText: "Tuition for bachelor's and master's degree programs typically ranges from €450 to €650 per month (€5,400 to €7,800 annually). FHM Deutschlandstipendium grants, regional chamber of commerce bursaries, and corporate tuition partnerships are accessible.",
    admissions: {
      masters: "Accredited Bachelor's degree (180 ECTS) in economics, tourism, healthcare, or social sciences from a recognized university.",
      phd: "Applied university of applied sciences; cooperative doctoral degrees offered in partnership with University of Rostock and international partner universities.",
      language: "German proficiency (TestDaF 4 or DSH-2) for German tracks; IELTS 6.0/6.5 for English-taught international master's programs.",
      proposal: "Motivation letter detailing commitment to SME business management or health tourism.",
      appFee: "€150 registration and internal aptitude screening fee.",
      documents: "University entrance qualification (Abitur or international secondary certificate), bachelor's diploma, CV, and letters of recommendation."
    },
    opportunities: [
      {
        id: 3357,
        title: "FHM Deutschlandstipendium Academic Excellence Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€300 monthly national scholarship grant (€3,600 annually)",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Subsidizes monthly tuition at FHM Schwerin campus",
        source: "https://www.fh-mittelstand.de/schwerin/finanzierung",
        desc: "Co-funded by the German Federal Government and commercial enterprises for high-achieving German and international students enrolled at FHM Baltic College.",
        requirements: {
          gpa: "Top 15% academic standing in prior secondary or bachelor's studies",
          ielts: "German B2/C1 or IELTS 6.5",
          gre: "Not required",
          papers: "500-word personal essay on social engagement and career objectives",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3358,
        title: "Master of Arts in International Health & Medical Tourism Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Baltic resort and spa industry traineeships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€150 screening fee",
        tuition: "€6,200 per academic year",
        source: "https://www.fh-mittelstand.de/gesundheitstourismus/",
        desc: "Pioneering master's addressing spa management, medical travel logistics, rehabilitation economics, and wellness destination marketing across the Baltic coast.",
        requirements: {
          gpa: "Bachelor's degree in tourism, business, healthcare, or sports science",
          ielts: "English B2/C1 or German B2",
          gre: "Not required",
          papers: "Essay on quality assurance in cross-border medical tourism",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3359,
        title: "Bachelor of Arts in Mittelstand Management & SME Leadership",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Corporate partner dual-study wage stipends (€800-€1,200 monthly)",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€150 application fee",
        tuition: "€5,800 per academic year (often covered by partner firm)",
        source: "https://www.fh-mittelstand.de/schwerin/",
        desc: "Dual-study bachelor's program alternating university seminar blocks with corporate leadership practice in German family businesses and manufacturing SMEs.",
        requirements: {
          gpa: "General higher education entrance qualification (Abitur or Fachabitur)",
          ielts: "German language proficiency (TestDaF 4)",
          gre: "Not required",
          papers: "Motivation statement and internship contract",
          references: "Employer reference"
        }
      },
      {
        id: 3360,
        title: "Cooperative Doctoral Research Fellowship in Baltic Regional Economics",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€18,000 annual research grant and university office space",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Fully funded cooperative doctoral appointment",
        source: "https://www.fh-mittelstand.de/forschung/",
        desc: "Doctoral research conducted with partner research universities investigating maritime logistics, wind park supply chains, and coastal demographic shifts.",
        requirements: {
          gpa: "Master's degree (MSc or MA) with a grade of 2.0 or better in German grading scale",
          ielts: "German or English fluency",
          gre: "Not required",
          papers: "Doctoral dissertation prospectus (10-15 pages)",
          references: "Two academic professor endorsements"
        }
      },
      {
        id: 3361,
        title: "Bachelor of Science in Digital Business Informatics & E-Commerce",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Regional software house co-op stipends",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€150 application fee",
        tuition: "€6,000 per academic year",
        source: "https://www.fh-mittelstand.de/wirtschaftsinformatik/",
        desc: "Three-year applied curriculum combining enterprise software (SAP), database administration, web development, cloud computing, and ERP systems.",
        requirements: {
          gpa: "University entrance qualification with mathematics foundation",
          ielts: "German B2",
          gre: "Not required",
          papers: "Statement of interest in business informatics",
          references: "One referee letter"
        }
      },
      {
        id: 3362,
        title: "Baltic Offshore Wind Energy & Logistics Summer School",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Mecklenburg clean energy travel vouchers",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€50 registration fee",
        tuition: "€950 two-week seminar fee",
        source: "https://www.fh-mittelstand.de/schwerin/",
        desc: "Intensive summer program inspecting Rostock port facilities, offshore wind turbine maintenance logistics, and environmental impact assessments.",
        requirements: {
          gpa: "Enrolled student in engineering, environmental science, or business",
          ielts: "English working proficiency",
          gre: "Not required",
          papers: "Curriculum vitae",
          references: "None"
        }
      },
      {
        id: 3363,
        title: "Sustainable Coastal Tourism Innovation Grant",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "€2,500 project grant",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free application",
        tuition: "Credited against semester fees",
        source: "https://www.fh-mittelstand.de/gesundheitstourismus/",
        desc: "Awarded to student teams developing eco-certified resort concepts, bicycle tourism corridors, and circular waste minimization across the Baltic sea.",
        requirements: {
          gpa: "Good academic standing in FHM tourism or environmental programs",
          ielts: "Standard admission",
          gre: "Not required",
          papers: "Sustainable project concept pitch deck (5 pages)",
          references: "Faculty advisor signature"
        }
      }
    ],
    researchers: [
      {
        id: 1458,
        name: "Prof. Dr. Anne Dreier",
        title: "Rector of FHM & Professor of SME Management",
        subject: "social-sciences",
        topics: ["Mittelstand Leadership", "SME Innovation", "University-Business Cooperation", "Vocational Training Systems"],
        source: "https://www.fh-mittelstand.de/ueber-uns/hochschulleitung/",
        summary: "Prof. Dreier is Rector of FHM, publishing widely on the competitiveness of German Mittelstand enterprises, dual education, and entrepreneurship."
      },
      {
        id: 1459,
        name: "Prof. Dr. Michael Bock",
        title: "Scientific Director (FHM Schwerin) & Health Tourism Specialist",
        subject: "social-sciences",
        topics: ["Health Tourism", "Thermal Spa Economics", "Destination Branding", "Cross-Border Healthcare"],
        source: "https://www.fh-mittelstand.de/schwerin/ansprechpartner/",
        summary: "Prof. Bock directs research at the Schwerin campus, focusing on medical wellness, rehabilitation clinic management, and Baltic health resort revitalization."
      },
      {
        id: 1460,
        name: "Prof. Dr. Volker Wittberg",
        title: "Vice-Rector for Research and Development",
        subject: "social-sciences",
        topics: ["Sustainable Finance", "SME Decarbonization", "Corporate Governance", "Regional Economics"],
        source: "https://www.fh-mittelstand.de/forschung/",
        summary: "Prof. Wittberg leads research in sustainable corporate governance, examining decarbonization roadmaps and ESG reporting compliance for family-owned firms."
      }
    ]
  },

  // 9. Germany: Bavarian Virtual University (vhb)
  {
    institution: "Bavarian Virtual University (vhb)",
    shortName: "Bavarian Virtual University",
    slug: "bavarian-virtual-university-vhb",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Bamberg & Nuremberg, Bavaria, Germany",
    website: "https://www.vhb.org",
    sourceRow: 222,
    headline: "Bavarian Virtual University (vhb): Digital Higher Ed, AI & Bavarian Universities Hub",
    overview: "Virtuelle Hochschule Bayern (vhb) is a joint institutional network established by all 34 state and state-recognized universities and universities of applied sciences across Bavaria, offering over 600 accredited online university course modules, digital twin laboratories, and open education credentials.",
    description: "Explore accredited online university courses, Bavarian university consortium credits, AI certifications, and tuition waivers at Bavarian Virtual University (vhb).",
    heroEyebrow: "Bavarian State Universities Consortium · Digital Higher Education Network",
    tuitionText: "Courses are completely tuition-free (0 EUR) for students matriculated at any of the 34 member universities across Bavaria. For external international individual learners, modular enrollment fees range from €40 to €150 per course. Bavarian State Ministry for Science and Arts digital education subsidies apply.",
    admissions: {
      masters: "Enrolled student at any Bavarian university or university of applied sciences (TUM, LMU, FAU Erlangen, Würzburg, etc.) or accredited international academic transcript.",
      phd: "Doctoral students utilize vhb advanced methodology and research ethics modules; doctoral credentials awarded by host university.",
      language: "German (B2/C1) or English (B2/C1) depending on course language track.",
      proposal: "Online enrollment with verification of university matriculation (Matrikelnummer).",
      appFee: "Free online registration for matriculated university students.",
      documents: "Proof of university enrollment (Immatrikulationsbescheinigung), identity document, and course selection declaration."
    },
    opportunities: [
      {
        id: 3364,
        title: "vhb Digital Innovation in Teaching Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€15,000 project development grant for academic instructors",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full course development funding",
        source: "https://www.vhb.org/lehrende/foerderung/",
        desc: "Supports university professors and digital instructional designers developing innovative interactive e-learning modules across Bavarian higher education.",
        requirements: {
          gpa: "Faculty appointment at a Bavarian state or state-recognized university",
          ielts: "German or English proficiency",
          gre: "Not required",
          papers: "Didactic course concept, learning outcomes syllabus, and multimedia budget plan",
          references: "Dean of faculty endorsement"
        }
      },
      {
        id: 3365,
        title: "Bavarian Consortium Certificate in Artificial Intelligence & Machine Learning",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Fully state-subsidized for all enrolled students",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free for matriculated students",
        tuition: "0 EUR for Bavarian university students (€100 for external guests)",
        source: "https://www.vhb.org/studierende/kursprogramm/informatik/",
        desc: "Consortium-wide modular certificate covering neural networks, reinforcement learning, computer vision, ethics of algorithmic bias, and Python for data science.",
        requirements: {
          gpa: "Foundational university mathematics (linear algebra and calculus)",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Matriculation certificate",
          references: "None"
        }
      },
      {
        id: 3366,
        title: "Online Modular Track in Biomedical Informatics & Medical Diagnostics",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        funding: "Bavarian digital healthcare education funding",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Free for member university students",
        source: "https://www.vhb.org/studierende/kursprogramm/medizin-gesundheitswissenschaften/",
        desc: "Co-developed by medical faculties of LMU Munich, FAU Erlangen, and Regensburg, examining clinical decision support, genomic data pipelines, and EHR standards.",
        requirements: {
          gpa: "Current student in medicine, bioinformatics, or health sciences",
          ielts: "German or English",
          gre: "Not required",
          papers: "Proof of enrollment",
          references: "None"
        }
      },
      {
        id: 3367,
        title: "Applied Environmental Economics & Renewable Energy Systems Course",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "Bavarian climate transition digital learning grant",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free for students",
        tuition: "0 EUR tuition fee",
        source: "https://www.vhb.org/studierende/kursprogramm/wirtschaftswissenschaften/",
        desc: "Focuses on carbon pricing mechanisms, smart grid electricity economics, life-cycle emissions modeling, and European Green Deal regulatory policies.",
        requirements: {
          gpa: "Undergraduate student in economics, engineering, or environmental sciences",
          ielts: "English B2",
          gre: "Not required",
          papers: "Matriculation proof",
          references: "None"
        }
      },
      {
        id: 3368,
        title: "Open vhb Micro-Credential in Intercultural Competence & German Culture",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Open educational resource (OER) open to global learners",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free registration",
        tuition: "100% free open educational certificate",
        source: "https://open.vhb.org",
        desc: "Self-paced open micro-credential exploring German communication norms, academic working culture, history of Bavaria, and European corporate etiquette.",
        requirements: {
          gpa: "Open to anyone worldwide with internet access",
          ielts: "English or German",
          gre: "Not required",
          papers: "Online user registration",
          references: "None required"
        }
      },
      {
        id: 3369,
        title: "Applied Quantum Computing Foundations Virtual Lab",
        type: "Course",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "Munich Quantum Valley educational partnership",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free for students",
        tuition: "0 EUR tuition for Bavarian university students",
        source: "https://www.vhb.org/studierende/kursprogramm/ingenieurwissenschaften/",
        desc: "Hands-on quantum computing course introducing qubits, superposition, quantum teleportation circuits, Shor's algorithm, and IBM Qiskit programming.",
        requirements: {
          gpa: "Good knowledge of linear algebra and basic Python coding",
          ielts: "English B2",
          gre: "Not required",
          papers: "Student enrollment certificate",
          references: "None"
        }
      },
      {
        id: 3370,
        title: "vhb Student Academic Achievement Prize in Digital Learning",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€1,000 cash prize and certificate of distinction",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "Free entry",
        tuition: "Direct student award",
        source: "https://www.vhb.org/studierende/auszeichnungen/",
        desc: "Annual award honoring students who complete outstanding coursework projects and demonstrate excellence across multi-university vhb courses.",
        requirements: {
          gpa: "Completion of at least 3 vhb courses with top grades (1.0 or 1.3)",
          ielts: "Standard university admission",
          gre: "Not required",
          papers: "Nomination essay detailing academic impact of digital learning",
          references: "Course instructor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1461,
        name: "Prof. Dr. Dr. habil. Godehard Ruppert",
        title: "President of Virtuelle Hochschule Bayern (vhb)",
        subject: "social-sciences",
        topics: ["Higher Education Governance", "Digital Learning Infrastructure", "Inter-University Consortia", "Ancient Semitic Philology"],
        source: "https://www.vhb.org/ueber-uns/organisation/praesidium/",
        summary: "Prof. Ruppert is President of vhb and former President of the University of Bamberg, leading strategic inter-university digitization across Bavaria."
      },
      {
        id: 1462,
        name: "Prof. Dr. Carsten Rennhak",
        title: "Vice-President of vhb & Professor of PR and Marketing",
        subject: "social-sciences",
        topics: ["Digital Educational Marketing", "E-Learning Pedagogy", "Consumer Analytics", "Strategic Media"],
        source: "https://www.vhb.org/ueber-uns/organisation/praesidium/",
        summary: "Prof. Rennhak serves on the vhb presidium, investigating digital pedagogical adoption, micro-learning efficacy, and student retention in online education."
      },
      {
        id: 1463,
        name: "Dr. Paul Dölle",
        title: "Managing Director of vhb & Digital Teaching Innovation Specialist",
        subject: "social-sciences",
        topics: ["Digital Didactics", "Open Educational Resources", "Learning Analytics", "Instructional Systems Design"],
        source: "https://www.vhb.org/ueber-uns/organisation/geschaeftsstelle/",
        summary: "Dr. Dölle coordinates vhb administrative and technical operations, publishing on learning design, automated feedback mechanisms, and academic OER implementation."
      }
    ]
  },

  // 10. Germany: Berlin School of Economics and Law (HWR Berlin)
  {
    institution: "Berlin School of Economics and Law (HWR Berlin)",
    shortName: "HWR Berlin",
    slug: "berlin-school-of-economics-and-law-hwr",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://www.hwr-berlin.de",
    sourceRow: 225,
    headline: "HWR Berlin: International Business, Public Administration & Legal Studies Guide",
    overview: "Hochschule für Wirtschaft und Recht Berlin (HWR Berlin) is one of Germany's largest public universities of applied sciences, situated across Schöneberg and Lichtenberg campuses, celebrated for dual-study business degrees, public administration, international finance, business law, and security management.",
    description: "Explore bachelor's and master's degrees, international business MBAs, Deutschlandstipendium grants, and admissions at HWR Berlin in Germany.",
    heroEyebrow: "Berlin Public Business & Law University · Dual Study & International Management",
    tuitionText: "Public undergraduate and consecutive master's degrees charge zero tuition (0 EUR); students pay a statutory semester fee of approximately €315 including the Berlin public transit semester ticket. Continuing executive master's (MBA) tuition ranges from €12,500 to €19,800. Deutschlandstipendium and DAAD scholarships are available.",
    admissions: {
      masters: "Accredited Bachelor's degree (minimum 180 ECTS) in business, economics, law, or social sciences with an above-average grade point average.",
      phd: "Doctoral research conducted via joint doctoral centers (Promotionszentren) and collaborative partnerships with Berlin universities.",
      language: "German (C1 / TestDaF 4) for German tracks; IELTS Academic 6.5 or TOEFL iBT 88 for English-taught Master of International Business programs.",
      proposal: "Statement of motivation explaining academic background and career goals in commercial or public sectors.",
      appFee: "€75 application processing fee via uni-assist for international applicants.",
      documents: "Bachelor's diploma, official transcripts, APS certificate (if applicable), language test results, resume/CV, and passport copy."
    },
    opportunities: [
      {
        id: 3371,
        title: "HWR Berlin Deutschlandstipendium National Merit Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€300 monthly national scholarship grant (€3,600 per year)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full living stipend for enrolled students",
        source: "https://www.hwr-berlin.de/studium/finanzierung-und-foerderung/deutschlandstipendium/",
        desc: "Merit scholarship co-funded by the German Federal Government and Berlin enterprise sponsors awarded to high-performing German and international students.",
        requirements: {
          gpa: "Top academic standing in previous degree or high school Abitur (equivalent to German 1.8 or better)",
          ielts: "Meets course language condition",
          gre: "Not required",
          papers: "500-word personal statement detailing societal engagement and leadership",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3372,
        title: "Master of Science in International Business Management (MIBM)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "DAAD international student performance grants",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€75 uni-assist fee",
        tuition: "0 EUR tuition (statutory semester administrative fee ~€315)",
        source: "https://www.hwr-berlin.de/studium/studiengaenge/detail/71-international-business-management/",
        desc: "Two-year English-taught public master's focusing on global strategic management, international financial economics, cross-border marketing, and supply networks.",
        requirements: {
          gpa: "Bachelor's degree in business or economics with at least 15 ECTS in quantitative methods",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL 88",
          gre: "Not required",
          papers: "Letter of motivation and CV",
          references: "One academic reference"
        }
      },
      {
        id: 3373,
        title: "Berlin MBA in European Management & Entrepreneurship",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Berlin Professional School leadership tuition discounts",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "€100 application fee",
        tuition: "€19,800 full program tuition",
        source: "https://www.berlin-professional-school.de/en/master/mba/the-berlin-mba/",
        desc: "AMBA-accredited executive MBA offering specialized pathways in European management, new ventures, and sustainability consulting in Berlin.",
        requirements: {
          gpa: "Bachelor's degree plus minimum 3 years of postgraduate professional work experience",
          ielts: "TOEFL iBT 90 or IELTS 6.5",
          gre: "GMAT or HWR admissions interview",
          papers: "Professional essay detailing managerial leadership impact",
          references: "Two professional reference letters"
        }
      },
      {
        id: 3374,
        title: "Master of Arts in International Finance and Accounting (IFA)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Leading German auditing firm sponsorships",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€75 uni-assist fee",
        tuition: "0 EUR tuition fee",
        source: "https://www.hwr-berlin.de/studium/studiengaenge/detail/58-international-finance/",
        desc: "Covers IFRS corporate financial reporting, mergers & acquisitions valuation, quantitative risk analytics, and fintech regulation.",
        requirements: {
          gpa: "Undergraduate degree in finance, economics, or accounting with 210 ECTS (or 180 ECTS with bridge)",
          ielts: "English B2/C1 and basic German",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "One academic referee"
        }
      },
      {
        id: 3375,
        title: "PhD Research Fellowship in Public Management & Governance",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "TV-L E13 research associate salary: €48,000 annually",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; salaried university research position",
        source: "https://www.hwr-berlin.de/forschung/",
        desc: "Doctoral research examining digital government transformation, e-administration architectures, civic participation algorithms, and public finance reform.",
        requirements: {
          gpa: "Master's degree in public administration, political science, economics, or law with distinction",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Doctoral research prospectus (10 pages) and Master's thesis copy",
          references: "Two academic faculty recommendations"
        }
      },
      {
        id: 3376,
        title: "Bachelor of Arts in International Business & Dual Co-Op",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Salaried dual-partner contract: €950-€1,400 monthly",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "0 EUR tuition; paid corporate training",
        source: "https://www.hwr-berlin.de/studium/studiengaenge/detail/47-international-business-management/",
        desc: "Integrates rigorous university modules with corporate rotations at multinational corporations in Berlin (Siemens, BMW, Deutsche Bahn, Bayer).",
        requirements: {
          gpa: "Abitur or recognized international school-leaving credential",
          ielts: "English C1 and German B2",
          gre: "Not required",
          papers: "Cooperative employment contract with HWR partner firm",
          references: "Corporate mentor approval"
        }
      },
      {
        id: 3377,
        title: "Berlin Summer School in European Law and Global Economic Governance",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "DAAD summer seminar travel grants available",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€50 application fee",
        tuition: "€1,250 two-week program fee",
        source: "https://www.hwr-berlin.de/studium/internationales/summer-schools/",
        desc: "Two-week academic program analyzing EU internal market law, European competition policy, transatlantic trade, and corporate human rights due diligence.",
        requirements: {
          gpa: "Current student or graduate in law, business, or political science",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Resume and brief letter of motivation",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 1464,
        name: "Prof. Dr. Carsten Baumgarth",
        title: "Professor of Marketing & Brand Management Lead",
        subject: "social-sciences",
        topics: ["B2B Brand Management", "Artificial Intelligence in Marketing", "Cultural Branding", "Sensory Branding"],
        source: "https://www.hwr-berlin.de/prof/carsten-baumgarth/",
        summary: "Prof. Baumgarth is an acclaimed German brand expert, leading the Brand Living Lab and publishing on AI-driven branding and B2B reputation."
      },
      {
        id: 1465,
        name: "Prof. Dr. Andreas Zaby",
        title: "Professor of International Management & Former President of HWR Berlin",
        subject: "social-sciences",
        topics: ["Internationalization Strategy", "Higher Education Leadership", "Foreign Direct Investment", "Global Strategy"],
        source: "https://www.hwr-berlin.de/prof/andreas-zaby/",
        summary: "Prof. Zaby directed HWR Berlin for multiple terms, researching foreign market entry modes and the strategic positioning of German enterprises in Asia."
      },
      {
        id: 1466,
        name: "Prof. Dr. Birgitta Wolff",
        title: "President of HWR Berlin & Professor of Economics",
        subject: "social-sciences",
        topics: ["Institutional Economics", "Human Resource Governance", "Higher Education Policy", "Labor Economics"],
        source: "https://www.hwr-berlin.de/hwr-berlin/organisation/hochschulleitung/praesidentin/",
        summary: "Prof. Wolff is President of HWR Berlin, former Minister of Science of Saxony-Anhalt, and leading scholar in personnel economics and institutional governance."
      }
    ]
  }
];
