import{_ as J,r as n,H as M,J as Q,c as a,L as o,N as j,S as z,Q as p,af as G,R as $,K as W,M as X,P as s,$ as Y,a7 as Z,a8 as ee,a1 as te}from"./index-79391d2e.js";import{c as ae,a as I,f as le,u as oe,b as w,V as se}from"./VForm-ed04b970.js";import{S as P}from"./sweetalert2.all-04b561c2.js";import{V as re}from"./VContainer-b265255d.js";import{V as ne,a as ue,b as ie,c as de,d as pe}from"./VTextarea-2bbb5113.js";import{a as me,V as U}from"./VRow-73548b48.js";import{V as _}from"./VBtn-fad528cb.js";import{V as D}from"./VTextField-f19559fa.js";import{d as ce,V as ge,b as ve,c as fe}from"./VCard-d69f044e.js";import{V as Ve}from"./VSelect-b7aa0dbc.js";import{i as be}from"./index-56466a3f.js";/* empty css              */import"./tag-9dd3b1e3.js";import"./VAvatar-13edf35b.js";import"./VDataTable-1101d9af.js";import"./VList-9d96206d.js";import"./index-0f2a5105.js";import"./VOverlay-11237b9a.js";import"./scopeId-3681e770.js";const xe=m=>(Z("data-v-99e6c604"),m=m(),ee(),m),ye=xe(()=>te("h1",{class:"text-center"},"消息發布",-1)),we={__name:"NewsView",setup(m){const{apiAuth:k}=z();n(null);const c=n(!1),i=n(""),N=l=>{l?(i.value=l._id,g.value.value=l.title,f.value.value=l.group,v.value.value=l.content,V.value.value=l.poText):i.value="",c.value=!0},A=()=>{c.value=!1,H()},q=["公休","活動","其他"],L=ae({title:I().required("請輸入標題").min(2,"標題太短").max(50,"標題太長"),group:I().required("請選擇類別").oneOf(["公休","活動","其他"],"類別選擇錯誤"),content:I().required("請輸入內容").min(10,"內容太短").max(100,"內容太長"),poText:le().required("請選擇貼文上架狀態")}),{handleSubmit:K,isSubmitting:S,resetForm:H}=oe({validationSchema:L,initialValues:{group:"",title:"",content:"",poText:!1,_id:""}}),g=w("title"),v=w("content"),f=w("group"),V=w("poText"),O=K(async l=>{var t,e;try{i.value===""?await k.post("/news",{group:l.group,title:l.title,content:l.content,poText:l.poText}):await k.patch("/news/"+i.value,{group:l.group,title:l.title,content:l.content,poText:l.poText});const r=i.value===""?"新增成功":"編輯成功";P.fire({position:"center",icon:"success",title:r,showConfirmButton:!1,timer:1500}),A(),B()}catch(r){console.log(r);const u=((e=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";P.fire({position:"center",icon:"error",title:u,showConfirmButton:!1})}}),T=n(10),b=n([{key:"createdAt",order:"desc"}]),x=n(1),C=n([]),R=[{title:"類別",align:"center",sortable:!0,key:"group"},{title:"標題",align:"center",sortable:!1,key:"title"},{title:"內容",align:"center",sortable:!0,key:"content"},{title:"上架狀態",align:"center",sortable:!0,key:"poText"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],h=n(!0),F=n(0),y=n(""),d=async()=>{var l,t,e,r;h.value=!0;try{const{data:u}=await k.get("/news/all",{params:{page:x.value,itemsPerPage:T.value,sortBy:((l=b.value[0])==null?void 0:l.key)||"createdAt",sortOrder:((t=b.value[0])==null?void 0:t.order)==="asc"?1:-1,search:y.value}});C.value.splice(0,C.value.length,...u.result.data),F.value=u.result.total}catch(u){console.log(u);const E=((r=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";P.fire({position:"center",icon:"error",title:E,showConfirmButton:!0})}h.value=!1};d();const B=()=>{x.value=1,d()};return(l,t)=>(M(),Q(j,null,[a(re,null,{default:o(()=>[a(me,null,{default:o(()=>[a(U,{cols:"12"},{default:o(()=>[ye]),_:1}),a(U,{cols:"12"},{default:o(()=>[a(_,{color:"green",onClick:t[0]||(t[0]=e=>N())},{default:o(()=>[p("新增消息")]),_:1})]),_:1}),a(U,{cols:"12"},{default:o(()=>[a(ue,{"items-per-page":T.value,"onUpdate:itemsPerPage":[t[2]||(t[2]=e=>T.value=e),d],"sort-by":b.value,"onUpdate:sortBy":[t[3]||(t[3]=e=>b.value=e),d],page:x.value,"onUpdate:page":[t[4]||(t[4]=e=>x.value=e),d],items:C.value,headers:R,loading:h.value,"items-length":F.value,search:y.value,hover:""},{top:o(()=>[a(D,{label:"搜尋","append-icon":"mdi-magnify",modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=e=>y.value=e),"onClick:append":B,onKeydown:G(B,["enter"])},null,8,["modelValue"])]),"item.group":o(({item:e})=>[p($(e.group),1)]),"item.poText":o(({item:e})=>[e.poText?(M(),W(be,{key:0,icon:"mdi-check"})):X("",!0)]),"item.edit":o(({item:e})=>[a(_,{icon:"mdi-pencil",variant:"text",color:"#A0674B",onClick:r=>N(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),a(ne,{modelValue:c.value,"onUpdate:modelValue":t[9]||(t[9]=e=>c.value=e),persistent:"",width:"500px"},{default:o(()=>[a(se,{disabled:s(S),onSubmit:Y(s(O),["prevent"])},{default:o(()=>[a(ce,null,{default:o(()=>[a(ge,null,{default:o(()=>[p($(i.value===""?"新增消息":"編輯消息"),1)]),_:1}),a(ve,null,{default:o(()=>[a(D,{label:"標題",modelValue:s(g).value.value,"onUpdate:modelValue":t[5]||(t[5]=e=>s(g).value.value=e),"error-messages":s(g).errorMessage.value},null,8,["modelValue","error-messages"]),a(Ve,{label:"類別",items:q,modelValue:s(f).value.value,"onUpdate:modelValue":t[6]||(t[6]=e=>s(f).value.value=e),"error-messages":s(f).errorMessage.value},null,8,["modelValue","error-messages"]),a(ie,{label:"上架",modelValue:s(V).value.value,"onUpdate:modelValue":t[7]||(t[7]=e=>s(V).value.value=e),"error-messages":s(V).errorMessage.value},null,8,["modelValue","error-messages"]),a(de,{label:"內容",modelValue:s(v).value.value,"onUpdate:modelValue":t[8]||(t[8]=e=>s(v).value.value=e),"error-messages":s(v).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(fe,null,{default:o(()=>[a(pe),a(_,{color:"red",disabled:s(S),onClick:A},{default:o(()=>[p("取消")]),_:1},8,["disabled"]),a(_,{color:"green",type:"submit",loading:s(S)},{default:o(()=>[p("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64))}},He=J(we,[["__scopeId","data-v-99e6c604"]]);export{He as default};
