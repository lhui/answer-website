"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4531],{76436:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(43010),o=t(90887);const l={slug:"/development/plugins/plugin-translation"},s="Plugin Translation",r={id:"development/plugins/plugin-translation",title:"Plugin Translation",description:"Since answer supports multiple languages, the plugin also needs to support multiple languages.",source:"@site/docs/development/plugins/plugin-translation.md",sourceDirName:"development/plugins",slug:"/development/plugins/plugin-translation",permalink:"/docs/development/plugins/plugin-translation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/development/plugins/plugin-translation.md",tags:[],version:"current",lastUpdatedBy:"Melody",lastUpdatedAt:1724916961,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{slug:"/development/plugins/plugin-translation"},sidebar:"docs",previous:{title:"Plugin Configuration Schema",permalink:"/docs/development/plugins/plugin-config"},next:{title:"Database",permalink:"/docs/database"}},a={},c=[{value:"Translator structure",id:"translator-structure",level:2},{value:"Translation file",id:"translation-file",level:2},{value:"Backend translation",id:"backend-translation",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"plugin-translation",children:"Plugin Translation"}),"\n",(0,i.jsx)(e.p,{children:"Since answer supports multiple languages, the plugin also needs to support multiple languages.\nThe following is an example of how to make your plugin support multiple languages."}),"\n",(0,i.jsx)(e.h2,{id:"translator-structure",children:"Translator structure"}),"\n",(0,i.jsxs)(e.p,{children:["In some plugins interface, you can see the ",(0,i.jsx)(e.code,{children:"Translator"})," structure, which is used to support multiple languages."]}),"\n",(0,i.jsxs)(e.p,{children:["For example, the ",(0,i.jsx)(e.code,{children:"ConfigField"})," structure has a ",(0,i.jsx)(e.code,{children:"Title"})," field of type ",(0,i.jsx)(e.code,{children:"Translator"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'type ConfigField struct {\n    Name        string               `json:"name"`\n    Type        ConfigType           `json:"type"`\n    Title       Translator           `json:"title"`\n    Description Translator           `json:"description"`\n    Required    bool                 `json:"required"`\n    Value       string               `json:"value"`\n    UIOptions   ConfigFieldUIOptions `json:"ui_options"`\n    Options     []ConfigFieldOption  `json:"options,omitempty"`\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["It's easy to build a ",(0,i.jsx)(e.code,{children:"Translator"})," structure, just like this:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'import (\n    "github.com/apache/incubator-answer/plugin"\n)\n\nplugin.MakeTranslator("plugin.github_connector.backend.name")\n'})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"plugin.github_connector.backend.name"})," is the key of the translation file, which will be introduced later."]}),"\n",(0,i.jsxs)(e.p,{children:["So, the first step is build a ",(0,i.jsx)(e.code,{children:"Translator"})," structure for each field that needs to be translated."]}),"\n",(0,i.jsx)(e.h2,{id:"translation-file",children:"Translation file"}),"\n",(0,i.jsxs)(e.p,{children:["Make directory ",(0,i.jsx)(e.code,{children:"i18n"})," in the root directory of your plugin, and then create a file named ",(0,i.jsx)(e.code,{children:"en_US.yaml"})," in it."]}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"en_US.yaml"})," file is used to store the English translation of the plugin."]}),"\n",(0,i.jsxs)(e.p,{children:["The content of the ",(0,i.jsx)(e.code,{children:"en_US.yaml"})," file is as follows:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"plugin:\n  github_connector:\n    backend:\n      name:\n        other: GitHub\n      info:\n        name:\n          other: GitHub Connector\n        description:\n          other: Connect to GitHub for third-party login\n      config:\n        client_id:\n          title:\n            other: ClientID\n          description:\n            other: Client ID of your GitHub application\n        client_secret:\n          title:\n            other: ClientSecret\n          description:\n            other: Client secret of your GitHub application\n    ui:\n      login:\n        title: Login with GitHub\n        description: Login with GitHub\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"plugin"})," is the root key of the translation file."]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"github_connector"})," is the name of the plugin."]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"backend"})," is translation for the backend. The end of key like ",(0,i.jsx)(e.code,{children:"other"})," is just for ",(0,i.jsx)(e.a,{href:"https://github.com/nicksnyder/go-i18n",children:"go-i18n"})," to recognize the translation file."]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"ui"})," is translation for the frontend."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["You can use the key like ",(0,i.jsx)(e.code,{children:"plugin.github_connector.backend.name"})," or ",(0,i.jsx)(e.code,{children:"plugin.github_connector.ui.login.title"})," for translation."]}),"\n",(0,i.jsxs)(e.p,{children:["Create a ",(0,i.jsx)(e.code,{children:"i18n.go"})," file in the root directory of your plugin, and then add the following code:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package i18n\n\nconst (\n    ConnectorName                 = "plugin.github_connector.backend.name"\n    InfoName                      = "plugin.github_connector.backend.info.name"\n    InfoDescription               = "plugin.github_connector.backend.info.description"\n    ConfigClientIDTitle           = "plugin.github_connector.backend.config.client_id.title"\n    ConfigClientIDDescription     = "plugin.github_connector.backend.config.client_id.description"\n    ConfigClientSecretTitle       = "plugin.github_connector.backend.config.client_secret.title"\n    ConfigClientSecretDescription = "plugin.github_connector.backend.config.client_secret.description"\n)\n'})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"i18n.go"})," file is used to store the key of the translation file."]}),"\n",(0,i.jsx)(e.p,{children:"The directory structure of the plugin is as follows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 github.go\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 i18n\n    \u251c\u2500\u2500 en_US.yaml\n    \u251c\u2500\u2500 translation.go\n    \u2514\u2500\u2500 zh_CN.yaml\n"})}),"\n",(0,i.jsx)(e.p,{children:"Finally, execute the following bash shell command to merge the plugin i18n files into the answer i18n runtime data."}),"\n",(0,i.jsx)(e.p,{children:"You can replace the environment variables with your own data or define them as needed."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go run ./cmd/answer/main.go i18n -s $PLUGIN_PATH -t $ANSWER_DATA_PATH\n"})}),"\n",(0,i.jsx)(e.p,{children:"Example:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go run ./cmd/answer/main.go i18n -s ../incubator-answer-plugins/ -t ./answer-data/i18n/\n"})}),"\n",(0,i.jsx)(e.h2,{id:"backend-translation",children:"Backend translation"}),"\n",(0,i.jsxs)(e.p,{children:["You just need to return ",(0,i.jsx)(e.code,{children:"Translator"})," structure with the key of the translation file."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (g *GitHubConnector) ConnectorName() plugin.Translator {\n    return plugin.MakeTranslator(i18n.ConnectorName)\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"Answer"})," will automatically translate the key of the translation file into the corresponding language."]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},90887:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var i=t(85170);const o={},l=i.createContext(o);function s(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);