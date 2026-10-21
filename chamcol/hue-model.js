(function(root){'use strict';
const D=typeof module!=='undefined'?require('./hue-data.js'):root.HueData;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
const names=[['白光','White'],['紅光630nm','Red 630 nm'],['綠光530nm','Green 530 nm'],['藍光450nm','Blue 450 nm']];
const rows=D.rows,Y0=rows.reduce((s,r)=>s+r[2]*r[4],0),E0=rows.reduce((s,r)=>s+r[4],0);
const matrix=[[12831/3959,-329/214,-1974/3959],[-851781/878810,1648619/878810,36519/878810],[705/12673,-2585/12673,705/667]];
const triangle=(w,c,h)=>Math.max(0,1-Math.abs(w-c)/h);
function color(spectrum){const xyz=[0,0,0];for(let i=0;i<rows.length;i++)for(let j=0;j<3;j++)xyz[j]+=rows[i][j+1]*spectrum[i]/Y0;
 const linear=matrix.map(a=>a.reduce((s,v,i)=>s+v*xyz[i],0)),clipped=linear.map(v=>Math.max(0,Math.min(1,v))),rgb=clipped.map(v=>Math.round(255*(v<=.0031308?12.92*v:1.055*v**(1/2.4)-.055)));
 return {xyz,linear,rgb,css:'rgb('+rgb.join(',')+')',Y:xyz[1],gamutClipped:linear.some(v=>v< -1e-8||v>1+1e-8)};
}
function entry(p){const spacing=clamp(p.spacing,100,300),intensity=clamp(p.intensity,0,100),lamp=Math.round(clamp(p.lamp,0,3)),pigment=clamp(p.pigment,0,1)>=.5,peak=3*spacing;
 const samples=rows.map(r=>{const w=r[0],struct=.8*triangle(w,peak,35),pass=pigment?.15+.85*clamp((w-450)/100,0,1):1,R=struct*pass*pass,S=intensity/100*(lamp===0?r[4]:triangle(w,[0,630,530,450][lamp],20)),out=S*R;return{w,struct,pass,R,S,out,rest:S-out};});
 const incoming=samples.reduce((s,a)=>s+a.S,0),returned=samples.reduce((s,a)=>s+a.out,0),unreturned=samples.reduce((s,a)=>s+a.rest,0),visibleReturned=samples.filter(a=>a.w>=380&&a.w<=780).reduce((s,a)=>s+a.out,0),returnedWithoutFilter=samples.reduce((s,a)=>s+a.S*a.struct,0),patch=color(samples.map(a=>a.out)),sourceColor=color(samples.map(a=>a.S));
 return {spacing,intensity,lamp,pigment,peak,peakRegion:peak<380?'UV':peak>780?'IR':'visible',samples,incoming,returned,unreturned,inPoints:100*incoming/E0,outPoints:100*returned/E0,restPoints:100*unreturned/E0,visibleReturned,returnedWithoutFilter,filterRemoved:Math.max(0,returnedWithoutFilter-returned),patch,sourceColor,referenceEnergy:E0,referenceY:Y0,crystalDiameter:80};
}
root.HueModel={entry,color,triangle,names,matrix,Y0,E0};if(typeof module!=='undefined')module.exports=root.HueModel;
})(globalThis);
