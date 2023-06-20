"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2810],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,p(p({ref:t},c),{},{components:n})):a.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(95907),o=(n(49231),n(54852));const r={sidebar_position:4,title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"},p="\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e",i={unversionedId:"deploy/config/auth/config",id:"deploy/config/auth/config",title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e",description:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",source:"@site/docs/deploy/config/auth/config.md",sourceDirName:"deploy/config/auth",slug:"/deploy/config/auth/config",permalink:"/SCOW/pr-preview/pr-699/docs/deploy/config/auth/config",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/auth/config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"},sidebar:"deploy",previous:{title:"LDAP",permalink:"/SCOW/pr-preview/pr-699/docs/deploy/config/auth/ldap"},next:{title:"\u95e8\u6237\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-699/docs/category/\u95e8\u6237\u7cfb\u7edf"}},l={},s=[{value:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",id:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",level:2},{value:"\u9a8c\u8bc1\u7801\u529f\u80fd",id:"\u9a8c\u8bc1\u7801\u529f\u80fd",level:2},{value:"\u6a21\u4eff\u7528\u6237",id:"\u6a21\u4eff\u7528\u6237",level:2},{value:"OTP\u529f\u80fd",id:"otp\u529f\u80fd",level:2},{value:"\u4e00\u3001\u5c06OTP\u5bc6\u94a5\u4fdd\u5b58\u5728LDAP\u4e2d(\u5373otp.type\u4e3aldap):",id:"\u4e00\u5c06otp\u5bc6\u94a5\u4fdd\u5b58\u5728ldap\u4e2d\u5373otptype\u4e3aldap",level:3},{value:"\u4e8c\u3001\u7531\u60a8\u81ea\u5df1\u7ba1\u7406OTP\u5bc6\u94a5(otp.type\u4e3aremote):",id:"\u4e8c\u7531\u60a8\u81ea\u5df1\u7ba1\u7406otp\u5bc6\u94a5otptype\u4e3aremote",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"},"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"),(0,o.kt)("h2",{id:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d"},"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d"),(0,o.kt)("p",null,"\u5f53\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u5c06\u4f1a\u56de\u8c03\u5230\u767b\u5f55\u65f6\u4f20\u5165\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"callbackUrl"),"\u53c2\u6570\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5b89\u5168\u6027\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u9ed8\u8ba4\u53ea\u5141\u8bb8\u56de\u8c03\u5230\u548c\u8ba4\u8bc1\u7cfb\u7edf\u76f8\u540c\u7684\u4e3b\u673a\u540d\u4e0b\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"auth.yml"),"\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"allowedCallbackHostnames"),"\u914d\u7f6e\u9879\u6765\u914d\u7f6e\u5141\u8bb8\u56de\u8c03\u7684\u4e3b\u673a\u540d\u3002\u6ce8\u610f\uff0c\u4e3b\u673a\u540d(hostname)\u4e0d\u5305\u62ec\u7aef\u53e3\u53f7\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},"allowedCallbackHostnames\uff1a\n  - localhost\n  - another.com\n")),(0,o.kt)("h2",{id:"\u9a8c\u8bc1\u7801\u529f\u80fd"},"\u9a8c\u8bc1\u7801\u529f\u80fd"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"auth.yaml"),"\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8e\u767b\u5f55\u9a8c\u8bc1\u7801\u7684\u529f\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},"# \u9ed8\u8ba4\u4e0d\u542f\u7528\u767b\u5f55\u9a8c\u8bc1\u7801\u529f\u80fd\n# captcha:\n  # enabled\u4e3atrue\u5f00\u542f\u767b\u5f55\u9a8c\u8bc1\u7801\u529f\u80fd\n  # enabled: false\n")),(0,o.kt)("p",null,"\u542f\u7528\u767b\u5f55\u9a8c\u8bc1\u7801\u65f6UI\u754c\u9762\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u9a8c\u8bc1\u7801\u767b\u5f55UI",src:n(17354).Z,width:"973",height:"589"})),(0,o.kt)("h2",{id:"\u6a21\u4eff\u7528\u6237"},"\u6a21\u4eff\u7528\u6237"),(0,o.kt)("p",null,"\u5982\u679c\u767b\u5f55\u7528\u6237\u7684ID\u4e3a\u67d0\u4e2akey\uff0c\u90a3\u4e48\u5b9e\u9645\u5c06\u4f1a\u4ee5\u5176\u5bf9\u5e94\u7684value\u7684\u7528\u6237\u767b\u5f55\u3002\u4fee\u6539\u6b64\u914d\u7f6e\u65e0\u9700\u91cd\u542f\u8ba4\u8bc1\u7cfb\u7edf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},"mockUsers:\n  # \u5f53\u767b\u5f55\u7528\u6237\u7684ID\u4e3afromUser1\uff0c\u5b9e\u9645\u4e0a\u4ee5toUser1\u767b\u5f55\n  fromUser1: toUser1\n  fromUser2: toUser2\n")),(0,o.kt)("h2",{id:"otp\u529f\u80fd"},"OTP\u529f\u80fd"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"auth.yaml"),"\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8eotp\u9a8c\u8bc1\u7801\u7684\u529f\u80fd, ldap\u8ba4\u8bc1\u65b9\u5f0f\u652f\u6301\u652f\u6301\u7ed1\u5b9aotp\u548c\u9a8c\u8bc1\uff0c\u6709\u6548\u9a8c\u8bc1\u7801\u4e3a\u5f53\u524d\u9a8c\u8bc1\u7801\u548c\u4e0a\u4e00\u4e2a\u9a8c\u8bc1\u7801\u3002ssh\u8ba4\u8bc1\u65b9\u5f0f\u4ec5\u652f\u6301\u8fdc\u7a0b\u9a8c\u8bc1\u3002"),(0,o.kt)("h3",{id:"\u4e00\u5c06otp\u5bc6\u94a5\u4fdd\u5b58\u5728ldap\u4e2d\u5373otptype\u4e3aldap"},"\u4e00\u3001\u5c06OTP\u5bc6\u94a5\u4fdd\u5b58\u5728LDAP\u4e2d(\u5373otp.type\u4e3aldap):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u624b\u673aapp\u60a8\u53ef\u4ee5\u4f7f\u7528authenticator\uff0cFreeOTP\u7b49\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u81ea\u5df1\u5728ldap\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\u540d\u7528\u6765\u5b58\u50a8string\u7c7b\u578b\u7684OTP\u5bc6\u94a5,\u5e76\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"auth.yaml"),"\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"opt.secretAttributeName"),"\uff0c\u8fd9\u4e2a\u5bc6\u94a5\u5c5e\u6027\u540d\u9ed8\u8ba4\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"otpSecret"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u914d\u7f6e\u90ae\u4ef6\u53d1\u9001\u4fe1\u606f\u3002\u5176\u4e2d\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u6709\u6548\u7684\u53d1\u4ef6\u4eba\u5730\u5740\u3001SMTP \u670d\u52a1\u5668\u5730\u5740\u3001SMTP \u670d\u52a1\u5668\u7aef\u53e3\u53f7\u4ee5\u53ca SMTP \u8ba4\u8bc1\u51ed\u636e\uff08\u5305\u62ec\u7528\u6237\u540d\u548c\u6388\u6743\u7801\uff09\u3002")),(0,o.kt)("h3",{id:"\u4e8c\u7531\u60a8\u81ea\u5df1\u7ba1\u7406otp\u5bc6\u94a5otptype\u4e3aremote"},"\u4e8c\u3001\u7531\u60a8\u81ea\u5df1\u7ba1\u7406OTP\u5bc6\u94a5(otp.type\u4e3aremote):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u90a3\u4e48\u60a8\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u9a8c\u8bc1otp\u7801\u7684\u63a5\u53e3, \u5e76\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"otp.remote.validateUrl"),"\uff0c\u8fd4\u56de\u9a8c\u8bc1\u7684\u7ed3\u679c\u3002\u8fd4\u56de\u7ed3\u679c\u8981\u6c42json\u683c\u5f0f",(0,o.kt)("inlineCode",{parentName:"p"},'{"result": true|false}'),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"scow\u4f1a\u4f7f\u7528fetch\u5411\u4e0a\u8ff0\u63a5\u53e3\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"otp.remote.validateUrl"),"\uff09\u53d1\u8d77\u8bf7\u6c42\u3002fetch\u8bf7\u6c42\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"otpCode"),"\u4e3a\u7528\u6237\u8f93\u5165\u7684otp\u7801\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),"\u4e3a\u7528\u6237\u540d\uff0c\u7c7b\u578b\u5747\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"\u3002"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"fetch"),(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"Content-Type": "application/json"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"body"),(0,o.kt)("td",{parentName:"tr",align:"center"},"otpCode, userId")))))),(0,o.kt)("p",null,"\u4f8b\uff1a\u5047\u8bbe\u60a8\u662f\u50cf",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/google-authenticator-libpam"},"Google Authenticator"),"\u4e00\u6837\u5c06\u5bc6\u94a5\u5b58\u5728\u7528\u6237\u5bb6\u76ee\u5f55\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},".google_authenticator"),"\u7b2c\u4e00\u884c\u5185\u5bb9\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u63d0\u4f9b\u7684\u8def\u7531\u63a5\u53e3\u53ca\u670d\u52a1TypeScript\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nimport { Static, Type } from "@sinclair/typebox";\nimport fastify from "fastify";\nimport { NodeSSH } from "node-ssh";\nimport * as speakeasy from "speakeasy";\n\n// \u8fdc\u7a0b\u9a8c\u8bc1OTP\u7801\nconst app = fastify({ logger: true });\n\n/**\n * \u8981\u6c42\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u53ef\u4ee5ssh\u514d\u5bc6\u767b\u5f55\u5230\u5b58\u653eotp\u5bc6\u94a5\u7684\u4e3b\u673a\u7684root\u7528\u6237\u3002\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u7684\u79c1\u94a5\u5730\u5740\u4e3a/home/node/.ssh/id_rsa\uff0cnode\u4e3a\u7528\u6237\u540d\u3002\n * \u5047\u8bbe\u60a8\u7684OTP\u5bc6\u94a5\u5b58\u653e\u4e3b\u673ahost="192.168.88.102"\u4e0a/data/home/{{userId}}/.google_authenticator\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u5185\u5bb9\uff0c\u5176\u4e2d{{userId}}\u4e3a\u9700\u8981\u9a8c\u8bc1otp\u7801\u662f\u5426\u6b63\u786e\u7684\u7528\u6237\u540d\n * \n */\n// ssh\u514d\u5bc6\u767b\u5f55\u5230\u5b58\u653eotp\u5bc6\u94a5\u7684root\u7528\u6237\nconst sshUserName = "root";\n// \u5047\u8bbe\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u7684\u79c1\u94a5\u5730\u5740\u4e3a/home/node/.ssh/id_rsa\nconst privateKeyPath = "/home/node/.ssh/id_rsa";\n\n// OTP\u5bc6\u94a5\u5b58\u653e\u4e3b\u673ahost="192.168.88.102"\nconst host = "192.168.88.102";\n// \u7528\u6237\u5bb6\u76ee\u5f55\uff0cotp\u5bc6\u94a5\u5b58\u653e\u4e8e\u6b64\u76ee\u5f55\u4e0b\u7684.google_authenticator\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u5185\u5bb9\nconst homedir = "/data/home/{{ userId }}";\n\n// routePath\u9700\u8981\u4e0e\u60a8\u5b9e\u73b0\u7684\u9a8c\u8bc1\u63a5\u53e3(otp.remote.url\u4e2d\u7684path)\u4e00\u81f4\nconst routePath = "/otp/remote/validateCode";\n\nconst bodySchema = Type.Object({\n  otpCode: Type.String(),\n  userId: Type.String(),\n});\napp.post<{Body: Static<typeof bodySchema>}>(\n  routePath,\n  {\n    schema: {\n      body: bodySchema,\n    },\n  },\n  async (req, res) => {\n    // otpCode\u4e3ascow\u53d1\u8d77\u7684\u8bf7\u6c42\u643a\u5e26\u7684OTP\u9a8c\u8bc1\u7801\uff0cuserId\u4e3aOTP\u9a8c\u8bc1\u7684\u7528\u6237\u540d\n    const { otpCode, userId } = req.body;\n    const ssh = new NodeSSH();\n    // \u83b7\u53d6OTP\u5bc6\u94a5\n    const otpSecret = await ssh.connect({ host: host, username: sshUserName, privateKeyPath: privateKeyPath })\n      .then(async () => {\n        const otpSecretFilePath = homedir.replace("{{ userId }}", userId) + "/.google_authenticator";\n        const fileContent = await ssh.execCommand(`su ${userId} && cat ${otpSecretFilePath}`);\n        return fileContent.stdout.toString().split("\\n")[0];\n      }).finally(() => {\n        ssh.dispose();\n      });\n    // \u83b7\u53d6\u7edd\u5bf9\u65f6\u95f4\u6233\n    const currentTime = new Date();\n    const timeStamp = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(),\n      currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds(),\n      currentTime.getUTCMilliseconds());\n\n    // \u9a8c\u8bc1\n    let result = speakeasy.totp.verify({\n      token: otpCode,\n      time: timeStamp / 1000,\n      encoding: "base32",\n      secret: otpSecret,\n      // digits, step, algorithm\u9700\u8981\u60a8\u4e0e\u624b\u673aapp\u8bbe\u7f6e\u4fdd\u6301\u4e00\u81f4,\u9ed8\u8ba4digits\u4e3a6\uff0cstep\u4e3a30\uff0calgorithm\u4e3asha1\n    });\n    // \u9a8c\u8bc1\u5931\u8d25\u5219\u68c0\u6d4b\u8f93\u5165\u7684\u662f\u5426\u662f\u4e0a\u4e00\u4e2astep\u7684otp\u7801\uff0c\u5982\u679c\u662f\uff0c\u4e5f\u7b97\u901a\u8fc7\n    if (!result) {\n      result = speakeasy.totp.verify({\n        token: otpCode,\n        time: timeStamp / 1000 - 30,\n        encoding: "base32",\n        secret: otpSecret,\n      });\n    }\n    res.send({ result });\n  },\n);\n\nexport const start = async () => {\n  // \u914d\u7f6e\u76d1\u542c\u7684ip\u548c\u7aef\u53e3\n  await app.listen({ port: 9999, host: "192.168.88.100" });\n};\nstart();\n\n')),(0,o.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u542f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"otp"),"\u529f\u80fd\uff0c\u65e0\u9700\u914d\u7f6e\u3002\u82e5\u8981\u542f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"otp"),", \u5219\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"otp.enabled"),"\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", \u6b64\u65f6\u5fc5\u987b\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"otp.type"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"remote"),"\u3002"),(0,o.kt)("p",null,"\u542f\u7528\u65f6\uff0c\u5982\u679c\u60a8\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"otp.type"),"\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),", \u90a3\u4e48",(0,o.kt)("inlineCode",{parentName:"p"},"otp.ldap"),"\u4e0b\u6240\u6709\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u914d\u7f6e\u9879\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u6b64\u5916\u60a8\u9700\u8981\u4fdd\u8bc1",(0,o.kt)("inlineCode",{parentName:"p"},"auth.yaml"),"\u6587\u4ef6\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"ldap.attrs.mail"),"\u88ab\u914d\u7f6e\u4e86\uff0c\u6b64\u914d\u7f6e\u5728\u8fd9\u91cc\u7528\u4e8e\u83b7\u53d6\u90ae\u7bb1\u4fe1\u606f\u53d1\u9001\u90ae\u4ef6\u3002\u540c\u6837\u5730\u5982\u679c\u60a8\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"otp.type"),"\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"remote"),", \u90a3\u4e48",(0,o.kt)("inlineCode",{parentName:"p"},"otp.remote"),"\u4e0b\u6240\u6709\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u914d\u7f6e\u9879\u90fd\u9700\u8981\u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"auth.yaml:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},'\n# ldap\u8ba4\u8bc1\u652f\u6301\u7ed1\u5b9a\u548c\u9a8c\u8bc1otp\uff0cssh\u8ba4\u8bc1\u4ec5\u652f\u6301\u9a8c\u8bc1\notp:\n  # \u662f\u5426\u542f\u7528otp\u529f\u80fd\uff0c \u9ed8\u8ba4false\n  enabled: false\n  # status\u6307\u5b9aotp\u542f\u7528\u7c7b\u578b\uff0c\u5206\u522b\u4e3aldap\uff1a\u5bc6\u94a5\u5b58\u5728ldap\uff0cremote\uff1a\u5bc6\u94a5\u60a8\u81ea\u5df1\u7ba1\u7406\u3002\n  type: ldap\n  # \u5f53status\u4e3aldap\u65f6\u95f4\uff0c\u9700\u914d\u7f6e\u4ee5\u4e0b\u8fd9\u6bb5\u5185\u5bb9\n  ldap:\n    # \u9650\u5236\u7ed1\u5b9aotp\u8981\u5728\u591a\u5c11\u5206\u949f\u5185\u5b8c\u6210\uff0c\u9700\u8981\u6574\u6570, \u9ed8\u8ba410\n    # bindLimitMinutes: 10\n    # \u5bc6\u94a5\u5b58\u50a8\u5c5e\u6027\u540d, \u9ed8\u8ba4\u4e3aotpSecret, \u9700\u8981\u7528\u6237\u81ea\u5df1\u5728ldap\u4e2d\u8fdb\u884c\u5b9a\u4e49\n    secretAttributeName: \n    # \u8bbf\u95eescow\u7cfb\u7edf\u7684\u57df\u540d\u6216ip\u5730\u5740(\u4e0d\u9700\u8981\u586b\u5199scow\u7684base path),\u7528\u4e8e\u53d1\u9001\u90ae\u4ef6\u4e2d\u7ec4\u6210OTP\u7ed1\u5b9a\u9875\u9762\u7684\u5730\u5740\uff0c\u4f8b\u5982\uff1ahttps://pku.edu.cn\n    scowHost: \n    # otp\u9a8c\u8bc1\u8f6f\u4ef6\u626b\u63cf\u4e8c\u7ef4\u7801\u4e4b\u540e\uff0c\u51fa\u73b0\u7684label\u4e2d\uff0c\u7528\u6237\u540d\u548c@\u540e\u663e\u793a\u7684\u540d\u79f0, \u9ed8\u8ba4\u4e3aSCOW\n    # ldabel: "scow"\n    # otp\u7684\u4e8c\u7ef4\u7801\u4e0a\u65b9\u6587\u5b57\u63cf\u8ff0\u4fe1\u606f", \u9ed8\u8ba4\u4e3a "\u6b64\u4e8c\u7ef4\u7801\u4ec5\u51fa\u73b0\u4e00\u6b21\uff0c\u7528\u8fc7\u5373\u6bc1", \u652f\u6301html\u6807\u7b7e\n    # qrcodeDescription: "\u6b64\u4e8c\u7ef4\u7801\u4ec5\u51fa\u73b0\u4e00\u6b21"\n    # \u7ed1\u5b9aotp\u65f6\u53d1\u9001\u7ed1\u5b9a\u4fe1\u606f\u65b9\u5f0f\n    authenticationMethod:\n      mail:\n        # \u53d1\u4ef6\u90ae\u7bb1\u5730\u5740\n        from: "morgan68@ethereal.email"\n        # \u5411\u6bcf\u4e2a\u7528\u6237\u53d1\u9001\u90ae\u4ef6\u9891\u7387\u9650\u5236\uff0c\u9700\u8981\u6574\u6570\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba460\u79d2\u95f4\u9694\n        # sendEmailFrequencyLimitInSeconds: 60\n        # \u90ae\u4ef6\u4e3b\u9898\uff0c\u9ed8\u8ba4\u4e3a"OTP\u7ed1\u5b9a\u94fe\u63a5"\n        # subject: "OTP\u7ed1\u5b9a\u94fe\u63a5"\n        # \u90ae\u4ef6\u5185\u5bb9\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a"Bind OTP"\uff0c\u4e5f\u53ef\u4ee5\u662fhtml\u6807\u7b7e\u5185\u5bb9\n        # title: "Bind OTP"\n        # \u90ae\u4ef6\u5185\u5bb9,\u9ed8\u8ba4\u4e3a"Please click on the following link to bind your OTP:"\uff0c\u4e5f\u53ef\u4ee5\u662fhtml\u6807\u7b7e\u5185\u5bb9\n        # contentText: "Please click on the following link to bind your OTP"\n        # \u6807\u7b7e\u70b9\u51fb\u6587\u5b57,\u9ed8\u8ba4\u4e3a"Bind OTP"\n        # labelText: "Bind OTP"\n        mailTransportInfo:\n          # SMTP\u670d\u52a1\u5668\n          host: "smtp.ethereal.email"\n          # \u662f\u5426\u542f\u7528\u5b89\u5168\u8fde\u63a5\uff0c\u9ed8\u8ba4false\n          # secure: false\n          # \u670d\u52a1\u5668\u7aef\u53e3\n          port: 587\n          # SMTP\u8eab\u4efd\u9a8c\u8bc1\u7528\u6237\u540d\n          user: "morgan68@ethereal.email"\n          # SMTP\u8eab\u4efd\u9a8c\u8bc1\u6388\u6743\u7801\n          password: "y2es3bd3rYwxWs5n8g"\n  # \u5982\u679cmode\u6307\u5b9a\u4e3aremote\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\n  remote:\n    # \u8fdc\u7a0b\u9a8c\u8bc1url\uff0c\u4f8b\u5982http://localhost:9999/otp/remote/validateCode,\u8be6\u89c1https://pkuhpc.github.io/SCOW/docs/deploy/config/auth/config\n    validateUrl: \n    # \u5f53\u7528\u6237\u70b9\u51fb\u7ed1\u5b9aOTP\u6309\u94ae\u65f6\u8df3\u8f6c\u7684\u6309\u94ae\uff0c\u5efa\u8bae\u914d\u7f6e\uff0c\u4e0d\u914d\u7f6e\u4f1a\u4e0d\u663e\u793a\u7ed1\u5b9aotp\u6309\u94ae\n    # redirectUrl: https://pkuhpc.github.io/SCOW/docs/deploy/config/auth/config \n\n')))}m.isMDXComponent=!0},17354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u9a8c\u8bc1\u7801\u767b\u5f55UI-e706d1f9b21221bb70af6166e0cf48b8.png"}}]);