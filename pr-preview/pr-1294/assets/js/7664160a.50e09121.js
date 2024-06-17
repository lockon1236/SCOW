"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5974],{87994:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var c=n(49214),l=n(5409);const r={slug:"scow-deploy-process",title:"SCOW\u90e8\u7f72\u53ca\u8fd0\u7ef4",authors:["huangjun"],tags:["scow","scow-deployment"]},i="1. \u90e8\u7f72\u6d41\u7a0b",o={permalink:"/SCOW/pr-preview/pr-1294/blog/scow-deploy-process",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2024-06-17-scow-deploy-process.md",source:"@site/blog/2024-06-17-scow-deploy-process.md",title:"SCOW\u90e8\u7f72\u53ca\u8fd0\u7ef4",description:"\u524d\u63d0\u6761\u4ef6\uff1a",date:"2024-06-17T00:00:00.000Z",tags:[{label:"scow",permalink:"/SCOW/pr-preview/pr-1294/blog/tags/scow"},{label:"scow-deployment",permalink:"/SCOW/pr-preview/pr-1294/blog/tags/scow-deployment"}],readingTime:4.665,hasTruncateMarker:!1,authors:[{name:"Huangjun",title:"Developer",url:"https://blog.csdn.net/huangjun0210?type=blog",imageURL:"https://avatars.githubusercontent.com/u/26295600",key:"huangjun"}],frontMatter:{slug:"scow-deploy-process",title:"SCOW\u90e8\u7f72\u53ca\u8fd0\u7ef4",authors:["huangjun"],tags:["scow","scow-deployment"]},unlisted:!1,nextItem:{title:"SCOW\u5347\u7ea7\uff1a\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5230v1.0.0",permalink:"/SCOW/pr-preview/pr-1294/blog/scow-update-to-v1.0"}},d={authorsImageUrls:[void 0]},t=[{value:"1.1 \u51c6\u5907SCOW\u90e8\u7f72\u8282\u70b9",id:"11-\u51c6\u5907scow\u90e8\u7f72\u8282\u70b9",level:2},{value:"1.2 \u7f16\u8bd1\u548c\u90e8\u7f72\u9002\u914d\u5668",id:"12-\u7f16\u8bd1\u548c\u90e8\u7f72\u9002\u914d\u5668",level:2},{value:"1.3 \u914d\u7f6eSCOW",id:"13-\u914d\u7f6escow",level:2},{value:"1.4 \u5176\u4ed6\u914d\u7f6e(\u53ef\u9009)",id:"14-\u5176\u4ed6\u914d\u7f6e\u53ef\u9009",level:2}];function h(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.admonition,{type:"tip",children:[(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u524d\u63d0\u6761\u4ef6\uff1a"})}),"\n"]}),(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsxs)(s.strong,{children:["slurm\u96c6\u7fa4\u51c6\u5907\u5b8c\u6bd5\uff0c\u7248\u672c\u4e3a",(0,c.jsx)(s.code,{children:"21.08.4"}),"\u53ca\u4ee5\u4e0a\uff0c\u4e14\u5f00\u542f\u4e86",(0,c.jsx)(s.a,{href:"https://slurm.schedmd.com/accounting.html#database-configuration",children:"Accounting"}),"\u529f\u80fd"]}),"\uff0c\u90e8\u7f72slurm\u96c6\u7fa4\u53ef\u53c2\u8003",(0,c.jsx)(s.a,{href:"/docs/hpccluster",children:"slurm\u96c6\u7fa4\u90e8\u7f72\u5b9e\u8df5"}),"\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"slurm\u96c6\u7fa4\u5404\u8282\u70b9\u5b9e\u73b0\u4e86LDAP\u8ba4\u8bc1"}),"\uff0c\u63d0\u4f9b\u4e24\u4e2a\u57fa\u4e8eCentOS7\u7684\u811a\u672c\u7528\u6765\u5feb\u901f\u642d\u5efa\u548c\u914d\u7f6eLDAP\uff0c\u4fee\u6539\u4e24\u4e2a\u6587\u4ef6\u5f00\u5934\u90e8\u5206\u7684\u76f8\u5173\u914d\u7f6e\uff08",(0,c.jsx)(s.code,{children:"Start Configuratin Part"}),"\u548c",(0,c.jsx)(s.code,{children:"End Configuration Part"}),"\u4e4b\u95f4\u7684\u53d8\u91cf\uff09\uff0c\u8fd0\u884c\u5373\u53ef\uff1a","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/dev/ldap/provider.sh",children:"provider.sh"}),": \u7528\u4e8e\u914d\u7f6eLDAP\u670d\u52a1\u5668"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/dev/ldap/client.sh",children:"client.sh"}),": \u7528\u4e8e\u914d\u7f6eLDAP\u5ba2\u6237\u7aef"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"slurm\u96c6\u7fa4\u6302\u8f7d\u4e86\u5e76\u884c\u6587\u4ef6\u7cfb\u7edf"}),"\uff0c\u4f8b\u5982lustre\u3001gpfs\u7b49\uff0c\u63d0\u4f9b",(0,c.jsx)(s.a,{href:"/docs/hpccluster/nfs",children:"NFS\u7684\u642d\u5efa"}),"\u4f9b\u53c2\u8003\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9\u5b89\u88c5TurboVNC\uff0c\u7248\u672c3.0\u4ee5\u4e0a\uff0c",(0,c.jsx)(s.a,{href:"https://turbovnc.org/Downloads/YUM",children:"\u5b98\u65b9\u5b89\u88c5\u6559\u7a0b"}),"\uff1b"]}),"\n",(0,c.jsx)(s.li,{children:"\u767b\u5f55\u8282\u70b9\u5b89\u88c5\u684c\u9762\uff0c\u4f8b\u5982Xfce\u3001KDE\u3001MATE\u7b49\u3002"}),"\n"]})]}),"\n",(0,c.jsx)(s.h2,{id:"11-\u51c6\u5907scow\u90e8\u7f72\u8282\u70b9",children:"1.1 \u51c6\u5907SCOW\u90e8\u7f72\u8282\u70b9"}),"\n",(0,c.jsx)(s.p,{children:"\u5efa\u8bae\u5355\u72ec\u51c6\u5907\u4e00\u4e2a\u8282\u70b9\u7528\u4e8e\u90e8\u7f72SCOW\uff0c\u8981\u6c42\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u6700\u5c0f\u914d\u7f6e\uff1a8C16G\uff0c\u63a8\u8350\u914d\u7f6e(\u751f\u4ea7\u7ea7)\uff1a16C32G\uff1b"}),"\n",(0,c.jsxs)(s.li,{children:["\u4e0eslurm\u96c6\u7fa4\u5404\u8282\u70b9\u7f51\u7edc\u53ef\u8fbe\uff0c\u6216\u8005\u81f3\u5c11\u4e0eslurm\u96c6\u7fa4\u767b\u5f55\u8282\u70b9\u548c\u7ba1\u7406\u8282\u70b9\u7f51\u7edc\u53ef\u8fbe(",(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/proxy-gateway",children:"\u4ee3\u7406\u7f51\u5173\u65b9\u6848"}),")\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u5b89\u88c5docker\u548cdocker-compose\uff0c\u4ee5\u4e0b\u7ed9\u51fa\u57fa\u4e8eyum\u5b89\u88c5\u65b9\u5f0f\u4f9b\u53c2\u8003\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-shell",children:'# 1. \u5b89\u88c5Docker \nyum install -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2 \n# \u8bbe\u7f6e\u7a33\u5b9a\u5b58\u50a8\u5e93\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo   \n# \u5b89\u88c5\nyum install docker-ce -y\n# \u542f\u52a8Docker CE\u5e76\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\nsystemctl start docker\nsystemctl enable docker\n\n# 2. \u5b89\u88c5docker-compose\ncurl -L "https://github.com/docker/compose/releases/download/v2.7.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n#\u8d4b\u6743\nchmod +x /usr/local/bin/docker-compose\n# \u9a8c\u8bc1\ndocker-compose --version\n'})}),"\n",(0,c.jsx)(s.h2,{id:"12-\u7f16\u8bd1\u548c\u90e8\u7f72\u9002\u914d\u5668",children:"1.2 \u7f16\u8bd1\u548c\u90e8\u7f72\u9002\u914d\u5668"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter/blob/master/docs/deploy.md",children:"slurm\u9002\u914d\u5668\u5b89\u88c5\u90e8\u7f72\u6587\u6863"}),"\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u9002\u914d\u5668\u8fd0\u884c\u4f9d\u8d56\u672c\u673aglibc\u7248\u672c\uff0c\u5f3a\u70c8\u5efa\u8bae\u5728\u4e0e\u8fd0\u884c\u73af\u5883(slurm\u7ba1\u7406\u8282\u70b9)\u4e00\u81f4\u7684\u73af\u5883\u4e2d\u4e0b\u8f7d\u6e90\u7801",(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter/blob/master/docs/deploy.md#12-%E4%B8%8B%E8%BD%BD%E4%BB%A3%E7%A0%81%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E8%87%AA%E5%B7%B1%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6",children:"\u81ea\u884c\u7f16\u8bd1"}),"\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"13-\u914d\u7f6escow",children:"1.3 \u914d\u7f6eSCOW"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0b\u8f7d",(0,c.jsx)(s.code,{children:"scow-cli"}),"\uff0c",(0,c.jsx)(s.a,{href:"/docs/deploy/install/scow-cli",children:"scow-cli\u4f7f\u7528\u53c2\u8003"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u914d\u7f6e\u6587\u4ef6\u53ca\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u914d\u7f6e\u6587\u4ef6"}),(0,c.jsx)(s.th,{children:"\u529f\u80fd\u8bf4\u660e"}),(0,c.jsx)(s.th,{children:"\u8bf4\u660e"}),(0,c.jsx)(s.th,{children:"\u5907\u6ce8"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"install.yaml"}),(0,c.jsx)(s.td,{children:"SCOW\u5b89\u88c5\u6587\u4ef6"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/apps/cli/assets/init/install.yaml",children:"\u6700\u7b80\u914d\u7f6e\u53c2\u8003"})}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"{\u96c6\u7fa4ID}"}),".yaml"]}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/cluster-config",children:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"})}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/apps/cli/assets/init/config/clusters/hpc01.yaml",children:"\u6700\u7b80\u914d\u7f6e\u53c2\u8003"})}),(0,c.jsx)(s.td,{children:"\u652f\u6301\u591a\u96c6\u7fa4\uff0c\u4e00\u4e2a\u96c6\u7fa4\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"auth.yaml"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/auth/ldap",children:"\u8ba4\u8bc1\u914d\u7f6e\u6587\u4ef6"})}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/apps/cli/assets/init/config/auth.yml",children:"\u6700\u7b80\u914d\u7f6e\u53c2\u8003"})}),(0,c.jsx)(s.td,{children:"\u6240\u6709\u96c6\u7fa4\u540c\u4e00\u4e2a\u8ba4\u8bc1\u7cfb\u7edf"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"mis.yaml"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/mis/intro",children:"\u7ba1\u7406\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"})}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"portal.yaml"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/intro#%E7%BC%96%E5%86%99%E9%97%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE",children:"\u95e8\u6237\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"})}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{children:"\u82e5\u767b\u5f55\u8282\u70b9\u4e0d\u662f\u5b89\u88c5\u7684xfce\uff0c\u9700\u8981\u5bf9\u5e94\u8fdb\u884c\u4fee\u6539"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"audit.yaml"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/audit/intro#%E7%BC%96%E5%86%99%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE",children:"\u64cd\u4f5c\u65e5\u5fd7\u914d\u7f6e\u6587\u4ef6"})}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"common.yaml"}),(0,c.jsx)(s.td,{children:"\u516c\u5171\u914d\u7f6e\u6587\u4ef6"}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"clusterTexts.yaml"}),(0,c.jsx)(s.td,{children:"\u96c6\u7fa4\u8bf4\u660e\u914d\u7f6e\u6587\u4ef6"}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"ui.yaml"}),(0,c.jsx)(s.td,{children:"ui\u914d\u7f6e\u6587\u4ef6"}),(0,c.jsx)(s.td,{children:"\u53ef\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),(0,c.jsx)(s.td,{})]})]})]}),"\n",(0,c.jsx)(s.h2,{id:"14-\u5176\u4ed6\u914d\u7f6e\u53ef\u9009",children:"1.4 \u5176\u4ed6\u914d\u7f6e(\u53ef\u9009)"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/apps/intro",children:"\u4ea4\u4e92\u5f0f\u5e94\u7528"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/apps/configure-app-logo",children:"\u4e3a\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u56fe\u6807"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/apps/configure-cluster-apps",children:"\u591a\u96c6\u7fa4\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/customization/dashboard",children:"\u81ea\u5b9a\u4e49logo"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/transfer-cross-clusters",children:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/portal/proxy-gateway",children:"\u4ee3\u7406\u7f51\u5173\u8282\u70b9"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/mis/cluster-monitor",children:"\u96c6\u7fa4\u76d1\u63a7\u914d\u7f6e"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/gateway/config",children:"\u7f51\u5173\u914d\u7f6e"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/basepath",children:"\u81ea\u5b9a\u4e49\u76f8\u5bf9\u8def\u5f84"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/webui",children:"\u81ea\u5b9a\u4e49\u524d\u7aef\u4e3b\u9898"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/public-files",children:"\u516c\u5171\u6587\u4ef6"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-navlinks",children:"\u81ea\u5b9a\u4e49\u5bfc\u822a\u94fe\u63a5"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-amount-strategies",children:"\u81ea\u5b9a\u4e49\u6536\u8d39\u89c4\u5219"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-userlinks",children:"\u81ea\u5b9a\u4e49\u7528\u6237\u4e0b\u62c9\u83dc\u5355"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/password-pattern",children:"\u81ea\u5b9a\u4e49\u7528\u6237\u5bc6\u7801\u89c4\u5219"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-charge-types",children:"\u81ea\u5b9a\u4e49\u6d88\u8d39\u7c7b\u578b"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-job-charge-metadata",children:"\u6d88\u8d39\u8bb0\u5f55\u4e2d\u4fdd\u5b58\u4f5c\u4e1a\u76f8\u5173\u5b57\u6bb5"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-config-i18n",children:"\u56fd\u9645\u5316"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/config/customization/custom-system-language",children:"\u81ea\u5b9a\u4e49\u7cfb\u7edf\u8bed\u8a00"})}),"\n"]}),"\n",(0,c.jsx)(s.h1,{id:"2-\u8fd0\u7ef4",children:"2. \u8fd0\u7ef4"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/install/scow-cli#%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4%E7%9A%84%E5%AF%B9%E7%85%A7",children:"cli\u5e38\u89c1\u547d\u4ee4"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/deploy/ops/admin-usage-tips",children:"\u8fd0\u7ef4\u6280\u5de7"})}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},5409:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var c=n(48318);const l={},r=c.createContext(l);function i(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);