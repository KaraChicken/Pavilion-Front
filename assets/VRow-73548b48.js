/* empty css              */import{a_ as i,aA as u,p as C,m as S,g as b,e as k,V as N}from"./index-79391d2e.js";import{m as V}from"./tag-9dd3b1e3.js";const j=(()=>i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}))(),v=(()=>i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),L=(()=>i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),y={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(L)};function _(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const G=["auto","start","end","center","baseline","stretch"],I=C({cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>G.includes(t)},...S(),...V()},"VCol"),J=b()({name:"VCol",props:I(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=_(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return N(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const R=[...f,"baseline","stretch"],h=t=>R.includes(t),w=d("align",()=>({type:String,default:null,validator:h})),T=[...f,...$],P=t=>T.includes(t),A=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...$,"stretch"],E=t=>U.includes(t),O=d("alignContent",()=>({type:String,default:null,validator:E})),m={align:Object.keys(w),justify:Object.keys(A),alignContent:Object.keys(O)},B={align:"align",justify:"justify",alignContent:"align-content"};function M(t,a,e){let s=B[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const F=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...A,alignContent:{type:String,default:null,validator:E},...O,...S(),...V()},"VRow"),W=b()({name:"VRow",props:F(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=t[r],c=M(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return N(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{J as V,W as a};
