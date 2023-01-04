"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8083],{4852:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(9231);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),s=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return n?t.createElement(m,l(l({ref:r},u),{},{components:n})):t.createElement(m,l({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=p;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8910:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=n(9675),o=(n(9231),n(4852));const c={title:"slurmdbd.conf \u914d\u7f6e",sidebar_position:3},l=void 0,i={unversionedId:"deploy/config/slurmdbd.conf",id:"deploy/config/slurmdbd.conf",title:"slurmdbd.conf \u914d\u7f6e",description:"",source:"@site/docs/deploy/config/slurmdbd.conf.md",sourceDirName:"deploy/config",slug:"/deploy/config/slurmdbd.conf",permalink:"/SCOW/pr-preview/pr-400/docs/deploy/config/slurmdbd.conf",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/slurmdbd.conf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"slurmdbd.conf \u914d\u7f6e",sidebar_position:3},sidebar:"deploy",previous:{title:"slurm.conf \u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-400/docs/deploy/config/slurm.conf"}},a={},s=[],u={toc:s};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Properties"},"#\n# slurmdbd.conf file.\n#\n# See the slurmdbd.conf man page for more information.\n#\n# Authentication info\nAuthType=auth/munge     #\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u8be5\u5904\u91c7\u7528munge\u8fdb\u884c\u8ba4\u8bc1\nAuthInfo=/var/run/munge/munge.socket.2     #\u4e3a\u4e86\u4e0eslurmctld\u63a7\u5236\u8282\u70b9\u901a\u4fe1\u7684\u5176\u5b83\u8ba4\u8bc1\u4fe1\u606f\n#\n# slurmDBD info\nDbdAddr=localhost      #\u6570\u636e\u5e93\u8282\u70b9\u540d\nDbdHost=localhost     #\u6570\u636e\u5e93IP\u5730\u5740\nSlurmUser=slurm     #\u7528\u6237\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u7528\u6237\nDebugLevel=verbose     #\u8c03\u8bd5\u4fe1\u606f\u7ea7\u522b\uff0cquiet\uff1a\u65e0\u8c03\u8bd5\u4fe1\u606f\uff1bfatal\uff1a\u4ec5\u4e25\u91cd\u9519\u8bef\u4fe1\u606f\uff1berror\uff1a\u4ec5\u9519\u8bef\u4fe1\u606f\uff1b info\uff1a\u9519\u8bef\u4e0e\u901a\u5e38\u4fe1\u606f\uff1bverbose\uff1a\u9519\u8bef\u548c\u8be6\u7ec6\u4fe1\u606f\uff1bdebug\uff1a\u9519\u8bef\u3001\u8be6\u7ec6\u548c\u8c03\u8bd5\u4fe1\u606f\uff1bdebug2\uff1a\u9519\u8bef\u3001\u8be6\u7ec6\u548c\u66f4\u591a\u8c03\u8bd5\u4fe1\u606f\uff1bdebug3\uff1a\u9519\u8bef\u3001\u8be6\u7ec6\u548c\u751a\u81f3\u66f4\u591a\u8c03\u8bd5\u4fe1\u606f\uff1bdebug4\uff1a\u9519\u8bef\u3001\u8be6\u7ec6\u548c\u751a\u81f3\u66f4\u591a\u8c03\u8bd5\u4fe1\u606f\uff1bdebug5\uff1a\u9519\u8bef\u3001\u8be6\u7ec6\u548c\u751a\u81f3\u66f4\u591a\u8c03\u8bd5\u4fe1\u606f\u3002debug\u6570\u5b57\u8d8a\u5927\uff0c\u4fe1\u606f\u8d8a\u8be6\u7ec6\nLogFile=/var/log/slurm/slurmdbd.log     #slurmdbd\u5b88\u62a4\u8fdb\u7a0b\u65e5\u5fd7\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84 \nPidFile=/var/run/slurmdbd.pid     #slurmdbd\u5b88\u62a4\u8fdb\u7a0b\u5b58\u50a8\u8fdb\u7a0b\u53f7\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\n#\n# Database info\nStorageType=accounting_storage/mysql     #\u6570\u636e\u5b58\u50a8\u7c7b\u578b\nStoragePass=123456     #\u5b58\u50a8\u6570\u636e\u5e93\u5bc6\u7801\nStorageUser=slurm     #\u5b58\u50a8\u6570\u636e\u5e93\u7528\u6237\u540d\nStorageLoc=slurm_acct_db     #\u6570\u636e\u5e93\u540d\u79f0\n")))}d.isMDXComponent=!0}}]);