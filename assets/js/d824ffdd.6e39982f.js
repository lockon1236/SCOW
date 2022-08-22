"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3706],{4852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(6215),o=(t(9231),t(4852));const i={sidebar_position:3,title:"\u90e8\u7f72"},l="\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf",a={unversionedId:"mis/deployment",id:"mis/deployment",title:"\u90e8\u7f72",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf\u3002",source:"@site/docs/mis/deployment.md",sourceDirName:"mis",slug:"/mis/deployment",permalink:"/SCOW/docs/mis/deployment",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/mis/deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u90e8\u7f72"},sidebar:"mis",previous:{title:"\u8ba1\u8d39\u6536\u8d39",permalink:"/SCOW/docs/mis/business/billing"},next:{title:"slurm",permalink:"/SCOW/docs/mis/schedulers/slurm"}},s={},p=[{value:"\u90e8\u7f72\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",id:"\u90e8\u7f72\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",level:2},{value:"\u4fee\u6539.env\u6587\u4ef6",id:"\u4fee\u6539env\u6587\u4ef6",level:2},{value:"\u66f4\u65b0\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",id:"\u66f4\u65b0\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u7f16\u5199\u540e\u7aef\u670d\u52a1\u914d\u7f6e",id:"\u7f16\u5199\u540e\u7aef\u670d\u52a1\u914d\u7f6e",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:2},{value:"\u7cfb\u7edf\u521d\u59cb\u5316",id:"\u7cfb\u7edf\u521d\u59cb\u5316",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf"},"\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf"),(0,o.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"},"\u90e8\u7f72\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u4f1a\u5b9a\u671f\u5730\u4ece",(0,o.kt)("strong",{parentName:"p"},"\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"),"\u4e2d\u83b7\u53d6\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u89c4\u5219\u5bf9\u79df\u6237\u548c\u8d26\u6237\u8fdb\u884c\u6263\u8d39\u64cd\u4f5c\u3002\u8be6\u7ec6\u8ba1\u8d39\u89c4\u5219\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/SCOW/docs/mis/business/billing"},"\u8ba1\u8d39\u6536\u8d39"),"\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/export-jobs"},"export-jobs"),"\u9879\u76ee\u914d\u7f6e\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\u3002"),(0,o.kt)("h2",{id:"\u4fee\u6539env\u6587\u4ef6"},"\u4fee\u6539.env\u6587\u4ef6"),(0,o.kt)("p",null,"\u4fee\u6539\u90e8\u7f72\u8def\u5f84\u4e0b\u7684.env\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"# \u786e\u4fddCOMPOSE_PROFILES\u4e2d\u5305\u62ecmis\n# COMPOSE_PROFILES=mis\nCOMPOSE_PROFILES=mis,portal\n\n# \u5982\u679c\u672c\u9879\u76ee\u5c06\u4f1a\u90e8\u7f72\u5728\u57df\u540d\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u6309\u5982\u4e0b\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u53d8\u91cf\nMIS_ROOT_URL=/\nMIS_IMAGE_POSTFIX=root\n\n# \u5982\u679c\u5c06\u4f1a\u90e8\u7f72\u5728`/mis`\u8def\u5f84\u4e0b\uff0c\u6309\u5982\u4e0b\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u53d8\u91cf\nMIS_ROOT_URL=/mis\nMIS_IMAGE_POSTFIX=mis\n\n# \u8bbe\u7f6e\u7ba1\u7406\u7cfb\u7edf\u6570\u636e\u5e93\u5bc6\u7801\nMIS_DB_PASSWORD=must!chang3this\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},"\u66f4\u65b0\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u6839\u636e\u96c6\u7fa4\u6240\u4f7f\u7528\u7684\u8c03\u5ea6\u5668\u7684\u4e0d\u540c\uff0c\u53c2\u8003\u5bf9\u5e94\u6587\u6863\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"p"},"config/clusters/{\u96c6\u7fa4ID}.yml"),"\u6587\u4ef6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/SCOW/docs/mis/schedulers/slurm"},"slurm"))),(0,o.kt)("h2",{id:"\u7f16\u5199\u540e\u7aef\u670d\u52a1\u914d\u7f6e"},"\u7f16\u5199\u540e\u7aef\u670d\u52a1\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"config/mis.yaml"),"\u6587\u4ef6\u4e2d\uff0c\u6839\u636e\u5907\u6ce8\u4fee\u6539\u6240\u9700\u8981\u7684\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/mis.yaml"',title:'"config/mis.yaml"'},'# \u7ba1\u7406\u7cfb\u7edf\u6570\u636e\u5e93\u7684\u4fe1\u606f\u3002\u53ef\u4ee5\u4e0d\u4fee\u6539\ndb:\n  host: db\n  port: 3306\n  user: root\n  password: mysqlrootpassword\n  dbName: scow\n\n# \u83b7\u53d6\u4f5c\u4e1a\u76f8\u5173\u914d\u7f6e\nfetchJobs:\n  # \u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\u7684\u6570\u636e\u5e93\u4fe1\u606f\n  db:\n    host: sourcedb\n    port: 3307\n    user: root\n    password: jobtablepassword\n    dbName: jobs\n    tableName: jobs\n\n  # \u5468\u671f\u6027\u83b7\u53d6\u6570\u636e\n  periodicFetch:\n    # \u662f\u5426\u5f00\u542f\n    enabled: true\n    # \u5468\u671f\u7684cron\u8868\u8fbe\u5f0f\n    cron: "10 */10 * * * *"\n\n# \u9884\u5b9a\u4e49\u7684\u5145\u503c\u7c7b\u578b\npredefinedChargingTypes:\n  - \u6d4b\u8bd5\n\n# \u8d26\u6237\u540d\u7684\u89c4\u5219\naccountNamePattern:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\n  # regex: ""\n\n  # \u51fa\u9519\u65f6\u7684\u6d88\u606f\n  # errorMessage: ""\n')),(0,o.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,o.kt)("p",null,"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,o.kt)("h2",{id:"\u7cfb\u7edf\u521d\u59cb\u5316"},"\u7cfb\u7edf\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/SCOW/docs/mis/init/"},"\u7cfb\u7edf\u521d\u59cb\u5316"),"\u6587\u6863\u521d\u59cb\u5316\u7cfb\u7edf\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);