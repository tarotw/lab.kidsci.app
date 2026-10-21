(function(root){'use strict';
// A single invented 100 mg N batch, not animal capacity or a complete nitrogen cycle.
// Each numbered marker is 1 mg of nitrogen, not a molecule, a beetle, or energy.
const TOTAL=100,ROUNDS=20;
const POOLS=['surface','buried','mineral','plant','lost'];
const EDGES=[[0,1],[0,2],[0,4],[1,2],[2,3],[2,4]];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
function config(p={}){return {beetles:Math.round(clamp(p.beetles??5,0,10)),decay:clamp(p.decay??20,0,40),rain:clamp(p.rain??30,0,100),seed:Math.round(clamp(p.seed??246,1,999)),bury:Math.round(clamp(p.bury??1,0,1))};}
// Counter keyed pseudo-random numbers: the same round/marker/seed uses the same draw
// across conditions; no mutable RNG can be consumed by rendering or selection.
function uniform(seed,round,id){let x=(Math.imul(seed,0x9e3779b1)^Math.imul(round,0x85ebca6b)^Math.imul(id+1,0xc2b2ae35))>>>0;x^=x>>>16;x=Math.imul(x,0x7feb352d);x^=x>>>15;x=Math.imul(x,0x846ca68b);x^=x>>>16;return (x>>>0)/4294967296;}
function rates(p){return [[.04*p.beetles*p.bury,p.decay/100,.0015*p.rain],[p.decay/100],[.15,.002*p.rain]];}
function count(locations){return POOLS.map((_,pool)=>locations.reduce((s,v)=>s+(v===pool),0));}
function advance(prev,p){const round=prev.round+1,probs=rates(p),locations=prev.locations.slice(),flows=Array(6).fill(0),moves=[];
 for(let id=0;id<TOTAL;id++){
  const from=prev.locations[id],u=uniform(p.seed,round,id);let edge=-1;
  if(from===0){let end=0;for(let j=0;j<3;j++){end+=probs[0][j];if(u<end){edge=j;break;}}}
  else if(from===1){if(u<probs[1][0])edge=3;}
  else if(from===2){if(u<probs[2][0])edge=4;else if(u<probs[2][0]+probs[2][1])edge=5;}
  if(edge>=0){const to=EDGES[edge][1];locations[id]=to;flows[edge]++;moves.push({id,from,to,edge});}
 }
 const stocks=count(locations),incoming=Array(5).fill(0),outgoing=Array(5).fill(0);
 for(let e=0;e<6;e++){outgoing[EDGES[e][0]]+=flows[e];incoming[EDGES[e][1]]+=flows[e];}
 return {round,locations,stocks,flows,moves,incoming,outgoing,previous:prev.stocks.slice(),sum:stocks.reduce((a,b)=>a+b,0)};
}
function entry(input={}){const p=config(input),locations=Array(TOTAL).fill(0),states=[{round:0,locations,stocks:count(locations),flows:Array(6).fill(0),moves:[],incoming:Array(5).fill(0),outgoing:Array(5).fill(0),previous:count(locations),sum:TOTAL}];
 for(let t=0;t<ROUNDS;t++)states.push(advance(states[t],p));
 return {...p,states,rates:rates(p),TOTAL,ROUNDS,POOLS,EDGES};
}
function at(run,round){return run.states[Math.round(clamp(round,0,ROUNDS))];}
function trace(run,id,round=ROUNDS){id=Math.round(clamp(id,0,TOTAL-1));round=Math.round(clamp(round,0,ROUNDS));const history=[{round:0,pool:0}];for(let t=1;t<=round;t++)if(run.states[t].locations[id]!==run.states[t-1].locations[id])history.push({round:t,pool:run.states[t].locations[id]});return {id,round,pool:run.states[round].locations[id],history,mass:1};}
const api={TOTAL,ROUNDS,POOLS,EDGES,config,uniform,rates,count,advance,entry,at,trace};if(typeof module==='object'&&module.exports)module.exports=api;else root.DungModel=api;
})(typeof globalThis!=='undefined'?globalThis:this);
