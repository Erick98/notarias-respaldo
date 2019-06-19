jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,r,i){return jQuery.easing[jQuery.easing.def](t,e,n,r,i)},easeInQuad:function(t,e,n,r,i){return r*(e/=i)*e+n},easeOutQuad:function(t,e,n,r,i){return-r*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e+n:-r/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,r,i){return r*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,r,i){return r*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e+n:r/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,r,i){return r*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,r,i){return-r*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e+n:-r/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,r,i){return r*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,r,i){return r*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e*e+n:r/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,r,i){return-r*Math.cos(e/i*(Math.PI/2))+r+n},easeOutSine:function(t,e,n,r,i){return r*Math.sin(e/i*(Math.PI/2))+n},easeInOutSine:function(t,e,n,r,i){return-r/2*(Math.cos(Math.PI*e/i)-1)+n},easeInExpo:function(t,e,n,r,i){return 0==e?n:r*Math.pow(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,r,i){return e==i?n+r:r*(-Math.pow(2,-10*e/i)+1)+n},easeInOutExpo:function(t,e,n,r,i){return 0==e?n:e==i?n+r:(e/=i/2)<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,r,i){return-r*(Math.sqrt(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,r,i){return r*Math.sqrt(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,r,i){return(e/=i/2)<1?-r/2*(Math.sqrt(1-e*e)-1)+n:r/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,r,i){var a=1.70158,s=0,o=r;if(0==e)return n;if(1==(e/=i))return n+r;if(s||(s=.3*i),o<Math.abs(r)){o=r;var a=s/4}else var a=s/(2*Math.PI)*Math.asin(r/o);return-(o*Math.pow(2,10*(e-=1))*Math.sin((e*i-a)*2*Math.PI/s))+n},easeOutElastic:function(t,e,n,r,i){var a=1.70158,s=0,o=r;if(0==e)return n;if(1==(e/=i))return n+r;if(s||(s=.3*i),o<Math.abs(r)){o=r;var a=s/4}else var a=s/(2*Math.PI)*Math.asin(r/o);return o*Math.pow(2,-10*e)*Math.sin((e*i-a)*2*Math.PI/s)+r+n},easeInOutElastic:function(t,e,n,r,i){var a=1.70158,s=0,o=r;if(0==e)return n;if(2==(e/=i/2))return n+r;if(s||(s=i*.3*1.5),o<Math.abs(r)){o=r;var a=s/4}else var a=s/(2*Math.PI)*Math.asin(r/o);return 1>e?-.5*o*Math.pow(2,10*(e-=1))*Math.sin((e*i-a)*2*Math.PI/s)+n:.5*o*Math.pow(2,-10*(e-=1))*Math.sin((e*i-a)*2*Math.PI/s)+r+n},easeInBack:function(t,e,n,r,i,a){return void 0==a&&(a=1.70158),r*(e/=i)*e*((a+1)*e-a)+n},easeOutBack:function(t,e,n,r,i,a){return void 0==a&&(a=1.70158),r*((e=e/i-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(t,e,n,r,i,a){return void 0==a&&(a=1.70158),(e/=i/2)<1?r/2*e*e*(((a*=1.525)+1)*e-a)+n:r/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(t,e,n,r,i){return r-jQuery.easing.easeOutBounce(t,i-e,0,r,i)+n},easeOutBounce:function(t,e,n,r,i){return(e/=i)<1/2.75?r*7.5625*e*e+n:2/2.75>e?r*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?r*(7.5625*(e-=2.25/2.75)*e+.9375)+n:r*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,r,i){return i/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,r,i)+n:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,r,i)+.5*r+n}});