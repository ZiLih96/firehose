"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[854],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=f(a),p=o,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var f=2;f<r;f++)i[f]=a[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8578:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Offset manager",f={unversionedId:"concepts/offsets",id:"concepts/offsets",title:"Offset manager",description:"Every kafka message has an incremental offset. Kafka API has method to commit offsets given as arguments. If a larger",source:"@site/docs/concepts/offsets.md",sourceDirName:"concepts",slug:"/concepts/offsets",permalink:"/firehose/concepts/offsets",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/concepts/offsets.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Decorators",permalink:"/firehose/concepts/decorators"},next:{title:"Monitoring",permalink:"/firehose/concepts/monitoring"}},c={},m=[{value:"Implementation",id:"implementation",level:2},{value:"Data Structures",id:"data-structures",level:3},{value:"Adding offsets",id:"adding-offsets",level:3},{value:"Setting a batch to be Committable.",id:"setting-a-batch-to-be-committable",level:3},{value:"Getting Committable offsets",id:"getting-committable-offsets",level:3}],u={toc:m};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"offset-manager"},"Offset manager"),(0,r.kt)("p",null,"Every kafka message has an incremental offset. Kafka API has method to commit offsets given as arguments. If a larger\noffset is committed, lower offsets are considered to be automatically committed."),(0,r.kt)("p",null,"Offset manager is a data structure which calculates committable offsets for each partition.\nTo use offset manager:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add message(s) with metadata about offset and partition with a batch key.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add offsets into a sorted map with committable flag to be false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addOffsetToBatch(Object batch, List<Message> messages)")))),(0,r.kt)("li",{parentName:"ul"},"set messages to be committable once the processing is finished.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setCommittable(Object batch)")," to set the committable flag to be true."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getCommittableOffset()")," returns the largest offset that can be committed.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("h3",{id:"data-structures"},"Data Structures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OffsetNode: A combination of topic, partition and the offset."),(0,r.kt)("li",{parentName:"ul"},"toBeCommittableBatchOffsets: A map of batch-keys and a set of OffsetNodes."),(0,r.kt)("li",{parentName:"ul"},"sortedOffsets: A map of topic-partition to a sorted list of OffsetNode.")),(0,r.kt)("h3",{id:"adding-offsets"},"Adding offsets"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"addOffsetToBatch(Object batch, List<Message> messages)")," is called, it creates a OffsetNode from the message.\nEach Topic-Partition has a sorted list by offsets. The OffsetNode is added into this sorted list.\nOffsetNode is also added into the map keyed by provided key."),(0,r.kt)("h3",{id:"setting-a-batch-to-be-committable"},"Setting a batch to be Committable."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setCommittable(Object batch)")," sets a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"isCommittable")," to be true on each\nOffsetNode on the batch. It also removes from the map ",(0,r.kt)("inlineCode",{parentName:"p"},"toBeCommittableBatchOffsets"),"."),(0,r.kt)("h3",{id:"getting-committable-offsets"},"Getting Committable offsets"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getCommittableOffset()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For each topic-partition:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Look for the contiguous offsets in the sorted list which are set to be committed."),(0,r.kt)("li",{parentName:"ul"},"Return the largest offset from the contiguous series."),(0,r.kt)("li",{parentName:"ul"},"Delete smaller OffsetNodes from the sorted list.")))))}p.isMDXComponent=!0}}]);