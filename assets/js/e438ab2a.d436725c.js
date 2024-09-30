"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9617],{46959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(43010),i=n(90887);const r={slug:"/reputation"},o="Reputation",d={id:"guides/reputation",title:"Reputation",description:"Reputation used to automate the management of community ecology.",source:"@site/docs/guides/reputation.md",sourceDirName:"guides",slug:"/reputation",permalink:"/docs/reputation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/guides/reputation.md",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1727660274,formattedLastUpdatedAt:"Sep 30, 2024",frontMatter:{slug:"/reputation"},sidebar:"docs",previous:{title:"Permission",permalink:"/docs/permission"},next:{title:"Deploy subdirectory",permalink:"/docs/deploy-subdirectory"}},a={},c=[{value:"Reputation change rules",id:"reputation-change-rules",level:2},{value:"Additional rules",id:"additional-rules",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"reputation",children:"Reputation"}),"\n",(0,s.jsx)(t.p,{children:"Reputation used to automate the management of community ecology."}),"\n",(0,s.jsx)(t.h2,{id:"reputation-change-rules",children:"Reputation change rules"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Condition"}),(0,s.jsx)(t.th,{children:"Change"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Someone upvote your question"}),(0,s.jsx)(t.td,{children:"+10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Someone upvote your answer"}),(0,s.jsx)(t.td,{children:"+10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Someone accept your answer"}),(0,s.jsx)(t.td,{children:"+15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"You accept someone's answer"}),(0,s.jsx)(t.td,{children:"+2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Your proposed was accepted"}),(0,s.jsx)(t.td,{children:"+2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"You downvote someone's answer"}),(0,s.jsx)(t.td,{children:"-1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Your question was downvoted"}),(0,s.jsx)(t.td,{children:"-2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Your answer was downvoted"}),(0,s.jsx)(t.td,{children:"-2"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"additional-rules",children:"Additional rules"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The initial reputation is ",(0,s.jsx)(t.code,{children:"0"}),", after activation the reputation becomes ",(0,s.jsx)(t.code,{children:"1"})]}),"\n",(0,s.jsxs)(t.li,{children:["If there is an action that causes the user's reputation to be\xa0",(0,s.jsx)(t.code,{children:"< 1"}),", any subsequent actions that reduce the reputation will not reduce the user's reputation"]}),"\n",(0,s.jsxs)(t.li,{children:["Maximum of ",(0,s.jsx)(t.code,{children:"200"})," reputation per day"]}),"\n",(0,s.jsxs)(t.li,{children:["If an action results in a user gaining\xa0",(0,s.jsx)(t.code,{children:"> 200"}),"\xa0reputation for the day, any subsequent actions that increase reputation will not increase the user's reputation."]}),"\n",(0,s.jsxs)(t.li,{children:["The reputation gained from accepted answers is not limited by the ",(0,s.jsx)(t.code,{children:"200"})," cap"]}),"\n",(0,s.jsx)(t.li,{children:"No reputation gained for accepting your own answer"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},90887:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(85170);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);