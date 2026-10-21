'use strict';
(function(root){
 const END=20,K=.02;
 function valid(p){if(!p||!['area','wet','outer','inner','need'].every(k=>Number.isFinite(p[k]))||p.area<0||p.area>8||p.wet<0||p.wet>100||p.outer<0||p.outer>100||p.inner<0||p.inner>100||p.need<0||p.need>10)throw Error('Invalid teaching settings');}
 function rate(p){valid(p);const factor=.1+.9*p.wet/100,conductance=K*p.area*factor,inward=conductance*p.outer,outward=conductance*p.inner,net=inward-outward,balance=net-p.need;return{factor,conductance,inward,outward,net,balance,need:p.need,gap:Math.max(0,-balance),extra:Math.max(0,balance),direction:net>1e-9?'in':net< -1e-9?'out':'equal'};}
 function at(p,t){if(!Number.isFinite(t)||t<0||t>END)throw Error('Invalid teaching beat');const r=rate(p);return{...r,t,done:t===END,entered:r.inward*t,left:r.outward*t,netTotal:r.net*t,needed:p.need*t,balanceTotal:r.balance*t,gapTotal:r.gap*t,extraTotal:r.extra*t};}
 const api={END,K,valid,rate,at};root.SkinOxyModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
