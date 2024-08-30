"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5575],{49862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(43010),a=i(90887);const r={title:"\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\u6307\u5357",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-22-cover-zh@4x.png",description:"\u6559\u4f60\u8f7b\u677e\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\uff0c\u6269\u5c55 Answer \u529f\u80fd"},t=void 0,c={permalink:"/zh-CN/blog/2024/08/22/guide-to-add-answer-plugins",editUrl:"https://crowdin.com/project/answer-website/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-08-22-guide-to-add-answer-plugins/index.md",title:"\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\u6307\u5357",description:"\u6559\u4f60\u8f7b\u677e\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\uff0c\u6269\u5c55 Answer \u529f\u80fd",date:"2024-08-22T00:00:00.000Z",formattedDate:"2024\u5e748\u670822\u65e5",tags:[],readingTime:2.58,hasTruncateMarker:!1,authors:[{name:"Zhu Xuanlyu",title:"Developer",url:"https://github.com/IamMelody233",imageURL:"https://avatars.githubusercontent.com/u/103870995?v=4",key:"ZhuXuanlyu"},{name:"Chen Jiaji",title:"Developer",url:"https://github.com/CHENJUaaa",imageURL:"https://avatars.githubusercontent.com/u/137683102?v=4",key:"ChenJiaji"},{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{title:"\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\u6307\u5357",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-22-cover-zh@4x.png",description:"\u6559\u4f60\u8f7b\u677e\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\uff0c\u6269\u5c55 Answer \u529f\u80fd"},unlisted:!1,prevItem:{title:"Recap of August | Apache Answer",permalink:"/zh-CN/blog/2024/09/02/answer-recap-august"},nextItem:{title:"Apache Answer \u540e\u7aef\u914d\u7f6e\u6307\u5357",permalink:"/zh-CN/blog/2024/08/20/apache-answer-backend-configuration-guide"}},l={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"\u4e0b\u8f7d\u63d2\u4ef6",id:"\u4e0b\u8f7d\u63d2\u4ef6",level:2},{value:"\u5b89\u88c5\u6807\u51c6 UI \u63d2\u4ef6\uff08Standard UI Plugin\uff09",id:"\u5b89\u88c5\u6807\u51c6-ui-\u63d2\u4ef6standard-ui-plugin",level:2},{value:"\u5b89\u88c5\u540e\u7aef\u63d2\u4ef6\uff08Backend Plugin\uff09",id:"\u5b89\u88c5\u540e\u7aef\u63d2\u4ef6backend-plugin",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u63d2\u4ef6\u5c31\u50cf\u662f\u4e00\u76d2\u79ef\u6728\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u7ec4\u5408\uff0c\u628a\u63d2\u4ef6\u7ec4\u5408\u6210\u4f60\u60f3\u8981\u7684\u529f\u80fd\u3002\u6dfb\u52a0\u63d2\u4ef6\u662f\u6269\u5c55 Answer \u529f\u80fd\u7684\u7edd\u4f73\u9014\u5f84\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u63d2\u4ef6\u7684\u5b89\u88c5\u6b65\u9aa4\uff0c\u8ba9\u4f60\u8f7b\u677e\u6dfb\u52a0\u63d2\u4ef6\uff0c\u8f7b\u677e\u638c\u63e1\u63d2\u4ef6\u7684\u5b89\u88c5\u548c\u4f7f\u7528\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u8f7d\u63d2\u4ef6",children:"\u4e0b\u8f7d\u63d2\u4ef6"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u70b9\u51fb",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins/tree/main",children:"\u6b64\u5904"}),"\u4ece\u5b98\u65b9 Apache Answer \u63d2\u4ef6\u4ed3\u5e93\u4e0b\u8f7d\u6240\u9700\u63d2\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u653e\u7f6e\u63d2\u4ef6\uff1a\u5c06\u4e0b\u8f7d\u7684\u63d2\u4ef6\u6587\u4ef6\uff0c\u653e\u7f6e\u5230\u9879\u76ee\u76ee\u5f55\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"./ui/src/plugins"})," \u4e2d"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63d2\u4ef6\u7c7b\u578b\u53c2\u8003\uff1a ",(0,s.jsx)(n.a,{href:"https://answer.apache.org/docs/development/plugins",children:"https://answer.apache.org/docs/development/plugins"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u6ce8\u610f\uff1a\u6587\u4ef6\u5939\u5e94\u8be5\u662f plugins\uff0c\u800c\u4e0d\u662f plugin\u3002"}),"\n",(0,s.jsx)(n.img,{alt:"files",src:i(57157).Z+"",width:"1280",height:"471"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5\u6807\u51c6-ui-\u63d2\u4ef6standard-ui-plugin",children:"\u5b89\u88c5\u6807\u51c6 UI \u63d2\u4ef6\uff08Standard UI Plugin\uff09"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u7ec8\u7aef\u6267\u884c ",(0,s.jsx)(n.code,{children:"cd ./ui"})," \u5230\u8fdb\u5165\u5230ui\u76ee\u5f55 \u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5b89\u88c5\u4f9d\u8d56\u9879\uff1a\u6267\u884c ",(0,s.jsx)(n.code,{children:"pnpm pre-install"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u542f\u52a8\u9879\u76ee\uff1a\u6267\u884c ",(0,s.jsx)(n.code,{children:"pnpm start"})," \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u540e\u7aef\u63d2\u4ef6\u51c6\u5907\uff1a\u5728\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\u7a97\u53e3\uff0c\u7ee7\u7eed\u6267\u884c\u540e\u7aef\u63d2\u4ef6\u5b89\u88c5\u6b65\u9aa4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5\u540e\u7aef\u63d2\u4ef6backend-plugin",children:"\u5b89\u88c5\u540e\u7aef\u63d2\u4ef6\uff08Backend Plugin\uff09"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8bd1\u524d\u7aef\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linux/MacOS\uff1a\u6267\u884c ",(0,s.jsx)(n.code,{children:"make ui"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["Windows\uff1a\u6267\u884c ",(0,s.jsx)(n.code,{children:"pnpm install"})," \u548c ",(0,s.jsx)(n.code,{children:"pnpm build"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u5bfc\u5165\u63d2\u4ef6\uff1a\u5728 ",(0,s.jsx)(n.code,{children:"cmd/answer/main.go"})," \u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165\u63d2\u4ef6\uff08\u5c06my-plugin\u66ff\u6362\u6210\u63d2\u4ef6\u540d\uff09"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import (\n    answercmd "github.com/apache/incubator-answer/cmd"\n    // Import the plugins\n    _ "github.com/apache/incubator-answer-plugins/my-plugin"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u56fe\u4ee5 editor-chart, editor-formula, embed-basic \u63d2\u4ef6\u4e3a\u4f8b\u3002\n",(0,s.jsx)(n.img,{alt:"main-go",src:i(621).Z+"",width:"897",height:"720"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\u66f4\u65b0 go.mod\uff1a\u901a\u8fc7\u6267\u884c ",(0,s.jsx)(n.code,{children:"cd .."})," \u547d\u4ee4\u9000\u56de\u5230 answer \u6839\u76ee\u5f55\u3002\u4f7f\u7528 go mod edit \u5c06\u63d2\u4ef6\u6dfb\u52a0\u5230 go.mod \u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"go mod edit -replace=github.com/apache/incubator-answer-plugins/my-plugin=./ui/src/plugins/my-plugin\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1aWindows \u7528\u6237\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\uff0c\u53ef\u53c2\u8003\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'go mod edit -replace="github.com/apache/incubator-answer-plugins/my-plugin"="./ui/src/plugins/my-plugin"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 editor-chart, editor-formula, embed-basic \u63d2\u4ef6\u4e3a\u4f8b\u3002\n",(0,s.jsx)(n.img,{alt:"go-edit",src:i(26470).Z+"",width:"1280",height:"528"})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0b\u8f7d\u4f9d\u8d56\uff1a\u6267\u884c ",(0,s.jsx)(n.code,{children:"go mod tidy"})," \u4e0b\u8f7d\u5e76\u66f4\u65b0\u4f9d\u8d56\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u542f\u52a8\u9879\u76ee\uff1a",(0,s.jsx)(n.code,{children:"go run cmd/answer/main.go run -C ./answer-data"}),"\u3002\n",(0,s.jsx)(n.img,{alt:"go-tidy",src:i(14291).Z+"",width:"1280",height:"528"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u540e\u7aef\u501f\u53e3\u7f51\u5740\uff0c\u53ef\u5728 Admin - Installed Plugins \u91cc\u770b\u5230\u6dfb\u52a0\u7684\u63d2\u4ef6\uff0c\u70b9\u51fb Action \u5217\u7684 ",(0,s.jsx)(n.code,{children:"\u22ee"})," \u5373\u53ef\u6fc0\u6d3b\u548c\u79fb\u9664\u8be5\u63d2\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u63d2\u4ef6\u6dfb\u52a0\uff0c\u70b9\u51fb",(0,s.jsx)(n.a,{href:"https://answer.apache.org/plugins/",children:"\u6b64\u5904"}),"\u53ef\u4ee5\u4e86\u89e3\u66f4\u591a\u793e\u533a\u6784\u5efa\u7684\u63d2\u4ef6\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.a,{href:"https://answer.apache.org/zh-CN/blog/2024/07/02/how-to-package-and-deploy-answer-plugins/",children:"Apache Answer \u4f7f\u7528\u63d2\u4ef6\u7684\u8be6\u7ec6\u6559\u7a0b"}),"\uff0c\u4ee5\u53ca",(0,s.jsx)(n.a,{href:"https://answer.apache.org/zh-CN/docs/development/plugins/",children:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357"}),"\uff0c\u8ba9\u4f60\u7684 Apache Answer \u53d8\u5f97\u66f4\u52a0\u5f3a\u5927\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},57157:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/files-6363b977dd50bde04b29adaa00ef8899.png"},26470:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/go-edit-8dcc02f5590a6ad2ce2aa28340d4ae97.png"},14291:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/go-tidy-8dcc02f5590a6ad2ce2aa28340d4ae97.png"},621:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/main-go-6ee710c6607c09c96ab85a65d9173f81.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(85170);const a={},r=s.createContext(a);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);