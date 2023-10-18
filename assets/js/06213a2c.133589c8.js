"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[530],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(4137));const a={},l="$project",o={unversionedId:"simple-queries/project",id:"simple-queries/project",title:"$project",description:"Including fields in a projection",source:"@site/docs/30-simple-queries/3-project.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/project",permalink:"/aggregation-pipeline-lab/docs/simple-queries/project",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/3-project.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$match",permalink:"/aggregation-pipeline-lab/docs/simple-queries/match"},next:{title:"$limit",permalink:"/aggregation-pipeline-lab/docs/simple-queries/limiting-results"}},s={},p=[{value:"Including fields in a projection",id:"including-fields-in-a-projection",level:2},{value:"Excluding fields",id:"excluding-fields",level:2},{value:"Including and excluding fields",id:"including-and-excluding-fields",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project"},"$project"),(0,r.kt)("h2",{id:"including-fields-in-a-projection"},"Including fields in a projection"),(0,r.kt)("p",null,"A document from the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," collection looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  _id: '0395623650',\n  title: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  authors: [\n    {\n      _id: '64cc2db4830ba29148db5180',\n      name: 'Juan Ram\xf3n Jim\xe9nez'\n    }\n  ],\n  pages: 64,\n  year: 1994,\n  synopsis: 'Selections from a classic of world literature present a picture of life in the town of Moguer, in Andalusia, Spain.\\n' +\n    '\\n' +\n    '\\n' +\n    '                        Presents a picture of life in the town of Moguer, in Andalusia, Spain, as seen through the eyes of a wandering poet and his faithful donkey.\\n',\n  cover: 'https://images.isbndb.com/covers/36/57/9780395623657.jpg',\n  attributes: [\n    {\n      key: 'edition',\n      value: 'F First Edition Thus'\n    },\n    {\n      key: 'dimensions',\n      value: 'Height: 10.499979 Inches, Length: 6.999986 Inches, Weight: 2.0502990366 Pounds, Width: 0.12499975 Inches'\n    },\n    {\n      key: 'isbn13',\n      value: '9780395623657'\n    },\n    {\n      key: 'msrp',\n      value: 1.99\n    },\n    {\n      key: 'isbn',\n      value: '0395623650'\n    },\n    {\n      key: 'isbn10',\n      value: '0395623650'\n    }\n  ],\n  totalInventory: 1,\n  available: 1,\n  binding: 'Hardcover',\n  language: 'en',\n  longTitle: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  publisher: 'Clarion Books'\n}\n")),(0,r.kt)("p",null,"If we're interested just in the titles, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$project")," to select just the fields we're interested in. As an example, to get just the book's title and year we'll write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title: 1, year: 1}}])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'1 means "show that field"'),(0,r.kt)("li",{parentName:"ul"},'0 means "hide that field"'),(0,r.kt)("li",{parentName:"ul"},"the primary key ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," field is shown by default")),(0,r.kt)("p",null,"So we can exclude fields and show all fields except ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {attributes: 0}}])\n")),(0,r.kt)("p",null,"\ud83d\udcbb Show only ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cover"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, cover: 1}}])\n")))),(0,r.kt)("h2",{id:"excluding-fields"},"Excluding fields"),(0,r.kt)("p",null,"\ud83d\udcbb Exclude the ",(0,r.kt)("inlineCode",{parentName:"p"},"cover"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," fields from the result."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {_id :0, attributes: 0, cover: 0}}])\n")))),(0,r.kt)("h2",{id:"including-and-excluding-fields"},"Including and excluding fields"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You can't include and exclude fields in the same projection: if you start including, you must keep including and vice versa.")),(0,r.kt)("p",null,"For instance, this will fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, attributes: 0}}])\n\nMongoServerError: Invalid $project :: caused by :: Cannot do exclusion on field attributes in inclusion projection\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The only exception to this rule is the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field, which we can exclude in an inclusion projection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, _id: 0}}])\n")))}u.isMDXComponent=!0}}]);