(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function ci(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",al=ci(il);function go(e){return!!e||e===""}function rn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=se(r)?ll(r):rn(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(se(e))return e;if(ee(e))return e}}const ol=/;(?![^(]*\))/g,sl=/:(.+)/;function ll(e){const t={};return e.split(ol).forEach(n=>{if(n){const r=n.split(sl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zt(e){let t="";if(se(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=zt(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const na=e=>se(e)?e:e==null?"":F(e)||ee(e)&&(e.toString===xo||!j(e.toString))?JSON.stringify(e,vo,2):String(e),vo=(e,t)=>t&&t.__v_isRef?vo(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:bo(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!F(t)&&!_o(t)?String(t):t,J={},Lt=[],De=()=>{},fl=()=>!1,cl=/^on[^a-z]/,ir=e=>cl.test(e),ui=e=>e.startsWith("onUpdate:"),ue=Object.assign,di=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ul=Object.prototype.hasOwnProperty,U=(e,t)=>ul.call(e,t),F=Array.isArray,Ft=e=>ar(e)==="[object Map]",bo=e=>ar(e)==="[object Set]",j=e=>typeof e=="function",se=e=>typeof e=="string",mi=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",yo=e=>ee(e)&&j(e.then)&&j(e.catch),xo=Object.prototype.toString,ar=e=>xo.call(e),dl=e=>ar(e).slice(8,-1),_o=e=>ar(e)==="[object Object]",pi=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-(\w)/g,Ke=or(e=>e.replace(ml,(t,n)=>n?n.toUpperCase():"")),pl=/\B([A-Z])/g,Ut=or(e=>e.replace(pl,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=or(e=>e?`on${sr(e)}`:""),an=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ra;const hl=()=>ra||(ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let He;class gl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&He&&(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(t){if(this.active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function vl(e,t=He){t&&t.active&&t.effects.push(e)}const hi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ao=e=>(e.w&ft)>0,ko=e=>(e.n&ft)>0,bl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ft},yl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Ao(i)&&!ko(i)?i.delete(e):t[n++]=i,i.w&=~ft,i.n&=~ft}t.length=n}},zr=new WeakMap;let Gt=0,ft=1;const jr=30;let Me;const Et=Symbol(""),Hr=Symbol("");class gi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vl(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,st=!0,ft=1<<++Gt,Gt<=jr?bl(this):ia(this),this.fn()}finally{Gt<=jr&&yl(this),ft=1<<--Gt,Me=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(ia(this),this.onStop&&this.onStop(),this.active=!1)}}function ia(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const Eo=[];function Wt(){Eo.push(st),st=!1}function Yt(){const e=Eo.pop();st=e===void 0?!0:e}function Ee(e,t,n){if(st&&Me){let r=zr.get(e);r||zr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=hi()),To(i)}}function To(e,t){let n=!1;Gt<=jr?ko(e)||(e.n|=ft,n=!Ao(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Ge(e,t,n,r,i,a){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?pi(n)&&s.push(o.get("length")):(s.push(o.get(Et)),Ft(e)&&s.push(o.get(Hr)));break;case"delete":F(e)||(s.push(o.get(Et)),Ft(e)&&s.push(o.get(Hr)));break;case"set":Ft(e)&&s.push(o.get(Et));break}if(s.length===1)s[0]&&Br(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Br(hi(l))}}function Br(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&aa(r);for(const r of n)r.computed||aa(r)}function aa(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xl=ci("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mi)),_l=vi(),wl=vi(!1,!0),Al=vi(!0),oa=kl();function kl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let a=0,o=this.length;a<o;a++)Ee(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wt();const r=W(this)[t].apply(this,n);return Yt(),r}}),e}function vi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?jl:Po:t?No:Io).get(r))return r;const o=F(r);if(!e&&o&&U(oa,i))return Reflect.get(oa,i,a);const s=Reflect.get(r,i,a);return(mi(i)?Co.has(i):xl(i))||(e||Ee(r,"get",i),t)?s:he(s)?o&&pi(i)?s:s.value:ee(s)?e?Mo(s):fr(s):s}}const El=Oo(),Tl=Oo(!0);function Oo(e=!1){return function(n,r,i,a){let o=n[r];if(jt(o)&&he(o)&&!he(i))return!1;if(!e&&(!Kn(i)&&!jt(i)&&(o=W(o),i=W(i)),!F(n)&&he(o)&&!he(i)))return o.value=i,!0;const s=F(n)&&pi(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,i,a);return n===W(a)&&(s?an(i,o)&&Ge(n,"set",r,i):Ge(n,"add",r,i)),l}}function Cl(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function Ol(e,t){const n=Reflect.has(e,t);return(!mi(t)||!Co.has(t))&&Ee(e,"has",t),n}function Sl(e){return Ee(e,"iterate",F(e)?"length":Et),Reflect.ownKeys(e)}const So={get:_l,set:El,deleteProperty:Cl,has:Ol,ownKeys:Sl},Il={get:Al,set(e,t){return!0},deleteProperty(e,t){return!0}},Nl=ue({},So,{get:wl,set:Tl}),bi=e=>e,lr=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,r=!1){e=e.__v_raw;const i=W(e),a=W(t);n||(t!==a&&Ee(i,"get",t),Ee(i,"get",a));const{has:o}=lr(i),s=r?bi:n?_i:on;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function En(e,t=!1){const n=this.__v_raw,r=W(n),i=W(e);return t||(e!==i&&Ee(r,"has",e),Ee(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Tn(e,t=!1){return e=e.__v_raw,!t&&Ee(W(e),"iterate",Et),Reflect.get(e,"size",e)}function sa(e){e=W(e);const t=W(this);return lr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function la(e,t){t=W(t);const n=W(this),{has:r,get:i}=lr(n);let a=r.call(n,e);a||(e=W(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?an(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function fa(e){const t=W(this),{has:n,get:r}=lr(t);let i=n.call(t,e);i||(e=W(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Ge(t,"delete",e,void 0),a}function ca(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Cn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=W(o),l=t?bi:e?_i:on;return!e&&Ee(s,"iterate",Et),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function On(e,t,n){return function(...r){const i=this.__v_raw,a=W(i),o=Ft(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?bi:t?_i:on;return!t&&Ee(a,"iterate",l?Hr:Et),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function Pl(){const e={get(a){return kn(this,a)},get size(){return Tn(this)},has:En,add:sa,set:la,delete:fa,clear:ca,forEach:Cn(!1,!1)},t={get(a){return kn(this,a,!1,!0)},get size(){return Tn(this)},has:En,add:sa,set:la,delete:fa,clear:ca,forEach:Cn(!1,!0)},n={get(a){return kn(this,a,!0)},get size(){return Tn(this,!0)},has(a){return En.call(this,a,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Cn(!0,!1)},r={get(a){return kn(this,a,!0,!0)},get size(){return Tn(this,!0)},has(a){return En.call(this,a,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=On(a,!1,!1),n[a]=On(a,!0,!1),t[a]=On(a,!1,!0),r[a]=On(a,!0,!0)}),[e,n,t,r]}const[Ml,Ll,Fl,Rl]=Pl();function yi(e,t){const n=t?e?Rl:Fl:e?Ll:Ml;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const Dl={get:yi(!1,!1)},$l={get:yi(!1,!0)},zl={get:yi(!0,!1)},Io=new WeakMap,No=new WeakMap,Po=new WeakMap,jl=new WeakMap;function Hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bl(e){return e.__v_skip||!Object.isExtensible(e)?0:Hl(dl(e))}function fr(e){return jt(e)?e:xi(e,!1,So,Dl,Io)}function Ul(e){return xi(e,!1,Nl,$l,No)}function Mo(e){return xi(e,!0,Il,zl,Po)}function xi(e,t,n,r,i){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Bl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Rt(e){return jt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function Lo(e){return Rt(e)||jt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Fo(e){return Yn(e,"__v_skip",!0),e}const on=e=>ee(e)?fr(e):e,_i=e=>ee(e)?Mo(e):e;function Ro(e){st&&Me&&(e=W(e),To(e.dep||(e.dep=hi())))}function Do(e,t){e=W(e),e.dep&&Br(e.dep)}function he(e){return!!(e&&e.__v_isRef===!0)}function Wl(e){return Yl(e,!1)}function Yl(e,t){return he(e)?e:new Kl(e,t)}class Kl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:on(t)}get value(){return Ro(this),this._value}set value(t){const n=this.__v_isShallow||Kn(t)||jt(t);t=n?t:W(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),Do(this))}}function Vn(e){return he(e)?e.value:e}const Vl={get:(e,t,n)=>Vn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $o(e){return Rt(e)?e:new Proxy(e,Vl)}var zo;class ql{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zo]=!1,this._dirty=!0,this.effect=new gi(t,()=>{this._dirty||(this._dirty=!0,Do(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=W(this);return Ro(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}zo="__v_isReadonly";function Xl(e,t,n=!1){let r,i;const a=j(e);return a?(r=e,i=De):(r=e.get,i=e.set),new ql(r,i,a||!i,n)}function lt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){cr(a,t,n)}return i}function Se(e,t,n,r){if(j(e)){const a=lt(e,t,n,r);return a&&yo(a)&&a.catch(o=>{cr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Se(e[a],t,n,r));return i}function cr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){lt(l,null,10,[e,o,s]);return}}Gl(e,n,i,r)}function Gl(e,t,n,r=!0){console.error(e)}let sn=!1,Ur=!1;const pe=[];let Ue=0;const Dt=[];let Xe=null,xt=0;const jo=Promise.resolve();let wi=null;function Jl(e){const t=wi||jo;return e?t.then(this?e.bind(this):e):t}function Ql(e){let t=Ue+1,n=pe.length;for(;t<n;){const r=t+n>>>1;ln(pe[r])<e?t=r+1:n=r}return t}function Ai(e){(!pe.length||!pe.includes(e,sn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?pe.push(e):pe.splice(Ql(e.id),0,e),Ho())}function Ho(){!sn&&!Ur&&(Ur=!0,wi=jo.then(Uo))}function Zl(e){const t=pe.indexOf(e);t>Ue&&pe.splice(t,1)}function ef(e){F(e)?Dt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?xt+1:xt))&&Dt.push(e),Ho()}function ua(e,t=sn?Ue+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Bo(e){if(Dt.length){const t=[...new Set(Dt)];if(Dt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>ln(n)-ln(r)),xt=0;xt<Xe.length;xt++)Xe[xt]();Xe=null,xt=0}}const ln=e=>e.id==null?1/0:e.id,tf=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Uo(e){Ur=!1,sn=!0,pe.sort(tf);const t=De;try{for(Ue=0;Ue<pe.length;Ue++){const n=pe[Ue];n&&n.active!==!1&&lt(n,null,14)}}finally{Ue=0,pe.length=0,Bo(),sn=!1,wi=null,(pe.length||Dt.length)&&Uo()}}function nf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||J;p&&(i=n.map(x=>x.trim())),m&&(i=n.map(wo))}let s,l=r[s=Tr(t)]||r[s=Tr(Ke(t))];!l&&a&&(l=r[s=Tr(Ut(t))]),l&&Se(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(f,e,6,i)}}function Wo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!j(e)){const l=f=>{const u=Wo(f,t,!0);u&&(s=!0,ue(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ee(e)&&r.set(e,null),null):(F(a)?a.forEach(l=>o[l]=null):ue(o,a),ee(e)&&r.set(e,o),o)}function ur(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Ut(t))||U(e,t))}let ye=null,dr=null;function qn(e){const t=ye;return ye=e,dr=e&&e.type.__scopeId||null,t}function rf(e){dr=e}function af(){dr=null}function mr(e,t=ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&wa(-1);const a=qn(t),o=e(...i);return qn(a),r._d&&wa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Or(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:x,ctx:I,inheritAttrs:C}=e;let $,y;const E=qn(e);try{if(n.shapeFlag&4){const R=i||r;$=Be(u.call(R,R,m,a,x,p,I)),y=l}else{const R=t;$=Be(R.length>1?R(a,{attrs:l,slots:s,emit:f}):R(a,null)),y=t.props?l:of(l)}}catch(R){Zt.length=0,cr(R,e,1),$=q(Ie)}let L=$;if(y&&C!==!1){const R=Object.keys(y),{shapeFlag:H}=L;R.length&&H&7&&(o&&R.some(ui)&&(y=sf(y,o)),L=ct(L,y))}return n.dirs&&(L=ct(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),$=L,qn(E),$}const of=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},sf=(e,t)=>{const n={};for(const r in e)(!ui(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function lf(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?da(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!ur(f,p))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?da(r,o,f):!0:!!o;return!1}function da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!ur(n,a))return!0}return!1}function ff({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cf=e=>e.__isSuspense;function uf(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ef(e)}function df(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Sr(e,t,n=!1){const r=ce||ye;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const ma={};function jn(e,t,n){return Yo(e,t,n)}function Yo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=J){const s=ce;let l,f=!1,u=!1;if(he(e)?(l=()=>e.value,f=Kn(e)):Rt(e)?(l=()=>e,r=!0):F(e)?(u=!0,f=e.some(y=>Rt(y)||Kn(y)),l=()=>e.map(y=>{if(he(y))return y.value;if(Rt(y))return Nt(y);if(j(y))return lt(y,s,2)})):j(e)?t?l=()=>lt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Se(e,s,3,[p])}:l=De,t&&r){const y=l;l=()=>Nt(y())}let m,p=y=>{m=$.onStop=()=>{lt(y,s,4)}};if(dn)return p=De,t?n&&Se(t,s,3,[l(),u?[]:void 0,p]):l(),De;let x=u?[]:ma;const I=()=>{if(!!$.active)if(t){const y=$.run();(r||f||(u?y.some((E,L)=>an(E,x[L])):an(y,x)))&&(m&&m(),Se(t,s,3,[y,x===ma?void 0:x,p]),x=y)}else $.run()};I.allowRecurse=!!t;let C;i==="sync"?C=I:i==="post"?C=()=>we(I,s&&s.suspense):(I.pre=!0,s&&(I.id=s.uid),C=()=>Ai(I));const $=new gi(l,C);return t?n?I():x=$.run():i==="post"?we($.run.bind($),s&&s.suspense):$.run(),()=>{$.stop(),s&&s.scope&&di(s.scope.effects,$)}}function mf(e,t,n){const r=this.proxy,i=se(e)?e.includes(".")?Ko(r,e):()=>r[e]:e.bind(r,r);let a;j(t)?a=t:(a=t.handler,n=t);const o=ce;Ht(this);const s=Yo(i,a.bind(r),n);return o?Ht(o):Tt(),s}function Ko(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Nt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))Nt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Nt(e[n],t);else if(bo(e)||Ft(e))e.forEach(n=>{Nt(n,t)});else if(_o(e))for(const n in e)Nt(e[n],t);return e}function Vo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gr(()=>{e.isMounted=!0}),Jo(()=>{e.isUnmounting=!0}),e}const Ce=[Function,Array],pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(e,{slots:t}){const n=ms(),r=Vo();let i;return()=>{const a=t.default&&ki(t.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const C of a)if(C.type!==Ie){o=C;break}}const s=W(e),{mode:l}=s;if(r.isLeaving)return Ir(o);const f=pa(o);if(!f)return Ir(o);const u=fn(f,s,r,n);cn(f,u);const m=n.subTree,p=m&&pa(m);let x=!1;const{getTransitionKey:I}=f.type;if(I){const C=I();i===void 0?i=C:C!==i&&(i=C,x=!0)}if(p&&p.type!==Ie&&(!_t(f,p)||x)){const C=fn(p,s,r,n);if(cn(p,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},Ir(o);l==="in-out"&&f.type!==Ie&&(C.delayLeave=($,y,E)=>{const L=qo(r,p);L[String(p.key)]=p,$._leaveCb=()=>{y(),$._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},hf=pf;function qo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fn(e,t,n,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:x,onLeaveCancelled:I,onBeforeAppear:C,onAppear:$,onAfterAppear:y,onAppearCancelled:E}=t,L=String(e.key),R=qo(n,e),H=(z,Y)=>{z&&Se(z,r,9,Y)},oe=(z,Y)=>{const V=Y[1];H(z,Y),F(z)?z.every(de=>de.length<=1)&&V():z.length<=1&&V()},ne={mode:a,persisted:o,beforeEnter(z){let Y=s;if(!n.isMounted)if(i)Y=C||s;else return;z._leaveCb&&z._leaveCb(!0);const V=R[L];V&&_t(e,V)&&V.el._leaveCb&&V.el._leaveCb(),H(Y,[z])},enter(z){let Y=l,V=f,de=u;if(!n.isMounted)if(i)Y=$||l,V=y||f,de=E||u;else return;let N=!1;const te=z._enterCb=Ae=>{N||(N=!0,Ae?H(de,[z]):H(V,[z]),ne.delayedLeave&&ne.delayedLeave(),z._enterCb=void 0)};Y?oe(Y,[z,te]):te()},leave(z,Y){const V=String(e.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return Y();H(m,[z]);let de=!1;const N=z._leaveCb=te=>{de||(de=!0,Y(),te?H(I,[z]):H(x,[z]),z._leaveCb=void 0,R[V]===e&&delete R[V])};R[V]=e,p?oe(p,[z,N]):N()},clone(z){return fn(z,t,n,r)}};return ne}function Ir(e){if(pr(e))return e=ct(e),e.children=null,e}function pa(e){return pr(e)?e.children?e.children[0]:void 0:e}function cn(e,t){e.shapeFlag&6&&e.component?cn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ki(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===ve?(o.patchFlag&128&&i++,r=r.concat(ki(o.children,t,s))):(t||o.type!==Ie)&&r.push(s!=null?ct(o,{key:s}):o)}if(i>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}function Ne(e){return j(e)?{setup:e,name:e.name}:e}const Qt=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function gf(e,t){Xo(e,"a",t)}function vf(e,t){Xo(e,"da",t)}function Xo(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(hr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)pr(i.parent.vnode)&&bf(r,t,n,i),i=i.parent}}function bf(e,t,n,r){const i=hr(t,e,r,!0);Qo(()=>{di(r[t],i)},n)}function hr(e,t,n=ce,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wt(),Ht(n);const s=Se(t,n,e,o);return Tt(),Yt(),s});return r?i.unshift(a):i.push(a),a}}const et=e=>(t,n=ce)=>(!dn||e==="sp")&&hr(e,(...r)=>t(...r),n),yf=et("bm"),gr=et("m"),xf=et("bu"),Go=et("u"),Jo=et("bum"),Qo=et("um"),_f=et("sp"),wf=et("rtg"),Af=et("rtc");function kf(e,t=ce){hr("ec",e,t)}function gt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Wt(),Se(l,n,8,[e.el,s,e,t]),Yt())}}const Ei="components";function Ti(e,t){return es(Ei,e,!0,t)||e}const Zo=Symbol();function Ef(e){return se(e)?es(Ei,e,!1)||e:e||Zo}function es(e,t,n=!0,r=!1){const i=ye||ce;if(i){const a=i.type;if(e===Ei){const s=nc(a,!1);if(s&&(s===t||s===Ke(t)||s===sr(Ke(t))))return a}const o=ha(i[e]||a[e],t)||ha(i.appContext[e],t);return!o&&r?a:o}}function ha(e,t){return e&&(e[t]||e[Ke(t)]||e[sr(Ke(t))])}function Tf(e,t,n,r){let i;const a=n&&n[r];if(F(e)||se(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ee(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}function Ci(e,t,n={},r,i){if(ye.isCE||ye.parent&&Qt(ye.parent)&&ye.parent.isCE)return q("slot",t==="default"?null:{name:t},r&&r());let a=e[t];a&&a._c&&(a._d=!1),be();const o=a&&ts(a(n)),s=bn(ve,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function ts(e){return e.some(t=>Jn(t)?!(t.type===Ie||t.type===ve&&!ts(t.children)):!0)?e:null}const Wr=e=>e?ps(e)?Pi(e)||e.proxy:Wr(e.parent):null,Xn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Oi(e),$forceUpdate:e=>e.f||(e.f=()=>Ai(e.update)),$nextTick:e=>e.n||(e.n=Jl.bind(e.proxy)),$watch:e=>mf.bind(e)}),Cf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==J&&U(r,t))return o[t]=1,r[t];if(i!==J&&U(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&U(f,t))return o[t]=3,a[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Yr&&(o[t]=0)}}const u=Xn[t];let m,p;if(u)return t==="$attrs"&&Ee(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==J&&U(i,t)?(i[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==J&&U(e,o)||t!==J&&U(t,o)||(s=a[0])&&U(s,o)||U(r,o)||U(Xn,o)||U(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Yr=!0;function Of(e){const t=Oi(e),n=e.proxy,r=e.ctx;Yr=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:x,updated:I,activated:C,deactivated:$,beforeDestroy:y,beforeUnmount:E,destroyed:L,unmounted:R,render:H,renderTracked:oe,renderTriggered:ne,errorCaptured:z,serverPrefetch:Y,expose:V,inheritAttrs:de,components:N,directives:te,filters:Ae}=t;if(f&&Sf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const X=o[re];j(X)&&(r[re]=X.bind(n))}if(i){const re=i.call(n,n);ee(re)&&(e.data=fr(re))}if(Yr=!0,a)for(const re in a){const X=a[re],pt=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):De,wn=!j(X)&&j(X.set)?X.set.bind(n):De,ht=Oe({get:pt,set:wn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>ht.value,set:$e=>ht.value=$e})}if(s)for(const re in s)ns(s[re],r,n,re);if(l){const re=j(l)?l.call(n):l;Reflect.ownKeys(re).forEach(X=>{df(X,re[X])})}u&&ga(u,e,"c");function fe(re,X){F(X)?X.forEach(pt=>re(pt.bind(n))):X&&re(X.bind(n))}if(fe(yf,m),fe(gr,p),fe(xf,x),fe(Go,I),fe(gf,C),fe(vf,$),fe(kf,z),fe(Af,oe),fe(wf,ne),fe(Jo,E),fe(Qo,R),fe(_f,Y),F(V))if(V.length){const re=e.exposed||(e.exposed={});V.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:pt=>n[X]=pt})})}else e.exposed||(e.exposed={});H&&e.render===De&&(e.render=H),de!=null&&(e.inheritAttrs=de),N&&(e.components=N),te&&(e.directives=te)}function Sf(e,t,n=De,r=!1){F(e)&&(e=Kr(e));for(const i in e){const a=e[i];let o;ee(a)?"default"in a?o=Sr(a.from||i,a.default,!0):o=Sr(a.from||i):o=Sr(a),he(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function ga(e,t,n){Se(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ns(e,t,n,r){const i=r.includes(".")?Ko(n,r):()=>n[r];if(se(e)){const a=t[e];j(a)&&jn(i,a)}else if(j(e))jn(i,e.bind(n));else if(ee(e))if(F(e))e.forEach(a=>ns(a,t,n,r));else{const a=j(e.handler)?e.handler.bind(n):t[e.handler];j(a)&&jn(i,a,e)}}function Oi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Gn(l,f,o,!0)),Gn(l,t,o)),ee(t)&&a.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Gn(e,a,n,!0),i&&i.forEach(o=>Gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=If[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const If={data:va,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:yt,directives:yt,watch:Pf,provide:va,inject:Nf};function va(e,t){return t?e?function(){return ue(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Nf(e,t){return yt(Kr(e),Kr(t))}function Kr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?ue(ue(Object.create(null),e),t):t}function Pf(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=ge(e[r],t[r]);return n}function Mf(e,t,n,r=!1){const i={},a={};Yn(a,vr,1),e.propsDefaults=Object.create(null),rs(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ul(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Lf(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=W(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(ur(e.emitsOptions,p))continue;const x=t[p];if(l)if(U(a,p))x!==a[p]&&(a[p]=x,f=!0);else{const I=Ke(p);i[I]=Vr(l,s,I,x,e,!1)}else x!==a[p]&&(a[p]=x,f=!0)}}}else{rs(e,t,i,a)&&(f=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=Ut(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Vr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!U(t,m)&&!0)&&(delete a[m],f=!0)}f&&Ge(e,"set","$attrs")}function rs(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(zn(l))continue;const f=t[l];let u;i&&U(i,u=Ke(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:ur(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=W(n),f=s||J;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Vr(i,l,m,f[m],e,!U(f,m))}}return o}function Vr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(Ht(i),r=f[n]=l.call(null,t),Tt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}function is(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!j(e)){const u=m=>{l=!0;const[p,x]=is(m,t,!0);ue(o,p),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return ee(e)&&r.set(e,Lt),Lt;if(F(a))for(let u=0;u<a.length;u++){const m=Ke(a[u]);ba(m)&&(o[m]=J)}else if(a)for(const u in a){const m=Ke(u);if(ba(m)){const p=a[u],x=o[m]=F(p)||j(p)?{type:p}:p;if(x){const I=_a(Boolean,x.type),C=_a(String,x.type);x[0]=I>-1,x[1]=C<0||I<C,(I>-1||U(x,"default"))&&s.push(m)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function ba(e){return e[0]!=="$"}function ya(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function xa(e,t){return ya(e)===ya(t)}function _a(e,t){return F(t)?t.findIndex(n=>xa(n,e)):j(t)&&xa(t,e)?0:-1}const as=e=>e[0]==="_"||e==="$stable",Si=e=>F(e)?e.map(Be):[Be(e)],Ff=(e,t,n)=>{if(t._n)return t;const r=mr((...i)=>Si(t(...i)),n);return r._c=!1,r},os=(e,t,n)=>{const r=e._ctx;for(const i in e){if(as(i))continue;const a=e[i];if(j(a))t[i]=Ff(i,a,r);else if(a!=null){const o=Si(a);t[i]=()=>o}}},ss=(e,t)=>{const n=Si(t);e.slots.default=()=>n},Rf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Yn(t,"_",n)):os(t,e.slots={})}else e.slots={},t&&ss(e,t);Yn(e.slots,vr,1)},Df=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(ue(i,t),!n&&s===1&&delete i._):(a=!t.$stable,os(t,i)),o=t}else t&&(ss(e,t),o={default:1});if(a)for(const s in i)!as(s)&&!(s in o)&&delete i[s]};function ls(){return{app:null,config:{isNativeTag:fl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function zf(e,t){return function(r,i=null){j(r)||(r=Object.assign({},r)),i!=null&&!ee(i)&&(i=null);const a=ls(),o=new Set;let s=!1;const l=a.app={_uid:$f++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:ic,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&j(f.install)?(o.add(f),f.install(l,...u)):j(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!s){const p=q(r,i);return p.appContext=a,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Pi(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l}};return l}}function qr(e,t,n,r,i=!1){if(F(e)){e.forEach((p,x)=>qr(p,t&&(F(t)?t[x]:t),n,r,i));return}if(Qt(r)&&!i)return;const a=r.shapeFlag&4?Pi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(se(f)?(u[f]=null,U(m,f)&&(m[f]=null)):he(f)&&(f.value=null)),j(l))lt(l,s,12,[o,u]);else{const p=se(l),x=he(l);if(p||x){const I=()=>{if(e.f){const C=p?u[l]:l.value;i?F(C)&&di(C,a):F(C)?C.includes(a)||C.push(a):p?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,we(I,n)):I()}}}const we=uf;function jf(e){return Hf(e)}function Hf(e,t){const n=hl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:x=De,insertStaticContent:I}=e,C=(c,d,h,v=null,g=null,w=null,k=!1,_=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!_t(c,d)&&(v=An(c),$e(c,g,w,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:O}=d;switch(b){case Ii:$(c,d,h,v);break;case Ie:y(c,d,h,v);break;case Hn:c==null&&E(d,h,v,k);break;case ve:N(c,d,h,v,g,w,k,_,A);break;default:O&1?H(c,d,h,v,g,w,k,_,A):O&6?te(c,d,h,v,g,w,k,_,A):(O&64||O&128)&&b.process(c,d,h,v,g,w,k,_,A,St)}P!=null&&g&&qr(P,c&&c.ref,w,d||c,!d)},$=(c,d,h,v)=>{if(c==null)r(d.el=s(d.children),h,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},y=(c,d,h,v)=>{c==null?r(d.el=l(d.children||""),h,v):d.el=c.el},E=(c,d,h,v)=>{[c.el,c.anchor]=I(c.children,d,h,v,c.el,c.anchor)},L=({el:c,anchor:d},h,v)=>{let g;for(;c&&c!==d;)g=p(c),r(c,h,v),c=g;r(d,h,v)},R=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),i(c),c=h;i(d)},H=(c,d,h,v,g,w,k,_,A)=>{k=k||d.type==="svg",c==null?oe(d,h,v,g,w,k,_,A):Y(c,d,g,w,k,_,A)},oe=(c,d,h,v,g,w,k,_)=>{let A,b;const{type:P,props:O,shapeFlag:M,transition:D,dirs:B}=c;if(A=c.el=o(c.type,w,O&&O.is,O),M&8?u(A,c.children):M&16&&z(c.children,A,null,v,g,w&&P!=="foreignObject",k,_),B&&gt(c,null,v,"created"),O){for(const K in O)K!=="value"&&!zn(K)&&a(A,K,null,O[K],w,c.children,v,g,Ve);"value"in O&&a(A,"value",null,O.value),(b=O.onVnodeBeforeMount)&&je(b,v,c)}ne(A,c,c.scopeId,k,v),B&&gt(c,null,v,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;G&&D.beforeEnter(A),r(A,d,h),((b=O&&O.onVnodeMounted)||G||B)&&we(()=>{b&&je(b,v,c),G&&D.enter(A),B&&gt(c,null,v,"mounted")},g)},ne=(c,d,h,v,g)=>{if(h&&x(c,h),v)for(let w=0;w<v.length;w++)x(c,v[w]);if(g){let w=g.subTree;if(d===w){const k=g.vnode;ne(c,k,k.scopeId,k.slotScopeIds,g.parent)}}},z=(c,d,h,v,g,w,k,_,A=0)=>{for(let b=A;b<c.length;b++){const P=c[b]=_?ot(c[b]):Be(c[b]);C(null,P,d,h,v,g,w,k,_)}},Y=(c,d,h,v,g,w,k)=>{const _=d.el=c.el;let{patchFlag:A,dynamicChildren:b,dirs:P}=d;A|=c.patchFlag&16;const O=c.props||J,M=d.props||J;let D;h&&vt(h,!1),(D=M.onVnodeBeforeUpdate)&&je(D,h,d,c),P&&gt(d,c,h,"beforeUpdate"),h&&vt(h,!0);const B=g&&d.type!=="foreignObject";if(b?V(c.dynamicChildren,b,_,h,v,B,w):k||X(c,d,_,null,h,v,B,w,!1),A>0){if(A&16)de(_,d,O,M,h,v,g);else if(A&2&&O.class!==M.class&&a(_,"class",null,M.class,g),A&4&&a(_,"style",O.style,M.style,g),A&8){const G=d.dynamicProps;for(let K=0;K<G.length;K++){const ae=G[K],Pe=O[ae],It=M[ae];(It!==Pe||ae==="value")&&a(_,ae,Pe,It,g,c.children,h,v,Ve)}}A&1&&c.children!==d.children&&u(_,d.children)}else!k&&b==null&&de(_,d,O,M,h,v,g);((D=M.onVnodeUpdated)||P)&&we(()=>{D&&je(D,h,d,c),P&&gt(d,c,h,"updated")},v)},V=(c,d,h,v,g,w,k)=>{for(let _=0;_<d.length;_++){const A=c[_],b=d[_],P=A.el&&(A.type===ve||!_t(A,b)||A.shapeFlag&70)?m(A.el):h;C(A,b,P,null,v,g,w,k,!0)}},de=(c,d,h,v,g,w,k)=>{if(h!==v){if(h!==J)for(const _ in h)!zn(_)&&!(_ in v)&&a(c,_,h[_],null,k,d.children,g,w,Ve);for(const _ in v){if(zn(_))continue;const A=v[_],b=h[_];A!==b&&_!=="value"&&a(c,_,b,A,k,d.children,g,w,Ve)}"value"in v&&a(c,"value",h.value,v.value)}},N=(c,d,h,v,g,w,k,_,A)=>{const b=d.el=c?c.el:s(""),P=d.anchor=c?c.anchor:s("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:D}=d;D&&(_=_?_.concat(D):D),c==null?(r(b,h,v),r(P,h,v),z(d.children,h,P,g,w,k,_,A)):O>0&&O&64&&M&&c.dynamicChildren?(V(c.dynamicChildren,M,h,g,w,k,_),(d.key!=null||g&&d===g.subTree)&&fs(c,d,!0)):X(c,d,h,P,g,w,k,_,A)},te=(c,d,h,v,g,w,k,_,A)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?g.ctx.activate(d,h,v,k,A):Ae(d,h,v,g,w,k,A):Vt(c,d,A)},Ae=(c,d,h,v,g,w,k)=>{const _=c.component=Jf(c,v,g);if(pr(c)&&(_.ctx.renderer=St),Qf(_),_.asyncDep){if(g&&g.registerDep(_,fe),!c.el){const A=_.subTree=q(Ie);y(null,A,d,h)}return}fe(_,c,d,h,g,w,k)},Vt=(c,d,h)=>{const v=d.component=c.component;if(lf(c,d,h))if(v.asyncDep&&!v.asyncResolved){re(v,d,h);return}else v.next=d,Zl(v.update),v.update();else d.el=c.el,v.vnode=d},fe=(c,d,h,v,g,w,k)=>{const _=()=>{if(c.isMounted){let{next:P,bu:O,u:M,parent:D,vnode:B}=c,G=P,K;vt(c,!1),P?(P.el=B.el,re(c,P,k)):P=B,O&&Cr(O),(K=P.props&&P.props.onVnodeBeforeUpdate)&&je(K,D,P,B),vt(c,!0);const ae=Or(c),Pe=c.subTree;c.subTree=ae,C(Pe,ae,m(Pe.el),An(Pe),c,g,w),P.el=ae.el,G===null&&ff(c,ae.el),M&&we(M,g),(K=P.props&&P.props.onVnodeUpdated)&&we(()=>je(K,D,P,B),g)}else{let P;const{el:O,props:M}=d,{bm:D,m:B,parent:G}=c,K=Qt(d);if(vt(c,!1),D&&Cr(D),!K&&(P=M&&M.onVnodeBeforeMount)&&je(P,G,d),vt(c,!0),O&&Er){const ae=()=>{c.subTree=Or(c),Er(O,c.subTree,c,g,null)};K?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ae()):ae()}else{const ae=c.subTree=Or(c);C(null,ae,h,v,c,g,w),d.el=ae.el}if(B&&we(B,g),!K&&(P=M&&M.onVnodeMounted)){const ae=d;we(()=>je(P,G,ae),g)}(d.shapeFlag&256||G&&Qt(G.vnode)&&G.vnode.shapeFlag&256)&&c.a&&we(c.a,g),c.isMounted=!0,d=h=v=null}},A=c.effect=new gi(_,()=>Ai(b),c.scope),b=c.update=()=>A.run();b.id=c.uid,vt(c,!0),b()},re=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,Lf(c,d.props,v,h),Df(c,d.children,h),Wt(),ua(),Yt()},X=(c,d,h,v,g,w,k,_,A=!1)=>{const b=c&&c.children,P=c?c.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:D}=d;if(M>0){if(M&128){wn(b,O,h,v,g,w,k,_,A);return}else if(M&256){pt(b,O,h,v,g,w,k,_,A);return}}D&8?(P&16&&Ve(b,g,w),O!==b&&u(h,O)):P&16?D&16?wn(b,O,h,v,g,w,k,_,A):Ve(b,g,w,!0):(P&8&&u(h,""),D&16&&z(O,h,v,g,w,k,_,A))},pt=(c,d,h,v,g,w,k,_,A)=>{c=c||Lt,d=d||Lt;const b=c.length,P=d.length,O=Math.min(b,P);let M;for(M=0;M<O;M++){const D=d[M]=A?ot(d[M]):Be(d[M]);C(c[M],D,h,null,g,w,k,_,A)}b>P?Ve(c,g,w,!0,!1,O):z(d,h,v,g,w,k,_,A,O)},wn=(c,d,h,v,g,w,k,_,A)=>{let b=0;const P=d.length;let O=c.length-1,M=P-1;for(;b<=O&&b<=M;){const D=c[b],B=d[b]=A?ot(d[b]):Be(d[b]);if(_t(D,B))C(D,B,h,null,g,w,k,_,A);else break;b++}for(;b<=O&&b<=M;){const D=c[O],B=d[M]=A?ot(d[M]):Be(d[M]);if(_t(D,B))C(D,B,h,null,g,w,k,_,A);else break;O--,M--}if(b>O){if(b<=M){const D=M+1,B=D<P?d[D].el:v;for(;b<=M;)C(null,d[b]=A?ot(d[b]):Be(d[b]),h,B,g,w,k,_,A),b++}}else if(b>M)for(;b<=O;)$e(c[b],g,w,!0),b++;else{const D=b,B=b,G=new Map;for(b=B;b<=M;b++){const ke=d[b]=A?ot(d[b]):Be(d[b]);ke.key!=null&&G.set(ke.key,b)}let K,ae=0;const Pe=M-B+1;let It=!1,Zi=0;const qt=new Array(Pe);for(b=0;b<Pe;b++)qt[b]=0;for(b=D;b<=O;b++){const ke=c[b];if(ae>=Pe){$e(ke,g,w,!0);continue}let ze;if(ke.key!=null)ze=G.get(ke.key);else for(K=B;K<=M;K++)if(qt[K-B]===0&&_t(ke,d[K])){ze=K;break}ze===void 0?$e(ke,g,w,!0):(qt[ze-B]=b+1,ze>=Zi?Zi=ze:It=!0,C(ke,d[ze],h,null,g,w,k,_,A),ae++)}const ea=It?Bf(qt):Lt;for(K=ea.length-1,b=Pe-1;b>=0;b--){const ke=B+b,ze=d[ke],ta=ke+1<P?d[ke+1].el:v;qt[b]===0?C(null,ze,h,ta,g,w,k,_,A):It&&(K<0||b!==ea[K]?ht(ze,h,ta,2):K--)}}},ht=(c,d,h,v,g=null)=>{const{el:w,type:k,transition:_,children:A,shapeFlag:b}=c;if(b&6){ht(c.component.subTree,d,h,v);return}if(b&128){c.suspense.move(d,h,v);return}if(b&64){k.move(c,d,h,St);return}if(k===ve){r(w,d,h);for(let O=0;O<A.length;O++)ht(A[O],d,h,v);r(c.anchor,d,h);return}if(k===Hn){L(c,d,h);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,d,h),we(()=>_.enter(w),g);else{const{leave:O,delayLeave:M,afterLeave:D}=_,B=()=>r(w,d,h),G=()=>{O(w,()=>{B(),D&&D()})};M?M(w,B,G):G()}else r(w,d,h)},$e=(c,d,h,v=!1,g=!1)=>{const{type:w,props:k,ref:_,children:A,dynamicChildren:b,shapeFlag:P,patchFlag:O,dirs:M}=c;if(_!=null&&qr(_,null,h,c,!0),P&256){d.ctx.deactivate(c);return}const D=P&1&&M,B=!Qt(c);let G;if(B&&(G=k&&k.onVnodeBeforeUnmount)&&je(G,d,c),P&6)rl(c.component,h,v);else{if(P&128){c.suspense.unmount(h,v);return}D&&gt(c,null,d,"beforeUnmount"),P&64?c.type.remove(c,d,h,g,St,v):b&&(w!==ve||O>0&&O&64)?Ve(b,d,h,!1,!0):(w===ve&&O&384||!g&&P&16)&&Ve(A,d,h),v&&Ji(c)}(B&&(G=k&&k.onVnodeUnmounted)||D)&&we(()=>{G&&je(G,d,c),D&&gt(c,null,d,"unmounted")},h)},Ji=c=>{const{type:d,el:h,anchor:v,transition:g}=c;if(d===ve){nl(h,v);return}if(d===Hn){R(c);return}const w=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:_}=g,A=()=>k(h,w);_?_(c.el,w,A):A()}else w()},nl=(c,d)=>{let h;for(;c!==d;)h=p(c),i(c),c=h;i(d)},rl=(c,d,h)=>{const{bum:v,scope:g,update:w,subTree:k,um:_}=c;v&&Cr(v),g.stop(),w&&(w.active=!1,$e(k,c,d,h)),_&&we(_,d),we(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ve=(c,d,h,v=!1,g=!1,w=0)=>{for(let k=w;k<c.length;k++)$e(c[k],d,h,v,g)},An=c=>c.shapeFlag&6?An(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Qi=(c,d,h)=>{c==null?d._vnode&&$e(d._vnode,null,null,!0):C(d._vnode||null,c,d,null,null,null,h),ua(),Bo(),d._vnode=c},St={p:C,um:$e,m:ht,r:Ji,mt:Ae,mc:z,pc:X,pbc:V,n:An,o:e};let kr,Er;return t&&([kr,Er]=t(St)),{render:Qi,hydrate:kr,createApp:zf(Qi,kr)}}function vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fs(e,t,n=!1){const r=e.children,i=t.children;if(F(r)&&F(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=ot(i[a]),s.el=o.el),n||fs(o,s))}}function Bf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Uf=e=>e.__isTeleport,ve=Symbol(void 0),Ii=Symbol(void 0),Ie=Symbol(void 0),Hn=Symbol(void 0),Zt=[];let Fe=null;function be(e=!1){Zt.push(Fe=e?null:[])}function Wf(){Zt.pop(),Fe=Zt[Zt.length-1]||null}let un=1;function wa(e){un+=e}function cs(e){return e.dynamicChildren=un>0?Fe||Lt:null,Wf(),un>0&&Fe&&Fe.push(e),e}function We(e,t,n,r,i,a){return cs(xe(e,t,n,r,i,a,!0))}function bn(e,t,n,r,i){return cs(q(e,t,n,r,i,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function _t(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",us=({key:e})=>e!=null?e:null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?se(e)||he(e)||j(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function xe(e,t=null,n=null,r=0,i=null,a=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&us(t),ref:t&&Bn(t),scopeId:dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(Ni(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),un>0&&!o&&Fe&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Fe.push(l),l}const q=Yf;function Yf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Zo)&&(e=Ie),Jn(e)){const s=ct(e,t,!0);return n&&Ni(s,n),un>0&&!a&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(rc(e)&&(e=e.__vccOpts),t){t=Kf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=zt(s)),ee(l)&&(Lo(l)&&!F(l)&&(l=ue({},l)),t.style=rn(l))}const o=se(e)?1:cf(e)?128:Uf(e)?64:ee(e)?4:j(e)?2:0;return xe(e,t,n,r,i,o,a,!0)}function Kf(e){return e?Lo(e)||vr in e?ue({},e):e:null}function ct(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?qf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&us(s),ref:t&&t.ref?n&&i?F(i)?i.concat(Bn(t)):[i,Bn(t)]:Bn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ct(e.ssContent),ssFallback:e.ssFallback&&ct(e.ssFallback),el:e.el,anchor:e.anchor}}function ds(e=" ",t=0){return q(Ii,null,e,t)}function Vf(e,t){const n=q(Hn,null,e);return n.staticCount=t,n}function Aa(e="",t=!1){return t?(be(),bn(Ie,null,e)):q(Ie,null,e)}function Be(e){return e==null||typeof e=="boolean"?q(Ie):F(e)?q(ve,null,e.slice()):typeof e=="object"?ot(e):q(Ii,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ct(e)}function Ni(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ni(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(vr in t)?t._ctx=ye:i===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[ds(t)]):n=8);e.children=t,e.shapeFlag|=n}function qf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=zt([t.class,r.class]));else if(i==="style")t.style=rn([t.style,r.style]);else if(ir(i)){const a=t[i],o=r[i];o&&a!==o&&!(F(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function je(e,t,n,r=null){Se(e,t,7,[n,r])}const Xf=ls();let Gf=0;function Jf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Xf,a={uid:Gf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:is(r,i),emitsOptions:Wo(r,i),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=nf.bind(null,a),e.ce&&e.ce(a),a}let ce=null;const ms=()=>ce||ye,Ht=e=>{ce=e,e.scope.on()},Tt=()=>{ce&&ce.scope.off(),ce=null};function ps(e){return e.vnode.shapeFlag&4}let dn=!1;function Qf(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,i=ps(e);Mf(e,n,i,t),Rf(e,r);const a=i?Zf(e,t):void 0;return dn=!1,a}function Zf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Fo(new Proxy(e.ctx,Cf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?tc(e):null;Ht(e),Wt();const a=lt(r,e,0,[e.props,i]);if(Yt(),Tt(),yo(a)){if(a.then(Tt,Tt),t)return a.then(o=>{ka(e,o,t)}).catch(o=>{cr(o,e,0)});e.asyncDep=a}else ka(e,a,t)}else hs(e,t)}function ka(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=$o(t)),hs(e,n)}let Ea;function hs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ea&&!r.render){const i=r.template||Oi(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ue(ue({isCustomElement:a,delimiters:s},o),l);r.render=Ea(i,f)}}e.render=r.render||De}Ht(e),Wt(),Of(e),Yt(),Tt()}function ec(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function tc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ec(e))},slots:e.slots,emit:e.emit,expose:t}}function Pi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($o(Fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xn)return Xn[n](e)}}))}function nc(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function rc(e){return j(e)&&"__vccOpts"in e}const Oe=(e,t)=>Xl(e,t,dn);function gs(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?Jn(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jn(n)&&(n=[n]),q(e,t,n))}const ic="3.2.40",ac="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,Ta=wt&&wt.createElement("template"),oc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?wt.createElementNS(ac,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ta.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ta.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lc(e,t,n){const r=e.style,i=se(n);if(n&&!i){for(const a in n)Xr(r,a,n[a]);if(t&&!se(t))for(const a in t)n[a]==null&&Xr(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Ca=/\s*!important$/;function Xr(e,t,n){if(F(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=fc(e,t);Ca.test(n)?e.setProperty(Ut(r),n.replace(Ca,""),"important"):e[r]=n}}const Oa=["Webkit","Moz","ms"],Nr={};function fc(e,t){const n=Nr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=sr(r);for(let i=0;i<Oa.length;i++){const a=Oa[i]+r;if(a in e)return Nr[t]=a}return t}const Sa="http://www.w3.org/1999/xlink";function cc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Sa,t.slice(6,t.length)):e.setAttributeNS(Sa,t,n);else{const a=al(t);n==null||a&&!go(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function uc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=go(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[vs,dc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Gr=0;const mc=Promise.resolve(),pc=()=>{Gr=0},hc=()=>Gr||(mc.then(pc),Gr=vs());function gc(e,t,n,r){e.addEventListener(t,n,r)}function vc(e,t,n,r){e.removeEventListener(t,n,r)}function bc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=yc(t);if(r){const f=a[t]=xc(r,i);gc(e,s,f,l)}else o&&(vc(e,s,o,l),a[t]=void 0)}}const Ia=/(?:Once|Passive|Capture)$/;function yc(e){let t;if(Ia.test(e)){t={};let r;for(;r=e.match(Ia);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}function xc(e,t){const n=r=>{const i=r.timeStamp||vs();(dc||i>=n.attached-1)&&Se(_c(r,n.value),t,5,[r])};return n.value=e,n.attached=hc(),n}function _c(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Na=/^on[a-z]/,wc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?sc(e,r,i):t==="style"?lc(e,n,r):ir(t)?ui(t)||bc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,r,i))?uc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cc(e,t,r,i))};function Ac(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Na.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Na.test(t)&&se(n)?!1:t in e}const rt="transition",Xt="animation",bs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kc=ue({},hf.props,bs),bt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Pa=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function Ec(e){const t={};for(const N in e)N in bs||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,I=Tc(i),C=I&&I[0],$=I&&I[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:L,onLeave:R,onLeaveCancelled:H,onBeforeAppear:oe=y,onAppear:ne=E,onAppearCancelled:z=L}=t,Y=(N,te,Ae)=>{at(N,te?u:s),at(N,te?f:o),Ae&&Ae()},V=(N,te)=>{N._isLeaving=!1,at(N,m),at(N,x),at(N,p),te&&te()},de=N=>(te,Ae)=>{const Vt=N?ne:E,fe=()=>Y(te,N,Ae);bt(Vt,[te,fe]),Ma(()=>{at(te,N?l:a),qe(te,N?u:s),Pa(Vt)||La(te,r,C,fe)})};return ue(t,{onBeforeEnter(N){bt(y,[N]),qe(N,a),qe(N,o)},onBeforeAppear(N){bt(oe,[N]),qe(N,l),qe(N,f)},onEnter:de(!1),onAppear:de(!0),onLeave(N,te){N._isLeaving=!0;const Ae=()=>V(N,te);qe(N,m),xs(),qe(N,p),Ma(()=>{!N._isLeaving||(at(N,m),qe(N,x),Pa(R)||La(N,r,$,Ae))}),bt(R,[N,Ae])},onEnterCancelled(N){Y(N,!1),bt(L,[N])},onAppearCancelled(N){Y(N,!0),bt(z,[N])},onLeaveCancelled(N){V(N),bt(H,[N])}})}function Tc(e){if(e==null)return null;if(ee(e))return[Pr(e.enter),Pr(e.leave)];{const t=Pr(e);return[t,t]}}function Pr(e){return wo(e)}function qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function at(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ma(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cc=0;function La(e,t,n,r){const i=e._endId=++Cc,a=()=>{i===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:s,propCount:l}=ys(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),a()},p=x=>{x.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function ys(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(rt+"Delay"),a=r(rt+"Duration"),o=Fa(i,a),s=r(Xt+"Delay"),l=r(Xt+"Duration"),f=Fa(s,l);let u=null,m=0,p=0;t===rt?o>0&&(u=rt,m=o,p=a.length):t===Xt?f>0&&(u=Xt,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?rt:Xt:null,p=u?u===rt?a.length:l.length:0);const x=u===rt&&/\b(transform|all)(,|$)/.test(n[rt+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:x}}function Fa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ra(n)+Ra(e[r])))}function Ra(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function xs(){return document.body.offsetHeight}const _s=new WeakMap,ws=new WeakMap,Oc={name:"TransitionGroup",props:ue({},kc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ms(),r=Vo();let i,a;return Go(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Pc(i[0].el,n.vnode.el,o))return;i.forEach(Sc),i.forEach(Ic);const s=i.filter(Nc);xs(),s.forEach(l=>{const f=l.el,u=f.style;qe(f,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",m),f._moveCb=null,at(f,o))};f.addEventListener("transitionend",m)})}),()=>{const o=W(e),s=Ec(o);let l=o.tag||ve;i=a,a=t.default?ki(t.default()):[];for(let f=0;f<a.length;f++){const u=a[f];u.key!=null&&cn(u,fn(u,s,r,n))}if(i)for(let f=0;f<i.length;f++){const u=i[f];cn(u,fn(u,s,r,n)),_s.set(u,u.el.getBoundingClientRect())}return q(l,null,a)}}},As=Oc;function Sc(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Ic(e){ws.set(e,e.el.getBoundingClientRect())}function Nc(e){const t=_s.get(e),n=ws.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${r}px,${i}px)`,a.transitionDuration="0s",e}}function Pc(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=ys(r);return i.removeChild(r),a}const Mc=ue({patchProp:wc},oc);let Da;function Lc(){return Da||(Da=jf(Mc))}const Fc=(...e)=>{const t=Lc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Rc(r);if(!i)return;const a=t._component;!j(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Rc(e){return se(e)?document.querySelector(e):e}function Dc(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(i){i(n)}),(r=e.get("*"))&&r.slice().map(function(i){i(t,n)})}}}const Qn=Dc(),ks=new Map,$a={x:["left","center","right"],y:["top","bottom"]},$c=(e=>()=>e++)(0),zc=e=>typeof e!="string"?[]:e.split(/\s+/gi).filter(t=>t),jc=e=>{typeof e=="string"&&(e=zc(e));let t=null,n=null;return e.forEach(r=>{$a.y.indexOf(r)!==-1&&(n=r),$a.x.indexOf(r)!==-1&&(t=r)}),{x:t,y:n}};class Hc{constructor(t,n,r){this.remaining=n,this.callback=t,this.notifyItem=r,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Mr={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:e=>({height:[e.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},Mi=Ne({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(e,t){this.$emit("enter",e,t)},leave(e,t){this.$emit("leave",e,t)},afterLeave(){this.$emit("after-leave")}}});function Bc(e,t,n,r,i,a){return be(),bn(As,{tag:"span",css:!1,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:mr(()=>[Ci(e.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}Mi.render=Bc;Mi.__file="src/VelocityGroup.vue";var Li=Ne({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function Uc(e,t,n,r,i,a){return be(),bn(As,{tag:"span",name:e.name},{default:mr(()=>[Ci(e.$slots,"default")]),_:3},8,["name"])}Li.render=Uc;Li.__file="src/CssGroup.vue";const Lr="[-+]?[0-9]*.?[0-9]+",za=[{name:"px",regexp:new RegExp(`^${Lr}px$`)},{name:"%",regexp:new RegExp(`^${Lr}%$`)},{name:"px",regexp:new RegExp(`^${Lr}$`)}],Wc=e=>{if(e==="auto")return{type:e,value:0};for(let t=0;t<za.length;t++){const n=za[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}},Yc=e=>{switch(typeof e){case"number":return{type:"px",value:e};case"string":return Wc(e);default:return{type:"",value:e}}},Sn={IDLE:0,DESTROYED:2};var Fi=Ne({name:"notifications",components:{VelocityGroup:Mi,CssGroup:Li},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Mr.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Mr.velocityAnimation},animationName:{type:String,default:Mr.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:ks.get("velocity"),timerControl:null}},computed:{actualWidth(){return Yc(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:e,y:t}=jc(this.position),n=this.actualWidth.value,r=this.actualWidth.type,i={width:n+r};return t&&(i[t]="0px"),e&&(e==="center"?i.left=`calc(50% - ${+n/2}${r})`:i[e]="0px"),i},active(){return this.list.filter(e=>e.state!==Sn.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){Qn.on("add",this.addItem),Qn.on("close",this.closeItem)},methods:{destroyIfNecessary(e){this.$emit("click",e),this.closeOnClick&&this.destroy(e)},pauseTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)===null||e===void 0||e.pause())},resumeTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)===null||e===void 0||e.resume())},addItem(e={}){if(e.group||(e.group=""),e.data||(e.data={}),this.group!==e.group)return;if(e.clean||e.clear){this.destroyAll();return}const t=typeof e.duration=="number"?e.duration:this.duration,n=typeof e.speed=="number"?e.speed:this.speed,r=typeof e.ignoreDuplicates=="boolean"?e.ignoreDuplicates:this.ignoreDuplicates,{title:i,text:a,type:o,data:s,id:l}=e,f={id:l||$c(),title:i,text:a,type:o,state:Sn.IDLE,speed:n,length:t+2*n,data:s};t>=0&&(this.timerControl=new Hc(()=>this.destroy(f),f.length,f));const u=this.reverse?!this.botToTop:this.botToTop;let m=-1;const p=this.active.some(I=>I.title===e.title&&I.text===e.text);(!r||!p)&&(u?(this.list.push(f),this.active.length>this.max&&(m=0)):(this.list.unshift(f),this.active.length>this.max&&(m=this.active.length-1)),m!==-1&&this.destroy(this.active[m]))},closeItem(e){this.destroyById(e)},notifyClass(e){var t;return["vue-notification-template",this.classes,(t=e.type)!==null&&t!==void 0?t:""]},notifyWrapperStyle(e){return this.isVA?void 0:{transition:`all ${e.speed}ms`}},destroy(e){clearTimeout(e.timer),e.state=Sn.DESTROYED,this.clean(),this.$emit("destroy",e)},destroyById(e){const t=this.list.find(n=>n.id===e);t&&this.destroy(t)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(e,t){var n;const r=(n=this.animation)===null||n===void 0?void 0:n[e];return typeof r=="function"?r.call(this,t):r},enter(e,t){if(!this.isVA)return;const n=this.getAnimation("enter",e);this.velocity(e,n,{duration:this.speed,complete:t})},leave(e,t){if(!this.isVA)return;const n=this.getAnimation("leave",e);this.velocity(e,n,{duration:this.speed,complete:t})},clean(){this.list=this.list.filter(e=>e.state!==Sn.DESTROYED)}}});const Kc=["data-id"],Vc=["onClick"],qc=["innerHTML"],Xc=["innerHTML"];function Gc(e,t,n,r,i,a){return be(),We("div",{class:"vue-notification-group",style:rn(e.styles)},[(be(),bn(Ef(e.componentName),{name:e.animationName,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.clean},{default:mr(()=>[(be(!0),We(ve,null,Tf(e.active,o=>(be(),We("div",{key:o.id,class:"vue-notification-wrapper",style:rn(e.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:t[0]||(t[0]=(...s)=>e.pauseTimeout&&e.pauseTimeout(...s)),onMouseleave:t[1]||(t[1]=(...s)=>e.resumeTimeout&&e.resumeTimeout(...s))},[Ci(e.$slots,"body",{class:zt([e.classes,o.type]),item:o,close:()=>e.destroy(o)},()=>[Aa(" Default slot template "),xe("div",{class:zt(e.notifyClass(o)),onClick:s=>e.destroyIfNecessary(o)},[o.title?(be(),We("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,qc)):Aa("v-if",!0),xe("div",{class:"notification-content",innerHTML:o.text},null,8,Xc)],10,Vc)])],44,Kc))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function Jc(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Qc=`
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

`;Jc(Qc);Fi.render=Gc;Fi.__file="src/Notifications.vue";const br=e=>{typeof e=="string"&&(e={title:"",text:e}),typeof e=="object"&&Qn.emit("add",e)};br.close=function(e){Qn.emit("close",e)};function Zc(e,t={}){Object.entries(t).forEach(r=>ks.set(...r));const n=t.name||"notify";e.config.globalProperties["$"+n]=br,e.component(t.componentName||"notifications",Fi)}var eu={install:Zc};const ja="/assets/don-cool.c53b70d9.jpeg",tu="/assets/shiba-cool.294ad440.png",nu=["src"],ru=Ne({__name:"DynamicAvatar",setup(e){const t=()=>{document.getElementById("avatar").src=tu},n=()=>{document.getElementById("avatar").src=ja};return(r,i)=>(be(),We("header",null,[xe("img",{id:"avatar",class:"center",draggable:"false",onMouseover:i[0]||(i[0]=a=>t()),onMouseleave:i[1]||(i[1]=a=>n()),src:Vn(ja)},null,40,nu)]))}});const yr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},iu=yr(ru,[["__scopeId","data-v-b3af5c63"]]),Es=e=>(rf("data-v-2bcc1c8b"),e=e(),af(),e),au={class:"container"},ou=Es(()=>xe("img",{class:"icon",src:"https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"},null,-1)),su={class:"typed-text",id:"dynamicText"},lu=Es(()=>xe("span",{class:"blinking-cursor"},"|",-1)),fu=Ne({__name:"TypingText",props:{constantText:String,dynamicTexts:Array},setup(e){const t=e,n=70,r=10,i=1500;let a=Wl(""),o=!1,s=0,l=0;const f=async()=>{!t.dynamicTexts||(l<t.dynamicTexts[s].length?(o||(o=!0),a.value+=t.dynamicTexts[s][l],l+=1,setTimeout(f,n)):(o=!1,setTimeout(u,i)))},u=async()=>{if(!!t.dynamicTexts){if(l==0){m();return}l>0&&(o&&(o=!0),a.value=t.dynamicTexts[s].substring(0,l-1),l-=1,s+1<t.dynamicTexts.length&&t.dynamicTexts[s+1].startsWith(a.value)?m():setTimeout(u,r))}},m=()=>{!t.dynamicTexts||(o=!1,s+=1,s>=t.dynamicTexts.length&&(s=0),setTimeout(f,n))};return gr(()=>{f()}),(p,x)=>(be(),We("div",au,[ou,xe("h1",null,[ds(na(e.constantText)+" ",1),xe("span",su,na(Vn(a)),1),lu,xe("span",{class:zt(["cursor",{typing:Vn(o)}])},"\xA0",2)])]))}});const cu=yr(fu,[["__scopeId","data-v-2bcc1c8b"]]),uu={class:"social"},du={href:"https://github.com/truongdd03",target:"_blank"},mu={href:"https://www.linkedin.com/in/dong-truong/",target:"_blank"},pu={href:"https://discordapp.com/users/763404045150060605",target:"_blank"},hu=Ne({__name:"SocialInformation",setup(e){const t=async()=>{const n="dong23102003@gmail.com";await navigator.clipboard.writeText(n),br({title:"Copied email address!"})};return(n,r)=>{const i=Ti("font-awesome-icon");return be(),We("header",null,[xe("div",uu,[xe("a",du,[q(i,{class:"icon",icon:"fa-brands fa-github",inverse:""})]),xe("a",mu,[q(i,{class:"icon",icon:"fa-brands fa-linkedin",inverse:""})]),xe("a",pu,[q(i,{class:"icon",icon:"fa-brands fa-discord",inverse:""})]),q(i,{class:"icon",icon:"fa-solid fa-envelope",inverse:"",onClick:r[0]||(r[0]=a=>t())})])])}}});const gu=yr(hu,[["__scopeId","data-v-74f25403"]]);function vu(e){try{document.getElementById(e).scrollIntoView({behavior:"smooth"})}catch(t){throw new Error(t)}}const bu={class:"wrapper black-background full"},yu={class:"icon-wrapper"},xu=Ne({__name:"IntroductionPane",setup(e){const t=["Don Truong","\u0110\xF4ng Tr\u01B0\u01A1ng","from Vietnam","a sophomore at MSU","a former SWE Intern at Holistics","a former SWE Intern at OED","a former SWE Intern at Chang's Kitchen","a dog person :)"],n=()=>{vu("experience")};return(r,i)=>{const a=Ti("font-awesome-icon");return be(),We("div",bu,[q(iu),q(gu),q(cu,{constantText:"Hi, I'm ",dynamicTexts:t}),xe("div",yu,[q(a,{class:"scroll-icon",icon:"fa-solid fa-circle-arrow-down",inverse:"",onClick:i[0]||(i[0]=o=>n())})])])}}});const _u=yr(xu,[["__scopeId","data-v-e6cb24c5"]]),wu="/assets/shiba-inu-studying.3ca6bfdb.gif";function Au(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var ku=`
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
`;Au(ku);const Eu={class:"wrapper full"},Tu=Vf('<div class="title-wrapper"><h1 class="title">Experience</h1><img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif"></div><img src="'+wu+'"><h1 class="green">Work in progress :(</h1>',3),Cu=[Tu],Ou=Ne({__name:"ExperiencePane",setup(e){return(t,n)=>(be(),We("div",Eu,Cu))}}),Su=Ne({__name:"App",setup(e){return gr(()=>{br({title:"Contruction zone!",type:"warn",text:"This website is a work in progress. Some features may not work properly."})}),(t,n)=>{const r=Ti("notifications");return be(),We(ve,null,[q(_u,{id:"introduction"}),q(Ou,{id:"experience"}),q(r,{class:"notification",position:"bottom right"})],64)}}});const me={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Ha={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[me.STARTS_WITH,me.CONTAINS,me.NOT_CONTAINS,me.ENDS_WITH,me.EQUALS,me.NOT_EQUALS],numeric:[me.EQUALS,me.NOT_EQUALS,me.LESS_THAN,me.LESS_THAN_OR_EQUAL_TO,me.GREATER_THAN,me.GREATER_THAN_OR_EQUAL_TO],date:[me.DATE_IS,me.DATE_IS_NOT,me.DATE_BEFORE,me.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},Iu=Symbol();var Nu={install:(e,t)=>{let n=t?{...Ha,...t}:{...Ha};const r={config:fr(n)};e.config.globalProperties.$primevue=r,e.provide(Iu,r)}};function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Pu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ua(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mu(e,t,n){return t&&Ua(e.prototype,t),n&&Ua(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ri(e,t){return Fu(e)||Du(e,t)||Ts(e,t)||zu()}function yn(e){return Lu(e)||Ru(e)||Ts(e)||$u()}function Lu(e){if(Array.isArray(e))return Jr(e)}function Fu(e){if(Array.isArray(e))return e}function Ru(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Du(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Ts(e,t){if(!!e){if(typeof e=="string")return Jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e,t)}}function Jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Di={},Cs={},Os=null,Ss={mark:Wa,measure:Wa};try{typeof window<"u"&&(Di=window),typeof document<"u"&&(Cs=document),typeof MutationObserver<"u"&&(Os=MutationObserver),typeof performance<"u"&&(Ss=performance)}catch{}var ju=Di.navigator||{},Ya=ju.userAgent,Ka=Ya===void 0?"":Ya,ut=Di,Z=Cs,Va=Os,In=Ss;ut.document;var tt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",Is=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),Nn,Pn,Mn,Ln,Fn,Je="___FONT_AWESOME___",Qr=16,Ns="fa",Ps="svg-inline--fa",Ct="data-fa-i2svg",Zr="data-fa-pseudo-element",Hu="data-fa-pseudo-element-pending",$i="data-prefix",zi="data-icon",qa="fontawesome-i2svg",Bu="async",Uu=["HTML","HEAD","STYLE","SCRIPT"],Ms=function(){try{return!0}catch{return!1}}(),Q="classic",ie="sharp",ji=[Q,ie];function xn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var mn=xn((Nn={},le(Nn,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Nn,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),Nn)),pn=xn((Pn={},le(Pn,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Pn,ie,{solid:"fass"}),Pn)),hn=xn((Mn={},le(Mn,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Mn,ie,{fass:"fa-solid"}),Mn)),Wu=xn((Ln={},le(Ln,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Ln,ie,{"fa-solid":"fass"}),Ln)),Yu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ls="fa-layers-text",Ku=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vu=xn((Fn={},le(Fn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Fn,ie,{900:"fass"}),Fn)),Fs=[1,2,3,4,5,6,7,8,9,10],qu=Fs.concat([11,12,13,14,15,16,17,18,19,20]),Xu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gn=new Set;Object.keys(pn[Q]).map(gn.add.bind(gn));Object.keys(pn[ie]).map(gn.add.bind(gn));var Gu=[].concat(ji,yn(gn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Fs.map(function(e){return"".concat(e,"x")})).concat(qu.map(function(e){return"w-".concat(e)})),en=ut.FontAwesomeConfig||{};function Ju(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var Zu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zu.forEach(function(e){var t=Ri(e,2),n=t[0],r=t[1],i=Qu(Ju(n));i!=null&&(en[r]=i)})}var Rs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ns,replacementClass:Ps,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Bt=T(T({},Rs),en);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var S={};Object.keys(Rs).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Bt[e]=n,tn.forEach(function(r){return r(S)})},get:function(){return Bt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,tn.forEach(function(n){return n(S)})},get:function(){return Bt.cssPrefix}});ut.FontAwesomeConfig=S;var tn=[];function ed(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var it=Qr,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function td(e){if(!(!e||!tt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Z.head.insertBefore(t,r),e}}var nd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=nd[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Hi(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ds(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ds(e[n]),'" ')},"").trim()}function xr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Bi(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function id(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function ad(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,i=e.height,a=i===void 0?Qr:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Is?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var od=`:root, :host {
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
}`;function $s(){var e=Ns,t=Ps,n=S.cssPrefix,r=S.replacementClass,i=od;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Xa=!1;function Fr(){S.autoAddCss&&!Xa&&(td($s()),Xa=!0)}var sd={mixout:function(){return{dom:{css:$s,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},Qe=ut||{};Qe[Je]||(Qe[Je]={});Qe[Je].styles||(Qe[Je].styles={});Qe[Je].hooks||(Qe[Je].hooks={});Qe[Je].shims||(Qe[Je].shims=[]);var Re=Qe[Je],zs=[],ld=function e(){Z.removeEventListener("DOMContentLoaded",e),er=1,zs.map(function(t){return t()})},er=!1;tt&&(er=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),er||Z.addEventListener("DOMContentLoaded",ld));function fd(e){!tt||(er?setTimeout(e,0):zs.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ds(e):"<".concat(t," ").concat(rd(r),">").concat(a.map(_n).join(""),"</").concat(t,">")}function Ga(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cd=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Rr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?cd(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function ud(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ei(e){var t=ud(e);return t.length===1?t[0].toString(16):null}function dd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ja(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ti(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ja(t);typeof Re.hooks.addPack=="function"&&!i?Re.hooks.addPack(e,Ja(t)):Re.styles[e]=T(T({},Re.styles[e]||{}),a),e==="fas"&&ti("fa",t)}var Rn,Dn,$n,Pt=Re.styles,md=Re.shims,pd=(Rn={},le(Rn,Q,Object.values(hn[Q])),le(Rn,ie,Object.values(hn[ie])),Rn),Ui=null,js={},Hs={},Bs={},Us={},Ws={},hd=(Dn={},le(Dn,Q,Object.keys(mn[Q])),le(Dn,ie,Object.keys(mn[ie])),Dn);function gd(e){return~Gu.indexOf(e)}function vd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!gd(i)?i:null}var Ys=function(){var t=function(a){return Rr(Pt,function(o,s,l){return o[l]=Rr(s,a,{}),o},{})};js=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Hs=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Ws=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Pt||S.autoFetchSvg,r=Rr(md,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Bs=r.names,Us=r.unicodes,Ui=_r(S.styleDefault,{family:S.familyDefault})};ed(function(e){Ui=_r(e.styleDefault,{family:S.familyDefault})});Ys();function Wi(e,t){return(js[e]||{})[t]}function bd(e,t){return(Hs[e]||{})[t]}function kt(e,t){return(Ws[e]||{})[t]}function Ks(e){return Bs[e]||{prefix:null,iconName:null}}function yd(e){var t=Us[e],n=Wi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return Ui}var Yi=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,i=mn[r][e],a=pn[r][e]||pn[r][i],o=e in Re.styles?e:null;return a||o||null}var Qa=($n={},le($n,Q,Object.keys(hn[Q])),le($n,ie,Object.keys(hn[ie])),$n);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,Q,"".concat(S.cssPrefix,"-").concat(Q)),le(t,ie,"".concat(S.cssPrefix,"-").concat(ie)),t),o=null,s=Q;(e.includes(a[Q])||e.some(function(f){return Qa[Q].includes(f)}))&&(s=Q),(e.includes(a[ie])||e.some(function(f){return Qa[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,u){var m=vd(S.cssPrefix,u);if(Pt[u]?(u=pd[s].includes(u)?Wu[s][u]:u,o=u,f.prefix=u):hd[s].indexOf(u)>-1?(o=u,f.prefix=_r(u,{family:s})):m?f.iconName=m:u!==S.replacementClass&&u!==a[Q]&&u!==a[ie]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var p=o==="fa"?Ks(f.iconName):{},x=kt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||x||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Pt.far&&Pt.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Yi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Pt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=dt()||"fas"),l}var xd=function(){function e(){Pu(this,e),this.definitions={}}return Mu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ti(s,o[s]);var l=hn[Q][s];l&&ti(l,o[s]),Ys()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Za=[],Mt={},$t={},_d=Object.keys($t);function wd(e,t){var n=t.mixoutsTo;return Za=e,Mt={},Object.keys($t).forEach(function(r){_d.indexOf(r)===-1&&delete $t[r]}),Za.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(a[o])})}r.provides&&r.provides($t)}),n}function ni(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Mt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function ri(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||dt();if(!!t)return t=kt(n,t)||t,Ga(Vs.definitions,n,t)||Ga(Re.styles,n,t)}var Vs=new xd,Ad=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,Ot("noAuto")},kd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Ot("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,fd(function(){Td({autoReplaceSvgRoot:n}),Ot("watch",t)})}},Ed={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=_r(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Yu))){var i=wr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||dt(),iconName:kt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=dt();return{prefix:a,iconName:kt(a,t)||t}}}},Te={noAuto:Ad,config:S,dom:kd,parse:Ed,library:Vs,findIconDefinition:ri,toHtml:_n},Td=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(Re.styles).length>0||S.autoFetchSvg)&&tt&&S.autoReplaceSvg&&Te.dom.i2svg({node:r})};function Ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!tt){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Cd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Bi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=xr(T(T({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Od(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:o}),children:r}]}]}function Ki(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,x=p===void 0?!1:p,I=r.found?r:n,C=I.width,$=I.height,y=i==="fak",E=[S.replacementClass,a?"".concat(S.cssPrefix,"-").concat(a):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),L={children:[],attributes:T(T({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat($)})},R=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/$*16*.0625,"em")}:{};x&&(L.attributes[Ct]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||vn())},children:[l]}),delete L.attributes.title);var H=T(T({},L),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},R),m.styles)}),oe=r.found&&n.found?Ze("generateAbstractMask",H)||{children:[],attributes:{}}:Ze("generateAbstractIcon",H)||{children:[],attributes:{}},ne=oe.children,z=oe.attributes;return H.children=ne,H.attributes=z,s?Od(H):Cd(H)}function eo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Ct]="");var u=T({},o.styles);Bi(i)&&(u.transform=ad({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=xr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Sd(e){var t=e.content,n=e.title,r=e.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=xr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dr=Re.styles;function ii(e){var t=e[0],n=e[1],r=e.slice(4),i=Ri(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Id={found:!1,width:512,height:512};function Nd(e,t){!Ms&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ai(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=dt()),new Promise(function(r,i){if(Ze("missingIconAbstract"),n==="fa"){var a=Ks(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Dr[t]&&Dr[t][e]){var o=Dr[t][e];return r(ii(o))}Nd(e,t),r(T(T({},Id),{},{icon:S.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var to=function(){},oi=S.measurePerformance&&In&&In.mark&&In.measure?In:{mark:to,measure:to},Jt='FA "6.2.0"',Pd=function(t){return oi.mark("".concat(Jt," ").concat(t," begins")),function(){return qs(t)}},qs=function(t){oi.mark("".concat(Jt," ").concat(t," ends")),oi.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Vi={begin:Pd,end:qs},Un=function(){};function no(e){var t=e.getAttribute?e.getAttribute(Ct):null;return typeof t=="string"}function Md(e){var t=e.getAttribute?e.getAttribute($i):null,n=e.getAttribute?e.getAttribute(zi):null;return t&&n}function Ld(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Fd(){if(S.autoReplaceSvg===!0)return Wn.replace;var e=Wn[S.autoReplaceSvg];return e||Wn.replace}function Rd(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function Dd(e){return Z.createElement(e)}function Xs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rd:Dd:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Xs(o,{ceFn:r}))}),i}function $d(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Wn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Xs(i),n)}),n.getAttribute(Ct)===null&&S.keepOriginalSource){var r=Z.createComment($d(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Hi(n).indexOf(S.replacementClass))return Wn.replace(t);var i=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return _n(s)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function ro(e){e()}function Gs(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=ro;S.mutateApproach===Bu&&(r=ut.requestAnimationFrame||ro),r(function(){var i=Fd(),a=Vi.begin("mutate");e.map(i),a(),n()})}}var qi=!1;function Js(){qi=!0}function si(){qi=!1}var tr=null;function io(e){if(!!Va&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,i=r===void 0?Un:r,a=e.pseudoElementsCallback,o=a===void 0?Un:a,s=e.observeMutationsRoot,l=s===void 0?Z:s;tr=new Va(function(f){if(!qi){var u=dt();Kt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!no(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&no(m.target)&&~Xu.indexOf(m.attributeName))if(m.attributeName==="class"&&Md(m.target)){var p=wr(Hi(m.target)),x=p.prefix,I=p.iconName;m.target.setAttribute($i,x||u),I&&m.target.setAttribute(zi,I)}else Ld(m.target)&&i(m.target)})}}),tt&&tr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zd(){!tr||tr.disconnect()}function jd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Hd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=wr(Hi(e));return i.prefix||(i.prefix=dt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bd(i.prefix,e.innerText)||Wi(i.prefix,ei(e.innerText))),!i.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Bd(e){var t=Kt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ud(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hd(e),r=n.iconName,i=n.prefix,a=n.rest,o=Bd(e),s=ni("parseNodeAttributes",{},e),l=t.styleParser?jd(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Wd=Re.styles;function Qs(e){var t=S.autoReplaceSvg==="nest"?ao(e,{styleParser:!1}):ao(e);return~t.extra.classes.indexOf(Ls)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var mt=new Set;ji.map(function(e){mt.add("fa-".concat(e))});Object.keys(mn[Q]).map(mt.add.bind(mt));Object.keys(mn[ie]).map(mt.add.bind(mt));mt=yn(mt);function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=Z.documentElement.classList,r=function(m){return n.add("".concat(qa,"-").concat(m))},i=function(m){return n.remove("".concat(qa,"-").concat(m))},a=S.autoFetchSvg?mt:ji.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Wd));a.includes("fa")||a.push("fa");var o=[".".concat(Ls,":not([").concat(Ct,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Vi.begin("onTree"),f=s.reduce(function(u,m){try{var p=Qs(m);p&&u.push(p)}catch(x){Ms||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){Gs(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qs(e).then(function(n){n&&Gs([n],t)})}function Kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ri(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ri(i||{})),e(r,T(T({},n),{},{mask:i}))}}var Vd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ye:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,x=n.titleId,I=x===void 0?null:x,C=n.classes,$=C===void 0?[]:C,y=n.attributes,E=y===void 0?{}:y,L=n.styles,R=L===void 0?{}:L;if(!!t){var H=t.prefix,oe=t.iconName,ne=t.icon;return Ar(T({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(p?E["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(I||vn()):(E["aria-hidden"]="true",E.focusable="false")),Ki({icons:{main:ii(ne),mask:l?ii(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:oe,transform:T(T({},Ye),i),symbol:o,title:p,maskId:u,titleId:I,extra:{attributes:E,styles:R,classes:$}})})}},qd={mixout:function(){return{icon:Kd(Vd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oo,n.nodeCallback=Yd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,a=n.callback,o=a===void 0?function(){}:a;return oo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(x,I){Promise.all([ai(i,s),u.iconName?ai(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var $=Ri(C,2),y=$[0],E=$[1];x([n,Ki({icons:{main:y,mask:E},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=xr(s);l.length>0&&(i.style=l);var f;return Bi(o)&&(f=Ze("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Xd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ar({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(yn(a)).join(" ")},children:o}]})}}}},Gd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Ar({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Sd({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(yn(s))}})})}}}},Jd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ye:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,x=p===void 0?{}:p;return Ar({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),eo({content:n,transform:T(T({},Ye),a),title:s,extra:{attributes:m,styles:x,classes:["".concat(S.cssPrefix,"-layers-text")].concat(yn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Is){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return S.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,eo({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Qd=new RegExp('"',"ug"),so=[1105920,1112319];function Zd(e){var t=e.replace(Qd,""),n=dd(t,0),r=n>=so[0]&&n<=so[1],i=t.length===2?t[0]===t[1]:!1;return{value:ei(i?t[0]:t),isSecondary:r||i}}function lo(e,t){var n="".concat(Hu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Kt(e.children),o=a.filter(function(ne){return ne.getAttribute(Zr)===t})[0],s=ut.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ku),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:Q,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[p][l[2].toLowerCase()]:Vu[p][f],I=Zd(m),C=I.value,$=I.isSecondary,y=l[0].startsWith("FontAwesome"),E=Wi(x,C),L=E;if(y){var R=yd(C);R.iconName&&R.prefix&&(E=R.iconName,x=R.prefix)}if(E&&!$&&(!o||o.getAttribute($i)!==x||o.getAttribute(zi)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=Ud(),oe=H.extra;oe.attributes[Zr]=t,ai(E,x).then(function(ne){var z=Ki(T(T({},H),{},{icons:{main:ne,mask:Yi()},prefix:x,iconName:L,extra:oe,watchable:!0})),Y=Z.createElement("svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=z.map(function(V){return _n(V)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function em(e){return Promise.all([lo(e,"::before"),lo(e,"::after")])}function tm(e){return e.parentNode!==document.head&&!~Uu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Zr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(!!tt)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(tm).map(em),i=Vi.begin("searchPseudoElements");Js(),Promise.all(r).then(function(){i(),si(),t()}).catch(function(){i(),si(),n()})})}var nm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;S.searchPseudoElements&&fo(i)}}},co=!1,rm={mixout:function(){return{dom:{unwatch:function(){Js(),co=!0}}}},hooks:function(){return{bootstrap:function(){io(ni("mutationObserverCallbacks",{}))},noAuto:function(){zd()},watch:function(n){var r=n.observeMutationsRoot;co?si():io(ni("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},im={mixout:function(){return{parse:{transform:function(n){return uo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=uo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:p};return{tag:"g",attributes:T({},x.outer),children:[{tag:"g",attributes:T({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),x.path)}]}]}}}},$r={x:0,y:0,width:"100%",height:"100%"};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function am(e){return e.tag==="g"?e.children:[e]}var om={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?wr(i.split(" ").map(function(o){return o.trim()})):Yi();return a.prefix||(a.prefix=dt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,m=o.width,p=o.icon,x=id({transform:l,containerWidth:m,iconWidth:f}),I={tag:"rect",attributes:T(T({},$r),{},{fill:"white"})},C=u.children?{children:u.children.map(mo)}:{},$={tag:"g",attributes:T({},x.inner),children:[mo(T({tag:u.tag,attributes:T(T({},u.attributes),x.path)},C))]},y={tag:"g",attributes:T({},x.outer),children:[$]},E="mask-".concat(s||vn()),L="clip-".concat(s||vn()),R={tag:"mask",attributes:T(T({},$r),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,y]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:am(p)},R]};return r.push(H,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(E,")")},$r)}),{children:r,attributes:i}}}},sm={provides:function(t){var n=!1;ut.matchMedia&&(n=ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},fm=[sd,qd,Xd,Gd,Jd,nm,rm,im,om,sm,lm];wd(fm,{mixoutsTo:Te});Te.noAuto;var Zs=Te.config,cm=Te.library;Te.dom;var nr=Te.parse;Te.findIconDefinition;Te.toHtml;var um=Te.icon;Te.layer;var dm=Te.text;Te.counter;function po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?po(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):po(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e,t){if(e==null)return{};var n=mm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function li(e){return hm(e)||gm(e)||vm(e)||bm()}function hm(e){if(Array.isArray(e))return fi(e)}function gm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vm(e,t){if(!!e){if(typeof e=="string")return fi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fi(e,t)}}function fi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},el={exports:{}};(function(e){(function(t){var n=function(y,E,L){if(!f(E)||m(E)||p(E)||x(E)||l(E))return E;var R,H=0,oe=0;if(u(E))for(R=[],oe=E.length;H<oe;H++)R.push(n(y,E[H],L));else{R={};for(var ne in E)Object.prototype.hasOwnProperty.call(E,ne)&&(R[y(ne,L)]=n(y,E[ne],L))}return R},r=function(y,E){E=E||{};var L=E.separator||"_",R=E.split||/(?=[A-Z])/;return y.split(R).join(L)},i=function(y){return I(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var E=i(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},x=function(y){return s.call(y)=="[object Boolean]"},I=function(y){return y=y-0,y===y},C=function(y,E){var L=E&&"process"in E?E.process:E;return typeof L!="function"?y:function(R,H){return L(R,y,H)}},$={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,E){return n(C(i,E),y)},decamelizeKeys:function(y,E){return n(C(o,E),y,E)},pascalizeKeys:function(y,E){return n(C(a,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(ym)})(el);var xm=el.exports,_m=["class","style"];function wm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=xm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Am(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xi(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Am(u);break;case"style":l.style=wm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=pm(n,_m);return gs(e.tag,Le(Le(Le({},t),{},{class:i.class,style:Le(Le({},i.style),o)},i.attrs),s),r)}var tl=!1;try{tl=!0}catch{}function km(){if(!tl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Em(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&rr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(nr.icon)return nr.icon(e);if(e===null)return null;if(rr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Tm=Ne({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Oe(function(){return ho(t.icon)}),a=Oe(function(){return nn("classes",Em(t))}),o=Oe(function(){return nn("transform",typeof t.transform=="string"?nr.transform(t.transform):t.transform)}),s=Oe(function(){return nn("mask",ho(t.mask))}),l=Oe(function(){return um(i.value,Le(Le(Le(Le({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});jn(l,function(u){if(!u)return km("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=Oe(function(){return l.value?Xi(l.value.abstract[0],{},r):null});return function(){return f.value}}});Ne({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=Zs.familyPrefix,a=Oe(function(){return["".concat(i,"-layers")].concat(li(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return gs("div",{class:a.value},r.default?r.default():[])}}});Ne({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=Zs.familyPrefix,a=Oe(function(){return nn("classes",[].concat(li(t.counter?["".concat(i,"-layers-counter")]:[]),li(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),o=Oe(function(){return nn("transform",typeof t.transform=="string"?nr.transform(t.transform):t.transform)}),s=Oe(function(){var f=dm(t.value.toString(),Le(Le({},o.value),a.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Oe(function(){return Xi(s.value,{},r)});return function(){return l.value}}});var Cm={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"]},Om={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Sm={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Im={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Nm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const Pm=[Nm,Im,Sm,Om,Cm];Pm.forEach(e=>cm.add(e));const Gi=Fc(Su),Mm=[eu,Nu];Mm.forEach(e=>Gi.use(e));Gi.component("font-awesome-icon",Tm);Gi.mount("#app");
