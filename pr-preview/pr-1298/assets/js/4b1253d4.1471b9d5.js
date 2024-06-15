"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9136],{44783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(49214),o=t(5409);const s={sidebar_position:1,title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},r="\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",c={id:"integration/auth/use",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",description:"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u4f7f\u7528\u548c\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002",source:"@site/docs/integration/auth/use.md",sourceDirName:"integration/auth",slug:"/integration/auth/use",permalink:"/SCOW/pr-preview/pr-1298/docs/integration/auth/use",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/auth/use.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},sidebar:"integration",previous:{title:"\u4e0eSCOW\u96c6\u6210",permalink:"/SCOW/pr-preview/pr-1298/docs/integration/"},next:{title:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-1298/docs/integration/auth/impl"}},a={},l=[{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u4f7f\u7528\u548c\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u81ea\u5df1\u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u5e94\u8be5\u88ab\u6253\u5305\u4e3a\u4e00\u4e2adocker\u955c\u50cf\uff0c\u653e\u5728\u60a8\u90e8\u7f72\u6240\u5728\u673a\u5668\u53ef\u4ee5\u8bbf\u95ee\u7684\u5730\u5740\u4e0a\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6\u7684",(0,i.jsx)(n.code,{children:"auth.custom"}),"\u90e8\u5206\u4ee5\u4f7f\u7528\u60a8\u7684\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="install.yaml"',children:'auth:\n  custom:\n    # \u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf\u7c7b\u578b\n    # external\uff08\u4f7f\u7528\u5916\u90e8\u7cfb\u7edf\uff09 | image\uff08\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf\u955c\u50cf\uff09\uff0c\u9ed8\u8ba4\u4e3a image\n    type: image\n    # \u81ea\u5b9a\u4e49\u5916\u90e8\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e\n    # \u5982\u679c type \u4e3a external \u5219\u9700\u8981\u914d\u7f6e external \u9009\u9879\uff0c\u5426\u5219\u4ecd\u7136\u4f7f\u7528\u9ed8\u8ba4\u8ba4\u8bc1\u7cfb\u7edf URL\n    external:\n      url: http://custom-url:port\n\n    # \u5bb9\u5668\u76f8\u5173\u914d\u7f6e\n    image:\n      # \u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf\u955c\u50cf\u540d\u3002\u5fc5\u586b\n      # imageName: my-custom-auth:v1.0\n\n      # \u7aef\u53e3\u6620\u5c04\u3002\u53ef\u9009\n      # ports:\n      #   - "5000:5000"\n\n      # \u66f4\u591a\u6302\u8f7d\u5377\u3002\u53ef\u9009\n      # \u9ed8\u8ba4\u6dfb\u52a0/etc/hosts:/etc/hosts\u548c./config:/etc/scow\n      # volumes:\n      #   - "./myfile:/etc/myfile"\n\n    # \u4e0b\u5217 image\u3001ports\u3001volumes \u914d\u7f6e\u4e3a\u8001\u7248\u672c\u7684\u914d\u7f6e\uff0c\u5df2\u8fc7\u65f6\uff0c\u672a\u6765\u5c06\u4f1a\u5220\u9664\n    # \u517c\u5bb9\u8001\u7248\u672c,image \u5728\u8001\u7248\u672c\u4e2d\u4e3a\u5b57\u7b26\u4e32\n    # \u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf\u955c\u50cf\u540d\u3002\u5fc5\u586b\n    # image: my-custom-auth:v1.0\n\n    # \u517c\u5bb9\u8001\u7248\u672c, \u7aef\u53e3\u6620\u5c04\u3002\u53ef\u9009\n    # ports:\n    #   - "5000:5000"\n\n    # \u517c\u5bb9\u8001\u7248\u672c, \u66f4\u591a\u6302\u8f7d\u5377\u3002\u53ef\u9009\n    # \u9ed8\u8ba4\u6dfb\u52a0/etc/hosts:/etc/hosts\u548c./config:/etc/scow\n    # volumes:\n    #   - "./myfile:/etc/myfile"\n\n    # \u73af\u5883\u53d8\u91cf\uff0c\u53ef\u9009\u3002\n    # environment:\n    #   - DEBUG=log\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5409:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(48318);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);