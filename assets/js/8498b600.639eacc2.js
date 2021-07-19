(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9407:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:4},c="Compute first metrics",u={unversionedId:"getting_started/example_project/compute_first_metrics",id:"getting_started/example_project/compute_first_metrics",isDocsHomePage:!1,title:"Compute first metrics",description:"Now lets compute first metircs. On the start we want to turn on monitoring for all detected tables:",source:"@site/docs/getting_started/example_project/compute_first_metrics.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/compute_first_metrics",permalink:"/re-data/docs/getting_started/example_project/compute_first_metrics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/example_project/compute_first_metrics.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Detecting tables",permalink:"/re-data/docs/getting_started/example_project/detecting_tables"},next:{title:"Checking for anomalies",permalink:"/re-data/docs/getting_started/example_project/compute_anomalies"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compute-first-metrics"},"Compute first metrics"),(0,a.kt)("p",null,"Now lets compute first metircs. On the start we want to turn on monitoring for all detected tables:"),(0,a.kt)("p",null,"We do this just be running SQL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update toy_shop_re.re_data_tables set actively_monitored = true;\n")),(0,a.kt)("p",null,"Then we run monitoring, we choose to run it for first day of the 2021:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("p",null,"All of those contain metrics of our 3 tables. Let's just see how many orders/customers we have added in on 01-01-2021."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'        table_name        | column_name |  metric   | value |  time_window_start  |   time_window_end   |       computed_on\n--------------------------+-------------+-----------+-------+---------------------+---------------------+--------------------------\n "toy_shop"."customers"   |             | row_count |    15 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00 | 2021-07-15 11:36:50.7232\n "toy_shop"."order_items" |             | row_count |    48 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00 | 2021-07-15 11:36:50.7232\n "toy_shop"."orders"      |             | row_count |    20 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00 | 2021-07-15 11:36:50.7232\n')),(0,a.kt)("p",null,"We can of course inspect any of those metrics and it maybe also really usefull to write dbt tests for values we expect in those."),(0,a.kt)("p",null,"But now let's focus on finding out if there are any anomalies in our data."))}m.isMDXComponent=!0}}]);