"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[140],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5773),r=(n(7378),n(5318));const i={title:"Adding jobs through SQL",sidebar_position:70},o=void 0,l={unversionedId:"sql-add-job",id:"sql-add-job",title:"Adding jobs through SQL",description:"You can schedule jobs directly in the database, e.g. from a trigger or function,",source:"@site/docs/sql-add-job.md",sourceDirName:".",slug:"/sql-add-job",permalink:"/docs/sql-add-job",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/sql-add-job.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Adding jobs through SQL",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/docs/library/logger"},next:{title:"Job key",permalink:"/docs/job-key"}},p={},d=[{value:"<code>graphile_worker.add_job()</code>",id:"graphile_workeradd_job",level:2},{value:"Example: simple trigger",id:"example-simple-trigger",level:3},{value:"Example: one trigger function to rule them all",id:"example-one-trigger-function-to-rule-them-all",level:3},{value:"<code>graphile_worker.add_jobs()</code>",id:"graphile_workeradd_jobs",level:2}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can schedule jobs directly in the database, e.g. from a trigger or function,\nor by calling SQL from your application code. You do this using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphile_worker.add_job")," function (or the experimental\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphile_worker.add_jobs")," function for bulk inserts, see below)."),(0,r.kt)("h2",{id:"graphile_workeradd_job"},(0,r.kt)("inlineCode",{parentName:"h2"},"graphile_worker.add_job()")),(0,r.kt)("p",null,"NOTE: the ",(0,r.kt)("a",{parentName:"p",href:"#addjob"},(0,r.kt)("inlineCode",{parentName:"a"},"addJob"))," JavaScript method simply defers to this underlying\n",(0,r.kt)("inlineCode",{parentName:"p"},"add_job")," SQL function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"add_job")," accepts the following parameters (in this order):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identifier")," - the only ",(0,r.kt)("strong",{parentName:"li"},"required")," field, indicates the name of the task\nexecutor to run (omit the ",(0,r.kt)("inlineCode",{parentName:"li"},".js")," suffix!)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload"),' - a JSON object with information to tell the task executor what to\ndo, or an array of one or more of these objects for "batch jobs" (defaults to\nan empty object)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue_name")," - if you want certain tasks to run one at a time, add them to the\nsame named queue (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run_at")," - a timestamp after which to run the job; defaults to now."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_attempts")," - if this task fails, how many times should we retry it?\nDefault: ",(0,r.kt)("inlineCode",{parentName:"li"},"25"),". Must be castable to ",(0,r.kt)("inlineCode",{parentName:"li"},"smallint"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"job_key")," - unique identifier for the job, used to replace, update or remove\nit later if needed (see\n",(0,r.kt)("a",{parentName:"li",href:"#replacing-updating-and-removing-jobs"},"Replacing, updating and removing jobs"),");\ncan also be used for de-duplication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priority")," - an integer representing the jobs priority. Jobs are executed in\nnumerically ascending order of priority (jobs with a numerically smaller\npriority are run first). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),". Must be castable to ",(0,r.kt)("inlineCode",{parentName:"li"},"smallint"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flags")," - an optional text array (",(0,r.kt)("inlineCode",{parentName:"li"},"text[]"),") representing a flags to attach to\nthe job. Can be used alongside the ",(0,r.kt)("inlineCode",{parentName:"li"},"forbiddenFlags")," option in library mode to\nimplement complex rate limiting or other behaviors which requiring skipping\njobs at runtime (see ",(0,r.kt)("a",{parentName:"li",href:"#forbidden-flags"},"Forbidden flags"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"job_key_mode")," - when ",(0,r.kt)("inlineCode",{parentName:"li"},"job_key")," is specified, this setting indicates what\nshould happen when an existing job is found with the same job key:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," (default) - all job parameters are updated to the new values,\nincluding the ",(0,r.kt)("inlineCode",{parentName:"li"},"run_at")," (inserts new job if matching job is locked)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preserve_run_at")," - all job parameters are updated to the new values, except\nfor ",(0,r.kt)("inlineCode",{parentName:"li"},"run_at")," which maintains the previous value (inserts new job if matching\njob is locked)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsafe_dedupe")," - only inserts the job if no existing job (whether or not it\nis locked or has failed permanently) with matching key is found; does not\nupdate the existing job")))),(0,r.kt)("p",null,"Typically you'll want to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT graphile_worker.add_job(\n  'send_email',\n  json_build_object(\n    'to', 'someone@example.com',\n    'subject', 'graphile-worker test'\n  )\n);\n")),(0,r.kt)("p",null,"It's recommended that you use\n",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-syntax-calling-funcs.html#SQL-SYNTAX-CALLING-FUNCS-NAMED"},"PostgreSQL's named parameters"),"\nfor the other parameters so that you only need specify the arguments you're\nusing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT graphile_worker.add_job('reminder', run_at := NOW() + INTERVAL '2 days');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TIP"),": if you want to run a job after a variable number of seconds according\nto the database time (rather than the application time), you can use interval\nmultiplication; see ",(0,r.kt)("inlineCode",{parentName:"p"},"run_at")," in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT graphile_worker.add_job(\n  $1,\n  payload := $2,\n  queue_name := $3,\n  max_attempts := $4,\n  run_at := NOW() + ($5 * INTERVAL '1 second')\n);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"graphile_worker.add_job(...)")," requires database owner privileges to\nexecute. To allow lower-privileged users to call it, wrap it inside a PostgreSQL\nfunction marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"SECURITY DEFINER")," so that it will run with the same\nprivileges as the more powerful user that defined it. (Be sure that this\nfunction performs any access checks that are necessary.)"),(0,r.kt)("h3",{id:"example-simple-trigger"},"Example: simple trigger"),(0,r.kt)("p",null,"This snippet creates a trigger function which adds a job to execute\n",(0,r.kt)("inlineCode",{parentName:"p"},"task_identifier_here")," when a new row is inserted into ",(0,r.kt)("inlineCode",{parentName:"p"},"my_table"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION my_table_created() RETURNS trigger AS $$\nBEGIN\n  PERFORM graphile_worker.add_job('task_identifier_here', json_build_object('id', NEW.id));\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql VOLATILE;\n\nCREATE TRIGGER trigger_name AFTER INSERT ON my_table FOR EACH ROW EXECUTE PROCEDURE my_table_created();\n")),(0,r.kt)("h3",{id:"example-one-trigger-function-to-rule-them-all"},"Example: one trigger function to rule them all"),(0,r.kt)("p",null,"If your tables are all defined with a single primary key named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," then you can\ndefine a more convenient dynamic trigger function which can be called from\nmultiple triggers for multiple tables to quickly schedule jobs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION trigger_job() RETURNS trigger AS $$\nBEGIN\n  PERFORM graphile_worker.add_job(TG_ARGV[0], json_build_object(\n    'schema', TG_TABLE_SCHEMA,\n    'table', TG_TABLE_NAME,\n    'op', TG_OP,\n    'id', (CASE WHEN TG_OP = 'DELETE' THEN OLD.id ELSE NEW.id END)\n  ));\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql VOLATILE;\n")),(0,r.kt)("p",null,"You might use this trigger like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TRIGGER send_verification_email\n  AFTER INSERT ON user_emails\n  FOR EACH ROW\n  WHEN (NEW.verified is false)\n  EXECUTE PROCEDURE trigger_job('send_verification_email');\nCREATE TRIGGER user_changed\n  AFTER INSERT OR UPDATE OR DELETE ON users\n  FOR EACH ROW\n  EXECUTE PROCEDURE trigger_job('user_changed');\nCREATE TRIGGER generate_pdf\n  AFTER INSERT ON pdfs\n  FOR EACH ROW\n  EXECUTE PROCEDURE trigger_job('generate_pdf');\nCREATE TRIGGER generate_pdf_update\n  AFTER UPDATE ON pdfs\n  FOR EACH ROW\n  WHEN (NEW.title IS DISTINCT FROM OLD.title)\n  EXECUTE PROCEDURE trigger_job('generate_pdf');\n")),(0,r.kt)("h2",{id:"graphile_workeradd_jobs"},(0,r.kt)("inlineCode",{parentName:"h2"},"graphile_worker.add_jobs()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Experimental"),": this API may change in a semver minor release."),(0,r.kt)("p",null,"For bulk insertion of jobs, we've introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphile_worker.add_jobs"),"\nfunction. It accepts the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"specs")," - an array of ",(0,r.kt)("inlineCode",{parentName:"li"},"graphile_worker.job_spec")," objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"job_key_preserve_run_at")," - an optional boolean detailing if the ",(0,r.kt)("inlineCode",{parentName:"li"},"run_at"),"\nshould be preserved when the same ",(0,r.kt)("inlineCode",{parentName:"li"},"job_key")," is seen again")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"job_spec")," object has the following properties, all of which correspond with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"add_job")," option of the same name above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identifier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue_name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run_at")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_attempts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"job_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priority")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flags"))),(0,r.kt)("p",null,"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"job_key_mode='unsafe_dedupe'")," is not supported in ",(0,r.kt)("inlineCode",{parentName:"p"},"add_jobs")," - you must\nadd jobs one at a time using ",(0,r.kt)("inlineCode",{parentName:"p"},"add_job")," to use that. The equivalent of\n",(0,r.kt)("inlineCode",{parentName:"p"},"job_key_mode='replace'")," is enabled by default, to change this to the same\nbehavior as ",(0,r.kt)("inlineCode",{parentName:"p"},"job_key_mode='preserve_run_at'")," you should set\n",(0,r.kt)("inlineCode",{parentName:"p"},"job_key_preserve_run_at")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}m.isMDXComponent=!0}}]);