/* empty css              */import{c as me}from"./VAvatar-58a9f11a.js";import{m as ge,a as ae,b as xe}from"./VSelect-bbf35470.js";import{m as ie,u as ce,a as J,f as de,b as Ve,c as be,d as he,e as Pe}from"./VTextField-037a3d79.js";import{p as K,ah as ye,g as Q,l as ee,ai as pe,e as w,u as Y,aj as ve,c as l,v as p,t as B,V as we,f as Se,N as W,r as N,ak as ke,w as R,X,al as De,s as Te,x as Ce,o as Fe,j as Ie,B as oe,am as Be,an as Re,ao as Ee,h as Ae,i as Ne}from"./index-151d1753.js";import{m as Ge,a as He,b as Me,c as Ue,d as ze,e as Oe,f as _e,u as $e,p as Le,g as je,h as qe,i as We,j as Xe,k as Je,l as Ke,n as le,o as ne,q as re,r as ue}from"./VDataTable-8cb304a3.js";import{m as Qe,V as se}from"./VOverlay-91d0a3ef.js";import{u as Ye}from"./scopeId-223ef0da.js";import{f as Ze,I as et}from"./index-29ae7241.js";const mt=me("v-spacer","div","VSpacer");const tt=K({...ie(),...ye(ge(),["inline"])},"VCheckbox"),gt=Q()({name:"VCheckbox",inheritAttrs:!1,props:tt(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,T){let{attrs:m,slots:t}=T;const n=ee(e,"modelValue"),{isFocused:a,focus:g,blur:C}=ce(e),u=pe(),r=w(()=>e.id||`checkbox-${u}`);return Y(()=>{const[i,v]=ve(m),x=J.filterProps(e),s=ae.filterProps(e);return l(J,p({class:["v-checkbox",e.class]},i,x,{modelValue:n.value,"onUpdate:modelValue":V=>n.value=V,id:r.value,focused:a.value,style:e.style}),{...t,default:V=>{let{id:h,messagesId:G,isDisabled:F,isReadonly:H}=V;return l(ae,p(s,{id:h.value,"aria-describedby":G.value,disabled:F.value,readonly:H.value},v,{modelValue:n.value,"onUpdate:modelValue":M=>n.value=M,onFocus:g,onBlur:C}),t)}})}),{}}}),at=K({itemsLength:{type:[Number,String],required:!0},...Ge(),...He(),...Me()},"VDataTableServer"),xt=Q()({name:"VDataTableServer",props:at(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,T){let{attrs:m,slots:t}=T;const{groupBy:n}=Ue(e),{sortBy:a,multiSort:g,mustSort:C}=ze(e),{page:u,itemsPerPage:r}=Oe(e),i=w(()=>parseInt(e.itemsLength,10)),{columns:v,headers:x}=_e(e,{groupBy:n,showSelect:B(e,"showSelect"),showExpand:B(e,"showExpand")}),{items:s}=$e(e,v),{toggleSort:V}=Le({sortBy:a,multiSort:g,mustSort:C,page:u}),{opened:h,isGroupOpen:G,toggleGroup:F,extractRows:H}=je({groupBy:n,sortBy:a}),{pageCount:M,setItemsPerPage:Z}=qe({page:u,itemsPerPage:r,itemsLength:i}),{flatItems:$}=We(s,n,h),{isSelected:S,select:E,selectAll:U,toggleSelect:k,someSelected:P,allSelected:o}=Xe(e,{allItems:s,currentPage:s}),{isExpanded:f,toggleExpand:c}=Je(e),b=w(()=>H(s.value));Ke({page:u,itemsPerPage:r,sortBy:a,groupBy:n,search:B(e,"search")}),we("v-data-table",{toggleSort:V,sortBy:a}),Se({VDataTableRows:{hideNoData:B(e,"hideNoData"),noDataText:B(e,"noDataText"),loading:B(e,"loading"),loadingText:B(e,"loadingText")}});const d=w(()=>({page:u.value,itemsPerPage:r.value,sortBy:a.value,pageCount:M.value,toggleSort:V,setItemsPerPage:Z,someSelected:P.value,allSelected:o.value,isSelected:S,select:E,selectAll:U,toggleSelect:k,isExpanded:f,toggleExpand:c,isGroupOpen:G,toggleGroup:F,items:b.value.map(I=>I.raw),internalItems:b.value,groupedItems:$.value,columns:v.value,headers:x.value}));Y(()=>{const I=le.filterProps(e),z=ne.filterProps(e),y=re.filterProps(e),A=ue.filterProps(e);return l(ue,p({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},A),{top:()=>{var D;return(D=t.top)==null?void 0:D.call(t,d.value)},default:()=>{var D,O,L,j,q,_;return t.default?t.default(d.value):l(W,null,[(D=t.colgroup)==null?void 0:D.call(t,d.value),l("thead",{class:"v-data-table__thead",role:"rowgroup"},[l(ne,p(z,{sticky:e.fixedHeader}),t)]),(O=t.thead)==null?void 0:O.call(t,d.value),l("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(L=t["body.prepend"])==null?void 0:L.call(t,d.value),t.body?t.body(d.value):l(re,p(m,y,{items:$.value}),t),(j=t["body.append"])==null?void 0:j.call(t,d.value)]),(q=t.tbody)==null?void 0:q.call(t,d.value),(_=t.tfoot)==null?void 0:_.call(t,d.value)])},bottom:()=>t.bottom?t.bottom(d.value):l(le,I,{prepend:t["footer.prepend"]})})})}});const ot=K({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Qe({origin:"center center",scrollStrategy:"block",transition:{component:xe},zIndex:2400})},"VDialog"),Vt=Q()({name:"VDialog",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,T){let{slots:m}=T;const t=ee(e,"modelValue"),{scopeId:n}=Ye(),a=N();function g(u){var v,x;const r=u.relatedTarget,i=u.target;if(r!==i&&((v=a.value)!=null&&v.contentEl)&&((x=a.value)!=null&&x.globalTop)&&![document,a.value.contentEl].includes(i)&&!a.value.contentEl.contains(i)){const s=De(a.value.contentEl);if(!s.length)return;const V=s[0],h=s[s.length-1];r===V?h.focus():V.focus()}}ke&&R(()=>t.value&&e.retainFocus,u=>{u?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)},{immediate:!0}),R(t,async u=>{var r,i;await X(),u?(r=a.value.contentEl)==null||r.focus({preventScroll:!0}):(i=a.value.activatorEl)==null||i.focus({preventScroll:!0})});const C=w(()=>p({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps));return Y(()=>{const u=se.filterProps(e);return l(se,p({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},u,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r,"aria-modal":"true",activatorProps:C.value,role:"dialog"},n),{activator:m.activator,default:function(){for(var r=arguments.length,i=new Array(r),v=0;v<r;v++)i[v]=arguments[v];return l(Ze,{root:"VDialog"},{default:()=>{var x;return[(x=m.default)==null?void 0:x.call(m,...i)]}})}})}),de({},a)}});const lt=K({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ie(),...Ve()},"VTextarea"),bt=Q()({name:"VTextarea",directives:{Intersect:et},inheritAttrs:!1,props:lt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,T){let{attrs:m,emit:t,slots:n}=T;const a=ee(e,"modelValue"),{isFocused:g,focus:C,blur:u}=ce(e),r=w(()=>typeof e.counterValue=="function"?e.counterValue(a.value):(a.value||"").toString().length),i=w(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function v(o,f){var c,b;!e.autofocus||!o||(b=(c=f[0].target)==null?void 0:c.focus)==null||b.call(c)}const x=N(),s=N(),V=Te(""),h=N(),G=w(()=>e.persistentPlaceholder||g.value||e.active);function F(){var o;h.value!==document.activeElement&&((o=h.value)==null||o.focus()),g.value||C()}function H(o){F(),t("click:control",o)}function M(o){t("mousedown:control",o)}function Z(o){o.stopPropagation(),F(),X(()=>{a.value="",Ee(e["onClick:clear"],o)})}function $(o){var c;const f=o.target;if(a.value=f.value,(c=e.modelModifiers)!=null&&c.trim){const b=[f.selectionStart,f.selectionEnd];X(()=>{f.selectionStart=b[0],f.selectionEnd=b[1]})}}const S=N(),E=N(+e.rows),U=w(()=>["plain","underlined"].includes(e.variant));Ce(()=>{e.autoGrow||(E.value=+e.rows)});function k(){e.autoGrow&&X(()=>{if(!S.value||!s.value)return;const o=getComputedStyle(S.value),f=getComputedStyle(s.value.$el),c=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),b=S.value.scrollHeight,d=parseFloat(o.lineHeight),I=Math.max(parseFloat(e.rows)*d+c,parseFloat(f.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*d+c||1/0,y=Ne(b??0,I,z);E.value=Math.floor((y-c)/d),V.value=Ae(y)})}Fe(k),R(a,k),R(()=>e.rows,k),R(()=>e.maxRows,k),R(()=>e.density,k);let P;return R(S,o=>{o?(P=new ResizeObserver(k),P.observe(S.value)):P==null||P.disconnect()}),Ie(()=>{P==null||P.disconnect()}),Y(()=>{const o=!!(n.counter||e.counter||e.counterValue),f=!!(o||n.details),[c,b]=ve(m),{modelValue:d,...I}=J.filterProps(e),z=be(e);return l(J,p({ref:x,modelValue:a.value,"onUpdate:modelValue":y=>a.value=y,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":U.value},e.class],style:e.style},c,I,{centerAffix:E.value===1&&!U.value,focused:g.value}),{...n,default:y=>{let{id:A,isDisabled:D,isDirty:O,isReadonly:L,isValid:j}=y;return l(he,p({ref:s,style:{"--v-textarea-control-height":V.value},onClick:H,onMousedown:M,"onClick:clear":Z,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:A.value,active:G.value||O.value,centerAffix:E.value===1&&!U.value,dirty:O.value||e.dirty,disabled:D.value,focused:g.value,error:j.value===!1}),{...n,default:q=>{let{props:{class:_,...te}}=q;return l(W,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),oe(l("textarea",p({ref:h,class:_,value:a.value,onInput:$,autofocus:e.autofocus,readonly:L.value,disabled:D.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:u},te,b),null),[[Be("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&oe(l("textarea",{class:[_,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":fe=>a.value=fe,ref:S,readonly:!0,"aria-hidden":"true"},null),[[Re,a.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?y=>{var A;return l(W,null,[(A=n.details)==null?void 0:A.call(n,y),o&&l(W,null,[l("span",null,null),l(Pe,{active:e.persistentCounter||g.value,value:r.value,max:i.value},n.counter)])])}:void 0})}),de({},x,s,h)}});export{Vt as V,xt as a,gt as b,bt as c,mt as d};
