"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[488],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,s=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(4250),a=(n(9496),n(9613));const l={slug:"/command-line"},i="\u547d\u4ee4\u884c",o={unversionedId:"getting-started/command-line/README",id:"getting-started/command-line/README",title:"\u547d\u4ee4\u884c",description:"Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u652f\u6301\u4e00\u4e9b\u547d\u4ee4\u884c\u9009\u9879",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/command-line/README.md",sourceDirName:"getting-started/command-line",slug:"/command-line",permalink:"/zh-CN/docs/command-line",draft:!1,tags:[],version:"current",frontMatter:{slug:"/command-line"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7",permalink:"/zh-CN/docs/upgrade"},next:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/zh-CN/docs/configfile"}},u={},p=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5168\u5c40\u9009\u9879",id:"\u5168\u5c40\u9009\u9879",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"init",id:"init",level:3},{value:"check",id:"check",level:3},{value:"run",id:"run",level:3},{value:"upgrade",id:"upgrade",level:3},{value:"dump",id:"dump",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u652f\u6301\u4e00\u4e9b\u547d\u4ee4\u884c\u9009\u9879")),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"answer command [command or global options] [arguments...]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u8981\u8fd0\u884c Answer\uff0c\u8bf7\u4f7f\u7528\uff1a\n        - 'answer init' \u6765\u521d\u59cb\u5316\u5fc5\u8981\u7684\u73af\u5883\u3002\n        - 'answer run' \u6765\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\n        - 'answer upgrade' \u6765\u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u7528\u6cd5\uff1a\n  answer [command]\n\n\u53ef\u7528\u547d\u4ee4\uff1a\n  check       \u68c0\u67e5\u6240\u9700\u73af\u5883\n  dump        \u5907\u4efd\u6570\u636e\n  help        \u83b7\u53d6\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\n  init        \u521d\u59cb\u5316 Answer \u5e94\u7528\u7a0b\u5e8f\n  run         \u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\n  upgrade     \u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\n\nFlags\uff1a\n  -h, --help      \u83b7\u53d6 Answer \u7684\u5e2e\u52a9\u4fe1\u606f\n  -v, --version   \u83b7\u53d6 Answer \u7684\u7248\u672c\u4fe1\u606f\n\n\u4f7f\u7528 \"answer [command] --help\" \u4ee5\u83b7\u53d6\u547d\u4ee4\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\n")),(0,a.kt)("h2",{id:"\u5168\u5c40\u9009\u9879"},"\u5168\u5c40\u9009\u9879"),(0,a.kt)("p",null,"\u6240\u6709\u5168\u5c40\u9009\u9879\u53ef\u4ee5\u653e\u7f6e\u5728\u547d\u4ee4\u7ea7\u522b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"-h"),"\uff1a\u663e\u793a\u5e2e\u52a9\u6587\u672c\u5e76\u9000\u51fa\u3002\u53ef\u9009\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--version"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"-v"),"\uff1a\u663e\u793a\u7248\u672c\u5e76\u9000\u51fa\u3002\u53ef\u9009\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--data-path")," path, ",(0,a.kt)("inlineCode",{parentName:"li"},"-C")," path\uff1a\u6570\u636e\u4fdd\u5b58\u8def\u5f84\u3002\u53ef\u9009\u3002 (\u9ed8\u8ba4\u4e3a\uff1a/data/)")),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"init \u547d\u4ee4\u5c06\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u73af\u5883\uff0c\u5305\u62ec\uff1a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u3001\u6570\u636e\u76ee\u5f55\u3001\u521d\u59cb\u5316\u6570\u636e\u5e93\u7b49\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"answer init -C ./data/")))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c Answer \u5df2\u7ecf\u521d\u59cb\u5316\u8fc7\uff0c\u5219\u6b64\u547d\u4ee4\u4e0d\u4f1a\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u914d\u7f6e\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff0c\u5b83\u5c06\u4e0d\u4f1a\u88ab\u521b\u5efa\u6216\u8986\u76d6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c Answer \u521d\u59cb\u5316\u5931\u8d25\uff0c\u5219\u65e0\u6cd5\u6267\u884c\u8fd0\u884c\u547d\u4ee4\u3002")))),(0,a.kt)("h3",{id:"check"},"check"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"check \u547d\u4ee4\u5c06\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u53ef\u4ee5\u8fd0\u884c\u3002\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002\u68c0\u67e5\u6570\u636e\u5e93\u662f\u5426\u53ef\u4ee5\u5efa\u7acb\u8fde\u63a5\u7b49\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"answer check -C ./data/"))))),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"run \u547d\u4ee4\u5c06\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"answer run -C ./data/"))))),(0,a.kt)("h3",{id:"upgrade"},"upgrade"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"upgrade \u547d\u4ee4\u5c06\u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"answer upgrade -C ./data/"))))),(0,a.kt)("h3",{id:"dump"},"dump"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"dump \u547d\u4ee4\u5c06\u5c06\u6570\u636e\u5e93\u6570\u636e\u8f6c\u50a8\u5230 SQL \u6587\u4ef6\u4e2d\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--path")," path, ",(0,a.kt)("inlineCode",{parentName:"li"},"-p")," path\uff1a\u8f6c\u50a8\u6570\u636e\u8def\u5f84\u3002\u53ef\u9009\u3002\uff08\u9ed8\u8ba4\u4e3a ./\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"answer dump -p /tmp/"))))))}c.isMDXComponent=!0}}]);