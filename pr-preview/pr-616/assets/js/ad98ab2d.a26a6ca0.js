"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8388],{4852:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>O});var r=t(9231);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=c(t),m=n,O=k["".concat(l,".").concat(m)]||k[m]||u[m]||a;return t?r.createElement(O,i(i({ref:o},s),{},{components:t})):r.createElement(O,i({ref:o},s))}));function O(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in o)hasOwnProperty.call(o,l)&&(p[l]=o[l]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7031:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(5675),n=(t(9231),t(4852));const a={sidebar_position:3,title:"SCOW Hook"},i="SCOW Hook",p={unversionedId:"integration/scow-api-hook/hook",id:"integration/scow-api-hook/hook",title:"SCOW Hook",description:"\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86SCOW Hook\uff0c\u90a3\u4e48SCOW\u5728\u53d1\u751f\u4e00\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u901a\u8fc7SCOW Hook\u8c03\u7528\u76d1\u542c\u7684Hook\u670d\u52a1\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7SCOW Hook\u76d1\u542cSCOW\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u5e76\u81ea\u5df1\u8fdb\u884c\u4e00\u4e9b\u540e\u7eed\u5904\u7406\u3002",source:"@site/docs/integration/scow-api-hook/hook.md",sourceDirName:"integration/scow-api-hook",slug:"/integration/scow-api-hook/hook",permalink:"/SCOW/pr-preview/pr-616/docs/integration/scow-api-hook/hook",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api-hook/hook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SCOW Hook"},sidebar:"integration",previous:{title:"SCOW API",permalink:"/SCOW/pr-preview/pr-616/docs/integration/scow-api-hook/api"},next:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/SCOW/pr-preview/pr-616/docs/category/\u4f7f\u7528\u793a\u4f8b"}},l={},c=[{value:"SCOW\u670d\u52a1\u8fde\u63a5\u5230Hook\u670d\u52a1",id:"scow\u670d\u52a1\u8fde\u63a5\u5230hook\u670d\u52a1",level:2},{value:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",level:2}],s={toc:c},k="wrapper";function u(e){let{components:o,...t}=e;return(0,n.kt)(k,(0,r.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scow-hook"},"SCOW Hook"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86SCOW Hook\uff0c\u90a3\u4e48SCOW\u5728\u53d1\u751f\u4e00\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u901a\u8fc7SCOW Hook\u8c03\u7528\u76d1\u542c\u7684Hook\u670d\u52a1\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7SCOW Hook\u76d1\u542cSCOW\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u5e76\u81ea\u5df1\u8fdb\u884c\u4e00\u4e9b\u540e\u7eed\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u4f1a\u8c03\u7528Hook\u7684\u4e8b\u4ef6\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/SCOW/blob/master/protos/hook/hook.proto"},(0,n.kt)("inlineCode",{parentName:"a"},"protos/hook/hook.proto")),"\u6587\u4ef6\u4e2d",(0,n.kt)("inlineCode",{parentName:"p"},"OnEventRequest"),"\u6d88\u606f\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"message"),"\u5c5e\u6027\u3002"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528SCOW Hook\uff0c\u60a8\u9700\u8981\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/SCOW/pr-preview/pr-616/docs/integration/scow-api-hook/proto"},"\u83b7\u53d6SCOW Protobuf\u6587\u4ef6"),"\u5e76\u751f\u6210\u4ee3\u7801"),(0,n.kt)("li",{parentName:"ol"},"\u6839\u636e",(0,n.kt)("inlineCode",{parentName:"li"},"hook"),"\u76ee\u5f55\u4e0b\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"proto"),"\u6587\u4ef6\u5b9e\u73b0\u5176\u4e2d\u5b9a\u4e49\u7684gRPC\u670d\u52a1"),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8\u60a8\u7684gRPC\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ol"},"\u5728SCOW\u4e2d\u914d\u7f6eSCOW Hook\u529f\u80fd")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/common.yaml"',title:'"config/common.yaml"'},"scowHook:\n  url: \u60a8\u7684gRPC\u670d\u52a1\u5668\u7684\u5730\u5740\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u542fSCOW")),(0,n.kt)("h2",{id:"scow\u670d\u52a1\u8fde\u63a5\u5230hook\u670d\u52a1"},"SCOW\u670d\u52a1\u8fde\u63a5\u5230Hook\u670d\u52a1"),(0,n.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cSCOW\u7684\u670d\u52a1\u5668\u662f\u8fd0\u884c\u5728\u5bb9\u5668\u4e2d\u7684\uff0c\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),"\u65e0\u6cd5\u8bbf\u95ee\u5230\u8fd0\u884c\u5230SCOW\u8282\u70b9\u4e0a\u7684\u670d\u52a1\u3002\u5f53\u8bbe\u5b9ahook\u7684URL\u65f6\uff0c\u8bf7\u4f7f\u7528\u670d\u52a1\u5728\u60a8\u7684\u5c40\u57df\u7f51\u4e2d\u7684\u5730\u5740\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u4e00\u4e2a\u5730\u5740\u662f\u5426\u80fd\u4ece\u5bb9\u5668\u4e2d\u8fde\u63a5\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"ping"),"\u7b49\u547d\u4ee4\u5c1d\u8bd5\u662f\u5426\u80fd\u5230\u8fbe\u60a8\u7684Hook\u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./cli compose exec mis-server sh\nping \u60a8\u7684gRPC\u670d\u52a1\u5668\u7684\u5730\u5740\n")),(0,n.kt)("h2",{id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b"},"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/SCOW/pr-preview/pr-616/docs/integration/scow-api-hook/examples/go#%E5%AE%9E%E7%8E%B0%E5%B9%B6%E6%B3%A8%E5%86%8Cscow-hook"},"Go"))))}u.isMDXComponent=!0}}]);