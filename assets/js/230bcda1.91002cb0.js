"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5345],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||p;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(95907),o=(n(49231),n(54852));const p={sidebar_position:2,title:"Jupyter"},a="Jupyter",i={unversionedId:"deploy/config/portal/apps/apps/jupyter",id:"deploy/config/portal/apps/apps/jupyter",title:"Jupyter",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/docs/deploy/config/portal/apps/apps/jupyter.md",sourceDirName:"deploy/config/portal/apps/apps",slug:"/deploy/config/portal/apps/apps/jupyter",permalink:"/SCOW/docs/deploy/config/portal/apps/apps/jupyter",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/jupyter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Jupyter"},sidebar:"deploy",previous:{title:"VSCode",permalink:"/SCOW/docs/deploy/config/portal/apps/apps/vscode"},next:{title:"\u914d\u7f6eHTML\u8868\u5355",permalink:"/SCOW/docs/deploy/config/portal/apps/configure-attributes"}},l={},c=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}],s={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jupyter"},"Jupyter"),(0,o.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709Jupyter Notebook\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528Jupyter\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter/config.yml"),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/apps/jupyter/config.yml"',title:'"config/apps/jupyter/config.yml"'},'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: jupyter\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: jupyter\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: absolute\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n    export SALT=123\n    export PASSWORD_SHA1="$(echo -n "${PASSWORD}${SALT}" | openssl dgst -sha1 | awk \'{print $NF}\')"\n    export CONFIG_FILE="${PWD}/config.py"\n    export SLURM_COMPUTE_NODE_IP=$(get_ip)\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    (\n    umask 077\n    cat > "${CONFIG_FILE}" << EOL\n    c.NotebookApp.ip = \'0.0.0.0\'\n    c.NotebookApp.port = ${PORT}\n    c.NotebookApp.port_retries = 0\n    c.NotebookApp.password = u\'sha1:${SALT}:${PASSWORD_SHA1}\'\n    c.NotebookApp.open_browser = False\n    c.NotebookApp.base_url = "${PROXY_BASE_PATH}/${SLURM_COMPUTE_NODE_IP}/${PORT}/"\n    c.NotebookApp.allow_origin = \'*\'\n    c.NotebookApp.disable_check_xsrf = True\n    EOL\n    )\n    jupyter notebook --config=${CONFIG_FILE}\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /login\n    formData:\n      password: "{{ PASSWORD }}"\n')),(0,o.kt)("p",null,"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8eJupyter\uff0cexport\u4ee5\u4e0b\u53d8\u91cf\u7684\u542b\u4e49\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SLURM_COMPUTE_NODE_IP"),": \u8ba1\u7b97\u8282\u70b9\u7684IP\u5730\u5740"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONFIG_FILE"),": \u6307\u5b9aJupyter\u7684\u914d\u7f6e\u6587\u4ef6")))}y.isMDXComponent=!0}}]);