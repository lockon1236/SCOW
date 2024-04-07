"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9410],{24296:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>p});var s=o(49214),c=o(5409);const t={slug:"update-to-python-deployment",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",authors:["huangjun"],tags:["scow","scow-deployment"]},l=void 0,r={permalink:"/SCOW/pr-preview/pr-1187/blog/update-to-python-deployment",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-10-22-update-deployment.md",source:"@site/blog/2022-10-22-update-deployment.md",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",description:"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0cPKUHPC/scow-deployment\u9879\u76ee\u662f\u7eaf\u901a\u8fc7Docker Compose\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86Docker Compose\u5185\u7f6e\u7684profile\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662fDocker Compose\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002",date:"2022-10-22T00:00:00.000Z",tags:[{label:"scow",permalink:"/SCOW/pr-preview/pr-1187/blog/tags/scow"},{label:"scow-deployment",permalink:"/SCOW/pr-preview/pr-1187/blog/tags/scow-deployment"}],readingTime:2.265,hasTruncateMarker:!1,authors:[{name:"Huangjun",title:"Developer",url:"https://blog.csdn.net/huangjun0210?type=blog",imageURL:"https://avatars.githubusercontent.com/u/26295600",key:"huangjun"}],frontMatter:{slug:"update-to-python-deployment",title:"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc",authors:["huangjun"],tags:["scow","scow-deployment"]},unlisted:!1,prevItem:{title:"scow-cli",permalink:"/SCOW/pr-preview/pr-1187/blog/scow-cli-release"},nextItem:{title:"scow\u6587\u6863\u4e0a\u7ebf",permalink:"/SCOW/pr-preview/pr-1187/blog/docs-online"}},d={authorsImageUrls:[void 0]},p=[{value:"1. \u505c\u6b62scow\u670d\u52a1",id:"1-\u505c\u6b62scow\u670d\u52a1",level:2},{value:"2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6",id:"2-\u5907\u4efd\u914d\u7f6e\u6587\u4ef6",level:2},{value:"3.  \u5347\u7ea7",id:"3--\u5347\u7ea7",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c",(0,s.jsx)(n.code,{children:"PKUHPC/scow-deployment"}),"\u9879\u76ee\u662f\u7eaf\u901a\u8fc7",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u5185\u7f6e\u7684",(0,s.jsx)(n.code,{children:"profile"}),"\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662f",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u7b80\u5316\u90e8\u7f72\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u6613\u61c2\u548c\u7075\u6d3b\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u6700\u65b0\u7248\u672c\u7684",(0,s.jsx)(n.code,{children:"PKUHPC/scow-deployment"}),"\u9879\u76ee\u4f7f\u7528",(0,s.jsx)(n.code,{children:"python"}),"\u52a8\u6001\u751f\u6210",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u6587\u4ef6\uff0c\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u751f\u6210\u66f4\u6613\u7406\u89e3\u7684",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5e73\u6ed1\u7684\u4ece\u65e7\u7248\u672c\u5347\u7ea7\u81f3\u65b0\u7248\u672c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"1-\u505c\u6b62scow\u670d\u52a1",children:"1. \u505c\u6b62scow\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u8fdb\u5165scow-deployment\u9879\u76ee\u76ee\u5f55\ncd scow-deployment\n\n# \u505c\u6b62scow\u670d\u52a1\ndocker-compose down\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5907\u4efd\u914d\u7f6e\u6587\u4ef6",children:"2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3b\u8981\u5907\u4efd",(0,s.jsx)(n.code,{children:".env"}),"\u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# 1. \u521b\u5efa\u5907\u4efd\u76ee\u5f55\nmkdir /path/to/backup\n\n# 2. \u5907\u4efd\u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\ncp .env /path/to/backup\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3--\u5347\u7ea7",children:"3.  \u5347\u7ea7"}),"\n",(0,s.jsx)(n.p,{children:"\u62c9\u53d6master\u5206\u652f\u6700\u65b0\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd /path/to/scow-deployment\n# \u540c\u6b65\u6700\u65b0\u4ee3\u7801\ngit pull\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"tree -L 1\n\u251c\u2500\u2500 compose.sh\t\t\t\t# \u7a0b\u5e8f\u6267\u884c\u5165\u53e3\uff0c\u6267\u884c\u8be5\u811a\u672c\u4f1a\u751f\u6210docker-compose.json\u3001db.sh\u6587\u4ef6\n\u251c\u2500\u2500 config-example\t\t\t# scow\u4e1a\u52a1\u914d\u7f6e\u6a21\u677f\u6587\u4ef6\u76ee\u5f55\n\u251c\u2500\u2500 config-example.py\t\t# scow\u7cfb\u7edf\u90e8\u7f72\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u6a21\u677f\n\u251c\u2500\u2500 fluent\t\t\t\t\t# fluent\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\n\u251c\u2500\u2500 generate.py\t\t\t\t# \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u751f\u6210python\u811a\u672c\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# 1. \u590d\u5236\u914d\u7f6e\u6587\u4ef6\ncp config-example.py config.py\n\n# 2. \u914d\u7f6e\u53c2\u6570\n# \u6839\u636e\u548c\u5907\u4efd\u7684.env\u6587\u4ef6\u548cconfig.py\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4fee\u6539config.py\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u670d\u52a1\u542f\u52a8\u4e0e\u505c\u6b62\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8\u670d\u52a1\n./compose.sh up -d\n\n# \u505c\u6b62\u670d\u52a1\n./compose.sh down\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"./compose.sh"}),"\u652f\u6301\u6240\u6709\u57fa\u4e8e",(0,s.jsx)(n.code,{children:"Docker Compose"}),"\u6587\u4ef6\u7684",(0,s.jsx)(n.code,{children:"docker-compose"}),"\u547d\u4ee4\uff0c\u5982\uff1aup\u3001down\u3001ps\u3001restart\u7b49\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003",(0,s.jsx)(n.code,{children:"PKUHPC/scow-deployment"}),"\u9879\u76ee\u7684",(0,s.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-deployment/blob/master/README.md",children:"README.md"}),"\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},5409:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var s=o(48318);const c={},t=s.createContext(c);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);