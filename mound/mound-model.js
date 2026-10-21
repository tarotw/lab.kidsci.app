(function(root){'use strict';
// Two well-mixed teaching cavities, not measured mound geometry or CFD.
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a)),V=[30,15],BASE=420,DT=.02,DURATION=30;
function flow(p={}){p={temp:3,wind:0,source:5,wall:1,block:0,...p};const temp=clamp(p.temp,-10,10),wind=clamp(p.wind,-5,5),source=clamp(p.source,0,10),wall=clamp(p.wall,0,5),block=Math.round(clamp(p.block,0,3)),core=block&2?0:80,flute=block&1?0:80,G=core+flute,h=.01*wall,beta=1.2*9.81*1.5/300,B=beta*temp,Pwind=-.2*.5*1.2*wind*Math.abs(wind);
let lower=0,upper=0;
if(h>0){const d=-(flute*B+h*Pwind/2)/(G+h/2);lower=(Pwind+d)/2;upper=(Pwind-d)/2;}
else if(G>0)upper=flute*B/G; // closed loop: arbitrary pressure gauge, no wind drive.
const qc=core*(lower-upper),qf=flute*(lower-upper+B),qin=-h*lower,qout=h*(upper-Pwind),K=[.05*wall,.8*wall];
return {temp,wind,source,wall,block,core,flute,G,h,beta,B,Pwind,lower,upper,qc,qf,qin,qout,K,V,baseline:BASE};}
function advance(s,f,dt=DT){let exchange=[0,0],escape=0;const x=s.mass.map((m,i)=>m/V[i]);
for(const q of [f.qc,f.qf]){const donor=q>=0?0:1,receiver=1-donor,amount=Math.abs(q)*x[donor];exchange[donor]-=amount;exchange[receiver]+=amount;}
// External inflow carries zero excess above the fixed example ambient baseline.
for(const [i,q] of [[0,-f.qin],[1,f.qout]])if(q>0){exchange[i]-=q*x[i];escape+=q*x[i];}
for(let i=0;i<2;i++){exchange[i]-=f.K[i]*x[i];escape+=f.K[i]*x[i];}
exchange[0]+=f.source;
const mass=s.mass.map((m,i)=>m+exchange[i]*dt),emitted=s.emitted+f.source*dt,escaped=s.escaped+escape*dt,time=s.time+dt;
return {mass,emitted,escaped,time,stored:mass[0]+mass[1],ppm:mass.map((m,i)=>BASE+1000*m/V[i]),balance:emitted-mass[0]-mass[1]-escaped};}
const cache=new Map();
function entry(p={}){const f=flow(p),key=[f.temp,f.wind,f.source,f.wall,f.block].join(':');if(cache.has(key))return cache.get(key);let s={mass:[0,0],emitted:0,escaped:0,stored:0,time:0,ppm:[BASE,BASE],balance:0};const points=[s];for(let i=1;i<=DURATION/DT;i++){s=advance(s,f);if(i%10===0)points.push(s);}
const r={...f,points,final:s,duration:DURATION,dt:DT};if(cache.size>=40)cache.delete(cache.keys().next().value);cache.set(key,r);return r;}
function at(r,time){time=clamp(time,0,DURATION);const i=Math.min(r.points.length-1,Math.floor(time/.2)),a=r.points[i],b=r.points[Math.min(i+1,r.points.length-1)],w=b.time>a.time?clamp((time-a.time)/(b.time-a.time),0,1):0;const mix=k=>a[k]+(b[k]-a[k])*w,mass=a.mass.map((v,i)=>v+(b.mass[i]-v)*w),emitted=mix('emitted'),escaped=mix('escaped');return{time,mass,emitted,escaped,stored:mass[0]+mass[1],ppm:mass.map((m,i)=>BASE+1000*m/V[i]),balance:emitted-mass[0]-mass[1]-escaped};}
root.MoundModel={flow,advance,entry,at,V,BASE,DT,DURATION};if(typeof module!=='undefined')module.exports=root.MoundModel;
})(globalThis);
