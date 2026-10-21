'use strict';
(function(root){
 const distances=[null,null,null,8,6,4,2,1,null,null,null];
 function valid(p){if(![p.vision,p.dig,p.pressure].every(Number.isInteger)||p.vision<0||p.vision>8||p.dig<0||p.dig>100||p.pressure<0||p.pressure>100||![0,1].includes(p.pair)||![0,1].includes(p.link))throw Error('Invalid toy encounter settings');}
 function simulate(p){valid(p);const rows=[];let fishFood=0,shrimpFood=0,fishCost=0,shrimpCost=0,fishRisk=0,shrimpRisk=0,fishHidden=false,shrimpHidden=false;
 for(let step=0;step<=10;step++){
  const distance=distances[step],threat=distance!==null&&p.pressure>0,quality=p.dig/100*Math.min(1,step/2),fishCover=p.pair?.15+.85*quality:.15,shrimpCover=quality;
  if(!threat){fishHidden=false;shrimpHidden=false;}
  const detects=threat&&distance<=p.vision,signal=!!(detects&&p.pair&&p.link),shrimpDetects=threat&&distance<=1;
  fishHidden=fishHidden||detects;shrimpHidden=shrimpHidden||signal||shrimpDetects;
  const building=step===1||step===2,active=step>0&&step<10;
  const fishState=step===0?'ready':step===10?'done':fishHidden?'refuge':p.pair?'watch':'forage';
  const shrimpState=step===0?'ready':step===10?'done':building?'dig':shrimpHidden?'refuge':'forage';
  const base=threat?p.pressure/100*(9-distance)/2:0;
  const delta={fishFood:active&&!fishHidden?(p.pair?1:2):0,shrimpFood:active&&!building&&!shrimpHidden?2:0,fishCost:active&&!fishHidden&&p.pair?.5:0,shrimpCost:building?p.dig/50:0,fishRisk:base*(fishHidden?1-fishCover:1),shrimpRisk:base*(shrimpHidden?1-shrimpCover:1)};
  fishFood+=delta.fishFood;shrimpFood+=delta.shrimpFood;fishCost+=delta.fishCost;shrimpCost+=delta.shrimpCost;fishRisk+=delta.fishRisk;shrimpRisk+=delta.shrimpRisk;
  rows.push({step,distance,threat,detects,signal,shrimpDetects,quality,fishCover,shrimpCover,fishHidden,shrimpHidden,fishState,shrimpState,delta,fishFood,shrimpFood,fishCost,shrimpCost,fishRisk,shrimpRisk,fishNet:fishFood-fishCost-fishRisk,shrimpNet:shrimpFood-shrimpCost-shrimpRisk});
 }return rows;}
 const api={simulate,valid};root.RoomPairModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
