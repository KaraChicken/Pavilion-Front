import{_ as S,D as A,E as F,G as l,H as k,K as D,L as t,S as B,c as e,Q as n,$ as H,P as s}from"./index-d4405f49.js";import{c as L,a as m,u as T,b as d,V as U}from"./VForm-fd03692a.js";import{S as p}from"./sweetalert2.all-04b561c2.js";import{V as $}from"./VCol-78793525.js";import{d as j}from"./VCard-28f8b21b.js";import{V as f}from"./VBtn-1f341a94.js";import{V as q}from"./VSheet-f040be05.js";import{V as _}from"./VTextField-795fe5ec.js";import{V as E}from"./VRow-360f6a82.js";/* empty css              */import"./tag-7862d115.js";import"./VAvatar-ce24cd2c.js";import"./index-1cba56a3.js";import"./index-a06145c9.js";const N={__name:"LoginView",setup(R){const{api:V}=B(),g=A(),b=F(),x=L({account:m().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:m().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:w,isSubmitting:z}=T({validationSchema:x}),i=d("account"),c=d("password"),h=w(async a=>{try{await p.fire({position:"center",icon:"success",title:"登入成功",showConfirmButton:!1,timer:1500});const{data:o}=await V.post("/users/login",{account:a.account,password:a.password});b.login(o.result),g.push("/")}catch(o){console.log(o),p.fire({position:"center",icon:"error",title:"登出失敗",confirmButtonText:"確定"})}});return(a,o)=>{const v=l("H1"),y=l("H3"),u=l("Div"),C=l("VCantainer");return k(),D(C,null,{default:t(()=>[e(E,{style:{height:"100%"}},{default:t(()=>[e($,{class:"d-flex justify-center align-center",cols:"12"},{default:t(()=>[e(u,{class:"pa-5",style:{width:"75rem",height:"43.75rem","border-radius":"20px","background-color":"#CAAD5F"}},{default:t(()=>[e(v,{class:"text-center mb-10",style:{color:"#261E47"}},{default:t(()=>[n("同道相邀")]),_:1}),e(u,{class:"d-flex justify-center",style:{height:"calc(100% - (88px * 2))"}},{default:t(()=>[e(j,{class:"px-6 py-8","max-width":"344",color:"text01"},{default:t(()=>[e(y,{class:"mb-5"},{default:t(()=>[n("沒有帳號嗎?"),e(f,{class:"mx-5",to:"/register",style:{"background-color":"#CAAD5F","font-weight":"bold"}},{default:t(()=>[n("立即註冊")]),_:1})]),_:1}),e(q,{class:"bgLogin mx-auto","max-width":"300",color:"text01",style:{height:"calc(100% - 56px * 2)"}},{default:t(()=>[e(U,{"validate-on":"submit lazy",onSubmit:H(s(h),["prevent"])},{default:t(()=>[e(_,{modelValue:s(i).value.value,"onUpdate:modelValue":o[0]||(o[0]=r=>s(i).value.value=r),rules:a.rules,label:"帳號"},null,8,["modelValue","rules"]),e(_,{modelValue:s(c).value.value,"onUpdate:modelValue":o[1]||(o[1]=r=>s(c).value.value=r),rules:a.rules,label:"密碼"},null,8,["modelValue","rules"]),e(f,{class:"login",loading:a.loading,type:"submit",block:"",text:"登入",style:{"background-color":"#CAAD5F","font-weight":"bold"}},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},oe=S(N,[["__scopeId","data-v-472c792b"]]);export{oe as default};
