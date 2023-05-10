"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[837],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(45675),a=(n(49231),n(54852));const i={sidebar_position:3},o="RStudio",l={unversionedId:"deploy/config/portal/apps/apps/rstudio",id:"deploy/config/portal/apps/apps/rstudio",title:"RStudio",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/docs/deploy/config/portal/apps/apps/rstudio.md",sourceDirName:"deploy/config/portal/apps/apps",slug:"/deploy/config/portal/apps/apps/rstudio",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/config/portal/apps/apps/rstudio",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/rstudio.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"deploy",previous:{title:"Jupyter",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/config/portal/apps/apps/jupyter"},next:{title:"IGV",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/config/portal/apps/apps/igv"}},s={},p=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001\u8f6f\u4ef6\u4ecb\u7ecd",id:"1\u8f6f\u4ef6\u4ecb\u7ecd",level:3},{value:"2\u3001Singularity\u5b89\u88c5",id:"2singularity\u5b89\u88c5",level:3},{value:"3\u3001R\u5b89\u88c5",id:"3r\u5b89\u88c5",level:3},{value:"4\u3001\u6784\u5efaRStudio Server\u955c\u50cf",id:"4\u6784\u5efarstudio-server\u955c\u50cf",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rstudio"},"RStudio"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709Singularity\u3001R\u548cRStudio Server\u3002"),(0,a.kt)("h3",{id:"1\u8f6f\u4ef6\u4ecb\u7ecd"},"1\u3001\u8f6f\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,"RStudio Server\u662fRStudio\u516c\u53f8\u63d0\u4f9b\u7684\u4e00\u6b3e\u57fa\u4e8eWeb\u7684R\u5f00\u53d1\u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7Web\u6d4f\u89c8\u5668\u8fdc\u7a0b\u8bbf\u95ee\uff0c\u5b9e\u73b0\u5bf9R\u7f16\u7a0b\u8bed\u8a00\u7684\u5f00\u53d1\u3001\u8c03\u8bd5\u548c\u7ba1\u7406\u3002RStudio Server\u652f\u6301\u591a\u7528\u6237\u5e76\u53d1\u8bbf\u95ee\uff0c\u5177\u6709\u826f\u597d\u7684\u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u63a7\u5236\uff0c\u652f\u6301SSH\u548cHTTPS\u7b49\u5b89\u5168\u534f\u8bae\uff0c\u662f\u4f01\u4e1a\u7ea7\u548c\u56e2\u961f\u534f\u4f5c\u5f00\u53d1\u7684\u7406\u60f3\u9009\u62e9\u3002"),(0,a.kt)("h3",{id:"2singularity\u5b89\u88c5"},"2\u3001Singularity\u5b89\u88c5"),(0,a.kt)("p",null,"Singularity\u7528\u4e8e\u6784\u5efa\u548c\u8fd0\u884cRStudio Server\u5bb9\u5668\u955c\u50cf\uff0c\u5efa\u8bae\u5b89\u88c5\u5728\u5171\u4eab\u5b58\u50a8\u4e0a\uff0c\u96c6\u7fa4\u5404\u8282\u70b9\u53ea\u9700\u8981\u6302\u8f7d\u4e0a\u5171\u4eab\u5b58\u50a8\uff0c\u5e76\u914d\u7f6e\u597d\u73af\u5883\u53d8\u91cf\u540e\u4fbf\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5Singularity\u4f9d\u8d56\u5305\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y gcc libuuid-devel squashfs-tools openssl-devel make\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Singularity\u4f7f\u7528Go\u8bed\u8a00\u5f00\u53d1\uff0c\u9700\u8981\u5148\u5b89\u88c5Go\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export VERSION=1.20.3 OS=linux ARCH=amd64\nwget https://dl.google.com/go/go$VERSION.$OS-$ARCH.tar.gz\nmkdir -p /data/software/go\ntar -C /data/software/go -xzvf go$VERSION.$OS-$ARCH.tar.gz\nmv /data/software/go/go /data/software/go/$VERSION\nrm -f go$VERSION.$OS-$ARCH.tar.gz\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06Go\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/go\ncat >> ${MODULEPATH}/go/1.20.3 << EOF\n#%Module1.0#####################################################################\n##\n## go@1.20.3  modulefile\n##\nproc ModulesHelp { } {\n\nputs stderr "    This module defines environment variables, aliases and add PATH, LD_LIBRARY_PATH for go"\nputs stderr "    Version 1.20.3"\n}\n\nmodule-whatis   "go@1.20.3"\nprepend-path    PATH                    "/data/software/go/1.20.3/bin"\nprepend-path    LIBRARY_PATH            "/data/software/go/1.20.3/lib"\nprepend-path    LD_LIBRARY_PATH         "/data/software/go/1.20.3/lib"\nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5Singularity\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export VERSION=3.9.2\nwget https://github.com/sylabs/singularity/releases/download/v${VERSION}/singularity-ce-${VERSION}.tar.gz\ntar -xzf singularity-ce-${VERSION}.tar.gz\ncd singularity-ce-${VERSION}\n./mconfig --prefix=/data/software/singularity/${VERSION}\ncd builddir/\nmake -j && make install\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06Singularity\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/singularity\ncat >> ${MODULEPATH}/singularity/3.9.2 << EOF\n#%Module1.0#####################################################################\n##\n## singularity@3.9.2  modulefile\n##\nproc ModulesHelp { } {\n\nputs stderr "    This module defines environment variables, aliases and add PATH, LD_LIBRARY_PATH for singularity"\nputs stderr "    Version 3.9.2"\n}\n\nmodule-whatis   "singularity@3.9.2"\nprepend-path    PATH                    "/data/software/singularity/3.9.2/bin"\nEOF\n')))),(0,a.kt)("h3",{id:"3r\u5b89\u88c5"},"3\u3001R\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5R\u7684\u4f9d\u8d56\u5305:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install gcc-gfortran gcc-c++ glibc-headers java-1.8.0-openjdk java-1.8.0-openjdk-devel libX11-devel libXt-devel xz-devel curl-devel bzip2-devel readline-devel zlib-devel openssl-devel pcre2\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5R\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7dR\u7684\u6e90\u4ee3\u7801\u5e76\u7f16\u8bd1\u5b89\u88c5\ncurl -LJO https://cran.rstudio.com/src/base/R-4/R-4.2.3.tar.gz\ntar zxf R-4.2.3.tar.gz\n\n# \u5fc5\u987b\u6709--enable-R-shlib\u8fd9\u4e2a\u9009\u9879(lib64/R/lib/libR.so)\n./configure --prefix=/data/software/R/R-4.2.3 --enable-R-shlib\nmake -j\nmake install\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06R\u6dfb\u52a0\u5230module\u5de5\u5177\u4e2d\u7edf\u4e00\u7ba1\u7406\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/R\ncat >> ${MODULEPATH}/R/3-2023.03 << EOF\n#%Module1.0#####################################################################\n##\n## R@4.2.3  modulefile\n##\nproc ModulesHelp { } {\n    puts stderr "\\tThis module defines environment variables, aliases and add PATH for R"\n    puts stderr "\\tVersion 4.2.3"\n}\n\nmodule-whatis   "R@4.2.3"\nprepend-path    PATH                    "/data/software/R/R-4.2.3/bin"\nEOF\n')))),(0,a.kt)("h3",{id:"4\u6784\u5efarstudio-server\u955c\u50cf"},"4\u3001\u6784\u5efaRStudio Server\u955c\u50cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7dRStudio Server\u6e90\u7801\u5305\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7d\u6e90\u7801\u5305\nwget https://github.com/rstudio/rstudio/archive/refs/tags/v2023.03.0+386.tar.gz\n# \u89e3\u538b\u6e90\u7801\u5305\ntar -zxvf v2023.03.0+386.tar.gz\ncd rstudio-2023.03.0-386\n\n# \u8df3\u8fc7\u767b\u5f55\u65f6\u7684csrf-token\u9a8c\u8bc1\uff0c\u9ad8\u7248\u672c\u7684RStudio Server\u96c6\u6210\u5230scow\u9700\u8981\u8df3\u8fc7\u9a8c\u8bc1\nsed -i '134s/^/\\/\\//' src/cpp/server/auth/ServerAuthCommon.cpp\n\n# \u5728\u5f53\u524d\u8def\u5f84\u521d\u59cb\u5316git\u4ed3\u5e93\ngit init\n# \u589e\u52a0git\u7f13\u5b58\u914d\u7f6e\ngit config --global http.postBuffer 5242880000\n# \u56e0\u4e3a\u662f\u65b0\u521d\u59cb\u5316\u7684git\u4ed3\u5e93\uff0c\u6240\u4ee5\u6ca1\u6709\u63d0\u4ea4\u8bb0\u5f55\uff0c\u90a3\u4e48\u6ca1\u6709HEAD\u5f15\u7528\u3002\u901a\u8fc7\u6267\u884c\u7b2c\u4e00\u6b21\u63d0\u4ea4\u6765\u521b\u5efa\u4e00\u4e2aHEAD\u5f15\u7528\ngit config --global user.email ${USER_EMAIL_ADDRESS}\ngit commit --allow-empty -n -m \"Initial commit.\"\n\n# \u4ee5\u4e0b\u811a\u672c\u9996\u5148\u6784\u5efa\u7f16\u8bd1rstudio server\u6240\u9700\u73af\u5883\u7684docker\u5bb9\u5668\uff0c\u7136\u540e\u5728\u5bb9\u5668\u5185\u8fdb\u884crstudio server\u7f16\u8bd1\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u5728\u6e90\u7801\u5305\u8def\u5f84\u7684package\u76ee\u5f55\u4e0b\u751f\u6210rstudio server\u7684rpm\u5305\n# \u6267\u884c\u8fc7\u7a0b\u5982\u679c\u9047\u5230git\u514b\u9686\u5305\u514b\u9686\u4e0d\u4e0b\u6765\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u7684shell\u73af\u5883\u6dfb\u52a0\u4ee3\u7406\u6216\u8005\u4fee\u6539\u4ee3\u7801\u4e2d\u7684\u514b\u9686\u5730\u5740\nsh docker/docker-compile.sh centos7 server 2023.03.0-386\n# \u53ef\u4ee5\u770b\u5230\u76ee\u5f55\u4e0b\u6709rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm\u5305\nls package\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728rstudio-2023.03.0-386\u76ee\u5f55\u4e0b\u7f16\u5199Dockerfile\u6587\u4ef6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"FROM centos:7\n\nCOPY package/rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm /\n\nRUN yum -y update && \\\n    yum -y install epel-release && \\\n    yum -y install which gcc-gfortran gcc-c++ glibc-headers java-1.8.0-openjdk java-1.8.0-openjdk-devel libX11-devel libXt-devel xz-devel curl-devel bzip2-devel readline-devel zlib-devel openssl-devel pcre2 initscripts postgresql-libs psmisc && \\\n    cd / && \\\n    rpm2cpio rstudio-server-rhel-2023.03.0-386-x86_64-relwithdebinfo.rpm | cpio -div && \\\n    mkdir data && \\\n    yum clean all\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728rstudio-2023.03.0-386\u76ee\u5f55\u4e0b\u6784\u5efaRStudio Server\u7684docker\u955c\u50cf\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t rstudio:2023.03.0-386 .\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6784\u5efaRStudio Server\u7684Singularity\u955c\u50cf\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"singularity build rstudio.sif docker-daemon://rstudio:2023.03.0-386\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06Singularity\u955c\u50cf\u62f7\u8d1d\u5230\u5171\u4eab\u5b58\u50a8\uff0c\u4ee5\u4fbf\u5728\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee\u5e76\u8fd0\u884c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp rstudio.sif /data/software/rstudio-server/\n")))),(0,a.kt)("p",null,"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528RStudio Server\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"rstudio.yml"),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/apps/rstudio.yml"',title:'"config/apps/rstudio.yml"'},'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: rstudio\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: RStudio\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n    export SLURM_COMPUTE_NODE_IP=$(get_ip)\n    export APPURI="${PROXY_BASE_PATH}/${SLURM_COMPUTE_NODE_IP}/${PORT}/"\n    export USER=${USER}\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    setup_env () {\n        # Additional environment which could be moved into a module\n        export SINGULARITY_VERSION="singularity/3.9.2"\n        module switch ${SINGULARITY_VERSION}\n\n        export RSTUDIO_PASSWORD=${PASSWORD}\n        # Change these to suit\n        export RSTUDIO_SERVER_IMAGE="/data/software/rstudio-server/rstudio.sif"\n\n        # \u5bb9\u5668\u4e2drstudio\u7684\u8def\u5f84\n        export RSTUDIO_HOME=/usr/lib/rstudio-server\n        export RSTUDIO_BIN_PATH=${RSTUDIO_HOME}/bin\n        export RSTUDIO_RSERVER=${RSTUDIO_BIN_PATH}/rserver\n        export RSTUDIO_RSESSION=${RSTUDIO_BIN_PATH}/rsession\n\n        export RSTUDIO_AUTH="/data/software/rstudio-server/auth"\n        export RSESSION_WRAPPER_FILE="${PWD}/rsession.sh"\n        export DB_CONF_FILE="${PWD}/database.conf"\n        export WHICHR=/data/software/R/${r_version}/bin/R\n    }\n    setup_env\n    \n    (\n    umask 077\n    sed \'s/^ \\{2\\}//\' > "${RSESSION_WRAPPER_FILE}" << EOL\n    #!/usr/bin/env bash\n    # Log all output from this script\n    export RSESSION_LOG_FILE="${PWD}/rsession.log"\n    exec &>>"\\${RSESSION_LOG_FILE}"\n    # Launch the original command\n    echo "Launching rsession..."\n    set -x\n    exec ${RSTUDIO_RSESSION} --r-libs-user "${R_LIBS_USER}" "\\${@}"\n    EOL\n    )\n\n    chmod 700 "${RSESSION_WRAPPER_FILE}"\n    cd "${HOME}"\n    export TMPDIR="$(mktemp -d)"\n    mkdir -p "$TMPDIR/rstudio-server"\n    python -c \'from uuid import uuid4; print(uuid4())\' > "$TMPDIR/rstudio-server/secure-cookie-key"\n    chmod 0600 "$TMPDIR/rstudio-server/secure-cookie-key"\n\n    (\n    umask 177\n    cat > "${DB_CONF_FILE}" << EOL\n    provider=sqlite\n    directory=${HOME}/.local/share/rstudio/database\n    EOL\n    )\n    \n    set -x\n    # Launch the RStudio Server\n    echo "Starting up rserver..."\n    singularity run -B "/tmp:/tmp","/data:/data" "$RSTUDIO_SERVER_IMAGE" ${RSTUDIO_RSERVER} \\\n      --www-port "${PORT}" \\\n      --auth-none 1 \\\n      --auth-pam-helper-path "${RSTUDIO_AUTH}" \\\n      --auth-encrypt-password 0 \\\n      --rsession-path "${RSESSION_WRAPPER_FILE}" \\\n      --server-data-dir "${TMPDIR}" \\\n      --server-user ${USER} \\\n      --secure-cookie-key-file "${TMPDIR}/rstudio-server/secure-cookie-key" \\\n      --database-config-file "${DB_CONF_FILE}" \\\n      --rsession-which-r ${WHICHR}\n      \n      echo \'Singularity as exited...\'\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /auth-do-sign-in\n    formData:\n      password: "{{ PASSWORD }}"\n      username: "{{ USER }}"\n      appUri: "{{ APPURI }}"\n      \n# \u914d\u7f6eHTML\u8868\u5355   \nattributes:\n  - type: select\n    name: r_version\n    label: \u8bf7\u9009\u62e9R\u7248\u672c\n    select:\n      - value: R-3.6.0\n        label: 3.6.0\n      - value: R-4.2.3\n        label: 4.2.3\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n')),(0,a.kt)("p",null,"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0WEB\u6d4f\u89c8\u5668\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8eRStudio\uff0cexport\u4ee5\u4e0b\u53d8\u91cf\u7684\u542b\u4e49\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SLURM_COMPUTE_NODE_IP"),": \u8ba1\u7b97\u8282\u70b9\u7684IP\u5730\u5740")))}c.isMDXComponent=!0}}]);