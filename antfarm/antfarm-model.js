'use strict';
(function(root){
 const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
 function valid(p){if(![p.leaf,p.tend,p.clean,p.seed].every(Number.isInteger)||p.leaf<0||p.tend<0||p.clean<0||p.leaf+p.tend+p.clean!==12||p.seed<1||p.seed>999)throw Error('Use 12 workers and an integer sample ID1..999');}
 function allocation(p,key,value){const keys=['leaf','tend','clean'];if(!keys.includes(key))throw Error('Unknown task');const q={...p},wanted=clamp(Math.round(value),0,12),delta=wanted-q[key],others=keys.filter(x=>x!==key);q[key]=wanted;for(let i=0;i<Math.abs(delta);i++){const sorted=others.slice().sort((a,b)=>delta>0?q[b]-q[a]:q[a]-q[b]);q[sorted[0]]+=delta>0?-1:1;}valid(q);return q;}
 function simulate(p){valid(p);let state=p.seed>>>0;const rows=[{round:0,leaf:20,health:80,infection:10,food:12,carry:0,processed:0,output:0,consumed:0,shortfall:0,totalShortfall:0,spores:0,removed:0,discard:0,careChange:0}];for(let i=1;i<=20;i++){
  state=(Math.imul(state,1664525)+1013904223)>>>0;const spores=2+Math.floor(3*state/4294967296),old=rows.at(-1),carry=2*p.leaf,exposed=Math.min(100,old.infection+spores),removed=Math.min(exposed,4*p.clean),infection=exposed-removed;
  const health=clamp(old.health+2*p.tend-3-.12*old.infection,0,100),processed=Math.min(old.leaf+carry,2*p.tend),output=processed*(health/100)*(1-infection/100),available=old.food+output,consumed=Math.min(2,available),shortfall=2-consumed;
  rows.push({round:i,leaf:old.leaf+carry-processed,health,infection,food:available-consumed,carry,processed,output,consumed,shortfall,totalShortfall:old.totalShortfall+shortfall,spores,removed,discard:processed-output,careChange:health-old.health});
 }return rows;}
 const api={allocation,simulate,valid};root.AntFarmModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
