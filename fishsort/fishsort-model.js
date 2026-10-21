'use strict';
(function(root){
 const species=['O','P','U'];
 function valid(p){if(![0,1,2].includes(p.dataset)||![0,1].includes(p.feature)||!species.includes(p.primary)||!species.includes(p.ten))throw Error('Invalid classification rule');}
 function predict(card,p){const {bars,spines}=card;if(bars!==3)return 'U';if(!p.feature)return p.primary;if(spines===9)return 'P';if(spines===11)return 'O';if(spines===10)return p.ten;return 'U';}
 function active(cards,dataset){return cards.filter(x=>x.group<=dataset);}
 function classify(cards,p){valid(p);const entries=active(cards,p.dataset).map(card=>{const predicted=predict(card,p);return {id:card.id,truth:card.species,predicted,status:predicted==='U'?'pending':predicted===card.species?'correct':'wrong'};});const matrix={O:{O:0,P:0,U:0},P:{O:0,P:0,U:0}},counts={correct:0,wrong:0,pending:0};for(const a of entries){matrix[a.truth][a.predicted]++;counts[a.status]++;}return {entries,matrix,...counts,total:entries.length};}
 const api={predict,active,classify,valid};root.FishSortModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
