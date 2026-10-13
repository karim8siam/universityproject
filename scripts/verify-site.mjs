import { readFileSync, existsSync } from "node:fs";
import { opportunities, researchers, subjects } from "../data.js";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const read=(p)=>readFileSync(join(root,p),"utf8");
const assert=(ok,why)=>{if(!ok)throw new Error(why)};
const subjectIds=new Set(subjects.map(s=>s.id));
const ids=new Set();
for(const o of opportunities){
 assert(!ids.has(o.id),"Duplicate opportunity "+o.id);
 ids.add(o.id);
 assert(subjectIds.has(o.subject),"Invalid subject "+o.id);
 assert(Array.isArray(o.subjects)&&o.subjects.every(s=>subjectIds.has(s)),"Invalid subject list "+o.id);
 assert(o.university&&o.country&&o.location&&o.source.startsWith("https://"),"Missing official source or university "+o.id);
 assert(o.funding&&o.fee&&o.requirements,"Incomplete funding/application facts "+o.id);
 if(o.deadline)assert(/^\d{4}-\d{2}-\d{2}$/.test(o.deadline)&&!Number.isNaN(Date.parse(o.deadline)),"Invalid deadline "+o.id);
}
for(const p of researchers){
 assert(subjectIds.has(p.subject),"Invalid researcher subject "+p.id);
 assert(p.name&&p.university&&p.source.startsWith("https://"),"Incomplete researcher "+p.id);
 assert(p.recruiting==="Not verified","Do not assert recruitment without separate verification: "+p.id);
}
const routes=[["/","index.html"],["/universities/acadia-university/","universities/acadia-university/index.html"],["/scholarships/acadia-entrance-scholarships-2027/","scholarships/acadia-entrance-scholarships-2027/index.html"],...subjects.filter(s=>s.id!=="engineering").map(s=>[`/subjects/${s.id}/`,`subjects/${s.id}/index.html`]),...["about","editorial-policy","privacy","contact"].map(x=>[`/${x}/`,`${x}/index.html`])];
const sitemap=read("sitemap.xml"),domain="https://universityproject-chi.vercel.app";
for(const [path,file] of routes){
 assert(existsSync(join(root,file)),"Missing HTML for "+path);
 const html=read(file);
 assert(html.includes("<title>")&&html.includes('name="description"'),"SEO tags missing "+file);
 assert(sitemap.includes("<loc>"+domain+path+"</loc>"),"Sitemap entry missing "+path);
 if(path!=="/")assert(html.includes("canonical"),"Canonical absent "+file);
}
assert(read("robots.txt").includes("Sitemap: "+domain+"/sitemap.xml"),"Robots sitemap mismatch");
for(const s of subjects)assert(existsSync(join(root,`subjects/${s.id}/index.html`)),"Missing subject guide "+s.id);
assert(read("data.js").includes('name: "Physics"')||subjects.find(s=>s.id==="physics")?.name==="Physics","Physics label regression");
assert(read("app.js").includes("shahriyarkarimsiam@gmail.com"),"Missing free contact");
console.log(`PASS: ${routes.length} sitemap URLs, ${subjects.length} subject guides, ${opportunities.length} source-linked records and ${researchers.length} faculty profiles.`);
