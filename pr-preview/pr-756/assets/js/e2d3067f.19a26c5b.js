"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8837],{56199:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"update-portal-app","metadata":{"permalink":"/SCOW/pr-preview/pr-756/blog/update-portal-app","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-07-05-update-app.md","source":"@site/blog/2023-07-05-update-app.md","title":"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0","description":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c\u5728SCOW\u95e8\u6237\u7cfb\u7edf\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7\u5728config/apps\u4e0b\u914d\u7f6e\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\uff0c\u5b9e\u73b0\u521b\u5efa\u5404\u4e2a\u96c6\u7fa4\u4e0b\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002","date":"2023-07-05T00:00:00.000Z","formattedDate":"2023\u5e747\u67085\u65e5","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow"},{"label":"scow-portal-apps","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-portal-apps"},{"label":"scow-apps","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-apps"}],"readingTime":1.305,"hasTruncateMarker":false,"authors":[{"name":"Sun Yixin","title":"Developer","url":"https://github.com/piccaSun","imageURL":"https://avatars.githubusercontent.com/u/43978285","key":"sunyixin"}],"frontMatter":{"slug":"update-portal-app","title":"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0","authors":["sunyixin"],"tags":["scow","scow-portal-apps","scow-apps"]},"nextItem":{"title":"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668","permalink":"/SCOW/pr-preview/pr-756/blog/scow-scheduler-adapter"}},"content":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c\u5728SCOW\u95e8\u6237\u7cfb\u7edf\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7\u5728`config/apps`\u4e0b\u914d\u7f6e\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\uff0c\u5b9e\u73b0\u521b\u5efa\u5404\u4e2a\u96c6\u7fa4\u4e0b\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002\\n\u4f46\u662f\u8003\u8651\u5230\u4e0d\u540c\u96c6\u7fa4\u7684\u8ba1\u7b97\u673a\u8282\u70b9\u4e0b\u5b89\u88c5\u73af\u5883\u4e0d\u540c\uff0c\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u5bf9\u6240\u6709\u83b7\u53d6\u5230\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u7684\u6b63\u5e38\u4f7f\u7528\u3002\\n\\n\u4e3a\u4e86\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u3001\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u4f7f\u7528SCOW\u96c6\u7fa4\uff0c\u6211\u4eec\u5728\u65b0\u7248\u672c\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u90e8\u5206\uff0c\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a\\n\\n- \u5b9e\u73b0\u5728`config/clusters/{\u96c6\u7fa4ID}/apps`\u4e0b\u5bf9\u7279\u5b9a\u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u8fdb\u884c\u5355\u72ec\u914d\u7f6e\\n- \u540c\u65f6\u6709\u6548\u517c\u5bb9\u65e7\u7248\u672c`config/apps`\u4e0b\u6240\u6709\u96c6\u7fa4\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\\n- \u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u589e\u52a0\u53ef\u9009\u81ea\u5b9a\u4e49\u56fe\u6807\u914d\u7f6e\uff0c\u5728\u521b\u5efa\u5e94\u7528\u9875\u9762\u5b9e\u73b0\u4ea4\u4e92\u5f0f\u5e94\u7528\u56fe\u6807\u53ef\u89c6\u5316\u7ba1\u7406\\n\\n\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003SCOW`\u90e8\u7f72\u548c\u914d\u7f6e`\u4e0b\u7684[\u591a\u96c6\u7fa4\u4e0b\u7684\u5e94\u7528\u914d\u7f6e](%DOCS_URL%%BASE_PATH%docs/deploy/config/portal/apps/configure-cluster-apps)\u3002"},{"id":"scow-scheduler-adapter","metadata":{"permalink":"/SCOW/pr-preview/pr-756/blog/scow-scheduler-adapter","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-06-26-scow-scheduler-adapter.md","source":"@site/blog/2023-06-26-scow-scheduler-adapter.md","title":"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668","description":"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668","date":"2023-06-26T00:00:00.000Z","formattedDate":"2023\u5e746\u670826\u65e5","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow"},{"label":"scow-scheduler-adapter","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-scheduler-adapter"}],"readingTime":2.935,"hasTruncateMarker":false,"authors":[{"name":"Qu Han","title":"Developer","imageURL":"https://avatars.githubusercontent.com/u/98016770","key":"quhan"}],"frontMatter":{"slug":"scow-scheduler-adapter","title":"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668","authors":["quhan"],"tags":["scow","scow-scheduler-adapter"]},"prevItem":{"title":"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0","permalink":"/SCOW/pr-preview/pr-756/blog/update-portal-app"},"nextItem":{"title":"scow-cli","permalink":"/SCOW/pr-preview/pr-756/blog/scow-cli-release"}},"content":"## \u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668\\n\\nSCOW\u662f\u5efa\u7acb\u5728\u5e95\u5c42\u4f5c\u4e1a\u8c03\u5ea6\u5668\u57fa\u7840\u4e0a\u7684\u7cfb\u7edf\uff0c\u5b83\u901a\u8fc7\u4e0e\u5e95\u5c42\u8c03\u5ea6\u5668\u8fdb\u884c\u529f\u80fd\u5bf9\u63a5\uff0c\u5411\u7528\u6237\u63d0\u4f9b\u5404\u79cd\u8d85\u7b97\u529f\u80fd\u3002\\n\\n\u5728\u4e4b\u524d\u7684\u5b9e\u73b0\u4e2d\uff0cscow\u76f4\u63a5\u4e0e\u4f5c\u4e1a\u8c03\u5ea6\u5668\u672c\u8eab\u4ea4\u4e92\uff0c\u56e0\u6b64scow\u5fc5\u987b\u77e5\u9053\u5e95\u5c42\u8c03\u5ea6\u5668\u5185\u90e8\u7684\u67d0\u4e9b\u7ec6\u8282\uff0c\\n\u5bfc\u81f4scow\u5185\u90e8\u7684\u67d0\u4e9b\u4ee3\u7801\u662f\u4e0e\u8c03\u5ea6\u5668\u79cd\u7c7b\u76f4\u63a5\u76f8\u5173\u7684\uff08\u5982\u6700\u5148\u9002\u914d\u7684slurm\uff09\uff0c\u8fd9\u4f1a\u4f7f\u9002\u914d\u5176\u5b83\u8c03\u5ea6\u5668\u65f6\u6bd4\u8f83\u9ebb\u70e6\u3002\\n\\n\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff08`scheduler-adapter`\uff09\u5219\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u901a\u8fc7\u4e00\u5c42\u9002\u914d\u5668\u5c42\uff0cscow\u53ea\u4e0e\u9002\u914d\u5668\u8fdb\u884c\u4ea4\u4e92\uff0c\\n\u9002\u914d\u5668\u518d\u5bf9\u63a5\u4f5c\u4e1a\u8c03\u5ea6\u5668\uff0c\u5b9e\u73b0scow\u9700\u8981\u7684\u8c03\u5ea6\u5668\u529f\u80fd\u3002\\n\\n## \u600e\u6837\u5b9e\u73b0\u8c03\u5ea6\u5668\u9002\u914d\u5668\\n\\n\u8c03\u5ea6\u5668\u9002\u914d\u5668\u672c\u8d28\u4e0a\u662f\u4e00\u4e2agRPC\u670d\u52a1\u5668\uff0c\u5b83\u5b9e\u73b0\u4e86scow\u5b9a\u4e49\u7684\u4e00\u5957[\u63a5\u53e3](https://github.com/PKUHPC/scow-scheduler-adapter-interface)\uff0c\\nscow\u53ea\u4f1a\u8c03\u7528\u8fd9\u5957\u63a5\u53e3\u6765\u5b9e\u73b0\u8c03\u5ea6\u5668\u529f\u80fd\u3002\\n\\n\u56e0\u6b64\uff0c\u53ea\u9700\u8981\u4e3a\u5bf9\u5e94\u79cd\u7c7b\u7684\u4f5c\u4e1a\u8c03\u5ea6\u5668\u5b9e\u73b0\u8fd9\u6837\u4e00\u4e2agRPC\u670d\u52a1\u5668\uff0c\u6ee1\u8db3\u4e0a\u8ff0\u63a5\u53e3\u5b9a\u4e49\uff0c\u5c31\u80fd\u591f\u8f7b\u677e\u5bf9\u63a5scow\u7cfb\u7edf\\n\\n\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u7684\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff1a\\n\\n- [slurm](https://github.com/PKUHPC/scow-slurm-adapter)\\n\\n## \u5982\u4f55\u5e73\u6ed1\u5347\u7ea7\\n\\n\u8fd9\u4e00\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u4ece\u65e7\u7248\u672cscow\u5347\u7ea7\u81f3\u65b0\u7248\u672c\uff0c\u4f7f\u7528\u8c03\u5ea6\u5668\u9002\u914d\u5668\\n\\n### 1. \u90e8\u7f72\u8c03\u5ea6\u5668\u9002\u914d\u5668\\n\\n\u9996\u5148\u9700\u8981\u786e\u4fdd\u60a8\u7684\u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e86\u5bf9\u5e94\u7684\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff0c\u5f97\u5230\u8bbf\u95ee\u5b83\u7684\u5730\u5740\u53ca\u7aef\u53e3\u53f7\\n\\n\u90e8\u7f72\u9002\u914d\u5668\u53ef\u53c2\u8003\u6587\u6863\uff1a\\n\\n- [slurm](https://github.com/PKUHPC/scow-slurm-adapter)\\n\\n### 2. \u4fee\u6539SCOW\u914d\u7f6e\u6587\u4ef6\\n\\n\u9996\u5148\u786e\u4fdd\u60a8\u4f7f\u7528\u4e86\u6700\u65b0\u7684SCOW\u955c\u50cf\uff08\u53ef\u67e5\u770b`install.yaml`\u4e2d\u7684`imageTag`\u5b57\u6bb5\uff09\\n\\n\u5728\u7528\u4e8e\u90e8\u7f72scow\u7684`scow-deployment`\u6587\u4ef6\u5939\u4e2d\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a\\n\\n- \u9996\u5148\u4fee\u6539[\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6](%DOCS_URL%%BASE_PATH%docs/deploy/config/cluster-config)\\n\\n  \u4e3b\u8981\u53d8\u5316\u4e3a\u5220\u9664`slurm`\u914d\u7f6e\u9879, \u5c06`loginNodes`\u914d\u7f6e\u9879\u4f5c\u4e3a\u72ec\u7acb\u7684\u4e00\u9879\u914d\u7f6e\u3002\u65b0\u589e`adapterUrl`\u914d\u7f6e\u9879\uff0c\u6807\u8bc6\u9002\u914d\u5668\u5730\u5740\\n\\n- \u4fee\u6539[\u7ba1\u7406\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6](%DOCS_URL%%BASE_PATH%docs/deploy/config/mis/intro)\\n\\n  \u5220\u9664\u4e86`fetchJobs`\u914d\u7f6e\u9879\u4e2d\u7684`db`\u9879\uff0c\u5373\u4e0d\u518d\u91c7\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\uff0c\u901a\u8fc7\u9002\u914d\u5668\u540c\u6b65\u4f5c\u4e1a\u4fe1\u606f\\n\\n### 3. \u4e0d\u518d\u4f7f\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\\n\\n\u90e8\u7f72\u4f7f\u7528\u9002\u914d\u5668\u540e\uff0c\u53ef\u4ee5\u4e0d\u518d\u90e8\u7f72[`export-jobs`](https://github.com/PKUHPC/export-jobs)\u9879\u76ee\uff0c\u540c\u6b65\u4f5c\u4e1a\u4fe1\u606f\u7684\u529f\u80fd\u7531\u9002\u914d\u5668\u5b8c\u6210"},{"id":"scow-cli-release","metadata":{"permalink":"/SCOW/pr-preview/pr-756/blog/scow-cli-release","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-03-29-scow-cli.md","source":"@site/blog/2023-03-29-scow-cli.md","title":"scow-cli","description":"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002","date":"2023-03-29T00:00:00.000Z","formattedDate":"2023\u5e743\u670829\u65e5","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow"},{"label":"scow-cli","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-cli"},{"label":"scow-deployment","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-deployment"}],"readingTime":1.285,"hasTruncateMarker":false,"authors":[{"name":"Chen Junda","title":"Developer","url":"https://ddadaal.me","imageURL":"https://avatars.githubusercontent.com/u/8363856","key":"chenjunda"}],"frontMatter":{"slug":"scow-cli-release","title":"scow-cli","authors":["chenjunda"],"tags":["scow","scow-cli","scow-deployment"]},"prevItem":{"title":"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668","permalink":"/SCOW/pr-preview/pr-756/blog/scow-scheduler-adapter"},"nextItem":{"title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","permalink":"/SCOW/pr-preview/pr-756/blog/update-to-python-deployment"}},"content":"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u5730\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u7ba1\u7406SCOW\u96c6\u7fa4\u3002\\n\\n\u4e4b\u524d\u7684`scow-deployment`\u4e3a\u4e86\u4fdd\u8bc1\u65e0\u9700\u5b89\u88c5\u4f9d\u8d56\u5747\u53ef\u4f7f\u7528\uff0c\u6240\u4ee5\u91c7\u7528\u4e86\u548cSCOW\u5176\u4ed6\u90e8\u5206\u4e0d\u4e00\u6837\u7684python\u8bed\u8a00\u5f00\u53d1\uff0c\u4e14\u65e0\u6cd5\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\u7684\u529f\u80fd\uff0c\u9650\u5236\u4e86`scow-deployment`\u7684\u529f\u80fd\u3002\\n\\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u91cd\u65b0\u7f16\u5199\u4e86`scow-cli`\u3002\u6b64\u5de5\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a\\n\\n- \u4f7f\u7528`install.yaml`\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c\\n- \u53ef\u81ea\u7531\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\uff0c\u529f\u80fd\u6269\u5c55\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\\n- \u6b64\u5de5\u5177\u91c7\u7528\u548c\u7cfb\u7edf\u5176\u4ed6\u90e8\u5206\u76f8\u540c\u7684\u6280\u672f\u6808\u7f16\u5199\uff0c\u65b9\u4fbf\u540e\u7eed\u529f\u80fd\u5f00\u53d1\u548c\u7ef4\u62a4\\n- \u6253\u5305\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u540c\u6837\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u4f9d\u8d56\u5373\u53ef\u4f7f\u7528\\n\\n`scow-cli`\u662f\u540e\u7eed\u589e\u52a0\u66f4\u591a\u547d\u4ee4\u884c\u7ef4\u62a4\u529f\u80fd\u7684\u57fa\u7840\uff0c\u5efa\u8bae\u5927\u5bb6\u5c3d\u5feb\u4ece`scow-deployment`\u8fc1\u79fb\u5230`scow-cli`\u3002\\n\\n\u8bf7\u53c2\u8003[scow-cli](%DOCS_URL%%BASE_PATH%docs/deploy/install/scow-cli)\u6587\u6863\u4ee5\u4e0b\u8f7dscow-cli\uff0c\u4ee5\u53ca\u4e86\u89e3\u5982\u4f55\u4ece`scow-deployment`\u8fc1\u79fb\u5230`scow-cli`\u3002"},{"id":"update-to-python-deployment","metadata":{"permalink":"/SCOW/pr-preview/pr-756/blog/update-to-python-deployment","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-10-22-update-deployment.md","source":"@site/blog/2022-10-22-update-deployment.md","title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","description":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0cPKUHPC/scow-deployment\u9879\u76ee\u662f\u7eaf\u901a\u8fc7Docker Compose\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86Docker Compose\u5185\u7f6e\u7684profile\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662fDocker Compose\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002","date":"2022-10-22T00:00:00.000Z","formattedDate":"2022\u5e7410\u670822\u65e5","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow"},{"label":"scow-deployment","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow-deployment"}],"readingTime":2.265,"hasTruncateMarker":false,"authors":[{"name":"Huangjun","title":"Developer","url":"https://blog.csdn.net/huangjun0210?type=blog","imageURL":"https://avatars.githubusercontent.com/u/26295600","key":"huangjun"}],"frontMatter":{"slug":"update-to-python-deployment","title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","authors":["huangjun"],"tags":["scow","scow-deployment"]},"prevItem":{"title":"scow-cli","permalink":"/SCOW/pr-preview/pr-756/blog/scow-cli-release"},"nextItem":{"title":"scow\u6587\u6863\u4e0a\u7ebf","permalink":"/SCOW/pr-preview/pr-756/blog/docs-online"}},"content":"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c`PKUHPC/scow-deployment`\u9879\u76ee\u662f\u7eaf\u901a\u8fc7`Docker Compose`\u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u5230\u4e86`Docker Compose`\u5185\u7f6e\u7684`profile`\u529f\u80fd\u3001\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u4ee5\u53ca\u53d8\u91cf\u66ff\u6362\u529f\u80fd\u6765\u5b9e\u73b0\u7c7b\u4f3c\u4e0d\u540c\u914d\u7f6e\u3002\u4f46\u662f`Docker Compose`\u7684\u8fd9\u4e9b\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u6ee1\u8db3\u672a\u6765\u66f4\u591a\u81ea\u5b9a\u4e49\u9700\u6c42\u3002\\n\\n\u4e3a\u7b80\u5316\u90e8\u7f72\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u540c\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u6613\u61c2\u548c\u7075\u6d3b\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u6700\u65b0\u7248\u672c\u7684`PKUHPC/scow-deployment`\u9879\u76ee\u4f7f\u7528`python`\u52a8\u6001\u751f\u6210`Docker Compose`\u6587\u4ef6\uff0c\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u751f\u6210\u66f4\u6613\u7406\u89e3\u7684`Docker Compose`\u6587\u4ef6\u3002\\n\\n\u63a5\u4e0b\u6765\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5e73\u6ed1\u7684\u4ece\u65e7\u7248\u672c\u5347\u7ea7\u81f3\u65b0\u7248\u672c\u3002\\n\\n## 1. \u505c\u6b62scow\u670d\u52a1\\n\\n```shell\\n# \u8fdb\u5165scow-deployment\u9879\u76ee\u76ee\u5f55\\ncd scow-deployment\\n\\n# \u505c\u6b62scow\u670d\u52a1\\ndocker-compose down\\n```\\n\\n## 2. \u5907\u4efd\u914d\u7f6e\u6587\u4ef6\\n\\n\u4e3b\u8981\u5907\u4efd`.env`\u914d\u7f6e\u6587\u4ef6\uff1a\\n\\n```shell\\n# 1. \u521b\u5efa\u5907\u4efd\u76ee\u5f55\\nmkdir /path/to/backup\\n\\n# 2. \u5907\u4efd\u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\\ncp .env /path/to/backup\\n\\n```\\n\\n## 3.  \u5347\u7ea7\\n\\n\u62c9\u53d6master\u5206\u652f\u6700\u65b0\u4ee3\u7801\uff1a\\n\\n```shell\\ncd /path/to/scow-deployment\\n# \u540c\u6b65\u6700\u65b0\u4ee3\u7801\\ngit pull\\n```\\n\\n\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a\\n\\n```shell\\ntree -L 1\\n\u251c\u2500\u2500 compose.sh\\t\\t\\t\\t# \u7a0b\u5e8f\u6267\u884c\u5165\u53e3\uff0c\u6267\u884c\u8be5\u811a\u672c\u4f1a\u751f\u6210docker-compose.json\u3001db.sh\u6587\u4ef6\\n\u251c\u2500\u2500 config-example\\t\\t\\t# scow\u4e1a\u52a1\u914d\u7f6e\u6a21\u677f\u6587\u4ef6\u76ee\u5f55\\n\u251c\u2500\u2500 config-example.py\\t\\t# scow\u7cfb\u7edf\u90e8\u7f72\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u6a21\u677f\\n\u251c\u2500\u2500 fluent\\t\\t\\t\\t\\t# fluent\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\\n\u251c\u2500\u2500 generate.py\\t\\t\\t\\t# \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u751f\u6210python\u811a\u672c\\n\u2514\u2500\u2500 README.md\\n```\\n\\n\u7f16\u5199\u914d\u7f6e\u6587\u4ef6:\\n\\n```shell\\n# 1. \u590d\u5236\u914d\u7f6e\u6587\u4ef6\\ncp config-example.py config.py\\n\\n# 2. \u914d\u7f6e\u53c2\u6570\\n# \u6839\u636e\u548c\u5907\u4efd\u7684.env\u6587\u4ef6\u548cconfig.py\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4fee\u6539config.py\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\\n\\n```\\n\\n\u670d\u52a1\u542f\u52a8\u4e0e\u505c\u6b62\uff1a\\n\\n```shell\\n# \u542f\u52a8\u670d\u52a1\\n./compose.sh up -d\\n\\n# \u505c\u6b62\u670d\u52a1\\n./compose.sh down\\n```\\n\\n> `./compose.sh`\u652f\u6301\u6240\u6709\u57fa\u4e8e`Docker Compose`\u6587\u4ef6\u7684`docker-compose`\u547d\u4ee4\uff0c\u5982\uff1aup\u3001down\u3001ps\u3001restart\u7b49\u3002\\n\\n\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003`PKUHPC/scow-deployment`\u9879\u76ee\u7684[README.md](https://github.com/PKUHPC/scow-deployment/blob/master/README.md)\u3002"},{"id":"docs-online","metadata":{"permalink":"/SCOW/pr-preview/pr-756/blog/docs-online","editUrl":"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2022-04-01-docs-online.md","source":"@site/blog/2022-04-01-docs-online.md","title":"scow\u6587\u6863\u4e0a\u7ebf","description":"scow\u6587\u6863\u7f51\u7ad9\u4e0a\u7ebf\uff01","date":"2022-04-01T00:00:00.000Z","formattedDate":"2022\u5e744\u67081\u65e5","tags":[{"label":"scow","permalink":"/SCOW/pr-preview/pr-756/blog/tags/scow"}],"readingTime":0.035,"hasTruncateMarker":false,"authors":[{"name":"Chen Junda","title":"Developer","url":"https://ddadaal.me","imageURL":"https://avatars.githubusercontent.com/u/8363856","key":"chenjunda"}],"frontMatter":{"slug":"docs-online","title":"scow\u6587\u6863\u4e0a\u7ebf","authors":["chenjunda"],"tags":["scow"]},"prevItem":{"title":"scow-deployment\u5e73\u6ed1\u5347\u7ea7\u6307\u5bfc","permalink":"/SCOW/pr-preview/pr-756/blog/update-to-python-deployment"}},"content":"scow\u6587\u6863\u7f51\u7ad9\u4e0a\u7ebf\uff01"}]}')}}]);