
{
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const RIGHT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const reduce=false;
document.documentElement.classList.add('js');


const services=[
 {t:'Production',d:'On-location photo and video, interviews, events and drone — edited, colored and cut for every format by our own crew.',tags:['Photo & video','Drone','Post-production'],v:''},
 {t:'Social Media',d:'Management and content for Instagram, TikTok, Facebook, LinkedIn, X and Google Business Profile.',tags:['Content calendar','Reels & Stories','Reporting'],v:'photo p-an2'},
 {t:'Creative',d:'Campaign graphics, digital ads, menus, catalogs, posters, copy and print.',tags:['Design & copy','Print & delivery'],v:'photo p-ag2'},
 {t:'Branding',d:'Logo, palette, typography, guidelines, positioning and brand voice.',tags:['Visual identity','Messaging'],v:'v4'},
 {t:'Digital',d:'Responsive websites, landing pages, local SEO and Meta ad campaigns.',tags:['Web & SEO','Meta ads'],v:'v6'},
 {t:'Influence & Partnerships',d:'Creator campaigns and local brand partnerships, from research to review.',tags:['Creators','Partnerships'],v:'v2'},
 {t:'Marketing & Business',d:'Growth plans, research, lead generation and U.S. business setup support.',tags:['Growth plans','LLC & registration'],v:'v4'}
];
const logos=[
 ['a','','img cl-ag','',''],['b','dk','img cl-an','',''],['c','','o','US Sabre Academy',''],
 ['d','','h','Rotary One',''],['e','dk','l','Cleopatra Ink',''],['g','','s','TACA','Chicago'],['h','','o','Bobby Dixon',''],
 ['i','','h','Chicago Fenerbahçeliler','Derneği'],['j','','l','Seyda Calderwood','Allstate']
];
const stories=[
 {n:'Rotary One',h:'Content built for the feed',t:'Content production',v:'v4'},
 {n:'TACA Chicago',h:'Culture on Instagram',t:'Instagram content',v:'v3'},
 {n:'Agora Truck Parts',h:'Water Pump campaign',t:'Social media · Creative direction · Campaign design',v:'photo p-ag1'},
 {n:'Cleopatra Ink',h:'From studio to screen',t:'Social media · Design · Production',v:'v6'},
 {n:'Anatolia Chicago',h:'Mixed Kebab',t:'Social media · Content creation · Graphic design',v:'photo p-an1'},
 {n:'US Sabre Academy',h:'Every bout on camera',t:'Content & video production',v:'v2'},
 {n:'Chicago Fenerbahçeliler',h:'A community, one voice',t:'Social media · Graphic design',v:'v4'}
];
const lists={
 shorts:[['Agora Truck Parts','Campaign'],['Anatolia Chicago','Restaurant'],['Cleopatra Ink','Studio'],['US Sabre Academy','Academy'],['Rotary One','Content'],['TACA Chicago','Culture'],['FB Chicago','Community'],['Seyda Calderwood','Insurance'],['Bobby Dixon','Social']],
 projects:[['Agora Truck Parts','Website'],['QB Dental','Website & booking'],['Palace Istanbul','Website & SEO'],['FB Chicago','Association site'],['Hello Sweetie USA','Web game'],['Tria Yangın','Website']]
};
const team=[['Team member','Founder','v4'],['Team member','Art Director','v2'],['Team member','Videographer','v6'],['Team member','Social Media Manager','']];
const posts=[{"t": "Local SEO for Chicago small businesses: where to start", "c": "Local SEO", "d": "What actually moves you up in local search \u2014 your profile, reviews, pages and citations \u2014 and what to do first.", "u": "post-local-seo.html"}, {"t": "Google Business Profile: the checklist we run for every client", "c": "Google", "d": "The fields, photos, posts and habits that keep a profile complete, accurate and active.", "u": "post-google-business-profile.html"}, {"t": "Meta ads: why ad spend and agency fees are separate", "c": "Meta ads", "d": "Where your money goes when you run Instagram and Facebook ads with an agency \u2014 and why it is billed in two parts.", "u": "post-meta-ad-spend.html"}, {"t": "Opening a business in the U.S.: what to prepare before you file", "c": "Business", "d": "A plain-language checklist of the decisions and documents to have ready before you form an LLC or corporation.", "u": "post-us-business-setup.html"}];
const faqs=[
 ['What is Navy Night Creative?','A Chicago-based creative agency that brings strategy, creativity, digital marketing and brand experiences together — one connected partnership from idea to execution.'],
 ['Which services do you offer?','Social media, creative, production, branding, digital (web, search and ads), influence & partnerships, and marketing & business support.'],
 ['What does social media management include?','Content calendars, scheduling, profile optimization, community management and reporting across Instagram, Facebook, TikTok, LinkedIn, X and Google Business Profile — plus posts, carousels, Stories, Reels and TikTok videos.'],
 ['Do you shoot in-house?','Yes. Brand, product, food, hospitality and corporate photography; promotional, interview and testimonial video; event coverage and drone footage — and the post-production that follows.'],
 ['Which platforms do you run ads on?','Meta — Instagram and Facebook — with audience strategy, lead campaigns and ad copy. Ad budgets and media spend are separate from NNC fees.'],
 ['How do creator campaigns work?','We handle influencer research, outreach, negotiation, briefs, content review and evaluation, and build local brand and community partnerships.'],
 ['Do you build websites?','Yes: responsive sites, landing pages, forms, analytics, CRM and e-commerce integrations, local SEO and keyword research.'],
 ['Can you help set up a business in the U.S.?','We provide administrative support: LLC and corporation formation, state registration, EIN coordination, license research and filing reminders. Legal, accounting and tax advice comes from qualified third parties.'],
 ['What does your process look like?','Discover, Navigate, Narrate, Create, Deliver, Improve — research and positioning first, then voice and story, then the work, then measured improvement.'],
 ['How do we get started?','Send the form below or email hello@navynightcreative.com. Tell us a little about your business and we will come back with next steps.']
];
const ptypes=['Social Media','Creative','Production','Branding','Digital','Influence & Partnerships','Marketing & Business','Not sure yet'];


if(document.body.dataset.page==='home'){
const SID=["production", "social", "creative", "branding", "digital", "influence", "business"];

const svcCard=(s,i,big)=>`<a href="services.html#svc-${SID[i]}" class="svc${big?' big':''}" data-card><div class="ph ${s.v}"><div class="zoom"></div></div><span class="no">0${i+1}${big?' &nbsp;— &nbsp;IN-HOUSE':''}</span><span class="arr">${ARR}</span><div class="body"><h3>${s.t}</h3><i class="bar"></i><p>${s.d}</p><div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></a>`;
$('#bento').innerHTML=svcCard(services[0],0,true)+`<div class="rgt">${services.slice(1).map((s,i)=>svcCard(s,i+1)).join('')}</div>`;

$('#logos').innerHTML=logos.map(([a,c,f,n,s])=>(f.startsWith('img')?`<div class="lt ${c}" style="grid-area:${a}" data-tile><i class="${f.slice(4)}"></i></div>`:`<div class="lt ${c}" style="grid-area:${a}" data-tile><div><div class="${f}">${n}</div>${s?`<small>${s}</small>`:''}</div></div>`)).join('')+`<div class="lt big" data-tile><b>nnc</b></div>`;

const cf=$('#cf');
cf.innerHTML=stories.map(s=>`<div class="cfc"><div class="ph ${s.v}" data-ph="Video 9:16"></div><span class="brand">nnc</span><div class="cap"><h3>${s.h}</h3><small>${s.n}</small></div><span class="snd"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M11 5 6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"/></svg></span></div>`).join('');

$('#tgrid').innerHTML=team.map(([n,r,v])=>`<div class="tm" data-card><div class="ph ${v}" data-ph="Portrait"><div class="zoom"></div></div><div class="n"><b>${n}</b><span>${r}</span><i></i></div></div>`).join('');

const clock='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
$('#blogGrid').innerHTML=`<a href="${posts[0].u}" class="feat" data-r><div class="im"><div class="ph v5" data-ph="Article image"><div class="zoom"></div></div></div><div class="meta">${clock} 5 min read <i></i> ${posts[0].c}</div><h3>${posts[0].t}</h3><p>${posts[0].d}</p><span class="more">Read more ${RIGHT}</span></a><div>${posts.slice(1).map((p,i)=>`<a href="${p.u}" class="post" data-r><div class="im"><div class="ph ${['v2','v3','v4'][i]}"><div class="zoom"></div></div></div><div><div class="meta">${clock} 5 min read <i></i> ${p.c}</div><h3>${p.t}</h3><span class="more">Read more ${RIGHT}</span></div></a>`).join('')}</div>`;

const half=Math.ceil(faqs.length/2);
const qa=([q,a])=>`<div class="qa"><button type="button" aria-expanded="false">${q}<span class="pl"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></span></button><div class="ans"><p>${a}</p></div></div>`;
$('#faqGrid').innerHTML=`<div style="display:grid;gap:12px">${faqs.slice(0,half).map(qa).join('')}</div><div style="display:grid;gap:12px">${faqs.slice(half).map(qa).join('')}</div>`;
$('#pt').innerHTML=ptypes.map(p=>`<button type="button">${p}</button>`).join('');


/* ---------- COVERFLOW: endless loop, autoplay (pauses on hover), drag + sideways scroll ---------- */
/* whole extra sets, so a story and its copy are never on screen together */
{const base=$$('.cfc');while(base.length&&$$('.cfc').length<9)base.forEach(b=>{const c=b.cloneNode(true);c.dataset.clone=1;c.setAttribute('aria-hidden','true');cf.appendChild(c)})}
const cards=$$('.cfc'),CN=cards.length,SN=stories.length;
cards.forEach((c,i)=>{c.dataset.s=i%SN;c.insertAdjacentHTML('beforeend','<i class="dim"></i>')});
let pos=0,dragX=null,startPos=0,moved=false,hover=false,seen=false,cfTimer=null,wheelT=null;
const cfStep=()=>cards[0].offsetWidth+(innerWidth<640?12:16);
function cfLayout(){
  const step=cfStep();
  cards.forEach((c,i)=>{let o=((i-pos)%CN+CN)%CN;if(o>CN/2)o-=CN;const a=Math.abs(o),cl=Math.min(1,a);
    c.style.transform=`translateX(calc(-50% + ${o*step}px)) perspective(1000px) rotateY(${(o<0?5:-5)*cl}deg) scale(${1-.1*cl})`;
    c.style.opacity=a<=2.2?1:Math.max(0,1-(a-2.2)*1.6);c.style.visibility=a>3.4?'hidden':'visible';
    c.style.zIndex=40-Math.round(a)*10;c.classList.toggle('on',a<.5)});
  const s=stories[(((Math.round(pos)%CN)+CN)%CN)%SN];$('#cfName').textContent=s.n;$('#cfTag').textContent=s.t;
}
const go=p=>{pos=p;cfLayout()};
const cfNear=i=>{let d=((i-pos)%CN+CN)%CN;if(d>CN/2)d-=CN;return Math.round(pos+d)};
const still2=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cfPlay=()=>{clearInterval(cfTimer);if(still2)return;cfTimer=setInterval(()=>{if(!hover&&seen&&dragX===null&&!document.hidden)go(Math.round(pos)+1)},3200)};
$('#cfPrev').onclick=()=>{go(Math.round(pos)-1);cfPlay()};$('#cfNext').onclick=()=>{go(Math.round(pos)+1);cfPlay()};
cards.forEach((c,i)=>c.addEventListener('click',()=>{if(!moved){go(cfNear(i));cfPlay()}}));
cf.addEventListener('pointerenter',()=>{hover=true});cf.addEventListener('pointerleave',()=>{hover=false});
cf.addEventListener('pointerdown',e=>{dragX=e.clientX;startPos=pos;moved=false;cf.classList.add('drag')});
addEventListener('pointermove',e=>{if(dragX===null)return;const d=e.clientX-dragX;if(Math.abs(d)>5)moved=true;pos=startPos-d/cfStep();cfLayout()});
addEventListener('pointerup',()=>{if(dragX===null)return;dragX=null;cf.classList.remove('drag');go(Math.round(pos));cfPlay()});
/* sideways scroll (trackpad swipe or shift+wheel) moves the row; vertical scroll is left to the page */
cf.addEventListener('wheel',e=>{const dx=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:(e.shiftKey?e.deltaY:0);if(!dx)return;e.preventDefault();e.stopPropagation();
  cf.classList.add('drag');pos+=dx/cfStep();cfLayout();clearTimeout(wheelT);wheelT=setTimeout(()=>{cf.classList.remove('drag');go(Math.round(pos));cfPlay()},140)},{passive:false});
new IntersectionObserver(es=>es.forEach(e=>{seen=e.isIntersecting}),{threshold:.3}).observe(cf);
addEventListener('resize',cfLayout);cfLayout();cfPlay();
/* ---------- PROJECT LATTICE (w99 infinite-spiral: measured offsets) ---------- */
const lat=$('#collage');
const LX=[0,1,0,-1],LS=[1,.746,.569,.624,.758,.624,.53];
let tiles=[],cur=0;
function latBuild(L){
  const N=L*Math.ceil(14/L);
  lat.querySelectorAll('.lat-t').forEach(t=>t.remove());
  tiles=Array.from({length:N},(_,j)=>{const t=document.createElement('div');t.className='lat-t';t.innerHTML='<div class="ph" data-ph="Project"></div><span class="shade"></span>';t.dataset.i=j%L;lat.insertBefore(t,$('#vf'));return t});
  cur=0;latLayout();
}
function latLayout(){
  const N=tiles.length,w=lat.querySelector('.lat-t')?.offsetWidth||340,k=w/385;
  tiles.forEach((t,j)=>{let d=((j-cur)%N+N)%N;if(d>=N/2)d-=N;const a=Math.abs(d);
    if(a>6){t.style.opacity=0;t.style.transform=`translate(-50%,-50%) translate3d(${163*k}px,${(d<0?-793:793)*k}px,0) scale(.55)`;t.style.zIndex=0;return}
    const x=LX[((d%4)+4)%4]*230*k,y=d*122*k,s=LS[a];
    t.style.opacity=1;t.style.transform=`translate(-50%,-50%) translate3d(${x}px,${y}px,0) scale(${s})`;
    t.style.zIndex=a===0?200:Math.round(s*100);t.classList.toggle('on',a===0)});
}
function spin(i){const N=tiles.length,L=lists[tab].length;const step=((i-(cur%L))%L+L)%L;cur=(cur+step)%N;latLayout()}
addEventListener('resize',latLayout);

let tab='shorts',pi=0,ptimer;
$('#cS').textContent=lists.shorts.length;$('#cP').textContent=lists.projects.length;
const phv=['','v2','v3','v4','v6'];
function renderList(){
  $('#plist').innerHTML=lists[tab].map((p,i)=>`<li data-i="${i}"><i>${String(i+1).padStart(2,'0')}</i>${p[0]}<span class="prog"></span></li>`).join('');
  $$('#plist li').forEach(li=>li.onclick=()=>setP(+li.dataset.i));latBuild(lists[tab].length);setP(0);
}
function setP(i){
  pi=i;spin(i);const L=lists[tab],p=L[i];
  $$('#plist li').forEach((li,k)=>li.classList.toggle('on',k===i));
  const ph=$('#vfph');ph.style.opacity=0;
  setTimeout(()=>{$('#vfn').textContent=p[0];$('#vft').textContent=(tab==='shorts'?'Shorts · ':'Project · ')+p[1];$('#vfc').textContent=String(i+1).padStart(2,'0')+' / '+String(L.length).padStart(2,'0');ph.style.opacity=1},250);
  clearTimeout(ptimer);ptimer=setTimeout(()=>setP((pi+1)%L.length),3900);
}
$$('.tabbar button').forEach(b=>b.onclick=()=>{$$('.tabbar button').forEach(x=>x.classList.toggle('on',x===b));tab=b.dataset.tab;renderList()});
renderList();


const lb=$('#leadBox'),bk=$('#book');
lb.addEventListener('pointermove',e=>{const r=lb.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;bk.style.transform=`rotateY(${-18+x*22}deg) rotateX(${6-y*14}deg)`});
lb.addEventListener('pointerleave',()=>bk.style.transform='');
const refs=$('#references');refs.addEventListener('pointermove',e=>{const r=refs.getBoundingClientRect();refs.style.setProperty('--mx',e.clientX-r.left+'px');refs.style.setProperty('--my',e.clientY-r.top+'px')});


$$('.qa').forEach(q=>{
  const b=$('button',q),a=$('.ans',q);
  b.addEventListener('click',()=>{
    const open=!q.classList.contains('on');
    $$('.qa.on').forEach(o=>{if(o!==q){o.classList.remove('on');$('.ans',o).style.height='0px';$('button',o).setAttribute('aria-expanded','false')}});
    q.classList.toggle('on',open);b.setAttribute('aria-expanded',open);
    a.style.height=open?a.scrollHeight+'px':'0px';
  });
});


$$('#pt button').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('on')));
const fm=$('#fm');fm.addEventListener('input',()=>$('#cnt').textContent=fm.value.length);
$('#form').addEventListener('submit',e=>{
  e.preventDefault();const m=$('#fmsg');
  if(!$('#fn').value.trim()||!/\S+@\S+\.\S+/.test($('#fe').value)){m.textContent='Please add your name and a valid email.';m.classList.add('on');return}
  m.textContent='Demo form: not connected yet. Please email hello@navynightcreative.com or call +1 (630) 287-8623.';m.classList.add('on');
});


}

let marks=$$('mark');
function markCheck(){marks=marks.filter(m=>{const r=m.getBoundingClientRect();if(r.top<innerHeight*.85&&r.bottom>0){m.classList.add('on');return false}return true})}
addEventListener('scroll',markCheck,{passive:true});addEventListener('resize',markCheck);setTimeout(markCheck,350);setInterval(markCheck,600);


const mm=$('#mm');$('#burger').onclick=()=>mm.classList.add('on');$('#mmx').onclick=()=>mm.classList.remove('on');$$('#mm a').forEach(a=>a.onclick=()=>mm.classList.remove('on'));


const hdr=$('#hdr'),flt=$('#float'),darks=$$('.dark');
function onScroll(){
  const y=scrollY;document.body.classList.toggle('scrolled',y>40);
  const hb=hdr.getBoundingClientRect().bottom+14;
  hdr.classList.add('dark');
  flt.classList.toggle('on',y>innerHeight*.8);
}
addEventListener('scroll',onScroll,{passive:true});onScroll();


/* ================= SUB-PAGE MODULES ================= */
const PAGE=document.body.dataset.page||'';
// active nav
$$('.nav a,.mm a').forEach(a=>{if(a.dataset.p&&a.dataset.p===PAGE)a.classList.add('on')});

/* floating contact menu (w99 "Bize ulaşın") */
{const fl=$('#float'),fm=$('#fmenu');if(fl&&fm){fl.addEventListener('click',e=>{e.preventDefault();fm.classList.toggle('on')});document.addEventListener('click',e=>{if(!fm.contains(e.target)&&!fl.contains(e.target))fm.classList.remove('on')})}}

/* services: sticky tabs */
{const tabs=$$('.stabs button');if(tabs.length){
  tabs.forEach(b=>b.addEventListener('click',()=>{const t=$('#'+b.dataset.t);if(t)(window.__lenis?window.__lenis.scrollTo(t,{offset:-130}):t.scrollIntoView({behavior:'smooth'}))}));
  const rows=$$('.srow');const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){tabs.forEach(b=>b.classList.toggle('on',b.dataset.t===e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});rows.forEach(r=>io2.observe(r));
  if(location.hash){const t=$(location.hash);if(t)setTimeout(()=>t.scrollIntoView(),300)}
}}

/* references: sector filter */
{const pills=$$('.fpills button');if(pills.length){pills.forEach(p=>p.addEventListener('click',()=>{
  pills.forEach(x=>x.classList.toggle('on',x===p));const f=p.dataset.f;
  $$('.rc').forEach(c=>{const show=f==='all'||c.dataset.cats.split(',').includes(f);
    if(show&&c.classList.contains('hide')){c.classList.remove('hide');window.gsap&&gsap.fromTo(c,{scale:.9,opacity:0},{scale:1,opacity:1,duration:.6,ease:'expo.out'})}
    else if(!show)c.classList.add('hide')});
  window.ScrollTrigger&&ScrollTrigger.refresh();
}))}}

/* references: expanding strips */
{const st=$$('.strip');if(st.length){const cap=$('#stripCap');const set=s=>{st.forEach(x=>x.classList.toggle('on',x===s));if(cap)cap.innerHTML=`${s.dataset.t}<span>${s.dataset.c}</span>`};
  st.forEach(s=>{s.addEventListener('mouseenter',()=>matchMedia('(hover:hover)').matches&&set(s));s.addEventListener('click',()=>set(s))});set(st[0]);}}

/* projects: vertical deck */
{const deck=$('#deck');if(deck){const cards=$$('.dcard',deck);let k=0;const n=cards.length;
  const lay=()=>{cards.forEach((c,i)=>{const o=(i-k+n)%n;c.style.zIndex=n-o;c.style.opacity=o>3?0:1;c.style.filter=o?'brightness(.8)':'none';
    c.style.transform=`translateX(${o*46}px) translateY(${o*10}px) rotate(${o*5}deg) scale(${1-o*.06})`});
    const c=cards[k];$('#dkN').textContent=c.dataset.n;$('#dkT').textContent=c.dataset.t;$('#dkC').textContent=String(k+1).padStart(2,'0')+' / '+String(n).padStart(2,'0')};
  $('#dkNext').onclick=()=>{k=(k+1)%n;lay()};$('#dkPrev').onclick=()=>{k=(k-1+n)%n;lay()};lay();
  setInterval(()=>{if(document.visibilityState==='visible'){k=(k+1)%n;lay()}},5000);}}

/* about: mission / vision tabs */
{const mt=$$('.mvtabs button');if(mt.length){mt.forEach(b=>b.addEventListener('click',()=>{mt.forEach(x=>x.classList.toggle('on',x===b));$$('.mvp').forEach(p=>p.classList.toggle('on',p.id===b.dataset.t));window.ScrollTrigger&&ScrollTrigger.refresh()}))}}

/* about: crew list swaps the portrait */
{const nb=$$('.names button');if(nb.length){const pf=$$('.crew .pf .ph');const tag=$('#crewTag');
  const set=i=>{nb.forEach((b,j)=>b.classList.toggle('on',j===i));pf.forEach((p,j)=>p.style.opacity=j===i?1:0);tag.innerHTML=`${nb[i].dataset.n}<span>${nb[i].dataset.r}</span>`};
  nb.forEach((b,i)=>{b.addEventListener('mouseenter',()=>set(i));b.addEventListener('click',()=>set(i))});set(0);}}

/* posts & legal: TOC highlight */
{const links=$$('.toc a[href^="#"]');if(links.length){const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
  const io3=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.remove('on'));const a=map.get(e.target.id);a&&a.classList.add('on')}}),{rootMargin:'-20% 0px -70% 0px'});
  $$('.prose h2[id]').forEach(h=>io3.observe(h));}}

/* contact page form */
{const cf2=$('#cform');if(cf2){$$('.types button').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('on')));
  const m=$('#cmsg');m.addEventListener('input',()=>$('#ccnt').textContent=m.value.length);
  cf2.addEventListener('submit',e=>{e.preventDefault();const o=$('#cfmsg');o.classList.add('on');
    o.textContent=(!$('#cn').value.trim()||!/\S+@\S+\.\S+/.test($('#ce').value))?'Please add your name and a valid email.':'Demo form: not connected yet. Please email hello@navynightcreative.com or call +1 (630) 287-8623.'});}}

/* stats count-up */
{const nums=$$('[data-count]');if(nums.length){const io4=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io4.unobserve(e.target);const el=e.target,to=+el.dataset.count,suf=el.dataset.suf||'';const t0=performance.now();
  (function tick(t){const p=Math.min(1,(t-t0)/1600),v=Math.round(to*(1-Math.pow(1-p,4)));el.textContent=v+suf;if(p<1)requestAnimationFrame(tick)})(t0)}),{threshold:.5});nums.forEach(n=>io4.observe(n))}}
/* ================= w99 pointer + auto effects (measured on w99.media) ================= */
{
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches, still=matchMedia('(prefers-reduced-motion: reduce)').matches;
const lerpLoop=(items)=>{ /* items: {el, tx, ty, x, y} smoothed toward target */
  const tick=()=>{items.forEach(o=>{o.x+=(o.tx-o.x)*.09;o.y+=(o.ty-o.y)*.09;o.el.style.transform=`translate(${o.x.toFixed(2)}px,${o.y.toFixed(2)}px)`});requestAnimationFrame(tick)};tick()};

/* hero: side cards drift against the pointer — video card ±15/±10px, client card ±8.25/±5.5px */
const hero=$('.hero');
if(hero&&fine&&!still){
  const L=[...$$('.hero-l .vcard,.hero-r .vcard')].map(el=>({el,f:1,tx:0,ty:0,x:0,y:0})).concat([...$$('.hero-l .mini,.hero-r .mini')].map(el=>({el,f:.55,tx:0,ty:0,x:0,y:0})));
  L.forEach(o=>o.el.classList.add('px'));
  addEventListener('mousemove',e=>{if(scrollY>innerHeight)return;const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;L.forEach(o=>{o.tx=-nx*30*o.f;o.ty=-ny*20*o.f})},{passive:true});
  lerpLoop(L);
}

/* services: media layer (inset -18px) drifts against the pointer inside the card — ±9/±7px */
if(fine&&!still)$$('.svc').forEach(card=>{
  const m=card.querySelector('.ph');if(!m)return;m.classList.add('drift');
  const o={el:m,tx:0,ty:0,x:0,y:0};
  card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();o.tx=-((e.clientX-r.left)/r.width-.5)*18;o.ty=-((e.clientY-r.top)/r.height-.5)*14});
  card.addEventListener('mouseleave',()=>{o.tx=0;o.ty=0});
  lerpLoop([o]);
});

/* about: three framed photos rotate right → front → left every 4.6s (w99 frame deck) */
const fan=$('#fan');
if(fan){
  const F=[...fan.querySelectorAll('.f')];let k=0,timer;
  const P=['front','right','left'];   /* step(+1): right → front, front → left, left → right */
  const lay=()=>F.forEach((f,i)=>{f.dataset.pos=P[((i-k)%3+3)%3]});
  const step=d=>{k=((k+d)%3+3)%3;lay();clearInterval(timer);if(!still)timer=setInterval(()=>step(1),4600)};
  F.forEach((f,i)=>f.addEventListener('click',()=>{const p=f.dataset.pos;if(p==='right')step(1);else if(p==='left')step(-1)}));
  let sx=null;fan.addEventListener('pointerdown',e=>{sx=e.clientX});addEventListener('pointerup',e=>{if(sx===null)return;const d=e.clientX-sx;sx=null;if(Math.abs(d)>40)step(d<0?1:-1)});
  step(0);
}
}

/* ---------- Digital Solutions: list switches the browser preview (hover on desktop, tap anywhere) ---------- */
{
const L=$('#dsList');
if(L){const B=[...L.querySelectorAll('button')],P=[...$$('#dsView .ds-pane')];
  const pick=k=>{B.forEach(b=>b.classList.toggle('on',b.dataset.k===k));P.forEach(p=>p.classList.toggle('on',p.dataset.k===k))};
  B.forEach(b=>{b.addEventListener('click',()=>pick(b.dataset.k));if(matchMedia('(hover:hover)').matches)b.addEventListener('mouseenter',()=>pick(b.dataset.k))});}
/* FAQ on the Digital Solutions page (home FAQ has its own handler) */
$$('.ds-qa .qa').forEach(q=>{const b=q.querySelector('button'),a=q.querySelector('.ans');b.setAttribute('aria-expanded','false');
  b.addEventListener('click',()=>{const open=!q.classList.contains('on');
    $$('.ds-qa .qa.on').forEach(o=>{if(o!==q){o.classList.remove('on');o.querySelector('.ans').style.height='0px';o.querySelector('button').setAttribute('aria-expanded','false')}});
    q.classList.toggle('on',open);b.setAttribute('aria-expanded',open);a.style.height=open?a.scrollHeight+'px':'0px'})});
}

/* ================= Section backgrounds: beam (hero, page heroes, CTA), aurora (dark), dot wave (white) ================= */
{
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
const add=(host,cls,html)=>{if(!host||host.querySelector(':scope > .bgx'))return null;const d=document.createElement('div');d.className='bgx '+cls;d.setAttribute('aria-hidden','true');d.innerHTML=html||'';host.classList.add('has-bgx');host.prepend(d);return d};
document.querySelectorAll('.hero,.phero').forEach(h=>add(h,'bg-beam','<i></i>'));
add(document.querySelector('#cta'),'bg-beam corner','<i></i>');
{const hero=document.querySelector('.hero'),svc=document.querySelector('#services');
 if(hero&&svc){const hb=hero.querySelector(':scope > .bg-beam');if(hb)hb.classList.add('long');const cont=add(svc,'bg-beam long cont','<i></i>');
  if(cont){const set=()=>cont.style.setProperty('--oy',(-hero.offsetHeight*1.06)+'px');set();new ResizeObserver(set).observe(hero)}}}
document.querySelectorAll('section.dark').forEach(s=>{if(!s.querySelector('.aur'))add(s,'bg-aurora','<i></i><i></i>')});
add(document.querySelector('#lead .lead-box'),'bg-aurora soft','<i></i><i></i>');
/* Color Atelier card: a real photograph of a glass prism splitting light (Kelvinsong, CC0), blended into the card. No animation. */
{const lb=document.querySelector('#lead .lead-box');if(lb){const d=document.createElement('div');d.className='prism';d.setAttribute('aria-hidden','true');d.innerHTML='<img src="assets/img/prism-light.jpg" alt="" loading="lazy" decoding="async">';lb.querySelector('.bgx').after(d)}}
/* harbour lights: soft out-of-focus lights drifting slowly (Digital Solutions, and the lower half of About) */
const bokeh=(host,c,area)=>{const x=c.getContext('2d');let W=0,H=0,on=false,B=[];
  const fit=()=>{const d=Math.min(devicePixelRatio||1,2),[top,h]=area();W=host.offsetWidth;H=h;c.style.top=top+'px';c.style.height=H+'px';c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    let seed=11+Math.round(top);const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
    B=Array.from({length:Math.max(10,Math.round(W/70))},(_,i)=>({x:rnd()*W,y:rnd()*H,r:(20+rnd()*70)*Math.min(1,W/900+.35),vx:(rnd()-.5)*7,vy:-(2+rnd()*6),p:rnd()*6.28,c:i%3===0?[240,186,49]:i%3===1?[70,140,200]:[18,62,110],a:.045+rnd()*.075}))};
  const paint=t=>{x.clearRect(0,0,W,H);for(const b of B){const px=((b.x+b.vx*t)%(W+200)+W+200)%(W+200)-100,py=((b.y+b.vy*t)%(H+200)+H+200)%(H+200)-100,a=b.a*(.7+.3*Math.sin(t*.5+b.p)),[r,g,bl]=b.c;
      const gr=x.createRadialGradient(px,py,0,px,py,b.r);gr.addColorStop(0,`rgba(${r},${g},${bl},${a})`);gr.addColorStop(.7,`rgba(${r},${g},${bl},${a*.85})`);gr.addColorStop(.86,`rgba(${r},${g},${bl},${a*1.25})`);gr.addColorStop(1,`rgba(${r},${g},${bl},0)`);
      x.fillStyle=gr;x.beginPath();x.arc(px,py,b.r,0,6.2832);x.fill()}};
  fit();new ResizeObserver(()=>{fit();if(still)paint(0)}).observe(host);
  if(still)paint(0);else{new IntersectionObserver(es=>es.forEach(e=>{on=e.isIntersecting}),{rootMargin:'100px'}).observe(host);
    const loop=ts=>{if(on)paint(ts/1000);requestAnimationFrame(loop)};requestAnimationFrame(loop)}};
{const d=add(document.querySelector('#digital'),'bg-bokeh','<canvas></canvas>');if(d){const h=d.parentElement;bokeh(h,d.firstChild,()=>[0,h.offsetHeight])}}
/* About: sea mist behind "One team. One standard.", harbour lights behind "Strategy meets creativity" */
{const abt=add(document.querySelector('#about'),'bg-about','<div class="mist"><i></i><i></i><i></i></div><canvas></canvas>');
 if(abt){const host=abt.parentElement,mist=abt.firstChild,ab2=host.querySelector('.ab2');
  bokeh(host,abt.lastChild,()=>{const full=host.offsetHeight,top=ab2?Math.max(0,ab2.getBoundingClientRect().top-host.getBoundingClientRect().top-90):full*.55;mist.style.height=(top+120)+'px';return [top,full-top]})}}
const dotHosts=[...document.querySelectorAll('#faq,#blog,#contact,#team,.ds-faq,.ds-steps')];
const fields=dotHosts.map(s=>{const w=add(s,'bg-dots','<canvas></canvas>');if(!w)return null;const c=w.firstChild;return {s,c,x:c.getContext('2d'),on:false,W:0,H:0}}).filter(Boolean);
if(fields.length){
  let mx=-999,my=-999;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
  const fit=f=>{const d=Math.min(devicePixelRatio||1,2);f.W=f.s.offsetWidth;f.H=f.s.offsetHeight;f.c.width=f.W*d;f.c.height=f.H*d;f.x.setTransform(d,0,0,d,0,0)};
  const paint=(f,t)=>{const {x,W,H}=f,g=30,r0=f.c.getBoundingClientRect(),px=mx-r0.left,py=my-r0.top;x.clearRect(0,0,W,H);
    for(let yy=g/2;yy<H;yy+=g)for(let xx=g/2;xx<W;xx+=g){const w=.5+.5*Math.sin(xx*.012+yy*.008-t*1.1),near=Math.max(0,1-Math.hypot(xx-px,yy-py)/180);
      x.beginPath();x.arc(xx,yy,.8+w*1.1+near*3,0,6.28);x.fillStyle=near>.02?`rgba(200,146,10,${.2+near*.7})`:`rgba(10,37,65,${.05+w*.11})`;x.fill()}};
  fields.forEach(fit);addEventListener('resize',()=>fields.forEach(f=>{fit(f);if(still)paint(f,0)}));
  if(still)fields.forEach(f=>paint(f,0));
  else{fields.forEach(f=>{const io=new IntersectionObserver(es=>es.forEach(e=>{f.on=e.isIntersecting;if(f.on&&f.H!==f.s.offsetHeight)fit(f)}),{rootMargin:'100px'});io.observe(f.s)});
    const loop=ts=>{fields.forEach(f=>{if(f.on)paint(f,ts/1000)});requestAnimationFrame(loop)};requestAnimationFrame(loop)}
}

/* ---------- footer night sky: rotating star field, scintillation, occasional meteor ---------- */
const sky=document.getElementById('sky');
if(sky){
  const c=sky.firstChild,x=c.getContext('2d'),foot=sky.parentElement,cw=document.querySelector('.cta-wrap');
  let W=0,H=0,S=[],pole=[0,0],R=0,on=false,met=null,nextMet=0,t0=0;
  /* star colours by temperature: blue-white, white, pale yellow, orange */
  const TINT=[[170,196,255],[214,226,255],[255,255,255],[255,244,224],[255,218,178]];
  const glow=(()=>{const g=document.createElement('canvas');g.width=g.height=64;const k=g.getContext('2d'),r=k.createRadialGradient(32,32,0,32,32,32);
    r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.12,'rgba(255,255,255,.55)');r.addColorStop(.4,'rgba(255,255,255,.08)');r.addColorStop(1,'rgba(255,255,255,0)');k.fillStyle=r;k.fillRect(0,0,64,64);return g})();
  const fit=()=>{const ext=cw?Math.round(cw.offsetHeight/2):0;sky.style.top=-ext+'px';
    const d=Math.min(devicePixelRatio||1,3);W=foot.offsetWidth;H=foot.offsetHeight+ext;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    pole=[W*.62,-H*.55];R=Math.hypot(Math.max(pole[0],W-pole[0]),H-pole[1])+20;
    const n=Math.round(Math.PI*R*R/800);let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
    S=Array.from({length:n},()=>{const m=Math.pow(rnd(),6.5);  /* most stars faint, a few bright */
      return {r:Math.sqrt(rnd())*R,a:rnd()*6.2832,m,c:TINT[m>.5?(rnd()*5|0):1+(rnd()*3|0)],p:rnd()*6.28,f:.6+rnd()*2.4,tw:.12+rnd()*.5}})};
  const spawn=now=>{const fromL=Math.random()<.5,ang=(fromL?.28:Math.PI-.28)+(Math.random()-.5)*.5,len=260+Math.random()*320;
    met={x:(fromL?.08:.92)*W+(Math.random()-.5)*W*.5,y:H*(.06+Math.random()*.38),dx:Math.cos(ang),dy:Math.sin(ang),len,t:now,dur:.75+Math.random()*.5}};
  const paint=ts=>{const t=ts/1000;x.clearRect(0,0,W,H);
    const rot=still?0:t*(6.2832/620);  /* one turn of the sky in ~10 minutes */
    for(const s of S){const A=s.a+rot,px=pole[0]+Math.cos(A)*s.r,py=pole[1]+Math.sin(A)*s.r;if(px<-6||px>W+6||py<-6||py>H+6)continue;
      const sc=still?1:1-s.tw*(.5+.5*Math.sin(t*s.f+s.p)*Math.sin(t*s.f*.37+s.p*2)),b=(.22+s.m*.78)*sc,[r,g,bl]=s.c;
      if(s.m<.5){const z=.6+s.m*1.4;x.fillStyle=`rgba(${r},${g},${bl},${b*.9})`;x.fillRect(px-z/2,py-z/2,z,z)}
      else{const z=.5+s.m*1.1;x.fillStyle=`rgba(${r},${g},${bl},${Math.min(1,b*1.1)})`;x.beginPath();x.arc(px,py,z,0,6.2832);x.fill();
        const G=3+s.m*11;x.globalAlpha=b*.42;x.drawImage(glow,px-G,py-G,G*2,G*2);x.globalAlpha=1;
        if(s.m>.95){x.strokeStyle=`rgba(${r},${g},${bl},${b*.2})`;x.lineWidth=.5;const L=4+s.m*5;x.beginPath();x.moveTo(px-L,py);x.lineTo(px+L,py);x.moveTo(px,py-L);x.lineTo(px,py+L);x.stroke()}}}
    if(still)return;
    if(!met&&t>nextMet){spawn(t);nextMet=t+7+Math.random()*9}
    if(met){const k=(t-met.t)/met.dur;if(k>=1){met=null}else{const e=1-Math.pow(1-k,2),hx=met.x+met.dx*met.len*e,hy=met.y+met.dy*met.len*e,tl=Math.min(met.len*e,150)*(1-k*.35),
        fade=k<.15?k/.15:Math.pow(1-k,1.1)/Math.pow(.85,1.1),g=x.createLinearGradient(hx-met.dx*tl,hy-met.dy*tl,hx,hy);
      g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.7,`rgba(200,220,255,${.35*fade})`);g.addColorStop(1,`rgba(255,255,255,${.95*fade})`);
      x.strokeStyle=g;x.lineWidth=2;x.lineCap='round';x.beginPath();x.moveTo(hx-met.dx*tl,hy-met.dy*tl);x.lineTo(hx,hy);x.stroke();
      x.globalAlpha=fade;x.drawImage(glow,hx-13,hy-13,26,26);x.globalAlpha=1}}};
  fit();addEventListener('resize',fit);if(cw)new ResizeObserver(fit).observe(cw);
  if(still)paint(0);
  else{new IntersectionObserver(es=>es.forEach(e=>{on=e.isIntersecting;if(on)nextMet=performance.now()/1000+1.6}),{rootMargin:'200px'}).observe(foot);
    const loop=ts=>{if(on)paint(ts);requestAnimationFrame(loop)};requestAnimationFrame(loop)}
}

/* ---------- navbar night sky: drifting stars with scintillation and an occasional meteor ---------- */
const hin=document.querySelector('.hdr-in');
if(hin){const c=document.createElement('canvas');c.className='navsky';c.setAttribute('aria-hidden','true');hin.prepend(c);const x=c.getContext('2d');
  let W=0,H=0,S=[],met=null,next=3;
  const TINT=[[170,196,255],[214,226,255],[255,255,255],[255,244,224],[255,218,178]];
  const glow=(()=>{const g=document.createElement('canvas');g.width=g.height=48;const k=g.getContext('2d'),r=k.createRadialGradient(24,24,0,24,24,24);
    r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.14,'rgba(255,255,255,.5)');r.addColorStop(.45,'rgba(255,255,255,.07)');r.addColorStop(1,'rgba(255,255,255,0)');k.fillStyle=r;k.fillRect(0,0,48,48);return g})();
  const paint=ts=>{const t=ts/1000;x.clearRect(0,0,W,H);
    for(const s of S){const px=((s.x-t*2.2*s.z)%W+W)%W,py=s.y,sc=still?1:1-s.tw*(.5+.5*Math.sin(t*s.f+s.p)*Math.sin(t*s.f*.37+s.p*2)),b=(.22+s.m*.78)*sc,[r,g,bl]=s.c;
      if(s.m<.5){const z=.6+s.m*1.3;x.fillStyle=`rgba(${r},${g},${bl},${b*.85})`;x.fillRect(px-z/2,py-z/2,z,z)}
      else{const z=.5+s.m*.9;x.fillStyle=`rgba(${r},${g},${bl},${Math.min(1,b)})`;x.beginPath();x.arc(px,py,z,0,6.2832);x.fill();const G=3+s.m*8;x.globalAlpha=b*.4;x.drawImage(glow,px-G,py-G,G*2,G*2);x.globalAlpha=1}}
    if(still)return;
    if(!met&&t>next){const d=Math.random()<.5?1:-1,ang=.12+Math.random()*.16;met={x:W*(.15+Math.random()*.7),y:4+Math.random()*H*.3,dx:Math.cos(ang)*d,dy:Math.sin(ang),len:150+Math.random()*170,t,dur:.7+Math.random()*.4};next=t+9+Math.random()*11}
    if(met){const k=(t-met.t)/met.dur;if(k>=1)met=null;else{const e=1-Math.pow(1-k,2),hx=met.x+met.dx*met.len*e,hy=met.y+met.dy*met.len*e,tl=Math.min(met.len*e,110)*(1-k*.35),fade=k<.15?k/.15:(1-k)/.85,g=x.createLinearGradient(hx-met.dx*tl,hy-met.dy*tl,hx,hy);
      g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.7,`rgba(200,220,255,${.35*fade})`);g.addColorStop(1,`rgba(255,255,255,${.95*fade})`);
      x.strokeStyle=g;x.lineWidth=1.6;x.lineCap='round';x.beginPath();x.moveTo(hx-met.dx*tl,hy-met.dy*tl);x.lineTo(hx,hy);x.stroke();x.globalAlpha=fade;x.drawImage(glow,hx-9,hy-9,18,18);x.globalAlpha=1}}};
  const fit=()=>{const d=Math.min(devicePixelRatio||1,3);W=hin.clientWidth;H=hin.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    let seed=23;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
    S=Array.from({length:Math.round(W*H/620)},()=>{const m=Math.pow(rnd(),6);return {x:rnd()*W,y:rnd()*H,m,c:TINT[m>.5?(rnd()*5|0):1+(rnd()*3|0)],p:rnd()*6.28,f:.6+rnd()*2.4,tw:.12+rnd()*.5,z:.35+rnd()*.65}});if(still)paint(0)};
  new ResizeObserver(fit).observe(hin);fit();
  if(!still){const loop=ts=>{if(!document.hidden)paint(ts);requestAnimationFrame(loop)};requestAnimationFrame(loop)}
}
}

/* ================= Navbar: a sea wave runs to the chosen item and breaks on a lighthouse ================= */
{
const hin=document.querySelector('.hdr-in'),nav=document.querySelector('.hdr .nav'),hdrEl=document.getElementById('hdr');
if(hin&&nav&&getComputedStyle(nav).display!=='none'){
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const c=document.createElement('canvas');c.className='navsea';c.setAttribute('aria-hidden','true');hin.appendChild(c);
  const x=c.getContext('2d'),links=[...nav.querySelectorAll('a')];
  let W=0,H=0,raf=0,last=0,wave=null,parts=[],flash=0,leaveT=0,lastX=null;
  const houses=new Map();                      /* link -> {a: alpha, on: wanted} */
  links.forEach(l=>houses.set(l,{a:0,on:false}));
  const active=()=>links.find(l=>l.classList.contains('on'))||null;
  const cx=l=>{const r=l.getBoundingClientRect(),h=hin.getBoundingClientRect();return r.left-h.left+r.width/2};
  const fit=()=>{const d=Math.min(devicePixelRatio||1,3);W=hin.clientWidth;H=hin.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);kick()};
  const want=l=>houses.forEach((h,k)=>{h.on=k===l});

  function send(l){                            /* start a wave toward link l (or just clear when l is null) */
    want(l);if(!l){kick();return}
    const to=cx(l),from=wave?wave.xc:(lastX??cx(links[0])-70);
    if(still||Math.abs(to-from)<24){lastX=to;wave=null;kick();return}
    const dir=to>from?1:-1,dist=Math.abs(to-from);
    wave={from,to:to-dir*11,dir,t:0,dur:Math.min(1.15,Math.max(.6,dist/480)),xc:from,hit:false,after:0};lastX=to;kick()}

  /* the lighthouse silhouette from the navynight logo (21.32 x 77.72 units) on a low rock, with the logo's two flat beams */
  const LH=['M21.32 76.61L21.32 77.72L0.00 77.72L0.00 77.14L2.64 46.85L3.88 32.67C8.42 31.77 12.99 31.76 17.48 32.69L21.32 76.61','M13.64 27.39C9.93 27.14 6.04 27.23 2.38 28.23L2.38 22.91C2.38 22.76 2.55 22.59 2.66 22.60C2.79 22.61 2.91 22.74 2.99 22.89C3.66 22.71 4.31 22.53 5.00 22.46L5.08 21.26C5.49 21.07 5.96 21.04 6.47 20.94C6.61 18.64 6.54 16.36 6.51 14.08L6.54 13.31C6.12 13.38 5.72 13.47 5.32 13.60C5.11 13.05 5.33 12.52 5.16 12.04L4.67 11.83C4.52 11.69 4.51 11.46 4.56 11.27C4.40 10.78 4.69 10.56 5.02 10.28L9.60 6.35C9.73 6.10 9.70 5.72 9.72 5.47C9.97 5.42 10.11 5.34 10.14 5.10C10.16 4.85 10.11 4.71 9.82 4.65C9.65 3.86 9.75 3.00 10.46 2.57L10.62 0.00L10.74 0.00L10.89 2.54C11.66 3.01 11.74 3.89 11.55 4.71C11.24 4.69 11.25 4.92 11.23 5.10C11.18 5.51 11.87 5.14 11.70 6.27L16.73 10.55C16.88 10.93 16.93 11.50 16.71 11.86C16.53 11.94 16.23 11.94 16.17 12.07C15.99 12.50 16.32 12.99 16.03 13.60C15.65 13.47 15.31 13.38 14.84 13.32L14.83 20.75C15.17 21.27 16.23 20.86 16.29 21.42C16.33 21.76 16.27 22.13 16.38 22.45C17.09 22.52 17.73 22.67 18.40 22.86C18.47 22.75 18.58 22.61 18.66 22.62C18.76 22.63 18.86 22.70 19.00 22.80L19.00 28.19C17.15 27.74 15.46 27.49 13.64 27.39','M12.51 31.51C11.30 31.43 10.08 31.43 8.87 31.51C7.19 31.66 5.56 31.71 3.86 32.19C3.76 30.88 3.24 29.78 2.29 28.79C3.78 28.25 5.25 28.17 6.77 27.96C9.35 27.75 11.98 27.74 14.56 27.96C16.07 28.17 17.54 28.25 19.10 28.78C18.18 29.76 17.55 30.86 17.50 32.20C15.84 31.76 14.20 31.65 12.51 31.51'].map(d=>new Path2D(d)),LHH=25,LS=LHH/77.72;
  function lighthouse(px,a,dark,t){if(a<=.01)return;const rise=(1-a)*7,baseY=H-4+rise,ly=baseY-LHH+8.4*LS;x.save();x.globalAlpha=a;
    /* beams: slow turn of the lamp, seen from the side — the two rays shorten and lengthen, never vanish */
    const turn=still?1:.42+.58*Math.abs(Math.cos(t*.42)),len=(46+flash*14)*turn,th=2.6+turn*1.6;
    for(const s of [-1,1]){const g=x.createLinearGradient(px,0,px+s*len,0);g.addColorStop(0,`rgba(240,186,49,${.95})`);g.addColorStop(.7,`rgba(240,186,49,${.78})`);g.addColorStop(1,'rgba(240,186,49,0)');
      x.fillStyle=g;x.beginPath();x.moveTo(px+s*1.2,ly-.5);x.lineTo(px+s*len,ly-th);x.lineTo(px+s*len,ly+th*.25);x.lineTo(px+s*1.2,ly+.5);x.closePath();x.fill()}
    x.fillStyle=dark?'#8fa3ba':'#22303f';x.beginPath();x.moveTo(px-13,baseY+4);x.lineTo(px-10,baseY-.6);x.lineTo(px-6,baseY+.6);x.lineTo(px-4,baseY-1.6);x.lineTo(px+4.4,baseY-1.4);x.lineTo(px+7,baseY+.8);x.lineTo(px+10.4,baseY-.2);x.lineTo(px+13,baseY+4);x.closePath();x.fill();
    x.translate(px-21.32*LS/2,baseY-LHH);x.scale(LS,LS);x.fillStyle=dark?'#ffffff':'#0A2541';LH.forEach(p=>x.fill(p));x.restore()}

  function sea(dark,t){const w=wave;if(!w)return;const k=w.t,post=w.after;      /* k: travel 0..1, post: seconds after impact */
    const seaA=Math.min(1,k/.12)*(w.hit?Math.max(0,1-post/.55):1);if(seaA<=0)return;
    const A=(7+25*Math.pow(k,1.15))*(w.hit?Math.pow(Math.max(0,1-post/.3),2):1),back=24+20*k;
    const x0=Math.min(w.from,w.to)-70,x1=Math.max(w.from,w.to)+50,lvl=3.2;
    const hgt=px=>{const u=(px-w.xc)*w.dir;const bump=A*(u>0?Math.exp(-(u/6.5)*(u/6.5)):Math.exp(-(u/back)*(u/back)));
      return lvl+bump+(u<0?1.7*Math.sin(u*.33+t*9)*Math.exp(-(u/70)*(u/70)):0)+.7*Math.sin(px*.16+t*4)};
    x.save();x.globalAlpha=seaA;
    const grd=x.createLinearGradient(0,H-lvl-A-3,0,H);
    if(dark){grd.addColorStop(0,'rgba(200,236,248,.95)');grd.addColorStop(.45,'rgba(86,160,205,.92)');grd.addColorStop(1,'rgba(30,84,130,.95)')}
    else{grd.addColorStop(0,'rgba(120,196,224,.95)');grd.addColorStop(.4,'rgba(30,104,160,.94)');grd.addColorStop(1,'rgba(10,37,65,.97)')}
    x.beginPath();x.moveTo(x0,H);for(let px=x0;px<=x1;px+=1.5)x.lineTo(px,H-hgt(px));x.lineTo(x1,H);x.closePath();x.fillStyle=grd;x.fill();
    if(A>3){                                   /* curling lip + foam on the crest */
      const top=H-lvl-A,fo=dark?'rgba(255,255,255,.95)':'rgba(226,244,251,.98)';
      x.fillStyle=fo;x.beginPath();x.moveTo(w.xc-w.dir*5,top+.6);x.quadraticCurveTo(w.xc+w.dir*5,top-A*.10,w.xc+w.dir*(6+A*.34),top+A*.42);
      x.quadraticCurveTo(w.xc+w.dir*(2+A*.12),top+A*.20,w.xc-w.dir*1,top+A*.30);x.closePath();x.fill();
      x.strokeStyle=fo;x.lineWidth=1.3;x.lineCap='round';x.beginPath();let st=false;
      for(let u=-back*.9;u<=5;u+=1.5){const px=w.xc+u*w.dir,py=H-hgt(px)+.4;st?x.lineTo(px,py):(x.moveTo(px,py),st=true)}x.stroke();
      x.fillStyle=fo;for(let i=0;i<7;i++){const u=-((t*50+i*9)%(back*1.1)),px=w.xc+u*w.dir;x.beginPath();x.arc(px,H-hgt(px)+2.2+(i%3),.9,0,6.283);x.fill()}}
    const m=x.createLinearGradient(x0,0,x1,0);m.addColorStop(0,'rgba(0,0,0,0)');m.addColorStop(.12,'#000');m.addColorStop(.9,'#000');m.addColorStop(1,'rgba(0,0,0,0)');
    x.globalCompositeOperation='destination-in';x.globalAlpha=1;x.fillStyle=m;x.fillRect(0,0,W,H);x.restore()}

  function burst(px,dir,dark){flash=1;for(let i=0;i<54;i++){const up=Math.random();
    parts.push({x:px+(Math.random()-.5)*8,y:H-6-Math.random()*10,vx:dir*(-150+Math.random()*250)*(.4+up*.6),vy:-(80+Math.random()*290),r:.7+Math.random()*1.9,l:0,d:.45+Math.random()*.55,dark})}}

  function frame(ts){raf=0;const t=ts/1000,dt=Math.min(.05,last?(ts-last)/1000:.016);last=ts;const dark=hdrEl.classList.contains('dark');let busy=false;
    x.clearRect(0,0,W,H);
    if(wave){busy=true;if(!wave.hit){wave.t=Math.min(1,wave.t+dt/wave.dur);wave.xc=wave.from+(wave.to-wave.from)*Math.pow(wave.t,1.7);
        if(wave.t>=1){wave.hit=true;burst(wave.to+wave.dir*5,wave.dir,dark)}}
      else{wave.after+=dt;if(wave.after>.6)wave=null}}
    sea(dark,t);
    houses.forEach((h,l)=>{const d=(h.on?1:0)-h.a;if(Math.abs(d)>.01){h.a+=Math.sign(d)*Math.min(Math.abs(d),dt/.28);busy=true}else h.a=h.on?1:0;lighthouse(cx(l),h.a,dark,t);if(h.a>0&&!still)busy=true});
    if(flash>0){flash=Math.max(0,flash-dt/.5);busy=true}
    parts=parts.filter(p=>p.l<p.d);if(parts.length)busy=true;
    for(const p of parts){p.l+=dt;p.vy+=640*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;const a=1-p.l/p.d;
      x.fillStyle=dark?`rgba(225,244,252,${a})`:`rgba(52,130,182,${a})`;x.beginPath();x.arc(p.x,p.y,p.r*(.6+.4*a),0,6.283);x.fill()}
    if(busy)raf=requestAnimationFrame(frame);else last=0}
  const kick=()=>{if(!raf)raf=requestAnimationFrame(frame)};

  links.forEach(l=>{l.addEventListener('pointerenter',()=>{clearTimeout(leaveT);send(l)});l.addEventListener('focus',()=>{clearTimeout(leaveT);send(l)})});
  nav.addEventListener('pointerleave',()=>{clearTimeout(leaveT);leaveT=setTimeout(()=>send(active()),260)});
  nav.addEventListener('focusout',()=>{clearTimeout(leaveT);leaveT=setTimeout(()=>send(active()),260)});
  links.forEach(l=>l.addEventListener('click',()=>{try{sessionStorage.setItem('nncNavX',String(cx(l)))}catch(e){}}));
  new ResizeObserver(fit).observe(hin);fit();
  /* on arrival: the wave comes from the item the visitor just left and breaks on this page's lighthouse */
  const a0=active();if(a0){let px=null;try{px=parseFloat(sessionStorage.getItem('nncNavX'));sessionStorage.removeItem('nncNavX')}catch(e){}
    lastX=Number.isFinite(px)?px:cx(links[0])-70;setTimeout(()=>send(a0),450)}
}
}

/* ================= MOTION (GSAP + Lenis, values taken from w99.media) ================= */
if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  const E='expo.out';
  if(window.Lenis){
    const lenis=new Lenis({duration:1.15,smoothWheel:true});window.__lenis=lenis;
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1&&$(id)){e.preventDefault();lenis.scrollTo(id,{offset:-90})}else if(id==='#top'||id==='#'){e.preventDefault();lenis.scrollTo(0)}}));
  }

  /* ---- common: page hero intro ---- */
  if($('[data-h]'))gsap.from('[data-h]',{y:24,autoAlpha:0,duration:1.1,stagger:.07,ease:E});
  /* ---- common: text reveals (autoAlpha + y 22, staggered when entering together) ---- */
  gsap.set('[data-r]',{autoAlpha:0,y:22});
  ScrollTrigger.batch('[data-r]',{start:'top 88%',once:true,onEnter:b=>gsap.to(b,{autoAlpha:1,y:0,duration:.9,stagger:.08,ease:E,overwrite:true})});
  /* ---- common: cards rise ---- */
  gsap.set('[data-card]',{autoAlpha:0,y:32,scale:.97});
  ScrollTrigger.batch('[data-card]',{start:'top 92%',once:true,onEnter:b=>gsap.to(b,{autoAlpha:1,y:0,scale:1,duration:1.1,stagger:.07,ease:E,overwrite:true})});
  /* ---- common: closing CTA ---- */
  if($('#cta')){
    /* nnc opening: letters rise one by one from the card edge, then a gold light passes over them */
    gsap.timeline({scrollTrigger:{trigger:'#cta',start:'top 78%',once:true}})
      .from('#giant b span',{yPercent:105,rotate:7,duration:1.25,ease:E,stagger:.14,transformOrigin:'0% 100%'})
      .add(()=>$('#giant').classList.add('lit'),'-=.55');
  }

  /* ================= HOME ================= */
  if(PAGE==='home'){
    /* w99: hero side cards rise 26px and fade, after the headline */
    gsap.from('[data-hero] > *',{y:26,autoAlpha:0,duration:1.1,ease:E,delay:.3,stagger:.12});
    /* w99: logo tiles slide in sideways (random ±100–230px) from scale .965 */
    gsap.from('[data-tile]',{x:()=>(Math.random()<.5?-1:1)*(100+Math.random()*130),scale:.965,autoAlpha:0,duration:1.2,ease:E,stagger:{each:.04,from:'random'},scrollTrigger:{trigger:'#logos',start:'top 85%',once:true}});
    gsap.from('#cf',{y:38,autoAlpha:0,duration:1.2,ease:E,scrollTrigger:{trigger:'#cf',start:'top 88%',once:true}});
    {const h2=$('#projects .panel h2');
     [...h2.childNodes].forEach(n=>{if(n.nodeType===3&&n.textContent.trim()){const s=document.createElement('span');s.innerHTML=n.textContent.split(/(\s+)/).map(w=>w.trim()?`<span class="wl">${[...w].map(c=>`<span class="ch">${c}</span>`).join('')}</span>`:w).join('');n.replaceWith(s)}});
     const mk=$('mark',h2);mk.classList.add('on');
     gsap.timeline({scrollTrigger:{trigger:'#projects',start:'top 70%',once:true}})
      .from('#projects .panel',{y:32,scale:.97,autoAlpha:0,duration:1.1,ease:E})
      .from($$('.ch',h2),{yPercent:110,autoAlpha:0,duration:.9,stagger:.025,ease:E},.15)
      .fromTo(mk,{clipPath:'inset(0% 100% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1,ease:'expo.inOut'},.45)
      .from('#plist li',{x:-48,autoAlpha:0,duration:.8,stagger:.05,ease:E},.6)
      .from('#vf',{scale:1.12,autoAlpha:0,duration:1.3,ease:E},.2)
      .from('#collage .lat-t',{autoAlpha:0,duration:1,stagger:{each:.05,from:'center'},ease:E},.3);}
    /* w99 has no scroll-scrubbed motion: everything below is a one-time reveal */
    $$('[data-fill]').forEach(h=>gsap.from(h,{y:24,autoAlpha:0,duration:1,ease:E,scrollTrigger:{trigger:h,start:'top 88%',once:true}}));
    gsap.from('#teamPhoto',{y:56,scale:.86,autoAlpha:0,duration:1.3,ease:E,scrollTrigger:{trigger:'#teamPhoto',start:'top 90%',once:true}});
    gsap.from('.badge',{rotate:-140,scale:.3,autoAlpha:0,duration:1.2,ease:'back.out(1.7)',scrollTrigger:{trigger:'#teamPhoto',start:'top 60%',once:true}});
    gsap.from('#fan',{y:34,scale:.975,autoAlpha:0,duration:1.2,ease:E,transformOrigin:'50% 60%',scrollTrigger:{trigger:'#fan',start:'top 88%',once:true}});
    gsap.from('#leadBox',{y:48,scale:.97,autoAlpha:0,duration:1.2,ease:E,scrollTrigger:{trigger:'#leadBox',start:'top 88%',once:true}});
    gsap.from('#book',{rotateY:-60,x:80,autoAlpha:0,duration:1.4,ease:E,delay:.2,scrollTrigger:{trigger:'#leadBox',start:'top 80%',once:true}});
    gsap.from('.qa',{y:22,autoAlpha:0,duration:.8,stagger:.05,ease:E,scrollTrigger:{trigger:'#faqGrid',start:'top 85%',once:true}});
    gsap.from('.form',{x:()=>$('.cbox').clientWidth-$('.form').offsetWidth,duration:1.5,ease:'expo.inOut',scrollTrigger:{trigger:'.cbox',start:'top 70%',once:true}});
    gsap.from('.cvis .g',{scale:.8,autoAlpha:0,duration:1,stagger:.07,ease:E,scrollTrigger:{trigger:'.cbox',start:'top 70%',once:true}});
  }

  /* ================= SERVICES ================= */
  if($('#xwrap')){
    gsap.timeline({scrollTrigger:{trigger:'#xwrap',start:'top top',end:'+=1100',pin:true,scrub:true}})
      .to('#xmedia',{width:'100vw',height:'100vh',borderRadius:0,ease:'none'},0)
      .to('#xwrap',{backgroundColor:'#071726',ease:'none'},.55);
    $$('.srow').forEach(r=>{gsap.from($$('h3,.d,small,li',r),{y:22,autoAlpha:0,duration:.9,stagger:.04,ease:E,scrollTrigger:{trigger:r,start:'top 75%',once:true}});
      gsap.from($('.m',r),{y:40,scale:.96,autoAlpha:0,duration:1.2,ease:E,scrollTrigger:{trigger:r,start:'top 75%',once:true}})});
  }
  if($('#cycle')&&innerWidth<=900){$$('.node,.step').forEach(n=>n.classList.add('on'));const a2=$('#arc');a2.style.strokeDasharray='none'}
  if($('#cycle')&&innerWidth>900){
    const arc=$('#arc'),L=arc.getTotalLength(),nodes=$$('.node'),steps=$$('.step');arc.style.strokeDasharray=L;arc.style.strokeDashoffset=L;
    ScrollTrigger.create({trigger:'#cycle',start:'top top',end:'+=2200',pin:true,scrub:true,onUpdate:s=>{
      const p=s.progress;arc.style.strokeDashoffset=L*(1-p);const k=Math.floor(p*nodes.length*1.0001);
      nodes.forEach((n,i)=>n.classList.toggle('on',i<k||(i===0&&p>.02)));steps.forEach(st=>st.classList.toggle('on',+st.dataset.i<Math.max(1,k)))}});
  }

  /* ================= PROJECTS ================= */
  if($('#hs')){
    const tr=$('#hsTrack'),bar=$('#hsBar'),cnt=$('#hsCnt'),cards=$$('.hcard',tr);
    const dist=()=>tr.scrollWidth-innerWidth+80;
    gsap.to(tr,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'#hs',start:'top top',end:()=>'+='+dist(),pin:true,scrub:1,invalidateOnRefresh:true,
      onUpdate:s=>{bar.style.transform=`scaleX(${s.progress})`;cnt.textContent=String(Math.min(cards.length,1+Math.floor(s.progress*cards.length))).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0')}}});
  }
  if($('.pjh')){gsap.from('.mcard',{y:60,scale:.94,autoAlpha:0,duration:1.4,ease:E,delay:.3})}

  /* ================= ABOUT ================= */
  if($('#abpin')){
    gsap.timeline({scrollTrigger:{trigger:'#abpin',start:'top 64px',end:'+=700',pin:true,scrub:true}})
      .fromTo('#abpin .photo',{scale:.86},{scale:1,ease:'none'},0)
      .to('#abpin',{backgroundColor:'#071726',ease:'none'},.2);
    gsap.from('.stats',{y:50,autoAlpha:0,duration:1.2,ease:E,scrollTrigger:{trigger:'.stats',start:'top 85%',once:true}});
  }
  $$('[data-wfill]').forEach(p=>{
    [...p.childNodes].forEach(n=>{if(n.nodeType===3&&n.textContent.trim()){const s=document.createElement('span');s.innerHTML=n.textContent.split(/(\s+)/).map(w=>w.trim()?`<span class="w">${w}</span>`:w).join('');n.replaceWith(s)}else if(n.nodeType===1)n.classList.add('w')});
    gsap.fromTo($$('.w',p),{opacity:.15},{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:p,start:'top 80%',end:'bottom 50%',scrub:true}});
  });
  if($('.lgrid'))gsap.from('.lgrid div',{autoAlpha:0,y:16,duration:.8,stagger:{each:.03,from:'random'},ease:E,scrollTrigger:{trigger:'.lgrid',start:'top 85%',once:true}});
  if($('.vgal'))gsap.from('.vgal div',{scale:.9,autoAlpha:0,duration:1.1,stagger:.1,ease:E,scrollTrigger:{trigger:'.vgal',start:'top 85%',once:true}});

  /* ================= REFERENCES / BLOG / CONTACT ================= */
  if($('.rgrid'))gsap.from('.rc',{y:26,autoAlpha:0,duration:.8,stagger:{each:.04},ease:E,scrollTrigger:{trigger:'.rgrid',start:'top 88%',once:true}});
  if($('.strips'))gsap.from('.strip',{y:60,autoAlpha:0,duration:1.1,stagger:.06,ease:E,scrollTrigger:{trigger:'.strips',start:'top 85%',once:true}});
  if($('.fcard'))gsap.from('.fcard',{y:50,autoAlpha:0,duration:1.2,ease:E,delay:.25});
  if($('.mapcard'))gsap.from('.mapcard .pin',{y:-40,autoAlpha:0,duration:1,ease:'back.out(2)',scrollTrigger:{trigger:'.mapcard',start:'top 75%',once:true}});
  if($('.post-hero .im'))gsap.from('.post-hero .im',{x:60,autoAlpha:0,duration:1.3,ease:E,delay:.2});

  addEventListener('load',()=>ScrollTrigger.refresh());
  setTimeout(()=>ScrollTrigger.refresh(),1200);
}

}
