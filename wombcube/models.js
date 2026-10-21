/* Original educational models, 2026-10-03. No animal performance calibration. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.Models=api;})(typeof globalThis!=='undefined'?globalThis:this,()=>{
const g=9.81,clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function grip(p){const mu=[.5,.6,.2][p.ground],anchor=[150,0,30][p.ground]*p.claw/100,limit=mu*40*g+anchor,force=Math.min(p.push,limit);return {limit,force,anchor,slip:p.push>limit,a:force/40};}
function snow(p){const pressure=p.mass*g/(p.area/10000)/1000;return {pressure,load:p.mass*g,sink:clamp((pressure-p.snow)/p.snow,0,1),above:pressure>p.snow};}
function echo(p){const c=331.3+.606*p.temp;return {c,time:2*p.distance/c,guess:p.guess,error:Math.abs(p.guess-p.distance)};}
function heat(p,s={core:40,bill:32},dt=1){let core=s.core,bill=s.bill;const conduct=1.2*p.flow/100,ha=.06*(5+4*p.wind);let transfer=0,out=0;const n=Math.ceil(dt/.02),h=dt/n;for(let i=0;i<n;i++){transfer=conduct*(core-bill);out=ha*(bill-p.air);core+=h*(2-transfer-.08*(core-p.air))/2000;bill+=h*(transfer-out)/80;}transfer=conduct*(core-bill);out=ha*(bill-p.air);return {core,bill,transfer,out,conduct,ha};}
function spring(p){
 const k=p.k,x0=p.x/1000,m=.004,c=p.damp,energy=.5*k*x0*x0,dt=.000002;
 let x=x0,v=0,t=0,loss=0,peak=0;const points=[{t:0,x:x0,v:0,power:0}];
 const integrateStep=h=>{const a=v,b=(-k*x-c*v)/m,a2=v+b*h/2,b2=(-k*(x+a*h/2)-c*a2)/m,a3=v+b2*h/2,b3=(-k*(x+a2*h/2)-c*a3)/m,a4=v+b3*h,b4=(-k*(x+a3*h)-c*a4)/m;return {x:x+h*(a+2*a2+2*a3+a4)/6,v:v+h*(b+2*b2+2*b3+b4)/6,loss:c*h*(a*a+2*a2*a2+2*a3*a3+a4*a4)/6};};
 while(x>0&&t<.06){let h=dt,next=integrateStep(h),crossed=next.x<=0;
  if(crossed){let lo=0,hi=dt;for(let j=0;j<30;j++){const mid=(lo+hi)/2;if(integrateStep(mid).x>0)lo=mid;else hi=mid;}h=(lo+hi)/2;next=integrateStep(h);}
  loss+=next.loss;x=crossed?0:next.x;v=next.v;t+=h;const power=-k*x*v-c*v*v;peak=Math.max(peak,power);
  if(t-points.at(-1).t>.00004)points.push({t,x,v,power});
 }
 if(points.at(-1).t!==t)points.push({t,x,v,power:-k*x*v-c*v*v});
 const useful=.5*m*v*v;return {energy,useful,loss,residual:.5*k*x*x,time:t,velocity:Math.abs(v),peak,directPeak:2*useful/.5,points};
}
const materials=[{name:['硬脆示例','Stiff / brittle'],points:[[0,0],[.025,500],[.05,1000]]},{name:['蛛絲啟發示例','Silk-inspired'],points:[[0,0],[.04,200],[.1,300],[.25,700]]},{name:['柔軟示例','Soft / stretchy'],points:[[0,0],[.15,50],[.4,120],[.6,180]]}];
function integrate(points,end=Infinity){let sum=0;for(let i=1;i<points.length;i++){let [x1,y1]=points[i-1],[x2,y2]=points[i];if(end<=x1)break;const x=Math.min(end,x2),y=y1+(y2-y1)*(x-x1)/(x2-x1);sum+=(x-x1)*(y1+y)/2;}return sum;}
function silk(p){const mat=materials[p.mat],end=mat.points.at(-1)[0],strain=p.stretch/100,broken=strain>=end;const pts=mat.points;let stress=0;for(let i=1;i<pts.length;i++)if(strain>=pts[i-1][0]&&strain<=pts[i][0])stress=pts[i-1][1]+(pts[i][1]-pts[i-1][1])*(strain-pts[i-1][0])/(pts[i][0]-pts[i-1][0]);const toughness=integrate(pts),capacity=toughness*.01;return {stress:broken?0:stress,strain,broken,toughness,capacity,absorbed:integrate(pts,Math.min(strain,end))*.01,ball:p.ball/1000*g*.1,catches:p.ball/1000*g*.1<=capacity,strength:Math.max(...pts.map(x=>x[1]))};}
function dam(p,s={volume:100,inside:0,outside:0,time:0},dt=1){let volume=s.volume,inside=s.inside,outside=s.outside;const n=Math.ceil(dt/.05),h=n?dt/n:0,area=100;let leak=0,overflow=0;for(let i=0;i<n;i++){const level=volume/area;leak=.6*p.gap*Math.sqrt(2*g*level);overflow=1.7*Math.pow(Math.max(0,level-p.height),1.5);const input=p.rain,available=volume+input*h,out=Math.min(available,(leak+overflow)*h);volume=available-out;inside+=input*h;outside+=out;}leak=.6*p.gap*Math.sqrt(2*g*volume/area);overflow=1.7*Math.pow(Math.max(0,volume/area-p.height),1.5);return {volume,inside,outside,time:s.time+dt,level:volume/area,leak,overflow,out:leak+overflow,balance:100+inside-outside-volume};}
function rng(seed){let n=seed>>>0;return ()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};}
function survey(p){const n=p.cameras*p.days,prob=p.p/100,miss=Math.pow(1-prob,n),random=rng(p.seed),trials=[];for(let t=0;t<100;t++){let hit=false;for(let i=0;i<n;i++){if(random()<prob){hit=true;break;}}trials.push(hit);}return {n,miss,trials,misses:trials.filter(x=>!x).length};}
function foot(p){
 const mass=10,k=p.k*1000,c=p.damp,travel=.08,dt=.0001,duration=1.5;
 const force=(y,v)=>y<0?0:k*y+c*Math.max(0,v)+2000000*Math.max(0,y-travel);
 const derivative=(y,v)=>[v,g-force(y,v)/mass,force(y,v),y>=0?c*Math.max(0,v)**2:0];
 let y=-p.height/100,v=0,t=0,peak=0,bottom=false,impulse=0,loss=0,firstStop=null,previous=null,previousForce=0;
 const contactTime=Math.sqrt(2*p.height/100/g),incoming=Math.sqrt(2*g*p.height/100),points=[{t:0,y,v,force:force(y,v)}];
 for(let i=0;i<15000;i++){
  const oldV=v,oldT=t,a=derivative(y,v),b=derivative(y+a[0]*dt/2,v+a[1]*dt/2),cc=derivative(y+b[0]*dt/2,v+b[1]*dt/2),d=derivative(y+cc[0]*dt,v+cc[1]*dt);
  y+=dt*(a[0]+2*b[0]+2*cc[0]+d[0])/6;v+=dt*(a[1]+2*b[1]+2*cc[1]+d[1])/6;impulse+=dt*(a[2]+2*b[2]+2*cc[2]+d[2])/6;loss+=dt*(a[3]+2*b[3]+2*cc[3]+d[3])/6;t=(i+1)*dt;
  const F=force(y,v);peak=Math.max(peak,F);bottom ||=y>travel;
  if(previous&&previous.force>previousForce+1e-8&&previous.force>F+1e-8)points.push(previous);
  previousForce=previous?.force||0;previous={t,y,v,force:F};
  if(!firstStop&&oldT>=contactTime&&oldV>0&&v<=0){const stopTime=oldT+dt*oldV/(oldV-v),span=stopTime-contactTime;firstStop={t:stopTime,span,incoming,netImpulse:mass*incoming,contactImpulse:mass*incoming+mass*g*span,meanForce:mass*incoming/span+mass*g};}
  if((i+1)%20===0)points.push({t,y,v,force:F});
 }
 if(contactTime>0)points.push({t:contactTime-1e-9,y:-incoming*1e-9,v:incoming,force:0});
 points.push({t:contactTime,y:0,v:incoming,force:c*incoming});peak=Math.max(peak,c*incoming);
 points.sort((a,b)=>a.t-b.t);const sampled=points.filter((p,i,a)=>!i||Math.abs(p.t-a[i-1].t)>1e-12);
 const potential=-mass*g*y+.5*k*Math.max(y,0)**2+1000000*Math.max(y-travel,0)**2,finalEnergy=.5*mass*v*v+potential,initialEnergy=mass*g*p.height/100;
 return {peak,bottom,points:sampled,impulse,loss,finalV:v,finalY:y,initialEnergy,finalEnergy,energyError:finalEnergy+loss-initialEnergy,firstStop,contactTime,incoming,duration};
}
function feed(p){const catchMass=p.density*p.volume*.8,gain=catchMass*4000,cost=p.cost+Math.pow(p.volume,1.3);return {catchMass,gain,cost,net:gain-cost,ratio:cost?gain/cost:0};}
return {g,clamp,grip,snow,echo,heat,spring,silk,materials,integrate,dam,rng,survey,foot,feed};});
