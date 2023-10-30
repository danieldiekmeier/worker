"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[350],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(5773),o=(n(7378),n(5318));const a={title:"Scaling tips"},i=void 0,l={unversionedId:"scaling",id:"scaling",title:"Scaling tips",description:"PostgreSQL is not what you'd build a job queue on if you're the size of",source:"@site/docs/scaling.md",sourceDirName:".",slug:"/scaling",permalink:"/docs/scaling",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/scaling.md",tags:[],version:"current",frontMatter:{title:"Scaling tips"},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/glossary"}},s={},u=[{value:"Keep your jobs table small",id:"keep-your-jobs-table-small",level:2},{value:"Use the latest Graphile Worker release",id:"use-the-latest-graphile-worker-release",level:2},{value:"Do the vacuuming",id:"do-the-vacuuming",level:2},{value:"Don&#39;t just jump to another queue!",id:"dont-just-jump-to-another-queue",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PostgreSQL is not what you'd build a job queue on if you're the size of\nFacebook... But you're not the size of Facebook, right?"),(0,o.kt)("p",null,"Postgres can get you pretty far, processing over 10,000 jobs per second in our\nbenchmarks. That's ",(0,o.kt)("strong",{parentName:"p"},"almost a billion jobs per day"),". Using Postgres as your job\nqueue via Graphile Worker can keep your infrastructure simple, enabling you to\nfocus less on infrastructure and more on getting your product's features to\nmarket. But to maintain this performance, there's some things you must keep in\nmind."),(0,o.kt)("h2",{id:"keep-your-jobs-table-small"},"Keep your jobs table small"),(0,o.kt)("p",null,"Graphile Worker relies on the jobs table being small. v0.14.0 brought some\nimprovements that made it deal better with larger jobs tables, but the fastest\ntable to scan over is an empty one!"),(0,o.kt)("p",null,"Graphile Worker automatically deletes jobs when they are complete to keep the\njobs table small; however if a job perma-fails we leave it so that you can debug\nwhy it happened and handle the failure."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Jobs should not perma-fail"),". Your job execution code should have its own\ninternal checks that recognize a repeated failure, and log it to the relevant\nplace and ",(0,o.kt)("em",{parentName:"p"},"successfully")," exit from the task, such that Graphile Worker deletes\nthe job. You should not store long term failures into the jobs table.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should clear up perma-failed jobs periodically")," - either figure out why\nthey failed, fix your task executor, and then reduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"attempts")," number of\nthe job so that it'll try again; or delete the jobs."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"A query like the following might be suitable for deleting the perma-failed jobs,\nbut be aware that ",(0,o.kt)("inlineCode",{parentName:"p"},"_private_jobs")," is a private table, so we may change its\nimplementation even in a patch release. If you run code like the following, it\nshould be ran by a human after inspecting the perma-failed jobs and figuring out\n",(0,o.kt)("em",{parentName:"p"},"why")," they failed. The underlying cause should be rectified."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from graphile_worker._private_jobs where attempts = max_attempts and locked_at is null;\n"))),(0,o.kt)("p",null,"Jobs scheduled to run in the future can also keep the number of jobs in the jobs\ntable higher, impacting peak performance. Be thoughtful about these tasks, and\nconsider batching if it becomes an issue."),(0,o.kt)("h2",{id:"use-the-latest-graphile-worker-release"},"Use the latest Graphile Worker release"),(0,o.kt)("p",null,"We're constantly trying to improve the performance of worker; not just the peak\nperformance in the best situations, but also the baseline performance when\nthings are not at their best. v0.14.0 brought some major performance\nimprovements when the job queue is full of future-scheduled or perma-failed\njobs, for example."),(0,o.kt)("h2",{id:"do-the-vacuuming"},"Do the vacuuming"),(0,o.kt)("p",null,"The jobs table has extremely high churn; find a quiet period and give it a nice\n",(0,o.kt)("inlineCode",{parentName:"p"},"VACUUM")," from time to time."),(0,o.kt)("p",null,"TODO: which ",(0,o.kt)("inlineCode",{parentName:"p"},"VACUUM")," options should we recommend? Any other tables to VACUUM?"),(0,o.kt)("h2",{id:"dont-just-jump-to-another-queue"},"Don't just jump to another queue!"),(0,o.kt)("p",null,"If you're thinking about moving to another worker (and, when you reach the scale\nto justify that, you should - generally start thinking about it when you're\ngetting to 5k+ jobs per second), I have plans that I've not had time to\nimplement w.r.t. batch exporting jobs to external queues. This may allow us to\nget 10x or even 100x the speed since Worker needs to do less - this would mean\nyou don't need to rewrite the code that calls Worker, just the tasks themselves\nwould be implemented in another queue. If/when this is of interest, get in\ntouch!"),(0,o.kt)("p",null,"Also if you are suffering some acute performance issue and you can replicate\nyour load onto a staging server or similar I'd love to run some experiments to\nsee if we can't squeeze more performance out of the system."))}c.isMDXComponent=!0}}]);