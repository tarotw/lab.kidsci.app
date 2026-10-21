'use strict';
(function(root){
 const END=120,DT=.05,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function valid(p){if(!p||!['rate','protect','cold'].every(k=>Number.isFinite(p[k]))||p.rate<1||p.rate>5||p.protect<0||p.protect>10||p.cold<0||p.cold>100)throw Error('Invalid toy settings');}
 function snapshot(p,t,s){const cold=Math.min(p.cold,p.rate*t),total=s.il+s.ii+s.ol+s.oi;return {t,cold,...s,total,inside:s.il+s.ii,moved:60-s.il-s.ii,danger:s.ii>1e-9,phase:cold===0?'warm':cold<p.cold?'cool':'hold',done:t===END};}
 function trajectory(p){valid(p);let s={il:60,ii:0,ol:40,oi:0};const frames=[snapshot(p,0,s)],P=p.protect/10;
  for(let n=1;n<=END/DT;n++){const t=n*DT,c=Math.min(p.cold,p.rate*t),q=clamp((c-10-8*P)/(90+12*P),0,.95),inside=s.il+s.ii,desired=60*(1-(.7-.3*P)*q);
   const out=Math.min(s.il,Math.max(0,inside-desired)*(1-Math.exp(-.14*DT)));s.il-=out;s.ol+=out;
   const outside=s.ol+s.oi;s.oi=q*outside;s.ol=outside-s.oi;
   const threshold=35+30*P+.3*(60-s.il-s.ii);const frozen=s.il*(1-Math.exp(-.02*Math.max(0,c-threshold)*DT));s.il-=frozen;s.ii+=frozen;
   frames.push(snapshot(p,t,s));
  }Object.defineProperty(frames,'parameters',{value:Object.freeze({...p})});return frames;
 }
 function at(frames,t){if(!Number.isFinite(t)||t<0||t>END)throw Error('Invalid toy beat');const a=Math.floor(t/DT+1e-8),b=Math.min(frames.length-1,a+1),f=clamp((t-a*DT)/DT,0,1),s={};for(const k of ['il','ii','ol','oi','cold','inside','moved','total'])s[k]=frames[a][k]+f*(frames[b][k]-frames[a][k]);const p=frames.parameters;if(p)s.cold=Math.min(p.cold,p.rate*t);const endpoint=p?p.cold:frames[frames.length-1].cold;return {...frames[a],...s,t,phase:s.cold===0?'warm':s.cold<endpoint?'cool':'hold',danger:s.ii>1e-9,done:t===END};}
 const api={END,DT,valid,trajectory,at};root.IceCellModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
