"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5984],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>T,default:()=>j,frontMatter:()=>E,metadata:()=>x,toc:()=>I});var r=n(9675),a=n(9231),l=n(4852),o=n(9841),u=n(971),i=n(9409),s=n(4578),c=n(4609),p=n(729);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:n,groupId:r}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=i??c;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var g=n(765);const h="tabList_YkLP",v="tabItem_dswv";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),i(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},u,{className:(0,o.Z)("tabs__item",v,null==u?void 0:u.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}const O="tabItem_Z7jx";function P(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(O,r),hidden:n},t)}const E={sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},T="\u8ba1\u8d39\u6536\u8d39",x={unversionedId:"info/mis/business/billing",id:"info/mis/business/billing",title:"\u8ba1\u8d39\u6536\u8d39",description:"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002",source:"@site/docs/info/mis/business/billing.mdx",sourceDirName:"info/mis/business",slug:"/info/mis/business/billing",permalink:"/SCOW/pr-preview/pr-493/docs/info/mis/business/billing",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/info/mis/business/billing.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},sidebar:"info",previous:{title:"\u7528\u6237\u6a21\u578b",permalink:"/SCOW/pr-preview/pr-493/docs/info/mis/business/users"}},S={},I=[{value:"\u8ba1\u8d39\u89c4\u5219",id:"\u8ba1\u8d39\u89c4\u5219",level:2},{value:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868",id:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868",level:2},{value:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",level:2}],A={toc:I};function j(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8ba1\u8d39\u6536\u8d39"},"\u8ba1\u8d39\u6536\u8d39"),(0,l.kt)("p",null,"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,"\u6536\u8d39\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u91c7\u7528\u9884\u4ed8\u8d39\u5236\uff0c\u6bcf\u4e2a\u79df\u6237\u548c\u8d26\u6237\u5177\u6709\u4f59\u989d"),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u79df\u6237\u589e\u52a0\u4f59\u989d\uff0c\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u8d26\u6237\u589e\u52a0\u4f59\u989d"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e2d\u4f59\u989d\u5b58\u50a8\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d\uff0c\u524d\u53f0\u663e\u793a3\u4f4d")),(0,l.kt)("p",null,"\u8ba1\u8d39\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7684\u8ba1\u8d39\u6536\u8d39\u6a21\u578b\u6309\u7167\u96c6\u7fa4\u3001\u5206\u533a\u548cQOS\u8fdb\u884c\u6536\u8d39",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://hpc.pku.edu.cn/guide_6.html"},"\u5317\u5927\u9ad8\u6027\u80fd\u5e73\u53f0\u6536\u8d39\u6807\u51c6"),"\u8bbe\u8ba1"))),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u652f\u6301\u591a\u7ea7\u8ba1\u8d39\uff1a\u5e73\u53f0\u5bf9\u79df\u6237\u4f7f\u7528\u4e00\u4e2a\u7edf\u4e00\u7684\u6536\u8d39\u6807\u51c6\uff0c\u800c\u79df\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u79df\u6237\u5185\u7684\u8d26\u6237\u7684\u8d39\u7528\u6807\u51c6")),(0,l.kt)("h2",{id:"\u8ba1\u8d39\u89c4\u5219"},"\u8ba1\u8d39\u89c4\u5219"),(0,l.kt)("p",null,"\u670d\u52a1\u5668\u4f1a\u5b9a\u671f\u5730\u4ece",(0,l.kt)("strong",{parentName:"p"},"\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"),"\u4e2d\u83b7\u53d6\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u89c4\u5219\u5bf9\u79df\u6237\u548c\u8d26\u6237\u8fdb\u884c\u6263\u8d39\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u7cfb\u7edf\u8ba1\u8d39\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u8d39\u7528\u9879\u76ee price item"),"\u4e3a\u57fa\u7840\uff0c\u6bcf\u4e2a\u8ba1\u8d39\u9879\u6709\u72ec\u7279\u7684ID\u4ee5\u53ca\u4ef7\u683c\uff0c\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u5e94\u8be5\u6709\u4e00\u4e2a\u72ec\u7279\u7684\u8ba1\u8d39\u9879\u3002\u8ba1\u8d39\u9879\u4e00\u65e6\u521b\u5efa\u548c\u5206\u914d\u4e0d\u80fd\u88ab\u91cd\u65b0\u5206\u914d\u3001\u4fee\u6539\u6216\u8005\u5220\u9664\uff0c\u5982\u679c\u60a8\u60f3\u4fee\u6539\u4e00\u4e2a\u8ba1\u8d39\u9879\u7684\u4ef7\u683c\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8ba1\u8d39\u9879\u3002"),(0,l.kt)("p",null,"\u8d39\u7528\u9879\u76ee\u7684\u4fe1\u606f\u5b58\u653e\u5728\u6570\u636e\u5e93\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"job_price_item"),"\u8868\u4e2d\u3002\u6bcf\u6b21\u9700\u8981\u8ba1\u7b97\u4ef7\u683c\u65f6\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u5f97\u6240\u6709\u8ba1\u8d39\u9879\uff0c\u5e76\u5f97\u5230\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u7684\u6700\u65b0\u7684\u8ba1\u8d39\u89c4\u5219\u3002\u5982\u679c\u5728\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u67d0\u4e2aQOS\u4e0d\u5b58\u5728\u8d39\u7528\u9879\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u8ba1\u7b97\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56db\u820d\u4e94\u5165(\u4f5c\u4e1a\u6301\u7eed\u5c0f\u65f6 (",(0,l.kt)("inlineCode",{parentName:"p"},"timeUsed")," / 3600) x \u7528\u91cf x \u6240\u9002\u7528\u7684\u8d39\u7528\u9879\u76ee\u7684\u4ef7\u683c)")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u7528\u91cf\u7531\u8ba1\u8d39\u7b56\u7565(amount)\u786e\u5b9a\uff0c\u652f\u6301\u7684\u8ba1\u8d39\u7b56\u7565\u53d6\u503c\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"amount"),(0,l.kt)("th",{parentName:"tr",align:null},"\u603b\u91cf\u7b97\u6cd5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpusAlloc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpusAlloc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gpu")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gpu"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max-cpusAlloc-mem")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max(cpusAlloc, \u5411\u4e0a\u53d6\u6574(memReq / (\u5206\u533a\u5185\u5b58\u91cf/\u5206\u533a\u6838\u5fc3\u6570)))"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max-gpu-cpusAlloc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max(gpu, \u5411\u4e0a\u53d6\u6574(cpusAlloc / (\u5206\u533a\u6838\u5fc3\u6570/\u5206\u533agpu\u6570)))"))))),(0,l.kt)("p",null,"\u5728\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u5982\u679c\u53d1\u73b0\u4e86\u5176\u4ed6\u7b56\u7565\uff0c\u5219\u6574\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u4e3a0\u3002"),(0,l.kt)("h2",{id:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"},"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\u6216\u8005\u4ee5\u5e73\u53f0\u7ba1\u7406\u5458\u8eab\u4efd\u767b\u5f55\u7cfb\u7edf\u540e\u8fdb\u5165",(0,l.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"),"->",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"),"\uff0c\u5728\u7f51\u9875\u4e0a\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4f5c\u4e1a\u4ef7\u683c\u8868",src:n(5801).Z,width:"2418",height:"1057"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4fee\u6539\u4f5c\u4e1a\u4ef7\u683c",src:n(8728).Z,width:"997",height:"935"})),(0,l.kt)("p",null,"\u65b0\u7684\u4f5c\u4e1a\u4ef7\u683c\u8868\u5c06\u5728\u4e0b\u6b21\u83b7\u53d6\u4f5c\u4e1a\u65f6\u751f\u6548\u3002"),(0,l.kt)("h2",{id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"},"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"config/priceItems.{json|yml|yaml}"),"\u6587\u4ef6\uff0c\u5b9a\u4e49(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u4ee5\u53ca\u5bf9\u5e94\u7684\u8d39\u7528\u9879\u76ee\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5feb\u901f\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u76ee\u3002\u6587\u4ef6\u683c\u5f0f\u4ee5\u53ca\u5404\u4e2a\u5b57\u6bb5\u7684\u89e3\u91ca\u8bf7\u53c2\u8003\u4e0b\u5217yaml\u6587\u4ef6\u7684\u6ce8\u91ca\u3002"),(0,l.kt)(C,{mdxType:"Tabs"},(0,l.kt)(P,{value:"config/priceItems.yml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"default: # \u9ed8\u8ba4\u89c4\u5219\uff0c\u5bf9\u6240\u6709\u96c6\u7fa4\u548c\u79df\u6237\u751f\u6548\n  hpc01: # \u5bf9hpc01\u96c6\u7fa4\u7684...\n    compute: # compute\u5206\u533a\u7684...\n      low: # QOS\u4e3alow\u7684\u4efb\u52a1\n        id: HPC01 # \u8d39\u7528\u9879\u76eeID\u4e3aHPC01\n        price: '1.00' # \u57fa\u7840\u4ef7\u683c\u4e3a1.00\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n        amount: 'cpusAlloc' # \u8ba1\u8d39\u7b56\u7565\uff0c\u770b\u4e0a\u6587\n      normal:\n        id: HPC02\n        price: '2.00'\n        amount: 'cpusAlloc'\n      high:\n        id: HPC03\n        price: '3.00'\n        amount: 'cpusAlloc'\n    GPU: # \u5982\u679c\u6574\u4e2a\u5206\u533a\u7684\u8d39\u7528\u76f8\u540c\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7ed9\u4e00\u6574\u4e2a\u5206\u533a\u5b9a\u4e49\u4e00\u4e2a\u8d39\u7528\u9879\u76ee\n      id: HPC04\n      price: '10.00'\n      amount: 'cpusAlloc'\ntenant_1: # \u5bf9\u79df\u6237tenant_1\u7684\u8d26\u6237\u7528\u6237\u53d1\u8d77\u7684\u4efb\u52a1\uff0c\u5728\u9ed8\u8ba4\u89c4\u5219\u7684\u57fa\u7840\u4e0a\uff0c\u8986\u76d6\u4ee5\u4e0b\u914d\u7f6e\n  hpc01:\n    GPU:\n      low:\n        id: HPC07 # \u5bf9\u79df\u6237tenant_1\u7684hpc01.GPU.low\u7684\u4efb\u52a1\uff0c\u4ef7\u683c\u4e3a12.00\n        price: '12.00'\n        amount: 'cpusAlloc'\n"))),(0,l.kt)(P,{value:"config/priceItems.json",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": {\n    "hpc01": {\n      "compute": {\n        "low": {\n          "id": "HPC01",\n          "price": "1.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC02",\n          "price": "2.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC03",\n          "price": "3.00",\n          "amount": "cpusAlloc"\n         }\n      },\n      "GPU": {\n        "low": {\n          "id": "HPC04",\n          "price": "10.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC05",\n          "price": "20.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC06",\n          "price": "30.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  },\n  "tenant_1": {\n    "hpc01": {\n      "GPU": {\n        "low": {\n          "id": "HPC07",\n          "price": "12.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  }\n}\n')))),(0,l.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8ba1\u8d39\u9879\u5e94\u8be5\u53ea\u51fa\u73b0\u4e00\u6b21\u3002\u5373\u4f7f\u591a\u4e2aQOS\u8d39\u7528\u76f8\u540c\uff0c\u4e5f\u5e94\u8be5\u5b9a\u4e49\u4e24\u4e2a\u8ba1\u8d39\u9879"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u5177\u6709\u76f8\u540c\u8ba1\u8d39\u9879\u540d\u7684\u884c")),(0,l.kt)("p",null,"\u5728\u6570\u636e\u5e93\u6b63\u5728\u8fd0\u884c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u914d\u7f6e\u7f16\u5199\u5b8c\u6210\u7684\u6761\u4ef6\u4e0b\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5feb\u901f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose run mis-server createPriceItems\n")))}j.isMDXComponent=!0},8728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edit-price-item-d984facac9485f1863b7a8f2382e8f2b.png"},5801:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/price-table-1d232d50cbdc495a0d3bf3b0c11c0ed8.png"}}]);