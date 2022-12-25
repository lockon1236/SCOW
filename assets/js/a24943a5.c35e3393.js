"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1031],{4852:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(9231);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,y=c["".concat(i,".").concat(d)]||c[d]||p[d]||s;return t?n.createElement(y,a(a({ref:r},m),{},{components:t})):n.createElement(y,a({ref:r},m))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var s=t.length,a=new Array(s);a[0]=c;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5697:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(9675),l=(t(9231),t(4852));const s={sidebar_position:1,title:"slurm"},a="\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4",o={unversionedId:"deploy/SCOW/mis/schedulers/slurm",id:"deploy/SCOW/mis/schedulers/slurm",title:"slurm",description:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh",source:"@site/docs/deploy/SCOW/mis/schedulers/slurm.md",sourceDirName:"deploy/SCOW/mis/schedulers",slug:"/deploy/SCOW/mis/schedulers/slurm",permalink:"/SCOW/docs/deploy/SCOW/mis/schedulers/slurm",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/SCOW/mis/schedulers/slurm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"slurm"},sidebar:"deploy",previous:{title:"\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf",permalink:"/SCOW/docs/deploy/SCOW/mis/"},next:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/SCOW/docs/deploy/SCOW/mis/init/"}},i={},u=[{value:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh",id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurmsh",level:2},{value:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",level:2}],m={toc:u};function p(e){let{components:r,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"},"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"),(0,l.kt)("h2",{id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurmsh"},"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh"),(0,l.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u9009\u5b9a\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a",(0,l.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\u3002\u6b64\u8282\u70b9\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1\u8282\u70b9"),"\u53ef\u4ee5\u4ee5root\u7528\u6237SSH\u514d\u5bc6\u767b\u5f55\u5230\u6b64\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u8282\u70b9\u4e0a\u5b89\u88c5\u5e76\u914d\u7f6e\u597d\u4e86slurm\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"sacctmgr"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"squeue"),"\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u8282\u70b9\u4e0a\u5b89\u88c5\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"mysql"),"\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"mysql"),"\u76f4\u63a5\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u8282\u70b9\u4e0a\u8fd0\u884c\u6709slurm\u7684mysql\u6570\u636e\u5e93\uff0c\u6216\u8005\u53ef\u4ee5\u8fde\u63a5\u5230\u8fd0\u884c\u5728\u5176\u4ed6\u673a\u5668\u4e0a\u7684\u6570\u636e\u5e93")),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728slurm\u96c6\u7fa4\u7684manager\u8282\u70b9\u4e0a\u540c\u65f6\u914d\u7f6e\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u5e76\u4f7f\u7528\u6b64\u8282\u70b9\u4e3a",(0,l.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\u3002\n\u5728\u9879\u76ee\u542f\u52a8\u540e\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u7ed9slurm\u8282\u70b9\u4e0a\u4f20\u4e00\u4e2aslurm.sh\u811a\u672c\uff0c\u7528\u4e8e\u8fdb\u884c\u4e00\u4e9bslurm\u64cd\u4f5c\u3002\u5177\u4f53\u4e0a\u4f20\u7684\u4f4d\u7f6e\u53ef\u4ee5\u5728\u96c6\u7fa4\u914d\u7f6e\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"},"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684ID}.yml"),"\u4e2d\uff0c\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"',title:'"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"'},"# ...\nslurm:\n  #....\n  mis:\n    # \u90e8\u7f72slurm.sh\u7684\u673a\u5668\u7684\u5730\u5740\n    managerUrl: haha\n    # slurm.sh\u5728\u673a\u5668\u4e2d\u7684\u7edd\u5bf9\u5730\u5740,\u6bcf\u6b21\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06slurm.sh\u6587\u4ef6\u590d\u5236\u5230scriptPath\u6307\u5b9a\u8def\u5f84\u4e0a\n    scriptPath: /test/slurm.sh\n\n    # \u90e8\u7f72slurm.sh\u7684\u673a\u5668\u901a\u8fc7\u4ec0\u4e48\u5730\u5740\u8bbf\u95eeslurm\u7684mysql\u6570\u636e\u5e93\n    # \u4e0d\u586b\u5199\u4e3a\u4e0b\u9762\u7684\u9ed8\u8ba4\u503c\n    # dbHost: localhost\n\n    # \u90e8\u7f72slurm.sh\u7684\u673a\u5668\u901a\u8fc7\u4ec0\u4e48\u7aef\u53e3\u8bbf\u95eeslurm\u7684mysql\u6570\u636e\u5e93\n    # \u4e0d\u586b\u5199\u4e3a\u4e0b\u9762\u7684\u9ed8\u8ba4\u503c\n    # dbPort: 3306\n\n    # slurmdbd\u7684\u6570\u636e\u5e93\u5bc6\u7801\n    dbPassword: password\n    # slurm\u4e2d\u8fd9\u4e2a\u96c6\u7fa4\u7684\u96c6\u7fa4\u540d\n    clusterName: hpc01\n")),(0,l.kt)("h2",{id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"},"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u6709\u4e00\u4e2aslurm\u96c6\u7fa4\uff0c\u5728\u7ba1\u7406\u7cfb\u7edf\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u529f\u80fd\u5c06slurm\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u5bfc\u5165\u672c\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",src:t(5413).Z,width:"1262",height:"1565"})),(0,l.kt)("p",null,"\u7cfb\u7edf\u4f1a\u4eceslurm\u96c6\u7fa4\u4e2d\u8bfb\u53d6\u7528\u6237\u548c\u8d26\u6237\u4fe1\u606f\uff0c\u663e\u793a\u5728\u8868\u683c\u4e2d\u3002\u4e0d\u5b58\u5728\u540d\u5b57\u7684\u7528\u6237\u7684\u521d\u59cb\u540d\u5b57\u9ed8\u8ba4\u4e3a\u81ea\u5df1\u7684ID\u3002"),(0,l.kt)("p",null,"\u7cfb\u7edf\u9ed8\u8ba4\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"a_\u7528\u6237ID == \u8d26\u6237ID"),"\u7684\u7528\u6237\u8bbe\u7f6e\u4e3a\u62e5\u6709\u8005\u3002\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u9009\u62e9\u62e5\u6709\u8005\uff0c\u9700\u8981\u6ce8\u610f\u7cfb\u7edf\u8981\u6c42\u8d26\u6237\u7684\u62e5\u6709\u8005\u5b57\u6bb5\u4e0d\u80fd\u4e3a\u7a7a\u3002"),(0,l.kt)("p",null,"\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\uff0c\u6216\u8005\u7cfb\u7edf\u521d\u59cb\u5316\u540e\u4f7f\u7528\u5e73\u53f0\u7ba1\u7406\u5458\u7528\u6237\u767b\u5f55\u540e\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"),"->",(0,l.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u7528\u6237"),"\uff0c\u5373\u53ef\u4f7f\u7528\u5bfc\u5165\u7528\u6237\u529f\u80fd\u3002\u5982\u679c\u9700\u8981\u5c06\u65b0\u52a0\u5165\u7684\u8d26\u6237\u90fd\u52a0\u5165\u767d\u540d\u5355\u4e2d\uff0c\u8bf7\u52fe\u9009",(0,l.kt)("inlineCode",{parentName:"p"},"\u5c06\u6240\u6709\u8d26\u6237\u52a0\u5165\u767d\u540d\u5355"),"\u3002\u70b9\u51fb\u786e\u5b9a\uff0c\u5373\u53ef\u5c06\u6240\u6709\u8d26\u6237\u5bfc\u5165\u9ed8\u8ba4\u79df\u6237\u4e2d\u3002"))}p.isMDXComponent=!0},5413:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/import-users-0870ad65f6f05e5c7a8de09e25c4772f.png"}}]);