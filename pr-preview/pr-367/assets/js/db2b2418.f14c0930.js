"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8667],{4852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(9675),o=(r(9231),r(4852));const a={sidebar_position:4,title:"\u7b80\u4ecb"},p="\u8ba4\u8bc1\u7cfb\u7edf\u7b80\u4ecb",i={unversionedId:"deploy/SCOW/auth/index",id:"deploy/SCOW/auth/index",title:"\u7b80\u4ecb",description:"\u8ba4\u8bc1\u7cfb\u7edf(auth)\u4e3a\u7cfb\u7edf\u63d0\u4f9b\u7528\u6237\u767b\u5f55\u529f\u80fd\uff0c\u4ee5\u53ca\u4e3a\u5404\u4e2a\u7ec4\u4ef6\u63d0\u4f9b\u9274\u6743\u670d\u52a1\u3002",source:"@site/docs/deploy/SCOW/auth/index.md",sourceDirName:"deploy/SCOW/auth",slug:"/deploy/SCOW/auth/",permalink:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/SCOW/auth/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u7b80\u4ecb"},sidebar:"deploy",previous:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/mis/init/"},next:{title:"SSH",permalink:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/ssh"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8ba4\u8bc1\u7cfb\u7edf\u7b80\u4ecb"},"\u8ba4\u8bc1\u7cfb\u7edf\u7b80\u4ecb"),(0,o.kt)("p",null,"\u8ba4\u8bc1\u7cfb\u7edf(",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),")\u4e3a\u7cfb\u7edf\u63d0\u4f9b\u7528\u6237\u767b\u5f55\u529f\u80fd\uff0c\u4ee5\u53ca\u4e3a\u5404\u4e2a\u7ec4\u4ef6\u63d0\u4f9b\u9274\u6743\u670d\u52a1\u3002"),(0,o.kt)("h1",{id:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf"},"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf"),(0,o.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u5b9e\u73b0\u652f\u6301\u4ee5\u4e0b\u8ba4\u8bc1\u65b9\u5f0f\u3002\u8bf7\u6839\u636e\u81ea\u5df1\u7684\u96c6\u7fa4\u7684\u60c5\u51b5\uff0c\u9009\u62e9\u81ea\u5df1\u7684\u8ba4\u8bc1\u65b9\u5f0f\u5e76\u8fdb\u884c\u90e8\u7f72\u548c\u914d\u7f6e\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/ssh"},"SSH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/ldap"},"LDAP"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528SSH\u767b\u5f55\uff0c\u53ef\u4ee5\u9996\u5148\u4f7f\u7528\u6700\u7b80\u5355\u7684SSH\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,o.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u65b9\u5f0f"},"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u65b9\u5f0f"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u6587\u6863\u53bb",(0,o.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/custom/use"},"\u4f7f\u7528"),"\u6216\u8005",(0,o.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-367/docs/deploy/SCOW/auth/custom/implementation"},"\u5b9e\u73b0"),"\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf\u3002"))}s.isMDXComponent=!0}}]);