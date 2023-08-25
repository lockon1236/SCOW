"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3627],{54852:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var l=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),s=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?l.createElement(f,a(a({ref:t},i),{},{components:r})):l.createElement(f,a({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var l=r(45675),n=(r(49231),r(54852));const o={sidebar_label:"module\u5b89\u88c5",title:"module\u5b89\u88c5",sidebar_position:8},a=void 0,c={unversionedId:"hpccluster/module",id:"hpccluster/module",title:"module\u5b89\u88c5",description:"module\u662f\u7ed9\u96c6\u7fa4\u6240\u6709\u8282\u70b9\u4f7f\u7528\uff0c\u5b89\u88c5\u5728nfs\u5171\u4eab\u5b58\u50a8\u76ee\u5f55\u4e0a\u3002\u521b\u5efamodule\u5b89\u88c5\u76ee\u5f55\uff1a",source:"@site/docs/hpccluster/module.md",sourceDirName:"hpccluster",slug:"/hpccluster/module",permalink:"/SCOW/pr-preview/pr-829/docs/hpccluster/module",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/hpccluster/module.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"module\u5b89\u88c5",title:"module\u5b89\u88c5",sidebar_position:8},sidebar:"hpccluster",previous:{title:"LDAP\u65b0\u5efa\u7528\u6237",permalink:"/SCOW/pr-preview/pr-829/docs/hpccluster/add-user"},next:{title:"intel\u7f16\u8bd1\u5668\u5b89\u88c5",permalink:"/SCOW/pr-preview/pr-829/docs/hpccluster/intel"}},u={},s=[{value:"1. tcl\u5b89\u88c5",id:"1-tcl\u5b89\u88c5",level:2},{value:"2. module\u5b89\u88c5",id:"2-module\u5b89\u88c5",level:2},{value:"3. \u914d\u7f6e",id:"3-\u914d\u7f6e",level:2}],i={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,l.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"module\u662f\u7ed9\u96c6\u7fa4\u6240\u6709\u8282\u70b9\u4f7f\u7528\uff0c\u5b89\u88c5\u5728nfs\u5171\u4eab\u5b58\u50a8\u76ee\u5f55\u4e0a\u3002\u521b\u5efamodule\u5b89\u88c5\u76ee\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Shell"},"mkdir /data/software/module\n")),(0,n.kt)("h2",{id:"1-tcl\u5b89\u88c5"},"1. tcl\u5b89\u88c5"),(0,n.kt)("p",null,"module\u5de5\u5177\uff0c\u4f9d\u8d56tcl\u5de5\u5177\uff0c\u56e0\u6b64\u9996\u5148\u8981\u5b89\u88c5tcl\u5de5\u5177\u3002"),(0,n.kt)("p",null,"\u521b\u5efa\u5de5\u5177\u76ee\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Shell"},"mkdir -p /data/software/module/tools/tcl\n")),(0,n.kt)("p",null,"\u4e0b\u8f7d\u3001\u7f16\u8bd1\u3001\u5b89\u88c5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# \u4e0b\u8f7d\nwget https://cfhcable.dl.sourceforge.net/project/tcl/Tcl/8.5.9/tcl8.5.9-src.tar.gz\n\n# \u89e3\u538b\ntar -zxvf tcl8.5.9-src.tar.gz \ncd tcl8.5.9/unix \n\n# \u7f16\u8bd1 & \u5b89\u88c5\uff0c\u6ce8\u610f\u4fee\u6539\u6b64\u5904\u76ee\u5f55\n./configure --prefix=/data/software/module/tools/tcl \nmake \nmake install\n")),(0,n.kt)("h2",{id:"2-module\u5b89\u88c5"},"2. module\u5b89\u88c5"),(0,n.kt)("p",null,"\u521b\u5efa\u5de5\u5177\u76ee\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Shell"},"mkdir -p /data/software/module/tools/modules\n")),(0,n.kt)("p",null,"\u4e0b\u8f7d\u3001\u7f16\u8bd1\u3001\u5b89\u88c5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# \u4e0b\u8f7d\uff0c\u6b64\u5904\u53ef\u80fd\u9700\u8981\u79d1\u5b66\u4e0a\u7f51\nwget https://newcontinuum.dl.sourceforge.net/project/modules/Modules/modules-4.2.4/modules-4.2.4.tar.gz \n\n#\u89e3\u538b\ntar -zxvf modules-4.2.4.tar.gz \ncd modules-4.2.4 \n\n# \u7f16\u8bd1 & \u5b89\u88c5,\u6ce8\u610f\u4fee\u6539\u8def\u5f84\n./configure --prefix=/data/software/module/tools/modules --with-tcl-lib=/data/software/module/tools/tcl/lib --with-tcl-inc=/data/software/module/tools/tcl/include  \nmake \nmake install\n")),(0,n.kt)("h2",{id:"3-\u914d\u7f6e"},"3. \u914d\u7f6e"),(0,n.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"/data/software/module/tools/modules"),"\u76ee\u5f55\u4e0b\uff0c\u5c31\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"module"),"\u5de5\u5177\u4e86\u3002\u4e0d\u8fc7\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"\u76ee\u5f55\u4e0b\uff0c\u662f\u6ca1\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"module"),"\u8fd9\u4e2a\u547d\u4ee4\u7684\u3002"),(0,n.kt)("p",null,"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PowerShell"}," source /data/software/module/tools/modules/init/profile.sh\n")),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"module"),"\u547d\u4ee4\u4e86\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(80677).Z,width:"1032",height:"821"})))}d.isMDXComponent=!0},80677:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/-6-1-beffe3fe746fa6ea8e15ede2f693d0f9.PNG"}}]);