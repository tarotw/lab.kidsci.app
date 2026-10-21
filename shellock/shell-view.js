(function(root){'use strict';const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const boundary='L250 82 L273 82 C270 57 327 57 327 94 C327 131 270 131 273 106 L250 106 L250 150';
function svg(r,lang=0,layer=0){const T=(a,b)=>lang?b:a,x=150*r.travel,stroke=r.blocked?'#ed9fba':'#94dfe1',attrs=(color)=>`fill="${color}30" stroke="${color}" stroke-width="3"`;
let body='';
if(layer===0){
 const left=r.type===1?'M70 40 L250 40 '+boundary+' L70 150 Z':`M70 40 H${r.type===2?286:250} V150 H70 Z`;
 const right=r.type===1?'M460 40 L250 40 '+boundary+' L460 150 Z':'M250 40 H460 V150 H250 Z';
 body=`<text x="25" y="25">${T('俯視：從上面看','Top: look from above')}</text><path d="${left}" ${attrs('#94dfe1')}/><g transform="translate(${x} 0)"><path d="${right}" ${attrs('#efb96c')} ${r.lifted?'stroke-dasharray="9 5"':''}/><text x="425" y="95" text-anchor="middle">B</text></g><text x="110" y="95">A</text>`;
 if(r.force>0)body+=`<path d="M${460+x} 95 h${20+40*r.force} l-12 -9 m12 9 l-12 9" fill="none" stroke="#efb96c" stroke-width="5"/><text x="360" y="200">${T('向右拉 →','Pull right →')}</text>`;
 if(r.blocked)body+=`<circle cx="285" cy="94" r="45" fill="none" stroke="${stroke}" stroke-width="4"/><text x="240" y="240">${T('倒扣卡住','Tooth blocked')}</text>`;
 else if(r.type===2&&r.overlap>0)body+=`<rect x="${250+x}" y="42" width="${150*r.overlap}" height="106" fill="#b2a8fc45"/><text x="225" y="240">${T('投影重疊，B在A上方','Overlap: B is above A')}</text>`;
 else if(r.lifted)body+=`<text x="205" y="240">${T('虛線B已抬離平面','Dashed B is raised above A')}</text>`;
 else body+=`<text x="215" y="240">${r.separated?T('兩片已移開','Plates moved apart'):T('剛性殼片，沒有模擬裂開','Rigid plates; no fracture simulated')}</text>`;
}else if(layer===1){
 const t=600*r.t,z=600*r.lift,base=r.type===2?t:0,y=205;
 body=`<text x="25" y="25">${T('側面高度投影：高度×4','Side height projection: heights ×4')}</text><path d="M45 ${y} H690" stroke="#32485b" stroke-dasharray="8 5"/><rect x="70" y="${y-t}" width="${r.type===2?216:180}" height="${t}" ${attrs('#94dfe1')}/><rect x="${250+x}" y="${y-t-base-z}" width="210" height="${t}" ${attrs('#efb96c')}/><text x="100" y="${y+30}">A</text><text x="${330+x}" y="${Math.max(55,y-t-base-z-15)}">B</text>${z>0?`<path d="M${490+x} ${y-base} v${-z} l-7 10 m7 -10 l7 10" fill="none" stroke="#efb96c" stroke-width="3"/>`:""}<text x="25" y="265">${T('俯視重疊不一定接觸：看高度','Overlapping projections: check height')}</text>`;
}else{
 const y=100,t=500*r.t,pts=r.beam.map(a=>[90+500*a.x,y+4*500*a.y]),upper=pts.map(a=>a[0]+','+(a[1]-t/2)).join(' '),lower=pts.slice().reverse().map(a=>a[0]+','+(a[1]+t/2)).join(' ');
 body=`<text x="25" y="25">${T('另一小實驗：完整殼片，彎曲放大4倍','Separate test: intact strip, bending magnified ×4')}</text><rect x="70" y="65" width="20" height="80" fill="#42616b"/><path d="M90 ${y} H590" stroke="#32485b" stroke-dasharray="8 5"/><polygon points="${upper} ${lower}" ${attrs('#94dfe1')}/>${r.force>0?`<path d="M590 ${pts[40][1]-45} v40 l-8 -12 m8 12 l8 -12" fill="none" stroke="#efb96c" stroke-width="4"/>`:""}<text x="110" y="275">${T('同長、同寬、同材料；不含接縫','Same length, width, material; no joint')}</text>`;
}
return `<svg class="shell-scene" viewBox="0 0 720 290" role="img" aria-label="${esc(T('兩殼片的接縫與高度；完整殼片彎曲為另一實驗','Joint and height of two plates; intact-strip bending is a separate test'))}">${body}</svg>`;}
root.ShellView={svg};if(typeof module!=='undefined')module.exports=root.ShellView;
})(globalThis);
