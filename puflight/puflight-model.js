'use strict';
((root)=>{
 const defaults={light:1,beam:'all',sea:1,seed:17,step:12},N=24,STEPS=12,LENGTH=14;
 function valid(p){if(!p||typeof p!=='object')throw new TypeError('parameters');for(const k of ['light','sea'])if(p[k]!==0&&p[k]!==1)throw new RangeError(k);if(!['all','nest','town'].includes(p.beam))throw new RangeError('beam');for(const[k,lo,hi]of[['seed',1,99],['step',0,12]])if(!Number.isInteger(p[k])||p[k]<lo||p[k]>hi)throw new RangeError(k);}
 // Common random numbers: exactly two draws per path step, regardless of condition.
 function random(seed){let s=seed>>>0;return()=>{s=(Math.imul(1664525,s)+1013904223)>>>0;return s/4294967296;};}
 function weights(p,x,y){const dx=x-540,dy=y-200,visible=p.light===1&&(p.beam==='all'||(p.beam==='nest'?-dx:dx)>=Math.abs(dy));return{sea:2*p.sea,light:visible?4:0,other:1};}
 function calculate(p){valid(p);const rng=random(p.seed),paths=[];let sea=0,harbor=0,middle=0,lit=0;for(let i=0;i<N;i++){let x=300,y=200;const points=[{x,y,choice:'start'}];for(let j=0;j<STEPS;j++){const w=weights(p,x,y),u=rng()*(w.sea+w.light+w.other),v=rng();let angle,choice;if(u<w.sea){choice='sea';angle=Math.PI+(v-.5)*Math.PI/2;}else if(u<w.sea+w.light){choice='light';angle=Math.atan2(200-y,540-x)+(v-.5)*Math.PI/2;}else{choice='other';angle=v*Math.PI*2;}x+=LENGTH*Math.cos(angle);y+=LENGTH*Math.sin(angle);points.push({x,y,choice});}const shown=points.slice(0,p.step+1),end=shown[shown.length-1],zone=end.x<220?'sea':end.x>380?'harbor':'middle';if(zone==='sea')sea++;else if(zone==='harbor')harbor++;else middle++;if(weights(p,end.x,end.y).light)lit++;paths.push({id:i+1,points:shown,zone});}return{paths,sea,harbor,middle,lit,startWeights:weights(p,300,200),step:p.step,seed:p.seed,total:N};}
 const api={defaults,N,STEPS,LENGTH,valid,weights,calculate};root.PuffinLightModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
