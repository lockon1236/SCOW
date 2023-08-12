"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[28],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=n(45675),a=(n(49231),n(54852));const p={sidebar_position:1},o="Emacs",l={unversionedId:"deploy/config/portal/apps/apps/emacs/index",id:"deploy/config/portal/apps/apps/emacs/index",title:"Emacs",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/portal/apps/apps/emacs/index.md",sourceDirName:"deploy/config/portal/apps/apps/emacs",slug:"/deploy/config/portal/apps/apps/emacs/",permalink:"/SCOW/pr-preview/pr-798/docs/deploy/config/portal/apps/apps/emacs/",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/emacs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"Desktop",permalink:"/SCOW/pr-preview/pr-798/docs/deploy/config/portal/apps/apps/desktop/"},next:{title:"IGV",permalink:"/SCOW/pr-preview/pr-798/docs/deploy/config/portal/apps/apps/igv/"}},c={},i=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001TurboVNC\u5b89\u88c5",id:"1turbovnc\u5b89\u88c5",level:3},{value:"2\u3001Emacs\u5b89\u88c5",id:"2emacs\u5b89\u88c5",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emacs"},"Emacs"),(0,a.kt)("h2",{id:"\u8f6f\u4ef6\u7b80\u4ecb"},"\u8f6f\u4ef6\u7b80\u4ecb"),(0,a.kt)("p",null,"Emacs\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6587\u672c\u7f16\u8f91\u5668\u548c\u5f00\u53d1\u73af\u5883\uff0c\u5b83\u6709\u4e00\u4e2a\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u754c\u9762\u548c\u4e00\u7cfb\u5217\u56fe\u5f62\u7528\u6237\u754c\u9762\uff0c\u5b83\u652f\u6301\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5305\u62ecUnix\u3001Linux\u3001Windows\u548cmacOS\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u684c\u9762\u7c7b\u5e94\u7528\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TurboVNC 3.0\u7248\u672c\u53ca\u4ee5\u4e0a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u60a8\u9700\u8981\u8fd0\u884c\u7684Emacs"))),(0,a.kt)("h3",{id:"1turbovnc\u5b89\u88c5"},"1\u3001TurboVNC\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://turbovnc.org/pmwiki/uploads/Downloads/TurboVNC.repo --no-check-certificate\nmv TurboVNC.repo /etc/yum.repos.d\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nyum install turbovnc -y\n")),(0,a.kt)("h3",{id:"2emacs\u5b89\u88c5"},"2\u3001Emacs\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install emacs -y\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528Emacs\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"emacs.yml"),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/apps/emacs.yml"',title:'"config/apps/emacs.yml"'},'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: emacs\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: emacs\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3avnc\ntype: vnc\n\n# VNC\u5e94\u7528\u7684\u914d\u7f6e\nvnc:\n  # \u6b64X Session\u7684xstartup\u811a\u672c\n  xstartup: |\n    emacs -mm\n      \n# \u914d\u7f6eHTML\u8868\u5355   \nattributes:\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n')))}m.isMDXComponent=!0}}]);