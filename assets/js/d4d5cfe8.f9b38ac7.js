"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[622],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1355:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={},i="Docker",c={unversionedId:"Installation/docker",id:"Installation/docker",title:"Docker",description:"Docker for Answer",source:"@site/docs/03-Installation/02-docker.md",sourceDirName:"03-Installation",slug:"/Installation/docker",permalink:"/docs/Installation/docker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Docker-compose",permalink:"/docs/Installation/docker-compose"},next:{title:"Binary",permalink:"/docs/Installation/binary"}},l={},s=[{value:"Docker for Answer",id:"docker-for-answer",level:2},{value:"Usage",id:"usage",level:3}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("h2",{id:"docker-for-answer"},"Docker for Answer"),(0,a.kt)("p",null,"Visit Docker Hub or GitHub Container registry to see all available images and tags."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To keep your data out of Docker container, we do a volume (/var/data -> /data) here, and you can change it based on your situation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Pull image from Docker Hub.\n$ docker pull answer/answer\n\n# Create local directory for volume.\n$ mkdir -p /var/data\n\n# Run the image first\n$ docker run --name=answer -p 9080:80 -v /var/data:/data answer/answer\n\n# After the first startup, a configuration file will be generated in the /var/data directory\n# /var/data/conf/config.yaml\n# Need to modify the Mysql database address in the configuration file\nvim /var/data/conf/config.yaml\n\n# Modify database connection\n# connection: [username]:[password]@tcp([host]:[port])/[DbName]\n...\n\n# After configuring the configuration file, you can start the mirror again to start the service\n$ docker start answer\n\n")))}d.isMDXComponent=!0}}]);