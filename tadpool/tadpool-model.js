'use strict';
(function(root){
 const END=10,ENERGY=18,COUNT=3;
 const sites=Object.freeze([{name:'A',capacity:6,distance:1,cost:3},{name:'B',capacity:12,distance:2,cost:5},{name:'C',capacity:18,distance:3,cost:7}].map(Object.freeze));
 const ranges={dry:[0,4],rain:[0,4],resident:[0,3]};
 const clone=s=>JSON.parse(JSON.stringify(s));
 function parameters(p){if(!p||Object.entries(ranges).some(([k,[a,b]])=>!Number.isInteger(p[k])||p[k]<a||p[k]>b))throw Error('Invalid pool teaching parameters');}
 function create(p){parameters(p);return {day:0,p:{...p},spent:0,deliveries:[],events:[],days:[],pools:sites.map(q=>({water:q.capacity,rainIn:0,overflow:0,loss:0,dryDays:0,firstDry:null,ours:0,dryTadDays:0,sharedTadDays:0}))};}
 function act(state,event){
  if(!event||!['set','send','step'].includes(event.type))throw Error('Invalid pool event');
  if(event.type==='set'){
   const range=ranges[event.key];if(!range||!Number.isInteger(event.value)||event.value<range[0]||event.value>range[1])throw Error('Invalid pool setting');
   if(state.p[event.key]===event.value)return{state,ok:false,reason:'same'};
   const n=clone(state);n.p[event.key]=event.value;n.events.push({...event,day:n.day});return{state:n,ok:true,reason:'setting'};
  }
  if(event.type==='send'){
   if(!Number.isInteger(event.pool)||event.pool<0||event.pool>2)throw Error('Invalid destination');
   if(state.deliveries.length===COUNT)return{state,ok:false,reason:'all'};
   if(state.pools[event.pool].water===0)return{state,ok:false,reason:'dry'};
   const cost=sites[event.pool].cost;
   if(state.spent+cost>ENERGY)return{state,ok:false,reason:'energy'};
   const n=clone(state),delivery={pool:event.pool,day:n.day,cost,id:n.deliveries.length+1};
   n.spent+=cost;n.pools[event.pool].ours++;n.deliveries.push(delivery);n.events.push({...event,day:n.day,id:delivery.id});
   return{state:n,ok:true,reason:'sent',delivery};
  }
  if(state.day===END)return{state,ok:false,reason:'limit'};
  const n=clone(state),day=n.day+1,receipt={day,...n.p,pools:[]};
  n.pools.forEach((q,i)=>{
   const before=q.water,overflow=Math.max(0,before+n.p.rain-sites[i].capacity),available=before+n.p.rain-overflow,evap=Math.min(available,n.p.dry),after=available-evap,residents=i===1?n.p.resident:0;
   q.water=after;q.rainIn+=n.p.rain;q.overflow+=overflow;q.loss+=evap;
   const dry=after===0,shared=!dry&&q.ours+residents>1;
   if(dry){q.dryDays++;if(q.firstDry===null)q.firstDry=day;}
   q.dryTadDays+=dry?q.ours:0;q.sharedTadDays+=shared?q.ours:0;
   receipt.pools.push({before,rain:n.p.rain,overflow,evap,after,ours:q.ours,residents,dryTadDaysDelta:dry?q.ours:0,sharedTadDaysDelta:shared?q.ours:0});
  });
  n.day=day;n.days.push(receipt);n.events.push({type:'step',day});return{state:n,ok:true,reason:'step'};
 }
 function view(s){return {...s,energy:ENERGY-s.spent,remaining:COUNT-s.deliveries.length,pools:s.pools.map((q,i)=>{const residents=i===1?s.p.resident:0,total=q.ours+residents;return{...q,residents,total,signal:q.water===0?'dry':total>1?'shared':q.water<=4?'low':'none'};})};}
 function run(p,plan){let s=create(p);const attempts=[];for(const pool of plan){const r=act(s,{type:'send',pool});attempts.push({pool,ok:r.ok,reason:r.reason});s=r.state;}for(let d=0;d<END;d++)s=act(s,{type:'step'}).state;return{...view(s),attempts};}
 const api={END,ENERGY,COUNT,sites,ranges,parameters,create,act,view,run};root.TadpoolModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
