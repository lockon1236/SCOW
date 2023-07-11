"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9155],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>w});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,w=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(w,a(a({ref:t},s),{},{components:r})):n.createElement(w,a({ref:t},s))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(45675),o=(r(49231),r(54852));const l={slug:"scow-cli-release",title:"scow-cli",authors:["chenjunda"],tags:["scow","scow-cli","scow-deployment"]},a="scow-cli",c={permalink:"/SCOW/pr-preview/pr-703/blog/scow-cli-release",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-03-29-scow-cli.md",source:"@site/blog/2023-03-29-scow-cli.md",title:"scow-cli",description:"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002",date:"2023-03-29T00:00:00.000Z",formattedDate:"2023\u5e743\u670829\u65e5",tags:[{label:"scow",permalink:"/SCOW/pr-preview/pr-703/blog/tags/scow"},{label:"scow-cli",permalink:"/SCOW/pr-preview/pr-703/blog/tags/scow-cli"},{label:"scow-deployment",permalink:"/SCOW/pr-preview/pr-703/blog/tags/scow-deployment"}],readingTime:1.285,hasTruncateMarker:!1,authors:[{name:"Chen Junda",title:"Developer",url:"https://ddadaal.me",imageURL:"https://avatars.githubusercontent.com/u/8363856",key:"chenjunda"}],frontMatter:{slug:"scow-cli-release",title:"scow-cli",authors:["chenjunda"],tags:["scow","scow-cli","scow-deployment"]},prevItem:{title:"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",permalink:"/SCOW/pr-preview/pr-703/blog/scow-scheduler-adapter"},nextItem:{title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",permalink:"/SCOW/pr-preview/pr-703/blog/update-to-python-deployment"}},p={authorsImageUrls:[void 0]},i=[],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u4e4b\u524d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"scow-deployment"),"\u4e3a\u4e86\u4fdd\u8bc1\u65e0\u9700\u5b89\u88c5\u4f9d\u8d56\u5747\u53ef\u4f7f\u7528\uff0c\u6240\u4ee5\u91c7\u7528\u4e86\u548cSCOW\u5176\u4ed6\u90e8\u5206\u4e0d\u4e00\u6837\u7684python\u8bed\u8a00\u5f00\u53d1\uff0c\u4e14\u65e0\u6cd5\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\u7684\u529f\u80fd\uff0c\u9650\u5236\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"scow-deployment"),"\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u91cd\u65b0\u7f16\u5199\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u3002\u6b64\u5de5\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"install.yaml"),"\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u81ea\u7531\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\uff0c\u529f\u80fd\u6269\u5c55\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf"),(0,o.kt)("li",{parentName:"ul"},"\u6b64\u5de5\u5177\u91c7\u7528\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c\u7684\u6280\u672f\u6808\u7f16\u5199\uff0c\u65b9\u4fbf\u540e\u7eed\u529f\u80fd\u5f00\u53d1\u548c\u7ef4\u62a4"),(0,o.kt)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u540c\u6837\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u4f9d\u8d56\u5373\u53ef\u4f7f\u7528")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u662f\u540e\u7eed\u589e\u52a0\u66f4\u591a\u547d\u4ee4\u884c\u7ef4\u62a4\u529f\u80fd\u7684\u57fa\u7840\uff0c\u5efa\u8bae\u5927\u5bb6\u5c3d\u5feb\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"scow-deployment"),"\u8fc1\u79fb\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://PKUHPC.github.io/SCOW/pr-preview/pr-703/docs/deploy/install/scow-cli"},"scow-cli"),"\u6587\u6863\u4ee5\u4e0b\u8f7dscow-cli\uff0c\u4ee5\u53ca\u4e86\u89e3\u5982\u4f55\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"scow-deployment"),"\u8fc1\u79fb\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u3002"))}m.isMDXComponent=!0}}]);