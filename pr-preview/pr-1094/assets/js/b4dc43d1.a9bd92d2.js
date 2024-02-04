"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1717],{4870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(35250),s=n(57766);const i={sidebar_position:7,title:"\u7528\u6237\u5bc6\u7801\u6b63\u5219\u914d\u7f6e"},r="\u521b\u5efa\u7528\u6237/\u4fee\u6539\u5bc6\u7801\u6b63\u5219\u914d\u7f6e",c={id:"deploy/config/customization/password-pattern",title:"\u7528\u6237\u5bc6\u7801\u6b63\u5219\u914d\u7f6e",description:"\u5f53\u6240\u4f7f\u7528\u7684\u8ba4\u8bc1\u7cfb\u7edf\u652f\u6301\u521b\u5efa\u7528\u6237\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u7ba1\u7406\u7cfb\u7edf\u5185\u7f6e\u7684\u521b\u5efa\u7528\u6237\u8868\u5355\u6765\u5b8c\u6210\u521b\u5efa\u7528\u6237\u7684\u529f\u80fd\uff1b\u7528\u6237\u53ef\u4ee5\u5728\u4e2a\u4eba\u4fe1\u606f\u4e2d\u4fee\u6539\u5bc6\u7801\uff0c\u5bf9\u4e8e\u5bc6\u7801\u7684\u89c4\u5219\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u914d\u7f6e\u3002",source:"@site/docs/deploy/config/customization/password-pattern.md",sourceDirName:"deploy/config/customization",slug:"/deploy/config/customization/password-pattern",permalink:"/SCOW/pr-preview/pr-1094/docs/deploy/config/customization/password-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/customization/password-pattern.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u7528\u6237\u5bc6\u7801\u6b63\u5219\u914d\u7f6e"},sidebar:"deploy",previous:{title:"\u81ea\u5b9a\u4e49\u7528\u6237\u4e0b\u62c9\u83dc\u5355\u94fe\u63a5",permalink:"/SCOW/pr-preview/pr-1094/docs/deploy/config/customization/custom-userlinks"},next:{title:"\u81ea\u5b9a\u4e49\u53ef\u67e5\u8be2\u7684\u6d88\u8d39\u7c7b\u578b",permalink:"/SCOW/pr-preview/pr-1094/docs/deploy/config/customization/custom-charge-types"}},a={},p=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u521b\u5efa\u7528\u6237\u4fee\u6539\u5bc6\u7801\u6b63\u5219\u914d\u7f6e",children:"\u521b\u5efa\u7528\u6237/\u4fee\u6539\u5bc6\u7801\u6b63\u5219\u914d\u7f6e"}),"\n",(0,o.jsx)(t.p,{children:"\u5f53\u6240\u4f7f\u7528\u7684\u8ba4\u8bc1\u7cfb\u7edf\u652f\u6301\u521b\u5efa\u7528\u6237\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u7ba1\u7406\u7cfb\u7edf\u5185\u7f6e\u7684\u521b\u5efa\u7528\u6237\u8868\u5355\u6765\u5b8c\u6210\u521b\u5efa\u7528\u6237\u7684\u529f\u80fd\uff1b\u7528\u6237\u53ef\u4ee5\u5728\u4e2a\u4eba\u4fe1\u606f\u4e2d\u4fee\u6539\u5bc6\u7801\uff0c\u5bf9\u4e8e\u5bc6\u7801\u7684\u89c4\u5219\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u914d\u7f6e\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="config/common.yaml"',children:"# \u521b\u5efa\u7528\u6237\u3001\u4fee\u6539\u5bc6\u7801\u65f6\uff0c\u5bc6\u7801\u7684\u89c4\u5219\u3002\u5fc5\u987b\u8bbe\u7f6e\npasswordPattern:\n  # \u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4e0b\u9762\u4e3a\u9ed8\u8ba4\u503c\n  regex: ^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[`~!@#\\$%^&*()_+\\-[\\];',./{}|:\"<>?]).{8,}$\n\n  # \u51fa\u9519\u65f6\u7684\u6d88\u606f\u3002\u4e0b\u9762\u4e3a\u9ed8\u8ba4\u503c\n  errorMessage: \u5fc5\u987b\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u7b26\u53f7\uff0c\u957f\u5ea6\u5927\u4e8e\u7b49\u4e8e8\u4f4d\n\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},57766:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(70079);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);