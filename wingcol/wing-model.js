(function(root){'use strict';
const D=typeof module!=='undefined'?require('./hue-data.js'):root.HueData;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number.isFinite(+v)?+v:a));
const names=[['白光','White'],['紅光630nm','Red 630 nm'],['綠光530nm','Green 530 nm'],['藍光450nm','Blue 450 nm']];
const rows=D.rows,Y0=rows.reduce((s,r)=>s+r[2]*r[4],0),E0=rows.reduce((s,r)=>s+r[4],0),index=1.4;
// CIE2019 data, CC BY-SA4.0: see hue-data.js. W3C CSS Color4 XYZ-to-sRGB matrix.
const matrix=[[12831/3959,-329/214,-1974/3959],[-851781/878810,1648619/878810,36519/878810],[705/12673,-2585/12673,705/667]];
const triangle=(w,c,h)=>Math.max(0,1-Math.abs(w-c)/h);
function color(spectrum){const xyz=[0,0,0];for(let i=0;i<rows.length;i++)for(let j=0;j<3;j++)xyz[j]+=rows[i][j+1]*spectrum[i]/Y0;
 const linear=matrix.map(a=>a.reduce((s,v,i)=>s+v*xyz[i],0)),rgb=linear.map(v=>Math.max(0,Math.min(1,v))).map(v=>Math.round(255*(v<=.0031308?12.92*v:1.055*v**(1/2.4)-.055)));
 return {xyz,linear,rgb,css:'rgb('+rgb.join(',')+')',Y:xyz[1],gamutClipped:linear.some(v=>v< -1e-8||v>1+1e-8)};
}
function peakAt(spacing,angle){const a=angle*Math.PI/180;return 2*index*spacing*Math.sqrt(1-(Math.sin(a)/index)**2);}
function entry(p){const angle=clamp(p.angle,-65,65),spacing=clamp(p.spacing,120,260),intensity=clamp(p.intensity,0,100),lamp=Math.round(clamp(p.lamp,0,3)),structure=clamp(p.structure,0,1)>=.5,referencePeak=peakAt(spacing,angle),a=angle*Math.PI/180;
 const samples=rows.map(r=>{const w=r[0],selective=structure?.70*triangle(w,referencePeak,35):0,R=.04+selective,S=intensity/100*(lamp===0?r[4]:triangle(w,[0,630,530,450][lamp],20)),out=S*R;return{w,selective,R,S,out,background:S*.04,rest:S-out};});
 const incoming=samples.reduce((s,v)=>s+v.S,0),returned=samples.reduce((s,v)=>s+v.out,0),unreturned=samples.reduce((s,v)=>s+v.rest,0),backgroundReturned=samples.reduce((s,v)=>s+v.background,0),selectiveReturned=returned-backgroundReturned,patch=color(samples.map(v=>v.out));
 return{angle,spacing,intensity,lamp,structure,index,peak:structure?referencePeak:null,referencePeak,peakRegion:referencePeak<380?'UV':referencePeak>780?'IR':'visible',internalAngle:Math.asin(Math.sin(a)/index)*180/Math.PI,normal:[Math.sin(a),-Math.cos(a)],reflected:[Math.sin(2*a),-Math.cos(2*a)],samples,incoming,returned,unreturned,backgroundReturned,selectiveReturned,inPoints:100*incoming/E0,outPoints:100*returned/E0,restPoints:100*unreturned/E0,selectivePoints:100*selectiveReturned/E0,patch,sourceColor:color(samples.map(v=>v.S)),curve:structure?Array.from({length:131},(_,i)=>({angle:i-65,peak:peakAt(spacing,i-65)})):[],referenceEnergy:E0,referenceY:Y0};
}
root.WingModel={entry,peakAt,color,names,matrix,index,Y0,E0};if(typeof module!=='undefined')module.exports=root.WingModel;
})(globalThis);
