"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5101],{4852:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>o});var n=a(9231);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),N=k(a),o=l,g=N["".concat(p,".").concat(o)]||N[o]||m[o]||r;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8587:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>k});var n=a(5675),l=(a(9231),a(4852));const r={sidebar_position:6,title:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},i="\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",d={unversionedId:"deploy/config/auth/impl-custom-auth",id:"deploy/config/auth/impl-custom-auth",title:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",description:"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002",source:"@site/docs/deploy/config/auth/impl-custom-auth.md",sourceDirName:"deploy/config/auth",slug:"/deploy/config/auth/impl-custom-auth",permalink:"/SCOW/pr-preview/pr-530/docs/deploy/config/auth/impl-custom-auth",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/auth/impl-custom-auth.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},sidebar:"deploy",previous:{title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-530/docs/deploy/config/auth/use-custom-auth"},next:{title:"\u95e8\u6237\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-530/docs/category/\u95e8\u6237\u7cfb\u7edf"}},p={},k=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5fc5\u987b\u5b9e\u73b0\u7684API",id:"\u5fc5\u987b\u5b9e\u73b0\u7684api",level:2},{value:"GET /public/auth",id:"get-publicauth",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:4},{value:"\u671f\u671b\u7684\u54cd\u5e94",id:"\u671f\u671b\u7684\u54cd\u5e94",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:4},{value:"GET /validateToken",id:"get-validatetoken",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-1",level:4},{value:"\u671f\u671b\u7684\u54cd\u5e94",id:"\u671f\u671b\u7684\u54cd\u5e94-1",level:4},{value:"200 OK",id:"200-ok",level:5},{value:"400 Bad Request",id:"400-bad-request",level:5},{value:"DELETE /token",id:"delete-token",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-2",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-1",level:4},{value:"GET /capabilities",id:"get-capabilities",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-3",level:4},{value:"\u671f\u671b\u7684\u54cd\u5e94",id:"\u671f\u671b\u7684\u54cd\u5e94-2",level:4},{value:"200 OK",id:"200-ok-1",level:5},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-2",level:4},{value:"\u521b\u5efa\u7528\u6237\u529f\u80fd\u76f8\u5173API",id:"\u521b\u5efa\u7528\u6237\u529f\u80fd\u76f8\u5173api",level:2},{value:"POST /user",id:"post-user",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-4",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-1",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-3",level:4},{value:"\u67e5\u8be2\u7528\u6237\u529f\u80fd\u76f8\u5173API",id:"\u67e5\u8be2\u7528\u6237\u529f\u80fd\u76f8\u5173api",level:2},{value:"GET /user",id:"get-user",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-5",level:4},{value:"200 OK",id:"200-ok-2",level:5},{value:"404 Not Found",id:"404-not-found",level:5},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-4",level:4},{value:"\u4fee\u6539\u5bc6\u7801\u76f8\u5173API",id:"\u4fee\u6539\u5bc6\u7801\u76f8\u5173api",level:2},{value:"PATCH /password",id:"patch-password",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-6",level:4},{value:"\u671f\u671b\u7684\u54cd\u5e94",id:"\u671f\u671b\u7684\u54cd\u5e94-3",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-5",level:4},{value:"\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\u76f8\u5173API",id:"\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\u76f8\u5173api",level:2},{value:"GET /validateName",id:"get-validatename",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42-7",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-2",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-6",level:4}],u={toc:k};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"SCOW\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"identityId"),"\u6807\u8bc6\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u540c\u65f6\u4f7f\u7528\u6b64",(0,l.kt)("inlineCode",{parentName:"p"},"identityId"),"\u4f5c\u4e3a\u7528\u6237\u5728\u96c6\u7fa4\u4e0a\u7684\u767b\u5f55\u540d\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u767b\u5f55\u540e\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u5e94\u8d1f\u8d23\u7ed9\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u5f53\u524d\u4f1a\u8bdd\u8d4b\u4e88\u4e00\u4e2aToken\uff0cSCOW\u5c06\u4f1a\u5728\u6bcf\u6b21\u9700\u8981\u8ba4\u8bc1\u7684\u8bf7\u6c42\u65f6\u4f7f\u7528token\u8bf7\u6c42\u8ba4\u8bc1\u7cfb\u7edf\u4ee5\u83b7\u53d6\u7528\u6237\u7684\u8eab\u4efd\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u8ba4\u8bc1\u670d\u52a1\u672c\u8d28\u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86\u4ee5\u4e0bHTTP API\u7684HTTP\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"/public"),"\u5f00\u5934\u7684API\u5c06\u4f1a\u662f\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u5176\u4ed6\u7684\u7528\u6237\u4e0d\u53ef\u76f4\u63a5\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u54cd\u5e94\u548c\u5904\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"body"),"\u4f4d\u7f6e\u7684\u53c2\u6570\u5747\u4e3ajson\u683c\u5f0f")),(0,l.kt)("h2",{id:"\u5fc5\u987b\u5b9e\u73b0\u7684api"},"\u5fc5\u987b\u5b9e\u73b0\u7684API"),(0,l.kt)("h3",{id:"get-publicauth"},"GET /public/auth"),(0,l.kt)("p",null,"\u53d1\u8d77\u767b\u5f55\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbackUrl")),(0,l.kt)("td",{parentName:"tr",align:null},"querystring"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5b8c\u6210\u540e\u7684\u56de\u8c03\u5730\u5740\u3002\u5fc5\u987b\u662f\u4e00\u4e2a\u5408\u6cd5\u7684URL\u3002")))),(0,l.kt)("h4",{id:"\u671f\u671b\u7684\u54cd\u5e94"},"\u671f\u671b\u7684\u54cd\u5e94"),(0,l.kt)("p",null,"\u8fd4\u56de\u767b\u5f55HTML\u6216\u8005\u91cd\u5b9a\u5411\u5230\u5b9e\u9645\u7684\u767b\u5f55\u754c\u9762\u3002"),(0,l.kt)("h4",{id:"\u89e3\u91ca"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u8fdb\u884c\u5b9e\u9645\u7684\u767b\u5f55\u64cd\u4f5c\u3002\u7528\u6237\u70b9\u51fb\u767b\u5f55\u540e\uff0c\u7cfb\u7edf\u5c06\u4f1a\u91cd\u5b9a\u5411\u5230\u8fd9\u4e2aURL\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u767b\u5f55\u9875\u9762\uff0c\u6216\u8005\u91cd\u5b9a\u5411\u5230\u7b2c\u4e09\u65b9\u767b\u5f55\u8ba4\u8bc1\u7684\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u8bf7\u8fd4\u56de\u4e00\u4e2a\u91cd\u5b9a\u5411\u7684\u8bf7\u6c42\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"callbackUrl"),"\u6307\u5b9a\u7684URL\uff0c\u5e76\u9644\u4e0aquerystring",(0,l.kt)("inlineCode",{parentName:"p"},"?token={\u60a8\u7528\u6765\u8ddf\u8e2a\u672c\u7528\u6237\u7684\u72b6\u6001\u7684token}"),"\u3002\u8fd9\u4e9btoken\u7684\u751f\u6210\u548c\u4fdd\u5b58\u60a8\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002\u540e\u7eed\u7684\u7528\u6237\u5c06\u4f1a\u5e26\u7740\u6b64token\u7528\u4e8e\u9274\u6743\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u540e\u7aef\u4f7f\u7528\u7c7b\u4f3cOAuth2\u7684\u8ba4\u8bc1\u7cfb\u7edf\uff0c\u8fd9\u4e9b\u8ba4\u8bc1\u7cfb\u7edf\u767b\u5f55\u5b8c\u6210\u540e\u4f1a\u7ed9\u4e00\u4e2atoken\u7528\u4e8e\u8ddf\u8e2a\u7528\u6237\u72b6\u6001\u5e76\u91cd\u5b9a\u5411\u5230\u60a8\u6307\u5b9a\u7684\u56de\u8c03\u5730\u5740\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u7cfb\u7edf\uff0c\u60a8\u5e94\u8be5\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u5355\u72ec\u7684\u56de\u8c03\u5730\u5740\uff08\u4e14\u8fd9\u4e9b\u56de\u8c03\u5730\u5740\u7684URL\u5fc5\u987b\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"/public"),"\u4e3a\u524d\u7f00\u4ee5\u4f7f\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff09\uff0c\u5728\u8fd9\u4e9b\u5730\u5740\u7684\u5904\u7406\u51fd\u6570\u4e2d\u83b7\u53d6\u8ba4\u8bc1\u7cfb\u7edf\u7ed9\u4e88\u7684token\uff0c\u5e76\u4f7f\u7528token\u8fdb\u884c\u540e\u7eed\u7684\u5904\u7406\uff08\u4f8b\u5982\u751f\u6210\u81ea\u5df1\u7684token\uff0c\u5c06\u8fd9\u4e9btoken\u6620\u5c04\u5230\u7528\u6237\u7b49\uff09\u3002\u5904\u7406\u5b8c\u6210\u540e\uff0c\u518d\u56de\u8c03\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"callbackUrl"),"\u6307\u5b9a\u7684URL\u3002"),(0,l.kt)("h3",{id:"get-validatetoken"},"GET /validateToken"),(0,l.kt)("p",null,"\u9a8c\u8bc1token\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684\u7528\u6237ID\u3002SCOW\u5c06\u4f1a\u5728\u6bcf\u6b21\u9700\u8981\u9a8c\u8bc1\u7684\u8bf7\u6c42\u53d1\u751f\u65f6\uff0c\u4f7f\u7528\u767b\u5f55\u65f6\u83b7\u53d6\u7684token\u8bf7\u6c42\u6b64API\uff0c\u6240\u4ee5\u8bf7\u4fdd\u8bc1\u6b64API\u7684\u6027\u80fd\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-1"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:null},"querystring"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684token")))),(0,l.kt)("h4",{id:"\u671f\u671b\u7684\u54cd\u5e94-1"},"\u671f\u671b\u7684\u54cd\u5e94"),(0,l.kt)("h5",{id:"200-ok"},"200 OK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64token\u5bf9\u5e94\u7684\u7528\u6237\u7684\u7528\u6237ID")))),(0,l.kt)("h5",{id:"400-bad-request"},"400 Bad Request"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5e38\u91cf",(0,l.kt)("inlineCode",{parentName:"td"},"INVALID_TOKEN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INVALID_TOKEN"),"\uff1atoken\u65e0\u6548")))),(0,l.kt)("h3",{id:"delete-token"},"DELETE /token"),(0,l.kt)("p",null,"\u65e0\u6548\u5316\u4e00\u4e2atoken\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-2"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"token")))),(0,l.kt)("h4",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"204")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u5b8c\u6210\u3002\u5982\u679ctoken\u4e0d\u5b58\u5728\u4e5f\u5e94\u8be5\u8fd4\u56de\u8fd9\u4e2a\u72b6\u6001\u7801\u3002")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-1"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u65e0\u6548\u5316\u4e00\u4e2atoken\u3002\u8c03\u7528\u8fd9\u4e2a\u8bf7\u6c42\u540e\uff0c\u8fd9\u4e2atoken\u5c06\u4e0d\u5e94\u8be5\u7ee7\u7eed\u80fd\u591f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"GET /validateToken"),"\u83b7\u5f97\u7528\u6237\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"get-capabilities"},"GET /capabilities"),(0,l.kt)("p",null,"\u8fd4\u56de\u8ba4\u8bc1\u7cfb\u7edf\u652f\u6301\u7684\u80fd\u529b\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-3"},"\u8bf7\u6c42"),(0,l.kt)("p",null,"\u65e0\u3002"),(0,l.kt)("h4",{id:"\u671f\u671b\u7684\u54cd\u5e94-2"},"\u671f\u671b\u7684\u54cd\u5e94"),(0,l.kt)("h5",{id:"200-ok-1"},"200 OK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createUser")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8ba4\u8bc1\u7cfb\u7edf\u662f\u5426\u652f\u6301\u521b\u5efa\u7528\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getUser")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8ba4\u8bc1\u7cfb\u7edf\u662f\u5426\u652f\u6301\u67e5\u8be2\u7528\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"changePassword")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8ba4\u8bc1\u7cfb\u7edf\u662f\u5426\u652f\u6301\u4fee\u6539\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"validateName")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8ba4\u8bc1\u7cfb\u7edf\u662f\u5426\u652f\u6301\u9a8c\u8bc1\u7528\u6237\u540d\u548c\u5176\u59d3\u540d")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-2"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u8ba4\u8bc1\u7cfb\u7edf\u58f0\u660e\u81ea\u5df1\u7684\u652f\u6301\u7684\u80fd\u529b\u3002\u7cfb\u7edf\u7684\u5176\u4ed6\u90e8\u5206\u5c06\u4f1a\u6839\u636e\u6b64API\u7684\u8fd4\u56de\u503c\u9009\u62e9\u6027\u5730\u9009\u62e9\u662f\u5426\u663e\u793a\u67d0\u4e9b\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"changePassword"),"\u4e3afalse\uff0c\u90a3\u4e48\u524d\u7aef\u7cfb\u7edf\u5c06\u4f1a\u4e0d\u663e\u793a\u4fee\u6539\u5bc6\u7801\u7684\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u7528\u6237\u529f\u80fd\u76f8\u5173api"},"\u521b\u5efa\u7528\u6237\u529f\u80fd\u76f8\u5173API"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u7cfb\u7edf\u5982\u679c\u58f0\u660e\u652f\u6301\u521b\u5efa\u7528\u6237\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u6b64\u90e8\u5206\u7684API\u3002"),(0,l.kt)("h3",{id:"post-user"},"POST /user"),(0,l.kt)("p",null,"\u521b\u5efa\u7528\u6237\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-4"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u6570\u636e\u5e93\u4e2d\u7684ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mail")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u90ae\u7bb1")))),(0,l.kt)("h4",{id:"\u54cd\u5e94-1"},"\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"204")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b8c\u6210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"409")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID\u5df2\u7ecf\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"501")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u521b\u5efa\u7528\u6237\u529f\u80fd")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-3"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u5728\u8ba4\u8bc1\u7cfb\u7edf\u4e2d\u521b\u5efa\u7528\u6237\u3002\u5f53\u524d\uff0c\u7cfb\u7edf\u53ea\u652f\u6301\u901a\u8fc7\u7ba1\u7406\u7cfb\u7edf\u521b\u5efa\u7528\u6237\u3002\u7ba1\u7406\u7cfb\u7edf\u9996\u5148\u5728\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u7528\u6237\uff0c\u7136\u540e\u8bf7\u6c42\u8ba4\u8bc1\u7cfb\u7edf\u521b\u5efa\u7528\u6237\u3002\u8bf7\u6c42\u53c2\u6570\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u5373\u662f\u6570\u636e\u5e93\u4e2d\u8fd9\u4e2a\u65b0\u7684\u7528\u6237\u7684\u81ea\u589eID\u3002\u5982\u679c\u8ba4\u8bc1\u7cfb\u7edf\u8fd4\u56de\u975e\u6210\u529f\u7684\u8fd4\u56de\u503c\uff0c\u7ba1\u7406\u7cfb\u7edf\u5c06\u4f1a\u64a4\u56de\u5728\u6570\u636e\u5e93\u4e2d\u7684\u9879\u3002"),(0,l.kt)("h2",{id:"\u67e5\u8be2\u7528\u6237\u529f\u80fd\u76f8\u5173api"},"\u67e5\u8be2\u7528\u6237\u529f\u80fd\u76f8\u5173API"),(0,l.kt)("h3",{id:"get-user"},"GET /user"),(0,l.kt)("p",null,"\u83b7\u53d6\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\u4fe1\u606f\u3002\u76ee\u524d\u53ea\u9700\u8981\u8fd4\u56de\u7528\u6237\u7684ID\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-5"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"querystring"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684ID")))),(0,l.kt)("h5",{id:"200-ok-2"},"200 OK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user.identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684ID\u3002\u548c\u8bf7\u6c42\u7684identityId\u4e00\u81f4")))),(0,l.kt)("h5",{id:"404-not-found"},"404 Not Found"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5e38\u91cf",(0,l.kt)("inlineCode",{parentName:"td"},"USER_NOT_FOUND")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USER_NOT_FOUND"),"\uff1a\u7528\u6237\u4e0d\u5b58\u5728")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-4"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u53ef\u4ee5\u83b7\u53d6\u7528\u6237\u7684\u4fe1\u606f\uff0c\u5f53\u524d\u8fd4\u56de\u7684\u7528\u6237\u4fe1\u606f\u53ea\u5305\u542b\u7528\u6237\u7684ID\u3002\u6b64API\u4e5f\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u662f\u5426\u5b58\u5728\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539\u5bc6\u7801\u76f8\u5173api"},"\u4fee\u6539\u5bc6\u7801\u76f8\u5173API"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u7cfb\u7edf\u5982\u679c\u58f0\u660e\u652f\u6301\u521b\u5efa\u7528\u6237\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u6b64\u90e8\u5206\u7684API\u3002"),(0,l.kt)("h3",{id:"patch-password"},"PATCH /password"),(0,l.kt)("p",null,"\u4fee\u6539\u5bc6\u7801\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-6"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oldPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"newPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b0\u5bc6\u7801")))),(0,l.kt)("h4",{id:"\u671f\u671b\u7684\u54cd\u5e94-3"},"\u671f\u671b\u7684\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"204")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5b8c\u6210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"404")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u672a\u627e\u5230")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"412")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u5bc6\u7801\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"501")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u4fee\u6539\u5bc6\u7801\u529f\u80fd")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-5"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u5b8c\u6210\u4fee\u6539\u5bc6\u7801\u7684\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\u76f8\u5173api"},"\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\u76f8\u5173API"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u7cfb\u7edf\u5982\u679c\u58f0\u660e\u652f\u6301\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u6b64\u90e8\u5206\u7684API\u3002"),(0,l.kt)("h3",{id:"get-validatename"},"GET /validateName"),(0,l.kt)("p",null,"\u9a8c\u8bc1\u7528\u6237\u59d3\u540d\u548c\u7528\u6237ID\u662f\u5426\u5339\u914d\u3002"),(0,l.kt)("h4",{id:"\u8bf7\u6c42-7"},"\u8bf7\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identityId")),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u59d3\u540d")))),(0,l.kt)("h4",{id:"\u54cd\u5e94-2"},"\u54cd\u5e94"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:null},"JSON",(0,l.kt)("inlineCode",{parentName:"td"},"{ result: boolean }")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u662f\u5426\u5339\u914d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"404")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"501")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u9a8c\u8bc1\u7528\u6237\u59d3\u540d")))),(0,l.kt)("h4",{id:"\u89e3\u91ca-6"},"\u89e3\u91ca"),(0,l.kt)("p",null,"\u6b64API\u7528\u4e8e\u9a8c\u8bc1\u5728\u5e95\u5c42\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e2d\uff0c\u4e00\u4e2a\u7528\u6237\u7684ID\u4ee5\u53ca\u59d3\u540d\u662f\u5426\u5339\u914d\u3002"))}m.isMDXComponent=!0}}]);