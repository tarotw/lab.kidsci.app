'use strict';
(function(root){
 const END=30,HARDEN=3,INITIAL_ENERGY=6,INITIAL_TISSUE=80,OLD_CAP=100,NEW_CAP=144;
 function valid(p,n){if(!p||!['hide','open'].includes(p.shelter)||!Number.isInteger(p.food)||p.food<0||p.food>8||!Number.isInteger(p.allocate)||p.allocate<0||p.allocate>4||!Number.isInteger(p.schedule)||p.schedule<0||p.schedule>24||!Number.isInteger(n)||n<0||n>END)throw Error('Invalid juvenile-crab teaching scenario');}
 function at(p,n){valid(p,n);let energy=INITIAL_ENERGY,tissue=INITIAL_TISSUE,capacity=OLD_CAP,size=10,phase='hard',hardness=HARDEN,molted=false,moltRound=null,prepRound=null,foodIn=0,maintenance=0,unpaid=0,growth=0,moltCost=0,exposure=0,softExposure=0,softRounds=0,hiddenRounds=0,missed=0;
  const frames=[];function snapshot(i){return{i,energy,tissue,capacity,size,phase,hardness,molted,moltRound,prepRound,foodIn,maintenance,unpaid,growth,moltCost,exposure,softExposure,softRounds,hiddenRounds,missed,done:i===END};}frames.push(snapshot(0));
  for(let i=1;i<=n;i++){
   const startPhase=phase,cycle=['preparing','soft'].includes(startPhase),returning=startPhase==='returning';
   if(startPhase==='hard'){energy+=p.food;foodIn+=p.food;}else missed++;
   const paid=Math.min(energy,2);energy-=paid;maintenance+=paid;unpaid+=2-paid;
   if(startPhase==='hard'){
    const invest=Math.min(capacity-tissue,energy,Math.max(0,p.food-2)*p.allocate/4);energy-=invest;tissue+=invest;growth+=invest;
    if(!molted&&prepRound===null&&p.schedule>0&&i>=p.schedule&&tissue===OLD_CAP&&energy>=(p.shelter==='hide'?30:28)){energy-=8;moltCost+=8;phase='preparing';prepRound=i;}
   }else if(startPhase==='preparing'){
    energy-=4;moltCost+=4;molted=true;moltRound=i;capacity=NEW_CAP;size=12;hardness=0;phase='soft';
   }else if(startPhase==='soft'){
    energy-=2;moltCost+=2;hardness++;
    if(hardness===HARDEN)phase=p.shelter==='hide'?'returning':'hard';
   }else if(returning)phase='hard';
   const vulnerable=cycle||phase==='preparing';const hidden=p.shelter==='hide'&&(vulnerable||returning);
   if(hidden)hiddenRounds++;
   const points=vulnerable?(hidden?1:5):1;exposure+=points;
   if(startPhase==='preparing'||startPhase==='soft'){softRounds++;softExposure+=points;}
   frames.push(snapshot(i));
  }
  return{...frames[n],frames,parameters:{...p}};
 }
 const api={END,HARDEN,INITIAL_ENERGY,INITIAL_TISSUE,OLD_CAP,NEW_CAP,valid,at};root.MoltModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
