import{V as g}from"./VContainer-2fd5ecc8.js";import{V as w}from"./VRow-92170c26.js";import{V as u}from"./VCol-40d6d041.js";import{V as s}from"./VTextField-adbdded8.js";import{V as q}from"./VSelect-43dd6c01.js";import{V as C}from"./VBtn-3e6b5d2e.js";import{r as a,G as p,H as R,K as U,L as t,c as e,Q as V}from"./index-fc46c0b9.js";/* empty css              */import"./tag-206ce5d1.js";import"./index-11f0d9bb.js";import"./index-e95effd1.js";import"./VList-0acd590f.js";import"./VAvatar-3b78fa38.js";import"./VOverlay-24284c30.js";import"./scopeId-3282651f.js";const S={__name:"ReservationView",setup(k){a(!1);const m=a("");a("");const n=a(""),i=a(""),v=[l=>l?!0:"欄位不得為空"],b=[l=>l?!0:"欄位不得為空"],d=[l=>l?!0:"欄位不得為空",l=>/.+@.+\..+/.test(l)?!0:"E-mail必須是有效的。"];a();const f=a(null),_=["包廂1","包廂2","包廂3","包廂4"];a(!1);const x=async()=>{const{valid:l}=await this.form.validate();l&&alert("Form is valid")};return(l,o)=>{const y=p("H1"),c=p("Div");return R(),U(g,{class:"d-flex justify-center align-center",style:{height:"100%"}},{default:t(()=>[e(c,{class:"pa-5 bg-tertiary custom-scrollbar",style:{width:"75rem",height:"43.75rem","border-radius":"20px","text-align":"center"}},{default:t(()=>[e(y,{class:"text-center mb-10",style:{color:"#261E47"}},{default:t(()=>[V("線上訂位")]),_:1}),e(w,{class:"justify-center"},{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>[e(s,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=r=>m.value=r),rules:v,counter:10,label:"姓名",required:!0},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=r=>n.value=r),rules:b,counter:10,label:"電話",required:!0},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(s,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=r=>i.value=r),rules:d,label:"E-mail",required:!0},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(q,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=r=>f.value=r),items:_,rules:[r=>!!r||"欄位不得為空"],label:"訂位",required:""},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.text,"onUpdate:modelValue":o[4]||(o[4]=r=>l.text=r),rules:d,label:"備註最多20字",required:!0,counter:20},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(c,{class:"d-flex flex-column"},{default:t(()=>[e(C,{class:"mt-4",color:"primary",block:"",onClick:x,style:{height:"5rem","border-radius":"0.75rem","font-size":"2.5rem","font-weight":"border"}},{default:t(()=>[V("完成訂位")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{S as default};