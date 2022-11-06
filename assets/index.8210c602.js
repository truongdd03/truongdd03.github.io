(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Za(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const mg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gg=Za(mg);function ld(t){return!!t||t===""}function ar(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Fe(i)?yg(i):ar(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Fe(t))return t;if(Ie(t))return t}}const _g=/;(?![^(]*\))/g,vg=/:(.+)/;function yg(t){const e={};return t.split(_g).forEach(n=>{if(n){const i=n.split(vg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ge(t){let e="";if(Fe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=Ge(t[n]);i&&(e+=i+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Je=t=>Fe(t)?t:t==null?"":W(t)||Ie(t)&&(t.toString===dd||!K(t.toString))?JSON.stringify(t,cd,2):String(t),cd=(t,e)=>e&&e.__v_isRef?cd(t,e.value):mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:ud(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!W(e)&&!hd(e)?String(e):e,ve={},pi=[],St=()=>{},bg=()=>!1,wg=/^on[^a-z]/,Vs=t=>wg.test(t),el=t=>t.startsWith("onUpdate:"),We=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Eg=Object.prototype.hasOwnProperty,ie=(t,e)=>Eg.call(t,e),W=Array.isArray,mi=t=>qs(t)==="[object Map]",ud=t=>qs(t)==="[object Set]",K=t=>typeof t=="function",Fe=t=>typeof t=="string",nl=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",fd=t=>Ie(t)&&K(t.then)&&K(t.catch),dd=Object.prototype.toString,qs=t=>dd.call(t),Cg=t=>qs(t).slice(8,-1),hd=t=>qs(t)==="[object Object]",il=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xg=/-(\w)/g,Bt=Gs(t=>t.replace(xg,(e,n)=>n?n.toUpperCase():"")),Ig=/\B([A-Z])/g,Ri=Gs(t=>t.replace(Ig,"-$1").toLowerCase()),Ys=Gs(t=>t.charAt(0).toUpperCase()+t.slice(1)),So=Gs(t=>t?`on${Ys(t)}`:""),lr=(t,e)=>!Object.is(t,e),Ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rc;const Tg=()=>Rc||(Rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let lt;class Sg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&lt&&(this.parent=lt,this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ag(t,e=lt){e&&e.active&&e.effects.push(t)}function kg(){return lt}function Ng(t){lt&&lt.cleanups.push(t)}const rl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},md=t=>(t.w&yn)>0,gd=t=>(t.n&yn)>0,Rg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yn},Og=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];md(r)&&!gd(r)?r.delete(t):e[n++]=r,r.w&=~yn,r.n&=~yn}e.length=n}},ra=new WeakMap;let Gi=0,yn=1;const sa=30;let bt;const Vn=Symbol(""),oa=Symbol("");class sl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ag(this,i)}run(){if(!this.active)return this.fn();let e=bt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,hn=!0,yn=1<<++Gi,Gi<=sa?Rg(this):Oc(this),this.fn()}finally{Gi<=sa&&Og(this),yn=1<<--Gi,bt=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function Oc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const _d=[];function Oi(){_d.push(hn),hn=!1}function Pi(){const t=_d.pop();hn=t===void 0?!0:t}function ut(t,e,n){if(hn&&bt){let i=ra.get(t);i||ra.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=rl()),vd(r)}}function vd(t,e){let n=!1;Gi<=sa?gd(t)||(t.n|=yn,n=!md(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function Gt(t,e,n,i,r,s){const o=ra.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?il(n)&&a.push(o.get("length")):(a.push(o.get(Vn)),mi(t)&&a.push(o.get(oa)));break;case"delete":W(t)||(a.push(o.get(Vn)),mi(t)&&a.push(o.get(oa)));break;case"set":mi(t)&&a.push(o.get(Vn));break}if(a.length===1)a[0]&&aa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);aa(rl(l))}}function aa(t,e){const n=W(t)?t:[...t];for(const i of n)i.computed&&Pc(i);for(const i of n)i.computed||Pc(i)}function Pc(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pg=Za("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nl)),Mg=ol(),Dg=ol(!1,!0),Lg=ol(!0),Mc=Fg();function Fg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=oe(this);for(let s=0,o=this.length;s<o;s++)ut(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oi();const i=oe(this)[e].apply(this,n);return Pi(),i}}),t}function ol(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Zg:xd:e?Cd:Ed).get(i))return i;const o=W(i);if(!t&&o&&ie(Mc,r))return Reflect.get(Mc,r,s);const a=Reflect.get(i,r,s);return(nl(r)?yd.has(r):Pg(r))||(t||ut(i,"get",r),e)?a:Re(a)?o&&il(r)?a:a.value:Ie(a)?t?Id(a):Mi(a):a}}const $g=bd(),Bg=bd(!0);function bd(t=!1){return function(n,i,r,s){let o=n[i];if(Ei(o)&&Re(o)&&!Re(r))return!1;if(!t&&(!ps(r)&&!Ei(r)&&(o=oe(o),r=oe(r)),!W(n)&&Re(o)&&!Re(r)))return o.value=r,!0;const a=W(n)&&il(i)?Number(i)<n.length:ie(n,i),l=Reflect.set(n,i,r,s);return n===oe(s)&&(a?lr(r,o)&&Gt(n,"set",i,r):Gt(n,"add",i,r)),l}}function Hg(t,e){const n=ie(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Gt(t,"delete",e,void 0),i}function jg(t,e){const n=Reflect.has(t,e);return(!nl(e)||!yd.has(e))&&ut(t,"has",e),n}function Ug(t){return ut(t,"iterate",W(t)?"length":Vn),Reflect.ownKeys(t)}const wd={get:Mg,set:$g,deleteProperty:Hg,has:jg,ownKeys:Ug},zg={get:Lg,set(t,e){return!0},deleteProperty(t,e){return!0}},Wg=We({},wd,{get:Dg,set:Bg}),al=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function Wr(t,e,n=!1,i=!1){t=t.__v_raw;const r=oe(t),s=oe(e);n||(e!==s&&ut(r,"get",e),ut(r,"get",s));const{has:o}=Ks(r),a=i?al:n?ul:cr;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Vr(t,e=!1){const n=this.__v_raw,i=oe(n),r=oe(t);return e||(t!==r&&ut(i,"has",t),ut(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function qr(t,e=!1){return t=t.__v_raw,!e&&ut(oe(t),"iterate",Vn),Reflect.get(t,"size",t)}function Dc(t){t=oe(t);const e=oe(this);return Ks(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Lc(t,e){e=oe(e);const n=oe(this),{has:i,get:r}=Ks(n);let s=i.call(n,t);s||(t=oe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?lr(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Fc(t){const e=oe(this),{has:n,get:i}=Ks(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Gt(e,"delete",t,void 0),s}function $c(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function Gr(t,e){return function(i,r){const s=this,o=s.__v_raw,a=oe(o),l=e?al:t?ul:cr;return!t&&ut(a,"iterate",Vn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Yr(t,e,n){return function(...i){const r=this.__v_raw,s=oe(r),o=mi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?al:e?ul:cr;return!e&&ut(s,"iterate",l?oa:Vn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function on(t){return function(...e){return t==="delete"?!1:this}}function Vg(){const t={get(s){return Wr(this,s)},get size(){return qr(this)},has:Vr,add:Dc,set:Lc,delete:Fc,clear:$c,forEach:Gr(!1,!1)},e={get(s){return Wr(this,s,!1,!0)},get size(){return qr(this)},has:Vr,add:Dc,set:Lc,delete:Fc,clear:$c,forEach:Gr(!1,!0)},n={get(s){return Wr(this,s,!0)},get size(){return qr(this,!0)},has(s){return Vr.call(this,s,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:Gr(!0,!1)},i={get(s){return Wr(this,s,!0,!0)},get size(){return qr(this,!0)},has(s){return Vr.call(this,s,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Yr(s,!1,!1),n[s]=Yr(s,!0,!1),e[s]=Yr(s,!1,!0),i[s]=Yr(s,!0,!0)}),[t,n,e,i]}const[qg,Gg,Yg,Kg]=Vg();function ll(t,e){const n=e?t?Kg:Yg:t?Gg:qg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ie(n,r)&&r in i?n:i,r,s)}const Qg={get:ll(!1,!1)},Xg={get:ll(!1,!0)},Jg={get:ll(!0,!1)},Ed=new WeakMap,Cd=new WeakMap,xd=new WeakMap,Zg=new WeakMap;function e_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function t_(t){return t.__v_skip||!Object.isExtensible(t)?0:e_(Cg(t))}function Mi(t){return Ei(t)?t:cl(t,!1,wd,Qg,Ed)}function n_(t){return cl(t,!1,Wg,Xg,Cd)}function Id(t){return cl(t,!0,zg,Jg,xd)}function cl(t,e,n,i,r){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=t_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function gi(t){return Ei(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ei(t){return!!(t&&t.__v_isReadonly)}function ps(t){return!!(t&&t.__v_isShallow)}function Td(t){return gi(t)||Ei(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Sd(t){return hs(t,"__v_skip",!0),t}const cr=t=>Ie(t)?Mi(t):t,ul=t=>Ie(t)?Id(t):t;function Ad(t){hn&&bt&&(t=oe(t),vd(t.dep||(t.dep=rl())))}function kd(t,e){t=oe(t),t.dep&&aa(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return Nd(t,!1)}function i_(t){return Nd(t,!0)}function Nd(t,e){return Re(t)?t:new r_(t,e)}class r_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:cr(e)}get value(){return Ad(this),this._value}set value(e){const n=this.__v_isShallow||ps(e)||Ei(e);e=n?e:oe(e),lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cr(e),kd(this))}}function Le(t){return Re(t)?t.value:t}const s_={get:(t,e,n)=>Le(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Rd(t){return gi(t)?t:new Proxy(t,s_)}var Od;class o_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Od]=!1,this._dirty=!0,this.effect=new sl(e,()=>{this._dirty||(this._dirty=!0,kd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=oe(this);return Ad(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Od="__v_isReadonly";function a_(t,e,n=!1){let i,r;const s=K(t);return s?(i=t,r=St):(i=t.get,r=t.set),new o_(i,r,s||!r,n)}function pn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Qs(s,e,n)}return r}function pt(t,e,n,i){if(K(t)){const s=pn(t,e,n,i);return s&&fd(s)&&s.catch(o=>{Qs(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(pt(t[s],e,n,i));return r}function Qs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}l_(t,n,r,i)}function l_(t,e,n,i=!0){console.error(t)}let ur=!1,la=!1;const Qe=[];let Mt=0;const _i=[];let zt=null,Fn=0;const Pd=Promise.resolve();let fl=null;function Md(t){const e=fl||Pd;return t?e.then(this?t.bind(this):t):e}function c_(t){let e=Mt+1,n=Qe.length;for(;e<n;){const i=e+n>>>1;fr(Qe[i])<t?e=i+1:n=i}return e}function dl(t){(!Qe.length||!Qe.includes(t,ur&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?Qe.push(t):Qe.splice(c_(t.id),0,t),Dd())}function Dd(){!ur&&!la&&(la=!0,fl=Pd.then(Fd))}function u_(t){const e=Qe.indexOf(t);e>Mt&&Qe.splice(e,1)}function f_(t){W(t)?_i.push(...t):(!zt||!zt.includes(t,t.allowRecurse?Fn+1:Fn))&&_i.push(t),Dd()}function Bc(t,e=ur?Mt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Ld(t){if(_i.length){const e=[...new Set(_i)];if(_i.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,i)=>fr(n)-fr(i)),Fn=0;Fn<zt.length;Fn++)zt[Fn]();zt=null,Fn=0}}const fr=t=>t.id==null?1/0:t.id,d_=(t,e)=>{const n=fr(t)-fr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fd(t){la=!1,ur=!0,Qe.sort(d_);const e=St;try{for(Mt=0;Mt<Qe.length;Mt++){const n=Qe[Mt];n&&n.active!==!1&&pn(n,null,14)}}finally{Mt=0,Qe.length=0,Ld(),ur=!1,fl=null,(Qe.length||_i.length)&&Fd()}}function h_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ve;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ve;d&&(r=n.map(p=>p.trim())),f&&(r=n.map(pd))}let a,l=i[a=So(e)]||i[a=So(Bt(e))];!l&&s&&(l=i[a=So(Ri(e))]),l&&pt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(c,t,6,r)}}function $d(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=$d(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ie(t)&&i.set(t,null),null):(W(s)?s.forEach(l=>o[l]=null):We(o,s),Ie(t)&&i.set(t,o),o)}function Xs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Ri(e))||ie(t,e))}let Ze=null,Js=null;function ms(t){const e=Ze;return Ze=t,Js=t&&t.type.__scopeId||null,e}function Zs(t){Js=t}function eo(){Js=null}function Ye(t,e=Ze,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Qc(-1);const s=ms(e),o=t(...r);return ms(s),i._d&&Qc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ko(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:b}=t;let I,_;const w=ms(t);try{if(n.shapeFlag&4){const B=r||i;I=Pt(u.call(B,B,f,s,p,d,g)),_=l}else{const B=e;I=Pt(B.length>1?B(s,{attrs:l,slots:a,emit:c}):B(s,null)),_=e.props?l:p_(l)}}catch(B){Qi.length=0,Qs(B,t,1),I=Y(mt)}let O=I;if(_&&b!==!1){const B=Object.keys(_),{shapeFlag:V}=O;B.length&&V&7&&(o&&B.some(el)&&(_=m_(_,o)),O=wn(O,_))}return n.dirs&&(O=wn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),I=O,ms(w),I}const p_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},m_=(t,e)=>{const n={};for(const i in t)(!el(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function g_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Hc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Xs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hc(i,o,c):!0:!!o;return!1}function Hc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Xs(n,s))return!0}return!1}function __({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const v_=t=>t.__isSuspense;function y_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):f_(t)}function cs(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function Vt(t,e,n=!1){const i=ze||Ze;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(i.proxy):e}}const jc={};function qn(t,e,n){return Bd(t,e,n)}function Bd(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ve){const a=ze;let l,c=!1,u=!1;if(Re(t)?(l=()=>t.value,c=ps(t)):gi(t)?(l=()=>t,i=!0):W(t)?(u=!0,c=t.some(_=>gi(_)||ps(_)),l=()=>t.map(_=>{if(Re(_))return _.value;if(gi(_))return ui(_);if(K(_))return pn(_,a,2)})):K(t)?e?l=()=>pn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),pt(t,a,3,[d])}:l=St,e&&i){const _=l;l=()=>ui(_())}let f,d=_=>{f=I.onStop=()=>{pn(_,a,4)}};if(mr)return d=St,e?n&&pt(e,a,3,[l(),u?[]:void 0,d]):l(),St;let p=u?[]:jc;const g=()=>{if(!!I.active)if(e){const _=I.run();(i||c||(u?_.some((w,O)=>lr(w,p[O])):lr(_,p)))&&(f&&f(),pt(e,a,3,[_,p===jc?void 0:p,d]),p=_)}else I.run()};g.allowRecurse=!!e;let b;r==="sync"?b=g:r==="post"?b=()=>it(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),b=()=>dl(g));const I=new sl(l,b);return e?n?g():p=I.run():r==="post"?it(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&tl(a.scope.effects,I)}}function b_(t,e,n){const i=this.proxy,r=Fe(t)?t.includes(".")?Hd(i,t):()=>i[t]:t.bind(i,i);let s;K(e)?s=e:(s=e.handler,n=e);const o=ze;Ci(this);const a=Bd(r,s.bind(i),n);return o?Ci(o):Gn(),a}function Hd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ui(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ui(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ui(t[n],e);else if(ud(t)||mi(t))t.forEach(n=>{ui(n,e)});else if(hd(t))for(const n in t)ui(t[n],e);return t}function jd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return io(()=>{t.isMounted=!0}),Vd(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],w_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=ah(),i=jd();let r;return()=>{const s=e.default&&hl(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const b of s)if(b.type!==mt){o=b;break}}const a=oe(t),{mode:l}=a;if(i.isLeaving)return No(o);const c=Uc(o);if(!c)return No(o);const u=dr(c,a,i,n);hr(c,u);const f=n.subTree,d=f&&Uc(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const b=g();r===void 0?r=b:b!==r&&(r=b,p=!0)}if(d&&d.type!==mt&&(!$n(c,d)||p)){const b=dr(d,a,i,n);if(hr(d,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update()},No(o);l==="in-out"&&c.type!==mt&&(b.delayLeave=(I,_,w)=>{const O=Ud(i,d);O[String(d.key)]=d,I._leaveCb=()=>{_(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},E_=w_;function Ud(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function dr(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:b,onAppear:I,onAfterAppear:_,onAppearCancelled:w}=e,O=String(t.key),B=Ud(n,t),V=(q,ne)=>{q&&pt(q,i,9,ne)},le=(q,ne)=>{const ae=ne[1];V(q,ne),W(q)?q.every(Pe=>Pe.length<=1)&&ae():q.length<=1&&ae()},ue={mode:s,persisted:o,beforeEnter(q){let ne=a;if(!n.isMounted)if(r)ne=b||a;else return;q._leaveCb&&q._leaveCb(!0);const ae=B[O];ae&&$n(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),V(ne,[q])},enter(q){let ne=l,ae=c,Pe=u;if(!n.isMounted)if(r)ne=I||l,ae=_||c,Pe=w||u;else return;let L=!1;const be=q._enterCb=Ve=>{L||(L=!0,Ve?V(Pe,[q]):V(ae,[q]),ue.delayedLeave&&ue.delayedLeave(),q._enterCb=void 0)};ne?le(ne,[q,be]):be()},leave(q,ne){const ae=String(t.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return ne();V(f,[q]);let Pe=!1;const L=q._leaveCb=be=>{Pe||(Pe=!0,ne(),be?V(g,[q]):V(p,[q]),q._leaveCb=void 0,B[ae]===t&&delete B[ae])};B[ae]=t,d?le(d,[q,L]):L()},clone(q){return dr(q,e,n,i)}};return ue}function No(t){if(to(t))return t=wn(t),t.children=null,t}function Uc(t){return to(t)?t.children?t.children[0]:void 0:t}function hr(t,e){t.shapeFlag&6&&t.component?hr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hl(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===je?(o.patchFlag&128&&r++,i=i.concat(hl(o.children,e,a))):(e||o.type!==mt)&&i.push(a!=null?wn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Oe(t){return K(t)?{setup:t,name:t.name}:t}const Ki=t=>!!t.type.__asyncLoader,to=t=>t.type.__isKeepAlive;function C_(t,e){zd(t,"a",e)}function x_(t,e){zd(t,"da",e)}function zd(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(no(e,i,n),n){let r=n.parent;for(;r&&r.parent;)to(r.parent.vnode)&&I_(i,e,n,r),r=r.parent}}function I_(t,e,n,i){const r=no(e,t,i,!0);qd(()=>{tl(i[e],r)},n)}function no(t,e,n=ze,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oi(),Ci(n);const a=pt(e,n,t,o);return Gn(),Pi(),a});return i?r.unshift(s):r.push(s),s}}const en=t=>(e,n=ze)=>(!mr||t==="sp")&&no(t,(...i)=>e(...i),n),T_=en("bm"),io=en("m"),S_=en("bu"),Wd=en("u"),Vd=en("bum"),qd=en("um"),A_=en("sp"),k_=en("rtg"),N_=en("rtc");function R_(t,e=ze){no("ec",t,e)}function Rn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Oi(),pt(l,n,8,[t.el,a,t,e]),Pi())}}const pl="components";function Yt(t,e){return Yd(pl,t,!0,e)||t}const Gd=Symbol();function O_(t){return Fe(t)?Yd(pl,t,!1)||t:t||Gd}function Yd(t,e,n=!0,i=!1){const r=Ze||ze;if(r){const s=r.type;if(t===pl){const a=av(s,!1);if(a&&(a===e||a===Bt(e)||a===Ys(Bt(e))))return s}const o=zc(r[t]||s[t],e)||zc(r.appContext[t],e);return!o&&i?s:o}}function zc(t,e){return t&&(t[e]||t[Bt(e)]||t[Ys(Bt(e))])}function ml(t,e,n,i){let r;const s=n&&n[i];if(W(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ie(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function ht(t,e,n={},i,r){if(Ze.isCE||Ze.parent&&Ki(Ze.parent)&&Ze.parent.isCE)return Y("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),te();const o=s&&Kd(s(n)),a=bn(je,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Kd(t){return t.some(e=>vs(e)?!(e.type===mt||e.type===je&&!Kd(e.children)):!0)?t:null}const ca=t=>t?lh(t)?bl(t)||t.proxy:ca(t.parent):null,gs=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ca(t.parent),$root:t=>ca(t.root),$emit:t=>t.emit,$options:t=>gl(t),$forceUpdate:t=>t.f||(t.f=()=>dl(t.update)),$nextTick:t=>t.n||(t.n=Md.bind(t.proxy)),$watch:t=>b_.bind(t)}),P_={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==ve&&ie(i,e))return o[e]=1,i[e];if(r!==ve&&ie(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,s[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];ua&&(o[e]=0)}}const u=gs[e];let f,d;if(u)return e==="$attrs"&&ut(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==ve&&ie(r,e)?(r[e]=n,!0):i!==ve&&ie(i,e)?(i[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||e!==ve&&ie(e,o)||(a=s[0])&&ie(a,o)||ie(i,o)||ie(gs,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ua=!0;function M_(t){const e=gl(t),n=t.proxy,i=t.ctx;ua=!1,e.beforeCreate&&Wc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:b,deactivated:I,beforeDestroy:_,beforeUnmount:w,destroyed:O,unmounted:B,render:V,renderTracked:le,renderTriggered:ue,errorCaptured:q,serverPrefetch:ne,expose:ae,inheritAttrs:Pe,components:L,directives:be,filters:Ve}=e;if(c&&D_(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const fe=o[me];K(fe)&&(i[me]=fe.bind(n))}if(r){const me=r.call(n,n);Ie(me)&&(t.data=Mi(me))}if(ua=!0,s)for(const me in s){const fe=s[me],_t=K(fe)?fe.bind(n,n):K(fe.get)?fe.get.bind(n,n):St,Nn=!K(fe)&&K(fe.set)?fe.set.bind(n):St,vt=Ce({get:_t,set:Nn});Object.defineProperty(i,me,{enumerable:!0,configurable:!0,get:()=>vt.value,set:tt=>vt.value=tt})}if(a)for(const me in a)Qd(a[me],i,n,me);if(l){const me=K(l)?l.call(n):l;Reflect.ownKeys(me).forEach(fe=>{cs(fe,me[fe])})}u&&Wc(u,t,"c");function Te(me,fe){W(fe)?fe.forEach(_t=>me(_t.bind(n))):fe&&me(fe.bind(n))}if(Te(T_,f),Te(io,d),Te(S_,p),Te(Wd,g),Te(C_,b),Te(x_,I),Te(R_,q),Te(N_,le),Te(k_,ue),Te(Vd,w),Te(qd,B),Te(A_,ne),W(ae))if(ae.length){const me=t.exposed||(t.exposed={});ae.forEach(fe=>{Object.defineProperty(me,fe,{get:()=>n[fe],set:_t=>n[fe]=_t})})}else t.exposed||(t.exposed={});V&&t.render===St&&(t.render=V),Pe!=null&&(t.inheritAttrs=Pe),L&&(t.components=L),be&&(t.directives=be)}function D_(t,e,n=St,i=!1){W(t)&&(t=fa(t));for(const r in t){const s=t[r];let o;Ie(s)?"default"in s?o=Vt(s.from||r,s.default,!0):o=Vt(s.from||r):o=Vt(s),Re(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Wc(t,e,n){pt(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,i){const r=i.includes(".")?Hd(n,i):()=>n[i];if(Fe(t)){const s=e[t];K(s)&&qn(r,s)}else if(K(t))qn(r,t.bind(n));else if(Ie(t))if(W(t))t.forEach(s=>Qd(s,e,n,i));else{const s=K(t.handler)?t.handler.bind(n):e[t.handler];K(s)&&qn(r,s,t)}}function gl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>_s(l,c,o,!0)),_s(l,e,o)),Ie(e)&&s.set(e,l),l}function _s(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&_s(t,s,n,!0),r&&r.forEach(o=>_s(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=L_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const L_={data:Vc,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Mn,directives:Mn,watch:$_,provide:Vc,inject:F_};function Vc(t,e){return e?t?function(){return We(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function F_(t,e){return Mn(fa(t),fa(e))}function fa(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?We(We(Object.create(null),t),e):e}function $_(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const i in e)n[i]=Xe(t[i],e[i]);return n}function B_(t,e,n,i=!1){const r={},s={};hs(s,ro,1),t.propsDefaults=Object.create(null),Xd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:n_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function H_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=oe(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xs(t.emitsOptions,d))continue;const p=e[d];if(l)if(ie(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Bt(d);r[g]=da(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Xd(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ie(e,f)&&((u=Ri(f))===f||!ie(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=da(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ie(e,f)&&!0)&&(delete s[f],c=!0)}c&&Gt(t,"set","$attrs")}function Xd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&ie(r,u=Bt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xs(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=oe(n),c=a||ve;for(let u=0;u<s.length;u++){const f=s[u];n[f]=da(r,l,f,c[f],t,!ie(c,f))}}return o}function da(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Ci(r),i=c[n]=l.call(null,e),Gn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ri(n))&&(i=!0))}return i}function Jd(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!K(t)){const u=f=>{l=!0;const[d,p]=Jd(f,e,!0);We(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ie(t)&&i.set(t,pi),pi;if(W(s))for(let u=0;u<s.length;u++){const f=Bt(s[u]);qc(f)&&(o[f]=ve)}else if(s)for(const u in s){const f=Bt(u);if(qc(f)){const d=s[u],p=o[f]=W(d)||K(d)?{type:d}:d;if(p){const g=Kc(Boolean,p.type),b=Kc(String,p.type);p[0]=g>-1,p[1]=b<0||g<b,(g>-1||ie(p,"default"))&&a.push(f)}}}const c=[o,a];return Ie(t)&&i.set(t,c),c}function qc(t){return t[0]!=="$"}function Gc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yc(t,e){return Gc(t)===Gc(e)}function Kc(t,e){return W(e)?e.findIndex(n=>Yc(n,t)):K(e)&&Yc(e,t)?0:-1}const Zd=t=>t[0]==="_"||t==="$stable",_l=t=>W(t)?t.map(Pt):[Pt(t)],j_=(t,e,n)=>{if(e._n)return e;const i=Ye((...r)=>_l(e(...r)),n);return i._c=!1,i},eh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Zd(r))continue;const s=t[r];if(K(s))e[r]=j_(r,s,i);else if(s!=null){const o=_l(s);e[r]=()=>o}}},th=(t,e)=>{const n=_l(e);t.slots.default=()=>n},U_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),hs(e,"_",n)):eh(e,t.slots={})}else t.slots={},e&&th(t,e);hs(t.slots,ro,1)},z_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ve;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(We(r,e),!n&&a===1&&delete r._):(s=!e.$stable,eh(e,r)),o=e}else e&&(th(t,e),o={default:1});if(s)for(const a in r)!Zd(a)&&!(a in o)&&delete r[a]};function nh(){return{app:null,config:{isNativeTag:bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function V_(t,e){return function(i,r=null){K(i)||(i=Object.assign({},i)),r!=null&&!Ie(r)&&(r=null);const s=nh(),o=new Set;let a=!1;const l=s.app={_uid:W_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=Y(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,bl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ha(t,e,n,i,r=!1){if(W(t)){t.forEach((d,p)=>ha(d,e&&(W(e)?e[p]:e),n,i,r));return}if(Ki(i)&&!r)return;const s=i.shapeFlag&4?bl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ie(f,c)&&(f[c]=null)):Re(c)&&(c.value=null)),K(l))pn(l,a,12,[o,u]);else{const d=Fe(l),p=Re(l);if(d||p){const g=()=>{if(t.f){const b=d?u[l]:l.value;r?W(b)&&tl(b,s):W(b)?b.includes(s)||b.push(s):d?(u[l]=[s],ie(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,it(g,n)):g()}}}const it=y_;function q_(t){return G_(t)}function G_(t,e){const n=Tg();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=St,insertStaticContent:g}=t,b=(h,m,v,y=null,C=null,A=null,R=!1,T=null,k=!!m.dynamicChildren)=>{if(h===m)return;h&&!$n(h,m)&&(y=N(h),tt(h,C,A,!0),h=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:x,ref:j,shapeFlag:F}=m;switch(x){case vl:I(h,m,v,y);break;case mt:_(h,m,v,y);break;case Ro:h==null&&w(m,v,y,R);break;case je:L(h,m,v,y,C,A,R,T,k);break;default:F&1?V(h,m,v,y,C,A,R,T,k):F&6?be(h,m,v,y,C,A,R,T,k):(F&64||F&128)&&x.process(h,m,v,y,C,A,R,T,k,re)}j!=null&&C&&ha(j,h&&h.ref,A,m||h,!m)},I=(h,m,v,y)=>{if(h==null)i(m.el=a(m.children),v,y);else{const C=m.el=h.el;m.children!==h.children&&c(C,m.children)}},_=(h,m,v,y)=>{h==null?i(m.el=l(m.children||""),v,y):m.el=h.el},w=(h,m,v,y)=>{[h.el,h.anchor]=g(h.children,m,v,y,h.el,h.anchor)},O=({el:h,anchor:m},v,y)=>{let C;for(;h&&h!==m;)C=d(h),i(h,v,y),h=C;i(m,v,y)},B=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=d(h),r(h),h=v;r(m)},V=(h,m,v,y,C,A,R,T,k)=>{R=R||m.type==="svg",h==null?le(m,v,y,C,A,R,T,k):ne(h,m,C,A,R,T,k)},le=(h,m,v,y,C,A,R,T)=>{let k,x;const{type:j,props:F,shapeFlag:U,transition:G,dirs:Z}=h;if(k=h.el=o(h.type,A,F&&F.is,F),U&8?u(k,h.children):U&16&&q(h.children,k,null,y,C,A&&j!=="foreignObject",R,T),Z&&Rn(h,null,y,"created"),F){for(const de in F)de!=="value"&&!ls(de)&&s(k,de,null,F[de],A,h.children,y,C,P);"value"in F&&s(k,"value",null,F.value),(x=F.onVnodeBeforeMount)&&Ot(x,y,h)}ue(k,h,h.scopeId,R,y),Z&&Rn(h,null,y,"beforeMount");const ge=(!C||C&&!C.pendingBranch)&&G&&!G.persisted;ge&&G.beforeEnter(k),i(k,m,v),((x=F&&F.onVnodeMounted)||ge||Z)&&it(()=>{x&&Ot(x,y,h),ge&&G.enter(k),Z&&Rn(h,null,y,"mounted")},C)},ue=(h,m,v,y,C)=>{if(v&&p(h,v),y)for(let A=0;A<y.length;A++)p(h,y[A]);if(C){let A=C.subTree;if(m===A){const R=C.vnode;ue(h,R,R.scopeId,R.slotScopeIds,C.parent)}}},q=(h,m,v,y,C,A,R,T,k=0)=>{for(let x=k;x<h.length;x++){const j=h[x]=T?fn(h[x]):Pt(h[x]);b(null,j,m,v,y,C,A,R,T)}},ne=(h,m,v,y,C,A,R)=>{const T=m.el=h.el;let{patchFlag:k,dynamicChildren:x,dirs:j}=m;k|=h.patchFlag&16;const F=h.props||ve,U=m.props||ve;let G;v&&On(v,!1),(G=U.onVnodeBeforeUpdate)&&Ot(G,v,m,h),j&&Rn(m,h,v,"beforeUpdate"),v&&On(v,!0);const Z=C&&m.type!=="foreignObject";if(x?ae(h.dynamicChildren,x,T,v,y,Z,A):R||fe(h,m,T,null,v,y,Z,A,!1),k>0){if(k&16)Pe(T,m,F,U,v,y,C);else if(k&2&&F.class!==U.class&&s(T,"class",null,U.class,C),k&4&&s(T,"style",F.style,U.style,C),k&8){const ge=m.dynamicProps;for(let de=0;de<ge.length;de++){const Ne=ge[de],yt=F[Ne],oi=U[Ne];(oi!==yt||Ne==="value")&&s(T,Ne,yt,oi,C,h.children,v,y,P)}}k&1&&h.children!==m.children&&u(T,m.children)}else!R&&x==null&&Pe(T,m,F,U,v,y,C);((G=U.onVnodeUpdated)||j)&&it(()=>{G&&Ot(G,v,m,h),j&&Rn(m,h,v,"updated")},y)},ae=(h,m,v,y,C,A,R)=>{for(let T=0;T<m.length;T++){const k=h[T],x=m[T],j=k.el&&(k.type===je||!$n(k,x)||k.shapeFlag&70)?f(k.el):v;b(k,x,j,null,y,C,A,R,!0)}},Pe=(h,m,v,y,C,A,R)=>{if(v!==y){if(v!==ve)for(const T in v)!ls(T)&&!(T in y)&&s(h,T,v[T],null,R,m.children,C,A,P);for(const T in y){if(ls(T))continue;const k=y[T],x=v[T];k!==x&&T!=="value"&&s(h,T,x,k,R,m.children,C,A,P)}"value"in y&&s(h,"value",v.value,y.value)}},L=(h,m,v,y,C,A,R,T,k)=>{const x=m.el=h?h.el:a(""),j=m.anchor=h?h.anchor:a("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:G}=m;G&&(T=T?T.concat(G):G),h==null?(i(x,v,y),i(j,v,y),q(m.children,v,j,C,A,R,T,k)):F>0&&F&64&&U&&h.dynamicChildren?(ae(h.dynamicChildren,U,v,C,A,R,T),(m.key!=null||C&&m===C.subTree)&&ih(h,m,!0)):fe(h,m,v,j,C,A,R,T,k)},be=(h,m,v,y,C,A,R,T,k)=>{m.slotScopeIds=T,h==null?m.shapeFlag&512?C.ctx.activate(m,v,y,R,k):Ve(m,v,y,C,A,R,k):sn(h,m,k)},Ve=(h,m,v,y,C,A,R)=>{const T=h.component=nv(h,y,C);if(to(h)&&(T.ctx.renderer=re),iv(T),T.asyncDep){if(C&&C.registerDep(T,Te),!h.el){const k=T.subTree=Y(mt);_(null,k,m,v)}return}Te(T,h,m,v,C,A,R)},sn=(h,m,v)=>{const y=m.component=h.component;if(g_(h,m,v))if(y.asyncDep&&!y.asyncResolved){me(y,m,v);return}else y.next=m,u_(y.update),y.update();else m.el=h.el,y.vnode=m},Te=(h,m,v,y,C,A,R)=>{const T=()=>{if(h.isMounted){let{next:j,bu:F,u:U,parent:G,vnode:Z}=h,ge=j,de;On(h,!1),j?(j.el=Z.el,me(h,j,R)):j=Z,F&&Ao(F),(de=j.props&&j.props.onVnodeBeforeUpdate)&&Ot(de,G,j,Z),On(h,!0);const Ne=ko(h),yt=h.subTree;h.subTree=Ne,b(yt,Ne,f(yt.el),N(yt),h,C,A),j.el=Ne.el,ge===null&&__(h,Ne.el),U&&it(U,C),(de=j.props&&j.props.onVnodeUpdated)&&it(()=>Ot(de,G,j,Z),C)}else{let j;const{el:F,props:U}=m,{bm:G,m:Z,parent:ge}=h,de=Ki(m);if(On(h,!1),G&&Ao(G),!de&&(j=U&&U.onVnodeBeforeMount)&&Ot(j,ge,m),On(h,!0),F&&Q){const Ne=()=>{h.subTree=ko(h),Q(F,h.subTree,h,C,null)};de?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Ne()):Ne()}else{const Ne=h.subTree=ko(h);b(null,Ne,v,y,h,C,A),m.el=Ne.el}if(Z&&it(Z,C),!de&&(j=U&&U.onVnodeMounted)){const Ne=m;it(()=>Ot(j,ge,Ne),C)}(m.shapeFlag&256||ge&&Ki(ge.vnode)&&ge.vnode.shapeFlag&256)&&h.a&&it(h.a,C),h.isMounted=!0,m=v=y=null}},k=h.effect=new sl(T,()=>dl(x),h.scope),x=h.update=()=>k.run();x.id=h.uid,On(h,!0),x()},me=(h,m,v)=>{m.component=h;const y=h.vnode.props;h.vnode=m,h.next=null,H_(h,m.props,y,v),z_(h,m.children,v),Oi(),Bc(),Pi()},fe=(h,m,v,y,C,A,R,T,k=!1)=>{const x=h&&h.children,j=h?h.shapeFlag:0,F=m.children,{patchFlag:U,shapeFlag:G}=m;if(U>0){if(U&128){Nn(x,F,v,y,C,A,R,T,k);return}else if(U&256){_t(x,F,v,y,C,A,R,T,k);return}}G&8?(j&16&&P(x,C,A),F!==x&&u(v,F)):j&16?G&16?Nn(x,F,v,y,C,A,R,T,k):P(x,C,A,!0):(j&8&&u(v,""),G&16&&q(F,v,y,C,A,R,T,k))},_t=(h,m,v,y,C,A,R,T,k)=>{h=h||pi,m=m||pi;const x=h.length,j=m.length,F=Math.min(x,j);let U;for(U=0;U<F;U++){const G=m[U]=k?fn(m[U]):Pt(m[U]);b(h[U],G,v,null,C,A,R,T,k)}x>j?P(h,C,A,!0,!1,F):q(m,v,y,C,A,R,T,k,F)},Nn=(h,m,v,y,C,A,R,T,k)=>{let x=0;const j=m.length;let F=h.length-1,U=j-1;for(;x<=F&&x<=U;){const G=h[x],Z=m[x]=k?fn(m[x]):Pt(m[x]);if($n(G,Z))b(G,Z,v,null,C,A,R,T,k);else break;x++}for(;x<=F&&x<=U;){const G=h[F],Z=m[U]=k?fn(m[U]):Pt(m[U]);if($n(G,Z))b(G,Z,v,null,C,A,R,T,k);else break;F--,U--}if(x>F){if(x<=U){const G=U+1,Z=G<j?m[G].el:y;for(;x<=U;)b(null,m[x]=k?fn(m[x]):Pt(m[x]),v,Z,C,A,R,T,k),x++}}else if(x>U)for(;x<=F;)tt(h[x],C,A,!0),x++;else{const G=x,Z=x,ge=new Map;for(x=Z;x<=U;x++){const at=m[x]=k?fn(m[x]):Pt(m[x]);at.key!=null&&ge.set(at.key,x)}let de,Ne=0;const yt=U-Z+1;let oi=!1,Ac=0;const Hi=new Array(yt);for(x=0;x<yt;x++)Hi[x]=0;for(x=G;x<=F;x++){const at=h[x];if(Ne>=yt){tt(at,C,A,!0);continue}let Rt;if(at.key!=null)Rt=ge.get(at.key);else for(de=Z;de<=U;de++)if(Hi[de-Z]===0&&$n(at,m[de])){Rt=de;break}Rt===void 0?tt(at,C,A,!0):(Hi[Rt-Z]=x+1,Rt>=Ac?Ac=Rt:oi=!0,b(at,m[Rt],v,null,C,A,R,T,k),Ne++)}const kc=oi?Y_(Hi):pi;for(de=kc.length-1,x=yt-1;x>=0;x--){const at=Z+x,Rt=m[at],Nc=at+1<j?m[at+1].el:y;Hi[x]===0?b(null,Rt,v,Nc,C,A,R,T,k):oi&&(de<0||x!==kc[de]?vt(Rt,v,Nc,2):de--)}}},vt=(h,m,v,y,C=null)=>{const{el:A,type:R,transition:T,children:k,shapeFlag:x}=h;if(x&6){vt(h.component.subTree,m,v,y);return}if(x&128){h.suspense.move(m,v,y);return}if(x&64){R.move(h,m,v,re);return}if(R===je){i(A,m,v);for(let F=0;F<k.length;F++)vt(k[F],m,v,y);i(h.anchor,m,v);return}if(R===Ro){O(h,m,v);return}if(y!==2&&x&1&&T)if(y===0)T.beforeEnter(A),i(A,m,v),it(()=>T.enter(A),C);else{const{leave:F,delayLeave:U,afterLeave:G}=T,Z=()=>i(A,m,v),ge=()=>{F(A,()=>{Z(),G&&G()})};U?U(A,Z,ge):ge()}else i(A,m,v)},tt=(h,m,v,y=!1,C=!1)=>{const{type:A,props:R,ref:T,children:k,dynamicChildren:x,shapeFlag:j,patchFlag:F,dirs:U}=h;if(T!=null&&ha(T,null,v,h,!0),j&256){m.ctx.deactivate(h);return}const G=j&1&&U,Z=!Ki(h);let ge;if(Z&&(ge=R&&R.onVnodeBeforeUnmount)&&Ot(ge,m,h),j&6)E(h.component,v,y);else{if(j&128){h.suspense.unmount(v,y);return}G&&Rn(h,null,m,"beforeUnmount"),j&64?h.type.remove(h,m,v,C,re,y):x&&(A!==je||F>0&&F&64)?P(x,m,v,!1,!0):(A===je&&F&384||!C&&j&16)&&P(k,m,v),y&&si(h)}(Z&&(ge=R&&R.onVnodeUnmounted)||G)&&it(()=>{ge&&Ot(ge,m,h),G&&Rn(h,null,m,"unmounted")},v)},si=h=>{const{type:m,el:v,anchor:y,transition:C}=h;if(m===je){zr(v,y);return}if(m===Ro){B(h);return}const A=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:R,delayLeave:T}=C,k=()=>R(v,A);T?T(h.el,A,k):k()}else A()},zr=(h,m)=>{let v;for(;h!==m;)v=d(h),r(h),h=v;r(m)},E=(h,m,v)=>{const{bum:y,scope:C,update:A,subTree:R,um:T}=h;y&&Ao(y),C.stop(),A&&(A.active=!1,tt(R,h,m,v)),T&&it(T,m),it(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(h,m,v,y=!1,C=!1,A=0)=>{for(let R=A;R<h.length;R++)tt(h[R],m,v,y,C)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),H=(h,m,v)=>{h==null?m._vnode&&tt(m._vnode,null,null,!0):b(m._vnode||null,h,m,null,null,null,v),Bc(),Ld(),m._vnode=h},re={p:b,um:tt,m:vt,r:si,mt:Ve,mc:q,pc:fe,pbc:ae,n:N,o:t};let Se,Q;return e&&([Se,Q]=e(re)),{render:H,hydrate:Se,createApp:V_(H,Se)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ih(t,e,n=!1){const i=t.children,r=e.children;if(W(i)&&W(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fn(r[s]),a.el=o.el),n||ih(o,a))}}function Y_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const K_=t=>t.__isTeleport,je=Symbol(void 0),vl=Symbol(void 0),mt=Symbol(void 0),Ro=Symbol(void 0),Qi=[];let Ct=null;function te(t=!1){Qi.push(Ct=t?null:[])}function Q_(){Qi.pop(),Ct=Qi[Qi.length-1]||null}let pr=1;function Qc(t){pr+=t}function rh(t){return t.dynamicChildren=pr>0?Ct||pi:null,Q_(),pr>0&&Ct&&Ct.push(t),t}function he(t,e,n,i,r,s){return rh(D(t,e,n,i,r,s,!0))}function bn(t,e,n,i,r){return rh(Y(t,e,n,i,r,!0))}function vs(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const ro="__vInternal",sh=({key:t})=>t!=null?t:null,us=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||Re(t)||K(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,i=0,r=null,s=t===je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sh(e),ref:e&&us(e),scopeId:Js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(yl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),pr>0&&!o&&Ct&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ct.push(l),l}const Y=X_;function X_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Gd)&&(t=mt),vs(t)){const a=wn(t,e,!0);return n&&yl(a,n),pr>0&&!s&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(lv(t)&&(t=t.__vccOpts),e){e=J_(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Ge(a)),Ie(l)&&(Td(l)&&!W(l)&&(l=We({},l)),e.style=ar(l))}const o=Fe(t)?1:v_(t)?128:K_(t)?64:Ie(t)?4:K(t)?2:0;return D(t,e,n,i,r,o,s,!0)}function J_(t){return t?Td(t)||ro in t?We({},t):t:null}function wn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Z_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sh(a),ref:e&&e.ref?n&&r?W(r)?r.concat(us(e)):[r,us(e)]:us(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wn(t.ssContent),ssFallback:t.ssFallback&&wn(t.ssFallback),el:t.el,anchor:t.anchor}}function oh(t=" ",e=0){return Y(vl,null,t,e)}function Lt(t="",e=!1){return e?(te(),bn(mt,null,t)):Y(mt,null,t)}function Pt(t){return t==null||typeof t=="boolean"?Y(mt):W(t)?Y(je,null,t.slice()):typeof t=="object"?fn(t):Y(vl,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wn(t)}function yl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),yl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ro in e)?e._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),i&64?(n=16,e=[oh(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ge([e.class,i.class]));else if(r==="style")e.style=ar([e.style,i.style]);else if(Vs(r)){const s=e[r],o=i[r];o&&s!==o&&!(W(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ot(t,e,n,i=null){pt(t,e,7,[n,i])}const ev=nh();let tv=0;function nv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ev,s={uid:tv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(i,r),emitsOptions:$d(i,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:i.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=h_.bind(null,s),t.ce&&t.ce(s),s}let ze=null;const ah=()=>ze||Ze,Ci=t=>{ze=t,t.scope.on()},Gn=()=>{ze&&ze.scope.off(),ze=null};function lh(t){return t.vnode.shapeFlag&4}let mr=!1;function iv(t,e=!1){mr=e;const{props:n,children:i}=t.vnode,r=lh(t);B_(t,n,r,e),U_(t,i);const s=r?rv(t,e):void 0;return mr=!1,s}function rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sd(new Proxy(t.ctx,P_));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?ov(t):null;Ci(t),Oi();const s=pn(i,t,0,[t.props,r]);if(Pi(),Gn(),fd(s)){if(s.then(Gn,Gn),e)return s.then(o=>{Xc(t,o,e)}).catch(o=>{Qs(o,t,0)});t.asyncDep=s}else Xc(t,s,e)}else ch(t,e)}function Xc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Rd(e)),ch(t,n)}let Jc;function ch(t,e,n){const i=t.type;if(!t.render){if(!e&&Jc&&!i.render){const r=i.template||gl(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=We(We({isCustomElement:s,delimiters:a},o),l);i.render=Jc(r,c)}}t.render=i.render||St}Ci(t),Oi(),M_(t),Pi(),Gn()}function sv(t){return new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}})}function ov(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=sv(t))},slots:t.slots,emit:t.emit,expose:e}}function bl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rd(Sd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)}}))}function av(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function lv(t){return K(t)&&"__vccOpts"in t}const Ce=(t,e)=>a_(t,e,mr);function so(t,e,n){const i=arguments.length;return i===2?Ie(e)&&!W(e)?vs(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vs(n)&&(n=[n]),Y(t,e,n))}const cv="3.2.40",uv="http://www.w3.org/2000/svg",Bn=typeof document<"u"?document:null,Zc=Bn&&Bn.createElement("template"),fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Bn.createElementNS(uv,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Zc.innerHTML=i?`<svg>${t}</svg>`:t;const a=Zc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hv(t,e,n){const i=t.style,r=Fe(n);if(n&&!r){for(const s in n)pa(i,s,n[s]);if(e&&!Fe(e))for(const s in e)n[s]==null&&pa(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const eu=/\s*!important$/;function pa(t,e,n){if(W(n))n.forEach(i=>pa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=pv(t,e);eu.test(n)?t.setProperty(Ri(i),n.replace(eu,""),"important"):t[i]=n}}const tu=["Webkit","Moz","ms"],Oo={};function pv(t,e){const n=Oo[e];if(n)return n;let i=Bt(e);if(i!=="filter"&&i in t)return Oo[e]=i;i=Ys(i);for(let r=0;r<tu.length;r++){const s=tu[r]+i;if(s in t)return Oo[e]=s}return e}const nu="http://www.w3.org/1999/xlink";function mv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nu,e.slice(6,e.length)):t.setAttributeNS(nu,e,n);else{const s=gg(e);n==null||s&&!ld(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function gv(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ld(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[uh,_v]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ma=0;const vv=Promise.resolve(),yv=()=>{ma=0},bv=()=>ma||(vv.then(yv),ma=uh());function wv(t,e,n,i){t.addEventListener(e,n,i)}function Ev(t,e,n,i){t.removeEventListener(e,n,i)}function Cv(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=xv(e);if(i){const c=s[e]=Iv(i,r);wv(t,a,c,l)}else o&&(Ev(t,a,o,l),s[e]=void 0)}}const iu=/(?:Once|Passive|Capture)$/;function xv(t){let e;if(iu.test(t)){e={};let i;for(;i=t.match(iu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ri(t.slice(2)),e]}function Iv(t,e){const n=i=>{const r=i.timeStamp||uh();(_v||r>=n.attached-1)&&pt(Tv(i,n.value),e,5,[i])};return n.value=t,n.attached=bv(),n}function Tv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ru=/^on[a-z]/,Sv=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?dv(t,i,r):e==="style"?hv(t,n,i):Vs(e)?el(e)||Cv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Av(t,e,i,r))?gv(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),mv(t,e,i,r))};function Av(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ru.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ru.test(e)&&Fe(n)?!1:e in t}const an="transition",ji="animation",fh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kv=We({},E_.props,fh),Pn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},su=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Nv(t){const e={};for(const L in t)L in fh||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Rv(r),b=g&&g[0],I=g&&g[1],{onBeforeEnter:_,onEnter:w,onEnterCancelled:O,onLeave:B,onLeaveCancelled:V,onBeforeAppear:le=_,onAppear:ue=w,onAppearCancelled:q=O}=e,ne=(L,be,Ve)=>{un(L,be?u:a),un(L,be?c:o),Ve&&Ve()},ae=(L,be)=>{L._isLeaving=!1,un(L,f),un(L,p),un(L,d),be&&be()},Pe=L=>(be,Ve)=>{const sn=L?ue:w,Te=()=>ne(be,L,Ve);Pn(sn,[be,Te]),ou(()=>{un(be,L?l:s),Ut(be,L?u:a),su(sn)||au(be,i,b,Te)})};return We(e,{onBeforeEnter(L){Pn(_,[L]),Ut(L,s),Ut(L,o)},onBeforeAppear(L){Pn(le,[L]),Ut(L,l),Ut(L,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(L,be){L._isLeaving=!0;const Ve=()=>ae(L,be);Ut(L,f),hh(),Ut(L,d),ou(()=>{!L._isLeaving||(un(L,f),Ut(L,p),su(B)||au(L,i,I,Ve))}),Pn(B,[L,Ve])},onEnterCancelled(L){ne(L,!1),Pn(O,[L])},onAppearCancelled(L){ne(L,!0),Pn(q,[L])},onLeaveCancelled(L){ae(L),Pn(V,[L])}})}function Rv(t){if(t==null)return null;if(Ie(t))return[Po(t.enter),Po(t.leave)];{const e=Po(t);return[e,e]}}function Po(t){return pd(t)}function Ut(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function un(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ou(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ov=0;function au(t,e,n,i){const r=t._endId=++Ov,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=dh(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function dh(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(an+"Delay"),s=i(an+"Duration"),o=lu(r,s),a=i(ji+"Delay"),l=i(ji+"Duration"),c=lu(a,l);let u=null,f=0,d=0;e===an?o>0&&(u=an,f=o,d=s.length):e===ji?c>0&&(u=ji,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?an:ji:null,d=u?u===an?s.length:l.length:0);const p=u===an&&/\b(transform|all)(,|$)/.test(n[an+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:p}}function lu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>cu(n)+cu(t[i])))}function cu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function hh(){return document.body.offsetHeight}const ph=new WeakMap,mh=new WeakMap,Pv={name:"TransitionGroup",props:We({},kv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ah(),i=jd();let r,s;return Wd(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Fv(r[0].el,n.vnode.el,o))return;r.forEach(Mv),r.forEach(Dv);const a=r.filter(Lv);hh(),a.forEach(l=>{const c=l.el,u=c.style;Ut(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,un(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=oe(t),a=Nv(o);let l=o.tag||je;r=s,s=e.default?hl(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&hr(u,dr(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];hr(u,dr(u,a,i,n)),ph.set(u,u.el.getBoundingClientRect())}return Y(l,null,s)}}},gh=Pv;function Mv(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Dv(t){mh.set(t,t.el.getBoundingClientRect())}function Lv(t){const e=ph.get(t),n=mh.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Fv(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=dh(i);return r.removeChild(i),s}const $v=We({patchProp:Sv},fv);let uu;function Bv(){return uu||(uu=q_($v))}const Hv=(...t)=>{const e=Bv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=jv(i);if(!r)return;const s=e._component;!K(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function jv(t){return Fe(t)?document.querySelector(t):t}const Nt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Uv={};function zv(t,e){const n=Yt("router-view");return te(),bn(n)}const Wv=Nt(Uv,[["render",zv]]);function Vv(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(r){r(n)}),(i=t.get("*"))&&i.slice().map(function(r){r(e,n)})}}}const ys=Vv(),_h=new Map,fu={x:["left","center","right"],y:["top","bottom"]},qv=(t=>()=>t++)(0),Gv=t=>typeof t!="string"?[]:t.split(/\s+/gi).filter(e=>e),Yv=t=>{typeof t=="string"&&(t=Gv(t));let e=null,n=null;return t.forEach(i=>{fu.y.indexOf(i)!==-1&&(n=i),fu.x.indexOf(i)!==-1&&(e=i)}),{x:e,y:n}};class Kv{constructor(e,n,i){this.remaining=n,this.callback=e,this.notifyItem=i,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Mo={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},wl=Oe({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",t,e)},leave(t,e){this.$emit("leave",t,e)},afterLeave(){this.$emit("after-leave")}}});function Qv(t,e,n,i,r,s){return te(),bn(gh,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:Ye(()=>[ht(t.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}wl.render=Qv;wl.__file="src/VelocityGroup.vue";var El=Oe({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function Xv(t,e,n,i,r,s){return te(),bn(gh,{tag:"span",name:t.name},{default:Ye(()=>[ht(t.$slots,"default")]),_:3},8,["name"])}El.render=Xv;El.__file="src/CssGroup.vue";const Do="[-+]?[0-9]*.?[0-9]+",du=[{name:"px",regexp:new RegExp(`^${Do}px$`)},{name:"%",regexp:new RegExp(`^${Do}%$`)},{name:"px",regexp:new RegExp(`^${Do}$`)}],Jv=t=>{if(t==="auto")return{type:t,value:0};for(let e=0;e<du.length;e++){const n=du[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}},Zv=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return Jv(t);default:return{type:"",value:t}}},Kr={IDLE:0,DESTROYED:2};var Cl=Oe({name:"notifications",components:{VelocityGroup:wl,CssGroup:El},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Mo.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Mo.velocityAnimation},animationName:{type:String,default:Mo.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:_h.get("velocity"),timerControl:null}},computed:{actualWidth(){return Zv(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=Yv(this.position),n=this.actualWidth.value,i=this.actualWidth.type,r={width:n+i};return e&&(r[e]="0px"),t&&(t==="center"?r.left=`calc(50% - ${+n/2}${i})`:r[t]="0px"),r},active(){return this.list.filter(t=>t.state!==Kr.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){ys.on("add",this.addItem),ys.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear){this.destroyAll();return}const e=typeof t.duration=="number"?t.duration:this.duration,n=typeof t.speed=="number"?t.speed:this.speed,i=typeof t.ignoreDuplicates=="boolean"?t.ignoreDuplicates:this.ignoreDuplicates,{title:r,text:s,type:o,data:a,id:l}=t,c={id:l||qv(),title:r,text:s,type:o,state:Kr.IDLE,speed:n,length:e+2*n,data:a};e>=0&&(this.timerControl=new Kv(()=>this.destroy(c),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let f=-1;const d=this.active.some(g=>g.title===t.title&&g.text===t.text);(!i||!d)&&(u?(this.list.push(c),this.active.length>this.max&&(f=0)):(this.list.unshift(c),this.active.length>this.max&&(f=this.active.length-1)),f!==-1&&this.destroy(this.active[f]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,(e=t.type)!==null&&e!==void 0?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=Kr.DESTROYED,this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find(n=>n.id===t);e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var n;const i=(n=this.animation)===null||n===void 0?void 0:n[t];return typeof i=="function"?i.call(this,e):i},enter(t,e){if(!this.isVA)return;const n=this.getAnimation("enter",t);this.velocity(t,n,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const n=this.getAnimation("leave",t);this.velocity(t,n,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter(t=>t.state!==Kr.DESTROYED)}}});const ey=["data-id"],ty=["onClick"],ny=["innerHTML"],iy=["innerHTML"];function ry(t,e,n,i,r,s){return te(),he("div",{class:"vue-notification-group",style:ar(t.styles)},[(te(),bn(O_(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:Ye(()=>[(te(!0),he(je,null,ml(t.active,o=>(te(),he("div",{key:o.id,class:"vue-notification-wrapper",style:ar(t.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:e[0]||(e[0]=(...a)=>t.pauseTimeout&&t.pauseTimeout(...a)),onMouseleave:e[1]||(e[1]=(...a)=>t.resumeTimeout&&t.resumeTimeout(...a))},[ht(t.$slots,"body",{class:Ge([t.classes,o.type]),item:o,close:()=>t.destroy(o)},()=>[Lt(" Default slot template "),D("div",{class:Ge(t.notifyClass(o)),onClick:a=>t.destroyIfNecessary(o)},[o.title?(te(),he("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,ny)):Lt("v-if",!0),D("div",{class:"notification-content",innerHTML:o.text},null,8,iy)],10,ty)])],44,ey))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function sy(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var oy=`
.vue-notification-group {
  display: block;
  position: fixed;
  z-index: 5000;
}
.vue-notification-wrapper {
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
.notification-title {
  font-weight: 600;
}
.vue-notification-template {
  display: block;
  box-sizing: border-box;
  background: white;
  text-align: left;
}
.vue-notification {
  display: block;
  box-sizing: border-box;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  margin: 0 5px 5px;

  color: white;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
}
.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}
.vue-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}
.vue-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}
.vn-fade-enter-active, .vn-fade-leave-active, .vn-fade-move  {
  transition: all .5s;
}
.vn-fade-enter-from, .vn-fade-leave-to {
  opacity: 0;
}

`;sy(oy);Cl.render=ry;Cl.__file="src/Notifications.vue";const xl=t=>{typeof t=="string"&&(t={title:"",text:t}),typeof t=="object"&&ys.emit("add",t)};xl.close=function(t){ys.emit("close",t)};function ay(t,e={}){Object.entries(e).forEach(i=>_h.set(...i));const n=e.name||"notify";t.config.globalProperties["$"+n]=xl,t.component(e.componentName||"notifications",Cl)}var ly={install:ay},cy={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),r,s,o;if(n&&i){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,u=e instanceof RegExp;if(c!=u)return!1;if(c&&u)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(o=f[r],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let r=e.split("."),s=t;for(var n=0,i=r.length;n<i;++n){if(s==null)return null;s=s[r[n]]}return s}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let r of t)for(let s of e)if(String(this.resolveFieldData(r,s)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}}return i},reorderArray(t,e,n){let i;if(t&&e!==n){if(n>=t.length)for(i=n-t.length;i--+1;)t.push(void 0);t.splice(n,0,t.splice(e,1)[0])}},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,t),r=!0;break}r||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[r]===""?!0:n[r]}return null},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}};const qe={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},hu={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[qe.STARTS_WITH,qe.CONTAINS,qe.NOT_CONTAINS,qe.ENDS_WITH,qe.EQUALS,qe.NOT_EQUALS],numeric:[qe.EQUALS,qe.NOT_EQUALS,qe.LESS_THAN,qe.LESS_THAN_OR_EQUAL_TO,qe.GREATER_THAN,qe.GREATER_THAN_OR_EQUAL_TO],date:[qe.DATE_IS,qe.DATE_IS_NOT,qe.DATE_BEFORE,qe.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},uy=Symbol();var fy={install:(t,e)=>{let n=e?{...hu,...e}:{...hu};const i={config:Mi(n)};t.config.globalProperties.$primevue=i,t.provide(uy,i)}},vh={name:"Timeline",props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},methods:{getKey(t,e){return this.dataKey?cy.resolveFieldData(t,this.dataKey):e}},computed:{containerClass(){return["p-timeline p-component","p-timeline-"+this.align,"p-timeline-"+this.layout]}}};const dy={class:"p-timeline-event-opposite"},hy={class:"p-timeline-event-separator"},py=D("div",{class:"p-timeline-event-marker"},null,-1),my=D("div",{class:"p-timeline-event-connector"},null,-1),gy={class:"p-timeline-event-content"};function _y(t,e,n,i,r,s){return te(),he("div",{class:Ge(s.containerClass)},[(te(!0),he(je,null,ml(n.value,(o,a)=>(te(),he("div",{key:s.getKey(o,a),class:"p-timeline-event"},[D("div",dy,[ht(t.$slots,"opposite",{item:o,index:a})]),D("div",hy,[ht(t.$slots,"marker",{item:o,index:a},()=>[py]),a!==n.value.length-1?ht(t.$slots,"connector",{key:0,item:o,index:a},()=>[my]):Lt("",!0)]),D("div",gy,[ht(t.$slots,"content",{item:o,index:a})])]))),128))],2)}function vy(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var yy=`
.p-timeline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}
.p-timeline-left .p-timeline-event-content {
    text-align: left;
}
.p-timeline-right .p-timeline-event {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
}
.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}
.p-timeline-right .p-timeline-event-content {
    text-align: right;
}
.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
}
.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}
.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}
.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}
.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}
.p-timeline-event {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    min-height: 70px;
}
.p-timeline-event:last-child {
    min-height: 0;
}
.p-timeline-event-opposite {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    padding: 0 1rem;
}
.p-timeline-event-content {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    padding: 0 1rem;
}
.p-timeline-event-separator {
    -webkit-box-flex: 0;
        -ms-flex: 0;
            flex: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-timeline-event-marker {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: baseline;
        align-self: baseline;
}
.p-timeline-event-connector {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}
.p-timeline-horizontal {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
}
.p-timeline-horizontal .p-timeline-event {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
}
.p-timeline-horizontal .p-timeline-event:last-child {
    -webkit-box-flex: 0;
        -ms-flex: 0;
            flex: 0;
}
.p-timeline-horizontal .p-timeline-event-separator {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
}
.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
}
.p-timeline-bottom .p-timeline-event {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
}
.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
}
`;vy(yy);vh.render=_y;function pu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pu(Object(n),!0).forEach(function(i){$e(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function bs(t){return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bs(t)}function by(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mu(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function wy(t,e,n){return e&&mu(t.prototype,e),n&&mu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Il(t,e){return Cy(t)||Iy(t,e)||yh(t,e)||Sy()}function Or(t){return Ey(t)||xy(t)||yh(t)||Ty()}function Ey(t){if(Array.isArray(t))return ga(t)}function Cy(t){if(Array.isArray(t))return t}function xy(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Iy(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function yh(t,e){if(!!t){if(typeof t=="string")return ga(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(t,e)}}function ga(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ty(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gu=function(){},Tl={},bh={},wh=null,Eh={mark:gu,measure:gu};try{typeof window<"u"&&(Tl=window),typeof document<"u"&&(bh=document),typeof MutationObserver<"u"&&(wh=MutationObserver),typeof performance<"u"&&(Eh=performance)}catch{}var Ay=Tl.navigator||{},_u=Ay.userAgent,vu=_u===void 0?"":_u,En=Tl,xe=bh,yu=wh,Qr=Eh;En.document;var tn=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",Ch=~vu.indexOf("MSIE")||~vu.indexOf("Trident/"),Xr,Jr,Zr,es,ts,Kt="___FONT_AWESOME___",_a=16,xh="fa",Ih="svg-inline--fa",Kn="data-fa-i2svg",va="data-fa-pseudo-element",ky="data-fa-pseudo-element-pending",Sl="data-prefix",Al="data-icon",bu="fontawesome-i2svg",Ny="async",Ry=["HTML","HEAD","STYLE","SCRIPT"],Th=function(){try{return!0}catch{return!1}}(),Ee="classic",Ae="sharp",kl=[Ee,Ae];function Pr(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Ee]}})}var gr=Pr((Xr={},$e(Xr,Ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),$e(Xr,Ae,{fa:"solid",fass:"solid","fa-solid":"solid"}),Xr)),_r=Pr((Jr={},$e(Jr,Ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(Jr,Ae,{solid:"fass"}),Jr)),vr=Pr((Zr={},$e(Zr,Ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(Zr,Ae,{fass:"fa-solid"}),Zr)),Oy=Pr((es={},$e(es,Ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(es,Ae,{"fa-solid":"fass"}),es)),Py=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Sh="fa-layers-text",My=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Dy=Pr((ts={},$e(ts,Ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(ts,Ae,{900:"fass"}),ts)),Ah=[1,2,3,4,5,6,7,8,9,10],Ly=Ah.concat([11,12,13,14,15,16,17,18,19,20]),Fy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yr=new Set;Object.keys(_r[Ee]).map(yr.add.bind(yr));Object.keys(_r[Ae]).map(yr.add.bind(yr));var $y=[].concat(kl,Or(yr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hn.GROUP,Hn.SWAP_OPACITY,Hn.PRIMARY,Hn.SECONDARY]).concat(Ah.map(function(t){return"".concat(t,"x")})).concat(Ly.map(function(t){return"w-".concat(t)})),Xi=En.FontAwesomeConfig||{};function By(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Hy(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var jy=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jy.forEach(function(t){var e=Il(t,2),n=e[0],i=e[1],r=Hy(By(n));r!=null&&(Xi[i]=r)})}var kh={styleDefault:"solid",familyDefault:"classic",cssPrefix:xh,replacementClass:Ih,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);var xi=M(M({},kh),Xi);xi.autoReplaceSvg||(xi.observeMutations=!1);var $={};Object.keys(kh).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){xi[t]=n,Ji.forEach(function(i){return i($)})},get:function(){return xi[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){xi.cssPrefix=e,Ji.forEach(function(n){return n($)})},get:function(){return xi.cssPrefix}});En.FontAwesomeConfig=$;var Ji=[];function Uy(t){return Ji.push(t),function(){Ji.splice(Ji.indexOf(t),1)}}var ln=_a,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zy(t){if(!(!t||!tn)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return xe.head.insertBefore(e,i),t}}var Wy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function br(){for(var t=12,e="";t-- >0;)e+=Wy[Math.random()*62|0];return e}function Di(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nl(t){return t.classList?Di(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Nh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vy(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Nh(t[n]),'" ')},"").trim()}function oo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Rl(t){return t.size!==Ft.size||t.x!==Ft.x||t.y!==Ft.y||t.rotate!==Ft.rotate||t.flipX||t.flipY}function qy(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Gy(t){var e=t.transform,n=t.width,i=n===void 0?_a:n,r=t.height,s=r===void 0?_a:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Ch?l+="translate(".concat(e.x/ln-i/2,"em, ").concat(e.y/ln-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ln,"em), calc(-50% + ").concat(e.y/ln,"em)) "):l+="translate(".concat(e.x/ln,"em, ").concat(e.y/ln,"em) "),l+="scale(".concat(e.size/ln*(e.flipX?-1:1),", ").concat(e.size/ln*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Yy=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Rh(){var t=xh,e=Ih,n=$.cssPrefix,i=$.replacementClass,r=Yy;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var wu=!1;function Lo(){$.autoAddCss&&!wu&&(zy(Rh()),wu=!0)}var Ky={mixout:function(){return{dom:{css:Rh,insertCss:Lo}}},hooks:function(){return{beforeDOMElementCreation:function(){Lo()},beforeI2svg:function(){Lo()}}}},Qt=En||{};Qt[Kt]||(Qt[Kt]={});Qt[Kt].styles||(Qt[Kt].styles={});Qt[Kt].hooks||(Qt[Kt].hooks={});Qt[Kt].shims||(Qt[Kt].shims=[]);var xt=Qt[Kt],Oh=[],Qy=function t(){xe.removeEventListener("DOMContentLoaded",t),ws=1,Oh.map(function(e){return e()})},ws=!1;tn&&(ws=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),ws||xe.addEventListener("DOMContentLoaded",Qy));function Xy(t){!tn||(ws?setTimeout(t,0):Oh.push(t))}function Mr(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Nh(t):"<".concat(e," ").concat(Vy(i),">").concat(s.map(Mr).join(""),"</").concat(e,">")}function Eu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Jy=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Fo=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Jy(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Zy(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ya(t){var e=Zy(t);return e.length===1?e[0].toString(16):null}function eb(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Cu(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function ba(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Cu(e);typeof xt.hooks.addPack=="function"&&!r?xt.hooks.addPack(t,Cu(e)):xt.styles[t]=M(M({},xt.styles[t]||{}),s),t==="fas"&&ba("fa",e)}var ns,is,rs,fi=xt.styles,tb=xt.shims,nb=(ns={},$e(ns,Ee,Object.values(vr[Ee])),$e(ns,Ae,Object.values(vr[Ae])),ns),Ol=null,Ph={},Mh={},Dh={},Lh={},Fh={},ib=(is={},$e(is,Ee,Object.keys(gr[Ee])),$e(is,Ae,Object.keys(gr[Ae])),is);function rb(t){return~$y.indexOf(t)}function sb(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!rb(r)?r:null}var $h=function(){var e=function(s){return Fo(fi,function(o,a,l){return o[l]=Fo(a,s,{}),o},{})};Ph=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Mh=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),Fh=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in fi||$.autoFetchSvg,i=Fo(tb,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Dh=i.names,Lh=i.unicodes,Ol=ao($.styleDefault,{family:$.familyDefault})};Uy(function(t){Ol=ao(t.styleDefault,{family:$.familyDefault})});$h();function Pl(t,e){return(Ph[t]||{})[e]}function ob(t,e){return(Mh[t]||{})[e]}function jn(t,e){return(Fh[t]||{})[e]}function Bh(t){return Dh[t]||{prefix:null,iconName:null}}function ab(t){var e=Lh[t],n=Pl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Cn(){return Ol}var Ml=function(){return{prefix:null,iconName:null,rest:[]}};function ao(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Ee:n,r=gr[i][t],s=_r[i][t]||_r[i][r],o=t in xt.styles?t:null;return s||o||null}var xu=(rs={},$e(rs,Ee,Object.keys(vr[Ee])),$e(rs,Ae,Object.keys(vr[Ae])),rs);function lo(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},$e(e,Ee,"".concat($.cssPrefix,"-").concat(Ee)),$e(e,Ae,"".concat($.cssPrefix,"-").concat(Ae)),e),o=null,a=Ee;(t.includes(s[Ee])||t.some(function(c){return xu[Ee].includes(c)}))&&(a=Ee),(t.includes(s[Ae])||t.some(function(c){return xu[Ae].includes(c)}))&&(a=Ae);var l=t.reduce(function(c,u){var f=sb($.cssPrefix,u);if(fi[u]?(u=nb[a].includes(u)?Oy[a][u]:u,o=u,c.prefix=u):ib[a].indexOf(u)>-1?(o=u,c.prefix=ao(u,{family:a})):f?c.iconName=f:u!==$.replacementClass&&u!==s[Ee]&&u!==s[Ae]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?Bh(c.iconName):{},p=jn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!fi.far&&fi.fas&&!$.autoFetchSvg&&(c.prefix="fas")}return c},Ml());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ae&&(fi.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=jn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Cn()||"fas"),l}var lb=function(){function t(){by(this,t),this.definitions={}}return wy(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),ba(a,o[a]);var l=vr[Ee][a];l&&ba(l,o[a]),$h()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Iu=[],di={},vi={},cb=Object.keys(vi);function ub(t,e){var n=e.mixoutsTo;return Iu=t,di={},Object.keys(vi).forEach(function(i){cb.indexOf(i)===-1&&delete vi[i]}),Iu.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),bs(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){di[o]||(di[o]=[]),di[o].push(s[o])})}i.provides&&i.provides(vi)}),n}function wa(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=di[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Qn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=di[t]||[];r.forEach(function(s){s.apply(null,n)})}function Xt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vi[t]?vi[t].apply(null,e):void 0}function Ea(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Cn();if(!!e)return e=jn(n,e)||e,Eu(Hh.definitions,n,e)||Eu(xt.styles,n,e)}var Hh=new lb,fb=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Qn("noAuto")},db={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tn?(Qn("beforeI2svg",e),Xt("pseudoElements2svg",e),Xt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,Xy(function(){pb({autoReplaceSvgRoot:n}),Qn("watch",e)})}},hb={icon:function(e){if(e===null)return null;if(bs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:jn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=ao(e[0]);return{prefix:i,iconName:jn(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(Py))){var r=lo(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Cn(),iconName:jn(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Cn();return{prefix:s,iconName:jn(s,e)||e}}}},ft={noAuto:fb,config:$,dom:db,parse:hb,library:Hh,findIconDefinition:Ea,toHtml:Mr},pb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?xe:n;(Object.keys(xt.styles).length>0||$.autoFetchSvg)&&tn&&$.autoReplaceSvg&&ft.dom.i2svg({node:i})};function co(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Mr(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!tn){var i=xe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function mb(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Rl(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=oo(M(M({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function gb(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},r),{},{id:o}),children:i}]}]}function Dl(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,g=i.found?i:n,b=g.width,I=g.height,_=r==="fak",w=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(ne){return f.classes.indexOf(ne)===-1}).filter(function(ne){return ne!==""||!!ne}).concat(f.classes).join(" "),O={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(I)})},B=_&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/I*16*.0625,"em")}:{};p&&(O.attributes[Kn]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||br())},children:[l]}),delete O.attributes.title);var V=M(M({},O),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:M(M({},B),f.styles)}),le=i.found&&n.found?Xt("generateAbstractMask",V)||{children:[],attributes:{}}:Xt("generateAbstractIcon",V)||{children:[],attributes:{}},ue=le.children,q=le.attributes;return V.children=ue,V.attributes=q,a?gb(V):mb(V)}function Tu(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Kn]="");var u=M({},o.styles);Rl(r)&&(u.transform=Gy({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=oo(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function _b(t){var e=t.content,n=t.title,i=t.extra,r=M(M(M({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=oo(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $o=xt.styles;function Ca(t){var e=t[0],n=t[1],i=t.slice(4),r=Il(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Hn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Hn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var vb={found:!1,width:512,height:512};function yb(t,e){!Th&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xa(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=Cn()),new Promise(function(i,r){if(Xt("missingIconAbstract"),n==="fa"){var s=Bh(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&$o[e]&&$o[e][t]){var o=$o[e][t];return i(Ca(o))}yb(t,e),i(M(M({},vb),{},{icon:$.showMissingIcons&&t?Xt("missingIconAbstract")||{}:{}}))})}var Su=function(){},Ia=$.measurePerformance&&Qr&&Qr.mark&&Qr.measure?Qr:{mark:Su,measure:Su},Yi='FA "6.2.0"',bb=function(e){return Ia.mark("".concat(Yi," ").concat(e," begins")),function(){return jh(e)}},jh=function(e){Ia.mark("".concat(Yi," ").concat(e," ends")),Ia.measure("".concat(Yi," ").concat(e),"".concat(Yi," ").concat(e," begins"),"".concat(Yi," ").concat(e," ends"))},Ll={begin:bb,end:jh},fs=function(){};function Au(t){var e=t.getAttribute?t.getAttribute(Kn):null;return typeof e=="string"}function wb(t){var e=t.getAttribute?t.getAttribute(Sl):null,n=t.getAttribute?t.getAttribute(Al):null;return e&&n}function Eb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function Cb(){if($.autoReplaceSvg===!0)return ds.replace;var t=ds[$.autoReplaceSvg];return t||ds.replace}function xb(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function Ib(t){return xe.createElement(t)}function Uh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?xb:Ib:n;if(typeof t=="string")return xe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Uh(o,{ceFn:i}))}),r}function Tb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ds={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Uh(r),n)}),n.getAttribute(Kn)===null&&$.keepOriginalSource){var i=xe.createComment(Tb(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Nl(n).indexOf($.replacementClass))return ds.replace(e);var r=new RegExp("".concat($.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return Mr(a)}).join(`
`);n.setAttribute(Kn,""),n.innerHTML=o}};function ku(t){t()}function zh(t,e){var n=typeof e=="function"?e:fs;if(t.length===0)n();else{var i=ku;$.mutateApproach===Ny&&(i=En.requestAnimationFrame||ku),i(function(){var r=Cb(),s=Ll.begin("mutate");t.map(r),s(),n()})}}var Fl=!1;function Wh(){Fl=!0}function Ta(){Fl=!1}var Es=null;function Nu(t){if(!!yu&&!!$.observeMutations){var e=t.treeCallback,n=e===void 0?fs:e,i=t.nodeCallback,r=i===void 0?fs:i,s=t.pseudoElementsCallback,o=s===void 0?fs:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;Es=new yu(function(c){if(!Fl){var u=Cn();Di(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Au(f.addedNodes[0])&&($.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Au(f.target)&&~Fy.indexOf(f.attributeName))if(f.attributeName==="class"&&wb(f.target)){var d=lo(Nl(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(Sl,p||u),g&&f.target.setAttribute(Al,g)}else Eb(f.target)&&r(f.target)})}}),tn&&Es.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sb(){!Es||Es.disconnect()}function Ab(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function kb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=lo(Nl(t));return r.prefix||(r.prefix=Cn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=ob(r.prefix,t.innerText)||Pl(r.prefix,ya(t.innerText))),!r.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Nb(t){var e=Di(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(i||br()):(e["aria-hidden"]="true",e.focusable="false")),e}function Rb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ru(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=kb(t),i=n.iconName,r=n.prefix,s=n.rest,o=Nb(t),a=wa("parseNodeAttributes",{},t),l=e.styleParser?Ab(t):[];return M({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Ob=xt.styles;function Vh(t){var e=$.autoReplaceSvg==="nest"?Ru(t,{styleParser:!1}):Ru(t);return~e.extra.classes.indexOf(Sh)?Xt("generateLayersText",t,e):Xt("generateSvgReplacementMutation",t,e)}var xn=new Set;kl.map(function(t){xn.add("fa-".concat(t))});Object.keys(gr[Ee]).map(xn.add.bind(xn));Object.keys(gr[Ae]).map(xn.add.bind(xn));xn=Or(xn);function Ou(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tn)return Promise.resolve();var n=xe.documentElement.classList,i=function(f){return n.add("".concat(bu,"-").concat(f))},r=function(f){return n.remove("".concat(bu,"-").concat(f))},s=$.autoFetchSvg?xn:kl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ob));s.includes("fa")||s.push("fa");var o=[".".concat(Sh,":not([").concat(Kn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Kn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Di(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ll.begin("onTree"),c=a.reduce(function(u,f){try{var d=Vh(f);d&&u.push(d)}catch(p){Th||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){zh(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function Pb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vh(t).then(function(n){n&&zh([n],e)})}function Mb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Ea(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ea(r||{})),t(i,M(M({},n),{},{mask:r}))}}var Db=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Ft:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,g=p===void 0?null:p,b=n.classes,I=b===void 0?[]:b,_=n.attributes,w=_===void 0?{}:_,O=n.styles,B=O===void 0?{}:O;if(!!e){var V=e.prefix,le=e.iconName,ue=e.icon;return co(M({type:"icon"},e),function(){return Qn("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(d?w["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||br()):(w["aria-hidden"]="true",w.focusable="false")),Dl({icons:{main:Ca(ue),mask:l?Ca(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:le,transform:M(M({},Ft),r),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:w,styles:B,classes:I}})})}},Lb={mixout:function(){return{icon:Mb(Db)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ou,n.nodeCallback=Pb,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?xe:i,s=n.callback,o=s===void 0?function(){}:s;return Ou(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,g){Promise.all([xa(r,a),u.iconName?xa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var I=Il(b,2),_=I[0],w=I[1];p([n,Dl({icons:{main:_,mask:w},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=oo(a);l.length>0&&(r.style=l);var c;return Rl(o)&&(c=Xt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},Fb={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return co({type:"layer"},function(){Qn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Or(s)).join(" ")},children:o}]})}}}},$b={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return co({type:"counter",content:n},function(){return Qn("beforeDOMElementCreation",{content:n,params:i}),_b({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Or(a))}})})}}}},Bb={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Ft:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return co({type:"text",content:n},function(){return Qn("beforeDOMElementCreation",{content:n,params:i}),Tu({content:n,transform:M(M({},Ft),s),title:a,extra:{attributes:f,styles:p,classes:["".concat($.cssPrefix,"-layers-text")].concat(Or(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(Ch){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return $.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Tu({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},Hb=new RegExp('"',"ug"),Pu=[1105920,1112319];function jb(t){var e=t.replace(Hb,""),n=eb(e,0),i=n>=Pu[0]&&n<=Pu[1],r=e.length===2?e[0]===e[1]:!1;return{value:ya(r?e[0]:e),isSecondary:i||r}}function Mu(t,e){var n="".concat(ky).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Di(t.children),o=s.filter(function(ue){return ue.getAttribute(va)===e})[0],a=En.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(My),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ae:Ee,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_r[d][l[2].toLowerCase()]:Dy[d][c],g=jb(f),b=g.value,I=g.isSecondary,_=l[0].startsWith("FontAwesome"),w=Pl(p,b),O=w;if(_){var B=ab(b);B.iconName&&B.prefix&&(w=B.iconName,p=B.prefix)}if(w&&!I&&(!o||o.getAttribute(Sl)!==p||o.getAttribute(Al)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var V=Rb(),le=V.extra;le.attributes[va]=e,xa(w,p).then(function(ue){var q=Dl(M(M({},V),{},{icons:{main:ue,mask:Ml()},prefix:p,iconName:O,extra:le,watchable:!0})),ne=xe.createElement("svg");e==="::before"?t.insertBefore(ne,t.firstChild):t.appendChild(ne),ne.outerHTML=q.map(function(ae){return Mr(ae)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function Ub(t){return Promise.all([Mu(t,"::before"),Mu(t,"::after")])}function zb(t){return t.parentNode!==document.head&&!~Ry.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(va)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Du(t){if(!!tn)return new Promise(function(e,n){var i=Di(t.querySelectorAll("*")).filter(zb).map(Ub),r=Ll.begin("searchPseudoElements");Wh(),Promise.all(i).then(function(){r(),Ta(),e()}).catch(function(){r(),Ta(),n()})})}var Wb={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Du,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?xe:i;$.searchPseudoElements&&Du(r)}}},Lu=!1,Vb={mixout:function(){return{dom:{unwatch:function(){Wh(),Lu=!0}}}},hooks:function(){return{bootstrap:function(){Nu(wa("mutationObserverCallbacks",{}))},noAuto:function(){Sb()},watch:function(n){var i=n.observeMutationsRoot;Lu?Ta():Nu(wa("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Fu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},qb={mixout:function(){return{parse:{transform:function(n){return Fu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Fu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:M({},p.outer),children:[{tag:"g",attributes:M({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:M(M({},i.icon.attributes),p.path)}]}]}}}},Bo={x:0,y:0,width:"100%",height:"100%"};function $u(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gb(t){return t.tag==="g"?t.children:[t]}var Yb={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?lo(r.split(" ").map(function(o){return o.trim()})):Ml();return s.prefix||(s.prefix=Cn()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,p=qy({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:M(M({},Bo),{},{fill:"white"})},b=u.children?{children:u.children.map($u)}:{},I={tag:"g",attributes:M({},p.inner),children:[$u(M({tag:u.tag,attributes:M(M({},u.attributes),p.path)},b))]},_={tag:"g",attributes:M({},p.outer),children:[I]},w="mask-".concat(a||br()),O="clip-".concat(a||br()),B={tag:"mask",attributes:M(M({},Bo),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,_]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Gb(d)},B]};return i.push(V,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Bo)}),{children:i,attributes:r}}}},Kb={provides:function(e){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:M(M({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:M(M({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:M(M({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Qb={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},Xb=[Ky,Lb,Fb,$b,Bb,Wb,Vb,qb,Yb,Kb,Qb];ub(Xb,{mixoutsTo:ft});ft.noAuto;var qh=ft.config,Jb=ft.library;ft.dom;var Cs=ft.parse;ft.findIconDefinition;ft.toHtml;var Zb=ft.icon;ft.layer;var e0=ft.text;ft.counter;function Bu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bu(Object(n),!0).forEach(function(i){nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xs(t){return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xs(t)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function t0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function n0(t,e){if(t==null)return{};var n=t0(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function Sa(t){return i0(t)||r0(t)||s0(t)||o0()}function i0(t){if(Array.isArray(t))return Aa(t)}function r0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function s0(t,e){if(!!t){if(typeof t=="string")return Aa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Aa(t,e)}}function Aa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gh={exports:{}};(function(t){(function(e){var n=function(_,w,O){if(!c(w)||f(w)||d(w)||p(w)||l(w))return w;var B,V=0,le=0;if(u(w))for(B=[],le=w.length;V<le;V++)B.push(n(_,w[V],O));else{B={};for(var ue in w)Object.prototype.hasOwnProperty.call(w,ue)&&(B[_(ue,O)]=n(_,w[ue],O))}return B},i=function(_,w){w=w||{};var O=w.separator||"_",B=w.split||/(?=[A-Z])/;return _.split(B).join(O)},r=function(_){return g(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var w=r(_);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(_,w){return i(_,w).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},f=function(_){return a.call(_)=="[object Date]"},d=function(_){return a.call(_)=="[object RegExp]"},p=function(_){return a.call(_)=="[object Boolean]"},g=function(_){return _=_-0,_===_},b=function(_,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?_:function(B,V){return O(B,_,V)}},I={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,w){return n(b(r,w),_)},decamelizeKeys:function(_,w){return n(b(o,w),_,w)},pascalizeKeys:function(_,w){return n(b(s,w),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(a0)})(Gh);var l0=Gh.exports,c0=["class","style"];function u0(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=l0.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function f0(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function $l(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return $l(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=f0(u);break;case"style":l.style=u0(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=n0(n,c0);return so(t.tag,wt(wt(wt({},e),{},{class:r.class,style:wt(wt({},r.style),o)},r.attrs),a),i)}var Yh=!1;try{Yh=!0}catch{}function d0(){if(!Yh&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Zi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?nt({},t,e):{}}function h0(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},nt(e,"fa-".concat(t.size),t.size!==null),nt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),nt(e,"fa-pull-".concat(t.pull),t.pull!==null),nt(e,"fa-swap-opacity",t.swapOpacity),nt(e,"fa-bounce",t.bounce),nt(e,"fa-shake",t.shake),nt(e,"fa-beat",t.beat),nt(e,"fa-fade",t.fade),nt(e,"fa-beat-fade",t.beatFade),nt(e,"fa-flash",t.flash),nt(e,"fa-spin-pulse",t.spinPulse),nt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Hu(t){if(t&&xs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Cs.icon)return Cs.icon(t);if(t===null)return null;if(xs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var p0=Oe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Ce(function(){return Hu(e.icon)}),s=Ce(function(){return Zi("classes",h0(e))}),o=Ce(function(){return Zi("transform",typeof e.transform=="string"?Cs.transform(e.transform):e.transform)}),a=Ce(function(){return Zi("mask",Hu(e.mask))}),l=Ce(function(){return Zb(r.value,wt(wt(wt(wt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});qn(l,function(u){if(!u)return d0("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Ce(function(){return l.value?$l(l.value.abstract[0],{},i):null});return function(){return c.value}}});Oe({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=qh.familyPrefix,s=Ce(function(){return["".concat(r,"-layers")].concat(Sa(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return so("div",{class:s.value},i.default?i.default():[])}}});Oe({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=qh.familyPrefix,s=Ce(function(){return Zi("classes",[].concat(Sa(e.counter?["".concat(r,"-layers-counter")]:[]),Sa(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Ce(function(){return Zi("transform",typeof e.transform=="string"?Cs.transform(e.transform):e.transform)}),a=Ce(function(){var c=e0(e.value.toString(),wt(wt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ce(function(){return $l(a.value,{},i)});return function(){return l.value}}});var m0={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},g0={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},_0={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},v0={prefix:"fas",iconName:"up-right-from-square",icon:[448,512,["external-link-alt"],"f35d","M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},y0={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z"]},b0={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},w0={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},E0={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},C0={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},x0={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+Kh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},I0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(n[u],n[f],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),f!==64){const g=c<<6&192|f;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Xh=function(t){const e=Qh(t);return Bl.encodeByteArray(e,!0)},Is=function(t){return Xh(t).replace(/\./g,"")},ka=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){return Jh(void 0,t)}function Jh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!S0(n)||(t[n]=Jh(t[n],e[n]));return t}function S0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A0())}function k0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){return Kh.NODE_ADMIN===!0}function tp(){return typeof indexedDB=="object"}function np(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function R0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function O0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=()=>O0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},D0=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&ka(t[1]);return e&&JSON.parse(e)},ip=()=>P0()||M0()||D0(),L0=t=>{var e,n;return(n=(e=ip())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F0=()=>{var t;return(t=ip())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Is(JSON.stringify(n)),Is(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class ii extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=B0,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?H0(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ii(r,a,i)}}function H0(t,e){return t.replace(j0,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const j0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=wr(ka(s[0])||""),n=wr(ka(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},U0=function(t){const e=rp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},z0=function(t){const e=rp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ts(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Uu(s)&&Uu(o)){if(!Ss(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Uu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Hl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ho=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e3,Y0=2,K0=4*60*60*1e3,Q0=.5;function zu(t,e=G0,n=Y0){const i=e*Math.pow(n,t),r=Math.round(Q0*i*(Math.random()-.5)*2);return Math.min(K0,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===Dn?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const t1={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},n1=_e.INFO,i1={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},r1=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=i1[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=r1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const s1=(t,e)=>e.some(n=>t instanceof n);let Wu,Vu;function o1(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a1(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,Na=new WeakMap,op=new WeakMap,Ho=new WeakMap,Ul=new WeakMap;function l1(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mn(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sp.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function c1(t){if(Na.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Na.set(t,e)}let Ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Na.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u1(t){Ra=t(Ra)}function f1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(jo(this),e,...n);return op.set(i,e.sort?e.sort():[e]),mn(i)}:a1().includes(t)?function(...e){return t.apply(jo(this),e),mn(sp.get(this))}:function(...e){return mn(t.apply(jo(this),e))}}function d1(t){return typeof t=="function"?f1(t):(t instanceof IDBTransaction&&c1(t),s1(t,o1())?new Proxy(t,Ra):t)}function mn(t){if(t instanceof IDBRequest)return l1(t);if(Ho.has(t))return Ho.get(t);const e=d1(t);return e!==t&&(Ho.set(t,e),Ul.set(e,t)),e}const jo=t=>Ul.get(t);function ap(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=mn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const h1=["get","getKey","getAll","getAllKeys","count"],p1=["put","add","delete","clear"],Uo=new Map;function qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uo.get(e))return Uo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=p1.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||h1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Uo.set(e,s),s}u1(t=>({...t,get:(e,n,i)=>qu(e,n)||t.get(e,n,i),has:(e,n)=>!!qu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g1(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function g1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oa="@firebase/app",Gu="0.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new jl("@firebase/app"),_1="@firebase/app-compat",v1="@firebase/analytics-compat",y1="@firebase/analytics",b1="@firebase/app-check-compat",w1="@firebase/app-check",E1="@firebase/auth",C1="@firebase/auth-compat",x1="@firebase/database",I1="@firebase/database-compat",T1="@firebase/functions",S1="@firebase/functions-compat",A1="@firebase/installations",k1="@firebase/installations-compat",N1="@firebase/messaging",R1="@firebase/messaging-compat",O1="@firebase/performance",P1="@firebase/performance-compat",M1="@firebase/remote-config",D1="@firebase/remote-config-compat",L1="@firebase/storage",F1="@firebase/storage-compat",$1="@firebase/firestore",B1="@firebase/firestore-compat",H1="firebase",j1="9.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="[DEFAULT]",U1={[Oa]:"fire-core",[_1]:"fire-core-compat",[y1]:"fire-analytics",[v1]:"fire-analytics-compat",[w1]:"fire-app-check",[b1]:"fire-app-check-compat",[E1]:"fire-auth",[C1]:"fire-auth-compat",[x1]:"fire-rtdb",[I1]:"fire-rtdb-compat",[T1]:"fire-fn",[S1]:"fire-fn-compat",[A1]:"fire-iid",[k1]:"fire-iid-compat",[N1]:"fire-fcm",[R1]:"fire-fcm-compat",[O1]:"fire-perf",[P1]:"fire-perf-compat",[M1]:"fire-rc",[D1]:"fire-rc-compat",[L1]:"fire-gcs",[F1]:"fire-gcs-compat",[$1]:"fire-fst",[B1]:"fire-fst-compat","fire-js":"fire-js",[H1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Map,Ma=new Map;function z1(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Ma.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ma.set(e,t);for(const n of As.values())z1(n,t);return!0}function Dr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new fo("app","Firebase",W1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=j1;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pa,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw gn.create("bad-app-name",{appName:String(r)});if(n||(n=F0()),!n)throw gn.create("no-options");const s=As.get(r);if(s){if(Ss(n,s.options)&&Ss(i,s.config))return s;throw gn.create("duplicate-app",{appName:r})}const o=new e1(r);for(const l of Ma.values())o.addComponent(l);const a=new V1(n,i,o);return As.set(r,a),a}function cp(t=Pa){const e=As.get(t);if(!e&&t===Pa)return lp();if(!e)throw gn.create("no-app",{appName:t});return e}function $t(t,e,n){var i;let r=(i=U1[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}In(new Jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="firebase-heartbeat-database",Y1=1,Er="firebase-heartbeat-store";let zo=null;function up(){return zo||(zo=ap(G1,Y1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Er)}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),zo}async function K1(t){var e;try{return(await up()).transaction(Er).objectStore(Er).get(fp(t))}catch(n){if(n instanceof ii)Xn.warn(n.message);else{const i=gn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xn.warn(i.message)}}}async function Yu(t,e){var n;try{const r=(await up()).transaction(Er,"readwrite");return await r.objectStore(Er).put(e,fp(t)),r.done}catch(i){if(i instanceof ii)Xn.warn(i.message);else{const r=gn.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Xn.warn(r.message)}}}function fp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=1024,X1=30*24*60*60*1e3;class J1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ew(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=X1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:n,unsentEntries:i}=Z1(this._heartbeatsCache.heartbeats),r=Is(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ku(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Q1){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Qu(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ew{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tp()?np().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await K1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return Is(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){In(new Jt("platform-logger",e=>new m1(e),"PRIVATE")),In(new Jt("heartbeat",e=>new J1(e),"PRIVATE")),$t(Oa,Gu,t),$t(Oa,Gu,"esm2017"),$t("fire-js","")}tw("");var nw="firebase",iw="9.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(nw,iw,"app");const dp="@firebase/installations",zl="0.5.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=1e4,pp=`w:${zl}`,mp="FIS_v2",rw="https://firebaseinstallations.googleapis.com/v1",sw=60*60*1e3,ow="installations",aw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jn=new fo(ow,aw,lw);function gp(t){return t instanceof ii&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p({projectId:t}){return`${rw}/projects/${t}/installations`}function vp(t){return{token:t.token,requestStatus:2,expiresIn:uw(t.expiresIn),creationTime:Date.now()}}async function yp(t,e){const i=(await e.json()).error;return Jn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function bp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cw(t,{refreshToken:e}){const n=bp(t);return n.append("Authorization",fw(e)),n}async function wp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uw(t){return Number(t.replace("s","000"))}function fw(t){return`${mp} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=_p(t),r=bp(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:mp,appId:t.appId,sdkVersion:pp},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wp(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:vp(c.authToken)}}else throw await yp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=/^[cdef][\w-]{21}$/,Da="";function mw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=gw(t);return pw.test(n)?n:Da}catch{return Da}}function gw(t){return hw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new Map;function xp(t,e){const n=po(t);Ip(n,e),_w(n,e)}function Ip(t,e){const n=Cp.get(t);if(!!n)for(const i of n)i(e)}function _w(t,e){const n=vw();n&&n.postMessage({key:t,fid:e}),yw()}let Un=null;function vw(){return!Un&&"BroadcastChannel"in self&&(Un=new BroadcastChannel("[Firebase] FID Change"),Un.onmessage=t=>{Ip(t.data.key,t.data.fid)}),Un}function yw(){Cp.size===0&&Un&&(Un.close(),Un=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="firebase-installations-database",ww=1,Zn="firebase-installations-store";let Wo=null;function Wl(){return Wo||(Wo=ap(bw,ww,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}})),Wo}async function ks(t,e){const n=po(t),r=(await Wl()).transaction(Zn,"readwrite"),s=r.objectStore(Zn),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&xp(t,e.fid),e}async function Tp(t){const e=po(t),i=(await Wl()).transaction(Zn,"readwrite");await i.objectStore(Zn).delete(e),await i.done}async function mo(t,e){const n=po(t),r=(await Wl()).transaction(Zn,"readwrite"),s=r.objectStore(Zn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&xp(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){let e;const n=await mo(t.appConfig,i=>{const r=Ew(i),s=Cw(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Da?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ew(t){const e=t||{fid:mw(),registrationStatus:0};return Sp(e)}function Cw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Jn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=xw(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Iw(t)}:{installationEntry:e}}async function xw(t,e){try{const n=await dw(t,e);return ks(t.appConfig,n)}catch(n){throw gp(n)&&n.customData.serverCode===409?await Tp(t.appConfig):await ks(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Iw(t){let e=await Xu(t.appConfig);for(;e.registrationStatus===1;)await Ep(100),e=await Xu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Vl(t);return i||n}return e}function Xu(t){return mo(t,e=>{if(!e)throw Jn.create("installation-not-found");return Sp(e)})}function Sp(t){return Tw(t)?{fid:t.fid,registrationStatus:0}:t}function Tw(t){return t.registrationStatus===1&&t.registrationTime+hp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw({appConfig:t,heartbeatServiceProvider:e},n){const i=Aw(t,n),r=cw(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:pp,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wp(()=>fetch(i,a));if(l.ok){const c=await l.json();return vp(c)}else throw await yp("Generate Auth Token",l)}function Aw(t,{fid:e}){return`${_p(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t,e=!1){let n;const i=await mo(t.appConfig,s=>{if(!Ap(s))throw Jn.create("not-registered");const o=s.authToken;if(!e&&Rw(o))return s;if(o.requestStatus===1)return n=kw(t,e),s;{if(!navigator.onLine)throw Jn.create("app-offline");const a=Pw(s);return n=Nw(t,a),a}});return n?await n:i.authToken}async function kw(t,e){let n=await Ju(t.appConfig);for(;n.authToken.requestStatus===1;)await Ep(100),n=await Ju(t.appConfig);const i=n.authToken;return i.requestStatus===0?ql(t,e):i}function Ju(t){return mo(t,e=>{if(!Ap(e))throw Jn.create("not-registered");const n=e.authToken;return Mw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Nw(t,e){try{const n=await Sw(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ks(t.appConfig,i),n}catch(n){if(gp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tp(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ks(t.appConfig,i)}throw n}}function Ap(t){return t!==void 0&&t.registrationStatus===2}function Rw(t){return t.requestStatus===2&&!Ow(t)}function Ow(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sw}function Pw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Mw(t){return t.requestStatus===1&&t.requestTime+hp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t){const e=t,{installationEntry:n,registrationPromise:i}=await Vl(e);return i?i.catch(console.error):ql(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e=!1){const n=t;return await Fw(n),(await ql(n,e)).token}async function Fw(t){const{registrationPromise:e}=await Vl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){if(!t||!t.options)throw Vo("App Configuration");if(!t.name)throw Vo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vo(t){return Jn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="installations",Bw="installations-internal",Hw=t=>{const e=t.getProvider("app").getImmediate(),n=$w(e),i=Dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},jw=t=>{const e=t.getProvider("app").getImmediate(),n=Dr(e,kp).getImmediate();return{getId:()=>Dw(n),getToken:r=>Lw(n,r)}};function Uw(){In(new Jt(kp,Hw,"PUBLIC")),In(new Jt(Bw,jw,"PRIVATE"))}Uw();$t(dp,zl);$t(dp,zl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="analytics",zw="firebase_id",Ww="origin",Vw=60*1e3,qw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Np="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new jl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Gw(t,e){const n=document.createElement("script");n.src=`${Np}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Yw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Kw(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await Rp(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){ct.error(a)}t("config",r,s)}async function Qw(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Rp(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){ct.error(s)}}function Xw(t,e,n,i){async function r(s,o,a){try{s==="event"?await Qw(t,e,n,o,a):s==="config"?await Kw(t,e,n,i,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){ct.error(l)}}return r}function Jw(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Xw(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function Zw(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Np))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},gt=new fo("analytics","Analytics",eE);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=30,nE=1e3;class iE{constructor(e={},n=nE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Op=new iE;function rE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sE(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:rE(i)},s=qw.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oE(t,e=Op,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw gt.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cE;return setTimeout(async()=>{a.abort()},n!==void 0?n:Vw),Pp({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Pp(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Op){var s,o;const{appId:a,measurementId:l}=t;try{await aE(i,e)}catch(c){if(l)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=c)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw c}try{const c=await sE(t);return r.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!lE(u)){if(r.deleteThrottleMetadata(a),l)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?zu(n,r.intervalMillis,tE):zu(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,d),ct.debug(`Calling attemptFetch again in ${f} millis`),Pp(t,d,i,r)}}function aE(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lE(t){if(!(t instanceof ii)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uE(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(){var t;if(tp())try{await np()}catch(e){return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dE(t,e,n,i,r,s,o){var a;const l=oE(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ct.error(p)),e.push(l);const c=fE().then(p=>{if(p)return i.getId()}),[u,f]=await Promise.all([l,c]);Zw()||Gw(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Ww]="firebase",d.update=!0,f!=null&&(d[zw]=f),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.app=e}_delete(){return delete er[this.app.options.appId],Promise.resolve()}}let er={},Zu=[];const ef={};let qo="dataLayer",pE="gtag",tf,Mp,nf=!1;function mE(){const t=[];if(k0()&&t.push("This is a browser extension environment."),R0()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function gE(t,e,n){mE();const i=t.options.appId;if(!i)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(er[i]!=null)throw gt.create("already-exists",{id:i});if(!nf){Yw(qo);const{wrappedGtag:s,gtagCore:o}=Jw(er,Zu,ef,qo,pE);Mp=s,tf=o,nf=!0}return er[i]=dE(t,Zu,ef,e,tf,qo,n),new hE(t)}function _E(t=cp()){t=kn(t);const e=Dr(t,Ns);return e.isInitialized()?e.getImmediate():vE(t)}function vE(t,e={}){const n=Dr(t,Ns);if(n.isInitialized()){const r=n.getImmediate();if(Ss(e,n.getOptions()))return r;throw gt.create("already-initialized")}return n.initialize({options:e})}function yE(t,e,n,i){t=kn(t),uE(Mp,er[t.app.options.appId],e,n,i).catch(r=>ct.error(r))}const rf="@firebase/analytics",sf="0.8.1";function bE(){In(new Jt(Ns,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return gE(i,r,n)},"PUBLIC")),In(new Jt("analytics-internal",t,"PRIVATE")),$t(rf,sf),$t(rf,sf,"esm2017");function t(e){try{const n=e.getProvider(Ns).getImmediate();return{logEvent:(i,r,s)=>yE(n,i,r,s)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}bE();const of="@firebase/database",af="0.13.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp="";function wE(t){Dp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EE(e)}}catch{}return new CE},zn=Lp("localStorage"),La=Lp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new jl("@firebase/database"),xE=function(){let t=1;return function(){return t++}}(),Fp=function(t){const e=q0(t),n=new V0;n.update(e);const i=n.digest();return Bl.encodeByteArray(i)},Lr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Lr.apply(null,i):typeof i=="object"?e+=Me(i):e+=i,e+=" "}return e};let Yn=null,lf=!0;const IE=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(yi.logLevel=_e.VERBOSE,Yn=yi.log.bind(yi),e&&La.set("logging_enabled",!0)):typeof t=="function"?Yn=t:(Yn=null,La.remove("logging_enabled"))},Ke=function(...t){if(lf===!0&&(lf=!1,Yn===null&&La.get("logging_enabled")===!0&&IE(!0)),Yn){const e=Lr.apply(null,t);Yn(e)}},Fr=function(t){return function(...e){Ke(t,...e)}},Fa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lr(...t);yi.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Lr(...t)}`;throw yi.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+Lr(...t);yi.warn(e)},TE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$p=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ti="[MIN_NAME]",ei="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===Ti||e===ei)return-1;if(e===Ti||t===ei)return 1;{const n=cf(t),i=cf(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},AE=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Gl=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Me(e[i]),n+=":",n+=Gl(t[e[i]]);return n+="}",n},Bp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hp=function(t){S(!$p(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},kE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const OE=new RegExp("^-?(0*)\\d{1,10}$"),PE=-2147483648,ME=2147483647,cf=function(t){if(OE.test(t)){const e=Number(t);if(e>=PE&&e<=ME)return e}return null},$i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},DE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},tr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class bi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="5",jp="v",Up="s",zp="r",Wp="f",Vp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qp="ls",Gp="p",$a="ac",Yp="websocket",Kp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $E(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xp(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===Yp)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$E(t)&&(n.ns=t.namespace);const r=[];return ot(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.counters_={}}incrementCounter(e,n=1){nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return T0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={},Yo={};function Kl(t){const e=t.toString();return Go[e]||(Go[e]=new BE),Go[e]}function HE(t,e){const n=t.toString();return Yo[n]||(Yo[n]=e()),Yo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&$i(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="start",UE="close",zE="pLPCommand",WE="pRTLPCB",Jp="id",Zp="pw",em="ser",VE="cb",qE="seg",GE="ts",YE="d",KE="dframe",tm=1870,nm=30,QE=tm-nm,XE=25e3,JE=3e4;class hi{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fr(e),this.stats_=Kl(n),this.urlFn=l=>(this.appCheckToken&&(l[$a]=this.appCheckToken),Xp(n,Kp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JE)),SE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ql((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uf)this.id=a,this.password=l;else if(o===UE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[uf]="t",i[em]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[VE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[jp]=Yl,this.transportSessionId&&(i[Up]=this.transportSessionId),this.lastSessionId&&(i[qp]=this.lastSessionId),this.applicationId&&(i[Gp]=this.applicationId),this.appCheckToken&&(i[$a]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vp.test(location.hostname)&&(i[zp]=Wp);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kE()&&!NE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Xh(n),r=Bp(i,QE);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[KE]="t",i[Jp]=e,i[Zp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ql{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xE(),window[zE+this.uniqueCallbackIdentifier]=e,window[WE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ql.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jp]=this.myID,e[Zp]=this.myPW,e[em]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nm+i.length<=tm;){const o=this.pendingSegs.shift();i=i+"&"+qE+r+"="+o.seg+"&"+GE+r+"="+o.ts+"&"+YE+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(XE)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=16384,eC=45e3;let Rs=null;typeof MozWebSocket<"u"?Rs=MozWebSocket:typeof WebSocket<"u"&&(Rs=WebSocket);class Et{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fr(this.connId),this.stats_=Kl(n),this.connURL=Et.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[jp]=Yl,typeof location<"u"&&location.hostname&&Vp.test(location.hostname)&&(o[zp]=Wp),n&&(o[Up]=n),i&&(o[qp]=i),r&&(o[$a]=r),s&&(o[Gp]=s),Xp(e,Yp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let i;ep(),this.mySock=new Rs(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Rs!==null&&!Et.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=wr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Bp(n,ZE);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hi,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Et&&Et.isAvailable();let i=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Et];else{const r=this.transports_=[];for(const s of Cr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Cr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=6e4,nC=5e3,iC=10*1024,rC=100*1024,Ko="t",ff="d",sC="s",df="r",oC="e",hf="o",pf="a",mf="n",gf="p",aC="h";class lC{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fr("c:"+this.id+":"),this.transportManager_=new Cr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=tr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ko in e){const n=e[Ko];n===pf?this.upgradeIfSecondaryHealthy_():n===df?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),i=Ui("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),i=Ui("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(Ko,e);if(ff in e){const i=e[ff];if(n===aC)this.onHandshake_(i);else if(n===mf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sC?this.onConnectionShutdown_(i):n===df?this.onReset_(i):n===oC?Fa("Server Error: "+i):n===hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yl!==i&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),tr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends rm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Os}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=32,vf=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new pe("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function sm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function om(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function am(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function De(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof pe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new pe(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function et(t,e){const n=ee(t),i=ee(e);if(n===null)return e;if(n===i)return et(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lm(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function It(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class uC{constructor(e,n){this.errorPrefix_=n,this.parts_=om(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ho(this.parts_[i]);cm(this)}}function fC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ho(e),cm(t)}function dC(t){const e=t.parts_.pop();t.byteLength_-=ho(e),t.parts_.length>0&&(t.byteLength_-=1)}function cm(t){if(t.byteLength_>vf)throw new Error(t.errorPrefix_+"has a key path longer than "+vf+" bytes ("+t.byteLength_+").");if(t.parts_.length>_f)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_f+") or object contains a cycle "+Ln(t))}function Ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends rm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Xl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=1e3,hC=60*5*1e3,yf=30*1e3,pC=1.3,mC=3e4,gC="server_kill",bf=3;class qt extends im{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=Fr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=hC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ep())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Me(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new uo,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nn(e,"w")){const i=Ii(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||z0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=U0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fa("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new lC(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{st(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gC)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&st(f),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ju(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Gl(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new pe(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bf&&(this.reconnectDelay_=yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dp.replace(/\./g,"-")]=1,Zh()?e["framework.cordova"]=1:N0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Os.getInstance().currentlyOnline();return ju(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(Ti,e),r=new X(Ti,n);return this.compare(i,r)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class um extends go{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(ei,ss)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,ss)}toString(){return".key"}}const wi=new um;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:He.RED,this.left=r!=null?r:rt.EMPTY_NODE,this.right=s!=null?s:rt.EMPTY_NODE}copy(e,n,i,r,s){return new He(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class _C{copy(e,n,i,r,s){return this}insert(e,n,i){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new os(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new _C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e){return Fi(t.name,e.name)}function Jl(t,e){return Fi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;function yC(t){Ba=t}const fm=function(t){return typeof t=="number"?"number:"+Hp(t):"string:"+t},dm=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nn(e,".sv"),"Priority must be a string or number.")}else S(t===Ba||t.isEmpty(),"priority of unexpected type.");S(t===Ba||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wf;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dm(this.priorityNode_)}static set __childrenNodeConstructor(e){wf=e}static get __childrenNodeConstructor(){return wf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:ee(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ee(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hp(this.value_):e+=this.value_,this.lazyHash_=Fp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(i);return S(r>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm,pm;function bC(t){hm=t}function wC(t){pm=t}class EC extends go{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(ei,new Be("[PRIORITY-POST]",pm))}makePost(e,n){const i=hm(e);return new X(n,new Be("[PRIORITY-POST]",i))}toString(){return".priority"}}const ke=new EC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=Math.log(2);class xC{constructor(e){const n=s=>parseInt(Math.log(s)/CC,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ps=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new He(d,f.node,He.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=r(l,p),b=r(p+1,c);return f=t[p],d=n?n(f):f,new He(d,f.node,He.BLACK,g,b)}},s=function(l){let c=null,u=null,f=t.length;const d=function(g,b){const I=f-g,_=f;f-=g;const w=r(I+1,_),O=t[I],B=n?n(O):O;p(new He(B,O.node,b,null,w))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),I=Math.pow(2,l.count-(g+1));b?d(I,He.BLACK):(d(I,He.BLACK),d(I,He.RED))}return u},o=new xC(t.length),a=s(o);return new rt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;const ai={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(ai&&ke,"ChildrenNode.ts has not been loaded"),Qo=Qo||new Wt({".priority":ai},{".priority":ke}),Qo}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return nn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(X.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ps(i,e.getCompare()):a=ai;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const i=Ts(this.indexes_,(r,s)=>{const o=Ii(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),r===ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ps(a,o.getCompare())}else return ai;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Wt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ts(this.indexes_,r=>{if(r===ai)return r;{const s=n.get(e.name);return s?r.remove(new X(e.name,s)):r}});return new Wt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;class z{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&dm(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wi||(Wi=new z(new rt(Jl),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wi}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wi:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Wi:this.priorityNode_;return new z(r,o,s)}}updateChild(e,n){const i=ee(e);if(i===null)return n;{S(ee(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ye(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ke,(o,a)=>{n[o]=a.val(e),i++,s&&z.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fm(this.getPriority().val())+":"),this.forEachChild(ke,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Fp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new X(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,X.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ke),r=n.getIterator(ke);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wi?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends z{constructor(){super(new rt(Jl),z.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const $r=new IC;Object.defineProperties(X,{MIN:{value:new X(Ti,z.EMPTY_NODE)},MAX:{value:new X(ei,$r)}});um.__EMPTY_NODE=z.EMPTY_NODE;Be.__childrenNodeConstructor=z;yC($r);wC($r);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=!0;function Ue(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Ue(e))}if(!(t instanceof Array)&&TC){const n=[];let i=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return z.EMPTY_NODE;const s=Ps(n,vC,o=>o.name,Jl);if(i){const o=Ps(n,ke.getCompare());return new z(s,Ue(e),new Wt({".priority":o},{".priority":ke}))}else return new z(s,Ue(e),Wt.Default)}else{let n=z.EMPTY_NODE;return ot(t,(i,r)=>{if(nn(t,i)&&i.substring(0,1)!=="."){const s=Ue(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ue(e))}}bC(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC extends go{constructor(e){super(),this.indexPath_=e,S(!J(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Fi(e.name,n.name):s}makePost(e,n){const i=Ue(e),r=z.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,r)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,$r);return new X(ei,e)}toString(){return om(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends go{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Fi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=Ue(e);return new X(n,i)}toString(){return".value"}}const kC=new AC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){return{type:"value",snapshotNode:t}}function Si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ir(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(xr(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Si(n,i)):o.trackChildChange(Ir(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ke,(r,s)=>{n.hasChild(r)||i.trackChildChange(xr(r,s))}),n.isLeafNode()||n.forEachChild(ke,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Ir(r,s,o))}else i.trackChildChange(Si(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.indexedFilter_=new Zl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tr.getStartPost_(e),this.endPost_=Tr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new X(n,i))||(i=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=z.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(ke,(o,a)=>{s.matches(new X(o,a))||(r=r.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.rangedFilter_=new Tr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new X(n,i))||(i=z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(z.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,p)=>f(p,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:r=r.updateImmediateChild(f.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new X(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Ir(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(xr(n,f));const b=a.updateImmediateChild(n,z.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Si(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(xr(c.name,c.node)),s.trackChildChange(Si(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ti}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(t){return t.loadsAllData()?new Zl(t.getIndex()):t.hasLimit()?new RC(t):new Tr(t)}function Ef(t){const e={};if(t.isDefault())return e;let n;return t.index_===ke?n="$priority":t.index_===kC?n="$value":t.index_===wi?n="$key":(S(t.index_ instanceof SC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_&&(e.startAt=Me(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Me(t.indexStartName_))),t.endSet_&&(e.endAt=Me(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Me(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends im{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Fr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ms.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ef(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),Ii(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=Ms.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ef(e._queryParams),i=e._path.toString(),r=new uo;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+W0(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wr(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return{value:null,children:new Map}}function gm(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ee(e);t.children.has(i)||t.children.set(i,Ds());const r=t.children.get(i);e=ye(e),gm(r,e,n)}}function Ha(t,e,n){t.value!==null?n(e,t.value):MC(t,(i,r)=>{const s=new pe(e.toString()+"/"+i);Ha(r,s,n)})}function MC(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=10*1e3,LC=30*1e3,FC=5*60*1e3;class $C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DC(e);const i=xf+(LC-xf)*Math.random();tr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ot(e,(r,s)=>{s>0&&nn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),tr(this.reportStats_.bind(this),Math.floor(Math.random()*2*FC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tt||(Tt={}));function _m(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Tt.ACK_USER_WRITE,this.source=_m()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Ls(se(),n,this.revert)}}else return S(ee(this.path)===e,"operationForChild called for unrelated child."),new Ls(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.source=e,this.path=n,this.type=Tt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Sr(this.source,se()):new Sr(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Tt.OVERWRITE}operationForChild(e){return J(this.path)?new ti(this.source,se(),this.snap.getImmediateChild(e)):new ti(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Tt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new ti(this.source,se(),n.value):new Ar(this.source,se(),n)}else return S(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ar(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HC(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(NC(o.childName,o.snapshotNode))}),Vi(t,r,"child_removed",e,i,n),Vi(t,r,"child_added",e,i,n),Vi(t,r,"child_moved",s,i,n),Vi(t,r,"child_changed",e,i,n),Vi(t,r,"value",e,i,n),r}function Vi(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>UC(t,a,l)),o.forEach(a=>{const l=jC(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function jC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UC(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),r=new X(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){return{eventCache:t,serverCache:e}}function nr(t,e,n,i){return _o(new Sn(e,n,i),t.serverCache)}function vm(t,e,n,i){return _o(t.eventCache,new Sn(e,n,i))}function Fs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ni(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;const zC=()=>(Xo||(Xo=new rt(AE)),Xo);class we{constructor(e,n=zC()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return ot(e,(i,r)=>{n=n.set(new pe(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(J(e))return null;{const i=ee(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:De(new pe(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=ee(e),i=this.children.get(n);return i!==null?i.subtree(ye(e)):new we(null)}}set(e,n){if(J(e))return new we(n,this.children);{const i=ee(e),s=(this.children.get(i)||new we(null)).set(ye(e),n),o=this.children.insert(i,s);return new we(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ee(e),i=this.children.get(n);if(i){const r=i.remove(ye(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=ee(e),i=this.children.get(n);return i?i.get(ye(e)):null}}setTree(e,n){if(J(e))return n;{const i=ee(e),s=(this.children.get(i)||new we(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new we(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(De(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(J(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),De(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,i){if(J(e))return this;{this.value&&i(n,this.value);const r=ee(e),s=this.children.get(r);return s?s.foreachOnPath_(ye(e),De(n,r),i):new we(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(De(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new we(null))}}function ir(t,e,n){if(J(e))return new At(new we(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=et(r,e);return s=s.updateChild(o,n),new At(t.writeTree_.set(r,s))}else{const r=new we(n),s=t.writeTree_.setTree(e,r);return new At(s)}}}function If(t,e,n){let i=t;return ot(n,(r,s)=>{i=ir(i,De(e,r),s)}),i}function Tf(t,e){if(J(e))return At.empty();{const n=t.writeTree_.setTree(e,new we(null));return new At(n)}}function ja(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(et(n.path,e)):null}function Sf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(i,r)=>{e.push(new X(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new X(i,r.value))}),e}function _n(t,e){if(J(e))return t;{const n=ri(t,e);return n!=null?new At(new we(n)):new At(t.writeTree_.subtree(e))}}function Ua(t){return t.writeTree_.isEmpty()}function Ai(t,e){return ym(se(),t.writeTree_,e)}function ym(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=ym(De(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(De(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return Cm(e,t)}function WC(t,e,n,i,r){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ir(t.visibleWrites,e,n)),t.lastWriteId=i}function VC(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function qC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GC(a,i.path)?r=!1:It(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return YC(t),!0;if(i.snap)t.visibleWrites=Tf(t.visibleWrites,i.path);else{const a=i.children;ot(a,l=>{t.visibleWrites=Tf(t.visibleWrites,De(i.path,l))})}return!0}else return!1}function GC(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(De(t.path,n),e))return!0;return!1}function YC(t){t.visibleWrites=bm(t.allWrites,KC,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KC(t){return t.visible}function bm(t,e,n){let i=At.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)It(n,o)?(a=et(n,o),i=ir(i,a,s.snap)):It(o,n)&&(a=et(o,n),i=ir(i,se(),s.snap.getChild(a)));else if(s.children){if(It(n,o))a=et(n,o),i=If(i,a,s.children);else if(It(o,n))if(a=et(o,n),J(a))i=If(i,se(),s.children);else{const l=Ii(s.children,ee(a));if(l){const c=l.getChild(ye(a));i=ir(i,se(),c)}}}else throw Li("WriteRecord should have .snap or .children")}}return i}function wm(t,e,n,i,r){if(!i&&!r){const s=ri(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(Ua(o))return n;if(n==null&&!ja(o,se()))return null;{const a=n||z.EMPTY_NODE;return Ai(o,a)}}}else{const s=_n(t.visibleWrites,e);if(!r&&Ua(s))return n;if(!r&&n==null&&!ja(s,se()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},a=bm(t.allWrites,o,e),l=n||z.EMPTY_NODE;return Ai(a,l)}}}function QC(t,e,n){let i=z.EMPTY_NODE;const r=ri(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ke,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(ke,(o,a)=>{const l=Ai(_n(s,new pe(o)),a);i=i.updateImmediateChild(o,l)}),Sf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=_n(t.visibleWrites,e);return Sf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function XC(t,e,n,i,r){S(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=De(e,n);if(ja(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return Ua(o)?r.getChild(n):Ai(o,r.getChild(n))}}function JC(t,e,n,i){const r=De(e,n),s=ri(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=_n(t.visibleWrites,r);return Ai(o,i.getNode().getImmediateChild(n))}else return null}function ZC(t,e){return ri(t.visibleWrites,e)}function ex(t,e,n,i,r,s,o){let a;const l=_n(t.visibleWrites,e),c=ri(l,se());if(c!=null)a=c;else if(n!=null)a=Ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<r;)f(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function tx(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function $s(t,e,n,i){return wm(t.writeTree,t.treePath,e,n,i)}function ic(t,e){return QC(t.writeTree,t.treePath,e)}function Af(t,e,n,i){return XC(t.writeTree,t.treePath,e,n,i)}function Bs(t,e){return ZC(t.writeTree,De(t.treePath,e))}function nx(t,e,n,i,r,s){return ex(t.writeTree,t.treePath,e,n,i,r,s)}function rc(t,e,n){return JC(t.writeTree,t.treePath,e,n)}function Em(t,e){return Cm(De(t.treePath,e),t.writeTree)}function Cm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ir(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,xr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Si(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ir(i,e.snapshotNode,r.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const xm=new rx;class sc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ni(this.viewCache_),s=nx(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return{filter:t}}function ox(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ax(t,e,n,i,r){const s=new ix;let o,a;if(n.type===Tt.OVERWRITE){const c=n;c.source.fromUser?o=za(t,e,c.path,c.snap,i,r,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Hs(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Tt.MERGE){const c=n;c.source.fromUser?o=cx(t,e,c.path,c.children,i,r,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wa(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Tt.ACK_USER_WRITE){const c=n;c.revert?o=dx(t,e,c.path,i,r,s):o=ux(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Tt.LISTEN_COMPLETE)o=fx(t,e,n.path,i,s);else throw Li("Unknown operation type: "+n.type);const l=s.getChanges();return lx(e,o,l),{viewCache:o,changes:l}}function lx(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Fs(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(mm(Fs(e)))}}function Im(t,e,n,i,r,s){const o=e.eventCache;if(Bs(i,n)!=null)return e;{let a,l;if(J(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ni(e),u=c instanceof z?c:z.EMPTY_NODE,f=ic(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=$s(i,ni(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ee(n);if(c===".priority"){S(Tn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Af(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ye(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Af(i,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=rc(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return nr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Hs(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ee(n);if(!l.isCompleteForPath(n)&&Tn(n)>1)return e;const g=ye(n),I=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),p,I,g,xm,null)}const f=vm(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new sc(r,f,s);return Im(t,f,n,r,d,a)}function za(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new sc(r,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=nr(e,c,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=nr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),p=a.getNode().getImmediateChild(f);let g;if(J(d))g=i;else{const b=u.getCompleteChild(f);b!=null?sm(d)===".priority"&&b.getChild(am(d)).isEmpty()?g=b:g=b.updateChild(d,i):g=z.EMPTY_NODE}if(p.equals(g))l=e;else{const b=t.filter.updateChild(a.getNode(),f,g,d,u,o);l=nr(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kf(t,e){return t.eventCache.isCompleteForChild(e)}function cx(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=De(n,l);kf(e,ee(u))&&(a=za(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=De(n,l);kf(e,ee(u))||(a=za(t,a,u,c,r,s,o))}),a}function Nf(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Wa(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=i:c=new we(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),g=Nf(t,p,d);l=Hs(t,l,new pe(f),g,r,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const g=e.serverCache.getNode().getImmediateChild(f),b=Nf(t,g,d);l=Hs(t,l,new pe(f),b,r,s,o,a)}}),l}function ux(t,e,n,i,r,s,o){if(Bs(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hs(t,e,n,l.getNode().getChild(n),r,s,a,o);if(J(n)){let c=new we(null);return l.getNode().forEachChild(wi,(u,f)=>{c=c.set(new pe(u),f)}),Wa(t,e,n,c,r,s,a,o)}else return e}else{let c=new we(null);return i.foreach((u,f)=>{const d=De(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Wa(t,e,n,c,r,s,a,o)}}function fx(t,e,n,i,r){const s=e.serverCache,o=vm(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return Im(t,o,n,i,xm,r)}function dx(t,e,n,i,r,s){let o;if(Bs(i,n)!=null)return e;{const a=new sc(i,e,r),l=e.eventCache.getNode();let c;if(J(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$s(i,ni(e));else{const f=e.serverCache.getNode();S(f instanceof z,"serverChildren would be complete if leaf node"),u=ic(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ee(n);let f=rc(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ye(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,z.EMPTY_NODE,ye(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$s(i,ni(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Bs(i,se())!=null,nr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Zl(i.getIndex()),s=OC(i);this.processor_=sx(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(z.EMPTY_NODE,a.getNode(),null),u=new Sn(l,o.isFullyInitialized(),r.filtersNodes()),f=new Sn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_o(f,u),this.eventGenerator_=new BC(this.query_)}get query(){return this.query_}}function px(t){return t.viewCache_.serverCache.getNode()}function mx(t){return Fs(t.viewCache_)}function gx(t,e){const n=ni(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Rf(t){return t.eventRegistrations_.length===0}function _x(t,e){t.eventRegistrations_.push(e)}function Of(t,e,n){const i=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Pf(t,e,n,i){e.type===Tt.MERGE&&e.source.queryId!==null&&(S(ni(t.viewCache_),"We should always have a full cache before handling merges"),S(Fs(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=ax(t.processor_,r,e,n,i);return ox(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Tm(t,s.changes,s.viewCache.eventCache.getNode(),null)}function vx(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(s,o)=>{i.push(Si(s,o))}),n.isFullyInitialized()&&i.push(mm(n.getNode())),Tm(t,i,n.getNode(),e)}function Tm(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return HC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;class Sm{constructor(){this.views=new Map}}function yx(t){S(!js,"__referenceConstructor has already been defined"),js=t}function bx(){return S(js,"Reference.ts has not been loaded"),js}function wx(t){return t.views.size===0}function oc(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return S(s!=null,"SyncTree gave us an op for an invalid query."),Pf(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Pf(o,e,n,i));return s}}function Am(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=$s(n,r?i:null),l=!1;a?l=!0:i instanceof z?(a=ic(n,i),l=!1):(a=z.EMPTY_NODE,l=!1);const c=_o(new Sn(a,l,!1),new Sn(i,r,!1));return new hx(e,c)}return o}function Ex(t,e,n,i,r,s){const o=Am(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_x(o,n),vx(o,n)}function Cx(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=An(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Of(c,n,i)),Rf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Of(l,n,i)),Rf(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!An(t)&&s.push(new(bx())(e._repo,e._path)),{removed:s,events:o}}function km(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const i of t.views.values())n=n||gx(i,e);return n}function Nm(t,e){if(e._queryParams.loadsAllData())return yo(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Rm(t,e){return Nm(t,e)!=null}function An(t){return yo(t)!=null}function yo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;function xx(t){S(!Us,"__referenceConstructor has already been defined"),Us=t}function Ix(){return S(Us,"Reference.ts has not been loaded"),Us}let Tx=1;class Mf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=tx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Om(t,e,n,i,r){return WC(t.pendingWriteTree_,e,n,i,r),r?Hr(t,new ti(_m(),e,n)):[]}function Wn(t,e,n=!1){const i=VC(t.pendingWriteTree_,e);if(qC(t.pendingWriteTree_,e)){let s=new we(null);return i.snap!=null?s=s.set(se(),!0):ot(i.children,o=>{s=s.set(new pe(o),!0)}),Hr(t,new Ls(i.path,s,n))}else return[]}function Br(t,e,n){return Hr(t,new ti(tc(),e,n))}function Sx(t,e,n){const i=we.fromObject(n);return Hr(t,new Ar(tc(),e,i))}function Ax(t,e){return Hr(t,new Sr(tc(),e))}function kx(t,e,n){const i=lc(t,n);if(i){const r=cc(i),s=r.path,o=r.queryId,a=et(s,e),l=new Sr(nc(o),a);return uc(t,s,l)}else return[]}function Pm(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Rm(o,e))){const l=Cx(o,e,n,i);wx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,p)=>An(p));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=Px(d);for(let g=0;g<p.length;++g){const b=p[g],I=b.query,_=Fm(t,b);t.listenProvider_.startListening(rr(I),kr(t,I),_.hashFn,_.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(rr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(bo(d));t.listenProvider_.stopListening(rr(d),p)}))}Mx(t,c)}return a}function Mm(t,e,n,i){const r=lc(t,i);if(r!=null){const s=cc(r),o=s.path,a=s.queryId,l=et(o,e),c=new ti(nc(a),l,n);return uc(t,o,c)}else return[]}function Nx(t,e,n,i){const r=lc(t,i);if(r){const s=cc(r),o=s.path,a=s.queryId,l=et(o,e),c=we.fromObject(n),u=new Ar(nc(a),l,c);return uc(t,o,u)}else return[]}function Rx(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const g=et(d,r);s=s||vn(p,g),o=o||An(p)});let a=t.syncPointTree_.get(r);a?(o=o||An(a),s=s||vn(a,se())):(a=new Sm,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,g)=>{const b=vn(g,se());b&&(s=s.updateImmediateChild(p,b))}));const c=Rm(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=bo(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=Dx();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=vo(t.pendingWriteTree_,r);let f=Ex(a,e,n,u,s,l);if(!c&&!o&&!i){const d=Nm(a,e);f=f.concat(Lx(t,e,d))}return f}function ac(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=et(o,e),c=vn(a,l);if(c)return c});return wm(r,e,s,n,!0)}function Ox(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=et(c,n);i=i||vn(u,f)});let r=t.syncPointTree_.get(n);r?i=i||vn(r,se()):(r=new Sm,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Sn(i,!0,!1):null,a=vo(t.pendingWriteTree_,e._path),l=Am(r,e,a,s?o.getNode():z.EMPTY_NODE,s);return mx(l)}function Hr(t,e){return Dm(e,t.syncPointTree_,null,vo(t.pendingWriteTree_,se()))}function Dm(t,e,n,i){if(J(t.path))return Lm(t,e,n,i);{const r=e.get(se());n==null&&r!=null&&(n=vn(r,se()));let s=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Em(i,o);s=s.concat(Dm(a,l,c,u))}return r&&(s=s.concat(oc(r,t,i,n))),s}}function Lm(t,e,n,i){const r=e.get(se());n==null&&r!=null&&(n=vn(r,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Em(i,o),u=t.operationForChild(o);u&&(s=s.concat(Lm(u,a,l,c)))}),r&&(s=s.concat(oc(r,t,i,n))),s}function Fm(t,e){const n=e.query,i=kr(t,n);return{hashFn:()=>(px(e)||z.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?kx(t,n._path,i):Ax(t,n._path);{const s=RE(r,n);return Pm(t,n,null,s)}}}}function kr(t,e){const n=bo(e);return t.queryToTagMap.get(n)}function bo(t){return t._path.toString()+"$"+t._queryIdentifier}function lc(t,e){return t.tagToQueryMap.get(e)}function cc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function uc(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const r=vo(t.pendingWriteTree_,e);return oc(i,n,r,null)}function Px(t){return t.fold((e,n,i)=>{if(n&&An(n))return[yo(n)];{let r=[];return n&&(r=km(n)),ot(i,(s,o)=>{r=r.concat(o)}),r}})}function rr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ix())(t._repo,t._path):t}function Mx(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=bo(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Dx(){return Tx++}function Lx(t,e,n){const i=e._path,r=kr(t,e),s=Fm(t,n),o=t.listenProvider_.startListening(rr(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)S(!An(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!J(c)&&u&&An(u))return[yo(u).query];{let d=[];return u&&(d=d.concat(km(u).map(p=>p.query))),ot(f,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(rr(u),kr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fc(n)}node(){return this.node_}}class dc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new dc(this.syncTree_,n)}node(){return ac(this.syncTree_,this.path_)}}const Fx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Df=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $x(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Bx(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$x=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Bx=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const r=e.node();if(S(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Hx=function(t,e,n,i){return hc(e,new dc(n,t),i)},$m=function(t,e,n){return hc(t,new fc(e),n)};function hc(t,e,n){const i=t.getPriority().val(),r=Df(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Df(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Be(a,Ue(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Be(r))),o.forEachChild(ke,(a,l)=>{const c=hc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function mc(t,e){let n=e instanceof pe?e:new pe(e),i=t,r=ee(n);for(;r!==null;){const s=Ii(i.node.children,r)||{children:{},childCount:0};i=new pc(r,i,s),n=ye(n),r=ee(n)}return i}function Bi(t){return t.node.value}function Bm(t,e){t.node.value=e,Va(t)}function Hm(t){return t.node.childCount>0}function jx(t){return Bi(t)===void 0&&!Hm(t)}function wo(t,e){ot(t.node.children,(n,i)=>{e(new pc(n,t,i))})}function jm(t,e,n,i){n&&!i&&e(t),wo(t,r=>{jm(r,e,!0,i)}),n&&i&&e(t)}function Ux(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jr(t){return new pe(t.parent===null?t.name:jr(t.parent)+"/"+t.name)}function Va(t){t.parent!==null&&zx(t.parent,t.name,t)}function zx(t,e,n){const i=jx(n),r=nn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Va(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Va(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=/[\[\].#$\/\u0000-\u001F\u007F]/,Vx=/[\[\].#$\u0000-\u001F\u007F]/,Jo=10*1024*1024,Um=function(t){return typeof t=="string"&&t.length!==0&&!Wx.test(t)},zm=function(t){return typeof t=="string"&&t.length!==0&&!Vx.test(t)},qx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zm(t)},Gx=function(t,e,n,i){i&&e===void 0||gc(Hl(t,"value"),e,n)},gc=function(t,e,n){const i=n instanceof pe?new uC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ln(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ln(i)+" with contents = "+e.toString());if($p(e))throw new Error(t+"contains "+e.toString()+" "+Ln(i));if(typeof e=="string"&&e.length>Jo/3&&ho(e)>Jo)throw new Error(t+"contains a string greater than "+Jo+" utf8 bytes "+Ln(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Um(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ln(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fC(i,o),gc(t,a,i),dC(i)}),r&&s)throw new Error(t+' contains ".value" child '+Ln(i)+" in addition to actual children.")}},Wm=function(t,e,n,i){if(!(i&&n===void 0)&&!zm(n))throw new Error(Hl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Yx=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wm(t,e,n,i)},Kx=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Um(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qx(n))throw new Error(Hl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vm(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!lm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Ht(t,e,n){Vm(t,n),Jx(t,i=>It(i,e)||It(e,i))}function Jx(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Zx(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Zx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Yn&&Ke("event: "+n.toString()),$i(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="repo_interrupt",tI=25;class nI{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ds(),this.transactionQueueTree_=new pc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iI(t,e,n){if(t.stats_=Kl(t.repoInfo_),t.forceRestClient_||DE())t.server_=new Ms(t.repoInfo_,(i,r,s,o)=>{Lf(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ff(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new qt(t.repoInfo_,e,(i,r,s,o)=>{Lf(t,i,r,s,o)},i=>{Ff(t,i)},i=>{sI(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=HE(t.repoInfo_,()=>new $C(t.stats_,t.server_)),t.infoData_=new PC,t.infoSyncTree_=new Mf({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Br(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vc(t,"connected",!1),t.serverSyncTree_=new Mf({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Ht(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function rI(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _c(t){return Fx({timestamp:rI(t)})}function Lf(t,e,n,i,r){t.dataUpdateCount++;const s=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Ts(n,c=>Ue(c));o=Nx(t.serverSyncTree_,s,l,r)}else{const l=Ue(n);o=Mm(t.serverSyncTree_,s,l,r)}else if(i){const l=Ts(n,c=>Ue(c));o=Sx(t.serverSyncTree_,s,l)}else{const l=Ue(n);o=Br(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Co(t,s)),Ht(t.eventQueue_,a,o)}function Ff(t,e){vc(t,"connected",e),e===!1&&lI(t)}function sI(t,e){ot(e,(n,i)=>{vc(t,n,i)})}function vc(t,e,n){const i=new pe("/.info/"+e),r=Ue(n);t.infoData_.updateSnapshot(i,r);const s=Br(t.infoSyncTree_,i,r);Ht(t.eventQueue_,i,s)}function qm(t){return t.nextWriteId_++}function oI(t,e,n){const i=Ox(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=Ue(r).withIndex(e._queryParams.getIndex());Rx(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Br(t.serverSyncTree_,e._path,s);else{const a=kr(t.serverSyncTree_,e);o=Mm(t.serverSyncTree_,e._path,s,a)}return Ht(t.eventQueue_,e._path,o),Pm(t.serverSyncTree_,e,n,null,!0),s},r=>(Eo(t,"get for query "+Me(e)+" failed: "+r),Promise.reject(new Error(r))))}function aI(t,e,n,i,r){Eo(t,"set",{path:e.toString(),value:n,priority:i});const s=_c(t),o=Ue(n,i),a=ac(t.serverSyncTree_,e),l=$m(o,a,s),c=qm(t),u=Om(t.serverSyncTree_,e,l,c,!0);Vm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||st("set at "+e+" failed: "+d);const b=Wn(t.serverSyncTree_,c,!g);Ht(t.eventQueue_,e,b),uI(t,r,d,p)});const f=Xm(t,e);Co(t,f),Ht(t.eventQueue_,f,[])}function lI(t){Eo(t,"onDisconnectEvents");const e=_c(t),n=Ds();Ha(t.onDisconnect_,se(),(r,s)=>{const o=Hx(r,s,t.serverSyncTree_,e);gm(n,r,o)});let i=[];Ha(n,se(),(r,s)=>{i=i.concat(Br(t.serverSyncTree_,r,s));const o=Xm(t,r);Co(t,o)}),t.onDisconnect_=Ds(),Ht(t.eventQueue_,se(),i)}function cI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eI)}function Eo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function uI(t,e,n,i){e&&$i(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Gm(t,e,n){return ac(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function yc(t,e=t.transactionQueueTree_){if(e||xo(t,e),Bi(e)){const n=Km(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&fI(t,jr(e),n)}else Hm(e)&&wo(e,n=>{yc(t,n)})}function fI(t,e,n){const i=n.map(c=>c.currentWriteId),r=Gm(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=et(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Eo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Wn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xo(t,mc(t.transactionQueueTree_,e)),yc(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)$i(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Co(t,e)}},o)}function Co(t,e){const n=Ym(t,e),i=jr(n),r=Km(t,n);return dI(t,r,i),i}function dI(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=et(n,l.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tI)u=!0,f="maxretry",r=r.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Gm(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){gc("transaction failed: Data returned ",p,l.path);let g=Ue(p);typeof p=="object"&&p!=null&&nn(p,".priority")||(g=g.updatePriority(d.getPriority()));const I=l.currentWriteId,_=_c(t),w=$m(g,d,_);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=qm(t),o.splice(o.indexOf(I),1),r=r.concat(Om(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(Wn(t.serverSyncTree_,I,!0))}else u=!0,f="nodata",r=r.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0))}Ht(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}xo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)$i(i[a]);yc(t,t.transactionQueueTree_)}function Ym(t,e){let n,i=t.transactionQueueTree_;for(n=ee(e);n!==null&&Bi(i)===void 0;)i=mc(i,n),e=ye(e),n=ee(e);return i}function Km(t,e){const n=[];return Qm(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Qm(t,e,n){const i=Bi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);wo(e,r=>{Qm(t,r,n)})}function xo(t,e){const n=Bi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Bm(e,n.length>0?n:void 0)}wo(e,i=>{xo(t,i)})}function Xm(t,e){const n=jr(Ym(t,e)),i=mc(t.transactionQueueTree_,e);return Ux(i,r=>{Zo(t,r)}),Zo(t,i),jm(i,r=>{Zo(t,r)}),n}function Zo(t,e){const n=Bi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Bm(e,void 0):n.length=s+1,Ht(t.eventQueue_,jr(e),r);for(let o=0;o<i.length;o++)$i(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function pI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const $f=function(t,e){const n=mI(t),i=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TE();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qp(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new pe(n.pathString)}},mI=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=hI(t.substring(u,f)));const d=pI(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class _I{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return J(this._path)?null:sm(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Cf(this._queryParams),n=Gl(e);return n==="{}"?"default":n}get _queryObject(){return Cf(this._queryParams)}isEqual(e){if(e=kn(e),!(e instanceof bc))return!1;const n=this._repo===e._repo,i=lm(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+cC(this._path)}}class rn extends bc{constructor(e,n){super(e,n,new ec,!1)}get parent(){const e=am(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),i=zs(this.ref,e);return new Nr(this._node.getChild(n),i,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Nr(r,zs(this.ref,i),ke)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jm(t,e){return t=kn(t),t._checkNotDeleted("ref"),e!==void 0?zs(t._root,e):t._root}function zs(t,e){return t=kn(t),ee(t._path)===null?Yx("child","path",e,!1):Wm("child","path",e,!1),new rn(t._repo,De(t._path,e))}function yI(t,e){t=kn(t),Kx("set",t._path),Gx("set",e,t._path,!1);const n=new uo;return aI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bI(t){t=kn(t);const e=new vI(()=>{}),n=new wc(e);return oI(t._repo,t,n).then(i=>new Nr(i,new rn(t._repo,t._path),t._queryParams.getIndex()))}class wc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new gI("value",this,new Nr(e.snapshotNode,new rn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _I(this,e,n):null}matches(e){return e instanceof wc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}yx(rn);xx(rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FIREBASE_DATABASE_EMULATOR_HOST",qa={};let EI=!1;function CI(t,e,n,i){t.repoInfo_=new Qp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function xI(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$f(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[wI]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=$f(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new bi(bi.OWNER):new FE(t.name,t.options,e);Qx("Invalid Firebase Database URL",o),J(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=TI(a,t,u,new LE(t.name,n));return new SI(f,t)}function II(t,e){const n=qa[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cI(t),delete n[t.key]}function TI(t,e,n,i){let r=qa[e.name];r||(r={},qa[e.name]=r);let s=r[t.toURLString()];return s&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nI(t,EI,n,i),r[t.toURLString()]=s,s}class SI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(II(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function Ec(t=cp(),e){const n=Dr(t,"database").getImmediate({identifier:e}),i=L0("database");if(i){const[r,s]=i.split(":");AI(n,r,parseInt(s,10))}return n}function AI(t,e,n,i={}){t=kn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new bi(bi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:$0(i.mockUserToken,t.app.options.projectId);s=new bi(o)}CI(r,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){wE(q1),In(new Jt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xI(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),$t(of,af,t),$t(of,af,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kI();const NI={apiKey:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",authDomain:"truongdd03.firebaseapp.com",projectId:"truongdd03",storageBucket:"truongdd03.appspot.com",messagingSenderId:{VITE_FIREBASE_API_KEY:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",VITE_AUTH_DOMAIN:"truongdd03.firebaseapp.com",VITE_PROJECT_ID:"truongdd03",VITE_STORAGE_BUCKET:"truongdd03.appspot.com",VITE_MESSAGE_SENDER_ID:"156878048180",VITE_APP_ID:"1:156878048180:web:cfffba9df67d9f5f4a00e1",VITE_MEASUREMENT_ID:"G-YZYZPEBDGH",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGING_SENDER_ID,appId:"1:156878048180:web:cfffba9df67d9f5f4a00e1",measurementId:"G-YZYZPEBDGH"},Zm=lp(NI);_E(Zm);Ec(Zm);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ci=typeof window<"u";function RI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function ea(t,e){const n={};for(const i in e){const r=e[i];n[i]=kt(r)?r.map(t):t(r)}return n}const sr=()=>{},kt=Array.isArray,OI=/\/$/,PI=t=>t.replace(OI,"");function ta(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=FI(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function MI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DI(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ki(e.matched[i],n.matched[r])&&eg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ki(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LI(t[n],e[n]))return!1;return!0}function LI(t,e){return kt(t)?Hf(t,e):kt(e)?Hf(e,t):t===e}function Hf(t,e){return kt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function FI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Rr;(function(t){t.pop="pop",t.push="push"})(Rr||(Rr={}));var or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(or||(or={}));function $I(t){if(!t)if(ci){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PI(t)}const BI=/^[^#]+#/;function HI(t,e){return t.replace(BI,"#")+e}function jI(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Io=()=>({left:window.pageXOffset,top:window.pageYOffset});function UI(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=jI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jf(t,e){return(history.state?history.state.position-e:-1)+t}const Ga=new Map;function zI(t,e){Ga.set(t,e)}function WI(t){const e=Ga.get(t);return Ga.delete(t),e}let VI=()=>location.protocol+"//"+location.host;function tg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Bf(l,"")}return Bf(n,t)+i+r}function qI(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=tg(t,location),g=n.value,b=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}I=b?d.position-b.position:0}else i(p);r.forEach(_=>{_(n.value,g,{delta:I,type:Rr.pop,direction:I?I>0?or.forward:or.back:or.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ce({},d.state,{scroll:Io()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Uf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Io():null}}function GI(t){const{history:e,location:n}=window,i={value:tg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:VI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ce({},e.state,Uf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ce({},r.value,e.state,{forward:l,scroll:Io()});s(u.current,u,!0);const f=ce({},Uf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function YI(t){t=$I(t);const e=GI(t),n=qI(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ce({location:"",base:t,go:i,createHref:HI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KI(t){return typeof t=="string"||t&&typeof t=="object"}function ng(t){return typeof t=="string"||typeof t=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ig=Symbol("");var zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zf||(zf={}));function Ni(t,e){return ce(new Error,{type:t,[ig]:!0},e)}function jt(t,e){return t instanceof Error&&ig in t&&(e==null||!!(t.type&e))}const Wf="[^/]+?",QI={sensitive:!1,strict:!1,start:!0,end:!0},XI=/[.+*?^${}()[\]/\\]/g;function JI(t,e){const n=ce({},QI,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(XI,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:b,optional:I,regexp:_}=d;s.push({name:g,repeatable:b,optional:I});const w=_||Wf;if(w!==Wf){p+=10;try{new RegExp(`(${w})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+B.message)}}let O=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(O=I&&c.length<2?`(?:/${O})`:"/"+O),I&&(O+="?"),r+=O,p+=20,I&&(p+=-8),b&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:b,optional:I}=p,_=g in c?c[g]:"";if(kt(_)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=kt(_)?_.join("/"):_;if(!w)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eT(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=ZI(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Vf(i))return 1;if(Vf(r))return-1}return r.length-i.length}function Vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tT={type:0,value:""},nT=/[a-zA-Z0-9_]/;function iT(t){if(!t)return[[]];if(t==="/")return[[tT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:nT.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function rT(t,e,n){const i=JI(iT(t.path),n),r=ce(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sT(t,e){const n=[],i=new Map;e=Yf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const p=!d,g=oT(u);g.aliasOf=d&&d.record;const b=Yf(e,u),I=[g];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of O)I.push(ce({},g,{components:d?d.record.components:g.components,path:B,aliasOf:d?d.record:g}))}let _,w;for(const O of I){const{path:B}=O;if(f&&B[0]!=="/"){const V=f.record.path,le=V[V.length-1]==="/"?"":"/";O.path=f.record.path+(B&&le+B)}if(_=rT(O,f,b),d?d.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),p&&u.name&&!Gf(_)&&o(u.name)),g.children){const V=g.children;for(let le=0;le<V.length;le++)s(V[le],_,d&&d.children[le])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return w?()=>{o(w)}:sr}function o(u){if(ng(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&eT(u,n[f])>=0&&(u.record.path!==n[f].record.path||!rg(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Gf(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},g,b;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Ni(1,{location:u});b=d.record.name,p=ce(qf(f.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&qf(u.params,d.keys.map(w=>w.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(w=>w.re.test(g)),d&&(p=d.parse(g),b=d.record.name);else{if(d=f.name?i.get(f.name):n.find(w=>w.re.test(f.path)),!d)throw Ni(1,{location:u,currentLocation:f});b=d.record.name,p=ce({},f.params,u.params),g=d.stringify(p)}const I=[];let _=d;for(;_;)I.unshift(_.record),_=_.parent;return{name:b,path:g,params:p,matched:I,meta:lT(I)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function qf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function oT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:aT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function aT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lT(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function Yf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function rg(t,e){return e.children.some(n=>n===t||rg(t,n))}const sg=/#/g,cT=/&/g,uT=/\//g,fT=/=/g,dT=/\?/g,og=/\+/g,hT=/%5B/g,pT=/%5D/g,ag=/%5E/g,mT=/%60/g,lg=/%7B/g,gT=/%7C/g,cg=/%7D/g,_T=/%20/g;function Cc(t){return encodeURI(""+t).replace(gT,"|").replace(hT,"[").replace(pT,"]")}function vT(t){return Cc(t).replace(lg,"{").replace(cg,"}").replace(ag,"^")}function Ya(t){return Cc(t).replace(og,"%2B").replace(_T,"+").replace(sg,"%23").replace(cT,"%26").replace(mT,"`").replace(lg,"{").replace(cg,"}").replace(ag,"^")}function yT(t){return Ya(t).replace(fT,"%3D")}function bT(t){return Cc(t).replace(sg,"%23").replace(dT,"%3F")}function wT(t){return t==null?"":bT(t).replace(uT,"%2F")}function Ws(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ET(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(og," "),o=s.indexOf("="),a=Ws(o<0?s:s.slice(0,o)),l=o<0?null:Ws(s.slice(o+1));if(a in e){let c=e[a];kt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Kf(t){let e="";for(let n in t){const i=t[n];if(n=yT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(i)?i.map(s=>s&&Ya(s)):[i&&Ya(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function CT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=kt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const xT=Symbol(""),Qf=Symbol(""),xc=Symbol(""),Ic=Symbol(""),Ka=Symbol("");function qi(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Ni(4,{from:n,to:e})):f instanceof Error?a(f):KI(f)?a(Ni(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function na(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(IT(a)){const c=(a.__vccOpts||a)[e];c&&r.push(dn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=RI(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&dn(d,n,i,s,o)()}))}}return r}function IT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xf(t){const e=Vt(xc),n=Vt(Ic),i=Ce(()=>e.resolve(Le(t.to))),r=Ce(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(ki.bind(null,u));if(d>-1)return d;const p=Jf(l[c-2]);return c>1&&Jf(u)===p&&f[f.length-1].path!==p?f.findIndex(ki.bind(null,l[c-2])):d}),s=Ce(()=>r.value>-1&&kT(n.params,i.value.params)),o=Ce(()=>r.value>-1&&r.value===n.matched.length-1&&eg(n.params,i.value.params));function a(l={}){return AT(l)?e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(sr):Promise.resolve()}return{route:i,href:Ce(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const TT=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xf,setup(t,{slots:e}){const n=Mi(Xf(t)),{options:i}=Vt(xc),r=Ce(()=>({[Zf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:so("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),ST=TT;function AT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kT(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!kt(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zf=(t,e,n)=>t!=null?t:e!=null?e:n,NT=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vt(Ka),r=Ce(()=>t.route||i.value),s=Vt(Qf,0),o=Ce(()=>{let c=Le(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ce(()=>r.value.matched[o.value]);cs(Qf,Ce(()=>o.value+1)),cs(xT,a),cs(Ka,r);const l=Dt();return qn(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ki(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ed(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,I=so(d,ce({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ed(n.default,{Component:I,route:c})||I}}});function ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const RT=NT;function OT(t){const e=sT(t.routes,t),n=t.parseQuery||ET,i=t.stringifyQuery||Kf,r=t.history,s=qi(),o=qi(),a=qi(),l=i_(cn);let c=cn;ci&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,E=>""+E),f=ea.bind(null,wT),d=ea.bind(null,Ws);function p(E,P){let N,H;return ng(E)?(N=e.getRecordMatcher(E),H=P):H=E,e.addRoute(H,N)}function g(E){const P=e.getRecordMatcher(E);P&&e.removeRoute(P)}function b(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function _(E,P){if(P=ce({},P||l.value),typeof E=="string"){const h=ta(n,E,P.path),m=e.resolve({path:h.path},P),v=r.createHref(h.fullPath);return ce(h,m,{params:d(m.params),hash:Ws(h.hash),redirectedFrom:void 0,href:v})}let N;if("path"in E)N=ce({},E,{path:ta(n,E.path,P.path).path});else{const h=ce({},E.params);for(const m in h)h[m]==null&&delete h[m];N=ce({},E,{params:f(E.params)}),P.params=f(P.params)}const H=e.resolve(N,P),re=E.hash||"";H.params=u(d(H.params));const Se=MI(i,ce({},E,{hash:vT(re),path:H.path})),Q=r.createHref(Se);return ce({fullPath:Se,hash:re,query:i===Kf?CT(E.query):E.query||{}},H,{redirectedFrom:void 0,href:Q})}function w(E){return typeof E=="string"?ta(n,E,l.value.path):ce({},E)}function O(E,P){if(c!==E)return Ni(8,{from:P,to:E})}function B(E){return ue(E)}function V(E){return B(ce(w(E),{replace:!0}))}function le(E){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let H=typeof N=="function"?N(E):N;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=w(H):{path:H},H.params={}),ce({query:E.query,hash:E.hash,params:"path"in H?{}:E.params},H)}}function ue(E,P){const N=c=_(E),H=l.value,re=E.state,Se=E.force,Q=E.replace===!0,h=le(N);if(h)return ue(ce(w(h),{state:typeof h=="object"?ce({},re,h.state):re,force:Se,replace:Q}),P||N);const m=N;m.redirectedFrom=P;let v;return!Se&&DI(i,H,N)&&(v=Ni(16,{to:m,from:H}),Nn(H,H,!0,!1)),(v?Promise.resolve(v):ne(m,H)).catch(y=>jt(y)?jt(y,2)?y:_t(y):me(y,m,H)).then(y=>{if(y){if(jt(y,2))return ue(ce({replace:Q},w(y.to),{state:typeof y.to=="object"?ce({},re,y.to.state):re,force:Se}),P||m)}else y=Pe(m,H,!0,Q,re);return ae(m,H,y),y})}function q(E,P){const N=O(E,P);return N?Promise.reject(N):Promise.resolve()}function ne(E,P){let N;const[H,re,Se]=PT(E,P);N=na(H.reverse(),"beforeRouteLeave",E,P);for(const h of H)h.leaveGuards.forEach(m=>{N.push(dn(m,E,P))});const Q=q.bind(null,E,P);return N.push(Q),li(N).then(()=>{N=[];for(const h of s.list())N.push(dn(h,E,P));return N.push(Q),li(N)}).then(()=>{N=na(re,"beforeRouteUpdate",E,P);for(const h of re)h.updateGuards.forEach(m=>{N.push(dn(m,E,P))});return N.push(Q),li(N)}).then(()=>{N=[];for(const h of E.matched)if(h.beforeEnter&&!P.matched.includes(h))if(kt(h.beforeEnter))for(const m of h.beforeEnter)N.push(dn(m,E,P));else N.push(dn(h.beforeEnter,E,P));return N.push(Q),li(N)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),N=na(Se,"beforeRouteEnter",E,P),N.push(Q),li(N))).then(()=>{N=[];for(const h of o.list())N.push(dn(h,E,P));return N.push(Q),li(N)}).catch(h=>jt(h,8)?h:Promise.reject(h))}function ae(E,P,N){for(const H of a.list())H(E,P,N)}function Pe(E,P,N,H,re){const Se=O(E,P);if(Se)return Se;const Q=P===cn,h=ci?history.state:{};N&&(H||Q?r.replace(E.fullPath,ce({scroll:Q&&h&&h.scroll},re)):r.push(E.fullPath,re)),l.value=E,Nn(E,P,N,Q),_t()}let L;function be(){L||(L=r.listen((E,P,N)=>{if(!zr.listening)return;const H=_(E),re=le(H);if(re){ue(ce(re,{replace:!0}),H).catch(sr);return}c=H;const Se=l.value;ci&&zI(jf(Se.fullPath,N.delta),Io()),ne(H,Se).catch(Q=>jt(Q,12)?Q:jt(Q,2)?(ue(Q.to,H).then(h=>{jt(h,20)&&!N.delta&&N.type===Rr.pop&&r.go(-1,!1)}).catch(sr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(Q,H,Se))).then(Q=>{Q=Q||Pe(H,Se,!1),Q&&(N.delta&&!jt(Q,8)?r.go(-N.delta,!1):N.type===Rr.pop&&jt(Q,20)&&r.go(-1,!1)),ae(H,Se,Q)}).catch(sr)}))}let Ve=qi(),sn=qi(),Te;function me(E,P,N){_t(E);const H=sn.list();return H.length?H.forEach(re=>re(E,P,N)):console.error(E),Promise.reject(E)}function fe(){return Te&&l.value!==cn?Promise.resolve():new Promise((E,P)=>{Ve.add([E,P])})}function _t(E){return Te||(Te=!E,be(),Ve.list().forEach(([P,N])=>E?N(E):P()),Ve.reset()),E}function Nn(E,P,N,H){const{scrollBehavior:re}=t;if(!ci||!re)return Promise.resolve();const Se=!N&&WI(jf(E.fullPath,0))||(H||!N)&&history.state&&history.state.scroll||null;return Md().then(()=>re(E,P,Se)).then(Q=>Q&&UI(Q)).catch(Q=>me(Q,E,P))}const vt=E=>r.go(E);let tt;const si=new Set,zr={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:b,resolve:_,options:t,push:B,replace:V,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:sn.add,isReady:fe,install(E){const P=this;E.component("RouterLink",ST),E.component("RouterView",RT),E.config.globalProperties.$router=P,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(l)}),ci&&!tt&&l.value===cn&&(tt=!0,B(r.location).catch(re=>{}));const N={};for(const re in cn)N[re]=Ce(()=>l.value[re]);E.provide(xc,P),E.provide(Ic,Mi(N)),E.provide(Ka,l);const H=E.unmount;si.add(E),E.unmount=function(){si.delete(E),si.size<1&&(c=cn,L&&L(),L=null,l.value=cn,tt=!1,Te=!1),H()}}};return zr}function li(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function PT(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ki(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ki(c,l))||r.push(l))}return[n,i,r]}function MT(){return Vt(Ic)}const ug=async(t,e)=>{try{e!=="/"&&await Sc.push("/"),document.getElementById(t).scrollIntoView({behavior:"smooth"})}catch(n){throw new Error(n)}},DT=t=>t.replace(/\./g,"-"),LT=async t=>{const e=Jm(Ec());return await bI(zs(e,`users/${t}`)).then(n=>n.exists()?n.val().count:0)},FT=async t=>{const e=Ec(),n=await LT(t);yI(Jm(e,`users/${t}`),{count:n+1})},$T=()=>{fetch("https://api.ipify.org/?format=json").then(t=>t.json()).then(async({ip:t})=>{const e=DT(t);FT(e)})},BT=t=>(Zs("data-v-e3904569"),t=t(),eo(),t),HT={class:"nav-menu"},jT=BT(()=>D("h1",{class:"l left-logo"},"Don Truong",-1)),UT={class:"nav-items"},zT=Oe({__name:"MenuBar",props:{displayingSection:String},setup(t){let e=Dt(!1);const n=MT(),i=Ce(()=>n.path),r=()=>{e.value=!e.value},s=async a=>{await ug(a,i.value)},o=()=>{Sc.push("/blog")};return(a,l)=>{const c=Yt("font-awesome-icon");return te(),he("div",null,[D("div",HT,[Y(c,{class:"icon",icon:"fa-solid fa-bars",inverse:"",onClick:l[0]||(l[0]=u=>r())}),D("div",{class:Ge(["nav-content",Le(e)?"open-menu":"closed-menu"])},[D("div",{class:"logo",onClick:l[1]||(l[1]=u=>s("introduction"))},[Y(c,{class:"l left-logo",icon:"fa-solid fa-paw",inverse:""}),jT]),D("ul",UT,[D("li",{class:Ge(t.displayingSection==="introduction"?"nav-button-selected":"nav-button"),onClick:l[2]||(l[2]=u=>s("introduction"))},"Home",2),D("li",{class:Ge([t.displayingSection==="experience"?"nav-button-selected":"nav-button","nav-button"]),onClick:l[3]||(l[3]=u=>s("experience"))},"Experience",2),D("li",{class:Ge([t.displayingSection==="education"?"nav-button-selected":"nav-button","nav-button"]),onClick:l[4]||(l[4]=u=>s("education"))},"Education",2),D("li",{class:Ge([t.displayingSection==="project"?"nav-button-selected":"nav-button","nav-button"]),onClick:l[5]||(l[5]=u=>s("project"))},"Projects",2),D("li",{class:Ge([Le(i).startsWith("/blog")?"nav-button-selected":"nav-button","nav-button"]),onClick:l[6]||(l[6]=u=>o())},"Doghouse",2)])],2)])])}}});const fg=Nt(zT,[["__scopeId","data-v-e3904569"]]),td="/assets/don-cool.c53b70d9.jpeg",WT="/assets/shiba-cool.294ad440.png",VT=["src"],qT=Oe({__name:"DynamicAvatar",setup(t){const e=()=>{document.getElementById("avatar").src=WT},n=()=>{document.getElementById("avatar").src=td};return(i,r)=>(te(),he("header",null,[D("img",{id:"avatar",class:"hxxl center",alt:"Don Truong",draggable:"false",onMouseover:r[0]||(r[0]=s=>e()),onMouseleave:r[1]||(r[1]=s=>n()),src:Le(td)},null,40,VT)]))}});const GT=Nt(qT,[["__scopeId","data-v-390d08af"]]),YT=t=>(Zs("data-v-54de79b8"),t=t(),eo(),t),KT={class:"container"},QT=["src"],XT={class:"xxl"},JT={class:"typed-text",id:"dynamicText"},ZT=YT(()=>D("span",{class:"blinking-cursor"},"|",-1)),eS=Oe({__name:"TypingText",props:{constantText:String,dynamicTexts:Array,icon:String},setup(t){const e=t,n=70,i=10,r=1500;let s=Dt(""),o=!1,a=0,l=0;const c=async()=>{!e.dynamicTexts||(l<e.dynamicTexts[a].length?(o||(o=!0),s.value+=e.dynamicTexts[a][l],l+=1,setTimeout(c,n)):(o=!1,setTimeout(u,r)))},u=async()=>{if(!!e.dynamicTexts){if(l==0){f();return}l>0&&(o&&(o=!0),s.value=e.dynamicTexts[a].substring(0,l-1),l-=1,a+1<e.dynamicTexts.length&&e.dynamicTexts[a+1].startsWith(s.value)?f():setTimeout(u,i))}},f=()=>{!e.dynamicTexts||(o=!1,a+=1,a>=e.dynamicTexts.length&&(a=0),setTimeout(c,n))};return io(()=>{c()}),(d,p)=>(te(),he("div",KT,[D("img",{class:"wxl",src:t.icon},null,8,QT),D("h1",XT,[oh(Je(t.constantText)+" ",1),D("span",JT,Je(Le(s)),1),ZT,D("span",{class:Ge(["cursor",{typing:Le(o)}])},"\xA0",2)])]))}});const dg=Nt(eS,[["__scopeId","data-v-54de79b8"]]),tS="/assets/Don_Truong_Resume.f0e40200.pdf",nS={class:"social"},iS={href:"https://github.com/truongdd03",target:"_blank"},rS={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},sS={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},oS=Oe({__name:"SocialInformation",setup(t){const e=async()=>{const i="dong23102003@gmail.com";await navigator.clipboard.writeText(i),xl({title:"Copied email address!"})},n=()=>{window.open(tS)};return(i,r)=>{const s=Yt("font-awesome-icon");return te(),he("header",null,[D("div",nS,[D("a",iS,[Y(s,{class:"l icon",icon:"fa-brands fa-github",inverse:""})]),D("a",rS,[Y(s,{class:"l icon",icon:"fa-brands fa-linkedin",inverse:""})]),D("a",sS,[Y(s,{class:"l icon",icon:"fa-brands fa-discord",inverse:""})]),Y(s,{class:"l icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=o=>e())}),Y(s,{class:"l icon",icon:"fa-solid fa-file-pdf",inverse:"",onClick:r[1]||(r[1]=o=>n())})])])}}});const aS=Nt(oS,[["__scopeId","data-v-2d426264"]]),lS={class:"wrapper black-background"},cS={class:"icon-wrapper"},uS=Oe({__name:"IntroductionPane",setup(t){const e=["Don Truong","from Vietnam","studying at Michigan State University","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=async()=>{await ug("experience","/")};return(i,r)=>{const s=Yt("font-awesome-icon");return te(),he("div",lS,[Y(GT),Y(aS),Y(dg,{constantText:"Hi, I'm ",dynamicTexts:e,icon:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"}),D("div",cS,[Y(s,{class:"xl scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:r[0]||(r[0]=o=>n())})])])}}});const fS=Nt(uS,[["__scopeId","data-v-c284d582"]]);var Tc={name:"Card"};const dS={class:"p-card p-component"},hS={key:0,class:"p-card-header"},pS={class:"p-card-body"},mS={key:0,class:"p-card-title"},gS={key:1,class:"p-card-subtitle"},_S={class:"p-card-content"},vS={key:2,class:"p-card-footer"};function yS(t,e,n,i,r,s){return te(),he("div",dS,[t.$slots.header?(te(),he("div",hS,[ht(t.$slots,"header")])):Lt("",!0),D("div",pS,[t.$slots.title?(te(),he("div",mS,[ht(t.$slots,"title")])):Lt("",!0),t.$slots.subtitle?(te(),he("div",gS,[ht(t.$slots,"subtitle")])):Lt("",!0),D("div",_S,[ht(t.$slots,"content")]),t.$slots.footer?(te(),he("div",vS,[ht(t.$slots,"footer")])):Lt("",!0)])])}function bS(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var wS=`
.p-card-header img {
    width: 100%;
}
`;bS(wS);Tc.render=yS;const ES="/assets/holistics.338144b5.png",nd="/assets/oed.11068655.png",hg="/assets/msu.b99d12d1.png",CS=t=>(Zs("data-v-dd9c9eed"),t=t(),eo(),t),xS={class:"wrapper"},IS=CS(()=>D("div",{class:"title-wrapper"},[D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif"}),D("h1",{class:"title xl"},"Experience"),D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif"})],-1)),TS=["href"],SS={class:"l green company-name"},AS={class:"m"},kS={class:"s description"},NS={class:"s",style:{color:"yellow"}},RS={class:"duration-wrapper"},OS={class:"m duration"},PS=["src","alt"],MS=Oe({__name:"ExperiencePane",setup(t){const e=[{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:nd,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2022 - Present",description:""},{company:"Michigan State University",icon:hg,skills:"JavaScript, HTML/CSS",title:"Research Assistant | Programmer",duration:"October 2022 - present",description:"Developed a website to customize survey forms for gathering statistics data from the USDA national farmers market."},{company:"Holistics Data",url:"https://www.holistics.io/",icon:ES,skills:"Vue.js, TypeScript, HTML/CSS",title:"Software Engineer Intern",duration:"May 2022 - September 2022",description:"Worked on a new programming language called AML explicitly used for data analytics.                     Developed an online playground for testing and demonstrating AML.                     Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process"},{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:nd,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2021 - May 2022",description:"Performed security testing and applied a rate limit for access to prevent DDoS attacks.                    Removed redundant code and enhanced the data exporting process.                     Managed database and created new APIs to support different resource types.                     Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0)."},{company:"Chang's Kitchen",skills:"Swift, JavaScript",title:"Software Engineer Intern",duration:"May 2021 - August 2021",description:"Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers\u2019 data."}];return(n,i)=>{const r=Yt("font-awesome-icon"),s=Yt("Timeline");return te(),he("div",xS,[IS,Y(s,{value:e,align:"alternate",class:"timeline"},{content:Ye(o=>[Y(Le(Tc),{class:"experience-wrapper"},{title:Ye(()=>[D("a",{class:"company-link",href:o.item.url,target:"_blank"},[D("h3",SS,Je(o.item.company),1),o.item.url?(te(),bn(r,{key:0,class:"m redirect-icon",icon:"fa-solid fa-up-right-from-square"})):Lt("",!0)],8,TS)]),subtitle:Ye(()=>[D("p",AS,Je(o.item.title),1)]),content:Ye(()=>[D("p",kS,Je(o.item.description),1),D("p",NS,Je(`Related Skills: ${o.item.skills}`),1)]),_:2},1024)]),opposite:Ye(o=>[D("div",RS,[D("p",OS,Je(o.item.duration),1)])]),marker:Ye(o=>[o.item.icon?(te(),he("img",{key:0,class:"wl marker-icon",src:o.item.icon,alt:o.item.company},null,8,PS)):(te(),bn(r,{key:1,class:"l marker-icon-default",icon:"fa-solid fa-briefcase"}))]),_:1})])}}});const DS=Nt(MS,[["__scopeId","data-v-dd9c9eed"]]),LS="/assets/ptnk.95fe9da3.png",FS=t=>(Zs("data-v-20274397"),t=t(),eo(),t),$S={class:"wrapper black-background"},BS=FS(()=>D("div",{class:"title-wrapper"},[D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-9.gif"}),D("h1",{class:"xl title"},"Education"),D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif"})],-1)),HS={class:"l green"},jS={class:"m"},US={key:0,class:"s description"},zS={class:"duration-wrapper"},WS={class:"m duration"},VS=["src","alt"],qS=Oe({__name:"EducationPane",setup(t){const e=[{icon:hg,school:"Michigan State University",duration:"September 2021 - May 2025",degree:"BS in Computer Science",description:`GPA: 4.0/4.0
Dean's List
MSU International Tution Grant
MSU Presidential Study Abroad Scholarship
MSU #YOU-ARE-WELCOME-HERE Scholarship`},{icon:LS,school:"VNU-HCM High School for the Gifted",duration:"September 2018 - June 2021",degree:"High School Diploma"}];return(n,i)=>{const r=Yt("Timeline");return te(),he("div",$S,[BS,Y(r,{value:e,align:"alternate",class:"timeline"},{content:Ye(s=>[Y(Le(Tc),{class:"experience-wrapper"},{title:Ye(()=>[D("h3",HS,Je(s.item.school),1)]),subtitle:Ye(()=>[D("p",jS,Je(s.item.degree),1)]),content:Ye(()=>[s.item.description?(te(),he("p",US,Je(s.item.description),1)):Lt("",!0)]),_:2},1024)]),opposite:Ye(s=>[D("div",zS,[D("p",WS,Je(s.item.duration),1)])]),marker:Ye(s=>[D("img",{class:"wl marker-icon",src:s.item.icon,alt:s.item.school},null,8,VS)]),_:1})])}}});const GS=Nt(qS,[["__scopeId","data-v-20274397"]]),YS="/assets/github.3d568164.png",KS=["href"],QS={key:0,class:"hovering-wrapper"},XS={class:"image-wrapper"},JS=["src"],ZS={class:"information-wrapper"},e2={class:"m green"},t2={class:"s subtitle"},n2=Oe({__name:"ProjectPane",props:{project:{type:Object,default:{}}},setup(t){let e=Dt(!1);return(n,i)=>{const r=Yt("font-awesome-icon");return te(),he("a",{class:"project-link",href:t.project.url,target:"_blank",onMouseover:i[0]||(i[0]=s=>Re(e)?e.value=!0:e=!0),onMouseleave:i[1]||(i[1]=s=>Re(e)?e.value=!1:e=!1)},[D("div",{class:Ge(`project-wrapper ${Le(e)?"hovering":""}`)},[Le(e)?(te(),he("div",QS,[Y(r,{class:"xl redirect-icon",icon:"fa-solid fa-up-right-from-square"})])):Lt("",!0),D("div",XS,[D("img",{class:"image",src:t.project.image?t.project.image:Le(YS)},null,8,JS)]),D("div",ZS,[D("h1",e2,Je(t.project.name),1),D("p",t2,Je(t.project.subtitle),1)])],2)],40,KS)}}});const i2=Nt(n2,[["__scopeId","data-v-604d0ea7"]]),r2="/assets/personal-website.037b1be0.jpeg",s2="/assets/barter.337afb89.jpeg",o2="/assets/nuntium.098ca59c.jpeg",a2={class:"wrapper tmp"},l2=D("div",{class:"title-wrapper"},[D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-10-49.gif"}),D("h1",{class:"xl title"},"Projects"),D("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-11-64.gif"})],-1),c2=Oe({__name:"ProjectsPane",setup(t){const e=[{name:"Personal Website",subtitle:"My personal website",skills:["TypeScript","Vue3"],image:r2,description:"",url:"https://github.com/truongdd03/truongdd03.github.io"},{name:"Search engine",subtitle:"A simple version of Google Search",skills:["C++"],description:"A multi-threaded search engine that crawls information from multiple websites, extracts keywords, and returns appropriate results based on user\u2019s queries. LRU cache is use to optimize query speech.",url:"https://github.com/truongdd03/searchEngine"},{name:"Barter",subtitle:"A used stuff trading website",skills:["HTML/CSS","JavaScript"],image:s2,description:"Winner of Best Use of Google Cloud. Implemented in 36 hours during SpartaHack VII, Barter is an exchanging items website with the goal to reduce the amount of trash and connect people.",url:"https://github.com/truongdd03/SpartaHack"},{name:"Nuntium",subtitle:"A news-sharing platform",skills:["Swift"],image:o2,description:"Implemented in 36 hours during ShellHacks 2021, this is a news-sharing platform that supports reliability ratings and a customized search engine.",url:"https://github.com/truongdd03/Shellhack"},{name:"Opty",subtitle:"A simple version of LinkedIn",skills:["Swift"],image:"",description:"A mobile-oriented social media that is used specifically for job search. Users can easily create a resume or a recruiting post. This app would also match suitable jobs or potential candidates based on users\u2019 profiles and job descriptions.",url:"https://github.com/truongdd03/Opty-IOS"},{name:"Financial Diary",subtitle:"An expenses and incomes tracking app",skills:["Swift"],image:"",description:"An iOS application to track users\u2019 expenses and incomes, as well as displaying real-time data of the stock market for investment suggestions.",url:"https://github.com/truongdd03/Financial-Diary"},{name:"Virtual Piano",subtitle:"Play musical notes from text files",skills:["Python"],image:"",description:"A virtual piano that plays musical notes from text files.",url:"https://github.com/truongdd03/VirtualPiano"}];return(n,i)=>(te(),he("div",a2,[l2,(te(),he(je,null,ml(e,r=>Y(i2,{project:r},null,8,["project"])),64))]))}});var id;const Ur=typeof window<"u",u2=t=>typeof t=="string",ia=()=>{};Ur&&((id=window==null?void 0:window.navigator)==null?void 0:id.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function f2(t){return typeof t=="function"?t():Le(t)}function d2(t){return t}function h2(t){return kg()?(Ng(t),!0):!1}function Qa(t){var e;const n=f2(t);return(e=n==null?void 0:n.$el)!=null?e:n}const pg=Ur?window:void 0;Ur&&window.document;Ur&&window.navigator;Ur&&window.location;function p2(...t){let e,n,i,r;if(u2(t[0])?([n,i,r]=t,e=pg):[e,n,i,r]=t,!e)return ia;let s=ia;const o=qn(()=>Qa(e),l=>{s(),l&&(l.addEventListener(n,i,r),s=()=>{l.removeEventListener(n,i,r),s=ia})},{immediate:!0,flush:"post"}),a=()=>{o(),s()};return h2(a),a}const Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ja="__vueuse_ssr_handlers__";Xa[Ja]=Xa[Ja]||{};Xa[Ja];function as(t,{window:e=pg,scrollTarget:n}={}){const i=Dt(!1),r=()=>{if(!e)return;const s=e.document,o=Qa(t);if(!o)i.value=!1;else{const a=o.getBoundingClientRect();i.value=a.top<=(e.innerHeight||s.documentElement.clientHeight)&&a.left<=(e.innerWidth||s.documentElement.clientWidth)&&a.bottom>=0&&a.right>=0}};return qn(()=>Qa(t),()=>r(),{immediate:!0,flush:"post"}),e&&p2(n||e,"scroll",r,{capture:!1,passive:!0}),i}var rd;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(rd||(rd={}));var m2=Object.defineProperty,sd=Object.getOwnPropertySymbols,g2=Object.prototype.hasOwnProperty,_2=Object.prototype.propertyIsEnumerable,od=(t,e,n)=>e in t?m2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v2=(t,e)=>{for(var n in e||(e={}))g2.call(e,n)&&od(t,n,e[n]);if(sd)for(var n of sd(e))_2.call(e,n)&&od(t,n,e[n]);return t};const y2={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};v2({linear:d2},y2);const b2=Oe({__name:"PortfolioPage",setup(t){io(async()=>{$T()});const e=Dt(null),n=Dt(null),i=Dt(null),r=Dt(null),s=as(e),o=as(n),a=as(i),l=as(r),c=Ce(()=>{const u=["introduction","experience","education","project"],f=[s,o,a,l].map(d=>d.value);return u[f.lastIndexOf(!0)]});return(u,f)=>{const d=Yt("notifications");return te(),he(je,null,[Y(fg,{"displaying-section":Le(c)},null,8,["displaying-section"]),Y(fS,{id:"introduction",ref_key:"introduction",ref:e},null,512),Y(DS,{id:"experience",ref_key:"experience",ref:n},null,512),Y(GS,{id:"education",ref_key:"education",ref:i},null,512),Y(c2,{id:"project",ref_key:"project",ref:r},null,512),Y(d,{class:"notification",position:"bottom right"})],64)}}});const w2={class:Ge("blog-title-wrapper")},E2={class:"l blog-title"},C2={class:"m blog-status"},x2=Oe({__name:"BlogComponent",props:{title:String,status:String},setup(t){let e=Dt(!1);return(n,i)=>(te(),he("div",{class:Ge(`blog-wrapper ${Le(e)?"hovering":""}`),onMouseover:i[0]||(i[0]=r=>Re(e)?e.value=!0:e=!0),onMouseleave:i[1]||(i[1]=r=>Re(e)?e.value=!1:e=!1)},[D("div",w2,[D("h1",E2,Je(t.title),1),D("h1",C2,Je(t.status),1)])],34))}});const ad=Nt(x2,[["__scopeId","data-v-d2807f08"]]),I2={class:"wrapper"},T2=Oe({__name:"BlogPage",setup(t){const e=["thoughts","knowledge","stories"];return(n,i)=>(te(),he(je,null,[Y(fg),D("div",I2,[Y(dg,{class:"intro",constantText:"A place where I share my random",dynamicTexts:e,icon:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-40-28.gif"}),Y(ad,{title:"The Turing machine",status:"In progress"}),Y(ad,{title:"From casino to archaeology site",status:"In progress"})])],64))}});const S2=Nt(T2,[["__scopeId","data-v-24d74c18"]]),A2=[{path:"/",name:"Portfolio",component:b2},{path:"/blog",name:"Blog",component:S2},{path:"/:catchAll(.*)",redirect:"/"}],Sc=OT({history:YI(),routes:A2}),k2=[x0,C0,E0,b0,_0,w0,v0,y0,g0,m0];k2.forEach(t=>Jb.add(t));const To=Hv(Wv).use(Sc),N2=[ly,fy];N2.forEach(t=>To.use(t));To.component("Timeline",vh);To.component("font-awesome-icon",p0);To.mount("#app");
