import{au as ke,aO as Pe,p as $,r as H,aj as q,n as ce,aP as He,e as O,w as L,aI as V,W as Z,h as R,i as de,x as ue,aQ as Ce,aR as Ve,ay as Ae,at as Te,aS as me,aJ as De,v as j,s as z,F as Ie,o as We,ar as pe,U as je,as as qe,aT as ze,m as $e,a as Ye,g as Ue,l as Ge,b as Xe,d as Je,t as Ke,j as Qe,u as Ze,c as W,aU as et,B as tt,C as nt,al as ot,N as at,a6 as rt}from"./index-4d47d133.js";import{l as it,B as ne,r as ye,n as lt,i as st,s as ct}from"./VTextField-afafd525.js";import{p as ge,o as oe,q as ae,r as he,s as be,d as ut,v as ft}from"./index-c5f05f9d.js";import{d as vt,b as dt,u as mt,e as yt,M as gt}from"./VImg-c7ba8a34.js";import{u as ht}from"./scopeId-fc177662.js";const X=new WeakMap;function bt(e,n){Object.keys(n).forEach(t=>{if(ke(t)){const o=Pe(t),a=X.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),X.has(e)||X.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function wt(e,n){Object.keys(n).forEach(t=>{if(ke(t)){const o=Pe(t),a=X.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Et(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?St(e):fe(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(fe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function St(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function xt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ot(e,n){return{x:e.x-n.x,y:e.y-n.y}}function we(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return re({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return re({x:a,y:r},n)}return re({x:n.width/2,y:n.height/2},n)}const Be={static:Ct,connected:Tt},kt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Be},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Pt(e,n){const t=H({}),o=H();q&&ce(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var l,i;L(()=>e.locationStrategy,r),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(i=Be[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:t,updateLocation:o}}function Ct(){}function At(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=lt(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Tt(e,n,t){(Array.isArray(e.target.value)||xt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=He(()=>{const u=ge(n.location,e.isRtl.value),f=n.origin==="overlap"?u:n.origin==="auto"?oe(u):ge(n.origin,e.isRtl.value);return u.side===f.side&&u.align===ae(f).align?{preferredAnchor:he(u),preferredOrigin:he(f)}:{preferredAnchor:u,preferredOrigin:f}}),[l,i,d,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>O(()=>{const f=parseFloat(n[u]);return isNaN(f)?1/0:f})),m=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const u=n.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const k=new ResizeObserver(()=>{g&&P()});L([e.target,e.contentEl],(u,f)=>{let[A,T]=u,[w,h]=f;w&&!Array.isArray(w)&&k.unobserve(w),A&&!Array.isArray(A)&&k.observe(A),h&&k.unobserve(h),T&&k.observe(T)},{immediate:!0}),V(()=>{k.disconnect()});function P(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const u=it(e.target.value),f=At(e.contentEl.value,e.isRtl.value),A=K(e.contentEl.value),T=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=A.reduce((S,b)=>{const c=b.getBoundingClientRect(),y=new ne({x:b===document.documentElement?0:c.x,y:b===document.documentElement?0:c.y,width:b.clientWidth,height:b.clientHeight});return S?new ne({x:Math.max(S.left,y.left),y:Math.max(S.top,y.top),width:Math.min(S.right,y.right)-Math.max(S.left,y.left),height:Math.min(S.bottom,y.bottom)-Math.max(S.top,y.top)}):y},void 0);w.x+=T,w.y+=T,w.width-=T*2,w.height-=T*2;let h={anchor:a.value,origin:r.value};function D(S){const b=new ne(f),c=we(S.anchor,u),y=we(S.origin,b);let{x:B,y:F}=Ot(c,y);switch(S.anchor.side){case"top":F-=m.value[0];break;case"bottom":F+=m.value[0];break;case"left":B-=m.value[0];break;case"right":B+=m.value[0];break}switch(S.anchor.align){case"top":F-=m.value[1];break;case"bottom":F+=m.value[1];break;case"left":B-=m.value[1];break;case"right":B+=m.value[1];break}return b.x+=B,b.y+=F,b.width=Math.min(b.width,d.value),b.height=Math.min(b.height,v.value),{overflows:ye(b,w),x:B,y:F}}let M=0,C=0;const s={x:0,y:0},p={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:b,overflows:c}=D(h);M+=S,C+=b,f.x+=S,f.y+=b;{const y=be(h.anchor),B=c.x.before||c.x.after,F=c.y.before||c.y.after;let Y=!1;if(["x","y"].forEach(x=>{if(x==="x"&&B&&!p.x||x==="y"&&F&&!p.y){const I={anchor:{...h.anchor},origin:{...h.origin}},U=x==="x"?y==="y"?ae:oe:y==="y"?oe:ae;I.anchor=U(I.anchor),I.origin=U(I.origin);const{overflows:N}=D(I);(N[x].before<=c[x].before&&N[x].after<=c[x].after||N[x].before+N[x].after<(c[x].before+c[x].after)/2)&&(h=I,Y=p[x]=!0)}}),Y)continue}c.x.before&&(M+=c.x.before,f.x+=c.x.before),c.x.after&&(M-=c.x.after,f.x-=c.x.after),c.y.before&&(C+=c.y.before,f.y+=c.y.before),c.y.after&&(C-=c.y.after,f.y-=c.y.after);{const y=ye(f,w);s.x=w.width-y.x.before-y.x.after,s.y=w.height-y.y.before-y.y.after,M+=y.x.before,f.x+=y.x.before,C+=y.y.before,f.y+=y.y.before}break}const te=be(h.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:R(ie(C)),left:e.isRtl.value?void 0:R(ie(M)),right:e.isRtl.value?R(ie(-M)):void 0,minWidth:R(te==="y"?Math.min(l.value,u.width):l.value),maxWidth:R(Ee(de(s.x,l.value===1/0?0:l.value,d.value))),maxHeight:R(Ee(de(s.y,i.value===1/0?0:i.value,v.value)))}),{available:s,contentBox:f}}return L(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>P()),Z(()=>{const u=P();if(!u)return;const{available:f,contentBox:A}=u;A.height>f.y&&requestAnimationFrame(()=>{P(),requestAnimationFrame(()=>{P()})})}),{updateLocation:P}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function pt(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let Se=-1;function se(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const J={none:null,close:Mt,block:Ft,reposition:Rt},Lt=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Bt(e,n){if(!q)return;let t;ue(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ce(),await Z(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),V(()=>{t==null||t.stop()})}function Mt(e){function n(t){e.isActive.value=!1}Me(e.targetEl.value??e.contentEl.value,n)}function Ft(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...K(e.targetEl.value,n.contained?t:void 0),...K(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>fe(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,d)=>{i.style.setProperty("--v-body-scroll-x",R(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",R(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",R(a)),i.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((i,d)=>{const v=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-v,i.scrollTop=-m,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Rt(e,n,t){let o=!1,a=-1,r=-1;function l(i){pt(()=>{var m,g;const d=performance.now();(g=(m=e.updateLocation).value)==null||g.call(m,i),o=(performance.now()-d)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{Me(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Me(e,n){const t=[document,...K(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Nt=Symbol.for("vuetify:v-menu"),_t=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Ht(e,n){let t=()=>{};function o(l){t==null||t();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(d=>{t=Ve(i,()=>{n==null||n(l),d(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const Vt=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,..._t()},"VOverlay-activator");function Dt(e,n){let{isActive:t,isTop:o}=n;const a=Ae("useActivator"),r=H();let l=!1,i=!1,d=!0;const v=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!v.value),{runOpenDelay:g,runCloseDelay:k}=Ht(e,s=>{s===(e.openOnHover&&l||v.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(d=!0),t.value=s)}),P=H(),u={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,t.value||(P.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var p;(p=s.sourceCapabilities)!=null&&p.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,k()},onFocus:s=>{De(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),k()}},f=O(()=>{const s={};return m.value&&(s.onClick=u.onClick),e.openOnHover&&(s.onMouseenter=u.onMouseenter,s.onMouseleave=u.onMouseleave),v.value&&(s.onFocus=u.onFocus,s.onBlur=u.onBlur),s}),A=O(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,k()}),v.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,k()}),e.closeOnContentClick){const p=Te(Nt,null);s.onClick=()=>{t.value=!1,p==null||p.closeParents()}}return s}),T=O(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{d&&(l=!0,d=!1,g())},s.onMouseleave=()=>{l=!1,k()}),s});L(o,s=>{s&&(e.openOnHover&&!l&&(!v.value||!i)||v.value&&!i&&(!e.openOnHover||!l))&&(t.value=!1)}),L(t,s=>{s||setTimeout(()=>{P.value=void 0})},{flush:"post"});const w=H();ue(()=>{w.value&&Z(()=>{r.value=me(w.value)})});const h=H(),D=O(()=>e.target==="cursor"&&P.value?P.value:h.value?me(h.value):Fe(e.target,a)||r.value),M=O(()=>Array.isArray(D.value)?void 0:D.value);let C;return L(()=>!!e.activator,s=>{s&&q?(C=Ce(),C.run(()=>{It(e,a,{activatorEl:r,activatorEvents:f})})):C&&C.stop()},{flush:"post",immediate:!0}),V(()=>{C==null||C.stop()}),{activatorEl:r,activatorRef:w,target:D,targetEl:M,targetRef:h,activatorEvents:f,contentEvents:A,scrimEvents:T}}function It(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(d,v)=>{if(v&&d!==v){const m=i(v);m&&l(m)}d&&Z(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),V(()=>{l()});function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&bt(d,j(a.value,v))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&wt(d,j(a.value,v))}function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=Fe(d,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function Fe(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Wt(){if(!q)return z(!1);const{ssr:e}=Ie();if(e){const n=z(!1);return We(()=>{n.value=!0}),n}else return z(!0)}const jt=$({eager:Boolean},"lazy");function qt(e,n){const t=z(!1),o=O(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const xe=Symbol.for("vuetify:stack"),G=pe([]);function zt(e,n,t){const o=Ae("useStack"),a=!t,r=Te(xe,void 0),l=pe({activeChildren:new Set});je(xe,l);const i=z(+n.value);ce(e,()=>{var g;const m=(g=G.at(-1))==null?void 0:g[1];i.value=m?m+10:+n.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),V(()=>{if(a){const k=ze(G).findIndex(P=>P[0]===o.uid);G.splice(k,1)}r==null||r.activeChildren.delete(o.uid)})});const d=z(!0);a&&ue(()=>{var g;const m=((g=G.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>d.value=m)});const v=O(()=>!l.activeChildren.size);return{globalTop:qe(d),localTop:v,stackStyles:O(()=>({zIndex:i.value}))}}function $t(e){return{teleportTarget:O(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Yt(){return!0}function Re(e,n,t){if(!e||Ne(e,t)===!1)return!1;const o=Le(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function Ne(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Yt)(e)}function Ut(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Re(e,n,t)&&setTimeout(()=>{Ne(e,t)&&o&&o(e)},0)}function Oe(e,n){const t=Le(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Gt={mounted(e,n){const t=a=>Ut(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Re(a,e,n)};Oe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Oe(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Xt(e){const{modelValue:n,color:t,...o}=e;return W(rt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&W("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Jt=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Vt(),...$e(),...vt(),...jt(),...kt(),...Lt(),...Ye(),...dt()},"VOverlay"),nn=Ue()({name:"VOverlay",directives:{ClickOutside:Gt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Jt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=Ge(e,"modelValue"),l=O({get:()=>r.value,set:E=>{E&&e.disabled||(r.value=E)}}),{teleportTarget:i}=$t(O(()=>e.attach||e.contained)),{themeClasses:d}=Xe(e),{rtlClasses:v,isRtl:m}=Je(),{hasContent:g,onAfterLeave:k}=qt(e,l),P=mt(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:f,stackStyles:A}=zt(l,Ke(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:w,target:h,targetEl:D,targetRef:M,activatorEvents:C,contentEvents:s,scrimEvents:p}=Dt(e,{isActive:l,isTop:f}),{dimensionStyles:ee}=yt(e),te=Wt(),{scopeId:S}=ht();L(()=>e.disabled,E=>{E&&(l.value=!1)});const b=H(),c=H(),{contentStyles:y,updateLocation:B}=Pt(e,{isRtl:m,contentEl:c,target:h,isActive:l});Bt(e,{root:b,contentEl:c,targetEl:D,isActive:l,updateLocation:B});function F(E){a("click:outside",E),e.persistent?N():l.value=!1}function Y(){return l.value&&u.value}q&&L(l,E=>{E?window.addEventListener("keydown",x):window.removeEventListener("keydown",x)},{immediate:!0}),Qe(()=>{q&&window.removeEventListener("keydown",x)});function x(E){var _,ve;E.key==="Escape"&&u.value&&(e.persistent?N():(l.value=!1,(_=c.value)!=null&&_.contains(document.activeElement)&&((ve=T.value)==null||ve.focus())))}const I=ut();ce(()=>e.closeOnBack,()=>{ft(I,E=>{u.value&&l.value?(E(!1),e.persistent?N():l.value=!1):E()})});const U=H();L(()=>l.value&&(e.absolute||e.contained)&&i.value==null,E=>{if(E){const _=Et(b.value);_&&_!==document.scrollingElement&&(U.value=_.scrollTop)}});function N(){e.noClickAnimation||c.value&&st(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ct})}function _e(){k(),a("afterLeave")}return Ze(()=>{var E;return W(at,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:l.value,props:j({ref:w,targetRef:M},C.value,e.activatorProps)}),te.value&&g.value&&W(et,{disabled:!i.value,to:i.value},{default:()=>[W("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},d.value,v.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:R(U.value)},e.style],ref:b},S,o),[W(Xt,j({color:P,modelValue:l.value&&!!e.scrim},p.value),null),W(gt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:_e},{default:()=>{var _;return[tt(W("div",j({ref:c,class:["v-overlay__content",e.contentClass],style:[ee.value,y.value]},s.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:l})]),[[nt,l.value],[ot("click-outside"),{handler:F,closeConditional:Y,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,target:h,animateClick:N,contentEl:c,globalTop:u,localTop:f,updateLocation:B}}});export{nn as V,Nt as a,Et as g,Jt as m};
