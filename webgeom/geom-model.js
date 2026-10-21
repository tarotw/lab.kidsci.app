(function(root){'use strict';
const TAU=2*Math.PI,GRID=31,STEPS=96,names=[['等距螺線','Even spiral'],['對數螺線','Log spiral'],['不規則網','Uneven web']];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function pointDistance(q,a,b){const dx=b.x-a.x,dy=b.y-a.y,l=dx*dx+dy*dy,t=l?clamp(((q.x-a.x)*dx+(q.y-a.y)*dy)/l,0,1):0;return Math.hypot(q.x-a.x-t*dx,q.y-a.y-t*dy);}
function curve(radius,turns,type,steps=STEPS){const count=turns*steps;return Array.from({length:count+1},(_,i)=>{const u=i/count,w=u+.06*Math.sin(TAU*u)+.015*Math.sin(3*TAU*u)+.005*Math.sin(9*TAU*u),theta=TAU*turns*(type===2?u+.02*Math.sin(TAU*u):u),r=radius*(type===1?.2*5**u:.2+.8*(type===2?w:u));return {x:r*Math.cos(theta),y:r*Math.sin(theta),r,theta};});}
function lattice(radius){const a=[];for(let j=0;j<GRID;j++)for(let i=0;i<GRID;i++){const x=radius*(-1+(i+.5)*2/GRID),y=radius*(-1+(j+.5)*2/GRID),r=Math.hypot(x,y);if(r>=.2*radius&&r<=radius)a.push({x,y});}return a;}
function angles(n,type){if(type!==2)return Array.from({length:n},(_,i)=>TAU*i/n);const weights=Array.from({length:n},(_,i)=>1+.35*Math.sin(i*2.399)+.15*Math.cos(i*1.13)),sum=weights.reduce((a,b)=>a+b,0);let t=0;return weights.map(v=>{const angle=t;t+=TAU*v/sum;return angle;});}
// Cache geometry and fixed-lattice distances, never browser pixel dimensions.
const cache=new Map();
function geometry(radius,turns,spokes,type){const key=[radius,turns,spokes,type].join(':');if(cache.has(key))return cache.get(key);const points=curve(radius,turns,type),samples=lattice(radius);let spiral=0;for(let i=1;i<points.length;i++)spiral+=dist(points[i-1],points[i]);let worst=null;
for(const q of samples){let nearest=Infinity;for(let i=1;i<points.length;i++)nearest=Math.min(nearest,pointDistance(q,points[i-1],points[i]));q.distance=nearest;if(!worst||nearest>worst.distance)worst=q;}
const r={radius,turns,spokes,type,points,samples,worst,spiral,radial:spokes*radius,frame:TAU*radius,angles:angles(spokes,type),area:Math.PI*radius**2*(1-.2**2),gap:2*worst.distance};
if(cache.size>=40)cache.delete(cache.keys().next().value);cache.set(key,r);return r;}
function entry(p={}){p={radius:20,turns:7,spokes:16,probe:2,type:0,...p};const radius=clamp(p.radius,10,30),turns=Math.round(clamp(p.turns,3,14)),spokes=Math.round(clamp(p.spokes,6,32)),probe=clamp(p.probe,0,5),type=Math.round(clamp(p.type,0,2)),g=geometry(radius,turns,spokes,type),samples=g.samples.map(q=>({...q,hit:probe>0&&q.distance<=probe/2})),hits=samples.filter(q=>q.hit).length;
return {...g,probe,samples,hits,count:samples.length,coverage:100*hits/samples.length,total:g.spiral+g.radial+g.frame,spiralM:g.spiral/100,radialM:g.radial/100,frameM:g.frame/100,totalM:(g.spiral+g.radial+g.frame)/100,gridStep:2*radius/GRID};}
root.GeomModel={entry,curve,lattice,angles,pointDistance,names,GRID,STEPS};if(typeof module!=='undefined')module.exports=root.GeomModel;
})(globalThis);
