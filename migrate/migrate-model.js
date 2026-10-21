'use strict';
((root)=>{
const END=9,CAP=60,INITIAL=36,YOUNG=30,REPRO=6,AIRSPEED=20,POWER=.8,DISTANCE=300;
const defaults={wind:0,nectar:16,flowers:[true,true,true],milkweed:[true,true,true]};
const route=[{kind:'fly',from:0,to:1},{kind:'breed',site:1},{kind:'fly',from:1,to:2},{kind:'breed',site:2},{kind:'fly',from:2,to:3},{kind:'breed',site:3},{kind:'fly',from:3,to:2},{kind:'fly',from:2,to:1},{kind:'fly',from:1,to:0}];
function valid(p){if(!p||typeof p!=='object')throw new TypeError('parameters');if(!Number.isInteger(p.wind)||p.wind< -10||p.wind>10)throw new RangeError('wind');if(!Number.isInteger(p.nectar)||p.nectar<0||p.nectar>30)throw new RangeError('nectar');for(const k of['flowers','milkweed'])if(!Array.isArray(p[k])||p[k].length!==3||p[k].some(x=>typeof x!=='boolean'))throw new TypeError(k);}
function at(p,t){valid(p);if(!Number.isInteger(t)||t<0||t>END)throw new RangeError('step');const speed=AIRSPEED+p.wind,cost=DISTANCE/speed*POWER,s={requested:t,energy:INITIAL,nectarIn:0,leafIn:0,spentFlight:0,spentBreeding:0,retired:0,distance:0,hours:0,generation:0,site:0,blocked:null,partial:null,history:[],speed,cost,done:false};
for(let i=0;i<t;i++){const a=route[i],before=s.energy,gen=s.generation;let nectar=0,used=0,retired=0,leaf=0,moved=0;
 if(a.kind==='fly'){nectar=a.from>0&&p.flowers[a.from-1]?Math.min(p.nectar,CAP-s.energy):0;s.energy+=nectar;s.nectarIn+=nectar;const enough=s.energy+1e-10>=cost;used=enough?cost:s.energy;moved=enough?DISTANCE:DISTANCE*used/cost;s.energy=Math.max(0,s.energy-used);s.spentFlight+=used;s.distance+=moved;s.hours+=used/POWER;if(enough)s.site=a.to;else{s.blocked='energy';s.partial={from:a.from,to:a.to,fraction:moved/DISTANCE};}}
 else if(!p.milkweed[a.site-1])s.blocked='milkweed';
 else if(s.energy+1e-10<REPRO)s.blocked='breeding';
 else{used=REPRO;s.spentBreeding+=used;s.energy-=used;retired=s.energy;s.retired+=retired;leaf=YOUNG;s.leafIn+=leaf;s.energy=YOUNG;s.generation++;}
 s.history.push({step:i+1,...a,generationBefore:gen,generationAfter:s.generation,before,nectar,used,retired,leaf,moved,after:s.energy,blocked:s.blocked});if(s.blocked)break;
}
s.events=s.history.length;s.handoffs=s.generation;s.input=INITIAL+s.nectarIn+s.leafIn;s.accounted=s.energy+s.spentFlight+s.spentBreeding+s.retired;s.done=s.events===END&&!s.blocked;return s;}
const api={END,CAP,INITIAL,YOUNG,REPRO,AIRSPEED,POWER,DISTANCE,defaults,route,valid,at};root.MigrateModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
