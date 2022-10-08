(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function li(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const nl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=li(nl);function po(e){return!!e||e===""}function rn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=se(r)?ol(r):rn(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(se(e))return e;if(ee(e))return e}}const il=/;(?![^(]*\))/g,al=/:(.+)/;function ol(e){const t={};return e.split(il).forEach(n=>{if(n){const r=n.split(al);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Dt(e){let t="";if(se(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Dt(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ta=e=>se(e)?e:e==null?"":F(e)||ee(e)&&(e.toString===bo||!z(e.toString))?JSON.stringify(e,ho,2):String(e),ho=(e,t)=>t&&t.__v_isRef?ho(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!F(t)&&!yo(t)?String(t):t,J={},Mt=[],$e=()=>{},sl=()=>!1,ll=/^on[^a-z]/,rr=e=>ll.test(e),fi=e=>e.startsWith("onUpdate:"),ue=Object.assign,ci=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fl=Object.prototype.hasOwnProperty,U=(e,t)=>fl.call(e,t),F=Array.isArray,Lt=e=>ir(e)==="[object Map]",go=e=>ir(e)==="[object Set]",z=e=>typeof e=="function",se=e=>typeof e=="string",ui=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",vo=e=>ee(e)&&z(e.then)&&z(e.catch),bo=Object.prototype.toString,ir=e=>bo.call(e),cl=e=>ir(e).slice(8,-1),yo=e=>ir(e)==="[object Object]",di=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=li(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ul=/-(\w)/g,Ye=ar(e=>e.replace(ul,(t,n)=>n?n.toUpperCase():"")),dl=/\B([A-Z])/g,Ht=ar(e=>e.replace(dl,"-$1").toLowerCase()),or=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=ar(e=>e?`on${or(e)}`:""),an=(e,t)=>!Object.is(e,t),Ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let na;const ml=()=>na||(na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Be;class pl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function hl(e,t=Be){t&&t.active&&t.effects.push(e)}const mi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},_o=e=>(e.w&lt)>0,wo=e=>(e.n&lt)>0,gl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},vl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];_o(i)&&!wo(i)?i.delete(e):t[n++]=i,i.w&=~lt,i.n&=~lt}t.length=n}},Rr=new WeakMap;let Gt=0,lt=1;const Dr=30;let Pe;const At=Symbol(""),jr=Symbol("");class pi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hl(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,ot=!0,lt=1<<++Gt,Gt<=Dr?gl(this):ra(this),this.fn()}finally{Gt<=Dr&&vl(this),lt=1<<--Gt,Pe=this.parent,ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(ra(this),this.onStop&&this.onStop(),this.active=!1)}}function ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ot=!0;const ko=[];function Ut(){ko.push(ot),ot=!1}function Wt(){const e=ko.pop();ot=e===void 0?!0:e}function Ae(e,t,n){if(ot&&Pe){let r=Rr.get(e);r||Rr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=mi()),Ao(i)}}function Ao(e,t){let n=!1;Gt<=Dr?wo(e)||(e.n|=lt,n=!_o(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function Xe(e,t,n,r,i,a){const o=Rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?di(n)&&s.push(o.get("length")):(s.push(o.get(At)),Lt(e)&&s.push(o.get(jr)));break;case"delete":F(e)||(s.push(o.get(At)),Lt(e)&&s.push(o.get(jr)));break;case"set":Lt(e)&&s.push(o.get(At));break}if(s.length===1)s[0]&&zr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);zr(mi(l))}}function zr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ia(r);for(const r of n)r.computed||ia(r)}function ia(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bl=li("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ui)),yl=hi(),xl=hi(!1,!0),_l=hi(!0),aa=wl();function wl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let a=0,o=this.length;a<o;a++)Ae(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=W(this)[t].apply(this,n);return Wt(),r}}),e}function hi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Dl:Io:t?So:Oo).get(r))return r;const o=F(r);if(!e&&o&&U(aa,i))return Reflect.get(aa,i,a);const s=Reflect.get(r,i,a);return(ui(i)?Co.has(i):bl(i))||(e||Ae(r,"get",i),t)?s:ge(s)?o&&di(i)?s:s.value:ee(s)?e?Po(s):bi(s):s}}const kl=Eo(),Al=Eo(!0);function Eo(e=!1){return function(n,r,i,a){let o=n[r];if(jt(o)&&ge(o)&&!ge(i))return!1;if(!e&&(!Yn(i)&&!jt(i)&&(o=W(o),i=W(i)),!F(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const s=F(n)&&di(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,i,a);return n===W(a)&&(s?an(i,o)&&Xe(n,"set",r,i):Xe(n,"add",r,i)),l}}function Cl(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function El(e,t){const n=Reflect.has(e,t);return(!ui(t)||!Co.has(t))&&Ae(e,"has",t),n}function Tl(e){return Ae(e,"iterate",F(e)?"length":At),Reflect.ownKeys(e)}const To={get:yl,set:kl,deleteProperty:Cl,has:El,ownKeys:Tl},Ol={get:_l,set(e,t){return!0},deleteProperty(e,t){return!0}},Sl=ue({},To,{get:xl,set:Al}),gi=e=>e,sr=e=>Reflect.getPrototypeOf(e);function An(e,t,n=!1,r=!1){e=e.__v_raw;const i=W(e),a=W(t);n||(t!==a&&Ae(i,"get",t),Ae(i,"get",a));const{has:o}=sr(i),s=r?gi:n?xi:on;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function Cn(e,t=!1){const n=this.__v_raw,r=W(n),i=W(e);return t||(e!==i&&Ae(r,"has",e),Ae(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function En(e,t=!1){return e=e.__v_raw,!t&&Ae(W(e),"iterate",At),Reflect.get(e,"size",e)}function oa(e){e=W(e);const t=W(this);return sr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function sa(e,t){t=W(t);const n=W(this),{has:r,get:i}=sr(n);let a=r.call(n,e);a||(e=W(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?an(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function la(e){const t=W(this),{has:n,get:r}=sr(t);let i=n.call(t,e);i||(e=W(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Xe(t,"delete",e,void 0),a}function fa(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Tn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=W(o),l=t?gi:e?xi:on;return!e&&Ae(s,"iterate",At),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function On(e,t,n){return function(...r){const i=this.__v_raw,a=W(i),o=Lt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?gi:t?xi:on;return!t&&Ae(a,"iterate",l?jr:At),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:this}}function Il(){const e={get(a){return An(this,a)},get size(){return En(this)},has:Cn,add:oa,set:sa,delete:la,clear:fa,forEach:Tn(!1,!1)},t={get(a){return An(this,a,!1,!0)},get size(){return En(this)},has:Cn,add:oa,set:sa,delete:la,clear:fa,forEach:Tn(!1,!0)},n={get(a){return An(this,a,!0)},get size(){return En(this,!0)},has(a){return Cn.call(this,a,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Tn(!0,!1)},r={get(a){return An(this,a,!0,!0)},get size(){return En(this,!0)},has(a){return Cn.call(this,a,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=On(a,!1,!1),n[a]=On(a,!0,!1),t[a]=On(a,!1,!0),r[a]=On(a,!0,!0)}),[e,n,t,r]}const[Pl,Nl,Ml,Ll]=Il();function vi(e,t){const n=t?e?Ll:Ml:e?Nl:Pl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const Fl={get:vi(!1,!1)},$l={get:vi(!1,!0)},Rl={get:vi(!0,!1)},Oo=new WeakMap,So=new WeakMap,Io=new WeakMap,Dl=new WeakMap;function jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zl(e){return e.__v_skip||!Object.isExtensible(e)?0:jl(cl(e))}function bi(e){return jt(e)?e:yi(e,!1,To,Fl,Oo)}function Bl(e){return yi(e,!1,Sl,$l,So)}function Po(e){return yi(e,!0,Ol,Rl,Io)}function yi(e,t,n,r,i){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ft(e){return jt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Yn(e){return!!(e&&e.__v_isShallow)}function No(e){return Ft(e)||jt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Mo(e){return Wn(e,"__v_skip",!0),e}const on=e=>ee(e)?bi(e):e,xi=e=>ee(e)?Po(e):e;function Lo(e){ot&&Pe&&(e=W(e),Ao(e.dep||(e.dep=mi())))}function Fo(e,t){e=W(e),e.dep&&zr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Hl(e){return Ul(e,!1)}function Ul(e,t){return ge(e)?e:new Wl(e,t)}class Wl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:on(t)}get value(){return Lo(this),this._value}set value(t){const n=this.__v_isShallow||Yn(t)||jt(t);t=n?t:W(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),Fo(this))}}function Kn(e){return ge(e)?e.value:e}const Yl={get:(e,t,n)=>Kn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $o(e){return Ft(e)?e:new Proxy(e,Yl)}var Ro;class Kl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ro]=!1,this._dirty=!0,this.effect=new pi(t,()=>{this._dirty||(this._dirty=!0,Fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=W(this);return Lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ro="__v_isReadonly";function Vl(e,t,n=!1){let r,i;const a=z(e);return a?(r=e,i=$e):(r=e.get,i=e.set),new Kl(r,i,a||!i,n)}function st(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){lr(a,t,n)}return i}function Oe(e,t,n,r){if(z(e)){const a=st(e,t,n,r);return a&&vo(a)&&a.catch(o=>{lr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Oe(e[a],t,n,r));return i}function lr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){st(l,null,10,[e,o,s]);return}}ql(e,n,i,r)}function ql(e,t,n,r=!0){console.error(e)}let sn=!1,Br=!1;const pe=[];let Ue=0;const $t=[];let qe=null,yt=0;const Do=Promise.resolve();let _i=null;function Xl(e){const t=_i||Do;return e?t.then(this?e.bind(this):e):t}function Gl(e){let t=Ue+1,n=pe.length;for(;t<n;){const r=t+n>>>1;ln(pe[r])<e?t=r+1:n=r}return t}function wi(e){(!pe.length||!pe.includes(e,sn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?pe.push(e):pe.splice(Gl(e.id),0,e),jo())}function jo(){!sn&&!Br&&(Br=!0,_i=Do.then(Bo))}function Jl(e){const t=pe.indexOf(e);t>Ue&&pe.splice(t,1)}function Zl(e){F(e)?$t.push(...e):(!qe||!qe.includes(e,e.allowRecurse?yt+1:yt))&&$t.push(e),jo()}function ca(e,t=sn?Ue+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function zo(e){if($t.length){const t=[...new Set($t)];if($t.length=0,qe){qe.push(...t);return}for(qe=t,qe.sort((n,r)=>ln(n)-ln(r)),yt=0;yt<qe.length;yt++)qe[yt]();qe=null,yt=0}}const ln=e=>e.id==null?1/0:e.id,Ql=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Br=!1,sn=!0,pe.sort(Ql);const t=$e;try{for(Ue=0;Ue<pe.length;Ue++){const n=pe[Ue];n&&n.active!==!1&&st(n,null,14)}}finally{Ue=0,pe.length=0,zo(),sn=!1,_i=null,(pe.length||$t.length)&&Bo()}}function ef(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||J;p&&(i=n.map(x=>x.trim())),m&&(i=n.map(xo))}let s,l=r[s=kr(t)]||r[s=kr(Ye(t))];!l&&a&&(l=r[s=kr(Ht(t))]),l&&Oe(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(f,e,6,i)}}function Ho(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!z(e)){const l=f=>{const u=Ho(f,t,!0);u&&(s=!0,ue(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ee(e)&&r.set(e,null),null):(F(a)?a.forEach(l=>o[l]=null):ue(o,a),ee(e)&&r.set(e,o),o)}function fr(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Ht(t))||U(e,t))}let ye=null,cr=null;function Vn(e){const t=ye;return ye=e,cr=e&&e.type.__scopeId||null,t}function tf(e){cr=e}function nf(){cr=null}function ur(e,t=ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&_a(-1);const a=Vn(t),o=e(...i);return Vn(a),r._d&&_a(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Cr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:x,ctx:I,inheritAttrs:T}=e;let D,y;const C=Vn(e);try{if(n.shapeFlag&4){const $=i||r;D=He(u.call($,$,m,a,x,p,I)),y=l}else{const $=t;D=He($.length>1?$(a,{attrs:l,slots:s,emit:f}):$(a,null)),y=t.props?l:rf(l)}}catch($){Qt.length=0,lr($,e,1),D=q(Se)}let L=D;if(y&&T!==!1){const $=Object.keys(y),{shapeFlag:B}=L;$.length&&B&7&&(o&&$.some(fi)&&(y=af(y,o)),L=ft(L,y))}return n.dirs&&(L=ft(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,Vn(C),D}const rf=e=>{let t;for(const n in e)(n==="class"||n==="style"||rr(n))&&((t||(t={}))[n]=e[n]);return t},af=(e,t)=>{const n={};for(const r in e)(!fi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function of(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ua(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!fr(f,p))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ua(r,o,f):!0:!!o;return!1}function ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!fr(n,a))return!0}return!1}function sf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const lf=e=>e.__isSuspense;function ff(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}function cf(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Er(e,t,n=!1){const r=ce||ye;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const da={};function zn(e,t,n){return Uo(e,t,n)}function Uo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=J){const s=ce;let l,f=!1,u=!1;if(ge(e)?(l=()=>e.value,f=Yn(e)):Ft(e)?(l=()=>e,r=!0):F(e)?(u=!0,f=e.some(y=>Ft(y)||Yn(y)),l=()=>e.map(y=>{if(ge(y))return y.value;if(Ft(y))return It(y);if(z(y))return st(y,s,2)})):z(e)?t?l=()=>st(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[p])}:l=$e,t&&r){const y=l;l=()=>It(y())}let m,p=y=>{m=D.onStop=()=>{st(y,s,4)}};if(dn)return p=$e,t?n&&Oe(t,s,3,[l(),u?[]:void 0,p]):l(),$e;let x=u?[]:da;const I=()=>{if(!!D.active)if(t){const y=D.run();(r||f||(u?y.some((C,L)=>an(C,x[L])):an(y,x)))&&(m&&m(),Oe(t,s,3,[y,x===da?void 0:x,p]),x=y)}else D.run()};I.allowRecurse=!!t;let T;i==="sync"?T=I:i==="post"?T=()=>_e(I,s&&s.suspense):(I.pre=!0,s&&(I.id=s.uid),T=()=>wi(I));const D=new pi(l,T);return t?n?I():x=D.run():i==="post"?_e(D.run.bind(D),s&&s.suspense):D.run(),()=>{D.stop(),s&&s.scope&&ci(s.scope.effects,D)}}function uf(e,t,n){const r=this.proxy,i=se(e)?e.includes(".")?Wo(r,e):()=>r[e]:e.bind(r,r);let a;z(t)?a=t:(a=t.handler,n=t);const o=ce;zt(this);const s=Uo(i,a.bind(r),n);return o?zt(o):Ct(),s}function Wo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function It(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))It(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)It(e[n],t);else if(go(e)||Lt(e))e.forEach(n=>{It(n,t)});else if(yo(e))for(const n in e)It(e[n],t);return e}function Yo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pr(()=>{e.isMounted=!0}),Xo(()=>{e.isUnmounting=!0}),e}const Ee=[Function,Array],df={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee},setup(e,{slots:t}){const n=us(),r=Yo();let i;return()=>{const a=t.default&&ki(t.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const T of a)if(T.type!==Se){o=T;break}}const s=W(e),{mode:l}=s;if(r.isLeaving)return Tr(o);const f=ma(o);if(!f)return Tr(o);const u=fn(f,s,r,n);cn(f,u);const m=n.subTree,p=m&&ma(m);let x=!1;const{getTransitionKey:I}=f.type;if(I){const T=I();i===void 0?i=T:T!==i&&(i=T,x=!0)}if(p&&p.type!==Se&&(!xt(f,p)||x)){const T=fn(p,s,r,n);if(cn(p,T),l==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update()},Tr(o);l==="in-out"&&f.type!==Se&&(T.delayLeave=(D,y,C)=>{const L=Ko(r,p);L[String(p.key)]=p,D._leaveCb=()=>{y(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},mf=df;function Ko(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fn(e,t,n,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:x,onLeaveCancelled:I,onBeforeAppear:T,onAppear:D,onAfterAppear:y,onAppearCancelled:C}=t,L=String(e.key),$=Ko(n,e),B=(j,Y)=>{j&&Oe(j,r,9,Y)},oe=(j,Y)=>{const V=Y[1];B(j,Y),F(j)?j.every(me=>me.length<=1)&&V():j.length<=1&&V()},ne={mode:a,persisted:o,beforeEnter(j){let Y=s;if(!n.isMounted)if(i)Y=T||s;else return;j._leaveCb&&j._leaveCb(!0);const V=$[L];V&&xt(e,V)&&V.el._leaveCb&&V.el._leaveCb(),B(Y,[j])},enter(j){let Y=l,V=f,me=u;if(!n.isMounted)if(i)Y=D||l,V=y||f,me=C||u;else return;let P=!1;const te=j._enterCb=we=>{P||(P=!0,we?B(me,[j]):B(V,[j]),ne.delayedLeave&&ne.delayedLeave(),j._enterCb=void 0)};Y?oe(Y,[j,te]):te()},leave(j,Y){const V=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return Y();B(m,[j]);let me=!1;const P=j._leaveCb=te=>{me||(me=!0,Y(),te?B(I,[j]):B(x,[j]),j._leaveCb=void 0,$[V]===e&&delete $[V])};$[V]=e,p?oe(p,[j,P]):P()},clone(j){return fn(j,t,n,r)}};return ne}function Tr(e){if(dr(e))return e=ft(e),e.children=null,e}function ma(e){return dr(e)?e.children?e.children[0]:void 0:e}function cn(e,t){e.shapeFlag&6&&e.component?cn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ki(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===be?(o.patchFlag&128&&i++,r=r.concat(ki(o.children,t,s))):(t||o.type!==Se)&&r.push(s!=null?ft(o,{key:s}):o)}if(i>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}function Re(e){return z(e)?{setup:e,name:e.name}:e}const Zt=e=>!!e.type.__asyncLoader,dr=e=>e.type.__isKeepAlive;function pf(e,t){Vo(e,"a",t)}function hf(e,t){Vo(e,"da",t)}function Vo(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(mr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)dr(i.parent.vnode)&&gf(r,t,n,i),i=i.parent}}function gf(e,t,n,r){const i=mr(t,e,r,!0);Go(()=>{ci(r[t],i)},n)}function mr(e,t,n=ce,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),zt(n);const s=Oe(t,n,e,o);return Ct(),Wt(),s});return r?i.unshift(a):i.push(a),a}}const Qe=e=>(t,n=ce)=>(!dn||e==="sp")&&mr(e,(...r)=>t(...r),n),vf=Qe("bm"),pr=Qe("m"),bf=Qe("bu"),qo=Qe("u"),Xo=Qe("bum"),Go=Qe("um"),yf=Qe("sp"),xf=Qe("rtg"),_f=Qe("rtc");function wf(e,t=ce){mr("ec",e,t)}function ht(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Ut(),Oe(l,n,8,[e.el,s,e,t]),Wt())}}const Ai="components";function Ci(e,t){return Zo(Ai,e,!0,t)||e}const Jo=Symbol();function kf(e){return se(e)?Zo(Ai,e,!1)||e:e||Jo}function Zo(e,t,n=!0,r=!1){const i=ye||ce;if(i){const a=i.type;if(e===Ai){const s=Qf(a,!1);if(s&&(s===t||s===Ye(t)||s===or(Ye(t))))return a}const o=pa(i[e]||a[e],t)||pa(i.appContext[e],t);return!o&&r?a:o}}function pa(e,t){return e&&(e[t]||e[Ye(t)]||e[or(Ye(t))])}function Af(e,t,n,r){let i;const a=n&&n[r];if(F(e)||se(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ee(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}function Ei(e,t,n={},r,i){if(ye.isCE||ye.parent&&Zt(ye.parent)&&ye.parent.isCE)return q("slot",t==="default"?null:{name:t},r&&r());let a=e[t];a&&a._c&&(a._d=!1),he();const o=a&&Qo(a(n)),s=bn(be,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Qo(e){return e.some(t=>Gn(t)?!(t.type===Se||t.type===be&&!Qo(t.children)):!0)?e:null}const Hr=e=>e?ds(e)?Pi(e)||e.proxy:Hr(e.parent):null,qn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>e.f||(e.f=()=>wi(e.update)),$nextTick:e=>e.n||(e.n=Xl.bind(e.proxy)),$watch:e=>uf.bind(e)}),Cf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==J&&U(r,t))return o[t]=1,r[t];if(i!==J&&U(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&U(f,t))return o[t]=3,a[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Ur&&(o[t]=0)}}const u=qn[t];let m,p;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==J&&U(i,t)?(i[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==J&&U(e,o)||t!==J&&U(t,o)||(s=a[0])&&U(s,o)||U(r,o)||U(qn,o)||U(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ur=!0;function Ef(e){const t=Ti(e),n=e.proxy,r=e.ctx;Ur=!1,t.beforeCreate&&ha(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:x,updated:I,activated:T,deactivated:D,beforeDestroy:y,beforeUnmount:C,destroyed:L,unmounted:$,render:B,renderTracked:oe,renderTriggered:ne,errorCaptured:j,serverPrefetch:Y,expose:V,inheritAttrs:me,components:P,directives:te,filters:we}=t;if(f&&Tf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const X=o[re];z(X)&&(r[re]=X.bind(n))}if(i){const re=i.call(n,n);ee(re)&&(e.data=bi(re))}if(Ur=!0,a)for(const re in a){const X=a[re],mt=z(X)?X.bind(n,n):z(X.get)?X.get.bind(n,n):$e,wn=!z(X)&&z(X.set)?X.set.bind(n):$e,pt=Te({get:mt,set:wn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>pt.value,set:De=>pt.value=De})}if(s)for(const re in s)es(s[re],r,n,re);if(l){const re=z(l)?l.call(n):l;Reflect.ownKeys(re).forEach(X=>{cf(X,re[X])})}u&&ha(u,e,"c");function fe(re,X){F(X)?X.forEach(mt=>re(mt.bind(n))):X&&re(X.bind(n))}if(fe(vf,m),fe(pr,p),fe(bf,x),fe(qo,I),fe(pf,T),fe(hf,D),fe(wf,j),fe(_f,oe),fe(xf,ne),fe(Xo,C),fe(Go,$),fe(yf,Y),F(V))if(V.length){const re=e.exposed||(e.exposed={});V.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:mt=>n[X]=mt})})}else e.exposed||(e.exposed={});B&&e.render===$e&&(e.render=B),me!=null&&(e.inheritAttrs=me),P&&(e.components=P),te&&(e.directives=te)}function Tf(e,t,n=$e,r=!1){F(e)&&(e=Wr(e));for(const i in e){const a=e[i];let o;ee(a)?"default"in a?o=Er(a.from||i,a.default,!0):o=Er(a.from||i):o=Er(a),ge(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function ha(e,t,n){Oe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function es(e,t,n,r){const i=r.includes(".")?Wo(n,r):()=>n[r];if(se(e)){const a=t[e];z(a)&&zn(i,a)}else if(z(e))zn(i,e.bind(n));else if(ee(e))if(F(e))e.forEach(a=>es(a,t,n,r));else{const a=z(e.handler)?e.handler.bind(n):t[e.handler];z(a)&&zn(i,a,e)}}function Ti(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Xn(l,f,o,!0)),Xn(l,t,o)),ee(t)&&a.set(t,l),l}function Xn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Xn(e,a,n,!0),i&&i.forEach(o=>Xn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Of[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Of={data:ga,props:bt,emits:bt,methods:bt,computed:bt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:bt,directives:bt,watch:If,provide:ga,inject:Sf};function ga(e,t){return t?e?function(){return ue(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Sf(e,t){return bt(Wr(e),Wr(t))}function Wr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?ue(ue(Object.create(null),e),t):t}function If(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Pf(e,t,n,r=!1){const i={},a={};Wn(a,hr,1),e.propsDefaults=Object.create(null),ts(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Bl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Nf(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=W(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(fr(e.emitsOptions,p))continue;const x=t[p];if(l)if(U(a,p))x!==a[p]&&(a[p]=x,f=!0);else{const I=Ye(p);i[I]=Yr(l,s,I,x,e,!1)}else x!==a[p]&&(a[p]=x,f=!0)}}}else{ts(e,t,i,a)&&(f=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=Ht(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Yr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!U(t,m)&&!0)&&(delete a[m],f=!0)}f&&Xe(e,"set","$attrs")}function ts(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(jn(l))continue;const f=t[l];let u;i&&U(i,u=Ye(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:fr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=W(n),f=s||J;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Yr(i,l,m,f[m],e,!U(f,m))}}return o}function Yr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(zt(i),r=f[n]=l.call(null,t),Ct())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function ns(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!z(e)){const u=m=>{l=!0;const[p,x]=ns(m,t,!0);ue(o,p),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return ee(e)&&r.set(e,Mt),Mt;if(F(a))for(let u=0;u<a.length;u++){const m=Ye(a[u]);va(m)&&(o[m]=J)}else if(a)for(const u in a){const m=Ye(u);if(va(m)){const p=a[u],x=o[m]=F(p)||z(p)?{type:p}:p;if(x){const I=xa(Boolean,x.type),T=xa(String,x.type);x[0]=I>-1,x[1]=T<0||I<T,(I>-1||U(x,"default"))&&s.push(m)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function va(e){return e[0]!=="$"}function ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ya(e,t){return ba(e)===ba(t)}function xa(e,t){return F(t)?t.findIndex(n=>ya(n,e)):z(t)&&ya(t,e)?0:-1}const rs=e=>e[0]==="_"||e==="$stable",Oi=e=>F(e)?e.map(He):[He(e)],Mf=(e,t,n)=>{if(t._n)return t;const r=ur((...i)=>Oi(t(...i)),n);return r._c=!1,r},is=(e,t,n)=>{const r=e._ctx;for(const i in e){if(rs(i))continue;const a=e[i];if(z(a))t[i]=Mf(i,a,r);else if(a!=null){const o=Oi(a);t[i]=()=>o}}},as=(e,t)=>{const n=Oi(t);e.slots.default=()=>n},Lf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Wn(t,"_",n)):is(t,e.slots={})}else e.slots={},t&&as(e,t);Wn(e.slots,hr,1)},Ff=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(ue(i,t),!n&&s===1&&delete i._):(a=!t.$stable,is(t,i)),o=t}else t&&(as(e,t),o={default:1});if(a)for(const s in i)!rs(s)&&!(s in o)&&delete i[s]};function os(){return{app:null,config:{isNativeTag:sl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function Rf(e,t){return function(r,i=null){z(r)||(r=Object.assign({},r)),i!=null&&!ee(i)&&(i=null);const a=os(),o=new Set;let s=!1;const l=a.app={_uid:$f++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:tc,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&z(f.install)?(o.add(f),f.install(l,...u)):z(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!s){const p=q(r,i);return p.appContext=a,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Pi(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l}};return l}}function Kr(e,t,n,r,i=!1){if(F(e)){e.forEach((p,x)=>Kr(p,t&&(F(t)?t[x]:t),n,r,i));return}if(Zt(r)&&!i)return;const a=r.shapeFlag&4?Pi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(se(f)?(u[f]=null,U(m,f)&&(m[f]=null)):ge(f)&&(f.value=null)),z(l))st(l,s,12,[o,u]);else{const p=se(l),x=ge(l);if(p||x){const I=()=>{if(e.f){const T=p?u[l]:l.value;i?F(T)&&ci(T,a):F(T)?T.includes(a)||T.push(a):p?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,_e(I,n)):I()}}}const _e=ff;function Df(e){return jf(e)}function jf(e,t){const n=ml();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:x=$e,insertStaticContent:I}=e,T=(c,d,h,v=null,g=null,w=null,A=!1,_=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!xt(c,d)&&(v=kn(c),De(c,g,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=d;switch(b){case Si:D(c,d,h,v);break;case Se:y(c,d,h,v);break;case Or:c==null&&C(d,h,v,A);break;case be:P(c,d,h,v,g,w,A,_,k);break;default:O&1?B(c,d,h,v,g,w,A,_,k):O&6?te(c,d,h,v,g,w,A,_,k):(O&64||O&128)&&b.process(c,d,h,v,g,w,A,_,k,Ot)}N!=null&&g&&Kr(N,c&&c.ref,w,d||c,!d)},D=(c,d,h,v)=>{if(c==null)r(d.el=s(d.children),h,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},y=(c,d,h,v)=>{c==null?r(d.el=l(d.children||""),h,v):d.el=c.el},C=(c,d,h,v)=>{[c.el,c.anchor]=I(c.children,d,h,v,c.el,c.anchor)},L=({el:c,anchor:d},h,v)=>{let g;for(;c&&c!==d;)g=p(c),r(c,h,v),c=g;r(d,h,v)},$=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),i(c),c=h;i(d)},B=(c,d,h,v,g,w,A,_,k)=>{A=A||d.type==="svg",c==null?oe(d,h,v,g,w,A,_,k):Y(c,d,g,w,A,_,k)},oe=(c,d,h,v,g,w,A,_)=>{let k,b;const{type:N,props:O,shapeFlag:M,transition:R,dirs:H}=c;if(k=c.el=o(c.type,w,O&&O.is,O),M&8?u(k,c.children):M&16&&j(c.children,k,null,v,g,w&&N!=="foreignObject",A,_),H&&ht(c,null,v,"created"),O){for(const K in O)K!=="value"&&!jn(K)&&a(k,K,null,O[K],w,c.children,v,g,Ke);"value"in O&&a(k,"value",null,O.value),(b=O.onVnodeBeforeMount)&&ze(b,v,c)}ne(k,c,c.scopeId,A,v),H&&ht(c,null,v,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&R&&!R.persisted;G&&R.beforeEnter(k),r(k,d,h),((b=O&&O.onVnodeMounted)||G||H)&&_e(()=>{b&&ze(b,v,c),G&&R.enter(k),H&&ht(c,null,v,"mounted")},g)},ne=(c,d,h,v,g)=>{if(h&&x(c,h),v)for(let w=0;w<v.length;w++)x(c,v[w]);if(g){let w=g.subTree;if(d===w){const A=g.vnode;ne(c,A,A.scopeId,A.slotScopeIds,g.parent)}}},j=(c,d,h,v,g,w,A,_,k=0)=>{for(let b=k;b<c.length;b++){const N=c[b]=_?at(c[b]):He(c[b]);T(null,N,d,h,v,g,w,A,_)}},Y=(c,d,h,v,g,w,A)=>{const _=d.el=c.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=d;k|=c.patchFlag&16;const O=c.props||J,M=d.props||J;let R;h&&gt(h,!1),(R=M.onVnodeBeforeUpdate)&&ze(R,h,d,c),N&&ht(d,c,h,"beforeUpdate"),h&&gt(h,!0);const H=g&&d.type!=="foreignObject";if(b?V(c.dynamicChildren,b,_,h,v,H,w):A||X(c,d,_,null,h,v,H,w,!1),k>0){if(k&16)me(_,d,O,M,h,v,g);else if(k&2&&O.class!==M.class&&a(_,"class",null,M.class,g),k&4&&a(_,"style",O.style,M.style,g),k&8){const G=d.dynamicProps;for(let K=0;K<G.length;K++){const ae=G[K],Ie=O[ae],St=M[ae];(St!==Ie||ae==="value")&&a(_,ae,Ie,St,g,c.children,h,v,Ke)}}k&1&&c.children!==d.children&&u(_,d.children)}else!A&&b==null&&me(_,d,O,M,h,v,g);((R=M.onVnodeUpdated)||N)&&_e(()=>{R&&ze(R,h,d,c),N&&ht(d,c,h,"updated")},v)},V=(c,d,h,v,g,w,A)=>{for(let _=0;_<d.length;_++){const k=c[_],b=d[_],N=k.el&&(k.type===be||!xt(k,b)||k.shapeFlag&70)?m(k.el):h;T(k,b,N,null,v,g,w,A,!0)}},me=(c,d,h,v,g,w,A)=>{if(h!==v){if(h!==J)for(const _ in h)!jn(_)&&!(_ in v)&&a(c,_,h[_],null,A,d.children,g,w,Ke);for(const _ in v){if(jn(_))continue;const k=v[_],b=h[_];k!==b&&_!=="value"&&a(c,_,b,k,A,d.children,g,w,Ke)}"value"in v&&a(c,"value",h.value,v.value)}},P=(c,d,h,v,g,w,A,_,k)=>{const b=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:R}=d;R&&(_=_?_.concat(R):R),c==null?(r(b,h,v),r(N,h,v),j(d.children,h,N,g,w,A,_,k)):O>0&&O&64&&M&&c.dynamicChildren?(V(c.dynamicChildren,M,h,g,w,A,_),(d.key!=null||g&&d===g.subTree)&&ss(c,d,!0)):X(c,d,h,N,g,w,A,_,k)},te=(c,d,h,v,g,w,A,_,k)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?g.ctx.activate(d,h,v,A,k):we(d,h,v,g,w,A,k):Vt(c,d,k)},we=(c,d,h,v,g,w,A)=>{const _=c.component=qf(c,v,g);if(dr(c)&&(_.ctx.renderer=Ot),Xf(_),_.asyncDep){if(g&&g.registerDep(_,fe),!c.el){const k=_.subTree=q(Se);y(null,k,d,h)}return}fe(_,c,d,h,g,w,A)},Vt=(c,d,h)=>{const v=d.component=c.component;if(of(c,d,h))if(v.asyncDep&&!v.asyncResolved){re(v,d,h);return}else v.next=d,Jl(v.update),v.update();else d.el=c.el,v.vnode=d},fe=(c,d,h,v,g,w,A)=>{const _=()=>{if(c.isMounted){let{next:N,bu:O,u:M,parent:R,vnode:H}=c,G=N,K;gt(c,!1),N?(N.el=H.el,re(c,N,A)):N=H,O&&Ar(O),(K=N.props&&N.props.onVnodeBeforeUpdate)&&ze(K,R,N,H),gt(c,!0);const ae=Cr(c),Ie=c.subTree;c.subTree=ae,T(Ie,ae,m(Ie.el),kn(Ie),c,g,w),N.el=ae.el,G===null&&sf(c,ae.el),M&&_e(M,g),(K=N.props&&N.props.onVnodeUpdated)&&_e(()=>ze(K,R,N,H),g)}else{let N;const{el:O,props:M}=d,{bm:R,m:H,parent:G}=c,K=Zt(d);if(gt(c,!1),R&&Ar(R),!K&&(N=M&&M.onVnodeBeforeMount)&&ze(N,G,d),gt(c,!0),O&&wr){const ae=()=>{c.subTree=Cr(c),wr(O,c.subTree,c,g,null)};K?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ae()):ae()}else{const ae=c.subTree=Cr(c);T(null,ae,h,v,c,g,w),d.el=ae.el}if(H&&_e(H,g),!K&&(N=M&&M.onVnodeMounted)){const ae=d;_e(()=>ze(N,G,ae),g)}(d.shapeFlag&256||G&&Zt(G.vnode)&&G.vnode.shapeFlag&256)&&c.a&&_e(c.a,g),c.isMounted=!0,d=h=v=null}},k=c.effect=new pi(_,()=>wi(b),c.scope),b=c.update=()=>k.run();b.id=c.uid,gt(c,!0),b()},re=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,Nf(c,d.props,v,h),Ff(c,d.children,h),Ut(),ca(),Wt()},X=(c,d,h,v,g,w,A,_,k=!1)=>{const b=c&&c.children,N=c?c.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:R}=d;if(M>0){if(M&128){wn(b,O,h,v,g,w,A,_,k);return}else if(M&256){mt(b,O,h,v,g,w,A,_,k);return}}R&8?(N&16&&Ke(b,g,w),O!==b&&u(h,O)):N&16?R&16?wn(b,O,h,v,g,w,A,_,k):Ke(b,g,w,!0):(N&8&&u(h,""),R&16&&j(O,h,v,g,w,A,_,k))},mt=(c,d,h,v,g,w,A,_,k)=>{c=c||Mt,d=d||Mt;const b=c.length,N=d.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const R=d[M]=k?at(d[M]):He(d[M]);T(c[M],R,h,null,g,w,A,_,k)}b>N?Ke(c,g,w,!0,!1,O):j(d,h,v,g,w,A,_,k,O)},wn=(c,d,h,v,g,w,A,_,k)=>{let b=0;const N=d.length;let O=c.length-1,M=N-1;for(;b<=O&&b<=M;){const R=c[b],H=d[b]=k?at(d[b]):He(d[b]);if(xt(R,H))T(R,H,h,null,g,w,A,_,k);else break;b++}for(;b<=O&&b<=M;){const R=c[O],H=d[M]=k?at(d[M]):He(d[M]);if(xt(R,H))T(R,H,h,null,g,w,A,_,k);else break;O--,M--}if(b>O){if(b<=M){const R=M+1,H=R<N?d[R].el:v;for(;b<=M;)T(null,d[b]=k?at(d[b]):He(d[b]),h,H,g,w,A,_,k),b++}}else if(b>M)for(;b<=O;)De(c[b],g,w,!0),b++;else{const R=b,H=b,G=new Map;for(b=H;b<=M;b++){const ke=d[b]=k?at(d[b]):He(d[b]);ke.key!=null&&G.set(ke.key,b)}let K,ae=0;const Ie=M-H+1;let St=!1,Zi=0;const qt=new Array(Ie);for(b=0;b<Ie;b++)qt[b]=0;for(b=R;b<=O;b++){const ke=c[b];if(ae>=Ie){De(ke,g,w,!0);continue}let je;if(ke.key!=null)je=G.get(ke.key);else for(K=H;K<=M;K++)if(qt[K-H]===0&&xt(ke,d[K])){je=K;break}je===void 0?De(ke,g,w,!0):(qt[je-H]=b+1,je>=Zi?Zi=je:St=!0,T(ke,d[je],h,null,g,w,A,_,k),ae++)}const Qi=St?zf(qt):Mt;for(K=Qi.length-1,b=Ie-1;b>=0;b--){const ke=H+b,je=d[ke],ea=ke+1<N?d[ke+1].el:v;qt[b]===0?T(null,je,h,ea,g,w,A,_,k):St&&(K<0||b!==Qi[K]?pt(je,h,ea,2):K--)}}},pt=(c,d,h,v,g=null)=>{const{el:w,type:A,transition:_,children:k,shapeFlag:b}=c;if(b&6){pt(c.component.subTree,d,h,v);return}if(b&128){c.suspense.move(d,h,v);return}if(b&64){A.move(c,d,h,Ot);return}if(A===be){r(w,d,h);for(let O=0;O<k.length;O++)pt(k[O],d,h,v);r(c.anchor,d,h);return}if(A===Or){L(c,d,h);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,d,h),_e(()=>_.enter(w),g);else{const{leave:O,delayLeave:M,afterLeave:R}=_,H=()=>r(w,d,h),G=()=>{O(w,()=>{H(),R&&R()})};M?M(w,H,G):G()}else r(w,d,h)},De=(c,d,h,v=!1,g=!1)=>{const{type:w,props:A,ref:_,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=c;if(_!=null&&Kr(_,null,h,c,!0),N&256){d.ctx.deactivate(c);return}const R=N&1&&M,H=!Zt(c);let G;if(H&&(G=A&&A.onVnodeBeforeUnmount)&&ze(G,d,c),N&6)tl(c.component,h,v);else{if(N&128){c.suspense.unmount(h,v);return}R&&ht(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,h,g,Ot,v):b&&(w!==be||O>0&&O&64)?Ke(b,d,h,!1,!0):(w===be&&O&384||!g&&N&16)&&Ke(k,d,h),v&&Gi(c)}(H&&(G=A&&A.onVnodeUnmounted)||R)&&_e(()=>{G&&ze(G,d,c),R&&ht(c,null,d,"unmounted")},h)},Gi=c=>{const{type:d,el:h,anchor:v,transition:g}=c;if(d===be){el(h,v);return}if(d===Or){$(c);return}const w=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:_}=g,k=()=>A(h,w);_?_(c.el,w,k):k()}else w()},el=(c,d)=>{let h;for(;c!==d;)h=p(c),i(c),c=h;i(d)},tl=(c,d,h)=>{const{bum:v,scope:g,update:w,subTree:A,um:_}=c;v&&Ar(v),g.stop(),w&&(w.active=!1,De(A,c,d,h)),_&&_e(_,d),_e(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ke=(c,d,h,v=!1,g=!1,w=0)=>{for(let A=w;A<c.length;A++)De(c[A],d,h,v,g)},kn=c=>c.shapeFlag&6?kn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ji=(c,d,h)=>{c==null?d._vnode&&De(d._vnode,null,null,!0):T(d._vnode||null,c,d,null,null,null,h),ca(),zo(),d._vnode=c},Ot={p:T,um:De,m:pt,r:Gi,mt:we,mc:j,pc:X,pbc:V,n:kn,o:e};let _r,wr;return t&&([_r,wr]=t(Ot)),{render:Ji,hydrate:_r,createApp:Rf(Ji,_r)}}function gt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ss(e,t,n=!1){const r=e.children,i=t.children;if(F(r)&&F(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=at(i[a]),s.el=o.el),n||ss(o,s))}}function zf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Bf=e=>e.__isTeleport,be=Symbol(void 0),Si=Symbol(void 0),Se=Symbol(void 0),Or=Symbol(void 0),Qt=[];let Me=null;function he(e=!1){Qt.push(Me=e?null:[])}function Hf(){Qt.pop(),Me=Qt[Qt.length-1]||null}let un=1;function _a(e){un+=e}function ls(e){return e.dynamicChildren=un>0?Me||Mt:null,Hf(),un>0&&Me&&Me.push(e),e}function Le(e,t,n,r,i,a){return ls(de(e,t,n,r,i,a,!0))}function bn(e,t,n,r,i){return ls(q(e,t,n,r,i,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const hr="__vInternal",fs=({key:e})=>e!=null?e:null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?se(e)||ge(e)||z(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function de(e,t=null,n=null,r=0,i=null,a=e===be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fs(t),ref:t&&Bn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(Ii(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),un>0&&!o&&Me&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Me.push(l),l}const q=Uf;function Uf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Jo)&&(e=Se),Gn(e)){const s=ft(e,t,!0);return n&&Ii(s,n),un>0&&!a&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(ec(e)&&(e=e.__vccOpts),t){t=Wf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Dt(s)),ee(l)&&(No(l)&&!F(l)&&(l=ue({},l)),t.style=rn(l))}const o=se(e)?1:lf(e)?128:Bf(e)?64:ee(e)?4:z(e)?2:0;return de(e,t,n,r,i,o,a,!0)}function Wf(e){return e?No(e)||hr in e?ue({},e):e:null}function ft(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?Yf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&fs(s),ref:t&&t.ref?n&&i?F(i)?i.concat(Bn(t)):[i,Bn(t)]:Bn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor}}function cs(e=" ",t=0){return q(Si,null,e,t)}function wa(e="",t=!1){return t?(he(),bn(Se,null,e)):q(Se,null,e)}function He(e){return e==null||typeof e=="boolean"?q(Se):F(e)?q(be,null,e.slice()):typeof e=="object"?at(e):q(Si,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function Ii(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ii(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(hr in t)?t._ctx=ye:i===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[cs(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Dt([t.class,r.class]));else if(i==="style")t.style=rn([t.style,r.style]);else if(rr(i)){const a=t[i],o=r[i];o&&a!==o&&!(F(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function ze(e,t,n,r=null){Oe(e,t,7,[n,r])}const Kf=os();let Vf=0;function qf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Kf,a={uid:Vf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ns(r,i),emitsOptions:Ho(r,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ef.bind(null,a),e.ce&&e.ce(a),a}let ce=null;const us=()=>ce||ye,zt=e=>{ce=e,e.scope.on()},Ct=()=>{ce&&ce.scope.off(),ce=null};function ds(e){return e.vnode.shapeFlag&4}let dn=!1;function Xf(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,i=ds(e);Pf(e,n,i,t),Lf(e,r);const a=i?Gf(e,t):void 0;return dn=!1,a}function Gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Mo(new Proxy(e.ctx,Cf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Zf(e):null;zt(e),Ut();const a=st(r,e,0,[e.props,i]);if(Wt(),Ct(),vo(a)){if(a.then(Ct,Ct),t)return a.then(o=>{ka(e,o,t)}).catch(o=>{lr(o,e,0)});e.asyncDep=a}else ka(e,a,t)}else ms(e,t)}function ka(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=$o(t)),ms(e,n)}let Aa;function ms(e,t,n){const r=e.type;if(!e.render){if(!t&&Aa&&!r.render){const i=r.template||Ti(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ue(ue({isCustomElement:a,delimiters:s},o),l);r.render=Aa(i,f)}}e.render=r.render||$e}zt(e),Ut(),Ef(e),Wt(),Ct()}function Jf(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function Zf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Jf(e))},slots:e.slots,emit:e.emit,expose:t}}function Pi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($o(Mo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)}}))}function Qf(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function ec(e){return z(e)&&"__vccOpts"in e}const Te=(e,t)=>Vl(e,t,dn);function ps(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?Gn(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gn(n)&&(n=[n]),q(e,t,n))}const tc="3.2.40",nc="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Ca=_t&&_t.createElement("template"),rc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?_t.createElementNS(nc,e):_t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ca.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ca.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ic(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ac(e,t,n){const r=e.style,i=se(n);if(n&&!i){for(const a in n)Vr(r,a,n[a]);if(t&&!se(t))for(const a in t)n[a]==null&&Vr(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Ea=/\s*!important$/;function Vr(e,t,n){if(F(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=oc(e,t);Ea.test(n)?e.setProperty(Ht(r),n.replace(Ea,""),"important"):e[r]=n}}const Ta=["Webkit","Moz","ms"],Sr={};function oc(e,t){const n=Sr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Sr[t]=r;r=or(r);for(let i=0;i<Ta.length;i++){const a=Ta[i]+r;if(a in e)return Sr[t]=a}return t}const Oa="http://www.w3.org/1999/xlink";function sc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oa,t.slice(6,t.length)):e.setAttributeNS(Oa,t,n);else{const a=rl(t);n==null||a&&!po(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function lc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=po(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[hs,fc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let qr=0;const cc=Promise.resolve(),uc=()=>{qr=0},dc=()=>qr||(cc.then(uc),qr=hs());function mc(e,t,n,r){e.addEventListener(t,n,r)}function pc(e,t,n,r){e.removeEventListener(t,n,r)}function hc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=gc(t);if(r){const f=a[t]=vc(r,i);mc(e,s,f,l)}else o&&(pc(e,s,o,l),a[t]=void 0)}}const Sa=/(?:Once|Passive|Capture)$/;function gc(e){let t;if(Sa.test(e)){t={};let r;for(;r=e.match(Sa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}function vc(e,t){const n=r=>{const i=r.timeStamp||hs();(fc||i>=n.attached-1)&&Oe(bc(r,n.value),t,5,[r])};return n.value=e,n.attached=dc(),n}function bc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ia=/^on[a-z]/,yc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?ic(e,r,i):t==="style"?ac(e,n,r):rr(t)?fi(t)||hc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xc(e,t,r,i))?lc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),sc(e,t,r,i))};function xc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ia.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ia.test(t)&&se(n)?!1:t in e}const nt="transition",Xt="animation",gs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_c=ue({},mf.props,gs),vt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Pa=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function wc(e){const t={};for(const P in e)P in gs||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,I=kc(i),T=I&&I[0],D=I&&I[1],{onBeforeEnter:y,onEnter:C,onEnterCancelled:L,onLeave:$,onLeaveCancelled:B,onBeforeAppear:oe=y,onAppear:ne=C,onAppearCancelled:j=L}=t,Y=(P,te,we)=>{it(P,te?u:s),it(P,te?f:o),we&&we()},V=(P,te)=>{P._isLeaving=!1,it(P,m),it(P,x),it(P,p),te&&te()},me=P=>(te,we)=>{const Vt=P?ne:C,fe=()=>Y(te,P,we);vt(Vt,[te,fe]),Na(()=>{it(te,P?l:a),Ve(te,P?u:s),Pa(Vt)||Ma(te,r,T,fe)})};return ue(t,{onBeforeEnter(P){vt(y,[P]),Ve(P,a),Ve(P,o)},onBeforeAppear(P){vt(oe,[P]),Ve(P,l),Ve(P,f)},onEnter:me(!1),onAppear:me(!0),onLeave(P,te){P._isLeaving=!0;const we=()=>V(P,te);Ve(P,m),bs(),Ve(P,p),Na(()=>{!P._isLeaving||(it(P,m),Ve(P,x),Pa($)||Ma(P,r,D,we))}),vt($,[P,we])},onEnterCancelled(P){Y(P,!1),vt(L,[P])},onAppearCancelled(P){Y(P,!0),vt(j,[P])},onLeaveCancelled(P){V(P),vt(B,[P])}})}function kc(e){if(e==null)return null;if(ee(e))return[Ir(e.enter),Ir(e.leave)];{const t=Ir(e);return[t,t]}}function Ir(e){return xo(e)}function Ve(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function it(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Na(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ac=0;function Ma(e,t,n,r){const i=e._endId=++Ac,a=()=>{i===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=vs(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),a()},p=x=>{x.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function vs(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(nt+"Delay"),a=r(nt+"Duration"),o=La(i,a),s=r(Xt+"Delay"),l=r(Xt+"Duration"),f=La(s,l);let u=null,m=0,p=0;t===nt?o>0&&(u=nt,m=o,p=a.length):t===Xt?f>0&&(u=Xt,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?nt:Xt:null,p=u?u===nt?a.length:l.length:0);const x=u===nt&&/\b(transform|all)(,|$)/.test(n[nt+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:x}}function La(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Fa(n)+Fa(e[r])))}function Fa(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function bs(){return document.body.offsetHeight}const ys=new WeakMap,xs=new WeakMap,Cc={name:"TransitionGroup",props:ue({},_c,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=us(),r=Yo();let i,a;return qo(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Sc(i[0].el,n.vnode.el,o))return;i.forEach(Ec),i.forEach(Tc);const s=i.filter(Oc);bs(),s.forEach(l=>{const f=l.el,u=f.style;Ve(f,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",m),f._moveCb=null,it(f,o))};f.addEventListener("transitionend",m)})}),()=>{const o=W(e),s=wc(o);let l=o.tag||be;i=a,a=t.default?ki(t.default()):[];for(let f=0;f<a.length;f++){const u=a[f];u.key!=null&&cn(u,fn(u,s,r,n))}if(i)for(let f=0;f<i.length;f++){const u=i[f];cn(u,fn(u,s,r,n)),ys.set(u,u.el.getBoundingClientRect())}return q(l,null,a)}}},_s=Cc;function Ec(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Tc(e){xs.set(e,e.el.getBoundingClientRect())}function Oc(e){const t=ys.get(e),n=xs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${r}px,${i}px)`,a.transitionDuration="0s",e}}function Sc(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=vs(r);return i.removeChild(r),a}const Ic=ue({patchProp:yc},rc);let $a;function Pc(){return $a||($a=Df(Ic))}const Nc=(...e)=>{const t=Pc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Mc(r);if(!i)return;const a=t._component;!z(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Mc(e){return se(e)?document.querySelector(e):e}function Lc(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(i){i(n)}),(r=e.get("*"))&&r.slice().map(function(i){i(t,n)})}}}const Jn=Lc(),ws=new Map,Ra={x:["left","center","right"],y:["top","bottom"]},Fc=(e=>()=>e++)(0),$c=e=>typeof e!="string"?[]:e.split(/\s+/gi).filter(t=>t),Rc=e=>{typeof e=="string"&&(e=$c(e));let t=null,n=null;return e.forEach(r=>{Ra.y.indexOf(r)!==-1&&(n=r),Ra.x.indexOf(r)!==-1&&(t=r)}),{x:t,y:n}};class Dc{constructor(t,n,r){this.remaining=n,this.callback=t,this.notifyItem=r,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Pr={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:e=>({height:[e.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},Ni=Re({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(e,t){this.$emit("enter",e,t)},leave(e,t){this.$emit("leave",e,t)},afterLeave(){this.$emit("after-leave")}}});function jc(e,t,n,r,i,a){return he(),bn(_s,{tag:"span",css:!1,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:ur(()=>[Ei(e.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}Ni.render=jc;Ni.__file="src/VelocityGroup.vue";var Mi=Re({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function zc(e,t,n,r,i,a){return he(),bn(_s,{tag:"span",name:e.name},{default:ur(()=>[Ei(e.$slots,"default")]),_:3},8,["name"])}Mi.render=zc;Mi.__file="src/CssGroup.vue";const Nr="[-+]?[0-9]*.?[0-9]+",Da=[{name:"px",regexp:new RegExp(`^${Nr}px$`)},{name:"%",regexp:new RegExp(`^${Nr}%$`)},{name:"px",regexp:new RegExp(`^${Nr}$`)}],Bc=e=>{if(e==="auto")return{type:e,value:0};for(let t=0;t<Da.length;t++){const n=Da[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}},Hc=e=>{switch(typeof e){case"number":return{type:"px",value:e};case"string":return Bc(e);default:return{type:"",value:e}}},Sn={IDLE:0,DESTROYED:2};var Li=Re({name:"notifications",components:{VelocityGroup:Ni,CssGroup:Mi},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Pr.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Pr.velocityAnimation},animationName:{type:String,default:Pr.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:ws.get("velocity"),timerControl:null}},computed:{actualWidth(){return Hc(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:e,y:t}=Rc(this.position),n=this.actualWidth.value,r=this.actualWidth.type,i={width:n+r};return t&&(i[t]="0px"),e&&(e==="center"?i.left=`calc(50% - ${+n/2}${r})`:i[e]="0px"),i},active(){return this.list.filter(e=>e.state!==Sn.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){Jn.on("add",this.addItem),Jn.on("close",this.closeItem)},methods:{destroyIfNecessary(e){this.$emit("click",e),this.closeOnClick&&this.destroy(e)},pauseTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)===null||e===void 0||e.pause())},resumeTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)===null||e===void 0||e.resume())},addItem(e={}){if(e.group||(e.group=""),e.data||(e.data={}),this.group!==e.group)return;if(e.clean||e.clear){this.destroyAll();return}const t=typeof e.duration=="number"?e.duration:this.duration,n=typeof e.speed=="number"?e.speed:this.speed,r=typeof e.ignoreDuplicates=="boolean"?e.ignoreDuplicates:this.ignoreDuplicates,{title:i,text:a,type:o,data:s,id:l}=e,f={id:l||Fc(),title:i,text:a,type:o,state:Sn.IDLE,speed:n,length:t+2*n,data:s};t>=0&&(this.timerControl=new Dc(()=>this.destroy(f),f.length,f));const u=this.reverse?!this.botToTop:this.botToTop;let m=-1;const p=this.active.some(I=>I.title===e.title&&I.text===e.text);(!r||!p)&&(u?(this.list.push(f),this.active.length>this.max&&(m=0)):(this.list.unshift(f),this.active.length>this.max&&(m=this.active.length-1)),m!==-1&&this.destroy(this.active[m]))},closeItem(e){this.destroyById(e)},notifyClass(e){var t;return["vue-notification-template",this.classes,(t=e.type)!==null&&t!==void 0?t:""]},notifyWrapperStyle(e){return this.isVA?void 0:{transition:`all ${e.speed}ms`}},destroy(e){clearTimeout(e.timer),e.state=Sn.DESTROYED,this.clean(),this.$emit("destroy",e)},destroyById(e){const t=this.list.find(n=>n.id===e);t&&this.destroy(t)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(e,t){var n;const r=(n=this.animation)===null||n===void 0?void 0:n[e];return typeof r=="function"?r.call(this,t):r},enter(e,t){if(!this.isVA)return;const n=this.getAnimation("enter",e);this.velocity(e,n,{duration:this.speed,complete:t})},leave(e,t){if(!this.isVA)return;const n=this.getAnimation("leave",e);this.velocity(e,n,{duration:this.speed,complete:t})},clean(){this.list=this.list.filter(e=>e.state!==Sn.DESTROYED)}}});const Uc=["data-id"],Wc=["onClick"],Yc=["innerHTML"],Kc=["innerHTML"];function Vc(e,t,n,r,i,a){return he(),Le("div",{class:"vue-notification-group",style:rn(e.styles)},[(he(),bn(kf(e.componentName),{name:e.animationName,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.clean},{default:ur(()=>[(he(!0),Le(be,null,Af(e.active,o=>(he(),Le("div",{key:o.id,class:"vue-notification-wrapper",style:rn(e.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:t[0]||(t[0]=(...s)=>e.pauseTimeout&&e.pauseTimeout(...s)),onMouseleave:t[1]||(t[1]=(...s)=>e.resumeTimeout&&e.resumeTimeout(...s))},[Ei(e.$slots,"body",{class:Dt([e.classes,o.type]),item:o,close:()=>e.destroy(o)},()=>[wa(" Default slot template "),de("div",{class:Dt(e.notifyClass(o)),onClick:s=>e.destroyIfNecessary(o)},[o.title?(he(),Le("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,Yc)):wa("v-if",!0),de("div",{class:"notification-content",innerHTML:o.text},null,8,Kc)],10,Wc)])],44,Uc))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function qc(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Xc=`
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

`;qc(Xc);Li.render=Vc;Li.__file="src/Notifications.vue";const gr=e=>{typeof e=="string"&&(e={title:"",text:e}),typeof e=="object"&&Jn.emit("add",e)};gr.close=function(e){Jn.emit("close",e)};function Gc(e,t={}){Object.entries(t).forEach(r=>ws.set(...r));const n=t.name||"notify";e.config.globalProperties["$"+n]=gr,e.component(t.componentName||"notifications",Li)}var Jc={install:Gc};const ja="/assets/don-cool.c53b70d9.jpeg",Zc="/assets/shiba-cool.294ad440.png",Qc=["src"],eu=Re({__name:"DynamicAvatar",setup(e){const t=()=>{document.getElementById("avatar").src=Zc},n=()=>{document.getElementById("avatar").src=ja};return(r,i)=>(he(),Le("header",null,[de("img",{id:"avatar",class:"center",draggable:"false",onMouseover:i[0]||(i[0]=a=>t()),onMouseleave:i[1]||(i[1]=a=>n()),src:Kn(ja)},null,40,Qc)]))}});const Yt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},tu=Yt(eu,[["__scopeId","data-v-b3af5c63"]]),ks=e=>(tf("data-v-2bcc1c8b"),e=e(),nf(),e),nu={class:"container"},ru=ks(()=>de("img",{class:"icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"},null,-1)),iu={class:"typed-text",id:"dynamicText"},au=ks(()=>de("span",{class:"blinking-cursor"},"|",-1)),ou=Re({__name:"TypingText",props:{constantText:String,dynamicTexts:Array},setup(e){const t=e,n=70,r=10,i=1500;let a=Hl(""),o=!1,s=0,l=0;const f=async()=>{!t.dynamicTexts||(l<t.dynamicTexts[s].length?(o||(o=!0),a.value+=t.dynamicTexts[s][l],l+=1,setTimeout(f,n)):(o=!1,setTimeout(u,i)))},u=async()=>{if(!!t.dynamicTexts){if(l==0){m();return}l>0&&(o&&(o=!0),a.value=t.dynamicTexts[s].substring(0,l-1),l-=1,s+1<t.dynamicTexts.length&&t.dynamicTexts[s+1].startsWith(a.value)?m():setTimeout(u,r))}},m=()=>{!t.dynamicTexts||(o=!1,s+=1,s>=t.dynamicTexts.length&&(s=0),setTimeout(f,n))};return pr(()=>{f()}),(p,x)=>(he(),Le("div",nu,[ru,de("h1",null,[cs(ta(e.constantText)+" ",1),de("span",iu,ta(Kn(a)),1),au,de("span",{class:Dt(["cursor",{typing:Kn(o)}])},"\xA0",2)])]))}});const su=Yt(ou,[["__scopeId","data-v-2bcc1c8b"]]),lu={class:"social"},fu={href:"https://github.com/truongdd03",target:"_blank"},cu={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},uu={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},du=Re({__name:"SocialInformation",setup(e){const t=async()=>{const n="dong23102003@gmail.com";await navigator.clipboard.writeText(n),gr({title:"Copied email address!"})};return(n,r)=>{const i=Ci("font-awesome-icon");return he(),Le("header",null,[de("div",lu,[de("a",fu,[q(i,{class:"icon",icon:"fa-brands fa-github",inverse:""})]),de("a",cu,[q(i,{class:"icon",icon:"fa-brands fa-linkedin",inverse:""})]),de("a",uu,[q(i,{class:"icon",icon:"fa-brands fa-discord",inverse:""})]),q(i,{class:"icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=a=>t())})])])}}});const mu=Yt(du,[["__scopeId","data-v-74f25403"]]);function pu(e){try{document.getElementById(e).scrollIntoView({behavior:"smooth"})}catch(t){throw new Error(t)}}const hu={class:"wrapper black-background full"},gu={class:"icon-wrapper"},vu=Re({__name:"IntroductionPane",setup(e){const t=["Don Truong","\u0110\xF4ng Tr\u01B0\u01A1ng","from Vietnam","a sophomore at MSU","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=()=>{pu("experience")};return(r,i)=>{const a=Ci("font-awesome-icon");return he(),Le("div",hu,[q(tu),q(mu),q(su,{constantText:"Hi, I'm ",dynamicTexts:t}),de("div",gu,[q(a,{class:"scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:i[0]||(i[0]=o=>n())})])])}}});const bu=Yt(vu,[["__scopeId","data-v-bf971b17"]]),yu={},xu={class:"wrapper"},_u=de("h1",{class:"title"},"Experience",-1),wu=[_u];function ku(e,t){return he(),Le("div",xu,wu)}const Au=Yt(yu,[["render",ku]]),Cu={},Eu={class:"wrapper black-background"},Tu=de("h1",{class:"title"},"Skills",-1),Ou=[Tu];function Su(e,t){return he(),Le("div",Eu,Ou)}const Iu=Yt(Cu,[["render",Su]]),Pu=Re({__name:"App",setup(e){return pr(()=>{gr({title:"Contruction zone!",type:"warn",text:"This website is a work in progress. Some features may not work properly."})}),(t,n)=>{const r=Ci("notifications");return he(),Le(be,null,[q(bu,{id:"introduction"}),q(Au,{id:"experience"}),q(Iu,{id:"skills"}),q(r,{class:"notification",position:"bottom right"})],64)}}});function za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?za(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Nu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ba(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mu(e,t,n){return t&&Ba(e.prototype,t),n&&Ba(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fi(e,t){return Fu(e)||Ru(e,t)||As(e,t)||ju()}function yn(e){return Lu(e)||$u(e)||As(e)||Du()}function Lu(e){if(Array.isArray(e))return Xr(e)}function Fu(e){if(Array.isArray(e))return e}function $u(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ru(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function As(e,t){if(!!e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Du(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ju(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},$i={},Cs={},Es=null,Ts={mark:Ha,measure:Ha};try{typeof window<"u"&&($i=window),typeof document<"u"&&(Cs=document),typeof MutationObserver<"u"&&(Es=MutationObserver),typeof performance<"u"&&(Ts=performance)}catch{}var zu=$i.navigator||{},Ua=zu.userAgent,Wa=Ua===void 0?"":Ua,ct=$i,Q=Cs,Ya=Es,In=Ts;ct.document;var et=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Os=~Wa.indexOf("MSIE")||~Wa.indexOf("Trident/"),Pn,Nn,Mn,Ln,Fn,Ge="___FONT_AWESOME___",Gr=16,Ss="fa",Is="svg-inline--fa",Et="data-fa-i2svg",Jr="data-fa-pseudo-element",Bu="data-fa-pseudo-element-pending",Ri="data-prefix",Di="data-icon",Ka="fontawesome-i2svg",Hu="async",Uu=["HTML","HEAD","STYLE","SCRIPT"],Ps=function(){try{return!0}catch{return!1}}(),Z="classic",ie="sharp",ji=[Z,ie];function xn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var mn=xn((Pn={},le(Pn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Pn,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),Pn)),pn=xn((Nn={},le(Nn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Nn,ie,{solid:"fass"}),Nn)),hn=xn((Mn={},le(Mn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Mn,ie,{fass:"fa-solid"}),Mn)),Wu=xn((Ln={},le(Ln,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Ln,ie,{"fa-solid":"fass"}),Ln)),Yu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ns="fa-layers-text",Ku=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vu=xn((Fn={},le(Fn,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Fn,ie,{900:"fass"}),Fn)),Ms=[1,2,3,4,5,6,7,8,9,10],qu=Ms.concat([11,12,13,14,15,16,17,18,19,20]),Xu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gn=new Set;Object.keys(pn[Z]).map(gn.add.bind(gn));Object.keys(pn[ie]).map(gn.add.bind(gn));var Gu=[].concat(ji,yn(gn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Ms.map(function(e){return"".concat(e,"x")})).concat(qu.map(function(e){return"w-".concat(e)})),en=ct.FontAwesomeConfig||{};function Ju(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Qu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qu.forEach(function(e){var t=Fi(e,2),n=t[0],r=t[1],i=Zu(Ju(n));i!=null&&(en[r]=i)})}var Ls={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ss,replacementClass:Is,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Bt=E(E({},Ls),en);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var S={};Object.keys(Ls).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Bt[e]=n,tn.forEach(function(r){return r(S)})},get:function(){return Bt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,tn.forEach(function(n){return n(S)})},get:function(){return Bt.cssPrefix}});ct.FontAwesomeConfig=S;var tn=[];function ed(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var rt=Gr,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function td(e){if(!(!e||!et)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Q.head.insertBefore(t,r),e}}var nd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=nd[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zi(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fs(e[n]),'" ')},"").trim()}function vr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Bi(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function id(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function ad(e){var t=e.transform,n=e.width,r=n===void 0?Gr:n,i=e.height,a=i===void 0?Gr:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Os?l+="translate(".concat(t.x/rt-r/2,"em, ").concat(t.y/rt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rt,"em), calc(-50% + ").concat(t.y/rt,"em)) "):l+="translate(".concat(t.x/rt,"em, ").concat(t.y/rt,"em) "),l+="scale(".concat(t.size/rt*(t.flipX?-1:1),", ").concat(t.size/rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var od=`:root, :host {
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
}`;function $s(){var e=Ss,t=Is,n=S.cssPrefix,r=S.replacementClass,i=od;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Va=!1;function Mr(){S.autoAddCss&&!Va&&(td($s()),Va=!0)}var sd={mixout:function(){return{dom:{css:$s,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Je=ct||{};Je[Ge]||(Je[Ge]={});Je[Ge].styles||(Je[Ge].styles={});Je[Ge].hooks||(Je[Ge].hooks={});Je[Ge].shims||(Je[Ge].shims=[]);var Fe=Je[Ge],Rs=[],ld=function e(){Q.removeEventListener("DOMContentLoaded",e),Qn=1,Rs.map(function(t){return t()})},Qn=!1;et&&(Qn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Qn||Q.addEventListener("DOMContentLoaded",ld));function fd(e){!et||(Qn?setTimeout(e,0):Rs.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Fs(e):"<".concat(t," ").concat(rd(r),">").concat(a.map(_n).join(""),"</").concat(t,">")}function qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cd=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Lr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?cd(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function ud(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Zr(e){var t=ud(e);return t.length===1?t[0].toString(16):null}function dd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Xa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Xa(t);typeof Fe.hooks.addPack=="function"&&!i?Fe.hooks.addPack(e,Xa(t)):Fe.styles[e]=E(E({},Fe.styles[e]||{}),a),e==="fas"&&Qr("fa",t)}var $n,Rn,Dn,Pt=Fe.styles,md=Fe.shims,pd=($n={},le($n,Z,Object.values(hn[Z])),le($n,ie,Object.values(hn[ie])),$n),Hi=null,Ds={},js={},zs={},Bs={},Hs={},hd=(Rn={},le(Rn,Z,Object.keys(mn[Z])),le(Rn,ie,Object.keys(mn[ie])),Rn);function gd(e){return~Gu.indexOf(e)}function vd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!gd(i)?i:null}var Us=function(){var t=function(a){return Lr(Pt,function(o,s,l){return o[l]=Lr(s,a,{}),o},{})};Ds=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),js=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Hs=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Pt||S.autoFetchSvg,r=Lr(md,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});zs=r.names,Bs=r.unicodes,Hi=br(S.styleDefault,{family:S.familyDefault})};ed(function(e){Hi=br(e.styleDefault,{family:S.familyDefault})});Us();function Ui(e,t){return(Ds[e]||{})[t]}function bd(e,t){return(js[e]||{})[t]}function kt(e,t){return(Hs[e]||{})[t]}function Ws(e){return zs[e]||{prefix:null,iconName:null}}function yd(e){var t=Bs[e],n=Ui("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ut(){return Hi}var Wi=function(){return{prefix:null,iconName:null,rest:[]}};function br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,i=mn[r][e],a=pn[r][e]||pn[r][i],o=e in Fe.styles?e:null;return a||o||null}var Ga=(Dn={},le(Dn,Z,Object.keys(hn[Z])),le(Dn,ie,Object.keys(hn[ie])),Dn);function yr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,Z,"".concat(S.cssPrefix,"-").concat(Z)),le(t,ie,"".concat(S.cssPrefix,"-").concat(ie)),t),o=null,s=Z;(e.includes(a[Z])||e.some(function(f){return Ga[Z].includes(f)}))&&(s=Z),(e.includes(a[ie])||e.some(function(f){return Ga[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,u){var m=vd(S.cssPrefix,u);if(Pt[u]?(u=pd[s].includes(u)?Wu[s][u]:u,o=u,f.prefix=u):hd[s].indexOf(u)>-1?(o=u,f.prefix=br(u,{family:s})):m?f.iconName=m:u!==S.replacementClass&&u!==a[Z]&&u!==a[ie]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var p=o==="fa"?Ws(f.iconName):{},x=kt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||x||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Pt.far&&Pt.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Wi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Pt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ut()||"fas"),l}var xd=function(){function e(){Nu(this,e),this.definitions={}}return Mu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Qr(s,o[s]);var l=hn[Z][s];l&&Qr(l,o[s]),Us()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ja=[],Nt={},Rt={},_d=Object.keys(Rt);function wd(e,t){var n=t.mixoutsTo;return Ja=e,Nt={},Object.keys(Rt).forEach(function(r){_d.indexOf(r)===-1&&delete Rt[r]}),Ja.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(a[o])})}r.provides&&r.provides(Rt)}),n}function ei(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Nt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rt[e]?Rt[e].apply(null,t):void 0}function ti(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ut();if(!!t)return t=kt(n,t)||t,qa(Ys.definitions,n,t)||qa(Fe.styles,n,t)}var Ys=new xd,kd=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,Tt("noAuto")},Ad={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(Tt("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,fd(function(){Ed({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Cd={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=br(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Yu))){var i=yr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ut(),iconName:kt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=ut();return{prefix:a,iconName:kt(a,t)||t}}}},Ce={noAuto:kd,config:S,dom:Ad,parse:Cd,library:Ys,findIconDefinition:ti,toHtml:_n},Ed=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Fe.styles).length>0||S.autoFetchSvg)&&et&&S.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function xr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Td(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Bi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=vr(E(E({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Od(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},i),{},{id:o}),children:r}]}]}function Yi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,x=p===void 0?!1:p,I=r.found?r:n,T=I.width,D=I.height,y=i==="fak",C=[S.replacementClass,a?"".concat(S.cssPrefix,"-").concat(a):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),L={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(D)})},$=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/D*16*.0625,"em")}:{};x&&(L.attributes[Et]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||vn())},children:[l]}),delete L.attributes.title);var B=E(E({},L),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:E(E({},$),m.styles)}),oe=r.found&&n.found?Ze("generateAbstractMask",B)||{children:[],attributes:{}}:Ze("generateAbstractIcon",B)||{children:[],attributes:{}},ne=oe.children,j=oe.attributes;return B.children=ne,B.attributes=j,s?Od(B):Td(B)}function Za(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=E(E(E({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Et]="");var u=E({},o.styles);Bi(i)&&(u.transform=ad({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=vr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Sd(e){var t=e.content,n=e.title,r=e.extra,i=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=vr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fr=Fe.styles;function ni(e){var t=e[0],n=e[1],r=e.slice(4),i=Fi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Id={found:!1,width:512,height:512};function Pd(e,t){!Ps&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ri(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=ut()),new Promise(function(r,i){if(Ze("missingIconAbstract"),n==="fa"){var a=Ws(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Fr[t]&&Fr[t][e]){var o=Fr[t][e];return r(ni(o))}Pd(e,t),r(E(E({},Id),{},{icon:S.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var Qa=function(){},ii=S.measurePerformance&&In&&In.mark&&In.measure?In:{mark:Qa,measure:Qa},Jt='FA "6.2.0"',Nd=function(t){return ii.mark("".concat(Jt," ").concat(t," begins")),function(){return Ks(t)}},Ks=function(t){ii.mark("".concat(Jt," ").concat(t," ends")),ii.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Ki={begin:Nd,end:Ks},Hn=function(){};function eo(e){var t=e.getAttribute?e.getAttribute(Et):null;return typeof t=="string"}function Md(e){var t=e.getAttribute?e.getAttribute(Ri):null,n=e.getAttribute?e.getAttribute(Di):null;return t&&n}function Ld(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Fd(){if(S.autoReplaceSvg===!0)return Un.replace;var e=Un[S.autoReplaceSvg];return e||Un.replace}function $d(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function Rd(e){return Q.createElement(e)}function Vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$d:Rd:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Vs(o,{ceFn:r}))}),i}function Dd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Vs(i),n)}),n.getAttribute(Et)===null&&S.keepOriginalSource){var r=Q.createComment(Dd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~zi(n).indexOf(S.replacementClass))return Un.replace(t);var i=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return _n(s)}).join(`
`);n.setAttribute(Et,""),n.innerHTML=o}};function to(e){e()}function qs(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=to;S.mutateApproach===Hu&&(r=ct.requestAnimationFrame||to),r(function(){var i=Fd(),a=Ki.begin("mutate");e.map(i),a(),n()})}}var Vi=!1;function Xs(){Vi=!0}function ai(){Vi=!1}var er=null;function no(e){if(!!Ya&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,i=r===void 0?Hn:r,a=e.pseudoElementsCallback,o=a===void 0?Hn:a,s=e.observeMutationsRoot,l=s===void 0?Q:s;er=new Ya(function(f){if(!Vi){var u=ut();Kt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!eo(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&eo(m.target)&&~Xu.indexOf(m.attributeName))if(m.attributeName==="class"&&Md(m.target)){var p=yr(zi(m.target)),x=p.prefix,I=p.iconName;m.target.setAttribute(Ri,x||u),I&&m.target.setAttribute(Di,I)}else Ld(m.target)&&i(m.target)})}}),et&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jd(){!er||er.disconnect()}function zd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=yr(zi(e));return i.prefix||(i.prefix=ut()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bd(i.prefix,e.innerText)||Ui(i.prefix,Zr(e.innerText))),!i.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Hd(e){var t=Kt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ud(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bd(e),r=n.iconName,i=n.prefix,a=n.rest,o=Hd(e),s=ei("parseNodeAttributes",{},e),l=t.styleParser?zd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Wd=Fe.styles;function Gs(e){var t=S.autoReplaceSvg==="nest"?ro(e,{styleParser:!1}):ro(e);return~t.extra.classes.indexOf(Ns)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var dt=new Set;ji.map(function(e){dt.add("fa-".concat(e))});Object.keys(mn[Z]).map(dt.add.bind(dt));Object.keys(mn[ie]).map(dt.add.bind(dt));dt=yn(dt);function io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Ka,"-").concat(m))},i=function(m){return n.remove("".concat(Ka,"-").concat(m))},a=S.autoFetchSvg?dt:ji.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Wd));a.includes("fa")||a.push("fa");var o=[".".concat(Ns,":not([").concat(Et,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Et,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ki.begin("onTree"),f=s.reduce(function(u,m){try{var p=Gs(m);p&&u.push(p)}catch(x){Ps||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){qs(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gs(e).then(function(n){n&&qs([n],t)})}function Kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ti(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ti(i||{})),e(r,E(E({},n),{},{mask:i}))}}var Vd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?We:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,x=n.titleId,I=x===void 0?null:x,T=n.classes,D=T===void 0?[]:T,y=n.attributes,C=y===void 0?{}:y,L=n.styles,$=L===void 0?{}:L;if(!!t){var B=t.prefix,oe=t.iconName,ne=t.icon;return xr(E({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(p?C["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(I||vn()):(C["aria-hidden"]="true",C.focusable="false")),Yi({icons:{main:ni(ne),mask:l?ni(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:oe,transform:E(E({},We),i),symbol:o,title:p,maskId:u,titleId:I,extra:{attributes:C,styles:$,classes:D}})})}},qd={mixout:function(){return{icon:Kd(Vd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=io,n.nodeCallback=Yd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,a=n.callback,o=a===void 0?function(){}:a;return io(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(x,I){Promise.all([ri(i,s),u.iconName?ri(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var D=Fi(T,2),y=D[0],C=D[1];x([n,Yi({icons:{main:y,mask:C},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=vr(s);l.length>0&&(i.style=l);var f;return Bi(o)&&(f=Ze("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Xd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return xr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(yn(a)).join(" ")},children:o}]})}}}},Gd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return xr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),Sd({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(yn(s))}})})}}}},Jd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?We:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,x=p===void 0?{}:p;return xr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),Za({content:n,transform:E(E({},We),a),title:s,extra:{attributes:m,styles:x,classes:["".concat(S.cssPrefix,"-layers-text")].concat(yn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Os){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return S.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Za({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Zd=new RegExp('"',"ug"),ao=[1105920,1112319];function Qd(e){var t=e.replace(Zd,""),n=dd(t,0),r=n>=ao[0]&&n<=ao[1],i=t.length===2?t[0]===t[1]:!1;return{value:Zr(i?t[0]:t),isSecondary:r||i}}function oo(e,t){var n="".concat(Bu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Kt(e.children),o=a.filter(function(ne){return ne.getAttribute(Jr)===t})[0],s=ct.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ku),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:Z,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[p][l[2].toLowerCase()]:Vu[p][f],I=Qd(m),T=I.value,D=I.isSecondary,y=l[0].startsWith("FontAwesome"),C=Ui(x,T),L=C;if(y){var $=yd(T);$.iconName&&$.prefix&&(C=$.iconName,x=$.prefix)}if(C&&!D&&(!o||o.getAttribute(Ri)!==x||o.getAttribute(Di)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var B=Ud(),oe=B.extra;oe.attributes[Jr]=t,ri(C,x).then(function(ne){var j=Yi(E(E({},B),{},{icons:{main:ne,mask:Wi()},prefix:x,iconName:L,extra:oe,watchable:!0})),Y=Q.createElement("svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=j.map(function(V){return _n(V)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function em(e){return Promise.all([oo(e,"::before"),oo(e,"::after")])}function tm(e){return e.parentNode!==document.head&&!~Uu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function so(e){if(!!et)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(tm).map(em),i=Ki.begin("searchPseudoElements");Xs(),Promise.all(r).then(function(){i(),ai(),t()}).catch(function(){i(),ai(),n()})})}var nm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=so,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;S.searchPseudoElements&&so(i)}}},lo=!1,rm={mixout:function(){return{dom:{unwatch:function(){Xs(),lo=!0}}}},hooks:function(){return{bootstrap:function(){no(ei("mutationObserverCallbacks",{}))},noAuto:function(){jd()},watch:function(n){var r=n.observeMutationsRoot;lo?ai():no(ei("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},fo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},im={mixout:function(){return{parse:{transform:function(n){return fo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=fo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},x.outer),children:[{tag:"g",attributes:E({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),x.path)}]}]}}}},$r={x:0,y:0,width:"100%",height:"100%"};function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function am(e){return e.tag==="g"?e.children:[e]}var om={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?yr(i.split(" ").map(function(o){return o.trim()})):Wi();return a.prefix||(a.prefix=ut()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,m=o.width,p=o.icon,x=id({transform:l,containerWidth:m,iconWidth:f}),I={tag:"rect",attributes:E(E({},$r),{},{fill:"white"})},T=u.children?{children:u.children.map(co)}:{},D={tag:"g",attributes:E({},x.inner),children:[co(E({tag:u.tag,attributes:E(E({},u.attributes),x.path)},T))]},y={tag:"g",attributes:E({},x.outer),children:[D]},C="mask-".concat(s||vn()),L="clip-".concat(s||vn()),$={tag:"mask",attributes:E(E({},$r),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:am(p)},$]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},$r)}),{children:r,attributes:i}}}},sm={provides:function(t){var n=!1;ct.matchMedia&&(n=ct.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},fm=[sd,qd,Xd,Gd,Jd,nm,rm,im,om,sm,lm];wd(fm,{mixoutsTo:Ce});Ce.noAuto;var Js=Ce.config,cm=Ce.library;Ce.dom;var tr=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var um=Ce.icon;Ce.layer;var dm=Ce.text;Ce.counter;function uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uo(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e,t){if(e==null)return{};var n=mm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function oi(e){return hm(e)||gm(e)||vm(e)||bm()}function hm(e){if(Array.isArray(e))return si(e)}function gm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vm(e,t){if(!!e){if(typeof e=="string")return si(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return si(e,t)}}function si(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zs={exports:{}};(function(e){(function(t){var n=function(y,C,L){if(!f(C)||m(C)||p(C)||x(C)||l(C))return C;var $,B=0,oe=0;if(u(C))for($=[],oe=C.length;B<oe;B++)$.push(n(y,C[B],L));else{$={};for(var ne in C)Object.prototype.hasOwnProperty.call(C,ne)&&($[y(ne,L)]=n(y,C[ne],L))}return $},r=function(y,C){C=C||{};var L=C.separator||"_",$=C.split||/(?=[A-Z])/;return y.split($).join(L)},i=function(y){return I(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var C=i(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},x=function(y){return s.call(y)=="[object Boolean]"},I=function(y){return y=y-0,y===y},T=function(y,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?y:function($,B){return L($,y,B)}},D={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,C){return n(T(i,C),y)},decamelizeKeys:function(y,C){return n(T(o,C),y,C)},pascalizeKeys:function(y,C){return n(T(a,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(ym)})(Zs);var xm=Zs.exports,_m=["class","style"];function wm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=xm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function km(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return qi(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=km(u);break;case"style":l.style=wm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=pm(n,_m);return ps(e.tag,Ne(Ne(Ne({},t),{},{class:i.class,style:Ne(Ne({},i.style),o)},i.attrs),s),r)}var Qs=!1;try{Qs=!0}catch{}function Am(){if(!Qs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Cm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function mo(e){if(e&&nr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tr.icon)return tr.icon(e);if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Em=Re({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Te(function(){return mo(t.icon)}),a=Te(function(){return nn("classes",Cm(t))}),o=Te(function(){return nn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Te(function(){return nn("mask",mo(t.mask))}),l=Te(function(){return um(i.value,Ne(Ne(Ne(Ne({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});zn(l,function(u){if(!u)return Am("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=Te(function(){return l.value?qi(l.value.abstract[0],{},r):null});return function(){return f.value}}});Re({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=Js.familyPrefix,a=Te(function(){return["".concat(i,"-layers")].concat(oi(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return ps("div",{class:a.value},r.default?r.default():[])}}});Re({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=Js.familyPrefix,a=Te(function(){return nn("classes",[].concat(oi(t.counter?["".concat(i,"-layers-counter")]:[]),oi(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),o=Te(function(){return nn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Te(function(){var f=dm(t.value.toString(),Ne(Ne({},o.value),a.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Te(function(){return qi(s.value,{},r)});return function(){return l.value}}});var Tm={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},Om={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Sm={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Im={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Pm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const Nm=[Pm,Im,Sm,Om,Tm];Nm.forEach(e=>{cm.add(e)});const Xi=Nc(Pu);Xi.use(Jc);Xi.component("font-awesome-icon",Em);Xi.mount("#app");
