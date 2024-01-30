"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[959],{6308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={},a="\ud83e\uddb8 Missing Data",r={id:"modifying-results/missing-data",title:"\ud83e\uddb8 Missing Data",description:"Sometimes we're missing a field we're looking for (it's not there, as documents in a collection can be polymorphic, so this field is null). For these cases we can check if something is there using $ifNull and add a default value in that case.",source:"@site/docs/80-modifying-results/missing-data.mdx",sourceDirName:"80-modifying-results",slug:"/modifying-results/missing-data",permalink:"/aggregation-pipeline-lab/docs/modifying-results/missing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/80-modifying-results/missing-data.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Adding new fields to results",permalink:"/aggregation-pipeline-lab/docs/modifying-results/adding-fields"},next:{title:"Exporting Data",permalink:"/aggregation-pipeline-lab/docs/category/exporting-data"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-missing-data",children:"\ud83e\uddb8 Missing Data"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes we're missing a field we're looking for (it's not there, as documents in a collection can be polymorphic, so this field is ",(0,i.jsx)(n.code,{children:"null"}),"). For these cases we can check if something is there using ",(0,i.jsx)(n.code,{children:"$ifNull"})," and add a default value in that case."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'let getAuthorsWithBooks = {\n    $project: {\n        name: 1,\n        books: { $ifNull: ["$books", []]},\n    }\n}\n\ndb.authors.aggregate([\n    getAuthorsWithBooks,\n])\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);