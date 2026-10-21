'use strict';
((root)=>{
const nodes={A:{x:400,y:390},B:{x:400,y:270},C:{x:225,y:160},D:{x:575,y:160},E:{x:100,y:55},F:{x:330,y:55},G:{x:700,y:55}};
const edges=[['A','B'],['B','C'],['B','D'],['C','E'],['C','F'],['D','G']].map(([down,up],i)=>({id:i+1,down,up}));
const types=['open','dam','pass','pipe'],defaults={flow:2,start:'A',target:'G',structures:['open','open','dam','open','pipe','open']};
// Chosen categorical teaching rules. No hydraulic or biological calibration.
const rules={open:{up:[1,2,3],down:[1,2,3]},dam:{up:[],down:[2,3]},pass:{up:[2],down:[2]},pipe:{up:[2],down:[1,2]}};
function valid(p){if(!p||!Number.isInteger(p.flow)||p.flow<0||p.flow>3)throw new RangeError('flow');for(const k of ['start','target'])if(!Object.hasOwn(nodes,p[k]))throw new RangeError(k);if(!Array.isArray(p.structures)||p.structures.length!==6||p.structures.some(t=>!types.includes(t)))throw new RangeError('structures');}
function reason(type,direction,flow){if(!flow)return'dry';if(rules[type][direction].includes(flow))return'ok';if(type==='dam'&&direction==='up')return'drop';return flow===1?'low':'fast';}
function pathBetween(start,target){const todo=[[start]],seen=new Set([start]);for(const path of todo){const here=path.at(-1);if(here===target)return path;for(const e of edges){const next=e.down===here?e.up:e.up===here?e.down:null;if(next&&!seen.has(next)){seen.add(next);todo.push([...path,next]);}}}return[];}
function calculate(p){valid(p);const arcs=edges.flatMap((e,i)=>[['up',e.down,e.up],['down',e.up,e.down]].map(([direction,from,to])=>({id:e.id,from,to,direction,type:p.structures[i],reason:reason(p.structures[i],direction,p.flow),pass:reason(p.structures[i],direction,p.flow)==='ok'})));
const reachable=new Set([p.start]),queue=[p.start];for(const here of queue)for(const a of arcs)if(a.from===here&&a.pass&&!reachable.has(a.to)){reachable.add(a.to);queue.push(a.to);}
const path=pathBetween(p.start,p.target),route=path.slice(1).map((to,i)=>arcs.find(a=>a.from===path[i]&&a.to===to)),firstBlock=route.find(a=>!a.pass)||null,frontier=arcs.filter(a=>reachable.has(a.from)&&!reachable.has(a.to)&&!a.pass);
return{arcs,reachable:[...reachable].sort(),count:reachable.size,path,route,firstBlock,frontier,arrives:reachable.has(p.target)};}
const api={nodes,edges,types,rules,defaults,valid,reason,pathBetween,calculate};root.FishPassModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
