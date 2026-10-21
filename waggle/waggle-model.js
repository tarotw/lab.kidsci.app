'use strict';
(function(root){
 const TAU=Math.PI*2,RAD=Math.PI/180,RETURN=.8,OFFSET=.3,SLOPES=[.0008,.0016];
 function finite(...n){if(!n.every(Number.isFinite))throw Error('Nonfinite teaching parameter');}
 function wrap360(a){finite(a);const z=((a%360)+360)%360;return z===0?0:z;}
 function signed(a){const z=wrap360(a+180)-180;return z===0?0:z;}
 function valid(p){finite(p.flower,p.sun,p.distance);if(p.flower< -180||p.flower>180||p.sun<0||p.sun>360||p.distance<200||p.distance>1000||![0,1].includes(p.calibration))throw Error('Invalid teaching settings');}
 function point(bearing,distance){finite(bearing,distance);if(distance<0)throw Error('Negative distance');return {x:distance*Math.sin(bearing*RAD),y:distance*Math.cos(bearing*RAD)};}
 function encode(p){valid(p);const angle=signed(p.flower-p.sun),duration=OFFSET+SLOPES[p.calibration]*p.distance;return {angle,duration,cycle:2*(duration+RETURN),target:point(p.flower,p.distance),bearing:wrap360(p.flower),sun:wrap360(p.sun)};}
 function decode(sun,angle,duration,calibration){finite(sun,angle,duration);if(duration<OFFSET||![0,1].includes(calibration))throw Error('Invalid teaching message');const distance=(duration-OFFSET)/SLOPES[calibration],bearing=wrap360(sun+angle);return {bearing,distance,...point(bearing,distance)};}
 function rotate(x,y,angle){const a=angle*RAD;return{x:x*Math.cos(a)-y*Math.sin(a),y:x*Math.sin(a)+y*Math.cos(a)};}
 function frame(p,progress){const e=encode(p);finite(progress);if(progress<0||progress>1)throw Error('Invalid cycle progress');const time=progress*e.cycle,half=e.duration+RETURN,index=Math.min(1,Math.floor(time/half)),local=time-index*half,returning=local>=e.duration;
  let x,y,dx,dy,u;if(!returning){u=local/e.duration;const f=8*TAU*local;x=4*Math.sin(f)*Math.sin(Math.PI*u);y=60-120*u;dx=4*(8*TAU*Math.cos(f)*Math.sin(Math.PI*u)+Math.sin(f)*Math.PI*Math.cos(Math.PI*u)/e.duration);dy=-120/e.duration;}
  else{u=Math.min(1,(local-e.duration)/RETURN);const side=index?-1:1;x=2*85*side*u*(1-u);y=-60+120*u;dx=2*85*side*(1-2*u);dy=120;}
  const pos=rotate(x,y,e.angle);return {time,progress,done:progress===1,index,phase:returning?'return':'waggle',phaseProgress:u,x:pos.x,y:pos.y,heading:signed(Math.atan2(dx,-dy)/RAD+e.angle),...e};
 }
 function check(p,x,y){valid(p);finite(x,y);const target=point(p.flower,p.distance),distance=Math.hypot(x,y),bearing=distance===0?null:wrap360(Math.atan2(x,y)/RAD);return {target,error:Math.hypot(x-target.x,y-target.y),distance,bearing};}
 const api={RETURN,OFFSET,SLOPES,wrap360,signed,valid,point,encode,decode,rotate,frame,check};root.WaggleModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
