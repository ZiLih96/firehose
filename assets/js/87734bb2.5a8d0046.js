"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[902],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),f=l,c=m["".concat(u,".").concat(f)]||m[f]||d[f]||a;return t?i.createElement(c,r(r({ref:n},p),{},{components:t})):i.createElement(c,r({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6526:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=t(7462),l=t(3366),a=(t(7294),t(3905)),r=["components"],o={},u="InfluxDB",s={unversionedId:"sinks/influxdb-sink",id:"sinks/influxdb-sink",title:"InfluxDB",description:"InfluxDB is an open-source time series database developed by the company InfluxData.",source:"@site/docs/sinks/influxdb-sink.md",sourceDirName:"sinks",slug:"/sinks/influxdb-sink",permalink:"/firehose/sinks/influxdb-sink",draft:!1,editUrl:"https://github.com/odpf/firehose/edit/master/docs/docs/sinks/influxdb-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"BigQuery",permalink:"/firehose/sinks/bigquery-sink"},next:{title:"Prometheus",permalink:"/firehose/sinks/prometheus-sink"}},p={},d=[{value:"<code>SINK_INFLUX_URL</code>",id:"sink_influx_url",level:3},{value:"<code>SINK_INFLUX_USERNAME</code>",id:"sink_influx_username",level:3},{value:"<code>SINK_INFLUX_PASSWORD</code>",id:"sink_influx_password",level:3},{value:"<code>SINK_INFLUX_FIELD_NAME_PROTO_INDEX_MAPPING</code>",id:"sink_influx_field_name_proto_index_mapping",level:3},{value:"<code>SINK_INFLUX_TAG_NAME_PROTO_INDEX_MAPPING</code>",id:"sink_influx_tag_name_proto_index_mapping",level:3},{value:"<code>SINK_INFLUX_PROTO_EVENT_TIMESTAMP_INDEX</code>",id:"sink_influx_proto_event_timestamp_index",level:3},{value:"<code>SINK_INFLUX_DB_NAME</code>",id:"sink_influx_db_name",level:3},{value:"<code>SINK_INFLUX_RETENTION_POLICY</code>",id:"sink_influx_retention_policy",level:3},{value:"<code>SINK_INFLUX_MEASUREMENT_NAME</code>",id:"sink_influx_measurement_name",level:3}],m={toc:d};function f(e){var n=e.components,t=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"influxdb"},"InfluxDB"),(0,a.kt)("p",null,"InfluxDB is an open-source time series database developed by the company InfluxData."),(0,a.kt)("p",null,"An Influx sink Firehose ","(",(0,a.kt)("inlineCode",{parentName:"p"},"SINK_TYPE"),"=",(0,a.kt)("inlineCode",{parentName:"p"},"influxdb"),")"," requires the following variables to be set along with Generic ones"),(0,a.kt)("h3",{id:"sink_influx_url"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_URL")),(0,a.kt)("p",null,"InfluxDB URL, it's usually the hostname followed by port."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8086")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_username"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_USERNAME")),(0,a.kt)("p",null,"Defines the username to connect to DB."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"root")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_password"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_PASSWORD")),(0,a.kt)("p",null,"Defines the password to connect to DB."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"root")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_field_name_proto_index_mapping"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_FIELD_NAME_PROTO_INDEX_MAPPING")),(0,a.kt)("p",null,"Defines the mapping of fields and the corresponding proto index which can be used to extract the field value from the proto message. This is a JSON field. Note that Influx keeps a single value for each unique set of tags and timestamps. If a new value comes with the same tag and timestamp from the source, it will override the existing one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},'"2":"order_number","1":"service_type", "4":"status"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Proto field value with index 2 will be stored in a field named 'order_number' in Influx and so on\\"))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_tag_name_proto_index_mapping"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_TAG_NAME_PROTO_INDEX_MAPPING")),(0,a.kt)("p",null,"Defines the mapping of tags and the corresponding proto index from which the value for the tags can be obtained. If the tags contain existing fields from field name mapping it will not be overridden. They will be duplicated. If ENUMS are present then they must be added here. This is a JSON field."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},'{"6":"customer_id"}')),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"optional"))),(0,a.kt)("h3",{id:"sink_influx_proto_event_timestamp_index"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_PROTO_EVENT_TIMESTAMP_INDEX")),(0,a.kt)("p",null,"Defines the proto index of a field that can be used as the timestamp."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"5")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_db_name"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_DB_NAME")),(0,a.kt)("p",null,"Defines the InfluxDB database name where data will be dumped."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"status")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))),(0,a.kt)("h3",{id:"sink_influx_retention_policy"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_RETENTION_POLICY")),(0,a.kt)("p",null,"Defines the retention policy for influx database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"quarterly")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required")),(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"autogen"))),(0,a.kt)("h3",{id:"sink_influx_measurement_name"},(0,a.kt)("inlineCode",{parentName:"h3"},"SINK_INFLUX_MEASUREMENT_NAME")),(0,a.kt)("p",null,"This field is used to give away the name of the measurement that needs to be used by the sink. Measurement is another name for tables and it will be auto-created if does not exist at the time Firehose pushes the data to the influx."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example value: ",(0,a.kt)("inlineCode",{parentName:"li"},"customer-booking")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"required"))))}f.isMDXComponent=!0}}]);