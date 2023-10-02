"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[530],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(7462),r=(t(7294),t(4137));const a={},o="$project",l={unversionedId:"simple-queries/project",id:"simple-queries/project",title:"$project",description:"Including fields in a projection",source:"@site/docs/30-simple-queries/3-project.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/project",permalink:"/aggregation-workshop/docs/simple-queries/project",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-workshop/blob/main/docs/30-simple-queries/3-project.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$match",permalink:"/aggregation-workshop/docs/simple-queries/match"},next:{title:"$limit",permalink:"/aggregation-workshop/docs/simple-queries/limiting-results"}},s={},d=[{value:"Including fields in a projection",id:"including-fields-in-a-projection",level:2},{value:"Excluding fields",id:"excluding-fields",level:2},{value:"Including and excluding fields",id:"including-and-excluding-fields",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project"},"$project"),(0,r.kt)("h2",{id:"including-fields-in-a-projection"},"Including fields in a projection"),(0,r.kt)("p",null,"A document from the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," collection looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  _id: '0765342502',\n  title: 'The Green Brain',\n  authors: [\n    {\n      _id: '64cc2db4830ba29148da52be',\n      name: 'Frank Herbert'\n    }\n  ],\n  pages: 224,\n  year: 2002,\n  synopsis: 'a Fascinating Examination Of The Fragile Balance Between Consciousness, Man, And Insect From One Of The Best-loved Science Fiction Creators Of All Time.',\n  cover: 'https://images.isbndb.com/covers/25/08/9780765342508.jpg',\n  attributes: [\n    {\n      key: 'edition',\n      value: '1st'\n    },\n    {\n      key: 'dimensions',\n      value: 'Height: 1.111 Inches, Length: 1.111 Inches, Weight: 0.2 Pounds, Width: 1.111 Inches'\n    },\n    {\n      key: 'isbn13',\n      value: '9780765342508'\n    },\n    {\n      key: 'msrp',\n      value: 6.99\n    },\n    {\n      key: 'isbn',\n      value: '0765342502'\n    },\n    {\n      key: 'isbn10',\n      value: '0765342502'\n    }\n  ],\n  totalInventory: 1,\n  available: 1,\n  binding: 'Mass Market Paperback',\n  language: 'en',\n  longTitle: 'The Green Brain',\n  publisher: 'Tor Books',\n  reviews: [\n    {\n      text: 'I absolutely loved this book! The characters were well-developed and the plot was gripping. The writing style was engaging and kept me hooked until the very end. Highly recommend!',\n      rating: 4,\n      name: 'Phoebe Silva',\n      timestamp: 2023-03-30T11:56:44.519Z,\n      _id: ObjectId(\"6511eb21ace76077e045b2d7\")\n    },\n    {\n      text: 'I really enjoyed this book. The story kept me engaged from beginning to end and the characters were well-developed. The writing style was captivating and the plot had several unexpected twists and turns. Overall, a great read that I would highly recommend!',\n      rating: 4,\n      name: '\u0639\u0631\u0634\u064a\u0627 \u06a9\u0648\u062a\u06cc',\n      timestamp: 2022-05-30T15:15:43.377Z,\n      _id: ObjectId(\"6511eb20ace76077e045b2d5\")\n    },\n    {\n      text: \"This book is an absolute masterpiece. The storytelling is captivating and the characters are so well-developed. I couldn't put it down and found myself fully immersed in the story from beginning to end. The writing style is beautiful and the plot twists kept me on the edge of my seat. I highly recommend this book to anyone who enjoys a thought-provoking and emotionally charged read. It's truly a gem!\",\n      rating: 5,\n      name: 'Malo Lecomte',\n      timestamp: 2021-08-27T20:34:33.710Z,\n      _id: ObjectId(\"6511eb21ace76077e045b2d6\")\n    }\n  ],\n  vectorizedSynopsis: [\n    0.020951554,\n    0.001816311,\n    0.00775048,\n    -0.01312131,\n    0.01894414,\n    0.006397802,\n    -0.027944269,\n}\n")),(0,r.kt)("p",null,"If we're interested just in the titles, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$project")," to select just the fields we're interested in. As an example, to get just the book's title and year we'll write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title: 1, year: 1}}])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'1 means "show that field"'),(0,r.kt)("li",{parentName:"ul"},'0 means "hide that field"'),(0,r.kt)("li",{parentName:"ul"},"the primary key ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," field is shown by default")),(0,r.kt)("p",null,"So we can exclude fields and show all fields except ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {attributes: 0}}])\n")),(0,r.kt)("p",null,"\ud83d\udcbb Show only ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cover"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, cover: 1}}])\n")))),(0,r.kt)("h2",{id:"excluding-fields"},"Excluding fields"),(0,r.kt)("p",null,"\ud83d\udcbb Exclude the ",(0,r.kt)("inlineCode",{parentName:"p"},"cover"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," fields from the result."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {_id_:0, attributes: 0, cover: 0}}])\n")))),(0,r.kt)("h2",{id:"including-and-excluding-fields"},"Including and excluding fields"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You can't include and exclude fields in the same projection: if you start including, you must keep including and vice versa.")),(0,r.kt)("p",null,"For instance, this will fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, attributes: 0}}])\n\nMongoServerError: Invalid $project :: caused by :: Cannot do exclusion on field attributes in inclusion projection\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The only exception to this rule is the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field, which we can exclude in an inclusion projection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([{$project: {title:1, _id: 0}}])\n")))}u.isMDXComponent=!0}}]);