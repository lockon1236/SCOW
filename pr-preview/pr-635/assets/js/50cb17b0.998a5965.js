"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[928],{54852:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(49231);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=s,g=d["".concat(i,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(45675),s=(t(49231),t(54852));const a={sidebar_position:4,title:"vagrant\u955c\u50cf\u5236\u4f5c"},o=void 0,l={unversionedId:"deploy/get-started/vagrant/images",id:"deploy/get-started/vagrant/images",title:"vagrant\u955c\u50cf\u5236\u4f5c",description:"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",source:"@site/docs/deploy/get-started/vagrant/images.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/images",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/get-started/vagrant/images",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/images.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"vagrant\u955c\u50cf\u5236\u4f5c"},sidebar:"deploy",previous:{title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/get-started/vagrant/customization"},next:{title:"FAQ",permalink:"/SCOW/pr-preview/pr-635/docs/deploy/get-started/vagrant/faq"}},i={},c=[{value:"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"1-logincompute\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2},{value:"2. slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"2-slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2},{value:"3. SCOW\u8282\u70b9\u955c\u50cf\u5236\u4f5c",id:"3-scow\u8282\u70b9\u955c\u50cf\u5236\u4f5c",level:2}],m={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-logincompute\u8282\u70b9\u955c\u50cf\u5236\u4f5c"},"1. login/compute\u8282\u70b9\u955c\u50cf\u5236\u4f5c"),(0,s.kt)("p",null,"\u57fa\u4e8evagrant\u5b98\u65b9centos/7\u955c\u50cf(7.8.2003)\uff0c\u6267\u884c\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Bash"},"# 1. \u5347\u7ea7\u5230centos7.9.2009\nyum update -y \n\n# 2. \u5173\u95edfirewalld\u3001dnsmasq\u3001NetworkManager\nsystemctl disable --now firewalld \nsystemctl disable --now dnsmasq\nsystemctl disable --now NetworkManager\n\n# 3. \u5173\u95edselinux\nsetenforce 0\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config\ngetenforce\n\n# 4. \u5173\u95edswap\nswapoff -a && sysctl -w vm.swappiness=0enforcing\nsed -ri '/^[^#]*swap/s@^@#@' /etc/fstab\n\n\n# 5. \u65f6\u95f4\u540c\u6b65\nrpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm\nyum install ntpdate vim -y\n\n# \u540c\u6b65\u65f6\u95f4\u3002time2.aliyun.com\u5916\u7f51\uff0cvineyard.pku.edu.cn\u5185\u7f51\n# \u65f6\u95f4\u540c\u6b65\u914d\u7f6e\u5982\u4e0b\uff1a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\necho 'Asia/Shanghai' >/etc/timezone\nntpdate time2.aliyun.com\n\ncat >>/var/spool/cron/root <<EOF\n*/5 * * * * /usr/sbin/ntpdate time2.aliyun.com\nEOF\n\n# 6. \u5b89\u88c5epel-release\nyum install epel-release -y\n\n# 7. \u5b89\u88c5emacs wget\nyum install emacs wget -y\n\n# 8. \u5b89\u88c5turbovnc\nwget https://turbovnc.org/pmwiki/uploads/Downloads/TurboVNC.repo --no-check-certificate\nmv TurboVNC.repo /etc/yum.repos.d\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nyum install turbovnc -y\n\n# 9. \u5b89\u88c5\u684c\u9762\nyum groupinstall \"Xfce\" -y\nyum groupinstall \"KDE Plasma Workspaces\" -y\nyum groupinstall \"MATE Desktop\" -y\nyum install cinnamon -y\n\n# 10. \u5b89\u88c5rng-tools\nyum install -y rng-tools\nrngd -r /dev/urandom\n\n# 11. \u5b89\u88c5munge\nyum install munge munge-libs munge-devel -y\n\n# 12. \u5b89\u88c5slurm\nyum install gcc gcc-c++ readline-devel perl-ls-MakeMaker pam-devel rpm-build mysql-devel python3 -y\n# \u6b64\u5904\u662f\u62f7\u8d1d\u7684slurm\u7684\u7f16\u8bd1\u6587\u4ef6\ncp -r /vagrant/slurm/rpmbuild/ /root/ \ncd /root/rpmbuild/RPMS/x86_64/ && yum localinstall slurm-* -y\n\n# 13. \u652f\u6301\u5bc6\u7801\u767b\u5f55\u767b\u5f55\nsed -i 's#PasswordAuthentication no#PasswordAuthentication yes#g' /etc/ssh/sshd_config\nsystemctl restart sshd\n")),(0,s.kt)("p",null,"\u6b64\u5904slurm\u7684\u7f16\u8bd1\u8bf7\u53c2\u89c1\u6587\u6863",(0,s.kt)("a",{parentName:"p",href:"https://pkuhpc.github.io/SCOW/docs/slurm"},"slurm\u96c6\u7fa4\u90e8\u7f72")," \u4e2dslurm\u7f16\u8bd1\u76f8\u5173\u5185\u5bb9"),(0,s.kt)("h2",{id:"2-slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c"},"2. slurm\u8282\u70b9\u955c\u50cf\u5236\u4f5c"),(0,s.kt)("p",null,"\u5728login/compute\u8282\u70b9\u955c\u50cf\u7684\u57fa\u7840\u4e0a\uff0c\u6267\u884c\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Bash"},"# 1.\u5b89\u88c5mariadb\nyum -y install mariadb-server\nsystemctl start mariadb\nsystemctl enable mariadb\n\n# \u521d\u59cb\u5316\nmysql << EOF\n   set password=password('${db_passwd}');\n   create database slurm_acct_db;\n   create user slurm;\n   grant all on slurm_acct_db.* TO 'slurm'@'localhost' identified by '123456' with grant option;\n   grant select on slurm_acct_db.* to 'slurm'@'%' identified by '123456';\n   flush privileges;\nEOF\n\n# 2. \u62f7\u8d1dvscode\u6587\u4ef6\ncp code-server-4.7.1-linux-amd64.tar.gz /root/\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u6b64\u5904code-server\u7684\u4e0b\u8f7d\u5730\u5740\u4e3a\uff1a",(0,s.kt)("a",{parentName:"li",href:"https://github.com/coder/code-server/releases/download/v4.7.1/code-server-4.7.1-linux-amd64.tar.gz"},"https://github.com/coder/code-server/releases/download/v4.7.1/code-server-4.7.1-linux-amd64.tar.gz")),(0,s.kt)("li",{parentName:"ol"},"\u4e5f\u53ef\u9009\u62e9\u5176\u4ed6\u7248\u672c\u4e0b\u8f7d\uff1a",(0,s.kt)("a",{parentName:"li",href:"https://github.com/coder/code-server/releases"},"https://github.com/coder/code-server/releases"))),(0,s.kt)("h2",{id:"3-scow\u8282\u70b9\u955c\u50cf\u5236\u4f5c"},"3. SCOW\u8282\u70b9\u955c\u50cf\u5236\u4f5c"),(0,s.kt)("p",null,"\u57fa\u4e8evagrant\u5b98\u65b9centos/7\u955c\u50cf(7.8.2003)\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Bash"},"# 1. \u5347\u7ea7\u5230centos7.9.2009\nyum update -y \n\n# 2. \u5173\u95edfirewalld\u3001dnsmasq\u3001NetworkManager\nsystemctl disable --now firewalld \nsystemctl disable --now dnsmasq\nsystemctl disable --now NetworkManager\n\n# 3. \u5173\u95edselinux\nsetenforce 0\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux\nsed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config\ngetenforce\n\n# 4. \u5173\u95edswap\nswapoff -a && sysctl -w vm.swappiness=0enforcing\nsed -ri '/^[^#]*swap/s@^@#@' /etc/fstab\n\n\n# 5. \u65f6\u95f4\u540c\u6b65\nrpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm\nyum install ntpdate vim -y\n\n# \u540c\u6b65\u65f6\u95f4\u3002time2.aliyun.com\u5916\u7f51\uff0cvineyard.pku.edu.cn\u5185\u7f51\n# \u65f6\u95f4\u540c\u6b65\u914d\u7f6e\u5982\u4e0b\uff1a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\necho 'Asia/Shanghai' >/etc/timezone\nntpdate time2.aliyun.com\n\ncat >>/var/spool/cron/root <<EOF\n*/5 * * * * /usr/sbin/ntpdate time2.aliyun.com\nEOF\n\n# 6. \u5b89\u88c5docker\nyum install -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2\n  \n# \u8bbe\u7f6e\u7a33\u5b9a\u5b58\u50a8\u5e93\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo \n    \n# \u5b89\u88c5Docker CE\nyum install docker-ce -y\n\n# \u542f\u52a8Docker CE\u5e76\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\nsystemctl start docker\nsystemctl enable docker\n\n\n# 7. \u5b89\u88c5docker-compose\ncurl -L \"https://github.com/docker/compose/releases/download/v2.7.0/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose\n# \u8d4b\u6743\nchmod +x /usr/local/bin/docker-compose\n\n# \u9a8c\u8bc1\u5b89\u88c5\u6210\u529f\ndocker-compose --version\n\n# 8. \u521b\u5efascow\u76ee\u5f55\nmkdir /root/scow/\n\nyum install -y python3\npip3 install -r /root/scow/export-jobs/requirements.txt\n\n\n# 9. \u652f\u6301\u5bc6\u7801\u767b\u5f55\u767b\u5f55\nsed -i 's#PasswordAuthentication no#PasswordAuthentication yes#g' /etc/ssh/sshd_config\nsystemctl restart sshd\n")))}p.isMDXComponent=!0}}]);