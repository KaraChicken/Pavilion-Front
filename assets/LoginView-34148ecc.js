import{_ as S,D as A,E as F,G as l,H as k,K as D,L as t,T as B,c as e,R as n,a2 as H,Q as s}from"./index-151d1753.js";import{c as L,a as m,u as T,b as d,V as R}from"./VForm-3ceaf6d5.js";import{S as p}from"./sweetalert2.all-04b561c2.js";import{V as U,a as j}from"./VRow-46861881.js";import{d as q}from"./VCard-efb012d3.js";import{V as f}from"./VBtn-28982c21.js";import{V as E}from"./VSheet-d73dd246.js";import{V as _}from"./VTextField-037a3d79.js";/* empty css              */import"./tag-8b161322.js";import"./VAvatar-58a9f11a.js";import"./index-29ae7241.js";import"./index-dcb4557a.js";const N={__name:"LoginView",setup($){const{api:g}=B(),V=A(),b=F(),x=L({account:m().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:m().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:w,isSubmitting:z}=T({validationSchema:x}),i=d("account"),c=d("password"),h=w(async a=>{try{await p.fire({position:"center",icon:"success",title:"登入成功",showConfirmButton:!1,timer:1500});const{data:o}=await g.post("/users/login",{account:a.account,password:a.password});b.login(o.result),V.push("/")}catch(o){console.log(o),p.fire({position:"center",icon:"error",title:"登入失敗",confirmButtonText:"確定"})}});return(a,o)=>{const v=l("H1"),y=l("H3"),u=l("Div"),C=l("VCantainer");return k(),D(C,null,{default:t(()=>[e(j,{style:{height:"100%"}},{default:t(()=>[e(U,{class:"d-flex justify-center align-center",cols:"12"},{default:t(()=>[e(u,{class:"pa-5",style:{width:"75rem",height:"43.75rem","border-radius":"20px","background-color":"#CAAD5F"}},{default:t(()=>[e(v,{class:"text-center mb-10",style:{color:"#261E47"}},{default:t(()=>[n("同道相邀")]),_:1}),e(u,{class:"d-flex justify-center",style:{height:"calc(100% - (88px * 2))"}},{default:t(()=>[e(q,{class:"px-6 py-8","max-width":"344",color:"text01"},{default:t(()=>[e(y,{class:"mb-5"},{default:t(()=>[n("沒有帳號嗎?"),e(f,{class:"mx-5",to:"/register",style:{"background-color":"#CAAD5F","font-weight":"bold"}},{default:t(()=>[n("立即註冊")]),_:1})]),_:1}),e(E,{class:"bgLogin mx-auto","max-width":"300",color:"text01",style:{height:"calc(100% - 56px * 2)"}},{default:t(()=>[e(R,{"validate-on":"submit lazy",onSubmit:H(s(h),["prevent"])},{default:t(()=>[e(_,{modelValue:s(i).value.value,"onUpdate:modelValue":o[0]||(o[0]=r=>s(i).value.value=r),rules:a.rules,label:"帳號"},null,8,["modelValue","rules"]),e(_,{modelValue:s(c).value.value,"onUpdate:modelValue":o[1]||(o[1]=r=>s(c).value.value=r),rules:a.rules,label:"密碼"},null,8,["modelValue","rules"]),e(f,{class:"login",loading:a.loading,type:"submit",block:"",text:"登入",style:{"background-color":"#CAAD5F","font-weight":"bold"}},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},te=S(N,[["__scopeId","data-v-8c3eebe3"]]);export{te as default};
