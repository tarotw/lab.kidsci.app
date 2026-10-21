'use strict';
(function(root){
 const W=6,H=3,R=.6,DT=.1,LIMIT=120,MEMORY_TAU=20,RISE_TAU=8,FALL_TAU=45;
 function valid(p){if(!Number.isInteger(p.count)||p.count<6||p.count>60||!Number.isInteger(p.threshold)||p.threshold<4||p.threshold>30||![0,1].includes(p.contact))throw Error('Invalid toy-locust parameters');}
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function random(id){let n=(id^248)>>>0;n=Math.imul(n^(n>>>16),0x21f0aaad);n=Math.imul(n^(n>>>15),0x735a2d97);n=(n^(n>>>15))>>>0;return()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};}
 function agent(id){const r=random(id);return {id,x:.12+r()*(W-.24),y:.12+r()*(H-.24),angle:r()*Math.PI*2,frequency:.07+r()*.08,offset:r()*Math.PI*2,memory:0,g:0,neighbors:0,input:0,totalInput:0,lostMemory:0};}
 function create(p){valid(p);return {tick:0,agents:Array.from({length:p.count},(_,i)=>agent(i+1))};}
 function configure(s,p){valid(p);const map=new Map(s.agents.map(a=>[a.id,a]));return {tick:s.tick,agents:Array.from({length:p.count},(_,i)=>({...map.get(i+1)||agent(i+1)}))};}
 // Exact evolution for a constant local input within one fixed substep. Split
 // at any threshold crossing so a threshold is never mistaken for instant g=1.
 function respond(memory,g,rate,threshold,dt){
  if(![memory,g,rate,threshold,dt].every(Number.isFinite)||memory<0||g<0||g>1||rate<0||threshold<=0||dt<0)throw Error('Invalid response');
  const equilibrium=rate*MEMORY_TAU,next=equilibrium+(memory-equilibrium)*Math.exp(-dt/MEMORY_TAU);
  const target0=memory>=threshold?1:0,target1=next>=threshold?1:0;
  const relax=(v,target,time)=>target+(v-target)*Math.exp(-time/(target?RISE_TAU:FALL_TAU));
  let nextG;
  if(target0===target1||memory===equilibrium)nextG=relax(g,target0,dt);
  else{const cross=clamp(-MEMORY_TAU*Math.log((threshold-equilibrium)/(memory-equilibrium)),0,dt);nextG=relax(relax(g,target0,cross),target1,dt-cross);}
  return {memory:Math.max(0,next),g:clamp(nextG,0,1),input:rate*dt,lost:Math.max(0,memory+rate*dt-next)};
 }
 function contacts(agents){const rows=agents.map(()=>({n:0,x:0,y:0})),pairs=[];for(let i=0;i<agents.length;i++)for(let j=i+1;j<agents.length;j++){const a=agents[i],b=agents[j];if((a.x-b.x)**2+(a.y-b.y)**2<=R*R){rows[i].n++;rows[j].n++;rows[i].x+=b.x;rows[i].y+=b.y;rows[j].x+=a.x;rows[j].y+=a.y;pairs.push([a.id,b.id]);}}return {rows,pairs};}
 function reflect(v,max){while(v<0||v>max)v=v<0?-v:2*max-v;return v;}
 function phase(g){return g<.25?'solitary':g<.75?'transition':'gregarious';}
 function step(s,p){valid(p);if(s.tick>=LIMIT/DT)return s;const network=contacts(s.agents),time=s.tick*DT;
  const agents=s.agents.map((a,i)=>{const near=network.rows[i],r=respond(a.memory,a.g,p.contact?near.n:0,p.threshold,DT),theta=a.angle+.15*Math.sin(time*a.frequency+a.offset)*DT;let vx=Math.cos(theta),vy=Math.sin(theta);
   // Uncalibrated teaching movement: activity rises with g; neighbour avoidance at low g and
   // attraction at high g rotate the heading gradually. Body color is not a state.
   if(near.n){let dx=near.x/near.n-a.x,dy=near.y/near.n-a.y,norm=Math.hypot(dx,dy);if(norm>1e-12){vx+=(1.5*(2*r.g-1))*dx/norm;vy+=(1.5*(2*r.g-1))*dy/norm;}}
   let norm=Math.hypot(vx,vy);if(norm<1e-12){vx=-Math.sin(theta);vy=Math.cos(theta);norm=1;}vx/=norm;vy/=norm;const speed=.12+.1*r.g,nx=a.x+vx*speed*DT,ny=a.y+vy*speed*DT;const direction=Math.atan2((ny<0||ny>H)?-vy:vy,(nx<0||nx>W)?-vx:vx);return {...a,x:reflect(nx,W),y:reflect(ny,H),angle:direction,memory:r.memory,g:r.g,neighbors:near.n,input:p.contact?near.n:0,totalInput:a.totalInput+r.input,lostMemory:a.lostMemory+r.lost};});
  return {tick:s.tick+1,agents};
 }
 function advance(s,p,duration){if(!Number.isFinite(duration)||duration<0||Math.abs(duration/DT-Math.round(duration/DT))>1e-7)throw Error('Duration must use0.1-beat increments');let out=configure(s,p),steps=Math.min(Math.round(duration/DT),LIMIT/DT-out.tick);for(let i=0;i<steps;i++)out=step(out,p);return out;}
 function summary(s,p){valid(p);const counts={solitary:0,transition:0,gregarious:0},net=contacts(s.agents);let memory=0,g=0,input=0,lost=0;for(const a of s.agents){counts[phase(a.g)]++;memory+=a.memory;g+=a.g;input+=a.totalInput;lost+=a.lostMemory;}return {time:s.tick*DT,total:s.agents.length,density:s.agents.length/(W*H),...counts,meanMemory:memory/s.agents.length,meanG:g/s.agents.length,totalMemory:memory,totalInput:input,lostMemory:lost,pairs:net.pairs.length,meanNeighbors:2*net.pairs.length/s.agents.length,channel:p.contact};}
 function scenario(p,time,offAt=null){let s=create(p);const split=offAt===null?time:Math.min(time,offAt);s=advance(s,p,split);if(time>split)s=advance(s,{...p,contact:0},time-split);return s;}
 const api={W,H,R,DT,LIMIT,MEMORY_TAU,RISE_TAU,FALL_TAU,valid,create,configure,respond,contacts,phase,step,advance,summary,scenario};root.LocustModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
