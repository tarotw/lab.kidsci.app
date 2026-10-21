'use strict';
((root)=>{
const patterns=['solid','wide','fine'],defaults={pattern:'solid',contrast:100,seed:3,effect:'on'},N=24,LAST=12;
function valid(p,step){if(!p||!patterns.includes(p.pattern)||!['on','off'].includes(p.effect)||!Number.isInteger(p.contrast)||p.contrast<0||p.contrast>100||p.contrast%10||!Number.isInteger(p.seed)||p.seed<1||p.seed>9||!Number.isInteger(step)||step<0||step>LAST)throw new RangeError('flyland settings');}
function sample(seed){let s=seed>>>0;const u=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};return Array.from({length:N},(_,i)=>({id:i+1,u:u(),start:{x:30+100*u(),y:30+240*u()},target:{x:460+140*u(),y:45+210*u()},bend:(u()-.5)*50,exitY:25+260*u()}));}
function threshold(p,pattern=p.pattern){return .65-(p.effect==='off'?0:{solid:0,wide:.25,fine:.45}[pattern])*p.contrast/100;}
const lerp=(a,b,t)=>a+(b-a)*t;
function position(f,land,step){const near={x:340,y:f.target.y+f.bend};if(step<=6){const u=step/6;return{x:lerp(f.start.x,near.x,u),y:lerp(f.start.y,near.y,u)};}if(land){const u=Math.min(1,(step-6)/3),ease=1-(1-u)**2;return{x:lerp(near.x,f.target.x,ease),y:lerp(near.y,f.target.y,ease)};}if(step<=8){const u=(step-6)/2;return{x:lerp(near.x,420,u),y:lerp(near.y,f.target.y,u)};}const u=(step-8)/4;return{x:lerp(420,700,u),y:lerp(f.target.y,f.exitY,u)};}
function calculate(p,step=0){valid(p,step);const flies=sample(p.seed),scenarios=patterns.map(pattern=>{const gate=threshold(p,pattern),all=flies.map(f=>{const land=f.u<gate;return{...f,land,point:position(f,land,step),state:step<9?'approach':land?'land':'leave',trail:Array.from({length:step+1},(_,k)=>position(f,land,k))};});const landed=step<9?0:all.filter(f=>f.land).length;return{pattern,gate,flies:all,landed,left:step<9?0:N-landed,approaching:step<9?N:0};});return{step,scenarios,current:scenarios.find(s=>s.pattern===p.pattern),mean:.5,area:240*260,dark:.5-.45*p.contrast/100,light:.5+.45*p.contrast/100};}
// Linear luminance -> encoded neutral sRGB, not arithmetic averaging of display bytes.
function gray(L){const v=L<=.0031308?12.92*L:1.055*L**(1/2.4)-.055;return `rgb(${(v*100).toFixed(6)}% ${(v*100).toFixed(6)}% ${(v*100).toFixed(6)}%)`;}
const api={patterns,defaults,N,LAST,valid,sample,threshold,position,calculate,gray};root.FlyLandModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
