'use strict';
(function(root){
 const END=48,INITIAL=72,YOUNG_INITIAL=12;
 const ranges={count:[0,12],forage:[0,4],hazard:[0,4],food:[0,8],strategy:[0,2]};
 function valid(p,t){if(!p||!Number.isInteger(t)||t<0||t>END||Object.entries(ranges).some(([k,[a,b]])=>!Number.isInteger(p[k])||p[k]<a||p[k]>b))throw Error('Invalid wolf spider teaching plan');}
 function at(p,t){
  valid(p,t);let foodIn=0,maintenance=0,careCost=0,carryCost=0,placementCost=0,youngMaintenance=0,youngActivity=0,youngExposure=0,parentExposure=0,forageSlots=0,guardSlots=0,round=0,slot=0,action='start';
  const frames=[];
  const snapshot=i=>({i,round,slot,action,foodIn,maintenance,careCost,carryCost,placementCost,parentExposure,forageSlots,guardSlots,parentCost:careCost+carryCost+placementCost,parentReserve:INITIAL+foodIn-maintenance-careCost-carryCost-placementCost,youngMaintenance,youngActivity,youngExposure,youngInitial:YOUNG_INITIAL*p.count,youngReserve:YOUNG_INITIAL*p.count-youngMaintenance-youngActivity,youngPerChild:p.count?YOUNG_INITIAL-(youngMaintenance+youngActivity)/p.count:null,done:i===END});
  frames.push(snapshot(0));
  for(let i=1;i<=t;i++){
   round=Math.ceil(i/4);slot=(i-1)%4+1;
   const foraging=slot<=p.forage,guard=p.strategy===0||(p.strategy===1&&!foraging);
   action=foraging?'forage':'rest';forageSlots+=+foraging;guardSlots+=+guard;
   if(foraging)foodIn+=p.food/4;
   maintenance+=.5;
   if(guard)careCost+=p.count/64;
   if(p.strategy===0&&foraging)carryCost+=p.count/16;
   if(i===1&&p.strategy>0)placementCost=p.count*(p.strategy===1?1/8:1/4);
   youngMaintenance+=p.count/8;
   if(p.strategy===2)youngActivity+=p.count/8;
   youngExposure+=p.hazard*p.count*(p.strategy===0?(foraging?1/8:1/16):p.strategy===1?(foraging?1/4:1/16):1/4);
   parentExposure+=p.hazard*(foraging?1/4:1/16);
   frames.push(snapshot(i));
  }
  return{...frames[t],frames,parameters:{...p}};
 }
 const api={END,INITIAL,YOUNG_INITIAL,ranges,valid,at};root.WolfcareModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
