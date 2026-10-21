(function(root){'use strict';
function draw(canvas,r,lang=0,layer=0){const T=(a,b)=>lang?b:a,box=canvas.getBoundingClientRect(),w=Math.max(260,box.width),h=box.height||200,dpr=Math.min(3,root.devicePixelRatio||1);
canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);const c=canvas.getContext('2d');if(!c)return;c.scale(dpr,dpr);c.clearRect(0,0,w,h);c.font='12px system-ui';c.lineWidth=1.5;
const text=(s,x,y,color='#d3e5ea',align='left')=>{c.fillStyle=color;c.textAlign=align;c.fillText(s,x,y);},line=(x1,y1,x2,y2,col='#94dfe1',dash=[])=>{c.strokeStyle=col;c.setLineDash(dash);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.setLineDash([]);},dot=(x,y,col)=>{c.fillStyle=col;c.beginPath();c.arc(x,y,4,0,Math.PI*2);c.fill();},arrow=(x,y,ex,ey,col)=>{line(x,y,ex,ey,col);const a=Math.atan2(ey-y,ex-x);line(ex,ey,ex-6*Math.cos(a-.4),ey-6*Math.sin(a-.4),col);line(ex,ey,ex-6*Math.cos(a+.4),ey-6*Math.sin(a+.4),col);};
if(layer===2){const x=a=>36+(a+65)/130*(w-54),y=p=>h-30-p/750*(h-66);text(T('一階峰（nm）','First-order peak (nm)'),12,17);for(const p of [300,500,700]){line(36,y(p),w-18,y(p),'#293e51');text(p,31,y(p)+4,'#a6b7c9','right');}line(36,31,36,h-30,'#42616b');line(36,h-30,w-18,h-30,'#42616b');for(const a of [-65,0,65])text(a+'°',x(a),h-10,'#a6b7c9','center');
if(r.structure){c.strokeStyle='#94dfe1';c.beginPath();r.curve.forEach((v,i)=>i?c.lineTo(x(v.angle),y(v.peak)):c.moveTo(x(v.angle),y(v.peak)));c.stroke();dot(x(r.angle),y(r.peak),'#efb96c');const label=T('約','~')+Math.round(r.peak)+' nm',half=c.measureText(label).width/2;const lx=Math.max(42+half,Math.min(w-18-half,x(r.angle)));text(label,lx,Math.max(45,y(r.peak)-10),'#efb96c','center');}else text(T('無週期峰：只有背景反射','No periodic peak: background only'),w/2,h/2,'#efb96c','center');return;}
if(layer===1){text(T('局部翅鱗：放大的等價層面','Local scale: enlarged equivalent planes'),10,18);const x=32,y=45,scale=.065,step=r.spacing*scale;if(r.structure){for(let i=0;i<5;i++)line(x,y+i*step,w-90,y+i*step,i%2?'#efb96c':'#94dfe1');line(w-62,y,w-62,y+step,'#b2a8fc');line(w-68,y,w-56,y,'#b2a8fc');line(w-68,y+step,w-56,y+step,'#b2a8fc');text('d',w-49,y+step/2+4,'#b2a8fc');text('d = '+r.spacing+'nm',10,h-41);text(T('相鄰等價面：一個完整週期','d spans adjacent equivalent planes'),10,h-20);}else{line(x,y+25,w-60,y+25);text(T('移除週期選擇性帶','Selective periodic band removed'),10,h-55);text(T('背景反射率仍為0.04','Background reflectance remains 0.04'),10,h-30);}return;}
// A side-view patch; parallel rays hit nearby points to separate coincident zero-angle rays.
const gx=w*.48,gy=48,a=r.angle*Math.PI/180;
text(T('局部翅片側面','Wing side view'),10,13);text(T('探測器跟著反射','Detector follows'),w-10,13,'#94dfe1','right');
c.save();c.translate(gx,gy);c.rotate(a);c.fillStyle=r.patch.css;c.strokeStyle='#94dfe1';c.fillRect(-45,-4,90,8);c.strokeRect(-45,-4,90,8);c.restore();
const ix=gx-7*Math.cos(a),iy=gy-7*Math.sin(a),ox=gx+7*Math.cos(a),oy=gy+7*Math.sin(a);
if(r.intensity>0){arrow(ix,iy-27,ix,iy,'#efb96c');dot(ix,iy-30,'#efb96c');arrow(ox,oy,ox+29*r.reflected[0],oy+29*r.reflected[1],'#94dfe1');dot(ox+33*r.reflected[0],oy+33*r.reflected[1],'#94dfe1');}else{dot(ix,iy-30,'#42616b');dot(ox+33*r.reflected[0],oy+33*r.reflected[1],'#42616b');}
line(gx,gy,gx+23*r.normal[0],gy+23*r.normal[1],'#b2a8fc',[3,3]);text('|α| = '+Math.abs(r.angle)+'°',10,73,'#b2a8fc');
const left=32,right=w-12,top=94,bottom=h-30,x=wave=>left+(wave-300)/650*(right-left),y=v=>bottom-v*(bottom-top);
c.fillStyle='#293e51';c.fillRect(left,top,x(380)-left,bottom-top);c.fillRect(x(780),top,right-x(780),bottom-top);line(left,top,left,bottom,'#42616b');line(left,bottom,right,bottom,'#42616b');text('1',left-5,top+5,'#a6b7c9','right');text('0',left-5,bottom+4,'#a6b7c9','right');
for(const [key,col] of [['R','#b2a8fc'],['S','#efb96c'],['out','#94dfe1']]){c.strokeStyle=col;c.beginPath();r.samples.forEach((s,i)=>i?c.lineTo(x(s.w),y(s[key])):c.moveTo(x(s.w),y(s[key])));c.stroke();}
if(r.structure&&r.peak>=300&&r.peak<=950)line(x(r.peak),top,x(r.peak),bottom,'#b2a8fc',[3,3]);
for(const wave of [300,500,700,950])text(wave,x(wave),h-13,'#a6b7c9',wave===300?'left':wave===950?'right':'center');text('nm',right,h-1,'#a6b7c9','right');
}
root.WingView={draw};if(typeof module!=='undefined')module.exports=root.WingView;
})(globalThis);
