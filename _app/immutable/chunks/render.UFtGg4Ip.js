import{P as M,Q as N,R as O,S as Y,T as H,U as V,V as b,m as P,k as $,l as C,W as T,f as g,s as A,c as W,g as v,X as j,Y as q,Z as B,_ as F,$ as Q,a0 as U,i as X,a as Z,M as z,h as E,O as G,F as J}from"./runtime.DwyzEj6I.js";import{r as K}from"./svelte-head.B2ZJAWY5.js";import{b as x}from"./disclose-version.BzRQ0sqP.js";const rr=new Set,D=new Set;function m(r){var R;var e=this,n=e.ownerDocument,_=r.type,o=((R=r.composedPath)==null?void 0:R.call(r))||[],t=o[0]||r.target,d=0,h=r.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(t=o[d]||r.target,t!==e){M(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=H,i=V;N(null),O(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+_];if(c!==void 0&&!t.disabled)if(Y(c)){var[I,...L]=c;I.apply(t,[r,...L])}else c.call(t,r)}catch(y){a?s.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,N(w),O(i)}}}const er=["touchstart","touchmove"];function tr(r){return er.includes(r)}function or(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function ar(r,e){return k(r,e)}function fr(r,e){b(),e.intro=e.intro??!1;const n=e.target,_=E,o=v;try{for(var t=P(n);t&&(t.nodeType!==8||t.data!==$);)t=C(t);if(!t)throw T;g(!0),A(t),W();const d=k(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==j)throw q(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&B(),b(),F(n),g(!1),ar(r,e);throw d}finally{g(_),A(o),K()}}const p=new Map;function k(r,{target:e,anchor:n,props:_={},events:o,context:t,intro:d=!0}){b();var h=new Set,u=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!h.has(s)){h.add(s);var f=tr(s);e.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(Q(rr)),D.add(u);var l=void 0,w=U(()=>{var i=n??e.appendChild(X());return Z(()=>{if(t){z({});var a=J;a.c=t}o&&(_.$$events=o),E&&x(i,null),l=r(i,_)||{},E&&(V.nodes_end=v),t&&G()}),()=>{var f;for(var a of h){e.removeEventListener(a,m);var s=p.get(a);--s===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,s)}D.delete(u),S.delete(l),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function dr(r){const e=S.get(r);e&&e()}export{fr as h,ar as m,or as s,dr as u};