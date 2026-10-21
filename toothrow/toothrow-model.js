'use strict';
((root)=>{const defaults={schedule:'group',offset:6,gap:2},end=24;
function valid(p,t){if(!p||!['group','single'].includes(p.schedule)||!Number.isInteger(p.offset)||p.offset<0||p.offset>10||!Number.isInteger(p.gap)||p.gap<0||p.gap>4||!Number.isInteger(t)||t<0||t>end)throw new RangeError('tooth schedule');}
function state(p,t){valid(p,t);const teeth=[];for(const side of ['L','R'])for(let i=0;i<4;i++){const slot=side+(i+1),loss=4+(side==='R'?p.offset:0)+(p.schedule==='single'?2*i:0),ready=loss+p.gap,phase=t<loss?'old':t<ready?'gap':'new';teeth.push({slot,side,index:i,loss,ready,oldId:slot+'A',newId:slot+'B',phase,active:phase==='old'?slot+'A':phase==='new'?slot+'B':null,oldState:t<loss?'working':'shed',newState:t<ready?'buried':'working'});}
const sides=['L','R'].map(side=>{const row=teeth.filter(a=>a.side===side),available=row.filter(a=>a.active).length;return{side,available,complete:available===4};});return{t,teeth,sides,available:sides.reduce((a,s)=>a+s.available,0),complete:sides.filter(s=>s.complete).length};}
function history(p){return Array.from({length:end+1},(_,t)=>state(p,t));}
function totals(p){const h=history(p).slice(0,end);return{noComplete:h.filter(s=>s.complete===0).length,empty:h.filter(s=>s.available===0).length,missingSlotSteps:h.reduce((a,s)=>a+8-s.available,0)};}
const api={defaults,end,valid,state,history,totals};root.ToothRowModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;})(typeof window!=='undefined'?window:globalThis);
