"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro","href":"/aggregation-workshop/docs/intro","docId":"intro"},{"type":"category","label":"MongoDB Atlas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Get started with MongoDB Atlas","href":"/aggregation-workshop/docs/mongodb-atlas/get-started-atlas","docId":"mongodb-atlas/get-started-atlas"},{"type":"link","label":"Import Library data","href":"/aggregation-workshop/docs/mongodb-atlas/prerequisites","docId":"mongodb-atlas/prerequisites"}],"href":"/aggregation-workshop/docs/category/mongodb-atlas"},{"type":"category","label":"The Aggregation Pipeline","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is an Aggregation Pipeline","href":"/aggregation-workshop/docs/what-is-aggregation/what-is-aggregation","docId":"what-is-aggregation/what-is-aggregation"},{"type":"link","label":"SQL vs Aggregations","href":"/aggregation-workshop/docs/what-is-aggregation/sql-vs-aggregation","docId":"what-is-aggregation/sql-vs-aggregation"},{"type":"link","label":"Structure of an aggregation pipeline","href":"/aggregation-workshop/docs/what-is-aggregation/structure-aggregation","docId":"what-is-aggregation/structure-aggregation"}],"href":"/aggregation-workshop/docs/category/the-aggregation-pipeline"},{"type":"category","label":"Simple queries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using the library database","href":"/aggregation-workshop/docs/simple-queries/using-library-database","docId":"simple-queries/using-library-database"},{"type":"link","label":"Empty aggregation pipeline","href":"/aggregation-workshop/docs/simple-queries/empty-aggregation","docId":"simple-queries/empty-aggregation"},{"type":"link","label":"$match","href":"/aggregation-workshop/docs/simple-queries/match","docId":"simple-queries/match"},{"type":"link","label":"$project","href":"/aggregation-workshop/docs/simple-queries/project","docId":"simple-queries/project"},{"type":"link","label":"$limit","href":"/aggregation-workshop/docs/simple-queries/limiting-results","docId":"simple-queries/limiting-results"},{"type":"link","label":"Combining stages","href":"/aggregation-workshop/docs/simple-queries/combining-them-all","docId":"simple-queries/combining-them-all"},{"type":"link","label":"Writing long pipelines","href":"/aggregation-workshop/docs/simple-queries/writing-long-pipelines","docId":"simple-queries/writing-long-pipelines"},{"type":"link","label":"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages","href":"/aggregation-workshop/docs/simple-queries/repeating-stages","docId":"simple-queries/repeating-stages"},{"type":"link","label":"\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options","href":"/aggregation-workshop/docs/simple-queries/aggregation-options","docId":"simple-queries/aggregation-options"}],"href":"/aggregation-workshop/docs/category/simple-queries"},{"type":"category","label":"Counting and Sorting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"$count","href":"/aggregation-workshop/docs/counting-sorting/counting-documents","docId":"counting-sorting/counting-documents"},{"type":"link","label":"Sorting","href":"/aggregation-workshop/docs/counting-sorting/sorting","docId":"counting-sorting/sorting"}],"href":"/aggregation-workshop/docs/category/counting-and-sorting"},{"type":"category","label":"Using Arrays","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Array queries","href":"/aggregation-workshop/docs/using-arrays/simple-match-array","docId":"using-arrays/simple-match-array"},{"type":"link","label":"Searching inside Objects in arrays","href":"/aggregation-workshop/docs/using-arrays/search-inside-objects-in-arrays","docId":"using-arrays/search-inside-objects-in-arrays"}],"href":"/aggregation-workshop/docs/category/using-arrays"},{"type":"category","label":"Lookups / Joins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lookupups AKA Left Outer Join","href":"/aggregation-workshop/docs/lookups/lookups","docId":"lookups/lookups"}],"href":"/aggregation-workshop/docs/category/lookups--joins"},{"type":"category","label":"Modifying results","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Adding new fields to results","href":"/aggregation-workshop/docs/modifying-results/adding-fields","docId":"modifying-results/adding-fields"},{"type":"link","label":"Missing Data","href":"/aggregation-workshop/docs/modifying-results/missing-data","docId":"modifying-results/missing-data"}],"href":"/aggregation-workshop/docs/category/modifying-results"},{"type":"category","label":"Exporting Data","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Saving to a collection","href":"/aggregation-workshop/docs/exporting-data/saving-to-collection","docId":"exporting-data/saving-to-collection"}],"href":"/aggregation-workshop/docs/category/exporting-data"},{"type":"link","label":"\ud83d\udcd8 Lecture material","href":"/aggregation-workshop/docs/lecture-material","docId":"lecture-material"},{"type":"link","label":"\ud83c\udfaf Summary","href":"/aggregation-workshop/docs/summary","docId":"summary"}]},"docs":{"counting-sorting/counting-documents":{"id":"counting-sorting/counting-documents","title":"$count","description":"How can we be sure that this pipeline is returning exactly 10 books?","sidebar":"tutorialSidebar"},"counting-sorting/sorting":{"id":"counting-sorting/sorting","title":"Sorting","description":"We can sort our results using the $sort stage. We need to sort on a field, being 1 ascending and -1 descending order.","sidebar":"tutorialSidebar"},"exporting-data/saving-to-collection":{"id":"exporting-data/saving-to-collection","title":"Saving to a collection","description":"You can export the result of an aggregation pipeline to a different DB / Collection","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Intro","description":"|Workshop goals|Learn about Aggregation Pipelines writing Aggregation Pipelines|","sidebar":"tutorialSidebar"},"lecture-material":{"id":"lecture-material","title":"\ud83d\udcd8 Lecture material","description":"|||","sidebar":"tutorialSidebar"},"lookups/lookups":{"id":"lookups/lookups","title":"Lookupups AKA Left Outer Join","description":"","sidebar":"tutorialSidebar"},"modifying-results/adding-fields":{"id":"modifying-results/adding-fields","title":"Adding new fields to results","description":"We want to estimate the reading time for a book. But we don\'t have that field stored in our data.","sidebar":"tutorialSidebar"},"modifying-results/missing-data":{"id":"modifying-results/missing-data","title":"Missing Data","description":"","sidebar":"tutorialSidebar"},"mongodb-atlas/get-started-atlas":{"id":"mongodb-atlas/get-started-atlas","title":"Get started with MongoDB Atlas","description":"MongoDB Atlas is a data platform, designed for developers, which integrates a multi-cloud database with various data services. It simplifies the process of database deployment and management while facilitating the development of modern data-driven application.","sidebar":"tutorialSidebar"},"mongodb-atlas/prerequisites":{"id":"mongodb-atlas/prerequisites","title":"Import Library data","description":"We\'ll import a library dataset, with Author, Book and reviews information.","sidebar":"tutorialSidebar"},"simple-queries/aggregation-options":{"id":"simple-queries/aggregation-options","title":"\ud83e\uddb8\u200d\u2642\ufe0f Aggregation options","description":"Extra activity, do it if you have extra time or are following at home, won\'t be covered during the hands-on Lab","sidebar":"tutorialSidebar"},"simple-queries/combining-them-all":{"id":"simple-queries/combining-them-all","title":"Combining stages","description":"Up until now, we\'ve just been using one stage in the pipeline. But the power of the aggregation pipeline is that we can use many stages, and the output of one will be the input of the next. Think of it as UNIX pipes or using functional programming with map, filter, reduce, flatmap, etc.","sidebar":"tutorialSidebar"},"simple-queries/empty-aggregation":{"id":"simple-queries/empty-aggregation","title":"Empty aggregation pipeline","description":"An empty aggregation","sidebar":"tutorialSidebar"},"simple-queries/limiting-results":{"id":"simple-queries/limiting-results","title":"$limit","description":"If we return too many documents, but we\'re interested just in a few, we can limit the number of documents returned using $limit","sidebar":"tutorialSidebar"},"simple-queries/match":{"id":"simple-queries/match","title":"$match","description":"This is the simplest one, similar to the WHERE SQL clause.","sidebar":"tutorialSidebar"},"simple-queries/project":{"id":"simple-queries/project","title":"$project","description":"Including fields in a projection","sidebar":"tutorialSidebar"},"simple-queries/repeating-stages":{"id":"simple-queries/repeating-stages","title":"\ud83e\uddb8\u200d\u2642\ufe0f Repeating stages","description":"Extra activity, do it if you have extra time or are following at home, won\'t be covered during the hands-on Lab","sidebar":"tutorialSidebar"},"simple-queries/using-library-database":{"id":"simple-queries/using-library-database","title":"Using the library database","description":"Select the library database","sidebar":"tutorialSidebar"},"simple-queries/writing-long-pipelines":{"id":"simple-queries/writing-long-pipelines","title":"Writing long pipelines","description":"Aggregation pipelines can get very long, depending on how many stages we need to run. Writing a pipeline is writing code, as you will write it using one of the many MongoDB drivers in your own language. Here we\'re presenting the examples using JavaScript suitable for the MongoDB Shell mongosh, but if you are writing a microservice in Rust, you\'ll definitely write your pipelines in Rust.","sidebar":"tutorialSidebar"},"summary":{"id":"summary","title":"\ud83c\udfaf Summary","description":"Congratulations! Following this tutorial, you have successfully:","sidebar":"tutorialSidebar"},"using-arrays/search-inside-objects-in-arrays":{"id":"using-arrays/search-inside-objects-in-arrays","title":"Searching inside Objects in arrays","description":"In our books we\'re using the Attribute Pattern to have different attributes in our documents. As we can see in the sample doc we have an attributes array, containing several objects, each with the same structure:","sidebar":"tutorialSidebar"},"using-arrays/simple-match-array":{"id":"using-arrays/simple-match-array","title":"Simple Array queries","description":"Find data in arrays","sidebar":"tutorialSidebar"},"what-is-aggregation/sql-vs-aggregation":{"id":"what-is-aggregation/sql-vs-aggregation","title":"SQL vs Aggregations","description":"Let\'s compare SQL with an Aggregation Pipeline","sidebar":"tutorialSidebar"},"what-is-aggregation/structure-aggregation":{"id":"what-is-aggregation/structure-aggregation","title":"Structure of an aggregation pipeline","description":"See the parts that compose an Aggregation Pipeline","sidebar":"tutorialSidebar"},"what-is-aggregation/what-is-aggregation":{"id":"what-is-aggregation/what-is-aggregation","title":"What is an Aggregation Pipeline","description":"Learn what is an Aggregation Pipeline","sidebar":"tutorialSidebar"}}}')}}]);