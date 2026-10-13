import {readFileSync,existsSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {opportunities,researchers,subjects} from '../data.js';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const read=p=>readFileSync(join(root,p),'utf8');
const assert=(yes,msg)=>{if(!yes)throw Error(msg)};
const domain='https://universityproject-chi.vercel.app';
const slug=s=>String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const date=new Date().toISOString().slice(0,10);
const oppPath=o=>'/opportunities/'+o.id+'-'+slug(o.title)+'/';
const personPath=p=>'/researchers/'+p.id+'-'+slug(p.name)+'/';
const subjectNames=new Set(subjects.map(s=>s.id));
const idSet=new Set;
for(const o of opportunities){
 assert(!idSet.has(o.id),'Duplicate opportunity ID '+o.id);idSet.add(o.id);
 assert(subjectNames.has(o.subject),'Unknown subject '+o.title);
 assert((o.subjects||[]).length>0&&(o.subjects||[]).every(x=>subjectNames.has(x)),'Missing or invalid subject list '+o.id);
 assert(o.university&&o.country&&o.location&&o.source.startsWith('https://'),'Incomplete official source '+o.id);
 assert(o.funding&&o.fee&&o.requirements,'Missing cost or requirement record '+o.id);
 if(o.deadline)assert(/^\d{4}-\d{2}-\d{2}$/.test(o.deadline)&&!Number.isNaN(Date.parse(o.deadline)),'Invalid application date '+o.id);
}
for(const p of researchers){
 assert(p.name&&p.university&&p.source?.startsWith('https://'),'Researcher missing university source '+p.id);
 assert(subjectNames.has(p.subject),'Invalid faculty subject '+p.id);
 assert(p.recruiting==='Not verified','Unverified recruiting claim '+p.id);
}
assert(subjects.find(s=>s.id==='physics')?.name==='Physics','Physics naming regression');
const staticRoutes=['/','/universities/acadia-university/','/scholarships/acadia-entrance-scholarships-2027/',...subjects.filter(s=>s.id!=='engineering').map(s=>'/subjects/'+s.id+'/'),...['about','editorial-policy','privacy','contact'].map(x=>'/'+x+'/')];
const active=opportunities.filter(o=>!o.deadline||o.deadline>=date).map(oppPath);
const profiles=researchers.map(personPath);
const expected=[...staticRoutes,...active,...profiles];
const map=read('sitemap.xml');
const entries=[...map.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert(entries.length===new Set(entries).size,'Duplicate sitemap URLs');
assert(read('robots.txt').includes('Sitemap: '+domain+'/sitemap.xml'),'Robots sitemap missing');
for(const url of expected){
 const file=url==='/'?'index.html':url.slice(1)+'index.html';
 assert(existsSync(join(root,file)),'Missing public URL HTML '+file);
 const html=read(file);
 assert(html.includes('<title>')&&html.includes('name="description"'),'Missing title/description '+file);
 assert(map.includes('<loc>'+domain+url+'</loc>'),'Sitemap does not include '+url);
 if(url!=='/')assert(html.includes('rel="canonical"'),'Missing canonical '+file);
}
for(const o of opportunities.filter(o=>o.deadline&&o.deadline<date)){
 assert(!map.includes('<loc>'+domain+oppPath(o)+'</loc>'),'Expired record still in sitemap '+o.title);
 assert(read(oppPath(o).slice(1)+'index.html').includes('name="robots" content="noindex,follow"'),'Expired article not noindex '+o.id);
}
for(const url of entries)assert(expected.some(x=>domain+x===url),'Unexpected or expired sitemap URL '+url);
for(const s of subjects)assert(existsSync(join(root,'subjects/'+s.id+'/index.html')),'Missing subject HTML '+s.id);
const app=read('app.js');
assert(!/fictional demonstration data|demo opportunity|example research fellowship/i.test(app),'Fictional data claims visible in JS');
assert(app.includes('const oppPath=')&&app.includes('const personPath='),'Cards do not link to indexable URLs');
assert(app.includes('shahriyarkarimsiam@gmail.com'),'Free contact missing');
console.log('OpenField PASS: '+expected.length+' indexable URLs, '+opportunities.length+' real university opportunity/program records, '+researchers.length+' sourced faculty listings.');
