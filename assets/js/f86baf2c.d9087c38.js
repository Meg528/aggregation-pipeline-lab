"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[930],{4822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(5893),a=r(1151),o=r(3992),s=r(425);const i={},l="\ud83d\udc50 Empty aggregation pipeline",u={id:"simple-queries/empty-aggregation",title:"\ud83d\udc50 Empty aggregation pipeline",description:"An empty aggregation",source:"@site/docs/30-simple-queries/1-empty-aggregation.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/empty-aggregation",permalink:"/aggregation-pipeline-lab/docs/simple-queries/empty-aggregation",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/1-empty-aggregation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Using the library database",permalink:"/aggregation-pipeline-lab/docs/simple-queries/using-library-database"},next:{title:"\ud83d\udc50 $match",permalink:"/aggregation-pipeline-lab/docs/simple-queries/match"}},c={},d=[{value:"An empty aggregation",id:"an-empty-aggregation",level:2},{value:"\ud83e\uddb8\u200d\u2642\ufe0f Cursor methods",id:"\ufe0f-cursor-methods",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:r,Screenshot:i}=t;return r||p("Details",!0),i||p("Screenshot",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-empty-aggregation-pipeline",children:"\ud83d\udc50 Empty aggregation pipeline"}),"\n",(0,n.jsx)(t.h2,{id:"an-empty-aggregation",children:"An empty aggregation"}),"\n",(0,n.jsxs)(t.p,{children:["This code is the equivalent to a ",(0,n.jsx)(t.code,{children:"SELECT * FROM AUTHORS"}),". Returns a ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/method/js-cursor/",children:"cursor"})," with all documents in the ",(0,n.jsx)(t.code,{children:"authors"})," collection:"]}),"\n",(0,n.jsxs)(o.Z,{groupId:"aggregations",children:[(0,n.jsxs)(s.Z,{value:"atlas",label:"Atlas UI",children:[(0,n.jsx)(i,{src:"/img/30-simple-queries/atlas-aggregation.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI showing an empty aggregation pipeline"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Open the ",(0,n.jsx)(t.code,{children:"Aggregation"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.code,{children:"Text"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Notice the empty array in the editor denoting an empty aggregation pipeline:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"[]\n"})})]}),(0,n.jsxs)(s.Z,{value:"mongodb-shell",label:"MongoDB Shell",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"db.authors.aggregate([])\n"})}),(0,n.jsxs)(t.p,{children:["We can iterate over the returned cursor and get more documents typing ",(0,n.jsx)(t.code,{children:"it"}),"."]}),(0,n.jsxs)(t.p,{children:["\ud83d\udc50 Return all the documents in the ",(0,n.jsx)(t.code,{children:"books"})," collection and iterate to get the next page of books."]}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"db.books.aggregate([])\nit\n"})})})]}),(0,n.jsx)(t.h2,{id:"\ufe0f-cursor-methods",children:"\ud83e\uddb8\u200d\u2642\ufe0f Cursor methods"}),(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab"})}),(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/method/js-cursor/",children:"cursor"})," has several useful methods, for instance we can check the size of the returned cursor with ",(0,n.jsx)(t.code,{children:"itcount"})]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"cursor.itcount()\n"})}),(0,n.jsx)(t.p,{children:"\ud83d\udc50 In our previous example with the empty aggregation, to check the size of the returned cursor, what should we type in?"}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// as db.books.aggregate([]) returns a cursor we can just call itcount() on it\ndb.books.aggregate([]).itcount()\n"})})})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},425:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},3992:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),a=r(6010),o=r(2957),s=r(6550),i=r(1270),l=r(5238),u=r(3609),c=r(2560);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=u??m;return g({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(5893);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(7294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);