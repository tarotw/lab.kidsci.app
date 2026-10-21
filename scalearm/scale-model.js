(function(root,factory){const v=factory();if(typeof module==='object'&&module.exports)module.exports=v;else root.ScaleModel=v;})(typeof globalThis!=='undefined'?globalThis:this,()=>{
'use strict';
const clamp=(v,a,b,d)=>Number.isFinite(Number(v))?Math.max(a,Math.min(b,Number(v))):d;
const constants=Object.freeze({Eh:12,Es:1,hardT:.001,hardC:.003,softLimit:.05,pokeMax:.4,bendMax:.16,hardIndent:.03,anchor:1});
function build(p={}){const q={material:Math.round(clamp(p.material,0,2,2)),backing:Math.round(clamp(p.backing,0,1,1)),poke:clamp(p.poke,0,100,40),bend:clamp(p.bend,0,100,40),overlap:clamp(p.overlap,0,40,35),site:Math.round(clamp(p.site,0,1,1))};
const parts=q.material===0?[{id:'hard',E:12,lo:0,hi:1}]:q.material===1?[{id:'soft',E:1,lo:0,hi:1}]:[{id:'hard',E:12,lo:.7,hi:1},...(q.backing?[{id:'soft',E:1,lo:0,hi:.7}]:[])];
const pitch=2*(1-q.overlap/100),x=q.site?.9:0,tiles=[-pitch,0,pitch].map(center=>({center,covered:Math.abs(x-center)<1-1e-10}));
return {p:q,parts,tiles,x,count:tiles.filter(t=>t.covered).length,amount:parts.reduce((s,t)=>s+t.hi-t.lo,0)};}
function section(parts){if(!parts.length)return {neutral:null,D:0};const weight=parts.reduce((s,t)=>s+t.E*(t.hi-t.lo),0),neutral=parts.reduce((s,t)=>s+t.E*(t.hi-t.lo)*(t.lo+t.hi)/2,0)/weight;const D=parts.reduce((s,t)=>{const h=t.hi-t.lo;return s+t.E*(h*h*h/12+h*((t.lo+t.hi)/2-neutral)**2);},0);return {neutral,D};}
function critical(t,neutral){const top=neutral-t.hi,bot=neutral-t.lo,ten=Math.max(top,bot,0),comp=Math.max(-top,-bot,0);const lt=t.id==='hard'?constants.hardT:constants.softLimit,lc=t.id==='hard'?constants.hardC:constants.softLimit;return Math.min(ten>0?lt/ten:Infinity,comp>0?lc/comp:Infinity);}
function bend(r,k){let alive=r.parts.slice(),events=[],previous=0;
while(alive.length){const s=section(alive),threshold=Math.max(previous,Math.min(...alive.map(t=>critical(t,s.neutral))));if(k<threshold)break;const failed=alive.filter(t=>critical(t,s.neutral)<=threshold);if(!failed.length)throw Error('Unreachable bend event');events.push({k:threshold,ids:failed.map(t=>t.id)});alive=alive.filter(t=>!failed.includes(t));previous=threshold;}
const s=section(alive),layers=r.parts.map(t=>{const ok=alive.includes(t);return {id:t.id,alive:ok,lo:t.lo,hi:t.hi,E:t.E,top:ok?k*(s.neutral-t.hi):0,bottom:ok?k*(s.neutral-t.lo):0,moment:ok?t.E*((t.hi-t.lo)**3/12+(t.hi-t.lo)*((t.lo+t.hi)/2-s.neutral)**2)*k:0};});
return {k,...s,moment:s.D*k,value:10000*s.D*k,hardValue:10000*(layers.find(t=>t.id==='hard')?.moment||0),softValue:10000*(layers.find(t=>t.id==='soft')?.moment||0),layers,events,hard:layers.find(t=>t.id==='hard')||null,soft:layers.find(t=>t.id==='soft')||null};}
function puncture(r,d){const hard=r.parts.find(t=>t.id==='hard'),soft=r.parts.find(t=>t.id==='soft'),L=Math.hypot(constants.anchor,d),strain=L/constants.anchor-1,hardAlive=!!hard&&d<constants.hardIndent,softAlive=!!soft&&strain<constants.softLimit;
const hardForce=hardAlive?constants.Eh*(hard.hi-hard.lo)*d:0,softForce=softAlive?2*constants.Es*(soft.hi-soft.lo)*strain*d/L:0;
return {d,strain,length:L,hard:hard?{alive:hardAlive,force:hardForce}:null,soft:soft?{alive:softAlive,force:softForce}:null,hardValue:1000*r.count*hardForce,softValue:1000*r.count*softForce,value:1000*r.count*(hardForce+softForce)};}
function snapshot(r,trial=0,u=0){u=clamp(u,0,1,0);trial=trial?1:0;const input=trial?r.p.bend:r.p.poke;if(!input)u=0;const v=trial?bend(r,u*input/100*constants.bendMax):puncture(r,u*input/100*constants.pokeMax);const hardBroken=!!v.hard&&!v.hard.alive,softBroken=!!v.soft&&!v.soft.alive;return {...v,trial,u,input,hardBroken,softBroken,status:u===0?'ready':v.value===0?'failed':hardBroken&&v.soft?.alive?'bridge':softBroken?'torn':'intact'};}
function fullEvents(r,trial){if(!trial)return [...(r.parts.some(t=>t.id==='hard')?[constants.hardIndent/constants.pokeMax]:[]),...(r.parts.some(t=>t.id==='soft')?[Math.sqrt((1+constants.softLimit)**2-1)/constants.pokeMax]:[])];return bend(r,constants.bendMax).events.map(t=>t.k/constants.bendMax);}
function curve(r,trial=0){const phases=Array.from({length:201},(_,i)=>i/200);for(const u of fullEvents(r,trial))if(u>0&&u<=1)phases.push(Math.max(0,u-1e-8),u,Math.min(1,u+1e-8));return [...new Set(phases)].sort((a,b)=>a-b).map(u=>{const full={...r,p:{...r.p,poke:100,bend:100}},v=snapshot(full,trial,u);return {u,value:v.value,hardValue:v.hardValue,softValue:v.softValue};});}
function entry(p){const r=build(p);return {r,puncture:snapshot(r,0,1),bending:snapshot(r,1,1)};}
return {constants,build,section,critical,bend,puncture,snapshot,curve,entry};
});
