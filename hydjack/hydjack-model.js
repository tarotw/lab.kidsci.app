'use strict';
(function(root){const defaults={input:10,output:40,travel:0},limits={input:[10,40,10],output:[20,80,10],travel:[0,10,.5]},mass=5,g=9.81,depth=4,scale=8,baseY=240;
function valid(p){for(const[k,[lo,hi,step]]of Object.entries(limits))if(!p||!Number.isFinite(p[k])||p[k]<lo||p[k]>hi||Math.abs((p[k]-lo)/step-Math.round((p[k]-lo)/step))>1e-9)throw new RangeError('hydjack '+k);}
function solve(p){valid(p);const ai=p.input*1e-4,ao=p.output*1e-4,weight=mass*g,pressure=weight/ao,effort=pressure*ai,dx=p.travel/100,dy=dx*ai/ao,volumeIn=ai*dx,volumeOut=ao*dy,inputWork=effort*dx,outputWork=weight*dy,geometry={inputWidth:p.input/depth*scale,outputWidth:p.output/depth*scale,inputY:baseY+p.travel*scale,outputY:baseY-dy*100*scale};return{p:{...p},ai,ao,weight,pressure,effort,dx,dy,volumeIn,volumeOut,inputWork,outputWork,forceGain:ao/ai,distanceRatio:dx===0?ao/ai:dx/dy,geometry,direct:{force:weight,distance:dy,work:outputWork}};}
const api={defaults,limits,mass,g,depth,scale,baseY,valid,solve};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.HydjackModel=api;
})(typeof window!=='undefined'?window:globalThis);
