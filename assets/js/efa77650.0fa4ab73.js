"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[831],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,R=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?n.createElement(R,i(i({ref:r},p),{},{components:t})):n.createElement(R,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6307:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},u="Errors",c={unversionedId:"advance/errors",id:"advance/errors",title:"Errors",description:"These errors are returned by sinks. One can configure to which errors should be processed by which decorator. The error",source:"@site/docs/advance/errors.md",sourceDirName:"advance",slug:"/advance/errors",permalink:"/firehose/advance/errors",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/advance/errors.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Generic",permalink:"/firehose/advance/generic"},next:{title:"DLQ",permalink:"/firehose/advance/dlq"}},p={},s=[{value:"<code>ERROR_TYPES_FOR_FAILING</code>",id:"error_types_for_failing",level:2},{value:"<code>ERROR_TYPES_FOR_DLQ</code>",id:"error_types_for_dlq",level:2},{value:"<code>ERROR_TYPES_FOR_RETRY</code>",id:"error_types_for_retry",level:2}],d={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("p",null,"These errors are returned by sinks. One can configure to which errors should be processed by which decorator. The error\ntype are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DESERIALIZATION_ERROR"),(0,o.kt)("li",{parentName:"ul"},"INVALID_MESSAGE_ERROR"),(0,o.kt)("li",{parentName:"ul"},"UNKNOWN_FIELDS_ERROR"),(0,o.kt)("li",{parentName:"ul"},"SINK_4XX_ERROR"),(0,o.kt)("li",{parentName:"ul"},"SINK_5XX_ERROR"),(0,o.kt)("li",{parentName:"ul"},"SINK_UNKNOWN_ERROR"),(0,o.kt)("li",{parentName:"ul"},"DEFAULT_ERROR ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If no error is specified")))),(0,o.kt)("h2",{id:"error_types_for_failing"},(0,o.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_FAILING")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example value: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR,SINK_UNKNOWN_ERROR")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"optional")),(0,o.kt)("li",{parentName:"ul"},"Default value: ",(0,o.kt)("inlineCode",{parentName:"li"},"DESERIALIZATION_ERROR,INVALID_MESSAGE_ERROR,UNKNOWN_FIELDS_ERROR"))),(0,o.kt)("h2",{id:"error_types_for_dlq"},(0,o.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_DLQ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example value: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR,SINK_UNKNOWN_ERROR")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"optional")),(0,o.kt)("li",{parentName:"ul"},"Default value: ``")),(0,o.kt)("h2",{id:"error_types_for_retry"},(0,o.kt)("inlineCode",{parentName:"h2"},"ERROR_TYPES_FOR_RETRY")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example value: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"optional")),(0,o.kt)("li",{parentName:"ul"},"Default value: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEFAULT_ERROR"))))}f.isMDXComponent=!0}}]);