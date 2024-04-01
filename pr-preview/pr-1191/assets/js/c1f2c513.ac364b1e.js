"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6314],{9684:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var s=n(35250),l=n(57766);const i={sidebar_position:2,title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4"},d="\u4e0b\u8f7d",o={id:"deploy/install/scow-cli",title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4",source:"@site/docs/deploy/install/scow-cli.md",sourceDirName:"deploy/install",slug:"/deploy/install/scow-cli",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/install/scow-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/install/scow-cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4"},sidebar:"deploy",previous:{title:"\u5b89\u88c5",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/install/"},next:{title:"\u4ece\u6e90\u7801\u6784\u5efa",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/install/build-from-source"}},t={},r=[{value:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167",id:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167",level:2}];function h(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.p,{children:"scow-cli\u662fSCOW\u96c6\u7fa4\u5b89\u88c5\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528scow-cli\u9ad8\u6548\u7ba1\u7406\u60a8\u7684\u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(c.h1,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,s.jsx)(c.p,{children:"\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u4e0b\u8f7dscow-cli\uff0c\u5e76\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u89e3\u538b\uff0c\u5c06\u91cc\u9762\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u653e\u5230\u60a8\u5c06\u4f1a\u5b58\u653eSCOW\u914d\u7f6e\u6587\u4ef6\u7684\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.a,{href:"https://github.com/PKUHPC/SCOW/releases",children:"GitHub Release"}),": SCOW\u6bcf\u6b21\u53d1\u5e03\u65b0\u7684\u7248\u672c\u65f6\uff0c\u5c06\u4f1a\u5c06\u6b64\u7248\u672c\u7684",(0,s.jsx)(c.code,{children:"scow-cli"}),"\u4e0a\u4f20\u5230Release\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(c.p,{children:["\u60f3\u83b7\u53d6\u6700\u65b0\u7684scow-cli\u7248\u672c\uff1f\u60a8\u53ef\u4ee5\u4eceGitHub Actions\u7684",(0,s.jsxs)(c.a,{href:"https://github.com/PKUHPC/SCOW/actions/workflows/test-build-publish.yaml",children:[(0,s.jsx)(c.code,{children:"Test, Build and Publish Projects"})," workflow"]}),"\u4e2d\u4e0b\u8f7d\u5230\u4e0a\u4f20\u5230Archive\u7684",(0,s.jsx)(c.code,{children:"scow-cli"}),"\u3002"]}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsx)(c.li,{children:"\u53c2\u8003\u547d\u4ee4"}),"\n"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"# \u5982\u679c\u6ca1\u6709wget\uff0c\u53ef\u4ee5\u5148install\nyum install wget\n\n# \u4e0b\u8f7d\u5bf9\u5e94\u7684release\u7248\u672c\u3002\u4fee\u6539latest\u3001cli-x64\u53ef\u4e0b\u8f7d\u6307\u5b9a\u7248\u672ccli\n# \u4fee\u6539latest\u4e3av0.4.0\u5373\u53ef\u4e0b\u8f7d0.4.0\u7248\u672c\u7684cli\uff0c\u5982 https://github.com/PKUHPC/SCOW/releases/download/v0.4.0/cli-x64\n# \u53ef\u4fee\u6539cli-x64\u4e3acli-arm64\u4e0b\u8f7darm64\u7248\u672c\uff0c\u5982 https://github.com/PKUHPC/SCOW/releases/download/v0.4.0/cli-arm64\nwget https://github.com/PKUHPC/SCOW/releases/download/latest/cli-x64\n\n# \u91cd\u547d\u540d\nmv cli-x64 cli\n\n#\u4fee\u6539\u6587\u4ef6\u6743\u9650\nchmod +x cli\n"})}),"\n",(0,s.jsx)(c.h1,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsxs)(c.p,{children:["scow-cli\u4f7f\u7528\u8fd0\u884c\u76ee\u5f55\u4e0b\u7684",(0,s.jsx)(c.code,{children:"install.yaml"}),"\u4f5c\u4e3a\u914d\u7f6e\u6765\u7ba1\u7406\u96c6\u7fa4\uff0c\u4f46\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(c.code,{children:"-c"}),"\u547d\u4ee4\u884c\u9009\u9879\u6307\u5b9a",(0,s.jsx)(c.code,{children:"install.yaml"}),"\u7684\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(c.h1,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"# docker compose \u64cd\u4f5c\n# \u5728compose\u540e\u8ddf\u4efb\u610fcompose\u53c2\u6570\n# \u6ce8\u610f\uff1a\u6bcf\u6b21\u8fd0\u884ccompose\u7684\u64cd\u4f5c\u65f6\uff0ccli\u5c06\u4f1a\u5728\u672c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u7684docker-compose-{\u65f6\u95f4\u6233}.yml\u6587\u4ef6\uff0c\u8fd0\u884c\u7ed3\u675f\u540e\u4f1a\u5220\u9664\u6b64\u6587\u4ef6\n# \u4ee5\u4fdd\u8bc1docker compose\u914d\u7f6e\u7684\u5185\u5bb9\u4e3a\u6700\u65b0\n# \u542f\u52a8\u96c6\u7fa4\n./cli compose up -d\n# \u5173\u95ed\u96c6\u7fa4\n./cli compose down\n# \u66f4\u65b0\u955c\u50cf\n./cli compose pull\n\n# \u751f\u6210docker-compose.yml\u6587\u4ef6\n./cli generate -o docker-compose.yml\n\n# \u8fdb\u5165\u6570\u636e\u5e93\n./cli db\n\n# \u5c06\u6700\u7b80\u7248\u672c\u7684\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u653e\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\n./cli init\n\n# \u5c06\u5168\u7248\u672c\u7684\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u653e\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\n./cli init -f\n\n# \u67e5\u770b\u5f53\u524d\u4f7f\u7528install.yaml\u7684\u5185\u5bb9\n./cli view-install\n\n# \u68c0\u67e5./config\u76ee\u5f55\u4e0b\u7684SCOW\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\n./cli check-config\n"})}),"\n",(0,s.jsx)(c.h1,{id:"\u4ecescow-deployment\u8fc1\u79fb",children:"\u4ecescow-deployment\u8fc1\u79fb"}),"\n",(0,s.jsx)(c.p,{children:"\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli\u662f\u975e\u5e38\u5bb9\u6613\u7684\u3002"}),"\n",(0,s.jsxs)(c.p,{children:["\u9996\u5148\uff0c\u8bf7\u5148\u4e0b\u8f7dscow-cli\u5230\u60a8\u7684scow-deployment\u6587\u4ef6\u5939\u4e2d\uff0c\u786e\u4fdd",(0,s.jsx)(c.code,{children:"config.py"}),"\u5b58\u5728\u4e8e\u76ee\u5f55\u4e2d\uff0c\u7136\u540e\u8fd0\u884c"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"./cli migrate\n"})}),"\n",(0,s.jsxs)(c.p,{children:["\u6b64\u547d\u4ee4\u5c06\u4f1a\u8bfb\u53d6\u5f53\u524d\u76ee\u5f55\u4e2d",(0,s.jsx)(c.code,{children:"config.py"}),"\u4e2d\u7684\u914d\u7f6e\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u7684",(0,s.jsx)(c.code,{children:"install.yaml"}),"\u3002"]}),"\n",(0,s.jsx)(c.p,{children:"\u4e4b\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528scow-cli\u6765\u7ba1\u7406\u60a8\u7684\u96c6\u7fa4\u4e86\u3002"}),"\n",(0,s.jsx)(c.h2,{id:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167",children:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167"}),"\n",(0,s.jsxs)(c.table,{children:[(0,s.jsx)(c.thead,{children:(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.th,{children:"\u4f7f\u7528"}),(0,s.jsx)(c.th,{children:(0,s.jsx)(c.code,{children:"scow-deployment"})}),(0,s.jsx)(c.th,{children:(0,s.jsx)(c.code,{children:"scow-cli"})})]})}),(0,s.jsxs)(c.tbody,{children:[(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"\u542f\u52a8\u7cfb\u7edf"}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./compose.sh up -d"})}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./cli compose up -d"})})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"\u505c\u6b62\u7cfb\u7edf"}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./compose.sh down"})}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./cli compose down"})})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"\u8ddf\u968f\u67e5\u770b\u6240\u6709\u65e5\u5fd7"}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./compose.sh logs -f"})}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./cli compose logs -f"})})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"\u66f4\u65b0\u955c\u50cf"}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./compose.sh pull"})}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./cli compose pull"})})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"\u8fdb\u5165\u6570\u636e\u5e93"}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./db.sh"})}),(0,s.jsx)(c.td,{children:(0,s.jsx)(c.code,{children:"./cli db"})})]})]})]}),"\n",(0,s.jsxs)(c.h1,{id:"\u66f4\u65b0scow-cli",children:["\u66f4\u65b0",(0,s.jsx)(c.code,{children:"scow-cli"})]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:"scow-cli"}),"\u53ef\u4ee5\u81ea\u6211\u66f4\u65b0\u3002"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"# \u66f4\u65b0\u5230PR 535\u5bf9\u5e94\u7684\u6700\u65b0\u7684\u7248\u672c\n./cli update --pr 535\n\n# \u5c06test\u5206\u652f\u7684\u6700\u65b0cli\u4e0b\u8f7d\u5230./cli-test\n./cli update --pr 535 -o ./cli-test\n\n# \u66f4\u65b0\u5230test\u5206\u652f\u7684\u6700\u65b0cli\u7248\u672c\n./cli update --branch test\n\n# \u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u7684scow-cli\n./cli update\n\n# \u66f4\u65b0cli\u81f3v0.4.0\u7248\u672c\n./cli update --release v0.4.0\n\n# \u4e0b\u8f7dv0.4.0\u7248\u672c\u7684scow-cli\u5e76\u4fdd\u5b58\u5230./cli-test\n./cli update --release v0.4.0 -o ./cli-test\n"})}),"\n",(0,s.jsxs)(c.p,{children:["\u4f7f\u7528",(0,s.jsx)(c.code,{children:"--pr"}),"\u6216\u8005",(0,s.jsx)(c.code,{children:"--branch"}),"\u9009\u9879\u9700\u8981\u60a8\u521b\u5efa\u4e00\u4e2a\u6709",(0,s.jsx)(c.code,{children:"workflow"}),"\u6743\u9650\u7684GitHub Token ( ",(0,s.jsx)(c.a,{href:"https://github.com/settings/tokens/new",children:"https://github.com/settings/tokens/new"})," )\uff0c\u5e76\u5c06\u8fd9\u4e2atoken\u653e\u5230cli\u76ee\u5f55\u4e0b\u7684",(0,s.jsx)(c.code,{children:".env"}),"\u6587\u4ef6"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-env",metastring:'title=".env"',children:"# .env\nGITHUB_TOKEN={token}\n"})}),"\n",(0,s.jsx)(c.h1,{id:"\u4ee3\u7406",children:"\u4ee3\u7406"}),"\n",(0,s.jsxs)(c.p,{children:["CLI\u9700\u8981\u8bbf\u95ee\u7f51\u7edc\u7684\u529f\u80fd\uff08\u4f8b\u5982\u66f4\u65b0scow-cli\uff09\u53ef\u4ee5\u8bbe\u7f6eHTTP\u4ee3\u7406\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,s.jsx)(c.code,{children:"HTTPS_PROXY"}),", ",(0,s.jsx)(c.code,{children:"https_proxy"}),", ",(0,s.jsx)(c.code,{children:"HTTP_PROXY"}),", ",(0,s.jsx)(c.code,{children:"http_proxy"}),"\u73af\u5883\u53d8\u91cf\u6765\u8bbe\u7f6e\u4ee3\u7406\u3002\u5982\u679c\u591a\u4e2a\u73af\u5883\u53d8\u91cf\u540c\u65f6\u5b58\u5728\uff0c\u5219\u4f7f\u7528\u4f18\u5148\u7ea7\u4e3a\u4e0a\u9762\u5217\u51fa\u6765\u7684\u987a\u5e8f\u3002"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"# \u73af\u5883\u53d8\u91cf\u4e5f\u53ef\u4ee5\u5199\u5165.env\u4e2d\nexport HTTPS_PROXY=http://localhost:1080\n./cli update\n"})}),"\n",(0,s.jsx)(c.h1,{id:"\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7",children:"\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:'LOG_LEVEL="debug" ./cli\n'})})]})}function a(e={}){const{wrapper:c}={...(0,l.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},57766:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>d});var s=n(70079);const l={},i=s.createContext(l);function d(e){const c=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(i.Provider,{value:c},e.children)}}}]);