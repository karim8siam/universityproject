import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {opportunities,subjects} from '../data.js';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const today=new Date().toISOString().slice(0,10);
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
 const u='https://universityproject-chi.vercel.app'+route;
 edits+=update('sitemap.xml',xml=>xml.replace(new RegExp('<url><loc>'+u.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')+'<\\/loc><lastmod>[^<]+<\\/lastmod><\\/url>\\n?','g'),''));
}
const categories=['universities/acadia-university/index.html',...subjects.map(s=>'subjects/'+s.id+'/index.html')];
for(const rel of categories){
 edits+=update(rel,html=>html.replace(/<article class="card" data-deadline="(\d{4}-\d{2}-\d{2})">[\s\S]*?<\/article>/g,(record,date)=>date<today?'':record));
}
console.log('Deadline maintenance: '+expired.length+' expired records, '+edits+' files updated.');
