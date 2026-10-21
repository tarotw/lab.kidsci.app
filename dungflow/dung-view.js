(function(root){'use strict';
const M=typeof module==='object'&&module.exports?require('./dung-model.js'):root.DungModel;
const NAMES=[['地表糞','Surface dung'],['埋入有機物','Buried organic N'],['土壤可用氮','Available soil N'],['植物','Plant'],['流失帳','Lost from plot']];
const LINES=[[['地表','糞'],['Surface','dung']],[['埋入','有機物'],['Buried','organic N']],[['土壤','可用氮'],['Available','soil N']],[['植物'],['Plant']],[['流失','帳'],['Lost from','plot']]];
const XY=[[60,70],[60,184],[176,132],[305,70],[305,184]],COLORS=['#e9c46a','#2a9d8f','#e76f51','#70c1b3','#b6a0ff','#f5a3c7','#a5ce66','#65b5ec','#efb17a','#ccd9df'];
const PATHS=['M27 70C12 70 12 184 27 184','M93 70C119 70 116 120 143 120','M93 85C120 237 240 237 272 184','M93 184C119 184 116 145 143 145','M209 120C246 120 240 70 272 70','M209 145C246 145 240 184 272 184'];
const LABELS=[[10,132],[111,97],[176,226],[111,166],[249,99],[249,165]];
const VERBS=[['埋','Bury'],['釋氮','Release'],['沖走','Runoff'],['釋氮','Release'],['吸收','Uptake'],['淋失','Leach']];
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function names(lang){return NAMES.map(a=>a[lang]);}
function svg(run,round,lang=0,layer=0,selected=0,scope='main'){const arrowId='dung-arrow-'+String(scope).replace(/[^a-zA-Z0-9_-]/g,'-');const s=M.at(run,round),label=(lang?'N batch, round ':'氮批次，回合 ')+s.round+'; '+s.stocks.map((n,i)=>NAMES[i][lang]+' '+n+'mgN').join('; ');let parts=[];
 if(layer===2){for(let i=0;i<5;i++){const y=12+i*43;for(let j=0;j<LINES[i][lang].length;j++)parts.push(`<text x="8" y="${y+15+j*20}">${E(LINES[i][lang][j])}</text>`);parts.push(`<rect x="152" y="${y+2}" width="180" height="17" fill="#253b4c"/><rect class="stock-bar" x="152" y="${y+2}" width="${1.8*s.stocks[i]}" height="17" fill="${COLORS[i]}"/><text x="332" y="${y+34}" text-anchor="end">${s.stocks[i]}mgN / 100</text>`);}}
 else{
  for(let e=0;e<6;e++){const n=s.flows[e],active=layer===1&&n>0;parts.push(`<path class="${active?'flow':'route'}" data-edge="${e}" d="${PATHS[e]}" fill="none" stroke="${active?'#72dfc7':'#6f8899'}" stroke-width="${active?.4*n:1}" ${active?'':'stroke-dasharray="3 3"'} marker-end="url(#${arrowId})"/>`);if(layer===1&&n>0)parts.push(`<text x="${LABELS[e][0]}" y="${LABELS[e][1]}" text-anchor="middle" class="flow-number">${n}</text>`);}
  for(let pool=0;pool<5;pool++){const [x,y]=XY[pool],ids=s.locations.map((p,id)=>p===pool?id:-1).filter(id=>id>=0);parts.push(`<rect x="${x-33}" y="${y-23}" width="66" height="46" rx="4" fill="#102638" stroke="#90a6b5"/>`);const lines=LINES[pool][lang];for(let j=0;j<lines.length;j++)parts.push(`<text x="${x}" y="${y-54+j*20}" text-anchor="middle">${E(lines[j])}</text>`);parts.push(`<text x="${x}" y="${y+37}" text-anchor="middle">${s.stocks[pool]}mgN</text>`);
   if(layer===0)for(let j=0;j<ids.length;j++){const id=ids[j],cx=x-23+(j%10)*5,cy=y-17+Math.floor(j/10)*3.6;parts.push(`<circle class="n-token" data-token="${id}" cx="${cx}" cy="${cy}" r="${id===selected?3:1.7}" fill="${COLORS[Math.floor(id/10)]}" ${id===selected?'stroke="#fff" stroke-width="1.5"':''}><title>#${id+1}: ${E(NAMES[pool][lang])}, 1mgN</title></circle>`);}
  }
 }
 return `<svg class="dung-scene" viewBox="0 0 360 240" role="img" aria-label="${E(label)}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="${arrowId}" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1L7 4L0 7" fill="none" stroke="#a9c6cf"/></marker></defs><g>${parts.join('')}</g></svg>`;
}
const api={NAMES,LINES,XY,COLORS,PATHS,LABELS,VERBS,E,names,svg};if(typeof module==='object'&&module.exports)module.exports=api;else root.DungView=api;
})(typeof globalThis!=='undefined'?globalThis:this);
