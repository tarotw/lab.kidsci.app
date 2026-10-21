'use strict';
// F09 presentation adapter. The original controller, model, ledger and demos remain in use.
(()=>{
 if(window.CONFIG.id!=='F09')return;
 document.body.classList.add('reef-lab');
 const original=window.LabExtension.scene;
 let generation=0;
 window.LabExtension.scene=function(id,r,p,h){
  const focusPair=document.activeElement?.dataset.pair;
  const result=original.call(this,id,r,p,h);
  if(id!=='F09')return result;
  const {T,f}=h,selected=p.pair,token=++generation;
  const names=[T('都沒有','Neither'),T('只有魚','Fish only'),T('只有海葵','Anemone only'),T('兩者一起','Together')];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const score=(kind,v)=>`<span class="reef-score"><span>${kind==='fish'?T('魚','Fish'):T('海葵','Host')}</span><strong data-ledger="${kind}">${v===null?T('未出現','Absent'):esc(f(v,1))+` <small>${T('點','pt')}</small>`}</strong></span>`;
  const markup=`<div class="reef-grid" role="group" aria-label="${T('四種相同條件的假設安排','Four hypothetical arrangements with matched settings')}">`+r.conditions.map((a,i)=>{
   const x=35+i*170;
   // Exact original fish and tentacle paths; only their common viewport and HTML labels change.
   let shapes='';
   if(a.fish!==null)shapes+=`<path d="M${x+15} 148 q45 -35 87 0 l22 -14 v28 l-22 -14 q-42 35 -87 0Z" fill="#efb96c"/><circle cx="${x+85}" cy="141" r="4" fill="#07101e"/>`;
   if(a.anem!==null)for(let j=0;j<5;j++)shapes+=`<path d="M${x+25+j*20} 260 q-15 -30 0 -52" stroke="#d6a0c3" stroke-width="9" fill="none"/>`;
   return `<button type="button" class="reef-tile" data-tile="${i}" data-pair="${i}" aria-pressed="${i===selected}"><span class="reef-title">${names[i]}${i===selected?` <span class="reef-current" aria-label="${T('目前安排','Current arrangement')}">✓</span>`:''}</span><span class="reef-tile-body"><svg viewBox="${x+5} 112 135 158" aria-hidden="true" focusable="false">${shapes}</svg><span>${score('fish',a.fish)}${score('anem',a.anem)}</span></span></button>`;
  }).join('')+'</div>';
  queueMicrotask(()=>{
   if(token!==generation)return;
   const host=document.querySelector('#scene');if(!host)return;
   const focused=focusPair??document.activeElement?.dataset.pair;
   host.innerHTML=markup;
   host.querySelectorAll('[data-pair]').forEach(button=>button.onclick=()=>{
    document.querySelector('[data-choice="pair"][data-value="'+button.dataset.pair+'"]').click();
   });
   const originalChoices=document.querySelector('#choice-pair');
   if(originalChoices)originalChoices.closest('.control').hidden=true;
   if(focused!==undefined)host.querySelector('[data-pair="'+focused+'"]')?.focus({preventScroll:true});
   const actions=document.querySelector('.view .actions'),controls=document.querySelector('.controls');
   if(actions&&controls){
    const restore=document.activeElement?.id==='reset';
    controls.prepend(actions);
    if(restore)document.querySelector('#reset').focus({preventScroll:true});
   }
   const note=document.querySelector('.scene-note');
   if(note)note.textContent=T('點一格換安排；自訂點數，各方分開算。圖示非真比例。','Tap a tile to choose. Invented points; separate ledgers. Icons not to scale.');
  });
  return result;
 };
})();
