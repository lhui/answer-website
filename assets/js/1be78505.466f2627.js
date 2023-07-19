"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9514,2709],{2709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(9496),l=n(3887),r=n(2895),o=n(5299);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},8523:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(9496),l=n(5745);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},871:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var a=n(9496),l=n(5924),r=n(8800),o=n(6134);n(8383);function i(e,t){return`docs-${e}-${t}`}var c=n(502),s=n(8523),d=n(7749),m=n(5299),u=n(3887),b=n(9697),p=n(8081);const h="backToTopButton_ntye",E="backToTopButtonShow_hf2P";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=n(8490),v=n(3442),_=n(800),k=n(3337),C=n(7493),I=n(4250);function S(e){return a.createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_JQG6",Z="collapseSidebarButtonIcon_Iseg";function x(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(S,{className:Z}))}var T=n(4935),w=n(5745);const y=Symbol("EmptyContext"),L=a.createContext(y);function A(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var M=n(4202),P=n(9746),F=n(4475),H=n(5515);function B(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function V(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,r),v=(0,P.Mg)(h,r),{collapsed:_,setCollapsed:C}=(0,M.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(L);if(e===y)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),N(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,w.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:_,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&C(!0)}),[b,S,s,C,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(F.Z,(0,I.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(B,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement($,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:i+1})))}var R=n(2899),W=n(4957);const D="menuExternalLink_NnFM";function z(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,r),E=(0,R.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(F.Z,(0,I.Z)({className:(0,l.Z)("menu__link",!E&&D,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const U="menuHtmlItem_PEWV";function Y(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(V,(0,I.Z)({item:t},n));case"html":return a.createElement(Y,(0,I.Z)({item:t},n));default:return a.createElement(z,(0,I.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(A,null,t.map(((e,t)=>a.createElement(q,(0,I.Z)({key:t,item:e,index:t},n)))))}const $=(0,a.memo)(G),j="menu_Y1UP",J="menuWithAnnouncementBar_fPny";function K(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",j,i&&J,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement($,{items:n,activePath:t,level:1})))}const O="sidebar_mhZE",Q="sidebarWithHideableNavbar__6UL",X="sidebarHidden__LRd",ee="sidebarLogo_F_0z";function te(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)(O,i&&Q,o&&X)},i&&a.createElement(C.Z,{tabIndex:-1,className:ee}),a.createElement(K,{path:t,sidebar:n}),c&&a.createElement(x,{onClick:r}))}const ne=a.memo(te);var ae=n(9569),le=n(8181);const re=e=>{let{sidebar:t,path:n}=e;const r=(0,le.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement($,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function oe(e){return a.createElement(ae.Zo,{component:re,props:e})}const ie=a.memo(oe);function ce(e){const t=(0,_.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ne,e),l&&a.createElement(ie,e))}const se="expandButton_pI3x",de="expandButtonIcon_Vtwu";function me(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:se,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:de}))}const ue={docSidebarContainer:"docSidebarContainer_rpaz",docSidebarContainerHidden:"docSidebarContainerHidden_wC1p",sidebarViewport:"sidebarViewport_YVHi"};function be(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,v.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,g.n)()&&s(!0),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&s(!0)}},a.createElement(be,null,a.createElement("div",{className:(0,l.Z)(ue.sidebarViewport,c&&ue.sidebarViewportHidden)},a.createElement(ce,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(me,{toggleSidebar:d}))))}const he={docMainContainer:"docMainContainer_RiV8",docMainContainerEnhanced:"docMainContainerEnhanced_u7bj",docItemWrapperEnhanced:"docItemWrapperEnhanced_mUgT"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!r)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const fe="docPage_qMb8",ge="docsWrapper_W2AM";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(2709),ke=n(4156);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:i(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ve,null,i)))))}}}]);