var An=Array.isArray,mn=Array.from,Sn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,gn=Object.prototype,Rn=Array.prototype,Ut=Object.getPrototypeOf;const Dn=()=>{};function In(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,M=8,nt=16,E=32,$=64,D=128,U=256,p=512,g=1024,H=2048,k=4096,Y=8192,Gt=16384,vt=32768,On=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),xn=Symbol("legacy props"),kn=Symbol("");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Cn(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Fn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function qn(t){return tn(rt(t))}function Ln(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&T&&(d===null?pn([t]):d.push(t)),t}function Mn(t,n){return u!==null&&at()&&u.f&(T|nt)&&(d===null||!d.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,g),at()&&o!==null&&o.f&p&&!(o.f&E)&&(_!==null&&_.includes(t)?(y(o,g),W(o)):S===null?hn([t]):S.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&g||!e&&l===o||(y(l,n),i&(p|D)&&(i&T?Et(l,H):W(l)))}}const Hn=1,Yn=2,jn=4,Bn=8,Un=16,Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Wn=2,rn="[",en="[!",sn="]",yt={},Xn=Symbol();function wt(t){console.warn("hydration_mismatch")}let C=!1;function Jn(t){C=t}let A;function F(t){if(t===null)throw wt(),yt;return A=t}function Qn(){return F(N(A))}function tr(t){if(C){if(N(A)!==null)throw wt(),yt;A=t}}function nr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=N(n);n.remove(),n=e}}var it,Tt,At;function rr(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,At=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function N(t){return At.call(t)}function er(t,n){if(!C)return J(t);var r=J(A);if(r===null)r=A.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function sr(t,n){if(!C){var r=J(t);return r instanceof Comment&&r.data===""?N(r):r}return A}function ar(t,n=1,r=!1){let e=C?A:t;for(;n--;)e=N(e);if(!C)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function lr(t){t.textContent=""}function an(t){var n=T|g;o===null?n|=D:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function or(t){const n=an(t);return n.equals=dt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):P(e)}}}function St(t){var n,r=o;K(t.parent);try{mt(t),n=Lt(t)}finally{K(r)}return n}function gt(t){var n=St(t),r=(I||t.f&D)&&t.deps!==null?H:p;y(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){mt(t),L(t,0),y(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){o===null&&u===null&&Wt(),u!==null&&u.f&D&&zt(),st&&Zt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),z(l),l.f|=Gt}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&W(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!w&&!s&&e&&(a!==null&&ln(l,a),u!==null&&u.f&T)){var m=u;(m.children??(m.children=[])).push(l)}return l}function ur(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function ir(t){Rt();var n=o!==null&&(o.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Dt(t);return e}}function fr(t){return Rt(),on(t)}function _r(t){const n=b($,t,!0);return()=>{P(n)}}function Dt(t){return b(ct,t,!1)}function on(t){return b(M,t,!0)}function cr(t){return un(t)}function un(t,n=0){return b(M|nt|n,t,!0)}function vr(t,n=!0){return b(M|E,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:N(e);e.remove(),e=a}r=!0}xt(t,n&&!r),Ot(t),L(t,0),y(t,Y);var l=t.transitions;if(l!==null)for(const w of l)w.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function pr(t,n){var r=[];Ct(t,r,!0),_n(r,()=>{P(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&E)!==0;Ct(e,n,a?r:!1),e=s}}}function hr(t){Nt(t,!0)}function Nt(t,n){if(t.f&k){j(t)&&z(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function dr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function cn(){V&&bt()}const Pt=0,vn=1;let B=Pt,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let R=[],x=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let d=null;function pn(t){d=t}let _=null,h=0,S=null;function hn(t){S=t}let Ft=0,I=!1,f=null;function qt(){return++Ft}function at(){return!Z||f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&g)return!0;if(n&H){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&gt(a),e&&o!==null&&!I&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=S,s=u,a=I,l=d,i=f,w=t.f;_=null,h=0,S=null,u=w&(E|$)?null:t,I=!O&&(w&D)!==0,d=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!I)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return m}finally{_=n,h=r,S=e,u=s,I=a,d=l,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,H),n.f&(D|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function z(t){var n=t.f;if(!(n&Y)){y(t,p);var r=o;o=t;try{n&nt?fn(t):xt(t),Ot(t),It(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{o=r}}}function Mt(){x>1e3&&(x=0,Xt()),x++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),yn(a)}}finally{O=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|k))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function wn(){if(q=!1,x>1001)return;const t=R;R=[],Ht(t),q||(x=0)}function W(t){B===Pt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&E)!==0,l=a&&(s&p)!==0;if(!l&&!(s&k))if(s&M){a?r.f^=p:j(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=B,r=R;try{Mt();const s=[];B=vn,R=s,q=!1,Ht(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&jt(),x=0,e}finally{B=n,R=r}}async function Er(){await Promise.resolve(),jt()}function yr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&Y){var e=St(t);return et(t),e}if(u!==null){d!==null&&d.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),S!==null&&o!==null&&o.f&p&&!(o.f&E)&&S.includes(t)&&(y(o,g),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,j(a)&&gt(a)),t.v}function wr(t){const n=u;try{return u=null,t()}finally{u=n}}const Tn=~(g|H|p);function y(t,n){t.f=t.f&Tn|n}function Tr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Ar(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),G(a.reaction),Dt(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{mn as $,er as A,tr as B,fr as C,ir as D,vt as E,f as F,Vt as G,en as H,In as I,mr as J,an as K,kn as L,Tr as M,cr as N,Ar as O,Sn as P,G as Q,K as R,An as S,u as T,o as U,rr as V,yt as W,sn as X,wt as Y,Cn as Z,lr as _,vr as a,_r as a0,zn as a1,Wn as a2,P as a3,ut as a4,gn as a5,Rn as a6,rt as a7,bn as a8,Xn as a9,_n as aA,jn as aB,Bn as aC,Un as aD,$t as aE,ot as aa,Pn as ab,Dt as ac,on as ad,dr as ae,Nn as af,On as ag,Kn as ah,dt as ai,E as aj,$ as ak,Vn as al,Z as am,Gn as an,$n as ao,xn as ap,or as aq,Zn as ar,jt as as,Er as at,qn as au,k as av,Hn as aw,nn as ax,Yn as ay,Ct as az,un as b,Qn as c,nr as d,Fn as e,Jn as f,A as g,C as h,X as i,Kt as j,rn as k,N as l,J as m,Ut as n,Bt as o,pr as p,Dn as q,hr as r,F as s,ur as t,wr as u,Ln as v,yr as w,Mn as x,ar as y,sr as z};
