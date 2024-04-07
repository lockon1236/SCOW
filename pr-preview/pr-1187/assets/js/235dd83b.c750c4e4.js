"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3758],{75504:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=e(49214),r=e(5409);const s={sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},i=void 0,o={id:"deploy/get-started/vagrant/vagrant-env",title:"vagrant\u73af\u5883\u642d\u5efa",description:"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002",source:"@site/docs/deploy/get-started/vagrant/vagrant-env.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/vagrant-env",permalink:"/SCOW/pr-preview/pr-1187/docs/deploy/get-started/vagrant/vagrant-env",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/vagrant-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},sidebar:"deploy",previous:{title:"\u4f7f\u7528",permalink:"/SCOW/pr-preview/pr-1187/docs/deploy/get-started/vagrant/"},next:{title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-1187/docs/deploy/get-started/vagrant/customization"}},d={},l=[{value:"1. \u5b89\u88c5virtualbox",id:"1-\u5b89\u88c5virtualbox",level:2},{value:"2. \u5b89\u88c5vagrant",id:"2-\u5b89\u88c5vagrant",level:2},{value:"3. vagrant\u57fa\u672c\u64cd\u4f5c",id:"3-vagrant\u57fa\u672c\u64cd\u4f5c",level:2}];function v(t){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"1-\u5b89\u88c5virtualbox",children:"1. \u5b89\u88c5virtualbox"}),"\n",(0,a.jsxs)(n.p,{children:["\u70b9\u51fb\u8fdb\u5165",(0,a.jsx)(n.a,{href:"https://www.virtualbox.org/wiki/Downloads",children:"\u5b98\u7f51"}),"\u4e0b\u8f7dvirtualbox"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-20221121104833452",src:e(42239).A+"",width:"1905",height:"574"})}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u5904\u53ef\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff0c\u9009\u62e9Windows\u7248\u672c\u4e0b\u8f7d\u3001\u5b89\u88c5(\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u4f3c)\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5\u8fc7\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"2-\u5b89\u88c5vagrant",children:"2. \u5b89\u88c5vagrant"}),"\n",(0,a.jsxs)(n.p,{children:["\u70b9\u51fb\u8fdb\u5165",(0,a.jsx)(n.a,{href:"https://developer.hashicorp.com/vagrant/downloads",children:"\u5b98\u7f51"}),"\u4e0b\u8f7dvagrant"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-20221121104754043",src:e(69832).A+"",width:"1901",height:"797"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u9009\u62e9Windows 64\u4f4d\u7248\u672c\uff0c\u5b89\u88c5\u8fc7\u7a0b\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"3-vagrant\u57fa\u672c\u64cd\u4f5c",children:"3. vagrant\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Bash",children:"# \u65b0\u5efa\u865a\u62df\u673a\uff0c\u4ee5\u521b\u5efa\u4e00\u4e2acentos7\u865a\u62df\u673a\u4e3a\u4f8b\n\n# 1. \u521d\u59cb\u5316\nvagrant init centos/7\n\n# 2. \u542f\u52a8\uff0c\u521d\u6b21\u542f\u52a8\u4f1a\u6bd4\u8f83\u6162\uff0c\u9700\u8981\u62c9\u955c\u50cf\nvagrant up\n\n# 3. \u67e5\u770b\u72b6\u6001\nvagrant status\n\n# 4. ssh\u5230\u865a\u673a\nvagrant ssh\n \n# 5. \u505c\u6b62\u865a\u673a\nvagrant halt\n \n# 6. \u6682\u505c\u865a\u673a\nvagrant suspend\n \n# 7. \u6062\u590d\u865a\u673a\nvagrant resume\n \n# 8. \u5220\u9664\u865a\u673a\nvagrant destroy\n"})})]})}function c(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(v,{...t})}):v(t)}},69832:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/vagrant-download-9c064b07d4aa5b85ee9ea3750725e93f.png"},42239:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/virtualbox-download-d6ba0365937ab8ddc39b30bbf729554b.png"},5409:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>o});var a=e(48318);const r={},s=a.createContext(r);function i(t){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(s.Provider,{value:n},t.children)}}}]);