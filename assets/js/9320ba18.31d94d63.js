"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[621],{4137:(e,o,n)=>{n.d(o,{Zo:()=>u,kt:()=>k});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=p(e.components);return t.createElement(l.Provider,{value:o},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?t.createElement(k,i(i({ref:o},u),{},{components:n})):t.createElement(k,i({ref:o},u))}));function k(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8301:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(4137));const a={},i="Lookupups AKA Left Outer Join",s={unversionedId:"lookups/lookups",id:"lookups/lookups",title:"Lookupups AKA Left Outer Join",description:"Using Documents we usually model 1many relationships embedding documents inside other documents, even using arrays for that. For instance an Author can have many aliases, and they live inside an array in the authors collection.",source:"@site/docs/60-lookups/1-lookups.mdx",sourceDirName:"60-lookups",slug:"/lookups/lookups",permalink:"/aggregation-pipeline-lab/docs/lookups/lookups",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/60-lookups/1-lookups.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lookups / Joins",permalink:"/aggregation-pipeline-lab/docs/category/lookups--joins"},next:{title:"\ud83e\uddb8\u200d\u2642\ufe0f Advanced lookups",permalink:"/aggregation-pipeline-lab/docs/lookups/advanced-lookups"}},l={},p=[{value:"Lookups from a previous stage",id:"lookups-from-a-previous-stage",level:2}],u={toc:p},c="wrapper";function d(e){let{components:o,...n}=e;return(0,r.kt)(c,(0,t.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lookupups-aka-left-outer-join"},"Lookupups AKA Left Outer Join"),(0,r.kt)("p",null,"Using Documents we usually model 1:1, 1:many relationships embedding documents inside other documents, even using arrays for that. For instance an Author can have many aliases, and they live inside an array in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authors")," collection."),(0,r.kt)("p",null,"But other times we need to use references to those documents instead of embedding them. For instance an author has an array of the books she has written, but instead of moving the book documents inside an array inside author (which will be tricky for books with multiple authors) we embed the books ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," instead."),(0,r.kt)("p",null,"So how can we get the authors and all the books she has written, embedded in the array? Using ",(0,r.kt)("inlineCode",{parentName:"p"},"$lookup"),", that will do a Left Outer Join and return author docs containing book docs inside. "),(0,r.kt)("p",null,"\ud83d\udcbb Run this aggregation and look at the results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       as: "booksWritten"\n     } \n    },\n    {$project: {_id: 0}}\n])\n')),(0,r.kt)("p",null,"The syntax for this version of ",(0,r.kt)("inlineCode",{parentName:"p"},"$lookup")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n   $lookup:\n     {\n       from: <collection to join>,\n       localField: <field from the input documents>,\n       foreignField: <field from the documents of the "from" collection>,\n       as: <output array field>\n     }\n}\n')),(0,r.kt)("h2",{id:"lookups-from-a-previous-stage"},"Lookups from a previous stage"),(0,r.kt)("p",null,"We can do a $lookup on the result of another pipeline, not only joining with a collection. For instance, we want to remove some noise from the books before joining, so we use ",(0,r.kt)("inlineCode",{parentName:"p"},"$project")," to exclude a couple arrays."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline: [\n         {$project: {title: 1, synopsis: 1}}\n       ],\n       as: "booksWritten"\n     } \n    }\n])\n')),(0,r.kt)("p",null,"The nice part is that we can extract that pipeline and test it / tweak it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let justShowTitleSynopsis = [\n    {$project: {title: 1, synopsis: 1}},\n]\n\ndb.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline:\n          justShowTitleSynopsis,\n       as: "booksWritten"\n     } \n    }\n])\n')))}d.isMDXComponent=!0}}]);