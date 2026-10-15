// Batch 43 - Part 3: Universities 21 to 30
// UK (2), Japan (4), Netherlands (4)
// Opps: 5128 to 5197 (70 opps)
// Researchers: 2217 to 2246 (30 researchers)

export const part3Universities = [
  // 21. UK: New York University in London (NYU London)
  {
    institution: "New York University in London (NYU London)",
    slug: "new-york-university-in-london-nyu-london",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1275,
    location: "Bloomsbury, London, UK",
    website: "https://www.nyu.edu/london.html",
    shortName: "NYU London",
    badge: "Global Research University Centre",
    overview: "New York University in London (NYU London), situated on Bedford Square in Bloomsbury, is the largest global academic center of New York University, providing rigorous undergraduate and graduate coursework in theatre arts (in partnership with RADA), global business, international relations, literature, and STEM research with access to London's preeminent cultural and financial institutions.",
    lead: "Explore global semester and year-long study abroad programs, dramatic arts conservatories with RADA, and global research fellowships at NYU London.",
    description: "New York University in London (NYU London) global academic programs, RADA dramatic training, international relations, and NYU study abroad grants.",
    quickFacts: {
      type: "Private Global Research University Center",
      campus: "Bedford Square Academic Centre, Bloomsbury, London, UK",
      accreditation: "Middle States Commission on Higher Education (MSCHE) / Quality Assurance Agency (QAA) Reviewed",
      admissions: "Competitive NYU Global Programs admissions portal",
      language: "English (100% English medium of instruction)",
      aid: "NYU Global Pathways Grants, Need-Based Study Abroad Scholarships & US Title IV Aid"
    },
    strengths: [
      "Distinguished partnership with the Royal Academy of Dramatic Art (RADA) for intensive Shakespearean conservatory acting",
      "Prime Bloomsbury location adjacent to the British Museum, British Library, and University of London academic network",
      "Specialized Stern School of Business global finance and fintech curriculum integrated with the City of London",
      "Extensive experiential learning with British policy think tanks, NGOs, media networks, and research archives"
    ],
    programs: [
      { title: "NYU / RADA Shakespeare & Dramatic Acting Conservatory", level: "Global Conservatory Program", desc: "Intensive classical British conservatory training in text analysis, voice production, stage combat, and movement delivered by RADA faculty." },
      { title: "Stern Business & Global Financial Markets Track", level: "Undergraduate Business Program", desc: "Corporate finance, European capital markets, international fintech ecosystems, and corporate governance in London's financial district." },
      { title: "Global Public Policy & International Relations Semester", level: "Undergraduate / Graduate Program", desc: "In-depth study of British parliamentary democracy, European security architectures, and international human rights jurisprudence." }
    ],
    opportunities: [
      {
        id: 5128,
        title: "NYU Global Pathways London Study Abroad Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Need- and merit-based grant assisting undergraduate scholars with travel and accommodation expenses during a semester or academic year at NYU London.",
        funding: "Up to $4,000 direct housing and travel stipend",
        fee: "$0 application fee for matriculated students",
        tuition: "Standard NYU home campus undergraduate tuition applies",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.nyu.edu/academics/studying-abroad/upperclassmen-semesters-abroad/scholarships.html",
        requirements: {
          gpa: "Minimum cumulative GPA of 3.0 on a 4.0 scale",
          ielts: "English fluency",
          gre: "Not required",
          papers: "500-word personal statement describing academic integration with London's institutions",
          references: "One academic faculty recommendation"
        }
      },
      {
        id: 5129,
        title: "NYU / RADA Dramatic Conservatory Semester Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Comprehensive 16-credit conservatory semester delivered in collaboration with RADA focusing on heightened text, voice, Alexander technique, and scene study.",
        funding: "Tisch School of the Arts drama scholarships and global experiential grants applicable",
        fee: "$0",
        tuition: "Standard NYU semester tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://tisch.nyu.edu/drama/study-abroad/london",
        requirements: {
          gpa: "Drama major or approved audition profile",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Audition performance (two contrasting Shakespearean and contemporary monologues)",
          references: "RADA audition panel approval"
        }
      },
      {
        id: 5130,
        title: "Bloomsbury Cultural Institution & Museum Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Structured 14-week academic internship placed within London galleries, heritage foundations, publishing houses, or NGOs.",
        funding: "Academic credit (4 credits) and travel expense bursary provided",
        fee: "Covered by semester tuition",
        tuition: "Covered by semester tuition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nyu.edu/london/academics/internships.html",
        requirements: {
          gpa: "Junior or Senior standing with minimum 3.2 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "UK-formatted CV and cover letter for designated host organization",
          references: "NYU London internship coordinator interview"
        }
      },
      {
        id: 5131,
        title: "City of London Financial Markets & FinTech Seminar",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Upper-level finance seminar examining Bank of England monetary policy, European fintech innovation, and global foreign exchange derivatives.",
        funding: "Stern Global Experience grants available",
        fee: "$0",
        tuition: "Standard NYU tuition",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.nyu.edu/london/academics/courses.html",
        requirements: {
          gpa: "Prerequisites in Corporate Finance and Microeconomics with B or better",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Transcript evaluation",
          references: "One economics/finance professor reference"
        }
      },
      {
        id: 5132,
        title: "British Library Archival Research Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Grant supporting original undergraduate thesis research using primary source collections at the British Library, National Archives (Kew), or Wellcome Collection.",
        funding: "$1,500 research material, travel, and photographic reprographics grant",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.nyu.edu/london/academics/research-opportunities.html",
        requirements: {
          gpa: "Enrolled student at NYU London with minimum 3.5 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "1,000-word archival research proposal outlining specific manuscripts and research questions",
          references: "Endorsement by NYU London faculty sponsor"
        }
      },
      {
        id: 5133,
        title: "Transatlantic Environmental Policy & Urban Sustainability Seminar",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Comparative environmental studies seminar analyzing London's Ultra Low Emission Zone (ULEZ), European climate legislation, and municipal decarbonization.",
        funding: "Study abroad bursaries available",
        fee: "$0",
        tuition: "Standard NYU tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nyu.edu/london/academics/courses.html",
        requirements: {
          gpa: "Good academic standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Environmental policy brief",
          references: "Not required"
        }
      },
      {
        id: 5134,
        title: "NYU London Visiting Global Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Postdoctoral or senior visiting fellowship conducting collaborative comparative transatlantic research in humanities, politics, or dramatic literature.",
        funding: "£15,000 research stipend and dedicated office space in Bedford Square",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://www.nyu.edu/london/about-us.html",
        requirements: {
          gpa: "Ph.D. in a relevant humanities or social science discipline with international publication record",
          ielts: "English native or bilingual fluency",
          gre: "Not required",
          papers: "10-page research monograph plan and public lecture series proposal",
          references: "Three academic letters of recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2217,
        name: "Dr. Catherine Montgomery",
        title: "Director of NYU London",
        department: "Executive Leadership",
        topics: ["Transatlantic Higher Education", "International Student Mobilities", "Comparative Pedagogy"],
        summary: "Dr. Catherine Montgomery leads NYU London, directing academic operations and international research partnerships, focusing on global curricular design, intercultural competence, and student mobility frameworks.",
        website: "https://www.nyu.edu/london/about-us/staff-directory.html",
        source: "https://www.nyu.edu/london/about-us/staff-directory.html",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2218,
        name: "Geoff Bullen",
        title: "Lead Drama Faculty & Associate Director, RADA",
        department: "Tisch School of the Arts / RADA Program",
        topics: ["Shakespearean Textual Analysis", "Classical Acting Pedagogies", "Voice and Movement Integration"],
        summary: "Geoff Bullen, an acclaimed British theatre director and senior RADA instructor, trains conservatory acting students at NYU London in heightened verse, physical characterization, and Elizabethan dramatic dramaturgy.",
        website: "https://www.rada.ac.uk/profiles/geoff-bullen/",
        source: "https://www.rada.ac.uk/profiles/geoff-bullen/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2219,
        name: "Dr. Robin Vandome",
        title: "Lecturer in Intellectual History & American Studies",
        department: "Department of History and Humanities",
        topics: ["History of Modern Science", "Transatlantic Intellectual Exchange", "Environmental Thought"],
        summary: "Dr. Robin Vandome investigates the history of modern scientific ideas, Anglo-American intellectual relations, and the philosophical foundations of ecological thought across the 19th and 20th centuries.",
        website: "https://www.nyu.edu/london/academics/faculty.html",
        source: "https://www.nyu.edu/london/academics/faculty.html",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 22. UK: Newcastle University International Study Centre
  {
    institution: "Newcastle University International Study Centre",
    slug: "newcastle-university-international-study-centre",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1278,
    location: "Newcastle upon Tyne, Tyne and Wear, UK",
    website: "https://www.ncl.ac.uk/international-study-centre/",
    shortName: "Newcastle ISC",
    badge: "Russell Group University Pathways",
    overview: "Newcastle University International Study Centre (operated in partnership with INTO Newcastle University) is an accredited pathway college situated directly on the campus of Newcastle University—a prestigious member of the UK's Russell Group—providing International Foundation, International Year One, and Pre-Master's programs with guaranteed progression into world-leading degree programs upon meeting academic criteria.",
    lead: "Explore International Foundation, Year One engineering and computing pathways, and Russell Group progression scholarships at Newcastle University ISC.",
    description: "Newcastle University International Study Centre (INTO) pathway programs in engineering, computer science, medicine, and Russell Group university scholarships.",
    quickFacts: {
      type: "University Pathway College (INTO / Newcastle University)",
      campus: "Newcastle University City Campus, The INTO Building, Newcastle upon Tyne, UK",
      accreditation: "British Council Accredited / QAA Higher Education Review",
      admissions: "Direct online application with rolling entry points (September, January)",
      language: "English (IELTS for UKVI 5.0 to 6.0 depending on program pathway)",
      aid: "Newcastle University International Progression Scholarships & INTO Merit Awards"
    },
    strengths: [
      "Direct on-campus integration providing full access to Newcastle University libraries, computing clusters, and student union",
      "Guaranteed progression into over 200 Newcastle University undergraduate and postgraduate honours degrees",
      "Dedicated state-of-the-art building with science laboratories, architecture studios, and smart lecture theatres",
      "Over 93% success rate of pathway students successfully transitioning to their chosen degree programs"
    ],
    programs: [
      { title: "International Foundation in Physical Sciences & Engineering", level: "University Foundation Program", desc: "Two-to-three term foundation preparing international students for bachelor degrees in mechanical, civil, chemical, and electrical engineering." },
      { title: "International Year One in Computer Science", level: "Undergraduate Year 1 Pathway", desc: "Intensive first-year degree equivalent delivering 120 credits in Java programming, computer systems, algorithms, and web engineering with direct entry to Year 2." },
      { title: "Pre-Master's in Business, Law and Social Sciences", level: "Postgraduate Preparation Pathway", desc: "Two-term bridge developing postgraduate research methodologies, critical analysis, and dissertation writing for master's degree progression." }
    ],
    opportunities: [
      {
        id: 5135,
        title: "Newcastle ISC International Academic Merit Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Merit-based tuition fee reduction awarded to high-achieving international applicants accepted into Foundation or International Year One pathways.",
        funding: "Up to £4,000 direct reduction applied against pathway course tuition fees",
        fee: "£0 application fee",
        tuition: "£18,500 to £22,000 per pathway program",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/fees-and-scholarships/",
        requirements: {
          gpa: "Strong secondary school graduation marks (equivalent to BBC at A-Level or 75%+ national high school average)",
          ielts: "IELTS for UKVI 5.5 overall with no individual score below 5.0",
          gre: "Not required",
          papers: "500-word personal statement describing degree ambitions at Newcastle University",
          references: "One academic letter of reference"
        }
      },
      {
        id: 5136,
        title: "International Foundation in Engineering & Physical Sciences Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Nine-month comprehensive foundation covering advanced mathematics, physical mechanics, materials engineering, and academic English for university study.",
        funding: "Eligible for Newcastle University £3,000/year progression scholarships upon successful completion",
        fee: "£0 application fee",
        tuition: "£20,500 full foundation tuition",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/programmes/foundation-engineering/",
        requirements: {
          gpa: "Completed 12 years of schooling with strong grades in mathematics and physics",
          ielts: "IELTS for UKVI 5.5 overall (minimum 5.0 in writing)",
          gre: "Not required",
          papers: "High school transcripts and graduation certificate",
          references: "One teacher recommendation"
        }
      },
      {
        id: 5137,
        title: "International Year One in Computer Science Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Full first-year university degree equivalent providing direct progression into Year 2 of the BSc (Hons) Computer Science at Newcastle University.",
        funding: "Merit scholarships available and access to university campus work opportunities",
        fee: "£0",
        tuition: "£21,200 full program tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/programmes/iy1-computer-science/",
        requirements: {
          gpa: "Good high school completion plus one year of further study or higher secondary qualifications",
          ielts: "IELTS for UKVI 5.5 (minimum 5.5 in reading and writing)",
          gre: "Not required",
          papers: "Evidence of quantitative and computing aptitude",
          references: "One academic referee"
        }
      },
      {
        id: 5138,
        title: "Newcastle Robotics & Clean Energy Laboratory Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "8-week summer laboratory research practicum working alongside Newcastle University doctoral researchers on renewable marine turbine testing.",
        funding: "£1,200 monthly laboratory research allowance",
        fee: "Covered by pathway tuition",
        tuition: "Covered by pathway tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.ncl.ac.uk/engineering/facilities/",
        requirements: {
          gpa: "Distinction-level standing in Foundation Engineering mathematics and physics modules",
          ielts: "IELTS for UKVI 6.0",
          gre: "Not required",
          papers: "Lab safety assessment and engineering research project plan",
          references: "Endorsement from Newcastle engineering academic tutor"
        }
      },
      {
        id: 5139,
        title: "Pre-Master's in Business and Social Sciences Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Two-term bridge course for international graduates preparing for master's programs in finance, marketing, international development, or law.",
        funding: "Progression fee waivers awarded for distinction graduates",
        fee: "£0",
        tuition: "£19,800 complete program tuition",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/programmes/pre-masters/",
        requirements: {
          gpa: "Recognized undergraduate diploma or bachelor's degree",
          ielts: "IELTS for UKVI 5.5 overall",
          gre: "Not required",
          papers: "Statement of purpose for master's study",
          references: "One university professor recommendation"
        }
      },
      {
        id: 5140,
        title: "Newcastle International Student Leadership Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Grant awarded to student ambassadors organizing international student induction, cross-cultural forums, and academic peer tutoring.",
        funding: "£1,500 leadership grant applied toward university tuition",
        fee: "£0",
        tuition: "Standard tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/",
        requirements: {
          gpa: "Active enrollment with attendance record >= 95% and minimum 65% grade average",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Peer mentoring leadership proposal",
          references: "Student services team recommendation"
        }
      },
      {
        id: 5141,
        title: "Russell Group Degree Progression Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Prestigious university fellowship awarded to the top graduating pathway student progressing into an engineering honours degree at Newcastle University.",
        funding: "£5,000 annual scholarship renewable for each year of undergraduate degree study",
        fee: "£0",
        tuition: "£0",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.ncl.ac.uk/international-study-centre/fees-and-scholarships/",
        requirements: {
          gpa: "Ranked 1st in pathway cohort with overall course marks above 80%",
          ielts: "English language proficiency verified",
          gre: "Not required",
          papers: "Academic achievement dossier and faculty nomination",
          references: "Academic Joint Board endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2220,
        name: "Dr. Kevin Conroy",
        title: "Centre Director, Newcastle ISC",
        department: "Executive Management",
        topics: ["Transnational Higher Education Transitions", "International Foundation Pedagogy", "Academic Language Integration"],
        summary: "Dr. Kevin Conroy oversees the academic and operational leadership of Newcastle ISC, researching transnational student adaptation, English for Academic Purposes (EAP) immersion, and STEM foundation curricula.",
        website: "https://www.ncl.ac.uk/international-study-centre/about-us/",
        source: "https://www.ncl.ac.uk/international-study-centre/about-us/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2221,
        name: "Dr. Paul Sallis",
        title: "Professor of Environmental Engineering, Newcastle University",
        department: "School of Engineering",
        topics: ["Anaerobic Digestion", "Bioelectrochemical Systems", "Wastewater Bioremediation"],
        summary: "Dr. Paul Sallis leads research into wastewater biotechnology, microbial fuel cells, and sustainable anaerobic bioprocesses, mentoring international engineering students on sustainable infrastructure design.",
        website: "https://www.ncl.ac.uk/engineering/staff/profile/paulsallis.html",
        source: "https://www.ncl.ac.uk/engineering/staff/profile/paulsallis.html",
        recruiting: "Not verified",
        subject: "engineering"
      },
      {
        id: 2222,
        name: "Dr. Matthew Forshaw",
        title: "Senior Lecturer in Data Science & National Skills Lead",
        department: "School of Computing",
        topics: ["Energy-Efficient Cloud Computing", "Data Science Pedagogy", "Distributed Systems Analytics"],
        summary: "Dr. Matthew Forshaw investigates green cloud computing architectures and national data science education, advising international computing students on data systems and high-throughput computing.",
        website: "https://www.ncl.ac.uk/computing/staff/profile/matthewforshaw.html",
        source: "https://www.ncl.ac.uk/computing/staff/profile/matthewforshaw.html",
        recruiting: "Not verified",
        subject: "computer-science"
      }
    ]
  },

  // 23. Japan: Kobe Kaisei College
  {
    institution: "Kobe Kaisei College",
    slug: "kobe-kaisei-college",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1676,
    location: "Kobe, Hyogo, Japan",
    website: "https://www.kaisei.ac.jp",
    shortName: "Kobe Kaisei",
    badge: "Humanities, Languages & Education College",
    overview: "Kobe Kaisei College (Kobe Kaisei Joshi Gakuin Daigaku), founded in 1955 by the Roman Catholic Congregation of the Sisters of the Holy Family in Nada Ward, Kobe, is an esteemed private women's college providing specialized undergraduate education in English studies, French language, child development, intercultural communication, and Japanese teacher licensure.",
    lead: "Explore undergraduate degrees in English literature, early childhood education, teacher licensure, and Hyogo scholarship bursaries at Kobe Kaisei College in Nada Ward, Kobe.",
    description: "Kobe Kaisei College accredited undergraduate programs in English language, early child development, teacher licensing, and international student scholarships.",
    quickFacts: {
      type: "Private Catholic Women's College (Joshi Daigaku)",
      campus: "Nada Ward Campus (Aotanicho), Kobe, Hyogo, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "General entrance examination, Recommendation admissions (Suisen), and International applicant screening",
      language: "Japanese (JLPT N2/N1 for standard degree study) with intensive English/French tracks",
      aid: "Kaisei Sisterhood Merit Scholarships, JASSO Honors Scholarships & Hyogo Prefectural Grants"
    },
    strengths: [
      "Distinguished tradition in European linguistic instruction with small-group tutorial classes in English and French",
      "Department of Child Education offering dual national certifications in Nursery Teacher (Hoikushi) and Kindergarten Teacher",
      "Scenic hillside campus overlooking Kobe Harbour and Osaka Bay with serene chapel architecture",
      "Robust study abroad exchange agreements with partner Catholic universities in France, Canada, and the United States"
    ],
    programs: [
      { title: "Bachelor of Arts in English Studies & Global Communication", level: "Bachelor of Arts (Gakushi)", desc: "Four-year curriculum developing high-level bilingual fluency, British and American literature, translation methodologies, and cross-cultural business communication." },
      { title: "Bachelor of Arts in Child Development & Early Education", level: "Bachelor of Arts (Gakushi)", desc: "Accredited four-year educator program delivering certified licensing in kindergarten pedagogy, infant development, and childhood psychology." },
      { title: "Specialized Certificate in Japanese Language Pedagogy", level: "Undergraduate Certificate", desc: "Two-year teacher training curriculum preparing graduates to instruct Japanese as a foreign language in schools and international institutions." }
    ],
    opportunities: [
      {
        id: 5142,
        title: "Kobe Kaisei Founder's Memorial International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Tuition reduction scholarship awarded to outstanding international female students admitted to the Faculty of Humanities.",
        funding: "30% to 50% tuition reduction (valued up to ¥400,000 per academic year)",
        fee: "¥15,000 entrance examination fee",
        tuition: "Approx. ¥1,150,000 per academic year before scholarship",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kaisei.ac.jp/admissions/scholarships/",
        requirements: {
          gpa: "Completed 12 years of formal schooling with equivalent GPA >= 3.0",
          ielts: "JLPT N2 or higher (or EJU Japanese score >= 220); English proficiency evaluated favorably",
          gre: "Not required",
          papers: "800-character Japanese statement of purpose and essay on women's global leadership",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5143,
        title: "B.A. in English & Intercultural Communication Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Four-year undergraduate degree exploring English literature, linguistics, simultaneous interpreting fundamentals, and international cultural studies.",
        funding: "JASSO foreign student scholarship eligibility (¥48,000/month stipend)",
        fee: "¥15,000 examination fee",
        tuition: "¥1,120,000 per academic year",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kaisei.ac.jp/faculty/english/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "JLPT N2 and basic English skills (TOEIC 550+ or EIKEN Grade 2)",
          gre: "Not required",
          papers: "High school transcripts and interview in Japanese and English",
          references: "Principal recommendation"
        }
      },
      {
        id: 5144,
        title: "Kobe Early Childhood Kindergarten & Nursery Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "8-week mandatory teaching practicum conducted in licensed kindergartens and nursery schools across Nada Ward and Kobe City.",
        funding: "Earns statutory credits for national Hoikushi and Kindergarten Teacher Class 1 licensing",
        fee: "Covered by college tuition",
        tuition: "Covered by college tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kaisei.ac.jp/faculty/childhood/",
        requirements: {
          gpa: "Successful completion of prerequisite child psychology and piano accompaniment modules",
          ielts: "Native or near-native Japanese fluency",
          gre: "Not required",
          papers: "Child health clearance and medical certificate",
          references: "Practicum supervisor approval"
        }
      },
      {
        id: 5145,
        title: "B.A. in Child Development & Educational Psychology Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Four-year specialized degree training professional educators in infant emotional development, inclusive child support, and family counseling.",
        funding: "Hyogo prefectural child care worker loan forgiveness program eligible",
        fee: "¥15,000 examination fee",
        tuition: "¥1,180,000 per academic year",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.kaisei.ac.jp/faculty/childhood/",
        requirements: {
          gpa: "High school diploma",
          ielts: "JLPT N1 or native Japanese",
          gre: "Not required",
          papers: "Personal essay on early educational philosophy",
          references: "One teacher recommendation"
        }
      },
      {
        id: 5146,
        title: "French Language & Francophone Culture Exchange Grant",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Travel grant supporting students undertaking semester language immersion at partner Catholic institutes in France and Belgium.",
        funding: "¥250,000 travel and living subsidy",
        fee: "¥0",
        tuition: "Standard home tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kaisei.ac.jp/international/study-abroad/",
        requirements: {
          gpa: "Minimum 3.2 GPA in French language coursework (DELF A2/B1)",
          ielts: "DELF A2 or equivalent",
          gre: "Not required",
          papers: "Study abroad proposal written in French",
          references: "Recommendation from French language faculty"
        }
      },
      {
        id: 5147,
        title: "Japanese Language Teaching Certification Course",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "420-hour curriculum conforming to Agency for Cultural Affairs standards, preparing students for the Japanese Language Teaching Competency Test.",
        funding: "Modular fee discounts for enrolled undergraduates",
        fee: "¥10,000 registration",
        tuition: "¥180,000 total course fee",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kaisei.ac.jp/certificates/",
        requirements: {
          gpa: "Sophomore or higher standing",
          ielts: "Native Japanese or JLPT N1",
          gre: "Not required",
          papers: "Linguistic grammar diagnostic test",
          references: "Course coordinator approval"
        }
      },
      {
        id: 5148,
        title: "Kobe Kaisei Women's Intercultural Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "One-year post-graduate research fellowship investigating women's educational history, Christian missionary schools in modern Japan, and intercultural identity.",
        funding: "¥1,200,000 annual research grant and on-campus study room",
        fee: "¥0",
        tuition: "¥0",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.kaisei.ac.jp/research/",
        requirements: {
          gpa: "Master's degree in humanities, education, or cultural studies",
          ielts: "Japanese and English bilingual fluency",
          gre: "Not required",
          papers: "Research plan on female education in Meiji and Showa era Hanshin region",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2223,
        name: "Sister Mariko Sato",
        title: "President & Professor of Catholic Philosophy",
        department: "Office of the President",
        topics: ["Christian Humanism", "Women's Higher Education in Japan", "Philosophical Ethics"],
        summary: "Sister Mariko Sato serves as President of Kobe Kaisei College, conducting scholarship on Christian humanism, ethical frameworks in contemporary women's education, and the preservation of Catholic educational missions in East Asia.",
        website: "https://www.kaisei.ac.jp/about/president/",
        source: "https://www.kaisei.ac.jp/about/president/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2224,
        name: "Prof. Dr. Hiroshi Tanaka",
        title: "Dean of Humanities & Professor of English Literature",
        department: "Department of English Studies",
        topics: ["19th-Century British Literature", "Comparative Translation Studies", "EFL Pedagogies"],
        summary: "Prof. Dr. Hiroshi Tanaka investigates Victorian narrative structures, cross-cultural translation of English poetry into Japanese, and innovative communicative second-language methodologies.",
        website: "https://www.kaisei.ac.jp/faculty/professors/",
        source: "https://www.kaisei.ac.jp/faculty/professors/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2225,
        name: "Prof. Yumiko Kawamoto",
        title: "Chair, Department of Child Education",
        department: "Department of Child Education",
        topics: ["Early Childhood Attachment", "Play-Based Cognitive Development", "Inclusion in Japanese Nurseries"],
        summary: "Prof. Yumiko Kawamoto researches socio-emotional bonding in infancy, pedagogical play models in Japanese daycare facilities, and institutional support systems for children with developmental delays.",
        website: "https://www.kaisei.ac.jp/faculty/professors/",
        source: "https://www.kaisei.ac.jp/faculty/professors/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 24. Japan: Kobe Women's University (Port Island Campus)
  {
    institution: "Kobe Women's University (Port Island Campus)",
    slug: "kobe-womens-university-port-island-campus",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1678,
    location: "Kobe, Hyogo, Japan",
    website: "https://www.yg.kobe-wu.ac.jp",
    shortName: "Kobe Women's Univ Port Island",
    badge: "Nursing, Healthcare & Food Sciences",
    overview: "Kobe Women's University (Port Island Campus), established in the heart of Kobe's world-leading Biomedical Innovation Cluster (KBIC) on Port Island, houses the Faculty of Nursing and Faculty of Health and Welfare, providing premier bachelor's, master's, and doctoral programs in acute clinical nursing, nutritional science, and public healthcare.",
    lead: "Explore bachelor and master degrees in clinical nursing, food science, healthcare management, and Kobe Biomedical Innovation Cluster internships at Kobe Women's University.",
    description: "Kobe Women's University Port Island Campus accredited degrees in nursing, food science, medical nutrition, and Kobe biomedical scholarships.",
    quickFacts: {
      type: "Private Women's University (Joshi Daigaku)",
      campus: "Port Island Campus (Minatojima Nakamachi), Chuo Ward, Kobe, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "General entrance exams, recommendation tracks, and graduate research screenings",
      language: "Japanese (JLPT N1/N2) with specialized English medical terminology",
      aid: "Kobe Women's University Special Honor Scholarships & Hyogo Medical Bursaries"
    },
    strengths: [
      "Direct integration into the Kobe Biomedical Innovation Cluster (KBIC)—Japan's largest biomedical cluster",
      "Consistently outstanding pass rates on national examinations for Nurses, Public Health Nurses, and Midwives",
      "Cutting-edge simulation hospital wards featuring advanced adult, pediatric, and obstetric simulation robots",
      "Collaborative research with RIKEN Center for Biosystems Dynamics Research located adjacent on Port Island"
    ],
    programs: [
      { title: "Bachelor of Science in Nursing (Kangogakubu)", level: "Bachelor of Science (Gakushi)", desc: "Four-year comprehensive nursing curriculum preparing graduates for national licensing as Registered Nurses (Kangoshi) and Public Health Nurses (Hokenjo)." },
      { title: "Graduate School of Nursing Science", level: "Master of Science & Doctorate", desc: "Advanced practice nursing tracks in critical acute care, chronic illness management, oncological nursing, and community gerontology." },
      { title: "Bachelor of Health Sciences in Nutrition & Dietetics", level: "Bachelor of Science (Gakushi)", desc: "Four-year degree training Registered Dietitians (Kanri Eiyoshi) in clinical medical nutrition, metabolic therapy, and food technology." }
    ],
    opportunities: [
      {
        id: 5149,
        title: "Kobe Women's Medical & Nursing Excellence Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Full or half tuition scholarship awarded to students entering the Faculty of Nursing demonstrating top performance on academic entrance examinations.",
        funding: "¥500,000 to ¥1,000,000 annual tuition waiver renewable upon academic merit",
        fee: "¥30,000 entrance examination fee",
        tuition: "Approx. ¥1,780,000 per academic year for nursing programs",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/exam/scholarship.html",
        requirements: {
          gpa: "Upper secondary school graduation with high standing in biology and chemistry",
          ielts: "JLPT N1 (essential for medical licensing courses)",
          gre: "Not required",
          papers: "High school transcripts and medical personal statement",
          references: "High school principal recommendation"
        }
      },
      {
        id: 5150,
        title: "B.Sc. in Nursing Science (National Licensing Track) Enrolment",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Four-year professional nursing degree integrating fundamental pathology, acute surgical care, pediatric nursing, and 1,000+ clinical hospital hours.",
        funding: "Hospital nursing student loans (providing full tuition reimbursement in exchange for post-graduation service) available",
        fee: "¥30,000 exam fee",
        tuition: "¥1,820,000 per academic year (including clinical lab fees)",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "Native Japanese or JLPT N1",
          gre: "Not required",
          papers: "Physical health examination and immunization records",
          references: "Faculty interview"
        }
      },
      {
        id: 5151,
        title: "Kobe Biomedical Innovation Cluster (KBIC) Hospital Clinical Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Clinical rotations placed across Kobe University Hospital, Kobe City Medical Center General Hospital, and Port Island biomedical research clinics.",
        funding: "Academic clinical credit toward national nurse licensing; hospital meal subsidies",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/clinical.html",
        requirements: {
          gpa: "Completion of third-year clinical skills OSCE and CBT exams",
          ielts: "Japanese native or JLPT N1",
          gre: "Not required",
          papers: "Clinical practice pledge and patient confidentiality protocol",
          references: "Nursing department clinical board sign-off"
        }
      },
      {
        id: 5152,
        title: "Master of Science in Advanced Nursing Practice Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Two-year postgraduate degree preparing Certified Nurse Specialists (CNS) in cancer nursing, geriatric nursing care, and hospital infection prevention.",
        funding: "MEXT nursing scholarships and hospital continuing education grants",
        fee: "¥30,000 application fee",
        tuition: "¥980,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/graduate/",
        requirements: {
          gpa: "Bachelor's degree in Nursing and valid Japanese Registered Nurse license with 3+ years clinical experience",
          ielts: "Japanese C1/N1; reading knowledge of English medical literature",
          gre: "Not required",
          papers: "Clinical research proposal on advanced patient care protocols",
          references: "Two professional/academic recommendations"
        }
      },
      {
        id: 5153,
        title: "RIKEN Port Island Biomolecular Nutrition Research Grant",
        type: "Grant",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Grant supporting student researchers analyzing metabolic biomarkers, gut microbiome interactions, and functional food compounds on Port Island.",
        funding: "¥300,000 project research grant and access to mass spectrometry equipment",
        fee: "¥0",
        tuition: "Standard tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/research/",
        requirements: {
          gpa: "Senior or graduate student in food science or nutritional biochemistry with GPA >= 3.3",
          ielts: "Japanese and English proficiency",
          gre: "Not required",
          papers: "Experimental design on polyphenol antioxidant bio-availability",
          references: "Faculty laboratory sponsor nomination"
        }
      },
      {
        id: 5154,
        title: "Midwifery Specialization Advanced Clinical Diploma",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "One-year intensive post-BSN credential delivering theoretical and practical obstetrical delivery training to qualify for national Midwife licensing (Josan-shi).",
        funding: "Prefectural maternal health subsidies available",
        fee: "¥30,000 exam fee",
        tuition: "¥1,200,000 complete program tuition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/midwifery/",
        requirements: {
          gpa: "Registered Nurse license (or anticipated graduation from accredited BSN)",
          ielts: "Japanese N1",
          gre: "Not required",
          papers: "Obstetric essay and clinical skills practical assessment",
          references: "Dean of Nursing recommendation"
        }
      },
      {
        id: 5155,
        title: "Port Island Geriatric Healthcare Technology Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "Postdoctoral fellowship investigating robotic nursing aids, wearable health telemetries, and smart healthcare integration for Japan's super-aged society.",
        funding: "¥2,400,000 annual research fellowship stipend plus collaborative lab access at KBIC",
        fee: "¥0",
        tuition: "¥0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.yg.kobe-wu.ac.jp/wu/research/",
        requirements: {
          gpa: "Ph.D. in Nursing, Medical Science, or Biomedical Engineering",
          ielts: "Bilingual Japanese/English capability",
          gre: "Not required",
          papers: "8-page research monograph on assistive robotics in long-term geriatric care",
          references: "Three academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2226,
        name: "Prof. Dr. Keiko Morimoto",
        title: "Dean, Faculty of Nursing",
        department: "Faculty of Nursing",
        topics: ["Palliative Oncology Nursing", "Clinical Simulation Efficacy", "Healthcare Communication Ethics"],
        summary: "Prof. Dr. Keiko Morimoto directs nursing education at Port Island Campus, researching end-of-life palliative interventions, simulation-based emergency triage pedagogies, and psychological resilience among clinical nurse practitioners.",
        website: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/professors.html",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/professors.html",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2227,
        name: "Prof. Dr. Yoko Yamashita",
        title: "Professor of Food Science & Nutritional Biochemistry",
        department: "Department of Food and Health Sciences",
        topics: ["Polyphenol Bioavailability", "Metabolic Syndrome Prevention", "Functional Food Chemistry"],
        summary: "Prof. Dr. Yoko Yamashita investigates the molecular mechanisms of dietary polyphenols and dietary fibers in regulating glucose metabolism, lipid oxidation, and anti-obesity signaling in animal and human models.",
        website: "https://www.yg.kobe-wu.ac.jp/wu/faculty/food/professors.html",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/food/professors.html",
        recruiting: "Not verified",
        subject: "chemistry"
      },
      {
        id: 2228,
        name: "Prof. Dr. Kenji Takahashi",
        title: "Professor of Community Health & Epidemiology",
        department: "Division of Public Health Nursing",
        topics: ["Geriatric Epidemiology", "Regional Healthcare Networks", "Preventive Home Healthcare"],
        summary: "Prof. Dr. Kenji Takahashi researches regional community health systems across Hyogo Prefecture, evaluating integrated home nursing interventions, fall prevention in elderly populations, and municipal health promotion policy.",
        website: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/professors.html",
        source: "https://www.yg.kobe-wu.ac.jp/wu/faculty/nursing/professors.html",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 25. Japan: Konan University (Okamoto Campus)
  {
    institution: "Konan University (Okamoto Campus)",
    slug: "konan-university-okamoto-campus",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1682,
    location: "Kobe, Hyogo, Japan",
    website: "https://www.konan-u.ac.jp",
    shortName: "Konan University",
    badge: "Premier Private Research University",
    overview: "Konan University (Okamoto Campus), founded in 1919 by prominent industrialist Hachisaburo Hirao in the prestigious Okamoto district of Higashinada Ward, Kobe, is one of western Japan's most distinguished private research universities—part of the revered 'Kan-Kan-Do-Ritsu / San-Kin-Ko-Ryu' higher education consortia—offering acclaimed faculties in economics, letters, law, science and engineering, intelligence and informatics, and the pioneering FIRST Institute for Nanotechnology.",
    lead: "Explore undergraduate and graduate programs in intelligence informatics, nanobiology, economics, and Hirao international scholarships at Konan University in Kobe.",
    description: "Konan University Okamoto Campus accredited degrees in computer informatics, nanobiology, business economics, and MEXT international student scholarships.",
    quickFacts: {
      type: "Private Research University",
      campus: "Okamoto Main Campus, Higashinada Ward, Kobe, Hyogo, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "General entrance examination, EJU international admissions, and graduate entrance screening",
      language: "Japanese (JLPT N2/N1) with expanding English-medium research programs",
      aid: "Hirao Hachisaburo Memorial Scholarships, Konan Merit Tuition Reductions & JASSO Honors"
    },
    strengths: [
      "FIBER (Frontier Institute for Biomolecular Engineering Research) leading groundbreaking nucleic acid and nanobio research",
      "Faculty of Intelligence and Informatics pioneering artificial intelligence, natural language processing, and data science",
      "Hirao School of Management (CUBE) delivering innovative practical business leadership and global management training",
      "Prestigious alumni network in Japanese industry, banking, international trade, and scientific research"
    ],
    programs: [
      { title: "Bachelor of Engineering in Intelligence and Informatics", level: "Bachelor of Engineering (Gakushi)", desc: "Four-year curriculum in artificial intelligence, computer vision, cybersecurity, neural networks, and interactive human-agent communication." },
      { title: "Bachelor of Science in Applied Chemistry & Nanobiology", level: "Bachelor of Science (Gakushi)", desc: "Comprehensive training in biomolecular design, organic synthetic chemistry, DNA nanotechnology, and materials physics." },
      { title: "Master of Economics & International Business", level: "Master of Economics (Shushi)", desc: "Two-year postgraduate research program exploring macro-econometric modeling, Asia-Pacific maritime trade, and corporate finance." }
    ],
    opportunities: [
      {
        id: 5156,
        title: "Konan University International Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Tuition reduction scholarship awarded to high-ranking international students admitted via EJU examination to undergraduate degree programs.",
        funding: "50% to 100% tuition remission (valued up to ¥1,100,000 per academic year)",
        fee: "¥10,000 EJU application fee",
        tuition: "Approx. ¥1,250,000 to ¥1,550,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.konan-u.ac.jp/international/scholarships/",
        requirements: {
          gpa: "Upper secondary school completion with minimum 3.3 GPA or top 15% class standing",
          ielts: "EJU Japanese score >= 260 or JLPT N1; TOEFL iBT 75+ for engineering applicants",
          gre: "Not required",
          papers: "1,000-character Japanese essay on technology innovation and societal contribution",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5157,
        title: "B.Eng. Intelligence & Informatics (AI & Data Science) Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-year undergraduate degree in computer architecture, deep learning algorithms, computer graphics, and autonomous robotics software.",
        funding: "Konan University tuition assistance and JASSO scholarship eligible",
        fee: "¥30,000 exam fee",
        tuition: "¥1,520,000 per academic year",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        source: "https://www.konan-u.ac.jp/faculty/informatics/",
        requirements: {
          gpa: "High school graduation with mathematics and physics background",
          ielts: "JLPT N2 or EJU Japanese >= 220",
          gre: "Not required",
          papers: "Technical problem-solving examination and coding portfolio (if available)",
          references: "High school academic transcript"
        }
      },
      {
        id: 5158,
        title: "FIBER Nanobiology & Nucleic Acid Research Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Semester research practicum conducted in the Frontier Institute for Biomolecular Engineering Research (FIBER) investigating non-canonical DNA structures.",
        funding: "¥100,000 monthly research stipend funded by MEXT scientific grants (Kakenhi)",
        fee: "Covered by degree enrollment",
        tuition: "Covered by degree enrollment",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.konan-fiber.jp/en/",
        requirements: {
          gpa: "Junior or Senior student in Chemistry or Biology with minimum 3.2 GPA",
          ielts: "English B2/C1; basic Japanese for lab operations",
          gre: "Not required",
          papers: "Molecular biology laboratory research plan",
          references: "FIBER principal investigator endorsement"
        }
      },
      {
        id: 5159,
        title: "M.Sc. in Applied Chemistry & Functional Materials Enrolment",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        desc: "Two-year research master's degree exploring organic semiconductors, supramolecular catalysts, polymer nanotechnology, and electrochemistry.",
        funding: "Graduate teaching assistantships and research fellowships available",
        fee: "¥30,000 application fee",
        tuition: "¥950,000 per academic year",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.konan-u.ac.jp/graduate/science/",
        requirements: {
          gpa: "Bachelor of Science or Engineering in Chemistry or related field",
          ielts: "JLPT N2 or English TOEFL iBT 80+",
          gre: "Not required",
          papers: "Undergraduate thesis abstract and 1,500-word proposed master's research plan",
          references: "Two professorial recommendation letters"
        }
      },
      {
        id: 5160,
        title: "Hirao School of Management Global Business Innovation Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Project grant awarded to undergraduate teams in the CUBE Hirao School developing digital startup solutions and international export business models.",
        funding: "¥400,000 project commercialization grant and venture mentoring",
        fee: "¥0",
        tuition: "Standard tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.konan-u.ac.jp/cube/",
        requirements: {
          gpa: "Enrolled in CUBE Hirao School of Management with minimum 3.0 GPA",
          ielts: "TOEIC 750+ or TOEFL iBT 80",
          gre: "Not required",
          papers: "Executive summary and business model canvas",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 5161,
        title: "B.A. in International Business Economics Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Four-year undergraduate degree covering micro- and macroeconomic theory, international finance, econometric forecasting, and Asian economic integration.",
        funding: "Tuition installment plans and international student fee reductions",
        fee: "¥30,000 exam fee",
        tuition: "¥1,190,000 per academic year",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.konan-u.ac.jp/faculty/economics/",
        requirements: {
          gpa: "Secondary school certificate with mathematics proficiency",
          ielts: "JLPT N2 or EJU Japanese >= 240",
          gre: "Not required",
          papers: "Admissions essay and transcripts",
          references: "One academic reference"
        }
      },
      {
        id: 5162,
        title: "Konan Postdoctoral Research Fellowship in Nucleic Acid Nanotechnology",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postdoctoral fellowship at FIBER investigating artificial nucleic acid nanostructures for targeted oncological drug delivery.",
        funding: "¥4,500,000 annual research salary plus ¥1,000,000 research project consumables budget",
        fee: "¥0",
        tuition: "¥0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.konan-fiber.jp/en/",
        requirements: {
          gpa: "Ph.D. in Chemical Biology, Biophysics, or Nanotechnology completed within past 5 years",
          ielts: "English C1/C2 (lab is international English-speaking environment)",
          gre: "Not required",
          papers: "List of SCI publications and 5-page research proposal on G-quadruplex or DNA origami",
          references: "Three international academic referees"
        }
      }
    ],
    researchers: [
      {
        id: 2229,
        name: "Prof. Dr. Naoki Sugimoto",
        title: "Director of FIBER & Professor of Chemical Biology",
        department: "Frontier Institute for Biomolecular Engineering Research (FIBER)",
        topics: ["Non-Canonical Nucleic Acid Structures", "Molecular Crowding Biophysics", "DNA Nanotechnology"],
        summary: "Prof. Dr. Naoki Sugimoto is an internationally celebrated biophysicist directing FIBER, renowned for pioneering research on non-canonical DNA/RNA structures (G-quadruplexes, i-motifs) under cellular molecular crowding conditions.",
        website: "https://www.konan-fiber.jp/en/members/sugimoto/",
        source: "https://www.konan-fiber.jp/en/members/sugimoto/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2230,
        name: "Prof. Dr. Daisuke Miyoshi",
        title: "Professor of Biophysical Chemistry",
        department: "Department of Applied Chemistry / FIBER",
        topics: ["Thermodynamic Stabilization of Biomolecules", "Biosensors", "Targeted Gene Therapeutics"],
        summary: "Prof. Dr. Daisuke Miyoshi researches the physical chemistry of nucleic acid folding, designing synthetic oligonucleotides and fluorescent biosensors for early diagnostic detection of oncological markers.",
        website: "https://www.konan-fiber.jp/en/members/miyoshi/",
        source: "https://www.konan-fiber.jp/en/members/miyoshi/",
        recruiting: "Not verified",
        subject: "chemistry"
      },
      {
        id: 2231,
        name: "Prof. Dr. Kenji Matsui",
        title: "Dean, Faculty of Intelligence and Informatics",
        department: "Faculty of Intelligence and Informatics",
        topics: ["Speech Recognition Systems", "Natural Language Processing", "Human-Agent Interaction"],
        summary: "Prof. Dr. Kenji Matsui leads computer science and informatics education at Konan University, studying acoustic feature extraction, conversational artificial intelligence, and robotic auditory processing.",
        website: "https://www.konan-u.ac.jp/faculty/informatics/professors.html",
        source: "https://www.konan-u.ac.jp/faculty/informatics/professors.html",
        recruiting: "Not verified",
        subject: "computer-science"
      }
    ]
  },

  // 26. Japan: Kyoto Arts and Crafts University (KYOBI)
  {
    institution: "Kyoto Arts and Crafts University (KYOBI)",
    slug: "kyoto-arts-and-crafts-university-kyobi",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1684,
    location: "Kyoto, Japan",
    website: "https://www.kyobi.ac.jp",
    shortName: "KYOBI",
    badge: "Traditional Crafts & Architectural Design",
    overview: "Kyoto Arts and Crafts University (KYOBI - Kyoto Bijutsu Kogeidaigaku), located in the cultural heart of Kyoto with campuses in Higashiyama and Nantan Sonobe, is Japan's only university dedicated exclusively to the fusion of traditional Japanese architectural preservation, fine decorative crafts (urushi lacquerware, ceramics, wood carving), and contemporary architectural and digital product design.",
    lead: "Explore undergraduate and graduate degrees in traditional Japanese architecture, cultural heritage preservation, ceramic arts, and Kyoto design scholarships at KYOBI.",
    description: "Kyoto Arts and Crafts University (KYOBI) accredited programs in traditional wooden architecture, Japanese craft arts, digital design, and cultural preservation grants.",
    quickFacts: {
      type: "Private Specialized University of Arts & Architecture",
      campus: "Kyoto Higashiyama Campus & Nantan Sonobe Campus, Kyoto, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "Portfolio examination, practical drawing test, and international applicant screening",
      language: "Japanese (JLPT N2/N1 required for studio coursework)",
      aid: "KYOBI Craftsmanship Merit Scholarships, Kyoto Prefectural Living Grants & JASSO Honors"
    },
    strengths: [
      "Japan's premier university granting national First-Class Registered Architect (Ikkyu Kenchikushi) exam eligibility with traditional wooden construction mastery",
      "World-class master craftsmen teaching authentic centuries-old techniques in Japanese lacquerware (urushi), metalwork, and ceramic arts",
      "Direct restoration practicums on historic temples, shrines, and National Treasure structures across Kyoto and Nara",
      "Higashiyama campus located within walking distance of Sanjusangendo, Kyoto National Museum, and historic artisan quarters"
    ],
    programs: [
      { title: "Bachelor of Arts in Traditional Architecture & Heritage Preservation", level: "Bachelor of Arts (Gakushi)", desc: "Four-year curriculum integrating structural timber engineering, Japanese joinery (kigumi), seismic reinforcement of historic temples, and CAD architectural drafting." },
      { title: "Bachelor of Arts in Fine Crafts & Product Design", level: "Bachelor of Arts (Gakushi)", desc: "Four-year studio degree specializing in ceramics, lacquer art (urushi), traditional woodwork, and contemporary industrial product prototyping." },
      { title: "Master of Fine Arts in Architecture & Heritage Conservation", level: "Master of Fine Arts (Shushi)", desc: "Two-year postgraduate research program focusing on advanced structural diagnostics of historic timber buildings and cultural heritage disaster mitigation." }
    ],
    opportunities: [
      {
        id: 5163,
        title: "KYOBI Master Artisan International Talent Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Tuition discount scholarship awarded to international students demonstrating outstanding artistic portfolios in architecture, sculpture, or fine crafts.",
        funding: "¥300,000 to ¥600,000 annual tuition reduction",
        fee: "¥20,000 entrance examination fee",
        tuition: "Approx. ¥1,580,000 per academic year (including studio materials)",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kyobi.ac.jp/admissions/scholarships/",
        requirements: {
          gpa: "Completed 12 years of formal schooling with strong artistic background",
          ielts: "JLPT N2 or higher (or EJU Japanese >= 220)",
          gre: "Not required",
          papers: "Creative visual portfolio of 10-15 works (drawings, architectural models, or craft pieces)",
          references: "One artistic or academic recommendation"
        }
      },
      {
        id: 5164,
        title: "B.A. in Traditional Japanese Architecture Enrolment",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Four-year degree qualifying graduates to sit for Japan's national First-Class Registered Architect examination upon graduation, featuring hand timber joinery training.",
        funding: "Eligible for JASSO foreign student scholarships and Kyoto craft guild bursaries",
        fee: "¥20,000 exam fee",
        tuition: "¥1,600,000 per academic year",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kyobi.ac.jp/department/architecture/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Practical pencil sketching test and portfolio interview",
          references: "High school recommendation"
        }
      },
      {
        id: 5165,
        title: "Kyoto Historic Temple & Shrine Architectural Restoration Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "12-week on-site restoration internship working under master carpenters (Miyadaiku) restoring registered cultural properties in Kyoto.",
        funding: "Academic credits and daily site transportation allowances provided",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kyobi.ac.jp/department/architecture/practicum.html",
        requirements: {
          gpa: "Completion of second-year timber joinery and structural drawing courses with GPA >= 3.0",
          ielts: "Japanese native or JLPT N1/N2",
          gre: "Not required",
          papers: "Site safety clearance and timber drafting sample",
          references: "Architecture department studio master sign-off"
        }
      },
      {
        id: 5166,
        title: "B.A. in Ceramic Arts & Japanese Urushi Lacquer Enrolment",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        desc: "Four-year studio specialization covering Kyoto ceramic throwing (Kyo-yaki), glaze chemistry, natural urushi lacquer harvesting, maki-e gold inlay, and kiln firing.",
        funding: "Studio material bursaries and exhibition production grants available",
        fee: "¥20,000 exam fee",
        tuition: "¥1,580,000 per academic year",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.kyobi.ac.jp/department/crafts/",
        requirements: {
          gpa: "High school diploma",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Physical visual portfolio submission and studio interview",
          references: "One referee"
        }
      },
      {
        id: 5167,
        title: "Kyoto Traditional Crafts Preservation Project Grant",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Monetary grant supporting student research projects documenting endangered artisan techniques in Kyoto textile weaving, wood carving, and sword forging.",
        funding: "¥350,000 documentation and exhibition subsidy",
        fee: "¥0",
        tuition: "Standard tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.kyobi.ac.jp/research/",
        requirements: {
          gpa: "Junior or Senior standing with GPA >= 3.2",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Detailed archival documentation proposal and visual storyboard",
          references: "Faculty advisor endorsement"
        }
      },
      {
        id: 5168,
        title: "M.F.A. in Cultural Heritage Conservation Enrolment",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Two-year postgraduate research curriculum delivering advanced scientific material analysis, nondestructive timber ultrasound testing, and heritage policy.",
        funding: "Graduate research assistantships and Kyoto heritage fellowships available",
        fee: "¥30,000 application fee",
        tuition: "¥1,100,000 per academic year",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.kyobi.ac.jp/graduate/",
        requirements: {
          gpa: "Bachelor's degree in Architecture, Fine Arts, or Conservation Science",
          ielts: "JLPT N1 or equivalent Japanese literacy",
          gre: "Not required",
          papers: "Graduation portfolio and 2,000-character master's research plan",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5169,
        title: "KYOBI International Traditional Artisan Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "One-year visiting artisan fellowship providing studio space, kiln access, and materials in Kyoto to create contemporary works integrating traditional Japanese crafts.",
        funding: "¥1,500,000 fellowship grant and solo exhibition at the KYOBI Gallery in Higashiyama",
        fee: "¥0",
        tuition: "¥0",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.kyobi.ac.jp/research/",
        requirements: {
          gpa: "Established artist, architect, or designer with international exhibition record",
          ielts: "Functional Japanese or English",
          gre: "Not required",
          papers: "Comprehensive artist portfolio and project proposal utilizing Kyoto natural materials",
          references: "Two professional gallery or museum curator endorsements"
        }
      }
    ],
    researchers: [
      {
        id: 2232,
        name: "Prof. Masao Furuno",
        title: "President & Professor of Traditional Architecture",
        department: "Department of Architecture",
        topics: ["Miyadaiku Timber Construction", "Seismic Resilience of Historic Temples", "Japanese Architectural History"],
        summary: "Prof. Masao Furuno directs Kyoto Arts and Crafts University, leading academic and field investigations into traditional timber joinery, historic shrine preservation, and seismic strengthening of wooden heritage monuments.",
        website: "https://www.kyobi.ac.jp/about/greeting/",
        source: "https://www.kyobi.ac.jp/about/greeting/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2233,
        name: "Prof. Mitsuhiko Sasai",
        title: "Professor of Traditional Urushi Lacquer Art",
        department: "Department of Crafts and Fine Arts",
        topics: ["Urushi Chemical Properties", "Maki-e Gold Powder Techniques", "Contemporary Craft Design"],
        summary: "Prof. Mitsuhiko Sasai is a designated master artisan instructing in natural Japanese urushi lacquer chemistry, traditional maki-e decorative ornamentation, and the integration of classical lacquercraft into contemporary international design.",
        website: "https://www.kyobi.ac.jp/faculty/professors/",
        source: "https://www.kyobi.ac.jp/faculty/professors/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2234,
        name: "Prof. Dr. Shinichi Takahashi",
        title: "Professor of Architectural Structural Conservation",
        department: "Division of Heritage Science",
        topics: ["Nondestructive Timber Diagnostics", "Heritage Microclimates", "Conservation Science"],
        summary: "Prof. Dr. Shinichi Takahashi investigates nondestructive ultrasonic evaluation of historic wooden columns, structural decay modeling in Buddhist temple architectures, and microclimatic preservation inside museum archives.",
        website: "https://www.kyobi.ac.jp/faculty/professors/",
        source: "https://www.kyobi.ac.jp/faculty/professors/",
        recruiting: "Not verified",
        subject: "engineering"
      }
    ]
  },

  // 27. Netherlands: Holland International Study Centre
  {
    institution: "Holland International Study Centre",
    slug: "holland-international-study-centre",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1430,
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://www.hollandisc.com",
    shortName: "Holland ISC",
    badge: "Dutch Research University Pathways",
    overview: "Holland International Study Centre (Holland ISC), located in Amsterdam, is an accredited higher education pathway institution operated in partnership with leading Dutch research universities (including Vrije Universiteit Amsterdam, Erasmus University Rotterdam, and Tilburg University) providing intensive International Foundation Year programs in business, engineering, science, and social sciences with guaranteed progression routes.",
    lead: "Explore International Foundation programs in engineering, business, and data science, with progression into premier Dutch research universities at Holland ISC.",
    description: "Holland International Study Centre accredited foundation programs in science, engineering, business analytics, and Dutch university progression scholarships.",
    quickFacts: {
      type: "International University Preparation Centre (Study Group Partner)",
      campus: "Amsterdam Campus (Johan Cruijff Boulevard), North Holland, Netherlands",
      accreditation: "Dutch Ministry of Education Recognition / Partnered with Dutch Research Universities",
      admissions: "Direct online application with secondary school qualification review",
      language: "English (100% English instruction; IELTS 5.0 to 5.5 overall)",
      aid: "Holland ISC Academic Merit Scholarships & Dutch University Progression Bursaries"
    },
    strengths: [
      "Direct academic progression routes to world-ranked Dutch research universities (WO) and universities of applied sciences (HBO)",
      "Intensive academic English, European university study skills, and subject-specific foundation tracks",
      "Prime Amsterdam location with state-of-the-art modern digital classrooms and student support networks",
      "Over 90% progression rate into undergraduate bachelor degree programs across the Netherlands"
    ],
    programs: [
      { title: "International Foundation Year in Science, Engineering & Computing", level: "University Foundation Program", desc: "Three-term intensive foundation preparing international students for BSc degrees in computer science, mechanical engineering, and aerospace technology." },
      { title: "International Foundation Year in Business, Management & Social Sciences", level: "University Foundation Program", desc: "Rigorous preparation covering economics, accounting, calculus, international law, and sociological research methodologies." },
      { title: "English for Academic Purposes (EAP) Intensive Preparation", level: "Pre-Sessional English", desc: "Targeted language immersion course developing academic writing, scientific presentation skills, and research seminar discussion capabilities." }
    ],
    opportunities: [
      {
        id: 5170,
        title: "Holland ISC International Academic Merit Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition fee reduction awarded to high-achieving international applicants admitted to the Science and Engineering International Foundation Year.",
        funding: "Up to €3,500 direct tuition fee reduction",
        fee: "€0 application fee",
        tuition: "€16,500 to €18,900 per foundation program",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.hollandisc.com/how-to-apply/fees-and-scholarships",
        requirements: {
          gpa: "Recognized secondary school leaving certificate with minimum 75% equivalent in mathematics and physics",
          ielts: "IELTS 5.5 overall (minimum 5.0 in writing)",
          gre: "Not required",
          papers: "500-word personal statement articulating motivation to study at a Dutch research university",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5171,
        title: "International Foundation Year in Science & Engineering Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Three-term academic foundation covering advanced calculus, linear algebra, Newtonian mechanics, and laboratory experimentation.",
        funding: "Early-bird tuition discounts and university progression scholarships available",
        fee: "€0 application fee",
        tuition: "€17,900 full foundation tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.hollandisc.com/programmes/foundation-year-science-and-engineering",
        requirements: {
          gpa: "Completed 12 years of schooling with strong grades in science and mathematics",
          ielts: "IELTS 5.0 to 5.5 overall",
          gre: "Not required",
          papers: "High school transcripts and passport copy",
          references: "One secondary school teacher reference"
        }
      },
      {
        id: 5172,
        title: "Amsterdam Tech Ecosystem & Startup Innovation Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "6-week summer orientation internship placed with technology startups and incubator hubs in the Amsterdam Science Park ecosystem.",
        funding: "€800 monthly living allowance and travel pass support",
        fee: "Covered by pathway tuition",
        tuition: "Covered by pathway tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.hollandisc.com/student-life/careers",
        requirements: {
          gpa: "Completion of term 1 and 2 foundation modules with GPA >= 3.3",
          ielts: "IELTS 5.5+",
          gre: "Not required",
          papers: "Technical project brief or coding sample (Python/JavaScript)",
          references: "Foundation course tutor endorsement"
        }
      },
      {
        id: 5173,
        title: "International Foundation Year in Business & Economics Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Three-term preparatory curriculum covering microeconomics, corporate finance, statistics, and organizational behaviour with progression to Dutch university BSc degrees.",
        funding: "Flexible installment payment options available",
        fee: "€0",
        tuition: "€16,900 full foundation tuition",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.hollandisc.com/programmes/foundation-year-business-and-management",
        requirements: {
          gpa: "Secondary school certificate with mathematics competence",
          ielts: "IELTS 5.0 to 5.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing business study goals",
          references: "One academic reference"
        }
      },
      {
        id: 5174,
        title: "Dutch Research University Transition Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Merit grant awarded to the highest-achieving pathway students advancing into top Dutch universities (VU Amsterdam, Erasmus Rotterdam, Tilburg).",
        funding: "€2,500 transition bursary applied against first-year university tuition fees",
        fee: "€0",
        tuition: "Standard university statutory or institutional tuition applies",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.hollandisc.com/how-to-apply/fees-and-scholarships",
        requirements: {
          gpa: "Final foundation course average of 75% or higher with all modules passed on first attempt",
          ielts: "IELTS 6.5 achieved prior to university matriculation",
          gre: "Not required",
          papers: "Official university unconditional offer letter",
          references: "Holland ISC Centre Director nomination"
        }
      },
      {
        id: 5175,
        title: "Intensive Academic English & Research Skills Course",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "One-term intensive immersion program advancing academic reading, critical textual analysis, lecture note-taking, and presentation delivery.",
        funding: "Progression fee credits available upon enrollment in full foundation",
        fee: "€0",
        tuition: "€4,800 one-term tuition",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.hollandisc.com/programmes/english-language-preparation",
        requirements: {
          gpa: "Secondary school completion",
          ielts: "IELTS 4.5 or 5.0",
          gre: "Not required",
          papers: "Language diagnostic assessment",
          references: "Not required"
        }
      },
      {
        id: 5176,
        title: "Holland ISC European Sustainability & Clean Tech Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Junior research fellowship examining Dutch circular economy models, water management infrastructures, and renewable energy policies.",
        funding: "€3,000 research stipend and project showcase at the Netherlands Clean Energy Expo",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.hollandisc.com/student-life/",
        requirements: {
          gpa: "Foundation distinction graduate progressing into environmental engineering or sustainability science",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "6-page research brief on Dutch water management engineering (Delta Works innovations)",
          references: "Two faculty referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2235,
        name: "Dr. Paul Nixon",
        title: "Head of Academic Affairs & Centre Director",
        department: "Academic Leadership",
        topics: ["European Higher Education Internationalization", "Transnational Academic Pathways", "Pedagogical Integration"],
        summary: "Dr. Paul Nixon directs academic affairs at Holland ISC, studying international student transition dynamics in continental European universities, curriculum articulation, and comparative educational policy.",
        website: "https://www.hollandisc.com/about-us/",
        source: "https://www.hollandisc.com/about-us/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2236,
        name: "Saskia van de Gevel",
        title: "Lead Tutor in Mathematics and Physics",
        department: "Department of Science and Engineering",
        topics: ["Applied Calculus Pedagogy", "Mechanics Visualization", "STEM University Readiness"],
        summary: "Saskia van de Gevel coordinates STEM foundation instruction, researching problem-based learning methodologies in calculus, physics lab competencies, and transitional readiness for Dutch engineering universities.",
        website: "https://www.hollandisc.com/about-us/staff/",
        source: "https://www.hollandisc.com/about-us/staff/",
        recruiting: "Not verified",
        subject: "physics"
      },
      {
        id: 2237,
        name: "Mark van Wees",
        title: "Coordinator of Business & Economics Studies",
        department: "Department of Business and Social Sciences",
        topics: ["Macroeconomic Modeling", "International Trade Dynamics", "Academic Case Method"],
        summary: "Mark van Wees instructs in business economics and financial analysis, studying international trade flows, European single market integration, and active business case analysis pedagogies.",
        website: "https://www.hollandisc.com/about-us/staff/",
        source: "https://www.hollandisc.com/about-us/staff/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 28. Netherlands: International Business School The Hague (IBSH)
  {
    institution: "International Business School The Hague (IBSH)",
    slug: "international-business-school-the-hague-ibsh",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1439,
    location: "The Hague, South Holland, Netherlands",
    website: "https://www.ibshehague.com",
    shortName: "IBSH The Hague",
    badge: "International Business, Diplomacy & Governance",
    overview: "International Business School The Hague (IBSH), situated in the international City of Peace and Justice in The Hague, is an accredited boutique business school offering English-taught bachelor, master, and doctoral programs in international business administration, international relations and diplomacy, banking and finance, and digital marketing.",
    lead: "Explore bachelor and master degrees in international relations, business administration, diplomatic internships, and European study grants at IBSH The Hague.",
    description: "International Business School The Hague (IBSH) accredited English degrees in international diplomacy, business management, and diplomatic internships in The Hague.",
    quickFacts: {
      type: "Private International Business School",
      campus: "The Hague Campus (Visseringlaan), South Holland, Netherlands",
      accreditation: "Accredited by ASIC (Premier Institution Status) / ATHE Partner / EduQua Recognized",
      admissions: "Rolling trimester intakes (September, January, May)",
      language: "English (100% English instruction; IELTS 6.0/6.5 or TOEFL iBT 80+)",
      aid: "IBSH Merit Scholarships, Diplomatic Corps Reductions & Institutional Bursaries"
    },
    strengths: [
      "Unique location in The Hague offering direct proximity to over 150 international courts, embassies, and multilateral agencies",
      "Specialized Master of Arts in International Relations and Diplomacy with guest lectures by serving ambassadors",
      "Small seminar classes guaranteeing close individual mentorship and personalized professional networking",
      "Integrated corporate and diplomatic internship placements across international NGOs, courts, and multinational corporations"
    ],
    programs: [
      { title: "Bachelor of Business Administration (BBA)", level: "Bachelor of Business Administration", desc: "Three-year undergraduate program covering financial accounting, corporate strategy, digital marketing, supply chain analytics, and business ethics." },
      { title: "Master of Arts in International Relations and Diplomacy", level: "Master of Arts (M.A.)", desc: "Two-year postgraduate degree analyzing international humanitarian law, diplomatic negotiations, multilateral treaties, and global conflict resolution." },
      { title: "Doctor of Business Administration (DBA)", level: "Doctor of Business Administration", desc: "Applied doctoral research degree for executives examining corporate governance, sustainable finance, and cross-border strategic leadership." }
    ],
    opportunities: [
      {
        id: 5177,
        title: "IBSH The Hague Diplomatic & Global Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Merit-based scholarship awarding partial tuition relief to outstanding applicants pursuing bachelor or master degrees in international relations and diplomacy.",
        funding: "Up to €3,000 direct tuition reduction across the degree program",
        fee: "€150 application assessment fee",
        tuition: "€9,950 to €12,500 per academic year",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.ibshehague.com/admissions/scholarships/",
        requirements: {
          gpa: "High school diploma or bachelor's degree with equivalent GPA of 3.0 or higher",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85",
          gre: "Not required",
          papers: "750-word personal essay on global multilateral diplomacy in resolving contemporary geopolitical conflicts",
          references: "Two academic or diplomatic letters of recommendation"
        }
      },
      {
        id: 5178,
        title: "Bachelor of Business Administration (BBA) Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Three-year 180-ECTS English-taught curriculum covering corporate finance, international trade law, strategic management, and a mandatory internship.",
        funding: "Modular fee payment plans and Dutch student visa work authorization eligible",
        fee: "€150 application fee",
        tuition: "€9,950 per academic year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.ibshehague.com/programs/bachelor-business-administration/",
        requirements: {
          gpa: "High school diploma equivalent to Dutch HAVO/VWO",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Personal statement and CV",
          references: "One academic reference"
        }
      },
      {
        id: 5179,
        title: "The Hague Multilateral Courts & NGO Diplomatic Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Structured 16-week professional internship placed within international non-governmental organizations, diplomatic missions, or international legal bodies in The Hague.",
        funding: "€600 to €1,100 monthly internship stipend paid by host organization",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.ibshehague.com/career-services/",
        requirements: {
          gpa: "Enrolled in IBSH master's or senior undergraduate program with minimum 3.2 GPA",
          ielts: "English C1 fluency",
          gre: "Not required",
          papers: "Diplomatic policy writing sample and cover letter",
          references: "IBSH academic dean nomination"
        }
      },
      {
        id: 5180,
        title: "M.A. in International Relations and Diplomacy Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-year 120-ECTS postgraduate degree examining peace studies, bilateral negotiation, public international law, and diplomatic protocol.",
        funding: "Diplomatic mission family discounts and institutional merit awards",
        fee: "€150 application fee",
        tuition: "€11,900 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.ibshehague.com/programs/master-international-relations/",
        requirements: {
          gpa: "Conferred bachelor's degree in political science, law, economics, or humanities with minimum 3.0 GPA",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "1,000-word statement of intent on diplomatic research focus",
          references: "Two academic recommendations"
        }
      },
      {
        id: 5181,
        title: "IBSH Sustainable Finance & ESG Leadership Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Monetary grant supporting student research examining green bond issuance, climate risk pricing, and ESG disclosure compliance across European banks.",
        funding: "€2,000 research project grant and conference presentation funding",
        fee: "€0",
        tuition: "Standard tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ibshehague.com/research/",
        requirements: {
          gpa: "Master's or doctoral student in business or finance with GPA >= 3.4",
          ielts: "English fluency",
          gre: "Not required",
          papers: "5-page empirical research plan on sustainable finance metrics",
          references: "Faculty research chair endorsement"
        }
      },
      {
        id: 5182,
        title: "Executive Master of Business Administration (EMBA) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "One-year intensive weekend executive program for corporate professionals focusing on agile digital transformation, enterprise finance, and strategic corporate governance.",
        funding: "Corporate co-funding and installment plans available",
        fee: "€150 application fee",
        tuition: "€14,500 complete program tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.ibshehague.com/programs/executive-mba/",
        requirements: {
          gpa: "Bachelor's degree and minimum 3 years of managerial professional experience",
          ielts: "IELTS 6.5 or TOEFL iBT 85",
          gre: "Not required",
          papers: "Executive curriculum vitae and personal admissions interview",
          references: "Two managerial references"
        }
      },
      {
        id: 5183,
        title: "The Hague International Peace & Justice Doctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Terminal DBA/Ph.D. research fellowship examining institutional arbitration, maritime border dispute resolution, and international commercial law.",
        funding: "€6,000 research grant and access to Peace Palace library collections in The Hague",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-10-01",
        deadlineText: "October 1, 2027",
        source: "https://www.ibshehague.com/research/",
        requirements: {
          gpa: "Master's degree in law, diplomacy, or business with distinction",
          ielts: "English C1/C2",
          gre: "Not required",
          papers: "Detailed 10-page doctoral dissertation research proposal",
          references: "Three academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2238,
        name: "Dr. Herman van den Bosch",
        title: "Dean & Professor of International Management",
        department: "Executive Academic Leadership",
        topics: ["Urban Innovation Systems", "Sustainable Smart Cities", "International Business Strategy"],
        summary: "Dr. Herman van den Bosch serves as Dean of IBSH, conducting renowned research into sustainable urban ecosystems, European smart city initiatives, and international business strategy.",
        website: "https://www.ibshehague.com/faculty/",
        source: "https://www.ibshehague.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2239,
        name: "Dr. M. Reza Nourbakhsh",
        title: "Professor of International Relations & Diplomatic Studies",
        department: "Department of International Relations",
        topics: ["Multilateral Treaty Negotiations", "Middle Eastern Geopolitics", "International Arbitration"],
        summary: "Dr. M. Reza Nourbakhsh lectures in diplomacy and international relations, studying multilateral treaty negotiation frameworks, conflict de-escalation mechanisms, and diplomatic protocols.",
        website: "https://www.ibshehague.com/faculty/",
        source: "https://www.ibshehague.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2240,
        name: "Prof. Dr. Jan Sanders",
        title: "Professor of Accounting and Sustainable Finance",
        department: "Faculty of Finance and Economics",
        topics: ["Corporate Financial Reporting", "ESG Audit Standards", "International Capital Markets"],
        summary: "Prof. Dr. Jan Sanders investigates European sustainability reporting standards (CSRD), corporate auditing transparency, and empirical asset valuation in international capital markets.",
        website: "https://www.ibshehague.com/faculty/",
        source: "https://www.ibshehague.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 29. Netherlands: UE Amsterdam (University of Europe for Applied Sciences)
  {
    institution: "UE Amsterdam (University of Europe for Applied Sciences)",
    slug: "ue-amsterdam-university-of-europe-for-applied-sciences",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1515,
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://www.ue-amsterdam.com",
    shortName: "UE Amsterdam",
    badge: "Creative Tech, Design & Business",
    overview: "UE Amsterdam (University of Europe for Applied Sciences Amsterdam Campus), situated in a historic canal-side building on Passeerdersgracht in the Jordaan district of Amsterdam, is a state-recognized, FIBAA-accredited European university campus delivering English-taught bachelor and master degree programs in digital product management, creative technology, UI/UX design, visual communication, and data science.",
    lead: "Explore creative technology bachelor degrees, digital product management master's, and European creative scholarships at UE Amsterdam.",
    description: "UE Amsterdam accredited English degrees in creative technology, digital design, software management, and European creative scholarships.",
    quickFacts: {
      type: "State-Recognized Private University of Applied Sciences",
      campus: "Amsterdam Canal Campus (Passeerdersgracht), North Holland, Netherlands",
      accreditation: "FIBAA Accredited / German Science and Humanities Council / Dutch Higher Education Registered",
      admissions: "Online application, creative portfolio review, and video interview",
      language: "English (100% English medium of instruction; IELTS 5.5 to 6.5)",
      aid: "UE Early Bird Scholarships, Creative Digital Talent Grants & Cultural Diversity Bursaries"
    },
    strengths: [
      "Historic central Amsterdam campus combining classical canal architecture with cutting-edge digital media studios",
      "Interdisciplinary curricula merging digital design, business model innovation, and software engineering",
      "Close partnerships with Amsterdam's world-leading creative agencies, game studios, and tech multinationals",
      "Dual European mobility allowing students to spend study semesters at UE campuses in Berlin, Hamburg, or Potsdam"
    ],
    programs: [
      { title: "B.A. in Digital Product Management & Creative Tech", level: "Bachelor of Arts", desc: "Three-year undergraduate program covering user experience research, agile product development, software prototyping, and tech venture creation." },
      { title: "B.A. in Visual & Experience Design", level: "Bachelor of Arts", desc: "Studio-intensive curriculum teaching interactive UI/UX interfaces, motion design, spatial branding, and design thinking." },
      { title: "M.Sc. in Data Science & Digital Transformation", level: "Master of Science", desc: "Two-year postgraduate specialization in applied machine learning, big data analytics, algorithmic ethics, and organizational change." }
    ],
    opportunities: [
      {
        id: 5184,
        title: "UE Amsterdam Creative Tech & Digital Talent Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Tuition discount scholarship awarded to incoming undergraduate and graduate students presenting exceptional digital design, code, or creative media portfolios.",
        funding: "Up to 33% tuition fee reduction across the entire degree program (valued up to €4,500/year)",
        fee: "€0 application fee",
        tuition: "€12,500 to €14,500 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ue-amsterdam.com/admissions/scholarships/",
        requirements: {
          gpa: "Secondary school graduation certificate or bachelor's degree with equivalent GPA >= 3.0",
          ielts: "IELTS 6.0 overall (minimum 5.5 in all bands) or Duolingo 105+",
          gre: "Not required",
          papers: "Creative digital portfolio featuring 5-10 original projects and a 500-word design philosophy essay",
          references: "One academic or professional reference"
        }
      },
      {
        id: 5185,
        title: "B.A. Digital Product Management & Creative Tech Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Three-year English-taught bachelor program training digital product owners, UX strategists, and tech entrepreneurs in central Amsterdam.",
        funding: "Dutch student finance eligibility for EU students; installment payment options",
        fee: "€0 application fee",
        tuition: "€13,500 per academic year for international students",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.ue-amsterdam.com/programmes/ba-digital-product-management",
        requirements: {
          gpa: "High school completion equivalent to Dutch HAVO/VWO",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Motivational letter explaining interest in digital product management",
          references: "High school transcript"
        }
      },
      {
        id: 5186,
        title: "Amsterdam Creative Agency & Interactive Media Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Semester-long corporate internship placed within leading Amsterdam advertising networks, interactive design studios, or tech startups.",
        funding: "€650 to €1,200 monthly corporate trainee compensation",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.ue-amsterdam.com/career-services/",
        requirements: {
          gpa: "Completion of 4 semesters in UE design or tech programs with minimum 2.7 German/Dutch grade",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Interactive design portfolio link and resume",
          references: "Faculty internship coordinator sign-off"
        }
      },
      {
        id: 5187,
        title: "B.A. Visual & Experience Design Studio Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Three-year bachelor exploring typography, motion design, interactive web interfaces, virtual reality environments, and spatial design.",
        funding: "Creative portfolio grants available",
        fee: "€0",
        tuition: "€13,200 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.ue-amsterdam.com/programmes/ba-visual-experience-design",
        requirements: {
          gpa: "High school diploma",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Creative design portfolio containing 8-12 visual pieces",
          references: "One referee"
        }
      },
      {
        id: 5188,
        title: "M.Sc. Data Science & Digital Transformation Enrolment",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Two-year postgraduate degree delivering advanced machine learning, predictive big data analytics, AI business models, and data governance.",
        funding: "Merit scholarships and corporate sponsorship eligible",
        fee: "€0",
        tuition: "€14,200 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.ue-amsterdam.com/programmes/msc-data-science",
        requirements: {
          gpa: "Bachelor's degree in quantitative field (Computer Science, Math, Economics, Engineering) with minimum 180 ECTS",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose and programming code sample",
          references: "Two academic recommendations"
        }
      },
      {
        id: 5189,
        title: "UE Amsterdam Women in Creative Tech Grant",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Grant program designed to increase female representation in digital product leadership, creative technology, and software development.",
        funding: "€2,500 direct grant applied against first-year tuition fees",
        fee: "€0",
        tuition: "Standard tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.ue-amsterdam.com/admissions/scholarships/",
        requirements: {
          gpa: "High school or bachelor's GPA >= 3.2",
          ielts: "IELTS 6.0+",
          gre: "Not required",
          papers: "Essay on female leadership in human-centered technology design",
          references: "One letter of support"
        }
      },
      {
        id: 5190,
        title: "Amsterdam Canal Ecosystem Creative Tech Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "One-year post-master's fellowship investigating public interactive digital installations and urban environmental data visualization in Amsterdam.",
        funding: "€4,000 project production grant and studio workspace in the Jordaan",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.ue-amsterdam.com/research/",
        requirements: {
          gpa: "Graduated with master's degree in design or creative technology with distinction",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Interactive exhibition proposal and prototype demonstration video",
          references: "Two faculty referee endorsements"
        }
      }
    ],
    researchers: [
      {
        id: 2241,
        name: "Prof. Dr. Maurits van Rooijen",
        title: "President of Academic Affairs",
        department: "Executive Leadership",
        topics: ["International Higher Education Innovation", "Urban Geography and Planning", "Digital Cross-Border Pedagogy"],
        summary: "Prof. Dr. Maurits van Rooijen is an internationally renowned educational leader and urban historian directing academic development at UE, researching trans-European university integration, sustainable urbanization, and digital creative pedagogies.",
        website: "https://www.ue-amsterdam.com/about-us/leadership/",
        source: "https://www.ue-amsterdam.com/about-us/leadership/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2242,
        name: "Prof. Christina Poth",
        title: "Professor of Visual Communication and Brand Design",
        department: "Faculty of Art and Design",
        topics: ["Spatial Brand Experiences", "Interactive Design Systems", "Typography and Semiotics"],
        summary: "Prof. Christina Poth leads visual communication studies, investigating responsive digital design systems, physical-digital brand interaction, and contemporary typography in interactive media.",
        website: "https://www.ue-amsterdam.com/faculty/",
        source: "https://www.ue-amsterdam.com/faculty/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2243,
        name: "Prof. Dr. Stefan Stein",
        title: "Professor of Applied Economics & Digital Business Models",
        department: "School of Business & Technology",
        topics: ["Platform Economics", "FinTech Disruption", "Digital Corporate Transformation"],
        summary: "Prof. Dr. Stefan Stein instructs in digital economics and business models, analyzing platform market dynamics, algorithmic finance, and startup venture scaling in European technology hubs.",
        website: "https://www.ue-amsterdam.com/faculty/",
        source: "https://www.ue-amsterdam.com/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 30. Netherlands: University of Groningen (Zernike Campus)
  {
    institution: "University of Groningen (Zernike Campus)",
    slug: "university-of-groningen-zernike-campus",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1528,
    location: "Groningen, Netherlands",
    website: "https://www.rug.nl",
    shortName: "Groningen Zernike Campus",
    badge: "Nobel-Winning Science & Energy Hub",
    overview: "The University of Groningen (Zernike Campus / Campus Groningen), named after Nobel laureate Frits Zernike in the northern Netherlands, is one of Europe's premier science, technology, and energy research complexes, housing the Faculty of Science and Engineering, the Stratingh Institute for Chemistry (home to 2016 Nobel Laureate Ben Feringa), the Zernike Institute for Advanced Materials (ZIAM), and the Energy Academy Europe.",
    lead: "Explore world-leading bachelor, master, and PhD programs in nanotechnology, molecular chemistry, artificial intelligence, and Eric Bleumink fellowships at Groningen Zernike Campus.",
    description: "University of Groningen Zernike Campus accredited degrees in nanosciences, molecular chemistry, AI, renewable energy, and Nobel-tier research fellowships.",
    quickFacts: {
      type: "Public World-Top-100 Research University Campus",
      campus: "Zernike Campus (Zernikepark / Nijenborgh), Groningen, Netherlands",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders) / Top 100 World Ranked",
      admissions: "Studielink portal and University of Groningen Online Application System (OAS)",
      language: "English (100% English-taught science & engineering programs; IELTS 6.5 / TOEFL iBT 90+)",
      aid: "Eric Bleumink Fund Scholarships, Holland Scholarships & NWO Doctoral Research Grants"
    },
    strengths: [
      "Home to the research laboratories of Nobel Laureate in Chemistry Prof. Dr. Ben Feringa (molecular motors and nanomachines)",
      "Zernike Institute for Advanced Materials (ZIAM) consistently ranked among the world's top 10 materials research institutes",
      "Energy Academy Europe—the Dutch national hub for clean hydrogen, smart electrical grids, and energy transition research",
      "Over 4,000 international researchers and students in advanced robotics, cognitive AI, quantum physics, and biomedical engineering"
    ],
    programs: [
      { title: "B.Sc. in Artificial Intelligence & Cognitive Computing", level: "Bachelor of Science (B.Sc.)", desc: "Three-year research-intensive English bachelor program covering autonomous robotics, neural computing, natural language processing, and human-machine interaction." },
      { title: "M.Sc. in Nanoscience (Top Master Program)", level: "Master of Science (M.Sc.)", desc: "Selective elite two-year research master at ZIAM exploring quantum transport, molecular electronics, scanning probe microscopy, and nanobiomaterials." },
      { title: "M.Sc. in Energy and Environmental Sciences", level: "Master of Science (M.Sc.)", desc: "Two-year multidisciplinary curriculum focusing on decarbonization pathways, renewable hydrogen systems, climate modeling, and energy transition policy." }
    ],
    opportunities: [
      {
        id: 5191,
        title: "Eric Bleumink Fund Master's Research Fellowship",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        desc: "Prestigious full scholarship awarded to exceptional master's scholars from developing countries covering 100% of tuition, living expenses, books, and international health insurance.",
        funding: "Full scholarship: 100% tuition coverage plus approx. €14,000 annual living stipend, travel, and insurance",
        fee: "€100 application fee (reimbursed upon admission)",
        tuition: "€0 (fully covered by fellowship)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.rug.nl/education/scholarships/eric-bleumink-fund",
        requirements: {
          gpa: "Conferred bachelor's degree with academic distinction (minimum equivalent to Dutch grade 8.5/10 or GPA 3.8/4.0)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90",
          gre: "Recommended for quantitative STEM disciplines",
          papers: "Academic excellence statement and 1,000-word research proposal aligned with Zernike research groups",
          references: "Two academic letters of recommendation from university professors"
        }
      },
      {
        id: 5192,
        title: "M.Sc. Nanoscience Top Master Program Enrolment",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        desc: "Highly selective elite 120-ECTS research master at the Zernike Institute for Advanced Materials (ZIAM), featuring personal lab rotations and tuition waiver support.",
        funding: "All admitted students receive full ZIAM fellowships covering living expenses and tuition fees",
        fee: "€100 application fee",
        tuition: "€2,530 EU statutory / €20,900 international (offset by fellowship)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.rug.nl/masters/nanoscience/",
        requirements: {
          gpa: "Top 5% bachelor's degree in Physics, Chemistry, or Materials Science",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100",
          gre: "Physics/Chemistry GRE score strongly recommended",
          papers: "Letter of motivation, CV, and extensive scientific writing sample",
          references: "Three academic reference letters"
        }
      },
      {
        id: 5193,
        title: "Stratingh Institute Molecular Nanotechnology Lab Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "6-month intensive research internship within the Stratingh Institute for Chemistry working on synthetic light-driven molecular motors and smart drug delivery.",
        funding: "€1,100 monthly research intern stipend and laboratory consumable allocation",
        fee: "Covered by graduate enrollment",
        tuition: "Covered by graduate enrollment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.rug.nl/research/stratingh/",
        requirements: {
          gpa: "Enrolled in master's in chemistry, chemical engineering, or nanoscience with GPA >= 3.5",
          ielts: "English C1 fluency",
          gre: "Not required",
          papers: "Synthetic organic chemistry laboratory technique portfolio",
          references: "Stratingh Institute research group leader recommendation"
        }
      },
      {
        id: 5194,
        title: "B.Sc. in Artificial Intelligence (English-Taught) Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Three-year research-based bachelor program in autonomous robotics, neural networks, cognitive modeling, and computer vision at the Bernoulli Institute.",
        funding: "Dutch statutory tuition for EU students (€2,530/yr); Holland Scholarships available for non-EU students",
        fee: "€100 application fee",
        tuition: "€17,800 per academic year for non-EU/EEA students",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.rug.nl/bachelors/artificial-intelligence/",
        requirements: {
          gpa: "Secondary school diploma with high grades in advanced mathematics and physics (Numerus Fixus program)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Participation in the cognitive and mathematical selection assessment",
          references: "Academic transcript evaluation"
        }
      },
      {
        id: 5195,
        title: "Energy Academy Europe Clean Hydrogen Transition Grant",
        type: "Grant",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Grant supporting graduate research examining green hydrogen electrolysis scaling, regional underground salt cavern storage, and pipeline infrastructure in the North Sea.",
        funding: "€3,500 research grant and access to Energy Academy Europe experimental facilities",
        fee: "€0",
        tuition: "Standard tuition",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.energyacademy.org",
        requirements: {
          gpa: "Enrolled in M.Sc. Energy & Environmental Sciences or Chemical Engineering with GPA >= 3.4",
          ielts: "English C1",
          gre: "Not required",
          papers: "5-page research plan on hydrogen grid injection thermodynamics",
          references: "Energy Academy professorial nomination"
        }
      },
      {
        id: 5196,
        title: "M.Sc. in Biomolecular Sciences & Synthetic Biology Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year master's curriculum at the Groningen Biomolecular Sciences and Biotechnology Institute (GBB) exploring membrane biology, cryo-EM, and protein engineering.",
        funding: "Holland Scholarship (€5,000) and GBB research bursaries eligible",
        fee: "€100 application fee",
        tuition: "€20,900 per academic year for non-EEA students",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.rug.nl/masters/biomolecular-sciences/",
        requirements: {
          gpa: "Bachelor's degree in Molecular Biology, Biochemistry, or Biotechnology with GPA >= 3.2",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Laboratory research report and motivation letter",
          references: "Two academic recommendations"
        }
      },
      {
        id: 5197,
        title: "Zernike Institute NWO Doctoral Research Fellowship",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        desc: "Four-year fully salaried doctoral research position funded by the Dutch Research Council (NWO) investigating quantum materials and topological insulators.",
        funding: "Full 4-year Dutch academic employment salary (€2,770 to €3,539/month gross under Dutch University CLA) plus comprehensive pension and holiday allowances",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.rug.nl/research/zernike/",
        requirements: {
          gpa: "Conferred master's degree in Physics, Materials Science, or Nanotechnology with high honors",
          ielts: "English C1 fluency",
          gre: "Not required",
          papers: "Master's thesis summary and 8-page PhD research plan on 2D van der Waals heterostructures",
          references: "Three academic referee letters of international standing"
        }
      }
    ],
    researchers: [
      {
        id: 2244,
        name: "Prof. Dr. Ben L. Feringa",
        title: "Nobel Laureate & Jacobus van 't Hoff Distinguished Professor",
        department: "Stratingh Institute for Chemistry, Zernike Campus",
        topics: ["Synthetic Molecular Motors", "Nanomachines", "Photopharmacology"],
        summary: "Prof. Dr. Ben L. Feringa was awarded the 2016 Nobel Prize in Chemistry for the design and synthesis of molecular machines. His laboratory at Zernike Campus leads global breakthroughs in light-driven rotary molecular motors, responsive smart materials, and photopharmacological cancer therapies.",
        website: "https://www.rug.nl/staff/b.l.feringa/",
        source: "https://www.rug.nl/staff/b.l.feringa/",
        recruiting: "Not verified",
        subject: "chemistry"
      },
      {
        id: 2245,
        name: "Prof. Dr. Maria Antonietta Loi",
        title: "Chair of Photophysics & Optoelectronics",
        department: "Zernike Institute for Advanced Materials (ZIAM)",
        topics: ["Perovskite Photovoltaics", "Carbon Nanotube Optoelectronics", "Quantum Transport"],
        summary: "Prof. Dr. Maria Antonietta Loi directs the Photophysics and Optoelectronics group at ZIAM, conducting pioneering investigations into hybrid halide perovskite solar cells, single-walled carbon nanotube physics, and advanced semiconductor carrier dynamics.",
        website: "https://www.rug.nl/staff/m.a.loi/",
        source: "https://www.rug.nl/staff/m.a.loi/",
        recruiting: "Not verified",
        subject: "physics"
      },
      {
        id: 2246,
        name: "Prof. Dr. Lambert Schomaker",
        title: "Professor of Artificial Intelligence",
        department: "Bernoulli Institute for Mathematics, Computer Science and AI",
        topics: ["Handwriting Recognition AI", "Machine Learning in Paleography", "Biomimetic Autonomous Robotics"],
        summary: "Prof. Dr. Lambert Schomaker is an international pioneer in document artificial intelligence, pattern recognition, and neural network algorithms, leading groundbreaking machine learning analyses of ancient historical manuscripts including the Dead Sea Scrolls.",
        website: "https://www.rug.nl/staff/l.r.b.schomaker/",
        source: "https://www.rug.nl/staff/l.r.b.schomaker/",
        recruiting: "Not verified",
        subject: "computer-science"
      }
    ]
  }
];
