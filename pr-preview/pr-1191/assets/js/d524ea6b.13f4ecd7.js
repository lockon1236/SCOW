"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5802],{36206:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var s=i(35250),a=i(57766);const t={sidebar_position:1},l="IGV",r={id:"deploy/config/portal/apps/apps/igv/index",title:"IGV",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/portal/apps/apps/igv/index.md",sourceDirName:"deploy/config/portal/apps/apps/igv",slug:"/deploy/config/portal/apps/apps/igv/",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/config/portal/apps/apps/igv/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/igv/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"Emacs",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/config/portal/apps/apps/emacs/"},next:{title:"Jupyter",permalink:"/SCOW/pr-preview/pr-1191/docs/deploy/config/portal/apps/apps/jupyter/"}},p={},o=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001TurboVNC\u5b89\u88c5",id:"1turbovnc\u5b89\u88c5",level:3},{value:"2\u3001Java\u5b89\u88c5",id:"2java\u5b89\u88c5",level:3},{value:"3\u3001IGV\u5b89\u88c5",id:"3igv\u5b89\u88c5",level:4},{value:"4\u3001\u6dfb\u52a0modulefile\u6587\u4ef6",id:"4\u6dfb\u52a0modulefile\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"igv",children:"IGV"}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6f\u4ef6\u7b80\u4ecb",children:"\u8f6f\u4ef6\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"IGV (Integrative Genomics Viewer) \u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684\u57fa\u56e0\u7ec4\u6570\u636e\u5206\u6790\u5de5\u5177\uff0c\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u751f\u7269\u533b\u5b66\u7814\u7a76\u548c\u751f\u7269\u4fe1\u606f\u5b66\u9886\u57df\u3002\u5b83\u652f\u6301\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5305\u62ec\u57fa\u56e0\u7ec4\u5e8f\u5217\u3001\u6ce8\u91ca\u3001\u6bd4\u5bf9\u3001\u53d8\u5f02\u548c\u8868\u8fbe\u7b49\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u684c\u9762\u7c7b\u5e94\u7528\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u6709\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TurboVNC 3.0\u7248\u672c\u53ca\u4ee5\u4e0a"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Java 1.8 \u6216\u66f4\u9ad8\u7248\u672c"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u60a8\u9700\u8981\u8fd0\u884c\u7684IGV"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1turbovnc\u5b89\u88c5",children:"1\u3001TurboVNC\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://turbovnc.org/pmwiki/uploads/Downloads/TurboVNC.repo --no-check-certificate\nmv TurboVNC.repo /etc/yum.repos.d\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nyum install turbovnc -y\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2java\u5b89\u88c5",children:"2\u3001Java\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum install java-1.8.0-openjdk\n"})}),"\n",(0,s.jsx)(n.h4,{id:"3igv\u5b89\u88c5",children:"3\u3001IGV\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u8f6f\u4ef6\u5305\nwget https://data.broadinstitute.org/igv/projects/downloads/2.16/IGV_Linux_2.16.1_WithJava.zip\n# \u89e3\u538b\u8f6f\u4ef6\u5305\u5230\u6307\u5b9a\u5b89\u88c5\u8def\u5f84\nmkdir /data/software/igv\nunzip IGV_Linux_2.16.1_WithJava.zip -d /data/software/igv/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4\u6dfb\u52a0modulefile\u6587\u4ef6",children:"4\u3001\u6dfb\u52a0modulefile\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e\u5df2\u5b89\u88c5\u597d\u7684IGV\u7684modulefile\u6587\u4ef6:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/igv\ncat >> ${MODULEPATH}/igv/IGV_Linux_2.16.1 << EOF\n#%Module1.0#####################################################################\n##\n## igv@IGV_Linux_2.16.1 modulefile\n##\n\nproc ModulesHelp { } {\n    puts stderr "\\tThis module defines environment variables, aliases and add PATH for igv"\n    puts stderr "\\tVersion IGV_Linux_2.16.1"\n    InfoOut\n}\n\nset appname igv\nset version IGV_Linux_2.16.1\nset prefix /data/software/${appname}/${version}\n\nmodule-whatis   "igv@IGV_Linux_2.16.1"\n\nprepend-path PATH               $prefix\nprepend-path LD_LIBRARY_PATH    $prefix/lib\nprepend-path CLASSPATH          $prefix/lib/igv.jar\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528IGV\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa",(0,s.jsx)(n.code,{children:"config/apps"}),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,s.jsx)(n.code,{children:"igv.yml"}),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/igv.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: igv\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: igv\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3avnc\ntype: vnc\n\n# VNC\u5e94\u7528\u7684\u914d\u7f6e\nvnc:\n  # \u6b64X Session\u7684xstartup\u811a\u672c\n  xstartup: |\n    module switch igv/${igv_path}\n    igv.sh\n      \n# \u914d\u7f6eHTML\u8868\u5355\nattributes:\n  - type: select\n    name: igv_path\n    label: \u9009\u62e9\u7248\u672c\n    select:\n      - value: IGV_Linux_2.16.1\n        label: IGV_Linux_2.16.1\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57766:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(70079);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);