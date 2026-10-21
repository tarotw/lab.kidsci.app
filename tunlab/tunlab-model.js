'use strict';
(function(root){
 const DRY_END=20,END=30,PREP=4,RECOVER=3,CAPACITY=30;
 function valid(p,n){if(!p||!['active','prepare'].includes(p.strategy)||!['dry','water','challenge'].every(k=>Number.isInteger(p[k])&&p[k]>=0&&p[k]<=10)||!Number.isInteger(n)||n<0||n>END)throw Error('Invalid toy dehydration scenario');}
 function at(p,n){valid(p,n);let water=100,prepared=0,recovery=0,stress=0,blocked=null,phase='active',feeding=0,prepCost=0,tunTicks=0,waterIn=0,waterOut=0;const frames=[];
  function snapshot(i){return{i,water,prepared,recovery,stress,blocked,phase,feeding,prepCost,tunTicks,waterIn,waterOut,done:i===END};}
  frames.push(snapshot(0));
  for(let i=1;i<=n;i++){
   const wet=i>DRY_END;
   if(wet){const add=Math.min(100-water,10*p.water);water+=add;waterIn+=add;}else{const loss=Math.min(water,8*p.dry);water-=loss;waterOut+=loss;}
   if(!blocked){
    if(!wet){
     if(p.strategy==='prepare'&&p.dry>0&&prepared<PREP){
      if(water<40)blocked='preparation';else{prepared++;prepCost++;}
     }
     if(!blocked&&water<40&&prepared<PREP)blocked='unprepared';
     if(!blocked&&prepared===PREP&&water<=20){stress+=p.challenge;tunTicks++;if(stress>CAPACITY)blocked='challenge';}
     phase=blocked?'blocked':prepared===PREP&&water<=20?'tun':p.strategy==='prepare'&&p.dry>0?(prepared===PREP?'prepared':'preparing'):water>=80?'active':'drying';
     if(phase==='active')feeding++;
    }else{
     if(water>=80){
      if(prepared===PREP){recovery=Math.min(RECOVER,recovery+1);phase=recovery===RECOVER?'active':'recovering';}else phase='active';
      if(phase==='active')feeding++;
     }else{recovery=0;phase=prepared===PREP?(water<=20?'tun':'rewetting'):'drying';if(phase==='tun')tunTicks++;}
    }
   }else phase='blocked';
   frames.push(snapshot(i));
  }
  return{...frames[n],frames,parameters:{...p},limits:{prep:PREP,recover:RECOVER,capacity:CAPACITY,dryEnd:DRY_END,end:END}};
 }
 const api={DRY_END,END,PREP,RECOVER,CAPACITY,valid,at};root.TunLabModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
