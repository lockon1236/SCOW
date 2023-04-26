"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5615],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[g]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(5675),o=(n(9231),n(4852));const a={sidebar_position:2,title:"Go\u5ba2\u6237\u7aef\u793a\u4f8b"},i="Go\u793a\u4f8b",c={unversionedId:"integration/scow-api/go",id:"integration/scow-api/go",title:"Go\u5ba2\u6237\u7aef\u793a\u4f8b",description:"\u793a\u4f8b\u9879\u76ee\uff1ahttps://github.com/PKUHPC/scow-grpc-api-go-client-demo",source:"@site/docs/integration/scow-api/go.md",sourceDirName:"integration/scow-api",slug:"/integration/scow-api/go",permalink:"/SCOW/docs/integration/scow-api/go",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api/go.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Go\u5ba2\u6237\u7aef\u793a\u4f8b"},sidebar:"integration",previous:{title:"SCOW API",permalink:"/SCOW/docs/integration/scow-api/use"}},l={},p=[],s={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go\u793a\u4f8b"},"Go\u793a\u4f8b"),(0,o.kt)("p",null,"\u793a\u4f8b\u9879\u76ee\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/scow-grpc-api-go-client-demo"},"https://github.com/PKUHPC/scow-grpc-api-go-client-demo")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5Buf CLI\uff08",(0,o.kt)("a",{parentName:"li",href:"https://buf.build/docs/installation/"},"\u5b98\u7f51\u6587\u6863"),"\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u4e00\u4e2aGo\u9879\u76ee\uff0c\u5047\u8bbe\u6a21\u5757\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"github.com/PKUHPC/scow-grpc-client-demo"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/PKUHPC/scow-grpc-api-client-demo\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"li"},"buf.gen.yaml"),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="buf.gen.yaml"',title:'"buf.gen.yaml"'},"version: v1\nmanaged:\n  enabled: true\n  go_package_prefix:\n    # \u9879\u76ee\u6a21\u5757\u540d+\u751f\u6210\u8def\u5f84\uff08plugins\u4e2dout\uff09\n    default: github.com/PKUHPC/scow-grpc-api-client-demo/gen/go\n    except:\n        - buf.build/googleapis/googleapis\nplugins:\n  - plugin: buf.build/protocolbuffers/go\n    out: gen/go\n    opt: paths=source_relative\n  - plugin: buf.build/grpc/go\n    out: gen/go\n    opt: paths=source_relative,require_unimplemented_servers=false\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u6839\u636e\u67d0\u4e2a\u5177\u4f53SCOW\u7248\u672c\u751f\u6210\u4ee3\u7801")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u901a\u8fc7#\u540e\u7684\u53c2\u6570\u786e\u8ba4SCOW\u7248\u672c\uff0c\u53ef\u8f93\u5165\u5206\u652f\uff08branch=master\uff09, SCOW Tag\u53f7\uff08tag=v0.4.0\uff09\n# \u4e0d\u5199\u9ed8\u8ba4\u4f7f\u7528SCOW\u7684master\u5206\u652f\u7248\u672c\nbuf generate --template buf.gen.yaml https://github.com/PKUHPC/SCOW.git#subdir=protos,branch=master\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u7f16\u5199Go\u4ee3\u7801")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "context"\n    "log"\n\n    "github.com/PKUHPC/scow-grpc-api-client-demo/gen/go/server"\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials/insecure"\n)\n\nfunc main() {\n    conn, err := grpc.Dial("192.168.88.100:7571", grpc.WithTransportCredentials(insecure.NewCredentials()))\n\n  if err != nil {\n    panic(err)\n  }\n\n    client := server.NewAccountServiceClient(conn)\n\n    resp, err := client.GetAccounts(context.Background(), &server.GetAccountsRequest{})\n\n    if err != nil {\n        panic(err)\n    }\n\n    log.Printf("Account list: %v", resp)\n}\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u4f9d\u8d56\u5e76\u8fd0\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod tidy\ngo run main.go\n")))}u.isMDXComponent=!0}}]);