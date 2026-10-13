import {readFileSync,existsSync,readdirSync} from 'node:fs';
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
// Discover the current indexable pages so adding a country never requires a hardcoded sitemap list.
const listedRoutes=area=>{
 const folder=join(root,area);
 if(!existsSync(folder))return [];
 return readdirSync(folder,{withFileTypes:true})
  .filter(item=>item.isDirectory()&&existsSync(join(folder,item.name,'index.html')))
  .map(item=>'/'+area+'/'+item.name+'/')
  .filter(route=>!read(route.slice(1)+'index.html').includes('name="robots" content="noindex'));
};
const staticRoutes=['/','/universities/',...listedRoutes('universities'),...listedRoutes('countries'),...listedRoutes('scholarships'),...listedRoutes('subjects'),...['about','editorial-policy','privacy','contact'].map(name=>'/'+name+'/')];
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
 const title=html.match(/<title>([^<]+)<\/title>/)?.[1];
 const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
 assert(title&&description&&title.length>15&&description.length>45,'Missing or weak metadata '+file);
 assert(!/undefined|fictional demo/i.test(title),'Broken SEO title '+file);
 assert(canonical===domain+url,'Incorrect canonical URL '+file);
 assert(!html.includes('name="robots" content="noindex'),'Nonindexable page in sitemap '+file);
 assert(map.includes('<loc>'+domain+url+'</loc>'),'Sitemap missing '+url);
}
for(const o of opportunities.filter(o=>o.deadline&&o.deadline<date)){
 assert(!map.includes('<loc>'+domain+oppPath(o)+'</loc>'),'Expired record still in sitemap '+o.title);
 assert(read(oppPath(o).slice(1)+'index.html').includes('name="robots" content="noindex,follow"'),'Expired article not noindex '+o.id);
}
for(const match of map.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/url>/g)){
 assert(/^\d{4}-\d{2}-\d{2}$/.test(match[2])&&match[2]<=date,'Incorrect sitemap lastmod '+match[1]);
}
for(const url of entries)assert(expected.some(x=>domain+x===url),'Unexpected or expired sitemap URL '+url);
for(const s of subjects)assert(existsSync(join(root,'subjects/'+s.id+'/index.html')),'Missing subject HTML '+s.id);
const app=read('app.js');
assert(!/fictional demonstration data|demo opportunity|example research fellowship/i.test(app),'Fictional data claims visible in JS');
assert(app.includes('const oppPath=')&&app.includes('const personPath='),'Cards do not link to indexable URLs');
assert(app.includes('shahriyarkarimsiam@gmail.com'),'Free contact missing');
const countryAtlas=JSON.parse(read("country-directory.json"));
const rotation=JSON.parse(read("country-rotation.json"));
assert(countryAtlas.countries.length===10,"Exactly 10 country groups required");
assert(countryAtlas.countries.reduce((sum,g)=>sum+g.institutions.length,0)===1646,"Candidate list changed; refresh Sheet-derived directory");
assert(rotation.order.length===10&&new Set(rotation.order).size===10,'Must have 10 unique countries');
assert(rotation.order.includes(rotation.nextCountry),'Rotation next country is invalid');
for(const group of countryAtlas.countries){
 const rel='countries/'+group.id+'/index.html';
 assert(existsSync(join(root,rel)),'Country page missing '+rel);
 const html=read(rel);
 const indexed=entries.includes(domain+'/countries/'+group.id+'/');
 const noindex=html.includes('name="robots" content="noindex');
 const published=Number(rotation.publishedInCountry?.[group.id]||0);
 assert(html.includes('rel="canonical"'),'Missing country canonical '+rel);
 assert(indexed===!noindex,'Country sitemap/noindex mismatch '+rel);
 if(published>0)assert(!noindex,'Published country is noindex '+rel);
 if(published===0)assert(noindex,'Unverified country is indexable '+rel);
}
assert(read("country-directory.js").includes("textContent"),"University shortlist must be safely rendered");
assert(read("universities/index.html").includes('href="/countries/australia/"'),"Country directory lacks Australia");
assert(!app.includes("First university, now live."),"Old first university hero still visible");

console.log('OpenField PASS: '+expected.length+' indexable URLs, '+opportunities.length+' real university opportunity/program records, '+researchers.length+' sourced faculty listings.');
