"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[350],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(5773),o=(r(7378),r(5318));const i={title:"Project status",sidebar_position:160},a=void 0,c={unversionedId:"project-status",id:"project-status",title:"Project status",description:"Production ready (and used in production).",source:"@site/docs/project-status.md",sourceDirName:".",slug:"/project-status",permalink:"/docs/project-status",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/project-status.md",tags:[],version:"current",sidebarPosition:160,frontMatter:{title:"Project status",sidebar_position:160},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/docker"},next:{title:"Contributing",permalink:"/docs/contributing"}},s={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Production ready (and used in production)."),(0,o.kt)("p",null,'We\'re still enhancing/iterating the library rapidly, hence the 0.x numbering;\nupdating to a new "minor" version (0.y) may require some small code\nmodifications, particularly to TypeScript type names; these are documented in\nthe changelog.'),(0,o.kt)("p",null,"To give feedback please raise an issue, or reach out\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/graphile"},"on Discord"),"."))}d.isMDXComponent=!0}}]);