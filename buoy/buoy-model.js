'use strict';
(function(root){const V=.001,A=.04,g=9.81,floor=.3,dt=.002,drag=8;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function validate(p){if(!p||![0,1,2].includes(p.shape)||!Number.isFinite(p.mass)||p.mass<.2||p.mass>1.6||!Number.isFinite(p.rho)||p.rho<800||p.rho>1200)throw Error('Invalid buoyancy parameters');}
function shape(k){if(k===0)return{h:.1,w:.1};if(k===1)return{h:.16,w:2*Math.sqrt(V/(Math.PI*.16))};if(k===2){const r=Math.cbrt(3*V/(4*Math.PI));return{h:2*r,w:2*r,r};}throw Error('Invalid shape');}
function volume(k,u){const s=shape(k),z=clamp(u,0,s.h);return k===2?Math.PI*z*z*(s.r-z/3):V*z/s.h;}
// The cup only gains fluid. Lowering the level after the body rises conserves fluid.
function hydro(k,d,q){q=clamp(Math.max(q,volume(k,d)),0,V);let lo=0,hi=q/A;for(let i=0;i<36;i++){const mid=(lo+hi)/2;if(A*mid+volume(k,d-mid)>q)hi=mid;else lo=mid;}const level=(lo+hi)/2,sub=volume(k,d-level);return{q,level,sub};}
function forces(p,s){const h=hydro(p.shape,s.d,s.q),weight=p.mass*g,buoy=p.rho*g*h.sub,resist=-drag*h.sub/V*s.v;const support=s.d>=floor-1e-10&&s.v>=0?Math.max(0,weight-buoy):0;return{...h,weight,buoy,resist,support,net:weight-buoy+resist-support};}
function make(p,d=.03){validate(p);if(!Number.isFinite(d)||d<0||d>floor)throw Error('Invalid depth');return{d,v:0,q:hydro(p.shape,d,0).q,t:0};}
function hold(p,s,d){validate(p);if(!Number.isFinite(d)||d<0||d>floor)throw Error('Invalid depth');return{d,v:0,q:hydro(p.shape,d,s.q).q,t:0};}
function step(p,s,h=dt){const rhs=(d,v,q)=>{const f=forces(p,{d,v,q});return{d:v,v:f.net/p.mass,q:f.q};},a=rhs(s.d,s.v,s.q),b=rhs(s.d+a.d*h/2,s.v+a.v*h/2,a.q),c=rhs(s.d+b.d*h/2,s.v+b.v*h/2,Math.max(a.q,b.q)),e=rhs(s.d+c.d*h,s.v+c.v*h,Math.max(a.q,b.q,c.q));let d=s.d+h*(a.d+2*b.d+2*c.d+e.d)/6,v=s.v+h*(a.v+2*b.v+2*c.v+e.v)/6;if(d>=floor){d=floor;v=Math.min(0,v);}return{d,v,q:hydro(p.shape,d,Math.max(s.q,a.q,b.q,c.q,e.q)).q,t:s.t+h};}
function advance(p,s,seconds=1,h=dt){validate(p);if(!Number.isFinite(seconds)||seconds<0||!Number.isFinite(h)||h<=0||h>.01)throw Error('Invalid step');const end=Math.min(12,s.t+seconds);let r={...s};while(r.t<end-1e-10)r=step(p,r,Math.min(h,end-r.t));r.t=end;return r;}
function equilibrium(p){validate(p);const target=p.mass/p.rho;if(target>V+1e-12)return{kind:'sink',sub:V,buoy:p.rho*g*V,support:(p.mass-p.rho*V)*g,immersion:shape(p.shape).h};if(Math.abs(target-V)<1e-12)return{kind:'neutral',sub:V,buoy:p.mass*g,support:0,immersion:shape(p.shape).h};let lo=0,hi=shape(p.shape).h;for(let i=0;i<50;i++){const mid=(lo+hi)/2;if(volume(p.shape,mid)>target)hi=mid;else lo=mid;}return{kind:'float',sub:target,buoy:p.mass*g,support:0,immersion:(lo+hi)/2};}
const api={V,A,g,floor,dt,drag,shape,volume,hydro,forces,make,hold,advance,equilibrium};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BuoyModel=api;
})(typeof window!=='undefined'?window:globalThis);
