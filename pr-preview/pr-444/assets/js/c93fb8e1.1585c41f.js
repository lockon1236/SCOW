"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7007],{4852:(e,t,r)=>{r.d(t,{Zo:()=>v,kt:()=>d});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},v=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},v),{},{components:r})):n.createElement(g,i({ref:t},v))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(9675),a=(r(9231),r(4852));const o={sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},i=void 0,l={unversionedId:"deploy/vagrant/vagrant-env",id:"deploy/vagrant/vagrant-env",title:"vagrant\u73af\u5883\u642d\u5efa",description:"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002",source:"@site/docs/deploy/vagrant/vagrant-env.md",sourceDirName:"deploy/vagrant",slug:"/deploy/vagrant/vagrant-env",permalink:"/SCOW/pr-preview/pr-444/docs/deploy/vagrant/vagrant-env",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/vagrant/vagrant-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},sidebar:"deploy",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/SCOW/pr-preview/pr-444/docs/deploy/vagrant/"},next:{title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-444/docs/deploy/vagrant/customization"}},p={},s=[{value:"1. \u5b89\u88c5virtualbox",id:"1-\u5b89\u88c5virtualbox",level:2},{value:"2. \u5b89\u88c5vagrant",id:"2-\u5b89\u88c5vagrant",level:2},{value:"3. vagrant\u57fa\u672c\u64cd\u4f5c",id:"3-vagrant\u57fa\u672c\u64cd\u4f5c",level:2}],v={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5virtualbox"},"1. \u5b89\u88c5virtualbox"),(0,a.kt)("p",null,"\u70b9\u51fb\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"\u5b98\u7f51"),"\u4e0b\u8f7dvirtualbox"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221121104833452",src:r(5217).Z,width:"1905",height:"574"})),(0,a.kt)("p",null,"\u6b64\u5904\u53ef\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff0c\u9009\u62e9Windows\u7248\u672c\u4e0b\u8f7d\u3001\u5b89\u88c5(\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u4f3c)\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"2-\u5b89\u88c5vagrant"},"2. \u5b89\u88c5vagrant"),(0,a.kt)("p",null,"\u70b9\u51fb\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vagrant/downloads"},"\u5b98\u7f51"),"\u4e0b\u8f7dvagrant"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221121104754043",src:r(6846).Z,width:"1901",height:"797"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u9009\u62e9Windows 64\u4f4d\u7248\u672c\uff0c\u5b89\u88c5\u8fc7\u7a0b\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"3-vagrant\u57fa\u672c\u64cd\u4f5c"},"3. vagrant\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"# \u65b0\u5efa\u865a\u62df\u673a\uff0c\u4ee5\u521b\u5efa\u4e00\u4e2acentos7\u865a\u62df\u673a\u4e3a\u4f8b\n\n# 1. \u521d\u59cb\u5316\nvagrant init centos/7\n\n# 2. \u542f\u52a8\uff0c\u521d\u6b21\u542f\u52a8\u4f1a\u6bd4\u8f83\u6162\uff0c\u9700\u8981\u62c9\u955c\u50cf\nvagrant up\n\n# 3. \u67e5\u770b\u72b6\u6001\nvagrant status\n\n# 4. ssh\u5230\u865a\u673a\nvagrant ssh\n \n# 5. \u505c\u6b62\u865a\u673a\nvagrant halt\n \n# 6. \u6682\u505c\u865a\u673a\nvagrant suspend\n \n# 7. \u6062\u590d\u865a\u673a\nvagrant resume\n \n# 8. \u5220\u9664\u865a\u673a\nvagrant destroy\n")))}c.isMDXComponent=!0},6846:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vagrant-download-9c064b07d4aa5b85ee9ea3750725e93f.png"},5217:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/virtualbox-download-d6ba0365937ab8ddc39b30bbf729554b.png"}}]);