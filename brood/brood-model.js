'use strict';
(function(root){
 const END=96,INITIAL=72;
 const ranges={incubate:[4,12],care:[0,12],food:[0,8],hazard:[0,4],guard:[0,4]};
 function valid(p,t){if(!p||!Number.isInteger(t)||t<0||t>END||Object.entries(ranges).some(([k,[a,b]])=>!Number.isInteger(p[k])||p[k]<a||p[k]>b))throw Error('Invalid mouthbrooding teaching plan');}
 function at(p,t){valid(p,t);let energy=INITIAL,foodIn=0,maintenance=0,careCost=0,exposure=0,protectedSlots=0,feedingSlots=0,incubationSlots=0,postcareSlots=0,phase='eggs',action='incubate',round=0,slot=0;
  const frames=[];const snapshot=i=>({i,energy,foodIn,maintenance,careCost,exposure,protectedSlots,feedingSlots,incubationSlots,postcareSlots,phase,action,round,slot,done:i===END});frames.push(snapshot(0));
  for(let i=1;i<=t;i++){
   round=Math.ceil(i/4);slot=(i-1)%4+1;
   const incubating=round<=p.incubate,postcare=!incubating&&round<=p.incubate+p.care,protect=incubating||(postcare&&slot<=p.guard);
   action=incubating?'incubate':protect?'guard':'forage';
   phase=incubating?(round<=Math.ceil(p.incubate/2)?'eggs':'yolk'):postcare?(protect?'guard':'forage'):'independent';
   if(!protect){energy+=p.food/4;foodIn+=p.food/4;feedingSlots++;}
   energy-=.5;maintenance+=.5;
   if(protect){energy-=.25;careCost+=.25;protectedSlots++;}
   exposure+=p.hazard*(protect?1/16:1/4);
   if(incubating)incubationSlots++;if(postcare)postcareSlots++;
   frames.push(snapshot(i));
  }
  return{...frames[t],frames,parameters:{...p}};
 }
 const api={END,INITIAL,ranges,valid,at};root.BroodModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
