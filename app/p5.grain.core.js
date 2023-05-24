/**!
 * p5.grain
 * 
 * @version 0.6.1
 * @license MIT
 * @copyright meezwhite, Gorilla Sun
 */
class P5Grain{version="0.6.1";#e;#t;#n;constructor(){this.#e=Math.random,this.#t={frameCount:0},this.#n={frameCount:0,tX_anchor:0,tX:0,tY:0}}setup(e){void 0===e?this.#e=random:"object"==typeof e&&"function"==typeof e.random&&(this.#e=e.random)}granulateSimple(e,t,n){const i=round(e),a=t||!1;n?n.loadPixels():loadPixels();const r=n?n.pixelDensity():pixelDensity(),o=width*r*4*(height*r),s=n?n.pixels:pixels;for(let e=0;e<o;e+=4){const t=this.#i(-i,i);s[e]=s[e]+t,s[e+1]=s[e+1]+t,s[e+2]=s[e+2]+t,a&&(s[e+3]=s[e+3]+t)}n?n.updatePixels():updatePixels()}granulateChannels(e,t,n){const i=round(e),a=t||!1;n?n.loadPixels():loadPixels();const r=n?n.pixelDensity():pixelDensity(),o=width*r*4*(height*r),s=n?n.pixels:pixels;for(let e=0;e<o;e+=4)s[e]=s[e]+this.#i(-i,i),s[e+1]=s[e+1]+this.#i(-i,i),s[e+2]=s[e+2]+this.#i(-i,i),a&&(s[e+3]=s[e+3]+this.#i(-i,i));n?n.updatePixels():updatePixels()}tinkerPixels(e,t,n){t=!1!==t,n?n.loadPixels():loadPixels();const i=n?n.pixelDensity():pixelDensity(),a=width*i*4*(height*i);for(let t=0;t<a;t+=4)e(t,a);t&&(n?n.updatePixels():updatePixels())}textureAnimate(e,t){const n=t&&t.atFrame?round(t.atFrame):2;if(this.#t.frameCount+=1,this.#t.frameCount>=n){const n=t&&t.amount?round(t.amount):min(width,height),i=floor(this.#e()*n),a=floor(this.#e()*n),r=`${i}px ${a}px`;e instanceof HTMLElement?e.style.backgroundPosition=r:e instanceof SVGElement?(e.style.top=-a+"px",e.style.left=-i+"px"):e instanceof p5.Element&&e.style("background-position",r),this.#t.frameCount=0}}textureOverlay(e,t,n){const i=n instanceof p5.Graphics,a=i?n.width:width,r=i?n.height:height,o=t&&t.mode?t.mode:MULTIPLY,s=!(!t||!t.reflect)&&t.reflect,l=!(!t||!t.animate)&&t.animate,u=t&&t.animate&&t.animate.atFrame?round(t.animate.atFrame):2,p=t&&t.animate&&t.animate.amount?round(t.animate.amount):min(a,r),h=t&&"number"==typeof t.width?t.width:e.width,m=t&&"number"==typeof t.height?t.height:e.height;l&&(this.#n.frameCount+=1,this.#n.frameCount>=u&&(this.#n.tX_anchor=-floor(this.#e()*p),this.#n.tY=-floor(this.#e()*p),this.#n.frameCount=0));let d=this.#n.tX_anchor,c=this.#n.tY,x=!0,f=!0;for(n?n.blendMode(o):blendMode(o);c<r;){for(;d<a;){if(s?(i?n.push():push(),x?f?i?n.image(e,d,c,h,m):image(e,d,c,h,m):i?(n.scale(-1,1),n.image(e,-d,c,-h,m)):(scale(-1,1),image(e,-d,c,-h,m)):f?i?(n.scale(1,-1),n.image(e,d,-c,h,-m)):(scale(1,-1),image(e,d,-c,h,-m)):i?(n.scale(-1,-1),n.image(e,-d,-c,-h,-m)):(scale(-1,-1),image(e,-d,-c,-h,-m)),i?n.pop():pop()):i?n.image(e,d,c,h,m):image(e,d,c,h,m),d+=h,d>=a){f=!0,d=this.#n.tX_anchor,c+=m;break}f=!f}x=!x}n?n.blendMode(BLEND):blendMode(BLEND),i&&n.reset()}#i(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(this.#e()*(t-e+1)+e)}}const p5grain=new P5Grain;p5.prototype.granulateSimple=function(e,t){return p5grain.granulateSimple(e,t)},p5.Graphics.prototype.granulateSimple=function(e,t){return p5grain.granulateSimple(e,t,this)},p5.prototype.granulateChannels=function(e,t){return p5grain.granulateChannels(e,t)},p5.Graphics.prototype.granulateChannels=function(e,t){return p5grain.granulateChannels(e,t,this)},p5.prototype.tinkerPixels=function(e,t){return p5grain.tinkerPixels(e,t)},p5.Graphics.prototype.tinkerPixels=function(e,t){return p5grain.tinkerPixels(e,t,this)},p5.prototype.textureAnimate=function(e,t){return p5grain.textureAnimate(e,t)},p5.prototype.textureOverlay=function(e,t){return p5grain.textureOverlay(e,t)},p5.Graphics.prototype.textureOverlay=function(e,t){return p5grain.textureOverlay(e,t,this)};
