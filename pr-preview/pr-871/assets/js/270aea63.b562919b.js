"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9910],{4852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(5675),o=(r(9231),r(4852));const i={title:"\u67b6\u6784",sidebar_position:2},c=void 0,a={unversionedId:"deploy/architecture/index",id:"deploy/architecture/index",title:"\u67b6\u6784",description:"\u7cfb\u7edf\u5404\u4e2a\u7ec4\u4ef6\u7684\u5173\u7cfb\u5982\u4e0b\u56fe\u3002\u6b64\u90e8\u5206\u7b80\u8981\u4ecb\u7ecd\u5404\u4e2a\u7ec4\u4ef6\u7684\u529f\u80fd\uff0c\u5177\u4f53\u90e8\u7f72\u8bf7\u53c2\u8003\u5404\u4e2a\u7ec4\u4ef6\u7684\u9875\u9762\u3002",source:"@site/docs/deploy/architecture/index.md",sourceDirName:"deploy/architecture",slug:"/deploy/architecture/",permalink:"/SCOW/pr-preview/pr-871/docs/deploy/architecture/",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/architecture/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u67b6\u6784",sidebar_position:2},sidebar:"deploy",previous:{title:"\u5b89\u88c5\u548c\u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-871/docs/deploy/"},next:{title:"\u5feb\u901f\u4f53\u9a8c",permalink:"/SCOW/pr-preview/pr-871/docs/category/\u5feb\u901f\u4f53\u9a8c"}},p={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7cfb\u7edf\u5404\u4e2a\u7ec4\u4ef6\u7684\u5173\u7cfb\u5982\u4e0b\u56fe\u3002\u6b64\u90e8\u5206\u7b80\u8981\u4ecb\u7ecd\u5404\u4e2a\u7ec4\u4ef6\u7684\u529f\u80fd\uff0c\u5177\u4f53\u90e8\u7f72\u8bf7\u53c2\u8003\u5404\u4e2a\u7ec4\u4ef6\u7684\u9875\u9762\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u67b6\u6784",src:r(85).Z,width:"1050",height:"762"})),(0,o.kt)("p",null,"SCOW\u7531\u591a\u4e2a\u5bb9\u5668\u6a21\u5757\u7ec4\u6210\uff0c\u5305\u62ecgateway\u3001auth\u3001audit\u7b49\u57fa\u672c\u6a21\u5757\uff0c\u4f5c\u4e3a\u95e8\u6237\u7cfb\u7edf\u7684novnc-client\u3001portal-web\u3001portal-server\u6a21\u5757\uff0c\u4f5c\u4e3a\u7ba1\u7406\u7cfb\u7edf\u7684mis-web\u3001mis-server\u6a21\u5757\uff0c\u6267\u884cSCOW\u4e0e\u8ba1\u7b97\u96c6\u7fa4\u4ea4\u4e92\u7684App Proxy\u3001Adapter\u6a21\u5757\uff0c\u4ee5\u53ca\u4f5c\u4e3a\u90e8\u7f72\u5de5\u5177\u7684cli\u6a21\u5757\u3002"))}d.isMDXComponent=!0},85:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-af0bd61dffc5a272c6b85c30b818ffa1.png"}}]);