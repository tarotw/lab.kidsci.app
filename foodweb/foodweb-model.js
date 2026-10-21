'use strict';
((root)=>{
const nodes=['krill','herring','cod','microbes'];
const edges=[{id:'pk',from:'phyto',to:'krill',fraction:.5},{id:'ph',from:'phyto',to:'herring',fraction:.2},{id:'kh',from:'krill',to:'herring',fraction:.6},{id:'hc',from:'herring',to:'cod',fraction:.5}];
const defaults={input:1000,process:50,eff:{krill:20,herring:20,cod:20,microbes:20},links:{pk:true,ph:true,kh:true,hc:true}};
function valid(p){if(!p||typeof p!=='object')throw new TypeError('parameters');for(const[k,max]of[['input',2000],['process',100]])if(!Number.isFinite(p[k])||p[k]<0||p[k]>max)throw new RangeError(k);for(const n of nodes)if(!Number.isFinite(p.eff?.[n])||p.eff[n]<0||p.eff[n]>80)throw new RangeError(n);for(const e of edges)if(typeof p.links?.[e.id]!=='boolean')throw new TypeError(e.id);}
function run(p){valid(p);const n={phyto:{intake:p.input,production:p.input,heat:0,detritus:0,stored:0}};const flows={};let detritusIn=0,heat=0;
for(const id of ['phyto','krill','herring','cod']){if(id!=='phyto'){const intake=edges.filter(e=>e.to===id).reduce((s,e)=>s+flows[e.id],0),production=intake*p.eff[id]/100,detritus=intake*.2,h=intake*(80-p.eff[id])/100;n[id]={intake,production,heat:h,detritus,stored:0};heat+=h;detritusIn+=detritus;}
 const outbound=edges.filter(e=>e.from===id);for(const e of outbound)flows[e.id]=p.links[e.id]?n[id].production*e.fraction:0;n[id].stored=n[id].production-outbound.reduce((s,e)=>s+flows[e.id],0);
}
const processed=detritusIn*p.process/100,production=processed*p.eff.microbes/100,h=processed-production;n.microbes={intake:processed,production,heat:h,detritus:0,stored:production};heat+=h;
const detritus=detritusIn-processed,stored=Object.values(n).reduce((s,a)=>s+a.stored,0),output=stored+detritus+heat;
return{nodes:n,flows,detritusIn,processed,detritus,heat,stored,input:p.input,output,error:output-p.input};}
const api={nodes,edges,defaults,valid,run};root.FoodWebModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
