(function(root){'use strict';
const F=(v,n=1)=>Number(v).toFixed(n),E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function svg(r,lang=0,layer=0){const T=(a,b)=>lang?b:a,cx=116,cy=112,S=88/30,P=q=>({x:cx+q.x*S,y:cy+q.y*S}),center={x:cx,y:cy},outer=r.radius*S,path=r.points.map((q,i)=>{q=P(q);return (i?'L':'M')+F(q.x,3)+','+F(q.y,3);}).join(' '),worst=P(r.worst);
let art=`<circle cx="${cx}" cy="${cy}" r="${outer}" fill="#122538" stroke="#8a9ba9" stroke-width="1.3"/><circle cx="${cx}" cy="${cy}" r="${outer*.2}" fill="#071422"/>`;
if(layer===1)art+=r.samples.map(q=>{const a=P(q);return `<circle cx="${F(a.x,3)}" cy="${F(a.y,3)}" r="1.2" fill="${q.hit?'#efb96c':'#486177'}"/>`;}).join('');
art+=r.angles.map(a=>`<path d="M${cx},${cy}l${F(outer*Math.cos(a),3)},${F(outer*Math.sin(a),3)}" stroke="#62838b" stroke-width=".8"/>`).join('');
art+=`<path d="${path}" fill="none" stroke="#94dfe1" stroke-width="1.3"/><circle cx="${cx}" cy="${cy}" r="2" fill="#94dfe1"/>`;
if(layer===2)art+=`<circle cx="${F(worst.x,3)}" cy="${F(worst.y,3)}" r="${F(r.worst.distance*S,3)}" fill="#efb96c20" stroke="#efb96c" stroke-dasharray="3 2"/><path d="M${F(worst.x-3,3)},${F(worst.y,3)}h6m-3,-3v6" stroke="#efb96c"/>`;
const legend=layer===1?T('金點：圓片碰到黏絲','Gold: probe touches spiral'):layer===2?T('金圈：最遠取樣點到黏絲','Gold: farthest sampled point'):T('青：黏絲；灰：支撐絲','Cyan: spiral; gray: support');
art+=`<text x="8" y="18">${E(r.type===0?T('等距螺線','Even spiral'):r.type===1?T('對數螺線','Log spiral'):T('人工不規則網','Toy uneven web'))}</text><text x="8" y="224">${E(legend)}</text><path d="M232,28h60m-60,-3v6m60,-6v6" stroke="#e9f0ef"/><text x="237" y="49">${F(60/S,1)}cm</text><text x="237" y="79">R ${F(r.radius,0)}cm</text><text x="237" y="101">${E(T('同尺度','Same scale'))}</text>${r.probe>0?`<circle cx="262" cy="139" r="${r.probe*S/2}" fill="none" stroke="#efb96c"/>`:`<path d="M259,139h6m-3,-3v6" stroke="#efb96c"/>`}<text x="231" y="166">${E(T('圓片 Ø','Probe Ø'))}</text><text x="237" y="187">${F(r.probe,1)}cm${r.probe===0?E(T("（點）"," (point)")):""}</text>`;
return `<svg class="geom-scene" viewBox="0 0 320 236" role="img" aria-label="${E(T('原創數學網教具，','Original mathematical web toy, ')+r.radius+'cm, '+r.turns+T('圈',' turns')+', '+F(r.totalM,2)+'m, '+F(r.coverage,1)+'%')}">${art}</svg>`;}
root.GeomView={svg};if(typeof module!=='undefined')module.exports=root.GeomView;
})(globalThis);
