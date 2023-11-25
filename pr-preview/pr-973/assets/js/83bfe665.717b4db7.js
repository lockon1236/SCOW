"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2367],{79748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var r=s(35250),c=s(57766);const t={sidebar_position:3,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},l=void 0,o={id:"deploy/get-started/vagrant/customization",title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"1. \u5982\u4f55\u4fee\u6539\u8282\u70b9\u79c1\u7f51IP",source:"@site/docs/deploy/get-started/vagrant/customization.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/customization",permalink:"/SCOW/pr-preview/pr-973/docs/deploy/get-started/vagrant/customization",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/customization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},sidebar:"deploy",previous:{title:"vagrant\u73af\u5883\u642d\u5efa",permalink:"/SCOW/pr-preview/pr-973/docs/deploy/get-started/vagrant/vagrant-env"},next:{title:"vagrant\u955c\u50cf\u5236\u4f5c",permalink:"/SCOW/pr-preview/pr-973/docs/deploy/get-started/vagrant/images"}},d={},i=[{value:"1. \u5982\u4f55\u4fee\u6539\u8282\u70b9\u79c1\u7f51IP",id:"1-\u5982\u4f55\u4fee\u6539\u8282\u70b9\u79c1\u7f51ip",level:2},{value:"2. \u5982\u4f55\u65b0\u589e\u8ba1\u7b97\u8282\u70b9",id:"2-\u5982\u4f55\u65b0\u589e\u8ba1\u7b97\u8282\u70b9",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-\u5982\u4f55\u4fee\u6539\u8282\u70b9\u79c1\u7f51ip",children:"1. \u5982\u4f55\u4fee\u6539\u8282\u70b9\u79c1\u7f51IP"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u65b9\u6848\u5404\u8282\u70b9IP\u4f7f\u7528\u7684\u662f",(0,r.jsx)(n.code,{children:"private_network"}),"\u6a21\u5f0f(Host-Only)\uff0c\u82e5\u4e0d\u4e0e\u5176\u4ed6\u865a\u673aIP\u51b2\u7a81\uff0c\u53ef\u4e0d\u9700\u8981\u4fee\u6539\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u5373\u53ef\u3002\u5982\u9700\u8981\u4fee\u6539\u8282\u70b9IP\uff0c\u53ef\u53c2\u7167\u5982\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(1) Vagrantfile\u4fee\u6539\uff1a"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4fee\u6539",(0,r.jsx)(n.code,{children:"Vagrantfile"}),"\u6587\u4ef6",(0,r.jsx)(n.code,{children:"vm_list"}),"\u4e0b\u5404\u8282\u70b9\u7684",(0,r.jsx)(n.code,{children:"eth1"}),"\u5c5e\u6027\uff0c\u4fee\u6539\u96c6\u7fa4\u4e2d\u5404\u8282\u70b9 \u4f7f\u7528\u7684IP\uff0c\u9700\u4fdd\u8bc1\u8bbe\u7f6e\u7684\u5404\u8282\u70b9IP\u5728\u540c\u4e00\u5c40\u57df\u7f51\u5185\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(2) slurm\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"slurm\\slurm.conf"}),"\u6587\u4ef6\u4e2d\u7684nodes\u914d\u7f6e\u90e8\u5206\uff0c\u5c06\u5404\u8282\u70b9IP\u4fee\u6539\u4e3a\u4e0e",(0,r.jsx)(n.code,{children:"vm_list"}),"\u4e2d\u914d\u7f6e\u7684\u4e00\u81f4\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"slurm\\ldap_client.sh"}),"\u6587\u4ef6\u4e2d",(0,r.jsx)(n.code,{children:"ServHost"}),"\u6539\u4e3aslurm\u8282\u70b9IP\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"slurm\\nfs_client.sh"}),"\u6587\u4ef6\u4e2d\u7684",(0,r.jsx)(n.code,{children:"192.168.88.101"}),"\u6539\u4e3aslurm\u8282\u70b9IP\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(3) SCOW\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scow\\scow-deployment\\config\\auth.yml"}),"\u6587\u4ef6\u4e2d\u7684",(0,r.jsx)(n.code,{children:"ldap.url"}),"\u7684IP\u6539\u4e3aslurm\u8282\u70b9IP\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scow\\scow-deployment\\config\\mis.yaml"}),"\u6587\u4ef6\u4e2d",(0,r.jsx)(n.code,{children:"fetchJobs.db.host"}),"\u6539\u4e3ascow\u8282\u70b9IP\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scow\\scow-deployment\\config\\clusters\\hpc01.yaml"}),"\u6587\u6863\u4e2d",(0,r.jsx)(n.code,{children:"slurm.mis.managerUrl"}),"\u6539\u4e3aslurm\u8282\u70b9IP\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(4) export job\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\uff1a"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"scow\\export-jobs\\config.py"}),"\u6587\u4ef6\u4e2d\u7684",(0,r.jsx)(n.code,{children:"cluster_db_conf.host"}),"\u6539\u4e3aslurm\u8282\u70b9IP\uff0c",(0,r.jsx)(n.code,{children:"mgt_db_conf.host"}),"scow\u8282\u70b9IP\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\u6267\u884c\u90e8\u7f72\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"vagrant up\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-\u5982\u4f55\u65b0\u589e\u8ba1\u7b97\u8282\u70b9",children:"2. \u5982\u4f55\u65b0\u589e\u8ba1\u7b97\u8282\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u6dfb\u52a0\u8ba1\u7b97\u8282\u70b9",(0,r.jsx)(n.code,{children:"cn02"}),"\u4e3a\u4f8b\uff0c",(0,r.jsx)(n.code,{children:"Vagrantfile"}),"\u6587\u4ef6",(0,r.jsx)(n.code,{children:"vm_list"}),"\u4e2d\u590d\u5236\u4e00\u4efd",(0,r.jsx)(n.code,{children:"cn01"}),"\u7684\u914d\u7f6e\uff0c\u5e76\u505a\u5982\u4e0b\u4fee\u6539\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'    {\n        :name => "cn02",\n        :eth1 => "192.168.88.104",\n        :mem => "4096",\n        :cpu => "4",\n        :sshport => 22234,\n        :box => "icode/slurm_compute",\n\t\t:role => "slurm",\n        :is_service_node => false\n    }\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\u4fee\u6539name\uff0ceth1\uff0csshport\u7684\u503c\uff0c\u53ef\u4e0d\u4fee\u6539\u5176\u4ed6\u5c5e\u6027\u503c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"slurm\\slurm.conf"}),"\u6587\u4ef6\u4e2d\u4fee\u6539\u8ba1\u7b97\u8282\u70b9\u548c\u5206\u533a\u914d\u7f6e\u4fe1\u606f\u90e8\u5206\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# NODES \u914d\u7f6e\u90e8\u5206\u5c06cn02\u8282\u70b9\u52a0\u5165 \nNodeName=cn0[1-2] NodeAddr=192.168.88.10[3-4]  CPUs=4 CoresPerSocket=2 ThreadsPerCore=1 RealMemory=3500 Procs=1 State=UNKNOWN\n\n# PARTITIONS \u914d\u7f6e\u90e8\u5206\u5c06cn02\u8282\u70b9\u52a0\u5165              \nPartitionName=compute Nodes=cn0[1-2] Default=YES MaxTime=INFINITE State=UP\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"scow\\scow-deployment\\config\\clusters\\hpc01.yaml"}),"\u4fee\u6539\u8282\u70b9\u548c\u5206\u533a\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# ...\nslurm:\n  loginNodes:\n    - name: login\n      address: 192.168.88.102\n\n  partitions:\n    - name: compute\n      # \u5206\u533a\u5185\u8282\u70b9\u6570\u4fee\u6539\u4e3a2\n      nodes: 2\n\n# ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\u6267\u884c\u90e8\u7f72\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"vagrant up\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},57766:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(70079);const c={},t=r.createContext(c);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);