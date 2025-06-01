(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&f(S)}).observe(document,{childList:!0,subtree:!0});function u(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function f(d){if(d.ep)return;d.ep=!0;const m=u(d);fetch(d.href,m)}})();function wc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yi={exports:{}},Rr={},Xi={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc;function Mf(){if(lc)return b;lc=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),S=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),M=Symbol.iterator;function P(v){return v===null||typeof v!="object"?null:(v=M&&v[M]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,D={};function F(v,j,Z){this.props=v,this.context=j,this.refs=D,this.updater=Z||Q}F.prototype.isReactComponent={},F.prototype.setState=function(v,j){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,j,"setState")},F.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function O(){}O.prototype=F.prototype;function H(v,j,Z){this.props=v,this.context=j,this.refs=D,this.updater=Z||Q}var G=H.prototype=new O;G.constructor=H,T(G,F.prototype),G.isPureReactComponent=!0;var ee=Array.isArray,ue=Object.prototype.hasOwnProperty,xe={current:null},he={key:!0,ref:!0,__self:!0,__source:!0};function Ne(v,j,Z){var te,re={},oe=null,se=null;if(j!=null)for(te in j.ref!==void 0&&(se=j.ref),j.key!==void 0&&(oe=""+j.key),j)ue.call(j,te)&&!he.hasOwnProperty(te)&&(re[te]=j[te]);var ie=arguments.length-2;if(ie===1)re.children=Z;else if(1<ie){for(var pe=Array(ie),Xe=0;Xe<ie;Xe++)pe[Xe]=arguments[Xe+2];re.children=pe}if(v&&v.defaultProps)for(te in ie=v.defaultProps,ie)re[te]===void 0&&(re[te]=ie[te]);return{$$typeof:i,type:v,key:oe,ref:se,props:re,_owner:xe.current}}function we(v,j){return{$$typeof:i,type:v.type,key:j,ref:v.ref,props:v.props,_owner:v._owner}}function je(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function ht(v){var j={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return j[Z]})}var vt=/\/+/g;function Ye(v,j){return typeof v=="object"&&v!==null&&v.key!=null?ht(""+v.key):j.toString(36)}function at(v,j,Z,te,re){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var se=!1;if(v===null)se=!0;else switch(oe){case"string":case"number":se=!0;break;case"object":switch(v.$$typeof){case i:case s:se=!0}}if(se)return se=v,re=re(se),v=te===""?"."+Ye(se,0):te,ee(re)?(Z="",v!=null&&(Z=v.replace(vt,"$&/")+"/"),at(re,j,Z,"",function(Xe){return Xe})):re!=null&&(je(re)&&(re=we(re,Z+(!re.key||se&&se.key===re.key?"":(""+re.key).replace(vt,"$&/")+"/")+v)),j.push(re)),1;if(se=0,te=te===""?".":te+":",ee(v))for(var ie=0;ie<v.length;ie++){oe=v[ie];var pe=te+Ye(oe,ie);se+=at(oe,j,Z,pe,re)}else if(pe=P(v),typeof pe=="function")for(v=pe.call(v),ie=0;!(oe=v.next()).done;)oe=oe.value,pe=te+Ye(oe,ie++),se+=at(oe,j,Z,pe,re);else if(oe==="object")throw j=String(v),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return se}function gt(v,j,Z){if(v==null)return v;var te=[],re=0;return at(v,te,"","",function(oe){return j.call(Z,oe,re++)}),te}function Ve(v){if(v._status===-1){var j=v._result;j=j(),j.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=j)}if(v._status===1)return v._result.default;throw v._result}var Se={current:null},A={transition:null},Y={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:A,ReactCurrentOwner:xe};function B(){throw Error("act(...) is not supported in production builds of React.")}return b.Children={map:gt,forEach:function(v,j,Z){gt(v,function(){j.apply(this,arguments)},Z)},count:function(v){var j=0;return gt(v,function(){j++}),j},toArray:function(v){return gt(v,function(j){return j})||[]},only:function(v){if(!je(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},b.Component=F,b.Fragment=u,b.Profiler=d,b.PureComponent=H,b.StrictMode=f,b.Suspense=y,b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,b.act=B,b.cloneElement=function(v,j,Z){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var te=T({},v.props),re=v.key,oe=v.ref,se=v._owner;if(j!=null){if(j.ref!==void 0&&(oe=j.ref,se=xe.current),j.key!==void 0&&(re=""+j.key),v.type&&v.type.defaultProps)var ie=v.type.defaultProps;for(pe in j)ue.call(j,pe)&&!he.hasOwnProperty(pe)&&(te[pe]=j[pe]===void 0&&ie!==void 0?ie[pe]:j[pe])}var pe=arguments.length-2;if(pe===1)te.children=Z;else if(1<pe){ie=Array(pe);for(var Xe=0;Xe<pe;Xe++)ie[Xe]=arguments[Xe+2];te.children=ie}return{$$typeof:i,type:v.type,key:re,ref:oe,props:te,_owner:se}},b.createContext=function(v){return v={$$typeof:S,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:m,_context:v},v.Consumer=v},b.createElement=Ne,b.createFactory=function(v){var j=Ne.bind(null,v);return j.type=v,j},b.createRef=function(){return{current:null}},b.forwardRef=function(v){return{$$typeof:k,render:v}},b.isValidElement=je,b.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:Ve}},b.memo=function(v,j){return{$$typeof:E,type:v,compare:j===void 0?null:j}},b.startTransition=function(v){var j=A.transition;A.transition={};try{v()}finally{A.transition=j}},b.unstable_act=B,b.useCallback=function(v,j){return Se.current.useCallback(v,j)},b.useContext=function(v){return Se.current.useContext(v)},b.useDebugValue=function(){},b.useDeferredValue=function(v){return Se.current.useDeferredValue(v)},b.useEffect=function(v,j){return Se.current.useEffect(v,j)},b.useId=function(){return Se.current.useId()},b.useImperativeHandle=function(v,j,Z){return Se.current.useImperativeHandle(v,j,Z)},b.useInsertionEffect=function(v,j){return Se.current.useInsertionEffect(v,j)},b.useLayoutEffect=function(v,j){return Se.current.useLayoutEffect(v,j)},b.useMemo=function(v,j){return Se.current.useMemo(v,j)},b.useReducer=function(v,j,Z){return Se.current.useReducer(v,j,Z)},b.useRef=function(v){return Se.current.useRef(v)},b.useState=function(v){return Se.current.useState(v)},b.useSyncExternalStore=function(v,j,Z){return Se.current.useSyncExternalStore(v,j,Z)},b.useTransition=function(){return Se.current.useTransition()},b.version="18.3.1",b}var ic;function oa(){return ic||(ic=1,Xi.exports=Mf()),Xi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Df(){if(ac)return Rr;ac=1;var i=oa(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function S(k,y,E){var R,M={},P=null,Q=null;E!==void 0&&(P=""+E),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(Q=y.ref);for(R in y)f.call(y,R)&&!m.hasOwnProperty(R)&&(M[R]=y[R]);if(k&&k.defaultProps)for(R in y=k.defaultProps,y)M[R]===void 0&&(M[R]=y[R]);return{$$typeof:s,type:k,key:P,ref:Q,props:M,_owner:d.current}}return Rr.Fragment=u,Rr.jsx=S,Rr.jsxs=S,Rr}var uc;function Ff(){return uc||(uc=1,Yi.exports=Df()),Yi.exports}var C=Ff(),N=oa();const Sc=wc(N);var qo={},Gi={exports:{}},Ke={},Zi={exports:{}},bi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc;function Af(){return sc||(sc=1,function(i){function s(A,Y){var B=A.length;A.push(Y);e:for(;0<B;){var v=B-1>>>1,j=A[v];if(0<d(j,Y))A[v]=Y,A[B]=j,B=v;else break e}}function u(A){return A.length===0?null:A[0]}function f(A){if(A.length===0)return null;var Y=A[0],B=A.pop();if(B!==Y){A[0]=B;e:for(var v=0,j=A.length,Z=j>>>1;v<Z;){var te=2*(v+1)-1,re=A[te],oe=te+1,se=A[oe];if(0>d(re,B))oe<j&&0>d(se,re)?(A[v]=se,A[oe]=B,v=oe):(A[v]=re,A[te]=B,v=te);else if(oe<j&&0>d(se,B))A[v]=se,A[oe]=B,v=oe;else break e}}return Y}function d(A,Y){var B=A.sortIndex-Y.sortIndex;return B!==0?B:A.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var S=Date,k=S.now();i.unstable_now=function(){return S.now()-k}}var y=[],E=[],R=1,M=null,P=3,Q=!1,T=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(A){for(var Y=u(E);Y!==null;){if(Y.callback===null)f(E);else if(Y.startTime<=A)f(E),Y.sortIndex=Y.expirationTime,s(y,Y);else break;Y=u(E)}}function ee(A){if(D=!1,G(A),!T)if(u(y)!==null)T=!0,Ve(ue);else{var Y=u(E);Y!==null&&Se(ee,Y.startTime-A)}}function ue(A,Y){T=!1,D&&(D=!1,O(Ne),Ne=-1),Q=!0;var B=P;try{for(G(Y),M=u(y);M!==null&&(!(M.expirationTime>Y)||A&&!ht());){var v=M.callback;if(typeof v=="function"){M.callback=null,P=M.priorityLevel;var j=v(M.expirationTime<=Y);Y=i.unstable_now(),typeof j=="function"?M.callback=j:M===u(y)&&f(y),G(Y)}else f(y);M=u(y)}if(M!==null)var Z=!0;else{var te=u(E);te!==null&&Se(ee,te.startTime-Y),Z=!1}return Z}finally{M=null,P=B,Q=!1}}var xe=!1,he=null,Ne=-1,we=5,je=-1;function ht(){return!(i.unstable_now()-je<we)}function vt(){if(he!==null){var A=i.unstable_now();je=A;var Y=!0;try{Y=he(!0,A)}finally{Y?Ye():(xe=!1,he=null)}}else xe=!1}var Ye;if(typeof H=="function")Ye=function(){H(vt)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,gt=at.port2;at.port1.onmessage=vt,Ye=function(){gt.postMessage(null)}}else Ye=function(){F(vt,0)};function Ve(A){he=A,xe||(xe=!0,Ye())}function Se(A,Y){Ne=F(function(){A(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(A){A.callback=null},i.unstable_continueExecution=function(){T||Q||(T=!0,Ve(ue))},i.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<A?Math.floor(1e3/A):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return u(y)},i.unstable_next=function(A){switch(P){case 1:case 2:case 3:var Y=3;break;default:Y=P}var B=P;P=Y;try{return A()}finally{P=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(A,Y){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=P;P=A;try{return Y()}finally{P=B}},i.unstable_scheduleCallback=function(A,Y,B){var v=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,A){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=B+j,A={id:R++,callback:Y,priorityLevel:A,startTime:B,expirationTime:j,sortIndex:-1},B>v?(A.sortIndex=B,s(E,A),u(y)===null&&A===u(E)&&(D?(O(Ne),Ne=-1):D=!0,Se(ee,B-v))):(A.sortIndex=j,s(y,A),T||Q||(T=!0,Ve(ue))),A},i.unstable_shouldYield=ht,i.unstable_wrapCallback=function(A){var Y=P;return function(){var B=P;P=Y;try{return A.apply(this,arguments)}finally{P=B}}}}(bi)),bi}var cc;function Uf(){return cc||(cc=1,Zi.exports=Af()),Zi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function $f(){if(dc)return Ke;dc=1;var i=oa(),s=Uf();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,d={};function m(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(d[e]=t,e=0;e<t.length;e++)f.add(t[e])}var k=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},M={};function P(e){return y.call(M,e)?!0:y.call(R,e)?!1:E.test(e)?M[e]=!0:(R[e]=!0,!1)}function Q(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,n,r){if(t===null||typeof t>"u"||Q(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,H);F[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,H);F[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,H);F[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,n,r){var o=F.hasOwnProperty(t)?F[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,n,o,r)&&(n=null),r||o===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),xe=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),ht=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),A=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function j(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var Z=!1;function te(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,c=l.length-1;1<=a&&0<=c&&o[a]!==l[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==l[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==l[c]){var p=`
`+o[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=c);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function re(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case xe:return"Portal";case we:return"Profiler";case Ne:return"StrictMode";case Ye:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ht:return(e.displayName||"Context")+".Consumer";case je:return(e._context.displayName||"Context")+".Provider";case vt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Xe(e))}function da(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ie(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function rl(e,t){pa(e,t);var n=ie(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ie(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ha(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Hn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ie(n)}}function va(e,t){var n=ie(t.value),r=ie(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ya(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,xa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function wa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function Sa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=wa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Uc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,gn=null,yn=null;function Ea(e){if(e=pr(e)){if(typeof dl!="function")throw Error(u(280));var t=e.stateNode;t&&(t=ao(t),dl(e.stateNode,e.type,t))}}function ka(e){gn?yn?yn.push(e):yn=[e]:gn=e}function Ca(){if(gn){var e=gn,t=yn;if(yn=gn=null,Ea(e),t)for(e=0;e<t.length;e++)Ea(t[e])}}function Na(e,t){return e(t)}function Pa(){}var fl=!1;function _a(e,t,n){if(fl)return e(t,n);fl=!0;try{return Na(e,t,n)}finally{fl=!1,(gn!==null||yn!==null)&&(Pa(),Ca())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var pl=!1;if(k)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){pl=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{pl=!1}function $c(e,t,n,r,o,l,a,c,p){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(L){this.onError(L)}}var Kn=!1,Ur=null,$r=!1,ml=null,Bc={onError:function(e){Kn=!0,Ur=e}};function Vc(e,t,n,r,o,l,a,c,p){Kn=!1,Ur=null,$c.apply(Bc,arguments)}function Hc(e,t,n,r,o,l,a,c,p){if(Vc.apply(this,arguments),Kn){if(Kn){var w=Ur;Kn=!1,Ur=null}else throw Error(u(198));$r||($r=!0,ml=w)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ra(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(tn(e)!==e)throw Error(u(188))}function Wc(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ja(o),e;if(l===r)return ja(o),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,r=l;break}if(c===r){a=!0,r=o,n=l;break}c=c.sibling}if(!a){for(c=l.child;c;){if(c===n){a=!0,n=l,r=o;break}if(c===r){a=!0,r=l,n=o;break}c=c.sibling}if(!a)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function La(e){return e=Wc(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var Ta=s.unstable_scheduleCallback,Ia=s.unstable_cancelCallback,Qc=s.unstable_shouldYield,Jc=s.unstable_requestPaint,ke=s.unstable_now,qc=s.unstable_getCurrentPriorityLevel,hl=s.unstable_ImmediatePriority,Oa=s.unstable_UserBlockingPriority,Br=s.unstable_NormalPriority,Kc=s.unstable_LowPriority,Ma=s.unstable_IdlePriority,Vr=null,yt=null;function Yc(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Zc,Xc=Math.log,Gc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Xc(e)/Gc|0)|0}var Hr=64,Wr=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?r=Yn(c):(l&=a,l!==0&&(r=Yn(l)))}else a=n&~o,a!==0?r=Yn(a):l!==0&&(r=Yn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),o=1<<n,r|=e[n],t&=~o;return r}function bc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-ut(l),c=1<<a,p=o[a];p===-1?((c&n)===0||(c&r)!==0)&&(o[a]=bc(c,t)):p<=t&&(e.expiredLanes|=c),l&=~c}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Da(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ut(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ae=0;function Fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Aa,xl,Ua,$a,Ba,wl=!1,Jr=[],Dt=null,Ft=null,At=null,Gn=new Map,Zn=new Map,Ut=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function bn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rd(e,t,n,r,o){switch(t){case"focusin":return Dt=bn(Dt,e,t,n,r,o),!0;case"dragenter":return Ft=bn(Ft,e,t,n,r,o),!0;case"mouseover":return At=bn(At,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Gn.set(l,bn(Gn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Zn.set(l,bn(Zn.get(l)||null,e,t,n,r,o)),!0}return!1}function Ha(e){var t=nn(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ra(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Ua(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=pr(n),t!==null&&xl(t),e.blockedOn=n,!1;t.shift()}return!0}function Wa(e,t,n){qr(e)&&n.delete(t)}function od(){wl=!1,Dt!==null&&qr(Dt)&&(Dt=null),Ft!==null&&qr(Ft)&&(Ft=null),At!==null&&qr(At)&&(At=null),Gn.forEach(Wa),Zn.forEach(Wa)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,wl||(wl=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,od)))}function tr(e){function t(o){return er(o,e)}if(0<Jr.length){er(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&er(Dt,e),Ft!==null&&er(Ft,e),At!==null&&er(At,e),Gn.forEach(t),Zn.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Ha(n),n.blockedOn===null&&Ut.shift()}var xn=ee.ReactCurrentBatchConfig,Kr=!0;function ld(e,t,n,r){var o=ae,l=xn.transition;xn.transition=null;try{ae=1,Sl(e,t,n,r)}finally{ae=o,xn.transition=l}}function id(e,t,n,r){var o=ae,l=xn.transition;xn.transition=null;try{ae=4,Sl(e,t,n,r)}finally{ae=o,xn.transition=l}}function Sl(e,t,n,r){if(Kr){var o=El(e,t,n,r);if(o===null)Ul(e,t,r,Yr,n),Va(e,r);else if(rd(o,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<nd.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&Aa(l),l=El(e,t,n,r),l===null&&Ul(e,t,r,Yr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Yr=null;function El(e,t,n,r){if(Yr=null,e=cl(r),e=nn(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ra(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function Qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case hl:return 1;case Oa:return 4;case Br:case Kc:return 16;case Ma:return 536870912;default:return 16}default:return 16}}var $t=null,kl=null,Xr=null;function Ja(){if(Xr)return Xr;var e,t=kl,n=t.length,r,o="value"in $t?$t.value:$t.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return Xr=o.slice(e,1<r?1-r:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function qa(){return!1}function Ge(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zr:qa,this.isPropagationStopped=qa,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=Ge(wn),nr=B({},wn,{view:0,detail:0}),ad=Ge(nr),Nl,Pl,rr,br=B({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Nl=e.screenX-rr.screenX,Pl=e.screenY-rr.screenY):Pl=Nl=0,rr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Ka=Ge(br),ud=B({},br,{dataTransfer:0}),sd=Ge(ud),cd=B({},nr,{relatedTarget:0}),_l=Ge(cd),dd=B({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Ge(dd),pd=B({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=Ge(pd),hd=B({},wn,{data:0}),Ya=Ge(hd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function Rl(){return xd}var wd=B({},nr,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Ge(wd),Ed=B({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=Ge(Ed),kd=B({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),Cd=Ge(kd),Nd=B({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Ge(Nd),_d=B({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Ge(_d),jd=[9,13,27,32],jl=k&&"CompositionEvent"in window,or=null;k&&"documentMode"in document&&(or=document.documentMode);var Ld=k&&"TextEvent"in window&&!or,Ga=k&&(!jl||or&&8<or&&11>=or),Za=" ",ba=!1;function eu(e,t){switch(e){case"keyup":return jd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function zd(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(ba=!0,Za);case"textInput":return e=t.data,e===Za&&ba?null:e;default:return null}}function Td(e,t){if(Sn)return e==="compositionend"||!jl&&eu(e,t)?(e=Ja(),Xr=kl=$t=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ga&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function ru(e,t,n,r){ka(r),t=oo(t,"onChange"),0<t.length&&(n=new Cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,ir=null;function Od(e){Su(e,0)}function eo(e){var t=Pn(e);if(da(t))return e}function Md(e,t){if(e==="change")return t}var ou=!1;if(k){var Ll;if(k){var zl="oninput"in document;if(!zl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),zl=typeof lu.oninput=="function"}Ll=zl}else Ll=!1;ou=Ll&&(!document.documentMode||9<document.documentMode)}function iu(){lr&&(lr.detachEvent("onpropertychange",au),ir=lr=null)}function au(e){if(e.propertyName==="value"&&eo(ir)){var t=[];ru(t,ir,e,cl(e)),_a(Od,t)}}function Dd(e,t,n){e==="focusin"?(iu(),lr=t,ir=n,lr.attachEvent("onpropertychange",au)):e==="focusout"&&iu()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(ir)}function Ad(e,t){if(e==="click")return eo(t)}function Ud(e,t){if(e==="input"||e==="change")return eo(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:$d;function ar(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!y.call(t,o)||!st(e[o],t[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(r!==null&&Tl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=su(n,l);var a=su(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=k&&"documentMode"in document&&11>=document.documentMode,En=null,Il=null,ur=null,Ol=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||En==null||En!==Fr(r)||(r=En,"selectionStart"in r&&Tl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&ar(ur,r)||(ur=r,r=oo(Il,"onSelect"),0<r.length&&(t=new Cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},Ml={},pu={};k&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function no(e){if(Ml[e])return Ml[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Ml[e]=t[n];return e}var mu=no("animationend"),hu=no("animationiteration"),vu=no("animationstart"),gu=no("transitionend"),yu=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){yu.set(e,t),m(t,[e])}for(var Dl=0;Dl<xu.length;Dl++){var Fl=xu[Dl],Hd=Fl.toLowerCase(),Wd=Fl[0].toUpperCase()+Fl.slice(1);Bt(Hd,"on"+Wd)}Bt(mu,"onAnimationEnd"),Bt(hu,"onAnimationIteration"),Bt(vu,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(gu,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function Su(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],p=c.instance,w=c.currentTarget;if(c=c.listener,p!==l&&o.isPropagationStopped())break e;wu(o,c,w),l=p}else for(a=0;a<r.length;a++){if(c=r[a],p=c.instance,w=c.currentTarget,c=c.listener,p!==l&&o.isPropagationStopped())break e;wu(o,c,w),l=p}}}if($r)throw e=ml,$r=!1,ml=null,e}function de(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ro]){e[ro]=!0,f.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,Al("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(Qa(t)){case 1:var o=ld;break;case 4:o=id;break;default:o=Sl}n=o.bind(null,t,n,e),o=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;a=a.return}for(;c!==null;){if(a=nn(c),a===null)return;if(p=a.tag,p===5||p===6){r=l=a;continue e}c=c.parentNode}}r=r.return}_a(function(){var w=l,L=cl(n),z=[];e:{var _=yu.get(e);if(_!==void 0){var U=Cl,V=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":U=Sd;break;case"focusin":V="focus",U=_l;break;case"focusout":V="blur",U=_l;break;case"beforeblur":case"afterblur":U=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Cd;break;case mu:case hu:case vu:U=fd;break;case gu:U=Pd;break;case"scroll":U=ad;break;case"wheel":U=Rd;break;case"copy":case"cut":case"paste":U=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Xa}var W=(t&4)!==0,Ce=!W&&e==="scroll",g=W?_!==null?_+"Capture":null:_;W=[];for(var h=w,x;h!==null;){x=h;var I=x.stateNode;if(x.tag===5&&I!==null&&(x=I,g!==null&&(I=Jn(h,g),I!=null&&W.push(dr(h,I,x)))),Ce)break;h=h.return}0<W.length&&(_=new U(_,V,null,n,L),z.push({event:_,listeners:W}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&n!==sl&&(V=n.relatedTarget||n.fromElement)&&(nn(V)||V[Pt]))break e;if((U||_)&&(_=L.window===L?L:(_=L.ownerDocument)?_.defaultView||_.parentWindow:window,U?(V=n.relatedTarget||n.toElement,U=w,V=V?nn(V):null,V!==null&&(Ce=tn(V),V!==Ce||V.tag!==5&&V.tag!==6)&&(V=null)):(U=null,V=w),U!==V)){if(W=Ka,I="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(W=Xa,I="onPointerLeave",g="onPointerEnter",h="pointer"),Ce=U==null?_:Pn(U),x=V==null?_:Pn(V),_=new W(I,h+"leave",U,n,L),_.target=Ce,_.relatedTarget=x,I=null,nn(L)===w&&(W=new W(g,h+"enter",V,n,L),W.target=x,W.relatedTarget=Ce,I=W),Ce=I,U&&V)t:{for(W=U,g=V,h=0,x=W;x;x=Cn(x))h++;for(x=0,I=g;I;I=Cn(I))x++;for(;0<h-x;)W=Cn(W),h--;for(;0<x-h;)g=Cn(g),x--;for(;h--;){if(W===g||g!==null&&W===g.alternate)break t;W=Cn(W),g=Cn(g)}W=null}else W=null;U!==null&&ku(z,_,U,W,!1),V!==null&&Ce!==null&&ku(z,Ce,V,W,!0)}}e:{if(_=w?Pn(w):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var J=Md;else if(nu(_))if(ou)J=Ud;else{J=Fd;var q=Dd}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(J=Ad);if(J&&(J=J(e,w))){ru(z,J,n,L);break e}q&&q(e,_,w),e==="focusout"&&(q=_._wrapperState)&&q.controlled&&_.type==="number"&&ol(_,"number",_.value)}switch(q=w?Pn(w):window,e){case"focusin":(nu(q)||q.contentEditable==="true")&&(En=q,Il=w,ur=null);break;case"focusout":ur=Il=En=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,fu(z,n,L);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":fu(z,n,L)}var K;if(jl)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Sn?eu(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(Ga&&n.locale!=="ko"&&(Sn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Sn&&(K=Ja()):($t=L,kl="value"in $t?$t.value:$t.textContent,Sn=!0)),q=oo(w,X),0<q.length&&(X=new Ya(X,e,null,n,L),z.push({event:X,listeners:q}),K?X.data=K:(K=tu(n),K!==null&&(X.data=K)))),(K=Ld?zd(e,n):Td(e,n))&&(w=oo(w,"onBeforeInput"),0<w.length&&(L=new Ya("onBeforeInput","beforeinput",null,n,L),z.push({event:L,listeners:w}),L.data=K))}Su(z,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Jn(e,n),l!=null&&r.unshift(dr(e,l,o)),l=Jn(e,t),l!=null&&r.push(dr(e,l,o))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var c=n,p=c.alternate,w=c.stateNode;if(p!==null&&p===r)break;c.tag===5&&w!==null&&(c=w,o?(p=Jn(n,l),p!=null&&a.unshift(dr(n,p,c))):o||(p=Jn(n,l),p!=null&&a.push(dr(n,p,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(qd,"")}function lo(e,t,n){if(t=Cu(t),Cu(e)!==t&&n)throw Error(u(425))}function io(){}var $l=null,Bl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch(Xd)}:Hl;function Xd(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);tr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Nn,fr="__reactProps$"+Nn,Pt="__reactContainer$"+Nn,Ql="__reactEvents$"+Nn,Gd="__reactListeners$"+Nn,Zd="__reactHandles$"+Nn;function nn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[xt])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[xt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function ao(e){return e[fr]||null}var Jl=[],_n=-1;function Ht(e){return{current:e}}function fe(e){0>_n||(e.current=Jl[_n],Jl[_n]=null,_n--)}function ce(e,t){_n++,Jl[_n]=e.current,e.current=t}var Wt={},Me=Ht(Wt),He=Ht(!1),rn=Wt;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function uo(){fe(He),fe(Me)}function _u(e,t,n){if(Me.current!==Wt)throw Error(u(168));ce(Me,t),ce(He,n)}function Ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,se(e)||"Unknown",o));return B({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,rn=Me.current,ce(Me,e),ce(He,He.current),!0}function ju(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Ru(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,fe(He),fe(Me),ce(Me,e)):fe(He),ce(He,n)}var _t=null,co=!1,ql=!1;function Lu(e){_t===null?_t=[e]:_t.push(e)}function bd(e){co=!0,Lu(e)}function Qt(){if(!ql&&_t!==null){ql=!0;var e=0,t=ae;try{var n=_t;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,co=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Ta(hl,Qt),o}finally{ae=t,ql=!1}}return null}var jn=[],Ln=0,fo=null,po=0,tt=[],nt=0,on=null,Rt=1,jt="";function ln(e,t){jn[Ln++]=po,jn[Ln++]=fo,fo=e,po=t}function zu(e,t,n){tt[nt++]=Rt,tt[nt++]=jt,tt[nt++]=on,on=e;var r=Rt;e=jt;var o=32-ut(r)-1;r&=~(1<<o),n+=1;var l=32-ut(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Rt=1<<32-ut(t)+o|n<<o|r,jt=l+e}else Rt=1<<l|n<<o|r,jt=e}function Kl(e){e.return!==null&&(ln(e,1),zu(e,1,0))}function Yl(e){for(;e===fo;)fo=jn[--Ln],jn[Ln]=null,po=jn[--Ln],jn[Ln]=null;for(;e===on;)on=tt[--nt],tt[nt]=null,jt=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null}var Ze=null,be=null,me=!1,ct=null;function Tu(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,be=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Rt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,be=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(me){var t=be;if(t){var n=t;if(!Iu(e,t)){if(Xl(e))throw Error(u(418));t=Vt(n.nextSibling);var r=Ze;t&&Iu(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,me=!1,Ze=e)}}else{if(Xl(e))throw Error(u(418));e.flags=e.flags&-4097|2,me=!1,Ze=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function mo(e){if(e!==Ze)return!1;if(!me)return Ou(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=be)){if(Xl(e))throw Mu(),Error(u(418));for(;t;)Tu(e,t),t=Vt(t.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ze?Vt(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=be;e;)e=Vt(e.nextSibling)}function zn(){be=Ze=null,me=!1}function Zl(e){ct===null?ct=[e]:ct.push(e)}var ef=ee.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var c=o.refs;a===null?delete c[l]:c[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function Fu(e){function t(g,h){if(e){var x=g.deletions;x===null?(g.deletions=[h],g.flags|=16):x.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=bt(g,h),g.index=0,g.sibling=null,g}function l(g,h,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<h?(g.flags|=2,h):x):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,h,x,I){return h===null||h.tag!==6?(h=Hi(x,g.mode,I),h.return=g,h):(h=o(h,x),h.return=g,h)}function p(g,h,x,I){var J=x.type;return J===he?L(g,h,x.props.children,I,x.key):h!==null&&(h.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ve&&Du(J)===h.type)?(I=o(h,x.props),I.ref=mr(g,h,x),I.return=g,I):(I=Uo(x.type,x.key,x.props,null,g.mode,I),I.ref=mr(g,h,x),I.return=g,I)}function w(g,h,x,I){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Wi(x,g.mode,I),h.return=g,h):(h=o(h,x.children||[]),h.return=g,h)}function L(g,h,x,I,J){return h===null||h.tag!==7?(h=mn(x,g.mode,I,J),h.return=g,h):(h=o(h,x),h.return=g,h)}function z(g,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Hi(""+h,g.mode,x),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ue:return x=Uo(h.type,h.key,h.props,null,g.mode,x),x.ref=mr(g,null,h),x.return=g,x;case xe:return h=Wi(h,g.mode,x),h.return=g,h;case Ve:var I=h._init;return z(g,I(h._payload),x)}if(Hn(h)||Y(h))return h=mn(h,g.mode,x,null),h.return=g,h;ho(g,h)}return null}function _(g,h,x,I){var J=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return J!==null?null:c(g,h,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return x.key===J?p(g,h,x,I):null;case xe:return x.key===J?w(g,h,x,I):null;case Ve:return J=x._init,_(g,h,J(x._payload),I)}if(Hn(x)||Y(x))return J!==null?null:L(g,h,x,I,null);ho(g,x)}return null}function U(g,h,x,I,J){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(x)||null,c(h,g,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ue:return g=g.get(I.key===null?x:I.key)||null,p(h,g,I,J);case xe:return g=g.get(I.key===null?x:I.key)||null,w(h,g,I,J);case Ve:var q=I._init;return U(g,h,x,q(I._payload),J)}if(Hn(I)||Y(I))return g=g.get(x)||null,L(h,g,I,J,null);ho(h,I)}return null}function V(g,h,x,I){for(var J=null,q=null,K=h,X=h=0,Te=null;K!==null&&X<x.length;X++){K.index>X?(Te=K,K=null):Te=K.sibling;var le=_(g,K,x[X],I);if(le===null){K===null&&(K=Te);break}e&&K&&le.alternate===null&&t(g,K),h=l(le,h,X),q===null?J=le:q.sibling=le,q=le,K=Te}if(X===x.length)return n(g,K),me&&ln(g,X),J;if(K===null){for(;X<x.length;X++)K=z(g,x[X],I),K!==null&&(h=l(K,h,X),q===null?J=K:q.sibling=K,q=K);return me&&ln(g,X),J}for(K=r(g,K);X<x.length;X++)Te=U(K,g,X,x[X],I),Te!==null&&(e&&Te.alternate!==null&&K.delete(Te.key===null?X:Te.key),h=l(Te,h,X),q===null?J=Te:q.sibling=Te,q=Te);return e&&K.forEach(function(en){return t(g,en)}),me&&ln(g,X),J}function W(g,h,x,I){var J=Y(x);if(typeof J!="function")throw Error(u(150));if(x=J.call(x),x==null)throw Error(u(151));for(var q=J=null,K=h,X=h=0,Te=null,le=x.next();K!==null&&!le.done;X++,le=x.next()){K.index>X?(Te=K,K=null):Te=K.sibling;var en=_(g,K,le.value,I);if(en===null){K===null&&(K=Te);break}e&&K&&en.alternate===null&&t(g,K),h=l(en,h,X),q===null?J=en:q.sibling=en,q=en,K=Te}if(le.done)return n(g,K),me&&ln(g,X),J;if(K===null){for(;!le.done;X++,le=x.next())le=z(g,le.value,I),le!==null&&(h=l(le,h,X),q===null?J=le:q.sibling=le,q=le);return me&&ln(g,X),J}for(K=r(g,K);!le.done;X++,le=x.next())le=U(K,g,X,le.value,I),le!==null&&(e&&le.alternate!==null&&K.delete(le.key===null?X:le.key),h=l(le,h,X),q===null?J=le:q.sibling=le,q=le);return e&&K.forEach(function(Of){return t(g,Of)}),me&&ln(g,X),J}function Ce(g,h,x,I){if(typeof x=="object"&&x!==null&&x.type===he&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:e:{for(var J=x.key,q=h;q!==null;){if(q.key===J){if(J=x.type,J===he){if(q.tag===7){n(g,q.sibling),h=o(q,x.props.children),h.return=g,g=h;break e}}else if(q.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ve&&Du(J)===q.type){n(g,q.sibling),h=o(q,x.props),h.ref=mr(g,q,x),h.return=g,g=h;break e}n(g,q);break}else t(g,q);q=q.sibling}x.type===he?(h=mn(x.props.children,g.mode,I,x.key),h.return=g,g=h):(I=Uo(x.type,x.key,x.props,null,g.mode,I),I.ref=mr(g,h,x),I.return=g,g=I)}return a(g);case xe:e:{for(q=x.key;h!==null;){if(h.key===q)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(g,h.sibling),h=o(h,x.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Wi(x,g.mode,I),h.return=g,g=h}return a(g);case Ve:return q=x._init,Ce(g,h,q(x._payload),I)}if(Hn(x))return V(g,h,x,I);if(Y(x))return W(g,h,x,I);ho(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,x),h.return=g,g=h):(n(g,h),h=Hi(x,g.mode,I),h.return=g,g=h),a(g)):n(g,h)}return Ce}var Tn=Fu(!0),Au=Fu(!1),vo=Ht(null),go=null,In=null,bl=null;function ei(){bl=In=go=null}function ti(e){var t=vo.current;fe(vo),e._currentValue=t}function ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){go=e,bl=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(go===null)throw Error(u(308));In=e,go.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var an=null;function ri(e){an===null?an=[e]:an.push(e)}function Uu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ri(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,ri(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xo(e,t,n,r){var o=e.updateQueue;Jt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var p=c,w=p.next;p.next=null,a===null?l=w:a.next=w,a=p;var L=e.alternate;L!==null&&(L=L.updateQueue,c=L.lastBaseUpdate,c!==a&&(c===null?L.firstBaseUpdate=w:c.next=w,L.lastBaseUpdate=p))}if(l!==null){var z=o.baseState;a=0,L=w=p=null,c=l;do{var _=c.lane,U=c.eventTime;if((r&_)===_){L!==null&&(L=L.next={eventTime:U,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var V=e,W=c;switch(_=t,U=n,W.tag){case 1:if(V=W.payload,typeof V=="function"){z=V.call(U,z,_);break e}z=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,_=typeof V=="function"?V.call(U,z,_):V,_==null)break e;z=B({},z,_);break e;case 2:Jt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[c]:_.push(c))}else U={eventTime:U,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},L===null?(w=L=U,p=z):L=L.next=U,a|=_;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;_=c,c=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(L===null&&(p=z),o.baseState=p,o.firstBaseUpdate=w,o.lastBaseUpdate=L,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);cn|=a,e.lanes=a,e.memoizedState=z}}function Vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var hr={},wt=Ht(hr),vr=Ht(hr),gr=Ht(hr);function un(e){if(e===hr)throw Error(u(174));return e}function li(e,t){switch(ce(gr,t),ce(vr,e),ce(wt,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}fe(wt),ce(wt,t)}function Mn(){fe(wt),fe(vr),fe(gr)}function Hu(e){un(gr.current);var t=un(wt.current),n=il(t,e.type);t!==n&&(ce(vr,e),ce(wt,n))}function ii(e){vr.current===e&&(fe(wt),fe(vr))}var ve=Ht(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function ui(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var So=ee.ReactCurrentDispatcher,si=ee.ReactCurrentBatchConfig,sn=0,ge=null,_e=null,Le=null,Eo=!1,yr=!1,xr=0,tf=0;function De(){throw Error(u(321))}function ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function di(e,t,n,r,o,l){if(sn=l,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?lf:af,e=n(r,o),yr){l=0;do{if(yr=!1,xr=0,25<=l)throw Error(u(301));l+=1,Le=_e=null,t.updateQueue=null,So.current=uf,e=n(r,o)}while(yr)}if(So.current=No,t=_e!==null&&_e.next!==null,sn=0,Le=_e=ge=null,Eo=!1,t)throw Error(u(300));return e}function fi(){var e=xr!==0;return xr=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ge.memoizedState=Le=e:Le=Le.next=e,Le}function ot(){if(_e===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Le===null?ge.memoizedState:Le.next;if(t!==null)Le=t,_e=e;else{if(e===null)throw Error(u(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Le===null?ge.memoizedState=Le=e:Le=Le.next=e}return Le}function wr(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=_e,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var c=a=null,p=null,w=l;do{var L=w.lane;if((sn&L)===L)p!==null&&(p=p.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var z={lane:L,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};p===null?(c=p=z,a=r):p=p.next=z,ge.lanes|=L,cn|=L}w=w.next}while(w!==null&&w!==l);p===null?a=r:p.next=c,st(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ge.lanes|=l,cn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mi(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);st(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Wu(){}function Qu(e,t){var n=ge,r=ot(),o=t(),l=!st(r.memoizedState,o);if(l&&(r.memoizedState=o,Qe=!0),r=r.queue,hi(Ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Sr(9,qu.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(u(349));(sn&30)!==0||Ju(n,t,o)}return o}function Ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Xu(e)}function Ku(e,t,n){return n(function(){Yu(t)&&Xu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Xu(e){var t=Lt(e,1);t!==null&&mt(t,e,1,-1)}function Gu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,ge,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zu(){return ot().memoizedState}function ko(e,t,n,r){var o=St();ge.flags|=e,o.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var o=ot();r=r===void 0?null:r;var l=void 0;if(_e!==null){var a=_e.memoizedState;if(l=a.destroy,r!==null&&ci(r,a.deps)){o.memoizedState=Sr(t,n,l,r);return}}ge.flags|=e,o.memoizedState=Sr(1|t,n,l,r)}function bu(e,t){return ko(8390656,8,e,t)}function hi(e,t){return Co(2048,8,e,t)}function es(e,t){return Co(4,2,e,t)}function ts(e,t){return Co(4,4,e,t)}function ns(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rs(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,ns.bind(null,t,e),n)}function vi(){}function os(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ci(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function is(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(st(n,t)||(n=Da(),ge.lanes|=n,cn|=n,e.baseState=!0),t)}function nf(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=si.transition;si.transition={};try{e(!1),t()}finally{ae=n,si.transition=r}}function as(){return ot().memoizedState}function rf(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},us(e))ss(t,n);else if(n=Uu(e,t,n,r),n!==null){var o=$e();mt(n,e,r,o),cs(n,t,r)}}function of(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))ss(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,c=l(a,n);if(o.hasEagerState=!0,o.eagerState=c,st(c,a)){var p=t.interleaved;p===null?(o.next=o,ri(t)):(o.next=p.next,p.next=o),t.interleaved=o;return}}catch{}finally{}n=Uu(e,t,o,r),n!==null&&(o=$e(),mt(n,e,r,o),cs(n,t,r))}}function us(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function ss(e,t){yr=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cs(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}var No={readContext:rt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},lf={readContext:rt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,ns.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:vi,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=nf.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=St();if(me){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ze===null)throw Error(u(349));(sn&30)!==0||Ju(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,bu(Ku.bind(null,r,l,e),[e]),r.flags|=2048,Sr(9,qu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=St(),t=ze.identifierPrefix;if(me){var n=jt,r=Rt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},af={readContext:rt,useCallback:os,useContext:rt,useEffect:hi,useImperativeHandle:rs,useInsertionEffect:es,useLayoutEffect:ts,useMemo:ls,useReducer:pi,useRef:Zu,useState:function(){return pi(wr)},useDebugValue:vi,useDeferredValue:function(e){var t=ot();return is(t,_e.memoizedState,e)},useTransition:function(){var e=pi(wr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Qu,useId:as,unstable_isNewReconciler:!1},uf={readContext:rt,useCallback:os,useContext:rt,useEffect:hi,useImperativeHandle:rs,useInsertionEffect:es,useLayoutEffect:ts,useMemo:ls,useReducer:mi,useRef:Zu,useState:function(){return mi(wr)},useDebugValue:vi,useDeferredValue:function(e){var t=ot();return _e===null?t.memoizedState=e:is(t,_e.memoizedState,e)},useTransition:function(){var e=mi(wr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Qu,useId:as,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Gt(e),l=zt(r,o);l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(mt(t,e,o,r),yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Gt(e),l=zt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(mt(t,e,o,r),yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Gt(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(mt(t,e,r,n),yo(t,e,r))}};function ds(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(o,l):!0}function fs(e,t,n){var r=!1,o=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=rt(l):(o=We(t)?rn:Me.current,r=t.contextTypes,l=(r=r!=null)?Rn(e,o):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function yi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},oi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=rt(l):(l=We(t)?rn:Me.current,o.context=Rn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(gi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),xo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function ms(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,Mi=r),wi(e,t)},n}function hs(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){wi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){wi(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=kf.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ys(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var cf=ee.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?Au(t,null,n,r):Tn(t,e.child,n,r)}function xs(e,t,n,r,o){n=n.render;var l=t.ref;return On(t,o),r=di(e,t,n,r,l,o),n=fi(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(me&&n&&Kl(t),t.flags|=1,Ue(e,t,r,o),t.child)}function ws(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Vi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ss(e,t,l,r,o)):(e=Uo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(a,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return Si(e,t,n,r,o)}function Es(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(An,et),et|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(An,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ce(An,et),et|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ce(An,et),et|=r;return Ue(e,t,o,n),t.child}function ks(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Si(e,t,n,r,o){var l=We(n)?rn:Me.current;return l=Rn(t,l),On(t,o),n=di(e,t,n,r,l,o),r=fi(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(me&&r&&Kl(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Cs(e,t,n,r,o){if(We(n)){var l=!0;so(t)}else l=!1;if(On(t,o),t.stateNode===null)Ro(e,t),fs(t,n,r),yi(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var p=a.context,w=n.contextType;typeof w=="object"&&w!==null?w=rt(w):(w=We(n)?rn:Me.current,w=Rn(t,w));var L=n.getDerivedStateFromProps,z=typeof L=="function"||typeof a.getSnapshotBeforeUpdate=="function";z||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||p!==w)&&ps(t,a,r,w),Jt=!1;var _=t.memoizedState;a.state=_,xo(t,r,a,o),p=t.memoizedState,c!==r||_!==p||He.current||Jt?(typeof L=="function"&&(gi(t,n,L,r),p=t.memoizedState),(c=Jt||ds(t,n,c,r,_,p,w))?(z||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=w,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$u(e,t),c=t.memoizedProps,w=t.type===t.elementType?c:dt(t.type,c),a.props=w,z=t.pendingProps,_=a.context,p=n.contextType,typeof p=="object"&&p!==null?p=rt(p):(p=We(n)?rn:Me.current,p=Rn(t,p));var U=n.getDerivedStateFromProps;(L=typeof U=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==z||_!==p)&&ps(t,a,r,p),Jt=!1,_=t.memoizedState,a.state=_,xo(t,r,a,o);var V=t.memoizedState;c!==z||_!==V||He.current||Jt?(typeof U=="function"&&(gi(t,n,U,r),V=t.memoizedState),(w=Jt||ds(t,n,w,r,_,V,p)||!1)?(L||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,V,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,V,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),a.props=r,a.state=V,a.context=p,r=w):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return Ei(e,t,n,r,l,o)}function Ei(e,t,n,r,o,l){ks(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&ju(t,n,!1),Tt(e,t,l);r=t.stateNode,cf.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,c,l)):Ue(e,t,c,l),t.memoizedState=r.state,o&&ju(t,n,!0),t.child}function Ns(e){var t=e.stateNode;t.pendingContext?_u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_u(e,t.context,!1),li(e,t.containerInfo)}function Ps(e,t,n,r,o){return zn(),Zl(o),t.flags|=256,Ue(e,t,n,r),t.child}var ki={dehydrated:null,treeContext:null,retryLane:0};function Ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function _s(e,t,n){var r=t.pendingProps,o=ve.current,l=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(ve,o&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=$o(a,r,0,null),e=mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ci(n),t.memoizedState=ki,e):Ni(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return df(e,t,a,r,c,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,c=o.sibling;var p={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=bt(o,p),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=bt(c,l):(l=mn(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Ci(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=ki,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ni(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Zl(r),Tn(t,e.child,null,n),e=Ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=xi(Error(u(422))),_o(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=$o({mode:"visible",children:r.children},o,0,null),l=mn(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,a),t.child.memoizedState=Ci(a),t.memoizedState=ki,l);if((t.mode&1)===0)return _o(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(u(419)),r=xi(l,r,void 0),_o(e,t,a,r)}if(c=(a&e.childLanes)!==0,Qe||c){if(r=ze,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),mt(r,e,o,-1))}return Bi(),r=xi(Error(u(421))),_o(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,be=Vt(o.nextSibling),Ze=t,me=!0,ct=null,e!==null&&(tt[nt++]=Rt,tt[nt++]=jt,tt[nt++]=on,Rt=e.id,jt=e.overflow,on=t),t=Ni(t,r.children),t.flags|=4096,t)}function Rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ni(e.return,t,n)}function Pi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function js(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ue(e,t,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ve,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Pi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Pi(t,!0,n,null,l);break;case"together":Pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Ns(t),zn();break;case 5:Hu(t);break;case 1:We(t.type)&&so(t);break;case 4:li(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ce(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?_s(e,t,n):(ce(ve,ve.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return js(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Tt(e,t,n)}var Ls,_i,zs,Ts;Ls=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_i=function(){},zs=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,un(wt.current);var l=null;switch(n){case"input":o=nl(e,o),r=nl(e,r),l=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":o=ll(e,o),r=ll(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}al(n,r);var a;n=null;for(w in o)if(!r.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var c=o[w];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(d.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in r){var p=r[w];if(c=o!=null?o[w]:void 0,r.hasOwnProperty(w)&&p!==c&&(p!=null||c!=null))if(w==="style")if(c){for(a in c)!c.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in p)p.hasOwnProperty(a)&&c[a]!==p[a]&&(n||(n={}),n[a]=p[a])}else n||(l||(l=[]),l.push(w,n)),n=p;else w==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,c=c?c.__html:void 0,p!=null&&c!==p&&(l=l||[]).push(w,p)):w==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(w,""+p):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(d.hasOwnProperty(w)?(p!=null&&w==="onScroll"&&de("scroll",e),l||c===p||(l=[])):(l=l||[]).push(w,p))}n&&(l=l||[]).push("style",n);var w=l;(t.updateQueue=w)&&(t.flags|=4)}},Ts=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return We(t.type)&&uo(),Fe(t),null;case 3:return r=t.stateNode,Mn(),fe(He),fe(Me),ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(Ai(ct),ct=null))),_i(e,t),Fe(t),null;case 5:ii(t);var o=un(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)zs(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}if(e=un(wt.current),mo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[fr]=l,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)de(sr[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":fa(r,l),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},de("invalid",r);break;case"textarea":ha(r,l),de("invalid",r)}al(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&lo(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&lo(r.textContent,c,e),o=["children",""+c]):d.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":Dr(r),ma(r,l,!0);break;case"textarea":Dr(r),ga(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=io)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ya(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xt]=t,e[fr]=r,Ls(e,t,!1,!1),t.stateNode=e;e:{switch(a=ul(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)de(sr[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":fa(e,r),o=nl(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),de("invalid",e);break;case"textarea":ha(e,r),o=ll(e,r),de("invalid",e);break;default:o=r}al(n,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var p=c[l];l==="style"?Sa(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&xa(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Wn(e,p):typeof p=="number"&&Wn(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?p!=null&&l==="onScroll"&&de("scroll",e):p!=null&&G(e,l,p,a))}switch(n){case"input":Dr(e),ma(e,r,!1);break;case"textarea":Dr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ie(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Ts(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=un(gr.current),un(wt.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Fe(t),null;case 13:if(fe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&be!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Mu(),zn(),t.flags|=98560,l=!1;else if(l=mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[xt]=t}else zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),l=!1}else ct!==null&&(Ai(ct),ct=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ve.current&1)!==0?Re===0&&(Re=3):Bi())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Mn(),_i(e,t),e===null&&cr(t.stateNode.containerInfo),Fe(t),null;case 10:return ti(t.type._context),Fe(t),null;case 17:return We(t.type)&&uo(),Fe(t),null;case 19:if(fe(ve),l=t.memoizedState,l===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Er(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=wo(e),a!==null){for(t.flags|=128,Er(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),t.child}e=e.sibling}l.tail!==null&&ke()>Un&&(t.flags|=128,r=!0,Er(l,!1),t.lanes=4194304)}else{if(!r)if(e=wo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!me)return Fe(t),null}else 2*ke()-l.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,Er(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ke(),t.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return $i(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(et&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function mf(e,t){switch(Yl(t),t.tag){case 1:return We(t.type)&&uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),fe(He),fe(Me),ui(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ii(t),null;case 13:if(fe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ve),null;case 4:return Mn(),null;case 10:return ti(t.type._context),null;case 22:case 23:return $i(),null;case 24:return null;default:return null}}var jo=!1,Ae=!1,hf=typeof WeakSet=="function"?WeakSet:Set,$=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Is=!1;function vf(e,t){if($l=Kr,e=du(),Tl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,c=-1,p=-1,w=0,L=0,z=e,_=null;t:for(;;){for(var U;z!==n||o!==0&&z.nodeType!==3||(c=a+o),z!==l||r!==0&&z.nodeType!==3||(p=a+r),z.nodeType===3&&(a+=z.nodeValue.length),(U=z.firstChild)!==null;)_=z,z=U;for(;;){if(z===e)break t;if(_===n&&++w===o&&(c=a),_===l&&++L===r&&(p=a),(U=z.nextSibling)!==null)break;z=_,_=z.parentNode}z=U}n=c===-1||p===-1?null:{start:c,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},Kr=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var W=V.memoizedProps,Ce=V.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?W:dt(t.type,W),Ce);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(I){Ee(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return V=Is,Is=!1,V}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ri(t,n,l)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Os(e){var t=e.alternate;t!==null&&(e.alternate=null,Os(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[fr],delete t[Ql],delete t[Gd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ms(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}function zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zi(e,t,n),e=e.sibling;e!==null;)zi(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Vr,n)}catch{}switch(n.tag){case 5:Ae||Fn(n,t);case 6:var r=Ie,o=ft;Ie=null,Kt(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),tr(e)):Wl(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Kt(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&Ri(n,t,a),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!Ae&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ee(n,t,c)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Kt(e,t,n),Ae=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function As(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var o=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ie=c.stateNode,ft=!1;break e;case 3:Ie=c.stateNode.containerInfo,ft=!0;break e;case 4:Ie=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(Ie===null)throw Error(u(160));Fs(l,a,o),Ie=null,ft=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(w){Ee(o,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Us(t,e),t=t.sibling}function Us(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Et(e),r&4){try{kr(3,e,e.return),Lo(3,e)}catch(W){Ee(e,e.return,W)}try{kr(5,e,e.return)}catch(W){Ee(e,e.return,W)}}break;case 1:pt(t,e),Et(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(pt(t,e),Et(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{Wn(o,"")}catch(W){Ee(e,e.return,W)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,c=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&pa(o,l),ul(c,a);var w=ul(c,l);for(a=0;a<p.length;a+=2){var L=p[a],z=p[a+1];L==="style"?Sa(o,z):L==="dangerouslySetInnerHTML"?xa(o,z):L==="children"?Wn(o,z):G(o,L,z,w)}switch(c){case"input":rl(o,l);break;case"textarea":va(o,l);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?vn(o,!!l.multiple,U,!1):_!==!!l.multiple&&(l.defaultValue!=null?vn(o,!!l.multiple,l.defaultValue,!0):vn(o,!!l.multiple,l.multiple?[]:"",!1))}o[fr]=l}catch(W){Ee(e,e.return,W)}}break;case 6:if(pt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(W){Ee(e,e.return,W)}}break;case 3:if(pt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(W){Ee(e,e.return,W)}break;case 4:pt(t,e),Et(e);break;case 13:pt(t,e),Et(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Oi=ke())),r&4&&As(e);break;case 22:if(L=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(w=Ae)||L,pt(t,e),Ae=w):pt(t,e),Et(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!L&&(e.mode&1)!==0)for($=e,L=e.child;L!==null;){for(z=$=L;$!==null;){switch(_=$,U=_.child,_.tag){case 0:case 11:case 14:case 15:kr(4,_,_.return);break;case 1:Fn(_,_.return);var V=_.stateNode;if(typeof V.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(W){Ee(r,n,W)}}break;case 5:Fn(_,_.return);break;case 22:if(_.memoizedState!==null){Vs(z);continue}}U!==null?(U.return=_,$=U):Vs(z)}L=L.sibling}e:for(L=null,z=e;;){if(z.tag===5){if(L===null){L=z;try{o=z.stateNode,w?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=z.stateNode,p=z.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,c.style.display=wa("display",a))}catch(W){Ee(e,e.return,W)}}}else if(z.tag===6){if(L===null)try{z.stateNode.nodeValue=w?"":z.memoizedProps}catch(W){Ee(e,e.return,W)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;L===z&&(L=null),z=z.return}L===z&&(L=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:pt(t,e),Et(e),r&4&&As(e);break;case 21:break;default:pt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ms(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wn(o,""),r.flags&=-33);var l=Ds(e);zi(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Ds(e);Li(e,c,a);break;default:throw Error(u(161))}}catch(p){Ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gf(e,t,n){$=e,$s(e)}function $s(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||jo;if(!a){var c=o.alternate,p=c!==null&&c.memoizedState!==null||Ae;c=jo;var w=Ae;if(jo=a,(Ae=p)&&!w)for($=o;$!==null;)a=$,p=a.child,a.tag===22&&a.memoizedState!==null?Hs(o):p!==null?(p.return=a,$=p):Hs(o);for(;l!==null;)$=l,$s(l),l=l.sibling;$=o,jo=c,Ae=w}Bs(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,$=l):Bs(e)}}function Bs(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ae||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Vu(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vu(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var L=w.memoizedState;if(L!==null){var z=L.dehydrated;z!==null&&tr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ae||t.flags&512&&ji(t)}catch(_){Ee(t,t.return,_)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Vs(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Hs(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(p){Ee(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(p){Ee(t,o,p)}}var l=t.return;try{ji(t)}catch(p){Ee(t,l,p)}break;case 5:var a=t.return;try{ji(t)}catch(p){Ee(t,a,p)}}}catch(p){Ee(t,t.return,p)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var yf=Math.ceil,zo=ee.ReactCurrentDispatcher,Ti=ee.ReactCurrentOwner,lt=ee.ReactCurrentBatchConfig,ne=0,ze=null,Pe=null,Oe=0,et=0,An=Ht(0),Re=0,Cr=null,cn=0,To=0,Ii=0,Nr=null,Je=null,Oi=0,Un=1/0,It=null,Io=!1,Mi=null,Yt=null,Oo=!1,Xt=null,Mo=0,Pr=0,Di=null,Do=-1,Fo=0;function $e(){return(ne&6)!==0?ke():Do!==-1?Do:Do=ke()}function Gt(e){return(e.mode&1)===0?1:(ne&2)!==0&&Oe!==0?Oe&-Oe:ef.transition!==null?(Fo===0&&(Fo=Da()),Fo):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Qa(e.type)),e)}function mt(e,t,n,r){if(50<Pr)throw Pr=0,Di=null,Error(u(185));Xn(e,n,r),((ne&2)===0||e!==ze)&&(e===ze&&((ne&2)===0&&(To|=n),Re===4&&Zt(e,Oe)),qe(e,r),n===1&&ne===0&&(t.mode&1)===0&&(Un=ke()+500,co&&Qt()))}function qe(e,t){var n=e.callbackNode;ed(e,t);var r=Qr(e,e===ze?Oe:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?bd(Qs.bind(null,e)):Lu(Qs.bind(null,e)),Yd(function(){(ne&6)===0&&Qt()}),n=null;else{switch(Fa(r)){case 1:n=hl;break;case 4:n=Oa;break;case 16:n=Br;break;case 536870912:n=Ma;break;default:n=Br}n=bs(n,Ws.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ws(e,t){if(Do=-1,Fo=0,(ne&6)!==0)throw Error(u(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=Qr(e,e===ze?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ao(e,r);else{t=r;var o=ne;ne|=2;var l=qs();(ze!==e||Oe!==t)&&(It=null,Un=ke()+500,fn(e,t));do try{Sf();break}catch(c){Js(e,c)}while(!0);ei(),zo.current=l,ne=o,Pe!==null?t=0:(ze=null,Oe=0,t=Re)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Fi(e,o))),t===1)throw n=Cr,fn(e,0),Zt(e,r),qe(e,ke()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!xf(o)&&(t=Ao(e,r),t===2&&(l=vl(e),l!==0&&(r=l,t=Fi(e,l))),t===1))throw n=Cr,fn(e,0),Zt(e,r),qe(e,ke()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:pn(e,Je,It);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Oi+500-ke(),10<t)){if(Qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hl(pn.bind(null,e,Je,It),t);break}pn(e,Je,It);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-ut(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Hl(pn.bind(null,e,Je,It),r);break}pn(e,Je,It);break;case 5:pn(e,Je,It);break;default:throw Error(u(329))}}}return qe(e,ke()),e.callbackNode===n?Ws.bind(null,e):null}function Fi(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=Je,Je=n,t!==null&&Ai(t)),e}function Ai(e){Je===null?Je=e:Je.push.apply(Je,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!st(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Ii,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if((ne&6)!==0)throw Error(u(327));$n();var t=Qr(e,0);if((t&1)===0)return qe(e,ke()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=Cr,fn(e,0),Zt(e,t),qe(e,ke()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Je,It),qe(e,ke()),null}function Ui(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Un=ke()+500,co&&Qt())}}function dn(e){Xt!==null&&Xt.tag===0&&(ne&6)===0&&$n();var t=ne;ne|=1;var n=lt.transition,r=ae;try{if(lt.transition=null,ae=1,e)return e()}finally{ae=r,lt.transition=n,ne=t,(ne&6)===0&&Qt()}}function $i(){et=An.current,fe(An)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Mn(),fe(He),fe(Me),ui();break;case 5:ii(r);break;case 4:Mn();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:ti(r.type._context);break;case 22:case 23:$i()}n=n.return}if(ze=e,Pe=e=bt(e.current,null),Oe=et=t,Re=0,Cr=null,Ii=To=cn=0,Je=Nr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}an=null}return e}function Js(e,t){do{var n=Pe;try{if(ei(),So.current=No,Eo){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Eo=!1}if(sn=0,Le=_e=ge=null,yr=!1,xr=0,Ti.current=null,n===null||n.return===null){Re=1,Cr=t,Pe=null;break}e:{var l=e,a=n.return,c=n,p=t;if(t=Oe,c.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var w=p,L=c,z=L.tag;if((L.mode&1)===0&&(z===0||z===11||z===15)){var _=L.alternate;_?(L.updateQueue=_.updateQueue,L.memoizedState=_.memoizedState,L.lanes=_.lanes):(L.updateQueue=null,L.memoizedState=null)}var U=gs(a);if(U!==null){U.flags&=-257,ys(U,a,c,l,t),U.mode&1&&vs(l,w,t),t=U,p=w;var V=t.updateQueue;if(V===null){var W=new Set;W.add(p),t.updateQueue=W}else V.add(p);break e}else{if((t&1)===0){vs(l,w,t),Bi();break e}p=Error(u(426))}}else if(me&&c.mode&1){var Ce=gs(a);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),ys(Ce,a,c,l,t),Zl(Dn(p,c));break e}}l=p=Dn(p,c),Re!==4&&(Re=2),Nr===null?Nr=[l]:Nr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=ms(l,p,t);Bu(l,g);break e;case 1:c=p;var h=l.type,x=l.stateNode;if((l.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yt===null||!Yt.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var I=hs(l,c,t);Bu(l,I);break e}}l=l.return}while(l!==null)}Ys(n)}catch(J){t=J,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function qs(){var e=zo.current;return zo.current=No,e===null?No:e}function Bi(){(Re===0||Re===3||Re===2)&&(Re=4),ze===null||(cn&268435455)===0&&(To&268435455)===0||Zt(ze,Oe)}function Ao(e,t){var n=ne;ne|=2;var r=qs();(ze!==e||Oe!==t)&&(It=null,fn(e,t));do try{wf();break}catch(o){Js(e,o)}while(!0);if(ei(),ne=n,zo.current=r,Pe!==null)throw Error(u(261));return ze=null,Oe=0,Re}function wf(){for(;Pe!==null;)Ks(Pe)}function Sf(){for(;Pe!==null&&!Qc();)Ks(Pe)}function Ks(e){var t=Zs(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Ys(e):Pe=t,Ti.current=null}function Ys(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pf(n,t,et),n!==null){Pe=n;return}}else{if(n=mf(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Re===0&&(Re=5)}function pn(e,t,n){var r=ae,o=lt.transition;try{lt.transition=null,ae=1,Ef(e,t,n,r)}finally{lt.transition=o,ae=r}return null}function Ef(e,t,n,r){do $n();while(Xt!==null);if((ne&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(td(e,l),e===ze&&(Pe=ze=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,bs(Br,function(){return $n(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=lt.transition,lt.transition=null;var a=ae;ae=1;var c=ne;ne|=4,Ti.current=null,vf(e,n),Us(n,e),Bd(Bl),Kr=!!$l,Bl=$l=null,e.current=n,gf(n),Jc(),ne=c,ae=a,lt.transition=l}else e.current=n;if(Oo&&(Oo=!1,Xt=e,Mo=o),l=e.pendingLanes,l===0&&(Yt=null),Yc(n.stateNode),qe(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Io)throw Io=!1,e=Mi,Mi=null,e;return(Mo&1)!==0&&e.tag!==0&&$n(),l=e.pendingLanes,(l&1)!==0?e===Di?Pr++:(Pr=0,Di=e):Pr=0,Qt(),null}function $n(){if(Xt!==null){var e=Fa(Mo),t=lt.transition,n=ae;try{if(lt.transition=null,ae=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Mo=0,(ne&6)!==0)throw Error(u(331));var o=ne;for(ne|=4,$=e.current;$!==null;){var l=$,a=l.child;if(($.flags&16)!==0){var c=l.deletions;if(c!==null){for(var p=0;p<c.length;p++){var w=c[p];for($=w;$!==null;){var L=$;switch(L.tag){case 0:case 11:case 15:kr(8,L,l)}var z=L.child;if(z!==null)z.return=L,$=z;else for(;$!==null;){L=$;var _=L.sibling,U=L.return;if(Os(L),L===w){$=null;break}if(_!==null){_.return=U,$=_;break}$=U}}}var V=l.alternate;if(V!==null){var W=V.child;if(W!==null){V.child=null;do{var Ce=W.sibling;W.sibling=null,W=Ce}while(W!==null)}}$=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,$=a;else e:for(;$!==null;){if(l=$,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:kr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,$=g;break e}$=l.return}}var h=e.current;for($=h;$!==null;){a=$;var x=a.child;if((a.subtreeFlags&2064)!==0&&x!==null)x.return=a,$=x;else e:for(a=h;$!==null;){if(c=$,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Lo(9,c)}}catch(J){Ee(c,c.return,J)}if(c===a){$=null;break e}var I=c.sibling;if(I!==null){I.return=c.return,$=I;break e}$=c.return}}if(ne=o,Qt(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Vr,e)}catch{}r=!0}return r}finally{ae=n,lt.transition=t}}return!1}function Xs(e,t,n){t=Dn(n,t),t=ms(e,t,1),e=qt(e,t,1),t=$e(),e!==null&&(Xn(e,1,t),qe(e,t))}function Ee(e,t,n){if(e.tag===3)Xs(e,e,n);else for(;t!==null;){if(t.tag===3){Xs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Dn(n,e),e=hs(t,e,1),t=qt(t,e,1),e=$e(),t!==null&&(Xn(t,1,e),qe(t,e));break}}t=t.return}}function kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Oe&n)===n&&(Re===4||Re===3&&(Oe&130023424)===Oe&&500>ke()-Oi?fn(e,0):Ii|=n),qe(e,t)}function Gs(e,t){t===0&&((e.mode&1)===0?t=1:(t=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var n=$e();e=Lt(e,t),e!==null&&(Xn(e,t,n),qe(e,n))}function Cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gs(e,n)}function Nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Gs(e,n)}var Zs;Zs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,ff(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&zu(t,po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var o=Rn(t,Me.current);On(t,n),o=di(null,t,r,e,o,n);var l=fi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(l=!0,so(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,oi(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,yi(t,r,e,n),t=Ei(null,t,r,!0,l,n)):(t.tag=0,me&&l&&Kl(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_f(r),e=dt(r,e),o){case 0:t=Si(null,t,r,e,n);break e;case 1:t=Cs(null,t,r,e,n);break e;case 11:t=xs(null,t,r,e,n);break e;case 14:t=ws(null,t,r,dt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Si(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Cs(e,t,r,o,n);case 3:e:{if(Ns(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,o=l.element,$u(e,t),xo(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Dn(Error(u(423)),t),t=Ps(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(u(424)),t),t=Ps(e,t,r,n,o);break e}else for(be=Vt(t.stateNode.containerInfo.firstChild),Ze=t,me=!0,ct=null,n=Au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===o){t=Tt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Hu(t),e===null&&Gl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Vl(r,o)?a=null:l!==null&&Vl(r,l)&&(t.flags|=32),ks(e,t),Ue(e,t,a,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return _s(e,t,n);case 4:return li(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),xs(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,ce(vo,r._currentValue),r._currentValue=a,l!==null)if(st(l.value,a)){if(l.children===o.children&&!He.current){t=Tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){a=l.child;for(var p=c.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=zt(-1,n&-n),p.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var L=w.pending;L===null?p.next=p:(p.next=L.next,L.next=p),w.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),ni(l.return,n,t),c.lanes|=n;break}p=p.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(u(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ni(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,On(t,n),o=rt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),ws(e,t,r,o,n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Ro(e,t),t.tag=1,We(r)?(e=!0,so(t)):e=!1,On(t,n),fs(t,r,o),yi(t,r,o,n),Ei(null,t,r,!0,e,n);case 19:return js(e,t,n);case 22:return Es(e,t,n)}throw Error(u(156,t.tag))};function bs(e,t){return Ta(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Pf(e,t,n,r)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vt)return 11;if(e===gt)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uo(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Vi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case he:return mn(n.children,o,l,t);case Ne:a=8,o|=8;break;case we:return e=it(12,n,t,o|2),e.elementType=we,e.lanes=l,e;case Ye:return e=it(13,n,t,o),e.elementType=Ye,e.lanes=l,e;case at:return e=it(19,n,t,o),e.elementType=at,e.lanes=l,e;case Se:return $o(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:a=10;break e;case ht:a=9;break e;case vt:a=11;break e;case gt:a=14;break e;case Ve:a=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=it(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function mn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=it(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Wi(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qi(e,t,n,r,o,l,a,c,p){return e=new Rf(e,t,n,c,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=it(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oi(l),e}function jf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return Wt;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(We(n))return Ru(e,n,t)}return t}function tc(e,t,n,r,o,l,a,c,p){return e=Qi(n,r,!0,e,o,l,a,c,p),e.context=ec(null),n=e.current,r=$e(),o=Gt(n),l=zt(r,o),l.callback=t??null,qt(n,l,o),e.current.lanes=o,Xn(e,o,r),qe(e,r),e}function Bo(e,t,n,r){var o=t.current,l=$e(),a=Gt(o);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,a),e!==null&&(mt(e,o,a,l),yo(e,o,a)),a}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ji(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function Lf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function qi(e){this._internalRoot=e}Ho.prototype.render=qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Bo(e,t,null,null)},Ho.prototype.unmount=qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Bo(null,e,null,null)}),t[Pt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=$a();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Ha(e)}};function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oc(){}function zf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var w=Vo(a);l.call(w)}}var a=tc(t,r,e,0,null,!1,!1,"",oc);return e._reactRootContainer=a,e[Pt]=a.current,cr(e.nodeType===8?e.parentNode:e),dn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var w=Vo(p);c.call(w)}}var p=Qi(e,0,!1,null,null,!1,!1,"",oc);return e._reactRootContainer=p,e[Pt]=p.current,cr(e.nodeType===8?e.parentNode:e),dn(function(){Bo(t,p,n,r)}),p}function Qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var c=o;o=function(){var p=Vo(a);c.call(p)}}Bo(t,a,e,o)}else a=zf(n,t,e,o,r);return Vo(a)}Aa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(yl(t,n|1),qe(t,ke()),(ne&6)===0&&(Un=ke()+500,Qt()))}break;case 13:dn(function(){var r=Lt(e,1);if(r!==null){var o=$e();mt(r,e,1,o)}}),Ji(e,1)}},xl=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=$e();mt(t,e,134217728,n)}Ji(e,134217728)}},Ua=function(e){if(e.tag===13){var t=Gt(e),n=Lt(e,t);if(n!==null){var r=$e();mt(n,e,t,r)}Ji(e,t)}},$a=function(){return ae},Ba=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}},dl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ao(r);if(!o)throw Error(u(90));da(r),rl(r,o)}}}break;case"textarea":va(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},Na=Ui,Pa=dn;var Tf={usingClientEntryPoint:!1,Events:[pr,Pn,ao,ka,Ca,Ui]},_r={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=La(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Vr=Jo.inject(If),yt=Jo}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ki(t))throw Error(u(200));return jf(e,t,null,n)},Ke.createRoot=function(e,t){if(!Ki(e))throw Error(u(299));var n=!1,r="",o=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qi(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,cr(e.nodeType===8?e.parentNode:e),new qi(t)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=La(t),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return dn(e)},Ke.hydrate=function(e,t,n){if(!Wo(t))throw Error(u(200));return Qo(null,e,t,!0,n)},Ke.hydrateRoot=function(e,t,n){if(!Ki(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=rc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tc(t,null,e,1,n??null,o,!1,l,a),e[Pt]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)},Ke.render=function(e,t,n){if(!Wo(t))throw Error(u(200));return Qo(null,e,t,!1,n)},Ke.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(u(40));return e._reactRootContainer?(dn(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},Ke.unstable_batchedUpdates=Ui,Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Qo(e,t,n,!1,r)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var fc;function Bf(){if(fc)return Gi.exports;fc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Gi.exports=$f(),Gi.exports}var pc;function Vf(){if(pc)return qo;pc=1;var i=Bf();return qo.createRoot=i.createRoot,qo.hydrateRoot=i.hydrateRoot,qo}var Hf=Vf();const Wf=wc(Hf);var jr={},mc;function Qf(){if(mc)return jr;mc=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.parse=S,jr.serialize=E;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,f=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,m=(()=>{const P=function(){};return P.prototype=Object.create(null),P})();function S(P,Q){const T=new m,D=P.length;if(D<2)return T;const F=(Q==null?void 0:Q.decode)||R;let O=0;do{const H=P.indexOf("=",O);if(H===-1)break;const G=P.indexOf(";",O),ee=G===-1?D:G;if(H>ee){O=P.lastIndexOf(";",H-1)+1;continue}const ue=k(P,O,H),xe=y(P,H,ue),he=P.slice(ue,xe);if(T[he]===void 0){let Ne=k(P,H+1,ee),we=y(P,ee,Ne);const je=F(P.slice(Ne,we));T[he]=je}O=ee+1}while(O<D);return T}function k(P,Q,T){do{const D=P.charCodeAt(Q);if(D!==32&&D!==9)return Q}while(++Q<T);return T}function y(P,Q,T){for(;Q>T;){const D=P.charCodeAt(--Q);if(D!==32&&D!==9)return Q+1}return T}function E(P,Q,T){const D=(T==null?void 0:T.encode)||encodeURIComponent;if(!i.test(P))throw new TypeError(`argument name is invalid: ${P}`);const F=D(Q);if(!s.test(F))throw new TypeError(`argument val is invalid: ${Q}`);let O=P+"="+F;if(!T)return O;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);O+="; Max-Age="+T.maxAge}if(T.domain){if(!u.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);O+="; Domain="+T.domain}if(T.path){if(!f.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);O+="; Path="+T.path}if(T.expires){if(!M(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);O+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(O+="; HttpOnly"),T.secure&&(O+="; Secure"),T.partitioned&&(O+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return O}function R(P){if(P.indexOf("%")===-1)return P;try{return decodeURIComponent(P)}catch{return P}}function M(P){return d.call(P)==="[object Date]"}return jr}Qf();var hc="popstate";function Jf(i={}){function s(f,d){let{pathname:m,search:S,hash:k}=f.location;return na("",{pathname:m,search:S,hash:k},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(f,d){return typeof d=="string"?d:Tr(d)}return Kf(s,u,null,i)}function ye(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function kt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function qf(){return Math.random().toString(36).substring(2,10)}function vc(i,s){return{usr:i.state,key:i.key,idx:s}}function na(i,s,u=null,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Bn(s):s,state:u,key:s&&s.key||f||qf()}}function Tr({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Bn(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let f=i.indexOf("?");f>=0&&(s.search=i.substring(f),i=i.substring(0,f)),i&&(s.pathname=i)}return s}function Kf(i,s,u,f={}){let{window:d=document.defaultView,v5Compat:m=!1}=f,S=d.history,k="POP",y=null,E=R();E==null&&(E=0,S.replaceState({...S.state,idx:E},""));function R(){return(S.state||{idx:null}).idx}function M(){k="POP";let F=R(),O=F==null?null:F-E;E=F,y&&y({action:k,location:D.location,delta:O})}function P(F,O){k="PUSH";let H=na(D.location,F,O);E=R()+1;let G=vc(H,E),ee=D.createHref(H);try{S.pushState(G,"",ee)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;d.location.assign(ee)}m&&y&&y({action:k,location:D.location,delta:1})}function Q(F,O){k="REPLACE";let H=na(D.location,F,O);E=R();let G=vc(H,E),ee=D.createHref(H);S.replaceState(G,"",ee),m&&y&&y({action:k,location:D.location,delta:0})}function T(F){return Yf(F)}let D={get action(){return k},get location(){return i(d,S)},listen(F){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(hc,M),y=F,()=>{d.removeEventListener(hc,M),y=null}},createHref(F){return s(d,F)},createURL:T,encodeLocation(F){let O=T(F);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:P,replace:Q,go(F){return S.go(F)}};return D}function Yf(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),ye(u,"No window.location.(origin|href) available to create URL");let f=typeof i=="string"?i:Tr(i);return f=f.replace(/ $/,"%20"),!s&&f.startsWith("//")&&(f=u+f),new URL(f,u)}function Ec(i,s,u="/"){return Xf(i,s,u,!1)}function Xf(i,s,u,f){let d=typeof s=="string"?Bn(s):s,m=Mt(d.pathname||"/",u);if(m==null)return null;let S=kc(i);Gf(S);let k=null;for(let y=0;k==null&&y<S.length;++y){let E=up(m);k=ip(S[y],E,f)}return k}function kc(i,s=[],u=[],f=""){let d=(m,S,k)=>{let y={relativePath:k===void 0?m.path||"":k,caseSensitive:m.caseSensitive===!0,childrenIndex:S,route:m};y.relativePath.startsWith("/")&&(ye(y.relativePath.startsWith(f),`Absolute route path "${y.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(f.length));let E=Ot([f,y.relativePath]),R=u.concat(y);m.children&&m.children.length>0&&(ye(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),kc(m.children,s,R,E)),!(m.path==null&&!m.index)&&s.push({path:E,score:op(E,m.index),routesMeta:R})};return i.forEach((m,S)=>{var k;if(m.path===""||!((k=m.path)!=null&&k.includes("?")))d(m,S);else for(let y of Cc(m.path))d(m,S,y)}),s}function Cc(i){let s=i.split("/");if(s.length===0)return[];let[u,...f]=s,d=u.endsWith("?"),m=u.replace(/\?$/,"");if(f.length===0)return d?[m,""]:[m];let S=Cc(f.join("/")),k=[];return k.push(...S.map(y=>y===""?m:[m,y].join("/"))),d&&k.push(...S),k.map(y=>i.startsWith("/")&&y===""?"/":y)}function Gf(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:lp(s.routesMeta.map(f=>f.childrenIndex),u.routesMeta.map(f=>f.childrenIndex)))}var Zf=/^:[\w-]+$/,bf=3,ep=2,tp=1,np=10,rp=-2,gc=i=>i==="*";function op(i,s){let u=i.split("/"),f=u.length;return u.some(gc)&&(f+=rp),s&&(f+=ep),u.filter(d=>!gc(d)).reduce((d,m)=>d+(Zf.test(m)?bf:m===""?tp:np),f)}function lp(i,s){return i.length===s.length&&i.slice(0,-1).every((f,d)=>f===s[d])?i[i.length-1]-s[s.length-1]:0}function ip(i,s,u=!1){let{routesMeta:f}=i,d={},m="/",S=[];for(let k=0;k<f.length;++k){let y=f[k],E=k===f.length-1,R=m==="/"?s:s.slice(m.length)||"/",M=Go({path:y.relativePath,caseSensitive:y.caseSensitive,end:E},R),P=y.route;if(!M&&E&&u&&!f[f.length-1].route.index&&(M=Go({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},R)),!M)return null;Object.assign(d,M.params),S.push({params:d,pathname:Ot([m,M.pathname]),pathnameBase:fp(Ot([m,M.pathnameBase])),route:P}),M.pathnameBase!=="/"&&(m=Ot([m,M.pathnameBase]))}return S}function Go(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,f]=ap(i.path,i.caseSensitive,i.end),d=s.match(u);if(!d)return null;let m=d[0],S=m.replace(/(.)\/+$/,"$1"),k=d.slice(1);return{params:f.reduce((E,{paramName:R,isOptional:M},P)=>{if(R==="*"){let T=k[P]||"";S=m.slice(0,m.length-T.length).replace(/(.)\/+$/,"$1")}const Q=k[P];return M&&!Q?E[R]=void 0:E[R]=(Q||"").replace(/%2F/g,"/"),E},{}),pathname:m,pathnameBase:S,pattern:i}}function ap(i,s=!1,u=!0){kt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let f=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,k,y)=>(f.push({paramName:k,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(f.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),f]}function up(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return kt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Mt(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,f=i.charAt(u);return f&&f!=="/"?null:i.slice(u)||"/"}function sp(i,s="/"){let{pathname:u,search:f="",hash:d=""}=typeof i=="string"?Bn(i):i;return{pathname:u?u.startsWith("/")?u:cp(u,s):s,search:pp(f),hash:mp(d)}}function cp(i,s){let u=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function ea(i,s,u,f){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dp(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Nc(i){let s=dp(i);return s.map((u,f)=>f===s.length-1?u.pathname:u.pathnameBase)}function Pc(i,s,u,f=!1){let d;typeof i=="string"?d=Bn(i):(d={...i},ye(!d.pathname||!d.pathname.includes("?"),ea("?","pathname","search",d)),ye(!d.pathname||!d.pathname.includes("#"),ea("#","pathname","hash",d)),ye(!d.search||!d.search.includes("#"),ea("#","search","hash",d)));let m=i===""||d.pathname==="",S=m?"/":d.pathname,k;if(S==null)k=u;else{let M=s.length-1;if(!f&&S.startsWith("..")){let P=S.split("/");for(;P[0]==="..";)P.shift(),M-=1;d.pathname=P.join("/")}k=M>=0?s[M]:"/"}let y=sp(d,k),E=S&&S!=="/"&&S.endsWith("/"),R=(m||S===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(E||R)&&(y.pathname+="/"),y}var Ot=i=>i.join("/").replace(/\/\/+/g,"/"),fp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),pp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,mp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function hp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var _c=["POST","PUT","PATCH","DELETE"];new Set(_c);var vp=["GET",..._c];new Set(vp);var Vn=N.createContext(null);Vn.displayName="DataRouter";var Zo=N.createContext(null);Zo.displayName="DataRouterState";var Rc=N.createContext({isTransitioning:!1});Rc.displayName="ViewTransition";var gp=N.createContext(new Map);gp.displayName="Fetchers";var yp=N.createContext(null);yp.displayName="Await";var Ct=N.createContext(null);Ct.displayName="Navigation";var Ir=N.createContext(null);Ir.displayName="Location";var Nt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var la=N.createContext(null);la.displayName="RouteError";function xp(i,{relative:s}={}){ye(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:f}=N.useContext(Ct),{hash:d,pathname:m,search:S}=Mr(i,{relative:s}),k=m;return u!=="/"&&(k=m==="/"?u:Ot([u,m])),f.createHref({pathname:k,search:S,hash:d})}function Or(){return N.useContext(Ir)!=null}function hn(){return ye(Or(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ir).location}var jc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lc(i){N.useContext(Ct).static||N.useLayoutEffect(i)}function bo(){let{isDataRoute:i}=N.useContext(Nt);return i?Tp():wp()}function wp(){ye(Or(),"useNavigate() may be used only in the context of a <Router> component.");let i=N.useContext(Vn),{basename:s,navigator:u}=N.useContext(Ct),{matches:f}=N.useContext(Nt),{pathname:d}=hn(),m=JSON.stringify(Nc(f)),S=N.useRef(!1);return Lc(()=>{S.current=!0}),N.useCallback((y,E={})=>{if(kt(S.current,jc),!S.current)return;if(typeof y=="number"){u.go(y);return}let R=Pc(y,JSON.parse(m),d,E.relative==="path");i==null&&s!=="/"&&(R.pathname=R.pathname==="/"?s:Ot([s,R.pathname])),(E.replace?u.replace:u.push)(R,E.state,E)},[s,u,m,d,i])}N.createContext(null);function ia(){let{matches:i}=N.useContext(Nt),s=i[i.length-1];return s?s.params:{}}function Mr(i,{relative:s}={}){let{matches:u}=N.useContext(Nt),{pathname:f}=hn(),d=JSON.stringify(Nc(u));return N.useMemo(()=>Pc(i,JSON.parse(d),f,s==="path"),[i,d,f,s])}function Sp(i,s){return zc(i,s)}function zc(i,s,u,f){var O;ye(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=N.useContext(Ct),{matches:m}=N.useContext(Nt),S=m[m.length-1],k=S?S.params:{},y=S?S.pathname:"/",E=S?S.pathnameBase:"/",R=S&&S.route;{let H=R&&R.path||"";Tc(y,!R||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let M=hn(),P;if(s){let H=typeof s=="string"?Bn(s):s;ye(E==="/"||((O=H.pathname)==null?void 0:O.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${H.pathname}" was given in the \`location\` prop.`),P=H}else P=M;let Q=P.pathname||"/",T=Q;if(E!=="/"){let H=E.replace(/^\//,"").split("/");T="/"+Q.replace(/^\//,"").split("/").slice(H.length).join("/")}let D=Ec(i,{pathname:T});kt(R||D!=null,`No routes matched location "${P.pathname}${P.search}${P.hash}" `),kt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Pp(D&&D.map(H=>Object.assign({},H,{params:Object.assign({},k,H.params),pathname:Ot([E,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?E:Ot([E,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),m,u,f);return s&&F?N.createElement(Ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...P},navigationType:"POP"}},F):F}function Ep(){let i=zp(),s=hp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,f="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:f},m={padding:"2px 4px",backgroundColor:f},S=null;return console.error("Error handled by React Router default ErrorBoundary:",i),S=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:m},"ErrorBoundary")," or"," ",N.createElement("code",{style:m},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},s),u?N.createElement("pre",{style:d},u):null,S)}var kp=N.createElement(Ep,null),Cp=class extends N.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?N.createElement(Nt.Provider,{value:this.props.routeContext},N.createElement(la.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Np({routeContext:i,match:s,children:u}){let f=N.useContext(Vn);return f&&f.static&&f.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=s.route.id),N.createElement(Nt.Provider,{value:i},u)}function Pp(i,s=[],u=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let d=i,m=u==null?void 0:u.errors;if(m!=null){let y=d.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);ye(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let S=!1,k=-1;if(u)for(let y=0;y<d.length;y++){let E=d[y];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(k=y),E.route.id){let{loaderData:R,errors:M}=u,P=E.route.loader&&!R.hasOwnProperty(E.route.id)&&(!M||M[E.route.id]===void 0);if(E.route.lazy||P){S=!0,k>=0?d=d.slice(0,k+1):d=[d[0]];break}}}return d.reduceRight((y,E,R)=>{let M,P=!1,Q=null,T=null;u&&(M=m&&E.route.id?m[E.route.id]:void 0,Q=E.route.errorElement||kp,S&&(k<0&&R===0?(Tc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,T=null):k===R&&(P=!0,T=E.route.hydrateFallbackElement||null)));let D=s.concat(d.slice(0,R+1)),F=()=>{let O;return M?O=Q:P?O=T:E.route.Component?O=N.createElement(E.route.Component,null):E.route.element?O=E.route.element:O=y,N.createElement(Np,{match:E,routeContext:{outlet:y,matches:D,isDataRoute:u!=null},children:O})};return u&&(E.route.ErrorBoundary||E.route.errorElement||R===0)?N.createElement(Cp,{location:u.location,revalidation:u.revalidation,component:Q,error:M,children:F(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):F()},null)}function aa(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _p(i){let s=N.useContext(Vn);return ye(s,aa(i)),s}function Rp(i){let s=N.useContext(Zo);return ye(s,aa(i)),s}function jp(i){let s=N.useContext(Nt);return ye(s,aa(i)),s}function ua(i){let s=jp(i),u=s.matches[s.matches.length-1];return ye(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function Lp(){return ua("useRouteId")}function zp(){var f;let i=N.useContext(la),s=Rp("useRouteError"),u=ua("useRouteError");return i!==void 0?i:(f=s.errors)==null?void 0:f[u]}function Tp(){let{router:i}=_p("useNavigate"),s=ua("useNavigate"),u=N.useRef(!1);return Lc(()=>{u.current=!0}),N.useCallback(async(d,m={})=>{kt(u.current,jc),u.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...m}))},[i,s])}var yc={};function Tc(i,s,u){!s&&!yc[i]&&(yc[i]=!0,kt(!1,u))}N.memo(Ip);function Ip({routes:i,future:s,state:u}){return zc(i,void 0,u,s)}function zr(i){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Op({basename:i="/",children:s=null,location:u,navigationType:f="POP",navigator:d,static:m=!1}){ye(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=i.replace(/^\/*/,"/"),k=N.useMemo(()=>({basename:S,navigator:d,static:m,future:{}}),[S,d,m]);typeof u=="string"&&(u=Bn(u));let{pathname:y="/",search:E="",hash:R="",state:M=null,key:P="default"}=u,Q=N.useMemo(()=>{let T=Mt(y,S);return T==null?null:{location:{pathname:T,search:E,hash:R,state:M,key:P},navigationType:f}},[S,y,E,R,M,P,f]);return kt(Q!=null,`<Router basename="${S}"> is not able to match the URL "${y}${E}${R}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:N.createElement(Ct.Provider,{value:k},N.createElement(Ir.Provider,{children:s,value:Q}))}function Mp({children:i,location:s}){return Sp(ra(i),s)}function ra(i,s=[]){let u=[];return N.Children.forEach(i,(f,d)=>{if(!N.isValidElement(f))return;let m=[...s,d];if(f.type===N.Fragment){u.push.apply(u,ra(f.props.children,m));return}ye(f.type===zr,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!f.props.index||!f.props.children,"An index route cannot have child routes.");let S={id:f.props.id||m.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(S.children=ra(f.props.children,m)),u.push(S)}),u}var Yo="get",Xo="application/x-www-form-urlencoded";function el(i){return i!=null&&typeof i.tagName=="string"}function Dp(i){return el(i)&&i.tagName.toLowerCase()==="button"}function Fp(i){return el(i)&&i.tagName.toLowerCase()==="form"}function Ap(i){return el(i)&&i.tagName.toLowerCase()==="input"}function Up(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function $p(i,s){return i.button===0&&(!s||s==="_self")&&!Up(i)}var Ko=null;function Bp(){if(Ko===null)try{new FormData(document.createElement("form"),0),Ko=!1}catch{Ko=!0}return Ko}var Vp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ta(i){return i!=null&&!Vp.has(i)?(kt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xo}"`),null):i}function Hp(i,s){let u,f,d,m,S;if(Fp(i)){let k=i.getAttribute("action");f=k?Mt(k,s):null,u=i.getAttribute("method")||Yo,d=ta(i.getAttribute("enctype"))||Xo,m=new FormData(i)}else if(Dp(i)||Ap(i)&&(i.type==="submit"||i.type==="image")){let k=i.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||k.getAttribute("action");if(f=y?Mt(y,s):null,u=i.getAttribute("formmethod")||k.getAttribute("method")||Yo,d=ta(i.getAttribute("formenctype"))||ta(k.getAttribute("enctype"))||Xo,m=new FormData(k,i),!Bp()){let{name:E,type:R,value:M}=i;if(R==="image"){let P=E?`${E}.`:"";m.append(`${P}x`,"0"),m.append(`${P}y`,"0")}else E&&m.append(E,M)}}else{if(el(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Yo,f=null,d=Xo,S=i}return m&&d==="text/plain"&&(S=m,m=void 0),{action:f,method:u.toLowerCase(),encType:d,formData:m,body:S}}function sa(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}async function Wp(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Jp(i,s,u){let f=await Promise.all(i.map(async d=>{let m=s.routes[d.route.id];if(m){let S=await Wp(m,u);return S.links?S.links():[]}return[]}));return Xp(f.flat(1).filter(Qp).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function xc(i,s,u,f,d,m){let S=(y,E)=>u[E]?y.route.id!==u[E].route.id:!0,k=(y,E)=>{var R;return u[E].pathname!==y.pathname||((R=u[E].route.path)==null?void 0:R.endsWith("*"))&&u[E].params["*"]!==y.params["*"]};return m==="assets"?s.filter((y,E)=>S(y,E)||k(y,E)):m==="data"?s.filter((y,E)=>{var M;let R=f.routes[y.route.id];if(!R||!R.hasLoader)return!1;if(S(y,E)||k(y,E))return!0;if(y.route.shouldRevalidate){let P=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((M=u[0])==null?void 0:M.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function qp(i,s,{includeHydrateFallback:u}={}){return Kp(i.map(f=>{let d=s.routes[f.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Kp(i){return[...new Set(i)]}function Yp(i){let s={},u=Object.keys(i).sort();for(let f of u)s[f]=i[f];return s}function Xp(i,s){let u=new Set;return new Set(s),i.reduce((f,d)=>{let m=JSON.stringify(Yp(d));return u.has(m)||(u.add(m),f.push({key:m,link:d})),f},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gp=new Set([100,101,204,205]);function Zp(i,s){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u.pathname==="/"?u.pathname="_root.data":s&&Mt(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Ic(){let i=N.useContext(Vn);return sa(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function bp(){let i=N.useContext(Zo);return sa(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ca=N.createContext(void 0);ca.displayName="FrameworkContext";function Oc(){let i=N.useContext(ca);return sa(i,"You must render this element inside a <HydratedRouter> element"),i}function em(i,s){let u=N.useContext(ca),[f,d]=N.useState(!1),[m,S]=N.useState(!1),{onFocus:k,onBlur:y,onMouseEnter:E,onMouseLeave:R,onTouchStart:M}=s,P=N.useRef(null);N.useEffect(()=>{if(i==="render"&&S(!0),i==="viewport"){let D=O=>{O.forEach(H=>{S(H.isIntersecting)})},F=new IntersectionObserver(D,{threshold:.5});return P.current&&F.observe(P.current),()=>{F.disconnect()}}},[i]),N.useEffect(()=>{if(f){let D=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(D)}}},[f]);let Q=()=>{d(!0)},T=()=>{d(!1),S(!1)};return u?i!=="intent"?[m,P,{}]:[m,P,{onFocus:Lr(k,Q),onBlur:Lr(y,T),onMouseEnter:Lr(E,Q),onMouseLeave:Lr(R,T),onTouchStart:Lr(M,Q)}]:[!1,P,{}]}function Lr(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function tm({page:i,...s}){let{router:u}=Ic(),f=N.useMemo(()=>Ec(u.routes,i,u.basename),[u.routes,i,u.basename]);return f?N.createElement(rm,{page:i,matches:f,...s}):null}function nm(i){let{manifest:s,routeModules:u}=Oc(),[f,d]=N.useState([]);return N.useEffect(()=>{let m=!1;return Jp(i,s,u).then(S=>{m||d(S)}),()=>{m=!0}},[i,s,u]),f}function rm({page:i,matches:s,...u}){let f=hn(),{manifest:d,routeModules:m}=Oc(),{basename:S}=Ic(),{loaderData:k,matches:y}=bp(),E=N.useMemo(()=>xc(i,s,y,d,f,"data"),[i,s,y,d,f]),R=N.useMemo(()=>xc(i,s,y,d,f,"assets"),[i,s,y,d,f]),M=N.useMemo(()=>{if(i===f.pathname+f.search+f.hash)return[];let T=new Set,D=!1;if(s.forEach(O=>{var G;let H=d.routes[O.route.id];!H||!H.hasLoader||(!E.some(ee=>ee.route.id===O.route.id)&&O.route.id in k&&((G=m[O.route.id])!=null&&G.shouldRevalidate)||H.hasClientLoader?D=!0:T.add(O.route.id))}),T.size===0)return[];let F=Zp(i,S);return D&&T.size>0&&F.searchParams.set("_routes",s.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[F.pathname+F.search]},[S,k,f,d,E,s,i,m]),P=N.useMemo(()=>qp(R,d),[R,d]),Q=nm(R);return N.createElement(N.Fragment,null,M.map(T=>N.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...u})),P.map(T=>N.createElement("link",{key:T,rel:"modulepreload",href:T,...u})),Q.map(({key:T,link:D})=>N.createElement("link",{key:T,...D})))}function om(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Mc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mc&&(window.__reactRouterVersion="7.6.1")}catch{}function lm({basename:i,children:s,window:u}){let f=N.useRef();f.current==null&&(f.current=Jf({window:u,v5Compat:!0}));let d=f.current,[m,S]=N.useState({action:d.action,location:d.location}),k=N.useCallback(y=>{N.startTransition(()=>S(y))},[S]);return N.useLayoutEffect(()=>d.listen(k),[d,k]),N.createElement(Op,{basename:i,children:s,location:m.location,navigationType:m.action,navigator:d})}var Dc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=N.forwardRef(function({onClick:s,discover:u="render",prefetch:f="none",relative:d,reloadDocument:m,replace:S,state:k,target:y,to:E,preventScrollReset:R,viewTransition:M,...P},Q){let{basename:T}=N.useContext(Ct),D=typeof E=="string"&&Dc.test(E),F,O=!1;if(typeof E=="string"&&D&&(F=E,Mc))try{let we=new URL(window.location.href),je=E.startsWith("//")?new URL(we.protocol+E):new URL(E),ht=Mt(je.pathname,T);je.origin===we.origin&&ht!=null?E=ht+je.search+je.hash:O=!0}catch{kt(!1,`<Link to="${E}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=xp(E,{relative:d}),[G,ee,ue]=em(f,P),xe=sm(E,{replace:S,state:k,target:y,preventScrollReset:R,relative:d,viewTransition:M});function he(we){s&&s(we),we.defaultPrevented||xe(we)}let Ne=N.createElement("a",{...P,...ue,href:F||H,onClick:O||m?s:he,ref:om(Q,ee),target:y,"data-discover":!D&&u==="render"?"true":void 0});return G&&!D?N.createElement(N.Fragment,null,Ne,N.createElement(tm,{page:H})):Ne});Be.displayName="Link";var im=N.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:f="",end:d=!1,style:m,to:S,viewTransition:k,children:y,...E},R){let M=Mr(S,{relative:E.relative}),P=hn(),Q=N.useContext(Zo),{navigator:T,basename:D}=N.useContext(Ct),F=Q!=null&&mm(M)&&k===!0,O=T.encodeLocation?T.encodeLocation(M).pathname:M.pathname,H=P.pathname,G=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;u||(H=H.toLowerCase(),G=G?G.toLowerCase():null,O=O.toLowerCase()),G&&D&&(G=Mt(G,D)||G);const ee=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let ue=H===O||!d&&H.startsWith(O)&&H.charAt(ee)==="/",xe=G!=null&&(G===O||!d&&G.startsWith(O)&&G.charAt(O.length)==="/"),he={isActive:ue,isPending:xe,isTransitioning:F},Ne=ue?s:void 0,we;typeof f=="function"?we=f(he):we=[f,ue?"active":null,xe?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let je=typeof m=="function"?m(he):m;return N.createElement(Be,{...E,"aria-current":Ne,className:we,ref:R,style:je,to:S,viewTransition:k},typeof y=="function"?y(he):y)});im.displayName="NavLink";var am=N.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:f,replace:d,state:m,method:S=Yo,action:k,onSubmit:y,relative:E,preventScrollReset:R,viewTransition:M,...P},Q)=>{let T=fm(),D=pm(k,{relative:E}),F=S.toLowerCase()==="get"?"get":"post",O=typeof k=="string"&&Dc.test(k),H=G=>{if(y&&y(G),G.defaultPrevented)return;G.preventDefault();let ee=G.nativeEvent.submitter,ue=(ee==null?void 0:ee.getAttribute("formmethod"))||S;T(ee||G.currentTarget,{fetcherKey:s,method:ue,navigate:u,replace:d,state:m,relative:E,preventScrollReset:R,viewTransition:M})};return N.createElement("form",{ref:Q,method:F,action:D,onSubmit:f?y:H,...P,"data-discover":!O&&i==="render"?"true":void 0})});am.displayName="Form";function um(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fc(i){let s=N.useContext(Vn);return ye(s,um(i)),s}function sm(i,{target:s,replace:u,state:f,preventScrollReset:d,relative:m,viewTransition:S}={}){let k=bo(),y=hn(),E=Mr(i,{relative:m});return N.useCallback(R=>{if($p(R,s)){R.preventDefault();let M=u!==void 0?u:Tr(y)===Tr(E);k(i,{replace:M,state:f,preventScrollReset:d,relative:m,viewTransition:S})}},[y,k,E,u,f,s,i,d,m,S])}var cm=0,dm=()=>`__${String(++cm)}__`;function fm(){let{router:i}=Fc("useSubmit"),{basename:s}=N.useContext(Ct),u=Lp();return N.useCallback(async(f,d={})=>{let{action:m,method:S,encType:k,formData:y,body:E}=Hp(f,s);if(d.navigate===!1){let R=d.fetcherKey||dm();await i.fetch(R,u,d.action||m,{preventScrollReset:d.preventScrollReset,formData:y,body:E,formMethod:d.method||S,formEncType:d.encType||k,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:y,body:E,formMethod:d.method||S,formEncType:d.encType||k,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,u])}function pm(i,{relative:s}={}){let{basename:u}=N.useContext(Ct),f=N.useContext(Nt);ye(f,"useFormAction must be used inside a RouteContext");let[d]=f.matches.slice(-1),m={...Mr(i||".",{relative:s})},S=hn();if(i==null){m.search=S.search;let k=new URLSearchParams(m.search),y=k.getAll("index");if(y.some(R=>R==="")){k.delete("index"),y.filter(M=>M).forEach(M=>k.append("index",M));let R=k.toString();m.search=R?`?${R}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Ot([u,m.pathname])),Tr(m)}function mm(i,s={}){let u=N.useContext(Rc);ye(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Fc("useViewTransitionState"),d=Mr(i,{relative:s.relative});if(!u.isTransitioning)return!1;let m=Mt(u.currentLocation.pathname,f)||u.currentLocation.pathname,S=Mt(u.nextLocation.pathname,f)||u.nextLocation.pathname;return Go(d.pathname,S)!=null||Go(d.pathname,m)!=null}[...Gp];const tl=[{id:"introducao",titulo:"Introdução ao JavaScript",descricao:"Conheça a história, evolução e importância do JavaScript no desenvolvimento web.",topicos:[{id:"historia",titulo:"História e evolução do JavaScript",conteudo:`
          <p>JavaScript foi criado em 1995 por Brendan Eich enquanto trabalhava na Netscape. Originalmente chamado de Mocha, depois LiveScript, e finalmente JavaScript, a linguagem foi desenvolvida em apenas 10 dias.</p>
          <p>Apesar do nome similar, JavaScript não tem relação direta com Java. O nome foi escolhido principalmente por razões de marketing, já que Java era muito popular na época.</p>
          <p>Ao longo dos anos, JavaScript evoluiu significativamente:</p>
          <ul>
            <li><strong>1997:</strong> Foi padronizado pela ECMA International como ECMAScript.</li>
            <li><strong>2005:</strong> O termo "Ajax" foi cunhado, marcando o início do JavaScript moderno para aplicações web interativas.</li>
            <li><strong>2009:</strong> Node.js foi criado, permitindo JavaScript no lado do servidor.</li>
            <li><strong>2015:</strong> ECMAScript 6 (ES6) trouxe grandes melhorias à linguagem.</li>
            <li><strong>Atualmente:</strong> JavaScript é uma das linguagens mais populares do mundo, usada tanto no frontend quanto no backend.</li>
          </ul>
        `},{id:"importancia",titulo:"Importância do JavaScript no desenvolvimento web",conteudo:`
          <p>JavaScript é fundamental para o desenvolvimento web moderno por várias razões:</p>
          <ul>
            <li><strong>Ubiquidade:</strong> É suportado por todos os navegadores modernos sem necessidade de plugins.</li>
            <li><strong>Versatilidade:</strong> Pode ser usado para desenvolvimento frontend, backend, mobile e desktop.</li>
            <li><strong>Interatividade:</strong> Permite criar interfaces dinâmicas e responsivas.</li>
            <li><strong>Ecossistema:</strong> Possui um vasto ecossistema de bibliotecas e frameworks (React, Angular, Vue, Express, etc.).</li>
            <li><strong>Comunidade:</strong> Tem uma das maiores e mais ativas comunidades de desenvolvedores.</li>
          </ul>
          <p>Atualmente, JavaScript é a única linguagem de programação nativa dos navegadores, tornando-a essencial para qualquer desenvolvedor web.</p>
        `},{id:"ambiente",titulo:"Configuração do ambiente de desenvolvimento",conteudo:`
          <p>Para começar a programar em JavaScript, você precisa de ferramentas básicas:</p>
          <ol>
            <li><strong>Editor de código:</strong> Visual Studio Code, Sublime Text, Atom ou qualquer editor de sua preferência.</li>
            <li><strong>Navegador web:</strong> Chrome, Firefox, Edge ou Safari com ferramentas de desenvolvedor.</li>
            <li><strong>Node.js (opcional):</strong> Para executar JavaScript fora do navegador.</li>
          </ol>
          <p>As ferramentas de desenvolvedor do navegador são essenciais para depuração e testes. Para acessá-las:</p>
          <ul>
            <li>Chrome/Edge: F12 ou Ctrl+Shift+I (Cmd+Option+I no Mac)</li>
            <li>Firefox: F12 ou Ctrl+Shift+I</li>
            <li>Safari: Cmd+Option+I (precisa habilitar nas preferências)</li>
          </ul>
        `},{id:"incluir-js",titulo:"Como incluir JavaScript em uma página HTML",conteudo:`
          <p>Existem três maneiras principais de incluir JavaScript em uma página HTML:</p>
          
          <h4>1. JavaScript interno (dentro da tag script)</h4>
          <pre><code>&lt;script&gt;
  // Seu código JavaScript aqui
  alert("Olá, mundo!");
&lt;/script&gt;</code></pre>

          <h4>2. JavaScript externo (arquivo separado)</h4>
          <pre><code>&lt;script src="caminho/para/seu-arquivo.js"&gt;&lt;/script&gt;</code></pre>
          
          <h4>3. JavaScript inline (em atributos HTML)</h4>
          <pre><code>&lt;button onclick="alert('Botão clicado!')"&gt;Clique em mim&lt;/button&gt;</code></pre>
          
          <p><strong>Melhores práticas:</strong></p>
          <ul>
            <li>Prefira arquivos externos para código reutilizável e melhor organização.</li>
            <li>Coloque scripts no final do body para melhor performance de carregamento.</li>
            <li>Use atributos async ou defer quando apropriado.</li>
            <li>Evite JavaScript inline para manter separação entre conteúdo e comportamento.</li>
          </ul>
        `},{id:"console",titulo:"Ferramentas de desenvolvimento (Console do navegador)",conteudo:`
          <p>O console do navegador é uma ferramenta poderosa para desenvolvimento JavaScript:</p>
          
          <h4>Principais usos do console:</h4>
          <ul>
            <li><strong>Depuração:</strong> Verificar valores de variáveis e fluxo de execução.</li>
            <li><strong>Testes:</strong> Executar código JavaScript diretamente.</li>
            <li><strong>Monitoramento:</strong> Verificar erros e avisos.</li>
            <li><strong>Análise de performance:</strong> Medir tempo de execução.</li>
          </ul>
          
          <h4>Métodos comuns do console:</h4>
          <pre><code>console.log("Mensagem informativa");
console.error("Mensagem de erro");
console.warn("Aviso");
console.table([{nome: "João", idade: 25}, {nome: "Maria", idade: 30}]);
console.time("Timer") e console.timeEnd("Timer") // Para medir tempo</code></pre>
          
          <p>Além do console, as ferramentas de desenvolvedor oferecem recursos para:</p>
          <ul>
            <li>Inspecionar e modificar o DOM</li>
            <li>Analisar requisições de rede</li>
            <li>Depurar código com breakpoints</li>
            <li>Analisar performance</li>
            <li>Emular dispositivos móveis</li>
          </ul>
        `}],exercicios:[{id:"ex-1-1",titulo:"Incluindo JavaScript em HTML",enunciado:'Crie uma página HTML simples e inclua um script JavaScript que exiba um alerta com a mensagem "Olá, mundo!".',dica:"Use a tag script dentro do body do HTML."},{id:"ex-1-2",titulo:"Usando o Console",enunciado:"Escreva um código JavaScript que imprima no console do navegador seu nome e a data atual.",dica:"Use console.log() e o objeto Date para obter a data atual."}]},{id:"fundamentos",titulo:"Fundamentos da Linguagem",descricao:"Aprenda os conceitos básicos de sintaxe, variáveis, tipos de dados e operadores em JavaScript.",topicos:[{id:"sintaxe",titulo:"Sintaxe básica",conteudo:`
          <p>A sintaxe do JavaScript é semelhante a outras linguagens como C, Java e PHP. Aqui estão os elementos básicos:</p>
          
          <h4>Instruções e ponto-e-vírgula</h4>
          <pre><code>let x = 5;           // Declaração de variável
console.log(x);      // Chamada de função
x = x + 1;           // Expressão</code></pre>
          <p>O ponto-e-vírgula (;) é opcional em JavaScript, mas é uma boa prática incluí-lo.</p>
          
          <h4>Case sensitivity</h4>
          <p>JavaScript é case sensitive. Por exemplo, <code>variavel</code> e <code>Variavel</code> são variáveis diferentes.</p>
          
          <h4>Espaços em branco</h4>
          <p>JavaScript ignora espaços extras, tabs e quebras de linha, permitindo formatar o código para melhor legibilidade.</p>
          
          <h4>Blocos de código</h4>
          <pre><code>if (condicao) {
    // Este é um bloco de código
    let x = 10;
    console.log(x);
}</code></pre>
          <p>Blocos são delimitados por chaves { } e agrupam instruções.</p>
        `},{id:"comentarios",titulo:"Comentários",conteudo:`
          <p>Comentários são trechos de texto ignorados pelo interpretador JavaScript. Eles servem para documentar o código e torná-lo mais compreensível.</p>
          
          <h4>Comentários de linha única</h4>
          <pre><code>// Este é um comentário de linha única
let x = 5; // Também pode ser usado após uma instrução</code></pre>
          
          <h4>Comentários de múltiplas linhas</h4>
          <pre><code>/* 
   Este é um comentário
   de múltiplas linhas
   que pode se estender por vários parágrafos
*/</code></pre>
          
          <p><strong>Boas práticas para comentários:</strong></p>
          <ul>
            <li>Use comentários para explicar "por que" e não "o que" (o código já mostra o que está sendo feito)</li>
            <li>Mantenha comentários atualizados quando o código mudar</li>
            <li>Seja conciso e claro</li>
            <li>Use comentários para documentar funções, parâmetros e valores de retorno</li>
          </ul>
        `},{id:"variaveis",titulo:"Variáveis e constantes (var, let, const)",conteudo:`
          <p>Variáveis são "contêineres" para armazenar valores. Em JavaScript, existem três formas de declarar variáveis:</p>
          
          <h4>var (forma antiga)</h4>
          <pre><code>var nome = "João";
var idade = 25;
var aprovado = true;</code></pre>
          <p>Características do var:</p>
          <ul>
            <li>Escopo de função ou global (não tem escopo de bloco)</li>
            <li>Pode ser redeclarada</li>
            <li>Sofre hoisting (elevação)</li>
          </ul>
          
          <h4>let (introduzido no ES6)</h4>
          <pre><code>let nome = "Maria";
let idade = 30;
let aprovado = false;</code></pre>
          <p>Características do let:</p>
          <ul>
            <li>Escopo de bloco</li>
            <li>Não pode ser redeclarada no mesmo escopo</li>
            <li>Pode ter seu valor alterado</li>
          </ul>
          
          <h4>const (introduzido no ES6)</h4>
          <pre><code>const PI = 3.14159;
const NOME_USUARIO = "admin";
const CORES = ["vermelho", "verde", "azul"];</code></pre>
          <p>Características do const:</p>
          <ul>
            <li>Escopo de bloco</li>
            <li>Não pode ser redeclarada</li>
            <li>Não pode ter seu valor reatribuído</li>
            <li>Para objetos e arrays, o conteúdo pode ser modificado (são imutáveis apenas na referência)</li>
          </ul>
          
          <h4>Melhores práticas:</h4>
          <ul>
            <li>Use const por padrão</li>
            <li>Use let quando o valor precisar mudar</li>
            <li>Evite usar var em código moderno</li>
            <li>Use nomes descritivos para variáveis</li>
            <li>Use camelCase para nomes de variáveis (ex: nomeCompleto)</li>
            <li>Use SNAKE_CASE_MAIÚSCULO para constantes fixas (ex: MAX_TENTATIVAS)</li>
          </ul>
        `},{id:"tipos-dados",titulo:"Tipos de dados primitivos",conteudo:`
          <p>JavaScript tem sete tipos de dados primitivos:</p>
          
          <h4>1. String</h4>
          <pre><code>let nome = "Maria";
let sobrenome = 'Silva';
let frase = \`Olá, \${nome}\`; // Template string (ES6)</code></pre>
          <p>Strings são sequências de caracteres, delimitadas por aspas simples, duplas ou crases (template strings).</p>
          
          <h4>2. Number</h4>
          <pre><code>let idade = 25;        // Inteiro
let preco = 19.99;     // Decimal
let infinito = Infinity;
let naoNumero = NaN;   // Not a Number</code></pre>
          <p>JavaScript não distingue entre inteiros e decimais, todos são do tipo Number.</p>
          
          <h4>3. Boolean</h4>
          <pre><code>let aprovado = true;
let reprovado = false;</code></pre>
          <p>Representa valores lógicos: verdadeiro (true) ou falso (false).</p>
          
          <h4>4. Null</h4>
          <pre><code>let vazio = null;</code></pre>
          <p>Representa a ausência intencional de qualquer valor ou objeto.</p>
          
          <h4>5. Undefined</h4>
          <pre><code>let naoDefinido;
console.log(naoDefinido); // undefined</code></pre>
          <p>Indica que uma variável foi declarada mas não recebeu um valor.</p>
          
          <h4>6. Symbol (ES6)</h4>
          <pre><code>const id = Symbol('id');
const outroId = Symbol('id');
console.log(id === outroId); // false</code></pre>
          <p>Valores únicos e imutáveis, usados principalmente como identificadores para propriedades de objetos.</p>
          
          <h4>7. BigInt (adicionado recentemente)</h4>
          <pre><code>const numeroGrande = 9007199254740991n;
const outroBigInt = BigInt(9007199254740991);</code></pre>
          <p>Representa inteiros maiores que 2^53 - 1, o maior número que o tipo Number pode representar com precisão.</p>
          
          <h4>Verificando tipos com typeof</h4>
          <pre><code>console.log(typeof "texto");     // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (isso é considerado um bug)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 42n);        // "bigint"</code></pre>
        `},{id:"conversao-tipos",titulo:"Conversão de tipos",conteudo:`
          <p>JavaScript é uma linguagem de tipagem dinâmica, o que significa que os tipos podem ser convertidos automaticamente (conversão implícita) ou manualmente (conversão explícita).</p>
          
          <h4>Conversão Implícita</h4>
          <p>Ocorre automaticamente quando operações são realizadas entre tipos diferentes:</p>
          <pre><code>let resultado = "5" + 2;     // "52" (string)
let resultado2 = "5" - 2;    // 3 (number)
let resultado3 = "5" * "2";  // 10 (number)
let booleano = "texto" ? true : false;  // true</code></pre>
          
          <h4>Conversão Explícita</h4>
          <p>Realizada intencionalmente usando funções de conversão:</p>
          
          <p><strong>Para String:</strong></p>
          <pre><code>let num = 42;
let str1 = String(num);      // "42"
let str2 = num.toString();   // "42"
let str3 = num + "";         // "42" (implícita)</code></pre>
          
          <p><strong>Para Number:</strong></p>
          <pre><code>let str = "42";
let num1 = Number(str);      // 42
let num2 = parseInt(str);    // 42 (para inteiros)
let num3 = parseFloat("42.5"); // 42.5 (para decimais)
let num4 = +"42";            // 42 (operador unário +)</code></pre>
          
          <p><strong>Para Boolean:</strong></p>
          <pre><code>let valor = "texto";
let bool1 = Boolean(valor);  // true
let bool2 = !!valor;         // true (dupla negação)</code></pre>
          
          <h4>Valores Falsy e Truthy</h4>
          <p>Em JavaScript, alguns valores são considerados falsy (avaliados como false em contextos booleanos):</p>
          <ul>
            <li>false</li>
            <li>0, -0, 0n (BigInt zero)</li>
            <li>""  (string vazia)</li>
            <li>null</li>
            <li>undefined</li>
            <li>NaN</li>
          </ul>
          <p>Todos os outros valores são truthy (avaliados como true).</p>
          
          <h4>Casos especiais</h4>
          <pre><code>Number("texto");     // NaN
parseInt("42abc");   // 42 (ignora caracteres não numéricos após o número)
Number(null);        // 0
Number(undefined);   // NaN
Number(true);        // 1
Number(false);       // 0</code></pre>
        `},{id:"operadores",titulo:"Operadores (aritméticos, atribuição, comparação, lógicos)",conteudo:`
          <h4>Operadores Aritméticos</h4>
          <pre><code>let a = 10;
let b = 3;

console.log(a + b);  // 13 (adição)
console.log(a - b);  // 7 (subtração)
console.log(a * b);  // 30 (multiplicação)
console.log(a / b);  // 3.3333... (divisão)
console.log(a % b);  // 1 (resto da divisão)
console.log(a ** b); // 1000 (exponenciação, ES6)

// Incremento e decremento
let c = 5;
console.log(c++);    // 5 (retorna e depois incrementa)
console.log(++c);    // 7 (incrementa e depois retorna)
console.log(c--);    // 7 (retorna e depois decrementa)
console.log(--c);    // 5 (decrementa e depois retorna)</code></pre>
          
          <h4>Operadores de Atribuição</h4>
          <pre><code>let x = 10;        // Atribuição básica
x += 5;            // x = x + 5 (15)
x -= 3;            // x = x - 3 (12)
x *= 2;            // x = x * 2 (24)
x /= 4;            // x = x / 4 (6)
x %= 4;            // x = x % 4 (2)
x **= 3;           // x = x ** 3 (8)</code></pre>
          
          <h4>Operadores de Comparação</h4>
          <pre><code>let a = 5;
let b = "5";

console.log(a == b);   // true (igualdade com conversão de tipo)
console.log(a === b);  // false (igualdade estrita, sem conversão)
console.log(a != b);   // false (desigualdade com conversão)
console.log(a !== b);  // true (desigualdade estrita)

console.log(a > 3);    // true (maior que)
console.log(a < 10);   // true (menor que)
console.log(a >= 5);   // true (maior ou igual a)
console.log(a <= 4);   // false (menor ou igual a)</code></pre>
          
          <h4>Operadores Lógicos</h4>
          <pre><code>let x = true;
let y = false;

console.log(x && y);  // false (AND lógico)
console.log(x || y);  // true (OR lógico)
console.log(!x);      // false (NOT lógico)

// Avaliação de curto-circuito
console.log(true && "Olá");     // "Olá"
console.log(false && "Olá");    // false
console.log(true || "Olá");     // true
console.log(false || "Olá");    // "Olá"

// Operador de coalescência nula (ES2020)
let valor = null;
let padrao = "valor padrão";
console.log(valor ?? padrao);  // "valor padrão"</code></pre>
          
          <h4>Operador Ternário</h4>
          <pre><code>let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor";
console.log(status);  // "Adulto"</code></pre>
          
          <h4>Operadores de String</h4>
          <pre><code>let nome = "João";
let sobrenome = "Silva";
console.log(nome + " " + sobrenome);  // "João Silva" (concatenação)</code></pre>
          
          <h4>Operadores Bit a Bit</h4>
          <pre><code>let a = 5;  // 101 em binário
let b = 3;  // 011 em binário

console.log(a & b);   // 1 (AND bit a bit: 001)
console.log(a | b);   // 7 (OR bit a bit: 111)
console.log(a ^ b);   // 6 (XOR bit a bit: 110)
console.log(~a);      // -6 (NOT bit a bit)
console.log(a << 1);  // 10 (deslocamento à esquerda: 1010)
console.log(a >> 1);  // 2 (deslocamento à direita: 10)</code></pre>
        `},{id:"precedencia",titulo:"Precedência de operadores",conteudo:`
          <p>A precedência de operadores determina a ordem em que as operações são processadas em uma expressão. Operadores com maior precedência são avaliados primeiro.</p>
          
          <h4>Ordem de precedência (do mais alto para o mais baixo):</h4>
          <ol>
            <li><strong>Agrupamento:</strong> ( )</li>
            <li><strong>Acesso a propriedades e chamadas:</strong> . [] ()</li>
            <li><strong>Negação/incremento:</strong> ! ~ - + ++ -- typeof void delete</li>
            <li><strong>Exponenciação:</strong> **</li>
            <li><strong>Multiplicação/divisão:</strong> * / %</li>
            <li><strong>Adição/subtração:</strong> + -</li>
            <li><strong>Deslocamento bit a bit:</strong> << >> >>></li>
            <li><strong>Comparação:</strong> < <= > >= in instanceof</li>
            <li><strong>Igualdade:</strong> == != === !==</li>
            <li><strong>AND bit a bit:</strong> &</li>
            <li><strong>XOR bit a bit:</strong> ^</li>
            <li><strong>OR bit a bit:</strong> |</li>
            <li><strong>AND lógico:</strong> &&</li>
            <li><strong>OR lógico:</strong> ||</li>
            <li><strong>Coalescência nula:</strong> ??</li>
            <li><strong>Condicional (ternário):</strong> ?:</li>
            <li><strong>Atribuição:</strong> = += -= *= /= %= **= etc.</li>
            <li><strong>Vírgula:</strong> ,</li>
          </ol>
          
          <h4>Exemplos:</h4>
          <pre><code>// Sem parênteses (seguindo a precedência)
let resultado1 = 2 + 3 * 4;     // 14 (multiplicação tem precedência sobre adição)

// Com parênteses (alterando a precedência)
let resultado2 = (2 + 3) * 4;   // 20 (parênteses têm a maior precedência)

// Combinando operadores
let x = 5;
let y = 10;
let z = 15;
let resultado3 = x + y * z / 5; // 35 (primeiro y*z, depois /5, por fim +x)
let resultado4 = (x + y) * z / 5; // 45 (primeiro (x+y), depois *z, por fim /5)

// Operadores lógicos
let a = true;
let b = false;
let c = true;
let resultado5 = a && b || c;   // true (&& tem precedência sobre ||)
let resultado6 = a && (b || c); // true (parênteses alteram a precedência)</code></pre>
          
          <p><strong>Dica:</strong> Quando em dúvida sobre a precedência, use parênteses para tornar a intenção clara. Isso melhora a legibilidade do código e evita erros sutis.</p>
        `}],exercicios:[{id:"ex-2-1",titulo:"Variáveis e Tipos de Dados",enunciado:"Declare variáveis usando var, let e const. Atribua valores de diferentes tipos (string, number, boolean, array, object) e imprima o tipo de cada uma usando typeof.",dica:"Use o operador typeof para verificar o tipo de cada variável."},{id:"ex-2-2",titulo:"Conversão de Tipos",enunciado:'Converta os seguintes valores entre tipos diferentes: 1) String "42" para número, 2) Número 42 para string, 3) String "true" para boolean, 4) Número 0 para boolean.',dica:"Use funções como Number(), String(), Boolean() ou métodos como toString()."},{id:"ex-2-3",titulo:"Operadores",enunciado:'Calcule o resultado das seguintes expressões: 1) 10 + 5 * 2, 2) (10 + 5) * 2, 3) 10 % 3, 4) "10" + 5, 5) "10" - 5, 6) 10 == "10", 7) 10 === "10"',dica:"Preste atenção à precedência de operadores e à conversão implícita de tipos."}]},{id:"estruturas-controle",titulo:"Estruturas de Controle",descricao:"Aprenda a controlar o fluxo de execução do seu código com condicionais e loops.",topicos:[{id:"condicionais",titulo:"Condicionais (if, else, else if)",conteudo:`
          <p>As estruturas condicionais permitem executar diferentes blocos de código dependendo de condições específicas.</p>
          
          <h4>if simples</h4>
          <pre><code>let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}</code></pre>
          <p>O bloco de código dentro do if só será executado se a condição for verdadeira (truthy).</p>
          
          <h4>if...else</h4>
          <pre><code>let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde/noite!");
}</code></pre>
          <p>Se a condição for falsa, o bloco else será executado.</p>
          
          <h4>if...else if...else (múltiplas condições)</h4>
          <pre><code>let hora = 20;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}</code></pre>
          <p>Você pode encadear múltiplas condições com else if.</p>
          
          <h4>Condições aninhadas</h4>
          <pre><code>let idade = 18;
let temCarteira = true;

if (idade >= 18) {
    if (temCarteira) {
        console.log("Pode dirigir.");
    } else {
        console.log("Não pode dirigir. Precisa de carteira.");
    }
} else {
    console.log("Não pode dirigir. Menor de idade.");
}</code></pre>
          <p>É possível aninhar estruturas condicionais, mas isso pode tornar o código menos legível.</p>
          
          <h4>Operadores lógicos em condições</h4>
          <pre><code>let idade = 25;
let temCarteira = true;

// Usando AND (&&)
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir.");
}

// Usando OR (||)
if (idade < 18 || !temCarteira) {
    console.log("Não pode dirigir.");
}</code></pre>
          
          <h4>Avaliação de curto-circuito</h4>
          <pre><code>// Se a primeira condição for falsa, a segunda nem é avaliada
if (false && funcaoQueNaoSeraExecutada()) {
    // Este bloco não será executado
}

// Se a primeira condição for verdadeira, a segunda nem é avaliada
if (true || funcaoQueNaoSeraExecutada()) {
    // Este bloco será executado
}</code></pre>
          
          <h4>Dicas para condicionais:</h4>
          <ul>
            <li>Mantenha as condições simples e legíveis</li>
            <li>Use parênteses para agrupar condições complexas</li>
            <li>Cuidado com comparações de igualdade (== vs ===)</li>
            <li>Lembre-se dos valores falsy em JavaScript</li>
          </ul>
        `},{id:"operador-ternario",titulo:"Operador ternário",conteudo:`
          <p>O operador ternário é uma forma concisa de escrever uma estrutura condicional simples. É como um if...else em uma única linha.</p>
          
          <h4>Sintaxe:</h4>
          <pre><code>condicao ? expressao1 : expressao2</code></pre>
          <p>Se a condição for verdadeira, a expressão1 é avaliada e retornada; caso contrário, a expressão2 é avaliada e retornada.</p>
          
          <h4>Exemplos básicos:</h4>
          <pre><code>// Exemplo 1: Verificar idade
let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor";
console.log(status);  // "Adulto"

// Exemplo 2: Mensagem de saudação
let hora = 10;
let saudacao = (hora < 12) ? "Bom dia" : "Boa tarde/noite";
console.log(saudacao);  // "Bom dia"</code></pre>
          
          <h4>Operadores ternários aninhados:</h4>
          <pre><code>// Verificação de faixa etária
let idade = 15;
let faixa = (idade < 13) ? "Criança" : (idade < 18) ? "Adolescente" : "Adulto";
console.log(faixa);  // "Adolescente"

// Equivalente a:
let faixaEtaria;
if (idade < 13) {
    faixaEtaria = "Criança";
} else if (idade < 18) {
    faixaEtaria = "Adolescente";
} else {
    faixaEtaria = "Adulto";
}</code></pre>
          
          <h4>Usando com template strings:</h4>
          <pre><code>let temperatura = 28;
console.log("Está " + (temperatura > 25 ? "quente" : "agradável") + " hoje.");
// "Está quente hoje."</code></pre>
          
          <h4>Atribuição condicional:</h4>
          <pre><code>// Definir um valor padrão se a variável for undefined ou null
let nome = null;
let nomeExibicao = nome ? nome : "Usuário";
console.log(nomeExibicao);  // "Usuário"

// Forma mais moderna usando operador de coalescência nula (ES2020)
let nomeModerno = nome ?? "Usuário";
console.log(nomeModerno);  // "Usuário"</code></pre>
          
          <h4>Quando usar o operador ternário:</h4>
          <ul>
            <li>Para condicionais simples e expressões curtas</li>
            <li>Quando você precisa atribuir um valor com base em uma condição</li>
            <li>Em template strings para inserção condicional</li>
          </ul>
          
          <h4>Quando evitar o operador ternário:</h4>
          <ul>
            <li>Para lógica complexa com múltiplas operações</li>
            <li>Quando o aninhamento torna o código difícil de ler</li>
            <li>Quando você precisa executar blocos de código maiores</li>
          </ul>
        `},{id:"switch-case",titulo:"Switch case",conteudo:`
          <p>A estrutura switch é usada para selecionar um dos muitos blocos de código a serem executados, baseado em uma expressão.</p>
          
          <h4>Sintaxe básica:</h4>
          <pre><code>switch (expressao) {
    case valor1:
        // código a ser executado
        break;
    case valor2:
        // código a ser executado
        break;
    default:
        // código a ser executado se nenhum caso corresponder
}</code></pre>
          
          <h4>Exemplo simples:</h4>
          <pre><code>let dia = 3;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log(nomeDia);  // "Terça-feira"</code></pre>
          
          <h4>A importância do break:</h4>
          <p>O comando break é usado para sair do switch após um caso ser executado. Sem ele, a execução continua para os próximos casos, independentemente de corresponderem ou não.</p>
          
          <pre><code>let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada");
        // Sem break, continua para o próximo caso
    case 2:
        console.log("Opção 2 selecionada");
        // Sem break, continua para o próximo caso
    case 3:
        console.log("Opção 3 selecionada");
        break;
    default:
        console.log("Opção inválida");
}

// Saída:
// "Opção 2 selecionada"
// "Opção 3 selecionada"</code></pre>
          
          <h4>Agrupando casos:</h4>
          <p>Você pode agrupar casos que compartilham o mesmo código:</p>
          
          <pre><code>let mes = "fevereiro";
let diasNoMes;

switch (mes.toLowerCase()) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        diasNoMes = 31;
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        diasNoMes = 30;
        break;
    case "fevereiro":
        diasNoMes = 28; // Ignorando anos bissextos para simplificar
        break;
    default:
        diasNoMes = "Mês inválido";
}

console.log(mes + " tem " + diasNoMes + " dias.");  // "fevereiro tem 28 dias."</code></pre>
          
          <h4>Expressões no switch:</h4>
          <p>O switch usa comparação estrita (===) entre a expressão e os valores dos casos.</p>
          
          <pre><code>// Isso não funcionará como esperado
let valor = "10";
switch (valor) {
    case 10:  // Não corresponde porque "10" !== 10
        console.log("Número 10");
        break;
    default:
        console.log("Não é o número 10");
}
// Saída: "Não é o número 10"</code></pre>
          
          <h4>Quando usar switch vs if-else:</h4>
          <ul>
            <li><strong>Use switch quando:</strong>
              <ul>
                <li>Você tem múltiplas condições baseadas no mesmo valor</li>
                <li>As comparações são de igualdade (não envolvem >, <, etc.)</li>
                <li>Há muitos caminhos possíveis baseados em um único valor</li>
              </ul>
            </li>
            <li><strong>Use if-else quando:</strong>
              <ul>
                <li>As condições são baseadas em diferentes variáveis</li>
                <li>Você precisa de comparações mais complexas (>, <, >=, etc.)</li>
                <li>Há poucas condições a verificar</li>
              </ul>
            </li>
          </ul>
        `},{id:"loops-for",titulo:"Loops (for, while, do-while)",conteudo:`
          <p>Loops (ou laços) são estruturas que permitem executar um bloco de código repetidamente enquanto uma condição for verdadeira.</p>
          
          <h4>Loop for</h4>
          <p>O loop for é usado quando você sabe antecipadamente quantas vezes deseja executar um bloco de código.</p>
          
          <pre><code>// Sintaxe básica
for (inicialização; condição; incremento) {
    // código a ser repetido
}

// Exemplo: contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Saída: 1, 2, 3, 4, 5

// Exemplo: percorrer um array
const frutas = ["maçã", "banana", "laranja", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída: "maçã", "banana", "laranja", "uva"</code></pre>
          
          <h4>Loop while</h4>
          <p>O loop while executa um bloco de código enquanto uma condição específica for verdadeira. É útil quando você não sabe quantas iterações serão necessárias.</p>
          
          <pre><code>// Sintaxe básica
while (condição) {
    // código a ser repetido
}

// Exemplo: contar até 5
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
// Saída: 1, 2, 3, 4, 5

// Exemplo: loop com condição dinâmica
let numero = 1;
while (numero < 100) {
    console.log(numero);
    numero *= 2;  // Dobra o número a cada iteração
}
// Saída: 1, 2, 4, 8, 16, 32, 64</code></pre>
          
          <h4>Loop do-while</h4>
          <p>Similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa inicialmente.</p>
          
          <pre><code>// Sintaxe básica
do {
    // código a ser repetido
} while (condição);

// Exemplo: contar até 5
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 5);
// Saída: 1, 2, 3, 4, 5

// Exemplo onde a condição é falsa inicialmente
let x = 10;
do {
    console.log("Este bloco será executado uma vez");
} while (x < 5);
// Saída: "Este bloco será executado uma vez"</code></pre>
          
          <h4>Controle de loops: break e continue</h4>
          
          <p><strong>break:</strong> Encerra completamente o loop.</p>
          <pre><code>// Exemplo: parar o loop quando encontrar um número específico
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Sai do loop quando i é 5
    }
    console.log(i);
}
// Saída: 1, 2, 3, 4</code></pre>
          
          <p><strong>continue:</strong> Pula a iteração atual e continua com a próxima.</p>
          <pre><code>// Exemplo: pular números pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Pula para a próxima iteração se i for par
    }
    console.log(i);
}
// Saída: 1, 3, 5, 7, 9</code></pre>
          
          <h4>Loops infinitos</h4>
          <p>Um loop infinito ocorre quando a condição de término nunca se torna falsa. Isso geralmente é um erro e pode travar seu programa.</p>
          
          <pre><code>// Loop infinito (evite isso!)
// for (let i = 1; i > 0; i++) {
//     console.log(i);  // Isso nunca vai parar!
// }

// Loop infinito com break (controlado)
let contador = 1;
while (true) {  // Condição sempre verdadeira
    console.log(contador);
    contador++;
    if (contador > 5) {
        break;  // Saída controlada do loop
    }
}</code></pre>
          
          <h4>Escolhendo o loop certo:</h4>
          <ul>
            <li><strong>for:</strong> Quando você sabe o número exato de iterações</li>
            <li><strong>while:</strong> Quando o número de iterações é desconhecido e depende de uma condição</li>
            <li><strong>do-while:</strong> Quando você precisa executar o código pelo menos uma vez</li>
          </ul>
        `},{id:"break-continue",titulo:"Break e continue",conteudo:`
          <p>As instruções break e continue são usadas para controlar o fluxo de execução dentro de loops, permitindo interromper ou pular iterações.</p>
          
          <h4>Instrução break</h4>
          <p>A instrução break encerra completamente a execução do loop mais interno e transfere o controle para a próxima instrução após o loop.</p>
          
          <h5>Usos comuns do break:</h5>
          <ul>
            <li>Sair de um loop quando uma condição específica é encontrada</li>
            <li>Evitar processamento desnecessário após encontrar o que estava procurando</li>
            <li>Implementar uma saída antecipada de um loop potencialmente longo</li>
          </ul>
          
          <h5>Exemplos de break:</h5>
          <pre><code>// Exemplo 1: Encontrar o primeiro número divisível por 7 em um intervalo
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("Primeiro número divisível por 7: " + i);
        break;  // Sai do loop após encontrar o primeiro número
    }
}

// Exemplo 2: Verificar se um elemento existe em um array
const numeros = [3, 7, 2, 9, 12, 5];
let numeroEncontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 9) {
        console.log("Número 9 encontrado no índice " + i);
        numeroEncontrado = true;
        break;  // Não precisa continuar procurando
    }
}

if (!numeroEncontrado) {
    console.log("Número não encontrado");
}

// Exemplo 3: Break em loops aninhados (sai apenas do loop mais interno)
for (let i = 1; i <= 3; i++) {
    console.log("Loop externo: " + i);
    
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("  Encontrou j = " + j + ", saindo do loop interno");
            break;  // Sai apenas do loop interno
        }
        console.log("  Loop interno: " + j);
    }
}</code></pre>
          
          <h4>Instrução continue</h4>
          <p>A instrução continue pula a iteração atual do loop e passa para a próxima iteração, continuando a execução do loop.</p>
          
          <h5>Usos comuns do continue:</h5>
          <ul>
            <li>Pular elementos que não atendem a certos critérios</li>
            <li>Evitar aninhamento excessivo de condicionais</li>
            <li>Melhorar a legibilidade do código em loops com múltiplas condições</li>
          </ul>
          
          <h5>Exemplos de continue:</h5>
          <pre><code>// Exemplo 1: Imprimir apenas números ímpares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Pula números pares
    }
    console.log("Número ímpar: " + i);
}

// Exemplo 2: Filtrar elementos em um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números maiores que 5:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] <= 5) {
        continue;  // Pula números menores ou iguais a 5
    }
    console.log(numeros[i]);
}

// Exemplo 3: Processamento condicional em um loop
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 5.5 },
    { nome: "Carla", nota: 9.0 },
    { nome: "Daniel", nota: 6.8 }
];

console.log("Alunos aprovados:");
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < 7) {
        continue;  // Pula alunos reprovados
    }
    console.log(alunos[i].nome + " - Nota: " + alunos[i].nota);
}</code></pre>
          
          <h4>Rótulos (Labels) com break e continue</h4>
          <p>Em JavaScript, você pode rotular loops e usar break ou continue com esses rótulos para controlar loops aninhados.</p>
          
          <pre><code>// Exemplo com rótulo e break
loopExterno: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Encontrou i=" + i + ", j=" + j + ", saindo de ambos os loops");
            break loopExterno;  // Sai do loop externo rotulado
        }
        console.log("i=" + i + ", j=" + j);
    }
}

// Exemplo com rótulo e continue
loopExterno: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("Pulando j=" + j + " para i=" + i);
            continue loopExterno;  // Pula para a próxima iteração do loop externo
        }
        console.log("i=" + i + ", j=" + j);
    }
}</code></pre>
          
          <h4>Boas práticas:</h4>
          <ul>
            <li>Use break e continue com moderação para manter o código legível</li>
            <li>Adicione comentários explicando por que você está usando break ou continue</li>
            <li>Considere refatorar código com muitos break/continue em funções separadas</li>
            <li>Use rótulos apenas quando realmente necessário, pois podem tornar o código mais difícil de entender</li>
          </ul>
        `},{id:"for-of-in",titulo:"For...of e for...in",conteudo:`
          <p>JavaScript oferece loops especializados para iterar sobre objetos e coleções: for...of e for...in. Eles simplificam a iteração em comparação com os loops tradicionais.</p>
          
          <h4>Loop for...of</h4>
          <p>Introduzido no ES6, o loop for...of itera sobre valores de objetos iteráveis (arrays, strings, Map, Set, etc.).</p>
          
          <h5>Sintaxe:</h5>
          <pre><code>for (const valor of iteravel) {
    // código a ser executado para cada valor
}</code></pre>
          
          <h5>Exemplos de for...of:</h5>
          <pre><code>// Iterando sobre um array
const frutas = ["maçã", "banana", "laranja", "uva"];

for (const fruta of frutas) {
    console.log(fruta);
}
// Saída: "maçã", "banana", "laranja", "uva"

// Iterando sobre uma string
const texto = "JavaScript";

for (const caractere of texto) {
    console.log(caractere);
}
// Saída: "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"

// Iterando sobre um Set
const conjuntoNumeros = new Set([1, 2, 3, 4, 5]);

for (const numero of conjuntoNumeros) {
    console.log(numero);
}
// Saída: 1, 2, 3, 4, 5

// Iterando sobre um Map
const mapaUsuarios = new Map([
    ["u1", { nome: "Alice", idade: 25 }],
    ["u2", { nome: "Bob", idade: 30 }]
]);

for (const entrada of mapaUsuarios) {
    console.log(entrada); // entrada é um array [chave, valor]
}
// Saída: ["u1", {nome: "Alice", idade: 25}], ["u2", {nome: "Bob", idade: 30}]

// Desestruturando entradas do Map
for (const [id, usuario] of mapaUsuarios) {
    console.log(id + ": " + usuario.nome + ", " + usuario.idade + " anos");
}
// Saída: "u1: Alice, 25 anos", "u2: Bob, 30 anos"</code></pre>
          
          <h4>Loop for...in</h4>
          <p>O loop for...in itera sobre as propriedades enumeráveis de um objeto (incluindo propriedades herdadas da cadeia de protótipos).</p>
          
          <h5>Sintaxe:</h5>
          <pre><code>for (const propriedade in objeto) {
    // código a ser executado para cada propriedade
}</code></pre>
          
          <h5>Exemplos de for...in:</h5>
          <pre><code>// Iterando sobre um objeto
const pessoa = {
    nome: "Carlos",
    idade: 28,
    profissao: "Desenvolvedor"
};

for (const prop in pessoa) {
    console.log(prop + ": " + pessoa[prop]);
}
// Saída: "nome: Carlos", "idade: 28", "profissao: Desenvolvedor"

// Verificando se a propriedade pertence ao objeto (não ao protótipo)
for (const prop in pessoa) {
    if (pessoa.hasOwnProperty(prop)) {
        console.log("Propriedade própria: " + prop);
    }
}

// Usando for...in com arrays (não recomendado)
const numeros = [10, 20, 30];
numeros.propriedadeCustom = "teste"; // Propriedade não numérica

for (const indice in numeros) {
    console.log(indice + ": " + numeros[indice]);
}
// Saída: "0: 10", "1: 20", "2: 30", "propriedadeCustom: teste"</code></pre>
          
          <h4>Diferenças importantes entre for...of e for...in</h4>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
              <th style="padding: 8px; text-align: left;">Característica</th>
              <th style="padding: 8px; text-align: left;">for...of</th>
              <th style="padding: 8px; text-align: left;">for...in</th>
            </tr>
            <tr>
              <td style="padding: 8px;">Itera sobre</td>
              <td style="padding: 8px;">Valores de objetos iteráveis</td>
              <td style="padding: 8px;">Propriedades enumeráveis de objetos</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Uso com arrays</td>
              <td style="padding: 8px;">Ideal (itera sobre valores)</td>
              <td style="padding: 8px;">Não recomendado (itera sobre índices e propriedades)</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Uso com objetos</td>
              <td style="padding: 8px;">Não funciona diretamente (objetos não são iteráveis por padrão)</td>
              <td style="padding: 8px;">Ideal (itera sobre propriedades)</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Ordem de iteração</td>
              <td style="padding: 8px;">Segue a ordem de inserção (para a maioria dos iteráveis)</td>
              <td style="padding: 8px;">Não garante ordem específica</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Inclui protótipo</td>
              <td style="padding: 8px;">Não</td>
              <td style="padding: 8px;">Sim (a menos que verificado com hasOwnProperty)</td>
            </tr>
          </table>
          
          <h4>Quando usar cada um:</h4>
          <ul>
            <li><strong>Use for...of quando:</strong>
              <ul>
                <li>Você precisa iterar sobre valores em arrays, strings, Map, Set</li>
                <li>Você quer uma sintaxe mais limpa para iteração de coleções</li>
                <li>Você precisa de uma ordem de iteração previsível</li>
              </ul>
            </li>
            <li><strong>Use for...in quando:</strong>
              <ul>
                <li>Você precisa iterar sobre as propriedades de um objeto</li>
                <li>Você precisa acessar os nomes das propriedades (não apenas os valores)</li>
                <li>Você está trabalhando com objetos que não são iteráveis</li>
              </ul>
            </li>
          </ul>
          
          <h4>Tornando objetos iteráveis para for...of</h4>
          <pre><code>const pessoa = {
    nome: "Ana",
    idade: 30,
    cidade: "São Paulo",
    [Symbol.iterator]: function* () {
        yield this.nome;
        yield this.idade;
        yield this.cidade;
    }
};

// Agora podemos usar for...of com o objeto pessoa
for (const valor of pessoa) {
    console.log(valor);
}
// Saída: "Ana", 30, "São Paulo"</code></pre>
        `}],exercicios:[{id:"ex-3-1",titulo:"Condicionais",enunciado:'Escreva um programa que verifica a idade de uma pessoa e retorna uma mensagem diferente para cada faixa etária: Menor de 18: "Menor de idade", Entre 18 e 65: "Adulto", Acima de 65: "Idoso".',dica:"Use if, else if e else para verificar as diferentes faixas etárias."},{id:"ex-3-2",titulo:"Switch Case",enunciado:"Crie uma função que receba o nome de um mês e retorne o número de dias desse mês (considere um ano não bissexto).",dica:"Use switch case para verificar cada mês e retornar o número correto de dias."},{id:"ex-3-3",titulo:"Loops",enunciado:'Escreva um programa que imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz".',dica:"Use um loop for e condicionais para verificar se o número é múltiplo de 3, 5 ou ambos."}]}],hm={"ex-1-1":`
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Introdução ao JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Minha primeira página com JavaScript&lt;/h1&gt;
    
    &lt;!-- Método 1: JavaScript interno --&gt;
    &lt;script&gt;
        alert("Olá, mundo!");
    &lt;/script&gt;
    
    &lt;!-- Método 2: JavaScript externo --&gt;
    &lt;!-- &lt;script src="script.js"&gt;&lt;/script&gt; --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  `,"ex-1-2":`
<pre><code>// Obtendo a data atual
const dataAtual = new Date();

// Imprimindo no console
console.log("Meu nome: Seu Nome");
console.log("Data atual:", dataAtual.toLocaleDateString('pt-BR'));</code></pre>
  `,"ex-2-1":`
<pre><code>// Usando var (evite usar em código moderno)
var nome = "Maria";

// Usando let (para valores que podem mudar)
let idade = 25;

// Usando const (para valores que não mudam)
const PI = 3.14159;

// Diferentes tipos de dados
const texto = "JavaScript é incrível";
const numero = 42;
const ehVerdade = true;
const listaNumeros = [1, 2, 3, 4, 5];
const pessoa = { nome: "João", idade: 30 };

// Imprimindo os tipos
console.log(typeof texto);      // string
console.log(typeof numero);     // number
console.log(typeof ehVerdade);  // boolean
console.log(typeof listaNumeros); // object (arrays são objetos em JavaScript)
console.log(typeof pessoa);     // object
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (isso é considerado um bug na linguagem)</code></pre>
  `,"ex-2-2":`
<pre><code>// String para número
const stringNumero = "42";
const numeroConvertido1 = Number(stringNumero);
const numeroConvertido2 = parseInt(stringNumero);
const numeroConvertido3 = +stringNumero;

console.log(numeroConvertido1); // 42
console.log(numeroConvertido2); // 42
console.log(numeroConvertido3); // 42

// Número para string
const numero = 42;
const stringConvertida1 = String(numero);
const stringConvertida2 = numero.toString();
const stringConvertida3 = \`\${numero}\`;

console.log(stringConvertida1); // "42"
console.log(stringConvertida2); // "42"
console.log(stringConvertida3); // "42"

// String para boolean
const stringBoolean = "true";
const booleanConvertido = Boolean(stringBoolean);

console.log(booleanConvertido); // true (qualquer string não vazia é true)

// Número para boolean
const zero = 0;
const booleanZero = Boolean(zero);

console.log(booleanZero); // false (0 é falsy em JavaScript)</code></pre>
  `,"ex-2-3":`
<pre><code>console.log(10 + 5 * 2);    // 20 (multiplicação tem precedência)
console.log((10 + 5) * 2);  // 30 (parênteses têm precedência)
console.log(10 % 3);        // 1 (resto da divisão)
console.log("10" + 5);      // "105" (concatenação de string)
console.log("10" - 5);      // 5 (conversão implícita para número)
console.log(10 == "10");    // true (comparação com conversão de tipo)
console.log(10 === "10");   // false (comparação estrita, sem conversão)</code></pre>
  `,"ex-3-1":`
<pre><code>function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(15)); // "Menor de idade"
console.log(verificarIdade(30)); // "Adulto"
console.log(verificarIdade(70)); // "Idoso"

// Usando operador ternário para o mesmo problema
function verificarIdadeTernario(idade) {
    return idade < 18 ? "Menor de idade" : (idade <= 65 ? "Adulto" : "Idoso");
}</code></pre>
  `,"ex-3-2":`
<pre><code>function diasNoMes(mes) {
    const mesLowerCase = mes.toLowerCase();
    
    switch (mesLowerCase) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            return 31;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            return 30;
        case "fevereiro":
            return 28;
        default:
            return "Mês inválido";
    }
}

console.log(diasNoMes("Fevereiro")); // 28
console.log(diasNoMes("julho"));     // 31
console.log(diasNoMes("Abril"));     // 30
console.log(diasNoMes("Banana"));    // "Mês inválido"</code></pre>
  `,"ex-3-3":`
<pre><code>// Usando for
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Usando while
let j = 1;
while (j <= 100) {
    let output = "";
    if (j % 3 === 0) output += "Fizz";
    if (j % 5 === 0) output += "Buzz";
    
    console.log(output || j);
    j++;
}</code></pre>
  `},vm=()=>C.jsxs("div",{className:"home-container",children:[C.jsx("h1",{children:"Curso de JavaScript"}),C.jsx("p",{className:"home-description",children:"Bem-vindo ao curso completo de JavaScript! Este curso foi desenvolvido para ajudar você a aprender JavaScript do zero, com conceitos teóricos e exercícios práticos para fixação."}),C.jsx("div",{className:"modules-grid",children:tl.map(i=>C.jsxs("div",{className:"module-card",children:[C.jsx("h2",{children:i.titulo}),C.jsx("p",{children:i.descricao}),C.jsx(Be,{to:`/modulo/${i.id}`,className:"module-button",children:"Iniciar Módulo"})]},i.id))})]}),gm=()=>{const{moduloId:i}=ia(),s=bo(),u=tl.find(f=>f.id===i);return u?C.jsxs("div",{className:"module-container",children:[C.jsxs("div",{className:"module-header",children:[C.jsx("button",{className:"back-button",onClick:()=>s("/"),children:"← Voltar para Início"}),C.jsx("h1",{children:u.titulo}),C.jsx("p",{className:"module-description",children:u.descricao})]}),C.jsxs("div",{className:"content-navigation",children:[C.jsxs("div",{className:"sidebar",children:[C.jsx("h3",{children:"Conteúdo"}),C.jsx("ul",{children:u.topicos.map(f=>C.jsx("li",{children:C.jsx(Be,{to:`/modulo/${i}/topico/${f.id}`,children:f.titulo})},f.id))}),C.jsx("h3",{children:"Exercícios"}),C.jsx("ul",{children:u.exercicios.map(f=>C.jsx("li",{children:C.jsx(Be,{to:`/modulo/${i}/exercicio/${f.id}`,children:f.titulo})},f.id))})]}),C.jsxs("div",{className:"main-content",children:[C.jsx("h2",{children:"Selecione um tópico ou exercício para começar"}),C.jsx("p",{children:"Escolha um dos tópicos ou exercícios no menu lateral para iniciar seus estudos."})]})]})]}):C.jsx("div",{className:"error-message",children:"Módulo não encontrado!"})},ym=()=>{const{moduloId:i,topicoId:s}=ia(),u=bo(),f=tl.find(y=>y.id===i);if(!f)return C.jsx("div",{className:"error-message",children:"Módulo não encontrado!"});const d=f.topicos.find(y=>y.id===s);if(!d)return C.jsx("div",{className:"error-message",children:"Tópico não encontrado!"});const m=f.topicos.findIndex(y=>y.id===s),S=m>0?f.topicos[m-1]:null,k=m<f.topicos.length-1?f.topicos[m+1]:null;return C.jsxs("div",{className:"module-container",children:[C.jsxs("div",{className:"module-header",children:[C.jsxs("button",{className:"back-button",onClick:()=>u(`/modulo/${i}`),children:["← Voltar para ",f.titulo]}),C.jsx("h1",{children:f.titulo})]}),C.jsxs("div",{className:"content-navigation",children:[C.jsxs("div",{className:"sidebar",children:[C.jsx("h3",{children:"Conteúdo"}),C.jsx("ul",{children:f.topicos.map(y=>C.jsx("li",{className:y.id===s?"active":"",children:C.jsx(Be,{to:`/modulo/${i}/topico/${y.id}`,children:y.titulo})},y.id))}),C.jsx("h3",{children:"Exercícios"}),C.jsx("ul",{children:f.exercicios.map(y=>C.jsx("li",{children:C.jsx(Be,{to:`/modulo/${i}/exercicio/${y.id}`,children:y.titulo})},y.id))})]}),C.jsxs("div",{className:"main-content",children:[C.jsx("h2",{children:d.titulo}),C.jsx("div",{className:"topic-content",dangerouslySetInnerHTML:{__html:d.conteudo}}),C.jsxs("div",{className:"navigation-buttons",children:[S&&C.jsxs(Be,{to:`/modulo/${i}/topico/${S.id}`,className:"prev-button",children:["← ",S.titulo]}),k&&C.jsxs(Be,{to:`/modulo/${i}/topico/${k.id}`,className:"next-button",children:[k.titulo," →"]})]})]})]})]})},xm=()=>{const{moduloId:i,exercicioId:s}=ia(),u=bo(),[f,d]=Sc.useState(!1),m=tl.find(R=>R.id===i);if(!m)return C.jsx("div",{className:"error-message",children:"Módulo não encontrado!"});const S=m.exercicios.find(R=>R.id===s);if(!S)return C.jsx("div",{className:"error-message",children:"Exercício não encontrado!"});const k=m.exercicios.findIndex(R=>R.id===s),y=k>0?m.exercicios[k-1]:null,E=k<m.exercicios.length-1?m.exercicios[k+1]:null;return C.jsxs("div",{className:"module-container",children:[C.jsxs("div",{className:"module-header",children:[C.jsxs("button",{className:"back-button",onClick:()=>u(`/modulo/${i}`),children:["← Voltar para ",m.titulo]}),C.jsx("h1",{children:m.titulo})]}),C.jsxs("div",{className:"content-navigation",children:[C.jsxs("div",{className:"sidebar",children:[C.jsx("h3",{children:"Conteúdo"}),C.jsx("ul",{children:m.topicos.map(R=>C.jsx("li",{children:C.jsx(Be,{to:`/modulo/${i}/topico/${R.id}`,children:R.titulo})},R.id))}),C.jsx("h3",{children:"Exercícios"}),C.jsx("ul",{children:m.exercicios.map(R=>C.jsx("li",{className:R.id===s?"active":"",children:C.jsx(Be,{to:`/modulo/${i}/exercicio/${R.id}`,children:R.titulo})},R.id))})]}),C.jsx("div",{className:"main-content",children:C.jsxs("div",{className:"exercise-container",children:[C.jsx("h2",{children:S.titulo}),C.jsxs("div",{className:"exercise-description",children:[C.jsx("h3",{children:"Enunciado:"}),C.jsx("p",{children:S.enunciado}),S.dica&&C.jsxs("div",{className:"exercise-hint",children:[C.jsx("h4",{children:"Dica:"}),C.jsx("p",{children:S.dica})]})]}),C.jsxs("div",{className:"exercise-workspace",children:[C.jsx("h3",{children:"Área de Trabalho:"}),C.jsx("textarea",{className:"code-editor",placeholder:"Escreva seu código aqui...",rows:10}),C.jsx("div",{className:"exercise-actions",children:C.jsx("button",{className:"show-answer-button",onClick:()=>d(!f),children:f?"Ocultar Resposta":"Mostrar Resposta"})}),f&&s&&C.jsxs("div",{className:"exercise-answer",children:[C.jsx("h3",{children:"Resposta:"}),C.jsx("div",{dangerouslySetInnerHTML:{__html:hm[s]}})]})]}),C.jsxs("div",{className:"navigation-buttons",children:[y&&C.jsxs(Be,{to:`/modulo/${i}/exercicio/${y.id}`,className:"prev-button",children:["← ",y.titulo]}),E&&C.jsxs(Be,{to:`/modulo/${i}/exercicio/${E.id}`,className:"next-button",children:[E.titulo," →"]})]})]})})]})]})};function wm(){return C.jsx(lm,{children:C.jsxs("div",{className:"app",children:[C.jsx("header",{className:"app-header",children:C.jsxs("div",{className:"header-content",children:[C.jsxs(Be,{to:"/",className:"logo",children:[C.jsx("span",{className:"logo-text",children:"JS"}),C.jsx("span",{className:"logo-subtitle",children:"Estudos"})]}),C.jsxs("nav",{className:"main-nav",children:[C.jsx(Be,{to:"/",children:"Início"}),C.jsx("a",{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:"MDN Docs"})]})]})}),C.jsx("main",{className:"app-content",children:C.jsxs(Mp,{children:[C.jsx(zr,{path:"/",element:C.jsx(vm,{})}),C.jsx(zr,{path:"/modulo/:moduloId",element:C.jsx(gm,{})}),C.jsx(zr,{path:"/modulo/:moduloId/topico/:topicoId",element:C.jsx(ym,{})}),C.jsx(zr,{path:"/modulo/:moduloId/exercicio/:exercicioId",element:C.jsx(xm,{})})]})}),C.jsx("footer",{className:"app-footer",children:C.jsx("div",{className:"footer-content",children:C.jsxs("p",{children:["© ",new Date().getFullYear()," Curso de JavaScript - Todos os direitos reservados"]})})})]})})}Wf.createRoot(document.getElementById("root")).render(C.jsx(Sc.StrictMode,{children:C.jsx(wm,{})}));
