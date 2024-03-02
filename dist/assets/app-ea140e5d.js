(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ov(n,t){for(var e=-1,i=n==null?0:n.length;++e<i&&t(n[e],e,n)!==!1;);return n}var Uv=Ov;function Nv(n){return function(t,e,i){for(var r=-1,s=Object(t),a=i(t),o=a.length;o--;){var l=a[n?o:++r];if(e(s[l],l,s)===!1)break}return t}}var Fv=Nv,kv=Fv,Bv=kv(),Vv=Bv;function zv(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}var Gv=zv,Hv=typeof Aa=="object"&&Aa&&Aa.Object===Object&&Aa,lf=Hv,Wv=lf,Xv=typeof self=="object"&&self&&self.Object===Object&&self,$v=Wv||Xv||Function("return this")(),pi=$v,jv=pi,qv=jv.Symbol,Uo=qv,oh=Uo,cf=Object.prototype,Yv=cf.hasOwnProperty,Kv=cf.toString,Ps=oh?oh.toStringTag:void 0;function Zv(n){var t=Yv.call(n,Ps),e=n[Ps];try{n[Ps]=void 0;var i=!0}catch{}var r=Kv.call(n);return i&&(t?n[Ps]=e:delete n[Ps]),r}var Jv=Zv,Qv=Object.prototype,tg=Qv.toString;function eg(n){return tg.call(n)}var ng=eg,lh=Uo,ig=Jv,rg=ng,sg="[object Null]",ag="[object Undefined]",ch=lh?lh.toStringTag:void 0;function og(n){return n==null?n===void 0?ag:sg:ch&&ch in Object(n)?ig(n):rg(n)}var ua=og;function lg(n){return n!=null&&typeof n=="object"}var ha=lg,cg=ua,ug=ha,hg="[object Arguments]";function dg(n){return ug(n)&&cg(n)==hg}var pg=dg,uh=pg,fg=ha,uf=Object.prototype,mg=uf.hasOwnProperty,_g=uf.propertyIsEnumerable,vg=uh(function(){return arguments}())?uh:function(n){return fg(n)&&mg.call(n,"callee")&&!_g.call(n,"callee")},hf=vg,gg=Array.isArray,$n=gg,po={exports:{}};function bg(){return!1}var xg=bg;po.exports;(function(n,t){var e=pi,i=xg,r=t&&!t.nodeType&&t,s=r&&!0&&n&&!n.nodeType&&n,a=s&&s.exports===r,o=a?e.Buffer:void 0,l=o?o.isBuffer:void 0,c=l||i;n.exports=c})(po,po.exports);var df=po.exports,yg=9007199254740991,wg=/^(?:0|[1-9]\d*)$/;function Eg(n,t){var e=typeof n;return t=t??yg,!!t&&(e=="number"||e!="symbol"&&wg.test(n))&&n>-1&&n%1==0&&n<t}var pf=Eg,Sg=9007199254740991;function Mg(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Sg}var $c=Mg,Tg=ua,Cg=$c,Ag=ha,Pg="[object Arguments]",Rg="[object Array]",Lg="[object Boolean]",Dg="[object Date]",Ig="[object Error]",Og="[object Function]",Ug="[object Map]",Ng="[object Number]",Fg="[object Object]",kg="[object RegExp]",Bg="[object Set]",Vg="[object String]",zg="[object WeakMap]",Gg="[object ArrayBuffer]",Hg="[object DataView]",Wg="[object Float32Array]",Xg="[object Float64Array]",$g="[object Int8Array]",jg="[object Int16Array]",qg="[object Int32Array]",Yg="[object Uint8Array]",Kg="[object Uint8ClampedArray]",Zg="[object Uint16Array]",Jg="[object Uint32Array]",oe={};oe[Wg]=oe[Xg]=oe[$g]=oe[jg]=oe[qg]=oe[Yg]=oe[Kg]=oe[Zg]=oe[Jg]=!0;oe[Pg]=oe[Rg]=oe[Gg]=oe[Lg]=oe[Hg]=oe[Dg]=oe[Ig]=oe[Og]=oe[Ug]=oe[Ng]=oe[Fg]=oe[kg]=oe[Bg]=oe[Vg]=oe[zg]=!1;function Qg(n){return Ag(n)&&Cg(n.length)&&!!oe[Tg(n)]}var t0=Qg;function e0(n){return function(t){return n(t)}}var n0=e0,fo={exports:{}};fo.exports;(function(n,t){var e=lf,i=t&&!t.nodeType&&t,r=i&&!0&&n&&!n.nodeType&&n,s=r&&r.exports===i,a=s&&e.process,o=function(){try{var l=r&&r.require&&r.require("util").types;return l||a&&a.binding&&a.binding("util")}catch{}}();n.exports=o})(fo,fo.exports);var i0=fo.exports,r0=t0,s0=n0,hh=i0,dh=hh&&hh.isTypedArray,a0=dh?s0(dh):r0,ff=a0,o0=Gv,l0=hf,c0=$n,u0=df,h0=pf,d0=ff,p0=Object.prototype,f0=p0.hasOwnProperty;function m0(n,t){var e=c0(n),i=!e&&l0(n),r=!e&&!i&&u0(n),s=!e&&!i&&!r&&d0(n),a=e||i||r||s,o=a?o0(n.length,String):[],l=o.length;for(var c in n)(t||f0.call(n,c))&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||h0(c,l)))&&o.push(c);return o}var _0=m0,v0=Object.prototype;function g0(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||v0;return n===e}var b0=g0;function x0(n,t){return function(e){return n(t(e))}}var y0=x0,w0=y0,E0=w0(Object.keys,Object),S0=E0,M0=b0,T0=S0,C0=Object.prototype,A0=C0.hasOwnProperty;function P0(n){if(!M0(n))return T0(n);var t=[];for(var e in Object(n))A0.call(n,e)&&e!="constructor"&&t.push(e);return t}var R0=P0;function L0(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}var jc=L0,D0=ua,I0=jc,O0="[object AsyncFunction]",U0="[object Function]",N0="[object GeneratorFunction]",F0="[object Proxy]";function k0(n){if(!I0(n))return!1;var t=D0(n);return t==U0||t==N0||t==O0||t==F0}var mf=k0,B0=mf,V0=$c;function z0(n){return n!=null&&V0(n.length)&&!B0(n)}var qc=z0,G0=_0,H0=R0,W0=qc;function X0(n){return W0(n)?G0(n):H0(n)}var Yc=X0,$0=Vv,j0=Yc;function q0(n,t){return n&&$0(n,t,j0)}var Y0=q0,K0=qc;function Z0(n,t){return function(e,i){if(e==null)return e;if(!K0(e))return n(e,i);for(var r=e.length,s=t?r:-1,a=Object(e);(t?s--:++s<r)&&i(a[s],s,a)!==!1;);return e}}var J0=Z0,Q0=Y0,tb=J0,eb=tb(Q0),_f=eb;function nb(n){return n}var vf=nb,ib=vf;function rb(n){return typeof n=="function"?n:ib}var sb=rb,ab=Uv,ob=_f,lb=sb,cb=$n;function ub(n,t){var e=cb(n)?ab:ob;return e(n,lb(t))}var hb=ub,db=hb;const Kc=Oo(db);var ph=!1,Qi,nc,ic,no,io,gf,ro,rc,sc,ac,bf,oc,lc,xf,yf;function Ke(){if(!ph){ph=!0;var n=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(n),e=/(Mac OS X)|(Windows)|(Linux)/.exec(n);if(oc=/\b(iPhone|iP[ao]d)/.exec(n),lc=/\b(iP[ao]d)/.exec(n),ac=/Android/i.exec(n),xf=/FBAN\/\w+;/i.exec(n),yf=/Mobile/i.exec(n),bf=!!/Win64/.exec(n),t){Qi=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,Qi&&document&&document.documentMode&&(Qi=document.documentMode);var i=/(?:Trident\/(\d+.\d+))/.exec(n);gf=i?parseFloat(i[1])+4:Qi,nc=t[2]?parseFloat(t[2]):NaN,ic=t[3]?parseFloat(t[3]):NaN,no=t[4]?parseFloat(t[4]):NaN,no?(t=/(?:Chrome\/(\d+\.\d+))/.exec(n),io=t&&t[1]?parseFloat(t[1]):NaN):io=NaN}else Qi=nc=ic=io=no=NaN;if(e){if(e[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(n);ro=r?parseFloat(r[1].replace("_",".")):!0}else ro=!1;rc=!!e[2],sc=!!e[3]}else ro=rc=sc=!1}}var cc={ie:function(){return Ke()||Qi},ieCompatibilityMode:function(){return Ke()||gf>Qi},ie64:function(){return cc.ie()&&bf},firefox:function(){return Ke()||nc},opera:function(){return Ke()||ic},webkit:function(){return Ke()||no},safari:function(){return cc.webkit()},chrome:function(){return Ke()||io},windows:function(){return Ke()||rc},osx:function(){return Ke()||ro},linux:function(){return Ke()||sc},iphone:function(){return Ke()||oc},mobile:function(){return Ke()||oc||lc||ac||yf},nativeApp:function(){return Ke()||xf},android:function(){return Ke()||ac},ipad:function(){return Ke()||lc}},pb=cc,Pa=!!(typeof window<"u"&&window.document&&window.document.createElement),fb={canUseDOM:Pa,canUseWorkers:typeof Worker<"u",canUseEventListeners:Pa&&!!(window.addEventListener||window.attachEvent),canUseViewport:Pa&&!!window.screen,isInWorker:!Pa},mb=fb,wf=mb,Ef;wf.canUseDOM&&(Ef=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function _b(n,t){if(!wf.canUseDOM||t&&!("addEventListener"in document))return!1;var e="on"+n,i=e in document;if(!i){var r=document.createElement("div");r.setAttribute(e,"return;"),i=typeof r[e]=="function"}return!i&&Ef&&n==="wheel"&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var vb=_b,gb=pb,bb=vb,fh=10,mh=40,_h=800;function Sf(n){var t=0,e=0,i=0,r=0;return"detail"in n&&(e=n.detail),"wheelDelta"in n&&(e=-n.wheelDelta/120),"wheelDeltaY"in n&&(e=-n.wheelDeltaY/120),"wheelDeltaX"in n&&(t=-n.wheelDeltaX/120),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(t=e,e=0),i=t*fh,r=e*fh,"deltaY"in n&&(r=n.deltaY),"deltaX"in n&&(i=n.deltaX),(i||r)&&n.deltaMode&&(n.deltaMode==1?(i*=mh,r*=mh):(i*=_h,r*=_h)),i&&!t&&(t=i<1?-1:1),r&&!e&&(e=r<1?-1:1),{spinX:t,spinY:e,pixelX:i,pixelY:r}}Sf.getEventType=function(){return gb.firefox()?"DOMMouseScroll":bb("wheel")?"wheel":"mousewheel"};var xb=Sf,yb=xb;const wb=Oo(yb);class Eb{constructor(){this.currentDevice=null,this.breakpoints={sp:868},this.body=document.querySelector("body"),this.init()}detectViewport(t){this.breakpoints.sp>=t?this.body.dataset.viewport="sp":this.body.dataset.viewport="pc",this.currentDevice=this.body.dataset.viewport}init(){const t=window.innerWidth;this.detectViewport(t),window.addEventListener("resize",()=>{const e=window.innerWidth;this.detectViewport(e)})}observerStartBody(t={sp:null,tablet:null,pc:null}){this.deviceFunctionController(this.currentDevice,t),new MutationObserver(i=>{const s=i[0].target.dataset.viewport;this.currentDevice!==s&&(this.currentDevice=s,this.deviceFunctionController(this.currentDevice,t))}).observe(this.body,{attributes:!0})}deviceFunctionController(t,e){t==="sp"&&(e.pc&&typeof e.pc.remove=="function"&&e.pc.remove(),e.tablet&&typeof e.tablet.remove=="function"&&e.tablet.remove(),e.sp&&typeof e.sp.add=="function"&&e.sp.add()),t==="tablet"&&(e.pc&&typeof e.pc.remove=="function"&&e.pc.remove(),e.sp&&typeof e.sp.remove=="function"&&e.sp.remove(),e.tablet&&typeof e.tablet.add=="function"&&e.tablet.add()),t==="pc"&&(e.sp&&typeof e.sp.remove=="function"&&e.sp.remove(),e.tablet&&typeof e.tablet.remove=="function"&&e.tablet.remove(),e.pc&&typeof e.pc.add=="function"&&e.pc.add())}}function ei(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Mf(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},as={duration:.5,overwrite:!1,delay:0},Zc,Ve,le,Sn=1e8,ie=1/Sn,uc=Math.PI*2,Sb=uc/4,Mb=0,Tf=Math.sqrt,Tb=Math.cos,Cb=Math.sin,Re=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},oi=function(t){return typeof t=="number"},Jc=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},Qe=function(t){return t!==!1},Qc=function(){return typeof window<"u"},Ra=function(t){return _e(t)||Re(t)},Cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ze=Array.isArray,hc=/(?:-?\.?\d|\.)+/gi,Af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pf=/[+-]=-?[.\d]+/,Rf=/[^,'"\[\]\s]+/gi,Ab=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,In,dc,tu,mn={},mo={},Lf,Df=function(t){return(mo=pr(t,mn))&&sn},eu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},js=function(t,e){return!e&&console.warn(t)},If=function(t,e){return t&&(mn[t]=e)&&mo&&(mo[t]=e)||mn},qs=function(){return 0},Pb={suppressEvents:!0,isStart:!0,kill:!1},so={suppressEvents:!0,kill:!1},Rb={suppressEvents:!0},nu={},Ri=[],pc={},Of,un={},sl={},vh=30,ao=[],iu="",ru=function(t){var e=t[0],i,r;if(Hn(e)||_e(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=ao.length;r--&&!ao[r].targetTest(e););i=ao[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new rm(t[r],i)))||t.splice(r,1);return t},rr=function(t){return t._gsap||ru(Mn(t))[0]._gsap},Uf=function(t,e,i){return(i=t[e])&&_e(i)?t[e]():Jc(i)&&t.getAttribute&&t.getAttribute(e)||i},tn=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Zr=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Lb=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},_o=function(){var t=Ri.length,e=Ri.slice(0),i,r;for(pc={},Ri.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Nf=function(t,e,i,r){Ri.length&&!Ve&&_o(),t.render(e,i,r||Ve&&e<0&&(t._initted||t._startAt)),Ri.length&&!Ve&&_o()},Ff=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Rf).length<2?e:Re(t)?t.trim():t},kf=function(t){return t},Cn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Db=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},pr=function(t,e){for(var i in e)t[i]=e[i];return t},gh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Hn(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},vo=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Gs=function(t){var e=t.parent||he,i=t.keyframes?Db(ze(t.keyframes)):Cn;if(Qe(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Ib=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Bf=function(t,e,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},No=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Ni=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},sr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Ob=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fc=function(t,e,i,r){return t._startAt&&(Ve?t._startAt.revert(so):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Ub=function n(t){return!t||t._ts&&n(t.parent)},bh=function(t){return t._repeat?os(t._tTime,t=t.duration()+t._rDelay)*t:0},os=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},go=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fo=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},ko=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Pe(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fo(t),i._dirty||sr(i,t)),t},Vf=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=go(t.rawTime(),e),(!e._dur||da(0,e.totalDuration(),i)-e._tTime>ie)&&e.render(i,!0)),sr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ie}},Un=function(t,e,i,r){return e.parent&&Ni(e),e._start=Pe((oi(i)?i:i||t!==he?yn(t,i,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bf(t,e,"_first","_last",t._sort?"_start":0),mc(e)||(t._recent=e),r||Vf(t,e),t._ts<0&&ko(t,t._tTime),t},zf=function(t,e){return(mn.ScrollTrigger||eu("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Gf=function(t,e,i,r,s){if(au(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ve&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Of!==hn.frame)return Ri.push(t),t._lazy=[s,r],1},Nb=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},mc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Fb=function(t,e,i,r){var s=t.ratio,a=e<0||!e&&(!t._start&&Nb(t)&&!(!t._initted&&mc(t))||(t._ts<0||t._dp._ts<0)&&!mc(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=da(0,t._tDur,e),u=os(l,o),t._yoyo&&u&1&&(a=1-a),u!==os(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ve||r||t._zTime===ie||!e&&t._zTime){if(!t._initted&&Gf(t,e,r,i,l))return;for(h=t._zTime,t._zTime=e||(i?ie:0),i||(i=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&fc(t,e,i,!0),t._onUpdate&&!i&&dn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&dn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ni(t,1),!i&&!Ve&&(dn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kb=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ls=function(t,e,i,r){var s=t._repeat,a=Pe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Pe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&ko(t,t._tTime=t._tDur*o),t.parent&&Fo(t),i||sr(t.parent,t),t},xh=function(t){return t instanceof $e?sr(t):ls(t,t._dur)},Bb={_start:0,endTime:qs,totalDuration:qs},yn=function n(t,e,i){var r=t.labels,s=t._recent||Bb,a=t.duration()>=Sn?s.endTime(!1):t._dur,o,l,c;return Re(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(ze(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},Hs=function(t,e,i){var r=oi(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qe(l.vars.inherit)&&l.parent;a.immediateRender=Qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ye(e[0],a,e[s+1])},Vi=function(t,e){return t||t===0?e(t):e},da=function(t,e,i){return i<t?t:i>e?e:i},Be=function(t,e){return!Re(t)||!(e=Ab.exec(t))?"":e[1]},Vb=function(t,e,i){return Vi(i,function(r){return da(t,e,r)})},_c=[].slice,Hf=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==In},zb=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Re(r)&&!e||Hf(r,1)?(s=i).push.apply(s,Mn(r)):i.push(r)})||i},Mn=function(t,e,i){return le&&!e&&le.selector?le.selector(t):Re(t)&&!i&&(dc||!cs())?_c.call((e||tu).querySelectorAll(t),0):ze(t)?zb(t,i):Hf(t)?_c.call(t,0):t?[t]:[]},vc=function(t){return t=Mn(t)[0]||js("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Mn(e,i.querySelectorAll?i:i===t?js("Invalid scope")||tu.createElement("div"):t)}},Wf=function(t){return t.sort(function(){return .5-Math.random()})},Xf=function(t){if(_e(t))return t;var e=Hn(t)?t:{each:t},i=ar(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,h=r;return Re(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,m,v){var _=(v||e).length,p=a[_],f,y,b,w,T,C,S,D,U;if(!p){if(U=e.grid==="auto"?0:(e.grid||[1,Sn])[1],!U){for(S=-Sn;S<(S=v[U++].getBoundingClientRect().left)&&U<_;);U<_&&U--}for(p=a[_]=[],f=l?Math.min(U,_)*u-.5:r%U,y=U===Sn?0:l?_*h/U-.5:r/U|0,S=0,D=Sn,C=0;C<_;C++)b=C%U-f,w=y-(C/U|0),p[C]=T=c?Math.abs(c==="y"?w:b):Tf(b*b+w*w),T>S&&(S=T),T<D&&(D=T);r==="random"&&Wf(p),p.max=S-D,p.min=D,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(U>_?_-1:c?c==="y"?_/U:U:Math.max(U,_/U))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Be(e.amount||e.each)||0,i=i&&_<0?em(i):i}return _=(p[d]-p.min)/p.max||0,Pe(p.b+(i?i(_):_)*p.v)+p.u}},gc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Pe(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(oi(i)?0:Be(i))}},$f=function(t,e){var i=ze(t),r,s;return!i&&Hn(t)&&(r=i=t.radius||Sn,t.values?(t=Mn(t.values),(s=!oi(t[0]))&&(r*=r)):t=gc(t.increment)),Vi(e,i?_e(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Sn,u=0,h=t.length,d,m;h--;)s?(d=t[h].x-o,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?t[u]:a,s||u===a||oi(a)?u:u+Be(a)}:gc(t))},jf=function(t,e,i,r){return Vi(ze(t)?!e:i===!0?!!(i=0):!r,function(){return ze(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},Gb=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,a){return a(s)},r)}},Hb=function(t,e){return function(i){return t(parseFloat(i))+(e||Be(i))}},Wb=function(t,e,i){return Yf(t,e,0,1,i)},qf=function(t,e,i){return Vi(i,function(r){return t[~~e(r)]})},Xb=function n(t,e,i){var r=e-t;return ze(t)?qf(t,n(0,t.length),e):Vi(i,function(s){return(r+(s-t)%r)%r+t})},$b=function n(t,e,i){var r=e-t,s=r*2;return ze(t)?qf(t,n(0,t.length-1),e):Vi(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Ys=function(t){for(var e=0,i="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?Rf:hc),i+=t.substr(e,r-e)+jf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},Yf=function(t,e,i,r,s){var a=e-t,o=r-i;return Vi(s,function(l){return i+((l-t)/a*o||0)})},jb=function n(t,e,i,r){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Re(t),o={},l,c,u,h,d;if(i===!0&&(r=1)&&(i=null),a)t={p:t},e={p:e};else if(ze(t)&&!ze(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,s=function(v){v*=h;var _=Math.min(d,~~v);return u[_](v-_)},i=e}else r||(t=pr(ze(t)?[]:{},t));if(!u){for(l in e)su.call(o,t,l,"get",e[l]);s=function(v){return cu(v,o)||(a?t.p:t)}}}return Vi(i,s)},yh=function(t,e,i){var r=t.labels,s=Sn,a,o,l;for(a in r)o=r[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dn=function(t,e,i){var r=t.vars,s=r[e],a=le,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&Ri.length&&_o(),o&&(le=o),u=l?s.apply(c,l):s.call(c),le=a,u},Vs=function(t){return Ni(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ve),t.progress()<1&&dn(t,"onInterrupt"),t},qr,Kf=[],Zf=function(t){if(t)if(t=!t.name&&t.default||t,Qc()||t.headless){var e=t.name,i=_e(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:qs,render:cu,add:su,kill:cx,modifier:lx,rawVars:0},a={targetTest:0,get:0,getSetter:lu,aliases:{},register:0};if(cs(),t!==r){if(un[e])return;Cn(r,Cn(vo(t,s),a)),pr(r.prototype,pr(s,vo(t,a))),un[r.prop=e]=r,t.targetTest&&(ao.push(r),nu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}If(e,r),t.register&&t.register(sn,r,en)}else Kf.push(t)},ne=255,zs={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},al=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ne+.5|0},Jf=function(t,e,i){var r=t?oi(t)?[t>>16,t>>8&ne,t&ne]:0:zs.black,s,a,o,l,c,u,h,d,m,v;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),zs[t])r=zs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ne,r&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(r=v=t.match(hc),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=al(l+1/3,s,a),r[1]=al(l,s,a),r[2]=al(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(Af),i&&r.length<4&&(r[3]=1),r}else r=t.match(hc)||zs.transparent;r=r.map(Number)}return e&&!v&&(s=r[0]/ne,a=r[1]/ne,o=r[2]/ne,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Qf=function(t){var e=[],i=[],r=-1;return t.split(Li).forEach(function(s){var a=s.match(jr)||[];e.push.apply(e,a),i.push(r+=a.length+1)}),e.c=i,e},wh=function(t,e,i){var r="",s=(t+r).match(Li),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=Jf(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Qf(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Li,"1").split(jr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(Li),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Li=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in zs)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),qb=/hsl[a]?\(/,tm=function(t){var e=t.join(" "),i;if(Li.lastIndex=0,Li.test(e))return i=qb.test(e),t[1]=wh(t[1],i),t[0]=wh(t[0],i,Qf(t[1])),!0},Ks,hn=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,d,m,v=function _(p){var f=n()-r,y=p===!0,b,w,T,C;if((f>t||f<0)&&(i+=f-e),r+=f,T=r-i,b=T-a,(b>0||y)&&(C=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,a+=b+(b>=s?4:s-b),w=1),y||(l=c(_)),w)for(m=0;m<o.length;m++)o[m](T,d,C,p)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Lf&&(!dc&&Qc()&&(In=dc=window,tu=In.document||{},mn.gsap=sn,(In.gsapVersions||(In.gsapVersions=[])).push(sn.version),Df(mo||In.GreenSockGlobals||!In.gsap&&In||{}),Kf.forEach(Zf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ks=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ks=0,c=qs},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,y){var b=f?function(w,T,C,S){p(w,T,C,S),h.remove(b)}:p;return h.remove(p),o[y?"unshift":"push"](b),cs(),b},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),cs=function(){return!Ks&&hn.wake()},Wt={},Yb=/^[\d.\-M][\d.\-,\s]/,Kb=/["']/g,Zb=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(Kb,"").trim():+c,r=l.substr(o+1).trim();return e},Jb=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Qb=function(t){var e=(t+"").split("("),i=Wt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Zb(e[1])]:Jb(t).split(",").map(Ff)):Wt._CE&&Yb.test(t)?Wt._CE("",t):i},em=function(t){return function(e){return 1-t(1-e)}},nm=function n(t,e){for(var i=t._first,r;i;)i instanceof $e?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},ar=function(t,e){return t&&(_e(t)?t:Wt[t]||Qb(t))||e},xr=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},a;return tn(t,function(o){Wt[o]=mn[o]=s,Wt[a=o.toLowerCase()]=i;for(var l in s)Wt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[o+"."+l]=s[l]}),s},im=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ol=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/uc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Cb((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:im(o);return s=uc/s,l.config=function(c,u){return n(t,c,u)},l},ll=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:im(i);return r.config=function(s){return n(t,s)},r};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;xr(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;xr("Elastic",ol("in"),ol("out"),ol());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<r?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};xr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);xr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});xr("Circ",function(n){return-(Tf(1-n*n)-1)});xr("Sine",function(n){return n===1?1:-Tb(n*Sb)+1});xr("Back",ll("in"),ll("out"),ll());Wt.SteppedEase=Wt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,a=1-ie;return function(o){return((r*da(0,a,o)|0)+s)*i}}};as.ease=Wt["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return iu+=n+","+n+"Params,"});var rm=function(t,e){this.id=Mb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Uf,this.set=e?e.getSetter:lu},Zs=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ls(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),Ks||hn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ls(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ko(this,i),!s._dp||s.parent||Vf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ie||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Nf(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?os(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ie?0:this._rts,this.totalTime(da(-Math.abs(this._delay),this._tDur,s),r!==!1),Fo(this),Ob(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Un(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Qe(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Rb);var r=Ve;return Ve=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ve=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,xh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(yn(this,i),Qe(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Qe(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ie)},t.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this;return new Promise(function(s){var a=_e(i)?i:kf,o=function(){var c=r.then;r.then=null,_e(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){Vs(this)},n}();Cn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var $e=function(n){Mf(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Qe(i.sortChildren),he&&Un(i.parent||he,ei(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&zf(ei(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Hs(0,arguments,this),this},e.from=function(r,s,a){return Hs(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Hs(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Gs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ye(r,s,yn(this,a),1),this},e.call=function(r,s,a){return Un(this,ye.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ye(r,a,yn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Gs(a).immediateRender=Qe(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Gs(o).immediateRender=Qe(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Pe(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,m,v,_,p,f,y,b,w,T,C,S;if(this!==he&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,w=this._start,b=this._ts,f=!b,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=Pe(u%p),u===l?(_=this._repeat,d=c):(_=~~(u/p),_&&_===u/p&&(d=c,_--),d>c&&(d=c)),T=os(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),C&&_&1&&(d=c-d,S=1),_!==T&&!this._lock){var D=C&&T&1,U=D===(C&&_&1);if(_<T&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(S?0:Pe(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;nm(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=kb(this,Pe(o),Pe(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!_&&(dn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){y=0,v&&(u+=this._zTime=-ie);break}}m=v}else{m=this._last;for(var g=r<0?r:d;m;){if(v=m._prev,(m._act||g<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(g-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(g-m._start)*m._ts,s,a||Ve&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){y=0,v&&(u+=this._zTime=g?-ie:ie);break}}m=v}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-ie)._zTime=d>=o?1:-1,this._ts))return this._start=w,Fo(this),this.render(r,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(w===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(dn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(oi(s)||(s=yn(this,s,r)),!(r instanceof Zs)){if(ze(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Re(r))return this.addLabel(r,s);if(_e(r))r=ye.delayedCall(0,r);else return this}return this!==r?Un(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ye?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Re(r)?this.removeLabel(r):_e(r)?this.killTweensOf(r):(No(this,r),r===this._recent&&(this._recent=this._last),sr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=yn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=ye.delayedCall(0,s||qs,a);return o.data="isPause",this._hasPause=1,Un(this,o,yn(this,r))},e.removePause=function(r){var s=this._first;for(r=yn(this,r);s;)s._start===r&&s.data==="isPause"&&Ni(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=Mn(r),l=this._first,c=oi(s),u;l;)l instanceof ye?Lb(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=yn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,v=ye.to(a,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ie,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==p&&ls(v,p,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,h||[])}},s));return d?v.render(0):v},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,Cn({startAt:{time:yn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),yh(this,yn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),yh(this,yn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return sr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),sr(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Sn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Un(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ls(a,a===he&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(he._ts&&(Nf(he,go(r,he)),Of=hn.frame),hn.frame>=vh){vh+=pn.autoSleep||120;var s=he._first;if((!s||!s._ts)&&pn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},t}(Zs);Cn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var tx=function(t,e,i,r,s,a,o){var l=new en(this._pt,t,e,0,1,um,null,s),c=0,u=0,h,d,m,v,_,p,f,y;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ys(r)),a&&(y=[i,r],a(y,t,e),i=y[0],r=y[1]),d=i.match(rl)||[];h=rl.exec(r);)v=h[0],_=r.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),v!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:v.charAt(1)==="="?Zr(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},c=rl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Pf.test(r)||f)&&(l.e=0),this._pt=l,l},su=function(t,e,i,r,s,a,o,l,c,u){_e(r)&&(r=r(s||0,t,a));var h=t[e],d=i!=="get"?i:_e(h)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=_e(h)?c?sx:lm:ou,v;if(Re(r)&&(~r.indexOf("random(")&&(r=Ys(r)),r.charAt(1)==="="&&(v=Zr(d,r)+(Be(d)||0),(v||v===0)&&(r=v))),!u||d!==r||bc)return!isNaN(d*r)&&r!==""?(v=new en(this._pt,t,e,+d||0,r-(d||0),typeof h=="boolean"?ox:cm,0,m),c&&(v.fp=c),o&&v.modifier(o,this,t),this._pt=v):(!h&&!(e in t)&&eu(e,r),tx.call(this,t,e,d,r,m,l||pn.stringFilter,c))},ex=function(t,e,i,r,s){if(_e(t)&&(t=Ws(t,s,e,i,r)),!Hn(t)||t.style&&t.nodeType||ze(t)||Cf(t))return Re(t)?Ws(t,s,e,i,r):t;var a={},o;for(o in t)a[o]=Ws(t[o],s,e,i,r);return a},sm=function(t,e,i,r,s,a){var o,l,c,u;if(un[t]&&(o=new un[t]).init(s,o.rawVars?e[t]:ex(e[t],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new en(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==qr))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mi,bc,au=function n(t,e,i){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,m=r.autoRevert,v=t._dur,_=t._startAt,p=t._targets,f=t.parent,y=f&&f.data==="nested"?f.vars.targets:p,b=t._overwrite==="auto"&&!Zc,w=t.timeline,T,C,S,D,U,g,P,H,$,L,B,N,j;if(w&&(!d||!s)&&(s="none"),t._ease=ar(s,as.ease),t._yEase=h?em(ar(h===!0?s:h,as.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!w&&!!r.runBackwards,!w||d&&!r.stagger){if(H=p[0]?rr(p[0]).harness:0,N=H&&r[H.prop],T=vo(r,nu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&v?so:Pb),_._lazy=0),a){if(Ni(t._startAt=ye.set(p,Cn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Qe(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ve||!o&&!m)&&t._startAt.revert(so),o&&v&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&v&&!_){if(e&&(o=!1),S=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qe(l),immediateRender:o,stagger:0,parent:f},T),N&&(S[H.prop]=N),Ni(t._startAt=ye.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ve?t._startAt.revert(so):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=v&&Qe(l)||l&&!v,C=0;C<p.length;C++){if(U=p[C],P=U._gsap||ru(p)[C]._gsap,t._ptLookup[C]=L={},pc[P.id]&&Ri.length&&_o(),B=y===p?C:y.indexOf(U),H&&($=new H).init(U,N||T,t,B,y)!==!1&&(t._pt=D=new en(t._pt,U,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(X){L[X]=D}),$.priority&&(g=1)),!H||N)for(S in T)un[S]&&($=sm(S,T,t,B,U,y))?$.priority&&(g=1):L[S]=D=su.call(t,U,S,"get",T[S],B,y,0,r.stringFilter);t._op&&t._op[C]&&t.kill(U,t._op[C]),b&&t._pt&&(Mi=t,he.killTweensOf(U,L,t.globalTime(e)),j=!t.parent,Mi=0),t._pt&&l&&(pc[P.id]=1)}g&&hm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,d&&e<=0&&w.render(Sn,!0,!0)},nx=function(t,e,i,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,m;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(u=d[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return bc=1,t.vars[e]="+=0",au(t,o),bc=0,l?js(e+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=be(i)+Be(h.e)),h.b&&(h.b=u.s+Be(h.b))},ix=function(t,e){var i=t[0]?rr(t[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return e;s=pr({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},rx=function(t,e,i,r){var s=e.ease||r||"power1.inOut",a,o;if(ze(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ws=function(t,e,i,r,s){return _e(t)?t.call(e,i,r,s):Re(t)&&~t.indexOf("random(")?Ys(t):t},am=iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",om={};tn(am+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return om[n]=1});var ye=function(n){Mf(t,n);function t(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Gs(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,v=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,y=r.parent||he,b=(ze(i)||Cf(i)?oi(i[0]):"length"in r)?[i]:Mn(i),w,T,C,S,D,U,g,P;if(o._targets=b.length?ru(b):js("GSAP target "+i+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,v||d||Ra(c)||Ra(u)){if(r=o.vars,w=o.timeline=new $e({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:b}),w.kill(),w.parent=w._dp=ei(o),w._start=0,d||Ra(c)||Ra(u)){if(S=b.length,g=d&&Xf(d),Hn(d))for(D in d)~am.indexOf(D)&&(P||(P={}),P[D]=d[D]);for(T=0;T<S;T++)C=vo(r,om),C.stagger=0,f&&(C.yoyoEase=f),P&&pr(C,P),U=b[T],C.duration=+Ws(c,ei(o),T,U,b),C.delay=(+Ws(u,ei(o),T,U,b)||0)-o._delay,!d&&S===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),w.to(U,C,g?g(T,U,b):0),w._ease=Wt.none;w.duration()?c=u=0:o.timeline=0}else if(v){Gs(Cn(w.vars.defaults,{ease:"none"})),w._ease=ar(v.ease||r.ease||"none");var H=0,$,L,B;if(ze(v))v.forEach(function(N){return w.to(b,N,">")}),w.duration();else{C={};for(D in v)D==="ease"||D==="easeEach"||rx(D,v[D],C,v.easeEach);for(D in C)for($=C[D].sort(function(N,j){return N.t-j.t}),H=0,T=0;T<$.length;T++)L=$[T],B={ease:L.e,duration:(L.t-(T?$[T-1].t:0))/100*c},B[D]=L.v,w.to(b,B,H),H+=B.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return m===!0&&!Zc&&(Mi=ei(o),he.killTweensOf(b),Mi=0),Un(y,ei(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!v&&o._start===Pe(y._time)&&Qe(h)&&Ub(ei(o))&&y.data!=="nested")&&(o._tTime=-ie,o.render(Math.max(0,-u)||0)),p&&zf(ei(o),p),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ie&&!u?l:r<ie?0:r,d,m,v,_,p,f,y,b,w;if(!c)Fb(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=Pe(h%_),h===l?(v=this._repeat,d=c):(v=~~(h/_),v&&v===Pe(h/_)&&(d=c,v--),d>c&&(d=c)),f=this._yoyo&&v&1,f&&(w=this._yEase,d=c-d),p=os(this._tTime,_),d===o&&!a&&this._initted&&v===p)return this._tTime=h,this;v!==p&&(b&&this._yEase&&nm(b,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Pe(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(Gf(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(w||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!v&&(dn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;b&&b.render(r<0?r:b._dur*b._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&fc(this,r,s,a),dn(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&fc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ni(this,1),!s&&!(u&&!o)&&(h||o||f)&&(dn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){Ks||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||au(this,c),u=this._ease(c/this._dur),nx(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(ko(this,0),this.parent||Bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Mi&&Mi.vars.overwrite!==!0)._first||Vs(this),this.parent&&a!==this.timeline.totalDuration()&&ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Mn(r):o,c=this._ptLookup,u=this._pt,h,d,m,v,_,p,f;if((!s||s==="all")&&Ib(o,l))return s==="all"&&(this._pt=0),Vs(this);for(h=this._op=this._op||[],s!=="all"&&(Re(s)&&(_={},tn(s,function(y){return _[y]=1}),s=_),s=ix(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,v=d,m={}):(m=h[f]=h[f]||{},v=s);for(_ in v)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&No(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Vs(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Hs(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Hs(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return he.killTweensOf(r,s,a)},t}(Zs);Cn(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(n){ye[n]=function(){var t=new $e,e=_c.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var ou=function(t,e,i){return t[e]=i},lm=function(t,e,i){return t[e](i)},sx=function(t,e,i,r){return t[e](r.fp,i)},ax=function(t,e,i){return t.setAttribute(e,i)},lu=function(t,e){return _e(t[e])?lm:Jc(t[e])&&t.setAttribute?ax:ou},cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ox=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},um=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},cu=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},lx=function(t,e,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,i),s=a},cx=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?No(this,e,"_pt"):e.dep||(i=1),e=r;return!i},ux=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},hm=function(t){for(var e=t._pt,i,r,s,a;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=i}t._pt=s},en=function(){function n(e,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||cm,this.d=l||this,this.set=c||ou,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ux,this.m=i,this.mt=s,this.tween=r},n}();tn(iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return nu[n]=1});mn.TweenMax=mn.TweenLite=ye;mn.TimelineLite=mn.TimelineMax=$e;he=new $e({sortChildren:!1,defaults:as,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=tm;var or=[],oo={},hx=[],Eh=0,dx=0,cl=function(t){return(oo[t]||hx).map(function(e){return e()})},xc=function(){var t=Date.now(),e=[];t-Eh>2&&(cl("matchMediaInit"),or.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=In.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),cl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Eh=t,cl("matchMedia"))},dm=function(){function n(e,i){this.selector=i&&vc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){_e(i)&&(s=r,r=i,i=_e);var a=this,o=function(){var c=le,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=vc(s)),le=a,h=r.apply(a,arguments),_e(h)&&a._r.push(h),le=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===_e?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var r=le;le=null,i(this),le=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof ye&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ye)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=or.length;a--;)or[a].id===this.id&&or.splice(a,1)},t.revert=function(i){this.kill(i||{})},n}(),px=function(){function n(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Hn(i)||(i={matches:i});var a=new dm(0,s||this.scope),o=a.conditions={},l,c,u;le&&!a.selector&&(a.selector=le.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=In.matchMedia(i[c]),l&&(or.indexOf(a)<0&&or.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(xc):l.addEventListener("change",xc)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),bo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Zf(r)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,i,r){Re(t)&&(t=Mn(t)[0]);var s=rr(t||{}).get,a=i?kf:Ff;return i==="native"&&(i=""),t&&(e?a((un[e]&&un[e].get||s)(t,e,i,r)):function(o,l,c){return a((un[o]&&un[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=Mn(t),t.length>1){var r=t.map(function(u){return sn.quickSetter(u,e,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var a=un[e],o=rr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;qr._pt=0,h.init(t,i?u+i:u,qr,0,[t]),h.render(1,h),qr._pt&&cu(1,qr)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,e,i){var r,s=sn.to(t,pr((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ar(t.ease,as.ease)),gh(as,t||{})},config:function(t){return gh(pn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!un[o]&&!mn[o]&&js(e+" effect requires "+o+" plugin.")}),sl[e]=function(o,l,c){return i(Mn(o),Cn(l||{},s),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(sl[e](o,Hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=ar(e)},parseEase:function(t,e){return arguments.length?ar(t,e):Wt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new $e(t),r,s;for(i.smoothChildTiming=Qe(t.smoothChildTiming),he.remove(i),i._dp=0,i._time=i._tTime=he._time,r=he._first;r;)s=r._next,(e||!(!r._dur&&r instanceof ye&&r.vars.onComplete===r._targets[0]))&&Un(i,r,r._start-r._delay),r=s;return Un(he,i,0),i},context:function(t,e){return t?new dm(t,e):le},matchMedia:function(t){return new px(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||xc()},addEventListener:function(t,e){var i=oo[t]||(oo[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=oo[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Xb,wrapYoyo:$b,distribute:Xf,random:jf,snap:$f,normalize:Wb,getUnit:Be,clamp:Vb,splitColor:Jf,toArray:Mn,selector:vc,mapRange:Yf,pipe:Gb,unitize:Hb,interpolate:jb,shuffle:Wf},install:Df,effects:sl,ticker:hn,updateRoot:$e.updateRoot,plugins:un,globalTimeline:he,core:{PropTween:en,globals:If,Tween:ye,Timeline:$e,Animation:Zs,getCache:rr,_removeLinkedListItem:No,reverting:function(){return Ve},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return Zc=t}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return bo[n]=ye[n]});hn.add($e.updateRoot);qr=bo.to({},{duration:0});var fx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},mx=function(t,e){var i=t._targets,r,s,a;for(r in e)for(s=i.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=fx(a,r)),a&&a.modifier&&a.modifier(e[r],t,i[s],r))},ul=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Re(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}mx(o,s)}}}},sn=bo.registerPlugin({name:"attr",init:function(t,e,i,r,s){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)Ve?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ul("roundProps",gc),ul("modifiers"),ul("snap",$f))||bo;ye.version=$e.version=sn.version="3.12.5";Lf=1;Qc()&&cs();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sh,Ti,Jr,uu,nr,Mh,hu,_x=function(){return typeof window<"u"},li={},Ki=180/Math.PI,Qr=Math.PI/180,Mr=Math.atan2,Th=1e8,du=/([A-Z])/g,vx=/(left|right|width|margin|padding|x)/i,gx=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},pm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},fm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},wx=function(t,e,i){return t.style[e]=i},Ex=function(t,e,i){return t.style.setProperty(e,i)},Sx=function(t,e,i){return t._gsap[e]=i},Mx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Tx=function(t,e,i,r,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Cx=function(t,e,i,r,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},de="transform",nn=de+"Origin",Ax=function n(t,e){var i=this,r=this.target,s=r.style,a=r._gsap;if(t in li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=kn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=ni(r,o)}):this.tfm[t]=a.x?a[t]:ni(r,t),t===nn&&(this.tfm.zOrigin=a.zOrigin);else return kn.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(de)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=de}(s||e)&&this.props.push(t,e,s[t])},mm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Px=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(du,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hu(),(!s||!s.isStart)&&!i[de]&&(mm(i),r.zOrigin&&i[nn]&&(i[nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_m=function(t,e){var i={target:t,props:[],revert:Px,save:Ax};return t._gsap||sn.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},vm,wc=function(t,e){var i=Ti.createElementNS?Ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ti.createElement(t);return i&&i.style?i:Ti.createElement(t)},zn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(du,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,us(e)||e,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),us=function(t,e,i){var r=e||nr,s=r.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ch[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ch[a]:"")+t},Ec=function(){_x()&&window.document&&(Sh=window,Ti=Sh.document,Jr=Ti.documentElement,nr=wc("div")||{style:{}},wc("div"),de=us(de),nn=de+"Origin",nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vm=!!us("perspective"),hu=sn.core.reverting,uu=1)},hl=function n(t){var e=wc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Jr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Jr.removeChild(e),this.style.cssText=s,a},Ah=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},gm=function(t){var e;try{e=t.getBBox()}catch{e=hl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===hl||(e=hl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Ah(t,["x","cx","x1"])||0,y:+Ah(t,["y","cy","y1"])||0,width:0,height:0}:e},bm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gm(t))},fr=function(t,e){if(e){var i=t.style,r;e in li&&e!==nn&&(e=de),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(du,"-$1").toLowerCase())):i.removeAttribute(e)}},Ci=function(t,e,i,r,s,a){var o=new en(t._pt,e,i,0,1,a?fm:pm);return t._pt=o,o.b=r,o.e=s,t._props.push(i),o},Ph={deg:1,rad:1,turn:1},Rx={grid:1,flex:1},Fi=function n(t,e,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=nr.style,l=vx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",m=r==="%",v,_,p,f;if(r===a||!s||Ph[r]||Ph[a])return s;if(a!=="px"&&!d&&(s=n(t,e,i,"px")),f=t.getCTM&&bm(t),(m||a==="%")&&(li[e]||~e.indexOf("adius")))return v=f?t.getBBox()[l?"width":"height"]:t[u],be(m?s/v*h:s/100*v);if(o[l?"width":"height"]=h+(d?a:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ti||!_.appendChild)&&(_=Ti.body),p=_._gsap,p&&m&&p.width&&l&&p.time===hn.time&&!p.uncache)return be(s/p.width*h);if(m&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,v=t[u],y?t.style[e]=y:fr(t,e)}else(m||a==="%")&&!Rx[zn(_,"display")]&&(o.position=zn(t,"position")),_===t&&(o.position="static"),_.appendChild(nr),v=nr[u],_.removeChild(nr),o.position="absolute";return l&&m&&(p=rr(_),p.time=hn.time,p.width=_[u]),be(d?v*s/h:v&&s?h/v*s:0)},ni=function(t,e,i,r){var s;return uu||Ec(),e in kn&&e!=="transform"&&(e=kn[e],~e.indexOf(",")&&(e=e.split(",")[0])),li[e]&&e!=="transform"?(s=Qs(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:yo(zn(t,nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xo[e]&&xo[e](t,e,i)||zn(t,e)||Uf(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fi(t,e,s,i)+i:s},Lx=function(t,e,i,r){if(!i||i==="none"){var s=us(e,t,1),a=s&&zn(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=zn(t,"borderTopColor"))}var o=new en(this._pt,t.style,e,0,1,um),l=0,c=0,u,h,d,m,v,_,p,f,y,b,w,T;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=zn(t,e)||r,_?t.style[e]=_:fr(t,e)),u=[i,r],tm(u),i=u[0],r=u[1],d=i.match(jr)||[],T=r.match(jr)||[],T.length){for(;h=jr.exec(r);)p=h[0],y=r.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),p!==(_=d[c++]||"")&&(m=parseFloat(_)||0,w=_.substr((m+"").length),p.charAt(1)==="="&&(p=Zr(m,p)+w),f=parseFloat(p),b=p.substr((f+"").length),l=jr.lastIndex-b.length,b||(b=b||pn.units[e]||w,l===r.length&&(r+=b,o.e+=b)),w!==b&&(m=Fi(t,e,_,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:f-m,m:v&&v<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?fm:pm;return Pf.test(r)&&(o.e=0),this._pt=o,o},Rh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dx=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Rh[i]||i,e[1]=Rh[r]||r,e.join(" ")},Ix=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],li[o]&&(l=1,o=o==="transformOrigin"?nn:de),fr(i,o);l&&(fr(i,de),a&&(a.svg&&i.removeAttribute("transform"),Qs(i,1),a.uncache=1,mm(r)))}},xo={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var a=t._pt=new en(t._pt,e,i,0,0,Ix);return a.u=r,a.pr=-10,a.tween=s,t._props.push(i),1}}},Js=[1,0,0,1,0,0],xm={},ym=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lh=function(t){var e=zn(t,de);return ym(e)?Js:e.substr(7).match(Af).map(be)},pu=function(t,e){var i=t._gsap||rr(t),r=t.style,s=Lh(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Js:s):(s===Js&&!t.offsetParent&&t!==Jr&&!i.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Jr.appendChild(t)),s=Lh(t),l?r.display=l:fr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Jr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Sc=function(t,e,i,r,s,a){var o=t._gsap,l=s||pu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],v=l[1],_=l[2],p=l[3],f=l[4],y=l[5],b=e.split(" "),w=parseFloat(b[0])||0,T=parseFloat(b[1])||0,C,S,D,U;i?l!==Js&&(S=m*p-v*_)&&(D=w*(p/S)+T*(-_/S)+(_*y-p*f)/S,U=w*(-v/S)+T*(m/S)-(m*y-v*f)/S,w=D,T=U):(C=gm(t),w=C.x+(~b[0].indexOf("%")?w/100*C.width:w),T=C.y+(~(b[1]||b[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&o.smooth?(f=w-c,y=T-u,o.xOffset=h+(f*m+y*_)-f,o.yOffset=d+(f*v+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=T,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[nn]="0px 0px",a&&(Ci(a,o,"xOrigin",c,w),Ci(a,o,"yOrigin",u,T),Ci(a,o,"xOffset",h,o.xOffset),Ci(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",w+" "+T)},Qs=function(t,e){var i=t._gsap||new rm(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=zn(t,nn)||"0",u,h,d,m,v,_,p,f,y,b,w,T,C,S,D,U,g,P,H,$,L,B,N,j,X,q,Y,tt,st,St,G,K;return u=h=d=_=p=f=y=b=w=0,m=v=1,i.svg=!!(t.getCTM&&bm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[de]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[de]!=="none"?l[de]:"")),r.scale=r.rotate=r.translate="none"),S=pu(t,i.svg),i.svg&&(i.uncache?(X=t.getBBox(),c=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Sc(t,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,S)),T=i.xOrigin||0,C=i.yOrigin||0,S!==Js&&(P=S[0],H=S[1],$=S[2],L=S[3],u=B=S[4],h=N=S[5],S.length===6?(m=Math.sqrt(P*P+H*H),v=Math.sqrt(L*L+$*$),_=P||H?Mr(H,P)*Ki:0,y=$||L?Mr($,L)*Ki+_:0,y&&(v*=Math.abs(Math.cos(y*Qr))),i.svg&&(u-=T-(T*P+C*$),h-=C-(T*H+C*L))):(K=S[6],St=S[7],Y=S[8],tt=S[9],st=S[10],G=S[11],u=S[12],h=S[13],d=S[14],D=Mr(K,st),p=D*Ki,D&&(U=Math.cos(-D),g=Math.sin(-D),j=B*U+Y*g,X=N*U+tt*g,q=K*U+st*g,Y=B*-g+Y*U,tt=N*-g+tt*U,st=K*-g+st*U,G=St*-g+G*U,B=j,N=X,K=q),D=Mr(-$,st),f=D*Ki,D&&(U=Math.cos(-D),g=Math.sin(-D),j=P*U-Y*g,X=H*U-tt*g,q=$*U-st*g,G=L*g+G*U,P=j,H=X,$=q),D=Mr(H,P),_=D*Ki,D&&(U=Math.cos(D),g=Math.sin(D),j=P*U+H*g,X=B*U+N*g,H=H*U-P*g,N=N*U-B*g,P=j,B=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=be(Math.sqrt(P*P+H*H+$*$)),v=be(Math.sqrt(N*N+K*K)),D=Mr(B,N),y=Math.abs(D)>2e-4?D*Ki:0,w=G?1/(G<0?-G:G):0),i.svg&&(j=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ym(zn(t,de)),j&&t.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=be(m),i.scaleY=be(v),i.rotation=be(_)+o,i.rotationX=be(p)+o,i.rotationY=be(f)+o,i.skewX=y+o,i.skewY=b+o,i.transformPerspective=w+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[nn]=yo(c)),i.xOffset=i.yOffset=0,i.force3D=pn.force3D,i.renderTransform=i.svg?Ux:vm?wm:Ox,i.uncache=0,i},yo=function(t){return(t=t.split(" "))[0]+" "+t[1]},dl=function(t,e,i){var r=Be(e);return be(parseFloat(e)+parseFloat(Fi(t,"x",i+"px",r)))+r},Ox=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,wm(t,e)},Hi="0deg",Rs="0px",Wi=") ",wm=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,p=i.transformPerspective,f=i.force3D,y=i.target,b=i.zOrigin,w="",T=f==="auto"&&t&&t!==1||f===!0;if(b&&(h!==Hi||u!==Hi)){var C=parseFloat(u)*Qr,S=Math.sin(C),D=Math.cos(C),U;C=parseFloat(h)*Qr,U=Math.cos(C),a=dl(y,a,S*U*-b),o=dl(y,o,-Math.sin(C)*-b),l=dl(y,l,D*U*-b+b)}p!==Rs&&(w+="perspective("+p+Wi),(r||s)&&(w+="translate("+r+"%, "+s+"%) "),(T||a!==Rs||o!==Rs||l!==Rs)&&(w+=l!==Rs||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==Hi&&(w+="rotate("+c+Wi),u!==Hi&&(w+="rotateY("+u+Wi),h!==Hi&&(w+="rotateX("+h+Wi),(d!==Hi||m!==Hi)&&(w+="skew("+d+", "+m+Wi),(v!==1||_!==1)&&(w+="scale("+v+", "+_+Wi),y.style[de]=w||"translate(0, 0)"},Ux=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,m=i.target,v=i.xOrigin,_=i.yOrigin,p=i.xOffset,f=i.yOffset,y=i.forceCSS,b=parseFloat(a),w=parseFloat(o),T,C,S,D,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qr,c*=Qr,T=Math.cos(l)*h,C=Math.sin(l)*h,S=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Qr,U=Math.tan(c-u),U=Math.sqrt(1+U*U),S*=U,D*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),T*=U,C*=U)),T=be(T),C=be(C),S=be(S),D=be(D)):(T=h,D=d,C=S=0),(b&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(b=Fi(m,"x",a,"px"),w=Fi(m,"y",o,"px")),(v||_||p||f)&&(b=be(b+v-(v*T+_*S)+p),w=be(w+_-(v*C+_*D)+f)),(r||s)&&(U=m.getBBox(),b=be(b+r/100*U.width),w=be(w+s/100*U.height)),U="matrix("+T+","+C+","+S+","+D+","+b+","+w+")",m.setAttribute("transform",U),y&&(m.style[de]=U)},Nx=function(t,e,i,r,s){var a=360,o=Re(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ki:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Th)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Th)%a-~~(c/a)*a)),t._pt=d=new en(t._pt,e,i,r,c,bx),d.e=u,d.u="deg",t._props.push(i),d},Dh=function(t,e){for(var i in e)t[i]=e[i];return t},Fx=function(t,e,i){var r=Dh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,d,m,v;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[de]=e,o=Qs(i,1),fr(i,de),i.setAttribute("transform",c)):(c=getComputedStyle(i)[de],a[de]=e,o=Qs(i,1),a[de]=c);for(l in li)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Be(c),v=Be(u),h=m!==v?Fi(i,l,c,v):parseFloat(c),d=parseFloat(u),t._pt=new en(t._pt,o,l,h,d-h,yc),t._pt.u=v||0,t._props.push(l));Dh(o,r)};tn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",a=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(o){return t<2?n+o:"border"+o+n});xo[t>1?"border"+n:n]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(v){return ni(o,v,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(v,_){return m[v]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var Em={name:"css",register:Ec,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var a=this._props,o=t.style,l=i.vars.startAt,c,u,h,d,m,v,_,p,f,y,b,w,T,C,S,D;uu||Ec(),this.styles=this.styles||_m(t),D=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(un[_]&&sm(_,e,i,r,t,s)))){if(m=typeof u,v=xo[_],m==="function"&&(u=u.call(i,r,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ys(u)),v)v(this,t,_,u,i)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(p=Be(c),f=Be(u)),f?p!==f&&(c=Fi(t,_,c,f)+f):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Re(c)&&~c.indexOf("random(")&&(c=Ys(c)),Be(c+"")||c==="auto"||(c+=pn.units[_]||Be(ni(t,_))||""),(c+"").charAt(1)==="="&&(c=ni(t,_))):c=ni(t,_),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in kn&&(_==="autoAlpha"&&(d===1&&ni(t,"visibility")==="hidden"&&h&&(d=0),D.push("visibility",0,o.visibility),Ci(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in li,b){if(this.styles.save(_),w||(T=t._gsap,T.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),C=e.smoothOrigin!==!1&&T.smooth,w=this._pt=new en(this._pt,o,de,0,1,T.renderTransform,T,0,-1),w.dep=1),_==="scale")this._pt=new en(this._pt,T,"scaleY",T.scaleY,(y?Zr(T.scaleY,y+h):h)-T.scaleY||0,yc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(nn,0,o[nn]),u=Dx(u),T.svg?Sc(t,u,0,C,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==T.zOrigin&&Ci(this,T,"zOrigin",T.zOrigin,f),Ci(this,o,_,yo(c),yo(u)));continue}else if(_==="svgOrigin"){Sc(t,u,1,C,0,this);continue}else if(_ in xm){Nx(this,T,_,d,y?Zr(d,y+u):u);continue}else if(_==="smoothOrigin"){Ci(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){Fx(this,u,t);continue}}else _ in o||(_=us(_)||_);if(b||(h||h===0)&&(d||d===0)&&!gx.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),f=Be(u)||(_ in pn.units?pn.units[_]:p),p!==f&&(d=Fi(t,_,c,f)),this._pt=new en(this._pt,b?T:o,_,d,(y?Zr(d,y+h):h)-d,!b&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?yx:yc),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=xx);else if(_ in o)Lx.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){eu(_,u);continue}b||(_ in o?D.push(_,0,o[_]):D.push(_,1,c||t[_])),a.push(_)}}S&&hm(this)},render:function(t,e){if(e.tween._time||!hu())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ni,aliases:kn,getSetter:function(t,e,i){var r=kn[e];return r&&r.indexOf(",")<0&&(e=r),e in li&&e!==nn&&(t._gsap.x||ni(t,"x"))?i&&Mh===i?e==="scale"?Mx:Sx:(Mh=i||{})&&(e==="scale"?Tx:Cx):t.style&&!Jc(t.style[e])?wx:~e.indexOf("-")?Ex:lu(t,e)},core:{_removeProperty:fr,_getMatrix:pu}};sn.utils.checkPrefix=us;sn.core.getStyleSaver=_m;(function(n,t,e,i){var r=tn(n+","+t+","+e,function(s){li[s]=1});tn(t,function(s){pn.units[s]="deg",xm[s]=1}),kn[r[13]]=n+","+t,tn(i,function(s){var a=s.split(":");kn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){pn.units[n]="px"});sn.registerPlugin(Em);var ta=sn.registerPlugin(Em)||sn;ta.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="161",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kx=0,Ih=1,Bx=2,Sm=1,Vx=2,ti=3,ki=0,rn=1,Nn=2,Di=0,ts=1,Oh=2,Uh=3,Nh=4,zx=5,tr=100,Gx=101,Hx=102,Fh=103,kh=104,Wx=200,Xx=201,$x=202,jx=203,Mc=204,Tc=205,qx=206,Yx=207,Kx=208,Zx=209,Jx=210,Qx=211,ty=212,ey=213,ny=214,iy=0,ry=1,sy=2,wo=3,ay=4,oy=5,ly=6,cy=7,Mm=0,uy=1,hy=2,Ii=0,dy=1,py=2,fy=3,my=4,_y=5,vy=6,Tm=300,hs=301,ds=302,Cc=303,Ac=304,Bo=306,Pc=1e3,Ln=1001,Rc=1002,Xe=1003,Bh=1004,Ls=1005,Ze=1006,pl=1007,ir=1008,Oi=1009,gy=1010,by=1011,mu=1012,Cm=1013,Ai=1014,ii=1015,ea=1016,Am=1017,Pm=1018,lr=1020,xy=1021,Dn=1023,yy=1024,wy=1025,cr=1026,ps=1027,Ey=1028,Rm=1029,Sy=1030,Lm=1031,Dm=1033,fl=33776,ml=33777,_l=33778,vl=33779,Vh=35840,zh=35841,Gh=35842,Hh=35843,Im=36196,Wh=37492,Xh=37496,$h=37808,jh=37809,qh=37810,Yh=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,td=37816,ed=37817,nd=37818,id=37819,rd=37820,sd=37821,gl=36492,ad=36494,od=36495,My=36283,ld=36284,cd=36285,ud=36286,Om=3e3,ur=3001,Ty=3200,Cy=3201,Ay=0,Py=1,En="",De="srgb",ci="srgb-linear",_u="display-p3",Vo="display-p3-linear",Eo="linear",ae="srgb",So="rec709",Mo="p3",Ar=7680,hd=519,Ry=512,Ly=513,Dy=514,Um=515,Iy=516,Oy=517,Uy=518,Ny=519,dd=35044,pd="300 es",Lc=1035,ri=2e3,To=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const Xs=Math.PI/180,na=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function ke(n,t,e){return Math.max(t,Math.min(e,n))}function vu(n,t){return(n%t+t)%t}function Fy(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ky(n,t,e){return n!==t?(e-n)/(t-n):0}function $s(n,t,e){return(1-e)*n+e*t}function By(n,t,e,i){return $s(n,t,1-Math.exp(-e*i))}function Vy(n,t=1){return t-Math.abs(vu(n,t*2)-t)}function zy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Gy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Wy(n,t){return n+Math.random()*(t-n)}function Xy(n){return n*(.5-Math.random())}function $y(n){n!==void 0&&(fd=n);let t=fd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jy(n){return n*Xs}function qy(n){return n*na}function Dc(n){return(n&n-1)===0&&n!==0}function Yy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Co(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ky(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),h=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),v=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zy={DEG2RAD:Xs,RAD2DEG:na,generateUUID:_s,clamp:ke,euclideanModulo:vu,mapLinear:Fy,inverseLerp:ky,lerp:$s,damp:By,pingpong:Vy,smoothstep:zy,smootherstep:Gy,randInt:Hy,randFloat:Wy,randFloatSpread:Xy,seededRandom:$y,degToRad:jy,radToDeg:qy,isPowerOfTwo:Dc,ceilPowerOfTwo:Yy,floorPowerOfTwo:Co,setQuaternionFromProperEuler:Ky,normalize:He,denormalize:$r};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,r,s,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],f=r[6],y=r[1],b=r[4],w=r[7],T=r[2],C=r[5],S=r[8];return s[0]=a*_+o*y+l*T,s[3]=a*p+o*b+l*C,s[6]=a*f+o*w+l*S,s[1]=c*_+u*y+h*T,s[4]=c*p+u*b+h*C,s[7]=c*f+u*w+h*S,s[2]=d*_+m*y+v*T,s[5]=d*p+m*b+v*C,s[8]=d*f+m*w+v*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=e*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(bl.makeScale(t,e)),this}rotate(t){return this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new Gt;function Nm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jy(){const n=ia("canvas");return n.style.display="block",n}const md={};function es(n){n in md||(md[n]=!0,console.warn(n))}const _d=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vd=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[ci]:{transfer:Eo,primaries:So,toReference:n=>n,fromReference:n=>n},[De]:{transfer:ae,primaries:So,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vo]:{transfer:Eo,primaries:Mo,toReference:n=>n.applyMatrix3(vd),fromReference:n=>n.applyMatrix3(_d)},[_u]:{transfer:ae,primaries:Mo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(vd),fromReference:n=>n.applyMatrix3(_d).convertLinearToSRGB()}},Qy=new Set([ci,Vo]),Jt={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=La[t].toReference,r=La[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return La[n].primaries},getTransfer:function(n){return n===En?Eo:La[n].transfer}};function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pr;class Fm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pr===void 0&&(Pr=ia("canvas")),Pr.width=t.width,Pr.height=t.height;const i=Pr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Pr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ns(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ns(e[i]/255)*255):e[i]=ns(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tw=0;class km{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yl(r[a].image)):s.push(yl(r[a]))}else s=yl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ew=0;class je extends yr{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=Ln,r=Ln,s=Ze,a=ir,o=Dn,l=Oi,c=je.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=_s(),this.name="",this.source=new km(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ur?De:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pc:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pc:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?ur:Om}set encoding(t){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ur?De:En}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Tm;je.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,r=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,w=(m+1)/2,T=(f+1)/2,C=(u+d)/4,S=(h+_)/4,D=(v+p)/4;return b>w&&b>T?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=S/i):w>T?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=S/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nw extends yr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ur?De:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new je(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new km(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends nw{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bm extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iw extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==v){let p=1-o;const f=l*d+c*m+u*v+h*_,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const T=Math.sqrt(b),C=Math.atan2(T,f*y);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const w=o*y;if(l=l*p+d*w,c=c*p+m*w,u=u*p+v*w,h=h*p+_*w,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*h+l*m-c*d,t[e+1]=l*v+u*d+c*h-o*m,t[e+2]=c*v+u*m+o*d-l*h,t[e+3]=u*v-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"YZX":this._x=d*u*h+c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h-d*m*v;break;case"XZY":this._x=d*u*h-c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new F,gd=new _r;class pa{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Ia.subVectors(this.max,Ds),Rr.subVectors(t.a,Ds),Lr.subVectors(t.b,Ds),Dr.subVectors(t.c,Ds),mi.subVectors(Lr,Rr),_i.subVectors(Dr,Lr),Xi.subVectors(Rr,Dr);let e=[0,-mi.z,mi.y,0,-_i.z,_i.y,0,-Xi.z,Xi.y,mi.z,0,-mi.x,_i.z,0,-_i.x,Xi.z,0,-Xi.x,-mi.y,mi.x,0,-_i.y,_i.x,0,-Xi.y,Xi.x,0];return!El(e,Rr,Lr,Dr,Ia)||(e=[1,0,0,0,1,0,0,0,1],!El(e,Rr,Lr,Dr,Ia))?!1:(Oa.crossVectors(mi,_i),e=[Oa.x,Oa.y,Oa.z],El(e,Rr,Lr,Dr,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new F,new F,new F,new F,new F,new F,new F,new F],An=new F,Da=new pa,Rr=new F,Lr=new F,Dr=new F,mi=new F,_i=new F,Xi=new F,Ds=new F,Ia=new F,Oa=new F,$i=new F;function El(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$i.fromArray(n,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rw=new pa,Is=new F,Sl=new F;class gu{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rw.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Sl)),this.expandByPoint(Is.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new F,Ml=new F,Ua=new F,vi=new F,Tl=new F,Na=new F,Cl=new F;class Vm{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ml.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ml);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ua),o=vi.dot(this.direction),l=-vi.dot(Ua),c=vi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,v;if(u>0)if(h=a*l-o,d=a*o-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ml).addScaledVector(Ua,d),m}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,i,r,s){Tl.subVectors(e,t),Na.subVectors(i,t),Cl.crossVectors(Tl,Na);let a=this.direction.dot(Cl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,t);const l=o*this.direction.dot(Na.crossVectors(vi,Na));if(l<0)return null;const c=o*this.direction.dot(Tl.cross(vi));if(c<0||l+c>a)return null;const u=-o*vi.dot(Cl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(t,e,i,r,s,a,o,l,c,u,h,d,m,v,_,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,d,m,v,_,p)}set(t,e,i,r,s,a,o,l,c,u,h,d,m,v,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ir.setFromMatrixColumn(t,0).length(),s=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d+_*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=v*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+v,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sw,t,aw)}lookAt(t,e,i){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(i,ln),gi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(i,ln)),gi.normalize(),Fa.crossVectors(ln,gi),r[0]=gi.x,r[4]=Fa.x,r[8]=ln.x,r[1]=gi.y,r[5]=Fa.y,r[9]=ln.y,r[2]=gi.z,r[6]=Fa.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],f=i[14],y=i[3],b=i[7],w=i[11],T=i[15],C=r[0],S=r[4],D=r[8],U=r[12],g=r[1],P=r[5],H=r[9],$=r[13],L=r[2],B=r[6],N=r[10],j=r[14],X=r[3],q=r[7],Y=r[11],tt=r[15];return s[0]=a*C+o*g+l*L+c*X,s[4]=a*S+o*P+l*B+c*q,s[8]=a*D+o*H+l*N+c*Y,s[12]=a*U+o*$+l*j+c*tt,s[1]=u*C+h*g+d*L+m*X,s[5]=u*S+h*P+d*B+m*q,s[9]=u*D+h*H+d*N+m*Y,s[13]=u*U+h*$+d*j+m*tt,s[2]=v*C+_*g+p*L+f*X,s[6]=v*S+_*P+p*B+f*q,s[10]=v*D+_*H+p*N+f*Y,s[14]=v*U+_*$+p*j+f*tt,s[3]=y*C+b*g+w*L+T*X,s[7]=y*S+b*P+w*B+T*q,s[11]=y*D+b*H+w*N+T*Y,s[15]=y*U+b*$+w*j+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],v=t[3],_=t[7],p=t[11],f=t[15];return v*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-e*l*h+e*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],v=t[12],_=t[13],p=t[14],f=t[15],y=h*p*c-_*d*c+_*l*m-o*p*m-h*l*f+o*d*f,b=v*d*c-u*p*c-v*l*m+a*p*m+u*l*f-a*d*f,w=u*_*c-v*h*c+v*o*m-a*_*m-u*o*f+a*h*f,T=v*h*l-u*_*l-v*o*d+a*_*d+u*o*p-a*h*p,C=e*y+i*b+r*w+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return t[0]=y*S,t[1]=(_*d*s-h*p*s-_*r*m+i*p*m+h*r*f-i*d*f)*S,t[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*f+i*l*f)*S,t[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*S,t[4]=b*S,t[5]=(u*p*s-v*d*s+v*r*m-e*p*m-u*r*f+e*d*f)*S,t[6]=(v*l*s-a*p*s-v*r*c+e*p*c+a*r*f-e*l*f)*S,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*S,t[8]=w*S,t[9]=(v*h*s-u*_*s-v*i*m+e*_*m+u*i*f-e*h*f)*S,t[10]=(a*_*s-v*o*s+v*i*c-e*_*c-a*i*f+e*o*f)*S,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*S,t[12]=T*S,t[13]=(u*_*r-v*h*r+v*i*d-e*_*d-u*i*p+e*h*p)*S,t[14]=(v*o*r-a*_*r-v*i*l+e*_*l+a*i*p-e*o*p)*S,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*d+e*o*d)*S,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,v=s*h,_=a*u,p=a*h,f=o*h,y=l*c,b=l*u,w=l*h,T=i.x,C=i.y,S=i.z;return r[0]=(1-(_+f))*T,r[1]=(m+w)*T,r[2]=(v-b)*T,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(d+f))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(v+b)*S,r[9]=(p-y)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Pn.copy(this);const c=1/s,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=ri){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let m,v;if(o===ri)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===To)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=ri){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),d=(e+t)*c,m=(i+r)*u;let v,_;if(o===ri)v=(a+s)*h,_=-2*h;else if(o===To)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ir=new F,Pn=new Oe,sw=new F(0,0,0),aw=new F(1,1,1),gi=new F,Fa=new F,ln=new F,bd=new Oe,xd=new _r;class zo{constructor(t=0,e=0,i=0,r=zo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xd.setFromEuler(this),this.setFromQuaternion(xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zo.DEFAULT_ORDER="XYZ";class zm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ow=0;const yd=new F,Or=new _r,Kn=new Oe,ka=new F,Os=new F,lw=new F,cw=new _r,wd=new F(1,0,0),Ed=new F(0,1,0),Sd=new F(0,0,1),uw={type:"added"},hw={type:"removed"};class fn extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new F,e=new zo,i=new _r,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Gt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Ed,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Ed,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ka.copy(t):ka.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Os,ka,this.up):Kn.lookAt(ka,Os,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(Kn),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(uw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hw)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,lw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,cw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new F(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new F,Zn=new F,Al=new F,Jn=new F,Ur=new F,Nr=new F,Md=new F,Pl=new F,Rl=new F,Ll=new F;class Fn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Rn.subVectors(t,e),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Rn.subVectors(r,e),Zn.subVectors(i,e),Al.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(Zn),l=Rn.dot(Al),c=Zn.dot(Zn),u=Zn.dot(Al),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static isFrontFacing(t,e,i,r){return Rn.subVectors(i,e),Zn.subVectors(t,e),Rn.cross(Zn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Fn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ur.subVectors(r,i),Nr.subVectors(s,i),Pl.subVectors(t,i);const l=Ur.dot(Pl),c=Nr.dot(Pl);if(l<=0&&c<=0)return e.copy(i);Rl.subVectors(t,r);const u=Ur.dot(Rl),h=Nr.dot(Rl);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ur,a);Ll.subVectors(t,s);const m=Ur.dot(Ll),v=Nr.dot(Ll);if(v>=0&&m<=v)return e.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(Nr,o);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return Md.subVectors(s,r),o=(h-u)/(h-u+(m-v)),e.copy(r).addScaledVector(Md,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(Ur,a).addScaledVector(Nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=vu(t,1),e=ke(e,0,1),i=ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Dl(a,s,t+1/3),this.g=Dl(a,s,t),this.b=Dl(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Gm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}copyLinearToSRGB(t){return this.r=xl(t.r),this.g=xl(t.g),this.b=xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Jt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(ke(Fe.r*255,0,255))*65536+Math.round(ke(Fe.g*255,0,255))*256+Math.round(ke(Fe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=De){Jt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ba);const i=$s(bi.h,Ba.h,e),r=$s(bi.s,Ba.s,e),s=$s(bi.l,Ba.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Qt;Qt.NAMES=Gm;let dw=0;class Go extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=ts,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Tc,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mc&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hm extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new F,Va=new Nt;class Gn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$r(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dd&&(t.usage=this.usage),t}}class Wm extends Gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Xm extends Gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class hr extends Gn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pw=0;const bn=new Oe,Il=new fn,Fr=new F,cn=new pa,Us=new pa,Ae=new F;class wr extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nm(t)?Xm:Wm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Gt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(cn.min,Us.min),cn.expandByPoint(Ae),Ae.addVectors(cn.max,Us.max),cn.expandByPoint(Ae)):(cn.expandByPoint(Us.min),cn.expandByPoint(Us.max))}cn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ae.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),Ae.add(Fr)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let g=0;g<o;g++)c[g]=new F,u[g]=new F;const h=new F,d=new F,m=new F,v=new Nt,_=new Nt,p=new Nt,f=new F,y=new F;function b(g,P,H){h.fromArray(r,g*3),d.fromArray(r,P*3),m.fromArray(r,H*3),v.fromArray(a,g*2),_.fromArray(a,P*2),p.fromArray(a,H*2),d.sub(h),m.sub(h),_.sub(v),p.sub(v);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar($),c[g].add(f),c[P].add(f),c[H].add(f),u[g].add(y),u[P].add(y),u[H].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let g=0,P=w.length;g<P;++g){const H=w[g],$=H.start,L=H.count;for(let B=$,N=$+L;B<N;B+=3)b(i[B+0],i[B+1],i[B+2])}const T=new F,C=new F,S=new F,D=new F;function U(g){S.fromArray(s,g*3),D.copy(S);const P=c[g];T.copy(P),T.sub(S.multiplyScalar(S.dot(P))).normalize(),C.crossVectors(D,P);const $=C.dot(u[g])<0?-1:1;l[g*4]=T.x,l[g*4+1]=T.y,l[g*4+2]=T.z,l[g*4+3]=$}for(let g=0,P=w.length;g<P;++g){const H=w[g],$=H.start,L=H.count;for(let B=$,N=$+L;B<N;B+=3)U(i[B+0]),U(i[B+1]),U(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)d[v++]=c[m++]}return new Gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new Oe,ji=new Vm,za=new gu,Cd=new F,kr=new F,Br=new F,Vr=new F,Ol=new F,Ga=new F,Ha=new Nt,Wa=new Nt,Xa=new Nt,Ad=new F,Pd=new F,Rd=new F,$a=new F,ja=new F;class Bn extends fn{constructor(t=new wr,e=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ol.fromBufferAttribute(h,t),a?Ga.addScaledVector(Ol,u):Ga.addScaledVector(Ol.sub(e),u))}e.add(Ga)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),ji.copy(t.ray).recast(t.near),!(za.containsPoint(ji.origin)===!1&&(ji.intersectSphere(za,Cd)===null||ji.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Td.copy(s).invert(),ji.copy(t.ray).applyMatrix4(Td),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=b;w<T;w+=3){const C=o.getX(w),S=o.getX(w+1),D=o.getX(w+2);r=qa(this,f,t,i,c,u,h,C,S,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const y=o.getX(p),b=o.getX(p+1),w=o.getX(p+2);r=qa(this,a,t,i,c,u,h,y,b,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=b;w<T;w+=3){const C=w,S=w+1,D=w+2;r=qa(this,f,t,i,c,u,h,C,S,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const y=p,b=p+1,w=p+2;r=qa(this,a,t,i,c,u,h,y,b,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function fw(n,t,e,i,r,s,a,o){let l;if(t.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===ki,o),l===null)return null;ja.copy(o),ja.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:n}}function qa(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,kr),n.getVertexPosition(l,Br),n.getVertexPosition(c,Vr);const u=fw(n,t,e,i,kr,Br,Vr,$a);if(u){r&&(Ha.fromBufferAttribute(r,o),Wa.fromBufferAttribute(r,l),Xa.fromBufferAttribute(r,c),u.uv=Fn.getInterpolation($a,kr,Br,Vr,Ha,Wa,Xa,new Nt)),s&&(Ha.fromBufferAttribute(s,o),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,c),u.uv1=Fn.getInterpolation($a,kr,Br,Vr,Ha,Wa,Xa,new Nt),u.uv2=u.uv1),a&&(Ad.fromBufferAttribute(a,o),Pd.fromBufferAttribute(a,l),Rd.fromBufferAttribute(a,c),u.normal=Fn.getInterpolation($a,kr,Br,Vr,Ad,Pd,Rd,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};Fn.getNormal(kr,Br,Vr,h.normal),u.face=h}return u}class fa extends wr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(u,3)),this.setAttribute("uv",new hr(h,2));function v(_,p,f,y,b,w,T,C,S,D,U){const g=w/S,P=T/D,H=w/2,$=T/2,L=C/2,B=S+1,N=D+1;let j=0,X=0;const q=new F;for(let Y=0;Y<N;Y++){const tt=Y*P-$;for(let st=0;st<B;st++){const St=st*g-H;q[_]=St*y,q[p]=tt*b,q[f]=L,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[f]=C>0?1:-1,u.push(q.x,q.y,q.z),h.push(st/S),h.push(1-Y/D),j+=1}}for(let Y=0;Y<D;Y++)for(let tt=0;tt<S;tt++){const st=d+tt+B*Y,St=d+tt+B*(Y+1),G=d+(tt+1)+B*(Y+1),K=d+(tt+1)+B*Y;l.push(st,St,K),l.push(St,G,K),X+=6}o.addGroup(m,X,U),m+=X,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=fs(n[e]);for(const r in i)t[r]=i[r]}return t}function mw(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $m(n){return n.getRenderTarget()===null?n.outputColorSpace:Jt.workingColorSpace}const _w={clone:fs,merge:We};var vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vw,this.fragmentShader=gw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=mw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jm extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new F,Ld=new Nt,Dd=new Nt;class wn extends jm{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Ld,Dd),e.subVectors(Dd,Ld)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zr=-90,Gr=1;class bw extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(zr,Gr,t,e);r.layers=this.layers,this.add(r);const s=new wn(zr,Gr,t,e);s.layers=this.layers,this.add(s);const a=new wn(zr,Gr,t,e);a.layers=this.layers,this.add(a);const o=new wn(zr,Gr,t,e);o.layers=this.layers,this.add(o);const l=new wn(zr,Gr,t,e);l.layers=this.layers,this.add(l);const c=new wn(zr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class qm extends je{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xw extends mr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ur?De:En),this.texture=new qm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fa(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Di});s.uniforms.tEquirect.value=e;const a=new Bn(r,s),o=e.minFilter;return e.minFilter===ir&&(e.minFilter=Ze),new bw(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Ul=new F,yw=new F,ww=new Gt;let Si=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ul.subVectors(i,e).cross(yw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ww.getNormalMatrix(t),r=this.coplanarPoint(Ul).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const qi=new gu,Ya=new F;class Ym{constructor(t=new Si,e=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],f=r[12],y=r[13],b=r[14],w=r[15];if(i[0].setComponents(l-s,d-c,p-m,w-f).normalize(),i[1].setComponents(l+s,d+c,p+m,w+f).normalize(),i[2].setComponents(l+a,d+u,p+v,w+y).normalize(),i[3].setComponents(l-a,d-u,p-v,w-y).normalize(),i[4].setComponents(l-o,d-h,p-_,w-b).normalize(),e===ri)i[5].setComponents(l+o,d+h,p+_,w+b).normalize();else if(e===To)i[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ya.x=r.normal.x>0?t.max.x:t.min.x,Ya.y=r.normal.y>0?t.max.y:t.min.y,Ya.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Km(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ew(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const f=v[_];e?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ma extends wr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,d=e/l,m=[],v=[],_=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let b=0;b<c;b++){const w=b*h-s;v.push(w,-y,0),_.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const b=y+c*f,w=y+c*(f+1),T=y+1+c*(f+1),C=y+1+c*f;m.push(b,w,C),m.push(w,T,C)}this.setIndex(m),this.setAttribute("position",new hr(v,3)),this.setAttribute("normal",new hr(_,3)),this.setAttribute("uv",new hr(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Aw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",eE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Sw,alphahash_pars_fragment:Mw,alphamap_fragment:Tw,alphamap_pars_fragment:Cw,alphatest_fragment:Aw,alphatest_pars_fragment:Pw,aomap_fragment:Rw,aomap_pars_fragment:Lw,batching_pars_vertex:Dw,batching_vertex:Iw,begin_vertex:Ow,beginnormal_vertex:Uw,bsdfs:Nw,iridescence_fragment:Fw,bumpmap_pars_fragment:kw,clipping_planes_fragment:Bw,clipping_planes_pars_fragment:Vw,clipping_planes_pars_vertex:zw,clipping_planes_vertex:Gw,color_fragment:Hw,color_pars_fragment:Ww,color_pars_vertex:Xw,color_vertex:$w,common:jw,cube_uv_reflection_fragment:qw,defaultnormal_vertex:Yw,displacementmap_pars_vertex:Kw,displacementmap_vertex:Zw,emissivemap_fragment:Jw,emissivemap_pars_fragment:Qw,colorspace_fragment:tE,colorspace_pars_fragment:eE,envmap_fragment:nE,envmap_common_pars_fragment:iE,envmap_pars_fragment:rE,envmap_pars_vertex:sE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:oE,fog_pars_vertex:lE,fog_fragment:cE,fog_pars_fragment:uE,gradientmap_pars_fragment:hE,lightmap_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:fE,lights_lambert_pars_fragment:mE,lights_pars_begin:_E,lights_toon_fragment:gE,lights_toon_pars_fragment:bE,lights_phong_fragment:xE,lights_phong_pars_fragment:yE,lights_physical_fragment:wE,lights_physical_pars_fragment:EE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:TE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:AE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:RE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:IE,map_particle_pars_fragment:OE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:NE,morphcolor_vertex:FE,morphnormal_vertex:kE,morphtarget_pars_vertex:BE,morphtarget_vertex:VE,normal_fragment_begin:zE,normal_fragment_maps:GE,normal_pars_fragment:HE,normal_pars_vertex:WE,normal_vertex:XE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:YE,iridescence_pars_fragment:KE,opaque_fragment:ZE,packing:JE,premultiplied_alpha_fragment:QE,project_vertex:tS,dithering_fragment:eS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:aS,shadowmap_vertex:oS,shadowmask_pars_fragment:lS,skinbase_vertex:cS,skinning_pars_vertex:uS,skinning_vertex:hS,skinnormal_vertex:dS,specularmap_fragment:pS,specularmap_pars_fragment:fS,tonemapping_fragment:mS,tonemapping_pars_fragment:_S,transmission_fragment:vS,transmission_pars_fragment:gS,uv_pars_fragment:bS,uv_pars_vertex:xS,uv_vertex:yS,worldpos_vertex:wS,background_vert:ES,background_frag:SS,backgroundCube_vert:MS,backgroundCube_frag:TS,cube_vert:CS,cube_frag:AS,depth_vert:PS,depth_frag:RS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:IS,equirect_frag:OS,linedashed_vert:US,linedashed_frag:NS,meshbasic_vert:FS,meshbasic_frag:kS,meshlambert_vert:BS,meshlambert_frag:VS,meshmatcap_vert:zS,meshmatcap_frag:GS,meshnormal_vert:HS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:$S,meshphysical_vert:jS,meshphysical_frag:qS,meshtoon_vert:YS,meshtoon_frag:KS,points_vert:ZS,points_frag:JS,shadow_vert:QS,shadow_frag:tM,sprite_vert:eM,sprite_frag:nM},at={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},On={basic:{uniforms:We([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:We([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:We([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:We([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:We([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:We([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:We([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:We([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:We([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:We([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:We([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:We([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:We([at.lights,at.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};On.physical={uniforms:We([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ka={r:0,b:0,g:0};function iM(n,t,e,i,r,s,a){const o=new Qt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function v(p,f){let y=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?e:t).get(b)),b===null?_(o,l):b&&b.isColor&&(_(b,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Bo)?(u===void 0&&(u=new Bn(new fa(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:fs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,(h!==b||d!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bn(new ma(2,2),new ui({name:"BackgroundMaterial",uniforms:fs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Ka,$m(n)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:v}}function rM(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(L,B,N,j,X){let q=!1;if(a){const Y=_(j,N,B);c!==Y&&(c=Y,m(c.object)),q=f(L,j,N,X),q&&y(L,j,N,X)}else{const Y=B.wireframe===!0;(c.geometry!==j.id||c.program!==N.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=N.id,c.wireframe=Y,q=!0)}X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,D(L,B,N,j),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,B,N){const j=N.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let q=X[B.id];q===void 0&&(q={},X[B.id]=q);let Y=q[j];return Y===void 0&&(Y=p(d()),q[j]=Y),Y}function p(L){const B=[],N=[],j=[];for(let X=0;X<r;X++)B[X]=0,N[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:j,object:L,attributes:{},index:null}}function f(L,B,N,j){const X=c.attributes,q=B.attributes;let Y=0;const tt=N.getAttributes();for(const st in tt)if(tt[st].location>=0){const G=X[st];let K=q[st];if(K===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),G===void 0||G.attribute!==K||K&&G.data!==K.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function y(L,B,N,j){const X={},q=B.attributes;let Y=0;const tt=N.getAttributes();for(const st in tt)if(tt[st].location>=0){let G=q[st];G===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const K={};K.attribute=G,G&&G.data&&(K.data=G.data),X[st]=K,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function b(){const L=c.newAttributes;for(let B=0,N=L.length;B<N;B++)L[B]=0}function w(L){T(L,0)}function T(L,B){const N=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;N[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),X[L]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),X[L]=B)}function C(){const L=c.newAttributes,B=c.enabledAttributes;for(let N=0,j=B.length;N<j;N++)B[N]!==L[N]&&(n.disableVertexAttribArray(N),B[N]=0)}function S(L,B,N,j,X,q,Y){Y===!0?n.vertexAttribIPointer(L,B,N,X,q):n.vertexAttribPointer(L,B,N,j,X,q)}function D(L,B,N,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const X=j.attributes,q=N.getAttributes(),Y=B.defaultAttributeValues;for(const tt in q){const st=q[tt];if(st.location>=0){let St=X[tt];if(St===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),St!==void 0){const G=St.normalized,K=St.itemSize,ht=e.get(St);if(ht===void 0)continue;const wt=ht.buffer,Mt=ht.type,pt=ht.bytesPerElement,Xt=i.isWebGL2===!0&&(Mt===n.INT||Mt===n.UNSIGNED_INT||St.gpuType===Cm);if(St.isInterleavedBufferAttribute){const Rt=St.data,O=Rt.stride,Ee=St.offset;if(Rt.isInstancedInterleavedBuffer){for(let xt=0;xt<st.locationSize;xt++)T(st.location+xt,Rt.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let xt=0;xt<st.locationSize;xt++)w(st.location+xt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let xt=0;xt<st.locationSize;xt++)S(st.location+xt,K/st.locationSize,Mt,G,O*pt,(Ee+K/st.locationSize*xt)*pt,Xt)}else{if(St.isInstancedBufferAttribute){for(let Rt=0;Rt<st.locationSize;Rt++)T(st.location+Rt,St.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<st.locationSize;Rt++)w(st.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let Rt=0;Rt<st.locationSize;Rt++)S(st.location+Rt,K/st.locationSize,Mt,G,K*pt,K/st.locationSize*Rt*pt,Xt)}}else if(Y!==void 0){const G=Y[tt];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(st.location,G);break;case 3:n.vertexAttrib3fv(st.location,G);break;case 4:n.vertexAttrib4fv(st.location,G);break;default:n.vertexAttrib1fv(st.location,G)}}}}C()}function U(){H();for(const L in o){const B=o[L];for(const N in B){const j=B[N];for(const X in j)v(j[X].object),delete j[X];delete B[N]}delete o[L]}}function g(L){if(o[L.id]===void 0)return;const B=o[L.id];for(const N in B){const j=B[N];for(const X in j)v(j[X].object),delete j[X];delete B[N]}delete o[L.id]}function P(L){for(const B in o){const N=o[B];if(N[L.id]===void 0)continue;const j=N[L.id];for(const X in j)v(j[X].object),delete j[X];delete N[L.id]}}function H(){$(),u=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:$,dispose:U,releaseStatesOfGeometry:g,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:w,disableUnusedAttributes:C}}function sM(n,t,e,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];e.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function aM(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,w=a||t.has("OES_texture_float"),T=b&&w,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:C}}function oM(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Si,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,b=y*4;let w=f.clippingState||null;l.value=w,w=u(v,d,b,m);for(let T=0;T!==b;++T)w[T]=e[T];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,w=m;b!==_;++b,w+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function lM(n){let t=new WeakMap;function e(a,o){return o===Cc?a.mapping=hs:o===Ac&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cc||o===Ac)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xw(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class cM extends jm{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yr=4,Id=[.125,.215,.35,.446,.526,.582],er=20,Nl=new cM,Od=new Qt;let Fl=null,kl=0,Bl=0;const Zi=(1+Math.sqrt(5))/2,Hr=1/Zi,Ud=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Zi,Hr),new F(0,Zi,-Hr),new F(Hr,0,Zi),new F(-Hr,0,Zi),new F(Zi,Hr,0),new F(-Zi,Hr,0)];class Nd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Fl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,kl,Bl),t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ea,format:Dn,colorSpace:ci,depthBuffer:!1},r=Fd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(s)),this._blurMaterial=hM(s,t,e)}return r}_compileMaterial(t){const e=new Bn(this._lodPlanes[0],t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,i,r){const o=new wn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Od),u.toneMapping=Ii,u.autoClear=!1;const m=new Hm({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Bn(new fa,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Od),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Za(r,y*b,f>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===hs||t.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Bn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Za(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Nl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(r-1)%Ud.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):er;p>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${er}`);const f=[];let y=0;for(let S=0;S<er;++S){const D=S/_,U=Math.exp(-D*D/2);f.push(U),S===0?y+=U:S<p&&(y+=2*U)}for(let S=0;S<f.length;S++)f[S]=f[S]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const w=this._sizeLods[r],T=3*w*(r>b-Yr?r-b+Yr:0),C=4*(this._cubeSize-w);Za(e,T,C,3*w,2*w),l.setRenderTarget(e),l.render(h,Nl)}}function uM(n){const t=[],e=[],i=[];let r=n;const s=n-Yr+1+Id.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Yr?l=Id[a-n+Yr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,_=3,p=2,f=1,y=new Float32Array(_*v*m),b=new Float32Array(p*v*m),w=new Float32Array(f*v*m);for(let C=0;C<m;C++){const S=C%3*2/3-1,D=C>2?0:-1,U=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];y.set(U,_*v*C),b.set(d,p*v*C);const g=[C,C,C,C,C,C];w.set(g,f*v*C)}const T=new wr;T.setAttribute("position",new Gn(y,_)),T.setAttribute("uv",new Gn(b,p)),T.setAttribute("faceIndex",new Gn(w,f)),t.push(T),r>Yr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fd(n,t,e){const i=new mr(n,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function hM(n,t,e){const i=new Float32Array(er),r=new F(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function kd(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Bd(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dM(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cc||l===Ac,u=l===hs||l===ds;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Nd(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new Nd(n));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function pM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fM(n,t,e,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let b=0,w=y.length;b<w;b+=3){const T=y[b+0],C=y[b+1],S=y[b+2];d.push(T,C,C,S,S,T)}}else if(v!==void 0){const y=v.array;_=v.version;for(let b=0,w=y.length/3-1;b<w;b+=3){const T=b+0,C=b+1,S=b+2;d.push(T,C,C,S,S,T)}}else return;const p=new(Nm(d)?Xm:Wm)(d,1);p.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function mM(n,t,e,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,v){n.drawElements(s,v,o,m*l),e.update(v,s,1)}function h(m,v,_){if(_===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,v,o,m*l,_),e.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,v[f]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,_);let f=0;for(let y=0;y<_;y++)f+=v[y];e.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function _M(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function vM(n,t){return n[0]-t[0]}function gM(n,t){return Math.abs(t[1])-Math.abs(n[1])}function bM(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let B=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),T===!0&&(U=3);let g=u.attributes.position.count*U,P=1;g>t.maxTextureSize&&(P=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const H=new Float32Array(g*P*4*_),$=new Bm(H,g,P,_);$.type=ii,$.needsUpdate=!0;const L=U*4;for(let N=0;N<_;N++){const j=C[N],X=S[N],q=D[N],Y=g*P*4*N;for(let tt=0;tt<j.count;tt++){const st=tt*L;b===!0&&(a.fromBufferAttribute(j,tt),H[Y+st+0]=a.x,H[Y+st+1]=a.y,H[Y+st+2]=a.z,H[Y+st+3]=0),w===!0&&(a.fromBufferAttribute(X,tt),H[Y+st+4]=a.x,H[Y+st+5]=a.y,H[Y+st+6]=a.z,H[Y+st+7]=0),T===!0&&(a.fromBufferAttribute(q,tt),H[Y+st+8]=a.x,H[Y+st+9]=a.y,H[Y+st+10]=a.z,H[Y+st+11]=q.itemSize===4?a.w:1)}}p={count:_,texture:$,size:new Nt(g,P)},s.set(u,p),u.addEventListener("dispose",B)}let f=0;for(let b=0;b<d.length;b++)f+=d[b];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let w=0;w<v;w++)_[w]=[w,0];i[u.id]=_}for(let w=0;w<v;w++){const T=_[w];T[0]=w,T[1]=d[w]}_.sort(gM);for(let w=0;w<8;w++)w<v&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(vM);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const T=o[w],C=T[0],S=T[1];C!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),f&&u.getAttribute("morphNormal"+w)!==f[C]&&u.setAttribute("morphNormal"+w,f[C]),r[w]=S,y+=S):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xM(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Zm extends je{constructor(t,e,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Ai),i===void 0&&u===ps&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jm=new je,Qm=new Zm(1,1);Qm.compareFunction=Um;const t_=new Bm,e_=new iw,n_=new qm,Vd=[],zd=[],Gd=new Float32Array(16),Hd=new Float32Array(9),Wd=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Vd[r];if(s===void 0&&(s=new Float32Array(r),Vd[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function SM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function MM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Me(e,i))return;Wd.set(i),n.uniformMatrix2fv(this.addr,!1,Wd),Te(e,i)}}function TM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Me(e,i))return;Hd.set(i),n.uniformMatrix3fv(this.addr,!1,Hd),Te(e,i)}}function CM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Me(e,i))return;Gd.set(i),n.uniformMatrix4fv(this.addr,!1,Gd),Te(e,i)}}function AM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function RM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function LM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function DM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function IM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function OM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function UM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function NM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Qm:Jm;e.setTexture2D(t||s,r)}function FM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||e_,r)}function kM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||n_,r)}function BM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||t_,r)}function VM(n){switch(n){case 5126:return yM;case 35664:return wM;case 35665:return EM;case 35666:return SM;case 35674:return MM;case 35675:return TM;case 35676:return CM;case 5124:case 35670:return AM;case 35667:case 35671:return PM;case 35668:case 35672:return RM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return IM;case 36295:return OM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}function zM(n,t){n.uniform1fv(this.addr,t)}function GM(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function HM(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function WM(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function XM(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $M(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function jM(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function qM(n,t){n.uniform1iv(this.addr,t)}function YM(n,t){n.uniform2iv(this.addr,t)}function KM(n,t){n.uniform3iv(this.addr,t)}function ZM(n,t){n.uniform4iv(this.addr,t)}function JM(n,t){n.uniform1uiv(this.addr,t)}function QM(n,t){n.uniform2uiv(this.addr,t)}function tT(n,t){n.uniform3uiv(this.addr,t)}function eT(n,t){n.uniform4uiv(this.addr,t)}function nT(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Jm,s[a])}function iT(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||e_,s[a])}function rT(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||n_,s[a])}function sT(n,t,e){const i=this.cache,r=t.length,s=Ho(e,r);Me(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||t_,s[a])}function aT(n){switch(n){case 5126:return zM;case 35664:return GM;case 35665:return HM;case 35666:return WM;case 35674:return XM;case 35675:return $M;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return tT;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}class oT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=VM(e.type)}}class lT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aT(e.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Xd(n,t){n.seq.push(t),n.map[t.id]=t}function uT(n,t,e){const i=n.name,r=i.length;for(Vl.lastIndex=0;;){const s=Vl.exec(i),a=Vl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xd(e,c===void 0?new oT(o,n,t):new lT(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new cT(o),Xd(e,h)),e=h}}}class lo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);uT(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function $d(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hT=37297;let dT=0;function pT(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function fT(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Mo&&e===So?i="LinearDisplayP3ToLinearSRGB":t===So&&e===Mo&&(i="LinearSRGBToLinearDisplayP3"),n){case ci:case Vo:return[i,"LinearTransferOETF"];case De:case _u:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+pT(n.getShaderSource(t),a)}else return r}function mT(n,t){const e=fT(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _T(n,t){let e;switch(t){case dy:e="Linear";break;case py:e="Reinhard";break;case fy:e="OptimizedCineon";break;case my:e="ACESFilmic";break;case vy:e="AgX";break;case _y:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kr).join(`
`)}function gT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function bT(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xT(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Kr(n){return n!==""}function qd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(yT,ET)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ET(n,t){let e=Ft[t];if(e===void 0){const i=wT.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(ST,MT)}function MT(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vx?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function CT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case ds:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function PT(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mm:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case hy:t="ENVMAP_BLENDING_ADD";break}return t}function RT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function LT(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=TT(e),c=CT(e),u=AT(e),h=PT(e),d=RT(e),m=e.isWebGL2?"":vT(e),v=gT(e),_=bT(s),p=r.createProgram();let f,y,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),y.length>0&&(y+=`
`)):(f=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),y=[m,Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Ii?_T("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mT("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Ic(a),a=qd(a,e),a=Yd(a,e),o=Ic(o),o=qd(o,e),o=Yd(o,e),a=Kd(a),o=Kd(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=b+f+a,T=b+y+o,C=$d(r,r.VERTEX_SHADER,w),S=$d(r,r.FRAGMENT_SHADER,T);r.attachShader(p,C),r.attachShader(p,S),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(H){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(S).trim();let N=!0,j=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,S);else{const X=jd(r,C,"vertex"),q=jd(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+X+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||B==="")&&(j=!1);j&&(H.diagnostics={runnable:N,programLog:$,vertexShader:{log:L,prefix:f},fragmentShader:{log:B,prefix:y}})}r.deleteShader(C),r.deleteShader(S),U=new lo(r,p),g=xT(r,p)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let g;this.getAttributes=function(){return g===void 0&&D(this),g};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,hT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dT++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=S,this}let DT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new OT(t),e.set(t,i)),i}}class OT{constructor(t){this.id=DT++,this.code=t,this.usedTimes=0}}function UT(n,t,e,i,r,s,a){const o=new zm,l=new IT,c=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,P,H,$,L){const B=$.fog,N=L.geometry,j=g.isMeshStandardMaterial?$.environment:null,X=(g.isMeshStandardMaterial?e:t).get(g.envMap||j),q=X&&X.mapping===Bo?X.image.height:null,Y=_[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=tt!==void 0?tt.length:0;let St=0;N.morphAttributes.position!==void 0&&(St=1),N.morphAttributes.normal!==void 0&&(St=2),N.morphAttributes.color!==void 0&&(St=3);let G,K,ht,wt;if(Y){const Ht=On[Y];G=Ht.vertexShader,K=Ht.fragmentShader}else G=g.vertexShader,K=g.fragmentShader,l.update(g),ht=l.getVertexShaderID(g),wt=l.getFragmentShaderID(g);const Mt=n.getRenderTarget(),pt=L.isInstancedMesh===!0,Xt=L.isBatchedMesh===!0,Rt=!!g.map,O=!!g.matcap,Ee=!!X,xt=!!g.aoMap,Ct=!!g.lightMap,_t=!!g.bumpMap,se=!!g.normalMap,Lt=!!g.displacementMap,M=!!g.emissiveMap,x=!!g.metalnessMap,k=!!g.roughnessMap,it=g.anisotropy>0,Z=g.clearcoat>0,et=g.iridescence>0,ft=g.sheen>0,ot=g.transmission>0,dt=it&&!!g.anisotropyMap,Et=Z&&!!g.clearcoatMap,Dt=Z&&!!g.clearcoatNormalMap,J=Z&&!!g.clearcoatRoughnessMap,Kt=et&&!!g.iridescenceMap,kt=et&&!!g.iridescenceThicknessMap,At=ft&&!!g.sheenColorMap,gt=ft&&!!g.sheenRoughnessMap,ct=!!g.specularMap,Ot=!!g.specularColorMap,R=!!g.specularIntensityMap,rt=ot&&!!g.transmissionMap,lt=ot&&!!g.thicknessMap,bt=!!g.gradientMap,A=!!g.alphaMap,nt=g.alphaTest>0,Q=!!g.alphaHash,mt=!!g.extensions;let yt=Ii;g.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(yt=n.toneMapping);const jt={isWebGL2:h,shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:K,defines:g.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Xt,instancing:pt,instancingColor:pt&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ci,alphaToCoverage:!!g.alphaToCoverage,map:Rt,matcap:O,envMap:Ee,envMapMode:Ee&&X.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:Ct,bumpMap:_t,normalMap:se,displacementMap:m&&Lt,emissiveMap:M,normalMapObjectSpace:se&&g.normalMapType===Py,normalMapTangentSpace:se&&g.normalMapType===Ay,metalnessMap:x,roughnessMap:k,anisotropy:it,anisotropyMap:dt,clearcoat:Z,clearcoatMap:Et,clearcoatNormalMap:Dt,clearcoatRoughnessMap:J,iridescence:et,iridescenceMap:Kt,iridescenceThicknessMap:kt,sheen:ft,sheenColorMap:At,sheenRoughnessMap:gt,specularMap:ct,specularColorMap:Ot,specularIntensityMap:R,transmission:ot,transmissionMap:rt,thicknessMap:lt,gradientMap:bt,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:A,alphaTest:nt,alphaHash:Q,combine:g.combine,mapUv:Rt&&p(g.map.channel),aoMapUv:xt&&p(g.aoMap.channel),lightMapUv:Ct&&p(g.lightMap.channel),bumpMapUv:_t&&p(g.bumpMap.channel),normalMapUv:se&&p(g.normalMap.channel),displacementMapUv:Lt&&p(g.displacementMap.channel),emissiveMapUv:M&&p(g.emissiveMap.channel),metalnessMapUv:x&&p(g.metalnessMap.channel),roughnessMapUv:k&&p(g.roughnessMap.channel),anisotropyMapUv:dt&&p(g.anisotropyMap.channel),clearcoatMapUv:Et&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:gt&&p(g.sheenRoughnessMap.channel),specularMapUv:ct&&p(g.specularMap.channel),specularColorMapUv:Ot&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:rt&&p(g.transmissionMap.channel),thicknessMapUv:lt&&p(g.thicknessMap.channel),alphaMapUv:A&&p(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(se||it),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Rt||A),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:St,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Rt&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Nn,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:mt&&g.extensions.derivatives===!0,extensionFragDepth:mt&&g.extensions.fragDepth===!0,extensionDrawBuffers:mt&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&g.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function y(g){const P=[];if(g.shaderID?P.push(g.shaderID):(P.push(g.customVertexShaderID),P.push(g.customFragmentShaderID)),g.defines!==void 0)for(const H in g.defines)P.push(H),P.push(g.defines[H]);return g.isRawShaderMaterial===!1&&(b(P,g),w(P,g),P.push(n.outputColorSpace)),P.push(g.customProgramCacheKey),P.join()}function b(g,P){g.push(P.precision),g.push(P.outputColorSpace),g.push(P.envMapMode),g.push(P.envMapCubeUVHeight),g.push(P.mapUv),g.push(P.alphaMapUv),g.push(P.lightMapUv),g.push(P.aoMapUv),g.push(P.bumpMapUv),g.push(P.normalMapUv),g.push(P.displacementMapUv),g.push(P.emissiveMapUv),g.push(P.metalnessMapUv),g.push(P.roughnessMapUv),g.push(P.anisotropyMapUv),g.push(P.clearcoatMapUv),g.push(P.clearcoatNormalMapUv),g.push(P.clearcoatRoughnessMapUv),g.push(P.iridescenceMapUv),g.push(P.iridescenceThicknessMapUv),g.push(P.sheenColorMapUv),g.push(P.sheenRoughnessMapUv),g.push(P.specularMapUv),g.push(P.specularColorMapUv),g.push(P.specularIntensityMapUv),g.push(P.transmissionMapUv),g.push(P.thicknessMapUv),g.push(P.combine),g.push(P.fogExp2),g.push(P.sizeAttenuation),g.push(P.morphTargetsCount),g.push(P.morphAttributeCount),g.push(P.numDirLights),g.push(P.numPointLights),g.push(P.numSpotLights),g.push(P.numSpotLightMaps),g.push(P.numHemiLights),g.push(P.numRectAreaLights),g.push(P.numDirLightShadows),g.push(P.numPointLightShadows),g.push(P.numSpotLightShadows),g.push(P.numSpotLightShadowsWithMaps),g.push(P.numLightProbes),g.push(P.shadowMapType),g.push(P.toneMapping),g.push(P.numClippingPlanes),g.push(P.numClipIntersection),g.push(P.depthPacking)}function w(g,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.matcap&&o.enable(4),P.envMap&&o.enable(5),P.normalMapObjectSpace&&o.enable(6),P.normalMapTangentSpace&&o.enable(7),P.clearcoat&&o.enable(8),P.iridescence&&o.enable(9),P.alphaTest&&o.enable(10),P.vertexColors&&o.enable(11),P.vertexAlphas&&o.enable(12),P.vertexUv1s&&o.enable(13),P.vertexUv2s&&o.enable(14),P.vertexUv3s&&o.enable(15),P.vertexTangents&&o.enable(16),P.anisotropy&&o.enable(17),P.alphaHash&&o.enable(18),P.batching&&o.enable(19),g.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.alphaToCoverage&&o.enable(20),g.push(o.mask)}function T(g){const P=_[g.type];let H;if(P){const $=On[P];H=_w.clone($.uniforms)}else H=g.uniforms;return H}function C(g,P){let H;for(let $=0,L=u.length;$<L;$++){const B=u[$];if(B.cacheKey===P){H=B,++H.usedTimes;break}}return H===void 0&&(H=new LT(n,P,g,s),u.push(H)),H}function S(g){if(--g.usedTimes===0){const P=u.indexOf(g);u[P]=u[u.length-1],u.pop(),g.destroy()}}function D(g){l.remove(g)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:T,acquireProgram:C,releaseProgram:S,releaseShaderCache:D,programs:u,dispose:U}}function NT(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function FT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,d,m,v,_,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function o(h,d,m,v,_,p){const f=a(h,d,m,v,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(h,d,m,v,_,p){const f=a(h,d,m,v,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||FT),i.length>1&&i.sort(d||Jd),r.length>1&&r.sort(d||Jd)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function kT(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Qd,n.set(i,[a])):r>=s.length?(a=new Qd,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function BT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Qt};break;case"SpotLight":e={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function VT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let zT=0;function GT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function HT(n,t){const e=new BT,i=VT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new Oe,o=new Oe;function l(u,h){let d=0,m=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,f=0,y=0,b=0,w=0,T=0,C=0,S=0,D=0,U=0;u.sort(GT);const g=h===!0?Math.PI:1;for(let H=0,$=u.length;H<$;H++){const L=u[H],B=L.color,N=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*N*g,m+=B.g*N*g,v+=B.b*N*g;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],N);U++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*g),L.castShadow){const Y=L.shadow,tt=i.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,r.directionalShadow[_]=tt,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=L.shadow.matrix,w++}r.directional[_]=q,_++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(N*g),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[f]=q;const Y=L.shadow;if(L.map&&(r.spotLightMap[S]=L.map,S++,Y.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[f]=Y.matrix,L.castShadow){const tt=i.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,r.spotShadow[f]=tt,r.spotShadowMap[f]=X,C++}f++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(B).multiplyScalar(N),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=q,y++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*g),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Y=L.shadow,tt=i.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,r.pointShadow[p]=tt,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=q,p++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(N*g),q.groundColor.copy(L.groundColor).multiplyScalar(N*g),r.hemi[b]=q,b++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const P=r.hash;(P.directionalLength!==_||P.pointLength!==p||P.spotLength!==f||P.rectAreaLength!==y||P.hemiLength!==b||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==C||P.numSpotMaps!==S||P.numLightProbes!==U)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+S-D,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=U,P.directionalLength=_,P.pointLength=p,P.spotLength=f,P.rectAreaLength=y,P.hemiLength=b,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=C,P.numSpotMaps=S,P.numLightProbes=U,r.version=zT++)}function c(u,h){let d=0,m=0,v=0,_=0,p=0;const f=h.matrixWorldInverse;for(let y=0,b=u.length;y<b;y++){const w=u[y];if(w.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(w.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),v++}else if(w.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function tp(n,t){const e=new HT(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function WT(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new tp(n,t),e.set(s,[l])):a>=o.length?(l=new tp(n,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class XT extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $T extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YT(n,t,e){let i=new Ym;const r=new Nt,s=new Nt,a=new Ie,o=new XT({depthPacking:Cy}),l=new $T,c={},u=e.maxTextureSize,h={[ki]:rn,[rn]:ki,[Nn]:Nn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:jT,fragmentShader:qT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new wr;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let f=this.type;this.render=function(C,S,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const U=n.getRenderTarget(),g=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=f!==ti&&this.type===ti,L=f===ti&&this.type!==ti;for(let B=0,N=C.length;B<N;B++){const j=C[B],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const q=X.getFrameExtents();if(r.multiply(q),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,X.mapSize.y=s.y)),X.map===null||$===!0||L===!0){const tt=this.type!==ti?{minFilter:Xe,magFilter:Xe}:{};X.map!==null&&X.map.dispose(),X.map=new mr(r.x,r.y,tt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Y=X.getViewportCount();for(let tt=0;tt<Y;tt++){const st=X.getViewport(tt);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),H.viewport(a),X.updateMatrices(j,tt),i=X.getFrustum(),w(S,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&y(X,D),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(U,g,P)};function y(C,S){const D=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(S,null,D,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(S,null,D,m,_,null)}function b(C,S,D,U){let g=null;const P=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)g=P;else if(g=D.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const H=g.uuid,$=S.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let B=L[$];B===void 0&&(B=g.clone(),L[$]=B,S.addEventListener("dispose",T)),g=B}if(g.visible=S.visible,g.wireframe=S.wireframe,U===ti?g.side=S.shadowSide!==null?S.shadowSide:S.side:g.side=S.shadowSide!==null?S.shadowSide:h[S.side],g.alphaMap=S.alphaMap,g.alphaTest=S.alphaTest,g.map=S.map,g.clipShadows=S.clipShadows,g.clippingPlanes=S.clippingPlanes,g.clipIntersection=S.clipIntersection,g.displacementMap=S.displacementMap,g.displacementScale=S.displacementScale,g.displacementBias=S.displacementBias,g.wireframeLinewidth=S.wireframeLinewidth,g.linewidth=S.linewidth,D.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const H=n.properties.get(g);H.light=D}return g}function w(C,S,D,U,g){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const $=t.update(C),L=C.material;if(Array.isArray(L)){const B=$.groups;for(let N=0,j=B.length;N<j;N++){const X=B[N],q=L[X.materialIndex];if(q&&q.visible){const Y=b(C,q,U,g);C.onBeforeShadow(n,C,S,D,$,Y,X),n.renderBufferDirect(D,null,$,Y,C,X),C.onAfterShadow(n,C,S,D,$,Y,X)}}}else if(L.visible){const B=b(C,L,U,g);C.onBeforeShadow(n,C,S,D,$,B,null),n.renderBufferDirect(D,null,$,B,C,null),C.onAfterShadow(n,C,S,D,$,B,null)}}const H=C.children;for(let $=0,L=H.length;$<L;$++)w(H[$],S,D,U,g)}function T(C){C.target.removeEventListener("dispose",T);for(const D in c){const U=c[D],g=C.target.uuid;g in U&&(U[g].dispose(),delete U[g])}}}function KT(n,t,e){const i=e.isWebGL2;function r(){let A=!1;const nt=new Ie;let Q=null;const mt=new Ie(0,0,0,0);return{setMask:function(yt){Q!==yt&&!A&&(n.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){A=yt},setClear:function(yt,jt,Ht,ee,Le){Le===!0&&(yt*=ee,jt*=ee,Ht*=ee),nt.set(yt,jt,Ht,ee),mt.equals(nt)===!1&&(n.clearColor(yt,jt,Ht,ee),mt.copy(nt))},reset:function(){A=!1,Q=null,mt.set(-1,0,0,0)}}}function s(){let A=!1,nt=null,Q=null,mt=null;return{setTest:function(yt){yt?pt(n.DEPTH_TEST):Xt(n.DEPTH_TEST)},setMask:function(yt){nt!==yt&&!A&&(n.depthMask(yt),nt=yt)},setFunc:function(yt){if(Q!==yt){switch(yt){case iy:n.depthFunc(n.NEVER);break;case ry:n.depthFunc(n.ALWAYS);break;case sy:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case ay:n.depthFunc(n.EQUAL);break;case oy:n.depthFunc(n.GEQUAL);break;case ly:n.depthFunc(n.GREATER);break;case cy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=yt}},setLocked:function(yt){A=yt},setClear:function(yt){mt!==yt&&(n.clearDepth(yt),mt=yt)},reset:function(){A=!1,nt=null,Q=null,mt=null}}}function a(){let A=!1,nt=null,Q=null,mt=null,yt=null,jt=null,Ht=null,ee=null,Le=null;return{setTest:function(qt){A||(qt?pt(n.STENCIL_TEST):Xt(n.STENCIL_TEST))},setMask:function(qt){nt!==qt&&!A&&(n.stencilMask(qt),nt=qt)},setFunc:function(qt,ve,Ge){(Q!==qt||mt!==ve||yt!==Ge)&&(n.stencilFunc(qt,ve,Ge),Q=qt,mt=ve,yt=Ge)},setOp:function(qt,ve,Ge){(jt!==qt||Ht!==ve||ee!==Ge)&&(n.stencilOp(qt,ve,Ge),jt=qt,Ht=ve,ee=Ge)},setLocked:function(qt){A=qt},setClear:function(qt){Le!==qt&&(n.clearStencil(qt),Le=qt)},reset:function(){A=!1,nt=null,Q=null,mt=null,yt=null,jt=null,Ht=null,ee=null,Le=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,f=!1,y=null,b=null,w=null,T=null,C=null,S=null,D=null,U=new Qt(0,0,0),g=0,P=!1,H=null,$=null,L=null,B=null,N=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=q>=2);let tt=null,st={};const St=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),K=new Ie().fromArray(St),ht=new Ie().fromArray(G);function wt(A,nt,Q,mt){const yt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(A,jt),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<Q;Ht++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(nt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(nt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return jt}const Mt={};Mt[n.TEXTURE_2D]=wt(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Mt[n.TEXTURE_2D_ARRAY]=wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(n.DEPTH_TEST),l.setFunc(wo),Lt(!1),M(Ih),pt(n.CULL_FACE),_t(Di);function pt(A){d[A]!==!0&&(n.enable(A),d[A]=!0)}function Xt(A){d[A]!==!1&&(n.disable(A),d[A]=!1)}function Rt(A,nt){return m[A]!==nt?(n.bindFramebuffer(A,nt),m[A]=nt,i&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=nt),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=nt)),!0):!1}function O(A,nt){let Q=_,mt=!1;if(A)if(Q=v.get(nt),Q===void 0&&(Q=[],v.set(nt,Q)),A.isWebGLMultipleRenderTargets){const yt=A.texture;if(Q.length!==yt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,Ht=yt.length;jt<Ht;jt++)Q[jt]=n.COLOR_ATTACHMENT0+jt;Q.length=yt.length,mt=!0}}else Q[0]!==n.COLOR_ATTACHMENT0&&(Q[0]=n.COLOR_ATTACHMENT0,mt=!0);else Q[0]!==n.BACK&&(Q[0]=n.BACK,mt=!0);mt&&(e.isWebGL2?n.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ee(A){return p!==A?(n.useProgram(A),p=A,!0):!1}const xt={[tr]:n.FUNC_ADD,[Gx]:n.FUNC_SUBTRACT,[Hx]:n.FUNC_REVERSE_SUBTRACT};if(i)xt[Fh]=n.MIN,xt[kh]=n.MAX;else{const A=t.get("EXT_blend_minmax");A!==null&&(xt[Fh]=A.MIN_EXT,xt[kh]=A.MAX_EXT)}const Ct={[Wx]:n.ZERO,[Xx]:n.ONE,[$x]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[Jx]:n.SRC_ALPHA_SATURATE,[Kx]:n.DST_COLOR,[qx]:n.DST_ALPHA,[jx]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[Zx]:n.ONE_MINUS_DST_COLOR,[Yx]:n.ONE_MINUS_DST_ALPHA,[Qx]:n.CONSTANT_COLOR,[ty]:n.ONE_MINUS_CONSTANT_COLOR,[ey]:n.CONSTANT_ALPHA,[ny]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(A,nt,Q,mt,yt,jt,Ht,ee,Le,qt){if(A===Di){f===!0&&(Xt(n.BLEND),f=!1);return}if(f===!1&&(pt(n.BLEND),f=!0),A!==zx){if(A!==y||qt!==P){if((b!==tr||C!==tr)&&(n.blendEquation(n.FUNC_ADD),b=tr,C=tr),qt)switch(A){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,T=null,S=null,D=null,U.set(0,0,0),g=0,y=A,P=qt}return}yt=yt||nt,jt=jt||Q,Ht=Ht||mt,(nt!==b||yt!==C)&&(n.blendEquationSeparate(xt[nt],xt[yt]),b=nt,C=yt),(Q!==w||mt!==T||jt!==S||Ht!==D)&&(n.blendFuncSeparate(Ct[Q],Ct[mt],Ct[jt],Ct[Ht]),w=Q,T=mt,S=jt,D=Ht),(ee.equals(U)===!1||Le!==g)&&(n.blendColor(ee.r,ee.g,ee.b,Le),U.copy(ee),g=Le),y=A,P=!1}function se(A,nt){A.side===Nn?Xt(n.CULL_FACE):pt(n.CULL_FACE);let Q=A.side===rn;nt&&(Q=!Q),Lt(Q),A.blending===ts&&A.transparent===!1?_t(Di):_t(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);const mt=A.stencilWrite;c.setTest(mt),mt&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),k(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(A){H!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),H=A)}function M(A){A!==kx?(pt(n.CULL_FACE),A!==$&&(A===Ih?n.cullFace(n.BACK):A===Bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xt(n.CULL_FACE),$=A}function x(A){A!==L&&(X&&n.lineWidth(A),L=A)}function k(A,nt,Q){A?(pt(n.POLYGON_OFFSET_FILL),(B!==nt||N!==Q)&&(n.polygonOffset(nt,Q),B=nt,N=Q)):Xt(n.POLYGON_OFFSET_FILL)}function it(A){A?pt(n.SCISSOR_TEST):Xt(n.SCISSOR_TEST)}function Z(A){A===void 0&&(A=n.TEXTURE0+j-1),tt!==A&&(n.activeTexture(A),tt=A)}function et(A,nt,Q){Q===void 0&&(tt===null?Q=n.TEXTURE0+j-1:Q=tt);let mt=st[Q];mt===void 0&&(mt={type:void 0,texture:void 0},st[Q]=mt),(mt.type!==A||mt.texture!==nt)&&(tt!==Q&&(n.activeTexture(Q),tt=Q),n.bindTexture(A,nt||Mt[A]),mt.type=A,mt.texture=nt)}function ft(){const A=st[tt];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ot(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function kt(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ot(A){K.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function R(A){ht.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ht.copy(A))}function rt(A,nt){let Q=h.get(nt);Q===void 0&&(Q=new WeakMap,h.set(nt,Q));let mt=Q.get(A);mt===void 0&&(mt=n.getUniformBlockIndex(nt,A.name),Q.set(A,mt))}function lt(A,nt){const mt=h.get(nt).get(A);u.get(nt)!==mt&&(n.uniformBlockBinding(nt,mt,A.__bindingPointIndex),u.set(nt,mt))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},tt=null,st={},m={},v=new WeakMap,_=[],p=null,f=!1,y=null,b=null,w=null,T=null,C=null,S=null,D=null,U=new Qt(0,0,0),g=0,P=!1,H=null,$=null,L=null,B=null,N=null,K.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pt,disable:Xt,bindFramebuffer:Rt,drawBuffers:O,useProgram:Ee,setBlending:_t,setMaterial:se,setFlipSided:Lt,setCullFace:M,setLineWidth:x,setPolygonOffset:k,setScissorTest:it,activeTexture:Z,bindTexture:et,unbindTexture:ft,compressedTexImage2D:ot,compressedTexImage3D:dt,texImage2D:gt,texImage3D:ct,updateUBOMapping:rt,uniformBlockBinding:lt,texStorage2D:kt,texStorage3D:At,texSubImage2D:Et,texSubImage3D:Dt,compressedTexSubImage2D:J,compressedTexSubImage3D:Kt,scissor:Ot,viewport:R,reset:bt}}function ZT(n,t,e,i,r,s,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return m?new OffscreenCanvas(M,x):ia("canvas")}function _(M,x,k,it){let Z=1;if((M.width>it||M.height>it)&&(Z=it/Math.max(M.width,M.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const et=x?Co:Math.floor,ft=et(Z*M.width),ot=et(Z*M.height);h===void 0&&(h=v(ft,ot));const dt=k?v(ft,ot):h;return dt.width=ft,dt.height=ot,dt.getContext("2d").drawImage(M,0,0,ft,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ft+"x"+ot+")."),dt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Dc(M.width)&&Dc(M.height)}function f(M){return o?!1:M.wrapS!==Ln||M.wrapT!==Ln||M.minFilter!==Xe&&M.minFilter!==Ze}function y(M,x){return M.generateMipmaps&&x&&M.minFilter!==Xe&&M.minFilter!==Ze}function b(M){n.generateMipmap(M)}function w(M,x,k,it,Z=!1){if(o===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let et=x;if(x===n.RED&&(k===n.FLOAT&&(et=n.R32F),k===n.HALF_FLOAT&&(et=n.R16F),k===n.UNSIGNED_BYTE&&(et=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(et=n.R8UI),k===n.UNSIGNED_SHORT&&(et=n.R16UI),k===n.UNSIGNED_INT&&(et=n.R32UI),k===n.BYTE&&(et=n.R8I),k===n.SHORT&&(et=n.R16I),k===n.INT&&(et=n.R32I)),x===n.RG&&(k===n.FLOAT&&(et=n.RG32F),k===n.HALF_FLOAT&&(et=n.RG16F),k===n.UNSIGNED_BYTE&&(et=n.RG8)),x===n.RGBA){const ft=Z?Eo:Jt.getTransfer(it);k===n.FLOAT&&(et=n.RGBA32F),k===n.HALF_FLOAT&&(et=n.RGBA16F),k===n.UNSIGNED_BYTE&&(et=ft===ae?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(M,x,k){return y(M,k)===!0||M.isFramebufferTexture&&M.minFilter!==Xe&&M.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function C(M){return M===Xe||M===Bh||M===Ls?n.NEAREST:n.LINEAR}function S(M){const x=M.target;x.removeEventListener("dispose",S),U(x),x.isVideoTexture&&u.delete(x)}function D(M){const x=M.target;x.removeEventListener("dispose",D),P(x)}function U(M){const x=i.get(M);if(x.__webglInit===void 0)return;const k=M.source,it=d.get(k);if(it){const Z=it[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&g(M),Object.keys(it).length===0&&d.delete(k)}i.remove(M)}function g(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const k=M.source,it=d.get(k);delete it[x.__cacheKey],a.memory.textures--}function P(M){const x=M.texture,k=i.get(M),it=i.get(x);if(it.__webglTexture!==void 0&&(n.deleteTexture(it.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(k.__webglFramebuffer[Z]))for(let et=0;et<k.__webglFramebuffer[Z].length;et++)n.deleteFramebuffer(k.__webglFramebuffer[Z][et]);else n.deleteFramebuffer(k.__webglFramebuffer[Z]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Z])}else{if(Array.isArray(k.__webglFramebuffer))for(let Z=0;Z<k.__webglFramebuffer.length;Z++)n.deleteFramebuffer(k.__webglFramebuffer[Z]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Z=0;Z<k.__webglColorRenderbuffer.length;Z++)k.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Z]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,et=x.length;Z<et;Z++){const ft=i.get(x[Z]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(M)}let H=0;function $(){H=0}function L(){const M=H;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),H+=1,M}function B(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function N(M,x){const k=i.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const it=M.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,M,x);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function j(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function X(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,x);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function q(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){ht(k,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const Y={[Pc]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Rc]:n.MIRRORED_REPEAT},tt={[Xe]:n.NEAREST,[Bh]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},st={[Ry]:n.NEVER,[Ny]:n.ALWAYS,[Ly]:n.LESS,[Um]:n.LEQUAL,[Dy]:n.EQUAL,[Uy]:n.GEQUAL,[Iy]:n.GREATER,[Oy]:n.NOTEQUAL};function St(M,x,k){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===pl||x.magFilter===Ls||x.magFilter===ir||x.minFilter===Ze||x.minFilter===pl||x.minFilter===Ls||x.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(n.texParameteri(M,n.TEXTURE_WRAP_S,Y[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Y[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Y[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,tt[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,tt[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Ln||x.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,C(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==Xe&&x.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Xe||x.minFilter!==Ls&&x.minFilter!==ir||x.type===ii&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===ea&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function G(M,x){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",S));const it=x.source;let Z=d.get(it);Z===void 0&&(Z={},d.set(it,Z));const et=B(x);if(et!==M.__cacheKey){Z[et]===void 0&&(Z[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[et].usedTimes++;const ft=Z[M.__cacheKey];ft!==void 0&&(Z[M.__cacheKey].usedTimes--,ft.usedTimes===0&&g(x)),M.__cacheKey=et,M.__webglTexture=Z[et].texture}return k}function K(M,x,k){let it=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=n.TEXTURE_3D);const Z=G(M,x),et=x.source;e.bindTexture(it,M.__webglTexture,n.TEXTURE0+k);const ft=i.get(et);if(et.version!==ft.__version||Z===!0){e.activeTexture(n.TEXTURE0+k);const ot=Jt.getPrimaries(Jt.workingColorSpace),dt=x.colorSpace===En?null:Jt.getPrimaries(x.colorSpace),Et=x.colorSpace===En||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Dt=f(x)&&p(x.image)===!1;let J=_(x.image,Dt,!1,r.maxTextureSize);J=Lt(x,J);const Kt=p(J)||o,kt=s.convert(x.format,x.colorSpace);let At=s.convert(x.type),gt=w(x.internalFormat,kt,At,x.colorSpace,x.isVideoTexture);St(it,x,Kt);let ct;const Ot=x.mipmaps,R=o&&x.isVideoTexture!==!0&&gt!==Im,rt=ft.__version===void 0||Z===!0,lt=et.dataReady,bt=T(x,J,Kt);if(x.isDepthTexture)gt=n.DEPTH_COMPONENT,o?x.type===ii?gt=n.DEPTH_COMPONENT32F:x.type===Ai?gt=n.DEPTH_COMPONENT24:x.type===lr?gt=n.DEPTH24_STENCIL8:gt=n.DEPTH_COMPONENT16:x.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===cr&&gt===n.DEPTH_COMPONENT&&x.type!==mu&&x.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ai,At=s.convert(x.type)),x.format===ps&&gt===n.DEPTH_COMPONENT&&(gt=n.DEPTH_STENCIL,x.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=lr,At=s.convert(x.type))),rt&&(R?e.texStorage2D(n.TEXTURE_2D,1,gt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,gt,J.width,J.height,0,kt,At,null));else if(x.isDataTexture)if(Ot.length>0&&Kt){R&&rt&&e.texStorage2D(n.TEXTURE_2D,bt,gt,Ot[0].width,Ot[0].height);for(let A=0,nt=Ot.length;A<nt;A++)ct=Ot[A],R?lt&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,ct.width,ct.height,kt,At,ct.data):e.texImage2D(n.TEXTURE_2D,A,gt,ct.width,ct.height,0,kt,At,ct.data);x.generateMipmaps=!1}else R?(rt&&e.texStorage2D(n.TEXTURE_2D,bt,gt,J.width,J.height),lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,kt,At,J.data)):e.texImage2D(n.TEXTURE_2D,0,gt,J.width,J.height,0,kt,At,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,gt,Ot[0].width,Ot[0].height,J.depth);for(let A=0,nt=Ot.length;A<nt;A++)ct=Ot[A],x.format!==Dn?kt!==null?R?lt&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,A,0,0,0,ct.width,ct.height,J.depth,kt,ct.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,A,gt,ct.width,ct.height,J.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,A,0,0,0,ct.width,ct.height,J.depth,kt,At,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,A,gt,ct.width,ct.height,J.depth,0,kt,At,ct.data)}else{R&&rt&&e.texStorage2D(n.TEXTURE_2D,bt,gt,Ot[0].width,Ot[0].height);for(let A=0,nt=Ot.length;A<nt;A++)ct=Ot[A],x.format!==Dn?kt!==null?R?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,A,0,0,ct.width,ct.height,kt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,A,gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?lt&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,ct.width,ct.height,kt,At,ct.data):e.texImage2D(n.TEXTURE_2D,A,gt,ct.width,ct.height,0,kt,At,ct.data)}else if(x.isDataArrayTexture)R?(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,gt,J.width,J.height,J.depth),lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,kt,At,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,J.width,J.height,J.depth,0,kt,At,J.data);else if(x.isData3DTexture)R?(rt&&e.texStorage3D(n.TEXTURE_3D,bt,gt,J.width,J.height,J.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,kt,At,J.data)):e.texImage3D(n.TEXTURE_3D,0,gt,J.width,J.height,J.depth,0,kt,At,J.data);else if(x.isFramebufferTexture){if(rt)if(R)e.texStorage2D(n.TEXTURE_2D,bt,gt,J.width,J.height);else{let A=J.width,nt=J.height;for(let Q=0;Q<bt;Q++)e.texImage2D(n.TEXTURE_2D,Q,gt,A,nt,0,kt,At,null),A>>=1,nt>>=1}}else if(Ot.length>0&&Kt){R&&rt&&e.texStorage2D(n.TEXTURE_2D,bt,gt,Ot[0].width,Ot[0].height);for(let A=0,nt=Ot.length;A<nt;A++)ct=Ot[A],R?lt&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,kt,At,ct):e.texImage2D(n.TEXTURE_2D,A,gt,kt,At,ct);x.generateMipmaps=!1}else R?(rt&&e.texStorage2D(n.TEXTURE_2D,bt,gt,J.width,J.height),lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,kt,At,J)):e.texImage2D(n.TEXTURE_2D,0,gt,kt,At,J);y(x,Kt)&&b(it),ft.__version=et.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ht(M,x,k){if(x.image.length!==6)return;const it=G(M,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+k);const et=i.get(Z);if(Z.version!==et.__version||it===!0){e.activeTexture(n.TEXTURE0+k);const ft=Jt.getPrimaries(Jt.workingColorSpace),ot=x.colorSpace===En?null:Jt.getPrimaries(x.colorSpace),dt=x.colorSpace===En||ft===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,J=[];for(let A=0;A<6;A++)!Et&&!Dt?J[A]=_(x.image[A],!1,!0,r.maxCubemapSize):J[A]=Dt?x.image[A].image:x.image[A],J[A]=Lt(x,J[A]);const Kt=J[0],kt=p(Kt)||o,At=s.convert(x.format,x.colorSpace),gt=s.convert(x.type),ct=w(x.internalFormat,At,gt,x.colorSpace),Ot=o&&x.isVideoTexture!==!0,R=et.__version===void 0||it===!0,rt=Z.dataReady;let lt=T(x,Kt,kt);St(n.TEXTURE_CUBE_MAP,x,kt);let bt;if(Et){Ot&&R&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ct,Kt.width,Kt.height);for(let A=0;A<6;A++){bt=J[A].mipmaps;for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];x.format!==Dn?At!==null?Ot?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,Q.width,Q.height,At,Q.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,ct,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,Q.width,Q.height,At,gt,Q.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,ct,Q.width,Q.height,0,At,gt,Q.data)}}}else{bt=x.mipmaps,Ot&&R&&(bt.length>0&&lt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ct,J[0].width,J[0].height));for(let A=0;A<6;A++)if(Dt){Ot?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,J[A].width,J[A].height,At,gt,J[A].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ct,J[A].width,J[A].height,0,At,gt,J[A].data);for(let nt=0;nt<bt.length;nt++){const mt=bt[nt].image[A].image;Ot?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,mt.width,mt.height,At,gt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,ct,mt.width,mt.height,0,At,gt,mt.data)}}else{Ot?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,At,gt,J[A]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ct,At,gt,J[A]);for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];Ot?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,At,gt,Q.image[A]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,ct,At,gt,Q.image[A])}}}y(x,kt)&&b(n.TEXTURE_CUBE_MAP),et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function wt(M,x,k,it,Z,et){const ft=s.convert(k.format,k.colorSpace),ot=s.convert(k.type),dt=w(k.internalFormat,ft,ot,k.colorSpace);if(!i.get(x).__hasExternalTextures){const Dt=Math.max(1,x.width>>et),J=Math.max(1,x.height>>et);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,et,dt,Dt,J,x.depth,0,ft,ot,null):e.texImage2D(Z,et,dt,Dt,J,0,ft,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),_t(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Z,i.get(k).__webglTexture,0,Ct(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,Z,i.get(k).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(M,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let it=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||_t(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ii?it=n.DEPTH_COMPONENT32F:Z.type===Ai&&(it=n.DEPTH_COMPONENT24));const et=Ct(x);_t(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,it,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,it,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,it,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const it=Ct(x);k&&_t(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,x.width,x.height):_t(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const it=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<it.length;Z++){const et=it[Z],ft=s.convert(et.format,et.colorSpace),ot=s.convert(et.type),dt=w(et.internalFormat,ft,ot,et.colorSpace),Et=Ct(x);k&&_t(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,dt,x.width,x.height):_t(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,dt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,dt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const it=i.get(x.depthTexture).__webglTexture,Z=Ct(x);if(x.depthTexture.format===cr)_t(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(x.depthTexture.format===ps)_t(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Xt(M){const x=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,M)}else if(k){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]=n.createRenderbuffer(),Mt(x.__webglDepthbuffer[it],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Mt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(M,x,k){const it=i.get(M);x!==void 0&&wt(it.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Xt(M)}function O(M){const x=M.texture,k=i.get(M),it=i.get(x);M.addEventListener("dispose",D),M.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=x.version,a.memory.textures++);const Z=M.isWebGLCubeRenderTarget===!0,et=M.isWebGLMultipleRenderTargets===!0,ft=p(M)||o;if(Z){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let dt=0;dt<x.mipmaps.length;dt++)k.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else k.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)k.__webglFramebuffer[ot]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(et)if(r.drawBuffers){const ot=M.texture;for(let dt=0,Et=ot.length;dt<Et;dt++){const Dt=i.get(ot[dt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&_t(M)===!1){const ot=et?x:[x];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<ot.length;dt++){const Et=ot[dt];k.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const Dt=s.convert(Et.format,Et.colorSpace),J=s.convert(Et.type),Kt=w(Et.internalFormat,Dt,J,Et.colorSpace,M.isXRRenderTarget===!0),kt=Ct(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Kt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(k.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),St(n.TEXTURE_CUBE_MAP,x,ft);for(let ot=0;ot<6;ot++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)wt(k.__webglFramebuffer[ot][dt],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else wt(k.__webglFramebuffer[ot],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);y(x,ft)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ot=M.texture;for(let dt=0,Et=ot.length;dt<Et;dt++){const Dt=ot[dt],J=i.get(Dt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),St(n.TEXTURE_2D,Dt,ft),wt(k.__webglFramebuffer,M,Dt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),y(Dt,ft)&&b(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ot=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,it.__webglTexture),St(ot,x,ft),o&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)wt(k.__webglFramebuffer[dt],M,x,n.COLOR_ATTACHMENT0,ot,dt);else wt(k.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,ot,0);y(x,ft)&&b(ot),e.unbindTexture()}M.depthBuffer&&Xt(M)}function Ee(M){const x=p(M)||o,k=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let it=0,Z=k.length;it<Z;it++){const et=k[it];if(y(et,x)){const ft=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ot=i.get(et).__webglTexture;e.bindTexture(ft,ot),b(ft),e.unbindTexture()}}}function xt(M){if(o&&M.samples>0&&_t(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],k=M.width,it=M.height;let Z=n.COLOR_BUFFER_BIT;const et=[],ft=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(M),dt=M.isWebGLMultipleRenderTargets===!0;if(dt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){et.push(n.COLOR_ATTACHMENT0+Et),M.depthBuffer&&et.push(ft);const Dt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Dt===!1&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),dt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[Et]),Dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ft]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ft])),dt){const J=i.get(x[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,k,it,0,0,k,it,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,ot.__webglColorRenderbuffer[Et]);const Dt=i.get(x[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ct(M){return Math.min(r.maxSamples,M.samples)}function _t(M){const x=i.get(M);return o&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(M){const x=a.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function Lt(M,x){const k=M.colorSpace,it=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Lc||k!==ci&&k!==En&&(Jt.getTransfer(k)===ae?o===!1?t.has("EXT_sRGB")===!0&&it===Dn?(M.format=Lc,M.minFilter=Ze,M.generateMipmaps=!1):x=Fm.sRGBToLinear(x):(it!==Dn||Z!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=N,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_t}function JT(n,t,e){const i=e.isWebGL2;function r(s,a=En){let o;const l=Jt.getTransfer(a);if(s===Oi)return n.UNSIGNED_BYTE;if(s===Am)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Pm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gy)return n.BYTE;if(s===by)return n.SHORT;if(s===mu)return n.UNSIGNED_SHORT;if(s===Cm)return n.INT;if(s===Ai)return n.UNSIGNED_INT;if(s===ii)return n.FLOAT;if(s===ea)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===xy)return n.ALPHA;if(s===Dn)return n.RGBA;if(s===yy)return n.LUMINANCE;if(s===wy)return n.LUMINANCE_ALPHA;if(s===cr)return n.DEPTH_COMPONENT;if(s===ps)return n.DEPTH_STENCIL;if(s===Lc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ey)return n.RED;if(s===Rm)return n.RED_INTEGER;if(s===Sy)return n.RG;if(s===Lm)return n.RG_INTEGER;if(s===Dm)return n.RGBA_INTEGER;if(s===fl||s===ml||s===_l||s===vl)if(l===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===fl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_l)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===zh||s===Gh||s===Hh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Im)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===Xh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wh)return l===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$h||s===jh||s===qh||s===Yh||s===Kh||s===Zh||s===Jh||s===Qh||s===td||s===ed||s===nd||s===id||s===rd||s===sd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$h)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===td)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ed)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===id)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gl||s===ad||s===od)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===gl)return l===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ad)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===od)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===My||s===ld||s===cd||s===ud)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===gl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ld)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ud)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class QT extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ja extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ui({extensions:{fragDepth:!0},vertexShader:eC,fragmentShader:nC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new ma(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class rC extends yr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,v=null;const _=new iC,p=e.getContextAttributes();let f=null,y=null;const b=[],w=[],T=new Nt;let C=null;const S=new wn;S.layers.enable(1),S.viewport=new Ie;const D=new wn;D.layers.enable(2),D.viewport=new Ie;const U=[S,D],g=new QT;g.layers.enable(1),g.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=b[G];return K===void 0&&(K=new zl,b[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=b[G];return K===void 0&&(K=new zl,b[G]=K),K.getGripSpace()},this.getHand=function(G){let K=b[G];return K===void 0&&(K=new zl,b[G]=K),K.getHandSpace()};function $(G){const K=w.indexOf(G.inputSource);if(K===-1)return;const ht=b[K];ht!==void 0&&(ht.update(G.inputSource,G.frame,c||a),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",B);for(let G=0;G<b.length;G++){const K=w[G];K!==null&&(w[G]=null,b[G].disconnect(K))}P=null,H=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,r=null,y=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",L),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new mr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ht=null,wt=null;p.depth&&(wt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?ps:cr,ht=p.stencil?lr:Ai);const Mt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Mt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new mr(d.textureWidth,d.textureHeight,{format:Dn,type:Oi,depthTexture:new Zm(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const pt=t.properties.get(y);pt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),St.setContext(r),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(G){for(let K=0;K<G.removed.length;K++){const ht=G.removed[K],wt=w.indexOf(ht);wt>=0&&(w[wt]=null,b[wt].disconnect(ht))}for(let K=0;K<G.added.length;K++){const ht=G.added[K];let wt=w.indexOf(ht);if(wt===-1){for(let pt=0;pt<b.length;pt++)if(pt>=w.length){w.push(ht),wt=pt;break}else if(w[pt]===null){w[pt]=ht,wt=pt;break}if(wt===-1)break}const Mt=b[wt];Mt&&Mt.connect(ht)}}const N=new F,j=new F;function X(G,K,ht){N.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);const wt=N.distanceTo(j),Mt=K.projectionMatrix.elements,pt=ht.projectionMatrix.elements,Xt=Mt[14]/(Mt[10]-1),Rt=Mt[14]/(Mt[10]+1),O=(Mt[9]+1)/Mt[5],Ee=(Mt[9]-1)/Mt[5],xt=(Mt[8]-1)/Mt[0],Ct=(pt[8]+1)/pt[0],_t=Xt*xt,se=Xt*Ct,Lt=wt/(-xt+Ct),M=Lt*-xt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(M),G.translateZ(Lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const x=Xt+Lt,k=Rt+Lt,it=_t-M,Z=se+(wt-M),et=O*Rt/k*x,ft=Ee*Rt/k*x;G.projectionMatrix.makePerspective(it,Z,et,ft,x,k),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),g.near=D.near=S.near=G.near,g.far=D.far=S.far=G.far,(P!==g.near||H!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),P=g.near,H=g.far,S.near=P,S.far=H,D.near=P,D.far=H,S.updateProjectionMatrix(),D.updateProjectionMatrix(),G.updateProjectionMatrix());const K=G.parent,ht=g.cameras;q(g,K);for(let wt=0;wt<ht.length;wt++)q(ht[wt],K);ht.length===2?X(g,S,D):g.projectionMatrix.copy(S.projectionMatrix),Y(G,g,K)};function Y(G,K,ht){ht===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=na*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let tt=null;function st(G,K){if(u=K.getViewerPose(c||a),v=K,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let wt=!1;ht.length!==g.cameras.length&&(g.cameras.length=0,wt=!0);for(let pt=0;pt<ht.length;pt++){const Xt=ht[pt];let Rt=null;if(m!==null)Rt=m.getViewport(Xt);else{const Ee=h.getViewSubImage(d,Xt);Rt=Ee.viewport,pt===0&&(t.setRenderTargetTextures(y,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(y))}let O=U[pt];O===void 0&&(O=new wn,O.layers.enable(pt),O.viewport=new Ie,U[pt]=O),O.matrix.fromArray(Xt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Xt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(g.matrix.copy(O.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),wt===!0&&g.cameras.push(O)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const pt=h.getDepthInformation(ht[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,r.renderState)}}for(let ht=0;ht<b.length;ht++){const wt=w[ht],Mt=b[ht];wt!==null&&Mt!==void 0&&Mt.update(wt,K,c||a)}_.render(t,g),tt&&tt(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const St=new Km;St.setAnimationLoop(st),this.setAnimationLoop=function(G){tt=G},this.dispose=function(){}}}function sC(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,$m(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,b,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===rn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===rn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aC(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,b){const w=b.program;i.uniformBlockBinding(y,w)}function c(y,b){let w=r[y.id];w===void 0&&(v(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",p));const T=b.program;i.updateUBOMapping(y,T);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const b=h();y.__bindingPointIndex=b;const w=n.createBuffer(),T=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=r[y.id],w=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,S=w.length;C<S;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let U=0,g=D.length;U<g;U++){const P=D[U];if(m(P,C,U,T)===!0){const H=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let B=0;B<$.length;B++){const N=$[B],j=_(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,H+L,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,b,w,T){const C=y.value,S=b+"_"+w;if(T[S]===void 0)return typeof C=="number"||typeof C=="boolean"?T[S]=C:T[S]=C.clone(),!0;{const D=T[S];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[S]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(y){const b=y.uniforms;let w=0;const T=16;for(let S=0,D=b.length;S<D;S++){const U=Array.isArray(b[S])?b[S]:[b[S]];for(let g=0,P=U.length;g<P;g++){const H=U[g],$=Array.isArray(H.value)?H.value:[H.value];for(let L=0,B=$.length;L<B;L++){const N=$[L],j=_(N),X=w%T;X!==0&&T-X<j.boundary&&(w+=T-X),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=j.storage}}}const C=w%T;return C>0&&(w+=T-C),y.__size=w,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class i_{constructor(t={}){const{canvas:e=Jy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const b=this;let w=!1,T=0,C=0,S=null,D=-1,U=null;const g=new Ie,P=new Ie;let H=null;const $=new Qt(0);let L=0,B=e.width,N=e.height,j=1,X=null,q=null;const Y=new Ie(0,0,B,N),tt=new Ie(0,0,B,N);let st=!1;const St=new Ym;let G=!1,K=!1,ht=null;const wt=new Oe,Mt=new Nt,pt=new F,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return S===null?j:1}let O=i;function Ee(E,I){for(let z=0;z<E.length;z++){const W=E[z],V=e.getContext(W,I);if(V!==null)return V}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fu}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",A,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&I.shift(),O=Ee(I,E),O===null)throw Ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xt,Ct,_t,se,Lt,M,x,k,it,Z,et,ft,ot,dt,Et,Dt,J,Kt,kt,At,gt,ct,Ot,R;function rt(){xt=new pM(O),Ct=new aM(O,xt,t),xt.init(Ct),ct=new JT(O,xt,Ct),_t=new KT(O,xt,Ct),se=new _M(O),Lt=new NT,M=new ZT(O,xt,_t,Lt,Ct,ct,se),x=new lM(b),k=new dM(b),it=new Ew(O,Ct),Ot=new rM(O,xt,it,Ct),Z=new fM(O,it,se,Ot),et=new xM(O,Z,it,se),kt=new bM(O,Ct,M),Dt=new oM(Lt),ft=new UT(b,x,k,xt,Ct,Ot,Dt),ot=new sC(b,Lt),dt=new kT,Et=new WT(xt,Ct),Kt=new iM(b,x,k,_t,et,d,l),J=new YT(b,et,Ct),R=new aC(O,se,Ct,_t),At=new sM(O,xt,se,Ct),gt=new mM(O,xt,se,Ct),se.programs=ft.programs,b.capabilities=Ct,b.extensions=xt,b.properties=Lt,b.renderLists=dt,b.shadowMap=J,b.state=_t,b.info=se}rt();const lt=new rC(b,O);this.xr=lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(B,N,!1))},this.getSize=function(E){return E.set(B,N)},this.setSize=function(E,I,z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,N=I,e.width=Math.floor(E*j),e.height=Math.floor(I*j),z===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(B*j,N*j).floor()},this.setDrawingBufferSize=function(E,I,z){B=E,N=I,j=z,e.width=Math.floor(E*z),e.height=Math.floor(I*z),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,I,z,W){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,I,z,W),_t.viewport(g.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,I,z,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,I,z,W),_t.scissor(P.copy(tt).multiplyScalar(j).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){_t.setScissorTest(st=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(E=!0,I=!0,z=!0){let W=0;if(E){let V=!1;if(S!==null){const ut=S.texture.format;V=ut===Dm||ut===Lm||ut===Rm}if(V){const ut=S.texture.type,vt=ut===Oi||ut===Ai||ut===mu||ut===lr||ut===Am||ut===Pm,Tt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),Bt=Tt.r,It=Tt.g,Ut=Tt.b;vt?(m[0]=Bt,m[1]=It,m[2]=Ut,m[3]=Pt,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Bt,v[1]=It,v[2]=Ut,v[3]=Pt,O.clearBufferiv(O.COLOR,0,v))}else W|=O.COLOR_BUFFER_BIT}I&&(W|=O.DEPTH_BUFFER_BIT),z&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",A,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),Et.dispose(),Lt.dispose(),x.dispose(),k.dispose(),et.dispose(),Ot.dispose(),R.dispose(),ft.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Le),lt.removeEventListener("sessionend",qt),ht&&(ht.dispose(),ht=null),ve.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=se.autoReset,I=J.enabled,z=J.autoUpdate,W=J.needsUpdate,V=J.type;rt(),se.autoReset=E,J.enabled=I,J.autoUpdate=z,J.needsUpdate=W,J.type=V}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const I=E.target;I.removeEventListener("dispose",Q),mt(I)}function mt(E){yt(E),Lt.remove(E)}function yt(E){const I=Lt.get(E).programs;I!==void 0&&(I.forEach(function(z){ft.releaseProgram(z)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,z,W,V,ut){I===null&&(I=Xt);const vt=V.isMesh&&V.matrixWorld.determinant()<0,Tt=Rv(E,I,z,W,V);_t.setMaterial(W,vt);let Pt=z.index,Bt=1;if(W.wireframe===!0){if(Pt=Z.getWireframeAttribute(z),Pt===void 0)return;Bt=2}const It=z.drawRange,Ut=z.attributes.position;let ge=It.start*Bt,on=(It.start+It.count)*Bt;ut!==null&&(ge=Math.max(ge,ut.start*Bt),on=Math.min(on,(ut.start+ut.count)*Bt)),Pt!==null?(ge=Math.max(ge,0),on=Math.min(on,Pt.count)):Ut!=null&&(ge=Math.max(ge,0),on=Math.min(on,Ut.count));const Ce=on-ge;if(Ce<0||Ce===1/0)return;Ot.setup(V,W,Tt,z,Pt);let jn,ue=At;if(Pt!==null&&(jn=it.get(Pt),ue=gt,ue.setIndex(jn)),V.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Rt()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(V.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),_t.setLineWidth(zt*Rt()),V.isLineSegments?ue.setMode(O.LINES):V.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else V.isPoints?ue.setMode(O.POINTS):V.isSprite&&ue.setMode(O.TRIANGLES);if(V.isBatchedMesh)ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ue.renderInstances(ge,Ce,V.count);else if(z.isInstancedBufferGeometry){const zt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,tl=Math.min(z.instanceCount,zt);ue.renderInstances(ge,Ce,tl)}else ue.render(ge,Ce)};function jt(E,I,z){E.transparent===!0&&E.side===Nn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,Ca(E,I,z),E.side=ki,E.needsUpdate=!0,Ca(E,I,z),E.side=Nn):Ca(E,I,z)}this.compile=function(E,I,z=null){z===null&&(z=E),p=Et.get(z),p.init(),y.push(p),z.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(b._useLegacyLights);const W=new Set;return E.traverse(function(V){const ut=V.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const Tt=ut[vt];jt(Tt,z,V),W.add(Tt)}else jt(ut,z,V),W.add(ut)}),y.pop(),p=null,W},this.compileAsync=function(E,I,z=null){const W=this.compile(E,I,z);return new Promise(V=>{function ut(){if(W.forEach(function(vt){Lt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){V(E);return}setTimeout(ut,10)}xt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ht=null;function ee(E){Ht&&Ht(E)}function Le(){ve.stop()}function qt(){ve.start()}const ve=new Km;ve.setAnimationLoop(ee),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(E){Ht=E,lt.setAnimationLoop(E),E===null?ve.stop():ve.start()},lt.addEventListener("sessionstart",Le),lt.addEventListener("sessionend",qt),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(I),I=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,I,S),p=Et.get(E,y.length),p.init(),y.push(p),wt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),St.setFromProjectionMatrix(wt),K=this.localClippingEnabled,G=Dt.init(this.clippingPlanes,K),_=dt.get(E,f.length),_.init(),f.push(_),Ge(E,I,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(X,q),this.info.render.frame++,G===!0&&Dt.beginShadows();const z=p.state.shadowsArray;if(J.render(z,E,I),G===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1)&&Kt.render(_,E),p.setupLights(b._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let V=0,ut=W.length;V<ut;V++){const vt=W[V];eh(_,E,vt,vt.viewport)}}else eh(_,E,I);S!==null&&(M.updateMultisampleRenderTarget(S),M.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(b,E,I),Ot.resetDefaultState(),D=-1,U=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ge(E,I,z,W){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||St.intersectsSprite(E)){W&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const vt=et.update(E),Tt=E.material;Tt.visible&&_.push(E,vt,Tt,z,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||St.intersectsObject(E))){const vt=et.update(E),Tt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),pt.copy(vt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(Tt)){const Pt=vt.groups;for(let Bt=0,It=Pt.length;Bt<It;Bt++){const Ut=Pt[Bt],ge=Tt[Ut.materialIndex];ge&&ge.visible&&_.push(E,vt,ge,z,pt.z,Ut)}}else Tt.visible&&_.push(E,vt,Tt,z,pt.z,null)}}const ut=E.children;for(let vt=0,Tt=ut.length;vt<Tt;vt++)Ge(ut[vt],I,z,W)}function eh(E,I,z,W){const V=E.opaque,ut=E.transmissive,vt=E.transparent;p.setupLightsView(z),G===!0&&Dt.setGlobalState(b.clippingPlanes,z),ut.length>0&&Pv(V,ut,I,z),W&&_t.viewport(g.copy(W)),V.length>0&&Ta(V,I,z),ut.length>0&&Ta(ut,I,z),vt.length>0&&Ta(vt,I,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Pv(E,I,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ut=Ct.isWebGL2;ht===null&&(ht=new mr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ea:Oi,minFilter:ir,samples:ut?4:0})),b.getDrawingBufferSize(Mt),ut?ht.setSize(Mt.x,Mt.y):ht.setSize(Co(Mt.x),Co(Mt.y));const vt=b.getRenderTarget();b.setRenderTarget(ht),b.getClearColor($),L=b.getClearAlpha(),L<1&&b.setClearColor(16777215,.5),b.clear();const Tt=b.toneMapping;b.toneMapping=Ii,Ta(E,z,W),M.updateMultisampleRenderTarget(ht),M.updateRenderTargetMipmap(ht);let Pt=!1;for(let Bt=0,It=I.length;Bt<It;Bt++){const Ut=I[Bt],ge=Ut.object,on=Ut.geometry,Ce=Ut.material,jn=Ut.group;if(Ce.side===Nn&&ge.layers.test(W.layers)){const ue=Ce.side;Ce.side=rn,Ce.needsUpdate=!0,nh(ge,z,W,on,Ce,jn),Ce.side=ue,Ce.needsUpdate=!0,Pt=!0}}Pt===!0&&(M.updateMultisampleRenderTarget(ht),M.updateRenderTargetMipmap(ht)),b.setRenderTarget(vt),b.setClearColor($,L),b.toneMapping=Tt}function Ta(E,I,z){const W=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ut=E.length;V<ut;V++){const vt=E[V],Tt=vt.object,Pt=vt.geometry,Bt=W===null?vt.material:W,It=vt.group;Tt.layers.test(z.layers)&&nh(Tt,I,z,Pt,Bt,It)}}function nh(E,I,z,W,V,ut){E.onBeforeRender(b,I,z,W,V,ut),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,I,z,W,E,ut),V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,b.renderBufferDirect(z,I,W,V,E,ut),V.side=ki,V.needsUpdate=!0,b.renderBufferDirect(z,I,W,V,E,ut),V.side=Nn):b.renderBufferDirect(z,I,W,V,E,ut),E.onAfterRender(b,I,z,W,V,ut)}function Ca(E,I,z){I.isScene!==!0&&(I=Xt);const W=Lt.get(E),V=p.state.lights,ut=p.state.shadowsArray,vt=V.state.version,Tt=ft.getParameters(E,V.state,ut,I,z),Pt=ft.getProgramCacheKey(Tt);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(E.isMeshStandardMaterial?k:x).get(E.envMap||W.environment),Bt===void 0&&(E.addEventListener("dispose",Q),Bt=new Map,W.programs=Bt);let It=Bt.get(Pt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===vt)return rh(E,Tt),It}else Tt.uniforms=ft.getUniforms(E),E.onBuild(z,Tt,b),E.onBeforeCompile(Tt,b),It=ft.acquireProgram(Tt,Pt),Bt.set(Pt,It),W.uniforms=Tt.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=Dt.uniform),rh(E,Tt),W.needsLights=Dv(E),W.lightsStateVersion=vt,W.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function ih(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=lo.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function rh(E,I){const z=Lt.get(E);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Rv(E,I,z,W,V){I.isScene!==!0&&(I=Xt),M.resetTextureUnits();const ut=I.fog,vt=W.isMeshStandardMaterial?I.environment:null,Tt=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ci,Pt=(W.isMeshStandardMaterial?k:x).get(W.envMap||vt),Bt=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!z.morphAttributes.position,ge=!!z.morphAttributes.normal,on=!!z.morphAttributes.color;let Ce=Ii;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ce=b.toneMapping);const jn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=jn!==void 0?jn.length:0,zt=Lt.get(W),tl=p.state.lights;if(G===!0&&(K===!0||E!==U)){const gn=E===U&&W.id===D;Dt.setState(W,E,gn)}let fe=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==tl.state.version||zt.outputColorSpace!==Tt||V.isBatchedMesh&&zt.batching===!1||!V.isBatchedMesh&&zt.batching===!0||V.isInstancedMesh&&zt.instancing===!1||!V.isInstancedMesh&&zt.instancing===!0||V.isSkinnedMesh&&zt.skinning===!1||!V.isSkinnedMesh&&zt.skinning===!0||V.isInstancedMesh&&zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&zt.instancingColor===!1&&V.instanceColor!==null||zt.envMap!==Pt||W.fog===!0&&zt.fog!==ut||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Dt.numPlanes||zt.numIntersection!==Dt.numIntersection)||zt.vertexAlphas!==Bt||zt.vertexTangents!==It||zt.morphTargets!==Ut||zt.morphNormals!==ge||zt.morphColors!==on||zt.toneMapping!==Ce||Ct.isWebGL2===!0&&zt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,zt.__version=W.version);let zi=zt.currentProgram;fe===!0&&(zi=Ca(W,I,V));let sh=!1,As=!1,el=!1;const Ue=zi.getUniforms(),Gi=zt.uniforms;if(_t.useProgram(zi.program)&&(sh=!0,As=!0,el=!0),W.id!==D&&(D=W.id,As=!0),sh||U!==E){Ue.setValue(O,"projectionMatrix",E.projectionMatrix),Ue.setValue(O,"viewMatrix",E.matrixWorldInverse);const gn=Ue.map.cameraPosition;gn!==void 0&&gn.setValue(O,pt.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&Ue.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ue.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,As=!0,el=!0)}if(V.isSkinnedMesh){Ue.setOptional(O,V,"bindMatrix"),Ue.setOptional(O,V,"bindMatrixInverse");const gn=V.skeleton;gn&&(Ct.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ue.setValue(O,"boneTexture",gn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ue.setOptional(O,V,"batchingTexture"),Ue.setValue(O,"batchingTexture",V._matricesTexture,M));const nl=z.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0&&Ct.isWebGL2===!0)&&kt.update(V,z,zi),(As||zt.receiveShadow!==V.receiveShadow)&&(zt.receiveShadow=V.receiveShadow,Ue.setValue(O,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gi.envMap.value=Pt,Gi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),As&&(Ue.setValue(O,"toneMappingExposure",b.toneMappingExposure),zt.needsLights&&Lv(Gi,el),ut&&W.fog===!0&&ot.refreshFogUniforms(Gi,ut),ot.refreshMaterialUniforms(Gi,W,j,N,ht),lo.upload(O,ih(zt),Gi,M)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lo.upload(O,ih(zt),Gi,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ue.setValue(O,"center",V.center),Ue.setValue(O,"modelViewMatrix",V.modelViewMatrix),Ue.setValue(O,"normalMatrix",V.normalMatrix),Ue.setValue(O,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let il=0,Iv=gn.length;il<Iv;il++)if(Ct.isWebGL2){const ah=gn[il];R.update(ah,zi),R.bind(ah,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function Lv(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Dv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,I,z){Lt.get(E.texture).__webglTexture=I,Lt.get(E.depthTexture).__webglTexture=z;const W=Lt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const z=Lt.get(E);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,z=0){S=E,T=I,C=z;let W=!0,V=null,ut=!1,vt=!1;if(E){const Pt=Lt.get(E);Pt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?M.setupRenderTarget(E):Pt.__hasExternalTextures&&M.rebindTextures(E,Lt.get(E.texture).__webglTexture,Lt.get(E.depthTexture).__webglTexture);const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(vt=!0);const It=Lt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[I])?V=It[I][z]:V=It[I],ut=!0):Ct.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?V=Lt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?V=It[z]:V=It,g.copy(E.viewport),P.copy(E.scissor),H=E.scissorTest}else g.copy(Y).multiplyScalar(j).floor(),P.copy(tt).multiplyScalar(j).floor(),H=st;if(_t.bindFramebuffer(O.FRAMEBUFFER,V)&&Ct.drawBuffers&&W&&_t.drawBuffers(E,V),_t.viewport(g),_t.scissor(P),_t.setScissorTest(H),ut){const Pt=Lt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,z)}else if(vt){const Pt=Lt.get(E.texture),Bt=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,z||0,Bt)}D=-1},this.readRenderTargetPixels=function(E,I,z,W,V,ut,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){_t.bindFramebuffer(O.FRAMEBUFFER,Tt);try{const Pt=E.texture,Bt=Pt.format,It=Pt.type;if(Bt!==Dn&&ct.convert(Bt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=It===ea&&(xt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&xt.has("EXT_color_buffer_float"));if(It!==Oi&&ct.convert(It)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===ii&&(Ct.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-W&&z>=0&&z<=E.height-V&&O.readPixels(I,z,W,V,ct.convert(Bt),ct.convert(It),ut)}finally{const Pt=S!==null?Lt.get(S).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,I,z=0){const W=Math.pow(2,-z),V=Math.floor(I.image.width*W),ut=Math.floor(I.image.height*W);M.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,V,ut),_t.unbindTexture()},this.copyTextureToTexture=function(E,I,z,W=0){const V=I.image.width,ut=I.image.height,vt=ct.convert(z.format),Tt=ct.convert(z.type);M.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,E.x,E.y,V,ut,vt,Tt,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,vt,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,E.x,E.y,vt,Tt,I.image),W===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,I,z,W,V=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=E.max.x-E.min.x+1,vt=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,Pt=ct.convert(W.format),Bt=ct.convert(W.type);let It;if(W.isData3DTexture)M.setTexture3D(W,0),It=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)M.setTexture2DArray(W,0),It=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),Ce=O.getParameter(O.UNPACK_SKIP_ROWS),jn=O.getParameter(O.UNPACK_SKIP_IMAGES),ue=z.isCompressedTexture?z.mipmaps[V]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(It,V,I.x,I.y,I.z,ut,vt,Tt,Pt,Bt,ue.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(It,V,I.x,I.y,I.z,ut,vt,Tt,Pt,ue.data)):O.texSubImage3D(It,V,I.x,I.y,I.z,ut,vt,Tt,Pt,Bt,ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ce),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jn),V===0&&W.generateMipmaps&&O.generateMipmap(It),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){T=0,C=0,S=null,_t.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_u?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Vo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?ur:Om}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ur?De:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class oC extends i_{}oC.prototype.isWebGL1Renderer=!0;class lC extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}const ep={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cC{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const uC=new cC;class xu{constructor(t){this.manager=t!==void 0?t:uC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xu.DEFAULT_MATERIAL_NAME="__DEFAULT";class hC extends xu{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ep.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ia("img");function l(){u(),ep.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class dC extends xu{constructor(t){super(t)}load(t,e,i,r){const s=new je,a=new hC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class pC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=np();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function np(){return(typeof performance>"u"?Date:performance).now()}class ip{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);/*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. */function re(n){return n==null}function yu(n){return n!==null&&typeof n=="object"}function Oc(n){return n!==null&&typeof n=="object"}function fC(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function vr(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],a=t[r];return Oc(s)&&Oc(a)?Object.assign(Object.assign({},i),{[r]:vr(s,a)}):Object.assign(Object.assign({},i),{[r]:r in t?a:s})},{})}function wu(n){return yu(n)?"target"in n:!1}const mC={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class me{static alreadyDisposed(){return new me({type:"alreadydisposed"})}static notBindable(){return new me({type:"notbindable"})}static notCompatible(t,e){return new me({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new me({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new me({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=mC[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class Ao{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!Ao.isBindable(i))throw me.notBindable();if(!(t in i))throw me.propertyNotFound(t);i[t]=e}}class we{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class _C{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new we,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class vC{constructor(t){this.emitter=new we,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class gC{constructor(t){this.emitter=new we,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function ce(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new vC(n):new _C(n,t)}function bC(n){return[new gC(n),(t,e)=>{n.setRawValue(t,e)}]}class Vt{constructor(t){this.emitter=new we,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:ce(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Vt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class _a{constructor(t){this.values=Vt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class xC{constructor(t){this.values=Vt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return re(i)||(r=Math.max(r,i)),re(e)||(r=Math.min(r,e)),r}}class yC{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class wC{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const EC={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class SC{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=EC[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const MC={"+":n=>n,"-":n=>-n,"~":n=>~n};class TC{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=MC[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Eu(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function ra(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function CC(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function sa(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function AC(n,t){const e=sa(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=sa(n,t);return r===""?"":i+r}function Su(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=AC(n,t);return i===""?"":e+i}function r_(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=CC(n,t);return t+=i.length,i===""?"":i+sa(n,t)}function PC(n,t){const e=r_(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=sa(n,t);return t+=r.length,e+i+r+Su(n,t)}function RC(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=sa(n,t);return t+=i.length,i===""?"":e+i+Su(n,t)}function LC(n,t){const e=r_(n,t);return t+=e.length,e===""?"":e+Su(n,t)}const DC=Eu([PC,RC,LC]);function IC(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function OC(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=IC(n,t);return i===""?"":e+i}function UC(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function NC(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=UC(n,t);return i===""?"":e+i}function FC(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function kC(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=FC(n,t);return i===""?"":e+i}const BC=Eu([OC,NC,kC]),VC=Eu([BC,DC]);function zC(n,t){const e=VC(n,t);return t+=e.length,e===""?null:{evaluable:new wC(e),cursor:t}}function GC(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=a_(n,t);if(!i)return null;t=i.cursor,t+=ra(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function HC(n,t){var e;return(e=zC(n,t))!==null&&e!==void 0?e:GC(n,t)}function s_(n,t){const e=HC(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=s_(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new TC(i,r.evaluable)}):null}function WC(n,t,e){e+=ra(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=ra(t,e).length,{cursor:e,operator:i}):null}function XC(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const a=WC(t,e,i);if(!a)break;i=a.cursor;const o=n(e,i);if(!o)return null;i=o.cursor,s=new SC(a.operator,s,o.evaluable)}return s?{cursor:i,evaluable:s}:null}}const $C=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>XC(n,t),s_);function a_(n,t){return t+=ra(n,t).length,$C(n,t)}function jC(n){const t=a_(n,0);return!t||t.cursor+ra(n,t.cursor).length!==n.length?null:t.evaluable}function hi(n){var t;const e=jC(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function o_(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=hi(n);if(!re(t))return t}return 0}function qC(n){return String(n)}function an(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function Zt(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function rp(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Se(n,t,e){return Math.min(Math.max(n,t),e)}function l_(n,t){return(n%t+t)%t}function YC(n,t){return re(n.step)?Math.max(rp(t),2):rp(n.step)}function c_(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function u_(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function h_(n,t){return re(n.step)?null:new yC(n.step,t)}function d_(n){return!re(n.max)&&!re(n.min)?new _a({max:n.max,min:n.min}):!re(n.max)||!re(n.min)?new xC({max:n.max,min:n.min}):null}function p_(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:an(YC(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:c_(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:u_(n,t)}}function f_(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Mu(n){return{constraint:n.constraint,textProps:Vt.fromObject(p_(n.params,n.initialValue))}}class Er{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Wo{constructor(t){this.target=t}}class va extends Wo{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class KC extends Wo{constructor(t,e){super(t),this.expanded=e}}class ZC extends Wo{constructor(t,e){super(t),this.index=e}}class JC extends Wo{constructor(t,e){super(t),this.native=e}}class aa extends Er{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new we,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new va(this,e.binding.target.read(),t.options.last))}}class QC{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new we}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function tA(n){if(!("binding"in n))return!1;const t=n.binding;return wu(t)&&"read"in t&&"write"in t}function eA(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const a=t[s],o=a(n[s]);return o.succeeded?Object.assign(Object.assign({},r),{[s]:o.value}):void 0},{});return i}function nA(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function iA(n){return n===null?!1:typeof n=="object"}function Qn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function sp(n){return{custom:t=>Qn(t)(n),boolean:Qn(t=>typeof t=="boolean"?t:void 0)(n),number:Qn(t=>typeof t=="number"?t:void 0)(n),string:Qn(t=>typeof t=="string"?t:void 0)(n),function:Qn(t=>typeof t=="function"?t:void 0)(n),constant:t=>Qn(e=>e===t?t:void 0)(n),raw:Qn(t=>t)(n),object:t=>Qn(e=>{if(iA(e))return eA(e,t)})(n),array:t=>Qn(e=>{if(Array.isArray(e))return nA(e,t)})(n)}}const Uc={optional:sp(!0),required:sp(!1)};function pe(n,t){const e=t(Uc),i=Uc.required.object(e)(n);return i.succeeded?i.value:void 0}function _n(n,t,e,i){if(t&&!t(n))return!1;const r=pe(n,e);return r?i(r):!1}function vn(n,t){var e;return vr((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function dr(n){return"value"in n}function m_(n){if(!yu(n)||!("binding"in n))return!1;const t=n.binding;return wu(t)}const Vn="http://www.w3.org/2000/svg";function Po(n){n.offsetHeight}function rA(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Tu(n){return n.ontouchstart!==void 0}function sA(){return globalThis}function aA(){return sA().document}function oA(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const lA={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Xo(n,t){const e=n.createElementNS(Vn,"svg");return e.innerHTML=lA[t],e}function __(n,t,e){n.insertBefore(t,n.children[e])}function Cu(n){n.parentElement&&n.parentElement.removeChild(n)}function v_(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function cA(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function g_(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function ai(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function Wn(n,t,e){ai(n.value(t),e)}const uA="tp";function $t(n){return(e,i)=>[uA,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const Ns=$t("lbl");function hA(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class b_{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ns()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ns("l")),Wn(e.props,"label",s=>{re(s)?this.element.classList.add(Ns(void 0,"nol")):(this.element.classList.remove(Ns(void 0,"nol")),cA(i),i.appendChild(hA(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Ns("v")),this.element.appendChild(r),this.valueElement=r}}class x_{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new b_(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return _n(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return vn(null,{label:this.props.get("label")})}}function dA(){return["veryfirst","first","last","verylast"]}const ap=$t(""),op={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class $o{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{dA().forEach(i=>{e.classList.remove(ap(void 0,op[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(ap(void 0,op[i]))})}),this.viewProps.handleDispose(()=>{Cu(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return _n(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return vn(null,Object.assign({},this.viewProps.exportState()))}}class gr extends $o{constructor(t,e){if(e.value!==e.valueController.value)throw me.shouldNeverHappen();const i=e.valueController.viewProps,r=new x_(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new b_(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return _n(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return vn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function lp(n){const t=Object.assign({},n);return delete t.value,t}class y_ extends gr{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return _n(t,e=>super.importState(lp(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return vn(()=>lp(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function pA(n){return dr(n)&&m_(n.value)}class fA extends y_{importState(t){return _n(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function mA(n){return dr(n)&&tA(n.value)}function w_(n,t){for(;n.length<t;)n.push(void 0)}function _A(n){const t=[];return w_(t,n),t}function vA(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function gA(n,t){const e=[...vA(n),t];return e.length>n.length?e.splice(0,e.length-n.length):w_(e,n.length),e}class bA{constructor(t){this.emitter=new we,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=ce(_A(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=gA(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function xA(n){if(!("binding"in n))return!1;const t=n.binding;return wu(t)&&"read"in t&&!("write"in t)}class yA extends y_{exportState(){return vn(()=>super.exportState(),{binding:{readonly:!0}})}}function wA(n){return dr(n)&&xA(n.value)}class EA extends Er{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new JC(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function SA(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function gs(n,t){return e=>{SA(n,t,e)}}function Au(n,t){ai(n,e=>{t.textContent=e??""})}const Gl=$t("btn");class MA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Gl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Gl("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Gl("t")),Au(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class TA{constructor(t,e){this.emitter=new we,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new MA(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return _n(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return vn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class cp extends $o{constructor(t,e){const i=new TA(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new x_(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return _n(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return vn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class E_{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const bs=new E_("2.0.3");function Ye(n){return Object.assign({core:bs},n)}const CA=Ye({id:"button",type:"blade",accept(n){const t=pe(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new cp(n.document,{blade:n.blade,buttonProps:Vt.fromObject({title:n.params.title}),labelProps:Vt.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof cp?new EA(n.controller):null}});function AA(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function PA(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function RA(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function LA(n){return yu(n)?"refresh"in n&&typeof n.refresh=="function":!1}function DA(n,t){if(!Ao.isBindable(n))throw me.notBindable();return new Ao(n,t)}class IA{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new we,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,a=this.pool_.createBinding(s,DA(t,e),r),o=this.pool_.createBindingApi(a);return this.add(o,r.index)}addFolder(t){return PA(this,t)}addButton(t){return AA(this,t)}addTab(t){return RA(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{LA(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=m_(e.value)?e.value.binding:null;this.emitter_.emit("change",new va(i,r?r.target.read():e.value.rawValue,t.options.last))}}class Pu extends Er{constructor(t,e){super(t),this.rackApi_=new IA(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Ru extends $o{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return _n(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return vn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Nc(n){return"rackController"in n}class OA{constructor(t){this.emitter=new we,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw me.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function UA(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(dr(i)&&i.value===t)return i}return null}function NA(n){return Nc(n)?n.rackController.rack.bcSet_:null}class FA{constructor(t){var e,i;this.emitter=new we,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new OA(NA),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),dr(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Nc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(dr(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Nc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=UA(this.find(dr),t.sender);if(!e)throw me.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Lu{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new FA({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&__(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Cu(t.bladeController.view.element)}}function xs(){return new Vt({positions:ce([],{equals:fC})})}class ga extends Vt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Vt.createCore(e);return new ga(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!re(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};Wn(this,"expanded",i),Wn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function kA(n,t){let e=0;return rA(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Po(t),e=t.clientHeight,n.set("temporaryExpanded",null),Po(t)}),e}function up(n,t){t.style.height=n.styleHeight}function Du(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),re(n.get("expandedHeight"))){const e=kA(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Po(t)}),n.emitter.on("change",()=>{up(n,t)}),up(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class S_ extends Pu{constructor(t,e){super(t,e),this.emitter_=new we,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new KC(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const M_=$t("cnt");class BA{constructor(t,e){var i;this.className_=$t((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),M_()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Wn(this.foldable_,"completed",gs(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),Wn(e.props,"title",c=>{re(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const a=t.createElement("div");a.classList.add(this.className_("t")),Au(e.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;const o=t.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Fc extends Ru{constructor(t,e){var i;const r=ga.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new BA(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Lu({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,Du(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return _n(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return vn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const VA=Ye({id:"folder",type:"blade",accept(n){const t=pe(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Fc(n.document,{blade:n.blade,expanded:n.params.expanded,props:Vt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Fc?new S_(n.controller,n.pool):null}}),zA=$t("");function hp(n,t){return gs(n,zA(void 0,t))}class fi extends Vt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=bC(ce(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new fi(Vt.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){ai(this.globalDisabled_,hp(t,"disabled")),Wn(this,"hidden",hp(t,"hidden"))}bindDisabled(t){ai(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){ai(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const dp=$t("tbp");class GA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(dp()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(dp("c")),this.element.appendChild(i),this.containerElement=i}}const Fs=$t("tbi");class HA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Fs()),e.viewProps.bindClassModifiers(this.element),Wn(e.props,"selected",s=>{s?this.element.classList.add(Fs(void 0,"sel")):this.element.classList.remove(Fs(void 0,"sel"))});const i=t.createElement("button");i.classList.add(Fs("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Fs("t")),Au(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class WA{constructor(t,e){this.emitter=new we,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new HA(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class kc extends Ru{constructor(t,e){const i=new GA(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Lu({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new WA(t,{props:e.itemProps,viewProps:fi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,Wn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return _n(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return vn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class XA extends Pu{constructor(t,e){super(t,e),this.emitter_=new we,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new kc(e,{blade:xs(),itemProps:Vt.fromObject({selected:!1,title:t.title}),props:Vt.fromObject({selected:!1}),viewProps:fi.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new ZC(this,t.rawValue))}}class $A extends Pu{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const pp=-1;class jA{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ce(!0),this.selectedIndex=ce(pp),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=pp,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const ks=$t("tab");class qA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ks(),M_()),e.viewProps.bindClassModifiers(this.element),ai(e.empty,gs(this.element,ks(void 0,"nop")));const i=t.createElement("div");i.classList.add(ks("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(ks("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(ks("c")),this.element.appendChild(s),this.contentsElement=s}}class fp extends Ru{constructor(t,e){const i=new jA,r=new qA(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Lu({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;__(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Cu(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const T_=Ye({id:"tab",type:"blade",accept(n){const t=pe(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new fp(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new kc(n.document,{blade:xs(),itemProps:Vt.fromObject({selected:!1,title:e.title}),props:Vt.fromObject({selected:!1}),viewProps:fi.create()});t.add(i)}),t},api(n){return n.controller instanceof fp?new XA(n.controller,n.pool):n.controller instanceof kc?new $A(n.controller,n.pool):null}});function YA(n,t){const e=n.accept(t.params);if(!e)return null;const i=pe(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:xs(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:fi.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class Iu extends aa{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class KA{constructor(){this.disabled=!1,this.emitter=new we}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ZA{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new we,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ba{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function Ro(n,t){if(n instanceof t)return n;if(n instanceof ba){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class xa{constructor(t){this.values=Vt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function ya(n){var t;const e=Uc;if(Array.isArray(n))return(t=pe({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function Ou(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function Uu(n){return re(n)?null:new xa(Ou(n))}const Hl=$t("lst");class JA{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Hl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Hl("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Hl("m")),r.appendChild(Xo(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,Wn(this.props_,"options",s=>{v_(this.selectElement),s.forEach(a=>{const o=t.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Bi{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new JA(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return _n(t,null,e=>({options:e.required.custom(ya)}),e=>(this.props.set("options",Ou(e.options)),!0))}exportProps(){return vn(null,{options:this.props.get("options")})}}const mp=$t("pop");class QA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(mp()),e.viewProps.bindClassModifiers(this.element),ai(e.shows,gs(this.element,mp(void 0,"v")))}}class C_{constructor(t,e){this.shows=ce(!1),this.viewProps=e.viewProps,this.view=new QA(t,{shows:this.shows,viewProps:this.viewProps})}}const _p=$t("txt");class t1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(_p()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(_p("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class oa{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new t1(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);re(r)||(this.value.rawValue=r),this.view.refresh()}}function e1(n){return String(n)}function A_(n){return n==="false"?!1:!!n}function vp(n){return e1(n)}function n1(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const i1=an(0);function Lo(n){return i1(n)+"%"}function P_(n){return String(n)}function Bc(n){return n}function ys({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(a){r||(r=!0,a(),r=!1)}n.emitter.on("change",a=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),t.emitter.on("change",a=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),a.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Je(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function la(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function di(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function r1(n){return n==="ArrowUp"||n==="ArrowDown"}function R_(n){return r1(n)||n==="ArrowLeft"||n==="ArrowRight"}function Wl(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Sr{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new we,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Wl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Wl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Wl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const xn=$t("txt");class s1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(xn(),xn(void 0,"num")),e.arrayPosition&&this.element.classList.add(xn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(xn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xn()),this.inputElement.classList.add(xn("i"));const r=t.createElement("div");r.classList.add(xn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(Vn,"svg");s.classList.add(xn("g")),this.knobElement.appendChild(s);const a=t.createElementNS(Vn,"path");a.classList.add(xn("gb")),s.appendChild(a),this.guideBodyElem_=a;const o=t.createElementNS(Vn,"path");o.classList.add(xn("gh")),s.appendChild(o),this.guideHeadElem_=o;const l=t.createElement("div");l.classList.add($t("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(xn(void 0,"drg"));return}this.element.classList.add(xn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=Se(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class wa{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=ce(null),this.view=new s1(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Sr(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let a=t;return r!==void 0&&(a=Math.max(a,r)),s!==void 0&&(a=Math.min(a,s)),a}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);re(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Je(this.props.get("keyScale"),la(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Je(this.props.get("keyScale"),la(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Xl=$t("sld");class a1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Xl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Xl("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Xl("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=Se(Zt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class o1{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new a1(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Sr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Zt(Se(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Je(this.props.get("keyScale"),di(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Je(this.props.get("keyScale"),di(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $l=$t("sldtxt");class l1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add($l());const i=t.createElement("div");i.classList.add($l("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add($l("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Do{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new o1(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new wa(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new l1(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return _n(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return vn(null,{max:t.get("max"),min:t.get("min")})}}function L_(n){return{sliderProps:new Vt({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Vt({formatter:ce(n.formatter),keyScale:n.keyScale,pointerScale:ce(n.pointerScale)})}}const c1={containerUnitSize:"cnt-usz"};function D_(n){return`--${c1[n]}`}function ca(n){return f_(n)}function Pi(n){if(Oc(n))return pe(n,ca)}function si(n,t){if(!n)return;const e=[],i=h_(n,t);i&&e.push(i);const r=d_(n);return r&&e.push(r),new ba(e)}function u1(n){return n?n.major===bs.major:!1}function I_(n){if(n==="inline"||n==="popup")return n}function Ea(n,t){n.write(t)}const Qa=$t("ckb");class h1{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Qa()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(Qa("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(Qa("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(Qa("w")),this.labelElement.appendChild(s);const a=Xo(t,"check");s.appendChild(a),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class d1{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new h1(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function p1(n){const t=[],e=Uu(n.options);return e&&t.push(e),new ba(t)}const f1=Ye({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=pe(t,i=>({options:i.optional.custom(ya),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>A_,constraint:n=>p1(n.params),writer:n=>Ea},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ro(i,xa);return r?new Bi(t,{props:new Vt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new d1(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof Bi?new Iu(n.controller):null}}),Yi=$t("col");class m1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Yi()),e.foldable.bindExpandedClass(this.element,Yi(void 0,"expanded")),Wn(e.foldable,"completed",gs(this.element,Yi(void 0,"cpl")));const i=t.createElement("div");i.classList.add(Yi("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Yi("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(Yi("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Yi("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}function _1(n,t,e){const i=Se(n/255,0,1),r=Se(t/255,0,1),s=Se(e/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0,u=0;const h=(o+a)/2;return l!==0&&(u=l/(1-Math.abs(a+o-1)),i===a?c=(r-s)/l:r===a?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function v1(n,t,e){const i=(n%360+360)%360,r=Se(t/100,0,1),s=Se(e/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c,u,h;return i>=0&&i<60?[c,u,h]=[a,o,0]:i>=60&&i<120?[c,u,h]=[o,a,0]:i>=120&&i<180?[c,u,h]=[0,a,o]:i>=180&&i<240?[c,u,h]=[0,o,a]:i>=240&&i<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function g1(n,t,e){const i=Se(n/255,0,1),r=Se(t/255,0,1),s=Se(e/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c;l===0?c=0:a===i?c=60*(((r-s)/l%6+6)%6):a===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=a===0?0:l/a,h=a;return[c,u*100,h*100]}function O_(n,t,e){const i=l_(n,360),r=Se(t/100,0,1),s=Se(e/100,0,1),a=s*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a;let c,u,h;return i>=0&&i<60?[c,u,h]=[a,o,0]:i>=60&&i<120?[c,u,h]=[o,a,0]:i>=120&&i<180?[c,u,h]=[0,a,o]:i>=180&&i<240?[c,u,h]=[0,o,a]:i>=240&&i<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function b1(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function x1(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function Xn(n){return[n[0],n[1],n[2]]}function jo(n,t){return[n[0],n[1],n[2],t]}const y1={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:b1,rgb:v1},hsv:{hsl:x1,hsv:(n,t,e)=>[n,t,e],rgb:O_},rgb:{hsl:_1,hsv:g1,rgb:(n,t,e)=>[n,t,e]}};function ms(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function w1(n,t){return n===t?t:l_(n,t)}function U_(n,t,e){var i;const r=ms(t,e);return[t==="rgb"?Se(n[0],0,r[0]):w1(n[0],r[0]),Se(n[1],0,r[1]),Se(n[2],0,r[2]),Se((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function gp(n,t,e,i){const r=ms(t,e),s=ms(t,i);return n.map((a,o)=>a/r[o]*s[o])}function N_(n,t,e){const i=gp(n,t.mode,t.type,"int"),r=y1[t.mode][e.mode](...i);return gp(r,e.mode,"int",e.type)}class Yt{static black(){return new Yt([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=U_(t,e,this.type)}getComponents(t){return jo(N_(Xn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const yi=$t("colp");class E1{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(yi()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(yi("hsv"));const r=t.createElement("div");r.classList.add(yi("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(yi("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const a=t.createElement("div");if(a.classList.add(yi("rgb")),this.textsView_=e.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const o=t.createElement("div");o.classList.add(yi("a"));const l=t.createElement("div");l.classList.add(yi("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);const c=t.createElement("div");c.classList.add(yi("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function S1(n){return n==="int"?"int":n==="float"?"float":void 0}function Nu(n){return pe(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(S1)}),expanded:t.optional.boolean,picker:t.optional.custom(I_),readonly:t.optional.constant(!1)}))}function br(n){return n?.1:1}function F_(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class Fu{constructor(t,e){this.type="float",this.mode=e,this.comps_=U_(t,e,this.type)}getComponents(t){return jo(N_(Xn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const M1={int:(n,t)=>new Yt(n,t),float:(n,t)=>new Fu(n,t)};function ku(n,t,e){return M1[e](n,t)}function T1(n){return n.type==="float"}function C1(n){return n.type==="int"}function A1(n){const t=n.getComponents(),e=ms(n.mode,"int");return new Yt([Math.round(Zt(t[0],0,1,0,e[0])),Math.round(Zt(t[1],0,1,0,e[1])),Math.round(Zt(t[2],0,1,0,e[2])),t[3]],n.mode)}function P1(n){const t=n.getComponents(),e=ms(n.mode,"int");return new Fu([Zt(t[0],0,e[0],0,1),Zt(t[1],0,e[1],0,1),Zt(t[2],0,e[2],0,1),t[3]],n.mode)}function qe(n,t){if(n.type===t)return n;if(C1(n)&&t==="float")return P1(n);if(T1(n)&&t==="int")return A1(n);throw me.shouldNeverHappen()}function R1(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Tn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const L1={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function k_(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return L1[i](e)}function B_(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Tn(t[1],255),Tn(t[2],255),Tn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function D1(n){const t=B_(n);return t?new Yt(t,"rgb"):null}function V_(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Tn(t[1],255),Tn(t[2],255),Tn(t[3],255),Tn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function I1(n){const t=V_(n);return t?new Yt(t,"rgb"):null}function z_(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[k_(t[1]),Tn(t[2],100),Tn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function O1(n){const t=z_(n);return t?new Yt(t,"hsl"):null}function G_(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[k_(t[1]),Tn(t[2],100),Tn(t[3],100),Tn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function U1(n){const t=G_(n);return t?new Yt(t,"hsl"):null}function H_(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function N1(n){const t=H_(n);return t?new Yt(t,"rgb"):null}function W_(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Zt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Zt(parseInt(e[4],16),0,255,0,1)]:null}function F1(n){const t=W_(n);return t?new Yt(t,"rgb"):null}function X_(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function bp(n){return t=>{const e=X_(t);return e?ku(e,"rgb",n):null}}function $_(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function xp(n){return t=>{const e=$_(t);return e?ku(e,"rgb",n):null}}const k1=[{parser:H_,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:W_,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:B_,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:V_,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:z_,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:G_,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:X_,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:$_,result:{alpha:!0,mode:"rgb",notation:"object"}}];function B1(n){return k1.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function V1(n,t="int"){const e=B1(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Sa(n){const t=[N1,F1,D1,I1,O1,U1];n==="int"&&t.push(bp("int"),xp("int")),n==="float"&&t.push(bp("float"),xp("float"));const e=n1(t);return i=>{const r=e(i);return r?qe(r,n):null}}function z1(n){const t=Sa("int");if(typeof n!="string")return Yt.black();const e=t(n);return e??Yt.black()}function j_(n){const t=Se(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function Bu(n,t="#"){const e=Xn(n.getComponents("rgb")).map(j_).join("");return`${t}${e}`}function Vu(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(j_).join("");return`${t}${i}`}function q_(n){const t=an(0),e=qe(n,"int");return`rgb(${Xn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function co(n){const t=an(2),e=an(0);return`rgba(${qe(n,"int").getComponents("rgb").map((s,a)=>(a===3?t:e)(s)).join(", ")})`}function G1(n){const t=[an(0),Lo,Lo],e=qe(n,"int");return`hsl(${Xn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function H1(n){const t=[an(0),Lo,Lo,an(2)];return`hsla(${qe(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function Y_(n,t){const e=an(t==="float"?2:0),i=["r","g","b"],r=qe(n,t);return`{${Xn(r.getComponents("rgb")).map((a,o)=>`${i[o]}: ${e(a)}`).join(", ")}}`}function W1(n){return t=>Y_(t,n)}function K_(n,t){const e=an(2),i=an(t==="float"?2:0),r=["r","g","b","a"];return`{${qe(n,t).getComponents("rgb").map((o,l)=>{const c=l===3?e:i;return`${r[l]}: ${c(o)}`}).join(", ")}}`}function X1(n){return t=>K_(t,n)}const $1=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Bu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Vu},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:q_},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:co},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:G1},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:H1},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:W1(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:X1(t)}],[])];function Z_(n){return $1.reduce((t,e)=>t||(R1(e.format,n)?e.stringifier:null),null)}const Bs=$t("apl");class j1{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Bs()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Bs("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Bs("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(Bs("m")),this.element.appendChild(s),this.markerElem_=s;const a=t.createElement("div");a.classList.add(Bs("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Yt([e[0],e[1],e[2],0],"rgb"),r=new Yt([e[0],e[1],e[2],255],"rgb"),s=["to right",co(i),co(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=co(t);const a=Zt(e[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}}class q1{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new j1(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Sr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Yt([s,a,o,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Je(br(!0),di(t));if(e===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new Yt([r,s,a,o+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Je(br(!0),di(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Wr=$t("coltxt");function Y1(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class K1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Wr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Wr("m")),this.modeElem_=Y1(t),this.modeElem_.classList.add(Wr("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(Wr("mm")),r.appendChild(Xo(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Wr("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),ai(e.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){v_(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(Wr("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Z1(n){return an(n==="float"?2:0)}function J1(n,t,e){const i=ms(n,t)[e];return new _a({min:0,max:i})}function Q1(n,t,e){return new wa(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",parser:t.parser,props:Vt.fromObject({formatter:Z1(t.colorType),keyScale:br(!1),pointerScale:t.colorType==="float"?.01:1}),value:ce(0,{constraint:J1(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function tP(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:hi,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=Q1(n,e,i);return ys({primary:t.value,secondary:r.value,forward(s){return qe(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,a){const o=t.colorMode,c=qe(s,t.colorType).getComponents(o);c[i]=a;const u=ku(jo(Xn(c),c[3]),o,t.colorType);return qe(u,"int")}}),r})}function eP(n,t){const e=new oa(n,{parser:Sa("int"),props:Vt.fromObject({formatter:Bu}),value:ce(Yt.black()),viewProps:t.viewProps});return ys({primary:t.value,secondary:e.value,forward:i=>new Yt(Xn(i.getComponents()),i.mode),backward:(i,r)=>new Yt(jo(Xn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function nP(n){return n!=="hex"}class iP{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=ce(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new K1(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return nP(e)?tP(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):eP(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const jl=$t("hpl");class rP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(jl()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(jl("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(jl("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=q_(new Yt([e,100,100],"hsv"));const i=Zt(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class sP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new rP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Sr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Zt(Se(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Yt([i,s,a,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Je(br(!1),di(t));if(e===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new Yt([r+e,s,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Je(br(!1),di(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ql=$t("svp"),yp=64;class aP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ql()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=yp,i.width=yp,i.classList.add(ql("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(ql("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=oA(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,a=t.getImageData(0,0,r,s),o=a.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=Zt(h,0,r,0,100),m=Zt(u,0,s,100,0),v=O_(i[0],d,m),_=(u*r+h)*4;o[_]=v[0],o[_+1]=v[1],o[_+2]=v[2],o[_+3]=255}t.putImageData(a,0,0);const l=Zt(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=Zt(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class oP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new aP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Sr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Zt(t.point.x,0,t.bounds.width,0,100),r=Zt(t.point.y,0,t.bounds.height,100,0),[s,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Yt([s,i,r,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){R_(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),a=br(!1),o=Je(a,di(t)),l=Je(a,la(t));o===0&&l===0||this.value.setRawValue(new Yt([e,i+o,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=br(!1),i=Je(e,di(t)),r=Je(e,la(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class lP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new sP(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new oP(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new q1(t,{value:this.value,viewProps:this.viewProps}),text:new wa(t,{parser:hi,props:Vt.fromObject({pointerScale:.01,keyScale:.1,formatter:an(2)}),value:ce(0,{constraint:new _a({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&ys({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Yt(s,i.mode)}}),this.textsC_=new iP(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new E1(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Yl=$t("colsw");class cP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Yl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Yl("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Yl("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Vu(t)}onValueChange_(){this.update_()}}class uP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new cP(t,{value:this.value,viewProps:this.viewProps})}}class zu{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=ga.create(e.expanded),this.swatchC_=new uP(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new oa(t,{parser:e.parser,props:Vt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new m1(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new C_(t,{viewProps:this.viewProps}):null;const r=new lP(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Du(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=g_(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Tu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function hP(n){return Xn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function dP(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function pP(n){return new Yt([n>>16&255,n>>8&255,n&255],"rgb")}function fP(n){return new Yt([n>>24&255,n>>16&255,n>>8&255,Zt(n&255,0,255,0,1)],"rgb")}function mP(n){return typeof n!="number"?Yt.black():pP(n)}function _P(n){return typeof n!="number"?Yt.black():fP(n)}function uo(n,t){return typeof n!="object"||re(n)?!1:t in n&&typeof n[t]=="number"}function J_(n){return uo(n,"r")&&uo(n,"g")&&uo(n,"b")}function Q_(n){return J_(n)&&uo(n,"a")}function tv(n){return J_(n)}function Gu(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function wp(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function vP(n){const t=Z_(n);return t?(e,i)=>{Ea(e,t(i))}:null}function gP(n){const t=n?dP:hP;return(e,i)=>{Ea(e,t(i))}}function bP(n,t,e){const r=qe(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function xP(n,t,e){const r=qe(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function yP(n,t){return(e,i)=>{n?bP(e,i,t):xP(e,i,t)}}function wP(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function EP(n){return n?t=>Vu(t,"0x"):t=>Bu(t,"0x")}function SP(n){return"color"in n||n.view==="color"}const MP=Ye({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!SP(t))return null;const e=Nu(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:wP(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?_P:mP,equals:Gu,writer:n=>gP(n.params.supportsAlpha)},controller:n=>{var t,e;return new zu(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:EP(n.params.supportsAlpha),parser:Sa("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function TP(n,t){if(!tv(n))return qe(Yt.black(),t);if(t==="int"){const e=wp(n);return new Yt(e,"rgb")}if(t==="float"){const e=wp(n);return new Fu(e,"rgb")}return qe(Yt.black(),"int")}function CP(n){return Q_(n)}function AP(n){return t=>{const e=TP(t,n);return qe(e,"int")}}function PP(n,t){return e=>n?K_(e,t):Y_(e,t)}const RP=Ye({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!tv(n))return null;const i=Nu(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=F_(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>AP(n.params.colorType),equals:Gu,writer:n=>yP(CP(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Q_(n.initialValue);return new zu(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:PP(i,n.params.colorType),parser:Sa("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),LP=Ye({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=V1(n,F_(t));if(!e)return null;const i=Z_(e);if(!i)return null;const r=Nu(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>z1,equals:Gu,writer:n=>{const t=vP(n.params.format);if(!t)throw me.notBindable();return t}},controller:n=>{var t,e;return new zu(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:Sa("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class Hu{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,a;return(a=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&a!==void 0?a:i});return this.asm_.fromComponents(e)}}const Ep=$t("pndtxt");class DP{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(Ep()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(Ep("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function IP(n,t,e){return new wa(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:ce(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class Wu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>IP(t,e,r)),this.acs_.forEach((i,r)=>{ys({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,a)=>{const o=e.assembly.toComponents(s);return o[r]=a,e.assembly.fromComponents(o)}})}),this.view=new DP(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class OP extends aa{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function UP(n,t){const e=[],i=h_(n,t);i&&e.push(i);const r=d_(n);r&&e.push(r);const s=Uu(n.options);return s&&e.push(s),new ba(e)}const NP=Ye({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=pe(t,i=>Object.assign(Object.assign({},f_(i)),{options:i.optional.custom(ya),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>o_,constraint:n=>UP(n.params,n.initialValue),writer:n=>Ea},controller:n=>{const t=n.value,e=n.constraint,i=e&&Ro(e,xa);if(i)return new Bi(n.document,{props:new Vt({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=p_(n.params,t.rawValue),s=e&&Ro(e,_a);return s?new Do(n.document,Object.assign(Object.assign({},L_(Object.assign(Object.assign({},r),{keyScale:ce(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:hi,value:t,viewProps:n.viewProps})):new wa(n.document,{parser:hi,props:Vt.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Do?new OP(n.controller):n.controller.valueController instanceof Bi?new Iu(n.controller):null}});class Ui{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(re(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const ev={toComponents:n=>n.getComponents(),fromComponents:n=>new Ui(...n)},Xr=$t("p2d");class FP{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xr()),e.viewProps.bindClassModifiers(this.element),ai(e.expanded,gs(this.element,Xr(void 0,"expanded")));const i=t.createElement("div");i.classList.add(Xr("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(Xr("b")),r.appendChild(Xo(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Xr("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Xr("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}const wi=$t("p2dp");class kP{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(wi()),e.layout==="popup"&&this.element.classList.add(wi(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(wi("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(Vn,"svg");r.classList.add(wi("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(Vn,"line");s.classList.add(wi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const a=t.createElementNS(Vn,"line");a.classList.add(wi("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);const o=t.createElementNS(Vn,"line");o.classList.add(wi("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const l=t.createElement("div");l.classList.add(wi("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=Zt(t,-i,+i,0,100),s=Zt(e,-i,+i,0,100),a=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Sp(n,t,e){return[Je(t[0],di(n)),Je(t[1],la(n))*(e?1:-1)]}class BP{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new kP(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Sr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=Zt(t.point.x,0,t.bounds.width,-i,+i),s=Zt(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Ui(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){R_(t.key)&&t.preventDefault();const[e,i]=Sp(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Ui(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=Sp(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class VP{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=ga.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new C_(t,{viewProps:this.viewProps}):null;const s=new BP(t,{layout:e.pickerLayout,props:new Vt({invertsY:ce(e.invertsY),max:ce(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new Wu(t,{assembly:ev,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new FP(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Du(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=g_(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!Tu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function zP(n){return Ui.isObject(n)?new Ui(n.x,n.y):new Ui}function GP(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function HP(n,t){return new Hu({assembly:ev,components:[si(Object.assign(Object.assign({},n),n.x),t.x),si(Object.assign(Object.assign({},n),n.y),t.y)]})}function Mp(n,t){var e,i;if(!re(n.min)||!re(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=c_(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function WP(n,t){var e,i;const r=Mp(vr(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=Mp(vr(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function XP(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const $P=Ye({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Ui.isObject(n))return null;const e=pe(t,i=>Object.assign(Object.assign({},ca(i)),{expanded:i.optional.boolean,picker:i.optional.custom(I_),readonly:i.optional.constant(!1),x:i.optional.custom(Pi),y:i.optional.object(Object.assign(Object.assign({},ca(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>zP,constraint:n=>HP(n.params,n.initialValue),equals:Ui.equals,writer:()=>GP},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,a=[n.params.x,n.params.y];return new VP(i,{axes:r.rawValue.getComponents().map((o,l)=>{var c;return Mu({constraint:s.components[l],initialValue:o,params:vr(n.params,(c=a[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:XP(n.params),max:WP(n.params,r.rawValue),parser:hi,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class is{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(re(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const nv={toComponents:n=>n.getComponents(),fromComponents:n=>new is(...n)};function jP(n){return is.isObject(n)?new is(n.x,n.y,n.z):new is}function qP(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function YP(n,t){return new Hu({assembly:nv,components:[si(Object.assign(Object.assign({},n),n.x),t.x),si(Object.assign(Object.assign({},n),n.y),t.y),si(Object.assign(Object.assign({},n),n.z),t.z)]})}const KP=Ye({id:"input-point3d",type:"input",accept:(n,t)=>{if(!is.isObject(n))return null;const e=pe(t,i=>Object.assign(Object.assign({},ca(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(Pi),y:i.optional.custom(Pi),z:i.optional.custom(Pi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>jP,constraint:n=>YP(n.params,n.initialValue),equals:is.equals,writer:n=>qP},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new Wu(n.document,{assembly:nv,axes:t.rawValue.getComponents().map((r,s)=>{var a;return Mu({constraint:e.components[s],initialValue:r,params:vr(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:hi,value:t,viewProps:n.viewProps})}});class rs{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(re(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const iv={toComponents:n=>n.getComponents(),fromComponents:n=>new rs(...n)};function ZP(n){return rs.isObject(n)?new rs(n.x,n.y,n.z,n.w):new rs}function JP(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function QP(n,t){return new Hu({assembly:iv,components:[si(Object.assign(Object.assign({},n),n.x),t.x),si(Object.assign(Object.assign({},n),n.y),t.y),si(Object.assign(Object.assign({},n),n.z),t.z),si(Object.assign(Object.assign({},n),n.w),t.w)]})}const tR=Ye({id:"input-point4d",type:"input",accept:(n,t)=>{if(!rs.isObject(n))return null;const e=pe(t,i=>Object.assign(Object.assign({},ca(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(Pi),x:i.optional.custom(Pi),y:i.optional.custom(Pi),z:i.optional.custom(Pi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ZP,constraint:n=>QP(n.params,n.initialValue),equals:rs.equals,writer:n=>JP},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new Wu(n.document,{assembly:iv,axes:t.rawValue.getComponents().map((r,s)=>{var a;return Mu({constraint:e.components[s],initialValue:r,params:vr(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:hi,value:t,viewProps:n.viewProps})}});function eR(n){const t=[],e=Uu(n.options);return e&&t.push(e),new ba(t)}const nR=Ye({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=pe(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(ya)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>P_,constraint:n=>eR(n.params),writer:n=>Ea},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ro(i,xa);return r?new Bi(t,{props:new Vt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new oa(t,{parser:s=>s,props:Vt.fromObject({formatter:Bc}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof Bi?new Iu(n.controller):null}}),Ma={monitor:{defaultInterval:200,defaultRows:3}},Tp=$t("mll");class iR{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Tp()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(Tp("i")),i.style.height=`calc(var(${D_("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class Xu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new iR(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const Cp=$t("sgl");class rR{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Cp()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Cp("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class $u{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new rR(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const sR=Ye({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=pe(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>A_},controller:n=>{var t;return n.value.rawValue.length===1?new $u(n.document,{formatter:vp,value:n.value,viewProps:n.viewProps}):new Xu(n.document,{formatter:vp,rows:(t=n.params.rows)!==null&&t!==void 0?t:Ma.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class aR extends aa{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Ei=$t("grl");class oR{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ei()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(Vn,"svg");i.classList.add(Ei("g")),i.style.height=`calc(var(${D_("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(Vn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(Ei("t"),$t("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),a=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const m=Zt(d,0,i,0,t),v=Zt(h,r,s,e,0);a.push([m,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));const o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(Ei("t","a"));return}const c=Zt(this.cursor_.rawValue,0,i,0,t),u=Zt(l,r,s,e,0);o.style.left=`${c}px`,o.style.top=`${u}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(Ei("t","a"))||(o.classList.add(Ei("t","a"),Ei("t","in")),Po(o),o.classList.remove(Ei("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class rv{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=ce(-1),this.view=new oR(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Tu(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Sr(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return _n(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return vn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Zt(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Zt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vc(n){return re(n.format)?an(2):n.format}function lR(n){var t;return n.value.rawValue.length===1?new $u(n.document,{formatter:Vc(n.params),value:n.value,viewProps:n.viewProps}):new Xu(n.document,{formatter:Vc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Ma.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function cR(n){var t,e,i;return new rv(n.document,{formatter:Vc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Ma.monitor.defaultRows,props:Vt.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function Ap(n){return n.view==="graph"}const uR=Ye({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=pe(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>Ap(n)?64:1,reader:n=>o_},controller:n=>Ap(n.params)?cR(n):lR(n),api:n=>n.controller.valueController instanceof rv?new aR(n.controller):null}),hR=Ye({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=pe(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>P_},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new Xu(n.document,{formatter:Bc,rows:(t=n.params.rows)!==null&&t!==void 0?t:Ma.monitor.defaultRows,value:e,viewProps:n.viewProps}):new $u(n.document,{formatter:Bc,value:e,viewProps:n.viewProps})}});class dR{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class pR{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function fR(n,t){var e;const i=n.accept(t.target.read(),t.params);if(re(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=pe(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),a=n.binding.reader(r),o=n.binding.constraint?n.binding.constraint(r):void 0,l=new pR({reader:a,target:t.target,writer:n.binding.writer(r)}),c=new QC(ce(a(i.initialValue),{constraint:o,equals:n.binding.equals}),l),u=n.controller({constraint:o,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:fi.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new fA(t.document,{blade:xs(),props:Vt.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class mR{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function _R(n,t){return t===0?new KA:new ZA(n,t??Ma.monitor.defaultInterval)}function vR(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(re(s))return null;const a={target:t.target,initialValue:s.initialValue,params:s.params},o=pe(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=n.binding.reader(a),c=(i=(e=o==null?void 0:o.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new bA({binding:new mR({reader:l,target:t.target}),bufferSize:c,ticker:_R(t.document,o==null?void 0:o.interval)}),h=n.controller({document:t.document,params:s.params,value:u,viewProps:fi.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new yA(t.document,{blade:xs(),props:Vt.fromObject({label:"label"in t.params?(r=o==null?void 0:o.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class gR{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!u1(e.core))throw me.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??fR(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??vR(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(re(r))throw new me({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const a=this.createMonitor_(t,e,i);if(a)return a;throw new me({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??YA(s,{document:t,params:e}),null);if(!i)throw new me({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new aa(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new aa(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(mA(t))return this.createInputBindingApi_(t);if(wA(t))return this.createMonitorBindingApi_(t);throw me.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(pA(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw me.shouldNeverHappen();return this.apiCache_.add(t,e)}}const bR=new dR;function xR(){const n=new gR(bR);return[$P,KP,tR,nR,NP,LP,RP,MP,f1,sR,hR,uR,CA,VA,T_].forEach(t=>{n.register("core",t)}),n}class yR extends Er{constructor(t){super(t),this.emitter_=new we,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new va(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class wR extends Er{}class ER extends Er{constructor(t){super(t),this.emitter_=new we,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new va(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class SR extends Er{constructor(t){super(t),this.emitter_=new we,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new va(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const MR=function(){return{id:"list",type:"blade",core:bs,accept(n){const t=pe(n,e=>({options:e.required.custom(ya),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new xa(Ou(n.params.options)),e=ce(n.params.value,{constraint:t}),i=new Bi(n.document,{props:new Vt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new gr(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof gr)||!(n.controller.valueController instanceof Bi)?null:new yR(n.controller)}}}();class TR extends S_{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class CR extends Fc{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const Pp=$t("spr");class AR{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Pp()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(Pp("r")),this.element.appendChild(i)}}class Rp extends $o{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new AR(t,{viewProps:e.viewProps})}))}}const PR={id:"separator",type:"blade",core:bs,accept(n){const t=pe(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new Rp(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Rp?new wR(n.controller):null}},RR={id:"slider",type:"blade",core:bs,accept(n){const t=pe(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new _a({max:n.params.max,min:n.params.min}),s=ce(i,{constraint:r}),a=new Do(n.document,Object.assign(Object.assign({},L_({formatter:(e=n.params.format)!==null&&e!==void 0?e:qC,keyScale:ce(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:u_(n.params,i)})),{parser:hi,value:s,viewProps:n.viewProps}));return new gr(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:s,valueController:a})},api(n){return!(n.controller instanceof gr)||!(n.controller.valueController instanceof Do)?null:new ER(n.controller)}},LR=function(){return{id:"text",type:"blade",core:bs,accept(n){const t=pe(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=ce(n.params.value),i=new oa(n.document,{parser:n.params.parse,props:Vt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new gr(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof gr)||!(n.controller.valueController instanceof oa)?null:new SR(n.controller)}}}();function DR(n){const t=n.createElement("div");return t.classList.add($t("dfw")()),n.body&&n.body.appendChild(t),t}function IR(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class OR extends TR{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:aA(),a=xR(),o=new CR(s,{expanded:r.expanded,blade:xs(),props:Vt.fromObject({title:r.title}),viewProps:fi.create()});super(o,a),this.pool_=a,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:DR(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw me.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw me.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&IR(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[MR,PR,RR,T_,LR]})}}new E_("4.0.3");const Lp={type:"change"},Kl={type:"start"},Dp={type:"end"},to=new Vm,Ip=new Si,UR=Math.cos(70*Zy.DEG2RAD);class NR extends yr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Et),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Et),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Lp),i.update(),s=r.NONE},this.update=function(){const R=new F,rt=new _r().setFromUnitVectors(t.up,new F(0,1,0)),lt=rt.clone().invert(),bt=new F,A=new _r,nt=new F,Q=2*Math.PI;return function(yt=null){const jt=i.object.position;R.copy(jt).sub(i.target),R.applyQuaternion(rt),o.setFromVector3(R),i.autoRotate&&s===r.NONE&&H(g(yt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ht=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(Ht)&&isFinite(ee)&&(Ht<-Math.PI?Ht+=Q:Ht>Math.PI&&(Ht-=Q),ee<-Math.PI?ee+=Q:ee>Math.PI&&(ee-=Q),Ht<=ee?o.theta=Math.max(Ht,Math.min(ee,o.theta)):o.theta=o.theta>(Ht+ee)/2?Math.max(Ht,o.theta):Math.min(ee,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(lt),jt.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Le=!1;if(i.zoomToCursor&&C){let qt=null;if(i.object.isPerspectiveCamera){const ve=R.length();qt=Y(ve*c);const Ge=ve-qt;i.object.position.addScaledVector(w,Ge),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ve=new F(T.x,T.y,0);ve.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Le=!0;const Ge=new F(T.x,T.y,0);Ge.unproject(i.object),i.object.position.sub(Ge).add(ve),i.object.updateMatrixWorld(),qt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qt).add(i.object.position):(to.origin.copy(i.object.position),to.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(to.direction))<UR?t.lookAt(i.target):(Ip.setFromNormalAndCoplanarPoint(i.object.up,i.target),to.intersectPlane(Ip,i.target))))}else i.object.isOrthographicCamera&&(Le=c!==1,Le&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix()));return c=1,C=!1,Le||bt.distanceToSquared(i.object.position)>a||8*(1-A.dot(i.object.quaternion))>a||nt.distanceToSquared(i.target)>0?(i.dispatchEvent(Lp),bt.copy(i.object.position),A.copy(i.object.quaternion),nt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Kt),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",et),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Et),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new ip,l=new ip;let c=1;const u=new F,h=new Nt,d=new Nt,m=new Nt,v=new Nt,_=new Nt,p=new Nt,f=new Nt,y=new Nt,b=new Nt,w=new F,T=new Nt;let C=!1;const S=[],D={};let U=!1;function g(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function P(R){const rt=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*rt)}function H(R){l.theta-=R}function $(R){l.phi-=R}const L=function(){const R=new F;return function(lt,bt){R.setFromMatrixColumn(bt,0),R.multiplyScalar(-lt),u.add(R)}}(),B=function(){const R=new F;return function(lt,bt){i.screenSpacePanning===!0?R.setFromMatrixColumn(bt,1):(R.setFromMatrixColumn(bt,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(lt),u.add(R)}}(),N=function(){const R=new F;return function(lt,bt){const A=i.domElement;if(i.object.isPerspectiveCamera){const nt=i.object.position;R.copy(nt).sub(i.target);let Q=R.length();Q*=Math.tan(i.object.fov/2*Math.PI/180),L(2*lt*Q/A.clientHeight,i.object.matrix),B(2*bt*Q/A.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(lt*(i.object.right-i.object.left)/i.object.zoom/A.clientWidth,i.object.matrix),B(bt*(i.object.top-i.object.bottom)/i.object.zoom/A.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(R,rt){if(!i.zoomToCursor)return;C=!0;const lt=i.domElement.getBoundingClientRect(),bt=R-lt.left,A=rt-lt.top,nt=lt.width,Q=lt.height;T.x=bt/nt*2-1,T.y=-(A/Q)*2+1,w.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function tt(R){h.set(R.clientX,R.clientY)}function st(R){q(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function St(R){v.set(R.clientX,R.clientY)}function G(R){d.set(R.clientX,R.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const rt=i.domElement;H(2*Math.PI*m.x/rt.clientHeight),$(2*Math.PI*m.y/rt.clientHeight),h.copy(d),i.update()}function K(R){y.set(R.clientX,R.clientY),b.subVectors(y,f),b.y>0?j(P(b.y)):b.y<0&&X(P(b.y)),f.copy(y),i.update()}function ht(R){_.set(R.clientX,R.clientY),p.subVectors(_,v).multiplyScalar(i.panSpeed),N(p.x,p.y),v.copy(_),i.update()}function wt(R){q(R.clientX,R.clientY),R.deltaY<0?X(P(R.deltaY)):R.deltaY>0&&j(P(R.deltaY)),i.update()}function Mt(R){let rt=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),rt=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),rt=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),rt=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),rt=!0;break}rt&&(R.preventDefault(),i.update())}function pt(R){if(S.length===1)h.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);h.set(lt,bt)}}function Xt(R){if(S.length===1)v.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);v.set(lt,bt)}}function Rt(R){const rt=ct(R),lt=R.pageX-rt.x,bt=R.pageY-rt.y,A=Math.sqrt(lt*lt+bt*bt);f.set(0,A)}function O(R){i.enableZoom&&Rt(R),i.enablePan&&Xt(R)}function Ee(R){i.enableZoom&&Rt(R),i.enableRotate&&pt(R)}function xt(R){if(S.length==1)d.set(R.pageX,R.pageY);else{const lt=ct(R),bt=.5*(R.pageX+lt.x),A=.5*(R.pageY+lt.y);d.set(bt,A)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const rt=i.domElement;H(2*Math.PI*m.x/rt.clientHeight),$(2*Math.PI*m.y/rt.clientHeight),h.copy(d)}function Ct(R){if(S.length===1)_.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);_.set(lt,bt)}p.subVectors(_,v).multiplyScalar(i.panSpeed),N(p.x,p.y),v.copy(_)}function _t(R){const rt=ct(R),lt=R.pageX-rt.x,bt=R.pageY-rt.y,A=Math.sqrt(lt*lt+bt*bt);y.set(0,A),b.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),j(b.y),f.copy(y);const nt=(R.pageX+rt.x)*.5,Q=(R.pageY+rt.y)*.5;q(nt,Q)}function se(R){i.enableZoom&&_t(R),i.enablePan&&Ct(R)}function Lt(R){i.enableZoom&&_t(R),i.enableRotate&&xt(R)}function M(R){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",k)),kt(R),R.pointerType==="touch"?Dt(R):it(R))}function x(R){i.enabled!==!1&&(R.pointerType==="touch"?J(R):Z(R))}function k(R){switch(At(R),S.length){case 0:i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",k),i.dispatchEvent(Dp),s=r.NONE;break;case 1:const rt=S[0],lt=D[rt];Dt({pointerId:rt,pageX:lt.x,pageY:lt.y});break}}function it(R){let rt;switch(R.button){case 0:rt=i.mouseButtons.LEFT;break;case 1:rt=i.mouseButtons.MIDDLE;break;case 2:rt=i.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Tr.DOLLY:if(i.enableZoom===!1)return;st(R),s=r.DOLLY;break;case Tr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;St(R),s=r.PAN}else{if(i.enableRotate===!1)return;tt(R),s=r.ROTATE}break;case Tr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;tt(R),s=r.ROTATE}else{if(i.enablePan===!1)return;St(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kl)}function Z(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(R);break;case r.DOLLY:if(i.enableZoom===!1)return;K(R);break;case r.PAN:if(i.enablePan===!1)return;ht(R);break}}function et(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(Kl),wt(ft(R)),i.dispatchEvent(Dp))}function ft(R){const rt=R.deltaMode,lt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(rt){case 1:lt.deltaY*=16;break;case 2:lt.deltaY*=100;break}return R.ctrlKey&&!U&&(lt.deltaY*=10),lt}function ot(R){R.key==="Control"&&(U=!0,i.domElement.getRootNode().addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(R){R.key==="Control"&&(U=!1,i.domElement.getRootNode().removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function Et(R){i.enabled===!1||i.enablePan===!1||Mt(R)}function Dt(R){switch(gt(R),S.length){case 1:switch(i.touches.ONE){case Cr.ROTATE:if(i.enableRotate===!1)return;pt(R),s=r.TOUCH_ROTATE;break;case Cr.PAN:if(i.enablePan===!1)return;Xt(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Cr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(R),s=r.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kl)}function J(R){switch(gt(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;xt(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ct(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;se(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Lt(R),i.update();break;default:s=r.NONE}}function Kt(R){i.enabled!==!1&&R.preventDefault()}function kt(R){S.push(R.pointerId)}function At(R){delete D[R.pointerId];for(let rt=0;rt<S.length;rt++)if(S[rt]==R.pointerId){S.splice(rt,1);return}}function gt(R){let rt=D[R.pointerId];rt===void 0&&(rt=new Nt,D[R.pointerId]=rt),rt.set(R.pageX,R.pageY)}function ct(R){const rt=R.pointerId===S[0]?S[1]:S[0];return D[rt]}i.domElement.addEventListener("contextmenu",Kt),i.domElement.addEventListener("pointerdown",M),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",et,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ot,{passive:!0,capture:!0}),this.update()}}function FR(n,t){for(var e=-1,i=n==null?0:n.length,r=Array(i);++e<i;)r[e]=t(n[e],e,n);return r}var sv=FR;function kR(){this.__data__=[],this.size=0}var BR=kR;function VR(n,t){return n===t||n!==n&&t!==t}var av=VR,zR=av;function GR(n,t){for(var e=n.length;e--;)if(zR(n[e][0],t))return e;return-1}var qo=GR,HR=qo,WR=Array.prototype,XR=WR.splice;function $R(n){var t=this.__data__,e=HR(t,n);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():XR.call(t,e,1),--this.size,!0}var jR=$R,qR=qo;function YR(n){var t=this.__data__,e=qR(t,n);return e<0?void 0:t[e][1]}var KR=YR,ZR=qo;function JR(n){return ZR(this.__data__,n)>-1}var QR=JR,tL=qo;function eL(n,t){var e=this.__data__,i=tL(e,n);return i<0?(++this.size,e.push([n,t])):e[i][1]=t,this}var nL=eL,iL=BR,rL=jR,sL=KR,aL=QR,oL=nL;function ws(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}ws.prototype.clear=iL;ws.prototype.delete=rL;ws.prototype.get=sL;ws.prototype.has=aL;ws.prototype.set=oL;var Yo=ws,lL=Yo;function cL(){this.__data__=new lL,this.size=0}var uL=cL;function hL(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e}var dL=hL;function pL(n){return this.__data__.get(n)}var fL=pL;function mL(n){return this.__data__.has(n)}var _L=mL,vL=pi,gL=vL["__core-js_shared__"],bL=gL,Zl=bL,Op=function(){var n=/[^.]+$/.exec(Zl&&Zl.keys&&Zl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function xL(n){return!!Op&&Op in n}var yL=xL,wL=Function.prototype,EL=wL.toString;function SL(n){if(n!=null){try{return EL.call(n)}catch{}try{return n+""}catch{}}return""}var ov=SL,ML=mf,TL=yL,CL=jc,AL=ov,PL=/[\\^$.*+?()[\]{}|]/g,RL=/^\[object .+?Constructor\]$/,LL=Function.prototype,DL=Object.prototype,IL=LL.toString,OL=DL.hasOwnProperty,UL=RegExp("^"+IL.call(OL).replace(PL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function NL(n){if(!CL(n)||TL(n))return!1;var t=ML(n)?UL:RL;return t.test(AL(n))}var FL=NL;function kL(n,t){return n==null?void 0:n[t]}var BL=kL,VL=FL,zL=BL;function GL(n,t){var e=zL(n,t);return VL(e)?e:void 0}var Es=GL,HL=Es,WL=pi,XL=HL(WL,"Map"),ju=XL,$L=Es,jL=$L(Object,"create"),Ko=jL,Up=Ko;function qL(){this.__data__=Up?Up(null):{},this.size=0}var YL=qL;function KL(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}var ZL=KL,JL=Ko,QL="__lodash_hash_undefined__",t2=Object.prototype,e2=t2.hasOwnProperty;function n2(n){var t=this.__data__;if(JL){var e=t[n];return e===QL?void 0:e}return e2.call(t,n)?t[n]:void 0}var i2=n2,r2=Ko,s2=Object.prototype,a2=s2.hasOwnProperty;function o2(n){var t=this.__data__;return r2?t[n]!==void 0:a2.call(t,n)}var l2=o2,c2=Ko,u2="__lodash_hash_undefined__";function h2(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=c2&&t===void 0?u2:t,this}var d2=h2,p2=YL,f2=ZL,m2=i2,_2=l2,v2=d2;function Ss(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}Ss.prototype.clear=p2;Ss.prototype.delete=f2;Ss.prototype.get=m2;Ss.prototype.has=_2;Ss.prototype.set=v2;var g2=Ss,Np=g2,b2=Yo,x2=ju;function y2(){this.size=0,this.__data__={hash:new Np,map:new(x2||b2),string:new Np}}var w2=y2;function E2(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}var S2=E2,M2=S2;function T2(n,t){var e=n.__data__;return M2(t)?e[typeof t=="string"?"string":"hash"]:e.map}var Zo=T2,C2=Zo;function A2(n){var t=C2(this,n).delete(n);return this.size-=t?1:0,t}var P2=A2,R2=Zo;function L2(n){return R2(this,n).get(n)}var D2=L2,I2=Zo;function O2(n){return I2(this,n).has(n)}var U2=O2,N2=Zo;function F2(n,t){var e=N2(this,n),i=e.size;return e.set(n,t),this.size+=e.size==i?0:1,this}var k2=F2,B2=w2,V2=P2,z2=D2,G2=U2,H2=k2;function Ms(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}Ms.prototype.clear=B2;Ms.prototype.delete=V2;Ms.prototype.get=z2;Ms.prototype.has=G2;Ms.prototype.set=H2;var qu=Ms,W2=Yo,X2=ju,$2=qu,j2=200;function q2(n,t){var e=this.__data__;if(e instanceof W2){var i=e.__data__;if(!X2||i.length<j2-1)return i.push([n,t]),this.size=++e.size,this;e=this.__data__=new $2(i)}return e.set(n,t),this.size=e.size,this}var Y2=q2,K2=Yo,Z2=uL,J2=dL,Q2=fL,tD=_L,eD=Y2;function Ts(n){var t=this.__data__=new K2(n);this.size=t.size}Ts.prototype.clear=Z2;Ts.prototype.delete=J2;Ts.prototype.get=Q2;Ts.prototype.has=tD;Ts.prototype.set=eD;var lv=Ts,nD="__lodash_hash_undefined__";function iD(n){return this.__data__.set(n,nD),this}var rD=iD;function sD(n){return this.__data__.has(n)}var aD=sD,oD=qu,lD=rD,cD=aD;function Io(n){var t=-1,e=n==null?0:n.length;for(this.__data__=new oD;++t<e;)this.add(n[t])}Io.prototype.add=Io.prototype.push=lD;Io.prototype.has=cD;var uD=Io;function hD(n,t){for(var e=-1,i=n==null?0:n.length;++e<i;)if(t(n[e],e,n))return!0;return!1}var dD=hD;function pD(n,t){return n.has(t)}var fD=pD,mD=uD,_D=dD,vD=fD,gD=1,bD=2;function xD(n,t,e,i,r,s){var a=e&gD,o=n.length,l=t.length;if(o!=l&&!(a&&l>o))return!1;var c=s.get(n),u=s.get(t);if(c&&u)return c==t&&u==n;var h=-1,d=!0,m=e&bD?new mD:void 0;for(s.set(n,t),s.set(t,n);++h<o;){var v=n[h],_=t[h];if(i)var p=a?i(_,v,h,t,n,s):i(v,_,h,n,t,s);if(p!==void 0){if(p)continue;d=!1;break}if(m){if(!_D(t,function(f,y){if(!vD(m,y)&&(v===f||r(v,f,e,i,s)))return m.push(y)})){d=!1;break}}else if(!(v===_||r(v,_,e,i,s))){d=!1;break}}return s.delete(n),s.delete(t),d}var cv=xD,yD=pi,wD=yD.Uint8Array,ED=wD;function SD(n){var t=-1,e=Array(n.size);return n.forEach(function(i,r){e[++t]=[r,i]}),e}var MD=SD;function TD(n){var t=-1,e=Array(n.size);return n.forEach(function(i){e[++t]=i}),e}var CD=TD,Fp=Uo,kp=ED,AD=av,PD=cv,RD=MD,LD=CD,DD=1,ID=2,OD="[object Boolean]",UD="[object Date]",ND="[object Error]",FD="[object Map]",kD="[object Number]",BD="[object RegExp]",VD="[object Set]",zD="[object String]",GD="[object Symbol]",HD="[object ArrayBuffer]",WD="[object DataView]",Bp=Fp?Fp.prototype:void 0,Jl=Bp?Bp.valueOf:void 0;function XD(n,t,e,i,r,s,a){switch(e){case WD:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case HD:return!(n.byteLength!=t.byteLength||!s(new kp(n),new kp(t)));case OD:case UD:case kD:return AD(+n,+t);case ND:return n.name==t.name&&n.message==t.message;case BD:case zD:return n==t+"";case FD:var o=RD;case VD:var l=i&DD;if(o||(o=LD),n.size!=t.size&&!l)return!1;var c=a.get(n);if(c)return c==t;i|=ID,a.set(n,t);var u=PD(o(n),o(t),i,r,s,a);return a.delete(n),u;case GD:if(Jl)return Jl.call(n)==Jl.call(t)}return!1}var $D=XD;function jD(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}var qD=jD,YD=qD,KD=$n;function ZD(n,t,e){var i=t(n);return KD(n)?i:YD(i,e(n))}var JD=ZD;function QD(n,t){for(var e=-1,i=n==null?0:n.length,r=0,s=[];++e<i;){var a=n[e];t(a,e,n)&&(s[r++]=a)}return s}var tI=QD;function eI(){return[]}var nI=eI,iI=tI,rI=nI,sI=Object.prototype,aI=sI.propertyIsEnumerable,Vp=Object.getOwnPropertySymbols,oI=Vp?function(n){return n==null?[]:(n=Object(n),iI(Vp(n),function(t){return aI.call(n,t)}))}:rI,lI=oI,cI=JD,uI=lI,hI=Yc;function dI(n){return cI(n,hI,uI)}var pI=dI,zp=pI,fI=1,mI=Object.prototype,_I=mI.hasOwnProperty;function vI(n,t,e,i,r,s){var a=e&fI,o=zp(n),l=o.length,c=zp(t),u=c.length;if(l!=u&&!a)return!1;for(var h=l;h--;){var d=o[h];if(!(a?d in t:_I.call(t,d)))return!1}var m=s.get(n),v=s.get(t);if(m&&v)return m==t&&v==n;var _=!0;s.set(n,t),s.set(t,n);for(var p=a;++h<l;){d=o[h];var f=n[d],y=t[d];if(i)var b=a?i(y,f,d,t,n,s):i(f,y,d,n,t,s);if(!(b===void 0?f===y||r(f,y,e,i,s):b)){_=!1;break}p||(p=d=="constructor")}if(_&&!p){var w=n.constructor,T=t.constructor;w!=T&&"constructor"in n&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof T=="function"&&T instanceof T)&&(_=!1)}return s.delete(n),s.delete(t),_}var gI=vI,bI=Es,xI=pi,yI=bI(xI,"DataView"),wI=yI,EI=Es,SI=pi,MI=EI(SI,"Promise"),TI=MI,CI=Es,AI=pi,PI=CI(AI,"Set"),RI=PI,LI=Es,DI=pi,II=LI(DI,"WeakMap"),OI=II,zc=wI,Gc=ju,Hc=TI,Wc=RI,Xc=OI,uv=ua,Cs=ov,Gp="[object Map]",UI="[object Object]",Hp="[object Promise]",Wp="[object Set]",Xp="[object WeakMap]",$p="[object DataView]",NI=Cs(zc),FI=Cs(Gc),kI=Cs(Hc),BI=Cs(Wc),VI=Cs(Xc),Ji=uv;(zc&&Ji(new zc(new ArrayBuffer(1)))!=$p||Gc&&Ji(new Gc)!=Gp||Hc&&Ji(Hc.resolve())!=Hp||Wc&&Ji(new Wc)!=Wp||Xc&&Ji(new Xc)!=Xp)&&(Ji=function(n){var t=uv(n),e=t==UI?n.constructor:void 0,i=e?Cs(e):"";if(i)switch(i){case NI:return $p;case FI:return Gp;case kI:return Hp;case BI:return Wp;case VI:return Xp}return t});var zI=Ji,Ql=lv,GI=cv,HI=$D,WI=gI,jp=zI,qp=$n,Yp=df,XI=ff,$I=1,Kp="[object Arguments]",Zp="[object Array]",eo="[object Object]",jI=Object.prototype,Jp=jI.hasOwnProperty;function qI(n,t,e,i,r,s){var a=qp(n),o=qp(t),l=a?Zp:jp(n),c=o?Zp:jp(t);l=l==Kp?eo:l,c=c==Kp?eo:c;var u=l==eo,h=c==eo,d=l==c;if(d&&Yp(n)){if(!Yp(t))return!1;a=!0,u=!1}if(d&&!u)return s||(s=new Ql),a||XI(n)?GI(n,t,e,i,r,s):HI(n,t,l,e,i,r,s);if(!(e&$I)){var m=u&&Jp.call(n,"__wrapped__"),v=h&&Jp.call(t,"__wrapped__");if(m||v){var _=m?n.value():n,p=v?t.value():t;return s||(s=new Ql),r(_,p,e,i,s)}}return d?(s||(s=new Ql),WI(n,t,e,i,r,s)):!1}var YI=qI,KI=YI,Qp=ha;function hv(n,t,e,i,r){return n===t?!0:n==null||t==null||!Qp(n)&&!Qp(t)?n!==n&&t!==t:KI(n,t,e,i,hv,r)}var dv=hv,ZI=lv,JI=dv,QI=1,tO=2;function eO(n,t,e,i){var r=e.length,s=r,a=!i;if(n==null)return!s;for(n=Object(n);r--;){var o=e[r];if(a&&o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++r<s;){o=e[r];var l=o[0],c=n[l],u=o[1];if(a&&o[2]){if(c===void 0&&!(l in n))return!1}else{var h=new ZI;if(i)var d=i(c,u,l,n,t,h);if(!(d===void 0?JI(u,c,QI|tO,i,h):d))return!1}}return!0}var nO=eO,iO=jc;function rO(n){return n===n&&!iO(n)}var pv=rO,sO=pv,aO=Yc;function oO(n){for(var t=aO(n),e=t.length;e--;){var i=t[e],r=n[i];t[e]=[i,r,sO(r)]}return t}var lO=oO;function cO(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==void 0||n in Object(e))}}var fv=cO,uO=nO,hO=lO,dO=fv;function pO(n){var t=hO(n);return t.length==1&&t[0][2]?dO(t[0][0],t[0][1]):function(e){return e===n||uO(e,n,t)}}var fO=pO,mO=ua,_O=ha,vO="[object Symbol]";function gO(n){return typeof n=="symbol"||_O(n)&&mO(n)==vO}var Yu=gO,bO=$n,xO=Yu,yO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wO=/^\w*$/;function EO(n,t){if(bO(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||xO(n)?!0:wO.test(n)||!yO.test(n)||t!=null&&n in Object(t)}var Ku=EO,mv=qu,SO="Expected a function";function Zu(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new TypeError(SO);var e=function(){var i=arguments,r=t?t.apply(this,i):i[0],s=e.cache;if(s.has(r))return s.get(r);var a=n.apply(this,i);return e.cache=s.set(r,a)||s,a};return e.cache=new(Zu.Cache||mv),e}Zu.Cache=mv;var MO=Zu,TO=MO,CO=500;function AO(n){var t=TO(n,function(i){return e.size===CO&&e.clear(),i}),e=t.cache;return t}var PO=AO,RO=PO,LO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,DO=/\\(\\)?/g,IO=RO(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(LO,function(e,i,r,s){t.push(r?s.replace(DO,"$1"):i||e)}),t}),OO=IO,tf=Uo,UO=sv,NO=$n,FO=Yu,kO=1/0,ef=tf?tf.prototype:void 0,nf=ef?ef.toString:void 0;function _v(n){if(typeof n=="string")return n;if(NO(n))return UO(n,_v)+"";if(FO(n))return nf?nf.call(n):"";var t=n+"";return t=="0"&&1/n==-kO?"-0":t}var BO=_v,VO=BO;function zO(n){return n==null?"":VO(n)}var GO=zO,HO=$n,WO=Ku,XO=OO,$O=GO;function jO(n,t){return HO(n)?n:WO(n,t)?[n]:XO($O(n))}var vv=jO,qO=Yu,YO=1/0;function KO(n){if(typeof n=="string"||qO(n))return n;var t=n+"";return t=="0"&&1/n==-YO?"-0":t}var Jo=KO,ZO=vv,JO=Jo;function QO(n,t){t=ZO(t,n);for(var e=0,i=t.length;n!=null&&e<i;)n=n[JO(t[e++])];return e&&e==i?n:void 0}var gv=QO,tU=gv;function eU(n,t,e){var i=n==null?void 0:tU(n,t);return i===void 0?e:i}var nU=eU;function iU(n,t){return n!=null&&t in Object(n)}var rU=iU,sU=vv,aU=hf,oU=$n,lU=pf,cU=$c,uU=Jo;function hU(n,t,e){t=sU(t,n);for(var i=-1,r=t.length,s=!1;++i<r;){var a=uU(t[i]);if(!(s=n!=null&&e(n,a)))break;n=n[a]}return s||++i!=r?s:(r=n==null?0:n.length,!!r&&cU(r)&&lU(a,r)&&(oU(n)||aU(n)))}var dU=hU,pU=rU,fU=dU;function mU(n,t){return n!=null&&fU(n,t,pU)}var _U=mU,vU=dv,gU=nU,bU=_U,xU=Ku,yU=pv,wU=fv,EU=Jo,SU=1,MU=2;function TU(n,t){return xU(n)&&yU(t)?wU(EU(n),t):function(e){var i=gU(e,n);return i===void 0&&i===t?bU(e,n):vU(t,i,SU|MU)}}var CU=TU;function AU(n){return function(t){return t==null?void 0:t[n]}}var PU=AU,RU=gv;function LU(n){return function(t){return RU(t,n)}}var DU=LU,IU=PU,OU=DU,UU=Ku,NU=Jo;function FU(n){return UU(n)?IU(NU(n)):OU(n)}var kU=FU,BU=fO,VU=CU,zU=vf,GU=$n,HU=kU;function WU(n){return typeof n=="function"?n:n==null?zU:typeof n=="object"?GU(n)?VU(n[0],n[1]):BU(n):HU(n)}var XU=WU,$U=_f,jU=qc;function qU(n,t){var e=-1,i=jU(n)?Array(n.length):[];return $U(n,function(r,s,a){i[++e]=t(r,s,a)}),i}var YU=qU,KU=sv,ZU=XU,JU=YU,QU=$n;function tN(n,t){var e=QU(n)?KU:JU;return e(n,ZU(t))}var eN=tN;const nN=Oo(eN);var iN=`precision mediump float;

varying vec2 vUv;

void main() {\r
  vUv = uv;

  vec3 pos = position;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);\r
}`,rN=`precision mediump float;

uniform float uAlpha;\r

varying vec2 vUv;

void main() {\r
  gl_FragColor = vec4(vUv, 0.0, uAlpha);\r
}`;class sN{constructor({geometry:t,sizes:e,device:i}){this.geometry=t,this.sizes=e,this.device=i,this.createTexture(),this.createMaterial(),this.createMesh(),this.calculateBounds({sizes:this.sizes,device:this.device})}createTexture(){}createMaterial(){this.material=new ui({vertexShader:iN,fragmentShader:rN,side:Nn,uniforms:{uAlpha:{value:0}}})}createMesh(){this.mesh=new Bn(this.geometry,this.material)}calculateBounds({sizes:t,device:e}){this.sizes=t,this.device=e,this.updateScale(this.device),this.updateX(),this.updateY()}show(){ta.fromTo(this.mesh.material.uniforms.uAlpha,{value:0},{value:1})}hide(){ta.to(this.mesh.material.uniforms.uAlpha,{value:0})}onResize(t){this.calculateBounds(t)}updateScale(){this.device==="sp"?(this.mesh.scale.x=this.sizes.width/2,this.mesh.scale.y=this.sizes.width/2):(this.mesh.scale.x=this.sizes.height/2,this.mesh.scale.y=this.sizes.height/2)}updateX(t=0){}updateY(t=0){}update(t,e){this.updateX(t.x),this.updateY(t.y),this.program.uniforms.uSpeed.value=e}setParameter(t){this.mesh.material.uniforms.uAlpha.value=t.alpha}}let aN=class{constructor({scene:t,sizes:e,device:i}){this.scene=t,this.sizes=e,this.device=i,this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createPlane(),this.scene.add(this.plane.mesh),this.onResize({sizes:this.sizes,device:this.device}),this.show()}createGeometry(){this.geometry=new ma(1,1,100,100)}createPlane(){this.plane=new sN({geometry:this.geometry,sizes:this.sizes,device:this.device})}show(){this.plane.show()}hide(){this.plane.hide()}onResize(t){this.plane&&this.plane.onResize(t)}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const i=t.start-t.end,r=e.start-e.end;this.x.target=this.scrollCurrent.x-i,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target-=t,this.y.target-=e}update(){this.plane}setParameter(t){this.plane.setParameter(t)}destroy(){this.scene.remove(this.plane.mesh)}};class oN{constructor({template:t,dom:e,device:i}){this.template=t,this.container=e,this.device=i,this.x={start:0,end:0},this.y={start:0,end:0},this.time={current:0,previous:0,delta:0},this.createRenderer(),this.createScene(),this.createCamera(),this.createPane(),this.createControls(),this.createClock(),this.onResize(this.device)}createRenderer(){this.renderer=new i_({alpha:!0,antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement)}createScene(){this.scene=new lC}createCamera(){const e=window.innerWidth/window.innerHeight,i=.1,r=1e3;this.camera=new wn(45,e,i,r),this.camera.position.z=5}createPane(){this.pane=new OR,this.PARAMS={alpha:1},this.pane.addBinding(this.PARAMS,"alpha",{min:0,max:1,step:.01})}createControls(){this.controls=new NR(this.camera,this.renderer.domElement)}createClock(){this.clock=new pC}createHome(){this.home=new aN({scene:this.scene,sizes:this.sizes,device:this.device})}destroyHome(){this.home.destroy()}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t){this.template!==t&&t!=="home"&&this.home.hide(),this.template=this.template!==t?t:this.template}onChangeEnd(t){t=="home"?this.createHome():this.destroyHome()}onResize(t){this.renderer.setSize(window.innerWidth,window.innerHeight);const e=window.innerWidth/window.innerHeight,i=this.camera.fov*(Math.PI/180),r=2*Math.tan(i/2)*this.camera.position.z,s=r*e;this.sizes={height:r,width:s};const a={sizes:this.sizes,device:t};this.home&&this.home.onResize(a),this.camera.aspect=e,this.camera.updateProjectionMatrix()}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.about&&this.about.onTouchDown(e),this.collections&&this.collections.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.home&&this.home.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,i=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=i;const r={x:this.x,y:this.y};this.about&&this.about.onTouchMove(r),this.collections&&this.collections.onTouchMove(r),this.detail&&this.detail.onTouchMove(r),this.home&&this.home.onTouchMove(r)}onTouchUp(t){this.isDown=!1;const e=t.changedTouches?t.changedTouches[0].clientX:t.clientX,i=t.changedTouches?t.changedTouches[0].clientY:t.clientY;this.x.end=e,this.y.end=i;const r={x:this.x,y:this.y};this.about&&this.about.onTouchUp(r),this.collections&&this.collections.onTouchUp(r),this.detail&&this.detail.onTouchUp(r),this.home&&this.home.onTouchUp(r)}onWheel({pixelX:t,pixelY:e}){this.collections&&this.collections.onWheel({pixelX:t,pixelY:e}),this.home&&this.home.onWheel({pixelX:t,pixelY:e})}update(t){this.home&&(this.home.update(t),this.home.setParameter(this.PARAMS));const e=this.clock.getDelta()*this.time.delta;this.time.previous=this.time.current,this.time.current+=e,this.renderer.render(this.scene,this.camera)}}var Ju={exports:{}},ss=typeof Reflect=="object"?Reflect:null,rf=ss&&typeof ss.apply=="function"?ss.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)},ho;ss&&typeof ss.ownKeys=="function"?ho=ss.ownKeys:Object.getOwnPropertySymbols?ho=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:ho=function(t){return Object.getOwnPropertyNames(t)};function lN(n){console&&console.warn&&console.warn(n)}var bv=Number.isNaN||function(t){return t!==t};function te(){te.init.call(this)}Ju.exports=te;Ju.exports.once=dN;te.EventEmitter=te;te.prototype._events=void 0;te.prototype._eventsCount=0;te.prototype._maxListeners=void 0;var sf=10;function Qo(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(te,"defaultMaxListeners",{enumerable:!0,get:function(){return sf},set:function(n){if(typeof n!="number"||n<0||bv(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");sf=n}});te.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};te.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||bv(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function xv(n){return n._maxListeners===void 0?te.defaultMaxListeners:n._maxListeners}te.prototype.getMaxListeners=function(){return xv(this)};te.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var r=t==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[t];if(l===void 0)return!1;if(typeof l=="function")rf(l,this,e);else for(var c=l.length,u=Mv(l,c),i=0;i<c;++i)rf(u[i],this,e);return!0};function yv(n,t,e,i){var r,s,a;if(Qo(e),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",t,e.listener?e.listener:e),s=n._events),a=s[t]),a===void 0)a=s[t]=e,++n._eventsCount;else if(typeof a=="function"?a=s[t]=i?[e,a]:[a,e]:i?a.unshift(e):a.push(e),r=xv(n),r>0&&a.length>r&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=n,o.type=t,o.count=a.length,lN(o)}return n}te.prototype.addListener=function(t,e){return yv(this,t,e,!1)};te.prototype.on=te.prototype.addListener;te.prototype.prependListener=function(t,e){return yv(this,t,e,!0)};function cN(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function wv(n,t,e){var i={fired:!1,wrapFn:void 0,target:n,type:t,listener:e},r=cN.bind(i);return r.listener=e,i.wrapFn=r,r}te.prototype.once=function(t,e){return Qo(e),this.on(t,wv(this,t,e)),this};te.prototype.prependOnceListener=function(t,e){return Qo(e),this.prependListener(t,wv(this,t,e)),this};te.prototype.removeListener=function(t,e){var i,r,s,a,o;if(Qo(e),r=this._events,r===void 0)return this;if(i=r[t],i===void 0)return this;if(i===e||i.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,i.listener||e));else if(typeof i!="function"){for(s=-1,a=i.length-1;a>=0;a--)if(i[a]===e||i[a].listener===e){o=i[a].listener,s=a;break}if(s<0)return this;s===0?i.shift():uN(i,s),i.length===1&&(r[t]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",t,o||e)}return this};te.prototype.off=te.prototype.removeListener;te.prototype.removeAllListeners=function(t){var e,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[t]),this;if(arguments.length===0){var s=Object.keys(i),a;for(r=0;r<s.length;++r)a=s[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=i[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this};function Ev(n,t,e){var i=n._events;if(i===void 0)return[];var r=i[t];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?hN(r):Mv(r,r.length)}te.prototype.listeners=function(t){return Ev(this,t,!0)};te.prototype.rawListeners=function(t){return Ev(this,t,!1)};te.listenerCount=function(n,t){return typeof n.listenerCount=="function"?n.listenerCount(t):Sv.call(n,t)};te.prototype.listenerCount=Sv;function Sv(n){var t=this._events;if(t!==void 0){var e=t[n];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}te.prototype.eventNames=function(){return this._eventsCount>0?ho(this._events):[]};function Mv(n,t){for(var e=new Array(t),i=0;i<t;++i)e[i]=n[i];return e}function uN(n,t){for(;t+1<n.length;t++)n[t]=n[t+1];n.pop()}function hN(n){for(var t=new Array(n.length),e=0;e<t.length;++e)t[e]=n[e].listener||n[e];return t}function dN(n,t){return new Promise(function(e,i){function r(a){n.removeListener(t,s),i(a)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),e([].slice.call(arguments))}Tv(n,t,s,{once:!0}),t!=="error"&&pN(n,r,{once:!0})})}function pN(n,t,e){typeof n.on=="function"&&Tv(n,"error",t,e)}function Tv(n,t,e,i){if(typeof n.on=="function")i.once?n.once(t,e):n.on(t,e);else if(typeof n.addEventListener=="function")n.addEventListener(t,function r(s){i.once&&n.removeEventListener(t,r),e(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var fN=Ju.exports;const mN=Oo(fN);class Qu extends mN{constructor({element:t,elements:e}){super(),this.selector=t,this.selectorChildren={...e},this.create(),this.addEventListeners()}create(){this.selector instanceof window.HTMLElement?this.element=this.selector:this.element=document.querySelector(this.selector),this.elements={},Kc(this.selectorChildren,(t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList?this.elements[e]=t:(this.elements[e]=this.element.querySelectorAll(t),this.elements[e].length===0?this.elements[e]=null:this.elements[e].length===1&&(this.elements[e]=this.element.querySelector(t)))})}addEventListeners(){}removeEventListeners(){}}class _N extends Qu{constructor(){super({element:".preloader",elements:{loading:".preloader__loading",text:".preloader__text",assets:".preloader__assets"}}),window.TEXTURES={},this.length=0,this.createLoader()}createLoader(){this.assets=[...this.elements.assets.querySelectorAll("img")],this.totalAssetsLength=this.assets.length,this.textureLoader=new dC,this.assets.forEach(t=>{const e=new Image,i=t.getAttribute("data-id");e.crossOrigin="anonymous",e.src=t.getAttribute("data-src"),e.onload=()=>{const r=this.textureLoader.load(e.src);r.needsUpdate=!0,window.TEXTURES[i]=r,this.onAssetLoaded()},e.onerror=r=>{console.error("An error happened while loading a texture",r)}})}onAssetLoaded(){this.length+=1;const t=this.length/this.totalAssetsLength;this.elements.text.innerHTML=`${Math.round(t*100)}%`,this.length===this.totalAssetsLength&&this.onLoaded()}onLoaded(){return new Promise(t=>{this.emit("completed"),this.destroy(),t()})}destroy(){this.element.parentNode.removeChild(this.element)}}class vN{constructor({button:t,drawerNav:e,drawerInner:i,drawerNavButton:r,closeButton:s}){this.drawerButton=t,this.nav=e,this.navButtons=r,this.closeButton=s||null,this.drawerInner=i,this.drawerButton.setAttribute("aria-expanded","false"),this.nav.setAttribute("aria-hidden","true"),this.closeButton&&this.closeButton.setAttribute("tabindex","0"),this.init()}init(){this.setupDrawerToggleButton(),this.setupNavButtonActions(),this.setupCloseOutsideClick(),this.preventInnerPropagation(),this.setupCloseButtonClick(),this.setupButtonTextToggle()}setupDrawerToggleButton(){this.drawerButton.addEventListener("click",()=>{const t=this.drawerButton.getAttribute("aria-expanded")==="true";this.drawerButton.setAttribute("aria-expanded",!t),this.nav.setAttribute("aria-hidden",t),this.drawerButton.classList.toggle("active"),this.nav.classList.toggle("active"),this.setupButtonTextToggle()})}setupButtonTextToggle(){this.toggleText(),this.drawerButton.addEventListener("click",()=>{this.toggleText()})}toggleText(){const t=this.drawerButton.querySelector(".drawer-button__text--menu"),e=this.drawerButton.querySelector(".drawer-button__text--close");this.drawerButton.getAttribute("aria-expanded")==="true"?(t.classList.remove("active"),e.classList.add("active")):(t.classList.add("active"),e.classList.remove("active"))}setupNavButtonActions(){this.navButtons.forEach(t=>{t.addEventListener("click",()=>{(this.drawerButton.classList.contains("active")||this.nav.classList.contains("active"))&&this.closeDrawer()})})}setupCloseOutsideClick(){this.nav.addEventListener("click",t=>{(t.target===this.nav&&this.drawerButton.getAttribute("aria-expanded")==="true"||this.nav.getAttribute("aria-hidden")==="false")&&this.closeDrawer()})}preventInnerPropagation(){this.drawerInner.addEventListener("click",t=>{t.stopPropagation()})}setupCloseButtonClick(){this.closeButton!==null&&this.closeButton.addEventListener("click",()=>{this.closeDrawer()})}closeDrawer(){this.drawerButton.classList.remove("active"),this.nav.classList.remove("active"),this.drawerButton.setAttribute("aria-expanded","false"),this.nav.setAttribute("aria-hidden","true")}}class gN extends Qu{constructor(){super({element:".drawer-nav",elements:{inner:".drawer-nav__inner",list:".drawer-nav__list",item:".drawer-nav__list__item",link:".drawer-nav__list__item__link",button:document.querySelector(".drawer-button")}}),this.createNav()}createNav(){this.drawerNav=new vN({button:this.elements.button,drawerNav:this.element,drawerInner:this.elements.inner,drawerNavButton:this.elements.link})}}var Cv={exports:{}},af=typeof document<"u"?document.createElement("p").style:{},of=["O","ms","Moz","Webkit"],tc=/([A-Z])/g,ec={};function Av(n){if(n=n.replace(/-([a-z])/g,function(r,s){return s.toUpperCase()}),af[n]!==void 0)return n;for(var t=n.charAt(0).toUpperCase()+n.slice(1),e=of.length;e--;){var i=of[e]+t;if(af[i]!==void 0)return i}return n}function bN(n){return n in ec?ec[n]:ec[n]=Av(n)}function xN(n){return n=Av(n),tc.test(n)&&(n="-"+n.replace(tc,"-$1"),tc.lastIndex=0),n.toLowerCase()}Cv.exports=bN;Cv.exports.dash=xN;class yN extends Qu{constructor({element:t}){super({element:t}),this.createObserver()}createObserver(){this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(this.element.src||(this.element.src=this.element.getAttribute("data-src"),this.element.onload=i=>{this.element.classList.add("loaded")}))})}),this.observer.observe(this.element)}}class th{constructor({id:t,element:e,elements:i}){this.id=t,this.selector=e,this.selectorChildren={...i}}create(){this.scroll={current:0,target:0,last:0,limit:1e3},this.element=document.querySelector(this.selector),this.elements={},Kc(this.selectorChildren,(t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList?this.elements[e]=t:(this.elements[e]=this.element.querySelectorAll(t),this.elements[e].length===0?this.elements[e]=null:this.elements[e].length===1&&(this.elements[e]=this.element.querySelector(t)))})}createAsyncLoaders(){this.asyncImages=nN(this.elements.asyncImages,t=>new yN({element:t}))}show(t){return new Promise(e=>{t?this.animationIn=t:this.animationIn=ta.timeline(),this.animationIn.call(i=>{this.addEventListeners(),e()})})}hide(){return new Promise(t=>{this.destroy(),this.animationOut=ta.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:t})})}destroy(){this.removeEventListeners()}onWheel({pixelY:t}){}onResize(){}update(){}addEventListeners(){}removeEventListeners(){}}class wN extends th{constructor(){super({id:"home",element:".home",elements:{link:".home__link"}})}create(){super.create()}destroy(){super.destroy()}}class EN extends th{constructor(){super({id:"page2",element:".page2",elements:{link:".page2__link"}})}create(){super.create()}destroy(){super.destroy()}}class SN extends th{constructor(){super({id:"page3",element:".page3",elements:{link:".page3__link"}})}create(){super.create()}destroy(){super.destroy()}}document.querySelectorAll(".preloader img");class MN{constructor(){this.createBreakPoint(),this.createContent(),this.createPreloader(),this.createCanvas(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update(),this.onResize()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new oN({template:this.template,dom:document.querySelector("#webgl"),device:this.device})}createPreloader(){this.preloader=new _N,this.preloader.once("completed",()=>{this.onPreloaded()})}createBreakPoint(){this.breakPoint=new Eb,this.device=this.breakPoint.currentDevice}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}createNavigation(){this.navigation=new gN}createPages(){this.pages={home:new wN,page2:new EN,page3:new SN},this.page=this.pages[this.template],this.page.create()}addEventListeners(){window.addEventListener("popstate",t=>{this.onPopState(t)}),window.addEventListener("mousedown",t=>{this.onTouchDown(t)}),window.addEventListener("mousemove",t=>{this.onTouchMove(t)}),window.addEventListener("mouseup",t=>{this.onTouchUp(t)}),window.addEventListener("touchstart",t=>{this.onTouchDown(t)}),window.addEventListener("touchmove",t=>{this.onTouchMove(t)}),window.addEventListener("touchend",t=>{this.onTouchUp(t)}),window.addEventListener("wheel",t=>{this.onWheel(t)}),window.addEventListener("resize",t=>{this.onResize(t)})}onResize(){this.device=this.breakPoint.currentDevice,this.page&&this.page.onResize&&this.page.onResize(),setTimeout(()=>{const t=window.innerWidth;Math.abs(this.currentWidth-t)<=.1?this.resizeFlag=!1:this.resizeFlag=!0},10),this.canvas&&this.canvas.onResize&&this.resizeFlag===!0&&this.canvas.onResize(this.device)}onTouchDown(t){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(t)}onTouchMove(t){this.page&&this.canvas.onTouchMove&&this.canvas.onTouchMove(t)}onTouchUp(t){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(t)}onWheel(t){const e=wb(t);this.canvas&&this.canvas.update&&this.canvas.onWheel(e),this.page&&this.page.update&&this.page.onWheel(e)}addLinkListeners(){const t=document.querySelectorAll("a");Kc(t,e=>{e.onclick=i=>{const{href:r}=e;i.preventDefault(),this.onChange({url:r})}})}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:t,push:e=!0}){if(this.onChanging)return;this.onChanging=!0,this.canvas.onChangeStart(this.template),await this.page.hide();const i=await window.fetch(t);if(i.status===200){const r=await i.text(),a=new DOMParser().parseFromString(r,"text/html"),o=a.querySelector("title").innerText;o&&(document.title=o);const l=a.querySelector('meta[name="description"]');this.updateMetaDescription(l);const c=document.createElement("div");e&&window.history.pushState({},"",t),c.innerHTML=r;const u=c.querySelector(".content");this.template=u.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=u.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners(),this.onChanging=!1}else console.log("error"),this.onChanging=!1}updateMetaDescription(t){let e=document.querySelector('meta[name="description"]');e?e.setAttribute("content",t):(e=document.createElement("meta"),e.setAttribute("name","description"),e.setAttribute("content",t),document.head.appendChild(e))}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}}new MN;
