import{p as P,m as J,g as I,u as A,c as o,a as ee,t as O,b as ie,d as ue,s as N,e as f,f as ce,h as U,r as K,i as de,w as j,o as te,j as ve,k as me,l as fe,n as ge,q as be,v as F,x as he,I as ye,y as xe,z as Ve,A as ke,B as pe,C as _e,_ as Se,D as Be,E as we,F as Te,G as Ce,H as r,J as V,K as h,L as i,M as p,N as k,O as Le,P as D,Q as H,R as C,S as $,T as Ne}from"./index-16fd70aa.js";import{S as q}from"./sweetalert2.all-04b561c2.js";import{g as M}from"./index-7d9a9c74.js";import{V as Pe,a as Ie}from"./VNavigationDrawer-3e8515de.js";import{m as Q}from"./tag-1d73d0aa.js";import{V as Ae}from"./index-b63fecd7.js";import{m as Re,a as Ee,b as ae,u as oe,c as De,d as He,e as le,V as $e,f as W,g as Me,h as Oe,M as Fe,i as B}from"./index-8b527162.js";import{u as Ue,V as z,a as je}from"./VList-e33959aa.js";import{m as qe,V as Y,a as ze,u as Ye}from"./VBtn-0edc3bc4.js";import{V as X}from"./VContainer-22eb630b.js";import"./scopeId-6f4bf6ba.js";import"./VAvatar-895626e0.js";/* empty css              */const ne=P({text:String,...J(),...Q()},"VToolbarTitle"),se=I()({name:"VToolbarTitle",props:ne(),setup(e,d){let{slots:a}=d;return A(()=>{const n=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var u;return[n&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(u=a.default)==null?void 0:u.call(a)])]}})}),{}}}),We=[null,"prominent","default","comfortable","compact"],re=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>We.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Re(),...J(),...Ee(),...ae(),...Q({tag:"header"}),...ee()},"VToolbar"),Z=I()({name:"VToolbar",props:re(),setup(e,d){var t;let{slots:a}=d;const{backgroundColorClasses:n,backgroundColorStyles:u}=oe(O(e,"color")),{borderClasses:s}=De(e),{elevationClasses:g}=He(e),{roundedClasses:v}=le(e),{themeClasses:y}=ie(e),{rtlClasses:x}=ue(),l=N(!!(e.extended||(t=a.extension)!=null&&t.call(a))),m=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=f(()=>l.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ce({VBtn:{variant:"text"}}),A(()=>{var c;const _=!!(e.title||a.title),S=!!(a.image||e.image),w=(c=a.extension)==null?void 0:c.call(a);return l.value=!!(e.extended||w),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,s.value,g.value,v.value,y.value,x.value,e.class],style:[u.value,e.style]},{default:()=>[S&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o($e,{key:"image-img",cover:!0,src:e.image},null)]),o(W,{defaults:{VTabs:{height:U(m.value)}}},{default:()=>{var T,R,E;return[o("div",{class:"v-toolbar__content",style:{height:U(m.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(T=a.prepend)==null?void 0:T.call(a)]),_&&o(se,{key:"title",text:e.title},{text:a.title}),(R=a.default)==null?void 0:R.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(E=a.append)==null?void 0:E.call(a)])])]}}),o(W,{defaults:{VTabs:{height:U(b.value)}}},{default:()=>[o(Ae,null,{default:()=>[l.value&&o("div",{class:"v-toolbar__extension",style:{height:U(b.value)}},[w])]})]})]})}),{contentHeight:m,extensionHeight:b}}}),Xe=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ge(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=d;let n=0;const u=K(null),s=N(0),g=N(0),v=N(0),y=N(!1),x=N(!1),l=f(()=>Number(e.scrollThreshold)),m=f(()=>de((l.value-s.value)/l.value||0)),b=()=>{const t=u.value;!t||a&&!a.value||(n=s.value,s.value="window"in t?t.pageYOffset:t.scrollTop,x.value=s.value<n,v.value=Math.abs(s.value-l.value))};return j(x,()=>{g.value=g.value||s.value}),j(y,()=>{g.value=0}),te(()=>{j(()=>e.scrollTarget,t=>{var S;const _=t?document.querySelector(t):window;_&&_!==u.value&&((S=u.value)==null||S.removeEventListener("scroll",b),u.value=_,u.value.addEventListener("scroll",b,{passive:!0}))},{immediate:!0})}),ve(()=>{var t;(t=u.value)==null||t.removeEventListener("scroll",b)}),a&&j(a,b,{immediate:!0}),{scrollThreshold:l,currentScroll:s,currentThreshold:v,isScrollActive:y,scrollRatio:m,isScrollingUp:x,savedScroll:g}}const Je=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...re(),...me(),...Xe(),height:{type:[Number,String],default:64}},"VAppBar"),Ke=I()({name:"VAppBar",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const n=K(),u=fe(e,"modelValue"),s=f(()=>{var T;const c=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),g=f(()=>{const c=s.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!u.value}),{currentScroll:v,scrollThreshold:y,isScrollingUp:x,scrollRatio:l}=Ge(e,{canScroll:g}),m=f(()=>e.collapse||s.value.collapse&&(s.value.inverted?l.value>0:l.value===0)),b=f(()=>e.flat||s.value.elevate&&(s.value.inverted?v.value>0:v.value===0)),t=f(()=>s.value.fadeImage?s.value.inverted?1-l.value:l.value:void 0),_=f(()=>{var R,E;if(s.value.hide&&s.value.inverted)return 0;const c=((R=n.value)==null?void 0:R.contentHeight)??0,T=((E=n.value)==null?void 0:E.extensionHeight)??0;return c+T});ge(f(()=>!!e.scrollBehavior),()=>{he(()=>{s.value.hide?s.value.inverted?u.value=v.value>y.value:u.value=x.value||v.value<y.value:u.value=!0})});const{ssrBootStyles:S}=Ue(),{layoutItemStyles:w}=be({id:e.name,order:f(()=>parseInt(e.order,10)),position:O(e,"location"),layoutSize:_,elementSize:N(void 0),active:u,absolute:O(e,"absolute")});return A(()=>{const c=Z.filterProps(e);return o(Z,F({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...w.value,"--v-toolbar-image-opacity":t.value,height:void 0,...S.value},e.style]},c,{collapse:m.value,flat:b.value}),a)}),{}}}),Qe=P({...qe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ze=I()({name:"VAppBarNavIcon",props:Qe(),setup(e,d){let{slots:a}=d;return A(()=>o(Y,F(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),L=I()({name:"VAppBarTitle",props:ne(),setup(e,d){let{slots:a}=d;return A(()=>o(se,F(e,{class:"v-app-bar-title"}),a)),{}}});const et=P({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:ye,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...J(),...ze({location:"top end"}),...ae(),...Q(),...ee(),...Me({transition:"scale-rotate-transition"})},"VBadge"),G=I()({name:"VBadge",inheritAttrs:!1,props:et(),setup(e,d){const{backgroundColorClasses:a,backgroundColorStyles:n}=oe(O(e,"color")),{roundedClasses:u}=le(e),{t:s}=xe(),{textColorClasses:g,textColorStyles:v}=Oe(O(e,"textColor")),{themeClasses:y}=Ve(),{locationStyles:x}=Ye(e,!0,l=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(l)?+(e.offsetY??0):["left","right"].includes(l)?+(e.offsetX??0):0));return A(()=>{const l=Number(e.content),m=!e.max||isNaN(l)?e.content:l<=+e.max?l:`${e.max}+`,[b,t]=ke(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return o(e.tag,F({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},t,{style:e.style}),{default:()=>{var _,S;return[o("div",{class:"v-badge__wrapper"},[(S=(_=d.slots).default)==null?void 0:S.call(_),o(Fe,{transition:e.transition},{default:()=>{var w,c;return[pe(o("span",F({class:["v-badge__badge",y.value,a.value,u.value,g.value],style:[n.value,v.value,e.inline?{}:x.value],"aria-atomic":"true","aria-label":s(e.label,l),"aria-live":"polite",role:"status"},b),[e.dot?void 0:d.slots.badge?(c=(w=d.slots).badge)==null?void 0:c.call(w):e.icon?o(B,{icon:e.icon},null):m]),[[_e,e.modelValue]])]}})])]}})}),{}}}),tt=Le('<div class="logo d-none" data-v-5eb6e77b></div><div class="eaves d-none d-sm-block" data-v-5eb6e77b></div><div class="bambooLeft d-none d-sm-block" data-v-5eb6e77b></div><div class="bambooRight d-none d-sm-block" data-v-5eb6e77b></div><div class="bambooCenterLeft d-none d-md-block" data-v-5eb6e77b></div><div class="bambooCenterLeft2 d-none d-lg-block" data-v-5eb6e77b></div><div class="bambooCenterRight d-none d-lg-block" data-v-5eb6e77b></div>',7),at={__name:"FrontLayout",setup(e){const{apiAuth:d}=Ne(),a=Be(),n=we(),{mobile:u}=Te(),s=f(()=>u.value),g=K(!1),v=f(()=>[{to:"/",text:"回到首頁",icon:"mdi-home",show:!0},{to:"/news",text:"最新消息",icon:"mdi-newspaper",show:!0},{to:"/map",text:"前往地圖",icon:"mdi-map-marker",show:!0},{to:"/about",text:"關於本棧",icon:"mdi-folder-account",show:!0}]),y=f(()=>[{to:"/menu",text:"立即訂購",icon:"mdi-list-box",show:!n.isLogin},{to:"/cart",text:"來去購物",icon:"mdi-cart",show:n.isLogin},{to:"/orders",text:"購物清單",icon:"mdi-list-status",show:n.isLogin&&!n.isAdmin},{to:"/login",text:"立即登入",icon:"mdi-login",show:!n.isLogin},{to:"/admin/adminProducts",text:"後台管理",icon:"mdi-cog",show:n.isLogin&&n.isAdmin}]),x=async()=>{try{q.fire({title:"登出嗎?",text:"按下確定鍵登出。",icon:"question",showDenyButton:!0,confirmButtonText:"確定",denyButtonText:"取消"}).then(async l=>{l.isConfirmed?(await q.fire({title:"登出成功",text:"您即將登出...",icon:"success",showConfirmButton:!1,timer:800}),await d.delete("/users/logout"),n.logout()):l.isDenied&&q.fire({title:"登出取消",icon:"info",showConfirmButton:!1,timer:500})}),a.push("/")}catch{q.fire({position:"center",icon:"error",title:"登出失敗",confirmButtonText:"確定"})}};return te(()=>{const l={duration:3,repeat:-1,yoyo:!0,ease:"power1.inOut"};M.to(".bambooLeft",{...l,rotation:55,transformOrigin:"left top"}),M.to(".bambooRight",{...l,rotation:95,transformOrigin:"100px 0"}),M.to(".bambooCenterLeft",{...l,rotation:110,transformOrigin:"50px 0"}),M.to(".bambooCenterLeft2",{...l,rotation:95,transformOrigin:"50px -20px"}),M.to(".bambooCenterRight",{...l,rotation:95,transformOrigin:"0 top"})}),(l,m)=>{const b=Ce("RouterView");return r(),V(k,null,[s.value?(r(),h(Pe,{key:0,modelValue:g.value,"onUpdate:modelValue":m[0]||(m[0]=t=>g.value=t),temporary:"",location:"right",color:"secondary"},{default:i(()=>[o(je,{nav:""},{default:i(()=>[(r(!0),V(k,null,D(v.value,t=>(r(),V(k,{key:t.to},[t.show?(r(),h(z,{key:0,to:t.to},{prepend:i(()=>[o(B,{icon:t.icon},null,8,["icon"])]),append:i(()=>[t.to==="/cart"?(r(),h(G,{key:0,color:"error",content:H(n).cart,inline:""},null,8,["content"])):p("",!0),o(L,null,{default:i(()=>[C($(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128)),(r(!0),V(k,null,D(v.value,t=>(r(),V(k,{key:t.to},[t.show?(r(),h(z,{key:0,to:t.to},{prepend:i(()=>[o(B,{icon:t.icon},null,8,["icon"])]),append:i(()=>[t.to==="/cart"?(r(),h(G,{key:0,color:"error",content:H(n).cart,inline:""},null,8,["content"])):p("",!0),o(L,null,{default:i(()=>[C($(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128)),(r(!0),V(k,null,D(y.value,t=>(r(),V(k,{key:t.to},[t.show?(r(),h(z,{key:0,to:t.to},{prepend:i(()=>[o(B,{icon:t.icon},null,8,["icon"])]),append:i(()=>[t.to==="/cart"?(r(),h(G,{key:0,color:"error",content:H(n).cart,inline:""},null,8,["content"])):p("",!0),o(L,null,{default:i(()=>[C($(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128)),H(n).isLogin?(r(),h(z,{key:0,onClick:x},{prepend:i(()=>[o(B,{icon:"mdi-logout"})]),append:i(()=>[o(L,null,{default:i(()=>[C("登出")]),_:1})]),_:1})):p("",!0)]),_:1})]),_:1},8,["modelValue"])):p("",!0),tt,o(Ke,{color:"secondary",style:{position:"fixed",top:"45px"}},{default:i(()=>[s.value?(r(),h(X,{key:0,class:"d-flex align-center justify-end"},{default:i(()=>[o(Ze,{onClick:m[1]||(m[1]=t=>g.value=!0),color:"text01"})]),_:1})):(r(),V(k,{key:1},[o(X,{class:"d-flex align-center justify-center"},{default:i(()=>[(r(!0),V(k,null,D(v.value,t=>(r(),V(k,{key:t.to},[t.show?(r(),h(Y,{key:0,class:"mx-1",to:t==null?void 0:t.to,color:"text01",title:"button.text"},{default:i(()=>[o(B,{icon:t.icon},null,8,["icon"]),o(L,null,{default:i(()=>[C($(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128))]),_:1}),o(X,{class:"d-flex align-center justify-center"},{default:i(()=>[(r(!0),V(k,null,D(y.value,t=>(r(),V(k,{key:t.to},[t.show?(r(),h(Y,{key:0,class:"mx-1",to:t==null?void 0:t.to,color:"text01",title:"button.text"},{default:i(()=>[o(B,{icon:t.icon},null,8,["icon"]),o(L,null,{default:i(()=>[C($(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128)),H(n).isLogin?(r(),h(Y,{key:0,class:"mx-1",onClick:x,color:"text01",title:"button.text"},{prepend:i(()=>[o(B,{icon:"mdi-logout"}),o(L,null,{default:i(()=>[C("我要登出")]),_:1})]),_:1})):p("",!0)]),_:1})],64))]),_:1}),o(Ie,null,{default:i(()=>[(r(),h(b,{key:l.$route.path}))]),_:1})],64)}}},bt=Se(at,[["__scopeId","data-v-5eb6e77b"]]);export{bt as default};
