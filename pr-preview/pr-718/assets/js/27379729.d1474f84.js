"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6775],{54852:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(95907),a=(n(49231),n(54852));const l={sidebar_label:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",sidebar_position:4},o=void 0,p={unversionedId:"hpccluster/nfs",id:"hpccluster/nfs",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",description:"\u672c\u65b9\u6848\u4ee5NFS\u4f5c\u4e3a\u5171\u4eab\u5b58\u50a8\u3002",source:"@site/docs/hpccluster/nfs.md",sourceDirName:"hpccluster",slug:"/hpccluster/nfs",permalink:"/SCOW/pr-preview/pr-718/docs/hpccluster/nfs",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/hpccluster/nfs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",sidebar_position:4},sidebar:"hpccluster",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-718/docs/basic-config"},next:{title:"slurm.conf \u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-718/docs/hpccluster/config/slurm.conf"}},s={},c=[{value:"1. \u5b89\u88c5NFS\u670d\u52a1\u7aef",id:"1-\u5b89\u88c5nfs\u670d\u52a1\u7aef",level:2},{value:"2. \u5ba2\u6237\u7aef\u642d\u5efa",id:"2-\u5ba2\u6237\u7aef\u642d\u5efa",level:2},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:2}],i={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u65b9\u6848\u4ee5NFS\u4f5c\u4e3a\u5171\u4eab\u5b58\u50a8\u3002"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5nfs\u670d\u52a1\u7aef"},"1. \u5b89\u88c5NFS\u670d\u52a1\u7aef"),(0,a.kt)("p",null,"\u9009\u62e9\u4e00\u53f0\u673a\u5668\u4f5c\u4e3aNFS\u7684\u670d\u52a1\u7aef\uff0c\u4f8b\u5982\u9009\u62e9\u670d\u52a1\u8282\u70b9",(0,a.kt)("inlineCode",{parentName:"p"},"manage01"),"\uff0cIP\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.29.106"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5NFS\u3001RPC\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"yum install -y nfs-utils rpcbind\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5171\u4eab\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# \u6b64\u5904\u9700\u8981\u6267\u884c\u6743\u9650\nmkdir /data\nchmod 755 /data\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u82e5\u9700\u5355\u72ec\u6302\u8f7d\u4e00\u4e2a\u78c1\u76d8\u4f5c\u4e3a\u5171\u4eab\u76ee\u5f55\uff0c\u53ef\u53c2\u8003\u8be5\u94fe\u63a5",(0,a.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-718/docs/hpccluster/mount-disk"},"\u6570\u636e\u76d8\u6302\u8f7d")," ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"strong"},"vim /etc/exports"),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"/data *(rw,sync,insecure,no_subtree_check,no_root_squash)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u542f\u52a8RPC\uff0cNFS\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"systemctl start rpcbind \nsystemctl start nfs-server \n\nsystemctl enable rpcbind \nsystemctl enable nfs-server\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b\u670d\u52a1\u7aef\u662f\u5426\u6b63\u5e38\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"showmount -e localhost\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\nExport list for localhost:\n/data *\n")),(0,a.kt)("h2",{id:"2-\u5ba2\u6237\u7aef\u642d\u5efa"},"2. \u5ba2\u6237\u7aef\u642d\u5efa"),(0,a.kt)("p",null,"\u9700\u8981\u4f7f\u7528\u5171\u4eab\u5b58\u50a8\u7684\u8282\u70b9\u5305\u62ec\u6240\u6709\u7684\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u64cd\u4f5c\u5728\u6240\u6709\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9\u4e0a\u6267\u884c")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5NFS\u5ba2\u6237\u7aefnfs-utils")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"yum install nfs-utils -y\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b\u670d\u52a1\u7aef\u53ef\u5171\u4eab\u7684\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# 192.168.29.106\u4e3aNFS\u670d\u52a1\u7aefIP\nshowmount -e 192.168.29.106\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\nExport list for 192.168.29.106:\n/data *\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u670d\u52a1\u7aef\u5171\u4eab\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# \u521b\u5efa\u76ee\u5f55\nmkdir /data\n#\u5c06\u5171\u4eab\u5b58\u50a8/data \u6302\u8f7d\u81f3192.168.29.106\u670d\u52a1\u5668\u7684/data\u76ee\u5f55\u4e0b\nmount 192.168.29.106:/data /data -o proto=tcp -o nolock\n\n# \u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\nvim /etc/fstab\n# \u5728\u6587\u6863\u672b\u5c3e\u6dfb\u52a0\n192.168.29.106:/data /data nfs rw,auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b\u6302\u8f7d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"df -h |grep data\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\n192.168.29.106:/data     79G   56M   75G   1% /data\n")),(0,a.kt)("h2",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},'# \u4f8b\u5982\u5728NFS\u670d\u52a1\u7aef\u8282\u70b9(\u5176\u4ed6\u8282\u70b9\u4e5f\u53ef\u4ee5)\u5199\u5165\u4e00\u4e2a\u6d4b\u8bd5\u6587\u4ef6\necho "hello nfs server" > /data/test.txt\n\ncat /data/test.txt\n# \u5728\u670d\u52a1\u7aef\u8282\u70b9\u6216\u5ba2\u6237\u7aef\u8282\u70b9\u5747\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u5185\u5bb9\nhello nfs server\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PowerShell"},"# \u521b\u5efahome\u76ee\u5f55\u4f5c\u4e3a\u7528\u6237\u5bb6\u76ee\u5f55\u7684\u96c6\u5408\uff0c\u53ef\u81ea\u5b9a\u4e49\nmkdir /data/home\n\n# \u521b\u5efasoftware\u76ee\u5f55\u4f5c\u4e3a\u4ea4\u4e92\u5f0f\u5e94\u7528\u7684\u5b89\u88c5\u76ee\u5f55\nmkdir /data/software\n")))}m.isMDXComponent=!0}}]);