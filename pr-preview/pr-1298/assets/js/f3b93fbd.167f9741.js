"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3043],{44387:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var s=c(49214),a=c(5409);const t={sidebar_position:1},o="Octave",l={id:"deploy/config/portal/apps/apps/octave/index",title:"Octave",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/portal/apps/apps/octave/index.md",sourceDirName:"deploy/config/portal/apps/apps/octave",slug:"/deploy/config/portal/apps/apps/octave/",permalink:"/SCOW/pr-preview/pr-1298/docs/deploy/config/portal/apps/apps/octave/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/octave/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"Matlab",permalink:"/SCOW/pr-preview/pr-1298/docs/deploy/config/portal/apps/apps/matlab/"},next:{title:"Relion",permalink:"/SCOW/pr-preview/pr-1298/docs/deploy/config/portal/apps/apps/relion/"}},i={},r=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001TurboVNC\u5b89\u88c5",id:"1turbovnc\u5b89\u88c5",level:3},{value:"2\u3001Octave\u5b89\u88c5",id:"2octave\u5b89\u88c5",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"octave",children:"Octave"}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6f\u4ef6\u7b80\u4ecb",children:"\u8f6f\u4ef6\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"Octave\u662f\u4e00\u79cd\u5f00\u6e90\u7684\u6570\u503c\u8ba1\u7b97\u5de5\u5177\uff0c\u53ef\u7528\u4e8e\u6267\u884c\u5404\u79cd\u6570\u503c\u8ba1\u7b97\u4efb\u52a1\uff0c\u5305\u62ec\u7ebf\u6027\u4ee3\u6570\u3001\u975e\u7ebf\u6027\u4f18\u5316\u3001\u4fe1\u53f7\u5904\u7406\u3001\u56fe\u50cf\u5904\u7406\u548c\u7edf\u8ba1\u5206\u6790\u7b49\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u684c\u9762\u7c7b\u5e94\u7528\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u6709\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TurboVNC 3.0\u7248\u672c\u53ca\u4ee5\u4e0a"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u60a8\u9700\u8981\u8fd0\u884c\u7684Octave"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1turbovnc\u5b89\u88c5",children:"1\u3001TurboVNC\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://turbovnc.org/pmwiki/uploads/Downloads/TurboVNC.repo --no-check-certificate\nmv TurboVNC.repo /etc/yum.repos.d\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nyum install turbovnc -y\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2octave\u5b89\u88c5",children:"2\u3001Octave\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["octave\u53ef\u4ee5\u901a\u8fc7conda\u8fdb\u884c\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003Jupyter\u5e94\u7528\u914d\u7f6e\u9644\u7ae0\u4e2d\u7684",(0,s.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1298/docs/deploy/config/portal/apps/apps/jupyter/",children:"Anaconda\u5b89\u88c5"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684conda\u73af\u5883\uff0c\u65b0\u73af\u5883\u540d\u79f0\u683c\u5f0f\u4f7f\u7528\u201c\u8f6f\u4ef6\u540d-\u7248\u672c\u53f7\u201d\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda create -n octave-7.2.0 -y\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6fc0\u6d3b\u65b0\u521b\u5efa\u7684\u73af\u5883\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda activate octave-7.2.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5 Octave\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda install octave=7.2.0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528Octave\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa",(0,s.jsx)(n.code,{children:"config/apps"}),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,s.jsx)(n.code,{children:"octave.yml"}),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/octave.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: octave\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: octave\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3avnc\ntype: vnc\n\n# VNC\u5e94\u7528\u7684\u914d\u7f6e\nvnc:\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export CONDA_VERSION="anaconda/3-2023.03"\n    export SHELL_NAME=$(echo ${SHELL} | awk -F\'/\' \'{print $NF}\')\n\n  # \u6b64X Session\u7684xstartup\u811a\u672c\n  xstartup: |\n    module switch ${CONDA_VERSION}\n    eval "$($(which conda) shell.${SHELL_NAME} hook)"\n\n    conda activate ${octave_version}\n    if [ $? -ne 0 ]; then\n      exit 1\n    fi\n    octave --gui\n      \n# \u914d\u7f6eHTML\u8868\u5355\nattributes:\n  - type: select\n    name: octave_version\n    label: \u9009\u62e9\u7248\u672c\n    select:\n      - value: octave-7.2.0\n        label: octave-7.2.0\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0WEB\u6d4f\u89c8\u5668\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8eOctave\uff0cexport\u4ee5\u4e0b\u53d8\u91cf\u7684\u542b\u4e49\u662f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SHELL_NAME"}),"\uff1a\u5f53\u524d\u4f1a\u8bdd\u7684shell\u540d\u79f0"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CONDA_VERSION"}),"\uff1a\u7cfb\u7edf\u9ed8\u8ba4\u7684conda\u7248\u672c"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5409:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>l});var s=c(48318);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);