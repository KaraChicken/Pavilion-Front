import{g as b,m as g,f as $,u as f,c as n,p as S,I as u,N as p,a as z,b as G,e as A,B as J,al as K}from"./index-79391d2e.js";import{c as I,V as h}from"./VAvatar-13edf35b.js";import{n as x,i as P,f as k,m as Q,j as U,a as W,b as X,o as Y,p as Z,R as ee,c as ae,q as te,r as ne,k as de,d as ie,e as le,s as se,V as ce,v as re}from"./index-56466a3f.js";import{d as ue,a as oe,b as ve,e as me,u as ye,c as ke,L as be}from"./VBtn-fad528cb.js";import{m as ge}from"./tag-9dd3b1e3.js";const fe=b()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return $({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=I("v-card-subtitle"),Ve=I("v-card-title"),Ce=S({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...x()},"VCardItem"),pe=b()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),v=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ve,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ae=I("v-card-text"),he=S({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Q(),...g(),...x(),...U(),...W(),...ue(),...oe(),...ve(),...X(),...Y(),...ge(),...z(),...Z({variant:"elevated"})},"VCard"),Te=b()({name:"VCard",directives:{Ripple:ee},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=G(e),{borderClasses:l}=ae(e),{colorClasses:v,colorStyles:m,variantClasses:y}=te(e),{densityClasses:s}=ne(e),{dimensionStyles:d}=de(e),{elevationClasses:B}=ie(e),{loaderClasses:L}=me(e),{locationStyles:T}=ye(e),{positionClasses:D}=ke(e),{roundedClasses:_}=le(e),c=se(e,t),N=A(()=>e.link!==!1&&c.isLink.value),r=A(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),j=!!(a.subtitle||e.subtitle!=null),E=F||j,M=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=E||O||M,H=!!(a.text||e.text!=null);return J(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,l.value,v.value,s.value,B.value,L.value,D.value,_.value,y.value,e.class],style:[m.value,d.value,T.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ce,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Ae,{key:"text"},{default:()=>{var C;return[((C=a.text)==null?void 0:C.call(a))??e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(fe,null,{default:a.actions}),re(r.value,"v-card")]}}),[[K("ripple"),r.value&&e.ripple]])}),{}}});export{Ve as V,Ie as a,Ae as b,fe as c,Te as d};