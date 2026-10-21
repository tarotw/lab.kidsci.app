'use strict';
(function(root){
 const EVENTS=['cover','immune','cells','grow','map','tissue'];
 const DEP={cover:[],immune:[],cells:['cover','immune'],grow:['cells'],map:['cells'],tissue:['grow','map']};
 const SIGNAL={cover:[],immune:['immune'],cells:['nerve'],grow:['nerve'],map:['position'],tissue:[]};
 function valid(queue,signals,n){if(!Array.isArray(queue)||queue.length!==6||queue.some(x=>x!==null&&!EVENTS.includes(x))||!signals||!['immune','nerve','position'].every(k=>typeof signals[k]==='boolean')||!Number.isInteger(n)||n<0||n>6)throw Error('Invalid teaching event sequence');}
 function at(queue,signals,n){valid(queue,signals,n);const state=Object.fromEntries(EVENTS.map(k=>[k,false])),records=[];for(let slot=0;slot<n;slot++){const event=queue[slot];let reason='',missingEvents=[],missingSignals=[];if(event===null)reason='empty';else if(state[event])reason='duplicate';else{missingEvents=DEP[event].filter(k=>!state[k]);missingSignals=SIGNAL[event].filter(k=>!signals[k]);reason=missingEvents.length?'prerequisite':missingSignals.length?'signal':'accepted';if(reason==='accepted')state[event]=true;}records.push({slot,event,accepted:reason==='accepted',reason,missingEvents,missingSignals,state:{...state}});}return{n,state,records,accepted:EVENTS.filter(k=>state[k]).length,complete:state.tissue,last:records[n-1]||null};}
 const api={EVENTS,DEP,SIGNAL,valid,at};root.RegrowModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
