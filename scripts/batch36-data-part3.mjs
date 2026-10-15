/**
 * Batch 36 Data - Part 3: Universities 21-30
 * - Japan: Kanagawa University (Yokohama Campus), Kanto Gakuin University, Kobe Design University
 * - Sweden: HDK-Valand (University of Gothenburg), LINXS (Lund University), Myfab National Infrastructure
 * - Netherlands: European Supply Chain Forum (TU/e), Foundation Academy of Amsterdam, Hogeschool de Kempel, Saxion University of Applied Sciences (Deventer)
 * 
 * Opportunity IDs: 3658 - 3727 (70 records)
 * Researcher IDs: 1587 - 1616 (30 records)
 */

export const batch36Part3Universities = [
  // 21. Japan - Kanagawa University (Yokohama Campus) (Row 1664)
  {
    institution: "Kanagawa University (Yokohama Campus)",
    shortName: "Kanagawa University",
    slug: "kanagawa-university-yokohama-campus",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Yokohama, Kanagawa Prefecture, Japan",
    website: "https://www.kanagawa-u.ac.jp/english/",
    sourceRow: 1664,
    heroEyebrow: "Yokohama, Kanagawa · Est. 1928 · MEXT Accredited · International Studies & Engineering",
    headline: "Kanagawa University: Engineering, Global Business & MEXT Scholarships Guide",
    overview: "Founded in 1928, Kanagawa University (Jindai) is a major comprehensive private university situated on its verdant main campus in Rokkakubashi, Yokohama, alongside the innovative Minato Mirai campus in central Yokohama's port district. Educating over 18,000 students across 10 faculties and 8 graduate schools, Kanagawa University is celebrated for its Institute of Nonwritten Cultural Materials, advanced engineering laboratories, international business curricula, and generous Japanese government (MEXT) scholarship pathways.",
    description: "Explore Kanagawa University in Yokohama, Japan: Graduate engineering programs, MEXT scholarships, international tuition fee exemptions, admissions procedures, and research faculty.",
    admissions: {
      masters: "Completion of a 16-year school education curriculum with an accredited Bachelor's degree (or equivalent recognized by the Japanese Ministry of Education, MEXT); preliminary research plan and supervisor endorsement required.",
      phd: "Recognized Master's degree or professional degree; submission of master's thesis, comprehensive doctoral research proposal, and passing of the graduate school entrance examination/interview.",
      language: "JLPT N2 or N1 for Japanese-medium graduate degree programs; TOEFL iBT 80+ or IELTS Academic 6.0+ for English-track graduate courses and research degrees.",
      proposal: "Required for graduate applicants: 2,000-character (Japanese) or 1,000-word (English) research proposal detailing research objectives, methodology, and literature review.",
      appFee: "¥35,000 JPY application screening fee (¥10,000 JPY for non-degree research student status).",
      documents: "Graduation certificate, official academic transcripts, research proposal, statement of purpose, two letters of recommendation, JLPT or English proficiency test report, and passport copy."
    },
    tuitionText: "Tuition for graduate programs averages ¥750,000 to ¥1,150,000 JPY per academic year (with an admission matriculation fee of ¥200,000 JPY in the first year). Kanagawa University offers an outstanding Tuition Reduction Scholarship granting a 30% to 50% tuition waiver to privately financed international students who maintain satisfactory academic standing.",
    opportunities: [
      {
        id: 3658,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Kanagawa University International Student Tuition Reduction Award",
        source: "https://www.kanagawa-u.ac.jp/english/admissions/scholarships/",
        funding: "30% to 50% reduction of annual tuition fees",
        status: "Available",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027 (Spring enrollment round)",
        fee: "¥35,000 JPY",
        tuition: "¥850,000 JPY per year (before tuition reduction)",
        requirements: {
          gpa: "Good academic standing in secondary or undergraduate degree (GPA 2.8/4.0+)",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "Study plan and financial declaration form",
          references: "One academic reference letter"
        },
        desc: "Institutional financial grant providing substantial tuition fee relief for degree-seeking international undergraduate and graduate students holding a Japanese college student visa."
      },
      {
        id: 3659,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "Master of Engineering in Mechanical and Electrical Materials Science",
        source: "https://www.kanagawa-u.ac.jp/english/graduate/engineering/",
        funding: "Graduate research assistantship stipends (¥40,000-¥60,000 JPY/month)",
        status: "Available",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥1,050,000 JPY per academic year",
        requirements: {
          gpa: "Bachelor of Science or Engineering with solid mathematics and physics fundamentals",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "1,500-word engineering research project plan",
          references: "Two academic referee letters"
        },
        desc: "Two-year research-intensive master's degree exploring semiconductor nanostructures, advanced composites for electric vehicles, and precision robotics on the Yokohama campus."
      },
      {
        id: 3660,
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "PhD",
        title: "Doctoral Program in Applied Chemistry and Materials Science (PhD)",
        source: "https://www.kanagawa-u.ac.jp/english/graduate/engineering/",
        funding: "MEXT University-Recommended Doctoral Fellowship (Full tuition + ¥145,000 JPY/month)",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Fall intake nomination)",
        fee: "¥35,000 JPY",
        tuition: "Covered by MEXT fellowship",
        requirements: {
          gpa: "Master's degree in chemistry, chemical engineering, or materials science with high honors",
          ielts: "6.5 overall or JLPT N1",
          gre: "Not required",
          papers: "Comprehensive doctoral dissertation outline and publication list",
          references: "Two professor recommendation letters"
        },
        desc: "Three-year research doctorate investigating novel polymer electrolyte membranes, solid-state battery chemistry, and photocatalytic water splitting under solar radiation."
      },
      {
        id: 3661,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Arts in International Business and Economics (Minato Mirai)",
        source: "https://www.kanagawa-u.ac.jp/english/graduate/economics/",
        funding: "Internship partnerships with multinational trading corporations in Yokohama Port",
        status: "Available",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥820,000 JPY per year",
        requirements: {
          gpa: "Bachelor's degree in business, economics, or international studies",
          ielts: "6.5 overall or JLPT N1",
          gre: "Not required",
          papers: "Research proposal on East Asian economic integration",
          references: "Two academic references"
        },
        desc: "Two-year postgraduate program based at the state-of-the-art Minato Mirai campus, examining supply chain restructuring, maritime logistics, and Japanese corporate management."
      },
      {
        id: 3662,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Fellowship",
        title: "Institute for the Study of Japanese Folk Culture Visiting Fellowship",
        source: "https://www.kanagawa-u.ac.jp/english/research/institutes/",
        funding: "¥250,000 JPY/month research stipend + campus library residence",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling call for international Japanology scholars",
        fee: "¥0 JPY",
        tuition: "Sponsored visiting scholarship",
        requirements: {
          gpa: "PhD in East Asian Studies, Folklore, Cultural Anthropology, or Material Culture",
          ielts: "Advanced Japanese language reading proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and monograph publication proposal",
          references: "Two academic peer recommendations"
        },
        desc: "Distinguished research residency utilizing Kanagawa University's rare archives of non-written cultural materials, historical fishing and farming tools, and visual ethnography."
      },
      {
        id: 3663,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Intensive Japanese Language and Cultural Immersion Program (IJLC)",
        source: "https://www.kanagawa-u.ac.jp/english/admissions/exchange_program/",
        funding: "JASSO Short-term Student Exchange Study Support Grant eligible",
        status: "Available",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Spring semester cohort)",
        fee: "¥10,000 JPY",
        tuition: "¥360,000 JPY semester tuition",
        requirements: {
          gpa: "Enrolled in recognized overseas partner university with minimum 2.5 GPA",
          ielts: "JLPT N5 or above recommended",
          gre: "Not required",
          papers: "Personal motivation essay",
          references: "Home university study abroad advisor nomination"
        },
        desc: "One-semester intensive program in Yokohama offering comprehensive Japanese language drills from beginner to advanced alongside cultural heritage field excursions."
      },
      {
        id: 3664,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        title: "Keihin Industrial Belt Smart Manufacturing and Robotics Internship",
        source: "https://www.kanagawa-u.ac.jp/english/careers/",
        funding: "Paid technical practicum with Japanese industrial engineering firms (¥1,200/hr JPY)",
        status: "Available",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "¥0 JPY",
        tuition: "Integrated career internship",
        requirements: {
          gpa: "Kanagawa University engineering student in good academic standing",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Technical resume and Japanese interview",
          references: "Laboratory professor recommendation"
        },
        desc: "Ten-week technical internship placed within robotics, automotive, and electronics manufacturers across the Greater Tokyo-Yokohama industrial region."
      }
    ],
    researchers: [
      {
        id: 1587,
        subject: "engineering",
        name: "Prof. Dr. Hiroaki Usui",
        title: "Professor of Materials Science and Chemical Engineering",
        university: "Kanagawa University (Yokohama Campus)",
        country: "Japan",
        topics: ["Organic Thin Films", "Vapor Deposition Polymerization", "Molecular Electronics", "Functional Polymeric Materials"],
        source: "https://www.kanagawa-u.ac.jp/english/research/",
        summary: "Eminent materials chemist recognized for pioneering vapor deposition polymerization techniques for ultra-thin functional organic coatings and flexible electronics."
      },
      {
        id: 1588,
        subject: "social-sciences",
        name: "Prof. Dr. Shinzo Arisaka",
        title: "Professor of International Economics and Regional Trade Agreements",
        university: "Kanagawa University (Yokohama Campus)",
        country: "Japan",
        topics: ["Asia-Pacific Trade Governance", "Foreign Direct Investment in ASEAN", "Supply Chain Optimization", "Tariff Economics"],
        source: "https://www.kanagawa-u.ac.jp/english/research/",
        summary: "Trade economist examining regional comprehensive economic partnerships (RCEP), CPTPP regulatory convergence, and Japanese multinational manufacturing networks."
      },
      {
        id: 1589,
        subject: "social-sciences",
        name: "Prof. Dr. Michihiro Osumi",
        title: "Director of the Institute of Nonwritten Cultural Materials",
        university: "Kanagawa University (Yokohama Campus)",
        country: "Japan",
        topics: ["Visual Ethnography", "Material Culture of Fishing Communities", "Japanese Folklore Archiving", "Oral History Collections"],
        source: "https://www.kanagawa-u.ac.jp/english/research/institutes/",
        summary: "Cultural anthropologist directing national research archives dedicated to the systematic preservation and digital curation of non-written folklore and traditional crafts."
      }
    ]
  },

  // 22. Japan - Kanto Gakuin University (Row 1665)
  {
    institution: "Kanto Gakuin University",
    shortName: "Kanto Gakuin",
    slug: "kanto-gakuin-university-yokohama",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Yokohama, Kanagawa Prefecture, Japan",
    website: "https://univ.kanto-gakuin.ac.jp/en/",
    sourceRow: 1665,
    heroEyebrow: "Yokohama, Kanagawa · Est. 1884 · Christian Humanism · Architecture, Engineering & Economics",
    headline: "Kanto Gakuin University: Architectural Design, Surface Engineering & Business Guide",
    overview: "Established in 1884 upon Christian humanist foundations, Kanto Gakuin University is an established comprehensive private university based in Yokohama, Kanagawa Prefecture. Operating across its historic Kanazawa-Hakkei campus, Kanazawa-Bunko, and the ultra-modern Yokohama Kannai campus, Kanto Gakuin educates over 11,000 students. The university is celebrated internationally for its groundbreaking Materials and Surface Engineering Research Institute—a global leader in metal surface modification—as well as acclaimed programs in architecture, structural earthquake engineering, and international economics.",
    description: "Explore Kanto Gakuin University in Yokohama: Surface engineering research, Master of Architecture, international scholarships, Japanese government support, and leading faculty.",
    admissions: {
      masters: "Accredited 16-year Bachelor's degree in engineering, architecture, economics, or relevant field; approved preliminary study proposal and faculty advisor consent.",
      phd: "Recognized Master's degree; submission of Master's thesis, comprehensive doctoral research project outline, and defense during the graduate admissions examination.",
      language: "JLPT N2 or N1 for Japanese-language graduate seminars; TOEFL iBT 79+ or IELTS Academic 6.0+ for designated English-language scientific research tracks.",
      proposal: "Required for graduate degree entry: 1,500-word research proposal outlining scientific hypothesis, experimental methodology, and faculty laboratory alignment.",
      appFee: "¥35,000 JPY application examination fee.",
      documents: "Bachelor's certificate of graduation, complete academic transcripts, research proposal, two letters of recommendation, certificate of Japanese or English language ability, and passport copy."
    },
    tuitionText: "Tuition for graduate science and engineering programs averages ¥950,000 to ¥1,250,000 JPY per academic year (humanities and economics degrees average ¥780,000 JPY/year). Kanto Gakuin provides an automatic 30% tuition fee reduction for eligible privately funded international students, alongside merit-based university scholarships.",
    opportunities: [
      {
        id: 3665,
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Scholarship",
        title: "Kanto Gakuin University International Special Tuition Reduction Scholarship",
        source: "https://univ.kanto-gakuin.ac.jp/en/admissions/scholarships/",
        funding: "30% to 50% tuition reduction for entire duration of standard degree",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥980,000 JPY per year (before tuition reduction)",
        requirements: {
          gpa: "Undergraduate GPA 2.8/4.0 or above with exemplary entrance exam performance",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "Study plan essay",
          references: "One academic reference"
        },
        desc: "Merit-based tuition waiver awarded to prospective international students admitted to undergraduate and graduate programs at Kanto Gakuin University."
      },
      {
        id: 3666,
        subject: "engineering",
        subjects: ["engineering", "chemistry", "physics"],
        type: "PhD",
        title: "Doctoral Research Fellowship in Materials and Surface Engineering",
        source: "https://univ.kanto-gakuin.ac.jp/en/research/",
        funding: "Full tuition waiver + ¥120,000 JPY/month research laboratory stipend",
        status: "Available",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥35,000 JPY",
        tuition: "Covered by research fellowship",
        requirements: {
          gpa: "Master of Engineering or Science in Materials, Metallurgy, or Physical Chemistry",
          ielts: "6.5 overall or JLPT N2",
          gre: "Not required",
          papers: "Detailed 3,000-word doctoral research plan",
          references: "Two academic referee letters"
        },
        desc: "Cutting-edge doctoral research at Kanto Gakuin's world-leading Materials and Surface Engineering Research Institute, investigating atomic layer electrodeposition and anti-corrosive nanocoatings."
      },
      {
        id: 3667,
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        type: "Master's",
        title: "Master of Engineering in Architectural Design and Seismic Engineering",
        source: "https://univ.kanto-gakuin.ac.jp/en/graduate/architecture/",
        funding: "Access to large-scale structural shake table testing facility",
        status: "Available",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥1,120,000 JPY per year",
        requirements: {
          gpa: "Bachelor's degree in Architecture or Civil/Structural Engineering",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "Design portfolio (maximum 20 pages) or structural research paper",
          references: "Two academic recommendations"
        },
        desc: "Two-year master's program providing advanced training in base-isolation building physics, mass-timber architecture, and earthquake-resilient urban infrastructure design."
      },
      {
        id: 3668,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Economics in Regional Regeneration and Asian Economic Studies",
        source: "https://univ.kanto-gakuin.ac.jp/en/graduate/economics/",
        funding: "Yokohama Kannai campus corporate research consortium links",
        status: "Available",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥790,000 JPY per year",
        requirements: {
          gpa: "Bachelor's degree in economics, business, or public administration",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "Research proposal on regional industrial revival",
          references: "One academic reference"
        },
        desc: "Two-year graduate program situated at the urban Yokohama Kannai campus, investigating municipal economic renewal, tourism analytics, and SME innovation in Japan."
      },
      {
        id: 3669,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Bachelor's",
        title: "Bachelor of Science and Engineering in Information Science & Robotics",
        source: "https://univ.kanto-gakuin.ac.jp/en/undergraduate/engineering/",
        funding: "Robotics laboratory hardware kits and fabrication workshop access",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥35,000 JPY",
        tuition: "¥1,380,000 JPY per academic year",
        requirements: {
          gpa: "12-year primary/secondary school completion with strong calculus fundamentals",
          ielts: "6.0 overall or JLPT N2",
          gre: "Not required",
          papers: "Not required",
          references: "High school principal recommendation"
        },
        desc: "Four-year undergraduate degree exploring embedded microcontrollers, human-robot interaction systems, autonomous navigation algorithms, and computer vision."
      },
      {
        id: 3670,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Course",
        title: "Yokohama Kannai Urban Co-Creation and Community Design Studio",
        source: "https://univ.kanto-gakuin.ac.jp/en/campus-life/kannai-campus/",
        funding: "Community revitalization grants from City of Yokohama",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥0 JPY",
        tuition: "Curricular community design module",
        requirements: {
          gpa: "Enrolled student in architecture, design, or economics",
          ielts: "Japanese B2",
          gre: "Not required",
          papers: "Urban problem-solving proposal",
          references: "Not required"
        },
        desc: "Intensive 8-week collaborative studio embedding students with local municipal planners, neighborhood merchants, and architects to revitalize historic Yokohama urban corridors."
      },
      {
        id: 3671,
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Fellowship",
        title: "Materials and Surface Engineering International Postdoctoral Fellowship",
        source: "https://univ.kanto-gakuin.ac.jp/en/research/",
        funding: "¥300,000 JPY/month research fellowship stipend",
        status: "Available",
        deadline: null,
        deadlineText: "Continuous intake for funded NEDO/JST scientific grants",
        fee: "¥0 JPY",
        tuition: "Salaried research appointment",
        requirements: {
          gpa: "PhD in Metallurgy, Electrochemistry, or Surface Physics",
          ielts: "Fluent English or Japanese",
          gre: "Not required",
          papers: "Demonstrated publication record in surface coating technology",
          references: "Two academic referee letters"
        },
        desc: "Postdoctoral appointment developing friction-reducing nano-coatings and electroless nickel-plating technologies for next-generation hydrogen fuel cell components."
      }
    ],
    researchers: [
      {
        id: 1590,
        subject: "engineering",
        name: "Prof. Dr. Hideo Honma",
        title: "Emeritus Professor and Pioneer of the Surface Engineering Research Institute",
        university: "Kanto Gakuin University",
        country: "Japan",
        topics: ["Surface Modification Chemistry", "Electroless Plating Technology", "Microelectronics Packaging", "Microfabrication Techniques"],
        source: "https://univ.kanto-gakuin.ac.jp/en/research/",
        summary: "World-renowned electrochemist and international authority on precision surface finishing, metallization of non-conductors, and microelectronic circuit packaging."
      },
      {
        id: 1591,
        subject: "engineering",
        name: "Prof. Dr. Kenichi Tsukahara",
        title: "Professor of Architectural Structural Engineering and Seismic Isolation",
        university: "Kanto Gakuin University",
        country: "Japan",
        topics: ["Seismic Base Isolation", "Earthquake Structural Dynamics", "Vibration Damping Systems", "Reinforced Concrete Resilience"],
        source: "https://univ.kanto-gakuin.ac.jp/en/faculty/",
        summary: "Structural engineering expert conducting full-scale experimental shaking-table investigations into earthquake response mitigation for high-rise commercial structures."
      },
      {
        id: 1592,
        subject: "social-sciences",
        name: "Prof. Dr. Koji Matsuoka",
        title: "Professor of International Economics and Regional Business",
        university: "Kanto Gakuin University",
        country: "Japan",
        topics: ["Urban Regional Economics", "SME Innovation Clusters", "Japanese Port Logistics", "Urban Revitalization Policy"],
        source: "https://univ.kanto-gakuin.ac.jp/en/faculty/",
        summary: "Regional economist analyzing the economic revitalisation of Japanese post-industrial port cities, public-private partnership models, and local entrepreneurship."
      }
    ]
  },

  // 23. Japan - Kobe Design University (Row 1672)
  {
    institution: "Kobe Design University",
    shortName: "Kobe Design Uni",
    slug: "kobe-design-university-hyogo",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kobe, Hyogo Prefecture, Japan",
    website: "https://www.kobe-du.ac.jp/english/",
    sourceRow: 1672,
    heroEyebrow: "Kobe, Hyogo · UNESCO City of Design · Product, Manga & Environmental Architecture",
    headline: "Kobe Design University: Product Design, Manga, Anime & Architecture Guide",
    overview: "Kobe Design University (Kobe DU) is a specialized higher education institution dedicated entirely to comprehensive design education and research, situated in Kobe—a designated UNESCO City of Design in Hyogo Prefecture. Founded in 1989, Kobe DU operates across seven specialized design departments: Product and Interior Design, Visual Design, Manga and Comic Art, Media Arts and Animation, Fashion and Textile Design, Architecture and Environmental Design, and Visual Communication, fostering creative practitioners who blend Japanese artisanal sensibility with advanced digital technologies.",
    description: "Explore Kobe Design University in Japan: Bachelor of Design, Master's in Comprehensive Design, manga & animation studios, scholarships, and prominent Japanese designers.",
    admissions: {
      masters: "Accredited Bachelor of Arts or Bachelor of Science degree in design, architecture, fine arts, or related discipline; submission of a comprehensive creative design portfolio and thesis proposal.",
      phd: "Doctor of Arts and Design; requires recognized Master's degree in design or related field, documented exhibition or publication history, and defense of the doctoral research plan.",
      language: "JLPT N2 minimum required for studio coursework and critique seminars; JLPT N1 strongly recommended for theoretical design research.",
      proposal: "Creative portfolio: 10-20 original works demonstrating design thinking, conceptual execution, sketching skill, and technical software fluency; written study plan in Japanese (1,200 characters).",
      appFee: "¥30,000 JPY application screening fee.",
      documents: "Graduation certificate, academic transcripts, creative portfolio (booklet or USB), statement of purpose, two letters of recommendation, JLPT certificate, and passport."
    },
    tuitionText: "Tuition for undergraduate and graduate design programs is approximately ¥1,350,000 to ¥1,550,000 JPY per academic year (with an initial admission fee of ¥250,000 JPY). Kobe DU provides an International Student Tuition Exemption granting a 30% discount on tuition for all privately funded overseas students holding a college student visa.",
    opportunities: [
      {
        id: 3672,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Scholarship",
        title: "Kobe Design University International Student Special Tuition Exemption",
        source: "https://www.kobe-du.ac.jp/english/admissions/scholarships/",
        funding: "30% reduction of annual tuition across the full degree period",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,420,000 JPY per year (before 30% reduction)",
        requirements: {
          gpa: "Demonstrated creative talent in portfolio evaluation and JLPT N2",
          ielts: "JLPT N2 required",
          gre: "Not required",
          papers: "Design portfolio review",
          references: "One academic or artistic recommendation"
        },
        desc: "Institutional tuition waiver reducing tuition by 30% for all international students admitted to undergraduate and graduate programs at Kobe Design University."
      },
      {
        id: 3673,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Master's",
        title: "Master of Design in Integrated Design and Digital Media Creation",
        source: "https://www.kobe-du.ac.jp/english/graduate/",
        funding: "Access to professional 4K animation rendering suites and motion capture labs",
        status: "Available",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,380,000 JPY per academic year",
        requirements: {
          gpa: "Bachelor's degree in design, media art, architecture, or related field",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Creative design portfolio and master's research proposal",
          references: "Two academic referee letters"
        },
        desc: "Two-year master's program exploring cross-disciplinary design methodologies: digital fabrication, human-centred interaction design, generative media art, and sustainable lifestyle products."
      },
      {
        id: 3674,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Bachelor's",
        title: "Bachelor of Design in Manga and Narrative Illustration",
        source: "https://www.kobe-du.ac.jp/english/undergraduate/manga/",
        funding: "Mentorship by professional manga artists and editorial reviews by Tokyo publishers",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,450,000 JPY per academic year",
        requirements: {
          gpa: "12-year primary/secondary education completion",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Original manga sample or sequential narrative drawing portfolio (minimum 8 pages)",
          references: "Not required"
        },
        desc: "Four-year comprehensive curriculum mastering visual storyboarding, character design, scriptwriting, digital panel coloring, and commercial serialization techniques."
      },
      {
        id: 3675,
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        type: "Bachelor's",
        title: "Bachelor of Design in Product & Mobility Design",
        source: "https://www.kobe-du.ac.jp/english/undergraduate/product/",
        funding: "Kobe DU Industrial Prototyping Centre and 3D printing clay workshops",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,450,000 JPY per year",
        requirements: {
          gpa: "High school graduation with creative aptitude",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Product sketching portfolio",
          references: "Not required"
        },
        desc: "Four-year bachelor's degree training industrial product creators in consumer electronics, future micro-mobility concepts, sustainable furniture, and medical device ergonomics."
      },
      {
        id: 3676,
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        type: "Master's",
        title: "Master of Design in Architecture and Environmental Landscape Design",
        source: "https://www.kobe-du.ac.jp/english/graduate/",
        funding: "UNESCO City of Design collaborative community studios in Kobe",
        status: "Available",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥1,380,000 JPY per year",
        requirements: {
          gpa: "Bachelor's degree in Architecture or Landscape Architecture",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Architectural design portfolio",
          references: "Two academic recommendations"
        },
        desc: "Two-year postgraduate credential examining wood tectonic architecture, mountain-to-sea coastal ecological corridors, and disaster-preventive urban spatial planning in Kansai."
      },
      {
        id: 3677,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Fellowship",
        title: "Kobe UNESCO City of Design International Artist-in-Residence Fellowship",
        source: "https://www.kobe-du.ac.jp/english/research/",
        funding: "Studio space + ¥200,000 JPY/month living stipend + exhibition production grant",
        status: "Available",
        deadline: null,
        deadlineText: "Annual international creative residency call",
        fee: "¥0 JPY",
        tuition: "Sponsored creative residency",
        requirements: {
          gpa: "Practicing designer or media artist with international exhibition credentials",
          ielts: "Working English or Japanese",
          gre: "Not required",
          papers: "Residency creative proposal and digital portfolio",
          references: "Two professional design endorsements"
        },
        desc: "Three-month creative residency offering studio facilities, digital media labs, and a solo exhibition at the Kobe Design University Art Gallery."
      },
      {
        id: 3678,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Course",
        title: "Japanese Anime Animation Direction & Digital Storyboarding Masterclass",
        source: "https://www.kobe-du.ac.jp/english/undergraduate/media/",
        funding: "Certificate of animation direction mastery",
        status: "Available",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "¥0 JPY",
        tuition: "¥180,000 JPY course fee",
        requirements: {
          gpa: "Intermediate 2D drawing skill or digital illustration experience",
          ielts: "Japanese B1",
          gre: "Not required",
          papers: "Sample character designs",
          references: "Not required"
        },
        desc: "Six-week intensive studio examining keyframe timing, layout composition, voice-over sound sync, and digital compositing in CLIP STUDIO PAINT and After Effects."
      }
    ],
    researchers: [
      {
        id: 1593,
        subject: "arts-design",
        name: "Prof. Dr. Mitsuru Senda",
        title: "President and Professor of Environmental Architecture and Children's Environments",
        university: "Kobe Design University",
        country: "Japan",
        topics: ["Architectural Play Structures", "Children's Environmental Design", "Sustainable Public Architecture", "Biophilic Urban Spaces"],
        source: "https://www.kobe-du.ac.jp/english/about/president/",
        summary: "Eminent Japanese architect and educator celebrated for revolutionary playground architecture, circular school design, and biophilic child-centred environments."
      },
      {
        id: 1594,
        subject: "arts-design",
        name: "Prof. Koji Sugano",
        title: "Professor of Manga and Sequential Narrative Art",
        university: "Kobe Design University",
        country: "Japan",
        topics: ["Manga Storytelling Architecture", "Character Prototyping", "Digital Comic Publishing", "Graphic Narrative Semiotics"],
        source: "https://www.kobe-du.ac.jp/english/faculty/",
        summary: "Veteran manga creator and theorist mentoring emerging narrative artists in panel structure, character development, and international digital webtoon distribution."
      },
      {
        id: 1595,
        subject: "arts-design",
        name: "Prof. Satoru Toda",
        title: "Professor of Industrial Product and Transportation Design",
        university: "Kobe Design University",
        country: "Japan",
        topics: ["Universal Product Design", "Future Mobility Systems", "Sensory Ergonomics", "Eco-Materials in Manufacturing"],
        source: "https://www.kobe-du.ac.jp/english/faculty/",
        summary: "Senior industrial designer whose career spans automotive concept styling and consumer electronics, focusing on universal accessibility and sustainable polymers."
      }
    ]
  },

  // 24. Sweden - HDK-Valand - Academy of Art and Design (University of Gothenburg) (Row 1570)
  {
    institution: "HDK-Valand - Academy of Art and Design (University of Gothenburg)",
    shortName: "HDK-Valand Gothenburg",
    slug: "hdk-valand-academy-art-design-gothenburg",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Gothenburg, Sweden",
    website: "https://www.gu.se/en/hdk-valand",
    sourceRow: 1570,
    heroEyebrow: "Gothenburg, Sweden · University of Gothenburg · Critical Crafts, Fine Art & Design",
    headline: "HDK-Valand: Craft, Fine Art, Design & Doctoral Artistic Research Guide",
    overview: "HDK-Valand - Academy of Art and Design is the internationally acclaimed artistic faculty of the University of Gothenburg (Göteborgs universitet), situated in central Gothenburg, Sweden. Formed from the union of the historic Valand Academy of Fine Art (est. 1865) and the School of Design and Crafts (HDK, est. 1848), HDK-Valand is one of Europe's largest and most comprehensive environments for contemporary arts, design, craft, film, photography, and literary composition, leading the Nordic region in doctoral artistic research.",
    description: "Explore HDK-Valand Academy of Art and Design at University of Gothenburg: Master of Fine Art, MFA in Design, PhD in Artistic Research, Swedish state scholarships, and celebrated Scandinavian artists.",
    admissions: {
      masters: "Accredited Bachelor of Fine Arts, Bachelor of Design, or equivalent international artistic degree (180 ECTS); submission of creative portfolio, written artist project description, and admissions interview.",
      phd: "Artistic Doctorate (PhD in Artistic Research in Fine Arts, Design, or Crafts); requires recognized master's degree in arts or design, documentation of artistic excellence, and a pioneering doctoral project proposal.",
      language: "English language proficiency equivalent to English 6 from Swedish upper secondary school (IELTS Academic 6.5 overall with no subtest below 5.5, or TOEFL iBT 90).",
      proposal: "Creative portfolio and artist project statement: 10-15 documentation samples of artistic practice and a 1,000-word statement outlining proposed artistic investigations.",
      appFee: "900 SEK national Swedish university application fee for non-EU/EEA international applicants.",
      documents: "Higher education artistic degree certificates, official transcripts, digital portfolio (submitted via portal), project description, CV, and copy of passport."
    },
    tuitionText: "Tuition is 0 SEK for Swedish, EU/EEA, and Swiss citizens. International student tuition ranges from 280,000 SEK to 345,000 SEK per academic year depending on specialized studio equipment usage. Admitted international students can apply for University of Gothenburg Axel Adler Scholarships covering 100% of tuition fees.",
    opportunities: [
      {
        id: 3679,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Scholarship",
        title: "University of Gothenburg Axel Adler Master's Tuition Scholarship at HDK-Valand",
        source: "https://www.gu.se/en/study-in-gothenburg/apply/scholarships",
        funding: "100% full tuition fee waiver for the two-year Master's degree program",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual national round)",
        fee: "900 SEK",
        tuition: "0 SEK under scholarship (normally 315,000 SEK/year)",
        requirements: {
          gpa: "Ranked as first-choice applicant with top-tier creative portfolio evaluation",
          ielts: "6.5 overall (minimum 5.5 in all bands)",
          gre: "Not required",
          papers: "Comprehensive digital artistic portfolio and project description",
          references: "Two artistic or academic letters of recommendation"
        },
        desc: "Prestigious institutional scholarship covering the entire tuition fee for high-ranking international students admitted to master's programs at HDK-Valand."
      },
      {
        id: 3680,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "PhD",
        title: "PhD in Artistic Research in Design, Crafts, and Contemporary Fine Art",
        source: "https://www.gu.se/en/hdk-valand/doctoral-studies",
        funding: "Four-year full-time salaried doctoral employment (approx. 31,000-34,000 SEK/month)",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "0 SEK",
        tuition: "0 SEK; full salaried university appointment with Swedish social security benefits",
        requirements: {
          gpa: "Master's degree in Fine Art, Design, Crafts, or Film/Photography",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Doctoral research plan (maximum 5 pages) detailing artistic methodology",
          references: "Two academic referee letters"
        },
        desc: "Fully funded four-year doctoral research position at the forefront of European artistic research, exploring practice-based design epistemologies, material activism, and critical craft theories."
      },
      {
        id: 3681,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Master's",
        title: "Master of Fine Arts in Design (MFA Child Culture Design Specialization)",
        source: "https://www.gu.se/en/study-opportunities/child-culture-design-mfa",
        funding: "Unique international specialization dedicated to children's play, spaces, and rights",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "312,000 SEK per year (international)",
        requirements: {
          gpa: "Bachelor's degree in Design (180 ECTS) or equivalent",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Design portfolio and personal letter of intent regarding child perspective",
          references: "Two letters of recommendation"
        },
        desc: "Pioneering two-year MFA program training designers in play equipment, participatory children's public architecture, toy ethics, and inclusive social design based on the UN Convention on the Rights of the Child."
      },
      {
        id: 3682,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Master's",
        title: "Master of Fine Arts in Crafts (Ceramic Art, Jewellery Art & Textile Art)",
        source: "https://www.gu.se/en/study-opportunities/crafts-mfa",
        funding: "World-class material workshops, glass kilns, metal forging, and jacquard looms",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "345,000 SEK per academic year",
        requirements: {
          gpa: "Bachelor of Fine Arts in Crafts or relevant material-based art discipline",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Documentation of 8-15 craft works and project proposal",
          references: "Two references"
        },
        desc: "Two-year master's degree exploring contemporary material discourse, craft philosophy, feminist and ecological materialities, and gallery installation."
      },
      {
        id: 3683,
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Master's",
        title: "Master of Fine Arts in Contemporary Fine Art (MFA Fine Art)",
        source: "https://www.gu.se/en/study-opportunities/fine-art-mfa",
        funding: "Individual private studio space and solo gallery exhibition support",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "312,000 SEK per year",
        requirements: {
          gpa: "BFA degree in Fine Art or equivalent artistic credential",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Visual portfolio of contemporary works and artist statement",
          references: "Two academic referee letters"
        },
        desc: "Two-year studio-centred program fostering independent artistic inquiry across sculpture, painting, performance, moving image, installation, and critical public interventions."
      },
      {
        id: 3684,
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Fellowship",
        title: "Gothenburg International Artistic Research Postdoctoral Fellowship",
        source: "https://www.gu.se/en/hdk-valand/research",
        funding: "42,000 SEK/month salary plus 150,000 SEK project production budget",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling intake for Vetenskapsrådet (Swedish Research Council) funded projects",
        fee: "0 SEK",
        tuition: "Full-time salaried research appointment",
        requirements: {
          gpa: "Artistic PhD in Fine Art, Design, or Performing Arts completed within past 3 years",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Exhibition history and comprehensive post-doctoral research proposal",
          references: "Three academic referee letters"
        },
        desc: "Two-year funded research position at HDK-Valand investigating experimental curatorial practices, decolonial craft epistemologies, and sustainable material transitions."
      },
      {
        id: 3685,
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        type: "Course",
        title: "Summer Academy in Ecological Materiality and Nordic Biomaterials",
        source: "https://www.gu.se/en/hdk-valand/courses",
        funding: "Field harvesting in West Sweden forests and marine algae processing",
        status: "Available",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "0 SEK (EU) / 900 SEK",
        tuition: "18,500 SEK course fee for non-EU students (0 SEK for EU)",
        requirements: {
          gpa: "60 ECTS in art, design, or architecture studies",
          ielts: "English 6 / 6.5 overall",
          gre: "Not required",
          papers: "Short portfolio of 3 works",
          references: "Not required"
        },
        desc: "Five-week intensive summer course investigating mycelium composites, kelp bioplastics, natural dye mordants, and circular studio practices in the Gothenburg archipelago."
      }
    ],
    researchers: [
      {
        id: 1596,
        subject: "arts-design",
        name: "Prof. Dr. Klara Björk",
        title: "Head of HDK-Valand and Professor of Film and Artistic Research",
        university: "HDK-Valand - Academy of Art and Design (University of Gothenburg)",
        country: "Sweden",
        topics: ["Artistic Research Methodologies", "Collaborative Moving Image", "Pedagogy in Art Academies", "Documentary Aesthetics"],
        source: "https://www.gu.se/en/about/find-staff/klarabjork",
        summary: "Filmmaker and academic leader directing HDK-Valand; prominent voice in the European development of artistic doctorates and collaborative moving-image pedagogy."
      },
      {
        id: 1597,
        subject: "arts-design",
        name: "Prof. Dr. Henric Benesch",
        title: "Professor of Design and Senior Researcher in Urban Spatial Practices",
        university: "HDK-Valand - Academy of Art and Design (University of Gothenburg)",
        country: "Sweden",
        topics: ["Urban Design Pedagogies", "Public Space Democracy", "Critical Heritage Studies", "Architectural Epistemologies"],
        source: "https://www.gu.se/en/about/find-staff/henricbenesch",
        summary: "Architect and design researcher investigating how design methodologies reconfigure contested public spaces, cultural heritage institutions, and urban commons."
      },
      {
        id: 1598,
        subject: "arts-design",
        name: "Prof. Jessica Hemmings",
        title: "Professor of Crafts and Textile Art",
        university: "HDK-Valand - Academy of Art and Design (University of Gothenburg)",
        country: "Sweden",
        topics: ["Contemporary Textile Art", "Postcolonial Material Culture", "Critical Craft Writing", "Craft and Globalization"],
        source: "https://www.gu.se/en/about/find-staff/jessicahemmings",
        summary: "International curator and scholar of contemporary textile art and craft writing; author of seminal texts on postcolonial textiles and material agency."
      }
    ]
  },

  // 25. Sweden - LINXS Institute of Advanced Neutron and X-ray Science (Lund University) (Row 1587)
  {
    institution: "LINXS Institute of Advanced Neutron and X-ray Science (Lund University)",
    shortName: "LINXS Lund",
    slug: "linxs-neutron-xray-science-lund",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Lund, Skåne, Sweden",
    website: "https://www.linxs.se",
    sourceRow: 1587,
    heroEyebrow: "Lund, Skåne · Lund University · MAX IV & European Spallation Source (ESS) Hub",
    headline: "LINXS Lund: Synchrotron X-ray, Neutron Scattering & Structural Biology Guide",
    overview: "The LINXS Institute of Advanced Neutron and X-ray Science is a premier advanced research institute hosted at Lund University in Skåne, Sweden. Positioned at the epicentre of European mega-science alongside MAX IV—the world's most brilliant synchrotron X-ray radiation source—and the European Spallation Source (ESS)—the world's most powerful neutron source—LINXS serves as a global collaborative nexus. It unites world-leading physicists, chemists, structural biologists, and materials scientists across thematic research themes in soft matter, life sciences, energy materials, and cultural heritage.",
    description: "Explore LINXS Institute at Lund University: Doctoral studentships in neutron and synchrotron science, postdoctoral fellowships, MAX IV and ESS beamline research, and leading Scandinavian physicists.",
    admissions: {
      masters: "Master of Science programs in Physics (Synchrotron Radiation Research), Chemistry, or Biophysics administered through Lund University Faculty of Science; requires Bachelor's with 90 ECTS in physics/chemistry.",
      phd: "Four-year salaried doctoral studentship in neutron or synchrotron physics/materials science; requires Master of Science in physics, physical chemistry, or structural biology with first-class thesis.",
      language: "IELTS Academic 6.5 overall (no band below 5.5) or TOEFL iBT 90 overall (minimum 20 in writing); English 6 proficiency required for all graduate researchers.",
      proposal: "Required for doctoral and postdoctoral appointments: 3-5 page research project plan outlining synchrotron/neutron experimental methodology, beamline feasibility, and theoretical framework.",
      appFee: "900 SEK for master's programs via UniversityAdmissions.se; 0 SEK for doctoral employment applications.",
      documents: "Bachelor's and Master's diplomas, complete transcripts, master's thesis, publications list, CV, two academic recommendation letters, and cover letter."
    },
    tuitionText: "Tuition is 0 SEK for EU/EEA citizens. International master's tuition is approximately 145,000 to 175,000 SEK per year. Doctoral researchers are employed as full-time university staff with a starting salary of approximately 31,500 to 35,000 SEK per month (0 SEK tuition and full Swedish pension and healthcare benefits).",
    opportunities: [
      {
        id: 3686,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "PhD",
        title: "LINXS-Lund Doctoral Studentship in Advanced Synchrotron & Neutron Scattering",
        source: "https://www.linxs.se/education-and-careers",
        funding: "Four-year full university salaried employment (32,000-35,000 SEK/month gross)",
        status: "Available",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "0 SEK",
        tuition: "0 SEK; full-time salaried Swedish doctoral appointment",
        requirements: {
          gpa: "Master of Science in Physics, Physical Chemistry, or Materials Science with distinction",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Master's thesis and draft beamline research plan",
          references: "Two academic referee letters"
        },
        desc: "Cutting-edge doctoral research position utilizing the MAX IV synchrotron and ESS spallation neutron beamlines to investigate topological insulators and novel quantum materials."
      },
      {
        id: 3687,
        subject: "physics",
        subjects: ["physics", "biology", "chemistry"],
        type: "Master's",
        title: "Master of Science in Synchrotron Radiation Research and Nanophysics",
        source: "https://www.lunduniversity.lu.se/lubas/i-uoh-lu-NAFYK-SYNK",
        funding: "Lund University Global Scholarship eligible for international tuition coverage",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual national round)",
        fee: "900 SEK",
        tuition: "160,000 SEK per academic year (international)",
        requirements: {
          gpa: "Bachelor of Science in Physics with at least 90 ECTS in physics and 30 ECTS in mathematics",
          ielts: "6.5 overall (minimum 5.5 in each band)",
          gre: "Not required",
          papers: "Motivation letter and transcript evaluation",
          references: "Two academic letters of recommendation"
        },
        desc: "Two-year master's degree based at MAX IV Laboratory in Lund, providing experimental mastery of X-ray absorption spectroscopy (XAS), resonant inelastic scattering (RIXS), and ptychography."
      },
      {
        id: 3688,
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        type: "Master's",
        title: "Master of Science in Structural Biology & Macromolecular Crystallography",
        source: "https://www.lunduniversity.lu.se/lubas/i-uoh-lu-NABIL",
        funding: "Hands-on cryo-EM and micro-focus synchrotron macromolecular beamline access",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "155,000 SEK per year",
        requirements: {
          gpa: "Bachelor's degree in molecular biology, biochemistry, or biophysics",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in structural biophysics",
          references: "Two academic references"
        },
        desc: "Two-year master's program analyzing protein structure determination, small-angle X-ray/neutron scattering (SAXS/SANS), membrane transporter dynamics, and cryo-electron microscopy."
      },
      {
        id: 3689,
        subject: "physics",
        subjects: ["physics", "chemistry", "biology"],
        type: "Fellowship",
        title: "LINXS International Fellowship in Soft Matter & Life Sciences",
        source: "https://www.linxs.se/fellowships",
        funding: "45,000 SEK/month research salary + 100,000 SEK annual travel and beamtime budget",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling international thematic call for experienced researchers",
        fee: "0 SEK",
        tuition: "Salaried senior research fellowship",
        requirements: {
          gpa: "PhD in Physics, Biophysics, or Physical Chemistry with minimum 2 years postdoctoral research",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Substantial peer-reviewed publication record in neutron/X-ray scattering",
          references: "Three international academic references"
        },
        desc: "Prestigious visiting fellowship embedding international research leaders into LINXS core thematic working groups to co-develop long-term beamline experimental frameworks."
      },
      {
        id: 3690,
        subject: "chemistry",
        subjects: ["chemistry", "environment", "physics"],
        type: "Fellowship",
        title: "Energy & Materials Sustainability Postdoctoral Research Fellowship",
        source: "https://www.linxs.se/energy-and-materials",
        funding: "42,000 SEK/month salary plus Swedish social benefits",
        status: "Available",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "0 SEK",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "PhD in Electrochemistry, Solid-State Chemistry, or Materials Physics",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Demonstrated in operando or in situ synchrotron diffraction experience",
          references: "Two academic referee letters"
        },
        desc: "Two-year postdoctoral appointment performing in operando neutron imaging and X-ray tomographic analysis of lithium-ion and solid-state sodium battery degradation."
      },
      {
        id: 3691,
        subject: "physics",
        subjects: ["physics"],
        type: "Course",
        title: "LINXS Young Researchers' Symposium & Hands-on Neutron Data School",
        source: "https://www.linxs.se/events",
        funding: "Travel and accommodation bursaries supported by NordForsk and MAX4ESSFUN",
        status: "Available",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Summer school)",
        fee: "0 SEK",
        tuition: "0 SEK; fully funded workshop for PhD students",
        requirements: {
          gpa: "Enrolled PhD student or early-career postdoc in physics, chemistry, or biology",
          ielts: "Working English",
          gre: "Not required",
          papers: "Poster abstract submission on neutron/X-ray project",
          references: "Supervisor letter of support"
        },
        desc: "One-week intensive summer school providing practical training in neutron reflectometry data reduction, small-angle scattering modeling software, and beamline proposal drafting."
      },
      {
        id: 3692,
        subject: "social-sciences",
        subjects: ["social-sciences", "physics", "arts-design"],
        type: "Course",
        title: "Synchrotron and Neutron Methods in Heritage Science & Archaeology",
        source: "https://www.linxs.se/heritage-science",
        funding: "Interdisciplinary workshop sponsored by the Swedish National Heritage Board",
        status: "Available",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "0 SEK",
        tuition: "0 SEK participation fee",
        requirements: {
          gpa: "Researcher in archaeology, conservation science, or art history",
          ielts: "Working English",
          gre: "Not required",
          papers: "Brief description of heritage artifact specimen for non-destructive analysis",
          references: "Not required"
        },
        desc: "Three-day specialized masterclass demonstrating non-destructive 3D neutron tomography, macro X-ray fluorescence (MA-XRF), and micro-CT imaging of ancient metals and pigments."
      }
    ],
    researchers: [
      {
        id: 1599,
        subject: "physics",
        name: "Prof. Dr. Trevor Forsyth",
        title: "Director of LINXS and Professor of Biophysics",
        university: "LINXS Institute of Advanced Neutron and X-ray Science (Lund University)",
        country: "Sweden",
        topics: ["Neutron Crystallography", "Structural Biology of Fibres", "Deuteration Technologies", "Macromolecular Dynamics"],
        source: "https://www.linxs.se/people/trevor-forsyth",
        summary: "World-renowned biophysicist and director of LINXS; pioneered neutron macromolecular crystallography, selective isotopic deuteration, and amyloid fibre structure analysis."
      },
      {
        id: 1600,
        subject: "chemistry",
        name: "Prof. Dr. Marie Skepö",
        title: "Vice-Director of LINXS and Professor of Theoretical Chemistry",
        university: "LINXS Institute of Advanced Neutron and X-ray Science (Lund University)",
        country: "Sweden",
        topics: ["Intrinsically Disordered Proteins", "Monte Carlo Simulations", "Small-Angle X-ray Scattering (SAXS)", "Colloidal Science"],
        source: "https://www.linxs.se/people/marie-skepo",
        summary: "Eminent computational and physical chemist combining advanced atomistic simulations with synchrotron SAXS to resolve intrinsically disordered protein conformations."
      },
      {
        id: 1601,
        subject: "physics",
        name: "Prof. Dr. Stephen Hall",
        title: "Professor of Materials Physics and Former Director of LINXS",
        university: "LINXS Institute of Advanced Neutron and X-ray Science (Lund University)",
        country: "Sweden",
        topics: ["3D X-ray Tomography", "In Situ Neutron Imaging", "Mechanics of Geomaterials", "Full-Field Strain Mapping"],
        source: "https://www.linxs.se/people/stephen-hall",
        summary: "Pioneering experimental physicist developing time-resolved 3D and 4D X-ray and neutron tomographic imaging to map deformation, fluid flow, and fracture in porous materials."
      }
    ]
  },

  // 26. Sweden - Myfab - National Infrastructure for Micro and Nanofabrication (Row 1597)
  {
    institution: "Myfab - National Infrastructure for Micro and Nanofabrication",
    shortName: "Myfab Sweden",
    slug: "myfab-nanofabrication-infrastructure-sweden",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Gothenburg, Stockholm & Lund, Sweden",
    website: "https://www.myfab.se",
    sourceRow: 1597,
    heroEyebrow: "Gothenburg, Stockholm & Lund · Swedish Research Council (VR) National Node · Cleanroom Nanotech",
    headline: "Myfab Sweden: Cleanroom Nanotechnology, Quantum Devices & PhD Guide",
    overview: "Myfab is the Swedish National Research Infrastructure for Micro and Nanofabrication, established and funded by the Swedish Research Council (Vetenskapsrådet). Operating three premier state-of-the-art cleanroom laboratories across Chalmers University of Technology (Nanofabrication Laboratory, Gothenburg), KTH Royal Institute of Technology (Electrum Laboratory, Stockholm), and Lund University (Lund Nano Lab), Myfab provides 5,400 square meters of class 10-10,000 cleanrooms. It serves as Sweden's technological bedrock for quantum computing, semiconductor physics, photonics, and MEMS.",
    description: "Explore Myfab Sweden: Cleanroom nanofabrication fellowships, quantum device engineering, doctoral studentships, academic access protocols, and eminent Scandinavian nanoscientists.",
    admissions: {
      masters: "Graduate students access Myfab through Master of Science degrees in Applied Physics, Nanotechnology, or Materials Chemistry at consortium universities (Chalmers, KTH, or Lund).",
      phd: "Four-year fully funded salaried doctoral appointments in nano-optics, quantum electronics, or semiconductor engineering; requires accredited M.Sc. with minimum 120 ECTS in technical physics or electrical engineering.",
      language: "IELTS Academic 6.5 overall (minimum 5.5 in all bands) or equivalent English 6 certification.",
      proposal: "Cleanroom user project proposal: detailed fabrication flow (lithography, etching, thin-film deposition, metrology), safety clearance, and resource feasibility plan.",
      appFee: "0 SEK for doctoral employment and academic cleanroom research user proposals.",
      documents: "Curriculum vitae, degree certificates, master's thesis, publications list, safety training certification, and two academic referee letters."
    },
    tuitionText: "Doctoral researchers are full-time university employees earning approximately 32,500 to 36,000 SEK per month (0 SEK tuition, with complete Swedish medical, parental, and pension benefits). Academic research groups benefit from heavily subsidized cleanroom access rates through Swedish Research Council infrastructure grants.",
    opportunities: [
      {
        id: 3693,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "PhD",
        title: "Myfab National Doctoral Studentship in Quantum Device Nanofabrication",
        source: "https://www.myfab.se/education",
        funding: "Four-year full university salaried employment (33,000-36,000 SEK/month gross)",
        status: "Available",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "0 SEK",
        tuition: "0 SEK; fully salaried Swedish university doctoral position",
        requirements: {
          gpa: "Master of Science in Nanotechnology, Applied Physics, or Electrical Engineering with top marks",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Master's thesis and cleanroom fabrication project proposal",
          references: "Two academic referee letters"
        },
        desc: "Doctoral research position utilizing Myfab's electron-beam lithography (EBL) and atomic layer deposition (ALD) cleanrooms to fabricate superconducting transmon qubits and quantum circuits."
      },
      {
        id: 3694,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "Master of Science in Nanotechnology and Semiconductor Device Engineering",
        source: "https://www.kth.se/en/studies/master/nanotechnology",
        funding: "Extensive hands-on training inside Myfab Electrum Cleanroom Laboratory",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual round)",
        fee: "900 SEK",
        tuition: "165,000 SEK per academic year (international)",
        requirements: {
          gpa: "Bachelor of Science in Electrical Engineering, Physics, or Materials Science (180 ECTS)",
          ielts: "6.5 overall (minimum 5.5 in each component)",
          gre: "Not required",
          papers: "Motivation letter and transcript verification",
          references: "Two academic recommendations"
        },
        desc: "Two-year master's program providing direct hands-on cleanroom training in deep reactive ion etching (DRIE), wafer bonding, semiconductor metrology, and spintronic devices."
      },
      {
        id: 3695,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Master's",
        title: "Master of Science in Applied Physics (Quantum Technologies & Photonics)",
        source: "https://www.chalmers.se/en/education/find-masters-programme/applied-physics-msc/",
        funding: "Chalmers IPOET international scholarship covering 75% of tuition fees",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "160,000 SEK per year",
        requirements: {
          gpa: "Bachelor's degree in Physics or Engineering Physics with minimum 3.0/4.0 GPA",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "Two academic referee letters"
        },
        desc: "Two-year engineering master's program utilizing Chalmers' 1,240 m² ISO class 5 cleanroom to pioneer integrated photonic waveguides, laser diodes, and Josephson junction arrays."
      },
      {
        id: 3696,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "Fellowship",
        title: "Myfab National Cleanroom Research Fellow in 2D Materials & Nanowires",
        source: "https://www.myfab.se/research",
        funding: "44,000 SEK/month salary plus 200,000 SEK cleanroom processing credits",
        status: "Available",
        deadline: null,
        deadlineText: "Continuous intake for sponsored VR and Wallenberg projects",
        fee: "0 SEK",
        tuition: "Full-time salaried research appointment",
        requirements: {
          gpa: "PhD in Physics, Nano-electronics, or Chemical Physics with cleanroom track record",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "First-author publications in high-impact nanotechnology journals",
          references: "Three academic referee letters"
        },
        desc: "Senior research fellowship developing scalable epitaxial growth of III-V semiconductor nanowires and van der Waals heterostructures for ultra-efficient photovoltaic and optoelectronic cells."
      },
      {
        id: 3697,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Course",
        title: "Myfab Cleanroom Operator Safety & High-Vacuum Protocol Certification",
        source: "https://www.myfab.se/user-guide",
        funding: "Mandatory qualification for all researchers accessing Swedish national cleanrooms",
        status: "Available",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027 (Quarterly intake)",
        fee: "0 SEK",
        tuition: "Included for registered academic cleanroom users",
        requirements: {
          gpa: "Master's or doctoral student registered for an approved Myfab research project",
          ielts: "Working English",
          gre: "Not required",
          papers: "Approved Chemical and Safety Risk Assessment form",
          references: "Laboratory head sign-off"
        },
        desc: "Comprehensive safety course covering chemical hazard handling (hydrofluoric acid, silane), cleanroom gowning protocols, plasma etch safety, and high-vacuum evacuation systems."
      },
      {
        id: 3698,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Internship",
        title: "Scandinavian Semiconductor Industry Cleanroom Engineering Internship",
        source: "https://www.myfab.se/industry",
        funding: "Paid commercial industrial placement (28,000 SEK/month stipend)",
        status: "Available",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 SEK",
        tuition: "Integrated industry practicum",
        requirements: {
          gpa: "Enrolled in 2nd year of master's or PhD at Myfab consortium university",
          ielts: "Enrolled student standing",
          gre: "Not required",
          papers: "Technical resume and cleanroom tool competence list",
          references: "Faculty advisor recommendation"
        },
        desc: "Four-month embedded industrial placement at leading Nordic microelectronics and quantum hardware firms, performing semiconductor yield analysis and mask fabrication."
      },
      {
        id: 3699,
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "Course",
        title: "Advanced Electron Beam Lithography and Focused Ion Beam (FIB) Masterclass",
        source: "https://www.myfab.se/education",
        funding: "Sponsored by the Swedish Research Council (VR)",
        status: "Available",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "0 SEK",
        tuition: "0 SEK course tuition",
        requirements: {
          gpa: "Cleanroom driver license at Chalmers, KTH, or Lund cleanrooms",
          ielts: "Working English",
          gre: "Not required",
          papers: "Pattern design file (GDSII or OASIS)",
          references: "Not required"
        },
        desc: "Three-day intensive technical workshop mastering sub-10 nm electron-beam resist exposure, proximity effect correction algorithms, and dual-beam FIB-SEM nanomachining."
      }
    ],
    researchers: [
      {
        id: 1602,
        subject: "physics",
        name: "Prof. Dr. Peter Modh",
        title: "Director of Myfab and Head of the Nanofabrication Laboratory at Chalmers",
        university: "Myfab - National Infrastructure for Micro and Nanofabrication",
        country: "Sweden",
        topics: ["Nanofabrication Technology", "Semiconductor Cleanroom Management", "Optoelectronic Devices", "High-Resolution Lithography"],
        source: "https://www.chalmers.se/en/persons/modh/",
        summary: "Director of Myfab national infrastructure; leading scientist managing Sweden's largest academic cleanroom and advancing nanofabrication tool capabilities."
      },
      {
        id: 1603,
        subject: "engineering",
        name: "Prof. Dr. Mikael Östling",
        title: "Professor of Solid-State Electronics and Former Director of Electrum Laboratory (KTH)",
        university: "Myfab - National Infrastructure for Micro and Nanofabrication",
        country: "Sweden",
        topics: ["Silicon Carbide Power Electronics", "Semiconductor Device Physics", "MEMS Sensor Fabrication", "Nano-Scale CMOS"],
        source: "https://www.kth.se/profile/ostling",
        summary: "Pioneering semiconductor physicist recognized for transformative contributions to silicon carbide (SiC) power devices and wide-bandgap microelectronics."
      },
      {
        id: 1604,
        subject: "physics",
        name: "Prof. Dr. Heiner Linke",
        title: "Professor of Nanophysics and Director of NanoLund (Lund University)",
        university: "Myfab - National Infrastructure for Micro and Nanofabrication",
        country: "Sweden",
        topics: ["Semiconductor Nanowires", "Molecular Motors", "Quantum Thermodynamics", "Nanofabrication for Life Sciences"],
        source: "https://www.nano.lu.se/heiner-linke",
        summary: "Eminent nanoscientist leading NanoLund and Myfab nodes, investigating quantum thermoelectric phenomena in nanowires and artificial molecular motors."
      }
    ]
  },

  // 27. Netherlands - European Supply Chain Forum (TU/e - Eindhoven University of Technology) (Row 1405)
  {
    institution: "European Supply Chain Forum (TU/e - Eindhoven University of Technology)",
    shortName: "ESCF (TU Eindhoven)",
    slug: "escf-supply-chain-forum-tue-eindhoven",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Eindhoven, North Brabant, Netherlands",
    website: "https://www.tue.nl/en/research/institutes-and-clusters/escf",
    sourceRow: 1405,
    heroEyebrow: "Eindhoven, North Brabant · Brainport Innovation Region · High-Tech Logistics & AI Supply Chains",
    headline: "ESCF (TU/e Eindhoven): Operations Management, AI Logistics & PhD Guide",
    overview: "The European Supply Chain Forum (ESCF) is the premier collaborative research institute for supply chain innovation and operations management, embedded within the Department of Industrial Engineering and Innovation Sciences at Eindhoven University of Technology (TU/e). Situated in the heart of the Brainport Eindhoven high-tech region—surrounded by global leaders such as ASML, Philips, DAF Trucks, and NXP—ESCF bridges academic science and industrial application in circular supply chain analytics, spare-parts logistics, AI-driven demand forecasting, and autonomous freight operations.",
    description: "Explore the European Supply Chain Forum at TU/e Eindhoven: Master of Science in Operations Management and Logistics, fully funded PhDs, Brainport industrial scholarships, and top Dutch supply chain researchers.",
    admissions: {
      masters: "Accredited Bachelor of Science in Industrial Engineering, Operations Research, Applied Mathematics, or Computer Science with a minimum cumulative GPA of 75% or Dutch equivalent (7.0+); quantitative aptitude in stochastic modeling and linear programming required.",
      phd: "Recognized Master of Science in Industrial Engineering, Management Science, or Quantitative Economics with high honors; selection through competitive academic vacancies.",
      language: "TOEFL iBT 90 overall (minimum 21 in all sections) or IELTS Academic 6.5 overall (minimum 6.0 in all subscores).",
      proposal: "Required for doctoral applications: motivation letter, Master's thesis, and academic writing sample analyzing an operations research problem.",
      appFee: "€100 application evaluation fee for international degree holders.",
      documents: "Bachelor's/Master's diploma, complete academic transcripts, syllabus descriptions of quantitative mathematics and statistics courses, CV, and letters of recommendation."
    },
    tuitionText: "Tuition for EU/EEA students is the statutory Dutch rate of approximately €2,530 per academic year. Non-EU/EEA international tuition is approximately €17,500 to €19,800 per year. Fully funded doctoral candidates are employed as salaried university researchers earning €2,770 to €3,539 per month gross, with zero tuition and an 8.3% holiday allowance.",
    opportunities: [
      {
        id: 3700,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "mathematics"],
        type: "Scholarship",
        title: "TU/e ALSP Amandus H. Lundqvist International Scholarship at ESCF",
        source: "https://www.tue.nl/en/education/become-a-tue-student/scholarships-and-grants",
        funding: "Full tuition waiver (€19,800/year) + €5,000/year living allowance for 2 years",
        status: "Available",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual round)",
        fee: "€100",
        tuition: "€0 under ALSP scholarship",
        requirements: {
          gpa: "Top 10% graduating class standing with minimum 80% (or GPA 3.8/4.0)",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "GRE Revised General Test with 160+ Quantitative recommended",
          papers: "Letter of motivation detailing supply chain research ambitions",
          references: "Two academic referee letters"
        },
        desc: "Prestigious institutional scholarship awarded to exceptional non-EEA students admitted to the Master of Science in Operations Management and Logistics at TU Eindhoven."
      },
      {
        id: 3701,
        subject: "engineering",
        subjects: ["engineering", "social-sciences", "mathematics"],
        type: "PhD",
        title: "ESCF Fully Funded Doctoral Candidature in High-Tech Spare Parts & AI Logistics",
        source: "https://www.tue.nl/en/working-at-tue/phd-and-engd/",
        funding: "Four-year salaried appointment (€2,770-€3,539/month gross) + Dutch pension & benefits",
        status: "Available",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€0",
        tuition: "€0; full-time salaried Dutch university employment",
        requirements: {
          gpa: "Master of Science in Operations Research, Industrial Engineering, or Applied Mathematics with distinction",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Master's thesis and writing sample in supply chain optimization",
          references: "Two academic professor references"
        },
        desc: "Four-year doctoral research project co-sponsored by ASML and Philips, designing stochastic inventory models and predictive reinforcement learning algorithms for global lithography spare-parts networks."
      },
      {
        id: 3702,
        subject: "engineering",
        subjects: ["engineering", "social-sciences", "computer-science"],
        type: "Master's",
        title: "Master of Science in Operations Management and Logistics (MSc OML)",
        source: "https://www.tue.nl/en/education/graduate-school/master-operations-management-and-logistics",
        funding: "Direct industrial graduation projects embedded with Brainport high-tech multinationals",
        status: "Available",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (International applicant deadline)",
        fee: "€100",
        tuition: "€19,800 per academic year (international) / €2,530 (EU)",
        requirements: {
          gpa: "Bachelor's degree in engineering, quantitative economics, or mathematics (GPA 7.0/10)",
          ielts: "6.5 overall",
          gre: "GRE Quantitative 158+ required for non-Dutch bachelor's",
          papers: "Motivation statement and CV",
          references: "Two academic recommendations"
        },
        desc: "Two-year internationally acclaimed master's degree investigating stochastic inventory theory, multimodal transportation logistics, digital supply chain twins, and factory scheduling algorithms."
      },
      {
        id: 3703,
        subject: "social-sciences",
        subjects: ["social-sciences", "environment", "engineering"],
        type: "Master's",
        title: "Master of Science in Innovation Management and Sustainable Value Chains",
        source: "https://www.tue.nl/en/education/graduate-school/master-innovation-management",
        funding: "European Supply Chain Forum circular economy fellowship awards",
        status: "Available",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€100",
        tuition: "€19,800 per year (non-EU)",
        requirements: {
          gpa: "Bachelor of Science with strong quantitative and management foundations",
          ielts: "6.5 overall",
          gre: "Not required for Dutch BSc / GRE recommended for international",
          papers: "Statement of purpose",
          references: "Two academic letters"
        },
        desc: "Two-year degree analyzing the commercialization of emerging technologies, closed-loop circular supply networks, corporate sustainability metrics, and platform economics."
      },
      {
        id: 3704,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "Brainport High-Tech Supply Chain Postdoctoral Research Fellowship",
        source: "https://www.tue.nl/en/research/institutes-and-clusters/escf",
        funding: "€48,000-€58,000/year gross research salary plus university pension",
        status: "Available",
        deadline: null,
        deadlineText: "Continuous recruitment for NWO and EU Horizon Europe grants",
        fee: "€0",
        tuition: "Salaried academic research appointment",
        requirements: {
          gpa: "PhD in Operations Research, Industrial Engineering, or Algorithmic Optimization",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Top-tier publications in Management Science, Operations Research, or M&SOM",
          references: "Three academic referee reports"
        },
        desc: "Two-year postdoctoral position developing real-time prescriptive analytics and dynamic routing algorithms for zero-emission automated freight convoys across northwestern Europe."
      },
      {
        id: 3705,
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Internship",
        title: "Brainport Eindhoven High-Tech Supply Chain Graduate Thesis Internship",
        source: "https://www.tue.nl/en/research/institutes-and-clusters/escf/members-and-partners",
        funding: "Paid corporate thesis stipend (€900-€1,400/month) at ASML, DAF, or Philips",
        status: "Available",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Spring master's thesis round)",
        fee: "€0",
        tuition: "Curricular graduation project",
        requirements: {
          gpa: "Completion of 60 ECTS in TU/e Master of Science program with strong standing",
          ielts: "Enrolled student status",
          gre: "Not required",
          papers: "Master's thesis research proposal and corporate interview",
          references: "Academic graduation supervisor endorsement"
        },
        desc: "Six-month full-immersion graduation thesis project solving real-world semiconductor yield bottlenecks, supplier disruption mitigation, and cleanroom inventory logistics."
      },
      {
        id: 3706,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Course",
        title: "Executive Masterclass in Resilient Supply Chain Design & Machine Learning",
        source: "https://www.tue.nl/en/research/institutes-and-clusters/escf/executive-education",
        funding: "Corporate professional development certification",
        status: "Available",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "€0",
        tuition: "€3,800 course tuition",
        requirements: {
          gpa: "Minimum 5 years professional supply chain or logistics management experience",
          ielts: "Professional English",
          gre: "Not required",
          papers: "Executive curriculum vitae",
          references: "Employer sponsorship endorsement"
        },
        desc: "Intensive 4-day executive immersion for global supply chain directors, exploring AI demand sensing, geopolitical tariff resilience, and carbon accounting across tier-1 supplier ecosystems."
      }
    ],
    researchers: [
      {
        id: 1605,
        subject: "engineering",
        name: "Prof. Dr. Ir. Geert-Jan van Houtum",
        title: "Professor of Maintenance and Reliability and Academic Lead at ESCF",
        university: "European Supply Chain Forum (TU/e - Eindhoven University of Technology)",
        country: "Netherlands",
        topics: ["Spare Parts Inventory Management", "Capital Goods Reliability", "Stochastic Operations Research", "After-Sales Supply Chains"],
        source: "https://research.tue.nl/en/persons/geert-jan-van-houtum",
        summary: "World-leading scholar in capital goods spare-parts logistics; author of seminal models applied by ASML and the Dutch defence forces to minimize machine downtime."
      },
      {
        id: 1606,
        subject: "social-sciences",
        name: "Prof. Dr. Arjan van Weele",
        title: "Emeritus Professor of Purchasing and Supply Chain Management",
        university: "European Supply Chain Forum (TU/e - Eindhoven University of Technology)",
        country: "Netherlands",
        topics: ["Strategic Procurement", "Supplier Relationship Management", "Public Procurement Ethics", "Sustainable Sourcing"],
        source: "https://research.tue.nl/en/persons/arjan-van-weele",
        summary: "International pioneer in strategic purchasing and supply management; author of the foundational European textbook 'Purchasing and Supply Chain Management'."
      },
      {
        id: 1607,
        subject: "engineering",
        name: "Prof. Dr. Tom Van Woensel",
        title: "Professor of Freight Transport and Logistics and Director of ESCF",
        university: "European Supply Chain Forum (TU/e - Eindhoven University of Technology)",
        country: "Netherlands",
        topics: ["Queueing Systems in Transport", "Urban Freight Distribution", "Autonomous Delivery Logistics", "Dynamic Vehicle Routing"],
        source: "https://research.tue.nl/en/persons/tom-van-woensel",
        summary: "Operations research scholar investigating retail logistics, time-dependent traffic routing, stochastic queueing models, and drone delivery operations."
      }
    ]
  },

  // 28. Netherlands - Foundation Academy of Amsterdam (Row 1413)
  {
    institution: "Foundation Academy of Amsterdam",
    shortName: "Foundation Academy",
    slug: "foundation-academy-of-amsterdam",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://www.foundationacademy.nl",
    sourceRow: 1413,
    heroEyebrow: "Amsterdam, North Holland · Social Justice & Global Studies · Accessible Higher Education",
    headline: "Foundation Academy of Amsterdam: Human Rights, Global Studies & Ethics Guide",
    overview: "The Foundation Academy of Amsterdam is an innovative, community-based international higher education institution situated in Amsterdam. Dedicated to the democratization of global higher education, social justice, and refugee empowerment, the Academy offers accredited and validated undergraduate, graduate, and certificate programs in Human Rights, Global Leadership, Peace Studies, and International Sustainable Development, welcoming students from over 40 nationalities through hybrid and on-campus pedagogy.",
    description: "Explore Foundation Academy of Amsterdam: Human rights certificates, Master's in Global Leadership, refugee education scholarships, admissions procedures, and international activist faculty.",
    admissions: {
      masters: "Accredited Bachelor's degree in humanities, social sciences, law, or international development, or equivalent international credential; evidence of civic activism or community engagement.",
      phd: "Not applicable; alternative higher education academy focusing on certificates, diplomas, and validated master's degrees.",
      language: "Proficiency in English at CEFR B2 level (validated through personal interview, previous English-medium education, or standard test like IELTS 6.0 / Duolingo 105).",
      proposal: "Personal statement of purpose (500-800 words) describing commitment to global social justice, community human rights advocacy, and ethical leadership.",
      appFee: "€50 administrative application fee (waivers available for displaced scholars and asylum seekers).",
      documents: "Undergraduate degree certificate, academic transcripts, curriculum vitae, statement of purpose, one letter of recommendation, and copy of passport or residence card."
    },
    tuitionText: "Tuition is deliberately structured to maintain global accessibility, averaging €2,800 to €4,500 per academic year. Generous Global Justice Scholarships and Refugee Higher Education Grants provide up to 100% tuition waivers for displaced students and grassroots human rights defenders.",
    opportunities: [
      {
        id: 3707,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "Foundation Academy Global Social Justice & Refugee Tuition Scholarship",
        source: "https://www.foundationacademy.nl/admissions/scholarships/",
        funding: "Up to 100% full tuition waiver for displaced and marginalized scholars",
        status: "Available",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "€0",
        tuition: "€0 under scholarship",
        requirements: {
          gpa: "Demonstrated academic capability and documented involvement in grassroots community work",
          ielts: "B2 English proficiency",
          gre: "Not required",
          papers: "Personal essay on human rights resilience and community empowerment",
          references: "One letter of recommendation from an NGO or community organization"
        },
        desc: "Empowering scholarship supporting international students, refugees, and human rights defenders seeking higher education credentials in Amsterdam."
      },
      {
        id: 3708,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Arts in Global Leadership, Human Rights and Peace Studies",
        source: "https://www.foundationacademy.nl/programs/master-degrees/",
        funding: "Hybrid international classroom with human rights practitioners worldwide",
        status: "Available",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "€50",
        tuition: "€4,200 total program tuition",
        requirements: {
          gpa: "Bachelor's degree in any discipline",
          ielts: "6.0 overall or equivalent",
          gre: "Not required",
          papers: "Statement of purpose detailing global leadership objectives",
          references: "Two professional or academic references"
        },
        desc: "Two-year postgraduate degree analyzing international human rights treaties, transitional justice, grassroots peacebuilding, conflict mediation, and NGO governance."
      },
      {
        id: 3709,
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Bachelor's",
        title: "Bachelor of Arts in Sustainable Development and Global Migration Studies",
        source: "https://www.foundationacademy.nl/programs/bachelor-degrees/",
        funding: "Direct engagement with Amsterdam municipal refugee support networks",
        status: "Available",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        fee: "€50",
        tuition: "€3,200 per academic year",
        requirements: {
          gpa: "Secondary school graduation diploma qualifying for higher education",
          ielts: "B2 English",
          gre: "Not required",
          papers: "Motivation essay",
          references: "One reference letter"
        },
        desc: "Three-year undergraduate degree examining forced migration, climate change adaptation, international migrant rights, and sustainable local community economies."
      },
      {
        id: 3710,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "International Diploma in Non-Governmental Organization (NGO) Governance",
        source: "https://www.foundationacademy.nl/programs/diploma-courses/",
        funding: "Fundraising and grant-writing practical project mentoring",
        status: "Available",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€50",
        tuition: "€1,800 course fee",
        requirements: {
          gpa: "Secondary school completion with NGO or charity work interest",
          ielts: "Working English",
          gre: "Not required",
          papers: "Not required",
          references: "One reference"
        },
        desc: "One-year professional diploma training civil society leaders in EU grant procurement, international humanitarian compliance, donor reporting, and volunteer management."
      },
      {
        id: 3711,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        title: "Amsterdam Human Rights Defender Research Fellowship",
        source: "https://www.foundationacademy.nl/research/",
        funding: "€1,200/month research stipend + co-working desk in Amsterdam",
        status: "Available",
        deadline: null,
        deadlineText: "Rolling call for at-risk and displaced human rights researchers",
        fee: "€0",
        tuition: "Sponsored research fellowship",
        requirements: {
          gpa: "Demonstrated track record of human rights reporting, activism, or research",
          ielts: "Working English",
          gre: "Not required",
          papers: "Research brief detailing human rights documentation in home country",
          references: "Two human rights organization endorsements"
        },
        desc: "Six-month protected research residency providing safe academic harbour, publication mentorship, and international advocacy networking for threatened human rights advocates."
      },
      {
        id: 3712,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        title: "Amsterdam Intercultural Community Integration Practicum",
        source: "https://www.foundationacademy.nl/community-outreach/",
        funding: "Travel stipend and accredited community advocacy training",
        status: "Available",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "€0",
        tuition: "Curricular community internship",
        requirements: {
          gpa: "Enrolled in Foundation Academy degree or diploma",
          ielts: "Enrolled student standing",
          gre: "Not required",
          papers: "Reflective essay on community integration",
          references: "Faculty recommendation"
        },
        desc: "Semester-long community practicum co-designing language tutoring, legal orientation workshops, and cultural exchange programs for newly arrived migrants in Amsterdam."
      },
      {
        id: 3713,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Certificate in Digital Human Rights Documentation and OSINT Investigations",
        source: "https://www.foundationacademy.nl/courses/short-courses/",
        funding: "Co-developed with international digital verification coalitions",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "€650 course fee",
        requirements: {
          gpa: "Human rights advocates, journalists, or civil society researchers",
          ielts: "Working English",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Four-week technical module teaching geolocation verification, open-source intelligence (OSINT) tools, metadata preservation, and secure encrypted communications for field investigators."
      }
    ],
    researchers: [
      {
        id: 1608,
        subject: "social-sciences",
        name: "Dr. Samuel Lee",
        title: "Dean and Professor of Intercultural Theology and Global Human Rights",
        university: "Foundation Academy of Amsterdam",
        country: "Netherlands",
        topics: ["Migration Theology", "Intercultural Hermeneutics", "Global Refugee Policy", "Accessible Higher Education Models"],
        source: "https://www.foundationacademy.nl/faculty/samuel-lee/",
        summary: "Theologian, former Theologian of the Fatherland in the Netherlands, and social entrepreneur dedicated to refugee empowerment and democratized tertiary education."
      },
      {
        id: 1609,
        subject: "social-sciences",
        name: "Dr. Alistair Macdonald",
        title: "Senior Lecturer in Peace Studies and Conflict Transformation",
        university: "Foundation Academy of Amsterdam",
        country: "Netherlands",
        topics: ["Restorative Justice", "Grassroots Peacebuilding", "Conflict Mediation", "Civilian Protection in Armed Conflict"],
        source: "https://www.foundationacademy.nl/faculty/",
        summary: "Peace researcher and international mediator examining grassroots reconciliation mechanisms, community restorative justice circles, and nonviolent political action."
      },
      {
        id: 1610,
        subject: "social-sciences",
        name: "Fatima El-Khatib",
        title: "Director of Refugee Empowerment Studies and Community Outreach",
        university: "Foundation Academy of Amsterdam",
        country: "Netherlands",
        topics: ["Forced Migration Rights", "Migrant Integration Policy", "Gender and Asylum", "Community Empowerment Frameworks"],
        source: "https://www.foundationacademy.nl/faculty/",
        summary: "Human rights scholar and community organizer focusing on gender-based vulnerabilities in asylum systems and sustainable economic inclusion for displaced diaspora."
      }
    ]
  },

  // 29. Netherlands - Hogeschool de Kempel (Row 1426)
  {
    institution: "Hogeschool de Kempel",
    shortName: "De Kempel Helmond",
    slug: "hogeschool-de-kempel-helmond",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Helmond, North Brabant, Netherlands",
    website: "https://www.dekempel.nl",
    sourceRow: 1426,
    heroEyebrow: "Helmond, North Brabant · Rated #1 Teacher Education PABO in Netherlands · Educational Sciences",
    headline: "Hogeschool de Kempel: Primary Teacher Education, Pedagogical Innovation Guide",
    overview: "Hogeschool de Kempel is an internationally celebrated specialist university of applied sciences situated in Helmond, North Brabant, Netherlands. Consistently ranked the #1 teacher training institute (PABO - Pedagogische Academie voor het Basisonderwijs) in the Netherlands by national student satisfaction surveys (NSE) and Keuzegids Hbo, De Kempel educates future educators through innovative pedagogical models, neuroscience in early childhood education, educational technology integration, and inclusive classroom practices.",
    description: "Explore Hogeschool de Kempel in the Netherlands: Top-ranked primary teacher education (PABO), Master's in Educational Leadership, Erasmus+ teaching exchanges, and leading Dutch pedagogical scholars.",
    admissions: {
      masters: "Master of Educational Needs and Pedagogical Leadership requires an accredited Bachelor of Education (PABO) or equivalent first-cycle teaching degree, plus a minimum of two years of classroom teaching experience.",
      phd: "Not applicable; independent specialized university of applied sciences focusing on Bachelor of Education (B.Ed.) and Master of Education (M.Ed.) degrees.",
      language: "Dutch language proficiency (NT2 State Examination Program II) mandatory for standard teacher certification in the Netherlands; English B2 for international guest seminars and Erasmus+ exchange modules.",
      proposal: "Required for Master's applicants: professional development plan and school-based practice inquiry proposal (500-1,000 words).",
      appFee: "€0 direct application fee via Studielink.nl.",
      documents: "Secondary school diploma (HAVO, VWO, or international equivalent), national PABO entrance test results (geography, history, nature/technology for non-VWO holders), CV, and ID."
    },
    tuitionText: "Tuition is the statutory Dutch government fee of approximately €2,530 per academic year for Dutch and EU/EEA students. Institutional tuition for non-EEA students is approximately €8,500 to €9,500 per year. First-year Dutch teacher education students historically benefit from Dutch government tuition reductions.",
    opportunities: [
      {
        id: 3714,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        title: "De Kempel Top-Ranked Teacher Training Academic Excellence Bursary",
        source: "https://www.dekempel.nl/studeren-aan-de-kempel/studiekosten-en-subsidies",
        funding: "€1,500 tuition bursary + specialized educational research resources",
        status: "Available",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€0",
        tuition: "€2,530 statutory tuition (EU) / €8,900 (non-EU)",
        requirements: {
          gpa: "Top academic standing in HAVO/VWO secondary education with exemplary pedagogical motivation",
          ielts: "Dutch NT2 Program II",
          gre: "Not required",
          papers: "Pedagogical vision statement",
          references: "One school recommendation"
        },
        desc: "Institutional bursary recognizing prospective primary education students who demonstrate exceptional dedication to child development and inclusive classroom innovation."
      },
      {
        id: 3715,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Bachelor's",
        title: "Bachelor of Primary Education (PABO - #1 Rated Teacher Education Degree)",
        source: "https://www.dekempel.nl/opleidingen/voltijd-pabo",
        funding: "Subsidized full-time four-year degree qualifying for primary school teaching across the Netherlands",
        status: "Available",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€2,530 statutory fee per academic year",
        requirements: {
          gpa: "HAVO, VWO, or MBO-4 diploma with passing scores on national entrance tests",
          ielts: "Fluent Dutch (NT2)",
          gre: "Not required",
          papers: "Intake assessment and motivation interview",
          references: "Not required"
        },
        desc: "Consistently top-ranked 4-year Bachelor of Education program combining developmental psychology, subject didactics (reading, mathematics, STEM), and extensive school internships."
      },
      {
        id: 3716,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Master's",
        title: "Master of Educational Needs & Innovative Pedagogical Leadership (M.Ed.)",
        source: "https://www.dekempel.nl/opleidingen/master",
        funding: "Dutch Ministry of Education Teacher Grant (Lerarenbeurs) covers 100% of tuition",
        status: "Available",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "€0",
        tuition: "€2,530 statutory / covered by Lerarenbeurs",
        requirements: {
          gpa: "Bachelor of Education (PABO) with minimum 2 years primary teaching experience",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "Practice-oriented school improvement inquiry proposal",
          references: "School board/principal endorsement"
        },
        desc: "Two-year part-time master's degree training primary school teachers as educational leaders in differentiated instruction, neurodiversity inclusion, and digital pedagogical tools."
      },
      {
        id: 3717,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Course",
        title: "Academic PABO Dual Degree Pathway (with Radboud University Nijmegen)",
        source: "https://www.dekempel.nl/opleidingen/academische-pabo",
        funding: "Simultaneous Bachelor of Education and Bachelor of Educational Sciences",
        status: "Available",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€0",
        tuition: "Single statutory tuition rate (€2,530/year)",
        requirements: {
          gpa: "VWO diploma with strong mathematics and social science marks",
          ielts: "Dutch and English proficiency",
          gre: "Not required",
          papers: "Dual-degree entrance motivation letter",
          references: "Two academic evaluations"
        },
        desc: "Rigorous 4-year honors program offering a double bachelor's degree in primary education from De Kempel and educational sciences from Radboud University."
      },
      {
        id: 3718,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        title: "Kempel Pedagogical Research Centre Practitioner Research Fellowship",
        source: "https://www.dekempel.nl/onderzoek",
        funding: "0.2 FTE teaching buyout + €8,000 research project grant",
        status: "Available",
        deadline: null,
        deadlineText: "Annual research round for regional primary school teacher-researchers",
        fee: "€0",
        tuition: "Sponsored practitioner research grant",
        requirements: {
          gpa: "Master's degree in education or psychology and active teaching appointment",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "Classroom empirical inquiry design on early literacy or math cognition",
          references: "School director support letter"
        },
        desc: "One-year funded fellowship supporting classroom teachers conducting empirical practitioner research alongside De Kempel's professorships in educational science."
      },
      {
        id: 3719,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        title: "Brabant Primary Education Partnership Workplace Learning Internship",
        source: "https://www.dekempel.nl/samenwerken-met-de-kempel/opleiden-in-de-school",
        funding: "Guaranteed student teaching placements across 120 primary partner schools",
        status: "Available",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "€0",
        tuition: "Integrated practical curriculum component",
        requirements: {
          gpa: "Enrolled in De Kempel Bachelor of Education program",
          ielts: "Enrolled student standing",
          gre: "Not required",
          papers: "Certificate of Good Conduct (VOG) mandatory",
          references: "Faculty mentor placement approval"
        },
        desc: "Extensive workplace learning curriculum embedding student teachers into elementary classrooms from week one, progressing to autonomous full-term classroom instruction."
      },
      {
        id: 3720,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Course",
        title: "Creative Arts and Play Didactics for Early Childhood Education",
        source: "https://www.dekempel.nl/nascholing",
        funding: "Registerleraar continuing professional development credits",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "€850 module fee",
        requirements: {
          gpa: "Certified primary school or kindergarten teacher",
          ielts: "Dutch language",
          gre: "Not required",
          papers: "Not required",
          references: "Not required"
        },
        desc: "Six-week professional development course exploring sensory play materials, musical storytelling, children's theater pedagogy, and visual art expression for ages 4 to 8."
      }
    ],
    researchers: [
      {
        id: 1611,
        subject: "social-sciences",
        name: "Dr. Anouke Bakx",
        title: "Professor of Giftedness and Learning Potential (Lector)",
        university: "Hogeschool de Kempel",
        country: "Netherlands",
        topics: ["Gifted Education Didactics", "Cognitive Learning Potential", "Teacher Professionalization", "Differentiated Instruction"],
        source: "https://www.dekempel.nl/onderzoek/lectoraten/begaafdheid",
        summary: "Leading Dutch educational scientist heading De Kempel's professorship in giftedness; investigating how teachers identify and stimulate talent in primary school pupils."
      },
      {
        id: 1612,
        subject: "social-sciences",
        name: "Dr. Ludo Verhoeven",
        title: "Affiliated Academic Professor of Language and Literacy Development",
        university: "Hogeschool de Kempel",
        country: "Netherlands",
        topics: ["Early Reading Acquisition", "Dyslexia Diagnostics", "Bilingual Literacy Development", "Cognitive Neuroscience of Reading"],
        source: "https://www.dekempel.nl/onderzoek",
        summary: "Eminent reading scientist and developmental psychologist analyzing language acquisition, phonetic reading instruction, and remedial literacy interventions."
      },
      {
        id: 1613,
        subject: "social-sciences",
        name: "Marc van den Hurk",
        title: "Dean and Chair of the Executive Board",
        university: "Hogeschool de Kempel",
        country: "Netherlands",
        topics: ["Educational Leadership", "PABO Curriculum Innovation", "School-University Partnerships", "Quality Management in Education"],
        source: "https://www.dekempel.nl/over-de-kempel/organisatie",
        summary: "Executive educational director who led De Kempel to consecutive #1 rankings in the Netherlands through rigorous pedagogical standards and school network integration."
      }
    ]
  },

  // 30. Netherlands - Saxion University of Applied Sciences (Deventer Campus) (Row 1427)
  {
    institution: "Saxion University of Applied Sciences (Deventer Campus)",
    shortName: "Saxion Deventer",
    slug: "saxion-university-applied-sciences-deventer",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Deventer, Overijssel, Netherlands",
    website: "https://www.saxion.edu",
    sourceRow: 1427,
    heroEyebrow: "Deventer, Overijssel · Historic Hanseatic City · Sustainable Architecture, IT & Urban Technology",
    headline: "Saxion Deventer: Applied Computer Science, Urban Design & Engineering Guide",
    overview: "Saxion University of Applied Sciences is one of the largest universities of applied sciences in the Netherlands, educating over 27,000 students. Its picturesque Deventer campus—located within walking distance of the historic Hanseatic city centre along the River IJssel—specializes in high-demand international programs in Information Technology, Software Engineering, Urban and Regional Planning, Environmental Technology, and International Business. Saxion's living technology philosophy embeds students directly into real regional engineering and municipal innovation challenges.",
    description: "Explore Saxion University of Applied Sciences Deventer Campus: Bachelor of Applied Computer Science, Urban Design, NL Scholarship funding, admissions criteria, and engineering faculty.",
    admissions: {
      masters: "Accredited Bachelor's degree in engineering, urban technology, computer science, or environmental management; academic pre-assessment evaluating technical prerequisites.",
      phd: "Not applicable; applied university focusing on professional Bachelor's and Master's degrees with applied research professorships (lectoraten).",
      language: "IELTS Academic 6.0 overall (minimum 5.0 or 5.5 in all bands) or TOEFL iBT 80 for bachelor's programs; IELTS 6.5 overall for master's programs.",
      proposal: "Statement of motivation explaining choice of program, technical enthusiasm, and alignment with living technology themes.",
      appFee: "€0 application fee for direct international applications via Studielink.",
      documents: "Secondary school graduation diploma, complete official transcripts, proof of English proficiency, motivation letter, curriculum vitae, and passport copy."
    },
    tuitionText: "Tuition for EU/EEA students is the statutory Dutch fee of approximately €2,530 per academic year. Non-EEA international tuition ranges from €8,500 to €11,500 per year. Saxion awards numerous prestigious scholarships including the Holland Scholarship / NL Scholarship (€5,000) and Saxion Living Technology Scholarships.",
    opportunities: [
      {
        id: 3721,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        title: "Saxion Holland Scholarship / NL Scholarship for International Students",
        source: "https://www.saxion.edu/studying-in-the-netherlands/scholarships",
        funding: "€5,000 one-time financial grant awarded in the first year of study",
        status: "Available",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€0",
        tuition: "€8,900 per academic year (before scholarship)",
        requirements: {
          gpa: "Outstanding secondary school academic record (GPA 7.5/10 or equivalent)",
          ielts: "6.0 overall (minimum 5.5 in all bands)",
          gre: "Not required",
          papers: "Motivation letter detailing Living Technology perspective",
          references: "One academic reference letter"
        },
        desc: "Dutch government-financed scholarship awarding €5,000 to talented non-EEA students commencing their bachelor's or master's studies at Saxion Deventer."
      },
      {
        id: 3722,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Bachelor's",
        title: "Bachelor of Science in Applied Computer Science (Software Engineering)",
        source: "https://www.saxion.edu/programmes/bachelor/applied-computer-science",
        funding: "Mandatory third-year commercial internship and fourth-year corporate graduation thesis",
        status: "Available",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€8,900 per academic year (non-EU) / €2,530 (EU)",
        requirements: {
          gpa: "Secondary school diploma with high marks in advanced mathematics",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Motivation letter",
          references: "Not required"
        },
        desc: "Four-year English-taught engineering degree mastering embedded systems, IoT sensors, cloud computing, cybersecurity, and real-time C++ and Python development."
      },
      {
        id: 3723,
        subject: "arts-design",
        subjects: ["arts-design", "environment", "engineering"],
        type: "Bachelor's",
        title: "Bachelor of Urban and Regional Planning (Urban Design Specialization)",
        source: "https://www.saxion.edu/programmes/bachelor/urban-and-regional-planning",
        funding: "Live urban design studios with the Municipality of Deventer and Dutch water boards",
        status: "Available",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€8,900 per year",
        requirements: {
          gpa: "Secondary school completion qualifying for university entrance",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Creative design sample or spatial vision essay",
          references: "Not required"
        },
        desc: "Four-year degree exploring climate-adaptive city design, sponge cities, Dutch flood defense systems, mass transit integration, and GIS cartography."
      },
      {
        id: 3724,
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Bachelor's",
        title: "Bachelor of Environmental Science for Sustainable Energy and Technology",
        source: "https://www.saxion.edu/programmes/bachelor/environmental-science",
        funding: "Laboratory work in water analysis, biogas digestors, and solar test fields",
        status: "Available",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€8,900 per year",
        requirements: {
          gpa: "High school completion with chemistry and mathematics",
          ielts: "6.0 overall",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "Not required"
        },
        desc: "Four-year applied environmental engineering degree analyzing soil remediation, wastewater purification technologies, circular materials, and renewable energy grids."
      },
      {
        id: 3725,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Master of Science in Applied Nanotechnology (Inter-Campus Specialization)",
        source: "https://www.saxion.edu/programmes/master/applied-nanotechnology",
        funding: "Access to Saxion NanoLab cleanroom facilities and micro-spectroscopy",
        status: "Available",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€0",
        tuition: "€11,500 per year",
        requirements: {
          gpa: "Bachelor's degree in chemistry, physics, materials science, or electrical engineering",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Technical motivation letter",
          references: "Two academic letters"
        },
        desc: "One-year specialized master's degree exploring microfluidics, lab-on-a-chip diagnostic sensors, surface chemistry modifications, and nanomaterial toxicity."
      },
      {
        id: 3726,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Overijssel CleanTech & Smart City Engineering Work Placement",
        source: "https://www.saxion.edu/about-saxion/working-together",
        funding: "Paid commercial internship (€500-€800/month stipend)",
        status: "Available",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "Degree-integrated practical module",
        requirements: {
          gpa: "Saxion 3rd-year student with all first-year credits (Propedeuse) completed",
          ielts: "Enrolled student standing",
          gre: "Not required",
          papers: "Technical portfolio and CV",
          references: "Faculty internship coordinator sign-off"
        },
        desc: "Five-month embedded internship placed within Dutch engineering consultancies, smart sensor manufacturers, or water boards across eastern Netherlands."
      },
      {
        id: 3727,
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Course",
        title: "Circular Water Management and Climate Adaptation Summer School",
        source: "https://www.saxion.edu/short-courses",
        funding: "Field excursions to the historic IJssel river dikes and Delta Works projects",
        status: "Available",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€0",
        tuition: "€1,200 course fee including excursions",
        requirements: {
          gpa: "Undergraduate student in civil engineering, environment, or geography",
          ielts: "B2 English",
          gre: "Not required",
          papers: "Short motivation essay",
          references: "Not required"
        },
        desc: "Two-week summer intensive examining Dutch water defense engineering, floating architecture, urban heat island mitigation, and circular stormwater catchment."
      }
    ],
    researchers: [
      {
        id: 1614,
        subject: "computer-science",
        name: "Dr. Ir. Javier Ferreira Gonzalez",
        title: "Professor of Applied Artificial Intelligence and Ambient Intelligence (Lector)",
        university: "Saxion University of Applied Sciences (Deventer Campus)",
        country: "Netherlands",
        topics: ["Ambient Intelligence", "IoT Edge Computing", "Computer Vision for Smart Cities", "Predictive Sensor Analytics"],
        source: "https://www.saxion.edu/research/smart-industry",
        summary: "Computer engineering scholar leading applied AI research into smart sensor networks, assistive eldercare robotics, and machine learning at the edge."
      },
      {
        id: 1615,
        subject: "environment",
        name: "Dr. Harry Futselaar",
        title: "Professor of International Water Technology and Circular Resources (Lector)",
        university: "Saxion University of Applied Sciences (Deventer Campus)",
        country: "Netherlands",
        topics: ["Membrane Filtration", "Circular Wastewater Treatment", "Micropollutant Removal", "Industrial Water Reclamation"],
        source: "https://www.saxion.edu/research/sustainable-living",
        summary: "Eminent water technology researcher investigating membrane bioreactors, PFAS and drug residue extraction from wastewater, and industrial zero-liquid discharge."
      },
      {
        id: 1616,
        subject: "arts-design",
        name: "Drs. Eric Luiten",
        title: "Professor of Spatial Design and Living Environment (Lector)",
        university: "Saxion University of Applied Sciences (Deventer Campus)",
        country: "Netherlands",
        topics: ["Landscape Architecture", "Climate-Adaptive Urban Planning", "Hanseatic Spatial Heritage", "Regional Water Transitions"],
        source: "https://www.saxion.edu/research/sustainable-living",
        summary: "Landscape architect and spatial planner advising Dutch regional authorities on climate-adaptive urban transformations, river basin resilience, and historic heritage."
      }
    ]
  }
];
