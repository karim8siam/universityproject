/* Country directory: source sheet screening list. University-specific academic facts are published separately. */
(async function(){
const id=document.body.dataset.country;
const el=document.getElementById("institution-list");
const input=document.getElementById("institution-search");
const count=document.getElementById("directory-count");
const more=document.getElementById("show-more-institutions");
if(!id||!el)return;
const PAGE=24;
let records=[],limit=PAGE;
const published={"canada":{"Acadia University":"/universities/acadia-university/","Alberta University of the Arts":"/universities/alberta-university-of-the-arts/","The University of British Columbia":"/universities/university-of-british-columbia/"},"australia":{"Adelaide University":"/universities/adelaide-university/","The University of Melbourne":"/universities/the-university-of-melbourne/"},"germany":{"Academy of Fine Arts Dresden":"/universities/academy-of-fine-arts-dresden/","Technical University of Munich":"/universities/technical-university-of-munich/"},"italy":{"Accademia di Belle Arti di Lecce":"/universities/accademia-di-belle-arti-di-lecce/","Sapienza University of Rome":"/universities/sapienza-university-of-rome/"},"usa":{"A.T. Still University":"/universities/a-t-still-university/","American University":"/universities/american-university/"},"uk":{"Aberystwyth University":"/universities/aberystwyth-university/","Imperial College London":"/universities/imperial-college-london/"},"japan":{"Aichi University":"/universities/aichi-university/","The University of Tokyo":"/universities/the-university-of-tokyo/"},"sweden":{"Blekinge Institute of Technology":"/universities/blekinge-institute-of-technology/","KTH Södertälje":"/universities/kth-royal-institute-of-technology/","KTH Royal Institute of Technology":"/universities/kth-royal-institute-of-technology/"},"netherlands":{"University of Groningen":"/universities/university-of-groningen/","Academiegebouw":"/universities/university-of-groningen/","Eindhoven University of Technology":"/universities/eindhoven-university-of-technology/"},"switzerland":{"ETH Zurich":"/universities/eth-zurich/","ETH NO":"/universities/eth-zurich/","École Polytechnique Fédérale de Lausanne (EPFL)":"/universities/ecole-polytechnique-federale-de-lausanne/"}};
const safeLink=(value)=>{try{const u=new URL(value);return u.protocol==="https:"||u.protocol==="http:"?u.href:null}catch{return null}};
const create=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n};
function draw(){
const q=(input?.value||"").trim().toLocaleLowerCase();
const filtered=records.filter(x=>!q||x.name.toLocaleLowerCase().includes(q));
el.replaceChildren();
for(const x of filtered.slice(0,limit)){
const item=create("article","institution-entry");
const main=create("div");
const heading=create("h3");
const detail=published[id]?.[x.name];
const nameLink=detail?create("a","",x.name):null;
if(nameLink){nameLink.href=detail;heading.appendChild(nameLink)}else heading.textContent=x.name;
main.appendChild(heading);
const status=x.status==="Keep — merge/verify parent"?"Campus / parent institution under review":x.status==="Keep — needs verification"?"Institution type to verify":"Academic verification pending";
main.appendChild(create("div","subtext",detail?(id==="usa"?"US health-professions graduate programs and research reviewed":id==="italy"?"Lecce, Apulia · arts doctorates and study reviewed":id==="germany"?"Dresden, Saxony · doctoral and arts study reviewed":x.name==="Acadia University"?"Wolfville, Nova Scotia · university details reviewed":id==="australia"?"Adelaide, South Australia · university details reviewed":"Calgary, Alberta · university details reviewed"):status));
if(detail){
const link=create("a","visit","University guide, programs and funding ↗");
link.href=detail;main.appendChild(link);
}else{
const u=safeLink(x.website);
if(u){const link=create("a","visit","Listed website ↗ (not yet verified)");link.href=u;link.target="_blank";link.rel="noopener noreferrer nofollow";main.appendChild(link)}
}
item.appendChild(main);
item.appendChild(create("span","status",detail?"Reviewed":"In queue"));
el.appendChild(item);
}
count.textContent=filtered.length+" candidate institutions · "+Math.min(filtered.length,limit)+" shown";
more.hidden=limit>=filtered.length;
}
try{
 const res=await fetch("/country-directory.json",{cache:"no-store"});
 if(!res.ok)throw new Error("Directory unavailable");
 const all=await res.json();
 const group=all.countries.find(x=>x.id===id);
 if(!group)throw new Error("Country not found");
 records=group.institutions;
 draw();
 input?.addEventListener("input",()=>{limit=PAGE;draw()});
 more?.addEventListener("click",()=>{limit+=PAGE;draw()});
}catch(e){
count.textContent="The candidate list is temporarily unavailable.";
el.appendChild(create("p","subtext","The source-reviewed university guides remain accessible above."));
}
})();