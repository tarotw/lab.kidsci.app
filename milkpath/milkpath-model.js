'use strict';
// Conserved teaching markers; no real nutritional demand, growth time or survival forecast.
((root)=>{
 const END=24,INITIAL=8,NEED=4,READY=12;
 const bounds={food:[0,8],rate:[0,8],duration:[0,6],wild:[0,4]};
 function valid(p){if(!p||typeof p!=='object')throw new TypeError('Parameters required');for(const[k,[a,b]]of Object.entries(bounds))if(!Number.isInteger(p[k])||p[k]<a||p[k]>b)throw new RangeError(k);}
 function at(p,t){valid(p);if(!Number.isInteger(t)||t<0||t>END)throw new RangeError('event');
  const s={t,round:t?Math.ceil(t/4):0,event:t?(t-1)%4: -1,mother:INITIAL,secretion:0,youngMilk:0,youngWild:0,growthMilk:0,growthWild:0,foodIn:0,wildIn:0,made:0,milkGiven:0,gapTotal:0,last:0,lastMilk:0,lastWild:0,lastGap:null,completedRounds:0,history:[]};
  for(let i=1;i<=t;i++){
   const round=Math.ceil(i/4),event=(i-1)%4;let amount=0,milk=0,wild=0,gap=null;
   if(event===0){amount=p.food;s.mother+=amount;s.foodIn+=amount;}
   if(event===1){amount=round<=p.duration?Math.min(s.mother,p.rate):0;s.mother-=amount;s.secretion+=amount;s.made+=amount;}
   if(event===2){const ready=s.growthMilk+s.growthWild>=READY;wild=ready?Math.min(p.wild,NEED-s.youngMilk-s.youngWild):0;s.youngWild+=wild;s.wildIn+=wild;milk=round<=p.duration?Math.min(s.secretion,Math.max(0,NEED-s.youngMilk-s.youngWild)):0;s.secretion-=milk;s.youngMilk+=milk;s.milkGiven+=milk;amount=milk+wild;}
   if(event===3){milk=s.youngMilk;wild=s.youngWild;amount=milk+wild;s.youngMilk=0;s.youngWild=0;s.growthMilk+=milk;s.growthWild+=wild;gap=NEED-amount;s.gapTotal+=gap;s.completedRounds++;s.lastGap=gap;}
   s.last=amount;s.lastMilk=milk;s.lastWild=wild;s.history.push({i,round,event,amount,milk,wild,gap,mother:s.mother,secretion:s.secretion,youngMilk:s.youngMilk,youngWild:s.youngWild,growthMilk:s.growthMilk,growthWild:s.growthWild});
  }
  s.young=s.youngMilk+s.youngWild;s.growth=s.growthMilk+s.growthWild;s.ready=s.growth>=READY;s.input=INITIAL+s.foodIn+s.wildIn;s.stored=s.mother+s.secretion+s.young;s.output=s.stored+s.growth;s.done=t===END;s.supplying=s.round>0&&s.round<=p.duration;s.nextEvent=t%4;s.nextRound=Math.floor(t/4)+1;return s;
 }
 const api={END,INITIAL,NEED,READY,bounds,valid,at};root.MilkPathModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
