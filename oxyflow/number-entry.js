(function(root,factory){
 'use strict';const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 else api.install(root.document);
})(typeof window==='undefined'?globalThis:window,function(){
 'use strict';
 function candidate(text,range){
  const trimmed=String(text).trim();if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(trimmed))return null;
  const value=Number(trimmed),min=range.min===''||range.min==null?0:Number(range.min),max=range.max===''||range.max==null?100:Number(range.max),step=range.step===''||range.step==null?1:range.step==='any'?null:Number(range.step);
  if(!Number.isFinite(value)||!Number.isFinite(min)||!Number.isFinite(max)||max<min||value<min||value>max)return null;
  if(step!==null){if(!Number.isFinite(step)||step<=0)return null;const n=(value-min)/step;if(Math.abs(n-Math.round(n))>1e-7)return null;}
  return value;
 }
 function apply(range,field,emit){
  const value=candidate(field.value,range);
  if(range.disabled||value===null){field.value=range.value;return false;}
  if(value===Number(range.value)){field.value=range.value;return false;}
  range.value=String(value);
  if(emit)emit();else range.dispatchEvent(new Event('input',{bubbles:true}));
  field.value=range.value;return true;
 }
 function install(document){
  const app=document.getElementById('app');if(!app)return;
  const ranges=new WeakMap();let panelSerial=0;
  function english(){return document.documentElement.lang==='en';}
  function enhance(range){
   if(ranges.has(range))return;
   const directControl=range.closest('.control'),pairedId='num-'+range.id.replace(/^range-/,'');
   const alreadyPaired=Array.from(app.querySelectorAll('input[type="number"]')).some(n=>n.id===pairedId);
   if(alreadyPaired||(directControl&&directControl.querySelector('input[type="number"]')&&directControl.querySelectorAll('input[type="range"]').length===1))return;
   const control=directControl||range.parentElement;if(!control)return;
   const label=Array.from(control.querySelectorAll('label')).find(n=>n.htmlFor===range.id)||Array.from(app.querySelectorAll('label')).find(n=>n.htmlFor===range.id);if(!label)return;
   const row=document.createElement('div');row.className='number-entry-row';range.before(row);row.append(range);
   const field=document.createElement('input');field.type='number';field.id='entry-'+range.id;field.className='number-entry-field';field.inputMode='decimal';row.append(field);ranges.set(range,field);
   const panel=range.closest('.controls')||control;let hint=panel&&panel.querySelector('.number-entry-hint');
   if(panel&&!hint){hint=document.createElement('p');hint.className='unit number-entry-hint';hint.id='number-entry-hint-'+(++panelSerial);hint.textContent=english()?'You can also type a number, then press Enter.':'也能輸入數字，再按 Enter。';panel.prepend(hint);}
   if(hint)field.setAttribute('aria-describedby',hint.id);
   function sync(){
    field.min=range.min;field.max=range.max;field.step=range.step||'1';field.disabled=range.disabled;
    if(document.activeElement!==field)field.value=range.value;
    const labelCopy=label.cloneNode(true);labelCopy.querySelectorAll('output').forEach(node=>node.remove());
    field.setAttribute('aria-label',(range.getAttribute('aria-label')||labelCopy.textContent.trim())+(english()?'; type a number, Enter to apply':'；輸入數字，按 Enter 套用'));
   }
   const descriptor=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value');
   if(descriptor&&descriptor.get&&descriptor.set){
    Object.defineProperty(range,'value',{configurable:true,get(){return descriptor.get.call(this);},set(v){descriptor.set.call(this,v);sync();}});
   }
   field.value=range.value;sync();
   function commit(){apply(range,field);sync();}
   field.addEventListener('change',commit);
   field.addEventListener('keydown',event=>{
    if(event.key==='Enter'){event.preventDefault();commit();}
    else if(event.key==='Escape'){event.preventDefault();field.value=range.value;}
   });
   range.addEventListener('input',()=>{field.value=range.value;sync();});
   range.addEventListener('change',sync);
   field.__numberEntrySync=sync;
  }
  function scan(){app.querySelectorAll('input[type="range"]').forEach(enhance);}
  scan();
  new MutationObserver(records=>{
   let addedRange=false,labelChanged=false;
   for(const record of records){
    if(record.type==='attributes'){const field=ranges.get(record.target);if(field)field.__numberEntrySync();}
    else {const target=record.target.nodeType===1?record.target:record.target.parentElement;if(target&&target.closest('label')&&!target.closest('output'))labelChanged=true;for(const node of record.addedNodes||[])if(node.nodeType===1&&(node.matches('input[type="range"]')||node.querySelector('input[type="range"]')))addedRange=true;}
   }
   if(addedRange)scan();
   if(labelChanged)app.querySelectorAll('input[type="range"]').forEach(range=>{const field=ranges.get(range);if(field)field.__numberEntrySync();});
  }).observe(app,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:['min','max','step','disabled','aria-label']});
 }
 return {candidate,apply,install};
});
