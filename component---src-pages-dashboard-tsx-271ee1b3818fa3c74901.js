(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3AlC":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("ERkP");function o(e,t){var n=Object(r.useState)((function(){return{inputs:t,result:e()}}))[0],o=Object(r.useRef)(n),a=Boolean(t&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.current.inputs))?o.current:{inputs:t,result:e()};return Object(r.useEffect)((function(){o.current=a}),[a]),a.result}var a=o,i=function(e,t){return o((function(){return e}),t)}},"62Jv":function(e,t,n){var r=n("1nmM");r(r.S,"Number",{isInteger:n("xNBJ")})},"9OUN":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return u}));n("Qf75"),n("OPGF"),n("RT/e"),n("e5a8"),n("rSj+"),n("dXXY"),n("KXhL"),n("Rq2X"),n("43gM"),n("jdxj"),n("uydD"),n("Cwzy"),n("OksV"),n("he6s"),n("AF8K"),n("12ig"),n("odAc"),n("QHfF");var r=n("hE+J"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function i(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function m(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function b(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),l=null}}}function h(e){if(!i(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,h({type:a.REPLACE})}function g(){var e,t=b;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return h({type:a.INIT}),(o={dispatch:h,subscribe:b,getState:m,replaceReducer:v})[r.a]=g,o}function c(e,t){return function(){return t(e.apply(this,arguments))}}function s(e,t){if("function"==typeof e)return c(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=c(o,t))}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return d({},n,{dispatch:r=p.apply(void 0,a)(n.dispatch)})}}}},BFfR:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},PgQS:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f}));n("/KhS");var r=function(e,t){if(!e)throw new Error("Invariant failed")},o=function(e){var t=e.top,n=e.right,r=e.bottom,o=e.left;return{top:t,right:n,bottom:r,left:o,width:n-o,height:r-t,x:o,y:t,center:{x:(n+o)/2,y:(r+t)/2}}},a=function(e,t){return{top:e.top-t.top,left:e.left-t.left,bottom:e.bottom+t.bottom,right:e.right+t.right}},i=function(e,t){return{top:e.top+t.top,left:e.left+t.left,bottom:e.bottom-t.bottom,right:e.right-t.right}},u={top:0,right:0,bottom:0,left:0},c=function(e){var t=e.borderBox,n=e.margin,r=void 0===n?u:n,c=e.border,s=void 0===c?u:c,l=e.padding,f=void 0===l?u:l,d=o(a(t,r)),p=o(i(t,s)),m=o(i(p,f));return{marginBox:d,borderBox:o(t),paddingBox:p,contentBox:m,margin:r,border:s,padding:f}},s=function(e){var t=e.slice(0,-2);if("px"!==e.slice(-2))return 0;var n=Number(t);return isNaN(n)&&r(!1),n},l=function(e,t){var n,r,o=e.borderBox,a=e.border,i=e.margin,u=e.padding,s=(r=t,{top:(n=o).top+r.y,left:n.left+r.x,bottom:n.bottom+r.y,right:n.right+r.x});return c({borderBox:s,border:a,margin:i,padding:u})},f=function(e,t){return void 0===t&&(t={x:window.pageXOffset,y:window.pageYOffset}),l(e,t)},d=function(e,t){var n={top:s(t.marginTop),right:s(t.marginRight),bottom:s(t.marginBottom),left:s(t.marginLeft)},r={top:s(t.paddingTop),right:s(t.paddingRight),bottom:s(t.paddingBottom),left:s(t.paddingLeft)},o={top:s(t.borderTopWidth),right:s(t.borderRightWidth),bottom:s(t.borderBottomWidth),left:s(t.borderLeftWidth)};return c({borderBox:e,margin:n,padding:r,border:o})},p=function(e){var t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return d(t,n)}},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},ga3P:function(e,t,n){"use strict";var r=n("1nmM"),o=n("PoSw")(6),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Lkow")(a)},mzE5:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),o=n.n(r),a=n("1Yd/"),i=(n("Qf75"),n("gs/B"),n("iyo3"),n("v6Ak"),n("oumg")),u=n("bPu0"),c=n("hn/R"),s=(n("0plx"),n("bIcM"),["create","update","delete"]),l=function(e){var t=Object(c.useUpdateModelMutation)()[0],n=Object(r.useState)({value:e.name,typingTimeout:0}),a=n[0],u=n[1],l=function(n,r){var o;t({variables:{id:e.id,data:(o={},o[n]=r,o)}})},f=e.fields.find((function(t){return t.name===e.idField})),d=e.fields.filter((function(t){return e.displayFields.includes(t.name)}));return o.a.createElement(i.y,{middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Database Name")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement("span",{className:"subtitle text-hint"},e.id)))),o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Display Name")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement(i.n,null,o.a.createElement("input",{name:"name",value:a.value,placeholder:"Model Name",onChange:function(e){var t=e.target.value;a.typingTimeout&&clearTimeout(a.typingTimeout),u({value:t,typingTimeout:setTimeout((function(){l("name",t)}),1e3)})}}))))),o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Id Field")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement(i.z,{status:"Primary",shape:"SemiRound",value:{value:f.name,label:f.title},onChange:function(e){return l("idField",e.value)},options:e.fields.filter((function(e){return e.isId||e.unique})).map((function(e){return{value:e.name,label:e.title}}))})))),o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Display Fields")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement(i.z,{isMulti:!0,status:"Primary",shape:"SemiRound",value:d.map((function(e){return{value:e.name,label:e.title}})),onChange:function(e){e&&l("displayFields",e.map((function(e){return e.value})))},options:e.fields.filter((function(e){return"object"!==e.kind})).map((function(e){return{value:e.name,label:e.title}}))})))),o.a.createElement(i.j,{breakPoint:{xs:12}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Actions")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement(i.y,{around:"xs",middle:"xs"},s.map((function(t,n){return o.a.createElement(i.j,{breakPoint:{xs:4},key:n},o.a.createElement(i.i,{status:"Success",checked:e[t],onChange:function(e){return l(t,e)}},t))})))))))},f=["read","create","update","filter","sort"],d=function(e){var t=e.field,n=e.model,a=Object(c.useUpdateFieldMutation)()[0],u=Object(r.useState)({value:t.title,typingTimeout:0}),s=u[0],l=u[1],d=function(e,r){var o;a({variables:{id:t.id,modelId:n,data:(o={},o[e]=r,o)}})};return o.a.createElement(i.y,{middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Database Name")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement("span",{className:"subtitle text-hint"},t.name)))),o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},o.a.createElement(i.y,{around:"xs",middle:"xs"},o.a.createElement(i.j,{breakPoint:{xs:4}},o.a.createElement("span",{className:"subtitle text-hint"},"Display Name")),o.a.createElement(i.j,{breakPoint:{xs:8}},o.a.createElement(i.n,null,o.a.createElement("input",{name:"name",value:s.value,placeholder:"Field Name",onChange:function(e){var t=e.target.value;s.typingTimeout&&clearTimeout(s.typingTimeout),l({value:t,typingTimeout:setTimeout((function(){d("title",t)}),1e3)})}}))))),f.map((function(e){return o.a.createElement(i.j,{breakPoint:{xs:4},key:e},o.a.createElement(i.i,{disabled:!(!t.relationField||!["create","update"].includes(e)),status:"Success",checked:t[e],onChange:function(t){return d(e,t)}},e))})))},p=n("j/s1"),m=n("Y4ta"),b=function(){var e=Object(r.useContext)(m.LayoutContext).schema.models,t=Object(c.useUpdateModelMutation)()[0],n=Object(r.useState)(),a=n[0],s=n[1],f=Object(r.useRef)(e);!a&&e.length>0&&s(e[0]),f.current!==e&&e.length>0&&a&&(f.current=e,s(e.find((function(e){return e.id===a.id}))));return o.a.createElement(i.y,null,o.a.createElement(i.j,{breakPoint:{xs:12,md:6}},o.a.createElement(i.f,null,o.a.createElement("header",null,"Update models Tables"),o.a.createElement(i.g,{style:{overflow:"visible"}},o.a.createElement(i.y,null,o.a.createElement(i.j,{breakPoint:{xs:12},style:{marginBottom:"20px"}},a&&o.a.createElement(i.z,{status:"Primary",shape:"SemiRound",value:{value:a.id,label:a.name},onChange:function(t){return s(e.find((function(e){return e.id===t.value})))},options:e.map((function(e){return{value:e.id,label:e.name}}))})),o.a.createElement(i.j,{breakPoint:{xs:12}},a&&o.a.createElement(l,a)))))),o.a.createElement(i.j,{breakPoint:{xs:12,md:6}},a&&o.a.createElement(u.a,{onDragEnd:function(e){var n=null==a?void 0:a.fields.slice().sort((function(e,t){return e.order-t.order}));if(n&&e.destination&&a){var r=n.splice(e.source.index,1)[0];n.splice(e.destination.index,0,r);var o=n.map((function(e,t){var n=Object.assign({},e);return delete n.__typename,Object.assign(Object.assign({},n),{},{order:t+1})}));t({variables:{id:a.id,data:{fields:o}}}),s(Object.assign(Object.assign({},a),{},{fields:o}))}}},o.a.createElement(u.c,{droppableId:a.id},(function(e){return o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),o.a.createElement(i.a,null,a.fields.slice().sort((function(e,t){return e.order-t.order})).map((function(e,t){return o.a.createElement(u.b,{key:e.id,draggableId:e.id,index:t},(function(n){return o.a.createElement(h,Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),o.a.createElement(i.b,{uniqueKey:t,key:t,title:o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(i.l,{name:"menu-outline",status:"Primary"})," ",o.a.createElement("span",{style:{marginLeft:"5px"}},e.title))},o.a.createElement(d,{field:e,model:null==a?void 0:a.id})))}))}))),e.placeholder)})))))},h=p.d.div.withConfig({displayName:"Settings__StyledDragItem",componentId:"oqlh3m-0"})(["margin-bottom:10px;"]);t.default=function(){return o.a.createElement("div",null,o.a.createElement(a.a,{title:"Home",keywords:["OAH","application","react"]}),o.a.createElement(b,null))}},qzjl:function(e,t,n){var r=n("ajfu"),o=n("77Ar"),a=n("cKZz"),i=n("WDj7").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},"rSj+":function(e,t,n){var r=n("1nmM"),o=n("qzjl"),a=n("hOPm"),i=n("az0j"),u=n("fgNO");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),c=i.f,s=o(r),l={},f=0;s.length>f;)void 0!==(n=c(r,t=s[f++]))&&u(l,t,n);return l}})},uDfI:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return _}));var r=n("ERkP"),o=n.n(r),a=o.a.createContext(null);n("npfV");var i=function(e){e()},u={notify:function(){}};function c(){var e=i,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var s=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=u,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=c())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=u)},e}();var l=function(e){var t=e.store,n=e.context,i=e.children,u=Object(r.useMemo)((function(){var e=new s(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=u.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,c]);var l=n||a;return o.a.createElement(l.Provider,{value:u},i)},f=(n("Qf75"),n("cxan"));function d(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var p=n("oXkQ"),m=n.n(p),b=n("kvVz"),h="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,v=[],g=[null,null];function y(e,t){var n=e[1];return[t.payload,n+1]}function E(e,t,n){h((function(){return e.apply(void 0,t)}),n)}function x(e,t,n,r,o,a,i){e.current=r,t.current=o,n.current=!1,a.current&&(a.current=null,i())}function O(e,t,n,r,o,a,i,u,c,s){if(e){var l=!1,f=null,d=function(){if(!l){var e,n,d=t.getState();try{e=r(d,o.current)}catch(p){n=p,f=p}n||(f=null),e===a.current?i.current||c():(a.current=e,u.current=e,i.current=!0,s({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=d,n.trySubscribe(),d();return function(){if(l=!0,n.tryUnsubscribe(),n.onStateChange=null,f)throw f}}}var P=function(){return[null,0]};function w(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,u=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,c=n.methodName,l=void 0===c?"connectAdvanced":c,p=n.renderCountProp,h=void 0===p?void 0:p,w=n.shouldHandleStateChanges,j=void 0===w||w,S=n.storeKey,N=void 0===S?"store":S,k=(n.withRef,n.forwardRef),C=void 0!==k&&k,T=n.context,R=void 0===T?a:T,M=d(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),B=R;return function(t){var n=t.displayName||t.name||"Component",a=u(n),i=Object(f.a)({},M,{getDisplayName:u,methodName:l,renderCountProp:h,shouldHandleStateChanges:j,storeKey:N,displayName:a,wrappedComponentName:n,WrappedComponent:t}),c=M.pure;var p=c?r.useMemo:function(e){return e()};function w(n){var a=Object(r.useMemo)((function(){var e=n.forwardedRef,t=d(n,["forwardedRef"]);return[n.context,e,t]}),[n]),u=a[0],c=a[1],l=a[2],m=Object(r.useMemo)((function(){return u&&u.Consumer&&Object(b.isContextConsumer)(o.a.createElement(u.Consumer,null))?u:B}),[u,B]),h=Object(r.useContext)(m),w=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(h)&&Boolean(h.store);var S=w?n.store:h.store,N=Object(r.useMemo)((function(){return function(t){return e(t.dispatch,i)}(S)}),[S]),k=Object(r.useMemo)((function(){if(!j)return g;var e=new s(S,w?null:h.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[S,w,h]),C=k[0],T=k[1],R=Object(r.useMemo)((function(){return w?h:Object(f.a)({},h,{subscription:C})}),[w,h,C]),M=Object(r.useReducer)(y,v,P),D=M[0][0],A=M[1];if(D&&D.error)throw D.error;var I=Object(r.useRef)(),q=Object(r.useRef)(l),F=Object(r.useRef)(),U=Object(r.useRef)(!1),W=p((function(){return F.current&&l===q.current?F.current:N(S.getState(),l)}),[S,D,l]);E(x,[q,I,U,l,W,F,T]),E(O,[j,S,C,N,q,I,U,F,T,A],[S,C,N]);var _=Object(r.useMemo)((function(){return o.a.createElement(t,Object(f.a)({},W,{ref:c}))}),[c,t,W]);return Object(r.useMemo)((function(){return j?o.a.createElement(m.Provider,{value:R},_):_}),[m,_,R])}var S=c?o.a.memo(w):w;if(S.WrappedComponent=t,S.displayName=a,C){var k=o.a.forwardRef((function(e,t){return o.a.createElement(S,Object(f.a)({},e,{forwardedRef:t}))}));return k.displayName=a,k.WrappedComponent=t,m()(k,t)}return m()(S,t)}}n("uydD"),n("Cwzy"),n("odAc"),n("OksV");function j(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function S(e,t){if(j(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!j(e[n[o]],t[n[o]]))return!1;return!0}var N=n("9OUN");function k(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function C(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function T(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=C(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=C(o),o=r(t,n)),o},r}}var R=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:k((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?k((function(t){return Object(N.b)(e,t)})):void 0}];var M=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:k((function(){return{}}))}];function B(e,t,n){return Object(f.a)({},n,{},e,{},t)}var D=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,i=!1;return function(t,n,u){var c=e(t,n,u);return i?o&&a(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return B}}];function A(e,t,n,r){return function(o,a){return n(e(o,a),t(r,a),a)}}function I(e,t,n,r,o){var a,i,u,c,s,l=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,p=!1;function m(o,p){var m,b,h=!f(p,i),v=!l(o,a);return a=o,i=p,h&&v?(u=e(a,i),t.dependsOnOwnProps&&(c=t(r,i)),s=n(u,c,i)):h?(e.dependsOnOwnProps&&(u=e(a,i)),t.dependsOnOwnProps&&(c=t(r,i)),s=n(u,c,i)):v?(m=e(a,i),b=!d(m,u),u=m,b&&(s=n(u,c,i)),s):s}return function(o,l){return p?m(o,l):(u=e(a=o,i=l),c=t(r,i),s=n(u,c,i),p=!0,s)}}function q(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,a=d(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,a),u=r(e,a),c=o(e,a);return(a.pure?I:A)(i,u,c,e,a)}function F(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function U(e,t){return e===t}function W(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?w:n,o=t.mapStateToPropsFactories,a=void 0===o?M:o,i=t.mapDispatchToPropsFactories,u=void 0===i?R:i,c=t.mergePropsFactories,s=void 0===c?D:c,l=t.selectorFactory,p=void 0===l?q:l;return function(e,t,n,o){void 0===o&&(o={});var i=o,c=i.pure,l=void 0===c||c,m=i.areStatesEqual,b=void 0===m?U:m,h=i.areOwnPropsEqual,v=void 0===h?S:h,g=i.areStatePropsEqual,y=void 0===g?S:g,E=i.areMergedPropsEqual,x=void 0===E?S:E,O=d(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),P=F(e,a,"mapStateToProps"),w=F(t,u,"mapDispatchToProps"),j=F(n,s,"mergeProps");return r(p,Object(f.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:P,initMapDispatchToProps:w,initMergeProps:j,pure:l,areStatesEqual:b,areOwnPropsEqual:v,areStatePropsEqual:y,areMergedPropsEqual:x},O))}}var _=W();var z,H=n("7nmT");z=H.unstable_batchedUpdates,i=z},xHP7:function(e,t,n){"use strict";t.a=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];t=o,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r}},xNBJ:function(e,t,n){var r=n("BtUU"),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}}}]);
//# sourceMappingURL=component---src-pages-dashboard-tsx-271ee1b3818fa3c74901.js.map