"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),s=i,k=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const l={},r="Command-line",o={unversionedId:"Usage/command",id:"Usage/command",title:"Command-line",description:"Answer binary support some command-line options",source:"@site/docs/05-Usage/01-command.md",sourceDirName:"05-Usage",slug:"/Usage/command",permalink:"/docs/Usage/command",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Reputation",permalink:"/docs/Core Concepts/reputation"},next:{title:"Config-file",permalink:"/docs/Usage/configfile"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Global options",id:"global-options",level:2},{value:"Commands",id:"commands",level:2},{value:"init",id:"init",level:3},{value:"check",id:"check",level:3},{value:"run",id:"run",level:3},{value:"dump",id:"dump",level:3}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line"},"Command-line"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Answer binary support some command-line options")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"answer command [command or global options] [arguments...]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"To run answer, use:\n        - 'answer init' to initialize the required environment.\n        - 'answer run' to launch application.\n\nUsage:\n  answer [command]\n\nAvailable Commands:\n  check       checking the required environment\n  dump        back up data\n  help        Help about any command\n  init        init answer application\n  run         Run the application\n\nFlags:\n  -h, --help      help for answer\n  -v, --version   version for answer\n\nUse \"answer [command] --help\" for more information about a command.\n")),(0,i.kt)("h2",{id:"global-options"},"Global options"),(0,i.kt)("p",null,"All global options can be placed at the command level."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--help"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-h"),": Show help text and exit. Optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--version"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-v"),": Show version and exit. Optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config")," path, ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," path: configuration file path. Optional. (default: data/conf/config.yaml)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--data-path")," path, ",(0,i.kt)("inlineCode",{parentName:"li"},"-C")," path: data saved path. Optional. (default: /data/)")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"init command will initialize the application required environment, contains: default config-file, data directory, initialize database etc.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--data-path")," path, ",(0,i.kt)("inlineCode",{parentName:"li"},"-C")," path: data saved path. Optional. (default: /data/)"))),(0,i.kt)("li",{parentName:"ul"},"Examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer init -C ./data/")))),(0,i.kt)("li",{parentName:"ul"},"Notes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if answer already initialized, this command will not be executed. For example, if config file is already exist so it will not be created or overwritten."),(0,i.kt)("li",{parentName:"ul"},"if answer initialized failed, run command can not be executed.")))),(0,i.kt)("h3",{id:"check"},"check"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"check command will check the application whether it can run or not. check the config file if exist. check the database if connection can be established etc.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer check -c ./data/conf/config.yaml"))))),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"run command will run the application.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer run -c ./data/conf/config.yaml"))))),(0,i.kt)("h3",{id:"dump"},"dump"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"dump command will dump the database data to sql file.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--path")," path, ",(0,i.kt)("inlineCode",{parentName:"li"},"-p")," path: dump data path. Optional. (default: ./)"))),(0,i.kt)("li",{parentName:"ul"},"Examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer dump -p /tmp/"))))))}u.isMDXComponent=!0}}]);