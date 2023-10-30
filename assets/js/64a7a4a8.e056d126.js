"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[285],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(5773),r=(a(7378),a(5318));const o={title:"Database schema",sidebar_position:63},i=void 0,s={unversionedId:"schema",id:"schema",title:"Database schema",description:"By default, Graphile Worker installs its tables and functions into a database",source:"@site/docs/schema.md",sourceDirName:".",slug:"/schema",permalink:"/docs/schema",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/schema.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{title:"Database schema",sidebar_position:63},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/docs/library/logger"},next:{title:"TypeScript",permalink:"/docs/typescript"}},l={},c=[{value:"Only use public APIs",id:"only-use-public-apis",level:2},{value:"Tracking jobs",id:"tracking-jobs",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, Graphile Worker installs its tables and functions into a database\nschema (namespace) called ",(0,r.kt)("inlineCode",{parentName:"p"},"graphile_worker"),", though this is configurable."),(0,r.kt)("h2",{id:"only-use-public-apis"},"Only use public APIs"),(0,r.kt)("p",null,"You should interact with Graphile Worker using the APIs documented in this\nwebsite (such as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql-add-job"},(0,r.kt)("inlineCode",{parentName:"a"},"graphile_worker.add_job()")," function"),"\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-functions"},"administrative functions"),", and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/jobs-view"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"jobs")," view"),"). Database tables are not a public interface!"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use the various tables (",(0,r.kt)("inlineCode",{parentName:"p"},"_private_jobs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_private_job_queues"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"_private_known_crontabs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_private_tasks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations"),") directly. There are a\nfew reasons for this:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"The various tables may change in a minor version, breaking your assumptions\n(see, for example, the v0.13 \u27a1\ufe0f v0.14 or v0.15 \u27a1\ufe0f v0.16 big shifts)"),(0,r.kt)("li",{parentName:"ol"},"Reading from the jobs table (or the jobs view) impacts performance of the\nqueue ","\u2014"," especially when scanning over all records"),(0,r.kt)("li",{parentName:"ol"},"Reading from the jobs table inside a transaction prevents those jobs being\nworked on (they may be skipped over as if they don't exist) ","\u2014"," this can\nlead to unexpected results, such as out-of-order execution."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It should be safe to read from ",(0,r.kt)("a",{parentName:"p",href:"/docs/jobs-view"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"jobs")," view")," in a read\nreplica, but be aware that certain data such as locking information may be out\nof date or incorrect therein.")),(0,r.kt)("h2",{id:"tracking-jobs"},"Tracking jobs"),(0,r.kt)("p",null,'Should you need to track completed jobs or associate additional data with any\njobs, we suggest that you create a "shadow" table in your own application\'s\nschema in which you can store additional details.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create your own function to add jobs that delegates to\n",(0,r.kt)("inlineCode",{parentName:"li"},"graphile_worker.add_job(...)")," under the hood"),(0,r.kt)("li",{parentName:"ol"},'In your function, insert details of the job into your own "shadow" table'),(0,r.kt)("li",{parentName:"ol"},'If you want, add a reference from your "shadow" table to the\n',(0,r.kt)("inlineCode",{parentName:"li"},"graphile_worker._private_jobs")," table but be sure to add ",(0,r.kt)("inlineCode",{parentName:"li"},"ON DELETE CASCADE"),"\n(to delete the row) or ",(0,r.kt)("inlineCode",{parentName:"li"},"ON DELETE SET NULL")," (to nullify the job id column).\nNote that doing this has performance overhead for the queue, so you should be\nvery certain that you need it before doing it. Also this is a private table\nso its schema is likely to change, but you're only referencing the primary\nkey here so it should be fine."),(0,r.kt)("li",{parentName:"ol"},'Optionally, add the id of this "shadow" record into the job payload (before\ncalling ',(0,r.kt)("inlineCode",{parentName:"li"},"graphile_worker.add_job(...)"),'); then you can update this "shadow"\nrow from your task code. This is particularly useful to keep the end user\nabreast of the progress of their various background jobs, but is also useful\nfor tracking completed jobs (which Graphile Worker will delete on success).')))}u.isMDXComponent=!0}}]);