"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u="Contribution Process",l={unversionedId:"contribute/contribution",id:"contribute/contribution",title:"Contribution Process",description:"The following is a set of guidelines for contributing to Firehose. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. Here are some important resources:",source:"@site/docs/contribute/contribution.md",sourceDirName:"contribute",slug:"/contribute/contribution",permalink:"/firehose/contribute/contribution",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/contribute/contribution.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Glossary",permalink:"/firehose/reference/glossary"},next:{title:"Development Guide",permalink:"/firehose/contribute/development"}},c={},p=[{value:"What to contribute",id:"what-to-contribute",level:2},{value:"How can I contribute?",id:"how-can-i-contribute",level:2},{value:"Becoming a maintainer",id:"becoming-a-maintainer",level:2},{value:"Guidelines",id:"guidelines",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-process"},"Contribution Process"),(0,i.kt)("p",null,"The following is a set of guidelines for contributing to Firehose. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. Here are some important resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/firehose/guides/create_firehose"},"Concepts")," section will explain to you about Firehose architecture,"),(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/firehose/blob/main/docs/roadmap.md"},"roadmap")," is the 10k foot view of where we're going, and"),(0,i.kt)("li",{parentName:"ul"},"Github ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/firehose/issues"},"issues")," track the ongoing and reported issues.")),(0,i.kt)("p",null,"Development of Firehose happens in the open on GitHub, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Firehose."),(0,i.kt)("h2",{id:"what-to-contribute"},"What to contribute"),(0,i.kt)("p",null,"Your contribution might make it easier for other people to use this product. Better usability often means a bigger user base, which results in more contributors, which in turn can lead to higher-quality software in the long run."),(0,i.kt)("p",null,"You don\u2019t have to be a developer to make a contribution. We also need technical writers to improve our documentation and designers to make our interface more intuitive and attractive. In fact, We are actively looking for contributors who have these skill sets."),(0,i.kt)("p",null,"The following parts are open for contribution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding a new functionality"),(0,i.kt)("li",{parentName:"ul"},"Improve an existing functionality"),(0,i.kt)("li",{parentName:"ul"},"Adding a new sink"),(0,i.kt)("li",{parentName:"ul"},"Improve an existing sink"),(0,i.kt)("li",{parentName:"ul"},"Provide suggestions to make the user experience better"),(0,i.kt)("li",{parentName:"ul"},"Provide suggestions to Improve the documentation")),(0,i.kt)("p",null,"To help you get your feet wet and get you familiar with our contribution process, we have a list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/odpf/firehose/labels/good%20first%20issue"},"good first issues")," that contain bugs that have a relatively limited scope. This is a great place to get started."),(0,i.kt)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),(0,i.kt)("p",null,"We use RFCs and GitHub issues to communicate ideas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can report a bug or suggest a feature enhancement or can just ask questions. Reach out on Github discussions for this purpose."),(0,i.kt)("li",{parentName:"ul"},"You are also welcome to add a new sink, improve monitoring and logging and improve code quality."),(0,i.kt)("li",{parentName:"ul"},"You can help with documenting new features or improve existing documentation."),(0,i.kt)("li",{parentName:"ul"},"You can also review and accept other contributions if you are a maintainer.")),(0,i.kt)("p",null,"Please submit a PR to the main branch of the Firehose repository once you are ready to submit your contribution. Code submission to Firehose ","(","including a submission from project maintainers",")"," requires review and approval from maintainers or code owners. PRs that are submitted by the general public need to pass the build. Once the build is passed community members will help to review the pull request."),(0,i.kt)("h2",{id:"becoming-a-maintainer"},"Becoming a maintainer"),(0,i.kt)("p",null,"We are always interested in adding new maintainers. What we look for is a series of contributions, good taste, and an ongoing interest in the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"maintainers will have write access to the Firehose repositories."),(0,i.kt)("li",{parentName:"ul"},"There is no strict protocol for becoming a maintainer or PMC member. Candidates for new maintainers are typically people that are active contributors and community members."),(0,i.kt)("li",{parentName:"ul"},"Candidates for new maintainers can also be suggested by current maintainers or PMC members."),(0,i.kt)("li",{parentName:"ul"},"If you would like to become a maintainer, you should start contributing to Firehose in any of the ways mentioned. You might also want to talk to other maintainers and ask for their advice and guidance.")),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("p",null,"Please follow these practices for your change to get merged fast and smoothly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contributions can only be accepted if they contain appropriate testing ","(","Unit and Integration Tests",")","."),(0,i.kt)("li",{parentName:"ul"},"If you are introducing a completely new feature or making any major changes to an existing one, we recommend starting with an RFC and get consensus on the basic design first."),(0,i.kt)("li",{parentName:"ul"},"Make sure your local build is running with all the tests and checkstyle passing."),(0,i.kt)("li",{parentName:"ul"},"If your change is related to user-facing protocols/configurations, you need to make the corresponding change in the documentation as well."),(0,i.kt)("li",{parentName:"ul"},"Docs live in the code repo under ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/firehose/tree/7d0df99962507e6ad2147837c4536f36d52d5a48/docs/docs/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"docs"))," so that changes to that can be done in the same PR as changes to the code.")))}d.isMDXComponent=!0}}]);