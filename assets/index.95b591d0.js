(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _a(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=_a(Zp);function rf(t){return!!t||t===""}function $i(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ce(i)?im(i):$i(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ce(t))return t;if(he(t))return t}}const tm=/;(?![^(]*\))/g,nm=/:(.+)/;function im(t){const e={};return t.split(tm).forEach(n=>{if(n){const i=n.split(nm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zt(t){let e="";if(Ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=Zt(t[n]);i&&(e+=i+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ke=t=>Ce(t)?t:t==null?"":H(t)||he(t)&&(t.toString===lf||!W(t.toString))?JSON.stringify(t,sf,2):String(t),sf=(t,e)=>e&&e.__v_isRef?sf(t,e.value):Xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:of(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!H(e)&&!cf(e)?String(e):e,ae={},Qn=[],ht=()=>{},rm=()=>!1,sm=/^on[^a-z]/,ys=t=>sm.test(t),va=t=>t.startsWith("onUpdate:"),Oe=Object.assign,ya=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},om=Object.prototype.hasOwnProperty,Q=(t,e)=>om.call(t,e),H=Array.isArray,Xn=t=>bs(t)==="[object Map]",of=t=>bs(t)==="[object Set]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",ba=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",af=t=>he(t)&&W(t.then)&&W(t.catch),lf=Object.prototype.toString,bs=t=>lf.call(t),am=t=>bs(t).slice(8,-1),cf=t=>bs(t)==="[object Object]",wa=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lm=/-(\w)/g,xt=ws(t=>t.replace(lm,(e,n)=>n?n.toUpperCase():"")),cm=/\B([A-Z])/g,fi=ws(t=>t.replace(cm,"-$1").toLowerCase()),Es=ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zs=ws(t=>t?`on${Es(t)}`:""),Bi=(t,e)=>!Object.is(t,e),eo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kl;const um=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vt;class fm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&vt&&(this.parent=vt,this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function dm(t,e=vt){e&&e.active&&e.effects.push(t)}const Ea=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ff=t=>(t.w&en)>0,df=t=>(t.n&en)>0,hm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=en},pm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];ff(r)&&!df(r)?r.delete(t):e[n++]=r,r.w&=~en,r.n&=~en}e.length=n}},Ao=new WeakMap;let Ti=0,en=1;const ko=30;let ot;const Sn=Symbol(""),No=Symbol("");class Ca{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dm(this,i)}run(){if(!this.active)return this.fn();let e=ot,n=Yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,Yt=!0,en=1<<++Ti,Ti<=ko?hm(this):Ql(this),this.fn()}finally{Ti<=ko&&pm(this),en=1<<--Ti,ot=this.parent,Yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Ql(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yt=!0;const hf=[];function di(){hf.push(Yt),Yt=!1}function hi(){const t=hf.pop();Yt=t===void 0?!0:t}function Xe(t,e,n){if(Yt&&ot){let i=Ao.get(t);i||Ao.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ea()),pf(r)}}function pf(t,e){let n=!1;Ti<=ko?df(t)||(t.n|=en,n=!ff(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t))}function Rt(t,e,n,i,r,s){const o=Ao.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?wa(n)&&a.push(o.get("length")):(a.push(o.get(Sn)),Xn(t)&&a.push(o.get(No)));break;case"delete":H(t)||(a.push(o.get(Sn)),Xn(t)&&a.push(o.get(No)));break;case"set":Xn(t)&&a.push(o.get(Sn));break}if(a.length===1)a[0]&&Oo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Oo(Ea(l))}}function Oo(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&Xl(i);for(const i of n)i.computed||Xl(i)}function Xl(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mm=_a("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ba)),gm=xa(),_m=xa(!1,!0),vm=xa(!0),Jl=ym();function ym(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Z(this);for(let s=0,o=this.length;s<o;s++)Xe(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){di();const i=Z(this)[e].apply(this,n);return hi(),i}}),t}function xa(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Mm:bf:e?yf:vf).get(i))return i;const o=H(i);if(!t&&o&&Q(Jl,r))return Reflect.get(Jl,r,s);const a=Reflect.get(i,r,s);return(ba(r)?mf.has(r):mm(r))||(t||Xe(i,"get",r),e)?a:Ne(a)?o&&wa(r)?a:a.value:he(a)?t?wf(a):xs(a):a}}const bm=gf(),wm=gf(!0);function gf(t=!1){return function(n,i,r,s){let o=n[i];if(ri(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&(!Wr(r)&&!ri(r)&&(o=Z(o),r=Z(r)),!H(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=H(n)&&wa(i)?Number(i)<n.length:Q(n,i),l=Reflect.set(n,i,r,s);return n===Z(s)&&(a?Bi(r,o)&&Rt(n,"set",i,r):Rt(n,"add",i,r)),l}}function Em(t,e){const n=Q(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Rt(t,"delete",e,void 0),i}function Cm(t,e){const n=Reflect.has(t,e);return(!ba(e)||!mf.has(e))&&Xe(t,"has",e),n}function xm(t){return Xe(t,"iterate",H(t)?"length":Sn),Reflect.ownKeys(t)}const _f={get:gm,set:bm,deleteProperty:Em,has:Cm,ownKeys:xm},Im={get:vm,set(t,e){return!0},deleteProperty(t,e){return!0}},Tm=Oe({},_f,{get:_m,set:wm}),Ia=t=>t,Cs=t=>Reflect.getPrototypeOf(t);function br(t,e,n=!1,i=!1){t=t.__v_raw;const r=Z(t),s=Z(e);n||(e!==s&&Xe(r,"get",e),Xe(r,"get",s));const{has:o}=Cs(r),a=i?Ia:n?Aa:Hi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function wr(t,e=!1){const n=this.__v_raw,i=Z(n),r=Z(t);return e||(t!==r&&Xe(i,"has",t),Xe(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Er(t,e=!1){return t=t.__v_raw,!e&&Xe(Z(t),"iterate",Sn),Reflect.get(t,"size",t)}function Zl(t){t=Z(t);const e=Z(this);return Cs(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function ec(t,e){e=Z(e);const n=Z(this),{has:i,get:r}=Cs(n);let s=i.call(n,t);s||(t=Z(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Bi(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function tc(t){const e=Z(this),{has:n,get:i}=Cs(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Rt(e,"delete",t,void 0),s}function nc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function Cr(t,e){return function(i,r){const s=this,o=s.__v_raw,a=Z(o),l=e?Ia:t?Aa:Hi;return!t&&Xe(a,"iterate",Sn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function xr(t,e,n){return function(...i){const r=this.__v_raw,s=Z(r),o=Xn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ia:e?Aa:Hi;return!e&&Xe(s,"iterate",l?No:Sn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function Sm(){const t={get(s){return br(this,s)},get size(){return Er(this)},has:wr,add:Zl,set:ec,delete:tc,clear:nc,forEach:Cr(!1,!1)},e={get(s){return br(this,s,!1,!0)},get size(){return Er(this)},has:wr,add:Zl,set:ec,delete:tc,clear:nc,forEach:Cr(!1,!0)},n={get(s){return br(this,s,!0)},get size(){return Er(this,!0)},has(s){return wr.call(this,s,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Cr(!0,!1)},i={get(s){return br(this,s,!0,!0)},get size(){return Er(this,!0)},has(s){return wr.call(this,s,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=xr(s,!1,!1),n[s]=xr(s,!0,!1),e[s]=xr(s,!1,!0),i[s]=xr(s,!0,!0)}),[t,n,e,i]}const[Am,km,Nm,Om]=Sm();function Ta(t,e){const n=e?t?Om:Nm:t?km:Am;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Q(n,r)&&r in i?n:i,r,s)}const Rm={get:Ta(!1,!1)},Pm={get:Ta(!1,!0)},Dm={get:Ta(!0,!1)},vf=new WeakMap,yf=new WeakMap,bf=new WeakMap,Mm=new WeakMap;function Lm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fm(t){return t.__v_skip||!Object.isExtensible(t)?0:Lm(am(t))}function xs(t){return ri(t)?t:Sa(t,!1,_f,Rm,vf)}function $m(t){return Sa(t,!1,Tm,Pm,yf)}function wf(t){return Sa(t,!0,Im,Dm,bf)}function Sa(t,e,n,i,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Fm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Jn(t){return ri(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function Wr(t){return!!(t&&t.__v_isShallow)}function Ef(t){return Jn(t)||ri(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Cf(t){return Ur(t,"__v_skip",!0),t}const Hi=t=>he(t)?xs(t):t,Aa=t=>he(t)?wf(t):t;function xf(t){Yt&&ot&&(t=Z(t),pf(t.dep||(t.dep=Ea())))}function If(t,e){t=Z(t),t.dep&&Oo(t.dep)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Tf(t){return Bm(t,!1)}function Bm(t,e){return Ne(t)?t:new Hm(t,e)}class Hm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Hi(e)}get value(){return xf(this),this._value}set value(e){const n=this.__v_isShallow||Wr(e)||ri(e);e=n?e:Z(e),Bi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hi(e),If(this))}}function Nt(t){return Ne(t)?t.value:t}const jm={get:(t,e,n)=>Nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Sf(t){return Jn(t)?t:new Proxy(t,jm)}var Af;class Um{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Af]=!1,this._dirty=!0,this.effect=new Ca(e,()=>{this._dirty||(this._dirty=!0,If(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Z(this);return xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Af="__v_isReadonly";function Wm(t,e,n=!1){let i,r;const s=W(t);return s?(i=t,r=ht):(i=t.get,r=t.set),new Um(i,r,s||!r,n)}function Gt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Is(s,e,n)}return r}function nt(t,e,n,i){if(W(t)){const s=Gt(t,e,n,i);return s&&af(s)&&s.catch(o=>{Is(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(nt(t[s],e,n,i));return r}function Is(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Gt(l,null,10,[t,o,a]);return}}zm(t,n,r,i)}function zm(t,e,n,i=!0){console.error(t)}let ji=!1,Ro=!1;const Fe=[];let bt=0;const Zn=[];let At=null,yn=0;const kf=Promise.resolve();let ka=null;function Vm(t){const e=ka||kf;return t?e.then(this?t.bind(this):t):e}function qm(t){let e=bt+1,n=Fe.length;for(;e<n;){const i=e+n>>>1;Ui(Fe[i])<t?e=i+1:n=i}return e}function Na(t){(!Fe.length||!Fe.includes(t,ji&&t.allowRecurse?bt+1:bt))&&(t.id==null?Fe.push(t):Fe.splice(qm(t.id),0,t),Nf())}function Nf(){!ji&&!Ro&&(Ro=!0,ka=kf.then(Rf))}function Ym(t){const e=Fe.indexOf(t);e>bt&&Fe.splice(e,1)}function Gm(t){H(t)?Zn.push(...t):(!At||!At.includes(t,t.allowRecurse?yn+1:yn))&&Zn.push(t),Nf()}function ic(t,e=ji?bt+1:0){for(;e<Fe.length;e++){const n=Fe[e];n&&n.pre&&(Fe.splice(e,1),e--,n())}}function Of(t){if(Zn.length){const e=[...new Set(Zn)];if(Zn.length=0,At){At.push(...e);return}for(At=e,At.sort((n,i)=>Ui(n)-Ui(i)),yn=0;yn<At.length;yn++)At[yn]();At=null,yn=0}}const Ui=t=>t.id==null?1/0:t.id,Km=(t,e)=>{const n=Ui(t)-Ui(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rf(t){Ro=!1,ji=!0,Fe.sort(Km);const e=ht;try{for(bt=0;bt<Fe.length;bt++){const n=Fe[bt];n&&n.active!==!1&&Gt(n,null,14)}}finally{bt=0,Fe.length=0,Of(),ji=!1,ka=null,(Fe.length||Zn.length)&&Rf()}}function Qm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ae;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ae;d&&(r=n.map(m=>m.trim())),f&&(r=n.map(uf))}let a,l=i[a=Zs(e)]||i[a=Zs(xt(e))];!l&&s&&(l=i[a=Zs(fi(e))]),l&&nt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(c,t,6,r)}}function Pf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=Pf(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(he(t)&&i.set(t,null),null):(H(s)?s.forEach(l=>o[l]=null):Oe(o,s),he(t)&&i.set(t,o),o)}function Ts(t,e){return!t||!ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,fi(e))||Q(t,e))}let Be=null,Ss=null;function zr(t){const e=Be;return Be=t,Ss=t&&t.type.__scopeId||null,e}function Oa(t){Ss=t}function Ra(){Ss=null}function Me(t,e=Be,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&pc(-1);const s=zr(e),o=t(...r);return zr(s),i._d&&pc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function to(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:E}=t;let N,b;const S=zr(t);try{if(n.shapeFlag&4){const B=r||i;N=yt(u.call(B,B,f,s,m,d,_)),b=l}else{const B=e;N=yt(B.length>1?B(s,{attrs:l,slots:a,emit:c}):B(s,null)),b=e.props?l:Xm(l)}}catch(B){ki.length=0,Is(B,t,1),N=K(it)}let P=N;if(b&&E!==!1){const B=Object.keys(b),{shapeFlag:q}=P;B.length&&q&7&&(o&&B.some(va)&&(b=Jm(b,o)),P=tn(P,b))}return n.dirs&&(P=tn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,zr(S),N}const Xm=t=>{let e;for(const n in t)(n==="class"||n==="style"||ys(n))&&((e||(e={}))[n]=t[n]);return e},Jm=(t,e)=>{const n={};for(const i in t)(!va(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Zm(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?rc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ts(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?rc(i,o,c):!0:!!o;return!1}function rc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ts(n,s))return!0}return!1}function eg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tg=t=>t.__isSuspense;function ng(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Gm(t)}function ig(t,e){if(ke){let n=ke.provides;const i=ke.parent&&ke.parent.provides;i===n&&(n=ke.provides=Object.create(i)),n[t]=e}}function no(t,e,n=!1){const i=ke||Be;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(i.proxy):e}}const sc={};function $r(t,e,n){return Df(t,e,n)}function Df(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ae){const a=ke;let l,c=!1,u=!1;if(Ne(t)?(l=()=>t.value,c=Wr(t)):Jn(t)?(l=()=>t,i=!0):H(t)?(u=!0,c=t.some(b=>Jn(b)||Wr(b)),l=()=>t.map(b=>{if(Ne(b))return b.value;if(Jn(b))return qn(b);if(W(b))return Gt(b,a,2)})):W(t)?e?l=()=>Gt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),nt(t,a,3,[d])}:l=ht,e&&i){const b=l;l=()=>qn(b())}let f,d=b=>{f=N.onStop=()=>{Gt(b,a,4)}};if(qi)return d=ht,e?n&&nt(e,a,3,[l(),u?[]:void 0,d]):l(),ht;let m=u?[]:sc;const _=()=>{if(!!N.active)if(e){const b=N.run();(i||c||(u?b.some((S,P)=>Bi(S,m[P])):Bi(b,m)))&&(f&&f(),nt(e,a,3,[b,m===sc?void 0:m,d]),m=b)}else N.run()};_.allowRecurse=!!e;let E;r==="sync"?E=_:r==="post"?E=()=>We(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),E=()=>Na(_));const N=new Ca(l,E);return e?n?_():m=N.run():r==="post"?We(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&ya(a.scope.effects,N)}}function rg(t,e,n){const i=this.proxy,r=Ce(t)?t.includes(".")?Mf(i,t):()=>i[t]:t.bind(i,i);let s;W(e)?s=e:(s=e.handler,n=e);const o=ke;si(this);const a=Df(r,s.bind(i),n);return o?si(o):An(),a}function Mf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function qn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))qn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(of(t)||Xn(t))t.forEach(n=>{qn(n,e)});else if(cf(t))for(const n in t)qn(t[n],e);return t}function Lf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ns(()=>{t.isMounted=!0}),Hf(()=>{t.isUnmounting=!0}),t}const Ze=[Function,Array],sg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},setup(t,{slots:e}){const n=nd(),i=Lf();let r;return()=>{const s=e.default&&Pa(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const E of s)if(E.type!==it){o=E;break}}const a=Z(t),{mode:l}=a;if(i.isLeaving)return io(o);const c=oc(o);if(!c)return io(o);const u=Wi(c,a,i,n);zi(c,u);const f=n.subTree,d=f&&oc(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const E=_();r===void 0?r=E:E!==r&&(r=E,m=!0)}if(d&&d.type!==it&&(!bn(c,d)||m)){const E=Wi(d,a,i,n);if(zi(d,E),l==="out-in")return i.isLeaving=!0,E.afterLeave=()=>{i.isLeaving=!1,n.update()},io(o);l==="in-out"&&c.type!==it&&(E.delayLeave=(N,b,S)=>{const P=Ff(i,d);P[String(d.key)]=d,N._leaveCb=()=>{b(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},og=sg;function Ff(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Wi(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:E,onAppear:N,onAfterAppear:b,onAppearCancelled:S}=e,P=String(t.key),B=Ff(n,t),q=(U,ee)=>{U&&nt(U,i,9,ee)},be=(U,ee)=>{const ne=ee[1];q(U,ee),H(U)?U.every(Pe=>Pe.length<=1)&&ne():U.length<=1&&ne()},me={mode:s,persisted:o,beforeEnter(U){let ee=a;if(!n.isMounted)if(r)ee=E||a;else return;U._leaveCb&&U._leaveCb(!0);const ne=B[P];ne&&bn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),q(ee,[U])},enter(U){let ee=l,ne=c,Pe=u;if(!n.isMounted)if(r)ee=N||l,ne=b||c,Pe=S||u;else return;let D=!1;const pe=U._enterCb=Ye=>{D||(D=!0,Ye?q(Pe,[U]):q(ne,[U]),me.delayedLeave&&me.delayedLeave(),U._enterCb=void 0)};ee?be(ee,[U,pe]):pe()},leave(U,ee){const ne=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ee();q(f,[U]);let Pe=!1;const D=U._leaveCb=pe=>{Pe||(Pe=!0,ee(),pe?q(_,[U]):q(m,[U]),U._leaveCb=void 0,B[ne]===t&&delete B[ne])};B[ne]=t,d?be(d,[U,D]):D()},clone(U){return Wi(U,e,n,i)}};return me}function io(t){if(As(t))return t=tn(t),t.children=null,t}function oc(t){return As(t)?t.children?t.children[0]:void 0:t}function zi(t,e){t.shapeFlag&6&&t.component?zi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pa(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Re?(o.patchFlag&128&&r++,i=i.concat(Pa(o.children,e,a))):(e||o.type!==it)&&i.push(a!=null?tn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function je(t){return W(t)?{setup:t,name:t.name}:t}const Ai=t=>!!t.type.__asyncLoader,As=t=>t.type.__isKeepAlive;function ag(t,e){$f(t,"a",e)}function lg(t,e){$f(t,"da",e)}function $f(t,e,n=ke){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ks(e,i,n),n){let r=n.parent;for(;r&&r.parent;)As(r.parent.vnode)&&cg(i,e,n,r),r=r.parent}}function cg(t,e,n,i){const r=ks(e,t,i,!0);jf(()=>{ya(i[e],r)},n)}function ks(t,e,n=ke,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;di(),si(n);const a=nt(e,n,t,o);return An(),hi(),a});return i?r.unshift(s):r.push(s),s}}const $t=t=>(e,n=ke)=>(!qi||t==="sp")&&ks(t,(...i)=>e(...i),n),ug=$t("bm"),Ns=$t("m"),fg=$t("bu"),Bf=$t("u"),Hf=$t("bum"),jf=$t("um"),dg=$t("sp"),hg=$t("rtg"),pg=$t("rtc");function mg(t,e=ke){ks("ec",t,e)}function hn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(di(),nt(l,n,8,[t.el,a,t,e]),hi())}}const Da="components";function Nn(t,e){return Wf(Da,t,!0,e)||t}const Uf=Symbol();function gg(t){return Ce(t)?Wf(Da,t,!1)||t:t||Uf}function Wf(t,e,n=!0,i=!1){const r=Be||ke;if(r){const s=r.type;if(t===Da){const a=Vg(s,!1);if(a&&(a===e||a===xt(e)||a===Es(xt(e))))return s}const o=ac(r[t]||s[t],e)||ac(r.appContext[t],e);return!o&&i?s:o}}function ac(t,e){return t&&(t[e]||t[xt(e)]||t[Es(xt(e))])}function Ma(t,e,n,i){let r;const s=n&&n[i];if(H(t)||Ce(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function tt(t,e,n={},i,r){if(Be.isCE||Be.parent&&Ai(Be.parent)&&Be.parent.isCE)return K("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),X();const o=s&&zf(s(n)),a=On(Re,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function zf(t){return t.some(e=>Yr(e)?!(e.type===it||e.type===Re&&!zf(e.children)):!0)?t:null}const Po=t=>t?id(t)?Ha(t)||t.proxy:Po(t.parent):null,Vr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Po(t.parent),$root:t=>Po(t.root),$emit:t=>t.emit,$options:t=>La(t),$forceUpdate:t=>t.f||(t.f=()=>Na(t.update)),$nextTick:t=>t.n||(t.n=Vm.bind(t.proxy)),$watch:t=>rg.bind(t)}),_g={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==ae&&Q(i,e))return o[e]=1,i[e];if(r!==ae&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,s[e];if(n!==ae&&Q(n,e))return o[e]=4,n[e];Do&&(o[e]=0)}}const u=Vr[e];let f,d;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ae&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==ae&&Q(r,e)?(r[e]=n,!0):i!==ae&&Q(i,e)?(i[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ae&&Q(t,o)||e!==ae&&Q(e,o)||(a=s[0])&&Q(a,o)||Q(i,o)||Q(Vr,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Do=!0;function vg(t){const e=La(t),n=t.proxy,i=t.ctx;Do=!1,e.beforeCreate&&lc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:E,deactivated:N,beforeDestroy:b,beforeUnmount:S,destroyed:P,unmounted:B,render:q,renderTracked:be,renderTriggered:me,errorCaptured:U,serverPrefetch:ee,expose:ne,inheritAttrs:Pe,components:D,directives:pe,filters:Ye}=e;if(c&&yg(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const re=o[ge];W(re)&&(i[ge]=re.bind(n))}if(r){const ge=r.call(n,n);he(ge)&&(t.data=xs(ge))}if(Do=!0,s)for(const ge in s){const re=s[ge],fn=W(re)?re.bind(n,n):W(re.get)?re.get.bind(n,n):ht,vr=!W(re)&&W(re.set)?re.set.bind(n):ht,dn=et({get:fn,set:vr});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>dn.value,set:mt=>dn.value=mt})}if(a)for(const ge in a)Vf(a[ge],i,n,ge);if(l){const ge=W(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(re=>{ig(re,ge[re])})}u&&lc(u,t,"c");function Ie(ge,re){H(re)?re.forEach(fn=>ge(fn.bind(n))):re&&ge(re.bind(n))}if(Ie(ug,f),Ie(Ns,d),Ie(fg,m),Ie(Bf,_),Ie(ag,E),Ie(lg,N),Ie(mg,U),Ie(pg,be),Ie(hg,me),Ie(Hf,S),Ie(jf,B),Ie(dg,ee),H(ne))if(ne.length){const ge=t.exposed||(t.exposed={});ne.forEach(re=>{Object.defineProperty(ge,re,{get:()=>n[re],set:fn=>n[re]=fn})})}else t.exposed||(t.exposed={});q&&t.render===ht&&(t.render=q),Pe!=null&&(t.inheritAttrs=Pe),D&&(t.components=D),pe&&(t.directives=pe)}function yg(t,e,n=ht,i=!1){H(t)&&(t=Mo(t));for(const r in t){const s=t[r];let o;he(s)?"default"in s?o=no(s.from||r,s.default,!0):o=no(s.from||r):o=no(s),Ne(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function lc(t,e,n){nt(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vf(t,e,n,i){const r=i.includes(".")?Mf(n,i):()=>n[i];if(Ce(t)){const s=e[t];W(s)&&$r(r,s)}else if(W(t))$r(r,t.bind(n));else if(he(t))if(H(t))t.forEach(s=>Vf(s,e,n,i));else{const s=W(t.handler)?t.handler.bind(n):e[t.handler];W(s)&&$r(r,s,t)}}function La(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>qr(l,c,o,!0)),qr(l,e,o)),he(e)&&s.set(e,l),l}function qr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&qr(t,s,n,!0),r&&r.forEach(o=>qr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=bg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bg={data:cc,props:gn,emits:gn,methods:gn,computed:gn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:gn,directives:gn,watch:Eg,provide:cc,inject:wg};function cc(t,e){return e?t?function(){return Oe(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function wg(t,e){return gn(Mo(t),Mo(e))}function Mo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function gn(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function Eg(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const i in e)n[i]=$e(t[i],e[i]);return n}function Cg(t,e,n,i=!1){const r={},s={};Ur(s,Os,1),t.propsDefaults=Object.create(null),qf(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:$m(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function xg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ts(t.emitsOptions,d))continue;const m=e[d];if(l)if(Q(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const _=xt(d);r[_]=Lo(l,a,_,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{qf(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=fi(f))===f||!Q(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Lo(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Q(e,f)&&!0)&&(delete s[f],c=!0)}c&&Rt(t,"set","$attrs")}function qf(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fr(l))continue;const c=e[l];let u;r&&Q(r,u=xt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ts(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Z(n),c=a||ae;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Lo(r,l,f,c[f],t,!Q(c,f))}}return o}function Lo(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(si(r),i=c[n]=l.call(null,e),An())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===fi(n))&&(i=!0))}return i}function Yf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!W(t)){const u=f=>{l=!0;const[d,m]=Yf(f,e,!0);Oe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return he(t)&&i.set(t,Qn),Qn;if(H(s))for(let u=0;u<s.length;u++){const f=xt(s[u]);uc(f)&&(o[f]=ae)}else if(s)for(const u in s){const f=xt(u);if(uc(f)){const d=s[u],m=o[f]=H(d)||W(d)?{type:d}:d;if(m){const _=hc(Boolean,m.type),E=hc(String,m.type);m[0]=_>-1,m[1]=E<0||_<E,(_>-1||Q(m,"default"))&&a.push(f)}}}const c=[o,a];return he(t)&&i.set(t,c),c}function uc(t){return t[0]!=="$"}function fc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function dc(t,e){return fc(t)===fc(e)}function hc(t,e){return H(e)?e.findIndex(n=>dc(n,t)):W(e)&&dc(e,t)?0:-1}const Gf=t=>t[0]==="_"||t==="$stable",Fa=t=>H(t)?t.map(yt):[yt(t)],Ig=(t,e,n)=>{if(e._n)return e;const i=Me((...r)=>Fa(e(...r)),n);return i._c=!1,i},Kf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Gf(r))continue;const s=t[r];if(W(s))e[r]=Ig(r,s,i);else if(s!=null){const o=Fa(s);e[r]=()=>o}}},Qf=(t,e)=>{const n=Fa(e);t.slots.default=()=>n},Tg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Ur(e,"_",n)):Kf(e,t.slots={})}else t.slots={},e&&Qf(t,e);Ur(t.slots,Os,1)},Sg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ae;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Oe(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Kf(e,r)),o=e}else e&&(Qf(t,e),o={default:1});if(s)for(const a in r)!Gf(a)&&!(a in o)&&delete r[a]};function Xf(){return{app:null,config:{isNativeTag:rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function kg(t,e){return function(i,r=null){W(i)||(i=Object.assign({},i)),r!=null&&!he(r)&&(r=null);const s=Xf(),o=new Set;let a=!1;const l=s.app={_uid:Ag++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=K(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ha(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Fo(t,e,n,i,r=!1){if(H(t)){t.forEach((d,m)=>Fo(d,e&&(H(e)?e[m]:e),n,i,r));return}if(Ai(i)&&!r)return;const s=i.shapeFlag&4?Ha(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):Ne(c)&&(c.value=null)),W(l))Gt(l,a,12,[o,u]);else{const d=Ce(l),m=Ne(l);if(d||m){const _=()=>{if(t.f){const E=d?u[l]:l.value;r?H(E)&&ya(E,s):H(E)?E.includes(s)||E.push(s):d?(u[l]=[s],Q(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,We(_,n)):_()}}}const We=ng;function Ng(t){return Og(t)}function Og(t,e){const n=um();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=ht,insertStaticContent:_}=t,E=(h,p,g,y=null,v=null,I=null,A=!1,C=null,T=!!p.dynamicChildren)=>{if(h===p)return;h&&!bn(h,p)&&(y=yr(h),mt(h,v,I,!0),h=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:M,shapeFlag:O}=p;switch(w){case $a:N(h,p,g,y);break;case it:b(h,p,g,y);break;case ro:h==null&&S(p,g,y,A);break;case Re:D(h,p,g,y,v,I,A,C,T);break;default:O&1?q(h,p,g,y,v,I,A,C,T):O&6?pe(h,p,g,y,v,I,A,C,T):(O&64||O&128)&&w.process(h,p,g,y,v,I,A,C,T,Wn)}M!=null&&v&&Fo(M,h&&h.ref,I,p||h,!p)},N=(h,p,g,y)=>{if(h==null)i(p.el=a(p.children),g,y);else{const v=p.el=h.el;p.children!==h.children&&c(v,p.children)}},b=(h,p,g,y)=>{h==null?i(p.el=l(p.children||""),g,y):p.el=h.el},S=(h,p,g,y)=>{[h.el,h.anchor]=_(h.children,p,g,y,h.el,h.anchor)},P=({el:h,anchor:p},g,y)=>{let v;for(;h&&h!==p;)v=d(h),i(h,g,y),h=v;i(p,g,y)},B=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),r(h),h=g;r(p)},q=(h,p,g,y,v,I,A,C,T)=>{A=A||p.type==="svg",h==null?be(p,g,y,v,I,A,C,T):ee(h,p,v,I,A,C,T)},be=(h,p,g,y,v,I,A,C)=>{let T,w;const{type:M,props:O,shapeFlag:L,transition:j,dirs:Y}=h;if(T=h.el=o(h.type,I,O&&O.is,O),L&8?u(T,h.children):L&16&&U(h.children,T,null,y,v,I&&M!=="foreignObject",A,C),Y&&hn(h,null,y,"created"),O){for(const te in O)te!=="value"&&!Fr(te)&&s(T,te,null,O[te],I,h.children,y,v,Tt);"value"in O&&s(T,"value",null,O.value),(w=O.onVnodeBeforeMount)&&_t(w,y,h)}me(T,h,h.scopeId,A,y),Y&&hn(h,null,y,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;se&&j.beforeEnter(T),i(T,p,g),((w=O&&O.onVnodeMounted)||se||Y)&&We(()=>{w&&_t(w,y,h),se&&j.enter(T),Y&&hn(h,null,y,"mounted")},v)},me=(h,p,g,y,v)=>{if(g&&m(h,g),y)for(let I=0;I<y.length;I++)m(h,y[I]);if(v){let I=v.subTree;if(p===I){const A=v.vnode;me(h,A,A.scopeId,A.slotScopeIds,v.parent)}}},U=(h,p,g,y,v,I,A,C,T=0)=>{for(let w=T;w<h.length;w++){const M=h[w]=C?qt(h[w]):yt(h[w]);E(null,M,p,g,y,v,I,A,C)}},ee=(h,p,g,y,v,I,A)=>{const C=p.el=h.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=p;T|=h.patchFlag&16;const O=h.props||ae,L=p.props||ae;let j;g&&pn(g,!1),(j=L.onVnodeBeforeUpdate)&&_t(j,g,p,h),M&&hn(p,h,g,"beforeUpdate"),g&&pn(g,!0);const Y=v&&p.type!=="foreignObject";if(w?ne(h.dynamicChildren,w,C,g,y,Y,I):A||re(h,p,C,null,g,y,Y,I,!1),T>0){if(T&16)Pe(C,p,O,L,g,y,v);else if(T&2&&O.class!==L.class&&s(C,"class",null,L.class,v),T&4&&s(C,"style",O.style,L.style,v),T&8){const se=p.dynamicProps;for(let te=0;te<se.length;te++){const ye=se[te],st=O[ye],zn=L[ye];(zn!==st||ye==="value")&&s(C,ye,st,zn,v,h.children,g,y,Tt)}}T&1&&h.children!==p.children&&u(C,p.children)}else!A&&w==null&&Pe(C,p,O,L,g,y,v);((j=L.onVnodeUpdated)||M)&&We(()=>{j&&_t(j,g,p,h),M&&hn(p,h,g,"updated")},y)},ne=(h,p,g,y,v,I,A)=>{for(let C=0;C<p.length;C++){const T=h[C],w=p[C],M=T.el&&(T.type===Re||!bn(T,w)||T.shapeFlag&70)?f(T.el):g;E(T,w,M,null,y,v,I,A,!0)}},Pe=(h,p,g,y,v,I,A)=>{if(g!==y){if(g!==ae)for(const C in g)!Fr(C)&&!(C in y)&&s(h,C,g[C],null,A,p.children,v,I,Tt);for(const C in y){if(Fr(C))continue;const T=y[C],w=g[C];T!==w&&C!=="value"&&s(h,C,w,T,A,p.children,v,I,Tt)}"value"in y&&s(h,"value",g.value,y.value)}},D=(h,p,g,y,v,I,A,C,T)=>{const w=p.el=h?h.el:a(""),M=p.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:j}=p;j&&(C=C?C.concat(j):j),h==null?(i(w,g,y),i(M,g,y),U(p.children,g,M,v,I,A,C,T)):O>0&&O&64&&L&&h.dynamicChildren?(ne(h.dynamicChildren,L,g,v,I,A,C),(p.key!=null||v&&p===v.subTree)&&Jf(h,p,!0)):re(h,p,g,M,v,I,A,C,T)},pe=(h,p,g,y,v,I,A,C,T)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?v.ctx.activate(p,g,y,A,T):Ye(p,g,y,v,I,A,T):yi(h,p,T)},Ye=(h,p,g,y,v,I,A)=>{const C=h.component=Hg(h,y,v);if(As(h)&&(C.ctx.renderer=Wn),jg(C),C.asyncDep){if(v&&v.registerDep(C,Ie),!h.el){const T=C.subTree=K(it);b(null,T,p,g)}return}Ie(C,h,p,g,v,I,A)},yi=(h,p,g)=>{const y=p.component=h.component;if(Zm(h,p,g))if(y.asyncDep&&!y.asyncResolved){ge(y,p,g);return}else y.next=p,Ym(y.update),y.update();else p.el=h.el,y.vnode=p},Ie=(h,p,g,y,v,I,A)=>{const C=()=>{if(h.isMounted){let{next:M,bu:O,u:L,parent:j,vnode:Y}=h,se=M,te;pn(h,!1),M?(M.el=Y.el,ge(h,M,A)):M=Y,O&&eo(O),(te=M.props&&M.props.onVnodeBeforeUpdate)&&_t(te,j,M,Y),pn(h,!0);const ye=to(h),st=h.subTree;h.subTree=ye,E(st,ye,f(st.el),yr(st),h,v,I),M.el=ye.el,se===null&&eg(h,ye.el),L&&We(L,v),(te=M.props&&M.props.onVnodeUpdated)&&We(()=>_t(te,j,M,Y),v)}else{let M;const{el:O,props:L}=p,{bm:j,m:Y,parent:se}=h,te=Ai(p);if(pn(h,!1),j&&eo(j),!te&&(M=L&&L.onVnodeBeforeMount)&&_t(M,se,p),pn(h,!0),O&&Js){const ye=()=>{h.subTree=to(h),Js(O,h.subTree,h,v,null)};te?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ye()):ye()}else{const ye=h.subTree=to(h);E(null,ye,g,y,h,v,I),p.el=ye.el}if(Y&&We(Y,v),!te&&(M=L&&L.onVnodeMounted)){const ye=p;We(()=>_t(M,se,ye),v)}(p.shapeFlag&256||se&&Ai(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&We(h.a,v),h.isMounted=!0,p=g=y=null}},T=h.effect=new Ca(C,()=>Na(w),h.scope),w=h.update=()=>T.run();w.id=h.uid,pn(h,!0),w()},ge=(h,p,g)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,xg(h,p.props,y,g),Sg(h,p.children,g),di(),ic(),hi()},re=(h,p,g,y,v,I,A,C,T=!1)=>{const w=h&&h.children,M=h?h.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:j}=p;if(L>0){if(L&128){vr(w,O,g,y,v,I,A,C,T);return}else if(L&256){fn(w,O,g,y,v,I,A,C,T);return}}j&8?(M&16&&Tt(w,v,I),O!==w&&u(g,O)):M&16?j&16?vr(w,O,g,y,v,I,A,C,T):Tt(w,v,I,!0):(M&8&&u(g,""),j&16&&U(O,g,y,v,I,A,C,T))},fn=(h,p,g,y,v,I,A,C,T)=>{h=h||Qn,p=p||Qn;const w=h.length,M=p.length,O=Math.min(w,M);let L;for(L=0;L<O;L++){const j=p[L]=T?qt(p[L]):yt(p[L]);E(h[L],j,g,null,v,I,A,C,T)}w>M?Tt(h,v,I,!0,!1,O):U(p,g,y,v,I,A,C,T,O)},vr=(h,p,g,y,v,I,A,C,T)=>{let w=0;const M=p.length;let O=h.length-1,L=M-1;for(;w<=O&&w<=L;){const j=h[w],Y=p[w]=T?qt(p[w]):yt(p[w]);if(bn(j,Y))E(j,Y,g,null,v,I,A,C,T);else break;w++}for(;w<=O&&w<=L;){const j=h[O],Y=p[L]=T?qt(p[L]):yt(p[L]);if(bn(j,Y))E(j,Y,g,null,v,I,A,C,T);else break;O--,L--}if(w>O){if(w<=L){const j=L+1,Y=j<M?p[j].el:y;for(;w<=L;)E(null,p[w]=T?qt(p[w]):yt(p[w]),g,Y,v,I,A,C,T),w++}}else if(w>L)for(;w<=O;)mt(h[w],v,I,!0),w++;else{const j=w,Y=w,se=new Map;for(w=Y;w<=L;w++){const Ge=p[w]=T?qt(p[w]):yt(p[w]);Ge.key!=null&&se.set(Ge.key,w)}let te,ye=0;const st=L-Y+1;let zn=!1,ql=0;const bi=new Array(st);for(w=0;w<st;w++)bi[w]=0;for(w=j;w<=O;w++){const Ge=h[w];if(ye>=st){mt(Ge,v,I,!0);continue}let gt;if(Ge.key!=null)gt=se.get(Ge.key);else for(te=Y;te<=L;te++)if(bi[te-Y]===0&&bn(Ge,p[te])){gt=te;break}gt===void 0?mt(Ge,v,I,!0):(bi[gt-Y]=w+1,gt>=ql?ql=gt:zn=!0,E(Ge,p[gt],g,null,v,I,A,C,T),ye++)}const Yl=zn?Rg(bi):Qn;for(te=Yl.length-1,w=st-1;w>=0;w--){const Ge=Y+w,gt=p[Ge],Gl=Ge+1<M?p[Ge+1].el:y;bi[w]===0?E(null,gt,g,Gl,v,I,A,C,T):zn&&(te<0||w!==Yl[te]?dn(gt,g,Gl,2):te--)}}},dn=(h,p,g,y,v=null)=>{const{el:I,type:A,transition:C,children:T,shapeFlag:w}=h;if(w&6){dn(h.component.subTree,p,g,y);return}if(w&128){h.suspense.move(p,g,y);return}if(w&64){A.move(h,p,g,Wn);return}if(A===Re){i(I,p,g);for(let O=0;O<T.length;O++)dn(T[O],p,g,y);i(h.anchor,p,g);return}if(A===ro){P(h,p,g);return}if(y!==2&&w&1&&C)if(y===0)C.beforeEnter(I),i(I,p,g),We(()=>C.enter(I),v);else{const{leave:O,delayLeave:L,afterLeave:j}=C,Y=()=>i(I,p,g),se=()=>{O(I,()=>{Y(),j&&j()})};L?L(I,Y,se):se()}else i(I,p,g)},mt=(h,p,g,y=!1,v=!1)=>{const{type:I,props:A,ref:C,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:O,dirs:L}=h;if(C!=null&&Fo(C,null,g,h,!0),M&256){p.ctx.deactivate(h);return}const j=M&1&&L,Y=!Ai(h);let se;if(Y&&(se=A&&A.onVnodeBeforeUnmount)&&_t(se,p,h),M&6)Jp(h.component,g,y);else{if(M&128){h.suspense.unmount(g,y);return}j&&hn(h,null,p,"beforeUnmount"),M&64?h.type.remove(h,p,g,v,Wn,y):w&&(I!==Re||O>0&&O&64)?Tt(w,p,g,!1,!0):(I===Re&&O&384||!v&&M&16)&&Tt(T,p,g),y&&zl(h)}(Y&&(se=A&&A.onVnodeUnmounted)||j)&&We(()=>{se&&_t(se,p,h),j&&hn(h,null,p,"unmounted")},g)},zl=h=>{const{type:p,el:g,anchor:y,transition:v}=h;if(p===Re){Xp(g,y);return}if(p===ro){B(h);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:C}=v,T=()=>A(g,I);C?C(h.el,I,T):T()}else I()},Xp=(h,p)=>{let g;for(;h!==p;)g=d(h),r(h),h=g;r(p)},Jp=(h,p,g)=>{const{bum:y,scope:v,update:I,subTree:A,um:C}=h;y&&eo(y),v.stop(),I&&(I.active=!1,mt(A,h,p,g)),C&&We(C,p),We(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Tt=(h,p,g,y=!1,v=!1,I=0)=>{for(let A=I;A<h.length;A++)mt(h[A],p,g,y,v)},yr=h=>h.shapeFlag&6?yr(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),Vl=(h,p,g)=>{h==null?p._vnode&&mt(p._vnode,null,null,!0):E(p._vnode||null,h,p,null,null,null,g),ic(),Of(),p._vnode=h},Wn={p:E,um:mt,m:dn,r:zl,mt:Ye,mc:U,pc:re,pbc:ne,n:yr,o:t};let Xs,Js;return e&&([Xs,Js]=e(Wn)),{render:Vl,hydrate:Xs,createApp:kg(Vl,Xs)}}function pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jf(t,e,n=!1){const i=t.children,r=e.children;if(H(i)&&H(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=qt(r[s]),a.el=o.el),n||Jf(o,a))}}function Rg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Pg=t=>t.__isTeleport,Re=Symbol(void 0),$a=Symbol(void 0),it=Symbol(void 0),ro=Symbol(void 0),ki=[];let ct=null;function X(t=!1){ki.push(ct=t?null:[])}function Dg(){ki.pop(),ct=ki[ki.length-1]||null}let Vi=1;function pc(t){Vi+=t}function Zf(t){return t.dynamicChildren=Vi>0?ct||Qn:null,Dg(),Vi>0&&ct&&ct.push(t),t}function fe(t,e,n,i,r,s){return Zf(F(t,e,n,i,r,s,!0))}function On(t,e,n,i,r){return Zf(K(t,e,n,i,r,!0))}function Yr(t){return t?t.__v_isVNode===!0:!1}function bn(t,e){return t.type===e.type&&t.key===e.key}const Os="__vInternal",ed=({key:t})=>t!=null?t:null,Br=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||Ne(t)||W(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function F(t,e=null,n=null,i=0,r=null,s=t===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ed(e),ref:e&&Br(e),scopeId:Ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ba(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Vi>0&&!o&&ct&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ct.push(l),l}const K=Mg;function Mg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Uf)&&(t=it),Yr(t)){const a=tn(t,e,!0);return n&&Ba(a,n),Vi>0&&!s&&ct&&(a.shapeFlag&6?ct[ct.indexOf(t)]=a:ct.push(a)),a.patchFlag|=-2,a}if(qg(t)&&(t=t.__vccOpts),e){e=Lg(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Zt(a)),he(l)&&(Ef(l)&&!H(l)&&(l=Oe({},l)),e.style=$i(l))}const o=Ce(t)?1:tg(t)?128:Pg(t)?64:he(t)?4:W(t)?2:0;return F(t,e,n,i,r,o,s,!0)}function Lg(t){return t?Ef(t)||Os in t?Oe({},t):t:null}function tn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Fg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ed(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Br(e)):[r,Br(e)]:Br(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tn(t.ssContent),ssFallback:t.ssFallback&&tn(t.ssFallback),el:t.el,anchor:t.anchor}}function td(t=" ",e=0){return K($a,null,t,e)}function wt(t="",e=!1){return e?(X(),On(it,null,t)):K(it,null,t)}function yt(t){return t==null||typeof t=="boolean"?K(it):H(t)?K(Re,null,t.slice()):typeof t=="object"?qt(t):K($a,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tn(t)}function Ba(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ba(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Os in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),i&64?(n=16,e=[td(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zt([e.class,i.class]));else if(r==="style")e.style=$i([e.style,i.style]);else if(ys(r)){const s=e[r],o=i[r];o&&s!==o&&!(H(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _t(t,e,n,i=null){nt(t,e,7,[n,i])}const $g=Xf();let Bg=0;function Hg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$g,s={uid:Bg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(i,r),emitsOptions:Pf(i,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qm.bind(null,s),t.ce&&t.ce(s),s}let ke=null;const nd=()=>ke||Be,si=t=>{ke=t,t.scope.on()},An=()=>{ke&&ke.scope.off(),ke=null};function id(t){return t.vnode.shapeFlag&4}let qi=!1;function jg(t,e=!1){qi=e;const{props:n,children:i}=t.vnode,r=id(t);Cg(t,n,r,e),Tg(t,i);const s=r?Ug(t,e):void 0;return qi=!1,s}function Ug(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cf(new Proxy(t.ctx,_g));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?zg(t):null;si(t),di();const s=Gt(i,t,0,[t.props,r]);if(hi(),An(),af(s)){if(s.then(An,An),e)return s.then(o=>{mc(t,o,e)}).catch(o=>{Is(o,t,0)});t.asyncDep=s}else mc(t,s,e)}else rd(t,e)}function mc(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Sf(e)),rd(t,n)}let gc;function rd(t,e,n){const i=t.type;if(!t.render){if(!e&&gc&&!i.render){const r=i.template||La(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Oe(Oe({isCustomElement:s,delimiters:a},o),l);i.render=gc(r,c)}}t.render=i.render||ht}si(t),di(),vg(t),hi(),An()}function Wg(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function zg(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Wg(t))},slots:t.slots,emit:t.emit,expose:e}}function Ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sf(Cf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vr)return Vr[n](t)}}))}function Vg(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function qg(t){return W(t)&&"__vccOpts"in t}const et=(t,e)=>Wm(t,e,qi);function sd(t,e,n){const i=arguments.length;return i===2?he(e)&&!H(e)?Yr(e)?K(t,null,[e]):K(t,e):K(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Yr(n)&&(n=[n]),K(t,e,n))}const Yg="3.2.40",Gg="http://www.w3.org/2000/svg",wn=typeof document<"u"?document:null,_c=wn&&wn.createElement("template"),Kg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?wn.createElementNS(Gg,t):wn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{_c.innerHTML=i?`<svg>${t}</svg>`:t;const a=_c.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qg(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xg(t,e,n){const i=t.style,r=Ce(n);if(n&&!r){for(const s in n)$o(i,s,n[s]);if(e&&!Ce(e))for(const s in e)n[s]==null&&$o(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const vc=/\s*!important$/;function $o(t,e,n){if(H(n))n.forEach(i=>$o(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Jg(t,e);vc.test(n)?t.setProperty(fi(i),n.replace(vc,""),"important"):t[i]=n}}const yc=["Webkit","Moz","ms"],so={};function Jg(t,e){const n=so[e];if(n)return n;let i=xt(e);if(i!=="filter"&&i in t)return so[e]=i;i=Es(i);for(let r=0;r<yc.length;r++){const s=yc[r]+i;if(s in t)return so[e]=s}return e}const bc="http://www.w3.org/1999/xlink";function Zg(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bc,e.slice(6,e.length)):t.setAttributeNS(bc,e,n);else{const s=em(e);n==null||s&&!rf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function e_(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=rf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[od,t_]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Bo=0;const n_=Promise.resolve(),i_=()=>{Bo=0},r_=()=>Bo||(n_.then(i_),Bo=od());function s_(t,e,n,i){t.addEventListener(e,n,i)}function o_(t,e,n,i){t.removeEventListener(e,n,i)}function a_(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=l_(e);if(i){const c=s[e]=c_(i,r);s_(t,a,c,l)}else o&&(o_(t,a,o,l),s[e]=void 0)}}const wc=/(?:Once|Passive|Capture)$/;function l_(t){let e;if(wc.test(t)){e={};let i;for(;i=t.match(wc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fi(t.slice(2)),e]}function c_(t,e){const n=i=>{const r=i.timeStamp||od();(t_||r>=n.attached-1)&&nt(u_(i,n.value),e,5,[i])};return n.value=t,n.attached=r_(),n}function u_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ec=/^on[a-z]/,f_=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Qg(t,i,r):e==="style"?Xg(t,n,i):ys(e)?va(e)||a_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):d_(t,e,i,r))?e_(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Zg(t,e,i,r))};function d_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Ec.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ec.test(e)&&Ce(n)?!1:e in t}const Wt="transition",wi="animation",ad={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h_=Oe({},og.props,ad),mn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cc=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function p_(t){const e={};for(const D in t)D in ad||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=m_(r),E=_&&_[0],N=_&&_[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:P,onLeave:B,onLeaveCancelled:q,onBeforeAppear:be=b,onAppear:me=S,onAppearCancelled:U=P}=e,ee=(D,pe,Ye)=>{Vt(D,pe?u:a),Vt(D,pe?c:o),Ye&&Ye()},ne=(D,pe)=>{D._isLeaving=!1,Vt(D,f),Vt(D,m),Vt(D,d),pe&&pe()},Pe=D=>(pe,Ye)=>{const yi=D?me:S,Ie=()=>ee(pe,D,Ye);mn(yi,[pe,Ie]),xc(()=>{Vt(pe,D?l:s),St(pe,D?u:a),Cc(yi)||Ic(pe,i,E,Ie)})};return Oe(e,{onBeforeEnter(D){mn(b,[D]),St(D,s),St(D,o)},onBeforeAppear(D){mn(be,[D]),St(D,l),St(D,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(D,pe){D._isLeaving=!0;const Ye=()=>ne(D,pe);St(D,f),cd(),St(D,d),xc(()=>{!D._isLeaving||(Vt(D,f),St(D,m),Cc(B)||Ic(D,i,N,Ye))}),mn(B,[D,Ye])},onEnterCancelled(D){ee(D,!1),mn(P,[D])},onAppearCancelled(D){ee(D,!0),mn(U,[D])},onLeaveCancelled(D){ne(D),mn(q,[D])}})}function m_(t){if(t==null)return null;if(he(t))return[oo(t.enter),oo(t.leave)];{const e=oo(t);return[e,e]}}function oo(t){return uf(t)}function St(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Vt(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function xc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let g_=0;function Ic(t,e,n,i){const r=t._endId=++g_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=ld(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=m=>{m.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function ld(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(Wt+"Delay"),s=i(Wt+"Duration"),o=Tc(r,s),a=i(wi+"Delay"),l=i(wi+"Duration"),c=Tc(a,l);let u=null,f=0,d=0;e===Wt?o>0&&(u=Wt,f=o,d=s.length):e===wi?c>0&&(u=wi,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Wt:wi:null,d=u?u===Wt?s.length:l.length:0);const m=u===Wt&&/\b(transform|all)(,|$)/.test(n[Wt+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:m}}function Tc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Sc(n)+Sc(t[i])))}function Sc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function cd(){return document.body.offsetHeight}const ud=new WeakMap,fd=new WeakMap,__={name:"TransitionGroup",props:Oe({},h_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=nd(),i=Lf();let r,s;return Bf(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!w_(r[0].el,n.vnode.el,o))return;r.forEach(v_),r.forEach(y_);const a=r.filter(b_);cd(),a.forEach(l=>{const c=l.el,u=c.style;St(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Vt(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Z(t),a=p_(o);let l=o.tag||Re;r=s,s=e.default?Pa(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&zi(u,Wi(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];zi(u,Wi(u,a,i,n)),ud.set(u,u.el.getBoundingClientRect())}return K(l,null,s)}}},dd=__;function v_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function y_(t){fd.set(t,t.el.getBoundingClientRect())}function b_(t){const e=ud.get(t),n=fd.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function w_(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=ld(i);return r.removeChild(i),s}const E_=Oe({patchProp:f_},Kg);let Ac;function C_(){return Ac||(Ac=Ng(E_))}const x_=(...t)=>{const e=C_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=I_(i);if(!r)return;const s=e._component;!W(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function I_(t){return Ce(t)?document.querySelector(t):t}const kc="/assets/don-cool.c53b70d9.jpeg",T_="/assets/shiba-cool.294ad440.png",S_=["src"],A_=je({__name:"DynamicAvatar",setup(t){const e=()=>{document.getElementById("avatar").src=T_},n=()=>{document.getElementById("avatar").src=kc};return(i,r)=>(X(),fe("header",null,[F("img",{id:"avatar",class:"wxxl center",alt:"Don Truong",draggable:"false",onMouseover:r[0]||(r[0]=s=>e()),onMouseleave:r[1]||(r[1]=s=>n()),src:Nt(kc)},null,40,S_)]))}});const Hn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},k_=Hn(A_,[["__scopeId","data-v-b1bfd848"]]),hd=t=>(Oa("data-v-7f27cae6"),t=t(),Ra(),t),N_={class:"container"},O_=hd(()=>F("img",{class:"wxl",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"},null,-1)),R_={class:"xxl"},P_={class:"typed-text",id:"dynamicText"},D_=hd(()=>F("span",{class:"blinking-cursor"},"|",-1)),M_=je({__name:"TypingText",props:{constantText:String,dynamicTexts:Array},setup(t){const e=t,n=70,i=10,r=1500;let s=Tf(""),o=!1,a=0,l=0;const c=async()=>{!e.dynamicTexts||(l<e.dynamicTexts[a].length?(o||(o=!0),s.value+=e.dynamicTexts[a][l],l+=1,setTimeout(c,n)):(o=!1,setTimeout(u,r)))},u=async()=>{if(!!e.dynamicTexts){if(l==0){f();return}l>0&&(o&&(o=!0),s.value=e.dynamicTexts[a].substring(0,l-1),l-=1,a+1<e.dynamicTexts.length&&e.dynamicTexts[a+1].startsWith(s.value)?f():setTimeout(u,i))}},f=()=>{!e.dynamicTexts||(o=!1,a+=1,a>=e.dynamicTexts.length&&(a=0),setTimeout(c,n))};return Ns(()=>{c()}),(d,m)=>(X(),fe("div",N_,[O_,F("h1",R_,[td(Ke(t.constantText)+" ",1),F("span",P_,Ke(Nt(s)),1),D_,F("span",{class:Zt(["cursor",{typing:Nt(o)}])},"\xA0",2)])]))}});const L_=Hn(M_,[["__scopeId","data-v-7f27cae6"]]);function F_(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(r){r(n)}),(i=t.get("*"))&&i.slice().map(function(r){r(e,n)})}}}const Gr=F_(),pd=new Map,Nc={x:["left","center","right"],y:["top","bottom"]},$_=(t=>()=>t++)(0),B_=t=>typeof t!="string"?[]:t.split(/\s+/gi).filter(e=>e),H_=t=>{typeof t=="string"&&(t=B_(t));let e=null,n=null;return t.forEach(i=>{Nc.y.indexOf(i)!==-1&&(n=i),Nc.x.indexOf(i)!==-1&&(e=i)}),{x:e,y:n}};class j_{constructor(e,n,i){this.remaining=n,this.callback=e,this.notifyItem=i,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var ao={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},ja=je({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",t,e)},leave(t,e){this.$emit("leave",t,e)},afterLeave(){this.$emit("after-leave")}}});function U_(t,e,n,i,r,s){return X(),On(dd,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:Me(()=>[tt(t.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}ja.render=U_;ja.__file="src/VelocityGroup.vue";var Ua=je({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function W_(t,e,n,i,r,s){return X(),On(dd,{tag:"span",name:t.name},{default:Me(()=>[tt(t.$slots,"default")]),_:3},8,["name"])}Ua.render=W_;Ua.__file="src/CssGroup.vue";const lo="[-+]?[0-9]*.?[0-9]+",Oc=[{name:"px",regexp:new RegExp(`^${lo}px$`)},{name:"%",regexp:new RegExp(`^${lo}%$`)},{name:"px",regexp:new RegExp(`^${lo}$`)}],z_=t=>{if(t==="auto")return{type:t,value:0};for(let e=0;e<Oc.length;e++){const n=Oc[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}},V_=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return z_(t);default:return{type:"",value:t}}},Ir={IDLE:0,DESTROYED:2};var Wa=je({name:"notifications",components:{VelocityGroup:ja,CssGroup:Ua},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:ao.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:ao.velocityAnimation},animationName:{type:String,default:ao.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:pd.get("velocity"),timerControl:null}},computed:{actualWidth(){return V_(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=H_(this.position),n=this.actualWidth.value,i=this.actualWidth.type,r={width:n+i};return e&&(r[e]="0px"),t&&(t==="center"?r.left=`calc(50% - ${+n/2}${i})`:r[t]="0px"),r},active(){return this.list.filter(t=>t.state!==Ir.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){Gr.on("add",this.addItem),Gr.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear){this.destroyAll();return}const e=typeof t.duration=="number"?t.duration:this.duration,n=typeof t.speed=="number"?t.speed:this.speed,i=typeof t.ignoreDuplicates=="boolean"?t.ignoreDuplicates:this.ignoreDuplicates,{title:r,text:s,type:o,data:a,id:l}=t,c={id:l||$_(),title:r,text:s,type:o,state:Ir.IDLE,speed:n,length:e+2*n,data:a};e>=0&&(this.timerControl=new j_(()=>this.destroy(c),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let f=-1;const d=this.active.some(_=>_.title===t.title&&_.text===t.text);(!i||!d)&&(u?(this.list.push(c),this.active.length>this.max&&(f=0)):(this.list.unshift(c),this.active.length>this.max&&(f=this.active.length-1)),f!==-1&&this.destroy(this.active[f]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,(e=t.type)!==null&&e!==void 0?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=Ir.DESTROYED,this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find(n=>n.id===t);e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var n;const i=(n=this.animation)===null||n===void 0?void 0:n[t];return typeof i=="function"?i.call(this,e):i},enter(t,e){if(!this.isVA)return;const n=this.getAnimation("enter",t);this.velocity(t,n,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const n=this.getAnimation("leave",t);this.velocity(t,n,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter(t=>t.state!==Ir.DESTROYED)}}});const q_=["data-id"],Y_=["onClick"],G_=["innerHTML"],K_=["innerHTML"];function Q_(t,e,n,i,r,s){return X(),fe("div",{class:"vue-notification-group",style:$i(t.styles)},[(X(),On(gg(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:Me(()=>[(X(!0),fe(Re,null,Ma(t.active,o=>(X(),fe("div",{key:o.id,class:"vue-notification-wrapper",style:$i(t.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:e[0]||(e[0]=(...a)=>t.pauseTimeout&&t.pauseTimeout(...a)),onMouseleave:e[1]||(e[1]=(...a)=>t.resumeTimeout&&t.resumeTimeout(...a))},[tt(t.$slots,"body",{class:Zt([t.classes,o.type]),item:o,close:()=>t.destroy(o)},()=>[wt(" Default slot template "),F("div",{class:Zt(t.notifyClass(o)),onClick:a=>t.destroyIfNecessary(o)},[o.title?(X(),fe("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,G_)):wt("v-if",!0),F("div",{class:"notification-content",innerHTML:o.text},null,8,K_)],10,Y_)])],44,q_))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function X_(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var J_=`
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

`;X_(J_);Wa.render=Q_;Wa.__file="src/Notifications.vue";const za=t=>{typeof t=="string"&&(t={title:"",text:t}),typeof t=="object"&&Gr.emit("add",t)};za.close=function(t){Gr.emit("close",t)};function Z_(t,e={}){Object.entries(e).forEach(i=>pd.set(...i));const n=e.name||"notify";t.config.globalProperties["$"+n]=za,t.component(e.componentName||"notifications",Wa)}var ev={install:Z_};const tv="/assets/Don_Truong_Resume.405b33cf.pdf",nv={class:"social"},iv={href:"https://github.com/truongdd03",target:"_blank"},rv={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},sv={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},ov=je({__name:"SocialInformation",setup(t){const e=async()=>{const i="dong23102003@gmail.com";await navigator.clipboard.writeText(i),za({title:"Copied email address!"})},n=()=>{window.open(tv)};return(i,r)=>{const s=Nn("font-awesome-icon");return X(),fe("header",null,[F("div",nv,[F("a",iv,[K(s,{class:"l icon",icon:"fa-brands fa-github",inverse:""})]),F("a",rv,[K(s,{class:"l icon",icon:"fa-brands fa-linkedin",inverse:""})]),F("a",sv,[K(s,{class:"l icon",icon:"fa-brands fa-discord",inverse:""})]),K(s,{class:"l icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=o=>e())}),K(s,{class:"l icon",icon:"fa-solid fa-file-pdf",inverse:"",onClick:r[1]||(r[1]=o=>n())})])])}}});const av=Hn(ov,[["__scopeId","data-v-fd2c1f2d"]]);/**
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
 */const md={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw pi(e)},pi=function(t){return new Error("Firebase Database ("+md.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const gd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},lv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),i.push(n[u],n[f],n[d],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_d=function(t){const e=gd(t);return Va.encodeByteArray(e,!0)},Kr=function(t){return _d(t).replace(/\./g,"")},Ho=function(t){try{return Va.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cv(t){return vd(void 0,t)}function vd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uv(n)||(t[n]=vd(t[n],e[n]));return t}function uv(t){return t!=="__proto__"}/**
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
 */function fv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fv())}function dv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bd(){return md.NODE_ADMIN===!0}function wd(){return typeof indexedDB=="object"}function Ed(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gv=()=>mv().__FIREBASE_DEFAULTS__,_v=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},vv=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Ho(t[1]);return e&&JSON.parse(e)},Cd=()=>gv()||_v()||vv(),yv=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bv=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config};/**
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
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function wv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Kr(JSON.stringify(n)),Kr(JSON.stringify(o)),a].join(".")}/**
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
 */const Ev="FirebaseError";class jn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ev,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Cv(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new jn(r,a,i)}}function Cv(t,e){return t.replace(xv,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const xv=/\{\$([^}]+)}/g;/**
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
 */function Yi(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const xd=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Yi(Ho(s[0])||""),n=Yi(Ho(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Iv=function(t){const e=xd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tv=function(t){const e=xd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Pc(s)&&Pc(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Pc(t){return t!==null&&typeof t=="object"}/**
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
 */function Sv(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Av{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function qa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const kv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,x(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ds=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Nv=1e3,Ov=2,Rv=4*60*60*1e3,Pv=.5;function Dc(t,e=Nv,n=Ov){const i=e*Math.pow(n,t),r=Math.round(Pv*i*(Math.random()-.5)*2);return Math.min(Rv,i+r)}/**
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
 */function un(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Dv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Rs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lv(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Mv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mv(t){return t===_n?void 0:t}function Lv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const $v={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Bv=oe.INFO,Hv={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},jv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Hv[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=Bv,this._logHandler=jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$v[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Uv=(t,e)=>e.some(n=>t instanceof n);let Mc,Lc;function Wv(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zv(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,jo=new WeakMap,Td=new WeakMap,co=new WeakMap,Ga=new WeakMap;function Vv(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Id.set(n,t)}).catch(()=>{}),Ga.set(e,t),e}function qv(t){if(jo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jo.set(t,e)}let Uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Td.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yv(t){Uo=t(Uo)}function Gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(uo(this),e,...n);return Td.set(i,e.sort?e.sort():[e]),Kt(i)}:zv().includes(t)?function(...e){return t.apply(uo(this),e),Kt(Id.get(this))}:function(...e){return Kt(t.apply(uo(this),e))}}function Kv(t){return typeof t=="function"?Gv(t):(t instanceof IDBTransaction&&qv(t),Uv(t,Wv())?new Proxy(t,Uo):t)}function Kt(t){if(t instanceof IDBRequest)return Vv(t);if(co.has(t))return co.get(t);const e=Kv(t);return e!==t&&(co.set(t,e),Ga.set(e,t)),e}const uo=t=>Ga.get(t);function Sd(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Kt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Qv=["get","getKey","getAll","getAllKeys","count"],Xv=["put","add","delete","clear"],fo=new Map;function Fc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Xv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Qv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return fo.set(e,s),s}Yv(t=>({...t,get:(e,n,i)=>Fc(e,n)||t.get(e,n,i),has:(e,n)=>!!Fc(e,n)||t.has(e,n)}));/**
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
 */class Jv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Zv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",$c="0.8.0";/**
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
 */const Rn=new Ya("@firebase/app"),ey="@firebase/app-compat",ty="@firebase/analytics-compat",ny="@firebase/analytics",iy="@firebase/app-check-compat",ry="@firebase/app-check",sy="@firebase/auth",oy="@firebase/auth-compat",ay="@firebase/database",ly="@firebase/database-compat",cy="@firebase/functions",uy="@firebase/functions-compat",fy="@firebase/installations",dy="@firebase/installations-compat",hy="@firebase/messaging",py="@firebase/messaging-compat",my="@firebase/performance",gy="@firebase/performance-compat",_y="@firebase/remote-config",vy="@firebase/remote-config-compat",yy="@firebase/storage",by="@firebase/storage-compat",wy="@firebase/firestore",Ey="@firebase/firestore-compat",Cy="firebase",xy="9.11.0";/**
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
 */const zo="[DEFAULT]",Iy={[Wo]:"fire-core",[ey]:"fire-core-compat",[ny]:"fire-analytics",[ty]:"fire-analytics-compat",[ry]:"fire-app-check",[iy]:"fire-app-check-compat",[sy]:"fire-auth",[oy]:"fire-auth-compat",[ay]:"fire-rtdb",[ly]:"fire-rtdb-compat",[cy]:"fire-fn",[uy]:"fire-fn-compat",[fy]:"fire-iid",[dy]:"fire-iid-compat",[hy]:"fire-fcm",[py]:"fire-fcm-compat",[my]:"fire-perf",[gy]:"fire-perf-compat",[_y]:"fire-rc",[vy]:"fire-rc-compat",[yy]:"fire-gcs",[by]:"fire-gcs-compat",[wy]:"fire-fst",[Ey]:"fire-fst-compat","fire-js":"fire-js",[Cy]:"fire-js-all"};/**
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
 */const Jr=new Map,Vo=new Map;function Ty(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(Vo.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,t);for(const n of Jr.values())Ty(n,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Ps("app","Firebase",Sy);/**
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
 */class Ay{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const ky=xy;function Ad(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zo,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});if(n||(n=bv()),!n)throw Qt.create("no-options");const s=Jr.get(r);if(s){if(Xr(n,s.options)&&Xr(i,s.config))return s;throw Qt.create("duplicate-app",{appName:r})}const o=new Fv(r);for(const l of Vo.values())o.addComponent(l);const a=new Ay(n,i,o);return Jr.set(r,a),a}function kd(t=zo){const e=Jr.get(t);if(!e&&t===zo)return Ad();if(!e)throw Qt.create("no-app",{appName:t});return e}function Ct(t,e,n){var i;let r=(i=Iy[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}nn(new Pt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ny="firebase-heartbeat-database",Oy=1,Gi="firebase-heartbeat-store";let ho=null;function Nd(){return ho||(ho=Sd(Ny,Oy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),ho}async function Ry(t){var e;try{return(await Nd()).transaction(Gi).objectStore(Gi).get(Od(t))}catch(n){if(n instanceof jn)Rn.warn(n.message);else{const i=Qt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Rn.warn(i.message)}}}async function Bc(t,e){var n;try{const r=(await Nd()).transaction(Gi,"readwrite");return await r.objectStore(Gi).put(e,Od(t)),r.done}catch(i){if(i instanceof jn)Rn.warn(i.message);else{const r=Qt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Rn.warn(r.message)}}}function Od(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Py=1024,Dy=30*24*60*60*1e3;class My{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fy(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hc(),{heartbeatsToSend:n,unsentEntries:i}=Ly(this._heartbeatsCache.heartbeats),r=Kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hc(){return new Date().toISOString().substring(0,10)}function Ly(t,e=Py){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),jc(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wd()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ry(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function jc(t){return Kr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $y(t){nn(new Pt("platform-logger",e=>new Jv(e),"PRIVATE")),nn(new Pt("heartbeat",e=>new My(e),"PRIVATE")),Ct(Wo,$c,t),Ct(Wo,$c,"esm2017"),Ct("fire-js","")}$y("");const Uc="@firebase/database",Wc="0.13.7";/**
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
 */let Rd="";function By(t){Rd=t}/**
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
 */class Hy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hy(e)}}catch{}return new jy},En=Pd("localStorage"),qo=Pd("sessionStorage");/**
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
 */const ei=new Ya("@firebase/database"),Uy=function(){let t=1;return function(){return t++}}(),Dd=function(t){const e=kv(t),n=new Av;n.update(e);const i=n.digest();return Va.encodeByteArray(i)},cr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=cr.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let kn=null,zc=!0;const Wy=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ei.logLevel=oe.VERBOSE,kn=ei.log.bind(ei),e&&qo.set("logging_enabled",!0)):typeof t=="function"?kn=t:(kn=null,qo.remove("logging_enabled"))},Le=function(...t){if(zc===!0&&(zc=!1,kn===null&&qo.get("logging_enabled")===!0&&Wy(!0)),kn){const e=cr.apply(null,t);kn(e)}},ur=function(t){return function(...e){Le(t,...e)}},Yo=function(...t){const e="FIREBASE INTERNAL ERROR: "+cr(...t);ei.error(e)},Dt=function(...t){const e=`FIREBASE FATAL ERROR: ${cr(...t)}`;throw ei.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+cr(...t);ei.warn(e)},zy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Md=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ai="[MIN_NAME]",Pn="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===ai||e===Pn)return-1;if(e===ai||t===Pn)return 1;{const n=Vc(t),i=Vc(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},qy=function(t,e){return t===e?0:t<e?-1:1},Ei=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},Ka=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=we(e[i]),n+=":",n+=Ka(t[e[i]]);return n+="}",n},Ld=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fd=function(t){x(!Md(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Yy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ky(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Qy=new RegExp("^-?(0*)\\d{1,10}$"),Xy=-2147483648,Jy=2147483647,Vc=function(t){if(Qy.test(t)){const e=Number(t);if(e>=Xy&&e<=Jy)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},Zy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ni=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tb{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class ti{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ti.OWNER="owner";/**
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
 */const Qa="5",$d="v",Bd="s",Hd="r",jd="f",Ud=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wd="ls",zd="p",Go="ac",Vd="websocket",qd="long_polling";/**
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
 */class Yd{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gd(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let i;if(e===Vd)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qd)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nb(t)&&(n.ns=t.namespace);const r=[];return qe(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class ib{constructor(){this.counters_={}}incrementCounter(e,n=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cv(this.counters_)}}/**
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
 */const po={},mo={};function Xa(t){const e=t.toString();return po[e]||(po[e]=new ib),po[e]}function rb(t,e){const n=t.toString();return mo[n]||(mo[n]=e()),mo[n]}/**
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
 */class sb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&gi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qc="start",ob="close",ab="pLPCommand",lb="pRTLPCB",Kd="id",Qd="pw",Xd="ser",cb="cb",ub="seg",fb="ts",db="d",hb="dframe",Jd=1870,Zd=30,pb=Jd-Zd,mb=25e3,gb=3e4;class Yn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ur(e),this.stats_=Xa(n),this.urlFn=l=>(this.appCheckToken&&(l[Go]=this.appCheckToken),Gd(n,qd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gb)),Vy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ja((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qc)this.id=a,this.password=l;else if(o===ob)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[qc]="t",i[Xd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[cb]=this.scriptTagHolder.uniqueCallbackIdentifier),i[$d]=Qa,this.transportSessionId&&(i[Bd]=this.transportSessionId),this.lastSessionId&&(i[Wd]=this.lastSessionId),this.applicationId&&(i[zd]=this.applicationId),this.appCheckToken&&(i[Go]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ud.test(location.hostname)&&(i[Hd]=jd);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yn.forceAllow_=!0}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){return Yn.forceAllow_?!0:!Yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Yy()&&!Gy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_d(n),r=Ld(i,pb);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[hb]="t",i[Kd]=e,i[Qd]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ja{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Uy(),window[ab+this.uniqueCallbackIdentifier]=e,window[lb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ja.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kd]=this.myID,e[Qd]=this.myPW,e[Xd]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zd+i.length<=Jd;){const o=this.pendingSegs.shift();i=i+"&"+ub+r+"="+o.seg+"&"+fb+r+"="+o.ts+"&"+db+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(mb)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const _b=16384,vb=45e3;let Zr=null;typeof MozWebSocket<"u"?Zr=MozWebSocket:typeof WebSocket<"u"&&(Zr=WebSocket);class at{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ur(this.connId),this.stats_=Xa(n),this.connURL=at.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[$d]=Qa,typeof location<"u"&&location.hostname&&Ud.test(location.hostname)&&(o[Hd]=jd),n&&(o[Bd]=n),i&&(o[Wd]=i),r&&(o[Go]=r),s&&(o[zd]=s),Gd(e,Vd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let i;bd(),this.mySock=new Zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zr!==null&&!at.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Yi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ld(n,_b);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yn,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let i=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const r=this.transports_=[];for(const s of Ki.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
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
 */const yb=6e4,bb=5e3,wb=10*1024,Eb=100*1024,go="t",Yc="d",Cb="s",Gc="r",xb="e",Kc="o",Qc="a",Xc="n",Jc="p",Ib="h";class Tb{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ur("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(go in e){const n=e[go];n===Qc?this.upgradeIfSecondaryHealthy_():n===Gc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ei("t",e),i=Ei("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ei("t",e),i=Ei("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ei(go,e);if(Yc in e){const i=e[Yc];if(n===Ib)this.onHandshake_(i);else if(n===Xc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Cb?this.onConnectionShutdown_(i):n===Gc?this.onReset_(i):n===xb?Yo("Server Error: "+i):n===Kc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qa!==i&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eh{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class th{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class es extends th{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new es}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zc=32,eu=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ie("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function nh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ih(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function Ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ie(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=G(t),i=G(e);if(n===null)return e;if(n===i)return He(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sh(t,e){if(rn(t)!==rn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ut(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(rn(t)>rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ab{constructor(e,n){this.errorPrefix_=n,this.parts_=ih(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ds(this.parts_[i]);oh(this)}}function kb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ds(e),oh(t)}function Nb(t){const e=t.parts_.pop();t.byteLength_-=Ds(e),t.parts_.length>0&&(t.byteLength_-=1)}function oh(t){if(t.byteLength_>eu)throw new Error(t.errorPrefix_+"has a key path longer than "+eu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zc+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Za extends th{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Za}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ci=1e3,Ob=60*5*1e3,tu=30*1e3,Rb=1.3,Pb=3e4,Db="server_kill",nu=3;class Ot extends eh{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ot.nextPersistentConnectionId_++,this.log_=ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ci,this.maxReconnectDelay_=Ob,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!bd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Za.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&es.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(we(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Rs,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ot.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bt(e,"w")){const i=oi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yo("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pb&&(this.reconnectDelay_=Ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Tb(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{Ve(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Db)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ve(f),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rc(this.interruptReasons_)&&(this.reconnectDelay_=Ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ka(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ie(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nu&&(this.reconnectDelay_=tu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rd.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:hv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=es.getInstance().currentlyOnline();return Rc(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class Ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new z(ai,e),r=new z(ai,n);return this.compare(i,r)!==0}minPost(){return z.MIN}}/**
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
 */let Tr;class ah extends Ms{static get __EMPTY_NODE(){return Tr}static set __EMPTY_NODE(e){Tr=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Pn,Tr)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Tr)}toString(){return".key"}}const ni=new ah;/**
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
 */class Sr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Se.RED,this.left=r!=null?r:ze.EMPTY_NODE,this.right=s!=null?s:ze.EMPTY_NODE}copy(e,n,i,r,s){return new Se(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class Mb{copy(e,n,i,r,s){return this}insert(e,n,i){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sr(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new Mb;/**
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
 */function Lb(t,e){return mi(t.name,e.name)}function el(t,e){return mi(t,e)}/**
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
 */let Ko;function Fb(t){Ko=t}const lh=function(t){return typeof t=="number"?"number:"+Fd(t):"string:"+t},ch=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else x(t===Ko||t.isEmpty(),"priority of unexpected type.");x(t===Ko||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let iu;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ch(this.priorityNode_)}static set __childrenNodeConstructor(e){iu=e}static get __childrenNodeConstructor(){return iu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:G(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=G(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fd(this.value_):e+=this.value_,this.lazyHash_=Dd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),s=Te.VALUE_TYPE_ORDER.indexOf(i);return x(r>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let uh,fh;function $b(t){uh=t}function Bb(t){fh=t}class Hb extends Ms{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Pn,new Te("[PRIORITY-POST]",fh))}makePost(e,n){const i=uh(e);return new z(n,new Te("[PRIORITY-POST]",i))}toString(){return".priority"}}const ve=new Hb;/**
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
 */const jb=Math.log(2);class Ub{constructor(e){const n=s=>parseInt(Math.log(s)/jb,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ts=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Se(d,f.node,Se.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=r(l,m),E=r(m+1,c);return f=t[m],d=n?n(f):f,new Se(d,f.node,Se.BLACK,_,E)}},s=function(l){let c=null,u=null,f=t.length;const d=function(_,E){const N=f-_,b=f;f-=_;const S=r(N+1,b),P=t[N],B=n?n(P):P;m(new Se(B,P.node,E,null,S))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const E=l.nextBitIsOne(),N=Math.pow(2,l.count-(_+1));E?d(N,Se.BLACK):(d(N,Se.BLACK),d(N,Se.RED))}return u},o=new Ub(t.length),a=s(o);return new ze(i||e,a)};/**
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
 */let _o;const Vn={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Vn&&ve,"ChildrenNode.ts has not been loaded"),_o=_o||new kt({".priority":Vn},{".priority":ve}),_o}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=ts(i,e.getCompare()):a=Vn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new kt(u,c)}addToIndexes(e,n){const i=Qr(this.indexes_,(r,s)=>{const o=oi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),r===Vn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ts(a,o.getCompare())}else return Vn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new kt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Qr(this.indexes_,r=>{if(r===Vn)return r;{const s=n.get(e.name);return s?r.remove(new z(e.name,s)):r}});return new kt(i,this.indexSet_)}}/**
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
 */let xi;class ${constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ch(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xi||(xi=new $(new ze(el),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xi}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xi:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new z(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?xi:this.priorityNode_;return new $(r,o,s)}}updateChild(e,n){const i=G(e);if(i===null)return n;{x(G(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(le(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),i++,s&&$.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lh(this.getPriority().val())+":"),this.forEachChild(ve,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Dd(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fr?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ve),r=n.getIterator(ve);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wb extends ${constructor(){super(new ze(el),$.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const fr=new Wb;Object.defineProperties(z,{MIN:{value:new z(ai,$.EMPTY_NODE)},MAX:{value:new z(Pn,fr)}});ah.__EMPTY_NODE=$.EMPTY_NODE;Te.__childrenNodeConstructor=$;Fb(fr);Bb(fr);/**
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
 */const zb=!0;function Ae(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ae(e))}if(!(t instanceof Array)&&zb){const n=[];let i=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=ts(n,Lb,o=>o.name,el);if(i){const o=ts(n,ve.getCompare());return new $(s,Ae(e),new kt({".priority":o},{".priority":ve}))}else return new $(s,Ae(e),kt.Default)}else{let n=$.EMPTY_NODE;return qe(t,(i,r)=>{if(Bt(t,i)&&i.substring(0,1)!=="."){const s=Ae(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ae(e))}}$b(Ae);/**
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
 */class Vb extends Ms{constructor(e){super(),this.indexPath_=e,x(!V(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?mi(e.name,n.name):s}makePost(e,n){const i=Ae(e),r=$.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(n,r)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,fr);return new z(Pn,e)}toString(){return ih(this.indexPath_,0).join("/")}}/**
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
 */class qb extends Ms{compare(e,n){const i=e.node.compareTo(n.node);return i===0?mi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const i=Ae(e);return new z(n,i)}toString(){return".value"}}const Yb=new qb;/**
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
 */function dh(t){return{type:"value",snapshotNode:t}}function li(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tl{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qi(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(li(n,i)):o.trackChildChange(Xi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ve,(r,s)=>{n.hasChild(r)||i.trackChildChange(Qi(r,s))}),n.isLeafNode()||n.forEachChild(ve,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Xi(r,s,o))}else i.trackChildChange(li(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ji{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ji.getStartPost_(e),this.endPost_=Ji.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new z(n,i))||(i=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=$.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new z(o,a))||(r=r.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Kb{constructor(e){this.rangedFilter_=new Ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new z(n,i))||(i=$.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority($.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,m)=>f(m,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:r=r.updateImmediateChild(f.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new z(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(u&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Xi(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(Qi(n,f));const E=a.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(li(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Qi(c.name,c.node)),s.trackChildChange(li(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class nl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new nl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qb(t){return t.loadsAllData()?new tl(t.getIndex()):t.hasLimit()?new Kb(t):new Ji(t)}function ru(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===Yb?n="$value":t.index_===ni?n="$key":(x(t.index_ instanceof Vb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function su(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class ns extends eh{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=ur("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ns.getListenId_(e,i),a={};this.listens_[o]=a;const l=ru(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),oi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=ns.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ru(e._queryParams),i=e._path.toString(),r=new Rs;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Sv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yi(a.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Xb{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function is(){return{value:null,children:new Map}}function hh(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=G(e);t.children.has(i)||t.children.set(i,is());const r=t.children.get(i);e=le(e),hh(r,e,n)}}function Qo(t,e,n){t.value!==null?n(e,t.value):Jb(t,(i,r)=>{const s=new ie(e.toString()+"/"+i);Qo(r,s,n)})}function Jb(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Zb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const ou=10*1e3,e0=30*1e3,t0=5*60*1e3;class n0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zb(e);const i=ou+(e0-ou)*Math.random();Ni(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;qe(e,(r,s)=>{s>0&&Bt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*t0))}}/**
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
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function ph(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function il(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class rs{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ft.ACK_USER_WRITE,this.source=ph()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new rs(J(),n,this.revert)}}else return x(G(this.path)===e,"operationForChild called for unrelated child."),new rs(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zi{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Zi(this.source,J()):new Zi(this.source,le(this.path))}}/**
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
 */class Dn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ft.OVERWRITE}operationForChild(e){return V(this.path)?new Dn(this.source,J(),this.snap.getImmediateChild(e)):new Dn(this.source,le(this.path),this.snap)}}/**
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
 */class er{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ft.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Dn(this.source,J(),n.value):new er(this.source,J(),n)}else return x(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class sn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class i0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function r0(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Gb(o.childName,o.snapshotNode))}),Ii(t,r,"child_removed",e,i,n),Ii(t,r,"child_added",e,i,n),Ii(t,r,"child_moved",s,i,n),Ii(t,r,"child_changed",e,i,n),Ii(t,r,"value",e,i,n),r}function Ii(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>o0(t,a,l)),o.forEach(a=>{const l=s0(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function s0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function o0(t,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),r=new z(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function Ls(t,e){return{eventCache:t,serverCache:e}}function Oi(t,e,n,i){return Ls(new sn(e,n,i),t.serverCache)}function mh(t,e,n,i){return Ls(t.eventCache,new sn(e,n,i))}function ss(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Mn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let vo;const a0=()=>(vo||(vo=new ze(qy)),vo);class ce{constructor(e,n=a0()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return qe(e,(i,r)=>{n=n.set(new ie(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(V(e))return null;{const i=G(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:Ee(new ie(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=G(e),i=this.children.get(n);return i!==null?i.subtree(le(e)):new ce(null)}}set(e,n){if(V(e))return new ce(n,this.children);{const i=G(e),s=(this.children.get(i)||new ce(null)).set(le(e),n),o=this.children.insert(i,s);return new ce(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=G(e),i=this.children.get(n);if(i){const r=i.remove(le(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(V(e))return this.value;{const n=G(e),i=this.children.get(n);return i?i.get(le(e)):null}}setTree(e,n){if(V(e))return n;{const i=G(e),s=(this.children.get(i)||new ce(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ce(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ee(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(V(e))return null;{const s=G(e),o=this.children.get(s);return o?o.findOnPath_(le(e),Ee(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,i){if(V(e))return this;{this.value&&i(n,this.value);const r=G(e),s=this.children.get(r);return s?s.foreachOnPath_(le(e),Ee(n,r),i):new ce(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new ce(null))}}function Ri(t,e,n){if(V(e))return new pt(new ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=He(r,e);return s=s.updateChild(o,n),new pt(t.writeTree_.set(r,s))}else{const r=new ce(n),s=t.writeTree_.setTree(e,r);return new pt(s)}}}function au(t,e,n){let i=t;return qe(n,(r,s)=>{i=Ri(i,Ee(e,r),s)}),i}function lu(t,e){if(V(e))return pt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new pt(n)}}function Xo(t,e){return Un(t,e)!=null}function Un(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function cu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(i,r)=>{e.push(new z(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new z(i,r.value))}),e}function Xt(t,e){if(V(e))return t;{const n=Un(t,e);return n!=null?new pt(new ce(n)):new pt(t.writeTree_.subtree(e))}}function Jo(t){return t.writeTree_.isEmpty()}function ci(t,e){return gh(J(),t.writeTree_,e)}function gh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=gh(Ee(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ee(t,".priority"),i)),n}}/**
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
 */function Fs(t,e){return bh(e,t)}function l0(t,e,n,i,r){x(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Ri(t.visibleWrites,e,n)),t.lastWriteId=i}function c0(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function u0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&f0(a,i.path)?r=!1:ut(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return d0(t),!0;if(i.snap)t.visibleWrites=lu(t.visibleWrites,i.path);else{const a=i.children;qe(a,l=>{t.visibleWrites=lu(t.visibleWrites,Ee(i.path,l))})}return!0}else return!1}function f0(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(Ee(t.path,n),e))return!0;return!1}function d0(t){t.visibleWrites=_h(t.allWrites,h0,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function h0(t){return t.visible}function _h(t,e,n){let i=pt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=He(n,o),i=Ri(i,a,s.snap)):ut(o,n)&&(a=He(o,n),i=Ri(i,J(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=He(n,o),i=au(i,a,s.children);else if(ut(o,n))if(a=He(o,n),V(a))i=au(i,J(),s.children);else{const l=oi(s.children,G(a));if(l){const c=l.getChild(le(a));i=Ri(i,J(),c)}}}else throw pi("WriteRecord should have .snap or .children")}}return i}function vh(t,e,n,i,r){if(!i&&!r){const s=Un(t.visibleWrites,e);if(s!=null)return s;{const o=Xt(t.visibleWrites,e);if(Jo(o))return n;if(n==null&&!Xo(o,J()))return null;{const a=n||$.EMPTY_NODE;return ci(o,a)}}}else{const s=Xt(t.visibleWrites,e);if(!r&&Jo(s))return n;if(!r&&n==null&&!Xo(s,J()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=_h(t.allWrites,o,e),l=n||$.EMPTY_NODE;return ci(a,l)}}}function p0(t,e,n){let i=$.EMPTY_NODE;const r=Un(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ve,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Xt(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=ci(Xt(s,new ie(o)),a);i=i.updateImmediateChild(o,l)}),cu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Xt(t.visibleWrites,e);return cu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function m0(t,e,n,i,r){x(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,n);if(Xo(t.visibleWrites,s))return null;{const o=Xt(t.visibleWrites,s);return Jo(o)?r.getChild(n):ci(o,r.getChild(n))}}function g0(t,e,n,i){const r=Ee(e,n),s=Un(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Xt(t.visibleWrites,r);return ci(o,i.getNode().getImmediateChild(n))}else return null}function _0(t,e){return Un(t.visibleWrites,e)}function v0(t,e,n,i,r,s,o){let a;const l=Xt(t.visibleWrites,e),c=Un(l,J());if(c!=null)a=c;else if(n!=null)a=ci(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=d.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=d.getNext();return u}else return[]}function y0(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function os(t,e,n,i){return vh(t.writeTree,t.treePath,e,n,i)}function sl(t,e){return p0(t.writeTree,t.treePath,e)}function uu(t,e,n,i){return m0(t.writeTree,t.treePath,e,n,i)}function as(t,e){return _0(t.writeTree,Ee(t.treePath,e))}function b0(t,e,n,i,r,s){return v0(t.writeTree,t.treePath,e,n,i,r,s)}function ol(t,e,n){return g0(t.writeTree,t.treePath,e,n)}function yh(t,e){return bh(Ee(t.treePath,e),t.writeTree)}function bh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class w0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Xi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Qi(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,li(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Xi(i,e.snapshotNode,r.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class E0{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const wh=new E0;class al{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ol(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mn(this.viewCache_),s=b0(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function C0(t){return{filter:t}}function x0(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function I0(t,e,n,i,r){const s=new w0;let o,a;if(n.type===ft.OVERWRITE){const c=n;c.source.fromUser?o=Zo(t,e,c.path,c.snap,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=ls(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===ft.MERGE){const c=n;c.source.fromUser?o=S0(t,e,c.path,c.children,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ea(t,e,c.path,c.children,i,r,a,s))}else if(n.type===ft.ACK_USER_WRITE){const c=n;c.revert?o=N0(t,e,c.path,i,r,s):o=A0(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===ft.LISTEN_COMPLETE)o=k0(t,e,n.path,i,s);else throw pi("Unknown operation type: "+n.type);const l=s.getChanges();return T0(e,o,l),{viewCache:o,changes:l}}function T0(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ss(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(dh(ss(e)))}}function Eh(t,e,n,i,r,s){const o=e.eventCache;if(as(i,n)!=null)return e;{let a,l;if(V(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Mn(e),u=c instanceof $?c:$.EMPTY_NODE,f=sl(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=os(i,Mn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=G(n);if(c===".priority"){x(rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=uu(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=le(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=uu(i,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=ol(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Oi(e,a,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function ls(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=G(n);if(!l.isCompleteForPath(n)&&rn(n)>1)return e;const _=le(n),N=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),m,N,_,wh,null)}const f=mh(e,c,l.isFullyInitialized()||V(n),u.filtersNodes()),d=new al(r,f,s);return Eh(t,f,n,r,d,a)}function Zo(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new al(r,e,s);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Oi(e,c,!0,t.filter.filtersNodes());else{const f=G(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Oi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=le(n),m=a.getNode().getImmediateChild(f);let _;if(V(d))_=i;else{const E=u.getCompleteChild(f);E!=null?nh(d)===".priority"&&E.getChild(rh(d)).isEmpty()?_=E:_=E.updateChild(d,i):_=$.EMPTY_NODE}if(m.equals(_))l=e;else{const E=t.filter.updateChild(a.getNode(),f,_,d,u,o);l=Oi(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fu(t,e){return t.eventCache.isCompleteForChild(e)}function S0(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Ee(n,l);fu(e,G(u))&&(a=Zo(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Ee(n,l);fu(e,G(u))||(a=Zo(t,a,u,c,r,s,o))}),a}function du(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ea(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;V(n)?c=i:c=new ce(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=du(t,m,d);l=ls(t,l,new ie(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),E=du(t,_,d);l=ls(t,l,new ie(f),E,r,s,o,a)}}),l}function A0(t,e,n,i,r,s,o){if(as(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(V(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ls(t,e,n,l.getNode().getChild(n),r,s,a,o);if(V(n)){let c=new ce(null);return l.getNode().forEachChild(ni,(u,f)=>{c=c.set(new ie(u),f)}),ea(t,e,n,c,r,s,a,o)}else return e}else{let c=new ce(null);return i.foreach((u,f)=>{const d=Ee(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ea(t,e,n,c,r,s,a,o)}}function k0(t,e,n,i,r){const s=e.serverCache,o=mh(e,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return Eh(t,o,n,i,wh,r)}function N0(t,e,n,i,r,s){let o;if(as(i,n)!=null)return e;{const a=new al(i,e,r),l=e.eventCache.getNode();let c;if(V(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=os(i,Mn(e));else{const f=e.serverCache.getNode();x(f instanceof $,"serverChildren would be complete if leaf node"),u=sl(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=G(n);let f=ol(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,le(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,$.EMPTY_NODE,le(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=os(i,Mn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||as(i,J())!=null,Oi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class O0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new tl(i.getIndex()),s=Qb(i);this.processor_=C0(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new sn(l,o.isFullyInitialized(),r.filtersNodes()),f=new sn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ls(f,u),this.eventGenerator_=new i0(this.query_)}get query(){return this.query_}}function R0(t){return t.viewCache_.serverCache.getNode()}function P0(t){return ss(t.viewCache_)}function D0(t,e){const n=Mn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function hu(t){return t.eventRegistrations_.length===0}function M0(t,e){t.eventRegistrations_.push(e)}function pu(t,e,n){const i=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function mu(t,e,n,i){e.type===ft.MERGE&&e.source.queryId!==null&&(x(Mn(t.viewCache_),"We should always have a full cache before handling merges"),x(ss(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=I0(t.processor_,r,e,n,i);return x0(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ch(t,s.changes,s.viewCache.eventCache.getNode(),null)}function L0(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{i.push(li(s,o))}),n.isFullyInitialized()&&i.push(dh(n.getNode())),Ch(t,i,n.getNode(),e)}function Ch(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return r0(t.eventGenerator_,e,n,r)}/**
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
 */let cs;class xh{constructor(){this.views=new Map}}function F0(t){x(!cs,"__referenceConstructor has already been defined"),cs=t}function $0(){return x(cs,"Reference.ts has not been loaded"),cs}function B0(t){return t.views.size===0}function ll(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return x(s!=null,"SyncTree gave us an op for an invalid query."),mu(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(mu(o,e,n,i));return s}}function Ih(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=os(n,r?i:null),l=!1;a?l=!0:i instanceof $?(a=sl(n,i),l=!1):(a=$.EMPTY_NODE,l=!1);const c=Ls(new sn(a,l,!1),new sn(i,r,!1));return new O0(e,c)}return o}function H0(t,e,n,i,r,s){const o=Ih(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),M0(o,n),L0(o,n)}function j0(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=on(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(pu(c,n,i)),hu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(pu(l,n,i)),hu(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!on(t)&&s.push(new($0())(e._repo,e._path)),{removed:s,events:o}}function Th(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jt(t,e){let n=null;for(const i of t.views.values())n=n||D0(i,e);return n}function Sh(t,e){if(e._queryParams.loadsAllData())return $s(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Ah(t,e){return Sh(t,e)!=null}function on(t){return $s(t)!=null}function $s(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let us;function U0(t){x(!us,"__referenceConstructor has already been defined"),us=t}function W0(){return x(us,"Reference.ts has not been loaded"),us}let z0=1;class gu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=y0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kh(t,e,n,i,r){return l0(t.pendingWriteTree_,e,n,i,r),r?hr(t,new Dn(ph(),e,n)):[]}function Cn(t,e,n=!1){const i=c0(t.pendingWriteTree_,e);if(u0(t.pendingWriteTree_,e)){let s=new ce(null);return i.snap!=null?s=s.set(J(),!0):qe(i.children,o=>{s=s.set(new ie(o),!0)}),hr(t,new rs(i.path,s,n))}else return[]}function dr(t,e,n){return hr(t,new Dn(il(),e,n))}function V0(t,e,n){const i=ce.fromObject(n);return hr(t,new er(il(),e,i))}function q0(t,e){return hr(t,new Zi(il(),e))}function Y0(t,e,n){const i=ul(t,n);if(i){const r=fl(i),s=r.path,o=r.queryId,a=He(s,e),l=new Zi(rl(o),a);return dl(t,s,l)}else return[]}function Nh(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Ah(o,e))){const l=j0(o,e,n,i);B0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,m)=>on(m));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=X0(d);for(let _=0;_<m.length;++_){const E=m[_],N=E.query,b=Dh(t,E);t.listenProvider_.startListening(Pi(N),tr(t,N),b.hashFn,b.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Pi(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(Bs(d));t.listenProvider_.stopListening(Pi(d),m)}))}J0(t,c)}return a}function Oh(t,e,n,i){const r=ul(t,i);if(r!=null){const s=fl(r),o=s.path,a=s.queryId,l=He(o,e),c=new Dn(rl(a),l,n);return dl(t,o,c)}else return[]}function G0(t,e,n,i){const r=ul(t,i);if(r){const s=fl(r),o=s.path,a=s.queryId,l=He(o,e),c=ce.fromObject(n),u=new er(rl(a),l,c);return dl(t,o,u)}else return[]}function K0(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,m)=>{const _=He(d,r);s=s||Jt(m,_),o=o||on(m)});let a=t.syncPointTree_.get(r);a?(o=o||on(a),s=s||Jt(a,J())):(a=new xh,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((m,_)=>{const E=Jt(_,J());E&&(s=s.updateImmediateChild(m,E))}));const c=Ah(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Bs(e);x(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=Z0();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=Fs(t.pendingWriteTree_,r);let f=H0(a,e,n,u,s,l);if(!c&&!o&&!i){const d=Sh(a,e);f=f.concat(e1(t,e,d))}return f}function cl(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=Jt(a,l);if(c)return c});return vh(r,e,s,n,!0)}function Q0(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=He(c,n);i=i||Jt(u,f)});let r=t.syncPointTree_.get(n);r?i=i||Jt(r,J()):(r=new xh,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new sn(i,!0,!1):null,a=Fs(t.pendingWriteTree_,e._path),l=Ih(r,e,a,s?o.getNode():$.EMPTY_NODE,s);return P0(l)}function hr(t,e){return Rh(e,t.syncPointTree_,null,Fs(t.pendingWriteTree_,J()))}function Rh(t,e,n,i){if(V(t.path))return Ph(t,e,n,i);{const r=e.get(J());n==null&&r!=null&&(n=Jt(r,J()));let s=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yh(i,o);s=s.concat(Rh(a,l,c,u))}return r&&(s=s.concat(ll(r,t,i,n))),s}}function Ph(t,e,n,i){const r=e.get(J());n==null&&r!=null&&(n=Jt(r,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yh(i,o),u=t.operationForChild(o);u&&(s=s.concat(Ph(u,a,l,c)))}),r&&(s=s.concat(ll(r,t,i,n))),s}function Dh(t,e){const n=e.query,i=tr(t,n);return{hashFn:()=>(R0(e)||$.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Y0(t,n._path,i):q0(t,n._path);{const s=Ky(r,n);return Nh(t,n,null,s)}}}}function tr(t,e){const n=Bs(e);return t.queryToTagMap.get(n)}function Bs(t){return t._path.toString()+"$"+t._queryIdentifier}function ul(t,e){return t.tagToQueryMap.get(e)}function fl(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function dl(t,e,n){const i=t.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const r=Fs(t.pendingWriteTree_,e);return ll(i,n,r,null)}function X0(t){return t.fold((e,n,i)=>{if(n&&on(n))return[$s(n)];{let r=[];return n&&(r=Th(n)),qe(i,(s,o)=>{r=r.concat(o)}),r}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(W0())(t._repo,t._path):t}function J0(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Bs(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Z0(){return z0++}function e1(t,e,n){const i=e._path,r=tr(t,e),s=Dh(t,n),o=t.listenProvider_.startListening(Pi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)x(!on(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!V(c)&&u&&on(u))return[$s(u).query];{let d=[];return u&&(d=d.concat(Th(u).map(m=>m.query))),qe(f,(m,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Pi(u),tr(t,u))}}return o}/**
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
 */class hl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hl(n)}node(){return this.node_}}class pl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new pl(this.syncTree_,n)}node(){return cl(this.syncTree_,this.path_)}}const t1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_u=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return n1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return i1(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},n1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},i1=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const r=e.node();if(x(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},r1=function(t,e,n,i){return ml(e,new pl(n,t),i)},Mh=function(t,e,n){return ml(t,new hl(e),n)};function ml(t,e,n){const i=t.getPriority().val(),r=_u(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=_u(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,Ae(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Te(r))),o.forEachChild(ve,(a,l)=>{const c=ml(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class gl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _l(t,e){let n=e instanceof ie?e:new ie(e),i=t,r=G(n);for(;r!==null;){const s=oi(i.node.children,r)||{children:{},childCount:0};i=new gl(r,i,s),n=le(n),r=G(n)}return i}function _i(t){return t.node.value}function Lh(t,e){t.node.value=e,ta(t)}function Fh(t){return t.node.childCount>0}function s1(t){return _i(t)===void 0&&!Fh(t)}function Hs(t,e){qe(t.node.children,(n,i)=>{e(new gl(n,t,i))})}function $h(t,e,n,i){n&&!i&&e(t),Hs(t,r=>{$h(r,e,!0,i)}),n&&i&&e(t)}function o1(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function pr(t){return new ie(t.parent===null?t.name:pr(t.parent)+"/"+t.name)}function ta(t){t.parent!==null&&a1(t.parent,t.name,t)}function a1(t,e,n){const i=s1(n),r=Bt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,ta(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ta(t))}/**
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
 */const l1=/[\[\].#$\/\u0000-\u001F\u007F]/,c1=/[\[\].#$\u0000-\u001F\u007F]/,yo=10*1024*1024,Bh=function(t){return typeof t=="string"&&t.length!==0&&!l1.test(t)},Hh=function(t){return typeof t=="string"&&t.length!==0&&!c1.test(t)},u1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hh(t)},f1=function(t,e,n,i){i&&e===void 0||vl(qa(t,"value"),e,n)},vl=function(t,e,n){const i=n instanceof ie?new Ab(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(i));if(typeof e=="function")throw new Error(t+"contains a function "+vn(i)+" with contents = "+e.toString());if(Md(e))throw new Error(t+"contains "+e.toString()+" "+vn(i));if(typeof e=="string"&&e.length>yo/3&&Ds(e)>yo)throw new Error(t+"contains a string greater than "+yo+" utf8 bytes "+vn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(qe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Bh(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kb(i,o),vl(t,a,i),Nb(i)}),r&&s)throw new Error(t+' contains ".value" child '+vn(i)+" in addition to actual children.")}},jh=function(t,e,n,i){if(!(i&&n===void 0)&&!Hh(n))throw new Error(qa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},d1=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jh(t,e,n,i)},h1=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},p1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!u1(n))throw new Error(qa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class m1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uh(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!sh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function It(t,e,n){Uh(t,n),g1(t,i=>ut(i,e)||ut(e,i))}function g1(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(_1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();kn&&Le("event: "+n.toString()),gi(i)}}}/**
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
 */const v1="repo_interrupt",y1=25;class b1{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new m1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=is(),this.transactionQueueTree_=new gl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w1(t,e,n){if(t.stats_=Xa(t.repoInfo_),t.forceRestClient_||Zy())t.server_=new ns(t.repoInfo_,(i,r,s,o)=>{vu(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(i,r,s,o)=>{vu(t,i,r,s,o)},i=>{yu(t,i)},i=>{C1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=rb(t.repoInfo_,()=>new n0(t.stats_,t.server_)),t.infoData_=new Xb,t.infoSyncTree_=new gu({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=dr(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bl(t,"connected",!1),t.serverSyncTree_=new gu({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);It(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function E1(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yl(t){return t1({timestamp:E1(t)})}function vu(t,e,n,i,r){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Qr(n,c=>Ae(c));o=G0(t.serverSyncTree_,s,l,r)}else{const l=Ae(n);o=Oh(t.serverSyncTree_,s,l,r)}else if(i){const l=Qr(n,c=>Ae(c));o=V0(t.serverSyncTree_,s,l)}else{const l=Ae(n);o=dr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Us(t,s)),It(t.eventQueue_,a,o)}function yu(t,e){bl(t,"connected",e),e===!1&&T1(t)}function C1(t,e){qe(e,(n,i)=>{bl(t,n,i)})}function bl(t,e,n){const i=new ie("/.info/"+e),r=Ae(n);t.infoData_.updateSnapshot(i,r);const s=dr(t.infoSyncTree_,i,r);It(t.eventQueue_,i,s)}function Wh(t){return t.nextWriteId_++}function x1(t,e,n){const i=Q0(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=Ae(r).withIndex(e._queryParams.getIndex());K0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=dr(t.serverSyncTree_,e._path,s);else{const a=tr(t.serverSyncTree_,e);o=Oh(t.serverSyncTree_,e._path,s,a)}return It(t.eventQueue_,e._path,o),Nh(t.serverSyncTree_,e,n,null,!0),s},r=>(js(t,"get for query "+we(e)+" failed: "+r),Promise.reject(new Error(r))))}function I1(t,e,n,i,r){js(t,"set",{path:e.toString(),value:n,priority:i});const s=yl(t),o=Ae(n,i),a=cl(t.serverSyncTree_,e),l=Mh(o,a,s),c=Wh(t),u=kh(t.serverSyncTree_,e,l,c,!0);Uh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const _=d==="ok";_||Ve("set at "+e+" failed: "+d);const E=Cn(t.serverSyncTree_,c,!_);It(t.eventQueue_,e,E),A1(t,r,d,m)});const f=Gh(t,e);Us(t,f),It(t.eventQueue_,f,[])}function T1(t){js(t,"onDisconnectEvents");const e=yl(t),n=is();Qo(t.onDisconnect_,J(),(r,s)=>{const o=r1(r,s,t.serverSyncTree_,e);hh(n,r,o)});let i=[];Qo(n,J(),(r,s)=>{i=i.concat(dr(t.serverSyncTree_,r,s));const o=Gh(t,r);Us(t,o)}),t.onDisconnect_=is(),It(t.eventQueue_,J(),i)}function S1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(v1)}function js(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function A1(t,e,n,i){e&&gi(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function zh(t,e,n){return cl(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function wl(t,e=t.transactionQueueTree_){if(e||Ws(t,e),_i(e)){const n=qh(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&k1(t,pr(e),n)}else Fh(e)&&Hs(e,n=>{wl(t,n)})}function k1(t,e,n){const i=n.map(c=>c.currentWriteId),r=zh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=He(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{js(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Cn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ws(t,_l(t.transactionQueueTree_,e)),wl(t,t.transactionQueueTree_),It(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)gi(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ve("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Us(t,e)}},o)}function Us(t,e){const n=Vh(t,e),i=pr(n),r=qh(t,n);return N1(t,r,i),i}function N1(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let u=!1,f;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=y1)u=!0,f="maxretry",r=r.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=zh(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){vl("transaction failed: Data returned ",m,l.path);let _=Ae(m);typeof m=="object"&&m!=null&&Bt(m,".priority")||(_=_.updatePriority(d.getPriority()));const N=l.currentWriteId,b=yl(t),S=Mh(_,d,b);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=Wh(t),o.splice(o.indexOf(N),1),r=r.concat(kh(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(Cn(t.serverSyncTree_,N,!0))}else u=!0,f="nodata",r=r.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0))}It(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ws(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)gi(i[a]);wl(t,t.transactionQueueTree_)}function Vh(t,e){let n,i=t.transactionQueueTree_;for(n=G(e);n!==null&&_i(i)===void 0;)i=_l(i,n),e=le(e),n=G(e);return i}function qh(t,e){const n=[];return Yh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Yh(t,e,n){const i=_i(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Hs(e,r=>{Yh(t,r,n)})}function Ws(t,e){const n=_i(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Lh(e,n.length>0?n:void 0)}Hs(e,i=>{Ws(t,i)})}function Gh(t,e){const n=pr(Vh(t,e)),i=_l(t.transactionQueueTree_,e);return o1(i,r=>{bo(t,r)}),bo(t,i),$h(i,r=>{bo(t,r)}),n}function bo(t,e){const n=_i(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Lh(e,void 0):n.length=s+1,It(t.eventQueue_,pr(e),r);for(let o=0;o<i.length;o++)gi(i[o])}}/**
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
 */function O1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function R1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const bu=function(t,e){const n=P1(t),i=n.namespace;n.domain==="firebase.com"&&Dt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Dt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zy();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yd(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ie(n.pathString)}},P1=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=O1(t.substring(u,f)));const d=R1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class D1{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class M1{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class L1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class El{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return V(this._path)?null:nh(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=su(this._queryParams),n=Ka(e);return n==="{}"?"default":n}get _queryObject(){return su(this._queryParams)}isEqual(e){if(e=un(e),!(e instanceof El))return!1;const n=this._repo===e._repo,i=sh(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sb(this._path)}}class Ht extends El{constructor(e,n){super(e,n,new nl,!1)}get parent(){const e=rh(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),i=fs(this.ref,e);return new nr(this._node.getChild(n),i,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new nr(r,fs(this.ref,i),ve)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kh(t,e){return t=un(t),t._checkNotDeleted("ref"),e!==void 0?fs(t._root,e):t._root}function fs(t,e){return t=un(t),G(t._path)===null?d1("child","path",e,!1):jh("child","path",e,!1),new Ht(t._repo,Ee(t._path,e))}function F1(t,e){t=un(t),h1("set",t._path),f1("set",e,t._path,!1);const n=new Rs;return I1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $1(t){t=un(t);const e=new L1(()=>{}),n=new Cl(e);return x1(t._repo,t,n).then(i=>new nr(i,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class Cl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new D1("value",this,new nr(e.snapshotNode,new Ht(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M1(this,e,n):null}matches(e){return e instanceof Cl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}F0(Ht);U0(Ht);/**
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
 */const B1="FIREBASE_DATABASE_EMULATOR_HOST",na={};let H1=!1;function j1(t,e,n,i){t.repoInfo_=new Yd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function U1(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Dt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bu(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[B1]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=bu(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new ti(ti.OWNER):new tb(t.name,t.options,e);p1("Invalid Firebase Database URL",o),V(o.path)||Dt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=z1(a,t,u,new eb(t.name,n));return new V1(f,t)}function W1(t,e){const n=na[e];(!n||n[t.key]!==t)&&Dt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),S1(t),delete n[t.key]}function z1(t,e,n,i){let r=na[e.name];r||(r={},na[e.name]=r);let s=r[t.toURLString()];return s&&Dt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new b1(t,H1,n,i),r[t.toURLString()]=s,s}class V1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dt("Cannot call "+e+" on a deleted database.")}}function xl(t=kd(),e){const n=lr(t,"database").getImmediate({identifier:e}),i=yv("database");if(i){const[r,s]=i.split(":");q1(n,r,parseInt(s,10))}return n}function q1(t,e,n,i={}){t=un(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Dt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ti(ti.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:wv(i.mockUserToken,t.app.options.projectId);s=new ti(o)}j1(r,e,n,s)}/**
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
 */function Y1(t){By(ky),nn(new Pt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return U1(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Ct(Uc,Wc,t),Ct(Uc,Wc,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y1();const G1=t=>{try{document.getElementById(t).scrollIntoView({behavior:"smooth"})}catch(e){throw new Error(e)}},K1=t=>t.replace(/\./g,"-"),Q1=async t=>{const e=Kh(xl());return await $1(fs(e,`users/${t}`)).then(n=>n.exists()?n.val().count:0)},X1=async t=>{const e=xl(),n=await Q1(t);F1(Kh(e,`users/${t}`),{count:n+1})},J1=()=>{fetch("https://api.ipify.org/?format=json").then(t=>t.json()).then(async({ip:t})=>{const e=K1(t);X1(e)})},Z1={class:"wrapper black-background"},ew={class:"icon-wrapper"},tw=je({__name:"IntroductionPane",setup(t){const e=["Don Truong","from Vietnam","studying at Michigan State University","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=()=>{G1("experience")};return(i,r)=>{const s=Nn("font-awesome-icon");return X(),fe("div",Z1,[K(k_),K(av),K(L_,{constantText:"Hi, I'm ",dynamicTexts:e}),F("div",ew,[K(s,{class:"xl scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:r[0]||(r[0]=o=>n())})])])}}});const nw=Hn(tw,[["__scopeId","data-v-05d1b85c"]]);var Il={name:"Card"};const iw={class:"p-card p-component"},rw={key:0,class:"p-card-header"},sw={class:"p-card-body"},ow={key:0,class:"p-card-title"},aw={key:1,class:"p-card-subtitle"},lw={class:"p-card-content"},cw={key:2,class:"p-card-footer"};function uw(t,e,n,i,r,s){return X(),fe("div",iw,[t.$slots.header?(X(),fe("div",rw,[tt(t.$slots,"header")])):wt("",!0),F("div",sw,[t.$slots.title?(X(),fe("div",ow,[tt(t.$slots,"title")])):wt("",!0),t.$slots.subtitle?(X(),fe("div",aw,[tt(t.$slots,"subtitle")])):wt("",!0),F("div",lw,[tt(t.$slots,"content")]),t.$slots.footer?(X(),fe("div",cw,[tt(t.$slots,"footer")])):wt("",!0)])])}function fw(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var dw=`
.p-card-header img {
    width: 100%;
}
`;fw(dw);Il.render=uw;const hw="/assets/holistics.338144b5.png",pw="/assets/oed.11068655.png",mw=t=>(Oa("data-v-80c68450"),t=t(),Ra(),t),gw={class:"wrapper"},_w=mw(()=>F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif"}),F("h1",{class:"title xl"},"Experience"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif"})],-1)),vw=["href"],yw={class:"l green company-name"},bw={class:"m"},ww={class:"s description"},Ew={class:"s",style:{color:"yellow"}},Cw={class:"duration-wrapper"},xw={class:"m duration"},Iw=["src","alt"],Tw=je({__name:"ExperiencePane",setup(t){const e=[{company:"Holistics Data",url:"https://www.holistics.io/",icon:hw,skills:"Vue.js, TypeScript",title:"Software Engineer Intern",duration:"May 2022 - September 2022",description:"Worked on a new programming language called AML explicitly used for data analytics.                     Developed an online playground for testing and demonstrating AML.                     Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process"},{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:pw,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2021 - May 2022",description:"Performed security testing and applied a rate limit for access to prevent DDoS attacks.                    Removed redundant code and enhanced the data exporting process.                     Managed database and created new APIs to support different resource types.                     Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0)."},{company:"Chang's Kitchen",skills:"Swift, JavaScript",title:"Software Engineer Intern",duration:"May 2021 - August 2021",description:"Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers\u2019 data."}];return(n,i)=>{const r=Nn("font-awesome-icon"),s=Nn("Timeline");return X(),fe("div",gw,[_w,K(s,{value:e,align:"alternate",class:"timeline"},{content:Me(o=>[K(Nt(Il),{class:"experience-wrapper"},{title:Me(()=>[F("a",{class:"company-link",href:o.item.url,target:"_blank"},[F("h3",yw,Ke(o.item.company),1),o.item.url?(X(),On(r,{key:0,class:"m redirect-icon",icon:"fa-solid fa-up-right-from-square"})):wt("",!0)],8,vw)]),subtitle:Me(()=>[F("p",bw,Ke(o.item.title),1)]),content:Me(()=>[F("p",ww,Ke(o.item.description),1),F("p",Ew,Ke(`Related Skills: ${o.item.skills}`),1)]),_:2},1024)]),opposite:Me(o=>[F("div",Cw,[F("p",xw,Ke(o.item.duration),1)])]),marker:Me(o=>[o.item.icon?(X(),fe("img",{key:0,class:"wl marker-icon",src:o.item.icon,alt:o.item.company},null,8,Iw)):(X(),On(r,{key:1,class:"l marker-icon-default",icon:"fa-solid fa-briefcase"}))]),_:1})])}}});const Sw=Hn(Tw,[["__scopeId","data-v-80c68450"]]),Aw="/assets/msu.b99d12d1.png",kw="/assets/ptnk.95fe9da3.png",Nw=t=>(Oa("data-v-d5a589a6"),t=t(),Ra(),t),Ow={class:"wrapper black-background"},Rw=Nw(()=>F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-9.gif"}),F("h1",{class:"xl title"},"Education"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif"})],-1)),Pw={class:"l green"},Dw={class:"m"},Mw={key:0,class:"s description"},Lw={class:"duration-wrapper"},Fw={class:"m duration"},$w=["src","alt"],Bw=je({__name:"EducationPane",setup(t){const e=[{icon:Aw,school:"Michigan State University",duration:"September 2021 - May 2025",degree:"BS in Computer Science",description:`GPA: 4.0/4.0
Dean's List
MSU International Tution Grant
MSU Presidential Study Abroad Scholarship
MSU #YOU-ARE-WELCOME-HERE Scholarship`},{icon:kw,school:"VNU-HCM High School for the Gifted",duration:"September 2018 - June 2021",degree:"High School Diploma"}];return(n,i)=>{const r=Nn("Timeline");return X(),fe("div",Ow,[Rw,K(r,{value:e,align:"alternate",class:"timeline"},{content:Me(s=>[K(Nt(Il),{class:"experience-wrapper"},{title:Me(()=>[F("h3",Pw,Ke(s.item.school),1)]),subtitle:Me(()=>[F("p",Dw,Ke(s.item.degree),1)]),content:Me(()=>[s.item.description?(X(),fe("p",Mw,Ke(s.item.description),1)):wt("",!0)]),_:2},1024)]),opposite:Me(s=>[F("div",Lw,[F("p",Fw,Ke(s.item.duration),1)])]),marker:Me(s=>[F("img",{class:"wl marker-icon",src:s.item.icon,alt:s.item.school},null,8,$w)]),_:1})])}}});const Hw=Hn(Bw,[["__scopeId","data-v-d5a589a6"]]),jw="/assets/github.3d568164.png",Uw=["href"],Ww={key:0,class:"hovering-wrapper"},zw={class:"image-wrapper"},Vw=["src"],qw={class:"information-wrapper"},Yw={class:"m green"},Gw={class:"s subtitle"},Kw=je({__name:"ProjectPane",props:{project:{type:Object,default:{}}},setup(t){let e=Tf(!1);return(n,i)=>{const r=Nn("font-awesome-icon");return X(),fe("a",{class:"project-link",href:t.project.url,target:"_blank",onMouseover:i[0]||(i[0]=s=>Ne(e)?e.value=!0:e=!0),onMouseleave:i[1]||(i[1]=s=>Ne(e)?e.value=!1:e=!1)},[F("div",{class:Zt(`project-wrapper ${Nt(e)?"hovering":""}`)},[Nt(e)?(X(),fe("div",Ww,[K(r,{class:"xl redirect-icon",icon:"fa-solid fa-up-right-from-square"})])):wt("",!0),F("div",zw,[F("img",{class:"image",src:t.project.image?t.project.image:Nt(jw)},null,8,Vw)]),F("div",qw,[F("h1",Yw,Ke(t.project.name),1),F("p",Gw,Ke(t.project.subtitle),1)])],2)],40,Uw)}}});const Qw=Hn(Kw,[["__scopeId","data-v-fc38468a"]]),Xw="/assets/personal-website.037b1be0.jpeg",Jw="/assets/barter.337afb89.jpeg",Zw="/assets/nuntium.098ca59c.jpeg",eE={class:"wrapper tmp"},tE=F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-10-49.gif"}),F("h1",{class:"xl title"},"Projects"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-11-64.gif"})],-1),nE=je({__name:"ProjectsPane",setup(t){const e=[{name:"Personal Website",subtitle:"My personal website",skills:["TypeScript","Vue3"],image:Xw,description:"",url:"https://github.com/truongdd03/truongdd03.github.io"},{name:"Search engine",subtitle:"A simple version of Google Search",skills:["C++"],description:"A multi-threaded search engine that crawls information from multiple websites, extracts keywords, and returns appropriate results based on user\u2019s queries. LRU cache is use to optimize query speech.",url:"https://github.com/truongdd03/searchEngine"},{name:"Barter",subtitle:"A used stuff trading website",skills:["HTML/CSS","JavaScript"],image:Jw,description:"Winner of Best Use of Google Cloud. Implemented in 36 hours during SpartaHack VII, Barter is an exchanging items website with the goal to reduce the amount of trash and connect people.",url:"https://github.com/truongdd03/SpartaHack"},{name:"Nuntium",subtitle:"A news-sharing platform",skills:["Swift"],image:Zw,description:"Implemented in 36 hours during ShellHacks 2021, this is a news-sharing platform that supports reliability ratings and a customized search engine.",url:"https://github.com/truongdd03/Shellhack"},{name:"Opty",subtitle:"A simple version of LinkedIn",skills:["Swift"],image:"",description:"A mobile-oriented social media that is used specifically for job search. Users can easily create a resume or a recruiting post. This app would also match suitable jobs or potential candidates based on users\u2019 profiles and job descriptions.",url:"https://github.com/truongdd03/Opty-IOS"},{name:"Financial Diary",subtitle:"An expenses and incomes tracking app",skills:["Swift"],image:"",description:"An iOS application to track users\u2019 expenses and incomes, as well as displaying real-time data of the stock market for investment suggestions.",url:"https://github.com/truongdd03/Financial-Diary"},{name:"Virtual Piano",subtitle:"Play musical notes from text files",skills:["Python"],image:"",description:"A virtual piano that plays musical notes from text files.",url:"https://github.com/truongdd03/VirtualPiano"}];return(n,i)=>(X(),fe("div",eE,[tE,(X(),fe(Re,null,Ma(e,r=>K(Qw,{project:r},null,8,["project"])),64))]))}}),iE=je({__name:"App",setup(t){return Ns(async()=>{J1()}),(e,n)=>{const i=Nn("notifications");return X(),fe(Re,null,[K(nw,{id:"introduction"}),K(Sw,{id:"experience"}),K(Hw,{id:"education"}),K(nE,{id:"project"}),K(i,{class:"notification",position:"bottom right"})],64)}}});var rE={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),r,s,o;if(n&&i){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,u=e instanceof RegExp;if(c!=u)return!1;if(c&&u)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(o=f[r],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let r=e.split("."),s=t;for(var n=0,i=r.length;n<i;++n){if(s==null)return null;s=s[r[n]]}return s}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let r of t)for(let s of e)if(String(this.resolveFieldData(r,s)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}}return i},reorderArray(t,e,n){let i;if(t&&e!==n){if(n>=t.length)for(i=n-t.length;i--+1;)t.push(void 0);t.splice(n,0,t.splice(e,1)[0])}},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,t),r=!0;break}r||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[r]===""?!0:n[r]}return null},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}};const De={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},wu={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[De.STARTS_WITH,De.CONTAINS,De.NOT_CONTAINS,De.ENDS_WITH,De.EQUALS,De.NOT_EQUALS],numeric:[De.EQUALS,De.NOT_EQUALS,De.LESS_THAN,De.LESS_THAN_OR_EQUAL_TO,De.GREATER_THAN,De.GREATER_THAN_OR_EQUAL_TO],date:[De.DATE_IS,De.DATE_IS_NOT,De.DATE_BEFORE,De.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},sE=Symbol();var oE={install:(t,e)=>{let n=e?{...wu,...e}:{...wu};const i={config:xs(n)};t.config.globalProperties.$primevue=i,t.provide(sE,i)}},Qh={name:"Timeline",props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},methods:{getKey(t,e){return this.dataKey?rE.resolveFieldData(t,this.dataKey):e}},computed:{containerClass(){return["p-timeline p-component","p-timeline-"+this.align,"p-timeline-"+this.layout]}}};const aE={class:"p-timeline-event-opposite"},lE={class:"p-timeline-event-separator"},cE=F("div",{class:"p-timeline-event-marker"},null,-1),uE=F("div",{class:"p-timeline-event-connector"},null,-1),fE={class:"p-timeline-event-content"};function dE(t,e,n,i,r,s){return X(),fe("div",{class:Zt(s.containerClass)},[(X(!0),fe(Re,null,Ma(n.value,(o,a)=>(X(),fe("div",{key:s.getKey(o,a),class:"p-timeline-event"},[F("div",aE,[tt(t.$slots,"opposite",{item:o,index:a})]),F("div",lE,[tt(t.$slots,"marker",{item:o,index:a},()=>[cE]),a!==n.value.length-1?tt(t.$slots,"connector",{key:0,item:o,index:a},()=>[uE]):wt("",!0)]),F("div",fE,[tt(t.$slots,"content",{item:o,index:a})])]))),128))],2)}function hE(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var pE=`
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
`;hE(pE);Qh.render=dE;function Eu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Eu(Object(n),!0).forEach(function(i){xe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Eu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ds(t){return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ds(t)}function mE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cu(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function gE(t,e,n){return e&&Cu(t.prototype,e),n&&Cu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tl(t,e){return vE(t)||bE(t,e)||Xh(t,e)||EE()}function mr(t){return _E(t)||yE(t)||Xh(t)||wE()}function _E(t){if(Array.isArray(t))return ia(t)}function vE(t){if(Array.isArray(t))return t}function yE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Xh(t,e){if(!!t){if(typeof t=="string")return ia(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ia(t,e)}}function ia(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function wE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xu=function(){},Sl={},Jh={},Zh=null,ep={mark:xu,measure:xu};try{typeof window<"u"&&(Sl=window),typeof document<"u"&&(Jh=document),typeof MutationObserver<"u"&&(Zh=MutationObserver),typeof performance<"u"&&(ep=performance)}catch{}var CE=Sl.navigator||{},Iu=CE.userAgent,Tu=Iu===void 0?"":Iu,an=Sl,de=Jh,Su=Zh,Ar=ep;an.document;var jt=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",tp=~Tu.indexOf("MSIE")||~Tu.indexOf("Trident/"),kr,Nr,Or,Rr,Pr,Mt="___FONT_AWESOME___",ra=16,np="fa",ip="svg-inline--fa",Ln="data-fa-i2svg",sa="data-fa-pseudo-element",xE="data-fa-pseudo-element-pending",Al="data-prefix",kl="data-icon",Au="fontawesome-i2svg",IE="async",TE=["HTML","HEAD","STYLE","SCRIPT"],rp=function(){try{return!0}catch{return!1}}(),ue="classic",_e="sharp",Nl=[ue,_e];function gr(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ue]}})}var ir=gr((kr={},xe(kr,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),xe(kr,_e,{fa:"solid",fass:"solid","fa-solid":"solid"}),kr)),rr=gr((Nr={},xe(Nr,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xe(Nr,_e,{solid:"fass"}),Nr)),sr=gr((Or={},xe(Or,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xe(Or,_e,{fass:"fa-solid"}),Or)),SE=gr((Rr={},xe(Rr,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xe(Rr,_e,{"fa-solid":"fass"}),Rr)),AE=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,sp="fa-layers-text",kE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,NE=gr((Pr={},xe(Pr,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xe(Pr,_e,{900:"fass"}),Pr)),op=[1,2,3,4,5,6,7,8,9,10],OE=op.concat([11,12,13,14,15,16,17,18,19,20]),RE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},or=new Set;Object.keys(rr[ue]).map(or.add.bind(or));Object.keys(rr[_e]).map(or.add.bind(or));var PE=[].concat(Nl,mr(or),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xn.GROUP,xn.SWAP_OPACITY,xn.PRIMARY,xn.SECONDARY]).concat(op.map(function(t){return"".concat(t,"x")})).concat(OE.map(function(t){return"w-".concat(t)})),Di=an.FontAwesomeConfig||{};function DE(t){var e=de.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ME(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(de&&typeof de.querySelector=="function"){var LE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];LE.forEach(function(t){var e=Tl(t,2),n=e[0],i=e[1],r=ME(DE(n));r!=null&&(Di[i]=r)})}var ap={styleDefault:"solid",familyDefault:"classic",cssPrefix:np,replacementClass:ip,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Di.familyPrefix&&(Di.cssPrefix=Di.familyPrefix);var ui=k(k({},ap),Di);ui.autoReplaceSvg||(ui.observeMutations=!1);var R={};Object.keys(ap).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){ui[t]=n,Mi.forEach(function(i){return i(R)})},get:function(){return ui[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){ui.cssPrefix=e,Mi.forEach(function(n){return n(R)})},get:function(){return ui.cssPrefix}});an.FontAwesomeConfig=R;var Mi=[];function FE(t){return Mi.push(t),function(){Mi.splice(Mi.indexOf(t),1)}}var zt=ra,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $E(t){if(!(!t||!jt)){var e=de.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=de.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return de.head.insertBefore(e,i),t}}var BE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ar(){for(var t=12,e="";t-- >0;)e+=BE[Math.random()*62|0];return e}function vi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ol(t){return t.classList?vi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function lp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function HE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(lp(t[n]),'" ')},"").trim()}function zs(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Rl(t){return t.size!==Et.size||t.x!==Et.x||t.y!==Et.y||t.rotate!==Et.rotate||t.flipX||t.flipY}function jE(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function UE(t){var e=t.transform,n=t.width,i=n===void 0?ra:n,r=t.height,s=r===void 0?ra:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&tp?l+="translate(".concat(e.x/zt-i/2,"em, ").concat(e.y/zt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/zt,"em), calc(-50% + ").concat(e.y/zt,"em)) "):l+="translate(".concat(e.x/zt,"em, ").concat(e.y/zt,"em) "),l+="scale(".concat(e.size/zt*(e.flipX?-1:1),", ").concat(e.size/zt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var WE=`:root, :host {
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
}`;function cp(){var t=np,e=ip,n=R.cssPrefix,i=R.replacementClass,r=WE;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var ku=!1;function wo(){R.autoAddCss&&!ku&&($E(cp()),ku=!0)}var zE={mixout:function(){return{dom:{css:cp,insertCss:wo}}},hooks:function(){return{beforeDOMElementCreation:function(){wo()},beforeI2svg:function(){wo()}}}},Lt=an||{};Lt[Mt]||(Lt[Mt]={});Lt[Mt].styles||(Lt[Mt].styles={});Lt[Mt].hooks||(Lt[Mt].hooks={});Lt[Mt].shims||(Lt[Mt].shims=[]);var dt=Lt[Mt],up=[],VE=function t(){de.removeEventListener("DOMContentLoaded",t),hs=1,up.map(function(e){return e()})},hs=!1;jt&&(hs=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),hs||de.addEventListener("DOMContentLoaded",VE));function qE(t){!jt||(hs?setTimeout(t,0):up.push(t))}function _r(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?lp(t):"<".concat(e," ").concat(HE(i),">").concat(s.map(_r).join(""),"</").concat(e,">")}function Nu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var YE=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Eo=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?YE(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function GE(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function oa(t){var e=GE(t);return e.length===1?e[0].toString(16):null}function KE(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Ou(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function aa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Ou(e);typeof dt.hooks.addPack=="function"&&!r?dt.hooks.addPack(t,Ou(e)):dt.styles[t]=k(k({},dt.styles[t]||{}),s),t==="fas"&&aa("fa",e)}var Dr,Mr,Lr,Gn=dt.styles,QE=dt.shims,XE=(Dr={},xe(Dr,ue,Object.values(sr[ue])),xe(Dr,_e,Object.values(sr[_e])),Dr),Pl=null,fp={},dp={},hp={},pp={},mp={},JE=(Mr={},xe(Mr,ue,Object.keys(ir[ue])),xe(Mr,_e,Object.keys(ir[_e])),Mr);function ZE(t){return~PE.indexOf(t)}function eC(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!ZE(r)?r:null}var gp=function(){var e=function(s){return Eo(Gn,function(o,a,l){return o[l]=Eo(a,s,{}),o},{})};fp=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),dp=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),mp=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Gn||R.autoFetchSvg,i=Eo(QE,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});hp=i.names,pp=i.unicodes,Pl=Vs(R.styleDefault,{family:R.familyDefault})};FE(function(t){Pl=Vs(t.styleDefault,{family:R.familyDefault})});gp();function Dl(t,e){return(fp[t]||{})[e]}function tC(t,e){return(dp[t]||{})[e]}function In(t,e){return(mp[t]||{})[e]}function _p(t){return hp[t]||{prefix:null,iconName:null}}function nC(t){var e=pp[t],n=Dl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ln(){return Pl}var Ml=function(){return{prefix:null,iconName:null,rest:[]}};function Vs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ue:n,r=ir[i][t],s=rr[i][t]||rr[i][r],o=t in dt.styles?t:null;return s||o||null}var Ru=(Lr={},xe(Lr,ue,Object.keys(sr[ue])),xe(Lr,_e,Object.keys(sr[_e])),Lr);function qs(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},xe(e,ue,"".concat(R.cssPrefix,"-").concat(ue)),xe(e,_e,"".concat(R.cssPrefix,"-").concat(_e)),e),o=null,a=ue;(t.includes(s[ue])||t.some(function(c){return Ru[ue].includes(c)}))&&(a=ue),(t.includes(s[_e])||t.some(function(c){return Ru[_e].includes(c)}))&&(a=_e);var l=t.reduce(function(c,u){var f=eC(R.cssPrefix,u);if(Gn[u]?(u=XE[a].includes(u)?SE[a][u]:u,o=u,c.prefix=u):JE[a].indexOf(u)>-1?(o=u,c.prefix=Vs(u,{family:a})):f?c.iconName=f:u!==R.replacementClass&&u!==s[ue]&&u!==s[_e]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?_p(c.iconName):{},m=In(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Gn.far&&Gn.fas&&!R.autoFetchSvg&&(c.prefix="fas")}return c},Ml());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(Gn.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=In(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ln()||"fas"),l}var iC=function(){function t(){mE(this,t),this.definitions={}}return gE(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),o[a]),aa(a,o[a]);var l=sr[ue][a];l&&aa(l,o[a]),gp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Pu=[],Kn={},ii={},rC=Object.keys(ii);function sC(t,e){var n=e.mixoutsTo;return Pu=t,Kn={},Object.keys(ii).forEach(function(i){rC.indexOf(i)===-1&&delete ii[i]}),Pu.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ds(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Kn[o]||(Kn[o]=[]),Kn[o].push(s[o])})}i.provides&&i.provides(ii)}),n}function la(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Kn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Fn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Kn[t]||[];r.forEach(function(s){s.apply(null,n)})}function Ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ii[t]?ii[t].apply(null,e):void 0}function ca(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ln();if(!!e)return e=In(n,e)||e,Nu(vp.definitions,n,e)||Nu(dt.styles,n,e)}var vp=new iC,oC=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Fn("noAuto")},aC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jt?(Fn("beforeI2svg",e),Ft("pseudoElements2svg",e),Ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,qE(function(){cC({autoReplaceSvgRoot:n}),Fn("watch",e)})}},lC={icon:function(e){if(e===null)return null;if(ds(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:In(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Vs(e[0]);return{prefix:i,iconName:In(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(AE))){var r=qs(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ln(),iconName:In(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=ln();return{prefix:s,iconName:In(s,e)||e}}}},Je={noAuto:oC,config:R,dom:aC,parse:lC,library:vp,findIconDefinition:ca,toHtml:_r},cC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?de:n;(Object.keys(dt.styles).length>0||R.autoFetchSvg)&&jt&&R.autoReplaceSvg&&Je.dom.i2svg({node:i})};function Ys(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return _r(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!jt){var i=de.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function uC(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Rl(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=zs(k(k({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function fC(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:o}),children:i}]}]}function Ll(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,_=i.found?i:n,E=_.width,N=_.height,b=r==="fak",S=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(ee){return f.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(f.classes).join(" "),P={children:[],attributes:k(k({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(N)})},B=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/N*16*.0625,"em")}:{};m&&(P.attributes[Ln]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||ar())},children:[l]}),delete P.attributes.title);var q=k(k({},P),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:k(k({},B),f.styles)}),be=i.found&&n.found?Ft("generateAbstractMask",q)||{children:[],attributes:{}}:Ft("generateAbstractIcon",q)||{children:[],attributes:{}},me=be.children,U=be.attributes;return q.children=me,q.attributes=U,a?fC(q):uC(q)}function Du(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=k(k(k({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Ln]="");var u=k({},o.styles);Rl(r)&&(u.transform=UE({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=zs(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function dC(t){var e=t.content,n=t.title,i=t.extra,r=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=zs(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Co=dt.styles;function ua(t){var e=t[0],n=t[1],i=t.slice(4),r=Tl(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var hC={found:!1,width:512,height:512};function pC(t,e){!rp&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fa(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=ln()),new Promise(function(i,r){if(Ft("missingIconAbstract"),n==="fa"){var s=_p(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Co[e]&&Co[e][t]){var o=Co[e][t];return i(ua(o))}pC(t,e),i(k(k({},hC),{},{icon:R.showMissingIcons&&t?Ft("missingIconAbstract")||{}:{}}))})}var Mu=function(){},da=R.measurePerformance&&Ar&&Ar.mark&&Ar.measure?Ar:{mark:Mu,measure:Mu},Si='FA "6.2.0"',mC=function(e){return da.mark("".concat(Si," ").concat(e," begins")),function(){return yp(e)}},yp=function(e){da.mark("".concat(Si," ").concat(e," ends")),da.measure("".concat(Si," ").concat(e),"".concat(Si," ").concat(e," begins"),"".concat(Si," ").concat(e," ends"))},Fl={begin:mC,end:yp},Hr=function(){};function Lu(t){var e=t.getAttribute?t.getAttribute(Ln):null;return typeof e=="string"}function gC(t){var e=t.getAttribute?t.getAttribute(Al):null,n=t.getAttribute?t.getAttribute(kl):null;return e&&n}function _C(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function vC(){if(R.autoReplaceSvg===!0)return jr.replace;var t=jr[R.autoReplaceSvg];return t||jr.replace}function yC(t){return de.createElementNS("http://www.w3.org/2000/svg",t)}function bC(t){return de.createElement(t)}function bp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?yC:bC:n;if(typeof t=="string")return de.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(bp(o,{ceFn:i}))}),r}function wC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(bp(r),n)}),n.getAttribute(Ln)===null&&R.keepOriginalSource){var i=de.createComment(wC(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Ol(n).indexOf(R.replacementClass))return jr.replace(e);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return _r(a)}).join(`
`);n.setAttribute(Ln,""),n.innerHTML=o}};function Fu(t){t()}function wp(t,e){var n=typeof e=="function"?e:Hr;if(t.length===0)n();else{var i=Fu;R.mutateApproach===IE&&(i=an.requestAnimationFrame||Fu),i(function(){var r=vC(),s=Fl.begin("mutate");t.map(r),s(),n()})}}var $l=!1;function Ep(){$l=!0}function ha(){$l=!1}var ps=null;function $u(t){if(!!Su&&!!R.observeMutations){var e=t.treeCallback,n=e===void 0?Hr:e,i=t.nodeCallback,r=i===void 0?Hr:i,s=t.pseudoElementsCallback,o=s===void 0?Hr:s,a=t.observeMutationsRoot,l=a===void 0?de:a;ps=new Su(function(c){if(!$l){var u=ln();vi(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Lu(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Lu(f.target)&&~RE.indexOf(f.attributeName))if(f.attributeName==="class"&&gC(f.target)){var d=qs(Ol(f.target)),m=d.prefix,_=d.iconName;f.target.setAttribute(Al,m||u),_&&f.target.setAttribute(kl,_)}else _C(f.target)&&r(f.target)})}}),jt&&ps.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function EC(){!ps||ps.disconnect()}function CC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function xC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=qs(Ol(t));return r.prefix||(r.prefix=ln()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=tC(r.prefix,t.innerText)||Dl(r.prefix,oa(t.innerText))),!r.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function IC(t){var e=vi(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(i||ar()):(e["aria-hidden"]="true",e.focusable="false")),e}function TC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xC(t),i=n.iconName,r=n.prefix,s=n.rest,o=IC(t),a=la("parseNodeAttributes",{},t),l=e.styleParser?CC(t):[];return k({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var SC=dt.styles;function Cp(t){var e=R.autoReplaceSvg==="nest"?Bu(t,{styleParser:!1}):Bu(t);return~e.extra.classes.indexOf(sp)?Ft("generateLayersText",t,e):Ft("generateSvgReplacementMutation",t,e)}var cn=new Set;Nl.map(function(t){cn.add("fa-".concat(t))});Object.keys(ir[ue]).map(cn.add.bind(cn));Object.keys(ir[_e]).map(cn.add.bind(cn));cn=mr(cn);function Hu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jt)return Promise.resolve();var n=de.documentElement.classList,i=function(f){return n.add("".concat(Au,"-").concat(f))},r=function(f){return n.remove("".concat(Au,"-").concat(f))},s=R.autoFetchSvg?cn:Nl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(SC));s.includes("fa")||s.push("fa");var o=[".".concat(sp,":not([").concat(Ln,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Ln,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=vi(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Fl.begin("onTree"),c=a.reduce(function(u,f){try{var d=Cp(f);d&&u.push(d)}catch(m){rp||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){wp(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function AC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cp(t).then(function(n){n&&wp([n],e)})}function kC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:ca(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ca(r||{})),t(i,k(k({},n),{},{mask:r}))}}var NC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Et:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,E=n.classes,N=E===void 0?[]:E,b=n.attributes,S=b===void 0?{}:b,P=n.styles,B=P===void 0?{}:P;if(!!e){var q=e.prefix,be=e.iconName,me=e.icon;return Ys(k({type:"icon"},e),function(){return Fn("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(d?S["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(_||ar()):(S["aria-hidden"]="true",S.focusable="false")),Ll({icons:{main:ua(me),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:be,transform:k(k({},Et),r),symbol:o,title:d,maskId:u,titleId:_,extra:{attributes:S,styles:B,classes:N}})})}},OC={mixout:function(){return{icon:kC(NC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hu,n.nodeCallback=AC,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?de:i,s=n.callback,o=s===void 0?function(){}:s;return Hu(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(m,_){Promise.all([fa(r,a),u.iconName?fa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var N=Tl(E,2),b=N[0],S=N[1];m([n,Ll({icons:{main:b,mask:S},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=zs(a);l.length>0&&(r.style=l);var c;return Rl(o)&&(c=Ft("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},RC={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Ys({type:"layer"},function(){Fn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(mr(s)).join(" ")},children:o}]})}}}},PC={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Ys({type:"counter",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:i}),dC({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(mr(a))}})})}}}},DC={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Et:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,m=d===void 0?{}:d;return Ys({type:"text",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:i}),Du({content:n,transform:k(k({},Et),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(R.cssPrefix,"-layers-text")].concat(mr(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(tp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return R.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Du({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},MC=new RegExp('"',"ug"),ju=[1105920,1112319];function LC(t){var e=t.replace(MC,""),n=KE(e,0),i=n>=ju[0]&&n<=ju[1],r=e.length===2?e[0]===e[1]:!1;return{value:oa(r?e[0]:e),isSecondary:i||r}}function Uu(t,e){var n="".concat(xE).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=vi(t.children),o=s.filter(function(me){return me.getAttribute(sa)===e})[0],a=an.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(kE),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?_e:ue,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rr[d][l[2].toLowerCase()]:NE[d][c],_=LC(f),E=_.value,N=_.isSecondary,b=l[0].startsWith("FontAwesome"),S=Dl(m,E),P=S;if(b){var B=nC(E);B.iconName&&B.prefix&&(S=B.iconName,m=B.prefix)}if(S&&!N&&(!o||o.getAttribute(Al)!==m||o.getAttribute(kl)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var q=TC(),be=q.extra;be.attributes[sa]=e,fa(S,m).then(function(me){var U=Ll(k(k({},q),{},{icons:{main:me,mask:Ml()},prefix:m,iconName:P,extra:be,watchable:!0})),ee=de.createElement("svg");e==="::before"?t.insertBefore(ee,t.firstChild):t.appendChild(ee),ee.outerHTML=U.map(function(ne){return _r(ne)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function FC(t){return Promise.all([Uu(t,"::before"),Uu(t,"::after")])}function $C(t){return t.parentNode!==document.head&&!~TE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(sa)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wu(t){if(!!jt)return new Promise(function(e,n){var i=vi(t.querySelectorAll("*")).filter($C).map(FC),r=Fl.begin("searchPseudoElements");Ep(),Promise.all(i).then(function(){r(),ha(),e()}).catch(function(){r(),ha(),n()})})}var BC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wu,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?de:i;R.searchPseudoElements&&Wu(r)}}},zu=!1,HC={mixout:function(){return{dom:{unwatch:function(){Ep(),zu=!0}}}},hooks:function(){return{bootstrap:function(){$u(la("mutationObserverCallbacks",{}))},noAuto:function(){EC()},watch:function(n){var i=n.observeMutationsRoot;zu?ha():$u(la("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Vu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},jC={mixout:function(){return{parse:{transform:function(n){return Vu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Vu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:k(k({},i.icon.attributes),m.path)}]}]}}}},xo={x:0,y:0,width:"100%",height:"100%"};function qu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function UC(t){return t.tag==="g"?t.children:[t]}var WC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?qs(r.split(" ").map(function(o){return o.trim()})):Ml();return s.prefix||(s.prefix=ln()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,m=jE({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:k(k({},xo),{},{fill:"white"})},E=u.children?{children:u.children.map(qu)}:{},N={tag:"g",attributes:k({},m.inner),children:[qu(k({tag:u.tag,attributes:k(k({},u.attributes),m.path)},E))]},b={tag:"g",attributes:k({},m.outer),children:[N]},S="mask-".concat(a||ar()),P="clip-".concat(a||ar()),B={tag:"mask",attributes:k(k({},xo),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,b]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:UC(d)},B]};return i.push(q,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},xo)}),{children:i,attributes:r}}}},zC={provides:function(e){var n=!1;an.matchMedia&&(n=an.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},VC={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},qC=[zE,OC,RC,PC,DC,BC,HC,jC,WC,zC,VC];sC(qC,{mixoutsTo:Je});Je.noAuto;var xp=Je.config,YC=Je.library;Je.dom;var ms=Je.parse;Je.findIconDefinition;Je.toHtml;var GC=Je.icon;Je.layer;var KC=Je.text;Je.counter;function Yu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yu(Object(n),!0).forEach(function(i){Ue(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function gs(t){return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gs(t)}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QC(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function XC(t,e){if(t==null)return{};var n=QC(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function pa(t){return JC(t)||ZC(t)||ex(t)||tx()}function JC(t){if(Array.isArray(t))return ma(t)}function ZC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ex(t,e){if(!!t){if(typeof t=="string")return ma(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ma(t,e)}}function ma(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function tx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ip={exports:{}};(function(t){(function(e){var n=function(b,S,P){if(!c(S)||f(S)||d(S)||m(S)||l(S))return S;var B,q=0,be=0;if(u(S))for(B=[],be=S.length;q<be;q++)B.push(n(b,S[q],P));else{B={};for(var me in S)Object.prototype.hasOwnProperty.call(S,me)&&(B[b(me,P)]=n(b,S[me],P))}return B},i=function(b,S){S=S||{};var P=S.separator||"_",B=S.split||/(?=[A-Z])/;return b.split(B).join(P)},r=function(b){return _(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(S,P){return P?P.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var S=r(b);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(b,S){return i(b,S).toLowerCase()},a=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return a.call(b)=="[object Array]"},f=function(b){return a.call(b)=="[object Date]"},d=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},_=function(b){return b=b-0,b===b},E=function(b,S){var P=S&&"process"in S?S.process:S;return typeof P!="function"?b:function(B,q){return P(B,b,q)}},N={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(b,S){return n(E(r,S),b)},decamelizeKeys:function(b,S){return n(E(o,S),b,S)},pascalizeKeys:function(b,S){return n(E(s,S),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(nx)})(Ip);var ix=Ip.exports,rx=["class","style"];function sx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=ix.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function ox(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Bl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Bl(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ox(u);break;case"style":l.style=sx(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=XC(n,rx);return sd(t.tag,lt(lt(lt({},e),{},{class:r.class,style:lt(lt({},r.style),o)},r.attrs),a),i)}var Tp=!1;try{Tp=!0}catch{}function ax(){if(!Tp&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Li(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ue({},t,e):{}}function lx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ue(e,"fa-".concat(t.size),t.size!==null),Ue(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ue(e,"fa-pull-".concat(t.pull),t.pull!==null),Ue(e,"fa-swap-opacity",t.swapOpacity),Ue(e,"fa-bounce",t.bounce),Ue(e,"fa-shake",t.shake),Ue(e,"fa-beat",t.beat),Ue(e,"fa-fade",t.fade),Ue(e,"fa-beat-fade",t.beatFade),Ue(e,"fa-flash",t.flash),Ue(e,"fa-spin-pulse",t.spinPulse),Ue(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Gu(t){if(t&&gs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ms.icon)return ms.icon(t);if(t===null)return null;if(gs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var cx=je({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=et(function(){return Gu(e.icon)}),s=et(function(){return Li("classes",lx(e))}),o=et(function(){return Li("transform",typeof e.transform=="string"?ms.transform(e.transform):e.transform)}),a=et(function(){return Li("mask",Gu(e.mask))}),l=et(function(){return GC(r.value,lt(lt(lt(lt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});$r(l,function(u){if(!u)return ax("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=et(function(){return l.value?Bl(l.value.abstract[0],{},i):null});return function(){return c.value}}});je({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=xp.familyPrefix,s=et(function(){return["".concat(r,"-layers")].concat(pa(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return sd("div",{class:s.value},i.default?i.default():[])}}});je({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=xp.familyPrefix,s=et(function(){return Li("classes",[].concat(pa(e.counter?["".concat(r,"-layers-counter")]:[]),pa(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=et(function(){return Li("transform",typeof e.transform=="string"?ms.transform(e.transform):e.transform)}),a=et(function(){var c=KC(e.value.toString(),lt(lt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=et(function(){return Bl(a.value,{},i)});return function(){return l.value}}});var ux={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},fx={prefix:"fas",iconName:"up-right-from-square",icon:[448,512,["external-link-alt"],"f35d","M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},dx={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z"]},hx={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},px={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},mx={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},gx={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},_x={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var vx="firebase",yx="9.11.0";/**
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
 */Ct(vx,yx,"app");const Sp="@firebase/installations",Hl="0.5.13";/**
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
 */const Ap=1e4,kp=`w:${Hl}`,Np="FIS_v2",bx="https://firebaseinstallations.googleapis.com/v1",wx=60*60*1e3,Ex="installations",Cx="Installations";/**
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
 */const xx={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$n=new Ps(Ex,Cx,xx);function Op(t){return t instanceof jn&&t.code.includes("request-failed")}/**
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
 */function Rp({projectId:t}){return`${bx}/projects/${t}/installations`}function Pp(t){return{token:t.token,requestStatus:2,expiresIn:Tx(t.expiresIn),creationTime:Date.now()}}async function Dp(t,e){const i=(await e.json()).error;return $n.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Mp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ix(t,{refreshToken:e}){const n=Mp(t);return n.append("Authorization",Sx(e)),n}async function Lp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Tx(t){return Number(t.replace("s","000"))}function Sx(t){return`${Np} ${t}`}/**
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
 */async function Ax({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Rp(t),r=Mp(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:Np,appId:t.appId,sdkVersion:kp},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Lp(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Pp(c.authToken)}}else throw await Dp("Create Installation",l)}/**
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
 */function Fp(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Nx=/^[cdef][\w-]{21}$/,ga="";function Ox(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Rx(t);return Nx.test(n)?n:ga}catch{return ga}}function Rx(t){return kx(t).substr(0,22)}/**
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
 */function Gs(t){return`${t.appName}!${t.appId}`}/**
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
 */const $p=new Map;function Bp(t,e){const n=Gs(t);Hp(n,e),Px(n,e)}function Hp(t,e){const n=$p.get(t);if(!!n)for(const i of n)i(e)}function Px(t,e){const n=Dx();n&&n.postMessage({key:t,fid:e}),Mx()}let Tn=null;function Dx(){return!Tn&&"BroadcastChannel"in self&&(Tn=new BroadcastChannel("[Firebase] FID Change"),Tn.onmessage=t=>{Hp(t.data.key,t.data.fid)}),Tn}function Mx(){$p.size===0&&Tn&&(Tn.close(),Tn=null)}/**
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
 */const Lx="firebase-installations-database",Fx=1,Bn="firebase-installations-store";let Io=null;function jl(){return Io||(Io=Sd(Lx,Fx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}})),Io}async function _s(t,e){const n=Gs(t),r=(await jl()).transaction(Bn,"readwrite"),s=r.objectStore(Bn),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Bp(t,e.fid),e}async function jp(t){const e=Gs(t),i=(await jl()).transaction(Bn,"readwrite");await i.objectStore(Bn).delete(e),await i.done}async function Ks(t,e){const n=Gs(t),r=(await jl()).transaction(Bn,"readwrite"),s=r.objectStore(Bn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Bp(t,a.fid),a}/**
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
 */async function Ul(t){let e;const n=await Ks(t.appConfig,i=>{const r=$x(i),s=Bx(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===ga?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $x(t){const e=t||{fid:Ox(),registrationStatus:0};return Up(e)}function Bx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Hx(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jx(t)}:{installationEntry:e}}async function Hx(t,e){try{const n=await Ax(t,e);return _s(t.appConfig,n)}catch(n){throw Op(n)&&n.customData.serverCode===409?await jp(t.appConfig):await _s(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jx(t){let e=await Ku(t.appConfig);for(;e.registrationStatus===1;)await Fp(100),e=await Ku(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ul(t);return i||n}return e}function Ku(t){return Ks(t,e=>{if(!e)throw $n.create("installation-not-found");return Up(e)})}function Up(t){return Ux(t)?{fid:t.fid,registrationStatus:0}:t}function Ux(t){return t.registrationStatus===1&&t.registrationTime+Ap<Date.now()}/**
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
 */async function Wx({appConfig:t,heartbeatServiceProvider:e},n){const i=zx(t,n),r=Ix(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:kp,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Lp(()=>fetch(i,a));if(l.ok){const c=await l.json();return Pp(c)}else throw await Dp("Generate Auth Token",l)}function zx(t,{fid:e}){return`${Rp(t)}/${e}/authTokens:generate`}/**
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
 */async function Wl(t,e=!1){let n;const i=await Ks(t.appConfig,s=>{if(!Wp(s))throw $n.create("not-registered");const o=s.authToken;if(!e&&Yx(o))return s;if(o.requestStatus===1)return n=Vx(t,e),s;{if(!navigator.onLine)throw $n.create("app-offline");const a=Kx(s);return n=qx(t,a),a}});return n?await n:i.authToken}async function Vx(t,e){let n=await Qu(t.appConfig);for(;n.authToken.requestStatus===1;)await Fp(100),n=await Qu(t.appConfig);const i=n.authToken;return i.requestStatus===0?Wl(t,e):i}function Qu(t){return Ks(t,e=>{if(!Wp(e))throw $n.create("not-registered");const n=e.authToken;return Qx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qx(t,e){try{const n=await Wx(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await _s(t.appConfig,i),n}catch(n){if(Op(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jp(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _s(t.appConfig,i)}throw n}}function Wp(t){return t!==void 0&&t.registrationStatus===2}function Yx(t){return t.requestStatus===2&&!Gx(t)}function Gx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wx}function Kx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qx(t){return t.requestStatus===1&&t.requestTime+Ap<Date.now()}/**
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
 */async function Xx(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ul(e);return i?i.catch(console.error):Wl(e).catch(console.error),n.fid}/**
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
 */async function Jx(t,e=!1){const n=t;return await Zx(n),(await Wl(n,e)).token}async function Zx(t){const{registrationPromise:e}=await Ul(t);e&&await e}/**
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
 */function eI(t){if(!t||!t.options)throw To("App Configuration");if(!t.name)throw To("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw To(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function To(t){return $n.create("missing-app-config-values",{valueName:t})}/**
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
 */const zp="installations",tI="installations-internal",nI=t=>{const e=t.getProvider("app").getImmediate(),n=eI(e),i=lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},iI=t=>{const e=t.getProvider("app").getImmediate(),n=lr(e,zp).getImmediate();return{getId:()=>Xx(n),getToken:r=>Jx(n,r)}};function rI(){nn(new Pt(zp,nI,"PUBLIC")),nn(new Pt(tI,iI,"PRIVATE"))}rI();Ct(Sp,Hl);Ct(Sp,Hl,"esm2017");/**
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
 */const vs="analytics",sI="firebase_id",oI="origin",aI=60*1e3,lI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qe=new Ya("@firebase/analytics");/**
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
 */function qp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cI(t,e){const n=document.createElement("script");n.src=`${Vp}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function uI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function fI(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await qp(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Qe.error(a)}t("config",r,s)}async function dI(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await qp(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Qe.error(s)}}function hI(t,e,n,i){async function r(s,o,a){try{s==="event"?await dI(t,e,n,o,a):s==="config"?await fI(t,e,n,i,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Qe.error(l)}}return r}function pI(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=hI(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function mI(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Vp))return e;return null}/**
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
 */const gI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},rt=new Ps("analytics","Analytics",gI);/**
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
 */const _I=30,vI=1e3;class yI{constructor(e={},n=vI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yp=new yI;function bI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function wI(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:bI(i)},s=lI.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function EI(t,e=Yp,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw rt.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw rt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new II;return setTimeout(async()=>{a.abort()},n!==void 0?n:aI),Gp({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Gp(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Yp){var s,o;const{appId:a,measurementId:l}=t;try{await CI(i,e)}catch(c){if(l)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=c)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw c}try{const c=await wI(t);return r.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!xI(u)){if(r.deleteThrottleMetadata(a),l)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Dc(n,r.intervalMillis,_I):Dc(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,d),Qe.debug(`Calling attemptFetch again in ${f} millis`),Gp(t,d,i,r)}}function CI(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xI(t){if(!(t instanceof jn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class II{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TI(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
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
 */async function SI(){var t;if(wd())try{await Ed()}catch(e){return Qe.warn(rt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Qe.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AI(t,e,n,i,r,s,o){var a;const l=EI(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Qe.error(m)),e.push(l);const c=SI().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([l,c]);mI()||cI(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[oI]="firebase",d.update=!0,f!=null&&(d[sI]=f),r("config",u.measurementId,d),u.measurementId}/**
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
 */class kI{constructor(e){this.app=e}_delete(){return delete Fi[this.app.options.appId],Promise.resolve()}}let Fi={},Xu=[];const Ju={};let So="dataLayer",NI="gtag",Zu,Kp,ef=!1;function OI(){const t=[];if(dv()&&t.push("This is a browser extension environment."),pv()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});Qe.warn(n.message)}}function RI(t,e,n){OI();const i=t.options.appId;if(!i)throw rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Fi[i]!=null)throw rt.create("already-exists",{id:i});if(!ef){uI(So);const{wrappedGtag:s,gtagCore:o}=pI(Fi,Xu,Ju,So,NI);Kp=s,Zu=o,ef=!0}return Fi[i]=AI(t,Xu,Ju,e,Zu,So,n),new kI(t)}function PI(t=kd()){t=un(t);const e=lr(t,vs);return e.isInitialized()?e.getImmediate():DI(t)}function DI(t,e={}){const n=lr(t,vs);if(n.isInitialized()){const r=n.getImmediate();if(Xr(e,n.getOptions()))return r;throw rt.create("already-initialized")}return n.initialize({options:e})}function MI(t,e,n,i){t=un(t),TI(Kp,Fi[t.app.options.appId],e,n,i).catch(r=>Qe.error(r))}const tf="@firebase/analytics",nf="0.8.1";function LI(){nn(new Pt(vs,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return RI(i,r,n)},"PUBLIC")),nn(new Pt("analytics-internal",t,"PRIVATE")),Ct(tf,nf),Ct(tf,nf,"esm2017");function t(e){try{const n=e.getProvider(vs).getImmediate();return{logEvent:(i,r,s)=>MI(n,i,r,s)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}LI();const FI={apiKey:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",authDomain:"truongdd03.firebaseapp.com",projectId:"truongdd03",storageBucket:"truongdd03.appspot.com",messagingSenderId:{VITE_FIREBASE_API_KEY:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",VITE_AUTH_DOMAIN:"truongdd03.firebaseapp.com",VITE_PROJECT_ID:"truongdd03",VITE_STORAGE_BUCKET:"truongdd03.appspot.com",VITE_MESSAGE_SENDER_ID:"156878048180",VITE_APP_ID:"1:156878048180:web:cfffba9df67d9f5f4a00e1",VITE_MEASUREMENT_ID:"G-YZYZPEBDGH",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGING_SENDER_ID,appId:"1:156878048180:web:cfffba9df67d9f5f4a00e1",measurementId:"G-YZYZPEBDGH"},Qp=Ad(FI);PI(Qp);xl(Qp);const $I=[_x,gx,mx,hx,ux,px,fx,dx];$I.forEach(t=>YC.add(t));const Qs=x_(iE),BI=[ev,oE];BI.forEach(t=>Qs.use(t));Qs.component("Timeline",Qh);Qs.component("font-awesome-icon",cx);Qs.mount("#app");
