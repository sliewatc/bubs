var mn=Array.isArray,An=Array.from,gn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Rn=Object.prototype,Sn=Array.prototype,Ut=Object.getPrototypeOf;const Dn=()=>{};function In(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,M=8,nt=16,E=32,$=64,D=128,U=256,p=512,R=1024,Y=2048,k=4096,j=8192,Gt=16384,vt=32768,On=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),xn=Symbol("legacy props"),kn=Symbol("");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Nn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Fn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function qn(t){return tn(rt(t))}function Ln(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&T&&(d===null?pn([t]):d.push(t)),t}function Mn(t,n){return u!==null&&lt()&&u.f&(T|nt)&&(d===null||!d.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,R),lt()&&o!==null&&o.f&p&&!(o.f&E)&&(_!==null&&_.includes(t)?(y(o,R),W(o)):g===null?hn([t]):g.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===o||(y(a,n),i&(p|D)&&(i&T?Et(a,Y):W(a)))}}const Yn=1,jn=2,Hn=16,Bn=1,Un=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,rn="[",en="[!",sn="]",yt={},zn=Symbol();function wt(t){console.warn("hydration_mismatch")}let N=!1;function Wn(t){N=t}let m;function F(t){if(t===null)throw wt(),yt;return m=t}function Xn(){return F(C(m))}function Jn(t){if(N){if(C(m)!==null)throw wt(),yt;m=t}}function Qn(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=C(n);n.remove(),n=e}}var it,Tt,mt;function tr(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,mt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function C(t){return mt.call(t)}function nr(t,n){if(!N)return J(t);var r=J(m);if(r===null)r=m.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function rr(t,n){if(!N){var r=J(t);return r instanceof Comment&&r.data===""?C(r):r}return m}function er(t,n=1,r=!1){let e=N?m:t;for(;n--;)e=C(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=X();return e==null||e.before(l),F(l),l}return F(e),e}function sr(t){t.textContent=""}function ln(t){var n=T|R;o===null?n|=D:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function lr(t){const n=ln(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):P(e)}}}function gt(t){var n,r=o;K(t.parent);try{At(t),n=Lt(t)}finally{K(r)}return n}function Rt(t){var n=gt(t),r=(I||t.f&D)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){At(t),L(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){o===null&&u===null&&Wt(),u!==null&&u.f&D&&zt(),st&&Zt()}function an(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,l=o,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),z(a),a.f|=Gt}catch(c){throw P(a),c}finally{ft(i)}}else n!==null&&W(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&pt)===0;if(!w&&!s&&e&&(l!==null&&an(a,l),u!==null&&u.f&T)){var A=u;(A.children??(A.children=[])).push(a)}return a}function ar(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function or(t){St();var n=o!==null&&(o.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Dt(t);return e}}function ur(t){return St(),on(t)}function ir(t){const n=b($,t,!0);return()=>{P(n)}}function Dt(t){return b(ct,t,!1)}function on(t){return b(M,t,!0)}function fr(t){return un(t)}function un(t,n=0){return b(M|nt|n,t,!0)}function _r(t,n=!0){return b(M|E,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}xt(t,n&&!r),Ot(t),L(t,0),y(t,j);var a=t.transitions;if(a!==null)for(const w of a)w.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function cr(t,n){var r=[];Nt(t,r,!0),_n(r,()=>{P(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&vt)!==0||(e.f&E)!==0;Nt(e,n,l?r:!1),e=s}}}function vr(t){Ct(t,!0)}function Ct(t,n){if(t.f&k){H(t)&&z(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function pr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function cn(){V&&bt()}const Pt=0,vn=1;let B=Pt,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let S=[],x=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let d=null;function pn(t){d=t}let _=null,h=0,g=null;function hn(t){g=t}let Ft=0,I=!1,f=null;function qt(){return++Ft}function lt(){return!Z||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rt(l),e&&o!==null&&!I&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var at;var n=_,r=h,e=g,s=u,l=I,a=d,i=f,w=t.f;_=null,h=0,g=null,u=w&(E|$)?null:t,I=!O&&(w&D)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!I)for(v=h;v<c.length;v++)((at=c[v]).reactions??(at.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,I=l,d=a,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,Y),n.f&(D|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function z(t){var n=t.f;if(!(n&j)){y(t,p);var r=o;o=t;try{n&nt?fn(t):xt(t),Ot(t),It(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{o=r}}}function Mt(){x>1e3&&(x=0,Xt()),x++}function Yt(t){var n=t.length;if(n!==0){Mt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),yn(l)}}finally{O=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|k))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function wn(){if(q=!1,x>1001)return;const t=S;S=[],Yt(t),q||(x=0)}function W(t){B===Pt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}S.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&k))if(s&M){l?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Ht(t){var n=B,r=S;try{Mt();const s=[];B=vn,S=s,q=!1,Yt(r);var e=t==null?void 0:t();return cn(),(S.length>0||s.length>0)&&Ht(),x=0,e}finally{B=n,S=r}}async function hr(){await Promise.resolve(),Ht()}function dr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=gt(t);return et(t),e}if(u!==null){d!==null&&d.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&E)&&g.includes(t)&&(y(o,R),W(o))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Rt(l)),t.v}function Er(t){const n=u;try{return u=null,t()}finally{u=n}}const Tn=~(R|Y|p);function y(t,n){t.f=t.f&Tn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function wr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];K(l.effect),G(l.reaction),Dt(l.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{An as $,nr as A,Jn as B,ur as C,or as D,vt as E,f as F,Vt as G,en as H,In as I,Tr as J,ln as K,kn as L,yr as M,fr as N,wr as O,gn as P,G as Q,K as R,mn as S,u as T,o as U,tr as V,yt as W,sn as X,wt as Y,Nn as Z,sr as _,_r as a,ir as a0,$n as a1,Zn as a2,k as a3,nn as a4,Nt as a5,_n as a6,P as a7,rt as a8,jn as a9,hr as aA,qn as aB,$t as aC,Yn as aa,Hn as ab,ut as ac,Rn as ad,Sn as ae,bn as af,zn as ag,ot as ah,Pn as ai,Dt as aj,on as ak,pr as al,Cn as am,On as an,Vn as ao,dt as ap,E as aq,$ as ar,Bn as as,Z as at,Un as au,Gn as av,xn as aw,lr as ax,Kn as ay,Ht as az,un as b,Xn as c,Qn as d,Fn as e,Wn as f,m as g,N as h,X as i,Kt as j,rn as k,C as l,J as m,Ut as n,Bt as o,cr as p,Dn as q,vr as r,F as s,ar as t,Er as u,Ln as v,dr as w,Mn as x,er as y,rr as z};