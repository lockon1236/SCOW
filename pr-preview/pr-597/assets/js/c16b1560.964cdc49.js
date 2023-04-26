"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2027],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(5675),a=(n(9231),n(4852));const p={sidebar_position:1,title:"SCOW API"},o="SCOW API",i={unversionedId:"integration/scow-api/use",id:"integration/scow-api/use",title:"SCOW API",description:"SCOW\u7cfb\u7edf\u603b\u4f53\u6765\u8bf4\u5206\u4e3a\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\uff08\u67b6\u6784\uff09\uff0cSCOW\u7684\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\u4f7f\u7528gRPC\u8fdb\u884c\u901a\u4fe1\u3002",source:"@site/docs/integration/scow-api/use.md",sourceDirName:"integration/scow-api",slug:"/integration/scow-api/use",permalink:"/SCOW/pr-preview/pr-597/docs/integration/scow-api/use",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api/use.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SCOW API"},sidebar:"integration",previous:{title:"SCOW API",permalink:"/SCOW/pr-preview/pr-597/docs/category/scow-api"},next:{title:"Go\u5ba2\u6237\u7aef\u793a\u4f8b",permalink:"/SCOW/pr-preview/pr-597/docs/integration/scow-api/go"}},l={},s=[{value:"API\u7248\u672c\u63a7\u5236",id:"api\u7248\u672c\u63a7\u5236",level:2},{value:"\u4f7f\u7528SCOW API",id:"\u4f7f\u7528scow-api",level:2},{value:"1. \u4f7f\u7528Buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\uff08\u63a8\u8350\uff09",id:"1-\u4f7f\u7528buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\u63a8\u8350",level:3},{value:"2. \u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6",id:"2-\u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6",level:3},{value:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3",id:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scow-api"},"SCOW API"),(0,a.kt)("p",null,"SCOW\u7cfb\u7edf\u603b\u4f53\u6765\u8bf4\u5206\u4e3a\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\uff08",(0,a.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-597/docs/deploy/architecture/"},"\u67b6\u6784"),"\uff09\uff0cSCOW\u7684\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\u4f7f\u7528gRPC\u8fdb\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u82e5\u60a8\u6709\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u7f16\u5199\u7a0b\u5e8f\u76f4\u63a5\u901a\u8fc7gRPC\u4e0eSCOW\u7684\u540e\u7aef\u90e8\u5206\u7ec4\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"mis-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"portal-server"),"\u4ea4\u4e92\u3002"),(0,a.kt)("h2",{id:"api\u7248\u672c\u63a7\u5236"},"API\u7248\u672c\u63a7\u5236"),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u8fc7npm\u5bf9API\u7248\u672c\u8fdb\u884c\u63a7\u5236\u3002\u5f53\u524d\u7684\u7248\u672c\u4e3a\uff1a",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@scow/grpc-api?label=%40scow%2Fgrpc-api",alt:"npm"})),(0,a.kt)("p",null,"API\u7684\u7248\u672c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"@scow/grpc-api"),"\u5305\u7684\u7248\u672c\u8fdb\u884c\u5b9a\u4e49\u3002SCOW gRPC API\u7248\u672c\u63a7\u5236\u539f\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cdAPI\u7684\u4fee\u6539\uff0c\u4f8b\u5982lint\u6587\u4ef6\uff1a\u63d0\u9ad8PATCH\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e86API\uff0c\u4f46\u662f\u517c\u5bb9\u5f53\u524d\u7684API\uff1a\u63d0\u9ad8MINOR\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u517c\u5bb9\u5df2\u6709\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u63d0\u9ad8MAJOR\u7248\u672c")),(0,a.kt)("p",null,"\u5f53\u524d\uff0c\u6211\u4eec\u5e76\u4e0d\u4fdd\u8bc1\u65b0\u7248\u672cSCOW\u5bf9\u8001\u7248\u672cAPI\u7684\u517c\u5bb9\u6027\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528scow-api"},"\u4f7f\u7528SCOW API"),(0,a.kt)("p",null,"\u8981\u4e0eSCOW\u7cfb\u7edf\u4ea4\u4e92\uff0c\u60a8\u9996\u5148\u9700\u8981\u83b7\u53d6API\u7684Protocol Buffer (proto)\u6587\u4ef6\uff0c\u5e76\u901a\u8fc7\u8fd9\u4e9bproto\u6587\u4ef6\u751f\u6210\u60a8\u6240\u9700\u8981\u7684\u8bed\u8a00\u7684\u6a21\u677f\u4ee3\u7801\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e9b\u6a21\u677f\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06SCOW API\u7684proto\u6587\u4ef6\u653e\u5230\u4e86\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece\u4ee3\u7801\u4ed3\u5e93\u4e2d\u83b7\u53d6\u3002\u4ee3\u7801\u4ed3\u5e93\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"protos"),"\u76ee\u5f55\u4e0b\u5219\u4e3aproto\u6587\u4ef6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/SCOW/blob/master/protos"},"master\u5206\u652fprotos\u76ee\u5f55\u94fe\u63a5")),(0,a.kt)("p",null,"proto\u6587\u4ef6\u5206\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"common"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"portal"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"server"),"\u3002\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"common"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"portal"),"\u91cc\u7684\u7528\u4e8e\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"portal-server"),"\u95e8\u6237\u540e\u7aef\u4ea4\u4e92\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"common"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"server"),"\u7528\u4e8e\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"mis-server"),"\u7ba1\u7406\u7cfb\u7edf\u540e\u7aef\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u8981\u83b7\u53d6SCOW API\u6240\u9700\u8981\u7684\u6587\u4ef6\u5e76\u8fdb\u884c\u4ee3\u7801\u751f\u6210\uff0c\u60a8\u6709\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6848\uff1a"),(0,a.kt)("h3",{id:"1-\u4f7f\u7528buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\u63a8\u8350"},"1. \u4f7f\u7528Buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\uff08\u63a8\u8350\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://buf.build/docs/tutorials/getting-started-with-buf-cli/"},"Buf"),"\u662f\u4e00\u4e2a\u7ba1\u7406gRPC API\u548cproto\u6587\u4ef6\u7684\u4e00\u7ad9\u5f0f\u5de5\u5177\uff0c\u53ef\u5b8c\u6210\u83b7\u53d6\u6587\u4ef6\u3001\u751f\u6210\u4ee3\u7801\u7b49\u5e38\u89c1\u529f\u80fd\u3002\u6211\u4eec\u63a8\u8350\u901a\u8fc7\u4f7f\u7528Buf\u76f4\u63a5\u4eceGitHub\u4e0a\u83b7\u53d6\u4ee3\u7801\u5e76\u751f\u6210\u60a8\u7684\u8bed\u8a00\u7684\u6a21\u677f\u7684\u4ee3\u7801\u7684\u5de5\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u672c\u5730buf.gen.yaml\u751f\u6210\u6a21\u677f\uff0c\u4f7f\u7528SCOW\u4ed3\u5e93\u7684master\u5206\u652f\u7684SCOW API\nbuf generate --template buf.gen.yaml https://github.com/PKUHPC/SCOW.git#subdir=protos,branch=master\n")),(0,a.kt)("p",null,"\u4e0d\u540c\u8bed\u8a00\u793a\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/SCOW/pr-preview/pr-597/docs/integration/scow-api/go"},"Go"))),(0,a.kt)("h3",{id:"2-\u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6"},"2. \u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7npm\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"npmjs.org"),"\u4e0a\u83b7\u53d6\u4efb\u610f\u7248\u672c\u7684proto\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6700\u65b0\u7248\u672c\u7684API\u6587\u4ef6\nnpm install -g @scow/grpc-api\n\n# \u7279\u5b9a\u7248\u672c(0.1.2)\u7684API\nnpm install -g @scow/grpc-api@0.1.2\n\n# \u5b89\u88c5\u597d\u540e\uff0c\u53ef\u4ee5\u53bbnpm\u7684\u5168\u5c40\u6a21\u5757\u7684\u76ee\u5f55\u4e2d\u67e5\u627e\u5230\u8fd9\u4e2a\u5305\uff0c\u5e76\u83b7\u53d6\u5185\u90e8\u7684\u6587\u4ef6\ncd $(npm root -g)/@scow/grpc-api\n\n# \u5982\u679c\u60a8\u4f7f\u7528npm\u5bf9\u60a8\u7684\u9879\u76ee\u8fdb\u884c\u4f9d\u8d56\u7ba1\u7406\uff0c\u5219\u53ef\u4ee5\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5b89\u88c5\u6b64\u5305\uff0c\u5e76\u76f4\u63a5\u5728\u6b64\u5305\u7684node_modules\u4e2d\u83b7\u53d6\u5230proto\u6587\u4ef6\nnpm install --save @scow/grpc-api\ncd node_modules/@scow/grpc-api\n")),(0,a.kt)("h2",{id:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3"},"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3"),(0,a.kt)("p",null,"\u90e8\u7f72\u597d\u7684\u7cfb\u7edf\u7684\u540e\u7aef\u670d\u52a1\u5bb9\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"mis-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"portal-server"),"\u4f4d\u4e8edocker compose\u521b\u5efa\u7684\u7f51\u7edc\u4e2d\uff0c\u4ece\u5916\u754c\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"mis-server"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"portal-server"),"\u4e24\u4e2a\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u8981\u60f3\u8bbf\u95ee\u8fd9\u4e24\u4e2a\u670d\u52a1\uff0c\u60a8\u9700\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),"\u5c06\u4e3b\u673a\u4e0a\u7684\u7aef\u53e3\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"mis-server"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"portal-server"),"\u670d\u52a1\u76845000\u7aef\u53e3\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=config.py",title:"config.py"},'DEBUG = {\n  "OPEN_PORTS": {\n    # mis-server\u76845000\u7aef\u53e3\u6620\u5c04\u5230127.0.0.1:7571\n    "MIS_SERVER": "127.0.0.1:7571",\n\n    # portal-server\u76845000\u7aef\u53e3\u6620\u5c04\u5230127.0.0.1:7572\n    "PORTAL_SERVER": "127.0.0.1:7572",\n  }\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"SCOW\u7684gRPC\u540e\u7aef\u5e76\u4e0d\u5305\u542b\u4efb\u4f55\u9274\u6743\u548c\u8ba4\u8bc1\u8fc7\u7a0b\u3002\u5982\u679c\u60a8\u5728\u6620\u5c04\u7aef\u53e3\u65f6\u76f4\u63a5\u8f93\u5165\u7aef\u53e3\u53f7\uff08\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"7571"),"\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7571"),"\uff09\uff0c\u7531\u4e8e\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u5404\u4e2a\u8282\u70b9\u7684\u7f51\u7edc\u662f\u4e92\u901a\u7684\uff0c\u5219\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u4f5c\u4e1a\u53ef\u80fd\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95eeSCOW\u7684gRPC\u540e\u7aef\uff0c\u8fdb\u800c\u76f4\u63a5\u64cd\u4f5cSCOW\u7cfb\u7edf\u7684\u6570\u636e\uff0c\u9020\u6210\u5b89\u5168\u9690\u60a3\u3002\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5c06SCOW\u670d\u52a1\u8282\u70b9\u7528\u4f5c\u96c6\u7fa4\u7684\u767b\u5f55\u8282\u70b9\u6216\u8005\u8ba1\u7b97\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6620\u5c04\u7aef\u53e3\u65f6\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:7571"),"\uff0c\u4f7f\u6620\u5c04\u51fa\u7684\u7aef\u53e3\u53ea\u80fd\u5728SCOW\u670d\u52a1\u8282\u70b9\u4e0a\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u7ed9SCOW\u670d\u52a1\u8282\u70b9\u8bbe\u7f6e\u597d\u9632\u706b\u5899\uff0c\u9632\u6b62\u96c6\u7fa4\u5185\u90e8\u7684\u670d\u52a1\u8bbf\u95ee\u5230SCOW\u670d\u52a1"))))}u.isMDXComponent=!0}}]);