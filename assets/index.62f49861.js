(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Jo(Sp);function Du(t){return!!t||t===""}function Di(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=we(i)?Op(i):Di(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(we(t))return t;if(de(t))return t}}const kp=/;(?![^(]*\))/g,Np=/:(.+)/;function Op(t){const e={};return t.split(kp).forEach(n=>{if(n){const i=n.split(Np);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xt(t){let e="";if(we(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const i=Xt(t[n]);i&&(e+=i+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ye=t=>we(t)?t:t==null?"":B(t)||de(t)&&(t.toString===Fu||!U(t.toString))?JSON.stringify(t,Pu,2):String(t),Pu=(t,e)=>e&&e.__v_isRef?Pu(t,e.value):Kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Mu(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!B(e)&&!$u(e)?String(e):e,oe={},Yn=[],dt=()=>{},Rp=()=>!1,Dp=/^on[^a-z]/,ts=t=>Dp.test(t),Zo=t=>t.startsWith("onUpdate:"),Ae=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pp=Object.prototype.hasOwnProperty,K=(t,e)=>Pp.call(t,e),B=Array.isArray,Kn=t=>ns(t)==="[object Map]",Mu=t=>ns(t)==="[object Set]",U=t=>typeof t=="function",we=t=>typeof t=="string",ta=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Lu=t=>de(t)&&U(t.then)&&U(t.catch),Fu=Object.prototype.toString,ns=t=>Fu.call(t),Mp=t=>ns(t).slice(8,-1),$u=t=>ns(t)==="[object Object]",na=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ir=Jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),is=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lp=/-(\w)/g,It=is(t=>t.replace(Lp,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,ai=is(t=>t.replace(Fp,"-$1").toLowerCase()),rs=is(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rs=is(t=>t?`on${rs(t)}`:""),Pi=(t,e)=>!Object.is(t,e),Ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Il;const $p=()=>Il||(Il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class Bp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&_t&&(this.parent=_t,this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(e){if(this.active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Hp(t,e=_t){e&&e.active&&e.effects.push(t)}const ia=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hu=t=>(t.w&Jt)>0,ju=t=>(t.n&Jt)>0,jp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},Up=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Hu(r)&&!ju(r)?r.delete(t):e[n++]=r,r.w&=~Jt,r.n&=~Jt}e.length=n}},oo=new WeakMap;let Ei=0,Jt=1;const ao=30;let ot;const En=Symbol(""),lo=Symbol("");class ra{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hp(this,i)}run(){if(!this.active)return this.fn();let e=ot,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,qt=!0,Jt=1<<++Ei,Ei<=ao?jp(this):Tl(this),this.fn()}finally{Ei<=ao&&Up(this),Jt=1<<--Ei,ot=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Tl(this),this.onStop&&this.onStop(),this.active=!1)}}function Tl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Uu=[];function li(){Uu.push(qt),qt=!1}function ci(){const t=Uu.pop();qt=t===void 0?!0:t}function Ge(t,e,n){if(qt&&ot){let i=oo.get(t);i||oo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ia()),Wu(r)}}function Wu(t,e){let n=!1;Ei<=ao?ju(t)||(t.n|=Jt,n=!Hu(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t))}function Ot(t,e,n,i,r,s){const o=oo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?na(n)&&a.push(o.get("length")):(a.push(o.get(En)),Kn(t)&&a.push(o.get(lo)));break;case"delete":B(t)||(a.push(o.get(En)),Kn(t)&&a.push(o.get(lo)));break;case"set":Kn(t)&&a.push(o.get(En));break}if(a.length===1)a[0]&&co(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);co(ia(l))}}function co(t,e){const n=B(t)?t:[...t];for(const i of n)i.computed&&xl(i);for(const i of n)i.computed||xl(i)}function xl(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wp=Jo("__proto__,__v_isRef,__isVue"),zu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ta)),zp=sa(),Vp=sa(!1,!0),qp=sa(!0),Sl=Yp();function Yp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=X(this);for(let s=0,o=this.length;s<o;s++)Ge(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(X)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){li();const i=X(this)[e].apply(this,n);return ci(),i}}),t}function sa(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?cm:Gu:e?Ku:Yu).get(i))return i;const o=B(i);if(!t&&o&&K(Sl,r))return Reflect.get(Sl,r,s);const a=Reflect.get(i,r,s);return(ta(r)?zu.has(r):Wp(r))||(t||Ge(i,"get",r),e)?a:Se(a)?o&&na(r)?a:a.value:de(a)?t?Qu(a):os(a):a}}const Kp=Vu(),Gp=Vu(!0);function Vu(t=!1){return function(n,i,r,s){let o=n[i];if(ti(o)&&Se(o)&&!Se(r))return!1;if(!t&&(!Nr(r)&&!ti(r)&&(o=X(o),r=X(r)),!B(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const a=B(n)&&na(i)?Number(i)<n.length:K(n,i),l=Reflect.set(n,i,r,s);return n===X(s)&&(a?Pi(r,o)&&Ot(n,"set",i,r):Ot(n,"add",i,r)),l}}function Qp(t,e){const n=K(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ot(t,"delete",e,void 0),i}function Xp(t,e){const n=Reflect.has(t,e);return(!ta(e)||!zu.has(e))&&Ge(t,"has",e),n}function Jp(t){return Ge(t,"iterate",B(t)?"length":En),Reflect.ownKeys(t)}const qu={get:zp,set:Kp,deleteProperty:Qp,has:Xp,ownKeys:Jp},Zp={get:qp,set(t,e){return!0},deleteProperty(t,e){return!0}},em=Ae({},qu,{get:Vp,set:Gp}),oa=t=>t,ss=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,i=!1){t=t.__v_raw;const r=X(t),s=X(e);n||(e!==s&&Ge(r,"get",e),Ge(r,"get",s));const{has:o}=ss(r),a=i?oa:n?ca:Mi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function lr(t,e=!1){const n=this.__v_raw,i=X(n),r=X(t);return e||(t!==r&&Ge(i,"has",t),Ge(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function cr(t,e=!1){return t=t.__v_raw,!e&&Ge(X(t),"iterate",En),Reflect.get(t,"size",t)}function Al(t){t=X(t);const e=X(this);return ss(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function kl(t,e){e=X(e);const n=X(this),{has:i,get:r}=ss(n);let s=i.call(n,t);s||(t=X(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Pi(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function Nl(t){const e=X(this),{has:n,get:i}=ss(e);let r=n.call(e,t);r||(t=X(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ot(e,"delete",t,void 0),s}function Ol(){const t=X(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function ur(t,e){return function(i,r){const s=this,o=s.__v_raw,a=X(o),l=e?oa:t?ca:Mi;return!t&&Ge(a,"iterate",En),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function fr(t,e,n){return function(...i){const r=this.__v_raw,s=X(r),o=Kn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?oa:e?ca:Mi;return!e&&Ge(s,"iterate",l?lo:En),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function jt(t){return function(...e){return t==="delete"?!1:this}}function tm(){const t={get(s){return ar(this,s)},get size(){return cr(this)},has:lr,add:Al,set:kl,delete:Nl,clear:Ol,forEach:ur(!1,!1)},e={get(s){return ar(this,s,!1,!0)},get size(){return cr(this)},has:lr,add:Al,set:kl,delete:Nl,clear:Ol,forEach:ur(!1,!0)},n={get(s){return ar(this,s,!0)},get size(){return cr(this,!0)},has(s){return lr.call(this,s,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ur(!0,!1)},i={get(s){return ar(this,s,!0,!0)},get size(){return cr(this,!0)},has(s){return lr.call(this,s,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fr(s,!1,!1),n[s]=fr(s,!0,!1),e[s]=fr(s,!1,!0),i[s]=fr(s,!0,!0)}),[t,n,e,i]}const[nm,im,rm,sm]=tm();function aa(t,e){const n=e?t?sm:rm:t?im:nm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(K(n,r)&&r in i?n:i,r,s)}const om={get:aa(!1,!1)},am={get:aa(!1,!0)},lm={get:aa(!0,!1)},Yu=new WeakMap,Ku=new WeakMap,Gu=new WeakMap,cm=new WeakMap;function um(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fm(t){return t.__v_skip||!Object.isExtensible(t)?0:um(Mp(t))}function os(t){return ti(t)?t:la(t,!1,qu,om,Yu)}function dm(t){return la(t,!1,em,am,Ku)}function Qu(t){return la(t,!0,Zp,lm,Gu)}function la(t,e,n,i,r){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=fm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Gn(t){return ti(t)?Gn(t.__v_raw):!!(t&&t.__v_isReactive)}function ti(t){return!!(t&&t.__v_isReadonly)}function Nr(t){return!!(t&&t.__v_isShallow)}function Xu(t){return Gn(t)||ti(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Ju(t){return kr(t,"__v_skip",!0),t}const Mi=t=>de(t)?os(t):t,ca=t=>de(t)?Qu(t):t;function Zu(t){qt&&ot&&(t=X(t),Wu(t.dep||(t.dep=ia())))}function ef(t,e){t=X(t),t.dep&&co(t.dep)}function Se(t){return!!(t&&t.__v_isRef===!0)}function tf(t){return hm(t,!1)}function hm(t,e){return Se(t)?t:new pm(t,e)}class pm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Mi(e)}get value(){return Zu(this),this._value}set value(e){const n=this.__v_isShallow||Nr(e)||ti(e);e=n?e:X(e),Pi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mi(e),ef(this))}}function kt(t){return Se(t)?t.value:t}const mm={get:(t,e,n)=>kt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function nf(t){return Gn(t)?t:new Proxy(t,mm)}var rf;class gm{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rf]=!1,this._dirty=!0,this.effect=new ra(e,()=>{this._dirty||(this._dirty=!0,ef(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=X(this);return Zu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rf="__v_isReadonly";function _m(t,e,n=!1){let i,r;const s=U(t);return s?(i=t,r=dt):(i=t.get,r=t.set),new gm(i,r,s||!r,n)}function Yt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){as(s,e,n)}return r}function tt(t,e,n,i){if(U(t)){const s=Yt(t,e,n,i);return s&&Lu(s)&&s.catch(o=>{as(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(tt(t[s],e,n,i));return r}function as(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Yt(l,null,10,[t,o,a]);return}}vm(t,n,r,i)}function vm(t,e,n,i=!0){console.error(t)}let Li=!1,uo=!1;const Le=[];let yt=0;const Qn=[];let St=null,pn=0;const sf=Promise.resolve();let ua=null;function ym(t){const e=ua||sf;return t?e.then(this?t.bind(this):t):e}function bm(t){let e=yt+1,n=Le.length;for(;e<n;){const i=e+n>>>1;Fi(Le[i])<t?e=i+1:n=i}return e}function fa(t){(!Le.length||!Le.includes(t,Li&&t.allowRecurse?yt+1:yt))&&(t.id==null?Le.push(t):Le.splice(bm(t.id),0,t),of())}function of(){!Li&&!uo&&(uo=!0,ua=sf.then(lf))}function wm(t){const e=Le.indexOf(t);e>yt&&Le.splice(e,1)}function Em(t){B(t)?Qn.push(...t):(!St||!St.includes(t,t.allowRecurse?pn+1:pn))&&Qn.push(t),of()}function Rl(t,e=Li?yt+1:0){for(;e<Le.length;e++){const n=Le[e];n&&n.pre&&(Le.splice(e,1),e--,n())}}function af(t){if(Qn.length){const e=[...new Set(Qn)];if(Qn.length=0,St){St.push(...e);return}for(St=e,St.sort((n,i)=>Fi(n)-Fi(i)),pn=0;pn<St.length;pn++)St[pn]();St=null,pn=0}}const Fi=t=>t.id==null?1/0:t.id,Cm=(t,e)=>{const n=Fi(t)-Fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lf(t){uo=!1,Li=!0,Le.sort(Cm);const e=dt;try{for(yt=0;yt<Le.length;yt++){const n=Le[yt];n&&n.active!==!1&&Yt(n,null,14)}}finally{yt=0,Le.length=0,af(),Li=!1,ua=null,(Le.length||Qn.length)&&lf()}}function Im(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||oe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||oe;h&&(r=n.map(m=>m.trim())),f&&(r=n.map(Bu))}let a,l=i[a=Rs(e)]||i[a=Rs(It(e))];!l&&s&&(l=i[a=Rs(ai(e))]),l&&tt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tt(c,t,6,r)}}function cf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!U(t)){const l=c=>{const u=cf(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(de(t)&&i.set(t,null),null):(B(s)?s.forEach(l=>o[l]=null):Ae(o,s),de(t)&&i.set(t,o),o)}function ls(t,e){return!t||!ts(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,ai(e))||K(t,e))}let Be=null,cs=null;function Or(t){const e=Be;return Be=t,cs=t&&t.type.__scopeId||null,e}function da(t){cs=t}function ha(){cs=null}function Pe(t,e=Be,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Wl(-1);const s=Or(e),o=t(...r);return Or(s),i._d&&Wl(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:y,inheritAttrs:I}=t;let R,b;const S=Or(t);try{if(n.shapeFlag&4){const $=r||i;R=vt(u.call($,$,f,s,m,h,y)),b=l}else{const $=e;R=vt($.length>1?$(s,{attrs:l,slots:a,emit:c}):$(s,null)),b=e.props?l:Tm(l)}}catch($){Ti.length=0,as($,t,1),R=Y(nt)}let D=R;if(b&&I!==!1){const $=Object.keys(b),{shapeFlag:W}=D;$.length&&W&7&&(o&&$.some(Zo)&&(b=xm(b,o)),D=Zt(D,b))}return n.dirs&&(D=Zt(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),R=D,Or(S),R}const Tm=t=>{let e;for(const n in t)(n==="class"||n==="style"||ts(n))&&((e||(e={}))[n]=t[n]);return e},xm=(t,e)=>{const n={};for(const i in t)(!Zo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Sm(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Dl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ls(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Dl(i,o,c):!0:!!o;return!1}function Dl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ls(n,s))return!0}return!1}function Am({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const km=t=>t.__isSuspense;function Nm(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Em(t)}function Om(t,e){if(xe){let n=xe.provides;const i=xe.parent&&xe.parent.provides;i===n&&(n=xe.provides=Object.create(i)),n[t]=e}}function Ms(t,e,n=!1){const i=xe||Be;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&U(e)?e.call(i.proxy):e}}const Pl={};function Tr(t,e,n){return uf(t,e,n)}function uf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=oe){const a=xe;let l,c=!1,u=!1;if(Se(t)?(l=()=>t.value,c=Nr(t)):Gn(t)?(l=()=>t,i=!0):B(t)?(u=!0,c=t.some(b=>Gn(b)||Nr(b)),l=()=>t.map(b=>{if(Se(b))return b.value;if(Gn(b))return Wn(b);if(U(b))return Yt(b,a,2)})):U(t)?e?l=()=>Yt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),tt(t,a,3,[h])}:l=dt,e&&i){const b=l;l=()=>Wn(b())}let f,h=b=>{f=R.onStop=()=>{Yt(b,a,4)}};if(ji)return h=dt,e?n&&tt(e,a,3,[l(),u?[]:void 0,h]):l(),dt;let m=u?[]:Pl;const y=()=>{if(!!R.active)if(e){const b=R.run();(i||c||(u?b.some((S,D)=>Pi(S,m[D])):Pi(b,m)))&&(f&&f(),tt(e,a,3,[b,m===Pl?void 0:m,h]),m=b)}else R.run()};y.allowRecurse=!!e;let I;r==="sync"?I=y:r==="post"?I=()=>Ue(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>fa(y));const R=new ra(l,I);return e?n?y():m=R.run():r==="post"?Ue(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&ea(a.scope.effects,R)}}function Rm(t,e,n){const i=this.proxy,r=we(t)?t.includes(".")?ff(i,t):()=>i[t]:t.bind(i,i);let s;U(e)?s=e:(s=e.handler,n=e);const o=xe;ni(this);const a=uf(r,s.bind(i),n);return o?ni(o):Cn(),a}function ff(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Wn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Wn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(Mu(t)||Kn(t))t.forEach(n=>{Wn(n,e)});else if($u(t))for(const n in t)Wn(t[n],e);return t}function df(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{t.isMounted=!0}),gf(()=>{t.isUnmounting=!0}),t}const Xe=[Function,Array],Dm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(t,{slots:e}){const n=Rf(),i=df();let r;return()=>{const s=e.default&&pa(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const I of s)if(I.type!==nt){o=I;break}}const a=X(t),{mode:l}=a;if(i.isLeaving)return Ls(o);const c=Ml(o);if(!c)return Ls(o);const u=$i(c,a,i,n);Bi(c,u);const f=n.subTree,h=f&&Ml(f);let m=!1;const{getTransitionKey:y}=c.type;if(y){const I=y();r===void 0?r=I:I!==r&&(r=I,m=!0)}if(h&&h.type!==nt&&(!mn(c,h)||m)){const I=$i(h,a,i,n);if(Bi(h,I),l==="out-in")return i.isLeaving=!0,I.afterLeave=()=>{i.isLeaving=!1,n.update()},Ls(o);l==="in-out"&&c.type!==nt&&(I.delayLeave=(R,b,S)=>{const D=hf(i,h);D[String(h.key)]=h,R._leaveCb=()=>{b(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Pm=Dm;function hf(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function $i(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:I,onAppear:R,onAfterAppear:b,onAppearCancelled:S}=e,D=String(t.key),$=hf(n,t),W=(j,J)=>{j&&tt(j,i,9,J)},ye=(j,J)=>{const ne=J[1];W(j,J),B(j)?j.every(Re=>Re.length<=1)&&ne():j.length<=1&&ne()},me={mode:s,persisted:o,beforeEnter(j){let J=a;if(!n.isMounted)if(r)J=I||a;else return;j._leaveCb&&j._leaveCb(!0);const ne=$[D];ne&&mn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),W(J,[j])},enter(j){let J=l,ne=c,Re=u;if(!n.isMounted)if(r)J=R||l,ne=b||c,Re=S||u;else return;let P=!1;const pe=j._enterCb=Ve=>{P||(P=!0,Ve?W(Re,[j]):W(ne,[j]),me.delayedLeave&&me.delayedLeave(),j._enterCb=void 0)};J?ye(J,[j,pe]):pe()},leave(j,J){const ne=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return J();W(f,[j]);let Re=!1;const P=j._leaveCb=pe=>{Re||(Re=!0,J(),pe?W(y,[j]):W(m,[j]),j._leaveCb=void 0,$[ne]===t&&delete $[ne])};$[ne]=t,h?ye(h,[j,P]):P()},clone(j){return $i(j,e,n,i)}};return me}function Ls(t){if(us(t))return t=Zt(t),t.children=null,t}function Ml(t){return us(t)?t.children?t.children[0]:void 0:t}function Bi(t,e){t.shapeFlag&6&&t.component?Bi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pa(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ke?(o.patchFlag&128&&r++,i=i.concat(pa(o.children,e,a))):(e||o.type!==nt)&&i.push(a!=null?Zt(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function He(t){return U(t)?{setup:t,name:t.name}:t}const Ii=t=>!!t.type.__asyncLoader,us=t=>t.type.__isKeepAlive;function Mm(t,e){pf(t,"a",e)}function Lm(t,e){pf(t,"da",e)}function pf(t,e,n=xe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(fs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)us(r.parent.vnode)&&Fm(i,e,n,r),r=r.parent}}function Fm(t,e,n,i){const r=fs(e,t,i,!0);_f(()=>{ea(i[e],r)},n)}function fs(t,e,n=xe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;li(),ni(n);const a=tt(e,n,t,o);return Cn(),ci(),a});return i?r.unshift(s):r.push(s),s}}const $t=t=>(e,n=xe)=>(!ji||t==="sp")&&fs(t,(...i)=>e(...i),n),$m=$t("bm"),ds=$t("m"),Bm=$t("bu"),mf=$t("u"),gf=$t("bum"),_f=$t("um"),Hm=$t("sp"),jm=$t("rtg"),Um=$t("rtc");function Wm(t,e=xe){fs("ec",t,e)}function ln(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(li(),tt(l,n,8,[t.el,a,t,e]),ci())}}const ma="components";function Tn(t,e){return yf(ma,t,!0,e)||t}const vf=Symbol();function zm(t){return we(t)?yf(ma,t,!1)||t:t||vf}function yf(t,e,n=!0,i=!1){const r=Be||xe;if(r){const s=r.type;if(t===ma){const a=yg(s,!1);if(a&&(a===e||a===It(e)||a===rs(It(e))))return s}const o=Ll(r[t]||s[t],e)||Ll(r.appContext[t],e);return!o&&i?s:o}}function Ll(t,e){return t&&(t[e]||t[It(e)]||t[rs(It(e))])}function ga(t,e,n,i){let r;const s=n&&n[i];if(B(t)||we(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(de(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function Ze(t,e,n={},i,r){if(Be.isCE||Be.parent&&Ii(Be.parent)&&Be.parent.isCE)return Y("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),Q();const o=s&&bf(s(n)),a=xn(ke,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function bf(t){return t.some(e=>Pr(e)?!(e.type===nt||e.type===ke&&!bf(e.children)):!0)?t:null}const fo=t=>t?Df(t)?wa(t)||t.proxy:fo(t.parent):null,Rr=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fo(t.parent),$root:t=>fo(t.root),$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>t.f||(t.f=()=>fa(t.update)),$nextTick:t=>t.n||(t.n=ym.bind(t.proxy)),$watch:t=>Rm.bind(t)}),Vm={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==oe&&K(i,e))return o[e]=1,i[e];if(r!==oe&&K(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,s[e];if(n!==oe&&K(n,e))return o[e]=4,n[e];ho&&(o[e]=0)}}const u=Rr[e];let f,h;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==oe&&K(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,K(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==oe&&K(r,e)?(r[e]=n,!0):i!==oe&&K(i,e)?(i[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==oe&&K(t,o)||e!==oe&&K(e,o)||(a=s[0])&&K(a,o)||K(i,o)||K(Rr,o)||K(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ho=!0;function qm(t){const e=_a(t),n=t.proxy,i=t.ctx;ho=!1,e.beforeCreate&&Fl(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:I,deactivated:R,beforeDestroy:b,beforeUnmount:S,destroyed:D,unmounted:$,render:W,renderTracked:ye,renderTriggered:me,errorCaptured:j,serverPrefetch:J,expose:ne,inheritAttrs:Re,components:P,directives:pe,filters:Ve}=e;if(c&&Ym(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const ie=o[ge];U(ie)&&(i[ge]=ie.bind(n))}if(r){const ge=r.call(n,n);de(ge)&&(t.data=os(ge))}if(ho=!0,s)for(const ge in s){const ie=s[ge],on=U(ie)?ie.bind(n,n):U(ie.get)?ie.get.bind(n,n):dt,sr=!U(ie)&&U(ie.set)?ie.set.bind(n):dt,an=Je({get:on,set:sr});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>an.value,set:pt=>an.value=pt})}if(a)for(const ge in a)wf(a[ge],i,n,ge);if(l){const ge=U(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ie=>{Om(ie,ge[ie])})}u&&Fl(u,t,"c");function Ce(ge,ie){B(ie)?ie.forEach(on=>ge(on.bind(n))):ie&&ge(ie.bind(n))}if(Ce($m,f),Ce(ds,h),Ce(Bm,m),Ce(mf,y),Ce(Mm,I),Ce(Lm,R),Ce(Wm,j),Ce(Um,ye),Ce(jm,me),Ce(gf,S),Ce(_f,$),Ce(Hm,J),B(ne))if(ne.length){const ge=t.exposed||(t.exposed={});ne.forEach(ie=>{Object.defineProperty(ge,ie,{get:()=>n[ie],set:on=>n[ie]=on})})}else t.exposed||(t.exposed={});W&&t.render===dt&&(t.render=W),Re!=null&&(t.inheritAttrs=Re),P&&(t.components=P),pe&&(t.directives=pe)}function Ym(t,e,n=dt,i=!1){B(t)&&(t=po(t));for(const r in t){const s=t[r];let o;de(s)?"default"in s?o=Ms(s.from||r,s.default,!0):o=Ms(s.from||r):o=Ms(s),Se(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Fl(t,e,n){tt(B(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function wf(t,e,n,i){const r=i.includes(".")?ff(n,i):()=>n[i];if(we(t)){const s=e[t];U(s)&&Tr(r,s)}else if(U(t))Tr(r,t.bind(n));else if(de(t))if(B(t))t.forEach(s=>wf(s,e,n,i));else{const s=U(t.handler)?t.handler.bind(n):e[t.handler];U(s)&&Tr(r,s,t)}}function _a(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Dr(l,c,o,!0)),Dr(l,e,o)),de(e)&&s.set(e,l),l}function Dr(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Dr(t,s,n,!0),r&&r.forEach(o=>Dr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Km[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Km={data:$l,props:fn,emits:fn,methods:fn,computed:fn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:fn,directives:fn,watch:Qm,provide:$l,inject:Gm};function $l(t,e){return e?t?function(){return Ae(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Gm(t,e){return fn(po(t),po(e))}function po(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function fn(t,e){return t?Ae(Ae(Object.create(null),t),e):e}function Qm(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const i in e)n[i]=$e(t[i],e[i]);return n}function Xm(t,e,n,i=!1){const r={},s={};kr(s,hs,1),t.propsDefaults=Object.create(null),Ef(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:dm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Jm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=X(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ls(t.emitsOptions,h))continue;const m=e[h];if(l)if(K(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const y=It(h);r[y]=mo(l,a,y,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Ef(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!K(e,f)&&((u=ai(f))===f||!K(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=mo(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!K(e,f)&&!0)&&(delete s[f],c=!0)}c&&Ot(t,"set","$attrs")}function Ef(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;r&&K(r,u=It(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ls(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=X(n),c=a||oe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=mo(r,l,f,c[f],t,!K(c,f))}}return o}function mo(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(ni(r),i=c[n]=l.call(null,e),Cn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ai(n))&&(i=!0))}return i}function Cf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!U(t)){const u=f=>{l=!0;const[h,m]=Cf(f,e,!0);Ae(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return de(t)&&i.set(t,Yn),Yn;if(B(s))for(let u=0;u<s.length;u++){const f=It(s[u]);Bl(f)&&(o[f]=oe)}else if(s)for(const u in s){const f=It(u);if(Bl(f)){const h=s[u],m=o[f]=B(h)||U(h)?{type:h}:h;if(m){const y=Ul(Boolean,m.type),I=Ul(String,m.type);m[0]=y>-1,m[1]=I<0||y<I,(y>-1||K(m,"default"))&&a.push(f)}}}const c=[o,a];return de(t)&&i.set(t,c),c}function Bl(t){return t[0]!=="$"}function Hl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function jl(t,e){return Hl(t)===Hl(e)}function Ul(t,e){return B(e)?e.findIndex(n=>jl(n,t)):U(e)&&jl(e,t)?0:-1}const If=t=>t[0]==="_"||t==="$stable",va=t=>B(t)?t.map(vt):[vt(t)],Zm=(t,e,n)=>{if(e._n)return e;const i=Pe((...r)=>va(e(...r)),n);return i._c=!1,i},Tf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(If(r))continue;const s=t[r];if(U(s))e[r]=Zm(r,s,i);else if(s!=null){const o=va(s);e[r]=()=>o}}},xf=(t,e)=>{const n=va(e);t.slots.default=()=>n},eg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),kr(e,"_",n)):Tf(e,t.slots={})}else t.slots={},e&&xf(t,e);kr(t.slots,hs,1)},tg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=oe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ae(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Tf(e,r)),o=e}else e&&(xf(t,e),o={default:1});if(s)for(const a in r)!If(a)&&!(a in o)&&delete r[a]};function Sf(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ng=0;function ig(t,e){return function(i,r=null){U(i)||(i=Object.assign({},i)),r!=null&&!de(r)&&(r=null);const s=Sf(),o=new Set;let a=!1;const l=s.app={_uid:ng++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...u)):U(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Y(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,wa(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function go(t,e,n,i,r=!1){if(B(t)){t.forEach((h,m)=>go(h,e&&(B(e)?e[m]:e),n,i,r));return}if(Ii(i)&&!r)return;const s=i.shapeFlag&4?wa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,K(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),U(l))Yt(l,a,12,[o,u]);else{const h=we(l),m=Se(l);if(h||m){const y=()=>{if(t.f){const I=h?u[l]:l.value;r?B(I)&&ea(I,s):B(I)?I.includes(s)||I.push(s):h?(u[l]=[s],K(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,K(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ue(y,n)):y()}}}const Ue=Nm;function rg(t){return sg(t)}function sg(t,e){const n=$p();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=dt,insertStaticContent:y}=t,I=(d,p,g,v=null,_=null,C=null,A=!1,E=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!mn(d,p)&&(v=or(d),pt(d,_,C,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=p;switch(w){case ya:R(d,p,g,v);break;case nt:b(d,p,g,v);break;case Fs:d==null&&S(p,g,v,A);break;case ke:P(d,p,g,v,_,C,A,E,T);break;default:N&1?W(d,p,g,v,_,C,A,E,T):N&6?pe(d,p,g,v,_,C,A,E,T):(N&64||N&128)&&w.process(d,p,g,v,_,C,A,E,T,Hn)}M!=null&&_&&go(M,d&&d.ref,C,p||d,!p)},R=(d,p,g,v)=>{if(d==null)i(p.el=a(p.children),g,v);else{const _=p.el=d.el;p.children!==d.children&&c(_,p.children)}},b=(d,p,g,v)=>{d==null?i(p.el=l(p.children||""),g,v):p.el=d.el},S=(d,p,g,v)=>{[d.el,d.anchor]=y(d.children,p,g,v,d.el,d.anchor)},D=({el:d,anchor:p},g,v)=>{let _;for(;d&&d!==p;)_=h(d),i(d,g,v),d=_;i(p,g,v)},$=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},W=(d,p,g,v,_,C,A,E,T)=>{A=A||p.type==="svg",d==null?ye(p,g,v,_,C,A,E,T):J(d,p,_,C,A,E,T)},ye=(d,p,g,v,_,C,A,E)=>{let T,w;const{type:M,props:N,shapeFlag:L,transition:H,dirs:z}=d;if(T=d.el=o(d.type,C,N&&N.is,N),L&8?u(T,d.children):L&16&&j(d.children,T,null,v,_,C&&M!=="foreignObject",A,E),z&&ln(d,null,v,"created"),N){for(const ee in N)ee!=="value"&&!Ir(ee)&&s(T,ee,null,N[ee],C,d.children,v,_,Tt);"value"in N&&s(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&gt(w,v,d)}me(T,d,d.scopeId,A,v),z&&ln(d,null,v,"beforeMount");const re=(!_||_&&!_.pendingBranch)&&H&&!H.persisted;re&&H.beforeEnter(T),i(T,p,g),((w=N&&N.onVnodeMounted)||re||z)&&Ue(()=>{w&&gt(w,v,d),re&&H.enter(T),z&&ln(d,null,v,"mounted")},_)},me=(d,p,g,v,_)=>{if(g&&m(d,g),v)for(let C=0;C<v.length;C++)m(d,v[C]);if(_){let C=_.subTree;if(p===C){const A=_.vnode;me(d,A,A.scopeId,A.slotScopeIds,_.parent)}}},j=(d,p,g,v,_,C,A,E,T=0)=>{for(let w=T;w<d.length;w++){const M=d[w]=E?Vt(d[w]):vt(d[w]);I(null,M,p,g,v,_,C,A,E)}},J=(d,p,g,v,_,C,A)=>{const E=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=p;T|=d.patchFlag&16;const N=d.props||oe,L=p.props||oe;let H;g&&cn(g,!1),(H=L.onVnodeBeforeUpdate)&&gt(H,g,p,d),M&&ln(p,d,g,"beforeUpdate"),g&&cn(g,!0);const z=_&&p.type!=="foreignObject";if(w?ne(d.dynamicChildren,w,E,g,v,z,C):A||ie(d,p,E,null,g,v,z,C,!1),T>0){if(T&16)Re(E,p,N,L,g,v,_);else if(T&2&&N.class!==L.class&&s(E,"class",null,L.class,_),T&4&&s(E,"style",N.style,L.style,_),T&8){const re=p.dynamicProps;for(let ee=0;ee<re.length;ee++){const ve=re[ee],st=N[ve],jn=L[ve];(jn!==st||ve==="value")&&s(E,ve,st,jn,_,d.children,g,v,Tt)}}T&1&&d.children!==p.children&&u(E,p.children)}else!A&&w==null&&Re(E,p,N,L,g,v,_);((H=L.onVnodeUpdated)||M)&&Ue(()=>{H&&gt(H,g,p,d),M&&ln(p,d,g,"updated")},v)},ne=(d,p,g,v,_,C,A)=>{for(let E=0;E<p.length;E++){const T=d[E],w=p[E],M=T.el&&(T.type===ke||!mn(T,w)||T.shapeFlag&70)?f(T.el):g;I(T,w,M,null,v,_,C,A,!0)}},Re=(d,p,g,v,_,C,A)=>{if(g!==v){if(g!==oe)for(const E in g)!Ir(E)&&!(E in v)&&s(d,E,g[E],null,A,p.children,_,C,Tt);for(const E in v){if(Ir(E))continue;const T=v[E],w=g[E];T!==w&&E!=="value"&&s(d,E,w,T,A,p.children,_,C,Tt)}"value"in v&&s(d,"value",g.value,v.value)}},P=(d,p,g,v,_,C,A,E,T)=>{const w=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=p;H&&(E=E?E.concat(H):H),d==null?(i(w,g,v),i(M,g,v),j(p.children,g,M,_,C,A,E,T)):N>0&&N&64&&L&&d.dynamicChildren?(ne(d.dynamicChildren,L,g,_,C,A,E),(p.key!=null||_&&p===_.subTree)&&Af(d,p,!0)):ie(d,p,g,M,_,C,A,E,T)},pe=(d,p,g,v,_,C,A,E,T)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?_.ctx.activate(p,g,v,A,T):Ve(p,g,v,_,C,A,T):mi(d,p,T)},Ve=(d,p,g,v,_,C,A)=>{const E=d.component=pg(d,v,_);if(us(d)&&(E.ctx.renderer=Hn),mg(E),E.asyncDep){if(_&&_.registerDep(E,Ce),!d.el){const T=E.subTree=Y(nt);b(null,T,p,g)}return}Ce(E,d,p,g,_,C,A)},mi=(d,p,g)=>{const v=p.component=d.component;if(Sm(d,p,g))if(v.asyncDep&&!v.asyncResolved){ge(v,p,g);return}else v.next=p,wm(v.update),v.update();else p.el=d.el,v.vnode=p},Ce=(d,p,g,v,_,C,A)=>{const E=()=>{if(d.isMounted){let{next:M,bu:N,u:L,parent:H,vnode:z}=d,re=M,ee;cn(d,!1),M?(M.el=z.el,ge(d,M,A)):M=z,N&&Ds(N),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&gt(ee,H,M,z),cn(d,!0);const ve=Ps(d),st=d.subTree;d.subTree=ve,I(st,ve,f(st.el),or(st),d,_,C),M.el=ve.el,re===null&&Am(d,ve.el),L&&Ue(L,_),(ee=M.props&&M.props.onVnodeUpdated)&&Ue(()=>gt(ee,H,M,z),_)}else{let M;const{el:N,props:L}=p,{bm:H,m:z,parent:re}=d,ee=Ii(p);if(cn(d,!1),H&&Ds(H),!ee&&(M=L&&L.onVnodeBeforeMount)&&gt(M,re,p),cn(d,!0),N&&Os){const ve=()=>{d.subTree=Ps(d),Os(N,d.subTree,d,_,null)};ee?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ve()):ve()}else{const ve=d.subTree=Ps(d);I(null,ve,g,v,d,_,C),p.el=ve.el}if(z&&Ue(z,_),!ee&&(M=L&&L.onVnodeMounted)){const ve=p;Ue(()=>gt(M,re,ve),_)}(p.shapeFlag&256||re&&Ii(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Ue(d.a,_),d.isMounted=!0,p=g=v=null}},T=d.effect=new ra(E,()=>fa(w),d.scope),w=d.update=()=>T.run();w.id=d.uid,cn(d,!0),w()},ge=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Jm(d,p.props,v,g),tg(d,p.children,g),li(),Rl(),ci()},ie=(d,p,g,v,_,C,A,E,T=!1)=>{const w=d&&d.children,M=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:H}=p;if(L>0){if(L&128){sr(w,N,g,v,_,C,A,E,T);return}else if(L&256){on(w,N,g,v,_,C,A,E,T);return}}H&8?(M&16&&Tt(w,_,C),N!==w&&u(g,N)):M&16?H&16?sr(w,N,g,v,_,C,A,E,T):Tt(w,_,C,!0):(M&8&&u(g,""),H&16&&j(N,g,v,_,C,A,E,T))},on=(d,p,g,v,_,C,A,E,T)=>{d=d||Yn,p=p||Yn;const w=d.length,M=p.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const H=p[L]=T?Vt(p[L]):vt(p[L]);I(d[L],H,g,null,_,C,A,E,T)}w>M?Tt(d,_,C,!0,!1,N):j(p,g,v,_,C,A,E,T,N)},sr=(d,p,g,v,_,C,A,E,T)=>{let w=0;const M=p.length;let N=d.length-1,L=M-1;for(;w<=N&&w<=L;){const H=d[w],z=p[w]=T?Vt(p[w]):vt(p[w]);if(mn(H,z))I(H,z,g,null,_,C,A,E,T);else break;w++}for(;w<=N&&w<=L;){const H=d[N],z=p[L]=T?Vt(p[L]):vt(p[L]);if(mn(H,z))I(H,z,g,null,_,C,A,E,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,z=H<M?p[H].el:v;for(;w<=L;)I(null,p[w]=T?Vt(p[w]):vt(p[w]),g,z,_,C,A,E,T),w++}}else if(w>L)for(;w<=N;)pt(d[w],_,C,!0),w++;else{const H=w,z=w,re=new Map;for(w=z;w<=L;w++){const qe=p[w]=T?Vt(p[w]):vt(p[w]);qe.key!=null&&re.set(qe.key,w)}let ee,ve=0;const st=L-z+1;let jn=!1,wl=0;const gi=new Array(st);for(w=0;w<st;w++)gi[w]=0;for(w=H;w<=N;w++){const qe=d[w];if(ve>=st){pt(qe,_,C,!0);continue}let mt;if(qe.key!=null)mt=re.get(qe.key);else for(ee=z;ee<=L;ee++)if(gi[ee-z]===0&&mn(qe,p[ee])){mt=ee;break}mt===void 0?pt(qe,_,C,!0):(gi[mt-z]=w+1,mt>=wl?wl=mt:jn=!0,I(qe,p[mt],g,null,_,C,A,E,T),ve++)}const El=jn?og(gi):Yn;for(ee=El.length-1,w=st-1;w>=0;w--){const qe=z+w,mt=p[qe],Cl=qe+1<M?p[qe+1].el:v;gi[w]===0?I(null,mt,g,Cl,_,C,A,E,T):jn&&(ee<0||w!==El[ee]?an(mt,g,Cl,2):ee--)}}},an=(d,p,g,v,_=null)=>{const{el:C,type:A,transition:E,children:T,shapeFlag:w}=d;if(w&6){an(d.component.subTree,p,g,v);return}if(w&128){d.suspense.move(p,g,v);return}if(w&64){A.move(d,p,g,Hn);return}if(A===ke){i(C,p,g);for(let N=0;N<T.length;N++)an(T[N],p,g,v);i(d.anchor,p,g);return}if(A===Fs){D(d,p,g);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(C),i(C,p,g),Ue(()=>E.enter(C),_);else{const{leave:N,delayLeave:L,afterLeave:H}=E,z=()=>i(C,p,g),re=()=>{N(C,()=>{z(),H&&H()})};L?L(C,z,re):re()}else i(C,p,g)},pt=(d,p,g,v=!1,_=!1)=>{const{type:C,props:A,ref:E,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=d;if(E!=null&&go(E,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&L,z=!Ii(d);let re;if(z&&(re=A&&A.onVnodeBeforeUnmount)&&gt(re,p,d),M&6)xp(d.component,g,v);else{if(M&128){d.suspense.unmount(g,v);return}H&&ln(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,_,Hn,v):w&&(C!==ke||N>0&&N&64)?Tt(w,p,g,!1,!0):(C===ke&&N&384||!_&&M&16)&&Tt(T,p,g),v&&yl(d)}(z&&(re=A&&A.onVnodeUnmounted)||H)&&Ue(()=>{re&&gt(re,p,d),H&&ln(d,null,p,"unmounted")},g)},yl=d=>{const{type:p,el:g,anchor:v,transition:_}=d;if(p===ke){Tp(g,v);return}if(p===Fs){$(d);return}const C=()=>{r(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:A,delayLeave:E}=_,T=()=>A(g,C);E?E(d.el,C,T):T()}else C()},Tp=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},xp=(d,p,g)=>{const{bum:v,scope:_,update:C,subTree:A,um:E}=d;v&&Ds(v),_.stop(),C&&(C.active=!1,pt(A,d,p,g)),E&&Ue(E,p),Ue(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Tt=(d,p,g,v=!1,_=!1,C=0)=>{for(let A=C;A<d.length;A++)pt(d[A],p,g,v,_)},or=d=>d.shapeFlag&6?or(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),bl=(d,p,g)=>{d==null?p._vnode&&pt(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,g),Rl(),af(),p._vnode=d},Hn={p:I,um:pt,m:an,r:yl,mt:Ve,mc:j,pc:ie,pbc:ne,n:or,o:t};let Ns,Os;return e&&([Ns,Os]=e(Hn)),{render:bl,hydrate:Ns,createApp:ig(bl,Ns)}}function cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Af(t,e,n=!1){const i=t.children,r=e.children;if(B(i)&&B(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vt(r[s]),a.el=o.el),n||Af(o,a))}}function og(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ag=t=>t.__isTeleport,ke=Symbol(void 0),ya=Symbol(void 0),nt=Symbol(void 0),Fs=Symbol(void 0),Ti=[];let ct=null;function Q(t=!1){Ti.push(ct=t?null:[])}function lg(){Ti.pop(),ct=Ti[Ti.length-1]||null}let Hi=1;function Wl(t){Hi+=t}function kf(t){return t.dynamicChildren=Hi>0?ct||Yn:null,lg(),Hi>0&&ct&&ct.push(t),t}function ue(t,e,n,i,r,s){return kf(F(t,e,n,i,r,s,!0))}function xn(t,e,n,i,r){return kf(Y(t,e,n,i,r,!0))}function Pr(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const hs="__vInternal",Nf=({key:t})=>t!=null?t:null,xr=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Se(t)||U(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function F(t,e=null,n=null,i=0,r=null,s=t===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nf(e),ref:e&&xr(e),scopeId:cs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ba(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),Hi>0&&!o&&ct&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ct.push(l),l}const Y=cg;function cg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===vf)&&(t=nt),Pr(t)){const a=Zt(t,e,!0);return n&&ba(a,n),Hi>0&&!s&&ct&&(a.shapeFlag&6?ct[ct.indexOf(t)]=a:ct.push(a)),a.patchFlag|=-2,a}if(bg(t)&&(t=t.__vccOpts),e){e=ug(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=Xt(a)),de(l)&&(Xu(l)&&!B(l)&&(l=Ae({},l)),e.style=Di(l))}const o=we(t)?1:km(t)?128:ag(t)?64:de(t)?4:U(t)?2:0;return F(t,e,n,i,r,o,s,!0)}function ug(t){return t?Xu(t)||hs in t?Ae({},t):t:null}function Zt(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?fg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nf(a),ref:e&&e.ref?n&&r?B(r)?r.concat(xr(e)):[r,xr(e)]:xr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor}}function Of(t=" ",e=0){return Y(ya,null,t,e)}function bt(t="",e=!1){return e?(Q(),xn(nt,null,t)):Y(nt,null,t)}function vt(t){return t==null||typeof t=="boolean"?Y(nt):B(t)?Y(ke,null,t.slice()):typeof t=="object"?Vt(t):Y(ya,null,String(t))}function Vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function ba(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ba(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(hs in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),i&64?(n=16,e=[Of(e)]):n=8);t.children=e,t.shapeFlag|=n}function fg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xt([e.class,i.class]));else if(r==="style")e.style=Di([e.style,i.style]);else if(ts(r)){const s=e[r],o=i[r];o&&s!==o&&!(B(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function gt(t,e,n,i=null){tt(t,e,7,[n,i])}const dg=Sf();let hg=0;function pg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||dg,s={uid:hg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(i,r),emitsOptions:cf(i,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Im.bind(null,s),t.ce&&t.ce(s),s}let xe=null;const Rf=()=>xe||Be,ni=t=>{xe=t,t.scope.on()},Cn=()=>{xe&&xe.scope.off(),xe=null};function Df(t){return t.vnode.shapeFlag&4}let ji=!1;function mg(t,e=!1){ji=e;const{props:n,children:i}=t.vnode,r=Df(t);Xm(t,n,r,e),eg(t,i);const s=r?gg(t,e):void 0;return ji=!1,s}function gg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ju(new Proxy(t.ctx,Vm));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?vg(t):null;ni(t),li();const s=Yt(i,t,0,[t.props,r]);if(ci(),Cn(),Lu(s)){if(s.then(Cn,Cn),e)return s.then(o=>{zl(t,o,e)}).catch(o=>{as(o,t,0)});t.asyncDep=s}else zl(t,s,e)}else Pf(t,e)}function zl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=nf(e)),Pf(t,n)}let Vl;function Pf(t,e,n){const i=t.type;if(!t.render){if(!e&&Vl&&!i.render){const r=i.template||_a(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ae(Ae({isCustomElement:s,delimiters:a},o),l);i.render=Vl(r,c)}}t.render=i.render||dt}ni(t),li(),qm(t),ci(),Cn()}function _g(t){return new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}})}function vg(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=_g(t))},slots:t.slots,emit:t.emit,expose:e}}function wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nf(Ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)}}))}function yg(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function bg(t){return U(t)&&"__vccOpts"in t}const Je=(t,e)=>_m(t,e,ji);function Mf(t,e,n){const i=arguments.length;return i===2?de(e)&&!B(e)?Pr(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pr(n)&&(n=[n]),Y(t,e,n))}const wg="3.2.40",Eg="http://www.w3.org/2000/svg",gn=typeof document<"u"?document:null,ql=gn&&gn.createElement("template"),Cg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?gn.createElementNS(Eg,t):gn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ql.innerHTML=i?`<svg>${t}</svg>`:t;const a=ql.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ig(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Tg(t,e,n){const i=t.style,r=we(n);if(n&&!r){for(const s in n)_o(i,s,n[s]);if(e&&!we(e))for(const s in e)n[s]==null&&_o(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Yl=/\s*!important$/;function _o(t,e,n){if(B(n))n.forEach(i=>_o(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=xg(t,e);Yl.test(n)?t.setProperty(ai(i),n.replace(Yl,""),"important"):t[i]=n}}const Kl=["Webkit","Moz","ms"],$s={};function xg(t,e){const n=$s[e];if(n)return n;let i=It(e);if(i!=="filter"&&i in t)return $s[e]=i;i=rs(i);for(let r=0;r<Kl.length;r++){const s=Kl[r]+i;if(s in t)return $s[e]=s}return e}const Gl="http://www.w3.org/1999/xlink";function Sg(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gl,e.slice(6,e.length)):t.setAttributeNS(Gl,e,n);else{const s=Ap(e);n==null||s&&!Du(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ag(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Du(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Lf,kg]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let vo=0;const Ng=Promise.resolve(),Og=()=>{vo=0},Rg=()=>vo||(Ng.then(Og),vo=Lf());function Dg(t,e,n,i){t.addEventListener(e,n,i)}function Pg(t,e,n,i){t.removeEventListener(e,n,i)}function Mg(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Lg(e);if(i){const c=s[e]=Fg(i,r);Dg(t,a,c,l)}else o&&(Pg(t,a,o,l),s[e]=void 0)}}const Ql=/(?:Once|Passive|Capture)$/;function Lg(t){let e;if(Ql.test(t)){e={};let i;for(;i=t.match(Ql);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ai(t.slice(2)),e]}function Fg(t,e){const n=i=>{const r=i.timeStamp||Lf();(kg||r>=n.attached-1)&&tt($g(i,n.value),e,5,[i])};return n.value=t,n.attached=Rg(),n}function $g(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xl=/^on[a-z]/,Bg=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Ig(t,i,r):e==="style"?Tg(t,n,i):ts(e)?Zo(e)||Mg(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hg(t,e,i,r))?Ag(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Sg(t,e,i,r))};function Hg(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Xl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xl.test(e)&&we(n)?!1:e in t}const Ut="transition",_i="animation",Ff={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jg=Ae({},Pm.props,Ff),un=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Jl=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function Ug(t){const e={};for(const P in t)P in Ff||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=Wg(r),I=y&&y[0],R=y&&y[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:D,onLeave:$,onLeaveCancelled:W,onBeforeAppear:ye=b,onAppear:me=S,onAppearCancelled:j=D}=e,J=(P,pe,Ve)=>{zt(P,pe?u:a),zt(P,pe?c:o),Ve&&Ve()},ne=(P,pe)=>{P._isLeaving=!1,zt(P,f),zt(P,m),zt(P,h),pe&&pe()},Re=P=>(pe,Ve)=>{const mi=P?me:S,Ce=()=>J(pe,P,Ve);un(mi,[pe,Ce]),Zl(()=>{zt(pe,P?l:s),xt(pe,P?u:a),Jl(mi)||ec(pe,i,I,Ce)})};return Ae(e,{onBeforeEnter(P){un(b,[P]),xt(P,s),xt(P,o)},onBeforeAppear(P){un(ye,[P]),xt(P,l),xt(P,c)},onEnter:Re(!1),onAppear:Re(!0),onLeave(P,pe){P._isLeaving=!0;const Ve=()=>ne(P,pe);xt(P,f),Bf(),xt(P,h),Zl(()=>{!P._isLeaving||(zt(P,f),xt(P,m),Jl($)||ec(P,i,R,Ve))}),un($,[P,Ve])},onEnterCancelled(P){J(P,!1),un(D,[P])},onAppearCancelled(P){J(P,!0),un(j,[P])},onLeaveCancelled(P){ne(P),un(W,[P])}})}function Wg(t){if(t==null)return null;if(de(t))return[Bs(t.enter),Bs(t.leave)];{const e=Bs(t);return[e,e]}}function Bs(t){return Bu(t)}function xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Zl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zg=0;function ec(t,e,n,i){const r=t._endId=++zg,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=$f(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=m=>{m.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function $f(t,e){const n=window.getComputedStyle(t),i=y=>(n[y]||"").split(", "),r=i(Ut+"Delay"),s=i(Ut+"Duration"),o=tc(r,s),a=i(_i+"Delay"),l=i(_i+"Duration"),c=tc(a,l);let u=null,f=0,h=0;e===Ut?o>0&&(u=Ut,f=o,h=s.length):e===_i?c>0&&(u=_i,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ut:_i:null,h=u?u===Ut?s.length:l.length:0);const m=u===Ut&&/\b(transform|all)(,|$)/.test(n[Ut+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:m}}function tc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>nc(n)+nc(t[i])))}function nc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Bf(){return document.body.offsetHeight}const Hf=new WeakMap,jf=new WeakMap,Vg={name:"TransitionGroup",props:Ae({},jg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Rf(),i=df();let r,s;return mf(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Gg(r[0].el,n.vnode.el,o))return;r.forEach(qg),r.forEach(Yg);const a=r.filter(Kg);Bf(),a.forEach(l=>{const c=l.el,u=c.style;xt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,zt(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=X(t),a=Ug(o);let l=o.tag||ke;r=s,s=e.default?pa(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Bi(u,$i(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Bi(u,$i(u,a,i,n)),Hf.set(u,u.el.getBoundingClientRect())}return Y(l,null,s)}}},Uf=Vg;function qg(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Yg(t){jf.set(t,t.el.getBoundingClientRect())}function Kg(t){const e=Hf.get(t),n=jf.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Gg(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=$f(i);return r.removeChild(i),s}const Qg=Ae({patchProp:Bg},Cg);let ic;function Xg(){return ic||(ic=rg(Qg))}const Jg=(...t)=>{const e=Xg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zg(i);if(!r)return;const s=e._component;!U(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zg(t){return we(t)?document.querySelector(t):t}const rc="/assets/don-cool.c53b70d9.jpeg",e_="/assets/shiba-cool.294ad440.png",t_=["src"],n_=He({__name:"DynamicAvatar",setup(t){const e=()=>{document.getElementById("avatar").src=e_},n=()=>{document.getElementById("avatar").src=rc};return(i,r)=>(Q(),ue("header",null,[F("img",{id:"avatar",class:"wxxl center",alt:"Don Truong",draggable:"false",onMouseover:r[0]||(r[0]=s=>e()),onMouseleave:r[1]||(r[1]=s=>n()),src:kt(rc)},null,40,t_)]))}});const Mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},i_=Mn(n_,[["__scopeId","data-v-b1bfd848"]]),Wf=t=>(da("data-v-7f27cae6"),t=t(),ha(),t),r_={class:"container"},s_=Wf(()=>F("img",{class:"wxl",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"},null,-1)),o_={class:"xxl"},a_={class:"typed-text",id:"dynamicText"},l_=Wf(()=>F("span",{class:"blinking-cursor"},"|",-1)),c_=He({__name:"TypingText",props:{constantText:String,dynamicTexts:Array},setup(t){const e=t,n=70,i=10,r=1500;let s=tf(""),o=!1,a=0,l=0;const c=async()=>{!e.dynamicTexts||(l<e.dynamicTexts[a].length?(o||(o=!0),s.value+=e.dynamicTexts[a][l],l+=1,setTimeout(c,n)):(o=!1,setTimeout(u,r)))},u=async()=>{if(!!e.dynamicTexts){if(l==0){f();return}l>0&&(o&&(o=!0),s.value=e.dynamicTexts[a].substring(0,l-1),l-=1,a+1<e.dynamicTexts.length&&e.dynamicTexts[a+1].startsWith(s.value)?f():setTimeout(u,i))}},f=()=>{!e.dynamicTexts||(o=!1,a+=1,a>=e.dynamicTexts.length&&(a=0),setTimeout(c,n))};return ds(()=>{c()}),(h,m)=>(Q(),ue("div",r_,[s_,F("h1",o_,[Of(Ye(t.constantText)+" ",1),F("span",a_,Ye(kt(s)),1),l_,F("span",{class:Xt(["cursor",{typing:kt(o)}])},"\xA0",2)])]))}});const u_=Mn(c_,[["__scopeId","data-v-7f27cae6"]]);function f_(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(r){r(n)}),(i=t.get("*"))&&i.slice().map(function(r){r(e,n)})}}}const Mr=f_(),zf=new Map,sc={x:["left","center","right"],y:["top","bottom"]},d_=(t=>()=>t++)(0),h_=t=>typeof t!="string"?[]:t.split(/\s+/gi).filter(e=>e),p_=t=>{typeof t=="string"&&(t=h_(t));let e=null,n=null;return t.forEach(i=>{sc.y.indexOf(i)!==-1&&(n=i),sc.x.indexOf(i)!==-1&&(e=i)}),{x:e,y:n}};class m_{constructor(e,n,i){this.remaining=n,this.callback=e,this.notifyItem=i,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Hs={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},Ea=He({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",t,e)},leave(t,e){this.$emit("leave",t,e)},afterLeave(){this.$emit("after-leave")}}});function g_(t,e,n,i,r,s){return Q(),xn(Uf,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:Pe(()=>[Ze(t.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}Ea.render=g_;Ea.__file="src/VelocityGroup.vue";var Ca=He({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function __(t,e,n,i,r,s){return Q(),xn(Uf,{tag:"span",name:t.name},{default:Pe(()=>[Ze(t.$slots,"default")]),_:3},8,["name"])}Ca.render=__;Ca.__file="src/CssGroup.vue";const js="[-+]?[0-9]*.?[0-9]+",oc=[{name:"px",regexp:new RegExp(`^${js}px$`)},{name:"%",regexp:new RegExp(`^${js}%$`)},{name:"px",regexp:new RegExp(`^${js}$`)}],v_=t=>{if(t==="auto")return{type:t,value:0};for(let e=0;e<oc.length;e++){const n=oc[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}},y_=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return v_(t);default:return{type:"",value:t}}},dr={IDLE:0,DESTROYED:2};var Ia=He({name:"notifications",components:{VelocityGroup:Ea,CssGroup:Ca},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Hs.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Hs.velocityAnimation},animationName:{type:String,default:Hs.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:zf.get("velocity"),timerControl:null}},computed:{actualWidth(){return y_(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=p_(this.position),n=this.actualWidth.value,i=this.actualWidth.type,r={width:n+i};return e&&(r[e]="0px"),t&&(t==="center"?r.left=`calc(50% - ${+n/2}${i})`:r[t]="0px"),r},active(){return this.list.filter(t=>t.state!==dr.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){Mr.on("add",this.addItem),Mr.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear){this.destroyAll();return}const e=typeof t.duration=="number"?t.duration:this.duration,n=typeof t.speed=="number"?t.speed:this.speed,i=typeof t.ignoreDuplicates=="boolean"?t.ignoreDuplicates:this.ignoreDuplicates,{title:r,text:s,type:o,data:a,id:l}=t,c={id:l||d_(),title:r,text:s,type:o,state:dr.IDLE,speed:n,length:e+2*n,data:a};e>=0&&(this.timerControl=new m_(()=>this.destroy(c),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let f=-1;const h=this.active.some(y=>y.title===t.title&&y.text===t.text);(!i||!h)&&(u?(this.list.push(c),this.active.length>this.max&&(f=0)):(this.list.unshift(c),this.active.length>this.max&&(f=this.active.length-1)),f!==-1&&this.destroy(this.active[f]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,(e=t.type)!==null&&e!==void 0?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=dr.DESTROYED,this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find(n=>n.id===t);e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var n;const i=(n=this.animation)===null||n===void 0?void 0:n[t];return typeof i=="function"?i.call(this,e):i},enter(t,e){if(!this.isVA)return;const n=this.getAnimation("enter",t);this.velocity(t,n,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const n=this.getAnimation("leave",t);this.velocity(t,n,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter(t=>t.state!==dr.DESTROYED)}}});const b_=["data-id"],w_=["onClick"],E_=["innerHTML"],C_=["innerHTML"];function I_(t,e,n,i,r,s){return Q(),ue("div",{class:"vue-notification-group",style:Di(t.styles)},[(Q(),xn(zm(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:Pe(()=>[(Q(!0),ue(ke,null,ga(t.active,o=>(Q(),ue("div",{key:o.id,class:"vue-notification-wrapper",style:Di(t.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:e[0]||(e[0]=(...a)=>t.pauseTimeout&&t.pauseTimeout(...a)),onMouseleave:e[1]||(e[1]=(...a)=>t.resumeTimeout&&t.resumeTimeout(...a))},[Ze(t.$slots,"body",{class:Xt([t.classes,o.type]),item:o,close:()=>t.destroy(o)},()=>[bt(" Default slot template "),F("div",{class:Xt(t.notifyClass(o)),onClick:a=>t.destroyIfNecessary(o)},[o.title?(Q(),ue("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,E_)):bt("v-if",!0),F("div",{class:"notification-content",innerHTML:o.text},null,8,C_)],10,w_)])],44,b_))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function T_(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var x_=`
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

`;T_(x_);Ia.render=I_;Ia.__file="src/Notifications.vue";const Ta=t=>{typeof t=="string"&&(t={title:"",text:t}),typeof t=="object"&&Mr.emit("add",t)};Ta.close=function(t){Mr.emit("close",t)};function S_(t,e={}){Object.entries(e).forEach(i=>zf.set(...i));const n=e.name||"notify";t.config.globalProperties["$"+n]=Ta,t.component(e.componentName||"notifications",Ia)}var A_={install:S_};const k_="/assets/Don_Truong_Resume.405b33cf.pdf",N_={class:"social"},O_={href:"https://github.com/truongdd03",target:"_blank"},R_={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},D_={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},P_=He({__name:"SocialInformation",setup(t){const e=async()=>{const i="dong23102003@gmail.com";await navigator.clipboard.writeText(i),Ta({title:"Copied email address!"})},n=()=>{window.open(k_)};return(i,r)=>{const s=Tn("font-awesome-icon");return Q(),ue("header",null,[F("div",N_,[F("a",O_,[Y(s,{class:"l icon",icon:"fa-brands fa-github",inverse:""})]),F("a",R_,[Y(s,{class:"l icon",icon:"fa-brands fa-linkedin",inverse:""})]),F("a",D_,[Y(s,{class:"l icon",icon:"fa-brands fa-discord",inverse:""})]),Y(s,{class:"l icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=o=>e())}),Y(s,{class:"l icon",icon:"fa-solid fa-file-pdf",inverse:"",onClick:r[1]||(r[1]=o=>n())})])])}}});const M_=Mn(P_,[["__scopeId","data-v-fd2c1f2d"]]);function L_(t){try{document.getElementById(t).scrollIntoView({behavior:"smooth"})}catch(e){throw new Error(e)}}const F_={class:"wrapper black-background"},$_={class:"icon-wrapper"},B_=He({__name:"IntroductionPane",setup(t){const e=["Don Truong","from Vietnam","studying at Michigan State University","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=()=>{L_("experience")};return(i,r)=>{const s=Tn("font-awesome-icon");return Q(),ue("div",F_,[Y(i_),Y(M_),Y(u_,{constantText:"Hi, I'm ",dynamicTexts:e}),F("div",$_,[Y(s,{class:"xl scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:r[0]||(r[0]=o=>n())})])])}}});const H_=Mn(B_,[["__scopeId","data-v-05d1b85c"]]);var xa={name:"Card"};const j_={class:"p-card p-component"},U_={key:0,class:"p-card-header"},W_={class:"p-card-body"},z_={key:0,class:"p-card-title"},V_={key:1,class:"p-card-subtitle"},q_={class:"p-card-content"},Y_={key:2,class:"p-card-footer"};function K_(t,e,n,i,r,s){return Q(),ue("div",j_,[t.$slots.header?(Q(),ue("div",U_,[Ze(t.$slots,"header")])):bt("",!0),F("div",W_,[t.$slots.title?(Q(),ue("div",z_,[Ze(t.$slots,"title")])):bt("",!0),t.$slots.subtitle?(Q(),ue("div",V_,[Ze(t.$slots,"subtitle")])):bt("",!0),F("div",q_,[Ze(t.$slots,"content")]),t.$slots.footer?(Q(),ue("div",Y_,[Ze(t.$slots,"footer")])):bt("",!0)])])}function G_(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var Q_=`
.p-card-header img {
    width: 100%;
}
`;G_(Q_);xa.render=K_;const X_="/assets/holistics.338144b5.png",J_="/assets/oed.11068655.png",Z_=t=>(da("data-v-80c68450"),t=t(),ha(),t),ev={class:"wrapper"},tv=Z_(()=>F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif"}),F("h1",{class:"title xl"},"Experience"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif"})],-1)),nv=["href"],iv={class:"l green company-name"},rv={class:"m"},sv={class:"s description"},ov={class:"s",style:{color:"yellow"}},av={class:"duration-wrapper"},lv={class:"m duration"},cv=["src","alt"],uv=He({__name:"ExperiencePane",setup(t){const e=[{company:"Holistics Data",url:"https://www.holistics.io/",icon:X_,skills:"Vue.js, TypeScript",title:"Software Engineer Intern",duration:"May 2022 - September 2022",description:"Worked on a new programming language called AML explicitly used for data analytics.                     Developed an online playground for testing and demonstrating AML.                     Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process"},{company:"Open Energy Dashboard",url:"https://openenergydashboard.github.io/",icon:J_,skills:"React, Redux, TypeScript, JavaScript, Postgres",title:"Software Engineer Intern",duration:"October 2021 - May 2022",description:"Performed security testing and applied a rate limit for access to prevent DDoS attacks.                    Removed redundant code and enhanced the data exporting process.                     Managed database and created new APIs to support different resource types.                     Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0)."},{company:"Chang's Kitchen",skills:"Swift, JavaScript",title:"Software Engineer Intern",duration:"May 2021 - August 2021",description:"Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers\u2019 data."}];return(n,i)=>{const r=Tn("font-awesome-icon"),s=Tn("Timeline");return Q(),ue("div",ev,[tv,Y(s,{value:e,align:"alternate",class:"timeline"},{content:Pe(o=>[Y(kt(xa),{class:"experience-wrapper"},{title:Pe(()=>[F("a",{class:"company-link",href:o.item.url,target:"_blank"},[F("h3",iv,Ye(o.item.company),1),o.item.url?(Q(),xn(r,{key:0,class:"m redirect-icon",icon:"fa-solid fa-up-right-from-square"})):bt("",!0)],8,nv)]),subtitle:Pe(()=>[F("p",rv,Ye(o.item.title),1)]),content:Pe(()=>[F("p",sv,Ye(o.item.description),1),F("p",ov,Ye(`Related Skills: ${o.item.skills}`),1)]),_:2},1024)]),opposite:Pe(o=>[F("div",av,[F("p",lv,Ye(o.item.duration),1)])]),marker:Pe(o=>[o.item.icon?(Q(),ue("img",{key:0,class:"wl marker-icon",src:o.item.icon,alt:o.item.company},null,8,cv)):(Q(),xn(r,{key:1,class:"l marker-icon-default",icon:"fa-solid fa-briefcase"}))]),_:1})])}}});const fv=Mn(uv,[["__scopeId","data-v-80c68450"]]),dv="/assets/msu.b99d12d1.png",hv="/assets/ptnk.95fe9da3.png",pv=t=>(da("data-v-d5a589a6"),t=t(),ha(),t),mv={class:"wrapper black-background"},gv=pv(()=>F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-9.gif"}),F("h1",{class:"xl title"},"Education"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif"})],-1)),_v={class:"l green"},vv={class:"m"},yv={key:0,class:"s description"},bv={class:"duration-wrapper"},wv={class:"m duration"},Ev=["src","alt"],Cv=He({__name:"EducationPane",setup(t){const e=[{icon:dv,school:"Michigan State University",duration:"September 2021 - May 2025",degree:"BS in Computer Science",description:`GPA: 4.0/4.0
Dean's List
MSU International Tution Grant
MSU Presidential Study Abroad Scholarship
MSU #YOU-ARE-WELCOME-HERE Scholarship`},{icon:hv,school:"VNU-HCM High School for the Gifted",duration:"September 2018 - June 2021",degree:"High School Diploma"}];return(n,i)=>{const r=Tn("Timeline");return Q(),ue("div",mv,[gv,Y(r,{value:e,align:"alternate",class:"timeline"},{content:Pe(s=>[Y(kt(xa),{class:"experience-wrapper"},{title:Pe(()=>[F("h3",_v,Ye(s.item.school),1)]),subtitle:Pe(()=>[F("p",vv,Ye(s.item.degree),1)]),content:Pe(()=>[s.item.description?(Q(),ue("p",yv,Ye(s.item.description),1)):bt("",!0)]),_:2},1024)]),opposite:Pe(s=>[F("div",bv,[F("p",wv,Ye(s.item.duration),1)])]),marker:Pe(s=>[F("img",{class:"wl marker-icon",src:s.item.icon,alt:s.item.school},null,8,Ev)]),_:1})])}}});const Iv=Mn(Cv,[["__scopeId","data-v-d5a589a6"]]),Tv="/assets/github.3d568164.png",xv=["href"],Sv={key:0,class:"hovering-wrapper"},Av={class:"image-wrapper"},kv=["src"],Nv={class:"information-wrapper"},Ov={class:"m green"},Rv={class:"s subtitle"},Dv=He({__name:"ProjectPane",props:{project:{type:Object,default:{}}},setup(t){let e=tf(!1);return(n,i)=>{const r=Tn("font-awesome-icon");return Q(),ue("a",{class:"project-link",href:t.project.url,target:"_blank",onMouseover:i[0]||(i[0]=s=>Se(e)?e.value=!0:e=!0),onMouseleave:i[1]||(i[1]=s=>Se(e)?e.value=!1:e=!1)},[F("div",{class:Xt(`project-wrapper ${kt(e)?"hovering":""}`)},[kt(e)?(Q(),ue("div",Sv,[Y(r,{class:"xl redirect-icon",icon:"fa-solid fa-up-right-from-square"})])):bt("",!0),F("div",Av,[F("img",{class:"image",src:t.project.image?t.project.image:kt(Tv)},null,8,kv)]),F("div",Nv,[F("h1",Ov,Ye(t.project.name),1),F("p",Rv,Ye(t.project.subtitle),1)])],2)],40,xv)}}});const Pv=Mn(Dv,[["__scopeId","data-v-fc38468a"]]),Mv="/assets/personal-website.037b1be0.jpeg",Lv="/assets/barter.337afb89.jpeg",Fv="/assets/nuntium.098ca59c.jpeg",$v={class:"wrapper tmp"},Bv=F("div",{class:"title-wrapper"},[F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-10-49.gif"}),F("h1",{class:"xl title"},"Projects"),F("img",{class:"wxl title-icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-11-64.gif"})],-1),Hv=He({__name:"ProjectsPane",setup(t){const e=[{name:"Personal Website",subtitle:"My personal website",skills:["TypeScript","Vue3"],image:Mv,description:"",url:"https://github.com/truongdd03/truongdd03.github.io"},{name:"Search engine",subtitle:"A simple version of Google Search",skills:["C++"],description:"A multi-threaded search engine that crawls information from multiple websites, extracts keywords, and returns appropriate results based on user\u2019s queries. LRU cache is use to optimize query speech.",url:"https://github.com/truongdd03/searchEngine"},{name:"Barter",subtitle:"A used stuff trading website",skills:["HTML/CSS","JavaScript"],image:Lv,description:"Winner of Best Use of Google Cloud. Implemented in 36 hours during SpartaHack VII, Barter is an exchanging items website with the goal to reduce the amount of trash and connect people.",url:"https://github.com/truongdd03/SpartaHack"},{name:"Nuntium",subtitle:"A news-sharing platform",skills:["Swift"],image:Fv,description:"Implemented in 36 hours during ShellHacks 2021, this is a news-sharing platform that supports reliability ratings and a customized search engine.",url:"https://github.com/truongdd03/Shellhack"},{name:"Opty",subtitle:"A simple version of LinkedIn",skills:["Swift"],image:"",description:"A mobile-oriented social media that is used specifically for job search. Users can easily create a resume or a recruiting post. This app would also match suitable jobs or potential candidates based on users\u2019 profiles and job descriptions.",url:"https://github.com/truongdd03/Opty-IOS"},{name:"Financial Diary",subtitle:"An expenses and incomes tracking app",skills:["Swift"],image:"",description:"An iOS application to track users\u2019 expenses and incomes, as well as displaying real-time data of the stock market for investment suggestions.",url:"https://github.com/truongdd03/Financial-Diary"},{name:"Virtual Piano",subtitle:"Play musical notes from text files",skills:["Python"],image:"",description:"A virtual piano that plays musical notes from text files.",url:"https://github.com/truongdd03/VirtualPiano"}];return(n,i)=>(Q(),ue("div",$v,[Bv,(Q(),ue(ke,null,ga(e,r=>Y(Pv,{project:r},null,8,["project"])),64))]))}});/**
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
 */const Vf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw ui(e)},ui=function(t){return new Error("Firebase Database ("+Vf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yf=function(t){const e=qf(t);return Sa.encodeByteArray(e,!0)},Lr=function(t){return Yf(t).replace(/\./g,"")},yo=function(t){try{return Sa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uv(t){return Kf(void 0,t)}function Kf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wv(n)||(t[n]=Kf(t[n],e[n]));return t}function Wv(t){return t!=="__proto__"}/**
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
 */function zv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zv())}function Vv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qf(){return Vf.NODE_ADMIN===!0}function Xf(){return typeof indexedDB=="object"}function Jf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Yv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gv=()=>Kv().__FIREBASE_DEFAULTS__,Qv=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},Xv=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&yo(t[1]);return e&&JSON.parse(e)},Zf=()=>Gv()||Qv()||Xv(),Jv=t=>{var e,n;return(n=(e=Zf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zv=()=>{var t;return(t=Zf())===null||t===void 0?void 0:t.config};/**
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
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ey(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lr(JSON.stringify(n)),Lr(JSON.stringify(o)),a].join(".")}/**
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
 */const ty="FirebaseError";class Ln extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ty,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ny(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ln(r,a,i)}}function ny(t,e){return t.replace(iy,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const iy=/\{\$([^}]+)}/g;/**
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
 */function Ui(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const ed=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Ui(yo(s[0])||""),n=Ui(yo(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},ry=function(t){const e=ed(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sy=function(t){const e=ed(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ac(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(lc(s)&&lc(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function lc(t){return t!==null&&typeof t=="object"}/**
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
 */function oy(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class ay{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Aa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ly=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,x(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},gs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const cy=1e3,uy=2,fy=4*60*60*1e3,dy=.5;function cc(t,e=cy,n=uy){const i=e*Math.pow(n,t),r=Math.round(dy*i*(Math.random()-.5)*2);return Math.min(fy,i+r)}/**
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
 */function Fn(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class hy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ps;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(my(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:py(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function py(t){return t===dn?void 0:t}function my(t){return t.instantiationMode==="EAGER"}/**
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
 */class gy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const _y={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vy=se.INFO,yy={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},by=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=yy[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=vy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const wy=(t,e)=>e.some(n=>t instanceof n);let uc,fc;function Ey(){return uc||(uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cy(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const td=new WeakMap,bo=new WeakMap,nd=new WeakMap,Us=new WeakMap,Na=new WeakMap;function Iy(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&td.set(n,t)}).catch(()=>{}),Na.set(e,t),e}function Ty(t){if(bo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bo.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xy(t){wo=t(wo)}function Sy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ws(this),e,...n);return nd.set(i,e.sort?e.sort():[e]),Kt(i)}:Cy().includes(t)?function(...e){return t.apply(Ws(this),e),Kt(td.get(this))}:function(...e){return Kt(t.apply(Ws(this),e))}}function Ay(t){return typeof t=="function"?Sy(t):(t instanceof IDBTransaction&&Ty(t),wy(t,Ey())?new Proxy(t,wo):t)}function Kt(t){if(t instanceof IDBRequest)return Iy(t);if(Us.has(t))return Us.get(t);const e=Ay(t);return e!==t&&(Us.set(t,e),Na.set(e,t)),e}const Ws=t=>Na.get(t);function id(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Kt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ky=["get","getKey","getAll","getAllKeys","count"],Ny=["put","add","delete","clear"],zs=new Map;function dc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zs.get(e))return zs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ny.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ky.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return zs.set(e,s),s}xy(t=>({...t,get:(e,n,i)=>dc(e,n)||t.get(e,n,i),has:(e,n)=>!!dc(e,n)||t.has(e,n)}));/**
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
 */class Oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ry(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ry(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",hc="0.8.0";/**
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
 */const Sn=new ka("@firebase/app"),Dy="@firebase/app-compat",Py="@firebase/analytics-compat",My="@firebase/analytics",Ly="@firebase/app-check-compat",Fy="@firebase/app-check",$y="@firebase/auth",By="@firebase/auth-compat",Hy="@firebase/database",jy="@firebase/database-compat",Uy="@firebase/functions",Wy="@firebase/functions-compat",zy="@firebase/installations",Vy="@firebase/installations-compat",qy="@firebase/messaging",Yy="@firebase/messaging-compat",Ky="@firebase/performance",Gy="@firebase/performance-compat",Qy="@firebase/remote-config",Xy="@firebase/remote-config-compat",Jy="@firebase/storage",Zy="@firebase/storage-compat",eb="@firebase/firestore",tb="@firebase/firestore-compat",nb="firebase",ib="9.11.0";/**
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
 */const Co="[DEFAULT]",rb={[Eo]:"fire-core",[Dy]:"fire-core-compat",[My]:"fire-analytics",[Py]:"fire-analytics-compat",[Fy]:"fire-app-check",[Ly]:"fire-app-check-compat",[$y]:"fire-auth",[By]:"fire-auth-compat",[Hy]:"fire-rtdb",[jy]:"fire-rtdb-compat",[Uy]:"fire-fn",[Wy]:"fire-fn-compat",[zy]:"fire-iid",[Vy]:"fire-iid-compat",[qy]:"fire-fcm",[Yy]:"fire-fcm-compat",[Ky]:"fire-perf",[Gy]:"fire-perf-compat",[Qy]:"fire-rc",[Xy]:"fire-rc-compat",[Jy]:"fire-gcs",[Zy]:"fire-gcs-compat",[eb]:"fire-fst",[tb]:"fire-fst-compat","fire-js":"fire-js",[nb]:"fire-js-all"};/**
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
 */const Br=new Map,Io=new Map;function sb(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Io.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,t);for(const n of Br.values())sb(n,t);return!0}function Xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ob={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new ms("app","Firebase",ob);/**
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
 */class ab{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const lb=ib;function rd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Co,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(n||(n=Zv()),!n)throw Gt.create("no-options");const s=Br.get(r);if(s){if($r(n,s.options)&&$r(i,s.config))return s;throw Gt.create("duplicate-app",{appName:r})}const o=new gy(r);for(const l of Io.values())o.addComponent(l);const a=new ab(n,i,o);return Br.set(r,a),a}function sd(t=Co){const e=Br.get(t);if(!e&&t===Co)return rd();if(!e)throw Gt.create("no-app",{appName:t});return e}function Ct(t,e,n){var i;let r=(i=rb[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}en(new Rt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const cb="firebase-heartbeat-database",ub=1,Wi="firebase-heartbeat-store";let Vs=null;function od(){return Vs||(Vs=id(cb,ub,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wi)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function fb(t){var e;try{return(await od()).transaction(Wi).objectStore(Wi).get(ad(t))}catch(n){if(n instanceof Ln)Sn.warn(n.message);else{const i=Gt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Sn.warn(i.message)}}}async function pc(t,e){var n;try{const r=(await od()).transaction(Wi,"readwrite");return await r.objectStore(Wi).put(e,ad(t)),r.done}catch(i){if(i instanceof Ln)Sn.warn(i.message);else{const r=Gt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Sn.warn(r.message)}}}function ad(t){return`${t.name}!${t.options.appId}`}/**
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
 */const db=1024,hb=30*24*60*60*1e3;class pb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gb(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=hb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mc(),{heartbeatsToSend:n,unsentEntries:i}=mb(this._heartbeatsCache.heartbeats),r=Lr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function mc(){return new Date().toISOString().substring(0,10)}function mb(t,e=db){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),gc(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),gc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class gb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xf()?Jf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gc(t){return Lr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _b(t){en(new Rt("platform-logger",e=>new Oy(e),"PRIVATE")),en(new Rt("heartbeat",e=>new pb(e),"PRIVATE")),Ct(Eo,hc,t),Ct(Eo,hc,"esm2017"),Ct("fire-js","")}_b("");const _c="@firebase/database",vc="0.13.7";/**
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
 */let ld="";function vb(t){ld=t}/**
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
 */class yb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ui(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class bb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yb(e)}}catch{}return new bb},_n=cd("localStorage"),To=cd("sessionStorage");/**
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
 */const Xn=new ka("@firebase/database"),wb=function(){let t=1;return function(){return t++}}(),ud=function(t){const e=ly(t),n=new ay;n.update(e);const i=n.digest();return Sa.encodeByteArray(i)},Ji=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ji.apply(null,i):typeof i=="object"?e+=Oe(i):e+=i,e+=" "}return e};let In=null,yc=!0;const Eb=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xn.logLevel=se.VERBOSE,In=Xn.log.bind(Xn),e&&To.set("logging_enabled",!0)):typeof t=="function"?In=t:(In=null,To.remove("logging_enabled"))},Me=function(...t){if(yc===!0&&(yc=!1,In===null&&To.get("logging_enabled")===!0&&Eb(!0)),In){const e=Ji.apply(null,t);In(e)}},Zi=function(t){return function(...e){Me(t,...e)}},xo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ji(...t);Xn.error(e)},Dt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ji(...t)}`;throw Xn.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Ji(...t);Xn.warn(e)},Cb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ib=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",An="[MAX_NAME]",fi=function(t,e){if(t===e)return 0;if(t===ri||e===An)return-1;if(e===ri||t===An)return 1;{const n=bc(t),i=bc(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Tb=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},Oa=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Oe(e[i]),n+=":",n+=Oa(t[e[i]]);return n+="}",n},dd=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hd=function(t){x(!fd(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},xb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ab=new RegExp("^-?(0*)\\d{1,10}$"),kb=-2147483648,Nb=2147483647,bc=function(t){if(Ab.test(t)){const e=Number(t);if(e>=kb&&e<=Nb)return e}return null},di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ob=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Rb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Db{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Jn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jn.OWNER="owner";/**
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
 */const Ra="5",pd="v",md="s",gd="r",_d="f",vd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yd="ls",bd="p",So="ac",wd="websocket",Ed="long_polling";/**
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
 */class Cd{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Id(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let i;if(e===wd)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ed)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pb(t)&&(n.ns=t.namespace);const r=[];return rt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class Mb{constructor(){this.counters_={}}incrementCounter(e,n=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Uv(this.counters_)}}/**
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
 */const qs={},Ys={};function Da(t){const e=t.toString();return qs[e]||(qs[e]=new Mb),qs[e]}function Lb(t,e){const n=t.toString();return Ys[n]||(Ys[n]=e()),Ys[n]}/**
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
 */class Fb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&di(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wc="start",$b="close",Bb="pLPCommand",Hb="pRTLPCB",Td="id",xd="pw",Sd="ser",jb="cb",Ub="seg",Wb="ts",zb="d",Vb="dframe",Ad=1870,kd=30,qb=Ad-kd,Yb=25e3,Kb=3e4;class zn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zi(e),this.stats_=Da(n),this.urlFn=l=>(this.appCheckToken&&(l[So]=this.appCheckToken),Id(n,Ed,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Fb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kb)),Ib(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pa((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wc)this.id=a,this.password=l;else if(o===$b)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[wc]="t",i[Sd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[jb]=this.scriptTagHolder.uniqueCallbackIdentifier),i[pd]=Ra,this.transportSessionId&&(i[md]=this.transportSessionId),this.lastSessionId&&(i[yd]=this.lastSessionId),this.applicationId&&(i[bd]=this.applicationId),this.appCheckToken&&(i[So]=this.appCheckToken),typeof location<"u"&&location.hostname&&vd.test(location.hostname)&&(i[gd]=_d);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zn.forceAllow_=!0}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){return zn.forceAllow_?!0:!zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xb()&&!Sb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Yf(n),r=dd(i,qb);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Vb]="t",i[Td]=e,i[xd]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pa{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wb(),window[Bb+this.uniqueCallbackIdentifier]=e,window[Hb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pa.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Td]=this.myID,e[xd]=this.myPW,e[Sd]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kd+i.length<=Ad;){const o=this.pendingSegs.shift();i=i+"&"+Ub+r+"="+o.seg+"&"+Wb+r+"="+o.ts+"&"+zb+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Yb)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Gb=16384,Qb=45e3;let Hr=null;typeof MozWebSocket<"u"?Hr=MozWebSocket:typeof WebSocket<"u"&&(Hr=WebSocket);class at{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zi(this.connId),this.stats_=Da(n),this.connURL=at.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[pd]=Ra,typeof location<"u"&&location.hostname&&vd.test(location.hostname)&&(o[gd]=_d),n&&(o[md]=n),i&&(o[yd]=i),r&&(o[So]=r),s&&(o[bd]=s),Id(e,wd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_n.set("previous_websocket_failure",!0);try{let i;Qf(),this.mySock=new Hr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hr!==null&&!at.forceDisallow_}static previouslyFailed(){return _n.isInMemoryStorage||_n.get("previous_websocket_failure")===!0}markConnectionHealthy(){_n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ui(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=dd(n,Gb);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zn,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let i=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const r=this.transports_=[];for(const s of zi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zi.globalTransportInitialized_=!1;/**
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
 */const Xb=6e4,Jb=5e3,Zb=10*1024,e0=100*1024,Ks="t",Ec="d",t0="s",Cc="r",n0="e",Ic="o",Tc="a",xc="n",Sc="p",i0="h";class r0{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zi("c:"+this.id+":"),this.transportManager_=new zi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=xi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ks in e){const n=e[Ks];n===Tc?this.upgradeIfSecondaryHealthy_():n===Cc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ic&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),i=vi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),i=vi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(Ks,e);if(Ec in e){const i=e[Ec];if(n===i0)this.onHandshake_(i);else if(n===xc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t0?this.onConnectionShutdown_(i):n===Cc?this.onReset_(i):n===n0?xo("Server Error: "+i):n===Ic?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ra!==i&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),xi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Nd{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Od{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class jr extends Od{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jr}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ac=32,kc=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new he("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function tn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Rd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Dd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function be(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof he)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new he(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function et(t,e){const n=V(t),i=V(e);if(n===null)return e;if(n===i)return et(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Md(t,e){if(tn(t)!==tn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ut(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(tn(t)>tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class o0{constructor(e,n){this.errorPrefix_=n,this.parts_=Dd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gs(this.parts_[i]);Ld(this)}}function a0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gs(e),Ld(t)}function l0(t){const e=t.parts_.pop();t.byteLength_-=gs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ld(t){if(t.byteLength_>kc)throw new Error(t.errorPrefix_+"has a key path longer than "+kc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ac)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ac+") or object contains a cycle "+hn(t))}function hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ma extends Od{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ma}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yi=1e3,c0=60*5*1e3,Nc=30*1e3,u0=1.3,f0=3e4,d0="server_kill",Oc=3;class Nt extends Nd{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nt.nextPersistentConnectionId_++,this.log_=Zi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=c0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Qf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ma.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Oe(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ps,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bt(e,"w")){const i=ii(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ry(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xo("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>f0&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*u0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Nt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new r0(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{ze(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(d0)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ze(f),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ac(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Oa(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new he(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Oc&&(this.reconnectDelay_=Nc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Oc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ld.replace(/\./g,"-")]=1,Gf()?e["framework.cordova"]=1:qv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jr.getInstance().currentlyOnline();return ac(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class _s{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new G(ri,e),r=new G(ri,n);return this.compare(i,r)!==0}minPost(){return G.MIN}}/**
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
 */let hr;class Fd extends _s{static get __EMPTY_NODE(){return hr}static set __EMPTY_NODE(e){hr=e}compare(e,n){return fi(e.name,n.name)}isDefinedOn(e){throw ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(An,hr)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,hr)}toString(){return".key"}}const Zn=new Fd;/**
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
 */class pr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Te.RED,this.left=r!=null?r:We.EMPTY_NODE,this.right=s!=null?s:We.EMPTY_NODE}copy(e,n,i,r,s){return new Te(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class h0{copy(e,n,i,r,s){return this}insert(e,n,i){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pr(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new h0;/**
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
 */function p0(t,e){return fi(t.name,e.name)}function La(t,e){return fi(t,e)}/**
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
 */let Ao;function m0(t){Ao=t}const $d=function(t){return typeof t=="number"?"number:"+hd(t):"string:"+t},Bd=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else x(t===Ao||t.isEmpty(),"priority of unexpected type.");x(t===Ao||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rc;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bd(this.priorityNode_)}static set __childrenNodeConstructor(e){Rc=e}static get __childrenNodeConstructor(){return Rc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:V(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=V(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$d(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hd(this.value_):e+=this.value_,this.lazyHash_=ud(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Ie.VALUE_TYPE_ORDER.indexOf(n),s=Ie.VALUE_TYPE_ORDER.indexOf(i);return x(r>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hd,jd;function g0(t){Hd=t}function _0(t){jd=t}class v0 extends _s{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(An,new Ie("[PRIORITY-POST]",jd))}makePost(e,n){const i=Hd(e);return new G(n,new Ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const Fe=new v0;/**
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
 */const y0=Math.log(2);class b0{constructor(e){const n=s=>parseInt(Math.log(s)/y0,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ur=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new Te(h,f.node,Te.BLACK,null,null);{const m=parseInt(u/2,10)+l,y=r(l,m),I=r(m+1,c);return f=t[m],h=n?n(f):f,new Te(h,f.node,Te.BLACK,y,I)}},s=function(l){let c=null,u=null,f=t.length;const h=function(y,I){const R=f-y,b=f;f-=y;const S=r(R+1,b),D=t[R],$=n?n(D):D;m(new Te($,D.node,I,null,S))},m=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const I=l.nextBitIsOne(),R=Math.pow(2,l.count-(y+1));I?h(R,Te.BLACK):(h(R,Te.BLACK),h(R,Te.RED))}return u},o=new b0(t.length),a=s(o);return new We(i||e,a)};/**
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
 */let Gs;const Un={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Un&&Fe,"ChildrenNode.ts has not been loaded"),Gs=Gs||new At({".priority":Un},{".priority":Fe}),Gs}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ur(i,e.getCompare()):a=Un;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new At(u,c)}addToIndexes(e,n){const i=Fr(this.indexes_,(r,s)=>{const o=ii(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),r===Un)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ur(a,o.getCompare())}else return Un;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new At(i,this.indexSet_)}removeFromIndexes(e,n){const i=Fr(this.indexes_,r=>{if(r===Un)return r;{const s=n.get(e.name);return s?r.remove(new G(e.name,s)):r}});return new At(i,this.indexSet_)}}/**
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
 */let bi;class Z{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bd(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bi||(bi=new Z(new We(La),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bi}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bi:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new G(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?bi:this.priorityNode_;return new Z(r,o,s)}}updateChild(e,n){const i=V(e);if(i===null)return n;{x(V(e)!==".priority"||tn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(le(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),i++,s&&Z.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$d(this.getPriority().val())+":"),this.forEachChild(Fe,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":ud(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,G.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===er?-1:0}withIndex(e){if(e===Zn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Fe),r=n.getIterator(Fe);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class w0 extends Z{constructor(){super(new We(La),Z.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const er=new w0;Object.defineProperties(G,{MIN:{value:new G(ri,Z.EMPTY_NODE)},MAX:{value:new G(An,er)}});Fd.__EMPTY_NODE=Z.EMPTY_NODE;Ie.__childrenNodeConstructor=Z;m0(er);_0(er);/**
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
 */const E0=!0;function Ne(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Ne(e))}if(!(t instanceof Array)&&E0){const n=[];let i=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return Z.EMPTY_NODE;const s=Ur(n,p0,o=>o.name,La);if(i){const o=Ur(n,Fe.getCompare());return new Z(s,Ne(e),new At({".priority":o},{".priority":Fe}))}else return new Z(s,Ne(e),At.Default)}else{let n=Z.EMPTY_NODE;return rt(t,(i,r)=>{if(Bt(t,i)&&i.substring(0,1)!=="."){const s=Ne(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ne(e))}}g0(Ne);/**
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
 */class C0 extends _s{constructor(e){super(),this.indexPath_=e,x(!q(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?fi(e.name,n.name):s}makePost(e,n){const i=Ne(e),r=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new G(n,r)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,er);return new G(An,e)}toString(){return Dd(this.indexPath_,0).join("/")}}/**
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
 */class I0 extends _s{compare(e,n){const i=e.node.compareTo(n.node);return i===0?fi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const i=Ne(e);return new G(n,i)}toString(){return".value"}}const T0=new I0;/**
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
 */function x0(t){return{type:"value",snapshotNode:t}}function S0(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function A0(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function k0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:An}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new Fa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pc(t){const e={};if(t.isDefault())return e;let n;return t.index_===Fe?n="$priority":t.index_===T0?n="$value":t.index_===Zn?n="$key":(x(t.index_ instanceof C0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_&&(e.startAt=Oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Oe(t.indexStartName_))),t.endSet_&&(e.endAt=Oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
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
 */class Wr extends Nd{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Zi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Pc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),ii(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Wr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Pc(e._queryParams),i=e._path.toString(),r=new ps;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oy(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ui(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class N0{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zr(){return{value:null,children:new Map}}function Ud(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=V(e);t.children.has(i)||t.children.set(i,zr());const r=t.children.get(i);e=le(e),Ud(r,e,n)}}function ko(t,e,n){t.value!==null?n(e,t.value):O0(t,(i,r)=>{const s=new he(e.toString()+"/"+i);ko(r,s,n)})}function O0(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class R0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Lc=10*1e3,D0=30*1e3,P0=5*60*1e3;class M0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new R0(e);const i=Lc+(D0-Lc)*Math.random();xi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;rt(e,(r,s)=>{s>0&&Bt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),xi(this.reportStats_.bind(this),Math.floor(Math.random()*2*P0))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Wd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Vr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=wt.ACK_USER_WRITE,this.source=Wd()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Vr(te(),n,this.revert)}}else return x(V(this.path)===e,"operationForChild called for unrelated child."),new Vr(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class kn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=wt.OVERWRITE}operationForChild(e){return q(this.path)?new kn(this.source,te(),this.snap.getImmediateChild(e)):new kn(this.source,le(this.path),this.snap)}}/**
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
 */class Vi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=wt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new kn(this.source,te(),n.value):new Vi(this.source,te(),n)}else return x(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vi(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $a{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function L0(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(k0(o.childName,o.snapshotNode))}),wi(t,r,"child_removed",e,i,n),wi(t,r,"child_added",e,i,n),wi(t,r,"child_moved",s,i,n),wi(t,r,"child_changed",e,i,n),wi(t,r,"value",e,i,n),r}function wi(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>$0(t,a,l)),o.forEach(a=>{const l=F0(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function F0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $0(t,e,n){if(e.childName==null||n.childName==null)throw ui("Should only compare child_ events.");const i=new G(e.childName,e.snapshotNode),r=new G(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function qd(t,e){return{eventCache:t,serverCache:e}}function Si(t,e,n,i){return qd(new $a(e,n,i),t.serverCache)}function Yd(t,e,n,i){return qd(t.eventCache,new $a(e,n,i))}function No(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Qs;const B0=()=>(Qs||(Qs=new We(Tb)),Qs);class ae{constructor(e,n=B0()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return rt(e,(i,r)=>{n=n.set(new he(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(q(e))return null;{const i=V(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:be(new he(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=V(e),i=this.children.get(n);return i!==null?i.subtree(le(e)):new ae(null)}}set(e,n){if(q(e))return new ae(n,this.children);{const i=V(e),s=(this.children.get(i)||new ae(null)).set(le(e),n),o=this.children.insert(i,s);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=V(e),i=this.children.get(n);if(i){const r=i.remove(le(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=V(e),i=this.children.get(n);return i?i.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const i=V(e),s=(this.children.get(i)||new ae(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ae(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(be(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(q(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(le(e),be(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,i){if(q(e))return this;{this.value&&i(n,this.value);const r=V(e),s=this.children.get(r);return s?s.foreachOnPath_(le(e),be(n,r),i):new ae(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(be(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new ae(null))}}function Ai(t,e,n){if(q(e))return new ht(new ae(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=et(r,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(r,s))}else{const r=new ae(n),s=t.writeTree_.setTree(e,r);return new ht(s)}}}function Fc(t,e,n){let i=t;return rt(n,(r,s)=>{i=Ai(i,be(e,r),s)}),i}function $c(t,e){if(q(e))return ht.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new ht(n)}}function Oo(t,e){return $n(t,e)!=null}function $n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(et(n.path,e)):null}function Bc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(i,r)=>{e.push(new G(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new G(i,r.value))}),e}function Qt(t,e){if(q(e))return t;{const n=$n(t,e);return n!=null?new ht(new ae(n)):new ht(t.writeTree_.subtree(e))}}function Ro(t){return t.writeTree_.isEmpty()}function si(t,e){return Kd(te(),t.writeTree_,e)}function Kd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Kd(be(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(be(t,".priority"),i)),n}}/**
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
 */function Gd(t,e){return eh(e,t)}function H0(t,e,n,i,r){x(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Ai(t.visibleWrites,e,n)),t.lastWriteId=i}function j0(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function U0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&W0(a,i.path)?r=!1:ut(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return z0(t),!0;if(i.snap)t.visibleWrites=$c(t.visibleWrites,i.path);else{const a=i.children;rt(a,l=>{t.visibleWrites=$c(t.visibleWrites,be(i.path,l))})}return!0}else return!1}function W0(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(be(t.path,n),e))return!0;return!1}function z0(t){t.visibleWrites=Qd(t.allWrites,V0,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function V0(t){return t.visible}function Qd(t,e,n){let i=ht.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=et(n,o),i=Ai(i,a,s.snap)):ut(o,n)&&(a=et(o,n),i=Ai(i,te(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=et(n,o),i=Fc(i,a,s.children);else if(ut(o,n))if(a=et(o,n),q(a))i=Fc(i,te(),s.children);else{const l=ii(s.children,V(a));if(l){const c=l.getChild(le(a));i=Ai(i,te(),c)}}}else throw ui("WriteRecord should have .snap or .children")}}return i}function Xd(t,e,n,i,r){if(!i&&!r){const s=$n(t.visibleWrites,e);if(s!=null)return s;{const o=Qt(t.visibleWrites,e);if(Ro(o))return n;if(n==null&&!Oo(o,te()))return null;{const a=n||Z.EMPTY_NODE;return si(o,a)}}}else{const s=Qt(t.visibleWrites,e);if(!r&&Ro(s))return n;if(!r&&n==null&&!Oo(s,te()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=Qd(t.allWrites,o,e),l=n||Z.EMPTY_NODE;return si(a,l)}}}function q0(t,e,n){let i=Z.EMPTY_NODE;const r=$n(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Fe,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Qt(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=si(Qt(s,new he(o)),a);i=i.updateImmediateChild(o,l)}),Bc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Qt(t.visibleWrites,e);return Bc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Y0(t,e,n,i,r){x(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(Oo(t.visibleWrites,s))return null;{const o=Qt(t.visibleWrites,s);return Ro(o)?r.getChild(n):si(o,r.getChild(n))}}function K0(t,e,n,i){const r=be(e,n),s=$n(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Qt(t.visibleWrites,r);return si(o,i.getNode().getImmediateChild(n))}else return null}function G0(t,e){return $n(t.visibleWrites,e)}function Q0(t,e,n,i,r,s,o){let a;const l=Qt(t.visibleWrites,e),c=$n(l,te());if(c!=null)a=c;else if(n!=null)a=si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=h.getNext();return u}else return[]}function X0(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function Do(t,e,n,i){return Xd(t.writeTree,t.treePath,e,n,i)}function Jd(t,e){return q0(t.writeTree,t.treePath,e)}function Hc(t,e,n,i){return Y0(t.writeTree,t.treePath,e,n,i)}function qr(t,e){return G0(t.writeTree,be(t.treePath,e))}function J0(t,e,n,i,r,s){return Q0(t.writeTree,t.treePath,e,n,i,r,s)}function Ba(t,e,n){return K0(t.writeTree,t.treePath,e,n)}function Zd(t,e){return eh(be(t.treePath,e),t.writeTree)}function eh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Z0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Dc(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,A0(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,S0(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Dc(i,e.snapshotNode,r.oldSnap));else throw ui("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class e1{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const th=new e1;class Ha{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new $a(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ba(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nn(this.viewCache_),s=J0(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function t1(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n1(t,e,n,i,r){const s=new Z0;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=Po(t,e,c.path,c.snap,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Yr(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=r1(t,e,c.path,c.children,i,r,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Mo(t,e,c.path,c.children,i,r,a,s))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=a1(t,e,c.path,i,r,s):o=s1(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===wt.LISTEN_COMPLETE)o=o1(t,e,n.path,i,s);else throw ui("Unknown operation type: "+n.type);const l=s.getChanges();return i1(e,o,l),{viewCache:o,changes:l}}function i1(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=No(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(x0(No(e)))}}function nh(t,e,n,i,r,s){const o=e.eventCache;if(qr(i,n)!=null)return e;{let a,l;if(q(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nn(e),u=c instanceof Z?c:Z.EMPTY_NODE,f=Jd(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Do(i,Nn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){x(tn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Hc(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=le(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Hc(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=Ba(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Si(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Yr(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=V(n);if(!l.isCompleteForPath(n)&&tn(n)>1)return e;const y=le(n),R=l.getNode().getImmediateChild(m).updateChild(y,i);m===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),m,R,y,th,null)}const f=Yd(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),h=new Ha(r,f,s);return nh(t,f,n,r,h,a)}function Po(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Ha(r,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Si(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Si(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=le(n),m=a.getNode().getImmediateChild(f);let y;if(q(h))y=i;else{const I=u.getCompleteChild(f);I!=null?Rd(h)===".priority"&&I.getChild(Pd(h)).isEmpty()?y=I:y=I.updateChild(h,i):y=Z.EMPTY_NODE}if(m.equals(y))l=e;else{const I=t.filter.updateChild(a.getNode(),f,y,h,u,o);l=Si(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jc(t,e){return t.eventCache.isCompleteForChild(e)}function r1(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=be(n,l);jc(e,V(u))&&(a=Po(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=be(n,l);jc(e,V(u))||(a=Po(t,a,u,c,r,s,o))}),a}function Uc(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Mo(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=i:c=new ae(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),y=Uc(t,m,h);l=Yr(t,l,new he(f),y,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const y=e.serverCache.getNode().getImmediateChild(f),I=Uc(t,y,h);l=Yr(t,l,new he(f),I,r,s,o,a)}}),l}function s1(t,e,n,i,r,s,o){if(qr(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yr(t,e,n,l.getNode().getChild(n),r,s,a,o);if(q(n)){let c=new ae(null);return l.getNode().forEachChild(Zn,(u,f)=>{c=c.set(new he(u),f)}),Mo(t,e,n,c,r,s,a,o)}else return e}else{let c=new ae(null);return i.foreach((u,f)=>{const h=be(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Mo(t,e,n,c,r,s,a,o)}}function o1(t,e,n,i,r){const s=e.serverCache,o=Yd(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return nh(t,o,n,i,th,r)}function a1(t,e,n,i,r,s){let o;if(qr(i,n)!=null)return e;{const a=new Ha(i,e,r),l=e.eventCache.getNode();let c;if(q(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Do(i,Nn(e));else{const f=e.serverCache.getNode();x(f instanceof Z,"serverChildren would be complete if leaf node"),u=Jd(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let f=Ba(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,le(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Z.EMPTY_NODE,le(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Do(i,Nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||qr(i,te())!=null,Si(e,c,o,t.filter.filtersNodes())}}function l1(t,e){const n=Nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Wc(t,e,n,i){e.type===wt.MERGE&&e.source.queryId!==null&&(x(Nn(t.viewCache_),"We should always have a full cache before handling merges"),x(No(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=n1(t.processor_,r,e,n,i);return t1(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,c1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function c1(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return L0(t.eventGenerator_,e,n,r)}/**
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
 */let zc;function u1(t){x(!zc,"__referenceConstructor has already been defined"),zc=t}function ja(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return x(s!=null,"SyncTree gave us an op for an invalid query."),Wc(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Wc(o,e,n,i));return s}}function Ua(t,e){let n=null;for(const i of t.views.values())n=n||l1(i,e);return n}/**
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
 */let Vc;function f1(t){x(!Vc,"__referenceConstructor has already been defined"),Vc=t}class qc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=X0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ih(t,e,n,i,r){return H0(t.pendingWriteTree_,e,n,i,r),r?ys(t,new kn(Wd(),e,n)):[]}function vn(t,e,n=!1){const i=j0(t.pendingWriteTree_,e);if(U0(t.pendingWriteTree_,e)){let s=new ae(null);return i.snap!=null?s=s.set(te(),!0):rt(i.children,o=>{s=s.set(new he(o),!0)}),ys(t,new Vr(i.path,s,n))}else return[]}function vs(t,e,n){return ys(t,new kn(zd(),e,n))}function d1(t,e,n){const i=ae.fromObject(n);return ys(t,new Vi(zd(),e,i))}function h1(t,e,n,i){const r=oh(t,i);if(r!=null){const s=ah(r),o=s.path,a=s.queryId,l=et(o,e),c=new kn(Vd(a),l,n);return lh(t,o,c)}else return[]}function p1(t,e,n,i){const r=oh(t,i);if(r){const s=ah(r),o=s.path,a=s.queryId,l=et(o,e),c=ae.fromObject(n),u=new Vi(Vd(a),l,c);return lh(t,o,u)}else return[]}function Wa(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=et(o,e),c=Ua(a,l);if(c)return c});return Xd(r,e,s,n,!0)}function ys(t,e){return rh(e,t.syncPointTree_,null,Gd(t.pendingWriteTree_,te()))}function rh(t,e,n,i){if(q(t.path))return sh(t,e,n,i);{const r=e.get(te());n==null&&r!=null&&(n=Ua(r,te()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Zd(i,o);s=s.concat(rh(a,l,c,u))}return r&&(s=s.concat(ja(r,t,i,n))),s}}function sh(t,e,n,i){const r=e.get(te());n==null&&r!=null&&(n=Ua(r,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Zd(i,o),u=t.operationForChild(o);u&&(s=s.concat(sh(u,a,l,c)))}),r&&(s=s.concat(ja(r,t,i,n))),s}function oh(t,e){return t.tagToQueryMap.get(e)}function ah(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function lh(t,e,n){const i=t.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const r=Gd(t.pendingWriteTree_,e);return ja(i,n,r,null)}/**
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
 */class za{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new za(n)}node(){return this.node_}}class Va{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new Va(this.syncTree_,n)}node(){return Wa(this.syncTree_,this.path_)}}const m1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yc=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return g1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _1(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},g1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},_1=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const r=e.node();if(x(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},v1=function(t,e,n,i){return qa(e,new Va(n,t),i)},ch=function(t,e,n){return qa(t,new za(e),n)};function qa(t,e,n){const i=t.getPriority().val(),r=Yc(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Yc(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ie(a,Ne(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ie(r))),o.forEachChild(Fe,(a,l)=>{const c=qa(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Ya{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ka(t,e){let n=e instanceof he?e:new he(e),i=t,r=V(n);for(;r!==null;){const s=ii(i.node.children,r)||{children:{},childCount:0};i=new Ya(r,i,s),n=le(n),r=V(n)}return i}function hi(t){return t.node.value}function uh(t,e){t.node.value=e,Lo(t)}function fh(t){return t.node.childCount>0}function y1(t){return hi(t)===void 0&&!fh(t)}function bs(t,e){rt(t.node.children,(n,i)=>{e(new Ya(n,t,i))})}function dh(t,e,n,i){n&&!i&&e(t),bs(t,r=>{dh(r,e,!0,i)}),n&&i&&e(t)}function b1(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function tr(t){return new he(t.parent===null?t.name:tr(t.parent)+"/"+t.name)}function Lo(t){t.parent!==null&&w1(t.parent,t.name,t)}function w1(t,e,n){const i=y1(n),r=Bt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Lo(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Lo(t))}/**
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
 */const E1=/[\[\].#$\/\u0000-\u001F\u007F]/,C1=/[\[\].#$\u0000-\u001F\u007F]/,Xs=10*1024*1024,hh=function(t){return typeof t=="string"&&t.length!==0&&!E1.test(t)},ph=function(t){return typeof t=="string"&&t.length!==0&&!C1.test(t)},I1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ph(t)},T1=function(t,e,n,i){i&&e===void 0||Ga(Aa(t,"value"),e,n)},Ga=function(t,e,n){const i=n instanceof he?new o0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hn(i));if(typeof e=="function")throw new Error(t+"contains a function "+hn(i)+" with contents = "+e.toString());if(fd(e))throw new Error(t+"contains "+e.toString()+" "+hn(i));if(typeof e=="string"&&e.length>Xs/3&&gs(e)>Xs)throw new Error(t+"contains a string greater than "+Xs+" utf8 bytes "+hn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(rt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!hh(o)))throw new Error(t+" contains an invalid key ("+o+") "+hn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);a0(i,o),Ga(t,a,i),l0(i)}),r&&s)throw new Error(t+' contains ".value" child '+hn(i)+" in addition to actual children.")}},mh=function(t,e,n,i){if(!(i&&n===void 0)&&!ph(n))throw new Error(Aa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x1=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mh(t,e,n,i)},S1=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},A1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!I1(n))throw new Error(Aa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class k1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gh(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Md(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Pt(t,e,n){gh(t,n),N1(t,i=>ut(i,e)||ut(e,i))}function N1(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(O1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function O1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();In&&Me("event: "+n.toString()),di(i)}}}/**
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
 */const R1="repo_interrupt",D1=25;class P1{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new k1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zr(),this.transactionQueueTree_=new Ya,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function M1(t,e,n){if(t.stats_=Da(t.repoInfo_),t.forceRestClient_||Ob())t.server_=new Wr(t.repoInfo_,(i,r,s,o)=>{Kc(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(i,r,s,o)=>{Kc(t,i,r,s,o)},i=>{Gc(t,i)},i=>{F1(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Lb(t.repoInfo_,()=>new M0(t.stats_,t.server_)),t.infoData_=new N0,t.infoSyncTree_=new qc({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=vs(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xa(t,"connected",!1),t.serverSyncTree_=new qc({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Pt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function L1(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qa(t){return m1({timestamp:L1(t)})}function Kc(t,e,n,i,r){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Fr(n,c=>Ne(c));o=p1(t.serverSyncTree_,s,l,r)}else{const l=Ne(n);o=h1(t.serverSyncTree_,s,l,r)}else if(i){const l=Fr(n,c=>Ne(c));o=d1(t.serverSyncTree_,s,l)}else{const l=Ne(n);o=vs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ws(t,s)),Pt(t.eventQueue_,a,o)}function Gc(t,e){Xa(t,"connected",e),e===!1&&B1(t)}function F1(t,e){rt(e,(n,i)=>{Xa(t,n,i)})}function Xa(t,e,n){const i=new he("/.info/"+e),r=Ne(n);t.infoData_.updateSnapshot(i,r);const s=vs(t.infoSyncTree_,i,r);Pt(t.eventQueue_,i,s)}function _h(t){return t.nextWriteId_++}function $1(t,e,n,i,r){Ja(t,"set",{path:e.toString(),value:n,priority:i});const s=Qa(t),o=Ne(n,i),a=Wa(t.serverSyncTree_,e),l=ch(o,a,s),c=_h(t),u=ih(t.serverSyncTree_,e,l,c,!0);gh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const y=h==="ok";y||ze("set at "+e+" failed: "+h);const I=vn(t.serverSyncTree_,c,!y);Pt(t.eventQueue_,e,I),j1(t,r,h,m)});const f=Eh(t,e);ws(t,f),Pt(t.eventQueue_,f,[])}function B1(t){Ja(t,"onDisconnectEvents");const e=Qa(t),n=zr();ko(t.onDisconnect_,te(),(r,s)=>{const o=v1(r,s,t.serverSyncTree_,e);Ud(n,r,o)});let i=[];ko(n,te(),(r,s)=>{i=i.concat(vs(t.serverSyncTree_,r,s));const o=Eh(t,r);ws(t,o)}),t.onDisconnect_=zr(),Pt(t.eventQueue_,te(),i)}function H1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(R1)}function Ja(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function j1(t,e,n,i){e&&di(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function vh(t,e,n){return Wa(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Za(t,e=t.transactionQueueTree_){if(e||Es(t,e),hi(e)){const n=bh(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&U1(t,tr(e),n)}else fh(e)&&bs(e,n=>{Za(t,n)})}function U1(t,e,n){const i=n.map(c=>c.currentWriteId),r=vh(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=et(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ja(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Es(t,Ka(t.transactionQueueTree_,e)),Za(t,t.transactionQueueTree_),Pt(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)di(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ze("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ws(t,e)}},o)}function ws(t,e){const n=yh(t,e),i=tr(n),r=bh(t,n);return W1(t,r,i),i}function W1(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=et(n,l.path);let u=!1,f;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=D1)u=!0,f="maxretry",r=r.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=vh(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Ga("transaction failed: Data returned ",m,l.path);let y=Ne(m);typeof m=="object"&&m!=null&&Bt(m,".priority")||(y=y.updatePriority(h.getPriority()));const R=l.currentWriteId,b=Qa(t),S=ch(y,h,b);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=S,l.currentWriteId=_h(t),o.splice(o.indexOf(R),1),r=r.concat(ih(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(vn(t.serverSyncTree_,R,!0))}else u=!0,f="nodata",r=r.concat(vn(t.serverSyncTree_,l.currentWriteId,!0))}Pt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Es(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)di(i[a]);Za(t,t.transactionQueueTree_)}function yh(t,e){let n,i=t.transactionQueueTree_;for(n=V(e);n!==null&&hi(i)===void 0;)i=Ka(i,n),e=le(e),n=V(e);return i}function bh(t,e){const n=[];return wh(t,e,n),n.sort((i,r)=>i.order-r.order),n}function wh(t,e,n){const i=hi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);bs(e,r=>{wh(t,r,n)})}function Es(t,e){const n=hi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,uh(e,n.length>0?n:void 0)}bs(e,i=>{Es(t,i)})}function Eh(t,e){const n=tr(yh(t,e)),i=Ka(t.transactionQueueTree_,e);return b1(i,r=>{Js(t,r)}),Js(t,i),dh(i,r=>{Js(t,r)}),n}function Js(t,e){const n=hi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?uh(e,void 0):n.length=s+1,Pt(t.eventQueue_,tr(e),r);for(let o=0;o<i.length;o++)di(i[o])}}/**
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
 */function z1(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function V1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qc=function(t,e){const n=q1(t),i=n.namespace;n.domain==="firebase.com"&&Dt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Dt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cb();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cd(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new he(n.pathString)}},q1=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=z1(t.substring(u,f)));const h=V1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class el{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return q(this._path)?null:Rd(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=Mc(this._queryParams),n=Oa(e);return n==="{}"?"default":n}get _queryObject(){return Mc(this._queryParams)}isEqual(e){if(e=Fn(e),!(e instanceof el))return!1;const n=this._repo===e._repo,i=Md(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+s0(this._path)}}class Bn extends el{constructor(e,n){super(e,n,new Fa,!1)}get parent(){const e=Pd(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Y1(t,e){return t=Fn(t),t._checkNotDeleted("ref"),e!==void 0?K1(t._root,e):t._root}function K1(t,e){return t=Fn(t),V(t._path)===null?x1("child","path",e,!1):mh("child","path",e,!1),new Bn(t._repo,be(t._path,e))}function G1(t,e){t=Fn(t),S1("set",t._path),T1("set",e,t._path,!1);const n=new ps;return $1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}u1(Bn);f1(Bn);/**
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
 */const Q1="FIREBASE_DATABASE_EMULATOR_HOST",Fo={};let X1=!1;function J1(t,e,n,i){t.repoInfo_=new Cd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function Z1(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Dt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qc(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Q1]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Qc(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Jn(Jn.OWNER):new Db(t.name,t.options,e);A1("Invalid Firebase Database URL",o),q(o.path)||Dt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=tw(a,t,u,new Rb(t.name,n));return new nw(f,t)}function ew(t,e){const n=Fo[e];(!n||n[t.key]!==t)&&Dt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),H1(t),delete n[t.key]}function tw(t,e,n,i){let r=Fo[e.name];r||(r={},Fo[e.name]=r);let s=r[t.toURLString()];return s&&Dt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new P1(t,X1,n,i),r[t.toURLString()]=s,s}class nw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(M1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ew(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dt("Cannot call "+e+" on a deleted database.")}}function Ch(t=sd(),e){const n=Xi(t,"database").getImmediate({identifier:e}),i=Jv("database");if(i){const[r,s]=i.split(":");iw(n,r,parseInt(s,10))}return n}function iw(t,e,n,i={}){t=Fn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Dt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Jn(Jn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ey(i.mockUserToken,t.app.options.projectId);s=new Jn(o)}J1(r,e,n,s)}/**
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
 */function rw(t){vb(lb),en(new Rt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Z1(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Ct(_c,vc,t),Ct(_c,vc,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rw();const sw=He({__name:"App",setup(t){const e=i=>{const r=Ch();G1(Y1(r,"users"),{ip:i})},n=()=>{fetch("https://api.ipify.org/?format=json").then(i=>i.json()).then(({ip:i})=>{e(i)})};return ds(async()=>{n()}),(i,r)=>{const s=Tn("notifications");return Q(),ue(ke,null,[Y(H_,{id:"introduction"}),Y(fv,{id:"experience"}),Y(Iv,{id:"education"}),Y(Hv,{id:"project"}),Y(s,{class:"notification",position:"bottom right"})],64)}}});var ow={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),r,s,o;if(n&&i){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,u=e instanceof RegExp;if(c!=u)return!1;if(c&&u)return t.toString()==e.toString();var f=Object.keys(t);if(s=f.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[r]))return!1;for(r=s;r--!==0;)if(o=f[r],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let r=e.split("."),s=t;for(var n=0,i=r.length;n<i;++n){if(s==null)return null;s=s[r[n]]}return s}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let r of t)for(let s of e)if(String(this.resolveFieldData(r,s)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}}return i},reorderArray(t,e,n){let i;if(t&&e!==n){if(n>=t.length)for(i=n-t.length;i--+1;)t.push(void 0);t.splice(n,0,t.splice(e,1)[0])}},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,t),r=!0;break}r||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[r]===""?!0:n[r]}return null},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}};const De={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Xc={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[De.STARTS_WITH,De.CONTAINS,De.NOT_CONTAINS,De.ENDS_WITH,De.EQUALS,De.NOT_EQUALS],numeric:[De.EQUALS,De.NOT_EQUALS,De.LESS_THAN,De.LESS_THAN_OR_EQUAL_TO,De.GREATER_THAN,De.GREATER_THAN_OR_EQUAL_TO],date:[De.DATE_IS,De.DATE_IS_NOT,De.DATE_BEFORE,De.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},aw=Symbol();var lw={install:(t,e)=>{let n=e?{...Xc,...e}:{...Xc};const i={config:os(n)};t.config.globalProperties.$primevue=i,t.provide(aw,i)}},Ih={name:"Timeline",props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},methods:{getKey(t,e){return this.dataKey?ow.resolveFieldData(t,this.dataKey):e}},computed:{containerClass(){return["p-timeline p-component","p-timeline-"+this.align,"p-timeline-"+this.layout]}}};const cw={class:"p-timeline-event-opposite"},uw={class:"p-timeline-event-separator"},fw=F("div",{class:"p-timeline-event-marker"},null,-1),dw=F("div",{class:"p-timeline-event-connector"},null,-1),hw={class:"p-timeline-event-content"};function pw(t,e,n,i,r,s){return Q(),ue("div",{class:Xt(s.containerClass)},[(Q(!0),ue(ke,null,ga(n.value,(o,a)=>(Q(),ue("div",{key:s.getKey(o,a),class:"p-timeline-event"},[F("div",cw,[Ze(t.$slots,"opposite",{item:o,index:a})]),F("div",uw,[Ze(t.$slots,"marker",{item:o,index:a},()=>[fw]),a!==n.value.length-1?Ze(t.$slots,"connector",{key:0,item:o,index:a},()=>[dw]):bt("",!0)]),F("div",hw,[Ze(t.$slots,"content",{item:o,index:a})])]))),128))],2)}function mw(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var gw=`
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
`;mw(gw);Ih.render=pw;function Jc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jc(Object(n),!0).forEach(function(i){Ee(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jc(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Kr(t){return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kr(t)}function _w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zc(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function vw(t,e,n){return e&&Zc(t.prototype,e),n&&Zc(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ee(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tl(t,e){return bw(t)||Ew(t,e)||Th(t,e)||Iw()}function nr(t){return yw(t)||ww(t)||Th(t)||Cw()}function yw(t){if(Array.isArray(t))return $o(t)}function bw(t){if(Array.isArray(t))return t}function ww(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ew(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function Th(t,e){if(!!t){if(typeof t=="string")return $o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $o(t,e)}}function $o(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Cw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eu=function(){},nl={},xh={},Sh=null,Ah={mark:eu,measure:eu};try{typeof window<"u"&&(nl=window),typeof document<"u"&&(xh=document),typeof MutationObserver<"u"&&(Sh=MutationObserver),typeof performance<"u"&&(Ah=performance)}catch{}var Tw=nl.navigator||{},tu=Tw.userAgent,nu=tu===void 0?"":tu,nn=nl,fe=xh,iu=Sh,mr=Ah;nn.document;var Ht=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",kh=~nu.indexOf("MSIE")||~nu.indexOf("Trident/"),gr,_r,vr,yr,br,Mt="___FONT_AWESOME___",Bo=16,Nh="fa",Oh="svg-inline--fa",On="data-fa-i2svg",Ho="data-fa-pseudo-element",xw="data-fa-pseudo-element-pending",il="data-prefix",rl="data-icon",ru="fontawesome-i2svg",Sw="async",Aw=["HTML","HEAD","STYLE","SCRIPT"],Rh=function(){try{return!0}catch{return!1}}(),ce="classic",_e="sharp",sl=[ce,_e];function ir(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ce]}})}var qi=ir((gr={},Ee(gr,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(gr,_e,{fa:"solid",fass:"solid","fa-solid":"solid"}),gr)),Yi=ir((_r={},Ee(_r,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(_r,_e,{solid:"fass"}),_r)),Ki=ir((vr={},Ee(vr,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(vr,_e,{fass:"fa-solid"}),vr)),kw=ir((yr={},Ee(yr,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(yr,_e,{"fa-solid":"fass"}),yr)),Nw=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Dh="fa-layers-text",Ow=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rw=ir((br={},Ee(br,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(br,_e,{900:"fass"}),br)),Ph=[1,2,3,4,5,6,7,8,9,10],Dw=Ph.concat([11,12,13,14,15,16,17,18,19,20]),Pw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gi=new Set;Object.keys(Yi[ce]).map(Gi.add.bind(Gi));Object.keys(Yi[_e]).map(Gi.add.bind(Gi));var Mw=[].concat(sl,nr(Gi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yn.GROUP,yn.SWAP_OPACITY,yn.PRIMARY,yn.SECONDARY]).concat(Ph.map(function(t){return"".concat(t,"x")})).concat(Dw.map(function(t){return"w-".concat(t)})),ki=nn.FontAwesomeConfig||{};function Lw(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var $w=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$w.forEach(function(t){var e=tl(t,2),n=e[0],i=e[1],r=Fw(Lw(n));r!=null&&(ki[i]=r)})}var Mh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Nh,replacementClass:Oh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ki.familyPrefix&&(ki.cssPrefix=ki.familyPrefix);var oi=k(k({},Mh),ki);oi.autoReplaceSvg||(oi.observeMutations=!1);var O={};Object.keys(Mh).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){oi[t]=n,Ni.forEach(function(i){return i(O)})},get:function(){return oi[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){oi.cssPrefix=e,Ni.forEach(function(n){return n(O)})},get:function(){return oi.cssPrefix}});nn.FontAwesomeConfig=O;var Ni=[];function Bw(t){return Ni.push(t),function(){Ni.splice(Ni.indexOf(t),1)}}var Wt=Bo,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hw(t){if(!(!t||!Ht)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return fe.head.insertBefore(e,i),t}}var jw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qi(){for(var t=12,e="";t-- >0;)e+=jw[Math.random()*62|0];return e}function pi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ol(t){return t.classList?pi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uw(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lh(t[n]),'" ')},"").trim()}function Cs(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function al(t){return t.size!==Et.size||t.x!==Et.x||t.y!==Et.y||t.rotate!==Et.rotate||t.flipX||t.flipY}function Ww(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function zw(t){var e=t.transform,n=t.width,i=n===void 0?Bo:n,r=t.height,s=r===void 0?Bo:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&kh?l+="translate(".concat(e.x/Wt-i/2,"em, ").concat(e.y/Wt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Vw=`:root, :host {
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
}`;function Fh(){var t=Nh,e=Oh,n=O.cssPrefix,i=O.replacementClass,r=Vw;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var su=!1;function Zs(){O.autoAddCss&&!su&&(Hw(Fh()),su=!0)}var qw={mixout:function(){return{dom:{css:Fh,insertCss:Zs}}},hooks:function(){return{beforeDOMElementCreation:function(){Zs()},beforeI2svg:function(){Zs()}}}},Lt=nn||{};Lt[Mt]||(Lt[Mt]={});Lt[Mt].styles||(Lt[Mt].styles={});Lt[Mt].hooks||(Lt[Mt].hooks={});Lt[Mt].shims||(Lt[Mt].shims=[]);var ft=Lt[Mt],$h=[],Yw=function t(){fe.removeEventListener("DOMContentLoaded",t),Gr=1,$h.map(function(e){return e()})},Gr=!1;Ht&&(Gr=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Gr||fe.addEventListener("DOMContentLoaded",Yw));function Kw(t){!Ht||(Gr?setTimeout(t,0):$h.push(t))}function rr(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Lh(t):"<".concat(e," ").concat(Uw(i),">").concat(s.map(rr).join(""),"</").concat(e,">")}function ou(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gw=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},eo=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Gw(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Qw(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function jo(t){var e=Qw(t);return e.length===1?e[0].toString(16):null}function Xw(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function au(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Uo(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=au(e);typeof ft.hooks.addPack=="function"&&!r?ft.hooks.addPack(t,au(e)):ft.styles[t]=k(k({},ft.styles[t]||{}),s),t==="fas"&&Uo("fa",e)}var wr,Er,Cr,Vn=ft.styles,Jw=ft.shims,Zw=(wr={},Ee(wr,ce,Object.values(Ki[ce])),Ee(wr,_e,Object.values(Ki[_e])),wr),ll=null,Bh={},Hh={},jh={},Uh={},Wh={},eE=(Er={},Ee(Er,ce,Object.keys(qi[ce])),Ee(Er,_e,Object.keys(qi[_e])),Er);function tE(t){return~Mw.indexOf(t)}function nE(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!tE(r)?r:null}var zh=function(){var e=function(s){return eo(Vn,function(o,a,l){return o[l]=eo(a,s,{}),o},{})};Bh=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Hh=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),Wh=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Vn||O.autoFetchSvg,i=eo(Jw,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});jh=i.names,Uh=i.unicodes,ll=Is(O.styleDefault,{family:O.familyDefault})};Bw(function(t){ll=Is(t.styleDefault,{family:O.familyDefault})});zh();function cl(t,e){return(Bh[t]||{})[e]}function iE(t,e){return(Hh[t]||{})[e]}function bn(t,e){return(Wh[t]||{})[e]}function Vh(t){return jh[t]||{prefix:null,iconName:null}}function rE(t){var e=Uh[t],n=cl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rn(){return ll}var ul=function(){return{prefix:null,iconName:null,rest:[]}};function Is(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ce:n,r=qi[i][t],s=Yi[i][t]||Yi[i][r],o=t in ft.styles?t:null;return s||o||null}var lu=(Cr={},Ee(Cr,ce,Object.keys(Ki[ce])),Ee(Cr,_e,Object.keys(Ki[_e])),Cr);function Ts(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},Ee(e,ce,"".concat(O.cssPrefix,"-").concat(ce)),Ee(e,_e,"".concat(O.cssPrefix,"-").concat(_e)),e),o=null,a=ce;(t.includes(s[ce])||t.some(function(c){return lu[ce].includes(c)}))&&(a=ce),(t.includes(s[_e])||t.some(function(c){return lu[_e].includes(c)}))&&(a=_e);var l=t.reduce(function(c,u){var f=nE(O.cssPrefix,u);if(Vn[u]?(u=Zw[a].includes(u)?kw[a][u]:u,o=u,c.prefix=u):eE[a].indexOf(u)>-1?(o=u,c.prefix=Is(u,{family:a})):f?c.iconName=f:u!==O.replacementClass&&u!==s[ce]&&u!==s[_e]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?Vh(c.iconName):{},m=bn(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Vn.far&&Vn.fas&&!O.autoFetchSvg&&(c.prefix="fas")}return c},ul());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(Vn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=bn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rn()||"fas"),l}var sE=function(){function t(){_w(this,t),this.definitions={}}return vw(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),o[a]),Uo(a,o[a]);var l=Ki[ce][a];l&&Uo(l,o[a]),zh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),cu=[],qn={},ei={},oE=Object.keys(ei);function aE(t,e){var n=e.mixoutsTo;return cu=t,qn={},Object.keys(ei).forEach(function(i){oE.indexOf(i)===-1&&delete ei[i]}),cu.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Kr(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){qn[o]||(qn[o]=[]),qn[o].push(s[o])})}i.provides&&i.provides(ei)}),n}function Wo(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=qn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Rn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=qn[t]||[];r.forEach(function(s){s.apply(null,n)})}function Ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ei[t]?ei[t].apply(null,e):void 0}function zo(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||rn();if(!!e)return e=bn(n,e)||e,ou(qh.definitions,n,e)||ou(ft.styles,n,e)}var qh=new sE,lE=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Rn("noAuto")},cE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(Rn("beforeI2svg",e),Ft("pseudoElements2svg",e),Ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Kw(function(){fE({autoReplaceSvgRoot:n}),Rn("watch",e)})}},uE={icon:function(e){if(e===null)return null;if(Kr(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:bn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Is(e[0]);return{prefix:i,iconName:bn(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(Nw))){var r=Ts(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||rn(),iconName:bn(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=rn();return{prefix:s,iconName:bn(s,e)||e}}}},Qe={noAuto:lE,config:O,dom:cE,parse:uE,library:qh,findIconDefinition:zo,toHtml:rr},fE=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?fe:n;(Object.keys(ft.styles).length>0||O.autoFetchSvg)&&Ht&&O.autoReplaceSvg&&Qe.dom.i2svg({node:i})};function xs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return rr(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ht){var i=fe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function dE(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(al(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Cs(k(k({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function hE(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:o}),children:i}]}]}function fl(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,y=i.found?i:n,I=y.width,R=y.height,b=r==="fak",S=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(J){return f.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(f.classes).join(" "),D={children:[],attributes:k(k({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(R)})},$=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/R*16*.0625,"em")}:{};m&&(D.attributes[On]=""),l&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(u||Qi())},children:[l]}),delete D.attributes.title);var W=k(k({},D),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:k(k({},$),f.styles)}),ye=i.found&&n.found?Ft("generateAbstractMask",W)||{children:[],attributes:{}}:Ft("generateAbstractIcon",W)||{children:[],attributes:{}},me=ye.children,j=ye.attributes;return W.children=me,W.attributes=j,a?hE(W):dE(W)}function uu(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=k(k(k({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[On]="");var u=k({},o.styles);al(r)&&(u.transform=zw({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Cs(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function pE(t){var e=t.content,n=t.title,i=t.extra,r=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Cs(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var to=ft.styles;function Vo(t){var e=t[0],n=t[1],i=t.slice(4),r=tl(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var mE={found:!1,width:512,height:512};function gE(t,e){!Rh&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qo(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=rn()),new Promise(function(i,r){if(Ft("missingIconAbstract"),n==="fa"){var s=Vh(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&to[e]&&to[e][t]){var o=to[e][t];return i(Vo(o))}gE(t,e),i(k(k({},mE),{},{icon:O.showMissingIcons&&t?Ft("missingIconAbstract")||{}:{}}))})}var fu=function(){},Yo=O.measurePerformance&&mr&&mr.mark&&mr.measure?mr:{mark:fu,measure:fu},Ci='FA "6.2.0"',_E=function(e){return Yo.mark("".concat(Ci," ").concat(e," begins")),function(){return Yh(e)}},Yh=function(e){Yo.mark("".concat(Ci," ").concat(e," ends")),Yo.measure("".concat(Ci," ").concat(e),"".concat(Ci," ").concat(e," begins"),"".concat(Ci," ").concat(e," ends"))},dl={begin:_E,end:Yh},Sr=function(){};function du(t){var e=t.getAttribute?t.getAttribute(On):null;return typeof e=="string"}function vE(t){var e=t.getAttribute?t.getAttribute(il):null,n=t.getAttribute?t.getAttribute(rl):null;return e&&n}function yE(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function bE(){if(O.autoReplaceSvg===!0)return Ar.replace;var t=Ar[O.autoReplaceSvg];return t||Ar.replace}function wE(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function EE(t){return fe.createElement(t)}function Kh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?wE:EE:n;if(typeof t=="string")return fe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Kh(o,{ceFn:i}))}),r}function CE(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ar={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Kh(r),n)}),n.getAttribute(On)===null&&O.keepOriginalSource){var i=fe.createComment(CE(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ol(n).indexOf(O.replacementClass))return Ar.replace(e);var r=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return rr(a)}).join(`
`);n.setAttribute(On,""),n.innerHTML=o}};function hu(t){t()}function Gh(t,e){var n=typeof e=="function"?e:Sr;if(t.length===0)n();else{var i=hu;O.mutateApproach===Sw&&(i=nn.requestAnimationFrame||hu),i(function(){var r=bE(),s=dl.begin("mutate");t.map(r),s(),n()})}}var hl=!1;function Qh(){hl=!0}function Ko(){hl=!1}var Qr=null;function pu(t){if(!!iu&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?Sr:e,i=t.nodeCallback,r=i===void 0?Sr:i,s=t.pseudoElementsCallback,o=s===void 0?Sr:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;Qr=new iu(function(c){if(!hl){var u=rn();pi(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!du(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&du(f.target)&&~Pw.indexOf(f.attributeName))if(f.attributeName==="class"&&vE(f.target)){var h=Ts(ol(f.target)),m=h.prefix,y=h.iconName;f.target.setAttribute(il,m||u),y&&f.target.setAttribute(rl,y)}else yE(f.target)&&r(f.target)})}}),Ht&&Qr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IE(){!Qr||Qr.disconnect()}function TE(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function xE(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Ts(ol(t));return r.prefix||(r.prefix=rn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=iE(r.prefix,t.innerText)||cl(r.prefix,jo(t.innerText))),!r.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function SE(t){var e=pi(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(i||Qi()):(e["aria-hidden"]="true",e.focusable="false")),e}function AE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xE(t),i=n.iconName,r=n.prefix,s=n.rest,o=SE(t),a=Wo("parseNodeAttributes",{},t),l=e.styleParser?TE(t):[];return k({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var kE=ft.styles;function Xh(t){var e=O.autoReplaceSvg==="nest"?mu(t,{styleParser:!1}):mu(t);return~e.extra.classes.indexOf(Dh)?Ft("generateLayersText",t,e):Ft("generateSvgReplacementMutation",t,e)}var sn=new Set;sl.map(function(t){sn.add("fa-".concat(t))});Object.keys(qi[ce]).map(sn.add.bind(sn));Object.keys(qi[_e]).map(sn.add.bind(sn));sn=nr(sn);function gu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=fe.documentElement.classList,i=function(f){return n.add("".concat(ru,"-").concat(f))},r=function(f){return n.remove("".concat(ru,"-").concat(f))},s=O.autoFetchSvg?sn:sl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(kE));s.includes("fa")||s.push("fa");var o=[".".concat(Dh,":not([").concat(On,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(On,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=pi(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=dl.begin("onTree"),c=a.reduce(function(u,f){try{var h=Xh(f);h&&u.push(h)}catch(m){Rh||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Gh(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function NE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xh(t).then(function(n){n&&Gh([n],e)})}function OE(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:zo(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:zo(r||{})),t(i,k(k({},n),{},{mask:r}))}}var RE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Et:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,I=n.classes,R=I===void 0?[]:I,b=n.attributes,S=b===void 0?{}:b,D=n.styles,$=D===void 0?{}:D;if(!!e){var W=e.prefix,ye=e.iconName,me=e.icon;return xs(k({type:"icon"},e),function(){return Rn("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(h?S["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||Qi()):(S["aria-hidden"]="true",S.focusable="false")),fl({icons:{main:Vo(me),mask:l?Vo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ye,transform:k(k({},Et),r),symbol:o,title:h,maskId:u,titleId:y,extra:{attributes:S,styles:$,classes:R}})})}},DE={mixout:function(){return{icon:OE(RE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gu,n.nodeCallback=NE,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?fe:i,s=n.callback,o=s===void 0?function(){}:s;return gu(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,y){Promise.all([qo(r,a),u.iconName?qo(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var R=tl(I,2),b=R[0],S=R[1];m([n,fl({icons:{main:b,mask:S},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Cs(a);l.length>0&&(r.style=l);var c;return al(o)&&(c=Ft("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},PE={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return xs({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(nr(s)).join(" ")},children:o}]})}}}},ME={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return xs({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:i}),pE({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(nr(a))}})})}}}},LE={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Et:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return xs({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:i}),uu({content:n,transform:k(k({},Et),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(O.cssPrefix,"-layers-text")].concat(nr(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(kh){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return O.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,uu({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},FE=new RegExp('"',"ug"),_u=[1105920,1112319];function $E(t){var e=t.replace(FE,""),n=Xw(e,0),i=n>=_u[0]&&n<=_u[1],r=e.length===2?e[0]===e[1]:!1;return{value:jo(r?e[0]:e),isSecondary:i||r}}function vu(t,e){var n="".concat(xw).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=pi(t.children),o=s.filter(function(me){return me.getAttribute(Ho)===e})[0],a=nn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Ow),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?_e:ce,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Yi[h][l[2].toLowerCase()]:Rw[h][c],y=$E(f),I=y.value,R=y.isSecondary,b=l[0].startsWith("FontAwesome"),S=cl(m,I),D=S;if(b){var $=rE(I);$.iconName&&$.prefix&&(S=$.iconName,m=$.prefix)}if(S&&!R&&(!o||o.getAttribute(il)!==m||o.getAttribute(rl)!==D)){t.setAttribute(n,D),o&&t.removeChild(o);var W=AE(),ye=W.extra;ye.attributes[Ho]=e,qo(S,m).then(function(me){var j=fl(k(k({},W),{},{icons:{main:me,mask:ul()},prefix:m,iconName:D,extra:ye,watchable:!0})),J=fe.createElement("svg");e==="::before"?t.insertBefore(J,t.firstChild):t.appendChild(J),J.outerHTML=j.map(function(ne){return rr(ne)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function BE(t){return Promise.all([vu(t,"::before"),vu(t,"::after")])}function HE(t){return t.parentNode!==document.head&&!~Aw.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ho)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yu(t){if(!!Ht)return new Promise(function(e,n){var i=pi(t.querySelectorAll("*")).filter(HE).map(BE),r=dl.begin("searchPseudoElements");Qh(),Promise.all(i).then(function(){r(),Ko(),e()}).catch(function(){r(),Ko(),n()})})}var jE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yu,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?fe:i;O.searchPseudoElements&&yu(r)}}},bu=!1,UE={mixout:function(){return{dom:{unwatch:function(){Qh(),bu=!0}}}},hooks:function(){return{bootstrap:function(){pu(Wo("mutationObserverCallbacks",{}))},noAuto:function(){IE()},watch:function(n){var i=n.observeMutationsRoot;bu?Ko():pu(Wo("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},wu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},WE={mixout:function(){return{parse:{transform:function(n){return wu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=wu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:k(k({},i.icon.attributes),m.path)}]}]}}}},no={x:0,y:0,width:"100%",height:"100%"};function Eu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zE(t){return t.tag==="g"?t.children:[t]}var VE={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Ts(r.split(" ").map(function(o){return o.trim()})):ul();return s.prefix||(s.prefix=rn()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,m=Ww({transform:l,containerWidth:f,iconWidth:c}),y={tag:"rect",attributes:k(k({},no),{},{fill:"white"})},I=u.children?{children:u.children.map(Eu)}:{},R={tag:"g",attributes:k({},m.inner),children:[Eu(k({tag:u.tag,attributes:k(k({},u.attributes),m.path)},I))]},b={tag:"g",attributes:k({},m.outer),children:[R]},S="mask-".concat(a||Qi()),D="clip-".concat(a||Qi()),$={tag:"mask",attributes:k(k({},no),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:zE(h)},$]};return i.push(W,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(S,")")},no)}),{children:i,attributes:r}}}},qE={provides:function(e){var n=!1;nn.matchMedia&&(n=nn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},YE={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},KE=[qw,DE,PE,ME,LE,jE,UE,WE,VE,qE,YE];aE(KE,{mixoutsTo:Qe});Qe.noAuto;var Jh=Qe.config,GE=Qe.library;Qe.dom;var Xr=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var QE=Qe.icon;Qe.layer;var XE=Qe.text;Qe.counter;function Cu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cu(Object(n),!0).forEach(function(i){je(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cu(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Jr(t){return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jr(t)}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ZE(t,e){if(t==null)return{};var n=JE(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function Go(t){return eC(t)||tC(t)||nC(t)||iC()}function eC(t){if(Array.isArray(t))return Qo(t)}function tC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nC(t,e){if(!!t){if(typeof t=="string")return Qo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qo(t,e)}}function Qo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function iC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zh={exports:{}};(function(t){(function(e){var n=function(b,S,D){if(!c(S)||f(S)||h(S)||m(S)||l(S))return S;var $,W=0,ye=0;if(u(S))for($=[],ye=S.length;W<ye;W++)$.push(n(b,S[W],D));else{$={};for(var me in S)Object.prototype.hasOwnProperty.call(S,me)&&($[b(me,D)]=n(b,S[me],D))}return $},i=function(b,S){S=S||{};var D=S.separator||"_",$=S.split||/(?=[A-Z])/;return b.split($).join(D)},r=function(b){return y(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(S,D){return D?D.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var S=r(b);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(b,S){return i(b,S).toLowerCase()},a=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return a.call(b)=="[object Array]"},f=function(b){return a.call(b)=="[object Date]"},h=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},y=function(b){return b=b-0,b===b},I=function(b,S){var D=S&&"process"in S?S.process:S;return typeof D!="function"?b:function($,W){return D($,b,W)}},R={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(b,S){return n(I(r,S),b)},decamelizeKeys:function(b,S){return n(I(o,S),b,S)},pascalizeKeys:function(b,S){return n(I(s,S),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=R:e.humps=R})(rC)})(Zh);var sC=Zh.exports,oC=["class","style"];function aC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=sC.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function lC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function pl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return pl(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=lC(u);break;case"style":l.style=aC(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=ZE(n,oC);return Mf(t.tag,lt(lt(lt({},e),{},{class:r.class,style:lt(lt({},r.style),o)},r.attrs),a),i)}var ep=!1;try{ep=!0}catch{}function cC(){if(!ep&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Oi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?je({},t,e):{}}function uC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},je(e,"fa-".concat(t.size),t.size!==null),je(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),je(e,"fa-pull-".concat(t.pull),t.pull!==null),je(e,"fa-swap-opacity",t.swapOpacity),je(e,"fa-bounce",t.bounce),je(e,"fa-shake",t.shake),je(e,"fa-beat",t.beat),je(e,"fa-fade",t.fade),je(e,"fa-beat-fade",t.beatFade),je(e,"fa-flash",t.flash),je(e,"fa-spin-pulse",t.spinPulse),je(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Iu(t){if(t&&Jr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xr.icon)return Xr.icon(t);if(t===null)return null;if(Jr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var fC=He({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Je(function(){return Iu(e.icon)}),s=Je(function(){return Oi("classes",uC(e))}),o=Je(function(){return Oi("transform",typeof e.transform=="string"?Xr.transform(e.transform):e.transform)}),a=Je(function(){return Oi("mask",Iu(e.mask))}),l=Je(function(){return QE(r.value,lt(lt(lt(lt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Tr(l,function(u){if(!u)return cC("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Je(function(){return l.value?pl(l.value.abstract[0],{},i):null});return function(){return c.value}}});He({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=Jh.familyPrefix,s=Je(function(){return["".concat(r,"-layers")].concat(Go(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Mf("div",{class:s.value},i.default?i.default():[])}}});He({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=Jh.familyPrefix,s=Je(function(){return Oi("classes",[].concat(Go(e.counter?["".concat(r,"-layers-counter")]:[]),Go(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=Je(function(){return Oi("transform",typeof e.transform=="string"?Xr.transform(e.transform):e.transform)}),a=Je(function(){var c=XE(e.value.toString(),lt(lt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Je(function(){return pl(a.value,{},i)});return function(){return l.value}}});var dC={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},hC={prefix:"fas",iconName:"up-right-from-square",icon:[448,512,["external-link-alt"],"f35d","M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},pC={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z"]},mC={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},gC={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},_C={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},vC={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},yC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var bC="firebase",wC="9.11.0";/**
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
 */Ct(bC,wC,"app");const tp="@firebase/installations",ml="0.5.13";/**
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
 */const np=1e4,ip=`w:${ml}`,rp="FIS_v2",EC="https://firebaseinstallations.googleapis.com/v1",CC=60*60*1e3,IC="installations",TC="Installations";/**
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
 */const xC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dn=new ms(IC,TC,xC);function sp(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
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
 */function op({projectId:t}){return`${EC}/projects/${t}/installations`}function ap(t){return{token:t.token,requestStatus:2,expiresIn:AC(t.expiresIn),creationTime:Date.now()}}async function lp(t,e){const i=(await e.json()).error;return Dn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function cp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function SC(t,{refreshToken:e}){const n=cp(t);return n.append("Authorization",kC(e)),n}async function up(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AC(t){return Number(t.replace("s","000"))}function kC(t){return`${rp} ${t}`}/**
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
 */async function NC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=op(t),r=cp(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:rp,appId:t.appId,sdkVersion:ip},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await up(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ap(c.authToken)}}else throw await lp("Create Installation",l)}/**
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
 */function fp(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function OC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const RC=/^[cdef][\w-]{21}$/,Xo="";function DC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PC(t);return RC.test(n)?n:Xo}catch{return Xo}}function PC(t){return OC(t).substr(0,22)}/**
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
 */function Ss(t){return`${t.appName}!${t.appId}`}/**
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
 */const dp=new Map;function hp(t,e){const n=Ss(t);pp(n,e),MC(n,e)}function pp(t,e){const n=dp.get(t);if(!!n)for(const i of n)i(e)}function MC(t,e){const n=LC();n&&n.postMessage({key:t,fid:e}),FC()}let wn=null;function LC(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=t=>{pp(t.data.key,t.data.fid)}),wn}function FC(){dp.size===0&&wn&&(wn.close(),wn=null)}/**
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
 */const $C="firebase-installations-database",BC=1,Pn="firebase-installations-store";let io=null;function gl(){return io||(io=id($C,BC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}})),io}async function Zr(t,e){const n=Ss(t),r=(await gl()).transaction(Pn,"readwrite"),s=r.objectStore(Pn),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&hp(t,e.fid),e}async function mp(t){const e=Ss(t),i=(await gl()).transaction(Pn,"readwrite");await i.objectStore(Pn).delete(e),await i.done}async function As(t,e){const n=Ss(t),r=(await gl()).transaction(Pn,"readwrite"),s=r.objectStore(Pn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&hp(t,a.fid),a}/**
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
 */async function _l(t){let e;const n=await As(t.appConfig,i=>{const r=HC(i),s=jC(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Xo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HC(t){const e=t||{fid:DC(),registrationStatus:0};return gp(e)}function jC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=UC(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WC(t)}:{installationEntry:e}}async function UC(t,e){try{const n=await NC(t,e);return Zr(t.appConfig,n)}catch(n){throw sp(n)&&n.customData.serverCode===409?await mp(t.appConfig):await Zr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WC(t){let e=await Tu(t.appConfig);for(;e.registrationStatus===1;)await fp(100),e=await Tu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await _l(t);return i||n}return e}function Tu(t){return As(t,e=>{if(!e)throw Dn.create("installation-not-found");return gp(e)})}function gp(t){return zC(t)?{fid:t.fid,registrationStatus:0}:t}function zC(t){return t.registrationStatus===1&&t.registrationTime+np<Date.now()}/**
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
 */async function VC({appConfig:t,heartbeatServiceProvider:e},n){const i=qC(t,n),r=SC(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:ip,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await up(()=>fetch(i,a));if(l.ok){const c=await l.json();return ap(c)}else throw await lp("Generate Auth Token",l)}function qC(t,{fid:e}){return`${op(t)}/${e}/authTokens:generate`}/**
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
 */async function vl(t,e=!1){let n;const i=await As(t.appConfig,s=>{if(!_p(s))throw Dn.create("not-registered");const o=s.authToken;if(!e&&GC(o))return s;if(o.requestStatus===1)return n=YC(t,e),s;{if(!navigator.onLine)throw Dn.create("app-offline");const a=XC(s);return n=KC(t,a),a}});return n?await n:i.authToken}async function YC(t,e){let n=await xu(t.appConfig);for(;n.authToken.requestStatus===1;)await fp(100),n=await xu(t.appConfig);const i=n.authToken;return i.requestStatus===0?vl(t,e):i}function xu(t){return As(t,e=>{if(!_p(e))throw Dn.create("not-registered");const n=e.authToken;return JC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KC(t,e){try{const n=await VC(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Zr(t.appConfig,i),n}catch(n){if(sp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mp(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zr(t.appConfig,i)}throw n}}function _p(t){return t!==void 0&&t.registrationStatus===2}function GC(t){return t.requestStatus===2&&!QC(t)}function QC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CC}function XC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function JC(t){return t.requestStatus===1&&t.requestTime+np<Date.now()}/**
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
 */async function ZC(t){const e=t,{installationEntry:n,registrationPromise:i}=await _l(e);return i?i.catch(console.error):vl(e).catch(console.error),n.fid}/**
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
 */async function eI(t,e=!1){const n=t;return await tI(n),(await vl(n,e)).token}async function tI(t){const{registrationPromise:e}=await _l(t);e&&await e}/**
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
 */function nI(t){if(!t||!t.options)throw ro("App Configuration");if(!t.name)throw ro("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ro(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ro(t){return Dn.create("missing-app-config-values",{valueName:t})}/**
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
 */const vp="installations",iI="installations-internal",rI=t=>{const e=t.getProvider("app").getImmediate(),n=nI(e),i=Xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},sI=t=>{const e=t.getProvider("app").getImmediate(),n=Xi(e,vp).getImmediate();return{getId:()=>ZC(n),getToken:r=>eI(n,r)}};function oI(){en(new Rt(vp,rI,"PUBLIC")),en(new Rt(iI,sI,"PRIVATE"))}oI();Ct(tp,ml);Ct(tp,ml,"esm2017");/**
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
 */const es="analytics",aI="firebase_id",lI="origin",cI=60*1e3,uI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ke=new ka("@firebase/analytics");/**
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
 */function bp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function fI(t,e){const n=document.createElement("script");n.src=`${yp}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function dI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hI(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await bp(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Ke.error(a)}t("config",r,s)}async function pI(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await bp(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Ke.error(s)}}function mI(t,e,n,i){async function r(s,o,a){try{s==="event"?await pI(t,e,n,o,a):s==="config"?await hI(t,e,n,i,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Ke.error(l)}}return r}function gI(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=mI(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function _I(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(yp))return e;return null}/**
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
 */const vI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},it=new ms("analytics","Analytics",vI);/**
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
 */const yI=30,bI=1e3;class wI{constructor(e={},n=bI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wp=new wI;function EI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function CI(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:EI(i)},s=uI.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function II(t,e=wp,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw it.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw it.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new SI;return setTimeout(async()=>{a.abort()},n!==void 0?n:cI),Ep({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Ep(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=wp){var s,o;const{appId:a,measurementId:l}=t;try{await TI(i,e)}catch(c){if(l)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=c)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw c}try{const c=await CI(t);return r.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!xI(u)){if(r.deleteThrottleMetadata(a),l)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?cc(n,r.intervalMillis,yI):cc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,h),Ke.debug(`Calling attemptFetch again in ${f} millis`),Ep(t,h,i,r)}}function TI(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(it.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xI(t){if(!(t instanceof Ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class SI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function AI(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
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
 */async function kI(){var t;if(Xf())try{await Jf()}catch(e){return Ke.warn(it.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ke.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function NI(t,e,n,i,r,s,o){var a;const l=II(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ke.error(m)),e.push(l);const c=kI().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([l,c]);_I()||fI(s,u.measurementId),r("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[lI]="firebase",h.update=!0,f!=null&&(h[aI]=f),r("config",u.measurementId,h),u.measurementId}/**
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
 */class OI{constructor(e){this.app=e}_delete(){return delete Ri[this.app.options.appId],Promise.resolve()}}let Ri={},Su=[];const Au={};let so="dataLayer",RI="gtag",ku,Cp,Nu=!1;function DI(){const t=[];if(Vv()&&t.push("This is a browser extension environment."),Yv()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=it.create("invalid-analytics-context",{errorInfo:e});Ke.warn(n.message)}}function PI(t,e,n){DI();const i=t.options.appId;if(!i)throw it.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(Ri[i]!=null)throw it.create("already-exists",{id:i});if(!Nu){dI(so);const{wrappedGtag:s,gtagCore:o}=gI(Ri,Su,Au,so,RI);Cp=s,ku=o,Nu=!0}return Ri[i]=NI(t,Su,Au,e,ku,so,n),new OI(t)}function MI(t=sd()){t=Fn(t);const e=Xi(t,es);return e.isInitialized()?e.getImmediate():LI(t)}function LI(t,e={}){const n=Xi(t,es);if(n.isInitialized()){const r=n.getImmediate();if($r(e,n.getOptions()))return r;throw it.create("already-initialized")}return n.initialize({options:e})}function FI(t,e,n,i){t=Fn(t),AI(Cp,Ri[t.app.options.appId],e,n,i).catch(r=>Ke.error(r))}const Ou="@firebase/analytics",Ru="0.8.1";function $I(){en(new Rt(es,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return PI(i,r,n)},"PUBLIC")),en(new Rt("analytics-internal",t,"PRIVATE")),Ct(Ou,Ru),Ct(Ou,Ru,"esm2017");function t(e){try{const n=e.getProvider(es).getImmediate();return{logEvent:(i,r,s)=>FI(n,i,r,s)}}catch(n){throw it.create("interop-component-reg-failed",{reason:n})}}}$I();const BI={apiKey:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",authDomain:"truongdd03.firebaseapp.com",projectId:"truongdd03",storageBucket:"truongdd03.appspot.com",messagingSenderId:{VITE_FIREBASE_API_KEY:"AIzaSyCqBQ5mxd0mVoyt_IRDWe5x-4x9--XBdDQ",VITE_AUTH_DOMAIN:"truongdd03.firebaseapp.com",VITE_PROJECT_ID:"truongdd03",VITE_STORAGE_BUCKET:"truongdd03.appspot.com",VITE_MESSAGE_SENDER_ID:"156878048180",VITE_APP_ID:"1:156878048180:web:cfffba9df67d9f5f4a00e1",VITE_MEASUREMENT_ID:"G-YZYZPEBDGH",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_MESSAGING_SENDER_ID,appId:"1:156878048180:web:cfffba9df67d9f5f4a00e1",measurementId:"G-YZYZPEBDGH"},Ip=rd(BI);MI(Ip);Ch(Ip);const HI=[yC,vC,_C,mC,dC,gC,hC,pC];HI.forEach(t=>GE.add(t));const ks=Jg(sw),jI=[A_,lw];jI.forEach(t=>ks.use(t));ks.component("Timeline",Ih);ks.component("font-awesome-icon",fC);ks.mount("#app");
