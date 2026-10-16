import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {opportunities,subjects} from '../data.js';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Dhaka',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const slug=s=>String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const expired=opportunities.filter(o=>o.deadline&&o.deadline<today);
const update=(rel,fn)=>{const path=join(root,rel);if(!existsSync(path))throw new Error('Expected file missing '+rel);const original=readFileSync(path,'utf8'),changed=fn(original);if(original!==changed){writeFileSync(path,changed,'utf8');console.log('Updated '+rel);return 1;}return 0};
let edits=0;
for(const o of expired){
 const route='/opportunities/'+o.id+'-'+slug(o.title)+'/';
 const path=route.slice(1)+'index.html';
 edits+=update(path,html=>{
  let next=html;
  if(!next.includes('name="robots" content="noindex,follow"'))next=next.replace('<head>','<head><meta name="robots" content="noindex,follow">');
  next=next.replace(/<div class="date" data-application-deadline="[^"]+">[^<]*<\/div>/g,'<div class="date">This application cycle closed on '+o.deadline+'. Please consult the university for the next cycle.</div>');
  return next;
 });
 const u='https://openstemfield.org'+route;
 edits+=update('sitemap.xml',xml=>xml.replace(new RegExp('\\s*<url>\\s*<loc>'+u.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')+'<\\/loc>[\\s\\S]*?<\\/url>\\n?','g'),''));
}
const universityPages=existsSync(join(root,'universities'))?readdirSync(join(root,'universities'),{withFileTypes:true}).filter(item=>item.isDirectory()&&existsSync(join(root,'universities',item.name,'index.html'))).map(item=>'universities/'+item.name+'/index.html'):[];
const categories=[...universityPages,...subjects.map(s=>'subjects/'+s.id+'/index.html')];
for(const rel of categories){
 edits+=update(rel,html=>html.replace(/<article class="card" data-deadline="(\d{4}-\d{2}-\d{2})">[\s\S]*?<\/article>/g,(record,date)=>date<today?'':record));
}
// Archive standalone dated scholarship pages when their verified round has passed.
const datedScholarshipPages=[
 {route:'/scholarships/adelaide-graduate-research-talent-scheme-2027/',deadline:'2026-11-02'},
 {route:'/scholarships/dresden-deutschlandstipendium-2026-27/',deadline:'2026-10-14'}
];
for(const item of datedScholarshipPages){
 if(item.deadline>=today)continue;
 const file=item.route.slice(1)+'index.html';
 edits+=update(file,html=>html.includes('name="robots" content="noindex')?html:html.replace('<head>','<head><meta name="robots" content="noindex,follow">').replace('<section class="hero">','<section class="hero"><p class="source-note">This scholarship round has closed. Check the university for future rounds.</p>'));
 const loc='https://openstemfield.org'+item.route;
 edits+=update('sitemap.xml',xml=>xml.split('\n').filter(line=>!line.includes('<loc>'+loc+'</loc>')).join('\n'));
}
console.log('Deadline maintenance: '+expired.length+' expired records, '+edits+' files updated.');
