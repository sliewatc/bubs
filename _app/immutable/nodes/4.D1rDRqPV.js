var ge=Object.defineProperty;var pe=(t,e,a)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var A=(t,e,a)=>pe(t,typeof e!="symbol"?e+"":e,a);import{a as N,t as S,c as _e}from"../chunks/disclose-version.DthNbkLK.js";import{h as C,s as U,m as be,i as we,c as xe,b as Ee,S as ye,$ as de,H as Ie,d as $,f as z,g as D,X as ke,av as L,r as oe,a as ve,p as Te,ae as Ae,U as ee,aw as K,ax as ae,ay as V,az as Oe,_ as Ce,aA as Ne,a3 as Re,aB as fe,T as Pe,aC as De,v as je,a7 as te,aD as Se,l as He,M as ue,N as Z,O as ce,y as W,w as x,A as O,B as k,z as Le,K as j}from"../chunks/runtime.Bq95u1sD.js";import{d as Be,s as re}from"../chunks/render.Dt4j0Ta7.js";import{i as q}from"../chunks/if.9KZwO4oW.js";import{s as se}from"../chunks/attributes.Cm802Oya.js";import{b as Me}from"../chunks/paths.48qZMfph.js";function ie(t,e){return e}function Ue(t,e,a,o){for(var v=[],c=e.length,d=0;d<c;d++)Oe(e[d].e,v,!0);var m=c>0&&v.length===0&&a!==null;if(m){var w=a.parentNode;Ce(w),w.append(a),o.clear(),T(t,e[0].prev,e[c-1].next)}Ne(v,()=>{for(var g=0;g<c;g++){var u=e[g];m||(o.delete(u.k),T(t,u.prev,u.next)),Re(u.e,!m)}})}function ne(t,e,a,o,v,c=null){var d=t,m={flags:e,items:new Map,first:null},w=(e&fe)!==0;if(w){var g=t;d=C?U(be(g)):g.appendChild(we())}C&&xe();var u=null,E=!1;Ee(()=>{var s=a(),n=ye(s)?s:s==null?[]:de(s),l=n.length;if(E&&l===0)return;E=l===0;let _=!1;if(C){var f=d.data===Ie;f!==(l===0)&&(d=$(),U(d),z(!1),_=!0)}if(C){for(var p=null,b,h=0;h<l;h++){if(D.nodeType===8&&D.data===ke){d=D,_=!0,z(!1);break}var r=n[h],i=o(r,h);b=he(D,m,p,null,r,i,h,v,e),m.items.set(i,b),p=b}l>0&&U($())}if(!C){var R=Pe;ze(n,m,d,v,e,(R.f&L)!==0,o)}c!==null&&(l===0?u?oe(u):u=ve(()=>c(d)):u!==null&&Te(u,()=>{u=null})),_&&z(!0),a()}),C&&(d=D)}function ze(t,e,a,o,v,c,d){var Y,F,G,Q;var m=(v&De)!==0,w=(v&(K|V))!==0,g=t.length,u=e.items,E=e.first,s=E,n,l=null,_,f=[],p=[],b,h,r,i;if(m)for(i=0;i<g;i+=1)b=t[i],h=d(b,i),r=u.get(h),r!==void 0&&((Y=r.a)==null||Y.measure(),(_??(_=new Set)).add(r));for(i=0;i<g;i+=1){if(b=t[i],h=d(b,i),r=u.get(h),r===void 0){var R=s?s.e.nodes_start:a;l=he(R,e,l,l===null?e.first:l.next,b,h,i,o,v),u.set(h,l),f=[],p=[],s=l.next;continue}if(w&&Ze(r,b,i,v),r.e.f&L&&(oe(r.e),m&&((F=r.a)==null||F.unfix(),(_??(_=new Set)).delete(r))),r!==s){if(n!==void 0&&n.has(r)){if(f.length<p.length){var H=p[0],I;l=H.prev;var X=f[0],B=f[f.length-1];for(I=0;I<f.length;I+=1)le(f[I],H,a);for(I=0;I<p.length;I+=1)n.delete(p[I]);T(e,X.prev,B.next),T(e,l,X),T(e,B,H),s=H,l=B,i-=1,f=[],p=[]}else n.delete(r),le(r,s,a),T(e,r.prev,r.next),T(e,r,l===null?e.first:l.next),T(e,l,r),l=r;continue}for(f=[],p=[];s!==null&&s.k!==h;)(c||!(s.e.f&L))&&(n??(n=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;r=s}f.push(r),l=r,s=r.next}if(s!==null||n!==void 0){for(var P=n===void 0?[]:de(n);s!==null;)(c||!(s.e.f&L))&&P.push(s),s=s.next;var M=P.length;if(M>0){var me=v&fe&&g===0?a:null;if(m){for(i=0;i<M;i+=1)(G=P[i].a)==null||G.measure();for(i=0;i<M;i+=1)(Q=P[i].a)==null||Q.fix()}Ue(e,P,me,u)}}m&&Ae(()=>{var J;if(_!==void 0)for(r of _)(J=r.a)==null||J.apply()}),ee.first=e.first&&e.first.e,ee.last=l&&l.e}function Ze(t,e,a,o){o&K&&ae(t.v,e),o&V?ae(t.i,a):t.i=a}function he(t,e,a,o,v,c,d,m,w){var g=(w&K)!==0,u=(w&Se)===0,E=g?u?je(v):te(v):v,s=w&V?te(d):d,n={i:s,v:E,k:c,a:null,e:null,prev:a,next:o};try{return n.e=ve(()=>m(t,E,s),C),n.e.prev=a&&a.e,n.e.next=o&&o.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),o!==null&&(o.prev=n,o.e.prev=n.e),n}finally{}}function le(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,v=e?e.e.nodes_start:a,c=t.e.nodes_start;c!==o;){var d=He(c);v.before(c),c=d}}function T(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const We=({params:t})=>({slug:t.slug}),ua=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"})),qe=""+new URL("../assets/fireworks.DbxQderp.jpg",import.meta.url).href,Ke=""+new URL("../assets/illenium.DvnaZZgR.jpg",import.meta.url).href,Ve=""+new URL("../assets/rose.Derkogt0.jpg",import.meta.url).href,Xe=""+new URL("../assets/shib.CBsuNeZ7.jpg",import.meta.url).href,Ye=""+new URL("../assets/sushibday.DZ21C53D.jpeg",import.meta.url).href;class Fe{constructor(e,a){A(this,"targetId");A(this,"text");this.targetId=e,this.text=a}}class Ge{constructor(e,a,o,v){A(this,"id");A(this,"text");A(this,"imagePaths");A(this,"nextOptions",[]);this.id=e,this.imagePaths=o,this.text=a,this.nextOptions=this.nextOptions}addEdge(e,a){return this.nextOptions===void 0&&(this.nextOptions=[]),this.nextOptions.push(new Fe(e,a)),this}addImage(e){return this.imagePaths===void 0&&(this.imagePaths=[]),this.imagePaths.push(e),this}}function y(t,e,a){return new Ge(t,e)}const Qe={0:y(0,"Hi bb. Time's been going really... ").addEdge(1,"fast!!").addEdge(2,"slow :("),1:y(1,"That's right :p. I can't believe you're 24. Remember this?").addEdge(3,"aww").addEdge(4,"eww").addImage(Ve),2:y(2,"I know you're joking. -1 points though.").addEdge(3,"->>>"),3:y(3,"We've travelled the world together").addEdge(5,"->").addImage(Xe),4:y(4,"-1 point >:( I think we're super cute together.").addEdge(5,"I agree").addImage(Ye),5:y(5,"We've eaten at way too many restaurants").addEdge(6,"yum, whatever, next").addEdge(7,"show me more"),6:y(6,"We've cried at garrix at least once (more coming)").addEdge(8,"😭").addImage(Ke).addImage(qe),7:y(7,"BIG BACK").addEdge(6,"I'm fat"),8:y(8,"I love you Christy.")},Je=()=>{history.back()};var $e=S('<img class="textimg svelte-bbj7my" alt="n/a">'),ea=S('<div class="imagescroller svelte-bbj7my"></div>'),aa=S('<a href="#" class="svelte-bbj7my">Back</a>'),ta=S('<a class="sent svelte-bbj7my"><div class="shared sent svelte-bbj7my"> </div></a>'),ra=S('<flipwrapper class="svelte-bbj7my"><div class="shared received svelte-bbj7my"> </div> <!> <div class="rowwrapper svelte-bbj7my"><div class="backwrapper svelte-bbj7my"><!></div> <div class="replywrapper svelte-bbj7my"><!></div></div></flipwrapper>');function sa(t,e){ue(e,!0);let a=j(()=>Qe[e.pageNum]),o=j(()=>x(a).text),v=j(()=>x(a).imagePaths),c=j(()=>x(a).nextOptions);var d=ra(),m=O(d),w=O(m,!0);k(m);var g=W(m,2);q(g,()=>x(v)!==void 0,_=>{var f=ea();ne(f,21,()=>x(v),ie,(p,b)=>{var h=$e();Z(()=>se(h,"src",x(b))),N(p,h)}),k(f),N(_,f)});var u=W(g,2),E=O(u),s=O(E);q(s,()=>e.pageNum>0,_=>{var f=aa();f.__click=[Je],N(_,f)}),k(E);var n=W(E,2),l=O(n);q(l,()=>x(c)!==void 0,_=>{var f=_e(),p=Le(f);ne(p,17,()=>x(c),ie,(b,h)=>{var r=ta(),i=O(r),R=O(i,!0);k(i),k(r),Z(()=>{se(r,"href",`${Me??""}/quiz/${x(h).targetId??""}`),re(R,x(h).text)}),N(b,r)}),N(_,f)}),k(n),k(u),k(d),Z(()=>re(w,x(o))),N(t,d),ce()}Be(["click"]);function ca(t,e){ue(e,!0);let a=j(()=>e.data.slug);sa(t,{get pageNum(){return x(a)}}),ce()}export{ca as component,ua as universal};