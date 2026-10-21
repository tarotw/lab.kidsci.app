(function(root){'use strict';
function svg(r,lang=0,layer=0){const T=(a,b)=>lang?b:a,fmt=(v,n=1)=>Number(v).toFixed(n),colorS='#94dfe1',colorC='#b2a8fc';let body='';
const path=(pts)=>'M'+pts.map(a=>a.join(',')).join(' L')+' Z';
if(layer===1){const x=200,y=78,k=300,w=r.B*k,h=r.H*k,t=r.t*k;
body=`<text x="25" y="25">${T('截面：同一外尺寸，換殼與芯','Section: same outer size, change shell and core')}</text><path d="M${x} ${y}h${w}v${h}h${-w}Z M${x+t} ${y+t}h${w-2*t}v${h-2*t}h${-(w-2*t)}Z" fill="${colorS}55" fill-rule="evenodd" stroke="${colorS}" stroke-width="2"/>`;
if(r.phi>0)body+=`<rect x="${x+t}" y="${y+t}" width="${w-2*t}" height="${h-2*t}" fill="${colorC}" opacity="${.15+.6*r.phi}"/>`;
if(r.phi>0&&r.porosity>0){for(let i=0;i<14;i++){const cx=x+t+(w-2*t)*(.06+.88*((i*5%14)/13)),cy=y+t+(h-2*t)*(.23+.54*((i*3%5)/4)),rx=Math.min(7,(w-2*t)/20),ry=Math.min(5,(h-2*t)*.16);body+=`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#0c1726" opacity="${r.porosity/100}"/>`;}}
body+=`<text x="220" y="177">${r.core?T('孔洞只作示意，不是計算網格','Pores are illustrative, not a calculation mesh'):T('沒有內芯；外殼保留','No core; shell retained')}</text><text x="120" y="212">${T('空隙','Void ')} ${r.core?r.porosity:100}% · ${T('殼厚','Shell thickness ')} ${r.thick}% H</text>`;
}else{const k=180,Y=100,points=r.beam.map(a=>[90+k*a.x,Y+4*k*a.y]),outer=path(points.map(a=>[a[0],a[1]-k*r.H/2]).concat(points.slice().reverse().map(a=>[a[0],a[1]+k*r.H/2]))),inner=path(points.map(a=>[a[0],a[1]-k*r.hc/2]).concat(points.slice().reverse().map(a=>[a[0],a[1]+k*r.hc/2]))),tip=points.at(-1);
body=`<text x="25" y="25">${layer===2?(r.phi>0?T('只看外殼：內芯仍參與計算','Shell view: core still included'):T('只看外殼：這個樣本沒有等效芯','Shell view: no effective core')):T('假想喙梁：彎曲放大4倍','Hypothetical beam: bending magnified ×4')}</text><circle cx="50" cy="100" r="28" fill="#293e51"/><circle cx="54" cy="91" r="5" fill="#efb96c"/><rect x="77" y="69" width="13" height="62" fill="#42616b"/><path d="M90 100 H630" stroke="#32485b" stroke-dasharray="8 5"/><path d="${outer} ${inner}" fill-rule="evenodd" fill="${colorS}55" stroke="${colorS}" stroke-width="2"/>`;
if(r.phi>0&&layer!==2)body+=`<path d="${inner}" fill="${colorC}" opacity="${.15+.6*r.phi}"/>`;
if(r.P>0)body+=`<path d="M${tip[0]} ${tip[1]-35}v30 l-7 -10 m7 10 l7 -10" fill="none" stroke="#efb96c" stroke-width="3"/>`;
body+=`<text x="90" y="201">${T('長度','Length ')} ${fmt(r.length)} L₀ · ${T('空隙','Void ')} ${r.core?r.porosity:100}%</text><text x="90" y="232">${T('喙形只是導覽；模型為等截面梁','Bird shape is a guide; model is a uniform beam')}</text>`;
}
const sw=440*r.massShell/.9,cw=440*r.massCore/.9;
body+=`<text x="25" y="270">${T('用料點','Material points')}</text><rect x="200" y="255" width="440" height="18" fill="#071422"/><rect x="200" y="255" width="${sw}" height="18" fill="${colorS}"/><rect x="${200+sw}" y="255" width="${cw}" height="18" fill="${colorC}"/><text x="200" y="298">0</text><text x="640" y="298" text-anchor="end">900 · ${T('固定尺','fixed scale')}</text>`;
return `<svg class="beak-scene" viewBox="0 0 720 310" role="img" aria-label="${T('假想巨嘴鳥夾層梁、截面與固定尺用料帳；不是實測鳥喙','Hypothetical toucan sandwich beam, section and fixed-scale material ledger; not measured anatomy')}">${body}</svg>`;}
root.BeakView={svg};if(typeof module!=='undefined')module.exports=root.BeakView;
})(globalThis);
