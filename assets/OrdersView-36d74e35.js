import{_ as V,r as h,o as x,G as n,H as l,K as g,L as t,S as v,c as o,Q as d,R as p,a1 as w,J as _,O as k,N as A}from"./index-4d47d133.js";import{S as C}from"./sweetalert2.all-04b561c2.js";import{V as D,a as b}from"./VRow-766ea3b4.js";import{V as B}from"./VDataTable-5410d330.js";/* empty css              */import"./tag-a1f4a708.js";import"./index-c5f05f9d.js";import"./VImg-c7ba8a34.js";import"./VBtn-8b237cf3.js";import"./VSelect-773621a8.js";import"./VTextField-afafd525.js";import"./index-a4183261.js";import"./VList-ff2c962e.js";import"./VAvatar-dfadfce1.js";import"./VOverlay-99e21314.js";import"./scopeId-fc177662.js";const S={__name:"OrdersView",setup(N){const{apiAuth:u}=v(),m=h([]),f=[{title:"訂單編號",key:"_id"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,e)=>r+e.quantity*e.product.price,0)}];return x(async()=>{var a,r;try{const{data:e}=await u.get("/orders");m.value.push(...e.result)}catch(e){const s=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";C.fire({icon:e,title:s,confirmButtonText:"確定"})}}),(a,r)=>{const e=n("H1"),s=n("Div"),y=n("VCantainer");return l(),g(y,null,{default:t(()=>[o(b,{style:{height:"100%"}},{default:t(()=>[o(D,{class:"d-flex justify-center align-center",cols:"12"},{default:t(()=>[o(s,{class:"pa-5 overflow",style:{width:"75rem",height:"43.75rem","border-radius":"20px","background-color":"#CAAD5F"}},{default:t(()=>[o(e,{class:"text-center mb-10",style:{color:"#261E47"}},{default:t(()=>[d("訂單")]),_:1}),o(B,{items:m.value,headers:f},{"item.createdAt":t(({item:i})=>[d(p(new Date(i.createdAt).toLocaleString()),1)]),"item.cart":t(({item:i})=>[w("ul",null,[(l(!0),_(A,null,k(i.cart,c=>(l(),_("li",{key:c._id},p(c.product.name)+" * "+p(c.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1})]),_:1})}}},P=V(S,[["__scopeId","data-v-90c02e0e"]]);export{P as default};
