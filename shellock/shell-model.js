(function(root){'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
const names=[['直線接縫','Butt joint'],['倒扣齒狀','Interlocking tooth'],['搭接','Lap joint']];
// Two separate ideal fixtures: rigid guided joint plates, and an intact cantilever strip.
// No fracture, friction, calibrated biology or coupled deformation of the joint.
function entry(p,phase=1){const q=clamp(phase,0,1),type=Math.round(clamp(p.type,0,2)),path=Math.round(clamp(p.path,0,1)),thick=clamp(p.thick,.5,3),load=clamp(p.load,0,100),t=.025*thick;
const lift=path?1.1*t*Math.min(1,q/.4):0,ramp=path?Math.max(0,(q-.4)/.6):q,force=load/100*ramp;
const lifted=lift>=t,blocked=type===1&&!lifted&&force>0,free=1.2*force,travel=blocked?0:free;
const clearDistance=type===1?.52:type===2?.24:0;
const separated=travel>0&&travel>=clearDistance,overlap=type===2?Math.max(0,.24-travel):0;
// L=b=E=1, actual strip thickness t=.025*thick, P=.002*.025^3*force.
const P=.002*Math.pow(.025,3)*force,I=Math.pow(t,3)/12,bend=P/(3*I);
let state=q===0?'ready':path&&q<.4?'lifting':force===0?(path?'raised':'no-load'):blocked?'locked':separated?'separated':q===1?'partial':type===2?'sliding':'moving';
return {q,type,path,load,thick,t,lift,ramp,force,free,travel,clearDistance,separated,overlap,lifted,blocked,state,P,I,bend,material:thick,beam:Array.from({length:41},(_,i)=>{const x=i/40;return {x,y:P*x*x*(3-x)/(6*I)};})};}
root.ShellModel={entry,names};if(typeof module!=='undefined')module.exports=root.ShellModel;
})(globalThis);
