"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1683],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(4250),i=(n(9496),n(9613));const l={sidebar_label:"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784",sidebar_position:0},o="\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784",a={unversionedId:"development/extending/plugin_config",id:"development/extending/plugin_config",title:"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784",description:"\u529f\u80fd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extending/plugin_config.md",sourceDirName:"development/extending",slug:"/development/extending/plugin_config",permalink:"/zh-CN/docs/development/extending/plugin_config",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6",permalink:"/zh-CN/docs/development/extending/"},next:{title:"\u63d2\u4ef6\u7ffb\u8bd1",permalink:"/zh-CN/docs/development/extending/plugin_translation"}},p={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u540e\u7aef\u548c\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458",id:"\u540e\u7aef\u548c\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458",level:3},{value:"\u524d\u7aef",id:"\u524d\u7aef",level:3},{value:"GitHub \u8fde\u63a5\u5668\u63d2\u4ef6\u914d\u7f6e\u793a\u4f8b",id:"github-\u8fde\u63a5\u5668\u63d2\u4ef6\u914d\u7f6e\u793a\u4f8b",level:3},{value:"\u652f\u6301\u7684\u914d\u7f6e\u7c7b\u578b",id:"\u652f\u6301\u7684\u914d\u7f6e\u7c7b\u578b",level:3},{value:"\u652f\u6301\u7684\u914d\u7f6e\u8f93\u5165\u7c7b\u578b",id:"\u652f\u6301\u7684\u914d\u7f6e\u8f93\u5165\u7c7b\u578b",level:3}],c={toc:u};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784"},"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u63d2\u4ef6\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u4e00\u4e9b\u914d\u7f6e\u9879\u6765\u8bb0\u5f55\u63d2\u4ef6\u6240\u9700\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0cOAuth \u63d2\u4ef6\u9700\u8981\u914d\u7f6e\u5bc6\u94a5\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e9b\u914d\u7f6e\u9700\u8981\u7531\u5f00\u53d1\u4eba\u5458\u63cf\u8ff0\u5e76\u7531\u7528\u6237\u4f7f\u7528\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64\uff0c\u4ee5\u4e0b\u5185\u5bb9\u4ecb\u7ecd\u5982\u4f55\u63cf\u8ff0\u63d2\u4ef6\u6240\u9700\u7684\u914d\u7f6e\u3002")),(0,i.kt)("h3",{id:"\u540e\u7aef\u548c\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458"},"\u540e\u7aef\u548c\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u540e\u7aef\u6216\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u6211\u4eec\u4f7f\u7528\u4ee5\u4e0b\u7ed3\u6784\u6765\u63cf\u8ff0\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4f5c\u4e3a\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u4f60\u53ea\u9700\u8981\u6784\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"[]ConfigField")," \u7ed3\u6784\u5e76\u586b\u5199\u914d\u7f6e\u5185\u5bb9\uff0c\u4ee5\u63cf\u8ff0\u63d2\u4ef6\u6240\u9700\u7684\u914d\u7f6e\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type ConfigField struct {\n    Name        string               `json:"name"`\n    Type        ConfigType           `json:"type"`\n    Title       Translator           `json:"title"`\n    Description Translator           `json:"description"`\n    Required    bool                 `json:"required"`\n    Value       string               `json:"value"`\n    UIOptions   ConfigFieldUIOptions `json:"ui_options"`\n    Options     []ConfigFieldOption  `json:"options,omitempty"`\n}\n\ntype ConfigFieldUIOptions struct {\n    Placeholder Translator `json:"placeholder,omitempty"`\n    Rows        string     `json:"rows,omitempty"`\n    InputType   InputType  `json:"input_type,omitempty"`\n}\n\ntype ConfigFieldOption struct {\n    Label Translator `json:"label"`\n    Value string     `json:"value"`\n}\n')),(0,i.kt)("h3",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u524d\u7aef\uff0c\u6211\u4eec\u4f7f\u7528 JSON \u63cf\u8ff0\u548c\u5448\u73b0\u63d2\u4ef6\u7684\u914d\u7f6e\u9879\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "\u5e94\u8be5\u5728\u63d2\u4ef6\u4e2d\u552f\u4e00\u7684\u6b64\u914d\u7f6e\u7684\u952e",\n  "type": "\u6b64\u914d\u7f6e\u7684\u7c7b\u578b",\n  "title": "\u5c06\u663e\u793a\u7684\u6b64\u914d\u7f6e\u7684\u6807\u7b7e",\n  "description": "\u5c06\u663e\u793a\u7684\u914d\u7f6e\u8bf4\u660e",\n  "options,omitempty": [{"label": "Apple", "value": "apple"}],\n  "required": true,\n  "ui_options": {\n    "input_type": "\u8f93\u5165\u7c7b\u578b",\n    "placeholder": "\u5360\u4f4d\u7b26",\n    "rows": "\u7528\u4e8e textarea \u7684\u884c\u6570"\n  },\n  "value": "\u5c06\u4fdd\u5b58\u7684\u6b64\u914d\u7f6e\u7684\u503c"\n}\n')),(0,i.kt)("h3",{id:"github-\u8fde\u63a5\u5668\u63d2\u4ef6\u914d\u7f6e\u793a\u4f8b"},"GitHub \u8fde\u63a5\u5668\u63d2\u4ef6\u914d\u7f6e\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "client_id",\n        "type": "input",\n        "title": "ClientID",\n        "description": "GitHub \u5e94\u7528\u7a0b\u5e8f\u7684\u5ba2\u6237\u7aef ID\u3002",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    },\n    {\n        "name": "client_secret",\n        "type": "input",\n        "title": "ClientSecret",\n        "description": "GitHub \u5e94\u7528\u7a0b\u5e8f\u7684\u5ba2\u6237\u7aef\u5bc6\u94a5\u3002",\n        "required": true,\n        "ui_options": {\n            "input_type": "text"\n        }\n    }\n]\n')),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u7ba1\u7406\u9875\u9762\u4e0a\u6240\u5c55\u73b0\u7684\u60c5\u51b5\u3002\n",(0,i.kt)("img",{alt:"plugin-github-connector-config",src:n(6452).Z,width:"2648",height:"830"})),(0,i.kt)("h3",{id:"\u652f\u6301\u7684\u914d\u7f6e\u7c7b\u578b"},"\u652f\u6301\u7684\u914d\u7f6e\u7c7b\u578b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0d\u540c\u7684\u7c7b\u578b\u5c06\u5448\u73b0\u4e3a\u4e0d\u540c\u7684 UI\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"input"),(0,i.kt)("li",{parentName:"ul"},"textarea"),(0,i.kt)("li",{parentName:"ul"},"checkbox"),(0,i.kt)("li",{parentName:"ul"},"radio"),(0,i.kt)("li",{parentName:"ul"},"select"),(0,i.kt)("li",{parentName:"ul"},"upload"),(0,i.kt)("li",{parentName:"ul"},"timezone"),(0,i.kt)("li",{parentName:"ul"},"switch")),(0,i.kt)("h3",{id:"\u652f\u6301\u7684\u914d\u7f6e\u8f93\u5165\u7c7b\u578b"},"\u652f\u6301\u7684\u914d\u7f6e\u8f93\u5165\u7c7b\u578b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u4e0d\u540c\u683c\u5f0f\u7684\u8f93\u5165\u7c7b\u578b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"text"),(0,i.kt)("li",{parentName:"ul"},"color"),(0,i.kt)("li",{parentName:"ul"},"date"),(0,i.kt)("li",{parentName:"ul"},"datetime-local"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"month"),(0,i.kt)("li",{parentName:"ul"},"number"),(0,i.kt)("li",{parentName:"ul"},"password"),(0,i.kt)("li",{parentName:"ul"},"range"),(0,i.kt)("li",{parentName:"ul"},"search"),(0,i.kt)("li",{parentName:"ul"},"tel"),(0,i.kt)("li",{parentName:"ul"},"time"),(0,i.kt)("li",{parentName:"ul"},"url"),(0,i.kt)("li",{parentName:"ul"},"week")))}s.isMDXComponent=!0},6452:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin-github-connector-config-07bc10250eeffbadf333b16993113499.png"}}]);