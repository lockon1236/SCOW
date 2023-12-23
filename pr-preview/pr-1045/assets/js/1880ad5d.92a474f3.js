"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6167],{31910:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=n(35250),r=n(57766);const o={title:"\u591a\u67b6\u6784\u652f\u6301",sidebar_position:4,description:"SCOW\u5bf9\u5404\u7c7b\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u652f\u6301"},s="\u591a\u67b6\u6784\u652f\u6301",t={id:"deploy/install/multi-platform",title:"\u591a\u67b6\u6784\u652f\u6301",description:"SCOW\u5bf9\u5404\u7c7b\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u652f\u6301",source:"@site/docs/deploy/install/multi-platform.md",sourceDirName:"deploy/install",slug:"/deploy/install/multi-platform",permalink:"/SCOW/pr-preview/pr-1045/docs/deploy/install/multi-platform",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/install/multi-platform.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u591a\u67b6\u6784\u652f\u6301",sidebar_position:4,description:"SCOW\u5bf9\u5404\u7c7b\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u652f\u6301"},sidebar:"deploy",previous:{title:"\u4ece\u6e90\u7801\u6784\u5efa",permalink:"/SCOW/pr-preview/pr-1045/docs/deploy/install/build-from-source"},next:{title:"\u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-1045/docs/category/\u914d\u7f6e"}},c={},d=[{value:"<code>scow-cli</code>",id:"scow-cli",level:2},{value:"\u7f16\u8bd1\u652f\u6301\u591a\u67b6\u6784\u7684\u955c\u50cf",id:"\u7f16\u8bd1\u652f\u6301\u591a\u67b6\u6784\u7684\u955c\u50cf",level:2}];function a(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"\u591a\u67b6\u6784\u652f\u6301",children:"\u591a\u67b6\u6784\u652f\u6301"}),"\n",(0,i.jsx)(l.p,{children:"SCOW\u7cfb\u7edf\u652f\u6301\u4ee5\u4e0b\u8fd0\u884c\u73af\u5883\u7684\u955c\u50cf\u3002\u60a8\u53ea\u9700\u5728\u652f\u6301\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u5bf9\u5e94\u7248\u672c\u7684docker\uff0c\u5c31\u53ef\u4ee5\u62c9\u53d6\u6216\u8005\u6784\u5efa\u7b26\u5408\u4f60\u5f53\u524d\u673a\u5668\u67b6\u6784\u7684\u955c\u50cf\u3002"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"linux/amd64"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"linux/arm64"})}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"scow-cli",children:(0,i.jsx)(l.code,{children:"scow-cli"})}),"\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"scow-cli"}),"\u540c\u6837\u652f\u6301\u4e0a\u8ff0\u8fd0\u884c\u73af\u5883\u3002\u8bf7\u5728\u4e0b\u8f7d\u65f6\u9009\u62e9\u60a8\u90e8\u7f72\u6240\u5728\u7684\u673a\u5668\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u4e0b\u8f7d\u3002"]}),"\n",(0,i.jsx)(l.h2,{id:"\u7f16\u8bd1\u652f\u6301\u591a\u67b6\u6784\u7684\u955c\u50cf",children:"\u7f16\u8bd1\u652f\u6301\u591a\u67b6\u6784\u7684\u955c\u50cf"}),"\n",(0,i.jsxs)(l.p,{children:["\u76f4\u63a5\u8fd0\u884c",(0,i.jsx)(l.code,{children:"docker build"}),"\u6784\u5efa\u51fa\u6765\u7684\u955c\u50cf\u4e3a\u53ea\u652f\u6301\u60a8\u7f16\u8bd1\u65f6\u673a\u5668\u7684\u67b6\u6784\u7684\u955c\u50cf\u3002\u8981\u60f3\u7f16\u8bd1\u51fa\u540c\u65f6\u652f\u6301\u4ee5\u4e0a\u6240\u6709\u67b6\u6784\u7684\u7684\u955c\u50cf\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsxs)(l.li,{children:["\u6839\u636edocker\u5b98\u65b9\u7684",(0,i.jsxs)(l.a,{href:"https://docs.docker.com/build/building/multi-platform/",children:[(0,i.jsx)(l.code,{children:"Multi-platform images"}),"\u6587\u6863"]}),"\uff0c\u521b\u5efa\u5e76\u4f7f\u7528\u652f\u6301\u591a\u5e73\u53f0\u7f16\u8bd1\u7684builder"]}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"docker buildx create --name mybuilder --driver docker-container --bootstrap --use\n"})}),"\n",(0,i.jsxs)(l.ol,{start:"2",children:["\n",(0,i.jsx)(l.li,{children:"\u901a\u8fc7\u8fd9\u4e2abuilder\u6784\u5efa\u955c\u50cf"}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"# \ndocker buildx build -f docker/Dockerfile.scow -t scow --platform=linux/arm64,linux/cmd64 .\n"})})]})}function p(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},57766:(e,l,n)=>{n.d(l,{Z:()=>t,a:()=>s});var i=n(70079);const r={},o=i.createContext(r);function s(e){const l=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:l},e.children)}}}]);