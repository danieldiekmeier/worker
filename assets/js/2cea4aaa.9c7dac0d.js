"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[269],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(5773),a=(n(7378),n(5318));const o={title:"Forbidden flags",sidebar_position:110},i=void 0,l={unversionedId:"forbidden-flags",id:"forbidden-flags",title:"Forbidden flags",description:"When a job is created (or updated via job_key), you may set its flags to a",source:"@site/docs/forbidden-flags.md",sourceDirName:".",slug:"/forbidden-flags",permalink:"/docs/forbidden-flags",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/forbidden-flags.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Forbidden flags",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Administrative functions",permalink:"/docs/admin-functions"},next:{title:"Performance",permalink:"/docs/performance"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a job is created (or updated via ",(0,a.kt)("inlineCode",{parentName:"p"},"job_key"),"), you may set its ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," to a\nlist of strings. When the worker is run in library mode, you may pass the\n",(0,a.kt)("inlineCode",{parentName:"p"},"forbiddenFlags")," option to indicate that jobs with any of the given flags should\nnot be executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await run({\n  // ...\n  forbiddenFlags: forbiddenFlags,\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forbiddenFlags")," option can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"null"),(0,a.kt)("li",{parentName:"ul"},"an array of strings"),(0,a.kt)("li",{parentName:"ul"},"a function returning null or an array of strings"),(0,a.kt)("li",{parentName:"ul"},"an (async) function returning a promise that resolve to null or an array of\nstrings")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"forbiddenFlags")," is a function, ",(0,a.kt)("inlineCode",{parentName:"p"},"graphile-worker")," will invoke it each time a\nworker looks for a job to run, and will skip over any job that has any flag\nreturned by your function. You should ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"forbiddenFlags")," resolves\nquickly; it's advised that you maintain a cache you update periodically (e.g.\nonce a second) rather than always calculating on the fly, or use pub/sub or a\nsimilar technique to maintain the forbidden flags list."),(0,a.kt)("p",null,"For an example of how this can be used to achieve rate-limiting logic, see the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/politics-rewired/graphile-worker-rate-limiter"},"graphile-worker-rate-limiter project"),"\nand the discussion on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile/worker/issues/118"},"issue #118"),"."))}d.isMDXComponent=!0}}]);