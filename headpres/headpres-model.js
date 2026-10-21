'use strict';
((root)=>{const defaults={height:15,gain:75,cap:12,density:1050,regulate:0},limits={height:[-20,20,1],gain:[0,100,5],cap:[0,20,1]},g=9.81;
function valid(p){for(const[k,[lo,hi,step]]of Object.entries(limits))if(!p||!Number.isInteger(p[k])||p[k]<lo||p[k]>hi||(p[k]-lo)%step)throw new RangeError('headpres '+k);if(![1000,1050].includes(p.density)||![0,1].includes(p.regulate))throw new RangeError('headpres choice');}
function at(p,height=p.height/10){const hydro=-p.density*g*height/1000,wanted=-hydro*p.gain/100,correction=Math.max(-p.cap,Math.min(p.cap,wanted)),adjusted=hydro+correction,selected=p.regulate?adjusted:hydro;return{height,hydro,wanted,correction,adjusted,selected,limited:Math.abs(wanted)>p.cap+1e-12,remaining:Math.abs(adjusted)};}
function geometry(height){const heart={x:220,y:180},dy=-height*55,length=170;return{heart,head:{x:heart.x+Math.sqrt(length*length-dy*dy),y:heart.y+dy}};}
function solve(p){valid(p);return{p:{...p},current:at(p),geometry:geometry(p.height/10),curve:Array.from({length:81},(_,i)=>at(p,-2+i*.05))};}
const api={defaults,limits,g,valid,at,geometry,solve};root.HeadPressureModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
