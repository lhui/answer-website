"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Binary",l={unversionedId:"Installation/binary",id:"Installation/binary",title:"Binary",description:"If you want to install and deploy in binary mode, you need a database environment, such as mysql.",source:"@site/docs/03-Installation/03-binary.md",sourceDirName:"03-Installation",slug:"/Installation/binary",permalink:"/docs/Installation/binary",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Docker",permalink:"/docs/Installation/docker"},next:{title:"Design principles",permalink:"/docs/Core Concepts/Design-principles"}},c={},p=[{value:"Install Answer using binary",id:"install-answer-using-binary",level:2},{value:"Notice",id:"notice",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary"},"Binary"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to install and deploy in binary mode, you need a database environment, such as mysql.")),(0,a.kt)("h2",{id:"install-answer-using-binary"},"Install Answer using binary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download and unzip the compressed package.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to enter the directory you just created.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"./answer init -C ./data/"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Answer will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"./data/")," directory in the current directory")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"vim ./data/conf/config.yaml"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the database connection address to your database connection address"),(0,a.kt)("p",{parentName:"li"},"connection: ","[username]",":","[password]","@tcp(","[host]",":","[port]",")/","[database]")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute run command ",(0,a.kt)("inlineCode",{parentName:"p"},"./answer run -c ./data/conf/config.yaml")))),(0,a.kt)("h3",{id:"notice"},"Notice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For other commands, please refer to ",(0,a.kt)("a",{parentName:"li",href:"../Usage/command"},"command"))))}d.isMDXComponent=!0}}]);