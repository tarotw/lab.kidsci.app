'use strict';
// Unfitted planning cells and resource points; not animal development predictions.
((root)=>{
const END=4,bounds={route:[0,1],count:[0,24],space:[0,24],budget:[0,96],exchange:[0,4]};
function validate(p){if(!p||typeof p!=='object')throw new TypeError('Parameters required');for(const[k,[a,b]]of Object.entries(bounds))if(!Number.isInteger(p[k])||p[k]<a||p[k]>b)throw new RangeError(k);}
function at(p,requested){validate(p);if(!Number.isInteger(requested)||requested<0||requested>END)throw new RangeError('stage');
 const costEach=p.route?4:2,assigned=Math.min(p.count,p.space,Math.floor(p.budget/costEach)),committed=assigned*costEach,capacity=p.space*p.exchange;
 let stage=assigned?Math.min(requested,1):0;
 while(stage>0&&stage<requested&&capacity>=stage*assigned)stage++;
 const eggCost=stage?2*assigned:0,setupCost=stage&&p.route?assigned:0,careCost=p.route?stage*assigned/4:0,spent=eggCost+setupCost+careCost,future=committed-spent,free=p.budget-committed,demand=stage>0&&stage<END?stage*assigned:0,shortfall=Math.max(0,demand-capacity);
 return Object.freeze({requested,stage,assigned,unassigned:p.count-assigned,costEach,committed,capacity,eggCost,setupCost,careCost,spent,future,free,remaining:p.budget-spent,demand,flow:Math.min(capacity,demand),shortfall,blocked:stage<requested,canAdvance:assigned>0&&stage<END&&(stage===0||shortfall===0),done:stage===END,perYoung:assigned?spent/assigned:null});
}
const api=Object.freeze({END,bounds,at});if(typeof module!=='undefined')module.exports=api;else root.PipabackModel=api;
})(typeof window==='undefined'?globalThis:window);
