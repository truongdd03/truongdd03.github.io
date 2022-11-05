(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ia(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=Ia(hm);function gf(t){return!!t||t===""}function Hi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ce(i)?_m(i):Hi(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ce(t))return t;if(he(t))return t}}const mm=/;(?![^(]*\))/g,gm=/:(.+)/;function _m(t){const e={};return t.split(mm).forEach(n=>{if(n){const i=n.split(gm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xe(t){let e="";if(Ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=Xe(t[n]);i&&(e+=i+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Je=t=>Ce(t)?t:t==null?"":H(t)||he(t)&&(t.toString===bf||!W(t.toString))?JSON.stringify(t,_f,2):String(t),_f=(t,e)=>e&&e.__v_isRef?_f(t,e.value):Jn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:vf(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!H(e)&&!wf(e)?String(e):e,ae={},Xn=[],gt=()=>{},vm=()=>!1,ym=/^on[^a-z]/,Es=t=>ym.test(t),xa=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Ta=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bm=Object.prototype.hasOwnProperty,Q=(t,e)=>bm.call(t,e),H=Array.isArray,Jn=t=>Cs(t)==="[object Map]",vf=t=>Cs(t)==="[object Set]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",Sa=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",yf=t=>he(t)&&W(t.then)&&W(t.catch),bf=Object.prototype.toString,Cs=t=>bf.call(t),wm=t=>Cs(t).slice(8,-1),wf=t=>Cs(t)==="[object Object]",Aa=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Is=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Em=/-(\w)/g,Tt=Is(t=>t.replace(Em,(e,n)=>n?n.toUpperCase():"")),Cm=/\B([A-Z])/g,hi=Is(t=>t.replace(Cm,"-$1").toLowerCase()),xs=Is(t=>t.charAt(0).toUpperCase()+t.slice(1)),no=Is(t=>t?`on${xs(t)}`:""),ji=(t,e)=>!Object.is(t,e),io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ef=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nc;const Im=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ke;class xm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ke&&(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Tm(t,e=Ke){e&&e.active&&e.effects.push(t)}function Sm(){return Ke}function Am(t){Ke&&Ke.cleanups.push(t)}const ka=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cf=t=>(t.w&tn)>0,If=t=>(t.n&tn)>0,km=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tn},Nm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Cf(r)&&!If(r)?r.delete(t):e[n++]=r,r.w&=~tn,r.n&=~tn}e.length=n}},Ro=new WeakMap;let Ai=0,tn=1;const Po=30;let ct;const Nn=Symbol(""),Do=Symbol("");class Na{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tm(this,i)}run(){if(!this.active)return this.fn();let e=ct,n=Kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Kt=!0,tn=1<<++Ai,Ai<=Po?km(this):ic(this),this.fn()}finally{Ai<=Po&&Nm(this),tn=1<<--Ai,ct=this.parent,Kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(ic(this),this.onStop&&this.onStop(),this.active=!1)}}function ic(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kt=!0;const xf=[];function pi(){xf.push(Kt),Kt=!1}function mi(){const t=xf.pop();Kt=t===void 0?!0:t}function et(t,e,n){if(Kt&&ct){let i=Ro.get(t);i||Ro.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ka()),Tf(r)}}function Tf(t,e){let n=!1;Ai<=Po?If(t)||(t.n|=tn,n=!Cf(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Pt(t,e,n,i,r,s){const o=Ro.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Aa(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),Jn(t)&&a.push(o.get(Do)));break;case"delete":H(t)||(a.push(o.get(Nn)),Jn(t)&&a.push(o.get(Do)));break;case"set":Jn(t)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&Mo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Mo(ka(l))}}function Mo(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&rc(i);for(const i of n)i.computed||rc(i)}function rc(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Om=Ia("__proto__,__v_isRef,__isVue"),Sf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sa)),Rm=Oa(),Pm=Oa(!1,!0),Dm=Oa(!0),sc=Mm();function Mm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Z(this);for(let s=0,o=this.length;s<o;s++)et(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pi();const i=Z(this)[e].apply(this,n);return mi(),i}}),t}function Oa(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Xm:Rf:e?Of:Nf).get(i))return i;const o=H(i);if(!t&&o&&Q(sc,r))return Reflect.get(sc,r,s);const a=Reflect.get(i,r,s);return(Sa(r)?Sf.has(r):Om(r))||(t||et(i,"get",r),e)?a:Ne(a)?o&&Aa(r)?a:a.value:he(a)?t?Pf(a):Ss(a):a}}const Lm=Af(),Fm=Af(!0);function Af(t=!1){return function(n,i,r,s){let o=n[i];if(oi(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&(!qr(r)&&!oi(r)&&(o=Z(o),r=Z(r)),!H(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=H(n)&&Aa(i)?Number(i)<n.length:Q(n,i),l=Reflect.set(n,i,r,s);return n===Z(s)&&(a?ji(r,o)&&Pt(n,"set",i,r):Pt(n,"add",i,r)),l}}function $m(t,e){const n=Q(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Pt(t,"delete",e,void 0),i}function Bm(t,e){const n=Reflect.has(t,e);return(!Sa(e)||!Sf.has(e))&&et(t,"has",e),n}function Hm(t){return et(t,"iterate",H(t)?"length":Nn),Reflect.ownKeys(t)}const kf={get:Rm,set:Lm,deleteProperty:$m,has:Bm,ownKeys:Hm},jm={get:Dm,set(t,e){return!0},deleteProperty(t,e){return!0}},Um=Oe({},kf,{get:Pm,set:Fm}),Ra=t=>t,Ts=t=>Reflect.getPrototypeOf(t);function Cr(t,e,n=!1,i=!1){t=t.__v_raw;const r=Z(t),s=Z(e);n||(e!==s&&et(r,"get",e),et(r,"get",s));const{has:o}=Ts(r),a=i?Ra:n?Ma:Ui;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ir(t,e=!1){const n=this.__v_raw,i=Z(n),r=Z(t);return e||(t!==r&&et(i,"has",t),et(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function xr(t,e=!1){return t=t.__v_raw,!e&&et(Z(t),"iterate",Nn),Reflect.get(t,"size",t)}function oc(t){t=Z(t);const e=Z(this);return Ts(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function ac(t,e){e=Z(e);const n=Z(this),{has:i,get:r}=Ts(n);let s=i.call(n,t);s||(t=Z(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ji(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function lc(t){const e=Z(this),{has:n,get:i}=Ts(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Pt(e,"delete",t,void 0),s}function cc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function Tr(t,e){return function(i,r){const s=this,o=s.__v_raw,a=Z(o),l=e?Ra:t?Ma:Ui;return!t&&et(a,"iterate",Nn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Sr(t,e,n){return function(...i){const r=this.__v_raw,s=Z(r),o=Jn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ra:e?Ma:Ui;return!e&&et(s,"iterate",l?Do:Nn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function Wm(){const t={get(s){return Cr(this,s)},get size(){return xr(this)},has:Ir,add:oc,set:ac,delete:lc,clear:cc,forEach:Tr(!1,!1)},e={get(s){return Cr(this,s,!1,!0)},get size(){return xr(this)},has:Ir,add:oc,set:ac,delete:lc,clear:cc,forEach:Tr(!1,!0)},n={get(s){return Cr(this,s,!0)},get size(){return xr(this,!0)},has(s){return Ir.call(this,s,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Tr(!0,!1)},i={get(s){return Cr(this,s,!0,!0)},get size(){return xr(this,!0)},has(s){return Ir.call(this,s,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Sr(s,!1,!1),n[s]=Sr(s,!0,!1),e[s]=Sr(s,!1,!0),i[s]=Sr(s,!0,!0)}),[t,n,e,i]}const[zm,Vm,qm,Ym]=Wm();function Pa(t,e){const n=e?t?Ym:qm:t?Vm:zm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Q(n,r)&&r in i?n:i,r,s)}const Gm={get:Pa(!1,!1)},Km={get:Pa(!1,!0)},Qm={get:Pa(!0,!1)},Nf=new WeakMap,Of=new WeakMap,Rf=new WeakMap,Xm=new WeakMap;function Jm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Jm(wm(t))}function Ss(t){return oi(t)?t:Da(t,!1,kf,Gm,Nf)}function eg(t){return Da(t,!1,Um,Km,Of)}function Pf(t){return Da(t,!0,jm,Qm,Rf)}function Da(t,e,n,i,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Zm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Zn(t){return oi(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function oi(t){return!!(t&&t.__v_isReadonly)}function qr(t){return!!(t&&t.__v_isShallow)}function Df(t){return Zn(t)||oi(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Mf(t){return Vr(t,"__v_skip",!0),t}const Ui=t=>he(t)?Ss(t):t,Ma=t=>he(t)?Pf(t):t;function Lf(t){Kt&&ct&&(t=Z(t),Tf(t.dep||(t.dep=ka())))}function Ff(t,e){t=Z(t),t.dep&&Mo(t.dep)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Gt(t){return tg(t,!1)}function tg(t,e){return Ne(t)?t:new ng(t,e)}class ng{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Ui(e)}get value(){return Lf(this),this._value}set value(e){const n=this.__v_isShallow||qr(e)||oi(e);e=n?e:Z(e),ji(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ui(e),Ff(this))}}function rt(t){return Ne(t)?t.value:t}const ig={get:(t,e,n)=>rt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function $f(t){return Zn(t)?t:new Proxy(t,ig)}var Bf;class rg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Bf]=!1,this._dirty=!0,this.effect=new Na(e,()=>{this._dirty||(this._dirty=!0,Ff(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Z(this);return Lf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Bf="__v_isReadonly";function sg(t,e,n=!1){let i,r;const s=W(t);return s?(i=t,r=gt):(i=t.get,r=t.set),new rg(i,r,s||!r,n)}function Qt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){As(s,e,n)}return r}function st(t,e,n,i){if(W(t)){const s=Qt(t,e,n,i);return s&&yf(s)&&s.catch(o=>{As(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(st(t[s],e,n,i));return r}function As(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Qt(l,null,10,[t,o,a]);return}}og(t,n,r,i)}function og(t,e,n,i=!0){console.error(t)}let Wi=!1,Lo=!1;const Fe=[];let Et=0;const ei=[];let Nt=null,En=0;const Hf=Promise.resolve();let La=null;function ag(t){const e=La||Hf;return t?e.then(this?t.bind(this):t):e}function lg(t){let e=Et+1,n=Fe.length;for(;e<n;){const i=e+n>>>1;zi(Fe[i])<t?e=i+1:n=i}return e}function Fa(t){(!Fe.length||!Fe.includes(t,Wi&&t.allowRecurse?Et+1:Et))&&(t.id==null?Fe.push(t):Fe.splice(lg(t.id),0,t),jf())}function jf(){!Wi&&!Lo&&(Lo=!0,La=Hf.then(Wf))}function cg(t){const e=Fe.indexOf(t);e>Et&&Fe.splice(e,1)}function ug(t){H(t)?ei.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?En+1:En))&&ei.push(t),jf()}function uc(t,e=Wi?Et+1:0){for(;e<Fe.length;e++){const n=Fe[e];n&&n.pre&&(Fe.splice(e,1),e--,n())}}function Uf(t){if(ei.length){const e=[...new Set(ei)];if(ei.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,i)=>zi(n)-zi(i)),En=0;En<Nt.length;En++)Nt[En]();Nt=null,En=0}}const zi=t=>t.id==null?1/0:t.id,fg=(t,e)=>{const n=zi(t)-zi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wf(t){Lo=!1,Wi=!0,Fe.sort(fg);const e=gt;try{for(Et=0;Et<Fe.length;Et++){const n=Fe[Et];n&&n.active!==!1&&Qt(n,null,14)}}finally{Et=0,Fe.length=0,Uf(),Wi=!1,La=null,(Fe.length||ei.length)&&Wf()}}function dg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ae;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ae;d&&(r=n.map(m=>m.trim())),f&&(r=n.map(Ef))}let a,l=i[a=no(e)]||i[a=no(Tt(e))];!l&&s&&(l=i[a=no(hi(e))]),l&&st(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(c,t,6,r)}}function zf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=zf(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(he(t)&&i.set(t,null),null):(H(s)?s.forEach(l=>o[l]=null):Oe(o,s),he(t)&&i.set(t,o),o)}function ks(t,e){return!t||!Es(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,hi(e))||Q(t,e))}let He=null,Ns=null;function Yr(t){const e=He;return He=t,Ns=t&&t.type.__scopeId||null,e}function $a(t){Ns=t}function Ba(){Ns=null}function Me(t,e=He,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&wc(-1);const s=Yr(e),o=t(...r);return Yr(s),i._d&&wc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ro(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:E}=t;let N,b;const S=Yr(t);try{if(n.shapeFlag&4){const B=r||i;N=wt(u.call(B,B,f,s,m,d,_)),b=l}else{const B=e;N=wt(B.length>1?B(s,{attrs:l,slots:a,emit:c}):B(s,null)),b=e.props?l:hg(l)}}catch(B){Oi.length=0,As(B,t,1),N=z(ot)}let D=N;if(b&&E!==!1){const B=Object.keys(b),{shapeFlag:Y}=D;B.length&&Y&7&&(o&&B.some(xa)&&(b=pg(b,o)),D=rn(D,b))}return n.dirs&&(D=rn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),N=D,Yr(S),N}const hg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Es(n))&&((e||(e={}))[n]=t[n]);return e},pg=(t,e)=>{const n={};for(const i in t)(!xa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function mg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?fc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ks(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?fc(i,o,c):!0:!!o;return!1}function fc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ks(n,s))return!0}return!1}function gg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _g=t=>t.__isSuspense;function vg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):ug(t)}function yg(t,e){if(ke){let n=ke.provides;const i=ke.parent&&ke.parent.provides;i===n&&(n=ke.provides=Object.create(i)),n[t]=e}}function so(t,e,n=!1){const i=ke||He;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(i.proxy):e}}const dc={};function ti(t,e,n){return Vf(t,e,n)}function Vf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ae){const a=ke;let l,c=!1,u=!1;if(Ne(t)?(l=()=>t.value,c=qr(t)):Zn(t)?(l=()=>t,i=!0):H(t)?(u=!0,c=t.some(b=>Zn(b)||qr(b)),l=()=>t.map(b=>{if(Ne(b))return b.value;if(Zn(b))return Yn(b);if(W(b))return Qt(b,a,2)})):W(t)?e?l=()=>Qt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),st(t,a,3,[d])}:l=gt,e&&i){const b=l;l=()=>Yn(b())}let f,d=b=>{f=N.onStop=()=>{Qt(b,a,4)}};if(Gi)return d=gt,e?n&&st(e,a,3,[l(),u?[]:void 0,d]):l(),gt;let m=u?[]:dc;const _=()=>{if(!!N.active)if(e){const b=N.run();(i||c||(u?b.some((S,D)=>ji(S,m[D])):ji(b,m)))&&(f&&f(),st(e,a,3,[b,m===dc?void 0:m,d]),m=b)}else N.run()};_.allowRecurse=!!e;let E;r==="sync"?E=_:r==="post"?E=()=>We(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),E=()=>Fa(_));const N=new Na(l,E);return e?n?_():m=N.run():r==="post"?We(N.run.bind(N),a&&a.suspense):N.run(),()=>{N.stop(),a&&a.scope&&Ta(a.scope.effects,N)}}function bg(t,e,n){const i=this.proxy,r=Ce(t)?t.includes(".")?qf(i,t):()=>i[t]:t.bind(i,i);let s;W(e)?s=e:(s=e.handler,n=e);const o=ke;ai(this);const a=Vf(r,s.bind(i),n);return o?ai(o):On(),a}function qf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Yn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))Yn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(vf(t)||Jn(t))t.forEach(n=>{Yn(n,e)});else if(wf(t))for(const n in t)Yn(t[n],e);return t}function Yf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ps(()=>{t.isMounted=!0}),Xf(()=>{t.isUnmounting=!0}),t}const nt=[Function,Array],wg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},setup(t,{slots:e}){const n=hd(),i=Yf();let r;return()=>{const s=e.default&&Ha(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const E of s)if(E.type!==ot){o=E;break}}const a=Z(t),{mode:l}=a;if(i.isLeaving)return oo(o);const c=hc(o);if(!c)return oo(o);const u=Vi(c,a,i,n);qi(c,u);const f=n.subTree,d=f&&hc(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const E=_();r===void 0?r=E:E!==r&&(r=E,m=!0)}if(d&&d.type!==ot&&(!Cn(c,d)||m)){const E=Vi(d,a,i,n);if(qi(d,E),l==="out-in")return i.isLeaving=!0,E.afterLeave=()=>{i.isLeaving=!1,n.update()},oo(o);l==="in-out"&&c.type!==ot&&(E.delayLeave=(N,b,S)=>{const D=Gf(i,d);D[String(d.key)]=d,N._leaveCb=()=>{b(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Eg=wg;function Gf(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Vi(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:E,onAppear:N,onAfterAppear:b,onAppearCancelled:S}=e,D=String(t.key),B=Gf(n,t),Y=(U,ee)=>{U&&st(U,i,9,ee)},be=(U,ee)=>{const ne=ee[1];Y(U,ee),H(U)?U.every(Pe=>Pe.length<=1)&&ne():U.length<=1&&ne()},me={mode:s,persisted:o,beforeEnter(U){let ee=a;if(!n.isMounted)if(r)ee=E||a;else return;U._leaveCb&&U._leaveCb(!0);const ne=B[D];ne&&Cn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),Y(ee,[U])},enter(U){let ee=l,ne=c,Pe=u;if(!n.isMounted)if(r)ee=N||l,ne=b||c,Pe=S||u;else return;let M=!1;const pe=U._enterCb=Ye=>{M||(M=!0,Ye?Y(Pe,[U]):Y(ne,[U]),me.delayedLeave&&me.delayedLeave(),U._enterCb=void 0)};ee?be(ee,[U,pe]):pe()},leave(U,ee){const ne=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ee();Y(f,[U]);let Pe=!1;const M=U._leaveCb=pe=>{Pe||(Pe=!0,ee(),pe?Y(_,[U]):Y(m,[U]),U._leaveCb=void 0,B[ne]===t&&delete B[ne])};B[ne]=t,d?be(d,[U,M]):M()},clone(U){return Vi(U,e,n,i)}};return me}function oo(t){if(Os(t))return t=rn(t),t.children=null,t}function hc(t){return Os(t)?t.children?t.children[0]:void 0:t}function qi(t,e){t.shapeFlag&6&&t.component?qi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ha(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Re?(o.patchFlag&128&&r++,i=i.concat(Ha(o.children,e,a))):(e||o.type!==ot)&&i.push(a!=null?rn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function $e(t){return W(t)?{setup:t,name:t.name}:t}const Ni=t=>!!t.type.__asyncLoader,Os=t=>t.type.__isKeepAlive;function Cg(t,e){Kf(t,"a",e)}function Ig(t,e){Kf(t,"da",e)}function Kf(t,e,n=ke){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Rs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Os(r.parent.vnode)&&xg(i,e,n,r),r=r.parent}}function xg(t,e,n,i){const r=Rs(e,t,i,!0);Jf(()=>{Ta(i[e],r)},n)}function Rs(t,e,n=ke,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pi(),ai(n);const a=st(e,n,t,o);return On(),mi(),a});return i?r.unshift(s):r.push(s),s}}const Bt=t=>(e,n=ke)=>(!Gi||t==="sp")&&Rs(t,(...i)=>e(...i),n),Tg=Bt("bm"),Ps=Bt("m"),Sg=Bt("bu"),Qf=Bt("u"),Xf=Bt("bum"),Jf=Bt("um"),Ag=Bt("sp"),kg=Bt("rtg"),Ng=Bt("rtc");function Og(t,e=ke){Rs("ec",t,e)}function gn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(pi(),st(l,n,8,[t.el,a,t,e]),mi())}}const ja="components";function nn(t,e){return ed(ja,t,!0,e)||t}const Zf=Symbol();function Rg(t){return Ce(t)?ed(ja,t,!1)||t:t||Zf}function ed(t,e,n=!0,i=!1){const r=He||ke;if(r){const s=r.type;if(t===ja){const a=a_(s,!1);if(a&&(a===e||a===Tt(e)||a===xs(Tt(e))))return s}const o=pc(r[t]||s[t],e)||pc(r.appContext[t],e);return!o&&i?s:o}}function pc(t,e){return t&&(t[e]||t[Tt(e)]||t[xs(Tt(e))])}function Ua(t,e,n,i){let r;const s=n&&n[i];if(H(t)||Ce(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function it(t,e,n={},i,r){if(He.isCE||He.parent&&Ni(He.parent)&&He.parent.isCE)return z("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),X();const o=s&&td(s(n)),a=Pn(Re,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function td(t){return t.some(e=>Qr(e)?!(e.type===ot||e.type===Re&&!td(e.children)):!0)?t:null}const Fo=t=>t?pd(t)?Ya(t)||t.proxy:Fo(t.parent):null,Gr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fo(t.parent),$root:t=>Fo(t.root),$emit:t=>t.emit,$options:t=>Wa(t),$forceUpdate:t=>t.f||(t.f=()=>Fa(t.update)),$nextTick:t=>t.n||(t.n=ag.bind(t.proxy)),$watch:t=>bg.bind(t)}),Pg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==ae&&Q(i,e))return o[e]=1,i[e];if(r!==ae&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,s[e];if(n!==ae&&Q(n,e))return o[e]=4,n[e];$o&&(o[e]=0)}}const u=Gr[e];let f,d;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ae&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==ae&&Q(r,e)?(r[e]=n,!0):i!==ae&&Q(i,e)?(i[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ae&&Q(t,o)||e!==ae&&Q(e,o)||(a=s[0])&&Q(a,o)||Q(i,o)||Q(Gr,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $o=!0;function Dg(t){const e=Wa(t),n=t.proxy,i=t.ctx;$o=!1,e.beforeCreate&&mc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:E,deactivated:N,beforeDestroy:b,beforeUnmount:S,destroyed:D,unmounted:B,render:Y,renderTracked:be,renderTriggered:me,errorCaptured:U,serverPrefetch:ee,expose:ne,inheritAttrs:Pe,components:M,directives:pe,filters:Ye}=e;if(c&&Mg(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const re=o[ge];W(re)&&(i[ge]=re.bind(n))}if(r){const ge=r.call(n,n);he(ge)&&(t.data=Ss(ge))}if($o=!0,s)for(const ge in s){const re=s[ge],pn=W(re)?re.bind(n,n):W(re.get)?re.get.bind(n,n):gt,wr=!W(re)&&W(re.set)?re.set.bind(n):gt,mn=Qe({get:pn,set:wr});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>mn.value,set:vt=>mn.value=vt})}if(a)for(const ge in a)nd(a[ge],i,n,ge);if(l){const ge=W(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(re=>{yg(re,ge[re])})}u&&mc(u,t,"c");function xe(ge,re){H(re)?re.forEach(pn=>ge(pn.bind(n))):re&&ge(re.bind(n))}if(xe(Tg,f),xe(Ps,d),xe(Sg,m),xe(Qf,_),xe(Cg,E),xe(Ig,N),xe(Og,U),xe(Ng,be),xe(kg,me),xe(Xf,S),xe(Jf,B),xe(Ag,ee),H(ne))if(ne.length){const ge=t.exposed||(t.exposed={});ne.forEach(re=>{Object.defineProperty(ge,re,{get:()=>n[re],set:pn=>n[re]=pn})})}else t.exposed||(t.exposed={});Y&&t.render===gt&&(t.render=Y),Pe!=null&&(t.inheritAttrs=Pe),M&&(t.components=M),pe&&(t.directives=pe)}function Mg(t,e,n=gt,i=!1){H(t)&&(t=Bo(t));for(const r in t){const s=t[r];let o;he(s)?"default"in s?o=so(s.from||r,s.default,!0):o=so(s.from||r):o=so(s),Ne(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function mc(t,e,n){st(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function nd(t,e,n,i){const r=i.includes(".")?qf(n,i):()=>n[i];if(Ce(t)){const s=e[t];W(s)&&ti(r,s)}else if(W(t))ti(r,t.bind(n));else if(he(t))if(H(t))t.forEach(s=>nd(s,e,n,i));else{const s=W(t.handler)?t.handler.bind(n):e[t.handler];W(s)&&ti(r,s,t)}}function Wa(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Kr(l,c,o,!0)),Kr(l,e,o)),he(e)&&s.set(e,l),l}function Kr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Kr(t,s,n,!0),r&&r.forEach(o=>Kr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lg={data:gc,props:yn,emits:yn,methods:yn,computed:yn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:yn,directives:yn,watch:$g,provide:gc,inject:Fg};function gc(t,e){return e?t?function(){return Oe(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Fg(t,e){return yn(Bo(t),Bo(e))}function Bo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function $g(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const i in e)n[i]=Be(t[i],e[i]);return n}function Bg(t,e,n,i=!1){const r={},s={};Vr(s,Ds,1),t.propsDefaults=Object.create(null),id(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:eg(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Hg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ks(t.emitsOptions,d))continue;const m=e[d];if(l)if(Q(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const _=Tt(d);r[_]=Ho(l,a,_,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{id(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=hi(f))===f||!Q(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ho(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Q(e,f)&&!0)&&(delete s[f],c=!0)}c&&Pt(t,"set","$attrs")}function id(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;r&&Q(r,u=Tt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ks(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Z(n),c=a||ae;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ho(r,l,f,c[f],t,!Q(c,f))}}return o}function Ho(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(ai(r),i=c[n]=l.call(null,e),On())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===hi(n))&&(i=!0))}return i}function rd(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!W(t)){const u=f=>{l=!0;const[d,m]=rd(f,e,!0);Oe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return he(t)&&i.set(t,Xn),Xn;if(H(s))for(let u=0;u<s.length;u++){const f=Tt(s[u]);_c(f)&&(o[f]=ae)}else if(s)for(const u in s){const f=Tt(u);if(_c(f)){const d=s[u],m=o[f]=H(d)||W(d)?{type:d}:d;if(m){const _=bc(Boolean,m.type),E=bc(String,m.type);m[0]=_>-1,m[1]=E<0||_<E,(_>-1||Q(m,"default"))&&a.push(f)}}}const c=[o,a];return he(t)&&i.set(t,c),c}function _c(t){return t[0]!=="$"}function vc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function yc(t,e){return vc(t)===vc(e)}function bc(t,e){return H(e)?e.findIndex(n=>yc(n,t)):W(e)&&yc(e,t)?0:-1}const sd=t=>t[0]==="_"||t==="$stable",za=t=>H(t)?t.map(wt):[wt(t)],jg=(t,e,n)=>{if(e._n)return e;const i=Me((...r)=>za(e(...r)),n);return i._c=!1,i},od=(t,e,n)=>{const i=t._ctx;for(const r in t){if(sd(r))continue;const s=t[r];if(W(s))e[r]=jg(r,s,i);else if(s!=null){const o=za(s);e[r]=()=>o}}},ad=(t,e)=>{const n=za(e);t.slots.default=()=>n},Ug=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Vr(e,"_",n)):od(e,t.slots={})}else t.slots={},e&&ad(t,e);Vr(t.slots,Ds,1)},Wg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ae;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Oe(r,e),!n&&a===1&&delete r._):(s=!e.$stable,od(e,r)),o=e}else e&&(ad(t,e),o={default:1});if(s)for(const a in r)!sd(a)&&!(a in o)&&delete r[a]};function ld(){return{app:null,config:{isNativeTag:vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zg=0;function Vg(t,e){return function(i,r=null){W(i)||(i=Object.assign({},i)),r!=null&&!he(r)&&(r=null);const s=ld(),o=new Set;let a=!1;const l=s.app={_uid:zg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:c_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=z(i,r);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ya(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function jo(t,e,n,i,r=!1){if(H(t)){t.forEach((d,m)=>jo(d,e&&(H(e)?e[m]:e),n,i,r));return}if(Ni(i)&&!r)return;const s=i.shapeFlag&4?Ya(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):Ne(c)&&(c.value=null)),W(l))Qt(l,a,12,[o,u]);else{const d=Ce(l),m=Ne(l);if(d||m){const _=()=>{if(t.f){const E=d?u[l]:l.value;r?H(E)&&Ta(E,s):H(E)?E.includes(s)||E.push(s):d?(u[l]=[s],Q(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,We(_,n)):_()}}}const We=vg;function qg(t){return Yg(t)}function Yg(t,e){const n=Im();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=gt,insertStaticContent:_}=t,E=(h,p,g,y=null,v=null,x=null,A=!1,C=null,T=!!p.dynamicChildren)=>{if(h===p)return;h&&!Cn(h,p)&&(y=Er(h),vt(h,v,x,!0),h=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:O}=p;switch(w){case Va:N(h,p,g,y);break;case ot:b(h,p,g,y);break;case ao:h==null&&S(p,g,y,A);break;case Re:M(h,p,g,y,v,x,A,C,T);break;default:O&1?Y(h,p,g,y,v,x,A,C,T):O&6?pe(h,p,g,y,v,x,A,C,T):(O&64||O&128)&&w.process(h,p,g,y,v,x,A,C,T,zn)}L!=null&&v&&jo(L,h&&h.ref,x,p||h,!p)},N=(h,p,g,y)=>{if(h==null)i(p.el=a(p.children),g,y);else{const v=p.el=h.el;p.children!==h.children&&c(v,p.children)}},b=(h,p,g,y)=>{h==null?i(p.el=l(p.children||""),g,y):p.el=h.el},S=(h,p,g,y)=>{[h.el,h.anchor]=_(h.children,p,g,y,h.el,h.anchor)},D=({el:h,anchor:p},g,y)=>{let v;for(;h&&h!==p;)v=d(h),i(h,g,y),h=v;i(p,g,y)},B=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),r(h),h=g;r(p)},Y=(h,p,g,y,v,x,A,C,T)=>{A=A||p.type==="svg",h==null?be(p,g,y,v,x,A,C,T):ee(h,p,v,x,A,C,T)},be=(h,p,g,y,v,x,A,C)=>{let T,w;const{type:L,props:O,shapeFlag:F,transition:j,dirs:G}=h;if(T=h.el=o(h.type,x,O&&O.is,O),F&8?u(T,h.children):F&16&&U(h.children,T,null,y,v,x&&L!=="foreignObject",A,C),G&&gn(h,null,y,"created"),O){for(const te in O)te!=="value"&&!jr(te)&&s(T,te,null,O[te],x,h.children,y,v,At);"value"in O&&s(T,"value",null,O.value),(w=O.onVnodeBeforeMount)&&bt(w,y,h)}me(T,h,h.scopeId,A,y),G&&gn(h,null,y,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;se&&j.beforeEnter(T),i(T,p,g),((w=O&&O.onVnodeMounted)||se||G)&&We(()=>{w&&bt(w,y,h),se&&j.enter(T),G&&gn(h,null,y,"mounted")},v)},me=(h,p,g,y,v)=>{if(g&&m(h,g),y)for(let x=0;x<y.length;x++)m(h,y[x]);if(v){let x=v.subTree;if(p===x){const A=v.vnode;me(h,A,A.scopeId,A.slotScopeIds,v.parent)}}},U=(h,p,g,y,v,x,A,C,T=0)=>{for(let w=T;w<h.length;w++){const L=h[w]=C?Yt(h[w]):wt(h[w]);E(null,L,p,g,y,v,x,A,C)}},ee=(h,p,g,y,v,x,A)=>{const C=p.el=h.el;let{patchFlag:T,dynamicChildren:w,dirs:L}=p;T|=h.patchFlag&16;const O=h.props||ae,F=p.props||ae;let j;g&&_n(g,!1),(j=F.onVnodeBeforeUpdate)&&bt(j,g,p,h),L&&gn(p,h,g,"beforeUpdate"),g&&_n(g,!0);const G=v&&p.type!=="foreignObject";if(w?ne(h.dynamicChildren,w,C,g,y,G,x):A||re(h,p,C,null,g,y,G,x,!1),T>0){if(T&16)Pe(C,p,O,F,g,y,v);else if(T&2&&O.class!==F.class&&s(C,"class",null,F.class,v),T&4&&s(C,"style",O.style,F.style,v),T&8){const se=p.dynamicProps;for(let te=0;te<se.length;te++){const ye=se[te],lt=O[ye],Vn=F[ye];(Vn!==lt||ye==="value")&&s(C,ye,lt,Vn,v,h.children,g,y,At)}}T&1&&h.children!==p.children&&u(C,p.children)}else!A&&w==null&&Pe(C,p,O,F,g,y,v);((j=F.onVnodeUpdated)||L)&&We(()=>{j&&bt(j,g,p,h),L&&gn(p,h,g,"updated")},y)},ne=(h,p,g,y,v,x,A)=>{for(let C=0;C<p.length;C++){const T=h[C],w=p[C],L=T.el&&(T.type===Re||!Cn(T,w)||T.shapeFlag&70)?f(T.el):g;E(T,w,L,null,y,v,x,A,!0)}},Pe=(h,p,g,y,v,x,A)=>{if(g!==y){if(g!==ae)for(const C in g)!jr(C)&&!(C in y)&&s(h,C,g[C],null,A,p.children,v,x,At);for(const C in y){if(jr(C))continue;const T=y[C],w=g[C];T!==w&&C!=="value"&&s(h,C,w,T,A,p.children,v,x,At)}"value"in y&&s(h,"value",g.value,y.value)}},M=(h,p,g,y,v,x,A,C,T)=>{const w=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:j}=p;j&&(C=C?C.concat(j):j),h==null?(i(w,g,y),i(L,g,y),U(p.children,g,L,v,x,A,C,T)):O>0&&O&64&&F&&h.dynamicChildren?(ne(h.dynamicChildren,F,g,v,x,A,C),(p.key!=null||v&&p===v.subTree)&&cd(h,p,!0)):re(h,p,g,L,v,x,A,C,T)},pe=(h,p,g,y,v,x,A,C,T)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?v.ctx.activate(p,g,y,A,T):Ye(p,g,y,v,x,A,T):wi(h,p,T)},Ye=(h,p,g,y,v,x,A)=>{const C=h.component=n_(h,y,v);if(Os(h)&&(C.ctx.renderer=zn),i_(C),C.asyncDep){if(v&&v.registerDep(C,xe),!h.el){const T=C.subTree=z(ot);b(null,T,p,g)}return}xe(C,h,p,g,v,x,A)},wi=(h,p,g)=>{const y=p.component=h.component;if(mg(h,p,g))if(y.asyncDep&&!y.asyncResolved){ge(y,p,g);return}else y.next=p,cg(y.update),y.update();else p.el=h.el,y.vnode=p},xe=(h,p,g,y,v,x,A)=>{const C=()=>{if(h.isMounted){let{next:L,bu:O,u:F,parent:j,vnode:G}=h,se=L,te;_n(h,!1),L?(L.el=G.el,ge(h,L,A)):L=G,O&&io(O),(te=L.props&&L.props.onVnodeBeforeUpdate)&&bt(te,j,L,G),_n(h,!0);const ye=ro(h),lt=h.subTree;h.subTree=ye,E(lt,ye,f(lt.el),Er(lt),h,v,x),L.el=ye.el,se===null&&gg(h,ye.el),F&&We(F,v),(te=L.props&&L.props.onVnodeUpdated)&&We(()=>bt(te,j,L,G),v)}else{let L;const{el:O,props:F}=p,{bm:j,m:G,parent:se}=h,te=Ni(p);if(_n(h,!1),j&&io(j),!te&&(L=F&&F.onVnodeBeforeMount)&&bt(L,se,p),_n(h,!0),O&&to){const ye=()=>{h.subTree=ro(h),to(O,h.subTree,h,v,null)};te?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ye()):ye()}else{const ye=h.subTree=ro(h);E(null,ye,g,y,h,v,x),p.el=ye.el}if(G&&We(G,v),!te&&(L=F&&F.onVnodeMounted)){const ye=p;We(()=>bt(L,se,ye),v)}(p.shapeFlag&256||se&&Ni(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&We(h.a,v),h.isMounted=!0,p=g=y=null}},T=h.effect=new Na(C,()=>Fa(w),h.scope),w=h.update=()=>T.run();w.id=h.uid,_n(h,!0),w()},ge=(h,p,g)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,Hg(h,p.props,y,g),Wg(h,p.children,g),pi(),uc(),mi()},re=(h,p,g,y,v,x,A,C,T=!1)=>{const w=h&&h.children,L=h?h.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:j}=p;if(F>0){if(F&128){wr(w,O,g,y,v,x,A,C,T);return}else if(F&256){pn(w,O,g,y,v,x,A,C,T);return}}j&8?(L&16&&At(w,v,x),O!==w&&u(g,O)):L&16?j&16?wr(w,O,g,y,v,x,A,C,T):At(w,v,x,!0):(L&8&&u(g,""),j&16&&U(O,g,y,v,x,A,C,T))},pn=(h,p,g,y,v,x,A,C,T)=>{h=h||Xn,p=p||Xn;const w=h.length,L=p.length,O=Math.min(w,L);let F;for(F=0;F<O;F++){const j=p[F]=T?Yt(p[F]):wt(p[F]);E(h[F],j,g,null,v,x,A,C,T)}w>L?At(h,v,x,!0,!1,O):U(p,g,y,v,x,A,C,T,O)},wr=(h,p,g,y,v,x,A,C,T)=>{let w=0;const L=p.length;let O=h.length-1,F=L-1;for(;w<=O&&w<=F;){const j=h[w],G=p[w]=T?Yt(p[w]):wt(p[w]);if(Cn(j,G))E(j,G,g,null,v,x,A,C,T);else break;w++}for(;w<=O&&w<=F;){const j=h[O],G=p[F]=T?Yt(p[F]):wt(p[F]);if(Cn(j,G))E(j,G,g,null,v,x,A,C,T);else break;O--,F--}if(w>O){if(w<=F){const j=F+1,G=j<L?p[j].el:y;for(;w<=F;)E(null,p[w]=T?Yt(p[w]):wt(p[w]),g,G,v,x,A,C,T),w++}}else if(w>F)for(;w<=O;)vt(h[w],v,x,!0),w++;else{const j=w,G=w,se=new Map;for(w=G;w<=F;w++){const Ge=p[w]=T?Yt(p[w]):wt(p[w]);Ge.key!=null&&se.set(Ge.key,w)}let te,ye=0;const lt=F-G+1;let Vn=!1,Zl=0;const Ei=new Array(lt);for(w=0;w<lt;w++)Ei[w]=0;for(w=j;w<=O;w++){const Ge=h[w];if(ye>=lt){vt(Ge,v,x,!0);continue}let yt;if(Ge.key!=null)yt=se.get(Ge.key);else for(te=G;te<=F;te++)if(Ei[te-G]===0&&Cn(Ge,p[te])){yt=te;break}yt===void 0?vt(Ge,v,x,!0):(Ei[yt-G]=w+1,yt>=Zl?Zl=yt:Vn=!0,E(Ge,p[yt],g,null,v,x,A,C,T),ye++)}const ec=Vn?Gg(Ei):Xn;for(te=ec.length-1,w=lt-1;w>=0;w--){const Ge=G+w,yt=p[Ge],tc=Ge+1<L?p[Ge+1].el:y;Ei[w]===0?E(null,yt,g,tc,v,x,A,C,T):Vn&&(te<0||w!==ec[te]?mn(yt,g,tc,2):te--)}}},mn=(h,p,g,y,v=null)=>{const{el:x,type:A,transition:C,children:T,shapeFlag:w}=h;if(w&6){mn(h.component.subTree,p,g,y);return}if(w&128){h.suspense.move(p,g,y);return}if(w&64){A.move(h,p,g,zn);return}if(A===Re){i(x,p,g);for(let O=0;O<T.length;O++)mn(T[O],p,g,y);i(h.anchor,p,g);return}if(A===ao){D(h,p,g);return}if(y!==2&&w&1&&C)if(y===0)C.beforeEnter(x),i(x,p,g),We(()=>C.enter(x),v);else{const{leave:O,delayLeave:F,afterLeave:j}=C,G=()=>i(x,p,g),se=()=>{O(x,()=>{G(),j&&j()})};F?F(x,G,se):se()}else i(x,p,g)},vt=(h,p,g,y=!1,v=!1)=>{const{type:x,props:A,ref:C,children:T,dynamicChildren:w,shapeFlag:L,patchFlag:O,dirs:F}=h;if(C!=null&&jo(C,null,g,h,!0),L&256){p.ctx.deactivate(h);return}const j=L&1&&F,G=!Ni(h);let se;if(G&&(se=A&&A.onVnodeBeforeUnmount)&&bt(se,p,h),L&6)dm(h.component,g,y);else{if(L&128){h.suspense.unmount(g,y);return}j&&gn(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,g,v,zn,y):w&&(x!==Re||O>0&&O&64)?At(w,p,g,!1,!0):(x===Re&&O&384||!v&&L&16)&&At(T,p,g),y&&Xl(h)}(G&&(se=A&&A.onVnodeUnmounted)||j)&&We(()=>{se&&bt(se,p,h),j&&gn(h,null,p,"unmounted")},g)},Xl=h=>{const{type:p,el:g,anchor:y,transition:v}=h;if(p===Re){fm(g,y);return}if(p===ao){B(h);return}const x=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:C}=v,T=()=>A(g,x);C?C(h.el,x,T):T()}else x()},fm=(h,p)=>{let g;for(;h!==p;)g=d(h),r(h),h=g;r(p)},dm=(h,p,g)=>{const{bum:y,scope:v,update:x,subTree:A,um:C}=h;y&&io(y),v.stop(),x&&(x.active=!1,vt(A,h,p,g)),C&&We(C,p),We(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},At=(h,p,g,y=!1,v=!1,x=0)=>{for(let A=x;A<h.length;A++)vt(h[A],p,g,y,v)},Er=h=>h.shapeFlag&6?Er(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),Jl=(h,p,g)=>{h==null?p._vnode&&vt(p._vnode,null,null,!0):E(p._vnode||null,h,p,null,null,null,g),uc(),Uf(),p._vnode=h},zn={p:E,um:vt,m:mn,r:Xl,mt:Ye,mc:U,pc:re,pbc:ne,n:Er,o:t};let eo,to;return e&&([eo,to]=e(zn)),{render:Jl,hydrate:eo,createApp:Vg(Jl,eo)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cd(t,e,n=!1){const i=t.children,r=e.children;if(H(i)&&H(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Yt(r[s]),a.el=o.el),n||cd(o,a))}}function Gg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Kg=t=>t.__isTeleport,Re=Symbol(void 0),Va=Symbol(void 0),ot=Symbol(void 0),ao=Symbol(void 0),Oi=[];let dt=null;function X(t=!1){Oi.push(dt=t?null:[])}function Qg(){Oi.pop(),dt=Oi[Oi.length-1]||null}let Yi=1;function wc(t){Yi+=t}function ud(t){return t.dynamicChildren=Yi>0?dt||Xn:null,Qg(),Yi>0&&dt&&dt.push(t),t}function ce(t,e,n,i,r,s){return ud(P(t,e,n,i,r,s,!0))}function Pn(t,e,n,i,r){return ud(z(t,e,n,i,r,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const Ds="__vInternal",fd=({key:t})=>t!=null?t:null,Ur=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||Ne(t)||W(t)?{i:He,r:t,k:e,f:!!n}:t:null;function P(t,e=null,n=null,i=0,r=null,s=t===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fd(e),ref:e&&Ur(e),scopeId:Ns,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(qa(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Yi>0&&!o&&dt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dt.push(l),l}const z=Xg;function Xg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Zf)&&(t=ot),Qr(t)){const a=rn(t,e,!0);return n&&qa(a,n),Yi>0&&!s&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag|=-2,a}if(l_(t)&&(t=t.__vccOpts),e){e=Jg(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Xe(a)),he(l)&&(Df(l)&&!H(l)&&(l=Oe({},l)),e.style=Hi(l))}const o=Ce(t)?1:_g(t)?128:Kg(t)?64:he(t)?4:W(t)?2:0;return P(t,e,n,i,r,o,s,!0)}function Jg(t){return t?Df(t)||Ds in t?Oe({},t):t:null}function rn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Zg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fd(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ur(e)):[r,Ur(e)]:Ur(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor}}function dd(t=" ",e=0){return z(Va,null,t,e)}function Ct(t="",e=!1){return e?(X(),Pn(ot,null,t)):z(ot,null,t)}function wt(t){return t==null||typeof t=="boolean"?z(ot):H(t)?z(Re,null,t.slice()):typeof t=="object"?Yt(t):z(Va,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rn(t)}function qa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ds in e)?e._ctx=He:r===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:He},n=32):(e=String(e),i&64?(n=16,e=[dd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xe([e.class,i.class]));else if(r==="style")e.style=Hi([e.style,i.style]);else if(Es(r)){const s=e[r],o=i[r];o&&s!==o&&!(H(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function bt(t,e,n,i=null){st(t,e,7,[n,i])}const e_=ld();let t_=0;function n_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||e_,s={uid:t_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rd(i,r),emitsOptions:zf(i,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dg.bind(null,s),t.ce&&t.ce(s),s}let ke=null;const hd=()=>ke||He,ai=t=>{ke=t,t.scope.on()},On=()=>{ke&&ke.scope.off(),ke=null};function pd(t){return t.vnode.shapeFlag&4}let Gi=!1;function i_(t,e=!1){Gi=e;const{props:n,children:i}=t.vnode,r=pd(t);Bg(t,n,r,e),Ug(t,i);const s=r?r_(t,e):void 0;return Gi=!1,s}function r_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mf(new Proxy(t.ctx,Pg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?o_(t):null;ai(t),pi();const s=Qt(i,t,0,[t.props,r]);if(mi(),On(),yf(s)){if(s.then(On,On),e)return s.then(o=>{Ec(t,o,e)}).catch(o=>{As(o,t,0)});t.asyncDep=s}else Ec(t,s,e)}else md(t,e)}function Ec(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=$f(e)),md(t,n)}let Cc;function md(t,e,n){const i=t.type;if(!t.render){if(!e&&Cc&&!i.render){const r=i.template||Wa(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Oe(Oe({isCustomElement:s,delimiters:a},o),l);i.render=Cc(r,c)}}t.render=i.render||gt}ai(t),pi(),Dg(t),mi(),On()}function s_(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function o_(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=s_(t))},slots:t.slots,emit:t.emit,expose:e}}function Ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($f(Mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gr)return Gr[n](t)}}))}function a_(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function l_(t){return W(t)&&"__vccOpts"in t}const Qe=(t,e)=>sg(t,e,Gi);function gd(t,e,n){const i=arguments.length;return i===2?he(e)&&!H(e)?Qr(e)?z(t,null,[e]):z(t,e):z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qr(n)&&(n=[n]),z(t,e,n))}const c_="3.2.40",u_="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,Ic=In&&In.createElement("template"),f_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?In.createElementNS(u_,t):In.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ic.innerHTML=i?`<svg>${t}</svg>`:t;const a=Ic.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function d_(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h_(t,e,n){const i=t.style,r=Ce(n);if(n&&!r){for(const s in n)Uo(i,s,n[s]);if(e&&!Ce(e))for(const s in e)n[s]==null&&Uo(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const xc=/\s*!important$/;function Uo(t,e,n){if(H(n))n.forEach(i=>Uo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=p_(t,e);xc.test(n)?t.setProperty(hi(i),n.replace(xc,""),"important"):t[i]=n}}const Tc=["Webkit","Moz","ms"],lo={};function p_(t,e){const n=lo[e];if(n)return n;let i=Tt(e);if(i!=="filter"&&i in t)return lo[e]=i;i=xs(i);for(let r=0;r<Tc.length;r++){const s=Tc[r]+i;if(s in t)return lo[e]=s}return e}const Sc="http://www.w3.org/1999/xlink";function m_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sc,e.slice(6,e.length)):t.setAttributeNS(Sc,e,n);else{const s=pm(e);n==null||s&&!gf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function g_(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[_d,__]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Wo=0;const v_=Promise.resolve(),y_=()=>{Wo=0},b_=()=>Wo||(v_.then(y_),Wo=_d());function w_(t,e,n,i){t.addEventListener(e,n,i)}function E_(t,e,n,i){t.removeEventListener(e,n,i)}function C_(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I_(e);if(i){const c=s[e]=x_(i,r);w_(t,a,c,l)}else o&&(E_(t,a,o,l),s[e]=void 0)}}const Ac=/(?:Once|Passive|Capture)$/;function I_(t){let e;if(Ac.test(t)){e={};let i;for(;i=t.match(Ac);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hi(t.slice(2)),e]}function x_(t,e){const n=i=>{const r=i.timeStamp||_d();(__||r>=n.attached-1)&&st(T_(i,n.value),e,5,[i])};return n.value=t,n.attached=b_(),n}function T_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const kc=/^on[a-z]/,S_=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?d_(t,i,r):e==="style"?h_(t,n,i):Es(e)?xa(e)||C_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,i,r))?g_(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),m_(t,e,i,r))};function A_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&kc.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||kc.test(e)&&Ce(n)?!1:e in t}const zt="transition",Ci="animation",vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k_=Oe({},Eg.props,vd),vn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nc=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function N_(t){const e={};for(const M in t)M in vd||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=O_(r),E=_&&_[0],N=_&&_[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:D,onLeave:B,onLeaveCancelled:Y,onBeforeAppear:be=b,onAppear:me=S,onAppearCancelled:U=D}=e,ee=(M,pe,Ye)=>{qt(M,pe?u:a),qt(M,pe?c:o),Ye&&Ye()},ne=(M,pe)=>{M._isLeaving=!1,qt(M,f),qt(M,m),qt(M,d),pe&&pe()},Pe=M=>(pe,Ye)=>{const wi=M?me:S,xe=()=>ee(pe,M,Ye);vn(wi,[pe,xe]),Oc(()=>{qt(pe,M?l:s),kt(pe,M?u:a),Nc(wi)||Rc(pe,i,E,xe)})};return Oe(e,{onBeforeEnter(M){vn(b,[M]),kt(M,s),kt(M,o)},onBeforeAppear(M){vn(be,[M]),kt(M,l),kt(M,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(M,pe){M._isLeaving=!0;const Ye=()=>ne(M,pe);kt(M,f),bd(),kt(M,d),Oc(()=>{!M._isLeaving||(qt(M,f),kt(M,m),Nc(B)||Rc(M,i,N,Ye))}),vn(B,[M,Ye])},onEnterCancelled(M){ee(M,!1),vn(D,[M])},onAppearCancelled(M){ee(M,!0),vn(U,[M])},onLeaveCancelled(M){ne(M),vn(Y,[M])}})}function O_(t){if(t==null)return null;if(he(t))return[co(t.enter),co(t.leave)];{const e=co(t);return[e,e]}}function co(t){return Ef(t)}function kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qt(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Oc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let R_=0;function Rc(t,e,n,i){const r=t._endId=++R_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=yd(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=m=>{m.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function yd(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(zt+"Delay"),s=i(zt+"Duration"),o=Pc(r,s),a=i(Ci+"Delay"),l=i(Ci+"Duration"),c=Pc(a,l);let u=null,f=0,d=0;e===zt?o>0&&(u=zt,f=o,d=s.length):e===Ci?c>0&&(u=Ci,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?zt:Ci:null,d=u?u===zt?s.length:l.length:0);const m=u===zt&&/\b(transform|all)(,|$)/.test(n[zt+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:m}}function Pc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Dc(n)+Dc(t[i])))}function Dc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function bd(){return document.body.offsetHeight}const wd=new WeakMap,Ed=new WeakMap,P_={name:"TransitionGroup",props:Oe({},k_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=hd(),i=Yf();let r,s;return Qf(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!F_(r[0].el,n.vnode.el,o))return;r.forEach(D_),r.forEach(M_);const a=r.filter(L_);bd(),a.forEach(l=>{const c=l.el,u=c.style;kt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,qt(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Z(t),a=N_(o);let l=o.tag||Re;r=s,s=e.default?Ha(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&qi(u,Vi(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];qi(u,Vi(u,a,i,n)),wd.set(u,u.el.getBoundingClientRect())}return z(l,null,s)}}},Cd=P_;function D_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function M_(t){Ed.set(t,t.el.getBoundingClientRect())}function L_(t){const e=wd.get(t),n=Ed.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function F_(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=yd(i);return r.removeChild(i),s}const $_=Oe({patchProp:S_},f_);let Mc;function B_(){return Mc||(Mc=qg($_))}const H_=(...t)=>{const e=B_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=j_(i);if(!r)return;const s=e._component;!W(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function j_(t){return Ce(t)?document.querySelector(t):t}/**
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
 */const Id={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+Id.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},U_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),i.push(n[u],n[f],n[d],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Td=function(t){const e=xd(t);return Ga.encodeByteArray(e,!0)},Xr=function(t){return Td(t).replace(/\./g,"")},zo=function(t){try{return Ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W_(t){return Sd(void 0,t)}function Sd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!z_(n)||(t[n]=Sd(t[n],e[n]));return t}function z_(t){return t!=="__proto__"}/**
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
 */function V_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V_())}function q_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){return Id.NODE_ADMIN===!0}function Nd(){return typeof indexedDB=="object"}function Od(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function G_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function K_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Q_=()=>K_().__FIREBASE_DEFAULTS__,X_=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},J_=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&zo(t[1]);return e&&JSON.parse(e)},Rd=()=>Q_()||X_()||J_(),Z_=t=>{var e,n;return(n=(e=Rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ev=()=>{var t;return(t=Rd())===null||t===void 0?void 0:t.config};/**
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
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function tv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xr(JSON.stringify(n)),Xr(JSON.stringify(o)),a].join(".")}/**
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
 */const nv="FirebaseError";class Un extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=nv,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?iv(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Un(r,a,i)}}function iv(t,e){return t.replace(rv,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const rv=/\{\$([^}]+)}/g;/**
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
 */function Ki(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const Pd=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Ki(zo(s[0])||""),n=Ki(zo(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},sv=function(t){const e=Pd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ov=function(t){const e=Pd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function li(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Fc(s)&&Fc(o)){if(!Zr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Fc(t){return t!==null&&typeof t=="object"}/**
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
 */function av(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class lv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Ka(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Fs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const uv=1e3,fv=2,dv=4*60*60*1e3,hv=.5;function $c(t,e=uv,n=fv){const i=e*Math.pow(n,t),r=Math.round(hv*i*(Math.random()-.5)*2);return Math.min(dv,i+r)}/**
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
 */function dn(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bn="[DEFAULT]";/**
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
 */class pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ms;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gv(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mv(t){return t===bn?void 0:t}function gv(t){return t.instantiationMode==="EAGER"}/**
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
 */class _v{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const vv={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},yv=oe.INFO,bv={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},wv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=bv[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=yv,this._logHandler=wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Ev=(t,e)=>e.some(n=>t instanceof n);let Bc,Hc;function Cv(){return Bc||(Bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iv(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,Vo=new WeakMap,Md=new WeakMap,uo=new WeakMap,Xa=new WeakMap;function xv(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dd.set(n,t)}).catch(()=>{}),Xa.set(e,t),e}function Tv(t){if(Vo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vo.set(t,e)}let qo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Md.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sv(t){qo=t(qo)}function Av(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fo(this),e,...n);return Md.set(i,e.sort?e.sort():[e]),Xt(i)}:Iv().includes(t)?function(...e){return t.apply(fo(this),e),Xt(Dd.get(this))}:function(...e){return Xt(t.apply(fo(this),e))}}function kv(t){return typeof t=="function"?Av(t):(t instanceof IDBTransaction&&Tv(t),Ev(t,Cv())?new Proxy(t,qo):t)}function Xt(t){if(t instanceof IDBRequest)return xv(t);if(uo.has(t))return uo.get(t);const e=kv(t);return e!==t&&(uo.set(t,e),Xa.set(e,t)),e}const fo=t=>Xa.get(t);function Ld(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Xt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Xt(o.result),l.oldVersion,l.newVersion,Xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Nv=["get","getKey","getAll","getAllKeys","count"],Ov=["put","add","delete","clear"],ho=new Map;function jc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ov.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Nv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ho.set(e,s),s}Sv(t=>({...t,get:(e,n,i)=>jc(e,n)||t.get(e,n,i),has:(e,n)=>!!jc(e,n)||t.has(e,n)}));/**
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
 */class Rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Pv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",Uc="0.8.0";/**
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
 */const Dn=new Qa("@firebase/app"),Dv="@firebase/app-compat",Mv="@firebase/analytics-compat",Lv="@firebase/analytics",Fv="@firebase/app-check-compat",$v="@firebase/app-check",Bv="@firebase/auth",Hv="@firebase/auth-compat",jv="@firebase/database",Uv="@firebase/database-compat",Wv="@firebase/functions",zv="@firebase/functions-compat",Vv="@firebase/installations",qv="@firebase/installations-compat",Yv="@firebase/messaging",Gv="@firebase/messaging-compat",Kv="@firebase/performance",Qv="@firebase/performance-compat",Xv="@firebase/remote-config",Jv="@firebase/remote-config-compat",Zv="@firebase/storage",ey="@firebase/storage-compat",ty="@firebase/firestore",ny="@firebase/firestore-compat",iy="firebase",ry="9.11.0";/**
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
 */const Go="[DEFAULT]",sy={[Yo]:"fire-core",[Dv]:"fire-core-compat",[Lv]:"fire-analytics",[Mv]:"fire-analytics-compat",[$v]:"fire-app-check",[Fv]:"fire-app-check-compat",[Bv]:"fire-auth",[Hv]:"fire-auth-compat",[jv]:"fire-rtdb",[Uv]:"fire-rtdb-compat",[Wv]:"fire-fn",[zv]:"fire-fn-compat",[Vv]:"fire-iid",[qv]:"fire-iid-compat",[Yv]:"fire-fcm",[Gv]:"fire-fcm-compat",[Kv]:"fire-perf",[Qv]:"fire-perf-compat",[Xv]:"fire-rc",[Jv]:"fire-rc-compat",[Zv]:"fire-gcs",[ey]:"fire-gcs-compat",[ty]:"fire-fst",[ny]:"fire-fst-compat","fire-js":"fire-js",[iy]:"fire-js-all"};/**
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
 */const es=new Map,Ko=new Map;function oy(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Ko.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Ko.set(e,t);for(const n of es.values())oy(n,t);return!0}function ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ay={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jt=new Ls("app","Firebase",ay);/**
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
 */class ly{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const cy=ry;function Fd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Go,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Jt.create("bad-app-name",{appName:String(r)});if(n||(n=ev()),!n)throw Jt.create("no-options");const s=es.get(r);if(s){if(Zr(n,s.options)&&Zr(i,s.config))return s;throw Jt.create("duplicate-app",{appName:r})}const o=new _v(r);for(const l of Ko.values())o.addComponent(l);const a=new ly(n,i,o);return es.set(r,a),a}function $d(t=Go){const e=es.get(t);if(!e&&t===Go)return Fd();if(!e)throw Jt.create("no-app",{appName:t});return e}function xt(t,e,n){var i;let r=(i=sy[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}sn(new Dt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uy="firebase-heartbeat-database",fy=1,Qi="firebase-heartbeat-store";let po=null;function Bd(){return po||(po=Ld(uy,fy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}}).catch(t=>{throw Jt.create("idb-open",{originalErrorMessage:t.message})})),po}async function dy(t){var e;try{return(await Bd()).transaction(Qi).objectStore(Qi).get(Hd(t))}catch(n){if(n instanceof Un)Dn.warn(n.message);else{const i=Jt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Dn.warn(i.message)}}}async function Wc(t,e){var n;try{const r=(await Bd()).transaction(Qi,"readwrite");return await r.objectStore(Qi).put(e,Hd(t)),r.done}catch(i){if(i instanceof Un)Dn.warn(i.message);else{const r=Jt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Dn.warn(r.message)}}}function Hd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hy=1024,py=30*24*60*60*1e3;class my{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _y(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=py}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zc(),{heartbeatsToSend:n,unsentEntries:i}=gy(this._heartbeatsCache.heartbeats),r=Xr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zc(){return new Date().toISOString().substring(0,10)}function gy(t,e=hy){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Vc(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class _y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vc(t){return Xr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vy(t){sn(new Dt("platform-logger",e=>new Rv(e),"PRIVATE")),sn(new Dt("heartbeat",e=>new my(e),"PRIVATE")),xt(Yo,Uc,t),xt(Yo,Uc,"esm2017"),xt("fire-js","")}vy("");const qc="@firebase/database",Yc="0.13.7";/**
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
 */let jd="";function yy(t){jd=t}/**
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
 */class by{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class wy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ud=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new by(e)}}catch{}return new wy},xn=Ud("localStorage"),Qo=Ud("sessionStorage");/**
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
 */const ni=new Qa("@firebase/database"),Ey=function(){let t=1;return function(){return t++}}(),Wd=function(t){const e=cv(t),n=new lv;n.update(e);const i=n.digest();return Ga.encodeByteArray(i)},fr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=fr.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let Rn=null,Gc=!0;const Cy=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ni.logLevel=oe.VERBOSE,Rn=ni.log.bind(ni),e&&Qo.set("logging_enabled",!0)):typeof t=="function"?Rn=t:(Rn=null,Qo.remove("logging_enabled"))},Le=function(...t){if(Gc===!0&&(Gc=!1,Rn===null&&Qo.get("logging_enabled")===!0&&Cy(!0)),Rn){const e=fr.apply(null,t);Rn(e)}},dr=function(t){return function(...e){Le(t,...e)}},Xo=function(...t){const e="FIREBASE INTERNAL ERROR: "+fr(...t);ni.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${fr(...t)}`;throw ni.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+fr(...t);ni.warn(e)},Iy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",Mn="[MAX_NAME]",_i=function(t,e){if(t===e)return 0;if(t===ci||e===Mn)return-1;if(e===ci||t===Mn)return 1;{const n=Kc(t),i=Kc(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ty=function(t,e){return t===e?0:t<e?-1:1},Ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},Ja=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=we(e[i]),n+=":",n+=Ja(t[e[i]]);return n+="}",n},Vd=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qd=function(t){I(!zd(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Sy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ay=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ky(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Ny=new RegExp("^-?(0*)\\d{1,10}$"),Oy=-2147483648,Ry=2147483647,Kc=function(t){if(Ny.test(t)){const e=Number(t);if(e>=Oy&&e<=Ry)return e}return null},vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},Py=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Dy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class My{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class ii{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ii.OWNER="owner";/**
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
 */const Za="5",Yd="v",Gd="s",Kd="r",Qd="f",Xd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jd="ls",Zd="p",Jo="ac",eh="websocket",th="long_polling";/**
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
 */class nh{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ly(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ih(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===eh)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===th)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ly(t)&&(n.ns=t.namespace);const r=[];return qe(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class Fy{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return W_(this.counters_)}}/**
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
 */const mo={},go={};function el(t){const e=t.toString();return mo[e]||(mo[e]=new Fy),mo[e]}function $y(t,e){const n=t.toString();return go[n]||(go[n]=e()),go[n]}/**
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
 */class By{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&vi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qc="start",Hy="close",jy="pLPCommand",Uy="pRTLPCB",rh="id",sh="pw",oh="ser",Wy="cb",zy="seg",Vy="ts",qy="d",Yy="dframe",ah=1870,lh=30,Gy=ah-lh,Ky=25e3,Qy=3e4;class Gn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dr(e),this.stats_=el(n),this.urlFn=l=>(this.appCheckToken&&(l[Jo]=this.appCheckToken),ih(n,th,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new By(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qy)),xy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qc)this.id=a,this.password=l;else if(o===Hy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qc]="t",i[oh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Wy]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Yd]=Za,this.transportSessionId&&(i[Gd]=this.transportSessionId),this.lastSessionId&&(i[Jd]=this.lastSessionId),this.applicationId&&(i[Zd]=this.applicationId),this.appCheckToken&&(i[Jo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xd.test(location.hostname)&&(i[Kd]=Qd);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gn.forceAllow_=!0}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){return Gn.forceAllow_?!0:!Gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sy()&&!Ay()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Td(n),r=Vd(i,Gy);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Yy]="t",i[rh]=e,i[sh]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tl{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ey(),window[jy+this.uniqueCallbackIdentifier]=e,window[Uy+this.uniqueCallbackIdentifier]=n,this.myIFrame=tl.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rh]=this.myID,e[sh]=this.myPW,e[oh]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lh+i.length<=ah;){const o=this.pendingSegs.shift();i=i+"&"+zy+r+"="+o.seg+"&"+Vy+r+"="+o.ts+"&"+qy+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Ky)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Xy=16384,Jy=45e3;let ts=null;typeof MozWebSocket<"u"?ts=MozWebSocket:typeof WebSocket<"u"&&(ts=WebSocket);class ut{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dr(this.connId),this.stats_=el(n),this.connURL=ut.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Yd]=Za,typeof location<"u"&&location.hostname&&Xd.test(location.hostname)&&(o[Kd]=Qd),n&&(o[Gd]=n),i&&(o[Jd]=i),r&&(o[Jo]=r),s&&(o[Zd]=s),ih(e,eh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let i;kd(),this.mySock=new ts(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ts!==null&&!ut.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ki(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Vd(n,Xy);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
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
 */class Xi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gn,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let i=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ut];else{const r=this.transports_=[];for(const s of Xi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xi.globalTransportInitialized_=!1;/**
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
 */const Zy=6e4,eb=5e3,tb=10*1024,nb=100*1024,_o="t",Xc="d",ib="s",Jc="r",rb="e",Zc="o",eu="a",tu="n",nu="p",sb="h";class ob{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dr("c:"+this.id+":"),this.transportManager_=new Xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_o in e){const n=e[_o];n===eu?this.upgradeIfSecondaryHealthy_():n===Jc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ii("t",e),i=Ii("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ii("t",e),i=Ii("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ii(_o,e);if(Xc in e){const i=e[Xc];if(n===sb)this.onHandshake_(i);else if(n===tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ib?this.onConnectionShutdown_(i):n===Jc?this.onReset_(i):n===rb?Xo("Server Error: "+i):n===Zc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Za!==i&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ch{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class uh{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ns extends uh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ad()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ns}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const iu=32,ru=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ie("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function fh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ab(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function Ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ie(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=K(t),i=K(e);if(n===null)return e;if(n===i)return je(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ph(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ht(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class lb{constructor(e,n){this.errorPrefix_=n,this.parts_=dh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Fs(this.parts_[i]);mh(this)}}function cb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fs(e),mh(t)}function ub(t){const e=t.parts_.pop();t.byteLength_-=Fs(e),t.parts_.length>0&&(t.byteLength_-=1)}function mh(t){if(t.byteLength_>ru)throw new Error(t.errorPrefix_+"has a key path longer than "+ru+" bytes ("+t.byteLength_+").");if(t.parts_.length>iu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iu+") or object contains a cycle "+wn(t))}function wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class nl extends uh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nl}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const xi=1e3,fb=60*5*1e3,su=30*1e3,db=1.3,hb=3e4,pb="server_kill",ou=3;class Rt extends ch{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rt.nextPersistentConnectionId_++,this.log_=dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=fb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ns.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(we(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Ms,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Rt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const i=li(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ov(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=su)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xo("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hb&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*db)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new ob(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{Ve(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(pb)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ve(f),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lc(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ja(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ie(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ou&&(this.reconnectDelay_=su,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ou&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jd.replace(/\./g,"-")]=1,Ad()?e["framework.cordova"]=1:Y_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ns.getInstance().currentlyOnline();return Lc(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class $s{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new V(ci,e),r=new V(ci,n);return this.compare(i,r)!==0}minPost(){return V.MIN}}/**
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
 */let Ar;class gh extends $s{static get __EMPTY_NODE(){return Ar}static set __EMPTY_NODE(e){Ar=e}compare(e,n){return _i(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Mn,Ar)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Ar)}toString(){return".key"}}const ri=new gh;/**
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
 */class kr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Se.RED,this.left=r!=null?r:ze.EMPTY_NODE,this.right=s!=null?s:ze.EMPTY_NODE}copy(e,n,i,r,s){return new Se(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class mb{copy(e,n,i,r,s){return this}insert(e,n,i){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kr(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new mb;/**
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
 */function gb(t,e){return _i(t.name,e.name)}function il(t,e){return _i(t,e)}/**
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
 */let Zo;function _b(t){Zo=t}const _h=function(t){return typeof t=="number"?"number:"+qd(t):"string:"+t},vh=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else I(t===Zo||t.isEmpty(),"priority of unexpected type.");I(t===Zo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let au;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vh(this.priorityNode_)}static set __childrenNodeConstructor(e){au=e}static get __childrenNodeConstructor(){return au}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=K(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_h(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qd(this.value_):e+=this.value_,this.lazyHash_=Wd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),s=Te.VALUE_TYPE_ORDER.indexOf(i);return I(r>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yh,bh;function vb(t){yh=t}function yb(t){bh=t}class bb extends $s{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?_i(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Mn,new Te("[PRIORITY-POST]",bh))}makePost(e,n){const i=yh(e);return new V(n,new Te("[PRIORITY-POST]",i))}toString(){return".priority"}}const ve=new bb;/**
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
 */const wb=Math.log(2);class Eb{constructor(e){const n=s=>parseInt(Math.log(s)/wb,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const is=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Se(d,f.node,Se.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=r(l,m),E=r(m+1,c);return f=t[m],d=n?n(f):f,new Se(d,f.node,Se.BLACK,_,E)}},s=function(l){let c=null,u=null,f=t.length;const d=function(_,E){const N=f-_,b=f;f-=_;const S=r(N+1,b),D=t[N],B=n?n(D):D;m(new Se(B,D.node,E,null,S))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const E=l.nextBitIsOne(),N=Math.pow(2,l.count-(_+1));E?d(N,Se.BLACK):(d(N,Se.BLACK),d(N,Se.RED))}return u},o=new Eb(t.length),a=s(o);return new ze(i||e,a)};/**
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
 */let vo;const qn={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(qn&&ve,"ChildrenNode.ts has not been loaded"),vo=vo||new Ot({".priority":qn},{".priority":ve}),vo}get(e){const n=li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){I(e!==ri,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=is(i,e.getCompare()):a=qn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const i=Jr(this.indexes_,(r,s)=>{const o=li(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),r===qn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),is(a,o.getCompare())}else return qn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new Ot(i,this.indexSet_)}removeFromIndexes(e,n){const i=Jr(this.indexes_,r=>{if(r===qn)return r;{const s=n.get(e.name);return s?r.remove(new V(e.name,s)):r}});return new Ot(i,this.indexSet_)}}/**
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
 */let Ti;class ${constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&vh(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ti||(Ti=new $(new ze(il),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new V(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ti:this.priorityNode_;return new $(r,o,s)}}updateChild(e,n){const i=K(e);if(i===null)return n;{I(K(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(le(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),i++,s&&$.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_h(this.getPriority().val())+":"),this.forEachChild(ve,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Wd(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,V.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hr?-1:0}withIndex(e){if(e===ri||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ri||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ve),r=n.getIterator(ve);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ri?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cb extends ${constructor(){super(new ze(il),$.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const hr=new Cb;Object.defineProperties(V,{MIN:{value:new V(ci,$.EMPTY_NODE)},MAX:{value:new V(Mn,hr)}});gh.__EMPTY_NODE=$.EMPTY_NODE;Te.__childrenNodeConstructor=$;_b(hr);yb(hr);/**
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
 */const Ib=!0;function Ae(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ae(e))}if(!(t instanceof Array)&&Ib){const n=[];let i=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=is(n,gb,o=>o.name,il);if(i){const o=is(n,ve.getCompare());return new $(s,Ae(e),new Ot({".priority":o},{".priority":ve}))}else return new $(s,Ae(e),Ot.Default)}else{let n=$.EMPTY_NODE;return qe(t,(i,r)=>{if(Ht(t,i)&&i.substring(0,1)!=="."){const s=Ae(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ae(e))}}vb(Ae);/**
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
 */class xb extends $s{constructor(e){super(),this.indexPath_=e,I(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?_i(e.name,n.name):s}makePost(e,n){const i=Ae(e),r=$.EMPTY_NODE.updateChild(this.indexPath_,i);return new V(n,r)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,hr);return new V(Mn,e)}toString(){return dh(this.indexPath_,0).join("/")}}/**
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
 */class Tb extends $s{compare(e,n){const i=e.node.compareTo(n.node);return i===0?_i(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const i=Ae(e);return new V(n,i)}toString(){return".value"}}const Sb=new Tb;/**
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
 */function wh(t){return{type:"value",snapshotNode:t}}function ui(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ab(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rl{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Ji(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ui(n,i)):o.trackChildChange(Zi(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ve,(r,s)=>{n.hasChild(r)||i.trackChildChange(Ji(r,s))}),n.isLeafNode()||n.forEachChild(ve,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Zi(r,s,o))}else i.trackChildChange(ui(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class er{constructor(e){this.indexedFilter_=new rl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=er.getStartPost_(e),this.endPost_=er.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new V(n,i))||(i=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=$.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new V(o,a))||(r=r.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kb{constructor(e){this.rangedFilter_=new er(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new V(n,i))||(i=$.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority($.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,m)=>f(m,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:r=r.updateImmediateChild(f.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new V(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(u&&!i.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Zi(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(Ji(n,f));const E=a.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ui(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ji(c.name,c.node)),s.trackChildChange(ui(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class sl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new sl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nb(t){return t.loadsAllData()?new rl(t.getIndex()):t.hasLimit()?new kb(t):new er(t)}function lu(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===Sb?n="$value":t.index_===ri?n="$key":(I(t.index_ instanceof xb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class rs extends ch{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=dr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=rs.getListenId_(e,i),a={};this.listens_[o]=a;const l=lu(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),li(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=rs.getListenId_(e,n);delete this.listens_[i]}get(e){const n=lu(e._queryParams),i=e._path.toString(),r=new Ms;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+av(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ki(a.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ob{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ss(){return{value:null,children:new Map}}function Eh(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=K(e);t.children.has(i)||t.children.set(i,ss());const r=t.children.get(i);e=le(e),Eh(r,e,n)}}function ea(t,e,n){t.value!==null?n(e,t.value):Rb(t,(i,r)=>{const s=new ie(e.toString()+"/"+i);ea(r,s,n)})}function Rb(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Pb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const uu=10*1e3,Db=30*1e3,Mb=5*60*1e3;class Lb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Pb(e);const i=uu+(Db-uu)*Math.random();Ri(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;qe(e,(r,s)=>{s>0&&Ht(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mb))}}/**
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
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Ch(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ol(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function al(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class os{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pt.ACK_USER_WRITE,this.source=Ch()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new os(J(),n,this.revert)}}else return I(K(this.path)===e,"operationForChild called for unrelated child."),new os(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class tr{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new tr(this.source,J()):new tr(this.source,le(this.path))}}/**
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
 */class Ln{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pt.OVERWRITE}operationForChild(e){return q(this.path)?new Ln(this.source,J(),this.snap.getImmediateChild(e)):new Ln(this.source,le(this.path),this.snap)}}/**
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
 */class nr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Ln(this.source,J(),n.value):new nr(this.source,J(),n)}else return I(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class an{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Fb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $b(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ab(o.childName,o.snapshotNode))}),Si(t,r,"child_removed",e,i,n),Si(t,r,"child_added",e,i,n),Si(t,r,"child_moved",s,i,n),Si(t,r,"child_changed",e,i,n),Si(t,r,"value",e,i,n),r}function Si(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Hb(t,a,l)),o.forEach(a=>{const l=Bb(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Bb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hb(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const i=new V(e.childName,e.snapshotNode),r=new V(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function Bs(t,e){return{eventCache:t,serverCache:e}}function Pi(t,e,n,i){return Bs(new an(e,n,i),t.serverCache)}function Ih(t,e,n,i){return Bs(t.eventCache,new an(e,n,i))}function as(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yo;const jb=()=>(yo||(yo=new ze(Ty)),yo);class ue{constructor(e,n=jb()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return qe(e,(i,r)=>{n=n.set(new ie(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(q(e))return null;{const i=K(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:Ee(new ie(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=K(e),i=this.children.get(n);return i!==null?i.subtree(le(e)):new ue(null)}}set(e,n){if(q(e))return new ue(n,this.children);{const i=K(e),s=(this.children.get(i)||new ue(null)).set(le(e),n),o=this.children.insert(i,s);return new ue(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=K(e),i=this.children.get(n);if(i){const r=i.remove(le(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ue(null):new ue(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=K(e),i=this.children.get(n);return i?i.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const i=K(e),s=(this.children.get(i)||new ue(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ue(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ee(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(le(e),Ee(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,i){if(q(e))return this;{this.value&&i(n,this.value);const r=K(e),s=this.children.get(r);return s?s.foreachOnPath_(le(e),Ee(n,r),i):new ue(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new ue(null))}}function Di(t,e,n){if(q(e))return new _t(new ue(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=je(r,e);return s=s.updateChild(o,n),new _t(t.writeTree_.set(r,s))}else{const r=new ue(n),s=t.writeTree_.setTree(e,r);return new _t(s)}}}function fu(t,e,n){let i=t;return qe(n,(r,s)=>{i=Di(i,Ee(e,r),s)}),i}function du(t,e){if(q(e))return _t.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new _t(n)}}function ta(t,e){return Wn(t,e)!=null}function Wn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function hu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(i,r)=>{e.push(new V(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new V(i,r.value))}),e}function Zt(t,e){if(q(e))return t;{const n=Wn(t,e);return n!=null?new _t(new ue(n)):new _t(t.writeTree_.subtree(e))}}function na(t){return t.writeTree_.isEmpty()}function fi(t,e){return xh(J(),t.writeTree_,e)}function xh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=xh(Ee(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ee(t,".priority"),i)),n}}/**
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
 */function Hs(t,e){return kh(e,t)}function Ub(t,e,n,i,r){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=i}function Wb(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function zb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Vb(a,i.path)?r=!1:ht(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return qb(t),!0;if(i.snap)t.visibleWrites=du(t.visibleWrites,i.path);else{const a=i.children;qe(a,l=>{t.visibleWrites=du(t.visibleWrites,Ee(i.path,l))})}return!0}else return!1}function Vb(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(Ee(t.path,n),e))return!0;return!1}function qb(t){t.visibleWrites=Th(t.allWrites,Yb,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yb(t){return t.visible}function Th(t,e,n){let i=_t.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)ht(n,o)?(a=je(n,o),i=Di(i,a,s.snap)):ht(o,n)&&(a=je(o,n),i=Di(i,J(),s.snap.getChild(a)));else if(s.children){if(ht(n,o))a=je(n,o),i=fu(i,a,s.children);else if(ht(o,n))if(a=je(o,n),q(a))i=fu(i,J(),s.children);else{const l=li(s.children,K(a));if(l){const c=l.getChild(le(a));i=Di(i,J(),c)}}}else throw gi("WriteRecord should have .snap or .children")}}return i}function Sh(t,e,n,i,r){if(!i&&!r){const s=Wn(t.visibleWrites,e);if(s!=null)return s;{const o=Zt(t.visibleWrites,e);if(na(o))return n;if(n==null&&!ta(o,J()))return null;{const a=n||$.EMPTY_NODE;return fi(o,a)}}}else{const s=Zt(t.visibleWrites,e);if(!r&&na(s))return n;if(!r&&n==null&&!ta(s,J()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ht(c.path,e)||ht(e,c.path))},a=Th(t.allWrites,o,e),l=n||$.EMPTY_NODE;return fi(a,l)}}}function Gb(t,e,n){let i=$.EMPTY_NODE;const r=Wn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ve,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Zt(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=fi(Zt(s,new ie(o)),a);i=i.updateImmediateChild(o,l)}),hu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Zt(t.visibleWrites,e);return hu(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Kb(t,e,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,n);if(ta(t.visibleWrites,s))return null;{const o=Zt(t.visibleWrites,s);return na(o)?r.getChild(n):fi(o,r.getChild(n))}}function Qb(t,e,n,i){const r=Ee(e,n),s=Wn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Zt(t.visibleWrites,r);return fi(o,i.getNode().getImmediateChild(n))}else return null}function Xb(t,e){return Wn(t.visibleWrites,e)}function Jb(t,e,n,i,r,s,o){let a;const l=Zt(t.visibleWrites,e),c=Wn(l,J());if(c!=null)a=c;else if(n!=null)a=fi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=d.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=d.getNext();return u}else return[]}function Zb(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function ls(t,e,n,i){return Sh(t.writeTree,t.treePath,e,n,i)}function ll(t,e){return Gb(t.writeTree,t.treePath,e)}function pu(t,e,n,i){return Kb(t.writeTree,t.treePath,e,n,i)}function cs(t,e){return Xb(t.writeTree,Ee(t.treePath,e))}function e0(t,e,n,i,r,s){return Jb(t.writeTree,t.treePath,e,n,i,r,s)}function cl(t,e,n){return Qb(t.writeTree,t.treePath,e,n)}function Ah(t,e){return kh(Ee(t.treePath,e),t.writeTree)}function kh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class t0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Zi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Ji(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,ui(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Zi(i,e.snapshotNode,r.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class n0{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Nh=new n0;class ul{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cl(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fn(this.viewCache_),s=e0(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function i0(t){return{filter:t}}function r0(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function s0(t,e,n,i,r){const s=new t0;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=ia(t,e,c.path,c.snap,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=us(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=a0(t,e,c.path,c.children,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ra(t,e,c.path,c.children,i,r,a,s))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=u0(t,e,c.path,i,r,s):o=l0(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===pt.LISTEN_COMPLETE)o=c0(t,e,n.path,i,s);else throw gi("Unknown operation type: "+n.type);const l=s.getChanges();return o0(e,o,l),{viewCache:o,changes:l}}function o0(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=as(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(wh(as(e)))}}function Oh(t,e,n,i,r,s){const o=e.eventCache;if(cs(i,n)!=null)return e;{let a,l;if(q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fn(e),u=c instanceof $?c:$.EMPTY_NODE,f=ll(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ls(i,Fn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){I(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=pu(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=le(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=pu(i,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=cl(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Pi(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function us(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=K(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const _=le(n),N=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),m,N,_,Nh,null)}const f=Ih(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new ul(r,f,s);return Oh(t,f,n,r,d,a)}function ia(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new ul(r,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Pi(e,c,!0,t.filter.filtersNodes());else{const f=K(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Pi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=le(n),m=a.getNode().getImmediateChild(f);let _;if(q(d))_=i;else{const E=u.getCompleteChild(f);E!=null?fh(d)===".priority"&&E.getChild(hh(d)).isEmpty()?_=E:_=E.updateChild(d,i):_=$.EMPTY_NODE}if(m.equals(_))l=e;else{const E=t.filter.updateChild(a.getNode(),f,_,d,u,o);l=Pi(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function mu(t,e){return t.eventCache.isCompleteForChild(e)}function a0(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Ee(n,l);mu(e,K(u))&&(a=ia(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Ee(n,l);mu(e,K(u))||(a=ia(t,a,u,c,r,s,o))}),a}function gu(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ra(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=i:c=new ue(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=gu(t,m,d);l=us(t,l,new ie(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),E=gu(t,_,d);l=us(t,l,new ie(f),E,r,s,o,a)}}),l}function l0(t,e,n,i,r,s,o){if(cs(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return us(t,e,n,l.getNode().getChild(n),r,s,a,o);if(q(n)){let c=new ue(null);return l.getNode().forEachChild(ri,(u,f)=>{c=c.set(new ie(u),f)}),ra(t,e,n,c,r,s,a,o)}else return e}else{let c=new ue(null);return i.foreach((u,f)=>{const d=Ee(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ra(t,e,n,c,r,s,a,o)}}function c0(t,e,n,i,r){const s=e.serverCache,o=Ih(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return Oh(t,o,n,i,Nh,r)}function u0(t,e,n,i,r,s){let o;if(cs(i,n)!=null)return e;{const a=new ul(i,e,r),l=e.eventCache.getNode();let c;if(q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ls(i,Fn(e));else{const f=e.serverCache.getNode();I(f instanceof $,"serverChildren would be complete if leaf node"),u=ll(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=K(n);let f=cl(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,le(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,$.EMPTY_NODE,le(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ls(i,Fn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||cs(i,J())!=null,Pi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class f0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new rl(i.getIndex()),s=Nb(i);this.processor_=i0(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),r.filtersNodes()),f=new an(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bs(f,u),this.eventGenerator_=new Fb(this.query_)}get query(){return this.query_}}function d0(t){return t.viewCache_.serverCache.getNode()}function h0(t){return as(t.viewCache_)}function p0(t,e){const n=Fn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function _u(t){return t.eventRegistrations_.length===0}function m0(t,e){t.eventRegistrations_.push(e)}function vu(t,e,n){const i=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function yu(t,e,n,i){e.type===pt.MERGE&&e.source.queryId!==null&&(I(Fn(t.viewCache_),"We should always have a full cache before handling merges"),I(as(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=s0(t.processor_,r,e,n,i);return r0(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Rh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function g0(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{i.push(ui(s,o))}),n.isFullyInitialized()&&i.push(wh(n.getNode())),Rh(t,i,n.getNode(),e)}function Rh(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return $b(t.eventGenerator_,e,n,r)}/**
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
 */let fs;class Ph{constructor(){this.views=new Map}}function _0(t){I(!fs,"__referenceConstructor has already been defined"),fs=t}function v0(){return I(fs,"Reference.ts has not been loaded"),fs}function y0(t){return t.views.size===0}function fl(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return I(s!=null,"SyncTree gave us an op for an invalid query."),yu(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(yu(o,e,n,i));return s}}function Dh(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ls(n,r?i:null),l=!1;a?l=!0:i instanceof $?(a=ll(n,i),l=!1):(a=$.EMPTY_NODE,l=!1);const c=Bs(new an(a,l,!1),new an(i,r,!1));return new f0(e,c)}return o}function b0(t,e,n,i,r,s){const o=Dh(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),m0(o,n),g0(o,n)}function w0(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=ln(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(vu(c,n,i)),_u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(vu(l,n,i)),_u(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ln(t)&&s.push(new(v0())(e._repo,e._path)),{removed:s,events:o}}function Mh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function en(t,e){let n=null;for(const i of t.views.values())n=n||p0(i,e);return n}function Lh(t,e){if(e._queryParams.loadsAllData())return js(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Fh(t,e){return Lh(t,e)!=null}function ln(t){return js(t)!=null}function js(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ds;function E0(t){I(!ds,"__referenceConstructor has already been defined"),ds=t}function C0(){return I(ds,"Reference.ts has not been loaded"),ds}let I0=1;class bu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Zb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $h(t,e,n,i,r){return Ub(t.pendingWriteTree_,e,n,i,r),r?mr(t,new Ln(Ch(),e,n)):[]}function Tn(t,e,n=!1){const i=Wb(t.pendingWriteTree_,e);if(zb(t.pendingWriteTree_,e)){let s=new ue(null);return i.snap!=null?s=s.set(J(),!0):qe(i.children,o=>{s=s.set(new ie(o),!0)}),mr(t,new os(i.path,s,n))}else return[]}function pr(t,e,n){return mr(t,new Ln(ol(),e,n))}function x0(t,e,n){const i=ue.fromObject(n);return mr(t,new nr(ol(),e,i))}function T0(t,e){return mr(t,new tr(ol(),e))}function S0(t,e,n){const i=hl(t,n);if(i){const r=pl(i),s=r.path,o=r.queryId,a=je(s,e),l=new tr(al(o),a);return ml(t,s,l)}else return[]}function Bh(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Fh(o,e))){const l=w0(o,e,n,i);y0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,m)=>ln(m));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=O0(d);for(let _=0;_<m.length;++_){const E=m[_],N=E.query,b=Wh(t,E);t.listenProvider_.startListening(Mi(N),ir(t,N),b.hashFn,b.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Mi(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(Us(d));t.listenProvider_.stopListening(Mi(d),m)}))}R0(t,c)}return a}function Hh(t,e,n,i){const r=hl(t,i);if(r!=null){const s=pl(r),o=s.path,a=s.queryId,l=je(o,e),c=new Ln(al(a),l,n);return ml(t,o,c)}else return[]}function A0(t,e,n,i){const r=hl(t,i);if(r){const s=pl(r),o=s.path,a=s.queryId,l=je(o,e),c=ue.fromObject(n),u=new nr(al(a),l,c);return ml(t,o,u)}else return[]}function k0(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,m)=>{const _=je(d,r);s=s||en(m,_),o=o||ln(m)});let a=t.syncPointTree_.get(r);a?(o=o||ln(a),s=s||en(a,J())):(a=new Ph,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((m,_)=>{const E=en(_,J());E&&(s=s.updateImmediateChild(m,E))}));const c=Fh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Us(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=P0();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=Hs(t.pendingWriteTree_,r);let f=b0(a,e,n,u,s,l);if(!c&&!o&&!i){const d=Lh(a,e);f=f.concat(D0(t,e,d))}return f}function dl(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=en(a,l);if(c)return c});return Sh(r,e,s,n,!0)}function N0(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=je(c,n);i=i||en(u,f)});let r=t.syncPointTree_.get(n);r?i=i||en(r,J()):(r=new Ph,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new an(i,!0,!1):null,a=Hs(t.pendingWriteTree_,e._path),l=Dh(r,e,a,s?o.getNode():$.EMPTY_NODE,s);return h0(l)}function mr(t,e){return jh(e,t.syncPointTree_,null,Hs(t.pendingWriteTree_,J()))}function jh(t,e,n,i){if(q(t.path))return Uh(t,e,n,i);{const r=e.get(J());n==null&&r!=null&&(n=en(r,J()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ah(i,o);s=s.concat(jh(a,l,c,u))}return r&&(s=s.concat(fl(r,t,i,n))),s}}function Uh(t,e,n,i){const r=e.get(J());n==null&&r!=null&&(n=en(r,J()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ah(i,o),u=t.operationForChild(o);u&&(s=s.concat(Uh(u,a,l,c)))}),r&&(s=s.concat(fl(r,t,i,n))),s}function Wh(t,e){const n=e.query,i=ir(t,n);return{hashFn:()=>(d0(e)||$.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?S0(t,n._path,i):T0(t,n._path);{const s=ky(r,n);return Bh(t,n,null,s)}}}}function ir(t,e){const n=Us(e);return t.queryToTagMap.get(n)}function Us(t){return t._path.toString()+"$"+t._queryIdentifier}function hl(t,e){return t.tagToQueryMap.get(e)}function pl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function ml(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const r=Hs(t.pendingWriteTree_,e);return fl(i,n,r,null)}function O0(t){return t.fold((e,n,i)=>{if(n&&ln(n))return[js(n)];{let r=[];return n&&(r=Mh(n)),qe(i,(s,o)=>{r=r.concat(o)}),r}})}function Mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(C0())(t._repo,t._path):t}function R0(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Us(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function P0(){return I0++}function D0(t,e,n){const i=e._path,r=ir(t,e),s=Wh(t,n),o=t.listenProvider_.startListening(Mi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)I(!ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!q(c)&&u&&ln(u))return[js(u).query];{let d=[];return u&&(d=d.concat(Mh(u).map(m=>m.query))),qe(f,(m,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Mi(u),ir(t,u))}}return o}/**
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
 */class gl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gl(n)}node(){return this.node_}}class _l{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new _l(this.syncTree_,n)}node(){return dl(this.syncTree_,this.path_)}}const M0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wu=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return L0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return F0(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},L0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},F0=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const r=e.node();if(I(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},$0=function(t,e,n,i){return vl(e,new _l(n,t),i)},zh=function(t,e,n){return vl(t,new gl(e),n)};function vl(t,e,n){const i=t.getPriority().val(),r=wu(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=wu(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,Ae(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Te(r))),o.forEachChild(ve,(a,l)=>{const c=vl(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class yl{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function bl(t,e){let n=e instanceof ie?e:new ie(e),i=t,r=K(n);for(;r!==null;){const s=li(i.node.children,r)||{children:{},childCount:0};i=new yl(r,i,s),n=le(n),r=K(n)}return i}function yi(t){return t.node.value}function Vh(t,e){t.node.value=e,sa(t)}function qh(t){return t.node.childCount>0}function B0(t){return yi(t)===void 0&&!qh(t)}function Ws(t,e){qe(t.node.children,(n,i)=>{e(new yl(n,t,i))})}function Yh(t,e,n,i){n&&!i&&e(t),Ws(t,r=>{Yh(r,e,!0,i)}),n&&i&&e(t)}function H0(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gr(t){return new ie(t.parent===null?t.name:gr(t.parent)+"/"+t.name)}function sa(t){t.parent!==null&&j0(t.parent,t.name,t)}function j0(t,e,n){const i=B0(n),r=Ht(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,sa(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,sa(t))}/**
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
 */const U0=/[\[\].#$\/\u0000-\u001F\u007F]/,W0=/[\[\].#$\u0000-\u001F\u007F]/,bo=10*1024*1024,Gh=function(t){return typeof t=="string"&&t.length!==0&&!U0.test(t)},Kh=function(t){return typeof t=="string"&&t.length!==0&&!W0.test(t)},z0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kh(t)},V0=function(t,e,n,i){i&&e===void 0||wl(Ka(t,"value"),e,n)},wl=function(t,e,n){const i=n instanceof ie?new lb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+wn(i));if(typeof e=="function")throw new Error(t+"contains a function "+wn(i)+" with contents = "+e.toString());if(zd(e))throw new Error(t+"contains "+e.toString()+" "+wn(i));if(typeof e=="string"&&e.length>bo/3&&Fs(e)>bo)throw new Error(t+"contains a string greater than "+bo+" utf8 bytes "+wn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(qe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Gh(o)))throw new Error(t+" contains an invalid key ("+o+") "+wn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cb(i,o),wl(t,a,i),ub(i)}),r&&s)throw new Error(t+' contains ".value" child '+wn(i)+" in addition to actual children.")}},Qh=function(t,e,n,i){if(!(i&&n===void 0)&&!Kh(n))throw new Error(Ka(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},q0=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qh(t,e,n,i)},Y0=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},G0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!z0(n))throw new Error(Ka(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class K0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xh(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!ph(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function St(t,e,n){Xh(t,n),Q0(t,i=>ht(i,e)||ht(e,i))}function Q0(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(X0(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function X0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Rn&&Le("event: "+n.toString()),vi(i)}}}/**
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
 */const J0="repo_interrupt",Z0=25;class e1{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new K0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ss(),this.transactionQueueTree_=new yl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function t1(t,e,n){if(t.stats_=el(t.repoInfo_),t.forceRestClient_||Py())t.server_=new rs(t.repoInfo_,(i,r,s,o)=>{Eu(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(i,r,s,o)=>{Eu(t,i,r,s,o)},i=>{Cu(t,i)},i=>{i1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=$y(t.repoInfo_,()=>new Lb(t.stats_,t.server_)),t.infoData_=new Ob,t.infoSyncTree_=new bu({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=pr(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cl(t,"connected",!1),t.serverSyncTree_=new bu({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);St(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function n1(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function El(t){return M0({timestamp:n1(t)})}function Eu(t,e,n,i,r){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Jr(n,c=>Ae(c));o=A0(t.serverSyncTree_,s,l,r)}else{const l=Ae(n);o=Hh(t.serverSyncTree_,s,l,r)}else if(i){const l=Jr(n,c=>Ae(c));o=x0(t.serverSyncTree_,s,l)}else{const l=Ae(n);o=pr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Vs(t,s)),St(t.eventQueue_,a,o)}function Cu(t,e){Cl(t,"connected",e),e===!1&&o1(t)}function i1(t,e){qe(e,(n,i)=>{Cl(t,n,i)})}function Cl(t,e,n){const i=new ie("/.info/"+e),r=Ae(n);t.infoData_.updateSnapshot(i,r);const s=pr(t.infoSyncTree_,i,r);St(t.eventQueue_,i,s)}function Jh(t){return t.nextWriteId_++}function r1(t,e,n){const i=N0(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=Ae(r).withIndex(e._queryParams.getIndex());k0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=pr(t.serverSyncTree_,e._path,s);else{const a=ir(t.serverSyncTree_,e);o=Hh(t.serverSyncTree_,e._path,s,a)}return St(t.eventQueue_,e._path,o),Bh(t.serverSyncTree_,e,n,null,!0),s},r=>(zs(t,"get for query "+we(e)+" failed: "+r),Promise.reject(new Error(r))))}function s1(t,e,n,i,r){zs(t,"set",{path:e.toString(),value:n,priority:i});const s=El(t),o=Ae(n,i),a=dl(t.serverSyncTree_,e),l=zh(o,a,s),c=Jh(t),u=$h(t.serverSyncTree_,e,l,c,!0);Xh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const _=d==="ok";_||Ve("set at "+e+" failed: "+d);const E=Tn(t.serverSyncTree_,c,!_);St(t.eventQueue_,e,E),l1(t,r,d,m)});const f=ip(t,e);Vs(t,f),St(t.eventQueue_,f,[])}function o1(t){zs(t,"onDisconnectEvents");const e=El(t),n=ss();ea(t.onDisconnect_,J(),(r,s)=>{const o=$0(r,s,t.serverSyncTree_,e);Eh(n,r,o)});let i=[];ea(n,J(),(r,s)=>{i=i.concat(pr(t.serverSyncTree_,r,s));const o=ip(t,r);Vs(t,o)}),t.onDisconnect_=ss(),St(t.eventQueue_,J(),i)}function a1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(J0)}function zs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function l1(t,e,n,i){e&&vi(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Zh(t,e,n){return dl(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Il(t,e=t.transactionQueueTree_){if(e||qs(t,e),yi(e)){const n=tp(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&c1(t,gr(e),n)}else qh(e)&&Ws(e,n=>{Il(t,n)})}function c1(t,e,n){const i=n.map(c=>c.currentWriteId),r=Zh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=je(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{zs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Tn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qs(t,bl(t.transactionQueueTree_,e)),Il(t,t.transactionQueueTree_),St(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)vi(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ve("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Vs(t,e)}},o)}function Vs(t,e){const n=ep(t,e),i=gr(n),r=tp(t,n);return u1(t,r,i),i}function u1(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,f;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Z0)u=!0,f="maxretry",r=r.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Zh(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){wl("transaction failed: Data returned ",m,l.path);let _=Ae(m);typeof m=="object"&&m!=null&&Ht(m,".priority")||(_=_.updatePriority(d.getPriority()));const N=l.currentWriteId,b=El(t),S=zh(_,d,b);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=Jh(t),o.splice(o.indexOf(N),1),r=r.concat($h(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(Tn(t.serverSyncTree_,N,!0))}else u=!0,f="nodata",r=r.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0))}St(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}qs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)vi(i[a]);Il(t,t.transactionQueueTree_)}function ep(t,e){let n,i=t.transactionQueueTree_;for(n=K(e);n!==null&&yi(i)===void 0;)i=bl(i,n),e=le(e),n=K(e);return i}function tp(t,e){const n=[];return np(t,e,n),n.sort((i,r)=>i.order-r.order),n}function np(t,e,n){const i=yi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ws(e,r=>{np(t,r,n)})}function qs(t,e){const n=yi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Vh(e,n.length>0?n:void 0)}Ws(e,i=>{qs(t,i)})}function ip(t,e){const n=gr(ep(t,e)),i=bl(t.transactionQueueTree_,e);return H0(i,r=>{wo(t,r)}),wo(t,i),Yh(i,r=>{wo(t,r)}),n}function wo(t,e){const n=yi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Tn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Vh(e,void 0):n.length=s+1,St(t.eventQueue_,gr(e),r);for(let o=0;o<i.length;o++)vi(i[o])}}/**
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
 */function f1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function d1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Iu=function(t,e){const n=h1(t),i=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Iy();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nh(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ie(n.pathString)}},h1=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=f1(t.substring(u,f)));const d=d1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class p1{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class m1{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class g1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xl{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return q(this._path)?null:fh(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=cu(this._queryParams),n=Ja(e);return n==="{}"?"default":n}get _queryObject(){return cu(this._queryParams)}isEqual(e){if(e=dn(e),!(e instanceof xl))return!1;const n=this._repo===e._repo,i=ph(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ab(this._path)}}class jt extends xl{constructor(e,n){super(e,n,new sl,!1)}get parent(){const e=hh(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),i=hs(this.ref,e);return new rr(this._node.getChild(n),i,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new rr(r,hs(this.ref,i),ve)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rp(t,e){return t=dn(t),t._checkNotDeleted("ref"),e!==void 0?hs(t._root,e):t._root}function hs(t,e){return t=dn(t),K(t._path)===null?q0("child","path",e,!1):Qh("child","path",e,!1),new jt(t._repo,Ee(t._path,e))}function _1(t,e){t=dn(t),Y0("set",t._path),V0("set",e,t._path,!1);const n=new Ms;return s1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function v1(t){t=dn(t);const e=new g1(()=>{}),n=new Tl(e);return r1(t._repo,t,n).then(i=>new rr(i,new jt(t._repo,t._path),t._queryParams.getIndex()))}class Tl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new p1("value",this,new rr(e.snapshotNode,new jt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new m1(this,e,n):null}matches(e){return e instanceof Tl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}_0(jt);E0(jt);/**
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
 */const y1="FIREBASE_DATABASE_EMULATOR_HOST",oa={};let b1=!1;function w1(t,e,n,i){t.repoInfo_=new nh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function E1(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Iu(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[y1]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Iu(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new ii(ii.OWNER):new My(t.name,t.options,e);G0("Invalid Firebase Database URL",o),q(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=I1(a,t,u,new Dy(t.name,n));return new x1(f,t)}function C1(t,e){const n=oa[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),a1(t),delete n[t.key]}function I1(t,e,n,i){let r=oa[e.name];r||(r={},oa[e.name]=r);let s=r[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new e1(t,b1,n,i),r[t.toURLString()]=s,s}class x1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(t1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(C1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function Sl(t=$d(),e){const n=ur(t,"database").getImmediate({identifier:e}),i=Z_("database");if(i){const[r,s]=i.split(":");T1(n,r,parseInt(s,10))}return n}function T1(t,e,n,i={}){t=dn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ii(ii.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:tv(i.mockUserToken,t.app.options.projectId);s=new ii(o)}w1(r,e,n,s)}/**
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
 */function S1(t){yy(cy),sn(new Dt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return E1(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),xt(qc,Yc,t),xt(qc,Yc,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};S1();const sp=t=>{try{document.getElementById(t).scrollIntoView({behavior:"smooth"})}catch(e){throw new Error(e)}},A1=t=>t.replace(/\./g,"-"),k1=async t=>{const e=rp(Sl());return await v1(hs(e,`users/${t}`)).then(n=>n.exists()?n.val().count:0)},N1=async t=>{const e=Sl(),n=await k1(t);_1(rp(e,`users/${t}`),{count:n+1})},O1=()=>{fetch("https://api.ipify.org/?format=json").then(t=>t.json()).then(async({ip:t})=>{const e=A1(t);N1(e)})},R1={class:"nav-menu"},P1={class:"nav-items"},D1=$e({__name:"MenuBar",props:{displayingSection:String},setup(t){let e=Gt(!1);const n=()=>{e.value=!e.value},i=r=>{sp(r)};return(r,s)=>{const o=nn("font-awesome-icon");return X(),ce("div",null,[P("div",R1,[z(o,{class:"icon",icon:"fa-solid fa-bars",inverse:"",onClick:s[0]||(s[0]=a=>n())}),P("div",{class:Xe(["nav-content",rt(e)?"open-menu":"closed-menu"])},[z(o,{class:"logo l",icon:"fa-solid fa-paw",inverse:"",onClick:s[1]||(s[1]=a=>i("introduction"))}),P("ul",P1,[P("li",{class:Xe(t.displayingSection==="introduction"?"nav-button-selected":"nav-button"),onClick:s[2]||(s[2]=a=>i("introduction"))},"Home",2),P("li",{class:Xe([t.displayingSection==="experience"?"nav-button-selected":"nav-button","nav-button"]),onClick:s[3]||(s[3]=a=>i("experience"))},"Experience",2),P("li",{class:Xe([t.displayingSection==="education"?"nav-button-selected":"nav-button","nav-button"]),onClick:s[4]||(s[4]=a=>i("education"))},"Education",2),P("li",{class:Xe([t.displayingSection==="project"?"nav-button-selected":"nav-button","nav-button"]),onClick:s[5]||(s[5]=a=>i("project"))},"Projects",2)])],2)])])}}});const hn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},M1=hn(D1,[["__scopeId","data-v-50e3401d"]]),xu="/assets/don-cool.c53b70d9.jpeg",L1="/assets/shiba-cool.294ad440.png",F1=["src"],$1=$e({__name:"DynamicAvatar",setup(t){const e=()=>{document.getElementById("avatar").src=L1},n=()=>{document.getElementById("avatar").src=xu};return(i,r)=>(X(),ce("header",null,[P("img",{id:"avatar",class:"hxxl center",alt:"Don Truong",draggable:"false",onMouseover:r[0]||(r[0]=s=>e()),onMouseleave:r[1]||(r[1]=s=>n()),src:rt(xu)},null,40,F1)]))}});const B1=hn($1,[["__scopeId","data-v-1ebd7df0"]]),op=t=>($a("data-v-7f27cae6"),t=t(),Ba(),t),H1={class:"container"},j1=op(()=>P("img",{class:"wxl",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"},null,-1)),U1={class:"xxl"},W1={class:"typed-text",id:"dynamicText"},z1=op(()=>P("span",{class:"blinking-cursor"},"|",-1)),V1=$e({__name:"TypingText",props:{constantText:String,dynamicTexts:Array},setup(t){const e=t,n=70,i=10,r=1500;let s=Gt(""),o=!1,a=0,l=0;const c=async()=>{!e.dynamicTexts||(l<e.dynamicTexts[a].length?(o||(o=!0),s.value+=e.dynamicTexts[a][l],l+=1,setTimeout(c,n)):(o=!1,setTimeout(u,r)))},u=async()=>{if(!!e.dynamicTexts){if(l==0){f();return}l>0&&(o&&(o=!0),s.value=e.dynamicTexts[a].substring(0,l-1),l-=1,a+1<e.dynamicTexts.length&&e.dynamicTexts[a+1].startsWith(s.value)?f():setTimeout(u,i))}},f=()=>{!e.dynamicTexts||(o=!1,a+=1,a>=e.dynamicTexts.length&&(a=0),setTimeout(c,n))};return Ps(()=>{c()}),(d,m)=>(X(),ce("div",H1,[j1,P("h1",U1,[dd(Je(t.constantText)+" ",1),P("span",W1,Je(rt(s)),1),z1,P("span",{class:Xe(["cursor",{typing:rt(o)}])},"\xA0",2)])]))}});const q1=hn(V1,[["__scopeId","data-v-7f27cae6"]]);function Y1(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(r){r(n)}),(i=t.get("*"))&&i.slice().map(function(r){r(e,n)})}}}const ps=Y1(),ap=new Map,Tu={x:["left","center","right"],y:["top","bottom"]},G1=(t=>()=>t++)(0),K1=t=>typeof t!="string"?[]:t.split(/\s+/gi).filter(e=>e),Q1=t=>{typeof t=="string"&&(t=K1(t));let e=null,n=null;return t.forEach(i=>{Tu.y.indexOf(i)!==-1&&(n=i),Tu.x.indexOf(i)!==-1&&(e=i)}),{x:e,y:n}};class X1{constructor(e,n,i){this.remaining=n,this.callback=e,this.notifyItem=i,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Eo={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},Al=$e({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",t,e)},leave(t,e){this.$emit("leave",t,e)},afterLeave(){this.$emit("after-leave")}}});function J1(t,e,n,i,r,s){return X(),Pn(Cd,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:Me(()=>[it(t.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}Al.render=J1;Al.__file="src/VelocityGroup.vue";var kl=$e({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function Z1(t,e,n,i,r,s){return X(),Pn(Cd,{tag:"span",name:t.name},{default:Me(()=>[it(t.$slots,"default")]),_:3},8,["name"])}kl.render=Z1;kl.__file="src/CssGroup.vue";const Co="[-+]?[0-9]*.?[0-9]+",Su=[{name:"px",regexp:new RegExp(`^${Co}px$`)},{name:"%",regexp:new RegExp(`^${Co}%$`)},{name:"px",regexp:new RegExp(`^${Co}$`)}],ew=t=>{if(t==="auto")return{type:t,value:0};for(let e=0;e<Su.length;e++){const n=Su[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}},tw=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return ew(t);default:return{type:"",value:t}}},Nr={IDLE:0,DESTROYED:2};var Nl=$e({name:"notifications",components:{VelocityGroup:Al,CssGroup:kl},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Eo.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Eo.velocityAnimation},animationName:{type:String,default:Eo.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:ap.get("velocity"),timerControl:null}},computed:{actualWidth(){return tw(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=Q1(this.position),n=this.actualWidth.value,i=this.actualWidth.type,r={width:n+i};return e&&(r[e]="0px"),t&&(t==="center"?r.left=`calc(50% - ${+n/2}${i})`:r[t]="0px"),r},active(){return this.list.filter(t=>t.state!==Nr.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){ps.on("add",this.addItem),ps.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear){this.destroyAll();return}const e=typeof t.duration=="number"?t.duration:this.duration,n=typeof t.speed=="number"?t.speed:this.speed,i=typeof t.ignoreDuplicates=="boolean"?t.ignoreDuplicates:this.ignoreDuplicates,{title:r,text:s,type:o,data:a,id:l}=t,c={id:l||G1(),title:r,text:s,type:o,state:Nr.IDLE,speed:n,length:e+2*n,data:a};e>=0&&(this.timerControl=new X1(()=>this.destroy(c),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let f=-1;const d=this.active.some(_=>_.title===t.title&&_.text===t.text);(!i||!d)&&(u?(this.list.push(c),this.active.length>this.max&&(f=0)):(this.list.unshift(c),this.active.length>this.max&&(f=this.active.length-1)),f!==-1&&this.destroy(this.active[f]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,(e=t.type)!==null&&e!==void 0?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=Nr.DESTROYED,this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find(n=>n.id===t);e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var n;const i=(n=this.animation)===null||n===void 0?void 0:n[t];return typeof i=="function"?i.call(this,e):i},enter(t,e){if(!this.isVA)return;const n=this.getAnimation("enter",t);this.velocity(t,n,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const n=this.getAnimation("leave",t);this.velocity(t,n,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter(t=>t.state!==Nr.DESTROYED)}}});const nw=["data-id"],iw=["onClick"],rw=["innerHTML"],sw=["innerHTML"];function ow(t,e,n,i,r,s){return X(),ce("div",{class:"vue-notification-group",style:Hi(t.styles)},[(X(),Pn(Rg(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:Me(()=>[(X(!0),ce(Re,null,Ua(t.active,o=>(X(),ce("div",{key:o.id,class:"vue-notification-wrapper",style:Hi(t.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:e[0]||(e[0]=(...a)=>t.pauseTimeout&&t.pauseTimeout(...a)),onMouseleave:e[1]||(e[1]=(...a)=>t.resumeTimeout&&t.resumeTimeout(...a))},[it(t.$slots,"body",{class:Xe([t.classes,o.type]),item:o,close:()=>t.destroy(o)},()=>[Ct(" Default slot template "),P("div",{class:Xe(t.notifyClass(o)),onClick:a=>t.destroyIfNecessary(o)},[o.title?(X(),ce("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,rw)):Ct("v-if",!0),P("div",{class:"notification-content",innerHTML:o.text},null,8,sw)],10,iw)])],44,nw))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function aw(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var lw=`
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

`;aw(lw);Nl.render=ow;Nl.__file="src/Notifications.vue";const Ol=t=>{typeof t=="string"&&(t={title:"",text:t}),typeof t=="object"&&ps.emit("add",t)};Ol.close=function(t){ps.emit("close",t)};function cw(t,e={}){Object.entries(e).forEach(i=>ap.set(...i));const n=e.name||"notify";t.config.globalProperties["$"+n]=Ol,t.component(e.componentName||"notifications",Nl)}var uw={install:cw};const fw="/assets/Don_Truong_Resume.405b33cf.pdf",dw={class:"social"},hw={href:"https://github.com/truongdd03",target:"_blank"},pw={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},mw={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},gw=$e({__name:"SocialInformation",setup(t){const e=async()=>{const i="dong23102003@gmail.com";await navigator.clipboard.writeText(i),Ol({title:"Copied email address!"})},n=()=>{window.open(fw)};return(i,r)=>{const s=nn("font-awesome-icon");return X(),ce("header",null,[P("div",dw,[P("a",hw,[z(s,{class:"l icon",icon:"fa-brands fa-github",inverse:""})]),P("a",pw,[z(s,{class:"l icon",icon:"fa-brands fa-linkedin",inverse:""})]),P("a",mw,[z(s,{class:"l icon",icon:"fa-brands fa-discord",inverse:""})]),z(s,{class:"l icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=o=>e())}),z(s,{class:"l icon",icon:"fa-solid fa-file-pdf",inverse:"",onClick:r[1]||(r[1]=o=>n())})])])}}});const _w=hn(gw,[["__scopeId","data-v-fd2c1f2d"]]),vw={class:"wrapper black-background"},yw={class:"icon-wrapper"},bw=$e({__name:"IntroductionPane",setup(t){const e=["Don Truong","from Vietnam","studying at Michigan State University","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=()=>{sp("experience")};return(i,r)=>{const s=nn("font-awesome-icon");return X(),ce("div",vw,[z(B1),z(_w),z(q1,{constantText:"Hi, I'm ",dynamicTexts:e}),P("div",yw,[z(s,{class:"xl scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:r[0]||(r[0]=o=>n())})])])}}});const ww=hn(bw,[["__scopeId","data-v-070c8181"]]);var Rl={name:"Card"};const Ew={class:"p-card p-component"},Cw={key:0,class:"p-card-header"},Iw={class:"p-card-body"},xw={key:0,class:"p-card-title"},Tw={key:1,class:"p-card-subtitle"},Sw={class:"p-card-content"},Aw={key:2,class:"p-card-footer"};function kw(t,e,n,i,r,s){return X(),ce("div",Ew,[t.$slots.header?(X(),ce("div",Cw,[it(t.$slots,"header")])):Ct("",!0),P("div",Iw,[t.$slots.title?(X(),ce("div",xw,[it(t.$slots,"title")])):Ct("",!0),t.$slots.subtitle?(X(),ce("div",Tw,[it(t.$slots,"subtitle")])):Ct("",!0),P("div",Sw,[it(t.$slots,"content")]),t.$slots.footer?(X(),ce("div",Aw,[it(t.$slots,"footer")])):Ct("",!0)])])}function Nw(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var Ow=`
.p-card-header img {
    width: 100%;
}
`;Nw(Ow);Rl.render=kw;const Rw="/assets/holistics.338144b5.png",Au="/assets/oed.11068655.png",lp="/assets/msu.b99d12d1.png",Pw=t=>($a("data-v-93d67481"),t=t(),Ba(),t),Dw={class:"wrapper"},Mw=Pw(()=>P("div",{class:"title-wrapper"},[P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif"}),P("h1",{class:"title xl"},"Experience"),P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif"})],-1)),Lw=["href"],Fw={class:"l green company-name"},$w={class:"m"},Bw={class:"s description"},Hw={class:"s",style:{color:"yellow"}},jw={class:"duration-wrapper"},Uw={class:"m duration"},Ww=["src","alt"],zw=$e({__name:"ExperiencePane",setup(t){const e=[{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:Au,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2022 - Present",description:""},{company:"Michigan State University",icon:lp,skills:"JavaScript, HTML/CSS",title:"Research Assistant | Programmer",duration:"October 2022 - present",description:"Developed a website to customize survey forms for gathering statistics data from the USDA national farmers market."},{company:"Holistics Data",url:"https://www.holistics.io/",icon:Rw,skills:"Vue.js, TypeScript, HTML/CSS",title:"Software Engineer Intern",duration:"May 2022 - September 2022",description:"Worked on a new programming language called AML explicitly used for data analytics.                     Developed an online playground for testing and demonstrating AML.                     Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process"},{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:Au,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2021 - May 2022",description:"Performed security testing and applied a rate limit for access to prevent DDoS attacks.                    Removed redundant code and enhanced the data exporting process.                     Managed database and created new APIs to support different resource types.                     Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0)."},{company:"Chang's Kitchen",skills:"Swift, JavaScript",title:"Software Engineer Intern",duration:"May 2021 - August 2021",description:"Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers\u2019 data."}];return(n,i)=>{const r=nn("font-awesome-icon"),s=nn("Timeline");return X(),ce("div",Dw,[Mw,z(s,{value:e,align:"alternate",class:"timeline"},{content:Me(o=>[z(rt(Rl),{class:"experience-wrapper"},{title:Me(()=>[P("a",{class:"company-link",href:o.item.url,target:"_blank"},[P("h3",Fw,Je(o.item.company),1),o.item.url?(X(),Pn(r,{key:0,class:"m redirect-icon",icon:"fa-solid fa-up-right-from-square"})):Ct("",!0)],8,Lw)]),subtitle:Me(()=>[P("p",$w,Je(o.item.title),1)]),content:Me(()=>[P("p",Bw,Je(o.item.description),1),P("p",Hw,Je(`Related Skills: ${o.item.skills}`),1)]),_:2},1024)]),opposite:Me(o=>[P("div",jw,[P("p",Uw,Je(o.item.duration),1)])]),marker:Me(o=>[o.item.icon?(X(),ce("img",{key:0,class:"wl marker-icon",src:o.item.icon,alt:o.item.company},null,8,Ww)):(X(),Pn(r,{key:1,class:"l marker-icon-default",icon:"fa-solid fa-briefcase"}))]),_:1})])}}});const Vw=hn(zw,[["__scopeId","data-v-93d67481"]]),qw="/assets/ptnk.95fe9da3.png",Yw=t=>($a("data-v-d5a589a6"),t=t(),Ba(),t),Gw={class:"wrapper black-background"},Kw=Yw(()=>P("div",{class:"title-wrapper"},[P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-9.gif"}),P("h1",{class:"xl title"},"Education"),P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif"})],-1)),Qw={class:"l green"},Xw={class:"m"},Jw={key:0,class:"s description"},Zw={class:"duration-wrapper"},eE={class:"m duration"},tE=["src","alt"],nE=$e({__name:"EducationPane",setup(t){const e=[{icon:lp,school:"Michigan State University",duration:"September 2021 - May 2025",degree:"BS in Computer Science",description:`GPA: 4.0/4.0
Dean's List
MSU International Tution Grant
MSU Presidential Study Abroad Scholarship
MSU #YOU-ARE-WELCOME-HERE Scholarship`},{icon:qw,school:"VNU-HCM High School for the Gifted",duration:"September 2018 - June 2021",degree:"High School Diploma"}];return(n,i)=>{const r=nn("Timeline");return X(),ce("div",Gw,[Kw,z(r,{value:e,align:"alternate",class:"timeline"},{content:Me(s=>[z(rt(Rl),{class:"experience-wrapper"},{title:Me(()=>[P("h3",Qw,Je(s.item.school),1)]),subtitle:Me(()=>[P("p",Xw,Je(s.item.degree),1)]),content:Me(()=>[s.item.description?(X(),ce("p",Jw,Je(s.item.description),1)):Ct("",!0)]),_:2},1024)]),opposite:Me(s=>[P("div",Zw,[P("p",eE,Je(s.item.duration),1)])]),marker:Me(s=>[P("img",{class:"wl marker-icon",src:s.item.icon,alt:s.item.school},null,8,tE)]),_:1})])}}});const iE=hn(nE,[["__scopeId","data-v-d5a589a6"]]),rE="/assets/github.3d568164.png",sE=["href"],oE={key:0,class:"hovering-wrapper"},aE={class:"image-wrapper"},lE=["src"],cE={class:"information-wrapper"},uE={class:"m green"},fE={class:"s subtitle"},dE=$e({__name:"ProjectPane",props:{project:{type:Object,default:{}}},setup(t){let e=Gt(!1);return(n,i)=>{const r=nn("font-awesome-icon");return X(),ce("a",{class:"project-link",href:t.project.url,target:"_blank",onMouseover:i[0]||(i[0]=s=>Ne(e)?e.value=!0:e=!0),onMouseleave:i[1]||(i[1]=s=>Ne(e)?e.value=!1:e=!1)},[P("div",{class:Xe(`project-wrapper ${rt(e)?"hovering":""}`)},[rt(e)?(X(),ce("div",oE,[z(r,{class:"xl redirect-icon",icon:"fa-solid fa-up-right-from-square"})])):Ct("",!0),P("div",aE,[P("img",{class:"image",src:t.project.image?t.project.image:rt(rE)},null,8,lE)]),P("div",cE,[P("h1",uE,Je(t.project.name),1),P("p",fE,Je(t.project.subtitle),1)])],2)],40,sE)}}});const hE=hn(dE,[["__scopeId","data-v-fc38468a"]]),pE="/assets/personal-website.037b1be0.jpeg",mE="/assets/barter.337afb89.jpeg",gE="/assets/nuntium.098ca59c.jpeg",_E={class:"wrapper tmp"},vE=P("div",{class:"title-wrapper"},[P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-10-49.gif"}),P("h1",{class:"xl title"},"Projects"),P("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-11-64.gif"})],-1),yE=$e({__name:"ProjectsPane",setup(t){const e=[{name:"Personal Website",subtitle:"My personal website",skills:["TypeScript","Vue3"],image:pE,description:"",url:"https://github.com/truongdd03/truongdd03.github.io"},{name:"Search engine",subtitle:"A simple version of Google Search",skills:["C++"],description:"A multi-threaded search engine that crawls information from multiple websites, extracts keywords, and returns appropriate results based on user\u2019s queries. LRU cache is use to optimize query speech.",url:"https://github.com/truongdd03/searchEngine"},{name:"Barter",subtitle:"A used stuff trading website",skills:["HTML/CSS","JavaScript"],image:mE,description:"Winner of Best Use of Google Cloud. Implemented in 36 hours during SpartaHack VII, Barter is an exchanging items website with the goal to reduce the amount of trash and connect people.",url:"https://github.com/truongdd03/SpartaHack"},{name:"Nuntium",subtitle:"A news-sharing platform",skills:["Swift"],image:gE,description:"Implemented in 36 hours during ShellHacks 2021, this is a news-sharing platform that supports reliability ratings and a customized search engine.",url:"https://github.com/truongdd03/Shellhack"},{name:"Opty",subtitle:"A simple version of LinkedIn",skills:["Swift"],image:"",description:"A mobile-oriented social media that is used specifically for job search. Users can easily create a resume or a recruiting post. This app would also match suitable jobs or potential candidates based on users\u2019 profiles and job descriptions.",url:"https://github.com/truongdd03/Opty-IOS"},{name:"Financial Diary",subtitle:"An expenses and incomes tracking app",skills:["Swift"],image:"",description:"An iOS application to track users\u2019 expenses and incomes, as well as displaying real-time data of the stock market for investment suggestions.",url:"https://github.com/truongdd03/Financial-Diary"},{name:"Virtual Piano",subtitle:"Play musical notes from text files",skills:["Python"],image:"",description:"A virtual piano that plays musical notes from text files.",url:"https://github.com/truongdd03/VirtualPiano"}];return(n,i)=>(X(),ce("div",_E,[vE,(X(),ce(Re,null,Ua(e,r=>z(hE,{project:r},null,8,["project"])),64))]))}});var ku;const _r=typeof window<"u",bE=t=>typeof t=="string",Io=()=>{};_r&&((ku=window==null?void 0:window.navigator)==null?void 0:ku.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function wE(t){return typeof t=="function"?t():rt(t)}function EE(t){return t}function CE(t){return Sm()?(Am(t),!0):!1}function aa(t){var e;const n=wE(t);return(e=n==null?void 0:n.$el)!=null?e:n}const cp=_r?window:void 0;_r&&window.document;_r&&window.navigator;_r&&window.location;function IE(...t){let e,n,i,r;if(bE(t[0])?([n,i,r]=t,e=cp):[e,n,i,r]=t,!e)return Io;let s=Io;const o=ti(()=>aa(e),l=>{s(),l&&(l.addEventListener(n,i,r),s=()=>{l.removeEventListener(n,i,r),s=Io})},{immediate:!0,flush:"post"}),a=()=>{o(),s()};return CE(a),a}const la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ca="__vueuse_ssr_handlers__";la[ca]=la[ca]||{};la[ca];function Or(t,{window:e=cp,scrollTarget:n}={}){const i=Gt(!1),r=()=>{if(!e)return;const s=e.document,o=aa(t);if(!o)i.value=!1;else{const a=o.getBoundingClientRect();i.value=a.top<=(e.innerHeight||s.documentElement.clientHeight)&&a.left<=(e.innerWidth||s.documentElement.clientWidth)&&a.bottom>=0&&a.right>=0}};return ti(()=>aa(t),()=>r(),{immediate:!0,flush:"post"}),e&&IE(n||e,"scroll",r,{capture:!1,passive:!0}),i}var Nu;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Nu||(Nu={}));var xE=Object.defineProperty,Ou=Object.getOwnPropertySymbols,TE=Object.prototype.hasOwnProperty,SE=Object.prototype.propertyIsEnumerable,Ru=(t,e,n)=>e in t?xE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,AE=(t,e)=>{for(var n in e||(e={}))TE.call(e,n)&&Ru(t,n,e[n]);if(Ou)for(var n of Ou(e))SE.call(e,n)&&Ru(t,n,e[n]);return t};const kE={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};AE({linear:EE},kE);const NE=$e({__name:"App",setup(t){Ps(async()=>{O1()});const e=Gt(null),n=Gt(null),i=Gt(null),r=Gt(null),s=Or(e),o=Or(n),a=Or(i),l=Or(r),c=Qe(()=>{const u=["introduction","experience","education","project"],f=[s,o,a,l].map(d=>d.value);return u[f.lastIndexOf(!0)]});return(u,f)=>{const d=nn("notifications");return X(),ce(Re,null,[z(M1,{"displaying-section":rt(c)},null,8,["displaying-section"]),z(ww,{id:"introduction",ref_key:"introduction",ref:e},null,512),z(Vw,{id:"experience",ref_key:"experience",ref:n},null,512),z(iE,{id:"education",ref_key:"education",ref:i},null,512),z(yE,{id:"project",ref_key:"project",ref:r},null,512),z(d,{class:"notification",position:"bottom right"})],64)}}});var OE={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),r,s,o;if(n&&i){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,u=e instanceof RegExp;if(c!=u)return!1;if(c&&u)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(o=f[r],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let r=e.split("."),s=t;for(var n=0,i=r.length;n<i;++n){if(s==null)return null;s=s[r[n]]}return s}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let r of t)for(let s of e)if(String(this.resolveFieldData(r,s)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}}return i},reorderArray(t,e,n){let i;if(t&&e!==n){if(n>=t.length)for(i=n-t.length;i--+1;)t.push(void 0);t.splice(n,0,t.splice(e,1)[0])}},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,t),r=!0;break}r||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[r]===""?!0:n[r]}return null},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}};const De={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Pu={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[De.STARTS_WITH,De.CONTAINS,De.NOT_CONTAINS,De.ENDS_WITH,De.EQUALS,De.NOT_EQUALS],numeric:[De.EQUALS,De.NOT_EQUALS,De.LESS_THAN,De.LESS_THAN_OR_EQUAL_TO,De.GREATER_THAN,De.GREATER_THAN_OR_EQUAL_TO],date:[De.DATE_IS,De.DATE_IS_NOT,De.DATE_BEFORE,De.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},RE=Symbol();var PE={install:(t,e)=>{let n=e?{...Pu,...e}:{...Pu};const i={config:Ss(n)};t.config.globalProperties.$primevue=i,t.provide(RE,i)}},up={name:"Timeline",props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},methods:{getKey(t,e){return this.dataKey?OE.resolveFieldData(t,this.dataKey):e}},computed:{containerClass(){return["p-timeline p-component","p-timeline-"+this.align,"p-timeline-"+this.layout]}}};const DE={class:"p-timeline-event-opposite"},ME={class:"p-timeline-event-separator"},LE=P("div",{class:"p-timeline-event-marker"},null,-1),FE=P("div",{class:"p-timeline-event-connector"},null,-1),$E={class:"p-timeline-event-content"};function BE(t,e,n,i,r,s){return X(),ce("div",{class:Xe(s.containerClass)},[(X(!0),ce(Re,null,Ua(n.value,(o,a)=>(X(),ce("div",{key:s.getKey(o,a),class:"p-timeline-event"},[P("div",DE,[it(t.$slots,"opposite",{item:o,index:a})]),P("div",ME,[it(t.$slots,"marker",{item:o,index:a},()=>[LE]),a!==n.value.length-1?it(t.$slots,"connector",{key:0,item:o,index:a},()=>[FE]):Ct("",!0)]),P("div",$E,[it(t.$slots,"content",{item:o,index:a})])]))),128))],2)}function HE(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var jE=`
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
`;HE(jE);up.render=BE;function Du(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Du(Object(n),!0).forEach(function(i){Ie(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Du(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ms(t){return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ms(t)}function UE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mu(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function WE(t,e,n){return e&&Mu(t.prototype,e),n&&Mu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pl(t,e){return VE(t)||YE(t,e)||fp(t,e)||KE()}function vr(t){return zE(t)||qE(t)||fp(t)||GE()}function zE(t){if(Array.isArray(t))return ua(t)}function VE(t){if(Array.isArray(t))return t}function qE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function fp(t,e){if(!!t){if(typeof t=="string")return ua(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(t,e)}}function ua(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function GE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Lu=function(){},Dl={},dp={},hp=null,pp={mark:Lu,measure:Lu};try{typeof window<"u"&&(Dl=window),typeof document<"u"&&(dp=document),typeof MutationObserver<"u"&&(hp=MutationObserver),typeof performance<"u"&&(pp=performance)}catch{}var QE=Dl.navigator||{},Fu=QE.userAgent,$u=Fu===void 0?"":Fu,cn=Dl,de=dp,Bu=hp,Rr=pp;cn.document;var Ut=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",mp=~$u.indexOf("MSIE")||~$u.indexOf("Trident/"),Pr,Dr,Mr,Lr,Fr,Lt="___FONT_AWESOME___",fa=16,gp="fa",_p="svg-inline--fa",$n="data-fa-i2svg",da="data-fa-pseudo-element",XE="data-fa-pseudo-element-pending",Ml="data-prefix",Ll="data-icon",Hu="fontawesome-i2svg",JE="async",ZE=["HTML","HEAD","STYLE","SCRIPT"],vp=function(){try{return!0}catch{return!1}}(),fe="classic",_e="sharp",Fl=[fe,_e];function yr(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[fe]}})}var sr=yr((Pr={},Ie(Pr,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ie(Pr,_e,{fa:"solid",fass:"solid","fa-solid":"solid"}),Pr)),or=yr((Dr={},Ie(Dr,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ie(Dr,_e,{solid:"fass"}),Dr)),ar=yr((Mr={},Ie(Mr,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ie(Mr,_e,{fass:"fa-solid"}),Mr)),eC=yr((Lr={},Ie(Lr,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ie(Lr,_e,{"fa-solid":"fass"}),Lr)),tC=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,yp="fa-layers-text",nC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iC=yr((Fr={},Ie(Fr,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ie(Fr,_e,{900:"fass"}),Fr)),bp=[1,2,3,4,5,6,7,8,9,10],rC=bp.concat([11,12,13,14,15,16,17,18,19,20]),sC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lr=new Set;Object.keys(or[fe]).map(lr.add.bind(lr));Object.keys(or[_e]).map(lr.add.bind(lr));var oC=[].concat(Fl,vr(lr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sn.GROUP,Sn.SWAP_OPACITY,Sn.PRIMARY,Sn.SECONDARY]).concat(bp.map(function(t){return"".concat(t,"x")})).concat(rC.map(function(t){return"w-".concat(t)})),Li=cn.FontAwesomeConfig||{};function aC(t){var e=de.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(de&&typeof de.querySelector=="function"){var cC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cC.forEach(function(t){var e=Pl(t,2),n=e[0],i=e[1],r=lC(aC(n));r!=null&&(Li[i]=r)})}var wp={styleDefault:"solid",familyDefault:"classic",cssPrefix:gp,replacementClass:_p,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Li.familyPrefix&&(Li.cssPrefix=Li.familyPrefix);var di=k(k({},wp),Li);di.autoReplaceSvg||(di.observeMutations=!1);var R={};Object.keys(wp).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){di[t]=n,Fi.forEach(function(i){return i(R)})},get:function(){return di[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){di.cssPrefix=e,Fi.forEach(function(n){return n(R)})},get:function(){return di.cssPrefix}});cn.FontAwesomeConfig=R;var Fi=[];function uC(t){return Fi.push(t),function(){Fi.splice(Fi.indexOf(t),1)}}var Vt=fa,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fC(t){if(!(!t||!Ut)){var e=de.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=de.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return de.head.insertBefore(e,i),t}}var dC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cr(){for(var t=12,e="";t-- >0;)e+=dC[Math.random()*62|0];return e}function bi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $l(t){return t.classList?bi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ep(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hC(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ep(t[n]),'" ')},"").trim()}function Ys(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bl(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function pC(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function mC(t){var e=t.transform,n=t.width,i=n===void 0?fa:n,r=t.height,s=r===void 0?fa:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mp?l+="translate(".concat(e.x/Vt-i/2,"em, ").concat(e.y/Vt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var gC=`:root, :host {
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
}`;function Cp(){var t=gp,e=_p,n=R.cssPrefix,i=R.replacementClass,r=gC;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var ju=!1;function xo(){R.autoAddCss&&!ju&&(fC(Cp()),ju=!0)}var _C={mixout:function(){return{dom:{css:Cp,insertCss:xo}}},hooks:function(){return{beforeDOMElementCreation:function(){xo()},beforeI2svg:function(){xo()}}}},Ft=cn||{};Ft[Lt]||(Ft[Lt]={});Ft[Lt].styles||(Ft[Lt].styles={});Ft[Lt].hooks||(Ft[Lt].hooks={});Ft[Lt].shims||(Ft[Lt].shims=[]);var mt=Ft[Lt],Ip=[],vC=function t(){de.removeEventListener("DOMContentLoaded",t),gs=1,Ip.map(function(e){return e()})},gs=!1;Ut&&(gs=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),gs||de.addEventListener("DOMContentLoaded",vC));function yC(t){!Ut||(gs?setTimeout(t,0):Ip.push(t))}function br(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Ep(t):"<".concat(e," ").concat(hC(i),">").concat(s.map(br).join(""),"</").concat(e,">")}function Uu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bC=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},To=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?bC(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function wC(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ha(t){var e=wC(t);return e.length===1?e[0].toString(16):null}function EC(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Wu(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function pa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Wu(e);typeof mt.hooks.addPack=="function"&&!r?mt.hooks.addPack(t,Wu(e)):mt.styles[t]=k(k({},mt.styles[t]||{}),s),t==="fas"&&pa("fa",e)}var $r,Br,Hr,Kn=mt.styles,CC=mt.shims,IC=($r={},Ie($r,fe,Object.values(ar[fe])),Ie($r,_e,Object.values(ar[_e])),$r),Hl=null,xp={},Tp={},Sp={},Ap={},kp={},xC=(Br={},Ie(Br,fe,Object.keys(sr[fe])),Ie(Br,_e,Object.keys(sr[_e])),Br);function TC(t){return~oC.indexOf(t)}function SC(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!TC(r)?r:null}var Np=function(){var e=function(s){return To(Kn,function(o,a,l){return o[l]=To(a,s,{}),o},{})};xp=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Tp=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),kp=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Kn||R.autoFetchSvg,i=To(CC,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Sp=i.names,Ap=i.unicodes,Hl=Gs(R.styleDefault,{family:R.familyDefault})};uC(function(t){Hl=Gs(t.styleDefault,{family:R.familyDefault})});Np();function jl(t,e){return(xp[t]||{})[e]}function AC(t,e){return(Tp[t]||{})[e]}function An(t,e){return(kp[t]||{})[e]}function Op(t){return Sp[t]||{prefix:null,iconName:null}}function kC(t){var e=Ap[t],n=jl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function un(){return Hl}var Ul=function(){return{prefix:null,iconName:null,rest:[]}};function Gs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?fe:n,r=sr[i][t],s=or[i][t]||or[i][r],o=t in mt.styles?t:null;return s||o||null}var zu=(Hr={},Ie(Hr,fe,Object.keys(ar[fe])),Ie(Hr,_e,Object.keys(ar[_e])),Hr);function Ks(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},Ie(e,fe,"".concat(R.cssPrefix,"-").concat(fe)),Ie(e,_e,"".concat(R.cssPrefix,"-").concat(_e)),e),o=null,a=fe;(t.includes(s[fe])||t.some(function(c){return zu[fe].includes(c)}))&&(a=fe),(t.includes(s[_e])||t.some(function(c){return zu[_e].includes(c)}))&&(a=_e);var l=t.reduce(function(c,u){var f=SC(R.cssPrefix,u);if(Kn[u]?(u=IC[a].includes(u)?eC[a][u]:u,o=u,c.prefix=u):xC[a].indexOf(u)>-1?(o=u,c.prefix=Gs(u,{family:a})):f?c.iconName=f:u!==R.replacementClass&&u!==s[fe]&&u!==s[_e]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?Op(c.iconName):{},m=An(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Kn.far&&Kn.fas&&!R.autoFetchSvg&&(c.prefix="fas")}return c},Ul());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(Kn.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=An(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=un()||"fas"),l}var NC=function(){function t(){UE(this,t),this.definitions={}}return WE(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),o[a]),pa(a,o[a]);var l=ar[fe][a];l&&pa(l,o[a]),Np()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Vu=[],Qn={},si={},OC=Object.keys(si);function RC(t,e){var n=e.mixoutsTo;return Vu=t,Qn={},Object.keys(si).forEach(function(i){OC.indexOf(i)===-1&&delete si[i]}),Vu.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ms(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Qn[o]||(Qn[o]=[]),Qn[o].push(s[o])})}i.provides&&i.provides(si)}),n}function ma(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Qn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Bn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Qn[t]||[];r.forEach(function(s){s.apply(null,n)})}function $t(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return si[t]?si[t].apply(null,e):void 0}function ga(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||un();if(!!e)return e=An(n,e)||e,Uu(Rp.definitions,n,e)||Uu(mt.styles,n,e)}var Rp=new NC,PC=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Bn("noAuto")},DC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ut?(Bn("beforeI2svg",e),$t("pseudoElements2svg",e),$t("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,yC(function(){LC({autoReplaceSvgRoot:n}),Bn("watch",e)})}},MC={icon:function(e){if(e===null)return null;if(ms(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:An(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Gs(e[0]);return{prefix:i,iconName:An(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(tC))){var r=Ks(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||un(),iconName:An(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=un();return{prefix:s,iconName:An(s,e)||e}}}},tt={noAuto:PC,config:R,dom:DC,parse:MC,library:Rp,findIconDefinition:ga,toHtml:br},LC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?de:n;(Object.keys(mt.styles).length>0||R.autoFetchSvg)&&Ut&&R.autoReplaceSvg&&tt.dom.i2svg({node:i})};function Qs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return br(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ut){var i=de.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function FC(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Bl(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Ys(k(k({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function $C(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:o}),children:i}]}]}function Wl(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,_=i.found?i:n,E=_.width,N=_.height,b=r==="fak",S=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(ee){return f.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(f.classes).join(" "),D={children:[],attributes:k(k({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(N)})},B=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/N*16*.0625,"em")}:{};m&&(D.attributes[$n]=""),l&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||cr())},children:[l]}),delete D.attributes.title);var Y=k(k({},D),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:k(k({},B),f.styles)}),be=i.found&&n.found?$t("generateAbstractMask",Y)||{children:[],attributes:{}}:$t("generateAbstractIcon",Y)||{children:[],attributes:{}},me=be.children,U=be.attributes;return Y.children=me,Y.attributes=U,a?$C(Y):FC(Y)}function qu(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=k(k(k({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[$n]="");var u=k({},o.styles);Bl(r)&&(u.transform=mC({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Ys(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function BC(t){var e=t.content,n=t.title,i=t.extra,r=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Ys(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var So=mt.styles;function _a(t){var e=t[0],n=t[1],i=t.slice(4),r=Pl(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Sn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Sn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Sn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var HC={found:!1,width:512,height:512};function jC(t,e){!vp&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function va(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=un()),new Promise(function(i,r){if($t("missingIconAbstract"),n==="fa"){var s=Op(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&So[e]&&So[e][t]){var o=So[e][t];return i(_a(o))}jC(t,e),i(k(k({},HC),{},{icon:R.showMissingIcons&&t?$t("missingIconAbstract")||{}:{}}))})}var Yu=function(){},ya=R.measurePerformance&&Rr&&Rr.mark&&Rr.measure?Rr:{mark:Yu,measure:Yu},ki='FA "6.2.0"',UC=function(e){return ya.mark("".concat(ki," ").concat(e," begins")),function(){return Pp(e)}},Pp=function(e){ya.mark("".concat(ki," ").concat(e," ends")),ya.measure("".concat(ki," ").concat(e),"".concat(ki," ").concat(e," begins"),"".concat(ki," ").concat(e," ends"))},zl={begin:UC,end:Pp},Wr=function(){};function Gu(t){var e=t.getAttribute?t.getAttribute($n):null;return typeof e=="string"}function WC(t){var e=t.getAttribute?t.getAttribute(Ml):null,n=t.getAttribute?t.getAttribute(Ll):null;return e&&n}function zC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function VC(){if(R.autoReplaceSvg===!0)return zr.replace;var t=zr[R.autoReplaceSvg];return t||zr.replace}function qC(t){return de.createElementNS("http://www.w3.org/2000/svg",t)}function YC(t){return de.createElement(t)}function Dp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?qC:YC:n;if(typeof t=="string")return de.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Dp(o,{ceFn:i}))}),r}function GC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Dp(r),n)}),n.getAttribute($n)===null&&R.keepOriginalSource){var i=de.createComment(GC(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~$l(n).indexOf(R.replacementClass))return zr.replace(e);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return br(a)}).join(`
`);n.setAttribute($n,""),n.innerHTML=o}};function Ku(t){t()}function Mp(t,e){var n=typeof e=="function"?e:Wr;if(t.length===0)n();else{var i=Ku;R.mutateApproach===JE&&(i=cn.requestAnimationFrame||Ku),i(function(){var r=VC(),s=zl.begin("mutate");t.map(r),s(),n()})}}var Vl=!1;function Lp(){Vl=!0}function ba(){Vl=!1}var _s=null;function Qu(t){if(!!Bu&&!!R.observeMutations){var e=t.treeCallback,n=e===void 0?Wr:e,i=t.nodeCallback,r=i===void 0?Wr:i,s=t.pseudoElementsCallback,o=s===void 0?Wr:s,a=t.observeMutationsRoot,l=a===void 0?de:a;_s=new Bu(function(c){if(!Vl){var u=un();bi(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Gu(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Gu(f.target)&&~sC.indexOf(f.attributeName))if(f.attributeName==="class"&&WC(f.target)){var d=Ks($l(f.target)),m=d.prefix,_=d.iconName;f.target.setAttribute(Ml,m||u),_&&f.target.setAttribute(Ll,_)}else zC(f.target)&&r(f.target)})}}),Ut&&_s.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function KC(){!_s||_s.disconnect()}function QC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function XC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Ks($l(t));return r.prefix||(r.prefix=un()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=AC(r.prefix,t.innerText)||jl(r.prefix,ha(t.innerText))),!r.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function JC(t){var e=bi(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(i||cr()):(e["aria-hidden"]="true",e.focusable="false")),e}function ZC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=XC(t),i=n.iconName,r=n.prefix,s=n.rest,o=JC(t),a=ma("parseNodeAttributes",{},t),l=e.styleParser?QC(t):[];return k({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var eI=mt.styles;function Fp(t){var e=R.autoReplaceSvg==="nest"?Xu(t,{styleParser:!1}):Xu(t);return~e.extra.classes.indexOf(yp)?$t("generateLayersText",t,e):$t("generateSvgReplacementMutation",t,e)}var fn=new Set;Fl.map(function(t){fn.add("fa-".concat(t))});Object.keys(sr[fe]).map(fn.add.bind(fn));Object.keys(sr[_e]).map(fn.add.bind(fn));fn=vr(fn);function Ju(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ut)return Promise.resolve();var n=de.documentElement.classList,i=function(f){return n.add("".concat(Hu,"-").concat(f))},r=function(f){return n.remove("".concat(Hu,"-").concat(f))},s=R.autoFetchSvg?fn:Fl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(eI));s.includes("fa")||s.push("fa");var o=[".".concat(yp,":not([").concat($n,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat($n,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=bi(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=zl.begin("onTree"),c=a.reduce(function(u,f){try{var d=Fp(f);d&&u.push(d)}catch(m){vp||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Mp(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function tI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fp(t).then(function(n){n&&Mp([n],e)})}function nI(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:ga(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ga(r||{})),t(i,k(k({},n),{},{mask:r}))}}var iI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?It:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,E=n.classes,N=E===void 0?[]:E,b=n.attributes,S=b===void 0?{}:b,D=n.styles,B=D===void 0?{}:D;if(!!e){var Y=e.prefix,be=e.iconName,me=e.icon;return Qs(k({type:"icon"},e),function(){return Bn("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(d?S["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(_||cr()):(S["aria-hidden"]="true",S.focusable="false")),Wl({icons:{main:_a(me),mask:l?_a(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:be,transform:k(k({},It),r),symbol:o,title:d,maskId:u,titleId:_,extra:{attributes:S,styles:B,classes:N}})})}},rI={mixout:function(){return{icon:nI(iI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ju,n.nodeCallback=tI,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?de:i,s=n.callback,o=s===void 0?function(){}:s;return Ju(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(m,_){Promise.all([va(r,a),u.iconName?va(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var N=Pl(E,2),b=N[0],S=N[1];m([n,Wl({icons:{main:b,mask:S},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ys(a);l.length>0&&(r.style=l);var c;return Bl(o)&&(c=$t("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},sI={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Qs({type:"layer"},function(){Bn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(vr(s)).join(" ")},children:o}]})}}}},oI={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Qs({type:"counter",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:i}),BC({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(vr(a))}})})}}}},aI={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?It:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,m=d===void 0?{}:d;return Qs({type:"text",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:i}),qu({content:n,transform:k(k({},It),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(R.cssPrefix,"-layers-text")].concat(vr(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(mp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return R.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qu({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},lI=new RegExp('"',"ug"),Zu=[1105920,1112319];function cI(t){var e=t.replace(lI,""),n=EC(e,0),i=n>=Zu[0]&&n<=Zu[1],r=e.length===2?e[0]===e[1]:!1;return{value:ha(r?e[0]:e),isSecondary:i||r}}function ef(t,e){var n="".concat(XE).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=bi(t.children),o=s.filter(function(me){return me.getAttribute(da)===e})[0],a=cn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(nC),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?_e:fe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?or[d][l[2].toLowerCase()]:iC[d][c],_=cI(f),E=_.value,N=_.isSecondary,b=l[0].startsWith("FontAwesome"),S=jl(m,E),D=S;if(b){var B=kC(E);B.iconName&&B.prefix&&(S=B.iconName,m=B.prefix)}if(S&&!N&&(!o||o.getAttribute(Ml)!==m||o.getAttribute(Ll)!==D)){t.setAttribute(n,D),o&&t.removeChild(o);var Y=ZC(),be=Y.extra;be.attributes[da]=e,va(S,m).then(function(me){var U=Wl(k(k({},Y),{},{icons:{main:me,mask:Ul()},prefix:m,iconName:D,extra:be,watchable:!0})),ee=de.createElement("svg");e==="::before"?t.insertBefore(ee,t.firstChild):t.appendChild(ee),ee.outerHTML=U.map(function(ne){return br(ne)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function uI(t){return Promise.all([ef(t,"::before"),ef(t,"::after")])}function fI(t){return t.parentNode!==document.head&&!~ZE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(da)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tf(t){if(!!Ut)return new Promise(function(e,n){var i=bi(t.querySelectorAll("*")).filter(fI).map(uI),r=zl.begin("searchPseudoElements");Lp(),Promise.all(i).then(function(){r(),ba(),e()}).catch(function(){r(),ba(),n()})})}var dI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=tf,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?de:i;R.searchPseudoElements&&tf(r)}}},nf=!1,hI={mixout:function(){return{dom:{unwatch:function(){Lp(),nf=!0}}}},hooks:function(){return{bootstrap:function(){Qu(ma("mutationObserverCallbacks",{}))},noAuto:function(){KC()},watch:function(n){var i=n.observeMutationsRoot;nf?ba():Qu(ma("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},rf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},pI={mixout:function(){return{parse:{transform:function(n){return rf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=rf(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:k(k({},i.icon.attributes),m.path)}]}]}}}},Ao={x:0,y:0,width:"100%",height:"100%"};function sf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mI(t){return t.tag==="g"?t.children:[t]}var gI={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Ks(r.split(" ").map(function(o){return o.trim()})):Ul();return s.prefix||(s.prefix=un()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,m=pC({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:k(k({},Ao),{},{fill:"white"})},E=u.children?{children:u.children.map(sf)}:{},N={tag:"g",attributes:k({},m.inner),children:[sf(k({tag:u.tag,attributes:k(k({},u.attributes),m.path)},E))]},b={tag:"g",attributes:k({},m.outer),children:[N]},S="mask-".concat(a||cr()),D="clip-".concat(a||cr()),B={tag:"mask",attributes:k(k({},Ao),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,b]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:mI(d)},B]};return i.push(Y,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(S,")")},Ao)}),{children:i,attributes:r}}}},_I={provides:function(e){var n=!1;cn.matchMedia&&(n=cn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},vI={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},yI=[_C,rI,sI,oI,aI,dI,hI,pI,gI,_I,vI];RC(yI,{mixoutsTo:tt});tt.noAuto;var $p=tt.config,bI=tt.library;tt.dom;var vs=tt.parse;tt.findIconDefinition;tt.toHtml;var wI=tt.icon;tt.layer;var EI=tt.text;tt.counter;function of(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?of(Object(n),!0).forEach(function(i){Ue(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):of(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ys(t){return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ys(t)}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CI(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function II(t,e){if(t==null)return{};var n=CI(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function wa(t){return xI(t)||TI(t)||SI(t)||AI()}function xI(t){if(Array.isArray(t))return Ea(t)}function TI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function SI(t,e){if(!!t){if(typeof t=="string")return Ea(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ea(t,e)}}function Ea(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function AI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bp={exports:{}};(function(t){(function(e){var n=function(b,S,D){if(!c(S)||f(S)||d(S)||m(S)||l(S))return S;var B,Y=0,be=0;if(u(S))for(B=[],be=S.length;Y<be;Y++)B.push(n(b,S[Y],D));else{B={};for(var me in S)Object.prototype.hasOwnProperty.call(S,me)&&(B[b(me,D)]=n(b,S[me],D))}return B},i=function(b,S){S=S||{};var D=S.separator||"_",B=S.split||/(?=[A-Z])/;return b.split(B).join(D)},r=function(b){return _(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(S,D){return D?D.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var S=r(b);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(b,S){return i(b,S).toLowerCase()},a=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return a.call(b)=="[object Array]"},f=function(b){return a.call(b)=="[object Date]"},d=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},_=function(b){return b=b-0,b===b},E=function(b,S){var D=S&&"process"in S?S.process:S;return typeof D!="function"?b:function(B,Y){return D(B,b,Y)}},N={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(b,S){return n(E(r,S),b)},decamelizeKeys:function(b,S){return n(E(o,S),b,S)},pascalizeKeys:function(b,S){return n(E(s,S),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(kI)})(Bp);var NI=Bp.exports,OI=["class","style"];function RI(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=NI.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function PI(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ql(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return ql(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=PI(u);break;case"style":l.style=RI(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=II(n,OI);return gd(t.tag,ft(ft(ft({},e),{},{class:r.class,style:ft(ft({},r.style),o)},r.attrs),a),i)}var Hp=!1;try{Hp=!0}catch{}function DI(){if(!Hp&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $i(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ue({},t,e):{}}function MI(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ue(e,"fa-".concat(t.size),t.size!==null),Ue(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ue(e,"fa-pull-".concat(t.pull),t.pull!==null),Ue(e,"fa-swap-opacity",t.swapOpacity),Ue(e,"fa-bounce",t.bounce),Ue(e,"fa-shake",t.shake),Ue(e,"fa-beat",t.beat),Ue(e,"fa-fade",t.fade),Ue(e,"fa-beat-fade",t.beatFade),Ue(e,"fa-flash",t.flash),Ue(e,"fa-spin-pulse",t.spinPulse),Ue(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function af(t){if(t&&ys(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vs.icon)return vs.icon(t);if(t===null)return null;if(ys(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var LI=$e({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Qe(function(){return af(e.icon)}),s=Qe(function(){return $i("classes",MI(e))}),o=Qe(function(){return $i("transform",typeof e.transform=="string"?vs.transform(e.transform):e.transform)}),a=Qe(function(){return $i("mask",af(e.mask))}),l=Qe(function(){return wI(r.value,ft(ft(ft(ft({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ti(l,function(u){if(!u)return DI("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Qe(function(){return l.value?ql(l.value.abstract[0],{},i):null});return function(){return c.value}}});$e({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=$p.familyPrefix,s=Qe(function(){return["".concat(r,"-layers")].concat(wa(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return gd("div",{class:s.value},i.default?i.default():[])}}});$e({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=$p.familyPrefix,s=Qe(function(){return $i("classes",[].concat(wa(e.counter?["".concat(r,"-layers-counter")]:[]),wa(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Qe(function(){return $i("transform",typeof e.transform=="string"?vs.transform(e.transform):e.transform)}),a=Qe(function(){var c=EI(e.value.toString(),ft(ft({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Qe(function(){return ql(a.value,{},i)});return function(){return l.value}}});var FI={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},$I={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},BI={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},HI={prefix:"fas",iconName:"up-right-from-square",icon:[448,512,["external-link-alt"],"f35d","M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},jI={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z"]},UI={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},WI={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},zI={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},VI={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},qI={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var YI="firebase",GI="9.11.0";/**
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
 */xt(YI,GI,"app");const jp="@firebase/installations",Yl="0.5.13";/**
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
 */const Up=1e4,Wp=`w:${Yl}`,zp="FIS_v2",KI="https://firebaseinstallations.googleapis.com/v1",QI=60*60*1e3,XI="installations",JI="Installations";/**
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
 */const ZI={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Hn=new Ls(XI,JI,ZI);function Vp(t){return t instanceof Un&&t.code.includes("request-failed")}/**
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
 */function qp({projectId:t}){return`${KI}/projects/${t}/installations`}function Yp(t){return{token:t.token,requestStatus:2,expiresIn:tx(t.expiresIn),creationTime:Date.now()}}async function Gp(t,e){const i=(await e.json()).error;return Hn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Kp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ex(t,{refreshToken:e}){const n=Kp(t);return n.append("Authorization",nx(e)),n}async function Qp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tx(t){return Number(t.replace("s","000"))}function nx(t){return`${zp} ${t}`}/**
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
 */async function ix({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=qp(t),r=Kp(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:zp,appId:t.appId,sdkVersion:Wp},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Qp(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Yp(c.authToken)}}else throw await Gp("Create Installation",l)}/**
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
 */function Xp(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sx=/^[cdef][\w-]{21}$/,Ca="";function ox(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ax(t);return sx.test(n)?n:Ca}catch{return Ca}}function ax(t){return rx(t).substr(0,22)}/**
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
 */function Xs(t){return`${t.appName}!${t.appId}`}/**
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
 */const Jp=new Map;function Zp(t,e){const n=Xs(t);em(n,e),lx(n,e)}function em(t,e){const n=Jp.get(t);if(!!n)for(const i of n)i(e)}function lx(t,e){const n=cx();n&&n.postMessage({key:t,fid:e}),ux()}let kn=null;function cx(){return!kn&&"BroadcastChannel"in self&&(kn=new BroadcastChannel("[Firebase] FID Change"),kn.onmessage=t=>{em(t.data.key,t.data.fid)}),kn}function ux(){Jp.size===0&&kn&&(kn.close(),kn=null)}/**
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
 */const fx="firebase-installations-database",dx=1,jn="firebase-installations-store";let ko=null;function Gl(){return ko||(ko=Ld(fx,dx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}})),ko}async function bs(t,e){const n=Xs(t),r=(await Gl()).transaction(jn,"readwrite"),s=r.objectStore(jn),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Zp(t,e.fid),e}async function tm(t){const e=Xs(t),i=(await Gl()).transaction(jn,"readwrite");await i.objectStore(jn).delete(e),await i.done}async function Js(t,e){const n=Xs(t),r=(await Gl()).transaction(jn,"readwrite"),s=r.objectStore(jn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Zp(t,a.fid),a}/**
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
 */async function Kl(t){let e;const n=await Js(t.appConfig,i=>{const r=hx(i),s=px(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Ca?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hx(t){const e=t||{fid:ox(),registrationStatus:0};return nm(e)}function px(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Hn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=mx(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gx(t)}:{installationEntry:e}}async function mx(t,e){try{const n=await ix(t,e);return bs(t.appConfig,n)}catch(n){throw Vp(n)&&n.customData.serverCode===409?await tm(t.appConfig):await bs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gx(t){let e=await lf(t.appConfig);for(;e.registrationStatus===1;)await Xp(100),e=await lf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Kl(t);return i||n}return e}function lf(t){return Js(t,e=>{if(!e)throw Hn.create("installation-not-found");return nm(e)})}function nm(t){return _x(t)?{fid:t.fid,registrationStatus:0}:t}function _x(t){return t.registrationStatus===1&&t.registrationTime+Up<Date.now()}/**
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
 */async function vx({appConfig:t,heartbeatServiceProvider:e},n){const i=yx(t,n),r=ex(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:Wp,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Qp(()=>fetch(i,a));if(l.ok){const c=await l.json();return Yp(c)}else throw await Gp("Generate Auth Token",l)}function yx(t,{fid:e}){return`${qp(t)}/${e}/authTokens:generate`}/**
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
 */async function Ql(t,e=!1){let n;const i=await Js(t.appConfig,s=>{if(!im(s))throw Hn.create("not-registered");const o=s.authToken;if(!e&&Ex(o))return s;if(o.requestStatus===1)return n=bx(t,e),s;{if(!navigator.onLine)throw Hn.create("app-offline");const a=Ix(s);return n=wx(t,a),a}});return n?await n:i.authToken}async function bx(t,e){let n=await cf(t.appConfig);for(;n.authToken.requestStatus===1;)await Xp(100),n=await cf(t.appConfig);const i=n.authToken;return i.requestStatus===0?Ql(t,e):i}function cf(t){return Js(t,e=>{if(!im(e))throw Hn.create("not-registered");const n=e.authToken;return xx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wx(t,e){try{const n=await vx(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await bs(t.appConfig,i),n}catch(n){if(Vp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tm(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bs(t.appConfig,i)}throw n}}function im(t){return t!==void 0&&t.registrationStatus===2}function Ex(t){return t.requestStatus===2&&!Cx(t)}function Cx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+QI}function Ix(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xx(t){return t.requestStatus===1&&t.requestTime+Up<Date.now()}/**
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
 */async function Tx(t){const e=t,{installationEntry:n,registrationPromise:i}=await Kl(e);return i?i.catch(console.error):Ql(e).catch(console.error),n.fid}/**
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
 */async function Sx(t,e=!1){const n=t;return await Ax(n),(await Ql(n,e)).token}async function Ax(t){const{registrationPromise:e}=await Kl(t);e&&await e}/**
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
 */function kx(t){if(!t||!t.options)throw No("App Configuration");if(!t.name)throw No("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw No(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function No(t){return Hn.create("missing-app-config-values",{valueName:t})}/**
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
 */const rm="installations",Nx="installations-internal",Ox=t=>{const e=t.getProvider("app").getImmediate(),n=kx(e),i=ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Rx=t=>{const e=t.getProvider("app").getImmediate(),n=ur(e,rm).getImmediate();return{getId:()=>Tx(n),getToken:r=>Sx(n,r)}};function Px(){sn(new Dt(rm,Ox,"PUBLIC")),sn(new Dt(Nx,Rx,"PRIVATE"))}Px();xt(jp,Yl);xt(jp,Yl,"esm2017");/**
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
 */const ws="analytics",Dx="firebase_id",Mx="origin",Lx=60*1e3,Fx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new Qa("@firebase/analytics");/**
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
 */function om(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $x(t,e){const n=document.createElement("script");n.src=`${sm}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Bx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Hx(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await om(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Ze.error(a)}t("config",r,s)}async function jx(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await om(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Ze.error(s)}}function Ux(t,e,n,i){async function r(s,o,a){try{s==="event"?await jx(t,e,n,o,a):s==="config"?await Hx(t,e,n,i,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Ze.error(l)}}return r}function Wx(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Ux(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function zx(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(sm))return e;return null}/**
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
 */const Vx={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},at=new Ls("analytics","Analytics",Vx);/**
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
 */const qx=30,Yx=1e3;class Gx{constructor(e={},n=Yx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const am=new Gx;function Kx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Qx(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Kx(i)},s=Fx.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw at.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Xx(t,e=am,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw at.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw at.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new eT;return setTimeout(async()=>{a.abort()},n!==void 0?n:Lx),lm({appId:i,apiKey:r,measurementId:s},o,a,e)}async function lm(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=am){var s,o;const{appId:a,measurementId:l}=t;try{await Jx(i,e)}catch(c){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=c)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Qx(t);return r.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Zx(u)){if(r.deleteThrottleMetadata(a),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?$c(n,r.intervalMillis,qx):$c(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,d),Ze.debug(`Calling attemptFetch again in ${f} millis`),lm(t,d,i,r)}}function Jx(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(at.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zx(t){if(!(t instanceof Un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tT(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
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
 */async function nT(){var t;if(Nd())try{await Od()}catch(e){return Ze.warn(at.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ze.warn(at.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iT(t,e,n,i,r,s,o){var a;const l=Xx(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ze.error(m)),e.push(l);const c=nT().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([l,c]);zx()||$x(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Mx]="firebase",d.update=!0,f!=null&&(d[Dx]=f),r("config",u.measurementId,d),u.measurementId}/**
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
 */class rT{constructor(e){this.app=e}_delete(){return delete Bi[this.app.options.appId],Promise.resolve()}}let Bi={},uf=[];const ff={};let Oo="dataLayer",sT="gtag",df,cm,hf=!1;function oT(){const t=[];if(q_()&&t.push("This is a browser extension environment."),G_()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=at.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function aT(t,e,n){oT();const i=t.options.appId;if(!i)throw at.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw at.create("no-api-key");if(Bi[i]!=null)throw at.create("already-exists",{id:i});if(!hf){Bx(Oo);const{wrappedGtag:s,gtagCore:o}=Wx(Bi,uf,ff,Oo,sT);cm=s,df=o,hf=!0}return Bi[i]=iT(t,uf,ff,e,df,Oo,n),new rT(t)}function lT(t=$d()){t=dn(t);const e=ur(t,ws);return e.isInitialized()?e.getImmediate():cT(t)}function cT(t,e={}){const n=ur(t,ws);if(n.isInitialized()){const r=n.getImmediate();if(Zr(e,n.getOptions()))return r;throw at.create("already-initialized")}return n.initialize({options:e})}function uT(t,e,n,i){t=dn(t),tT(cm,Bi[t.app.options.appId],e,n,i).catch(r=>Ze.error(r))}const pf="@firebase/analytics",mf="0.8.1";function fT(){sn(new Dt(ws,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return aT(i,r,n)},"PUBLIC")),sn(new Dt("analytics-internal",t,"PRIVATE")),xt(pf,mf),xt(pf,mf,"esm2017");function t(e){try{const n=e.getProvider(ws).getImmediate();return{logEvent:(i,r,s)=>uT(n,i,r,s)}}catch(n){throw at.create("interop-component-reg-failed",{reason:n})}}}fT();const dT={apiKey:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",authDomain:"truongdd03.firebaseapp.com",projectId:"truongdd03",storageBucket:"truongdd03.appspot.com",messagingSenderId:{VITE_FIREBASE_API_KEY:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",VITE_AUTH_DOMAIN:"truongdd03.firebaseapp.com",VITE_PROJECT_ID:"truongdd03",VITE_STORAGE_BUCKET:"truongdd03.appspot.com",VITE_MESSAGE_SENDER_ID:"156878048180",VITE_APP_ID:"1:156878048180:web:cfffba9df67d9f5f4a00e1",VITE_MEASUREMENT_ID:"G-YZYZPEBDGH",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGING_SENDER_ID,appId:"1:156878048180:web:cfffba9df67d9f5f4a00e1",measurementId:"G-YZYZPEBDGH"},um=Fd(dT);lT(um);Sl(um);const hT=[qI,VI,zI,UI,BI,WI,HI,jI,$I,FI];hT.forEach(t=>bI.add(t));const Zs=H_(NE),pT=[uw,PE];pT.forEach(t=>Zs.use(t));Zs.component("Timeline",up);Zs.component("font-awesome-icon",LI);Zs.mount("#app");
