// DEMO DATA ONLY — not verified scholarship or university information.
const daysFromNow=(n)=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)};
export const subjects=[
{id:"physics",name:"Physics & Astronomy",icon:"✦",tagline:"From particles to galaxies",topics:["Quantum physics","Astronomy","Condensed matter"]},
{id:"engineering",name:"Engineering",icon:"⌁",tagline:"Build what's next",topics:["Mechanical","Electrical","Civil"]},
{id:"computer-science",name:"Computer Science",icon:"⌘",tagline:"Imagine better systems",topics:["Machine learning","AI","Security"]},
{id:"mathematics",name:"Mathematics",icon:"∑",tagline:"Explore ideas without limits",topics:["Analysis","Statistics","Applied math"]},
{id:"biology",name:"Biology & Medicine",icon:"❋",tagline:"Understand living systems",topics:["Molecular biology","Neuroscience","Medicine"]},
{id:"chemistry",name:"Chemistry",icon:"⚗",tagline:"Study matter and change",topics:["Organic","Materials","Physical chemistry"]},
{id:"environment",name:"Earth & Environment",icon:"◌",tagline:"Research the world around us",topics:["Climate","Ecology","Geoscience"]},
{id:"social-sciences",name:"Social Sciences",icon:"◇",tagline:"Study people and societies",topics:["Economics","Sociology","Psychology"]}
];
export const opportunities=[
{id:1,subject:"physics",type:"PhD",title:"Quantum information doctoral pathway",university:"Northbridge Research University",country:"Switzerland",funding:"Fully funded",deadline:daysFromNow(24),desc:"Illustrative research-focused doctorate in quantum information and computation."},
{id:2,subject:"physics",type:"Internship",title:"Summer astrophysics research placement",university:"Westhaven Institute of Science",country:"United Kingdom",funding:"Stipend available",deadline:daysFromNow(46),desc:"An example of an intensive undergraduate astrophysics research experience."},
{id:3,subject:"engineering",type:"Master's",title:"Sustainable systems graduate award",university:"Lakeshore Technical University",country:"Germany",funding:"Partial funding",deadline:daysFromNow(35),desc:"Demo master's scholarship in applied engineering."},
{id:4,subject:"computer-science",type:"PhD",title:"Trustworthy AI research studentship",university:"Portwell University",country:"Canada",funding:"Fully funded",deadline:daysFromNow(67),desc:"Illustrative funded doctoral research in reliable AI."},
{id:5,subject:"mathematics",type:"Fellowship",title:"Mathematical modelling research fellowship",university:"Belltower Institute",country:"Netherlands",funding:"Fully funded",deadline:daysFromNow(52),desc:"Example research fellowship in computational mathematics."},
{id:6,subject:"physics",type:"Scholarship",title:"Graduate physics scholarship",university:"Northbridge Research University",country:"Switzerland",funding:"Full tuition",deadline:daysFromNow(74),desc:"Demonstration scholarship listing for studying advanced physics."},
{id:7,subject:"physics",type:"Research",title:"Condensed matter visiting researcher",university:"Westhaven Institute of Science",country:"United Kingdom",funding:"Stipend available",deadline:daysFromNow(12),desc:"Sample visiting research program for advanced undergraduates."},
{id:8,subject:"physics",type:"PhD",title:"Expired test vacancy",university:"Fictional University",country:"USA",funding:"Fully funded",deadline:daysFromNow(-9),desc:"This deliberately expired listing must never show in active opportunities."}
];
export const researchers=[
{id:1,subject:"physics",name:"Dr. Elena Marlowe",title:"Professor of Quantum Science",university:"Northbridge Research University",topics:["Quantum information","Quantum algorithms","Computational physics"]},
{id:2,subject:"physics",name:"Prof. Adrian Vale",title:"Professor of Astrophysics",university:"Westhaven Institute of Science",topics:["Galaxies","Stellar dynamics","Cosmology"]},
{id:3,subject:"engineering",name:"Dr. Priya Sen",title:"Associate Professor of Engineering",university:"Lakeshore Technical University",topics:["Renewable systems","Control theory"]},
{id:4,subject:"computer-science",name:"Prof. Mikael Rowan",title:"Professor of Computer Science",university:"Portwell University",topics:["Machine learning","AI safety"]}
];
