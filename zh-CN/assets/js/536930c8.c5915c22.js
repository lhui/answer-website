"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1208],{76834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(43010),a=t(90887);const i={slug:"/api"},c="API Document",s={id:"development/api",title:"API Document",description:"Apache Answer using swagger to generate API document automatically. Swagger can display the API document in a friendly way, and can also provide a convenient way to test the API.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/api.md",sourceDirName:"development",slug:"/api",permalink:"/zh-CN/docs/api",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1724137319,formattedLastUpdatedAt:"2024\u5e748\u670820\u65e5",frontMatter:{slug:"/api"},sidebar:"docs",previous:{title:"Database",permalink:"/zh-CN/docs/database"},next:{title:"\u6240\u4f9d\u8d56\u7684\u5f00\u6e90\u9879\u76ee",permalink:"/zh-CN/docs/contributing/notice"}},r={},d=[{value:"Where is the API document?",id:"where-is-the-api-document",level:2},{value:"Quick Look",id:"quick-look",level:3},{value:"View your own API document",id:"view-your-own-api-document",level:3},{value:"Generate API document",id:"generate-api-document",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"api-document",children:"API Document"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Apache Answer using swagger to generate API document automatically. Swagger can display the API document in a friendly way, and can also provide a convenient way to test the API."})}),"\n",(0,o.jsx)(n.h2,{id:"where-is-the-api-document",children:"Where is the API document?"}),"\n",(0,o.jsx)(n.h3,{id:"quick-look",children:"Quick Look"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to quickly view the API document, you can visit the following link:\n",(0,o.jsx)(n.a,{href:"https://meta.answer.dev/swagger/index.html",children:"https://meta.answer.dev/swagger/index.html"})]}),"\n",(0,o.jsx)(n.h3,{id:"view-your-own-api-document",children:"View your own API document"}),"\n",(0,o.jsxs)(n.p,{children:["If you already have an Apache Answer instance, you can view the API document of your own instance by visiting the following link:\n",(0,o.jsx)(n.code,{children:"https://example.com/swagger/index.html"})]}),"\n",(0,o.jsx)(n.p,{children:"If you can't access the above link, please check the following configuration items whether they are configured correctly."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="/data/conf/config.yaml"',children:"swaggerui:\n  show: true\n  protocol: http\n  host: 127.0.0.1\n  address: ':9080' # leave blank to use the 80 port number\n"})}),"\n",(0,o.jsx)(n.h2,{id:"generate-api-document",children:"Generate API document"}),"\n",(0,o.jsxs)(n.p,{children:["Apache Answer using ",(0,o.jsx)(n.a,{href:"https://github.com/swaggo/swag",children:"swag"})," to generate API document json/yaml file automatically according to the comments in the code. You can use the following steps to generate API document."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# install swag cli\n$ go install github.com/swaggo/swag/cmd/swag@latest\n\n# enter the project root directory and execute the following command\n$ cd script\n$ ./gen-api.sh\n\n# the generated documentation is in the docs/api directory\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},90887:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var o=t(85170);const a={},i=o.createContext(a);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);