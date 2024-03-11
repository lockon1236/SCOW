"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7335],{91963:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>p,toc:()=>t});var s=o(35250),r=o(57766);const d={sidebar_position:1},i="VSCode",p={id:"deploy/config/ai/apps/apps/vscode/index",title:"VSCode",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/ai/apps/apps/vscode/index.md",sourceDirName:"deploy/config/ai/apps/apps/vscode",slug:"/deploy/config/ai/apps/apps/vscode/",permalink:"/SCOW/pr-preview/pr-1162/docs/deploy/config/ai/apps/apps/vscode/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/ai/apps/apps/vscode/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"JupyterLab",permalink:"/SCOW/pr-preview/pr-1162/docs/deploy/config/ai/apps/apps/jupyterlab/"},next:{title:"\u5ba1\u8ba1\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-1162/docs/category/\u5ba1\u8ba1\u7cfb\u7edf"}},c={},t=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vscode",children:"VSCode"}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6f\u4ef6\u7b80\u4ecb",children:"\u8f6f\u4ef6\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"code-server\u662f\u4e00\u4e2a\u57fa\u4e8eVS Code\u7684\u5f00\u6e90\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u901a\u8fc7\u6d4f\u89c8\u5668\u8fdc\u7a0b\u8bbf\u95ee\u4e00\u4e2a\u8fd0\u884c\u7740VS Code\u7684\u670d\u52a1\u5668\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u6709coder/code-server\u955c\u50cf\u6216\u8005\u53ef\u4ee5\u62c9\u53d6\u5230\u914d\u7f6e\u91cc\u5bf9\u5e94\u7684\u955c\u50cf\u5730\u5740\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528code-server\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa",(0,s.jsx)(n.code,{children:"config/ai/apps"}),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,s.jsx)(n.code,{children:"vscode.yml"}),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/ai/apps/vscode.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: vscode\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: VSCode\n\nimage:\n  # \u955c\u50cf\u540d\u79f0\n  name: codercom/code-server\n  # \u955c\u50cf\u7248\u672c\n  tag: 4.20.0\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  \n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PASSWORD=$(get_password 12)\n\n  # \u6307\u660e\u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u4e2d\u7684\u542f\u52a8\u547d\u4ee4\uff0c\u7528\u6237\u5728\u521b\u5efa\u5e94\u7528\u9875\u9762\u53ef\u4ee5\u5728\u811a\u672c\u4e2d\u66ff\u6362\u8be5\u547d\u4ee4\n  startCommand:\n    code-server\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\n  script: |\n    PASSWORD=$PASSWORD\n    code-server -vvv --bind-addr 0.0.0.0:$PORT --auth password\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /login\n    formData:\n      password: "{{ PASSWORD }}"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1162/docs/deploy/config/portal/apps/apps/vscode/#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",children:"\u53c2\u8003\u95e8\u6237\u7cfb\u7edf\u7684vscode\u914d\u7f6e\u793a\u4f8b\u7684\u6ce8\u610f\u4e8b\u9879"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},57766:(e,n,o)=>{o.d(n,{Z:()=>p,a:()=>i});var s=o(70079);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);