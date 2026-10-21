(function(root){'use strict';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
const B=1,H=.2,ES=1,EC0=2,RS=1,RC0=1.5,PMAX=1e-6;
// A hypothetical perfectly bonded, uniform rectangular sandwich cantilever.
// Constitutive coefficients are invented, not fitted to toucan measurements.
function entry(p,phase=1){const q=clamp(phase,0,1),thick=clamp(p.thick,2.5,30),porosity=clamp(p.porosity,0,100),length=clamp(p.length,1,3),load=clamp(p.load,0,100),core=clamp(p.core,0,1)>=.5,t=H*thick/100,bc=B-2*t,hc=H-2*t,Ac=bc*hc,As=B*H-Ac,Ic=bc*hc**3/12,Is=B*H**3/12-Ic,phi=core?1-porosity/100:0,Ec=EC0*phi**2,rho=RC0*phi,EI=ES*Is+Ec*Ic,P=PMAX*load/100*q,tip=P*length**3/(3*EI),massShell=RS*As*length,massCore=rho*Ac*length,mass=massShell+massCore;
return {q,thick,porosity,length,load,core,t,B,H,bc,hc,Ac,As,Ic,Is,phi,Ec,rho,EI,P,tip,tipRatio:tip/length,slope:P*length**2/(2*EI),massShell,massCore,mass,solidMass:RS*B*H*length,beam:Array.from({length:61},(_,i)=>{const x=length*i/60;return {x,y:P*x*x*(3*length-x)/(6*EI)};})};}
root.BeakModel={entry,B,H,ES,EC0,RS,RC0,PMAX};if(typeof module!=='undefined')module.exports=root.BeakModel;
})(globalThis);
