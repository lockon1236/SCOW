"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9963],{54852:(t,e,r)=>{r.d(e,{Zo:()=>v,kt:()=>g});var n=r(49231);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},v=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,v=l(t,["components","mdxType","originalType","parentName"]),c=s(r),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return r?n.createElement(g,i(i({ref:e},v),{},{components:r})):n.createElement(g,i({ref:e},v))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61394:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(45675),a=(r(49231),r(54852));const o={sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},i=void 0,l={unversionedId:"deploy/get-started/vagrant/vagrant-env",id:"deploy/get-started/vagrant/vagrant-env",title:"vagrant\u73af\u5883\u642d\u5efa",description:"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002",source:"@site/docs/deploy/get-started/vagrant/vagrant-env.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/vagrant-env",permalink:"/SCOW/pr-preview/pr-807/docs/deploy/get-started/vagrant/vagrant-env",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/vagrant-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"vagrant\u73af\u5883\u642d\u5efa"},sidebar:"deploy",previous:{title:"\u4f7f\u7528",permalink:"/SCOW/pr-preview/pr-807/docs/deploy/get-started/vagrant/"},next:{title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-807/docs/deploy/get-started/vagrant/customization"}},p={},s=[{value:"1. \u5b89\u88c5virtualbox",id:"1-\u5b89\u88c5virtualbox",level:2},{value:"2. \u5b89\u88c5vagrant",id:"2-\u5b89\u88c5vagrant",level:2},{value:"3. vagrant\u57fa\u672c\u64cd\u4f5c",id:"3-vagrant\u57fa\u672c\u64cd\u4f5c",level:2}],v={toc:s},c="wrapper";function d(t){let{components:e,...o}=t;return(0,a.kt)(c,(0,n.Z)({},v,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"vagrant\u652f\u6301\u7684provider\u5305\u62ecvirtualbox\u3001hyperv\u3001libvirt\u7b49\u3002virtualbox\u652f\u6301windows\u3001linux\u3001macos\u7684\u5b89\u88c5\uff0c\u56e0\u6b64\u672c\u6559\u7a0b\u4ee5virtualbox\u4f5c\u4e3aprovider\u3002"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5virtualbox"},"1. \u5b89\u88c5virtualbox"),(0,a.kt)("p",null,"\u70b9\u51fb\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"\u5b98\u7f51"),"\u4e0b\u8f7dvirtualbox"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221121104833452",src:r(75705).Z,width:"1905",height:"574"})),(0,a.kt)("p",null,"\u6b64\u5904\u53ef\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff0c\u9009\u62e9Windows\u7248\u672c\u4e0b\u8f7d\u3001\u5b89\u88c5(\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u4f3c)\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"2-\u5b89\u88c5vagrant"},"2. \u5b89\u88c5vagrant"),(0,a.kt)("p",null,"\u70b9\u51fb\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vagrant/downloads"},"\u5b98\u7f51"),"\u4e0b\u8f7dvagrant"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221121104754043",src:r(99470).Z,width:"1901",height:"797"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u9009\u62e9Windows 64\u4f4d\u7248\u672c\uff0c\u5b89\u88c5\u8fc7\u7a0b\u8ddf\u7740\u6307\u5f15\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"3-vagrant\u57fa\u672c\u64cd\u4f5c"},"3. vagrant\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"# \u65b0\u5efa\u865a\u62df\u673a\uff0c\u4ee5\u521b\u5efa\u4e00\u4e2acentos7\u865a\u62df\u673a\u4e3a\u4f8b\n\n# 1. \u521d\u59cb\u5316\nvagrant init centos/7\n\n# 2. \u542f\u52a8\uff0c\u521d\u6b21\u542f\u52a8\u4f1a\u6bd4\u8f83\u6162\uff0c\u9700\u8981\u62c9\u955c\u50cf\nvagrant up\n\n# 3. \u67e5\u770b\u72b6\u6001\nvagrant status\n\n# 4. ssh\u5230\u865a\u673a\nvagrant ssh\n \n# 5. \u505c\u6b62\u865a\u673a\nvagrant halt\n \n# 6. \u6682\u505c\u865a\u673a\nvagrant suspend\n \n# 7. \u6062\u590d\u865a\u673a\nvagrant resume\n \n# 8. \u5220\u9664\u865a\u673a\nvagrant destroy\n")))}d.isMDXComponent=!0},99470:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/vagrant-download-9c064b07d4aa5b85ee9ea3750725e93f.png"},75705:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/virtualbox-download-d6ba0365937ab8ddc39b30bbf729554b.png"}}]);