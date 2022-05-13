"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2991],{4852:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(2208),r=n(9161),l=(n(9231),n(4852)),i=["components"],o={sidebar_position:1,title:"LDAP"},p="LDAP\u8ba4\u8bc1\u7cfb\u7edf",d={unversionedId:"common/auth/ldap",id:"common/auth/ldap",title:"LDAP",description:"\u672c\u8282\u4ecb\u7ecd\u91c7\u7528LDAP\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u91c7\u7528\u5176\u4ed6\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u6587\u6863\u4e2d\u7684\u5176\u4ed6\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u6216\u8005\u67e5\u770b\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u6587\u6863\u4ee5\u81ea\u5df1\u5b9e\u73b0\u7b26\u5408\u81ea\u5df1\u9700\u6c42\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002",source:"@site/docs/common/auth/ldap.md",sourceDirName:"common/auth",slug:"/common/auth/ldap",permalink:"/SCOW/docs/common/auth/ldap",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/common/auth/ldap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"LDAP"},sidebar:"common",previous:{title:"\u7f51\u5173",permalink:"/SCOW/docs/common/deployment/gateway"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/SCOW/docs/common/auth/custom"}},m={},u=[{value:"LDAP\u5404\u4e2a\u64cd\u4f5c\u6d41\u7a0b",id:"ldap\u5404\u4e2a\u64cd\u4f5c\u6d41\u7a0b",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:3},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u5b89\u88c5\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1",id:"\u5b89\u88c5\u5e76\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1",level:2},{value:"\u90e8\u7f72redis",id:"\u90e8\u7f72redis",level:3},{value:"\u90e8\u7f72\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1",id:"\u90e8\u7f72\u5e76\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1",level:3},{value:"LDAP\u5feb\u901f\u914d\u7f6e\u811a\u672c",id:"ldap\u5feb\u901f\u914d\u7f6e\u811a\u672c",level:2},{value:"LDAP\u955c\u50cf",id:"ldap\u955c\u50cf",level:2}],k={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ldap\u8ba4\u8bc1\u7cfb\u7edf"},"LDAP\u8ba4\u8bc1\u7cfb\u7edf"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u91c7\u7528LDAP\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u91c7\u7528\u5176\u4ed6\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u6587\u6863\u4e2d\u7684\u5176\u4ed6\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u6216\u8005\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/SCOW/docs/common/auth/custom"},"\u81ea\u5b9a\u4e49\u8ba4\u8bc1"),"\u6587\u6863\u4ee5\u81ea\u5df1\u5b9e\u73b0\u7b26\u5408\u81ea\u5df1\u9700\u6c42\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"ldap\u5404\u4e2a\u64cd\u4f5c\u6d41\u7a0b"},"LDAP\u5404\u4e2a\u64cd\u4f5c\u6d41\u7a0b"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7406\u89e3\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u7cfb\u7edf\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5404\u4e2a\u64cd\u4f5c\u65f6\uff0cLDAP\u8ba4\u8bc1\u7cfb\u7edf\u6240\u8fdb\u884c\u7684\u64cd\u4f5c\u3002\u4e0b\u6587\u4e2d\uff0c\u5168\u5927\u5199\u7684\u4ee3\u7801\u5757\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"LDAP_BIND_DN"),"\u4e3a\u53ef\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u3002\u8bf7\u786e\u8ba4\u60a8\u7684LDAP\u914d\u7f6e\u517c\u5bb9\u8fd9\u91cc\u6240\u79f0\u7684\u6d41\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u65f6\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u83b7\u5f97\u7528\u6237\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_BIND_DN"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_BIND_PASSWORD"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0e\u5411LDAP\u670d\u52a1\u5668\u6240\u5728\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_URL"),"\u53d1\u8d77bind\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ol"},"bind\u6210\u529f\u540e\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_SEARCH_BASE"),"\u4e3a\u641c\u7d22\u6839\uff0c\u4ee5sub\u6a21\u5f0f\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_FILTER")," \u548c (",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_ATTR_UID"),"\u7b49\u4e8e\u8f93\u5165\u7684\u7528\u6237\u540d) \u4e3a\u7b5b\u9009\u6761\u4ef6\u641c\u7d22\u8282\u70b9",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u641c\u7d22\u7ed3\u679c\u4e3a\u7a7a\uff0c\u5219\u767b\u5f55\u5931\u8d25"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u641c\u7d22\u8282\u70b9\u6709\u591a\u4e2a\uff0c\u53d6\u7b2c\u4e00\u4e2a\u7ed3\u679c"))),(0,l.kt)("li",{parentName:"ol"},"\u4ee5",(0,l.kt)("strong",{parentName:"li"},"\u4e0a\u4e00\u4e2a\u7ed3\u679c\u7684DN"),"\u4ee5\u53ca",(0,l.kt)("strong",{parentName:"li"},"\u8f93\u5165\u7684\u5bc6\u7801"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4e0eLDAP\u670d\u52a1\u5668\u53d1\u8d77bind\u8bf7\u6c42",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679cbind\u5931\u8d25\uff0c\u5219\u767b\u5f55\u5931\u8d25"))),(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u6210\u529f\u3002\u751f\u6210\u4e00\u4e2aUUID\u4f5c\u4e3atoken\uff0c\u5c06token\u4e0e",(0,l.kt)("strong",{parentName:"li"},"\u8f93\u5165\u7684\u7528\u6237\u540d"),"\u5b58\u5165redis"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u5b9a\u5411\u5230\u7528\u6237\u5728\u767b\u5f55\u65f6\uff0c\u901a\u8fc7querystring\u6307\u5b9a\u7684callback URL\uff0c\u5e76\u4f20\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"token={token}"),"\u4f5c\u4e3aquerystring\u53c2\u6570")),(0,l.kt)("h3",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u5728\u8fd0\u8425\u7cfb\u7edf\u4e2d\u521b\u5efa\u540e\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u83b7\u5f97\u65b0\u7528\u6237\u7684\u7528\u6237\u540d\u3001\u7528\u6237\u59d3\u540d\u3001\u5bc6\u7801\u548c\u90ae\u7bb1\uff0c\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_BIND_DN"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_BIND_PASSWORD"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0e\u5411LDAP\u670d\u52a1\u5668\u6240\u5728\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_URL"),"\u53d1\u8d77bind\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684entry\u4f5c\u4e3a\u7528\u6237\uff0c\u5176DN\u4ee5\u53ca\u5c5e\u6027\u503c\u5982\u4e0b\u8868\u6240\u793a\u3002\u5982\u679c\u60f3\u4fee\u6539\u8fd9\u4e9b\u503c\uff0c\u8bf7\u53c2\u8003\u914d\u7f6e\u9879\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_ADD_ATTRS"),"\u5c5e\u6027")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{LDAP_ATTR_UID}=\u7528\u6237\u540d,{LDAP_ADD_USER_BASE}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ATTR_UID")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ATTR_NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sn"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loginShell"),(0,l.kt)("td",{parentName:"tr",align:null},"/bin/bash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectClass"),(0,l.kt)("td",{parentName:"tr",align:null},'["inetOrgPerson", "posixAccount", "shadowAccount"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"homeDirectory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ADD_HOME_DIR"),"\uff0c\u5176\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"{username}"),"\u66ff\u6362\u4e3a\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uidNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4e2d\u7684\u7528\u6237\u9879\u7684id + ",(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ADD_UID_START"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gidNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4e2d\u7684\u7528\u6237\u9879\u7684id + ",(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ADD_UID_START"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LDAP_ATTR_MAIL"),"\uff08\u5982\u679c\u8bbe\u7f6e\u4e86\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u90ae\u7bb1")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684entry\u4f5c\u4e3agroup\uff0c\u5176DN\u4ee5\u53ca\u5c5e\u6027\u503c\u5982\u4e0b\u8868\u6240\u793a\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{LDAP_ATTR_GROUP_USER_ID}=\u7528\u6237\u540d,{LDAP_ADD_GROUP_BASE}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectClass"),(0,l.kt)("td",{parentName:"tr",align:null},'["posixGroup"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memberUid"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gidNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u7528\u6237\u7684uidNumber")))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u7528\u6237\u7684\u5bc6\u7801\u4e3a\u7528\u6237\u8f93\u5165\u7684\u5bc6\u7801")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5e76\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1"},"\u5b89\u88c5\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1"),(0,l.kt)("h3",{id:"\u90e8\u7f72redis"},"\u90e8\u7f72redis"),(0,l.kt)("p",null,"LDAP\u8ba4\u8bc1\u7cfb\u7edf\u5c06\u8ba4\u8bc1\u4fe1\u606f\u5b58\u653e\u5728redis\u4e2d\uff0c\u6240\u4ee5\u5728\u90e8\u7f72\u8ba4\u8bc1\u7cfb\u7edf\u4e4b\u524d\u9700\u8981\u5148\u90e8\u7f72redis\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"services"),"\u5757\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u6761\u76ee:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"  redis:\n    image: redis:alpine\n    restart: unless-stopped\n    ports:\n      - 6379:6379\n")),(0,l.kt)("p",null,"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8redis\u3002"),(0,l.kt)("h3",{id:"\u90e8\u7f72\u5e76\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1"},"\u90e8\u7f72\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"services"),"\u5757\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u6761\u76ee:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"  auth:\n    image: ghcr.io/pkuhpc/scow/auth\n    restart: unless-stopped\n    environment:\n      # TODO \u589e\u52a0\u914d\u7f6e\n")),(0,l.kt)("p",null,"\u589e\u52a0\u597d\u914d\u7f6e\u540e\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8\u8ba4\u8bc1\u7cfb\u7edf\u3002"),(0,l.kt)("h2",{id:"ldap\u5feb\u901f\u914d\u7f6e\u811a\u672c"},"LDAP\u5feb\u901f\u914d\u7f6e\u811a\u672c"),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u4e2a\u811a\u672c\u53ef\u4ee5\u7528\u6765\u5728",(0,l.kt)("strong",{parentName:"p"},"CentOS 7"),"\u73af\u5883\u5feb\u901f\u5b89\u88c5\u548c\u914d\u7f6eLDAP\u670d\u52a1\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PKUHPC/SCOW/blob/master/scripts/ldap/provider.sh"},"provider.sh"),": \u7528\u4e8e\u914d\u7f6eLDAP\u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PKUHPC/SCOW/blob/master/scripts/ldap/client.sh"},"client.sh"),": \u7528\u4e8e\u914d\u7f6eLDAP\u5ba2\u6237\u7aef")),(0,l.kt)("p",null,"\u8bf7\u4e0b\u8f7d\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u4fee\u6539\u4e24\u4e2a\u6587\u4ef6\u5f00\u5934\u90e8\u5206\u7684\u76f8\u5173\u914d\u7f6e\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Start Configuratin Part"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"End Configuration Part"),"\u4e4b\u95f4\u7684\u53d8\u91cf\uff09\uff0c\u8fd0\u884c\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528provider.sh\u811a\u672c\u914d\u7f6e\u60a8\u7684\u670d\u52a1\u5668\uff0c\u60a8\u7684LDAP\u76f8\u5173\u914d\u7f6e\u4e3a\u5982\u4e0b\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"{\u53d8\u91cf}"),"\u66ff\u6362\u4e3aprovider.sh\u4e2d\u7684\u5bf9\u5e94\u53d8\u91cf\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'      LDAP_URL: ldap://LDAP\u670d\u52a1\u5668\u5730\u5740\n      LDAP_BIND_DN: cn=Manager,ou={ou},o={dn}\n      LDAP_BIND_PASSWORD: {adminPasswd}\n      LDAP_SEARCH_BASE: "ou={ou},o={dn}"\n      LDAP_FILTER: "(uid=*)"\n      LDAP_ADD_USER_BASE: "ou=People,ou={ou},o={dn}"\n      LDAP_ADD_GROUP_BASE: "ou=Group,ou={ou},o={dn}"\n      LDAP_ATTR_UID: uid\n      LDAP_ATTR_GROUP_USER_ID: cn\n      LDAP_ATTR_NAME: cn\n      LDAP_ATTR_MAIL: mail\n')),(0,l.kt)("h2",{id:"ldap\u955c\u50cf"},"LDAP\u955c\u50cf"),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u5df2\u7ecf\u914d\u7f6e\u597d\u7684LDAP docker\u955c\u50cf\u8fdb\u884c\u4f53\u9a8c\u3002\u6ce8\u610f\uff0c\u6b64\u955c\u50cf\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u548c\u529f\u80fd\u4f53\u9a8c\uff0c\u8bf7\u52ff\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728\u6574\u4e2a\u9879\u76ee\u7684\u6839\u76ee\u5f55\u6784\u5efa\u955c\u50cf \ndocker build -f scripts/ldap/Dockerfile -t ldap .\n\n# \u542f\u52a8\u955c\u50cf\u3002\u670d\u52a1\u5728389\u7aef\u53e3\u76d1\u542c\u3002\n# \u7ba1\u7406\u5458\u7528\u6237\u4e3acn=Manager,ou=hpc,o=pku\uff0c\u5bc6\u7801\u4e3aadmin\ndocker run -p 389:389 ldap\n")))}c.isMDXComponent=!0}}]);