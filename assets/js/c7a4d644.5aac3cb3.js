"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5696],{4852:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return n?o.createElement(k,l(l({ref:t},i),{},{components:n})):o.createElement(k,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<p;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var o=n(2203),r=(n(9231),n(4852));const p={slug:"update-to-python-deployment",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",authors:["huangjun"],tags:["scow","scow-deployment"]},l=void 0,a={permalink:"/SCOW/blog/update-to-python-deployment",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-10-22-update-deployment.md",source:"@site/blog/2022-10-22-update-deployment.md",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",description:"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0cPKUHPC/scow-deployment\u9879\u76ee\u662f\u7eaf\u901a\u8fc7Docker Compose\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86Docker Compose\u5185\u7f6e\u7684profile\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662fDocker Compose\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[{label:"scow",permalink:"/SCOW/blog/tags/scow"},{label:"scow-deployment",permalink:"/SCOW/blog/tags/scow-deployment"}],readingTime:2.265,hasTruncateMarker:!1,authors:[{name:"Huangjun",title:"Developer",url:"https://blog.csdn.net/huangjun0210?type=blog",imageURL:"https://avatars.githubusercontent.com/u/26295600",key:"huangjun"}],frontMatter:{slug:"update-to-python-deployment",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",authors:["huangjun"],tags:["scow","scow-deployment"]},nextItem:{title:"scow\u6587\u6863\u4e0a\u7ebf",permalink:"/SCOW/blog/docs-online"}},c={authorsImageUrls:[void 0]},s=[{value:"1. \u505c\u6b62scow\u670d\u52a1",id:"1-\u505c\u6b62scow\u670d\u52a1",level:2},{value:"2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6",id:"2-\u5907\u4efd\u914d\u7f6e\u6587\u4ef6",level:2},{value:"3.  \u5347\u7ea7",id:"3--\u5347\u7ea7",level:2}],i={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"PKUHPC/scow-deployment"),"\u9879\u76ee\u662f\u7eaf\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u5185\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),"\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002"),(0,r.kt)("p",null,"\u4e3a\u7b80\u5316\u90e8\u7f72\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u6613\u61c2\u548c\u7075\u6d3b\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u6700\u65b0\u7248\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PKUHPC/scow-deployment"),"\u9879\u76ee\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"python"),"\u52a8\u6001\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u6587\u4ef6\uff0c\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u751f\u6210\u66f4\u6613\u7406\u89e3\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5e73\u6ed1\u7684\u4ece\u65e7\u7248\u672c\u5347\u7ea7\u81f3\u65b0\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"1-\u505c\u6b62scow\u670d\u52a1"},"1. \u505c\u6b62scow\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165scow-deployment\u9879\u76ee\u76ee\u5f55\ncd scow-deployment\n\n# \u505c\u6b62scow\u670d\u52a1\ndocker-compose down\n")),(0,r.kt)("h2",{id:"2-\u5907\u4efd\u914d\u7f6e\u6587\u4ef6"},"2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u4e3b\u8981\u5907\u4efd",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. \u521b\u5efa\u5907\u4efd\u76ee\u5f55\nmkdir /path/to/backup\n\n# 2. \u5907\u4efd\u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\ncp .env /path/to/backup\n\n")),(0,r.kt)("h2",{id:"3--\u5347\u7ea7"},"3.  \u5347\u7ea7"),(0,r.kt)("p",null,"\u62c9\u53d6master\u5206\u652f\u6700\u65b0\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/scow-deployment\n# \u540c\u6b65\u6700\u65b0\u4ee3\u7801\ngit pull\n")),(0,r.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tree -L 1\n\u251c\u2500\u2500 compose.sh              # \u7a0b\u5e8f\u6267\u884c\u5165\u53e3\uff0c\u6267\u884c\u8be5\u811a\u672c\u4f1a\u751f\u6210docker-compose.json\u3001db.sh\u6587\u4ef6\n\u251c\u2500\u2500 config-example          # scow\u4e1a\u52a1\u914d\u7f6e\u6a21\u677f\u6587\u4ef6\u76ee\u5f55\n\u251c\u2500\u2500 config-example.py       # scow\u7cfb\u7edf\u90e8\u7f72\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u6a21\u677f\n\u251c\u2500\u2500 fluent                  # fluent\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\n\u251c\u2500\u2500 generate.py             # \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u751f\u6210python\u811a\u672c\n\u2514\u2500\u2500 README.md\n")),(0,r.kt)("p",null,"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. \u590d\u5236\u914d\u7f6e\u6587\u4ef6\ncp config-example.py config.py\n\n# 2. \u914d\u7f6e\u53c2\u6570\n# \u6839\u636e\u548c\u5907\u4efd\u7684.env\u6587\u4ef6\u548cconfig.py\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4fee\u6539config.py\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\n\n")),(0,r.kt)("p",null,"\u670d\u52a1\u542f\u52a8\u4e0e\u505c\u6b62\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u542f\u52a8\u670d\u52a1\n./compose.sh up -d\n\n# \u505c\u6b62\u670d\u52a1\n./compose.sh down\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"./compose.sh"),"\u652f\u6301\u6240\u6709\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"\u6587\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u547d\u4ee4\uff0c\u5982\uff1aup\u3001down\u3001ps\u3001restart\u7b49\u3002")),(0,r.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003",(0,r.kt)("inlineCode",{parentName:"p"},"PKUHPC/scow-deployment"),"\u9879\u76ee\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/scow-deployment/blob/master/README.md"},"README.md"),"\u3002"))}m.isMDXComponent=!0}}]);